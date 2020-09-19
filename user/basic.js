//获取cfg.js中的url配置信息
import cfg from '../cfg.js'
import all from '../common/global.js'

// 获取用户登录信息
function getLoginData(code, rawData, signature, encryptedData, iv, scene, callback) {
	console.log("getLoginData Begin ... ")
	uni.request({
		url: cfg.loginUrl, //接口地址。
		method: 'POST',
		data: {
			code: code,
			iv: iv,
			scene: scene,
			rawData: rawData,
			encryptedData: encryptedData,
			signature: signature
		},

		success: (r) => {
			console.log("需要用到的openid", r)

			if (r.data.openid) {
				console.log("openid", r)
				// 获取openid成功
				uni.setStorageSync('openId', r.data.openid)
				all.globalData.openid = r.data.openid

				callback(r)
			} else {
				uni.showToast({
					title: "服务器开了小差，请联系客服。",
					icon: "none",
					duration: 3000
				})
			}
		},
		fail: (err) => {
			console.log("getLoginData网络请求失败！");
			// 网络请求失败处理
			console.log(err);
		}
	});
}

function login(z, y, scene) { // 用户登录并取得openid等用户信息
	var that = this;
	var success = arguments[0] ? arguments[0] : function() {}; //登录成功的回调
	var fail = arguments[1] ? arguments[1] : function() {}; //登录失败的回调
	var content = arguments[2] ? arguments[2] : '授权登录失败，部分功能将不能使用，是否重新登录？'; //当用户取消授权登录时，弹出的确认框文字

	uni.login({
		provider: 'weixin',
		success: function(res1) {
			//login成功，获得code
			var code = res1.code;
			console.log("login成功，获得code", res1)
			uni.getUserInfo({
				provider: 'weixin',
				success: function(res2) {
					console.log("getUserInfo成功", res2)
					all.globalData.userInfo = res2.userInfo
					uni.setStorageSync('userInfo', res2.userInfo)
					var rawData = encodeURIComponent(res2.rawData); // 不包括敏感信息的原始数据字符串，用于计算签名
					var signature = res2.signature || ''; // 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息
					var encryptedData = res2.encryptedData; // 包括敏感数据在内的完整用户信息的加密数据
					var iv = res2.iv; // 加密算法的初始向量
					// 调用服务器端登录，获得详细用户资料，比如openid(支付用)，保存用户数据到服务器  
					getLoginData(code, rawData, signature, encryptedData, iv, scene, function(res3) {
						// if (res3.data.IsAudit == 0) {
						// 	uni.setStorageSync("user", res3.data) // 本地缓存user数据，下次打开不需要登录
						// 	console.log("user", res3.data)
						// }

						// let app = getApp()
						all.globalData.user = res3.data // 在当前的app对象中缓存user数据
						all.globalData.isTested = all.globalData.user.tested ? all.globalData.user.tested : false;
						all.globalData.isLogin = true;
						success(res3)
					})
				},
				fail: function(res1) { //用户点了“拒绝”
					uni.showModal({
						title: '提示',
						content: content,
						showCancel: true,
						cancelText: "否",
						confirmText: "是",
						success: function(res2) {
							if (res2.confirm) {
								if (uni.openSetting) { //当前微信的版本 ，是否支持openSetting
									uni.openSetting({
										success: (res3) => {
											if (res3.authSetting["scope.userInfo"]) { //如果用户重新同意了授权登录
												uni.getUserInfo({ //跟上面的uni.getUserInfo  sucess处理逻辑一样
													success: function(res4) {
														// let app = getApp()
														all.globalData.userInfo = res4.userInfo
														uni.setStorageSync("userInfo", res4.userInfo)
														var rawData = encodeURIComponent(res4.rawData);
														var signature = res4.signature || '';
														var encryptedData = res4.encryptedData;
														var iv = res4.iv;
														getLoginData(code, rawData, signature, encryptedData, iv, function(res5) {
															// uni.setStorageSync("user", res5.data)
															all.globalData.user = res5.data
															all.globalData.isTested = all.globalData.user.tested ? all.globalData.user.tested :
																false;
															all.globalData.isLogin = true;
															success(res5)
														})
													}
												})
											} else { //用户还是拒绝
												fail()
											}
										},
										fail: function() { //调用失败，授权登录不成功
											fail()
										}
									})
								} else {
									fail()
								}
							}
						}
					})
				}
			})
		},
		fail: function(res) {
			fail()
		}
	})
}

function isLogin() { //判断用户是否登录过，如未曾登录，则调用login方法
	let success = arguments[0] ? arguments[0] : function() {}; //登录成功的回调

	let user = all.globalData.user; 

	if (!user.openid || user.openid.length < 10) { // if(app.globalData.isLogin)
		console.log("用户暂未登陆")
	} else { // 如果缓存中已经存在user.openId  那就是已经登录过
		all.globalData.user = user;
		all.globalData.isTested = user.tested ? user.tested : false;
		all.globalData.isLogin = true;
		success(user)
	}
}


export { //export default 只能对外暴露一个默认函数，其他的不能被调用
	login,
	isLogin
}
