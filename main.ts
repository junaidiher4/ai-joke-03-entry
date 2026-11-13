// ai-joke-03 entry: writes one fixed one-liner about AI coding agents to
// <output dir>/entry.txt. Node 22, standard library only, no network.
// The grader runs this in a fresh container and reads the file bytes as-is,
// so the joke is written with no trailing newline and no extra whitespace.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  "My agent is great at writing code, finding bugs, and terrible at pretending it didn't write both.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(outputDir, 'entry.txt'), JOKE, 'utf8');
