/* Shared persisted completion and accuracy for Magic Match and Home. */
(() => {
  'use strict';

  const key = 'wm-match-last-completed-rating-v1';
  function valid(result) {
    return !!result && Number.isSafeInteger(result.correct) && Number.isSafeInteger(result.attempts) &&
      result.attempts > 0 && result.correct >= 0 && result.correct <= result.attempts;
  }
  function fromRound(round) {
    if (!round?.finished || !valid(round)) return null;
    const knownMatches = Math.max(round.pairs || 0, round.ordinary || 0);
    if (round.correct < knownMatches) return null;
    return {correct:round.correct, attempts:round.attempts, completedAt:round.completedAt || 0};
  }
  function read(storageKey) {
    try {return JSON.parse(localStorage.getItem(storageKey) || 'null')}
    catch {return null}
  }
  function summary(keys) {
    const stored = read(key);
    let best = valid(stored) ? stored : null;
    let completed = !!best;
    for (const storageKey of new Set(keys.filter(Boolean))) {
      const state = read(storageKey);
      if (Object.values(state?.completed || {}).some(value=>value===true)) completed = true;
      for (const source of [state?.completedRounds, state?.rounds]) {
        for (const round of Object.values(source || {})) {
          if (round?.finished === true) completed = true;
          const result = fromRound(round);
          if (result && (!best || result.completedAt > (best.completedAt || 0))) best = result;
        }
      }
    }
    return {rating:best,completed};
  }
  const latest = keys => summary(keys).rating;
  function publish(round) {
    const result = fromRound(round);
    const previous = read(key);
    if (!result || (valid(previous) && result.completedAt <= (previous.completedAt || 0))) return;
    localStorage.setItem(key, JSON.stringify(result));
    window.dispatchEvent(new Event('wm-match-rating-updated'));
  }
  window.WMMatchResults = {latest,publish,summary};
})();
