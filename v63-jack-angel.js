
/* V63.2 – Jack Angel replacement.
 * Replaces the previous golden_staff_angel with Jack / 杰克天使.
 * Idle uses the first four frames only. Hint magic uses the last two frames only.
 */
(()=>{'use strict';
  const C=window.WMCompanions;
  if(!C)return;
  const KEY='wm-companions-v39';
  const ID='jack_angel';
  const LEGACY_ID='golden_staff_angel';
  const SHEET='jack-angel-frames.png';
  const frameCache={promise:null};
  const jackState=new WeakMap();
  const originalSet=typeof C.setImage==='function'?C.setImage.bind(C):null;

  function injectStyle(){
    if(document.getElementById('v63-jack-style'))return;
    const style=document.createElement('style');
    style.id='v63-jack-style';
    style.textContent=`
      @keyframes v63JackFloat {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      .v63-jack-flyer {
        position:absolute; z-index:35; pointer-events:none; transform-origin:center center;
      }
      .v63-jack-flyer img { width:100%; height:100%; object-fit:contain; display:block; }
      .v63-jack-burst, .v63-jack-ring, .v63-jack-star {
        position:absolute; pointer-events:none; z-index:36;
      }
      .v63-jack-ring {
        border: 3px solid rgba(255, 223, 102, .85);
        border-radius: 999px;
        box-shadow: 0 0 18px rgba(255,215,85,.65), inset 0 0 10px rgba(255,255,255,.6);
      }
      .v63-jack-star {
        width:14px; height:14px; border-radius:50%;
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,243,184,.95) 35%, rgba(255,215,88,0) 72%);
      }
    `;
    document.head.append(style);
  }

  function readStore(){
    try{return JSON.parse(localStorage.getItem(KEY)||'{}')||{};}catch{return {};}
  }
  function writeStore(data){
    try{localStorage.setItem(KEY,JSON.stringify(data));}catch{}
    window.dispatchEvent(new Event('wm-companions-change'));
  }
  function migrateSelection(){
    const data=readStore();
    if(!Array.isArray(data.slots))return;
    let changed=false;
    data.slots=data.slots.map(id=>{
      if(id===LEGACY_ID){changed=true; return ID;}
      return id;
    });
    if(changed){
      const unique=[];
      for(const id of data.slots){if(id && !unique.includes(id)) unique.push(id);}
      data.slots=unique.slice(0,2);
      writeStore(data);
    }
  }
  function normalizeCatalog(){
    for(let i=C.catalog.length-1;i>=0;i--){
      if(C.catalog[i].id===LEGACY_ID)C.catalog.splice(i,1);
    }
    if(!C.catalog.some(item=>item.id===ID)){
      C.catalog.push({id:ID,name:'Jack 杰克天使',kind:'baby'});
    }
  }
  function stopJack(img){
    const state=jackState.get(img);
    if(state?.timer) clearInterval(state.timer);
    jackState.delete(img);
    if(img){
      img.style.animation='';
      delete img.dataset.jackAngel;
    }
  }
  async function loadFrames(){
    if(frameCache.promise)return frameCache.promise;
    frameCache.promise=new Promise((resolve,reject)=>{
      const image=new Image();
      image.onload=()=>{
        const cols=3, rows=2;
        const fw=Math.floor(image.width/cols), fh=Math.floor(image.height/rows);
        const frames=[];
        for(let i=0;i<cols*rows;i++){
          const canvas=document.createElement('canvas');
          canvas.width=fw; canvas.height=fh;
          const ctx=canvas.getContext('2d');
          ctx.drawImage(image,(i%cols)*fw,Math.floor(i/cols)*fh,fw,fh,0,0,fw,fh);
          frames.push(canvas.toDataURL('image/png'));
        }
        resolve(frames);
      };
      image.onerror=reject;
      image.src=SHEET+'?v=63.2';
    });
    return frameCache.promise;
  }
  async function setJackIdle(img){
    if(!img)return;
    injectStyle();
    const frames=await loadFrames().catch(()=>null);
    const token={mode:'idle',timer:null};
    jackState.set(img,token);
    img.dataset.jackAngel='1';
    img.dataset.character=ID;
    img.dataset.media='v63-jack-angel';
    img.removeAttribute('data-idle-character');
    img.alt='Jack 杰克天使';
    img.style.visibility='';
    img.style.animation='v63JackFloat 2.3s ease-in-out infinite';
    if(!frames){img.src=SHEET; return;}
    const sequence=[0,1,2,1,0,0,1,2,1,0,3,0];
    let step=0;
    const apply=()=>{
      if(jackState.get(img)!==token)return;
      img.src=frames[sequence[step % sequence.length]];
      step += 1;
    };
    apply();
    token.timer=setInterval(apply,220);
  }
  if(originalSet){
    C.setImage=function(img,id,action='idle'){
      if(img?.dataset?.jackAngel==='1') stopJack(img);
      if(id!==ID) return originalSet(img,id,action);
      return setJackIdle(img);
    };
  }

  function hasAvailablePair(){
    const nodes=[...document.querySelectorAll('#board .match-tile[data-word]')];
    const seen=new Set();
    for(const n of nodes){
      const key=n.dataset.word;
      const current=seen.has(key);
      if(current)return true;
      seen.add(key);
    }
    return false;
  }
  function wait(ms){ return new Promise(resolve=>setTimeout(resolve,ms)); }
  function rectInStage(node,stage){
    const a=node.getBoundingClientRect();
    const s=stage.getBoundingClientRect();
    return {x:a.left-s.left,y:a.top-s.top,w:a.width,h:a.height};
  }
  async function animate(node,frames,options){
    if(!node.animate){
      const last=frames[frames.length-1];
      if(last?.transform) node.style.transform=last.transform;
      return;
    }
    const a=node.animate(frames,{fill:'forwards',...options});
    await a.finished.catch(()=>{});
    const last=frames[frames.length-1];
    if(last?.transform) node.style.transform=last.transform;
    a.cancel();
  }
  function magicBurst(stage,target){
    injectStyle();
    const ring=document.createElement('div');
    ring.className='v63-jack-ring';
    ring.style.left=(target.x-22)+'px';
    ring.style.top=(target.y-22)+'px';
    ring.style.width='44px';
    ring.style.height='44px';
    stage.append(ring);
    animate(ring,[
      {transform:'scale(.2)', opacity:.15},
      {transform:'scale(1.1)', opacity:1, offset:.55},
      {transform:'scale(1.7)', opacity:0}
    ],{duration:720,easing:'ease-out'}).then(()=>ring.remove());
    for(let i=0;i<12;i++){
      const star=document.createElement('span');
      star.className='v63-jack-star';
      star.style.left=target.x+'px';
      star.style.top=target.y+'px';
      stage.append(star);
      const angle=(Math.PI*2*i)/12;
      const dx=Math.cos(angle)*(28+((i%3)*10));
      const dy=Math.sin(angle)*(20+((i%4)*8));
      animate(star,[
        {transform:'translate(-50%,-50%) scale(.3)', opacity:0},
        {transform:'translate(-50%,-50%) scale(1)', opacity:1, offset:.25},
        {transform:`translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(.4)`, opacity:0}
      ],{duration:700+(i%4)*80,easing:'ease-out'}).then(()=>star.remove());
    }
  }
  async function playJackHintFlight(source){
    const stage=document.querySelector('#match-game .match-stage');
    const board=document.getElementById('board');
    if(!stage||!board||!source)return;
    const frames=await loadFrames().catch(()=>null);
    if(!frames)return;
    const s=rectInStage(source,stage);
    const b=rectInStage(board,stage);
    const start={x:s.x,y:s.y,w:s.w,h:s.h};
    const target={x:b.x+b.w*0.52,y:b.y+b.h*0.18};
    const dx=target.x-(start.x+start.w/2);
    const dy=target.y-(start.y+start.h/2);

    const flyer=document.createElement('div');
    flyer.className='v63-jack-flyer';
    flyer.style.left=start.x+'px';
    flyer.style.top=start.y+'px';
    flyer.style.width=start.w+'px';
    flyer.style.height=start.h+'px';
    const img=document.createElement('img');
    img.src=frames[0];
    img.alt='';
    flyer.append(img);
    stage.append(flyer);

    const flapSeq=[0,1,2,1];
    let flap=0;
    const flapTimer=setInterval(()=>{ img.src=frames[flapSeq[flap%flapSeq.length]]; flap+=1; },150);

    source.style.visibility='hidden';
    try{
      await animate(flyer,[
        {transform:'translate(0,0) scale(1)'},
        {transform:`translate(${dx*.35}px, ${dy*.45-35}px) scale(1.06)`, offset:.45},
        {transform:`translate(${dx}px, ${dy}px) scale(1.14)`}
      ],{duration:980,easing:'cubic-bezier(.24,.84,.22,1)'});
      clearInterval(flapTimer);
      img.src=frames[4];
      await animate(flyer,[
        {transform:`translate(${dx}px, ${dy}px) scale(1.12)`},
        {transform:`translate(${dx}px, ${dy-12}px) scale(1.18)`}
      ],{duration:260,easing:'ease-out'});
      await wait(180);
      img.src=frames[5];
      magicBurst(stage,target);
      await animate(flyer,[
        {transform:`translate(${dx}px, ${dy-12}px) scale(1.18)`},
        {transform:`translate(${dx}px, ${dy-16}px) scale(1.23)`}
      ],{duration:260,easing:'ease-out'});
      await wait(420);
      let backStep=0;
      const backSeq=[5,4,2,1];
      const backTimer=setInterval(()=>{ img.src=frames[backSeq[backStep%backSeq.length]]; backStep+=1; },130);
      await animate(flyer,[
        {transform:`translate(${dx}px, ${dy-16}px) scale(1.23)`},
        {transform:`translate(${dx*.3}px, ${dy*.2-14}px) scale(1.08)`, offset:.5},
        {transform:'translate(0,0) scale(1)'}
      ],{duration:780,easing:'cubic-bezier(.36,.08,.32,1)'});
      clearInterval(backTimer);
    } finally {
      clearInterval(flapTimer);
      flyer.remove();
      source.style.visibility='';
    }
  }
  function setupHintOverride(){
    const hint=document.getElementById('hint');
    const stage=document.querySelector('#match-game .match-stage');
    if(!hint||!stage||hint.dataset.v63JackReady) return;
    hint.dataset.v63JackReady='1';
    const oldHint=hint.onclick;
    if(typeof oldHint!=='function') return;
    let busy=false;
    hint.onclick=async function(event){
      const source=stage.querySelector('.game-companions .slot-0:not([hidden])');
      const isJack=source?.dataset?.character===ID;
      if(!isJack || busy || !hasAvailablePair()) return oldHint.call(this,event);
      busy=true;
      const wasHidden=source.hidden;
      source.hidden=true; // suppress legacy flight wrappers for the old angel.
      let result;
      try{ result=await oldHint.call(this,event); }
      finally{ source.hidden=wasHidden; }
      try{
        const hinted=document.querySelectorAll('#board .hinted').length;
        if(hinted>=2 && source.isConnected) await playJackHintFlight(source);
      } finally {
        busy=false;
      }
      return result;
    };
  }

  injectStyle();
  normalizeCatalog();
  migrateSelection();
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',()=>setTimeout(setupHintOverride,0),{once:true});
  }else{
    setTimeout(setupHintOverride,0);
  }
})();
