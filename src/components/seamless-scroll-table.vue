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
        v-for="(item, index) in labelList"
        :key="index"
        :label="item.label"
        :prop="item.prop"
        align="center"
        :min-width="item.width ? item.width : ''"
      ></el-table-column>
      <template slot="empty">
        <div class="" style="height: 0rem"></div>
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
        <el-table-column
          v-for="(item, index) in labelList"
          :key="index"
          :label="item.label"
          :prop="item.prop"
          show-overflow-tooltip
          align="center"
          :min-width="item.width ? item.width : ''"
        ></el-table-column>
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
    name: "SeamlessScrollTable",
    components: {
      vueSeamlessScroll,
    },
    props: {
      labelList: {
        type: Array,
        default: [],
      },
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
    computed: {
      // data: function () {
      //   const headerHeight = this.showHeader ? 40 : 0;
      //   if (
      //     this.data.length <
      //     (document.getElementsByClassName("scrollWrapper")[0].clientHeight -
      //       headerHeight) /
      //       40
      //   ) {
      //     const gap =
      //       (document.getElementsByClassName("scrollWrapper")[0].clientHeight -
      //         headerHeight) /
      //       40;
      //     for (let i = 0; i < gap.length; i++) {
      //       const element = gap[i];
      //       this.data = this.data.concat({});
      //     }
      //   }
      // },
    },
    mounted() {
      if (this.showHeader == false) {
        this.option.singleHeight = document.getElementsByClassName(
          "scrollWrapper"
        )[0].clientHeight;
      } else {
        let height = document.getElementsByClassName("scrollWrapper")[0]
          .clientHeight;
        this.option.singleHeight = height - 50;
        console.log(height);
      }
    },
    methods: {
      headerRowStyle: function ({row, rowIndex}) {
        let stylejson = {
          height: "3.125rem",
        };
        return stylejson;
      },
      headerCellStyle: function ({row, column, rowIndex, columnIndex}) {
        let stylejson = {
          color: "#ffffff",
          background: "#0190D3",
          padding: "0rem",
        };
        return stylejson;
      },
      rowStyle({row, rowIndex}) {
        let stylejson = {
          color: "#ffffff",
          height: "3.125rem",
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
          padding: "0rem",
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
    height: 0rem;
  }

  .el-table__empty-block {
    background: #012136;
    height: 3.125rem !important;
  }

  .hidden-tbody .el-table__body-wrapper {
    height: 3.125rem;
  }
</style>

<style lang="less" scoped>
  .scrollWrapper {
    width: 100%;
    height: 300%;

    .tableWrapper {
    }

    .hidden-tbody .el-table {
      height: 3.125rem;
      // box-sizing: border-box;
      tbody {
        //隐藏上面表格的tbody
        display: none;
        overflow: hidden;
      }
    }

    .auto-scorll-table {
      width: 100%;
      height: calc(100% - 3.125rem);
      margin: 0 auto;
      overflow: hidden;
      position: relative;
      top: -3.125rem;
      z-index: 1;
    }
  }

  .table-index {
    width: 1.5625rem;
    height: 1.5625rem;
    background-color: #00749b;
    border-radius: 0.3125rem;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
  }
</style>
