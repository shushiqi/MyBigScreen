<template>
  <el-container class="container" :style="elMainBG">
    <el-header>
      <xiaoweiyuanHeader title="长兴夹浦小微园丁新分部"/>
    </el-header>
    <el-container class="main-container">
      <el-aside width="28.25rem" class="left-aside">
        <div class="menu-one" :style="menuOneBG">
          <div class="menu-one-item" v-for="item in menuOne" :key="item.title">
            <span class="title">{{ item.title }}</span>
            <span
            ><a class="data">
                <countTo
                  :endVal="item.info"
                  :duration="2000"
                  :decimals="1"/></a
            >{{ item.unit }}</span
            >
          </div>
        </div>
        <div class="menu-two" :style="menuTwoBG">
          <div class="menu-two-title">
            <div class="icon">
              <img src="@/assets/images/icon/icon_1.png" alt="" srcset=""/>
            </div>
            <div class="title">园区企业情况</div>
          </div>
          <div class="menu-two-data">
            <div class="menu-two-data-item">
              <span
              >入驻企业
                <a class="data"> <countTo :endVal="6" :duration="2000"/></a
                >家</span
              >
              <span
              >入驻率
                <a class="ratedata">
                  <countTo :endVal="80" :duration="2000"/>%</a
                ></span
              >
              <span style="width: 100%"
              >集聚家庭织机户
                <a class="data"> <countTo :endVal="68" :duration="2000"/></a
                >家</span
              >
            </div>
            <div
              class="menu-two-data-item2"
              v-for="item in menuTwo"
              :key="item.title"
            >
              <span class="title">{{ item.title }}</span>
              <span>
                <a class="data">
                  <countTo :endVal="item.info" :duration="2000"
                  /></a>
                {{ item.unit }}
              </span>
            </div>
            <div id="doughnutChart"></div>
          </div>
          <!-- <div class="menu-two-chart">

          </div> -->
        </div>
      </el-aside>
      <el-main class="mid-main">
        <div class="main-item"></div>
        <div class="park-cards">
          <div class="park-card" :style="parkCardBG" @click="toOverview">
            <div class="img">
              <img
                src="@/assets/images/icon/底部ICON/icon_3.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="title">园区总览</div>
          </div>
          <!-- <div class="park-card" :style="parkCardBG" @click="toParkServe">
            <div class="img">
              <img
                src="@/assets/images/icon/底部ICON/icon_5.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="title">丁新园区管理</div>
          </div> -->
          <div class="park-card" :style="parkCardBG" @click="toProduceOverview">
            <div class="img">
              <img
                src="@/assets/images/icon/底部ICON/icon_2.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="title">生产总览</div>
          </div>
        </div>
      </el-main>
      <el-aside width="28.25rem" class="right-aside">
        <div class="menu-three" :style="menuThreeBG">
          <div class="menu-three-title">
            <div class="icon">
              <img src="@/assets/images/icon/icon_2.png" alt="" srcset=""/>
            </div>
            <div class="title">园区经济</div>
          </div>
          <div class="menu-three-data">
            <div class="first-part">
              <span
              ><a
              ><countTo
                :endVal="477.74"
                :duration="2000"
                :decimals="2"/></a
              >万/亩</span
              >
              <span
              ><a
              ><countTo :endVal="18.79" :duration="2000" :decimals="2"/></a
              >万度/亩</span
              >
            </div>
            <div class="second-part">
              <span
              >亩均产值<a class="uprate" :class="{ downrate: proDown }"
              >↑
                  <countTo :endVal="7.6" :duration="2000" :decimals="1"/>%</a
              ></span
              >
              <span
              >亩均耗电<a class="uprate" :class="{ downrate: powerDown }"
              >↓
                  <countTo :endVal="4.2" :duration="2000" :decimals="1"/>%</a
              ></span
              >
            </div>
            <div class="third-part" id="partEconomyChart"></div>
          </div>
        </div>
        <div class="menu-four" :style="menuFourBG">
          <div class="menu-four-title">
            <div class="icon">
              <img src="@/assets/images/icon/icon_2.png" alt="" srcset=""/>
            </div>
            <div class="title">国内企业列表</div>
          </div>
          <!--          <div id="enterpriseList">-->
          <Table
            :title="labelList"
            :data="enterpriseData"
            style="width: 25.5rem; height: 21.875rem; margin: 0 auto; margin-top: 2rem;"
          ></Table>
          <!--          </div>-->
        </div>
      </el-aside>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
  .container {
    margin: 0;
    padding: 0;
    width: 100%;
    // height: 100%;
    height: 67.5rem;
    color: #ffffff;

    .main-container {
      width: 100%;
      height: calc(100% - 6.375rem);
      margin: 0;
      margin-top: 2.5rem;
      display: flex;
      justify-content: space-around !important;
      padding: 0 0.9375rem;
    }
  }

  .left-aside {
    .menu-one {
      width: 100%;
      height: 18.75rem;
      background-size: 100% 100%;
      // padding: 0 1.25rem;
      // padding-top: 5rem;
      margin-bottom: 1.5625rem;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      .menu-one-item {
        width: 49%;
        height: 49%;
        font-size: 1.25rem;
        text-align: left;
        vertical-align: middle;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .title {
          margin-left: 0.3125rem;
          margin-top: 1rem;
        }

        .data {
          margin-left: 0.625rem;
          font-size: 2.1875rem;
          color: #287ee7;
        }
      }
    }

    .menu-two {
      width: 100%;
      height: 37.625rem;

      .menu-two-title {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .icon {
          margin-left: 1.875rem;
          margin-right: 0.625rem;

          img {
            width: 2.1875rem;
            height: 2.1875rem;
          }
        }

        .title {
          font-size: 1.5625rem;
          font-weight: bold;
          letter-spacing: 0.125rem;
        }
      }

      .menu-two-data {
        font-size: 1.25rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        .menu-two-data-item {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: baseline;
          flex-wrap: wrap;
          padding-left: 1.25rem;

          span {
            width: 50%;
            justify-content: flex-start;
            text-align: left;

            .data {
              font-size: 3.125rem;
              color: #10ffff;
            }
          }
        }

        .menu-two-data-item2 {
          width: 50%;
          font-size: 1.25rem;
          text-align: center;
          margin-top: 1.875rem;
          display: flex;
          flex-direction: column;

          .data {
            font-size: 2.1875rem;
            color: #287ee7;
          }
        }
      }
    }
  }

  .ratedata {
    color: #f8b033;
  }

  #doughnutChart {
    width: 26.25rem;
    height: 25rem;
    // border: 0.0625rem solid rgb(202, 21, 21);
  }

  .right-aside {
    .menu-three {
      width: 100%;
      height: 27.625rem;

      background-size: 100% 100%;

      .menu-three-title {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .icon {
          margin-left: 1.875rem;
          margin-right: 0.625rem;

          img {
            width: 2.1875rem;
            height: 2.1875rem;
          }
        }

        .title {
          font-size: 1.5625rem;
          font-weight: bold;
          letter-spacing: 0.125rem;
        }
      }

      .menu-three-data {
        font-size: 1.25rem;
        padding-top: 2rem;

        .first-part {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;

          a {
            font-size: 2.1875rem;
            color: #287ef7;
          }

          span {
            width: 50%;
          }
        }

        .second-part {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          margin-top: 1rem;

          span {
            width: 50%;

            a {
              font-weight: bold;
              margin-left: 1rem;
            }
          }

          .uprate {
            color: #fb8033;
          }

          .downrate {
            color: #29ee67;
          }
        }
      }
    }

    .menu-four {
      width: 100%;
      height: 28.75rem;

      background-size: 100% 100%;
      margin-top: 1.5625rem;

      .menu-four-title {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .icon {
          margin-left: 1.875rem;
          margin-right: 0.625rem;

          img {
            width: 2.1875rem;
            height: 2.1875rem;
          }
        }

        .title {
          font-size: 1.5625rem;
          font-weight: bold;
          letter-spacing: 0.125rem;
        }
      }
    }
  }

  #partEconomyChart {
    width: 26.25rem;
    height: 18.75rem;
  }

  .right-aside .menu-four .menu-four-title .icon {
    margin-left: 1.875rem;
    margin-right: 0.9375rem;
  }

  .right-aside .menu-four .menu-four-title .title {
    font-size: 1.5625rem;
    font-weight: bold;
    letter-spacing: 0.125rem;
  }

  #enterpriseList {
    color: "#ffffff";
    position: relative;
    top: 2.5rem;
    left: 2.5rem;
  }

  .mid-main {
    padding-top: 0;
    // width: 56.25rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex: 1;
  }

  .mid-main .park-cards {
    width: 100%;
    display: flex;
    justify-content: center;

    .park-card {
      width: 12.5rem;
      height: 6.25rem;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 1.25rem;

      .img {
        position: relative;
        width: 3.75rem;
        height: 3.75rem;
      }

      .title {
        height: 2.5rem;
        position: relative;
        font-size: 1.5625rem;
        font-weight: bold;
        letter-spacing: 0.125rem;
      }
    }
  }

  .el-header {
    text-align: center;
    padding: 0;
  }

  .el-aside {
    text-align: center;
    overflow: hidden;
  }

  .el-main {
    text-align: center;
    // line-height: 10rem;
    background-size: 100% 100%;
  }

  body > .el-container {
    margin-bottom: 2.5rem;
  }
