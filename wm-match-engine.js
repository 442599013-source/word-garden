/* Pure matching/scoring engine. Scores are integer tenths, separate from learning counters. */
(function(root){'use strict';
class MatchGame{
 constructor(data,{level=1,seed=Date.now(),snapshot=null}={}){this.data=data;this.level=Math.max(1,Math.min(data.levels.length,Number(level)||1));this.plan=data.levels[this.level-1];this.targets=new Set(this.plan.targets);this.selected=null;
  if(snapshot&&this.valid(snapshot)){this.s=JSON.parse(JSON.stringify(snapshot));return;}
  this.s={level:this.level,rng:(Number(seed)>>>0)||320129,serial:0,board:[],done:[],released:[],ordinary:0,nextAt:0,combo:0,bestCombo:0,score:0,pairs:0,finished:false};this.s.nextAt=this.gap();const ids=this.shuffled(data.fillerIds.filter(id=>!this.targets.has(id))).slice(0,16);for(const id of ids)this.s.board.push(...this.pair(id));this.s.board=this.shuffled(this.s.board);
 }
 valid(s){return s.level===this.level&&Number.isInteger(s.rng)&&Number.isInteger(s.serial)&&s.serial>=0&&Array.isArray(s.board)&&s.board.length===32&&new Set(s.board.map(t=>t.id)).size===32&&s.board.every(t=>this.data.words[t.word]&&['en','zh'].includes(t.lang))&&['done','released'].every(k=>Array.isArray(s[k])&&new Set(s[k]).size===s[k].length&&s[k].every(id=>this.targets.has(id)))&&['ordinary','nextAt','combo','bestCombo','score','pairs'].every(k=>Number.isSafeInteger(s[k])&&s[k]>=0)&&s.done.every(id=>s.released.includes(id))&&typeof s.finished==='boolean'&&s.finished===(s.done.length===10)&&this.availablePairs(s.board)>=3;}
 rand(){let x=this.s.rng;x^=x<<13;x^=x>>>17;x^=x<<5;this.s.rng=x>>>0;return this.s.rng/4294967296;}
 shuffled(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(this.rand()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
 gap(){return 5+Math.floor(this.rand()*6);}
 pair(word){return ['en','zh'].map(lang=>({id:'m'+this.level+'-'+(++this.s.serial),word,lang}));}
 meaning(t){return (this.plan.meanings?.[t.word]||this.data.words[t.word].zh).trim();}
 matching(a,b){return !!a&&!!b&&a.id!==b.id&&a.lang!==b.lang&&this.meaning(a)===this.meaning(b);}
 availablePairs(board=this.s.board){const groups=new Map();for(const t of board){const key=this.meaning(t),n=groups.get(key)||{en:0,zh:0};n[t.lang]++;groups.set(key,n);}return [...groups.values()].reduce((n,g)=>n+Math.min(g.en,g.zh),0);}
 filler(){const visible=new Set(this.s.board.map(t=>t.word));const allowed=this.data.fillerIds.concat(this.s.done).filter(id=>!this.targets.has(id)||this.s.done.includes(id));const fresh=allowed.filter(id=>!visible.has(id));const pool=fresh.length?fresh:allowed;return pool[Math.floor(this.rand()*pool.length)];}
 nextPair(){if(this.s.ordinary>=this.s.nextAt&&this.s.released.length<10){const choices=this.plan.targets.filter(id=>!this.s.released.includes(id)),word=choices[Math.floor(this.rand()*choices.length)];this.s.released.push(word);this.s.nextAt=this.s.ordinary+this.gap();return this.pair(word);}return this.pair(this.filler());}
 collapse(removed){const prior=this.s.board.slice(),fresh=this.nextPair();let pos=0;const result=Array(32);for(let col=0;col<4;col++){const keep=[];for(let row=0;row<8;row++){const t=prior[row*4+col];if(!removed.includes(t.id))keep.push(t);}const holes=8-keep.length;for(let row=0;row<holes;row++)result[row*4+col]=fresh[pos++];for(let i=0;i<keep.length;i++)result[(holes+i)*4+col]=keep[i];}this.s.board=result;return fresh.map(t=>t.id);}
 select(id){if(this.s.finished)return {kind:'noop'};const b=this.s.board.find(t=>t.id===id);if(!b)return {kind:'noop'};if(this.selected===id){this.selected=null;return {kind:'selected',id:null};}if(!this.selected){this.selected=id;return {kind:'selected',id};}const a=this.s.board.find(t=>t.id===this.selected);this.selected=null;if(!this.matching(a,b)){this.s.combo=0;return {kind:'wrong',ids:[a.id,b.id]};}
  const word=(a.lang==='en'?a:b).word,firstTarget=this.targets.has(word)&&!this.s.done.includes(word);if(firstTarget)this.s.done.push(word);else this.s.ordinary++;
  this.s.pairs++;this.s.combo++;this.s.bestCombo=Math.max(this.s.bestCombo,this.s.combo);const phase=this.s.combo%10,bonus=phase===3?2:phase===5?5:phase===0?10:0,base=firstTarget?2:1;this.s.score+=base+bonus;this.s.finished=this.s.done.length===10;const previous=this.s.board.slice(),removed=[a.id,b.id],newIds=this.collapse(removed);
  if(this.availablePairs()<3)throw Error('Matching invariant violated');return {kind:'match',word,firstTarget,base,bonus,combo:this.s.combo,ids:removed,newIds,previous,finished:this.s.finished};
 }
 hint(){let pairs=[];for(let i=0;i<32;i++)for(let j=i+1;j<32;j++)if(this.matching(this.s.board[i],this.s.board[j]))pairs.push([this.s.board[i],this.s.board[j]]);const target=pairs.find(p=>p.some(t=>t.lang==='en'&&this.targets.has(t.word)&&!this.s.done.includes(t.word)));return (target||pairs[0]||[]).map(t=>t.id);}
 shuffle(){this.selected=null;this.s.board=this.shuffled(this.s.board);return this.s.board;}
 snapshot(){return JSON.parse(JSON.stringify(this.s));}
}
root.WMMatchEngine=MatchGame;if(typeof module!=='undefined'&&module.exports)module.exports=MatchGame;
})(typeof window!=='undefined'?window:globalThis);
