/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new WebpackPwaManifest({
      filename: 'manifest.webmanifest',
      name: 'Restoku',
      short_name: 'Restoku',
      description: 'Bergabung bersama kami dan tingkatkan penjualanmu!',
      start_url: '/',
      display: 'standalone',
      background_color: '#FFFFFF',
      theme_color: '#EF832A',
      inject: true,
      fingerprints: true,
      ios: true,
      icons: [
        {
          src: path.resolve('src', 'public/images/icons', 'icon.png'),
          sizes: [72, 96, 128, 144, 152, 192, 384, 512],
          ios: true,
          purpose: 'any maskable',
        },
      ],
    }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, 'src/scripts/workbox-sw.js'),
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
        imageminPngquant({
          quality: [0.3, 0.5],
        }),
      ],
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 50,
          },
        },
      ],
      overrideExtension: true,
    }),
  ],
};
