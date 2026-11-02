import {icon,escapeHTML} from './home-icons.js';
const names={kindergarten:['幼儿园','Kindergarten'],primary:['小学','Primary School'],junior:['初中','Junior High School'],senior:['高中','Senior High School'],university:['大学','University'],postgraduate:['研究生','Postgraduate']};
export function stageCard(data){
 const stage=names[data.stage];
 const cn=stage?stage[0]:'待评估', en=stage?stage[1]:'Pending Assessment';
 return `<section class="stage-card">${icon('cap','stage-icon')}<div class="stack small"><div class="stage-label">当前阶段</div><small>Current Stage</small></div><div class="stage-value">${escapeHTML(cn)}</div><div class="stage-en">${escapeHTML(en)}</div></section>`;
}
