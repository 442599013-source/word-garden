/* V57: board-perimeter lap, center enlargement and long golden powder.
   No changes to V43 matching, scores, or original cheer audio. */
(()=>{'use strict';
function init(){
const stage=document.querySelector('#match-game .match-stage'),board=document.getElementById('board'),hint=document.getElementById('hint'),batch=document.getElementById('shuffle'),egg=document.getElementById('v49-game-egg'),combo=document.getElementById('game-combo');
if(!stage||!board||!hint||!batch||!combo)return;
const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
const reduced=()=>window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches||false;
const rect=(el)=>{const r=el.getBoundingClientRect(),s=stage.getBoundingClientRect();return{x:r.left-s.left,y:r.top-s.top,w:r.width,h:r.height};};
let busy=false;
function sparkle(at,quantity){if(reduced())return;const layer=document.createElement('div');layer.className='v57-dust-layer';stage.append(layer);const spread=Math.min(board.clientWidth*.4,140);const animations=[];
for(let i=0;i<quantity;i++){const node=document.createElement('span');node.className='v57-particle';const size=2.4+(i%5)*1.15;node.style.cssText=`left:${at.x}px;top:${at.y}px;width:${size}px;height:${size}px`;layer.append(node);const a=i*2.39996,rr=(.2+(i%11)/13)*spread,dx=Math.cos(a)*rr,dy=25+(i*23%Math.max(50,Math.round(board.clientHeight*.52)));const anim=node.animate([{opacity:0,transform:'translate(0,0) scale(.3)'},{opacity:.95,transform:`translate(${dx*.4}px,${-14-(i%6)*5}px) scale(1.1)`,offset:.22},{opacity:.80,transform:`translate(${dx*.75}px,${dy*.68}px) scale(.85)`,offset:.72},{opacity:0,transform:`translate(${dx}px,${dy}px) scale(.2)`}],{duration:2900+i%7*130,delay:i%8*60,easing:'ease-out',fill:'forwards'});animations.push(anim.finished.catch(()=>{}));}
Promise.all(animations).then(()=>layer.remove());setTimeout(()=>layer.remove(),4800);
}
async function flight(source,quantity=40){if(busy||!source)return false;busy=true;let flyer;
try{if(reduced())return true;const r=rect(source),b=rect(board),sprite=source.querySelector('img');if(!sprite)return false;
const start={x:r.x+r.w/2,y:r.y+r.h/2},center={x:b.x+b.w/2,y:b.y+b.h/2};const left=b.x+10,right=b.x+b.w-10,top=b.y+10,bottom=b.y+b.h-10;
const path=[start,{x:left,y:bottom},{x:left,y:top},{x:right,y:top},{x:right,y:bottom},{x:left,y:bottom},center];
flyer=document.createElement('div');flyer.className='v57-flyer';flyer.style.cssText=`left:${r.x}px;top:${r.y}px;width:${r.w}px;height:${r.h}px`;
const image=sprite.cloneNode(true);image.setAttribute('aria-hidden','true');flyer.append(image);stage.append(flyer);source.style.visibility='hidden';
const offset=(point,s=1)=>`translate(${point.x-start.x}px,${point.y-start.y}px) scale(${s})`;
async function segment(frames,duration,easing='ease-in-out'){const anim=flyer.animate(frames,{duration,easing,fill:'forwards'});await anim.finished.catch(()=>{});flyer.style.transform=frames[frames.length-1].transform;anim.cancel();}
await segment(path.map((p,i)=>({offset:i/(path.length-1),transform:offset(p)})),2800,'linear');
await segment([{transform:offset(center)},{transform:offset(center,1.48)}],500);
sparkle(center,quantity);
await wait(2100); // visible golden powder remains after character returns
await segment([{transform:offset(center,1.48)},{transform:offset(center)}],470);
await segment([{transform:offset(center)},{transform:offset(start)}],900);
return true;
}catch(err){console.warn('V57 magic flight fallback',err);return false;}
finally{flyer?.remove();source.style.visibility='';busy=false;}}
// V42 already wraps Hint and calls the authoritative V43 hint handler. Its old
// straight-line image animation is skipped only for this one invocation.
const oldHint=hint.onclick;
if(typeof oldHint==='function')hint.onclick=async function(event){if(busy||!document.getElementById('dialog')?.hidden)return;const baby=stage.querySelector('.game-companions .slot-0:not([hidden])');if(baby)await flight(baby,42);
const sprite=baby?.querySelector('img'),oldAnimate=sprite?.animate;let patched=false;
if(sprite&&oldAnimate)try{sprite.animate=()=>({finished:Promise.resolve()});patched=true;}catch{}
try{return await oldHint.call(hint,event);}finally{if(patched)try{sprite.animate=oldAnimate;}catch{}}};
// Run the V43 New Batch handler exactly once AFTER the egg returns home.
const oldBatch=batch.onclick;
if(typeof oldBatch==='function')batch.onclick=async function(event){if(busy||batch.disabled||!document.getElementById('dialog')?.hidden)return;batch.disabled=true;batch.setAttribute('aria-busy','true');
try{if(egg)await flight(egg,55);return await oldBatch.call(batch,event);}finally{batch.disabled=false;batch.removeAttribute('aria-busy');}};
// Listen to the actual existing combo counter; never synthesize reward/points.
let last=parseInt((combo.textContent||'').replace(/\D/g,''),10)||0;
const obs=new MutationObserver(()=>{const count=parseInt((combo.textContent||'').replace(/\D/g,''),10)||0;if(count===last)return;last=count;if(![3,5,10].includes(count))return;
setTimeout(()=>{if(busy||!document.contains(stage))return;const baby=stage.querySelector('.game-companions .slot-0:not([hidden])');if(baby)void flight(baby,count===10?66:count===5?52:42);},2000);});
obs.observe(combo,{characterData:true,childList:true,subtree:true});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
