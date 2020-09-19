<template>
	<view class="page__bd">
		<view class="" v-if="istestAnswer">
			<view>
				<view style="font-size: 55upx;margin-bottom: 20upx;">会员特征</view>
				<view class="">场合：{{ occasion }}</view>
				<view style="margin-bottom: 20upx;">会员特征:{{ hobbies }}</view>
			</view>
			<view class="weui-article" style="padding-left:15upx; padding-right:15upx;margin-top: 30upx;">
				<view style="font-size: 55upx;">问卷调查</view>

				<!-- 循环对question_data中的各种题型进行解析  -->
				<view class="weui-article__section" style="margin-bottom:20upx;" v-for="(item, index) in question_data" :key="index">
					<!-- 上传文件题处理  -->
					<view class="weui-panel" v-if="item.question_type == '选择文件'">
						<view class="weui-article__title">【第{{ item.question_number }}题】</view>
						<view class="weui-article__h3">{{ item.question_value }}</view>
						<view class="question">
							<image class="weui-article__img" :src="item.question_model" mode="aspectFit" @tap="previewImage(index)" style="height: 300upx;width: 300upx;" />
						</view>
					</view>

					<!-- 填空题处理  -->
					<view class="weui-panel" v-if="item.question_type == '填空'">
						<view class="weui-article__title">【第{{ item.question_number }}题】</view>
						<view class="weui-article__h3">{{ item.question_value }}</view>
						<view class="question">
							<view class="question_item">{{ item.question_model }}</view>
						</view>
					</view>

					<!-- 单选题处理  -->
					<view class="weui-panel" v-if="item.question_type == '单选'">
						<view class="weui-article__title">【第{{ item.question_number }}题】</view>
						<view class="weui-article__h3">{{ item.question_value }}</view>
						<view class="question">
							<view class="question_item">{{ item.question_model }}</view>
						</view>
					</view>

					<!-- 多选题处理  -->
					<view class="weui-panel" v-if="item.question_type == '复选'">
						<view class="weui-article__title">【第{{ item.question_number }}题】</view>
						<view class="weui-article__h3">{{ item.question_value }}</view>
						<view class="question">
							<view class="question_item">{{ item.question_model }}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="unAnswer" v-else><text>此会员没有参加过形象测试</text></view>
	</view>
</template>

<script>
	import cfg from '../../cfg.js';
	import all from '../../common/global.js';
	export default {
		data() {
			return {
				question_data: '',
				occasion: '',
				hobbies: '',
				index: '',
				isAnswered: false,
				memberId: '',
				istestAnswer: false
			};
		},
		onLoad(options) {
			console.log('进入record', options);
			if (options.index) {
				this.index = options.index;
				this.isAnswered = options.isAnswered;
				if (this.isAnswered == 'true') {
					this.memberId = all.globalData.answered[this.index].memberId;
					console.log('问题true,memberid', this.memberId);
				} else {
					this.memberId = all.globalData.unanswered[this.index].memberId;
					console.log('问题false,memberid', this.question_id);
				}
				this.recordGet();
			} else {
				this.memberId = options.id;
				this.recordGet();
			}
		},
		methods: {
			previewImage(e) {
				// 预览图片

				let a = [this.question_data[e].question_model];
				uni.previewImage({
					urls: a // 需要预览的图片http链接列表
				});
			},
			recordGet() {
				uni.request({
					url: cfg.qjUrl + 'users/user/test.tio_x',
					data: {
						id: this.memberId
					},
					method: 'GET',
					success: res => {
						if (res.data.data.testAnswer != null) {
							this.istestAnswer = true; {
								let ho = JSON.parse(res.data.data.testAnswer);
								ho = ho.slice(5);
								this.hobbies = ho;
							}

							res.data.data.testAnswer = JSON.parse(res.data.data.testAnswer);
							for (let i = 0; i < res.data.data.testAnswer.length - 1; i++) {
								all.globalData.test_data[i].question_model = res.data.data.testAnswer[i + 1];

								if (all.globalData.test_data[i].question_type == '选择文件') {
									let ava = all.globalData.test_data[i].question_model.search('http');
									all.globalData.test_data[i].question_model =
										ava == -1 ? cfg.qiniuDomain + all.globalData.test_data[i].question_model : all.globalData.test_data[i].question_model;
								}
							}

							this.question_data = all.globalData.test_data;
							console.log('调查结果', this.question_data);
							this.occasion = this.question_data[17].question_model;

							for (let i = 0; i < 4; i++)
								this.question_data[i].question_model = this.question_data[i].question_model.replace(
									'http://p70m18mpm.bkt.clouddn.com', cfg.qiniuDomain);
						} else {
							console.log('无');
							this.istestAnswer = false;
						}
					}
				});
			}
		}
	};
</script>

<style>
	page {
		background-color: #f8f8f8;
		font-size: 30upx;
		font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
	}

	.page__hd {
		padding: 20upx;
	}

	.page__bd {
		padding-bottom: 20upx;
	}

	.page__bd_spacing {
		padding-left: 15upx;
		padding-right: 15upx;
	}

	.page__ft {
		padding-bottom: 10upx;
		text-align: center;
	}

	.page__title {
		text-align: center;
		font-size: 40upx;
		font-weight: 600;
	}

	.page__desc {
		margin-top: 5upx;
		color: #888;
		text-align: left;
		font-size: 26upx;
	}

	.weui-article__title {
		font-weight: 600;
	}

	.question {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
		margin-top: 10upx;
	}

	.question_item {
		width: 45%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 10upx;
		margin-left: 15upx;
		margin-right: 15upx;
	}

	.buttons {
		width: 70%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		margin-top: 50upx;
		margin-left: 100upx;
	}

	.unAnswer {
		display: flex;
		align-content: center;
		justify-content: center;
	}

	.unAnswer text {
		font-size: 36upx;
	}
</style>
