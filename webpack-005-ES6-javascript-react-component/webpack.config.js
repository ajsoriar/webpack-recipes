var path = require('path');
var libraryName = 'library';
var outputFile = libraryName + '.js';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var config = {
  //entry: './src/my-react-library.js',
  entry: {
    "my-react-library": './src/my-react-library.js',
    "my-react-library.min": './src/my-react-library.js'
  },
  output: {
    filename: outputFile, // 'main.js',
    path: path.resolve(__dirname, 'lib'),
    //filename: 'my-react-library.js',
    filename: "[name].js",
    library: ''
    //libraryTarget: 'var'
    //libraryTarget: 'commonJS'

    /*
    libraryTarget: 'umd',
    umdNamedDefine: true
    */  
  },
  module: {
   rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
          }
        }
      ]
  },
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      include: /\.min\.js$/
    })]
  }
};

module.exports = config;