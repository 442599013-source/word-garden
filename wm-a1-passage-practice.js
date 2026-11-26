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
    header.append(make('h2', passage.title));
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
    return {element,showMeanings(open){lines.forEach(show=>show(open))}};
  }

  function mount({host, transcriptHost, passage, skill, onComplete, onNext, entryArea}) {
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
          for (const i of selected) choices[i].dataset.answerResult = choices[i].dataset.state = 'correct';
          succeed();
        } else {
          hadWrong = true;
          for (const i of selected) choices[i].dataset.answerResult = item.correct.includes(i) ? 'correct' : 'wrong';
          feedback.textContent = 'Read the passage and try again.';
        }
      }
      const choices = item.options.map((text, i)=>{
        const option = button(text, ()=>{
          if (answered) return;
          choices.forEach(node=>{delete node.dataset.state;delete node.dataset.answerResult;});
          if (item.correct.length === 1) selected.clear();
          if (selected.has(i)) selected.delete(i);
          else selected.add(i);
          choices.forEach((node, id)=>node.setAttribute('aria-pressed',String(selected.has(id))));
          if (item.correct.length === 1) judgeChoice();
        },'answer rs-choice');
        option.setAttribute('aria-pressed', 'false');
        if(item.kind==='meaning')option.lang='zh-CN';
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

    function checkEntry(text, final) {
      if (answered || !normalize(text)) return;
      const actual = normalize(text), answer = normalize(expected);
      if (matches(text)) succeed();
      else if (final && answer.startsWith(actual + ' ') && skill==='speaking') feedback.textContent = 'Only part of the answer was received. Try again or type the rest.';
      else if (final) {
        hadWrong = true;
        feedback.textContent = 'Check the passage and try again.';
      } else feedback.textContent = '';
    }

    function matches(text) {
      const value=normalize(text), answer=normalize(expected);
      if(skill==='writing'&&index===0&&passage.id?.startsWith('a1-passage-')){
        return value.replace(/\band\b/g,'').replace(/\s/g,'')==='aeiou';
      }
      return value===answer||(skill==='speaking'&&!!window.WMSpeechMatch?.equivalent(text,expected));
    }
    function drawWriting([prompt, answer]) {
      question.textContent = prompt;
      expected = answer;
      answerArea.append(make('p', index === 0 && passage.id?.startsWith('a1-passage-') ? 'Write the vowel letters.' : 'Write the full answer from the passage.'));
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
      matches,
      checkEntry,
      clearFeedback(){if(!answered)feedback.textContent=''},
      showMeanings:transcript.showMeanings,
      destroy(){clearTimeout(timer);panel.remove();transcript.element.remove()}
    };
  }

  window.WMA1PassagePractice = {mount,buildTranscript};
})();
