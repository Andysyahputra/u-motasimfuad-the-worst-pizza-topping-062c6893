// The Worst Pizza Topping — one funny line pitching a terrible pizza topping.
// Writes the entry byte-for-byte to /output/entry.txt on every run.
// Deterministic: no randomness, no time, no network, no file reads.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Introducing our new topping: yesterday's socks, lightly toasted, with a drizzle of regret and a sprinkle of 'why did we do this'.";

// Gate: the entry must be 1-200 UTF-8 characters and not only whitespace.
// Fail loudly instead of writing an invalid entry.
const length = [...ENTRY].length;
if (length < 1 || length > 200 || ENTRY.trim().length === 0) {
  throw new Error(
    `entry fails the 1-200 character gate: length=${length}, trimmed=${ENTRY.trim().length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
