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
  const phonics=window.WMA1Phonics;
  for(const row of phonics?.rows||[]){
    const split=Math.ceil(row.patterns.length/2);
    const groups=row.patterns.join(' / ').length<=22?[row.patterns]:
      [row.patterns.slice(0,split),row.patterns.slice(split)];
    groups.forEach((spelling,index)=>{
      const id='3yy3-'+row.id+'-'+index;
      words[id]={id:row.id,en:row.ipa,zh:spelling.join(' · '),kind:'sound-spelling',matchKey:'phonics:'+row.id};
    });
    row.examples.forEach((item,index)=>{
      const id='3yy3-pair-'+row.id+'-'+index;
      words[id]={id:row.id,en:row.ipa,zh:item.en,ranges:item.ranges,kind:'sound-word',matchKey:'word-sound:'+row.id};
      thirdIds.push(id);
    });
  }
  for(const item of phonics?.words||[]){
    words[item.id]={...item,pairType:'meaning',zh:item.main};
    thirdIds.push(item.id);
  }
  const thirdLevel=thirdIds.length?[{
    level:201,stage:'primary',group:'primary-2',lessons:[],meanings:{},classification:[],sourceWordIds:thirdIds
  }]:[];
  const vocabularyLevels=[];
  for(const course of Object.values(WMVocabulary4.courses)){
  const fourthIds=[];
  for(const word of course.words){
    for(const [index,use] of word.uses.entries()){
      const context=use.phrase;
      const id=use.id.replace('-use-','-');
      words[id]={...word,id,en:word.en,zh:use.zh,pairType:'meaning',context};
      fourthIds.push(id);
      // V64.114 第四课整课都是名词，不再出「是不是名词」的词类对
      if(course.number!==4){
        words[id+'-type']={...word,id,en:word.en,zh:use.label,pairType:'word-class',context};
        fourthIds.push(id+'-type');
      }
    }
  }
  // V64.113 第三课：冠词 a / an 识别配对（左「___ 词」对应右「a/an 词」）
  if(course.number===3){
    for(const word of course.words){
      const use=word.uses.find(item=>item.part==='n');
      if(!use)continue;
      const note=use.note||'';
      let art=null;
      if(/用 an/.test(note))art='an';
      else if(/用 a /.test(note))art='a';
      else if(['ball','bank','bike','cake','card'].includes(word.en))art='a';
      if(!art)continue;
      const id='3ch1-article-'+word.en;
      words[id]={id,en:'___ '+word.en,zh:art+' '+word.en,pairType:'article',matchKey:'article:'+word.en};
      fourthIds.push(id);
    }
  }
  vocabularyLevels.push({
    level:course.number,stage:'kindergarten',group:lesson.group,lessons:[],meanings:{},classification:[],sourceWordIds:fourthIds
  });
  }
  for(const item of Object.values(words)){
    if(item.pairType==='classification')item.zh=classificationLabel(item.zh);
  }
  window.WMMatchData = {
    classificationLabel,
    version:6427,courseId:lesson.id,words,replacedWordIds,fillerIds:[],
    levels:[{
      level:1,stage:'kindergarten',group:lesson.group,lessons:[],meanings:{},
      classification:categories.map(classificationLabel),sourceWordIds:firstIds
    },...secondLevel,...vocabularyLevels,...thirdLevel]
  };
})();
