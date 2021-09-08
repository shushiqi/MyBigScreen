<template>
  <div class="main-wrapper" :style="BG">
    <el-popover placement="right" width="200" trigger="hover" close-delay="0">
      <img
        :style="img"
        slot
        src="@/assets/images/map/xiangshan-popover.png"
        alt=""
      />
      <img
        class="xiangshan"
        :style="rImg"
        slot="reference"
        src="@/assets/images/map/xiangshan.png"
        alt=""
        @click="toXiangShan"
      />
    </el-popover>
    <el-popover placement="right" width="200" trigger="hover" close-delay="0">
      <img
        class="dingxin"
        :style="rImg"
        slot="reference"
        src="@/assets/images/map/dingxin.png"
        alt=""
        @click="toDingxin"
      />
    </el-popover>
    <el-popover placement="right" width="200" trigger="hover" close-delay="0">
      <img
        class="wucheng"
        :style="rImg"
        slot="reference"
        src="@/assets/images/map/wucheng.png"
        alt=""
        @click="toWucheng"
      />
    </el-popover>
    <el-popover placement="top-end" width="200" trigger="hover" close-delay="0">
      <img
        :style="img"
        slot
        src="@/assets/images/map/xiquedou-popover.png"
        alt=""
      />
      <img
        class="xiquedou"
        :style="rImg2"
        slot="reference"
        src="@/assets/images/map/xiquedou.png"
        alt=""
        @click="toXiquedou"
      />
    </el-popover>
    <el-popover placement="top-end" width="200" trigger="hover" close-delay="0">
      <img
        :style="img"
        slot
        src="@/assets/images/map/huanding-popover.png"
        alt=""
      />
      <img
        class="huanding"
        :style="rImg"
        slot="reference"
        src="@/assets/images/map/huanding.png"
        alt=""
        @click="toHuanding"
      />
    </el-popover>
    <el-popover placement="top-end" width="200" trigger="hover" close-delay="0">
      <img
        :style="img"
        slot
        src="@/assets/images/map/beicun-popover.png"
        alt=""
      />
      <img
        class="beicun"
        :style="rImg"
        slot="reference"
        src="@/assets/images/map/beicun.png"
        alt=""
        @click="toBeicun"
      />
    </el-popover>
    <el-popover placement="top-end" width="200" trigger="hover" close-delay="0">
      <img
        :style="img"
        slot
        src="@/assets/images/map/taojiawan-popover.png"
        alt=""
      />
      <img
        class="taojiawan"
        :style="rImg2"
        slot="reference"
        src="@/assets/images/map/taojiawan.png"
        alt=""
        @click="toTaojiawan"
      />
    </el-popover>
  </div>
</template>

<script>
  export default {
    name: "xiaoweiyuan-map",
    props: {},
    data() {
      return {
        BG: {
          backgroundImage: "url(" + require("@/assets/images/map/MAP.jpg") + ")",
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          height: "47.8125rem",
        },
        img: {
          width: "13rem",
          height: "auto",
        },
        rImg: {
          width: "5rem",
          height: "auto",
        },
        rImg2: {
          width: "6rem",
          height: "auto",
        },
      };
    },
    computed: {},

    mounted() {
      this.BG.height =
        (document.getElementsByClassName("main-wrapper")[0].clientWidth / 785) *
        729 +
        "px";
      window.onresize = () => {
        console.log(document.getElementsByClassName("main-wrapper"));
        let fullWidth = document.getElementsByClassName("main-wrapper")[0].clientWidth;
        this.BG.height = (fullWidth / 785) * 729 + "px";
      };
    },
    methods: {
      toXiangShan() {
        this.$router.push("/Overview/xiangshan");
      },
      toDingxin() {
        this.$router.push("/cxjp-dingxin");
      },
      toWucheng() {
        this.$router.push("/cxjp-wucheng");
      },
      toXiquedou() {
        this.$router.push("/Overview/xique");
      },
      toHuanding() {
        this.$router.push("/Overview/huanding");
      },
      toBeicun() {
        this.$router.push("/Overview/beicun");
      },
      toTaojiawan() {
        this.$router.push("/Overview/taojiawan");
      },
    },
  };
</script>

<style lang="less" scoped>
  .main-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      cursor: pointer;
    }
  }

  .xiangshan {
    position: absolute;
    left: 64%;
    top: 37%;
  }

  .dingxin {
    position: absolute;
    left: 56%;
    top: 48%;
  }

  .wucheng {
    position: absolute;
    left: 49%;
    top: 52%;
  }

  .xiquedou {
    position: absolute;
    left: 53.8%;
    top: 56.5%;
  }

  .huanding {
    position: absolute;
    left: 74%;
    top: 71.5%;
  }

  .beicun {
    position: absolute;
    left: 74%;
    top: 74%;
  }

  .taojiawan {
    position: absolute;
    left: 68.2%;
    top: 82.5%;
  }
</style>

