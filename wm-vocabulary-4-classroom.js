/* Fourth lesson: contextual word meaning and word class. */
(() => {
  'use strict';
  function makeClassroom(courseData){
  const {number,words,targets,classes}=courseData;
  const audio=WMA1Audio;
  const key='goldy-vocabulary-4:practice';
  const modes=['meaning','class'];
  const questions=words.flatMap(word=>word.uses.flatMap(use=>modes.map(mode=>({
    word,use,mode,id:use.id+'-'+mode,
    signature:JSON.stringify([use.sentence,mode==='class'?use.part:use.zh])
  }))));
  const focus=number===4?[
    ['___ book','a','an','some'],['___ old book','an','a','some'],['___ unit','a','an','some'],
    ['___ hour','an','a','some'],['___ milk（一些牛奶）','some','a','an']
  ]:number===5?[
    ['I like it.','like','实义动词'],['You look happy.','look','系动词'],
    ['Do you like it?','Do','助动词'],['You must go.','must','情态动词'],
    ['Look at the bird.','Look','实义动词'],['They are ready.','are','系动词']
  ]:[];
  questions.unshift(...focus.map(([sentence,second,third,fourth],i)=>{
    const noun=number===4;
    return {id:'focus-'+number+'-'+i,signature:sentence,mode:'focus',
      word:{en:noun?'___':second,uses:[]},use:{sentence,zh:noun?second:third},
      alternatives:noun?[third,fourth]:['实义动词','系动词','助动词','情态动词']};
  }));
  function read(){
    try { return JSON.parse(localStorage.getItem(key) || '{}') || {}; }
    catch { return {}; }
  }
  function pending(record){
    return questions.filter(q=>record[q.id]!==q.signature);
  }
  const complete=()=>!pending(read()).length;

  function node(tag,text,cls){
    const el=document.createElement(tag);
    if(text)el.textContent=text;
    if(cls)el.className=cls;
    return el;
  }
  function button(text,action,cls='a1-button'){
    const el=node('button',text,cls);
    el.type='button';el.onclick=action;
    return el;
  }
  const en=text=>({text,locale:'en-GB'});
  const zh=text=>({text,locale:'zh-CN'});
  function highlight(host,text,word){
    const test=new RegExp('\\b'+word+'(?:ed)?\\b','i');
    const found=test.exec(text);
    if(!found){host.textContent=text;return host;}
    host.append(text.slice(0,found.index),node('mark',found[0]),text.slice(found.index+found[0].length));
    return host;
  }
  const examplesByUse={
    'book:n':'前面有冠词 a，这里指一本书，是读的对象',
    'book:v':'和 a room 搭配，表示预订房间这个动作',
    'cold:a':'描述 day，告诉我们那一天有多冷',
    'cold:n':'和 a、bad 组成名词短语，指得的一场感冒',
    'fast:r':'修饰 run，告诉我们跑得怎么样',
    'fast:a':'描述 train，说明那趟列车的速度',
    'well:r':'修饰 speak，告诉我们英语说得怎么样',
    'this:d':'在 page 前说明是哪一页',
    'this:o':'单独指眼前的东西，在句中作主语',
    'that:c':'把 you are busy 接到 I know 后，说明我知道什么',
    'they:o':'代替前面提到的人，在 study 前作主语',
    'from:p':'带出 my sister，说明信是从谁那里来的',
    'when:c':'把表示时间的从句 when you arrive 和主句 Call me 连起来',
    'yeah:i':'用来回应对方，表达同意'
  };
  function explanation(word,use){
    if(use.silent)return '';
    if(use.note)return use.note;
    if(word.exampleOnly)
      return use.part==='d'?'这个词放在名词前，帮助读者判断所指的是任意一个还是特指对象。它是限定词中的冠词。':'';
    const phrase=use.phrase;
    if(use.part==='v'&&['must','will'].includes(word.en))
      return '在「'+phrase+'」中，'+word.en+' 放在主要动词前，表示'+use.zh+'。它是情态动词。';
    const specific=examplesByUse[word.en+':'+use.part];
    if(specific)return '在这句里，'+word.en+' '+specific+'，所以是'+use.label+'。';
    const role=use.part==='r'?'补充说明「'+use.zh+'」这一用法，修饰句中的动作、性质或整句话':classes[use.part].reason;
    return '在「'+phrase+'」里，'+word.en+' 表示「'+use.zh+'」，'+role+'，所以是'+use.label+'。';
  }
  function narration(word,use){
    const parts=[en(word.en),zh(use.label+'。'+use.gloss),en(use.sentence),zh(use.sentenceZh)];
    const why=explanation(word,use);
    if(why)parts.push(zh(why));
    return parts;
  }
  const multi=(number===3?WMVocabulary4.targets:targets).filter(word=>new Set(word.uses.map(use=>use.part)).size>1);
  function mount(root){
    const course=WMClassroomCatalog.lessons.find(lesson=>lesson.number===number);
    const audioStatus=node('p','','a1-status');
    audioStatus.setAttribute('role','status');
    let playing,token=0,markEl=null;
    function clearMark(){markEl?.classList.remove('is-reading');markEl=null;}
    function stop(){
      token++;
      playing?.paint(false);
      playing=null;
      clearMark();
      audio.stop();
    }
    function speaker(label,id,parts){
      audio.registerNarration(id,parts);
      const control=button('',async()=>{
        const wasPlaying=playing===control;
        stop();
        if(wasPlaying)return;
        const current=token;
        playing=control;control.paint(true);audioStatus.textContent='';
        const ok=await audio.play('section-'+id);
        if(current!==token)return;
        playing=null;control.paint(false);
        if(ok===false)audioStatus.textContent='点读未完成，请重试。';
      },'a1-speaker');
      control.paint=isPlaying=>{
        control.setAttribute('aria-pressed',String(isPlaying));
        WMStudyIcons.set(control,isPlaying?'stop':'speaker',isPlaying?'停止朗读':label);
      };
      control.paint(false);
      return control;
    }
    function groupSpeaker(label,id,items,details,grid){
      items.forEach(({word,uses},i)=>audio.registerNarration(id+'-'+i,uses.flatMap(use=>narration(word,use))));
      const control=button('',async()=>{
        const wasPlaying=playing===control;
        stop();
        if(wasPlaying)return;
        const current=token;
        playing=control;control.paint(true);audioStatus.textContent='';
        if(!details.open)details.open=true;
        await Promise.resolve();
        if(!grid.childElementCount)grid.append(...items.map(({word,uses})=>card(word,uses,id)));
        let failed=0;
        for(let i=0;i<items.length;i++){
          if(current!==token)return;
          clearMark();
          const el=grid.children[i];
          if(el){el.classList.add('is-reading');markEl=el;el.scrollIntoView({block:'center',behavior:'smooth'});}
          const ok=await audio.play('section-'+id+'-'+i);
          if(current!==token)return;
          if(ok===false){
            audioStatus.textContent='这一段有词没读出来，先往后读。';
            if(++failed>=3){audioStatus.textContent='点读未完成，请重试。';break;}
          } else failed=0;
        }
        if(current!==token)return;
        clearMark();playing=null;control.paint(false);
      },'a1-speaker');
      control.addEventListener('click',ev=>{ev.preventDefault();ev.stopPropagation();});
      control.paint=isPlaying=>{
        control.setAttribute('aria-pressed',String(isPlaying));
        WMStudyIcons.set(control,isPlaying?'stop':'speaker',isPlaying?'停止朗读':label);
      };
      control.paint(false);
      return control;
    }
    function heading(title,id,parts,tag='h2'){
      const row=node('div','','a1-block-heading');
      row.append(node(tag,title),speaker('朗读'+title,id,parts));
      return row;
    }
    function card(word,uses,prefix){
      const card=node('article','','a1-vocabulary-word');
      card.append(heading(word.en,prefix+'-'+word.id,uses.flatMap(use=>narration(word,use)),'h3'));
      for(const use of uses){
        const box=node('div','','a1-vocabulary-use');
        box.append(
          node('p',use.label+' · '+use.gloss),
          highlight(node('p','','a1-vocabulary-example'),use.sentence,word.en),
          node('p',use.sentenceZh)
        );
        const why=explanation(word,use);
        if(why)box.append(node('p',why));
        card.append(box);
      }
      return card;
    }
    function wordList(items,id,listSpeaker){
      const details=node('details','','a1-vocabulary-section');
      const caption=(id==='extra'?'补充词表':items.length?items[0].word.en+' – '+items.at(-1).word.en:'词表')+'（'+items.length+'）';
      const summary=node('summary');
      summary.append(node('span',caption,'a1-vocab-caption'));
      const grid=node('div','','a1-vocabulary-list');
      details.append(summary,grid);
      const build=()=>{
        if(!grid.childElementCount)grid.append(...items.map(({word,uses})=>card(word,uses,id)));
      };
      // 组喇叭的读点 id 必须逐组唯一，否则同一类词里后一组会覆盖前一组的朗读内容
      const groupKey=id+'-'+(items.length?items[0].word.id:'g');
      if(listSpeaker&&items.length)summary.append(listSpeaker(items,groupKey,details,grid));
      details.addEventListener('toggle',()=>{if(details.open)build();});
      return details;
    }
    const listSpeaker=(items,id,details,grid)=>groupSpeaker('朗读这一组的 '+items.length+' 个词',id+'-group',items,details,grid);
    const reviewIntro='同一拼写，不同词类。同一个词，换个词类，意思和用法就不一样。这一课把前面几课学过的这类词放在一起对照复习。';
    const tip=number===6?reviewIntro:number===4?'这一课全是名词。卡片只给词、义和例句，不再逐词解释词性：能给它加 a / an、能给它起名字，它就落在名词这一类。a 与 an 怎么分，见下面名词板块开头的说明。':number===5?'看动词在句子中的作用。I like it.（我喜欢它。）like 表达状态，是实义动词。You look happy.（你看起来很开心。）look 连接主语和描述，是系动词。Do you like it?（你喜欢它吗？）do 帮忙提问，是助动词。You must go.（你必须走。）must 表示必须，是情态动词。':'这堂课按九大词类学四字母常用词。先看这一类词在句中起什么作用，再学词义和例句。判断词类时，可以观察位置，也要看它怎样和其他词搭配。';
    const intro=node('section','','a1-block');
    intro.append(heading(number===3?'九大词类':number===4?'什么时候用 a 或 an？':number===6?'同一拼写，不同词类':'动词在句子里起什么作用？','4ch1-intro',[tip]),node('p',tip));
    root.append(node('p',course.code,'a1-kicker'),node('h1',course.titleZh),audioStatus,intro);

    const bySpelling=(a,b)=>a.en.localeCompare(b.en,'en');
    const sortedWords=[...targets].sort(bySpelling);
    for(const [part,entry] of Object.entries(number===6?{}:classes)){
      const id='4ch1-class-'+part;
      const section=node('section','','a1-block');
      section.dataset.wordClass=part;
      const entries=sortedWords.map(word=>({word,uses:word.uses.filter(use=>use.part===part)}))
        .filter(({uses})=>uses.length);
      if(!entries.length)continue;
      const example=entries.find(({word})=>word.en===entry.example)||entries[0];
      const rest=entries.filter(item=>item!==example);
      const articles=part==='d'?words.filter(word=>word.exampleOnly):[];
      const readEntries=items=>items.flatMap(({word,uses})=>uses.flatMap(use=>narration(word,use)));
      section.append(heading(entry.label+(entry.en?' · '+entry.en:''),id,[entry.label+'。'+entry.intro]),node('p',entry.intro));
      if(part==='n'&&WMVocabulary4.nounArticleIntro){
        const blurb=node('div',null,'a1-vocabulary-note');
        WMVocabulary4.nounArticleIntro.split(/(?=为什么不一律用 a？|所以字母长什么样|一句话：)/).filter(Boolean)
          .forEach(function(t){blurb.append(node('p',t.trim()));});
        section.append(blurb);
      }
      section.append(card(example.word,example.uses,id));
      for(const article of articles)section.append(card(article,article.uses,id));
      const groupSize=number===3?25:number===4?25:25;
      for(let i=0;i<rest.length;i+=groupSize)section.append(wordList(rest.slice(i,i+groupSize),id,listSpeaker));
      root.append(section);
    }

    if(number===6){
      const id='4ch6-all';
      const section=node('section','','a1-block');
      const items=sortedWords.map(word=>({word,uses:word.uses}));
      for(let i=0;i<items.length;i+=10)section.append(wordList(items.slice(i,i+10),id,listSpeaker));
      root.append(section);
    }
    if(number===3){
      const more=node('p','','a1-block');
      more.append('同一拼写、不同词类的词，等第四、五课学完，集中放在第六课复习：');
      const go=node('a','去第六课','a1-button');go.href='sentence-game.html?level=6';
      more.append(go);
      root.append(more);
    }
    if(number===3&&WMVocabulary4.supplemental.words.length)root.append(wordList(WMVocabulary4.supplemental.words.map(word=>({word,uses:word.uses})),'extra',listSpeaker));

    let record=read(),timer;
    const status=node('span','','a1-assessment-status');
    status.setAttribute('role','status');
    const actions=node('div','','a1-assessment-actions');
    const task=node('section','','a1-block');task.id='a1-assessment';task.hidden=true;
    const start=button('课堂练习',open);
    const match=node('a','魔法配对','a1-button');match.href='word-match.html?level='+number+'&from=journey';
    actions.append(start,status);
    root.append(actions,task,match);

    function save(){
      try { localStorage.setItem(key,JSON.stringify({...read(),...record}));return true; }
      catch { return false; }
    }
    function refresh(left=pending(record).length){
      status.textContent=left?left+' 题待答':'✓ 已完成';
      status.classList.toggle('a1-assessment-complete',!left);
    }
    function open(){
      task.hidden=false;
      draw();
      task.scrollIntoView({block:'start'});
    }
    function draw(){
      clearTimeout(timer);stop();
      const left=pending(record);
      refresh(left.length);
      if(!left.length){
        task.replaceChildren(node('h2','✓ 已完成','a1-assessment-complete'),
          button('重新练习',()=>{for(const q of questions)record[q.id]=null;save();draw();}));
        return;
      }
      const {id,mode,word,use,signature}=left[0];
      const correct=mode==='class'?use.label:use.zh;
      const allLabels=Object.values(classes).map(entry=>entry.label);
      const startAt=questions.length-left.length;
      const related=word.uses.filter(candidate=>candidate!==use).map(candidate=>mode==='class'?candidate.label:candidate.zh);
      const offset=(startAt*41)%words.length;
      const meaningChoices=Array.from({length:14},(_,index)=>words[(offset+index)%words.length].main);
      const other=mode==='focus'?left[0].alternatives:mode==='class'?allLabels.slice(startAt%9).concat(allLabels.slice(0,startAt%9)):meaningChoices;
      const choices=[...new Set([...related,...other])].filter(label=>label!==correct).slice(0,3);
      choices.splice(startAt%4,0,correct);
      const optionBox=node('div','','a1-ability-answer');
      const feedback=node('p','','a1-ability-status');
      feedback.setAttribute('role','status');
      let locked=false;
      const options=choices.map(choice=>button(choice,()=>{
        if(locked)return;
        const ok=choice===correct;
        for(const option of options)delete option.dataset.answerResult;
        options[choices.indexOf(choice)].dataset.answerResult=ok?'correct':'wrong';
        feedback.dataset.state=ok?'correct':'wrong';
        if(!ok){feedback.textContent='再看看高亮词和句子里的其他词。';return;}
        locked=true;stop();
        for(const option of options)option.disabled=true;
        record[id]=signature;
        feedback.textContent=save()?'✓ Correct!':'✓ Correct! · 未能保存进度';
        void window.WMStudySound?.ding();
        refresh(left.length-1);
        timer=setTimeout(draw,850);
      }));
      optionBox.append(...options);
      const title='课堂练习 · '+(startAt+1)+' / '+questions.length;
      const prompt=mode==='focus'?(number===4?'选择适合填空的词。':'高亮动词在这句里起什么作用？'):mode==='class'?'高亮词在这句里属于哪个词类？':'高亮词在这句里是什么意思？';
      task.replaceChildren(heading(title,'4ch1-question-'+id,[en(use.sentence)]),
        node('p',prompt),highlight(node('p','','a1-vocabulary-example'),use.sentence,word.en),optionBox,feedback);
    }
    refresh();
    if(location.hash==='#a1-assessment')open();
    window.addEventListener('pagehide',()=>{clearTimeout(timer);stop()});
    window.addEventListener('pageshow',event=>{if(event.persisted&&!task.hidden){record=read();draw()}});
  }
  return {mount,complete};
  }
  window.WMVocabularyClassrooms=Object.fromEntries(Object.entries(WMVocabulary4.courses).map(([id,c])=>[id,makeClassroom(c)]));
})();
