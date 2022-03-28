class UserController {
    async register (ctx, next) {
        ctx.body = '这是注册方法'
    } 
}

module.exports = new UserController()