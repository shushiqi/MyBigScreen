import request from "@/http"

// 原丝生产统计
export function SilkProduction(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/SilkProduction",
    data
  )
}


// 原丝耗用统计
export function SilkExpend(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/SilkExpend",
    data
  )
}

// 原丝每月耗用统计
export function SilkExpendDetail(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/SilkExpendDetail",
    data
  )
}

// 原丝本年耗用品种排名
export function SilkExpendVarieties(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/SilkExpendVarieties",
    data
  )
}


// 原丝生产统计2
export function SilkProductionTimeBefore(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/SilkProductionTimeBefore",
    data
  )
}

// 原丝耗用统计2
export function SilkExpendTimeBefore(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/SilkExpendTimeBefore",
    data
  )
}
