const Router = require('koa-router')

const router = new Router({prefix: '/goods'})

router.get('/', (ctx, next) => {
    ctx.body = '这是商品页'
})

module.exports = router

