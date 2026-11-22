/* ═══════════════════════════════════════════════════════════════════════════
 *  🎤  SETLIST + LYRICS + TRANSLATIONS  —  THE ONLY FILE YOU NEED TO EDIT
 * ═══════════════════════════════════════════════════════════════════════════
 *
 *  HOW THIS FILE WORKS
 *  -------------------
 *  • `songs` is a list. The ORDER of the list = the performance order shown
 *    on the guest setlist page (song #1 first).
 *  • Each song is one { ... } block. Copy an existing block to add a new song.
 *  • After editing: save → commit/push to GitHub → Vercel/Netlify rebuilds the
 *    site automatically in ~1 minute. (Lyrics live HERE, not in Firebase.
 *    Firebase only stores "which song is live right now".)
 *
 *  FIELDS FOR EACH SONG
 *  --------------------
 *  id              REQUIRED. Short, unique, lowercase, no spaces (use "-").
 *                  It becomes the link: /song/<id>.  Don't change it during the
 *                  show — the "LIVE" status is saved by this id.
 *  title           REQUIRED. Original song title (Kazakh / Korean / etc.).
 *  titleTranslated REQUIRED. English title shown underneath.
 *  artist          Optional. Original artist / composer.
 *  performers      Optional. Who from your band sings it tonight.
 *  sections        REQUIRED. List of stanzas, in the order they are sung.
 *
 *  EACH SECTION
 *  ------------
 *  {
 *    label: 'Verse 1',          // anything: 'Intro', 'Chorus', 'Bridge', 'Outro'…
 *    original: `line 1          // the original lyrics, ONE LINE PER LINE,
 *  line 2`,                     //   wrapped in backticks ` ` (NOT quotes)
 *    translation: `line 1       // the English lines, same number of lines,
 *  line 2`,                     //   in the same order, also in backticks
 *  }
 *
 *  ⚠️  COMMON MISTAKES
 *  • Use BACKTICKS ` (key left of "1") around lyrics — they allow line breaks.
 *  • If a lyric itself contains a backtick, write \` instead.
 *  • Keep the comma after each } between sections and between songs.
 *  • Repeated chorus? Just copy the whole chorus section again where it's sung.
 *  • Leading spaces at the start of lines are trimmed automatically, so you
 *    can indent lyrics however you like.
 *
 *  👉 Search this file for "PASTE HERE" to find the spots to fill in.
 * ═══════════════════════════════════════════════════════════════════════════ */

// Re-used blocks (so the chorus is typed only once). You can do the same for
// your teammates' songs: define a const, then put it in `sections` several times.
const betperde_chorus = {
  label: 'Chorus',
  original: `Сен
Кетуге болдың жылдам
Жасадым оң бір қадам
Қаламадым сенің кеткеніңді
Мен
Болдым сезіміңе алдам
Бірақ сезімін сенің жалған
Көрсеттің тек қана бетпердеңді
`,
  translation: `You
 Were so quick to leave.
 I took one step forward,
 Though I never wanted you to go.
 And I
 I was deceived by your feelings,
 But your love was never true.
 All you showed me
 Was the mask you wore.`,
};

const dop_chorus = {
  label: 'Chorus',
  original: `Мама, мама енді күнде-күнде гүл шығад иә.
Ісің оңнан реттеледі, ісің оңалад(ы)
Далада жүреді балаң добы домалап иә, добы домалап иә, добы домалап
 
Өткен күнде көрдің көреріңді
Енді алда тауыспасын саған берерімді
Өтпелі ғой алда қарап тұрсаң, өкпелі болу да бұл да бір заң
`,
  translation: `Mama, Mama, flowers will bloom every day now, 
 Things will fall into place; life will get better.
 Your child will be outside, rolling a ball along
 Yes, rolling that ball, rolling that ball.
You have already seen what the past had to show you.
 May I never run out of things I wish to give you.
 Everything passes; when you look ahead,
 Even sorrow has its place in the order of things.
`,
};

const daiynbyzBa_chorus = {
  label: 'Chorus',
  original: `Ұялып, бата алмаймын көздеріңе жай қарауға
Сыңғырлы күлкіңнен дүрсіл қағып жүрегім
Көзіме қарап айтшы біз дайынбыз ба жаңа тарауға?
Жарқын жаққа
Үмітпенен қарап тұр едім!
`,
  translation: `I’m too shy to look straight into your eyes.
 Your ringing laughter makes my heart race.
 Look into my eyes and tell me:
 Are we ready to begin a new chapter?
 I was looking ahead
 With hope for brighter days.
`,
};

const daiynbyzBa_bridge = {
  label: 'Bridge',
  original: `Иә, сені таптым
Жаныма жақын
Мендегі жүрек
Саған ғана ғашық
Иә, сені таптым
Мені жоғалтпашы
Әлемім ашық, саған ғана ашық
`,
  translation: `Yes, I've found you,
 Someone close to my soul.
 The heart inside me
 Is in love with you alone.
 Yes, I've found you
 Please don't lose me.
 My world is open,
 Open only to you.`,
};

const unaidyMagan_chorus = {
  label: 'Chorus',
  original: `Ұнайды маған еркелеткен сөздерің
Ұнайды маған жалын атқан көздерің
Ұнайды маған бір өзіңмен сырласқан
Ұнайды, ұнайды, ұнайды маған
`,
  translation: `I like the way you speak so sweetly.
 I like the fire shining in your eyes.
 I like sharing secrets with you alone.
 I like you, I like you, I like you.
`,
};

