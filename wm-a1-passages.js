(() => {
  'use strict';

  const choice = (prompt, options, correct) => ({prompt, options, correct});
  const dialogue = (id, title, zh, lines, speaking, reading, writing) =>
    ({id, title, titleZh:zh, lines, speaking, reading, writing,
      en:lines.map(([en])=>en).join('\n'), zh:lines.map(([,zh])=>zh).join('\n'),
      audioSegments:lines.flatMap(([en])=>en.split(/(\/[^/]+\/)/u).map(part=>part.trim()).filter(Boolean))});

  window.WMA1Passages = [
    dialogue('a1-passage-phonemes','Vowel and consonant sounds','认识元音音素和辅音音素',[
      ['Is /m/ a vowel sound?','/m/ 是元音音素吗？'],
      ['No. It is a consonant sound.','不。它是辅音音素。'],
      ['Is /æ/ a consonant sound?','/æ/ 是辅音音素吗？'],
      ['No. It is a vowel sound.','不。它是元音音素。'],
      ['Do I say “ah” or “ha”?','我该说 ah 还是 ha？'],
      ['Say “ah” to me.','对我说 ah。'],
      ['OK. Ah! Is /ɑː/ a vowel sound?','好。啊！/ɑː/ 是元音音素吗？'],
      ['Yes. It is a vowel sound.','对。它是元音音素。'],
      ['Do I go on?','我继续吗？'],
      ['Yes. Say “hm”, “mm” and “sh”.','对。说 hm、mm 和 sh。'],
      ['Hm. Mm. Sh! Can I say “eh”, “er” and “uh”?','唔。嗯。嘘！我能说 eh、er 和 uh 吗？'],
      ['Yes. You can say “um”, too.','可以。你也可以说 um。'],
      ['Do I say A, E, I, O and U?','我要说 A、E、I、O、U 吗？'],
      ['Yes. A, E, I, O and U.','对。A、E、I、O、U。']
    ],[0,2,4,6,8],[
      choice("Is /m/ a vowel sound?", ["No. It is a consonant sound.", "Yes. It is a vowel sound.", "Say “ah” to me."], [0]),
      choice("Vowel sounds", ["/m/", "/æ/", "/ɑː/", "/ʃ/"], [1,2]),
      choice("Do I say “ah” or “ha”?", ["Say “ha” to me.", "Yes. A, E, I, O and U.", "Say “ah” to me."], [2]),
      choice("Is /ɑː/ a vowel sound?", ["Yes. It is a vowel sound.", "No. It is a consonant sound.", "Yes. Say “hm”, “mm” and “sh”."], [0]),
      choice("Do I go on?", ["Yes. You can say “um”, too.", "Yes. Say “hm”, “mm” and “sh”.", "Say “ah” to me."], [1])
    ],[
      ["Vowel letters",'A, E, I, O and U.'],
      ["Is /m/ a vowel sound?",'It is a consonant sound.'],
      ["Is /æ/ a consonant sound?",'It is a vowel sound.'],
      ["Do I say “ah” or “ha”?",'Say “ah” to me.'],
      ["Do I go on?",'Say “hm”, “mm” and “sh”.']
    ]),
    dialogue('a1-passage-letters','Vowel and consonant letters','认识元音字母和辅音字母',[
      ['Hi. Is E a consonant letter?','嗨。E 是辅音字母吗？'],
      ['No. It is a vowel letter.','不。它是元音字母。'],
      ['Is M a vowel letter?','M 是元音字母吗？'],
      ['No. M is a consonant letter.','不。M 是辅音字母。'],
      ['Do “am”, “an” and “at” all use A as the first letter?','am、an 和 at 都以 A 开头吗？'],
      ['A is the first letter in “am”, “an” and “at”.','A 是 am、an 和 at 的首字母。'],
      ['Is M the first letter in “me”, “my” and “ma”?','M 是 me、my 和 ma 的首字母吗？'],
      ['M is the first letter in “me”, “my” and “ma”.','M 是 me、my 和 ma 的首字母。'],
      ['Do “ad”, “aw” and “ax” all use A as the first letter?','ad、aw 和 ax 都以 A 开头吗？'],
      ['Yes. A is the first letter in “ad”, “aw” and “ax”.','对。A 是 ad、aw 和 ax 的首字母。'],
      ['Oh! Do “be”, “by”, “he”, “ho”, “pa” and “re” all use a consonant letter as the first letter?','哦！be、by、he、ho、pa 和 re 都以辅音字母开头吗？'],
      ['Yes. So do “we” and “ta”.','对。we 和 ta 也是。'],
      ['A, E, I, O and U?','A、E、I、O 和 U 吗？'],
      ['Yes. A, E, I, O and U.','对。A、E、I、O 和 U。']
    ],[0,2,4,6,8],[
      choice("Is E a consonant letter?", ["No. M is a consonant letter.", "No. It is a vowel letter.", "Yes. A, E, I, O and U."], [1]),
      choice("Vowel letters", ["E", "M", "A", "P"], [0,2]),
      choice("Do “am”, “an” and “at” all use A as the first letter?", ["A is the first letter in “am”, “an” and “at”.", "M is the first letter in “me”, “my” and “ma”.", "Yes. So do “we” and “ta”."], [0]),
      choice("Do “ad”, “aw” and “ax” all use A as the first letter?", ["M is the first letter in “me”, “my” and “ma”.", "Yes. A is the first letter in “ad”, “aw” and “ax”.", "Yes. A, E, I, O and U."], [1]),
      choice("Do “be”, “by”, “he”, “ho”, “pa” and “re” all use a consonant letter as the first letter?", ["No. It is a vowel letter.", "Yes. A is the first letter in “ad”, “aw” and “ax”.", "Yes. So do “we” and “ta”."], [2])
    ],[
      ["Vowel letters",'A, E, I, O and U.'],
      ["Is M a vowel letter?",'M is a consonant letter.'],
      ["Do “am”, “an” and “at” all use A as the first letter?",'A is the first letter in “am”, “an” and “at”.'],
      ["Is M the first letter in “me”, “my” and “ma”?",'M is the first letter in “me”, “my” and “ma”.'],
      ["Do “ad”, “aw” and “ax” all use A as the first letter?",'A is the first letter in “ad”, “aw” and “ax”.']
    ]),
    dialogue('a1-passage-first-sound','First sounds in words','判断单词的首音',[
      ['Is “ox” a word?','ox 是一个单词吗？'],
      ['Yes. It is a word.','是的。它是一个单词。'],
      ['Is /ɒ/ the first sound of “ox”?','/ɒ/ 是 ox 的首音吗？'],
      ['Yes. It is a vowel sound.','是的。它是元音音素。'],
      ['Is /ɪ/ the first sound in “if”, “in”, “is” and “it”?','/ɪ/ 是 if、in、is 和 it 的首音吗？'],
      ['Yes. It is the first sound in “if” and “in”.','对。它是 if 和 in 的首音。'],
      ['Can I put “on”, “or”, “up”, “us”, “ex”, “oi”, “ow”, “oy”, “ew” and “OK” in one set?','我可以把 on、or、up、us、ex、oi、ow、oy、ew 和 OK 放在同一组吗？'],
      ['Yes. For all ten, the first sound is a vowel sound.','可以。这些单词的首音都是元音音素。'],
      ['Yo! Is /j/ the first sound in “yo” and “ya”?','嘿！/j/ 是 yo 和 ya 的首音吗？'],
      ['Yes. It is a consonant sound.','对。它是辅音音素。'],
      ['If I say “go to Ma”, do I say /ɡ/ in “go”?','如果我说 go to Ma，我在 go 里会发 /ɡ/ 吗？'],
      ['Yes. /ɡ/ is the first sound in “go”.','对。/ɡ/ 是 go 的首音。'],
      ['Do I say A, E, I, O and U?','我要说 A、E、I、O、U 吗？'],
      ['Yes. A, E, I, O and U.','对。A、E、I、O、U。']
    ],[0,2,4,6,8],[
      choice("Consonant letters", ["G", "O", "Y", "I"], [0,2]),
      choice("Is /ɒ/ the first sound of “ox”?", ["Yes. It is a consonant sound.", "Yes. It is a vowel sound.", "Yes. It is a word."], [1]),
      choice("Is /ɪ/ the first sound in “if”, “in”, “is” and “it”?", ["Yes. It is a word.", "Yes. /ɡ/ is the first sound in “go”.", "Yes. It is the first sound in “if” and “in”."], [2]),
      choice("Is /j/ the first sound in “yo” and “ya”?", ["Yes. It is a consonant sound.", "Yes. It is a vowel sound.", "Yes. It is a word."], [0]),
      choice("Can I put “on”, “or”, “up”, “us”, “ex”, “oi”, “ow”, “oy”, “ew” and “OK” in one set?", ["Yes. It is a word.", "Yes. For all ten, the first sound is a vowel sound.", "Yes. It is the first sound in “if” and “in”."], [1])
    ],[
      ["Vowel letters",'A, E, I, O and U.'],
      ["Is “ox” a word?",'It is a word.'],
      ["Is /ɒ/ the first sound of “ox”?",'It is a vowel sound.'],
      ["Is /j/ the first sound in “yo” and “ya”?",'It is a consonant sound.'],
      ["Is /ɪ/ the first sound in “if”, “in”, “is” and “it”?",'It is the first sound in “if” and “in”.']
    ])
  ];
})();
