<template>
  <el-container class="container" :style="elMainBG">
    <el-header>
      <xiaoweiyuanHeader title="长兴夹浦小微园吴城分部" />
    </el-header>
    <div class="header-right">
      <el-button type="text" style="color: #fff" @click="toSecondVer()"
        >查看当日汇总统计</el-button
      >
    </div>
    <div class="banner">
      <div class="menu-one" :style="menuOneBG">
        <div class="title">平台企业汇总统计</div>
        <div class="menu-one-content">
          <ul class="menu-one-ul">
            <li class="menu-one-li">
              <div>
                <div class="icon-left">
                  <a>
                    <img src="@/assets/images/pro_icon/yscg.png" alt="" />
                    <p class="bottom-font">原丝采购</p>
                  </a>
                </div>
                <div class="icon-right">
                  <p>昨日总采购<span class="count1" id="count1"><countTo
                  :startVal="0"
                  :endVal="data1.dqty"
                  :duration="2000"
                  :decimals="2"
                ></countTo></span>万公斤</p>
                  <p>七日总采购<span class="count2" id="count2"><countTo
                  :startVal="0"
                  :endVal="data1.mqty"
                  :duration="2000"
                  :decimals="2"
                ></countTo></span>万公斤</p>
                  <p>本年总采购<span class="count2" id="count3"><countTo
                  :startVal="0"
                  :endVal="data1.yqty"
                  :duration="2000"
                  :decimals="2"
                ></countTo></span>万公斤</p>
                </div>
              </div>
            </li>
            <li class="menu-one-li">
              <div>
                <div class="icon-left">
                  <a>
                    <img src="@/assets/images/pro_icon/yshy.png" alt="" />
                    <p class="bottom-font">原丝耗用</p>
                  </a>
                </div>
                <div class="icon-right">
                  <p>
                    昨日总原丝耗用<span class="count1" id="count4"><countTo
                  :startVal="0"
                  :endVal="data2.dqty"
                  :duration="2000"
                  :decimals="2"
                ></countTo></span>万公斤
                  </p>
                  <p>
                    七日总原丝耗用<span class="count2" id="count5"><countTo
                  :startVal="0"
                  :endVal="data2.mqty"
                  :duration="2000"
                  :decimals="2"
                ></countTo></span>万公斤
                  </p>
                  <p>
                    本年总原丝耗用<span class="count2" id="count6"><countTo
                  :startVal="0"
                  :endVal="data2.yqty"
                  :duration="2000"
                  :decimals="2"
                ></countTo></span>万公斤
                  </p>
                </div>
              </div>
            </li>
            <li class="menu-one-li">
              <div>
                <div class="icon-left">
                  <a>
                    <img src="@/assets/images/pro_icon/pbcc.png" alt="" />
                    <p class="bottom-font">坯布产出</p>
                  </a>
                </div>
                <div class="icon-right">
                  <p>
                    昨日总坯布产出<span class="count1" id="count7"><countTo
                  :startVal="0"
                  :endVal="data3.dqty"
                  :duration="2000"
                  :decimals="2"
                ></countTo></span>万米
                  </p>
                  <p>
                    七日总坯布产出<span class="count2" id="count8"><countTo
                  :startVal="0"
                  :endVal="data3.mqty"
                  :duration="2000"
                  :decimals="2"
                ></countTo></span>万米
                  </p>
                  <p>
                    本年总坯布产出<span class="count2" id="count9"><countTo
                  :startVal="0"
                  :endVal="data3.yqty"
                  :duration="2000"
                  :decimals="2"
                ></countTo></span>万米
                  </p>
                </div>
              </div>
            </li>
            <li class="menu-one-li">
              <div>
                <div class="icon-left">
                  <a>
                    <img src="@/assets/images/pro_icon/pbxs.png" alt="" />
                    <p class="bottom-font">坯布销售</p>
                  </a>
                </div>
                <div class="icon-right">
                  <p>
                    昨日总销售<span class="count1" id="count10"><countTo
                  :startVal="0"
                  :endVal="data4.dqty"
                  :duration="2000"
                  :decimals="2"
                ></countTo></span>万米
                  </p>
                  <p>
                    七日总销售<span class="count2" id="count11"><countTo
                  :startVal="0"
                  :endVal="data4.mqty"
                  :duration="2000"
                  :decimals="2"
                ></countTo></span>万米
                  </p>
                  <p>
                    本年总销售<span class="count2" id="count12"><countTo
                  :startVal="0"
                  :endVal="data4.yqty"
                  :duration="2000"
                  :decimals="2"
                ></countTo></span>万米
                  </p>
                </div>
              </div>
            </li>
            <li class="menu-one-li">
              <div>
                <div class="icon-left">
                  <a>
                    <img src="@/assets/images/pro_icon/pbkc.png" alt="" />
                    <p class="bottom-font">坯布库存</p>
                  </a>
                </div>
                <div class="icon-right">
                  <p>
                    总坯布库存<span class="count1" id="count13"><countTo
                  :startVal="0"
                  :endVal="data5.qtysum"
                  :duration="2000"
                  :decimals="2"
                ></countTo></span>万米
                  </p>
                  <p>
                    总库存卷数<span class="count1" id="count14"
                      ><countTo
                        :startVal="0"
                        :endVal="data5.packqtysum"
                        :duration="2000"
                        :decimals="2"
                      ></countTo></span
                    >卷
                  </p>
                  <p>
                    总库存品种<span class="count1" id="count15"
                      ><countTo
                        :startVal="0"
                        :endVal="data5.typesum"
                        :duration="2000"
                        :decimals="2"
                      ></countTo></span
                    >个
                  </p>
                </div>
              </div>
            </li>
            <li class="menu-one-li">
              <div>
                <div class="icon-left">
                  <a>
                    <img src="@/assets/images/pro_icon/qy.png" alt="" />
                    <p class="bottom-font">企业</p>
                  </a>
                </div>
                <div class="icon-right">
                  <p>入驻企业<span class="count2" id="count16">5</span>个</p>
                  <p>织机总数<span class="count2" id="count17">963</span>台</p>
                  <p>织机运转<span class="count1" id="count18">0</span>台</p>
                </div>
              </div>
            </li>
            <li class="menu-one-li">
              <div>
                <div class="icon-left">
                  <a
                      :href="loomDistribution"
                  >
                    <img src="@/assets/images/pro_icon/zjkjl.png" alt="" />
                    <p class="bottom-font">织机开机率</p>
                  </a>
                </div>
                <div class="icon-right">
                  <p>
                    昨日织机开机率<span class="count1" id="count19"
                      ><countTo
                        :startVal="0"
                        :endVal="data9.day"
                        :duration="2000"
                        :decimals="2"
                      ></countTo></span
                    >%
                  </p>
                  <p>
                    七日织机开机率<span class="count2" id="count20"
                      ><countTo
                        :startVal="0"
                        :endVal="data9.month"
                        :duration="2000"
                        :decimals="2"
                      ></countTo></span
                    >%
                  </p>
                  <!-- <p>本年总采购<span class="count2">{{}}</span>公斤</p> -->
                </div>
              </div>
            </li>
            <li class="menu-one-li">
              <div>
                <div class="icon-left">
                  <a>
                    <img src="@/assets/images/pro_icon/shui.png" alt="" />
                    <p class="bottom-font">水</p>
                  </a>
                </div>
                <div class="icon-right">
                  <p>昨日总水量<span class="count1" id="count21"><countTo
                  :startVal="0"
                  :endVal="data6.dqty"
                  :duration="2000"
                ></countTo></span>吨</p>
                  <p>七日总水量<span class="count2" id="count22"><countTo
                  :startVal="0"
                  :endVal="data6.mqty"
                  :duration="2000"
                ></countTo></span>吨</p></p>
                  <p>本年总水量<span class="count2" id="count23"><countTo
                  :startVal="0"
                  :endVal="data6.yqty"
                  :duration="2000"
                ></countTo></span>吨</p></p>
                </div>
              </div>
            </li>
            <li class="menu-one-li">
              <div>
                <div class="icon-left">
                  <a>
                    <img src="@/assets/images/pro_icon/dian.png" alt="" />
                    <p class="bottom-font">电</p>
                  </a>
                </div>
                <div class="icon-right">
                  <p>昨日总电量<span class="count1" id="count24"><countTo
                  :startVal="0"
                  :endVal="data7.dqty"
                  :duration="2000"
                ></countTo></span>度</p>
                  <p>七日总电量<span class="count2" id="count25"><countTo
                  :startVal="0"
                  :endVal="data7.mqty"
                  :duration="2000"
                ></countTo></span>度</p>
                  <p>本年总电量<span class="count2" id="count26"><countTo
                  :startVal="0"
                  :endVal="data7.yqty"
                  :duration="2000"
                ></countTo></span>度</p>
                </div>
              </div>
            </li>
            <li class="menu-one-li">
              <div>
                <div class="icon-left">
                  <a>
                    <img src="@/assets/images/pro_icon/hjzb.png" alt="" />
                    <p class="bottom-font">环境指标</p>
                  </a>
                </div>
                <div class="icon-right environment">
                  <p>
                    PH值<span class="count1" id="count27"
                      ><countTo
                        :startVal="0"
                        :endVal="data8.phvalue"
                        :duration="2000"
                        :decimals="1"
                      ></countTo
                    ></span>
                  </p>
                  <p>
                    石油类<span class="count1" id="count28"
                      ><countTo
                        :startVal="0"
                        :endVal="data8.fossilvalue"
                        :duration="2000"
                        :decimals="1"
                      ></countTo
                    ></span>
                  </p>
                  <p>
                    氨氮<span class="count1" id="count29"
                      ><countTo
                        :startVal="0"
                        :endVal="data8.anvalue"
                        :duration="2000"
                        :decimals="1"
                      ></countTo
                    ></span>
                  </p>
                  <p>
                    悬浮物<span class="count1" id="count30"
                      ><countTo
                        :startVal="0"
                        :endVal="data8.floatvalue"
                        :duration="2000"
                        :decimals="1"
                      ></countTo
                    ></span>
                  </p>
                  <p>
                    总磷<span class="count1" id="count31"
                      ><countTo
                        :startVal="0"
                        :endVal="data8.phosphorous"
                        :duration="2000"
                        :decimals="1"
                      ></countTo
                    ></span>
                  </p>
                  <p>
                    化学需氧量<span class="count1" id="count32"
                      ><countTo
                        :startVal="0"
                        :endVal="data8.oxygenvalue"
                        :duration="2000"
                        :decimals="1"
                      ></countTo
                    ></span>
                  </p>
                </div>
              </div>
            </li>
            <li class="menu-one-li">
              <div>
                <div class="icon-left">
                  <a>
                    <img src="@/assets/images/pro_icon/tm.png" alt="" />
                    <p class="bottom-font">条码</p>
                  </a>
                </div>
                <div class="icon-right">
                  <p>
                    接入条码企业<span class="count2" id="count33">5</span>个
                  </p>
                  <p>
                    总有效条码数<span class="count2" id="count34">0</span>卷
                  </p>
                  <p>
                    条码验证请求<span class="count2" id="count35"
                      ><countTo
                        :startVal="0"
                        :endVal="data5.packqtysum"
                        :duration="2000"
                      ></countTo></span
                    >万次
                  </p>
                </div>
              </div>
            </li>
            <li class="menu-one-li">
              <div>
                <div class="icon-left">
                  <a>
                    <img src="@/assets/images/pro_icon/app.png" alt="" />
                    <p class="bottom-font">应用</p>
                  </a>
                </div>
                <div class="icon-right">
                  <p>APP个数<span class="count2" id="count36">12</span>个</p>
                  <p>
                    APP访问流量<span class="count2" id="count37">260</span>次
                  </p>
                  <p>
                    APP使用人数<span class="count2" id="count38">52</span>人
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mid-content">
      <div class="mid-box" :style="menuThreeBG">
        <div>
          <div class="title">平台企业当前坯布库存品种</div>
          <div class="listtitle">
            <span class="title1">品种</span
            ><span class="title2">数量（万米）</span>
          </div>
          <vue-seamless-scroll
            :data="list1"
            class="seamless-warp"
            :class-option="optionSingleHeight"
          >
            <ul class="item1">
              <li v-for="(item, index) in list1" :key="index">
                <span class="index1" v-text="index + 1"></span>
                <span class="index2" v-text="item.mat"></span>
                <span class="index3" v-text="item.qty"></span>
              </li>
            </ul>
          </vue-seamless-scroll>
        </div>
      </div>
      <div class="mid-box" :style="menuThreeBG">
        <div>
          <div class="title">平台企业本年原丝耗用品种排行</div>
          <div>
            <div id="financeProductTop"></div>
          </div>
        </div>
      </div>
      <div class="mid-box" :style="menuThreeBG">
        <div>
          <div class="title">平台企业本年销售品种排行</div>
          <div>
            <div id="financeProductTop1"></div>
          </div>
        </div>
      </div>
      <div class="mid-box" :style="menuThreeBG">
        <div>
          <div class="title">平台企业本年家庭织机户产量统计</div>
          <div class="listtitle1">
            <span class="title1">家庭织机户</span><span>企业</span
            ><span class="title2">产量（万米）</span>
          </div>
          <div class="test">
            <vue-seamless-scroll
              :data="list2"
              class="seamless-warp"
              :class-option="optionSingleHeight"
            >
              <ul class="item">
                <li v-for="(item, index) in list2" :key="index">
                  <span class="index1" v-text="index + 1"></span>
                  <span class="index2" v-text="item.name"></span>
                  <span class="index3" v-text="item.epsname"></span>
                  <span class="index4" v-text="item.qty"></span>
                </li>
              </ul>
            </vue-seamless-scroll>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-content">
      <div class="bottom-bigbox" :style="menuTwoBG">
        <div>
          <div class="title">平台企业本年产出统计</div>
          <div>
            <div id="nowyearproduc"></div>
          </div>
        </div>
      </div>
      <div class="bottom-smilebox">
        <div class="top">
          <div class="top-bigbox" :style="menuTwoBG">
            <div>
              <div class="title">平台企业本年原丝耗用统计</div>
              <div>
                <div class="third-part" id="partEconomyChart"></div>
              </div>
            </div>
          </div>
          <div class="top-bigbox" :style="menuTwoBG">
            <div>
              <div class="title">平台企业本年销售统计</div>
              <div>
                <div class="third-part" id="partEconomyChart1"></div>
              </div>
            </div>
          </div>
        </div>
        <dir class="footer">
          <div class="footer-button" :style="parkCardBG" @click="toparkall()">
            <img src="@/assets/images/icon/底部ICON/icon_1.png" alt="" />
            <div>园区总览</div>
          </div>
          <!-- <div class="footer-button" :style="parkCardBG" @click="towcpark()">
            <img src="@/assets/images/icon/底部ICON/icon_1.png" alt="" />
            <div>吴城园区总览</div>
          </div> -->
          <div class="footer-button" :style="parkCardBG">
            <img src="@/assets/images/icon/底部ICON/icon_2_press.png" alt="" />
            <div>吴城生产总览</div>
          </div>
        </dir>
      </div>
      <div class="bottom-bigbox" :style="menuTwoBG">
        <div>
          <div class="title">平台企业年度能耗统计</div>
        </div>
        <div>
          <div id="nowyearproduc1"></div>
        </div>
      </div>
    </div>
  </el-container>
