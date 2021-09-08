<template>
  <el-container class="container" :style="elMainBG">
    <el-header>
      <xiaoweiyuanHeader title="长兴夹浦纺织小微企业园" iconType="map">
      </xiaoweiyuanHeader>
    </el-header>
    <el-container class="main-container">
      <el-aside width="452px" class="left-aside">
        <div class="menu-one" :style="menuOneBG">
          <div class="menu-one-item" v-for="item in menuOne" :key="item.title">
            <span class="title">{{ item.title }}</span>
            <span
            ><a class="data"
            ><countTo
              class="data"
              :startVal="startVal"
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
                <a class="data"
                ><countTo
                  class="data"
                  :startVal="startVal"
                  :endVal="60"
                  :duration="2000"/></a
                >家</span
              >
              <span
              >已入驻企业
                                <a class="data" @click="company">
                                  <countTo
                                    :startVal="startVal"
                                    :endVal="26"
                                    :duration="2000"/></a>
                <!--                                <a class="data">-->
                <!--                  <countTo-->
                <!--                    :startVal="startVal"-->
                <!--                    :endVal="11"-->
                <!--                    :duration="2000"/></a>-->
                <el-dialog :visible.sync="dialog"
                           width="30%"
                           :append-to-body="true"
                           custom-class="dialog-style"
                           center>
                  <template slot="title">
                    <div style="color: #ffffff;font-size: 20px;margin-bottom: 20px;padding-top: 20px">已入驻企业</div>
                  </template>
                                    <div class="company" v-for="item in companyName">
                                      <div class="name" @click="toProduce(item.id)">
                                        {{item.name}}
                                      </div>
                                    </div>
                </el-dialog>
                家</span
              >
              <span
              >集聚家庭织机户<countTo
                class="data"
                :startVal="startVal"
                :endVal="175"
                :duration="2000"
              ></countTo
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
                <a class="data"
                ><countTo
                  class="data"
                  :startVal=0
                  :endVal="item.info"
                  :duration="2000"
                ></countTo
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
        <!-- <div class="" style="width: 900px; height: 850px"></div> -->
        <div class="park-cards">
          <div class="park-card" :style="parkCardBG">
            <div class="img">
              <img
                src="@/assets/images/icon/底部ICON/icon_1_press.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="title">园区总览</div>
          </div>
          <div class="park-card" :style="parkCardBG" @click="toParkServe">
            <div class="img">
              <img
                src="@/assets/images/icon/底部ICON/icon_3.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="title">园区服务</div>
          </div>
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
      <el-aside width="452px" class="right-aside">
        <div class="menu-three" :style="menuThreeBG">
          <div class="menu-three-title">
            <div class="icon">
              <img
                src="@/assets/images/icon/14_金融服务.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="title">园区经济</div>
          </div>
          <div class="menu-three-data">
            <div class="first-part">
              <span
              ><a
              ><countTo
                class="data"
                :startVal="startVal"
                :endVal="402.67"
                :duration="2000"
                :decimals="2"/></a
              >万/亩</span
              >
              <span
              ><a
              ><countTo
                class="data"
                :startVal="startVal"
                :endVal="24.83"
                :duration="2000"
                :decimals="2"/></a
              >万度/亩</span
              >
            </div>
            <div class="second-part">
              <span>亩均产值<a class="outputrate">↑ 10.54%</a></span>
              <span>亩均耗电<a class="outputrate">↑ 2.78%</a></span>
            </div>
            <div class="third-part" id="partEconomyChart" @click="toLoom"></div>
          </div>
        </div>
        <div class="menu-four" :style="menuFourBG">
          <div class="menu-four-title">
            <div class="icon">
              <img src="@/assets/images/icon/icon_9.png" alt="" srcset=""/>
            </div>
            <div class="title">企业服务占比</div>
          </div>
          <div id="enterpriseServeChart"></div>
        </div>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
  import xiaoweiyuanHeader from "@/components/XiaoweiyuanHeader";
  import countTo from "@/components/vue-count-to/vue-countTo.vue";
  import {charts} from "@/utils/index";

  export default {
    name: "cxjp",

    data() {
      return {
        dialog: false,
        companyName: [
          {name: '长兴凌众纺织有限公司', id: 1, c: 0.55},
          {name: '浙江常鑫纺织品有限公司', id: 2, c: 0.43},
          {name: '浙江永得利纺织科技有限公司', id: 3, c: 0.45},
          {name: '长兴腾鑫纺织有限公司', id: 4, c: 0.58},
          {name: '长兴雄鑫纺织有限公司', id: 5, c: 0.39},
          {name: '长兴珺帆纺织有限公司', id: 6, c: 0.42},
          {name: '长兴鑫泰纺织厂', id: 7, c: 0.35},
          {name: '长兴悦阳纺织股份有限公司', id: 8, c: 0.44},
          {name: '长兴嘉盛纺织有限公司', id: 9, c: 0.38},
          {name: '长兴杰能纺织科技有限公司', id: 10, c: 0.36},
          {name: '长兴诗悦纺织纺织科技有限公司', id: 11, c: 0.40},
          {name: '长兴夹浦金联纺织有限公司', id: 12, c: 0.33},
          {name: '湖州绿蒙纺织科技有限公司', id: 13, c: 0.47},
          {name: '浙江镁锦纺织有限公司', id: 14, c: 0.36},
          {name: '长兴和丝圆纺织有限公司', id: 15, c: 0.41},
          {name: '浙江欧莱尔纺织有限公司', id: 16, c: 0.32},
          {name: '长兴龙宇纺织有限公司', id: 17, c: 0.47},
          {name: '长兴中豪纺织有限公司', id: 18, c: 0.31},
          {name: '长兴翔宇纺织有限公司', id: 19, c: 0.34},
          {name: '长兴伯良纺织有限公司', id: 20, c: 43},
          {name: '长兴洲豪纺织股份有限公司', id: 21, c: 0.37},
          {name: '长兴庆裕纺织股份有限公司', id: 22, c: 0.46},
          {name: '长兴鑫港纺织有限公司', id: 23, c: 0.33},
          {name: '浙江创达纺织有限公司', id: 24, c: 0.29},
          {name: '浙江宏韬纺织科技有限公司', id: 25, c: 0.25},
          {name: '长兴美盛纺织股份有限公司', id: 26, c: 0.26},
        ],
        startVal: 0,
        endVal: 150,
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
          {title: "占地面积", info: 656.5, unit: "亩"},
          {title: "建筑面积", info: 801000, unit: "平方米"},
          {title: "计划总投资", info: 31.76, unit: "亿"},
          {title: "实际投资", info: 15.97, unit: "亿"},
        ],
        menuTwo: [
          {title: "企业人数", info: 2350, unit: "人"},
          {title: "织机总数", info: 5877, unit: "台"},
          // {title: "企业人数", info: 442, unit: "人"},
          // {title: "织机总数", info: 2208, unit: "台"},
        ],
      };
    },
    components: {
      xiaoweiyuanHeader,
      countTo,
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
    mounted() {
      this.renderDoughnutChart();
      this.renderParkEconomyChart();
      this.renderEnterpriseServeChart();
    },
    methods: {
      company() {
        this.dialog = true;
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
            {value: 5, name: "吴城", url: "http://www.enter-iot.cn/BigScreen/#/loomDistribution/all"},
            {value: 6, name: "丁新", url: "http://www.enter-iot.cn/BigScreen/#/loomDistribution/all"},
            {value: 13, name: "北村", url: "http://www.enter-iot.cn/BigScreen/#/loomDistribution/all"},
            {value: 7, name: "香山", url: "http://www.enter-iot.cn/BigScreen/#/loomDistribution/all"},
            {value: 11, name: "喜鹊斗", url: "http://www.enter-iot.cn/BigScreen/#/loomDistribution/all"},
            {value: 13, name: "环丁", url: "http://www.enter-iot.cn/BigScreen/#/loomDistribution/all"},
            {value: 5, name: "陶家湾", url: "http://www.enter-iot.cn/BigScreen/#/loomDistribution/all"},
          ],
          legend: {show: false},
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
              name: "亩均产值",
              data: [18, 32, 60],
            },
            {
              name: "亩均耗电",
              data: [356.695, 399.99, 442.165],
            },
          ],
        });
      },
      renderEnterpriseServeChart() {
        charts("enterpriseServeChart", {
          seriesType: "pie",
          data: [
            "企业管理咨询",
            "检验检测",
            "电商培育",
            "技术转移",
            "创意设计",
            "知识产权",
            "法律咨询",
            "科技中介",
          ],
          series: [
            {value: 21.5, name: "企业管理咨询"},
            {value: 21.9, name: "检验检测"},
            {value: 14.8, name: "电商培育"},
            {value: 12.5, name: "技术转移"},
            {value: 10.6, name: "创意设计"},
            {value: 7.7, name: "知识产权"},
            {value: 5.6, name: "法律咨询"},
            {value: 15.7, name: "科技中介"},
          ],
        });
      },
      toParkServe() {
        this.$router.push("/cxjpxiaoweiyuan");
      },
      toProduceOverview() {
        this.$router.push("/cxjpallpro");
      },
      toProduce(id) {

        this.$router.push({path: `/test/${id}`, query: {id: id}});
      },
      toLoom() {
        this.$router.push("/loomDistribution/all");
      }
    },
  };
