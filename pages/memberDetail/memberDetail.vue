<template>
	<view>
		<view class="head">
			<view class="name">{{ member.name }}</view>
			<view class="grade">
				<label>肤色</label>
				<input class="grade_input" type="text" :placeholder="member.colour" placeholder-style="background:#F9F9F9;" @blur="getcolor" />
			</view>
			<view class="consultationFees">
				<label>体型</label>
				<input class="consultationFees_input" type="text" :placeholder="member.shape" placeholder-style="background:#F9F9F9;"
				 @blur="getbody" />
			</view>
			<view class="consultationFees">
				<label>风格</label>
				<textarea class="experienceFees_input" :value="member.style" placeholder-style="background:#F9F9F9;" @blur="getstyle" />
				</view>
		</view>
		<view class="body">
			<view v-if="member.testAnswer"><textarea class="area" :value="answer" @blur="changeinfo" maxlength="-1"></textarea></view>
			<view v-else-if="member.test_answer"><textarea class="area" :value="answer" @blur="changeinfo" maxlength="-1"></textarea></view>
			<view v-else>该用户没有回答问题</view>
		</view>
		<view class="buttons">
			<view class="change_consult"><button @tap="save">保存修改</button></view>
			<view class="change">
				<view class=""><button @tap="order">查看订单</button></view>
				<view class=""><button @tap="preserve">私人衣橱<text v-if="type==1" class="dot">*</text></button></view>
				<view class=""><button @tap="record">调查问卷</button></view>
			</view>
		</view>



	</view>
</template>

<script>
	import request from '../../utils/req.js';
	import cfg from '../../cfg.js';
	import listpagination from '../../components/pagination.vue';
	import all from '../../common/global.js';
	export default {
		data() {
			return {
				member: '',
				answer: '',
				member_id: '',
				id: '',
				color: '',
				body: '',
				style: '',
				type: '',

			};
		},
		onLoad(e) {
			console.log(e);
			this.id = e.id;
			this.type = e.type
			if (this.type == 1) {
				console.log('all.globalData.wardrobe_list', all.globalData.wardrobe_list)
				for (let i = 0; i < all.globalData.wardrobe_list.length; i++) {
					if (all.globalData.wardrobe_list[i].id == e.id) {
						this.member = all.globalData.wardrobe_list[i];
						console.log('用户信息', this.member);
						if (this.member.testAnswer) {
							this.answer = JSON.parse(this.member.testAnswer);
							this.answer.splice(0, 7);
							console.log('用户回答', this.answer);
						}
						if (this.member.test_answer) {
							this.answer = JSON.parse(this.member.test_answer);
							this.answer.splice(0, 7);
							console.log('用户回答', this.answer);
						}
					}
				}
				this.color = this.member.colour;
				this.body = this.member.shape;
				this.style = this.member.style;
			} else {
				for (let i = 0; i < all.globalData.member_list[0].length; i++) {
					if (all.globalData.member_list[0][i].id == e.id) {
						this.member = all.globalData.member_list[0][i];
						console.log('用户信息', this.member);
						if (this.member.testAnswer) {
							this.answer = JSON.parse(this.member.testAnswer);
							this.answer.splice(0, 7);
							console.log('用户回答', this.answer);
						}
						if (this.member.test_answer) {
							this.answer = JSON.parse(this.member.test_answer);
							this.answer.splice(0, 7);
							console.log('用户回答', this.answer);
						}
					}
				}
				this.color = this.member.colour;
				this.body = this.member.shape;
				this.style = this.member.style;
			}

		},
		methods: {
			getcolor(e) {
				if (e.detail.value) this.color = e.detail.value;
			},
			getbody(e) {
				if (e.detail.value) this.body = e.detail.value;
			},
			getstyle(e) {
				if (e.detail.value) this.style = e.detail.value;
			},
			save() {
				console.log(`${this.id}  ${this.body}  ${this.style} `);
				if (this.body && this.style) {
					request.req({
						url: cfg.qjUrl + 'm_admin/member/modify.tio_x',
						method: 'post',
						data: {
							id: this.id,
							color: this.color,
							shape: this.body,
							style: this.style
						},
						success: res => {
							console.log(res.data);
							uni.showToast({
								title: '修改完成',
								icon: 'none'
							});
							for (let i = 0; i < all.globalData.member_list.length; i++) {
								if (all.globalData.member_list[i].id == this.id) {
									//保存到全局
									all.globalData.member_list[i].colour = this.color ? this.color : all.globalData.member_list[i].colour;
									all.globalData.member_list[i].shape = this.shape ? this.shape : all.globalData.member_list[i].shape;
									all.globalData.member_list[i].style = this.style ? this.style : all.globalData.member_list[i].style;
								}
							}
						}
					});
				} else {
					uni.showToast({
						title: '请将会员评价填写完整',
						icon: 'none'
					});
				}
			},
			order() {
				uni.navigateTo({
					url: '../memberCollocation/collocation?id=' + this.member.openid
				});
			},
			preserve() {
				console.log('id', this.member.id);
				uni.navigateTo({
					url: '../wardrobe/wardrobe?id=' + this.member.id
				});
			},
			record() {
				console.log('id', this.member.id);
				uni.navigateTo({
					url: '../record/record?id=' + this.member.id
				});
			}
		}
	};
</script>

<style>
	page {
		background-color: #F9F9F9;
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
		height: 130upx;
		margin-left: 60upx;
		margin-bottom: 10upx;
		color: #808080;
	}

	.body {
		border: 1px solid #ccc;
		border-radius: 20upx;
		margin-left: 5%;

		margin-top: 100upx;
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

	.dot {
		color: red;
		font-size: 40upx;
	}

	.change_pwd {
		margin-top: 10upx;
		width: 600upx;
		display: flex;
		margin-left: 10upx;
	}

	.change_input {
		border: 1px solid #ccc;
		margin-top: 10upx;
		width: 200upx;
		height: 80upx;
	}
</style>
