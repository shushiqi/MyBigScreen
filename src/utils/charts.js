import echarts from "echarts"
// import "echarts-wordcloud"
const colorArray = ['#0267D6', '#52FBF9', '#86CC0F', '#544FE7', '#FEC215', '#FD8D0F', '#69A875', '#3013CA', '#90239E', '#546570']
export default function charts(id, chartinitData) {
  if (chartinitData != "" && chartinitData != undefined) {
    switch (chartinitData.seriesType) {
      case "line":
        renderLineChart(id, chartinitData)
        break;
      case "bar":
        renderBarChart(id, chartinitData)
        break;
      case "pie":
        renderPieChart(id, chartinitData)
        break;
      case "doughnut":
        renderDoughnutChart(id, chartinitData)
        break;
      case "wordcloud":
        renderWordCloudChart(id, chartinitData)
        break
      default:
        break;
    }

  }

}

// 折线图
function renderLineChart(id, chartinitData) {
  let myChart = echarts.init(document.getElementById(id))
  chartinitData.series.forEach(function (item, index) {
    Object.assign(item, {
      type: "line",
      smooth: chartinitData.seriesLineSmooth ? chartinitData.seriesLineSmooth : true,
      itemStyle: {
        normal: {
          lineStyle: {
            width: 3,
            // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            //     offset: 0,
            //     color: "rgba(45,105,249,1)",
            //   },
            //   {
            //     offset: 1,
            //     color: "rgba(89,205,253,1)",
            //   },
            // // ]),
          },

        },
      },
      // areaStyle: {
      //   opcity: 0.1
      // }
    })
  })
  let option = {
    color: colorArray,
    legend: {
      show: chartinitData.legend ? chartinitData.legend.show : false,
      top: "auto",
      // left: "center",
      textStyle: {
        color: "#ffffff"
      }
    },
    xAxis: {
      type: "category",
      data: chartinitData.xAxis.data,
      boundaryGap: false,
      splitLine: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "#39537a",
        },
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#fff",
        },
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "#39537a",
        },
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#fff",
        },
      },
    },
    grid: {
      left: 75
    },
    tooltip: {
      transitionDuration: 0,
      show: true,
      trigger: 'axis'
    },
    series: chartinitData.series,
    textStyle: {
      color: "#FFFFFF",
    }
  }
  if (chartinitData.legend) {
    option.legend = chartinitData.legend
  }
  myChart.setOption(option);

}

// 柱状图
function renderBarChart(id, chartinitData) {
  let myChart = echarts.init(document.getElementById(id))
  if (typeof chartinitData.series == "undefined") {
    chartinitData.series = [{}]
  }
  chartinitData.series.forEach(function (item, index) {
    let BarBorderRadius = 0
    Object.assign(item, {
      data: chartinitData.data,
      type: 'bar',
      barWidth: "40%",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#00FDDE'
            },
            {
              offset: 0.5,
              color: '#0090F2'
            },
            {
              offset: 1,
              color: '#004FFE'
            }
          ]),
        },
      },

    })
  })
  let option = {
    color: colorArray,
    xAxis: {
      type: 'category',
      data: chartinitData.xAxisData,
      scale: true
    },
    yAxis: {
      type: 'value',
      show: false
    },
    tooltip: {
      transitionDuration: 0,
      show: true,
    },
    grid: {
      right: '15%',
      left: 100,
    },
    legend: {
      // orient: "vertical",
      // right: 10,
      bottom: 10,
      textStyle: {
        color: "#ffffff",
      },
    },
    series: chartinitData.series,
    textStyle: {
      color: "#ffffff"
    }
  }
  if (chartinitData.legend) {
    option.legend = chartinitData.legend
  }
  if (chartinitData.align && chartinitData.align == "horizontal") {
    option.xAxis = {
      type: "value",
      splitLine: {
        show: false
      },
      // scale: true,
      axisLabel: {
        formatter: function (params) {
          console.log(params);
          if (params > 10000) {
            return params / 10000 + "万"
          } else {
            return params
          }
        }
      }
    }
    option.yAxis = {
      type: 'category',
      data: chartinitData.yAxisData,
    }
  }
  if (chartinitData.grid) {
    option.grid = chartinitData.grid
  }
  myChart.setOption(option);

}

