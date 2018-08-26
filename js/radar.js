var dom = document.getElementById("skills");
var myChart = echarts.init(dom);
var app = {};
window.onresize = function(){
	myChart.resize();
}


option = null;
option = {
	title: {
		text: ''
	},

	legend: {
		orient : 'horizontal',
		center: ['50%','50%'],
		data: ['']
	},

	radar: {
		// shape: 'circle',
		name: {
			textStyle: {
				color: '#fff',
				backgroundColor: 'black',
				borderRadius: 2,
				padding: [3, 5]
			}
		},
		indicator: [
			{name: 'HTML', max: 3},
			{name: 'CSS', max: 5},
			{name: 'JS', max: 10},
			{name: 'jQUERY', max: 8},
			{name: 'VUE', max: 15},
			{name: 'WEBPACK', max: 15}
		]
	},
	series: [{
		name: '',
		type: 'radar',
		data: [
			{
				value: [2, 3, 7, 5, 10, 10],
				name: ''
			}
		]
	}]

};
if (option && typeof option === "object") {
	myChart.setOption(option, true);
}


