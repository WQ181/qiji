<template>
	<view>
		<view class="container">
			<view class="">
				<view class="table-data">
					<view class="con-head">{{ head.name }}</view>

					<view class="con-data">{{ list.name }}</view>
				</view>
				<view class="table-data">
					<view class="con-head">{{ head.gender }}</view>
					<view class="con-data">{{ list.gender }}</view>
				</view>
				<view class="table-data">
					<view class="con-head">{{ head.age }}</view>
					<view class="con-data">{{ list.age }}</view>
				</view>
				<view class="table-data">
					<view class="con-head">{{ head.wechat }}</view>
					<view class="con-data">{{ list.wechat }}</view>
				</view>
				<view class="table-data">
					<view class="con-head">{{ head.Mobile }}</view>
					<view class="con-data">{{ list.Mobile }}</view>
				</view>
				<view class="table-data">
					<view class="con-head">{{ head.qualifications }}</view>
					<view class="con-data">{{ list.qualifications }}</view>
				</view>
				<view class="table-data">
					<view class="con-head">{{ head.Resume }}</view>
					<view class="con-data">{{ list.Resume }}</view>
				</view>
			</view>
			<view class="img" @tap="previewImage">
				<image :src="list.works1" :mode="aspectFit" :data-i="0" />
				<image :src="list.works2" :mode="aspectFit" :data-i="1" />
				<image :src="list.works3" :mode="aspectFit" :data-i="2" />
			</view>
			<view class="btn">
				<button type="primary" @tap="pass" plain="none">审核通过</button>
				<button type="warn" @tap="Refuse" plain="none">拒绝通过</button>
			</view>
		</view>
	</view>
</template>

<script>
import all from '@/common/global.js';
import request from '../../utils/req.js';
import cfg from '../../cfg.js';
export default {
	data() {
		return {
			head: {
				name: '姓名',
				gender: '性别',
				age: '年龄',
				wechat: '微信',
				Mobile: '手机',
				qualifications: '专业资质',
				Resume: '行业履历'
			}, //导航栏
			list: {},
			ind: 0,
			id: ''
		};
	},
	onLoad(e) {
		console.log('进入reviewDetail', e);
		let consult = {
			name: all.globalData.listReview[e.cur].name ? all.globalData.listReview[e.cur].name : '暂无',
			gender: all.globalData.listReview[e.cur].gender,
			age: all.globalData.listReview[e.cur].ageScope ? all.globalData.listReview[e.cur].ageScope : '暂无',
			wechat: all.globalData.listReview[e.cur].wechat ? all.globalData.listReview[e.cur].wechat : '暂无',
			Mobile: all.globalData.listReview[e.cur].mobile ? all.globalData.listReview[e.cur].mobile : '暂无',
			qualifications: all.globalData.listReview[e.cur].qualifications ? all.globalData.listReview[e.cur].qualifications : '暂无',
			Resume: all.globalData.listReview[e.cur].resume ? all.globalData.listReview[e.cur].resume : '暂无'
		};
		if (consult.gender == 0) {
			consult.gender = '男';
		} else if (consult.gender == 1) {
			consult.gender = '女';
		} else {
			consult.gender = '暂无';
		}
		this.list = consult;
		console.log('all.globalData.listReview', all.globalData.listReview);
		
		this.list.works1 =  all.globalData.listReview[e.cur].works1;
		this.list.works2 =  all.globalData.listReview[e.cur].works2;
		this.list.works3 =  all.globalData.listReview[e.cur].works3;

		this.id = all.globalData.listReview[e.cur].id;
	},
	methods: {
		previewImage(e) {
			// 预览图片
			console.log(e);
			let a;
			let pre = e.target.dataset.i;
			if (pre == 0) {
				a = [this.list.works1];
			} else if (pre == 1) {
				a = [this.list.works2];
			} else {
				a = [this.list.works3];
			}
			uni.previewImage({
				urls: a // 需要预览的图片http链接列表
			});
		},
		pass() {
			//通过审核
			console.log(this.id);
			request.req({
				url: cfg.qjUrl + 'm_admin/consultantAudit.tio_x',
				method: 'post',
				data: {
					id: this.id,
					isPass: '1'
				},
				success: res => {
					console.log('审核情况', res);
					uni.reLaunch({
						url: '../member/member'
					});
				}
			});
			uni.showToast({
				title: '该审核成功被您通过了~',
				icon: 'none',
				duration: 2000
			});
		},
		Refuse() {
			uni.showModal({
				title: '是否拒绝该审核',
				success: res => {
					if (res.confirm) {
						console.log('用户点击确定');
						request.req({
							url: cfg.qjUrl + 'm_admin/consultantAudit.tio_x',
							method: 'post',
							data: {
								id: this.id,
								isPass: '0'
							},
							success: res => {
								console.log('审核情况', res);
								uni.reLaunch({
									url: '../member/member'
								});
							}
						});
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		}
	}
};
</script>

<style>
.container {
	padding: 30upx;
}
.table-data {
	display: flex;
	margin: 60upx;
}
.con-head {
	font-size: 32upx;
}
.con-data {
	margin-left: 50upx;
	font-size: 32upx;
}
.img {
	display: flex;
	margin-bottom: 30upx;
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
