<template>
	<view>
		<view class="head">
			消息列表
		</view>
		<view v-if="members==0" style="margin-left: 30upx;">
			暂无用户发送消息
		</view>
		<view class="padding-wrap" v-for="(item,index) in members" :key="index">

			<view :class="item.user_content.unread==0?'comment':'unread_comment'" :data-id="item.user_id" @tap="jump">
				<view class="comment-list">
					<view class="comment-face">
						<image :src="item.user_content.avatar" mode="scaleToFill"></image>
						<view class="comment-top">
							<text>{{item.user_content.name}}</text>
							<view class="comment-content">
								<view v-if="item.user_content.contents[item.user_content.contents.length-1].type=='text'">
									<view class="text" v-if="item.user_content.contents[item.user_content.contents.length-1].content.length>15">
										{{item.user_content.contents[item.user_content.contents.length-1].content}}
									</view>
									<view v-else>
										{{item.user_content.contents[item.user_content.contents.length-1].content}}
									</view>
								</view>
								<view v-else-if="item.user_content.contents[item.user_content.contents.length-1].type=='picture'">
									[图片]
								</view>
								<view v-else-if="item.user_content.contents[item.user_content.contents.length-1].type=='voice'">
									[语音]
								</view>
								<view v-else>
									[视频]
								</view>
								<view class="comment-msg" v-if="item.user_content.unread">
									<view class="comment-unread">
										{{item.user_content.unread}}
									</view>
								</view>
								<view class="comment-time">
									{{item.user_content.range_time}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			
		</view>
	</view>
</template>

<script>
	import all from '../../common/global.js'
	import pako from '../../common/pako.js'
	import encoding from '../../utils/encoding.js';
	import kf from '../../common/kf.js'
	import util from '../../utils/util.js'

	export default {

		data() {
			return {
				name: "孙楚栋",
				members: []
			}
		},
		async onLoad() {

			//身份为顾问	
			//判断是否登陆过
			console.log(all.globalData.user_id)
			if (!all.globalData.user_id) {
				all.globalData.user_id = all.globalData.user.id
				console.log("顾问id",all.globalData.user_id)
				let ck = (await kf.init_im())
				console.log("ck:", ck)
				var sessionName = ck.split("=")[0],
					sessionValue = ck.split("=")[1];
				var queryString = "?" + sessionName + "=" + sessionValue;
				 all.globalData.url = "wss://mpv2.csqiji.com:9325" + queryString;
				// all.globalData.url = "wss://local.t-io.org:9325" + queryString;
				let connection = (await kf.connection());
			}

			all.globalData.local_id = all.globalData.user_id + 'a'
			try {
				console.log("local_id",all.globalData.local_id)
				const value = uni.getStorageSync(all.globalData.local_id);
				if (value) {
					
					all.globalData.msg = value
					console.log("获取本地数据",value)
				}
			} catch (e) {
				// error
			}
			this.members = all.globalData.msg
			console.log("所有聊天记录", this.members)
			for (let v of this.members) {
				v.user_content.range_time = await (util.timeago(v.user_content.time))
				console.log("近期时间", v.user_content.range_time)
			}
			
			this.members=this.members.sort(this.compare('user_content'))
		},
		onShow() {
			console.log("存储id",all.globalData.local_id)
			if(all.globalData.chat_id){
				all.globalData.msg.some((item) => {
					if (item.user_id == all.globalData.chat_id) {
						item.user_content.unread=0
					}
				})
				uni.setStorage({
					key: all.globalData.local_id,
					data: all.globalData.msg,
				});
			}
			if (all.globalData.reconnect) {
				kf.re_send()
			}
		},
		onTabItemTap() {
			uni.hideTabBarRedDot({
				index: 0,
			})
		},

		methods: {
			//比较时间戳，把消息记录排序
			compare(property) {
				return function(a, b) {
					var value1 = b[property].time;
					var value2 = a[property].time;
					return value1 - value2;
				}
			},

			jump(e) {
				console.log("对方id", e.currentTarget.dataset.id)
				let id = e.currentTarget.dataset.id
				all.globalData.chat_id = id
				//将未读消息置零
				all.globalData.msg.some((item) => {
					if (item.user_id == id) {
						item.user_content.unread = 0
					}
				})
				uni.setStorage({
					key: all.globalData.local_id,
					data: all.globalData.msg,
				});

				uni.navigateTo({
					url: '../im/im?chat_id=' + id //对方的id
				})
			}
		}
	}
</script>

<style>
	.head{
		font-size: 45upx;
		margin-bottom: 20upx;
		margin-left: 30upx;
	}
	
	.text {
		width: 380upx;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		display: inline-block;
		cursor: pointer;
	}

	.unread_comment {
		width: 94%;
		margin-left: 3%;
		background: #EFC5C9;
		box-shadow: 0px 0px 10px #c4c4c4;
		padding-top: 20upx;
		padding-bottom: 20upx;
		border-radius:20upx;
		margin-bottom: 40upx;
	}
	.comment {
		width: 94%;
		margin-left: 3%;
		
		box-shadow: 0px 0px 10px #c4c4c4;
		padding-top: 20upx;
		padding-bottom: 20upx;
		border-radius:20upx;
		margin-bottom: 40upx;
	}
	.comment-face {
		display: flex;
		flex-direction: row;
		padding-left: 28upx;
	}

	.comment-face image {
		border-radius:50%;
		width: 100upx;
		height: 100upx;
		box-shadow: 5upx 5upx 10upx #c4c4c4;
	}

	.comment-top {
		padding-left: 20upx;
		font-size: 36upx;
	}

	.comment-content {
		color: #696969;
		font-size: 30upx;
		width: 260upx;
		display: flex;
		flex-wrap: nowrap;
	}

	.comment-msg {
		position: absolute;
		margin-left: 475upx;
		margin-top: -45upx;
	}

	.comment-unread {
		background-color: #FFFFFF;
		
		text-align: center;
		width: 40upx;
		height: 40upx;
		border-radius: 50upx;
	}

	.comment-time {
		position: absolute;
		height: 50upx;
		margin-left: 430upx;
		font-size: 25upx;
	}

	
</style>
