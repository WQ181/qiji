import all from '../common/global.js'
//openId封装化
const req = function (opt) {
  if (!opt.data)  opt.data = {};
  
  opt.data.openid = all.globalData.openid
	
  uni.request({
    url: opt.url,
    data: opt.data,
    method: opt.method,
    success: function (res) {
      opt.success(res)
    },
    fail: function (res) {
      opt.fail(res)
    }
  })

}

export default {
    req
}
