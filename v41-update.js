/* V41 non-destructive enhancement: use saved scene/characters and existing matching engine. */
(()=>{'use strict';
const C=window.WMCompanions;
const SCENE_KEY='wm-companions-v39';
const HOME_MAP={
 'forest-stairs':'v41-stairs-forest.png','forest':'v41-stairs-forest.png',
 'coast-stairs':'v41-stairs-coast.png','coast':'v41-stairs-coast.png',
 'city-stairs':'v41-stairs-blossom.png','city':'v41-stairs-blossom.png'};
const COLOR={
 forest:{edge:'#b65bf2',core:'#51218d',panel:'#fff1fc'},
 coast:{edge:'#49c6e9',core:'#155984',panel:'#e8f9ff'},
 city:{edge:'#f29bd0',core:'#834b98',panel:'#fff2fa'}};
const getScene=()=>C?.read?.().scene||'forest-stairs';
const family=s=>s.startsWith('coast')?'coast':s.startsWith('city')?'city':'forest';
function theme(){const scene=getScene(),path=HOME_MAP[scene]||HOME_MAP['forest-stairs'];
 const home=document.getElementById('home-stage'),game=document.querySelector('.match-stage');
 if(home)home.style.setProperty('--v41-home-background',`url('${path}')`);
 if(game){game.style.setProperty('--v41-match-background',`url('${path}')`);
  const p=COLOR[family(scene)];for(const [k,v]of Object.entries(p))game.style.setProperty('--v41-'+k,v);}
}
function completedCount(){try{let s=JSON.parse(localStorage.getItem('wm-wordmatch-v35')||'{}');return Object.values(s.completed||{}).filter(Boolean).length;}catch{return 0}}
function isSecondUnlocked(){return completedCount()>=120; /* WMJourney: kindergarten contains 3 × 40 levels */}
function levelLabel(){const badge=document.querySelector('.home-stage .level-badge');if(badge)badge.textContent=completedCount()+'级宝宝';}
function homeRules(){let home=document.getElementById('home-stage');if(!home)return;
 levelLabel();const locked=!isSecondUnlocked();home.classList.toggle('v41-second-locked',locked);
 const people=home.querySelector('#home-companions');if(people){people.querySelectorAll('.slot-1').forEach(n=>n.hidden=locked);if(locked)people.dataset.count='1';}
 const panel=document.getElementById('panel-view');if(panel&&!panel.hidden&&!panel.querySelector('.v41-panel-back')){
   const b=document.createElement('button');b.className='v41-panel-back';b.textContent='← 返回首页 · Home';b.onclick=()=>document.querySelector('[data-tab="home"]')?.click();panel.prepend(b);
 }
}
let lastAnnouncement=0;
function notice(s){const toast=document.getElementById('home-toast');if(!toast)return;toast.textContent=s;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200);}
function lockedCapture(e){if(isSecondUnlocked())return;
 const b=e.target.closest?.('button');if(!b)return;
 if(b.closest('.slot-picker')&&b.textContent.includes('Second')){
 e.preventDefault();e.stopImmediatePropagation();notice('第二位将在小学阶段解锁');return;
 }
 if(b.closest('.pet-card')){e.preventDefault();e.stopImmediatePropagation();notice('小学阶段解锁第二位后可以选择宠物');return;}
}
function homeSetup(){const picker=document.getElementById('picker');picker?.addEventListener('click',lockedCapture,true);
 const panel=document.getElementById('panel-view');panel?.addEventListener('click',lockedCapture,true);
 if(panel){const ob=new MutationObserver(()=>{if(!panel.hidden&&!panel.querySelector('.v41-panel-back'))homeRules();});ob.observe(panel,{childList:true});}
 theme();homeRules();
}
function spark(){const stage=document.querySelector('.match-stage');if(!stage)return;let n=document.createElement('div');n.className='v41-spark';n.textContent='✦ ✨ ✦';stage.append(n);setTimeout(()=>n.remove(),1400);}
function flash(node){if(!node)return;node.classList.remove('v41-glow');void node.offsetWidth;node.classList.add('v41-glow');setTimeout(()=>node.classList.remove('v41-glow'),1900);}
let busy=false;
async function fly(character,mode){if(busy)return false;busy=true;
 const stage=document.querySelector('.match-stage');let dest=mode==='hint'?document.getElementById('targets'):document.getElementById('board');
 if(!character||!stage||!dest){busy=false;return false;}
 const a=character.getBoundingClientRect(),b=stage.getBoundingClientRect(),t=dest.getBoundingClientRect();
 const dx=(t.left+t.width/2)-(a.left+a.width/2),dy=(t.top+t.height*.48)-(a.top+a.height/2);
 try{if(character.animate&&!matchMedia('(prefers-reduced-motion: reduce)').matches){let anim=character.animate([
 {transform:'translate(0px,0px) scale(1)',offset:0},
 {transform:`translate(${dx}px,${dy}px) scale(1.24) rotate(0deg)`,offset:.33},
 {transform:`translate(${dx}px,${dy}px) scale(1.24) rotate(${mode==='shuffle'?360:0}deg)`,offset:.64},
 {transform:'translate(0px,0px) scale(1) rotate(0deg)',offset:1}],{duration:1400,easing:'ease-in-out'});
 setTimeout(()=>{flash(dest);if(mode==='shuffle')spark();},450);
 await anim.finished.catch(()=>{});
 }else{flash(dest);if(mode==='shuffle')spark();}}
 finally{busy=false;}return true;}
function setupGame(){const stage=document.querySelector('.match-stage');if(!stage)return;theme();
 const observer=new MutationObserver(()=>{
  const host=stage.querySelector('.game-companions');if(!host)return;
  host.querySelectorAll('.wm-companion').forEach((node,i)=>{
    const locked=i===1&&!isSecondUnlocked();node.hidden=locked;
    node.dataset.actionLabel=i===0?'Hint 提示':'New Batch 换一批';
    if(node.dataset.v41Bound==='1')return;
    node.dataset.v41Bound='1';node.setAttribute('role','button');node.tabIndex=0;
    node.setAttribute('aria-label',i===0?'Hint 提示':'New Batch 换一批');
    const act=()=>{const target=i===0?'hint':'shuffle';if(busy)return;void fly(node,i===0?'hint':'shuffle').then(ok=>{if(ok)document.getElementById(target)?.click();});};
    node.addEventListener('click',act);node.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();act();}});
  });
  stage.classList.toggle('v41-left-ready',!!host.querySelector('.slot-0:not([hidden])'));
  stage.classList.toggle('v41-right-ready',!!host.querySelector('.slot-1:not([hidden])'));
 });observer.observe(stage,{childList:true,subtree:true});
 // Original audio pipeline and scores remain unchanged. Enlarge reward gestures at center.
 if(C&&typeof C.reward==='function'){
  C.reward=function(bonus){const host=stage.querySelector('.game-companions'),nodes=[...(host?.children||[])].filter(n=>!n.hidden);
   nodes.forEach((node,i)=>{let id=node.dataset.character;if(!id||C.catalog.find(c=>c.id===id)?.kind==='pet')return;
    C.setImage(node.querySelector('img'),id,bonus===3?'cheer_fist':'thumbs_up');
    const a=node.getBoundingClientRect(),b=stage.getBoundingClientRect();
    const dx=b.left+b.width/2-(a.left+a.width/2),dy=b.top+b.height*.44-(a.top+a.height/2);
    if(node.animate&&!matchMedia('(prefers-reduced-motion: reduce)').matches){node.getAnimations().forEach(x=>x.cancel());node.animate([
     {transform:'translate(0,0) scale(1)'},{transform:`translate(${dx}px,${dy}px) scale(1.5)`,offset:.28},
     {transform:`translate(${dx}px,${dy-12}px) scale(1.65)`,offset:.58},{transform:'translate(0,0) scale(1)'}],{duration:1800+i*150,easing:'ease-in-out'});}
    setTimeout(()=>C.setImage(node.querySelector('img'),id,'idle'),2000+i*150);
   });
   spark();
   if([3,5,10].includes(Number(bonus))&&'speechSynthesis' in window){try{let utter=new SpeechSynthesisUtterance(bonus===3?'哇！三连！':bonus===5?'哇！五连！':'哇！十连！');utter.lang='zh-CN';utter.rate=1.1;utter.volume=.85;window.speechSynthesis.speak(utter);}catch{}}
  };
 }
}
function init(){theme();if(document.getElementById('home-stage'))homeSetup();if(document.querySelector('.match-stage'))setupGame();
 window.addEventListener('wm-companions-change',()=>{theme();setTimeout(homeRules,0);});
 window.addEventListener('storage',()=>{theme();homeRules();});
 window.addEventListener('pageshow',()=>{theme();homeRules();});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
