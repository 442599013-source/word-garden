(() => {
  'use strict';

  function make(tag, text, name) {
    const element = document.createElement(tag);
    if (text) element.textContent = text;
    if (name) element.className = name;
    return element;
  }

  function button(text, action, name) {
    const control = make('button', text, name);
    control.type = 'button';
    control.onclick = action;
    return control;
  }

  function buildTranscript(passage) {
    const element = make('div', '', 'a1-passage-transcript');
    const header = make('header', '', 'a1-passage-header');
    const controls = make('div', '', 'a1-passage-controls');
    header.append(make('h2', passage.title), controls);
    element.append(header);
    const lines = passage.lines.map(([en, zh], i) => {
      const turn = make('div', '', 'a1-passage-turn');
      const meaning = make('p', zh, 'a1-passage-meaning');
      meaning.lang = 'zh-CN';
      const spoken = button(en, () => show(meaning.hidden), 'a1-passage-line');
      spoken.lang = 'en-GB';
      function show(open) {
        meaning.hidden = !open;
        spoken.setAttribute('aria-expanded',String(open));
      }
      show(false);
      turn.append(make('strong', i % 2 ? 'Answer' : 'Question'), spoken, meaning);
      element.append(turn);
      return show;
    });
    return {element,controls,showMeanings(open){lines.forEach(show=>show(open))}};
  }

  function mount({host, transcriptHost, passage, skill, onManual, onComplete, onNext, entryArea}) {
    const panel = make('section', '', 'a1-passage-practice');
    const transcript = buildTranscript(passage);
    const task = make('section', '', 'a1-passage-task');
    const counter = make('p', '', 'a1-passage-count');
    const question = make('h3');
    const answerArea = make('div', '', 'a1-passage-answer');
    const feedback = make('p', '', 'a1-passage-feedback');
    feedback.setAttribute('role', 'status');
    task.append(counter, question, answerArea, feedback);
    transcriptHost.append(transcript.element);
    panel.append(task);
    host.append(panel);

    const questions = passage[skill];
    const normalize = text => String(text).toLowerCase()
      .replace(/[\p{P}\p{S}]/gu, ' ').trim().replace(/\s+/g, ' ');
    let index = 0, answered = false, hadWrong = false, timer;
    let expected = '';
    function succeed() {
      if (answered) return;
      answered = true;
      feedback.textContent = '✓ Correct!';
      task.dataset.state = 'correct';
      answerArea.querySelectorAll('button').forEach(node=>node.disabled=true);
      if (entryArea) entryArea.dataset.state = 'correct';
      if (index === questions.length - 1) {
        onComplete(hadWrong);
      } else {
        void window.WMStudySound?.ding();
        timer = setTimeout(() => {
          onNext?.();
          index++;
          draw();
          question.focus({preventScroll:true});
        }, 850);
      }
    }

    function drawReading(item) {
      question.textContent = item.prompt;
      const selected = new Set();
      function judgeChoice() {
        if (answered || !selected.size) return;
        const correct = selected.size === item.correct.length && item.correct.every(i=>selected.has(i));
        if (correct) {
          for (const i of selected) choices[i].dataset.state = 'correct';
          succeed();
        } else {
          hadWrong = true;
          for (const i of selected) choices[i].dataset.state = 'wrong';
          feedback.textContent = 'Read the passage and try again.';
        }
      }
      const choices = item.options.map((text, i)=>{
        const option = button(text, ()=>{
          if (answered) return;
          choices.forEach(node=>delete node.dataset.state);
          if (item.correct.length === 1) selected.clear();
          if (selected.has(i)) selected.delete(i);
          else selected.add(i);
          choices.forEach((node, id)=>node.setAttribute('aria-pressed',String(selected.has(id))));
          if (item.correct.length === 1) judgeChoice();
        },'answer rs-choice');
        option.setAttribute('aria-pressed', 'false');
        return option;
      });
      answerArea.append(make('p', item.correct.length > 1 ? 'Choose all that apply.' : 'Choose one answer.'), ...choices);
      if (item.correct.length > 1) answerArea.append(button('Check answers',judgeChoice,'a1-passage-check'));
    }

    function drawSpeaking(lineIndex) {
      question.textContent = passage.lines[lineIndex][0];
      expected = passage.lines[lineIndex + 1][0];
      answerArea.append(make('p','Say or type the answer from the passage.'));
    }

    function checkSpeaking(text, final) {
      if (answered || !normalize(text)) return;
      const actual = normalize(text), answer = normalize(expected);
      if (actual === answer || window.WMSpeechMatch?.equivalent(text, expected)) succeed();
      else if (final && answer.startsWith(actual + ' ')) feedback.textContent = 'Only part of the answer was received. Try again or type the rest.';
      else if (final) {
        hadWrong = true;
        feedback.textContent = 'Check the passage and try again.';
      } else feedback.textContent = '';
    }

    function drawWriting([prompt, answer]) {
      question.textContent = prompt;
      answerArea.append(make('p', index === 0 ? 'Write the vowel letters.' : 'Write the full answer from the passage.'));
      drawHandwriting(answer, index === 0);
    }

    function drawHandwriting(answer, lettersOnly) {
      const pad = make('canvas', '', 'a1-passage-pad');
      pad.width = 960;
      pad.height = lettersOnly ? 150 : 260;
      pad.setAttribute('aria-label', 'Handwriting area');
      const ctx = pad.getContext('2d');
      let pointer = null, hasInk = false;
      if (ctx) {
        ctx.strokeStyle = '#29213a';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        function position(e) {
          const box = pad.getBoundingClientRect();
          return [(e.clientX-box.left)*pad.width/box.width,(e.clientY-box.top)*pad.height/box.height];
        }
        pad.onpointerdown = e=>{
          if (pointer !== null || e.button !== 0) return;
          if (answered || !ctx) return;
          onManual();
          pointer = e.pointerId;
          pad.setPointerCapture(pointer);
          ctx.beginPath();
          const [x,y] = position(e);
          ctx.moveTo(x,y);
          ctx.lineTo(x+.1,y+.1);
          ctx.stroke();
          hasInk = true;
        };
        pad.onpointermove = e=>{
          if (pointer !== e.pointerId) return;
          ctx.lineTo(...position(e));
          ctx.stroke();
        };
        pad.onpointerup = pad.onpointercancel = pad.onlostpointercapture = e=>{
          if (pointer === e.pointerId) pointer = null;
        };
      }
      const reference = make('p', '', 'a1-passage-reference');
      reference.hidden = true;
      const acknowledge = button('My answer matches', succeed);
      acknowledge.hidden = true;
      const clear = button('Clear', ()=>{
        ctx?.clearRect(0,0,pad.width,pad.height);
        hasInk = false;
        reference.hidden = acknowledge.hidden = true;
        feedback.textContent = '';
      });
      const check = button('Check the passage answer', ()=>{
        if (!hasInk) {
          feedback.textContent = 'Write your answer first.';
          return;
        }
        reference.textContent = answer;
        reference.hidden = acknowledge.hidden = false;
        feedback.textContent = '对照你手写的答案。若有遗漏，请Clear。';
      });
      answerArea.append(pad, clear, check, reference, acknowledge);
      if (!ctx) {
        pad.hidden = clear.hidden = check.hidden = true;
        const field = make('textarea');
        field.setAttribute('aria-label','Type your answer');
        answerArea.append(field,button('Check answer',()=>{
          onManual();
          if(normalize(field.value)===normalize(answer))succeed();
          else {hadWrong=true;feedback.textContent='Check the passage and try again.';}
        }));
      }
    }

    function draw() {
      answered = false;
      expected = '';
      delete task.dataset.state;
      if (entryArea) delete entryArea.dataset.state;
      question.lang = 'en-GB';
      question.tabIndex = -1;
      answerArea.replaceChildren();
      feedback.textContent = '';
      counter.textContent = 'Question ' + (index+1) + ' / ' + questions.length;
      const item = questions[index];
      if (skill === 'reading') drawReading(item);
      else if (skill === 'speaking') drawSpeaking(item);
      else drawWriting(item);
    }

    draw();
    return {
      get expected(){return expected},
      get answered(){return answered},
      matches(text){return normalize(text)===normalize(expected)||!!window.WMSpeechMatch?.equivalent(text,expected)},
      checkSpeaking,
      clearFeedback(){if(!answered)feedback.textContent=''},
      controls:transcript.controls,
      showMeanings:transcript.showMeanings,
      destroy(){clearTimeout(timer);panel.remove();transcript.element.remove()}
    };
  }

  window.WMA1PassagePractice = {mount,buildTranscript};
})();
