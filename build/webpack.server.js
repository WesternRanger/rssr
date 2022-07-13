const { merge } = require('webpack-merge');
const baseConf = require('./webpack.base');
const path = require('path');
module.exports = merge(baseConf, {
    entry: path.resolve(__dirname, '../src/page/server.entry.js'),
    output: {
        path: path.resolve(__dirname, '../dist/ssr'),
        filename: '[name].bundle.js',
        libraryTarget: 'commonjs2',
      },
    target: 'node',
});