import 'jquery';
// import api from '@/api';
import http from '@/http';
import {isLogin, getToken} from '@/utils'

export default {
  data() {
    return {
      defaultHeight: {
        height: ""
      },
      asideHeight: {
        height: ""
      },
      menu: [],
      activeName: '0',
      avatar: '',
      roleName: '',
      roleId: '',
      uname: '',
      userId: '',
      isCollapse: false,
      editableTabsValue2: '',
      editableTabs2: []
    };
  },
  // watch: {
  //   // 监听浏览器直接输入路由，将此路由添加到tabnavBox
  //   '$route.path': function (val) {
  //     this.selectmenu(val)
  //   }
  // },
  methods: {
    //定义方法，获取高度减去头尾
    getHeight() {
      this.defaultHeight.height = window.innerHeight - 50 + "px";
      this.asideHeight.height = window.innerHeight;
    },
    selectmenu(key) {
      // 获取当前权限路由表
      let router = this.$store.getters.routers
      let name = ''
      // 查找路由的name属性
      let navTitle = function (path, routerARR) {
        for (let i = 0; i < routerARR.length; i++) {
          if (routerARR[i].children.length > 0 || routerARR[i].path === path) {
            if (routerARR[i].path === path && routerARR[i].children.length < 1) {
              name = routerARR[i].name
              break
            }
            // 递归查找
            navTitle(path, routerARR[i].children)
          }
        }
        return name
      }
      // tabNavBox添加数据
      this.$store.dispatch('addTab', {
        title: navTitle(key, router),
        path: key
      })
    },
    fullScreen() {
      if (this.isfullScreen) {
        var docElm = document.documentElement
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen()
        } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen()
        } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen()
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen()
        }
        this.isfullScreen = false
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
        this.isfullScreen = true
      }
    },
    collapse() {
      this.$store.dispatch('collapse')
    },
    handleCommand(command) {
      if (command === 'logout') {
        localStorage.removeItem('Token')
        location.reload()

      }
    },
    getmeanu() {
      http.fetchPost(api.indexmeanu + "?token=" + getToken(), {token: getToken(), roleId: "R0002"}).then((data) => {

        this.menu = data.data.data.menuList
        this.roleName = data.data.data.role.roleName
      })
    },
    getusermsg() {
      http.fetchPost(api.queryUserById + "?token=" + getToken(), {
        token: getToken(),
        userId: "1d915eb8cc6041cd8a065c92dc3600a9"
      }).then((data) => {

        this.uname = data.data.uname
      })
    },
    toggleSideBar() {
      this.isCollapse = !this.isCollapse
    },
    logout: function () {
      this.$confirm('确认退出?', '提示', {})
        .then(() => {
          sessionStorage.removeItem('Token');
          this.$router.push('/login');
        })
        .catch(() => {
        });
    },
    addTab(targetName) {
      let newTabName = ++this.tabIndex + '';
      this.editableTabs2.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      });
      this.editableTabsValue2 = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs2;
      let activeName = this.editableTabsValue2;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue2 = activeName;
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
    },
    handleOpen(key, keyPath) {

    },
    handleClose(key, keyPath) {

    },
    handleSelect(key, keyPath) {

    },
  },
  created() {
    //页面创建时执行一次getHeight进行赋值，顺道绑定resize事件
    window.addEventListener("resize", this.getHeight);
    this.getHeight();
    this.getmeanu();
  }
}
