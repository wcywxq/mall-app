const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')
// 发送的地址与请求的地址必须相同
router.post('/registUser', async ctx => {
    console.log('请求成功');
    ctx.body = '请求成功';
    // 获取model, 接收模型
    const User = mongoose.model('User');
    // 接收post请求，封装成user对象
    let newUser = new User(ctx.request.body)
    // 保存数据，异步
    await newUser.save().then(() => {
        ctx.body = {
            code: 200,
            msg: '注册成功'
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: err
        }
    })
})
router.post('/loginUser', async ctx => {
    // 接受前段发送的数据
    let loginUser = ctx.request.body
    // let userName = loginUser.userName
    // let password = loginUser.password
    let {
        userName,
        password
    } = loginUser

    // 引入model
    const User = mongoose.model('User')
    // 查询用户名是否存在，如果存在，然后去比较密码
    await User.findOne({
        userName
    }).exec().then(async result => {
        if (result) {
            // 比较密码
            let newUser = new User()
            await newUser.comparePassword(password, result.password).then(isMatch => {
                // 登陆成功
                if (isMatch) {
                    ctx.body = {
                        code: 200,
                        msg: '登陆成功',
                        userInfo: result
                    }
                } else {
                    // 登录失败
                    ctx.body = {
                        code: 201,
                        msg: '登陆失败'
                    }
                }
            })
        } else {
            ctx.body = {
                code: 201,
                msg: '用户名不存在'
            }
        }
    })



})

module.exports = router