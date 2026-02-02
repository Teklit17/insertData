import { login } from "./firebase";
import { insertBook } from "./scripts/insertBook";
import { genesisBookContent } from "./data/oldTestament/genesis";
import { exodusStoryDivision } from "./data/oldTestament/Exodus";
import { matthewBookContent } from "./data/newTestament/matthew";

async function run() {
  await login(); // 1. Must login first
  await insertBook(matthewBookContent); // 2. Then write
}

run();

//npm run seed
