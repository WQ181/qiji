<template>
	<view>
		<view class="foot">
			<!-- 分页器 -->
			<view class="pagination">
				<view class="button" @tap="JumpPre"><text>上一页</text> </view>
				<view class="num">
					<input type="number" :value="current" @input="getNum" />
					/
					<text>{{ num }}</text>
				</view>
				<view class="button" @tap="JumpNext"><text> 下一页</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'list-pagination',
		props: ['current', 'num'],
		data() {
			return {

			};
		},
		onLoad(e) {
			console.log('进入到组件list-pagination');
		},
		methods: {
			JumpPre() {
				let current = this.current;
				if (current != 1) {
					this.current = --current;
					console.log('上一页', this.current);
				} else {
					uni.showToast({
						title: '前面没有了哦~',
						icon: 'none',
						duration: 2000
					});
				}
				this.getCurrent(current);
			},
			JumpNext() {
				let current = this.current;
				if (current != this.num) {
					this.current = ++current;
					console.log('下一页', this.current);
				} else {
					uni.showToast({
						title: '后面没有了哦~',
						icon: 'none',
						duration: 2000
					});
				}
				this.getCurrent(current);
			},
			getNum(e) {
				console.log('获取输入值', e);
				let value = e.detail.value;
				value = Math.round(value); //取整数

				if (value <= this.num && value > 0) {
					this.value = value;
					this.getCurrent(value);
				} else {
					uni.showToast({
						title: '您的输入不规范哦~',
						icon: 'none',
						duration: 2000
					});
				}
				console.log(value);
			},
			getCurrent(current) {
				//点击按钮时，通知父组件
				this.$emit('get-current', {
					current: current
				});
			}
		}
	};
</script>

<style>
	.foot {
		position: fixed;
		width: 100%;
		background: #EFF1F3;
		bottom: 0;
		border: 2upx solid #d6d6d6;
	}

	.pagination {
		display: flex;
		justify-content: center;
		padding: 50upx;
		flex-direction: row;
	}

	.num {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 30%;
		width: 200upx;
	}

	.num input {
		width: 100upx;

	}

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 15upx;
		width: 170upx;
		height: 30%;

		border-radius: 30upx;
		background-color: #40BEFF;
	}
</style>
