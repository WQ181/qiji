<template>
	<view>
		<view class="foot">
			<!-- 分页器 -->
			<view class="pagination">
				<button size="mini" @tap="JumpPre">上一页</button>
				<view class="num">
					<input type="number" :value="current" @input="getNum" />
					/
					<text>{{ num }}</text>
				</view>
				<button size="mini" @tap="JumpNext">下一页</button>
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
			
			let value = e.detail.value;
			value = Math.round(value); //取整数

			if (value < this.num+1 && value > 0) {
				this.value = value;
				this.getCurrent(value);
			} else {
				uni.showToast({
					title: '您的输入不规范哦~',
					icon: 'none',
					duration: 2000
				});
			}
			
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
	background: #ffffff;
	bottom: 0;
	border: 2upx solid #d6d6d6;
}
.pagination {
	display: flex;
	justify-content: center;
	padding: 50upx;
}
.num {
	display: flex;
	justify-content: center;
	margin-top: 10upx;
	width: 200upx;
}
.num input {
	width: 100upx;
}
</style>
