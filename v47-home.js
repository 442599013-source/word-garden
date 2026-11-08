/* V48 homepage only. V43 provides original game, progress, pet behaviour and intro. */
(()=>{'use strict';
  const stage=document.getElementById('home-stage');
  if(!stage||stage.dataset.v48Ready)return;
  stage.dataset.v48Ready='true';
  const $=id=>document.getElementById(id);
  const C=window.WMCompanions, S=window.WM42;
  // Show the same blinking koala on the homepage and inside the V43 Pets view.
  if(C&&!C.__v49Koala){const originalSetImage=C.setImage.bind(C);
    C.setImage=function(img,id,...rest){if(id==='koala'&&img){img.src='v49-koala-blink.gif';img.style.visibility='';return;}
      return originalSetImage(img,id,...rest);};C.__v49Koala=true;}

  const home=$('home-view'),header=stage.querySelector('.journey-title'),panel=$('panel-view'),nav=stage.querySelector('.bottom-nav');
  if(!home||!header||!panel||!nav)return;
  const scroll=document.createElement('div');scroll.className='v48-scroll';
  const world=document.createElement('div');world.className='v48-world';
  scroll.append(world);stage.insertBefore(scroll,stage.firstChild);
  world.append(header,home,panel);

  // Keep V43's original title image untouched in the repository; render the Work preview's white lettering in code.
  header.querySelector('img')?.setAttribute('aria-hidden','true');
  const title=document.createElement('div');title.className='v48-title';
  title.innerHTML='<span>My English</span><span>Growth Journey</span>';
  header.insertBefore(title,header.firstChild);

  const icon={
    scene:'<rect x="5" y="5" width="30" height="30" rx="5"/><circle cx="14" cy="14" r="3"/><path d="M7 31l10-11 7 7 5-6 5 10"/>',
    baby:'<circle cx="20" cy="13" r="6"/><path d="M8 34c0-8 5-13 12-13s12 5 12 13"/><path d="M28 7l1.7-3.2L31.5 7l3.5 1.7-3.5 1.7-1.8 3.2L28 10.4l-3.5-1.7Z"/>',
    home:'<path d="M6 17L20 5l14 12v17H6Z"/><path d="M15 34V23h10v11"/><path d="M20 14c-3-4-8 0-4 4l4 4 4-4c4-4-1-8-4-4Z"/>',
    growth:'<path d="M20 35V18"/><path d="M20 22C10 22 7 17 8 9c8-1 13 3 12 13Z"/><path d="M20 20c0-9 5-13 13-12 0 8-4 13-13 12Z"/>',
    pets:'<circle cx="12" cy="15" r="4"/><circle cx="28" cy="15" r="4"/><path d="M10 16c-4-12 4-16 10-10 6-6 14-2 10 10"/><ellipse cx="20" cy="23" rx="12" ry="11"/><circle cx="16" cy="22" r="1.4" fill="currentColor" stroke="none"/><circle cx="24" cy="22" r="1.4" fill="currentColor" stroke="none"/><ellipse cx="20" cy="27" rx="3" ry="3.4" fill="currentColor" stroke="none"/>',
    me:'<circle cx="20" cy="13" r="7"/><path d="M8 35v-3c0-8 5-13 12-13s12 5 12 13v3"/>'
  };
  const svg=(name)=>'<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+icon[name]+'</svg>';
  function addTool(button,name,en,zh){if(!button)return;button.replaceChildren();button.classList.add('v48-tool');button.innerHTML='<span class="v48-tool-icon">'+svg(name)+'</span><span class="v48-tool-text">'+en+'<small>'+zh+'</small></span>';button.setAttribute('aria-label',en+' '+zh);}
  addTool($('scenes-button'),'scene','Change<br>Scene','切换场景');
  addTool($('characters-button'),'baby','My Baby','选择宝宝');
  if($('wardrobe-button'))$('wardrobe-button').hidden=true;
  const steps=home.querySelector('.milestones');
  const labels=[['primary','Primary School','小学'],['kindergarten','Kindergarten','幼儿园']];
  for(const [kind,en,zh] of labels){const a=steps?.querySelector('.'+kind);if(!a)continue;a.replaceChildren();a.innerHTML='<span class="v48-stage-en">'+en+'</span><small>'+zh+'</small>';}
  let junior=steps?.querySelector('.junior');
  if(!junior&&steps){junior=document.createElement('a');junior.className='junior';junior.href='word-match.html';steps.prepend(junior);}
  if(junior)junior.innerHTML='<span class="v48-stage-en">Junior School</span><small>初中</small>';

  function decorateLock(node){if(!node)return;node.querySelectorAll('.pet-lock,.v47-lock,.v48-lock').forEach(n=>n.remove());let lock=document.createElement('span');lock.className='v48-lock';lock.setAttribute('aria-hidden','true');node.append(lock);}
  const cat=$('primary-cat');decorateLock(cat);
  function pet(cls,id,label,source){const b=document.createElement('button');b.className=cls;b.type='button';b.setAttribute('aria-label',label);const img=document.createElement('img');img.alt=label;img.draggable=false;b.append(img);if(source)img.src=source;else C?.setImage?.(img,id);decorateLock(b);home.append(b);return b;}
  const phoenix=pet('v48-phoenix','phoenix','Phoenix 凤凰');
  const koala=pet('v48-koala','koala','Koala 考拉','v49-koala-blink.gif');
  const egg=document.createElement('div');egg.className='v48-egg';egg.innerHTML='<img src="v49-magic-golden-egg.gif" alt="Magic Golden Egg 魔法金蛋">';home.append(egg);
  const stats=document.createElement('section');stats.className='v48-stats';stats.setAttribute('aria-label','Angel progress 天使成长数据');
  stats.innerHTML='<div class="v48-level"><b id="v48-level-en">Level 0 Angel Baby</b><small id="v48-level-zh">0级天使宝宝</small></div><div><span>Baby Score</span><small>宝宝分数</small><strong id="v48-score">0.0</strong></div><div><span>Ability</span><small>能力</small><strong id="v48-ability">待评</strong></div>';
  home.append(stats);
  [...nav.children].forEach((item,i)=>{const key=['home','growth','more','me'][i],en=['Home','Growth','More','Me'][i],zh=['首页','成长','更多','我的'][i];if(!key)return;item.innerHTML='<span class="v48-nav-icon">'+svg(key)+'</span><span class="v48-nav-en">'+en+'</span><span class="v48-nav-zh">'+zh+'</span>';item.setAttribute('aria-label',en+' '+zh);});

  // The third original V43 navigation button now opens More; its old Pets
  // view stays accessible as a submenu, and the original homepage is linked.
  const moreTab=nav.children[2];
  if(moreTab){
    moreTab.dataset.tab='more';
    const oldPetsHandler=moreTab.onclick;
    function showMore(){
      const intro=$('intro'),video=$('intro-video');
      if(intro)intro.hidden=true;
      try{video?.pause();}catch{}
      home.hidden=true;panel.hidden=false;
      stage.dataset.tab='more';
      nav.querySelectorAll('[data-tab]').forEach(b=>b.toggleAttribute('aria-current',b===moreTab));
      panel.className='panel-view v49-more-panel';
      panel.replaceChildren();
      const heading=document.createElement('h1');heading.textContent='More / 更多';panel.append(heading);
      const sub=document.createElement('p');sub.className='panel-subtitle';sub.textContent='Pets & More / 宠物与更多功能';panel.append(sub);
      const choices=[
        ['Pets / 宠物',()=>{const was=moreTab.dataset.tab;moreTab.dataset.tab='pets';try{oldPetsHandler?.call(moreTab);panel.querySelector('.egg-spot img')?.setAttribute('src','v49-magic-golden-egg.gif');}finally{moreTab.dataset.tab=was;}}],
        ['Original Home / 原版主页',()=>{location.href='legacy-home.html';}],
        ['Change Scene / 切换场景',()=>{$('scenes-button')?.click();}],
        ['My Baby / 选择宝宝',()=>{$('characters-button')?.click();}],
        ['Listening / 听力练习',()=>{location.href='listening.html';}]
      ];
      const list=document.createElement('div');list.className='v49-more-list';
      for(const [label,fn] of choices){const btn=document.createElement('button');btn.type='button';btn.className='v49-more-item';btn.textContent=label;btn.onclick=fn;list.append(btn);}panel.append(list);
      const back=document.createElement('button');back.type='button';back.className='panel-back';back.textContent='Home / 返回首页';back.onclick=()=>nav.querySelector('[data-tab="home"]')?.click();panel.append(back);
    }
    // Capture stops V43's old Pets click dispatcher from overwriting More.
    moreTab.addEventListener('click',event=>{event.stopImmediatePropagation();showMore();},true);
    const requested=new URLSearchParams(location.search).get('tab');
    if(requested==='more')showMore();
  }
  const moreStyle=document.createElement('style');moreStyle.textContent=`
    #home-stage .v49-more-panel{background:#fff8f0ef!important;border:1px solid #fff!important;border-radius:5cqw!important;padding:4cqw!important;overflow-y:auto!important;touch-action:pan-y!important}
    #home-stage .v49-more-list{display:grid;gap:2.5cqw;margin:4cqw 0}
    #home-stage .v49-more-item{width:100%;padding:3cqw 2cqw;border-radius:3cqw;border:1px solid #fff6ef;background:linear-gradient(145deg,#fef7f7,#d8f4f6);color:#356e82;font:600 3.1cqw Georgia,'Songti SC',sans-serif;text-align:center}
  `;document.head.append(moreStyle);

  // The standard V43 storage key is the only score source; do not reset existing progress.
  function ability(level,score){if(level<=0)return '待评';const ratio=score/(level*10);return ratio<.6?'薄弱':ratio<1?'欠缺':Math.abs(ratio-1)<1e-9?'普通':ratio<1.2?'良好':ratio<1.5?'优秀':ratio<1.8?'卓越':'传奇';}
  function sync(){
    const scene=C?.read?.().scene||'forest-stairs';
    const family=scene.startsWith('city')?'blossom':scene.startsWith('coast')?'coast':'forest';
    world.style.backgroundImage='url("v41-stairs-'+family+'.png")';
    const lv=Number(S?.completed?.())||0;
    let score=0;
    try{const saved=JSON.parse(localStorage.getItem('wm-wordmatch-v35')||'{}');score=Number(saved.total||0)/10;if(!Number.isFinite(score))score=0;}catch{}
    $('v48-level-en').textContent='Level '+lv+' Angel Baby';
    $('v48-level-zh').textContent=lv+'级天使宝宝';
    $('v48-score').textContent=score.toFixed(1);
    $('v48-ability').textContent=ability(lv,score);
    cat?.classList.toggle('v48-unlocked',!!S?.isPetUnlocked?.('ice_cat'));
    phoenix.classList.toggle('v48-unlocked',!!S?.isPetUnlocked?.('phoenix'));
    koala.classList.toggle('v48-unlocked',!!S?.isPetUnlocked?.('koala'));
  }
  let toastTimer;
  function toast(message){const n=$('home-toast');if(!n)return;n.textContent=message;n.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>n.classList.remove('show'),2600)}
  function clickPet(id,stageName){if(!S?.isPetUnlocked?.(id)){toast('Unlock at '+stageName+' / '+(stageName==='Junior School'?'升至初中后解锁':'升至小学后解锁'));return;}
    const old=C?.read?.();if(!old)return;const baby=old.slots.find(k=>C.catalog.find(t=>t.id===k)?.kind==='baby')||'blond_angel';old.slots=[baby,id];C.save(old);toast('Go Together / 一起出发');}
  cat?.addEventListener('click',e=>{e.stopImmediatePropagation();clickPet('ice_cat','Primary School')},true);
  phoenix.onclick=()=>clickPet('phoenix','Primary School');
  koala.onclick=()=>clickPet('koala','Junior School');

  // Keep the V43 intro and event handlers. Show a permanent bilingual CTA on the existing video.
  const intro=$('intro');if(intro){
    const copy=document.createElement('div');copy.className='v48-intro-copy';copy.innerHTML='<b>My English Growth Journey</b><small>我的英语成长之旅</small><em>Let’s grow together!</em><small>一起学习，一起长大！</small>';
    const cta=document.createElement('a');cta.className='v48-intro-cta';cta.href='word-match.html';cta.innerHTML='Go to Growth<small>去成长</small>';intro.append(copy,cta);
  }
  for(const evt of ['pageshow','storage','wm-companions-change'])window.addEventListener(evt,sync);
  nav.addEventListener('click',()=>setTimeout(sync,50),true);
  $('scenes-button')?.addEventListener('click',()=>setTimeout(sync,60));
  sync();
})();
