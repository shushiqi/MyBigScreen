import request from "@/http"

// 坯布产出统计
export function GreyProduction(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/GreyProduction",
    data
  )
}

// 坯布销售统计
export function GreySale(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/GreySale",
    data
  )
}

// 坯布库存总数量和总卷数，总品种
export function GreySummary(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/GreySummary",
    data
  )
}

// 坯布每月总产出统计
export function GreyProductionDetail(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/GreyProductionDetail",
    data
  )
}

// 坯布每月总销售统计
export function GreySaleDetail(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/GreySaleDetail",
    data
  )
}

// 坯布本年销售品种排名
export function GreySaleVarieties(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/GreySaleVarieties",
    data
  )
}

// 各个企业散户坯布产出信息
export function IndividualGreyPro(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/IndividualGreyPro",
    data
  )
}

// 当前坯布库存统计
export function GreyVrtIty(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/GreyVrtIty",
    data
  )
}

// 坯布产出统计2
export function GreyProductionTimeBefore(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/GreyProductionTimeBefore",
    data
  )
}

// 坯布销售统计2
export function GreySaleTimeBefore(data) {
  return request(
    "get",
    "/KYMicroParkWebApi/api/ParkSituation/GreySaleTimeBefore",
    data
  )
}

