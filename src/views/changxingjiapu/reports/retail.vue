<template>
  <div class="container">
    <div class="title">
      <span class="realtime">{{ realtime }}</span>
      <span>{{ title }}</span>
      <el-button type="primary" @click="closeWindow">关闭</el-button>
    </div>
    <div class="report">
      <el-table
        :data="retailData"
        style="width: 80%"
        :stripe="true"
        :border="true"
        :header-cell-style="{
          background: '#009af0',
          color: '#ffffff',
          textAlign: 'center',
        }"
        empty-text="-"
      >
        <el-table-column
          prop="ep_name"
          label="散户"
          min-width="100"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="dqty"
          label="当日产量（米）"
          min-width="120"
          align="right"
        >
        </el-table-column>
        <el-table-column
          prop="dmoney"
          label="当日加工费（元）"
          min-width="120"
          align="right"
        >
        </el-table-column>
        <el-table-column
          prop="dele"
          label="当日电量（度）"
          min-width="120"
          align="right"
        >
        </el-table-column>
        <el-table-column
          prop="mqty"
          label="当月产量（米）"
          min-width="120"
          align="right"
        >
        </el-table-column>
        <el-table-column
          prop="mmoney"
          label="当月加工费（元）"
          min-width="120"
          align="right"
        >
        </el-table-column>
        <el-table-column
          prop="mele"
          label="当月电量（度）"
          min-width="120"
          align="right"
        >
        </el-table-column>
        <el-table-column
          prop="yqty"
          label="本年产量（米）"
          min-width="120"
          align="right"
        >
        </el-table-column>
        <el-table-column
          prop="ymoney"
          label="本年加工费（元）"
          min-width="120"
          align="right"
        >
        </el-table-column>
        <el-table-column
          prop="yele"
          label="本年电量（度）"
          min-width="120"
          align="right"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import {
  qingyuRetailReport,
  longyuRetailReport,
  boliangRetailReport,
} from "@/api/reports";

export default {
  name: "RetailReport",
  data() {
    return {
      title: "长兴夹浦纺织小微企业园",
      realtime: this.$moment().format("YYYY-MM-DD HH:mm:ss"),
      retailData: [],
      _timer: function () {},
    };
  },
  mounted() {
    switch (this.$route.params.branch) {
      case "wucheng":
        this.title = "长兴夹浦小微企业园吴城分部";
        this.GetQingyuData();
        this.GetLongyuData();
        break;
      case "dingxin":
        this.title = "长兴夹浦小微企业园丁新分部";
        this.GetBoliangData();
        break;
      case "all":
        // this.title = "长兴夹浦小微企业园";
        this.GetData();
        break;
      default:
        break;
    }
    let that = this;
    this.timer = setInterval(() => {
      that.realtime = this.$moment().format("YYYY-MM-DD HH:mm:ss");
    }, 1000);
    this.timeRefresh();
  },
  methods: {
    closeWindow() {
      self.close();
    },
    timeRefresh() {
      this._timer = setInterval(() => {
        this.retailData = [];
        switch (this.$route.params.branch) {
          case "wucheng":
            this.GetQingyuData();
            this.GetLongyuData();
            break;
          case "dingxin":
            this.GetBoliangData();
            break;
          case "all":
            this.GetData();
            break;
          default:
            break;
        }
      }, 1000 * 60* 5);
    },
    GetData() {
      this.GetQingyuData();
      this.GetLongyuData();
      this.GetBoliangData();
    },
    GetQingyuData() {
      this.$store.dispatch("reports/qingyuRetailReport", {}).then(
        (res) => {
          if (res.data.length > 0) {
            this.retailData = this.retailData.concat(res.data);
          } else {
            this.$message({
              message: "暂无数据",
              type: "warning",
            });
          }
        },
        (err) => {
          this.$message.error("数据请求失败");
        }
      );
    },

    GetLongyuData() {
      this.$store.dispatch("reports/longyuRetailReport", {}).then(
        (res) => {
          if (res.data.length > 0) {
            this.retailData = this.retailData.concat(res.data);
          } else {
            this.$message({
              message: "暂无数据",
              type: "warning",
            });
          }
        },
        (err) => {
          this.$message.error("数据请求失败");
        }
      );
    },
    GetBoliangData() {
      this.$store.dispatch("reports/boliangRetailReport", {}).then(
        (res) => {
          if (res.data.length > 0) {
            this.retailData = this.retailData.concat(res.data);
          } else {
            this.$message({
              message: "暂无数据",
              type: "warning",
            });
          }
        },
        (err) => {
          this.$message.error("数据请求失败");
        }
      );
    },
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    clearInterval(this._timer);
  },
};
</script>

<style lang="less" scoped>
.container {
  color: #000000;

  .title {
    font-size: 36px;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    .realtime {
      position: absolute;
      left: 36px;
      font-size: 24px;
    }

    .el-button {
      position: absolute;
      right: 36px;
    }
  }

  .report {
    display: flex;
    justify-content: center;
  }
}
</style>
