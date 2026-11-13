/* V64.15: two independent egg displays; recover Cal's idle visibility after Hint/combo.
   No original image files or Jack animation functions are modified. */
(()=>{'use strict';
  const EGG_IMAGE='v49-magic-golden-egg.gif';
  function addSecondEgg(){
    const world=document.querySelector('#home-stage .v48-world');
    if(!world||world.querySelector('.v6415-angel-egg'))return;
    const egg=document.createElement('div');
    egg.className='v6415-angel-egg';
    egg.setAttribute('aria-hidden','true');
    const img=document.createElement('img');
    img.src=EGG_IMAGE;img.alt='';img.draggable=false;
    egg.append(img);world.append(egg);
  }
  // V64.34: the original egg rests on the lower steps, beside the cat.
  // The separate egg beside the angel and all other scene geometry stay unchanged.
  function alignKindergartenEgg(){
    const egg=document.querySelector('#home-stage .v48-world .v48-egg');
    if(!egg)return;
    egg.style.setProperty('left','25%','important');
    egg.style.setProperty('top','70%','important');
  }
  let alignScheduled=false;
  function queueEggAlignment(){
    if(alignScheduled)return;
    alignScheduled=true;
    requestAnimationFrame(()=>{alignScheduled=false;alignKindergartenEgg()});
  }
  function cal(){return document.querySelector('#match-game .game-companions .slot-0[data-character="cal_angel"]')}
  let restoreTimer=0, lastHintAt=0;
  function busy(stage){
    return !!stage.querySelector('.jack633-flyer,.v6310-other-flyer,.v6412-fallback-wand,.v59-flyer,.v648-angel-flyer');
  }
  function repairCal(){
    const actor=cal();const stage=document.querySelector('#match-game .match-stage');
    if(!actor||!stage||busy(stage))return;
    // Do not undo intentional temporary hiding while a Hint is still running.
    if(Date.now()-lastHintAt<4600)return;
    if(actor.hidden)actor.hidden=false;
    if(actor.style.visibility==='hidden'){
      // An orphaned hidden state after a completed fly-out should not persist.
      actor.style.removeProperty('visibility');
      for(const img of actor.querySelectorAll('img')){
        if(img.style.visibility==='hidden')img.style.removeProperty('visibility');
      }
    }
  }
  function scheduleRepair(){clearTimeout(restoreTimer);restoreTimer=setTimeout(repairCal,500)}
  function setupMatch(){
    const stage=document.querySelector('#match-game .match-stage');
    if(!stage||stage.dataset.v6415CalRepair)return;
    stage.dataset.v6415CalRepair='1';
    const observer=new MutationObserver(()=>scheduleRepair());
    observer.observe(stage,{childList:true,subtree:true,attributes:true,attributeFilter:['hidden','style']});
    document.getElementById('hint')?.addEventListener('click',()=>{
      lastHintAt=Date.now();
      // Hint's English and Chinese pointer sequence runs ~4 seconds.
      setTimeout(repairCal,4700);
      setTimeout(repairCal,7200);
    },false);
    // Handle interrupted animations, page focus changes and celebratory transitions.
    window.addEventListener('pageshow',()=>setTimeout(repairCal,250));
    document.addEventListener('visibilitychange',()=>{if(!document.hidden)scheduleRepair()});
    scheduleRepair();
  }
  function init(){addSecondEgg();setupMatch();
    queueEggAlignment();
    window.addEventListener('resize',queueEggAlignment);
    window.addEventListener('pageshow',queueEggAlignment);
    window.addEventListener('load',queueEggAlignment);
    if(document.querySelector('#home-stage')){
      const home=document.querySelector('#home-stage');
      const observer=new MutationObserver(queueEggAlignment);
      observer.observe(home,{childList:true,subtree:true});
      setTimeout(queueEggAlignment,150);
      setTimeout(queueEggAlignment,900);
    }
    if(document.querySelector('#home-stage')&&!document.querySelector('.v48-world')){
      const o=new MutationObserver(()=>{if(document.querySelector('.v48-world')){o.disconnect();addSecondEgg();queueEggAlignment()}});
      o.observe(document.getElementById('home-stage'),{childList:true,subtree:true});
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
