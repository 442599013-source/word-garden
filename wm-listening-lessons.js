/* Fixed, bilingual lessons for the Listening → Passages entry point. */
(() => {
  'use strict';
  const ROOTS_URL = 'content/pte-root-lessons.json?v=64.62';
  const KEY = 'wm-root-lesson-progress-v6462';
  const languages = ['en-GB', 'zh-CN'];
  const legacyQuestions = {
    'passage:kindergarten:1': [
      ['The main library is at the {heart} of the campus.', '主图书馆位于校园中心。', ['edge', 'gate']],
      ['We can visit the library and look at its {books}.', '我们可以去图书馆看看里面的书。', ['computers', 'paintings']],
      ['A {historic} library is also an interesting place to visit and learn about.', '历史悠久的图书馆也是值得参观和学习的地方。', ['mobile', 'new']],
    ],
    'passage:kindergarten:2': [
      ['The school provides hot {lunches} for students.', '学校为学生提供热午餐。', ['drinks', 'dinners']],
      ['Every student has their own {computer}.', '每个学生都有自己的电脑。', ['locker', 'desk']],
      ['Students can eat lunch at school and use their computers to {learn}.', '学生可以在学校吃午餐，并使用电脑学习。', ['shop', 'travel']],
      ['These are two things that the school {provides} for them.', '这是学校为他们提供的两样东西。', ['sells', 'buys']],
    ],
  };
  let rootRequest;
  function loadRoots() {
    rootRequest ??= fetch(ROOTS_URL).then(response => {
      if (!response.ok) throw Error('Lesson file unavailable');
      return response.json();
    }).then(data => {
      if (data.lessons?.length !== 60) throw Error('Lesson file incomplete');
      return data.lessons;
    }).catch(error => {
      rootRequest = null;
      throw error;
    });
    return rootRequest;
  }

  function node(tag, text, className) {
    const el = document.createElement(tag);
    if (text) el.textContent = text;
    if (className) el.className = className;
    return el;
  }
  function button(label, onClick, icon) {
    const el = node('button', label);
    el.type = 'button';
    if (icon) WMStudyIcons.set(el, icon, label);
    el.onclick = onClick;
    return el;
  }
  function shuffled(items) {
    const out = [...items];
    for (let last = out.length - 1; last > 0; last--) {
      const other = Math.floor(Math.random() * (last + 1));
      [out[last], out[other]] = [out[other], out[last]];
    }
    return out;
  }
  function readProgress() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY));
      return {last: saved?.last, complete: new Set(Array.isArray(saved?.complete) ? saved.complete : [])};
    } catch {
      return {complete: new Set()};
    }
  }
  function lessonRows(lesson) {
    return [
      ...lesson.teaching,
      ...(lesson.vocabulary || []).flatMap(({word, zh, example}) => [{en: word, zh}, example]),
    ];
  }
  function rowsToAudio(rows) {
    return rows.flatMap(row => [
      {text: row.en, lang: languages[0]}, {text: row.zh, lang: languages[1]},
    ]);
  }
  function legacyAudio(item) {
    const rows = legacyQuestions[item?.id];
    return rows ? rowsToAudio(rows.map(([text, zh]) => ({en: text.replace(/[{}]/g, ''), zh}))) : null;
  }
  function legacyLessons(passages) {
    return passages.filter(item => legacyQuestions[item.id]).map(item => {
      const listening = legacyQuestions[item.id].map(([text, zh, distractors], i) => {
        const [before, word, after] = text.split(/[{}]/);
        const options = shuffled([word, ...distractors]).map((option, index) => ({id: String(index), text: option}));
        return {
          id: item.id + ':' + i,
          audio_with_gap: [{lang:'en-GB',text:before.trim()}, {pause_ms:850}, {lang:'en-GB',text:after.trim()}],
          options,
          correct_option_id: options.find(el => el.text === word).id,
          answer: {sentence_en: before + word + after, sentence_zh: zh},
        };
      });
      return {
        id: item.id, title: item.topic,
        teaching: listening.map(q => ({en:q.answer.sentence_en, zh:q.answer.sentence_zh})),
        listening,
      };
    });
  }

  function mount(host, {kind, passages, onClose}) {
    const status = node('p', '', 'wm-lesson-status');
    status.setAttribute('role', 'status');
    const voicePlayer = new WMMicrosoftVoice(node('audio'));
    const pane = node('div', '', 'wm-lesson-pane');
    const picker = node('select');
    picker.setAttribute('aria-label', 'Select lesson · 选择课程');
    const header = node('div', '', 'wm-lesson-toolbar');
    const back = button('Back to passages · 返回听短文', onClose, 'previous');
    const reviewButton = button('Mixed review · 总复习', showReview);
    reviewButton.hidden = true;
    header.append(back, picker, reviewButton);
    host.replaceChildren(node('h2', kind === 'roots' ? 'Word Roots · 词根小课堂' : 'Passage Lessons · 短文课堂'), header, status, pane);
    const progress = readProgress();
    let lessons = [], epoch = 0, current = null, closed = false, stopDelay, playingButton;
    let pendingReview = [], reviewGroup = [];

    function stopPlayback() {
      epoch++;
      stopDelay?.();
      stopDelay = null;
      voicePlayer.stop();
      if (playingButton) {
        WMStudyIcons.set(playingButton, 'speaker', playingButton.dataset.playLabel);
        playingButton = null;
      }
    }
    async function play(clips, control) {
      if (playingButton === control) {
        stopPlayback();
        status.textContent = '';
        return;
      }
      stopPlayback();
      const token = epoch;
      playingButton = control;
      WMStudyIcons.set(control, 'stop', 'Stop audio · 停止播放');
      status.textContent = 'Playing · 播放中';
      try {
        for (const clip of clips) {
          if (token !== epoch || closed) return;
          if (clip.pause_ms) {
            await new Promise(resolve => {
              const handle = setTimeout(resolve, clip.pause_ms);
              stopDelay = () => {clearTimeout(handle);resolve()};
            });
            stopDelay = null;
          } else if (clip.text) {
            await voicePlayer.play(clip.text, clip.lang);
          }
        }
        if (token === epoch) status.textContent = '';
      } catch (error) {
        if (token === epoch && error.name !== 'AbortError') status.textContent = 'Audio unavailable · 语音未播放，请重试';
      } finally {
        if (token === epoch) {
          WMStudyIcons.set(control, 'speaker', control.dataset.playLabel);
          playingButton = null;
        }
      }
    }
    function speaker(label, clips) {
      const control = button(label, () => void play(clips, control), 'speaker');
      control.dataset.playLabel = label;
      return control;
    }
    function section(title) {
      const el = node('section', '', 'wm-lesson-card');
      el.append(node('h3', title));
      pane.append(el);
      return el;
    }
    function feedback() {
      const el = node('p', '', 'wm-lesson-feedback');
      el.setAttribute('role', 'status');
      return el;
    }
    function mixedAvailable() {
      return kind === 'roots' && lessons.length > 0 && lessons.every(lesson => progress.complete.has(lesson.id));
    }
    function persist() {
      if (kind !== 'roots') return;
      try {
        localStorage.setItem(KEY, JSON.stringify({last:current?.id, complete:[...progress.complete]}));
      } catch {}
    }
    function markComplete(lesson, done, completion) {
      const required = lesson.listening.length + (lesson.root_quiz ? 1 : 0) + (lesson.matching?.english.length || 0);
      if (done.size !== required) return;
      progress.complete.add(lesson.id);
      persist();
      completion.textContent = '✓ Lesson complete · 本课已完成';
      reviewButton.hidden = !mixedAvailable();
    }

    function quiz(host, question, number, mark) {
      const isListening = !!question.audio_with_gap;
      const box = node('div', '', 'wm-lesson-question');
      const toolbar = node('div', '', 'wm-lesson-toolbar');
      toolbar.append(node('span', isListening ? `${number}. 听句选词` : question.prompt));
      if (isListening) toolbar.append(speaker('Play question · 播放题目', question.audio_with_gap));
      box.append(toolbar);
      const controls = node('div', '', 'wm-lesson-options');
      const result = feedback();
      for (const option of question.options) {
        const control = button(option.text, () => {
          for (const sibling of controls.children) delete sibling.dataset.state;
          if (option.id !== question.correct_option_id) {
            control.dataset.state = 'wrong';
            result.textContent = '再试一次。';
            return;
          }
          stopPlayback();
          status.textContent = '';
          control.dataset.state = 'correct';
          for (const sibling of controls.children) sibling.disabled = true;
          if (isListening) {
            result.textContent = question.answer.sentence_en + ' · ' + question.answer.sentence_zh;
            const answerClips = rowsToAudio([{en:question.answer.sentence_en, zh:question.answer.sentence_zh}]);
            const answerSpeaker = speaker('Play answer · 听完整答案', answerClips);
            toolbar.append(answerSpeaker);
            void play(answerClips, answerSpeaker);
          } else {
            result.textContent = '✓ ' + question.answer.zh;
          }
          mark(question.id);
        });
        controls.append(control);
      }
      box.append(controls, result);
      host.append(box);
    }

    function match(host, model, mark, whenDone = () => {}) {
      const result = feedback();
      const grid = node('div', '', 'wm-lesson-match');
      const left = node('div'), right = node('div');
      const matched = new Set();
      let active = null;
      const englishButtons = new Map();
      host.append(node('p', model.prompt || '先选英文，再选对应的中文。'), grid, result);
      grid.append(left, right);
      for (const item of model.english) {
        const control = button(item.text, () => {
          if (active) englishButtons.get(active)?.setAttribute('aria-pressed', 'false');
          active = item.id;
          control.setAttribute('aria-pressed', 'true');
          result.textContent = '';
        });
        control.setAttribute('aria-pressed', 'false');
        englishButtons.set(item.id, control);
        left.append(control);
      }
      for (const item of model.chinese) {
        const control = button(item.zh, () => {
          if (!active) {result.textContent = '请先选择一个英文词。';return}
          if (model.answer_key[active] !== item.id) {result.textContent = '这一组还不匹配，再试一次。';return}
          const selected = englishButtons.get(active);
          selected.setAttribute('aria-pressed', 'false');
          selected.disabled = control.disabled = true;
          selected.dataset.state = control.dataset.state = 'correct';
          matched.add(active);
          mark(active);
          active = null;
          result.textContent = `✓ ${matched.size} / ${model.english.length}`;
          if (matched.size === model.english.length) whenDone();
        });
        right.append(control);
      }
    }

    function showLesson(lesson) {
      stopPlayback();
      status.textContent = '';
      current = lesson;
      picker.value = lesson.id;
      pane.replaceChildren();
      const content = section(lesson.title || `${lesson.root_family} · ${lesson.core_meaning.zh}`);
      const rows = lessonRows(lesson);
      const headings = node('div', '', 'wm-lesson-toolbar');
      const completion = node('span', progress.complete.has(lesson.id) ? '✓ Lesson complete · 本课已完成' : '');
      headings.append(speaker('Play lesson · 播放整课', rowsToAudio(rows)), completion);
      content.append(headings);
      const text = node('details');
      text.open = true;
      text.append(node('summary', 'Lesson text · 讲解文本'));
      for (const row of rows) {
        const line = node('div', '', 'wm-lesson-line');
        const en = node('p', row.en); en.lang = 'en';
        const zh = node('p', row.zh); zh.lang = 'zh-CN';
        line.append(en, zh, speaker('Replay this line · 重听本句', rowsToAudio([row])));
        text.append(line);
      }
      content.append(text);
      const done = new Set();
      const mark = id => {done.add(id);markComplete(lesson, done, completion)};
      if (lesson.root_quiz) quiz(section('1 · Word root · 词根释义'), lesson.root_quiz, 1, mark);
      if (lesson.matching) match(section('2 · Match · 中英配对'), lesson.matching, mark);
      const practice = section(lesson.root_quiz ? '3 · Listening · 听句选词' : 'Listening · 听句选词');
      lesson.listening.forEach((item, i) => quiz(practice, item, i+1, mark));
      const next = lessons[lessons.indexOf(lesson)+1];
      if (next) practice.append(button('Next lesson · 下一课', () => {showLesson(next);host.scrollIntoView?.({block:'start'})}));
      persist();
    }

    function showReview() {
      stopPlayback();
      status.textContent = '';
      pane.replaceChildren();
      const panel = section('Mixed review · 词根总复习');
      if (!pendingReview.length && !reviewGroup.length) {
        pendingReview = shuffled(lessons.flatMap(lesson => lesson.matching.english.map(item => ({
          id:item.id, en:item.text, zh:lesson.matching.chinese.find(option => option.pair_id === item.id).zh,
        }))));
      }
      if (!reviewGroup.length) {
        const usedMeanings = new Set(), usedEnglish = new Set();
        for (let i=0; i<pendingReview.length && reviewGroup.length<8;) {
          const row = pendingReview[i];
          if (usedMeanings.has(row.zh) || usedEnglish.has(row.en)) {i++;continue}
          usedMeanings.add(row.zh);
          usedEnglish.add(row.en);
          reviewGroup.push(row);
          pendingReview.splice(i,1);
        }
      }
      const group = reviewGroup;
      const options = shuffled(group).map((item,i) => ({id:String(i),zh:item.zh,pair_id:item.id}));
      match(panel, {
        english:group.map(item => ({id:item.id,text:item.en})), chinese:options,
        answer_key:Object.fromEntries(options.map(item => [item.pair_id,item.id])),
      }, () => {}, () => {
        reviewGroup = [];
        panel.append(button(pendingReview.length ? 'Next group · 下一组' : 'Start again · 再练一轮', showReview));
      });
    }
    picker.onchange = () => {
      const lesson = lessons.find(item => item.id === picker.value);
      if (lesson) showLesson(lesson);
    };
    const request = kind === 'roots' ? loadRoots : () => Promise.resolve(legacyLessons(passages));
    async function open() {
      status.textContent = 'Loading lessons · 正在加载课程';
      picker.disabled = true;
      try {
        lessons = await request();
        if (closed) return;
        if (!lessons.length) throw Error('No lessons');
        picker.replaceChildren();
        lessons.forEach(lesson => {
          const option = node('option', lesson.title || lesson.number + '. ' + lesson.root_family);
          option.value = lesson.id;
          picker.append(option);
        });
        picker.disabled = false;
        reviewButton.hidden = !mixedAvailable();
        showLesson(lessons.find(lesson => lesson.id === progress.last) || lessons[0]);
      } catch {
        if (closed) return;
        status.textContent = 'Could not load lessons · 课程未加载';
        pane.replaceChildren(button('Retry · 重试', () => void open()));
      }
    }
    void open();
    return {stop:stopPlayback, destroy(){closed=true;stopPlayback();voicePlayer.destroy();host.replaceChildren()}};
  }
  window.WMListeningLessons = {mount, legacyAudio};
})();
