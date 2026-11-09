/* V62.2 – Home angel abilities. Does not alter original angel, navigation or animations. */
(() => {
  'use strict';
  const DURATION_MS = 10000;
  let dismissTimer = null;
  let overlay = null;
  let oldFocus = null;

  function ensureOverlay() {
    if (overlay) return overlay;
    const style = document.createElement('style');
    style.textContent = `
      .v622-angel-overlay[hidden] { display:none !important; }
      .v622-angel-overlay {
        position:fixed; inset:0; z-index:2147483000;
        display:flex; align-items:center; justify-content:center;
        padding: max(12px, env(safe-area-inset-top)) 10px max(12px, env(safe-area-inset-bottom));
        background:rgba(26,9,48,.62); box-sizing:border-box;
        overflow:hidden; touch-action:pan-y pinch-zoom;
      }
      .v622-angel-panel { position:relative; max-width:min(96vw,540px); max-height:96%;
        display:flex; align-items:center; justify-content:center; }
      .v622-angel-panel img { display:block; max-width:100%; max-height:calc(100dvh - 36px);
        width:auto; height:auto; object-fit:contain; border-radius:14px; }
      .v622-close { position:absolute; right:0; top:0; width:14%; height:10%;
        background:transparent; border:0; padding:0; cursor:pointer; touch-action:manipulation; }
      .v622-close:focus-visible { outline:3px solid #fff; outline-offset:-3px; border-radius:50%; }
    `;
    document.head.appendChild(style);
    overlay = document.createElement('div');
    overlay.className='v622-angel-overlay';
    overlay.hidden=true;
    overlay.setAttribute('role','dialog');
    overlay.setAttribute('aria-modal','true');
    overlay.setAttribute('aria-label','Angel Abilities 天使能力');
    const panel=document.createElement('div');panel.className='v622-angel-panel';
    const img=document.createElement('img');
    img.src='angel-abilities.jpg';
    img.alt='Angel Abilities 天使能力：六项能力介绍';
    const close=document.createElement('button');
    close.type='button';close.className='v622-close';
    close.setAttribute('aria-label','关闭天使能力说明');
    close.addEventListener('click',hide);
    panel.append(img,close);overlay.append(panel);
    overlay.addEventListener('click',e=>{if(e.target===overlay)hide();});
    document.body.appendChild(overlay);
    return overlay;
  }
  function hide(){
    if(dismissTimer!==null){clearTimeout(dismissTimer);dismissTimer=null;}
    if(overlay)overlay.hidden=true;
    if(oldFocus?.isConnected)oldFocus.focus({preventScroll:true});
    oldFocus=null;
  }
  function show(){
    ensureOverlay();if(dismissTimer!==null)clearTimeout(dismissTimer);
    oldFocus=document.activeElement;
    overlay.hidden=false;
    overlay.querySelector('.v622-close').focus({preventScroll:true});
    dismissTimer=setTimeout(hide,DURATION_MS);
  }
  document.addEventListener('click',e=>{
    const angel=e.target.closest?.('#home-view #home-companions .wm-companion');
    if(!angel || document.getElementById('home-view')?.hidden) return;
    const id=angel.dataset.character;
    const catalog=window.WMCompanions?.catalog;
    if(catalog && catalog.find(c=>c.id===id)?.kind!=='baby')return;
    show();
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&overlay&&!overlay.hidden)hide();});
  window.addEventListener('pagehide',hide);
})();
