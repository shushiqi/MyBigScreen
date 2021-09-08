<template>
  <div class="policyServeWrapper">
    <div class="menu-one">
      <div class="menu-one-title">
        <div class="icon">
          <img src="../../../assets/images/icon/icon_9.png" alt="" srcset=""/>
        </div>
        <div class="title">人员车辆统计</div>
      </div>
      <div class="personAndCars">
        <div class="info">
          <span>人员</span>
          <span class="data"
          ><a class="status">入:</a
          ><a class="num">
              <countTo
                :startVal="0"
                :endVal="CarAndManData.ManIn"
                :duration="2000"
              ></countTo> </a
          ></span>
          <span class="data"
          ><a class="status">出:</a
          ><a class="num">
              <countTo
                :startVal="0"
                :endVal="CarAndManData.ManOut"
                :duration="2000"
              ></countTo></a
          ></span>
        </div>
        <div class="info">
          <span>车辆</span>
          <span class="data"
          ><a class="status">入:</a
          ><a class="num">
              <countTo
                :startVal="0"
                :endVal="CarAndManData.CarIn"
                :duration="2000"
              ></countTo></a
          ></span>
          <span class="data"
          ><a class="status">出:</a
          ><a class="num">
              <countTo
                :startVal="0"
                :endVal="CarAndManData.CarOut"
                :duration="2000"
              ></countTo></a
          ></span>
        </div>
      </div>
      <div id="CarsChart" style="width: 28.25rem; height: 21.875rem"></div>
    </div>
    <div class="menu-two">
      <div class="menu-two-item">
        <div class="menu-two-item-title">
          <div class="icon">
            <img
              src="../../../assets/images/icon/icon_9.png"
              alt=""
              srcset=""
            />
          </div>
          <div class="title">园区能耗统计</div>
        </div>
        <div class="submenu">
          <div class="meter">
            <span> 电表 </span>
            <span
            >总数:<a>
                <countTo
                  :startVal="0"
                  :endVal="EnergyConsumptionStatistics[0].deviceAmount"
                  :duration="2000"
                ></countTo></a
            >个
            </span>
          </div>
          <div class="meter">
            <span> 水表 </span>
            <span
            >总数:<a>
                <countTo
                  :startVal="0"
                  :endVal="EnergyConsumptionStatistics[1].deviceAmount"
                  :duration="2000"
                ></countTo></a
            >个
            </span>
          </div>
        </div>
        <div class="submenu">
          <div class="meter todayUsed">
            <span> 当日用电(度) </span>
            <a>
              <countTo
                :startVal="0"
                :endVal="EnergyConsumptionStatistics[0].all"
                :duration="2000"
                :decimals="2"
              ></countTo>
            </a>
          </div>
          <div class="meter todayUsed">
            <span> 当日用水(吨) </span>
            <a>
              <countTo
                :startVal="0"
                :endVal="EnergyConsumptionStatistics[1].all"
                :duration="2000"
                :decimals="2"
              ></countTo
              >
            </a>
          </div>
        </div>
        <div class="submenu">
          <div>
            <seamless-scroll-table
              :labelList="parkEnergyConsumptionDataLabelList"
              :data="parkEnergyConsumptionData"
              style="width: 26.25rem; height: 9.375rem;"
            ></seamless-scroll-table>
          </div>
        </div>
      </div>
      <div class="menu-two-item">
        <div class="menu-two-item-title">
          <div class="icon">
            <img
              src="../../../assets/images/icon/icon_9.png"
              alt=""
              srcset=""
            />
          </div>
          <div class="title">消防设备统计</div>
        </div>
        <div class="submenu">
          <div class="meter">
            <span>智能消防栓 </span>
            <span
            >设备总数:<a>
                <countTo
                  :startVal="0"
                  :endVal="devices.xfsnum"
                  :duration="2000"
                ></countTo></a
            >个
            </span>
          </div>
          <div class="meter">
            <span> 智能烟感 </span>
            <span
            >设备总数:<a>
                <countTo
                  :startVal="0"
                  :endVal="devices.ygnum"
                  :duration="2000"
                ></countTo></a
            >个
            </span>
          </div>
        </div>
        <div class="submenu">
          <div class="meter todayUsed devices">
            <div class="device">
              <span> 正常 </span>
              <a>
                <countTo
                  :startVal="0"
                  :endVal="devices.xfsonnum"
                  :duration="2000"
                ></countTo
                >
              </a>
            </div>
            <div class="device">
              <span> 异常 </span>
              <a class="abnormal" style="color: #f51111">
                <countTo
                  :startVal="0"
                  :endVal="devices.xfsoffnum"
                  :duration="2000"
                ></countTo>
              </a>
            </div>
          </div>
          <div class="meter todayUsed devices">
            <div class="device">
              <span> 正常 </span>
              <a>
                <countTo
                  :startVal="0"
                  :endVal="devices.ygonnum"
                  :duration="2000"
                ></countTo
                >
              </a>
            </div>
            <div class="device">
              <span> 异常 </span>
              <a class="abnormal" style="color: #f51111">
                <countTo
                  :startVal="0"
                  :endVal="devices.ygoffnum"
                  :duration="2000"
                ></countTo>
              </a>
            </div>
          </div>
        </div>
        <div class="submenu">
          <div>
            <!-- <seamless-scroll-table
              :labelList="fireEquipmentsLabelList"
              :data="fireEquipments"
              :showHeader="false"
              style="width: 26.25rem; height: 15rem"
            ></seamless-scroll-table> -->
            <Table
              :title="fireEquipmentsLabelList"
              :data="fireEquipments"
              style="width: 25rem; height: 12rem"
              :showHeader="false"
            ></Table>
