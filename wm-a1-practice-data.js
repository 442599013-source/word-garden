(() => {
  'use strict';
  const lesson = WMA1Lesson;
  const types = ['word','phrase','sentence','passage'];
  const items = {word:lesson.words,phrase:lesson.phrases,sentence:lesson.sentences,passage:window.WMA1Passages || []};
  const lesson2=window.WMA1Lesson2;
  const session=new URLSearchParams(window.location?.search||'');
  const number=Number(session.get('level'))===2&&lesson2?2:1;
  const lessonItems={1:items};
  if(lesson2)lessonItems[2]={
    word:lesson2.words,phrase:lesson2.phrases,sentence:lesson2.sentences,passage:lesson2.passages
  };
  const activeItems=lessonItems[number];
  const stages = WMClassGroups.groups.map(group=>({
    ...group,...Object.fromEntries(types.map(type=>[type,group.id===lesson.group?activeItems[type]:[]]))
  }));
  const byId = Object.fromEntries(stages.map(stage=>[stage.id,stage]));
  function resolve(id,level) {
    return byId[id] || byId[WMClassGroups.forLevel(level)?.id] || stages.find(stage=>stage.stage===id);
  }
  const books = types.map(type=>({
    id:(number===1?lesson.id:'goldy-a1-first-sounds-2')+'-'+type,type,category:lesson.group,
    titleZh:'第 '+number+' 课',titleEn:'Lesson '+number,items:activeItems[type]
  }));
  window.WMStageLibrary = {stages,byId,types,books,resolve,passages:[],number};
  window.WMKindergartenListening129 = {categories:stages,books};

  window.WMA1LessonNumber = function mount(category, host) {
    const number = document.createElement('select');
    number.id='lesson-number';
    number.setAttribute('aria-label','课次');
    category.after(number);
    host.classList.add('wm-a1-lesson-picker');
    function sync() {
      const available=category.value===lesson.group;
      const options=available?(lesson2?['1','2']:['1']):[''];
      number.replaceChildren(...options.map(value=>{
        const option=document.createElement('option');
        option.value=value;
        option.textContent=value||'—';
        return option;
      }));
      number.value=available?String(window.WMStageLibrary.number):'';
      number.disabled=!available;
    }
    number.addEventListener('change',()=>{
      if(!number.value)return;
      const url=new URL(window.location.href);
      url.searchParams.set('level',number.value);
      url.searchParams.set('stage',category.value);
      const active=document.querySelector('#types [aria-pressed="true"]');
      if(active?.dataset.type)url.searchParams.set('type',active.dataset.type);
      window.location.href=url.href;
    });
    category.addEventListener('change',sync);
    sync();
  };
})();
