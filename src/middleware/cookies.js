const generateId = require('./deviceid');

async function setHeaders(ctx, next) {
    if (ctx.query.id) {
        console.log('ctx.query----------------------', ctx.query);
        console.log('ctx.url----------------------', ctx.url);
        console.log('ctx.path----------------------', ctx.path);
        console.log('ctx.href----------------------', ctx.href);
        ctx.set({
            'device-id': generateId(ctx.query.id)
        })
        console.log('ctx.headers ========', ctx)
    }
    await next()
}

module.exports = setHeaders
