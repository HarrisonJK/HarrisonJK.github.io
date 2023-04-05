const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", //production
  entry: {
    main: path.resolve(__dirname, "src/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js", // "[name].[contenthash].js"
    clean: true,
  },
  //loaders //webpack knows json/js but it doesn't know handle them

  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: "HJK | Harrison James Katapodis Personal Website",
      filename: "index.html",
      template: path.resolve(__dirname, "src/temp.html"),
    }),
  ],
};
