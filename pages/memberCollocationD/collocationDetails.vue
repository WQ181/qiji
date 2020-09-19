<template>
	<view>
		<view class="page">
			<view class="page__hd">
				<view class="page__title">咨询问题内容：</view>
				<view class="page__desc">提问时间：{{ question.updatedAt }}</view>
			</view>
			<view class="page__bd">
				<view class="weui-article" style="padding-left:15upx; padding-right:15upx;background-color:white;">
					<view class="weui-article__section" style="margin-bottom:20upx;">
						<view class="weui-article__p" style="display: flex;flex-direction: row;align-content: space-around; align-items: center;">
							<image v-if="question.image1" class="weui-article__img" :src="question.image1" :mode="aspectFit" style="height: 300upx; width: 46%;" />
							<image v-if="question.image2" class="weui-article__img" :src="question.image2" :mode="aspectFit" style="height: 300upx; width: 46%;" />
							<image v-if="question.image3" class="weui-article__img" :src="question.image3" :mode="aspectFit" style="height: 300upx; width: 46%;" />
							<video v-if="question.video" :src="question.video" @error="videoErrorCallback" danmu-list="" style="height: 300upx; width: 46%;" />
						</view>
						{{ question.content }}
					</view>
				</view>
			</view>

			<view v-if="isAnswered" class="page__hd">
				<view class="page__title">服饰搭配方案：</view>
				<view class="page__desc">顾问：{{ consultant_name }}</view>
				<view class="page__desc">解答时间：{{ design.designUpdated }}</view>
			</view>
			<view v-if="isAnswered" class="page__bd" @longpress="setClipboard" :data-content="design.designContent">
				<view class="weui-article" style="padding-left:15upx; padding-right:15upx;background-color:white;">
					<view v-if="design.result" class="weui-article__section" style="margin-bottom:20upx;">
						<view class="weui-article__h3">▷ 整体设计图片：</view>
						<view class="weui-article__p" style="display: flex;flex-direction: row;align-content: center; align-items: center;">
							<image class="weui-article__img" :src="design.result" :mode="aspectFit" @tap="previewImage" style="height: 420upx" />
						</view>
						<view class="weui-article__h3">▷ 设计思路与注意事项：</view>
						<view class="weui-article__p" style="word-break: break-all;text-indent:2em">
							<text selectable="true">{{ design.designContent }}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import request from '../../utils/req.js';
import cfg from '../../cfg.js';
import util from '../../utils/util.js';
import all from '../../common/global.js';

