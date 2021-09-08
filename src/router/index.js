import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/index'
import CXJP from "@/views/changxingjiapu/overview/changxingjiapu-overview.vue"

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: '',
    redirect: "/index",
    // component: Index
  },

  {
    path: '/index',
    name: 'index',
    component(resolve) {
      require(['@/views/index/index.vue'], () => {
        resolve(require('@/views/index/index.vue'))
      })
    },
    // component: Index,

  },
  {
    path: '/login',
    name: 'login',
    component(resolve) {
      require(['@/views/login/login.vue'], () => {
        resolve(require('@/views/login/login.vue'))
      })
    },
    // component: Index,

  },
  {
    path: '/cxjp',
    name: 'CXJP',
    component(resolve) {
      require(['@/views/changxingjiapu/overview/changxingjiapu-overview.vue'], () => {
        resolve(require('@/views/changxingjiapu/overview/changxingjiapu-overview.vue'))
      })
    },
    // component: resolve=>(require(["@/views/changxingjiapu/overview/changxingjiapu-overview.vue"],resolve))
  },
  {
    path: '/cxjp-wucheng',
    name: 'cxjp-wucheng',
    component(resolve) {
      require(['@/views/changxingjiapu/overview/changxingjiapu-overview-wucheng.vue'], () => {
        resolve(require('@/views/changxingjiapu/overview/changxingjiapu-overview-wucheng.vue'))
      })
    }
  },
  {
    path: '/cxjp-dingxin',
    name: 'cxjp-dingxin',
    component(resolve) {
      require(['@/views/changxingjiapu/overview/changxingjiapu-overview-dingxin.vue'], () => {
        resolve(require('@/views/changxingjiapu/overview/changxingjiapu-overview-dingxin.vue'))
      })
    }
  },
  {
    path: '/cxjpwcpro',
    name: 'cxjpwcpro',
    component(resolve) {
      require(['@/views/changxingjiapu/overview/changxingjiapu-wuchengproduction.vue'], () => {
        resolve(require('@/views/changxingjiapu/overview/changxingjiapu-wuchengproduction.vue'))
      })
    }
  },
  {
    path: '/cxjpwcpro-2',
    name: 'cxjpwcpro-2',
    component(resolve) {
      require(['@/views/changxingjiapu/overview/changxingjiapu-wuchengproduction-ver2.vue'], () => {
        resolve(require('@/views/changxingjiapu/overview/changxingjiapu-wuchengproduction-ver2.vue'))
      })
    }
  },
  {
    path: '/cxjpdxpro',
    name: 'cxjpdxpro',
    component(resolve) {
      require(['@/views/changxingjiapu/overview/changxingjiapu-dingxinproduction.vue'], () => {
        resolve(require('@/views/changxingjiapu/overview/changxingjiapu-dingxinproduction.vue'))
      })
    }
  },
  {
    path: '/cxjpdxpro-2',
    name: 'cxjpdxpro-2',
    component(resolve) {
      require(['@/views/changxingjiapu/overview/changxingjiapu-dingxinproduction-ver2.vue'], () => {
        resolve(require('@/views/changxingjiapu/overview/changxingjiapu-dingxinproduction-ver2.vue'))
      })
    }
  },
  {
    path: '/cxjpallpro',
    name: 'cxjpallpro',
    component(resolve) {
      require(['@/views/changxingjiapu/overview/changxingjiapu-allproduction.vue'], () => {
        resolve(require('@/views/changxingjiapu/overview/changxingjiapu-allproduction.vue'))
      })
    }
  }, {
    path: '/test/:id',
    name: 'test',
    component(resolve) {
      require(['@/views/changxingjiapu/overview/test.vue'], () => {
        resolve(require('@/views/changxingjiapu/overview/test.vue'))
      })
    }
  },

  {
    path: '/cxjpallpro-2',
    name: 'cxjpallpro2-2',
    component(resolve) {
      require(['@/views/changxingjiapu/overview/changxingjiapu-allproduction-ver2.vue'], () => {
        resolve(require('@/views/changxingjiapu/overview/changxingjiapu-allproduction-ver2.vue'))
      })
    }
  },
  {
    path: '/cxjpxiaoweiyuan',
    redirect: "/cxjpxiaoweiyuan/PropertyServe",
    name: 'cxjpxiaoweiyuan',
    component(resolve) {
      require(['@/views/changxingjiapu/serves/index.vue'], () => {
        resolve(require('@/views/changxingjiapu/serves/index.vue'))
      })
    },
    children: [{
      path: 'PolicyServe',
      name: 'PolicyServe',
      component(resolve) {
        require(['@/views/changxingjiapu/serves/policy-serve.vue'], () => {
          resolve(require('@/views/changxingjiapu/serves/policy-serve.vue'))
        })
      }
    },
      {
        path: 'FinanceServe',
        name: 'FinanceServe',
        component(resolve) {
          require(['@/views/changxingjiapu/serves/finance-serve.vue'], () => {
            resolve(require('@/views/changxingjiapu/serves/finance-serve.vue'))
          })
        }
      },
      {
        path: 'PublicServe',
        name: 'PublicServe',
        component(resolve) {
          require(['@/views/changxingjiapu/serves/public-serve.vue'], () => {
            resolve(require('@/views/changxingjiapu/serves/public-serve.vue'))
          })
        }
      },
      {
        path: 'PropertyServe',
        name: 'PropertyServe',
        component(resolve) {
          require(['@/views/changxingjiapu/serves/property-serve.vue'], () => {
            resolve(require('@/views/changxingjiapu/serves/property-serve.vue'))
          })
        }
      },

    ]
  },
  {
    path: '/cxjpxiaoweiyuan-wucheng',
    name: 'cxjpxiaoweiyuan-wucheng',
    component(resolve) {
      require(['@/views/changxingjiapu/serves-wucheng/index.vue'], () => {
        resolve(require('@/views/changxingjiapu/serves-wucheng/index.vue'))
      })
    }
  },
  {
    path: '/cxjpxiaoweiyuan-dingxin',
    name: 'cxjpxiaoweiyuan-dingxin',
    component(resolve) {
      require(['@/views/changxingjiapu/serves-dingxin/index.vue'], () => {
        resolve(require('@/views/changxingjiapu/serves-dingxin/index.vue'))
      })
    }
  },
  {
    path: '/Overview/:branch',
    name: 'Overview',
    component(resolve) {
      require(['@/views/changxingjiapu/overview/index.vue'], () => {
        resolve(require('@/views/changxingjiapu/overview/index.vue'))
      })
    }
  },
  {
    path: '/RetailReport/:branch',
    name: 'RetailReport',
    component(resolve) {
      require(['@/views/changxingjiapu/reports/retail.vue'], () => {
        resolve(require('@/views/changxingjiapu/reports/retail.vue'))
      })
    }
  },
  {
    path: '/LoomDistribution/:branch',
    name: 'LoomDistribution',
    component(resolve) {
      require(['@/views/changxingjiapu/park/loom-distribution.vue'], () => {
        resolve(require('@/views/changxingjiapu/park/loom-distribution.vue'))
      })
    }
  },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to,from,text)=>{
//      if()
// })

export default router
