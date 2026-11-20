/* Deal up to 10 pairs per batch. Shuffle 20 individual tiles, never paired drops.
   Keep both halves within the batch so clearing the board never requires a reshuffle. */
(function(root){'use strict';
class MatchGame{
 constructor(data,{level=1,seed=Date.now(),snapshot=null,reviews=[],reviewMeanings={}}={}){
  this.data=data;this.level=Math.max(1,Math.min(data.levels.length,Number(level)||1));this.plan=data.levels[this.level-1];this.targets=new Set();this.selected=null;
  this.previewPairs=this.plan.previewPairs||0;
  const incoming=[...new Set(reviews)].filter(w=>data.words[w]);
  const words=[...new Set([...(this.plan.sourceWordIds||[]),...incoming])].filter(w=>data.words[w]);
  const sameRound=snapshot?.schema===6427&&snapshot.courseId===data.courseId&&snapshot.level===this.level&&
   Array.isArray(snapshot.levelWords)&&Array.isArray(snapshot.done)&&Number.isSafeInteger(snapshot.score)&&
   Number.isSafeInteger(snapshot.rng)&&Number.isSafeInteger(snapshot.serial);
  if(sameRound&&snapshot.batchFormat===(this.previewPairs?2:1)&&words.length===snapshot.levelWords.length&&
     words.every(w=>snapshot.levelWords.includes(w))){
   this.s=JSON.parse(JSON.stringify(snapshot));
   this.s.meanings={...reviewMeanings,...this.s.meanings,...this.plan.meanings};
   return;
  }
  const done=sameRound?[...new Set(snapshot.done.filter(w=>words.includes(w)))]:[];
  this.s={
   ...(sameRound?snapshot:{}),
   schema:6427,batchFormat:this.previewPairs?2:1,meanings:{...reviewMeanings,...this.plan.meanings},courseId:data.courseId,level:this.level,
   rng:(sameRound?snapshot.rng:Number(seed)>>>0)||350129,serial:sameRound?snapshot.serial:0,
   board:[],pool:[],preview:[],done,released:[],
   ordinary:sameRound?snapshot.ordinary||0:0,combo:sameRound?snapshot.combo||0:0,bestCombo:sameRound?snapshot.bestCombo||0:0,
   score:sameRound?snapshot.score:0,pairs:done.length,finished:false,cycle:sameRound?snapshot.cycle||0:0,
   reviewOut:sameRound?(snapshot.reviewOut||[]).filter(w=>data.words[w]):[],
   reviewPending:[],reviewQueued:[],incomingReviews:incoming,levelWords:words,
   v64Reviews:Object.fromEntries(incoming.map(w=>[w,1]))
  };
  this.s.pool=this.shuffled(words.filter(w=>!done.includes(w)));
  this.dealBatch();
 }
 dealBatch(){
  if(this.previewPairs)return this.fillBoard();
  const words=this.takeBatch();
  this.s.board=this.place(this.batchTiles(words));
  this.s.finished=!words.length;
  return this.s.board.map(tile=>tile.id);
 }
 takeBatch(){
  const active=new Set(this.s.board.map(tile=>tile.word));
  const reviews=this.s.reviewPending.filter(word=>!active.has(word)).slice(0,10);
  this.s.reviewPending=this.s.reviewPending.filter(word=>!reviews.includes(word));
  this.s.reviewQueued.push(...reviews);
  return [...reviews,...this.s.pool.splice(0,10-reviews.length)];
 }
 fillBoard(){
  const board=this.s.board;
  const added=[];
  const append=(words)=>{
   const tiles=this.batchTiles(words);
   const occupied=new Set(board.map(tile=>tile.slot));
   const slots=Array.from({length:32},(_,i)=>i).filter(slot=>!occupied.has(slot)).slice(-tiles.length);
   tiles.forEach((tile,i)=>{tile.slot=slots[i];board.push(tile);added.push(tile.id);});
  };
  if(!board.length&&!this.s.preview.length)append(this.takeBatch());
  for(let free=(32-board.length)/2;free>0;free=(32-board.length)/2){
   if(!this.s.preview.length)this.s.preview=this.takeBatch();
   if(!this.s.preview.length)break;
   append(this.s.preview.splice(0,Math.min(free,this.previewPairs)));
  }
  board.sort((a,b)=>a.slot-b.slot);
  this.s.finished=!board.length;
  return added;
 }
 batchTiles(words){
  const tiles=words.flatMap(word=>this.pair(word));
  let shuffled=this.shuffled(tiles);
  if(words.length>1){
   for(let attempt=0;attempt<16&&shuffled.some((tile,i)=>tile.word===shuffled[i+1]?.word);attempt++){
    shuffled=this.shuffled(tiles);
   }
   if(shuffled.some((tile,i)=>tile.word===shuffled[i+1]?.word)){
    // Keep counterparts apart even when the random draws repeatedly place them together.
    const seen=new Set();
    const firstHalf=shuffled.filter(tile=>{
     if(seen.has(tile.word))return false;
     seen.add(tile.word);
     return true;
    });
    const secondHalf=firstHalf.map(tile=>tiles.find(other=>other.word===tile.word&&other.lang!==tile.lang));
    shuffled=[...firstHalf,...secondHalf];
   }
  }
  return shuffled;
 }
 rand(){let x=this.s.rng;x^=x<<13;x^=x>>>17;x^=x<<5;this.s.rng=x>>>0;return this.s.rng/4294967296;}
 shuffled(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(this.rand()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
 pair(word){return ['en','zh'].map(lang=>({id:'m'+this.level+'-'+(++this.s.serial),word,lang}));}
 place(cards){cards.forEach((t,i)=>t.slot=32-cards.length+i);return cards;}
 meaning(t){return (this.s.meanings?.[t.word]||this.plan.meanings?.[t.word]||this.data.words[t.word].zh).trim();}
 matching(a,b){return !!a&&!!b&&a.id!==b.id&&a.lang!==b.lang&&this.meaning(a)===this.meaning(b);}
 availablePairs(board=this.s.board){const m=new Map();for(const t of board){const key=this.meaning(t),row=m.get(key)||{en:0,zh:0};row[t.lang]++;m.set(key,row)}return [...m.values()].reduce((n,g)=>n+Math.min(g.en,g.zh),0);}
 collapse(removed){
  const board=this.s.board.filter(tile=>!removed.includes(tile.id));
  if(!board.length&&!this.previewPairs){this.s.board=board;return this.dealBatch();}
  for(let col=0;col<4;col++){
   const column=board.filter(tile=>tile.slot%4===col).sort((a,b)=>a.slot-b.slot);
   column.forEach((tile,i)=>{tile.slot=(8-column.length+i)*4+col});
  }
  this.s.board=board.sort((a,b)=>a.slot-b.slot);
  return this.previewPairs?this.fillBoard():[];
 }
 select(id){if(this.s.finished)return {kind:'noop'};const b=this.s.board.find(t=>t.id===id);if(!b)return {kind:'noop'};
  if(this.selected===id){this.selected=null;return {kind:'selected',id:null}}if(!this.selected){this.selected=id;return {kind:'selected',id}}
  const a=this.s.board.find(t=>t.id===this.selected);this.selected=null;if(!a)return {kind:'noop'};
  if(!this.matching(a,b)){const reviewWords=[...new Set([a.word,b.word])];reviewWords.forEach(w=>this.queueReview(w));this.s.combo=0;return {kind:'wrong',ids:[a.id,b.id],reviewWords};}
  const word=(a.lang==='en'?a:b).word;if(!this.s.done.includes(word)){this.s.done.push(word);this.s.pairs++}this.s.ordinary++;this.s.combo++;this.s.bestCombo=Math.max(this.s.bestCombo,this.s.combo);
  const bonus=({10:2,20:5,30:10})[this.s.combo]||0,rewardTier=({10:3,20:5,30:10})[this.s.combo]||0,base=1;this.s.score+=base+bonus;
  const previous=this.s.board.map(t=>({...t})),removed=[a.id,b.id],newIds=this.collapse(removed);
  return {kind:'match',word,firstTarget:false,base,bonus,rewardTier,combo:this.s.combo,ids:removed,newIds,previous,finished:this.s.finished};
 }
 hint(){for(let i=0;i<this.s.board.length;i++)for(let j=i+1;j<this.s.board.length;j++)if(this.matching(this.s.board[i],this.s.board[j]))return [this.s.board[i].id,this.s.board[j].id];return [];}
 queueReview(word){if(!this.s.reviewOut.includes(word))this.s.reviewOut.push(word);
  // Revisit a weak word once in this level, and retain it for next-level review.
  if(!this.s.reviewQueued.includes(word)&&!this.s.reviewPending.includes(word))this.s.reviewPending.push(word);}
 useHint(){if(this.s.finished)return [];const ids=this.hint();if(!ids.length)return [];this.s.score-=10;const t=this.s.board.find(t=>ids.includes(t.id)&&t.lang==='en');if(t)this.queueReview(t.word);return ids;}
 newBatch(){
  this.selected=null;
  this.s.board=this.place(this.shuffled(this.s.board));
  this.s.cycle++;
  return this.s.board;
 }

 shuffle(){return this.newBatch();}
 snapshot(){return JSON.parse(JSON.stringify(this.s));}
 static stars(bestCombo){return bestCombo>=10?3:bestCombo>=5?2:1;}
}
root.WMMatchEngine=MatchGame;if(typeof module!=='undefined'&&module.exports)module.exports=MatchGame;
})(typeof window!=='undefined'?window:globalThis);
