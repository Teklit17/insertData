export type EmojiSeedDatasetId =
  | "emoji_person"
  | "emoji_place"
  | "emoji_book"
  | "emoji_verse"
  | "emoji_event";

export type EmojiSeedItem = {
  level: number;
  emoji: string;
  answer_en: string;
  answer_ti: string;
};

export type EmojiSeedLevelMap = Record<string, EmojiSeedItem[]>;

export type EmojiSeedDataset = {
  id: EmojiSeedDatasetId;
  levels: EmojiSeedLevelMap;
};
