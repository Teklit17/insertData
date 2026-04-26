import { login } from "./firebase";
import { insertBook } from "./scripts/insertBook";

// Old Testament
import { genesisBookContent } from "./data/oldTestament/genesis";
import { exodusStoryDivision } from "./data/oldTestament/Exodus";
import { haggaiStoryDivision } from "./data/oldTestament/haggai";

// New Testament
import { matthewBookContent } from "./data/newTestament/matthew";
import { markStoryDivision } from "./data/newTestament/mark";
import { lukeStoryDivision } from "./data/newTestament/luke";
import { johnStoryDivision } from "./data/newTestament/jhon";
import { actsStoryDivision } from "./data/newTestament/acts";
import { romansStoryDivision } from "./data/newTestament/romans";
import { firstCorinthiansStoryDivision } from "./data/newTestament/1_corinthians";
import { secondCorinthiansStoryDivision } from "./data/newTestament/2_corinthians";
import { galatiansStoryDivision } from "./data/newTestament/galatians";
import { ephesiansStoryDivision } from "./data/newTestament/ephesians";
import { philippiansStoryDivision } from "./data/newTestament/philippians";
import { firstThessaloniansStoryDivision } from "./data/newTestament/1_thessalonians";
import { secondThessaloniansStoryDivision } from "./data/newTestament/2_thessalonians";
import { firstTimothyStoryDivision } from "./data/newTestament/1_timothy";
import { secondTimothyStoryDivision } from "./data/newTestament/2_timothy";
import { titusStoryDivision } from "./data/newTestament/titus";
import { philemonStoryDivision } from "./data/newTestament/philemon";
import { hebrewsStoryDivision } from "./data/newTestament/hebrews";
import { jamesStoryDivision } from "./data/newTestament/james";
import { firstPeterStoryDivision } from "./data/newTestament/1_peter";
import { secondPeterStoryDivision } from "./data/newTestament/2_peter";
import { firstJohnStoryDivision } from "./data/newTestament/1_john";
import { secondJohnStoryDivision } from "./data/newTestament/2_john";
import { thirdJohnStoryDivision } from "./data/newTestament/3_john";
import { judeStoryDivision } from "./data/newTestament/jude";
import { revelationStoryDivision } from "./data/newTestament/revelation";
import { seedLeaderboard } from "./scripts/insertLeaderboard";
import { insertWinner, seedWinners } from "./scripts/insertWinners";
import { colossiansStoryDivision } from "./data/newTestament/colossians";
async function run() {
  await login();

  // Old Testament
  // await insertBook(genesisBookContent);
  // await insertBook(exodusStoryDivision);
  //await insertBook(haggaiStoryDivision);

  // New Testament
  // await insertBook(matthewBookContent);
  // await insertBook(markStoryDivision);
  // await insertBook(lukeStoryDivision);
  // await insertBook(johnStoryDivision);
  // await insertBook(actsStoryDivision);
  // await insertBook(romansStoryDivision);
  // await insertBook(firstCorinthiansStoryDivision);
  //  await insertBook(secondCorinthiansStoryDivision);
  // await insertBook(galatiansStoryDivision);
  //await insertBook(ephesiansStoryDivision);
  // await insertBook(philippiansStoryDivision);
  // await insertBook(firstThessaloniansStoryDivision);
  // await insertBook(secondThessaloniansStoryDivision);
  //await insertBook(firstTimothyStoryDivision);
  //await insertBook(secondTimothyStoryDivision);
  // await insertBook(titusStoryDivision);
  // await insertBook(philemonStoryDivision);
  // await insertBook(hebrewsStoryDivision);
  // await insertBook(jamesStoryDivision);
  // await insertBook(firstPeterStoryDivision);
  // await insertBook(secondPeterStoryDivision);
  // await insertBook(firstJohnStoryDivision);
  // await insertBook(secondJohnStoryDivision);
  // await insertBook(thirdJohnStoryDivision);
  // await insertBook(judeStoryDivision);
  // await insertBook(revelationStoryDivision);
  // await insertBook(colossiansStoryDivision);
  //await seedLeaderboard();
  //await seedWinners();
}

run();

// npm run seed
