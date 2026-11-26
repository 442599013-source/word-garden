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
  if(window.WMA1Phonics) lessons[3]={word:WMA1Phonics.words,phrase:[],sentence:[],passage:[]};
  if(window.WMVocabulary4) lessons[4]=WMVocabulary4.practice;
  const labels = lesson2?{all:'汇总',1:'第 1 课',2:'第 2 课',3:'第 3 课',4:'第 4 课'}:{1:'第 1 课'};
  const search = new URLSearchParams(window.location?.search||'');
  const selected = search.get('level');
  const scope = Object.hasOwn(lessons,selected)?selected:lesson2?'all':'1';
  const number = scope==='all'?0:Number(scope);
  const normalize = window.WMStudyTools.normalize;
  const unique = rows => [...new Map(rows.map(item=>[normalize(item.en),item])).values()];
  const allItems = Object.fromEntries(types.map(type=>[type,unique(Object.values(lessons).flatMap(items=>items[type]))]));
  if (lessons[4]) {
    const known=new Map(lessons[4].word.map(item=>[normalize(item.en),item]));
    allItems.word=allItems.word.map(item=>known.get(normalize(item.en))||item);
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
  function availableItems(type,selection=scope){
    return selection==='all'?allItems[type]:lessons[selection]?.[type]||[];
  }
  const stages=WMClassGroups.groups.map(group=>({
    ...group,...Object.fromEntries(types.map(type=>[type,group.id===lesson.group?availableItems(type):[]]))
  }));
  const byId=Object.fromEntries(stages.map(stage=>[stage.id,stage]));
  function resolve(id,level){
    return byId[id]||byId[WMClassGroups.forLevel(level)?.id]||stages.find(stage=>stage.stage===id);
  }
  const books=types.map(type=>({
    id:({all:lesson.id+'-all',1:lesson.id,2:'goldy-a1-first-sounds-2',3:'goldy-a1-phonics-3',4:'goldy-vocabulary-4'})[scope]+'-'+type,
    type,category:lesson.group,titleZh:labels[scope],titleEn:number?'Lesson '+number:'All lessons',
    items:availableItems(type)
  }));
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
    if(!lesson2||stage!==lesson.group||type!=='word')return {};
    return {
      options:[['all',labels.all],...Object.keys(lessons).map(id=>[id,labels[id]])],
      initialScope:favoritesOnly?scope:'all',
      itemsForScope:selection=>availableItems(type,selection),
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
      const available=category.value===lesson.group;
      const options=available?(lesson2?['all',...Object.keys(lessons)]:['1']):[''];
      select.replaceChildren(...options.map(value=>{
        const option=document.createElement('option');
        option.value=value;
        option.textContent=labels[value]||'—';
        return option;
      }));
      select.value=available?scope:'';
      select.disabled=!available;
    }
    select.addEventListener('change',()=>{
      if(!select.value)return;
      const active=document.querySelector('#types [aria-pressed="true"]');
      openScope(select.value,category.value,select.value==='3'?'word':active?.dataset.type,{review:isReview()});
    });
    category.addEventListener('change',sync);
    sync();
  };
})();
