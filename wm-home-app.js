const {icon,escapeHTML} = (()=>{
// Local SVG icons: no external fonts, images or CDN required.
const p = {
  'user':'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3-6 8-6s8 2 8 6"/>',
  'settings':'<path d="M12 2.5l1.7 2.1 2.7-.1.6 2.6 2.5 1.1-.8 2.6 1.4 2.2-1.8 2-0.1 2.7-2.6.6-1.3 2.4-2.5-.8-2.2 1.4-2-1.8-2.7-.1-.6-2.6-2.4-1.3.8-2.5-1.4-2.2 1.8-2 .1-2.7 2.6-.6 1.3-2.4 2.5.8z"/><circle cx="12" cy="12" r="3"/>',
  'cap':'<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c3 3 9 3 12 0v-5M22 9v7"/>',
  'bookcheck':'<path d="M4 5c3-2 6-2 8 0 2-2 5-2 8 0v14c-3-2-6-2-8 0-2-2-5-2-8 0zM12 5v14"/><path d="m15 10 1.5 1.5L19 9"/>',
  'clipboard':'<rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 4V2h6v2m-6 8 2 2 4-4"/>',
  'rocket':'<path d="M14 4c3-1 5-1 7-1 0 5-2 10-7 14l-5-5c1-3 3-6 5-8zM9 12l-4 1-2 5 5-2m5 0-1 5-5 1 1-4"/><circle cx="16" cy="9" r="2"/><path d="M6 18c-2 1-3 3-3 5 2 0 4-1 5-3"/>',
  'chevron':'<path d="m9 6 6 6-6 6"/>',
  'back':'<path d="m15 18-6-6 6-6"/>',
  'headphones':'<path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14v5a2 2 0 0 0 2 2h2v-7H6a2 2 0 0 0-2 2m16-2v5a2 2 0 0 1-2 2h-2v-7h2a2 2 0 0 1 2 2"/>',
  'mic':'<rect x="9" y="2" width="6" height="13" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4m-4 0h8"/>',
  'book':'<path d="M4 5c3-2 6-2 8 0 2-2 5-2 8 0v14c-3-2-6-2-8 0-2-2-5-2-8 0zM12 5v14"/>',
  'pencil':'<path d="m4 20 4-.5L20 7.5 16.5 4 4.5 16zM14.5 6l3.5 3.5M3 21h18"/>',
  'volume':'<path d="M4 9h4l5-4v14l-5-4H4zM17 9a4 4 0 0 1 0 6m2-9a8 8 0 0 1 0 12"/>',
  'mute':'<path d="M4 9h4l5-4v14l-5-4H4zM17 9l5 6m0-6-5 6"/>',
  'lock':'<rect x="5" y="10" width="14" height="12" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>'
};
function icon(name, className='') {
  return `<svg class="icon ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p[name]||p.chevron}</svg>`;
}
function escapeHTML(value) { return String(value).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

return {icon,escapeHTML};
})();
const {header} = (()=>{

function header(logged=false){
 return `<header class="top-bar"><div class="brand"><h1>单词消消乐</h1><p>Word Match</p></div>
 <button class="top-action" type="button" data-route="login">${icon('user')}<span>${logged?'账户':'登录'}</span><small>${logged?'Account':'Log In'}</small></button>
 <button class="top-action" type="button" data-route="settings">${icon('settings')}<span>设置</span><small>Settings</small></button></header>`;
}

return {header};
})();
const {stageCard} = (()=>{

const names={kindergarten:['幼儿园','Kindergarten'],primary:['小学','Primary School'],junior:['初中','Junior High School'],senior:['高中','Senior High School'],university:['大学','University'],postgraduate:['研究生','Postgraduate']};
function stageCard(data){
 const levels=[['幼儿园小班','Kindergarten Junior Class'],['幼儿园中班','Kindergarten Middle Class'],['幼儿园大班','Kindergarten Senior Class'],['小学一年级','Primary School · Grade 1']];
 const passes=Array.isArray(data.passedLevels)?data.passedLevels:[];
 const ordered=['junior','middle','senior'];let index=0;
 while(index<ordered.length&&passes.includes(ordered[index]))index++;
 const [cn,en]=levels[index];
 return `<button type="button" class="stage-card stage-link" data-quick="learn" aria-label="继续当前学习周">${icon('cap','stage-icon')}<div class="stack small"><div class="stage-label">当前阶段</div><small>Current Stage</small></div><div class="stage-value">${escapeHTML(cn)}</div><div class="stage-en">${escapeHTML(en)}</div></button>`;
}

return {stageCard};
})();
const {progressCards} = (()=>{

function progressCards(data){
 const count=Number.isFinite(data.wordsEliminated)?Math.max(0,Math.floor(data.wordsEliminated)):0;
 const exams=(Array.isArray(data.examScores)?data.examScores:[]).filter(n=>typeof n==='number'&&Number.isFinite(n)&&n>=0&&n<=100);
 const average=exams.length? (exams.reduce((a,b)=>a+b,0)/exams.length).toFixed(1).replace(/\.0$/,'') :null;
 return `<div class="metrics-grid">
  <button type="button" class="metric-card metric-button" data-quick="match">${icon('bookcheck','metric-icon')}<div class="metric-heading"><strong>已消灭的单词数</strong><small>Words Eliminated</small></div><div class="metric-value"><strong>${count} 个</strong><small>${count} Words</small></div><div class="metric-caption"><span>累计学会单词</span><small>Total Words Learned</small></div></button>
  <button type="button" class="metric-card metric-button" data-route="results">${icon('clipboard','metric-icon')}<div class="metric-heading"><strong>综合考试成绩</strong><small>Average Exam Score</small></div><div class="metric-value"><strong>${average===null?'待评估':average+' 分'}</strong><small>${average===null?'Pending':average+' Points'}</small></div><div class="metric-caption"><span>所有考试的平均分</span><small>Average of All Exams</small></div></button>
 </div>`;
}

return {progressCards};
})();
const {journeyButton,journeyPage} = (()=>{

function journeyButton(){return `<button type="button" class="journey" data-quick="learn"><span class="journey-icon">${icon('rocket')}</span><span class="journey-text"><strong>进阶之旅</strong><small>Level Up</small></span>${icon('chevron','journey-chevron')}</button>`;}
function journeyPage(){
 const stages=[['幼儿园','Kindergarten'],['小学','Primary School'],['初中','Junior High School'],['高中','Senior High School'],['大学','University'],['研究生','Postgraduate']];
 return `<div class="inner-panel"><div class="bilingual-head"><h3>英语学习阶段</h3><p>English Learning Stages</p></div><div class="journey-list">${stages.map((s,i)=>`<div class="stage-item"><span class="stage-num">${i+1}</span><div class="item-name"><strong>${s[0]}</strong><small>${s[1]}</small></div>${icon('chevron','lock-icon')}</div>`).join('')}</div><p class="secondary-info">选择阶段查看课程。幼儿园已开放；其他阶段正在编排题库。</p><p class="secondary-info">Choose a stage. Kindergarten lessons are available now.</p></div>`;
}

return {journeyButton,journeyPage};
})();
const {skills,pteSummary} = (()=>{

const skills=[{id:'listening',cn:'听力',en:'Listening',target:58,icon:'headphones'},{id:'speaking',cn:'口语',en:'Speaking',target:76,icon:'mic'},{id:'reading',cn:'阅读',en:'Reading',target:59,icon:'book'},{id:'writing',cn:'写作',en:'Writing',target:69,icon:'pencil'}];
function pteSummary(data){
 return `<section class="section"><div class="bilingual-head"><h2>我的PTE成绩与目标</h2><p>My PTE Scores and Goals</p></div><div class="pte-grid">${skills.map(s=>{
 const score=data.pteScores?.[s.id]; const valid=typeof score==='number' && Number.isFinite(score)&&score>=10&&score<=90;
 const gap=valid?Math.max(0,s.target-score):null;
 const progress=valid?Math.max(0,Math.min(100,score/s.target*100)):0;
 return `<button type="button" data-route="${s.id}" class="pte-card ${s.id}"><div class="pte-heading">${icon(s.icon)}<span><strong>${s.cn}</strong><small>${s.en}</small></span>${icon('chevron','pte-chevron')}</div><div class="progress-track" role="progressbar" aria-label="${s.cn}目标完成进度" aria-valuemin="0" aria-valuemax="100" ${valid?`aria-valuenow="${Math.round(progress)}"`:'aria-valuetext="待评估"'}><span style="width:${progress}%"></span></div><div class="pte-detail"><span>当前：${valid?score+'分':'待评估'}</span><small>Current: ${valid?score:'Pending'}</small></div><div class="pte-detail"><strong>目标：${s.target}分</strong><small>Target: ${s.target}</small></div><div class="pte-detail"><span>差距：${valid?gap+'分':'待计算'}</span><small>Gap: ${valid?gap:'Pending'}</small></div></button>`;
 }).join('')}</div></section>`;
}

return {skills,pteSummary};
})();
const {subpage} = (()=>{


function subpage(page, data){
 const skill=skills.find(s=>s.id===page);
 let name='',english='',content='';
 if(skill){
 name=`${skill.cn}题库`; english=`${skill.en} Question Bank`;
 content=`<div class="placeholder">${icon(skill.icon,'placeholder-icon')}<h3>${skill.cn}练习</h3><p>${skill.en} Practice</p><div class="placeholder-notice"><strong>题库尚未接入</strong><small>Question Bank Not Connected Yet</small></div></div>`;
 }else if(page==='words'){
 name='已消灭的单词数';english='Words Eliminated';
 const learned=new Set((data.learnedWords||[]).map(x=>String(x).toLowerCase())).size;
 const seen=new Set((data.wordsSeen||[]).map(x=>String(x).toLowerCase())).size;
 const days=new Set(data.studyDays||[]).size;
 const eliminated=Math.max(learned, Number(data.wordsEliminated)||0);
 content=`<div class="wm-stats-grid"><div class="wm-stat">${icon('calendar')}<strong>${days} 天</strong><span>坚持学习</span><small>Days of Learning</small></div><div class="wm-stat">${icon('bookcheck')}<strong>${seen} 个</strong><span>见过的单词</span><small>Words Seen</small></div><div class="wm-stat">${icon('cap')}<strong>${learned} 个</strong><span>学习了的单词</span><small>Words Learned</small></div><div class="wm-stat">${icon('clipboard')}<strong>${eliminated} 个</strong><span>累计消灭</span><small>Words Eliminated</small></div></div><button class="primary-action" data-route="journey">去消灭更多单词<small>Learn More Words</small></button>`;
 }else if(page==='results'){
 name='综合考试成绩';english='Exam Results';
 const history=(data.examHistory||[]).filter(x=>x&&Number.isFinite(Number(x.score))&&[20,40].includes(Number(x.week))&&x.skill==='pte-exam');
 const avg=history.length?(history.reduce((a,b)=>a+Number(b.score),0)/history.length).toFixed(1).replace(/\.0$/,''):'—';
 const best=history.length?Math.max(...history.map(x=>Number(x.score))):'—';
 const stageNames={junior:'幼儿园小班',middle:'幼儿园中班',senior:'幼儿园大班',primary:'小学',juniorHigh:'初中',seniorHigh:'高中',university:'大学',postgraduate:'研究生'};
 const sorted=history.slice().reverse();
 content=`<div class="wm-stats-grid wm-exam-stats"><div class="wm-stat"><strong>${avg}</strong><span>平均分</span><small>Average</small></div><div class="wm-stat"><strong>${history.length}</strong><span>参加考试</span><small>Exams Taken</small></div><div class="wm-stat"><strong>${best}</strong><span>最高分</span><small>Highest Score</small></div></div><p class="secondary-info">只统计期中、期末正式考试，不计练习题成绩。</p><div class="wm-exam-list">${sorted.length?sorted.map((x,i)=>`<div class="wm-exam-row"><div><strong>${stageNames[x.grade]||escapeHTML(String(x.grade||'未知阶段'))} · ${Number(x.week)===20?'期中考试':'期末考试'}</strong><small>${x.at?escapeHTML(String(x.at).slice(0,10)):''}</small></div><b>${x.score} 分</b><button type="button" class="wm-mini-action" data-exam-grade="${escapeHTML(String(x.grade||''))}" data-exam-week="${Number(x.week)}">重新考试</button></div>`).join(''):'<div class="placeholder-notice">尚无正式期中或期末考试成绩。完成考试后会自动显示在这里。</div>'}</div><button class="primary-action" type="button" data-route="journey">去参加更多考试</button><button class="secondary-action" type="button" data-route="mistakes">错题巩固练习</button>`;
 }else if(page==='mistakes'){
 name='考试错题巩固练习';english='Exam Mistake Review';
 const mistakes=(data.examMistakes||[]);
 content=`<div class="inner-panel"><h3>考试错题记录：${mistakes.length} 道</h3><p class="secondary-info">只汇总正式期中、期末考试错题。考试完成后原考试页也会提供同题型巩固训练。</p>${mistakes.length?mistakes.slice(-30).reverse().map((q,i)=>`<div class="wm-exam-row"><div><strong>${escapeHTML(String(q.word||q.topic||q.type||'考试错题'))}</strong><small>正确答案：${escapeHTML(String(q.answer||q.cn||''))}</small></div></div>`).join(''):'<p class="secondary-info">尚无可回顾的历史错题；以前的考试没有保存逐题记录，不能自动恢复。</p>'}<button class="primary-action" type="button" data-route="journey">进入考试与错题训练</button></div>`;
 }else if(page==='register'){
 name='本机学习档案';english='Local Learning Profile';
 content=`<div class="inner-panel"><h3>邮箱注册 · Create Account</h3><label class="input-label" for="authEmail">邮箱 · Email</label><input id="authEmail" class="input" type="email" autocomplete="email" placeholder="you@example.com"><label class="input-label" for="authPassword">密码 · Password（至少6位）</label><input id="authPassword" class="input" type="password" autocomplete="new-password" minlength="6" placeholder="Password"><button class="primary-action" type="button" data-auth="signup">注册并发送验证邮件<small>Register & Verify Email</small></button><button class="secondary-action" type="button" data-auth="google">使用 Google 一键登录 · Continue with Google</button><button class="secondary-action" type="button" data-route="login">已有账户？登录 · Log In</button><p id="authStatus" class="secondary-info" role="status">${escapeHTML(window.WMAuth?.status||'正在连接 Firebase…')}</p></div>`;
 }else if(page==='journey'){
 name='进阶之旅';english='Level Up'; content='__JOURNEY__';
 }else if(page==='login'){
 name=data.nickname?'账户':'登录';english=data.nickname?'Account':'Log In';
 content=`<div class="inner-panel"><h3>邮箱账户 · Email Account</h3><p id="authUserInfo" class="secondary-info">${escapeHTML(window.WMAuth?.user?.email||'未登录 · Guest')}</p><label class="input-label" for="authEmail">邮箱 · Email</label><input id="authEmail" class="input" type="email" autocomplete="email" placeholder="you@example.com"><label class="input-label" for="authPassword">密码 · Password</label><input id="authPassword" class="input" type="password" autocomplete="current-password" placeholder="Password"><button class="primary-action" type="button" data-auth="login">邮箱登录<small>Log In</small></button><button class="secondary-action" type="button" data-auth="google">使用 Google 一键登录 · Continue with Google</button><button class="secondary-action" type="button" data-route="register">注册<small>Register</small></button><button class="secondary-action" type="button" data-auth="reset">忘记密码 · Reset Password</button><button class="secondary-action" type="button" data-auth="verify">重发验证邮件 · Resend Verification</button><button class="secondary-action" type="button" data-auth="logout">退出登录 · Log Out</button><p id="authStatus" class="secondary-info" role="status">${escapeHTML(window.WMAuth?.status||'正在连接 Firebase…')}</p><p class="secondary-info">原有本机学习记录保留，账户登录不会清空记录。</p></div>`;
 }else if(page==='settings'){
 name='设置';english='Settings';
 content=`<div class="inner-panel"><div class="setting-row"><span>声音<small>Sound</small></span><button class="toggle" data-action="sound" type="button">${data.sound?'开启':'关闭'}<small>${data.sound?'On':'Off'}</small></button></div><label class="input-label" for="accent">英语口音 · English Accent</label><select id="accent" class="input"><option value="en-GB" ${data.accent==='en-GB'?'selected':''}>英式英语 · British English</option><option value="en-US" ${data.accent==='en-US'?'selected':''}>美式英语 · American English</option></select><label class="input-label" for="azureVoice" style="margin-top:12px">AI 英语配音角色 · English Voice</label><select id="azureVoice" class="input">${(data.accent==='en-GB'?[['en-GB-SoniaNeural','Sonia · 英式女声'],['en-GB-RyanNeural','Ryan · 英式男声']]:[['en-US-JennyNeural','Jenny · 美式女声'],['en-US-AriaNeural','Aria · 美式女声'],['en-US-GuyNeural','Guy · 美式男声']]).map(v=>`<option value="${v[0]}" ${data.azureVoice===v[0]?'selected':''}>${v[1]}</option>`).join('')}</select><label class="input-label" for="azureChineseVoice" style="margin-top:12px">AI 中文配音角色 · Chinese Voice</label><select id="azureChineseVoice" class="input">${[['zh-CN-XiaoxiaoNeural','晓晓 · 中文女声'],['zh-CN-XiaoyiNeural','晓伊 · 中文女声'],['zh-CN-YunxiNeural','云希 · 中文男声'],['zh-CN-YunjianNeural','云健 · 中文男声']].map(v=>`<option value="${v[0]}" ${data.azureChineseVoice===v[0]?'selected':''}>${v[1]}</option>`).join('')}</select><button type="button" class="secondary-action" data-action="voice-test">试听所选AI声音 · Preview Voice</button><label class="input-label" for="voiceSpeed" style="margin-top:12px">英语朗读速度 · Playback Speed</label><select id="voiceSpeed" class="input"><option value="0.75" ${data.voiceSpeed===0.75?'selected':''}>0.75× · 慢速 Slow</option><option value="0.9" ${data.voiceSpeed===0.9?'selected':''}>0.9× · 稍慢 Gentle</option><option value="1" ${data.voiceSpeed===1?'selected':''}>1.0× · 正常 Normal</option><option value="1.15" ${data.voiceSpeed===1.15?'selected':''}>1.15× · 稍快 Fast</option><option value="1.3" ${data.voiceSpeed===1.3?'selected':''}>1.3× · 快速 Faster</option></select><p class="secondary-info">Azure在线AI英语朗读：播放速度只影响播放，不重新生成音频；相同文本及配音角色共用云端缓存。</p></div>`;
 }else {name='首页';english='Home';}
 return `<section class="subpage"><div class="subhead"><button type="button" data-route="home" class="back" aria-label="返回首页">${icon('back')}</button><div class="bilingual-head"><h2>${name}</h2><p>${english}</p></div></div>${content}<button type="button" data-route="home" class="back-home">返回首页<small>Back to Home</small></button></section>`;
}

return {subpage};
})();

async function loadFeature(route,container,context){
 if(route!=='journey')return null;
 return mountKindergarten(container,context);
}
function mountKindergarten(container,context){
 let closed=false;
 const holder=document.createElement('section');holder.className='subpage';
 holder.innerHTML=subpage('journey',context.data).replace('__JOURNEY__',journeyPage());
 container.append(holder);
 const EXAM_HTML="<!doctype html><html lang=\"zh-CN\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1,viewport-fit=cover\"><style>\n*{box-sizing:border-box}body{margin:0;padding:15px 12px 5px;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC',sans-serif;color:#613596;background:#fdfbff}.shell{max-width:660px;margin:auto}.head{border-radius:16px;padding:18px;background:#efe4ff}h1{font-size:21px;margin:4px 0 8px}p{line-height:1.7}.muted{color:#916fae;font-size:13px}.panel{border:1px solid #e2d3f1;border-radius:14px;padding:14px;margin-top:12px;background:white}.question{font-weight:700;font-size:17px;line-height:1.7}.options{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px;margin-top:14px}button{font:inherit;cursor:pointer;min-width:0;white-space:normal;overflow-wrap:anywhere;border:1px solid #d8c5ed;background:#faf7ff;color:#603497;border-radius:10px;padding:13px 8px}button:disabled{opacity:.5}.action{width:100%;margin-top:12px;background:#dec8fa;font-weight:700}.feedback{padding:12px;border-radius:10px;background:#f7f0ff;margin-top:12px}.progress{display:flex;justify-content:space-between;color:#9876b6;font-size:13px}.hidden{display:none!important}.row{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}.tiles button{min-width:38px;font-size:17px;font-weight:700}.answer{border:1px dashed #bd99df;border-radius:9px;padding:12px;min-height:48px;margin-top:12px;overflow-wrap:anywhere}.good{color:#277a50}.bad{color:#b34753}\n.stage-link{width:100%;font:inherit;cursor:pointer}.stage-link:focus-visible{outline:3px solid #8c5aca}.wm-stats-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:15px 0}.wm-exam-stats{grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}.wm-stat{border:1px solid #e4d4f6;border-radius:15px;background:#fff;text-align:center;padding:15px 5px;display:flex;flex-direction:column;align-items:center;gap:6px;min-width:0;color:#613493}.wm-stat svg{height:24px;width:24px}.wm-stat strong{font-size:25px}.wm-stat span{font-size:13px;font-weight:600}.wm-stat small{font-size:10px;color:#9c81b6}.wm-exam-list{display:flex;flex-direction:column;gap:10px;margin:14px 0}.wm-exam-row{background:white;border:1px solid #e3d5f5;border-radius:13px;padding:12px;display:flex;align-items:center;gap:9px}.wm-exam-row>div{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px}.wm-exam-row strong{font-size:12px}.wm-exam-row small{font-size:10px;color:#9478b6}.wm-exam-row b{font-size:15px;white-space:nowrap}.wm-mini-action{font:inherit;font-size:11px;color:#643b9c;background:#f5eeff;border:1px solid #d8c4f0;border-radius:9px;padding:8px;white-space:nowrap}</style></head><body><main class=\"shell\"><header class=\"head\"><div>单词消消乐 · PTE 基础能力模拟考试</div><h1 id=\"title\">分级模拟考试</h1><div class=\"muted\" id=\"intro\">20道题 · 分级练习 · 错题同类强化5次</div></header><section class=\"panel\" id=\"stage\"></section></main><script>\nlet grade,week,pool=[],exam=[],i=0,results=[],remedials=[],phase='exam',rindex=0,remCount=0,choiceIndex=[],selected=[],locked=false;const el=id=>document.getElementById(id);const clean=s=>String(s||'').replace(/（[^）]*）/g,'').replace(/\\([^)]*\\)/g,'').trim();const escape=s=>String(s).replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#39;'}[c]));\nfunction say(v){const synth=speechSynthesis;synth.cancel();const prefs=parent.WordMatchVoiceSettings?.()||{};if(prefs.sound===false)return;const u=new SpeechSynthesisUtterance(v);u.lang=prefs.accent||'en-US';u.rate=.82;const voices=synth.getVoices();const voice=voices.find(x=>x.voiceURI===prefs.voiceChoice);if(voice)u.voice=voice;synth.speak(u)}\nfunction shuffle(array,seed){return array.map((v,j)=>({v,k:(j*37+seed*19)%97})).sort((a,b)=>a.k-b.k).map(x=>x.v)}\nfunction startExam(g,w){grade=g;week=w;const src=parent.WM_DRAFT_LESSONS||{};const indices=w===20?Array.from({length:18},(_,j)=>j+2):Array.from({length:19},(_,j)=>j+21);pool=indices.map(k=>({week:k,...src[g+'-'+k]})).filter(x=>x.vocabulary?.length&&x.story);if(!pool.length){el('stage').textContent='题库暂未准备好';return}el('title').textContent=(w===20?'期中考试':'期末考试')+' · '+({junior:'小班',middle:'中班',senior:'大班'}[g]||'幼儿园');exam=[];for(let j=0;j<20;j++)exam.push(makeQuestion(['audio','topic','reading','spelling'][j%4],j));draw()}\nfunction makeQuestion(type,j,override){const l=pool[(j*7+3)%pool.length];const pair=l.vocabulary[(j*3+1)%l.vocabulary.length];const w=pair[0],cn=clean(pair[1]);const all=pool.flatMap(x=>x.vocabulary||[]).map(x=>({w:x[0],cn:clean(x[1])})).filter(x=>x.cn&&x.w);const distract=all.filter(x=>x.cn!==cn&&x.w!==w).slice((j*11)%Math.max(1,all.length-4)).slice(0,3).map(x=>x.cn);const others=[...new Set([...distract,...all.map(x=>x.cn)])].filter(x=>x!==cn).slice(0,3);const opts=shuffle([cn,...others],j);return {type,word:w,cn,story:l.story,topic:l.titleZh,opts,answer:cn,week:l.week}}\nfunction question(){return phase==='exam'?exam[i]:remedials[rindex]}\nfunction finishAnswer(ok){if(locked)return;locked=true;const q=question();const feedback=el('feedback');feedback.classList.remove('hidden');feedback.className='feedback '+(ok?'good':'bad');feedback.textContent=(ok?'✓ 正确！':'✗ 错误。')+' 正确答案：'+(q.type==='spelling'?q.word:q.answer);el('next').classList.remove('hidden');el('next').textContent=phase==='exam'?(i===19?'查看成绩':'下一题 →'):(rindex===remedials.length-1?'完成错题训练':'下一道巩固题 →');if(phase==='exam')results[i]={ok,q};else remCount+=ok?1:0;}\nfunction draw(){locked=false;const q=question();const stage=el('stage');stage.replaceChildren();if(!q)return;const progress=document.createElement('div');progress.className='progress';progress.textContent=phase==='exam'?'正式练习 '+(i+1)+' / 20':'错题强化 '+(rindex+1)+' / '+remedials.length;stage.append(progress);const name=document.createElement('h2');name.style.fontSize='17px';name.textContent={audio:'听力：听单词选含义',topic:'听力：听短文选主题',reading:'阅读：理解单词含义',spelling:'写作：拼出听到的单词'}[q.type];stage.append(name);const prompt=document.createElement('div');prompt.className='question';prompt.textContent=q.type==='audio'?'请听英文录音，选择正确的中文含义。':q.type==='topic'?'请听完整短文，选择录音的主要话题。':q.type==='reading'?'阅读这个英文单词，选出正确的中文含义：'+q.word:'请听单词，然后按正确顺序拼写。';stage.append(prompt);\nif(q.type!=='reading'){const b=document.createElement('button');b.className='action';b.textContent='🔊 播放录音 · Listen';b.onclick=()=>say(q.type==='topic'?q.story:q.word);stage.append(b)}\nif(q.type==='topic'){const opts=[q.topic,...pool.filter(x=>x.titleZh!==q.topic).slice(0,3).map(x=>x.titleZh)];q.answer=q.topic;optionButtons(stage,shuffle(opts,i+5),q.answer)}else if(q.type!=='spelling')optionButtons(stage,q.opts,q.answer);else spell(stage,q);\nconst fb=document.createElement('div');fb.id='feedback';fb.className='feedback hidden';stage.append(fb);const next=document.createElement('button');next.id='next';next.className='action hidden';next.onclick=()=>{if(phase==='exam'){if(i<19){i++;draw()}else showScore()}else if(rindex<remedials.length-1){rindex++;draw()}else showDone()};stage.append(next)}\nfunction optionButtons(stage,opts,answer){const grid=document.createElement('div');grid.className='options';for(const val of opts){const b=document.createElement('button');b.textContent=val;b.onclick=()=>finishAnswer(val===answer);grid.append(b)}stage.append(grid)}\nfunction spell(stage,q){let picks=[];const chars=shuffle([...q.word.toLowerCase()],i+37);const box=document.createElement('div');box.className='answer';stage.append(box);const row=document.createElement('div');row.className='row tiles';stage.append(row);const buttons=[];chars.forEach((c,j)=>{const b=document.createElement('button');b.textContent=c;b.onclick=()=>{if(locked)return;picks.push({c,j});b.disabled=true;box.textContent=picks.map(x=>x.c).join('');if(picks.length===chars.length)finishAnswer(box.textContent.toLowerCase()===q.word.toLowerCase())};row.append(b);buttons.push(b)});const reset=document.createElement('button');reset.textContent='重新排列';reset.className='action';reset.onclick=()=>{if(locked)return;picks=[];box.textContent='';buttons.forEach(b=>b.disabled=false)};stage.append(reset)}\nfunction showScore(){const score=results.filter(x=>x.ok).length*5;parent.postMessage({source:'wordmatch-course',type:'exam',grade,week,skill:'pte-exam',score,mistakes:results.filter(x=>!x.ok).map(x=>({type:x.q.type,word:x.q.word,cn:x.q.cn,answer:x.q.answer,topic:x.q.topic}))},'*');const wrong=results.filter(x=>!x.ok);const stage=el('stage');stage.replaceChildren();const h=document.createElement('h2');h.textContent='模拟考试成绩：'+score+' / 100';stage.append(h);const p=document.createElement('p');p.textContent=wrong.length?'答错 '+wrong.length+' 道；每道错题将安排5道同题型、不同内容的巩固练习。':'20道题全部正确，做得很好！';stage.append(p);if(wrong.length){remedials=[];wrong.forEach((r,n)=>{for(let k=0;k<5;k++){const quest=makeQuestion(r.q.type,(n*11+k+2));if(quest.type===r.q.type&&quest.word===r.q.word)quest.word=pool[(n+k+1)%pool.length].vocabulary[0][0];remedials.push(quest)}});const b=document.createElement('button');b.className='action';b.textContent='开始错题巩固（'+remedials.length+'题）';b.onclick=()=>{phase='remedial';rindex=0;remCount=0;draw()};stage.append(b)}else{const b=document.createElement('button');b.className='action';b.textContent='重新考试';b.onclick=()=>{phase='exam';i=0;results=[];draw()};stage.append(b)}}\nfunction showDone(){const stage=el('stage');stage.replaceChildren();const h=document.createElement('h2');h.textContent='本次错题强化完成';stage.append(h);const p=document.createElement('p');p.textContent='共完成 '+remedials.length+' 道同类型巩固练习，正确 '+remCount+' 道。考试原始成绩不因复习而改变。';stage.append(p);const b=document.createElement('button');b.className='action';b.textContent='重新做20题模拟考试';b.onclick=()=>{phase='exam';i=0;results=[];draw()};stage.append(b)}\n<\/script></body></html>\n";
 const original=holder.innerHTML;
 const firstStage=holder.querySelector('.stage-item');
 if(!firstStage)return null;
 firstStage.style.cursor='pointer';firstStage.setAttribute('role','button');firstStage.tabIndex=0;
 let frame=null, lessonFrame=null, back=null, toMap=null;
 function size(f){if(!f||f.hidden)return;try{const d=f.contentDocument;const children=[...d.body.children].filter(x=>getComputedStyle(x).display!=='none');const last=children.at(-1);const rect=last?.getBoundingClientRect();const height=rect?rect.bottom:0;f.style.height=Math.max(160,Math.ceil(height+16))+'px'}catch(e){}}
 function mkFrame(src,title){let f=document.createElement('iframe');f.title=title;f.style.cssText='border:0;display:block;width:100%;min-height:160px;background:white;';const base=new URL('./',window.location.href).href;f.srcdoc=src.replace('<head>','<head><base href="'+base+'">');return f;}
 function goMap(){if(lessonFrame){lessonFrame.hidden=true;lessonFrame.style.display="none";}if(toMap){toMap.hidden=true;}frame.hidden=false;frame.style.display="block";back.hidden=false;size(frame);window.scrollTo(0,0)}
 function openLesson(week,grade){
  if(lessonFrame){lessonFrame.remove();toMap?.remove();lessonFrame=null;toMap=null;}
  if(!lessonFrame){
   toMap=document.createElement('button');toMap.className='back';toMap.style.cssText='display:block;margin:12px 0 0;padding:11px 12px;width:100%;border-radius:12px;background:#eadbfa;color:#623594;text-align:center';toMap.textContent='← 返回课程地图';toMap.onclick=goMap;lessonFrame=mkFrame((week===20||week===40)?EXAM_HTML:LESSON_HTML,(week===20||week===40)?'PTE分级模拟考试':'V13教学课程');holder.append(lessonFrame);holder.append(toMap);

   lessonFrame.addEventListener('load',()=>{if(closed)return;configureLesson();new ResizeObserver(()=>size(lessonFrame)).observe(lessonFrame.contentDocument.body);new MutationObserver(()=>requestAnimationFrame(()=>size(lessonFrame))).observe(lessonFrame.contentDocument.body,{childList:true,subtree:true,attributes:false});});
  }
  function configureLesson(){const d=lessonFrame.contentDocument,w=lessonFrame.contentWindow;if(week===20||week===40){w?.startExam?.(grade,week);frame.hidden=true;frame.style.display='none';back.hidden=true;lessonFrame.hidden=false;lessonFrame.style.display='block';toMap.hidden=false;size(lessonFrame);window.scrollTo(0,0);return;}if(!w?.WORD_MATCH_KG_DATA)return;
   Object.assign(w.WORD_MATCH_KG_DATA.lessons,window.WM_DRAFT_LESSONS);
   d.querySelector('#gradeSelect').value=grade;d.querySelector('#weekSelect').value=String(week);
   d.querySelector('#weekSelect').dispatchEvent(new Event('change',{bubbles:true}));
   if(!d.querySelector('#wm-integration')){let s=d.createElement('style');s.id='wm-integration';s.textContent='.selects{display:none!important}.vocab b{overflow-wrap:anywhere;word-break:break-word;font-size:clamp(10px,2.7vw,13px)}.vocab small{overflow-wrap:anywhere;word-break:break-word}.foot,.translation,.story,.panel,.work,.muted{overflow-wrap:anywhere;word-break:break-word;white-space:normal}.vocab button{overflow:hidden}.app>.back{display:none!important}.hero{display:flow-root!important;height:auto!important;min-height:0!important;margin-bottom:18px!important;overflow:visible!important}#lesson{display:flow-root;clear:both;min-width:0}.nav{clear:both!important;position:relative!important;z-index:1!important;margin:0 0 12px!important;grid-template-columns:repeat(3,minmax(0,1fr))!important}.nav button{min-width:0;max-width:100%;overflow-wrap:anywhere}#pte-groups{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;max-width:100%}#pte-ex .row{display:flex!important;flex-wrap:wrap!important;max-width:100%;gap:6px}#pte-ex .row>button{min-width:0!important;max-width:100%;flex:1 1 30%;overflow-wrap:anywhere;white-space:normal}#pte-ex,.panel{min-width:0;max-width:100%;overflow-wrap:anywhere}body{overflow-x:hidden}';d.head.append(s)}
   // Beginner practice: kindergarten teaches its own weekly words and short phrases before formal PTE tasks.
   const pteGroups=d.querySelector('#pte-groups');
   if(pteGroups){const panel=pteGroups.closest('section');if(panel)panel.remove();}
   if(false){const panel=null;
    if(panel&&!panel.dataset.wmBeginner){panel.dataset.wmBeginner='1';panel.replaceChildren();
     const heading=d.createElement('h2');heading.textContent='PTE 预备训练 · 从零开始';panel.append(heading);
     const intro=d.createElement('p');intro.className='muted';intro.textContent='幼儿园先练听懂单词、认识短句和简单跟读。正式PTE长篇听力总结等题型将在高级阶段逐步学习。';panel.append(intro);
     const task=d.createElement('div');task.className='work';task.style.cssText='max-width:100%;min-width:0;overflow-wrap:anywhere';panel.append(task);
     const words=(w.WORD_MATCH_KG_DATA.lessons[grade+'-'+week]||{}).vocabulary||[];
     const cards=words.slice(0,Math.min(5,words.length));let k=0;
     const title=d.createElement('h3');const play=d.createElement('button');play.className='outline';play.textContent='🔊 听一听 · Listen';const explain=d.createElement('p');explain.className='muted';const opts=d.createElement('div');opts.style.cssText='display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;max-width:100%';const feedback=d.createElement('p');feedback.className='muted';task.append(title,play,explain,opts,feedback);
     function drawBasic(){if(!cards.length){task.textContent='本周词汇暂未填写';return;}let word=cards[k%cards.length];title.textContent='第 '+(k+1)+' / '+cards.length+' 题 · 听音选中文';explain.textContent='先听英语单词，再选择正确的中文意思。';feedback.textContent='';opts.replaceChildren();play.onclick=()=>{const u=new w.SpeechSynthesisUtterance(word[0]);u.lang=window.localStorage.getItem('wm-voice-accent')==='en-GB'?'en-GB':'en-US';w.speechSynthesis.cancel();w.speechSynthesis.speak(u);};const distract=cards.filter(x=>x!==word).slice(0,3);const candidates=[word,...distract].sort((a,b)=>((a[0].length*7+k)%11)-((b[0].length*7+k)%11));for(const pair of candidates){const b=d.createElement('button');b.className='outline';b.style.cssText='min-width:0;white-space:normal;overflow-wrap:anywhere;padding:10px';b.textContent=pair[1];b.onclick=()=>{if(pair===word){feedback.textContent='✓ 答对了！ '+word[0]+' · '+word[1];b.disabled=true;const next=d.createElement('button');next.className='outline';next.textContent=k+1<cards.length?'下一题 →':'再练一次 ↻';next.onclick=()=>{k=(k+1)%cards.length;drawBasic()};feedback.append(' ',next);}else feedback.textContent='再听一次，试试看。';};opts.append(b)}}drawBasic();
    }
   }
   frame.hidden=true;frame.style.display="none";back.hidden=true;lessonFrame.hidden=false;lessonFrame.style.display="block";toMap.hidden=false;size(lessonFrame);window.scrollTo(0,0);
  }
  if(lessonFrame.contentDocument?.readyState==='complete'&&lessonFrame.contentWindow.WORD_MATCH_KG_DATA)configureLesson();
  else lessonFrame.addEventListener('load',configureLesson,{once:true});
 }
 function openMap(){
  holder.replaceChildren();back=document.createElement('button');back.className='back';back.style.cssText='display:block;margin-top:12px';back.textContent='← 返回进阶之旅';back.onclick=()=>{holder.innerHTML=original;const x=holder.querySelector('.stage-item');x.style.cursor='pointer';x.addEventListener('click',openMap);x.setAttribute('role','button');x.tabIndex=0; x.addEventListener('keydown',e=>{if(e.key==='Enter')openMap()});};
  frame=mkFrame(NAV_HTML,'幼儿园课程导航V1');holder.append(frame);holder.append(back);
  frame.addEventListener('load',()=>{
   if(closed)return;const d=frame.contentDocument;
   d.querySelector('#enter')?.click();if(!d.querySelector('#wm-linewrap')){const st=d.createElement('style');st.id='wm-linewrap';st.textContent='.foot,.details,.sub,.weekstatus,.week strong,.weeken{overflow-wrap:anywhere;word-break:break-word;white-space:normal}.week{min-width:0}';d.head.append(st)}
   function grade(){return ({'小班':'junior','中班':'middle','大班':'senior'})[d.querySelector('#crumb')?.textContent]||'junior'}
   function labels(){const g=grade(); d.querySelectorAll('.week').forEach(btn=>{const i=Number(btn.dataset.week);const lesson=window.WM_DRAFT_LESSONS?.[g+'-'+i];if(lesson){btn.querySelector('.weekstatus').textContent=lesson.titleZh;btn.classList.add('demo')}else if(g==='junior'&&i===1){btn.classList.add('demo')}});size(frame)}
   d.addEventListener('click',e=>{let card=e.target.closest('.week');if(card){const week=Number(card.dataset.week),g=grade();if(window.WM_DRAFT_LESSONS?.[g+'-'+week]||g==='junior'&&week===1){e.preventDefault();e.stopImmediatePropagation();openLesson(week,g);return}}
     if(e.target.closest('[data-class],[data-go]'))setTimeout(labels,0);
   },true);
   new ResizeObserver(()=>size(frame)).observe(d.body);labels();
  });
 }
 holder.querySelectorAll('.stage-item').forEach((node,i)=>{if(i===0)return;node.style.cursor='pointer';node.setAttribute('role','button');node.tabIndex=0;const open=()=>{const st=['小学','初中','高中','大学','研究生'][i-1];holder.innerHTML='<div class="inner-panel"><h3>'+st+' · '+(['Primary School','Junior High School','Senior High School','University','Postgraduate'][i-1])+'</h3><p class="secondary-info">这个学习阶段尚未完成课程题库，暂时不能开始答题。不会用虚假的练习内容冒充已经上线。</p><button class="back-home" id="back-stages">← 返回英语学习阶段</button></div>';holder.querySelector('#back-stages').onclick=()=>navigate('journey')};node.onclick=open;node.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}}});
 if(wmQuickMode==='learn'||wmQuickMode==='match'){
   const current=wmCurrentWeek();
   // Embed the lesson directly without requiring stage/map clicks.
   frame=document.createElement('div');frame.hidden=true;frame.style.display='none';
   back=document.createElement('button');back.hidden=true;back.style.display='none';
   holder.replaceChildren();
   openLesson(current.week,current.grade);
   if(wmQuickMode==='match'){
     const goMatchWhenReady=()=>{const d=lessonFrame?.contentDocument;if(!d)return false;const trigger=d.getElementById('goMatch');if(!trigger)return false;trigger.click();size(lessonFrame);return true};
     lessonFrame.addEventListener('load',()=>setTimeout(goMatchWhenReady,100),{once:true});
     setTimeout(goMatchWhenReady,350);
   }
   // Small link to the existing kindergarten course map.
   const mapLink=document.createElement('button');mapLink.type='button';mapLink.className='wm-map-tiny';mapLink.textContent='‹ 幼儿园小班 · 课程地图';
   mapLink.style.cssText='font-size:12px;padding:5px 8px;border:0;background:transparent;color:#7953ab;display:block;margin:4px 0 8px';
   mapLink.onclick=()=>{wmQuickMode='map';context.navigate('journey')};
   holder.prepend(mapLink);
   return ()=>{closed=true;try{lessonFrame?.contentWindow?.speechSynthesis?.cancel()}catch(e){}holder.remove()};
 }
 if(wmQuickMode==='map'){openMap();return ()=>{closed=true;holder.remove()};}
 firstStage.addEventListener('click',openMap);
 firstStage.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openMap()}});
 return ()=>{closed=true;try{lessonFrame?.contentWindow?.speechSynthesis?.cancel()}catch(e){}holder.remove()};
}








