import {icon,escapeHTML} from './home-icons.js';
import {skills} from '../pte-summary/view.js';
export function subpage(page, data){
 const skill=skills.find(s=>s.id===page);
 let name='',english='',content='';
 if(skill){
 name=`${skill.cn}题库`; english=`${skill.en} Question Bank`;
 content=`<div class="placeholder">${icon(skill.icon,'placeholder-icon')}<h3>${skill.cn}练习</h3><p>${skill.en} Practice</p><div class="placeholder-notice"><strong>题库尚未接入</strong><small>Question Bank Not Connected Yet</small></div></div>`;
 }else if(page==='words'){
 name='已消灭单词';english='Words Eliminated';
 const n=Number.isFinite(data.wordsEliminated)?Math.max(0,Math.floor(data.wordsEliminated)):0;
 content=`<div class="placeholder">${icon('bookcheck','placeholder-icon')}<h3>${n} 个</h3><p>${n} Words</p><div class="placeholder-notice"><strong>累计学会单词</strong><small>Total Words Learned</small></div></div>`;
 }else if(page==='register'){
 name='注册';english='Register';
 content=`<div class="placeholder">${icon('user','placeholder-icon')}<h3>注册模块待接入</h3><p>Registration Module Not Connected Yet</p><div class="placeholder-notice"><strong>注册功能以后独立上传</strong><small>The registration module will be uploaded separately</small></div></div>`;
 }else if(page==='journey'){
 name='进阶之旅';english='Level Up'; content='__JOURNEY__';
 }else if(page==='results'){
 name='综合考试成绩';english='Average Exam Score';
 const exams=Array.isArray(data.examScores)?data.examScores.filter(n=>typeof n==='number'&&Number.isFinite(n)&&n>=0&&n<=100):[];
 const avg=exams.length? (exams.reduce((a,b)=>a+b,0)/exams.length).toFixed(1).replace(/\.0$/,'')+' 分':'待评估';
 content=`<div class="placeholder">${icon('clipboard','placeholder-icon')}<h3>${avg}</h3><p>${exams.length?'Average Exam Score':'Pending'}</p><div class="placeholder-notice"><strong>所有已完成考试的平均分</strong><small>Average Score of Completed Exams</small></div></div>`;
 }else if(page==='login'){
 name=data.nickname?'账户':'登录';english=data.nickname?'Account':'Log In';
 content=`<div class="inner-panel"><label class="input-label" for="nickname">昵称<small>Nickname</small></label><input id="nickname" class="input" maxlength="40" value="${escapeHTML(data.nickname||'')}" placeholder="Nickname"><button class="primary-action" type="button" data-action="login">预览登录<small>Preview Log In</small></button><button class="secondary-action" type="button" data-route="register">注册<small>Register</small></button><p class="secondary-info">仅本机演示，尚未连接正式账户系统。</p><p class="secondary-info">Local preview only. No account service connected.</p></div>`;
 }else if(page==='settings'){
 name='设置';english='Settings';
 content=`<div class="inner-panel setting-row"><span>声音<small>Sound</small></span><button class="toggle" data-action="sound" type="button">${data.sound?'开启':'关闭'}<small>${data.sound?'On':'Off'}</small></button></div>`;
 }else {name='首页';english='Home';}
 return `<section class="subpage"><div class="subhead"><button type="button" data-route="home" class="back" aria-label="返回首页">${icon('back')}</button><div class="bilingual-head"><h2>${name}</h2><p>${english}</p></div></div>${content}<button type="button" data-route="home" class="back-home">返回首页<small>Back to Home</small></button></section>`;
}
