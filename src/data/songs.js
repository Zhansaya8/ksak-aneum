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

const basqany_chorus = {
      label: 'Chorus',
      original: `Ал енді сен басқаны
Суықта жылытасың
Ал енді сен басқаны
Сөзіңмен жұбатасың
Ал енді сен басқаны
Бақытты ете аларсың
Ал енді сен басқаны
Барыңмен қуантарсың
`,
      translation: `Now you'll keep someone else warm
 When the cold sets in.
 Now you'll comfort someone else
 With the words you once gave me.
 Now you'll make someone else happy
 Now you'll give them all you have.
`,
  };


const tulamaidy_chorus = {
      label: 'Chorus',
      original: `Біз Қозы мен Баяндай, өкінішке орай
Болмаймыз тырыссақ та, қырсық, неге олай?
Ғашық болу — жаңбырдай, жауады жер таңдамай
Сенімен, әттең, теңізім туламайды-ай
Сенімен, әттең, теңізім туламайды-ай
`,
      translation: `Like Kozy and Bayan, sadly,
 We cannot be together, no matter how hard we try.
 Why must fate be so cruel?
 Falling in love is like rain—
 It falls without choosing where.
 Oh, my sea can’t rise with you.
`,
  };

const veter_bridge = {
      label: 'Bridge',
      original: `Искать ответ, запутавшись в словах
И да и нет. Затушишь, недосказав
Ни слова мне, ни слова
`,
      translation: `Searching for an answer, lost in all these words—
 Both yes and no. You put the flame out
 Before you ever finish what you meant to say.
 Not a word to me, not a word.
`,
  };

const veter_chorus = {
      label: 'Chorus',
      original: `Ветер будет сильный
Прям невыносимый
Я теряю всё, что было вовсе не моё
Ветер будет сильный
Прям невыносимый
Заново мы вряд ли что-то снова соберём
`,
      translation: `The wind will blow so hard,
 Almost impossible to bear.
 I'm losing everything
 That was never really mine.
 The wind will blow so hard,
 Almost impossible to bear.
 I doubt we'll ever manage
 To put the pieces back together.
`,
  };


const matchaChai_chorus = {
      label: 'Chorus',
      original: `Найду причину, чтобы просыпаться по утрам
Заварю матчу, брошу в мусор пачку сигарет
И мне совсем не страшно снова себя потерять
Танцую в темноте, танцую в темноте
`,
      translation: `A reason to wake up in the morning.
 I'll brew some matcha and throw my pack of cigarettes away.
 I'm not afraid at all of losing myself again.
 I dance in the darkness, I dance in the darkness.
`,
  };


const egizLebiz_chorus = {
      label: 'Chorus',
      original: `Келші бағыма әлдеқайда ұшпай,
келші, жаным,
Қоншы қолыма арман аппақ құстай,
қоншы, жаным.
Келші бағыма,
Қоншы қолыма,
Келші, жаныма, кел!
`,
      translation: `Come into my garden; don't fly away so far.
 Come, my love.
 Land in my hands like a pure white dream,
 Come rest, my love.
 Come into my garden,
 Land in my hands,
 Come close to me, come!
`,
  };


const osenniPozhar_chorus = {
      label: 'Chorus',
      original: `Осенний пожар, два сердца внутри
Куда мне теперь бежать Магритт и Фон Триер
Как жаль, мы уже договорились
Что больше никогда об этом не заговорим
Осенний пожар, два сердца внутри
Куда мне теперь бежать Магритт и Фон Триер
Как жаль, мы уже договорились
Что больше никогда об этом не заговорим
Не заговорим
`,
      translation: `An autumn fire, two hearts within.
 Where can I run now—Magritte and von Trier?
 What a shame: we already made a promise
 Never to speak of this again.
 Never speak of it again.
`,
  };

const qazirBolmasa_chorus = {
      label: 'Chorus',
      original: `Қазір болмаса, қашан мен айтам?
Сезімді іштей жасыра алмасам
Қазір болмаса, қашан мен айтам?
Сезімді іштей жасыра алмасам
`,
      translation: `If not now, when will I tell you?
 I can no longer keep these feelings inside.
 If not now, when will I tell you?
 I can no longer keep these feelings inside.
`,
  };


const kaitadan_chorus = {
      label: 'Chorus x2',
      original: `Саған қалай айта алам'?
Айтпай қалай жай табам'?
Сол алғашқы жалынды
Жағайықшы қайтадан
`,
      translation: `How can I tell you?
 How can I find peace if I don't?
 Let's bring that first flame
 Back to life again.
`,
  };

