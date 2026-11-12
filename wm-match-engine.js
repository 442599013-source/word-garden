/* V64.27: finite level vocabulary; weak words are reviewed in the next level only. */
(function(root){'use strict';
class MatchGame{
 constructor(data,{level=1,seed=Date.now(),snapshot=null,reviews=[],reviewMeanings={}}={}){
  this.data=data;this.level=Math.max(1,Math.min(data.levels.length,Number(level)||1));this.plan=data.levels[this.level-1];this.targets=new Set();this.selected=null;
  const incoming=[...new Set(reviews)].filter(w=>data.words[w]);
  const words=[...new Set([...(this.plan.sourceWordIds||[]),...incoming])].filter(w=>data.words[w]);
  if(snapshot?.schema===6427&&snapshot.courseId===data.courseId&&snapshot.level===this.level&&Array.isArray(snapshot.levelWords)&&Array.isArray(snapshot.done)&&Number.isSafeInteger(snapshot.score)&&Number.isSafeInteger(snapshot.rng)&&Number.isSafeInteger(snapshot.serial)&&(!snapshot.levelWords.every(w=>words.includes(w))||!words.every(w=>snapshot.levelWords.includes(w)))){
   this.s=JSON.parse(JSON.stringify(snapshot));this.s.meanings={...reviewMeanings,...this.plan.meanings};this.s.levelWords=words;this.s.done=[...new Set(this.s.done.filter(w=>words.includes(w)))];this.s.pairs=this.s.done.length;this.s.reviewOut=(this.s.reviewOut||[]).filter(w=>data.words[w]);this.s.mixedV6428=true;this.s.pool=this.shuffled(words.filter(w=>!this.s.done.includes(w)).flatMap(w=>this.pair(w)));this.s.board=this.place(this.draw(32));this.ensurePlayable();this.s.finished=!this.s.board.length&&!this.s.pool.length;return;
  }
  if(snapshot?.schema===6427&&snapshot.courseId===data.courseId&&snapshot.level===this.level&&this.valid(snapshot)){this.s=JSON.parse(JSON.stringify(snapshot));this.s.meanings={...this.s.meanings,...this.plan.meanings};if(!this.s.mixedV6428){this.newBatch();this.s.mixedV6428=true}return;}
  this.s={schema:6427,mixedV6428:true,meanings:{...reviewMeanings,...this.plan.meanings},courseId:data.courseId,level:this.level,rng:(Number(seed)>>>0)||350129,serial:0,board:[],pool:[],done:[],released:[],ordinary:0,combo:0,bestCombo:0,score:0,pairs:0,finished:false,cycle:0,reviewOut:[],reviewPending:[],reviewQueued:[],incomingReviews:incoming,levelWords:words,v64Reviews:Object.fromEntries(incoming.map(w=>[w,1]))};
  this.s.pool=this.shuffled(words.flatMap(w=>this.pair(w)));this.s.board=this.draw(Math.min(32,this.s.pool.length));this.place(this.s.board);this.ensurePlayable();this.s.finished=!words.length;
 }
 valid(s){const cards=[...(s.board||[]),...(s.pool||[])];return Array.isArray(s.board)&&s.board.length<=32&&Array.isArray(s.pool)&&Array.isArray(s.levelWords)&&Array.isArray(s.reviewOut)&&Number.isSafeInteger(s.rng)&&Number.isSafeInteger(s.serial)&&cards.every(t=>t&&typeof t.id==='string'&&this.data.words[t.word]&&['en','zh'].includes(t.lang))&&new Set(cards.map(t=>t.id)).size===cards.length&&cards.length%2===0&&s.finished===(cards.length===0);}
 rand(){let x=this.s.rng;x^=x<<13;x^=x>>>17;x^=x<<5;this.s.rng=x>>>0;return this.s.rng/4294967296;}
 shuffled(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(this.rand()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
 pair(word){return ['en','zh'].map(lang=>({id:'m'+this.level+'-'+(++this.s.serial),word,lang}));}
 place(cards){cards.forEach((t,i)=>t.slot=32-cards.length+i);return cards;}
 draw(count){return this.s.pool.splice(0,Math.min(count,this.s.pool.length));}
 meaning(t){return (this.s.meanings?.[t.word]||this.plan.meanings?.[t.word]||this.data.words[t.word].zh).trim();}
 matching(a,b){return !!a&&!!b&&a.id!==b.id&&a.lang!==b.lang&&this.meaning(a)===this.meaning(b);}
 availablePairs(board=this.s.board){const m=new Map();for(const t of board){const key=this.meaning(t),row=m.get(key)||{en:0,zh:0};row[t.lang]++;m.set(key,row)}return [...m.values()].reduce((n,g)=>n+Math.min(g.en,g.zh),0);}
 collapse(removed){const before=this.s.board,fresh=this.draw(2),out=[];let at=0;
  for(let col=0;col<4;col++){const keep=before.filter(t=>!removed.includes(t.id)&&(t.slot??before.indexOf(t))%4===col).sort((a,b)=>a.slot-b.slot);const holes=8-keep.length;
   const fill=Math.min(holes,fresh.length-at);for(let i=0;i<fill;i++){const t=fresh[at++];t.slot=(holes-fill+i)*4+col;out.push(t)}
   keep.forEach((t,i)=>{t.slot=(holes+i)*4+col;out.push(t)});
  }
  this.s.board=out.sort((a,b)=>a.slot-b.slot);const rescued=this.ensurePlayable();return [...fresh.map(t=>t.id),...rescued];
 }
 select(id){if(this.s.finished)return {kind:'noop'};const b=this.s.board.find(t=>t.id===id);if(!b)return {kind:'noop'};
  if(this.selected===id){this.selected=null;return {kind:'selected',id:null}}if(!this.selected){this.selected=id;return {kind:'selected',id}}
  const a=this.s.board.find(t=>t.id===this.selected);this.selected=null;if(!a)return {kind:'noop'};
  if(!this.matching(a,b)){const reviewWords=[...new Set([a.word,b.word])];reviewWords.forEach(w=>this.queueReview(w));this.s.combo=0;return {kind:'wrong',ids:[a.id,b.id],reviewWords};}
  const word=(a.lang==='en'?a:b).word;this.s.pairs++;this.s.ordinary++;this.s.combo++;this.s.bestCombo=Math.max(this.s.bestCombo,this.s.combo);this.s.done.push(word);
  const bonus=({10:2,20:5,30:10})[this.s.combo]||0,rewardTier=({10:3,20:5,30:10})[this.s.combo]||0,base=1;this.s.score+=base+bonus;
  const previous=this.s.board.map(t=>({...t})),removed=[a.id,b.id],newIds=this.collapse(removed);this.s.finished=this.s.board.length===0&&this.s.pool.length===0;
  return {kind:'match',word,firstTarget:false,base,bonus,rewardTier,combo:this.s.combo,ids:removed,newIds,previous,finished:this.s.finished};
 }
 hint(){for(let i=0;i<this.s.board.length;i++)for(let j=i+1;j<this.s.board.length;j++)if(this.matching(this.s.board[i],this.s.board[j]))return [this.s.board[i].id,this.s.board[j].id];return [];}
 queueReview(word){if(this.data.words[word]&&!this.s.reviewOut.includes(word))this.s.reviewOut.push(word);}
 useHint(){if(this.s.finished)return [];const ids=this.hint();if(!ids.length)return [];this.s.score-=10;const t=this.s.board.find(t=>ids.includes(t.id)&&t.lang==='en');if(t)this.queueReview(t.word);return ids;}
 ensurePlayable(){if(!this.s.board.length||this.availablePairs())return [];for(const tile of this.s.board){const pi=this.s.pool.findIndex(other=>this.matching(tile,other));if(pi<0)continue;const bi=this.s.board.findIndex(t=>t.id!==tile.id);if(bi<0)continue;const brought=this.s.pool[pi],removed=this.s.board[bi];brought.slot=removed.slot;delete removed.slot;this.s.pool[pi]=removed;this.s.board[bi]=brought;return [brought.id]}return []}
 newBatch(){this.selected=null;this.s.pool=this.shuffled([...this.s.board,...this.s.pool]);this.s.board=this.place(this.draw(32));this.ensurePlayable();this.s.cycle++;return this.s.board;}

 shuffle(){return this.newBatch();}
 snapshot(){return JSON.parse(JSON.stringify(this.s));}
 static stars(bestCombo){return bestCombo>=10?3:bestCombo>=5?2:1;}
}
root.WMMatchEngine=MatchGame;if(typeof module!=='undefined'&&module.exports)module.exports=MatchGame;
})(typeof window!=='undefined'?window:globalThis);
