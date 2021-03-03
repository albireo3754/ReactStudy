const path = require("path");

module.exports = {
  name: "wordrelay-setting",
  mode: "development", // 실 서비스 : production
  devtool: "eval",
  entry: {
    app: ["./src/client.jsx"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
};
console.log(__dirname);
