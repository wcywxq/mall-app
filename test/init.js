const mongoose = require('mongoose')
const db = 'mongodb://localhost/test'

const glob = require('glob')
const path = require('path')

exports.initSchemas = () => {
    glob.sync(path.resolve(__dirname, './model', '*.js')).forEach(require)
}

exports.connect = () => {
    mongoose.connect(db, {
        useNewUrlParser: true
    })
    mongoose.connection.on('disconnected', () => {
        console.log('数据库已经断开')
        mongoose.connect(db)
    })
    mongoose.connection.on('error', err => {
        console.log('出错了：' + err)
        mongoose.connect(db)
    })
    mongoose.connection.once('open', () => {
        console.log('数据库已连接')
    })
}