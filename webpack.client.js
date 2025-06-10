const path = require('path');
const { WebpackAssetsManifest } = require('webpack-assets-manifest');

module.exports = {
  mode: 'production',
  entry: './src/client.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'client.bundle.js',
    publicPath: '/static/',
    clean: true
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
  plugins: [
    new WebpackAssetsManifest({
      output: 'assets.json',
      publicPath: '/static/',
      writeToDisk: true
    }),
  ],
};