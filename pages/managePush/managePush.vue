<template>
	<view class="">
		<view class="menu-view">
			<block v-for="(menuTab, index) in menuTabs" :key="index">
				<view class="menu-one-view" :id="'tabNum' + index" @tap="swichMenu(index)">
					<view :class="[currentTab == index ? 'menu-one-act' : 'menu-one']">
						<view class="menu-one-txt">{{ menuTab.name }}</view>
						<view class="menu-one-bottom">
							<view class="menu-one-bottom-color"></view>
						</view>
					</view>
				</view>
			</block>
		</view>
		<swiper :current="currentTab" class="swiper" :interval="interval" @change="curr">
			<!-- 文章 -->
			<swiper-item>

				<view class="container">
					<scroll-view scroll-y>
						<view class="con-data">
							<block v-for="(item, index) in lists" :key="index">
								<view class="con-list" hover-class="weui-cell_active">
									<view class="myinfo">
										<view class="myicon">
											<view class="img">
												<image :src="item.image" mode=" scaleToFill"></image>
											</view>
											<view class="mydata">
												<view class="title">
													<text>
														{{ item.title }}
													</text>
												</view>
												<!-- <view class="brief">
													<text>{{ item.brief}}</text>
												</view> -->
												<view class="container-foot">
													<view class="row">
														<view class="button" :data-n="index" @tap="change">
															<text>推送</text>
														</view>
														<view class="button" :data-n="index" @tap="del">
															<text>删除</text>
														</view>
														<view class="updatedAt">
															<text>{{item.updatedAt}}</text>
														</view>
													</view>
												</view>
											</view>
										</view>
									</view>
								</view>
							</block>
						</view>
					</scroll-view>
				</view>
				<view class="footer">
					<list-pagination :num="num" :current="current" @get-current="conGet"></list-pagination>
				</view>
			</swiper-item>
			<!-- 广告 -->
			<swiper-item>

				<view class="container">
					<scroll-view scroll-y>
						<view class="con-data">
							<block v-for="(item, index) in adv_lists" :key="index">
								<view class="con-list" hover-class="weui-cell_active">
									<view class="myinfo">
										<view class="myicon">
											<view class="img">
												<image :src="item.image" mode=" scaleToFill"></image>
											</view>
											<view class="mydata">
												<view class="title">
													<text>{{ item.title }}</text>
												</view>
												<!-- <view class="brief">
													<text>{{ item.brief}}</text>
												</view> -->
												<view class="container-foot">
													<view class="row">
														<view class="button" :data-n="index" @tap="change">
															<text>推送</text>
														</view>
														<view class="button" :data-n="index" @tap="del">
															<text>删除</text>
														</view>
														<view class="updatedAt">
															<text>{{item.updatedAt}}</text>
														</view>
													</view>
												</view>
											</view>
										</view>
									</view>
								</view>
							</block>
						</view>
					</scroll-view>
				</view>
				<view class="footer">
					<list-pagination :num="adv_num" :current="adv_current" @get-current="conGet"></list-pagination>
				</view>
			</swiper-item>
			<!-- 公告 -->
			<swiper-item>

				<view class="container">
					<scroll-view scroll-y>
						<view class="con-data">
							<block v-for="(item, index) in announcement_list" :key="index">
								<view class="con-list" hover-class="weui-cell_active">
									<view class="myinfo">
										<view class="myicon">
											<view class="img">
												<image src="../../static/icon/horn.png" mode="aspectFill"></image>
											</view>
											<view class="mydata">
												<view class="title">
													<text>
														{{ item.title }}
													</text>
												</view>
												<!-- <view class="brief">
													<text>{{ item.brief}}</text>
												</view> -->
												<view class="container-foot">
													<view class="row">
														<view :class="[item.category!='text'?'btn_push1':'btn_push2']" :data-n="ano_current" @tap="modify(index)">
															<text style="font-size: 26upx;">推送</text>
														</view>
														<view class="btn_del" :data-n="index" @tap="del">
															<text>删除</text>
														</view>
														<view class="updatedAt">
															<text>{{item.updatedAt}}</text>
														</view>
													</view>
												</view>
											</view>
										</view>
									</view>
								</view>
							</block>
						</view>
						<view class="btn"><button @tap="anoSet">增加公告</button></view>
					</scroll-view>

				</view>
				<view class="footer">
					<list-pagination :num="ano_num" :current="ano_current" @get-current="conGet"></list-pagination>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import request from '../../utils/req.js';
	import cfg from '../../cfg.js';
	import all from '../../common/global.js';
	import listPagination from '@/components/list-pagination/pagination.vue';

	export default {
		components: {
			listPagination
		},
		data() {
			return {
				currentTab: 0, //存放当前选项卡的的页码,0文章，1广告，2公告
				menuTabs: [{
						name: '文章'
					},
					{
						name: '广告'
					},
					{
						name: '公告'
					}
				], //切换栏
				color: ['#F74C31', '#FFB6C1', '#00008B'],
				head: {
					title: '标题',
					introduction: '简介',
					link: '链接',
					operating: '操作',
					announcement: '公告'
				}, //导航栏
				lists: [], //所有文章
				list: {}, //当前展示文章
				num: 3, //文章总数、
				current: 1, //当前文章页码

				adv_lists: [], //所有广告
				adv: {}, //当前广告
				adv_num: '', //广告总数
				adv_current: 1, //当前广告页码

				ano_current: 1,
				ano_num: '', //公告总数
				announcement_list: [],
				announcement: {}, //当前公告
				isshow: false,

				content: [],
				pageSize: 1
			};
		},
		onLoad() {
			console.log(this.color[0])
			this.getArticle();
			this.getAds();
			this.getNotice();
			uni.showLoading({
				title: '努力加载数据中'
			});
		},
		methods: {
			curr(e) {
				console.log(e.detail.current);
				this.currentTab = e.detail.current;
			},
			//获取内容-------------------------------------------------------------------------
			getAds() {
				//获取广告
				uni.request({
					url: cfg.qjUrl + 'wx/getAds.tio_x',
					method: 'get',
					data: {},
					success: res => {
						if (res.statusCode == 200) {
							console.log('返回广告，req result：', res);
							this.adv_lists = res.data;

							this.adv_num = 1;
							for (let i = 0; i < res.data.length; i++) {
								this.adv_lists[i].updatedAt = this.adv_lists[i].updatedAt.slice(0, 10)
							}

						} else {
							console.log('网络访问错误！检查服务器是否正常！');
						}
					},
					fail: function(res) {
						console.log('网络访问失败！');
					}
				});
			},

			getArticle() {
				//获取文章请求
				uni.request({
					url: cfg.qjUrl + 'wx/getArticle.tio_x',
					method: 'get',
					data: {
						start: this.current, //页码从1开始
						paginate: 20 //请求条数
					},
					success: res => {
						if (res.statusCode == 200) {
							console.log('返回文章，req result：', res);

							this.lists = res.data.list;

							this.num = res.data.totalPage;
							for (let i = 0; i < res.data.list.length; i++) {
								this.lists[i].updatedAt = this.lists[i].updatedAt.slice(0, 10)
							}


						} else {
							console.log('网络访问错误！检查服务器是否正常！');
						}
						uni.hideLoading();
					},
					fail: function(res) {
						console.log('网络访问失败！');
					}
				});
			},
			getNotice() {
				//获取公告
				uni.request({
					url: cfg.qjUrl + 'wx/getNotice.tio_x',
					method: 'get',
					data: {
						start: this.ano_current,
						paginate: 20
					},
					success: res => {
						if (res.statusCode == 200) {
							console.log('返回公告，req result：', res);
							this.announcement_list = res.data.data.list;
							this.ano_num = res.data.data.totalPage;
							for (let i = 0; i < res.data.data.list.length; i++) {
								this.announcement_list[i].updatedAt = this.announcement_list[i].updatedAt.slice(0, 10)

							}

						} else {
							console.log('网络访问错误！检查服务器是否正常！');
						}
					},
					fail: function(res) {
						console.log('网络访问失败！');
					}
				});
			},
			conGet(e) {
				console.log('获取内容', e);
				if (this.currentTab == 0) {
					this.getarticle(e);
				} else if (this.currentTab == 1) {
					this.getadv(e);
				} else {
					this.anoGet(e);
				}
			},
			getarticle(e) {
				console.log('获取文章', e);
				this.current = e.current;
				this.getArticle();
			},
			getadv(e) {
				console.log('获取广告', e);
				console.log(this.adv.id);
				this.adv_current = e.current;
				if (this.adv.id != -1) {
					this.adv = this.adv_lists[e.current - 1];
				}
			},
			anoGet(e) {
				console.log('获取公告', e);
				this.ano_current = e.current;
				this.getNotice();
			},
			//推送----------------------------------------------------------------------------------------------

			modify(e) {
				//公告推送
				uni.showModal({
					title: '提示',
					content: '确认推送',
					success: (res) => {
						if (res.confirm) {
							uni.request({
								url: cfg.qjUrl + 'wx/modify.tio_x',
								method: 'post',
								data: {
									id: this.announcement_list[e].id
								},
								success: res => {
									if (res.statusCode == 200) {
										console.log('返回公告推送，req result：', res);
										this.announcement_list[e].category = res.data.data.category
									} else {
										console.log('网络访问错误！检查服务器是否正常！');
									}
								},
								fail: function(res) {
									console.log('网络访问失败！');
								}
							});
						}
					}
				});
			},

			change_req(opt) {
				console.log('opt', opt)
				//推送请求函数
				uni.showModal({
					title: '提示',
					content: '确认推送',
					success: (res) => {
						if (res.confirm) {
							uni.request({
								url: cfg.qjUrl + 'wx/change.tio_x',
								method: 'get',
								data: {
									id: opt
								},
								success: res => {
									if (res.statusCode == 200) {
										console.log('推送 req result：', res);
										if (this.currentTab == 0) {
											this.getArticle();
										} else {
											this.getAds();
										}

									} else {
										console.log('网络访问错误！检查服务器是否正常！');
									}
								},
								fail: function(res) {
									console.log('网络访问失败！');
								}
							});
						}
					}
				});


			},
			change(e) {
				console.log('开始推送', e.currentTarget.dataset.n);
				let n = e.currentTarget.dataset.n; //当前数组下标
				if (this.currentTab == 0) {
					//文章
					this.change_req(this.lists[n].id);
				} else if (this.currentTab == 1) {
					//广告
					this.change_req(this.adv_lists[n].id);
				}
			},
			//---------------删除---------------------------------------------------------------------
			del_req(opt) {
				console.log('opt', opt);
				uni.showModal({
					title: '提示',
					content: '确认删除',
					success: (res) => {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.request({
								url: cfg.qjUrl + 'wx/del.tio_x',
								method: 'get',
								data: {
									id: opt
								},
								success: res => {
									if (res.statusCode == 200) {
										console.log('删除 req result：', res);
										if (this.currentTab == 0) {
											//文章
											this.getArticle();
										} else if (this.currentTab == 1) {
											//广告
											this.getAds();
										} else {
											//公告
											this.getNotice();
										}
									} else {
										console.log('网络访问错误！检查服务器是否正常！');
									}
								},
								fail: function(res) {
									console.log('网络访问失败！');
								}
							});
						}
					}
				});
			},
			del(e) {
				console.log('删除操作', e.currentTarget.dataset.n);
				let m = e.currentTarget.dataset.n; //当前数组下标
				if (this.currentTab == 0) {
					//文章
					this.del_req(this.lists[m].id);
				} else if (this.currentTab == 1) {
					//广告
					this.del_req(this.adv_lists[m].id);
				} else {
					//公告
					console.log('this.announcement_list', this.announcement_list)
					this.del_req(this.announcement_list[m].id);
				}
			},
			//-----------------------------------------------------
			anoSet() {
				//增加公告
				uni.navigateTo({
					url: '../announcement/announcement'
				});
			},
			//切换选项卡时出发的事件
			swichMenu: async function(current) {
				//点击其中一个 menu
				if (this.currentTab == current) {
					return false;
				} else {
					//切换成功
					this.currentTab = current;
				}
				console.log('当前的页码', this.currentTab);
			}
		}
	};
