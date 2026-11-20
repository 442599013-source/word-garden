/* Text uses the existing reader; isolated sounds can use an already installed clip. */
(() => {
  'use strict';
  const player = new Audio();
  const reader = new WMMicrosoftVoice(new Audio());
  const lesson = WMA1Lesson;
  const items = new Map(lesson.all.map(item => [item.id,item]));
  const sections = new Map(lesson.sections.map(section => [section.id,section]));
  const sounds = new Map(lesson.sounds.map(item => [item.en,item.id]));
  const wordByName = new Map(lesson.words.map(item => [item.en,item.id]));
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
    return line.split(/(\/[\p{L}ː]+\/|[A-Za-z]+(?:[ 、][A-Za-z]+)*)/u)
      .flatMap(part => {
        const text = part.trim();
        if (!text || /^[、，。！？；]+$/.test(text)) return [];
        if (sounds.has(text)) return [local(sounds.get(text))];
        if (text === '/æm/') return [en('am')];
        if (/^[A-Za-z]/.test(text)) return [en(text.replaceAll('、',', '))];
        return [zh(text)];
      });
  }
  function task(id) {
    const item = items.get(id);
    if (item?.kind === 'sound') return local(id);
    if (item?.kind === 'letter') return en(({A:'ay',H:'aitch',Z:'zed'})[item.en] || item.en);
    if (item) return en(item.en);
    if (id === 'example-yes' || id === 'example-my') return en(id.slice('example-'.length));
    const linked = items.get(id.replace(/-(example|context)$/,''));
    const text = id.endsWith('-example') ? linked?.example : linked?.context;
    return text ? en(text) : null;
  }
  function sectionTasks(section) {
    const intro = section.lines.flatMap(narration);
    switch (section.id) {
      case 'intro':
        return [...intro,task(wordByName.get('am')), local(sounds.get('/æ/')),local(sounds.get('/m/'))];
      case 'letters':
        return [...intro,...lesson.letters.map(item => task(item.id)),en('yes'),en('my')];
      case 'vowels':
      case 'consonants':
        return [...intro,...lesson.sounds.filter(item => item.group+'s'===section.id)
          .flatMap(item => [local(item.id),en(item.example),zh(item.exampleZh)])];
      case 'words':
        return [...intro,...lesson.words.flatMap(item => [en(item.en),zh(item.zh)])];
      case 'phrases': {
        const examples = [...lesson.phrases,...lesson.sentences];
        const ordered = [...examples.filter(item => !item.extra),...examples.filter(item => item.extra)];
        return [...intro,...ordered.flatMap(item => [
          ...(item.context ? [en(item.context)] : []),en(item.en),zh(item.zh)
        ])];
      }
      default:
        return intro;
    }
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
      const timeout = setTimeout(() => finish(false),12000);
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
      const section = id.startsWith('section-') && sections.get(id.slice('section-'.length));
      const queue = section ? sectionTasks(section) : [task(id)];
      for (const entry of queue) {
        if (!entry || current !== token) return false;
        if (entry.id) {
          const played = await playSound(entry.id,rate);
          if (current !== token || (!played && !section)) return false;
        } else {
          try { await reader.play(entry.text,entry.locale,rate); }
          catch { return false; }
        }
      }
    }
    return current === token;
  }
  window.addEventListener('pagehide',stop);
  window.WMA1Audio = {play:(...ids) => playAt(1,...ids),playAt,stop};
})();
