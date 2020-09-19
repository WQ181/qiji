<template>
	<div>
		<view class="container">
			<!-- 会员相关信息 -->
			<view class="myinfo">
				<view class="myicon">

					<image :src="avatar"></image>
					<view class="head">

						<text>{{nickname}} </text>
						<text>{{qualifications}}</text>

					</view>
				</view>
			</view>

			<view class="mynavigator" @tap="jump()">
				<text>账户余额（元）</text>
				<text>￥{{balance}}</text>
			</view>
			<view class="collapse">
				<button @tap="pageTo(0)" class="information">
					<text class="text" style="font-size: 36upx;margin-left: 40upx;">个人资料</text>
					<uni-icon type="arrowright" size="30" color="#BFC1C9" class="icon"></uni-icon>
				</button>
				<button @tap="pageTo(1)" style="margin-top: 20upx;" class="order">
					<text style="font-size: 36upx;margin-left: 40upx;">已完成的订单</text>
					<uni-icon type="arrowright" size="30" color="#BFC1C9" class="icon"></uni-icon>
				</button>
			</view>

			<view class="collapse" @click="manageGet()">
				<uni-collapse accordion="true">
					<uni-collapse-item title="管理员" :disabled="disabled" :data-i="2">
						<block v-for="(item,index) in  navitems" :key="index">
							<button :open-type="item.type" :data-where="item.where" @click="jumpTo" style="border:0;display: flex;margin-top: 50upx; margin-bottom: 20upx; width: 80%;justify-content: center;align-content: center;">
								<text style="font-size: 36upx; margin-left: 35%;color: #808080;">{{ item.title }}</text>
							</button>
						</block>
					</uni-collapse-item>
				</uni-collapse>
			</view>
		</view>
	</div>
</template>

<script>
	import uniCollapseItem from "../../components/uni-collapse-item/uni-collapse-item.vue";
	import uniCollapse from "../../components/uni-collapse/uni-collapse.vue";
	import uniIcon from "../../components/uni-icon/uni-icon.vue";
	import util from '../../utils/util.js';
	import request from '../../utils/req.js';
	import cfg from '../../cfg.js';
	import all from '../../common/global.js';
	import kf from '../../common/kf.js';

	import {
		login,
		isLogin
	} from '../../user/basic.js';
	var myDate = new Date();
	myDate.setMonth(myDate.getMonth() + 1);

	export default {
		components: {
			uniIcon,
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				balance: 0,
				disabled: true,
				avatar: 'https://qjqn.foxcodes.cn/sys_190429_head.png',
				nickname: '匿名', //昵称
				qualifications: '',
				navitems: [
					//导航栏目
					{
						imgurl: 'https://qjqn.foxcodes.cn/sys_190429_files.png',
						title: '顾问管理',
						where: '../consultant/consultant',
						plain: true,
						type: ''
					},
					{
						imgurl: 'https://qjqn.foxcodes.cn/sys_190429_wardrobe.png',
						title: '用户管理',
						where: '../manage/manage',
						plain: true,
						type: ''
					},

					{
						imgurl: 'https://qjqn.foxcodes.cn/sys_190429_share.png',
						title: '推送管理',
						where: '../managePush/managePush',
						plain: true,
						type: ''
					}, {
						imgurl: 'https://qjqn.foxcodes.cn/sys_190429_mycollocation.png',
						title: '客服管理',
						where: '../kf_Review/kf_Review',
						plain: true,
						type: ''
					},
					{
						imgurl: 'https://qjqn.foxcodes.cn/sys_190429_setting.png',
						title: '设置管理',
						where: '../setting/setting',
						plain: true,
						type: ''
					}, {
						imgurl: '',
						title: 'A I 匹配',
						where: '',
						plain: true,
						type: ''
					}
					// {
					// 	imgurl: 'https://qjqn.foxcodes.cn/sys_190429_mycollocation.png',
					// 	title: '形象测试',
					// 	where: '../imageTest/imageTest',
					// 	plain: true,
					// 	type: ''
					// },


				]
			};
		},
		onLoad: function(options) {
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#5DC2FA',
				success: (res) => {
					console.log("nav", res)
				}
			})
			console.log('顾问', all.globalData.user);
			(this.nickname = all.globalData.user.name), console.log(`名字是${this.nickname}`);
			this.avatar = all.globalData.user.avata;
			this.balance = all.globalData.user.balance
			this.qualifications = all.globalData.user.qualifications
			this.disabled = all.globalData.user.isManager ? false : true
		},

		methods: {
			pageTo(e) {

				let where = e == 0 ? '../information/information' : '../Answered/Answered'
				uni.navigateTo({
					url: where
				})
			},
			manageGet(e) {

				let manage = all.globalData.user.isManager
				if (manage == false) {
					uni.showToast({
						title: '您还不是管理员',
						icon: 'none',
					});
				}

			},
			jump() {
				uni.navigateTo({
					url: '../Order/Order'
				})
			},
			jumpTo(e) {
				let where = e.currentTarget.dataset.where;
				// 验证是否已登录

				console.log('where', where);
				let id = all.globalData.user.id;
				this.islogin(where);
				console.log('islogin');
			},
			islogin(where) {
				isLogin(
					function(res) {
						console.log('jump to ', where);
						uni.navigateTo({
							url: where
						});
					},
					function(res) {
						console.log('用户未授权或登录');
					}
				);
			}
		}
	};
