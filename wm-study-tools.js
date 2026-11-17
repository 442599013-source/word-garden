/* V64.47: per-skill study bookmarks and a short locally generated success chime. */
(()=>{'use strict';
const normalize=s=>String(s||'').normalize('NFKC').trim().replace(/\s+/g,' ').toLowerCase();
function read(key){try{const x=JSON.parse(localStorage.getItem(key)||'{}');return x&&typeof x==='object'&&!Array.isArray(x)?x:{}}catch{return {}}}

function learnedWords(skill){const key=skill==='listening'?'wm-listening-learned-v6444':'wm-study-learned-v6446-'+skill;return new Set(Object.entries(read(key)).filter(([k,v])=>v===true&&k.startsWith('word|')&&k.slice(5).trim()).map(([k])=>normalize(k.slice(5))))}
function changed(){window.dispatchEvent(new Event('wm-study-updated'));window.dispatchEvent(new Event('wm-assessment-updated'))}
function matchFavorites(items,stage='kindergarten'){const skills=['listening','speaking','reading','writing'],keys=skills.map(s=>'wm-study-favorites-v6447-'+s),metadata='wm-match-review-words-v6451',previous=new Map([...keys,metadata].map(k=>[k,localStorage.getItem(k)])),pool=read(metadata);try{for(const key of keys){const next=read(key);for(const item of items){if(!item.en||!item.zh)continue;next['word|'+normalize(item.en)]=true;pool[normalize(item.en)]={en:item.en,zh:item.zh,stage}}localStorage.setItem(key,JSON.stringify(next))}localStorage.setItem(metadata,JSON.stringify(pool))}catch(error){for(const [key,value]of previous){try{if(value===null)localStorage.removeItem(key);else localStorage.setItem(key,value)}catch{}}throw error}changed()}
class Store{
 constructor(skill){this.learnedKey=skill==='listening'?'wm-listening-learned-v6444':'wm-study-learned-v6446-'+skill;this.favoriteKey='wm-study-favorites-v6447-'+skill;this.learned=read(this.learnedKey);this.favorites=read(this.favoriteKey)}
 key(type,item){return type+'|'+normalize(item.en)}
 hasLearned(type,item){return !!this.learned[this.key(type,item)]}
 hasFavorite(type,item){return !!this.favorites[this.key(type,item)]}
 refresh(){this.learned=read(this.learnedKey);this.favorites=read(this.favoriteKey);return this}
 mark(type,item){return this.graduate(type,item)}
 graduate(type,item){const oldLearned=localStorage.getItem(this.learnedKey),oldFavorites=localStorage.getItem(this.favoriteKey),nextLearned={...read(this.learnedKey),[this.key(type,item)]:true},nextFavorites={...read(this.favoriteKey)};delete nextFavorites[this.key(type,item)];try{localStorage.setItem(this.favoriteKey,JSON.stringify(nextFavorites));localStorage.setItem(this.learnedKey,JSON.stringify(nextLearned))}catch(error){for(const [key,value]of [[this.favoriteKey,oldFavorites],[this.learnedKey,oldLearned]]){try{if(value===null)localStorage.removeItem(key);else localStorage.setItem(key,value)}catch{}}throw error}this.learned=nextLearned;this.favorites=nextFavorites;changed()}
 favorite(type,item){this.refresh();const next={...this.favorites,[this.key(type,item)]:true};localStorage.setItem(this.favoriteKey,JSON.stringify(next));this.favorites=next}
 toggle(type,item){this.refresh();const next={...this.favorites},key=this.key(type,item);if(next[key])delete next[key];else next[key]=true;localStorage.setItem(this.favoriteKey,JSON.stringify(next));this.favorites=next;return !!next[key]}
 remaining(type,items,only=false){this.refresh();return items.filter(x=>only?this.hasFavorite(type,x):!this.hasLearned(type,x))}
 counts(type,items){this.refresh();const unique=[...new Map(items.map(x=>[this.key(type,x),x])).values()];return {learned:unique.filter(x=>this.hasLearned(type,x)).length,favorites:unique.filter(x=>this.hasFavorite(type,x)).length}}
}
let context=null;
function audio(){const C=window.AudioContext||window.webkitAudioContext;if(!C)return null;if(!context||context.state==='closed')context=new C();return context}
function unlock(){try{const c=audio();if(c?.state==='suspended')void c.resume().catch(()=>{})}catch{}}
async function ding(){try{const c=audio();if(!c)return false;if(c.state==='suspended')await c.resume();if(c.state!=='running')return false;const start=c.currentTime;for(const [frequency,volume]of [[1046.5,.16],[2093,.04]]){const oscillator=c.createOscillator(),gain=c.createGain();oscillator.type='sine';oscillator.frequency.value=frequency;gain.gain.setValueAtTime(.0001,start);gain.gain.exponentialRampToValueAtTime(volume,start+.012);gain.gain.exponentialRampToValueAtTime(.0001,start+.23);oscillator.connect(gain);gain.connect(c.destination);oscillator.onended=()=>{oscillator.disconnect();gain.disconnect()};oscillator.start(start);oscillator.stop(start+.25)}return true}catch{return false}}
document.addEventListener('pointerdown',unlock,{passive:true});document.addEventListener('keydown',unlock,{passive:true});document.addEventListener('touchend',unlock,{passive:true});document.addEventListener('click',unlock,{passive:true});window.WMStudyTools={Store,normalize,learnedWords,matchFavorites};window.WMStudySound={ding,unlock};
})();
