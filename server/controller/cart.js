const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.post('/addCart', async ctx => {
    const Cart = mongoose.model('Cart')
    const newCart = new Cart(ctx.request.body)
    await newCart.save().then(() => {
        ctx.body = {
            code: 200,
            msg: '添加成功'
        }
    }).catch(err => {
        console.log(err)
        ctx.body = {
            code: 500,
            msg: err
        }
    })
})
// 此处populate()用于进行多表关联查询，参数为：两表进行联系的字段
router.get('/getCart', async ctx => {
    const Cart = mongoose.model('Cart')
    await Cart.find({
        userId: ctx.query.userId
    }).populate('productId').exec().then(res => {
        ctx.body = res
    })
})
router.post('/delCart', async ctx => {
    const Cart = mongoose.model('Cart')
    await Cart.remove({
        productId: ctx.request.body.productId
    }).then(() => {
        ctx.body = {
            code: 200,
            msg: '删除成功'
        }
    }).catch(err => {
        ctx.body = {
            code: 201,
            msg: '删除失败'
        }
    })
})

module.exports = router