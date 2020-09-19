<template>
	<view class="page">
		<view class="page__bd">
			<view class="swiper-tab">
				<!-- error -->
				<view v-bind:class="['swiper-tab-list', currentTab == 0 ? 'on' : '']" data-current="0" @tap="swichNav">已回答问题</view>
				<view v-bind:class="['swiper-tab-list', currentTab == 1 ? 'on' : '']" data-current="1" @tap="swichNav">待回答问题</view>
			</view>

			<swiper :current="currentTab" @change="bindChange"  style="height: 85vh;">
				<swiper-item :item-id="index">
					<scroll-view scroll-y style="height: 1200upx;">
						<view class="weui-panel weui-panel_access" v-if="answered">
							<view class="weui-panel__bd">
								<block v-for="(item, index) in answered" :key="index">
									<navigator
										:url="'../memberCollocationD/collocationDetails?index=' + index + '&isAnswered=true'"
										class="weui-media-box weui-media-box_appmsg"
										hover-class="weui-cell_active"
									>
										<view class="weui-media-box__hd weui-media-box__hd_in-appmsg"><image class="weui-media-box__thumb" :src="item.image1" /></view>
										<view class="weui-media-box__bd weui-media-box__bd_in-appmsg">
											<view class="weui-media-box__desc" style="color: black;">{{ item.content }}</view>
											<view class="weui-media-box__info">
												<view class="weui-media-box__info__meta">提问时间：{{ item.updatedAt }}</view>
											</view>
										</view>
									</navigator>
								</block>
							</view>
						</view>
						<view class="" v-else>
							暂无已回答问题
						</view>
					</scroll-view>
				</swiper-item>

				<swiper-item :item-id="index2">
					<scroll-view scroll-y style="height: 1200upx;">
						<view class="weui-panel weui-panel_access" v-if="unanswered">
							<view class="weui-panel__bd">
								<block v-for="(item, index2) in unanswered" :key="index2">
									<navigator
										:url="'../memberCollocationD/collocationDetails?index=' + index2 + '&isAnswered=false'"
										class="weui-media-box weui-media-box_appmsg"
										hover-class="weui-cell_active"
									>
										<view class="weui-media-box__hd weui-media-box__hd_in-appmsg"><image class="weui-media-box__thumb" :src="item.image1" /></view>
										<view class="weui-media-box__bd weui-media-box__bd_in-appmsg">
											<view class="weui-media-box__desc" style="color: black;">{{ item.content }}</view>
											<view class="weui-media-box__info">
												<view class="weui-media-box__info__meta">提问时间：{{ item.updatedAt }}</view>
											</view>
										</view>
									</navigator>
								</block>
							</view>
						</view>
						<view class="" v-else>
							暂无待回答问题
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>
<script>
import util from '../../utils/util.js';
import request from '../../utils/req.js';
import cfg from '../../cfg.js';
import all from '../../common/global.js';

export default {
	data() {
		return {
			winWidth: 0,
			winHeight: 0,
			currentTab: 0, // tab切换
			unanswered: [], //未回答问题
			answered: [], //已回答问题
			openid: ''
		};
	},
	onLoad: function(options) {
		console.log('opt', options);
		this.openid = options.id;

		this.memberGet();
		var that = this;
		// 获取系统信息
		uni.getSystemInfo({
			success: function(res) {
				(that.winWidth = res.windowWidth), (that.winHeight = res.windowHeight);
			}
		});
	},
	methods: {
		memberGet() {
			uni.request({
				url: 'https://mpv2.csqiji.com/mytio/question/list.tio_x',
				method: 'get',
				data: {
					openid: this.openid
				},
				success: res => {
					if (res.statusCode == 200) {
						console.log('返回member问题列表，req result：', res);
						let question = res.data;
						this.unanswered = []; //清空未答问题列表
						this.answered = []; //清空已答问题列表
						for (let i in question) {
							console.log('question[i].image1',question[i].image1)
							let ava = question[i].image1.search('http');
							if (ava == -1) {
								//将图片、视频路径转换为全路径
								question[i].image1 = question[i].image1 ? cfg.qiniuDomain + '/' + question[i].image1 : question[i].image1;
								question[i].image2 = question[i].image2 ? cfg.qiniuDomain + '/' + question[i].image2 : question[i].image2;
								question[i].image3 = question[i].image3 ? cfg.qiniuDomain + '/' + question[i].image3 : question[i].image3;
								question[i].video = question[i].video ? cfg.qiniuDomain + '/' + question[i].video : question[i].video;
							}
							//格式化日期格式
							question[i].updatedAt = util.formatTime(new Date(question[i].updatedAt));
							//问题的status值。1:新问题，未回答；2: 第一轮回答；3: 第一轮回答被否定；4:第二回答；5: 第二轮回答被否定；6:第三轮回答；7:否定后第一轮为最终方案，肯定即为最后方案；
							if (question[i].status == 1) {
								//如果问题为1,3,5状态，则为待解答问题。
								this.unanswered.push(question[i]); //放入未答问题列表
							} else {
								this.answered.push(question[i]); //放入已答问题列表
							}
						}
						all.globalData.member_an = this.answered;
						all.globalData.member_unan = this.unanswered;
						// 						all.globalData.unanswered.sort(util.compare('updatedAt')); //将未答问题列表按时间降序排序
						// 						all.globalData.answered.sort(util.compare('updatedAt')); //将已答问题列表按时间降序排序
						console.log('问题列表question：', question);
						console.log('已回答', this.answered);
						console.log('未回答', this.unanswered);
					} else {
						console.log('网络访问错误！检查服务器是否正常！');
					}
				},
				fail: function(res) {
					console.log('网络访问失败！');
				}
			});
		},
		// 滑动切换tab
		bindChange: function(e) {
			console.log('current', e.detail.current);
			this.currentTab = e.detail.current;
			this.memberGet()
		},
		swichNav: function(e) {
			if (this.currentTab == e.target.dataset.current) {
				return false;
			} else {
				this.currentTab = e.target.dataset.current;
			}
		}
	}
};
</script>

<style>
.history {
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 30upx;
}

.page__bd {
	padding-bottom: 0upx;
}

.weui-cell {
	padding: 12upx 15upx 12upx 35upx;
}

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
</style>
