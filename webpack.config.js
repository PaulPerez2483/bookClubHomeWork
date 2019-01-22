const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main-bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader",
            ]
          }
        ]
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].css",
           chunkFilename: "[id].css"
          
        })
    ]

};