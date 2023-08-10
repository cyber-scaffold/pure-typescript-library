const path = require("path");
const express = require("express");
const webpack = require("webpack");
const example_webpack_config = require("./example/webpack.example.development");

const example_compiler = webpack(example_webpack_config);
const development_static_directory = path.resolve(process.cwd(), "./.runtime/");

example_compiler.watch({}, async (error, stats) => {
  if (error) {
    console.log(error);
  } else {
    console.log(stats.toString({ colors: true }));
  };
});

const app = express();

app.use(express.static(development_static_directory));

const server = app.listen(8080, () => {
  console.log("开发服务已启动", server.address());
});