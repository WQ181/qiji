<template>
	<view>
		<view class="">
			<view class="table" @tap="pageGo">
				<view class="table-head">
					<view class="table-data">{{ head.name }}</view>
					<view class="table-data">{{ head.gender }}</view>
					<view class="table-data">{{ head.age }}</view>
					<view class="table-data">{{ head.wechat }}</view>
					<view class="table-data">{{ head.Mobile }}</view>
					<view class="table-data">{{ head.qualifications }}</view>
					<view class="table-data">{{ head.Resume }}</view>
				</view>
				<view class="table-content">
					<view class="table-data">{{ list.name }}</view>
					<view class="table-data">{{ list.gender }}</view>
					<view class="table-data">{{ list.age }}</view>
					<view class="table-data">{{ list.wechat }}</view>
					<view class="table-data">{{ list.Mobile }}</view>
					<view class="table-data">{{ list.qualifications }}</view>
					<view class="table-data">{{ list.Resume }}</view>
				</view>
			</view>
			<view class=""><list-pagination :num="num" :current="current" @get-current="currentGet"></list-pagination></view>
		</view>
	</view>
</template>

<script>
import listPagination from '@/components/list-pagination/pagination.vue';
import all from '@/common/global.js';
import request from '../../utils/req.js';
import cfg from '../../cfg.js';
export default {
	components: {
		listPagination
	},
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
			lists: [], //所有资料
			list: {}, //当前展示
			num: 1,
			current: 1
		};
	},
	onLoad() {
		this.listGet();
	},
	methods: {
		listGet() {
			request.req({
				url: cfg.qjUrl + 'm_admin/consultant.tio_x',
				methods: 'get',
				success: res => {
					console.log('返回待审核res', res);
					let i = 0;
					let consult = {
						name: res.data.data[i].name ? res.data.data[i].name : '暂无',
						gender: res.data.data[i].gender ? res.data.data[i].gender : '暂无',
						age: res.data.data[i].ageScope ? res.data.data[i].ageScope : '暂无',
						wechat: res.data.data[i].wechat ? res.data.data[i].wechat : '暂无',
						Mobile: res.data.data[i].mobile ? res.data.data[i].mobile : '暂无',
						qualifications: res.data.data[i].qualifications ? res.data.data[i].qualifications : '暂无',
						Resume: res.data.data[i].resume ? res.data.data[i].resume : '暂无'
					};
					console.log('待审核', consult);
					if (consult.gender == 0) {
						consult.gender = '男';
					} else if (consult.gender == 1) {
						consult.gender = '女';
					} else {
						consult.gender = '暂无';
					}
					this.list = consult;
					this.num = res.data.data.length != '暂无待审核申请' ? res.data.data.length : 1;//需要调整的
					this.lists = res.data.data;
					all.globalData.listReview = res.data.data;
				}
			});
		},
		pageGo() {
			let cur = this.current - 1;
			uni.navigateTo({
				url: '../ReviewDetails/ReviewDetails?cur=' + cur
			});
		},
		currentGet(e) {
			console.log('获取页码', e);
			this.current = e.current;
			let consult = {
				name: this.lists[this.current - 1].name ? this.lists[this.current - 1].name : '暂无',
				gender: this.lists[this.current - 1].gender,
				age: this.lists[this.current - 1].ageScope ? this.lists[this.current - 1].ageScope : '暂无',
				wechat: this.lists[this.current - 1].wechat ? this.lists[this.current - 1].wechat : '暂无',
				Mobile: this.lists[this.current - 1].mobile ? this.lists[this.current - 1].mobile : '暂无',
				qualifications: this.lists[this.current - 1].qualifications ? this.lists[this.current - 1].qualifications : '暂无',
				Resume: this.lists[this.current - 1].resume ? this.lists[this.current - 1].resume : '暂无'
			};

			if (consult.gender == 0) {
				consult.gender = '男';
			} else if (consult.gender == 1) {
				consult.gender = '女';
			} else {
				consult.gender = '暂无';
			}
			this.list = consult;
		}
	}
};
</script>

<style>
.table {
	display: flex;
	margin-left: 35upx;
	flex-direction: row;
}

.table-head {
	width: 220upx;
	display: flex;
	height: 500upx;
	white-space: nowrap;
	flex-direction: column;
}

.table-content {
	width: 450upx;
	display: flex;
	height: 500upx;
	white-space: nowrap;
	flex-direction: column;
}

.table-data {
	line-height: 100upx;
	text-align: center;
	font-size: 36upx;
	border: 1px solid grey;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}
</style>
