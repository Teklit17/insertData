import { login } from "./firebase";
import { seedBooks } from "./scripts/insertBook";

async function run() {
  await login();
  await seedBooks();
}

run().catch((error) => {
  console.error("Seed failed:", error);
  process.exitCode = 1;
});

// npm run seed
