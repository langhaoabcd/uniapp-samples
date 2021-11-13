<template>
	<view>
		<view class="section">
			<u-subsection :list="list" bgColor="#cccccc" @change="sectionChange" :animation="true"
				:current="current"></u-subsection>
		</view>
		<view class="item" v-for="(res, index) in siteList" :key="res.id"
			style="display: flex;flex-direction: row; justify-content: space-between;">
			<view>
				<view class="top">
					<text class="name">{{ res.name }}</text>
					<text class="phone">{{ res.phone }}</text>
					<!-- 	<view class="tag">
						<text v-for="(item, index) in res.tag" :key="index"
							:class="{red:item.tagText=='默认'}">{{ item.tagText }}</text>
					</view> -->
				</view>
				<view class="bottom">
					广东省深圳市宝安区 自由路66号
				</view>
			</view>
			<view style="display: flex;align-items: center;">
				<u-icon @click="tapToEditSite(res.id)" name="edit-pen" :size="40" color="#999999"></u-icon>
			</view>
		</view>
		<view>
			projectId:{{projectId}} current:{{current}}
		</view>
		<view class="addSite" @tap="tapToAddSite">
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
				siteList: [],
				list: [{
						name: '发货地点'
					},
					{
						name: '收货地点'
					}
				],
				current: 0,
				projectId: null,
			};
		},
		onLoad: function(option) {
			this.current = option.type;
			this.projectId = option.projectId;
			this.getData(this.current);
		},
		methods: {
			sectionChange(index) {
				this.current = index;
				uni.setNavigationBarTitle({
					title: this.list[index].name
				})
				this.getData(this.current);
			},
			getData(i) {
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
			tapToAddSite() {
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
			tapToEditSite(id) {
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
			}
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
