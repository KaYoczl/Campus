// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    root: {
      rootname: '',
      password: ''
    }
  },

  nameIn: function(e){
    this.data.root.rootname = e.detail.value
  },

  passwordIn: function(e){
    this.data.root.password = e.detail.value
  },

  login: function(e){
    console.log(this.data.root.rootname,this.data.root.password)
    wx.request({
      url: 'http://localhost:8000/api/root/login',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: {
        'rootname': this.data.root.rootname,
        'password': this.data.root.password
      },
      success: function(res){
        //{rootname: "kayo", realname: null}
        console.log(res.data.data)

        if (res.data.errno === 0) {
          wx.switchTab({ url: '../index/index' })
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