<template>
	<view>
		<view class="item" v-for="(res, index) in siteList" :key="res.id"
			style="display: flex;flex-direction: row; justify-content: space-between;">
			<view @click="tapBackToOrder(res)">
				<view class="top">
					<text class="name">{{ res.name }}</text>
					<text class="phone">{{ res.phone }}</text>
				</view>
				<view class="bottom">
					广东省深圳市宝安区 自由路66号
				</view>
			</view>
			<view style="display: flex;align-items: center;">
				<u-icon @click="toEditSite(res.id)" name="edit-pen" :size="40" color="#999999"></u-icon>
			</view>
		</view>
		<view>
			projectId:{{projectId}} current:{{current}}
		</view>
		<view class="addSite" @tap="toAddSite">
			<view class="add">
				<u-icon name="plus" color="#ffffff" class="icon" :size="30"></u-icon>添加地址
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// param_type: '',//页面传递参数
				siteList: [], //此页面仅供选择地址
				current: 0, //选择发地址0，或 收地址1
				projectId: null, //项目id
				channel: null, //监听通道
				list: [{
						name: '发件人'
					},
					{
						name: '收件人'
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

			this.projectId = option.projectId;
			this.current = option.type;
			uni.setNavigationBarTitle({
				title:'选择'+ this.list[this.current].name
			})
			this.getData(this.current);

			//1.当是从订单页面进来时，判断参数加载地址
			//2.选中地址时带数据返回到新建订单页
			//3.新增和编辑进入到addSite页
			//4.能修改页面header的文字，发件人地址，收件人地址
		},
		methods: {
			getData(i) {
				//根据项目 this.projectId
				//查询发货地址0，和收货地址1
				this.siteList = [{
						id: 2,
						name: '李XX',
						phone: '183****5555',
						tag: [
							// {
							// 	tagText: '公司'
							// }
						],
						site: '广东省深圳市宝安区 翻身路xx号'
					},
					{
						id: 3,
						name: '王YY',
						phone: '153****5555',
						tag: [],
						site: '广东省深圳市宝安区 平安路13号'
					}
				];
			},
			toAddSite() {
				const that = this;
				uni.navigateTo({
					url: '/pages/my/address/addSite?type=' + this.current + '&projectId=' + this.projectId,
					events: {
						// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
						acceptDataFromAddPage: function(data) {
							console.log('接受-add-参数', data)
							const res = data.res;
							that.getData(that.current);
						}
					},
				});
			},
			toEditSite(id) {
				const that = this;
				uni.navigateTo({
					url: '/pages/my/address/addSite?type=' + that.current + '&id=' + id + '&projectId=' + that.projectId,
					events: {
						// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
						acceptDataFromEditPage: function(data) {
							console.log('接受-edit-参数', data)
							const res = data.res;
							that.getData(that.current);
						}
					},
				});
			},
			tapBackToOrder(item) {
				const result = encodeURIComponent(JSON.stringify(item));
				this.channel.emit('acceptDataFromOpenedPage', {
					data: result,
					type: this.current
				});
				uni.navigateBack({
					delta: 1
				});
			},
		}
	};
</script>

<style lang="scss">
	page {
		background-color: #ededed;
	}

	.section {
		margin: 20rpx 20rpx;
		// background-color: #ededed;
		// padding: 2rpx 20rpx;
		// background-color: #fff;
	}

	.item {
		padding: 40rpx 20rpx;
		margin: 20rpx 20rpx;
		border: 1px solid #ededed;
		background-color: #fff;

		.top {
			display: flex;
			font-weight: bold;
			font-size: 34rpx;

			.phone {
				margin-left: 60rpx;
			}

			.tag {
				display: flex;
				font-weight: normal;
				align-items: center;

				text {
					display: block;
					width: 60rpx;
					height: 34rpx;
					line-height: 34rpx;
					color: #ffffff;
					font-size: 20rpx;
					border-radius: 6rpx;
					text-align: center;
					margin-left: 30rpx;
					background-color: rgb(49, 145, 253);
				}

				.red {
					background-color: red
				}
			}
		}

		.bottom {
			display: flex;
			margin-top: 20rpx;
			font-size: 28rpx;
			justify-content: space-between;
			color: #999999;
		}
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
