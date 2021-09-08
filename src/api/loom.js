import request from "@/http"

// 织机运转个数
export function LoomState(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/LoomState",
    data
  )
}

// 当日开机率
export function LoomOnRate(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/LoomOnRate",
    data
  )
}


// 当日开机率2
export function LoomOnRateTimeBefore(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/LoomOnRateTimeBefore",
    data
  )
}


// 实时织机总数，运行机台数
// export function LiveData(data) {
//   return request(
//     "get",
//     "http://api.yzk.yzkcloud.com:8080/webapi/zhixun/com/equ/data",
//     data
//   )
// }

// // 当月织机开机率
// export function stopTimes(data) {
//   return request(
//     "get",
//     "http://api.yzk.yzkcloud.com:8080/webapi/zhixun/statistic/company/stopTimes",
//     data
//   )
// }
// // 当日织机开机率
// export function openRateToday(data) {
//   return request(
//     "get",
//     "http://api.yzk.yzkcloud.com:8080/webapi/zhixun/statistic/company/openRateToday",
//     data
//   )
// }
