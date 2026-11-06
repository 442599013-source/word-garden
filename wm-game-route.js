/* V38: homepage entries defer to each game's current save, without a pinned level. */
(()=>{'use strict';
function openMatch(){location.href='./word-match.html?v=38'}
function openAdvance(){location.href='./sentence-game.html?v=38'}
window.WordMatchStandalone={...(window.WordMatchStandalone||{}),open:openMatch,openAdvance};
document.addEventListener('click',e=>{const t=e.target.closest('[data-quick="match"],[data-quick="advance"]');if(!t)return;e.preventDefault();e.stopImmediatePropagation();t.dataset.quick==='advance'?openAdvance():openMatch()},true);
})();
