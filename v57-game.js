/* V59: One angel flight per action. Replaces V57's duplicate combo observer.
 * V43 is authoritative for matching, scores, speech and hint costs.
 */
(()=>{'use strict';
function init(){
 const stage=document.querySelector('#match-game .match-stage');
 const board=document.getElementById('board');
 const hint=document.getElementById('hint');
 const batch=document.getElementById('shuffle');
 const egg=document.getElementById('v49-game-egg');
 const C=window.WMCompanions;
 if(!stage||!board||!hint||!batch||!C||stage.dataset.v59FlightReady)return;
 stage.dataset.v59FlightReady='1';
 const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
 const reduced=()=>window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches||false;
 const rect=node=>{const r=node.getBoundingClientRect(),s=stage.getBoundingClientRect();return{x:r.left-s.left,y:r.top-s.top,w:r.width,h:r.height};};
 const state={baby:false,egg:false};
 let rewardEpoch=0, queuedReward=0;

 function goldenDust(at,count){
  if(reduced())return;
  const layer=document.createElement('div');layer.className='v57-dust-layer';stage.append(layer);
  const width=board.getBoundingClientRect().width;
  const spread=Math.min(width*.4,140),tasks=[];
  for(let i=0;i<count;i++){
   const node=document.createElement('span');node.className='v57-particle';
   const sz=2.4+(i%5)*1.15;
   node.style.cssText=`left:${at.x}px;top:${at.y}px;width:${sz}px;height:${sz}px`;
   layer.append(node);
   const a=i*2.39996,r=(.2+(i%11)/13)*spread;
   const dx=Math.cos(a)*r,dy=25+(i*23%Math.max(50,Math.round(board.clientHeight*.52)));
   if(!node.animate){node.remove();continue;}
   const anim=node.animate([
    {opacity:0,transform:'translate(0,0) scale(.3)'},
    {offset:.22,opacity:.95,transform:`translate(${dx*.4}px,${-14-(i%6)*5}px) scale(1.1)`},
    {offset:.72,opacity:.8,transform:`translate(${dx*.75}px,${dy*.68}px) scale(.85)`},
    {opacity:0,transform:`translate(${dx}px,${dy}px) scale(.2)`}
   ],{duration:2900+i%7*130,delay:i%8*60,easing:'ease-out',fill:'forwards'});
   tasks.push(anim.finished.catch(()=>{}));
  }
  void Promise.all(tasks).then(()=>layer.remove());
  setTimeout(()=>layer.remove(),4800);
 }

 async function flight(source,{kind='baby',count=42,thumb=false}={}){
  if(!source||state[kind])return false;
  state[kind]=true;
  let flyer;const oldVisibility=source.style.visibility;
  try{
   const sprite=source.querySelector('img');if(!sprite)return false;
   if(reduced())return true;
   const r=rect(source),b=rect(board);
   const start={x:r.x+r.w/2,y:r.y+r.h/2};
   const center={x:b.x+b.w/2,y:b.y+b.h/2};
   const l=b.x+10,rr=b.x+b.w-10,t=b.y+10,bt=b.y+b.h-10;
   // One full perimeter lap, then move to the center; no scaling during flight.
   const points=[start,{x:l,y:bt},{x:l,y:t},{x:rr,y:t},{x:rr,y:bt},{x:l,y:bt},center];
   flyer=document.createElement('div');flyer.className='v57-flyer';
   flyer.style.cssText=`left:${r.x}px;top:${r.y}px;width:${r.w}px;height:${r.h}px`;
   const image=sprite.cloneNode(true);image.setAttribute('aria-hidden','true');flyer.append(image);
   stage.append(flyer);source.style.visibility='hidden';
   const tr=(p,scale=1)=>`translate(${p.x-start.x}px,${p.y-start.y}px) scale(${scale})`;
   async function animate(frames,duration,easing='ease-in-out'){
    if(!flyer.animate)return;
    const animation=flyer.animate(frames,{duration,easing,fill:'forwards'});
    await animation.finished.catch(()=>{});
    flyer.style.transform=frames.at(-1).transform;
    animation.cancel();
   }
   await animate(points.map((p,i)=>({offset:i/(points.length-1),transform:tr(p)})),2800,'linear');
   // Original combo thumbs-up is shown only once, at the center.
   if(thumb&&kind==='baby'){
    const id=source.dataset.character;
    if(id)C.setImage(image,id,'thumbs_up');
   }
   await animate([{transform:tr(center)},{transform:tr(center,1.48)}],500);
   goldenDust(center,count);
   await wait(2100);
   await animate([{transform:tr(center,1.48)},{transform:tr(center)}],470);
   await animate([{transform:tr(center)},{transform:tr(start)}],900);
   return true;
  }catch(err){console.warn('V59: flight fallback',err);return false;}
  finally{flyer?.remove();source.style.visibility=oldVisibility;state[kind]=false;}
 }

 // Keep the ORIGINAL V43 combo trigger, speech, scoring and celebration audio.
 // Replace only the legacy companion animation, not its reward calculation.
 // The old WMC.reward animation (and V57 counter observer) must not run as well.
 const oldReward=C.reward;
 C.reward=function(bonus){
  if(![3,5,10].includes(Number(bonus)))return oldReward?.call(C,bonus);
  const ticket=++rewardEpoch;
  clearTimeout(queuedReward);
  queuedReward=setTimeout(()=>{
   if(ticket!==rewardEpoch||!stage.isConnected)return;
   const baby=stage.querySelector('.game-companions .slot-0:not([hidden])');
   if(!baby)return;
   // A hint already in progress is allowed to finish; do not launch another sprite.
   if(state.baby){queuedReward=setTimeout(()=>{
    if(ticket===rewardEpoch&&!state.baby&&stage.isConnected){
     const actor=stage.querySelector('.game-companions .slot-0:not([hidden])');
     if(actor)void flight(actor,{kind:'baby',count:bonus===10?66:bonus===5?52:42,thumb:true});
    }
   },500);return;}
   void flight(baby,{kind:'baby',count:bonus===10?66:bonus===5?52:42,thumb:true});
  },2000);
 };

 // V42 has already wrapped the one and only V43 hint handler.
 // Start the visual flight and that original handler together, so speech starts
 // at takeoff; suppress only V42's old straight-line sprite animation.
 const oldHint=hint.onclick;
 if(typeof oldHint==='function')hint.onclick=async function(event){
  if(state.baby||!document.getElementById('dialog')?.hidden)return;
  const baby=stage.querySelector('.game-companions .slot-0:not([hidden])');
  if(baby)void flight(baby,{kind:'baby',count:42,thumb:false});
  const sprite=baby?.querySelector('img');
  const originalAnimate=sprite?.animate;let patched=false;
  if(sprite&&originalAnimate){
   try{sprite.animate=()=>({finished:Promise.resolve()});patched=true;}catch{}
  }
  try{return await oldHint.call(hint,event);}
  finally{if(patched)try{sprite.animate=originalAnimate;}catch{}}
 };

 // Keep the game engine's New Batch handler exactly once, after the egg flight.
 const oldBatch=batch.onclick;
 if(typeof oldBatch==='function')batch.onclick=async function(event){
  if(state.egg||batch.disabled||!document.getElementById('dialog')?.hidden)return;
  batch.disabled=true;batch.setAttribute('aria-busy','true');
  try{if(egg)await flight(egg,{kind:'egg',count:55});return await oldBatch.call(batch,event);}
  finally{batch.disabled=false;batch.removeAttribute('aria-busy');}
 };
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
else init();
})();
