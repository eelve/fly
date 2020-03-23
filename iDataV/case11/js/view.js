//数字变化特效
function rollNum(elId, startVal, endVal, decimalNum) {
    let n = decimalNum || 0;
    let countUp = new CountUp(elId, startVal, endVal, n, 2.5, {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.'
    });
    if(!countUp.error) {
        countUp.start();
    }else {
        console.error(countUp.error);
    }
}
/*********** ECharts报表 **********/
const topLeft = echarts.init(document.getElementById("topLeft"));
//const topCenter = echarts.init(document.getElementById("topCenter"));
const topRight = echarts.init(document.getElementById("topRight"));
const downRigth = echarts.init(document.getElementById("downRigth"));
const downLeft1 = echarts.init(document.getElementById("downLeft1"));
const downLeft2 = echarts.init(document.getElementById("downLeft2"));
const downLeft3 = echarts.init(document.getElementById("downLeft3"));
const downLeft4 = echarts.init(document.getElementById("downLeft4"));

var timer = null


function topLeftView() {
    //初始化图表
    const topLeftOpt  = {
        legend : {
            top : '0%',
            left : '40%',
            itemWidth : 12,
            itemHeight : 12,
            icon : 'horizontal',
            textStyle : {
                color : '#ffffff',
                fontSize : 14,
            },
            data: ['均值', '峰值']
        },
        // tooltip（提示框组件）
        tooltip: {
            //trigger(触发类型)，可选'item','axis','none'
            trigger: 'axis',
            axisPointer: {
                //指示器类型,可选'line','shadow','cross'
                type: 'shadow'
            },
        },
        //echarts图表的相对于容器的布局,

        xAxis: [{
            type: 'value',
            splitLine: {
                show: true,
            },
            //axisTick 坐标轴刻度相关设置
            axisTick: {
                show: false
            },
            //axixLine 坐标轴轴线相关设置
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#FFFFFF',
                }
            },
            //axisLabel 坐标轴刻度标签的相关设置
            axisLabel: {
                show: true,
            }
        }, ],
        yAxis: [{
            type: 'category',
            data: ['CPU', '内存', '网络', '磁盘', 'XX','XX'],
            axisLabel: {
                show: true,
                color: '#fff',
                fontSize: 14,
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                },
            },
            axisTick: {
                show: false
            },
        }, {
            type: 'category',
            data: [],
            axisLabel: {
                show: false,
                color: '#fff',
                fontSize: 14,
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                },
            },
            axisTick: {
                show: false
            },
        }, ],
        series: [{
            name: '均值',
            type: 'bar',
            data: [20, 30, 10, 25, 20,20],
            barWidth: '40%',
            z: 2,
            itemStyle: {
                barBorderRadius: 50,
                color: 'rgba(81,255,174,1)',
            },
        },
            {
                name: '峰值',
                type: 'bar',
                data: [30, 40, 50, 60, 70,30],
                barWidth: '40%',
                // barGap 不同系列的柱间距离
                barGap: '-100%',
                z: 1,
                itemStyle: {
                    //barBorderRadius bar圆角半径
                    barBorderRadius: 50,
                    color: 'rgba(0,191,252,1)',
                },
            },
            {

                type: 'bar',
                yAxisIndex: 1,
                data: [100, 100, 100, 100, 100,100],
                barWidth: '40%',
                z: 0,
                itemStyle: {
                    barBorderRadius: 50,
                    color: 'rgba(255,255,255,0.2)',
                },
            },
        ]
    };
    topLeft.setOption(topLeftOpt);
}

function topCenterView() {
    rollNum("1", 0, 11);
    rollNum("2", 0, 13);
    rollNum("3", 0, 12, 2);
    rollNum("4", 0, 10, 2);
    rollNum("5", 0, 2, 2);
    rollNum("6", 0, 3, 2);
    rollNum("7", 0, 12);
    rollNum("8", 0, 3);
    rollNum("9", 0, 12);
    rollNum("10", 0, 3);
    rollNum("11", 0, 12);
    rollNum("12", 0, 3);

}

function topRightView() {
//图表配置项
    const topRightOpt  = {
        title: {
            text: '',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#F1F1F3'
            },
            left: '6%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['告警'],
            left: '4%',
            textStyle: {
                fontSize: 12,
                color: '#F1F1F3'
            }
        },

        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            data: ['3.1', '3.2', '3.3','3.4', '3.5', '3.6','3.7','3.8', '3.9', '3.10','3.11', '3.12', '3.13','3.14']
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }],
        series: [{
            name: '告警',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(219, 50, 51, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(219, 50, 51, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(219,50,51)'
                }
            },
            data: [12,10,6,21,7,8,9,8,7,6,9,10,12,10,6,21,7,8,9,8,7,6,9,10]
        }, ]
    };
    topRight.setOption(topRightOpt);
}

