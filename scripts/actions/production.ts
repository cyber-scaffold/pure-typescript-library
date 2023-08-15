import webpack from "webpack";
import { production_library_config } from "../transcations/library/webpack.library.production";

export async function productionAction() {
  //@ts-ignore
  const library_compiler = webpack(production_library_config);
  /** 编译库文件 **/
  library_compiler.run((error, stats) => {
    if (error) {
      console.log(error);
    } else {
      console.log(stats.toString({ colors: true }));
    };
  });
};