const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.post('/registUser', async ctx => {
    const User = mongoose.model('User')
    const newUser = new User(ctx.request.body)
    await newUser.save().then(() =>{
        ctx.body = {
            code: 200,
            msg: '注册成功'
        }
    }).catch(err => {
        ctx.body = {
            code: 201,
            msg: '注册失败',
            err: err
        }
    })
})
router.post('/loginUser', async ctx => {
    const loginUser = ctx.request.body
    const { userName, password } = loginUser
    const User = mongoose.model('User')
    await User.findOne({ userName }).exec().then(async result => {
        if(result) {
            const newUser = new User()
            await newUser.comparePassword(password, result.password).then(isMatch => {
                ctx.body = {
                    code: 200,
                    msg: '登陆成功',
                    userInfo: result
                }
            }).catch(err => {
                ctx.body = {
                    code: 201,
                    msg: '登陆失败, 密码错误',
                    err: err
                }
            })
        } else {
            ctx.body = {
                code: 201,
                msg: '登陆失败, 密码错误'
            }
        }
    }).catch(err => {
        ctx.body = {
            code: 201,
            msg: '登陆失败，用户名不存在',
            err: err
        }
    })
})

module.exports = router