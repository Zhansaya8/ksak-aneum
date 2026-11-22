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
