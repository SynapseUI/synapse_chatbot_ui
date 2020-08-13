const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './example/entry.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      package: path.join(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          },
        }
        ],
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: './assets/[name].[hash:4].[ext]',
              limit: 10000,
            },
          },
          {
            loader: 'img-loader',
          },
        ],
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  devServer: {
    contentBase: 'example/',
  },
  devtool: 'source-map'
};
