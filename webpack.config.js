var path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg');
const glob = require('glob');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: { presets: ["es2015"] }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: 'file-loader?name=/img/[name].[ext]'
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
  },
  plugins: [
    new ImageminPlugin({
      plugins: [
        imageminMozjpeg({
          quality: 35,
          progressive: true
        })
      ],
      externalImages: {
        context: 'src',
        sources: glob.sync('src/img/**/*.jpg'),
        destination: 'dist'
      }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('./src/index.html'),
    }),
  ]
};