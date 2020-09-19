(function() {

	var pako = require('./pako');
	var encoding = require('../utils/encoding');
	var all = require('./global')
	var helper = require('./help')
	var util = require('../utils/util')
	var cfg = require('../cfg')

	module.exports = {
		connection,
		init_im,
		sendmsg,
		qi_niu_video,
		qi_niu_image,
		qi_niu_voice,
		auto,
		re_send,
	}

	function qiniu_up(filePath, key) {
		return (new Promise((r, f) => {
			// 交给七牛上传
			helper.default.qiniuUploader.upload(filePath, (res) => {
					console.log('file url is: ' + res.fileUrl)
					r(res)
					uni.hideToast()
				}, (error) => {
					console.log(error);
				}, {
					region: 'SCN', // 华北区
					uptokenURL: cfg.qjUrl+'cloud/qn/uptoken.tio_x',
					domain: cfg.qiniuDomain,
					shouldUseQiniuFileName: false,
					key
				},
				// null,// 可以使用上述参数，或者使用 null 作为参数占位符
				(progress) => {
					console.log('上传进度', progress.progress)
					console.log('已经上传的数据长度', progress.totalBytesSent)
					console.log('预期需要上传的数据总长度', progress.totalBytesExpectedToSend)
				},
				() => {
					// 取消上传
				},
				() => {
					// `before` 上传前执行的操作
				},
				(err) => {
					console.log("complete:", err);
					// `complete` 上传接受后执行的操作(无论成功还是失败都执行)
				});
		}))

	}

	function qi_niu_voice(voicePath) {
		uni.showToast({
			title: '正在发送',
			icon: "none",
			duration: 90000
		});
		return (new Promise((r, f) => {
			uni.request({
				url: cfg.qjUrl+'cloud/qn/get/key.tio_x',
				data: {
					type: 'voice'
				},
				success: (res) => {
					console.log("key",res[0]);
					let key = res.data[0];
					console.log("voicePath",voicePath)
					helper.default.qiniuUploader.upload(voicePath, (res) => {
							console.log('file url is: ' + res.fileUrl);
							r(res.fileUrl)

						}, (error) => {
							console.log(error);
						}, {
							region: 'SCN', // 华北区
							uptokenURL: cfg.qjUrl+'cloud/qn/uptoken.tio_x',
							domain: cfg.qiniuDomain,
							shouldUseQiniuFileName: false,
							key
						},
						// null,// 可以使用上述参数，或者使用 null 作为参数占位符
						(progress) => {
							console.log('上传进度', progress.progress)
							console.log('已经上传的数据长度', progress.totalBytesSent)
							console.log('预期需要上传的数据总长度', progress.totalBytesExpectedToSend)
						},
						() => {
							// 取消上传
						},
						() => {
							// `before` 上传前执行的操作
						},
						(err) => {
							console.log("complete:", err);
							// `complete` 上传接受后执行的操作(无论成功还是失败都执行)
						});

				}
			})
		}))
	}


	function qi_niu_image(count) {
		return (new Promise((r, f) => {
			uni.chooseImage({
				count:count,
				sizeType: ['original', 'compressed'],
				sourceType: ['album', 'camera'], //从相册选择
				success: (res) => {
					var images = res
					uni.showToast({
						title: '正在发送',
						icon: "none",
						duration: 90000
					});
					uni.request({
						url: cfg.qjUrl+'cloud/qn/get/key.tio_x',
						data: {
							type: 'image',
							counts: res.tempFilePaths.length
						},
						success: async function(res) {
							let key = res.data;
							console.log("key", key)
							console.log("准备上传图片", images.tempFilePaths)

							var images_url = []
							for (let i = 0; i < images.tempFilePaths.length; i++) {
								let filePath = images.tempFilePaths[i];
								console.log("图片信息", filePath)
								let url = await (qiniu_up(filePath, key[i]))
								images_url.push(url)
							}
							r(images_url)


						}
					})




				}
			})




		}))
	}

	function qi_niu_video() {
		return (new Promise((r, f) => {
			uni.request({
				url: cfg.qjUrl+'cloud/qn/get/key.tio_x',
				data: {
					type: 'video'
				},
				success: (res) => {
					console.log(res);
					let key = res.data[0];
					uni.chooseVideo({
						count: 1,
						sourceType: ['camera', 'album'],
						maxDuration: 10,
						success: (res) => {
							console.log("视频长度", res.duration)

							uni.showToast({
								title: '正在发送',
								icon: "none",
								duration: 90000
							});
							var filePath = res.tempFilePath;
							// 交给七牛上传
							helper.default.qiniuUploader.upload(filePath, (res) => {
									console.log('file url is: ' + res.fileUrl)
									r(res.fileUrl)
								}, (error) => {
									console.log(error);
								}, {
									region: 'SCN', // 华北区
									uptokenURL: cfg.qjUrl+'cloud/qn/uptoken.tio_x',
									domain: cfg.qiniuDomain,
									shouldUseQiniuFileName: false,
									key
								},
								// null,// 可以使用上述参数，或者使用 null 作为参数占位符
								(progress) => {
									console.log('上传进度', progress.progress)
									console.log('已经上传的数据长度', progress.totalBytesSent)
									console.log('预期需要上传的数据总长度', progress.totalBytesExpectedToSend)
								},
								() => {
									// 取消上传
								},
								() => {
									// `before` 上传前执行的操作
								},
								(err) => {
									console.log("complete:", err);
									// `complete` 上传接受后执行的操作(无论成功还是失败都执行)
								});


						}
					})
				}
			})
		}))

	}

	function connection() {
		let url = all.globalData.url
		uni.connectSocket({
			url,
			success: () => {
				console.log("连接成功")
			}
		})
		socket_init();
	}

	function re_connection() {
		clearInterval(timer);
		all.globalData.reconnect = true
		let url = all.globalData.url + "&tiows_reconnection=ture"
		all.globalData.url = url;
		console.log("reconnection:", all.globalData.url);
		uni.connectSocket({
			url,
			fail: () => {
				console.log("socket连接失败")
			}
		})
		socket_init();
	}

	function init_im() {
		return (new Promise((r, f) => {
			uni.request({
				url: cfg.qjUrl+'login.tio_x',
				data: {
					loginname: all.globalData.openid
				},
				success: (ck) => {
					console.log("login", ck)
					uni.request({
						data: {
							groupid: 'qj_im'
						},
						url: cfg.qjUrl+'im/imserver.tio_x',
						success: (res2) => {
							console.log("res2", res2)
						}
					})
					//根据手机型号获取cookie
					uni.getSystemInfo({
						success: (res) => {
							console.log("手机型号", res.brand);
							if (res.brand == 'iPhone')
								r(ck.header["Set-Cookie"].split(";")[0]);
							else
								r(ck.header["set-cookie"].split(";")[0]);
						}
					});

				}
			})
		}))
	}

	var timer = '';
	var uint8array

	function socket_init() {
		console.log("init")
		var url = all.globalData.url;
		uni.onSocketOpen(() => {
			all.globalData.reconnect = false
			console.log("WebSocket连接已打开！")
			var req = {
				uid: all.globalData.user_id
			};
			var commandstr = "00033" + JSON.stringify(req);
			console.log("str", commandstr)
			var uint8array_join = new encoding.TextEncoder().encode(commandstr);
			uni.sendSocketMessage({
				data: uint8array_join.buffer
			})
			var kf_commandstr = "00034" + JSON.stringify(req);
			console.log("str", kf_commandstr)
			var kf_uint8array_join = new encoding.TextEncoder().encode(kf_commandstr);
			uni.sendSocketMessage({
				data: kf_uint8array_join.buffer
			})
			console.log("准备发送");
			uint8array = new encoding.TextEncoder().encode("00001");
			timer = setInterval(function() {

				uni.sendSocketMessage({
					data: uint8array.buffer,
					success: () => {
						console.log("send heart");
					},
					fail: () => {
						re_connection()
					}
				})
			}, 3000);
			console.log("发送心跳...");
		})
		uni.onSocketMessage((event) => {
			var arrayBuffer = event.data;
			var uint8array = null;
			var firstbyte = new Uint8Array(arrayBuffer, 0, 2);
			var firstchar = new encoding.TextDecoder('utf-8').decode(firstbyte);
			var isZipped = false;
			var isZippedStr = '';
			if (firstchar.indexOf('x') != -1) {
				// 压缩过的
				isZipped = true;
				isZippedStr = '(zipped)';
				var zipedUint8array = new Uint8Array(arrayBuffer, 2);
				console.log("is zip");
				uint8array = pako.ungzip(zipedUint8array);
			} else {
				uint8array = new Uint8Array(arrayBuffer);
			}

			var data = new encoding.TextDecoder('utf-8').decode(uint8array);

			if (!data || data.length < 5) {
				console.error('data wrong' + isZippedStr + ', the data length must be >= ' + 5, data);
				return;
			}

			var commandstr = data.substr(0, 5);
			console.log("commandstr---------->" + commandstr);
			var type = all.globalData.Msg_type.SiteImCommandReverse(commandstr);
			var kf_type = all.globalData.kf_Msg_type.SiteImCommandReverse(commandstr)

			console.log("消息的类型:", type);

			var strbody = JSON.parse(data.substr(5)); //信息
			console.log("收到的消息", strbody);
			if (strbody.level == 1) all.globalData.level = 1 //掉线之后无法发送消息


			// 客服未读消息
			if (kf_type != null) {
				let new_msg
				let time = strbody.time

				var result;
				var minute = 1000 * 60;
				var hour = minute * 60;
				var day = hour * 24;
				var halfamonth = day * 15;
				var month = day * 30;
				var now = new Date();
				var curTime = new Date(time); //后端返回的是秒数
				var diffValue = now - curTime;

				var monthC = diffValue / month;
				var weekC = diffValue / (7 * day);
				var dayC = diffValue / day;
				var hourC = diffValue / hour;
				var minC = diffValue / minute;
				if (monthC >= 1) {
					if (monthC <= 12)
						result = "" + parseInt(monthC) + "月前";
					else {
						result = now.toLocaleString();
						console.log('年')
					}
				} else if (weekC >= 1) {
					result = "" + parseInt(weekC) + "周前";
				} else if (dayC >= 1) {
					result = "" + parseInt(dayC) + "天前";
				} else if (hourC >= 1) {
					result = "" + parseInt(hourC) + "小时前";
				} else if (minC >= 1) {
					result = "" + parseInt(minC) + "分钟前";
				} else {
					result = "（刚刚）"
				}

				let range_time = result
				time = time / 1000
				console.log("时间间隔", range_time)

				var date = new Date(time * 1000);

				//月  
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
				//日  
				var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
				//时 
				var h = date.getHours();
				//分  
				var m = date.getMinutes();
				let now_time = `${M}月${D}日 ${h}:${m}`
				console.log("时间", now_time)
				//对语音的处理
				if (kf_type == 'voice') {
					let num = strbody.content.indexOf("http")
					var duration = strbody.content.substr(0, num)
					strbody.content = strbody.content.substr(num, strbody.content.length)
				}
				//是否有该联系人的聊天记录
				let res = all.globalData.kf_msg.some((item) => {
					if (item.user_id == strbody.fromId) {
						return true;
					}
				})
				if (res) {
					all.globalData.kf_msg.some((item) => {
						let type = kf_type
						if (item.user_id == strbody.fromId) {
							console.log("新消息", item)
							item.user_content.unread++
							item.user_content.time = time
							item.user_content.range_time = range_time
							console.log("未读消息", item.user_content.unread)
							//本地只保存最近20条消息，剩余通过请求获得
							while (item.user_content.contents.length > 19) {
								item.user_content.contents.shift()
							}
							item.user_content.contents.push({
								user: 'home',
								type,
								content: strbody.content,
								duration,
								now_time
							})
						}
					})

					console.log("所有对话人", all.globalData.kf_msg)
				} else {
					console.log(`nowtime${now_time}   时间戳${time}`)
					if (strbody.fromUser) {
						kf_add(strbody.fromId, strbody.fromUser.ln, strbody.fromUser.n, strbody.fromUser.a, time, range_time, now_time,
							kf_type,
							strbody.content, duration)
					} else {
						kf_add(strbody.fromId, strbody.fromUser_offline.ln, strbody.fromUser_offline.n, strbody.fromUser_offline.a,
							time, range_time, now_time,
							kf_type, strbody.content, duration)
					}
				}

				var req = {
					cid: strbody.mid, //消息id
					toId: strbody.fromId //消息接收者的id
				}
				var commandStr1 = "00031" + JSON.stringify(req);
				var uint8array1 = new encoding.TextEncoder().encode(commandStr1);

				uni.sendSocketMessage({ //通知服务器消息已读
					data: uint8array1.buffer
				})
				//播放提示音
				auto()
				//手机震动
				uni.vibrateLong({
					success: function() {
						console.log('震动');
					}
				});
				//显示消息列表上的红点

				uni.showTabBarRedDot({
					index: 2
				})


				let local_id = all.globalData.user_id + "kf"
				try {
					uni.setStorageSync(local_id, all.globalData.kf_msg);
					console.log("数据存到本地")
				} catch (e) {
					// error
				}
			}


			//顾问未读消息
			if (type != null) {
				let new_msg
				let time = strbody.time

				var result;
				var minute = 1000 * 60;
				var hour = minute * 60;
				var day = hour * 24;
				var halfamonth = day * 15;
				var month = day * 30;
				var now = new Date();
				var curTime = new Date(time); //后端返回的是秒数
				var diffValue = now - curTime;

				var monthC = diffValue / month;
				var weekC = diffValue / (7 * day);
				var dayC = diffValue / day;
				var hourC = diffValue / hour;
				var minC = diffValue / minute;
				if (monthC >= 1) {
					if (monthC <= 12)
						result = "" + parseInt(monthC) + "月前";
					else {
						result = now.toLocaleString();
						console.log('年')
					}
				} else if (weekC >= 1) {
					result = "" + parseInt(weekC) + "周前";
				} else if (dayC >= 1) {
					result = "" + parseInt(dayC) + "天前";
				} else if (hourC >= 1) {
					result = "" + parseInt(hourC) + "小时前";
				} else if (minC >= 1) {
					result = "" + parseInt(minC) + "分钟前";
				} else {
					result = "（刚刚）"
				}

				let range_time = result
				time = time / 1000
				console.log("时间间隔", range_time)

				var date = new Date(time * 1000);

				//月  
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
				//日  
				var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
				//时 
				var h = date.getHours();
				//分  
				var m = date.getMinutes();
				let now_time = `${M}月${D}日 ${h}:${m}`
				console.log("时间", now_time)
				//对语音的处理
				if (type == 'voice') {
					let num = strbody.content.indexOf("http")
					var duration = strbody.content.substr(0, num)
					strbody.content = strbody.content.substr(num, strbody.content.length)
				}
				//是否有该联系人的聊天记录
				let res = all.globalData.msg.some((item) => {
					if (item.user_id == strbody.fromId) {
						return true;
					}
				})
				if (res) {
					all.globalData.msg.some((item) => {
						if (item.user_id == strbody.fromId) {
							console.log("新消息", item)
							item.user_content.unread++
							item.user_content.time = time
							item.user_content.range_time = range_time
							console.log("未读消息", item.user_content.unread)
							//本地只保存最近20条消息，剩余通过请求获得
							while (item.user_content.contents.length > 19) {
								item.user_content.contents.shift()
							}
							item.user_content.contents.push({
								user: 'home',
								type,
								content: strbody.content,
								duration,
								now_time
							})
						}
					})

					console.log("所有对话人", all.globalData.msg)
				} else {
					if (strbody.fromUser) {
						add(strbody.fromId, strbody.fromUser.ln, strbody.fromUser.n, strbody.fromUser.a, time, range_time, now_time,
							type,
							strbody.content, duration)
					} else {
						add(strbody.fromId, strbody.fromUser_offline.ln, strbody.fromUser_offline.n, strbody.fromUser_offline.a, time,
							range_time, now_time,
							type, strbody.content, duration)
					}
				}

				var req = {
					cid: strbody.mid, //消息id
					toId: strbody.fromId //消息接收者的id
				}
				var commandStr1 = "00031" + JSON.stringify(req);
				var uint8array1 = new encoding.TextEncoder().encode(commandStr1);

				uni.sendSocketMessage({ //通知服务器消息已读
					data: uint8array1.buffer
				})
				//播放提示音
				auto()
				//手机震动
				uni.vibrateLong({
					success: function() {
						console.log('震动');
					}
				});
				//显示消息列表上的红点

				uni.showTabBarRedDot({
					index: 0
				})

				let local_id = all.globalData.user_id + "a"
				try {
					uni.setStorageSync(local_id, all.globalData.msg);
					console.log("数据存到本地")
				} catch (e) {
					// error
				}
			}
		})
		uni.onSocketClose(function(res) {
			re_connection();
		})
		uni.onSocketError((res) => {
			console.log("socket linked error:", res);
			handlerError(res);
		})
	}

	//消息提醒
	function auto() {
		const bgAudioMannager = uni.getBackgroundAudioManager();
		bgAudioMannager.title = '语音';
		bgAudioMannager.src = 'https://qjqn.foxcodes.cn/a1557228738030-13.mp3';
	}

	//添加新的联系人
	function kf_add(id, openid, name, avatar, time, range_time, now_time, type, content, duration) {
		console.log("时间戳", time)
		console.log("nowtime", now_time)
		all.globalData.kf_msg.push({
			user_id: id,
			openid,
			user_content: {
				name,
				avatar,
				unread: 1, //未读消息
				time, //时间戳
				range_time,
				contents: [{
					user: 'home',
					now_time,
					type,
					content,
					duration
				}]
			}
		})
		console.log("添加新的对话人", all.globalData.kf_msg)
	}

	//添加新的联系人
	function add(id, openid, name, avatar, time, range_time, now_time, type, content, duration) {
		all.globalData.msg.push({
			user_id: id,
			openid,
			user_content: {
				name,
				avatar,
				unread: 1, //未读消息
				time, //时间戳
				range_time,
				contents: [{
					user: 'home',
					now_time,
					type,
					content,
					duration
				}]
			}
		})
		console.log("添加新的对话人", all.globalData.msg)
	}

	function re_send() {
		var uint8array = new encoding.TextEncoder().encode("00001");


		uni.sendSocketMessage({
			data: uint8array.buffer, //发送心跳
			success: () => {
				console.log("send heart");
			},
			fail: () => {
				re_connection()
			}
		})
		console.log("发送心跳...");
	}

	function sendmsg(req, str) {
		console.log(req)
		console.log("str", str)
		var commandstr = str + JSON.stringify(req);
		console.log("添加的消息" + commandstr);
		var uint8array = new encoding.TextEncoder().encode(commandstr);
		uni.sendSocketMessage({
			data: uint8array.buffer,
			fail: () => {
				re_connection()
			}
		})
	}

})()
