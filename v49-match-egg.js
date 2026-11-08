/* V49: a single animated egg on the game page, regardless of growth stage. */
(()=>{'use strict';
 const stage=document.querySelector('.match-stage');if(!stage)return;
 // Hide V43's old egg image; its old rule deliberately removed the egg after primary school.
 const style=document.createElement('style');style.textContent=`
 #hint-egg{display:none!important}
 #v49-game-egg{position:absolute;right:1%;top:82%;width:24%;height:11.5%;z-index:13;pointer-events:none;display:flex;align-items:center;justify-content:center}
 #v49-game-egg img{display:block;width:100%;height:100%;object-fit:contain}
 `;document.head.append(style);
 if(stage.querySelector('#v49-game-egg'))return;
 const egg=document.createElement('div');egg.id='v49-game-egg';egg.setAttribute('aria-label','Magic Golden Egg / 魔法金蛋');
 const img=document.createElement('img');img.src='v49-magic-golden-egg.gif';img.alt='Magic Golden Egg 魔法金蛋';img.draggable=false;
 egg.append(img);stage.append(egg);
})();
