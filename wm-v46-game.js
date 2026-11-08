/* V46 game: read highlighted pair after V43 asynchronous angel flight; voice EN then 中文. */
(()=>{'use strict';
const hint=document.getElementById('hint'),stage=document.querySelector('.match-stage'),panel=document.getElementById('word-meaning');if(!hint||!stage||!panel)return;
const original=hint.onclick;
function align(){let a=panel.getBoundingClientRect(),b=stage.getBoundingClientRect();if(a.height>0&&b.height>0)stage.style.setProperty('--v46-help-bottom',Math.round(a.bottom-b.top)+'px')}
window.addEventListener('resize',align);window.visualViewport?.addEventListener('resize',align);new ResizeObserver(align).observe(panel);requestAnimationFrame(align);
let speakToken=0,voice=null;const audio=document.createElement('audio');audio.hidden=true;audio.preload='none';document.body.append(audio);
try{if(window.WMMicrosoftVoice)voice=new window.WMMicrosoftVoice(audio)}catch{}
async function speakLine(text,lang,token){if(token!==speakToken)return;if(voice){try{await voice.play(text,lang,.9);return}catch{}}
if('speechSynthesis' in window){await new Promise(resolve=>{try{const u=new SpeechSynthesisUtterance(text);u.lang=lang;u.rate=.88;u.onend=resolve;u.onerror=resolve;window.speechSynthesis.speak(u);setTimeout(resolve,5500)}catch{resolve()}})}}
async function speakHint(){const nodes=[...stage.querySelectorAll('#board .hinted')];const en=nodes.find(x=>x.dataset.lang==='en'),zh=nodes.find(x=>x.dataset.lang==='zh');if(!en||!zh)return;const token=++speakToken;const a=en.textContent.trim(),b=zh.textContent.trim();if(!a||!b)return;await speakLine(a,'en-GB',token);if(token===speakToken)await speakLine(b,'zh-CN',token)}
if(typeof original==='function')hint.onclick=async function(e){const result=await original.call(this,e);await speakHint();return result};
})();
