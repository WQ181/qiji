<template>
	<view>
		<view class="head">
			<view class="name">{{ consult.name }}</view>
			<view class="grade">
				<label>级别</label>
				<input class="grade_input" type="text" :placeholder="consult.grade" style="text-align: center;" placeholder-style="background:#F8F8FF;text-align: center;" @blur="getlevel" />
			</view>
			<view class="consultationFees">
				<label>图文咨询费用</label>
				<input class="consultationFees_input" type="text" :placeholder="consult.consultationFees" placeholder-style="background:#F8F8FF;text-align: center;"
				 @blur="getimgfees" />
			</view>
			<view class="consultationFees">
				<label>线下咨询费用</label>
				<input class="experienceFees_input" type="text" :placeholder="consult.experienceFees" placeholder-style="background:#F8F8FF;text-align: center;"
				 @blur="getexperfees" />
			</view>

		</view>
		<view class="body"><textarea class="area" :value="consult.recommendedReason" @blur="changeinfo" maxlength="-1"></textarea></view>
		<view class="buttons">
			<view class="change_consult"><button @tap="modify">保存修改</button></view>
			<view class="change">
				<button @tap="order()">查看订单</button>
				<button v-if="!isManager" @tap="auth_manager()" >设置管理员</button><button v-else @tap="cancel_manager()" >取消管理员</button>
				<button @tap="del">删除用户</button></view>
		</view>

	</view>
</template>

<script>
	import all from '../../common/global.js';
	import request from '../../utils/req.js';
	import cfg from '../../cfg.js';
	export default {
		data() {
			return {
				consult: '',
				user_id: '',
				isManager: false
			};
		},
		onLoad(e) {
			console.log('顾问id', e);
			// 请求单个顾问详细信息
			this.user_id = e.id;
			request.req({
				url: cfg.qjUrl + 'gl/manage/consultant/person-information.tio_x',
				method: 'get',
				data: {
					id: e.id
				},
				success: res => {
					console.log(res);
					let arr = {
						name: res.data.data.person.name,
						grade: res.data.data.interest ? res.data.data.interest.grade : '暂无',
						consultationFees: res.data.data.person.consultationFees ? res.data.data.person.consultationFees : '暂无',
						experienceFees: res.data.data.person.experienceFees ? res.data.data.person.experienceFees : '暂无',
						recommendedReason: res.data.data.person.recommendedReason ? res.data.data.person.recommendedReason : '暂无'
					};
					this.consult = arr;
					this.isManager = res.data.data.person.isManager
					console.log('顾问信息', this.isManager);
				}
			});
		},
		methods: {
			modify() {
				this.preserve()
			},
			//保存修改顾问信息
			preserve() {
				uni.showModal({
					title: '提示',
					content: '是否修改',
					success: res => {
						if (res.confirm) {
							if (this.consult.grade > 0 && this.consult.grade < 4) {
								request.req({
									url: cfg.qjUrl + 'gl/manage/consultant/update/information',
									method: 'post',
									data: {
										id: this.user_id,
										level: this.consult.grade,
										fee: this.consult.consultationFees,
										real_fee: this.consult.experienceFees,
										recommeded_reason: this.consult.recommendedReason
									},
									success: res => {
										console.log('修改顾问信息', res);
										if (res.data.ok) {
											uni.showToast({
												title: '修改成功'
											});
										} else {
											uni.showToast({
												title: '修改失败，请完善相关信息',
												icon: 'none'
											});
										}
									}
								});
							} else {
								uni.showToast({
									title: '请输入正确的级别',
									icon: 'none'
								});
							}
						}
					}
				});
			},
			auth_manager() {
				//设置管理员
				console.log('this.user_id', this.user_id)
				uni.request({
					url: cfg.qjUrl + 'm_admin/auth_manager.tio_x',
					method: 'POST',
					data: {
						consultantId: this.user_id,
					},
					success: res => {
						console.log('修改成功', res);
						uni.showToast({
							title: '修改成功'
						});
					}
				})
			},
			cancel_manager() {
				//取消管理
				console.log('this.user_id', this.user_id)
				uni.request({
					url: cfg.qjUrl + 'm_admin/auth_manager/cancel.tio_x',
					method: 'POST',
					data: {
						consultantId: this.user_id,
					},
					success: res => {
						console.log('修改成功', res);
						uni.showToast({
							title: '修改成功'
						});
					}
				})
			},
			del() {
				// 删除
				console.log(this.user_id);
				uni.showModal({
					title: '提示',
					content: '是否删除',
					success: res => {
						if (res.confirm) {
							request.req({
								url: cfg.qjUrl + 'm_admin/consultant/delete.tio_x',
								method: 'post',
								data: {
									id: this.user_id
								},
								success: res => {
									console.log('del', res);

									uni.showToast({
										title: '删除成功'
									});
									uni.reLaunch({
										url: '../member/member'
									});
								},
								fail: res => {
									console.log(res);
								}
							});
						}
					}
				});
			},
			order() {
				console.log('this.user_id', this.user_id);
				uni.navigateTo({
					url: '../consultCollocation/consultCollocation?id=' + this.user_id
				});
			},
			changeinfo(e) {
				console.log('recommendedReason', e.detail.value);
				this.consult.recommendedReason = e.detail.value;
			},
			getimgfees(e) {
				console.log('imgfees', e.detail.value);
				this.consult.consultationFees = e.detail.value;
			},
			getexperfees(e) {
				console.log('experienceFees', e.detail.value);
				this.consult.experienceFees = e.detail.value;
			},

			getlevel(e) {
				console.log('grade', e.detail.value);
				this.consult.grade = e.detail.value;
			}
		}
	};