const shyrailym_chorus = {
  label: 'Chorus',
  original: `Шыр-шыр-шыр-шыр-шыр Шырайлым Шырайлым
Шыр-шыр-шыр-шыр-шыр Шырайлым Шырайлым
Шыр-шыр-шыр-шыр-шыр Шолпандай
Гүлде-де-де-дейсін, де-де-де-дейсін сен
`,
  translation: `Shyr-shyr-shyr-shyr-shyr, my radiant one…
 Shyr-shyr-shyr-shyr-shyr, my radiant one…
 Like a shining star,
 You bloom like a flower, you bloom…
`,
};

const pandoraQoraby_chorus = {
  label: 'Chorus',
  original: `Ей, бала, есіңді жи бала!
Саған қыз керек емес, ми ғана (Oo-ooh)
Ей, бала, өзіңді қинама!
Ашылса қорабы Пандораның обал болады (Ooh)
Пандораның-дораның
Дораның-дораның
Дораның-дораның
Дораның-дораның
Пандораның-дораның
Дораның-дораның
Дораның-дораның
Дораның
`,
  translation: `Hey, boy, get a grip!
 You don't need a girl; you need a brain.
 Hey, boy, don't put yourself through this!
 Opening Pandora's box will only bring trouble.
Pandora, dora,
 Dora, dora…
`,
};

const menSeniSuyemin_chorus = {
  label: 'Chorus',
  original: `Сені көрген кезде уақыт тоқтай
Көрмесем өтеді жай зымырай
Жетер, сезімімді жасыра алмаймын
Жанған жүрек кеудеме сыймай
 
Мен сені сүйемін
Мен сені сүйемін
Мен сені сүйемін
Мен сені сүйемін
`,
  translation: `When I see you, time stands still.
 When I don't, it rushes by.
 Enough—I can no longer hide what I feel.
 My burning heart can barely fit inside my chest.

 I love you.
 I love you.
 I love you.
 I love you.
`,
};

const zhel_chorus = {
  label: 'Chorus',
  original: `көз алдымда
бейнең тұр мүсіндей
(бұл) өңім бе түсім бе?
салқын желдей сеземін өзіңді
көрінбесе дым ізің де
 
па па па па па-ра
`,
  translation: `Your image stands before my eyes
 Like a statue.
 Was it real, or was it a dream?
 I feel you like a cold wind,
 Even when not a trace of you remains.
Pa-pa-pa-pa-pa-ra…
`,
};

const koshBol_bridge = {
      label: 'Bridge',
      original: `Мұңайма кел биле
Қуанышты күйге
Бөленейік бірге
Дәл қазіргі сәтте
`,
      translation: `Don't be sad, come and dance.
 Let yourself be carried by joy.
 Let's share this moment together,
 Right here, right now.
`,
  };

