(() => {
  'use strict';
  const journey=WMJourney, params=new URLSearchParams(location.search);
  const number=journey.integer(params.get('level'),journey.selected()), level=journey.level(number);
  const context=document.getElementById('activity-context');
  const host=document.getElementById('activity-links');
  journey.saveSelected(number);
  const lesson=window.WMClassroomCatalog?.lessons.find(item=>item.number===number);
  context.textContent=lesson?lesson.code+' · '+lesson.titleZh:'Level '+number+' · '+level.group.zh+' · 暂无新课内容';
  document.getElementById('activity-back').href='level-road.html?stage='+level.stage.id+'&group='+Math.floor(level.classIndex/3);
  const entries=[
    ['classroom','Magic Classroom','魔法课堂','✦'],
    ['match','Magic Match','魔法配对','◇'],
    ['listening','Light of Wisdom','启蒙之光 · 听力','♪'],
    ['speaking','Blessed Voice','祝福之声 · 口语','♬'],
    ['reading','Magic Awakening','魔法唤醒 · 阅读','▱'],
    ['writing','Guardian Halo','守护之环 · 写作','✎'],
    ['assessment','Classroom Practice','课堂练习','☆']
  ];
  for(const [id,en,zh,icon] of entries){
    const available=!!lesson;
    const card=document.createElement(available?'a':'div');
    card.className='advance-card';
    card.dataset.activity=id;
    if(available){
      card.href=id==='assessment'?'sentence-game.html?level='+lesson.number+'#a1-assessment':journey.href(number,id);
    }else card.setAttribute('aria-disabled','true');
    const mark=document.createElement('span');
    mark.className='advance-mark';
    mark.textContent=icon;
    mark.setAttribute('aria-hidden','true');
    const text=document.createElement('span'),title=document.createElement('strong'),sub=document.createElement('small');
    title.textContent=en;
    sub.textContent=zh;
    text.append(title,sub);
    const arrow=document.createElement('span');
    arrow.className='advance-arrow';
    arrow.textContent='›';
    card.append(mark,text,arrow);
    host.append(card);
  }
})();
