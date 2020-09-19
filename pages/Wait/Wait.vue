<template>
	<view class="">正在审核中...（请过段时间，重新登陆此小程序查看...）</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad(opt) {
		console.log('进入wait',opt);
		if (opt.isAudit == 0) {
			uni.reLaunch({
				url: '../pre-im/pre-im'
			});
		}
	}
};
</script>

<style></style>
