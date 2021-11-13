<template>
	<view>
		<view class="header">
			<u-avatar :src="src" show-level></u-avatar>
			<text>驻场员—张三</text>
		</view>
		<u-cell-group>
			<u-cell-item icon="order" title="我的项目" @click="$u.route('/pages/my/project')"></u-cell-item>

			<view class="" style="height: 10rpx;background-color: #E4E7ED;"></view>

			<u-cell-item icon="setting" title="创建订单" @click="$u.route('/pages/order/addorder')"></u-cell-item>
			<u-cell-item icon="setting" title="订单记录" @click="$u.route('/pages/my/log/orderLog')"></u-cell-item>
			<u-cell-item icon="order" title="装车记录" @click="$u.route('/pages/my/log/log')"></u-cell-item>

			<!-- <u-cell-item icon="map" title="收货地址" ></u-cell-item> -->
			<!-- 	<u-cell-item icon="integral" title="会员等级" @click="reg" value="新版本"></u-cell-item> -->
		</u-cell-group>
		<view class="btn_main">
			<u-button class="btn" shape="circle" @click="show_w=true">退出登录</u-button>
		</view>
		<u-modal v-model="show_w" @confirm="logout" :content="content" show-cancel-button></u-modal>
	</view>
</template>

<script>
	import * as userService from '@/services/api/user.service.js';
	export default {
		data() {
			return {
				content: '是否退出登录？',
				show_w: false,
				src: '../../static/img/tx.jpg',

				phone: '13045678902',
				pwd: '123456',
			}
		},
		methods: {
			getData() {
				// userService.sysconfigs().then((res) => {
				// 	this.swaper.list= res.data.data.swappers
				// });
			},
			//注册
			reg() {
				return
				uniCloud.callFunction({
					name: 'user',
					data: {
						action: 'user/register',
						username: this.phone,
						password: this.pwd
					},
					success(res) {
						console.log(111, res)
						if (res.result.code === 0) {
							// 2.8.0版本起调整为蛇形uni_id_token（调整后在一段时间内兼容驼峰uniIdToken）
							uni.setStorageSync('uni_id_token', res.result.token)
							uni.setStorageSync('uni_id_token_expired', res.result.tokenExpired)
							// 其他业务代码，如跳转到首页等
							uni.showToast({
								title: '注册成功',
								icon: 'none'
							})
						} else {
							uni.showModal({
								content: res.result.message,
								showCancel: false
							})
						}
					},
					fail() {
						uni.showModal({
							content: '注册失败，请稍后再试',
							showCancel: false
						})
					}
				})
			},
			logout() {
				this.$u.route('/pages/login/login')
				// uniCloud.callFunction({
				// 	name: 'user',
				// 	data: {
				// 		action: 'user/logout',
				// 		uniIdToken: uni.getStorageSync('uni_id_token')
				// 	},
				// 	success: (res) => {
				// 		if (res.result.code === 0) {
				// 			// 2.8.0版本起调整为蛇形uni_id_token（调整后在一段时间内兼容驼峰uniIdToken）
				// 			uni.removeStorageSync('uni_id_token')
				// 			uni.removeStorageSync('uni_id_token_expired')
				// 			// 其他业务代码，如跳转到首页等
				// 			uni.showToast({
				// 				title: '退出成功',
				// 				icon: 'none'
				// 			})
				// 		} else {
				// 			uni.showModal({
				// 				content: res.result.message,
				// 				showCancel: false
				// 			})
				// 		}
				// 		this.$u.route('/pages/login/login')
				// 	},
				// 	fail() {
				// 		uni.showModal({
				// 			content: '退出失败，请稍后再试',
				// 			showCancel: false
				// 		})
				// 	}
				// })

			}
		}
	}
</script>

<style>
	.btn {
		width: 300rpx;
	}

	.btn_main {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 100%;
		padding: 10rpx;
	}

	.header {
		height: 260rpx;
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: center;
		align-items: center;
	}
</style>
