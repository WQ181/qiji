<template>
	<view v-if="answered">
		<view class="con">
			<scroll-view scroll-y>
				<view class="con-data">
					<block v-for="(item, index) in answered" :key="index">
						<navigator :url="'../collocationDetails/collocationDetails?question_id=' + item.id + '&index=' + index + '&isAnswered=' + true"
						 class="con-list" hover-class="weui-cell_active">
							<view class="myinfo">
								<view class="myicon">
									<image :src="item.image1"></image>
									<view class="mydata">
										<view class="head">
											<text>{{ item.content }}</text>
										</view>
										<text>{{ item.createdAt }}</text>
									</view>
								</view>
							</view>
						</navigator>
					</block>
				</view>
			</scroll-view>
		</view>
		<view class="">
			<list-pagination :num="num" :current="current" @get-current="pageGO"></list-pagination>
		</view>
	</view>
	<view class="" v-else>
		暂无订单
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
				answered: [], //已回答问题
				current: 1,
				tempCurrent: 1,
				num: 10,
				id: all.globalData.user_id
			};
		},
		onLoad: function(options) {
			var that = this;
			// 获取系统信息
			uni.getSystemInfo({
				success: function(res) {
					(that.winWidth = res.windowWidth), (that.winHeight = res.windowHeight);
				}
			});
			that.answeredGet();
		},
		methods: {
			answeredGet() {
				// 获取已回答问题列表
				request.req({
					url: cfg.qjUrl + 'gl/controller/consultant/answered/question.tio_x',
					method: 'get',
					data: {
						consultantId: this.id,
						pageNumber: this.current,
						pageSize: 5
					},
					success: res => {
						if (res.statusCode == 200) {
							console.log('返回已问题列表，req result：', res);
							let answered_list = res.data.data.list;

							this.num = res.data.data.totalPage == 0 ? 1 : res.data.data.totalPage;
							all.globalData.answered = []; //清空已答问题列表

							for (var i in answered_list) {
								let ava = answered_list[i].image1.search('http');
								if (ava == -1) {
									//将图片、视频路径转换为全路径
									answered_list[i].image1 = answered_list[i].image1 ? cfg.qiniuDomain + '/' + answered_list[i].image1 :
										answered_list[i].image1;
									answered_list[i].image2 = answered_list[i].image2 ? cfg.qiniuDomain + '/' + answered_list[i].image2 :
										answered_list[i].image2;
									answered_list[i].image3 = answered_list[i].image3 ? cfg.qiniuDomain + '/' + answered_list[i].image3 :
										answered_list[i].image3;
									answered_list[i].video = answered_list[i].video ? cfg.qiniuDomain + '/' + answered_list[i].video :
										answered_list[i].video;
								}

								//格式化日期格式
								answered_list[i].updatedAt = util.formatTime(new Date(answered_list[i].updatedAt));
								//问题的status值。1:新问题，未回答；2: 第一轮回答；3: 第一轮回答被否定；4:第二回答；5: 第二轮回答被否定；6:第三轮回答；7:否定后第一轮为最终方案，肯定即为最后方案；

								all.globalData.answered.push(answered_list[i]); //放入已答问题列表
							}
							// all.globalData.answered.sort(util.compare('updatedAt')); //将已答问题列表按时间降序排序
							this.answered = all.globalData.answered; //全局已回答问题列表给当前已回答问题列表
							console.log('已答问题列表：', all.globalData.answered);
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
				this.answeredGet();

			}
		}
	}
</script>

<style>
	.con {
		height: 82vh;
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
		margin-left: 10%;
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
	}

	.mydata text {
		font-size: 35upx;
		margin-top: 20upx;
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
