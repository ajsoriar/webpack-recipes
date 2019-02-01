const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

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
    })
  ],
  module: {
    rules: [
      {
        //test: /\.css$/,
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader']
      }
    ]
  }
};
