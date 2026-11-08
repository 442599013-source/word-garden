/* V47 home: V43 runtime retained, HTML/CSS presentation is rebuilt as components. */
(()=>{'use strict';const stage=document.getElementById('home-stage');if(!stage||stage.dataset.v47)return;stage.dataset.v47='1';
const $=id=>document.getElementById(id),C=window.WMCompanions,S=window.WM42;
const home=$('home-view'),header=stage.querySelector('.journey-title'),panel=$('panel-view');
const scroll=document.createElement('div'),world=document.createElement('div');
// A fresh installation opens with the Work-approved coast scene; returning users keep their own scene.
try{if(!localStorage.getItem('wm-companions-v39')&&C){const initial=C.read();initial.scene='coast-stairs';C.save(initial);}}catch{}scroll.className='home-scroll';world.className='home-world';scroll.append(world);stage.insertBefore(scroll,stage.firstChild);world.append(header,home,panel);
const title=document.createElement('span');title.className='v47-en';title.innerHTML='My English<br>Growth Journey';header.insertBefore(title,header.firstChild);
function label(button,en,zh){const s=document.createElement('span');s.className='tool-label';s.innerHTML=en+'<small>'+zh+'</small>';button?.append(s)}
label($('scenes-button'),'Change<br>Scene','切换场景');label($('characters-button'),'My Baby','选择宝宝');
const steps=home.querySelector('.milestones');for(const [cls,en]of [['primary','Primary School'],['kindergarten','Kindergarten']]){const a=steps.querySelector('.'+cls);const s=document.createElement('span');s.className='v47-stage-en';s.textContent=en;a?.insertBefore(s,a.firstChild)}
const junior=document.createElement('a');junior.className='junior';junior.href='word-match.html?v=47.1';junior.innerHTML='<span class="v47-stage-en">Junior School</span><small>初中</small>';steps.prepend(junior);
function lockedSpan(){const s=document.createElement('span');s.className='v47-lock';s.setAttribute('aria-hidden','true');return s}
const cat=$('primary-cat');cat.querySelector('.pet-lock')?.remove();cat.append(lockedSpan());
function newPet(cls,desc,src){const b=document.createElement('button');b.type='button';b.className=cls;b.setAttribute('aria-label',desc);const img=document.createElement('img');img.alt=desc;if(src)img.src=src;b.append(img,lockedSpan());home.append(b);return b}
const bird=newPet('home-phoenix','Phoenix 小凤凰');const koala=newPet('home-koala','Koala 魔法考拉','v47-koala-awake.png');C?.setImage?.(bird.querySelector('img'),'phoenix');
const egg=document.createElement('div');egg.className='home-gold-egg';egg.innerHTML='<img alt="Golden Egg 金蛋" src="v42-08_gold_egg.png">';home.append(egg);
const stats=document.createElement('div');stats.className='v47-stats';stats.innerHTML='<div><b class="v47-stat-main" id="v47-level-en">Level 0 Angel Baby</b><small id="v47-level-zh">0级天使宝宝</small></div><div><small>Baby Score<br>宝宝分数</small><span class="v47-value" id="v47-score">0.0</span></div><div><small>Ability<br>能力</small><span class="v47-value" id="v47-ability">待评</span></div>';home.append(stats);
const nav=stage.querySelector('.bottom-nav');[...nav.children].forEach((el,i)=>{const en=['Home','Growth','Pets','Me'][i],zh=['首页','成长','宠物','我的'][i],icon=['⌂','♧','♧','♙'][i];el.replaceChildren();const a=document.createElement('span');a.className='v47-nav-icon';a.textContent=icon;const b=document.createElement('span');b.className='v47-nav-en';b.textContent=en;const c=document.createElement('span');c.className='v47-nav-zh';c.textContent=zh;el.append(a,b,c)});
const intro=$('intro');const introCopy=document.createElement('div');introCopy.className='intro-static';introCopy.innerHTML='<b>My English Growth Journey</b><span>我的英语成长之旅</span><em>Let’s grow together!</em><span>一起学习，一起长大！</span>';intro.append(introCopy);const cta=document.createElement('a');cta.className='intro-cta';cta.href='word-match.html?v=47.1';cta.innerHTML='Go to Growth<small>去成长</small>';intro.append(cta);
let toastTimer;function toast(m){const n=$('home-toast');n.textContent=m;n.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>n.classList.remove('show'),2400)}
function rank(level,score){if(level<=0)return '待评';const base=level*10,r=score/base;return r<.6?'薄弱':r<1?'欠缺':r===1?'普通':r<1.2?'良好':r<1.5?'优秀':r<1.8?'卓越':'传奇'}
function sync(){const scene=C?.read?.().scene||'coast-stairs',fam=scene.startsWith('city')?'blossom':scene.startsWith('coast')?'coast':'forest';world.style.backgroundImage=`url(v41-stairs-${fam}.png)`;
 let level=S?.completed?.()||0,score=0;try{const d=JSON.parse(localStorage.getItem('wm-wordmatch-v35')||'{}');score=Number(d.total||0)/10;if(!Number.isFinite(score))score=0}catch{}
 $('v47-level-en').textContent='Level '+level+' Angel Baby';$('v47-level-zh').textContent=level+'级天使宝宝';$('v47-score').textContent=score.toFixed(1);$('v47-ability').textContent=rank(level,score);
 const unlock=!!S?.primary?.();cat.classList.toggle('v47-unlocked',unlock);koala.classList.toggle('v47-unlocked',false);bird.classList.toggle('v47-unlocked',unlock);
}
function petAction(id){if(!S?.primary?.()){toast('Unlock at Primary School / 升至小学后解锁');return;}if(id==='koala'){toast('Unlock at Junior School / 升至初中后解锁');return;}const old=C.read();if(!old.slots.includes(id)){old.slots=[old.slots.find(x=>C.catalog.some(c=>c.id===x&&c.kind==='baby'))||'blond_angel',id];C.save(old)}else toast('Together / 已一起出发')}
cat.addEventListener('click',e=>{e.stopImmediatePropagation();petAction('ice_cat')},true);
bird.onclick=()=>petAction('phoenix');koala.onclick=()=>petAction('koala');
window.addEventListener('pageshow',sync);window.addEventListener('storage',sync);window.addEventListener('wm-companions-change',sync);nav.addEventListener('click',()=>{setTimeout(sync,50)},true);
const oldSceneClick=$('scenes-button')?.onclick;if(oldSceneClick)$('scenes-button').addEventListener('click',()=>setTimeout(sync,100));
sync();
})();
