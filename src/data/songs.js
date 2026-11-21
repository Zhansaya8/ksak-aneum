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
const ayta_chorus = {
  label: 'Chorus',
  original: `О, не болды, не болды, не болды, не болды саған?
Мұңаюдың жоқ себебі, себебі жоқ!
О, не болды, не болды, не болды, не болды саған?
Өмір – ұзақ жол, жоғалтып алма өзіңді осы жолда!
Жүрегіңнен сұра, басқадан сұрама!
Сүріндің бе – шыда!
Деп айтып еді мама...
Кетер өтіп бұл да,
Үміттің шырағы қолыңда!
Айта берсін, айта берсін жұрт!
Айта берсін, айта берсін...
Айта берсін, айта берсін жұрт!
Айта берсін, айта берсін...
Айта берсін, айта берсін жұрт!`,
  translation: `Oh, what's wrong, what's wrong, what's wrong, what's wrong with you?
There's no reason to be sad — no reason at all!
Oh, what's wrong, what's wrong, what's wrong, what's wrong with you?
Life is a long road — don't lose yourself along the way!
Ask your own heart, don't ask anyone else!
Stumbled? Hold on!
That's what Mama used to say...
This too shall pass,
The lamp of hope is in your hands!
Let them talk, let people talk!
Let them talk, let them talk...
Let them talk, let people talk!
Let them talk, let them talk...
Let them talk, let people talk!`,
};

const qazaqpyn_chorus = {
  label: 'Chorus',
  original: `Бұл кім десең? Мен қазақпын,
мың өліп, мың тірілген!
Көк байрақ туым бар,
елім бар, жерім бар, оооо!
Бұл кім десең? Мен қазақпын,
мың өліп, мың тірілген!
Көк байрақ туым бар,
елім бар, жерім бар, оооо!`,
  translation: `Who is this, you ask? I am Kazakh,
who died a thousand times and rose a thousand times!
I have my blue flag,
I have my nation, I have my land, oh!
Who is this, you ask? I am Kazakh,
who died a thousand times and rose a thousand times!
I have my blue flag,
I have my nation, I have my land, oh!`,
};

