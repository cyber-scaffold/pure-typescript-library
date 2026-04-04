import fs from "fs";
import path from "path";
import { promisify } from "util";

import { transform } from "@@/frameworks/transform";
import { declaration } from "@@/frameworks/declaration";

setImmediate(async () => {
  await promisify(fs.rm)(path.resolve(process.cwd(), "./dist/"), { recursive: true, force: true });
  await promisify(fs.rm)(path.resolve(process.cwd(), "./types/"), { recursive: true, force: true });
  await transform();
  await declaration();
});