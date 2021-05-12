// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:{
      username: '',
      password: ''
    }
  },

  nameIn: function(e){
    this.data.user.username = e.detail.value
  },
  passwordIn: function(e){
    this.data.user.password = e.detail.value
  },
  register: function(){
    var _this = this
    console.log(this.data.user.username,this.data.user.password)
    wx.request({
      url: 'http://localhost:8000/api/user/new',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: {
        'username': this.data.user.username,
        'password': this.data.user.password
      },
      success: function(res){
        console.log(res.data)
      }
    })
    wx.request({
      url: 'http://localhost:8000/api/file/new',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: {
        'username': this.data.user.username,
      },
      success: function(res){
        console.log(res.data)
      }
    })
    wx.request({
      url: 'http://localhost:8000/api/answer/new',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: {
        'username': this.data.user.username,
      },
      success: function(res){
        console.log(res.data.data)
        if (res.data.errno === 0) {
          wx.navigateTo({
            url: '../login/login'
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