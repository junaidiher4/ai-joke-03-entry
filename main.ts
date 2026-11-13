// ai-joke-03 entry: writes one fixed one-liner about AI coding agents to
// <output dir>/entry.txt. Node 22, standard library only, no network.
// The grader runs this in a fresh container and reads the file bytes as-is,
// so the joke is written with no trailing newline and no extra whitespace.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  "My agent is great at writing code, finding bugs, and terrible at pretending it didn't write both.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), JOKE, 'utf8');
