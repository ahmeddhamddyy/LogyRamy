/**
 * SINGLE SOURCE OF CONTENT for the whole site.
 * Swap any photo, video, stat, match result or string here — no component edits.
 *
 * Every bilingual string is { en, ar }.
 * Prototype figures are clearly labelled on the page until official records are supplied.
 */

// REPLACE — swap these imports for Logy's real photography.
import heroAction from "@/assets/hero-action.jpg";
import portraitIntro from "@/assets/portrait-intro.jpg";
import portraitStory from "@/assets/portrait-story.jpg";
import galleryPodium from "@/assets/gallery-podium.jpg";
import galleryBall from "@/assets/gallery-ball.jpg";
import galleryTraining from "@/assets/gallery-training.jpg";

export type Lang = "en" | "ar";
export type L = Record<Lang, string>;

export const images = {
  heroAction,
  portraitIntro,
  portraitStory,
  galleryPodium,
  galleryBall,
  galleryTraining,
};

export const athlete = {
  firstName: { en: "Logy", ar: "لوجي" } as L,
  lastName: { en: "Ramy", ar: "رامي" } as L,
  tagline: {
    en: "Ten-Pin Bowler · Egypt National Team",
    ar: "لاعبة بولينج · منتخب مصر",
  } as L,
  email: "hello@logyramy.com", // REPLACE
  location: { en: "Cairo, Egypt", ar: "القاهرة، مصر" } as L,
  socials: [
    { label: "Instagram", href: "https://instagram.com" }, // REPLACE
    { label: "Facebook", href: "https://facebook.com" }, // REPLACE
    { label: "YouTube", href: "https://youtube.com" }, // REPLACE
  ],
};

export const nav: { id: string; label: L }[] = [
  { id: "story", label: { en: "Story", ar: "القصة" } },
  { id: "egypt", label: { en: "Team Egypt", ar: "منتخب مصر" } },
  { id: "why", label: { en: "Why Bowling", ar: "لماذا البولينج" } },
  { id: "scorecard", label: { en: "Scorecard", ar: "سجل النقاط" } },
  { id: "results", label: { en: "Results", ar: "النتائج" } },
  { id: "gallery", label: { en: "Gallery", ar: "الصور" } },
  { id: "contact", label: { en: "Contact", ar: "تواصل" } },
];

export const hero = {
  watch: { en: "Watch highlights", ar: "شاهد الأبرز" } as L,
  sponsor: { en: "Sponsorship enquiries", ar: "طلبات الرعاية" } as L,
  scrollCue: { en: "Scroll", ar: "انزل" } as L,
};

export const intro = {
  statement: {
    en: "A quiet approach, a long lane, and one decision made at speed — this is a sport of composure, and she has made composure her signature.",
    ar: "اقتراب هادئ، ممشى طويل، وقرار واحد يُتخذ بسرعة.", // TRANSLATE
  } as L,
};

export const story = {
  eyebrow: { en: "Her Story", ar: "قصتها" } as L,
  title: { en: "From a borrowed ball to the national kit", ar: "من كرة مستعارة إلى قميص المنتخب" } as L,
  paragraphs: [
    {
      en: "Logy Ramy began bowling in Cairo as a teenager, on house equipment and borrowed shoes, in a centre where the lanes were rarely quiet. What kept her coming back was not the noise but the repetition: the same four steps, the same release, the same target — repeated until the outcome stopped being luck.",
      ar: "بدأت لوجي رامي البولينج في القاهرة.", // TRANSLATE
    },
    {
      en: "Structured competition followed, bringing sharper coaching, deeper lane-reading and a training week built around accuracy rather than power. Her progress earned her selection for the Egyptian national bowling team.",
      ar: "تطورت رحلتها مع المنافسات المنظمة والتدريب الدقيق، حتى نالت شرف الانضمام إلى منتخب مصر للبولينج.",
    },
    {
      en: "Since then, every tournament has become another chance to carry Egypt's colours with focus, pride and the calm confidence that defines her game.",
      ar: "ومنذ ذلك الحين، أصبحت كل بطولة فرصة جديدة لتمثيل ألوان مصر بالتركيز والفخر والثقة الهادئة التي تميز أداءها.",
    },
  ] as L[],
  pullQuote: {
    en: "Bowling looks like it rewards strength. It rewards patience.",
    ar: "يبدو أن البولينج يكافئ القوة، لكنه يكافئ الصبر.", // TRANSLATE
  } as L,
};

