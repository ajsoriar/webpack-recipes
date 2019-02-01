const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom title!',
      template: './src/index.template.ejs',
      inject: 'body',
      hash: true, //Notice the hash option has been set to true which will add a unique hash to the src of the embedded <script> tag.
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        //test: /\.css$/,

        //test:/\.(s*)css$/,
        //use:['style-loader','css-loader', 'sass-loader']

        test:/\.(s*)css$/, 
        //use: ExtractTextPlugin.extract({ 
        //    fallback:'style-loader',
        //    use:['css-loader','sass-loader'],
        //})

        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },'css-loader','sass-loader'],

      }
    ]
  }
};