</template>

<style lang="less" scoped>
a {
  text-decoration: none;
}
.seamless-warp {
  height: 180px;
  overflow: hidden;
}
.container {
  margin: 0;
  padding: 0;
  height: 1080px;
  text-align: center;
  width: 100%;
  color: #ffffff;
  overflow: hidden;
  .header-right {
    position: absolute;
    top: 15px;
    right: 22%;
    width: 10%;
    float: right;
  }
  .banner {
    height: 310px;
    width: 100%;
    margin-top: 20px;
    .menu-one {
      height: 100%;
      background-size: 100% 100%;
      .title {
        text-align: left;
        font-size: 18px;
        font-weight: 700;
        padding: 10px 50px;
      }
      .menu-one-content {
        height: 80%;
        .menu-one-ul {
          height: 100%;
          margin: 10px 0;
          padding: 0;
          .menu-one-li:nth-of-type(3) {
            width: 18%;
          }
          .menu-one-li:nth-of-type(9) {
            width: 18%;
          }
          .menu-one-li {
            width: 16%;
            height: 50%;
            display: inline-block;
            .icon-left {
              width: 30%;
              float: left;
              img {
                height: 100%;
                width: 100%;
                max-width: 90px;
                max-height: 90px;
              }
              .bottom-font {
                color: #7ddcff;
                font-size: 16px;
                margin: 0;
              }
            }
            .icon-right {
              width: 69%;
              float: right;
              font-size: 13px;
              text-align: left;
              p {
                margin: 10px 0;
              }
              .count1 {
                color: #1dd90c;
                font-size: 25px;
              }
              .count2 {
                color: #7ddcff;
                font-size: 25px;
              }
            }
            .environment {
              p {
                display: inline-block;
                width: 45%;
                margin-top: 10px;
                margin-bottom: 0;
              }
            }
          }
        }
      }
    }
  }
}
.mid-content {
  height: 290px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-top: 20px;
  .mid-box {
    height: 100%;
    width: 24%;
    background-size: 100% 100%;
    .title {
      text-align: left;
      font-size: 18px;
      font-weight: 700;
      padding: 10px 6%;
    }
  }
}
.bottom-content {
  margin-top: 20px;
  height: 320px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  .bottom-bigbox {
    width: 24%;
    background-size: 100% 100%;
    .title {
      text-align: left;
      font-size: 18px;
      font-weight: 700;
      padding: 10px 6%;
    }
  }
  .bottom-smilebox {
    width: 50%;
    .top {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      .top-bigbox {
        width: 48%;
        height: 200px;
        background-size: 100% 100%;
        .title {
          text-align: left;
          font-size: 18px;
          font-weight: 700;
          padding: 10px 6%;
        }
      }
    }
  }
}
.footer {
  margin-right: 20px;
  margin-top: 40px;
  height: 100px;
  display: flex;
  justify-content: center;
  .footer-button {
    box-sizing: border-box;
    background-size: 100% 100%;
    width: 200px;
    margin: 0 10px;

    img {
      position: relative;
      width: 60px;
      height: 60px;
    }
    div {
      font-size: 25px;
      font-weight: bold;
      position: relative;
      top: -4px;
      height: 40px;
      letter-spacing: 2px;
    }
  }
}
.ratedata {
  color: #f8b033;
}

