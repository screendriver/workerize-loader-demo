const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.worker\.js$/,
        use: [{ loader: "workerize-loader" }]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  }
};
