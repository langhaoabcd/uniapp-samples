<template>
	<view>
		<view class="wrap">
			<view class="u-tabs-box">
				<u-tabs-swiper activeColor="#f29100" ref="tabs" :list="list" :current="current" @change="change"
					:is-scroll="false" swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition"
				@animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="order" v-for="(res, index) in orderList[0]" :key="res.id">
								<view class="top">
									<view class="left">
										<u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon>
										<view class="store">{{ res.store }}</view>
										<u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon>
									</view>
									<view class="right"> {{ res.deal }}</view>
								</view>
								<u-row style="margin-bottom: 0px;">
									<u-col span="4">
										<view style="border: 0rpx solid green;padding: 20rpx 0rpx;">
											<view>上海市</view>
											<view style="padding-top: 20rpx; font-weight: bold;">上海汽车城</view>
										</view>
									</u-col>
									<u-col span="4">
										<view style="display: flex;justify-content: space-between;align-items: center;">
											<span
												style="width: 20rpx;height: 20rpx;background-color: #00aa00;display: inline-block;border-radius: 50%;"></span>
											<span style=" height: 1px;background-color: #00aa00;flex-grow: 1;"></span>
											<span
												style="width: 20rpx;height: 20rpx;background-color: #00aa00;display: inline-block;border-radius: 50%;"></span>
										</view>
									</u-col>
									<u-col span="4">
										<view style="border: 0rpx solid green;padding: 20rpx 0rpx;">
											<view style="text-align: right;">天津市</view>
											<view style="padding-top: 20rpx; font-weight: bold;text-align: right;">
												滨海新城</view>
										</view>
									</u-col>
								</u-row>
								<!-- <view class="item" v-for="(item, index) in res.goodsList" :key="index"> -->
								<!-- <view class="left"><image :src="item.goodsUrl" mode="aspectFill"></image></view> -->
								<!-- <view class="content">
										<view class="title u-line-2">{{ item.title }}</view>
										<view class="type">{{ item.type }}</view> -->
								<!-- <view class="delivery-time">发货时间 {{ item.deliveryTime }}</view> -->
								<!-- </view> -->
								<!-- <view class="right">
									 <view class="price">
											￥{{ priceInt(item.price) }}
											<text class="decimal">.{{ priceDecimal(item.price) }}</text>
										</view> 
										<view class="number">x{{ item.number }}</view>
									</view> -->
								<!-- </view> -->
								<!-- <view class="total">
									共{{ totalNum(res.goodsList) }}件
								 合计:
									<text class="total-price">
										￥{{ priceInt(totalPrice(res.goodsList)) }}.
										<text class="decimal">{{ priceDecimal(totalPrice(res.goodsList)) }}</text>
									</text> 
								</view> -->
								<view class="bottom">
									<!-- <view class="more"><u-icon name="more-dot-fill" color="rgb(203,203,203)"></u-icon></view> -->
									<!-- <view class="logistics btn">查看物流</view> -->
									<view class="exchange btn" @tap="toDetail(res.id)">详细</view>
									<view class="evaluate btn" @tap="toEdit(res.id)">测量</view>
								</view>
							</view>
							<u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">

				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				numList: [{
					name: ''
				}, {
					name: ''
				}],
				orderList: [
					[],
					[]
				],
				dataList: [{
						id: 1,
						store: '嘉里大通项目',
						deal: '已发货',
						goodsList: [{
								// goodsUrl: '//img13.360buyimg.com/n7/jfs/t1/103005/7/17719/314825/5e8c19faEb7eed50d/5b81ae4b2f7f3bb7.jpg',
								title: '货物名xxxxxxx',
								type: '2托+12箱;3.12.00CMB;300KG',
								// deliveryTime: '付款后30天内发货',
								// price: '348.58',
								number: 2
							},
							{
								// goodsUrl: '//img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg',
								title: '货物名xxxxxxx',
								type: '托;44.00CMB;800KG',
								// deliveryTime: '付款后30天内发货',
								// price: '135.00',
								number: 1
							}
						]
					},
					{
						id: 2,
						store: '上海大众-子项目',
						deal: '新建',
						goodsList: [{
							// goodsUrl: '//img14.360buyimg.com/n7/jfs/t1/60319/15/6105/406802/5d43f68aE9f00db8c/0affb7ac46c345e2.jpg',
							title: '货物名yyyyyyy',
							type: '托;44.00CMB;800KG',
							// deliveryTime: '付款后7天内发货',
							// price: '128.05',
							number: 169
						}]
					},
				],
				list: [{
						name: '待处理'
					},
					{
						name: '已处理'
					}
				],
				current: 0,
				swiperCurrent: 0,
				tabsHeight: 0,
				dx: 0,
				loadStatus: ['loadmore', 'loadmore', 'loadmore', 'loadmore'],
			};
		},
		computed: {
			// 价格小数
			// priceDecimal() {
			// 	return val => {
			// 		if (val !== parseInt(val)) return val.slice(-2);
			// 		else return '00';
			// 	};
			// },
			// // 价格整数
			// priceInt() {
			// 	return val => {
			// 		if (val !== parseInt(val)) return val.split('.')[0];
			// 		else return val;
			// 	};
			// }
		},
		onLoad() {
			this.getOrderList(0);
			// this.getOrderList(1);
			// this.getOrderList(3);
		},
		onShow() {
			//全局变量更新的时候，触发重新加载
			let globalData = getApp().globalData
			if (globalData.$switchOrder) {
				console.log('触发刷新,$switchOrder=', globalData.$switchOrder);
				// this.getOrderList(0);
				globalData.$switchOrder = false
			}
		},
		methods: {
			toEdit(id) {
				uni.navigateTo({
					url: '/pages/order/edit?id=' + id
				});
			},
			toDetail(id) {
				uni.navigateTo({
					url: '/pages/order/detail?id=' + id
				});
			},
			reachBottom() {
				// 此tab为空数据
				if (this.current != 2) {
					this.loadStatus.splice(this.current, 1, "loading")
					setTimeout(() => {
						this.getOrderList(this.current);
					}, 1200);
				}
			},
			// 页面数据
			getOrderList(idx) {
				for (let i = 0; i < 5; i++) {
					let index = this.$u.random(0, this.dataList.length - 1);
					let data = JSON.parse(JSON.stringify(this.dataList[index]));
					data.id = this.$u.guid();
					this.orderList[idx].push(data);
				}
				this.loadStatus.splice(this.current, 1, "loadmore")
			},
			// tab栏切换
			change(index) {
				this.swiperCurrent = index;
				this.getOrderList(index);
			},
			transition({
				detail: {
					dx
				}
			}) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({
				detail: {
					current
				}
			}) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			}
		}
	};
