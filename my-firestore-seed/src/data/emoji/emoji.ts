import { emojiBooks } from "./books";
import { emojiEvents } from "./events";
import { emojiPeople } from "./people";
import { emojiPlaces } from "./places";
import { emojiVerses } from "./verses";
import type { EmojiSeedDatasetId, EmojiSeedLevelMap } from "./types";

export type { EmojiSeedDataset, EmojiSeedDatasetId, EmojiSeedItem, EmojiSeedLevelMap } from "./types";
export { emojiBooks } from "./books";
export { emojiEvents } from "./events";
export { emojiPeople } from "./people";
export { emojiPlaces } from "./places";
export { emojiVerses } from "./verses";

export const EMOJI_SEED_DATASETS = [
  emojiPeople,
  emojiPlaces,
  emojiBooks,
  emojiVerses,
  emojiEvents,
];

export const EMOJI_SEED_LEVELS: Record<EmojiSeedDatasetId, EmojiSeedLevelMap> =
  EMOJI_SEED_DATASETS.reduce(
    (levelsByDataset, dataset) => ({
      ...levelsByDataset,
      [dataset.id]: dataset.levels,
    }),
    {} as Record<EmojiSeedDatasetId, EmojiSeedLevelMap>,
  );
