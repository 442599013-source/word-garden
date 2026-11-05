/* The production main course. Shared rows remain reusable; no skill bank is overwritten. */
(()=>{'use strict';const meta=window.WMMainCourse,rows=window.WMRS129Rows||[];if(rows.length!==meta.questionCount)throw Error('主课题库不完整，请补齐本次更新文件');
const normalize=s=>String(s??'').normalize('NFKC').toLowerCase().replace(/[’‘]/g,"'").replace(/[+＋→⇒⟶|｜\s.,!?;:，。！？；：]/gu,'');
const longest=s=>(s.match(/[A-Za-z]+(?:['’][A-Za-z]+)*/g)||['RS']).reduce((a,b)=>b.replace(/[^a-z]/gi,'').length>a.replace(/[^a-z]/gi,'').length?b:a);
const groups=new Map();for(const r of rows){const n=r['教学关卡序号'];if(!groups.has(n))groups.set(n,[]);groups.get(n).push(r)}
const units=[...groups].sort((a,b)=>a[0]-b[0]).map(([n,rs])=>({...meta.levels[n-1],patternZh:'听后复述',patternEn:'Repeat Sentence',fullSentence:rs[0]['核心原句'],lessons:rs.slice().sort((a,b)=>a['小题']-b['小题']).map(r=>({id:'rs129-t'+String(n).padStart(3,'0')+'-q'+String(r['小题']).padStart(2,'0'),en:r['输入标准答案'],answer:r['输入标准答案'],displayEn:r['顶部展示英文'],fullSentence:r['核心原句'],fullTranslation:r['中文含义_完整原句'],cn:window.WMRS129Translations[n+':'+r['输入标准答案']],grammar:WMRS129Annotations.grammarFor(r)[1],knowledge:WMRS129Annotations.grammarFor(r)[0],stage:r['学习环节'],originalRS:r['关卡'],step:r['小题'],provenance:r['资料状态'],w:longest(r['顶部展示英文']),zh:window.WMWordGlossary.words[longest(r['顶部展示英文']).toLowerCase()]||'',raw:r}))}));
if(units.length!==meta.levelCount||units.some(u=>u.lessons.length!==10))throw Error('主课关卡数量不匹配');
window.WMCourse={id:meta.id,key:name=>name+'::'+meta.id,normalizeInput:normalize,count:()=>10};window.WM_GAME_UNITS=units;window.WMMainLessons={meta,units,rows};
})();
