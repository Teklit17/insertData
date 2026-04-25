import {
  collection,
  addDoc,
  Timestamp,
  writeBatch,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";

/* ======================================================
   🧠 TYPE
====================================================== */
export type LeaderboardEvent = {
  userId: string;
  name: string;
  emoji?: string; // ✅ added
  score: number;
  createdAt?: Date;
};

/* ======================================================
   ✅ INSERT ONE EVENT
====================================================== */
export async function insertLeaderboardEvent(event: LeaderboardEvent) {
  try {
    if (!event || typeof event !== "object") {
      throw new Error("❌ Invalid event object");
    }

    if (!event.userId) {
      throw new Error("❌ Missing userId");
    }

    const docRef = await addDoc(collection(db, "leaderboard"), {
      userId: event.userId,
      name: event.name || "Unknown",
      emoji: event.emoji || "👤", // ✅ added
      score: event.score || 0,
      createdAt: Timestamp.fromDate(event.createdAt || new Date()),
    });

    console.log("✅ EVENT INSERTED:", docRef.id);
  } catch (error) {
    console.error("❌ Failed to insert leaderboard event", error);
  }
}

/* ======================================================
   ⚡ INSERT MANY (BATCH)
====================================================== */
export async function insertLeaderboardBatch(events: LeaderboardEvent[]) {
  try {
    if (!Array.isArray(events)) {
      throw new Error("❌ Expected array of events");
    }

    const batch = writeBatch(db);

    events.forEach((event) => {
      if (!event.userId) {
        console.warn("⚠️ Skipping invalid event:", event);
        return;
      }

      const ref = doc(collection(db, "leaderboard"));

      batch.set(ref, {
        userId: event.userId,
        name: event.name || "Unknown",
        emoji: event.emoji || "👤", // ✅ added
        score: event.score || 0,
        createdAt: Timestamp.fromDate(event.createdAt || new Date()),
      });
    });

    await batch.commit();

    console.log("🚀 BATCH INSERT COMPLETE:", events.length);
  } catch (error) {
    console.error("❌ Batch insert failed", error);
  }
}

/* ======================================================
   🎲 RANDOM HELPERS
====================================================== */
function randomName() {
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
  return names[Math.floor(Math.random() * names.length)];
}

function randomScore() {
  return Math.floor(Math.random() * 100) + 1;
}

function randomEmoji() {
  const emojis = ["🙏", "✝️", "🧎‍♂️", "🕊️", "📖", "🌿", "😇", "🔥", "⛪", "✨"];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

/* ======================================================
   🎲 MASS DATA GENERATOR
====================================================== */
export function generateMassLeaderboard(
  count: number = 200,
): LeaderboardEvent[] {
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
      userId: `user${userIndex}`,
      name: names[Math.floor(Math.random() * names.length)],
      emoji: randomEmoji(), // ✅ added
      score: Math.floor(Math.random() * 200),
      createdAt: new Date(),
    });
  }

  return data;
}

/* ======================================================
   🧪 TEST DATA (10 USERS ONLY)
====================================================== */
export const leaderboardTestData: LeaderboardEvent[] = [
  { userId: "user3", name: "Charlie", emoji: "🧎‍♂️", score: 20 },
  { userId: "user3", name: "Charlie", emoji: "🧎‍♂️", score: 60 },

  { userId: "user4", name: "Alice", emoji: "🕊️", score: 70 },

  { userId: "user5", name: "David", emoji: "📖", score: 22 },
  { userId: "user5", name: "David", emoji: "📖", score: 60 },

  { userId: "user6", name: "Eden", emoji: "🌿", score: 33 },
  { userId: "user6", name: "Eden", emoji: "🌿", score: 95 },

  { userId: "user7", name: "Grace", emoji: "😇", score: 55 },

  { userId: "user8", name: "Isaac", emoji: "🔥", score: 77 },

  { userId: "user9", name: "Jonas", emoji: "⛪", score: 88 },

  { userId: "user10", name: "", emoji: "✨", score: 10 },
];

/* ======================================================
   🚀 SEED FUNCTIONS
====================================================== */
export async function seedLeaderboard() {
  await insertLeaderboardBatch(leaderboardTestData);
}

export async function seedRandomLeaderboard(count: number = 50) {
  await insertLeaderboardBatch(generateMassLeaderboard(count));
}
