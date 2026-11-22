/* Magic Match deals and queues individual cards. Pair IDs are used for lesson progress. */
(function(root) {
'use strict';

const batchSize = 10;
const boardCapacity = 32;
const batchFormat = 4;

function migrateWordIds(snapshot, replacements) {
 if (!snapshot?.levelWords?.some(id => Object.hasOwn(replacements, id))) return snapshot;
 const migrated = JSON.parse(JSON.stringify(snapshot));
 const replace = id => replacements[id] || id;
 for (const key of ['levelWords','done','reviewOut','reviewPending','reviewQueue','incomingReviews']) {
  if (Array.isArray(migrated[key])) migrated[key] = migrated[key].map(replace);
 }
 for (const key of ['board','queue']) {
  for (const card of migrated[key] || []) card.word = replace(card.word);
 }
 for (const oldId of Object.keys(replacements)) delete migrated.meanings?.[oldId];
 migrated.v64Reviews = Object.fromEntries(Object.entries(migrated.v64Reviews || {})
  .map(([id, count]) => [replace(id), count]));
 return migrated;
}

class MatchGame {
 constructor(data, {level = 1, seed = Date.now(), snapshot = null, reviews = [], reviewMeanings = {}} = {}) {
  this.data = data;
  this.level = Math.max(1, Math.min(data.levels.length, Number(level) || 1));
  this.plan = data.levels[this.level - 1];
  this.targets = new Set();
  this.selected = null;

  const replacements = data.replacedWordIds || {};
  snapshot = migrateWordIds(snapshot, replacements);
  const incoming = [...new Set(reviews.map(id => replacements[id] || id))].filter(word => data.words[word]);
  const words = [...new Set([...(this.plan.sourceWordIds || []), ...incoming])].filter(word => data.words[word]);
  const meanings = {...reviewMeanings, ...this.plan.meanings};
  const sameRound = snapshot?.schema === 6427 && snapshot.courseId === data.courseId &&
   snapshot.level === this.level && Array.isArray(snapshot.levelWords) && Array.isArray(snapshot.done) &&
   Number.isSafeInteger(snapshot.score) && Number.isSafeInteger(snapshot.rng) && Number.isSafeInteger(snapshot.serial);
  if (sameRound && snapshot.batchFormat === batchFormat && Array.isArray(snapshot.queue) &&
      words.length === snapshot.levelWords.length && words.every(word => snapshot.levelWords.includes(word))) {
   this.s = JSON.parse(JSON.stringify(snapshot));
   this.s.meanings = {...meanings, ...this.s.meanings, ...this.plan.meanings};
   if (!this.s.finished && this.s.board.length < boardCapacity) {
    this.deal(boardCapacity - this.s.board.length);
   }
   if (!this.s.finished) this.finishIfCleared();
   return;
  }

  const done = sameRound ? [...new Set(snapshot.done.filter(word => words.includes(word)))] : [];
  this.s = {
   ...(sameRound ? snapshot : {}),
   schema: 6427, batchFormat, meanings, courseId: data.courseId, level: this.level,
   rng: (sameRound ? snapshot.rng : Number(seed) >>> 0) || 350129,
   serial: sameRound ? snapshot.serial : 0,
   board: [], queue: [], done, released: [],
   ordinary: sameRound ? snapshot.ordinary || 0 : 0,
   combo: sameRound ? snapshot.combo || 0 : 0,
   bestCombo: sameRound ? snapshot.bestCombo || 0 : 0,
   score: sameRound ? snapshot.score : 0, pairs: done.length, finished: false,
   cycle: sameRound ? snapshot.cycle || 0 : 0,
   reviewOut: sameRound ? (snapshot.reviewOut || []).filter(word => words.includes(word)) : [],
   reviewPending: [], reviewQueue: [], incomingReviews: incoming, levelWords: words,
   v64Reviews: Object.fromEntries(incoming.map(word => [word, 1])),
   correct: sameRound ? snapshot.correct || 0 : 0,
   attempts: sameRound ? snapshot.attempts || 0 : 0,
   ratingEligible: !sameRound || snapshot.ratingEligible === true,
   completedAt: null
  };

  const remaining = this.shuffled(words.filter(word => !done.includes(word)));
  const migratedReviews = this.s.reviewOut.filter(word => done.includes(word));
  this.s.reviewPending = this.s.reviewOut.filter(word => !done.includes(word));
  this.s.reviewQueue = migratedReviews;
  const toDeal = remaining;
  for (let offset = 0; offset < toDeal.length; offset += batchSize) {
   const batch = offset / batchSize;
   const tiles = toDeal.slice(offset, offset + batchSize).flatMap(word => this.pair(word, batch));
   this.s.queue.push(...this.shuffled(tiles));
  }
  this.deal(boardCapacity);
  this.finishIfCleared();
 }

 rand() {
  let x = this.s.rng;
  x ^= x << 13;
  x ^= x >>> 17;
  x ^= x << 5;
  this.s.rng = x >>> 0;
  return this.s.rng / 4294967296;
 }

 shuffled(items) {
  const result = items.slice();
  for (let i = result.length - 1; i > 0; i--) {
   const j = Math.floor(this.rand() * (i + 1));
   [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
 }

 pair(word, batch) {
  return ['en', 'zh'].map(lang => ({id: 'm' + this.level + '-' + (++this.s.serial), word, lang, batch}));
 }

 deal(count) {
  const occupied = new Set(this.s.board.map(tile => tile.slot));
  const slots = Array.from({length: boardCapacity}, (_, i) => i).filter(slot => !occupied.has(slot));
  const cards = [];
  const limit = Math.min(count, slots.length);
  while (cards.length < limit) {
   if (!this.s.queue.length) {
    if (!this.s.reviewQueue.length) break;
    const batch = this.s.reviewQueue.splice(0, batchSize);
    this.s.queue = this.shuffled(batch.flatMap(word => this.pair(word, 'review')));
   }
   cards.push(...this.s.queue.splice(0, limit - cards.length));
  }
  const destinations = slots.slice(slots.length - cards.length);
  cards.forEach((card, index) => {
   card.slot = destinations[index];
   this.s.board.push(card);
  });
  return cards.map(card => card.id);
 }

 dropReviews(english) {
  const index = this.s.reviewPending.indexOf(english.word);
  if (index < 0) return;
  this.s.reviewPending.splice(index, 1);
  this.s.reviewQueue.push(english.word);
 }

 meaning(tile) {
  return (this.s.meanings?.[tile.word] || this.plan.meanings?.[tile.word] || this.data.words[tile.word].zh).trim();
 }

 matching(a, b) {
  return !!a && !!b && a.id !== b.id && a.lang !== b.lang && this.meaning(a) === this.meaning(b);
 }

 availablePairs(board = this.s.board) {
  const meanings = new Map();
  for (const tile of board) {
   const key = this.meaning(tile);
   const counts = meanings.get(key) || {en: 0, zh: 0};
   counts[tile.lang]++;
   meanings.set(key, counts);
  }
  return [...meanings.values()].reduce((count, pair) => count + Math.min(pair.en, pair.zh), 0);
 }

 finishIfCleared() {
  if (this.s.board.length || this.s.queue.length || this.s.reviewQueue.length) return;
  this.s.finished = true;
  this.s.completedAt = Date.now();
 }

 collapse(removed) {
  const board = this.s.board.filter(tile => !removed.includes(tile.id));
  for (let col = 0; col < 4; col++) {
   const column = board.filter(tile => tile.slot % 4 === col).sort((a, b) => a.slot - b.slot);
   column.forEach((tile, i) => {tile.slot = (8 - column.length + i) * 4 + col;});
  }
  this.s.board = board.sort((a, b) => a.slot - b.slot);
  const added = this.deal(boardCapacity - board.length);
  this.finishIfCleared();
  return added;
 }

 select(id) {
  if (this.s.finished) return {kind: 'noop'};
  const b = this.s.board.find(tile => tile.id === id);
  if (!b) return {kind: 'noop'};
  if (this.selected === id) {
   this.selected = null;
   return {kind: 'selected', id: null};
  }
  if (!this.selected) {
   this.selected = id;
   return {kind: 'selected', id};
  }
  const a = this.s.board.find(tile => tile.id === this.selected);
  this.selected = null;
  if (!a) return {kind: 'noop'};

  this.s.attempts++;
  if (!this.matching(a, b)) {
   const reviewWords = [...new Set([a.word, b.word])];
   reviewWords.forEach(word => this.queueReview(word));
   this.s.combo = 0;
   const newIds = this.deal(boardCapacity - this.s.board.length);
   return {kind: 'wrong', ids: [a.id, b.id], reviewWords, newIds};
  }

  const english = a.lang === 'en' ? a : b;
  const word = english.word;
  this.s.correct++;
  if (!this.s.done.includes(word)) {
   this.s.done.push(word);
   this.s.pairs++;
  }
  this.dropReviews(english);
  this.s.ordinary++;
  this.s.combo++;
  this.s.bestCombo = Math.max(this.s.bestCombo, this.s.combo);
  const bonus = ({10: 2, 20: 5, 30: 10})[this.s.combo] || 0;
  const rewardTier = ({10: 3, 20: 5, 30: 10})[this.s.combo] || 0;
  const base = 1;
  this.s.score += base + bonus;
  const previous = this.s.board.map(tile => ({...tile}));
  const removed = [a.id, b.id];
  const newIds = this.collapse(removed);
  return {kind: 'match', word, firstTarget: false, base, bonus, rewardTier,
   combo: this.s.combo, ids: removed, newIds, previous, finished: this.s.finished};
 }

 hint() {
  for (let i = 0; i < this.s.board.length; i++) {
   for (let j = i + 1; j < this.s.board.length; j++) {
    if (this.matching(this.s.board[i], this.s.board[j])) return [this.s.board[i].id, this.s.board[j].id];
   }
  }
  return [];
 }

 queueReview(word) {
  if (!this.s.reviewOut.includes(word)) this.s.reviewOut.push(word);
  if (!this.s.reviewPending.includes(word)) this.s.reviewPending.push(word);
 }

 useHint() {
  if (this.s.finished) return [];
  const ids = this.hint();
  if (!ids.length) return [];
  this.s.score -= 10;
  const english = this.s.board.find(tile => ids.includes(tile.id) && tile.lang === 'en');
  if (english) this.queueReview(english.word);
  return ids;
 }

 newBatch() {
  this.selected = null;
  this.s.queue.push(...this.s.board);
  this.s.board = [];
  this.deal(boardCapacity);
  this.s.cycle++;
  return this.s.board;
 }

 recoverPair() {
  if (this.availablePairs()) return [];
  // A pair can straddle the board and the queue after two independently shuffled batches overlap.
  for (const visible of this.s.board) {
   const index = this.s.queue.findIndex(tile => this.matching(visible, tile));
   if (index < 0) continue;
   const [counterpart] = this.s.queue.splice(index, 1);
   const displaced = this.s.board.find(tile => tile.id !== visible.id);
   if (displaced) {
    this.s.board = this.s.board.filter(tile => tile.id !== displaced.id);
    this.s.queue.push(displaced);
   }
   this.s.queue.unshift(counterpart);
   return this.deal(1);
  }
  return [];
 }

 shuffle() {return this.newBatch();}
 snapshot() {return JSON.parse(JSON.stringify(this.s));}
 static stars(bestCombo) {return bestCombo >= 10 ? 3 : bestCombo >= 5 ? 2 : 1;}
}
root.WMMatchEngine = MatchGame;
if (typeof module !== 'undefined' && module.exports) module.exports = MatchGame;
})(typeof window !== 'undefined' ? window : globalThis);
