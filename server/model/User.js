const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    userId: Schema.Types.ObjectId, // 唯一标识
    userName: {
        // unique: true代表当前用户名是唯一的
        unique: true,
        type: String
    },
    password: String,
    createDate: {
        type: Date,
        default: Date.now()
    }
})
// 发布之前加密 注意this
userSchema.pre('save', function (next) {
    // 随机生成盐 参数:(迭代次数, callback(错误, 加盐参数))
    bcrypt.genSalt(10, (err, salt) => {
        // 如果报错，直接执行下面代码
        if (err) return next(err)
        // 成功之后，进行加密，bcrypt.hash(加盐对象, 加盐参数, callback(错误, hash值))
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) return next(err)
            // 赋值
            this.password = hash
            next()
        })
    })
})
// 定义比较方法
userSchema.methods = {
    // _password: 加密前的方法, password:加密后的方法
    comparePassword: (_password, password) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(_password, password, (err, isMatch) => {
                if (!err) {
                    resolve(isMatch)
                } else {
                    reject(err)
                }
            })
        })
    }
}


// 发布模型
mongoose.model('User', userSchema)