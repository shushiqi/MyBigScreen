<template>
  <div class="policyServeWrapper">
    <div class="menu-one">
      <div class="menu-one-title">
        <div class="icon">
          <img src="../../../assets/images/icon/icon_9.png" alt="" srcset=""/>
        </div>
        <div class="title">小微园政策概况</div>
      </div>
      <div class="menu-one-data">
        <div class="menu-one-data-item">
          <span
          >政策总数:
            <a class="data"><countTo :endVal=73 :duration="2000"/></a
            ></span>
        </div>
        <div class="menu-one-data-item2">
          <div class="data">
            <span>省级：</span>
            <a>
              <countTo :endVal="34" :duration="2000"/>
            </a>
          </div>
          <div id="province" style="width: 17.5rem; height: 10rem"></div>
        </div>
        <div class="menu-one-data-item2">
          <div class="data">
            <span>市级：</span>
            <a>
              <countTo :endVal="20" :duration="2000"/>
            </a>
          </div>
          <div id="city" style="width: 17.5rem; height: 10rem"></div>
        </div>
        <div class="menu-one-data-item2">
          <div class="data">
            <span>县级：</span>
            <a>
              <countTo :endVal="19" :duration="2000"/>
            </a>
          </div>
          <div id="county" style="width: 17.5rem; height: 10rem"></div>
        </div>
      </div>
    </div>
    <div class="menu-two">
      <div class="menu-two-title">
        <div class="icon">
          <img src="../../../assets/images/icon/icon_9.png" alt="" srcset=""/>
        </div>
        <div class="title">小微园政策概况</div>
      </div>
      <div class="menu-two-data">
        <div class="menu-two-data-item">
          <div>
            <span
            >政策享受企业:
              <a class="data"><countTo :endVal=60 :duration="2000"/></a
              >家</span
            >
          </div>
          <div>
            <span
            >奖励金额:
              <a class="data"><countTo :endVal=106 :duration="2000"/></a
              >万</span
            >
          </div>
        </div>
        <div
          class="menu-two-data-item2"
          id="reward"
          style="width: 56.25rem; height: 21.875rem"
        ></div>
      </div>
    </div>
    <div class="menu-three">
      <menu-card title="政策办理情况">
        <div id="policyHandle" style="width: 28.125rem; height: 15.625rem"></div>
      </menu-card>
      <menu-card title="政策热搜">
        <div class="hotWords" style="width: 28.125rem; height: 15.625rem">
          <div
            style="width: 21.875rem; height: 15.625rem; overflow: hidden; border: 0rem"
          >
            <div style="width: 21.875rem; height: 15.625rem; margin: 0rem 0rem 0rem 1.25rem">
              <iFrame
                :src="ifrSrc"
                width="450"
                height="250"
                scrolling="no"
                frameborder="0"
              >
              </iFrame>
            </div>
          </div>
        </div>
      </menu-card>
    </div>
  </div>
</template>

<script>
  import {charts} from "../../../utils/index";
  import MenuCard from "../../../components/menuCard.vue";
  import countTo from "@/components/vue-count-to/vue-countTo.vue";

  export default {
    name: "PolicyServer",
    components: {
      MenuCard,
      countTo,
    },
    data() {
      return {
        hspaceData: "",
        vspaceData: "",
        ifrSrc: "",
      };
    },
    mounted() {
      this.renderProvinceChart();
      this.renderCityChart();
      this.renderCountyChart();
      this.renderRewardChart();
      this.renderPolicyHandleChart();
      this.getIframe();
    },
    methods: {
      renderProvinceChart() {
        charts("province", {
          seriesType: "doughnut",
          tooltip: {
            show: false,
          },
          data: [
            {value: 34, name: "省级"},
            {value: 39, name: ""},
          ],
          legend: {
            show: false,
          },
          series: [
            {
              avoidLabelOverlap: false,
              radius: ["50%", "80%"],
              label: {
                show: true,
                position: "center",
                color: "#ffffff",
                formatter: function (params) {
                  if (params.data.name != "") {
                    return params.percent + "%";
                  }
                },
                fontSize: 22,
              },
            },
          ],
        });
      },
      renderCityChart() {
        charts("city", {
          seriesType: "doughnut",
          data: [
            {value: 20, name: "市级"},
            {value: 53, name: ""},
          ],
          legend: {
            show: false,
          },
          series: [
            {
              avoidLabelOverlap: false,
              radius: ["50%", "80%"],
              label: {
                show: true,
                position: "center",
                color: "#ffffff",
                formatter: function (params) {
                  if (params.data.name != "") {
                    return params.percent + "%";
                  }
                },
                fontSize: 22,
              },
            },
          ],
        });
      },
      renderCountyChart() {
        charts("county", {
          seriesType: "doughnut",
          data: [
            {value: 19, name: "县级"},
            {value: 54, name: ""},
          ],
          legend: {
            show: false,
          },
          series: [
            {
              avoidLabelOverlap: false,
              radius: ["50%", "80%"],
              label: {
                show: true,
                position: "center",
                color: "#ffffff",
                formatter: function (params) {
                  if (params.data.name != "") {
                    return params.percent + "%";
                  }
                },
                fontSize: 22,
              },
            },
          ],
        });
      },
      renderRewardChart() {
        charts("reward", {
          seriesType: "bar",
          xAxisData: ["吴城", "丁新", "环丁", "陶家湾", "喜鹊斗", "香山", "北村"],
          data: [10, 9, 20, 10, 17, 14, 26],
        });
      },
      renderPolicyHandleChart() {
        charts("policyHandle", {
          seriesType: "doughnut",
          data: [
            {value: 20, name: "已申报"},
            {value: 15, name: "办理中"},
            {value: 65, name: "已办结"},
          ],
          legend: {
            orient: "vertical",
            right: 10,
            top: 50,
            textStyle: {
              color: "#ffffff",
            },
          },
          series: [
            {
              right: "20%",
              // hoverAnimation: false,
            },
          ],
        });
      },
      renderHotWords() {
        charts("hotWords", {
          seriesType: "wordcloud",
          data: [
            {
              name: "高新技术企业",
              value: 366,
            },
            {
              name: "省科技型企业",
              value: 152,
            },
            {
              name: "数字化转型",
              value: 152,
            },
            {
              name: "智能制造",
              value: 366,
            },
            {
              name: "新产品开发",
              value: 152,
            },
            {
              name: "检验检测",
              value: 152,
            },
            {
              name: "标准制定",
              value: 366,
            },
            {
              name: "节能改造",
              value: 152,
            },
          ],
        });
      },
      getIframe() {
        this.hspaceData = "-100";
        this.vspaceData = "-150";
        this.ifrSrc =
          "https://www.enterpointxrm.com/jiapu/wordscloud/wordscloud.html";
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
    margin-left: 0.9375rem;
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
    font-size: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .menu-two .menu-two-data .menu-two-data-item {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  .menu-two .menu-two-data .menu-two-data-item span {
    font-size: 1.5625rem;
    margin-top: 1rem;
    justify-content: flex-start;
    text-align: left;
  }

  .menu-two .menu-two-data .menu-two-data-item span .data {
    font-size: 1.6875rem;
    color: #ffffff;
    font-weight: bold;
    background-color: #0b3391;
  }

  .menu-two .menu-two-data .menu-two-data-item2 {
  }

  .menu-three {
    width: 28.125rem;
    height: 39rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .menu-three .hotWords {
    position: relative;
    top: 1rem;
    right: 1rem;
  }
</style>