#doughnutChart {
  width: 450px;
  height: 250px;
}
#financeProductTop {
  width: 90%;
  height: 300px;
  padding-left: 10px;
  margin-top: -40px;
}
#financeProductTop1 {
  width: 90%;
  height: 300px;
  padding-left: 10px;
  margin-top: -40px;
}
#nowyearproduc {
  width: 100%;
  height: 300px;
  padding-left: 10px;
  margin-top: -20px;
}
#nowyearproduc1 {
  width: 100%;
  height: 300px;
  padding-left: 10px;
  margin-top: -20px;
}
#partEconomyChart {
  width: 100%;
  height: 250px;
  padding-left: 10px;
  margin-top: -60px;
}

#partEconomyChart1 {
  width: 100%;
  height: 250px;
  padding-left: 10px;
  margin-top: -60px;
}

#enterpriseList {
  color: "#ffffff";
  position: relative;
  top: 20px;
  left: 40px;
}

.mid-main .park-cards {
  width: 100%;
  display: flex;
  justify-content: center;
  .park-card {
    width: 200px;
    height: 100px;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    .img {
      position: relative;
      width: 60px;
      height: 60px;
    }
    .title {
      height: 40px;
      position: relative;
      font-size: 25px;
      font-weight: bold;
      letter-spacing: 2px;
    }
  }
}

