// 第一步：三级引用 - 引入：官方库
const Koa = require('Koa')
// 第一步：三级引用 - 引入：第三方库

// 第一步：三级引用 - 引入：自己写的库
const { indexRouter, userRouter, goodsRouter } = require('../router/main.route')

// 第二步：实例化
const app = new Koa()


// 第三步：注册
app.use(indexRouter.routes())
app.use(userRouter.routes())
app.use(goodsRouter.routes())

// 第四步：导出
module.exports = app


