const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')
const fs = require('fs')
router.get('/insertType', async ctx => {
    fs.readFile('./data/type.json', 'utf8', (err, data) => {
        data = JSON.parse(data)
        let count = 0
        const Type = mongoose.model('Type')
        data.map((value, index) => {
            const newType = new Type()
            newType.save().then(() => {
                count++
                console.log('成功了:' + count)
            }).catch(err => {
                console.log('失败了:' + err)
            })
        })

    })
    ctx.body = '插入成功'
})

module.exports = router