<!--            <equipments-table-->
<!--              :showHeader="false"-->
<!--              :data="fireEquipments"-->
<!--              style="width: 26.25rem; height: 15rem"-->
<!--            >-->
<!--            </equipments-table>-->
          </div>
        </div>
      </div>
    </div>
    <div class="menu-one">
      <div class="menu-one-title">
        <div class="icon">
          <img src="../../../assets/images/icon/icon_9.png" alt="" srcset=""/>
        </div>
        <div class="title">摄像头概况总览</div>
      </div>
      <div id="cameras">
        <div class="info">
          <span
          >摄像头总数<a class="total">
              <countTo :endVal="7" :duration="2000"></countTo></a
          ><a class="total">0</a>个</span
          >
          <div class="info-detail">
            <div class="item">
              <img src="@/assets/images/icon/icon_kz.png" alt=""/>
              <span
              >可控制摄像头数:<a class="controllable">
                  <countTo :endVal="70" :duration="2000"></countTo></a
              >个</span
              >
            </div>
            <div class="item">
              <img src="@/assets/images/icon/icon_gz.png" alt=""/>
              <span
              >故障摄像头数:<a class="abnormal">
                  <countTo
                    :startVal="0"
                    :endVal="0"
                    :duration="2000"
                  ></countTo></a
              >个</span
              >
            </div>
          </div>
        </div>
        <div class="list">
          <div class="list-title">摄像头列表</div>
          <el-table
            :data="camerasList"
            style="width: 26.25rem"
            height="18rem"
            :show-header="false"
            :header-cell-style="headenterpriseListHeaderStyle"
            :row-style="enterpriseListStyle"
            :cell-style="{ padding: 0 }"
            @row-click="toCamera"
          >
            <el-table-column type="index" align="center">
              <template slot-scope="scope">
                <div class="table-index">
                  {{ scope.$index + 1 }}
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="设备"
              width="160"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="workshop" label="车间" align="center">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {charts} from "@/utils/index";
  import MenuCard from "@/components/menuCard.vue";
  import SeamlessScrollTable from "@/components/seamless-scroll-table";
  import countTo from "@/components/vue-count-to/vue-countTo.vue";
  import EquipmentsTable from "./components/equipments-table.vue";
  import Table from "@/components/table.vue";


  export default {
    name: "PropertyServe",
    components: {
      MenuCard,
      countTo,
      SeamlessScrollTable,
      EquipmentsTable,
      Table,
    },
    data() {
      return {
        _timer: function () {
        },
        CarAndManData: {
          CarIn: 0,
          CarOut: 0,
          ManIn: 0,
          ManOut: 0,
        },
        EnergyConsumptionStatistics: [
          {
            type: "电",
            unit: "(度)",
            deviceAmount: 0,
            wucheng: 0,
            dingxin: 0,
            all: 0,
          },
          {
            type: "水",
            unit: "(吨)",
            deviceAmount: 0,
            wucheng: 0,
            dingxin: 0,
            all: 0,
          },
        ],

        parkEnergyConsumptionDataLabelList: [
          {
            label: "园区",
            prop: "park",
          },
          {
            label: "电量(度)",
            prop: "electricity",
          },
          {
            label: "水量(吨)",
            prop: "water",
          },
        ],
        parkEnergyConsumptionData: [
          {
            park: "吴城",
            water: "",
            electricity: "",
          },
          {
            park: "丁新",
            water: "",
            electricity: "",
          },
        ],
        devices: {
          xfsnum: 0,
          xfsoffnum: 0,
          xfsonnum: 0,
          ygnum: 0,
          ygoffnum: 0,
          ygonnum: 0,
        },
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
        camerasList: [
          {
            name: "长兴庆裕纺织",
            workshop: "2车间三层",
            url: `cameralist/hls1_qy.html`,
          },
          {
            name: "长兴庆裕纺织",
            workshop: "2车间三层南",
            url: `cameralist/hls2_qy.html`,
          },
          {
            name: "长兴庆裕纺织",
            workshop: "2车间一层",
            url: `cameralist/hls3_qy.html`,
          },
          {
            name: "长兴庆裕纺织",
            workshop: "2车间一层",
            url: `cameralist/hls4_qy.html`,
          },
          {
            name: "长兴庆裕纺织",
            workshop: "二厂东侧拐角1",
            url: `cameralist/hls5_qy.html`,
          },
          {
            name: "长兴庆裕纺织",
            workshop: "二厂东侧拐角2",
            url: `cameralist/hls6_qy.html`,
          },
          {
            name: "长兴庆裕纺织",
            workshop: "二厂东侧拐角3",
            url: `cameralist/hls7_qy.html`,
          },
          {
            name: "长兴庆裕纺织",
            workshop: "厂区外围道闸1",
            url: `cameralist/hls8_qy.html`,
          },
          {
            name: "长兴伯良纺织",
            workshop: "厂区主干道",
            url: `cameralist/hls_bl1.html`,
          },
          {
            name: "长兴伯良纺织",
            workshop: "三楼原料区",
            url: `cameralist/hls_bl2.html`,
          },
          {
            name: "长兴伯良纺织",
            workshop: "打卷车间",
            url: `cameralist/hls_bl3.html`,
          },
          {
            name: "长兴伯良纺织",
            workshop: "一楼大门口",
            url: `cameralist/hls_bl4.html`,
          },
          {
            name: "长兴伯良纺织",
            workshop: "一楼喷水车间",
            url: `cameralist/hls_bl5.html`,
          },
          {
            name: "长兴伯良纺织",
            workshop: "三楼加弹车间",
            url: `cameralist/hls_bl6.html`,
          },
          {
            name: "长兴伯良纺织",
            workshop: "二楼喷水车间东",
            url: `cameralist/hls_bl7.html`,
          },
          {
            name: "长兴伯良纺织",
            workshop: "二楼喷水车间西",
            url: `cameralist/hls_bl8.html`,
          },
          {
            name: "长兴伯良纺织",
            workshop: "一楼喷水车间西",
            url: `cameralist/hls_bl9.html`,
          },
          {
            name: "长兴伯良纺织",
            workshop: "厂区大门",
            url: `cameralist/hls_bl10.html`,
          },
        ],
      };
    },
    watch: {},

    mounted() {
      this.GetData();
      this.timeRefresh();
      // this.renderCarsChart();
      // this.renderOrgType();
      // this.renderErterprises();
    },
    beforeDestroy() {
      clearInterval(this._timer);
    },
    methods: {
      GetData() {
        this.GetCarManInPark();
        this.GetEleWat();
        this.GetEquipmentList();
      },
      timeRefresh() {
        this._timer = setInterval(() => {

          this.GetData();
        },  1000 * 60 * 5);
      },
      GetCarManInPark() {
        this.$store
          .dispatch("others/CarManInPark", {park: "all"})
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
              
              
            this.CarAndManData.CarIn = res.data[0].incar ? res.data[0].incar: 0;
            this.CarAndManData.CarOut = res.data[0].outcar ? res.data[0].outcar: 0;
            this.CarAndManData.ManIn = res.data[0].inman ? res.data[0].inman: 0;
            this.CarAndManData.ManOut = res.data[0].outman ? res.data[0].outman: 0;
            
            for (let i = 0; i < res.data.length; i++) {
              const element = res.data[i];
              InAndOutStatistics[0].data.push(element.carnum);
              InAndOutStatistics[1].data.push(element.mannum);
            }
            this.renderCarsChart(InAndOutStatistics);
          });
      },
      renderCarsChart(data) {
        charts("CarsChart", {
          seriesType: "line",
          legend: {
            show: true,
            textStyle: {
              color: "#FFFFFF",
            },
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
          seriesLineSmooth: false,
          series: data,
        });
      },
      GetEleWat() {
        this.$store
          .dispatch("others/EleWatInstrumentSum", {park: "all"})
          .then((res) => {
            this.EnergyConsumptionStatistics[0].deviceAmount = +res.data[0]
              .elecount;
            this.EnergyConsumptionStatistics[1].deviceAmount = +res.data[0]
              .watcount;
          });
        let WCWater = this.$store.dispatch("others/ParkWater", {
          park: "wucheng",
        });
        let WCElec = this.$store.dispatch("others/ParkElectric", {
          park: "wucheng",
        });
        let DXWater = this.$store.dispatch("others/ParkWater", {
          park: "dingxin",
        });
        let DXElec = this.$store.dispatch("others/ParkElectric", {
          park: "dingxin",
        });
        Promise.all([WCWater, WCElec, DXWater, DXElec]).then((results) => {
          this.parkEnergyConsumptionData = [
            {
              park: "吴城",
              water: results[0].data[0].dqty,
              electricity: results[1].data[0].dqty,
            },
            {
              park: "丁新",
              water: results[2].data[0].dqty,
              electricity: results[3].data[0].dqty,
            },
          ];
          this.EnergyConsumptionStatistics[0].all =
            this.parkEnergyConsumptionData[0].electricity +
            this.parkEnergyConsumptionData[1].electricity;
          this.EnergyConsumptionStatistics[1].all =
            this.parkEnergyConsumptionData[0].water +
            this.parkEnergyConsumptionData[1].water;
        });
      },
      GetEquipmentList() {
        this.$store
          .dispatch("others/EquipmentList", {park: "all"})
          .then((res) => {
            this.fireEquipments = res.data;
            this.devices = res.data[0];
            if (res.data.length < 5) {
              for (let i = 0; i < 5 - res.data.length; i++) {
                this.fireEquipments.concat({});
              }
            }
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
            right: -10,
            top: 70,
            textStyle: {
              color: "#ffffff",
            },
          },
          series: [
            {
              right: "20%",
              bottom: 20,
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
      enterpriseListStyle({row, rowIndex}) {
        let stylejson = {
          height: "2rem",
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
      toCamera(row) {
        window.open(row.url);
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

    .menu-one-title {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .icon {
        margin-left: 1.875rem;
        margin-right: 0.625rem;

        img {
          width: 2.1875rem;
          height: 2.1875rem;
          vertical-align: middle;
        }
      }

      .title {
        font-size: 1.5625rem;
        font-weight: bold;
        letter-spacing: 0.125rem;
      }
    }
  }

  .menu-one .personAndCars {
    width: 24.6875rem;
    height: 11.25rem;
    margin-left: 1.75rem;
    margin-top: 2.75rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .menu-one .personAndCars .info {
    width: 9.375rem;
    height: 10rem;
    font-size: 1.375rem;
    background-color: rgb(23, 24, 57);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .menu-one .personAndCars .status {
    font-size: 1.25rem;
  }

  .menu-one .personAndCars .info .num {
    font-size: 1.875rem;
    background-color: #0b3391;
  }

  .menu-two {
    width: 57.625rem;
    height: 29.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .menu-two .menu-two-item {
    width: 28.25rem;
    height: 29.375rem;
    background: url("../../../assets/images/background/452470.png") center center no-repeat;
    background-size: 100% 100%;
  }

  .menu-two .menu-two-item .menu-two-item-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.5625rem;
    font-weight: bold;

    .icon {
      margin-left: 1.875rem;
      margin-right: 0.625rem;

      img {
        width: 2.1875rem;
        height: 2.1875rem;
      }
    }
  }

  .menu-two .menu-two-item .menu-two-item-title .title {
    // margin-left: 1rem;
  }

  .menu-two .menu-two-item .submenu {
    display: flex;
    justify-content: space-around;
  }

  .menu-two .menu-two-item .submenu:nth-child(3) {
    margin-bottom: 0.3125rem;
  }

  .menu-two .menu-two-item .meter {
    width: 48%;
    height: 5rem;
    font-size: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
  }

  .menu-two .menu-two-item .meter a {
    font-size: 1.625rem;
    color: #10ffff;
  }

  .menu-two .menu-two-item .todayUsed {
    width: 12.5rem;
    height: 6.25rem;
    border-radius: 0.3125rem;
    background-color: rgb(23, 24, 57);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .menu-two .menu-two-item .devices {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .menu-two .menu-two-item .devices .device {
    display: flex;
    flex-direction: column;
  }

  .menu-two .menu-two-item .todayUsed a {
    font-size: 2.1875rem;
  }

  .menu-two .menu-two-item .fireEquipments td {
    padding: 1rem 0 !important;
  }

  #cameras {
    font-size: 1.25rem;
    margin-top: 0.5rem;
  }

  #cameras .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #cameras .info span .total {
    font-size: 2.5rem;
    margin: 0 0.5rem;
    padding: 0 0.5rem;
    background-color: #03306f;
  }

  #cameras .info .info-detail {
    margin-top: 1rem;
    width: 22.5rem;
    height: 5.625rem;
    background-color: rgb(23, 24, 57);
    border-radius: 0.3125rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 2rem;
  }

  #cameras .info .info-detail .item {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }

  #cameras .info .info-detail .item img {
    margin-right: 0.375rem;
  }

  #cameras .list {
    margin: 0 1rem 0.5rem;
    font-size: 1.5625rem;
    font-weight: bold;
    letter-spacing: 0.125rem;

    .list-title {
      margin: 1.5rem 0 0.5rem 4rem;
    }
  }

  //  可控制摄像头数
  .controllable {
    color: #287ef7;
  }

  #cameras .info .info-detail .item span a {
    font-size: 1.625rem;
    margin: 0 0.3125rem;
  }

  .table-index {
    width: 1.875rem;
    height: 1.875rem;
    background-color: #00749b;
    border-radius: 0.3125rem;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
  }

  .abnormal {
    color: #f51111;
  }

  // 取消element hover
  ::v-deep .el-table tbody tr:hover > td {
    background-color: transparent;
  }

  /deep/ #cameras .el-table__body {
    width: 26.25rem !important;
  }

  /deep/ .el-table__body-wrapper::-webkit-scrollbar {
    width: 0.375rem; // 横向滚动条
    height: 0.375rem; // 纵向滚动条 必写
    background-color: #06132c;
  }

  // 滚动条的滑块
  /deep/ .el-table__body-wrapper::-webkit-scrollbar-thumb {
    // width: 0.1875rem;
    background-color: rgba(129, 128, 128, 0.8);
    border-radius: 0.1875rem;
  }

  /deep/ .el-table__body-wrapper::-webkit-scrollbar-track {
    width: 1.25rem;
    background-color: transparent;
  }

  .treeScrollbar::-webkit-scrollbar-track {
  }

  .treeScrollbar::-webkit-scrollbar-track-piece {
    //滚动条凹槽的颜色，还可以设置边框属性
    background-color: #d31e1e;
  }

  .treeScrollbar::-webkit-scrollbar {
    //滚动条的宽度
    width: 0.4375rem;
    height: 0.4375rem;
    background-color: transparent;
  }

  .treeScrollbar::-webkit-scrollbar-thumb {
    //滚动条的设置
    background-color: #c1c1c1;
    background-clip: padding-box;
    min-height: 1.75rem;
    border-radius: 0.5rem;
  }

  .treeScrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #a8a8a8;
  }
</style>
