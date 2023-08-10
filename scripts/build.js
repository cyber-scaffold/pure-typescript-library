const webpack = require("webpack");

const example_webpack_config = require("./example/webpack.client.build");
const library_webpack_config = require("./library/webpack.server.build");

(async () => {
  const example_compiler = webpack(example_webpack_config);
  const library_compiler = webpack(library_webpack_config);
  /** watch客户端 **/
  example_compiler.run((error, stats) => {
    if (error) {
      console.log(error);
    } else {
      console.log(stats.toString({ colors: true }));
    };
  });
  /** watch服务端 **/
  library_compiler.run(async (error, stats) => {
    if (error) {
      console.log(error);
    } else {
      console.log(stats.toString({ colors: true }));
    };
  });

})();