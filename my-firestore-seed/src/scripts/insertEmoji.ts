import { FieldValue } from "firebase-admin/firestore";
import { emojiBooks } from "../data/emoji/books";
import { emojiEvents } from "../data/emoji/events";
import { emojiPeople } from "../data/emoji/people";
import { emojiPlaces } from "../data/emoji/places";
import { emojiVerses } from "../data/emoji/verses";
import type { EmojiSeedDataset } from "../data/emoji/types";
import { adminDb } from "../firebaseAdmin";

const emojiCollection = "fun-quizdata";

export async function insertEmojiDataset(dataset: EmojiSeedDataset) {
  const datasetRef = adminDb.collection(emojiCollection).doc(dataset.id);

  let questionCount = 0;

  for (const [level, levelItems] of Object.entries(dataset.levels)) {
    const batch = adminDb.batch();
    const levelRef = datasetRef.collection("levels").doc(level);

    batch.set(
      levelRef,
      {
        level,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true },
    );

    levelItems.forEach((item, index) => {
      const itemId = `${level}_${index + 1}`;
      const payload = {
        ...item,
        level,
      };

      batch.set(
        levelRef.collection("items").doc(itemId),
        {
          datasetId: dataset.id,
          itemId,
          level,
          payload,
          deleted: false,
          title: `${item.emoji} - ${item.answer_en}`,
          createdAt: FieldValue.serverTimestamp(),
          updatedAt: FieldValue.serverTimestamp(),
        },
        { merge: true },
      );
    });

    await batch.commit();
    questionCount += levelItems.length;
  }

  console.log(`Emoji dataset inserted: ${dataset.id} (${questionCount} questions)`);
}

export async function seedEmojiDatasets(datasets: EmojiSeedDataset[]) {
  for (const dataset of datasets) {
    await insertEmojiDataset(dataset);
  }
}

export async function seedEmojiPeople() {
  await insertEmojiDataset(emojiPeople);
}

export async function seedEmojiPlaces() {
  await insertEmojiDataset(emojiPlaces);
}

export async function seedEmojiBooks() {
  await insertEmojiDataset(emojiBooks);
}

export async function seedEmojiVerses() {
  await insertEmojiDataset(emojiVerses);
}

export async function seedEmojiEvents() {
  await insertEmojiDataset(emojiEvents);
}

export async function seedAllEmoji() {
  await seedEmojiDatasets([
    emojiPeople,
    emojiPlaces,
    emojiBooks,
    emojiVerses,
    emojiEvents,
  ]);
}

if (require.main === module) {
  seedAllEmoji().catch((error) => {
    console.error("Emoji seed failed:", error);
    process.exitCode = 1;
  });
}
