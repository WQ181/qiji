<template>
		<view class="m-item" :id="'message'+id">
			<view class="m-left" v-if="message.user=='home'">
				<image class="head_icon" :src="home.avatar" ></image>
			</view>
			<view class="m-content">
				<view :class="message.user=='customer'?'m-time_right':'m-time_left'" >
					<text>{{message.now_time}}</text>
				</view>
				<view class="name-left" v-if="message.user=='home'">
					{{home.name}}
				</view>
				<view class="name-right" v-if="message.user=='customer'">
					{{name}}
				</view>
				
				
				<view class="m-content-head">
					<view :class="message.user=='customer'?'m-content-head-right':'m-content-head-left'">
						<view v-if="message.type=='text'" :class="'m-content-head-'+message.user">
							{{message.content}}
						</view>
						<view v-else-if="message.type=='voice'" :class="'m-content-head-'+message.user" @tap="playVoice">
							<text style="font-size: 35upx;" v-show="message.user=='customer'? 1:0">{{message.duration}}"</text>
							<image :src="'../../static/image/voice_'+message.user+'.png'" mode=""></image>
							<text style="font-size: 35upx;" v-show="message.user=='customer'? 0:1">{{message.duration}}"</text>
						</view>
						<view v-else-if="message.type=='picture'" :class="'m-content-headimg-'+message.user" @tap="preimage">
							<image class="img_icon" :src="message.content"></image>
						</view>
						<view v-else-if="message.type=='video'" :class="'m-content-headimg-'+message.user">
							<video class="vedio_icon" :src="message.content" @error="videoErrorCallback" enable-danmu danmu-btn controls></video>
						</view>
					</view>
				</view>
				
			</view>
			
			<view class="m-right">
				<image class="head_icon" :src="avatar" v-if="message.user=='customer'"></image>
			</view>
		</view>

</template>

<script>
	import uniIcon from "../uni-icon/uni-icon.vue"
	const innerAudioContext = uni.createInnerAudioContext();

	export default {
		props: ['message', 'id', 'home', 'avatar','name'],
		components: {
			uniIcon
		},
		
		methods: {
			videoErrorCallback(e) {
				console.log('视频错误信息:')
				console.log(e.target.errMsg)
			},
			playVoice() {
				if (this.message.content) {
					const bgAudioMannager = uni.getBackgroundAudioManager();
					bgAudioMannager.title = "语音"
					bgAudioMannager.src = this.message.content;
					bgAudioMannager.onPlay((res) => {
						console.log("开始播放");
					});
					bgAudioMannager.onError((res) => {
						console.log(res.errMsg);
						console.log(res.errCode);
					})
					bgAudioMannager.onEnded((res) => {
						console.log("播放结束")
					})
				}
			},
			preimage() {
				console.log("查看图片")
				let a = [this.message.content]
				console.log(a[0])
				uni.previewImage({
					urls: a
				});

			}
		},

	}
</script>

<style>
	.m-item {
		display: flex;
		flex-direction: row;
		padding-top: 40upx;
	}

	.m-left {
		display: flex;
		width: 120upx;
		margin-top: 100upx;
		justify-content: center;
		align-items: flex-start;
	}

	.name-right{
		display: flex;
		justify-content: flex-end;
		color: #696969;
	}
	
	.name-left{
		color: #696969;
	}

	.m-content {
		font-size: 28upx;
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		word-break: break-all;
	}
	.m-time_left{
		display: flex;
		flex-direction: column;
		align-items: center;
		
	}
	.m-time_right{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-left:80upx ;
		
	}
	
	.m-time_left text{
		margin-top: 30upx;
		padding: 10upx;
		font-size: 26upx;
		background-color: #F4F4F4;
		border-radius: 10upx;
		color: #696969;
	}
	
	.m-time_right text {
		margin-top: 30upx;
		padding: 10upx;
		font-size: 26upx;
		background-color: #F4F4F4;
		border-radius: 10upx;
		color: #696969;
	}
	
	

	
	.m-right {
		display: flex;
		width: 120upx;
		margin-top: 100upx;
		justify-content: center;
		align-items: flex-start;
	}
	
	
	.head_icon {
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
	}

	.img_icon {
		width: 200upx;
		height: 200upx;
		border-radius: 10upx;
	}

	.vedio_icon {

		width: 200upx;
		height: 350upx;
		border-radius: 10upx;
	}

	.m-content-head {
		position: relative;
		margin-top: 20upx;
	}

	.m-content-head-right {
		display: flex;
		justify-content: flex-end;
	}

	.m-content-head-left {
		display: flex;

	}

	.m-content-head-home {
		text-align: left;
		background: #EFC5C9;
		border: 1px #EFC5C9 solid;
		border-radius: 10upx;
		padding: 20upx;
	}

	.m-content-head-home image {
		width: 55upx;
		height: 55upx;
	}

	.m-content-head-home:before {
		border: 15upx solid transparent;
		border-right: 15upx solid #EFC5C9;
		left: -26upx;
		width: 0;
		height: 0;
		position: absolute;
		content: ' '
	}

	.m-content-head-customer {
		border: 1upx white solid;
		background: #FFFFFF;
		border-radius: 10upx;
		padding: 20upx;
		
	}

	.m-content-head-customer image {
		width: 55upx;
		height: 55upx;
	}

	.m-content-head-customer:after {
		border: 15upx solid transparent;
		border-left: 15upx solid #FFFFFF;
		top: 20upx;
		right: -26upx;
		width: 0;
		height: 0;
		position: absolute;
		content: ' '
	}


	.m-content-headimg-home {
		
		
		border-radius: 10upx;
		padding: 20upx;
	}


	.m-content-headimg-customer {
		
		
		border-radius: 10upx;
		padding: 20upx;
	}
</style>
