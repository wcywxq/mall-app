const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')
// 读取文件
const fs = require('fs')

router.get('/insertProductInfo', async ctx => {
    fs.readFile('./data/product.json', 'utf8', (err, data) => {
        data = JSON.parse(data)
        // console.log(data)
        let count = 0; // 计数器
        const Product = mongoose.model('Product')
        data.map((value, index) => {
            // console.log(value)
            let product = new Product(value)
            // 随机生成类型, 1-8的范围
            product.type = Math.floor(Math.random() * 8) + 1;
            product.save().then(() => {
                count++;
                console.log('成功' + count + '条')
            }).catch(err => {
                console.log('失败:' + err)
            })
        })
    })
    ctx.body = '导入数据'
})

module.exports = router