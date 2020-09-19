<template>
	<view class="">
		<view class="con">
			<scroll-view scroll-y>
				<view class="head" v-for="(item,index) in combination" :key="index">
					<view class="top">
						<view class="container">
							<view class="recharge">
								充值￥{{ item.recharge }}
							</view>
							<view class="reward">
								<text style="color: red;">（赠）</text>价值{{ item.reward }}元
							</view>

						</view>
						<view class="img" @tap="del(index)">
							<nav>
								<a class="del"><text>删除</text></a>
							</nav>
						</view>
					</view>

				</view>
			</scroll-view>
		</view>

		<view class="foot">
			<view class="container-foot">
				<view class="recharge">
					充值(元)
					<view class="">
						<input type="text" placeholder="0" placeholder-style="text-align: center;" @blur="getrecharge" />
					</view>
				</view>
				<view class="recharge">
					奖励(元)
					<view class="">
						<input type="text" placeholder="0" placeholder-style="text-align: center;" @blur="getreward" />
					</view>
				</view>
			</view>
			<view class="add" @tap="add">
				<text>增加</text>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/req.js'
	import cfg from '../../cfg.js'
	export default {
		data() {
			return {
				color: ['#F74C31', '#FFB6C1', '#00008B'],
				recharge: '', //充值
				reward: '', //奖励
				head: {
					recharge: '充值(元)',
					reward: '奖励(元)',
					operation: '操作'
				},
				combination: [] //充值套餐
			}
		},
		onLoad() {
			this.req_charge()
			this.combination = []
		},
		methods: {
			req_charge() {
				request.req({
					url: cfg.qjUrl + 'm_admin/getCharge.tio_x',
					method: 'get',
					success: (res) => {
						console.log("req_charge", res)
						for (let i = 0; i < res.data.data.length; i++) {
							let com = {
								recharge: res.data.data[i].threshold / 100,
								reward: res.data.data[i].reward / 100,
								id: res.data.data[i].id
							}
							this.combination.push(com)
						}
					}
				})
			},
			getrecharge(e) {
				this.recharge = e.detail.value
			},
			getreward(e) {
				this.reward = e.detail.value
			},
			add() {
				//添加
				if (this.recharge && this.reward && this.recharge < 999 && this.reward < 999) {
					request.req({
						url: cfg.qjUrl + 'm_admin/addCharge.tio_x',
						method: 'post',
						data: {
							threshold: this.recharge * 100,
							reward: this.reward * 100
						},
						success: (res) => {
							console.log("req_charge", res)
							if (res.data.ok) {
								let com = {
									recharge: this.recharge,
									reward: this.reward
								}
								console.log("com", com)
								this.combination.push(com)
							}

						}
					})
				} else {
					uni.showToast({
						title: '请输入正确数值',
						icon: 'none'
					});
				}


			},
			del(e) {
				//删除
				let index = e
				let id = this.combination[e].id
				uni.showModal({
					title: "提示",
					content: "是否删除",
					success: (res) => {
						if (res.confirm) {

							request.req({
								url: cfg.qjUrl + 'm_admin/delCharge',
								method: 'get',
								data: {
									id: id
								},
								success: (res) => {
									console.log("删除", res)
									uni.showToast({
										title: '删除成功'
									});

									this.combination.splice(index, 1)
								}
							})

						}
					}
				})


			}
		}
	}
</script>

<style>
	nav>a {
		position: relative;
		display: inline-block;
		padding: .3em 1em 0;
		border-radius: 30upx;
	}

	nav>a::before {
		height: 150upx;
		width: 170upx;
		margin-left: -30upx;
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		background: #41BEFF;
		background-image: linear-gradient(hsla(0, 0%, 100%, .6), hsla(0, 0%, 100%, 0));
		border: 1px solid rgba(0, 0, 0, .4);
		/* border-bottom: none; */
		border-radius: .5em .5em 0 .5em;
		transform: perspective(.5em) rotateX(5deg);
		transform-origin: right;

	}

	.del {
		width: 100%;
		height: 150upx;
		display: flex;
		justify-content: center;
		align-content: center;
		flex-direction: column;
	}

	.del text {
		display: flex;
		flex-direction: row;
		margin-top: 80upx;
		color: #FBF3FF;
		font-size: 36upx;
	}

	.con {
		height: 80vh;
	}

	scroll-view {
		height: 100%;
	}

	.container {
		margin-left: 0upx;
		height: 200upx;
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		border-bottom: 2upx solid #E0E3DA;
	}

	.head {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		align-items: center;
		width: 90%;
		margin-left: 5%;
	}

	.top {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100%;
		margin-top: 80upx;
		box-shadow: 5upx 5upx 10upx #c4c4c4;
	}

	.img {
		margin-top: -10upx;
		width: 150upx;
		height: 100%;
	}

	.foot {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 250upx;
	}

	.container-foot {
		display: flex;
		flex-direction: column;
	}

	.recharge {
		margin-top: 20upx;
		display: flex;
		margin-left: 60upx;
		font-size: 40upx;

	}

	.reward {
		margin-top: 20upx;
		display: flex;
		margin-left: 60upx;
		font-size: 30upx;
		color: #808080;
	}

	.recharge input {
		border: 1px solid #ccc;
		margin-top: 10upx;
		width: 200upx;
		height: 60upx;
		margin-left: 50upx;
	}

	.add {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 100upx;
		width: 170upx;
		height: 30%;
		margin-left: 70upx;
		border-radius: 30upx;
		background-color: #C7CBCC;
	}

	.add text {}
</style>