const WM_WEEK_KEY='wordmatch-current-week-v2';
function wmCurrentWeek(){try{const x=JSON.parse(localStorage.getItem(WM_WEEK_KEY)||'{}');return {grade:['junior','middle','senior'].includes(x.grade)?x.grade:'junior',week:Math.max(1,Math.min(40,Number(x.week)||1))}}catch{return {grade:'junior',week:1}}}
function wmSaveWeek(grade,week){try{localStorage.setItem(WM_WEEK_KEY,JSON.stringify({grade,week}))}catch{}}
let wmQuickMode='learn';
const storageKey='word-match-home-preview-v1';
const safeRead=()=>{try{return JSON.parse(localStorage.getItem(storageKey)||'{}')}catch{return {}}};
const stored=safeRead();
const data={nickname:typeof stored.nickname==='string'?stored.nickname:'',sound:stored.sound!==false,accent:stored.accent==='en-GB'?'en-GB':'en-US',voiceChoice:typeof stored.voiceChoice==='string'?stored.voiceChoice:'',voiceSpeed:[0.75,0.9,1,1.15,1.3].includes(Number(stored.voiceSpeed))?Number(stored.voiceSpeed):1,learnedWords:Array.isArray(stored.learnedWords)?stored.learnedWords:[],examHistory:Array.isArray(stored.examHistory)?stored.examHistory:[],passedLevels:Array.isArray(stored.passedLevels)?stored.passedLevels:[],
 stage:stored.stage||null,wordsEliminated:Array.isArray(stored.learnedWords)?new Set(stored.learnedWords).size:0,examScores:Array.isArray(stored.examHistory)?stored.examHistory.map(x=>x.score):Array.isArray(stored.examScores)?stored.examScores:[],pteScores:stored.pteScores||{},azureVoice:stored.azureVoice||'',azureChineseVoice:stored.azureChineseVoice||'zh-CN-XiaoxiaoNeural',wordsSeen:Array.isArray(stored.wordsSeen)?stored.wordsSeen:[],studyDays:Array.isArray(stored.studyDays)?stored.studyDays:[],examMistakes:Array.isArray(stored.examMistakes)?stored.examMistakes:[]};
