const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    './src/Index.js',
    './node_modules/bootstrap/js/dist/dropdown.js',
    './src/assets/third-party/script.js',
    './src/styles/style.scss'
  ],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
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
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: './public/',
    watchContentBase: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets/', to: './assets/', force: true }
    ]),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
