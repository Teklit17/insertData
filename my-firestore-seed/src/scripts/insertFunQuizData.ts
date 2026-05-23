import { FieldValue } from "firebase-admin/firestore";
import {
  BIBLE_TRIVIA_SEED_LEVELS,
  type BibleTriviaQuestion,
} from "../data/bibleTriviaQuiz";
import {
  STORY_CHOICE_SEED_LEVELS,
  type StoryChoiceQuiz,
} from "../data/StoryChoiceQuizData";
import { ZOOM_QUIZ_SEED_LEVELS, type ZoomQuizData } from "../data/zoomQuizData";
import { adminDb } from "../firebaseAdmin";

const quizCollection = "fun-quizdata";

type LevelMap<T> = Record<string, T[]>;

type SeedLevelItemsOptions<T> = {
  getLevelId?: (levelKey: string) => string;
  getItemId?: (item: T, level: string, index: number) => string;
};

function getLevelId(levelKey: string) {
  return levelKey.replace(/^level/, "");
}

function getItemId(_item: unknown, level: string, index: number) {
  return `${level}_${index + 1}`;
}

async function seedLevelItems<T>(
  datasetId: string,
  levels: LevelMap<T>,
  getTitle: (item: T) => string,
  options: SeedLevelItemsOptions<T> = {},
) {
  const datasetRef = adminDb.collection(quizCollection).doc(datasetId);
  const resolveLevelId = options.getLevelId ?? getLevelId;
  const resolveItemId = options.getItemId ?? getItemId;
  let itemCount = 0;

  for (const [levelKey, levelItems] of Object.entries(levels)) {
    const level = resolveLevelId(levelKey);
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
      const itemId = resolveItemId(item, level, index);
      const payload = {
        ...(item as object),
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

  console.log(`${datasetId} inserted (${itemCount} items)`);
}

export async function seedZoomQuiz() {
  await seedLevelItems<ZoomQuizData>(
    "zoom",
    ZOOM_QUIZ_SEED_LEVELS,
    (item) => item.answer_en,
    {
      getLevelId: (levelKey) => levelKey,
      getItemId: (item) => item.id,
    },
  );
}

export async function seedBibleTrivia() {
  await seedLevelItems<BibleTriviaQuestion>(
    "bible_trivia",
    BIBLE_TRIVIA_SEED_LEVELS,
    (item) => item.question_en,
  );
}

export async function seedStoryChoice() {
  await seedLevelItems<StoryChoiceQuiz>(
    "story_choice",
    STORY_CHOICE_SEED_LEVELS,
    (item) => item.title_en,
  );
}

export async function seedFunQuizData() {
  await seedZoomQuiz();
  //  await seedBibleTrivia();
  //await seedStoryChoice();
}

if (require.main === module) {
  seedFunQuizData().catch((error) => {
    console.error("Fun quiz seed failed:", error);
    process.exitCode = 1;
  });
}
