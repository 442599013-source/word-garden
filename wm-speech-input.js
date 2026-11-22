/* V64.45: one live recognizer; guarded cleanup and recoverable retry. */
(()=>{'use strict';
const messages={'not-allowed':'Microphone permission denied · 请在浏览器设置中允许麦克风','service-not-allowed':'Speech service unavailable · 语音服务不可用，请重试或输入','audio-capture':'Microphone unavailable · 话筒未就绪，请关闭其他录音后重试','no-speech':'No speech detected · 未听到语音，请重试',network:'Recognition connection failed · 识别连接失败，请重试',aborted:'Recognition stopped · 识别已停止，可重新开始'};
class Session{
 constructor({prepare=()=>{},target=()=>'',onState=()=>{},onStatus=()=>{},onText=()=>{},onUnavailable=()=>{}}={}){Object.assign(this,{prepare,target,onState,onStatus,onText,onUnavailable});this.state='idle';this.token=0;this.events=[];this.timers=[];this.rec=null;this.text='';this.finalText='';this.pendingRelease=null}
 log(event,code=''){this.events.push({event,code,at:Date.now()});this.events=this.events.slice(-48);window.WMSpeechDiagnostics=this.events.slice()}
 stateTo(s){this.state=s;this.onState(s)}
 later(fn,ms){const t=setTimeout(fn,ms);this.timers.push(t);return t}
 clearTimers(){this.timers.forEach(clearTimeout);this.timers=[]}
 get releasePromise(){return this.pendingRelease||Session.release||Promise.resolve()}
 cancel(){
  ++this.token;
  this.clearTimers();
  const recognizer=this.rec;
  const wasActive=Session.active===this;
  this.rec=null;
  this.text=this.finalText='';
  if(wasActive)Session.active=null;
  if(!recognizer&&!wasActive){
   if(this.state!=='idle')this.stateTo('idle');
   return this.releasePromise;
  }
  const prior=Session.release;
  const ended=recognizer?new Promise(resolve=>{
   let timer, settled=false;
   const done=reason=>{
    if(settled)return;
    settled=true;
    clearTimeout(timer);
    recognizer.onaudioend=recognizer.onend=null;
    this.log('recognizer-released',reason);
    resolve();
   };
   for(const name of ['onstart','onaudiostart','onaudioend','onresult','onerror','onspeechstart','onspeechend'])recognizer[name]=null;
   recognizer.onaudioend=()=>this.log('audio-end');
   recognizer.onend=()=>done('end');
   timer=setTimeout(()=>done('timeout'),1200);
   try{recognizer.abort()}catch{done('already-ended')}
  }):Promise.resolve();
  const release=Promise.all([prior,ended]).then(()=>{
   if(this.pendingRelease===release)this.pendingRelease=null;
   if(Session.release===release){
    Session.release=null;
    if(!Session.active)window.WMMicrosoftVoice?.audioMode?.('playback');
   }
  });
  this.pendingRelease=Session.release=release;
  this.stateTo('idle');
  return release;
 }
 finish(t,message,deliver=false){if(t!==this.token)return;const text=this.finalText||this.text;const expected=this.expected;this.log('finish',message);void this.cancel();this.onStatus(message);if(deliver&&text){const resolved=window.WMSpeechMatch?.resolve?window.WMSpeechMatch.resolve(text,expected):text;this.onText(resolved,true,text)}}
 toggle(){if(this.state==='starting'||this.state==='listening'){this.stop();return}if(this.state==='stopping'||this.state==='preparing'){void this.cancel();this.onStatus('Stopped · 已停止，可重新开始');return}void this.start()}
 async start(){if(this.state!=='idle')return;const request=++Session.startRequest;const waiting=Session.active&&Session.active!==this?Session.active.cancel():this.pendingRelease||Session.release;if(waiting){const t=++this.token;this.stateTo('preparing');this.onStatus('Releasing microphone · 正在释放上一次话筒');await waiting;if(t!==this.token)return;this.stateTo('idle')}if(request!==Session.startRequest||this.state!=='idle')return;const t=++this.token;this.clearTimers();this.text=this.finalText='';this.expected=String(this.target()||'');Session.active=this;this.stateTo('starting');this.onStatus('Starting microphone · 正在启动话筒');try{this.prepare();window.WMMicrosoftVoice?.stopForMicrophone?.()}catch{this.finish(t,'Cannot prepare microphone · 话筒准备失败，请重试');return}const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR){this.finish(t,'Live recognition unavailable · 此浏览器不支持实时识别，请用系统听写或手动输入');this.onUnavailable();return}let r;try{r=this.rec=new SR()}catch{this.finish(t,'Cannot create recognition · 无法启动识别，请重试');return}const live=()=>t===this.token&&r===this.rec;r.lang='en-GB';r.interimResults=true;r.maxAlternatives=1;r.continuous=false;
 const timeout=this.later(()=>{if(live())this.finish(t,'Microphone start timed out · 启动超时，请重新点击话筒')},8000);let noText;
 const watchdog=()=>{clearTimeout(noText);noText=this.later(()=>{if(live())this.finish(t,'No recognition text received · 未收到文字，已结束本次识别，请重试',!!this.text)},12000)};
 r.onstart=()=>{if(!live())return;clearTimeout(timeout);this.log('live-start');this.stateTo('listening');this.onStatus('Listening · 请说英语，说完点停止');watchdog()};
 r.onaudiostart=()=>{if(live())this.log('audio-start')};
 r.onresult=e=>{if(!live())return;let text='',final=true;for(let i=0;i<e.results.length;i++){text+=(text?' ':'')+(e.results[i][0]?.transcript||'');final=final&&e.results[i].isFinal}text=text.trim();if(!text)return;this.text=text;if(final)this.finalText=text;this.log('live-result',final?'final':'interim');watchdog();this.onStatus(final?'Recognized · 已识别':'Recognizing · 正在识别');this.onText(text,false,text);if(!live())return;if(final)this.finish(t,'Recognized · 已识别，可查看或修改',true)};
 r.onerror=e=>{if(!live())return;this.log('live-error',e.error||'unknown');this.finish(t,messages[e.error]||'Recognition failed · 识别失败，请重试',!!this.text)};
 r.onend=()=>{if(!live())return;this.rec=null;this.log('live-end');this.finish(t,this.text?'Recognized · 已识别，可查看或修改':'No text recognized · 没有识别到文字，请重新点击话筒',!!this.text)};
 this.later(()=>{if(live())this.stop()},45000);try{window.WMMicrosoftVoice?.markCapture?.();window.WMMicrosoftVoice?.audioMode?.('play-and-record');r.start()}catch(e){this.log('start-error',e.name);this.finish(t,'Cannot start recognition · 无法启动识别，请重试')}
 }
 stop(){if(!['starting','listening'].includes(this.state))return;const t=this.token,r=this.rec;this.stateTo('stopping');this.onStatus('Finishing · 正在结束识别');if(!r){this.finish(t,'Stopped · 已停止',!!this.text);return}this.later(()=>{if(t===this.token)this.finish(t,this.text?'Recognized · 已识别':'No text recognized · 没有识别到文字，请重试',!!this.text)},1800);try{r.stop()}catch{this.finish(t,'Recognition ended · 识别已结束，请重试',!!this.text)}}
}
Session.active=null;
Session.release=null;
Session.startRequest=0;
async function preparePlayback(){
 if(Session.active)await Session.active.cancel();
 while(Session.release)await Session.release;
 if(!Session.active)window.WMMicrosoftVoice?.audioMode?.('playback');
}
window.WMSpeechInput={Session,preparePlayback};
function leaveMicrophone(){
 if(Session.active)void Session.active.cancel();
 else if(Session.release)window.WMMicrosoftVoice?.audioMode?.('playback');
}
window.addEventListener('pagehide',leaveMicrophone);
document.addEventListener('visibilitychange',()=>{if(document.hidden)leaveMicrophone()});
})();
