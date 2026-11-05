// Word Match: Azure real-time TTS, globally shared Cloudflare KV cache.
// Bind KV namespace as AUDIO_CACHE. Add secret AZURE_SPEECH_KEY and var AZURE_SPEECH_REGION=eastus.
const ALLOWED_ORIGIN = 'https://442599013-source.github.io';
const VOICES = { 'en-US': ['en-US-JennyNeural','en-US-AriaNeural','en-US-GuyNeural'], 'en-GB': ['en-GB-SoniaNeural','en-GB-RyanNeural'], 'zh-CN': ['zh-CN-XiaoxiaoNeural','zh-CN-XiaoyiNeural','zh-CN-YunxiNeural','zh-CN-YunjianNeural'] };
const encoder = new TextEncoder();
function cors(){ return {'Access-Control-Allow-Origin': ALLOWED_ORIGIN, 'Vary':'Origin','Access-Control-Allow-Methods':'POST, OPTIONS','Access-Control-Allow-Headers':'Content-Type'}; }
function json(message,status=400){return new Response(JSON.stringify({error:message}),{status,headers:{...cors(),'Content-Type':'application/json'}})}
function xmlEscape(s){return s.replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]));}
function audioResponse(data,cached){return new Response(data,{status:200,headers:{...cors(),'Content-Type':'audio/mpeg','Cache-Control':'public, max-age=31536000, immutable','X-Audio-Cache':cached?'HIT':'MISS'}})}
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
  if(url.pathname!=='/tts'||request.method!=='POST')return json('Not found',404);
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
  const cached=await env.AUDIO_CACHE.get(cacheKey,'arrayBuffer');
  if(cached)return audioResponse(cached,true);
  // Azure free F0 has throughput constraints; do not retry indefinitely.
  const ssml=`<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${locale}"><voice name="${voice}">${xmlEscape(text)}</voice></speak>`;
  let response;
  try{response=await fetch(`https://${env.AZURE_SPEECH_REGION||'eastus'}.tts.speech.microsoft.com/cognitiveservices/v1`,{method:'POST',headers:{'Ocp-Apim-Subscription-Key':env.AZURE_SPEECH_KEY,'Content-Type':'application/ssml+xml','X-Microsoft-OutputFormat':'audio-24khz-48kbitrate-mono-mp3','User-Agent':'wordmatch-tts'},body:ssml})}catch{return json('Azure connection failed',502)}
  if(!response.ok)return json(response.status===429?'Azure free tier is rate-limited; try again later':`Azure returned ${response.status}`,response.status===429?429:502);
  const audio=await response.arrayBuffer();
  if(!audio.byteLength)return json('Azure returned empty audio',502);
  try{await env.AUDIO_CACHE.put(cacheKey,audio)}catch{return json('Generated audio but saving shared cache failed',503)}
  return audioResponse(audio,false);
 }
};

