/* Resolution-independent, themeable SVG artwork. Text and controls remain live HTML. */
(()=>{'use strict';const stage=document.querySelector('.match-stage');if(!stage||stage.querySelector('.code-topbar'))return;const header=document.createElement('div');header.className='code-topbar';header.setAttribute('aria-hidden','true');header.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 65 711 349" preserveAspectRatio="xMidYMin meet" focusable="false">
<defs>
 <linearGradient id="wm44-wood" x2="0" y2="1"><stop stop-color="var(--top-light)"/><stop offset=".52" stop-color="var(--top-wood)"/><stop offset="1" stop-color="var(--top-mid)"/></linearGradient>
 <linearGradient id="wm44-rim" x2=".2" y2="1"><stop stop-color="var(--top-rim-light)"/><stop offset=".5" stop-color="var(--top-rim)"/><stop offset="1" stop-color="var(--top-branch)"/></linearGradient>
 <linearGradient id="wm44-branch" x2="0" y2="1"><stop stop-color="var(--top-rim-light)"/><stop offset=".25" stop-color="var(--top-rim)"/><stop offset="1" stop-color="var(--top-branch)"/></linearGradient>
 <linearGradient id="wm44-badge" x2="0" y2="1"><stop stop-color="var(--top-badge-light)"/><stop offset="1" stop-color="var(--top-badge)"/></linearGradient>
 <linearGradient id="wm44-leaf" x2="1" y2="1"><stop stop-color="var(--top-leaf-light)"/><stop offset="1" stop-color="var(--top-leaf)"/></linearGradient>
 <filter id="wm44-shadow" x="-20%" y="-25%" width="140%" height="155%"><feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="var(--top-shadow)" flood-opacity=".26"/></filter>
 <symbol id="wm44-leaf-shape" viewBox="0 0 40 25"><path d="M2 23Q0 0 37 2Q40 26 2 23" fill="url(#wm44-leaf)"/><path d="M3 22L32 6" stroke="var(--top-leaf-light)" stroke-width="1.2" opacity=".8"/></symbol>
 <symbol id="wm44-flower" viewBox="0 0 30 30"><g fill="var(--top-petal)" stroke="var(--top-light)" stroke-width=".7"><ellipse cx="15" cy="7" rx="5" ry="7"/><ellipse cx="23" cy="13" rx="5" ry="7" transform="rotate(65 23 13)"/><ellipse cx="20" cy="23" rx="5" ry="7" transform="rotate(140 20 23)"/><ellipse cx="8" cy="23" rx="5" ry="7" transform="rotate(220 8 23)"/><ellipse cx="6" cy="12" rx="5" ry="7" transform="rotate(290 6 12)"/></g><circle cx="15" cy="15" r="4.3" fill="var(--top-accent)"/></symbol>
 <symbol id="wm44-star" viewBox="0 0 40 40"><path d="M20 2L25.6 13.4L38 15.2L29 24L31.1 36.3L20 30.5L8.9 36.3L11 24L2 15.2L14.4 13.4Z" fill="var(--top-accent)" stroke="var(--top-light)" stroke-width="1.6" stroke-linejoin="round"/></symbol>
</defs>
<!-- Braided cords and the softly irregular wooden title plaque. -->
<g stroke-linecap="round"><path d="M231 65L231 157M489 65L489 156" stroke="var(--top-branch)" stroke-width="7"/><path d="M230 65L230 155M488 65L488 155" stroke="var(--top-rope)" stroke-width="3"/><path d="M227 79l7 4m-7 12l7 4m-7 12l7 4m-7 12l7 4m251-52l7 4m-7 12l7 4m-7 12l7 4m-7 12l7 4" stroke="var(--top-light)" opacity=".65" stroke-width="1.8"/></g>
<g filter="url(#wm44-shadow)"><path d="M224 143Q374 127 522 145Q562 149 566 184Q574 223 548 247Q524 261 493 253Q361 248 230 255Q190 254 187 214Q181 173 202 153Q212 146 224 143Z" fill="url(#wm44-rim)" stroke="var(--top-branch)" stroke-width="2"/><path d="M226 151Q374 136 520 153Q552 157 555 186Q563 218 541 237Q521 249 494 244Q361 240 233 246Q201 244 198 212Q193 181 210 162Q218 154 226 151Z" fill="url(#wm44-wood)" stroke="var(--top-rim-light)" stroke-width="2"/>
<g fill="none" stroke="var(--top-grain)" opacity=".2" stroke-width="1.6"><path d="M218 174Q330 160 529 171M216 184Q380 175 539 184M214 224Q367 214 540 228M243 237Q371 229 490 234"/><path d="M227 200q11-6 18 0q-9 5-18 0M516 213q8-5 13 0q-8 5-13 0"/></g></g>
<use href="#wm44-leaf-shape" x="194" y="128" width="45" height="29" transform="rotate(-19 214 143)"/><use href="#wm44-leaf-shape" x="173" y="150" width="45" height="29" transform="rotate(-38 195 165)"/><use href="#wm44-leaf-shape" x="518" y="132" width="45" height="29" transform="rotate(35 541 148)"/><use href="#wm44-leaf-shape" x="542" y="157" width="35" height="25" transform="rotate(80 557 168)"/>
<use href="#wm44-flower" x="207" y="125" width="24" height="24"/><use href="#wm44-flower" x="225" y="225" width="20" height="20"/><use href="#wm44-flower" x="520" y="220" width="23" height="23"/>
<!-- Branch and its bark details. -->
<path d="M74 295Q145 284 225 298T389 294Q479 292 545 303Q610 312 660 295Q684 295 681 320" fill="none" stroke="var(--top-branch)" stroke-width="18" stroke-linecap="round" filter="url(#wm44-shadow)"/>
<path d="M76 291Q150 282 225 294T389 290Q479 288 546 299Q612 308 661 291Q680 291 679 313" fill="none" stroke="url(#wm44-branch)" stroke-width="12" stroke-linecap="round"/>
<path d="M105 289l25 2m99 6l29 3m91-4l21-4m80 2l28 4m80 6l25-3" stroke="var(--top-rim-light)" stroke-width="2" opacity=".7" stroke-linecap="round"/>
<g fill="none" stroke="var(--top-rope)" stroke-width="4" stroke-linecap="round"><path d="M62 282v34m65-33v33M247 305v43m112-43v43M478 309v39m124-42v42"/></g>
<!-- Level plaque and two matching score plaques. -->
<g filter="url(#wm44-shadow)"><rect x="24" y="308" width="151" height="87" rx="27" fill="url(#wm44-rim)" stroke="var(--top-branch)" stroke-width="1.5"/><rect x="32" y="314" width="135" height="73" rx="23" fill="url(#wm44-wood)" stroke="var(--top-rim-light)" stroke-width="2"/>
<rect x="205" y="335" width="207" height="74" rx="35" fill="url(#wm44-badge)" stroke="var(--top-rim-light)" stroke-width="6"/><rect x="446" y="335" width="207" height="74" rx="35" fill="url(#wm44-badge)" stroke="var(--top-rim-light)" stroke-width="6"/>
<path d="M220 352Q289 329 392 349M462 351Q538 330 635 350" fill="none" stroke="var(--top-light)" stroke-width="2" opacity=".5"/></g>
<g fill="var(--top-branch)" stroke="var(--top-rope)" stroke-width="2"><ellipse cx="62" cy="315" rx="4" ry="7"/><ellipse cx="127" cy="315" rx="4" ry="7"/><ellipse cx="247" cy="341" rx="4" ry="7"/><ellipse cx="359" cy="341" rx="4" ry="7"/><ellipse cx="478" cy="341" rx="4" ry="7"/><ellipse cx="602" cy="341" rx="4" ry="7"/></g>
<use href="#wm44-leaf-shape" x="175" y="273" width="42" height="28" transform="rotate(-20 196 287)"/><use href="#wm44-leaf-shape" x="195" y="294" width="38" height="25" transform="rotate(55 214 306)"/><use href="#wm44-leaf-shape" x="630" y="278" width="42" height="28" transform="rotate(30 650 290)"/>
<use href="#wm44-star" x="399" y="269" width="34" height="34"/><use href="#wm44-star" x="581" y="276" width="30" height="30"/>
<use href="#wm44-star" x="223" y="351" width="40" height="40"/>
<path d="M479 394C450 384 461 367 474 353C470 365 480 366 483 349C493 364 503 378 493 389C489 394 485 395 479 394Z" fill="var(--top-accent)" stroke="var(--top-light)" stroke-width="1.5"/><path d="M480 390C467 384 476 375 480 369C480 378 489 379 484 388Z" fill="var(--top-light)"/>
</svg>`;stage.prepend(header);
// Only the title letters change shape; other text keeps its existing typography.
const title=stage.querySelector('.game-title strong');
if(title&&!title.querySelector('.wm-title-letter')){
 const text=title.textContent;title.setAttribute('aria-label',text);title.replaceChildren();
 const tilt=[-6,3,-4,5,-3,0,4,-5,3,-3,4],lift=[0,1,-1,1,0,0,-1,1,-1,0,1];
 [...text].forEach((letter,i)=>{if(letter===' '){title.append(document.createTextNode(' '));return}const n=document.createElement('span');n.className='wm-title-letter';n.textContent=letter;n.setAttribute('aria-hidden','true');n.style.setProperty('--letter-tilt',tilt[i%tilt.length]+'deg');n.style.setProperty('--letter-lift',lift[i%lift.length]*.18+'cqw');title.append(n)});
}
// Interface labels only. Never visit the board, word meanings or sentence panel.
function englishInterfaceLabels(){
 for(const selector of ['.home-button small','#level-chinese','#hint small','#shuffle small','.v42-rules small'])for(const n of stage.querySelectorAll(selector))if(n.textContent)n.textContent='';
 for(const [selector,text]of [['.score-label>span','Score'],['.combo-label>span','Combo']]){const n=stage.querySelector(selector);if(n&&n.textContent!==text)n.textContent=text}
 const dialog=stage.querySelector('#dialog');if(!dialog)return;
 const walker=document.createTreeWalker(dialog,NodeFilter.SHOW_TEXT);let n;
 while((n=walker.nextNode())){if(n.parentElement?.closest('script,style'))continue;const value=n.nodeValue;if(!/[\u3400-\u9fff]/.test(value))continue;
 let next=value.replace(/Total game points\s*·\s*累计游戏积分：/g,'Total game points: ').replace(/Best combo\s*·\s*最高连消：/g,'Best combo: ').replace(/得分\s*·\s*最高连消\s*/g,'Best combo ').replace(/[\u3400-\u9fff]+/g,'').replace(/\s*[·/]\s*(?=$|[：:])/g,'').replace(/[：]/g,':').replace(/\s+/g,' ').trim();if(next!==value)n.nodeValue=next;
 }
}
englishInterfaceLabels();let labelQueued=false;
new MutationObserver(()=>{if(labelQueued)return;labelQueued=true;requestAnimationFrame(()=>{labelQueued=false;englishInterfaceLabels()})}).observe(stage,{childList:true,subtree:true,characterData:true});

function syncHeaderTheme(){let scene='forest-stairs';try{scene=window.WMCompanions?.read?.()?.scene||JSON.parse(localStorage.getItem('wm-companions-v39')||'{}').scene||scene}catch{}stage.dataset.headerTheme=scene.startsWith('coast')?'coast':scene.startsWith('city')?'blossom':'forest'}
syncHeaderTheme();for(const name of ['storage','pageshow','wm-companions-change'])window.addEventListener(name,syncHeaderTheme);
})();

