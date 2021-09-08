<template>
  <div class="main-wrapper">
    <div class="mcn-head">
      <div class="mcn-head-row">
        <div
          class="mcn-head-row-item"
          v-for="(item, index) in headItem"
          :key="index"
          :style="{ backgroundColor: item.bgc }"
        >
          {{ item.dataName }}:{{ item.data }}
        </div>
      </div>
      <div class="mcn-head-row">
        <div
          class="mcn-head-row-item"
          v-for="(item, index) in headItem2"
          :key="index"
          :style="{ backgroundColor: '#FF0080' }"
        >
          {{ item.dataName }}:{{ item.data }}{{ item.unit }}
        </div>
      </div>
    </div>
    <div class="mcn-content">
      <div class="left-part">
        <!-- <mcn-item :mcnName="'A001'" :status="'纬停'"></mcn-item> -->
        <mcn-item
          class="left-part-item"
          v-for="(item, index) in leftPartMcn"
          :key="index"
          :mcnName="item.mcnName"
          :status="item.status"
          :num="item.num"
        ></mcn-item>
        <!-- </div>
      <div class="right-part"> -->
        <!-- <mcn-item
          class="left-part-item"
          v-for="(item, index) in leftPartMcn"
          :key="index"
          :mcnName="item.mcnName"
          :status="item.status"
          :num="item.num"
        ></mcn-item> -->
      </div>
    </div>
  </div>
</template>

