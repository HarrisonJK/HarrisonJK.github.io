const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", //production
  entry: {
    main: path.resolve(__dirname, "src/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js", //'[name].bundle.js'
    clean: true,
  },
  //loaders //webpack knows json/js but it doesn't know handle them

  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: "Demo",
      filename: "index.html",
      template: path.resolve(__dirname, "src/temp.html"),
    }),
  ],
};
