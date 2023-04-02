const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", //or production
  entry: {
    main: path.resolve(__dirname, "src/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "build/static"),
    filename: "[name].bundle.js", //or [name].[contenthash].bundle.js  for a unique hash
    clean: true,
  },
  //loaders

  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: "just a demo",
      filename: "index.html",
      template: path.resolve(__dirname, "index.html"), //"src/temp.html"),
    }),
  ],
};
