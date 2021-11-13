<template>
	<view class="qiun-columns">
		
			<u-form-item class="slect" left-icon="home-fill" right-icon="arrow-down" label-width="250" height="50">
				<text>青州仓库</text>
			</u-form-item>
		
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
			<view class="qiun-title-dot-light">仓库使用情况</view>
		</view>
		<view class="qiun-charts">
			<canvas canvas-id="canvasPie" id="canvasPie" class="charts" @touchstart="touchPie"></canvas>
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
			<view class="qiun-title-dot-light">出入仓库情况</view>
		</view>
		<view class="qiun-charts">
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA"></canvas>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts/u-charts.js';

	var canvaPie = null;
	var canvaLineA = null
	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				serverData: '',
			}
		},
		onLoad() {

			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.getServerData();
			this.getcanvaline()
		},
		methods: {
			getcanvaline() {
				let chartData = {
					categories: ['1月', '2月','3月', '4月', '5月', '6月', '7月', '8月','9月', '10月', '11月', '12月',],
					series: [{
						name: '出库量',
						data: [35, 20, 25, 37, 4, 20,60,30,50,5,30,30],
						color: '#000000'
					}, {
						name: '入库量',
						data: [70, 40, 65, 100, 44, 68,90,80,60,25,60]
					}]
				}
				this.showLineA("canvasLineA", chartData);
			},
			showLineA(canvasId,chartData){
							canvaLineA=new uCharts({
								$this:this,
								canvasId: canvasId,
								type: 'line',
								fontSize:11,
								legend:{show:true},
								dataLabel:false,
								dataPointShape:true,
								background:'#FFFFFF',
								pixelRatio:this.pixelRatio,
								categories: chartData.categories,
								series: chartData.series,
								animation: true,
								xAxis: {
									type:'grid',
									gridColor:'#CCCCCC',
									gridType:'dash',
									dashLength:8
								},
								yAxis: {
									gridType:'dash',
									gridColor:'#CCCCCC',
									dashLength:8,
									splitNumber:5,
									min:10,
									max:180,
									format:(val)=>{return val.toFixed(0)+'m³'}
								},
								width: this.cWidth*this.pixelRatio,
								height: this.cHeight*this.pixelRatio,
								extra: {
									line:{
										type: 'straight'
									}
								}
							});
							
						},
						touchLineA(e) {
							canvaLineA.showToolTip(e, {
								format: function (item, category) {
									return category + ' ' + item.name + ':' + item.data 
								}
							});
						},
			
			getServerData() {
				let Pie = {
					"series": [{
						"name": "小麦",
						"data": 50
					}, {
						"name": "玉米",
						"data": 30
					}, {
						"name": "小米",
						"data": 20
					}, {
						"name": "面粉",
						"data": 18
					}, {
						"name": "大豆",
						"data": 8
					}]
				};
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去

				this.showPie("canvasPie", Pie);
			},
			showPie(canvasId, chartData) {
				canvaPie = new uCharts({
					$this: this,
					canvasId: canvasId,
					type: 'pie',
					fontSize: 11,
					legend: {
						show: true
					},
					background: '#FFFFFF',
					pixelRatio: this.pixelRatio,
					series: chartData.series,
					animation: true,
					width: this.cWidth * this.pixelRatio,
					height: this.cHeight * this.pixelRatio,
					dataLabel: true,
					extra: {
						pie: {
							lableWidth: 15
						}
					},
				});
			},
			touchPie(e) {
				canvaPie.showToolTip(e, {
					format: function(item) {
						return item.name + ':' + item.data
					}
				});
			},
		}
	}
</script>

<style>
	
	page {
		background: #F2F2F2;
		width: 750upx;
		overflow-x: hidden;
	}

.slect{
	height: 80rpx;width: 100%;padding: 0rpx 10rpx;
	align-items: center;justify-content: center;
}

	.qiun-padding {
		padding: 2%;
		width: 96%;
	}

	.qiun-wrap {
		display: flex;
		flex-wrap: wrap;
	}

	.qiun-rows {
		display: flex;
		flex-direction: row !important;
	}

	.qiun-columns {
		display: flex;
		flex-direction: column !important;
	}

	.qiun-common-mt {
		margin-top: 10upx;
	}

	.qiun-bg-white {
		background: #FFFFFF;
	}

	.qiun-title-bar {
		width: 100%;
		padding: 10upx 2%;
		flex-wrap: nowrap;
	}

	.qiun-title-dot-light {
		border-left: 10upx solid #0ea391;
		padding-left: 10upx;
		font-size: 32upx;
		color: #000000
	}

	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
</style>
