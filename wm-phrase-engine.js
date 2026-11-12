/* Ordered bilingual phrase teaching, independent of speech/UI timing. */
(function(root){'use strict';class Lesson{
 constructor(row,{placed=0,phase='demo',order=null}={}){this.row=row;this.phrases=row.phrases||[];this.placed=Math.max(0,Math.min(placed,this.phrases.length));this.phase=['demo','build','input','done'].includes(phase)?phase:'demo';this.order=order&&new Set(order).size===this.phrases.length&&order.every(i=>Number.isInteger(i)&&i>=0&&i<this.phrases.length)?order.slice():this.phrases.map((_,i)=>i);if(!order){for(let i=this.order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[this.order[i],this.order[j]]=[this.order[j],this.order[i]]}if(this.order.length>1&&this.order.every((n,i)=>n===i))this.order.push(this.order.shift())}}
 begin(){this.phase='build';this.placed=0}
 canAccept(index){const p=this.phrases[index],next=this.phrases[this.placed];return this.phase==='build'&&!!p&&!!next&&(index===this.placed||p.en===next.en&&p.cn===next.cn)}
 accept(index){if(!this.canAccept(index))return false;this.placed++;return true}
 get assembled(){return this.phrases.length>0&&this.placed===this.phrases.length}
 snapshot(){return {placed:this.placed,phase:this.phase,order:this.order.slice()}}
}
root.WMPhraseLesson=Lesson;if(typeof module!=='undefined')module.exports=Lesson;
})(typeof window!=='undefined'?window:globalThis);
