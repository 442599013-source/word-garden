/* V38: resume each module independently; deliberate map selections still work. */
(()=>{'use strict';
const p=new URLSearchParams(location.search),raw=p.get('level'),name=location.pathname.split('/').pop(),module=({'sentence-game.html':'advance','magic-classroom.html':'advance','listening.html':'listening','speaking.html':'speaking','reading.html':'reading','writing.html':'writing'})[name],bank=window.WM_LISTENING_RS_BANK?.lessons||window.WM_LISTENING_BANK?.levels||window.WM_GAME_UNITS;
if(!module||!bank?.length)return;
const scoped=key=>window.WMCourse?.key(key)||key,key=module==='listening'?'wm-listening-rs129-v31':scoped(module==='advance'?'wm-sentences-v9-progress':'wm-'+module+'-progress-v20');
let saved;try{saved=JSON.parse(localStorage.getItem(key)||'null')}catch{}
const valid=n=>Number.isInteger(n)&&n>=1&&n<=bank.length,requested=/^\d+$/.test(raw||'')?Number(raw):NaN,resume=Number.isInteger(saved?.level)?saved.level+1:NaN,explicit=p.get('from')==='journey'||p.get('choose')==='1';
if(explicit&&raw!==null&&!valid(requested)){location.replace('level-activities.html?level='+window.WMJourney.integer(raw));throw Error('Unavailable level')}
const n=explicit&&valid(requested)?requested:valid(resume)?resume:valid(requested)?requested:1;
window.WMRequestedLevel=n-1;
window.WMLevelRoute={back:i=>'level-activities.html?level='+(i+1),sync(i){if(!valid(i+1))return;const back=document.querySelector('.back');if(back)back.href=this.back(i);window.WMJourney.saveSelected(i+1);const url=new URL(location.href);url.searchParams.set('level',i+1);url.searchParams.delete('choose');url.searchParams.delete('from');history.replaceState(null,'',url.pathname+url.search)}};
window.WMLevelRoute.sync(n-1);
})();
