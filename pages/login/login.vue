<!-- 蓝色登录页面2 -->
<template>
	<view>
		<view class="img-a">
			<view class="t-b">
				您好，
				<br />
				欢迎使用达奇物流管理系统
			</view>
		</view>
		<view class="login-view" style="">
			<view class="t-login">
				<form class="cl">
					<view class="t-a">
						<text class="txt">手机号</text>
						<input type="number" name="phone" placeholder="请输入您的手机号" maxlength="11" v-model="phone" />
					</view>
					<view class="t-a">
						<text class="txt">验证码</text>
						<view style="display: flex;justify-content:space-around">
						<input type="password" name="code" maxlength="18" placeholder="请输入验证码" v-model="pwd" />
						<u-verification-code :keep-running="true" :seconds="seconds" @end="end" @start="start" ref="uCode"
						@change="codeChange" :startText="startText" :changeText="changeText" 
						:endText="endText"></u-verification-code>
						<u-button style="font-size: 26rpx;" class="button" @click="getCode">{{tips}}</u-button>
						</view>
					</view>
					<button class="button" @tap="login()">登 录</button>
					
				</form>
				
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			phone: '15900672334', //手机号码
			pwd: '123456', //密码
			tips: '',
			seconds: 60,
			refCode: null,
			startText: '获取验证码',
			changeText: 'X秒重新获取',
			endText: '重新获取'
		};
	},
	methods: {
		//当前登录按钮操作
		login() {
			var that = this;
			if (!that.phone) {
				uni.showToast({ title: '请输入您的手机号', icon: 'none' });
				return;
			}
			if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(that.phone)) {
				uni.showToast({ title: '请输入正确手机号', icon: 'none' });
				return;
			}
			if (!that.pwd) {
				uni.showToast({ title: '请输入您的密码', icon: 'none' });
				return;
			}
			uni.switchTab({
			    url: '/pages/order/index'
			});
			
			// this.$apis.login({
			//         username: this.phone,
			//         password: this.pwd
			//     }).then(res=>{
			// 		console.log(222,res)
			// 		if(res.code === 0) {
			// 		    // 2.8.0版本起调整为蛇形uni_id_token（调整后在一段时间内兼容驼峰uniIdToken）
			// 		    uni.setStorageSync('uni_id_token',res.token)
			// 		    uni.setStorageSync('uni_id_token_expired', res.tokenExpired)
			// 		    // 其他业务代码，如跳转到首页等
			// 		    uni.showToast({ title: '登录成功！', icon: 'none' });
			// 		    uni.switchTab({
			// 		        url: '/pages/order/index'
			// 		    });
			// 		}
			// 	})
		},
		codeChange(text) {
			// console.log(text);
			this.tips = text;
		},
		getCode() {
			var that = this;
			if (!that.phone) {
				uni.showToast({ title: '请输入您的手机号', icon: 'none' });
				return;
			}
			if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(that.phone)) {
				uni.showToast({ title: '请输入正确手机号', icon: 'none' });
				return;
			}
			if(this.$refs.uCode.canGetCode) {
				// 模拟向后端请求验证码
				uni.showLoading({
					title: '正在获取验证码'
				})
				setTimeout(() => {
					uni.hideLoading();
					// 这里此提示会被this.start()方法中的提示覆盖
					this.$u.toast('验证码已发送');
					// 通知验证码组件内部开始倒计时
					this.$refs.uCode.start();
				}, 2000);
			} else {
				this.$u.toast('倒计时结束后再发送');
			}
		},
		end() {
			// this.$u.toast('倒计时结束');
		},
		start() {
			// this.$u.toast('倒计时开始');
		}
	}
};
</script>
<style>
.txt {
	font-size: 32rpx;
	font-weight: bold;
	color: #333333;
}
.img-a {
	width: 100%;
	height: 450rpx;
	background-image: url(../../static/head.png);
	background-size: 100%;
}
.reg {
	font-size: 28rpx;
	color: #fff;
	height: 90rpx;
	line-height: 90rpx;
	border-radius: 50rpx;
	font-weight: bold;
	background: #f5f6fa;
	color: #000000;
	text-align: center;
	margin-top: 30rpx;
}

.login-view {
	width: 100%;
	position: relative;
	margin-top: -120rpx;
	background-color: #ffffff;
	border-radius: 8% 8% 0% 0;
}

.t-login {
	width: 600rpx;
	margin: 0 auto;
	font-size: 28rpx;
	padding-top: 80rpx;
}

.t-login .button {
	font-size: 28rpx;
	background: #2796f2;
	color: #fff;
	height: 90rpx;
	line-height: 90rpx;
	border-radius: 50rpx;
	font-weight: bold;
}

.t-login input {
	height: 90rpx;
	line-height: 90rpx;
	margin-bottom: 50rpx;
	border-bottom: 1px solid #e9e9e9;
	font-size: 28rpx;
}

.t-login .t-a {
	position: relative;
}

.t-b {
	text-align: left;
	font-size: 42rpx;
	color: #ffffff;
	padding: 130rpx 0 0 70rpx;
	font-weight: bold;
	line-height: 70rpx;
}

.t-login .t-c {
	position: absolute;
	right: 22rpx;
	top: 22rpx;
	background: #5677fc;
	color: #fff;
	font-size: 24rpx;
	border-radius: 50rpx;
	height: 50rpx;
	line-height: 50rpx;
	padding: 0 25rpx;
}

.t-login .t-d {
	text-align: center;
	color: #999;
	margin: 80rpx 0;
}

.t-login .t-e {
	text-align: center;
	width: 250rpx;
	margin: 80rpx auto 0;
}

.t-login .t-g {
	float: left;
	width: 50%;
}

.t-login .t-e image {
	width: 50rpx;
	height: 50rpx;
}

.t-login .t-f {
	text-align: center;
	margin: 150rpx 0 0 0;
	color: #666;
}

.t-login .t-f text {
	margin-left: 20rpx;
	color: #aaaaaa;
	font-size: 27rpx;
}

.t-login .uni-input-placeholder {
	color: #aeaeae;
}

.cl {
	zoom: 1;
}

.cl:after {
	clear: both;
	display: block;
	visibility: hidden;
	height: 0;
	content: '\20';
}
</style>
