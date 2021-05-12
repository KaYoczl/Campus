// app.js
// let userInfo = {
//   username: '陈泽隆',
//   email: ''
// }
let name = '杨超越'
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    name: '吕小布'
  },
  // 获取数据
  // getUserInfo () {
  //   return userInfo
  // }, 
  // 更新用户信息
  // updateUserInfo (obj) {
  //   let keys = Object.keys(obj);
  //   for (let i=0; i<keys.length;i++) {
  //     let key = keys[i];
  //     userInfo[key] = obj[key]
  //   }
  // },

  // 获取数据
  getName () {
    return name
  },
  // 更新用户信息
  updateName (str) {
    name = str
  }
})
