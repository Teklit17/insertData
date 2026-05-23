import { existsSync } from "fs";
import { resolve } from "path";
import {
  cert,
  getApps,
  initializeApp,
} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const projectId = process.env.FIREBASE_PROJECT_ID || "bible-memorise";
const credentialPath =
  process.env.GOOGLE_APPLICATION_CREDENTIALS ||
  process.env.FIREBASE_SERVICE_ACCOUNT_PATH ||
  "serviceAccountKey.json";

if (!getApps().length) {
  const resolvedCredentialPath = resolve(credentialPath);

  if (!existsSync(resolvedCredentialPath)) {
    throw new Error(
      [
        "Firebase Admin credentials not found.",
        `Expected service account file at: ${resolvedCredentialPath}`,
        "",
        "Download it from Firebase Console:",
        "Project settings > Service accounts > Generate new private key",
        "",
        "Save it as serviceAccountKey.json in this folder, or set",
        "GOOGLE_APPLICATION_CREDENTIALS to the full path of the JSON file.",
      ].join("\n"),
    );
  }

  initializeApp({
    credential: cert(require(resolvedCredentialPath)),
    projectId,
  });
}

export const adminDb = getFirestore();
