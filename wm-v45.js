/* V45-V43BASE: one isolated script loaded AFTER original V43 modules. No edits to V43 level engine. */
(()=>{'use strict';
const $=id=>document.getElementById(id), stage=$('home-stage');
if(!stage||stage.dataset.v45Ready)return;
stage.dataset.v45Ready='1';
const nav=stage.querySelector('.bottom-nav'),petsTab=nav?.querySelector('[data-tab="pets"]'),panel=$('panel-view'),home=$('home-view');
const C=window.WMCompanions,S=window.WM42;
let tm=0;
function toast(msg){const el=$('home-toast');if(!el)return;el.textContent=msg;el.classList.add('show');clearTimeout(tm);tm=setTimeout(()=>el.classList.remove('show'),2600)}
function mk(tag,cls,txt){const el=document.createElement(tag);if(cls)el.className=cls;if(txt)el.textContent=txt;return el}
function returnHome(){home.hidden=false;panel.hidden=true;stage.dataset.tab='home';nav?.querySelectorAll('[data-tab]').forEach(b=>b.toggleAttribute('aria-current',b.dataset.tab==='home'))}
function openMore(){
 $('intro').hidden=true; $('intro-video')?.pause();
 home.hidden=true; panel.hidden=false;stage.dataset.tab='more';panel.className='panel-view v45-more-panel';
 nav?.querySelectorAll('[data-tab]').forEach(b=>b.toggleAttribute('aria-current',b.dataset.tab==='more'));panel.replaceChildren();
 const back=mk('button','panel-back','← Home / 返回首页');back.onclick=returnHome;panel.append(back,mk('h2','','More / 更多'));
 const old=mk('a','','Original Home / 原版首页');old.href='legacy-home.html';panel.append(old);
 for(const [txt,id] of [['Change Scene / 切换场景','scenes-button'],['Choose Baby / 选择宝宝','characters-button'],['Wardrobe / 我的衣柜','wardrobe-button']]){
 const b=mk('button','',txt);b.onclick=()=>$(id)?.click();panel.append(b)}
 const listen=mk('a','','Listening / 听力练习');listen.href='listening.html';panel.append(listen);
}
if(petsTab){petsTab.dataset.tab='more';petsTab.setAttribute('aria-label','More 更多');
 // Stop the V43 pets handler in capture and dispatch only new More behavior.
 petsTab.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();openMore()},true)}
// Keep original V43 V42-home.js navigation methods, including scenes/characters, intact.
const originalHome=nav?.querySelector('[data-tab="home"]');
originalHome?.addEventListener('click',()=>{home.hidden=false;panel.hidden=true;stage.dataset.tab='home'},true);
const locked=()=>toast('Unlock at Primary School / 升至小学后解锁');
const cat=$('primary-cat');
if(cat){let lock=cat.querySelector('.pet-lock');if(lock){lock.textContent='';lock.setAttribute('aria-hidden','true')}}
function insertPet(id,cls,name){if(!cat||!C)return null;const b=mk('button',cls);b.id='home-'+id;b.type='button';b.setAttribute('aria-label',name);
 const lock=mk('span','pet-lock'),img=mk('img');lock.setAttribute('aria-hidden','true');img.alt=name;b.append(lock,img);cat.parentNode.insertBefore(b,cat);C.setImage(img,id);return b}
const phoenix=insertPet('phoenix','home-phoenix','Phoenix 小凤凰'),koala=insertPet('koala','home-koala','Koala 考拉');
function petClick(id){if(!S?.primary?.())return locked();
 if(!S?.isPetUnlocked?.(id)){S?.unlockPet?.(id);refreshPets();return toast('Unlocked / 已解锁')}
 const state=C?.read?.();if(!state)return;const first=state.slots.find(x=>C.catalog.some(c=>c.id===x&&c.kind==='baby'))||'blond_angel';state.slots=[first,id];C.save(state);toast('Go Together / 已一起出发')}
function refreshPets(){for(const [button,id] of [[phoenix,'phoenix'],[cat,'ice_cat']]){
 if(!button)continue;button.classList.toggle('unlocked',!!S?.isPetUnlocked?.(id));
 button.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();petClick(id)},true)}
 if(koala)koala.onclick=()=>toast('Unlock at Junior High School / 升至初中后解锁')}
// V43's original render sets ice-cat image; it remains the source of truth for character assets.
refreshPets();window.addEventListener('pageshow',()=>{for(const [b,id] of [[phoenix,'phoenix'],[cat,'ice_cat']])b?.classList.toggle('unlocked',!!S?.isPetUnlocked?.(id))});
const picker=$('picker');if(picker){picker.addEventListener('click',e=>{
 const b=e.target.closest('.slot-picker button');if(b&&/Second|第二位/.test(b.textContent)&&!S?.primary?.()){
 e.preventDefault();e.stopImmediatePropagation();locked()}
 },true)}
if(['more','pets'].includes(new URLSearchParams(location.search).get('tab')))openMore();
})();
