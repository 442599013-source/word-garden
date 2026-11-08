/* V53: intro buttons removed; seamless scene continuation under fixed nav. */
(()=>{'use strict';const stage=document.getElementById('home-stage');if(!stage)return;
 // Previous homepage JS adds the redundant Go to Growth button at runtime.
 const intro=document.getElementById('intro');
 // Preserve the hidden Skip DOM node because V43 binds its onclick during setup.
 intro?.querySelectorAll('.v48-intro-cta').forEach(n=>n.remove());
 // Scene is selected by V49 runtime; mirror its image to the scroll continuation.
 const scroll=stage.querySelector('.v48-scroll'),world=stage.querySelector('.v48-world');
 if(scroll&&world){let previous='';function syncScene(){const image=world.style.backgroundImage||getComputedStyle(world).backgroundImage;if(!image||image==='none'||image===previous)return;previous=image;scroll.style.setProperty('--v53-scene',image);}
  syncScene();new MutationObserver(syncScene).observe(world,{attributes:true,attributeFilter:['style']});
  window.addEventListener('wm-companions-change',()=>requestAnimationFrame(syncScene));
  window.addEventListener('pageshow',syncScene);
 }
 // Reflect intro state immediately; CSS :has() hides navigation while visible.
 intro?.addEventListener('ended',()=>{},false);
})();