function downRigthView() {
//图表配置项
    const downRigthOpt  = {
        title: {
            text: '',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#F1F1F3'
            },
            left: '6%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['CPU利用率(%)', '内存利用率(%)', '磁盘利用率(%)'],
            right: '4%',
            textStyle: {
                fontSize: 12,
                color: '#F1F1F3'
            }
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            data: ['3.1', '3.2', '3.3','3.4', '3.5', '3.6','3.7']
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }],
        series: [{
            name: 'CPU利用率(%)',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(137, 189, 27, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(137, 189, 27, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(137,189,27)'
                }
            },
            data: [96.3,96.4,97.5,95.6,98.1,94.8,89.6,94.1,80.1,52.4,75.8,94.7]
        }, {
            name: '内存利用率(%)',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 136, 212, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0, 136, 212, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(0,136,212)'
                }
            },
            data: [97.3,99.2,99.3,100.0,99.6,90.6,80.0,91.5,69.8,67.5,90.4,84.9]
        }, {
            name: '磁盘利用率(%)',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(219, 50, 51, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(219, 50, 51, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(219,50,51)'
                }
            },
            data: [84.2,81.0,67.5,72.1,43.7,88.5,91.9,91.8,79.7,87.6,92.9,0]
        }, ]
    };
    const downRigthOpt2  = {
        title: {
            text: '',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#F1F1F3'
            },
            left: '6%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['网络延时(ms)'],
            left: '4%',
            textStyle: {
                fontSize: 12,
                color: '#F1F1F3'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            data: ['3.1', '3.2', '3.3','3.4', '3.5', '3.6','3.7']
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }],
        series: [{
            name: '网络延时(ms)',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(137, 189, 27, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(137, 189, 27, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(137,189,27)'
                }
            },
            data: [110,119,97,56,81,48,86,41,81,54,78,47]
        } ]
    };
//渲染图表
    downRigth.setOption(downRigthOpt);
    var flag = false;
    timer = setInterval(function () {
        if(flag){
            downRigth.clear();
            downRigth.setOption(downRigthOpt);
            flag = false;
        }else {
            downRigth.clear();
            downRigth.setOption(downRigthOpt2);
            flag = true;
        }
    }, 10000);

}

function downLeftView() {
    const colorArray = [
        {
            top: '#ffa800', //黄
            bottom: 'rgba(11,42,84,.3)'
        }, {
            top: '#1ace4a', //绿
            bottom: 'rgba(11,42,84, 0.3)'
        },
        {
            top: '#4bf3ff', //蓝
            bottom: 'rgba(11,42,84,.3)'
        }, {
            top: '#4f9aff', //深蓝
            bottom: 'rgba(11,42,84,.3)'
        },
        {
            top: '#b250ff', //粉
            bottom: 'rgba(11,42,84,.3)'
        }
    ];
    const downLeftOpt = {
        //backgroundColor: 'rgba(128, 128, 128, 0.1)',
        title: {
            text: 'TopN',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#F1F1F3'
            },
            left: '40%',
            top: '2%'
        },
        tooltip: {
            show: true,
            formatter: "{b}:{c}"
        },
        grid: {
            left: '5%',
            top: '12%',
            right: '2%',
            bottom: '8%',
            containLabel: true
        },

        xAxis: {
            type: 'value',
            show:false,
            position: 'top',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                }
            },
            splitLine: {
                show: false
            },
        },
        yAxis: [{
            type: 'category',
            axisTick: {
                show: false,
                alignWithLabel: false,
                length: 5,

            },
            "splitLine": { //网格线
                "show": false
            },
            inverse: 'true', //排序
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                }
            },
            data: ['first', 'two', 'three', 'four', 'five','six', 'seven', 'eight', 'nine', 'ten']
        }

        ],
        series: [{
            name: '排行榜',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{c}',
                    textStyle: {
                        color: 'white' //color of value
                    }
                }
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: function(params) {
                        let num = colorArray.length;
                        return {
                            type: 'linear',
                            colorStops: [{
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }],
                            //globalCoord: false
                        }
                    },
                    barBorderRadius: 70,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: [132, 108, 100, 98, 80,72, 68, 60, 48, 38]
        }

        ]
    };
    downLeft1.setOption(downLeftOpt);
    downLeft2.setOption(downLeftOpt);
    downLeft3.setOption(downLeftOpt);
    downLeft4.setOption(downLeftOpt);
}

function dataView(){
    clearInterval(timer);
    topLeftView();
    topRightView();
    downRigthView();
    downLeftView();
    topCenterView();
}

//添加自适应效果
window.onresize = function(){
     topLeft.resize();
     //topCenter.resize();
     topRight.resize();
     downRigth.resize();
     downLeft1.resize();
     downLeft2.resize();
     downLeft3.resize();
     downLeft4.resize();
}
