(() => {
  'use strict';
  const lesson = WMA1Lesson;
  const types = ['word','phrase','sentence','passage'];
  const items = {word:[...lesson.words,...lesson.themeWords],phrase:lesson.phrases,sentence:lesson.sentences,passage:window.WMA1Passages || []};
  const stages = WMClassGroups.groups.map(group=>({
    ...group,...Object.fromEntries(types.map(type=>[type,group.id===lesson.group?items[type]:[]]))
  }));
  const byId = Object.fromEntries(stages.map(stage=>[stage.id,stage]));
  function resolve(id,level) {
    return byId[id] || byId[WMClassGroups.forLevel(level)?.id] || stages.find(stage=>stage.stage===id);
  }
  const books = types.map(type=>({
    id:lesson.id+'-'+type,type,category:lesson.group,titleZh:'第 1 课',
    titleEn:'Lesson 1',items:items[type]
  }));
  window.WMStageLibrary = {stages,byId,types,books,resolve,passages:[]};
  window.WMKindergartenListening129 = {categories:stages,books};

  window.WMA1LessonNumber = function mount(category, host) {
    const number = document.createElement('select');
    number.id='lesson-number';
    number.setAttribute('aria-label','课次');
    const option=document.createElement('option');
    number.append(option);
    category.after(number);
    host.classList.add('wm-a1-lesson-picker');
    function sync() {
      const available=category.value===lesson.group;
      option.textContent=available?'1':'—';
      option.value=available?'1':'';
      number.disabled=!available;
    }
    category.addEventListener('change',sync);
    sync();
  };
})();
