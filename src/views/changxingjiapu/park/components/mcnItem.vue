<template>
  <div class="mcnItem-wrapper" :class="BGColor">
    <div class="head">
      <div id="mcnName">{{ mcnName }}</div>
      <div id="status">{{ status }}</div>
    </div>
    <div class="num">{{ num }}</div>
  </div>
</template>

<script>
export default {
  name: "mcnItem",
  props: {
    mcnName: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "",
    },
    num: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  computed: {
    BGColor: function () {
      let bgc = "";
      switch (this.status) {
        case "纬停":
          bgc = "lati";
          break;
        case "耳丝停":
          bgc = "wires";
          break;
        case "其他停":
          bgc = "others";
          break;
        case "停机":
          bgc = "error";
          break;
        case "满停":
          bgc = "full";
          break;
        default:
          bgc = "normal";
          break;
      }
      return bgc;
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.mcnItem-wrapper {
  width: 72px;
  height: 92px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .head {
    height: 30%;
    display: flex;
    justify-content: space-between;
    #mcnName {
      font-size: 0.8rem;
      font-weight: bold;
    }
    #status {
      font-size: 0.6rem;
    }
  }
  .num {
    text-align: center;
  }
}

.normal {
  background-color: #008000;
}

.error {
  background-color: #808080;
}

.full {
  background-color: #800080;
}

.lati {
  background-color: #ee7700;
}

.wires {
  background-color: #c10066;
}

.others {
  background-color: #0000ff;
}
</style>