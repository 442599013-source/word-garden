/* Bilingual phrase building, then individual-word building, then recall. */
(function(root){'use strict';const mix=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}if(a.length>1&&a.every((n,i)=>n===i))a.push(a.shift());return a};class Lesson{
 constructor(row,{placed=0,phase='demo',order=null,wordPlaced=0,wordOrder=null}={}){this.row=row;this.phraseParts=row.phrases||[];const matches=String(row.en||'').match(/\S+/g)||[];this.words=matches.filter(w=>/[A-Za-z0-9]/.test(w)).map(w=>({en:w.replace(/^[“"(]+|[.,!?;:)”"]+$/g,''),cn:''}));this.phase=['demo','build','wordbuild','input','done'].includes(phase)?phase:'demo';this.phrasePlaced=Math.max(0,Math.min(placed,this.phraseParts.length));this.wordPlaced=Math.max(0,Math.min(wordPlaced,this.words.length));const valid=(a,n)=>Array.isArray(a)&&a.length===n&&new Set(a).size===n&&a.every(i=>Number.isInteger(i)&&i>=0&&i<n);this.phraseOrder=valid(order,this.phraseParts.length)?order.slice():mix(this.phraseParts.map((_,i)=>i));this.wordOrder=valid(wordOrder,this.words.length)?wordOrder.slice():mix(this.words.map((_,i)=>i))}
 get phrases(){return this.phase==='wordbuild'?this.words:this.phraseParts}
 get placed(){return this.phase==='wordbuild'?this.wordPlaced:this.phrasePlaced}
 get order(){return this.phase==='wordbuild'?this.wordOrder:this.phraseOrder}
 begin(){this.phase='build';this.phrasePlaced=0}
 beginWords(){this.phase='wordbuild';this.wordPlaced=0}
 canAccept(index){const p=this.phrases[index],next=this.phrases[this.placed];return ['build','wordbuild'].includes(this.phase)&&!!p&&!!next&&(index===this.placed||p.en.toLowerCase()===next.en.toLowerCase()&&p.cn===next.cn)}
 accept(index){if(!this.canAccept(index))return false;if(this.phase==='wordbuild')this.wordPlaced++;else this.phrasePlaced++;return true}
 get assembled(){return this.phrases.length>0&&this.placed===this.phrases.length}
 snapshot(){return {placed:this.phrasePlaced,phase:this.phase,order:this.phraseOrder.slice(),wordPlaced:this.wordPlaced,wordOrder:this.wordOrder.slice()}}
}root.WMPhraseLesson=Lesson;if(typeof module!=='undefined')module.exports=Lesson;
})(typeof window!=='undefined'?window:globalThis);