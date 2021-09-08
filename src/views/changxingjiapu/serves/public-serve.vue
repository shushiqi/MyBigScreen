<template>
  <div class="policyServeWrapper">
    <div class="menu-one">
      <div class="menu-one-title">
        <div class="icon">
          <img src="../../../assets/images/icon/icon_9.png" alt="" srcset=""/>
        </div>
        <div class="title">服务分类</div>
      </div>
      <div id="serveType" style="width: 27.5rem; height: 31.25rem"></div>
    </div>
    <div class="menu-two">
      <div class="menu-two-title">
        <div class="icon">
          <img src="../../../assets/images/icon/icon_9.png" alt="" srcset=""/>
        </div>
        <div class="title">服务情况</div>
      </div>
      <div class="menu-two-data">
        <div class="orgType">
          <div id="orgType" style="width: 21.25rem; height: 24.375rem"></div>
          <div class="title">各类服务企业占比</div>
        </div>
        <div class="erterprises">
          <div id="erterprises" style="width: 33.75rem; height: 24.375rem"></div>
          <div class="title">服务企业数趋势</div>
        </div>
      </div>
    </div>
    <div class="menu-one">
      <div class="menu-one-title">
        <div class="icon">
          <img src="../../../assets/images/icon/icon_9.png" alt="" srcset=""/>
        </div>
        <div class="title">产业服务</div>
      </div>
      <div id="industryServe" style="width: 28.25rem; height: 31.25rem"></div>
    </div>
  </div>
</template>

<script>
  import {charts} from "../../../utils/index";
  import MenuCard from "../../../components/menuCard.vue";

  export default {
    name: "PublicServe",
    components: {
      MenuCard,
    },
    data() {
      return {};
    },
    mounted() {
      this.renderServeType2();
      this.renderOrgType();
      this.renderErterprises();
      this.renderIndustryServe();
    },
    methods: {
      renderServeType2() {
        let myChart = this.$echarts.init(document.getElementById("serveType"));
        myChart.setOption({
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          legend: {
            data: ["服务机构", "服务企业"],
            left: 55,
            top: 25,
            textStyle: {
              color: "#FFFFFF",
            },
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: [
            {
              type: "value",
              min: function (value) {
                //  return -value.max
                return -50;
              },
              max: function (value) {
                //  return value.max
                return 50;
              },
              splitLine: {
                show: false,
              },
              axisLabel: {
                show: true, //不显示坐标轴的数字
                formatter: function (value) {
                  if (value < 0) {
                    return -value;
                  } else {
                    return value;
                  }
                },
              },
            },
          ],
          yAxis: [
            {
              type: "category",
              axisTick: {
                show: false,
              },
              splitLine: {
                show: false,
              },
              data: [
                "知识产权",
                "科技中介",
                "检验检测",
                "创意设计",
                "企业管理咨询",
                "技术转移",
                "电商培育",
                "法律咨询",
              ],
            },
          ],
          series: [
            {
              name: "服务机构",
              type: "bar",
              stack: "总量",
              label: {
                show: true,
                position: "left",
                formatter: function (params) {
                  return Math.abs(params.data);
                },
              },
              data: [-1, -4, -4, -7, -2, -5, -5, -6],
              barMaxWidth: "15",
            },
            {
              name: "服务企业",
              type: "bar",
              stack: "总量",
              label: {
                show: true,
                position: "right",
              },
              data: [8, 21, 3, 53, 15, 24, 7, 11],
            },
          ],
          textStyle: {
            color: "#FFFFFF",
          },
        });
      },
      renderOrgType() {
        charts("orgType", {
          seriesType: "doughnut",
          data: [
            {value: 6, name: "知识产权"},
            {value: 5, name: "科技中介"},
            {value: 5, name: "检验检测"},
            {value: 2, name: "创意设计"},
            {value: 7, name: "企业管理咨询"},
            {value: 4, name: "技术转移"},
            {value: 4, name: "电商培育"},
            {value: 1, name: "法律咨询"},
          ],
          legend: {
            orient: "vertical",
            right: -20,
            top: 70,
            textStyle: {
              color: "#ffffff",
            },
          },
          series: [
            {
              right: "20%",
              bottom: 20,
              label: {
                show: false,
              },
            },
          ],
        });
      },
      renderErterprises() {
        charts("erterprises", {
          seriesType: "line",
          legend: {
            show: true,
            textStyle: {
              color: "#FFFFFF",
            },
          },
          xAxis: {data: ["2018", "2019", "2020(1-10)"]},
          seriesLineSmooth: false,
          series: [
            {
              name: "企业数",
              data: [18, 32, 60],
            },
            {
              name: "机构数",
              data: [16, 27, 34],
            },
          ],
        });
      },

      renderIndustryServe() {
        charts("industryServe", {
          seriesType: "bar",
          align: "horizontal",
          grid: {
            left: "20%"
          },
          yAxisData: ["喜鹊斗", "陶家湾", "环丁", "香山", "北村", "丁新", "吴城"],
          // yAxisData: ["吴城", "丁新", "北村", "香山", "环丁", "陶家湾", "喜鹊斗"],
          data: [11, 5, 13, 7, 13, 6, 5],
          series: [{}],
        });
      },
    },
  };
</script>

<style lang="less" scoped>
  .policyServeWrapper {
    margin-top: 1.25rem;
    display: flex;
    justify-content: space-around;
  }

  .menu-one {
    width: 28.125rem;
    height: 37.625rem;
    background: url("../../../assets/images/background/bg_2.png") center center no-repeat;
    background-size: 100% 100%;
  }

  .menu-one .menu-one-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .menu-one .menu-one-title .icon {
    margin-left: 1.875rem;
    margin-right: 0.625rem;

    img {
      width: 2.1875rem;
      height: 2.1875rem;
    }
  }

  .menu-one .menu-one-title .title {
    font-size: 1.5625rem;
    font-weight: bold;
    letter-spacing: 0.125rem;
  }

  .menu-two {
    width: 57.625rem;
    height: 29.5rem;
    background: url("../../../assets/images/background/922472.png") center center no-repeat;
    background-size: 100% 100%;
  }

  .menu-two .menu-two-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .menu-two .menu-two-title .icon {
    margin-left: 1.875rem;
    margin-right: 0.625rem;

    img {
      width: 2.1875rem;
      height: 2.1875rem;
    }
  }

  .menu-two .menu-two-title .title {
    font-size: 1.5625rem;
    font-weight: bold;
    letter-spacing: 0.125rem;
  }

  .menu-two .menu-two-data {
    font-size: 1.375rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .menu-two .menu-two-data .title {
    font-size: 1.6875rem;
    position: relative;
    top: -1.875rem;
    text-align: center;
  }
</style>
