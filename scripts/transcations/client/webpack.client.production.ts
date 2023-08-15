import path from "path";
import { merge } from "webpack-merge";
import { basic_client_config } from "./webpack.client.basic";

export const client_production_config = merge(basic_client_config, {
  //@ts-ignore
  mode: "production",
  output: {
    clean: true,
    path: path.resolve(process.cwd(), "./dist/applications/"),
    filename: "application.[fullhash].js",
  }
});