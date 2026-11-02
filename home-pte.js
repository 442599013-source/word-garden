import {icon} from './home-icons.js';
export const skills=[{id:'listening',cn:'听力',en:'Listening',target:58,icon:'headphones'},{id:'speaking',cn:'口语',en:'Speaking',target:76,icon:'mic'},{id:'reading',cn:'阅读',en:'Reading',target:59,icon:'book'},{id:'writing',cn:'写作',en:'Writing',target:69,icon:'pencil'}];
export function pteSummary(data){
 return `<section class="section"><div class="bilingual-head"><h2>我的PTE成绩与目标</h2><p>My PTE Scores and Goals</p></div><div class="pte-grid">${skills.map(s=>{
 const score=data.pteScores?.[s.id]; const valid=typeof score==='number' && Number.isFinite(score)&&score>=10&&score<=90;
 const gap=valid?Math.max(0,s.target-score):null;
 const progress=valid?Math.max(0,Math.min(100,score/s.target*100)):0;
 return `<button type="button" data-route="${s.id}" class="pte-card ${s.id}"><div class="pte-heading">${icon(s.icon)}<span><strong>${s.cn}</strong><small>${s.en}</small></span>${icon('chevron','pte-chevron')}</div><div class="progress-track" role="progressbar" aria-label="${s.cn}目标完成进度" aria-valuemin="0" aria-valuemax="100" ${valid?`aria-valuenow="${Math.round(progress)}"`:'aria-valuetext="待评估"'}><span style="width:${progress}%"></span></div><div class="pte-detail"><span>当前：${valid?score+'分':'待评估'}</span><small>Current: ${valid?score:'Pending'}</small></div><div class="pte-detail"><strong>目标：${s.target}分</strong><small>Target: ${s.target}</small></div><div class="pte-detail"><span>差距：${valid?gap+'分':'待计算'}</span><small>Gap: ${valid?gap:'Pending'}</small></div></button>`;
 }).join('')}</div></section>`;
}
