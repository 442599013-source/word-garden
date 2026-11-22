(() => {
  'use strict';
  const lesson = WMA1Lesson;
  const words = {...lesson.match};
  for (const item of lesson.words) {
    words[item.id + '-type'] = {...item,zh:lesson.category(item),pairType:'classification'};
    words[item.id] = {...words[item.id],pairType:'meaning'};
  }
  for (const item of lesson.themeWords) words[item.id] = {...item,pairType:'meaning'};
  for (const item of [...lesson.letters,...lesson.sounds]) words[item.id].pairType = 'classification';
  const categories = Object.values(lesson.labels).flatMap(group=>Object.values(group));
  window.WMMatchData = {
    version:6427,courseId:lesson.id,words,fillerIds:[],
    levels:[{
      level:1,stage:'kindergarten',group:lesson.group,lessons:[],meanings:{},
      classification:categories,sourceWordIds:Object.keys(words)
    }]
  };
})();
