/* V52: keep V43 logic authoritative; decorate existing hint and batch handlers only. */
(()=>{'use strict';
 const stage=document.querySelector('#match-game .match-stage');if(!stage)return;
 const board=document.getElementById('board'),hint=document.getElementById('hint'),batch=document.getElementById('shuffle'),egg=document.getElementById('v49-game-egg');
 if(!board||!hint||!batch||!egg||stage.dataset.v52Ready)return;stage.dataset.v52Ready='1';
 const reduce=()=>window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches||false;
 const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));
 const point=(node,ax=.5,ay=.5)=>{const a=node.getBoundingClientRect(),b=stage.getBoundingClientRect();return {x:a.left-b.left+a.width*ax,y:a.top-b.top+a.height*ay};};
 const size=(node)=>{const r=node.getBoundingClientRect();return{w:r.width,h:r.height}};
 function dust(at,quantity=28){if(reduce())return;const host=document.createElement('div');host.className='v52-glitter-layer';stage.append(host);
  const spread=Math.min(board.getBoundingClientRect().width*.43,155);
  for(let i=0;i<quantity;i++){
   const n=document.createElement('span');n.className='v52-glitter'+(i%4===0?' v52-star':'');
   const sz=2.5+(i%5)*1.25;n.style.width=sz+'px';n.style.height=sz+'px';n.style.left=at.x+'px';n.style.top=at.y+'px';host.append(n);
   const theta=(i*2.39996),radius=18+(i%11)*spread/11,dx=Math.cos(theta)*radius,dy=28+(i*29%Math.max(30,Math.round(board.getBoundingClientRect().height*.65)));
   const animation=n.animate([{transform:'translate(0,0) scale(.2)',opacity:0},{transform:`translate(${dx*.32}px,${-13-(i%4)*9}px) scale(1.2)`,opacity:1,offset:.24},{transform:`translate(${dx}px,${dy}px) scale(.2)`,opacity:0}],{duration:950+(i%7)*90,delay:(i%9)*42,easing:'cubic-bezier(.16,.6,.28,1)',fill:'forwards'});animation.finished.catch(()=>{}).then(()=>n.remove());
  }
  setTimeout(()=>host.remove(),2200);
 }
 let active=false;
 // Capture phase prevents the original batch onclick from running before the flight.
 batch.addEventListener('click',async e=>{
  if(active||batch.disabled||!document.getElementById('dialog')?.hidden){e.preventDefault();e.stopImmediatePropagation();return;}
  const handler=batch.onclick;if(typeof handler!=='function')return;
  e.preventDefault();e.stopImmediatePropagation();active=true;batch.setAttribute('aria-busy','true');batch.disabled=true;
  const original=egg.querySelector('img');const start=point(egg),target=point(board,.5,.42),dims=size(egg);
  const clone=document.createElement('div');clone.className='v52-egg-flight';clone.style.cssText=`left:${start.x-dims.w/2}px;top:${start.y-dims.h/2}px;width:${dims.w}px;height:${dims.h}px`;
  const cloneImg=original?.cloneNode(true);if(cloneImg){cloneImg.removeAttribute('id');cloneImg.setAttribute('aria-hidden','true');clone.append(cloneImg);}stage.append(clone);egg.style.visibility='hidden';
  try{
   if(!reduce()&&clone.animate){const dx=target.x-start.x,dy=target.y-start.y;const motion=clone.animate([
     {transform:'translate(0,0) scale(1) rotate(0deg)'},
     {transform:`translate(${dx*.42}px,${dy*.55-20}px) scale(1.12) rotate(-12deg)`,offset:.29},
     {transform:`translate(${dx}px,${dy}px) scale(1.25) rotate(0deg)`,offset:.55},
     {transform:`translate(${dx}px,${dy}px) scale(1.25) rotate(360deg)`,offset:.75},
     {transform:'translate(0,0) scale(1) rotate(360deg)'}
    ],{duration:2300,easing:'ease-in-out',fill:'forwards'});
    await pause(1550);dust(target,38);await pause(210);
    // Run the exact V43 swap handler only once, after the magic appears.
    await Promise.resolve(handler.call(batch,e));await motion.finished.catch(()=>{});
   }else{await Promise.resolve(handler.call(batch,e));}
  }catch(err){console.error('V52 egg animation failed',err);}finally{clone.remove();egg.style.visibility='';batch.removeAttribute('aria-busy');batch.disabled=false;active=false;}
 },true);
 // V42 hint handler already flies the angel and charges once. We only add dust on arrival.
 hint.addEventListener('click',()=>{if(reduce()||active||!document.getElementById('dialog')?.hidden)return;
  const baby=stage.querySelector('.game-companions .slot-0:not([hidden])');if(!baby)return;
  setTimeout(()=>{if(!document.contains(stage))return;dust(point(board,.42,.63),30);},1080);
 },true);
})();
