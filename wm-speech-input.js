/* One focus-free browser recognition lifecycle. No audio upload or cloud key. */
(()=>{'use strict';
const norm=s=>String(s??'').toLowerCase().replace(/[’‘]/g,"'").replace(/[.,!?;:]/g,'').trim().replace(/\s+/g,' ');
const errors={'not-allowed':'Allow microphone access · 请允许麦克风和语音识别权限','service-not-allowed':'Retry or type · 浏览器识别服务不可用，请重试或用网页键盘输入','no-speech':'No speech detected · 没有识别到说话，请重试','audio-capture':'Microphone unavailable · 麦克风未就绪，请重试',network:'Recognition connection failed · 语音识别连接失败，请重试',aborted:'Retry · 语音识别已停止，可重新跟读'};
class Session{
 constructor({prepare=()=>{},target=()=>'',onState=()=>{},onStatus=()=>{},onText=()=>{},onUnavailable=()=>{}}={}){Object.assign(this,{prepare,target,onState,onStatus,onText,onUnavailable});this.state='idle';this.token=0;this.timers=[];this.rec=null;this.events=[]}
 log(event,code=''){this.events.push({event,code,at:Date.now()});this.events=this.events.slice(-24);window.WMSpeechDiagnostics=this.events.slice()}
 later(fn,ms){const t=setTimeout(fn,ms);this.timers.push(t);return t}
 stateTo(s){this.state=s;this.onState(s)}
 cancel(){++this.token;this.timers.forEach(clearTimeout);this.timers=[];const r=this.rec;this.rec=null;if(r){r.onstart=r.onresult=r.onerror=r.onend=r.onspeechend=r.onnomatch=null;try{r.abort()}catch{}}this.stateTo('idle')}
 finish(token,message){if(token!==this.token)return;this.cancel();this.onStatus(message)}
 stop(){if(this.state==='preparing'||this.state==='starting'){this.cancel();return;}if(this.state!=='listening')return;const token=this.token;this.stateTo('stopping');this.onStatus('Finishing recognition · 正在完成识别，请稍候');try{this.rec?.stop()}catch{this.finish(token,'Retry · 识别未完成，请重试')}this.later(()=>this.finish(token,'Retry or type · 未收到最终识别结果，请重试或用网页键盘输入'),6000)}
 toggle(){if(this.state==='preparing'||this.state==='starting'||this.state==='stopping'){this.cancel();return;}if(this.state==='listening'){this.stop();return}this.start()}
 start(){if(this.state!=='idle')return;const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR){this.onStatus('Use the English keyboard · 浏览器语音识别不可用，请用网页键盘输入');this.onUnavailable();return}this.cancel();const token=++this.token;this.log('prepare');this.stateTo('preparing');this.onStatus('Preparing microphone · 正在停止朗读、准备话筒，请稍候');
 try{this.prepare();window.WMMicrosoftVoice?.stopForMicrophone?.()}catch{this.finish(token,'Retry · 声音切换未完成，请重试');return}
 // Start in the user gesture; asynchronous start loses microphone activation on some phones.
 (()=>{if(token!==this.token)return;let r;try{r=new SR()}catch{this.finish(token,'Retry · 话筒暂不可用，请重试');return}this.rec=r;r.lang='en-GB';r.continuous=true;r.interimResults=true;r.maxAlternatives=5;let text='',finalDelivered=false;const slots=[];
 const deliver=(value,final,raw=value)=>{if(token!==this.token||!value.trim())return;let canonical=value;if(final&&window.WMSpeechMatch)canonical=window.WMSpeechMatch.resolve(value,this.target());text=value;this.log(final?'final-text':'interim-text');if(final)finalDelivered=true;this.onText(canonical,final,raw)};
 const startLimit=this.later(()=>this.finish(token,'Microphone start timed out · 话筒启动超时，请重试'),8000);
 r.onstart=()=>{if(token!==this.token)return;clearTimeout(startLimit);this.log('listening');this.stateTo('listening');this.onStatus('Speak now · 请说英语，说完可再点话筒结束');this.later(()=>{if(token===this.token)this.stop()},25000)};
 r.onresult=e=>{if(token!==this.token)return;for(let i=e.resultIndex||0;i<e.results.length;i++)slots[i]=e.results[i];slots.length=e.results.length;const results=slots;let value=results.map(x=>x[0]?.transcript||'').join(' ').trim();const final=results.length>0&&results.every(x=>x.isFinal);finalDelivered=false;if(results.length===1){const wanted=norm(this.target()),candidate=Array.from(results[0]).find(x=>norm(x.transcript)===wanted||window.WMSpeechMatch?.equivalent(x.transcript,this.target()));if(candidate)value=candidate.transcript}if(!value)return;deliver(value,final);if(token===this.token)this.onStatus(final?'Recognized · 文字已识别':'Recognizing · 已收到文字，正在识别')};
 r.onspeechend=()=>{if(token===this.token)this.log('speech-pause')};
 r.onnomatch=()=>{if(token===this.token)this.log('no-match')};
 r.onerror=e=>{if(token!==this.token)return;this.log('error',e.error||'unknown');if(text&&!finalDelivered&&['aborted','no-speech'].includes(e.error)){deliver(text,true);if(token!==this.token)return}this.finish(token,errors[e.error]||'Retry or type · 识别失败，请重试或用网页键盘输入')};
 r.onend=()=>{if(token!==this.token)return;this.log('end');if(text&&!finalDelivered){deliver(text,true);if(token!==this.token)return}this.finish(token,text?'Retry or edit · 识别结束，可重新跟读或用网页键盘修改':'No recognition text; retry · 没有收到识别文字，请重试')};
 this.stateTo('starting');this.onStatus('Starting microphone · 正在启动话筒，请稍候');try{r.start()}catch(e){this.log('start-error',e.name||'unknown');this.finish(token,'Cannot start recognition · 无法启动识别，请重试')}
 })()
 }
}
window.WMSpeechInput={Session};
})();
