/* Browser live text plus a single in-memory recording for service fallback. */
(()=>{'use strict';
const errors={'not-allowed':'Allow microphone access · 请允许麦克风权限','service-not-allowed':'Speech service unavailable · 语音服务暂不可用','no-speech':'No speech detected · 没有识别到说话','audio-capture':'Microphone unavailable · 麦克风未就绪',network:'Recognition connection failed · 识别连接失败',aborted:'Recognition stopped · 识别已停止'};
class Session{
 constructor({prepare=()=>{},target=()=>'',onState=()=>{},onStatus=()=>{},onText=()=>{},onUnavailable=()=>{}}={}){Object.assign(this,{prepare,target,onState,onStatus,onText,onUnavailable});this.state='idle';this.token=0;this.timers=[];this.events=[];this.rec=null;this.capture=null;this.request=null;this.text='';this.finalText='';this.captureReady=false;this.finalizing=false}
 log(event,code=''){this.events.push({event,code,at:Date.now()});this.events=this.events.slice(-48);window.WMSpeechDiagnostics=this.events.slice()}
 later(fn,ms){const t=setTimeout(fn,ms);this.timers.push(t);return t}
 stateTo(state){this.state=state;this.onState(state)}
 detachRecognition(){const r=this.rec;this.rec=null;if(!r)return;for(const name of ['onstart','onresult','onerror','onend','onaudiostart','onaudioend','onspeechstart','onspeechend','onsoundstart','onnomatch'])r[name]=null;try{r.abort()}catch{}}
 cancel(){++this.token;this.timers.forEach(clearTimeout);this.timers=[];this.detachRecognition();this.request?.abort();this.request=null;const capture=this.capture;this.capture=null;capture?.cancel().catch(()=>{});this.recording=null;this.captureReady=false;this.finalizing=false;this.stateTo('idle')}
 finish(token,message){if(token!==this.token)return;this.cancel();this.onStatus(message)}
 deliver(token,text,final){if(token!==this.token||!text?.trim())return;this.text=text.trim();if(final)this.finalText=this.text;const resolved=final&&window.WMSpeechMatch?window.WMSpeechMatch.resolve(this.text,this.expected):this.text;this.log(final?'final-text':'interim-text');this.onText(resolved,final,this.text)}
 exact(text){return !!text&&(window.WMSpeechMatch?window.WMSpeechMatch.equivalent(text,this.expected):text.toLowerCase().trim()===this.expected.toLowerCase().trim())}
 toggle(){if(this.state==='preparing'||this.state==='stopping'||this.state==='retrying'){this.cancel();return}if(this.state==='listening'||this.state==='starting'){this.stop();return}this.start()}
 async start(){if(this.state!=='idle')return;this.cancel();const token=++this.token;this.expected=String(this.target()||'');this.text=this.finalText='';this.browserEnded=false;this.log('prepare');this.stateTo('preparing');this.onStatus('Preparing microphone · 正在准备话筒');try{this.prepare();window.WMMicrosoftVoice?.stopForMicrophone?.()}catch{this.finish(token,'Microphone unavailable · 话筒切换失败，请重试');return}
 if(window.WMAudioBackup){const capture=this.capture=new window.WMAudioBackup.Capture({onLimit:()=>{if(token===this.token)this.stop()}});try{this.captureReady=!!await capture.start()}catch(e){if(token!==this.token)return;this.log('backup-capture-error',e.name||'Error');this.captureReady=false}}
 if(token!==this.token)return;this.startBrowser(token);
 }
 startBrowser(token){if(token!==this.token)return;const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
 const ready=()=>{if(token!==this.token||this.state==='stopping'||this.state==='retrying')return;this.stateTo('listening');this.onStatus('Speak now · 请说英语，说完可再点话筒结束')};
 // Recording is already active, so the user can speak even if the live service fails to start.
 if(this.captureReady)ready();else this.stateTo('starting');
 if(!SR){if(this.captureReady){this.browserEnded=true;this.later(()=>{if(token===this.token)this.stop()},45000);return}this.finish(token,'Use keyboard · 浏览器语音不可用，请用键盘输入');this.onUnavailable();return}
 let r;try{r=this.rec=new SR()}catch{if(this.captureReady){this.browserEnded=true;this.later(()=>{if(token===this.token)this.stop()},45000);return}this.finish(token,'Microphone unavailable · 无法启动识别，请重试');return}
 r.lang='en-GB';r.continuous=!(/iPad|iPhone|iPod/.test(window.navigator?.userAgent||'')||(window.navigator?.platform==='MacIntel'&&window.navigator?.maxTouchPoints>1));r.interimResults=true;r.maxAlternatives=5;const slots=[];
 const startLimit=this.later(()=>{if(token!==this.token)return;this.log('live-start-timeout');this.detachRecognition();this.browserEnded=true;if(this.captureReady)ready();else this.finish(token,'Microphone start timed out · 话筒启动超时，请重试')},8000);
 r.onstart=()=>{if(token!==this.token)return;clearTimeout(startLimit);this.log('live-start');ready()};
 r.onaudiostart=()=>{if(token===this.token){this.log('audio-start');ready()}};
 r.onspeechstart=()=>{if(token===this.token)this.log('speech-start')};r.onspeechend=()=>{if(token===this.token)this.log('speech-end')};
 r.onresult=e=>{if(token!==this.token||this.finalizing)return;clearTimeout(startLimit);for(let i=e.resultIndex||0;i<e.results.length;i++)slots[i]=e.results[i];slots.length=e.results.length;const entries=slots.filter(Boolean);let text=entries.map(x=>x[0]?.transcript||'').join(' ').trim();const final=entries.length>0&&entries.every(x=>x.isFinal);if(entries.length===1){const candidate=Array.from(entries[0]).find(x=>this.exact(x.transcript));if(candidate)text=candidate.transcript}if(!text)return;
 this.log('live-result',final?'final':'interim');if(final)this.finalText=text;
 // Show interim words immediately. Complete recognized answers keep the original auto-check behavior.
 this.deliver(token,text,final&&this.exact(text));if(token!==this.token)return;this.onStatus(final?'Recognized · 文字已识别':'Recognizing · 正在识别');
 if(this.state==='stopping')this.finalize(token);
 };
 r.onerror=e=>{if(token!==this.token)return;clearTimeout(startLimit);this.log('live-error',e.error||'unknown');this.browserEnded=true;this.detachRecognition();if(this.captureReady){if(this.state==='stopping')this.finalize(token);else ready()}else if(this.text)this.finalize(token);else this.finish(token,errors[e.error]||'Retry or type · 识别失败，请重试或打字')};
 r.onend=()=>{if(token!==this.token)return;clearTimeout(startLimit);this.log('live-end');this.browserEnded=true;this.rec=null;
 // Do not truncate the backup when iOS ends its live utterance early; the existing Stop button ends the recording.
 if(this.state==='stopping'||!this.captureReady)this.finalize(token);else ready()};
 this.later(()=>{if(token===this.token)this.stop()},45000);
 try{r.start()}catch(e){clearTimeout(startLimit);this.log('live-start-error',e.name||'unknown');this.browserEnded=true;this.detachRecognition();if(this.captureReady)ready();else this.finish(token,'Cannot start recognition · 无法启动识别，请重试')}
 }
 stop(){if(this.state==='preparing'){this.cancel();return}if(!['starting','listening'].includes(this.state))return;const token=this.token;this.stateTo('stopping');this.onStatus('Finishing recognition · 正在完成识别');
 if(this.captureReady&&this.capture){this.recording=this.capture.stop().then(blob=>({blob}),error=>({error}));}
 if(!this.rec||this.browserEnded){this.finalize(token);return}try{this.rec.stop()}catch{this.finalize(token);return}
 this.later(()=>this.finalize(token),1800);
 }
 async finalize(token){if(token!==this.token||this.finalizing)return;this.finalizing=true;this.detachRecognition();const current=this.finalText||this.text;
 if(this.finalText&&this.exact(this.finalText)){this.deliver(token,this.finalText,true);this.finish(token,'Recognized · 文字已识别');return}
 let recorded;if(this.captureReady){this.stateTo('retrying');this.onStatus('Recognizing recording · 正在用录音重新识别');try{recorded=this.recording?await this.recording:await this.capture.stop().then(blob=>({blob}),error=>({error}))}catch(error){recorded={error}}if(token!==this.token)return;
 if(recorded?.blob){this.request=new AbortController();try{const text=await window.WMAudioBackup.transcribe(recorded.blob,{signal:this.request.signal});if(token!==this.token)return;this.deliver(token,text,true);if(token===this.token)this.finish(token,'Recognized · 文字已识别');return}catch(error){if(token!==this.token)return;this.log('backup-recognition-error',error.name||'Error');if(current){this.deliver(token,current,true);this.finish(token,'Retry or edit · 可重新跟读或修改');return}this.finish(token,error.message==='Speech service not updated'?'Speech service needs updating · 备用识别服务尚未更新':'Retry or type · 录音识别未成功，可重新尝试或打字');return}finally{if(recorded)recorded.blob=null}}
 }
 if(token!==this.token)return;if(current){this.deliver(token,current,true);this.finish(token,'Retry or edit · 可重新跟读或修改')}else this.finish(token,'No recognition text; retry · 没有识别出文字，请重试');
 }
}
window.WMSpeechInput={Session};
})();