export const teamEgypt = {
  eyebrow: { en: "One Flag. One Team.", ar: "علم واحد. فريق واحد." } as L,
  title: { en: "Bowling for Egypt", ar: "ألعب من أجل مصر" } as L,
  egypt: {
    name: { en: "Egypt National Team", ar: "منتخب مصر" } as L,
    body: {
      en: "Wearing Egypt's colours means competing for something larger than the score. Logy meets every new lane, oil pattern and opponent with discipline — carrying the precision of her game and the pride of her country into every frame.",
      ar: "ارتداء ألوان مصر يعني المنافسة من أجل ما هو أكبر من النتيجة. تواجه لوجي كل ممشى ونمط زيت ومنافس جديد بانضباط، حاملة دقة لعبها وفخر بلدها في كل جولة.",
    } as L,
    facts: [
      { label: { en: "Team", ar: "الفريق" } as L, value: "Egypt" },
      { label: { en: "Discipline", ar: "التخصص" } as L, value: "Ten-pin bowling" },
      { label: { en: "Home", ar: "البلد" } as L, value: "Cairo, Egypt" },
    ],
  },
};

export const why = {
  eyebrow: { en: "In Her Words", ar: "بكلماتها" } as L,
  quotes: [
    {
      en: "I fell in love with the sound before I loved the sport — that low roll down the lane, and then the silence just before the pins go.",
      ar: "أحببت الصوت قبل أن أحب اللعبة.", // TRANSLATE
    },
    {
      en: "Other sports asked me to react to someone else. Bowling asked me to be honest with myself. Nobody is guarding you. The lane tells you exactly what you did.",
      ar: "الرياضات الأخرى تطلب منك أن تتفاعل مع خصم.", // TRANSLATE
    },
    {
      en: "That is why I chose it. Every frame is a chance to be precise again.",
      ar: "لهذا اخترتها.", // TRANSLATE
    },
  ] as L[],
  // REPLACE — optional audio or talking-head clip of her saying this.
  clip: {
    kind: "video" as "video" | "audio",
    src: "", // e.g. "/media/why-i-bowl.mp4" or a YouTube id via videos below
    label: { en: "Hear it in her voice", ar: "اسمعها بصوتها" } as L,
  },
};

export type Stat = { label: L; value: number | null; suffix?: string; mark?: "X" | "/"; note?: string };

export const scorecard: Stat[] = [
  { label: { en: "Average score", ar: "المعدل" }, value: 187 },
  { label: { en: "High game", ar: "أعلى لعبة" }, value: 267 },
  { label: { en: "High series", ar: "أعلى سلسلة" }, value: 712 },
  { label: { en: "Clean games", ar: "ألعاب نظيفة" }, value: 18, mark: "X" },
  { label: { en: "Podium finishes", ar: "منصات التتويج" }, value: 9, mark: "X" },
  { label: { en: "Tournaments", ar: "البطولات" }, value: 34 },
  { label: { en: "Years competing", ar: "سنوات المنافسة" }, value: 7, mark: "/" },
  { label: { en: "Best national finish", ar: "أفضل مركز محلي" }, value: 2 },
];

export type Match = {
  date: string; // ISO date — REPLACE with real dates
  year: number;
  tournament: L;
  location: L;
  placement: L;
  score: string;
  team: "national";
  highlight?: boolean;
};

