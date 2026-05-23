export type ZoomQuizData = {
  id: string;
  answer_en: string;
  answer_ti: string;
  clues_en: string[];
  clues_ti: string[];
};

export const zoomQuizData: ZoomQuizData[] = [
  // level 1: [

  {
    id: "jericho",
    answer_en: "Jericho",
    answer_ti: "ያሪኮ",

    clues_en: [
      "6:1 — “Shut up because of the children of Israel...”",
      "6:4 — “Seven priests shall bear before the ark...”",
      "6:5 — “The wall of the city shall fall down flat...”",
      "6:20 — “The wall fell down flat...”",
    ],

    clues_ti: [
      "6:1 — “ብሰንኪ ደቂ እስራኤል ተዓጽያ ነበረት...”",
      "6:4 — “ሾብዓተ ኻህናት ከኣ ቀቅድሚ ታቦት...”",
      "6:5 — “መካበብያ እታ ኽተማ ከኣ ናብ ትሕቲኡ ኣቢሉ ኺወድቕ እዩ።...”",
      "6:20 — “ሽዑ እቲ መንደቕ ናብ ትሕቲኡ ኣቢሉ ወደቐ።...”",
    ],
  },
  {
    id: "jonah",
    answer_en: "Jonah",
    answer_ti: "ዮናስ",

    clues_en: [
      "1:3 — “He went down to Joppa...”",
      "1:17 — “In the belly of the fish...”",
      "2:1 — “Prayed unto the Lord...”",
      "2:10 — “The fish vomited out...”",
    ],

    clues_ti: [
      "1:3 — “ናብ ዮጳ ወረደ...”",
      "1:17 — “ኣብ ከርሲ እቲ ዓሳ...”",
      "2:1 — “ናብ እግዚኣብሄር ጸለየ...”",
      "2:10 — “እቲ ዓሳ ተፍኦ...”",
    ],
  },
  {
    id: "david",
    answer_en: "David",
    answer_ti: "ዳዊት",

    clues_en: [
      "16:11 — “Keeping the sheep...”",
      "17:40 — “Chose him five smooth stones...”",
      "17:45 — “I come to thee in the name of the Lord...”",
      "17:49 — “Smote the Philistine in his forehead...”",
    ],

    clues_ti: [
      "16:11 — “ኣባጊዕ ይጓሲ ነበረ...”",
      "17:40 — “ሓሙሽተ ልሙጻት ኣእማን ሓረየ...”",
      "17:45 — “ብስም እግዚኣብሄር እመጸካ ኣለኹ...”",
      "17:49 — “ነቲ ፍልስጥኤማዊ ኣብ ግምባሩ ወቕዖ...”",
    ],
  },
  {
    id: "moses",
    answer_en: "Moses",
    answer_ti: "ሙሴ",

    clues_en: [
      "2:3 — “An ark of bulrushes...”",
      "3:2 — “The bush burned with fire...”",
      "14:21 — “The Lord caused the sea to go back...”",
      "14:22 — “The waters were a wall unto them...”",
    ],

    clues_ti: [
      "2:3 — “ ሳጹን ሻምብቆ ወሲዳ...”",
      "3:2 — “ ካብ ማእከል ኣሻዅ ቈጥቋጥ...”",
      "14:21 — “ እግዚኣብሄር፡ ከኣ...ነቲ ባሕሪ ኣንቀጾ። ”",
      "14:22 — “እቲ ማይ ከኣ ብየመነ ጸጋሞም ከም መንደቕ ደው በለ።...”",
    ],
  },
  {
    id: "daniel",
    answer_en: "Daniel",
    answer_ti: "ዳንኤል",

    clues_en: [
      "1:8 — “Would not defile himself...”",
      "2:28 — “There is a God in heaven that revealeth secrets...”",
      "6:10 — “Kneeled upon his knees three times a day...”",
      "6:22 — “My God hath sent his angel...”",
    ],

    clues_ti: [
      "1:8 — “ ብልቡ ሓለነ፣...”",
      "2:28 — “ሓደ ኣምላኽ እዩ ምስጢራት ዚገልጽ፣...”",
      "6:10 — “ሰለስተ ሳዕ ኣብ መዓልቲ ኣብ ቅድሚ ኣምላኹ ብብርኩ...”",
      "6:22 — “ኣምላኸይ መልኣኹ ልኢኹ፣ ኣፍ ኣናብስ ዐጸወ፣...”",
    ],
  },

  // level 2:

  {
    id: "esther",
    answer_en: "Esther",
    answer_ti: "ኤስተር",

    clues_en: [
      "2:17 — “The king loved her above all the women...”",
      "4:14 — “For such a time as this...”",
      "4:16 — “If I perish, I perish...”",
      "8:11 — “To stand for their life...”",
    ],

    clues_ti: [
      "2:17 — “ንጉስ ድማ ን.... ካብ ኩለን እተን ኣንስቲ ኣብሊጹ ፈተዋ...”",
      "4:14 — “ኸምዚ ንዝበለ እዋን ናብ መንግስቲ መጺእኪ እንተ ኾንኪ፡ መን ይፈልጥ።...”",
      "4:16 — “እንተ ጠፋእኩ እጥፋእ።...”",
      "8:11 — “ኣይሁድ ኪእከቡ እሞ ንህይወቶም ኪከላኸሉላ...”",
    ],
  },
  {
    id: "noah",
    answer_en: "Noah",
    answer_ti: "ኖህ",

    clues_en: [
      "6:14 — “Make thee an ark...”",
      "7:7 — “Entered into the ark...”",
      "7:19 — “The waters prevailed exceedingly...”",
      "8:11 — “An olive leaf pluckt off...”",
    ],

    clues_ti: [
      "6:14 — “ንኣኻ ኻብ ኦም ጎፌር መርከብ ስራሕ።...”",
      "7:7 — “ናብ መርከብ ኣተዉ።...”",
      "7:19 — “እቲ ማይ ኣዝዩ በርትዐ...”",
      "8:11 — “ ቈጽሊ ኣውልዕ ኣብ ኣፋ ሒዛ ነበረት።...”",
    ],
  },
  {
    id: "joseph",
    answer_en: "Joseph",
    answer_ti: "ዮሴፍ",

    clues_en: [
      "37:3 — “A coat of many colours...”",
      "37:28 — “Sold for twenty pieces of silver...”",
      "41:41 — “Set over all the land of Egypt...”",
      "50:20 — “God meant it unto good...”",
    ],

    clues_ti: [
      "37:3 — “ወለል ዚብል ቀምሽ ከኣ ገበረሉ።...”",
      "37:28 — “ንዕስራ ሲቃል ብሩር ኣብ እስማዔላውያን ሸጥዎ።...”",
      "41:41 — “ ኣብ ልዕሊ ዅላ ሃገር ግብጺ ሸይመካ ኣሎኹ፡ በሎ።...”",
      "50:20 — “ንስኻትኩም ንኽፉኤይ ሐሰብኩም፡ እግዚኣብሄር ግና፡...”",
    ],
  },
  {
    id: "samson",
    answer_en: "Samson",
    answer_ti: "ሳምሶን",

    clues_en: [
      "13:5 — “No razor shall come on his head...”",
      "14:6 — “Rent him as he would have rent a kid...”",
      "16:19 — “She caused him to shave...”",
      "16:30 — “The house fell upon the lords...”",
    ],

    clues_ti: [
      "13:5 — “ ናብ ርእሱ መላጸ ኣይሐልፎን።...”",
      "14:6 — “ ንማሕስእ ከም ዚሰላልዕ ሰላልዖ።...”",
      "16:19 — “ነቲ ሾብዓተ ሽርበ ርእሱ ኣላጸየት...”",
      "16:30 — “ እታ ቤት ድማ ... ኣብኡ ዝነበረ ዅሉ ህዝብን ወደቐት።...”",
    ],
  },
  {
    id: "elijah",
    answer_en: "Elijah",
    answer_ti: "ኤልያስ",

    clues_en: [
      "17:6 — “The ravens brought him bread and flesh...”",
      "18:38 — “The fire of the Lord fell...”",
      "19:12 — “A still small voice...”",
      "2:11 — “Went up by a whirlwind into heaven...”",
    ],

    clues_ti: [
      "17:6 — “እቶም ኳዃት ድማ ብጊሓት እንጌራን ስጋን...”",
      "18:38 — “ሽዑ ሓዊ እግዚኣብሄር ወረደ...”",
      "19:12 — “ድሕሪ እቲ ሓዊ ኸኣ ህዱእ ቅሩብ ደሃይ መጸ።...”",
      "2:11 — “ ... ድማ ብህቦብላ ንፋስ ናብ ሰማይ ዓረገ።...”",
    ],
  },
  {
    id: "gideon",
    answer_en: "Gideon",
    answer_ti: "ጌዴዎን",

    clues_en: [
      "6:12 — “The Lord is with thee...”",
      "6:37 — “I will put a fleece of wool...”",
      "7:7 — “By the three hundred men...”",
      "7:20 — “The sword of the Lord, and of ...”",
    ],

    clues_ti: [
      "6:12 — “ኣታ ሓያል ጅግና እግዚኣብሄር ምሳኻ እዩ፡ ከኣ በሎ።...”",
      "6:37 — “ ኣነ እዚ ቚሩጽ ጸምሪ እዚ ኣብ ዓውዲ ኤንብር ኣሎኹ፡ በሎ።...”",
      "7:7 — “በዞም ብኢዶም ዝሰትዩ ሰለስተ ሚእቲ ሰብኣይ ከድሕነኩም እየ፡...”",
      "7:20 — “መለኸት ሐዙ፡ ሴፍ እግዚኣብሄርን ... ኢሎም ድማ ጨደሩ።...”",
    ],
  },

  // level 3:

  {
    id: "ruth",
    answer_en: "Ruth",
    answer_ti: "ሩት",

    clues_en: [
      "1:16 — “Whither thou goest, I will go...”",
      "1:17 — “Thy people shall be my people...”",
      "2:3 — “She gleaned in the field...”",
      "4:13 — “Boaz took Ruth...”",
    ],

    clues_ti: [
      "1:16 — “ናብ እትኸድዮ እኸይድ ኣብ እትሓድርዮ ኸኣ እሐድር...”",
      "1:17 — “ህዝብኺ ህዝበይ፡ ኣምላኽኪ ድማ ኣምላኸይ እዩ።...”",
      "2:3 — “ኣብ ግራት እኽሊ ትቐርም ነበረት...”",
      "4:13 — “ሽዑ ቦአዝ ንሩት ወሰዳ፡ ንሳውን ሰበይቱ ኾነት።...”",
    ],
  },
  {
    id: "abraham",
    answer_en: "Abraham",
    answer_ti: "ኣብርሃም",

    clues_en: [
      "12:1 — “Get thee out of thy country...”",
      "15:5 — “Look now toward heaven...”",
      "17:5 — “Father of many nations...”",
      "22:13 — “A ram caught in a thicket...”",
    ],

    clues_ti: [
      "12:1 — “ናብ ዘርእየካ ምድሪ ኣቢልካ ውጻእ።...”",
      "15:5 — “ናብ ሰማይ ጠምት አሞ...”",
      "17:5 — “ኣቦ ብዙሓት ኣህዛብ...”",
      "22:13 — “ብቐርኑ ብሓረግ እተታሕዘ ድዑል ረአየ።...”",
    ],
  },
  {
    id: "peter",
    answer_en: "Peter",
    answer_ti: "ጴጥሮስ",

    clues_en: [
      "4:19 — “Follow me...”",
      "14:29 — “Walked on the water...”",
      "26:34 — “Thou shalt deny me thrice...”",
      "16:16 — “Thou art the Christ...”",
    ],

    clues_ti: [
      "4:19 — “ስዓበኒ...”",
      "14:29 — “ኣብ ልዕሊ ማይ ከደ...”",
      "26:34 — “ሰለስተ ሳዕ ክትኽሕደኒ ኢኻ...”",
      "16:16 — “ንስኻ ክርስቶስ ኢኻ...”",
    ],
  },
  {
    id: "paul",
    answer_en: "Paul",
    answer_ti: "ጳውሎስ",

    clues_en: [
      "9:3 — “A light from heaven...”",
      "9:6 — “Lord, what wilt thou have me to do?...”",
      "16:25 — “Prayed, and sang praises unto God...”",
      "27:24 — “Fear not, Paul...”",
    ],

    clues_ti: [
      "9:3 — “ብርሃን ካብ ሰማይ...”",
      "9:6 — “ጐይታይ እንታይ ክገብር ትደሊ?...”",
      "16:25 — “ጸለዩ ንኣምላኽ ድማ ዘመሩ...”",
      "27:24 — “ጳውሎስ ኣይትፍራህ...”",
    ],
  },
  {
    id: "mary",
    answer_en: "Mary",
    answer_ti: "ማርያም",

    clues_en: [
      "1:28 — “Highly favoured...”",
      "1:31 — “Thou shalt bring forth a son...”",
      "2:7 — “Wrapped him in swaddling clothes...”",
      "2:19 — “Kept all these things in her heart...”",
    ],

    clues_ti: [
      "1:28 — “ምልእቲ ጸጋ...”",
      "1:31 — “ወዲ ክትወልዲ ኢኺ...”",
      "2:7 — “ብጨርቂ ጠቕለለቶ...”",
      "2:19 — “ዅሉ ኣብ ልባ ተዋህልሎን ትሐስቦን ነበረት።...”",
    ],
  },
  {
    id: "solomon",
    answer_en: "Solomon",
    answer_ti: "ሰሎሞን",

    clues_en: [
      "3:5 — “Ask what I shall give thee...”",
      "3:9 — “Give therefore thy servant an understanding heart...”",
      "6:1 — “Began to build the house of the Lord...”",
      "10:1 — “The queen of Sheba heard...”",
    ],

    clues_ti: [
      "3:5 — “ኣምላኽ ከኣ፡ እንታይ ከም ዝህበካ ለምን፡ በለ።...”",
      "3:9 — “ንባርያኻ ኣስተውዓሊ ልቢ ሀቦ።...”",
      "6:1 — “ቤት እግዚኣብሄር ክሃንጽ ጀመረ...”",
      "10:1 — “ንግስቲ ሳባ ሰምዐት...”",
    ],
  },
  {
    id: "job",
    answer_en: "Job",
    answer_ti: "ኢዮብ",

    clues_en: [
      "1:1 — “Perfect and upright...”",
      "1:21 — “The Lord gave, and the Lord hath taken away...”",
      "2:9 — “Curse God, and die...”",
      "42:10 — “The Lord turned the captivity of Job...”",
    ],

    clues_ti: [
      "1:1 — “ንሱ ፍጹምን ቅኑዕን ንኣምላኽ ዚፈርህን ካብ ክፋእ ዝረሐቐን ሰብኣይ ነበረ።...”",
      "1:21 — “እግዚኣብሄር ሃበ፡ እግዚኣብሄር ወሰደ...”",
      "2:9 — “ንኣምላኽ ርገሞ እሞ ሙት...”",
      "42:10 — “እዮብ ምእንቲ ፈተውቱ ምስ ጸለየ፡ እግዚኣብሄር ንምርኮ .. መለሶ”",
    ],
  },
];

export const ZOOM_QUIZ_SEED_LEVELS: Record<string, ZoomQuizData[]> = {
  level1: zoomQuizData.slice(0, 5),
  level2: zoomQuizData.slice(5, 10),
  level3: zoomQuizData.slice(10, 15),
};
