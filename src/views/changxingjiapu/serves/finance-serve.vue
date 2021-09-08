<template>
  <div class="policyServeWrapper">
    <div class="menu-one">
      <div class="menu-one-item">
        <menu-card
          title="金融机构热度TOP5"
          :iconShow="false"
          style="margin-bottom: 0.9375rem"
        >
          <div
            id="financeOrgnizationTop"
            style="width: 27.5rem; height: 15.625rem; "
          ></div>
        </menu-card>
        <menu-card title="金融产品TOP3" :iconShow="false">
          <div id="financeProductTop" style="width: 28.125rem; height: 15.625rem"></div>
        </menu-card>
      </div>
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
          <div class="title">园区金融服务机构类型占比</div>
          <div id="orgType" style="width: 22.5rem; height: 28.125rem"></div>
        </div>
        <div class="erterprises">
          <div class="title">每年服务企业</div>
          <div id="erterprises" style="width: 33.75rem; height: 25rem"></div>
        </div>
      </div>
    </div>
    <div class="menu-three">
      <menu-card title="融资需求">
        <div class="content">
          <div class="info">
            <div class="">
              <span class="data"
              ><a class="num"><countTo :endVal="36" :duration="2000"/></a
              ><a class="unit">家</a></span
              >
              <span>强</span>
            </div>
            <div class="">
              <span class="data"
              ><a class="num">18</a><a class="unit">家</a></span
              >
              <span>中</span>
            </div>
            <div class="">
              <span class="data"
              ><a class="num"><countTo :endVal="6" :duration="2000"/></a
              ><a class="unit">家</a></span
              >
              <span>弱</span>
            </div>
          </div>
        </div>
      </menu-card>
      <menu-card title="融资需求趋势">
        <div id="financeNeedsTrend" style="width: 28.125rem; height: 15.625rem"></div>
      </menu-card>
    </div>
  </div>
</template>

<script>
  import {charts} from "@/utils/index";
  import MenuCard from "@/components/menuCard.vue";
  import countTo from "@/components/vue-count-to/vue-countTo.vue";

  export default {
    name: "FinanceServe",
    components: {
      MenuCard,
      countTo,
    },
    data() {
      return {};
    },
    mounted() {
      this.renderFinanceOrgnizationTop();
      this.renderFinanceProductTop();
      this.renderOrgType();
      this.renderErterprises();
      this.renderFinanceNeedsTrend();
    },
    methods: {
      renderFinanceOrgnizationTop() {
        charts("financeOrgnizationTop", {
          seriesType: "bar",
          align: "horizontal",
          grid: {
            left: "35%",
          },
          yAxisData: [
            "宁波银行",
            "台州银行",
            "中国工商银行",
            "浙江长兴联合村镇银行",
            "浙江长兴农村商业银行",
          ],
          data: [96, 94, 79, 165, 178],
          series: [
            {
              label: {
                show: true,
                position: "right",
              },
              showBackground: true,
              backgroundStyle: {
                borderColor: "#0090F2",
                barBorderRadius: 10,
                opacity: 1,
                borderWidth: 1,
              },
            },
          ],
        });
      },
      renderFinanceProductTop() {
        charts("financeProductTop", {
          seriesType: "bar",
          align: "horizontal",
          yAxisData: ["信用贷款", "流动资金贷款", "小额担保"],
          data: [14, 23, 53],
          series: [
            {
              label: {
                show: true,
                position: "right",
              },
              showBackground: true,
              backgroundStyle: {
                borderColor: "#0090F2",
                barBorderRadius: 10,
                opacity: 1,
                borderWidth: 1,
              },
            },
          ],
        });
      },
      renderOrgType() {
        charts("orgType", {
          seriesType: "doughnut",
          data: [
            {value: 0, name: "创业投资基金"},
            {value: 35, name: "银行金融服务"},
            {value: 65, name: "中小微企业融资担保"},
          ],
          legend: {
            // orient: "vertical",
            left: 20,
            bottom: 80,
            textStyle: {
              color: "#ffffff",
            },
          },
          series: [
            {
              right: "5%",
              bottom: 80,
              radius: ["20%", "60%"],
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
              name: "浙江长兴农村商业银行",
              data: [242, 254, 178],
            },
            {
              name: "浙江长兴联合村镇银行",
              data: [265, 215, 165],
            },
            {
              name: "湖州银行",
              data: [156, 123, 75],
            },
            {
              name: "中国工商银行",
              data: [103, 97, 75],
            },
            {
              name: "中国农业银行",
              data: [54, 56, 23],
            },
            {
              name: "台州银行",
              data: [0, 109, 64],
            },
            {
              name: "宁波银行",
              data: [0, 0, 69],
            },
          ],
        });
      },
      renderFinanceNeedsTrend() {
        charts("financeNeedsTrend", {
          seriesType: "line",
          xAxis: {data: ["第一季度", "第二季度", "第三季度", "第四季度"]},
          seriesLineSmooth: false,
          series: [
            {
              data: [57, 42, 57, 55],
            },
          ],
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
  }

  .menu-one .menu-one-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .menu-one .menu-one-title .icon {
    margin-left: 0.9375rem;
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

  .menu-one .menu-one-data {
    font-size: 1.25rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .menu-one .menu-one-data .menu-one-data-item {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    flex-wrap: wrap;
    padding-left: 1.25rem;
  }

  .menu-one .menu-one-data .menu-one-data-item span {
    font-size: 1.5625rem;
    margin-top: 1rem;
    justify-content: flex-start;
    text-align: left;
  }

  .menu-one .menu-one-data .menu-one-data-item span .data {
    font-size: 1.6875rem;
    color: #ffffff;
    font-weight: bold;
    background-color: #0b3391;
  }

  .menu-one .menu-one-data {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.5625rem;
  }

  .menu-one .menu-one-data .menu-one-data-item2 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .menu-one .menu-one-data .menu-one-data-item2 .data a {
    color: #10ffff;
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

    .orgType {
      .title {
        text-align: center;
      }
    }

    .erterprises {
      .title {
        margin-left: 4rem;
      }
    }
  }

  .menu-three {
    width: 28.125rem;
    height: 39rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .menu-three .content {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  .menu-three .content .info {
    width: 70%;
    height: 8.125rem;
    background-color: rgb(23, 24, 57);
    font-size: 1.25rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .menu-three .content .info div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .menu-three .content .info .data a {
    text-align: center;
  }

  .menu-three .content .info span:nth-child(even) {
    text-align: center;
  }

  .menu-three .content .info .num {
    font-size: 2.5rem;
    color: #00d2e6;
    background-color: #0b3391;
  }

  .menu-three .content .info .unit {
    font-size: 1.625rem;
  }
</style>
