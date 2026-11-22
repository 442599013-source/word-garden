/* Lesson 1 content shared by Magic Classroom, Magic Match and Ability. */
(() => {
  'use strict';
  const lessonId = 'goldy-a1-letter-sounds-1';
  const courseTypes = {
    pronunciation:{code:'YY', title:'语音'},
    vocabulary:{code:'CH', title:'词汇'},
    grammar:{code:'YF', title:'语法'}
  };
  function chineseNumber(number) {
    const digits = '零一二三四五六七八九';
    if (number < 10) return digits[number];
    for (const [base, unit] of [[10000,'万'],[1000,'千'],[100,'百'],[10,'十']]) {
      if (number < base) continue;
      const leading = Math.floor(number / base), rest = number % base;
      const prefix = base === 10 && leading === 1 ? '' : chineseNumber(leading);
      return prefix + unit + (rest ? (rest < base / 10 ? '零' : '') + chineseNumber(rest) : '');
    }
  }
  function numberLessons(catalog) {
    const counts = new Map();
    return catalog.map((lesson, index) => {
      const type = courseTypes[lesson.type];
      const categoryNumber = (counts.get(lesson.type) || 0) + 1;
      counts.set(lesson.type, categoryNumber);
      const number = index + 1;
      return {...lesson, number, categoryNumber, code:number + type.code + categoryNumber,
        titleZh:'第' + chineseNumber(number) + '课：' + type.title + '第' + chineseNumber(categoryNumber) + '节'};
    });
  }
  const catalog = numberLessons([{id:lessonId, type:'pronunciation'}]);
  window.WMClassroomCatalog = {lessons:catalog, numberLessons};
  const letterNames = ('eɪ biː siː diː iː ef dʒiː eɪtʃ aɪ dʒeɪ keɪ el em en əʊ piː kjuː ɑː es tiː juː viː ˈdʌbəl.juː eks waɪ zed').split(' ');
  const letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((en, i) => ({
    id: 'letter-' + en.toLowerCase(), en, lower: en.toLowerCase(), ipa: letterNames[i],
    kind: 'letter', group: 'AEIOU'.includes(en) ? 'vowel' : 'consonant'
  }));
  const soundRows = `iː|e, ee|me|miː|我（宾格）
ɪ|i|in|ɪn|在……里面
e|e|egg|eɡ|鸡蛋
æ|a|am|æm|是（与 I 搭配）
ɑː|ar|car|kɑː|汽车
ɒ|o|on|ɒn|在……上
ɔː|or|or|ɔː|或者
ʊ|u|put|pʊt|放
uː|oo|too|tuː|也
ʌ|u|up|ʌp|向上
ɜː|ir|bird|bɜːd|鸟
ə|a|a|ə|一个（弱读）
eɪ|a|a|eɪ|一个（强读）
aɪ|I|I|aɪ|我
ɔɪ|oi|oi|ɔɪ|喂！
əʊ|o|go|ɡəʊ|去
aʊ|ow|ow|aʊ|哎哟！
ɪə|ear|ear|ɪə|耳朵
eə|air|air|eə|空气
ʊə|ure|cure|kjʊə|治愈
p|p|pa|pɑː|爸爸（口语）
b|b|be|biː|是（原形）
t|t|to|tuː|到；朝向
d|d|do|duː|做
k|k, c|key|kiː|钥匙
ɡ|g|go|ɡəʊ|去
f|f|if|ɪf|如果
v|v, f|of|ɒv|……的
θ|th|thin|θɪn|薄的
ð|th|the|ðə|这个／那个（定冠词）
s|s|so|səʊ|所以
z|z, s|is|ɪz|是（与 he、she、it 等搭配）
ʃ|sh|sh|ʃ|嘘！
ʒ|s, si|vision|ˈvɪʒən|视觉
h|h|he|hiː|他
tʃ|ch|chin|tʃɪn|下巴
dʒ|j|jam|dʒæm|果酱
m|m|me|miː|我（宾格）
n|n|no|nəʊ|不
ŋ|ng|sing|sɪŋ|唱歌
l|l|leg|leɡ|腿
r|r|red|red|红色的
j|y|yes|jes|是的
w|w|we|wiː|我们`;
  const sounds = soundRows.split('\n').map((row,i) => {
    const [ipa, spelling, example, exampleIpa, exampleZh] = row.split('|');
    return {id:'sound-' + (i + 1), kind:'sound', en:'/' + ipa + '/', ipa, spelling, example, exampleIpa, exampleZh,
      group:i < 20 ? 'vowel' : 'consonant'};
  });
  const wordRows = `a|ə; eɪ|一个（例 a dog）|一个
I|aɪ|我（作主语）|我（主语）
am|æm; əm|是（I ___）|是（与 I 搭配）
an|æn; ən|一个（例 an egg）|一个
as|æz; əz|作为；像|作为
at|æt; ət|在（某个地点）|在（某个地点）
be|biː|是（原形）|是（原形）
by|baɪ|通过；在……旁边|在……旁边
do|duː; də|做|做
go|ɡəʊ|去|去
he|hiː|他（作主语）|他
if|ɪf|如果|如果
in|ɪn|在……里面|在……里面
is|ɪz; əz|是（He ___）|是（与 he 搭配）
it|ɪt|它|它
me|miː|我（作宾语）|我（宾语）
my|maɪ|我的|我的
no|nəʊ|不（否定回答）|不
of|ɒv; əv|……的（例 a cup of tea）|……的
OK|əʊˈkeɪ|好；没问题|好；没问题
on|ɒn|在……上面；开着|在……上面
or|ɔː; ə|或者|或者
ox|ɒks|公牛|公牛
so|səʊ|所以；这样|所以
to|tuː; tə|朝向；到|朝向；到
up|ʌp|向上|向上
us|ʌs; əs|我们（作宾语）|我们（宾语）
we|wiː|我们（作主语）|我们（主语）
ad|æd|广告（口语）|广告
ah|ɑː|啊（表示领会等）|啊（领会）
hi|haɪ|嗨；你好|嗨；你好
oh|əʊ|哦（表示惊讶等）|哦（惊讶）
ex|eks|前任（口语）|前任
re|reɪ; riː|关于（用于书信等）|关于
ta|tɑː|谢谢（英澳口语）|谢谢
aw|ɔː|哎呀（表示喜爱或同情等）|哎呀（喜爱或同情）
ax|æks|斧头（美式拼写；英式 axe）|斧头（美式拼写）
eh|eɪ|啊？（请对方重复等）|啊？（请对方重复）
er|ɜː|呃（说话犹豫）|呃（犹豫）
ew|iːw|咦，真恶心！|真恶心
ha|hɑː|哈！（笑声）|哈（笑声）
hm|m̩|唔（斟酌或疑惑）|唔（斟酌）
ho|həʊ|嚯！（感叹；常见于 ho ho ho）|嚯（感叹）
ma|mɑː|妈妈（口语）|妈妈
mm|m̩|嗯（表示同意、满意等）|嗯（同意）
oi|ɔɪ|喂！（唤人，较随意）|喂（引起注意）
ow|aʊ|哎哟！（疼痛）|哎哟（疼痛）
oy|ɔɪ|哎呀！（懊恼、抱怨）|哎呀（懊恼）
pa|pɑː|爸爸（口语）|爸爸
sh|ʃ|嘘！（示意安静）|嘘
uh|ʌ|呃（停顿或迟疑；常见于美式口语）|呃（迟疑）
um|ʌm|嗯；呃（停顿时）|嗯（停顿）
ya|jə|你（you 的非正式写法）|你（非正式）
yo|jəʊ|嘿！（非正式招呼）|嘿（打招呼）`;
  const words = wordRows.split('\n').map((row,i) => {
    const [en,ipa,zh,match] = row.split('|');
    return {id:'word-' + (i + 1),kind:'word',en,ipa,zh,match,priority:i < 32,
      hint:({a:'___ dog',an:'___ egg',at:'___ home',in:'___ it',am:'I ___ OK.',be:'I want to ___ here.',is:'He ___ in.',er:'首音 /ɜː/',uh:'首音 /ʌ/',um:'以 /m/ 结尾',hm:'表示正在斟酌',mm:'回应对方，表示同意'})[en]};
  });
  const phrasesText = `go on|继续
go up|上去
go in|进去
go by|经过；流逝
do it|做这件事
do so|这样做
be in|在里面；参加
be on|开着；正在播放
be up|起床了
be OK|没问题
in it|在它里面
on it|在它上面；正在处理
to me|对我；给我
to us|给我们
by me|在我旁边；由我
by us|由我们
of us|我们当中的
of it|它的；它的一部分
as it is|照现状；就目前情况
as is|按现状
so far|到目前为止|far
no go|行不通
no way|没门；不可能|way
my ex|我的前任
my ma|我的妈妈（口语）
my pa|我的爸爸（口语）
a go|一次尝试
a do|一场聚会（英式口语）
a no|一个否定回答
an ad|一则广告
an ox|一头公牛
an ex|一位前任
an OK|一次同意或批准`;
  const sentencesText = `I am.|是的，我已经起床了。| |Are you up?
I do.|我愿意。| |Do you want to go?
I go.|我去。| |Who goes first?
We go.|我们去。| |What happens at noon?
We do.|我们会。| |Do you go there often?
He is.|是的，他在里面。| |Is he in?
It is.|是的。| |Is it on?
Do it.|做吧。
Go on.|继续。
Go in.|进去。
Go up.|上去。
I am in.|我参加。
I am up.|我起床了。
I am OK.|我没事。
So am I.|我也一样。| |I am OK.
So do I.|我也一样。| |I go by bus.
So is he.|他也一样。| |I am OK.
He is in.|他在里面。
He is up.|他起床了。
It is on.|它开着。
It is OK.|没关系。
We go in.|我们进去。
We go on.|我们继续。
Is it?|是吗？| |It is on.
Is he?|他在里面吗？| |He is in.
Am I?|我已经起床了吗？| |You are up.
Hi, I am OK.|嗨，我没事。
Oh, no!|哦，不！
Ow!|哎哟！
Ew!|真恶心！
Sh!|嘘！
Oh, hi!|哦，你好！
OK, go on.|好的，继续。
I am on it.|我正在处理。
Are we?|我们是吗？|are|We are early.
No, I am not.|不，我不是。|not|Are you up?
Yes, I am.|是的，我是。|yes|Are you up?
Ah, I see.|啊，我明白了。|see
I am a student.|我是一名学生。|student
I am at home.|我在家。|home
He is a boy.|他是一个男孩。|boy
It is an egg.|这是一个鸡蛋。|egg
I have an ox.|我有一头公牛。|have
We go to school.|我们去学校。|school
Do it now.|现在做。|now
Go to bed.|去睡觉。|bed
I am happy.|我很开心。|happy
It is my bag.|这是我的包。|bag
This is an ad.|这是一则广告。|this
He is in a car.|他在一辆车里。|car
We are OK.|我们没事。|are
Is it for me?|这是给我的吗？|for`;
  function examples(rows,kind) {
    return rows.split('\n').map((row,i) => {
      const [en,zh,extra='',context='']=row.split('|');
      return {id:kind+'-'+(i+1),kind,en,zh,extra:extra.trim(),context};
    });
  }
  const phrases=examples(phrasesText,'phrase'), sentences=examples(sentencesText,'sentence');
  const sections = [
    {id:'intro',title:'先听懂元音音素和辅音音素的区别',lines:[
      '先听 am（是）。慢一点听，开头是 /æ/，结尾是 /m/。这两个声音就是这个词里的两个音素。',
      '试着发 /æ/。嘴巴张开，气流从嘴里顺畅出来，所以它是元音音素。再发 /m/。双唇合上，气流从鼻子出去，嘴里的通道被双唇挡住，所以它是辅音音素。',
      '有的辅音音素会让口腔里的通道变窄。试试 /s/，听气流挤过窄缝的声音。接下来先学二十个元音音素，再学二十四个辅音音素。',
      '单独点一个字母，听到的是它的名字。点整个单词，才能听到字母在这个词里表示的声音。'
    ]},
    {id:'vowels',title:'20 个元音音素',lines:[
      '先听每组顶部的音，再点下面的词，到词里找这个音。试着自己跟读。',
      '前十二个是单元音。后八个是双元音，发音时在同一个音节里从一个声音滑向另一个声音。'
    ]},
    {id:'consonants',title:'24 个辅音音素',lines:[
      '先听每组顶部的音，再听它在单词里的位置。跟读时，留意嘴唇和舌头怎么动。'
    ]}
  ];
  const labels = {
    letter:{vowel:'元音字母',consonant:'辅音字母'},
    sound:{vowel:'元音音素',consonant:'辅音音素'},
    word:{vowel:'以元音音素开头的单词',consonant:'以辅音音素开头的单词'}
  };
  const category = item => labels[item.kind][item.group];
  const vowelStarts = new Set([...sounds.slice(0,20).map(item=>item.ipa[0])]);
  const phonemes = [...sounds].sort((a,b)=>b.ipa.length-a.ipa.length);
  for(const word of words) {
    const strongIpa=word.ipa.split(';')[0];
    word.group=vowelStarts.has(strongIpa[0])?'vowel':'consonant';
    word.phonemes=[];
    for(let offset=0;offset<strongIpa.length;){
      const sound=phonemes.find(item=>strongIpa.startsWith(item.ipa,offset));
      if(sound)word.phonemes.push(sound.id);
      offset+=sound?.ipa.length || 1;
    }
  }
  const vocabulary = [...letters,...sounds,...words];
  const all = [...vocabulary,...phrases,...sentences];
  const match = Object.fromEntries(vocabulary.map(item=>[item.id,{...item,zh:item.match||category(item)}]));
  window.WMA1Lesson = {...catalog[0], group:'kindergarten-1', letters,sounds,words,phrases,sentences,sections,all,match,category,labels};
})();
