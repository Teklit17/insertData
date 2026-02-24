// src/scripts/insertBook.ts

import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { psalmsBookContent } from "../data/oldTestament/psalms";
import { genesisBookContent } from "../data/oldTestament/genesis";
import { exodusStoryDivision } from "../data/oldTestament/Exodus";
import { matthewBookContent } from "../data/newTestament/matthew";
import { firstCorinthiansStoryDivision } from "../data/newTestament/1_corinthians";
import { romansStoryDivision } from "../data/newTestament/romans";
import { markStoryDivision } from "../data/newTestament/mark";
import { lukeStoryDivision } from "../data/newTestament/luke";

// later you can import genesis, exodus, matthew, etc.

export async function insertBook(bookContent: any) {
  try {
    await setDoc(doc(db, "bookContent", bookContent.bookId), bookContent);

    console.log("BOOK INSERTED:", bookContent.bookId);
    console.log("DIVISIONS COUNT:", bookContent.divisions.length);
  } catch (error) {
    console.error("❌ Failed to insert book", bookContent.bookId, error);
  }
}

// For now, insert Psalms only
export async function insertGenesis() {
  await insertBook(markStoryDivision);
  await insertBook(firstCorinthiansStoryDivision);
  await insertBook(romansStoryDivision);
  await insertBook(lukeStoryDivision);
  await insertBook(romansStoryDivision);
  await insertBook(matthewBookContent);
}
