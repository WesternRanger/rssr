const Router = require('@koa/router');
const router = new Router();
const render = require('./render');

module.exports = (app) => {
    router.get('/api/test', (ctx) => {
        ctx.type = 'text/html; charset=utf-8';
        ctx.body = 'ok';
    });
    // ssr 渲染
    // https://github.com/koajs/router/issues/76
    // router.get('(^(?!static))', render(app));
    router.get('/(home|about|noMatch|dashboard)?', render(app));
    app.use(router.routes()).use(router.allowedMethods());
};
