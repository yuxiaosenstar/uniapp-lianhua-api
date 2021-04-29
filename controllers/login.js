let delay = require('../utils/delay')

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
  await delay(1500)
  if (mobile === '12345' && password === '1') {
    ctx.response.body = {
      cmpId: 'sas',
      code: 2000,
      componentId: 'sas',
      data: {
        customer: {
          address: {
            address: '浜河社区15号',
            area: '江干区',
            city: '杭州市',
            isDefault: true,
            province: '浙江省',
            street: '浜河街道',
            uuid: '27ed1f8023234abcb5fdba1f9602d28d',
          },
          code: 'c001',
          contact: '张三',
          mobile: 18979305822,
          name: '海鼎',
          uuid: 83411392210000000,
        },
        mobile: 18979305822,
        name: '张三',
        token: 'bear 1234567',
        uuid: '03411392210000001',
      },
      errorLevel: 'B',
      fields: {
        additionalProp1: 'string',
        additionalProp2: 'string',
        additionalProp3: 'string',
      },
      more: true,
      msg: '接口调用成功',
      success: true,
      total: 99,
    }
  } else if (mobile === '12345') {
    ctx.response.body = {
      success: false,
      msg: '请输入正确的密码',
    }
  } else if (password === '1') {
    ctx.response.body = {
      success: false,
      msg: '请输入正确的手机号',
    }
  } else {
    ctx.response.body = {
      success: false,
      msg: '请输入正确的手机号和密码',
    }
  }
}

module.exports = {
  'POST /v1/:tenant/gp/app/user/login': login,
}
