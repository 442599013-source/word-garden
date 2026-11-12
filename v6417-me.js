/* V64.17: direct Me route and code-rendered personal dashboard. */
(()=>{'use strict';
if(document.getElementById('home-stage')){
 document.addEventListener('click',e=>{if(e.target.closest('.bottom-nav [data-tab="me"]')){e.preventDefault();e.stopImmediatePropagation();location.href='legacy-home.html?v=64.17';}},true);
 if(new URLSearchParams(location.search).get('tab')==='me')location.replace('legacy-home.html?v=64.17');
 return;
}
if(!document.getElementById('app'))return;
const icon={home:'<path d="M6 17L20 5l14 12v17H6Z"/><path d="M15 34V23h10v11"/><path d="M20 14c-3-4-8 0-4 4l4 4 4-4c4-4-1-8-4-4Z"/>',growth:'<path d="M20 35V18"/><path d="M20 22C10 22 7 17 8 9c8-1 13 3 12 13Z"/><path d="M20 20c0-9 5-13 13-12 0 8-4 13-13 12Z"/>',class:'<rect x="5" y="6" width="12" height="12" rx="3"/><rect x="23" y="6" width="12" height="12" rx="3"/><rect x="5" y="24" width="12" height="12" rx="3"/><rect x="23" y="24" width="12" height="12" rx="3"/>',me:'<circle cx="20" cy="13" r="7"/><path d="M8 35v-3c0-8 5-13 12-13s12 5 12 13v3"/>'};
const svg=k=>'<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+icon[k]+'</svg>';

const nav=document.createElement('nav');nav.className='me-bottom-nav';nav.setAttribute('aria-label','Main navigation 主导航');
for(const [key,en,zh,url] of [['home','Home','首页','index.html'],['growth','Growth','成长','word-match.html'],['class','Class','课堂','sentence-game.html'],['me','Me','我的','legacy-home.html']]){
 const a=document.createElement('a');a.href=url;a.setAttribute('aria-label',en+' '+zh);if(key==='me')a.setAttribute('aria-current','page');a.innerHTML='<span class="v48-nav-icon">'+svg(key)+'</span><span class="v48-nav-en">'+en+'</span><span class="v48-nav-zh">'+zh+'</span>';nav.append(a);
}document.body.append(nav);
function sync(){
 const C=window.WMCompanions,s=C.read(),family=s.scene.startsWith('city')?'blossom':s.scene.startsWith('coast')?'coast':'forest';
 let file='v41-stairs-'+family+'.png';try{const saved=JSON.parse(localStorage.getItem('wm-home-visible-scene-v6411')||'null');if(saved?.scene===s.scene&&/^v41-stairs-(forest|coast|blossom)\.png$/.test(saved.file))file=saved.file;}catch{}
 document.body.style.setProperty('background-image','url("'+file+'")','important');
 const colors={coast:['#8bd8e7','#427ca4','#f1fbff'],blossom:['#eda6ce','#9a609f','#fff3f7'],forest:['#d9a7e9','#8a61ac','#fff5fb']}[family];
 ['edge','deep','light'].forEach((k,i)=>document.documentElement.style.setProperty('--me-'+k,colors[i]));
 const host=document.getElementById('me-companions');if(!host)return;host.replaceChildren();
 const angel=document.createElement('div');angel.className='me-angel';const img=document.createElement('img');const id=s.slots[0]||'blond_angel';img.alt=C.catalog.find(c=>c.id===id)?.name||'Angel 天使';C.setImage(img,id);angel.append(img);
 const egg=document.createElement('img');egg.className='me-egg';egg.src='v49-magic-golden-egg.gif';egg.alt='Magic Golden Egg 魔法金蛋';host.append(angel,egg);
}
for(const event of ['goldy-me-render','wm-companions-change','storage','pageshow'])window.addEventListener(event,sync);sync();
})();
