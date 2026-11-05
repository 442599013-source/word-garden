/* Shared, cumulative curriculum navigation. Content availability comes from the real bank. */
(()=>{'use strict';
const stages=[['kindergarten','幼儿园','Kindergarten',['小班','中班','大班']],['primary','小学','Primary School',['一年级','二年级','三年级','四年级','五年级','六年级']],['junior','初中','Junior Secondary',['初一','初二','初三']],['senior','高中','Senior Secondary',['高一','高二','高三']],['university','大学','University',['一年级','二年级','三年级']],['postgraduate','研究生','Postgraduate',['一年级','二年级','三年级']]];
let offset=0;const list=stages.map(([id,zh,en,classes])=>{const s={id,zh,en,classes,start:offset+1,end:offset+classes.length*40};offset=s.end;return s});
const integer=(value,fallback=1)=>/^\d+$/.test(String(value))&&Number(value)>=1&&Number(value)<=offset?Number(value):fallback;
function level(value){const n=integer(value),s=list.find(x=>n>=x.start&&n<=x.end),classIndex=Math.floor((n-s.start)/40);return {number:n,stage:s,classIndex,className:s.classes[classIndex],local:(n-s.start)%40+1,theme:window.WMMainCourse?.levels[n-1]||window.WM_LISTENING_BANK?.levels[n-1]||null,legacyTheme:window.WM_LISTENING_BANK?.levels[n-1]||null}}
function block(value){const n=integer(value),start=Math.floor((n-1)/20)*20+1,end=start+19;return {id:start+'-'+end,start,end,kind:(Math.floor((start-1)/20)%2===0?'期中测评':'期末测评'),kindEn:(Math.floor((start-1)/20)%2===0?'Midterm Assessment':'Final Assessment')}}
function read(key,fallback={}){try{return JSON.parse(localStorage.getItem(key)||'null')||fallback}catch{return fallback}}
function saveSelected(n){try{localStorage.setItem('wm-journey-selection-v21',String(integer(n)))}catch{}}
function selected(){return integer(read('wm-journey-selection-v21',1))}
function progress(n){const i=integer(n)-1,k=x=>window.WMCourse?.key(x)||x,game=read(window.WMMainCourse?'wm-journey-game-progress-v21::'+WMMainCourse.id:k('wm-journey-game-progress-v21')),legacy=read(window.WMMainCourse?'wm-sentences-v9-progress::'+WMMainCourse.id:k('wm-sentences-v9-progress')),li=read('wm-listening-rs129-v31',null)||read(k('wm-listening-progress-v13')),r={};r.match=game[i]?.completed?.length||((legacy.level===i)?legacy.completed?.length||0:0);r.listening=Number(li.progress?.[i+':passage'])||0;for(const s of ['speaking','reading','writing'])r[s]=Number(read(k('wm-'+s+'-progress-v20')).progress?.[i])||0;return r}
function href(n,activity){n=integer(n);if(activity==='assessment')return 'assessment.html?block='+block(n).start+'&level='+n;return ({match:'sentence-game',listening:'listening',speaking:'speaking',reading:'reading',writing:'writing'}[activity])+'.html?level='+n+'&from=journey'}
window.WMJourney={stages:list,total:offset,integer,level,block,read,selected,saveSelected,progress,href};
})();
