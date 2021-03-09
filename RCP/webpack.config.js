const Reload = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");
module.exports = {
  name: "rcp-setting",
  mode: "development",
  devtool: "eval",
  entry: {
    app: ["./src/client.jsx"],
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
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
    ],
  },
  plugins: [new Reload()],
  devServer: {
    publicPath: "/dist/",
    hot: true,
  },
};
