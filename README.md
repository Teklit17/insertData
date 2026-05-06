# insertData

import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import type { JSX } from "react";
import React from "react";
import { colors } from "./colors";

const SIZE = 24;
const COLOR = colors.backgroundPrimary;

export const NT*BOOK_ICONS: Record<string, () => JSX.Element> = {
/* ================= GOSPELS ================= _/
/_ ================= GOSPELS ================= \_/

// Matthew — teaching and structure
matthew: () => <Feather name="book" size={SIZE} color={COLOR} />,

// Mark — fast action and urgency
mark: () => <Feather name="zap" size={SIZE} color={COLOR} />,

// Luke — compassion and care
luke: () => <Feather name="heart" size={SIZE} color={COLOR} />,

// John — light and divine insight
john: () => <Feather name="sun" size={SIZE} color={COLOR} />,

/_ ================= HISTORY ================= _/

// Acts — the church spreading outward
acts: () => (
<MaterialCommunityIcons name="map-marker-path" size={SIZE} color={COLOR} />
),

/_ ================= PAULINE EPISTLES ================= _/

// Romans — balance of law and grace
romans: () => (
<MaterialCommunityIcons name="scale-balance" size={SIZE} color={COLOR} />
),

// 1 Corinthians — community and church issues
"1_corinthians": () => (
<MaterialCommunityIcons
      name="account-group-outline"
      size={SIZE}
      color={COLOR}
    />
),

// 2 Corinthians — renewal and reconciliation
"2_corinthians": () => (
<MaterialCommunityIcons name="refresh" size={SIZE} color={COLOR} />
),

// Galatians — freedom from bondage
galatians: () => (
<MaterialCommunityIcons
      name="lock-open-outline"
      size={SIZE}
      color={COLOR}
    />
),

// Ephesians — unity and spiritual position
ephesians: () => (
<MaterialCommunityIcons name="layers-outline" size={SIZE} color={COLOR} />
),

// Philippians — joy in hardship
philippians: () => (
<MaterialCommunityIcons
      name="emoticon-happy-outline"
      size={SIZE}
      color={COLOR}
    />
),

// Colossians — Christ's authority
colossians: () => (
<MaterialCommunityIcons
      name="shield-crown-outline"
      size={SIZE}
      color={COLOR}
    />
),

// 1 Thessalonians — waiting with hope
"1_thessalonians": () => (
<MaterialCommunityIcons name="clock-outline" size={SIZE} color={COLOR} />
),

// 2 Thessalonians — warning and correction
"2_thessalonians": () => (
<MaterialCommunityIcons
      name="alert-circle-outline"
      size={SIZE}
      color={COLOR}
    />
),

// 1 Timothy — leadership and order
"1_timothy": () => (
<MaterialCommunityIcons
      name="account-check-outline"
      size={SIZE}
      color={COLOR}
    />
),

// 2 Timothy — perseverance to the end
"2_timothy": () => (
<MaterialCommunityIcons name="flag-outline" size={SIZE} color={COLOR} />
),

// Titus — responsible living
titus: () => (
<MaterialCommunityIcons
      name="clipboard-check-outline"
      size={SIZE}
      color={COLOR}
    />
),

// Philemon — forgiveness and restoration
philemon: () => (
<MaterialCommunityIcons
      name="handshake-outline"
      size={SIZE}
      color={COLOR}
    />
),

/_ ================= GENERAL EPISTLES ================= _/

// Hebrews — connection between covenants
hebrews: () => (
<MaterialCommunityIcons name="link-variant" size={SIZE} color={COLOR} />
),

// James — faith shown through action
james: () => (
<MaterialCommunityIcons name="tools" size={SIZE} color={COLOR} />
),

// 1 Peter — hope during suffering
"1_peter": () => (
<MaterialCommunityIcons name="anchor" size={SIZE} color={COLOR} />
),

// 2 Peter — guarding truth
"2_peter": () => (
<MaterialCommunityIcons name="compass-outline" size={SIZE} color={COLOR} />
),

// 1 John — love as the core message
"1_john": () => (
<MaterialCommunityIcons name="heart-outline" size={SIZE} color={COLOR} />
),

// 2 John — discernment against deception
"2_john": () => (
<MaterialCommunityIcons name="eye-off-outline" size={SIZE} color={COLOR} />
),

// 3 John — support and hospitality
"3_john": () => (
<MaterialCommunityIcons name="send-outline" size={SIZE} color={COLOR} />
),

// Jude — defending the faith
jude: () => (
<MaterialCommunityIcons
      name="shield-alert-outline"
      size={SIZE}
      color={COLOR}
    />
),

/_ ================= PROPHECY ================= _/

// Revelation — vision and divine revelation
revelation: () => (
<MaterialCommunityIcons name="eye-outline" size={SIZE} color={COLOR} />
),
};
/_ ================= OLD TESTAMENT ================= _/

export const OT_BOOK_ICONS: Record<string, () => JSX.Element> = {

/_ ================= LAW / TORAH ================= _/

// Genesis — beginnings and creation
genesis: () => <Feather name="sunrise" size={SIZE} color={COLOR} />,

// Exodus — deliverance and journey
exodus: () => (
<MaterialCommunityIcons name="walk" size={SIZE} color={COLOR} />
),

// Leviticus — holiness and worship
leviticus: () => (
<MaterialCommunityIcons
      name="account-tie-outline"
      size={SIZE}
      color={COLOR}
    />
),

// Numbers — wandering and testing
numbers: () => (
<MaterialCommunityIcons name="map-outline" size={SIZE} color={COLOR} />
),

// Deuteronomy — law and remembrance
deuteronomy: () => (
<MaterialCommunityIcons
      name="book-open-outline"
      size={SIZE}
      color={COLOR}
    />
),

/_ ================= HISTORY ================= _/

// Joshua — conquest and inheritance
joshua: () => (
<MaterialCommunityIcons name="sword" size={SIZE} color={COLOR} />
),

// Judges — cycles of sin and deliverance
judges: () => (
<MaterialCommunityIcons name="rotate-3d" size={SIZE} color={COLOR} />
),

// Ruth — loyalty and redemption
ruth: () => (
<MaterialCommunityIcons
      name="hand-heart-outline"
      size={SIZE}
      color={COLOR}
    />
),

// 1 Samuel — leadership and kingship
"1_samuel": () => (
<MaterialCommunityIcons name="crown-outline" size={SIZE} color={COLOR} />
),

// 2 Samuel — David’s reign
"2_samuel": () => (
<MaterialCommunityIcons name="crown" size={SIZE} color={COLOR} />
),

// 1 Kings — divided kingdom
"1_kings": () => (
<MaterialCommunityIcons
      name="account-multiple-outline"
      size={SIZE}
      color={COLOR}
    />
),

// 2 Kings — decline and exile
"2_kings": () => (
<MaterialCommunityIcons
      name="arrow-down-bold-outline"
      size={SIZE}
      color={COLOR}
    />
),

// 1 Chronicles — sacred history
"1_chronicles": () => (
<MaterialCommunityIcons name="history" size={SIZE} color={COLOR} />
),

// 2 Chronicles — temple and reform
"2_chronicles": () => (
<MaterialCommunityIcons name="temple-hindu" size={SIZE} color={COLOR} />
),

// Ezra — restoration of worship
ezra: () => (
<MaterialCommunityIcons name="hammer-wrench" size={SIZE} color={COLOR} />
),

// Nehemiah — rebuilding the wall
nehemiah: () => (
<MaterialCommunityIcons name="wall" size={SIZE} color={COLOR} />
),

// Esther — courage and deliverance
esther: () => (
<MaterialCommunityIcons
      name="shield-star-outline"
      size={SIZE}
      color={COLOR}
    />
),

/_ ================= POETRY & WISDOM ================= _/

// Job — suffering and perseverance
job: () => (
<MaterialCommunityIcons
      name="weather-lightning"
      size={SIZE}
      color={COLOR}
    />
),

// Psalms — worship and prayer
psalms: () => <Feather name="music" size={SIZE} color={COLOR} />,

// Proverbs — wisdom and instruction
proverbs: () => (
<MaterialCommunityIcons
      name="lightbulb-outline"
      size={SIZE}
      color={COLOR}
    />
),

// Ecclesiastes — meaning of life
ecclesiastes: () => (
<MaterialCommunityIcons name="infinity" size={SIZE} color={COLOR} />
),

// Song of Solomon — love and devotion

song_of_songs: () => (
<MaterialCommunityIcons
      name="heart-multiple-outline"
      size={SIZE}
      color={COLOR}
    />
),

/_ ================= MAJOR PROPHETS ================= _/

// Isaiah — salvation and hope
isaiah: () => (
<MaterialCommunityIcons name="star-outline" size={SIZE} color={COLOR} />
),

// Jeremiah — warning and lament
jeremiah: () => (
<MaterialCommunityIcons name="water-outline" size={SIZE} color={COLOR} />
),

// Lamentations — grief and mourning
lamentations: () => (
<MaterialCommunityIcons
      name="emoticon-sad-outline"
      size={SIZE}
      color={COLOR}
    />
),

// Ezekiel — visions and renewal
ezekiel: () => (
<MaterialCommunityIcons
      name="eye-circle-outline"
      size={SIZE}
      color={COLOR}
    />
),

// Daniel — faith under pressure
daniel: () => (
<MaterialCommunityIcons
      name="shield-sun-outline"
      size={SIZE}
      color={COLOR}
    />
),

/_ ================= MINOR PROPHETS ================= _/

hosea: () => (
<MaterialCommunityIcons
      name="heart-broken-outline"
      size={SIZE}
      color={COLOR}
    />
),

joel: () => (
<MaterialCommunityIcons
      name="weather-hurricane"
      size={SIZE}
      color={COLOR}
    />
),

amos: () => (
<MaterialCommunityIcons name="scale-unbalanced" size={SIZE} color={COLOR} />
),

obadiah: () => (
<MaterialCommunityIcons name="terrain" size={SIZE} color={COLOR} />
),

jonah: () => <MaterialCommunityIcons name="fish" size={SIZE} color={COLOR} />,

micah: () => (
<MaterialCommunityIcons name="gavel" size={SIZE} color={COLOR} />
),

nahum: () => <MaterialCommunityIcons name="fire" size={SIZE} color={COLOR} />,

habakkuk: () => (
<MaterialCommunityIcons
      name="help-circle-outline"
      size={SIZE}
      color={COLOR}
    />
),

zephaniah: () => (
<MaterialCommunityIcons
      name="alarm-light-outline"
      size={SIZE}
      color={COLOR}
    />
),

haggai: () => (
<MaterialCommunityIcons name="hammer-wrench" size={SIZE} color={COLOR} />
),

zechariah: () => (
<MaterialCommunityIcons
      name="horse-variant-fast"
      size={SIZE}
      color={COLOR}
    />
),

malachi: () => (
<MaterialCommunityIcons
      name="message-alert-outline"
      size={SIZE}
      color={COLOR}
    />
),
};
