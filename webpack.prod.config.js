const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/Index.js',
    './node_modules/bootstrap/js/dist/dropdown.js',
    './src/assets/third-party/script.js',
    './src/styles/style.scss'
  ],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.min.js'
  },
  cache: true,
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            minimize: true
          },
        }],
      }),
    },
    {
      test: /\.scss/,
      loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: 'babel-loader',
      options: {
        presets: ['react', 'stage-0', 'env'],
        plugins: ['transform-class-properties', 'transform-decorators-legacy']
      },
    },
    {
      test: /\.(jpe?g|png|svg|gif|woff|woff2|eot|ttf)$/,
      use: {
        loader: 'url-loader',
        options: {
          imit: 8192,
          name: './assets/images/[name].[ext]'
        }
      }
    }]
  },
  devServer: {
    contentBase: './dist/',
    watchContentBase: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      filename: 'index.html'
    }),
    new ExtractTextPlugin({
      filename: 'style.min.css',
      disable: false,
      allChunks: true
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets/', to: './assets/', force: true }
    ]),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_debugger: true,
        warnings: false
      }
    })
  ]
};
