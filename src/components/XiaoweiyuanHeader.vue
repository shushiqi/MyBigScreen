<template>
  <div class="header" :style="header">
    <div class="img">
      <img v-show="imgUrl" :src="imgUrl" @click="imgClick"/>
      <slot name="left"></slot>
    </div>
    <div class="title">
      <span class="mainTitle">{{ title }}</span>
    </div>
    <div class="time">
      <div class="realtime">{{ realtime }}</div>
    </div>

    <el-dialog
      :visible.sync="dialogMap"
      width="45%"
      :append-to-body="true"
      custom-class="dialog-style"
      center
    >
      <xiaoweiyuan-map></xiaoweiyuan-map>
    </el-dialog>
  </div>
</template>

<script>
  import XiaoweiyuanMap from "@/components/xiaoweiyuan-map.vue";

  export default {
    name: "xiaoweiyuanHeader",
    components: {
      XiaoweiyuanMap,
    },
    props: {
      title: {
        type: String,
        default: "",
      },
      iconType: {
        type: String,
        default: "",
      },
      // 分部
      park: {
        type: String,
        default: "",
      },
    },
    data() {
      return {
        imgUrl: "",
        realtime: this.$moment().format("YYYY-MM-DD HH:mm:ss"),
        header: {
          backgroundSize: "100% 100%",
          backgroundImage:
            "url(" + require("@/assets/images/background/bg_title.png") + ")",
        },
        dialogMap: false,
      };
    },
    mounted() {
      // if (this.iconUrl && this.iconUrl != "") {
      //   this.imgUrl = require(iconUrl);
      // }
      switch (this.iconType) {
        case "map":
          this.imgUrl = require("@/assets/images/icon/icon_map.png");
          break;
        case "header":
          this.imgUrl = require("@/assets/images/icon/icon_header.png");
        default:
          break;
      }
      let that = this;
      this.timer = setInterval(() => {
        that.realtime = this.$moment().format("YYYY-MM-DD HH:mm:ss");
      }, 1000);
    },
    methods: {
      imgClick() {
        if (this.iconType == "map") {
          this.showMap();
        } else if (this.iconType == "header") {
          this.toGrapg();
        }
      },
      showMap() {
        this.dialogMap = true;
      },
      toGrapg() {
        let url = "";

        switch (this.park) {
          case "xiangshan":
            url =
              "https://www.enterpointxrm.com/jiapu/PlanarGraph/graphindex/xsGraph.html";
            break;
          case "xique":
            url =
              "https://www.enterpointxrm.com/jiapu/PlanarGraph/graphindex/xqdGraph.html";
            break;
          case "huanding":
            url =
              "https://www.enterpointxrm.com/jiapu/PlanarGraph/graphindex/hdGraph.html";
            break;
          case "beicun":
            url =
              "https://www.enterpointxrm.com/jiapu/PlanarGraph/graphindex/bcGraph.html";
            break;
          case "taojiawan":
            url =
              "https://www.enterpointxrm.com/jiapu/PlanarGraph/graphindex/tjwGraph.html";
            break;

          default:
            break;
        }
        window.open(url);
      },
    },
    beforeDestroy() {
      if (this.timer) {
        clearInterval(this.timer); //在Vue实例销毁前，清除定时器
      }
    },
  };
</script>
<style>
  .dialog-style {
    background-color: #22242a !important;
    padding: 0 !important;
    width: 50rem;
  }

  .el-dialog__header {
    padding: 0 !important;
  }

  .el-dialog__body {
    padding: 0 !important;
  }
</style>
<style lang="less" scoped>
  .header {
    width: 100%;
    height: 6.375rem;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .header .img {
    // position: absolute;
    width: 38.75rem;
    height: 4.5rem;
    // left: 1rem;
    margin-left: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .header .img img {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }


  .header .title {
    font-size: 2.25rem;
    letter-spacing: 0.125rem;
    height: 5.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  .header .mainTitle {
    font-weight: bold;
  }

  .header .time {
    font-size: 1.375rem;
    width: 38.75rem;
    height: 4.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 1rem;
  }

  .header .time .realtime {
    // margin-bottom: 2rem;
  }

  .map {
  }
</style>

