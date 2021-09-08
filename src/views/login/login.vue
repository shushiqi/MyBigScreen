<template>
  <div>
    <div class="body">
      <div class="header">
        <div class="header-content">
          <div class="logo">
            <!-- <img src="../images/index/LOGO.png" > -->
          </div>
          <div class="mune">
            <ul>
              <li style="padding-left: 1px;"><a id="index" href="https://enter-iot.cn/EnterIOT/Enter-Iot/index.html">首页</a></li>
              <li><a id="ShoppingMall" href="https://enter-iot.cn/EnterIOT/Enter-Iot/ShoppingMall.html">网上商城</a></li>
              <li style="padding-left: 1.5px;"><a id="saleMall" href="https://enter-iot.cn/EnterIOT/Enter-Iot/saleMall.html">采购平台</a></li>
              <li><a id="locale">园区管理</a></li>
              <li><a id="equipment" v-on:mouseover="changeActive($event)">工业软件</a>
                <div class="list"
                     style="display: none; background-color: rgba(45, 60, 83, 1);width: 110px;position: absolute;top: 103px;padding: 5px;z-index: 99;height: 70px;">
                  <ul
                    style="height: 60px; list-style-type:none;font-size: 15px;font-weight: 200;padding: 0;text-align: left;color: #fff;margin-left: 10px;line-height: 30px;">
                    <li style="line-height: 30px;font-size: 15px;font-weight: 100;"><a href="https://enter-iot.cn/EnterIOT/Enter-Iot/newindex.html">行业解决方案</a></li>
                    <li style="line-height: 30px;font-size: 15px;font-weight: 100;"><a href="https://enter-iot.cn/EnterIOT/Enter-Iot/equipment.html">设备运维</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="login">
            <ul>
              <li style="width: 41px;">登录</li>
              <li>注册</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="banner">
        <div class="banner-content">
          <div class="banner-left">
            <img src="@/assets/images/login/img_zy.png">
          </div>
          <div class="banner-right">
            <div class="login-box">
              <h1>长兴夹浦纺织小微企业园</h1>
              <form action="" method="">
                <input class="massage" type="text" v-model="username" name="" id="" value="" placeholder="登录名\邮箱或手机号"/>
                <input class="massage" type="password" v-model="password" name="" id="" value="" placeholder="请输入登录密码"/>
                <div class="tie">
                  <input type="radio" name="" id="radio" value=""/><span class="rember">记住密码</span><a>忘记密码？</a>
                </div>

                <input type="button" name="" id="login-btn" value="登录" @click="tologin"/>
                <p class="bottom_text"><a>还没有账号？马上注册</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="footer-content">
          <div class="about">
            <div class="about-title">
              关于我们
            </div>
            <ul>
              <li>首页</li>
              <li>设备运维云平台</li>
              <li>注册</li>
            </ul>
          </div>
          <div class="call">
            <div class="call-title">
              联系我们
            </div>
            <ul>
              <li>地址：浙江省杭州市滨江区火炬大道65号</li>
              <li>电话：（86）0571-28031937</li>
              <li>邮箱: zwG@chinakaiyuan. com</li>
              <li>网址: ww. chinakaiyuan. com</li>
            </ul>
          </div>
          <div class="pic">
            <div class="title">
              公众号
            </div>
            <div class="code">
              <!-- <img src="@/assets/images/login/u246.svg"  style="width: 150px;display: inline-block;"> -->
              <img src="@/assets/images/login/u247.jpg" style="width: 150px;display: inline-block;">
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          版权所有©2019&nbsp;&nbsp;&nbsp; 杭州开源电脑技术有限公司&nbsp;&nbsp;&nbsp;
          <span>
                        <img src="@/assets/images/login/u241.png"></img>
                    </span> 备案序号：浙ICP备10212407号-4
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import xiaoweiyuanHeader from "@/components/XiaoweiyuanHeader";
  import vueSeamlessScroll from "vue-seamless-scroll";
  import {charts} from "@/utils/index";
  import echarts from "echarts";
  import api from "@/api";
  import http from "@/http";
  import "jquery";

  export default {
    name: "login",

    data() {
      return {
        username: "",
        password: "",
        fullHeight: document.documentElement.innerHeigh,
      }
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
    methods: {
		
      tologin() {
		  console.log(localStorage.getItem("username"))
		  console.log(this.username)
		  if(this.username ==""){
			  if(localStorage.getItem("username")!= "null" && localStorage.getItem("username")!=""){
			  this.username = localStorage.getItem("username");
			  this.password = localStorage.getItem("pwd");
			  console.log(121212)
		  }
		  }
		  
        console.log(this.username)
		
        this.$store.dispatch("others/CheckUserLogin", {usr: this.username, pwd: this.password}).then(
          (res) => {

            if (res.data == 1) {
              this.$message({
                message: "登陆成功",
                type: "success",
				
              });
				localStorage.setItem("username",this.username);
			  	localStorage.setItem("pwd",this.password);
              this.$router.push("/cxjp");
            } else if (res.data == -1) {
              this.$message({
                message: "用户不存在",
                type: "warning",
              });
            } else if (res.data == -2) {
              this.$message({
                message: "密码错误",
                type: "warning",
              });
            }
          },
          (err) => {
            this.$message.error("数据请求失败");
          }
        );
      },
	  changeActive($event){
			$event.currentTarget.className="active";
		},
    },
    beforeCreate() {
      document.querySelector('body').setAttribute('style', 'margin:0;')
	  
    },
	mounted(){
		console.log(localStorage.getItem("username")==null)
		if(localStorage.getItem("username")!= null && localStorage.getItem("username")!=""){
			this.tologin();
		}
		
	}
  }
</script>
<style lang="less" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
  }

  ul, li, ol {
    padding: 0;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  .header {
    height: 100px;
    background-color: rgba(45, 60, 83, 1);
    min-width: 1366px;
  }

  .header .header-content {
    width: 70%;
    margin: 0 auto;
    position: relative;
    width: 1366px;
  }

  .logo {
    display: inline-block;
    height: 54px;
    width: 126px;
    padding-top: 16px;
    padding-left: 42px;
    position: absolute;
    left: -18px;
    top: 16;
  }

  .mune {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 223px;
  }

  .mune ul {
    display: inline-block;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .mune ul li {
    width: 95px;
    display: inline-block;
    text-align: center;
    line-height: 102px;
    font-size: 18px;
  }

  .mune ul li a {
    font-weight: 600;
    text-decoration: none;
    color: #fff;
  }

  .login {

    position: absolute;
    right: 0;
    display: inline-block;
    float: right;
    color: #fff;
  }

  .login ul {
    margin: 0;
  }

  .login ul li {
    display: inline-block;
    width: 95px;
    line-height: 104px;
    margin-right: 2px;
  }

  .banner {
    width: 100%;
    height: 100% px;
    background-color: #fff;
    min-width: 1366px;
    margin-top: 80px;
  }

  .banner-content {
    width: 70%;
    margin: 0 auto;
  }

  .banner-left {
    display: inline-block;
    width: 50%;
    height: 100%;
  }

  .banner-left img {
    width: 100%;
    height: 100%;
  }

  .banner-right {
    display: inline-block;
    width: 40%;
    float: right;
  }

  .banner-right h1 {
    font-size: 24px;
    color: #4E87DF;
    font-weight: 500;
    width: 270px;
    text-align: center;
  }

  .login-box form {
    margin-top: 50px;
  }

  .banner-right .login-box input {
    border: none;
    display: block;
    background-color: #fff;
  }

  .banner-right .login-box {
    width: 100%;
  }

  .banner-right .login-box .massage {
    height: 50px;
    width: 250px;
    border-bottom: 0.0625rem solid #BFC2C6;
    outline: none;
  }

  #login-btn {
    line-height: 30px;
    color: #fff;
    background-color: #4E87DF;
    width: 200px;
    border-radius: 25px;
    margin-top: 70px;
    margin-left: 25px;
    outline: none;
  }

  .bottom_text {
    width: 15.625rem;
    font-size: 13px;
    color: #4E87DF;
    text-align: center;
  }

  .footer {
    text-align: justify;
    height: 306px;
    background-color: rgba(45, 60, 83, 1);
    color: #fff;
    overflow: hidden;
    position: relative;
    min-width: 1366px;
  }

  .footer .footer-content {
    width: 80%;
    margin: 0 auto;
  }

  .about {
    margin-top: 50px;
    display: inline-block;
    width: 20%;
    position: absolute;
    top: 0;
  }

  .about ul li {
    line-height: 30px;
  }

  .call {
    margin-top: 50px;
    margin-left: 10px;
    display: inline-block;
    width: 30%;
    position: absolute;
    left: 30%;
  }

  .call ul li {
    line-height: 30px;
  }

  .pic {
    margin-top: 50px;
    display: inline-block;
    width: 40%;
    position: absolute;
    left: 60%;
  }

  .pic .title {
    display: inline-block;
    width: 100px;
  }

  .pic .code {
    display: inline-block;
    width: 320px;
  }

  .footer-bottom {
    width: 100%;
    line-height: 73px;
    background-color: #555555;
    position: absolute;
    bottom: 0;
    text-align: center;
  }

  #index:hover {
    color: rgb(166, 197, 240);
  }

  #ShoppingMall:hover {
    color: rgb(166, 197, 240);
  }

  #saleMall:hover {
    color: rgb(166, 197, 240);
  }

  #locale:hover {
    color: rgb(166, 197, 240);
  }

  #equipment:hover {
    color: rgb(166, 197, 240);
  }

  .list {
    width: 100px;
  }

  .list ul li {
    text-align: left;
  }

  .btn {
    width: 3.125rem;
    line-height: 25px;
    border-radius: 0.3125rem;
    background-color: #b2cefe;
    margin-left: 30%;
  }

  .tie {
    width: 250px;
    font-size: 13px;
    margin-top: 20px;
  }

  .tie #radio {
    display: inline-block;
    float: left;
    margin-right: 10px;
  }

  .tie .rember {
    font-size: 13px;
    color: #BFC2C6;
    float: left;
  }

  .tie a {
    float: right;
    font-size: 13px;
    color: #4E87DF;
  }
</style>
