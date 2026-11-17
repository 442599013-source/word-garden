/* V64.53: first mastery dates, local-calendar statistics and personal goals. */
(()=>{'use strict';
const KEY='wm-learning-stats-v6453',skills=['listening','speaking','reading','writing'];
const normalize=s=>String(s||'').normalize('NFKC').trim().replace(/\s+/g,' ').toLowerCase();
function read(key){const value=JSON.parse(localStorage.getItem(key)||'{}');return value&&typeof value==='object'&&!Array.isArray(value)?value:{}}
function words(skill){const key=skill==='listening'?'wm-listening-learned-v6444':'wm-study-learned-v6446-'+skill;return new Set(Object.entries(read(key)).filter(([k,v])=>v===true&&k.startsWith('word|')).map(([k])=>normalize(k.slice(5))).filter(Boolean))}
function day(d=new Date()){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function sync(){
 const state=read(KEY),initial=!state.initialized;state.first=state.first||{};state.goals=state.goals||{today:30,week:150,month:600};
 for(const skill of skills){const map=state.first[skill]||(state.first[skill]={});for(const word of words(skill))if(!Object.prototype.hasOwnProperty.call(map,word))Object.defineProperty(map,word,{value:initial?null:day(),enumerable:true,writable:true,configurable:true})}
 state.initialized=true;localStorage.setItem(KEY,JSON.stringify(state));return state;
}
function summary(period='all',now=new Date()){
 const state=sync(),today=day(now),monday=new Date(now.getFullYear(),now.getMonth(),now.getDate());monday.setDate(monday.getDate()-((monday.getDay()+6)%7));
 const start=period==='today'?today:period==='week'?day(monday):period==='month'?today.slice(0,7)+'-01':null;
 // Union the qualifying words AFTER each skill's date filter.
 // An older/undated mark in another skill must not hide today's new mastery.
 const union=new Set(),counts={};
 for(const skill of skills){counts[skill]=0;for(const word of words(skill)){const date=state.first[skill][word];if(!start||(date&&date>=start&&date<=today)){counts[skill]++;union.add(word)}}}
 const total=union.size;
 return {total,...counts,goals:state.goals,trackingSince:state.trackingSince||null};
}
function saveGoals(values){const state=sync();for(const k of ['today','week','month']){const n=Number(values[k]);if(!Number.isSafeInteger(n)||n<1||n>100000)throw Error('Enter whole numbers from 1 to 100,000.');state.goals[k]=n}localStorage.setItem(KEY,JSON.stringify(state));window.dispatchEvent(new Event('wm-learning-stats-updated'))}
function safeSync(){try{sync()}catch(e){console.warn('Learning statistics could not be saved.',e)}}
window.WMLearningStats={summary,saveGoals,sync,day};safeSync();
for(const event of ['wm-study-updated','pageshow'])window.addEventListener(event,safeSync);
window.addEventListener('storage',e=>{if(e.key?.startsWith('wm-study-learned-')||e.key==='wm-listening-learned-v6444')safeSync()});
document.addEventListener('visibilitychange',()=>{if(!document.hidden)safeSync()});
document.addEventListener('click',e=>{if(e.target.closest('[data-learning-stats]')){e.preventDefault();location.href='learning-stats.html?v=64.57'}},true);
})();
