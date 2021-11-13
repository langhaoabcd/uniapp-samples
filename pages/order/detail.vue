<template>
	<view>
		<view class="order">
			<view style="display: flex;justify-content: space-between;">
				<text style="font-weight: bold;">订单信息</text>
				<!-- <view style="color:#F29100;">待测量</view> -->
			</view>
			<view style="margin-top: 20rpx;"><text class="gray">项目名称：</text>上海大众项目</view>
			<view style="padding-top: 20rpx;"><text class="gray">订单类型：</text>STK</view>
			<view style="padding-top: 20rpx;"><text class="gray">订单编号：</text>202012123122</view>
			<view style="padding-top: 20rpx;"><text class="gray">下单时间：</text>2021-10-20 1010:10</view>
			<view style="padding-top: 20rpx;"><text class="gray">发货时间：</text>2021-10-20 1010:10</view>
		</view>
		<view class="order">
			<text style="font-weight: bold;">发件信息</text>
			<view style="display: flex;flex-direction: row;margin-top: 20rpx;">
				<view
					style="margin-right: 20rpx;display: flex;align-items: center;flex-direction: column;padding: 10rpx 0rpx;">
					<span
						style="width: 20rpx;height: 20rpx;background-color: #00aa00;display: inline-block;border-radius: 50%;"></span>
					<span style=" width: 1px;background-color: #00aa00;flex-grow: 1;"></span>
					<span
						style="width: 20rpx;height: 20rpx;background-color: #F29100;display: inline-block;border-radius: 50%;"></span>
				</view>
				<view style="border: 0px solid green;">
					<view>
						<view>张三 15900672334</view>
						<view style="padding-top: 10rpx;" class="gray">上海市浦东新区xx路</view>
					</view>
					<view style="margin-top: 30rpx;">
						<view>李四 15900672335</view>
						<view style="padding-top: 10rpx;" class="gray">北京市新区xx路xx厂址</view>
					</view>

				</view>
			</view>
		</view>
		<view class="order">
			<view style="display: flex;justify-content: space-between;">
				<text style="font-weight: bold;">车辆信息</text>
			</view>
			<view style="margin-top: 20rpx;display: flex;justify-content: space-between;">
				<view><text class="gray">车牌：</text>沪FG3205</view>
				<view><text class="gray">张司机：</text>15900234222</view>
			</view>
			<view style="margin-top: 20rpx;display: flex;justify-content: space-between;">
				<view><text class="gray">车牌：</text>苏A9D590</view>
				<view><text class="gray">王司机：</text>13387222123</view>
			</view>

		</view>
		<view class="order" style="margin-bottom: 200rpx;">
			<text style="font-weight: bold;">货物清单</text>
			<view style="margin-top: 20rpx;">
				<view
					style="border: 3rpx solid #ededed; padding: 20rpx 5rpx;margin-bottom: 20rpx;display: flex;flex-direction: row;justify-content: space-between;">
					<view>
						<view>
							<view><text class="gray">名称：</text>货物11 * 2 托</view>
						</view>
						<view style="padding-top: 10rpx;">
							<view><text class="gray">重量：</text>200KG</view>
						</view>
						<view style="padding-top: 10rpx;">
							<view><text class="gray">长宽高：</text>20*20*20 40L</view>
						</view>
					</view>
					<view style="display: flex;align-items: center;padding-right: 10rpx;flex-direction: column;justify-content: center;">
						<text class="gray">车辆</text>
						<view >沪FG3205</view>
					</view>
				</view>
			</view>
		</view>
	
	<text>id:{{id}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				id: '',
			}
		},
		onLoad: function(option) {
			console.log('页面参数', option);
			this.id = option.id;
		},
		methods: {
			getData(){
				
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #ededed;
	}

	.gray {
		color: gray;
	}

	.order {
		width: 710rpx;
		background-color: #ffffff;
		margin: 20rpx auto;
		border-radius: 5rpx;
		box-sizing: border-box;
		padding: 20rpx;
		font-size: 28rpx;
	}

	.item {
		background-color: #FFFFFF;
		height: 100rpx;
		width: auto;
		margin: 10rpx 0rpx;
	}

	.addSite {
		display: flex;
		justify-content: space-around;
		width: 600rpx;
		line-height: 100rpx;
		position: fixed;
		bottom: 30rpx;
		left: 80rpx;
		background-color: #2979ff;
		border-radius: 60rpx;
		font-size: 30rpx;

		.save {
			display: flex;
			align-items: center;
			color: #ffffff;

			.icon {
				margin-right: 10rpx;
			}
		}
	}
</style>
