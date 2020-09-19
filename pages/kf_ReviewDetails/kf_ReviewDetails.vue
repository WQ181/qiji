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
			<view class="btn"><button type="primary" @tap="pass" plain="none">审核成为客服</button></view>
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
			name: all.globalData.kf_Review[e.cur].name ? all.globalData.kf_Review[e.cur].name : '暂无',
			gender: all.globalData.kf_Review[e.cur].gender ? '男' : '女',
			age: all.globalData.kf_Review[e.cur].ageScope ? all.globalData.kf_Review[e.cur].ageScope : '暂无',
			wechat: all.globalData.kf_Review[e.cur].wechat ? all.globalData.kf_Review[e.cur].wechat : '暂无',
			Mobile: all.globalData.kf_Review[e.cur].mobile ? all.globalData.kf_Review[e.cur].mobile : '暂无',
			qualifications: all.globalData.kf_Review[e.cur].qualifications ? all.globalData.kf_Review[e.cur].qualifications : '暂无',
			Resume: all.globalData.kf_Review[e.cur].resume ? all.globalData.kf_Review[e.cur].resume : '暂无'
		};
		this.list = consult;
		this.list.works1 = cfg.qiniuDomain + '/' + all.globalData.kf_Review[e.cur].works1;
		this.list.works2 = cfg.qiniuDomain + '/' + all.globalData.kf_Review[e.cur].works2;
		this.list.works3 = cfg.qiniuDomain + '/' + all.globalData.kf_Review[e.cur].works3;

		this.id = all.globalData.kf_Review[e.cur].id;
	},
	methods: {
		previewImage(e) {
			// 预览图片
			console.log(e);
			let a;
			let pre = e.target.dataset.i;
			if (pre == 0) {
				a = [this.list.image1];
			} else if (pre == 1) {
				a = [this.list.image2];
			} else {
				a = [this.list.image3];
			}
			uni.previewImage({
				urls: a // 需要预览的图片http链接列表
			});
		},
		pass() {
			console.log(this.id);
			// 			request.req({
			// 				url:cfg.qjUrl+'m_admin/consultantAudit.tio_x',
			// 				method:"post",
			// 				data:{
			// 					"id":this.id,
			// 					"isPass":"1"
			// 				},
			// 				success:(res)=>{
			// 					console.log("审核情况",res)
			// 					uni.reLaunch({
			// 						url:'../member/member'
			// 					})
			// 				}
			// 			})
			uni.showToast({
				title: '该审核成功被您通过了~',
				icon: 'none',
				duration: 2000
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
