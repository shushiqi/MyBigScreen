import {
  SewageIndex,
  FireAlarm,
  EquipmentList,
  CarManInPark,
  ParkWater,
  ParkElectric,
  ParkEleWatDetail,
  EleWatInstrumentSum,
  CheckUserLogin,
  ParkWaterTimeBefore,
  ParkElectricTimeBefore
} from "@/api/others";
import store from "..";

const state = {
  isLogin: false
}

const mutations = {
  login(state) {
    state.isLogin = true
  },
  logout(state) {
    state.isLogin = false
  }
}

const actions = {
  SewageIndex({
                commit
              },
              data) {
    return new Promise((resolve, reject) => {
      SewageIndex(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  FireAlarm({
              commit
            }, data) {
    return new Promise((resolve, reject) => {
      FireAlarm(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  EquipmentList({
                  commit
                },
                data) {
    return new Promise((resolve, reject) => {
      EquipmentList(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  CarManInPark({
                 commit
               }, data) {
    return new Promise((resolve, reject) => {
      CarManInPark(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  ParkWater({
              commit
            },
            data) {
    return new Promise((resolve, reject) => {
      ParkWater(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  ParkElectric({
                 commit
               }, data) {
    return new Promise((resolve, reject) => {
      ParkElectric(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  ParkEleWatDetail({
                     commit
                   },
                   data) {
    return new Promise((resolve, reject) => {
      ParkEleWatDetail(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  EleWatInstrumentSum({
                        commit
                      }, data) {
    return new Promise((resolve, reject) => {
      EleWatInstrumentSum(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  CheckUserLogin({
                   commit
                 }, data) {
    return new Promise((resolve, reject) => {
      CheckUserLogin(data).then(response => {
        if (response.data == 1) {
          commit("login")
        }
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  ParkWaterTimeBefore({
                        commit
                      }, data) {
    return new Promise((resolve, reject) => {
      ParkWaterTimeBefore(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  ParkElectricTimeBefore({
                           commit
                         }, data) {
    return new Promise((resolve, reject) => {
      ParkElectricTimeBefore(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
