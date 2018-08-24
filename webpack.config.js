var path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    new CopyWebpackPlugin([
      { from: 'src/img', to: 'img' }
    ]),
    new HtmlWebpackPlugin({
      // injects bundle.js to our new index.html
      inject: true,
      // copys the content of the existing index.html to the new /build index.html
      template: path.resolve('./src/index.html'),
    }),
  ]
};