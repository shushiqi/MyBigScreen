<template>
  <el-container class="container" :style="elMainBG">
    <el-header>
      <xiaoweiyuanHeader
        :title="headerTitle"
        iconType="header"
        :park="this.$route.params.branch"
      />
    </el-header>
    <el-container class="main-container">
      <el-aside width="28.125rem" class="left-aside">
        <div class="menu-one" :style="menuOneBG">
          <div class="menu-one-item" v-for="item in menuOne" :key="item.title">
            <span class="title">{{ item.title }}</span>
            <span
            ><a class="data"
            ><countTo
              :endVal="item.info"
              :duration="2000"
              :decimals="2"/></a
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
              >预计入驻企业
                <a class="data">
                  <countTo
                    :endVal="menuTwo.expectedCompany"
                    :duration="2000"/></a
                >家</span
              >
              <span
              >入驻率
                <a class="ratedata">
                  <countTo
                    :endVal="menuTwo.occupancyRate"
                    :duration="2000"
                  />%</a
                ></span
              >
              <span
              >集聚家庭织机户
                <a class="data">
                  <countTo :endVal="menuTwo.retail" :duration="2000"/></a
                >家</span
              >
            </div>
            <div class="menu-two-data-item2">
              <div class="subItem">
                <span class="title"> 企业人数</span>
                <span>
                  <a class="data">
                    <countTo :endVal="menuTwo.employees" :duration="2000"/> </a
                  >人
                </span>
              </div>
              <div class="subItem">
                <span class="title"> 织机总数</span>
                <span>
                  <a class="data">
                    <countTo :endVal="menuTwo.looms" :duration="2000"/> </a
                  >台
                </span>
              </div>
            </div>
          </div>
        </div>
      </el-aside>
      <el-main class="mid-main">
        <!-- <div class="" style="width: 56.25rem; height: 53.125rem"></div> -->
        <div class="park-cards">
          <div class="park-card" :style="parkCardBG" @click="toParkOverview">
            <div class="img">
              <img
                src="@/assets/images/icon/底部ICON/icon_1.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="title">园区总览</div>
          </div>
        </div>
      </el-main>
      <el-aside width="28.125rem" class="right-aside">
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
                :endVal="menuThree.electricity"
                :duration="2000"/></a
              >万/亩</span
              >
              <span
              ><a><countTo :endVal="menuThree.water" :duration="2000"/></a
              >度/亩</span
              >
            </div>
            <div class="second-part">
              <span
              >亩均产值<a class="outputrate"
              >↑<countTo
                :endVal="menuThree.electricityRate"
                :duration="2000"
              />
                  %</a
              ></span
              >
              <span
              >亩均耗电<a class="powerrate"
              >↓<countTo :endVal="menuThree.waterRate" :duration="2000"/>
                  %</a
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
            <div class="title">园内企业列表</div>
          </div>
          <div id="enterpriseServeChart">
            <seamless-scroll-table
              :labelList="menuFourLabelList"
              :data="menuFour"
              style="width: 22.5rem; height: 17.5rem; margin-top: 3rem"
            ></seamless-scroll-table>
          </div>
        </div>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
  import xiaoweiyuanHeader from "@/components/XiaoweiyuanHeader";
  import SeamlessScrollTable from "@/components/seamless-scroll-table";
  import countTo from "@/components/vue-count-to/vue-countTo.vue";
  import {charts} from "@/utils/index";

  export default {
    name: "cxjp",

    data() {
      return {
        headerTitle: "长兴夹浦小微园  ", //头部标题
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
            "url(" + require("@/assets/images/background/bg_xiangshan.jpg") + ")",
        },
        menuOne: [
          {title: "占地面积", info: 0, unit: "亩"},
          {title: "建筑面积", info: 0, unit: "平方米"},
          {title: "计划总投资", info: 0, unit: "亿"},
          {title: "实际投资", info: 0, unit: "亿"},
        ],
        menuTwo: {
          expectedCompany: 0,
          occupancyRate: 0,
          retail: 0,
          employees: 0,
          looms: 0,
        },
        menuThree: {
          electricity: 0,
          electricityRate: 0,
          elecMount: [0, 0, 0, 0],
          water: 0,
          waterRate: 0,
          waterMount: [0, 0, 0, 0],
        },

        menuFour: [
          {
            name: "龙宇纺织",
            address: "夹浦镇",
          },
        ],
        menuFourLabelList: [
          {
            label: "企业名称",
            prop: "name",
          },
          {
            label: "地址",
            prop: "address",
          },
        ],
      };
    },
    components: {
      xiaoweiyuanHeader,
      SeamlessScrollTable,
      countTo,
    },
    watch: {},
    beforeMounted() {
    },
    mounted() {
      this.GetData(this.$route.params.branch);
      this.renderParkEconomyChart();
    },
    methods: {
      GetData(branch) {
        this.GetHeaderTitle(branch);
        this.GetMainBg(branch);
        this.GetMenuOneData(branch);
        this.GetMenuTwoData(branch);
        this.GetMenuThreeData(branch);
        this.GetMenuFourData(branch);
      },
      GetHeaderTitle(branch) {
        switch (branch) {
          case "xiangshan":
            this.headerTitle = "长兴夹浦小微园香山分部";
            break;
          case "xique":
            this.headerTitle = "长兴夹浦小微园喜鹊斗分部";
            break;
          case "huanding":
            this.headerTitle = "长兴夹浦小微园环丁分部";
            break;
          case "beicun":
            this.headerTitle = "长兴夹浦小微园北村分部";
            break;
          case "taojiawan":
            this.headerTitle = "长兴夹浦小微园陶家湾分部";
            break;

          default:
            break;
        }
      },
      GetMainBg(branch) {
        switch (branch) {
          case "xiangshan":
            this.elMainBG.backgroundImage =
              "url(" +
              require("@/assets/images/background/bg_xiangshan.jpg") +
              ")";
            break;
          case "xique":
            this.elMainBG.backgroundImage =
              "url(" +
              require("@/assets/images/background/bg_xiquedou.jpg") +
              ")";
            break;
          case "huanding":
            this.elMainBG.backgroundImage =
              "url(" +
              require("@/assets/images/background/bg_huanding.jpg") +
              ")";
            break;
          case "beicun":
            this.elMainBG.backgroundImage =
              "url(" + require("@/assets/images/background/bg_beicun.jpg") + ")";
            break;
          case "taojiawan":
            this.elMainBG.backgroundImage =
              "url(" +
              require("@/assets/images/background/bg_taojiawan.jpg") +
              ")";
            break;

          default:
            break;
        }
      },
      GetMenuOneData(branch) {
        switch (branch) {
          case "xiangshan":
            this.menuOne = [
              {title: "占地面积", info: 44, unit: "亩"},
              {title: "建筑面积", info: 51000, unit: "平方米"},
              {title: "计划总投资", info: 1.9, unit: "亿"},
              {title: "实际投资", info: 0.8, unit: "亿"},
            ];
            break;
          case "xique":
            this.menuOne = [
              {title: "占地面积", info: 124, unit: "亩"},
              {title: "建筑面积", info: 162000, unit: "平方米"},
              {title: "计划总投资", info: 5.31, unit: "亿"},
              {title: "实际投资", info: 2.6, unit: "亿"},
            ];
            break;
          case "huanding":
            this.menuOne = [
              {title: "占地面积", info: 135, unit: "亩"},
              {title: "建筑面积", info: 186000, unit: "平方米"},
              {title: "计划总投资", info: 6.53, unit: "亿"},
              {title: "实际投资", info: 2.1, unit: "亿"},
            ];
            break;
          case "beicun":
            this.menuOne = [
              {title: "占地面积", info: 225, unit: "亩"},
              {title: "建筑面积", info: 241000, unit: "平方米"},
              {title: "计划总投资", info: 7.68, unit: "亿"},
              {title: "实际投资", info: 2.47, unit: "亿"},
            ];
            break;
          case "taojiawan":
            this.menuOne = [
              {title: "占地面积", info: 43, unit: "亩"},
              {title: "建筑面积", info: 60000, unit: "平方米"},
              {title: "计划总投资", info: 2.84, unit: "亿"},
              {title: "实际投资", info: 1.5, unit: "亿"},
            ];
            break;

          default:
            break;
        }
      },
      GetMenuTwoData(branch) {
        switch (branch) {
          case "xiangshan":
            this.menuTwo = {
              expectedCompany: 7,
              occupancyRate: 0,
              retail: 0,
              employees: 0,
              looms: 0,
            };
            break;
          case "xique":
            this.menuTwo = {
              expectedCompany: 11,
              occupancyRate: 0,
              retail: 0,
              employees: 0,
              looms: 0,
            };
            break;
          case "huanding":
            this.menuTwo = {
              expectedCompany: 13,
              occupancyRate: 0,
              retail: 0,
              employees: 0,
              looms: 0,
            };
            break;
          case "beicun":
            this.menuTwo = {
              expectedCompany: 13,
              occupancyRate: 0,
              retail: 0,
              employees: 0,
              looms: 0,
            };
            break;
          case "taojiawan":
            this.menuTwo = {
              expectedCompany: 5,
              occupancyRate: 0,
              retail: 0,
              employees: 0,
              looms: 0,
            };
            break;

          default:
            break;
        }
      },
      GetMenuThreeData(branch) {
        switch (branch) {
          case "xiangshan":
            this.menuThree = {
              electricity: 0,
              electricityRate: 0,
              elecMount: [0, 0, 0, 0],
              water: 0,
              waterRate: 0,
              waterMount: [0, 0, 0, 0],
            };
            break;
          case "xique":
            this.menuThree = {
              electricity: 0,
              electricityRate: 0,
              elecMount: [0, 0, 0, 0],
              water: 0,
              waterRate: 0,
              waterMount: [0, 0, 0, 0],
            };
            break;
          case "huanding":
            this.menuThree = {
              electricity: 0,
              electricityRate: 0,
              elecMount: [0, 0, 0, 0],
              water: 0,
              waterRate: 0,
              waterMount: [0, 0, 0, 0],
            };
            break;
          case "beicun":
            this.menuThree = {
              electricity: 0,
              electricityRate: 0,
              elecMount: [0, 0, 0, 0],
              water: 0,
              waterRate: 0,
              waterMount: [0, 0, 0, 0],
            };
            break;
          case "taojiawan":
            this.menuThree = {
              electricity: 0,
              electricityRate: 0,
              elecMount: [0, 0, 0, 0],
              water: 0,
              waterRate: 0,
              waterMount: [0, 0, 0, 0],
            };
            break;
          default:
            break;
        }
      },
      GetMenuFourData(branch) {
        switch (branch) {
          case "xiangshan":
            this.menuFour = [
              {
                name: "长兴鑫辰纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴振远纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长夹浦春天纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴宏浩纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴联兴纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴钰新材料达科技有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴宏跃纺织有限公司",
                address: "夹浦镇",
              },
            ];
            break;
          case "xique":
            this.menuFour = [
              {
                name: "湖州众发纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴县夹浦聚兴纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "湖州玖航纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "湖州众志纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "湖州宝典纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴众顺纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴国军纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴强鑫纺织股份有限公司",
                address: "夹浦镇",
              },
              {
                name: "湖州振龙纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴鑫和纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴汇腾纺织有限公司",
                address: "夹浦镇",
              },
            ];
            break;
          case "huanding":
            this.menuFour = [
              {
                name: "长兴明赫纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴颖达纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴祥汇纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴县宇超纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴联誉纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴联成超纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "浙江慕伦纺织科技有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴华赢纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴华达纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴乐佳纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴优嘉纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴浩宇纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴浩达纺织有限公司",
                address: "夹浦镇",
              },
            ];
            break;
          case "beicun":
            this.menuFour = [
              {
                name: "长兴宇帆纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴浙样红纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴谊信纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴其元轻纺有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴县夹浦兴毅纺织厂",
                address: "夹浦镇",
              },
              {
                name: "长兴县三星纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "浙江盈亿纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴伟文纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴玲峰轻纺有限公司",
                address: "夹浦镇",
              },
              {
                name: "湖州浙强纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴桂珠纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴力亿轻纺有限公司",
                address: "夹浦镇",
              },
              {
                name: "浙江捷凯实业有限公司",
                address: "夹浦镇",
              },
            ];
            break;
          case "taojiawan":
            this.menuFour = [
              {
                name: "长兴珺亿纺织有限公司",
                address: "夹浦镇",
              },
              {
                name: "长兴高鑫纺织有限公司",
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
            ];
            break;

          default:
            break;
        }
      },
      renderParkEconomyChart() {
        charts("partEconomyChart", {
          seriesType: "line",
          xAxis: {data: ["2017", "2018", "2019", "2020"]},
          series: [
            {
              data: this.menuThree.elecMount,
            },
            {
              data: this.menuThree.waterMount,
            },
          ],
        });
      },
      enterpriseListStyle({row, rowIndex}) {
        let stylejson = {
          color: "#ffffff",
        };
        if (rowIndex % 2 == 1) {
          stylejson.background = "#012136";
          return stylejson;
        } else if (rowIndex % 2 == 0) {
          stylejson.background = "#052539";
          return stylejson;
        }
      },
      toParkOverview() {
        this.$router.push("/cxjp");
      },
    },
  };
