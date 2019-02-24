const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.post('/addCart', async ctx => {
    const Cart = mongoose.model('Cart')
    const newCart = new Cart(ctx.request.body)
    await Cart.findOne({
        productId: ctx.request.body.productId
    }).exec().then(async res => {
        console.log(res)
        if (res) {
            // 如果购物车表中有该条数据
            await Cart.updateOne({
                productId: ctx.request.body.productId
            }, {
                $inc: {
                    count: ctx.request.body.count
                }
            }).then(result => {
                ctx.body = {
                    code: 200,
                    msg: '添加成功',
                    data: result
                }
            }).catch(err => {
                console.log(err)
                ctx.body = {
                    code: 500,
                    msg: err
                }
            })
        } else {
            // 如果购物车表中无该条数据
            await newCart.save().then(result => {
                ctx.body = {
                    code: 200,
                    msg: '添加成功',
                    data: result
                }
            }).catch(err => {
                console.log(err)
                ctx.body = {
                    code: 500,
                    msg: err
                }
            })
        }
    }).catch(err => {
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
router.post('/updateCart', async ctx => {
    const Cart = mongoose.model('Cart')
    await Cart.updateOne({
        productId: ctx.request.body.productId
    }, {
        $set: {
            selected: ctx.request.body.selected
        }
    }).then(res => {
        ctx.body = {
            code: 200,
            msg: '修改成功'
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: '修改失败',
            err: err
        }
    })
})

module.exports = router