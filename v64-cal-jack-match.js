/* V64.4 Cal adopts Jack V63.10 Match stage timings and identical magic visual classes.
 * Jack code and images remain unchanged. This addon only runs when primary = cal_angel. */
(()=>{'use strict';
const CAL='cal_angel';
const pause=ms=>new Promise(r=>setTimeout(r,ms));
function bounds(n,stage){const a=n.getBoundingClientRect(),s=stage.getBoundingClientRect(),ratio=s.width/(stage.offsetWidth||s.width)||1;return{x:(a.left-s.left)/ratio,y:(a.top-s.top)/ratio,w:a.width/ratio,h:a.height/ratio};}
async function motion(node,frames,ms,ease='ease-in-out'){
 if(!node.animate){node.style.transform=frames.at(-1).transform||'';await pause(ms);return}
 const a=node.animate(frames,{duration:ms,easing:ease,fill:'forwards'});await a.finished.catch(()=>{});node.style.transform=frames.at(-1).transform||'';a.cancel();
}
// Exact Jack ring, beam, word-glow and star classes, duration, sequence, and coordinates.
function makeEffect(stage,from,to,targetRect){
 const nodes=[],timers=[];const add=(name,style)=>{const n=document.createElement('div');n.className=name;Object.assign(n.style,style);stage.append(n);nodes.push(n);return n};
 const len=Math.hypot(to.x-from.x,to.y-from.y),deg=Math.atan2(to.y-from.y,to.x-from.x)*180/Math.PI;
 const beam=add('jack633-beam',{left:from.x+'px',top:from.y+'px',width:len+'px',transform:`rotate(${deg}deg) scaleX(0)`});
 const ring=add('jack633-ring',{left:(to.x-43)+'px',top:(to.y-43)+'px',width:'86px',height:'86px'});
 const glow=add('jack633-glow',{left:targetRect.x+'px',top:targetRect.y+'px',width:targetRect.w+'px',height:targetRect.h+'px'});
 for(let i=0;i<18;i++){
  const a=i*Math.PI*2/18,r=35+(i%4)*12,s=add('jack633-star',{left:(to.x-12)+'px',top:(to.y-12)+'px'});
  timers.push(motion(s,[{opacity:0,transform:'translate(0,0) scale(.4)'},{opacity:1,transform:`translate(${Math.cos(a)*r*.5}px,${Math.sin(a)*r*.5}px) scale(1.5)`,offset:.3},{opacity:0,transform:`translate(${Math.cos(a)*r}px,${Math.sin(a)*r}px) scale(.3)`}],1000,'ease-out'));
 }
 timers.push(motion(beam,[{opacity:0,transform:`rotate(${deg}deg) scaleX(.05)`},{opacity:1,transform:`rotate(${deg}deg) scaleX(1)`,offset:.23},{opacity:.92,transform:`rotate(${deg}deg) scaleX(1)`,offset:.76},{opacity:0,transform:`rotate(${deg}deg) scaleX(1)`}],1000));
 timers.push(motion(ring,[{opacity:.1,transform:'scale(.25)'},{opacity:1,transform:'scale(1.25)',offset:.35},{opacity:0,transform:'scale(2.15)'}],1000,'ease-out'));
 timers.push(motion(glow,[{opacity:0,transform:'scale(.97)'},{opacity:1,transform:'scale(1.03)',offset:.17},{opacity:1,transform:'scale(1)',offset:.82},{opacity:0,transform:'scale(1.05)'}],1000));
 return Promise.all(timers).then(()=>nodes.forEach(n=>n.remove()));
}
async function point(source,en,zh){
 const stage=document.querySelector('#match-game .match-stage');if(!stage||!source.isConnected||!en?.isConnected||!zh?.isConnected)return;
 const start=bounds(source,stage);let tx=0,ty=0;
 const flyer=document.createElement('div');flyer.className='jack633-flyer v644-cal-flyer';Object.assign(flyer.style,{left:start.x+'px',top:start.y+'px',width:start.w+'px',height:start.h+'px'});
 const img=document.createElement('img');img.src='v64-cal-04.png';img.alt='';flyer.append(img);stage.append(flyer);
 const oldVis=source.style.visibility;source.style.visibility='hidden';
 try{
  for(let index=0;index<2;index++){
   const tile=index===0?en:zh;if(!tile.isConnected)break;const r=bounds(tile,stage),target={x:r.x+r.w/2,y:r.y+r.h/2};
   const destX=target.x-start.w*.84-start.x,destY=target.y-start.h*.26-start.y;
   // Same paths, duration and enlarged pose for both English and Chinese.
   await motion(flyer,[{transform:`translate(${tx}px,${ty}px) scale(${index===0?1:1.2})`},{transform:`translate(${destX}px,${destY}px) scale(1.2)`}],index===0?560:440,'cubic-bezier(.3,.75,.25,1)');tx=destX;ty=destY;
   await pause(70);
   const from={x:start.x+tx+start.w*.88,y:start.y+ty+start.h*.24};
   await makeEffect(stage,from,target,r);
  }
  await motion(flyer,[{transform:`translate(${tx}px,${ty}px) scale(1.2)`},{transform:'translate(0px,0px) scale(1)'}],590,'cubic-bezier(.34,.1,.3,1)');
 }finally{flyer.remove();source.style.visibility=oldVis}
}
// Same core/ring/star celebration and raised-wand hold as Jack (2000 ms).
function makeComboCelebrate(stage,origin,bonus=3,holdMs=2000){
 const nodes=[],timers=[];const add=(name,style)=>{const d=document.createElement('div');d.className=name;Object.assign(d.style,style);stage.append(d);nodes.push(d);return d};
 const burst=bonus>=10?14:bonus>=5?10:8;
 const core=add('jack633-combo-core',{left:(origin.x-17)+'px',top:(origin.y-17)+'px'}),ring=add('jack633-combo-ring',{left:(origin.x-53)+'px',top:(origin.y-53)+'px'});
 timers.push(motion(core,[{opacity:0,transform:'scale(.35)'},{opacity:1,transform:'scale(1.2)',offset:.18},{opacity:1,transform:'scale(1)',offset:.75},{opacity:0,transform:'scale(1.35)'}],holdMs,'ease-out'));
 timers.push(motion(ring,[{opacity:.05,transform:'scale(.35)'},{opacity:1,transform:'scale(1)',offset:.22},{opacity:.95,transform:'scale(1.08)',offset:.72},{opacity:0,transform:'scale(1.55)'}],holdMs,'ease-out'));
 for(let i=0;i<burst;i++){
  const a=i*Math.PI*2/burst,r=28+(i%3)*16,x=add('jack633-combo-star',{left:(origin.x-9)+'px',top:(origin.y-9)+'px'});
  timers.push(motion(x,[{opacity:0,transform:'translate(0,0) scale(.2)'},{opacity:1,transform:`translate(${Math.cos(a)*r*.55}px,${Math.sin(a)*r*.55}px) scale(1)`,offset:.22},{opacity:1,transform:`translate(${Math.cos(a)*r*.82}px,${Math.sin(a)*r*.82}px) scale(.95)`,offset:.74},{opacity:0,transform:`translate(${Math.cos(a)*r*1.05}px,${Math.sin(a)*r*1.05}px) scale(.25)`}],holdMs,'ease-out'));
 }
 return Promise.all(timers).then(()=>nodes.forEach(n=>n.remove()));
}
let celebrating=false;
async function celebrate(source,bonus){
 if(celebrating||!source?.isConnected)return;celebrating=true;const stage=document.querySelector('#match-game .match-stage');if(!stage){celebrating=false;return}
 const b=bounds(source,stage),board=document.getElementById('board'),point=board?bounds(board,stage):b;
 const target={x:point.x+point.w*.5,y:point.y+point.h*.34},start={x:b.x+b.w/2,y:b.y+b.h/2},dx=target.x-start.x,dy=target.y-start.y;
 const flyer=document.createElement('div');flyer.className='jack633-flyer v644-cal-flyer';Object.assign(flyer.style,{left:b.x+'px',top:b.y+'px',width:b.w+'px',height:b.h+'px'});
 const img=document.createElement('img');img.src='v64-cal-05.png';img.alt='';flyer.append(img);stage.append(flyer);const vis=source.style.visibility;source.style.visibility='hidden';
 try{
  await motion(flyer,[{transform:'translate(0,0) scale(1)'},{transform:`translate(${dx}px,${dy}px) scale(1.2)`}],550);
  const origin={x:b.x+dx+b.w*.6,y:b.y+dy+b.h*.22};await makeComboCelebrate(stage,origin,bonus,2000);await pause(120);
  await motion(flyer,[{transform:`translate(${dx}px,${dy}px) scale(1.2)`},{transform:'translate(0,0) scale(1)'}],550);
 }finally{flyer.remove();source.style.visibility=vis;celebrating=false}
}
function install(){
 const stage=document.querySelector('#match-game .match-stage'),hint=document.getElementById('hint');if(!stage||!hint||hint.dataset.v644CalJack)return;
 const prev=hint.onclick;if(typeof prev!=='function')return;hint.dataset.v644CalJack='1';let busy=false;
 const C=window.WMCompanions;if(C&&!C.__v644CalReward){
  const oldReward=C.reward;C.__v644CalReward=true;
  C.reward=function(bonus){
   const cal=stage.querySelector('.game-companions .slot-0[data-character="'+CAL+'"]:not([hidden])');
   if(cal&&[3,5,10].includes(Number(bonus))){void celebrate(cal,Number(bonus));return}
   return oldReward?.call(C,bonus);
  };
 }

 hint.onclick=async function(event){
  const cal=stage.querySelector('.game-companions .slot-0[data-character="'+CAL+'"]:not([hidden])');
  if(!cal||!document.getElementById('dialog')?.hidden)return prev.call(this,event);
  if(busy)return;busy=true;hint.disabled=true;
  // Preserve original Hint scoring, review queue and spoken word exactly once.
  const hidden=cal.hidden;cal.hidden=true;
  try{
   await prev.call(this,event);cal.hidden=hidden;
   const hinted=[...stage.querySelectorAll('#board .match-tile.hinted')],en=hinted.find(n=>n.dataset.lang==='en'),zh=hinted.find(n=>n.dataset.lang==='zh');
   if(en&&zh){const host=document.getElementById('effects');if(host){const label=document.createElement('div');label.className='v64-skill';label.textContent='Light of Wisdom';host.append(label);setTimeout(()=>label.remove(),3000)}await point(cal,en,zh)}
  }catch(e){console.warn('Cal Jack-matched Hint animation',e)}finally{cal.hidden=hidden;hint.disabled=false;busy=false}
 };
}
// v63-other-angel-hint installs in a zero-delay handler; this runs after it.
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(install,260),{once:true});else setTimeout(install,260);
})();
