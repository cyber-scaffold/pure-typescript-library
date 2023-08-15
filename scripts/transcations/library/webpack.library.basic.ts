import path from "path";
import WebpackBar from "webpackbar";

import { program_loader } from "../../configs/program_loader";

export const basic_library_config = {
  cache: {
    type: "filesystem",
    memoryCacheUnaffected: true,
    allowCollectingMemory: true,
  },
  target: "node",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(process.cwd(), "./src/"),
      "@@": process.cwd(),
    }
  },
  externalsPresets: { node: true },
  optimization: {
    nodeEnv: false
  },
  module: {
    rules: [].concat(program_loader)
  },
  plugins: [
    new WebpackBar({ name: "编译库文件" })
  ]
};