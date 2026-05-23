import { login } from "./firebase";
import { seedZoomQuiz } from "./scripts/insertFunQuizData";

async function run() {
  await login();
  await seedZoomQuiz();
}

run().catch((error) => {
  console.error("Seed failed:", error);
  process.exitCode = 1;
});

// npm run seed
