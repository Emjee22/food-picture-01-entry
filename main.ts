// food-picture-01 entry (Node 22, standard library only): the picture is the
// entry.png beside this file, and the program copies it to the output directory
// the grader provides. Outside the grader, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The image is a whole JPEG (told apart by its first bytes FF D8 FF), 1024 by
// 1024 pixels, 271,877 bytes — under the 1 MiB cap. The copy is byte-exact,
// so running the program twice writes the same bytes both times.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(
  join(dirname(fileURLToPath(import.meta.url)), 'entry.png'),
  join(outDir, 'entry.png'),
);
