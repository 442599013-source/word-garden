(() => {
  'use strict';
  const {rows,contrasts,appendSpelling}=WMA1Phonics;
  const audio=WMA1Audio, quizKey='goldy-a1-phonics-3:word-sound-assessment';
  const questions=rows.map((row,index)=>{
    const item=row.examples[0];
    const other=contrasts.find(group=>group.spelling===item.spelling)?.choices
      .map(choice=>rows.find(sound=>sound.id===choice.soundId))||[];
    const distractors=[...new Set([...other,...rows.slice(index+1),...rows.slice(0,index)])]
      .filter(option=>option!==row).slice(0,3);
    return {row,item,choices:[...distractors.slice(0,index%4),row,...distractors.slice(index%4)]};
  });
  function read(){
    try{return JSON.parse(localStorage.getItem(quizKey)||'{}')||{}}
    catch{return {}}
  }
  const key=q=>JSON.stringify([q.item.en,q.item.ranges,q.row.ipa]);
  const complete=()=>{const saved=read();return questions.every(q=>saved[q.row.id]===key(q))};
  function node(tag,text,cls){
    const el=document.createElement(tag);
    if(text)el.textContent=text;
    if(cls)el.className=cls;
    return el;
  }
  function button(text,action,cls='a1-button'){
    const el=node('button',text,cls);el.type='button';el.onclick=action;return el;
  }
  const wordPart=item=>({text:item.en,locale:'en-GB'});
  const soundPart=id=>({id});
  function register(id,parts){
    const name='3yy3-'+id;
    audio.registerNarration(name,parts);
    return 'section-'+name;
  }
  let active=null,playing=0,audioStatus;
  function play(control,ids){
    const previous=active,current=++playing;
    active=null;
    audio.stop();
    if(audioStatus)audioStatus.textContent='';
    previous?.paint(false);
    if(previous===control&&control)return;
    if(!ids.length)return;
    active=control;
    control?.paint(true);
    void Promise.resolve(audio.play(...ids)).then(ok=>{
      if(current!==playing)return;
      active=null;
      control?.paint(false);
      if(ok===false&&audioStatus)audioStatus.textContent='点读未完成，请再试一次。';
    });
  }
  function speaker(label,ids){
    const control=button('',()=>play(control,ids),'a1-speaker');
    control.paint=on=>{
      control.setAttribute('aria-pressed',String(on));
      WMStudyIcons.set(control,on?'stop':'speaker',on?'停止朗读':label);
    };
    control.paint(false);
    return control;
  }
  function block(title,ids){
    const frame=node('section','','a1-block');
    const heading=node('div','','a1-block-heading');
    heading.append(node('h2',title),speaker('朗读'+title,ids));
    frame.append(heading);
    return frame;
  }
  function wordButton(item,id){
    const word=button('',()=>play(null,[id]),'a1-word-touch');
    word.setAttribute('aria-label','听 '+item.en);
    word.lang='en-GB';
    const label=node('span');
    appendSpelling(label,item.en,item.ranges);
    word.append(label);
    return word;
  }
  function soundButton(ipa,id){
    return button(ipa,()=>play(null,[id]),'a1-ipa-touch');
  }
  function card(item,ipa,soundId,id){
    const el=node('div','','a1-item a1-onset-card');
    const word=wordButton(item,id);
    word.append(node('small',item.main));
    el.append(word,soundButton(ipa,soundId));
    return el;
  }
  function mount(root){
    const catalog=WMClassroomCatalog.lessons.find(lesson=>lesson.number===3);
    audioStatus=node('p','','a1-status');
    audioStatus.setAttribute('role','status');
    root.append(node('h1',catalog.titleZh+' · 自然拼读'),audioStatus);
    const intro='先听整词，再听彩色字母在这个词里对应的音素。词卡下方显示一个本课用到的释义。';
    const firstSoundTip='判断单词以元音音素还是辅音音素开头，只听它的第一个音。第一个音是哪一类，单词就以哪一类音素开头。词中或词尾的音素不影响这个判断。';
    const introBlock=block('课堂介绍',[register('intro',[{text:intro,locale:'zh-CN'},{text:firstSoundTip,locale:'zh-CN'}])]);
    introBlock.append(node('p',intro),node('p',firstSoundTip));
    root.append(introBlock);

    const overview=block('44 个音素总览',rows.map(row=>row.id));
    const overviewGrid=node('div','','a1-onset-example-row');
    overviewGrid.append(...rows.map(row=>soundButton(row.ipa,row.id)));
    overview.append(overviewGrid);
    root.append(overview);

    for(const row of rows){
      const ids=row.examples.map((item,index)=>register(row.id+'-'+index,[wordPart(item)]));
      const sections=row.examples.flatMap(item=>[wordPart(item),soundPart(row.id)]);
      const sound = WMA1Lesson.sounds.find(item=>item.id===row.id);
      const label = sound.group==='vowel' ? 'Vowel sound' : 'Consonant sound';
      const frame=block(row.ipa+' '+label,[register(row.id+'-all',[soundPart(row.id),...sections])]);
      frame.querySelector('h2').classList.add('a1-phoneme-heading');
      frame.append(soundButton(row.ipa,row.id));
      const grid=node('div','','a1-card-grid a1-onset-cards');
      grid.append(...row.examples.map((item,index)=>card(item,row.ipa,row.id,ids[index])));
      frame.append(grid);
      root.append(frame);
    }
    const recap=block('课末对照 · 同一拼写，不同发音',contrasts.map(row=>register('compare-'+row.spelling,
      row.choices.flatMap(item=>[wordPart(item),soundPart(item.soundId)]))));
    for(const row of contrasts){
      const section=node('section','','a1-onset-group');
      const head=node('div','','a1-onset-heading');
      head.append(node('h3',row.spelling),speaker('听 '+row.spelling+' 的发音对照',['section-3yy3-compare-'+row.spelling]));
      const grid=node('div','','a1-card-grid a1-onset-cards');
      grid.append(...row.choices.map((item,index)=>card(item,item.ipa,item.soundId,
        register('compare-'+row.spelling+'-'+index,[wordPart(item)]))));
      section.append(head,grid);
      recap.append(section);
    }
    root.append(recap);
    mountPractice(root);
    const match=node('a','去第三关魔法配对','a1-button');
    match.href='word-match.html?level=3&from=journey';
    root.append(match);
  }

  function mountPractice(root){
    let saved=read(),timer;
    const controls=node('div','','a1-assessment-actions');
    const task=node('section','','a1-block');
    task.id='a1-assessment';task.hidden=true;
    const status=node('span','','a1-assessment-status');
    status.setAttribute('role','status');
    const remaining=()=>questions.filter(q=>saved[q.row.id]!==key(q));
    const practice=button('课堂练习',open);
    const retry=button('重新练习',()=>{
      saved={};persist();open();
    });
    controls.append(practice,status);
    root.append(controls,task);
    function persist(){
      try{localStorage.setItem(quizKey,JSON.stringify(saved))}
      catch{}
    }
    function refresh(){
      const count=remaining().length;
      status.textContent=count?count+' 题待答':'✓ 已完成';
      status.classList.toggle('a1-assessment-complete',!count);
    }
    function open(){
      task.hidden=false;draw();
      task.scrollIntoView({block:'start'});
    }
    function draw(){
      clearTimeout(timer);play(null,[]);
      refresh();
      const list=remaining();
      const q=list[0];
      const number=questions.length-list.length;
      if(!q){
        const next = node('a','进入第四课 · 词汇','a1-button');
        next.href='sentence-game.html?level=4';
        task.replaceChildren(node('h2','✓ 已完成','a1-assessment-complete'),retry,next);
        return;
      }
      const heading=node('div','','a1-block-heading');
      const wordId=register('test-'+q.row.id,[wordPart(q.item)]);
      heading.append(node('h2','课堂练习 · '+(number+1)+' / '+questions.length),
        speaker('听整词',[wordId]));
      const prompt=node('p','这个单词里，彩色字母对应哪个音素？');
      const answers=node('div','','a1-ability-answer');
      const feedback=node('p','','a1-ability-status');
      feedback.setAttribute('role','status');
      let locked=false;
      for(const option of q.choices){
        const row=node('div','','a1-audible-option');
        const answer=button(option.ipa,()=>{
          if(locked)return;
          for(const control of answers.querySelectorAll('button')) delete control.dataset.answerResult;
          answer.dataset.answerResult=option.id===q.row.id?'correct':'wrong';
          if(option.id!==q.row.id){
            feedback.dataset.state='wrong';
            feedback.textContent='再听整词和选项，比较高亮部分的音。';
            return;
          }
          locked=true;play(null,[]);
          for(const control of answers.querySelectorAll('button'))control.disabled=true;
          feedback.dataset.state='correct';feedback.textContent='✓ Correct!';
          void window.WMStudySound?.ding();
          saved[q.row.id]=key(q);persist();refresh();
          timer=setTimeout(draw,850);
        });
        row.append(answer,speaker('听 '+option.ipa,[option.id]));
        answers.append(row);
      }
      task.replaceChildren(heading,prompt,wordButton(q.item,wordId),answers,feedback);
    }
    refresh();
    if(location.hash==='#a1-assessment')open();
    window.addEventListener('pagehide',()=>{clearTimeout(timer);play(null,[])});
    window.addEventListener('pageshow',event=>{if(event.persisted&&!task.hidden){saved=read();draw()}});
  }
  window.WMA1PhonicsClassroom={mount,complete};
})();
