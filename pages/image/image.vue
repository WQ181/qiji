<template>
	<view>
		<view class="page">
			<view class="page__hd">
				<view class="page__title">个人风格和体型定位测试</view>
				<view class="page__desc">欢迎参加本次测试，您的个人信息将会严格保密！</view>
			</view>
			<view class="page__bd">
				<view class="weui-article">
					<!-- 循环对question_data中的各种题型进行解析  -->
					<view class="weui-article__section" v-for="(item, index) in question_data" :key="index">
						<!-- 上传文件题处理  -->
						<view class="weui-panel" v-if="item.type == 4">
							<!-- 上传图片type=4 -->
							<view class="weui-article__title">【第{{ index + 1 }}题】</view>
							<view class="weui-article__h3">{{ item.content }}</view>
							<view class="question">
								<view class="question_item">
									<button class="mini-btn" type="default" size="mini" @tap="didPressChooesImage" :data-i="index">上传图片</button>
									<image class="image" :src="item.question_model" mode="aspectFit" />
								</view>
							</view>
						</view>

						<!-- 填空题处理  -->
						<view class="weui-panel" v-if="item.type == 1">
							<!-- 填空type=1 -->
							<view class="weui-article__title">【第{{ index + 1 }}题】</view>
							<view class="weui-article__h3">{{ item.content }}</view>
							<view class="question">
								<input class="weui-input" maxlength="20" placeholder="在此处填写答案" :value="item.question_model" @input="bindKeyInput" :data-i="index" />
							</view>
						</view>

						<!-- 单选题处理  -->
						<view class="weui-panel" v-if="item.type == 2">
							<!-- 单选type=2 -->
							<view class="weui-article__title">【第{{ index + 1 }}题】</view>
							<view class="weui-article__h3">{{ item.content }}</view>
							<radio-group @change="radioChange" :data-i="index">
								<label class="weui-cell weui-check__label" v-for="(item, index3) in item.question_options" :key="index3" :value="item.content">
									<view class="weui-cell__hd"><radio :value="item.content" :checked="item.checked" /></view>
									<view class="question">
										<image class="image" :src="item.img_content" v-if="item.img_content" mode="aspectFit"></image>
										<view class="weui-cell__bd">{{ item.content }}</view>
									</view>
								</label>
							</radio-group>
						</view>

						<!-- 多选题处理  -->
						<view class="weui-panel" v-if="item.type == 3">
							<!-- 多选type=3 -->
							<view class="weui-article__title">【第{{ index + 1 }}题】</view>
							<view class="weui-article__h3">{{ item.content }}</view>
							<checkbox-group @change="checkboxChange" :data-i="index">
								<label class="weui-cell weui-check__label" v-for="(item, index4) in item.question_options" :key="index4" :value="item.content">
									<view class="weui-cell__hd"><checkbox :value="item.content" :checked="item.checked" /></view>
									<view class="question">
										<image class="image" :src="item.img_content" v-if="item.img_content" mode="aspectFit"></image>
										<view class="weui-cell__bd">{{ item.content }}</view>
									</view>
								</label>
							</checkbox-group>
						</view>
					</view>
				</view>
			</view>
			<view class="buttons">
				<button type="primary" size="mini" plain="true" @tap="testSubmit">提交</button>
				<button type="warn" size="mini" plain="true" @tap="testReset">重置</button>
			</view>
		</view>
	</view>
</template>

<script>
// pages/imageTest/imageTest.js
//获取cfg.js中的url配置信息
import kf from '../../common/kf.js';