<script>
import mcnItem from "./components/mcnItem";
export default {
  name: "mcn",
  components: {
    mcnItem,
  },
  props: {
    workshop: {
      type: String,
      defult: "",
    },
  },
  data() {
    return {
      headItem: [
        {
          dataName: "运行",
          data: 0,
          bgc: "#018001",
        },
        {
          dataName: "纬停",
          data: 0,
          bgc: "#ED7600",
        },
        {
          dataName: "耳丝停",
          data: 0,
          bgc: "#C00065",
        },
        {
          dataName: "其他停",
          data: 0,
          bgc: "#0000FE",
        },
        {
          dataName: "停机",
          data: 0,
          bgc: "#FE0000",
        },
      ],
      headItem2: [
        {
          dataName: "瞬时转速",
          data: 0,
          unit: "RPM",
        },
        {
          dataName: "瞬时效率",
          data: 0,
          unit: "%",
        },
        {
          dataName: "当天平均",
          data: 0,
          unit: "RPM",
        },
        {
          dataName: "当天效率",
          data: 0,
          unit: "%",
        },
      ],
      leftPartMcn: [
        // {
        //   mcnName: "A002",
        //   status: "运行",
        //   num: 0,
        // },
      ],
      mcnInfo: {
        mcnNum: {
          qingyu1: 228,
          qingyu2: 336,
          longyu: 353,
          hesiyuan: 56,
          boliang1: 221,
          boliang2: 201,
          zhonghao: 400,
        },
        mcnRate: {
          qingyu1: 92.42,
          qingyu2: 92.42,
          longyu: 92.42,
          hesiyuan: 92.42,
          boliang1: 93.86,
          boliang2: 93.86,
          zhonghao: 93.86,
        },
        mcnStatus: {},
      },
      mcnNum: 0,
      errorStatus: 0, //停机状态
    };
  },
  mounted() {
    switch (this.workshop) {
      case "庆裕一车间":
        this.mcnNum = this.mcnInfo.mcnNum.qingyu1;
        this.headItem2[1].data = this.mcnInfo.mcnRate.qingyu1;
        this.headItem2[3].data = this.mcnInfo.mcnRate.qingyu1;
        this.headItem[4].data = (
          this.mcnInfo.mcnNum.qingyu1 *
          (1 - this.headItem2[1].data / 100)
        ).toFixed(0);
        this.headItem[0].data =
          this.mcnInfo.mcnNum.qingyu1 - this.headItem[4].data;
        break;
      case "庆裕二车间":
        this.mcnNum = this.mcnInfo.mcnNum.qingyu2;
        this.headItem2[1].data = this.mcnInfo.mcnRate.qingyu2;
        this.headItem2[3].data = this.mcnInfo.mcnRate.qingyu2;
        this.headItem[4].data = (
          this.mcnInfo.mcnNum.qingyu2 *
          (1 - this.headItem2[1].data / 100)
        ).toFixed(0);
        this.headItem[0].data =
          this.mcnInfo.mcnNum.qingyu2 - this.headItem[4].data;
        break;
      case "龙宇":
        this.mcnNum = this.mcnInfo.mcnNum.longyu;
        this.headItem2[1].data = this.mcnInfo.mcnRate.longyu;
        this.headItem2[3].data = this.mcnInfo.mcnRate.longyu;
        this.headItem[4].data = (
          this.mcnInfo.mcnNum.longyu *
          (1 - this.headItem2[1].data / 100)
        ).toFixed(0);
        this.headItem[0].data =
          this.mcnInfo.mcnNum.longyu - this.headItem[4].data;
        break;
      case "和丝园":
        this.mcnNum = this.mcnInfo.mcnNum.hesiyuan;
        this.headItem2[1].data = this.mcnInfo.mcnRate.hesiyuan;
        this.headItem2[3].data = this.mcnInfo.mcnRate.hesiyuan;
        this.headItem[4].data = (
          this.mcnInfo.mcnNum.hesiyuan *
          (1 - this.headItem2[1].data / 100)
        ).toFixed(0);
        this.headItem[0].data =
          this.mcnInfo.mcnNum.hesiyuan - this.headItem[4].data;
        break;
      case "伯良一层":
        this.mcnNum = this.mcnInfo.mcnNum.boliang1;
        this.headItem2[1].data = this.mcnInfo.mcnRate.boliang1;
        this.headItem2[3].data = this.mcnInfo.mcnRate.boliang1;
        this.headItem[4].data = (
          this.mcnInfo.mcnNum.boliang1 *
          (1 - this.headItem2[1].data / 100)
        ).toFixed(0);
        this.headItem[0].data =
          this.mcnInfo.mcnNum.boliang1 - this.headItem[4].data;

        break;
      case "伯良二层":
        this.mcnNum = this.mcnInfo.mcnNum.boliang2;
        this.headItem2[1].data = this.mcnInfo.mcnRate.boliang2;
        this.headItem2[3].data = this.mcnInfo.mcnRate.boliang2;
        this.headItem[4].data = (
          this.mcnInfo.mcnNum.boliang2 *
          (1 - this.headItem2[1].data / 100)
        ).toFixed(0);
        this.headItem[0].data =
          this.mcnInfo.mcnNum.boliang2 - this.headItem[4].data;

        break;
      case "中豪":
        this.mcnNum = this.mcnInfo.mcnNum.zhonghao;
        this.headItem2[1].data = this.mcnInfo.mcnRate.zhonghao;
        this.headItem2[3].data = this.mcnInfo.mcnRate.zhonghao;
        this.headItem[4].data = (
          this.mcnInfo.mcnNum.zhonghao *
          (1 - this.headItem2[1].data / 100)
        ).toFixed(0);
        this.headItem[0].data =
          this.mcnInfo.mcnNum.zhonghao - this.headItem[4].data;

        break;
      default:
        break;
    }
    this.insertMcn();
    for (let index = 0; index < this.headItem[4].data; index++) {
      let status = "";
      switch (this.errorStatus) {
        case 0:
          status = "纬停";
          this.headItem[1].data = this.headItem[1].data + 1;
          break;
        case 1:
          status = "耳丝停";
          this.headItem[2].data = this.headItem[2].data + 1;
          break;
        case 2:
          status = "其他停";
          this.headItem[3].data = this.headItem[3].data + 1;
          break;
        case 3:
          status = "满停";
          break;
        case 4:
          status = "停机";
          break;
        default:
          break;
      }
      let mcnIndex = this.getRandomNum(0, this.mcnNum);
      this.leftPartMcn[mcnIndex].status = status;
      this.leftPartMcn[mcnIndex].num = 0;

      this.errorStatus = this.errorStatus >= 4 ? 0 : ++this.errorStatus;
    }
    setInterval(() => {
      this.updateMcn();
    }, 1000 * 60);
  },
  methods: {
    getRandomNum(n, m) {
      return Math.round(Math.random() * (m - n) + n);
    },
    insertMcn() {
      this.leftPartMcn = [];
      for (let index = 0; index < this.mcnNum; index++) {
        this.leftPartMcn.push({
          mcnName: "A00" + (index + 1),
          status: "运行",
          num: this.getRandomNum(470, 570),
        });
      }
    },
    updateMcn() {
      this.leftPartMcn = [];
      for (let index = 0; index < 4; index++) {
        this.headItem[index].data = 0;
      }
      for (let index = 0; index < this.mcnNum; index++) {
        this.leftPartMcn.push({
          mcnName: "A00" + (index + 1),
          status: "运行",
          num: this.getRandomNum(470, 570),
        });
      }
      for (let index = 0; index < this.headItem[4].data; index++) {
        let status = "";
        switch (this.errorStatus) {
          case 0:
            status = "纬停";
            this.headItem[1].data = this.headItem[1].data + 1;
            break;
          case 1:
            status = "耳丝停";
            this.headItem[2].data = this.headItem[2].data + 1;
            break;
          case 2:
            status = "其他停";
            this.headItem[3].data = this.headItem[3].data + 1;
            break;
          case 3:
            status = "满停";
            break;
          case 4:
            status = "停机";
            break;
          default:
            break;
        }
        let mcnIndex = this.getRandomNum(0, this.mcnNum);
        this.leftPartMcn[mcnIndex].status = status;
        this.leftPartMcn[mcnIndex].num = 0;

        this.errorStatus = this.errorStatus >= 4 ? 0 : ++this.errorStatus;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.main-wrapper {
  width: 100%;
  height: 100%;
  .mcn-head {
    padding: 0.1rem 0;
    background-color: #fff;
    &-row {
      display: flex;
      justify-content: space-around;
      padding: 0 0.5rem;
      &:nth-child(1) {
        margin-bottom: 0.5rem;
      }
      &-item {
        flex: 1;
        margin: 0 0.5rem;
        text-align: center;
        border-radius: 0.3rem;
      }
    }
  }
  .mcn-content {
    width: 100%;
    height: 100%;
    background-color: #000;
    padding-top: 0.5rem;
    display: flex;
    justify-content: flex-start;
    .left-part {
      //   width: 600px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-right: 2rem;
      &-item {
        margin-bottom: 0.5rem;
        margin-left: 0.5rem;
      }
    }
    .right-part {
      width: 600px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      &-item {
        // margin-bottom: 0.5rem;
        margin-left: 0.5rem;
      }
    }
  }
}
</style>