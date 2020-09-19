<template>
	<view>
		<form @submit="formSubmit" @reset="formReset">
			<view class="navigator" style="height:200upx">
				<view class="navigator-text">{{ userInfo.city }}</view>
				<view style="display: flex;flex-direction: column;align-items: center;">
					<image :src="userInfo.avatarUrl" class="userInfo-avatar" background-size="cover"></image>
					<text class="userInfo-nickname">{{ userInfo.nickName }}</text>
				</view>
			</view>

			<view class="navigator">
				<view class="navigator-text" style="width:40%;margin-left:20upx">姓名</view>
				<view class="setright"><input name="name" type="text" placeholder-style="color:#31B5FE;font-size:16px" placeholder="请输入您的姓名" /></view>
			</view>
			
			<view class="navigator">
				<view class="navigator-text" style="width:40%;margin-left:20upx">年龄</view>
				<view class="setright"><input name="mobile" type="number" placeholder-style="color:#31B5FE;font-size:16px" placeholder="请输入年龄" @blur="ageBlur" /></view>
			</view>
			<view class="navigator">
				<view class="navigator-text" style="width:40%;margin-left:20upx">微信</view>
				<view class="setright"><input name="mobile" type="text" placeholder-style="color:#31B5FE;font-size:16px" placeholder="请输入微信" @blur="wechatBlur" /></view>
			</view>
			<view class="navigator">
				<view class="navigator-text" style="width:40%;margin-left:20upx">手机号码</view>
				<view class="setright"><input name="mobile" type="number" placeholder-style="color:#31B5FE;font-size:16px" placeholder="请输入手机号码" @blur="mobileBlur" /></view>
			</view>
			<view class="navigator">
				<view class="navigator-text" style="width:40%;margin-left:20upx">专业资质</view>
				<view class="setright"><input name="mobile" type="text" placeholder-style="color:#31B5FE;font-size:16px" placeholder="请输入专业资质" @blur="qualificationBlur" /></view>
			</view>
			<view class="navigator">
				<view class="navigator-text" style="width:40%;margin-left:20upx">专业履历</view>
				<view class="setright"><input name="mobile" type="text" placeholder-style="color:#31B5FE;font-size:16px" placeholder="请输入专业履历" @blur="studyBlur" /></view>
			</view>
			<view class="navigator">
				<view class="navigator-text" style="width:40%;margin-left:20upx">请上传三张你的作品</view>
				
			</view>
			<view style="display:flex;margin-top: 20upx;margin-left: 30upx;">
				<view v-for="(item,index) in imageurl" :key="index">
					<image :src='item' class='uploadImage' style="margin-left:5upx" ></image>
					<icon type='clear' :data-id="index" @tap='deleteImage'></icon>
				</view>
				<view v-if="imageurl.length<3" class='upload' @tap='uploadImage'>
					<image src='https://qjqn.foxcodes.cn/sys_190429_add.png'></image>
					<text style="font-size:30upx;color:#aaa">上传作品</text>
				</view>
			</view>
			<view class="form"><button form-type="submit" style="width:80%;background:rgb(49,181,255);color:#FFFFFF;font-size:32upx" type="btnstate">注册</button></view>
		</form>
	</view>
</template>

