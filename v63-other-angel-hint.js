/* V63.10: Non-Jack angels point at EN -> ZH on Hint.
   Keeps original hint scoring, audio and card selection. No new character art.
   Installed AFTER V59 to suppress its old perimeter flight only for non-Jack Hint. */
(()=>{'use strict';
 const ID='wm-v6310-other-hint';
 if(document.getElementById(ID))return;
 const style=document.createElement('style');style.id=ID;
 style.textContent=`
  .v6310-other-flyer{position:absolute;z-index:93;pointer-events:none;transform-origin:center center;will-change:transform;}
  .v6310-other-flyer>img{width:100%;height:100%;object-fit:contain;display:block;filter:drop-shadow(0 3px 7px #ffd677);}
  .v6310-other-finger{position:absolute;right:6%;top:28%;height:25px;width:25px;pointer-events:none;z-index:94;display:grid;place-items:center;filter:drop-shadow(0 0 5px #ffed98);}
  .v6310-other-finger svg{width:100%;height:100%;overflow:visible;}
  .v6310-other-tile-glow{position:absolute;z-index:92;pointer-events:none;border:3px solid #ffe984;border-radius:11px;box-shadow:0 0 10px 4px rgba(255,221,96,.88),0 0 20px 7px rgba(111,218,255,.66);background:rgba(255,244,169,.12);}
  .v6310-other-ray{position:absolute;z-index:92;pointer-events:none;height:4px;transform-origin:0 50%;background:linear-gradient(90deg,#fff2a3,#fff,#8fe7ff);border-radius:5px;box-shadow:0 0 9px 3px #ffe68b;}
 `;
 document.head.append(style);
 const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));
 function locate(node,stage){
  const a=node.getBoundingClientRect(),b=stage.getBoundingClientRect();
  const k=b.width/(stage.offsetWidth||b.width)||1;
  return {x:(a.left-b.left)/k,y:(a.top-b.top)/k,w:a.width/k,h:a.height/k};
 }
 async function move(node,from,to,ms){
  const a=`translate(${from.x}px,${from.y}px)`,b=`translate(${to.x}px,${to.y}px)`;
  if(node.animate){const anim=node.animate([{transform:a},{transform:b}],{duration:ms,easing:'ease-in-out',fill:'forwards'});await anim.finished.catch(()=>{});node.style.transform=b;anim.cancel();}
  else{node.style.transform=b;await pause(ms);}
 }
 function handIcon(){
  const n=document.createElement('span');n.className='v6310-other-finger';n.setAttribute('aria-hidden','true');
  // A minimal pointing-hand cue, not a replacement for the angel's real hand.
  n.innerHTML='<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M15 25V9a3 3 0 0 1 6 0v9l2-1c2-1 4 .5 4 3l-2 7-5 3h-8l-6-8c-1.5-2.5 1-5 3-3l6 6Z" fill="#fff3cb" stroke="#b97430" stroke-width="1.6" stroke-linejoin="round"/></svg>';
  return n;
 }
 async function point(flyer,stage,sourceRect,tile){
  if(!tile.isConnected)return;
  const r=locate(tile,stage),target={x:r.x+r.w/2,y:r.y+r.h/2};
  // Land alongside the tile; the word stays readable.
  const margin=6;
  const leftX=r.x-sourceRect.w*.88-margin;
  const rightX=r.x+r.w+margin;
  const stageW=stage.offsetWidth||stage.getBoundingClientRect().width;
  const destX=leftX>=0?leftX:(rightX+sourceRect.w<=stageW?rightX:Math.max(0,r.x-sourceRect.w*.75));
  const destY=r.y+r.h*.5-sourceRect.h*.45;
  const curr=flyer.dataset.v6310pos?JSON.parse(flyer.dataset.v6310pos):{x:0,y:0};
  const next={x:destX-sourceRect.x,y:destY-sourceRect.y};
  await move(flyer,curr,next,470);
  flyer.dataset.v6310pos=JSON.stringify(next);
  const hand={x:sourceRect.x+next.x+sourceRect.w*.86,y:sourceRect.y+next.y+sourceRect.h*.30};
  const g=document.createElement('div');g.className='v6310-other-tile-glow';
  Object.assign(g.style,{left:r.x+'px',top:r.y+'px',width:r.w+'px',height:r.h+'px'});stage.append(g);
  const line=document.createElement('div');line.className='v6310-other-ray';
  const dx=target.x-hand.x,dy=target.y-hand.y;
  Object.assign(line.style,{left:hand.x+'px',top:hand.y+'px',width:Math.hypot(dx,dy)+'px',transform:`rotate(${Math.atan2(dy,dx)}rad)`});
  stage.append(line);
  try{await pause(1000);}finally{g.remove();line.remove();}
 }
 async function animatePoint(source,en,zh){
  const stage=document.querySelector('#match-game .match-stage');
  if(!stage||!source.isConnected||!en?.isConnected||!zh?.isConnected)return;
  const sourceImage=source.querySelector('img');if(!sourceImage)return;
  const b=locate(source,stage),flyer=document.createElement('div');flyer.className='v6310-other-flyer';
  Object.assign(flyer.style,{left:b.x+'px',top:b.y+'px',width:b.w+'px',height:b.h+'px'});
  const image=sourceImage.cloneNode(true);image.removeAttribute('id');image.setAttribute('aria-hidden','true');flyer.append(image);
  // Reuse the angel's existing raised-hand/thumbs-up art for the pointing action.
  const C=window.WMCompanions;
  if(C?.setImage){try{C.setImage(image,source.dataset.character,'thumbs_up');}catch{}}
  flyer.append(handIcon());stage.append(flyer);
  const original=source.style.visibility;source.style.visibility='hidden';
  try{
   await point(flyer,stage,b,en);
   if(zh.isConnected)await point(flyer,stage,b,zh);
   const curr=flyer.dataset.v6310pos?JSON.parse(flyer.dataset.v6310pos):{x:0,y:0};
   await move(flyer,curr,{x:0,y:0},420);
  }finally{flyer.remove();source.style.visibility=original;}
 }
 function install(){
  const stage=document.querySelector('#match-game .match-stage');
  const hint=document.getElementById('hint');
  if(!stage||!hint||hint.dataset.v6310OtherHint)return;
  const previous=hint.onclick;
  if(typeof previous!=='function')return;
  hint.dataset.v6310OtherHint='1';let busy=false;
  hint.onclick=async function(event){
   const source=stage.querySelector('.game-companions .slot-0:not([hidden])');
   if(!source||source.dataset.character==='jack_angel'||!document.getElementById('dialog')?.hidden)return previous.call(this,event);
   if(busy)return;
   busy=true;
   const savedHidden=source.hidden;
   // Hide from V59 flight selector while preserving the original hint/speech exactly once.
   source.hidden=true;
   try{
    await previous.call(this,event);
    source.hidden=savedHidden;
    // The game marks the actual pair as hinted; only animate when a valid hint was issued.
    const hinted=[...stage.querySelectorAll('#board .match-tile.hinted')];
    const en=hinted.find(x=>x.dataset.lang==='en'),zh=hinted.find(x=>x.dataset.lang==='zh');
    if(en&&zh&&source.isConnected)await animatePoint(source,en,zh);
   }catch(err){console.warn('Other angel word-pointing animation',err);}
   finally{source.hidden=savedHidden;busy=false;}
  };
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(install,0),{once:true});
 else setTimeout(install,0);
})();
