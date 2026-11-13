/* V63.10: Jack angel combo fix. Eight original transparent frames scaled to 50% resolution. Render via CSS sprite: no canvas, Blob or per-frame image allocations.
   Hint sequence: English card -> Chinese card, one hint charge, 2 seconds of enlarged magic.
   Combo sequence now uses a dedicated celebration effect with no hint box/glow rectangle, and raised-wand pose holds for at least 2 seconds.
   V59 retains the authoritative non-Jack animations, game rules and speech. */
(()=>{'use strict';
 const C=window.WMCompanions;
 if(!C)return;
 const ID='jack_angel',OLD_ID='golden_staff_angel',KEY='wm-companions-v39';
 const FILE='jack-angel-frames.png?v=63.7';
 let hintBusy=false,comboBusy=false;
 const idleByImage=new WeakMap();
 const baseSet=C.setImage.bind(C);
 function css(){if(document.getElementById('jack-v6310-style'))return;
  const st=document.createElement('style');st.id='jack-v6310-style';st.textContent=`
  @keyframes jack633Float{0%,100%{translate:0 0}50%{translate:0 -9px}}
  .jack633-flyer{position:absolute;z-index:90;pointer-events:none;transform-origin:50% 50%;will-change:transform;}
  .jack633-flyer img{display:block;width:100%;height:100%;object-fit:contain;}
  .jack633-ring,.jack633-star,.jack633-beam,.jack633-glow{position:absolute;pointer-events:none;z-index:91;}
  .jack633-ring{border:5px solid rgba(255,225,104,.94);border-radius:50%;box-shadow:0 0 20px 6px #ffd86b,0 0 37px 9px #60deff,inset 0 0 18px 5px #9ef2ff;}
  .jack633-star{height:24px;width:24px;border-radius:50%;background:radial-gradient(circle,#fff 4%,#faffc8 23%,#78deff 43%,#ffdb56 65%,transparent 76%);filter:drop-shadow(0 0 7px #79eeff);}
  .jack633-beam{height:7px;transform-origin:0 50%;border-radius:9px;background:linear-gradient(90deg,#e8ffff,#5edcff,#ffe994);box-shadow:0 0 13px 5px #84eaff,0 0 22px 8px #ffd970;}
  .jack633-glow{border-radius:12px;box-shadow:0 0 0 5px rgba(255,218,79,.95),0 0 25px 10px rgba(80,211,255,.88),inset 0 0 21px 4px rgba(255,229,116,.64);background:rgba(105,220,255,.14);}
  .jack633-combo-core,.jack633-combo-ring,.jack633-combo-star{position:absolute;pointer-events:none;z-index:91;}
  .jack633-combo-core{width:34px;height:34px;border-radius:50%;background:radial-gradient(circle,#fff 0%,#fff6b8 18%,#8de9ff 42%,#ffd968 68%,rgba(255,217,104,0) 100%);filter:drop-shadow(0 0 12px #fff1a8) drop-shadow(0 0 18px #6ee8ff);}
  .jack633-combo-ring{width:106px;height:106px;border-radius:50%;border:4px solid rgba(255,223,106,.95);box-shadow:0 0 18px 4px rgba(255,216,107,.95),0 0 34px 9px rgba(97,226,255,.8), inset 0 0 16px 4px rgba(255,245,182,.7);}
  .jack633-combo-star{width:18px;height:18px;border-radius:50%;background:radial-gradient(circle,#fff 10%,#fff0a2 28%,#7ce3ff 55%,rgba(124,227,255,0) 76%);filter:drop-shadow(0 0 6px #fff1b3) drop-shadow(0 0 10px #68e5ff);}
  `;document.head.append(st);
 }
 // Once-only migration: replace the invalid previous Jack (and the legacy default Sunny)
 // in the saved primary companion slot. A deliberate choice of another angel is preserved.
 function migrate(){
  try{
   const done='wm-jack-angel-v637-migrated';
   if(localStorage.getItem(done)==='1')return;
   const s=JSON.parse(localStorage.getItem(KEY)||'{}')||{};
   const oldSlots=Array.isArray(s.slots)?s.slots:[];
   const slots=oldSlots.length?oldSlots.map(x=>x===OLD_ID?ID:x):[ID];
   if(!slots.some(x=>x===ID||C.catalog.some(c=>c.id===x&&c.kind==='baby')))slots.unshift(ID);
   s.slots=[...new Set(slots)].slice(0,2);
   localStorage.setItem(KEY,JSON.stringify(s));
   localStorage.setItem(done,'1');
  }catch(e){console.warn('Jack migration failed',e);}
 }
 for(let i=C.catalog.length-1;i>=0;i--)if(C.catalog[i].id===OLD_ID)C.catalog.splice(i,1);
 if(!C.catalog.some(x=>x.id===ID))C.catalog.push({id:ID,name:'Jack',kind:'baby'});
 // Preserve every established character ID and all gameplay; only replace displayed angel labels.
 const angelNames={blond_angel:'Cal',brown_angel:'Coco',purple_angel:'Violet',school_girl:'Bella',school_boy:'Leo',jack_angel:'Jack'};
 C.catalog.forEach(c=>{if(c.kind==='baby'&&angelNames[c.id])c.name=angelNames[c.id];});
 migrate();
  const spritePositions=Array.from({length:8},(_,i)=>({x:(i%4)*100/3,y:Math.floor(i/4)*100}));
  function setFrame(img,index){
   // A sprite background is not protected by object-fit; keep each cell at its native 543:724 ratio.
   img.style.setProperty('aspect-ratio','543 / 724','important');
   if(!img.dataset.jackAngel){img.style.setProperty('width','auto','important');img.style.setProperty('height','100%','important')}
   if(img.tagName==='IMG'){img.style.setProperty('background-image','none','important');img.style.setProperty('object-fit','contain','important');img.src='jack-original-'+String(index+1).padStart(2,'0')+'.png?v=64.32';return;}
   const pos=spritePositions[index]||spritePositions[0];
   img.style.backgroundImage=`url("${FILE}")`;
   img.style.backgroundSize='400% 200%';
   img.style.backgroundPosition=`${pos.x}% ${pos.y}%`;
   img.style.backgroundRepeat='no-repeat';
  }
  function makeSprite(){
   const el=document.createElement('div');
   el.className='jack637-sprite';
   el.style.cssText='position:absolute;left:12.5%;top:0;width:75%;height:100%;pointer-events:none;';
   return el;
  }
 function clearIdle(img){const state=idleByImage.get(img);if(state?.timer)clearInterval(state.timer);state?.observer?.disconnect();idleByImage.delete(img);if(img){img.style.animation='';img.style.translate='';img.style.backgroundImage='';img.style.backgroundSize='';img.style.backgroundPosition='';img.style.removeProperty('aspect-ratio');img.style.marginRight='';img.style.marginLeft='';if(img.parentElement?.matches('.v643-list>button')){img.style.position='';img.style.top='';}img.style.width='';img.style.height='';delete img.dataset.jackAngel;}}
  function setIdle(img){
   css();const token={timer:null,observer:null};idleByImage.set(img,token);
   img.dataset.character=ID;img.dataset.jackAngel='1';img.dataset.media='jack-angel-v637';img.alt='Jack';
   img.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221%22 height=%221%22 viewBox=%220 0 1 1%22%3E%3C/svg%3E';img.alt='';
   img.style.visibility='';img.style.animation='jack633Float 2.6s ease-in-out infinite';
   const fit=()=>{if(idleByImage.get(img)!==token)return;const host=img.parentElement;if(!host)return;const picker=host.matches('.v643-list>button'),cs=getComputedStyle(host);const width=host.clientWidth-(parseFloat(cs.paddingLeft)||0)-(parseFloat(cs.paddingRight)||0);let height=host.clientHeight-(parseFloat(cs.paddingTop)||0)-(parseFloat(cs.paddingBottom)||0);if(picker){for(const other of host.children)if(other!==img)height-=other.getBoundingClientRect().height;height-=(parseFloat(cs.rowGap)||5)*Math.max(0,host.children.length-1)}if(!width||height<=0)return;img.style.setProperty('flex','0 0 auto','important');img.style.setProperty('min-height','0','important');let h=Math.min(height,width/(543/724));if(picker||host.classList.contains('v6410-left'))h=Math.min(h,Math.min(height,width/(900/1080))*(838/1080)/(692/724));img.style.setProperty('width',(h*543/724)+'px','important');img.style.setProperty('height',h+'px','important');img.style.setProperty('aspect-ratio','543 / 724','important');img.style.setProperty('margin-left','auto','important');img.style.setProperty('margin-right','auto','important');
   // Picker placement only: preserve the established image size and native ratio.
   if(picker){
    const reference=[...host.parentElement.querySelectorAll('button>img')].find(n=>n!==img&&(/v64-cal-|Cal Angel/.test(n.getAttribute('src')||'')||n.alt==='Cal Angel'));
    if(reference){
     const r=reference.getBoundingClientRect(),j=img.getBoundingClientRect();
     const scale=host.getBoundingClientRect().width/(host.offsetWidth||host.clientWidth||1);
     if(r.width>0&&r.height>0&&j.height>0&&scale>0){
      const artworkHeight=Math.min(r.height,r.width*1080/900);
      const calFeet=r.top+(r.height-artworkHeight)/2+artworkHeight*948/1080;
      const previous=parseFloat(img.style.top)||0;
      const jackFeet=j.top-previous*scale+j.height*709/724;
      img.style.position='relative';img.style.top=((calFeet-jackFeet)/scale)+'px';
     }
    }
   }
  };
   img.style.width='75%';img.style.height='100%';img.style.marginLeft='12.5%';
   requestAnimationFrame(()=>{fit();if(window.ResizeObserver&&img.parentElement&&idleByImage.get(img)===token){token.observer=new ResizeObserver(fit);token.observer.observe(img.parentElement)}});
   // No timer or secondary image decode until idle motion is actually needed.
   const seq=[0,0,0,1,2,1,0,0,0,0,0,0,3,0,0,0,0,0];let i=0,last=-1;
   function render(){if(idleByImage.get(img)!==token||!img.isConnected){clearInterval(token.timer);return;}const frame=seq[i++%seq.length];if(frame!==last){setFrame(img,frame);last=frame;}}
   setFrame(img,0);last=0;token.timer=setInterval(render,380);
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
  // All animation coordinates are in actual stage CSS pixels, not viewport pixels (mobile stage is scaled).
  const start=bounds(source,stage);let tx=0,ty=0;
  const flyer=document.createElement('div');flyer.className='jack633-flyer';Object.assign(flyer.style,{left:start.x+'px',top:start.y+'px',width:start.w+'px',height:start.h+'px'});
  const sprite=makeSprite();setFrame(sprite,0);flyer.append(sprite);stage.append(flyer);
  const oldVisibility=source.style.visibility;source.style.visibility='hidden';
  try{
   for(let index=0;index<2;index++){
    const tile=index===0?en:zh;if(!tile.isConnected)break;const r=bounds(tile,stage);
    const target={x:r.x+r.w/2,y:r.y+r.h/2};
    // Frame 7 turns towards the word; frame 8 taps it with the wand.
    // Wand tip near 88% of artwork width and 24% of artwork height; land left of tile to keep text visible.
    const destX=target.x-start.w*.84-start.x,destY=target.y-start.h*.26-start.y;
    setFrame(sprite,6);
    await motion(flyer,[{transform:`translate(${tx}px,${ty}px) scale(1)`},{transform:`translate(${destX}px,${destY}px) scale(1)`}],index===0?560:440,'cubic-bezier(.3,.75,.25,1)');
    tx=destX;ty=destY;setFrame(sprite,7);
    await pause(70);
    // Effect originates at the wand gem and ends at the word card; one full second for each card.
    const origin={x:start.x+tx+start.w*.88,y:start.y+ty+start.h*.24};
    await makeEffect(stage,origin,target,r);
   }
   setFrame(sprite,6);await motion(flyer,[{transform:`translate(${tx}px,${ty}px) scale(1)`},{transform:'translate(0px,0px) scale(1)'}],590,'cubic-bezier(.34,.1,.3,1)');
  }finally{flyer.remove();source.style.visibility=oldVisibility;}
 }
  function makeComboCelebrate(stage,origin,bonus=3,holdMs=2000){
   const nodes=[],timers=[];const add=(name,style)=>{const d=document.createElement('div');d.className=name;Object.assign(d.style,style);stage.append(d);nodes.push(d);return d;};
   const burstCount=bonus>=10?14:bonus>=5?10:8;
   const core=add('jack633-combo-core',{left:(origin.x-17)+'px',top:(origin.y-17)+'px'});
   const ring=add('jack633-combo-ring',{left:(origin.x-53)+'px',top:(origin.y-53)+'px'});
   timers.push(motion(core,[{opacity:0,transform:'scale(.35)'},{opacity:1,transform:'scale(1.2)',offset:.18},{opacity:1,transform:'scale(1)',offset:.75},{opacity:0,transform:'scale(1.35)'}],holdMs,'ease-out'));
   timers.push(motion(ring,[{opacity:.05,transform:'scale(.35)'},{opacity:1,transform:'scale(1)',offset:.22},{opacity:.95,transform:'scale(1.08)',offset:.72},{opacity:0,transform:'scale(1.55)'}],holdMs,'ease-out'));
   for(let i=0;i<burstCount;i++){
    const a=i*Math.PI*2/burstCount,r=28+(i%3)*16,s=add('jack633-combo-star',{left:(origin.x-9)+'px',top:(origin.y-9)+'px'});
    timers.push(motion(s,[{opacity:0,transform:'translate(0,0) scale(.2)'},{opacity:1,transform:`translate(${Math.cos(a)*r*.55}px,${Math.sin(a)*r*.55}px) scale(1)`,offset:.22},{opacity:1,transform:`translate(${Math.cos(a)*r*.82}px,${Math.sin(a)*r*.82}px) scale(.95)`,offset:.74},{opacity:0,transform:`translate(${Math.cos(a)*r*1.05}px,${Math.sin(a)*r*1.05}px) scale(.25)`}],holdMs,'ease-out'));
   }
   return Promise.all(timers).then(()=>nodes.forEach(n=>n.remove()));
 }

  async function performCombo(source,bonus){
   if(comboBusy||hintBusy)return;comboBusy=true;
   const stage=document.querySelector('#match-game .match-stage');
   if(!stage||!source?.isConnected){comboBusy=false;return;}
   const b=bounds(source,stage),board=document.getElementById('board');
   const point=board?bounds(board,stage):{x:b.x,y:b.y,w:b.w,h:b.h};
   const target={x:point.x+point.w*.5,y:point.y+point.h*.34};
   const start={x:b.x+b.w/2,y:b.y+b.h/2};
   const dx=target.x-start.x,dy=target.y-start.y;
   const flyer=document.createElement('div');flyer.className='jack633-flyer';
   Object.assign(flyer.style,{left:b.x+'px',top:b.y+'px',width:b.w+'px',height:b.h+'px'});
   const sprite=makeSprite();setFrame(sprite,4);flyer.append(sprite);stage.append(flyer);
   const oldVis=source.style.visibility;source.style.visibility='hidden';
   try{
    await motion(flyer,[{transform:'translate(0,0) scale(1)'},{transform:`translate(${dx}px,${dy}px) scale(1.2)`}],550);
    setFrame(sprite,5);
    const origin={x:b.x+dx+b.w*.6,y:b.y+dy+b.h*.22};
    // Combo celebrations must not reuse the hint's tile-box effect.
    // Hold the raised-wand pose long enough to be clearly visible.
    await makeComboCelebrate(stage,origin,bonus,2000);
    await pause(120);
    setFrame(sprite,4);
    await motion(flyer,[{transform:`translate(${dx}px,${dy}px) scale(1.2)`},{transform:'translate(0,0) scale(1)'}],550);
   }finally{flyer.remove();source.style.visibility=oldVis;comboBusy=false;}
  }
  function installReward(){
   const stage=document.querySelector('#match-game .match-stage');if(!stage||stage.dataset.jack637RewardReady)return;
   stage.dataset.jack637RewardReady='1';const original=C.reward;
   C.reward=function(bonus){
    const jack=stage.querySelector('.game-companions .slot-0[data-character="'+ID+'"]:not([hidden])');
    if(jack&&[3,5,10].includes(Number(bonus))){void performCombo(jack,Number(bonus));return;}
    return original?.call(C,bonus);
   };
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
   }catch(err){console.warn('Jack V63.10 hint sequence',err);}
   finally{hint.disabled=false;hintBusy=false;}
  };
 }
 css();
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>{installHint();installReward();},0),{once:true});
 else setTimeout(()=>{installHint();installReward();},0);
})();
