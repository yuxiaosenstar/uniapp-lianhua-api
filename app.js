const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const controller = require('./controller')
const cors = require('koa2-cors')

// https相关
// const config = require('./config/config');
// const https = require('https');
// const fs = require('fs');
// const enforceHttps = require('koa-sslify').default;

const app = new Koa()

// log request URL:
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
  // 处理跨域
  await next()
})

app.use(cors())
// parse request body:
app.use(bodyParser())
// add controllers:
app.use(controller())

// Force HTTPS on all page
// app.use(enforceHttps());
// const options = {
//   key: fs.readFileSync('./ssl/private_key.pem'),
//   cert: fs.readFileSync('./ssl/ca-cert.pem')
// };
// https.createServer(options, app.callback()).listen(3001, () => {
// });

app.listen(3000)

console.log('app started at port 3000...')
