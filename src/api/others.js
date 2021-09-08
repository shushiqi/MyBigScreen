import request from "@/http"

// 环境指数
export function SewageIndex(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/SewageIndex",
    data
  )
}

// 预警
export function FireAlarm(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/FireAlarm",
    data
  )
}

// 消防设备
export function EquipmentList(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/EquipmentList",
    data
  )
}

// 人、车流量
export function CarManInPark(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/CarManInPark",
    data
  )
}

// 园区当日、当月、当年水量统计
export function ParkWater(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/ParkWater",
    data
  )
}

// 园区当日、当月、当年电量统计
export function ParkElectric(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/ParkElectric",
    data
  )
}

// 水电每月消耗统计
export function ParkEleWatDetail(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/ParkEleWatDetail",
    data
  )
}

// 水电仪表个数
export function EleWatInstrumentSum(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/EleWatInstrumentSum",
    data
  )
}

// 登录
export function CheckUserLogin(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/Weave/CheckUserLogin",
    data
  )
}

// 园区当日、当月、当年水量统计2
export function ParkWaterTimeBefore(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/ParkWaterTimeBefore",
    data
  )
}

// 园区当日、当月、当年电量统计   2
export function ParkElectricTimeBefore(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/ParkElectricTimeBefore",
    data
  )
}