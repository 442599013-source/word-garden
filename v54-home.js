/* V55 correction to V54: four transparent navigation controls are visible
   BOTH during the opening animation and on the home page. Only Skip and
   Go to Growth are removed. Keep the original V43 handlers unchanged. */
(()=>{'use strict';
 const stage=document.getElementById('home-stage'),intro=document.getElementById('intro'),nav=stage?.querySelector('.bottom-nav');
 if(!stage||!intro||!nav)return;
 const sync=()=>{
  const active=!intro.hidden;
  stage.classList.toggle('v54-intro-active',active);
  nav.style.setProperty('display','grid','important');
  nav.style.setProperty('visibility','visible','important');
  nav.style.setProperty('pointer-events','auto','important');
 };
 new MutationObserver(sync).observe(intro,{attributes:true,attributeFilter:['hidden']});
 document.getElementById('intro-video')?.addEventListener('ended',()=>requestAnimationFrame(sync));
 window.addEventListener('pageshow',sync);
 sync();
})();
