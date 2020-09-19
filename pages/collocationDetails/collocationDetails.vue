<template>
	<view>
		<view class="page">
			<view class="page__hd">
				<view class="page__title">咨询问题内容：</view>
				<view class="page__desc">提问时间：{{ question[index].updatedAt }}</view>
			</view>

			<view class="page__bd">
				<view class="article">
					<view class="article__section" style="background-color: #F5F4F9;">
						<view class="article__p" @tap="un_previewImage">
							<image v-if="question[index].image1" class="weui-article__img" :src="question[index].image1" :mode="aspectFit"
							 :data-i="0" />
							<image v-if="question[index].image2" class="weui-article__img" :src="question[index].image2" :mode="aspectFit"
							 :data-i="1" />
							<image v-if="question[index].image3" class="weui-article__img" :src="question[index].image3" :mode="aspectFit"
							 :data-i="2" />
						</view>
						<view class="body">
							<view class="line"></view>
							<view class="contents"><text>场&#12288;&#12288;合:</text>
								<view class="txt">
									{{ question[index].occasion }}
								</view>
							</view>
							<view class="line"></view>
							<view class="contents"><text>当地气温:</text>
								<view class="txt">
									{{ question[index].temperature }}
								</view>
							</view>
							<view class="line"></view>
							<view class="content">
								<text>问题描述:</text>
								<view class="txt" style="padding-bottom: 50upx;">{{ question[index].content }}</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view v-if="isAnswered == 'true'">
				<view class="page__hd">
					<view class="page__title">▷ 服饰搭配方案：</view>
					<view class="page__desc">解答时间：{{ question[index].designUpdated }}</view>
				</view>
				<view class="article">
					<view class="article__section">
						<view style="margin-left: 30upx;"><text>▷ 整体设计图片：</text></view>
						<view class="article__img" style="margin-left: 40upx;">
							<image :src="question[index].result" :mode="widthFix" @tap="previewImage" />
						</view>
						<view style="margin-left: 30upx;"><text>▷ 设计思路与注意事项：</text></view>
						<text style="margin-left: 30upx;">{{ question[index].designContent }}</text>
					</view>
				</view>
				<view class="btn">
					<button class="top" hover-class="none" @tap="answerGo"><text>修改方案</text></button>
				</view>
			</view>

			<view v-else>
				<view class="btn">
					<button class="top" hover-class="none" @tap="answerGo"><text>设计方案</text></button>
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
				index: 0
			};
		},
		onLoad: function(options) {
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#40C0FD',
				success: (res) => {
					console.log("nav", res)
				}
			})
			uni.setNavigationBarTitle({
				title: '咨询问题'
			});
			console.log('上一页传的参数', options); //获取上一页传递过来的参数
			this.index = options.index;
			this.isAnswered = options.isAnswered;
			if (options.isAnswered == 'true') {
				this.question = all.globalData.answered;

				for (let i = 0; i < this.question.length; i++) {
					let str = this.question[i].result.substring(0, 4)

					if (str != "http") {
						this.question[i].result = cfg.qiniuDomain + '/' + this.question[i].result
					}
				}
				console.log('已经回答', this.question);
			} else {
				this.question = all.globalData.unanswered;
				console.log('需回答', this.question);
			}
		},
		onUnload: function() {
			all.globalData.costumes = [];
		},
		methods: {
			answerGo() {
				console.log('问题状态', this.isAnswered);
				uni.navigateTo({
					url: '../answer/answer?index=' + this.index + '&isAnswered=' + this.isAnswered
				});
			},
			previewImage(e) {
				// 预览图片
				let a = [this.question[this.index].result];
				uni.previewImage({
					urls: a // 需要预览的图片http链接列表
				});
			},
			un_previewImage(e) {
				let a;
				let tem = e.target.dataset.i;
				if (tem == 0) {
					a = [this.question[this.index].image1];
				} else if (tem == 1) {
					a = [this.question[this.index].image2];
				} else {
					a = [this.question[this.index].image3];
				}
				uni.previewImage({
					urls: a // 需要预览的图片http链接列表
				});
			}
		}
	};
</script>

<style>
	.line {
		width: 94%;
		height: 1upx;
		background: #888;
		margin-top: 20upx;
		margin-bottom: 20upx;
	}

	.content {
		margin-top: 5upx;

	}

	.content text {
		color: #888888;
		margin-left: 20upx;
	}

	.contents {
		margin-top: 5upx;
		display: flex;
	}

	.contents text {
		color: #888888;
		margin-left: 20upx;
	}

	.body {
		margin-top: 110upx;
	}

	page {

		font-size: 38upx;
	}

	.txt {
		display: flex;
		margin-left: 60upx;
	}

	.page__hd {
		padding: 40upx;
	}

	.page__bd_spacing {
		padding-left: 30upx;
		padding-right: 30upx;
	}

	.page__title {
		text-align: left;
		font-size: 40upx;
		font-weight: 400;
	}

	.page__desc {
		margin-top: 10upx;
		color: #888;
		text-align: right;
		font-size: 24upx;
	}



	.article {
		padding-left: 15upx;
		padding-right: 15upx;
		background-color: white;
	}

	.article__section {
		margin-bottom: 20upx;
	}

	.article__section text {
		word-break: break-all;
	}

	.article__img {
		height: 580upx;
	}

	.article__p {
		display: flex;
		flex-direction: row;
		align-content: space-around;
		align-items: center;
	}

	.article__p image {
		height: 300upx;
		width: 30%;
		margin-left: 20upx;
		margin-top: 50upx;
	}

	.btn {
		order: 5;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 80upx;
		margin-bottom: 20upx;
		height: 80upx;
	}

	.top {
		background-color: #40C0FD;
		width: 80%;
		border-radius: 40upx;
		height: 100%;
		display: flex;
		text-align: center;
		justify-content: center;
		align-content: center;
	}

	.top text {
		display: flex;
		color: white;
		font-size: 36upx;
		text-align: center;
		justify-content: center;
		align-content: center;
		margin-top: -10upx;
	}
</style>
