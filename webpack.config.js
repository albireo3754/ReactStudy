const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  name: 'rsp-setting',
  mode: 'development', // 실 서비스 : production
  devtool: 'eval-cheap-module-source-map',
  entry: {
    root: ['./src/root.tsx'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'root.js',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            getCustomTransformers: () => ({
              before: [
                require('react-refresh-typescript')(),
                createStyledComponentsTransformer(),
              ],
            }),
          },
        },
      },
      {
        test: /\.svg$/, // 이미지 확장자 regExp
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]?[hash]', // 파일명 또는 파일해쉬값
            publicPath: './dist/', // 빌드 후 limit가 넘는 파일 위치
            limit: 20000, // 10000byte 제한
            esModule: false,
          },
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.css', '.js', '.jsx', 'json'],
  },
  plugins: [
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
    !isDevelopment &&
      new uglifyjsWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
  ].filter(Boolean),
  devServer: {
    publicPath: '/dist/',
    hot: true,
  },
};
console.log(isDevelopment);
// {
//   test: /\.svg$/, // 이미지 확장자 regExp
//   exclude: /node_modules/,
//   use: {
//     loader: 'url-loader',
//     options: {
//       name: '[name].[ext]?[hash]', // 파일명 또는 파일해쉬값
//       publicPath: './dist/', // 빌드 후 limit가 넘는 파일 위치
//       limit: 20000, // 10000byte 제한
//     },
//   },
// },
