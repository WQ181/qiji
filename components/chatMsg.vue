<template>
	<scroll-view class="content" scroll-y="true">
		<view class="chat-time">
			<text>{{time}}</text>
		</view>
		<view :class="user?'chat-msg':'chat-msg2'">
			<view :class="user?'user':'user2'">
				<view :class="user?'user-avatar':'user-avatar2'">
					<image :src="avatar" mode="aspectFill"></image>
				</view>
				<view :class="user?'user-content':'user-content2'">
					<text>{{content}}</text>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import util from '../utils/util.js'
	export default {
		name: "qjMsg",
		data() {
			return {

			}
		},
		props: {
			user: {
				type: String
			},
			avatar: {
				type: String,
				default: ""
			},
			content: {
				type: String,
				default: ""
			},
			time: {
				type: String
			}
		},
		methods: {

		},
		onLoad() {

		}
	}
</script>

<style>
	.content{
		background: #F5F5F5;
	}
	.chat-time {
		font-size: 30upx;
		display: flex;
		justify-content: center;
		margin: 10upx 0upx 15upx 0upx;
		color: #B4B4B4;
	}

	.chat-msg2 {
		width: 80%;
		margin-bottom: 4%;
		margin-left: 140upx;
	}

	.user2 {
		display: flex;
		justify-content: flex-end;
	}

	.user-avatar2 {
		order: 2;
	}

	.user-avatar2 image {
		width: 85upx;
		height: 85upx;
		box-shadow: 5upx 5upx 10upx #c4c4c4;
		border-radius: 10upx;
	}

	.user-content2 {
		order: 1;
		width: auto;
		font-size: 32upx;
		margin-right: 20upx;
		background: #9EEA6A;
		padding: 15upx 10upx 10upx 10upx;
		border: 3upx solid #EDEDED;
		border-radius: 10upx;
	}

	.chat-msg {
		width: 80%;
		margin-bottom: 4%;
	}

	.user {
		display: flex;
	}

	.user-avatar image {
		width: 85upx;
		height: 85upx;
		box-shadow: 5upx 5upx 10upx #c4c4c4;
		border-radius: 10upx;
	}

	.user-content {
		width: auto;
		font-size: 32upx;
		margin-left: 20upx;
		background: #FFFFFF;
		padding: 15upx 10upx 10upx 10upx;
		border: 3upx solid #EDEDED;
		border-radius: 10upx;
	}
</style>
