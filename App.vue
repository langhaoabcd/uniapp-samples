<script>
	export default {
		globalData: {
			$switchOrder: false,  //是否切换到订单Tab
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
		@import "uview-ui/index.scss";
</style>
