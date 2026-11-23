(() => {
  'use strict';

  function mount(root) {
    const lesson = WMA1Lesson2;
    const heading = WMClassroomCatalog.lessons.find(item=>item.number===lesson.number);
    const {groups,onsets,guidance,comparisons}=WMA1Lesson2Onsets;
    const sounds=new Map(WMA1Lesson.sounds.map(item=>[item.ipa,item]));
    const words=new Map(lesson.words.map(item=>[item.en,item]));
    const audio = WMA1Audio;
    const chinese=text=>({text,locale:'zh-CN'});
    const english=text=>({text,locale:'en-GB'});
    let active=null, request=0;

    function node(tag,text,className) {
      const el=document.createElement(tag);
      if(text)el.textContent=text;
      if(className)el.className=className;
      return el;
    }
    const status=node('p','','a1-status');
    status.setAttribute('role','status');

    function control(label,ids,{text='',className='a1-speaker'}={}){
      const button=node('button',text,className);
      button.type='button';
      button.dataset.label=label;
      button.dataset.icon=String(!text);
      paint(button,false);
      button.onclick=async()=>{
        const toggling=active===button,current=++request;
        audio.stop();
        paint(active,false);
        active=null;
        status.textContent='';
        if(toggling)return;
        active=button;
        paint(button,true);
        const played=await audio.play(...ids);
        if(current!==request)return;
        paint(button,false);
        active=null;
        if(!played)status.textContent='点读未完成，请再试一次。';
      };
      return button;
    }
    function paint(button,playing){
      if(!button)return;
      const label=playing?'停止朗读':button.dataset.label;
      button.setAttribute('aria-pressed',String(playing));
      if(button.dataset.icon==='true')WMStudyIcons.set(button,playing?'stop':'speaker',label);
      else button.setAttribute('aria-label',label);
    }
    function block(title,playButton){
      const section=node('section','','a1-block');
      const header=node('div','','a1-block-heading');
      header.append(node('h2',title));
      if(playButton)header.append(playButton);
      section.append(header);
      return section;
    }
    function narration(id,parts){
      audio.registerNarration(id,parts);
      return 'section-'+id;
    }
    const intro=[
      '先听完整的单词，找出最先听到的音素。下面先听 old 和 one，它们都以字母 O 开头。',
      'old 开头是元音音素。one 开头是辅音音素，听起来像 we 的第一个音。',
      '现在先听单独的首音，再回听整词。判断时只看最先发出来的声音。'
    ];
    const introId=narration('2yy2-intro',[
      chinese(intro[0]),{id:words.get('old').id},{id:words.get('one').id},
      chinese(intro[1]),{id:sounds.get('əʊ').id},{id:sounds.get('w').id},chinese(intro[2]),
      {id:words.get('old').id},{id:words.get('one').id}
    ]);
    const introBlock=block('先听首音：old 和 one',control('朗读首音示范',[introId]));
    introBlock.append(...intro.map(text=>node('p',text)));
    function example(label,ipa,id){
      const row=node('span','','a1-example-sound');
      row.append(control('听 '+label,[id],{text:label,className:'a1-tile'}),
        control('听首音 /'+ipa+'/', [sounds.get(ipa).id],{text:'/'+ipa+'/',className:'a1-ipa-touch'}));
      return row;
    }
    introBlock.append(example('old','əʊ',words.get('old').id),example('one','w',words.get('one').id));

    const compare=block('同一个首字母，首音会怎么变');
    const letters=new Map();
    for(const item of words.values()){
      const letter=item.en[0],ipa=onsets.get(item.en);
      if(!letters.has(letter))letters.set(letter,new Map());
      const bySound=letters.get(letter);
      if(!bySound.has(ipa))bySound.set(ipa,[]);
      bySound.get(ipa).push(item);
    }
    const compareIds=[];
    const orderedLetters=['o', ...[...letters.keys()].filter(letter=>letter!=='o').sort()];
    for(const letter of orderedLetters){
      const bySound=letters.get(letter);
      if(bySound.size<2)continue;
      const explanation=comparisons[letter];
      const summary=[];
      const detail=node('details','','a1-comparison');
      detail.open=letter==='o';
      detail.append(node('summary',letter.toUpperCase()+' · '+bySound.size+' 种首音'),node('p',explanation));
      for(const [ipa,items] of bySound){
        const sound=sounds.get(ipa);
        const row=node('div','','a1-onset-example-row');
        const name=sound.group==='vowel'?'元音':'辅音';
        row.append(control('听 /'+ipa+'/',[sound.id],{text:'/'+ipa+'/',className:'a1-ipa-touch'}),
          node('small',name+'音素'));
        for(const item of items)row.append(control('听 '+item.en,[item.id],{text:item.en,className:'a1-compare-word'}));
        detail.append(row);
        summary.push({id:sound.id},chinese(name+'音素'),...items.map(item=>({id:item.id})));
      }
      const id=narration('2yy2-letter-'+letter,[english(letter.toUpperCase()),chinese(explanation),...summary]);
      compare.append(detail);
      compareIds.push(id);
    }
    const up=WMA1Lesson.words.find(item=>item.en==='up'),use=words.get('use');
    if(up&&use){
      const detail=node('details','','a1-comparison');
      const description='加一个跨课例子：use 和 up 都以字母 U 开头。use 的首音是 /j/，属于辅音。第一课的 up 先听到 /ʌ/，属于元音。';
      const id=narration('2yy2-letter-u',[chinese(description),{id:use.id},{id:sounds.get('j').id},{id:up.id},{id:sounds.get('ʌ').id}]);
      detail.append(node('summary','U · 和第一课对比'),node('p',description),
        example('use','j',use.id),example('up','ʌ',up.id));
      compare.append(detail);
      compareIds.push(id);
    }

    compare.firstChild.append(control('朗读首字母对比',compareIds));
    const categoryIds=[];
    const sections=[];
    for(const [category,label] of Object.entries(lesson.labels)){
      const section=block(label);
      const groupIds=[];
      let count=0;
      for(const [ipa,spellings] of Object.entries(groups)){
        const sound=sounds.get(ipa);
        if(sound.group!==category)continue;
        const list=spellings.split(' ').map(word=>words.get(word));
        count+=list.length;
        const id=narration('2yy2-onset-'+sound.id,[chinese(guidance[ipa]),{id:sound.id},
          ...list.flatMap(item=>[{id:item.id},chinese(item.zh)])]);
        groupIds.push(id);
        const group=node('section','','a1-onset-group');
        const header=node('div','','a1-onset-heading');
        const symbol=node('h3');
        symbol.append(control('听首音 /'+ipa+'/',[sound.id],{text:'/'+ipa+'/',className:'a1-ipa-touch'}));
        header.append(symbol,control('朗读 /'+ipa+'/ 组',[id]));
        group.append(header,node('p',guidance[ipa]));
        const grid=node('div','','a1-card-grid a1-onset-cards');
        for(const item of list){
          const card=node('div','','a1-item a1-onset-card');
          card.dataset.word=item.en;
          const listen=control('听 '+item.en,[item.id],{text:item.en,className:'a1-word-touch'});
          listen.lang='en';
          listen.append(node('small',item.zh));
          card.append(listen,control('听 '+item.en+' 的首音 /'+ipa+'/',[sound.id],{text:'/'+ipa+'/',className:'a1-ipa-touch'}));
          grid.append(card);
        }
        group.append(grid);
        section.append(group);
      }
      section.firstChild.firstChild.textContent=label+' · '+count+' 词';
      section.firstChild.append(control('朗读'+label,groupIds));
      sections.push(section);
      categoryIds.push(...groupIds);
    }
    const title=node('div','','a1-block-heading');
    title.append(node('h1',heading.titleZh+' · '+lesson.topic),control('朗读整课',[introId,...compareIds,...categoryIds]));
    const practice=node('a','去第二关魔法配对','a1-button');
    practice.href='word-match.html?level=2&from=journey';
    root.append(node('p',heading.code+' · Magic Classroom','a1-kicker'),title,status,introBlock,compare,...sections);
    WMA1Lesson2Quiz.mount(root,{control,stop:()=>{audio.stop();request++;paint(active,false);active=null}});
    root.append(practice);
  }
  window.WMA1Lesson2Classroom={mount};
})();
