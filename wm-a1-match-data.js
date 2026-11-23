(() => {
  'use strict';
  const lesson = WMA1Lesson;
  const words = {...lesson.match};
  for (const item of lesson.words) {
    words[item.id + '-type'] = {...item,zh:lesson.category(item),pairType:'classification'};
    words[item.id] = {...words[item.id],pairType:'meaning'};
  }
  // Map each old term to a different constituent to keep existing progress and reviews.
  const replacedWordIds = {
    'a1-theme-vowel-sound':'a1-match-part-vowel',
    'a1-theme-consonant-sound':'a1-match-part-sound',
    'a1-theme-vowel-letter':'a1-match-part-letter',
    'a1-theme-consonant-letter':'a1-match-part-consonant',
    'a1-theme-first-sound':'a1-match-part-first'
  };
  for (const item of [...lesson.letters,...lesson.sounds]) words[item.id].pairType = 'classification';
  const categories = Object.values(lesson.labels).flatMap(group=>Object.values(group));
  const firstIds=Object.keys(words);
  const lesson2=window.WMA1Lesson2;
  const secondIds=[];
  for(const item of lesson2?.words||[]){
    words[item.id]={...item,pairType:'meaning'};
    words[item.id+'-type']={...item,zh:lesson2.labels[item.group],pairType:'classification'};
    secondIds.push(item.id,item.id+'-type');
  }
  const secondLevel=lesson2?[{
    level:2,stage:'kindergarten',group:lesson2.group,lessons:[],meanings:{},
    classification:Object.values(lesson2.labels),sourceWordIds:secondIds
  }]:[];
  window.WMMatchData = {
    version:6427,courseId:lesson.id,words,replacedWordIds,fillerIds:[],
    levels:[{
      level:1,stage:'kindergarten',group:lesson.group,lessons:[],meanings:{},
      classification:categories,sourceWordIds:firstIds
    },...secondLevel]
  };
})();