.el-header {
  text-align: center;
  padding: 0;
  width: 100%;
}
.header {
  width: 100%;
}

body > .el-container {
  margin-bottom: 40px;
}
.item1 {
  padding: 0;
  margin: 0;
  margin-left: 5px;
  list-style: none;
  div {
    display: inline-block;
  }
  li {
    font-size: 13px;
    line-height: 30px;
    .index1 {
      background: #00749b;
      line-height: 25px;
      width: 25px;
      border-radius: 3px;
      float: left;
    }
    .index2 {
      width: 30%;
      text-align: center;
    }
    .index3 {
      width: 30%;
      text-align: center;
      float: right;
    }
  }
}
.item {
  padding: 0;
  margin: 0;
  margin-left: 5px;
  list-style: none;
  div {
    display: inline-block;
  }
  li {
    box-sizing: border-box;
    line-height: 30px;
    font-size: 13px;
    .index1 {
      background: #00749b;
      line-height: 25px;
      width: 25px;
      border-radius: 3px;
      float: left;
    }
    .index2 {
      width: 30%;
      float: left;
      padding-left: 20px;
    }
    .index3 {
      width: 40%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      float: left;
    }
    .index4 {
      float: right;
      width: 15%;
    }
  }
}
.listtitle {
  font-size: 13px;
  width: 100%;
  line-height: 35px;
  margin-top: 25px;
  background: linear-gradient(
    to right,
    rgba(0, 149, 232, 1),
    rgba(0, 149, 232, 0.3)
  );
  .title1 {
    padding-left: 10%;
    width: 20%;
  }
  .title2 {
    width: 30%;
    float: right;
  }
}
.listtitle1 {
  font-size: 13px;
  width: 100%;
  line-height: 35px;
  margin-top: 25px;
  background: linear-gradient(
    to right,
    rgba(0, 149, 232, 1),
    rgba(0, 149, 232, 0.3)
  );
  span {
    display: inline-block;
    width: 25%;
  }
  .title2 {
    float: right;
  }
}
.box2 {
  transform: rotateY(180deg);
}
</style>
<script>
import xiaoweiyuanHeader from "@/components/XiaoweiyuanHeader";
import countTo from "@/components/vue-count-to/vue-countTo.vue";
import vueSeamlessScroll from "vue-seamless-scroll";
import { charts } from "@/utils/index";
import echarts from "echarts";
import http from "@/http";
import "jquery";

