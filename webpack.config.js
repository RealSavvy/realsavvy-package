const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');

let clientConfig = {
  target: 'web',
  entry: {
    'real_savvy.web': './src/index.js',
    'real_savvy.web.min': './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: ['RealSavvy'],
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /src\/\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          }
        }
      }
    ]
  },
  plugins: [
    new MinifyPlugin({},{include: /\.min\.js$/})
  ]
}

let serverConfig = {
  target: 'node',
  entry: {
    'real_savvy.node': './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: ['RealSavvy'],
    libraryTarget: 'umd',
  }
}

module.exports = [clientConfig, serverConfig]
