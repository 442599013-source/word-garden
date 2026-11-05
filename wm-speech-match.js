/* Transcript equivalence for voice input only. Never use for spelling answers. */
(()=>{'use strict';
const normalize=s=>String(s||'').toLowerCase().replace(/[’‘]/g,"'").replace(/[.,!?;:]/g,'').trim().replace(/\s+/g,' ');
// Explicit homophones only; no edit-distance or approximate-sound matching.
const groups=['write right rite','hear here','see sea','to too two','for four fore','one won','no know','knew new','there their they\'re','your you\'re','its it\'s','our hour','by buy bye','be bee','week weak','meet meat','peace piece','whole hole','wait weight','wear where ware','weather whether','which witch','would wood','sun son','some sum','night knight','plain plane','pair pear pare','break brake','blue blew','road rode','sent scent cent','sale sail','mail male','made maid','eight ate','allowed aloud','board bored','course coarse','principal principle','stationary stationery','morning mourning','through threw','waist waste','flour flower','fair fare'];
const words=new Map();groups.forEach((g,i)=>g.split(' ').forEach(w=>words.set(w,i)));
function equivalent(actual,expected){const a=normalize(actual).split(' '),b=normalize(expected).split(' ');if(!normalize(actual)||!normalize(expected)||a.length!==b.length)return false;return a.every((w,i)=>w===b[i]||(words.has(w)&&words.get(w)===words.get(b[i])))}
function resolve(actual,expected){return equivalent(actual,expected)?String(expected):String(actual||'')}
window.WMSpeechMatch={equivalent,resolve};
})();
