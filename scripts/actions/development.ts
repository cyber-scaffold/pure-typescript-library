import path from "path";
import webpack from "webpack";
import spawn from "cross-spawn";

import { client_development_config } from "../transcations/client/webpack.client.development";
import { server_development_config } from "../transcations/server/webpack.server.development";

export async function developmentAction() {

  /** 处理编译完成的事件 **/
  const process_list = [];

  /** watch客户端 **/
  //@ts-ignore
  const client_compiler = webpack(client_development_config);
  client_compiler.watch({}, async (error, stats) => {
    if (error) {
      console.log(error);
    } else {
      console.log(stats.toString({ colors: true }));
    };
  });

  /** watch服务端 **/
  //@ts-ignore
  const server_compiler = webpack(server_development_config);
  server_compiler.watch({}, async (error, stats) => {
    if (error) {
      console.log(error);
    } else {
      console.log(stats.toString({ colors: true }));
      process_list.forEach((current_process) => { current_process.kill() });
      const current_process = spawn("node", [path.resolve(process.cwd(), "./dist/server.js")], { stdio: "inherit" });
      process_list.push(current_process);
    };
  });

};