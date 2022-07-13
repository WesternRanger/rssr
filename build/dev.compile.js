const webpack = require('webpack');
const path = require('path');
const wpConf = require('./webpack.server');
const MFS = require('memory-fs');
const mfs = new MFS();

function devCompile(ctx) {
    return new Promise((res, rej) => {
        const serverCompiler = webpack(wpConf);
        serverCompiler.outputFileSystem = mfs;
        serverCompiler.intermediateFileSystem = mfs;
        serverCompiler.watch({}, (err, stats) => {
          if (err) {
            rej(err);
          }
          stats = stats.toJson();
          if (stats.errors.length) {
            console.error(stats.errors);
            rej(stats.errors);
          }
          const buildPath = 'main.bundle.js';
          // console.log(serverCompiler)
          const bundle = mfs.readFileSync(path.join(serverCompiler.outputPath, buildPath), 'utf-8')
          const Module = module.constructor;
          const m = new Module();
          m._compile(bundle, 'server-entry.js');
          const serverBundle = m.exports.default;
          res(serverBundle);
        });
    })
}
module.exports = {
    devCompile,
}
