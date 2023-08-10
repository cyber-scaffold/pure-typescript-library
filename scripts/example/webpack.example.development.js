const path = require("path");
const { merge } = require("webpack-merge");

const basic_client_config = require("../example/webpack.example.basic");

module.exports = merge(basic_client_config, {
  mode: "development",
  output: {
    clean: true,
    path: path.resolve(process.cwd(), "./.runtime/"),
    filename: "example.js",
  }
});