</script>

<style>
	page {
		background-color: #F9F9F9;
	}

	label {
		width: 50%;
		margin-left: 0;
	}

	.area {
		width: 100%;
		height: 500upx;
	}

	.head {
		width: 98%;
		height: 400upx;
		margin-left: 1%;
	}

	.name {
		font-size: 50upx;
		padding-left: 50upx;
		padding-bottom: 50upx;
	}

	.grade {
		display: flex;
		margin-left: 80upx;
	}

	.grade_input {

		width: 70%;
		border-radius: 20upx;
		box-shadow: 5upx 5upx 10upx #000000;
		height: 70upx;
		margin-left: 60upx;
	}

	.consultationFees {
		display: flex;
		margin-left: 80upx;
		margin-top: 40upx;
	}

	.consultationFees_input {
		width: 70%;
		border-radius: 20upx;
		box-shadow: 5upx 5upx 10upx #000000;
		height: 70upx;
		margin-left: 60upx;
	}

	.experienceFees_input {
		width: 70%;
		border-radius: 20upx;
		box-shadow: 5upx 5upx 10upx #000000;
		height: 70upx;
		margin-left: 60upx;
	}

	.body {
		border: 1px solid #ccc;
		border-radius: 20upx;
		margin-left: 5%;

		margin-top: 85upx;
		height: 500upx;
		width: 90%;
	}

	.buttons {
		display: flex;
		justify-content: center;
		align-content: center;
		flex-direction: column;
		width: 80%;
		margin-left: 10%;
	}

	.change_consult {
		display: flex;
		justify-content: center;
		align-content: center;
		flex-direction: column;
		margin-top: 40upx;
		width: 100%;
	}

	.change_consult button {
		width: 100%;
		background-color: #F9C1C0;
	}

	.change {
		display: flex;
		justify-content: center;
		align-content: center;
		flex-direction: column;
		margin-top: 40upx;
		width: 100%;
	}

	.change button {
		margin-top: 10upx;
		width: 100%;
		background-color: #EBEBEB;
	}


	.change_pwd {
		margin-top: 10upx;
		width: 600upx;
		display: flex;
		margin-left: 10upx;
	}

	.change_input {
		width: 70%;
		border-radius: 20upx;
		box-shadow: 5upx 5upx 10upx #000000;
		height: 70upx;
		margin-left: 60upx;
	}
</style>
