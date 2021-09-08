import {
  LiveData,
  stopTimes,
  openRateToday,
  LoomState,
  LoomOnRate,
  LoomOnRateTimeBefore
} from "@/api/loom";
import moment from "moment";

const state = {
  qingyuCode: "39ca",
  longyuCode: "34c8",
  boliangCdoe: "3cd0"
}

const mutations = {}

const actions = {
  LoomState({
              commit
            }, data) {
    return new Promise((resolve, reject) => {
      LoomState(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  LoomOnRate({
               commit
             }, data) {
    return new Promise((resolve, reject) => {
      LoomOnRate(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  LoomOnRateTimeBefore({
                         commit
                       }, data) {
    return new Promise((resolve, reject) => {
      LoomOnRateTimeBefore(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // LoomState({
  //   commit,
  //   state
  // }, data) {
  //   return new Promise((resolve, reject) => {
  //     const {
  //       park
  //     } = data
  //     let result = [{
  //       sum: 0,
  //       on: 0
  //     }]

  //     const liveData1 = LiveData({
  //       language: "cn",
  //       customerCode: state.qingyuCode,
  //       token: "c9f0366bde2add3e65e3fc7add3736c"
  //     })
  //     const liveData2 = LiveData({
  //       language: "cn",
  //       customerCode: state.longyuCode,
  //       token: "c9f0366bde2add3e65e3fc7add3736c"
  //     })
  //     const liveData3 = LiveData({
  //       language: "cn",
  //       customerCode: state.longyuCode,
  //       token: "c9f0366bde2add3e65e3fc7add3736c"
  //     })
  //     switch (park) {
  //       case "wucheng":
  //         Promise.all([liveData1, liveData2]).then(values => {
  //           result[0].sum = values[0].data.data.equCount + values[1].data.data.equCount
  //           result[0].on = values[0].data.data.onlineCount + values[1].data.data.onlineCount
  //           resolve(result)
  //         }).catch(error => {
  //           reject(error)
  //         })
  //         break;
  //       case "dingxin":
  //         liveData3.then(response => {
  //           result[0].sum = response.data.data.equCount
  //           result[0].on = response.data.data.onlineCount
  //           resolve(result)
  //         }, error => {
  //           reject(error)
  //         })
  //         break;
  //       case "all":
  //         Promise.all([liveData1, liveData2, liveData3]).then(values => {
  //           result[0].sum = values[0].data.data.equCount + values[1].data.data.equCount + values[2].data.data.equCount
  //           result[0].on = values[0].data.data.onlineCount + values[1].data.data.onlineCount + values[2].data.data.onlineCount
  //           resolve(result)
  //         }).catch(error => {
  //           reject(error)
  //         })
  //         break;
  //       default:
  //         break;
  //     }

  //   })
  // },
  // LoomOnRate({
  //   commit,
  //   state
  // }, data) {
  //   return new Promise((resolve, reject) => {
  //     const currentMonth = moment().format("YYYY-MM")
  //     const {
  //       park
  //     } = data
  //     let result = [{
  //       day: 0,
  //       month: 0
  //     }]
  //     const stopTimes1 = stopTimes({
  //       language: "cn",
  //       token: "c9f0366bde2add3e65e3fc7add3736c",
  //       companyCode: state.qingyuCode,
  //       startMonth: currentMonth,
  //       endMonth: currentMonth
  //     })
  //     const stopTimes2 = stopTimes({
  //       language: "cn",
  //       token: "c9f0366bde2add3e65e3fc7add3736c",
  //       companyCode: state.longyuCode,
  //       startMonth: currentMonth,
  //       endMonth: currentMonth
  //     })
  //     const stopTimes3 = stopTimes({
  //       language: "cn",
  //       token: "c9f0366bde2add3e65e3fc7add3736c",
  //       companyCode: state.boliangCode,
  //       startMonth: currentMonth,
  //       endMonth: currentMonth
  //     })

  //     const openRateToday1 = openRateToday({
  //       language: "cn",
  //       token: "c9f0366bde2add3e65e3fc7add3736c",
  //       values: 1,
  //       companyCode: state.qingyuCode,
  //       modelCode: "EMKUVGS",
  //       point: "EMKUVGS105"
  //     })
  //     const openRateToday2 = openRateToday({
  //       language: "cn",
  //       token: "c9f0366bde2add3e65e3fc7add3736c",
  //       values: 1,
  //       companyCode: state.longyuCode,
  //       modelCode: "EMKUVGS",
  //       point: "EMKUVGS105"
  //     })
  //     const openRateToday3 = openRateToday({
  //       language: "cn",
  //       token: "c9f0366bde2add3e65e3fc7add3736c",
  //       values: 1,
  //       companyCode: state.boliangCode,
  //       modelCode: "EMKUVGS",
  //       point: "EMKUVGS105"
  //     })

  //     switch (park) {
  //       case "wucheng":
  //         Promise.all([stopTimes1, stopTimes2, openRateToday1, openRateToday2]).then(values => {
  //
  //           // result[0].day = values[0].
  //           // resolve(result)
  //         }).catch(error => {
  //           reject(error)
  //         })
  //         break;
  //       case "dingxin":
  //         liveData3.then(response => {
  //           result[0].sum = response.data.data.equCount
  //           result[0].on = response.data.data.onlineCount
  //           resolve(result)
  //         }, error => {
  //           reject(error)
  //         })
  //         break;
  //       case "all":
  //         Promise.all([liveData1, liveData2, liveData3]).then(values => {
  //           result[0].sum = values[0].data.data.equCount + values[1].data.data.equCount + values[2].data.data.equCount
  //           result[0].on = values[0].data.data.onlineCount + values[1].data.data.onlineCount + values[2].data.data.onlineCount
  //           resolve(result)
  //         }).catch(error => {
  //           reject(error)
  //         })
  //         break;
  //       default:
  //         break;
  //     }
  //   })
  // },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
