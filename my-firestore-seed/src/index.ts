import { login } from "./firebase";
import { insertBook } from "./scripts/insertBook";
import { genesisBookContent } from "./data/oldTestament/genesis";
import { exodusStoryDivision } from "./data/oldTestament/Exodus";

async function run() {
  await login(); // 1. Must login first
  await insertBook(exodusStoryDivision); // 2. Then write
}

run();

//npm run seed
