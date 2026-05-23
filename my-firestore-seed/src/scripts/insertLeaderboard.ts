import { Timestamp } from "firebase-admin/firestore";
import { adminDb } from "../firebaseAdmin";

export type LeaderboardEvent = {
  userId: string;
  name: string;
  emoji?: string;
  score: number;
  createdAt?: Date;
};

const defaultEmoji = "\uD83D\uDC64";

export async function insertLeaderboardEvent(event: LeaderboardEvent) {
  validateLeaderboardEvent(event);

  const docRef = await adminDb.collection("leaderboard").add({
    userId: event.userId,
    name: event.name || "Unknown",
    emoji: event.emoji || defaultEmoji,
    score: event.score || 0,
    createdAt: Timestamp.fromDate(event.createdAt || new Date()),
  });

  console.log("Leaderboard event inserted:", docRef.id);
}

export async function insertLeaderboardBatch(events: LeaderboardEvent[]) {
  if (!Array.isArray(events)) {
    throw new Error("Expected an array of leaderboard events");
  }

  const validEvents = events.filter((event) => {
    if (!event || !event.userId) {
      console.warn("Skipping invalid leaderboard event:", event);
      return false;
    }

    return true;
  });

  for (let start = 0; start < validEvents.length; start += 500) {
    const batch = adminDb.batch();
    const chunk = validEvents.slice(start, start + 500);

    chunk.forEach((event) => {
      const ref = adminDb.collection("leaderboard").doc();

      batch.set(ref, {
        userId: event.userId,
        name: event.name || "Unknown",
        emoji: event.emoji || defaultEmoji,
        score: event.score || 0,
        createdAt: Timestamp.fromDate(event.createdAt || new Date()),
      });
    });

    await batch.commit();
    console.log(`Inserted leaderboard rows ${start + 1}-${start + chunk.length}`);
  }

  console.log("Leaderboard batch insert complete:", validEvents.length);
}

function validateLeaderboardEvent(event: LeaderboardEvent) {
  if (!event || typeof event !== "object") {
    throw new Error("Invalid leaderboard event object");
  }

  if (!event.userId) {
    throw new Error("Missing userId");
  }
}

function randomEmoji() {
  const emojis = [
    "\uD83D\uDE4F",
    "\u271D\uFE0F",
    "\uD83E\uDDCE\u200D\u2642\uFE0F",
    "\uD83D\uDD4A\uFE0F",
    "\uD83D\uDCD6",
    "\uD83C\uDF3F",
    "\uD83D\uDE07",
    "\uD83D\uDD25",
    "\u26EA",
    "\u2728",
  ];

  return emojis[Math.floor(Math.random() * emojis.length)];
}

export function generateMassLeaderboard(count: number = 200): LeaderboardEvent[] {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eden",
    "Filmon",
    "Grace",
    "Hana",
    "Isaac",
    "Jonas",
  ];

  const data: LeaderboardEvent[] = [];

  for (let i = 0; i < count; i++) {
    const userIndex = Math.floor(Math.random() * 10) + 1;

    data.push({
      userId: `seed-user-${userIndex}`,
      name: names[Math.floor(Math.random() * names.length)],
      emoji: randomEmoji(),
      score: Math.floor(Math.random() * 5000) + 100,
      createdAt: new Date(),
    });
  }

  return data;
}

export const leaderboardTestData: LeaderboardEvent[] = [
  { userId: "seed-user-1", name: "Hana", emoji: "\uD83D\uDE4F", score: 5000 },
  { userId: "seed-user-2", name: "Filmon", emoji: "\uD83D\uDCD6", score: 4700 },
  { userId: "seed-user-3", name: "Eden", emoji: "\uD83C\uDF3F", score: 4300 },
  { userId: "seed-user-4", name: "Grace", emoji: "\u2728", score: 3900 },
  { userId: "seed-user-5", name: "Isaac", emoji: "\uD83D\uDD25", score: 3500 },
  { userId: "seed-user-6", name: "Jonas", emoji: "\u26EA", score: 3100 },
  { userId: "seed-user-7", name: "Alice", emoji: "\uD83D\uDD4A\uFE0F", score: 2800 },
  { userId: "seed-user-8", name: "David", emoji: "\u271D\uFE0F", score: 2400 },
  { userId: "seed-user-9", name: "Bob", emoji: "\uD83D\uDE07", score: 2100 },
  { userId: "seed-user-10", name: "Charlie", emoji: defaultEmoji, score: 1800 },
];

export async function seedLeaderboard() {
  await insertLeaderboardBatch(leaderboardTestData);
}

export async function seedRandomLeaderboard(count: number = 50) {
  await insertLeaderboardBatch(generateMassLeaderboard(count));
}

if (require.main === module) {
  const countArg = Number(process.argv[2]);
  const seed =
    Number.isFinite(countArg) && countArg > 0
      ? seedRandomLeaderboard(countArg)
      : seedLeaderboard();

  seed.catch((error) => {
    console.error("Leaderboard seed failed:", error);
    process.exitCode = 1;
  });
}
