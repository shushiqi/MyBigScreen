<template>
  <el-container>
    <div class="">
      <el-button type="primary" @click="toCXJP">长兴夹浦丁新小微园</el-button>
      <el-button type="primary" @click="toCXJPWC"
      >长兴夹浦小微园吴城分部
      </el-button
      >
      <el-button type="primary" @click="toCXJPDX"
      >长兴夹浦小微园丁新分部
      </el-button
      >
    </div>
    <div class="">
      <el-button type="primary" @click="toCXJPXWY"
      >长兴夹浦纺织小微企业园政策服务
      </el-button
      >
      <el-button type="primary" @click="toCXJPXWYFinance"
      >长兴夹浦纺织小微企业园金融服务
      </el-button
      >
      <el-button type="primary" @click="toCXJPXWYPublic"
      >长兴夹浦纺织小微企业园公共服务
      </el-button
      >
      <el-button type="primary" @click="toCXJPXWYProperty"
      >长兴夹浦纺织小微企业园物业管理
      </el-button
      >
    </div>
    <div class="">
      <el-button type="primary" @click="toCXJPOverview"
      >长兴夹浦小微园总览香山分部
      </el-button
      >
      <el-button type="primary" @click="toCXJPOverviewXique"
      >长兴夹浦小微园总览喜鹊斗分部
      </el-button
      >
      <el-button type="primary" @click="toCXJPOverviewHuanding"
      >长兴夹浦小微园总览环丁分部
      </el-button
      >
      <el-button type="primary" @click="toCXJPOverviewBeicun"
      >长兴夹浦小微园总览北村分部
      </el-button
      >
      <el-button type="primary" @click="toCXJPOverviewTaojiawan"
      >长兴夹浦小微园总览陶家湾分部
      </el-button
      >
    </div>
    <div class="">
      <el-button type="primary" @click="toCXJPWCProduction"
      >长兴夹浦小微园吴城分部生产总览
      </el-button
      >
      <el-button type="primary" @click="toCXJPDXProduction"
      >长兴夹浦小微园丁新分部生产总览
      </el-button
      >
    </div>

    <el-button type="primary" @click="toCXJPRetailReport"
    >长兴夹浦小微园报表
    </el-button
    >
  </el-container>
</template>
<script>
  import api from "@/api";
  import SeamlessScrollTable from "@/components/seamless-scroll-table.vue";
  import XiaoweiyuanMap from "@/components/xiaoweiyuan-map.vue";
  import VueCountTo from "@/components/vue-count-to/vue-countTo.vue";

  export default {
    components: {
      SeamlessScrollTable,
      VueCountTo,
      XiaoweiyuanMap,
    },
    data() {
      return {};
    },
    mounted() {
      // this.$http("get", "https://www.enter-iot.cn/KYMicroParkWebApi/api/ParkSituation/ParkElectric",{park:"dingxin"}).then(res=>{
      //   console.log(res);
      // })
    },
    methods: {
      toCXJP() {
        this.$router.push("/cxjp");
      },
      toCXJPWC() {
        this.$router.push("/cxjp-wucheng");
      },
      toCXJPDX() {
        this.$router.push("/cxjp-dingxin");
      },
      toCXJPXWY() {
        this.$router.push("/cxjpxiaoweiyuan");
      },
      toCXJPXWYFinance() {
        this.$router.push("/cxjpxiaoweiyuan/FinanceServe");
      },
      toCXJPXWYPublic() {
        this.$router.push("/cxjpxiaoweiyuan/PublicServe");
      },
      toCXJPXWYProperty() {
        this.$router.push("/cxjpxiaoweiyuan/PropertyServe");
      },
      toCXJPOverview() {
        this.$router.push("/Overview/xiangshan");
      },
      toCXJPOverviewXique() {
        this.$router.push("/Overview/xique");
      },
      toCXJPOverviewHuanding() {
        this.$router.push("/Overview/huanding");
      },
      toCXJPOverviewBeicun() {
        this.$router.push("/Overview/beicun");
      },
      toCXJPOverviewTaojiawan() {
        this.$router.push("/Overview/taojiawanue");
      },
      toCXJPWCProduction() {
        this.$router.push("/cxjpwcpro");
      },
      toCXJPDXProduction() {
        this.$router.push("/cxjpdxpro");
      },
      toCXJPRetailReport() {
        this.$router.push("/RetailReport/all");
      },
    },
  };
</script>

<style lang="less" scoped>
  .dialog-style {
    background-color: #22242a;
    width: 50rem;
  }

  .el-container {
    height: 56.25rem;
    padding: 9.375rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .el-button {
    margin-top: 1rem;
  }

  .test {
    width: 100%;
    margin-top: 1rem;
  }
</style>
