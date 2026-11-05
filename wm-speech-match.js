/* Transcript equivalence for voice input only. Never use for spelling answers. */
(()=>{'use strict';
const basic=s=>String(s||'').toLowerCase().replace(/[’‘]/g,"'").replace(/[.,!?;:]/g,'').trim().replace(/\s+/g,' ');
const small=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
function numberWords(n){n=Number(n);if(n<20)return small[n];if(n<100)return tens[Math.floor(n/10)]+(n%10?' '+small[n%10]:'');if(n<1000)return small[Math.floor(n/100)]+' hundred'+(n%100?' '+numberWords(n%100):'');return String(n).split('').map(d=>small[+d]).join(' ')}
function normalize(s){return basic(String(s??'').replace(/%/g,' percent').replace(/\b(\d{1,2}):00\b/g,(_,h)=>numberWords(h)+" o'clock").replace(/\b(\d{1,2}):(\d{2})\b/g,(_,h,m)=>numberWords(h)+' '+(m[0]==='0'?'oh '+numberWords(m):numberWords(m))).replace(/\b\d+\b/g,numberWords).replace(/\bo[’']?\s*clock\b/gi,"o'clock").replace(/\b(\w+)-(?=\w)/g,'$1 '));}
// Explicit homophones only; no edit-distance or approximate-sound matching.
const groups=['write right rite','hear here','see sea','to too two','for four fore','one won','no know','knew new','there their they\'re','your you\'re','its it\'s','our hour','by buy bye','be bee','week weak','meet meat','peace piece','whole hole','wait weight','wear where ware','weather whether','which witch','would wood','sun son','some sum','night knight','plain plane','pair pear pare','break brake','blue blew','road rode','sent scent cent','sale sail','mail male','made maid','eight ate','allowed aloud','board bored','course coarse','principal principle','stationary stationery','morning mourning','through threw','waist waste','flour flower','fair fare'];
const words=new Map();groups.forEach((g,i)=>g.split(' ').forEach(w=>words.set(w,i)));
function equivalent(actual,expected){const a=normalize(actual).split(' '),b=normalize(expected).split(' ');if(!normalize(actual)||!normalize(expected)||a.length!==b.length)return false;return a.every((w,i)=>w===b[i]||(words.has(w)&&words.get(w)===words.get(b[i])))}
function resolve(actual,expected){return equivalent(actual,expected)?String(expected):String(actual||'')}
window.WMSpeechMatch={equivalent,resolve,normalize};
})();
