export type StoryChoice = {
  text_en: string;
  text_ti: string;
  nextId: string;
  correct?: boolean;
};

export type StoryNode = {
  id: string;
  text_en: string;
  text_ti: string;
  choices?: StoryChoice[];
  ending?: "good" | "neutral" | "failure";
};

export type StoryChoiceQuiz = {
  id: string;
  title_en: string;
  title_ti: string;
  startId: string;
  nodes: Record<string, StoryNode>;
};

export const storyChoiceQuizzes: StoryChoiceQuiz[] = [
  {
    id: "david",
    title_en: "You are David",
    title_ti: "ንስካ ዳዊት ኢካ",
    startId: "start",
    nodes: {
      start: {
        id: "start",
        text_en: "A giant named Goliath challenges Israel.",
        text_ti: "ጎልያድ ዝበሃል ሓያል ሰብኣይ ንእስራኤል የፈራርሕ።",
        choices: [
          {
            text_en: "Face Goliath",
            text_ti: "ንጎልያድ ግጠሞ",
            nextId: "king",
            correct: true,
          },
          {
            text_en: "Run away",
            text_ti: "ህደም",
            nextId: "end_failure",
            correct: false,
          },
        ],
      },

      king: {
        id: "king",
        text_en: "King Saul offers you heavy armor.",
        text_ti: "ንጉስ ሳኦል ከቢድ ኣጽዋር ይህበካ።",
        choices: [
          {
            text_en: "Use your sling instead",
            text_ti: "ወንጭፍኻ ተጠቐም",
            nextId: "stones",
            correct: true,
          },
          {
            text_en: "Wear the armor",
            text_ti: "እቲ ኣጽዋር ልበስ",
            nextId: "end_failure",
            correct: false,
          },
        ],
      },

      stones: {
        id: "stones",
        text_en: "You pick stones from the river.",
        text_ti: "ካብ ሩባ እምኒ ትወስድ።",
        choices: [
          {
            text_en: "Trust God",
            text_ti: "ብእግዚኣብሄር እመን",
            nextId: "battle",
            correct: true,
          },
          {
            text_en: "Be afraid",
            text_ti: "ፍራሕ",
            nextId: "end_failure",
            correct: false,
          },
        ],
      },

      battle: {
        id: "battle",
        text_en: "Goliath comes closer to attack.",
        text_ti: "ጎልያድ ከጥቕዓካ ይቐርብ።",
        choices: [
          {
            text_en: "Throw the stone",
            text_ti: "እቲ እምኒ ወንጭፈሉ",
            nextId: "end_good",
            correct: true,
          },
          {
            text_en: "Hide",
            text_ti: "ተሓባእ",
            nextId: "end_failure",
            correct: false,
          },
        ],
      },
    },
  },

  {
    id: "daniel",
    title_en: "You are Daniel",
    title_ti: "ንስካ ዳንኤል ኢካ",
    startId: "start",
    nodes: {
      start: {
        id: "start",
        text_en: "The king says nobody may pray except to him.",
        text_ti: "ንጉስ ካብኡ ወጻኢ ን ካልእ ኣምላክ ክትጽሊ ኣይፍቀድን ይብል።",
        choices: [
          {
            text_en: "Pray to God",
            text_ti: "ንእግዚኣብሄር ጸሊ",
            nextId: "window",
            correct: true,
          },
          {
            text_en: "Stop praying",
            text_ti: "ጸሎት ኣቋርጽ",
            nextId: "end_failure",
            correct: false,
          },
        ],
      },

      window: {
        id: "window",
        text_en: "You go to your window",
        text_ti: "ናብ መስኮትካ ኬድካ",
        choices: [
          {
            text_en: "Continue praying",
            text_ti: "ጸሎት ቀጽል",
            nextId: "lions",
            correct: true,
          },
          {
            text_en: "Hide in fear",
            text_ti: "ብፍርሒ ተሓባእ",
            nextId: "end_failure",
            correct: false,
          },
        ],
      },

      lions: {
        id: "lions",
        text_en: "You are thrown into the lions' den.",
        text_ti: "ናብ ጉድጓድ ኣናብስ ተደርበኻ።",
        choices: [
          {
            text_en: "Trust God",
            text_ti: "ብእግዚኣብሄር እመን",
            nextId: "morning",
            correct: true,
          },
          {
            text_en: "Lose hope",
            text_ti: "ተስፋ ቁረጽ",
            nextId: "end_failure",
            correct: false,
          },
        ],
      },

      morning: {
        id: "morning",
        text_en: "The king comes in the morning.",
        text_ti: "ንጉስ ንግሆ ይመጽእ።",
        choices: [
          {
            text_en: "Answer with faith",
            text_ti: "ብእምነት መልስ",
            nextId: "end_good",
            correct: true,
          },
          {
            text_en: "Stay silent in fear",
            text_ti: "ብፍርሒ ስቕ በል",
            nextId: "end_failure",
            correct: false,
          },
        ],
      },
    },
  },

  {
    id: "moses",
    title_en: "You are Moses",
    title_ti: "ንስካ ሙሴ ኢካ",
    startId: "start",
    nodes: {
      start: {
        id: "start",
        text_en: "The people are trapped near the Red Sea.",
        text_ti: "ህዝቢ ኣብ ጥቓ ቀይሕ ባሕሪ ተዓጽዩ።",
        choices: [
          {
            text_en: "Pray to God",
            text_ti: "ንእግዚኣብሄር ጸሊ",
            nextId: "staff",
            correct: true,
          },
          {
            text_en: "Panic",
            text_ti: "ፍራሕ",
            nextId: "end_failure",
            correct: false,
          },
        ],
      },

      staff: {
        id: "staff",
        text_en: "God tells you to lift your staff.",
        text_ti: "እግዚኣብሄር በትርኻ ከተልዕል ይእዝዘካ።",
        choices: [
          {
            text_en: "Obey God",
            text_ti: "ንእግዚኣብሄር ተኣዘዝ",
            nextId: "sea",
            correct: true,
          },
          {
            text_en: "Refuse",
            text_ti: "ኣይትተኣዘዝ",
            nextId: "end_failure",
            correct: false,
          },
        ],
      },

      sea: {
        id: "sea",
        text_en: "The sea begins to open.",
        text_ti: "ባሕሪ ክኽፈት ይጅምር።",
        choices: [
          {
            text_en: "Lead the people forward",
            text_ti: "ንህዝቢ መሪሕካ ትሓልፍ",
            nextId: "cross",
            correct: true,
          },
          {
            text_en: "stay still in fear",
            text_ti: "ብ ድሕሪኦም ትተርፍ",
            nextId: "end_failure",
            correct: false,
          },
        ],
      },

      cross: {
        id: "cross",
        text_en: "The people walk through the sea safely.",
        text_ti: "ህዝቢ ብደሓን፣ ብ ማእከል ባሕሪ ይሓልፍ።",
        choices: [
          {
            text_en: "Thank God",
            text_ti: "ንእግዚኣብሄር ኣመስግን",
            nextId: "end_good",
            correct: true,
          },
          {
            text_en: "Complain",
            text_ti: "ኣጉረምርም",
            nextId: "end_failure",
            correct: false,
          },
        ],
      },
    },
  },
];

export const STORY_CHOICE_SEED_LEVELS: Record<string, StoryChoiceQuiz[]> = {
  level1: storyChoiceQuizzes,
};
