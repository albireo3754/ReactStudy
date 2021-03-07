const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");
// const webpack = require("webpack");
// const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  name: "numberbaseball-setting",
  mode: "development",
  devtool: "eval",
  entry: {
    app: ["./client.jsx"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: { browsers: ["> 1% in KR"] },
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "react-refresh/babel",
            "@babel/plugin-proposal-class-properties",
          ],
        },
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  devServer: {
    publicPath: "/dist/",
    hot: true,
  },
};
