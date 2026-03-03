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
  await insertBook(ephesiansStoryDivision);
}

run();

// npm run seed
