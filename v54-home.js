/* V54: keep intro-only hiding separate from the permanent home navigation.
   V43 navigation handlers, More subpage, growth link and progress remain intact. */
(()=>{'use strict';
 const stage=document.getElementById('home-stage'),intro=document.getElementById('intro'),nav=stage?.querySelector('.bottom-nav');
 if(!stage||!intro||!nav)return;
 const sync=()=>{
  const active=!intro.hidden;
  stage.classList.toggle('v54-intro-active',active);
  // A reliable state marker even if legacy CSS has competing rules.
  nav.style.setProperty('display',active?'none':'grid','important');
  nav.style.setProperty('visibility',active?'hidden':'visible','important');
  nav.style.setProperty('pointer-events',active?'none':'auto','important');
 };
 new MutationObserver(sync).observe(intro,{attributes:true,attributeFilter:['hidden']});
 document.getElementById('intro-video')?.addEventListener('ended',()=>requestAnimationFrame(sync));
 window.addEventListener('pageshow',sync);
 sync();
})();
