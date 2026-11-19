/* The four skills all use the same 50-level class groups as Magic Classroom. */
(() => {
  'use strict';
  const data = window.WMUnifiedCourseData;
  const classGroups = window.WMClassGroups;
  if (!data?.units?.length || !classGroups) throw Error('Shared course not loaded');
  const types = ['word', 'phrase', 'sentence', 'passage'];
  const groups = classGroups.groups.map(group => ({...group, word: [], phrase: [], sentence: [], passage: [], seen: new Set()}));
  const byId = Object.fromEntries(groups.map(group => [group.id, group]));
  const firstByStage = Object.fromEntries([...groups].reverse().map(group => [group.stage, group]));
  const sourceGroups = new Map();
  const assignedWords = new Map();
  function add(group, type, en, zh, sourceId, extra = {}) {
    if (!en?.trim() || !zh?.trim()) return;
    const key = type + '|' + en.toLowerCase().trim() + '|' + zh.trim();
    if ((type === 'word' || type === 'phrase') && group.seen.has(key)) return;
    group.seen.add(key);
    group[type].push({id: type + ':' + sourceId + ':' + group[type].length, en, zh, sourceId, ...extra});
  }
  for (const unit of data.units) {
    const group = byId[unit.group];
    for (const row of unit.lessons) {
      sourceGroups.set(row.id, group);
      add(group, 'sentence', row.en, row.cn, row.id, row.checks ? {checks: row.checks, titleEn: row.titleEn, titleZh: row.titleZh, tip: row.tip, classroomLevel: unit.level} : {});
      if (row.tip) add(group, 'sentence', row.tip.en, row.tip.cn, row.id + '-condition');
      for (const example of row.examples || []) add(group, 'sentence', example.en, example.cn, row.id);
      for (const part of row.phrases || []) {
        if (part.en !== row.en || !unit.kind) add(group, 'phrase', part.en, part.cn, row.id);
      }
    }
    for (const part of unit.studyPhrases || []) add(group, 'phrase', part.en, part.cn, unit.id);
    for (const id of unit.sourceWordIds || []) {
      const word = data.words[id];
      if (!word || (/^[a-z]$/i.test(word.en) && !/^[ai]$/i.test(word.en))) continue;
      add(group, 'word', word.en, unit.meanings[id] || word.zh, unit.lessons[0].id);
      const spelling = word.en.normalize('NFKC').trim().toLowerCase();
      if (!assignedWords.has(spelling)) assignedWords.set(spelling, new Set());
      assignedWords.get(spelling).add(group.id);
    }
  }
  const passages = window.WMStagePassages || [];
  for (const passage of passages) {
    const group = (passage.sourceIds || []).map(id => sourceGroups.get(id)).find(Boolean) || firstByStage[passage.stage];
    if (group) group.passage.push(passage);
  }
  try {
    const reviews = JSON.parse(localStorage.getItem('wm-match-review-words-v6451') || '{}');
    for (const {stage, en, zh} of Object.values(reviews)) {
      if (!en || !zh) continue;
      const existing = assignedWords.get(en.normalize('NFKC').trim().toLowerCase());
      if (byId[stage] && (!existing || !existing.has(stage))) add(byId[stage], 'word', en, zh, 'match-review');
      else if (!existing && firstByStage[stage]) add(firstByStage[stage], 'word', en, zh, 'match-review');
    }
  } catch {}
  const books = groups.flatMap(group => types.map(type => ({
    id: 'goldy-stage-' + group.id + '-' + type,
    type,
    category: group.id,
    titleZh: group.zh + ' · ' + ({word:'单词',phrase:'词组',sentence:'短句',passage:'短文'})[type],
    titleEn: group.en + ' · ' + ({word:'Words',phrase:'Phrases',sentence:'Sentences',passage:'Passages'})[type],
    items: group[type]
  })));
  function resolve(id, level) {
    return byId[id] || byId[classGroups.forLevel(level)?.id] || firstByStage[id];
  }
  const categories = groups.map(({id, en, zh, stage}) => ({id, en, zh, stage}));
  window.WMStageLibrary = {stages: groups, byId, types, books, categories, resolve, passages, sourceGroups};
  window.WMKindergartenListening129 = {categories, books};
})();
