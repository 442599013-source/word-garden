/* Assemble one curriculum for the classroom, match board and skills. */
(() => {
  'use strict';
  const original = window.WMUnifiedCourseData;
  const foundation = window.WMFoundationData;
  const meta = window.WMUnifiedCourseMeta;
  if (!original || !foundation || !window.WMClassGroups ||
      foundation.units.length !== meta.added || original.units.length + meta.added !== meta.levelCount) {
    throw new Error('The shared Magic Classroom curriculum could not be loaded.');
  }
  const units = [...foundation.units, ...original.units].map((unit, i) => {
    const level = i + 1;
    const group = window.WMClassGroups.forLevel(level);
    return {
      ...unit, level, stage: group.stage, group: group.id,
      assessmentLevel: i >= meta.added ? unit.level : undefined,
      themeEn: i < meta.added ? unit.themeEn : 'Five Sentences · Level ' + level,
      themeZh: i < meta.added ? unit.themeZh : '五句课堂 · 第 ' + level + ' 关'
    };
  });
  Object.assign(meta, {sentenceCount: units.reduce((count, unit) => count + unit.lessons.length, 0)});
  window.WMUnifiedCourseData = {meta, units, words: {...original.words, ...foundation.words}};
  delete window.WMFoundationData;
})();
