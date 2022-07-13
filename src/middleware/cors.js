async function allowCORS(ctx, next) {
    console.log(ctx.headers['origin'])
    ctx.set({
      'Access-Control-Allow-Origin': 'http://127.0.0.1:9000'
      // 'Access-Control-Allow-Origin': ctx.headers['origin']
      // 'Access-Control-Allow-Origin': '*'
    })
    next()
  }
  
  module.exports = allowCORS
  