<template>
	<view class="">
		<!-- 搜索 -->
		<view class="weui-search-bar" style="background-color:white ;">
			<view class="weui-search-bar__form" style="background-color:#F8F9F8;">
				<view class="weui-search-bar__box">
					<icon class="weui-icon-search_in-box" :type="search" :size="14"></icon>
					<input :type="text" class="weui-search-bar__input" placeholder="请输入用户名或者电话号码" :value="inputVal" :focus="inputShowed"
					 @input="inputTyping" />
					<view class="weui-icon-clear" v-if="inputVal.length > 0" @tap="clearInput">
						<icon type="clear" size="14"></icon>
					</view>
				</view>
				<label class="weui-search-bar__label" :hidden="inputShowed" @tap="showInput" style="border-radius: 40upx; ">
					<icon class="weui-icon-search" type="search" size="14"></icon>
					<view class="weui-search-bar__text">搜索</view>
				</label>
			</view>
			<view class="weui-search-bar__cancel-btn" v-if="inputVal.length == 0" :hidden="!inputShowed" @tap="hideInput" style="font-size: 14px;">取消</view>
			<view class="weui-search-bar__cancel-btn" v-else @tap="find()" style="font-size: 14px;">搜索</view>
		</view>
		<!-- menuTab -->
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
		<swiper :current="currentTab" class="swiper" :interval="interval" @change="curr">
			<!-- 形象测试，评估完成 -->
			<swiper-item class="swiper-con">
				<scroll-view scroll-y>
					<view class="con-data" v-if="member_lists">
						<block v-for="(item, index) in member_lists" :key="index">
							<view @tap="member_detail(index)" class="con-list" hover-class="weui-cell_active">
								<view class="myinfo">
									<view class="img">
										<image :src="item.avatar"></image>
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
						暂无用户完成评价
					</view>
				</scroll-view>
			</swiper-item>

			<!-- 会员形象测试完成（待评估） -->
			<swiper-item class="swiper-con">
				<scroll-view scroll-y>
					<view class="con-data" v-if="member_lists">
						<block v-for="(item, index) in member_lists" :key="index">
							<view @tap="member_detail(index)" class="con-list" hover-class="weui-cell_active">
								<view class="myinfo">
									<view class="img">
										<image :src="item.avatar"></image>
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
						暂无用户等待评估
					</view>
				</scroll-view>
			</swiper-item>
			<!-- 私人衣橱有新的上传 -->
			<swiper-item class="swiper-con">
				<scroll-view scroll-y>
					<view class="con-data" v-if="wardrobe_list.length!==0">
						<block v-for="(item, index) in wardrobe_list" :key="index">
							<view @tap="wardrobe_detail(index)" class="con-list" hover-class="weui-cell_active">
								<view class="myinfo">
									<view class="img">
										<image :src="item.avatar"></image>
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
						暂无用户上传新衣橱
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<view class="footer">
			<listpagination :num="member_num" :current="member_current" @get-current="getmember_list"></listpagination>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/req.js';
	import cfg from '../../cfg.js';
	import listpagination from '../../components/list-pagination/pagination.vue';
	import all from '../../common/global.js';
	import uniIcon from '../../components/uni-icon/uni-icon.vue';
	export default {
		components: {
			listpagination,
			uniIcon
		},
		data() {
			return {
				wardrobe_list: [],
				inputShowed: false,
				inputVal: '',
				member_lists: [], //用户
				member: {}, //用户
				member_num: 1, //用户总数
				member_current: 1, //用户当前页码
				currentTab: 0, //存放当前选项卡的的页码
				menuTabs: [{
						name: '完成评估'
					},
					{
						name: '等待评估'
					},
					{
						name: '评价衣橱'
					}
				],
				type: 3,
				cur1: 1, //切换1
				cur2: 1, //切换2
				cur0: 1 //切换0
			};
		},
		onLoad() {
			this.memberlist(1);
		},

		methods: {
			showInput: function() {
				this.inputShowed = true;
			},
			hideInput: function() {
				(this.inputVal = ''), (this.inputShowed = false);
			},
			clearInput: function() {
				this.inputVal = '';
			},
			inputTyping: function(e) {
				this.inputVal = e.detail.value;
			},
			curr(e) {
				console.log(e.detail.current);
				this.currentTab = e.detail.current;
				if (this.currentTab == 0) {
					this.type = 3;
					this.memberlist(this.cur0);
				} else if (this.currentTab == 1) {
					this.type = 2;
					this.memberlist(this.cur1);
				} else {
					this.type = 1;
					this.getwardrobe(this.cur2);
				}
			},
			find() {
				let temp = /^[0-9]*[1-9][0-9]*$/.test(this.inputVal);
				//判断是不是电话号码
				if (temp) {
					console.log(temp);
					this.findphone();
				} else {
					this.findname();
				}
			},
			//根据用户名来查找
			findname() {
				if (this.type == 1) {
					uni.showToast({
						title: '搜索失败',
						icon: 'none'
					});
				} else {
					request.req({
						url: cfg.qjUrl + 'gl/manage/member/find-member/username.tio_x',
						method: 'get',
						data: {
							username: this.inputVal,
							type: this.type
						},
						success: res => {
							console.log('用户信息', res);
							if (res.data.ok) {
								this.member_lists = res.data.data;

								all.globalData.member_list = [];
								all.globalData.member_list.push(res.data.data);
								this.member_num = 1; //页面总数
								this.member_current = 1;
							} else {
								uni.showToast({
									title: '该用户不存在',
									icon: 'none'
								});
							}
						},
						fail: error => {
							console.log('error', error);
						}
					});
				}
			},
			//根据电话来查找
			findphone() {
				if (this.type == 1) {
					uni.showToast({
						title: '查找失败',
						icon: 'none'
					});
				} else {
					request.req({
						url: cfg.qjUrl + 'gl/manage/member/find-member/mobile.tio_x',
						method: 'get',
						data: {
							mobile: this.inputVal,
							type: this.type
						},
						success: res => {
							console.log('用户信息', res);
							if (res.data.ok) {
								this.member_lists = res.data.data;
								all.globalData.member_list = [];
								all.globalData.member_list.push(res.data.data);
								console.log('all.globalData.member_list', all.globalData.member_list);
								this.member_num = 1; //页面总数
								this.member_current = 1;
							} else {
								uni.showToast({
									title: '该用户不存在',
									icon: 'none'
								});
							}
						},
						fail: error => {
							console.log('error', error);
						}
					});
				}
			},
			getwardrobe(e) {
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: cfg.qjUrl + 'm_admin/wardrobe/list.tio_x',
					method: 'get',
					data: {
						pageSize: 10, //请求条数
						pageNum: e - 1, //请求的页面号,从0页开始
					},
					success: res => {
						console.log('返回未评价衣橱列表', res);
						all.globalData.wardrobe_list = res.data.data
						this.wardrobe_list = res.data.data
						this.member_current = this.cur2;
						this.member_num = res.data.data ? Math.ceil(res.data.data[0].count / 10) : 1; //总页数
						uni.hideLoading();
					},
					fail: error => {
						console.log('error', error);
					}
				});
			},
			//点击评价列表显示用户具体信息
			wardrobe_detail(e) {
				console.log('id', this.wardrobe_list[e].id);
				uni.navigateTo({
					url: '../memberDetail/memberDetail?id=' + this.wardrobe_list[e].id + '&type=' + this.type
				});
			},

			//点击用户列表显示用户具体信息
			member_detail(e) {
				console.log('id', this.member_lists[e].id);
				uni.navigateTo({
					url: '../memberDetail/memberDetail?id=' + this.member_lists[e].id + '&type=' + this.type
				});
			},

			getmember_list(e) {
				this.member_current = e.current;
				if (this.currentTab == 0) {
					this.cur0 = this.member_current;
					this.memberlist(this.cur0);
				} else if (this.currentTab == 1) {
					this.cur1 = this.member_current;
					this.memberlist(this.cur1);
				} else {
					this.cur2 = this.member_current;
					this.getwardrobe(this.cur2);
				}
			},
			memberlist(e) {
				uni.showLoading({
					title: '加载中'
				});
				request.req({
					url: cfg.qjUrl + 'gl/manage/member/member-list.tio_x',
					method: 'get',
					data: {
						pageSize: 10, //请求条数
						pageNumber: e, //请求的页面号,从0页开始
						type: this.type
					},
					success: res => {
						console.log('返回用户列表', res);
						this.member_lists = res.data.data.list; //用户列表
						this.member_num = res.data.data.totalPage ? res.data.data.totalPage : 1; //总页数
						all.globalData.member_list = [];
						all.globalData.member_list.push(res.data.data.list);
						if (this.currentTab == 0) {
							this.member_current = this.cur0;
						} else if (this.currentTab == 1) {
							this.member_current = this.cur1;
						}
						uni.hideLoading();
					},
					fail: error => {
						console.log('error', error);
					}
				});
			},
			//切换选项卡时出发的事件
			swichMenu: async function(current) {
				//点击其中一个 menu
				if (this.currentTab != current) {
					//切换成功

					this.currentTab = current; //改变currentTab导航的值
					if (this.currentTab == 0) {
						this.type = 3;
						this.memberlist(this.cur0);
					} else if (this.currentTab == 1) {
						this.type = 2;
						this.memberlist(this.cur1);
					} else {
						this.type = 1;
						this.getwardrobe(this.cur2);
					}
				}
			}
		}
	};
</script>

<style>
	.swiper-con {
		height: 100%;
	}

	.swiper-con scroll-view {
		height: 80%;
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
		margin-top: 10upx;
		margin-left: 20upx;
		width: 120upx;
		height: 120upx;
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


	.swiper {
		height: 80vh;
		width: 100%;
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

	.found {
		display: flex;
		margin-top: 50upx;
		margin-bottom: 50upx;
	}

	.change_input {
		border: 1px solid #ccc;
		margin-top: 10upx;
		width: 340upx;
		height: 80upx;
		margin-left: 50upx;
	}

	.footer {
		bottom: 0;
	}
</style>
