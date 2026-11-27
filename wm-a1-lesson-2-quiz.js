(() => {
  'use strict';
  const key='goldy-a1-first-sounds-2:onset-assessment';
  function makeQuestions(){
    const words=WMA1Lesson2.words,onsets=WMA1Lesson2Onsets.onsets;
    const sounds=new Map(WMA1Lesson.sounds.map(sound=>[sound.ipa,sound]));
    const byLetter=new Map(),bySound=new Map();
    for(const word of words){
      const letter=word.en[0].toUpperCase(),ipa=onsets.get(word.en);
      if(!byLetter.has(letter))byLetter.set(letter,new Map());
      if(!byLetter.get(letter).has(ipa))byLetter.get(letter).set(ipa,word);
      if(!bySound.has(ipa))bySound.set(ipa,[]);
      bySound.get(ipa).push(word.en);
    }
    const questions=[],labels={vowel:'元音音素',consonant:'辅音音素'};
    for(const [ipa,found] of bySound){
      const answers=found.slice(0,3);
      const distractors=words.filter(word=>onsets.get(word.en)!==ipa)
        .sort((a,b)=>Number(b.en[0]===answers[0][0])-Number(a.en[0]===answers[0][0]))
        .slice(0,3).map(word=>word.en);
      questions.push({
        id:'word:'+ipa,audio:sounds.get(ipa).id,
        prompt:'听首音 /'+ipa+'/。以下哪些本课单词以这个音开头？',
        choices:[...answers,...distractors],
        answers
      });
    }
    for(const [letter,variants] of [...byLetter].sort(([a],[b])=>a.localeCompare(b))){
      if(variants.size<2)continue;
      const alternatives=[...variants.keys()];
      for(const [ipa,word] of variants){
        questions.push({
          id:'kind:'+letter+':'+ipa,audio:word.id,word,
          prompt:'这个词的首字母是 '+letter+'。听整词，首音属于哪一类？',
          choices:Object.values(labels),answers:[labels[sounds.get(ipa).group]]
        },{
          id:'sound:'+letter+':'+ipa,audio:word.id,word,
          prompt:'这个词的首字母是 '+letter+'。听整词，具体是哪个音素开头？',
          choices:alternatives.map(sound=>'/'+sound+'/'),answers:['/'+ipa+'/']
        });
      }
    }
    return questions;
  }
  const questions=makeQuestions();
  const signature=q=>JSON.stringify([q.prompt,q.audio,q.answers,q.choices]);
  function read(){
    try{return JSON.parse(localStorage.getItem(key)||'{}')||{}}
    catch{return {}}
  }
  const passed=(record,q)=>record[q.id]===signature(q);
  function complete(){
    const record=read();
    return questions.length>0&&questions.every(q=>passed(record,q));
  }
  function mount(root,{control,stop}){
    const node=(tag,text,cls)=>{
      const el=document.createElement(tag);
      if(text)el.textContent=text;
      if(cls)el.className=cls;
      return el;
    };
    function button(text,action){
      const el=node('button',text,'a1-button');el.type='button';el.onclick=action;return el;
    }
    const next=WMClassroomCatalog.lessons.find(lesson=>lesson.number===WMA1Lesson2.number+1);
    function nextLink(){
      const link=node('a',next.number===3?'进入第三课 · 词类入门':'进入第 '+next.number+' 课','a1-button');
      link.href='sentence-game.html?level='+next.number;
      return link;
    }
    const nextShortcut=next?nextLink():null;
    const actions=node('div','','a1-assessment-actions');
    const status=node('span','','a1-assessment-status');
    status.setAttribute('role','status');
    const panel=node('section','','a1-block');
    panel.id='a1-assessment';panel.hidden=true;
    let record=read(),timer;
    const start=button('课堂练习',open);
    const retry=button('重新练习',()=>{
      clearTimeout(timer);stop();record={};
      try{localStorage.removeItem(key)}catch{}
      open();
    });
    actions.append(start,status);
    if(nextShortcut)actions.append(nextShortcut);
    root.append(actions,panel);
    function remaining(){return questions.filter(q=>!passed(record,q))}
    function paint(){
      const left=remaining().length,done=!left;
      status.textContent=done?'✓ 已完成':left+' 题待答';
      status.classList.toggle('a1-assessment-complete',done);
      if(nextShortcut)nextShortcut.hidden=!done||!panel.hidden;
    }
    function open(){
      clearTimeout(timer);stop();panel.hidden=false;draw();
      panel.scrollIntoView({block:'start'});
    }
    function draw(){
      paint();
      const left=remaining(),question=left[0];
      const header=node('h2','课堂练习 · '+(questions.length-left.length)+' / '+questions.length);
      if(!question){
        panel.replaceChildren(header,node('p','✓ 已完成','a1-assessment-complete'),retry);
        if(next)panel.append(nextLink());
        return;
      }
      const feedback=node('p','','a1-ability-status');
      feedback.setAttribute('role','status');
      const choices=node('div','','a1-ability-answer');
      const speaker=control('播放本题',[question.audio]);
      const title=node('div','','a1-block-heading');
      title.append(header,speaker);
      const selected=new Set(),options=new Map();
      let locked=false;
      const multi=question.answers.length>1;
      function check(){
        if(locked||!selected.size)return;
        for (const value of selected) options.get(value).dataset.answerResult = question.answers.includes(value) ? 'correct' : 'wrong';
        if(selected.size!==question.answers.length||question.answers.some(answer=>!selected.has(answer))){
          feedback.dataset.state='wrong';feedback.textContent='再听一遍，试试看。';
          return;
        }
        locked=true;stop();
        for(const el of options.values())el.disabled=true;
        submit.disabled=true;
        record={...record,[question.id]:signature(question)};
        let saved=true;
        try{localStorage.setItem(key,JSON.stringify(record))}catch{saved=false}
        feedback.dataset.state='correct';
        feedback.textContent='✓ Correct!'+(question.word?' · '+question.word.en:'')+(saved?'':' · 未能保存进度');
        void window.WMStudySound?.ding();
        paint();
        timer=setTimeout(draw,850);
      }
      const submit=button('确认选择',check);
      submit.hidden=!multi;
      submit.disabled=true;
      const shuffled=[...question.choices];
      for(let i=shuffled.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];
      }
      for(const value of shuffled){
        const el=button(value,()=>{
          if(!multi)selected.clear();
          if(selected.has(value))selected.delete(value);else selected.add(value);
          for(const [choice,b] of options){
            b.setAttribute('aria-pressed',String(selected.has(choice)));
            delete b.dataset.answerResult;
          }
          feedback.textContent='';
          delete feedback.dataset.state;
          submit.disabled=!selected.size;
          if(!multi)check();
        });
        el.setAttribute('aria-pressed','false');
        options.set(value,el);
        const audioId=question.id.startsWith('word:')?WMA1Lesson2.words.find(word=>word.en===value)?.id:
          question.id.startsWith('sound:')?WMA1Lesson.sounds.find(sound=>sound.en===value)?.id:null;
        if(audioId){
          const option=node('div','','a1-audible-option');
          option.append(el,control('听 '+value,[audioId]));
          choices.append(option);
        }else choices.append(el);
      }
      panel.replaceChildren(title,node('p',question.prompt),node('p',multi?'多选':'单选'),choices,submit,feedback);
    }
    paint();
    if(location.hash==='#a1-assessment')open();
    window.addEventListener('pagehide',()=>{clearTimeout(timer);stop()});
    window.addEventListener('pageshow',event=>{if(event.persisted&&!panel.hidden){record=read();draw()}});
  }
  window.WMA1Lesson2Quiz={mount,complete};
})();
