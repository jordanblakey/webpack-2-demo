module.exports = {
  entry: './app/index.js',
  //webpack creates a graph of all of your application's dependencies. The starting point of this graph is known as an entry point. The entry point tells webpack where to start and follows the graph of dependencies to know what to bundle. You can think of your application's entry point as the contextual root or the first file to kick off your app.

  output: {
    filename: 'bundle.js',
    path: './dist'
    //Once you've bundled all of your assets together, we still need to tell webpack where to bundle our application. The webpack output property describes to webpack how to treat bundled code.
  }
}
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

const config = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './index.html'})
  ]
};

module.exports = config;
