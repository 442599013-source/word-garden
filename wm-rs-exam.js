/* Stage tests sample only the sentences taught in their stage. Stable IDs allow interrupted attempts to resume. */
(()=>{'use strict';
const pool=block=>window.WM_LISTENING_BANK.levels.filter(u=>u.level>=block.start&&u.level<=block.end).flatMap(u=>u.sourceLessons.map((l,i)=>({lesson:l,unit:u.level,base:u.questions[i]})));
function resolve(block,id,skill){const x=pool(block).find(x=>x.lesson.id===id);if(!x)return null;const {lesson:l,unit,base}=x,r=base.reading;return {sourceId:l.id,skill,unit,word:l.w,en:skill==='reading'?r.en:l.en,audioText:l.en,cn:l.cn,options:skill==='reading'?r.options:base.options,correctIndex:skill==='reading'?r.correctIndex:base.correctIndex,question:skill==='reading'?r.questionEn:base.questionEn}}
function choose(block,random=Math.random){const rows=pool(block),skills=['listening','reading','writing','speaking','listening','reading','writing','speaking','listening','reading'];return skills.map((skill,i)=>{const from=Math.floor(i*rows.length/10),to=Math.floor((i+1)*rows.length/10);const row=rows[from+Math.min(to-from-1,Math.floor(random()*(to-from)))];return resolve(block,row.lesson.id,skill)})}
window.WMRSExam={pool,choose,resolve};
})();
