const mongoose = require('mongoose')
const Schema = mongoose.Schema
const cartSchema = new Schema({
    ID: Schema.Types.ObjectId,
    productId: {
        // 多表关联查询，根据该字段进行查询，相当于 where xx.id = yy.id
        type: Schema.Types.ObjectId,
        // ref: 关联两个表，Product: 指向model
        ref: 'Product'
    },
    userId: Schema.Types.ObjectId,
    createDate: {
        type: Date,
        default: Date.now()
    },
    count: Number,
    selected: Boolean
})
mongoose.model('Cart', cartSchema)