// Firebase email registration, recovered from the earlier WordMatch implementation.
// Configuration is loaded only from firebase-config.js (not the Azure speech secret).
window.WMAuth={user:null,status:'正在连接 Firebase…'};
let wmFirebase=null;
async function initWMFirebase(){
 try{
  const {firebaseConfig}=await import('./firebase-config.js');
  if(!firebaseConfig?.apiKey||firebaseConfig.apiKey==='YOUR_API_KEY')throw Error('请填写 firebase-config.js');
  const [{initializeApp},{getAuth,onAuthStateChanged}]=await Promise.all([
   import('https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js'),
   import('https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js')]);
  wmFirebase={auth:getAuth(initializeApp(firebaseConfig))};
  onAuthStateChanged(wmFirebase.auth,user=>{
   WMAuth.user=user;
   WMAuth.status=user?(user.emailVerified?'邮箱已验证 · Verified':'请先验证邮箱 · Please verify email'):'未登录 · Guest';
   const el=document.getElementById('authUserInfo');if(el)el.textContent=user?.email||'未登录 · Guest';
   const st=document.getElementById('authStatus');if(st)st.textContent=WMAuth.status;
  });
 }catch(e){WMAuth.status='Firebase未配置：请上传 firebase-config.js；本机学习不受影响。';const el=document.getElementById('authStatus');if(el)el.textContent=WMAuth.status;console.info('Firebase:',e.message)}
}
async function wmAuthAction(action){
 const el=document.getElementById('authStatus');
 const show=msg=>{WMAuth.status=msg;if(el)el.textContent=msg};
 if(!wmFirebase){show('Firebase 尚未连接，请先配置 firebase-config.js');return}
 try{
  const auth=await import('https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js');
  const email=document.getElementById('authEmail')?.value.trim()||'';
  const password=document.getElementById('authPassword')?.value||'';
  if(action==='google'){
   const provider=new auth.GoogleAuthProvider();
   try{await auth.signInWithPopup(wmFirebase.auth,provider)}catch(e){if(e.code==='auth/popup-blocked'||e.code==='auth/popup-closed-by-user'||e.code==='auth/operation-not-supported-in-this-environment'){await auth.signInWithRedirect(wmFirebase.auth,provider)}else throw e}
   show('Google 登录请求已提交。');
  }else if(action==='signup'){
   if(password.length<6)throw Error('密码至少6位');
   const result=await auth.createUserWithEmailAndPassword(wmFirebase.auth,email,password);
   await auth.sendEmailVerification(result.user);
   show('验证邮件已发送，请打开邮箱完成验证后登录。');
  }else if(action==='login'){
   const result=await auth.signInWithEmailAndPassword(wmFirebase.auth,email,password);
   await result.user.reload();show(result.user.emailVerified?'邮箱登录成功 · Signed in':'请先验证邮箱后使用账户。');
  }else if(action==='reset'){
   if(!email)throw Error('请先输入邮箱');await auth.sendPasswordResetEmail(wmFirebase.auth,email);show('已发送密码重置邮件。');
  }else if(action==='verify'){
   const user=wmFirebase.auth.currentUser;if(!user)throw Error('请先登录');await auth.sendEmailVerification(user);show('已重新发送验证邮件。');
  }else if(action==='logout'){
   await auth.signOut(wmFirebase.auth);show('已退出登录。');
  }
 }catch(e){show('操作失败：'+(e.code||e.message))}
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-auth]');if(b)wmAuthAction(b.dataset.auth)});
initWMFirebase();
let page='home';
let cleanup=null;
let token=0;
const app=document.getElementById('app');