export const songs = [
  /* ───────────────────────── SONG 1 ───────────────────────── */
  {
    id: 'boiyBolgan',
    title: 'Boiy Bolgan',
    titleTranslated: 'Abay',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Бойы бұлғаң
Сөзі жылмаң
Кімді көрсем, мен сонан
Бетті бастым
Қатты састым
Тұра қаштым жалма-жан
`,
        translation: `He sways as he walks,
 His words are smooth and slick.
 Whenever I see someone like that,
 I cover my face in shock
 And quickly turn to run.`,
      },
      {
        label: 'Verse 2',
        original: `Өз ойында
Тұл бойында
Бір міні жоқ пендесіп
Түзде мырзаң
Үйде сырдаң
Сөзі қылжаң еркесіп
`,
        translation: `In his own eyes,
 He has not a single flaw.
 A gentleman out in the world,
 At home, distant and cold,
 Always joking, always charming.`,
      },
      {
        label: 'Verse 3',
        original: `Бас құрасып
Мал сұрасып
Бермегенмен кетісер
Адам аулап
Сыпыра саулап
Байды жаулап жетісер
`,
        translation: `They talk of marriage,
 They talk of wealth;
 If they cannot agree, they part.
 He hunts for people,
 Spreads his words everywhere,
 And wins the favour of the rich.`,
      },
      {
        label: 'Verse 4',
        original: `Сөз қыдыртқан
Жұрт құтыртқан
Антын, арын саудалап
Бұтты-шатты
Үй санатты
Байдан атты алмалап
`,
        translation: `He trades away his promises and honour,
 Makes a mess of everything,
 And swaps one wealthy match for another.
The poor man is still a man,
 But his troubles are great.
`,
      },
      {
        label: 'Verse 5',
        original: `Кедейі — ер
Кеселі зор
Малды байдан сорлы жоқ
Аш көмектің
Жемдемектің
Босқа әлектің орны жоқ
`,
        translation: `There is no one more wretched
 Than a rich man who hoards his wealth.
 There is no place for empty schemes,
 For feeding on another's kindness
 And causing needless trouble.`,
      },
      {
        label: 'Verse 6',
        original: `Су жұғар ма
Сөз ұғар ма
Сыпыра жылмаң желбуаз?
Айтты — көндім
Алды — бердім
Енді өкіндім — өзіме аз
`,
        translation: `Will water ever stick to him?
 Will he ever understand a word?
 Always slippery, always full of empty talk.
 He said it, and I agreed;
 He took it, and I gave it.
 Now I regret it—
 But that regret is not enough.
`,
      },
    ],
  },

  /* ───────────────────────── SONG 2 ───────────────────────── */
  {
    id: 'betperde',
    title: 'Betperde',
    titleTranslated: 'Behind the mask',
    artist: '',
    performers: '', // PASTE HERE
    sections: [
      {
        label: 'Verse 1',
        original: `Күндер ертегі еді сенімен расында
Балаша тамсанушы едім даусыңа
Анаша тепкендей бақытсыз басыма
Секілді еді сен болсаң қасымда

Бір өкініш, бір баспана
Сырыңды айттың бір сәтте сен
жасқана
Артыңа қарамай сатылдың басқаға
Енді естерсің өкпемді мына таспадан
`,
        translation: `The days with you truly felt like a fairy tale.
 I used to listen to your voice with childlike wonder.
 It felt as though fate had dealt me a cruel hand,
 Yet everything seemed all right when you were beside me.
 One regret, one shelter—
 You revealed your secret to me one day,
 Hesitantly.
 Then you turned away without looking back
 And gave yourself to someone else.
 Now you'll hear my hurt in this recording.`,
      },
      betperde_chorus,
      {
        label: 'Verse 2',
        original: `Сыр емес болса да айтайын бірдеңе
Өтірігің - әлі ауыр тас кеудеме
Итке сүйектей тойдырдың уәдеге
Адал болмадың басынан сен неге?
 
Енді кеп жылама, көрсетпе өкпеңді
Кешірім сұрауға бәрі де кеш енді
Мен емес ханшайым, бітті ғой ертегі
Бәрі айдан анық, бетперде шеш енді!
`,
        translation: `Even if it's nothing new, let me say this:
 Your lies still weigh on my chest like stone.
 You fed me promises like scraps thrown to a dog.
 Why were you never honest from the start?
Don't come crying now; don't show me your hurt.
 It's too late to ask for forgiveness.
 I'm no princess - our fairy tale is over.
 Everything is crystal clear. Take off your mask.
`,
      },
      {
  label: 'Chorus x2',
  original: `Сен
Кетуге болдың жылдам
Жасадым оң бір қадам
Қаламадым сенің кеткеніңді
Мен
Болдым сезіміңе алдам
Бірақ сезімін сенің жалған
Көрсеттің тек қана бетпердеңді
`,
  translation: `You
 Were so quick to leave.
 I took one step forward,
 Though I never wanted you to go.
 And I
 I was deceived by your feelings,
 But your love was never true.
 All you showed me
 Was the mask you wore.`,
},
    ],
  },

  /* ─────────────── SONG 3 — PLACEHOLDER (replace me) ─────────────── */
  // Demo song written just to show the layout. Replace with a real song,
  // or delete this whole { ... } block.
  {
    id: 'dop',
    title: 'DOP',
    titleTranslated: 'Dop/Ball',
    artist: '',
    performers: '',
    sections: [
      dop_chorus,
      {
        
        label: 'Verse 1',
        original: `Дәптерден сырты ойылған,
Суретті тауып алған кезде
Сұрақ келді ойыма:
Айтшы бұл көңіл ояна ала ма кезіндей басынан бастап?!
 
Сау адамдар аурудың сөзімен сөйлеген,
Сыналмайтын сан түрлі суретті түгендегендер
Лайықсыз, өзіңе лайықсыз істерді істемей, ондай жерден кет сен.
 
Егер сенбесе, сен сендір,
Өзіңмен өзің бірге бір
Егер болмаса бәрібір басынан баста
`,
        translation: `I found a picture
 With its edges torn from an old notebook.
 A question came to mind:
 Tell me, can this heart awaken
 And begin again, just as it once did?
Healthy people spoke in the language of the sick;
 Some collected countless images that could never be tested.
 Don't do what is unworthy of you.
 Leave any place that asks you to become someone you're not.
If they don't believe you, make them believe.
 Stand together with yourself.
 And if that doesn't work, begin again anyway.
`,
      },
      dop_chorus,
      {
        label: 'Verse 2',
        original: `Уысым толмас, оны қысып ұстап алсам,
Дұрысы сол ма, шын ба, шыңға шыңар адам болмасам?!
 
Енді допты домалатып келем ойларым мынау,
Үй де домалатып сала берем, болса да сынау.
Менен қалсын бүкіл айласы.
Болам сабырдың мен айнасы
`,
        translation: `If I close my fist and hold on tightly,
 Would that really be right?
 What if I never become someone who can reach the summit?
Now I keep the ball rolling, and these are my thoughts:
 I'll keep moving forward, even if life puts me to the test.
 Let all the clever tricks end with me.
 I will become the very image of patience.
`,
      },
    ],
  },

  /* ─────────────── SONG 4 — PLACEHOLDER (replace me) ─────────────── */
  {
    id: 'daiynbyzBa',
    title: 'Daiynbyz ba?',
    titleTranslated: 'Are we ready for it?',
    artist: '',
    performers: '',
    sections: [
      daiynbyzBa_chorus,
      {
        label: 'Verse 1',
        original: `Әлі де сене алмаймын оған
Түсімде жүргендеймін
Дәл қазір құшағымда болсаңда
Мен уайымдаймын неге?
Тек бізге керегі
Талпынсақ келеді
Қиын сәттерде боламын серігің
Тым жылы сен кезіккен жолдар
Еріксіз еремін мен
`,
        translation: `I still can hardly believe it;
 It feels like I'm living in a dream.
 Even when you're in my arms right now,
 Why am I still afraid?
 All we need
 Is to keep trying.
 I'll stand beside you
 When the hard times come.
The paths where I met you feel so warm;
 I find myself following them.
`,
      },
      daiynbyzBa_bridge,
      daiynbyzBa_chorus,
      {
        label: 'Verse 2',
        original: `Кіршіксіз сезімнің
Екеуімізге берері мол
Керегі төзім
Сынайды сан қилы жол
Табамын өзім
Қолымнан ұстасаң болды
`,
        translation: `There is so much that pure love can give us.
 All we need is patience;
 The road will test us in countless ways.
 I'll find my way
 As long as you hold my hand.`,
      },
      daiynbyzBa_bridge,
      {
        label: 'Chorus x2',
        original: `Ұялып, бата алмаймын көздеріңе жай қарауға
Сыңғырлы күлкіңнен дүрсіл қағып жүрегім
Көзіме қарап айтшы біз дайынбыз ба жаңа тарауға?
Жарқын жаққа
Үмітпенен қарап тұр едім!
`,
        translation: `I’m too shy to look straight into your eyes.
 Your ringing laughter makes my heart race.
 Look into my eyes and tell me:
 Are we ready to begin a new chapter?
 I was looking ahead
 With hope for brighter days.
`,
    },
    ],
  },

  {
    id: 'mahabbatym',
    title: 'Mahabbatym',
    titleTranslated: 'My love',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Мойныңда сенің — күмістен алқа
Толқынды жаға
Екеуіміз ғана
Сырымыз бітпей жалғасты таңға
Жағымды жанға
Менде арман бар ма?
`,
        translation: `A silver necklace rests around your neck,
 The shore is touched by waves.
 Just the two of us
 Our conversation carried on until dawn.
 You bring such warmth to my soul.
 What more could I wish for?`,
      },
      {
        label: 'Chorus',
        original: `A-а-а-а-а
A-а-а-а-а
A-а-а-а-а
A-а-а-а-а
`,
        translation: `Ah-ah-ah-ah-ah…`,
      },
      {
        label: 'Verse 2',
        original: `Ән салып құстар шулаған бақта
Таң атқан шақта
Қасымдасың
Қоштасып, ұзақ кетуге қимай
Кеудеме сыймай
Махаббатым
`,
        translation: `In the garden, birds were singing,
 And dawn was breaking.
 You were there beside me.
 I couldn't bear to say goodbye
 Or watch you leave for so long
 My love.`,
      },
      {
        label: 'Chorus',
        original: `A-а-а-а-а
Ғашықпын саған, еркем!
A-а-а-а-а
Нәзіксің неткен, көркем!
A-а-а-а-а
Сағынам сені, еркем!
A-а-а-а-а
Өзіңнен жауап күтем…
Мен сені сүйемін
`,
        translation: `Ah-ah-ah-ah-ah…
 I'm in love with you, my darling!
 Ah-ah-ah-ah-ah…
 How gentle and beautiful you are!
 Ah-ah-ah-ah-ah…
 I miss you, my darling!
 Ah-ah-ah-ah-ah…
 I'm waiting for your answer…
I love you.
`,
      },
      {
        label: 'Outro',
        original: `Қоштасып, ұзақ кетуге қимай
Кеудеме сыймай
Махаббатым!
`,
        translation: ` I couldn't bear to say goodbye
 Or watch you leave for so long
 My love.`,
      },
    ],
  },

  {
    id: 'unaidyMagan',
    title: 'Unaidy Magan',
    titleTranslated: 'I like the way',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Жалын атқан жанарыңды, жүрегіңді үн қатқан
Ұнаттым мен бір ақ күннен көңіліңді сыр жатқан
Елеңдеттің, тыңдаттың үлбіреген үніңмен
Сен мен үшін жұмбақсың, жауабын білмеген
`,
        translation: `I fell for the fire in your eyes,
 For the voice that speaks from your heart.
 From the very first day, I loved
 The secrets hidden in your soul.
 Your gentle voice caught my attention;
 You're a mystery I have yet to solve.`,
      },
      unaidyMagan_chorus,
      {
        label: 'Verse 2',
        original: `Себебі сен жасырмайсың көңілдегі барыңды (Хей)
Себебі сен ұқсамайсың басқаларға кәдімгі
Сен жалғансыз шынайы, осындайсың себебі
Сол мінезің ұнайды, сенсің маған керегі
`,
        translation: `Because you never hide what's in your heart.
 Because you're unlike anyone else.
 You're genuine, never pretending
 That's simply who you are.
 I love that part of you;
 You're the one I need.`,
      },
      {
      label: 'Chorus x3',
      original: `Ұнайды маған еркелеткен сөздерің
Ұнайды маған жалын атқан көздерің
Ұнайды маған бір өзіңмен сырласқан
Ұнайды, ұнайды, ұнайды маған
`,
      translation: `I like the way you speak so sweetly.
 I like the fire shining in your eyes.
 I like sharing secrets with you alone.
 I like you, I like you, I like you.
`,
  },
      ],
  },
      {
    id: 'keshMeni',
    title: 'Kesh meni',
    titleTranslated: 'Forgive me',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Көз ілмей шықтым түні бойы, атты таң да
Мазалам бір ой кетпей қойды естен әлі
Жайдарлы шыққан күндер бірге жүрген едік
Болды ма айтшы, жаным, босқа соның бәрі?
`,
        translation: `I stayed awake all night until dawn appeared.
 One thought still troubles me; it will not leave my mind.
 We once walked together through such bright and happy days—
 Tell me, my love, was it all for nothing?`,
      },
      {
        label: 'Chorus',
        original: `Кеш мені, кеш енді,
Бар ма амал, менде енді?
Оралмас, бір болмас
Екі жас бірге енді.
`,
        translation: `Forgive me, forgive me now.
 Is there anything left to do?
 We will never return to what we were;
 Two young hearts can no longer be one.`,
      },
      {
      label: 'Verse 2',
      original: `Көз алмай тұрдым алдымдағы екі жастан,
Бір-біріне күлімдеп қарап, қол алысқан
Жайдарлы шыққан күндер бірге жүрген едік
Болды ма, бұдан артық менде ақ арман?
`,
      translation: `I couldn't take my eyes off the two people before me,
 Smiling at each other as they reached out their hands.
 We once walked together through such bright and happy days
 Could I ever have wished for anything more?
`,
  },
      {
      label: 'Rap',
      original: `Бағалай білмейміз біз барды
 Жігіттер сүйіңдер қыздарды
 Әйтпесе әр жанда бар арман
 Қыз деген сол үшін жаралған.
 Сезімді тұра алар бүгіп кім?
 Ең ізгі ерлігі жігіттің –
 Жан ұғар жақынның жоқ теңі
 Бір қызды бақытты еткені.
 Онсыз да бұл заман ызғарлы,
 Жігіттер сүйіңдер қыздарды,
 Өлуде күнәсіз сан арман
 Қыз деген сол үшін арналған.
`,
      translation: `We don't know how to treasure what we have.
 So, boys, love the girls in your lives,
 For every heart carries a dream.
 Isn't that what girls are made for?
 Who can keep their feelings hidden forever?
 A man's finest act of courage
 Is to understand the person close to him
 There is no greater gift
 Than making a girl happy.
 This world is already cold enough;
 So, boys, love the girls in your lives.
 So many innocent dreams are lost;
 A girl deserves to be loved.
`,
  },
    ],
  },

      {
    id: 'shyrailym',
    title: 'Shyrailym',
    titleTranslated: 'Shyrailym / My radiant one',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Кім жаратты сені, сондай тәтті әнді?
Теңізінің сенің, суы неткен дәмді.
Толқынымен басты, толқынымен басты мені,
Тек тұңшықтырмашы, сен асықтырмашы мені.
Мындаған гүлдерден, менің гүлім ең сұлу.
Кешір мені, менің жүрегімнен кетпейді жылу,
Көздерім сені қимайды, тек әрі қарай олай болмайды.
Түсінші мені, кешірші мені, шырайлым
`,
        translation: `Who created you with such a sweet song?
 How delicious the water of your sea must be.
 Your waves have swept over me, again and again—
 Just don't drown me; please don't rush me.
Among thousands of flowers,
 You are the most beautiful one.
 Forgive me: the warmth in my heart won't fade.
 My eyes can't bear to leave you,
 But things can no longer stay this way.
 Please understand me, forgive me, my lovely one.
`,
      },
      shyrailym_chorus,
      {
      label: 'Verse 2',
      original: `Өткен күндер мен түндерге орала берме,
Жаз бен көктем кетті, біздің әлемнен.
Мүмкін осылай болуы керек, екеумізге бір жүрек,
Екіге бөлінсін, маған жартысы саған жартысы.
Жасқа толы менің көзім Бірақта өзімен өзім мен…
Кешір, күн мен айым, кешірші мені, шырайлым
`,
      translation: `Don't keep returning to the days and nights gone by.
 Summer and spring have left our world.
 Perhaps this is how it must be:
 One heart between us, divided in two—
 Half for me and half for you.
My eyes are full of tears,
 But I am left alone with myself…
 Forgive me, my sun and moon;
 Forgive me, my lovely one.
`,
  },
      shyrailym_chorus,
    ],
  },

  {
    id: 'suigenZhurek',
    title: 'Сүйген жүрек',
    titleTranslated: 'A loving heart',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Сүйген жүрек - өмірдегі тірек, 
Күні-түні соғар 
Саған бақыт тілеп. 
Сүйген жүрек - сағынған, жылаған 
Жүрсін деп дін-аман 
Тәңірден сұраған.
`,
        translation: `A loving heart is life's support,
 Beating day and night,
 Wishing happiness upon you.
 A loving heart longs and weeps,
 Praying to Heaven
 That you remain safe and well.
`,
      },
      {
        label: 'Chorus',
        original: `Сүйген сенің жүрегім, 
Мен де мұны білемін! 
Әмір жүрмес ғашық жүрекке, 
Аймалашы аяулап, 
Жан сезімім арай бақ, 
Бұдан асқан бақыт керек пе, 
Аңсап сені сүйген жүрекке?
`,
        translation: `My heart is in love with you
 I know it, too.
 No command can rule a heart in love.
 Hold me gently, tenderly;
 My feelings bloom like a garden.
 What greater happiness could there be
 For a heart that longs to love you?
`,
      },
      {
      label: 'Verse 2',
      original: `Сүйген жүрек -
Бір саған асыққан. 
Ол үшін ғұмыр - мұң, 
Ол үшін күн - думан. 
Сүйген жүрек -  
Таусылмас асыл ән 
Сол сүйген жүректі 
Мен саған ұсынам...
`,
      translation: `A loving heart
 Hurries toward you alone.
 For it, life is sorrow,
 And every day is a celebration.
 A loving heart
 Is a precious, endless song.
 And this loving heart
 I place it in your hands.
`,
  },
      {
        label: 'Chorus x2',
        original: `Сүйген сенің жүрегім, 
Мен де мұны білемін! 
Әмір жүрмес ғашық жүрекке, 
Аймалашы аяулап, 
Жан сезімім арай бақ, 
Бұдан асқан бақыт керек пе, 
Аңсап сені сүйген жүрекке?
`,
        translation: `My heart is in love with you
 I know it, too.
 No command can rule a heart in love.
 Hold me gently, tenderly;
 My feelings bloom like a garden.
 What greater happiness could there be
 For a heart that longs to love you?
`,
      },
    ],
  },

    {
    id: 'pandoraQoraby',
    title: 'Pandora qoraby',
    titleTranslated: 'A loving heart',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Отпен ойнама, бала, күйесің
Шыныңды айтшы, сен кімді сүйесің?
Екі жалын өртке айналғанда
Қалай көтермекшісің күйесін?
Кім болды бүгінгісі
Жүрегіңнің иесі?
Қалауың қызған түнде қай белдемшеге ересің?
Сене алмаймын сен айтқан
Келесі жалғанға
"Сүйем-күйем"
"Сүйем-күйем" демеші!
`,
        translation: `Don't play with fire, boy—you'll get burned.
 Tell me the truth: who is it that you love?
 When two flames turn into one great fire,
 How will you bear the ashes?
Who is the one today
 Who owns your heart?
 On a night when desire runs hot,
 Whose skirt will you chase?
I can't believe
 The next lie you tell.
 Don't say “I love you, I'd die for you”
 Don't say those words again!
`,
      },
      pandoraQoraby_chorus,
      {
      label: 'Verse 2',
      original: `Әркімнің болсын жеке белесі
Айлаң тозды, сен де оны сезесің
Махаббатым менің әлі алдымда
Сүйдім-күйдім, сүйдім-күйдім, келесі!
`,
      translation: `Everyone should have a path of their own.
 Your tricks have worn thin—you know it too.
 My love story is still waiting ahead of me.
 I loved, I burned, I loved, I burned—next!
`,
  },
      pandoraQoraby_chorus,
      {
        label: 'Bridge',
        original: `Есігімнің алдына
Жалынып келмеші
Жаным, бұл далбасаны бес саусақтай білемін
(Бір) Алдыма келесің
(Екі) Сөзіңді бересің
(Үш) Басқаға ересің
(Төрт) Көзіме шөп салып
(Бес) Құлақтан тебесің
(Ых, жоғалшы!)
`,
        translation: `Don't come begging at my door.
 Darling, I know this routine by heart:
 One, you chase me;
 Two, you make your promises;
 Three, you chase someone else;
 Four, you cheat on me;
 Five, you turn your back on me.
 Enough—just get lost!
`,
      },
      {
        label: 'Chorus',
        original: `Ей, бала, есіңді жи бала!
Саған қыз керек емес, ми ғана (Oo-ooh)
Ей, бала, өзіңді қинама!
Ашылса қорабы Пандораның обал болады (Ooh)
`,
        translation: `Hey, boy, get a grip!
 You don't need a girl; you need some sense.
 Hey, boy, don't put yourself through this!
 Opening Pandora's box will only bring trouble.
`,
      },
    ],
  },

      {
    id: 'beggin',
    title: 'Beggin',
    titleTranslated: '',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Intro',
        original: `Put your lovin' hand out, baby
'Cause I'm beggin'
`,
        translation: ``,
      },
      {
      label: 'Chorus',
      original: `I'm beggin', beggin' you
So put your lovin' hand out, baby
I'm beggin', beggin' you
So put your loving hand out, darlin'
`,
      translation: ``,
  },
      {
        label: 'Verse 1',
        original: `Ridin' high when I was king
I played it hard and fast 'cause I had everything
I walked away, you warned me then
But easy come and easy go, and it would end


So anytime I bleed, you let me go
Yeah, anytime I feed, you get me, no
Anytime I seek, you let me know


But I plan and see, just let me go
I'm on my knees when I'm beggin'
'Cause I don't wanna lose you
Hey, yeah, ra-ta-ta-ta
`,
        translation: ``,
      },
      {
        label: 'Chorus',
        original: `'Cause I'm beggin', beggin' you
Uh, put your lovin' hand out, baby
I'm beggin', beggin' you
And put your lovin' hand out, darlin'
`,
        translation: ``,
      },
      {
        label: 'Bridge',
        original: `I need you to understand
Tried so hard to be your man
The kind of man you want in the end
Only then can I begin to live again
`,
        translation: ``,
      },
       {
        label: 'Verse 2',
        original: `An empty shell, I used to be
The shadow of my life was hangin' over me


A broken man that I don't know
Won't even stand the devil's dance to win my soul
What we doin'? What we chasin'?
Why the bottom? Why the basement?


Why we got good shit, don't embrace it?
Why the feel for the need to replace me?
You're the wrong way track from the good
I wanna paint a picture tellin' where we could be at
Like a heart in the best way should
You can give it away, you had it, and you took the pay
But I keep walkin' on, keep openin' doors
Keep hopin' for, now the door is yours, keep also home
'Cause I don't wanna live in a broken home, girl, I'm beggin'
`,
        translation: ``,
      },
      {
        label: 'Chorus',
        original: `Mm, yeah, yeah, I'm beggin', beggin' you
So put your lovin' hand out, baby
I'm beggin', beggin' you
So put your lovin' hand out, darlin'
`,
        translation: ``,
      },
      {
        label: 'Bridge',
        original: `I'm fightin' hard to hold my own
Just can't make it all alone
I'm holdin' on, I can't fall back
I'm just a calm, 'bout to fade to black
`,
        translation: ``,
      },
      {
        label: 'Chorus',
        original: `I'm beggin', beggin' you
Put your lovin' hand out, baby
I'm beggin', beggin' you
So put your lovin' hand out, darlin'
I'm beggin', beggin' you
So put your lovin' hand out, baby
I'm beggin', beggin' you
So put your lovin' hand out, darlin'
`,
        translation: ``,
      },
      {
        label: 'Outro',
        original: `I'm beggin', beggin' you
So put your lovin' hand out, baby
I'm beggin', beggin' you
So put your lovin' hand out
`,
        translation: ``,
      },
    ],
  },

  {
    id: 'menSeniSuyemin',
    title: 'Men seni Suyemin',
    titleTranslated: 'I love you',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Қазір, дәл осы сәтте
Мені қалдыр, сен тым көп менде
 
Ару, ғашық жанару
Ол қару, атомдық қару
`,
        translation: `Right now, this very moment—
 Leave me; there's already so much of you inside me.
A beauty, a glowing face in love;
 A weapon, an atomic weapon.
`,
      },
      menSeniSuyemin_chorus,
      {
      label: 'Verse 2',
      original: `Сырларымызды мәңгілік сақтай
Жылдарымызды ешкім жоя алмайды
`,
      translation: `Let our secrets remain forever;
 No one can erase the years we've shared.
`,
  },
      menSeniSuyemin_chorus,
      {
        label: 'Verse 3',
        original: `Сені бермеймін, ешбір жанға (Мен сені сүйемін)
Маған кел дейтін, құшағын жая (Мен сені сүйемін)
Сені бермеймін, ешбір жанға (Мен сені сүйемін)
Маған кел дейтін, құшағын жая (Мен сені сүйемін)
Мен сені
`,
        translation: `I won't give you to anyone else (I love you).
 You call me to come, arms open wide (I love you).
 I won't give you to anyone else (I love you).
 You call me to come, arms open wide (I love you).
I love you…
`,
      },
    ],
  },

  {
    id: 'zhel',
    title: 'Жел',
    titleTranslated: 'Wind',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Балдай тәтті сөзің
Жамады жарамды
Әттең бола алмадың
Сүюге жарамды
 
Үнемі алдайсың тыйып өткен шағыңды
Әңгіме ыңғайсыз болғанда қас қағымда
Қашуға оңайсың
Атыңа затың сай емес
Бірақ әлі де
`,
        translation: `Your words were sweet as honey;
 They healed my wounds.
 Alas, you were never
 Someone capable of love.

You keep hiding your past,
 Always twisting the truth.
 Whenever a conversation turns uncomfortable,
 You find a way to escape in a beat.
 Running away comes so easily to you.
 Your name and nature don't quite match
 And yet, still…
`,
      },
      zhel_chorus,
      {
      label: 'Verse 2',
      original: `Әмірсіз жүрек
Сені аңсап қоймайды
Махаббатқа аш адам
Не де берсең тоймайды
 
Сен алдамшы
Мен болсам аңқау
Сен қашқан сайын
Ермегім қуалау
`,
      translation: `My heart doesn’t obey
 It keeps longing for you.
 A heart hungry for love
 Can never be full,
 No matter what you give.

You're a liar;
 I'm trusting and naive.
 The more you run away,
 The more I chase after you.
`,
  },
      zhel_chorus,
      {
        label: 'Verse 3',
        original: `Шаршадым ойыннан
Аш адам тоя алмас
`,
        translation: `I'm tired of this game.
 A hungry heart
 Can never have enough.
`,
      },
    ],
  },

  {
    id: 'neproizoshlo',
    title: 'Непроизошло',
    titleTranslated: 'Did not happen',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `А подо мной Земля крутится как назло
Будто бы ничего и не произошло
Просто рэп-звезды погасли все, туса в особняке
Будто бы ничего и не произошло
Просто нам правда не по глазам
Оказалось всё, как и сто лет назад
Жаль, будто ничего так и не произошло
Только рэп-звезды погасли все, время куда-то шло
А может быть, ничего и не произошло
`,
        translation: `And beneath me, the Earth keeps spinning just to spite me
As if nothing had ever happened
Just the rap stars have all faded out, a party in a mansion
As if nothing had ever happened
It's just that we really can't face the truth
Turns out everything is just like it was a hundred years ago
It's a shame, as if nothing had ever happened at all
Only the rap stars have all faded out, and time just drifted on
Or maybe nothing ever happened
`,
      },
      {
      label: 'Verse 2',
      original: `Ты смотришь мне в глаза
Не показалось, я делаю шаг назад
И всё, будто ничего и не произошло
Ты смотришь мне в глаза
Не показалось, я делаю шаг назад
Всё, будто ничего
Здесь всё, будто ничего
Всё, будто ничего
Здесь всё, будто ничего
Всё, будто ничего
Здесь всё, будто ничего
И только рэп-звезды погасли все
Траками по росе
Может быть, ничего
И не произошло
И не произошло
И не произошло
И не произошло
И не произошло
Та-да-да-да-да-да
Та-да-да-да-да-да
Та-да-да-да-да-да
`,
      translation: `You're looking into my eyes
I wasn't imagining it, I'm taking a step back
And that's it, as if nothing had ever happened
You're looking into my eyes
I wasn't imagining it, I'm taking a step back
That's it, as if nothing
Everything here is as if nothing happened
As if nothing
Everything here is as if nothing happened
As if nothing
Everything here is as if nothing happened
And only the rap stars have all faded out
Truck tires rolling through the morning dew
Maybe nothing
Ever happened
Ever happened
Ever happened
Ever happened
Ever happened
Ta-da-da-da-da-da
Ta-da-da-da-da-da
Ta-da-da-da-da-da
`,
  },
    ],
  },

