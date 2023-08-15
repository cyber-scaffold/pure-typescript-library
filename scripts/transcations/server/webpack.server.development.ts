import path from "path";
import { merge } from "webpack-merge";
import nodeExternals from "webpack-node-externals";

import { basic_server_config } from "./webpack.server.basic";

export const server_development_config = merge(basic_server_config, {
  //@ts-ignore
  mode: "development",
  output: {
    clean: true,
    path: path.resolve(process.cwd(), "./dist/"),
    filename: "server.js",
  },
  entry: [
    "source-map-support/register",
    path.resolve(process.cwd(), "./example/index.ts")
  ],
  externals: [nodeExternals({
    modulesFromFile: path.resolve(process.cwd(), "./package.json")
  })],
});