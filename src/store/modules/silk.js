import {
  SilkProduction,
  SilkExpend,
  SilkExpendDetail,
  SilkExpendVarieties,
  SilkProductionTimeBefore,
  SilkExpendTimeBefore
} from "@/api/silk";

const state = {}

const mutations = {}

const actions = {
  SilkProduction({
                   commit
                 }, data) {
    return new Promise((resolve, reject) => {
      SilkProduction(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  SilkExpend({
               commit
             }, data) {
    return new Promise((resolve, reject) => {
      SilkExpend(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  SilkExpendDetail({
                     commit
                   }, data) {
    return new Promise((resolve, reject) => {
      SilkExpendDetail(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  SilkExpendVarieties({
                        commit
                      }, data) {
    return new Promise((resolve, reject) => {
      SilkExpendVarieties(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  SilkProductionTimeBefore({
                             commit
                           }, data) {
    return new Promise((resolve, reject) => {
      SilkProductionTimeBefore(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  SilkExpendTimeBefore({
                         commit
                       }, data) {
    return new Promise((resolve, reject) => {
      SilkExpendTimeBefore(data).then(response => {
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
