<template>
	<view class="main">
		<image src="../../static/icon/index.png" mode="aspectFill"></image>
		<view class="text1">
			<text>奇 纪 美 业 顾 问</text>

		</view>
		<view class="btn">
			<button class="top" open-type="getUserInfo" @getuserinfo="getUserInfoAuthorization" hover-class="none"
			 withCredentials="true">
				<text>登 录</text>
			</button>

		</view>
	</view>
</template>

<script>
	import cfg from '../../cfg.js';
	import all from '../../common/global.js';
	import request from '../../utils/req.js';
	import {
		login,
		isLogin
	} from '../../user/basic.js'; //这样可以引入多个函数，配合export用
	var _scene, _this; //为了获得this定义的全局变量
	export default {
		data() {
			return {
				scene: '',
				leg: 1,
				createAd: '',
				signin_time: '',
				sys_qj: cfg.qiniuDomain + 'sys_qj.png'
			};
		},
		onLoad: function() {
			_scene = this.scene;
			_this = this;
		},
		methods: {
			//"获取头像昵称"按钮触发的事件
			getUserInfoAuthorization: function(e) {
				uni.showToast({
					title: '正在登陆喔！请稍候',
					mask: false,
					icon: 'none',
					duration: 30000
				});
				//如果授权请求被允许，则进行登录验证
				if (e.detail.errMsg.indexOf('ok') != -1) {
					login(
						res => {
							console.log('consult.js onLoad 登录成功！', res);
							let isAudit = res.data.IsAudit;
							console.log('isAudit', isAudit);

							if (res.data.mobile) {
								//注册过
								if (isAudit == 0) {
									//审核通过
									uni.reLaunch({
										url: '../pre-im/pre-im'
									});
								} else {
									//没通过审核
									uni.reLaunch({
										url: '../Wait/Wait?isAudit=' + isAudit
									});
								}
							} else {
								uni.reLaunch({
									url: '../register/register'
								});
							}
							uni.hideToast();
						},
						function() {
							console.log('consult.js onLoad 登录失败!', res);
						},
						this._scene
					);


				} else {
					console.log('用户拒绝授权！');
				}
			}
		}
	};
</script>

<style>
	.main {
		background: #fff;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	image {
		width: 80%;
		height: 80%;
		position: absolute;
		order: 1;
		margin-top: 50%;
	}

	.text1 {
		font-size: 50upx;
		order: 3;
		position: absolute;
		margin-top: 80%;
		font-family: 楷体;
		font-weight: 700;
	}

	.btn {
		order: 5;
		position: absolute;
		margin-top: 120%;
		width: 45%;
		height: 70upx;
	}

	.top {
		background-color: #E9488C;
		width: 100%;
		height: 100%;
		border-radius: 50upx;
	}

	.top text {
		/* color: white; */
		font-size: 40upx;
		font-family: 楷体;
		font-weight: 700;
		height: 100%;
		margin-top: -15upx;
		display: flex;
		align-content: center;
		justify-content: center;
	}
</style>
