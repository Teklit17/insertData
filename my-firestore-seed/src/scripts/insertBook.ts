// src/scripts/insertBook.ts

import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { psalmsBookContent } from "../data/oldTestament/psalms";
import { genesisBookContent } from "../data/oldTestament/genesis";
import { exodusStoryDivision } from "../data/oldTestament/Exodus";
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
  await insertBook(exodusStoryDivision);
}
