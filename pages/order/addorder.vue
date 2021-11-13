<template>
	<view>
		<view class="order">
			<view
				style="padding: 20rpx 0rpx; border-bottom: 1rpx solid #e4e7ed;; display: flex;justify-content: space-between;">
				<text>项目名称</text>
				<text @click="showProject = true">上海大众-子项目A <u-icon name="arrow-right" color="#2979ff" size="28">
					</u-icon>
				</text>
			</view>
			<view style="padding: 20rpx 0rpx; display: flex;justify-content: space-between;">
				<text>驻场人员</text>
				<text @click="showWorker = true">请选择 <u-icon name="arrow-right" color="#2979ff" size="28"></u-icon>
				</text>
			</view>
		</view>
		<view class="order">
			<view style="display: flex;flex-direction: row;margin-top: 20rpx;">
				<view
					style="margin-right: 20rpx;display: flex;align-items: center;flex-direction: column;padding: 10rpx 0rpx;">
					<span
						style="width: 40rpx;height: 40rpx;background-color: #00aa00;display: inline-block;border-radius: 50%;font-size: 0.8rem;text-align: center;color: white;">发</span>
					<span style=" width: 1px;background-color: #00aa00;flex-grow: 1;"></span>
					<span
						style="width: 40rpx;height: 40rpx;background-color: #F29100;display: inline-block;border-radius: 50%;font-size: 0.8rem;text-align: center;color: white;">收</span>
				</view>
				<view style="border: 0px solid green;">
					<view style="width: 620rpx ;display: flex; justify-content: space-between;">
						<view>
							<view>发件人信息 {{sendAddress}}</view>
							<view style="padding-top: 10rpx;color: gray;">点击填写发件人信息</view>
						</view>
						<text @click="selectAddress(0)">地址簿 <u-icon name="arrow-right" color="#2979ff" size="28">
							</u-icon>
						</text>
					</view>
					<view style="margin-top: 30rpx;width: 620rpx ;display: flex; justify-content: space-between;">
						<view>
							<view>收件人信息 {{receiveAddress}}</view>
							<view style="padding-top: 10rpx;color: gray;">点击填写收件人信息</view>
						</view>
						<text @click="selectAddress(1)">地址簿 <u-icon name="arrow-right" color="#2979ff" size="28">
							</u-icon>
						</text>
					</view>

				</view>
			</view>
		</view>

		<view class="order">
			<view style="padding: 20rpx 0rpx;
				 display: flex;justify-content: space-between;align-items: center;">
				<text style="padding-right: 60rpx;">备注</text>
				<u-input v-model="remark" placeholder="请输入备注" :type="remarktype" :border="remarkborder" />
			</view>
		</view>
		<view style="padding: 30rpx;position: fixed;bottom: 0;width: 100%;">
			<u-button class="btn" type="primary" @click="save">创建订单</u-button>
		</view>
		<u-select v-model="showWorker" :list="list" @confirm="confirmWorker"></u-select>
		<u-select v-model="showProject" :list="list" @confirm="confirmProject"></u-select>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showWorker: false,
				showProject: false,
				remark: '',
				remarktype: 'text',
				remarkborder: false,
				form: {
					name: '',
					sex: '',
					username: '',
					password: '',
					yspwd: '',
					radio: '开启',
					projectId: '333',
				},
				radioList: [{
						name: '开启',
						disabled: false
					},
					{
						name: '禁用',
						disabled: false
					}
				],
				list: [{
						value: '1',
						label: '捆'
					},
					{
						value: '2',
						label: '托'
					}
				],
				receiveAddress: '',
				sendAddress: '',
			};
		},
		onLoad() {
			console.log('全局变量$switchOrder:',getApp().globalData.$switchOrder)
		},
		methods: {
			save() {
				getApp().globalData.$switchOrder = true;
				uni.switchTab({
					url:'/pages/order/index'//不能待参数
				});
			},
			confirmWorker(e) {
				console.log(e);
			},
			confirmProject(e) {
				console.log(e);
			},
			selectAddress(e) {
				const that = this;
				uni.navigateTo({
					url: '/pages/my/address/select?projectId=' + that.form.projectId + '&type=' + e,
					events: {
						// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
						acceptDataFromOpenedPage: function(data) {
							console.log('接受--参数', data)
							const res = JSON.parse(decodeURIComponent(data.data));;
							if (data.type == 0) {
								that.sendAddress = res.name;
							} else {
								that.receiveAddress = res.name;
							}
						}
					},
				});
			}
		}
	};
</script>
<style lang="scss">
	// .btn {
	// 	position:fixed; bottom:0;
	// }

	page {
		background-color: #ededed;
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
</style>
