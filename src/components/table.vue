<template>
  <div class="scrollWrapper">
    <div class="title">
      <div class="titleIndex" style="width: 10%"></div>
      <div class="title-content" v-for="(item, index) in title" :key="index">
        {{ item.label }}
      </div>
    </div>
    <vue-seamless-scroll
      :data="data"
      class="warp auto-scorll-table"
      :class-option="option"
    >
      <ul class="ulClass">
        <li v-for="(item, index) in data" :key="index">
          <div class="index">
            <div class="BGColor">{{ index + 1 }}</div>
          </div>
          <div class="content" v-for="(item2, index2) in title" :key="index2"
               :style="{color:specialColor(item[item2.prop],item2)}">
            {{ item[item2.prop] }}
          </div>
          <!-- <div class="content">{{ item.variety }}</div>
          <div class="content">{{ item.amount }}</div> -->
        </li>
      </ul>
    </vue-seamless-scroll>
  </div>
</template>

<script>
  import vueSeamlessScroll from "vue-seamless-scroll";

  export default {
    name: "Table",
    components: {
      vueSeamlessScroll,
    },
    props: {
      title: {
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
      steps: {
        type: Number,
        default: 1,
      },
    },
    data() {
      return {
        option: {
          step: 5,
          limitMoveNum: 2,
          singleHeight: this.getHeight(7.5),
          waitTime: 4000,
          switchDelay: 140,
          // isSingleRemUnit: true,
        },
      };
    },
    methods: {
      getHeight(px = 12.5) {
        return px * document.documentElement.style.fontSize.replace("px", "");
      },
      specialColor(prop,title) {
        let result = '';
        if (title.label === '状态')
        {
          if (prop === "在线") {
            result = "#4caf50";
          }else {
            result = "#f51111";
          }
        }
        return result;
      },
    },
  };
</script>

<style lang="less" scoped>
  .scrollWrapper {
    width: 100%;
    height: 500%;

    .title {
      font-size: 0.875rem;
      width: 100%;
      line-height: 2.5rem;
      margin-top: 1.5625rem;
      background: linear-gradient(to right,
      rgba(0, 149, 232, 1),
      rgba(0, 149, 232, 0.3));
      text-align: center;
      display: flex;
      justify-content: flex-start;

      .title-content {
        flex: 1;
      }
    }

    .auto-scorll-table {
      width: 100%;
      height: calc(100% - 2.5rem);
      margin: 0 auto;
      overflow: hidden;
      position: relative;
      // top: -2.5rem;
      z-index: 1;
    }

    .warp {
      width: 100%;
      height: calc(100% - 2.5rem);
      overflow: hidden;
    }

    .ulClass {
      padding: 0;
      margin: 0;
      width: 100%;
      list-style: none;

      div {
        display: inline-block;
      }

      li {
        width: 100%;
        font-size: 0.875rem;
        // line-height: 2.5rem;
        height: 4rem;
        text-align: center;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .BGColor {
          display: table-cell;
          width: 1.5rem;
          height: 1.5rem;
          line-height: 1.5rem;
          background-color: #00749b;
          border-radius: 0.3125rem;
          text-align: center;
          vertical-align: middle;
        }

        .index {
          width: 10%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          .BGColor {
            display: table-cell;
            width: 1.5rem;
            height: 1.5rem;
            background-color: #00749b;
            border-radius: 0.3125rem;
            text-align: center;
            vertical-align: middle;
          }
        }

        .content {
          flex: 1;
        }
      }

      li:nth-child(odd) {
        background-color: #052539;
      }

      li:nth-child(even) {
        background-color: #012136;
      }
    }
  }
</style>
