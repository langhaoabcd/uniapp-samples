<template>
	<view class="wrap">
		<view class="top">
			<view class="item">
				<view class="left">收货人</view>
				<input type="text" placeholder-class="line" placeholder="请填写收货人姓名" />
			</view>
			<view class="item">
				<view class="left">电话</view>
				<input type="number" placeholder-class="line" placeholder="请填写电话" />
			</view>
			<view class="item" @tap="ssqValue = true">
				<view class="left">省市区</view>
				<city-select v-model="ssqValue" @city-change="cityChange"></city-select>
				<view class="u-demo-result-line">{{ ssqInput ? ssqInput : '' }}</view>
				<u-icon style="position:absolute;right: 20rpx;" name="arrow-right"></u-icon>
			</view>
			<view class="item address">
				<view class="left">详细地址</view>
				<textarea type="text" placeholder-class="line" placeholder="街道、楼牌等" />
			</view>
			<view>
				ID:{{id}} projectId:{{projectId}} current:{{current}}
			</view>
		</view>
		<view class="addSite" @tap="save">
			<view class="add">
				立即保存
			</view>
		</view>
	</view>
</template>

<script>
	import citySelect from '@/components/citySelect/u-city-select.vue'
	export default {
		components: {
			citySelect
		},
		data() {
			return {
				show: false,
				ssqValue: false,
				ssqInput: '',
				channel: null,
				id: null, //选中的地址id
				current: 0, //发货0 收货1
				projectId: null, //项目id
				list: [{
						name: '发货地点'
					},
					{
						name: '收货地点'
					}
				],
			};
		},
		onLoad: function(option) {
			// #ifdef APP-NVUE
			const eventChannel = this.$scope.eventChannel; // 兼容APP-NVUE
			this.channel = eventChannel;
			// #endif
			// #ifndef APP-NVUE
			const eventChannel = this.getOpenerEventChannel();
			this.channel = eventChannel;
			// #endif

			this.current = option.type;
			this.projectId = option.projectId;
			if (option.id != undefined) {
				this.id = option.id;
				uni.setNavigationBarTitle({
					title: '修改地址'
				})
				this.getModel(this.id);
			} else {
				//添加地址
				uni.setNavigationBarTitle({
					title: '添加' + this.list[this.current].name
				})
			}
			//1.当是从订单页面进来时，判断参数加载地址
			//2.选中地址时带数据返回到新建订单页
			//3.新增和编辑进入到addSite页
			//4.能修改页面header的文字，发件人地址，收件人地址
		},
		methods: {
			getModel(id) {
				//根据地址id获取model
			},
			save() {
				//立即保存
				//返回携带参数type
				if(this.id !=null){
					//修改
					this.channel.emit('acceptDataFromEditPage', {
						type: this.current
					});
				}else{
					//新增
					this.channel.emit('acceptDataFromAddPage', {
						type: this.current
					});
				}
				uni.navigateBack({
					delta: 1
				});
			},
			showRegionPicker() {
				this.show = true;
			},
			cityChange(e) {
				this.ssqInput = e.province.label + '-' + e.city.label + '-' + e.area.label;
			}
		}
	};
</script>

<style lang="scss">
	/deep/ .line {
		color: $u-light-color;
		font-size: 28rpx;
	}

	.wrap {
		background-color: #f2f2f2;

		.top {
			background-color: #ffffff;
			border-top: solid 2rpx $u-border-color;
			padding: 22rpx;

			.item {
				display: flex;
				font-size: 32rpx;
				line-height: 100rpx;
				align-items: center;
				border-bottom: solid 2rpx $u-border-color;

				.left {
					width: 180rpx;
				}

				input {
					text-align: left;
				}
			}

			.address {
				padding: 20rpx 0;

				textarea {
					// width: 100%;
					height: 150rpx;
					background-color: #f7f7f7;
					line-height: 60rpx;
					margin: 40rpx auto;
					padding: 20rpx;
				}
			}

			.site-clipboard {
				padding-right: 40rpx;

				textarea {
					// width: 100%;
					height: 150rpx;
					background-color: #f7f7f7;
					line-height: 60rpx;
					margin: 40rpx auto;
					padding: 20rpx;
				}

				.clipboard {
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 26rpx;
					color: $u-tips-color;
					height: 80rpx;

					.icon {
						margin-top: 6rpx;
						margin-left: 10rpx;
					}
				}
			}
		}

		.footer {
			background-color: #ffffff;
			padding: 20rpx 20rpx;
			// 	position: absolute;
			// 	bottom: 30rpx;
			// 	left: 80rpx;
			// 	background-color: red;
			// 	border-radius: 60rpx;
			// 	font-size: 30rpx;

			// 	.save {
			// 		display: flex;
			// 		align-items: center;
			// 		color: #ffffff;

			// 		.icon {
			// 			margin-right: 10rpx;
			// 		}
			// 	}
		}

		// .bottom {
		// 	margin-top: 20rpx;
		// 	padding: 40rpx;
		// 	padding-right: 0;
		// 	background-color: #ffffff;
		// 	font-size: 28rpx;
		// 	.tag {
		// 		display: flex;
		// 		.left {
		// 			width: 160rpx;
		// 		}
		// 		.right {
		// 			display: flex;
		// 			flex-wrap: wrap;
		// 			.tags {
		// 				width: 140rpx;
		// 				padding: 16rpx 8rpx;
		// 				border: solid 2rpx $u-border-color;
		// 				text-align: center;
		// 				border-radius: 50rpx;
		// 				margin: 0 10rpx 20rpx;
		// 				display: flex;
		// 				font-size: 28rpx;
		// 				align-items: center;
		// 				justify-content: center;
		// 				color: $u-content-color;
		// 				line-height: 1;
		// 			}
		// 			.plus {
		// 				//padding: 10rpx 0;
		// 			}
		// 		}
		// 	}
		// 	.default {
		// 		margin-top: 50rpx;
		// 		display: flex;
		// 		justify-content: space-between;
		// 		border-bottom: solid 2rpx $u-border-color;
		// 		line-height: 64rpx;
		// 		.tips {
		// 			font-size: 24rpx;
		// 		}
		// 		.right {
		// 		}
		// 	}
		// }

	}

	.addSite {
		display: flex;
		justify-content: space-around;
		width: 600rpx;
		line-height: 100rpx;
		position: absolute;
		bottom: 30rpx;
		left: 80rpx;
		background-color: #2979ff;
		border-radius: 60rpx;
		font-size: 30rpx;

		.add {
			display: flex;
			align-items: center;
			color: #ffffff;

			.icon {
				margin-right: 10rpx;
			}
		}
	}
</style>
