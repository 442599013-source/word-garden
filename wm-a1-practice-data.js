(() => {
  'use strict';
  const lesson = WMA1Lesson, lesson2 = window.WMA1Lesson2;
  const types = ['word','phrase','sentence','passage'];
  const lessons = {
    1:{word:lesson.words,phrase:lesson.phrases,sentence:lesson.sentences,passage:window.WMA1Passages||[]}
  };
  if(lesson2) lessons[2]={
    word:lesson2.words,phrase:lesson2.phrases,sentence:lesson2.sentences,passage:lesson2.passages
  };
  if(window.WMA1Phonics) lessons[201]={word:WMA1Phonics.words,phrase:[],sentence:[],passage:[]};
  for(const course of Object.values(window.WMVocabulary4?.courses||{}))lessons[course.number]=course.practice;
  const search=new URLSearchParams(location.search);
  const selected=search.get('level');
  const scope=Object.hasOwn(lessons,selected)?selected:'all';
  const number=Number(scope)||0;
  const labels=Object.fromEntries(WMClassroomCatalog.lessons.map(c=>[c.number,c.titleZh]));
  labels.all='汇总';
  const normalize=window.WMStudyTools.normalize;
  const stagesOf=key=>WMClassGroups.forLevel(Number(key));
  const groups=[{id:'all-stages',stage:'all',en:'All stages',zh:'全部阶段汇总'},
    ...WMUnifiedCourseMeta.ranges.flatMap(stage=>[
      {id:stage.id+'-summary',stage:stage.id,en:stage.en+' · All',zh:stage.zh+'阶段汇总'},
      ...stage.groups])];
  function keysFor(group){
    return Object.keys(lessons).filter(key=>{
      const owner=stagesOf(key);
      return group==='all-stages'||group===owner?.stage+'-summary'||group===owner?.id;
    });
  }
  function itemsFor(group,type,selection){
    const keys=keysFor(group);
    if(keys.includes(selection))return lessons[selection][type];
    return [...new Map(keys.flatMap(key=>lessons[key][type]).map(x=>[normalize(x.en),x])).values()];
  }
  const wordSources=new Map();
  for(const [source,items] of Object.entries(lessons)){
    for(const item of items.word){
      const key=normalize(item.en);
      const found=wordSources.get(key)||[];
      if(!found.includes(source))found.push(source);
      wordSources.set(key,found);
    }
  }
  function lessonLabel(item) {
    const sources=item&&wordSources.get(normalize(item.en));
    return sources?.map(source=>labels[source]).join(' · ')||'';
  }
  const stages=groups.map(group=>({...group,...Object.fromEntries(types.map(type=>[type,itemsFor(group.id,type,scope)]))}));
  const byId=Object.fromEntries(stages.map(stage=>[stage.id,stage]));
  function resolve(id,level){
    return byId[id]||byId[WMClassGroups.forLevel(level)?.id]||byId[id+'-summary'];
  }
  const books=stages.flatMap(group=>types.filter(type=>group[type].length).map(type=>({
    id:((group.id===stagesOf(scope)?.id&&({'1':lesson.id,'2':'goldy-a1-first-sounds-2','201':'goldy-a1-phonics-3'})[scope])||group.id+'-'+scope)+'-'+type,
    type,category:group.id,titleZh:labels[scope],titleEn:group.en,items:group[type]
  })));
  function openScope(selection,stage,type,{review=false,target}={}){
    const url=new URL(window.location.href);
    url.searchParams.set('level',selection);
    url.searchParams.set('stage',stage);
    if(type)url.searchParams.set('type',type);
    if(review)url.searchParams.set('review','1');else url.searchParams.delete('review');
    if(target)url.searchParams.set('reviewWord',target.en);else url.searchParams.delete('reviewWord');
    window.location.href=url.href;
  }
  function listScope(stage,type,favoritesOnly){
    if(type!=='word')return {};
    return {
      options:[['all',labels.all],...keysFor(stage).map(id=>[id,labels[id]])],
      initialScope:favoritesOnly?scope:'all',
      itemsForScope:selection=>itemsFor(stage,type,selection),
      itemLabel:lessonLabel
    };
  }
  window.WMStageLibrary={stages,byId,types,books,resolve,passages:[],number,scope,lessonLabel,openScope,listScope};
  window.WMKindergartenListening129={categories:stages,books};

  window.WMA1LessonNumber=function mount(category,host,isReview=()=>false){
    const select=document.createElement('select');
    select.id='lesson-number';
    select.setAttribute('aria-label','课次');
    category.after(select);
    host.classList.add('wm-a1-lesson-picker');
    function sync(){
      const available=true;
      const options=['all',...keysFor(category.value)];
      select.replaceChildren(...options.map(value=>{
        const option=document.createElement('option');
        option.value=value;
        option.textContent=labels[value]||'—';
        return option;
      }));
      select.value=options.includes(scope)?scope:'all';
      select.disabled=!available;
    }
    select.addEventListener('change',()=>{
      if(!select.value)return;
      const active=document.querySelector('#types [aria-pressed="true"]');
      openScope(select.value,category.value,select.value==='201'?'word':active?.dataset.type,{review:isReview()});
    });
    category.addEventListener('change',()=>{
      sync();
      if(scope!=='all'&&!keysFor(category.value).includes(scope)){
        const active=document.querySelector('#types [aria-pressed="true"]');
        openScope('all',category.value,active?.dataset.type,{review:isReview()});
      }
    });
    sync();
  };
})();
