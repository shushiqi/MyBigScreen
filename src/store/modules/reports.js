import {
  qingyuRetailReport,
  longyuRetailReport,
  boliangRetailReport
} from "@/api/reports";

const state = {}

const mutations = {}

const actions = {
  qingyuRetailReport({
                       commit
                     }, data) {
    return new Promise((resolve, reject) => {
      qingyuRetailReport(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  longyuRetailReport({
                       commit
                     }, data) {
    return new Promise((resolve, reject) => {
      longyuRetailReport(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  boliangRetailReport({
                        commit
                      }, data) {
    return new Promise((resolve, reject) => {
      boliangRetailReport(data).then(response => {
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
