const router = require('koa-router')()
const TOP = '/book'
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})
router.get(TOP + '/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.post(TOP + '/name/:name', async (ctx, next) => {
  ctx.body = `I am ${ctx.params.name}!`;
})

router.get(TOP + '/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router