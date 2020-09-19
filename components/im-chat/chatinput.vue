<template>
	<view>
		<view class="footer">
			<view class="com">
				<view v-if="more_input"><input type="text" placeholder="输入要发送的内容" v-model="inputValue" cursor-spacing="55" /></view>
				<!-- <view v-else><textarea type="text" v-model="inputValue" :show-confirm-bar="show_bar" placeholder-style="color:#BFBFBF;" cursor-spacing="65" /></view> -->
				<button @tap="sendtext">
					<image src="../../static/image/send.png" mode=""></image>
				</button>
			</view>
		</view>

		<view class="line"></view>

		<view class="footer-left">
			<view @touchstart="startRecognize" @touchend="endRecognize" @touchmove="move" class="func">
				<button><uni-icon type="mic-filled" size="30"></uni-icon></button>
				<text>语音</text>
			</view>
			<view @tap="image" class="func">
				<button> <uni-icon type="image" size="30"></uni-icon></button>
				<text>图片</text>
			</view>
			<view @tap="video" class="func">
				<button ><uni-icon type="videocam" size="30"></uni-icon></button>
				<text>视频</text>
			</view>
			
			<view @tap="closechat" class="func">
				<button > <uni-icon type="close" size="30"></uni-icon></button>
				<text>结束</text>
			</view>

		</view>
	</view>
</template>

<script>
	import all from '../../common/global.js';
	import kf from '../../common/kf.js';
	import uniIcon from '../uni-icon/uni-icon.vue';

	const recorderManager = uni.getRecorderManager();
	export default {
		name: 'chat-input',
		components: {
			uniIcon
		},
		data() {
			return {
				inputValue: '',
				voice_time: 0,
				voice_url: '',
				voicePath: '',
				show_bar: false,
				more_input: true, //多行输入
				posStart: '', //初始化起点坐标
				posEnd: '', //初始化终点坐标
				posMove: '' //初始化滑动坐标
			};
		},
		onLoad() {
			let self = this;
			recorderManager.onStop(res => {
				console.log('语音长度', res.duration);
				console.log('起始位置', this.posStart);
				console.log('结束位置', this.posEnd);

				if (this.posStart - this.posEnd < 300) {
					if (res.duration > 1500) {
						self.voicePath = res.tempFilePath;
						this.voice_time = parseInt(res.duration / 1000);
						this.uploadVoice();
						console.log('发送成功');
					} else {
						uni.showToast({
							title: '录制时间太短，请重新录制',
							icon: 'none',
							duration: 1500
						});
					}
				} else if (res.duration > 29000) {
					self.voicePath = res.tempFilePath;
					this.voice_time = parseInt(res.duration / 1000);
					this.uploadVoice();
					console.log('发送成功');
				} else {
					console.log('取消发送');
					console.log('Cancel');
				}
			});
		},
		methods: {
			more() {
				this.more_input = !this.more_input;
			},
			//结束聊天
			closechat() {
				uni.showModal({
					title: '提示',
					content: '是否结束咨询',
					success: res => {
						if (res.confirm) {
							let text = {
								str: '00040',
								type: 'text',
								content: '本次咨询已结束'
							};
							this.sendMessge(text);
						} else if (res.cancel) {
							uni.showToast({
								title: '取消结束',
								icon: 'none'
							});
						}
					}
				});
			},
			
			async video() {
				let url = await kf.qi_niu_video();
				let video = {
					str: '00070',
					type: 'video',
					content: url
				};
				this.sendMessge(video);
			},
			async image() {
				let res = await kf.qi_niu_image();
				console.log(res);
				for (let i = 0; i < res.length; i++) {
					let image = {
						str: '00063',
						type: 'picture',
						content: res[i].imageURL
					};
					this.sendMessge(image);
				}
			},
			async uploadVoice() {
				let url = await kf.qi_niu_voice(this.voicePath); //最终到七牛上的voice_url
				let voice = {
					str: '00064',
					type: 'voice',
					content: this.voice_time + url
				};

				this.sendMessge(voice);
			},
			startRecognize(e) {
				uni.showToast({
					title: '滑动到此处 取消录音',
					icon: 'none',
					duration: 900000
				});
				this.posStart = e.pageY;
				//获取麦克风权限
				uni.authorize({
					scope: 'scope.record',
					success() {
						console.log('开始录音');
						recorderManager.start({
							duration: 30000
						});
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
			},
			endRecognize(e) {
				this.posEnd = e.mp.changedTouches[0].pageY; //获取终点坐标
				console.log('结束位置', this.posEnd);
				recorderManager.stop();
				uni.hideToast();
			},

			sendtext() {
				let text;
				if (this.inputValue.trim() == '') {
					this.inputValue = '';
					uni.showToast({
						title: '输入内容不能为空',
						icon: 'none'
					});
				} else {
					//点击发送按钮时，通知父组件用户输入的内容
					text = {
						str: '00029',
						type: 'text',
						content: this.inputValue
					};
					this.sendMessge(text);
				}
			},
			sendMessge(msg) {
				//点击发送按钮时，通知父组件用户输入的内容
				this.$emit('send-message', {
					str: msg.str,
					type: msg.type,
					content: msg.content
				});
				this.inputValue = '';
			}
		}
	};
</script>

<style>
	.line{
		height: 1upx;
		background: #CECECE;
		width: 100%;
		margin-bottom: 10upx;
	}
	
	.foot {
		border: 2upx none #d6d6d6;
	}

	.com {
		display: flex;
		flex-direction: row;
		width: 100%;
		padding-left: 20upx;
		margin-bottom: 20upx;
		margin-top: 10upx;
	}

	.footer-left {
		width: 80upx;
		height: 80upx;
		display: flex;
		margin-bottom: 60upx;
		font-size: 25upx;
		
	}
	
	.footer-left text{
		padding-left: 30upx;
	}
	
	.func {
		margin-left: 60upx;
	}

	/* .com textarea {
	background: #ffffff;
	border: 2upx solid #d6d6d6;
	margin-top: 20upx;
	width: 550upx;
	font-size: 35upx;
} */
	.com input {
		background: #ffffff;
		border: 2upx solid #d6d6d6;
		min-height: 1.7rem;
		width: 500upx;
		font-size: 28upx;
		border-radius: 20upx;
		padding-left: 20upx;
	}

	.com button {
		border: 1upx solid darkgray;
		width: 150upx;
		height: 70upx;
		margin-left: 30upx;
		box-shadow: 5upx 5upx 10upx #c4c4c4;
		color: white;
	}

	.com image {
		height: 80upx;
		width: 80upx;
		margin-top: -8upx;
		z-index: 3;
	}
</style>
