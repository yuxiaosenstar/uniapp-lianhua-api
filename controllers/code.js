let delay = require('../utils/delay')

/**
 * 发送验证码
 * @param {*} ctx
 * @param {*} next
 */
let sendCode = async (ctx, next) => {
  let tenant = ctx.params.tenant
  let mobile = ctx.request.body.mobile || ''
  await delay(1500)
  ctx.response.body = {
    cmpId: 'sas',
    code: 2000,
    componentId: 'sas',
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
}

/**
 * 检查验证码正确性
 * @param {*} ctx
 * @param {*} next
 */
let checkCode = async (ctx, next) => {
  let tenant = ctx.params.tenant
  let mobile = ctx.request.body.mobile || ''
  let code = ctx.request.body.code || ''
  let appId = ctx.request.body.appId || ''
  await delay(1500)
  if(code === '1111'){
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
  }else{
    ctx.response.body = {
      success: false,
      msg: '验证码不正确'
    }
  }
}

module.exports = {
  'POST /v1/:tenant/gp/app/verificationCode/send': sendCode,
  'POST /v1/:tenant/gp/app/verificationCode/checkAndLogin': checkCode,
}
