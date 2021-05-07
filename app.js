const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const controller = require('./controller')
const cors = require('koa2-cors')
const sslify = require('koa-sslify').default
const path = require('path')
const fs = require('fs')
const https = require('https')

const app = new Koa()

// 接口日志
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
  await next()
})
// https请求
app.use(sslify())
// 处理跨域
app.use(cors())
// 解析请求体
app.use(bodyParser())
// 添加接口
app.use(controller())

// SSL options
const options = {
  key: fs.readFileSync(path.join(__dirname, './ssl/5591716_yuxiaosen.top.key')),
  cert: fs.readFileSync(
    path.join(__dirname, './ssl/5591716_yuxiaosen.top.pem')
  ),
}

let httpsServer = https.createServer(options, app.callback())
httpsServer.listen(3000)

console.log('app started at port 3000...')
