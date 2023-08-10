const webpack = require("webpack");
const library_webpack_config = require("./library/webpack.library.build");

(async () => {
  const library_compiler = webpack(library_webpack_config);
  /** watch服务端 **/
  library_compiler.run(async (error, stats) => {
    if (error) {
      console.log(error);
    } else {
      console.log(stats.toString({ colors: true }));
    };
  });
})();