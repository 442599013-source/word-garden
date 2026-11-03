(()=>{'use strict';
const deadline=(p,ms,message)=>{let t;return Promise.race([p,new Promise((_,reject)=>t=setTimeout(()=>reject(Error(message)),ms))]).finally(()=>clearTimeout(t))};
window.WMMicrosoftVoice=class{
 constructor(audio){this.audio=audio;this.token=0}
 stop(){this.token++;this.controller?.abort();this.cancel?.();this.audio.pause();if(this.url)URL.revokeObjectURL(this.url);this.url=null}
 async play(text,locale='en-GB',rate=1,onStart=()=>{}){
 this.stop();const token=this.token;this.controller=new AbortController();const signal=this.controller.signal;
 const check=()=>{if(token!==this.token)throw new DOMException('Stopped','AbortError')};
 const key=new URL('./__microsoft_audio_v3__/'+locale+'/'+encodeURIComponent(text),location.href).href;
 let cache,response;try{cache=await deadline(caches.open('wordmatch-microsoft-bilingual-v9'),600,'Cache timeout');response=await deadline(cache.match(key),600,'Cache timeout')}catch{}
 check();let blob;
 if(response){try{blob=await deadline(response.blob(),1500,'Cache timeout')}catch{}}
 if(!blob?.size){const timer=setTimeout(()=>this.controller?.abort(),25000);try{response=await fetch('https://wordmatch-voice.442599013.workers.dev/tts',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text,locale}),signal});if(!response.ok)throw Error('微软语音 HTTP '+response.status);blob=await response.blob();if(!blob.size||!blob.type.startsWith('audio/'))throw Error('未收到有效音频');if(cache)cache.put(key,new Response(blob)).catch(()=>{})}catch(e){check();if(signal.aborted)throw Error('语音请求超时，请重试');throw e}finally{clearTimeout(timer)}}
 check();this.url=URL.createObjectURL(blob);const a=this.audio;a.src=this.url;a.playbackRate=rate;
 return new Promise((resolve,reject)=>{let watchdog;const clean=()=>{clearInterval(watchdog);a.onended=null;a.onerror=null;this.cancel=null};const done=e=>{clean();e?reject(e):resolve()};this.cancel=()=>done(new DOMException('Stopped','AbortError'));a.onended=()=>done();a.onerror=()=>done(Error('音频播放失败，请重试'));let elapsed=0;watchdog=setInterval(()=>{if(!a.paused)elapsed+=1000;if(elapsed>Math.max(90000,text.length*1200/rate))done(Error('播放超时，请重试'))},1000);deadline(Promise.resolve(a.play()),8000,'播放未启动，请点击音频播放键或重试').then(()=>{if(token===this.token)onStart()}).catch(e=>done(Error(e.name==='NotAllowedError'?'请点击下方音频播放键，再重试':e.message)))});
 }
};})();
