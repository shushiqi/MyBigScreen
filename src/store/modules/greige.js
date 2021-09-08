import {
  GreyProduction,
  GreySale,
  GreySummary,
  GreyProductionDetail,
  GreySaleDetail,
  GreySaleVarieties,
  IndividualGreyPro,
  GreyVrtIty,
  GreyProductionTimeBefore,
  GreySaleTimeBefore
} from "@/api/greige";

const state = {}

const mutations = {}

const actions = {
  GreyProduction({
                   commit
                 },
                 data) {
    return new Promise((resolve, reject) => {
      GreyProduction(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  GreySale({
             commit
           }, data) {
    return new Promise((resolve, reject) => {
      GreySale(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  GreySummary({
                commit
              },
              data) {
    return new Promise((resolve, reject) => {
      GreySummary(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  GreyProductionDetail({
                         commit
                       }, data) {
    return new Promise((resolve, reject) => {
      GreyProductionDetail(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  GreySaleDetail({
                   commit
                 },
                 data) {
    return new Promise((resolve, reject) => {
      GreySaleDetail(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  GreySaleVarieties({
                      commit
                    }, data) {
    return new Promise((resolve, reject) => {
      GreySaleVarieties(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  IndividualGreyPro({
                      commit
                    },
                    data) {
    return new Promise((resolve, reject) => {
      IndividualGreyPro(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  GreyVrtIty({
               commit
             }, data) {
    return new Promise((resolve, reject) => {
      GreyVrtIty(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  GreyProductionTimeBefore({
                             commit
                           }, data) {
    return new Promise((resolve, reject) => {
      GreyProductionTimeBefore(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  GreySaleTimeBefore({
                       commit
                     }, data) {
    return new Promise((resolve, reject) => {
      GreySaleTimeBefore(data).then(response => {
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
