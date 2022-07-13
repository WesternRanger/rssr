const { devCompile } = require('../../../build/dev.compile');
const isDev = process.env.NODE_ENV === 'development';
const path = require('path');
const fs = require('fs');

const ssrRender = (app) => {
  return async (ctx) => {
    let serverBundle = '';
    if (isDev) {
      serverBundle = await devCompile(ctx);
    } else {
      const buildPath = path.resolve(__dirname, '../../../dist/ssr/main.bundle.js');
      const bundle = fs.readFileSync(buildPath, 'utf-8');
      const Module = module.constructor;
      const m = new Module();
      m._compile(bundle, 'server-entry.js');
      serverBundle = m.exports.default;
    }
    ctx.type = 'text/html; charset=utf-8';
    ctx.body = serverBundle(ctx);
  }
}
module.exports = ssrRender;