</script>
<style>
  /* 取消表格hover 增加半透明遮罩 */
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: transparent !important;
    opacity: 0.5;
  }
</style>
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
      // padding-top: 5rem;
      margin-bottom: 1.25rem;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      flex-wrap: wrap;

      .menu-one-item {
        width: 49%;
        font-size: 1.25rem;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;

        span:nth-child(1) {
          margin-left: 1rem;
        }

        .data {
          font-size: 2.1875rem;
          color: #287ee7;
        }
      }

      .menu-one-item:nth-child(3) {
        margin-top: 3rem;
        align-self: flex-start;
      }

      .menu-one-item:nth-child(4) {
        margin-top: 3rem;
        align-self: flex-start;
      }
    }

    .menu-two {
      width: 100%;
      height: 37.625rem;
      background-size: 100% 100%;

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
        padding-top: 1rem;

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

            .ratedata {
              color: #f8b033;
            }
          }
        }

        .menu-two-data-item2 {
          width: 100%;
          font-size: 1.25rem;
          text-align: center;
          margin-top: 1.875rem;
          display: flex;
          justify-content: space-around;

          .subItem {
            display: flex;
            flex-direction: column;
          }

          .data {
            font-size: 2.1875rem;
            color: #287ee7;
          }
        }
      }
    }
  }

  #doughnutChart {
    width: 18.75rem;
    height: 15.625rem;
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
        margin-top: 1rem;

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
          }

          a {
            font-weight: bold;
            margin-left: 1rem;
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

      #enterpriseServeChart {
        width: 28.125rem;
        height: 21.875rem;
        margin-top: 1rem;
        margin-left: 2rem;
      }

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
    height: 21.25rem;
  }

  .mid-main {
    padding-top: 0;
    // width: 56.25rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex: 1;

    .park-cards {
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
    background-size: 100% 100%;
  }

  body > .el-container {
    margin-bottom: 2.5rem;
  }

  .el-table {
    color: #287ee7;
  }
</style>