<script>
import request from '../../utils/req.js';
import cfg from '../../cfg.js';
import all from '../../common/global.js';
import util from '../../utils/util.js';
import kf from '../../common/kf.js'
export default {
	data() {
		return {
			userInfo: null,
			identifyingCode: '123',
			btnstate: 'default',
			age:'',
			wechat:'',
			mobile: '',
			qualification:'',
			study:'',
			imageurl:[],
			image_id:[]
		};
	},
	onLoad: function() {
		let userInfo = all.globalData.userInfo;
		console.log('register', userInfo);

		uni.setNavigationBarTitle({
			title: '注册个人资料'
		});
		if (userInfo) {
			// let userInfo = all.globalData.userInfo
			userInfo.city = util.transCity(userInfo.city);
			this.userInfo = userInfo;
			console.log(this.userInfo);
		}
	},
	methods: {
		async uploadImage() {
			//上传图片
			let url = await kf.qi_niu_image()
			uni.hideToast()
			this.imageurl.push(url[0].imageURL)
			console.log("图片", this.imageurl)
			let length = cfg.qiniuDomain.length
			this.image_id.push(url[0].imageURL.substring(length+1))
			console.log("图片序号",this.image_id)
		},
		deleteImage(e) {
			console.log("删除的照片", e.mp.currentTarget.dataset.id)
			let id = e.mp.currentTarget.dataset.id
			let index = this.imageurl.indexOf(this.imageurl[id])
			console.log(index)
			if (index > -1) {
				this.imageurl.splice(index, 1);
				this.image_id.splice(index,1)
			}
			console.log("删除后的照片", this.imageurl,this.image_id)
		},
		mobileBlur: function(e) {
			this.mobile = e.detail.value;
		},
		ageBlur(e){
			this.age=e.detail.value
		},
		wechatBlur(e){
			this.wechat=e.detail.value
		},
		qualificationBlur(e){
			this.qualification=e.detail.value
		},
		studyBlur(e){
			this.study=e.detail.value
		},
		//验证手机号码是否符合规则,11位数字，以1开头
		checkMobile(str) {
			var re = /^1\d{10}$/;
			if (re.test(str)) {
				return 1;
			} else {
				return 0;
			}
		},
		//提交
		formSubmit: function(e) {
			let userInfo = {
				name:e.detail.value.name,
				mobile:this.mobile,
				age:this.age,
				wechat:this.wechat,
				qualification:this.qualification,//专业资质
				study:this.study,//专业履历
				imageurl:this.imageurl//作品
			};
			
			console.log("用户信息",userInfo);
			
			
				if (this.checkMobile(userInfo.mobile)&&userInfo.name&&userInfo.age&&userInfo.wechat&&userInfo.qualification&&userInfo.study&&userInfo.imageurl.length==3) {
					//向后台提交数据
					request.req({
						url: cfg.qjUrl + 'setting/consultant/modify_record.tio_x',
						method: 'post',
						data: userInfo,
						success: res => {
							console.log('注册 res', res);
							if (res.statusCode == 200) {
								if (res.data.ok) {
									//// ok为0才是正常返回
									uni.showToast({
										title: '注册失败！请尝试重新提交。',
										icon: 'none',
										duration: 2000
									});
									console.log('注册失败！');
								} else {
									uni.showToast({
										title: '注册成功！',
										icon: 'success',
										duration: 2000,
										success: function() {
											//修改成功后，数据同步到全局变量userInfo
											
											
											all.globalData.userInfo.name = userInfo.name;
											all.globalData.userInfo.mobile = userInfo.mobile;
											uni.setStorageSync('userInfo', userInfo);
											uni.reLaunch({
												url:'../Wait/Wait'
											})
										}
									});
									console.log('注册成功！');
								}
							} else {
								console.log('网络访问错误！检查服务器是否正常！');
							}
						},
						fail: function(res) {
							console.log('网络访问失败！');
						}
					});
				} else {
					uni.showToast({
						title: '请检查信息是否填写完整',
						icon: 'none',
						duration: 2000,
						success: function() {}
					});
				}
			
			
		}
	}
};
</script>

<style>
	
	.upload {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #e6e6e6;
		margin-bottom: 5upx;
	}
	
	.upload image {
		width: 140upx;
		height: 140upx;
	}
	
	.uploadImage {
		width: 140upx;
		height: 140upx;
		
	}
.userInfo-avatar {
	width: 150upx;
	height: 150upx;
	border-radius: 50%;
}

.userInfo-nickname {
	font-size: 24upx;
	color: #aaa;
}

.userinfo-avatar {
	width: 128upx;
	height: 128upx;
	margin: 20upx;
	border-radius: 50%;
}

.navigator-box {
	opacity: 0;
	position: relative;
	background-color: #fff;
	line-height: 1.41176471;
	font-size: 34upx;
	transform: translateY(-50%);
	transition: 0.3s;
}

.navigator-box-show {
	opacity: 1;
	transform: translateY(0);
}

.navigator {
	padding: 20upx 30upx;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80upx;
	border-bottom: 1upx solid #d8d8d8;
	font-size: 85%;
}

.navigator:before {
	content: ' ';
	position: absolute;
	left: 30upx;
	top: 0;
	right: 30upx;
	height: 2upx;
	color: #d8d8d8;
}

.navigator:first-child:before {
	display: none;
}

.navigator-text {
	flex: 1;
}

.form {
	padding-top: 50upx;
}
</style>
