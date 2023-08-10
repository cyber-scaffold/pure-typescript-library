const path = require("path");
const WebpackBar = require("webpackbar");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const { name } = require("../../package.json");
const file_loader = require("../configs/file_loader");
const program_loader = require("../configs/program_loader");
const use_public_style_loader_list = require("../configs/use_public_style_loader_list");

module.exports = {
  cache: {
    type: "filesystem",
    memoryCacheUnaffected: true,
    allowCollectingMemory: true,
  },
  devtool: "source-map",
  entry: path.resolve(process.cwd(), "./example/index.tsx"),
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
    alias: {
      "library": path.resolve(process.cwd(), "./src/"),
      "@": path.resolve(process.cwd(), "./example/"),
      "@@": process.cwd(),
    }
  },
  module: {
    rules: [{
      test: /\.(css)$/,
      use: use_public_style_loader_list
    }, {
      test: /\.(scss|sass)$/,
      use: use_public_style_loader_list.concat([{
        loader: "sass-loader",
        options: {}
      }])
    }, {
      test: /\.less$/,
      use: use_public_style_loader_list.concat([{
        loader: "less-loader",
        options: {
          lessOptions: {
            javascriptEnabled: true,
          },
          implementation: require("less"),
          sourceMap: true
        }
      }])
    }].concat(program_loader).concat(file_loader)
  },
  plugins: [
    new WebpackBar({ name: "example" }),
    new NodePolyfillPlugin(),
    new WebpackAssetsManifest(),
    new HtmlWebpackPlugin({
      publicPath: "/",
      template: path.resolve(process.cwd(), "./example/index.html")
    })
  ]
};