// "Till Firmware Do Us Part" — one robot wedding vow, single sentence, under 200 chars.
// The line below must stay byte-for-byte: single line, no trailing newline.
const LINE = "I vow to share my bandwidth, my battery, and my last firmware update with you — forever, or until the next patch.";

import { mkdirSync, writeFileSync } from "node:fs";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
