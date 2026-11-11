/* V64.12 final layout + Cal celebration reliability; preserves V63.10 Jack. */
(()=>{'use strict';
function place(){const stage=document.querySelector('#match-game .match-stage');if(!stage)return;
 const branch=stage.querySelector('.v50-branch');if(branch)branch.style.setProperty('top','15.10%','important');
 for(const selector of ['.level-button','.score-label','.combo-label'])stage.querySelector(selector)?.style.setProperty('top','19.30%','important');
}
let hooked=false;
function keepCalWand(){if(hooked)return;const C=window.WMCompanions,stage=document.querySelector('#match-game .match-stage');if(!C||!stage)return;hooked=true;
 const prior=C.reward;
 C.reward=function(bonus){const b=Number(bonus),cal=stage.querySelector('.game-companions .slot-0[data-character="cal_angel"]:not([hidden])');
   const result=prior?.call(this,bonus);
   // Existing V64.8 Cal handler performs the proper raised-wand sprite celebration.
   // Only recover when that handler was not installed or its flyer failed to appear.
   if(cal&&[3,5,10].includes(b))setTimeout(()=>{
     if(!cal.isConnected||stage.querySelector('.jack633-flyer.v644-cal-flyer'))return;
     const a=cal.getBoundingClientRect(),s=stage.getBoundingClientRect(),n=document.createElement('img');
     n.src='v64-cal-05.png';n.alt='';n.className='v6412-fallback-wand';
     const ratio=s.width/(stage.offsetWidth||s.width)||1;
     Object.assign(n.style,{left:((a.left-s.left)/ratio)+'px',top:((a.top-s.top)/ratio)+'px',width:(a.width/ratio)+'px',height:(a.height/ratio)+'px'});
     const old=cal.style.visibility;cal.style.visibility='hidden';stage.append(n);
     n.animate?.([{transform:'translateY(0) scale(1)'},{transform:'translateY(-12px) scale(1.16)',offset:.15},{transform:'translateY(-12px) scale(1.16)',offset:.85},{transform:'translateY(0) scale(1)'}],{duration:2700});
     setTimeout(()=>{n.remove();cal.style.visibility=old},2700);
   },170);
   return result;
 };
}
function init(){place();
 const extra=document.getElementById('v64-system-loader');if(extra)extra.addEventListener('load',()=>{place();setTimeout(keepCalWand,420)},{once:true});
 setTimeout(()=>{place();keepCalWand()},1100);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