{
    id: 'koshBol',
    title: 'Қош бол',
    titleTranslated: 'Goodbye',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Мынаны естимісің
Уақыттың дыбысын
Алтынға бағалаймын
Барым да тынысым.
Мынаны естимісің
Уақыттың дыбысын
Алтынға бағалаймын
Барым да тынысым
`,
        translation: `Can you hear it
 The sound of time?
 I would give it the value of gold;
 It's all I have, it's my very breath.
Can you hear it
 The sound of time?
 I would give it the value of gold;
 It's all I have, it's my very breath.
`,
      },
      koshBol_bridge,
      {
        label: 'Chorus',
        original: `Қош бол! Қош бол! Қош бол, мұңға толы сәттер!
Қош бол! Қош бол! Қош бол, мұңға толы сәттер!
`,
        translation: `Goodbye! Goodbye!
 Goodbye to moments filled with sorrow!
 Goodbye! Goodbye!
 Goodbye to moments filled with sorrow!
`,
      },
      {
        label: 'Verse 2',
        original: `Мен үшін мейрам бүгін
Ерекше әр күнім
Болмасын мүлде уайым
Қуана тойлайын
Достардың арасында
Еркелеп ойнайын
Шулап өтер бұл өмірде
Қызығына тоймайын
`,
        translation: `Today is a celebration for me;
 Every day feels special.
 Let there be no worries at all
 I want to celebrate with joy.
 Among my friends,
 I'll laugh and play freely.
 Life rushes by in all its noise;
 I never want to tire of its wonders.
`,
      },
      koshBol_bridge,
      {
        label: 'Chorus x2',
        original: `Қош бол! Қош бол! Қош бол, мұңға толы сәттер!
Қош бол! Қош бол! Қош бол, мұңға толы сәттер!
`,
        translation: `Goodbye! Goodbye!
 Goodbye to moments filled with sorrow!
 Goodbye! Goodbye!
 Goodbye to moments filled with sorrow!
`,
      },
    ],
  },

  {
    id: 'dosMukasanMedley',
    title: 'Дос-Мұқасан попурри',
    titleTranslated: 'DosMukasan Medley',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse - song I Missed You',
        original: `Сағындым сені, сағындым еркем
Қызғалдақ толы көктемде
Сағындым еркем, сазымен көркем
Қаңқылдап қаздар өткенде
`,
        translation: `I miss you, I miss you, my dear,
 In the springtime full of tulips.
 I miss you, my dear, with your beautiful melody,
 When the geese pass by calling.
`,
      },
      {
        label: 'Chorus',
        original: `Сағындым сені, аяулым!
Келсеңші маған ән болып
Сағындым сені, аяулым
Келсеңші маған, келсеңші маған, таң болып
`,
        translation: `I miss you, my precious one!
 Come to me like a song.
 I miss you, my precious one—
 Come to me, come to me like the dawn.
`,
      },
      {
        label: 'Verse - song Beautiful Girl',
        original: `Таңертеңмен бір сұлу қыз
Суға келеді
Суға келеді
Суға келеді
Ат жетектеп бір жас жігіт
Еріп келеді
Еріп келеді
Еріп келеді
`,
        translation: `Early in the morning, a beautiful girl
 Comes to fetch some water,
 Comes to fetch some water,
 Comes to fetch some water.
 A young man leads his horse
 And follows after her,
 Follows after her,
 Follows after her.
`,
      },
      {
        label: 'Chorus',
        original: `Тоқтаңыз сұлу қыз су іздеген
Танысқым келеді менің сізбен
Айтыңыз атыңыз кім болады
Танысып көрмеген бұрын қызбен
`,
        translation: `Wait, beautiful girl, you came for water.
 I'd like to get to know you.
 Tell me, what is your name?
 I've never met a girl like you before.
`,
      },
      {
        label: 'Verse - song You Are More Beautiful Than Anything',
        original: `Жаз гүліндей жайнаған
Масатыдай жер сұлу
Аққу-қаздар тойлаған
Айдын шалқар көл сұлу
`,
        translation: `The land is beautiful, blooming like summer flowers;
 The earth is lovely as velvet.
 Swans and geese celebrate,
 And the wide lake is beautiful.
`,
      },
      {
        label: 'Chorus',
        original: `Өзгеден де ең сұлу
Өмірлік дос тең сұлу
Өзім сүйіп ұнатқан
Бәрінен де сен сұлу сен сұлу
`,
        translation: `You are more beautiful than anyone,
 A friend for life, beautiful and true.
 The one I love, the one I chose—
 You are the fairest of them all.
`,
      },
      {
        label: 'Verse - song Wedding Song',
        original: `Махаббатың құдірет күші әлдилеп
Екі жастың табыстырған жүрегін
Жастық жалын, асыл арман, ақ ниет
Бақыт сыйлап ұсыныпты гүлдерін
`,
        translation: `The power of love gently rocks us,
 Bringing two young hearts together.
 The flame of youth, precious dreams, and pure intentions
 Have offered us flowers of happiness.
`,
      },
      {
        label: 'Chorus',
        original: `Той үстінде тәтті күндер, тәтті күндер
Жас жұбайлар шат күліңдер, шат күліңдер
Ән салайық би билейік, би билейік
Шарықтасын шаттық үндер, шаттық үндер
`,
        translation: `Sweet days at the wedding, sweet days!
 Newlyweds, laugh with joy, laugh with joy!
 Let's sing and dance, let's sing and dance—
 Let the sounds of happiness rise!
`,
      },
      {
        label: 'Verse - song Where Are You? (Kazakh part)',
        original: `Күндіз де, түнде де сені іздедім
Кімсін сен, қайдасын – соны білмедім
Бірде барсын, бірде жоқ, сен бір елессін
Түнде, таңда маған келесін
`,
        translation: `I have searched for you day and night.
 Who are you, where are you? I don’t know.
 Sometimes you appear, sometimes you're gone
 You're like a vision,
 Coming to me at night and at dawn.
`,
      },
      {
        label: 'Chorus (Russian part)',
        original: `Днем и ночью я ищу давнюю мечту
Но не зная, кто она, все равно ищу
Ты приходишь как мираж в предрассветном сне
Но, я верю, мой счастье улыбнется мне
`,
        translation: `Day and night, I search for an old dream.
 Though I don't know who she is, I keep looking.
 You come like a mirage in the dream before dawn,
 But I believe happiness will one day smile upon me.
`,
      },
    ],
  },


  /* ─────────────── PASTE HERE: MORE SONGS ───────────────
   * Copy this template, remove the // at the start of each line, fill it in:
   *
  // {
  //   id: 'song-five',
  //   title: 'Original title',
  //   titleTranslated: 'English title',
  //   artist: 'Original artist',
  //   performers: '',
  //   sections: [
  //     {
  //       label: 'Verse 1',
  //       original: `line 1
  // line 2`,
  //       translation: `line 1
  // line 2`,
  //     },
  //     {
  //       label: 'Chorus',
  //       original: `...`,
  //       translation: `...`,
  //     },
  //   ],
  // },
   */
];

/* ───── helpers used by the app (no need to edit below this line) ───── */
export const getSongById = (id) => songs.find((s) => s.id === id);

// Splits a backtick lyric block into clean lines (trims indentation).
export const toLines = (text = '') =>
  text
    .split('\n')
    .map((l) => l.trim())
    .filter((l, i, arr) => !(l === '' && (i === 0 || i === arr.length - 1)));
