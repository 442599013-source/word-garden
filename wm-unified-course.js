/* Shared five-sentence course adapter. Original RS129 progress is kept under its original course ID. */
(()=>{'use strict';const data=window.WMUnifiedCourseData;if(!data)return;const meta=data.meta;
const normalize=s=>String(s??'').normalize('NFKC').normalize('NFD').replace(/\p{M}/gu,'').toLowerCase().replace(/[’‘]/g,"'").replace(/[+＋→⇒⟶|｜\s.,!?;:，。！？；："“”()\[\]{}—–-]/gu,'');
window.WMUnifiedCourse=data;window.WMUnifiedCourseMeta=meta;
const oldGlossary=window.WMWordGlossary||{};window.WMWordGlossary={...oldGlossary,words:{...oldGlossary.words,...Object.fromEntries(Object.entries(data.words).map(([w,d])=>[w,d.zh]))}};
window.WMMainCourse={...meta,questionCount:meta.sentenceCount,levels:data.units.map(u=>({...u,lessons:undefined})),files:[]};
window.WM_GAME_UNITS=data.units;window.WMMainLessons={meta:window.WMMainCourse,units:data.units,rows:data.units.flatMap(u=>u.lessons)};
window.WMCourse={id:meta.id,key:name=>name+'::'+meta.id,normalizeInput:normalize,count:()=>5};
window.WMMatchData={version:6427,courseId:meta.id,levels:data.units,words:data.words,fillerIds:[]};
})();
