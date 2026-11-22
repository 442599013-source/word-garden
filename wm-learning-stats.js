/* First mastery dates, local-calendar statistics and personal goals. */
(()=>{
'use strict';

const KEY='wm-learning-stats-v6453';
const course='goldy-a1-letter-sounds-1';
const activityKey='wm-learning-activities::'+course;
const skills=['listening','speaking','reading','writing'];
const activities=['classroom','match'];
const normalize=value=>String(value||'').normalize('NFKC').trim().replace(/\s+/g,' ').toLowerCase();

function read(key){
 try{
  const value=JSON.parse(localStorage.getItem(key)||'{}');
  return value&&typeof value==='object'&&!Array.isArray(value)?value:{};
 }catch{return {};}
}
function day(d=new Date()){
 return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
function learnedKey(skill){
 return skill==='listening'?'wm-listening-learned-v6444':'wm-study-learned-v6446-'+skill;
}
function learnedScopes(){
 const scopes=new Map(skills.map(skill=>[skill,new Set(['','::'+course])]));
 for(let i=0;i<localStorage.length;i++){
  const key=localStorage.key(i);
  for(const [skill,suffixes] of scopes){
   const prefix=learnedKey(skill);
   if(key?.startsWith(prefix+'::'))suffixes.add(key.slice(prefix.length));
  }
 }
 return scopes;
}
// An undated legacy entry might predate a dated entry in another level or skill.
function mergeDate(map,word,date){
 const previous=map.get(word);
 if(!map.has(word)||!date||(previous&&date<previous))map.set(word,date);
}
function skillEntries(skill,suffixes){
 const result=new Map();
 for(const suffix of suffixes){
  const stamps=read('wm-study-order-v6460-'+skill+suffix).learned||{};
  for(const [key,checked] of Object.entries(read(learnedKey(skill)+suffix))){
   if(checked!==true||!key.startsWith('word|'))continue;
   const word=normalize(key.slice(5));
   if(!word)continue;
   const stamp=stamps[key];
   const time=new Date(Number.isFinite(stamp)&&stamp>0?stamp:NaN);
   mergeDate(result,word,Number.isFinite(time.getTime())?day(time):null);
  }
 }
 return result;
}
function currentEntries(){
 const scopes=learnedScopes();
 return new Map(skills.map(skill=>[skill,skillEntries(skill,scopes.get(skill))]));
}
function words(skill){
 return skills.includes(skill)?new Set(skillEntries(skill,learnedScopes().get(skill)).keys()):new Set();
}
function recoveredActivity(){
 const record=read(activityKey),lesson=window.WMA1Lesson;
 if(lesson?.id!==course)return record;

 const savedWords=read(course+':classification').words;
 const classroom=new Set(Array.isArray(savedWords)?savedWords:[]);
 const rounds=Object.values(read('wm-wordmatch-v35::'+course).rounds||{});
 const matching=new Set(rounds.flatMap(round=>Array.isArray(round?.done)?round.done:[]));
 let changed=false;
 for(const [type,ids] of [['classroom',classroom],['match',matching]]){
  const dates=record[type]||{};
  for(const item of lesson.words){
   const word=normalize(item.en);
   if(ids.has(item.id)&&!Object.hasOwn(dates,word)){dates[word]=null;changed=true;}
  }
  record[type]=dates;
 }
 if(changed)localStorage.setItem(activityKey,JSON.stringify(record));
 return record;
}
function recordWord(type,value){
 const word=normalize(value);
 if(!activities.includes(type)||!word)return;
 try{
  const record=read(activityKey);
  const dates=record[type]||{};
  if(Object.hasOwn(dates,word))return;
  dates[word]=day();
  record[type]=dates;
  localStorage.setItem(activityKey,JSON.stringify(record));
  window.dispatchEvent(new Event('wm-learning-stats-updated'));
 }catch(error){console.warn('Learning activity could not be saved.',error);}
}
function sync(entries=currentEntries()){
 const state=read(KEY);
 state.goals=state.goals||{today:30,week:150,month:600};
 state.verifiedDates=state.verifiedDates||{};
 for(const skill of skills){
  const verified=new Map(Object.entries(state.verifiedDates[skill]||{}));
  for(const [word,date] of entries.get(skill)){
   // The old statistics cache could assign the day on which an unknown record was first read.
   if(date)mergeDate(verified,word,date);
  }
  state.verifiedDates[skill]=Object.fromEntries(verified);
 }
 const serialized=JSON.stringify(state);
 if(localStorage.getItem(KEY)!==serialized)localStorage.setItem(KEY,serialized);
 return state;
}
function makeSummaries(periods,now){
 const entries=currentEntries(),state=sync(entries),today=day(now);
 const monday=new Date(now.getFullYear(),now.getMonth(),now.getDate());
 monday.setDate(monday.getDate()-((monday.getDay()+6)%7));
 const starts={today,week:day(monday),month:today.slice(0,7)+'-01'};
 const combined=new Map(),active=new Set();
 for(const skill of skills){
  const verified=new Map(Object.entries(state.verifiedDates[skill]));
  for(const [word,date] of entries.get(skill)){
   active.add(word);
   if(date&&verified.has(word))entries.get(skill).set(word,verified.get(word));
   mergeDate(verified,word,date);
  }
  for(const [word,date] of verified)mergeDate(combined,word,date);
 }
 return Object.fromEntries(periods.map(period=>{
  const start=starts[period];
  const included=date=>!start||!!date&&date>=start&&date<=today;
  const counts={};
  for(const skill of skills){
   counts[skill]=[...entries.get(skill).values()].filter(included).length;
  }
  const total=[...active].filter(word=>included(combined.get(word))).length;
  return [period,{total,...counts,goals:state.goals,trackingSince:state.trackingSince||null}];
 }));
}
function summary(period='all',now=new Date()){
 return makeSummaries([period],now)[period];
}
function summaries(now=new Date()){
 return makeSummaries(['today','week','month','all'],now);
}
function saveGoals(values){
 const state=sync();
 for(const key of ['today','week','month']){
  const value=Number(values[key]);
  if(!Number.isSafeInteger(value)||value<1||value>100000)throw Error('Enter whole numbers from 1 to 100,000.');
  state.goals[key]=value;
 }
 localStorage.setItem(KEY,JSON.stringify(state));
 window.dispatchEvent(new Event('wm-learning-stats-updated'));
}
function safeSync(){
 try{sync();recoveredActivity();}catch(error){console.warn('Learning statistics could not be saved.',error);}
}
const isProgressKey=key=>typeof key==='string'&&(key===activityKey||key.startsWith('wm-study-learned-')||key.startsWith('wm-listening-learned-v6444')||key.startsWith('wm-study-order-v6460-'));
window.WMLearningStats={summary,summaries,saveGoals,sync,day,words,recordWord,isProgressKey};
for(const event of ['wm-study-updated','pageshow'])window.addEventListener(event,safeSync);
window.addEventListener('storage',event=>{
 if(isProgressKey(event.key))safeSync();
});
document.addEventListener('visibilitychange',()=>{if(!document.hidden)safeSync();});
document.addEventListener('click',event=>{
 if(event.target.closest?.('[data-learning-stats]')){event.preventDefault();location.href='learning-stats.html?v=64.83';}
},true);
safeSync();
})();
