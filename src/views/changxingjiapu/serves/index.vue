<template>
  <el-container class="container" :style="elMainBG">
    <el-header>
      <xiaoweiyuanHeader title="长兴夹浦纺织小微企业园" iconType="map"/>
    </el-header>
    <el-container class="main-container">
      <el-main class="mid-main">
        <div class="topMenuCards">
          <menu-card title="园区管理">
            <div id="property" style="width: 28.25rem; height: 15.625rem"></div>
          </menu-card>
          <menu-card title="政策服务">
            <div class="content">
              <div id="policy" style="width: 15.625rem; height: 15rem"></div>
              <div class="info">
                <span class="data"
                ><a class="num"><countTo :endVal=60 :duration="2000"/></a
                ><a class="unit">家</a></span
                >
                <span>政策兑现</span>
              </div>
            </div>
          </menu-card>
          <menu-card title="金融服务">
            <div class="financial">
              <div class="info">
                <span>金融机构</span>
                <span class="data"
                ><a class="num"><countTo :endVal="46" :duration="2000"/></a
                ><a class="unit">家</a></span
                >
              </div>
              <div class="info">
                <span>企业服务</span>
                <span class="data"
                ><a class="num"><countTo :endVal="60" :duration="2000"/></a
                ><a class="unit">家</a></span
                >
              </div>
            </div>
          </menu-card>
          <menu-card title="公共服务">
            <div id="public" style="width: 28.25rem; height: 15.625rem"></div>
          </menu-card>
        </div>
        <router-view></router-view>
        <div class="park-cards">
          <div class="park-card" :style="parkCardBg" @click="toParkOverview">
            <div class="img">
              <img
                src="@/assets/images/icon/底部ICON/icon_1.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="title">园区总览</div>
          </div>
          <div class="park-card" :style="parkCardBg">
            <div class="img">
              <img
                src="@/assets/images/icon/底部ICON/icon_3_press.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="title">园区服务</div>
          </div>
          <div class="park-card" :style="parkCardBg" @click="toParkProduce">
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
    </el-container>
  </el-container>
</template>

<script>
  import xiaoweiyuanHeader from "@/components/XiaoweiyuanHeader";
  import MenuCard from "@/components/menuCard.vue";
  import countTo from "@/components/vue-count-to/vue-countTo.vue";
  import {charts} from "@/utils/index";

  export default {
    name: "cxjpxiaoweiyuan",
    data() {
      return {
        elMainBG: {
          backgroundImage:
            "url(" + require("@/assets/images/background/bg_qfc.png") + ")",
        },
        parkCardBg: {
          backgroundImage:
            "url(" + require("@/assets/images/background/200100.png") + ")",
        },
      };
    },
    components: {
      xiaoweiyuanHeader,
      MenuCard,
      countTo,
    },
    mounted() {
      this.renderPolicyChart();
      this.renderPublicChart();
      this.renderPropertyChart();
    },
    methods: {
      renderPolicyChart() {
        charts("policy", {
          seriesType: "doughnut",
          data: [
            {value: 34, name: "省级"},
            {value: 20, name: "市级"},
            {value: 19, name: "县级"},
          ],
          series: [
            {
              // right: "5%",
            },
          ],
        });
      },
      renderPublicChart() {
        charts("public", {
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
            right: 0,
            top: "10%",
            textStyle: {
              color: "#ffffff",
            },
          },
          series: [
            {
              right: "20%",
            },
          ],
        });
      },
      renderPropertyChart() {
        charts("property", {
          seriesType: "doughnut",
          data: [
            {value: 5, name: "吴城"},
            {value: 6, name: "丁新"},
            {value: 13, name: "北村"},
            {value: 7, name: "香山"},
            {value: 11, name: "喜鹊斗"},
            {value: 13, name: "环丁"},
            {value: 5, name: "陶家湾"},
          ],
          legend: {
            orient: "vertical",
            right: 10,
            top: 30,
            textStyle: {
              color: "#ffffff",
            },
          },
          series: [
            {
              right: "20%",
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
      toParkOverview() {
        this.$router.push("/cxjp");
      },
      toParkProduce() {
        this.$router.push("/cxjpallpro");
      },
    },
  };
</script>

<style lang="less" scoped>
  .container {
    // width: 120rem;
    width: 100%;
    height: 67.5rem;
    // height: 100%;
    color: #ffffff;
    margin: 0;
    padding: 0;
  }

  .main-container {
    width: 100%;
    height: calc(100% - 6.375rem);
    margin: 0;
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between !important;
    // padding: 0 1.25rem;
    .mid-main {
      width: 100%;
      padding: 0;
      margin: 0;

      .topMenuCards {
        width: 100%;
        height: 18.875rem;
        display: flex;
        justify-content: space-around;

        .content {
          display: flex;
          align-items: center;
          justify-content: space-around;

          #policy {
          }

          .info {
            width: 9.375rem;
            height: 8.125rem;
            background-color: rgb(23, 24, 57);
            font-size: 1.25rem;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            align-items: flex-start;

            .data {
              font-size: 3rem;
              align-self: flex-end;
            }

            .num {
              background-color: #0b3391;
            }

            .unit {
              font-size: 1.625rem;
            }
          }
        }

        .financial {
          width: 24.6875rem;
          height: 11.25rem;
          margin-left: 1.75rem;
          margin-top: 2.75rem;
          background-color: rgb(23, 24, 57);
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          align-items: flex-start;

          .info {
            width: 9.375rem;
            height: 8.125rem;
            font-size: 1.25rem;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            align-items: flex-end;

            .data {
              font-size: 2.5rem;
              align-self: flex-start;
            }

            .num {
              color: #00d2e6;
              background-color: #0b3391;
            }

            .unit {
              font-size: 1.625rem;
            }
          }
        }
      }

      .park-cards {
        width: 100%;
        display: flex;
        justify-content: center;
        position: absolute;
        top: 60rem;

        .park-card {
          width: 12.5rem;
          height: 6.25rem;
          background-size: 100% 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 1.25rem;

          .img {
            height: 3.75rem;
          }

          .title {
            height: 2.5rem;
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
    padding: 0;
  }
</style>
