let delay = require('../utils/delay')
const userlist = require('../data/user')
/**
 * 登录接口
 * @param {*} ctx
 * @param {*} next
 */
let login = async (ctx, next) => {
  let tenant = ctx.params.tenant
  let mobile = ctx.request.body.mobile || ''
  let password = ctx.request.body.password || ''
  let appid = ctx.request.body.appid || ''
  console.log(`signin with name: ${mobile}, password: ${password}`)

  const user = userlist.find((one) => one.mobile.toString() === mobile)
  // 校验账号是否合法
  if (!user) {
    ctx.response.body = {
      success: false,
      msg: '请输入正确的手机号',
    }
  }
  // 校验密码是否合法
  else if (user.password.toString() !== password) {
    ctx.response.body = {
      success: false,
      msg: '请输入正确的密码',
    }
  }
  // 校验成功
  else {
    ctx.response.body = {
      cmpId: 'sas',
      code: 2000,
      componentId: 'sas',
      data: user,
      errorLevel: 'B',
      fields: {
        additionalProp1: 'string',
        additionalProp2: 'string',
        additionalProp3: 'string',
      },
      more: true,
      msg: '接口调用成功',
      success: true,
      total: 1,
    }
  }
}

module.exports = {
  'POST /v1/:tenant/gp/app/user/login': login,
}
