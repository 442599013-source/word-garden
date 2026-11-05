/* V37: recycled unmatched cards and signed hint costs. Original V35: a 50-word/100-card cycle. Deal 32 shuffled cards, retain 68 in the pool. */
(function(root){'use strict';
class MatchGame{
 constructor(data,{level=1,seed=Date.now(),snapshot=null}={}){
  this.data=data;this.level=Math.max(1,Math.min(data.levels.length,Number(level)||1));this.plan=data.levels[this.level-1];this.targets=new Set(this.plan.targets);this.selected=null;
  if(snapshot?.schema===35){snapshot=JSON.parse(JSON.stringify(snapshot));snapshot.pool=snapshot.pool.slice(snapshot.poolCursor);snapshot.poolCursor=0;snapshot.schema=37;}
  if(snapshot&&this.valid(snapshot)){this.s=JSON.parse(JSON.stringify(snapshot));return;}
  this.s={schema:37,level:this.level,rng:(Number(seed)>>>0)||350129,serial:0,board:[],done:[],released:[],ordinary:0,combo:0,bestCombo:0,score:0,pairs:0,finished:false,cycle:0,pool:[],poolIds:[],poolCursor:0,fillerBag:[]};
  this.createPool();this.s.board=this.draw(32);
 }
 valid(s){
  const tile=t=>t&&typeof t.id==='string'&&this.data.words[t.word]&&['en','zh'].includes(t.lang);
  const active=Array.isArray(s.pool)&&Array.isArray(s.board)?s.board.concat(s.pool):[];
  return s.schema===37&&s.level===this.level&&Number.isInteger(s.rng)&&Number.isSafeInteger(s.serial)&&s.serial>=0&&Array.isArray(s.board)&&s.board.length===32&&s.board.every(tile)&&Array.isArray(s.done)&&new Set(s.done).size===s.done.length&&s.done.every(w=>this.targets.has(w))&&['ordinary','combo','bestCombo','pairs','cycle'].every(k=>Number.isSafeInteger(s[k])&&s[k]>=0)&&Number.isSafeInteger(s.score)&&s.cycle>=1&&typeof s.finished==='boolean'&&s.finished===(s.done.length===10)&&Array.isArray(s.pool)&&s.pool.length<=100&&s.pool.every(tile)&&new Set(active.map(t=>t.id)).size===active.length&&s.poolCursor===0&&Array.isArray(s.poolIds)&&s.poolIds.length===50&&new Set(s.poolIds).size===50&&this.plan.targets.every(w=>s.poolIds.includes(w))&&s.poolIds.every(w=>this.data.words[w])&&Array.isArray(s.fillerBag)&&s.fillerBag.every(w=>this.data.fillerIds.includes(w)&&!this.targets.has(w));
 }
 rand(){let x=this.s.rng;x^=x<<13;x^=x>>>17;x^=x<<5;this.s.rng=x>>>0;return this.s.rng/4294967296;}
 shuffled(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(this.rand()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
 pair(word){return ['en','zh'].map(lang=>({id:'m'+this.level+'-'+(++this.s.serial),word,lang}));}
 takeFillers(count){
  const allowed=this.data.fillerIds.filter(w=>!this.targets.has(w)),out=[];if(allowed.length<count)throw Error('Not enough corpus words');
  while(out.length<count){if(!this.s.fillerBag.length)this.s.fillerBag=this.shuffled(allowed);const word=this.s.fillerBag.pop();if(!out.includes(word))out.push(word);}return out;
 }
 createPool(){
  const ids=this.plan.targets.concat(this.takeFillers(40));this.s.poolIds=ids;this.s.pool=this.shuffled(ids.flatMap(w=>this.pair(w)));this.s.poolCursor=0;this.s.cycle++;
 }
 draw(count){
  const cards=[];while(cards.length<count){if(!this.s.pool.length)this.createPool();const n=Math.min(count-cards.length,this.s.pool.length);cards.push(...this.s.pool.splice(0,n));}
  for(const t of cards)if(this.targets.has(t.word)&&!this.s.released.includes(t.word))this.s.released.push(t.word);return cards;
 }
 meaning(t){return (this.plan.meanings?.[t.word]||this.data.words[t.word].zh).trim();}
 matching(a,b){return !!a&&!!b&&a.id!==b.id&&a.lang!==b.lang&&this.meaning(a)===this.meaning(b);}
 availablePairs(board=this.s.board){const groups=new Map();for(const t of board){const key=this.meaning(t),n=groups.get(key)||{en:0,zh:0};n[t.lang]++;groups.set(key,n);}return [...groups.values()].reduce((n,g)=>n+Math.min(g.en,g.zh),0);}
 collapse(removed){
  const prior=this.s.board.slice(),fresh=this.draw(2),result=Array(32);let pos=0;
  for(let col=0;col<4;col++){const keep=[];for(let row=0;row<8;row++){const t=prior[row*4+col];if(!removed.includes(t.id))keep.push(t);}const holes=8-keep.length;for(let row=0;row<holes;row++)result[row*4+col]=fresh[pos++];for(let i=0;i<keep.length;i++)result[(holes+i)*4+col]=keep[i];}
  this.s.board=result;return fresh.map(t=>t.id);
 }
 select(id){
  if(this.s.finished)return {kind:'noop'};const b=this.s.board.find(t=>t.id===id);if(!b)return {kind:'noop'};
  if(this.selected===id){this.selected=null;return {kind:'selected',id:null};}if(!this.selected){this.selected=id;return {kind:'selected',id};}
  const a=this.s.board.find(t=>t.id===this.selected);this.selected=null;if(!this.matching(a,b)){this.s.combo=0;return {kind:'wrong',ids:[a.id,b.id]};}
  const word=(a.lang==='en'?a:b).word,firstTarget=this.targets.has(word)&&!this.s.done.includes(word);if(firstTarget)this.s.done.push(word);else this.s.ordinary++;
  this.s.pairs++;this.s.combo++;this.s.bestCombo=Math.max(this.s.bestCombo,this.s.combo);const phase=this.s.combo%10,bonus=phase===3?2:phase===5?5:phase===0?10:0,base=firstTarget?2:1;this.s.score+=base+bonus;this.s.finished=this.s.done.length===10;
  const previous=this.s.board.slice(),removed=[a.id,b.id],newIds=this.collapse(removed);
  return {kind:'match',word,firstTarget,base,bonus,combo:this.s.combo,ids:removed,newIds,previous,finished:this.s.finished};
 }
 hint(){const pairs=[];for(let i=0;i<32;i++)for(let j=i+1;j<32;j++)if(this.matching(this.s.board[i],this.s.board[j]))pairs.push([this.s.board[i],this.s.board[j]]);const target=pairs.find(p=>p.some(t=>t.lang==='en'&&this.targets.has(t.word)&&!this.s.done.includes(t.word)));return (target||pairs[0]||[]).map(t=>t.id);}
 newBatch(){this.selected=null;const returned=this.shuffled(this.s.board);this.s.pool=this.s.pool.length<=32?this.shuffled(this.s.pool.concat(returned)):this.s.pool.concat(returned);this.s.board=this.draw(32);return this.s.board;}
 useHint(){if(this.s.finished)return [];this.s.score-=10;return this.hint();}
 shuffle(){return this.newBatch();}
 snapshot(){return JSON.parse(JSON.stringify(this.s));}
 static stars(bestCombo){return bestCombo>=10?3:bestCombo>=5?2:1;}
}
root.WMMatchEngine=MatchGame;if(typeof module!=='undefined'&&module.exports)module.exports=MatchGame;
})(typeof window!=='undefined'?window:globalThis);
