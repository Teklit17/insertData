import { login } from "./firebase";
import { insertBook } from "./scripts/insertBook";
import { genesisBookContent } from "./data/oldTestament/genesis";
import { exodusStoryDivision } from "./data/oldTestament/Exodus";
import { matthewBookContent } from "./data/newTestament/matthew";
import { firstCorinthiansStoryDivision } from "./data/newTestament/1_corinthians";
import { romansStoryDivision } from "./data/newTestament/romans";
import { markStoryDivision } from "./data/newTestament/mark";
import { lukeStoryDivision } from "./data/newTestament/luke";
import { haggaiStoryDivision } from "./data/oldTestament/haggai";
async function run() {
  await login(); // 1. Must login first
  //await insertBook(markStoryDivision);
  //await insertBook(matthewBookContent);
  //await insertBook(firstCorinthiansStoryDivision);
  //await insertBook(romansStoryDivision);
  await insertBook(haggaiStoryDivision);

  // await insertBook(firstCorinthiansStoryDivision); // 2. Then write
  // await insertBook(romansStoryDivision);
}

run();

//npm run seed
