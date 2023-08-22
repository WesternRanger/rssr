const Router = require('@koa/router');
const router = new Router();
const render = require('./render');
const setHeaders = require('../middleware/cookies');

module.exports = (app) => {
    router.get('/api/test', (ctx) => {
        ctx.type = 'text/html; charset=utf-8';
        ctx.body = 'ok';
    });

    router.get('/api/getList', (ctx) => {
        const list = [
            {
                name: 'appname',
                version: 'v11.1.8',
                os: 'iOS'
            },
            {
                name: 'extends',
                version: 'v11.1.10',
                os: 'Android'
            }
        ]
        ctx.body = list;
    });

    // ssr 渲染
    // https://github.com/koajs/router/issues/76
    // router.get('(^(?!static))', render(app));
    router.get('/(home|about|noMatch|dashboard)?', render(app));
    app.use(setHeaders).use(router.routes()).use(router.allowedMethods());
};