// 饼图
function renderPieChart(id, chartinitData) {
  let myChart = echarts.init(document.getElementById(id))
  myChart.setOption({
    // color: colorArray,
    tooltip: {
      transitionDuration: 0,
      trigger: "item",
      formatter: "{b} : {c} ({d}%)",
    },
    legend: {
      // orient: 'vertical',
      // top: 'middle',
      bottom: 0,
      left: "center",
      data: chartinitData.data,
      textStyle: {
        color: "#ffffff",
      },
    },
    color: ["#08FFFF", "#006FCA", "#132771", "#0834B5", "#009EF3", "#26218A", "#859AF8", "#3546A5"],
    visualMap: {
      show: false,
      min: -10,
      max: 50,
      inRange: {
        // colorLightness: [0, 1],
      },
    },
    series: [{
      name: "",
      type: "pie",
      radius: "70%",
      center: ["50%", "50%"],
      data: chartinitData.series,
      roseType: "radius",
      label: {
        show: true,
        position: "outside",
        color: "#ffffff",
        formatter: "{b}:{d}%",
      },
      labelLine: {
        show: true,
        lineStyle: {
          color: "rgba(255, 255, 255, 0.3)",
        },
        smooth: 0.2,
        length: 5,
        length2: 0,
      },
      itemStyle: {
        shadowBlur: 200,
        shadowColor: "rgba(0, 0, 0, 0.5)",
      },

      animationType: "scale",
      animationEasing: "elasticOut",
      animationDelay: function (idx) {
        return Math.random() * 200;
      },
    }, ],
  })


}

// 甜甜圈
function renderDoughnutChart(id, chartinitData) {
  let myChart = echarts.init(document.getElementById(id))
  let option = {
    color: colorArray,
    tooltip: {
      transitionDuration: 0,
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
      // position: [10, 10]
    },
    legend: {
      // orient: "vertical",
      // right: 10,
      bottom: 10,
      textStyle: {
        color: "#ffffff",
      },
    },
    series: [{
      type: "pie",
      radius: ["40%", "60%"],
      avoidLabelOverlap: true,
      label: {
        show: true,
        color: "#ffffff",
        formatter: "{b}",
      },
      labelLine: {
        show: true,
      },
      data: chartinitData.data,
    }, ],
  }
  if (chartinitData.legend) {
    option.legend = chartinitData.legend
  }
  if (chartinitData.series) {
    Object.assign(option.series[0], chartinitData.series[0])
  }
  if (chartinitData.tooltip) {
    Object.assign(option.tooltip, chartinitData.tooltip)
  }

  myChart.setOption(option);
  myChart.on('click', function (params) {
    // 控制台打印数据的名称
    // console.log(params);
    location.href = chartinitData.data[params.dataIndex].url
    // this.$router.push(chartinitData.data[params.dataIndex].url)
  });
}

// 词云
function renderWordCloudChart(id, chartinitData) {
  let myChart = echarts.init(document.getElementById(id))
  myChart.setOption({
    series: [{
      type: 'wordCloud',
      shape: 'circle',
      //   maskImage: maskImage,
      left: 'center',
      top: 'center',
      width: '70%',
      height: '80%',
      right: null,
      bottom: null,
      sizeRange: [12, 60],
      rotationRange: [0, 0],
      //   rotationStep: 45,
      gridSize: 8,
      drawOutOfBound: false,
      textStyle: {
        normal: {
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          color: function () {
            return 'rgb(' + [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160)
            ].join(',') + ')';
          }
        },
        emphasis: {
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },
      data: chartinitData.data
    }]
  })
}
