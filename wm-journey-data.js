/* Navigation and progress for the shared Magic Classroom curriculum. */
(() => {
  'use strict';
  const meta = window.WMUnifiedCourseMeta;
  const {groups, forLevel, classSize} = window.WMClassGroups;
  const stages = meta.ranges.map(stage => ({...stage, unified: true}));
  const themes = window.WMUnifiedCourseData?.units || window.WMFoundationData?.units || [];
  function read(key, fallback = {}) {
    try {return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback} catch {return fallback}
  }
  function integer(value, fallback = 1) {
    const n = Number(value);
    return /^\d+$/.test(String(value)) && forLevel(n) ? n : fallback;
  }
  function level(value) {
    const n = integer(value), group = forLevel(n);
    const stage = stages.find(stage => stage.id === group.stage);
    const theme = themes[n - 1] || {level: n, questionCount: 5, themeEn: 'Level ' + n, themeZh: '第 ' + n + ' 关'};
    return {number: n, stage, group, classIndex: group.classIndex, className: group.className, local: n - group.start + 1, theme};
  }
  function block(value) {
    const group = forLevel(integer(value));
    const half = classSize / 2, isFinal = value >= group.start + half;
    const start = isFinal ? group.start + half : group.start;
    const end = start + half - 1;
    return {id: start + '-' + end, start, end, kind: isFinal ? '期末测评' : '期中测评', kindEn: isFinal ? 'Final Assessment' : 'Midterm Assessment'};
  }
  function saveSelected(n) {
    try {localStorage.setItem(window.WMJourneySelectionKey, String(integer(n)))} catch {}
  }
  function selected() {return integer(read(window.WMJourneySelectionKey, 1))}
  function progress(n) {
    n = integer(n);
    const i = n - 1;
    const game = read('wm-journey-game-progress-v21::' + meta.id);
    const last = read('wm-sentences-v9-progress::' + meta.id);
    const match = read('wm-wordmatch-v35::' + meta.id);
    return {
      classroom: game[i]?.completed?.length || (last.level === i ? last.completed?.length || 0 : 0),
      match: match.completed?.[n] || match.rounds?.[n]?.finished ? level(n).theme.questionCount : 0
    };
  }
  function href(n, activity) {
    n = integer(n);
    if (activity === 'assessment') return 'assessment.html?block=' + block(n).start + '&level=' + n;
    const file = {classroom:'sentence-game', match:'word-match', listening:'walkman', speaking:'speaking-study', reading:'reading-study', writing:'writing-study'}[activity];
    return file + '.html?level=' + n + '&from=journey';
  }
  window.WMJourney = {stages, groups, classSize, total: meta.levelCount, integer, level, block, read, selected, saveSelected, progress, href};
})();
