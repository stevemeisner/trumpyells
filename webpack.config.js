/* === dont forget to import scss to main.js file === */
/* ===> import './main.scss'; <=== */

var path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist"
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
        use: 'file-loader?name=/image/[name].[ext]'
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
  },
};