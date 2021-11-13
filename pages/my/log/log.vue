<template>
	<view>
		<view class="list">
			<view class="d_f">
				<text><u-icon name="clock" size="28"></u-icon>大众项目</text>
				<text>2021.3.19 20:26:30</text>
			</view>
			<view class="d_f">
				<text><u-icon name="clock"></u-icon>嘉里大通项目</text>
				<text>2021.3.19 20:26:30</text>
				<!-- <text class="col_greed">+13㎡</text> -->
			</view>
			<view class="d_f">
				<text><u-icon name="clock" size="28"></u-icon>大众项目</text>
				<text>2021.3.19 20:06:30</text>
			</view>
			<view class="d_f">
				<text><u-icon name="clock" size="28"></u-icon>嘉里大通项目</text>
				<text>2021.3.19 20:26:30</text>
				<!-- <text class="col_red">-13㎡</text> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.col_greed {
		color: #18B566;
	}

	.col_red {
		color: red;
	}

/* 	.list {
		
	} */

	.d_f {
		padding: 30rpx;
		display: flex;
		justify-content: space-between;
		border-bottom: 1rpx solid #f6f6f6;
	}
</style>
