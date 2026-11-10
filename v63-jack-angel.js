/* V63.4: Jack/杰克天使. Eight *unmodified* RGBA originals in 4x2 sprite.
   Hint sequence: English card -> Chinese card, one hint charge, 2 seconds of enlarged magic.
   V59 retains the authoritative non-Jack animations, game rules and speech. */
(()=>{'use strict';
 const C=window.WMCompanions;
 if(!C)return;
 const ID='jack_angel',OLD_ID='golden_staff_angel',KEY='wm-companions-v39';
 const FILE='jack-angel-frames.png?v=63.4';
 let framesPromise=null,hintBusy=false;
 const idleByImage=new WeakMap();
 const baseSet=C.setImage.bind(C);
 function css(){if(document.getElementById('jack-v634-style'))return;
  const st=document.createElement('style');st.id='jack-v634-style';st.textContent=`
  @keyframes jack633Float{0%,100%{translate:0 0}50%{translate:0 -9px}}
  .jack633-flyer{position:absolute;z-index:90;pointer-events:none;transform-origin:50% 50%;will-change:transform;}
  .jack633-flyer img{display:block;width:100%;height:100%;object-fit:contain;}
  .jack633-ring,.jack633-star,.jack633-beam,.jack633-glow{position:absolute;pointer-events:none;z-index:91;}
  .jack633-ring{border:5px solid rgba(255,225,104,.94);border-radius:50%;box-shadow:0 0 20px 6px #ffd86b,0 0 37px 9px #60deff,inset 0 0 18px 5px #9ef2ff;}
  .jack633-star{height:24px;width:24px;border-radius:50%;background:radial-gradient(circle,#fff 4%,#faffc8 23%,#78deff 43%,#ffdb56 65%,transparent 76%);filter:drop-shadow(0 0 7px #79eeff);}
  .jack633-beam{height:7px;transform-origin:0 50%;border-radius:9px;background:linear-gradient(90deg,#e8ffff,#5edcff,#ffe994);box-shadow:0 0 13px 5px #84eaff,0 0 22px 8px #ffd970;}
  .jack633-glow{border-radius:12px;box-shadow:0 0 0 5px rgba(255,218,79,.95),0 0 25px 10px rgba(80,211,255,.88),inset 0 0 21px 4px rgba(255,229,116,.64);background:rgba(105,220,255,.14);}
  `;document.head.append(st);
 }
 // Once-only migration: replace the invalid previous Jack (and the legacy default Sunny)
 // in the saved primary companion slot. A deliberate choice of another angel is preserved.
 function migrate(){
  try{
   const done='wm-jack-angel-v634-migrated';
   if(localStorage.getItem(done)==='1')return;
   const s=JSON.parse(localStorage.getItem(KEY)||'{}')||{};
   const oldSlots=Array.isArray(s.slots)?s.slots:[];
   const slots=oldSlots.length?oldSlots.map(x=>x===OLD_ID||x==='blond_angel'?ID:x):[ID];
   if(!slots.some(x=>x===ID||C.catalog.some(c=>c.id===x&&c.kind==='baby')))slots.unshift(ID);
   s.slots=[...new Set(slots)].slice(0,2);
   localStorage.setItem(KEY,JSON.stringify(s));
   localStorage.setItem(done,'1');
  }catch(e){console.warn('Jack migration failed',e);}
 }
 for(let i=C.catalog.length-1;i>=0;i--)if(C.catalog[i].id===OLD_ID)C.catalog.splice(i,1);
 if(!C.catalog.some(x=>x.id===ID))C.catalog.push({id:ID,name:'Jack 杰克天使',kind:'baby'});
 migrate();
 async function getFrames(){if(framesPromise)return framesPromise;framesPromise=new Promise((resolve,reject)=>{
  const img=new Image();img.onload=()=>{try{const w=img.naturalWidth/4,h=img.naturalHeight/2,all=[];for(let i=0;i<8;i++){
   const c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(img,(i%4)*w,Math.floor(i/4)*h,w,h,0,0,w,h);all.push(c.toDataURL('image/png'));
  }resolve(all);}catch(e){reject(e)}};img.onerror=()=>reject(new Error('Jack RGBA sprite failed to load'));img.src=FILE;
 });return framesPromise;}
 function clearIdle(img){const state=idleByImage.get(img);if(state?.timer)clearInterval(state.timer);idleByImage.delete(img);if(img){img.style.animation='';img.style.translate='';delete img.dataset.jackAngel;}}
 async function setIdle(img){css();const token={timer:null};idleByImage.set(img,token);img.dataset.character=ID;img.dataset.jackAngel='1';img.dataset.media='jack-angel-v634';img.alt='Jack 杰克天使';img.style.visibility='';img.style.animation='jack633Float 2.6s ease-in-out infinite';
  const all=await getFrames().catch(()=>null);if(idleByImage.get(img)!==token)return;
  if(!all){img.alt='Jack 杰克天使（素材加载失败）';return;}
  // One understated wing motion every ~7 s; brief blink is independent.
  const seq=[0,0,0,1,2,1,0,0,0,0,0,0,3,0,0,0,0,0];let i=0;
  function render(){if(idleByImage.get(img)!==token||!img.isConnected){clearInterval(token.timer);return;}img.src=all[seq[i++%seq.length]];}
  render();token.timer=setInterval(render,380);
 }
 C.setImage=function(img,id,action='idle'){if(!img)return;if(img.dataset.jackAngel==='1')clearIdle(img);if(id!==ID)return baseSet(img,id,action);return setIdle(img);};
 const pause=t=>new Promise(r=>setTimeout(r,t));
 function bounds(n,stage){const a=n.getBoundingClientRect(),s=stage.getBoundingClientRect(),ratio=s.width/(stage.offsetWidth||s.width)||1;return{x:(a.left-s.left)/ratio,y:(a.top-s.top)/ratio,w:a.width/ratio,h:a.height/ratio};}
 async function motion(node,steps,ms,ease='ease-in-out'){
  if(!node.animate){node.style.transform=steps.at(-1).transform||'';await pause(ms);return;}
  const anim=node.animate(steps,{duration:ms,easing:ease,fill:'forwards'});await anim.finished.catch(()=>{});node.style.transform=steps.at(-1).transform||'';anim.cancel();
 }
 function makeEffect(stage,from,to,targetRect){
  const nodes=[],timers=[];const add=(name,style)=>{const d=document.createElement('div');d.className=name;Object.assign(d.style,style);stage.append(d);nodes.push(d);return d;};
  const lineLen=Math.hypot(to.x-from.x,to.y-from.y),deg=Math.atan2(to.y-from.y,to.x-from.x)*180/Math.PI;
  const beam=add('jack633-beam',{left:from.x+'px',top:from.y+'px',width:lineLen+'px',transform:`rotate(${deg}deg) scaleX(0)`});
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
 async function performHint(source,en,zh){const stage=document.querySelector('#match-game .match-stage');if(!stage||!source?.isConnected||!en?.isConnected||!zh?.isConnected)return;
  const all=await getFrames().catch(()=>null);if(!all)return;
  // All animation coordinates are in actual stage CSS pixels, not viewport pixels (mobile stage is scaled).
  const start=bounds(source,stage);let tx=0,ty=0;
  const flyer=document.createElement('div');flyer.className='jack633-flyer';Object.assign(flyer.style,{left:start.x+'px',top:start.y+'px',width:start.w+'px',height:start.h+'px'});
  const sprite=document.createElement('img');sprite.src=all[0];sprite.alt='';flyer.append(sprite);stage.append(flyer);
  const oldVisibility=source.style.visibility;source.style.visibility='hidden';
  try{
   for(let index=0;index<2;index++){
    const tile=index===0?en:zh;if(!tile.isConnected)break;const r=bounds(tile,stage);
    const target={x:r.x+r.w/2,y:r.y+r.h/2};
    // Image 7 is the right-facing turn; image 8 is the extended spell staff.
    // Wand tip near 88% of artwork width and 24% of artwork height; land left of tile to keep text visible.
    const destX=target.x-start.w*.84-start.x,destY=target.y-start.h*.26-start.y;
    sprite.src=all[6];
    await motion(flyer,[{transform:`translate(${tx}px,${ty}px) scale(1)`},{transform:`translate(${destX}px,${destY}px) scale(1)`}],index===0?560:440,'cubic-bezier(.3,.75,.25,1)');
    tx=destX;ty=destY;sprite.src=all[7];
    await pause(70);
    // Effect originates at the wand gem and ends at the word card; one full second for each card.
    const origin={x:start.x+tx+start.w*.88,y:start.y+ty+start.h*.24};
    await makeEffect(stage,origin,target,r);
   }
   sprite.src=all[6];await motion(flyer,[{transform:`translate(${tx}px,${ty}px) scale(1)`},{transform:'translate(0px,0px) scale(1)'}],590,'cubic-bezier(.34,.1,.3,1)');
  }finally{flyer.remove();source.style.visibility=oldVisibility;}
 }
 function installHint(){const hint=document.getElementById('hint'),stage=document.querySelector('#match-game .match-stage');if(!hint||!stage||hint.dataset.jack633Ready)return;
  const original=hint.onclick;if(typeof original!=='function')return;
  hint.dataset.jack633Ready='1';
  hint.onclick=async function(event){
   const jack=stage.querySelector('.game-companions .wm-companion[data-character="'+ID+'"]');
   if(!jack||jack.hidden)return original.call(this,event);
   if(hintBusy)return;
   // Save the original hint's validity, charging, speech and highlighting; suppress only V59's generic flight.
   if(!document.getElementById('dialog')?.hidden)return original.call(this,event);
   hintBusy=true;hint.disabled=true;const otherBaby=stage.querySelector('.game-companions .slot-0:not([hidden])');
   const hiddenActors=[...new Set([jack,otherBaby].filter(Boolean))].map(n=>({node:n,hidden:n.hidden}));
   hiddenActors.forEach(({node})=>{node.hidden=true;});
   try{
    try{await original.call(this,event);}
    finally{hiddenActors.forEach(({node,hidden})=>{node.hidden=hidden;});}
    const hints=[...document.querySelectorAll('#board .match-tile.hinted')];
    const en=hints.find(n=>n.dataset.lang==='en'),zh=hints.find(n=>n.dataset.lang==='zh');
    if(en&&zh&&jack.isConnected)await performHint(jack,en,zh);
   }catch(err){console.warn('Jack V63.4 hint sequence',err);}
   finally{hint.disabled=false;hintBusy=false;}
  };
 }
 css();
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(installHint,0),{once:true});
 else setTimeout(installHint,0);
})();
