// Word Match: Azure real-time TTS, globally shared Cloudflare KV cache.
// Bind KV namespace as AUDIO_CACHE. Add secret AZURE_SPEECH_KEY and var AZURE_SPEECH_REGION=eastus.
const ALLOWED_ORIGIN = 'https://442599013-source.github.io';
const VOICES = { 'en-US': ['en-US-JennyNeural','en-US-AriaNeural','en-US-GuyNeural'], 'en-GB': ['en-GB-SoniaNeural','en-GB-RyanNeural'], 'zh-CN': ['zh-CN-XiaoxiaoNeural','zh-CN-XiaoyiNeural','zh-CN-YunxiNeural','zh-CN-YunjianNeural'] };
const encoder = new TextEncoder();
function cors(){ return {'Access-Control-Allow-Origin': ALLOWED_ORIGIN, 'Vary':'Origin','Access-Control-Allow-Methods':'POST, OPTIONS','Access-Control-Allow-Headers':'Content-Type'}; }
function json(message,status=400){return new Response(JSON.stringify({error:message}),{status,headers:{...cors(),'Content-Type':'application/json'}})}
function xmlEscape(s){return s.replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]));}
function audioResponse(data,cached){return new Response(data,{status:200,headers:{...cors(),'Content-Type':'audio/mpeg','Cache-Control':'public, max-age=31536000, immutable','X-Audio-Cache':cached?'HIT':'MISS'}})}
export default {
 async fetch(request,env){
  const url=new URL(request.url);
  if(request.method==='OPTIONS')return new Response(null,{headers:cors()});
  if(url.pathname==='/health')return json('Service online. Speech may require configuration.',200);
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
