const Koa = require('koa');
const app = new Koa();

//解决跨域
const cors = require('koa2-cors')
app.use(cors({
    origin: ['http://localhost:8080'],
    // 配置证书
    credentials: true
}))

// 接收前端post请求
const bodyparser = require('koa-bodyparser')
app.use(bodyparser())

// 加载路由
const Router = require('koa-router')
let user = require('./controller/user.js')
let product = require('./controller/product.js')
let type = require('./controller/type.js')
const router = new Router()
// '/user'代表控制器名称，必须和请求的地址相对应
router.use('/user', user.routes());
router.use('/product', product.routes());
router.use('/type', type.routes());
app.use(router.routes())
app.use(router.allowedMethods())

// 连接数据库
const {
    connect,
    initSchemas
} = require('./init.js');

// 函数立即调用，等待异步连接成功之后再处理Schema
(async () => {
    await connect();
    initSchemas();
})()

app.use(async ctx => {
    ctx.body = 'hello'
})
app.listen(3000, () => {
    console.log('start server')
})