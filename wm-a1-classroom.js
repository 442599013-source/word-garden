(() => {
  'use strict';
  const lesson = WMA1Lesson, audio = WMA1Audio;
  const root = document.getElementById('root');
  const key = lesson.id + ':classroom';
  const requested=Number(new URLSearchParams(location.search).get('level') || 1);
  if (requested!==1) {
    root.append(Object.assign(document.createElement('p'),{textContent:'第 '+requested+' 课暂无内容。'}));
    const first=document.createElement('a');
    first.href='sentence-game.html?level=1';
    first.textContent='查看第 1 课';
    root.append(first);
    return;
  }
  const passed = new Set();
  let wordProgress=0;
  const mistakes = new Set();
  try {
    const saved = JSON.parse(localStorage.getItem(key) || '{}');
    wordProgress=Math.min(lesson.words.length,Math.max(0,Number(saved.wordProgress)||0));
    for (const id of saved.passed || []) passed.add(id);
    for (const id of saved.mistakes || []) mistakes.add(id);
  } catch {}
  function save() {
    try { localStorage.setItem(key,JSON.stringify({passed:[...passed],mistakes:[...mistakes],wordProgress})); }
    catch { status.textContent = '此设备暂时无法保存课堂进度。'; }
  }
  function element(tag,text,cls) {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (cls) node.className = cls;
    return node;
  }
  function button(text,action,cls='a1-button') {
    const node = element('button',text,cls);
    node.type = 'button';
    node.onclick = action;
    return node;
  }
  const status = element('p','','a1-status');
  status.setAttribute('role','status');
  let request=0, activeSpeaker;
  function unmarkSpeaker() {
    if(!activeSpeaker)return;
    activeSpeaker.setAttribute('aria-pressed','false');
    activeSpeaker.textContent='🔊';
    activeSpeaker=undefined;
  }
  function stop() {
    request++;
    audio.stop();
    unmarkSpeaker();
  }
  async function playClips(ids,speaker) {
    if(speaker&&activeSpeaker===speaker){stop();return;}
    unmarkSpeaker();
    const current=++request;
    if(speaker){
      activeSpeaker=speaker;
      speaker.setAttribute('aria-pressed','true');
      speaker.textContent='■';
    }
    status.textContent='';
    const ok=await audio.play(...ids);
    if(current!==request)return;
    unmarkSpeaker();
    if(!ok)status.textContent=ids.some(id=>/^sound-\d+$/.test(id))?'单音暂未接通，可点例词听完整读音。':'朗读失败，可重新点读。';
  }
  function play(...ids) { return playClips(ids); }
  function tile(item,example=false) {
    const label = example ? item.example : item.kind === 'letter' ? item.en + ' ' + item.lower : item.en;
    const reading = example ? item.exampleIpa : item.kind === 'sound' ? '' : item.ipa;
    const node = button(label,() => play(item.id + (example ? '-example' : '')),'a1-tile');
    if (reading) node.append(element('small',reading.split('; ').map(ipa=>'/'+ipa+'/').join(' · ')));
    return node;
  }
  function vocabularyGrid(items) {
    const grid = element('div','','a1-card-grid');
    for (const item of items) {
      if (item.kind === 'letter') {
        grid.append(tile(item));
        continue;
      }
      const card = element('div','','a1-item');
      card.append(tile(item));
      if (item.kind === 'sound') {
        card.append(element('small',item.spelling),tile(item,true),element('small',item.exampleZh));
      } else if (item.kind === 'word') {
        card.append(element('small',item.zh));
      } else {
        card.firstChild.onclick = () => play(...(item.context ? [item.id+'-context',item.id] : [item.id]));
        if (item.context) card.prepend(button(item.context,() => play(item.id+'-context'),'a1-context'));
        card.append(element('small',item.zh));
        if (item.extra) card.append(element('small','拓展词：'+item.extra));
      }
      grid.append(card);
    }
    return grid;
  }
  const blocks = {
    intro:() => {
      const grid=element('div','','a1-card-grid');
      grid.append(tile(lesson.words.find(item=>item.en==='am')),
        ...lesson.sounds.filter(item=>['æ','m'].includes(item.ipa)).map(item=>tile(item)));
      return grid;
    },
    letters:() => {
      const wrap=element('div');
      wrap.append(vocabularyGrid(lesson.letters),
        button('yes',()=>play('example-yes'),'a1-tile'),button('my',()=>play('example-my'),'a1-tile'));
      return wrap;
    },
    vowels:() => vocabularyGrid(lesson.sounds.filter(item=>item.group==='vowel')),
    consonants:() => vocabularyGrid(lesson.sounds.filter(item=>item.group==='consonant')),
    words:() => vocabularyGrid(lesson.words),
    phrases:() => {
      const wrap=element('div');
      for (const [title,items] of [
        ['词组',lesson.phrases.filter(item=>!item.extra)],['短句',lesson.sentences.filter(item=>!item.extra)],
        ['拓展', [...lesson.phrases,...lesson.sentences].filter(item=>item.extra)]]) {
        wrap.append(element('h3',title),vocabularyGrid(items));
      }
      return wrap;
    }
  };
  const lessonContent=element('div');
  for (const section of lesson.sections) {
    const block=element('section','','a1-block');
    const heading=element('header','','a1-block-heading');
    const speaker=button('🔊',()=>playClips(['section-'+section.id],speaker),'a1-speaker');
    speaker.setAttribute('aria-pressed','false');
    speaker.setAttribute('aria-label','朗读整段：'+section.title);
    heading.append(element('h2',section.title),speaker);
    block.append(heading,...section.lines.map(line=>element('p',line)),blocks[section.id]());
    lessonContent.append(block);
  }

  const questions=[
    {id:'vowel-letters',label:'选择全部基本元音字母',items:lesson.letters,match:'vowel'},
    {id:'consonant-letters',label:'选择全部普通辅音字母（Y 单独学习）',items:lesson.letters,match:'consonant'},
    {id:'vowel-sounds',label:'选择全部元音音素',items:lesson.sounds,match:'vowel'},
    {id:'consonant-sounds',label:'选择全部辅音音素',items:lesson.sounds,match:'consonant'},
    {id:'words',label:'根据中文和提示选英文',items:lesson.words}
  ];
  function shuffle(values) {
    const result=values.slice();
    for (let j=result.length-1;j>0;j--) {
      const k=Math.floor(Math.random()*(j+1));
      [result[j],result[k]]=[result[k],result[j]];
    }
    return result;
  }
  const quiz = element('section','','a1-block');
  quiz.id='a1-assessment';
  quiz.hidden=true;
  let questionIndex=0;
  function showQuiz(index) {
    questionIndex=index;
    stop();
    quiz.hidden=false;
    quiz.replaceChildren(element('h2','课堂考核 '+(index+1)+'/5'),element('p',questions[index].label));
    const feedback=element('p');
    feedback.setAttribute('role','status');
    const pass = () => {
      passed.add(questions[index].id);
      save();
      quiz.append(button(index===4 ? '完成第 1 课' : '下一项',() => {
        if (questionIndex < 4) showQuiz(questionIndex+1);
        else {
          quiz.replaceChildren(element('h2','第 1 课考核完成'),element('p','现在可以进入第 1 关巩固练习。'));
          for (const [name,url] of [['魔法配对','word-match.html'],['听力','walkman.html'],['口语','speaking-study.html'],['阅读','reading-study.html'],['写作','writing-study.html']]) {
            const link=element('a',name,'a1-button');
            link.href=url+'?level=1&from=journey'; quiz.append(link);
          }
          quiz.append(button('重新练习',()=>{wordProgress=0;save();showQuiz(0);}));
        }
      }));
    };
    if (index===4) { wordQuiz(feedback,pass); return; }
    const {items,match,id} = questions[index];
    const chosen=new Map(), pool=element('div','','a1-pool'), selection=element('div','','a1-pool');
    selection.setAttribute('aria-label','已选答案');
    for (const item of shuffle(items)) {
      const node=element('div','','a1-quiz-card');
      const select=button(item.en,() => {
        if (chosen.delete(item.id)) pool.append(node);
        else { chosen.set(item.id,item); selection.append(node); }
        select.setAttribute('aria-pressed',String(chosen.has(item.id)));
        if(item.kind==='sound')void play(item.id);
      },'a1-tile');
      select.setAttribute('aria-pressed','false');
      node.append(select);
      pool.append(node);
    }
    const submit=button('提交本项',() => {
      const targets=items.filter(item=>item.group===match);
      const errors=items.filter(item=>chosen.has(item.id)!==(item.group===match));
      for (const item of items) {
        const record=id+':'+item.id;
        if (errors.includes(item)) mistakes.add(record); else mistakes.delete(record);
      }
      save();
      feedback.textContent='选对 '+targets.filter(item=>chosen.has(item.id)).length+'/'+targets.length+
        '，多选 '+[...chosen.values()].filter(item=>item.group!==match).length+' 项。'+(errors.length?'请调整后再提交。':'全部正确。');
      if (!errors.length) {
        submit.disabled=true;
        for (const button of quiz.querySelectorAll('button[aria-pressed]')) button.disabled=true;
        pass();
      }
    });
    quiz.append(element('h3','已选答案'),selection,element('h3','待选卡片'),pool,submit,feedback);
  }
  function wordQuiz(feedback,pass) {
    const size=6, total=lesson.words.length, work=element('div');
    const queue=lesson.words.slice();
    let start=wordProgress;
    quiz.append(work,feedback);
    function batch() {
      work.replaceChildren();
      if (start>=total) {
        feedback.textContent='已完成全部 '+total+' 个单词。';
        pass();
        return;
      }
      const rows=queue.slice(start,start+size), filled=new Map(), slots=new Map(), tokens=new Map();
      const slotList=element('div','','a1-word-slots'), options=element('div','','a1-pool');
      let active=rows[0].id;
      function render() {
        for (const [id,slot] of slots) {
          slot.textContent=filled.get(id)?.en || '___';
          slot.setAttribute('aria-pressed',String(active===id));
        }
        for (const [id,token] of tokens) token.disabled=[...filled.values()].some(item=>item.id===id);
      }
      for (const row of rows) {
        const line=element('div',row.zh+(row.hint?' · '+row.hint:''),'a1-word-slot');
        const slot=button('___',()=>{filled.delete(row.id);active=row.id;render();});
        slot.setAttribute('aria-label',row.zh+'的答案');
        slots.set(row.id,slot);
        line.append(slot);
        slotList.append(line);
      }
      for (const row of shuffle(rows)) {
        const token=button(row.en,()=>{
          if(!active)return;
          filled.set(active,row);
          active=rows.find(item=>!filled.has(item.id))?.id;
          render();
        },'a1-tile');
        tokens.set(row.id,token);
        options.append(token);
      }
      const submit=button('提交本批',()=>{
        if (filled.size!==rows.length) { feedback.textContent='请先填完这一批。';return; }
        const wrong=rows.filter(item=>filled.get(item.id)?.id!==item.id);
        for (const row of rows) {
          if (wrong.includes(row)) mistakes.add('words:'+row.id); else mistakes.delete('words:'+row.id);
        }
        save();
        feedback.textContent='本批 '+(rows.length-wrong.length)+'/'+rows.length+' 正确，已完成 '+(start+rows.length-wrong.length)+'/'+total+'。';
        if (wrong.length) {
          for (const row of wrong) filled.delete(row.id);
          active=wrong[0].id;render();
          return;
        }
        start+=rows.length;wordProgress=start;save();
        batch();
      });
      work.append(element('p','单词 '+(start+1)+'–'+(start+rows.length)+' / '+total),slotList,options,submit);
      render();
    }
    batch();
  }
  root.append(element('p','幼儿园 A1 · 第 1 课','a1-kicker'),
    element('h1','认识字母、音素与最短英语单词'),status,lessonContent,
    button(passed.size&&passed.size<5?'继续课堂考核':'开始课堂考核',()=>{
      showQuiz(Math.max(0,questions.findIndex(question=>!passed.has(question.id))));
      quiz.scrollIntoView({block:'start'});
    }),quiz);
  if(location.hash==='#a1-assessment') {
    showQuiz(Math.max(0,questions.findIndex(question=>!passed.has(question.id))));
    quiz.scrollIntoView({block:'start'});
  }
})();
