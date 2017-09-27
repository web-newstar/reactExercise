const webpack = require('webpack');
module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + "/app/js/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true
  },
  module: {
    rules: [{
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "es2015", "react"
            ],
            plugins:["react-html-attrs"]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,

        use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究')
  ],
}
