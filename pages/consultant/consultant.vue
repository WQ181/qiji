<template>
	<view class="">
		<!-- menuTab -->
		<view class="swiper-tab">
			<view v-bind:class="['swiper-tab-list', currentTab == 0 ? 'on' : '']" @tap="swichNav(0)">已审核</view>
			<view v-bind:class="['swiper-tab-list', currentTab == 1 ? 'on' : '']" @tap="swichNav(1)">未审核</view>
		</view>
		<view class="swiper-con">
			<swiper @change="bindChange" :current="currentTab">
				<swiper-item>
					<scroll-view scroll-y>
						<view class="con-data">
							<block v-for="(item, index) in lists" :key="index">
								<view class="">
									<view @tap="adviserdetail(index)">
										<view class="myinfo">
											<view class="img">
												<image :src="item.avata"></image>
											</view>
											<view class="myicon">
												<view class="mydata">
													<view class="head">
														<text>{{ item.name }}</text>
													</view>
													<view class="">
														<text style="font-size: 30upx;">{{item.is_manager}}</text>
													</view>
													<text>{{ item.mobile }}</text>
												</view>
												<view class="btn">
													<text>{{item.title}}</text>
												</view>
											</view>
										</view>
									</view>
								</view>
							</block>
						</view>
					</scroll-view>

				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y>
						<view class="con-data" v-if="listReview">
							<block v-for="(item, index2) in listReview" :key="index2">
								<view @tap="pageGo(index2)" hover-class="weui-cell_active">
									<view class="myinfo">
										<view class="img">
											<image :src="item.avata"></image>
										</view>
										<view class="myicon">
											<view class="mydata">
												<view class="head">
													<text>{{ item.name }}</text>
												</view>
												<text>{{ item.mobile }}</text>
											</view>
										</view>
									</view>
								</view>
							</block>
						</view>
						<view class="" v-else>
							暂无未审核顾问
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/req.js';
	import cfg from '../../cfg.js';
	import all from '../../common/global.js';
	import util from '../../utils/util.js';
	export default {
		data() {
			return {
				lists: [],
				listReview: [],
				currentTab: 0, // tab切换，0已回答列表，1未回答列表
				Identity: '讲师',
				nametype: ''
			};
		},
		onLoad() {
			this.consult();
			this.listGet();
		},
		methods: {

			swichNav: function(current) {
				//点击其中一个 menu
				if (this.currentTab == current) {
					return false;
				} else {
					//切换成功
					this.currentTab = current;
				}
			},
			bindChange(e) {
				console.log('跳转到', e.detail.current);
				this.currentTab = e.detail.current;
				if (this.currentTab == 1)
					this.listGet();
				else
					this.consult();
			},
			adviserdetail(e) {
				console.log('跳转到manageDetail', e);
				uni.navigateTo({
					url: '../manageDetail/manageDetail?id=' + this.lists[e].id
				});
			},
			pageGo(e) {

				uni.navigateTo({
					url: '../ReviewDetails/ReviewDetails?cur=' + e
				});
			},
			consult() {
				// 请求顾问列表数据
				request.req({
					url: cfg.qjUrl + 'gl/manage/consultant/list.tio_x',
					method: 'get',
					data: {
						pageSize: 1000,
						pageNumber: 1
					},
					success: res => {
						console.log('顾问列表', res.data.data);
						this.lists = []
						this.lists = res.data.data.list;
						for (let i = 0; i < this.lists.length; i++) {
							let ava = this.lists[i].avata.search('http');
							this.lists[i].avata = ava == -1 ? cfg.qiniuDomain2 + this.lists[i].avata : this.lists[i].avata;
							this.lists[i].is_manager = this.lists[i].is_manager ? '管理' : ''

							switch (this.lists[i].title) {
								case '1':
									this.lists[i].title = "形象设计讲师";
									break;
								case '2':
									this.lists[i].title = "形象设计服务师";
									break;
								case '3':
									this.lists[i].title = "服饰搭配顾问";
									break;
								default:
									this.lists[i].title = "该顾问暂无等级";
							}
						}
						console.log('lists', this.lists)
					},
					fail: error => {
						console.log('error', error);
					}
				});
			},
			listGet() {
				request.req({
					url: cfg.qjUrl + 'm_admin/consultant.tio_x',
					methods: 'get',
					success: res => {
						console.log('返回待审核res', res.data.data);
						this.listReview = [];
						all.globalData.listReview = []
						this.listReview = res.data.data;
						all.globalData.listReview = res.data.data;
					}
				});
			}

		}

	};
</script>

<style>
	.swiper-tab {
		width: 100%;
		border-bottom: 2upx solid #777777;
		text-align: center;
		line-height: 100upx;
	}

	.swiper-tab-list {
		font-size: 30upx;
		display: inline-block;
		width: 33.33%;
		color: #777777;
	}

	.on {
		color: #31b5fe;
		border-bottom: 5upx solid #31b5fe;
	}

	.swiper-con swiper {
		height: 90vh;
	}

	.swiper-con scroll-view {
		height: 100%;
	}



	.myinfo {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		width: 90%;
		height: 100%;
		margin-top: 80upx;
		margin-left: 20upx;
	}

	.myicon {
		margin-top: 10upx;
		margin-left: 10upx;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		border-bottom: 2upx solid #E0E3DA;
		border-top: 2upx solid #E0E3DA;
		border-right: 2upx solid #E0E3DA;
	}

	.img {
		margin-top: 30upx;
		width: 30%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.img image {
		width: 128upx;
		height: 128upx;
		border-radius: 50%;
		box-shadow: 5upx 5upx 10upx #c4c4c4;
	}

	.myicon text {
		font-size: 30upx;
		color: #565656;
	}

	.mydata {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 50upx;
		width: 80%;
	}

	.mydata text {
		font-size: 36upx;

	}

	.head {
		width: 100%;
	}

	.head text {
		width: 100%;
		font-size: 36upx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}

	.btn {
		width: 80%;
		height: 60upx;
		margin-top: 20upx;
		margin-left: 0upx;
		margin-right: 30upx;
		border-radius: 30upx;
		background-color: #E1E1E1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
	}

	.btn text {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		margin-left: 15%;
		font-size: 26upx;
	}
</style>