const nuzhna_chorus = {
        label: 'Chorus',
        original: `Словно приливы океану
 Словно небу облака
 Словно грешным душам ангел
 Ты нужна мне
 Ты нужна
 Как для безумца наказание
 Как цветку нужна вода
 Словно смелость для признаний
 Ты нужна мне
 Ты нужна
`,
        translation: `Like the tides need the ocean,
 Like the clouds belong to the sky,
 Like angels to the souls who’ve lost their way,
 I need you by my side.
I need you,
 I need you.
Like a madman’s need for punishment,
 Like a flower needs the rain,
 Like the courage to confess what’s in your heart,
 I need you just the same.
I need you,
 I need you.
`,
      };


const kuiim_chorus = {
      label: 'Chorus',
      original: `Төңкер шампанды аспанға!
 Екеуіміздің мерекеміз.
 Сәулем шуағын шашқанда,
 Түсінем: Құдай бізді қосқан,
 Сені сүю — Су тасқындай,
 Менің күйім Адасқандаймын.
 Төкпе көз жасты. Арманда!
 Өтед-кетед, Бұл жастық Шақ.
`,
      translation: `Raise the champagne to the sky!
 Tonight is our celebration.
 When your light shines down on me,
 I understand: God brought us together.
 Loving you
 Is like a rising flood
 My heart
 Feels lost and swept away.
 Don't let the tears fall.
 Keep dreaming!
 This youth will pass before we know it.
`,
  };

