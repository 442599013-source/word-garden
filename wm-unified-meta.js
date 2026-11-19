/* Shared level numbering, 50-level classes and reversible progress migration. */
(() => {
  'use strict';
  const previousId = 'goldy-five-sentences-v1';
  const id = 'goldy-classroom-900-v1';
  const added = 89;
  const classSize = 50;
  const definitions = [
    ['kindergarten', '幼儿园', 'Kindergarten', ['小班', '中班', '大班'], ['Junior Class', 'Middle Class', 'Senior Class']],
    ['primary', '小学', 'Primary School', ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级']],
    ['junior', '初中', 'Junior Secondary', ['初一', '初二', '初三']],
    ['senior', '高中', 'Senior Secondary', ['高一', '高二', '高三']],
    ['university', '大学', 'University', ['一年级', '二年级']],
    ['postgraduate', '研究生', 'Postgraduate', ['一年级']]
  ];
  let next = 1;
  const ranges = definitions.map(([id, zh, en, classes, labels]) => {
    const start = next;
    const groups = classes.map((name, i) => {
      const start = next;
      next += classSize;
      return {id: id + '-' + (i + 1), stage: id, zh: zh + name, en: en + ' · ' + (labels?.[i] || 'Year ' + (i + 1)), className: name, classIndex: i, start, end: next - 1};
    });
    return {id, zh, en, classes, groups, start, end: next - 1};
  });
  const groups = ranges.flatMap(stage => stage.groups);
  const groupFor = level => Number.isInteger(level) && level >= 1 && level < next ? groups[Math.floor((level - 1) / classSize)] : undefined;
  window.WMClassGroups = {classSize, groups, forLevel: groupFor};
  window.WMUnifiedCourseMeta = {id, previousId, version: 6464, levelCount: next - 1, added, ranges, classSize};
  const selectionKey = 'wm-journey-selection-v21::' + id;
  window.WMJourneySelectionKey = selectionKey;

  function copy(oldKey, key, convert) {
    try {
      if (localStorage.getItem(key) !== null) return;
      const value = JSON.parse(localStorage.getItem(oldKey) || 'null');
      if (value !== null) localStorage.setItem(key, JSON.stringify(convert(value)));
    } catch {}
  }
  function shifted(records, first, convert) {
    return Object.fromEntries(Object.entries(records || {}).filter(([level]) => {
      const n = Number(level);
      return Number.isInteger(n) && n >= first && n < first + 811;
    }).map(([level, value]) => [Number(level) + added, convert(value)]));
  }
  function classroomState(state) {
    return {...state, level: Number.isInteger(state.level) ? state.level + added : state.level};
  }
  const scoped = (key, convert) => copy(key + '::' + previousId, key + '::' + id, convert);
  scoped('wm-sentences-v9-progress', classroomState);
  scoped('wm-journey-game-progress-v21', records => shifted(records, 0, classroomState));
  scoped('wm-wordmatch-v35', state => ({
    ...state,
    level: Number.isInteger(state.level) ? state.level + added : state.level,
    completed: shifted(state.completed, 1, value => value),
    rounds: shifted(state.rounds, 1, round => ({...round, level: round.level + added, courseId: id}))
  }));
  copy('wm-journey-selection-v21', selectionKey, level => Number.isInteger(level) && level >= 1 && level <= 811 ? level + added : 1);
  function read(key) {
    try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch { return null; }
  }
  function currentLevel() {
    const selected = read(selectionKey);
    const last = read('wm-sentences-v9-progress::' + id);
    return groupFor(selected) ? selected : groupFor(last?.level + 1) ? last.level + 1 : 1;
  }
  function earned() {
    const cache = read('wm-journey-game-progress-v21::' + id) || {};
    const last = read('wm-sentences-v9-progress::' + id);
    const match = read('wm-wordmatch-v35::' + id);
    let index = 0;
    for (const [i, group] of groups.slice(0, -1).entries()) {
      const level = group.end - 1;
      const done = cache[level]?.completed || (last?.level === level ? last.completed : []) || [];
      const unit = window.WMUnifiedCourseData?.units[level] || window.WMFoundationData?.units[level];
      const needed = unit?.questionCount || 5;
      if (new Set(done.filter(n => Number.isInteger(n) && n >= 0 && n < needed)).size === needed ||
          match?.completed?.[group.end] || match?.rounds?.[group.end]?.finished) index = i + 1;
    }
    return groups[index];
  }
  Object.assign(window.WMClassGroups, {currentLevel, earned});
  window.WMMatchProgressKey = () => {
    const key = 'wm-wordmatch-v35::' + id;
    try {
      if (localStorage.getItem(key) !== null) return key;
      const previous = 'wm-wordmatch-v35::' + previousId;
      if (localStorage.getItem(previous) !== null) return previous;
    } catch {}
    return 'wm-wordmatch-v35';
  };
})();
