<template>
	<view class="">
		<view class="con" v-if="unanswered">
			<scroll-view scroll-y>
				<view class="line"></view>
				<view class="con-data">
					<block v-for="(item, index2) in unanswered" :key="index2">
						<navigator :url="'../collocationDetails/collocationDetails?question_id=' + item.id + '&index=' + index2 + '&isAnswered=' + false"
						 class="con-list" hover-class="weui-cell_active">
							<view class="myinfo">
								<view class="myicon">
									<image :src="item.image1"></image>
									<view class="mydata">

										<view class="">
											订单时间:{{ item.createdAt }}
										</view>
										<view class="">
											订单号:{{ item.id }}
										</view>
										<view class="head">
											问题描述:{{ item.content }}
										</view>
									</view>
								</view>
							</view>
						</navigator>
						<view class="line"></view>
					</block>
				</view>
			</scroll-view>
		</view>
		<view class="" v-else>
			暂无用户提问
		</view>
	</view>
</template>

<script>
	import util from '../../utils/util.js';
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
				winWidth: 0,
				winHeight: 0,
				currentTab: 0, // tab切换，0已回答列表，1未回答列表
				unanswered: [], //未回答问题
				current: 1,
				tempCurrent: 1,
				num: 10,
				id: all.globalData.user_id
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
				title: '咨询列表'
			});

			var that = this;
			// 获取系统信息
			uni.getSystemInfo({
				success: function(res) {
					(that.winWidth = res.windowWidth), (that.winHeight = res.windowHeight);
				}
			});
			that.unansweredGet();
		},
		methods: {
			unansweredGet() {
				//获取未回答问题
				request.req({
					url: cfg.qjUrl + 'gl/controller/consultant/question/list.tio_x',
					method: 'get',
					data: {
						pageNumber: 1,
						pageSize: 30
					},
					success: res => {
						if (res.statusCode == 200) {
							console.log('返回待回答问题列表，req result：', res);
							let unanswered_list = res.data.data.list;
							this.unanswered = res.data.data.list;
							this.num = res.data.data.totalPage == 0 ? 1 : res.data.data.totalPage; //获得总页数
							all.globalData.unanswered = []; //清空未答问题列表

							for (var i in unanswered_list) {
								let ava = unanswered_list[i].image1.search('http');
								if (ava == -1) {
									//将图片、视频路径转换为全路径
									unanswered_list[i].image1 = unanswered_list[i].image1 ? cfg.qiniuDomain + '/' + unanswered_list[i].image1 :
										unanswered_list[i].image1;
									unanswered_list[i].image2 = unanswered_list[i].image2 ? cfg.qiniuDomain + '/' + unanswered_list[i].image2 :
										unanswered_list[i].image2;
									unanswered_list[i].image3 = unanswered_list[i].image3 ? cfg.qiniuDomain + '/' + unanswered_list[i].image3 :
										unanswered_list[i].image3;
									unanswered_list[i].video = unanswered_list[i].video ? cfg.qiniuDomain + '/' + unanswered_list[i].video :
										unanswered_list[i].video;
								}

								//格式化日期格式
								unanswered_list[i].updatedAt = util.formatTime(new Date(unanswered_list[i].updatedAt));

								all.globalData.unanswered.push(unanswered_list[i]); //放入未答问题列表
							}
							// all.globalData.answered.sort(util.compare('updatedAt')); //将未答问题列表按时间降序排序
							console.log('未答问题列表：', all.globalData.unanswered);

							this.unanswered = all.globalData.unanswered;
						} else {
							console.log('网络访问错误！检查服务器是否正常！');
						}
					},
					fail: function(res) {
						console.log('网络访问失败！');
					}
				});
			},
			pageGO(e) {
				console.log('获取到组件', e);
				let cur = e.current;

				this.current = cur;
				this.unansweredGet();
			}
		}
	};
</script>

<style>
	.con-list {
		margin-left: 7%;
	}

	.line {
		background: #787878;
		height: 2upx;
		width: 90%;
		margin-left: 5%;
		margin-top: 10upx;
	}

	.con {
		height: 100vh;
		margin-top: 50upx;
	}

	.con scroll-view {
		height: 100%;
	}

	.myinfo {
		width: 100%;
		height: 200upx;
	}

	.myicon {
		margin-top: 5%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.myicon image {
		width: 128upx;
		height: 128upx;
		margin: 10upx;
		box-shadow: 5upx 5upx 10upx #c4c4c4;
	}

	.myicon text {
		font-size: 30upx;
		color: #565656;
	}

	.mydata {
		width: 80%;
		font-size: 30upx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}



	.head {
		width: 100%;
	}

	.head text {
		width: 380upx;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		display: inline-block;
		cursor: pointer;
		font-size: 35upx;
	}
</style>