</script>

<style lang="less" scoped>
  .container {
    margin: 0;
    padding: 0;
    // width: 1920px;
    height: 1080px;
    width: 100%;
    // height: 100%;
    color: #ffffff;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient(#0a1947, #344b6e);
  }

  .el-dialog__wrapper {

    .el-dialog__body {

      .company {

        .name {
          height: 40px;
          text-align: center;
          color: #ffffff;
          font-size: 16px;
        }
      }
    }
  }

  .main-container {
    width: 100%;
    height: calc(100% - 102px);
    margin: 0;
    margin-top: 40px;
    display: flex;
    justify-content: space-around !important;
    padding: 0 15px;
  }

  .left-aside {
    .menu-one {
      width: 100%;
      height: 302px;
      background-size: 100% 100%;
      // padding-top: 80px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
      padding-top: 16px;

      .menu-one-item {
        width: 49%;
        font-size: 20px;
        text-align: left;
        display: flex;
        flex-direction: column;

        span {
          margin-left: 16px;
        }

        .data {
          font-size: 35px;
          color: #287ee7;
          margin-left: 0;
        }
      }
    }

    .menu-two {
      width: 100%;
      height: 602px;
      background-size: cover;

      .menu-two-title {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .icon {
          margin-left: 30px;
          margin-right: 10px;

          img {
            width: 35px;
            height: 35px;
          }
        }

        .title {
          font-size: 25px;
          font-weight: bold;
          letter-spacing: 2px;
        }
      }

      .menu-two-data {
        font-size: 20px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding-top: 24px;

        .menu-two-data-item {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: baseline;
          flex-wrap: wrap;
          padding-left: 20px;

          span {
            width: 50%;
            justify-content: flex-start;
            text-align: left;

            .dialog-style {
              background-color: #0D1528;
              /*background-color: #0E1526 !important;*/
              padding: 0 !important;
              width: 800px;
            }

            .data {
              font-size: 50px;
              color: #10ffff;
            }

            // .ratedata {
            //   color: #f8b033;
            // }
          }

          span:nth-child(3) {
            width: 100%;
          }
        }

        .menu-two-data-item2 {
          width: 50%;
          font-size: 20px;
          text-align: center;
          margin-top: 30px;
          display: flex;
          flex-direction: column;

          .data {
            font-size: 35px;
            color: #287ee7;
          }
        }
      }
    }
  }

  #doughnutChart {
    width: 100%;
    height: 300px;
    margin-top: 32px;
  }

  .right-aside {
    //   height: 80%;
    width: 452px;
    // height: 442px;
    // position: fixed;
    // top: 110px;
    // right: 30px;
    .menu-three {
      width: 100%;
      height: 442px;
      background-size: 100% 100%;

      .menu-three-title {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .icon {
          margin-left: 30px;
          margin-right: 10px;

          img {
            width: 35px;
            height: 35px;
          }
        }

        .title {
          font-size: 25px;
          font-weight: bold;
          letter-spacing: 2px;
        }
      }

      .menu-three-data {
        font-size: 20px;

        .first-part {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          padding-top: 32px;

          a {
            font-size: 35px;
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
          margin-top: 16px;

          span {
            width: 50%;
          }

          a {
            font-weight: bold;
            margin-left: 16px;
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
      height: 460px;
      background-size: 100% 100%;
      margin-top: 25px;

      .menu-four-title {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .icon {
          margin-left: 30px;
          margin-right: 10px;

          img {
            width: 35px;
            height: 35px;
          }
        }

        .title {
          font-size: 25px;
          font-weight: bold;
          letter-spacing: 2px;
        }
      }
    }
  }

  #partEconomyChart {
    width: 430px;
    height: 320px;
  }

  #enterpriseServeChart {
    width: 452px;
    height: 350px;
    margin-top: 25px;
  }

  .mid-main {
    padding-top: 0;
    // width: 900px;
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
        width: 200px;
        height: 100px;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 20px;

        .img {
          position: relative;
          width: 60px;
          height: 60px;
        }

        .title {
          height: 40px;
          position: relative;
          font-size: 25px;
          font-weight: bold;
          letter-spacing: 2px;
        }
      }
    }
  }

  .el-header {
    text-align: center;
    width: 100%;
    padding: 0;
  }

  .el-aside {
    text-align: center;
    //   overflow: hidden;
  }

  .el-main {
    text-align: center;
    // line-height: 160px;
    background-size: 100% 100%;
  }

  body > .el-container {
    // margin-bottom: 40px;
  }
</style>
