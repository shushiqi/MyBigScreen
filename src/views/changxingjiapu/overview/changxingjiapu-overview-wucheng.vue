<template>
  <el-container class="container" :style="elMainBG">
    <el-header>
      <xiaoweiyuanHeader title="长兴夹浦小微园吴城分部"/>
    </el-header>
    <el-container class="main-container">
      <el-aside width="28.25rem" class="left-aside">
        <div class="menu-one" :style="menuOneBG">
          <div class="menu-one-item" v-for="item in menuOne" :key="item.title">
            <span class="title">{{ item.title }}</span>
            <span
            ><a class="data">
                <countTo
                  class="data"
                  :endVal="item.info"
                  :duration="2000"
                  :decimals="1"
                ></countTo> </a
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
                <a class="data">
                  <countTo
                    class="data"
                    :endVal="5"
                    :duration="2000"
                  ></countTo></a
                >家</span
              >
              <span
              >入驻率
                <a class="ratedata">
                  <countTo :endVal="65" :duration="2000"></countTo>%</a
                ></span
              >
              <span style="width: 100%"
              >集聚家庭织机户
                <a class="data">
                  <countTo :endVal="107" :duration="2000"></countTo></a
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
                  <countTo :endVal="item.info" :duration="2000"></countTo
                  ></a>
                {{ item.unit }}
              </span>
            </div>
          </div>
          <div class="menu-two-chart">
            <div id="doughnutChart"></div>
          </div>
        </div>
      </el-aside>
      <el-main class="mid-main">
        <div class="main-item"></div>
        <div class="park-cards">
          <div class="park-card" :style="parkCardBG" @click="toOverview">
            <div class="img">
              <img
                src="@/assets/images/icon/底部ICON/icon_1.png"
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
            <div class="title">吴城园区管理</div>
          </div> -->
          <div class="park-card" :style="parkCardBG" @click="toProduceOverview">
            <div class="img">
              <img
                src="@/assets/images/icon/底部ICON/icon_2.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="title">吴城生产总览</div>
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
              ><a>
                  <countTo
                    :endVal="406.59"
                    :duration="2000"
                    :decimals="2"
                  ></countTo></a
              >万/亩</span
              >
              <span
              ><a>
                  <countTo
                    :endVal="30.86"
                    :duration="2000"
                    :decimals="2"
                  ></countTo></a
              >万度/亩</span
              >
            </div>
            <div class="second-part">
              <span
              >亩均产值<a class="outputrate"
              >↑<countTo
                :endVal="14.23"
                :duration="2000"
                :decimals="2"
              ></countTo
              >%</a
              ></span
              >
              <span
              >亩均耗电<a class="outputrate"
              >↑
                  <countTo
                    :endVal="8.7"
                    :duration="2000"
                    :decimals="1"
                  ></countTo
                  >%</a
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
  }

  .main-container {
    width: 100%;
    height: calc(100% - 6.375rem);
    margin: 0;
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-around !important;
    padding: 0 0.9375rem;
  }

  .left-aside {
    .menu-one {
      width: 100%;
      height: 18.875rem;
      background-size: 100% 100%;
      // padding: 0 1.25rem;
      // padding-top: 5rem;
      margin-bottom: 1.25rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;

      .menu-one-item {
        width: 45%;
        font-size: 1.25rem;
        text-align: left;
        display: flex;
        flex-direction: column;
        margin-top: 1.875rem;
        margin-left: 1rem;

        .data {
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
    width: 28.25rem;
    height: 17.5rem;
    // border: 0.0625rem solid #000;
  }

  .right-aside {
    width: 28.25rem;

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
        margin-top: 2rem;

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

          .outputrate {
            color: #fb8033;
          }

          .powerrate {
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
    height: 17.5rem;
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

    .main-itam {
    }
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
  import xiaoweiyuanHeader from "@/components/XiaoweiyuanHeader";
  import Table from "@/components/table";
  import {charts} from "@/utils/index";
  import countTo from "@/components/vue-count-to/vue-countTo.vue";

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
            "url(" + require("@/assets/images/background/bg_qfc.png") + ")",
        },
        fullHeight: document.documentElement.innerHeigh,
        menuOne: [
          {title: "占地面积", info: 53.7, unit: "亩"},
          {title: "建筑面积", info: 60000, unit: "平方米"},
          {title: "计划总投资", info: 4.1, unit: "亿"},
          {title: "实际投资", info: 3.5, unit: "亿"},
        ],
        menuTwo: [
          {title: "企业人数", info: 223, unit: "人"},
          {title: "织机总数", info: 963, unit: "台"},
        ],
        enterpriseData: [
          {
            date: "2018/01/01",
            name: "长兴龙宇纺织有限公司",
            address: "夹浦镇",
          },
          {
            date: "2018/09/15",
            name: "长兴庆裕纺织有限公司",
            address: "夹浦镇",
          },
          {
            date: "2018/01/01",
            name: "长兴和丝园纺织有限公司",
            address: "夹浦镇",
          },
          {
            date: "2018/01/01",
            name: "长兴伟宇宙纺织有限公司",
            address: "夹浦镇",
          },
          {
            date: "2018/01/01",
            name: "湖州晨辉纺织有限公司",
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
      };
    },
    components: {
      xiaoweiyuanHeader,
      countTo,
      Table,
    },
    watch: {
      fullHeight(val) {
        if (!this.timer) {
          this.fullHeight = val;
          this.timer = true;
          let that = this;
          setTimeout(function () {
            that.timer = false;
          }, 400);
        }
      },
    },
    beforeMounted() {
    },
    mounted() {
      this.renderDoughnutChart();
      this.renderParkEconomyChart();
    },
    methods: {
      toOverview() {
        this.$router.push("./cxjp");
      },
      toParkServe() {
        this.$router.push("./cxjpxiaoweiyuan-wucheng");
      },
      toProduceOverview() {
        this.$router.push("/cxjpwcpro");
      },

      getBodyHeight() {
        const that = this;
        window.onresize = () => {
          return (() => {
            window.fullHeight = document.documentElement.innerHeigh;
            that.fullHeight = window.fullHeight;
          })();
        };
      },
      renderDoughnutChart() {
        charts("doughnutChart", {
          seriesType: "doughnut",
          data: [
            {
              value: 554,
              name: "庆裕",
              url: "http://www.enter-iot.cn/BigScreen/#/loomDistribution/wucheng",
            },
            {
              value: 353,
              name: "龙宇",
              url: "http://www.enter-iot.cn/BigScreen/#/loomDistribution/wucheng",
            },
            {
              value: 56,
              name: "和思园",
              url: "http://www.enter-iot.cn/BigScreen/#/loomDistribution/wucheng",
            },
          ],
          series: [
            {
              bottom: "10%",
              radius: ["50%", "70%"],
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
            {name: "亩均产值", data: [312.89, 355.94, 406.59]},
            {name: "亩均耗电", data: [23.43, 22.85, 24.86]},
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
    },
  };
</script>
