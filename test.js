// const a = require('./dist/home.bundle.js');
const webpack = require('webpack');
// console.log(a);
const wpConf = require('./build/webpack.base');
webpack(wpConf)