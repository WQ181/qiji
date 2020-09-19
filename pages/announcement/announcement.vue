<template>
	<view class="container">
		<view class="head">
			<text>标题</text>
			<input type="text" value="" @input="titleGet" placeholder="请输入公告标题..." />
		</view>
		<view class="content">
			<text>公告内容</text>
			<textarea value="" @input="contentGet" placeholder="请输入公告内容..." />
		</view>
		<view class="btn" @tap="confirm"><button type="primary" plain="ture">添加公告</button></view>
	</view>
</template>

<script>
import cfg from '../../cfg.js';
export default {
	data() {
		return {
			title: null,
			content: null
		};
	},
	onLoad() {},
	methods: {
		titleGet(e) {
			this.title = e.detail.value;
		},
		contentGet(e) {
			this.content = e.detail.value;
		},
		confirm() {
			if (this.title != null && this.content != null) {
				this.add();
			} else {
				uni.showToast({
					title: '请填写完整的公告哦~',
					icon: 'none',
					duration: 2000
				});
			}
		},
		add() {
			uni.request({
				url: cfg.qjUrl + 'wx/add.tio_x',
				method: 'POST',
				data: {
					title: this.title,
					category: 'text',
					brief: this.content
				},
				success: res => {
					if (res.statusCode == 200) {
						console.log('增加公告 req result：', res);
						uni.showToast({
							title: '您成功增加了一条公告哦~',
							icon: 'none'
						});
						setTimeout(function() {
							uni.reLaunch({
								url: '../member/member'
							});
						}, 1500);
					} else {
						console.log('网络访问错误！检查服务器是否正常！');
					}
				},
				fail: function(res) {
					console.log('网络访问失败！');
				}
			});
		}
	}
};
</script>

<style>
.container {
	display: flex;
	justify-content: center;
	align-content: center;
	flex-direction: column;
}
.content textarea{
	width: 100%;
}
.btn {
	display: flex;
}
</style>
