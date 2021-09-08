<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import {pageResize} from "./utils/resetScreenSize";

  export default {
    name: "App",
    // provide() {
    //   return {
    //     reload: this.reload,
    //   };
    // },
    // data() {
    //   return {
    //     isRouterAlive: true,
    //     pageTitle: "工业互联网平台",
    //   };
    // },
    mounted() {
      pageResize();
      // this.$store.dispatch("ps-overview/GetBasicSettingData").then((res) => {
      //   document.title =
      //     res.data[0] && res.data[0].titlename
      //       ? res.data[0].titlename
      //       : "工业互联网平台";
      // });
    },
    // methods: {
    //   reload() {
    //     this.isRouterAlive = false;
    //     this.$nextTick(function () {
    //       this.isRouterAlive = true;
    //     });
    //   },
    // },
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

  .table-index {
    width: 25px;
    height: 25px;
    background-color: #00749b;
    border-radius: 5px;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
  }
</style>
<style lang="less">
  @import "./assets/less/index";

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #ffffff;
  }

  #nav {
    // padding: 30px;

    a {
      font-weight: bold;
      color: #ffffff;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  // element 弹出框
  .el-popover {
    background-color: transparent !important;
    border: none !important;
  }

  /* 在全局CSS里引用: */
  /* 滚动条宽度 */
  ::-webkit-scrollbar {
    width: 7px;
    height: 10px;
  }

  /* 滚动条的滑块 */
  ::-webkit-scrollbar-thumb {
    background-color: #a1a3a9;
    border-radius: 3px;
  }

</style>
