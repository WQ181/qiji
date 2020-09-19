<template>
	<view class="" v-if="list">
		<scroll-view scroll-y>
			<view class="container" v-for="(item,index) in list" :key="index">
				<view class="btn">
					<button>
						<view class="row">
							<view class="colour">
								<view class="head" :style="'background:'+color[index%5]"></view>
							</view>
							<view class="order">
								<text>
									订单号:{{item.orderid}}
								</text>
							</view>
							<view class="date">
								<text>{{item.createdAt}}</text>
							</view>
						</view>
						<view class="row">
							<view class="order">
								<text style="margin-top: 5upx;">支付人:{{item.name}}</text>
							</view>
							<view class="date">
								<text style="margin-top: 5upx;">实付:￥{{item.pay_amount}}</text>
							</view>
						</view>
					</button></view>
			</view>

		</scroll-view>
		<view class="footer">
			<list-pagination :num="num" :current="current" @get-current="conGet"></list-pagination>
		</view>
	</view>
	<view class="" v-else>
		账户暂无余额
	</view>
</template>

<script>
	import cfg from '../../cfg.js';
	import all from '../../common/global.js';
	import listPagination from '@/components/list-pagination/pagination.vue';
	export default {
		components: {
			listPagination
		},
		data() {
			return {
				num: 1,
				current: 1,
				list: [],
				color: ['#FFBB6E', '#FF6E6E ', '#9080FF', '#47FB9C', '#2D4FF8']
			}
		},
		onLoad() {
			uni.showLoading({
				title: '努力加载数据中'
			});

			this.getOrder()
		},
		methods: {
			getOrder() {
				uni.request({
					url: cfg.qjUrl + 'gl/controller/consultant/all/order.tio_x',
					method: 'get',
					data: {
						pageSize: 20, //请求条数
						pageNumber: this.current, //请求的页面号,从0页开始
						consultantId: all.globalData.user.id
					},
					success: res => {
						console.log('返回余额列表', res);
						this.list = res.data.data.list
						this.num = res.data.data.totalPage
						this.current = res.data.data.pageNumber
						for (let i = 0; i < res.data.data.list.length; i++) {
							this.list[i].orderid = this.list[i].orderid.substring(this.list[i].orderid.length - 10)
							this.list[i].createdAt = this.list[i].createdAt.slice(10, 16) + ' / ' + this.list[i].createdAt.slice(5, 10)
						}
						uni.hideLoading();
					},
					fail: error => {
						console.log('error', error);
					}
				});
			},
			conGet(e) {
				console.log('获取内容', e);
				this.current = e.current
				this.getOrder()
			}
		}
	}
</script>

<style>
	page {
		background-color: #F5F5F5;
	}

	scroll-view {
		height: 83vh;
	}

	.btn {
		margin-top: 60upx;
	}

	button {
		display: flex;
		flex-direction: column;
		width: 90%;
		height: 200upx;
		background-color: #FFFFFF;
	}

	.row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
	}

	.colour {
		display: flex;
		width: 10%;
		margin-left: -20upx;
	}

	.head {
		display: flex;

		margin-top: 70upx;
		width: 30upx;
		height: 30upx;
		border-radius: 50%;
	}

	.order {
		display: flex;
		justify-content: center;
		align-content: center;
		width: 50%;
	}

	.order text {
		display: flex;
		margin-top: 40upx;
		font-size: 30upx;
	}

	.date {
		display: flex;
		justify-content: center;
		align-content: center;
		width: 40%;
	}

	.date text {
		display: flex;
		margin-top: 40upx;
		margin-left: 20upx;
		font-size: 30upx;
		color: #9B9B9B;
	}

	.footer {
		bottom: 0;
	}
</style>
