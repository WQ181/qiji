<template>
	<view>
		<view class="container">
			<view class="page-bg">
				<view class="page-padding"><textarea maxlength="300" @input="getcon" :value="val" placeholder="推荐思路 / 注意事项" /></view>
			</view>
			<view class="image-container">
				<view class="img-box" @tap="addimg"><image class="image" :src="img ? img : adimg" mode="aspectFit"></image></view>
				<text class="imageupload">* 上传图片</text>
			</view>
		</view>
		<view class="bottom">
			<view class="container-top">
				<view class="icon">
					<image src="../../static/icon/style.png" mode=""></image>
					<button  @click="recordGo" hover-class="none"><text>形象特质</text></button>
				</view>
				<view class="icon">
					<image src="../../static/icon/collocation.png" mode=""></image>
					<button  @click="pageGo" hover-class="none"><text>私人衣橱</text></button>
				</view>
			</view>
			<view class="btn">
				<button class="top" @click="submit" hover-class="none"><text>提&#12288;交</text></button>
			</view>
		</view>
		
	</view>
</template>

<script>
import request from '../../utils/req.js';
import cfg from '../../cfg.js';
import kf from '../../common/kf.js';
import all from '../../common/global.js';
export default {
	data() {
		return {
			adimg: 'https://qjqn.foxcodes.cn/sys_190429_add.png',
			img: '',
			val: '',
			question_id: '',
			id: '',
			isAnswered: false,
			index: '',
			intervalID: ''
		};
	},
	onLoad: function(option) {
		console.log('回答问题', option);
		this.id = all.globalData.user_id;
		this.index = option.index;
		this.isAnswered = option.isAnswered;
		//判断问题是否被回答
		if (this.isAnswered == 'true') {
			this.question_id = all.globalData.answered[this.index].id;
			console.log('问题true', this.question_id);
		} else {
			this.question_id = all.globalData.unanswered[this.index].id;
			console.log('问题false', this.question_id);
		}
		//获取缓存中的数据
		uni.getStorage({
			key: this.question_id + 'question',
			success: res => {
				this.img = res.data.image_url;
				this.val = res.data.content;
				console.log('success', res);
			},
			fail: function() {
				console.log('fail');
			}
		});
		//定时缓存数据
		this.intervalID = setInterval(() => {
			this.store();
		}, 10000);
	},
	onUnload() {
		//清除定时
		clearInterval(this.intervalID);
		console.log('页面卸载', this.intervalID);
	},
	methods: {
		async addimg(e) {
			//异步上传图片
			console.log('addimg', e);
			let res = await kf.qi_niu_image(1);
			uni.hideToast();
			console.log('qiniu', res);
			console.log('长度',res.length)
			let img = res[0].imageURL;
			this.img = img;
			console.log('选择图片success', this.img);
		},
		getcon(e) {
			//获取用户输入内容
			this.val = e.detail.value;
		},
		pageGo() {
			//跳转到衣橱页面
			uni.navigateTo({
				url: '../wardrobe/wardrobe?isAnswered=' + this.isAnswered + '&index=' + this.index
			});
		},
		recordGo() {
			//跳转到形象特质页面
			uni.navigateTo({
				url: '../record/record?isAnswered=' + this.isAnswered + '&index=' + this.index,
				
			});
		},
		store() {
			//开始缓存数据
			uni.setStorage({
				key: this.question_id + 'question',
				data: {
					image_url: this.img, //图片
					content: this.val //内容
				},
				success: () => {
					console.log('success storage', this.question_id + 'question');
				}
			});
		},
		submit() {
			//提交方案
			if (this.img == '' || this.val == '') {
				//若方案不完全不能提交
				uni.showModal({
					title: '请提交完整方案',
					showCancel: false,
					confirmText: '取消',
					success: function(res) {}
				});
			} else {
				uni.showModal({
					title: '确认提交此方案？',
					showCancel: true,
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							//点击确认，提交请求
							request.req({
								url: cfg.qjUrl + 'gl/controller/consultant/answer/question.tio_x',
								method: 'get',
								data: {
									image_url: this.img,
									content: this.val,
									consultantId: this.id, //顾问id
									FDesignId: this.question_id //问题id
								},
								success: res => {
									if (res.statusCode == 200) {
										console.log('res.data', res.data);
										uni.removeStorageSync(this.question_id + 'question'); //移除缓存
										uni.setStorageSync('user', all.globalData.user);
										console.log('user：', all.globalData.user);
									} else {
										console.log('网络访问错误！检查服务器是否正常！res.statusCode: ', res.statusCode);
									}
								},
								fail: function(res) {
									console.log('网络访问失败！');
								}
							});
							//返回问题界面
							uni.reLaunch({
								url: '../advisory/advisory'
							});
						}
					}
				});
			}
		}
	}
};
</script>

<style>
	.icon{
		display: flex;
		
		flex-direction: row;
		margin-top: 50upx;
	}
	.icon image{
		z-index: 90;
		position: relative;
		margin-top: 40upx;
		width: 90upx;
		height: 90upx;
		margin-left: 20upx;
	}
	.icon text{
		display: flex;text-align: center;
		margin-top: -10upx;
		font-size: 35upx;
	}
	.icon button{
		height: 70upx;
		width: 30upx;
	}
	.bottom{
		background: #F5F5FA;
		height: 600upx;
		margin-top: 0upx;
	}
.container {
	display: flex;
	flex-direction: column;
}
.container-top {
	display: flex;
	
}
.container-top button {
	margin-bottom: 20upx;
	background: #FFFFFF;
	height: 90upx;
	width: 250upx;
	padding-top: 10upx;
	margin-top: 40upx;
}

.container-top text{
color: #c2c2c2;	
}

.image-container {
	
	display: flex;
	flex-direction: column;
	margin-left: 50upx;
	background-color: #fff;
	margin-bottom: 10upx;
	padding-bottom: 10upx;
	margin-top: 10upx;
}
.img-box {
	width: 200upx;
	height: 220upx;
	margin-top: 50upx;
}
.image {
	width: 100%;
	height: 100%;
}
.imageupload {
	font-size: 34upx;
	color: #c2c2c2;
	padding-bottom: 5upx;
}
.page-bg {
	display: flex;
	align-items: center;
	justify-content: center;
}

.page-bg textarea {
	height: 200upx;
	
}
.btn {
		order: 5;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 250upx;
		height: 80upx;
	}

	.top {
		background-color: #40C0FD;
		width: 50%;
		border-radius: 40upx;
		height: 100%;
		display: flex;
		text-align: center;
		justify-content: center;
		align-content: center;
	}

	.top text {
		display: flex;
		color: white;
		font-size: 36upx;
		text-align: center;
		justify-content: center;
		align-content: center;
	}
</style>
