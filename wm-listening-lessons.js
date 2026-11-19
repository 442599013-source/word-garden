/* Fixed, bilingual lessons for the Listening → Passages entry point. */
(() => {
  'use strict';
  const ROOTS_URL = 'content/pte-root-lessons.json?v=64.63';
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
      return data;
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
      return {last: saved?.last, complete: new Set(Array.isArray(saved?.complete) ? saved.complete : []), sessions: saved?.sessions && typeof saved.sessions === 'object' && !Array.isArray(saved.sessions) ? saved.sessions : {}};
    } catch {
      return {complete: new Set(), sessions: {}};
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

  function mount(host, {passages = []} = {}) {
    const status = node('p', '', 'wm-lesson-status');
    status.setAttribute('role', 'status');
    const voice = new WMMicrosoftVoice(node('audio'));
    const pane = node('div', '', 'wm-lesson-pane');
    const picker = node('select');
    picker.setAttribute('aria-label', 'Select lesson · 选择课程');
    const header = node('div', '', 'wm-lesson-toolbar');
    const reviewButton = button('Mixed review · 总复习', showReview);
    reviewButton.hidden = true;
    header.append(picker, reviewButton);
    host.replaceChildren(node('h2', 'Word Roots · 词根小课堂'), header, status, pane);
    const progress = readProgress();
    const lessonOptions = new Map();
    let lessons = [], glossary = {}, current = null, closed = false;
    let epoch = 0, stopDelay, playingButton, pendingReview = [], reviewGroup = [];

    function setPlaying(control, playing) {
      if (control?.dataset.playLabel) {
        WMStudyIcons.set(control, playing ? 'stop' : 'speaker', playing ? 'Stop audio · 停止播放' : control.dataset.playLabel);
      }
    }
    function stopPlayback() {
      epoch++;
      const cancelDelay = stopDelay;
      stopDelay = null;
      cancelDelay?.();
      voice.stop();
      setPlaying(playingButton, false);
      playingButton = null;
    }
    async function play(clips, control) {
      const wasPlaying = playingButton === control;
      stopPlayback();
      status.textContent = '';
      if (wasPlaying || closed) return;
      const token = epoch;
      playingButton = control;
      setPlaying(control, true);
      try {
        for (const clip of clips) {
          if (token !== epoch || closed) return;
          if (clip.pause_ms) {
            await new Promise(resolve => {
              const handle = setTimeout(resolve, clip.pause_ms);
              stopDelay = () => {clearTimeout(handle);resolve()};
            });
            if (token === epoch) stopDelay = null;
          } else if (clip.text) {
            await voice.play(clip.text, clip.lang);
          }
        }
      } catch (error) {
        if (token === epoch && error.name !== 'AbortError') status.textContent = 'Audio unavailable · 语音未播放，请重试';
      } finally {
        if (token === epoch) {
          setPlaying(control, false);
          playingButton = null;
        }
      }
    }
    function speaker(label, clips, size = '') {
      const control = button(label, () => void play(typeof clips === 'function' ? clips() : clips, control), 'speaker');
      control.dataset.playLabel = label;
      control.classList.add('wm-lesson-speaker');
      if (size) control.classList.add(size);
      return control;
    }
    function english(text) {
      return [{lang: languages[0], text}];
    }
    function section(title) {
      const el = node('section', '', 'wm-lesson-card');
      if (title) el.append(node('h3', title));
      pane.append(el);
      return el;
    }
    function feedback() {
      const el = node('p', '', 'wm-lesson-feedback');
      el.setAttribute('role', 'status');
      return el;
    }
    function mixedAvailable() {
      return lessons.length > 0 && lessons.every(lesson => progress.complete.has(lesson.id));
    }
    function updateOption(lesson) {
      const option = lessonOptions.get(lesson.id);
      if (option) option.textContent = lesson.number + '. ' + lesson.root_family + (progress.complete.has(lesson.id) ? ' ✓' : '');
    }
    function persist() {
      try {
        localStorage.setItem(KEY, JSON.stringify({last:current?.id, complete:[...progress.complete], sessions:progress.sessions}));
      } catch {
        status.textContent = 'Progress not saved · 本次进度未能保存';
      }
    }

    function rootQuiz(host, question, done, mark) {
      host.append(node('p', question.prompt));
      const controls = node('div', '', 'wm-lesson-options');
      const result = feedback();
      function reveal() {
        for (const control of controls.children) {
          control.disabled = true;
          control.dataset.state = control.dataset.optionId === question.correct_option_id ? 'correct' : '';
        }
        result.textContent = '✓ ' + question.answer.zh;
      }
      for (const option of question.options) {
        const control = button(option.text, () => {
          if (option.id === question.correct_option_id) {reveal();mark(question.id);return}
          for (const other of controls.children) delete other.dataset.state;
          control.dataset.state = 'wrong';
          result.textContent = '再试一次。';
        });
        control.dataset.optionId = option.id;
        controls.append(control);
      }
      host.append(controls, result);
      if (done.has(question.id)) reveal();
    }

    function match(host, model, done, mark, whenDone = () => {}) {
      const result = feedback();
      const left = node('div'), right = node('div');
      const grid = node('div', '', 'wm-lesson-match');
      const matched = new Set(model.english.filter(item => done.has(item.id)).map(item => item.id));
      const englishButtons = new Map();
      let active = null;
      function showCount() {
        result.textContent = matched.size ? `✓ ${matched.size} / ${model.english.length}` : '';
      }
      host.append(node('p', model.prompt || '先点英文听读，再选中文释义。'), grid, result);
      grid.append(left, right);
      for (const item of model.english) {
        const control = button(item.text, () => {
          void play(english(item.text), control);
          if (matched.has(item.id)) return;
          if (active) englishButtons.get(active)?.setAttribute('aria-pressed', 'false');
          active = item.id;
          control.setAttribute('aria-pressed', 'true');
          showCount();
        });
        control.lang = 'en-GB';
        control.setAttribute('aria-pressed', 'false');
        if (matched.has(item.id)) control.dataset.state = 'correct';
        englishButtons.set(item.id, control);
        left.append(control);
      }
      for (const item of model.chinese) {
        const control = button(item.zh, () => {
          if (!active) {result.textContent = '请先选一个英文词组。';return}
          if (model.answer_key[active] !== item.id) {result.textContent = '这一组还不匹配，再试一次。';return}
          const selected = englishButtons.get(active);
          selected.setAttribute('aria-pressed', 'false');
          selected.dataset.state = control.dataset.state = 'correct';
          control.disabled = true;
          matched.add(active);
          mark(active);
          active = null;
          showCount();
          if (matched.size === model.english.length) whenDone();
        });
        control.disabled = matched.has(item.pair_id);
        if (control.disabled) control.dataset.state = 'correct';
        right.append(control);
      }
      showCount();
    }

    function showContext(host, lesson, state, done, mark, sync) {
      const questions = lesson.context_questions;
      const byId = new Map(questions.map(question => [question.id,question]));
      if (!Array.isArray(state.order) || state.order.length !== questions.length || new Set(state.order).size !== questions.length || state.order.some(id => !byId.has(id))) {
        state.order = shuffled(questions).map(question => question.id);
      }
      const currentIndex = state.order.indexOf(state.current);
      let index = currentIndex < 0 ? 0 : currentIndex;
      const card = node('div', '', 'wm-context-card');
      const nav = node('div', '', 'wm-lesson-toolbar wm-context-nav');
      const previous = button('Previous question · 上一题', () => move(-1), 'previous');
      const next = button('Next question · 下一题', () => move(1), 'next');
      const position = node('span');
      position.setAttribute('aria-live', 'polite');
      nav.append(previous, position, next);
      const sentence = node('p', '', 'wm-context-sentence');
      sentence.lang = 'en-GB';
      const hintToggle = button('中文提示', () => {
        const question = byId.get(state.order[index]);
        hint.hidden = !hint.hidden;
        hintToggle.setAttribute('aria-expanded', String(!hint.hidden));
        hint.textContent = hint.hidden ? '' : question.translationGap;
      });
      const hint = node('p', '', 'wm-lesson-feedback');
      hint.hidden = true;
      const definition = node('div', '', 'wm-context-definition');
      definition.hidden = true;
      definition.setAttribute('role', 'status');
      const result = feedback();
      const bank = node('div', '', 'wm-lesson-options wm-context-options');
      const bankOptions = [];
      let swipeStart = null, lastSwipe = 0;
      function clips() {
        const question = byId.get(state.order[index]);
        if (done.has(question.id)) return rowsToAudio([{en:question.completedEnglish,zh:question.completedChinese}]);
        return [...english(question.before.trim()), {pause_ms:600}, ...english(question.after.trim())];
      }
      const read = speaker('Read sentence · 读句子', clips);
      const sentenceRow = node('div', '', 'wm-context-sentence-row');
      sentenceRow.append(sentence, read);
      card.append(nav, sentenceRow, hintToggle, hint, definition);
      host.append(card, node('p', '从下面选词组填空。点句子里的词可以查意思。', 'wm-lesson-feedback'), bank, result);

      function addWords(text) {
        const fragments = text.split(/([A-Za-z]+(?:['’-][A-Za-z]+)*)/g);
        for (let i=0; i<fragments.length; i++) {
          const part = fragments[i];
          if (!part) continue;
          if (i % 2 === 0) {
            sentence.append(document.createTextNode(part));
            continue;
          }
          const word = button(part, () => {
            if (Date.now()-lastSwipe < 280) return;
            const meaning = glossary[part.toLowerCase()] || '可用下方的中文提示理解整句。';
            const readWord = speaker('Read word · 读 ' + part, english(part), 'wm-mini-speaker');
            definition.replaceChildren(node('span', part + ' · ' + meaning), readWord);
            definition.hidden = false;
          });
          word.classList.add('wm-word-tap');
          sentence.append(word);
        }
      }
      function render() {
        const question = byId.get(state.order[index]);
        const correct = done.has(question.id);
        state.current = question.id;
        position.textContent = `${index+1} / ${questions.length}`;
        previous.disabled = index === 0;
        next.disabled = index === questions.length-1;
        hint.hidden = definition.hidden = true;
        hintToggle.hidden = correct;
        hintToggle.setAttribute('aria-expanded','false');
        definition.replaceChildren();
        sentence.replaceChildren();
        if (correct) {
          addWords(question.before);
          sentence.append(node('strong', lesson.matching.english.find(item => item.id === question.phraseId).text.replace(/^./, letter => question.before.trim() ? letter : letter.toUpperCase())));
          addWords(question.after);
        } else {
          addWords(question.before);
          const blank = node('span', '___', 'wm-context-blank');
          blank.setAttribute('aria-label','blank');
          sentence.append(blank);
          addWords(question.after);
        }
        result.textContent = correct ? '✓ ' + question.completedChinese : '';
        for (const {control,item} of bankOptions) {
          delete control.dataset.state;
          if (correct && item.id === question.phraseId) control.dataset.state = 'correct';
        }
      }
      function move(step) {
        const destination = index + step;
        if (destination < 0 || destination >= questions.length) return;
        stopPlayback();
        status.textContent = '';
        index = destination;
        render();
        sync();
      }
      for (const item of shuffled(lesson.matching.english)) {
        const control = button(item.text, () => {
          const question = byId.get(state.order[index]);
          if (done.has(question.id)) {
            void play(english(item.text), control);
            return;
          }
          for (const pair of bankOptions) delete pair.control.dataset.state;
          if (item.id === question.phraseId) {
            stopPlayback();
            status.textContent = '';
            mark(question.id);
            render();
          } else {
            control.dataset.state = 'wrong';
            result.textContent = '再读读句子，试另一个词组。';
          }
        });
        bankOptions.push({control,item});
        bank.append(control);
      }
      card.addEventListener('pointerdown', event => {
        swipeStart = event.pointerType === 'touch' ? {x:event.clientX,y:event.clientY} : null;
      });
      card.addEventListener('pointerup', event => {
        if (!swipeStart) return;
        const dx = event.clientX-swipeStart.x, dy = event.clientY-swipeStart.y;
        swipeStart = null;
        if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)*1.4) {
          lastSwipe = Date.now();
          move(dx < 0 ? 1 : -1);
        }
      });
      card.addEventListener('pointercancel', () => {swipeStart = null});
      card.addEventListener('click', event => {
        if (Date.now()-lastSwipe < 280) {
          event.preventDefault();
          event.stopPropagation();
        }
      }, true);
      render();
      sync();
    }

    function teachingBlock(content, lesson) {
      const text = node('div', '', 'wm-lesson-teaching');
      for (const row of lesson.teaching) {
        const line = node('div', '', 'wm-lesson-line');
        const en = node('p', row.en); en.lang = 'en-GB';
        const zh = node('p', row.zh); zh.lang = 'zh-CN';
        line.append(en, zh, speaker('Replay this explanation · 重听这段', rowsToAudio([row]), 'wm-mini-speaker'));
        text.append(line);
      }
      for (const {word, zh, example} of lesson.vocabulary || []) {
        const item = node('div', '', 'wm-lesson-example');
        const term = node('p', '', 'wm-lesson-example-term');
        const label = node('span', word); label.lang = 'en-GB';
        term.append(label, document.createTextNode(' · ' + zh));
        term.append(speaker('Read example · 读 ' + word, rowsToAudio([{en:word,zh},example]), 'wm-mini-speaker'));
        const en = node('p', example.en); en.lang = 'en-GB';
        const translation = node('p', example.zh); translation.lang = 'zh-CN';
        item.append(term,en,translation);
        text.append(item);
      }
      content.append(text);
    }

    function appendLegacy() {
      const originals = legacyLessons(passages);
      if (!originals.length) return;
      const details = node('details', '', 'wm-lesson-older-passages');
      details.append(node('summary', '原有两篇短文'));
      const area = node('div');
      details.append(area);
      details.ontoggle = () => {
        if (!details.open) {stopPlayback();return}
        if (area.children.length) return;
        for (const lesson of originals) {
          const block = node('section', '', 'wm-lesson-card');
          const heading = node('div', '', 'wm-lesson-toolbar');
          heading.append(node('h3', lesson.title), speaker('Read passage · 播放短文',rowsToAudio(lesson.teaching)));
          block.append(heading);
          teachingBlock(block, lesson);
          for (const question of lesson.listening) {
            const row = node('div', '', 'wm-lesson-toolbar');
            row.append(speaker('Play question · 播放题目',question.audio_with_gap));
            const result = feedback();
            for (const option of question.options) {
              const control = button(option.text, () => {
                if (option.id !== question.correct_option_id) {result.textContent = '再试一次。';return}
                result.textContent = '✓ ' + question.answer.sentence_en + ' · ' + question.answer.sentence_zh;
                for (const sibling of row.children) if (!sibling.dataset.playLabel) sibling.disabled = true;
              });
              row.append(control);
            }
            block.append(row,result);
          }
          area.append(block);
        }
      };
      pane.append(details);
    }

    function showLesson(lesson) {
      stopPlayback();
      status.textContent = '';
      current = lesson;
      picker.value = lesson.id;
      pane.replaceChildren();
      const state = progress.sessions[lesson.id] ||= {};
      const done = new Set(Array.isArray(state.done) ? state.done : []);
      const required = [lesson.root_quiz.id, ...lesson.matching.english.map(x => x.id), ...lesson.context_questions.map(x => x.id)];
      const content = section();
      const headings = node('div', '', 'wm-lesson-toolbar wm-lesson-heading');
      headings.append(node('h3', `${lesson.number}. ${lesson.root_family} · ${lesson.core_meaning.zh}`),
        speaker('Play lesson · 播放整课', rowsToAudio(lessonRows(lesson))));
      content.append(headings);
      teachingBlock(content,lesson);
      const completion = feedback();
      const sync = () => {
        state.done = [...done];
        if (required.every(id => done.has(id))) progress.complete.add(lesson.id);
        completion.textContent = progress.complete.has(lesson.id) ? '✓ Lesson complete · 本课已完成' : '';
        updateOption(lesson);
        reviewButton.hidden = !mixedAvailable();
        persist();
      };
      const mark = id => {done.add(id);sync()};
      rootQuiz(section('1 · Word root · 词根释义'), lesson.root_quiz, done, mark);
      match(section('2 · Match · 中英配对'), lesson.matching, done, mark);
      const practice = section('3 · Complete the sentence · 看句子选词组');
      showContext(practice, lesson, state, done, mark, sync);
      const footer = node('div', '', 'wm-lesson-toolbar');
      footer.append(completion, button('重做本课', () => {
        delete progress.sessions[lesson.id];
        progress.complete.delete(lesson.id);
        showLesson(lesson);
        host.scrollIntoView?.({block:'start'});
      }));
      const next = lessons[lessons.indexOf(lesson)+1];
      if (next) footer.append(button('下一课', () => {showLesson(next);host.scrollIntoView?.({block:'start'})}));
      practice.append(footer);
      appendLegacy();
    }

    function showReview() {
      stopPlayback();
      status.textContent = '';
      pane.replaceChildren();
      const panel = section('Mixed review · 词根总复习');
      panel.append(button('返回本课', () => showLesson(current)));
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
      }, new Set(), () => {}, () => {
        reviewGroup = [];
        panel.append(button(pendingReview.length ? '下一组' : '再练一轮', showReview));
      });
    }

    picker.onchange = () => {
      const lesson = lessons.find(item => item.id === picker.value);
      if (lesson) showLesson(lesson);
    };
    async function open() {
      status.textContent = 'Loading lessons · 正在加载课程';
      picker.disabled = true;
      try {
        const data = await loadRoots();
        if (closed) return;
        lessons = data.lessons;
        glossary = data.glossary || {};
        picker.replaceChildren();
        for (const lesson of lessons) {
          const option = node('option');
          option.value = lesson.id;
          lessonOptions.set(lesson.id, option);
          updateOption(lesson);
          picker.append(option);
        }
        picker.disabled = false;
        showLesson(lessons.find(lesson => lesson.id === progress.last) || lessons[0]);
      } catch {
        if (closed) return;
        status.textContent = 'Could not load lessons · 课程未加载';
        pane.replaceChildren(button('Retry · 重试', () => void open()));
      }
    }
    void open();
    return {stop:stopPlayback, destroy(){closed=true;stopPlayback();voice.destroy();host.replaceChildren()}};
  }
  window.WMListeningLessons = {mount, legacyAudio};
})();