</script>

<style>
	/* #ifndef H5 */
	page {
		height: 100%;
		background-color: #f2f2f2;
	}

	/* #endif */
	.u-row {
		margin: 40rpx 0;
	}

	.demo-layout {
		height: 80rpx;
		border-radius: 8rpx;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}
</style>

<style lang="scss" scoped>
	.order {
		width: 710rpx;
		background-color: #ffffff;
		margin: 20rpx auto;
		border-radius: 20rpx;
		box-sizing: border-box;
		padding: 20rpx;
		font-size: 28rpx;

		.top {
			display: flex;
			justify-content: space-between;

			.left {
				display: flex;
				align-items: center;

				.store {
					margin: 0 10rpx;
					font-size: 32rpx;
					font-weight: bold;
				}
			}

			.right {
				color: $u-type-warning-dark;
			}
		}

		.item {
			display: flex;
			margin: 20rpx 0 0;

			.left {
				margin-right: 20rpx;

				image {
					width: 200rpx;
					height: 200rpx;
					border-radius: 10rpx;
				}
			}

			.content {
				.title {
					font-size: 28rpx;
					line-height: 50rpx;
				}

				.type {
					margin: 10rpx 0;
					font-size: 24rpx;
					color: $u-tips-color;
				}

				.delivery-time {
					color: #e5d001;
					font-size: 24rpx;
				}
			}

			.right {
				margin-left: 10rpx;
				padding-top: 20rpx;
				text-align: right;

				.decimal {
					font-size: 24rpx;
					margin-top: 4rpx;
				}

				.number {
					color: $u-tips-color;
					font-size: 24rpx;
				}
			}
		}

		.total {
			margin-top: 20rpx;
			text-align: right;
			font-size: 24rpx;

			.total-price {
				font-size: 32rpx;
			}
		}

		.bottom {
			display: flex;
			margin-top: 40rpx;
			padding: 0 10rpx;
			justify-content: space-between;
			align-items: center;

			.btn {
				line-height: 52rpx;
				width: 160rpx;
				border-radius: 26rpx;
				border: 2rpx solid $u-border-color;
				font-size: 26rpx;
				text-align: center;
				color: $u-type-info-dark;
			}

			.evaluate {
				color: $u-type-warning-dark;
				border-color: $u-type-warning-dark;
			}
		}
	}

	.centre {
		text-align: center;
		margin: 200rpx auto;
		font-size: 32rpx;

		image {
			width: 164rpx;
			height: 164rpx;
			border-radius: 50%;
			margin-bottom: 20rpx;
		}

		.tips {
			font-size: 24rpx;
			color: #999999;
			margin-top: 20rpx;
		}

		.btn {
			margin: 80rpx auto;
			width: 200rpx;
			border-radius: 32rpx;
			line-height: 64rpx;
			color: #ffffff;
			font-size: 26rpx;
			background: linear-gradient(270deg, rgba(249, 116, 90, 1) 0%, rgba(255, 158, 1, 1) 100%);
		}
	}

	.wrap {
		display: flex;
		flex-direction: column;
		height: calc(100vh - var(--window-top));
		width: 100%;
	}

	.swiper-box {
		flex: 1;
	}

	.swiper-item {
		height: 100%;
	}
</style>
