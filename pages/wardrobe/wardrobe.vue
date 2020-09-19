<template>
	<view v-if="show_wardrobe">
		<scroll-view scroll-y class="show">
			<view class="list">
				<block v-for="(item, id) in list" :key="id">
					<view class="item">
						<view class="pic" :id="id" @tap="previewImage">
							<image mode="aspectFit" :src="item.picture"></image>
						</view>
						<view class="desc">
							<!-- <view class="style"><input type="text" value="" :placeholder="style ? style : '衣服风格'" @input="getValue" /></view> -->
							<view class="fit" v-if="item.suitable == true">合适</view>
							<view class="fit" v-if="item.suitable == false">不合适</view>
						</view>
						<view class="btn">
							<button class="Suitable" @tap="getSuitable(id, 1)">合适</button>
							<button class="disSuitable" @tap="getSuitable(id, 0)">不合适</button>
						</view>
					</view>
				</block>
			</view>
		</scroll-view>
	</view>
	<view v-else>衣橱里没有衣服，请去添加喔</view>
</template>

<script>
	// pages/wardrobe/wardrobe.js
	//获取cfg.js中的url配置信息
	import request from '../../utils/req.js';
	import cfg from '../../cfg.js';
	import all from '../../common/global.js';
	export default {
		data() {
			return {
				list: [],
				clothes: [],
				status: 1,
				isAnswered: false,
				memberId: null,
				index: null,
				show_wardrobe: '',
				style: ''
			};
		},

		onLoad: function(options) {
			console.log('已经进入wardrobe', options);
			if (options.index) {
				this.index = options.index;
				this.isAnswered = options.isAnswered;
				if (this.isAnswered == 'true') {
					this.memberId = all.globalData.answered[this.index].memberId;
					console.log('问题true,memberid', this.memberId);
				} else {
					this.memberId = all.globalData.unanswered[this.index].memberId;
					console.log('问题false,memberid', this.question_id);
				}
				this.wardrobeGet();
			} else {
				this.memberId = options.id;
				this.wardrobeGet();
			}
		},

		methods: {
			getValue(e) {
				this.style = e.detail.value;
			},
			getSuitable(e, sui) {
				console.log('获取衣服风格', sui);
				let id = this.list[e].id;
				let style = this.style ? this.style : '';
				console.log(style, id);
				uni.showModal({
					title: '提示',
					content: '是否评价',
					icon: 'none',
					success: res => {
						request.req({
							url: cfg.qjUrl + 'gl/manage/member/wardrobe/modify.tio_x',
							method: 'post',
							data: {
								id: id, //衣服id
								style: style, //衣服风格
								suitable: sui //合适1，不合适0
							},
							success: res => {
								console.log('获取风格req result', res);
								if (res.statusCode == 200) {
									if (res.data.ok) {
										this.list[e].suitable = sui == 1 ? true : false;
									}
								} else {
									console.log('网络访问错误！检查服务器是否正常！');
								}
							},
							fail: function(res) {
								console.log('网络访问失败！');
							}
						});
					}
				})

			},
			previewImage(e) {
				console.log('预览', e);
				let idx = e.currentTarget.id;
				let a = this.list[idx].picture;
				uni.previewImage({
					urls: [a] // 需要预览的图片http链接列表
				});
			},
			wardrobeGet() {
				request.req({
					url: cfg.qjUrl + 'wardrobe/member/list.tio_x',
					method: 'get',
					data: {
						id: this.memberId
					},
					success: res => {
						if (res.statusCode == 200) {
							console.log('获取私人衣橱服饰req result', res);
							if (res.data.data.ok) {
								// ok非0表示出错
								console.log('获取私人衣橱服饰出错！');
							} else {
								//转换路径
								for (let i = 0; i < res.data.data.length; i++) {
									if (res.data.data[i].picture) {
										res.data.data[i].picture = 'http://qjqn.foxcodes.cn/' + res.data.data[i].picture;
									} else {
										res.data.data[i].picture = 'images/logo.jpg';
									}
								}
								this.list = res.data.data;

								console.log('list', this.list);
								for (let i of this.list) {
									this.clothes.push(i.picture);
								}

								this.show_wardrobe = this.list.length ? true : false;
							}
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
	.show {
		width: 100%;
		height: 99vh;
	}

	.list {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: flex-start;
		background-color: whitesmoke;
	}

	.item {
		width: 45%;
		height: 500upx;
		margin-top: 20upx;
		margin-left: 20upx;

		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-around;
		background-color: white;
		opacity: 0.9;
		border-radius: 3%;
		box-shadow: 1upx 1upx 8upx #c4c4c4;
	}

	.tag {
		size: 6upx;
		text-align: left;
		color: rgb(252, 198, 164);
		margin-left: 10upx;
	}

	.name {
		size: 6upx;
		text-align: left;
		color: rgb(252, 198, 164);
	}

	.delete {
		width: 20upx;
		height: 20upx;
		margin-left: 270upx;
	}

	.pic {
		width: 100%;
		height: 60%;
		margin-top: 20upx;
	}

	.pic image {
		
		width: 100%;
		height: 100%;
		margin: 5upx;
	}

	.desc {
		position: relative;
		margin-left: 0upx;
		/* line-height: 30px; */
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size: 30upx;
		color: #999;
	}

	.type {
		width: 20%;
		margin-left: 10upx;
	}

	.style {
		color: #999;
		width: 180upx;
		font-size: 30upx;

		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.fit {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.add {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 10upx;
		margin-bottom: 10upx;
		width: 100%;
		height: 10vh;
		/* background-color:red; */
	}

	.searchbar-result {
		margin-top: 0;
		font-size: 14upx;
	}

	.searchbar-result:before {
		display: none;
	}

	.weui-cell {
		padding: 12upx 15upx 12upx 35upx;
	}

	.btn {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		margin-bottom: 20upx;
	}

	.Suitable {
		height: 100%;

		background-color: #F4A7A5;
		font-size: 26upx;
	}

	.disSuitable {
		height: 100%;
		margin-left: 40upx;
		font-size: 26upx;
		background-color: #7BB9EC;
	}
</style>
