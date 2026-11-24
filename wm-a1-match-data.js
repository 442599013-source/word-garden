(() => {
  'use strict';
  const lesson = WMA1Lesson;
  const aliases={
    '元音字母':'Vowel letter','辅音字母':'Consonant letter',
    '元音音素':'Vowel sound','辅音音素':'Consonant sound',
    '以元音音素开头':'Starts with a vowel sound','以元音音素开头的单词':'Starts with a vowel sound',
    '以辅音音素开头':'Starts with a consonant sound','以辅音音素开头的单词':'Starts with a consonant sound'
  };
  const classificationLabel=value=>aliases[value]||value;
  const words = Object.fromEntries(Object.entries(lesson.match).map(([id,item])=>[id,{...item}]));

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
    classification:Object.values(lesson2.labels).map(classificationLabel),sourceWordIds:secondIds
  }]:[];
  const thirdIds=[];
  for(const row of window.WMA1Phonics?.rows||[]){
    const groups=WMA1Phonics.cardGroups(row);
    groups.forEach((spelling,i)=>{
      const id='3yy3-'+row.id+'-'+i;
      words[id]={id:row.id,en:row.ipa,zh:spelling.join(' · '),kind:'sound-spelling',matchKey:'phonics:'+row.id};
      thirdIds.push(id);
    });
  }
  const thirdLevel=thirdIds.length?[{
    level:3,stage:'kindergarten',group:lesson.group,lessons:[],meanings:{},classification:[],sourceWordIds:thirdIds
  }]:[];
  for(const item of Object.values(words)){
    if(item.pairType==='classification')item.zh=classificationLabel(item.zh);
  }
  window.WMMatchData = {
    classificationLabel,
    version:6427,courseId:lesson.id,words,replacedWordIds,fillerIds:[],
    levels:[{
      level:1,stage:'kindergarten',group:lesson.group,lessons:[],meanings:{},
      classification:categories.map(classificationLabel),sourceWordIds:firstIds
    },...secondLevel,...thirdLevel]
  };
})();
