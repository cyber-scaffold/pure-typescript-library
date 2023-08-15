import path from "path";
import { merge } from "webpack-merge";
import { basic_client_config } from "./webpack.client.basic";

export const client_development_config = merge(basic_client_config, {
  //@ts-ignore
  mode: "development",
  output: {
    clean: true,
    path: path.resolve(process.cwd(), "./dist/applications/"),
    filename: "application.js",
  }
});