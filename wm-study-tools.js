/* V64.47: per-skill study bookmarks and a short locally generated success chime. */
(()=>{'use strict';
const normalize=s=>String(s||'').normalize('NFKC').trim().replace(/\s+/g,' ').toLowerCase();
function read(key){try{const x=JSON.parse(localStorage.getItem(key)||'{}');return x&&typeof x==='object'&&!Array.isArray(x)?x:{}}catch{return {}}}
class Store{
 constructor(skill){this.learnedKey=skill==='listening'?'wm-listening-learned-v6444':'wm-study-learned-v6446-'+skill;this.favoriteKey='wm-study-favorites-v6447-'+skill;this.learned=read(this.learnedKey);this.favorites=read(this.favoriteKey)}
 key(type,item){return type+'|'+normalize(item.en)}
 hasLearned(type,item){return !!this.learned[this.key(type,item)]}
 hasFavorite(type,item){return !!this.favorites[this.key(type,item)]}
 mark(type,item){const next={...this.learned,[this.key(type,item)]:true};localStorage.setItem(this.learnedKey,JSON.stringify(next));this.learned=next}
 graduate(type,item){const nextLearned={...this.learned,[this.key(type,item)]:true},nextFavorites={...this.favorites};delete nextFavorites[this.key(type,item)];const previous=localStorage.getItem(this.favoriteKey);try{localStorage.setItem(this.favoriteKey,JSON.stringify(nextFavorites));localStorage.setItem(this.learnedKey,JSON.stringify(nextLearned))}catch(error){try{if(previous===null)localStorage.removeItem(this.favoriteKey);else localStorage.setItem(this.favoriteKey,previous)}catch{}throw error}this.learned=nextLearned;this.favorites=nextFavorites}
 favorite(type,item){const next={...this.favorites,[this.key(type,item)]:true};localStorage.setItem(this.favoriteKey,JSON.stringify(next));this.favorites=next}
 toggle(type,item){const next={...this.favorites},key=this.key(type,item);if(next[key])delete next[key];else next[key]=true;localStorage.setItem(this.favoriteKey,JSON.stringify(next));this.favorites=next;return !!next[key]}
 remaining(type,items,only=false){return items.filter(x=>!this.hasLearned(type,x)&&(!only||this.hasFavorite(type,x)))}
 counts(type,items){const unique=[...new Map(items.map(x=>[this.key(type,x),x])).values()];return {learned:unique.filter(x=>this.hasLearned(type,x)).length,favorites:unique.filter(x=>this.hasFavorite(type,x)).length}}
}
let context=null;
function audio(){const C=window.AudioContext||window.webkitAudioContext;if(!C)return null;if(!context||context.state==='closed')context=new C();return context}
function unlock(){try{const c=audio();if(c?.state==='suspended')void c.resume().catch(()=>{})}catch{}}
async function ding(){try{const c=audio();if(!c)return false;if(c.state==='suspended')await c.resume();if(c.state!=='running')return false;const start=c.currentTime;for(const [frequency,volume]of [[1046.5,.10],[2093,.025]]){const oscillator=c.createOscillator(),gain=c.createGain();oscillator.type='sine';oscillator.frequency.value=frequency;gain.gain.setValueAtTime(.0001,start);gain.gain.exponentialRampToValueAtTime(volume,start+.012);gain.gain.exponentialRampToValueAtTime(.0001,start+.23);oscillator.connect(gain);gain.connect(c.destination);oscillator.onended=()=>{oscillator.disconnect();gain.disconnect()};oscillator.start(start);oscillator.stop(start+.25)}return true}catch{return false}}
document.addEventListener('pointerdown',unlock,{passive:true});document.addEventListener('keydown',unlock,{passive:true});window.WMStudyTools={Store,normalize};window.WMStudySound={ding,unlock};
})();
