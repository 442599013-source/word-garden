/* V44.3: additive, single entry point after the original V43 scripts. */
(()=>{'use strict';
const $=id=>document.getElementById(id),stage=$('home-stage');
if(!stage||stage.dataset.v443Ready)return;
stage.dataset.v443Ready='1';
const nav=stage.querySelector('.bottom-nav'),formerPets=nav?.querySelector('[data-tab="pets"]'),panel=$('panel-view'),view=$('home-view');
const C=window.WMCompanions,S=window.WM42;
let toastTimer;
function toast(message){const el=$('home-toast');if(!el)return;el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2700);}
const locked=()=>toast('Unlock at Primary School / 升至小学后解锁');
function make(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n;}
function closeIntro(){const intro=$('intro'),v=$('intro-video');if(v)v.pause();if(intro)intro.hidden=true;}
function returnHome(){nav?.querySelector('[data-tab="home"]')?.click();}
function more(){closeIntro();view.hidden=true;panel.hidden=false;stage.dataset.tab='more';panel.className='panel-view v443-more-panel';nav?.querySelectorAll('[data-tab]').forEach(n=>n.toggleAttribute('aria-current',n.dataset.tab==='more'));panel.replaceChildren();
 const back=make('button','panel-back','← Home / 返回首页');back.type='button';back.onclick=returnHome;panel.append(back,make('h1','','More / 更多'),make('p','panel-subtitle','更多选项'));
 const old=make('a','v443-more-link','Original Home / 原版首页');old.href='legacy-home.html';panel.append(old);
 for(const [label,id] of [['Change Scene / 切换场景','scenes-button'],['Choose Baby / 选择宝宝','characters-button']]){const b=make('button','',label);b.type='button';b.onclick=()=>$(id)?.click();panel.append(b);}
 const listen=make('a','menu-link','Listening / 听力练习');listen.href='listening.html';panel.append(listen);
 panel.append(make('small','','V44.3'));
}
if(formerPets){formerPets.dataset.tab='more';formerPets.setAttribute('aria-label','More 更多');formerPets.onclick=more;
 // V43 installed a legacy onclick and reuses the same tab; replace that dispatch reliably.
 formerPets.addEventListener('click',e=>{e.stopImmediatePropagation();more();},true);
}
// Render home pet images from the existing companion catalog, without changing the original baby slots.
const cat=$('primary-cat');
if(cat){const lk=cat.querySelector('.pet-lock');if(lk){lk.textContent='';lk.setAttribute('aria-hidden','true');}}
function petButton(id,cls,label){if(!cat||!C)return null;const b=make('button',cls);b.type='button';b.id='home-'+id;b.setAttribute('aria-label',label);const l=make('span','pet-lock'),img=make('img');l.setAttribute('aria-hidden','true');img.alt=label;b.append(l,img);cat.parentNode.insertBefore(b,cat);C.setImage(img,id);return b;}
const phoenix=petButton('phoenix','home-phoenix','Phoenix 小凤凰');
const koala=petButton('koala','home-koala','Koala 考拉');
function petClick(id){if(!S?.primary?.())return locked();if(!S.isPetUnlocked(id)){S.unlockPet(id);refreshPets();return toast('Unlocked / 已解锁，点击一起出发');}
 const state=C?.read?.();if(!state)return;const baby=state.slots.find(x=>C.catalog.some(p=>p.id===x&&p.kind==='baby'))||'blond_angel';state.slots=[baby,id];C.save(state);toast('Go Together / 已一起出发');}
function refreshPets(){for(const [b,id] of [[phoenix,'phoenix'],[cat,'ice_cat']]){if(!b)continue;b.classList.toggle('unlocked',!!S?.isPetUnlocked?.(id));b.onclick=()=>petClick(id);}if(koala){koala.onclick=()=>toast('Unlock at Junior High School / 升至初中后解锁');}}
refreshPets();window.addEventListener('pageshow',refreshPets);window.addEventListener('wm-companions-change',refreshPets);
// Locked second baby: replace the V43 action rather than only setting a tooltip.
const picker=$('picker');if(picker){picker.addEventListener('click',event=>{const b=event.target.closest('.slot-picker button');if(b?.textContent.includes('Second')&&!S?.primary?.()){event.preventDefault();event.stopImmediatePropagation();locked();}},true);
 const observer=new MutationObserver(()=>{picker.querySelectorAll('.slot-picker button').forEach(b=>{if(b.textContent.includes('Second')&&!S?.primary?.()){b.title='Unlock at Primary School / 升至小学后解锁';b.setAttribute('aria-label','Second / 第二位宝宝，升至小学后解锁');}});});observer.observe(picker,{childList:true,subtree:true});}
// Legacy links to Pets become More; the other panels remain untouched.
if(['more','pets'].includes(new URLSearchParams(location.search).get('tab')))more();
})();
