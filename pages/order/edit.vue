<template>
	<view>
		<view class="order">
			<view style="display: flex;justify-content: space-between;">
				<text style="font-weight: bold;">订单信息</text>
				<view style="color:#F29100;">待测量</view>
			</view>
			<view style="margin-top: 20rpx;"><text class="gray">项目名称：</text>上海大众项目</view>
			<view style="padding-top: 20rpx;"><text class="gray">订单类型：</text>STK</view>
			<view style="padding-top: 20rpx;"><text class="gray">订单编号：</text>202012123122</view>
			<view style="padding-top: 20rpx;"><text class="gray">下单时间：</text>2021-10-20 1010:10</view>
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

		<!-- <scroll-view scroll-y style="height: 100%;width: 100%;"> -->
		<view class="order" style="margin-bottom: 200rpx;">
			<view style="margin-bottom: 20rpx;">
				<text style="font-weight: bold;">货物信息 (3)</text>
			</view>
			<!-- <view> -->
			<view @click="btnEditClick(1)"
				style="border: 3rpx solid #ededed; padding: 20rpx 5rpx;margin-bottom: 20rpx;display: flex;flex-direction: row;justify-content: space-between;">
				<view style="padding-left: 10rpx;">
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
				<view
					style="display: flex;align-items: center;padding-right: 10rpx;flex-direction: column;justify-content: center;">
					<text class="gray">车辆</text>
					<view>沪FG3205</view>
				</view>
			</view>

			<view style="margin-top: 50rpx;">
				<u-button type="primary" @click="btnAddClick">添加货物</u-button>
			</view>
			<u-popup v-model="showAddGoods" :closeable="true" mode="bottom" length="70%">
				<view class="order">
					<text style="font-weight: bold;font-size: 1.2rem">{{title}}货物</text>
					<u-form :model="form" label-width="150rpx" ref="uForm">
						<u-form-item label="货物名" prop="name">
							<u-input v-model="form.name" />
						</u-form-item>
						<u-form-item label="选择车辆">
							<u-input v-model="form.trunk" type="select" />
						</u-form-item>
						<u-form-item label="装载位置">
							<u-input v-model="form.position" type="select" />
						</u-form-item>
						<u-form-item label="数量">
							<view
								style="display: flex;flex-direction: row;align-items: center;justify-content: space-between;">
								<view style="width: 400rpx; padding-right: 100rpx;">
									<u-number-box :min="num_min" input-width="80rpx" size="40rpx" v-model="value"
										@change="valChange"></u-number-box>
								</view>
								<u-button size="mini" @click="showUnit = true">托</u-button>
							</view>
						</u-form-item>
						<u-form-item label="长度">
							<view
								style="padding-right: 10rpx;display: flex;align-items: center; justify-content: space-between;">
								<view style="width: 400rpx; padding-right: 20rpx;">
									<u-slider v-model="ckg" :step="num_step" :min="num_min" :max="num_max"></u-slider>
								</view>
								<u-button size="mini" @click="showUnit = true">{{ckg}} 米</u-button>
							</view>
						</u-form-item>
						<u-form-item label="高度">
							<view
								style="padding-right: 10rpx; display: flex;align-items: center; justify-content: space-between;">
								<view style="width: 400rpx;padding-right: 20rpx;">
									<u-slider v-model="ckg" :step="num_step" :min="num_min" :max="num_max"></u-slider>
								</view>
								<u-button size="mini" @click="showUnit = true">{{ckg}} 米</u-button>
							</view>
						</u-form-item>
						<u-form-item label="宽度">
							<view
								style="padding-right: 10rpx;display: flex;align-items: center; justify-content: space-between;">
								<view style="width: 400rpx;padding-right: 20rpx;">
									<u-slider v-model="ckg" :step="num_step" :min="num_min" :max="num_max"></u-slider>
								</view>
								<u-button size="mini" @click="showUnit = true">{{ckg}} 米</u-button>
							</view>
						</u-form-item>
						<u-form-item label="重量">
							<view
								style="padding-right: 10rpx;display: flex;align-items: center; justify-content: space-between;">
								<view style="width: 400rpx;padding-right: 20rpx;">
									<u-slider v-model="ckg" :step="num_step" :min="num_min" :max="num_max"></u-slider>
								</view>
								<u-button size="mini" @click="showUnit = true">{{ckg}} KG</u-button>
							</view>
						</u-form-item>
					</u-form>
					<view style="margin-top: 10rpx;">
						<u-button type="primary" @click="btnAddSubmit">保存</u-button>
					</view>
				</view>
			</u-popup>
			<u-select v-model="showUnit" :list="list" @confirm="confirmUnit"></u-select>
		</view>
		<text>id:{{id}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showAddGoods: false,
				title: '添加',
				showUnit: false,
				value: 1,
				activeColor: '#2979ff',
				id:'',
				ckg: 0,
				showNumKeyboard: false,
				num_step: 1,
				num_min: 0,
				num_max: 100,
				form: {
					name: '',
					trunk: '',
					position: '',
					ckg: 1,
				},
				rules: {
					name: [{
						required: true,
						message: '请输入姓名',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}],
					trunk: [{
						min: 5,
						message: '简介不能少于5个字',
						trigger: 'change'
					}]
				},
				list: [{
						value: '1',
						label: '捆'
					},
					{
						value: '2',
						label: '托'
					}
				],
			}
		},
		onLoad: function(option) {
			console.log('页面参数', option);
			this.id = option.id;
		},
		methods: {
			btnAddClick() {
				this.title = '添加';
				this.showAddGoods = true;
			},
			btnEditClick(i) {
				console.log(i);
				this.title = '编辑';
				this.showAddGoods = true;
			},
			btnAddSubmit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
					} else {
						console.log('验证失败');
					}
				});
			},
			valChange(e) {
				console.log('当前值为: ' + e.value)
			},
			confirmUnit(e) {
				console.log(e);
			}
		},
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules);
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

	.badge-button {
		padding: 4rpx 6rpx;
		background-color: $u-type-error;
		color: #fff;
		border-radius: 10rpx;
		font-size: 22rpx;
		line-height: 1;
	}
</style>