function drawHome(){
 app.classList.add('beach-home');
 const passes=Array.isArray(data.passedLevels)?data.passedLevels:[];
 const stages=[['幼儿园小班','Kindergarten Junior Class'],['幼儿园中班','Kindergarten Middle Class'],['幼儿园大班','Kindergarten Senior Class'],['小学一年级','Primary School · Grade 1']];
 let stage=0;while(stage<3&&passes.includes(['junior','middle','senior'][stage]))stage++;
 const exams=(Array.isArray(data.examScores)?data.examScores:[]).filter(n=>typeof n==='number'&&Number.isFinite(n)&&n>=0&&n<=100);
 const average=exams.length?(exams.reduce((a,b)=>a+b,0)/exams.length).toFixed(1).replace(/\.0$/,''):'待评估';
 const count=Math.max(0,Math.floor(Number(data.wordsEliminated)||0));
 const skillHTML=skills.map((skill,i)=>{
  const score=data.pteScores?.[skill.id],valid=Number.isFinite(score)&&score>=10&&score<=90;
  const x=i%2===0?229:628,y=i<2?1231:1517;
  return `<button class="home-hot home-skill" data-route="${skill.id}" style="left:${i%2===0?40:438}px;top:${i<2?1113:1395}px;width:376px;height:268px" aria-label="${skill.cn} ${skill.en}"></button>`+
   [valid?score:'待评估',skill.target,valid?Math.max(0,skill.target-score):'待计算'].map((value,j)=>`<span class="home-value home-score" style="left:${x}px;top:${y+j*46}px;width:166px;height:35px" data-home-value="${skill.id}-${['current','target','gap'][j]}">${escapeHTML(value)}</span>`).join('')+
   `<div class="home-progress" style="left:${i%2===0?63:460}px;top:${i<2?1195:1480}px;width:332px;height:23px" role="progressbar" aria-label="${skill.cn}进度" aria-valuemin="0" aria-valuemax="100" ${valid?`aria-valuenow="${Math.round(Math.min(100,score/skill.target*100))}"`:'aria-valuetext="待评估"'}><span style="width:${valid?Math.min(100,score/skill.target*100):0}%;background:${['#5da5f4','#ed80b6','#75b97a','#edb441'][i]}"></span></div>`;
 }).join('');
 app.innerHTML=`<div class="home-viewport"><section class="home-scene" aria-label="单词消消乐首页">
 <h1 class="sr-only">单词消消乐 Word Match</h1>
 <button class="home-hot" data-route="login" aria-label="账户 Account" style="left:520px;top:85px;width:140px;height:130px"></button>
 <button class="home-hot" data-route="settings" aria-label="设置 Settings" style="left:670px;top:85px;width:140px;height:130px"></button>
 <button class="home-hot" data-quick="learn" aria-label="当前阶段 ${escapeHTML(stages[stage][0])}" style="left:386px;top:465px;width:411px;height:100px"></button>
 <div class="home-value home-stage" style="left:393px;top:474px;width:392px;height:80px"><strong>${stages[stage][0]}</strong><small>${stages[stage][1]}</small></div>
 <button class="home-hot" data-quick="match" aria-label="已消灭的单词数 ${count}，进入单词游戏" style="left:46px;top:610px;width:372px;height:234px"></button>
 <span class="home-value home-count" style="left:70px;top:703px;width:321px;height:58px" data-home-value="words">${count} 个</span>
 <button class="home-hot" data-route="results" aria-label="综合考试成绩 ${average}" style="left:437px;top:610px;width:372px;height:234px"></button>
 <span class="home-value home-count" style="left:463px;top:703px;width:321px;height:58px" data-home-value="average">${escapeHTML(average)}${exams.length?' 分':''}</span>
 <button class="home-hot" data-quick="learn" aria-label="进阶之旅 Level Up" style="left:24px;top:883px;width:804px;height:97px"></button>
 ${skillHTML}
 </section></div>`;
 fitBeachHome();
}
function fitBeachHome(){
 const viewport=app.querySelector('.home-viewport'),scene=app.querySelector('.home-scene');if(!viewport||!scene)return;
 const style=getComputedStyle(app);const width=app.clientWidth-(parseFloat(style.paddingLeft)||0)-(parseFloat(style.paddingRight)||0);app.style.setProperty('--opening-scenery',getComputedStyle(scene).backgroundImage);const scale=width/852;scene.style.transform='scale('+scale+')';viewport.style.height=(1846*scale)+'px';
}
window.addEventListener('resize',fitBeachHome);
window.addEventListener('pageshow',()=>{if(page==='home'){try{const stored=JSON.parse(localStorage.getItem(storageKey)||'{}');for(const field of ['wordsEliminated','learnedWords','examScores','passedLevels','pteScores'])if(stored[field]!==undefined)data[field]=stored[field]}catch(e){}drawHome()}});
function drawFallback(route){
 if(page!==route) return;
 const output=subpage(route,data);
 app.innerHTML=route==='journey'?output.replace('__JOURNEY__',journeyPage()):output;
}
async function navigate(route){
 if(route==='listening'){location.href='./listening.html?v=14';return;}
 ++token; const thisToken=token;
 if(cleanup){try{cleanup()}catch(err){console.warn('Module cleanup',err)}cleanup=null;}
 page=route;
 if(route==='home'){drawHome();return;}
 app.classList.remove('beach-home');
 // Render the existing bilingual preview immediately, while checking for the optional module.
 drawFallback(route);
 // Only subpages get replaced: current home layout is never regenerated by a feature module.
 const preview=app.innerHTML;
 const featureRoot=document.createElement('div');
 const placeholder=document.createElement('div');
 const result=await loadFeature(route,featureRoot,{
   data,
   updateHomeData,
   goHome:()=>navigate('home'),
   navigate,
   emitUpdate:(detail)=>updateHomeData(detail)
 },()=>{});
 if(thisToken!==token){if(result)result();return;}
 if(featureRoot.childNodes.length){app.replaceChildren(featureRoot);cleanup=result;}
 else {app.innerHTML=preview;}
 if(route==='settings')populateVoices();
}
app.addEventListener('change',e=>{if(e.target.id==='accent'){data.accent=e.target.value;data.voiceChoice='';data.azureVoice='';save();navigate('settings')}if(e.target.id==='voiceChoice'){data.voiceChoice=e.target.value;save()}if(e.target.id==='azureVoice'){data.azureVoice=e.target.value;save()}if(e.target.id==='azureChineseVoice'){data.azureChineseVoice=e.target.value;save()}});
app.addEventListener('click',e=>{
 const quick=e.target.closest('[data-quick]');if(quick){if(quick.dataset.quick==='match'){window.WordMatchStandalone.open();return;}wmQuickMode='learn';navigate('journey');window.scrollTo({top:0,behavior:'instant'});return;}
 const route=e.target.closest('[data-route]');
 if(route){navigate(route.dataset.route);window.scrollTo({top:0,behavior:'instant'});return;}const exam=e.target.closest('[data-exam-grade]');if(exam){window.WordMatchOpenExam?.(exam.dataset.examGrade,Number(exam.dataset.examWeek));return;}
 const action=e.target.closest('[data-action]');if(!action)return;
 if(action.dataset.action==='sound'){data.sound=!data.sound;save();navigate('settings');}
 if(action.dataset.action==='voice-test'){window.WordMatchPreviewAzure?.();}
 if(action.dataset.action==='login'){
  const nick=document.getElementById('nickname')?.value.trim()||'';
  if(!nick)return;
  data.nickname=nick;save();navigate('home');
 }
});
document.addEventListener('change',e=>{if(e.target?.id==='voiceSpeed'){data.voiceSpeed=Number(e.target.value)||1;save();}});
function save(){try{localStorage.setItem(storageKey,JSON.stringify({nickname:data.nickname,sound:data.sound,accent:data.accent,voiceChoice:data.voiceChoice,voiceSpeed:data.voiceSpeed,stage:data.stage,learnedWords:data.learnedWords,examHistory:data.examHistory,passedLevels:data.passedLevels,wordsEliminated:data.wordsEliminated,examScores:data.examScores,pteScores:data.pteScores,azureVoice:data.azureVoice,azureChineseVoice:data.azureChineseVoice,wordsSeen:data.wordsSeen,studyDays:data.studyDays,examMistakes:data.examMistakes}))}catch{}}
function usableVoices(){return ('speechSynthesis' in window)?speechSynthesis.getVoices().filter(v=>v.lang?.toLowerCase().startsWith(data.accent.toLowerCase())):[]}
function populateVoices(){let sel=document.getElementById('voiceChoice');if(!sel)return;const voices=usableVoices();sel.replaceChildren(new Option('自动选择自然声音 · Auto',''));voices.forEach(v=>sel.add(new Option(v.name+(v.localService?' · 系统':' · 在线'),v.voiceURI)));if(voices.some(v=>v.voiceURI===data.voiceChoice))sel.value=data.voiceChoice;else sel.value='';}
function previewVoice(){if(!data.sound)return;if(!('speechSynthesis' in window))return;const u=new SpeechSynthesisUtterance('Hello Goldy, welcome to your English learning journey.');u.lang=data.accent;u.rate=.9;const v=usableVoices().find(v=>v.voiceURI===data.voiceChoice);if(v)u.voice=v;speechSynthesis.cancel();speechSynthesis.speak(u)}
if('speechSynthesis' in window)speechSynthesis.addEventListener?.('voiceschanged',()=>{if(page==='settings')populateVoices()});
// All learning records below are local practice outcomes, not official PTE scores.
// Only the graded final exam (week 40), never ordinary weekly practice, can advance the learner.
window.addEventListener('message',e=>{
 const frame=document.querySelector('iframe[title="PTE分级模拟考试"]');
 if(!frame||e.source!==frame.contentWindow)return;
 const m=e.data;
 if(!m||m.source!=='wordmatch-course'||m.type!=='exam'||m.skill!=='pte-exam'||!Number.isFinite(m.score))return;
 if(!['junior','middle','senior'].includes(m.grade)||![20,40].includes(m.week))return;
 const score=Math.max(0,Math.min(100,m.score));
 data.examHistory.push({grade:m.grade,week:m.week,skill:m.skill,score,at:new Date().toISOString()});
 data.examScores=data.examHistory.map(x=>x.score);
 if(Array.isArray(m.mistakes)){data.examMistakes.push(...m.mistakes.map(q=>({...q,grade:m.grade,week:m.week})).slice(0,30));data.examMistakes=data.examMistakes.slice(-500);}
 // Provisional pass score 60/100 until the grading rule is finalized.
 if(m.week===40&&score>=60){
  const grades=['junior','middle','senior'],idx=grades.indexOf(m.grade);
  if(grades.slice(0,idx).every(g=>data.passedLevels.includes(g))&&!data.passedLevels.includes(m.grade))data.passedLevels.push(m.grade);
 }
 save();
});
window.addEventListener('message',e=>{if(e.source!==document.querySelector('iframe[title="V13教学课程"]')?.contentWindow)return;const m=e.data;if(!m||m.source!=='wordmatch-lesson')return;if(m.type==='grade-exam-passed'&&m.week===40&&m.passed===true&&['junior','middle','senior'].includes(m.grade)){const order=['junior','middle','senior'];const idx=order.indexOf(m.grade);if(order.slice(0,idx).every(g=>data.passedLevels.includes(g))&&!data.passedLevels.includes(m.grade)){data.passedLevels.push(m.grade);save();}}if(m.type==='word-seen'&&typeof m.word==='string'){const w=m.word.trim().toLowerCase();if(w&&!data.wordsSeen.includes(w))data.wordsSeen.push(w);const day=new Date().toLocaleDateString('en-CA');if(!data.studyDays.includes(day))data.studyDays.push(day);save();}if(m.type==='week-complete'&&['junior','middle','senior'].includes(m.grade)&&Number.isInteger(m.week)){
  const cur=wmCurrentWeek(),order=['junior','middle','senior'];
  if(cur.grade===m.grade&&cur.week===m.week){
    const next=m.week<40?{grade:m.grade,week:m.week+1}:(order.indexOf(m.grade)<2?{grade:order[order.indexOf(m.grade)+1],week:1}:{grade:'senior',week:40});
    wmSaveWeek(next.grade,next.week);
  }
  save();
}
if(m.type==='learned'&&typeof m.word==='string'){const w=m.word.trim().toLowerCase();if(w&&!data.learnedWords.includes(w)){data.learnedWords.push(w);data.wordsEliminated=data.learnedWords.length;save();}}if(m.type==='exam'&&Number.isFinite(m.score)){data.examHistory.push({grade:m.grade,week:m.week,skill:m.skill,score:Math.max(0,Math.min(100,m.score)),at:new Date().toISOString()});data.examScores=data.examHistory.map(x=>x.score);save();}});
function updateHomeData(update={}){
 if(Object.hasOwn(update,'stage'))data.stage=update.stage;
 if(Number.isFinite(update.wordsEliminated))data.wordsEliminated=Math.max(0,Math.floor(update.wordsEliminated));
 if(Array.isArray(update.examScores))data.examScores=update.examScores;
 if(update.pteScores&&typeof update.pteScores==='object')data.pteScores={...data.pteScores,...update.pteScores};
 // Preserve a loaded feature's UI while data changes; homepage refreshes when revisited.
 save();
 if(page==='home')drawHome();
 else if(!cleanup)drawFallback(page);
}
window.addEventListener('wordmatch:data-changed', e=>updateHomeData(e.detail||{}));
window.WordMatchPreviewAzure=async()=>{try{const locale=data.accent;const voice=data.azureVoice||(locale==='en-GB'?'en-GB-SoniaNeural':'en-US-JennyNeural');const response=await fetch(window.wordMatchOnlineTtsUrl+'/tts',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text:'Hello! Welcome to our English learning game.',locale,voice})});if(!response.ok)throw Error('HTTP '+response.status);const u=URL.createObjectURL(await response.blob());const a=new Audio(u);a.playbackRate=data.voiceSpeed||1;a.onended=()=>URL.revokeObjectURL(u);await a.play()}catch(e){alert('语音试听失败：'+e.message)}};window.WordMatchOpenExam=(g,w)=>{navigate('journey');setTimeout(()=>{const tab=document.querySelector('[data-route="journey"]');/* Select exam in existing journey page where available */const target=document.querySelector('[data-exam-grade="'+g+'"][data-exam-week="'+w+'"]');if(target)target.click();else alert('请在成长之旅的课程地图中进入'+(w===20?'期中':'期末')+'考试。')},150)};window.WordMatchHome={navigate,updateHomeData};window.WordMatchVoiceSettings=()=>({accent:data.accent,sound:data.sound,voiceChoice:data.voiceChoice,voiceSpeed:data.voiceSpeed,azureVoice:data.azureVoice|| (data.accent==='en-GB'?'en-GB-SoniaNeural':'en-US-JennyNeural'),azureChineseVoice:data.azureChineseVoice});
drawHome();