</style>
<script>
  import "./index.less";
  import xiaoweiyuanHeader from "@/components/XiaoweiyuanHeader";
  import Table from "@/components/table";
  import countTo from "@/components/vue-count-to/vue-countTo.vue";
  import {charts} from "@/utils/index";

  export default {
    name: "cxjp",

    data() {
      return {
        menuOneBG: {
          backgroundImage:
            "url(" + require("@/assets/images/background/bg_1.png") + ")",
        },
        menuTwoBG: {
          backgroundImage:
            "url(" + require("@/assets/images/background/bg_2.png") + ")",
        },
        menuThreeBG: {
          backgroundImage:
            "url(" + require("@/assets/images/background/bg_3.png") + ")",
        },
        menuFourBG: {
          backgroundImage:
            "url(" + require("@/assets/images/background/bg_4.png") + ")",
        },
        parkCardBG: {
          backgroundImage:
            "url(" + require("@/assets/images/background/200100.png") + ")",
        },
        elMainBG: {
          backgroundImage:
            "url(" + require("@/assets/images/background/bg_dingxin.jpg") + ")",
        },
        menuOne: [
          {title: "占地面积", info: 31.8, unit: "亩"},
          {title: "建筑面积", info: 41000, unit: "平方米"},
          {title: "计划总投资", info: 3.4, unit: "亿"},
          {title: "实际投资", info: 3, unit: "亿"},
        ],
        menuTwo: [
          {title: "企业人数", info: 219, unit: "人"},
          {title: "织机总数", info: 1245, unit: "台"},
        ],
        enterpriseData: [
          {
            name: "长兴伯良纺织有限公司",
            address: "夹浦镇",
          },
          {
            name: "中豪纺织有限公司",
            address: "夹浦镇",
          },
          {
            name: "长兴瑞源纺织有限公司",
            address: "夹浦镇",
          },
          {
            name: "长兴轩能纺织有限公司",
            address: "夹浦镇",
          },
          {
            name: "长兴久鑫进出口有限公司",
            address: "夹浦镇",
          },
          {
            name: "长兴蓝旗纺织有限公司",
            address: "夹浦镇",
          },
        ],
        labelList: [
          {
            label: "企业名称",
            prop: "name",
            width: 200,
          },
          {
            label: "地址",
            prop: "address",
            width: 100,
          },
        ],
        proDown: false,
        powerDown: true,
      };
    },
    components: {
      xiaoweiyuanHeader,
      countTo,
      Table,
    },
    watch: {},
    beforeMounted() {
    },
    mounted() {
      this.renderDoughnutChart();
      this.renderParkEconomyChart();
    },
    methods: {
      renderDoughnutChart() {
        charts("doughnutChart", {
          seriesType: "doughnut",
          data: [
            {
              value: 422,
              name: "伯良",
              url: "http://www.enter-iot.cn/BigScreen/#/loomDistribution/dingxin",
            },
            {
              value: 400,
              name: "中豪",
              url: "http://www.enter-iot.cn/BigScreen/#/loomDistribution/dingxin",
            },
            {
              value: 423,
              name: "瑞源",
              url: "http://www.enter-iot.cn/BigScreen/#/loomDistribution/dingxin",
            },
          ],
          legend: {
            show: false,
          },
          series: [
            {
              bottom: "10%",
              label: {
                show: true,
                position: "outside",
                color: "#ffffff",
                formatter: "{b}:{d}%",
              },
              labelLine: {
                show: true,
                length: 5,
                length2: 5,
                smooth: true,
              },
            },
          ],
        });
      },
      renderParkEconomyChart() {
        charts("partEconomyChart", {
          seriesType: "line",
          legend: {
            show: true,
            top: 20,
            left: "center",
            data: ["亩均产值", "亩均耗电"],
            textStyle: {
              color: "#ffffff",
            },
          },
          xAxis: {data: ["2018", "2019", "2020"]},
          series: [
            {
              data: [400.5, 443.86, 477.74],
            },
            {
              data: [18.8, 19.62, 18.79],
            },
          ],
        });
      },
      enterpriseListStyle({row, rowIndex}) {
        let stylejson = {};
        stylejson.color = "#ffffff";
        if (rowIndex % 2 == 1) {
          stylejson.background = "rgba(5, 37, 57, 1)";
          return stylejson;
        } else if (rowIndex % 2 == 0) {
          stylejson.background = "rgba(1, 33, 54, 0.9)";
          return stylejson;
        }
      },
      headenterpriseListHeaderStyle({row, rowIndex}) {
        //
        let stylejson = {};
        stylejson.color = "#ffffff";
        if (rowIndex == 0) {
          stylejson.background = "#009af0";
          return stylejson;
        } else if (rowIndex == 1) {
          stylejson.background = " linear-gradient(to right, #009af0 , 0283ab)";
          return stylejson;
        } else if (rowIndex == 2) {
          stylejson.background = " linear-gradient(to right, #009af0 , 0283ab)";
          return stylejson;
        } else if (rowIndex == 3) {
          stylejson.background = " linear-gradient(to right, #0283ab , 02778b)";
          return stylejson;
        }
      },
      toOverview() {
        this.$router.push("./cxjp");
      },
      toParkServe() {
        this.$router.push("/cxjpxiaoweiyuan-dingxin");
      },
      toProduceOverview() {
        this.$router.push("/cxjpdxpro");
      },
    },
  };
</script>
