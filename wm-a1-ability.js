(() => {
  'use strict';
  const lesson = WMA1Lesson, audio = WMA1Audio, skill = document.body.dataset.skill;
  const $ = id => document.getElementById(id);
  const params = new URLSearchParams(location.search);
  const modes = {word:['单词',lesson.words],phrase:['词组',lesson.phrases],sentence:['短句',lesson.sentences],
    passage:['短文',[]],letter:['字母',lesson.letters],sound:['音素',lesson.sounds]};
  const key = lesson.id + ':ability:' + skill;
  const store = new WMStudyTools.Store(skill,lesson.id);
  let log = {};
  try { log = JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch {}
  let mode = modes[params.get('type')] ? params.get('type') : 'word';
  let index = 0, current, filtered = false, settled = false, renderId = 0, timer, playback, dictationOnly = false;
  const listening = skill === 'listening';
  const category = $(listening ? 'category' : 'stage');
  const host = listening ? document.querySelector('.study-content') : document.querySelector('.question');
  const context = listening ? document.querySelector('.study-category-row') : document.querySelector('.context');
  const oldControls = $(listening?'play':'listen');
  for (const id of listening ? ['english','chinese','empty','book-title'] : ['tools','prompt','translation','answers','input-area','finish','status','mic','prev']) {
    const old = $(id); if(old) old.hidden = true;
  }
  if (!listening) document.querySelector('.tools')?.remove();
  else {
    for (const node of document.querySelectorAll('#audio,[id=play],[id=prev],[id=next]')) node.hidden=true;
    $('loop').value='off';
    $('repeat').value='1';
    document.querySelector('.note').textContent='听完再选。循环和定时设置适用于连续播放。';
  }
  if (!listening) {
    const label = context.querySelector('label');
    for (const child of [...label.childNodes]) if (child.nodeType===3) child.remove();
  }

  function el(tag,text,className) {
    const node = document.createElement(tag);
    if (text) node.textContent=text;
    if (className) node.className=className;
    return node;
  }
  function button(text,action,className='a1-button') {
    const node=el('button',text,className);
    node.type='button'; node.onclick=action;
    return node;
  }
  const number = el('select');
  number.id='lesson-number';
  number.setAttribute('aria-label','关卡编号');
  context.append(number);
  for (const group of WMClassGroups.groups) {
    const option=el('option',group.zh);
    option.value=group.id;
    category.append(option);
  }
  category.value=params.get('stage') || WMClassGroups.forLevel(Number(params.get('level')))?.id || lesson.group;
  if (!category.value) category.value=lesson.group;
  const book = el('div','','a1-ability-question');
  const question = el('div');
  const actions = el('div','','a1-ability-toolbar');
  const answers = el('div','','a1-ability-answer');
  const status = el('p','','a1-ability-status');
  status.setAttribute('role','status');
  book.append(question,actions,answers,status);
  if (!listening) {
    const counters=el('div','','study-top-tools');
    context.before(counters);
    counters.append(context);
    const line=el('div','','study-progress-row');
    const pos=$('position');
    line.append(pos);counters.after(line);
  }
  const learned = listening ? $('learned') : button('','');
  const favorite = listening ? $('favorite') : button('','');
  if (!listening) document.querySelector('.study-top-tools').prepend(learned,favorite);
  host.append(book);
  function active() { return category.value===lesson.group && number.value==='1'; }
  function eligible() { return active() ? modes[mode][1] : []; }
  function entries() { return store.remaining(mode,eligible(),filtered); }
  function openList(kind) {
    WMStudyTools.listDialog({store,type:mode,items:eligible(),kind,
      onChanged:draw,
      onAll() { filtered=kind==='favorites';index=0;draw(); },
      onReview(target) {
        filtered=true;
        index=Math.max(0,entries().findIndex(item=>item.id===target.id));draw();
      }
    });
  }
  const learnedSplit=WMStudyTools.splitControl(learned,()=>openList('learned'));
  const favoriteSplit=WMStudyTools.splitControl(favorite,()=>openList('favorites'));
  const favoritesOnly=$('favorites-only') || button('收藏练习',()=>{});
  if (!listening) document.querySelector('.study-progress-row').append(favoritesOnly);
  favoritesOnly.onclick=()=>{filtered=!filtered;index=0;draw();};
  learned.onclick=()=>{if(current){store.mark(mode,current);draw();}};
  favorite.onclick=()=>{if(current){store.toggle(mode,current);draw();}};
  function selectLesson(requested=1) {
    const enabled=category.value===lesson.group;
    number.replaceChildren(el('option',enabled?'1':'暂无课程'));
    number.firstChild.value=enabled?'1':'';
    number.value=number.firstChild.value;
    number.disabled=!enabled;
    if(enabled&&Number.isInteger(requested)&&requested>1) {
      const empty=el('option',String(requested)+'（暂无内容）');
      empty.value=String(requested);number.append(empty);number.value=empty.value;
    }
    index=0;draw();
  }
  category.onchange=()=>selectLesson();
  number.onchange=()=>{index=0;draw();};
  const tabs=$('types');
  const soundTabs=el('nav','','a1-ability-tabs');
  tabs.after(soundTabs);
  for(const [name,label] of Object.entries({word:'Words',phrase:'Phrases',sentence:'Sentences',passage:'Passages',letter:'Letters',sound:'Sounds'})){
    const tab=button(listening?modes[name][0]:label,()=>{mode=name;index=0;draw();});
    tab.append(el('small',listening?label:modes[name][0]));
    tab.dataset.mode=name;
    (['letter','sound'].includes(name)?soundTabs:tabs).append(tab);
  }
  function shuffle(items) {
    const copy=items.slice();
    for(let i=copy.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]];
    }
    return copy;
  }
  function norm(text) {
    return text.normalize('NFKC').toLowerCase().trim().replace(/[’‘]/g,"'").replace(/[.!?,;:]+/g,'').replace(/\s+/g,' ');
  }
  function clips(item) {
    return item.context?[item.id+'-context',item.id]:[item.id];
  }
  function stopListening() {
    playback=null;
    audio.stop();
  }
  async function hear(item) {
    const serial=renderId;
    if(window.WMSpeechInput)await window.WMSpeechInput.preparePlayback();
    if(serial!==renderId)return;
    const ok=await audio.play(...clips(item));
    if(!ok&&serial===renderId)status.textContent='播放已中断，可重新点读。';
  }
  async function startListening(toggle) {
    if (playback) { stopListening();toggle.textContent='🔊 听一遍';return; }
    const request={};
    playback=request;toggle.textContent='停止';
    while(playback===request&&current) {
      let ok=true;
      for(let i=0;i<Number($('repeat').value)&&playback===request;i++){
        if(!(await audio.playAt(Number($('speed').value),...clips(current)))){ok=false;break;}
      }
      if(playback!==request||!ok||$('loop').value==='off')break;
      if($('loop').value==='book'){
        index=(index+1)%entries().length;draw(request);
        toggle=actions.querySelector('button[data-play]');
        toggle.textContent='停止';
      }
    }
    if(playback===request){playback=null;toggle.textContent='🔊 听一遍';}
  }
  if (listening) $('sleep').onchange=()=>{
    clearTimeout(timer);
    const minutes=Number($('sleep').value);
    $('timer-status').textContent=minutes?'将在 '+minutes+' 分钟后停止播放。':'';
    if(minutes)timer=setTimeout(()=>{
      stopListening();
      const toggle=actions.querySelector('button[data-play]');
      if(toggle)toggle.textContent='🔊 听一遍';
      $('timer-status').textContent='定时播放已结束。';
    },minutes*60000);
  };
  function record(ok,item) {
    const old=log[item.id] || {right:0,wrong:0};
    log[item.id]={right:old.right+Number(ok),wrong:old.wrong+Number(!ok)};
    try { localStorage.setItem(key,JSON.stringify(log)); } catch {}
  }
  function verify(ok,successText) {
    if(settled||!current)return false;
    if(listening&&playback) {
      stopListening();
      const toggle=actions.querySelector('button[data-play]');
      if(toggle)toggle.textContent='🔊 听一遍';
    }
    record(ok,current);
    status.dataset.state=ok?'correct':'wrong';
    status.textContent=ok?'✓ '+(successText || '回答正确'):'再试一次。';
    if(ok){
      settled=true;
      for(const control of answers.querySelectorAll('button,input'))control.disabled=true;
      void window.WMStudySound?.ding();
    }
    return ok;
  }
  function options(correct,others) {
    for(const value of shuffle([correct,...shuffle([...new Set(others.filter(value=>value!==correct))]).slice(0,3)])){
      answers.append(button(value,()=>verify(value===correct),'answer rs-choice'));
    }
  }
  function sharesPronunciation(first,second) {
    const sounds=(first.ipa||'').split('; ').filter(Boolean);
    return (second.ipa||'').split('; ').some(sound=>sounds.includes(sound));
  }
  function listen(item) {
    question.textContent='听完后选择答案。';
    if(item.kind==='sound'){
      for(const value of ['元音音素','辅音音素'])answers.append(button(value,()=>verify(value===lesson.category(item)),'answer rs-choice'));
    }else options(item.en,eligible().filter(other=>!sharesPronunciation(item,other)).map(other=>other.en));
  }
  function read(item) {
    if(item.kind==='letter'){
      question.textContent='找出大写 '+item.en+' 对应的小写字母。';
      options(item.lower,lesson.letters.map(other=>other.lower));
    }else if(item.kind==='sound'){
      question.textContent=item.en+' · 找出包含这个声音的示例词。';
      const containsTarget = other=>!other.exampleIpa.includes(item.ipa);
      options(item.example,lesson.sounds.filter(containsTarget).map(other=>other.example));
    }else{
      if(item.context)question.append(el('p',item.context));
      question.append(el('h2',item.en),el('p',item.ipa?'/'+item.ipa+'/':item.extra?'拓展词 '+item.extra:''));
      options(item.zh,eligible().map(other=>other.zh));
    }
  }
  function typeAnswer() {
    const input=el('input','','a1-ability-input');
    input.setAttribute('aria-label','输入英文答案');
    input.autocomplete='off';input.spellcheck=false;
    const submit=button('检查',()=>{if(input.value.trim())verify(norm(input.value)===norm(current.en));});
    input.onkeydown=event=>{if(event.key==='Enter')submit.click();};
    answers.append(input,submit);
  }
  function order(item) {
    const built=el('p','','a1-ability-order'), pool=el('div','','a1-pool'), used=[];
    const parts=shuffle(item.en.replace(/[.!?]$/,'').split(/\s+/).map((text,id)=>({text,id})));
    function drawParts() {
      built.textContent=used.map(part=>part.text).join(' ');
      pool.replaceChildren();
      for(const part of parts.filter(part=>!used.includes(part)))pool.append(button(part.text,()=>{used.push(part);drawParts();},'a1-tile'));
    }
    answers.append(built,pool,button('撤回',()=>{used.pop();drawParts();}),
      button('检查',()=>{if(used.length===parts.length)verify(norm(built.textContent)===norm(item.en));}));
    drawParts();
  }
  let speech;
  if(skill==='speaking'&&window.WMSpeechInput) {
    speech=new WMSpeechInput.Session({
      prepare(){audio.stop();},target:()=>current?.en || '',
      onStatus(message){if(!settled) status.textContent=message;},
      onText(text,final){
        if(!final||!current||settled)return;
        const valid=norm(text)===norm(current.en)||window.WMSpeechMatch?.equivalent(text,current.en);
        verify(!!valid,'已识别：'+text);
      }
    });
  }
  function speak(item) {
    question.textContent=item.en+(item.ipa&&item.kind!=='sound'?' /'+item.ipa+'/':'');
    if(item.context)question.prepend(el('p',item.context));
    const useMic=!!speech&&!['letter','sound'].includes(item.kind);
    answers.append(el('p',useMic?'先听再跟读。语音识别会核对读出的文字。':'先听示范，再自己跟读。'));
    if(useMic)answers.append(button('开始／停止跟读',()=>speech.toggle()));
    answers.append(button('已完成跟读',()=>verify(true,'跟读已记录')));
  }
  function write(item) {
    if(item.kind==='sound'){
      question.textContent='听音素，选择对应的音标。';
      options(item.en,lesson.sounds.map(other=>other.en));
      return;
    }
    question.textContent=item.kind==='letter'?'听字母名称，输入该字母。':
      mode==='word'?(dictationOnly?'听单词，输入你听到的英文。'+(lesson.words.some(other=>other!==item&&sharesPronunciation(item,other))?' 词义提示：'+item.zh:''):'拼写 '+item.zh+(item.hint?' · '+item.hint:'')):
      '按正确顺序排列 '+item.zh;
    if(item.context)question.prepend(el('p',item.context));
    if(['phrase','sentence'].includes(mode)&&item.en.includes(' '))order(item);else typeAnswer();
  }
  function draw(keepPlaying=null) {
    renderId++;
    if(!keepPlaying)stopListening();
    void speech?.cancel();
    settled=false;status.textContent='';delete status.dataset.state;
    question.replaceChildren();actions.replaceChildren();answers.replaceChildren();
    const queue=entries();
    index=Math.min(index,Math.max(0,queue.length-1));
    current=queue[index];
    $('position').textContent=queue.length?(index+1)+' / '+queue.length:'0 / 0';
    const counts=store.counts(mode,eligible());
    learnedSplit.update('❤️ Learned',counts.learned,!current);
    favoriteSplit.update(current&&store.hasFavorite(mode,current)?'★ Favorites':'☆ Favorites',counts.favorites,!current);
    favoritesOnly.setAttribute('aria-pressed',String(filtered));
    favoritesOnly.textContent=filtered?'全部练习':'只练收藏';
    if($('stats'))$('stats').textContent='第 '+(active()?lesson.number:'—')+' 关';
    if($('total'))$('total').textContent=String(store.counts('word',lesson.words).learned);
    for(const tab of [...tabs.querySelectorAll('button'),...soundTabs.querySelectorAll('button')]){
      tab.classList.toggle('active',tab.dataset.mode===mode);
      tab.setAttribute('aria-pressed',String(tab.dataset.mode===mode));
    }
    if(!current){
      question.textContent=!active()||mode==='passage'?'暂无课程内容。':'当前练习已完成，或收藏列表为空。';
      return;
    }
    const item=current;
    ({listening:listen,reading:read,speaking:speak,writing:write})[skill](item);
    const play=button('🔊 听一遍',()=>{if(listening)void startListening(play);else void hear(item);});
    play.dataset.play='true';
    actions.append(button('上一条',()=>{index=(index+queue.length-1)%queue.length;draw();}),
      play,button('下一条',()=>{index=(index+1)%queue.length;draw();}));
    if(skill==='writing'&&mode==='word')actions.append(button(dictationOnly?'切换到拼写':'切换到听写',
      ()=>{dictationOnly=!dictationOnly;draw();}));
  }
  selectLesson(Number(params.get('level')) || 1);
})();
