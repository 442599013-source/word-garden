/* V46 Home: extend original V43 state without touching its word bank or game engine. */
(()=>{'use strict';
const stage=document.getElementById('home-stage');if(!stage||stage.dataset.v46Ready)return;stage.dataset.v46Ready='yes';
const $=id=>document.getElementById(id),home=$('home-view'),panel=$('panel-view'),nav=stage.querySelector('.bottom-nav');
const C=window.WMCompanions,S=window.WM42;
const make=(tag,cls,text)=>{let n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n};
let toastTimer;function toast(t){const e=$('home-toast');if(!e)return;e.textContent=t;e.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>e.classList.remove('show'),2700)}
// V43 applied position:fixed/overflow:hidden to html/body and stage; create a true inner scrollport.
const title=stage.querySelector('.journey-title'),scroll=make('div');scroll.id='home-scroll';stage.insertBefore(scroll,title);scroll.append(title,home);
function syncScroll(){scroll.hidden=home.hidden;if(!home.hidden)updateDashboard()}
const tabHome=nav?.querySelector('[data-tab="home"]');tabHome?.addEventListener('click',()=>{scroll.hidden=false;scroll.scrollTop=0;requestAnimationFrame(updateDashboard)});
const formerPets=nav?.querySelector('[data-tab="pets"]');
function openMore(){const video=$('intro-video');video?.pause();$('intro').hidden=true;home.hidden=true;scroll.hidden=true;panel.hidden=false;panel.className='panel-view v46-more-panel';stage.dataset.tab='more';nav?.querySelectorAll('[data-tab]').forEach(n=>n.toggleAttribute('aria-current',n.dataset.tab==='more'));panel.replaceChildren();
let back=make('button','panel-back','← Home / 返回首页');back.onclick=()=>tabHome?.click();panel.append(back,make('h2','','More / 更多'));
for(const [name,id] of [['Change Scene / 切换场景','scenes-button'],['Choose Baby / 选择宝宝','characters-button'],['Wardrobe / 我的衣柜','wardrobe-button']]){let b=make('button','',name);b.onclick=()=>$(id)?.click();panel.append(b)}
for(const [name,url] of [['Original Home / 原版首页','legacy-home.html'],['Listening / 听力练习','listening.html']]){let a=make('a','',name);a.href=url;panel.append(a)}
}
if(formerPets){formerPets.dataset.tab='more';formerPets.setAttribute('aria-label','More 更多');formerPets.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();openMore()},true)}
const cat=$('primary-cat');if(cat){const l=cat.querySelector('.pet-lock');if(l){l.textContent='';l.setAttribute('aria-hidden','true')}}
function addPet(id,cls,name){if(!cat||!C)return null;const b=make('button',cls);b.type='button';b.id='home-'+id;b.setAttribute('aria-label',name);const lock=make('span','pet-lock'),img=make('img');img.alt=name;lock.setAttribute('aria-hidden','true');b.append(lock,img);cat.parentNode.insertBefore(b,cat);C.setImage(img,id);return b}
const phoenix=addPet('phoenix','home-phoenix','Phoenix 小凤凰'),koala=addPet('koala','home-koala','Koala 考拉');
function petClick(id){if(!S?.primary?.())return toast('Unlock at Primary School / 升至小学后解锁');if(!S?.isPetUnlocked?.(id)){S?.unlockPet?.(id);refreshPets();return toast('Unlocked / 已解锁')}const s=C?.read?.();if(!s)return;const baby=s.slots.find(id=>C.catalog.some(c=>c.id===id&&c.kind==='baby'))||'blond_angel';s.slots=[baby,id];C.save(s);toast('Go Together / 已一起出发')}
function refreshPets(){for(const [button,id] of [[phoenix,'phoenix'],[cat,'ice_cat']])button?.classList.toggle('unlocked',!!S?.isPetUnlocked?.(id))}
if(phoenix)phoenix.onclick=()=>petClick('phoenix');if(cat)cat.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();petClick('ice_cat')},true);
if(koala)koala.onclick=()=>toast('Unlock at Junior High School / 升至初中后解锁');
refreshPets();window.addEventListener('wm-companions-change',refreshPets);
const picker=$('picker');picker?.addEventListener('click',e=>{let b=e.target.closest('.slot-picker button');if(b&&/Second|第二位/.test(b.textContent)&&!S?.primary?.()){e.preventDefault();e.stopImmediatePropagation();toast('Unlock at Primary School / 升至小学后解锁')}},true);
// Two independent values: completed stage (V43) and actual game points (V35, stored in tenths).
const dash=make('section','angel-dashboard');dash.setAttribute('aria-label','Angel Level Baby Score Ability 天使等级宝宝分数能力评级');home.append(dash);
function scoreData(){let raw=0;try{const s=JSON.parse(localStorage.getItem('wm-wordmatch-v35')||'{}');raw=Number.isFinite(s.total)?s.total:0}catch{}return raw/10}
function grade(level,points){if(level<=0)return '待评估';const p=points/(level*10);return p<.6?'薄弱':p<1?'欠缺':p===1?'普通':p<1.2?'良好':p<1.5?'优秀':p<1.8?'卓越':'传奇'}
let busy=false;function updateDashboard(){if(busy)return;busy=true;try{const level=Number(S?.completed?.()||0),points=scoreData(),rank=grade(level,points);const badge=home.querySelector('.level-badge');if(badge){const b=badge.querySelector('b'),small=badge.querySelector('small');if(b&&b.textContent!=='Level '+level)b.textContent='Level '+level;if(small&&small.textContent!==level+'级天使宝宝')small.textContent=level+'级天使宝宝'}
const scoreText=Number.isInteger(points)?String(points):points.toFixed(1),data=[['Angel Level / 天使等级',level+'级天使宝宝'],['Baby Score / 宝宝分数',scoreText+'分'],['Ability / 能力',rank]];
if(dash.dataset.snapshot!==JSON.stringify(data)){dash.replaceChildren();for(const [label,value] of data){const info=label.startsWith('Baby Score')||label.startsWith('Ability');const box=make(info?'button':'div','angel-dash-item'+(label.startsWith('Ability')?' rank':''));if(info){box.type='button';box.onclick=()=>toast(label.startsWith('Baby Score')?'Actual cumulative game points / 游戏累计真实积分：'+scoreText+'分':'能力基准：'+level+'级 × 10 = '+(level*10)+'分；当前评级：'+rank)}box.append(make('small','',label),make('strong','',value));dash.append(box)}dash.dataset.snapshot=JSON.stringify(data)}
}finally{busy=false}}
new MutationObserver(()=>{if(!home.hidden)updateDashboard()}).observe(home.querySelector('.level-badge'),{childList:true,subtree:true});
window.addEventListener('pageshow',()=>{syncScroll();refreshPets()});window.addEventListener('focus',updateDashboard);window.addEventListener('storage',updateDashboard);document.addEventListener('visibilitychange',()=>{if(!document.hidden)updateDashboard()});
if(['more','pets'].includes(new URLSearchParams(location.search).get('tab')))openMore();else syncScroll();
})();
