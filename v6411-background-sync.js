/* V64.11 — background sync ONLY. No actor, lesson, keyboard, frame, or navigation modifications. */
(()=>{'use strict';
  const SETTINGS='wm-companions-v39';
  const SHARED='wm-home-visible-scene-v6411';
  const allowed=/^v41-stairs-(forest|coast|blossom)\.png$/;
  let lastFile='';
  function selected(){
    let scene='forest-stairs';
    try{const saved=JSON.parse(localStorage.getItem(SETTINGS)||'{}');scene=String(saved?.scene||scene)}catch{}
    return scene;
  }
  function fallback(scene){return 'v41-stairs-'+(scene.startsWith('city')?'blossom':scene.startsWith('coast')?'coast':'forest')+'.png';}
  function fromStyle(value){
    if(!value||value==='none')return '';
    const found=value.match(/v41-stairs-(forest|coast|blossom)\.png/);
    return found?'v41-stairs-'+found[1]+'.png':'';
  }
  function captureHome(){
    const world=document.querySelector('#home-stage .v48-world');
    if(!world)return;
    const scene=selected();
    // The homepage v47-home.js paints the REAL visible background on .v48-world.
    // Read that computed image, rather than guessing from an old classroom default.
    const file=fromStyle(getComputedStyle(world).backgroundImage)||fallback(scene);
    if(!allowed.test(file))return;
    try{localStorage.setItem(SHARED,JSON.stringify({scene,file}))}catch{}
  }
  function installHome(){
    const world=document.querySelector('#home-stage .v48-world');
    if(!world)return false;
    captureHome();
    new MutationObserver(captureHome).observe(world,{attributes:true,attributeFilter:['style','class']});
    window.addEventListener('wm-companions-change',()=>requestAnimationFrame(captureHome));
    window.addEventListener('pageshow',captureHome);
    return true;
  }
  function classroomImage(){
    const scene=selected();let file='';
    try{const saved=JSON.parse(localStorage.getItem(SHARED)||'null');if(saved?.scene===scene&&allowed.test(saved?.file))file=saved.file}catch{}
    return file||fallback(scene);
  }
  function paintClassroom(){
    const screen=document.querySelector('#root .wm-screen');
    if(!screen)return;
    const file=classroomImage();
    if(file===lastFile&&screen.classList.contains('v6411-scene'))return;
    lastFile=file;
    const value='url("'+file+'?v=64.11")';
    screen.classList.add('v6411-scene');
    // Remove the old v6410 variable as an alternate source; one homepage picture only.
    screen.style.setProperty('--v6410-scene-image',value);
    screen.style.setProperty('background-image',value,'important');
    screen.style.setProperty('background-position','center top','important');
    screen.style.setProperty('background-size','100% 100%','important');
    screen.style.setProperty('background-repeat','no-repeat','important');
  }
  function installClassroom(){
    if(!document.getElementById('root'))return;
    const style=document.createElement('style');style.id='v6411-background-rule';
    style.textContent=`
      html:has(.v6411-scene), body:has(.v6411-scene){background-color:#f2d8e9!important;}
      .wm-screen.v6411-scene{background-color:#f2d8e9!important;background-position:center top!important;background-size:100% 100%!important;background-repeat:no-repeat!important;}
      .wm-screen.v6411-scene::before{content:none!important;display:none!important;background:none!important;}
    `;
    document.head.append(style);
    paintClassroom();
    const root=document.getElementById('root');
    new MutationObserver(()=>{if(root.querySelector('.wm-screen'))paintClassroom()}).observe(root,{childList:true,subtree:false});
    window.addEventListener('pageshow',()=>{lastFile='';paintClassroom()});
    window.addEventListener('focus',()=>{lastFile='';paintClassroom()});
    window.addEventListener('storage',e=>{if(!e.key||e.key===SETTINGS||e.key===SHARED){lastFile='';paintClassroom()}});
  }
  function init(){
    if(document.getElementById('home-stage')){
      if(!installHome()){
        const obs=new MutationObserver(()=>{if(installHome())obs.disconnect()});
        obs.observe(document.getElementById('home-stage'),{childList:true,subtree:true});
      }
    }
    installClassroom();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
