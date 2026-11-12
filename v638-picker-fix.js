/* V63.8: Character picker presentation only. Preserve all game/animation rules. */
(()=>{'use strict';
  const labels={blond_angel:'Cal Angel',brown_angel:'Coco Angel',purple_angel:'Violet Angel',school_girl:'Bella Angel',school_boy:'Leo Angel',jack_angel:'Jack Angel'};
  const C=window.WMCompanions;
  if(C)C.catalog.forEach(c=>{if(labels[c.id])c.name=labels[c.id];});
  const style=document.createElement('style');style.id='v638-picker-style';style.textContent=`
    #picker-content .picker-grid:not(.scenes) button.v638-person{display:flex;flex-direction:column;align-items:center;justify-content:flex-end;min-width:0;min-height:0;overflow:hidden;padding:7px 5px 9px!important;}
    #picker-content .picker-grid:not(.scenes) button.v638-person .v638-portrait{width:100%!important;height:auto!important;aspect-ratio:1 / 1!important;object-fit:contain!important;display:block!important;flex:none;}
    #picker-content .picker-grid:not(.scenes) button.v638-person .v638-jack{width:75%!important;aspect-ratio:543 / 724!important;height:auto!important;background-image:url('jack-angel-frames.png?v=63.7');background-size:400% 200%;background-position:0 0;background-repeat:no-repeat;flex:none;}
    #picker-content .picker-grid:not(.scenes) button.v638-person>.v638-name{display:block;position:static!important;transform:none!important;margin-top:7px;line-height:1.2;white-space:nowrap;font-size:3.1cqw;text-align:center;order:2;}
  `;document.head.append(style);
  function repair(){
    const root=document.getElementById('picker-content');if(!root)return;
    const grid=root.querySelector('.picker-grid:not(.scenes)');if(!grid)return;
    for(const b of [...grid.children]){
      const img=b.querySelector('img');
      if(!img)continue;
      const id=img.dataset.character || img.dataset.idleCharacter || img.dataset.media?.replace(/^v42-/,'') || '';
      const alt=img.alt||'';
      const name=b.querySelector('span');
      const text=name?.textContent||alt;
      const key=Object.keys(labels).find(k=>id===k || text===labels[k] || text===labels[k].replace(/ Angel$/,'') || alt===labels[k] || (k==='jack_angel' && /^Jack(?:\b|$)/i.test(text)));
      if(!key)continue;
      if(b.dataset.v638Ready==='1')continue;
      b.dataset.v638Ready='1'; b.classList.add('v638-person');
      if(key==='jack_angel'){
        const preview=document.createElement('img');preview.src='jack-original-01.png?v=64.32';preview.style.setProperty('background','none','important');preview.style.setProperty('object-fit','contain','important');preview.className='v638-jack v638-portrait';preview.setAttribute('aria-hidden','true');img.replaceWith(preview);
      }else if(key==='blond_angel'||key==='brown_angel'){
        // Create a fresh image to prevent the old asynchronous sprite callback from overwriting it.
        const fresh=document.createElement('img');fresh.className='v638-portrait';fresh.src=`v39-${key}-idle.webp`;fresh.alt=labels[key];fresh.decoding='async';fresh.loading='lazy';img.replaceWith(fresh);
      }else{img.classList.add('v638-portrait');img.style.visibility='visible';}
      if(name){name.classList.add('v638-name');name.textContent=labels[key];}
      b.setAttribute('aria-label',labels[key]);
    }
    for(const button of root.querySelectorAll('button')){
      if(/Remove second companion|移除第二位/.test(button.textContent||''))button.remove();
    }
  }
  function boot(){
    const root=document.getElementById('picker-content');if(!root)return;
    const mo=new MutationObserver(repair);mo.observe(root,{childList:true,subtree:true});repair();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
