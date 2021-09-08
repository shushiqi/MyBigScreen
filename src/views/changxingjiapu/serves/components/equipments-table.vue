<template>
  <div class="scrollWrapper">
    <el-table
      class="tableWrapper hidden-tbody"
      :show-header="showHeader"
      :header-row-style="headerRowStyle"
      :header-cell-style="headerCellStyle"
      :row-style="rowStyle"
      :cell-style="cellStyle"
    >
      <el-table-column align="center" min-width="50">
        <template slot-scope="scope">
          <div class="table-index">
            {{ scope.$index + 1 }}
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="设备名称"
        prop="device_name"
        show-overflow-tooltip
        align="center"
        :min-width="100"
      ></el-table-column>
      <el-table-column
        label="单位名称"
        prop="unit_name"
        show-overflow-tooltip
        align="center"
        :min-width="100"
      ></el-table-column>
      <el-table-column
        label="地址"
        prop="device_name"
        show-overflow-tooltip
        align="center"
        :min-width="100"
      ></el-table-column>
      <el-table-column
        label="状态"
        prop="online"
        show-overflow-tooltip
        align="center"
        :min-width="50"
      ></el-table-column>
      <template slot="empty">
        <div class="" style="height: 0px"></div>
      </template>
    </el-table>
    <vue-seamless-scroll
      :data="data"
      class="warp auto-scorll-table"
      :class-option="option"
    >
      <el-table
        :data="data"
        :show-header="false"
        :row-style="rowStyle"
        :cell-style="cellStyle"
        class="custom-table-2 hidden-thead customer-table"
      >
        <el-table-column align="center" min-width="50">
          <template slot-scope="scope">
            <div class="table-index">
              {{ scope.$index + 1 }}
            </div>
          </template>
        </el-table-column>
        <!-- <el-table-column
          v-for="(item, index) in labelList"
          :key="index"
          :label="item.label"
          :prop="item.prop"
          show-overflow-tooltip
          align="center"
          :min-width="item.width ? item.width : ''"
        ></el-table-column> -->
        <el-table-column
          label="设备名称"
          prop="device_name"
          show-overflow-tooltip
          align="center"
          :min-width="100"
        ></el-table-column>
        <el-table-column
          label="单位名称"
          prop="unit_name"
          show-overflow-tooltip
          align="center"
          :min-width="100"
        ></el-table-column>
        <el-table-column
          label="地址"
          prop="device_name"
          show-overflow-tooltip
          align="center"
          :min-width="100"
        ></el-table-column>
        <!-- <el-table-column
          label="状态"
          prop="online"
          show-overflow-tooltip
          align="center"
          :min-width="50"
          class-name="normalStatus"
          :class="{ abnormalStatus: data.online == '在线' }"
        ></el-table-column> -->
        <el-table-column
          label="状态"
          prop="online"
          show-overflow-tooltip
          align="center"
          :min-width="50"
        >
          <template scope="scope">
            <span v-if="scope.row.online == '在线'" class="normalStatus">{{
              scope.row.online
            }}</span>
            <span v-else class="abnormalStatus">{{ scope.row.online }}</span>
          </template>
        </el-table-column>
        <template slot="empty">
          <div class="" style="color: #ffffff">暂无数据</div>
        </template>
      </el-table>
    </vue-seamless-scroll>
  </div>
</template>

<script>
  import vueSeamlessScroll from "vue-seamless-scroll";

  export default {
    name: "EquipmentsTable",
    components: {
      vueSeamlessScroll,
    },
    props: {
      // labelList: {
      //   type: Array,
      //   default: [],
      // },
      //

      data: {
        type: Array,
        default: [],
      },
      showHeader: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        option: {
          step: 5,
          limitMoveNum: 2,
          singleHeight: 120,
          waitTime: 5000,
          switchDelay: 150,
        },
      };
    },

    mounted() {
      if (this.showHeader == false) {
        this.option.singleHeight = document.getElementsByClassName(
          "scrollWrapper"
        )[0].clientHeight;
      } else {
        let height = document.getElementsByClassName("scrollWrapper")[0]
          .clientHeight;
        this.option.singleHeight =
          document.getElementsByClassName("scrollWrapper")[0].clientHeight - 40;
      }
    },
    methods: {
      headerRowStyle: function ({row, rowIndex}) {
        let stylejson = {
          height: "40px",
        };
        return stylejson;
      },
      headerCellStyle: function ({row, column, rowIndex, columnIndex}) {
        let stylejson = {
          color: "#ffffff",
          background: "#0190D3",
          padding: "0px",
        };
        return stylejson;
      },
      rowStyle({row, rowIndex}) {
        let stylejson = {
          color: "#ffffff",
          height: "40px",
        };
        if (rowIndex % 2 == 1) {
          stylejson.background = "#012136";
          return stylejson;
        } else if (rowIndex % 2 == 0) {
          stylejson.background = "#052539";
          return stylejson;
        }
      },
      cellStyle({row, column, rowIndex, columnIndex}) {
        let stylejson = {
          padding: "0px",
        };
        return stylejson;
      },
    },
  };
</script>

<style>
  /* 取消表格hover 增加半透明遮罩 */
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: transparent !important;
    opacity: 0.5;
  }

  .el-table--enable-row-hover .el-table__body {
    border: none;
  }

  .el-table--enable-row-hover .el-table__body tr > td {
    border: none;
  }

  .el-table::before {
    height: 0px;
  }

  .el-table__empty-block {
    background: #012136;
    height: 40px !important;
  }

  .hidden-tbody .el-table__body-wrapper {
    height: 40px;
  }
</style>

<style lang="less" scoped>
  .scrollWrapper {
    width: 100%;
    height: 300%;

    .hidden-tbody .el-table {
      height: 40px;
      // box-sizing: border-box;
      tbody {
        //隐藏上面表格的tbody
        display: none;
        overflow: hidden;
      }
    }

    .auto-scorll-table {
      width: 100%;
      height: calc(100% - 40px);
      margin: 0 auto;
      overflow: hidden;
      position: relative;
      top: -40px;
      z-index: 1;
    }
  }

  .table-index {
    width: 25px;
    height: 25px;
    background-color: #00749b;
    border-radius: 5px;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
  }

  .normalStatus {
    color: #4caf50 !important;
  }

  .abnormalStatus {
    color: #f51111 !important;
  }
</style>
