const Koa = require('koa');
const app = new Koa();
const port = 3000;
const router = require('./src/controller/router');
const proxy = require('koa-http2-proxy');
const isDev = process.env.NODE_ENV === 'development';
const isQa = process.env.NODE_ENV === 'qa';
router(app);
if (isDev || isQa) {
    app.use(proxy({ target: 'http://127.0.0.1:4000' }));
}
app.listen(port);
