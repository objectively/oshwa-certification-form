const path = require('path');

module.exports = {
  mode: 'production',
  context: __dirname,
  entry: '/client/script.js',
  output: {
    path: path.resolve(__dirname, 'public/javascript/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
