<template>
	<view>
		<view class="container">
			<view class="collapse">
				<view>
					<!-- 分割线 -->
					<view class="divLine"></view>
				</view>
				<view class="table-data" @tap="modify()">
					<view class="con-head">{{ head.avatar }}</view>
					<view class="con-data">
						<image :src="list.avatar"></image>
					</view>
					<uni-icon type="arrowright" size="30" color="#BFC1C9" class="icon"></uni-icon>
				</view>
				<view class="table-data">
					<view class="con-head"> {{ head.name }}</view>

					<view class="con-data"><input type="text" :value="list.name" style="color: #808080;" @blur="getName" />

					</view>
					<uni-icon type="arrowright" size="30" color="#BFC1C9" class="icon"></uni-icon>
				</view>
				<view class="table-data">
					<view class="con-head">{{ head.gender }}</view>
					<view class="con-data"><text>{{ list.gender }}</text> </view>
					<uni-icon type="arrowright" size="30" color="#BFC1C9" class="icon"></uni-icon>
				</view>
				<view class="table-data">
					<view class="con-head">{{ head.age }}</view>
					<view class="con-data"><text>{{ list.age }}</text></view>
					<uni-icon type="arrowright" size="30" color="#BFC1C9" class="icon"></uni-icon>
				</view>
				<view class="table-data">
					<view class="con-head">{{ head.wechat }}</view>
					<view class="con-data"><text>{{ list.wechat }}</text></view>
					<uni-icon type="arrowright" size="30" color="#BFC1C9" class="icon"></uni-icon>
				</view>
				<view class="table-data">
					<view class="con-head">{{ head.Mobile }}</view>
					<view class="con-data"><text>{{ list.Mobile }}</text></view>
					<uni-icon type="arrowright" size="30" color="#BFC1C9" class="icon"></uni-icon>
				</view>
				<view class="table-data">
					<view class="con-head">{{ head.qualifications }}</view>
					<view class="con-data"><text>{{ list.qualifications }}</text></view>
					<uni-icon type="arrowright" size="30" color="#BFC1C9" class="icon"></uni-icon>
				</view>
				<view class="table-datas">
					<view class="con-head">{{ head.Resume }}</view>
					<view class="con-datas"><text>{{ list.Resume }}</text></view>
				</view>
			</view>
			<view class="img" @tap="previewImage">
				<image :src="list.works1" :mode="aspectFit" :data-i="0" />
				<image :src="list.works2" :mode="aspectFit" :data-i="1" />
				<image :src="list.works3" :mode="aspectFit" :data-i="2" />
			</view>

		</view>
	</view>
</template>

