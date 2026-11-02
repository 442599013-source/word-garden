import {icon} from './home-icons.js';
export function progressCards(data){
 const count=Number.isFinite(data.wordsEliminated)?Math.max(0,Math.floor(data.wordsEliminated)):0;
 const exams=(Array.isArray(data.examScores)?data.examScores:[]).filter(n=>typeof n==='number'&&Number.isFinite(n)&&n>=0&&n<=100);
 const average=exams.length? (exams.reduce((a,b)=>a+b,0)/exams.length).toFixed(1).replace(/\.0$/,'') :null;
 return `<div class="metrics-grid">
  <button type="button" class="metric-card metric-button" data-route="words">${icon('bookcheck','metric-icon')}<div class="metric-heading"><strong>已消灭单词</strong><small>Words Eliminated</small></div><div class="metric-value"><strong>${count} 个</strong><small>${count} Words</small></div><div class="metric-caption"><span>累计学会单词</span><small>Total Words Learned</small></div></button>
  <button type="button" class="metric-card metric-button" data-route="results">${icon('clipboard','metric-icon')}<div class="metric-heading"><strong>综合考试成绩</strong><small>Average Exam Score</small></div><div class="metric-value"><strong>${average===null?'待评估':average+' 分'}</strong><small>${average===null?'Pending':average+' Points'}</small></div><div class="metric-caption"><span>所有考试的平均分</span><small>Average of All Exams</small></div></button>
 </div>`;
}
