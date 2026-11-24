(() => {
  'use strict';
  const {rows,completeSpellings}=WMA1Phonics, audio=WMA1Audio;
  const quizKey='goldy-a1-phonics-3:assessment';
  const signature=row=>row.spellings.join(' ');
  const read=key=>{try{return JSON.parse(localStorage.getItem(key)||'{}')||{}}catch{return {}}};
  const complete=()=>{const saved=read(quizKey);return rows.every(row=>saved[row.id]===signature(row))};
  const node=(tag,text,cls)=>{
    const el=document.createElement(tag);
    if(text)el.textContent=text;
    if(cls)el.className=cls;
    return el;
  };
  function button(text,action,cls='a1-button'){
    const el=node('button',text,cls);el.type='button';el.onclick=action;return el;
  }
  const letterName=letter=>({a:'ay',h:'aitch',w:'double you',z:'zed'})[letter]||letter.toUpperCase();
  function narration(id,parts){
    audio.registerNarration('3yy3-'+id,parts);
    return 'section-3yy3-'+id;
  }
  function spellingAudio(row){
    return narration(row.id,[{id:row.id},...row.spellings.flatMap(spelling=>[
      ...[...spelling].map(character=>({text:character==='-'?'gap':letterName(character),locale:'en-GB'}))
    ])]);
  }
  function speaker(label,ids){
    const el=button('',async()=>{
      const next=el.getAttribute('aria-pressed')!=='true';
      el.setAttribute('aria-pressed',String(next));
      WMStudyIcons.set(el,next?'stop':'speaker',next?'停止朗读':label);
      if(next)await audio.play(...ids);else audio.stop();
      el.setAttribute('aria-pressed','false');
      WMStudyIcons.set(el,'speaker',label);
    },'a1-speaker');
    el.setAttribute('aria-pressed','false');WMStudyIcons.set(el,'speaker',label);
    return el;
  }
  function block(title,audioIds){
    const frame=node('section','','a1-block');
    const heading=node('div','','a1-block-heading');
    heading.append(node('h2',title),speaker('朗读'+title,audioIds));
    frame.append(heading);return frame;
  }
  const practicePages={listening:'walkman',speaking:'speaking-study',reading:'reading-study',writing:'writing-study'};
  function mount(root){
    const params=new URLSearchParams(location.search), skill=params.get('practice');
    const catalog=WMClassroomCatalog.lessons.find(lesson=>lesson.number===3);
    root.append(node('h1',catalog.titleZh+' · 自然拼读'));
    if(Object.hasOwn(practicePages,skill)){
      root.append(node('p',{listening:'听音素',speaking:'说音素',reading:'读音素',writing:'写拼写'}[skill]));
      mountTask(root,skill,false);
      return;
    }
    const intro='先听音素，再看可以表示这个音的字母或字母组合。拼写里的短横线表示两个字母中间有间隔。';
    const introBlock=block('课堂介绍',[narration('intro',[{text:intro,locale:'zh-CN'}])]);
    introBlock.append(node('p',intro));root.append(introBlock);
    const groups=[rows.filter(row=>row.spellings.length===1),rows.filter(row=>row.spellings.length>1)];
    const overview=block('44 个音素总览',rows.map(row=>row.id));
    groups.forEach((group,index)=>{
      overview.append(node('h3',index?'多种拼写':'一种拼写'));
      const line=node('div','','a1-onset-example-row');
      line.append(...group.map(row=>button(row.ipa,()=>audio.play(row.id),'a1-ipa-touch')));
      overview.append(line);
    });
    root.append(overview);
    rows.forEach(row=>{
      const frame=block(row.ipa,[spellingAudio(row)]);
      frame.append(button(row.ipa,()=>audio.play(row.id),'a1-ipa-touch'),
        node('p',row.spellings.join(' · '),'a1-phonics-list'));
      root.append(frame);
    });
    const recap=block('课末巩固 · 一音多拼',groups[1].map(spellingAudio));
    for(const row of groups[1]){
      const line=node('div','','a1-onset-example-row');
      line.append(button(row.ipa,()=>audio.play(row.id),'a1-ipa-touch'),node('span',row.spellings.join(' · '),'a1-phonics-list'));
      recap.append(line);
    }
    root.append(recap);
    mountTask(root,'writing',true);
    const match=node('a','去第三关魔法配对','a1-button');
    match.href='word-match.html?level=3&from=journey';root.append(match);
  }
  function mountTask(root,skill,assessment){
    const key=assessment?quizKey:'goldy-a1-phonics-3:'+skill;
    let saved=read(key),index=Math.min(rows.length-1,Math.max(0,Number(saved.position)||0)),timer,entryUI,recording,clipUrl;
    let audioRequest=0, dictation;
    const progress=node('span','','a1-assessment-status');
    const task=node('section','','a1-block');
    const controls=node('div','','a1-assessment-actions');
    const status=node('p','','a1-ability-status');
    const start=button('课堂考核',()=>{
      task.hidden=false;draw();task.scrollIntoView({block:'start'});
    });
    const retry=button('重新考核',()=>{
      clearTimeout(timer);saved={};persist();draw();
    });
    status.setAttribute('role','status');
    function persist(){try{localStorage.setItem(key,JSON.stringify(saved))}catch{}}
    function remaining(){return rows.filter(row=>saved[row.id]!==signature(row))}
    function paint(){
      if(!assessment)return;
      const count=remaining().length;
      start.textContent=count===rows.length?'课堂考核':count?'继续考核':'查看考核';
      progress.textContent=count?count+' 题待答':'✓ 已完成';
      progress.classList.toggle('a1-assessment-complete',!count);
      retry.hidden=!!count;
    }
    if(assessment){
      controls.append(start,progress,retry);
      root.append(controls);
      task.id='a1-assessment';task.hidden=location.hash!=='#a1-assessment';
    }
    root.append(task);
    paint();
    function draw(){
      clearTimeout(timer);audioRequest++;audio.stop();void dictation?.cancel();
      if(recording?.state==='recording')recording.stop();
      if(clipUrl){URL.revokeObjectURL(clipUrl);clipUrl=null;}
      entryUI?.destroy();entryUI=null;
      paint();
      const row=assessment?remaining()[0]:rows[index];
      task.replaceChildren();
      if(!row){
        task.append(node('h2','✓ 已完成','a1-assessment-complete'));return;
      }
      let locked=false;
      const number=rows.indexOf(row)+1;
      const top=node('div','','a1-block-heading');
      const correct=()=>{
        if(locked)return;
        locked=true;audio.stop();
        saved[row.id]=signature(row);persist();
        status.dataset.state='correct';status.textContent='✓ Correct!';
        void window.WMStudySound?.ding();
        task.querySelectorAll('button,input').forEach(control=>control.disabled=true);
        paint();
        timer=setTimeout(()=>assessment?draw():move(1),850);
      };
      const wrong=message=>{
        status.dataset.state='wrong';status.textContent=message;
      };
      top.append(node('h2',(assessment?'课堂考核 · ':'')+number+' / '+rows.length),
        speaker('听音素',[skill==='listening'?spellingAudio(row):row.id]));
      task.append(top);
      if(skill!=='writing')task.append(node('p',row.ipa,'a1-ability-question'));
      status.textContent='';delete status.dataset.state;
      if(skill==='listening'){
        task.append(node('p',row.spellings.join(' · '),'a1-phonics-list'));
      }else if(skill==='reading'){
        const choices=node('div','','a1-ability-answer'),selected=new Set();
        const alternatives=[...new Set(rows.flatMap(item=>item.spellings))]
          .filter(item=>!row.spellings.includes(item));
        const options=[...row.spellings,...Array.from({length:3},(_,i)=>alternatives[(index*7+i*13)%alternatives.length])];
        for(let i=options.length-1;i>0;i--){
          const j=Math.floor(Math.random()*(i+1));[options[i],options[j]]=[options[j],options[i]];
        }
        const check=button('确认选择',()=>{
          if(!selected.size)return;
          if(selected.size===row.spellings.length&&row.spellings.every(item=>selected.has(item)))correct();
          else wrong('再看一下这个音素，试试看。');
        });
        for(const option of options){
          const choice=button(option,()=>{
            if(selected.has(option))selected.delete(option);else selected.add(option);
            choice.setAttribute('aria-pressed',String(selected.has(option)));
            status.textContent='';check.disabled=!selected.size;
          });
          choice.setAttribute('aria-pressed','false');choices.append(choice);
        }
        check.disabled=true;task.append(node('p','选出这个音素的全部拼写。'),choices,check);
      }else if(skill==='writing'){
        task.append(node('p','听音素，写出全部对应拼写。每种拼写用空格隔开。'));
        const entry=node('input','','a1-phonics-input');
        entry.type='text';entry.setAttribute('aria-label','音素拼写');entry.autocapitalize='none';entry.autocomplete='off';entry.spellcheck=false;
        const check=button('确认拼写',()=>{
          if(completeSpellings(row,entry.value))correct();
          else wrong('再听一遍，检查有没有漏写或多写。');
        });
        entry.addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();check.click()}});
        const clear=button('',()=>{entry.value='';entry.focus()});
        WMStudyIcons.set(clear,'close','清空');
        const inputArea=node('div','','a1-phonics-entry');
        inputArea.append(entry,clear);
        task.append(inputArea);
        const toolbar=node('div','','a1-ability-toolbar');
        if(window.WMPracticeUI?.Entry){
          entryUI=new WMPracticeUI.Entry(entry,{clear,isLocked:()=>locked,onChange:()=>{status.textContent=''}});
          WMStudyIcons.set(entryUI.toggle,'keyboard','English keyboard');
          toolbar.append(entryUI.toggle);
        }
        toolbar.append(speaker('听音素',[row.id]));
        if(!assessment){
          const hint=node('p',row.spellings.join(' · '),'a1-phonics-list');
          hint.hidden=true;
          const reveal=button('',()=>{hint.hidden=!hint.hidden;reveal.setAttribute('aria-expanded',String(!hint.hidden))});
          WMStudyIcons.set(reveal,'eye','查看拼写');reveal.setAttribute('aria-expanded','false');
          toolbar.append(reveal);
          if(window.WMSpeechInput){
            const mic=button('',()=>{if(!locked)dictation.toggle()});
            dictation=new WMSpeechInput.Session({
              prepare:()=>audio.stop(),collectPhrases:()=>true,
              onStatus:message=>{status.textContent=message},
              onState:state=>WMStudyIcons.set(mic,state==='idle'?'mic':'stop',state==='idle'?'Dictate spellings':'Stop dictation'),
              onText:(value,final)=>{if(final&&!locked)entry.value=value;}
            });
            WMStudyIcons.set(mic,'mic','Dictate spellings');
            toolbar.append(mic);
          }
          task.append(inputArea,toolbar,hint,check);
        }else task.append(inputArea,toolbar,check);
      }else{
        task.append(node('p','点话筒读出这个音素，再听自己的录音和示范。'));
        const playback=node('audio');playback.controls=true;playback.hidden=true;
        const mic=button('',async()=>{
          if(recording?.state==='recording'){recording.stop();return;}
          const request=++audioRequest;
          audio.stop();mic.disabled=true;
          let stream;
          try{
            stream=await navigator.mediaDevices.getUserMedia({audio:true});
            if(request!==audioRequest){stream.getTracks().forEach(track=>track.stop());return;}
            window.WMMicrosoftVoice?.audioMode('play-and-record');
            const recorder=new MediaRecorder(stream),chunks=[];
            recording=recorder;
            recorder.ondataavailable=event=>{if(event.data.size)chunks.push(event.data)};
            recorder.onstop=()=>{
              stream.getTracks().forEach(track=>track.stop());
              window.WMMicrosoftVoice?.audioMode('playback');
              if(request!==audioRequest)return;
              if(clipUrl)URL.revokeObjectURL(clipUrl);
              clipUrl=URL.createObjectURL(new Blob(chunks,{type:recorder.mimeType}));
              playback.src=clipUrl;playback.hidden=false;
              WMStudyIcons.set(mic,'mic','录音');status.textContent='';
            };
            recorder.start();WMStudyIcons.set(mic,'stop','停止录音');status.textContent='正在录音';
          }catch{
            stream?.getTracks().forEach(track=>track.stop());
            if(request===audioRequest)status.textContent='话筒暂不可用，请检查权限再试。';
          }finally{if(request===audioRequest)mic.disabled=false}
        });
        WMStudyIcons.set(mic,'mic','录音');task.append(mic,playback);
      }
      task.append(status);
      if(!assessment){
        const navigation=node('div','','a1-ability-toolbar');
        const previous=button('',()=>move(-1)),next=button('',()=>move(1));
        WMStudyIcons.set(previous,'previous','上一音素');WMStudyIcons.set(next,'next','下一音素');
        previous.disabled=index===0;next.disabled=index===rows.length-1;
        navigation.append(previous,next);task.append(navigation);
      }
    }
    function move(delta){
      index=Math.max(0,Math.min(rows.length-1,index+delta));
      saved.position=index;persist();draw();
    }
    if(!task.hidden)draw();
    window.addEventListener('pagehide',()=>{
      clearTimeout(timer);audioRequest++;void dictation?.cancel();
      if(recording?.state==='recording')recording.stop();
      audio.stop();
    });
    window.addEventListener('pageshow',event=>{if(event.persisted&&!task.hidden)draw()});
  }
  window.WMA1PhonicsClassroom={mount,complete};
})();
