const Koa = require('koa')
const app = new Koa()

const cors = require('koa2-cors')
const bodyparser = require('koa-bodyparser')
app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true
}))
app.use(bodyparser())

const { connect, initSchemas } = require('./init.js');
(async () => {
    await connect()
    initSchemas()
})()

const Router = require('koa-router')
const router = new Router()

const user = require('./controller/user.js')
const product = require('./controller/product.js')
const type = require('./controller/type.js')
router.use('/user', user.routes())
router.use('/product', product.routes())
router.use('/type', type.routes())

app.use(router.routes(), router.allowedMethods())

app.use(async ctx => {
    ctx.body = "hello world"
})
app.listen(3000, () => {
    console.log('服务已经启动')
})