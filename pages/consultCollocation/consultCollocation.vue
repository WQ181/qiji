<template>
	<view class="page">
		<view class="swiper-tab">
			<view v-bind:class="['swiper-tab-list', currentTab == 0 ? 'on' : '']" data-current="0" @tap="swichNav">已回答问题</view>
			
		</view>
		<view class="swiper-con">
			<swiper :current="currentTab" @change="bindChange" vertical="false">
				<swiper-item>
					<scroll-view>
						<view class="con-data">
							<block v-for="(item, index) in answered" :key="index">
								<navigator
									:url="'../collocationDetails/collocationDetails?question_id=' + item.id + '&index=' + index + '&isAnswered=' + true"
									class="con-list"
									hover-class="weui-cell_active"
								>
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
				</swiper-item>
				<swiper-item>
					<scroll-view>
						<view class="con-data">
							<block v-for="(item, index2) in unanswered" :key="index2">
								<navigator
									:url="'../consultCollocationD/consultCollocationD?question_id=' + item.id + '&index=' + index2 + '&isAnswered=' + false"
									class="con-list"
									hover-class="weui-cell_active"
								>
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
				</swiper-item>
			</swiper>
		</view>
		<view class=""><list-pagination :num="num" :current="current" @get-current="pageGO"></list-pagination></view>
	</view>
</template>
<script>
import util from '../../utils/util.js';
import request from '../../utils/req.js';
import cfg from '../../cfg.js';
import all from '../../common/global.js';
import listPagination from '@/components/list-pagination/pagination.vue';

export default {
	components: { listPagination },
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
			id: ''
		};
	},
	onLoad: function(options) {
		console.log('ididid', options);
		this.id = options.id;
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
					pageSize: 4
				},
				success: res => {
					if (res.statusCode == 200) {
						console.log('返回已问题列表，req result：', res);
						let answered_list = res.data.data.list;
						console.log('总条数', res.data.data.totalPage);
						this.num = res.data.data.totalPage;
						all.globalData.answered = []; //清空已答问题列表

						for (var i in answered_list) {
							let ava = answered_list[i].image1.search('http');
							if (ava == -1) {
								//将图片、视频路径转换为全路径
								answered_list[i].image1 = answered_list[i].image1 ? cfg.qiniuDomain + '/' + answered_list[i].image1 : answered_list[i].image1;
								answered_list[i].image2 = answered_list[i].image2 ? cfg.qiniuDomain + '/' + answered_list[i].image2 : answered_list[i].image2;
								answered_list[i].image3 = answered_list[i].image3 ? cfg.qiniuDomain + '/' + answered_list[i].image3 : answered_list[i].image3;
								answered_list[i].video = answered_list[i].video ? cfg.qiniuDomain + '/' + answered_list[i].video : answered_list[i].video;
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
			console.log('切换', this.currentTab);
			if (this.currentTab == 0) {
				this.current = cur;
				this.answeredGet();
			} else {
				this.current = cur;
				this.unansweredGet();
			}
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
	height: 82vh;
}
.swiper-con scroll-view {
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
	margin-left: 10%;
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
