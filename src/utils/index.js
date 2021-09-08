import charts from "./charts"

let isLogin = () => {
  return localStorage.getItem('Token') ? true : false
}

let getToken = () => {
  if (isLogin()) {
    return localStorage.getItem('Token')
  } else {
    return false
  }
}

function setTimeRefresh(func) {
  // let
}

export {
  isLogin,
  getToken,
  charts
}
