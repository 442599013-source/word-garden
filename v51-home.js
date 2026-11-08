/* V51: fix missing More icon, three-line stats and keep the ORIGINAL 15s intro.
   Patches the V43/V49 UI without replacing its pet or progress handlers. */
(()=>{'use strict';
  // V43's birth.mp4 is 15.04 seconds, while welcome.mp4 is 2 seconds.
  // Keep V43's video playback controls intact and route short welcome to long birth.
  const media=window.WMGameMedia;
  if(media&&!media.__v51LongIntro){
    const original=media.load.bind(media);
    media.load=(key)=>original(key==='v39-intro-welcome.mp4'?'v39-intro-birth.mp4':key);
    media.__v51LongIntro=true;
  }
  const moreIcon='<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="6" width="12" height="12" rx="3"/><rect x="23" y="6" width="12" height="12" rx="3"/><rect x="5" y="24" width="12" height="12" rx="3"/><rect x="23" y="24" width="12" height="12" rx="3"/></svg>';
  function improve(){
    const stage=document.getElementById('home-stage');if(!stage)return;
    const nav=stage.querySelector('.bottom-nav');
    const more=nav?.children[2];
    if(more){const icon=more.querySelector('.v48-nav-icon');if(icon)icon.innerHTML=moreIcon;}
    const en=document.getElementById('v48-level-en'),zh=document.getElementById('v48-level-zh');
    if(en)en.textContent='Angel Baby';if(zh)zh.textContent='天使宝宝';
    const ability=document.getElementById('v48-ability');
    const map={'薄弱':'Weak','欠缺':'Below Average','普通':'Average','良好':'Good','优秀':'Excellent','卓越':'Outstanding','传奇':'Legendary','待评':'Not Rated'};
    if(ability){const label=ability.textContent.trim();if(map[label])ability.textContent=map[label];}
    const container=stage.querySelector('.v48-level');
    if(container&&!container.querySelector('.v51-level-value')){
      const label=document.createElement('strong');label.className='v51-level-value';label.id='v51-level-value';container.append(label);
    }
    const value=document.getElementById('v51-level-value');
    if(value){const old=window.WM42;value.textContent='Level '+(Number(old?.completed?.())||0);}
    const scroller=stage.querySelector('.v48-scroll');
    if(scroller&&!stage.dataset.v51InitialScroll){stage.dataset.v51InitialScroll='1';scroller.scrollTop=0;}
  }
  // V49's original sync writes stats in Chinese on each page/score event;
  // run after it, without touching the stored numeric score or assessment.
  function afterSync(){queueMicrotask(improve);}
  window.addEventListener('load',improve,{once:true});
  for(const ev of ['pageshow','storage','wm-companions-change'])window.addEventListener(ev,afterSync);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)improve();});
})();