export default {
	data() {
		return {
			question_data: [],
			id: 0,
			question: []
		};
	},
	onLoad: function() {
		console.log('进入imageTest页面');
		this.getlists();
	},
	onUnload: function() {
		// all.globalData.test_data = this.question_data;
	},

	methods: {
		//上传图片
		async didPressChooesImage(e) {
			console.log('进入addimg事件', e); //选择图片
			let index = e.currentTarget.dataset.i;
			let res = await kf.qi_niu_image();
			console.log('qiniu', res);
			let img = res[0].imageURL;
			// img = img[index].replace('http://', '');
			this.question_data[index].question_model = img;
			console.log('选择图片success', img);
		},
		//获取测试题目列表
		getlists() {
			uni.request({
				url: 'https://xxx.ngrok.xiaomiqiu.cn/mytio/answers/questions.tio_x',
				method: 'get',
				data: {},
				success: res => {
					console.log('返回测试题目列表 res...', res);
					this.question_data = [];
					for (let i = 0; i < res.data.data.length; i++) {
						let question = {
							type: res.data.data[i].type, //问题类型
							content: res.data.data[i].content, //问题的题目
							id: res.data.data[i].id, //问题id
							delid: res.data.data[i].delid, //删除问题id
							question_options: [],
							question_model: ''
						};
						this.question_data.push(question);
						if (question.type == 2 || question.type == 3) {
							this.getOption(question.id, i);
						}
					}

					console.log('问题选项', this.question_data);
				}
			});
		},
		getOption(id, i) {
			uni.request({
				url: 'https://xxx.ngrok.xiaomiqiu.cn/mytio/answers/options.tio_x',
				method: 'get',
				data: {
					id: id
				},
				success: res => {
					this.question_data[i].question_options = res.data.data;
					for (let t = 0; t < res.data.data.length; t++) {
						this.question_data[i].question_options[t].img_content = res.data.data[t].img_content != 'undefined' ? res.data.data[t].img_content : false;
					}
				}
			});
		},
		//提交测试答案
		testSubmit() {
			// 			let answer = []; // 测试答案集合
			// 			let finished = true; // 是否已完成测试
			// 			let unanswered = ''; // 未答题号集合
			// 			for (let i = 0; i < this.question_data.length; i++) {
			// 				if (!this.question_data[i].answered) {
			// 					unanswered = unanswered + i + '、';
			// 					console.log(`第${i + 1}题未作答！`);
			// 					finished = false;
			// 				}
			// 				answer[i] = this.question_data[i].question_model;
			// 			}
			// 			unanswered = unanswered.substring(0, unanswered.length - 1);
			// 			console.log('完成后再提交！',finished, answer);
			// 			if (!finished) {
			// 				uni.showModal({
			// 					title: '有测试题未完成',
			// 					content: `请将${unanswered}题完成后再提交！`,
			// 					showCancel: false,
			// 					confirmText: '确定'
			// 				});
			// 			} else {
			// 				let name = answer[5];
			// 				let mobile = answer[6];
			// 				let age_scope = answer[7];
			// 				let profession = answer[8];
			// 				let req_data = {
			// 					test_answer: JSON.stringify(answer),
			// 					mobile: mobile,
			// 					name: name,
			// 					age_scope: age_scope,
			// 					profession: profession
			// 				};
			// 				console.log('提交测试答案', req_data);
			//
			uni.request({
				url: 'https://xxx.ngrok.xiaomiqiu.cn/mytio/answers/submission.tio_x',
				method: 'post',
				data: {
					test_question_id: 2,
					answer: this.question_data[2].question_model
				},
				success: res => {
					console.log('形象测试答案提交，req result：', res);
					if (res.statusCode == 200) {
						
						// 							all.globalData.isTested = all.globalData.user.tested = true;
						// 							uni.setStorageSync('user', all.globalData.user);
						// 							console.log('user：', all.globalData.user);
						uni.showModal({
							title: '您已使用风格体型专用券!',
							content: '感谢您进行形象测试！24小时内您的形象定位资料将显示在“个人中心”-->“会员档案”中，您现在可以在“咨询”栏目中提出问题。',
							showCancel: false,
							confirmText: '确定',
							success: function(res) {
								if (res.confirm) {
									uni.switchTab({
										url: '/pages/member/member'
									});
								}
							}
						});
					} else {
						console.log('网络访问错误！检查服务器是否正常！res.statusCode: ', res.statusCode);
					}
				},
				fail: function(res) {
					console.log('网络访问失败！');
				}
			});
			// }
		},
		checkboxChange(e) {
			// console.log('checkbox发生change事件，携带value值为：', e.detail.value)
			let idx = e.currentTarget.dataset.i;
			this.question_data[idx].question_model = e.detail.value;
			if (this.question_data[idx].question_model.length == 0) {
				this.question_data[idx].answered = false;
			} else {
				this.question_data[idx].answered = true;
			}
			var items = this.question_data[idx].question_options;
			var values = e.detail.value;
			for (var i = 0, lenI = items.length; i < lenI; ++i) {
				items[i].checked = false;
				for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
					if (items[i].value == values[j]) {
						items[i].checked = true;
						break;
					}
				}
			}
			// console.log(this.data.question_data);
		},
		radioChange(e) {
			console.log('radio发生change事件，携带value值为：', e);
			let idx = e.currentTarget.dataset.i;
			this.question_data[idx].question_model = e.detail.value;
			this.question_data[idx].answered = true;
			var items = this.question_data[idx].question_options;
			for (var i = 0, len = items.length; i < len; ++i) {
				items[i].checked = items[i].value == e.detail.value;
			}
			this.question_data[idx].question_options = items;
			// console.log(this.data.question_data);
		},

		bindKeyInput(e) {
			console.log(e);
			let idx = e.currentTarget.dataset.i;
			this.question_data[idx].question_model = e.detail.value;
			if (this.question_data[idx].question_model) {
				this.question_data[idx].answered = true;
			} else {
				this.question_data[idx].answered = false;
			}
			// console.log(this.data.question_data);
		}
	}
};
</script>

<style>
/* pages/imageTest/imageTest.wxss */

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
</style>
