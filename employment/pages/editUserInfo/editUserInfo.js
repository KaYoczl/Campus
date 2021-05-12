// pages/editUserInfo/editUserInfo.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    profile: {
      realname: '',
      number: '',
      school: '',
      word: ''
    }
  },
  realNameInput:function(e){
    console.log(e.detail.value)
    this.data.profile.realname = e.detail.value
  },
  numberInput:function(e){
    console.log(e.detail.value)
    this.data.profile.number = e.detail.value
  },
  schoolInput:function(e){
    console.log(e.detail.value)
    this.data.profile.school = e.detail.value
  },
  wordInput:function(e){
    console.log(e.detail.value)
    this.data.profile.word = e.detail.value
  },
  sureTap: function(){
    wx.request({
      url: 'http://localhost:8000/api/user/update',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: {
        'username': app.getName(),
        'realname': this.data.profile.realname,
        'number': this.data.profile.number,
        'school': this.data.profile.school,
        'word': this.data.profile.word
      },
      success: function(res){
        const resp = res.data.data
        console.log(resp)
      }
    })
    wx.switchTab({
      url: '../mine/mine'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})