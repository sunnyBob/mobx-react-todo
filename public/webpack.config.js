const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "src/js/main.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader'
    }]
  },
  devtool: 'eval-source-map',
  devServer: {
    port: 3033,
  },
}
