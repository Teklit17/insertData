import { FieldValue } from "firebase-admin/firestore";
import {
  NUMBER_MATCH_SEED_LEVELS,
  type NumberMatchSeedItem,
} from "../data/numberMatchSeedData";
import { adminDb } from "../firebaseAdmin";

const quizCollection = "fun-quizdata";
const datasetId = "number_match";

function getLevelId(levelKey: string) {
  return levelKey.replace(/^level/, "");
}

function getTitle(item: NumberMatchSeedItem) {
  return String(item.number);
}

export async function seedNumberMatch() {
  const datasetRef = adminDb.collection(quizCollection).doc(datasetId);
  let itemCount = 0;

  for (const [levelKey, levelItems] of Object.entries(NUMBER_MATCH_SEED_LEVELS)) {
    const level = getLevelId(levelKey);
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
          datasetId,
          itemId,
          level,
          payload,
          deleted: false,
          title: getTitle(item),
          createdAt: FieldValue.serverTimestamp(),
          updatedAt: FieldValue.serverTimestamp(),
        },
        { merge: true },
      );
    });

    await batch.commit();
    itemCount += levelItems.length;
  }

  console.log(`Number match dataset inserted: ${datasetId} (${itemCount} items)`);
}

if (require.main === module) {
  seedNumberMatch().catch((error) => {
    console.error("Number match seed failed:", error);
    process.exitCode = 1;
  });
}
