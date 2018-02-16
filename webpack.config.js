const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  entry: {
    'real_savvy_client': './src/index.js',
    'real_savvy_client.min': './src/index.js',
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
};