</script>
<style>
	page {
		background: whitesmoke
	}

	.collapse {
		width: 90%;
		margin-top: 40upx;
		height: 200upx;
	}


	.collapse button {
		display: flex;
		flex-direction: row;
		background-color: white;
		height: 100upx;
	}

	.collapse image {
		width: 500upx;
		height: 200upx;
		border-radius: 50%;
		margin-top: -50upx;
		margin-left: -120upx;
	}

	.order {
		display: flex;
		justify-content: center;

	}

	.information {
		display: flex;
		justify-content: center;
	}

	.information text {
		display: flex;
		width: 100%;
		justify-content: flex-start;
	}

	.order image {
		width: 100upx;
		height: 60upx;
		border-radius: 50%;
		margin-top: 20upx;
		display: flex;
		justify-content: center;
		margin-left: 0upx;
	}

	.order text {
		display: flex;
		width: 100%;
		justify-content: center;

	}

	.collapse text {
		width: 100%;
		display: flex;
		justify-content: flex-start;
	}

	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		box-sizing: border-box;
	}

	.myinfo {
		width: 100%;
		height: 500upx;
		background-size: cover;
		background-color: snow;
		/* display: flex; */
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		background: linear-gradient(120deg, #5DC2FA, #4ED3FF);
		border-bottom-left-radius: 5%;
		border-bottom-right-radius: 5%;
	}

	.myicon {
		/* width: 30%;
  height: 100%; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 10upx;
	}

	.myicon text {
		font-size: 100upx;
		color: white;
	}

	.myicon image {
		width: 200upx;
		height: 200upx;
		margin: 10upx;
		border-radius: 50%;
		box-shadow: 5upx 5upx 10upx #c4c4c4;
		margin-top: 80upx;
	}

	.myicon text {
		font-size: 30upx;
		color: white;
	}

	.mydata {
		width: 90%;
		height: 140upx;
		background: #FFFFFF;
		border-radius: 10upx;
		margin-top: -30upx;
	}

	.head {
		font-size: 38upx;
		font-weight: 550;
		color: #565656;
		height: 30%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

	}

	.head input {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50upx;
	}

	.head text {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.head image {
		width: 50upx;
		height: 50upx;
		margin-right: 10upx;
	}

	.detail {
		display: flex;
		font-size: 30upx;
		color: #828282;
		/* height: 50%; */
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
	}

	.detail view {
		height: 50%;
		width: 25%;
		text-align: center;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		padding-top: 10upx;
	}

	.detail .state {
		height: 30upx;
		width: 30upx;
		margin-left: 10upx;
	}

	.detail .electric {
		height: 40upx;
		width: 40upx;
		margin-left: 10upx;
	}

	.myadress {
		width: 100%;
		color: #5daee6;
		font-size: 28upx;
		font-weight: 580;
		margin: 15upx 0;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.myadress image {
		margin: 0 10upx;
		height: 50upx;
		width: 50upx;
	}

	.dividingstrip {
		height: 35upx;
		background-color: ghostwhite;
	}


	.service {
		width: 90%;
		height: 150upx;
		margin-top: 40upx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: white;
		border-radius: 5%;

	}

	.userinfo-avatar {
		width: 80upx;
		height: 80upx;
		margin: 10upx;
		border-radius: 50%;
	}

	.roleinfo-avatar {
		width: 60upx;
		height: 60upx;
		margin: 10upx;
		border-radius: 50%;
	}

	.mynavigator {
		width: 90%;
		height: 200upx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		background-color: white;
		border-radius: 5px;
		margin-top: 30upx;
	}

	.navitems {
		width: 200upx;
		height: 200upx;
		margin: 10upx, 10upx, 0, 10upx;
		text-align: center;
		font-weight: 7500;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 26upx;
		color: grey;
		border: none;
	}

	.navitems view {
		width: 150upx;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10%;

	}

	.navitems view image {
		width: 80upx;
		height: 80upx;
	}

	.dividingstrip {
		width: 100%;
		height: 35upx;
		background-color: whitesmoke;
	}
</style>
