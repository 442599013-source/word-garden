(() => {
  'use strict';
  const lesson = WMA1Lesson, audio = WMA1Audio;
  const root = document.getElementById('root');
  const available=WMClassroomCatalog.lessons.filter(item=>item.number===1||item.number===2&&window.WMA1Lesson2Classroom);
  const parameters=new URLSearchParams(location.search);
  const requested=Number(parameters.get('level') || (location.hash==='#a1-assessment'?1:resumeLesson()));

  function read(key){
    try{return JSON.parse(localStorage.getItem(key)||'null')||{}}
    catch{return {}}
  }
  function resumeLesson(){
    const quiz=read(lesson.id+':classification');
    const firstQuizComplete=[
      ['letters','请选择元音字母',lesson.letters],
      ['sounds','请选择元音音素',lesson.sounds],
      ['words','请选择以元音音素开头的单词',lesson.words]
    ].every(([kind,title,items])=>{
      const verified=quiz.verifiedQuestions?.[kind];
      return Array.isArray(quiz[kind])&&items.every(item=>quiz[kind].includes(item.id)&&(
        !quiz.verifiedQuestions ||
        verified?.[item.id]===JSON.stringify([title,item.kind,item.en,item.ipa,item.group])
      ));
    });
    return available.find(({number})=>!(
      number===1?firstQuizComplete:window.WMA1Lesson2Quiz?.complete()
    ))?.number||available.at(-1).number;
  }

  const back=document.querySelector('.a1-nav a');
  if(back){
    back.href='level-activities.html?level='+requested;
    const picker=element('select');
    picker.setAttribute('aria-label','课次');
    for(const entry of available){
      const option=element('option','第 '+entry.number+' 课 · '+entry.code);
      option.value=String(entry.number);
      picker.append(option);
    }
    picker.value=String(requested);
    picker.onchange=()=>{ location.href='sentence-game.html?level='+picker.value; };
    back.after(picker);
  }
  if (requested === 2 && window.WMA1Lesson2Classroom) {
    window.WMA1Lesson2Classroom.mount(root);
    return;
  }
  if (requested !== lesson.number) {
    root.textContent = '第 ' + requested + ' 课暂无内容。';
    return;
  }

  function element(tag, text, className) {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  }
  function button(text, action, className = 'a1-button') {
    const node = element('button', text, className);
    node.type = 'button';
    node.onclick = action;
    return node;
  }

  const status = element('p', '', 'a1-status');
  status.setAttribute('role', 'status');
  let activeSpeaker, request = 0;
  function mark(speaker, playing) {
    if (!speaker) return;
    speaker.setAttribute('aria-pressed', String(playing));
    WMStudyIcons.set(speaker, playing ? 'stop' : 'speaker', playing ? '停止朗读' : speaker.dataset.playLabel);
  }
  function stop() {
    request++;
    audio.stop();
    mark(activeSpeaker, false);
    activeSpeaker = undefined;
  }
  async function play(ids, speaker) {
    const toggling = speaker && activeSpeaker === speaker;
    stop();
    if (toggling) return;
    const current = request;
    activeSpeaker = speaker;
    mark(speaker, true);
    status.textContent = '';
    if (!await audio.play(...ids) && current === request) status.textContent = '点读失败，请再试一次。';
    if (current === request) {
      mark(speaker, false);
      activeSpeaker = undefined;
    }
  }

  function speakerFor(ids, label) {
    const speaker = button('', () => void play(ids, speaker), 'a1-speaker');
    speaker.dataset.playLabel = label;
    mark(speaker, false);
    return speaker;
  }
  const audioItem = id => ({id});
  function narrationSpeaker(id, parts, label) {
    audio.registerNarration(id, parts);
    return speakerFor(['section-' + id], label);
  }
  function tile(label, id) {
    return button(label, () => void play([id]), 'a1-tile');
  }
  const showWord = item => item.en + '（' + item.zh + '）';
  const words = new Map(lesson.words.map(item=>[item.en,item]));
  const am = words.get('am');
  const sections = element('div');
  const soundsBySymbol = new Map(lesson.sounds.map(sound=>[sound.ipa,sound]));
  const placedLetters = new Set();
  const lettersBySound = new Map(Object.entries({
    'æ':'A','b':'B','k':'CKQ','d':'D','e':'E','f':'F','ɡ':'G','h':'H','ɪ':'I',
    'dʒ':'J','l':'L','m':'M','n':'N','ɒ':'O','p':'P','r':'R','s':'SX','t':'T',
    'ʌ':'U','v':'V','w':'W','j':'Y','z':'Z'
  }));
  const articulation = {
    'æ':'把嘴张开一些，舌头放低，气流顺着嘴里出来。','m':'双唇轻轻合上，让声音从鼻子出来。',
    'p':'双唇先合上再放开，感觉一小股气出来。','s':'让气流挤过舌尖和上齿附近的窄缝。',
    'iː':'嘴角略向两边，舌头前部抬高，把这个音稍稍拉长。','ɪ':'舌头前部抬起，嘴和舌头放松一点，发一个短音。',
    'ə':'放松嘴和舌头，轻轻发一个短音。','ŋ':'舌头后部贴近上方，声音从鼻子出来。',
    'e':'舌头前部稍微抬起，嘴比发 /æ/ 时张得小一些。',
    'ɑː':'口腔张开，舌头偏后，把声音稍微拉长。',
    'ɒ':'舌头靠后，嘴张开，嘴唇稍圆，发一个短音。',
    'ɔː':'嘴唇收圆，舌头靠后，把这个音稍稍拉长。',
    'ʊ':'嘴唇轻轻收圆，舌头后部抬起一点，发一个短音。',
    'uː':'嘴唇收圆，舌头抬高，把这个音稍稍拉长。',
    'ʌ':'嘴自然张开，舌头放松在口腔中间，发一个短音。',
    'ɜː':'嘴和舌头放松在中间位置，让声音持续一小会儿。',
    'eɪ':'先发前半段，接着把舌头抬高一点，让声音滑到后半段。',
    'aɪ':'先张开嘴，再把舌头前部往上抬，两个部分连成一个音节。',
    'ɔɪ':'嘴唇先收圆，接着向两边放松，舌头滑向前上方。',
    'əʊ':'从放松的嘴形起步，慢慢收圆嘴唇。',
    'aʊ':'先张开嘴，再慢慢收圆嘴唇。',
    'ɪə':'舌头前部先抬起来，再放松回到中间。',
    'eə':'从嘴稍张开的前元音起步，舌头滑向中间。',
    'ʊə':'嘴唇先稍微收圆，再放松。听两个部分连起来的声音。',
    'b':'双唇先合上，再放开。和 /p/ 比一比，这个音带声带振动。',
    't':'舌尖先抵住上齿背后的齿龈，再放开。',
    'd':'舌尖先抵住齿龈再放开，留意带声的感觉。',
    'k':'舌头后部先抵住软腭，再放开。',
    'ɡ':'舌头后部先抵住软腭再放开，留意带声的感觉。',
    'f':'上牙轻碰下唇，让气流从窄缝擦过去。',
    'v':'上牙轻碰下唇，让气流擦过去，同时让声带振动。',
    'θ':'舌尖轻靠上门牙，让气流从缝里出去。',
    'ð':'舌尖轻靠上门牙，让气流从缝里出去，同时让声带振动。',
    'z':'嘴形和 /s/ 接近，同时让声带振动。',
    'ʃ':'舌头前部抬起，嘴唇轻轻收圆，让气流从较靠后的位置擦过去。',
    'ʒ':'嘴形和 /ʃ/ 接近，同时让声带振动。',
    'h':'放松嘴巴，轻轻呼气，马上接到后面的元音音素。',
    'tʃ':'舌头先挡住气流，再留出一道窄缝，让气流擦出去。',
    'dʒ':'舌头先挡住气流，再让气流擦出去。和 /tʃ/ 相比，这个音带声。',
    'n':'舌尖抵住齿龈，声音从鼻子出来。',
    'l':'舌尖碰到齿龈，气流从舌头两侧出去。',
    'r':'舌尖抬起，靠近上方，舌尖和上方之间留一点空隙。',
    'j':'把舌头前部抬向上腭，然后马上滑向后面的元音音素。',
    'w':'先收圆嘴唇，再马上滑进后面的元音音素。'
  };
  function explain(sound) {
    const ipa = sound.exampleIpa;
    const position = ipa === sound.ipa ? '这个词的整个读音' :
      ipa.startsWith(sound.ipa) ? '这个词开头的音' :
      ipa.endsWith(sound.ipa) ? '这个词末尾的音' : '这个词中间的音';
    let text = '点 ' + sound.example + '（' + sound.exampleZh + '），听' + position + '。找找拼写里的 ' +
      sound.spelling.split(', ')[0] + '，听听它在词里怎么读。';
    if (sound.ipa === 'ə' || sound.ipa === 'eɪ') {
      text = '点 a（一个），听它的' + (sound.ipa === 'ə' ? '弱读。说话时轻轻带过这个词，常听到这个短音。' : '强读。单独说这个词或特意强调时，可以听到这个音。');
    }
    if (sound.ipa === 'k') text += '在 car（汽车）里，字母 c 也表示这个音。点 Q 听字母名，开头也能听到这个音。';
    if (sound.ipa === 'v') text = '听 of（……的）的结尾。这里写的是 f，却读成这个音。再点 V 听字母名，开头也能听到这个音。';
    if (sound.ipa === 'z') text = '听 is（是）的结尾。这里写的是 s，发的是这个带振动的声音。再点 Z 听字母名，开头也能听到这个音。';
    if (sound.ipa === 'j') text += '再听 my（我的）的词尾。这里也写 y，但你听到的是元音音素 /aɪ/。';
    if (sound.ipa === 'm') text += '再点 am（是），这一次把注意力放在词尾。';
    if (sound.ipa === 's') text = '先听 so（所以）的开头。再比较 ox（公牛）的词尾，字母 x 在这里合起来表示 /k/ 和 /s/。';
    return (articulation[sound.ipa] ? articulation[sound.ipa] + ' ' : '') + text;
  }

  const overview = element('section', '', 'a1-block');
  const overviewHeading = element('header', '', 'a1-block-heading');
  overviewHeading.append(element('h2', '先听一遍 44 个音素'),
    speakerFor(['all-phonemes-v6473'], '播放全部 44 个音素'));
  overview.append(overviewHeading, element('p', '先听元音音素，再听辅音音素。'));
  for (const [category,title] of [['vowel','20 个元音音素'], ['consonant','24 个辅音音素']]) {
    const group = element('div', '', 'a1-pool');
    group.append(...lesson.sounds.filter(sound=>sound.group===category).map(sound=>tile(sound.en,sound.id)));
    overview.append(element('h3',title),group);
  }
  sections.append(overview);

  function listeningSummary(title, items, labelFor) {
    const block = element('section', '', 'a1-block a1-listening-summary');
    const header = element('header', '', 'a1-block-heading');
    const groups = ['vowel', 'consonant'].map(group => items.filter(item => item.group === group));
    const names = lesson.labels[items[0].kind];
    const narration = [title];
    header.append(element('h2', title));
    block.append(header);
    for (const group of groups) {
      const name = names[group[0].group];
      const heading = element('header', '', 'a1-block-heading');
      const parts = [name, ...group.flatMap(item => item.kind === 'word' ?
        [audioItem(item.id), item.zh] : [audioItem(item.id)])];
      narration.push(...parts);
      heading.append(element('h3', name),
        narrationSpeaker('summary-' + group[0].kind + '-' + group[0].group, parts, '只听' + name));
      block.append(heading, element('p', group.map(labelFor).join('、')));
    }
    header.append(narrationSpeaker('summary-' + items[0].kind, narration, '听全部 · ' + title));
    return block;
  }

  for (const section of lesson.sections) {
    const block = element('section', '', 'a1-block');
    const header = element('header', '', 'a1-block-heading');
    header.append(element('h2', section.title));
    block.append(header, ...section.lines.map(line=>element('p', line)));
    const narration = [section.title, ...section.lines];
    if (section.id === 'intro') {
      const examples = element('div', '', 'a1-pool');
      const sounds = ['æ','m','s'].map(ipa => soundsBySymbol.get(ipa));
      examples.append(tile(showWord(am),am.id), ...sounds.map(sound => tile(sound.en,sound.id)));
      narration.push(audioItem(am.id), am.zh, ...sounds.map(sound => audioItem(sound.id)));
      block.append(examples);
    } else {
      for (const sound of lesson.sounds.filter(item => item.group + 's' === section.id)) {
        const group = element('article', '', 'a1-sound');
        const line = explain(sound);
        const groupNarration = [audioItem(sound.id), line];
        const controls = element('div', '', 'a1-pool');
        group.append(controls, element('p', line));
        const cards = element('div', '', 'a1-pool');
        const letters = [...(lettersBySound.get(sound.ipa) || '')].map(letter=>lesson.letters.find(item=>item.en===letter));
        for (const letter of letters) {
          if (placedLetters.has(letter.id)) continue;
          placedLetters.add(letter.id);
          cards.append(tile(letter.en + ' ' + letter.lower, letter.id));
          groupNarration.push(audioItem(letter.id));
        }
        const examples = lesson.words.filter(word=>word.theme ? word.firstSound===sound.id : word.phonemes.includes(sound.id));
        const example = words.get(sound.example);
        if (example && !examples.includes(example)) examples.unshift(example);
        const wordCards = [];
        if (sound.ipa === 'j') {
          const my = words.get('my');
          wordCards.push([showWord(my), my.id, my.zh]);
        }
        if (!example) wordCards.push([sound.example + '（' + sound.exampleZh + '）', sound.id + '-example', sound.exampleZh]);
        for (const word of examples) {
          const id = word.en === 'a' && sound.ipa === 'ə' ? 'weak-a' :
            word.en === 'a' && sound.ipa === 'eɪ' ? 'strong-a' : word.id;
          wordCards.push([showWord(word), id, word.zh]);
        }
        groupNarration.push(...wordCards.flatMap(([, id, meaning]) => [audioItem(id), meaning]));
        controls.append(tile(sound.en, sound.id),
          narrationSpeaker(sound.id, groupNarration, '朗读 ' + sound.en + ' 整组'));
        cards.append(...wordCards.map(([label, id]) => tile(label, id)));
        narration.push(...groupNarration);
        group.append(cards);
        block.append(group);
      }
    }
    header.append(narrationSpeaker(section.id, narration, '朗读' + section.title + '整块'));
    sections.append(block);
    if (section.id === 'vowels') {
      sections.append(listeningSummary('听元音字母和辅音字母的区别', lesson.letters, item => item.en));
    }
  }
  const questions = [
    {id:'letters', title:'请选择元音字母', items:lesson.letters},
    {id:'sounds', title:'请选择元音音素', items:lesson.sounds},
    {id:'words', title:'请选择以元音音素开头的单词', items:lesson.words}
  ];
  const quiz = element('section', '', 'a1-block');
  quiz.id = 'a1-assessment';
  quiz.hidden = true;
  const key = lesson.id + ':classification';
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch {}
  // The old save stored IDs only. Use the V64.82 assessment to verify those answers.
  const previousQuestions = {
    letters: { title: "请选择元音字母", items: {
      "letter-a": ["letter","A","eɪ","vowel"],
      "letter-b": ["letter","B","biː","consonant"],
      "letter-c": ["letter","C","siː","consonant"],
      "letter-d": ["letter","D","diː","consonant"],
      "letter-e": ["letter","E","iː","vowel"],
      "letter-f": ["letter","F","ef","consonant"],
      "letter-g": ["letter","G","dʒiː","consonant"],
      "letter-h": ["letter","H","eɪtʃ","consonant"],
      "letter-i": ["letter","I","aɪ","vowel"],
      "letter-j": ["letter","J","dʒeɪ","consonant"],
      "letter-k": ["letter","K","keɪ","consonant"],
      "letter-l": ["letter","L","el","consonant"],
      "letter-m": ["letter","M","em","consonant"],
      "letter-n": ["letter","N","en","consonant"],
      "letter-o": ["letter","O","əʊ","vowel"],
      "letter-p": ["letter","P","piː","consonant"],
      "letter-q": ["letter","Q","kjuː","consonant"],
      "letter-r": ["letter","R","ɑː","consonant"],
      "letter-s": ["letter","S","es","consonant"],
      "letter-t": ["letter","T","tiː","consonant"],
      "letter-u": ["letter","U","juː","vowel"],
      "letter-v": ["letter","V","viː","consonant"],
      "letter-w": ["letter","W","ˈdʌbəl.juː","consonant"],
      "letter-x": ["letter","X","eks","consonant"],
      "letter-y": ["letter","Y","waɪ","consonant"],
      "letter-z": ["letter","Z","zed","consonant"]
    } },
    sounds: { title: "请选择元音音素", items: {
      "sound-1": ["sound","/iː/","iː","vowel"],
      "sound-2": ["sound","/ɪ/","ɪ","vowel"],
      "sound-3": ["sound","/e/","e","vowel"],
      "sound-4": ["sound","/æ/","æ","vowel"],
      "sound-5": ["sound","/ɑː/","ɑː","vowel"],
      "sound-6": ["sound","/ɒ/","ɒ","vowel"],
      "sound-7": ["sound","/ɔː/","ɔː","vowel"],
      "sound-8": ["sound","/ʊ/","ʊ","vowel"],
      "sound-9": ["sound","/uː/","uː","vowel"],
      "sound-10": ["sound","/ʌ/","ʌ","vowel"],
      "sound-11": ["sound","/ɜː/","ɜː","vowel"],
      "sound-12": ["sound","/ə/","ə","vowel"],
      "sound-13": ["sound","/eɪ/","eɪ","vowel"],
      "sound-14": ["sound","/aɪ/","aɪ","vowel"],
      "sound-15": ["sound","/ɔɪ/","ɔɪ","vowel"],
      "sound-16": ["sound","/əʊ/","əʊ","vowel"],
      "sound-17": ["sound","/aʊ/","aʊ","vowel"],
      "sound-18": ["sound","/ɪə/","ɪə","vowel"],
      "sound-19": ["sound","/eə/","eə","vowel"],
      "sound-20": ["sound","/ʊə/","ʊə","vowel"],
      "sound-21": ["sound","/p/","p","consonant"],
      "sound-22": ["sound","/b/","b","consonant"],
      "sound-23": ["sound","/t/","t","consonant"],
      "sound-24": ["sound","/d/","d","consonant"],
      "sound-25": ["sound","/k/","k","consonant"],
      "sound-26": ["sound","/ɡ/","ɡ","consonant"],
      "sound-27": ["sound","/f/","f","consonant"],
      "sound-28": ["sound","/v/","v","consonant"],
      "sound-29": ["sound","/θ/","θ","consonant"],
      "sound-30": ["sound","/ð/","ð","consonant"],
      "sound-31": ["sound","/s/","s","consonant"],
      "sound-32": ["sound","/z/","z","consonant"],
      "sound-33": ["sound","/ʃ/","ʃ","consonant"],
      "sound-34": ["sound","/ʒ/","ʒ","consonant"],
      "sound-35": ["sound","/h/","h","consonant"],
      "sound-36": ["sound","/tʃ/","tʃ","consonant"],
      "sound-37": ["sound","/dʒ/","dʒ","consonant"],
      "sound-38": ["sound","/m/","m","consonant"],
      "sound-39": ["sound","/n/","n","consonant"],
      "sound-40": ["sound","/ŋ/","ŋ","consonant"],
      "sound-41": ["sound","/l/","l","consonant"],
      "sound-42": ["sound","/r/","r","consonant"],
      "sound-43": ["sound","/j/","j","consonant"],
      "sound-44": ["sound","/w/","w","consonant"]
    } },
    words: { title: "请选择以元音音素开头的单词", items: {
      "word-1": ["word","a","ə; eɪ","vowel"],
      "word-2": ["word","I","aɪ","vowel"],
      "word-3": ["word","am","æm; əm","vowel"],
      "word-4": ["word","an","æn; ən","vowel"],
      "word-5": ["word","as","æz; əz","vowel"],
      "word-6": ["word","at","æt; ət","vowel"],
      "word-7": ["word","be","biː","consonant"],
      "word-8": ["word","by","baɪ","consonant"],
      "word-9": ["word","do","duː; də","consonant"],
      "word-10": ["word","go","ɡəʊ","consonant"],
      "word-11": ["word","he","hiː","consonant"],
      "word-12": ["word","if","ɪf","vowel"],
      "word-13": ["word","in","ɪn","vowel"],
      "word-14": ["word","is","ɪz; əz","vowel"],
      "word-15": ["word","it","ɪt","vowel"],
      "word-16": ["word","me","miː","consonant"],
      "word-17": ["word","my","maɪ","consonant"],
      "word-18": ["word","no","nəʊ","consonant"],
      "word-19": ["word","of","ɒv; əv","vowel"],
      "word-20": ["word","OK","əʊˈkeɪ","vowel"],
      "word-21": ["word","on","ɒn","vowel"],
      "word-22": ["word","or","ɔː; ə","vowel"],
      "word-23": ["word","ox","ɒks","vowel"],
      "word-24": ["word","so","səʊ","consonant"],
      "word-25": ["word","to","tuː; tə","consonant"],
      "word-26": ["word","up","ʌp","vowel"],
      "word-27": ["word","us","ʌs; əs","vowel"],
      "word-28": ["word","we","wiː","consonant"],
      "word-29": ["word","ad","æd","vowel"],
      "word-30": ["word","ah","ɑː","vowel"],
      "word-31": ["word","hi","haɪ","consonant"],
      "word-32": ["word","oh","əʊ","vowel"],
      "word-33": ["word","ex","eks","vowel"],
      "word-34": ["word","re","reɪ; riː","consonant"],
      "word-35": ["word","ta","tɑː","consonant"],
      "word-36": ["word","aw","ɔː","vowel"],
      "word-37": ["word","ax","æks","vowel"],
      "word-38": ["word","eh","eɪ","vowel"],
      "word-39": ["word","er","ɜː","vowel"],
      "word-40": ["word","ew","iːw","vowel"],
      "word-41": ["word","ha","hɑː","consonant"],
      "word-42": ["word","hm","m̩","consonant"],
      "word-43": ["word","ho","həʊ","consonant"],
      "word-44": ["word","ma","mɑː","consonant"],
      "word-45": ["word","mm","m̩","consonant"],
      "word-46": ["word","oi","ɔɪ","vowel"],
      "word-47": ["word","ow","aʊ","vowel"],
      "word-48": ["word","oy","ɔɪ","vowel"],
      "word-49": ["word","pa","pɑː","consonant"],
      "word-50": ["word","sh","ʃ","consonant"],
      "word-51": ["word","uh","ʌ","vowel"],
      "word-52": ["word","um","ʌm","vowel"],
      "word-53": ["word","ya","jə","consonant"],
      "word-54": ["word","yo","jəʊ","consonant"],
      "a1-match-part-vowel": ["word","vowel","vəʊəl","consonant"],
      "a1-match-part-consonant": ["word","consonant","kɒnsənənt","consonant"],
      "a1-match-part-sound": ["word","sound","saʊnd","consonant"],
      "a1-match-part-letter": ["word","letter","letə","consonant"],
      "a1-match-part-first": ["word","first","fɜːst","consonant"],
      "a1-theme-word": ["word","word","wɜːd","consonant"],
      "a1-theme-question": ["word","question","kwestʃən","consonant"],
      "a1-theme-answer": ["word","answer","ɑːnsə","vowel"],
      "a1-theme-all": ["word","all","ɔːl","vowel"],
      "a1-theme-and": ["word","and","ænd","vowel"],
      "a1-theme-can": ["word","can","kæn","consonant"],
      "a1-theme-for": ["word","for","fɔː","consonant"],
      "a1-theme-letters": ["word","letters","letəz","consonant"],
      "a1-theme-one": ["word","one","wʌn","consonant"],
      "a1-theme-put": ["word","put","pʊt","consonant"],
      "a1-theme-say": ["word","say","seɪ","consonant"],
      "a1-theme-set": ["word","set","set","consonant"],
      "a1-theme-sounds": ["word","sounds","saʊndz","consonant"],
      "a1-theme-ten": ["word","ten","ten","consonant"],
      "a1-theme-the": ["word","the","ðiː","consonant"],
      "a1-theme-too": ["word","too","tuː","consonant"],
      "a1-theme-use": ["word","use","juːz","consonant"],
      "a1-theme-words": ["word","words","wɜːdz","consonant"],
      "a1-theme-yes": ["word","yes","jes","consonant"],
      "a1-theme-you": ["word","you","juː","consonant"]
    } },
  };
  const quizStatus = element('span','','a1-assessment-status');
  quizStatus.setAttribute('role','status');
  const quizButton = button('课堂考核',startQuiz);
  const signature = (question,item) => JSON.stringify([question.title,item.kind,item.en,item.ipa,item.group]);
  const current = new Map(questions.map(question=>[question.id,
    new Map(question.items.map(item=>[item.id,signature(question,item)]))]));
  function previousSignature(section,id) {
    if (Object.hasOwn(saved,'verifiedQuestions')) return saved.verifiedQuestions?.[section]?.[id];
    const snapshot = previousQuestions[section];
    const item = snapshot?.items[id];
    return item && JSON.stringify([snapshot.title,...item]);
  }
  function verifiedAnswers() {
    return new Map(questions.map(({id})=>[id,new Set(
      (Array.isArray(saved[id]) ? saved[id] : []).filter(itemId=>{
        const expected = current.get(id).get(itemId);
        return expected !== undefined && expected === previousSignature(id,itemId);
      })
    )]));
  }
  let answers = verifiedAnswers();
  const answersFor = id => answers.get(id);
  function remainingQuestion() {
    return questions.findIndex(({id,items})=>answersFor(id).size !== items.length);
  }
  function updateQuizStatus() {
    const remaining = questions.reduce((count,{id,items})=>count+items.length-answersFor(id).size,0);
    const started = questions.some(({id})=>answersFor(id).size > 0);
    quizStatus.hidden = remaining > 0 && !started && !questions.some(({id})=>Array.isArray(saved[id])&&saved[id].length);
    quizStatus.classList.toggle('a1-assessment-complete',!remaining);
    quizStatus.textContent = remaining ? '还有 '+remaining+' 题待补答' : '✓ 已完成';
    quizButton.textContent = remaining && !quizStatus.hidden ? '继续考核' : '课堂考核';
  }
  function save() {
    saved.verifiedQuestions = Object.fromEntries(questions.map(({id})=>[id,
      Object.fromEntries([...answersFor(id)].map(itemId=>[itemId,current.get(id).get(itemId)]))
    ]));
    for (const {id} of questions) saved[id] = [...answersFor(id)];
    updateQuizStatus();
    try { localStorage.setItem(key,JSON.stringify(saved)); } catch {}
  }

  function shuffle(items) {
    const result = items.slice();
    for (let n = result.length - 1; n > 0; n--) {
      const j = Math.floor(Math.random() * (n + 1));
      [result[n],result[j]] = [result[j],result[n]];
    }
    return result;
  }
  let quizTimer;
  function showQuiz(index) {
    clearTimeout(quizTimer);
    stop();
    quiz.hidden = false;
    const question = questions[index];
    const isWordQuiz = question.id === 'words';
    quiz.classList.toggle('a1-word-assessment', isWordQuiz);
    const pool = element('div', '', isWordQuiz ? 'a1-pool a1-word-pool' : 'a1-pool');
    if (isWordQuiz) {
      pool.tabIndex = 0;
      pool.setAttribute('role', 'region');
      pool.setAttribute('aria-label', '待分类的单词');
    }
    const feedback = element('p');
    feedback.setAttribute('role','status');
    const classified = answersFor(question.id);
    const groups = element('div', '', 'a1-classification');
    const buckets = new Map();
    let selection, selectedButton;
    let completed = false;
    function advance() {
      if (index < questions.length - 1) showQuiz(index + 1);
      else quiz.replaceChildren(element('h2','第 1 课考核完成'),
        button('重新练习',()=>{saved={};answers=new Map(questions.map(({id})=>[id,new Set()]));save();showQuiz(0);}));
    }
    function choose(group) {
      if (completed) return;
      if (!selection) { feedback.textContent = '请先点下面的一张卡片。'; return; }
      if (selection.group !== group) { feedback.dataset.state='wrong'; feedback.textContent = '再听一遍，试试另一个分类。'; return; }
      const label = selection.kind === 'word' ? showWord(selection) : selection.en;
      buckets.get(group).append(tile(label,selection.id));
      classified.add(selection.id);
      save();
      if(selection.kind==='word')window.WMLearningStats?.recordWord('classroom',selection.en);
      selectedButton.remove();
      selection = selectedButton = null;
      feedback.textContent = '✓ Correct! · ' + classified.size + ' / ' + question.items.length;
      feedback.dataset.state = 'correct';
      void window.WMStudySound?.ding();
      if (classified.size === question.items.length) {
        completed = true;
        quizTimer = setTimeout(advance,850);
      }
    }
    for (const [group, label] of Object.entries(lesson.labels[question.items[0].kind])) {
      const frame = element('div', '', 'a1-category');
      const list = element('div', '', 'a1-pool');
      buckets.set(group, list);
      frame.append(button(label,()=>choose(group)),list);
      groups.append(frame);
    }
    for (const item of shuffle(question.items)) {
      const label = item.kind === 'word' ? showWord(item) : item.en;
      if (classified.has(item.id)) {
        buckets.get(item.group).append(tile(label,item.id));
        continue;
      }
      const card = button(label,()=>{
        if (completed) return;
        selectedButton?.setAttribute('aria-pressed','false');
        selection = item;
        selectedButton = card;
        card.setAttribute('aria-pressed','true');
        void play([item.id]);
      },'a1-tile');
      card.setAttribute('aria-pressed','false');
      pool.append(card);
    }
    quiz.replaceChildren(element('h2','课堂考核 ' + (index + 1) + ' / 3'),
      element('p',question.title),element('p',index===0 ?
        '先听名字，认出字母，再选它的类别。Y 在字母分类里放入辅音字母框，它在不同单词里可以表示不同的音。' :
        index===1 ? '先听单音，再选元音音素或辅音音素。' : '先听整个单词，再判断首音素是元音音素还是辅音音素。'),
      groups, pool, feedback);
    feedback.className='a1-ability-status';
    if (classified.size === question.items.length) advance();
  }
  function startQuiz() {
    const next = remainingQuestion();
    showQuiz(next === -1 ? 2 : next);
    quiz.scrollIntoView({block:'start'});
  }
  const closing = element('section', '', 'a1-block');
  const closingTitle = '课末知识点｜元音字母与首音素';
  const closingLines = [
    '元音字母是写出来的字母，元音音素是读出来的声音。一个单词以元音字母开头，首音素也可能是辅音音素。',
    'an umbrella（一把伞）和 a university（一所大学）都以元音字母 u 开头。',
    'umbrella 的首音素是元音音素 /ʌ/，所以说 an umbrella。',
    'university 的首音素是辅音音素 /j/，和 yes 的首音一样，所以说 a university。',
    '选 a 或 an 时，听紧接着的词的首音素。元音音素开头用 an，辅音音素开头用 a。'
  ];
  const closingHeading = element('header', '', 'a1-block-heading');
  closingHeading.append(element('h2', closingTitle),
    narrationSpeaker('initial-sound-summary', [closingTitle, ...closingLines], '朗读课末知识点'));
  closing.append(closingHeading, ...closingLines.map(line => element('p', line)));
  sections.append(closing, listeningSummary('词汇汇总｜听单词首音', lesson.words, showWord));

  const quizActions = element('div','','a1-assessment-actions');
  quizActions.append(quizButton,quizStatus);
  updateQuizStatus();
  root.append(element('p','幼儿园 A1 · ' + lesson.code,'a1-kicker'),
    element('h1',lesson.titleZh),element('p','认识 44 个英语音素'),status,sections,quizActions,quiz);
  if (location.hash === '#a1-assessment') startQuiz();
})();
