var path = require("path");
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
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
    // Copy the images folder and optimize all the images
    new CopyWebpackPlugin([
      {
        from: 'src/img/',
        to: 'img'
      },
      { from: path.join(__dirname, '/src/site.webmanifest'), to: path.join(__dirname, '/dist') },
      { from: path.join(__dirname, '/src/humans.txt'), to: path.join(__dirname, '/dist') },
      { from: path.join(__dirname, '/src/browserconfig.xml'), to: path.join(__dirname, '/dist') },
      { from: path.join(__dirname, '/src/img/favicon.ico'), to: path.join(__dirname, '/dist/img') },
      { from: path.join(__dirname, '/src/js/css_browser_selector.js'), to: path.join(__dirname, '/dist/js') }
    ]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        quality: '50-70'
      },
      plugins: [
        imageminMozjpeg({
          quality: 40,
          progressive: true
        })
      ]
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('./src/index.html'),
    }),
  ]
};