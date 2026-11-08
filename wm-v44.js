/* V44 additive update. Loads after V43 files, preserving the original game logic. */
(()=>{'use strict';
const $=id=>document.getElementById(id),stage=$('home-stage');
if(!stage)return;
const nav=stage.querySelector('.bottom-nav'),petsNav=nav?.querySelector('[data-tab="pets"]');
const panel=$('panel-view'),view=$('home-view');
function toast(message){const el=$('home-toast');if(!el)return;el.textContent=message;el.classList.add('show');clearTimeout(window.__v44Toast);window.__v44Toast=setTimeout(()=>el.classList.remove('show'),3000);}
function lockedMsg(){toast('Unlock at Primary School / 升至小学后解锁');}
function make(tag,className,text){const n=document.createElement(tag);if(className)n.className=className;if(text)n.textContent=text;return n;}
function more(){
  $('intro')?.querySelector('video')?.pause();if($('intro'))$('intro').hidden=true;
  view.hidden=true;panel.hidden=false;panel.className='panel-view v44-more-panel';stage.dataset.tab='more';
  nav.querySelectorAll('[data-tab]').forEach(el=>el.toggleAttribute('aria-current',el.dataset.tab==='more'));
  panel.replaceChildren();
  const back=make('button','panel-back','← Home / 返回首页');back.onclick=()=>nav.querySelector('[data-tab="home"]')?.click();panel.append(back);
  panel.append(make('h1','','More / 更多'),make('p','panel-subtitle','更多选项 · 原版首页'));
  const old=make('a','v44-more-link','Original Home / 原版首页');old.href='legacy-home.html';panel.append(old);
  const options=[['Change Scene / 切换场景','scenes-button'],['Choose Baby / 选择宝宝','characters-button'],['Wardrobe / 我的衣柜','wardrobe-button']];
  options.forEach(([name,id])=>{const b=make('button','',name);b.onclick=()=>$(id)?.click();panel.append(b);});
  const listen=make('a','menu-link','Listening / 听力练习');listen.href='listening.html';panel.append(listen);
  panel.append(make('small','','V44'));
}
if(petsNav){petsNav.dataset.tab='more';petsNav.setAttribute('aria-label','More 更多');petsNav.onclick=more;}
// Replace the original plain emoji with a light decorative lock.
const cat=$('primary-cat');if(cat){const old=cat.querySelector('.pet-lock');if(old){old.textContent='';old.setAttribute('aria-hidden','true');}cat.onclick=lockedMsg;}
// Phoenix remains on the home scene, with a decorative locked badge.
const phoenix=make('button','home-phoenix');phoenix.id='home-phoenix';phoenix.type='button';phoenix.setAttribute('aria-label','Phoenix 小凤凰：升至小学后解锁');
const lock=make('span','pet-lock');lock.setAttribute('aria-hidden','true');const image=make('img');image.alt='Phoenix 小凤凰';phoenix.append(lock,image);
const catHost=cat?.parentNode;if(catHost){catHost.insertBefore(phoenix,cat);window.WMCompanions?.setImage(image,'phoenix');phoenix.onclick=lockedMsg;}
function activatePet(id){
 const S=window.WM42,C=window.WMCompanions;
 if(!S?.primary?.())return lockedMsg();
 if(!S.isPetUnlocked?.(id)){
   S.unlockPet?.(id);refresh();toast('Unlocked / 已解锁，点击一起出发');return;
 }
 const state=C?.read?.();if(!state)return;
 const baby=state.slots.find(code=>C.catalog.some(it=>it.id===code&&it.kind==='baby'))||'blond_angel';
 state.slots=[baby,id];C.save(state);refresh();toast('Go Together / 已一起出发');
}
function refresh(){const S=window.WM42;if(!S?.isPetUnlocked)return;
 phoenix.classList.toggle('unlocked',!!S.isPetUnlocked('phoenix'));
 cat?.classList.toggle('unlocked',!!S.isPetUnlocked('ice_cat'));
 phoenix.onclick=()=>activatePet('phoenix');if(cat)cat.onclick=()=>activatePet('ice_cat');
}

refresh();window.addEventListener('pageshow',refresh);window.addEventListener('wm-companions-change',refresh);
// Clicking the locked second companion now gives a specific learning milestone.
// No monkey-patching: observe only new picker buttons, preserving the original character selector.
const picker=$('picker');if(picker){const observer=new MutationObserver(()=>{picker.querySelectorAll('.slot-picker button').forEach(b=>{if(b.textContent.includes('Second')&&b.textContent.includes('🔒'))b.title='Unlock at Primary School / 升至小学后解锁';});});observer.observe(picker,{childList:true,subtree:true});}
})();
