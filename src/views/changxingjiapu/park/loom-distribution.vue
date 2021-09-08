<template>
  <div class="loomContainer" :style="containerBg">
    <div class="header" :style="header">
      <div class="title">
        <span class="mainTitle">{{ title }}</span>
        <span class="subTitle" @click="toPark">园区管控</span>
      </div>
    </div>
    <div class="main">
      <el-tabs style="width: 100%; height: 50rem" :stretch="true">
        <el-tab-pane v-for="(item, index) in workshops" :key="index">
          <div slot="label" class="label">{{ item.name }}</div>
          <div class="frame">
            <!-- <iframe
              :src="item.uri"
              frameborder="0"
              scrolling="auto"
              width="100%"
              height="940"
            ></iframe> -->
            <mcn :workshop="item.name"></mcn>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import mcn from "./mcn";
export default {
  name: "loom-distribution",
  components: {
    mcn,
  },
  data() {
    return {
      title: "长兴夹浦纺织小微企业园",
      header: {
        backgroundSize: "100% 100%",
        backgroundImage:
          "url(" + require("@/assets/images/background/bg_title.png") + ")",
      },
      containerBg: {
        backgroundSize: "100% 100%",
        backgroundImage:
          "url(" + require("@/assets/images/background/bg_qfc.png") + ")",
      },
      workshops: [
        {
          name: "庆裕一车间",
          uri: "http://111.231.27.87:8080/machine/showMachineRunDetail?workShopId=4cc21ee58c7349e99dc518d76c9badfc&workshopName=%E5%96%B7%E7%BB%87%E4%B8%80%E8%BD%A6%E9%97%B4",
        },
        {
          name: "庆裕二车间",
          uri: "http://111.231.27.87:8080/machine/showMachineRunDetail?workShopId=1745b3d154084a38b9d20839aad42e28&workshopName=%E5%96%B7%E7%BB%87%E4%BA%8C%E8%BD%A6%E9%97%B4",
        },
        {
          name: "龙宇",
          uri: "http://111.231.27.87:8087/machine/showMachineRunDetail?workShopId=d2e650950b14415ba6b534dd6f1eaa35&workshopName=%E5%96%B7%E7%BB%87%E4%B8%80%E5%B1%82",
        },
        {
          name: "和丝园",
          uri: "http://111.231.27.87:8088/machine/showMachineRunDetail?workShopId=4cc21ee58c7349e99dc518d76c9badfc&workshopName=%E5%96%B7%E7%BB%87%E8%BD%A6%E9%97%B4",
        },
        {
          name: "伯良一层",
          uri: "http://111.231.27.87:8083/machine/showMachineRunDetail?workShopId=d2e650950b14415ba6b534dd6f1eaa35&workshopName=%E5%96%B7%E7%BB%87%E4%B8%80%E5%B1%82",
        },
        {
          name: "伯良二层",
          uri: "http://111.231.27.87:8083/machine/showMachineRunDetail?workShopId=4cc21ee58c7349e99dc518d76c9badfc&workshopName=%E5%96%B7%E7%BB%87%E4%BA%8C%E5%B1%82",
        },

        {
          name: "中豪",
          uri: "http://111.231.27.87:8085/machine/showMachineRunDetail?workShopId=4cc21ee58c7349e99dc518d76c9badfc&workshopName=%E5%96%B7%E7%BB%87%E8%BD%A6%E9%97%B4",
        },
      ],
    };
  },
  mounted() {
    switch (this.$route.params.branch) {
      case "wucheng":
        this.title = "长兴夹浦小微园吴城分部";
        this.containerBg.backgroundImage =
          "url(" + require("@/assets/images/background/bg_wucheng.png") + ")";
        this.workshops = [
          {
            name: "庆裕一车间",
            uri: "http://111.231.27.87:8080/machine/showMachineRunDetail?workShopId=4cc21ee58c7349e99dc518d76c9badfc&workshopName=%E5%96%B7%E7%BB%87%E4%B8%80%E8%BD%A6%E9%97%B4",
          },
          {
            name: "庆裕二车间",
            uri: "http://111.231.27.87:8080/machine/showMachineRunDetail?workShopId=1745b3d154084a38b9d20839aad42e28&workshopName=%E5%96%B7%E7%BB%87%E4%BA%8C%E8%BD%A6%E9%97%B4",
          },

          {
            name: "龙宇",
            uri: "http://111.231.27.87:8087/machine/showMachineRunDetail?workShopId=d2e650950b14415ba6b534dd6f1eaa35&workshopName=%E5%96%B7%E7%BB%87%E4%B8%80%E5%B1%82",
          },
          {
            name: "和丝园",
            uri: "http://111.231.27.87:8088/machine/showMachineRunDetail?workShopId=4cc21ee58c7349e99dc518d76c9badfc&workshopName=%E5%96%B7%E7%BB%87%E8%BD%A6%E9%97%B4",
          },
        ];
        break;
      case "dingxin":
        this.title = "长兴夹浦小微园丁新分部";
        this.containerBg.backgroundImage =
          "url(" + require("@/assets/images/background/bg_dingxin.jpg") + ")";

        this.workshops = [
          {
            name: "伯良一层",
            uri: "http://111.231.27.87:8083/machine/showMachineRunDetail?workShopId=d2e650950b14415ba6b534dd6f1eaa35&workshopName=%E5%96%B7%E7%BB%87%E4%B8%80%E5%B1%82",
          },
          {
            name: "伯良二层",
            uri: "http://111.231.27.87:8083/machine/showMachineRunDetail?workShopId=4cc21ee58c7349e99dc518d76c9badfc&workshopName=%E5%96%B7%E7%BB%87%E4%BA%8C%E5%B1%82",
          },
          {
            name: "中豪",
            uri: "http://111.231.27.87:8085/machine/showMachineRunDetail?workShopId=4cc21ee58c7349e99dc518d76c9badfc&workshopName=%E5%96%B7%E7%BB%87%E8%BD%A6%E9%97%B4",
          },
        ];
        break;
      case "all":
        break;

      default:
        break;
    }
  },
  methods: {
    toPark() {
      let url = "";
      switch (this.$route.params.branch) {
        case "wucheng":
          url = "/cxjp-wucheng";
          break;
        case "dingxin":
          url = "/cxjp-dingxin";
          break;
        case "all":
          url = "/cxjp";
          break;
        default:
          url = "/cxjp";
          break;
      }
      this.$router.push(url);
    },
  },
};
</script>

<style lang="less" scoped>
.loomContainer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 67.5rem;

  .header {
    width: 100%;
    height: 6.375rem;
    color: #ffffff;
    font-size: 1.9375rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .title {
      height: 5.75rem;
      display: flex;
      align-items: center;
    }

    .subTitle {
      position: absolute;
      right: 1rem;
      margin-bottom: 2rem;
    }
  }

  .main {
    width: 100%;
    height: 80%;
    margin-top: 1rem;
    display: flex;
    justify-content: center;

    .label {
      // width: 10rem;
      height: 100%;
      color: #ffffff;
      border-radius: 7%;
      font-size: 1.75rem;
      text-align: center;
      align-items: center;
    }
  }
}

.el-tabs__item.is-active .label {
  background: #409eff;
}
</style>