// Prototype timeline — replace with official tournament records when supplied.
export const matches: Match[] = [
  {
    date: "2025-11-14",
    year: 2025,
    tournament: { en: "Egypt National Selection Series", ar: "سلسلة اختبارات منتخب مصر" },
    location: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
    placement: { en: "Finalist", ar: "النهائي" },
    score: "1,112 pins",
    team: "national",
    highlight: true,
  },
  {
    date: "2025-05-02",
    year: 2025,
    tournament: { en: "Mediterranean Training Open", ar: "بطولة المتوسط التدريبية المفتوحة" },
    location: { en: "Alexandria, Egypt", ar: "الإسكندرية، مصر" },
    placement: { en: "Top 8", ar: "أفضل ٨" },
    score: "1,084 pins",
    team: "national",
  },
  {
    date: "2024-10-19",
    year: 2024,
    tournament: { en: "Arab Bowling Championship", ar: "البطولة العربية للبولينج" },
    location: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
    placement: { en: "Semi-finalist", ar: "نصف النهائي" },
    score: "1,097 pins",
    team: "national",
  },
  {
    date: "2024-03-08",
    year: 2024,
    tournament: { en: "Egypt Ranking Finals", ar: "نهائيات تصنيف مصر" },
    location: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
    placement: { en: "Silver", ar: "فضية" },
    score: "1,126 pins",
    team: "national",
    highlight: true,
  },
  {
    date: "2023-09-22",
    year: 2023,
    tournament: { en: "National Team Trials", ar: "تجارب المنتخب الوطني" },
    location: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
    placement: { en: "Qualified", ar: "تأهلت" },
    score: "1,041 pins",
    team: "national",
  },
];

export const achievements = [
  { value: "Team Egypt", label: { en: "National selection", ar: "اختيار المنتخب" } as L },
  { value: "9", label: { en: "Podium finishes", ar: "منصات التتويج" } as L },
  { value: "267", label: { en: "Prototype high game", ar: "أعلى لعبة تجريبية" } as L },
  { value: "34", label: { en: "Tournament starts", ar: "مشاركات البطولات" } as L },
  { value: "Egypt", label: { en: "The flag she carries", ar: "العلم الذي تحمله" } as L },
];

export type VideoCategory = "Matches" | "Technique" | "Highlights" | "Training" | "Interviews";

export type Video = {
  id: string;
  category: VideoCategory;
  title: L;
  description: L;
  poster: string;
  youtubeId?: string; // REPLACE with real ids
  src?: string; // or a local file in /public/media
};

export const videoCategories: VideoCategory[] = [
  "Matches",
  "Technique",
  "Highlights",
  "Training",
  "Interviews",
];

// REPLACE — placeholder embeds so the gallery is functional.
export const videos: Video[] = [
  {
    id: "v1",
    category: "Highlights",
    title: { en: "Season highlight reel", ar: "أبرز لقطات الموسم" },
    description: { en: "A short cut of her best frames this season.", ar: "لقطات مختارة." },
    poster: images.heroAction,
    youtubeId: "aqz-KE-bpKQ",
  },
  {
    id: "v2",
    category: "Matches",
    title: { en: "National final — full block", ar: "النهائي المحلي" },
    description: { en: "A prototype cut from a high-pressure national competition block.", ar: "مقطع تجريبي من جولة وطنية حماسية." },
    poster: images.galleryPodium,
    youtubeId: "aqz-KE-bpKQ",
  },
  {
    id: "v3",
    category: "Technique",
    title: { en: "Release and rev rate", ar: "الإطلاق ومعدل الدوران" },
    description: { en: "Slow-motion breakdown of her release.", ar: "تحليل بالحركة البطيئة." },
    poster: images.galleryBall,
    youtubeId: "aqz-KE-bpKQ",
  },
  {
    id: "v4",
    category: "Training",
    title: { en: "Lane-play drills", ar: "تدريبات الممشى" },
    description: { en: "Targeting drills across an oil transition.", ar: "تدريبات تستهدف الزيت." },
    poster: images.galleryTraining,
    youtubeId: "aqz-KE-bpKQ",
  },
  {
    id: "v5",
    category: "Interviews",
    title: { en: "On representing Egypt", ar: "عن تمثيل مصر" },
    description: { en: "A prototype interview about focus, pressure and carrying Egypt's colours.", ar: "مقابلة تجريبية عن التركيز والضغط وتمثيل ألوان مصر." },
    poster: images.portraitIntro,
    youtubeId: "aqz-KE-bpKQ",
  },
];

