import path from "path";
import { merge } from "webpack-merge";
import nodeExternals from "webpack-node-externals";

import { basic_library_config } from "./webpack.library.basic";

export const production_library_config = merge(basic_library_config, {
  //@ts-ignore
  mode: "production",
  output: {
    clean: true,
    path: path.resolve(process.cwd(), "./dist/"),
    filename: "index.js",
  },
  optimization: {
    nodeEnv: false,
    //@ts-ignore
    minimize: false
  },
  entry: path.resolve(process.cwd(), "./src/index.ts"),
  externals: [nodeExternals({
    modulesFromFile: path.resolve(process.cwd(), "./package.json")
  })]
});