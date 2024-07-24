const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', //change back to production when ready, to minify the names
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'To Do List',
      template: 'src/index.html',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};