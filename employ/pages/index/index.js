// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  // 事件处理函数
  toNewMessage: function(){
    wx.navigateTo({
      url: '../newmessage/newmessage',
    })
  },
  toManageMessage: function(){
    wx.navigateTo({
      url: '../managemessage/managemessage',
    })
  },
  toNewjob: function(){
    wx.navigateTo({
      url: '../newjob/newjob',
    })
  },
  toManageJob: function(){
    wx.navigateTo({
      url: '../managejob/managejob',
    })
  },
  toCheckcom: function(){
    wx.navigateTo({
      url: '../checkcom/checkcom',
    })
  },
  toQuestionList: function(){
    wx.navigateTo({
      url: '../questionList/questionList',
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  // getUserProfile(e) {
  //   // 只能使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  //   wx.getUserProfile({
  //     desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  //     success: (res) => {
  //       console.log(res)
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   })
  // },
})
