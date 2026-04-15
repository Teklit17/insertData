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
export type Winner = {
  userId: string;
  name: string;
  score: number;
  rank: 1 | 2 | 3; // ✅ REQUIRED
  periodType: "weekly" | "monthly" | "yearly";
  periodId: string;
  createdAt?: Date;
};

/* ======================================================
   ✅ INSERT ONE WINNER (rare use)
   ⚠️ Uses deterministic ID (no random docs)
====================================================== */
export async function insertWinner(winner: Winner) {
  try {
    if (!winner || typeof winner !== "object") {
      throw new Error("❌ Invalid winner object");
    }

    if (!winner.userId || !winner.rank) {
      throw new Error("❌ Missing userId or rank");
    }

    const docId = `${winner.periodType}-${winner.periodId}-${winner.rank}`;

    const ref = doc(db, "winners", docId);

    await addDoc(collection(db, "logs"), {
      action: "insertWinner",
      winnerId: docId,
      createdAt: Timestamp.now(),
    });

    // ✅ Use set instead of addDoc for fixed ID
    await writeBatch(db)
      .set(ref, {
        userId: winner.userId,
        name: winner.name || "Unknown",
        score: winner.score || 0,
        rank: winner.rank,
        periodType: winner.periodType,
        periodId: winner.periodId,
        createdAt: Timestamp.fromDate(winner.createdAt || new Date()),
      })
      .commit();

    console.log(`🏆 Winner inserted: ${docId}`);
  } catch (error) {
    console.error("❌ Failed to insert winner", error);
  }
}

/* ======================================================
   ⚡ INSERT MANY WINNERS (BEST for seeding)
====================================================== */
export async function insertWinnerBatch(winners: Winner[]) {
  try {
    if (!Array.isArray(winners)) {
      throw new Error("❌ Expected array of winners");
    }

    const batch = writeBatch(db);

    winners.forEach((winner) => {
      if (!winner.userId || !winner.rank) {
        console.warn("⚠️ Skipping invalid winner:", winner);
        return;
      }

      const docId = `${winner.periodType}-${winner.periodId}-${winner.rank}`;
      const ref = doc(db, "winners", docId);

      batch.set(ref, {
        userId: winner.userId,
        name: winner.name || "Unknown",
        score: winner.score || 0,
        rank: winner.rank,
        periodType: winner.periodType,
        periodId: winner.periodId,
        createdAt: Timestamp.fromDate(winner.createdAt || new Date()),
      });
    });

    await batch.commit();

    console.log("🚀 WINNER BATCH INSERT COMPLETE:", winners.length);
  } catch (error) {
    console.error("❌ Winner batch insert failed", error);
  }
}

/* ======================================================
   🧪 TEST DATA (TOP 3 PER PERIOD)
====================================================== */
export const winnerTestData: Winner[] = [
  // 🗓 WEEKLY
  {
    userId: "user3",
    name: "Charlie",
    score: 150,
    rank: 1,
    periodType: "weekly",
    periodId: "2026-W14",
  },
  {
    userId: "user4",
    name: "Dave",
    score: 130,
    rank: 2,
    periodType: "weekly",
    periodId: "2026-W14",
  },
  {
    userId: "user5",
    name: "Eve",
    score: 120,
    rank: 3,
    periodType: "weekly",
    periodId: "2026-W14",
  },

  // 📅 MONTHLY
  {
    userId: "user1",
    name: "Alice",
    score: 400,
    rank: 1,
    periodType: "monthly",
    periodId: "2026-04",
  },
  {
    userId: "user6",
    name: "Frank",
    score: 350,
    rank: 2,
    periodType: "monthly",
    periodId: "2026-04",
  },
  {
    userId: "user7",
    name: "Grace",
    score: 300,
    rank: 3,
    periodType: "monthly",
    periodId: "2026-04",
  },

  // 📆 YEARLY
  {
    userId: "user2",
    name: "Bob",
    score: 1200,
    rank: 1,
    periodType: "yearly",
    periodId: "2026",
  },
  {
    userId: "user8",
    name: "Hank",
    score: 1100,
    rank: 2,
    periodType: "yearly",
    periodId: "2026",
  },
  {
    userId: "user9",
    name: "Ivy",
    score: 1000,
    rank: 3,
    periodType: "yearly",
    periodId: "2026",
  },
];

/* ======================================================
   🚀 SEED FUNCTION
====================================================== */
export async function seedWinners() {
  await insertWinnerBatch(winnerTestData);
}
