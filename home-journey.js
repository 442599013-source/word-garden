import {icon} from './home-icons.js';
export function journeyButton(){return `<button type="button" class="journey" data-route="journey"><span class="journey-icon">${icon('rocket')}</span><span class="journey-text"><strong>进阶之旅</strong><small>Level Up</small></span>${icon('chevron','journey-chevron')}</button>`;}
export function journeyPage(){
 const stages=[['幼儿园','Kindergarten'],['小学','Primary School'],['初中','Junior High School'],['高中','Senior High School'],['大学','University'],['研究生','Postgraduate']];
 return `<div class="inner-panel"><div class="bilingual-head"><h3>英语学习阶段</h3><p>English Learning Stages</p></div><div class="journey-list">${stages.map((s,i)=>`<div class="stage-item"><span class="stage-num">${i+1}</span><div class="item-name"><strong>${s[0]}</strong><small>${s[1]}</small></div>${icon('lock','lock-icon')}</div>`).join('')}</div><p class="secondary-info">学习关卡将在进阶之旅模块接入。</p><p class="secondary-info">Learning stages will connect to the Level Up module.</p></div>`;
}
