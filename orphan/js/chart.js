var chart = echarts.init(document.getElementById('number'));
var
    option = {
        title: {
            text: '美国收养孩子数量',
            grid: {


                x: 200,
                x2: 100,
                y: 100
            }
        },
        tooltip: {
            trigger: 'axis'
        },

        legend: {
            data: ['数量'],
            x: '180'
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {
                    show: true,
                    readOnly: false
                },
                magicType: {
                    show: true,
                    type: ['line']
                },

                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        xAxis: [{
            name: '年份',
            type: 'category',
            data: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']

        }],

        yAxis: [{
            type: 'value',
            axisLabel: {
                inside: true
            }

        }],

        series: [{
            name: '数量',
            type: 'bar',
            data: [61, 206, 330, 787, 2130, 3333, 3597, 4206, 4101, 5053, 4681, 6119, 6859, 7044, 7906, 6493, 5453, 3909, 3000, 3401, 2587, 2696, 2306, 2040, 2354, 2231],
            itemStyle: {
                normal: {
                    color: '#AA0000'
                },
                markPoint: {
                    color: 'blue'
                }
            },
            markPoint: {
                data: [{
                    type: 'max',
                    name: '最大值'
                }, {
                    type: 'min',
                    name: '最小值'
                }]
            },
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        }]
    };



chart.setOption(option);
$(window).on('resize', function() {
    if (chart != null && chart != undefined) {
        chart.resize();
        console.log(chart);
    }
});