export type PhotoCategory = "All" | "Action" | "Portrait" | "Team Egypt";

export const photos: { src: string; alt: L; category: Exclude<PhotoCategory, "All">; w: number; h: number }[] = [
  { src: images.heroAction, alt: { en: "Logy Ramy mid-delivery on the lane", ar: "لوجي رامي أثناء الرمية" }, category: "Action", w: 1600, h: 1920 },
  { src: images.galleryBall, alt: { en: "Ball tracking over the targeting arrows", ar: "الكرة على الأسهم" }, category: "Action", w: 1600, h: 1008 },
  { src: images.portraitIntro, alt: { en: "Studio portrait", ar: "بورتريه" }, category: "Portrait", w: 1200, h: 1504 },
  { src: images.portraitStory, alt: { en: "Seated with her ball before a block", ar: "جلسة قبل المباراة" }, category: "Portrait", w: 1200, h: 1504 },
  { src: images.galleryPodium, alt: { en: "On the podium with a medal", ar: "على منصة التتويج" }, category: "Team Egypt", w: 1200, h: 1504 },
  { src: images.galleryTraining, alt: { en: "Grip and chalk detail in training", ar: "تفاصيل التدريب" }, category: "Action", w: 1200, h: 1408 },
];

export const press = [
  { outlet: "Athlete profile · Sample", title: { en: "Precision under pressure: inside Logy's approach", ar: "الدقة تحت الضغط: داخل أسلوب لوجي" } as L },
  { outlet: "Tournament desk · Sample", title: { en: "The calm competitor carrying Egypt's colours", ar: "المنافسة الهادئة التي تحمل ألوان مصر" } as L },
  { outlet: "Bowling journal · Sample", title: { en: "Reading the lane, frame by frame", ar: "قراءة الممشى، جولة بعد جولة" } as L },
];

export const contact = {
  eyebrow: { en: "Sponsorship", ar: "الرعاية" } as L,
  title: { en: "Partner with an athlete on the way up", ar: "كن شريكًا لرياضية في صعود" } as L,
  pitch: {
    en: "Logy represents Egypt in front of national, continental and international audiences. Partnership opportunities can support equipment, tournament travel, training and original athlete content.",
    ar: "تمثل لوجي مصر أمام جماهير محلية وقارية ودولية. ويمكن للشراكات دعم المعدات والسفر للبطولات والتدريب وصناعة محتوى رياضي أصيل.",
  } as L,
  form: {
    name: { en: "Name", ar: "الاسم" } as L,
    email: { en: "Email", ar: "البريد" } as L,
    org: { en: "Company", ar: "الشركة" } as L,
    message: { en: "Message", ar: "الرسالة" } as L,
    submit: { en: "Send enquiry", ar: "أرسل" } as L,
    success: {
      en: "Thank you — your enquiry has been noted. Logy's team will reply by email.",
      ar: "شكرًا لك، تم تسجيل رسالتك.", // TRANSLATE
    } as L,
  },
};

export const ui = {
  filterAll: { en: "All", ar: "الكل" } as L,
  allYears: { en: "All years", ar: "كل الأعوام" } as L,
  loading: { en: "Loading", ar: "جار التحميل" } as L,
  close: { en: "Close", ar: "إغلاق" } as L,
  press: { en: "Press & Media", ar: "الصحافة" } as L,
  achievements: { en: "Achievements", ar: "الإنجازات" } as L,
  achievementsTitle: { en: "A legacy built frame by frame", ar: "إرث يُبنى جولة بعد جولة" } as L,
  prototypeNote: { en: "Prototype figures shown for layout preview; replace with official records before publishing.", ar: "أرقام تجريبية لمعاينة التصميم؛ تُستبدل بالسجلات الرسمية قبل النشر." } as L,
  results: { en: "Matches & Results", ar: "المباريات والنتائج" } as L,
  scorecardTitle: { en: "Career Scorecard", ar: "سجل المسيرة" } as L,
  videos: { en: "Video Gallery", ar: "مكتبة الفيديو" } as L,
  photosTitle: { en: "Photography", ar: "الصور" } as L,
};
