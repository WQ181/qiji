<template>
	<view>
		<view class="">
			<scroll-view class="menu-view" scroll-x="true" :scroll-left="scrollLeft">
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
			</scroll-view>
		</view>
		<view class="">
			<swiper :current="currentTab" class="swiper" :interval="interval" @change="curr">
				<!-- 客服列表 -->
				<swiper-item class="swiper-con">
					<scroll-view scroll-y>
						<view class="con-data">
							<block v-for="(item, index) in kf_lists" :key="index">
								<view class="con-list" hover-class="weui-cell_active">
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
											<view class="btn" @tap="cancel(index)">
												<text>取消</text>
											</view>
										</view>
									</view>
								</view>
							</block>
						</view>
					</scroll-view>
				</swiper-item>

				<!-- 可设置为客服的列表 -->
				<swiper-item class="swiper-con">
					<scroll-view scroll-y>
						<view class="con-data">
							<block v-for="(item, index) in lists" :key="index">
								<view class="con-list" hover-class="weui-cell_active">
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
											<view class="btn" @tap="setting(index)">
												<text>设置</text>
											</view>
										</view>
									</view>
								</view>
							</block>
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
				kf_lists: [],
				lists: [],
				currentTab: 0, //存放当前选项卡的的页码
				menuTabs: [{
						name: '当前客服'
					},
					{
						name: '设置客服'
					}
				]
			};
		},
		onLoad() {
			this.consult();
			this.kf()
		},
		methods: {
			kf() {
				request.req({
					url: cfg.qjUrl + 'm_admin/get/kf.tio_x',
					method: 'get',
					data: {},
					success: res => {
						console.log('获取客服.....................', res.data);
						this.kf_lists = res.data.data == "暂无数据" ? [] : res.data.data;
						for (let i = 0; i < this.kf_lists.length; i++) {
							let ava = this.kf_lists[i].avata.search('http');
							this.kf_lists[i].avata = ava == -1 ? cfg.qiniuDomain2 + this.kf_lists[i].avata : this.kf_lists[i].avata;
						}
					},
					fail: error => {
						console.log('error', error);
					}
				});
			},
			curr(e) {
				console.log(e.detail.current);
				this.currentTab = e.detail.current;
			},
			//切换选项卡时出发的事件
			swichMenu: async function(current) {
				//点击其中一个 menu
				if (this.currentTab != current) {
					//切换成功
					this.currentTab = current; //改变currentTab导航的值
				}
			},
			setting(e) {
				let openid = this.lists[e].openid
				console.log('openid', openid)
				uni.request({
					url: cfg.qjUrl + 'm_admin/set/kf.tio_x',
					method: 'POST',
					data: {
						openid: openid
					},
					success: res => {
						console.log('设置客服.....................', res.data);
						this.kf()
						this.consult()
					},
					fail: error => {
						console.log('error', error);
					}
				});
			},
			cancel(e) {
				console.log('取消ing', e);
				let openid = this.kf_lists[e].openid
				uni.request({
					url: cfg.qjUrl + 'm_admin/cancel/kf.tio_x',
					method: 'POST',
					data: {
						openid: openid
					},
					success: res => {
						console.log('取消客服.....................', res.data);
						this.kf()
						this.consult()
					},
					fail: error => {
						console.log('error', error);
					}
				});
			},
			consult() {
				// 请求顾问列表数据
				request.req({
					url: cfg.qjUrl + 'm_admin/get/consultant.tio_x',
					method: 'get',
					data: {},
					success: res => {
						console.log('顾问列表.....................', res.data);
						this.lists = res.data.data;
						for (let i = 0; i < this.lists.length; i++) {
							let ava = this.lists[i].avata.search('http');
							this.lists[i].avata = ava == -1 ? cfg.qiniuDomain2 + this.lists[i].avata : this.lists[i].avata;
						}
					},
					fail: error => {
						console.log('error', error);
					}
				});
			}
		}
	};
</script>

<style>
	.menu-view {
		display: flex;
		white-space: nowrap;
		width: 100%;
		background-color: #ffffff;
		height: 112upx;
		/* 在这里设置导航条高度 */
	}

	.menu-one-view {
		justify-content: center;
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

	.swiper {
		height: 1300upx;
		width: 100%;
	}

	.swiper-con {
		height: 100%;
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
		margin-left: 0upx;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		border-bottom: 2upx solid #E0E3DA;
		border-top: 2upx solid #E0E3DA;
		border-right: 2upx solid #E0E3DA;
	}

	.img {
		margin-top: 0;
		width: 30%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.img image {
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
		box-shadow: 5upx 5upx 10upx #c4c4c4;
		margin-top: 10upx;
		margin-left: 20upx;
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
		width: 100%;
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
	}

	.btn {
		width: 50%;
		height: 60upx;
		margin-top: 50upx;
		border-radius: 30upx;
		background-color: #E1E1E1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		margin-right: 10upx;
	}

	.btn text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		text-align: center;
	}
</style>
