import path from "path";
import nodemon from "nodemon";
import watch from "node-watch";
import { IOCContainer } from "@/frameworks/cores/IOCContainer";
import { FrameworkBasicConfig } from "@/frameworks/commons/FrameworkBasicConfig";

import { ClearDirectory } from "@/frameworks/actions/ClearDirectory";
import { GenerateDeclaration } from "@/frameworks/actions/GenerateDeclaration";
import { TransformSourceCode } from "@/frameworks/actions/TransformSourceCode";

async function bootstrap() {
  const $TransformSourceCode = IOCContainer.get(TransformSourceCode);
  await $TransformSourceCode.initialize();
  await $TransformSourceCode.processEverySourceCodeFile();
  await $TransformSourceCode.complateAndGenerate();

  const $GenerateDeclaration = IOCContainer.get(GenerateDeclaration);
  await $GenerateDeclaration.initialize();
  await $GenerateDeclaration.processEverySourceCodeFile();
  await $GenerateDeclaration.complateAndGenerate();
};

setImmediate(async () => {
  await IOCContainer.get(FrameworkBasicConfig).initialize();
  await IOCContainer.get(ClearDirectory).execute();
  await bootstrap();
  watch(path.resolve(process.cwd(), "./main/"), { recursive: true }, bootstrap);
  nodemon({
    verbose: true,
    exec: "node",
    args: ["-r", "esbuild-register"],
    watch: [
      path.resolve(process.cwd(), "./main/"),
      path.resolve(process.cwd(), "./examples/")
    ],
    script: path.resolve(process.cwd(), "./examples/index.ts")
  });
});