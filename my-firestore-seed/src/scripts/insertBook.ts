// src/scripts/insertBook.ts

import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

// Old Testament
import { genesisBookContent } from "../data/oldTestament/genesis";
import { exodusStoryDivision } from "../data/oldTestament/Exodus";
import { psalmsBookContent } from "../data/oldTestament/psalms";
import { haggaiStoryDivision } from "../data/oldTestament/haggai";

// New Testament
import { matthewBookContent } from "../data/newTestament/matthew";
import { markStoryDivision } from "../data/newTestament/mark";
import { lukeStoryDivision } from "../data/newTestament/luke";
import { johnStoryDivision } from "../data/newTestament/jhon";
import { actsStoryDivision } from "../data/newTestament/acts";
import { romansStoryDivision } from "../data/newTestament/romans";
import { firstCorinthiansStoryDivision } from "../data/newTestament/1_corinthians";
import { secondCorinthiansStoryDivision } from "../data/newTestament/2_corinthians";
import { galatiansStoryDivision } from "../data/newTestament/galatians";
import { ephesiansStoryDivision } from "../data/newTestament/ephesians";

export async function insertBook(bookContent: any) {
  try {
    await setDoc(doc(db, "bookContent", bookContent.bookId), bookContent);

    console.log("BOOK INSERTED:", bookContent.bookId);
    console.log("DIVISIONS COUNT:", bookContent.divisions.length);
  } catch (error) {
    console.error("❌ Failed to insert book", bookContent.bookId, error);
  }
}

// Insert specific books here
export async function seedBooks() {
  // Old Testament
  // await insertBook(genesisBookContent);
  // await insertBook(exodusStoryDivision);
  // await insertBook(psalmsBookContent);
  // await insertBook(haggaiStoryDivision);

  // New Testament
  //await insertBook(matthewBookContent);
  // await insertBook(markStoryDivision);
  // await insertBook(lukeStoryDivision);
  // await insertBook(johnStoryDivision);
  // await insertBook(actsStoryDivision);
  // await insertBook(romansStoryDivision);
  // await insertBook(firstCorinthiansStoryDivision);
  // await insertBook(secondCorinthiansStoryDivision);
  //await insertBook(galatiansStoryDivision);
  await insertBook(ephesiansStoryDivision);
}