<script>
	import uniIcon from "../../components/uni-icon/uni-icon.vue";
	import all from '@/common/global.js';
	import request from '../../utils/req.js';
	import cfg from '../../cfg.js';
	import kf from '../../common/kf.js';
	export default {
		components: {
			uniIcon
		},
		data() {
			return {
				head: {
					avatar: '头像',
					name: '姓名',
					gender: '性别',
					age: '年龄',
					wechat: '微信',
					Mobile: '手机',
					qualifications: '专业资质',
					Resume: '行业履历'
				}, //导航栏
				list: {},
				ind: 0

			};
		},
		onLoad() {
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#40C0FD',
				success: (res) => {
					console.log("nav", res)
				}
			})
			uni.setNavigationBarTitle({
				title: '个人资料'
			});

			let consult = {
				avatar: all.globalData.user.avata,
				name: all.globalData.user.name,
				gender: all.globalData.user.gender,
				age: all.globalData.user.ageScope,
				wechat: all.globalData.user.wechat,
				Mobile: all.globalData.user.mobile,
				qualifications: all.globalData.user.qualifications ? all.globalData.user.qualifications : '暂无',
				Resume: all.globalData.user.resume ? all.globalData.user.resume : '暂无'
			};
			if (consult.gender == 0) {
				consult.gender = '男';
			} else if (consult.gender == 1) {
				consult.gender = '女';
			} else {
				consult.gender = '暂无';
			}
			this.list = consult;
			this.list.works1 = all.globalData.user.works1;
			this.list.works2 = all.globalData.user.works2 ? all.globalData.user.works2 : '';
			this.list.works3 = all.globalData.user.works3 ? all.globalData.user.works3 : '';


		},
		methods: {
			getName(e) {
				console.log('修改name', e.detail.value)
				uni.showModal({
					title: '提示',
					content: '确认修改',
					success: (res) => {
						if (res.confirm) {
							//点击确认，调用接口
							this.list.name = e.detail.value
							all.globalData.user.name = e.detail.value
							this.modify_name()
						}
					}
				});
			},

			modify_name() {
				//修改顾问名字请求
				uni.request({
					url: cfg.qjUrl + 'm_admin/consultant/modify/name.tio_x',
					method: 'post',
					data: {
						name: this.list.name,
						openid: all.globalData.openid
					},
					success: res => {
						if (res.statusCode == 200) {
							console.log('修改成功  req result：', res);
							uni.reLaunch({
								url: '../member/member'
							})
						} else {
							console.log('网络访问错误！检查服务器是否正常！');
						}
					},
					fail: function(res) {
						console.log('网络访问失败！');
					}
				});
			},
			async modify(e) {
				//修改名字
				let res = await kf.qi_niu_image();
				console.log('qiniu', res);
				let img = res[0].imageURL;
				this.list.avatar = img
				all.globalData.user.avata = img
				request.req({
					url: cfg.qjUrl + 'm_admin/consultant/modify_avatar.tio_x',
					method: 'post',
					data: {
						avatar: this.list.avatar,
						openid: all.globalData.openid
					},
					success: res => {
						if (res.statusCode == 200) {
							console.log('修改成功  req result：', res);
							uni.reLaunch({
								url: '../member/member'
							})
						} else {
							console.log('网络访问错误！检查服务器是否正常！');
						}
					},
					fail: function(res) {
						console.log('网络访问失败！');
					}
				});
			},
			previewImage(e) {
				// 预览图片

				let a;
				let pre = e.target.dataset.i;
				if (pre == 0) {
					a = this.list.works1;
				} else if (pre == 1) {
					a = this.list.works2;
				} else {
					a = this.list.works3;
				}
				uni.previewImage({
					urls: [a] // 需要预览的图片http链接列表
				});
			}

		}
	};
</script>

<style>
	.divLine {
		background: #E0E3DA;
		width: 100%;
		height: 5rpx;
	}

	.collapse {
		width: 100%;
	}

	.table-data {
		display: flex;
		height: 130upx;
		border-bottom: 2upx solid #E0E3DA;
	}

	.table-datas {
		height: 200upx;

	}

	.con-data image {
		width: 80upx;
		height: 80upx;

		border-radius: 50%;
	}

	.table-data text {
		width: 100%;
		justify-content: flex-end;
	}

	.con-head {
		display: flex;
		justify-content: flex-start;
		margin-top: 35upx;
		margin-left: 70upx;
		width: 100%;
		font-size: 36upx;

	}

	.con-data {
		
		width: 100%;
		margin-top: 35upx;
		font-size: 36upx;
		justify-content: flex-end;
	}

	.con-data text {
		width: 100%;
		color: #808080;
		padding-right: 0;
	}

	.con-datas {
		width: 100%;
		margin-top: 10upx;
		font-size: 36upx;
		padding-left: 60upx;

	}

	.con-datas text {
		color: #808080;
		position: absolute;
		text-overflow: ellipsis;
		word-wrap: break-word;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}

	.img {
		display: flex;
		margin-top: 35upx;
		padding-left: 2upx;
	}

	.img image {
		height: 300upx;
		padding-left: 10upx;
	}

	.btn {
		display: flex;
	}
</style>
