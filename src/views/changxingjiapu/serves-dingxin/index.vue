<template>
  <el-container class="container" :style="elMainBG">
    <el-header>
      <xiaoweiyuanHeader title="长兴夹浦小微园丁新分部"/>
    </el-header>
    <el-container class="main-container">
      <el-aside width="28.25rem" class="left-aside">
        <div class="menu" :style="leftMenuBG">
          <div class="menu-title">
            <div class="icon">
              <img src="@/assets/images/icon/icon_6.png" alt="" srcset=""/>
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
                      :endVal="item.amount"
                      :duration="2000"
                    ></countTo></a
                ></span>
                <div class="device-status">
                  <div class="normal data">
                    <span>正常</span>
                    <span class="normal-data">
                      <countTo
                        :endVal="item.normalDevice"
                        :duration="2000"
                      ></countTo
                      ></span>
                  </div>
                  <div class="abnormal data">
                    <span>异常</span>
                    <span class="abnormal-data">
                      <countTo
                        :endVal="item.abnormalDevice"
                        :duration="2000"
                      ></countTo
                      ></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="item-two">
              <Table
                :title="fireEquipmentsLabelList"
                :data="fireEquipments"
                style="width: 26.25rem; height: 12.5rem"
              ></Table>
<!--              <equipments-table-->
<!--                :data="fireEquipments"-->
<!--                style="width: 26.25rem; height: 17.5rem"-->
<!--              >-->
<!--              </equipments-table>-->
            </div>
            <div class="item-three">
              <div class="menu-title">
                <div class="icon" style="margin-left: 0">
                  <img src="@/assets/images/icon/icon_6.png" alt="" srcset=""/>
                </div>
                <div class="title">待处理事件</div>
              </div>
              <div class="menu-info">
                <Table
                  :title="pendingEventsLabelList"
                  :data="pendingEvents"
                  style="width: 25rem; height: 9.375rem"
                  :showHeader="false"
                ></Table>
              </div>
            </div>
          </div>
        </div>
      </el-aside>
      <el-main class="mid-main" style="width: 57.625rem">
        <div class="main-item" :style="midMainBG">
          <div class="menu-title">
            <div class="icon">
              <img src="@/assets/images/icon/icon_6.png" alt="" srcset=""/>
            </div>
            <div class="title">安防概况总览</div>
          </div>
          <div class="menu-one">
            <div class="camerasSum">
              <span
              >摄像头总数<a
              ><countTo :endVal="2" :duration="2000"></countTo></a
              ><a>0</a>个</span
              >
            </div>
            <div class="inPark">
              <span
              >在园人数:
                <a class="normal-data"
                ><countTo
                  :endVal="CarAndManData.ManStay"
                  :duration="2000"
                ></countTo></a
                ></span>
              <span
              >在园车辆:
                <a class="normal-data"
                ><countTo
                  :endVal="CarAndManData.CarStay"
                  :duration="2000"
                ></countTo></a
                ></span>
            </div>
          </div>
          <div class="menu-two">
            <div class="cameras">
              <div class="item">
                <img src="@/assets/images/icon/icon_kz.png" alt=""/>
                <span
                >可控制摄像头数:<a class="controllable">
                    <countTo :endVal="20" :duration="2000"></countTo></a
                ></span>
              </div>
              <div class="item">
                <img src="@/assets/images/icon/icon_gz.png" alt=""/>
                <span
                >故障摄像头数:<a class="abnormal-data"
                ><countTo :endVal="0" :duration="2000"></countTo></a
                ></span>
              </div>
            </div>
            <div class="inPark">
              <div class="item">
                <span
                >今日进园人数:<a class="normal-data"
                ><countTo
                  :endVal="CarAndManData.ManIn"
                  :duration="2000"
                ></countTo> </a
                ></span>
                <span
                >今日进园车辆:<a class="normal-data">
                    <countTo
                      :endVal="CarAndManData.CarIn"
                      :duration="2000"
                    ></countTo></a
                ></span>
                <span
                >今日出园人数:<a class="normal-data">
                    <countTo
                      :endVal="CarAndManData.ManOut"
                      :duration="2000"
                    ></countTo></a
                ></span>
                <span
                >今日出园车辆:<a class="normal-data">
                    <countTo
                      :endVal="CarAndManData.CarOut"
                      :duration="2000"
                    ></countTo></a
                ></span>
              </div>
            </div>
          </div>
          <div class="menu-three">
            <div class="camera-list">
              <div class="menu-title">
                <div class="icon">
                  <img src="@/assets/images/icon/icon_6.png" alt="" srcset=""/>
                </div>
                <div class="title">摄像头列表</div>
              </div>
              <div class="camera-table">
                <el-table
                  :data="CamerasList"
                  style="width: 26.25rem"
                  :show-header="false"
                  min-height="21.875rem"
                  :header-cell-style="headenterpriseListHeaderStyle"
                  :row-style="enterpriseListStyle"
                  :cell-style="{ padding: 0 }"
                  @row-click="toCamera"
                >
                  <el-table-column align="center" min-width="50">
                    <template slot-scope="scope">
                      <div class="table-index">
                        {{ scope.$index + 1 }}
                      </div>
                    </template>
                  </el-table-column>

                  <el-table-column
                    prop="company"
                    show-overflow-tooltip
                    label="单位名称"
                    min-width="150"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="position"
                    label="位置"
                    min-width="100"
                    align="center"
                  >
                  </el-table-column>
                </el-table>
              </div>
            </div>
            <div class="personnel-statistics">
              <div class="menu-title">
                <div class="title">人员进出统计</div>
              </div>
              <div id="InAndOutStatistics"></div>
            </div>
          </div>
        </div>
        <div class="park-cards">
          <div class="park-card" :style="parkCardBG" @click="toParkOverview">
            <div class="img">
              <img
                src="@/assets/images/icon/底部ICON/icon_1.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="title">丁新园区总览</div>
          </div>
          <div class="park-card" :style="parkCardBG">
            <div class="img">
              <img
                src="@/assets/images/icon/底部ICON/icon_5_press.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="title">丁新园区服务</div>
          </div>
          <div class="park-card" :style="parkCardBG" @click="toProduceOverview">
            <div class="img">
              <img
                src="@/assets/images/icon/底部ICON/icon_2.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="title">丁新生产总览</div>
          </div>
        </div>
      </el-main>
      <el-aside width="28.25rem" class="right-aside">
        <div class="menu-one" :style="rightAsideBgOne">
          <div class="menu-title">
            <div class="icon">
              <img src="@/assets/images/icon/icon_6.png" alt="" srcset=""/>
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
                    :endVal="item.currentMonth"
                    :duration="2000"
                    :decimals="2"
                  ></countTo
                  ></span>
                </div>
              </div>
            </div>
          </div>
          <div class="menu-title">
            <div class="icon">
              <img src="@/assets/images/icon/icon_6.png" alt="" srcset=""/>
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
              <img src="@/assets/images/icon/icon_6.png" alt="" srcset=""/>
            </div>
            <div class="title">环境数据监测</div>
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
                  :endVal="item.value"
                  :duration="2000"
                  :decimals="2"
                ></countTo
                ></span>
            </div>
          </div>
        </div>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
  import xiaoweiyuanHeader from "@/components/XiaoweiyuanHeader";
  import Table from "@/components/table";
  import countTo from "@/components/vue-count-to/vue-countTo.vue";
  import EquipmentsTable from "../serves/components/equipments-table.vue";
  import "./index.less";
  import {charts} from "@/utils/index";

  export default {
    name: "cxjpxiaoweiyuan-dingxin",
    components: {
      xiaoweiyuanHeader,
      countTo,
      Table,
      EquipmentsTable,
    },
    data() {
      return {
        leftMenuBG: {
          backgroundImage:
            "url(" + require("@/assets/images/background/452922.png") + ")",
        },
        elMainBG: {
          backgroundImage:
            "url(" + require("@/assets/images/background/bg_dingxin.jpg") + ")",
        },
        midMainBG: {
          backgroundImage:
            "url(" + require("@/assets/images/background/922792.png") + ")",
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
        devices: [
          {
            type: "智能消防栓",
            amount: 1,
            normalDevice: 1,
            abnormalDevice: 0,
          },
          {
            type: "智能烟感",
            amount: 3,
            normalDevice: 3,
            abnormalDevice: 0,
          },
        ],
        fireEquipmentsLabelList: [
          {
            label: "设备名称",
            prop: "device_name",
          },
          {
            label: "单位名称",
            prop: "unit_name",
          },
          {
            label: "地址",
            prop: "postion_desc",
          },
          {
            label: "状态",
            prop: "online",
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
        CarAndManData: {
          CarIn: 0,
          CarOut: 0,
          CarStay: 0,
          ManIn: 0,
          ManOut: 0,
          ManStay: 0,
        },
        pendingEvents: [{}, {}, {}],
        pendingEventsLabelList: [
          {
            label: "时间",
            prop: "date",
          },
          {
            label: "单位名称",
            prop: "park",
          },
          {
            label: "告警类型",
            prop: "postitypeon_desc",
          },
          {
            label: "告警方式",
            prop: "way",
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
          {
            type: "水",
            unit: "(吨)",
            deviceAmount: 0,
            today: 0,
            currentMonth: 0,
          },
        ],
        EnvironmentalData: [
          {
            title: "PH",
            value: 0,
          },
          {
            title: "氨氮",
            value: 0,
          },
          {
            title: "总磷",
            value: 0,
          },
          {
            title: "石油类",
            value: 0,
          },
          {
            title: "悬浮物",
            value: 0,
          },
          {
            title: "化学需氧量",
            value: 0,
          },
        ],
        CamerasList: [
          {
            position: "长兴伯良纺织",
            company: "厂区主干道",
            url: `cameralist/hls_bl1.html`,
          },
          {
            position: "长兴伯良纺织",
            company: "三楼原料区",
            url: `cameralist/hls_bl2.html`,
          },
          {
            position: "长兴伯良纺织",
            company: "打卷车间",
            url: `cameralist/hls_bl3.html`,
          },
          {
            position: "长兴伯良纺织",
            company: "一楼大门口",
            url: `cameralist/hls_bl4.html`,
          },
          {
            position: "长兴伯良纺织",
            company: "一楼喷水车间",
            url: `cameralist/hls_bl5.html`,
          },
          {
            position: "长兴伯良纺织",
            company: "三楼加弹车间",
            url: `cameralist/hls_bl6.html`,
          },
          {
            position: "长兴伯良纺织",
            company: "二楼喷水车间东",
            url: `cameralist/hls_bl7.html`,
          },
          {
            position: "长兴伯良纺织",
            company: "二楼喷水车间西",
            url: `cameralist/hls_bl8.html`,
          },
          {
            position: "长兴伯良纺织",
            company: "一楼喷水车间西",
            url: `cameralist/hls_bl9.html`,
          },
          {
            position: "长兴伯良纺织",
            company: "厂区大门",
            url: `cameralist/hls_bl10.html`,
          },
        ],
        _timer: function () {
        },
      };
    },
    mounted() {
      this.GetData();
      this.timeRefresh();
    },
    methods: {
      GetData() {
        this.GetEquipmentList();
        this.GetCarManInPark();
        // 水电仪表个数 当日、月水电统计
        this.GetEleWat();
        this.GetEleWatDetail();
        this.GetEnvironmentalData();
        this.GetFireAlarm();
      },
      timeRefresh() {
        this._timer = setInterval(() => {
          this.GetData();
        },  1000 * 60 * 5);
      },
      GetEquipmentList() {
        this.$store
          .dispatch("others/EquipmentList", {park: "dingxin"})
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
                this.fireEquipments = this.fireEquipments.concat([
                  {
                    device_name: "",
                    unit_name: "",
                    postion_desc: "",
                    online: "",
                  },
                ]);
              }
            }
          });
      },
      GetFireAlarm() {
        this.$store
          .dispatch("others/FireAlarm", {park: "dingxin"})
          .then((res) => {
            if (res.data.length > 0) {
              this.pendingEvents = res.data;
            }
          });
      },
      GetCarManInPark() {
        this.$store
          .dispatch("others/CarManInPark", {park: "dingxin"})
          .then((res) => {
            const InAndOutStatistics = [
              {
                name: "人员",
                data: [],
              },
              {
                name: "车辆",
                data: [],
              },
            ];
            this.CarAndManData.CarStay = res.data[0].carinpark;
            this.CarAndManData.ManStay = res.data[0].maninpark;
            this.CarAndManData.CarIn = res.data[0].incar;
            this.CarAndManData.CarOut = res.data[0].outcar;
            this.CarAndManData.ManIn = res.data[0].inman;
            this.CarAndManData.ManOut = res.data[0].outman;
            for (let i = 0; i < res.data.length; i++) {
              const element = res.data[i];
              InAndOutStatistics[0].data.push(element.carnum);
              InAndOutStatistics[1].data.push(element.mannum);
            }
            this.renderInAndOutStatistics(InAndOutStatistics);
          });
      },
      GetEleWat() {
        this.$store
          .dispatch("others/EleWatInstrumentSum", {park: "dingxin"})
          .then((res) => {
            this.EnergyConsumptionStatistics[0].deviceAmount =
              res.data[0].elecount;
            this.EnergyConsumptionStatistics[1].deviceAmount =
              res.data[0].watcount;
          });
        this.$store
          .dispatch("others/ParkWater", {park: "dingxin"})
          .then((res) => {
            this.EnergyConsumptionStatistics[1].today = res.data[0].dqty;
            this.EnergyConsumptionStatistics[1].currentMonth = res.data[0].mqty;
          });
        this.$store
          .dispatch("others/ParkElectric", {park: "dingxin"})
          .then((res) => {
            this.EnergyConsumptionStatistics[0].today = res.data[0].dqty;
            this.EnergyConsumptionStatistics[0].currentMonth = res.data[0].mqty;
          });
      },
      GetEleWatDetail() {
        this.$store
          .dispatch("others/ParkEleWatDetail", {park: "dingxin"})
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
          .dispatch("others/SewageIndex", {park: "dingxin"})
          .then((res) => {
            this.EnvironmentalData[0].value = res.data[0].phvalue;
            this.EnvironmentalData[1].value = res.data[0].anvalue;
            this.EnvironmentalData[2].value = res.data[0].phosphorous;
            this.EnvironmentalData[3].value = res.data[0].fossilvalue;
            this.EnvironmentalData[4].value = res.data[0].floatvalue;
            this.EnvironmentalData[5].value = res.data[0].oxygenvalue;
          });
      },
      toParkOverview() {
        this.$router.push("/cxjp-dingxin");
      },
      toProduceOverview() {
        this.$router.push("/cxjpdxpro");
      },
      enterpriseListStyle({row, rowIndex}) {
        let stylejson = {
          height: "2.5rem",
          color: "#ffffff",
        };
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
          stylejson.background = " linear-gradient(to right, #009af0 , #0283ab)";
          return stylejson;
        } else if (rowIndex == 2) {
          stylejson.background = " linear-gradient(to right, #009af0 , #0283ab)";
          return stylejson;
        } else if (rowIndex == 3) {
          stylejson.background = " linear-gradient(to right, #0283ab , #02778b)";
          return stylejson;
        }
      },
      renderEnergyTrend(data) {
        charts("EnergyConsumptionTrend", {
          seriesType: "line",
          legend: {
            show: true,
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
      renderInAndOutStatistics(data) {
        charts("InAndOutStatistics", {
          seriesType: "line",
          legend: {
            show: true,
          },
          xAxis: {
            data: [
              "0点",
              "1点",
              "2点",
              "3点",
              "4点",
              "5点",
              "6点",
              "7点",
              "8点",
              "9点",
              "10点",
              "11点",
              "12点",
              "13点",
              "14点",
              "15点",
              "16点",
              "17点",
              "18点",
              "19点",
              "20点",
              "21点",
              "22点",
              "23点",
            ],
          },
          // tooltip: {
          //   show: true,
          // },
          series: data,
        });
      },
      toCamera(row) {
        window.open(row.url);
      },
    },
  };
</script>

<style lang="less" scoped>
  .el-header {
    text-align: center;
    padding: 0;
  }

  .container {
    width: 100%;
    height: 67.5rem;
    // height: 100%;
    color: #ffffff;
    margin: 0;
    padding: 0;

    .main-container {
      width: 100%;
      height: calc(100% - 6.375rem);
      margin: 0;
      margin-top: 2.5rem;
      display: flex;
      justify-content: space-around !important;
      padding: 0 0.9375rem;

      .left-aside {
        .menu {
          width: 100%;
          height: 57.625rem;
          background-size: 100% 100%;

          .menu-title {
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
            justify-content: space-between;
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
              height: 21.25rem;
              display: flex;
              justify-content: space-around;
              align-items: center;
            }

            .item-three {
              width: 90%;
              height: 15.625rem;
            }
          }
        }
      }

      .mid-main {
        padding-top: 0;
        // width: 56.25rem;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: flex-end;
        flex: 1;

        .main-item {
          width: 57.625rem;
          height: 49.5rem;
          background-size: 100% 100%;
          margin-bottom: 1rem;

          .menu-title {
            .icon {
              margin-left: 1.875rem;
              margin-right: 0.625rem;

              img {
                width: 2.1875rem;
                height: 2.1875rem;
              }
            }
          }

          .menu-one {
            width: 90%;
            height: 5.625rem;
            margin-left: 5%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1rem;

            .camerasSum {
              width: 50%;
              height: 100%;
              display: flex;
              justify-content: flex-start;

              span {
                a {
                  font-size: 3rem;
                  font-weight: bold;
                  margin-right: 0.5rem;
                  padding: 0 0.5rem;
                  background: linear-gradient(0deg,
                  rgba(0, 76, 139, 0.5),
                  rgba(0, 79, 255, 0.5));
                }
              }
            }

            .inPark {
              width: 50%;
              display: flex;
              justify-content: flex-start;

              span {
                width: 50%;
                text-align: center;

                a {
                  font-size: 1.625rem;
                  margin-left: 0.3125rem;
                }
              }
            }
          }

          .menu-two {
            width: 90%;
            margin-left: 5%;
            display: flex;
            justify-content: flex-start;

            a {
              font-size: 1.625rem;
            }

            .cameras {
              width: 45%;
              height: 5.625rem;
              background-color: rgb(23, 24, 57);
              border: 0.0625rem solid #142dc9;
              border-radius: 0.3125rem;
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              padding-left: 2rem;
              margin-right: 5%;

              .item {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-wrap: wrap;

                img {
                  margin-right: 0.375rem;
                  letter-spacing: 0.125rem;
                }

                .controllable {
                  color: #287ef7;
                }
              }
            }

            .inPark {
              width: 45%;
              height: 5.625rem;
              background-color: rgb(23, 24, 57);
              border: 0.0625rem solid #142dc9;
              border-radius: 0.3125rem;
              display: flex;
              justify-content: center;
              flex-wrap: wrap;

              .item {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-wrap: wrap;
                padding: 0;
                padding-left: 0.625rem;

                span {
                  width: 49%;
                  text-align: left;
                }
              }
            }
          }

          .menu-three {
            width: 90%;
            display: flex;
            justify-content: center;
            padding-left: 5%;
            margin-top: 1rem;

            .camera-list {
              width: 50%;
              height: 30.3125rem;

              .menu-title {
                display: flex;
                justify-content: flex-start;
                align-items: center;
              }
            }

            .personnel-statistics {
              width: 50%;
              height: 30.3125rem;

              .menu-title {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-left: 15%;
                margin-top: 1rem;
              }

              #InAndOutStatistics {
                width: 100%;
                height: 25rem;
              }
            }
          }
        }

        .park-cards {
          width: 100%;
          display: flex;
          justify-content: center;
          // position: absolute;
          // top: 60rem;
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

      .right-aside {
        .menu-one {
          width: 100%;
          height: 37.625rem;
          background-size: 100% 100%;

          .menu-title {
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
            justify-content: space-around;
            margin-top: 0.625rem;
            margin-bottom: 1rem;

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
              width: 27.5rem;
              height: 18.75rem;
            }
          }
        }

        .menu-two {
          width: 100%;
          height: 18.875rem;
          background-size: 100% 100%;
          margin-top: 1.875rem;

          .menu-title {
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

              .value {
                font-size: 1.625rem;
                color: #10ffff;
              }
            }
          }
        }
      }
    }
  }
</style>
