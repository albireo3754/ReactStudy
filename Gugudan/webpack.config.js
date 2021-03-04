const path = require("path");

module.exports = {
  name: "gugu-setting",
  mode: "development",
  devtool: "eval",
  entry: {
    app: ["./main.jsx"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
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
                targets: { browsers: ["last 2 chrome versions"] },
              },
            ],
            "@babel/preset-react",
          ],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
  plugins: [],
};
