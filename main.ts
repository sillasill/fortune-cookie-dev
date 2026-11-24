import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "The legacy code you curse was written by a tired stranger who was once you.";

if (FORTUNE.length < 1 || FORTUNE.length > 120) {
  throw new Error("fortune must be 1 to 120 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
