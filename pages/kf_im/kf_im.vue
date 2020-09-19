<template>
	<view class="uni-column">
		<view class="content" id="content" :style="{ height: style.contentViewHeight + 'px' }">
			<scroll-view id="scrollview" scroll-y="true" :style="{ height: style.contentViewHeight + 'px' }" :scroll-with-animation="true" :scroll-top="scrollTop">
				
				<message-show v-for="(message, index) in messages" :avatar="avatar" :key="index" :home="home" :message="message"
				 :id="index" :name="name"></message-show>
				<view id="bottom"></view>
			</scroll-view>
		</view>
		<view class="foot"><chat-input @send-message="getInputMessage"></chat-input></view>
	</view>
</template>

<script>
import chatInput from '../../components/im-chat/kf_chatinput.vue';
import messageShow from '../../components/im-chat/messageshow.vue';
import all from '../../common/global.js';
import kf from '../../common/kf.js';
import util from '../../utils/util.js';
import cfg from '../../cfg.js';

export default {
	data() {
		return {
			name:'',
			
			kf_chat_id: '', //对方的id
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
				console.log('开始录音');
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
		
		this.avatar = all.globalData.user.avata;
		let kf_chat_id = e.kf_chat_id;
		this.kf_chat_id = kf_chat_id;
		console.log('对方id为', kf_chat_id);
		//对方的信息
		console.log('客服所有消息', all.globalData.kf_msg);
		all.globalData.kf_msg.some(item => {
			if (item.user_id == kf_chat_id) {
				this.chat_openid = item.openid;
				this.messages = item.user_content.contents;
				this.home.name = item.user_content.name;
				this.home.avatar = item.user_content.avatar;
			}
		});
		console.log('客服消息记录', this.messages);

		uni.setNavigationBarTitle({
			title: this.home.name
		});
		const res = uni.getSystemInfoSync();
		this.style.pageHeight = res.windowHeight;
		this.style.contentViewHeight = res.windowHeight - 80 - (uni.getSystemInfoSync().screenWidth / 750) * 100; //像素
		//滑动到底端
		this.scrollTop = 3000;
	},

	onShow() {
		if (all.globalData.reconnect) {
			kf.re_send();
		}
	},
	methods: {


		getInputMessage(message) {
			//判断是否掉线
			if (!all.globalData.level) {
				if (!all.globalData.reconnect) {
					//获取子组件的输入数据
					console.log('发送的消息', message);
					this.addMessage('customer', message.type, message.content, message.str);
				} else {
					uni.showToast({
						title: '发送失败，请退出重新登陆',
						icon: 'none'
					});
				}
			} else {
				uni.showToast({
					title: '发送失败，账号在别处登陆',
					icon: 'none'
				});
			}
		},
		async addMessage(user, type, content, str) {
			var req = {
				toId: this.chat_openid,
				content
			};
			kf.sendmsg(req, str);

			let time = await util.nowtime();
			let range_time = await util.timeago(time);
			console.log('时间间隔', range_time);
			let now_time = await util.now_time(time);
			console.log('现在的时间', now_time);
			if (type == 'voice') {
				let num = content.indexOf('http');
				var duration = content.substr(0, num);
				content = content.substr(num, content.length);
			}
			uni.hideToast();
			all.globalData.kf_msg.some(item => {
				if (item.user_id == this.kf_chat_id) {
					console.log('发送消息', item);
					item.user_content.time = time;
					item.user_content.range_time = range_time;
					//本地只保存最近20条消息，剩余通过请求获得

					while (item.user_content.contents.length > 19) {
						item.user_content.contents.shift();
					}
					item.user_content.contents.push({
						user,
						type,
						content,
						duration,
						now_time
					});
				}
			});

			uni.setStorage({
				key: all.globalData.kf_local_id,
				data: all.globalData.kf_msg
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
	}
};
</script>

<style>
.foot {
		width: 100%;
		
	}

	
</style>
