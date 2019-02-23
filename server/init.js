// 初始化mongoose
const mongoose = require('mongoose');
const db = 'mongodb://localhost/shop';


// 引入所有的模型Schema 
const glob = require('glob')
const path = require('path')
exports.initSchemas = () => {
    // 获取当前项目的绝对地址
    glob.sync(path.resolve(__dirname, './model', '*.js')).forEach(require)
}


exports.connect = () => {
    // 连接数据库
    mongoose.connect(db, {
        useNewUrlParser: true // 解析url
    })
    // 监听数据库连接
    mongoose.connection.on('disconnected', () => {
        mongoose.connect(db);
    })
    // 数据库出错
    mongoose.connection.on('error', error => {
        console.log(error)
        mongoose.connect(db);
    })
    // 连接的时候
    mongoose.connection.once('open', () => {
        console.log('mongoodb connected success')
    })
}