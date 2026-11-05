/* V32: separate relaxation game and original PTE advancement journey. */
(()=>{'use strict';
function number(v){v=Number(v);return Number.isInteger(v)&&v>=1&&v<=129?v:1}
function selected(){try{return number(localStorage.getItem('wm-journey-selection-v21'))}catch{return 1}}
function openMatch(){let n=selected();try{const s=JSON.parse(localStorage.getItem('wm-wordmatch-v32')||'{}');if(s.level)n=number(s.level)}catch{}location.href='./word-match.html?level='+n+'&v=32'}
function openAdvance(){location.href='./sentence-game.html?level='+selected()+'&v=32'}
window.WordMatchStandalone={...(window.WordMatchStandalone||{}),open:openMatch,openAdvance};document.addEventListener('click',e=>{const t=e.target.closest('[data-quick="match"],[data-quick="advance"]');if(!t)return;e.preventDefault();e.stopImmediatePropagation();t.dataset.quick==='advance'?openAdvance():openMatch()},true);
})();
