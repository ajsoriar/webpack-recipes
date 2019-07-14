const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
    module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Page title!',
      content_title: 'Content title!',
      template: './src/index.template.ejs',  
      inject: 'body',
      hash: true, //Notice the hash option has been set to true which will add a unique hash to the src of the embedded <script> tag.
      //minify: {
      //  removeComments: true,
      //  collapseWhitespace: true,
      //  conservativeCollapse: true
      //}
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          //keep_fnames: false,
          //mangle: true, 
          compress:false,
        },
      }),
    ]
  }
};