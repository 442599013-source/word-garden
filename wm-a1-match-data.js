(() => {
  'use strict';
  const lesson = WMA1Lesson;
  const exampleSentences = ['Do it.','Go on.','I am OK.','It is on.','We go in.'];
  const lessons = exampleSentences.map(en => {
    const item = lesson.sentences.find(row=>row.en===en);
    return {id:item.id,en:item.en,cn:item.zh};
  });
  window.WMMatchData = {
    version:6427,courseId:lesson.id,words:lesson.match,fillerIds:[],
    levels:[{
      level:1,stage:'kindergarten',group:lesson.group,lessons,meanings:{},
      sourceWordIds:Object.keys(lesson.match)
    }]
  };
})();
