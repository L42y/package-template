var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src',
  output: {
    path: 'lib',
    filename: 'index.js',
    libraryTarget: 'commonjs-module'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  },
  externals: [nodeExternals()]
};
