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

  function mount({host, passage, skill, mic, onComplete}) {
    const panel = make('section', '', 'a1-passage-practice');
    const transcript = make('section', '', 'a1-passage-transcript');
    transcript.append(make('h2', passage.titleZh));
    for (const [i, [en, zh]] of passage.lines.entries()) {
      const turn = make('div', '', 'a1-passage-turn');
      const spoken = make('p', en);
      spoken.lang = 'en-GB';
      turn.append(make('strong', i % 2 ? '回答' : '提问'), spoken, make('p', zh));
      transcript.append(turn);
    }

    const task = make('section', '', 'a1-passage-task');
    const counter = make('p', '', 'a1-passage-count');
    const question = make('h3');
    const answerArea = make('div', '', 'a1-passage-answer');
    const feedback = make('p', '', 'a1-passage-feedback');
    feedback.setAttribute('role', 'status');
    task.append(counter, question, answerArea, feedback);
    panel.append(transcript, task);
    host.append(panel);

    const questions = passage[skill];
    const normalize = text => String(text).toLowerCase()
      .replace(/[\p{P}\p{S}]/gu, ' ').trim().replace(/\s+/g, ' ');
    let index = 0, answered = false, hadWrong = false;
    let expected = '';
    function succeed() {
      if (answered) return;
      answered = true;
      feedback.textContent = '✓ 正确';
      answerArea.querySelectorAll('button').forEach(node=>node.disabled=true);
      if (index === questions.length - 1) {
        onComplete(hadWrong);
      } else {
        const next = button('下一题', ()=>{
          index++;
          draw();
          question.focus({preventScroll:true});
        });
        answerArea.append(next);
      }
    }

    function drawReading(item) {
      question.textContent = item.prompt;
      const selected = new Set();
      const choices = item.options.map((text, i)=>{
        const option = button(text, ()=>{
          if (selected.has(i)) selected.delete(i);
          else {
            if (item.correct.length === 1) {
              selected.clear();
              choices.forEach(node=>node.setAttribute('aria-pressed','false'));
            }
            selected.add(i);
          }
          option.setAttribute('aria-pressed',String(selected.has(i)));
        },'answer rs-choice');
        option.setAttribute('aria-pressed', 'false');
        return option;
      });
      answerArea.append(make('p', item.correct.length > 1 ? '可选多项。' : '请选择一项。'), ...choices,
        button('提交答案', ()=>{
          if (selected.size === item.correct.length && item.correct.every(i=>selected.has(i))) succeed();
          else if (selected.size) {
            hadWrong = true;
            feedback.textContent = '请再读一次短文，然后重新选择。';
          } else feedback.textContent = '请先选择答案。';
        }));
    }

    function drawSpeaking(lineIndex) {
      question.lang = 'en-GB';
      question.textContent = passage.lines[lineIndex][0];
      expected = passage.lines[lineIndex + 1][0];
      mic.disabled = false;
      answerArea.append(make('p','点麦克风，用短文里的回答作答。'), mic);
      const recognized = make('p');
      recognized.setAttribute('role','status');
      answerArea.append(recognized);
      receive = (text, raw) => {
        if (answered) return;
        recognized.textContent = '听到：' + raw;
        if (normalize(raw) === normalize(expected) || normalize(text) === normalize(expected)) succeed();
        else {
          hadWrong = true;
          feedback.textContent = '请对照原文，用完整的原句再回答一次。';
        }
      };
    }

    function drawWriting([prompt, answer]) {
      question.textContent = prompt;
      answerArea.append(make('p', index === 0 ? '在下方手写元音字母。' : '在下方手写完整英文句子。'));
      const pad = make('canvas', '', 'a1-passage-pad');
      pad.width = 960;
      pad.height = index === 0 ? 150 : 260;
      pad.setAttribute('aria-label', '手写答案区');
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
      const acknowledge = button('我写对了', succeed);
      acknowledge.hidden = true;
      const clear = button('清空重写', ()=>{
        ctx?.clearRect(0,0,pad.width,pad.height);
        hasInk = false;
        reference.hidden = acknowledge.hidden = true;
        feedback.textContent = '';
      });
      const check = button('核对原文答案', ()=>{
        if (!hasInk && ctx) {
          feedback.textContent = '请先在手写区作答。';
          return;
        }
        reference.textContent = answer;
        reference.hidden = acknowledge.hidden = false;
        feedback.textContent = '对照你手写的答案。若有遗漏，请清空重写。';
      });
      answerArea.append(pad, clear, check, reference, acknowledge);
    }

    let receive = null;
    function draw() {
      answered = false;
      expected = '';
      receive = null;
      question.lang = 'zh-CN';
      question.tabIndex = -1;
      answerArea.replaceChildren();
      feedback.textContent = '';
      counter.textContent = '第 ' + (index+1) + ' / ' + questions.length + ' 题';
      const item = questions[index];
      if (skill === 'reading') drawReading(item);
      else if (skill === 'speaking') drawSpeaking(item);
      else drawWriting(item);
    }

    draw();
    return {get expected(){return expected},speech(text,raw){receive?.(text,raw)},
      destroy(){panel.remove()}};
  }

  window.WMA1PassagePractice = {mount};
})();
