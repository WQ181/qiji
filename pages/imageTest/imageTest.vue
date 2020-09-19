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
							<view class="weui-article__title">
								【第{{ index + 1 }}题】
								<button size="mini" @tap="del(item.id)">删除</button>
								<button size="mini" @tap="edit(item.delid)">编辑</button>
							</view>
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
							<view class="weui-article__title">
								【第{{ index + 1 }}题】
								<button size="mini" @tap="del(item.id)">删除</button>
								<button size="mini" @tap="edit(item.delid)">编辑</button>
							</view>
							<view class="weui-article__h3">{{ item.content }}</view>
							<view class="question">
								<input class="weui-input" maxlength="20" placeholder="在此处填写答案" :value="item.question_model" @input="bindKeyInput" :data-i="index" />
							</view>
						</view>

						<!-- 单选题处理  -->
						<view class="weui-panel" v-if="item.type == 2">
							<!-- 单选type=2 -->
							<view class="weui-article__title">
								【第{{ index + 1 }}题】
								<button size="mini" @tap="del(item.id)">删除</button>
								<button size="mini" @tap="edit(item.delid)">编辑</button>
							</view>
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
							<view class="weui-article__title">
								【第{{ index + 1 }}题】
								<button size="mini" @tap="del(item.id)">删除</button>
								<button size="mini" @tap="edit(item.delid)">编辑</button>
							</view>
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
		</view>
		<uni-fab :content="content" horizontal="right" direction="vertical" @trigger="trigger"></uni-fab>
	</view>
</template>

<script>
import request from '../../utils/req.js';
import cfg from '../../cfg.js';
import all from '../../common/global.js';
import reload from '../../utils/reload.js';
import qiniuUploader from '../../utils/uploader';
import kf from '../../common/kf.js';
import uniFab from '@/components/uni-fab.vue';
// 初始化七牛相关参数
export default {
	components: {
		uniFab
	},
	data() {
		return {
			content: [
				{
					text: '单选题',
					question_type: 2,
					active: false
				},
				{
					text: '多选题',
					question_type: 3,
					active: false
				},
				{
					text: '填空题',
					question_type: 1,
					active: false
				},
				{
					text: '上传题',
					question_type: 4,
					active: false
				}
			],
			basic_url: cfg.imageTestUrl,

			question_data: [],
			id: 0,
			question: []
		};
	},
	onLoad: function() {
		console.log('进入imageTest页面');
		this.getlists();
	},

	methods: {
		getlists() {
			uni.request({
				url: 'https://xxx.ngrok.xiaomiqiu.cn/mytio/answers/questions.tio_x',
				method: 'get',
				data: {},
				success: res => {
					console.log('返回 res...', res);
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
					all.globalData.question_data = this.question_data;
					console.log('问题选项', all.globalData.question_data);
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
					console.log('选择题', res.data.data);
					this.question_data[i].question_options = res.data.data;
					for (let t = 0; t < res.data.data.length; t++) {
						this.question_data[i].question_options[t].img_content = res.data.data[t].img_content != 'undefined' ? res.data.data[t].img_content : false;
					}
				}
			});
		},
		edit(e) {
			uni.navigateTo({
				url: '../edit/edit?delid=' + e
			});
		},
		del(e) {
			uni.request({
				url: 'https://xxx.ngrok.xiaomiqiu.cn/mytio/question/del.tio_x',
				method: 'get',
				data: {
					testQuestionId: e
				},
				success: res => {
					console.log('res.......', res);
					this.getlists();
				}
			});
		},
		trigger(e) {
			let that = this;
			console.log('trigger', e);
			this.content[e.index].active = !e.item.active;
			uni.showModal({
				title: '提示',
				content: `您${this.content[e.index].active ? '选中了' : '取消了'}${e.item.text}`,
				success: function(res) {
					if (res.confirm) {
						console.log('用户点击确定');
						uni.navigateTo({
							url: '../addTest/addTest?question_type=' + that.content[e.index].question_type + '&testQuestionId=' + that.question_data.length
						});
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
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
		},
		async didPressChooesImage(e) {
			console.log('进入addimg事件', e); //选择图片
			let index = e.currentTarget.dataset.i;
			let res = await kf.qi_niu_image();
			console.log('qiniu', res);
			let img = res[0].imageURL;
			// img = img[index].replace('http://', '');
			this.question_data[index].question_model = img;
			console.log('选择图片success', img);
		}
	}
};
</script>

<style>
.weui-article__section {
	display: flex;
	justify-content: center;
	margin-bottom: 20upx;
}
.weui-panel {
	width: 90%;
}
.weui-article {
	padding-left: 15upx;
	padding-right: 15upx;
}
.image {
	height: 300upx;
	width: 300upx;
	margin-right: 15upx;
}
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
	display: flex;
	font-weight: 600;
}
.weui-article__title button {
	height: 50upx;
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
