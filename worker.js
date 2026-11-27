// Word Match: Azure real-time TTS, globally shared Cloudflare KV cache.
// Bind KV namespace as AUDIO_CACHE. Add secret AZURE_SPEECH_KEY and var AZURE_SPEECH_REGION=eastus.
const ALLOWED_ORIGIN = 'https://442599013-source.github.io';
const VOICES = { 'en-US': ['en-US-JennyNeural','en-US-AriaNeural','en-US-GuyNeural'], 'en-GB': ['en-GB-SoniaNeural','en-GB-RyanNeural'], 'zh-CN': ['zh-CN-XiaoxiaoNeural','zh-CN-XiaoyiNeural','zh-CN-YunxiNeural','zh-CN-YunjianNeural'] };
const encoder = new TextEncoder();
function cors(){ return {'Access-Control-Allow-Origin': ALLOWED_ORIGIN, 'Vary':'Origin','Access-Control-Allow-Methods':'POST, OPTIONS','Access-Control-Allow-Headers':'Content-Type','Access-Control-Expose-Headers':'X-Microsoft-Voice, X-Audio-Cache, X-Voice-Service'}; }
function json(message,status=400){return new Response(JSON.stringify({error:message}),{status,headers:{...cors(),'Content-Type':'application/json'}})}
function xmlEscape(s){return s.replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]));}
function audioResponse(data,cached,voice){return new Response(data,{status:200,headers:{...cors(),'Content-Type':'audio/mpeg','Cache-Control':'public, max-age=31536000, immutable','X-Microsoft-Voice':voice,'X-Voice-Service':'Azure','X-Audio-Cache':cached?'HIT':'MISS'}})}
// STT: transient WAV proxy. Never touch AUDIO_CACHE or any storage binding.
function sttJson(data,status=200){return new Response(JSON.stringify(data),{status,headers:{...cors(),'Content-Type':'application/json','Cache-Control':'no-store, max-age=0','Pragma':'no-cache'}})}
async function shortSpeech(request,env){
 if(request.headers.get('Origin')!==ALLOWED_ORIGIN)return sttJson({error:'Origin not allowed'},403);
 if(!env.AZURE_SPEECH_KEY)return sttJson({error:'Azure Speech key not configured'},503);
 if(!/^audio\/wav(?:;|$)/i.test(request.headers.get('Content-Type')||''))return sttJson({error:'16kHz mono PCM WAV required'},415);
 const limit=1440044,declared=Number(request.headers.get('Content-Length'));if(declared>limit)return sttJson({error:'Audio too long'},413);
 if(!request.body)return sttJson({error:'Empty audio'},400);const reader=request.body.getReader(),chunks=[];let size=0;
 try{while(true){const part=await reader.read();if(part.done)break;size+=part.value.byteLength;if(size>limit){await reader.cancel();return sttJson({error:'Audio too long'},413)}chunks.push(part.value)}}catch{return sttJson({error:'Audio upload failed'},400)}
 const audio=new Uint8Array(size);let at=0;for(const chunk of chunks){audio.set(chunk,at);at+=chunk.length}chunks.length=0;
 const tag=(offset)=>String.fromCharCode(...audio.slice(offset,offset+4));if(size<48||tag(0)!=='RIFF'||tag(8)!=='WAVE')return sttJson({error:'Invalid WAV'},400);
 const view=new DataView(audio.buffer);let offset=12,validFormat=false,dataBytes=0;
 while(offset+8<=size){const name=tag(offset),length=view.getUint32(offset+4,true),body=offset+8;if(body+length>size)return sttJson({error:'Truncated WAV'},400);if(name==='fmt '){if(length<16)return sttJson({error:'Invalid WAV format'},400);validFormat=view.getUint16(body,true)===1&&view.getUint16(body+2,true)===1&&view.getUint32(body+4,true)===16000&&view.getUint16(body+12,true)===2&&view.getUint16(body+14,true)===16}if(name==='data')dataBytes+=length;offset=body+length+(length%2)}
 if(!validFormat||dataBytes<4800||dataBytes>1440000||dataBytes%2)return sttJson({error:'Invalid audio duration or format'},400);
 const region=env.AZURE_SPEECH_REGION||'eastus';if(!/^[a-z0-9-]+$/.test(region))return sttJson({error:'Invalid speech region'},503);
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),22000),abort=()=>controller.abort();request.signal?.addEventListener('abort',abort,{once:true});
 try{const upstream=await fetch(`https://${region}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=en-GB&format=simple`,{method:'POST',headers:{'Ocp-Apim-Subscription-Key':env.AZURE_SPEECH_KEY,'Content-Type':'audio/wav; codecs=audio/pcm; samplerate=16000','Accept':'application/json'},body:audio,signal:controller.signal});
 if(!upstream.ok)return sttJson({error:upstream.status===429?'Speech service rate limited':upstream.status===401||upstream.status===403?'Speech resource authentication failed':'Speech service failed'},upstream.status===429?429:502);
 const result=await upstream.json();const text=result.RecognitionStatus==='Success'&&typeof result.DisplayText==='string'?result.DisplayText.trim():'';
 return sttJson({text},200);
 }catch{return sttJson({error:'Speech service connection failed'},502)}finally{clearTimeout(timer);request.signal?.removeEventListener('abort',abort);audio.fill(0)}
}
export default {
 async fetch(request,env){
  const url=new URL(request.url);
  if(request.method==='OPTIONS')return new Response(null,{headers:cors()});
  if(url.pathname==='/stt'&&request.method==='POST')return shortSpeech(request,env);
  if(url.pathname==='/health')return sttJson({service:'wordmatch-voice',version:'audio-backup-v1',sttReady:!!env.AZURE_SPEECH_KEY},200);
  if(!['/tts','/tts-cache-v6493'].includes(url.pathname)||request.method!=='POST')return json('Not found',404);
  if(request.headers.get('Origin')!==ALLOWED_ORIGIN)return json('Origin not allowed',403);
  if(!env.AUDIO_CACHE||!env.AZURE_SPEECH_KEY)return json('Worker cache or Azure key not configured',503);
  let data;try{data=await request.json()}catch{return json('Invalid JSON')}
  const text=data?.text,locale=data?.locale;
  const requestedVoice=data?.voice;
  if(typeof text!=='string'||!text.trim()||text.length>1500)return json('Text must be 1–1500 characters');
  if(!VOICES[locale])return json('Unsupported language');
  const voice=typeof requestedVoice==='string'&&VOICES[locale].includes(requestedVoice)?requestedVoice:VOICES[locale][0];
  // Cache identity includes the voice and synthesis version.
  const identity='azure-v1|'+voice+'|'+text;
  const hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',encoder.encode(identity)))).map(x=>x.toString(16).padStart(2,'0')).join('');
  const cacheKey='speech:'+hash;
  const params={hash,cacheKey,locale,voice,text};
  try {
    const stored=await readShared(env,params);
    if(stored)return audioResponse(stored,true,voice);
    if(url.pathname==='/tts-cache-v6493'||data.lookupOnly)return json('Audio not stored',404);
    if(!env.VOICE_COORDINATOR)return json('Shared synthesis is paused until the coordinator is bound',503);
    const id=env.VOICE_COORDINATOR.idFromName('shared-voice-v1');
    return await env.VOICE_COORDINATOR.get(id).fetch('https://voice.internal/generate',{method:'POST',body:JSON.stringify(params)});
  }catch{return json('Shared audio storage unavailable',503)}
 }
};

