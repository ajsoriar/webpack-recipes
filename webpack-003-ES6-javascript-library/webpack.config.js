var path = require('path');
var libraryName = 'library';
var outputFile = libraryName + '.js';

var config = {
  entry: './src/library-source-code.js',
  //devtool: 'source-map',

  /*
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  */

  output: {
    filename: outputFile, // 'main.js',
    path: path.resolve(__dirname, 'lib')
  },

  module: {

    /*
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
    */

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
  // resolve: {
  //   root: path.resolve('./src'),
  //   extensions: ['', '.js']
  // }
};

module.exports = config;