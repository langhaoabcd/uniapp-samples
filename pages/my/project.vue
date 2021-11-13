<template>
	<view>
		<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30">
			<!-- <view class="u-m-r-10">
				<u-avatar :src="pic" size="140"></u-avatar>
			</view> -->
			<view class="u-flex-1" style="padding-top: 20rpx;">
				<view class="u-font-18 u-p-b-20">上海大众-子项目</view>
				<view class="u-font-14 u-tips-color">甲方订单号：222333</view>
			</view>
		</view>
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="map-fill" @tap="toAddAddress" title="管理收发货地址"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				projectId: '222',
			}
		},
		methods: {
			toAddAddress() {
				uni.navigateTo({
					url: '/pages/my/address/index?type=0&projectId=' + this.projectId
				});
			}
		}
	}
</script>

<style>
	page {
		background-color: #ededed;
	}

	.user-box {
		background-color: #fff;
	}
</style>
