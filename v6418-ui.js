
(()=>{'use strict';for(const [rel,size,href] of [['icon','32x32','favicon-32.png?v=64.33'],['apple-touch-icon','180x180','apple-touch-icon.png?v=64.33'],['manifest','','manifest.webmanifest?v=64.33']]){let n=document.querySelector('link[rel="'+rel+'"]');if(!n){n=document.createElement('link');n.rel=rel;document.head.append(n)}n.href=href;if(size)n.sizes=size}let n=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(!n){n=document.createElement('meta');n.name='apple-mobile-web-app-title';document.head.append(n)}n.content='Goldy Magic English';})();
/* V64.18: one navigation and bilingual presentation across game pages. */
(()=>{'use strict';
const paths={home:'<path d="M6 17L20 5l14 12v17H6Z"/><path d="M15 34V23h10v11"/><path d="M20 14c-3-4-8 0-4 4l4 4 4-4c4-4-1-8-4-4Z"/>',growth:'<path d="M20 35V18"/><path d="M20 22C10 22 7 17 8 9c8-1 13 3 12 13Z"/><path d="M20 20c0-9 5-13 13-12 0 8-4 13-13 12Z"/>',class:'<rect x="5" y="6" width="12" height="12" rx="3"/><rect x="23" y="6" width="12" height="12" rx="3"/><rect x="5" y="24" width="12" height="12" rx="3"/><rect x="23" y="24" width="12" height="12" rx="3"/>',me:'<circle cx="20" cy="13" r="7"/><path d="M8 35v-3c0-8 5-13 12-13s12 5 12 13v3"/>'};
const entries=[['home','Home','首页','index.html'],['growth','Growth','成长','word-match.html'],['class','Class','课堂','sentence-game.html'],['me','Me','我的','legacy-home.html']];
const file=location.pathname.split('/').pop()||'index.html';
const active=file==='index.html'?'home':file==='word-match.html'?'growth':['sentence-game.html','magic-classroom.html','level-road.html','level-activities.html','growth-road.html','assessment.html'].includes(file)?'class':'me';
let nav;
function theme(){let scene='forest-stairs';try{scene=JSON.parse(localStorage.getItem('wm-companions-v39')||'{}').scene||scene}catch{}
 const family=scene.startsWith('coast')?'coast':scene.startsWith('city')?'blossom':'forest';
 const colors={coast:['#8bd8e7','#427ca4','#f1fbff'],blossom:['#eda6ce','#9a609f','#fff3f7'],forest:['#d9a7e9','#8a61ac','#fff5fb']}[family];
 ['edge','deep','light'].forEach((k,i)=>document.documentElement.style.setProperty('--goldy-'+k,colors[i]));
}
function levelWording(text){return text.replace(/关卡/g,'等级').replace(/第\s*(\d+(?:\s*[—–-]\s*\d+)?)\s*关/g,'第$1级').replace(/(\d+)关/g,'$1级').replace(/下一关/g,'下一等级').replace(/上一关/g,'上一等级').replace(/本关/g,'本级').replace(/通关之路/g,'等级之路').replace(/闯关/g,'等级挑战');}
function levelLabels(){
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let text;
 while((text=walker.nextNode())){if(text.parentElement?.closest('script,style,textarea,[contenteditable]'))continue;const next=levelWording(text.nodeValue||'');if(next!==text.nodeValue)text.nodeValue=next;}
 for(const n of document.querySelectorAll('[aria-label],[title],[placeholder]'))for(const key of ['aria-label','title','placeholder']){const value=n.getAttribute(key);if(value){const next=levelWording(value);if(next!==value)n.setAttribute(key,next)}}
}
function labels(){
 levelLabels();
 // Reorder interface labels only; leave lesson sentences, answer choices and fields intact.
 const known=[['成长之路','Our Growth Journey'],['当前阶段','Current Stage'],['我的PTE成绩与目标','My PTE Scores and Goals'],['我的英语等级与能力','My English Level & Ability'],['听力','Listening'],['口语','Speaking'],['阅读','Reading'],['写作','Writing'],['设置','Settings'],['账户','Account'],['返回','Back'],['收听','Listen'],['播放','Play'],['上一条','Previous'],['下一条','Next'],['重新拼写','Try again'],['主课主题','Course theme']];
 const scope='h1,h2,h3,button,a,label,.bilingual-head,.metric-heading,.metric-caption,.pte-heading,.stage-card .stack,.item-name';
 for(const n of document.querySelectorAll(scope)){
  if(n.closest('#goldy-nav,.assessment-options,#exam-options,#answer-area,#pieces,#built,.wm-options,.match-board,.match-targets,.wm-sentence,.wm-words,.wm-story,textarea,input,select'))continue;
  if(n.dataset.goldyLabel==='1')continue;
  // Existing strong/small or title/subtitle pairs retain all data and event handlers.
  const main=n.querySelector(':scope > strong,:scope > h2,:scope > h3,:scope > span'),sub=n.querySelector(':scope > small,:scope > p');
  if(main&&sub&&/[\u3400-\u9fff]/.test(main.textContent)&&/[A-Za-z]/.test(sub.textContent)&&!/[\u3400-\u9fff]/.test(sub.textContent)){
   const t=main.textContent;main.textContent=sub.textContent;sub.textContent=t;n.dataset.goldyLabel='1';continue;
  }
  const direct=[...n.childNodes].find(x=>x.nodeType===3&&x.textContent.trim());
  if(sub&&direct&&/[\u3400-\u9fff]/.test(direct.textContent)&&/^[A-Za-z0-9 ·&—–-]+$/.test(sub.textContent.trim())){
   const cn=direct.textContent.trim();direct.textContent=sub.textContent.trim();sub.textContent=cn;n.dataset.goldyLabel='1';continue;
  }
  if(n.children.length)continue;
  const t=n.textContent.trim();if(t.length>90||!/[\u3400-\u9fff]/.test(t)||!/[A-Za-z]/.test(t))continue;
  const pair=known.find(([cn,en])=>{const clean=t.replace(/[‹←▶🎤·/]/gu,' ').replace(/\s+/g,' ').trim();return clean===cn+' '+en||clean===en+' '+cn;});
  if(!pair)continue;
  const en=document.createElement('span'),zh=document.createElement('small');en.textContent=pair[1];zh.textContent=pair[0];en.className='goldy-en';zh.className='goldy-zh';n.replaceChildren(en,zh);n.classList.add('goldy-bilingual');n.dataset.goldyLabel='1';
 }
}
function boot(){
 if(window.top!==window.self)return;
 document.body.classList.add('goldy-unified');theme();
 nav=document.createElement('nav');nav.id='goldy-nav';nav.setAttribute('aria-label','Main navigation 主导航');
 for(const [key,en,zh,url] of entries){const a=document.createElement('a');a.href=url;a.dataset.page=key;a.setAttribute('aria-label',en+' '+zh);if(key===active)a.setAttribute('aria-current','page');a.innerHTML='<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+paths[key]+'</svg><span>'+en+'</span><small>'+zh+'</small>';nav.append(a)}document.body.append(nav);
 const spacer=document.createElement('div');spacer.className='goldy-nav-space';spacer.setAttribute('aria-hidden','true');document.body.append(spacer);
 function introState(){nav.hidden=!!document.querySelector('#intro:not([hidden])');}
 introState();const intro=document.getElementById('intro');if(intro)new MutationObserver(introState).observe(intro,{attributes:true,attributeFilter:['hidden']});
 labels();let queued=false;
 const obs=new MutationObserver(()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;labels()})});obs.observe(document.body,{childList:true,subtree:true,characterData:true});
 for(const event of ['storage','pageshow','wm-companions-change'])window.addEventListener(event,theme);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
