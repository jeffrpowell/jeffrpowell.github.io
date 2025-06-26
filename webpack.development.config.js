const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    aboutMe: './src/pages/about-me/about-me.js',
    tech: './src/pages/tech/tech.js',
    portfolio: './src/pages/portfolio/portfolio.js',
    tangram: './src/pages/tangram/tangram.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/about-me/about-me.html',
      filename: 'about-me.html',
      chunks: ['main', 'aboutMe'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/tech/tech.html',
      filename: 'tech.html',
      chunks: ['main', 'tech'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/portfolio/portfolio.html',
      filename: 'portfolio.html',
      chunks: ['main', 'portfolio'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/tangram/tangram.html',
      filename: 'tangram.html',
      chunks: ['main', 'tangram'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' },
        { from: 'CNAME', to: '' },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 4290,
    historyApiFallback: true,
  },
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
};