export default {
	data() {
		return {
			isAnswered: null,
			question: null,
			map: {
				dresses: {
					name: '连衣裙',
					image: 'https://qjqn.foxcodes.cn/dress2.png'
				},
				coats: {
					name: '外套',
					image: 'https://qjqn.foxcodes.cn/dress2.png'
				},
				jackets: {
					name: '上装',
					image: 'https://qjqn.foxcodes.cn/dress2.png'
				},
				handbags: {
					name: '包',
					image: 'https://qjqn.foxcodes.cn/dress2.png'
				},
				shoe: {
					name: '鞋',
					image: 'https://qjqn.foxcodes.cn/dress2.png'
				},
				decorations: {
					name: '饰品',
					image: 'https://qjqn.foxcodes.cn/dress2.png'
				},
				pants: {
					name: '下装',
					image: 'https://qjqn.foxcodes.cn/dress2.png'
				}
			},
			design: {},
			consultant_name: '',
			costumes: [], //所有服饰
			a: [],
			b: {
				shops: [],
				type: ''
			}
		};
	},
	onLoad: function(options) {
		console.log(options); //获取上一页传递过来的参数
		// 根据参数判断当前问题是否已回答
		console.log('参数opt', options);
		this.isAnswered = options.isAnswered == 'true' ? true : false;
		console.log(options.isAnswered, this.isAnswered);
		// 根据参数index在全局数据中取得当前问题
		if (this.isAnswered) {
			this.question = all.globalData.member_an[options.index];
		} else {
			this.question = all.globalData.member_unan[options.index];
		}
		console.log('question：', this.question);

		// 根据question_id取得已答问题的active搭配方案
		// 问题的status值。1:新问题，未回答；2: 第一轮回答；3: 第一轮回答被否定；4:第二回答；5: 第二轮回答被否定；6:第三轮回答；7:否定后第一轮为最终方案，肯定即为最后方案；
		if (this.question.status != 1) {
			request.req({
				url: cfg.qjUrl + 'gl/manage/member/query/question.tio_x',
				method: 'get',
				data: {
					id: this.question.id
				},
				success: res => {
					console.log('返回res', res);
					if (res.data.ok == true) {
						if (res.statusCode == 200) {
							console.log('返回搭配方案，req result：', res);
							res.data.data.desgin.updatedAt = util.formatTime(new Date(res.data.data.desgin.updatedAt));
							(this.design = res.data.data.desgin), (this.consultant_name = res.data.data.name ? res.data.data.name : '奇纪时尚顾问');
							let ava = this.design.result.search('http');
							console.log(ava);
							this.design.result = ava == -1 ? cfg.qiniuDomain2 + this.design.result : this.design.result;
							console.log('顾问id', this.consultant_name);
						} else {
							console.log('网络访问错误！检查服务器是否正常！');
						}
					} else {
						uni.showToast({
							title: '服务器去寻找诗和远方了',
							icon: 'none',
							duration: 3000
						});
						console.log('网络访问错误！检查服务器是否正常！');
					}
				},
				fail: function(res) {
					console.log('网络访问失败！');
				}
			});
		}
	},
	onUnload: function() {
		all.globalData.costumes = [];
	},
	methods: {
		setClipboard(e) {
			let content = e.mp.currentTarget.dataset.content;
			uni.setClipboardData({
				data: content,
				success: () => {
					console.log('success', content);
				}
			});
		},
		tz(e) {
			console.log(e);
			this.b.type = e.currentTarget.dataset.type;
			uni.navigateTo({
				url: '../showCostume/showCostume?commodity=' + JSON.stringify(this.b)
			});
		},
		videoErrorCallback: function(e) {
			console.log('视频错误信息:');
			console.log(e.detail.errMsg);
		},
		previewImage: function(e) {
			let url = this.design.result;
			uni.previewImage({
				urls: [url] // 需要预览的图片http链接列表
			});
		},

		satisfied: function(e) {
			console.log(e);

			// 			uni.request({
			// 				url: cfg.qjUrl + 'design/satisfied.tio_x',
			// 				method: 'post',
			// 				data: {
			// 					id: this.design.id
			// 				},
			// 				success: res => {
			// 					if (res.statusCode == 200) {
			// 						uni.navigateBack({
			// 							delta: 1
			// 						});
			// 					} else {
			// 						console.log('网络访问错误！检查服务器是否正常！');
			// 					}
			// 				}
			// 			});
		},
		unsatisfied: function(e) {
			console.log(e);
			// let unsatisfied = e.currentTarget.dataset.unsatisfied;
			// 			uni.request({
			// 				url: cfg.qjUrl + 'design/unsatisfied.tio_x',
			// 				method: 'post',
			// 				data: {
			// 					id: this.question.id
			// 				},
			// 				success: res => {
			// 					if (res.statusCode == 200) {
			// 						uni.navigateBack({
			// 							delta: 1
			// 						});
			// 					} else {
			// 						console.log('网络访问错误！检查服务器是否正常！');
			// 					}
			// 				}
			// 			});
		}
	}
};
</script>

<style>
page {
	background-color: #f8f8f8;
	font-size: 32upx;
	font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
}

.page__hd {
	padding: 40upx;
}

.page__bd {
	padding-bottom: 40upx;
}

.page__bd_spacing {
	padding-left: 30upx;
	padding-right: 30upx;
}

.page__ft {
	padding-bottom: 10px;
	text-align: center;
}

.page__title {
	text-align: left;
	font-size: 20px;
	font-weight: 400;
}

.page__desc {
	margin-top: 5px;
	color: #888;
	text-align: left;
	font-size: 14px;
}

image {
	margin: 4px 0;
}

.map_text {
	text-align: left;
}

.mybtn {
	background: white;
	margin-left: -15upx;
}
</style>
