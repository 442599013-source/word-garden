(() => {
  'use strict';

  function mount(root) {
    const lesson = WMA1Lesson2;
    const heading = WMClassroomCatalog.lessons.find(item => item.number === lesson.number);
    const audio = WMA1Audio;
    let active = null, request = 0;
    const status = node('p', '', 'a1-status');
    status.setAttribute('role', 'status');

    function node(tag, text, className) {
      const el = document.createElement(tag);
      if (text) el.textContent = text;
      if (className) el.className = className;
      return el;
    }
    function paint(button, playing) {
      if (!button) return;
      button.setAttribute('aria-pressed', String(playing));
      WMStudyIcons.set(button, playing ? 'stop' : 'speaker', playing ? '停止朗读' : button.dataset.label);
    }
    function speaker(label, ids) {
      const button = node('button', '', 'a1-speaker');
      button.type = 'button';
      button.dataset.label = label;
      paint(button, false);
      button.onclick = async () => {
        const wasPlaying = active === button, current = ++request;
        audio.stop();
        paint(active, false);
        active = null;
        status.textContent = '';
        if (wasPlaying) return;
        active = button;
        paint(button, true);
        const ok = await audio.play(...ids);
        if (current !== request) return;
        paint(button, false);
        active = null;
        if (!ok) status.textContent = '点读未完成，请再试一次。';
      };
      return button;
    }
    function block(title, playButton) {
      const section = node('section', '', 'a1-block');
      const row = node('div', '', 'a1-block-heading');
      row.append(node('h2', title), playButton);
      section.append(row);
      return section;
    }
    const english = text => ({text, locale:'en-GB'});
    const chinese = text => ({text, locale:'zh-CN'});
    const intro = [
      ['Listen to the whole word.', '先听整个单词，找出最先听到的音素。'],
      ['Egg starts with a vowel sound.', '鸡蛋这个词开头听到的是元音音素。'],
      ['Use starts with a consonant sound.', '使用这个词虽然以元音字母开头，但第一个音素和 yes 的开头一样，所以归入辅音音素开头一类。']
    ];
    const introId = '2yy2-intro';
    audio.registerNarration(introId, intro.flatMap(([en,zh])=>[english(en),chinese(zh)]));
    const groupIds = Object.keys(lesson.labels).map(key=>'2yy2-'+key);
    const mainSpeaker = speaker('朗读整课', [introId,...groupIds].map(id=>'section-'+id));
    const titleBar = node('div', '', 'a1-block-heading');
    titleBar.append(node('h1', heading.titleZh+' · '+lesson.topic), mainSpeaker);
    const introBlock = block('怎么听首音', speaker('朗读首音示范',['section-'+introId]));
    for (const [en,zh] of intro) {
      const sentence = node('p', en);
      sentence.lang = 'en';
      introBlock.append(sentence,node('p',zh));
    }
    root.append(node('p',heading.code+' · Magic Classroom','a1-kicker'),titleBar,introBlock,status);
    for (const [group,label] of Object.entries(lesson.labels)) {
      const words = lesson.words.filter(item=>item.group===group);
      const id = '2yy2-'+group;
      audio.registerNarration(id, [chinese(label),...words.flatMap(item=>[english(item.en),chinese(item.zh)])]);
      const section = block(label+' · '+words.length+' 词',speaker('朗读'+label,['section-'+id]));
      const grid = node('div','','a1-card-grid');
      for (const item of words) {
        const card = node('div','','a1-item');
        card.dataset.word = item.en;
        const word = node('strong',item.en);
        word.lang = 'en';
        card.append(word,node('small',item.zh),speaker('听 '+item.en,[item.id]));
        grid.append(card);
      }
      section.append(grid);
      root.append(section);
    }
    const practice = node('a','去第二关魔法配对','a1-button');
    practice.href = 'word-match.html?level=2&from=journey';
    root.append(practice);
    const back = document.querySelector('.a1-nav a');
    if (back) back.href = 'level-activities.html?level=2';
  }
  window.WMA1Lesson2Classroom = {mount};
})();
