/* One focus-free browser recognition lifecycle. No audio upload or cloud key. */
(()=>{'use strict';
const norm=s=>String(s??'').toLowerCase().replace(/[’‘]/g,"'").replace(/[.,!?;:]/g,'').trim().replace(/\s+/g,' ');
const errors={'not-allowed':'请允许麦克风和语音识别权限 · Allow microphone access','service-not-allowed':'浏览器识别服务不可用，请重试或用网页键盘输入 · Retry or type','no-speech':'没有识别到说话，请重试 · No speech detected','audio-capture':'麦克风未就绪，请重试 · Microphone unavailable',network:'语音识别连接失败，请重试 · Recognition connection failed',aborted:'语音识别已停止，可重新跟读 · Retry'};
class Session{
 constructor({prepare=()=>{},target=()=>'',onState=()=>{},onStatus=()=>{},onText=()=>{},onUnavailable=()=>{}}={}){Object.assign(this,{prepare,target,onState,onStatus,onText,onUnavailable});this.state='idle';this.token=0;this.timers=[];this.rec=null;this.events=[]}
 log(event,code=''){this.events.push({event,code,at:Date.now()});this.events=this.events.slice(-24);window.WMSpeechDiagnostics=this.events.slice()}
 later(fn,ms){const t=setTimeout(fn,ms);this.timers.push(t);return t}
 stateTo(s){this.state=s;this.onState(s)}
 cancel(){++this.token;this.timers.forEach(clearTimeout);this.timers=[];const r=this.rec;this.rec=null;if(r){r.onstart=r.onresult=r.onerror=r.onend=r.onspeechend=r.onnomatch=null;try{r.abort()}catch{}}this.stateTo('idle')}
 finish(token,message){if(token!==this.token)return;this.cancel();this.onStatus(message)}
 stop(){if(this.state==='preparing'||this.state==='starting')return;if(this.state!=='listening')return;const token=this.token;this.stateTo('stopping');this.onStatus('正在完成识别，请稍候 · Finishing recognition');try{this.rec?.stop()}catch{this.finish(token,'识别未完成，请重试 · Retry')}this.later(()=>this.finish(token,'未收到最终识别结果，请重试或用网页键盘输入 · Retry or type'),6000)}
 toggle(){if(this.state==='preparing'||this.state==='starting'||this.state==='stopping')return;if(this.state==='listening'){this.stop();return}this.start()}
 start(){if(this.state!=='idle')return;const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR){this.onStatus('浏览器语音识别不可用，请用网页键盘输入 · Use the English keyboard');this.onUnavailable();return}this.cancel();const token=++this.token;this.log('prepare');this.stateTo('preparing');this.onStatus('正在停止朗读、准备话筒，请稍候 · Preparing microphone');
 try{this.prepare();window.WMMicrosoftVoice?.stopForMicrophone?.()}catch{this.finish(token,'声音切换未完成，请重试 · Retry');return}
 // Let iOS release the playback route before recognition acquires the microphone.
 this.later(()=>{if(token!==this.token)return;let r;try{r=new SR()}catch{this.finish(token,'话筒暂不可用，请重试 · Retry');return}this.rec=r;r.lang='en-GB';r.continuous=false;r.interimResults=true;r.maxAlternatives=5;let text='',finalDelivered=false;
 const deliver=(value,final,raw=value)=>{if(token!==this.token||!value.trim())return;let canonical=value;if(final&&window.WMSpeechMatch)canonical=window.WMSpeechMatch.resolve(value,this.target());text=value;this.log(final?'final-text':'interim-text');if(final)finalDelivered=true;this.onText(canonical,final,raw)};
 const startLimit=this.later(()=>this.finish(token,'话筒启动超时，请重试 · Microphone start timed out'),8000);
 r.onstart=()=>{if(token!==this.token)return;clearTimeout(startLimit);this.log('listening');this.stateTo('listening');this.onStatus('请说英语，说完可再点话筒结束 · Speak now');this.later(()=>{if(token===this.token)this.stop()},25000)};
 r.onresult=e=>{if(token!==this.token)return;const results=Array.from(e.results||[]);let value=results.map(x=>x[0]?.transcript||'').join(' ').trim();const final=results.length>0&&results.every(x=>x.isFinal);if(results.length===1){const wanted=norm(this.target()),candidate=Array.from(results[0]).find(x=>norm(x.transcript)===wanted);if(candidate)value=candidate.transcript}if(!value)return;deliver(value,final);if(token===this.token)this.onStatus(final?'文字已识别 · Recognized':'已收到文字，正在识别 · Recognizing')};
 r.onspeechend=()=>{if(token===this.token)this.stop()};
 r.onnomatch=()=>{if(token===this.token)this.log('no-match')};
 r.onerror=e=>{if(token!==this.token)return;this.log('error',e.error||'unknown');if(text&&!finalDelivered&&['aborted','no-speech'].includes(e.error)){deliver(text,true);if(token!==this.token)return}this.finish(token,errors[e.error]||'识别失败，请重试或用网页键盘输入 · Retry or type')};
 r.onend=()=>{if(token!==this.token)return;this.log('end');if(text&&!finalDelivered){deliver(text,true);if(token!==this.token)return}this.finish(token,text?'识别结束，可重新跟读或用网页键盘修改 · Retry or edit':'没有收到识别文字，请重试 · No recognition text; retry')};
 this.stateTo('starting');this.onStatus('正在启动话筒，请稍候 · Starting microphone');try{r.start()}catch(e){this.log('start-error',e.name||'unknown');this.finish(token,'无法启动识别，请重试 · Cannot start recognition')}
 },350)
 }
}
window.WMSpeechInput={Session};
})();
