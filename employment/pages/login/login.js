// pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      username: '',
      password: ''
    }
  },

  toRegister: function(){
    wx.navigateTo({
      url: '../register/register',
    })
  },
  nameIn: function(e){
    this.data.user.username = e.detail.value
  },

  passwordIn: function(e){
    this.data.user.password = e.detail.value
  },

  login: function(e){
    var _this = this
    console.log(this.data.user.username,this.data.user.password)
    wx.request({
      url: 'http://localhost:8000/api/user/login',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: {
        'username': this.data.user.username,
        'password': this.data.user.password
      },
      success: function(res){
        //{data: {…}, errno: 0}
        console.log(res.data)
        //{username: "xiahao", realname: "夏豪好"}
        console.log(res.data.data)

        if (res.data.errno === 0) {
          //取到全局对象的值
          console.log(app.getName())
          //更改全局对象的数据
          app.updateName(_this.data.user.username)
          console.log(app.getName())
          //跳转到首页
          wx.switchTab({
            url: '../index/index'
          })
        }
      }
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