/* V64.26: presentation and routes only; existing level numbers and progress remain intact. */
(()=>{'use strict';
function currentLevel(){let n=0;try{n=Number(localStorage.getItem('wm-journey-selection-v21'));if(!Number.isInteger(n)||n<1)n=Number(JSON.parse(localStorage.getItem(window.WMMatchProgressKey?.()||'wm-wordmatch-v35')||'{}').level)}catch{}return Number.isInteger(n)&&n>=1&&n<=(window.WMUnifiedCourseMeta?.levelCount||840)?n:1}
function stageOf(n){const mapped=window.WMUnifiedCourseMeta?.ranges.find(r=>n>=r.start&&n<=r.end);if(mapped)return mapped.id;return n<=120?'kindergarten':n<=360?'primary':n<=480?'junior':n<=600?'senior':n<=720?'university':'postgraduate'}
function routeFor(index){const n=currentLevel();return index===0?'level-road.html?stage='+stageOf(n):index===1?'word-match.html':'level-activities.html?level='+n}
function decorate(){
 const names={kindergarten:['Kindergarten','kindergarten'],primary:['Primary School','primary'],junior:['Junior School','junior']};
 for(const [cls,[name,id]] of Object.entries(names)){
  const a=document.querySelector('#home-stage .milestones .'+cls);if(!a)continue;a.href='level-road.html?stage='+id;a.setAttribute('aria-label',name);
  a.querySelectorAll('small').forEach(n=>n.hidden=true);
 }
 document.querySelectorAll('#home-stage .v48-stats>.v57-stat').forEach((n,i)=>{n.setAttribute('role','link');n.setAttribute('tabindex','0');n.setAttribute('aria-label',['Open levels','Open Magic Match','Open skill training'][i]);});
}
function navigate(e){const plaque=e.target.closest('#home-stage .milestones a');if(plaque){const type=plaque.classList.contains('kindergarten')?'kindergarten':plaque.classList.contains('primary')?'primary':plaque.classList.contains('junior')?'junior':null;if(type){e.preventDefault();e.stopImmediatePropagation();location.href='level-road.html?stage='+type;}return;}
 const n=e.target.closest('#home-stage .v48-stats>.v57-stat');if(!n)return;const nodes=[...n.parentElement.children],i=nodes.indexOf(n);if(i<0||i>2)return;e.preventDefault();e.stopImmediatePropagation();location.href=routeFor(i);
}
function init(){if(!document.getElementById('home-stage'))return;decorate();document.addEventListener('click',navigate,true);document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('#home-stage .v48-stats>.v57-stat'))navigate(e)},true);window.addEventListener('pageshow',decorate);}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
