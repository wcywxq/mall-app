const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')
const fs = require('fs')
router.get('/insertProductInfo', async ctx => {
    fs.readFile('./data/product.json', 'utf8', (err, data) => {
        data = JSON.parse(data)
        let count = 0
        const Product = mongoose.model('Product')
        data.map((value, index) => {
            const newProduct = new Product(value)
            newProduct.type = Math.floor(Math.random() * 8) + 1
            newProduct.save().then(() => {
                count++
                console.log('成功：' + count)
            }).catch(err => {
                console.log('失败：' + err)
            })
        })
    })
    ctx.body = '插入成功'
})

module.exports = router