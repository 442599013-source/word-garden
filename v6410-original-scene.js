/* V64.10 / Step 2 ONLY: show the homepage scene and currently chosen companions
   inside the original Level Up Journey. No course, layout, keyboard or scoring changes. */
(()=>{'use strict';
 const KEY='wm-companions-v39';
 const sceneFromSave=()=>{let saved={};try{saved=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch{}
   const id=String(saved.scene||'forest-stairs');return id.startsWith('coast')?'coast':id.startsWith('city')?'blossom':'forest';};
 const firstFromSave=()=>{let s={};try{s=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch{}
   return s.slots?.[0]==='cal_angel'?'cal_angel':'jack_angel';};
 let sceneName='';
 function syncScene(){const screen=document.querySelector('.wm-screen');if(!screen)return;
   screen.classList.add('v6410-scene');const family=sceneFromSave();if(sceneName===family)return;sceneName=family;
   // The homepage v42-home.js uses this exact family-based background filename.
   screen.style.setProperty('--v6410-scene-image',`url("v41-stairs-${family}.png")`);
 }
 function makeLeft(first){const slot=document.createElement('div');slot.className='v6410-actor v6410-left '+(first==='cal_angel'?'v6410-cal':'v6410-jack');
   slot.setAttribute('aria-label',first==='cal_angel'?'Cal Angel':'Jack Angel');
   const img=document.createElement('img');img.alt=first==='cal_angel'?'Cal Angel':'Jack Angel';img.draggable=false;slot.append(img);
   if(first==='cal_angel'){
     // Reuse Cal's approved original frames. Idle never includes the turning or talking frame.
     img.src='v64-cal-01.png';let count=0;const timer=setInterval(()=>{
       if(!img.isConnected){clearInterval(timer);return}
       // Classroom audio owns the mouth frames while Cal is speaking.
       if(img.dataset.v6414Talking==='1')return;
       count=(count+1)%24;
       img.src=count===8?'v64-cal-02.png':'v64-cal-01.png';
     },850);
   }else{
     // Use Jack's own existing idle sprite routine, with the *actual frame aspect ratio*.
     const C=window.WMCompanions;if(C?.setImage)C.setImage(img,'jack_angel');
     const sheet=new Image();sheet.onload=()=>{
       if(!img.isConnected)return;
       const ratio=(sheet.naturalWidth/4)/(sheet.naturalHeight/2);
       if(!Number.isFinite(ratio)||ratio<=0)return;
       const fit=()=>{if(!img.isConnected)return;
         const rect=slot.getBoundingClientRect();if(!rect.width||!rect.height)return;
         const height=Math.min(rect.height,rect.width/ratio),width=height*ratio;
         img.style.setProperty('width',width+'px','important');img.style.setProperty('height',height+'px','important');
         img.style.setProperty('margin-left','0','important');img.style.setProperty('object-fit','contain','important');
       };fit();if(window.ResizeObserver)new ResizeObserver(fit).observe(slot);
     };sheet.src='jack-angel-frames.png?v=63.10';
   }
   return slot;
 }
 let current='';
 function syncActors(){const row=document.querySelector('.wm-learning');if(!row)return;
   row.classList.add('v6410-actors');const first=firstFromSave();
   if(current===first&&row.querySelector('.v6410-left')&&row.querySelector('.v6410-right'))return;
   current=first;row.querySelectorAll('.v6410-actor').forEach(n=>n.remove());
   const left=makeLeft(first),right=document.createElement('div');right.className='v6410-actor v6410-right v6410-egg';
   const egg=document.createElement('img');egg.src='v49-magic-golden-egg.gif';egg.alt='Magic Golden Egg';egg.draggable=false;right.append(egg);
   // The original yellow vocabulary card stays in the same central position.
   row.prepend(left);row.append(right);
 }
 function update(){syncScene();syncActors()}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',update,{once:true});else update();
 window.addEventListener('pageshow',update);window.addEventListener('storage',e=>{if(!e.key||e.key===KEY){sceneName='';update()}});
 // Original lesson UI is mounted by wm-game-app.js; this observer is a readiness hook,
 // not a replacement for the original rendering or learning logic.
 if(!document.querySelector('.wm-learning')){
   const observer=new MutationObserver(()=>{if(document.querySelector('.wm-learning')){observer.disconnect();update()}});
   observer.observe(document.getElementById('root')||document.body,{childList:true,subtree:true});
 }
})();
