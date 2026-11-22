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
      choice('以下哪些是辅音字母？',['M','E','S','A'],[0,2]),
      choice('以下哪些是元音音素？',['/m/','/æ/','/ɑː/','/ʃ/'],[1,2]),
      choice('下列哪个词的首字母是元音字母？',['ah','ha','sh'],[0]),
      choice('/m/ 属于哪一类音素？',['元音音素','辅音音素'],[1]),
      choice('根据原文，老师先请学生说哪个词？',['ha','ah','um'],[1])
    ],[
      ['请写出五个元音字母。','A, E, I, O and U.'],
      ['请用原文中的完整英文句子写出「它是辅音音素」。','It is a consonant sound.'],
      ['请用原文中的完整英文句子写出「它是元音音素」。','It is a vowel sound.'],
      ['请用原文中的完整英文句子写出「对我说 ah」。','Say “ah” to me.'],
      ['请用原文中的完整英文句子写出「说 hm、mm 和 sh」。','Say “hm”, “mm” and “sh”.']
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
      choice('以下哪些是辅音字母？',['E','M','B','A'],[1,2]),
      choice('以下哪些是元音字母？',['E','M','A','P'],[0,2]),
      choice('以下哪些词的首字母是元音字母？',['am','at','my','be'],[0,1]),
      choice('以下哪些词都以 M 开头？',['me、my、ma','am、an、at','ad、aw、ax'],[0]),
      choice('we 的首字母是什么？',['T','W','P'],[1])
    ],[
      ['请写出五个元音字母。','A, E, I, O and U.'],
      ['请用原文中的完整英文句子写出「M 是辅音字母」。','M is a consonant letter.'],
      ['请用原文中的完整英文句子说明 am、an 和 at 的首字母是什么。','A is the first letter in “am”, “an” and “at”.'],
      ['请用原文中的完整英文句子说明 me、my 和 ma 的首字母是什么。','M is the first letter in “me”, “my” and “ma”.'],
      ['请用原文中的完整英文句子说明 ad、aw 和 ax 的首字母是什么。','A is the first letter in “ad”, “aw” and “ax”.']
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
      choice('以下哪些是辅音字母？',['G','O','Y','I'],[0,2]),
      choice('以下哪些是元音音素？',['/ɒ/','/ɪ/','/j/','/ɡ/'],[0,1]),
      choice('以下哪些词的首字母是元音字母？',['ox','if','go','yo'],[0,1]),
      choice('ox 的首音是什么？',['/ɡ/','/ɪ/','/ɒ/'],[2]),
      choice('哪两个单词都以 /j/ 开头？',['yo、ya','if、it','ox、on'],[0])
    ],[
      ['请写出五个元音字母。','A, E, I, O and U.'],
      ['请用原文中的完整英文句子写出「它是一个单词」。','It is a word.'],
      ['请用原文中的完整英文句子说明 ox 的首音属于哪类音素。','It is a vowel sound.'],
      ['请用原文中的完整英文句子说明 yo 的首音属于哪类音素。','It is a consonant sound.'],
      ['请用原文中的完整英文句子写出「它是这些单词的首音」。','It is the first sound in “if” and “in”.']
    ])
  ];
})();
