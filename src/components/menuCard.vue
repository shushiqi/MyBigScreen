<template>
  <div class="cardWrapper" :style="wrapper">
    <div class="cardTitle" @click="toServe">
      <img
        src="@/assets/images/icon/icon_9.png"
        alt=""
        v-if="iconShow"
        srcset=""
      />
      <div class="title">{{ title }}</div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "menuCard",
    props: {
      title: {
        type: String,
        default: "",
      },
      iconShow: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        wrapper: {
          backgroundSize: "100% 100%",
          backgroundImage:
            "url(" + require("@/assets/images/background/452302.png") + ")",
        },
      };
    },

    mounted() {
    },
    methods: {
      toServe() {
        switch (this.title) {
          case "园区管理":
            if (this.$route.path == "/cxjpxiaoweiyuan/PropertyServe") return;
            this.$router.push("/cxjpxiaoweiyuan");
            break;
          case "政策服务":
            if (this.$route.path == "/cxjpxiaoweiyuan/PolicyServe") return;
            this.$router.push("/cxjpxiaoweiyuan/PolicyServe");
            break;
          case "金融服务":
            if (this.$route.path == "/cxjpxiaoweiyuan/FinanceServe") return;
            this.$router.push("/cxjpxiaoweiyuan/FinanceServe");
            break;
          case "公共服务":
            if (this.$route.path == "/cxjpxiaoweiyuan/PublicServe") return;
            this.$router.push("/cxjpxiaoweiyuan/PublicServe");
            break;
          default:
            break;
        }
      },
    },
  };
</script>
<style lang="less" scoped>
  .cardWrapper {
    width: 28.125rem;
    height: 100%;
  }

  .cardTitle {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    // margin-top: 0.3125rem;
    margin-left: 1.875rem;
    cursor: pointer;
  }

  .cardTitle img {
    width: 2.1875rem;
    height: 2.1875rem;
    margin-right: 0.625rem;
  }

  .cardWrapper .title {
    font-size: 1.5625rem;
    font-weight: bold;
    letter-spacing: 0.125rem;
  }
</style>
