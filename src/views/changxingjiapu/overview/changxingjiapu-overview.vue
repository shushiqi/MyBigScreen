<template>
  <el-container class="container" :style="elMainBG">
    <el-header>
      <xiaoweiyuanHeader title="浙江鑫涛科技股份有限公司纺织中心">
      </xiaoweiyuanHeader>
    </el-header>
    <el-container class="main-container">
      <el-aside width="28.25rem" class="left-aside">
        <div class="menu-one" :style="menuOneBG">
          <div class="menu-title">
            <div class="icon">
              <img src="@/assets/images/icon/icon_6.png" alt="" srcset="" />
            </div>
            <div class="title">企业简介</div>
          </div>
          <div class="menu-one-content">
            <div
              class="menu-one-item"
              v-for="item in menuOne"
              :key="item.title"
            >
              <span class="title">{{ item.title }}</span>
              <span
                ><a class="data"
                  ><countTo
                    class="data"
                    :startVal="startVal"
                    :endVal="item.info"
                    :duration="2000"
                    :decimals="2" /></a
                >{{ item.unit }}</span
              >
            </div>
          </div>
        </div>
        <div class="menu-two" :style="menuTwoBG">
          <div class="menu-title">
            <div class="icon">
              <img src="@/assets/images/icon/icon_6.png" alt="" srcset="" />
            </div>
            <div class="title">消防设备</div>
          </div>
          <div class="meun-info">
            <div class="item-one">
              <div
                class="devices"
                v-for="(item, index) in devices"
                :key="index"
              >
                <span class="type">{{ item.type }}</span>
                <span class="amount"
                  >设备总数:<a>
                    <countTo
                      :startVal="0"
                      :endVal="item.amount"
                      :duration="2000"
                    ></countTo></a
                ></span>
                <div class="device-status">
                  <div class="normal data">
                    <span>正常</span>
                    <span class="normal-data">
                      <countTo
                        :startVal="0"
                        :endVal="item.normalDevice"
                        :duration="2000"
                      ></countTo>
                    </span>
                  </div>
                  <div class="abnormal data">
                    <span>异常</span>
                    <span class="abnormal-data">
                      <countTo
                        :startVal="0"
                        :endVal="item.abnormalDevice"
                        :duration="2000"
                      ></countTo>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="item-two">
              <Table
                :title="fireEquipmentsLabelList"
                :data="fireEquipments"
                style="width: 26.25rem; height: 15rem"
              ></Table>
            </div>
          </div>
        </div>
      </el-aside>
      <el-main class="mid-main">
        <!-- <div class="" style="width: 56.25rem; height: 53.125rem"></div> -->
        <div class="park-cards">
          <div class="park-card" :style="parkCardBG">
            <div class="img">
              <img
                src="@/assets/images/icon/底部ICON/icon_1_press.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="title">企业总览</div>
          </div>
          <!-- <div class="park-card" :style="parkCardBG" @click="toParkServe">
            <div class="img">
              <img
                src="@/assets/images/icon/底部ICON/icon_3.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="title">园区服务</div>
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
        <div class="menu-one" :style="rightAsideBgOne">
          <div class="menu-title">
            <div class="icon">
              <img src="@/assets/images/icon/icon_6.png" alt="" srcset="" />
            </div>
            <div class="title">能耗统计</div>
          </div>
          <div class="item-one">
            <div
              class="devices"
              v-for="(item, index) in EnergyConsumptionStatistics"
              :key="index"
            >
              <span class="amount"
                >{{ item.type }}表总数:<a>{{ item.deviceAmount }}</a
                >个</span
              >
              <div class="device-status">
                <div class="normal data">
                  <span>当日用{{ item.type }}{{ item.unit }}</span>
                  <span class="normal-data"
                    ><countTo
                      :startVal="0"
                      :endVal="item.today"
                      :duration="2000"
                      :decimals="2"
                    ></countTo
                  ></span>
                </div>
                <div class="abnormal data">
                  <span>当月用{{ item.type }}{{ item.unit }}</span>
                  <span class="normal-data"
                    ><countTo
                      :startVal="startVal"
                      :endVal="item.currentMonth"
                      :duration="2000"
                      :decimals="2"
                    ></countTo
                  ></span>
                  <!-- <span class="normal-data">{{item.currentMonth}}</span> -->
                </div>
              </div>
            </div>
          </div>
          <div class="menu-title">
            <div class="icon">
              <img src="@/assets/images/icon/icon_6.png" alt="" srcset="" />
            </div>
            <div class="title">能耗走势</div>
          </div>
          <div class="item-two">
            <div id="EnergyConsumptionTrend"></div>
          </div>
        </div>
        <div class="menu-two" :style="rightAsideBgTwo">
          <div class="menu-title">
            <div class="icon">
              <img src="@/assets/images/icon/icon_6.png" alt="" srcset="" />
            </div>
            <div class="title">特种设备列表</div>
          </div>
          <div class="item">
            <div
              class="info"
              v-for="(item, index) in EnvironmentalData"
              :key="index"
            >
              <span class="title">{{ item.title }}</span>
              <span class="value">
                <countTo
                  :startVal="0"
                  :endVal="item.value"
                  :duration="2000"
                  :decimals="2"
                ></countTo
                >台</span
              >
            </div>
          </div>
        </div>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
