const path = require('path');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/server.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: [/node_modules/],
  externalsPresets: { node: true },
};