export const songs = [
  /* ───────────────────────── SONG 1 ───────────────────────── */
  {
    id: 'ayta-bersin',
    title: 'Айта берсін',
    titleTranslated: 'Let Them Talk',
    artist: 'Жанар Дұғалова (Zhanar Dugalova)',
    performers: '', // PASTE HERE: e.g. 'Vocals: Aruzhan · Guitar: Dias'
    sections: [
      {
        label: 'Verse 1',
        original: `Сен өзіңді алдайсың,
Арманға жете алмайсың, дейді олар.
Шын бақыттан шалғайсың,
Жұлдыз болып жанбайсың,
Шыңдарға шыға алмайсың,
Сындарға шыдамайсың, дейді олар.
Бұл әлем өзгермейді,
Қолыңнан түк келмейді, дейді олар.
Талпынсаң да сен мейлі,
Тағдыр жеңіс бермейді, дейді.
Сен мындайсың, сондайсың,
Ең бірінші болмайсың, дейді олар.`,
        translation: `"You're only fooling yourself,
You'll never reach your dream," they say.
"You're far from real happiness,
You'll never shine like a star,
You'll never climb to the peaks,
You can't stand up to the trials," they say.
"This world isn't going to change,
You can't do a single thing," they say.
"Strive as hard as you like,
Fate won't hand you a victory," they say.
"You're like this, you're like that,
You'll never come first," they say.`,
      },
      ayta_chorus,
      {
        label: 'Verse 2',
        original: `Сенімен санаспайды,
Ештеңе жараспайды, дейді олар.
Сөз қылады, тынбайды:
«Көрмеп едік мұндайды,
Жанталасып қоймайды,
Өзін кім деп ойлайды?» дейді олар.
Құлақ аспа бәріне,
Алда талай әлі де белес болар.
Жасқанбашы, жасыма,
Бақыт құсы басыңа келіп қонар!
Баса бер тек ілгері,
Барлық қиын күндерің артта қалар!`,
        translation: `They don't take you seriously,
"Nothing suits her," they say.
They gossip and never stop:
"We've never seen anything like it,
She just won't stop trying so hard,
Who does she think she is?" they say.
Don't listen to any of them,
Many more summits still lie ahead.
Don't be afraid, don't lose heart,
The bird of happiness will come and land on you!
Just keep pushing forward,
All your hard days will be left behind!`,
      },
      ayta_chorus,
      {
        label: 'Final',
        original: `Сен өзіңді алдайсың,
Арманға жете алмайсың, дейді олар.
О, не болды, не болды, не болды, не болды саған?
Жүрегіңнен сұра, басқадан сұрама!
Сүріндің бе – шыда!
Деп айтып еді мама...
Кетер өтіп бұл да,
Үміттің шырағы қолыңда!
Айта берсін, айта берсін жұрт!
Жүрегіңнен сұра, басқадан сұрама!
Сүріндің бе – шыда!
Деп айтып еді мама...
Кетер өтіп бұл да,
Үміттің шырағы қолыңда!
Айта берсін, айта берсін жұрт!
Айта берсін, айта берсін...
Айта берсін, айта берсін жұрт!
Айта берсін, айта берсін...
Айта берсін, айта берсін жұрт!`,
        translation: `"You're only fooling yourself,
You'll never reach your dream," they say.
Oh, what's wrong, what's wrong, what's wrong, what's wrong with you?
Ask your own heart, don't ask anyone else!
Stumbled? Hold on!
That's what Mama used to say...
This too shall pass,
The lamp of hope is in your hands!
Let them talk, let people talk!
Ask your own heart, don't ask anyone else!
Stumbled? Hold on!
That's what Mama used to say...
This too shall pass,
The lamp of hope is in your hands!
Let them talk, let people talk!
Let them talk, let them talk...
Let them talk, let people talk!
Let them talk, let them talk...
Let them talk, let people talk!`,
      },
    ],
  },

  /* ───────────────────────── SONG 2 ───────────────────────── */
  // NOTE for teammates: lyrics as you sent them, with broken lines re-joined and
  // obvious typos fixed (журегим → жүрегім, білмейсін → білмейсің, байрак → байрақ…).
  // A few lines had typos in the source text, so their translation is a best
  // reading — please double-check the lines marked ⟨?⟩ in the translation.
  {
    id: 'men-qazaqpyn',
    title: 'Мен қазақпын',
    titleTranslated: 'I Am Kazakh',
    artist: 'Ерболат Құдайбергенов (Yerbolat Kudaibergenov)',
    performers: '', // PASTE HERE
    sections: [
      {
        label: 'Verse 1',
        original: `Мен қазақпын, мың өліп, мың тірілген,
Жүрегіңмен таныстым мың тіліммен.
Жылағанда жүрегім күн тұтылып,
Қуанғанда күлкімнен түн түрілген.
Руым көп, солардың ақ Тарғындай,
Мінезім бар таулардың қақпарындай,
Жырым бар бабалардың хаттарындай,
Әжімім бар бейнеттің таптарындай.
Қашан қазақ атандым мен азандап,
Әлі күнге дейін білмейсің, ей адамзат!
Адамзат есіміне береді бала жасын,
Құлпытасты жұлқыған кей азамат.`,
        translation: `I am Kazakh — who died a thousand times and rose a thousand times,
I came to know your heart through a thousand tongues.
When I wept, the sun went dark in eclipse,
When I rejoiced, my laughter rolled the night away.
My clans are many, each like the noble hero Targyn,
My nature is like the stone ramparts of the mountains,
My songs are like letters from my ancestors,
My wrinkles are like the marks that hardship left.
When was I first named Kazakh, with a call to prayer?
To this very day you do not know, O humankind!
⟨?⟩ Humankind gives its youth to keep its name alive,
⟨?⟩ Like the brave ones who shook the ancient gravestones.`,
      },
      {
        label: 'Pre-Chorus',
        original: `Қару жолда, малы терде, бала белде,
Уайым төрі, теңіз қойы, бара берме, оооо!
Жігер керек, жыр керек, жалау керек,
Қайрат түбі боп төгіл қара елге, оооо!
Па, шіркін!`,
        translation: `Weapons on the road, herds on the pasture, children at our side,
⟨?⟩ Worry in the place of honour — don't keep drifting on, oh!
We need courage, we need song, we need a banner,
Pour out like the deepest strength upon your people, oh!
Ah, how glorious!`,
      },
      qazaqpyn_chorus,
      {
        label: 'Interlude',
        original: `Па, шіркін! Япырмай!`,
        translation: `Ah, how glorious! Oh my!`,
      },
      {
        label: 'Verse 2',
        original: `Мен қазақпын, мың өліп, мың тірілген,
Жүрегіңмен таныстым мың тіліммен.
Жылағанда жүрегім күн тұтылып,
Қуанғанда күлкімнен түн түрілген.
Мен қазақпын, қырғыз ұлы туысқан,
Бірге тартқан тарланның құйысқанын.
Арамызда қара көз бір қыз, бәлкім,
Бөліп берген егізге уыс нанын.
Мен қазақпын, бір биік емеспін мен,
Еуропада, Азияда емеспін мен,
Маралықтың жетінші материгі,
Кей бір барыс жақ адаммен терістім мен.
Мен ҚАЗАҚПЫН — байтақ елім,
Қайта тудым, өмірге қайта келдім!
Мен мұндағы тірілдім мәңгі өлмеске,
Айта бергім келеді, айта бергім!`,
        translation: `I am Kazakh — who died a thousand times and rose a thousand times,
I came to know your heart through a thousand tongues.
When I wept, the sun went dark in eclipse,
When I rejoiced, my laughter rolled the night away.
I am Kazakh, brother to the Kyrgyz people,
Together we held the reins of the same swift steed.
Between us, perhaps, a dark-eyed girl
Once split a handful of bread between twins.
I am Kazakh — I am no single summit,
I am neither only Europe nor only Asia,
⟨?⟩ I am the seventh continent of the free steppe,
⟨?⟩ Some, like snow leopards, I have stood apart from.
I AM KAZAKH — my vast homeland,
I was born again, I came back to life!
Here I rose again, never to die,
I want to keep saying it, keep saying it!`,
      },
      qazaqpyn_chorus,
    ],
  },

  /* ─────────────── SONG 3 — PLACEHOLDER (replace me) ─────────────── */
  // Demo song written just to show the layout. Replace with a real song,
  // or delete this whole { ... } block.
  {
    id: 'seul-tunderi',
    title: 'Сеул түндері',
    titleTranslated: 'Seoul Nights',
    artist: 'Placeholder · KSAK Band',
    performers: '',
    sections: [
      {
        label: 'Verse 1',
        original: `Сеулдің шамдары жанады түнде,
Ойым ұшады туған жерге.
Хан өзені ағады баяу,
Жүрегімде — дала мен тау.`,
        translation: `Seoul's lights are burning through the night,
My thoughts fly back to my homeland.
The Han River flows slowly by,
In my heart — the steppe and the mountains.`,
      },
      {
        label: 'Chorus',
        original: `Алыста болсам да, сен менімен,
Әнім ұшсын жұлдыздармен.
Сеул түндері, Алматы таңы —
Бір жүректе екі отаным.`,
        translation: `Even though I'm far away, you are with me,
Let my song fly up with the stars.
Seoul nights, Almaty mornings —
Two homelands in a single heart.`,
      },
      {
        label: 'Verse 2',
        original: `Метрода келем, құлақта әуен,
Анамның даусы — ең жылы әуен.
Досым жанымда, күлкі мен жыр,
Біз бірге болсақ, бәрі де бір.`,
        translation: `Riding the subway, music in my ears,
My mother's voice — the warmest tune of all.
My friend beside me, laughter and song,
When we're together, everything's alright.`,
      },
      {
        label: 'Chorus',
        original: `Алыста болсам да, сен менімен,
Әнім ұшсын жұлдыздармен.
Сеул түндері, Алматы таңы —
Бір жүректе екі отаным.`,
        translation: `Even though I'm far away, you are with me,
Let my song fly up with the stars.
Seoul nights, Almaty mornings —
Two homelands in a single heart.`,
      },
    ],
  },

  /* ─────────────── SONG 4 — PLACEHOLDER (replace me) ─────────────── */
  {
    id: 'dala-aueni',
    title: 'Дала әуені',
    titleTranslated: 'Melody of the Steppe',
    artist: 'Placeholder · KSAK Band',
    performers: '',
    sections: [
      {
        label: 'Intro',
        original: `Домбыра үні...`,
        translation: `The sound of the dombra...`,
      },
      {
        label: 'Verse 1',
        original: `Кең даланың самалы
Домбыраның сазын әкелер.
Ата-бабам аманаты
Әр жырымда қайта жаңғырар.`,
        translation: `The breeze of the wide steppe
Carries the dombra's tune to me.
The legacy my ancestors left
Comes alive again in every song.`,
      },
      {
        label: 'Chorus',
        original: `Ән сал, досым, ән сал,
Түн ұзақ, жол алыс.
Ән сал, досым, ән сал,
Әнде — біздің тамыр, біздің ырыс.`,
        translation: `Sing, my friend, sing,
The night is long, the road is far.
Sing, my friend, sing,
In song live our roots and our fortune.`,
      },
      {
        label: 'Bridge',
        original: `Тұлпар шауып, жел соғып,
Аспан көк, жер кең.
Қай жерде жүрсем де,
Даламның әні — менімен.`,
        translation: `Horses racing, the wind blowing,
The sky is blue, the land is wide.
Wherever in the world I go,
My steppe's song stays with me.`,
      },
      {
        label: 'Outro',
        original: `Ән сал, досым, ән сал...`,
        translation: `Sing, my friend, sing...`,
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
