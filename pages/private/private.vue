<template>
	<view>
		<view class="swiper-tab">
			<view v-bind:class="['swiper-tab-list', currentTab == 0 ? 'on' : '']" data-current="0" @tap="swichNav">未判断</view>
			<view v-bind:class="['swiper-tab-list', currentTab == 1 ? 'on' : '']" data-current="1" @tap="swichNav">已判断</view>
		</view>
		<swiper :current="currentTab" @change="bindChange">
			<swiper-item>
				<!-- 所有未评价的衣橱 -->
				<scroll-view scroll-y class="show">
					<view class="list">
						<block v-for="(item, id) in list" :key="id">
							<view class="item">
								<view class="pic" :id="id" @tap="previewImage">
									<image mode="aspectFit" :src="item.picture"></image>
								</view>
								<view class="desc">
									<!-- <view class="style"><input type="text" value="" :placeholder="style ? style : '衣服风格'" @input="getValue" /></view> -->
									<!-- <view class="fit" v-if="item.suitable == true">合适</view>
									<view class="fit" v-if="item.suitable == false">不合适</view> -->
								</view>
								<view class="btn">
									<button @tap="getSuitable(id, 1)">合适</button>
									<button @tap="getSuitable(id, 0)">不合适</button>
								</view>
							</view>
						</block>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<!-- 所有已评价的衣橱 -->
				<scroll-view scroll-y class="show">
					<view class="list">
						<block v-for="(item, id) in beforeList" :key="id">
							<view class="item">
								<view class="pic" :id="id" @tap="previewImage">
									<image mode="aspectFit" :src="item.picture"></image>
								</view>
								<view class="desc">
									<!-- <view class="style"><input type="text" value="" :placeholder="style ? style : '衣服风格'" @input="getValue" /></view> -->
									<view class="fit" v-if="item.suitable == true">合适</view>
									<view class="fit" v-if="item.suitable == false">不合适</view>
								</view>
								<!-- <view class="btn">
									<button type="primary" size="mini" plain="true" @tap="getSuitable(id, 1)">合适</button>
									<button type="warn" size="mini" plain="true" @tap="getSuitable(id, 0)">不合适</button>
								</view> -->
							</view>
						</block>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>

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
				currentTab: 0,
				list: [],
				beforeList: [],
				clothes: [],
				status: 1,
				isAnswered: false,
				memberId: null,
				index: null,
				show_wardrobe: '',
				style: ''
			};
		},

		onLoad() {
			this.wardrobeGet()
		},

		methods: {
			// 		getValue(e) {
			// 			this.style = e.detail.value;
			// 		},
			getSuitable(e, sui) {
				let id = this.list[e].id;
				let style = this.style ? this.style : '';
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
			},
			previewImage(e) {
				let idx = e.currentTarget.id;
				let a = this.list[idx].picture;
				uni.previewImage({
					urls: [a] // 需要预览的图片http链接列表
				});
			},
			wardrobeGet() {
				//获取所有未评价的衣橱
				request.req({
					url: cfg.qjUrl + 'm_admin/get_wardrobe_not_assess.tio_x',
					method: 'get',
					data: {
						pageNum: 1,
						pageSize: 10
					},
					success: res => {
						if (res.statusCode == 200) {
							console.log('获取私人衣橱服饰req result', res);
							if (res.data.ok) {
								// ok非0表示出错
								console.log('获取私人衣橱服饰出错！');
							} else {
								//转换路径
								for (let i = 0; i < res.data.list.length; i++) {
									if (res.data.list[i].picture) {
										res.data.list[i].picture = 'http://qjqn.foxcodes.cn/' + res.data.list[i].picture;
									} else {
										res.data.list[i].picture = 'images/logo.jpg';
									}
								}
								this.list = res.data.list;

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
			},
			swichNav: function(e) {
				if (this.currentTab == e.target.dataset.current) {
					return false; //值相等，不切换
				} else {
					//tab切换成功



					this.currentTab = e.target.dataset.current; //改变tab值
					console.log('this.currentTab', this.currentTab);
					// if (this.currentTab == 1) {
					// 	this.unansweredGet();
					// } else {
					// 	this.answeredGet();
					// }
				}
			}
		}
	};
</script>

<style>
	.swiper-tab {
		width: 100%;
		border-bottom: 2upx solid #777777;
		text-align: center;
		line-height: 100upx;
	}

	.swiper-tab-list {
		font-size: 30upx;
		display: inline-block;
		width: 33.33%;
		color: #777777;
	}

	.on {
		color: #31b5fe;
		border-bottom: 5upx solid #31b5fe;
	}

	swiper {
		height: 92vh;
	}

	scroll-view {
		height: 100%;
	}

	.show {
		width: 100%;
		height: 100%;
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
		height: 400upx;
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

	.fit {
		display: flex;
		justify-content: center;
		align-items: center;
		
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
		justify-content: center;
		flex-direction: row;
	}

	.btn button {
		height: 100%;
		background-color: #F4A7A5;
		font-size: 26upx;
	}
</style>
