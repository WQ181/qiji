<template>
	<view class="uni-column">
		<view class="content" id="content" :style="{ height: style.contentViewHeight + 'px' }">
			<scroll-view id="scrollview" scroll-y="true" :style="{ height: style.contentViewHeight + 'px' }"
			 :scroll-with-animation="true" :scroll-top="scrollTop">
				<view class="history" @tap="history_msg">
					<text>点击获取历史消息</text>
				</view>
				<message-show v-for="(message, index) in history" :avatar="avatar" :key="index" :home="home" :message="message" :id="index"
				 :name="name"></message-show>
				<message-show v-for="(message, index) in messages" :avatar="avatar" :key="index" :home="home" :message="message"
				 :id="index" :name="name"></message-show>
				<view id="bottom"></view>
			</scroll-view>

		</view>
		<view class="foot">
			<chat-input @send-message="getInputMessage"></chat-input>
		</view>
	</view>
</template>

<script>
	import chatInput from '../../components/im-chat/chatinput.vue';
	import messageShow from '../../components/im-chat/messageshow.vue';
	import all from '../../common/global.js';
	import kf from '../../common/kf.js';
	import util from '../../utils/util.js'
	import cfg from '../../cfg.js'

	export default {
		data() {
			return {
				name: '',
				msg_item: 0, //渲染历史记录
				history: [],
				chat_id: '', //对方的id
				chat_openid: '',
				avatar: '',
				style: {
					pageHeight: 0,
					contentViewHeight: 0,
					footViewHeight: 90,
					mitemHeight: 0
				},
				scrollTop: 0,
				home: {
					name: '',
					avatar: ''
				},
				messages: []
			};
		},
		components: {
			chatInput,
			messageShow
		},
		onLoad(e) {
			//获取麦克风权限
			uni.authorize({
				scope: 'scope.record',
				success() {
					console.log('录音功能已开启');
				},
				fail() {
					console.log('没授权');
					uni.showModal({
						title: '提示',
						content: '没有麦克风权限，按确定进入设置页面，打开麦克风权限，方可使用语音功能',
						success: function(res) {
							if (res.confirm) {
								uni.openSetting({
									success(res) {
										console.log(res.authSetting);
									},
									fail(res) {
										console.log(res);
									}
								});
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
			});
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#EFC5C9',
				success: (res) => {
					console.log("nav",res)
				}
			})

			this.name = all.globalData.user.name
			console.log("姓名", this.name)
			this.avatar = all.globalData.user.avata

			let chat_id = e.chat_id;
			this.chat_id = chat_id;
			console.log('对方id为', chat_id);
			//对方的信息
			console.log("顾问所有消息", all.globalData.msg)
			all.globalData.msg.some(item => {
				if (item.user_id == chat_id) {
					this.chat_openid = item.openid
					this.messages = item.user_content.contents;
					this.home.name = item.user_content.name;
					this.home.avatar = item.user_content.avatar;
				}
			});
			console.log('顾问消息记录', this.messages);

			uni.setNavigationBarTitle({
				title: this.home.name
			});
			const res = uni.getSystemInfoSync();
			this.style.pageHeight = res.windowHeight;
			this.style.contentViewHeight = res.windowHeight - 80 - uni.getSystemInfoSync().screenWidth / 750 * (100); //像素
			//滑动到底端
			this.scrollTop = 3000
		},

		onShow() {
			if (all.globalData.reconnect) {
				kf.re_send()
			}
		},
		methods: {
			//获取历史消息
			history_msg() {
				uni.showToast({
					title: '正在加载',
					icon: "none",
					duration: 90000
				});

				uni.request({
					url: cfg.qjUrl + "chat/record.tio_x",
					method: 'GET',
					data: {
						uid: all.globalData.user_id,
						touid: this.chat_id,
						pageNum: this.msg_item
					},
					success: (res) => {
						if (res.data[0].ok != 1) {
							this.msg_item++
							console.log("历史消息", res.data)
							for (var i = 0; i < res.data.length; i++) {
								let [user, type, content, now_time, duration] = [res.data[i].uid, res.data[i].contenttype, res.data[i].fiter_content,
									res.data[i].time
								]
								user = user == this.chat_id ? "home" : "customer"
								if (type == 1)
									type = "text"
								else if (type == 4) {
									type = "voice"
									let num = content.indexOf("http")
									duration = content.substr(0, num)
									content = content.substr(num, content.length)
								} else if (type == 6)
									type = "picture"
								else if (type == 5)
									type = "video"
								else if (type == 0)
									type = "text"

								this.history.unshift({
									user,
									type,
									content,
									duration,
									now_time
								})
							}
							uni.hideToast()
						} else {
							uni.showToast({
								title: "无更多历史消息",
								icon: "none",
							})
						}

					}
				})

			},

			getInputMessage(message) {
				//判断是否掉线
				if (!all.globalData.level) {
					if (!all.globalData.reconnect) {
						//获取子组件的输入数据
						console.log('发送的消息', message);
						this.addMessage('customer', message.type, message.content, message.str);
					} else {
						uni.showToast({
							title: "发送失败，请重新登陆或等待两分钟再重试",
							icon: "none",
						})
						kf.re_send()
					}

				} else {
					uni.showToast({
						title: "发送失败，账号在别处登陆",
						icon: "none",
					})

				}
			},
			async addMessage(user, type, content, str) {
				var req = {
					toId: this.chat_openid,
					content
				};
				kf.sendmsg(req, str);

				let time = await (util.nowtime())
				let range_time = await (util.timeago(time))
				console.log("时间间隔", range_time)
				let now_time = await (util.now_time(time))
				console.log("现在的时间", now_time)
				if (type == 'voice') {
					let num = content.indexOf("http")
					var duration = content.substr(0, num)
					content = content.substr(num, content.length)
				}
				uni.hideToast();
				all.globalData.msg.some((item) => {
					if (item.user_id == this.chat_id) {
						console.log("发送消息", item)
						item.user_content.time = time
						item.user_content.range_time = range_time
						//本地只保存最近20条消息，剩余通过请求获得

						while (item.user_content.contents.length > 19) {
							item.user_content.contents.shift()
						}
						item.user_content.contents.push({
							user,
							type,
							content,
							duration,
							now_time
						})
					}
				})


				uni.setStorage({
					key: all.globalData.local_id,
					data: all.globalData.msg,
				});


			},
			scrollToBottom() {
				var that = this;
				var query = uni.createSelectorQuery();
				query.selectAll('.m-item').boundingClientRect();
				query.select('#scrollview').boundingClientRect();

				query.exec(function(res) {
					that.style.mitemHeight = 0;
					res[0].forEach(function(rect) {
						that.style.mitemHeight = that.style.mitemHeight + rect.height + 50;
					});
					if (that.style.mitemHeight > that.style.contentViewHeight) {
						that.scrollTop = that.style.mitemHeight - that.style.contentViewHeight;
					}
				});
			}
		},
		watch: {
			messages: function() {
				this.scrollToBottom();
			}
		},
	};
</script>

<style>
	
	.foot {
		width: 100%;
		
	}

	.history {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.history text {
		margin-top: 30upx;
		padding: 10upx;
		font-size: 26upx;
		background-color: #E5E5E5;
		border-radius: 10upx;
	}
</style>
