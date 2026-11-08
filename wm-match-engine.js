/* V60.1: independently shuffle all 32 bilingual cards in every 16-pair batch. */
(function(root){'use strict';
class MatchGame{
 constructor(data,{level=1,seed=Date.now(),snapshot=null}={}){
  this.data=data;this.level=Math.max(1,Math.min(data.levels.length,Number(level)||1));this.plan=data.levels[this.level-1];this.targets=new Set(this.plan.targets);this.selected=null;
  const old=snapshot&&typeof snapshot==='object'?snapshot:null;
  if(old?.schema===60&&this.valid(old)){
   this.s=JSON.parse(JSON.stringify(old));
   if(!this.s.mixedCardsV601){
    this.s.board=this.shuffled(this.s.board);
    this.s.pool=this.shuffled(this.s.pool);
    this.s.mixedCardsV601=true;
   }
   return;
  }
  this.s={schema:60,mixedCardsV601:true,level:this.level,rng:(Number(old?.rng??seed)>>>0)||350129,serial:Number.isSafeInteger(old?.serial)?old.serial:0,board:[],done:[],released:[],ordinary:0,combo:0,bestCombo:0,score:0,pairs:0,finished:false,cycle:0,pool:[],poolIds:[],poolCursor:0,fillerBag:[],targetCursor:0,reviewPending:[],reviewQueued:[]};
  // Existing V59 in-progress rounds retain points/progress; redeal to avoid stranded halves.
  if(old&&old.level===this.level&&[35,37].includes(old.schema)){
   for(const key of ['ordinary','combo','bestCombo','score','pairs'])if(Number.isSafeInteger(old[key]))this.s[key]=old[key];
   if(Array.isArray(old.done))this.s.done=[...new Set(old.done.filter(w=>this.targets.has(w)))];
   this.s.finished=!!old.finished&&this.s.done.length===10&&this.s.pairs>=160;
  }
  this.s.board=this.makeBatch();
 }
 valid(s){
  const tile=t=>t&&typeof t.id==='string'&&this.data.words[t.word]&&['en','zh'].includes(t.lang);
  return s.schema===60&&s.level===this.level&&Number.isSafeInteger(s.rng)&&Number.isSafeInteger(s.serial)&&s.serial>=0&&Array.isArray(s.board)&&s.board.length===32&&s.board.every(tile)&&Array.isArray(s.pool)&&s.pool.every(tile)&&s.pool.length<=32&&s.pool.length%2===0&&Array.isArray(s.done)&&new Set(s.done).size===s.done.length&&s.done.every(w=>this.targets.has(w))&&['ordinary','combo','bestCombo','pairs','cycle','targetCursor'].every(k=>Number.isSafeInteger(s[k])&&s[k]>=0)&&Number.isSafeInteger(s.score)&&typeof s.finished==='boolean'&&s.finished===(s.done.length===10&&s.pairs>=160)&&Array.isArray(s.fillerBag)&&Array.isArray(s.reviewPending)&&Array.isArray(s.reviewQueued)&&new Set(s.board.concat(s.pool).map(t=>t.id)).size===s.board.length+s.pool.length;
 }
 rand(){let x=this.s.rng;x^=x<<13;x^=x>>>17;x^=x<<5;this.s.rng=x>>>0;return this.s.rng/4294967296;}
 shuffled(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(this.rand()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
 pair(word){return ['en','zh'].map(lang=>({id:'m'+this.level+'-'+(++this.s.serial),word,lang}));}
 takeFillers(count,exclude=[]){
  const allowed=this.data.fillerIds.filter(w=>!this.targets.has(w)&&!exclude.includes(w));const out=[];
  if(allowed.length<count)throw Error('Not enough distinct corpus words');
  while(out.length<count){if(!this.s.fillerBag.length)this.s.fillerBag=this.shuffled(allowed);const word=this.s.fillerBag.pop();if(allowed.includes(word)&&!out.includes(word))out.push(word);}return out;
 }
 nextTarget(){const a=this.plan.targets;
  for(let step=0;step<a.length;step++){const i=(this.s.targetCursor+step)%a.length,w=a[i];if(!this.s.done.includes(w)){this.s.targetCursor=i+1;return w;}}
  const w=a[this.s.targetCursor%a.length];this.s.targetCursor++;return w;
 }
 makeBatch(){
  let reviewTarget=this.s.reviewPending.find(w=>this.targets.has(w));
  const target=reviewTarget||this.nextTarget();
  if(reviewTarget)this.s.reviewPending.splice(this.s.reviewPending.indexOf(reviewTarget),1);
  const reminders=[];for(const word of this.s.reviewPending){if(reminders.length===15)break;if(!this.targets.has(word)&&this.data.words[word]&&!reminders.includes(word))reminders.push(word);}
  this.s.reviewPending=this.s.reviewPending.filter(w=>!reminders.includes(w));
  const words=this.shuffled([target,...reminders,...this.takeFillers(15-reminders.length,[target,...reminders])]);
  this.s.poolIds=words.slice();this.s.cycle++;
  // Shuffle all 32 individual cards, not just the 16 pair blocks.
  return this.shuffled(words.flatMap(w=>this.pair(w)));
 }
 draw(count){const cards=[];while(cards.length<count){if(!this.s.pool.length)this.s.pool=this.makeBatch();cards.push(...this.s.pool.splice(0,Math.min(2,count-cards.length)));}
  for(const t of cards)if(this.targets.has(t.word)&&!this.s.released.includes(t.word))this.s.released.push(t.word);return cards;
 }
 meaning(t){return (this.plan.meanings?.[t.word]||this.data.words[t.word].zh).trim();}
 matching(a,b){return !!a&&!!b&&a.id!==b.id&&a.lang!==b.lang&&this.meaning(a)===this.meaning(b);}
 availablePairs(board=this.s.board){const groups=new Map();for(const t of board){const key=this.meaning(t),n=groups.get(key)||{en:0,zh:0};n[t.lang]++;groups.set(key,n);}return [...groups.values()].reduce((n,g)=>n+Math.min(g.en,g.zh),0);}
 collapse(removed){const prior=this.s.board.slice(),fresh=this.draw(2),result=Array(32);let pos=0;
  for(let col=0;col<4;col++){const keep=[];for(let row=0;row<8;row++){const t=prior[row*4+col];if(!removed.includes(t.id))keep.push(t);}const holes=8-keep.length;for(let row=0;row<holes;row++)result[row*4+col]=fresh[pos++];for(let i=0;i<keep.length;i++)result[(holes+i)*4+col]=keep[i];}
  this.s.board=result;
  // If random queue boundaries strand the matching halves, redeal a playable batch.
  if(!this.availablePairs()){
   this.s.pool=[];
   this.s.board=this.makeBatch();
   return this.s.board.map(t=>t.id);
  }
  return fresh.map(t=>t.id);
 }
 select(id){
  if(this.s.finished)return {kind:'noop'};const b=this.s.board.find(t=>t.id===id);if(!b)return {kind:'noop'};
  if(this.selected===id){this.selected=null;return {kind:'selected',id:null};}if(!this.selected){this.selected=id;return {kind:'selected',id};}
  const a=this.s.board.find(t=>t.id===this.selected);this.selected=null;if(!this.matching(a,b)){this.s.combo=0;return {kind:'wrong',ids:[a.id,b.id]};}
  const word=(a.lang==='en'?a:b).word,firstTarget=this.targets.has(word)&&!this.s.done.includes(word);if(firstTarget)this.s.done.push(word);else this.s.ordinary++;
  this.s.pairs++;this.s.combo++;this.s.bestCombo=Math.max(this.s.bestCombo,this.s.combo);const phase=this.s.combo%10,bonus=phase===3?2:phase===5?5:phase===0?10:0,base=firstTarget?2:1;this.s.score+=base+bonus;
  this.s.finished=this.s.done.length===10&&this.s.pairs>=160;
  const previous=this.s.board.slice(),removed=[a.id,b.id],newIds=this.collapse(removed);
  return {kind:'match',word,firstTarget,base,bonus,combo:this.s.combo,ids:removed,newIds,previous,finished:this.s.finished};
 }
 hint(){const pairs=[];for(let i=0;i<32;i++)for(let j=i+1;j<32;j++)if(this.matching(this.s.board[i],this.s.board[j]))pairs.push([this.s.board[i],this.s.board[j]]);const target=pairs.find(p=>p.some(t=>t.lang==='en'&&this.targets.has(t.word)&&!this.s.done.includes(t.word)));return (target||pairs[0]||[]).map(t=>t.id);}
 queueReview(word){if(!this.data.words[word])return;
  // Inject into the next prepared batch (if possible), retaining exactly one target.
  const pool=this.s.pool,existing=pool.some(t=>t.word===word);
  if(!existing&&pool.length>=2){
   // The pending queue is fully shuffled: locate the two halves by word, not by adjacency.
   const eligible=[...new Set(pool.map(t=>t.word))].filter(w=>
    this.targets.has(w)===this.targets.has(word)&&
    pool.filter(t=>t.word===w).length===2);
   if(eligible.length){
    const replaced=eligible[0],indices=pool.map((t,i)=>t.word===replaced?i:-1).filter(i=>i>=0);
    const cards=this.shuffled(this.pair(word));
    indices.forEach((i,j)=>{pool[i]=cards[j];});
    if(this.targets.has(word)&&!this.s.done.includes(replaced)&&!this.s.reviewPending.includes(replaced))this.s.reviewPending.push(replaced);
    this.s.reviewQueued.push(word);return;
   }
  }
  if(!existing&&!this.s.reviewPending.includes(word))this.s.reviewPending.push(word);
 }
 useHint(){if(this.s.finished)return [];const ids=this.hint();if(!ids.length)return [];this.s.score-=10;const tile=this.s.board.find(t=>t.id===ids[0]);if(tile)this.queueReview(tile.word);return ids;}
 newBatch(){this.selected=null;for(const w of this.s.reviewQueued){if(this.s.pool.some(t=>t.word===w)&&!this.s.reviewPending.includes(w))this.s.reviewPending.push(w);}this.s.reviewQueued=[];this.s.pool=[];this.s.board=this.makeBatch();return this.s.board;}
 shuffle(){return this.newBatch();}
 snapshot(){return JSON.parse(JSON.stringify(this.s));}
 static stars(bestCombo){return bestCombo>=10?3:bestCombo>=5?2:1;}
}
root.WMMatchEngine=MatchGame;if(typeof module!=='undefined'&&module.exports)module.exports=MatchGame;
})(typeof window!=='undefined'?window:globalThis);
