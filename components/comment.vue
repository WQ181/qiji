<template>
	<view>
		<view class="bcomment">
			<button size="mini" @tap="change">评论</button>
		</view>
		
		<view class="com" v-if="com">
			<input @input="onKeyInput" :focus="com" @blur="close" placeholder="评论" placeholder-style="color:#BFBFBF;" :value="inputValue"  />
			<button size="mini" @tap="send">发送</button>
		</view>

		<view class="inputdata" v-for="(item3,index3) in comment" :key="index3">
			<text class="inputname">
				{{item3.name}}
			</text>
			<text class="inputcontent">
				{{item3.content}}
			</text>
		</view>
	</view>

</template>

<script>
	export default {
		name: "qjInput",
		data() {
			return {
				inputValue: '',
				com:false
			}
		},
		props: {
			name: {
				type: String,
				default: ""
			},
			comment: {
				type: Array
			}
		},
		methods: {
			onKeyInput(event) {
				this.inputValue = event.target.value
			},
			change(){
				this.com=true
			},
			close(){
				setTimeout(()=>{
					this.com=false
				},200)
			},
			send() {
				if(this.inputValue !=''){
					let content = {
						name: this.name + ':',
						content: this.inputValue
					}
					let comment = this.comment
					comment.push(content)
					console.log(this.comment)
					this.inputValue = ''
					
				}else{
					uni.showToast({
						title:"输入内容不能为空",
						icon:"none"
					})
				}
			}
		}
	}
</script>

<style>
	.com {
		display: flex;
		width: 100%;		
		position: fixed;
		bottom: 48%;
		background: #F7F7F7;
		padding-left: 20upx;
		border: 1upx solid #D6D6D6;
		height: 10%;
	}

	.com input {
		background: #FFFFFF;
		width: 80%;
		z-index: 2;
		border: 1upx solid #FEFEFE;
		margin-top: 25upx;
		min-height: 1.8rem;
	}

	.com button {
		border: 1upx solid darkgray;
		font-size: 22upx;
		margin-left: 10upx;
	}
	
	
	.inputdata {
		width: 73%;
		background: #E7EAED;
		padding-left: 15upx;
		margin-left: 100upx;
		font-size: 30upx;
		padding-bottom: 10upx;
	}

	.inputname {
		color: #64759B;
		font-weight: 500;
	}

	.inputcontent {
		padding-left: 10upx;
	}
</style>