const sheker_chorus = {
      label: 'Chorus',
      original: `Уу-ее, шекер-шекер,
бір жағалауға мың шағала.
Құй шарап, құй шарап.
Ішейік-ішейік-ішейік-ішейік-ішейік йә.
`,
      translation: `Woo-yeah, sugar, sugar,
 A thousand seagulls along one shore.
 Pour the wine, pour the wine—
 Let's drink, let's drink, let's drink!
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

  {
    id: 'basqany',
    title: 'Basqany',
    titleTranslated: 'Someone else',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Rap',
        original: `Бәріде-бәріде есте
Бақытты кездер
Уақытта өтті лезде
Өтті тәтті кез
Екінші подъезд, үйдің артындағы бау
Сенің сұлулығың уау
Сезімдер кетті жанып лаулап
Сенің сұлулығың уау
Ішкі дүниең жалмауыз
Алдын бірге болдық казір жаумыз
Алдын бірге болдық казір жаумыз
`,
        translation: `Everything, everything stays in my memory
 Those happy days.
 Time flew by in an instant;
 Those sweet moments are gone.
The garden behind the second entrance,
Your beauty is wow.
 Our feelings burst into flames;
 Your beauty is wow.
 But inside, you were cruel.
 Once we stood together; now we're enemies.
 Once we stood together; now we're enemies.
`,
      },
      {
        label: 'Verse 1',
        original: `Мен бәрін басқаша
Елестеттім алайда
Қоштасудың уақыты
Тым ерте келді қалайша?
`,
        translation: `I imagined it all so differently,
 But somehow,
 The time to say goodbye
 Came far too soon.
`,
      },
      basqany_chorus,
      {
        label: 'Verse 2',
        original: `Сен енді басқаға
Жазып түрлі хаттарды
Түніменен көз ілмей
Бар сырыңды оған ақтарып
`,
        translation: `You'll write someone else letters,
 Stay awake with them all night,
 And share every secret
 You once shared with me.
`,
      },
      basqany_chorus,
    ],
  },

    {
    id: 'tulamaidy',
    title: 'Tulamaidy',
    titleTranslated: 'My sea can’t rise',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Қарадың жауап күткен қара көзбен
Тығылдым, сақтап сені сол сөздерден
Аппақ жүрегіңе дақ түсірем бе?
Көңілді әуеніңе мұң жіберем бе?
`,
        translation: `You looked at me with dark eyes,
 Waiting for an answer.
 I held back, trying to protect you
 From the words I had to say.
 Would I leave a mark upon your pure white heart?
 Would I bring sadness into your cheerful song?
`,
      },
      tulamaidy_chorus,
      {
        label: 'Verse 2',
        original: `Қарадың жауап күткен қара көзбен
Жұмылдым, шындықты айту ауыр екен
Аппақ жүрегіңе дақ түсірем бе?
Көңілді әуеніңе мұң жіберем бе?
`,
        translation: `You looked at me with eyes that waited for an answer.
 I fell silent; the truth is so hard to say.
 Would I leave a mark upon your pure white heart?
 Would I bring sadness into your cheerful song?
`,
      },
      {
        label: 'Bridge',
        original: `Адассаң қараңғыда — айың болам
Сендей асыл адам — серік маған, қайран қалам
Сүрініп құласаң — жараңды кеп, өзім таңам
Сұрайтыным — дос боп қалшы маған
`,
        translation: `If you lose your way in darkness, I'll be your moon.
 Someone as precious as you would make a wonderful companion.
 If you stumble and fall, I'll be the one to tend your wounds.
 All I ask is that you remain my friend.
`,
      },
      tulamaidy_chorus,
      {
        label: 'Outro',
        original: `Біз Қозы мен Баяндай, өкінішке орай
Болмаймыз тырыссақ та, қырсық, неге олай?
Ғашық болу — жаңбырдай, жауады жер таңдамай
Сенімен, әттең, теңізім туламайды-ай
Сенімен, әттең, теңізім туламайды-ай
`,
        translation: `Like Kozy and Bayan, sadly,
 We cannot be together, no matter how hard we try.
 Why must fate be so cruel?
 Falling in love is like rain—
 It falls without choosing where.
 Oh, my sea can’t rise with you.
`,
      },
    ],
  },

  {
    id: 'kimadyn',
    title: 'Қимадың',
    titleTranslated: 'Don’t say',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Айта алмай тұрсың алдымда не?
Бастаған сөзің аяқсыз қалды,
Қайғырады деп ойлама мен.
Сол нәзік қыз деп жүрсіңбе әлі?
Саған сезім шынайы еді,
Сен адастың,алдандың ба?
Бақытыңды өмірдегі,мәңгілік жараладың!
`,
        translation: `What are you trying to tell me?
 You began to speak, but left your words unfinished.
 Don't think I'll grieve over it.
 Do you still think I'm that delicate girl?
 My feelings for you were sincere.
 Were you mistaken, or were you deceived?
 You have wounded your own happiness for good.
`,
      },
      {
        label: 'Bridge',
        original: `Алыста,алысқа кетсеңде қаншама,
Ешқашан артыңа қайрылма.
Қайтпа енді жаныма,жаныма
`,
        translation: `Even if you go far, far away,
 Never look back.
 Don't come back to me again.
`,
      },
      {
        label: 'Chorus',
        original: `Қимадың деп айтпа,құбылып алдымда.
Жалғандығыңмен жетер енді жетер,
Берген сертің қайда?
Ол орындалмай ма?
Сен маған қол жетпес арман емессің.
`,
        translation: `Don't say you couldn't let go,
 Standing before me, changing your mind.
 Your lies have gone far enough.
 Where are the promises you made?
 Will you ever keep them?
 You're not some unreachable dream to me.
`,
      },
      {
        label: 'Verse 2',
        original: `Жүрсіңбе сен өкініп енді?
Есіңе алып бақытты кезді,
Соншама сені бағалап едім.
Бәріде енді алыстап кетті,
Сен мені ойлама енді,сағынба.
Жалынышпен мұнайма алдымда,
Сені ұмыту қиын емес.
Жалынып енді қинама.
`,
        translation: `Do you regret it now?
 Do you remember those happy days?
 I valued you so much.
 But now everything has drifted away.
 Don't think of me anymore; don't miss me.
 Don't stand before me pleading and sad.
 Forgetting you isn't difficult.
 Don't come begging and tormenting me.
`,
      },
      {
        label: 'Bridge',
        original: `Сен алыста,алысқа кетсеңде қаншама,
Ешқашан артыңа қайрылма.
Қайтпа енді жаныма,сен жаным!
`,
        translation: `Even if you go far, far away,
 Never look back.
 Don't come back to me again.
`,
      },
      {
        label: 'Chorus x2',
        original: `Қимадың деп айтпа,құбылып алдымда.
Жалғандығыңмен жетер енді жетер,
Берген сертің қайда?
Ол орындалмай ма?
Сен маған қол жетпес арман емессің.
`,
        translation: `Don't say you couldn't let go,
 Standing before me, changing your mind.
 Your lies have gone far enough.
 Where are the promises you made?
 Will you ever keep them?
 You're not some unreachable dream to me.
`,
      },
    ],
  },

  {
    id: 'veter',
    title: 'Ветер',
    titleTranslated: 'Wind',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Снова, снова не лезь за словом
Это уже не новость — от себя не убежишь
Если, если ты не готова
Я буду хладнокровным, разобраться надо лишь
`,
        translation: `Again, again—don't make me search for words.
 This is nothing new; you cannot run from yourself.
 If, if you're not ready,
 I'll stay calm. We only need to understand.
`,
      },
      veter_bridge,
      veter_chorus,
      {
        label: 'Verse 2',
        original: `Ветер будет сильный
Прям невыносимый
Я теряю всё, что было вовсе не моё
Ветер будет сильный
Прям невыносимый
Заново мы вряд ли что-то снова соберём
`,
        translation: `Again, again, we're almost strangers.
 Cold runs through both your veins and mine.
 Soon it will hurt beyond belief.
 I'm tired of it—we keep running from love.
`,
      },
      veter_bridge,
      veter_chorus,
    ],
  },

    {
    id: 'matchaChai',
    title: 'Матча чай',
    titleTranslated: 'Matcha',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Хмурый, осенний вечер, на улице дожди
Люди бегут по барам, люди спешат уйти
Съемные комнаты, на душе опять снова скомкано
А может быть именно в этот день найду
`,
        translation: `A gloomy autumn evening, rain falling in the streets.
 People rush into bars; people hurry away.
 A rented room, and once again my soul feels crumpled.
 Maybe this is the very day I'll find
`,
      },
      matchaChai_chorus,
      {
        label: 'Verse 2',
        original: `Мне стало так высоко
Так далеко, так, как не бывало до этого
Ты мне говорил, что я глупа
И не поднимусь с этой бездны
`,
        translation: `I've risen so high,
 Gone so far—farther than ever before.
 You told me I was foolish
 And would never climb out of this abyss.
`,
      },
      {
        label: 'Bridge',
        original: `Слушай, слушай
Я не буду-буду твоей музой-музой
Разбирайся сам
Я лишь хочу дышать полной грудью
Попивать зеленую матчу чай
И мне все равно
На ваше мнение, о моем мнении, моем поведении
О моих выходках, моей постели, е
I am a grown ass woman, нахуй одобрение
`,
        translation: `Listen, listen:
 I won't be your muse, no, I won't be your muse.
 Figure it out yourself.
 I just want to breathe with all my strength,
 Sip my green matcha,
 And not care what you think
 What you think of my opinions, my behaviour,
 My wild ways, my bed.
 I'm a grown-ass woman; I don't need your approval.
`,
      },
      matchaChai_chorus,
    ],
  },

      {
    id: 'egizLebiz',
    title: 'Егіз лебіз',
    titleTranslated: 'Two hearts beating as one',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Көгімдегі айым дейін сені,
Көкшедегі қайың дейін сені.
Көзден ұшып жырақта жүрсең.
Шамшырағым күнім дейін сені,
Әнші бағым, гүлім дейін сені.
Өзіңмен бір жұмаққа кірсем.
`,
        translation: `Let me call you the moon in my sky,
 The birch tree of Kokshetau.
 Even when you fly far beyond my sight,
 I'll call you my guiding light, my sun.
 My garden of songs, my flower
 If only I could enter paradise with you.
`,
      },
      egizLebiz_chorus,
      {
        label: 'Verse 2',
        original: `Сағынғанда саялайын сені,
Аққуымдай аялайын сені.
Айдыныңда қалықта, жаным.
Бала қаздай мәпелейін сені,
Жаңа өмірге жетелейін сені,
Жаныма кел, жабықпа, жаным.
`,
        translation: `When I miss you, let me shelter you.
 I'll cherish you like my swan.
 Glide across your waters, my dear.
 I'll care for you like a little gosling,
 Lead you toward a new life.
 Come to me; don't be sad, my love.
`,
      },
      egizLebiz_chorus,
      {
        label: 'Verse 3',
        original: `Аппақ таңдай тілегім де өзің,
Алатаудай тірегім де өзің.
Жер бетінде қатар жүргенде.
Қоныстасып бірге күн кешейік,
Қол ұстасып бірге үндесейік.
Атар таңға, батар күндерге.
`,
        translation: `You are my wish, as bright as the dawn;
 You are my support, as mighty as the Alatau.
 While we walk together on this earth,
 Let us make a home side by side,
 Hold hands and speak as one,
 Through every sunrise and every sunset.
`,
      },
      egizLebiz_chorus,
    ],
  },
  
  {
    id: 'osenniPozhar',
    title: 'Осенний пожар',
    titleTranslated: 'Autumn fire',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Подкину еще сто водиле на чай
И сегодня превратится во вчера
Осень, пепел на стол. Прощай
Мне пора
Ты вспомнишь, как под мостом
Нас ветер сбивает с ног
Ты настолько в красном, что сливаешься с Москвой
Шмоток полный рюкзак, четырехсотый пустой—
Десять лет назад, а может быть и сто
Недобеленный потолок, кредит на диван
Удержаться бы мог
Но ты и выглядишь просто вау
`,
        translation: `I will give the driver another hundred as a tip,
 And today will turn into yesterday.
 Autumn, ashes on the table.
Goodbye
 It's time for me to go.
You'll remember how, beneath the bridge,
 The wind nearly swept us off our feet.
 You were dressed in so much red
 You seemed to blend into Moscow.
 A backpack full of clothes, an empty old car
 Was it ten years ago, or maybe a hundred?
 An unfinished ceiling, a sofa bought on credit…
 I might have held on,
 But you still look simply incredible.
`,
      },
      osenniPozhar_chorus,
      {
        label: 'Verse 2',
        original: `Непрочитанное письмо, первое колесо—
Это все не со мной, это все чей-то сон
Сладкая волна, не наблюдаем часов
Это был вроде май, жаль, не помню число
Жаль, не помню в упор, куда выходит окно
Оказалось домом дорожное полотно
Ветерком между арок, дымом на желтый парк
Пошлая надпись Love
`,
        translation: `An unread letter, the first wheel turning
 None of this feels like it happened to me;
 It all feels like someone else's dream.
 A sweet wave, and we never watched the time.
 It must have been May, though I can't recall the date.
 I can't even remember which way the window faced.
 The road turned out to be our home,
 A breeze between the arches, smoke above the yellow park,
 And a tasteless inscription: “Love.”
`,
      },
      osenniPozhar_chorus,
    ],
  },

    {
    id: 'menDepOila',
    title: 'Мен деп ойла',
    titleTranslated: 'Think of Me',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Сағындым ғой дедің ау, жаным маған,
Бұлт көрдің бе таулардан мамырлаған,
Сол менің ақжарыңнан ақжалыны,
Аулақтап ауылыңнан дамылдаған.
`,
        translation: `You said you missed me, didn't you, my love?
Have you seen the clouds drifting over the mountains?
That is the pure flame of my love for you,
Resting far away, beyond the village you call home.
`,
      },
      {
        label: 'Chorus',
        original: `Мен деп ойла, самал боп есип өткен,
Мен деп ойла, нөсерді есі кеткен,
Мен деп ойла, өзіңді әр күн сайын,
Мен деп ойла, өзіңді мен деп ойла.
`,
        translation: `Think of me as the breeze that softly passes by,
Think of me as the rain that pours with wild abandon.
Think of me, every single day,
Think of me — imagine yourself as me.
`,
      },
      {
        label: 'Verse 2',
        original: `Естідіңбе аспанның күрсінгенін,
Сол менің саған деген тылсым демім,
Ұйықтап жатса оянсын, ояу болса,
Күңіренген жанымды білсін дедім.
`,
        translation: `Have you heard the sky let out a sigh?
That is my soul's mysterious breath reaching out to you.
If you're asleep, may it wake you;
If you're awake, I want you to feel
The sorrow echoing deep within my soul.
`,
      },
      {
        label: 'Chorus x3',
        original: `Мен деп ойла, самал боп есип өткен,
Мен деп ойла, нөсерді есі кеткен,
Мен деп ойла, өзіңді әр күн сайын,
Мен деп ойла, өзіңді мен деп ойла.
`,
        translation: `Think of me as the breeze that softly passes by,
Think of me as the rain that pours with wild abandon.
Think of me, every single day,
Think of me — imagine yourself as me.
`,
      },
    ],
  },

  {
    id: 'qazirBolmasa',
    title: 'Qazir bolmasa',
    titleTranslated: 'If not now',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Сөзім таусылып көрген сайын
Жүрдім жасырып, болмай дайын
Сен маған ұнап жүргеніңді
Айта алмай, күттім мінсіз күнді
`,
        translation: `Every time I saw you, I ran out of words.
 I kept my feelings hidden, never ready.
 I couldn't tell you that I liked you,
 So I waited for the perfect day.
`,
      },
      qazirBolmasa_chorus,
      {
        label: 'Verse 2',
        original: `Келістің кешкі кездесуге
Байқалып уайым біздің көзде
Жүріс баяулап сенің көшеңде
Таусылып бар айтылған сөздер
Жүрек қағысы шалынып демге
Бұл сәтті күтіп сен де, мен де
`,
        translation: `You agreed to meet me in the evening.
 Worry was written in both our eyes.
 Our steps slowed as we walked down your street.
 We had run out of things to say.
 Our heartbeats stumbled over every breath—
 You and I had both been waiting for this moment.
`,
      },
      qazirBolmasa_chorus,
      {
        label: 'Outro',
        original: `Қазір болмаса, қашан мен айтам?
Сезімді іштей жасыра алмасам
Қазір болмаса, қашан мен айтам?
Сезімді іштей жасыра алмасам
`,
        translation: `If not now, when will I tell you?
 I can no longer keep these feelings inside.
 If not now, when will I tell you?
 I can no longer keep these feelings inside.
`,
      },
    ],
  },

  {
    id: 'kaitadan',
    title: 'Қайтадан',
    titleTranslated: 'Again',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Көзіңді жұм осы бір сәтте, е
Ештеңеге ойыңды бөлме, ай
Екі жүрек үнсіз қалсын лүпілімен
Айырылып қалатындаймын бір күні мен
`,
        translation: `Close your eyes for this moment.
 Let nothing distract your thoughts.
 Let two hearts fall silent, beating softly—
 I feel as though one day I might lose you.
`,
      },
      kaitadan_chorus,
      {
        label: 'Rap',
        original: `(Қалдырма мені)
Сөнген сезімді қайта өзгерт
Менімен қайта айтпа қиын деп
Сайтан алғыр, махаббат арадағы бар жараларды ұлғайтады
А, арақашықтық
Сенде болған сезімдерді қашыртты
Бірақ кімде кінə? Мұнда жүрек күмəн туды
Жүрек ауырады, сірә, ғашықпын
`,
        translation: `(Don't leave me.)
 Bring these faded feelings back to life.
 Don't tell me again that it is too hard.
 Damn it, love only deepens every wound between us.
 And distance—
 It drove away the feelings you once had.
 But whose fault is it? My heart has begun to doubt.
 My heart aches; perhaps I'm still in love.
`,
      },
      {
        label: 'Verse 2',
        original: `Суынған жүректің ызғары, аа, а-а-а, иә
Өз жүрегіммен жылытамын, е-е
Ал сен жанымда бол жай ғана, алаңдама
Менің əлемімде ешкім жоқ, өзің ғана
`,
        translation: `The chill of a heart grown cold…
 I'll warm it with my own.
 Just stay beside me, don't worry.
 In my world, there is no one but you.
`,
      },
      kaitadan_chorus,
      {
        label: 'Rap',
        original: `Жүрегім жабық тым, мен жалықтым, а
Сәулесін сыйлашы жарықтың
Іштей жанып тұрмын, түшш, тоқтатшы мені
Өртеніп барады жаным, ауыр маған
Аламын демімді сенен
Осы шақта жүре өткенге сенем
Бұрынға қателік біткен мәселе
Тосқауыл істеме, әйтпесе
`,
        translation: `My heart is closed; I'm tired.
 Give me a ray of light.
 I'm burning inside—please, make it stop.
 My soul is going up in flames; it hurts.
 I draw my breath from you.
 In this moment, I still believe in what we had.
 The mistakes of the past are behind us.
 Don't stand in our way, or else…
`,
      },
      {
        label: 'Bridge',
        original: `Саған қалай мен айта алам'?
Осының бәрін айтпай қалай мен жай табам? Айтшы!
Сол алғашқы жалынды бірге
Жағайықшы қайтадан, өтінем!
`,
        translation: `How can I tell you all of this?
 How can I find peace without saying it? Tell me!
 Together, let's bring that first flame
 Back to life again, I beg you.
`,
      },
      kaitadan_chorus,
    ],
  },

  {
    id: 'nuzhna',
    title: 'Нужна',
    titleTranslated: 'I need you',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Давай мы убежим
 Вдвоём на край земли
 Никто и никогда
 Нас не найдет
 Искал тебя в других
 Но мне нужна лишь ты
 Как солнце и луна
 Ты мне нужна
`,
        translation: `Let’s run away together,
 Just you and me, beyond the edge of the world.
 No one, not ever,
 Will ever find us there.
I’ve searched for you in others,
 But you’re the only one I need.
 Like the sun and moon,
 I need you endlessly.
`,
      },
      nuzhna_chorus,
      {
        label: 'Verse 2',
        original: `Возьми меня, возьми
 К себе на один миг
 И я продлю его
 Хоть навсегда
 Плевать на остальных
 Я здесь
 Пока здесь ты
 Три слова на губах
 Ты мне нужна
`,
        translation: `Take me in, just hold me close,
 Even if it’s only for a moment.
 And I’ll make that moment last
 As if forever had begun.
I don’t care about the others,
 I’m right here,
 As long as you are here.
 Three words upon my lips:
 I need you.
`,
      },
      nuzhna_chorus,
      {
        label: 'Bridge x2',
        original: `Ты нужна для меня как день
 Ты нужна для меня как ночь
 Ты нужна для меня как свет
 Ты нужна как жизнь
 Ты нужна как воздух
`,
        translation: `You’re my daylight,
 You’re my night.
 You’re my light,
 You’re my life.
 You’re the air I breathe.
`,
      },
      nuzhna_chorus,
    ],
  },

  {
    id: 'kuiim',
    title: 'Kúıіm',
    titleTranslated: 'State of mind',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Әлемді мың зерттеп болып,
 Бірақ әлі құпия мол,
 Жетеді.
Дауыл терезе қағып
 болса да, аспан сұр бұлт
 Ерке қыз
Ерекше сезім көп,
 Даусыңды естісем.
 Сенің мінезің бар —
 Ұнайды не істесең де.
Күндіз-түні нұр бол,
 Болса да аспан сұр бұлт
 Ерке қыз
`,
        translation: `I have searched the world a thousand times,
 Yet so many secrets remain.
 Even when the storm beats against the window
 And grey clouds cover the sky,
 You are still my sweet girl.
There is so much I feel
 Whenever I hear your voice.
 You have a way about you
 I love everything you do.
 Shine through the day and night,
 Even when grey clouds fill the sky,
 My sweet girl.
`,
      },
      kuiim_chorus,
      {
        label: 'Verse 2',
        original: `Үмітім үзіліп, таптадым,
 Мекендеп түрлі мекен.
 Іздедім, бірақ та таппадым.
 Мен енді қойдым нүкте.
Қуаныш сәттер көп,
 Ұмытпай, еске сал,
 Далада болса суық,
 Ол мені жылытад.
 Біздің өмір — кино
 Басты рөлде мен және ол
 Екеуіміз.
`,
        translation: `My hopes were shattered; I wandered,
 Making a home in different places.
 I searched, but never found what I was looking for.
 Now I have finally drawn a line.
There are so many moments of joy
 Don't forget them; remind me.
 Even when the world outside is cold,
 You are the warmth that keeps me going.
 Our life is a movie,
 And the leading roles belong to us
 The two of us.
`,
      },
      kuiim_chorus,
    ],
  },

  {
    id: 'untilIFoundYou',
    title: 'Until I found you',
    titleTranslated: '',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Georgia, wrap me up in all your
 I want you in my arms
 Oh, let me hold you
 I'll never let you go again like I did
 Oh, I used to say
`,
        translation: ``,
      },
      {
        label: 'Chorus',
        original: `I would never fall in love again until I found her
 I said, "I would never fall unless it's you I fall into"
 I was lost within the darkness, but then I found her
 I found you
`,
        translation: ``,
      },
      {
        label: 'Verse 2',
        original: `Georgia, pulled me in, I asked to
 Love her once again
 You fell, I caught you
 I'll never let you go again like I did
 Oh, I used to say
`,
        translation: ``,
      },
      {
        label: 'Chorus x2',
        original: `I would never fall in love again until I found her
 I said, "I would never fall unless it's you I fall into"
 I was lost within the darkness, but then I found her
 I found you
`,
        translation: ``,
      },
    ],
  },

  {
    id: 'lovePoem',
    title: 'Love poem',
    titleTranslated: '',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Әлемді мың зерттеп болып,
 Бірақ әлі құпия мол,
 Жетеді.
Дауыл терезе қағып
 болса да, аспан сұр бұлт
 Ерке қыз
Ерекше сезім көп,
 Даусыңды естісем.
 Сенің мінезің бар —
 Ұнайды не істесең де.
Күндіз-түні нұр бол,
 Болса да аспан сұр бұлт
 Ерке қыз
`,
        translation: `I have searched the world a thousand times,
 Yet so many secrets remain.
 Even when the storm beats against the window
 And grey clouds cover the sky,
 You are still my sweet girl.
There is so much I feel
 Whenever I hear your voice.
 You have a way about you
 I love everything you do.
 Shine through the day and night,
 Even when grey clouds fill the sky,
 My sweet girl.
`,
      },
      {
        label: 'Verse 2',
        original: `Үмітім үзіліп, таптадым,
 Мекендеп түрлі мекен.
 Іздедім, бірақ та таппадым.
 Мен енді қойдым нүкте.
Қуаныш сәттер көп,
 Ұмытпай, еске сал,
 Далада болса суық,
 Ол мені жылытад.
 Біздің өмір — кино
 Басты рөлде мен және ол
 Екеуіміз.
`,
        translation: `My hopes were shattered; I wandered,
 Making a home in different places.
 I searched, but never found what I was looking for.
 Now I have finally drawn a line.
There are so many moments of joy
 Don't forget them; remind me.
 Even when the world outside is cold,
 You are the warmth that keeps me going.
 Our life is a movie,
 And the leading roles belong to us
 The two of us.
`,
      },
    ],
  },

  {
    id: 'sheker',
    title: 'Sheker',
    titleTranslated: 'Sugar',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Қай қалтамда жоғалып кетседе құрысын бағанағы шаң-тозаң.
Мен бәріне ризамын, бәрі өз бабымен тфай-тфай-тфай, тағы не дейсің енді.
Жүзейін самғайын, қөңіл-күйіме осы өленім лайық, толғанайын.
Қосыл толқыныма, карап тұрма. Мә менің отыным сенің отыңа!
`,
        translation: `Let that old dust disappear, wherever it may have gone.
 I'm grateful for it all; everything happens in its own time.
 May I swim, may I soar—this song fits my mood.
 Come ride my wave; don't just stand and watch.
 Here, let my fire join yours!
`,
      },
      sheker_chorus,
      {
        label: 'Verse 2',
        original: `Бері кел, қазiр мен сені үйретем.
Үш дөңгелек, баяғы балдырған.
Уақыт тығыз, бірақ саған орын қалдырғанмын.
Не жасырайын, берерім қолымда, мә бөпетайым. Ал, абайлап ал, адастырайын. Мен де дайынмын. Керемет мереке!
`,
        translation: `Come here, I'll show you how.
 Three wheels, just like the old days of childhood.
 Time is short, but I've saved you a place.
 Why hide it? I've got something to give you, sweetheart.
 Take it carefully—I'll lead you astray.
 I'm ready, too.
 What a wonderful celebration!
`,
      },
      sheker_chorus,
      {
        label: '',
        original: `Шекер - шекер, мыңшағала, құй шарап.
`,
        translation: `Sugar, sugar, a thousand seagulls—pour the wine.
`,
      },
      {
        label: 'Verse 3',
        original: `Жүздеген мысық мяуылдайды майысып,
Бірақ Дарекенті сабырлы, Дарекенті қайсар.
Ешқайсысын танымайм, сондықтан жоламайм.
мен де пенде, үйткені сендей деңгей, бәрі .
Кербез тербел, жібек йығыңнан төгіліп, тігісінен сөгіліп.
Көзілдірікті мұрныма ілдіріп,
теңселем білдіртпей жүргенімді не бүлдіріп.
`,
        translation: `Hundreds of cats meow and sway,
 But Darekent stays calm, Darekent stands strong.
 I don't know any of them, so I keep my distance.
 I'm only human, just like you—we're all on the same level.
 Sway with grace, silk slipping from your shoulders,
 The seams coming undone.
 I perch my glasses on my nose,
 And sway without letting anyone notice.
`,
      },
      sheker_chorus,
      {
        label: 'Verse 4',
        original: `Қай қалтамда жоғалып кетседе құрысын бағанағы шаң-тозаң.
Мен бәріне ризамын, бәрі өз бабымен тфай-тфай-тфай, тағы не дейсің енді.
Жүзейін самғайын, қөңіл-күйіме осы өленім лайық, толғанайын. Қосыл толқыныма, карап тұрма. Мә менің отыным сенің отыңа!
`,
        translation: `Let that old dust disappear, wherever it may have gone.
 I'm grateful for it all; everything happens in its own time.
 May I swim, may I soar—this song fits my mood.
 Come ride my wave; don't just stand and watch.
 Here, let my fire join yours!
`,
      },
      sheker_chorus,
    ],
  },

  {
    id: 'almatynynTunderi',
    title: 'Алматының түндері-ай',
    titleTranslated: 'An Almaty night',
    artist: '',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Ажарлы көркің сұлу жаным.
Бір көріп ұнап қалдың.
Жүрегім сезген жылу барын.
Бір көріп сыр ақтардым.
 
Тайдырды жүзің ұяң жаным.
Қолымда дірілдедің.
Алматының түнін қиялдадым.
Бақытты күнім едің.
`,
        translation: `Your beauty took my breath away, my dear.
 I liked you from the very first glance.
 My heart could feel the warmth inside you.
 At first sight, I opened up my soul.

 Your shy face made me lose my balance, my dear.
 Your hands trembled in mine.
 I dreamed of an Almaty night—
 You were my happiest day.
`,
      },
      {
        label: 'Сhorus',
        original: `Алматының түндері-ай.
Алатаудың салкын самалындай.
Алматының түндері-ай.
Ұйқымды ұрлап сен алатындай.
`,
        translation: `Oh, the nights of Almaty,
 Like the cool breeze from the Alatau.
 Oh, the nights of Almaty,
 You could steal my sleep away.
`,
      },
      {
        label: 'Verse 3',
        original: `Ласкают воспоминания
Любви далекой моей,
И сердце греется тайной
Алматинских ночей.
 
Ты был моим откровением,
Творцом нечаянных грёз.
Твоим была отражением я,
Когда летели до звёзд!
`,
        translation: `Memories of a distant love
 Gently soothe me,
 And my heart is warmed by the secret
 Of Almaty's nights.
You were my confession,
 The maker of unexpected dreams.
 I was your reflection
 As we soared among the stars.
`,
      },
      {
        label: 'Сhorus x3',
        original: `Алматының түндері-ай.
Алатаудың салкын самалындай.
Алматының түндері-ай.
Ұйқымды ұрлап сен алатындай.
`,
        translation: `Oh, the nights of Almaty,
 Like the cool breeze from the Alatau.
 Oh, the nights of Almaty,
 You could steal my sleep away.
`,
      },
      sheker_chorus,
      {
        label: 'Verse 4',
        original: `Қай қалтамда жоғалып кетседе құрысын бағанағы шаң-тозаң.
Мен бәріне ризамын, бәрі өз бабымен тфай-тфай-тфай, тағы не дейсің енді.
Жүзейін самғайын, қөңіл-күйіме осы өленім лайық, толғанайын. Қосыл толқыныма, карап тұрма. Мә менің отыным сенің отыңа!
`,
        translation: `Let that old dust disappear, wherever it may have gone.
 I'm grateful for it all; everything happens in its own time.
 May I swim, may I soar—this song fits my mood.
 Come ride my wave; don't just stand and watch.
 Here, let my fire join yours!
`,
      },
      sheker_chorus,
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