export default {
  name: "cxjp",

  data() {
    return {
      loomDistribution:
        window.location.origin +
        window.location.pathname +
        "#/loomDistribution/wucheng",
      menuOneBG: {
        backgroundImage:
          "url(" + require("@/assets/images/background/bg_wcpro1.png") + ")",
      },
      menuTwoBG: {
        backgroundImage:
          "url(" + require("@/assets/images/background/bg_wcpro2.png") + ")",
      },
      menuThreeBG: {
        backgroundImage:
          "url(" + require("@/assets/images/background/bg_wcpro3.png") + ")",
      },
      menuFourBG: {
        backgroundImage:
          "url(" + require("@/assets/images/background/bg_4.png") + ")",
      },
      parkCardBG: {
        backgroundImage:
          "url(" + require("@/assets/images/background/200100.png") + ")",
      },
      elMainBG: {
        backgroundImage:
          "url(" + require("@/assets/images/background/bg_wucheng.png") + ")",
      },
      data1: {
        dqty: 0,
        mqty: 0,
        yqty: 0,
      },
      data2: {
        dqty: 0,
        mqty: 0,
        yqty: 0,
      },
      data3: {
        dqty: 0,
        mqty: 0,
        yqty: 0,
      },
      data4: {
        dqty: 0,
        mqty: 0,
        yqty: 0,
      },
      data5: {
        qtysum: 0,
        typesum: 0,
        packqtysum: 0,
      },
      data6: {
        dqty: 0,
        mqty: 0,
        yqty: 0,
      },
      data7: {
        dqty: 0,
        mqty: 0,
        yqty: 0,
      },
      data8: {
        phvalue: 0,
        anvalue: 0,
        phosphorous: 0,
        fossilvalue: 0,
        floatvalue: 0,
        oxygenvalue: 0,
      },
      data9: {
        month: 0,
        day: 0,
      },
      data10: {
        sum: 0,
        on: 0,
      },
      echarts1: [],
      echarts2: [],
      echarts3: [],
      echarts4: [],
      echarts5: [],
      echarts6: [],
      echarts7: [],
      echarts8: [],
      echarts9: [],
      list1: [],
      list2: [],
      count1: "0",
      count2: "0",
      count3: "0",
      fullHeight: document.documentElement.innerHeigh,
    };
  },
  components: {
    xiaoweiyuanHeader,
    vueSeamlessScroll,
    countTo,
  },
  watch: {
    fullHeight(val) {
      if (!this.timer) {
        this.fullHeight = val;
        this.timer = true;
        let that = this;
        setTimeout(function () {
          that.timer = false;
        }, 400);
      }
    },
  },
  beforeMounted() {},
  mounted() {
    this.GetSilkProductionData();
    this.GetSilkExpendData();
    this.GetSilkExpendDetailData();
    this.GetSilkSilkExpendVarietiesData();
    this.GetGreyProductionData();
    this.GetGreySaleData();
    this.GetGreySummaryData();
    this.GetGreyProductionDetailData();
    this.GetGreySaleDetailData();
    this.GetGreySaleVarietiesData();
    this.GetIndividualGreyProData();
    this.GetGreyVrtItyData();
    this.GetLoomStateData();
    this.GetLoomOnRateData();
    this.GetSewageIndexData();
    this.GetParkWaterData();
    this.GetParkElectricData();
    this.GetParkEleWatDetailData();
    setTimeout(() => {
      this.countchange();
    }, 2000);
  },
  methods: {
    //原丝生产统计
    GetSilkProductionData() {
      this.$store
        .dispatch("silk/SilkProductionTimeBefore", { park: "wucheng" })
        .then(
          (res) => {
            if (res.data.length == 1) {
              this.data1.dqty = res.data[0].daybeforeqty / 10000;
              this.data1.mqty = res.data[0].weekqty / 10000;
              this.data1.yqty = res.data[0].yqty / 10000;
            } else {
              // this.$message({
              //   message: "暂无数据",
              //   type: "warning",
              // });
            }
          },
          (err) => {
            this.$message.error("数据请求失败");
          }
        );
    },
    //原丝耗用统计
    GetSilkExpendData() {
      this.$store
        .dispatch("silk/SilkExpendTimeBefore", { park: "wucheng" })
        .then(
          (res) => {
            if (res.data.length == 1) {
              this.data2.dqty = res.data[0].daybeforeqty / 10000;
              this.data2.mqty = res.data[0].weekqty / 10000;
              this.data2.yqty = res.data[0].yqty / 10000;
            } else {
              // this.$message({
              //   message: "暂无数据",
              //   type: "warning",
              // });
            }
          },
          (err) => {
            this.$message.error("数据请求失败");
          }
        );
    },
    //原丝每月耗用统计
    GetSilkExpendDetailData() {
      this.$store.dispatch("silk/SilkExpendDetail", { park: "wucheng" }).then(
        (res) => {
          if (res.data.length > 0) {
            for (var i = 0; i < res.data.length; i++) {
              this.echarts1.push(res.data[i].quantity);
            }

            this.renderParkEconomyChart();
          } else {
            // this.$message({
            //   message: "暂无数据",
            //   type: "warning",
            // });
          }
        },
        (err) => {
          this.$message.error("数据请求失败");
        }
      );
    },
    //原丝本年耗用品种排名
    GetSilkSilkExpendVarietiesData() {
      this.$store
        .dispatch("silk/SilkExpendVarieties", { park: "wucheng" })
        .then(
          (res) => {
            if (res.data.length > 0) {
              for (var i = 0; i < res.data.length; i++) {
                this.echarts2.push(res.data[i].mat);
                this.echarts3.push(res.data[i].qty);
              }
              this.echarts2.reverse();
              this.echarts3.reverse();
              this.renderFinanceProductTop();
            } else {
              // this.$message({
              //   message: "暂无数据",
              //   type: "warning",
              // });
            }
          },
          (err) => {
            this.$message.error("数据请求失败");
          }
        );
    },
    //坯布产出统计
    GetGreyProductionData() {
      this.$store
        .dispatch("greige/GreyProductionTimeBefore", { park: "wucheng" })
        .then(
          (res) => {
            if (res.data.length == 1) {
              this.data3.dqty = res.data[0].daybeforeqty;
              this.data3.mqty = res.data[0].weekqty;
              this.data3.yqty = res.data[0].yqty;
            } else {
              // this.$message({
              //   message: "暂无数据",
              //   type: "warning",
              // });
            }
          },
          (err) => {
            this.$message.error("数据请求失败");
          }
        );
    },
    //坯布销售统计
    GetGreySaleData() {
      this.$store
        .dispatch("greige/GreySaleTimeBefore", { park: "wucheng" })
        .then(
          (res) => {
            if (res.data.length == 1) {
              this.data4.dqty = res.data[0].daybeforeqty;
              this.data4.mqty = res.data[0].weekqty;
              this.data4.yqty = res.data[0].yqty;
            } else {
              // this.$message({
              //   message: "暂无数据",
              //   type: "warning",
              // });
            }
          },
          (err) => {
            this.$message.error("数据请求失败");
          }
        );
    },
    //坯布库存总数量和总卷数，总品种
    GetGreySummaryData() {
      this.$store.dispatch("greige/GreySummary", { park: "wucheng" }).then(
        (res) => {
          if (res.data.length == 1) {
            this.data5 = res.data[0];
          } else {
            // this.$message({
            //   message: "暂无数据",
            //   type: "warning",
            // });
          }
        },
        (err) => {
          this.$message.error("数据请求失败");
        }
      );
    },
    //坯布每月总产出统计
    GetGreyProductionDetailData() {
      this.$store
        .dispatch("greige/GreyProductionDetail", { park: "wucheng" })
        .then(
          (res) => {
            if (res.data.length > 0) {
              for (var i = 0; i < res.data.length; i++) {
                this.echarts7.push(res.data[i].quantity);
              }
              this.rendernowyearproduc();
            } else {
              // this.$message({
              //   message: "暂无数据",
              //   type: "warning",
              // });
            }
          },
          (err) => {
            this.$message.error("数据请求失败");
          }
        );
    },
    //坯布每月总销售统计
    GetGreySaleDetailData() {
      this.$store.dispatch("greige/GreySaleDetail", { park: "wucheng" }).then(
        (res) => {
          if (res.data.length > 0) {
            for (var i = 0; i < res.data.length; i++) {
              this.echarts4.push(res.data[i].quantity);
            }
            this.renderParkEconomyChart1();
          } else {
            // this.$message({
            //   message: "暂无数据",
            //   type: "warning",
            // });
          }
        },
        (err) => {
          this.$message.error("数据请求失败");
        }
      );
    },
    //坯布本年销售品种排名
    GetGreySaleVarietiesData() {
      this.$store
        .dispatch("greige/GreySaleVarieties", { park: "wucheng" })
        .then(
          (res) => {
            if (res.data.length > 0) {
              for (var i = 0; i < res.data.length; i++) {
                this.echarts5.push(res.data[i].mat);
                this.echarts6.push(res.data[i].qty);
              }
              this.echarts5.reverse();
              this.echarts6.reverse();
              this.renderFinanceProductTop1();
            } else {
              // this.$message({
              //   message: "暂无数据",
              //   type: "warning",
              // });
            }
          },
          (err) => {
            this.$message.error("数据请求失败");
          }
        );
    },
    //各个企业散户坯布产出信息
    GetIndividualGreyProData() {
      this.$store
        .dispatch("greige/IndividualGreyPro", { park: "wucheng" })
        .then(
          (res) => {
            if (res.data.length > 0) {
              this.list2 = res.data;
            } else {
              // this.$message({
              //   message: "暂无数据",
              //   type: "warning",
              // });
            }
          },
          (err) => {
            this.$message.error("数据请求失败");
          }
        );
    },
    //当前坯布库存统计
    GetGreyVrtItyData() {
      this.$store.dispatch("greige/GreyVrtIty", { park: "wucheng" }).then(
        (res) => {
          if (res.data.length > 0) {
            this.list1 = res.data;
          } else {
            // this.$message({
            //   message: "暂无数据",
            //   type: "warning",
            // });
          }
        },
        (err) => {
          this.$message.error("数据请求失败");
        }
      );
    },
    //织机运转个数
    GetLoomStateData() {
      this.$store.dispatch("loom/LoomState", { park: "wucheng" }).then(
        (res) => {
          if (res.data.length == 1) {
            this.data10 = res.data[0];
          } else {
            // this.$message({
            //   message: "暂无数据",
            //   type: "warning",
            // });
          }
        },
        (err) => {
          this.$message.error("数据请求失败");
        }
      );
    },
    //当日开机率
    GetLoomOnRateData() {
      this.$store
        .dispatch("loom/LoomOnRateTimeBefore", { park: "wucheng" })
        .then(
          (res) => {
            if (res.data.length == 1) {
              this.data9.day = res.data[0].beforedayrate;
              this.data9.month = res.data[0].weekrate;
            } else {
              // this.$message({
              //   message: "暂无数据",
              //   type: "warning",
              // });
            }
          },
          (err) => {
            // this.$message.error("数据请求失败");
          }
        );
    },
    //环境指数
    GetSewageIndexData() {
      this.$store.dispatch("others/SewageIndex", { park: "wucheng" }).then(
        (res) => {
          if (res.data.length == 1) {
            this.data8 = res.data[0];
          } else {
            // this.$message({
            //   message: "暂无数据",
            //   type: "warning",
            // });
          }
        },
        (err) => {
          this.$message.error("数据请求失败");
        }
      );
    },
    //水
    GetParkWaterData() {
      this.$store
        .dispatch("others/ParkWaterTimeBefore", { park: "wucheng" })
        .then(
          (res) => {
            if (res.data.length == 1) {
              this.data6.dqty = res.data[0].daybeforeqty;
              this.data6.mqty = res.data[0].weekqty;
              this.data6.yqty = res.data[0].yqty;
            } else {
              // this.$message({
              //   message: "暂无数据",
              //   type: "warning",
              // });
            }
          },
          (err) => {
            this.$message.error("数据请求失败");
          }
        );
    },
    //电
    GetParkElectricData() {
      this.$store
        .dispatch("others/ParkElectricTimeBefore", { park: "wucheng" })
        .then(
          (res) => {
            if (res.data.length == 1) {
              this.data7.dqty = res.data[0].daybeforeqty;
              this.data7.mqty = res.data[0].weekqty;
              this.data7.yqty = res.data[0].yqty;
            } else {
              // this.$message({
              //   message: "暂无数据",
              //   type: "warning",
              // });
            }
          },
          (err) => {
            this.$message.error("数据请求失败");
          }
        );
    },
    //每月水电
    GetParkEleWatDetailData() {
      this.$store.dispatch("others/ParkEleWatDetail", { park: "wucheng" }).then(
        (res) => {
          if (res.data.length > 0) {
            for (var i = 0; i < res.data.length; i++) {
              if (res.data[i].type == "ele") {
                this.echarts8.push(res.data[i].qty);
              } else {
                this.echarts9.push(res.data[i].qty);
              }
            }

            this.rendernowyearproduc1();
          } else {
            // this.$message({
            //   message: "暂无数据",
            //   type: "warning",
            // });
          }
        },
        (err) => {
          this.$message.error("数据请求失败");
        }
      );
    },
    toParkOverview() {
      this.$router.push("/cxjp");
    },
    toParkServe() {
      this.$router.push("/cxjp-wucheng");
    },
    getBodyHeight() {
      const that = this;
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.innerHeigh;
          that.fullHeight = window.fullHeight;
        })();
      };
    },
    renderParkEconomyChart() {
      charts("partEconomyChart", {
        seriesType: "line",
        xAxis: {
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
        },
        grid: { left: "50%", right: "50%", containLable: false },
        series: [
          {
            data: this.echarts1,
          },
        ],
      });
    },
    renderParkEconomyChart1() {
      charts("partEconomyChart1", {
        seriesType: "line",
        xAxis: {
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
        },
        series: [
          {
            data: this.echarts4,
          },
        ],
      });
    },
    renderFinanceProductTop() {
      charts("financeProductTop", {
        seriesType: "bar",
        align: "horizontal",
        yAxisData: this.echarts2,
        data: this.echarts3,
        series: [
          {
            label: {
              show: true,
              position: "right",
            },
          },
        ],
      });
    },
    renderFinanceProductTop1() {
      charts("financeProductTop1", {
        seriesType: "bar",
        align: "horizontal",
        yAxisData: this.echarts5,
        data: this.echarts6,
        series: [
          {
            label: {
              show: true,
              position: "right",
            },
          },
        ],
      });
    },
    countchange() {
      var DynamicNumber = {};
      DynamicNumber.NumberList = {};
      DynamicNumber.show = function (elementId, number) {
        // 1. 已建立过对象直接调用
        var dynaNum = this.NumberList[elementId];
        if (dynaNum) {
          dynaNum.step = 0;
          dynaNum.desNumber = number;
          dynaNum.render();
          return;
        }

        // 2. 创建动态数字绘制对象
        dynaNum = new (function (_elementId) {
          this.elementId = _elementId;
          this.preNumber = 0; // 变化过程值
          this.desNumber = 0; // 目标数值，最终显示值

          this.step = 0; // 变化步长，支持正向反向
          // 绘制过程
          this.render = function () {
            // （1）结束条件
            if (this.preNumber == this.desNumber) {
              this.step = 0;
              return;
            }

            // （2）步长设置（计划 2 秒完成 40*50=2000）
            if (this.step == 0) {
              this.step = Math.round((this.desNumber - this.preNumber) / 40);
              if (this.step == 0)
                this.step = this.desNumber - this.preNumber > 0 ? 1 : -1;
            }

            // （3）走一步
            this.preNumber += this.step;
            if (this.step < 0) {
              if (this.preNumber < this.desNumber)
                this.preNumber = this.desNumber;
            } else {
              if (this.preNumber > this.desNumber)
                this.preNumber = this.desNumber;
            }

            // （4）显示
            document.getElementById(this.elementId).innerHTML = this.preNumber;

            // （5）每秒绘制 20 次（非精确值）
            var _this = this;
            setTimeout(function () {
              _this.render();
            }, 50);
          };
        })(elementId);

        // 3. 登记绑定元素ID
        DynamicNumber.NumberList[elementId] = dynaNum;

        // 4. 调用绘制
        dynaNum.step = 0;
        dynaNum.desNumber = number;
        dynaNum.render();
      };
      this.data2.dqty = ((this.data2.dqty / 10000) * 100) / 100;
      this.data2.mqty = ((this.data2.mqty / 10000) * 100) / 100;
      this.data2.yqty = ((this.data2.yqty / 10000) * 100) / 100;
      this.data1.dqty = ((this.data1.dqty / 10000) * 100) / 100;
      this.data1.mqty = ((this.data1.mqty / 10000) * 100) / 100;
      this.data1.yqty = ((this.data1.yqty / 10000) * 100) / 100;
    },
    rendernowyearproduc() {
      var myChart = echarts.init(document.getElementById("nowyearproduc"));
      let option = {
        tooltip: {
          transitionDuration: 0,
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        xAxis: [
          {
            color: ["#fff"],
            splitLine: { show: false }, //去除网格线
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
            axisTick: {
              alignWithLabel: true,
            },
            axisLabel: {
              textStyle: {
                color: "#fff", //坐标值得具体的颜色
              },
            },
          },
        ],
        yAxis: [
          {
            splitLine: { show: false }, //去除网格线
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#fff",
              },
            },
          },
        ],
        grid: {
          left: 55,
        },
        series: [
          {
            name: "",
            type: "bar",
            barWidth: "60%",
            data: this.echarts7,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#00D9C7",
                  },
                  {
                    offset: 1,
                    color: "#0052FE",
                  },
                ]),
              },
            },
            label: {
              show: true,
              position: "right",
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    rendernowyearproduc1() {
      let myChart = echarts.init(document.getElementById("nowyearproduc1"));
      let option = {
        tooltip: {
          transitionDuration: 0,
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          x: "right",
          data: ["电", "水"],
          textStyle: {
            color: "#9191c2",
            fontSize: 16,
            padding: [0, 40, 0, 5],
          },
          padding: [35, 200, 0, 0],
        },
        xAxis: [
          {
            color: ["#fff"],
            splitLine: { show: false }, //去除网格线
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
            axisTick: {
              alignWithLabel: true,
            },
            axisLabel: {
              textStyle: {
                color: "#fff", //坐标值得具体的颜色
              },
            },
          },
        ],
        yAxis: [
          {
            splitLine: { show: false }, //去除网格线
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#fff",
              },
            },
          },
        ],
        grid: {
          left: 75,
        },
        series: [
          {
            name: "电",
            type: "bar",
            barWidth: "40%",
            data: this.echarts8,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#00D9C7",
                  },
                  {
                    offset: 1,
                    color: "#0052FE",
                  },
                ]),
              },
            },
          },
          {
            name: "水",
            type: "bar",
            barWidth: "40%",
            data: this.echarts9,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#C9CB24",
                  },
                  {
                    offset: 1,
                    color: "#C9CB24",
                  },
                ]),
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    towcpark() {
      this.$router.push("/cxjp-wucheng");
    },
    toparkall() {
      this.$router.push("/cxjpallpro");
    },
    toSecondVer() {
      this.$router.push("/cxjpwcpro");
    },
    strlen(str) {
      var len = 0;
      for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        //单字节加1
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
          len++;
        } else {
          len += 2;
        }
      }
      return len;
    },
  },
  computed: {
    optionSingleHeight() {
      return {
        singleHeight: 180,
        limitMoveNum: 6,
        step: 3,
        waitTime: 5000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "margin:0;");
  },
};
</script>


