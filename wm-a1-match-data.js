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
  window.WMMatchData = {
    version:6427,courseId:lesson.id,words,replacedWordIds,fillerIds:[],
    levels:[{
      level:1,stage:'kindergarten',group:lesson.group,lessons:[],meanings:{},
      classification:categories,sourceWordIds:Object.keys(words)
    }]
  };
})();