</script>

<style>
	.head {
		width: 100upx;
		height: 100upx;
	}

	.swiper {
		height: 90vh;
		width: 100%;
	}

	.container {
		height: 85%;
		background-color: #F3F3F3;
	}

	.container scroll-view {
		height: 100%;
	}

	.myinfo {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		width: 90%;
		height: 100%;

	}

	.myicon {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-left: 10%;
		height: 300upx;

	}


	.mydata {
		width: 70%;
		margin-left: 18%;
		height: 300upx;
		margin-top: 10upx;
	}

	.img {
		width: 150upx;
		height: 100%;
	}

	.img image {
		width: 230upx;
		height: 230upx;
		margin-left: 0upx;
		margin-top: 10upx;
	}


	.title {
		display: flex;
		height: 150upx;
		width: 105%;
		background-color: #FFFFFF;
	}

	.title text {
		width: 100%;
		/* display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden; */
		font-size: 33upx;
		/* text-indent: 40upx; */
		color: #A1A1A1;
		padding-left: 20upx;
		margin-right: 20upx;
		display: flex;

	}

	.brief {
		height: 90upx;
		width: 100%;
		background-color: #FFFFFF;
	}

	.brief text {
		width: 100%;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		/* text-overflow: ellipsis;
		overflow: hidden;
		display: inline-block;
		cursor: pointer; */
		font-size: 26upx;
		color: #A1A1A1;
	}

	.container-foot {
		display: flex;
		flex-direction: row;
		background-color: #FFFFFF;
		width: 105%;
	}

	.row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 20upx;
	}

	.btn_push1 {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 170upx;
		height: 100%;
		margin-left: 10upx;
		border-radius: 30upx;
		background-color: #F6B4B5;

	}

	.btn_push2 {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 170upx;
		height: 100%;
		margin-left: 10upx;
		border-radius: 30upx;
		background-color: #DFE0E2;

	}

	.btn_del text {
		font-size: 26upx;
	}

	.btn_del {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 170upx;
		height: 100%;
		margin-left: 10upx;
		border-radius: 30upx;
		background-color: #DFE0E2;
	}

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 170upx;
		height: 90%;
		margin-left: 20upx;
		border-radius: 30upx;
		background-color: #40BEFF;
	}

	.button text {
		font-size: 26upx;
	}

	.updatedAt {
		display: flex;
		width: 60%;
		margin-left: 40upx;
		margin-top: 20upx;
	}

	.updatedAt text {
		font-size: 26upx;
		color: #A1A1A1;
	}

	.footer {
		bottom: 0;
	}

	.menu-view {
		display: flex;
		white-space: nowrap;
		width: 100%;
		background-color: #ffffff;
		height: 112upx;
		/* 在这里设置导航条高度 */
	}

	.menu-one-view {
		display: inline-block;
		white-space: nowrap;
		height: 100%;
	}

	.menu-one {
		/* 在这里写 单个按钮样式 */
		margin-left: 25upx;
		margin-right: 25upx;
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.menu-one-act {
		/* 在这里写 单个按钮样式 */
		margin-left: 25upx;
		margin-right: 25upx;
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.menu-one-txt {
		height: 40upx;
		font-size: 35upx;
		font-weight: 400;
		color: rgba(154, 154, 154, 1);
		line-height: 40upx;
		margin-left: 40upx;
	}

	.menu-one-bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	.menu-one-bottom-color {
		width: 60%;
		height: 4upx;
	}

	.menu-one-act .menu-one-bottom .menu-one-bottom-color {
		width: 60%;
		height: 4upx;
		margin-left: 50upx;
		background: rgba(0, 170, 255, 1);
	}

	.btn {
		display: flex;
		justify-content: center;
		align-content: center;
		flex-direction: column;
		width: 80%;
		margin-top: 50upx;
	}

	.btn button {
		display: flex;
		justify-content: center;
		align-content: center;
		width: 100%;
		height: 100%;
		margin-left: 10%;
	}
</style>