async function synthesize(env,{text,locale,voice}){
  const ssml=`<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${locale}"><voice name="${voice}">${xmlEscape(text)}</voice></speak>`;
  let response;
  try{response=await fetch(`https://${env.AZURE_SPEECH_REGION||'eastus'}.tts.speech.microsoft.com/cognitiveservices/v1`,{method:'POST',headers:{'Ocp-Apim-Subscription-Key':env.AZURE_SPEECH_KEY,'Content-Type':'application/ssml+xml','X-Microsoft-OutputFormat':'audio-24khz-48kbitrate-mono-mp3','User-Agent':'wordmatch-tts'},body:ssml})}catch{return json('Azure connection failed',502)}
  if(!response.ok)return json(response.status===429?'Azure free tier is rate-limited; try again later':`Azure returned ${response.status}`,response.status===429?429:502);
  const audio=await response.arrayBuffer();
  if(!audio.byteLength)return json('Azure returned empty audio',502);
  return audio;
}

// All OSS credentials stay in Worker secrets. A custom HTTPS host can point at a private bucket.
const hex=buf=>Array.from(new Uint8Array(buf),b=>b.toString(16).padStart(2,'0')).join('');
async function hmac(key,value){
 const secret=await crypto.subtle.importKey('raw',key,{name:'HMAC',hash:'SHA-256'},false,['sign']);
 return crypto.subtle.sign('HMAC',secret,encoder.encode(value));
}
async function oss(env,method,hash,body){
 const region=env.OSS_REGION, bucket=env.OSS_BUCKET;
 const path='voice/'+hash+'.mp3';
 const date=new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d+Z$/,'Z');
 const day=date.slice(0,8),scope=day+'/'+region+'/oss/aliyun_v4_request';
 const headers={'x-oss-content-sha256':'UNSIGNED-PAYLOAD','x-oss-date':date};
 if(method==='PUT')headers['content-type']='audio/mpeg';
 const canonicalHeaders=Object.keys(headers).sort().map(k=>k+':'+headers[k]+'\n').join('');
 const canonical=[method,'/'+bucket+'/'+path,'',canonicalHeaders,'','UNSIGNED-PAYLOAD'].join('\n');
 const digest=hex(await crypto.subtle.digest('SHA-256',encoder.encode(canonical)));
 let key=encoder.encode('aliyun_v4'+env.OSS_ACCESS_KEY_SECRET);
 for(const component of [day,region,'oss','aliyun_v4_request'])key=await hmac(key,component);
 const signature=hex(await hmac(key,['OSS4-HMAC-SHA256',date,scope,digest].join('\n')));
 headers.Authorization='OSS4-HMAC-SHA256 Credential='+env.OSS_ACCESS_KEY_ID+'/'+scope+',Signature='+signature;
 return fetch('https://'+env.OSS_HOST+'/'+path,{method,headers,body,redirect:'error'});
}
function usesOSS(env,hash){
 return !!env.OSS_BUCKET&&((env.OSS_PILOT_HASHES==='all')||String(env.OSS_PILOT_HASHES||'').split(',').map(s=>s.trim()).includes(hash));
}
async function readShared(env,p){
 if(usesOSS(env,p.hash)){
  const response=await oss(env,'GET',p.hash);
  if(response.ok)return response.arrayBuffer();
  if(response.status!==404)throw Error('OSS read failed');
 }
 return env.AUDIO_CACHE.get(p.cacheKey,'arrayBuffer');
}
async function writeShared(env,p,audio){
 if(usesOSS(env,p.hash)){
  const response=await oss(env,'PUT',p.hash,audio);
  if(!response.ok)throw Error('OSS write failed');
 }else await env.AUDIO_CACHE.put(p.cacheKey,audio);
}
// Coordinate misses across regions, keep successfully generated files until shared writes recover.
export class VoiceCoordinator{
 constructor(state,env){this.db=state.storage;this.env=env;this.inflight=new Map()}
 async fetch(request){
  const p=await request.json();
  let job=this.inflight.get(p.hash);
  if(!job){
   job=this.generate(p).finally(()=>this.inflight.delete(p.hash));
   this.inflight.set(p.hash,job);
  }
  try{
   const result=await job;
   return result instanceof Response?result.clone():audioResponse(result,false,p.voice);
  }catch{return json('Shared audio temporarily unavailable',503)}
 }
 async generate(p){
  const stored=await readShared(this.env,p);
  if(stored)return stored;
  const prefix='pending:'+p.hash+':';
  const count=await this.db.get(prefix+'count');
  let audio;
  if(count){
   const keys=Array.from({length:count},(_,i)=>prefix+i);
   const parts=await this.db.get(keys);
   audio=await new Blob(keys.map(key=>parts.get(key))).arrayBuffer();
   if(Number(await this.db.get('expiry:'+p.hash))>Date.now())return audio;
  }
  const pauseKey=usesOSS(this.env,p.hash)?'pause:oss':'pause:kv';
  if(Number(await this.db.get(pauseKey))>Date.now())return audio||json('Shared storage full; generation paused',503);
  if(!audio){
   audio=await synthesize(this.env,p);
   if(audio instanceof Response)return audio;
   const chunks={};
   for(let i=0;i<audio.byteLength;i+=65536)chunks[prefix+i/65536]=audio.slice(i,i+65536);
   chunks[prefix+'count']=Math.ceil(audio.byteLength/65536);
   await this.db.put(chunks);
  }
  try{await writeShared(this.env,p,audio)}
  catch{
   const delay=usesOSS(this.env,p.hash)?Date.now()+60000:(Math.floor(Date.now()/86400000)+1)*86400000;
   await this.db.put(pauseKey,delay);
   return audio;
  }
  // Retain a short copy during KV propagation so simultaneous regions cannot regenerate.
  if(!usesOSS(this.env,p.hash)){
   await this.db.put('expiry:'+p.hash,Date.now()+180000);
   if(await this.db.getAlarm()==null)await this.db.setAlarm(Date.now()+185000);
  }else await this.clearPending(p.hash);
  return audio;
 }
 async clearPending(hash){
  const rows=await this.db.list({prefix:'pending:'+hash+':'});
  if(rows.size)await this.db.delete([...rows.keys()]);
 }
 async alarm(){
  const rows=await this.db.list({prefix:'expiry:'});
  for(const [key,time] of rows)if(time<=Date.now()){
   await this.clearPending(key.slice(7));await this.db.delete(key);
  }
  if((await this.db.list({prefix:'expiry:',limit:1})).size)await this.db.setAlarm(Date.now()+185000);
 }
}