import xiaoweiyuanHeader from "@/components/XiaoweiyuanHeader";
import Table from "@/components/table.vue";
import countTo from "@/components/vue-count-to/vue-countTo.vue";
import { charts } from "@/utils/index";

export default {
  name: "cxjp",
  data() {
    return {
      dialog: false,
      companyName: [
        { name: "长兴凌众纺织有限公司", id: 1, c: 0.55 },
        { name: "浙江常鑫纺织品有限公司", id: 2, c: 0.43 },
        { name: "浙江永得利纺织科技有限公司", id: 3, c: 0.45 },
        { name: "长兴腾鑫纺织有限公司", id: 4, c: 0.58 },
        { name: "长兴雄鑫纺织有限公司", id: 5, c: 0.39 },
        { name: "长兴珺帆纺织有限公司", id: 6, c: 0.42 },
        { name: "长兴鑫泰纺织厂", id: 7, c: 0.35 },
        { name: "长兴悦阳纺织股份有限公司", id: 8, c: 0.44 },
        { name: "长兴嘉盛纺织有限公司", id: 9, c: 0.38 },
        { name: "长兴杰能纺织科技有限公司", id: 10, c: 0.36 },
        { name: "长兴诗悦纺织纺织科技有限公司", id: 11, c: 0.4 },
        { name: "长兴夹浦金联纺织有限公司", id: 12, c: 0.33 },
        { name: "湖州绿蒙纺织科技有限公司", id: 13, c: 0.47 },
        { name: "浙江镁锦纺织有限公司", id: 14, c: 0.36 },
        { name: "长兴和丝圆纺织有限公司", id: 15, c: 0.41 },
        { name: "浙江欧莱尔纺织有限公司", id: 16, c: 0.32 },
        { name: "长兴龙宇纺织有限公司", id: 17, c: 0.47 },
        { name: "长兴中豪纺织有限公司", id: 18, c: 0.31 },
        { name: "长兴翔宇纺织有限公司", id: 19, c: 0.34 },
        { name: "长兴伯良纺织有限公司", id: 20, c: 43 },
        { name: "长兴洲豪纺织股份有限公司", id: 21, c: 0.37 },
        { name: "长兴庆裕纺织股份有限公司", id: 22, c: 0.46 },
        { name: "长兴鑫港纺织有限公司", id: 23, c: 0.33 },
        { name: "浙江创达纺织有限公司", id: 24, c: 0.29 },
        { name: "浙江宏韬纺织科技有限公司", id: 25, c: 0.25 },
        { name: "长兴美盛纺织股份有限公司", id: 26, c: 0.26 },
      ],
      startVal: 0,
      endVal: 150,
      menuOneBG: {
        backgroundImage:
          "url(" + require("@/assets/images/background/452302.png") + ")",
      },
      menuTwoBG: {
        backgroundImage:
          "url(" + require("@/assets/images/background/bg_2.png") + ")",
      },
      rightAsideBgOne: {
        backgroundImage:
          "url(" + require("@/assets/images/background/452602.png") + ")",
      },
      rightAsideBgTwo: {
        backgroundImage:
          "url(" + require("@/assets/images/background/452302.png") + ")",
      },
      parkCardBG: {
        backgroundImage:
          "url(" + require("@/assets/images/background/200100.png") + ")",
      },
      elMainBG: {
        backgroundImage:
          "url(" + require("@/assets/images/background/bg_xt.jpg") + ")",
      },
      fullHeight: document.documentElement.innerHeigh,
      menuOne: [
        { title: "占地面积", info: 50, unit: "亩" },
        { title: "建筑面积", info: 42000, unit: "平方米" },
        // { title: "计划总投资", info: 31.76, unit: "亿" },
        // { title: "实际投资", info: 15.97, unit: "亿" },
        { title: "企业人数", info: 162, unit: "人" },
        { title: "织机总数", info: 270, unit: "台" },
      ],
      devices: [
        {
          type: "智能消防栓",
          amount: 0,
          normalDevice: 0,
          abnormalDevice: 0,
        },
        {
          type: "智能烟感",
          amount: 0,
          normalDevice: 0,
          abnormalDevice: 0,
        },
      ],
      fireEquipments: [
        {
          device_name: "",
          unit_name: "",
          postion_desc: "",
          online: "",
        },
      ],
      fireEquipmentsLabelList: [
        {
          label: "设备名称",
          prop: "device_name",
        },
        // {
        //   label: "单位名称",
        //   prop: "unit_name",
        // },
        {
          label: "地址",
          prop: "postion_desc",
        },
        {
          label: "状态",
          prop: "online",
        },
      ],
      EnergyConsumptionStatistics: [
        {
          type: "电",
          unit: "(度)",
          deviceAmount: 0,
          today: 0,
          currentMonth: 0,
        },
        // {
        //   type: "水",
        //   unit: "(吨)",
        //   deviceAmount: 0,
        //   today: 0,
        //   currentMonth: 0,
        // },
      ],
      EnvironmentalData: [
        {
          title: "压力容器",
          value: 51,
        },
        {
          title: "机动设备",
          value: 11,
        },
        {
          title: "电梯",
          value: 7,
        },
        {
          title: "游乐设施",
          value: 0,
        },
        {
          title: "起重机",
          value: 0,
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
  mounted() {
    this.GetEleWat();
    this.GetEleWatDetail();
    // this.GetEnvironmentalData();
    this.GetEquipmentList();
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
    GetEquipmentList() {
      this.$store
        .dispatch("others/EquipmentList", { park: "dingxin" })
        .then((res) => {
          this.fireEquipments = res.data;
          this.devices[0].amount = res.data[0].xfsnum;
          this.devices[0].normalDevice = res.data[0].xfsonnum;
          this.devices[0].abnormalDevice = res.data[0].xfsoffnum;
          this.devices[1].amount = res.data[0].ygnum;
          this.devices[1].normalDevice = res.data[0].ygonnum;
          this.devices[1].abnormalDevice = res.data[0].ygoffnum;
          if (res.data.length < 6) {
            for (let i = 0; i < 6 - res.data.length; i++) {
              this.fireEquipments.concat({});
            }
          }
        });
    },
    GetEleWat() {
      this.$store
        .dispatch("others/EleWatInstrumentSum", { park: "wucheng" })
        .then((res) => {
          this.EnergyConsumptionStatistics[0].deviceAmount =
            +res.data[0].elecount;
          this.EnergyConsumptionStatistics[1].deviceAmount =
            +res.data[0].watcount;
        });
      this.$store
        .dispatch("others/ParkWater", { park: "wucheng" })
        .then((res) => {
          this.EnergyConsumptionStatistics[1].today = +res.data[0].dqty;
          this.EnergyConsumptionStatistics[1].currentMonth = +res.data[0].mqty;
        });
      this.$store
        .dispatch("others/ParkElectric", { park: "wucheng" })
        .then((res) => {
          this.EnergyConsumptionStatistics[0].today = +res.data[0].dqty;
          this.EnergyConsumptionStatistics[0].currentMonth = +res.data[0].mqty;
        });
    },
    GetEleWatDetail() {
      this.$store
        .dispatch("others/ParkEleWatDetail", { park: "wucheng" })
        .then((res) => {
          const EleWatData = [
            {
              name: "电",
              data: [],
            },
            {
              name: "水",
              data: [],
            },
          ];
          for (let index = 0; index < res.data.length; index++) {
            const element = res.data[index];
            if (index <= 11) {
              EleWatData[0].data.push(element.qty);
            } else {
              EleWatData[1].data.push(element.qty);
            }
          }
          this.renderEnergyTrend(EleWatData);
        });
    },
    GetEnvironmentalData() {
      this.$store
        .dispatch("others/SewageIndex", { park: "wucheng" })
        .then((res) => {
          this.EnvironmentalData[0].value = res.data[0].phvalue;
          this.EnvironmentalData[1].value = res.data[0].anvalue;
          this.EnvironmentalData[2].value = res.data[0].phosphorous;
          this.EnvironmentalData[3].value = res.data[0].fossilvalue;
          this.EnvironmentalData[4].value = res.data[0].floatvalue;
          this.EnvironmentalData[5].value = res.data[0].oxygenvalue;
        });
    },
    renderEnergyTrend(data) {
      charts("EnergyConsumptionTrend", {
        seriesType: "line",
        legend: {
          show: true,
          textStyle: {
            color: "#ffffff",
          },
        },
        xAxis: {
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
        },
        // tooltip: {
        //   show: true,
        // },
        series: data,
      });
    },
    toParkServe() {
      this.$router.push("/cxjpxiaoweiyuan");
    },
    toProduceOverview() {
      this.$router.push("/cxjpallpro");
    },
    toProduce(id) {
      this.$router.push({ path: `/test/${id}`, query: { id: id } });
    },
    toLoom() {
      this.$router.push("/loomDistribution/all");
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  margin: 0;
  padding: 0;
  // width: 120rem;
  height: 67.5rem;
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
        height: 2.5rem;
        text-align: center;
        color: #ffffff;
        font-size: 1rem;
      }
    }
  }
}

.main-container {
  width: 100%;
  max-height: 63.75rem;
  /*height: calc(100% - 6.375rem);*/
  margin: 0;
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-around !important;
  padding: 0 0.9375rem;

  .left-aside {
    .menu-one {
      width: 100%;
      height: 18.875rem;
      background-size: 100% 100%;
      // padding-top: 5rem;
      margin-bottom: 1.25rem;

      .menu-title {
        display: flex;
        flex-direction: row;
        font-size: 1.5625rem;
        .icon {
          margin-left: 1.875rem;
          margin-right: 0.625rem;

          img {
            width: 2.1875rem;
            height: 2.1875rem;
          }
        }
      }
      .menu-one-content {
        height: 15rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        .menu-one-item {
          width: 49%;
          font-size: 1.25rem;
          text-align: left;
          display: flex;
          flex-direction: column;

          span {
            margin-left: 1rem;
          }

          .data {
            font-size: 2.1875rem;
            color: #287ee7;
            margin-left: 0;
          }
        }
      }
    }

    .menu-two {
      width: 100%;
      height: 37.625rem;
      background-size: cover;
      .menu-title {
        display: flex;
        flex-direction: row;
        font-size: 1.5625rem;
        .icon {
          margin-left: 1.875rem;
          margin-right: 0.625rem;

          img {
            width: 2.1875rem;
            height: 2.1875rem;
          }
        }
      }
      .meun-info {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        .item-one {
          width: 100%;
          height: 14.375rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          .devices {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;

            .type {
              font-size: 1.375rem;
              font-weight: bold;
              letter-spacing: 0.125rem;
            }

            .amount {
              a {
                font-size: 1.625rem;
                color: #287ef7;
              }
            }

            .device-status {
              width: 11.25rem;
              height: 7.5rem;
              background-color: #141738;
              border: 0.0625rem solid #142dc9;
              border-radius: 0.25rem;
              display: flex;
              justify-content: space-around;

              .data {
                display: flex;
                flex-direction: column;
                justify-content: space-around;

                .normal-data {
                  font-size: 1.625rem;
                }

                .abnormal-data {
                  font-size: 1.625rem;
                }
              }
            }
          }
        }

        .item-two {
          width: 90%;
          height: 16rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .item-three {
          width: 90%;
          height: 15.625rem;
        }
      }
    }
  }

  #doughnutChart {
    width: 100%;
    height: 18.75rem;
    margin-top: 2rem;
  }

  .right-aside {
    .menu-one {
      width: 100%;
      height: 37.625rem;
      background-size: 100% 100%;
      .menu-title {
        display: flex;
        flex-direction: row;
        font-size: 1.5625rem;
        .icon {
          margin-left: 1.875rem;
          margin-right: 0.625rem;

          img {
            width: 2.1875rem;
            height: 2.1875rem;
          }
        }
      }

      .item-one {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: 2rem;
        .devices {
          .amount {
            a {
              font-size: 1.625rem;
              color: #287ef7;
              margin-left: 1rem;
            }
          }

          .device-status {
            width: 11.875rem;
            height: 11.25rem;
            background-color: #141738;
            border: 0.0625rem solid #142dc9;
            border-radius: 0.25rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            margin-top: 0.3125rem;

            .data {
              text-align: center;

              .normal-data {
                font-size: 1.625rem;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
              }
            }
          }
        }
      }

      .item-two {
        width: 100%;
        height: 13.75rem;
        display: flex;
        justify-content: center;

        #EnergyConsumptionTrend {
          width: 26.25rem;
          height: 17.5rem;
        }
      }
    }

    .menu-two {
      width: 100%;
      height: 18.875rem;
      background-size: 100% 100%;
      margin-top: 1.875rem;

      .menu-title {
        display: flex;
        flex-direction: row;
        font-size: 1.5625rem;
        .icon {
          margin-left: 1.875rem;
          margin-right: 0.625rem;
          img {
            width: 2.1875rem;
            height: 2.1875rem;
          }
        }
      }

      .item {
        width: 100%;
        height: 12.5rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding-top: 1rem;
        // align-items: center;
        .info {
          padding-top: 1rem;
          // padding-left: 1rem;
          width: 49%;
          height: 3.125rem;
          display: flex;
          justify-content: space-around;
          .title{
            display: flex;
            align-items: center;
          }
          .value {
            font-size: 1.625rem;
            color: #10ffff; display: flex;
            align-items: center;
          }
        }
      }
    }
  }
  #partEconomyChart {
    width: 26.875rem;
    height: 20rem;
  }

  #enterpriseServeChart {
    width: 28.25rem;
    height: 21.875rem;
    margin-top: 1.5625rem;
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
  // line-height: 10rem;
  background-size: 100% 100%;
}

body > .el-container {
  // margin-bottom: 2.5rem;
}
</style>
