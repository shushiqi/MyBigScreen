import appConfig from '../../config/base'

function debounce(fn, delay) {
  // let timeout = null;
  // return function () {
  //     if(timeout){
  //         clearTimeout(timeout);
  //     }
  //     timeout = setTimeout(() => {
  //         fn.apply(this, arguments);
  //     },delay);
  // }
  // 维护一个 timer
  let timer = null;

  return function () {
    // 获取函数的作用域和变量
    let context = this;
    let args = arguments;
    if (context == undefined || args == undefined) {
      return
    }

    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay)
  }
}


export function pageResize(callback) {
  let init = () => {

    let _el = document.getElementById('app');

    let hScale = window.innerHeight / appConfig.screen.height;
    let wScale = window.innerWidth / appConfig.screen.width;
    let pageH = window.innerHeight;
    let pageW = window.innerWidth;

    let isWider = (window.innerWidth / window.innerHeight) >= (appConfig.screen.width / appConfig.screen.height);
    let isStdScreen = (window.innerWidth / window.innerHeight) == (appConfig.screen.width / appConfig.screen.height);
    // if (isWider) {
    //   _el.style.height = window.innerHeight + 'px'; // '100%';
    // // "#app"宽度 = 窗口 * 默认宽度 / 默认高度  将页面宽度修改为1920/1080相同的比例
    // _el.style.width = pageH * appConfig.screen.width / appConfig.screen.height + 'px';
    // _el.style.top = '0px';
    // "#app"距左边框距离 = （窗口宽度 - 窗口高度 * 默认宽度 / 默认高度）
    // _el.style.left = (window.innerWidth - pageH * appConfig.screen.width / appConfig.screen.height) * 0.5 + 'px';

    // } else {
    //   _el.style.width = window.innerWidth + 'px'; // '100%';
    //   _el.style.height = pageW * appConfig.screen.height / appConfig.screen.width + 'px';
    //   _el.style.top = 0.5 * (window.innerHeight - pageW * appConfig.screen.height / appConfig.screen.width) + 'px';
    //   _el.style.left = '0px';
    // }
    // document.documentElement.style.fontSize = (_el.clientWidth / appConfig.screen.scale) + 'px';
    //

    // if (isStdScreen) {
    //   if (wScale > hScale) {
    //
    //     document.documentElement.style.fontSize = (wScale * 16) + "px"
    //   } else {
    //
    //     document.documentElement.style.fontSize = (hScale * 16) + "px"
    //   }
    // } else {
    //

    document.documentElement.style.fontSize = (hScale * 16).toFixed(0) + "px"
  }
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

  window.addEventListener(resizeEvt, debounce(init, 500), false);
  document.documentElement.addEventListener('DOMContentLoaded', init, false);
  init()
}
