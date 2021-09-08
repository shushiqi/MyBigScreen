import request from "@/http"

// 庆裕报表
export function qingyuRetailReport(data) {
  return request("get",
    "/qingyuapi/api/Greige/RetailInvestorsSummery",
    data
  )
}

// 龙宇报表
export function longyuRetailReport(data) {
  return request(
    "get",
    "/longyuapi/api/Greige/RetailInvestorsSummery",
    data
  )
}

// 伯良报表
export function boliangRetailReport(data) {
  return request(
    "get",
    "/boliangapi/api/Greige/RetailInvestorsSummery",
    data
  )
}
