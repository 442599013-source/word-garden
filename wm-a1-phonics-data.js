(() => {
  'use strict';
  // The course keeps the 44 IPA symbols and sound clips introduced in lesson 1.
  // A hyphen inside a spelling denotes a split digraph.
  const spellings = {
    'iː':'e ee ea ie e-e y ey i ei i-e ae oe ay eo eigh agh j ille ii',
    'ɪ':'i y a-e e ia ie ee u o ea ei ey ui',
    'e':'e ea a ai ae eo ei ie u ay ey a-e e-e',
    'æ':'a ai i ah al ei e ia',
    'ɑː':'ar a al ah arr aa er au ear are oi oir oire aar arre arrh ard aho agh eagher',
    'ɒ':'o a au e ou eau i ow oh eo ho',
    'ɔː':'or aw ore a au our ar oor al ough augh oar aur oa aul augha awe ure u ea arr oh oore orps aor ors',
    'ʊ':'oo u oul o ou orce',
    'uː':'oo u-e ew u ou ue ui o oe eu ooh uo oui ough wo oup oeu iou',
    'ʌ':'u o ou oo a oe wo',
    'ɜː':'er ir ur ear or urr err irr eur our eu ere oe olo yr yrrh oeu eure',
    'ə':'a a-e ae ah ai ar au e ei er ere i i-e ie ier ir o o-e oar oi or ou ough our r re u u-e ui ur ure y yr',
    'eɪ':'a-e ai ay a eigh ei ey e ae ea e-e au ao ie aigh er ah et',
    'aɪ':'i-e i y ie igh y-e ye ai ei ay ae ey a oy eigh ir ia eye aye ailles is',
    'ɔɪ':'oy oi eu awy ue o uoy',
    'əʊ':'o-e oa o oe ow oh au eau ough oo ew ou eo ol ault owe aud eou aoh ogh ock',
    'aʊ':'ou ow ough au ao eo owe aow aos',
    'ɪə':'ear eer ier ere er ir eir eare ire yr',
    'eə':'are air ere ear ar aer aire eir er erre err ayer eah ayor aar ehr',
    'ʊə':'ure our oor',
    'p':'p pp pe ppe bp pi gh',
    'b':'b bb bu pb bh be bre',
    't':'t tt ed d tte th te pt bt zz dt ct cht',
    'd':'d dd ed de dh bd',
    'k':'c k ck q ch que qu cc kh kk cch ke cq cqu g sc kg cque lk',
    'ɡ':'g gg gu gue gh x ge ckgu q',
    'f':'f ff ph gh v ffe wh fe ft pph ugh au lf',
    'v':'v ve vv w f ph vre',
    'θ':'th',
    'ð':'th the',
    's':'s ss c ce se sc st ps z sce sse zz sw sth x tz sa tsw ces zs',
    'z':'z zz s se ze x ss si ssi sz',
    'ʃ':'sh ti ci si ssi ch sch che ce s c t sci ss shi sc chi chsi',
    'ʒ':'si ge s g j z ti zh su',
    'h':'h wh j gh kh x',
    'tʃ':'ch tch t c cc tsch ti ci q te cz tzsch tu',
    'dʒ':'j dge g ge gi dg d dj gg di y jj',
    'm':'m mm mb mn me mme gm mbe mp chm lm',
    'n':'n nn kn gn ne nne ng pn nd nh dne mn ln',
    'ŋ':'ng n ngue nd ngh',
    'l':'l ll le lle gl sl sle hl',
    'r':'r rr wr rh rrh rw',
    'j':'y i j ll l',
    'w':'w wh u ou o'
  };
  const rows = WMA1Lesson.sounds.map(sound => ({
    id:sound.id, ipa:sound.en, spellings:spellings[sound.ipa].split(' ')
  }));
  function completeSpellings(row, answer) {
    const entries=String(answer).toLowerCase().trim().split(/[\s,，、;/；]+/).filter(Boolean)
      .map(value=>value.replace(/[.…]+/g,'-').replace(/[‐–—]/g,'-'));
    const unique=new Set(entries);
    return unique.size===row.spellings.length && row.spellings.every(item=>unique.has(item));
  }
  function cardGroups(row) {
    if(row.spellings.join(' / ').length<=22)return [row.spellings];
    const split=Math.ceil(row.spellings.length/2);
    return [row.spellings.slice(0,split),row.spellings.slice(split)];
  }
  window.WMA1Phonics={rows, completeSpellings, cardGroups};
})();
