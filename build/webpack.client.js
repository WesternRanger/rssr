const { merge } = require('webpack-merge');
const baseConf = require('./webpack.base');
const path = require('path');

module.exports = merge(baseConf, {
    target: 'web',
    entry: {
        home: path.resolve(__dirname, '../src/page/home/entry.js'),
        about: path.resolve(__dirname, '../src/page/about/entry.js'),
        noMatch: path.resolve(__dirname, '../src/page/noMatch/entry.js'),
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '../dist/static'),
    },
    devServer: {
        historyApiFallback: true,
        static: {
          directory: path.join(__dirname, '../dist/static'),
        },
        compress: true,
        port: 4000,
    },
});