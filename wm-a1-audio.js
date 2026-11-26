/* Text uses the existing reader; isolated sounds can use an already installed clip. */
(() => {
  'use strict';
  const player = new Audio();
  const reader = new WMMicrosoftVoice(new Audio());
  const lesson = WMA1Lesson;
  const items = new Map(lesson.all.map(item => [item.id,item]));
  const sections = new Map(lesson.sections.map(section => [section.id,section]));
  const sounds = new Map(lesson.sounds.map(item => [item.en,item.id]));
  const lessonNarration = new Map();
  const en = text => ({text,locale:'en-GB'});
  const zh = text => ({text,locale:'zh-CN'});
  const local = id => ({id});
  let token = 0;
  let interrupt;
  function stop() {
    token++;
    player.pause();
    interrupt?.();
    reader.stop();
  }
  function narration(line) {
    return line.split(/(\/[^/\s]+\/|[A-Za-z]+(?:[ 、][A-Za-z]+)*)/u)
      .flatMap(part => {
        const text = part.trim();
        if (!text || !/[\p{L}\p{N}]/u.test(text)) return [];
        if (sounds.has(text)) return [local(sounds.get(text))];
        if (text === '/æm/') return [en('am')];
        if (/^[A-Za-z]/.test(text)) return [en(text.replaceAll('、',', '))];
        return [zh(text)];
      });
  }
  function task(id) {
    if (id === 'all-phonemes-v6473') return local(id);
    const item = items.get(id);
    if (item?.kind === 'sound') return local(id);
    if (item?.kind === 'letter') return en(({A:'ay',H:'aitch',Z:'zed'})[item.en] || item.en);
    if (item) return en(item.en);
    const fourth = /^4ch1-word-([a-z]+)-(\d+)$/.exec(id);
    if (fourth) {
      const word=window.WMVocabulary4?.words.find(item=>item.en===fourth[1]);
      const use=word?.uses[Number(fourth[2])];
      return use ? en(word.uses.length>1 ? use.phrase : word.en) : null;
    }
    if (id.startsWith('3yy3-word-')) {
      const word=window.WMA1Phonics?.words.find(item=>item.id===id);
      return word?en(word.en):null;
    }
    if (id.startsWith('2yy2-word-')) return en(id.slice('2yy2-word-'.length));
    if(id==='weak-a')return local(sounds.get('/ə/'));
    if(id==='strong-a')return local(sounds.get('/eɪ/'));
    if (id === 'example-yes' || id === 'example-my') return en(id.slice('example-'.length));
    const linked = items.get(id.replace(/-(example|context)$/,''));
    const text = id.endsWith('-example') ? linked?.example : linked?.context;
    return text ? en(text) : null;
  }
  function playSound(id,rate) {
    WMMicrosoftVoice.audioMode('playback');
    return new Promise(resolve => {
      let finished = false;
      const finish = ok => {
        if (finished) return;
        finished = true;
        clearTimeout(timeout);
        player.onended = player.onerror = null;
        interrupt = undefined;
        if (!ok) player.pause();
        resolve(ok);
      };
      const timeout = setTimeout(() => finish(false),id === 'all-phonemes-v6473' ? 65000 : 12000);
      interrupt = () => finish(false);
      player.onended = () => finish(true);
      player.onerror = () => finish(false);
      player.src = 'audio/a1-lesson-1/' + id + '.mp3';
      player.playbackRate = rate;
      player.play().catch(() => finish(false));
    });
  }
  async function playAt(rate,...ids) {
    stop();
    const current = token;
    for (const id of ids) {
      const sectionId = id.startsWith('section-') ? id.slice('section-'.length) : '';
      const section = sections.get(sectionId);
      const queue = lessonNarration.get(sectionId) ||
        (section ? section.lines.flatMap(narration) : [task(id)]);
      for (const entry of queue) {
        if (!entry || current !== token) return false;
        if (entry.id) {
          const played = await playSound(entry.id,rate);
          if (current !== token || !played) return false;
        } else {
          try { await reader.play(entry.text,entry.locale,rate); }
          catch { return false; }
        }
      }
    }
    return current === token;
  }
  window.addEventListener('pagehide',stop);
  function registerNarration(id, parts) {
    lessonNarration.set(id, parts.flatMap(part=>typeof part==='string' ? narration(part) : part.locale ? [part] : [task(part.id)]));
  }
  window.WMA1Audio = {play:(...ids) => playAt(1,...ids),playAt,stop,registerNarration};
})();
