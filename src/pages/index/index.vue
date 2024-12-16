<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="btn" @click="constAdd">
			<text>vuex count+1：【count: {{baseData.count}}】</text>
		</view>
		<view class="btn" @click="restart">
			重启app
		</view>
	</view>
</template>

<script>
	import {mapState, mapActions, mapMutations } from 'vuex';
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			
		},
		computed:{
			...mapState(['baseData','name'])
		},
		methods: {
			...mapMutations(['increment']),
			constAdd(){
				this.increment()
			},
			restart(){
				uni.showToast({
					title:'restart'
				})
				plus.runtime.restart();
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.btn{
		margin: 10px;
		border: 1px solid #999;
		line-height: 40px;
		width:90%;
		border-radius: 10px;
		text-align: center;
		background-color: #efefef;
	}
</style>
