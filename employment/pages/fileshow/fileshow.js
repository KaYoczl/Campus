// pages/fileshow/fileshow.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    email: '',
    phone: '',
    flag: '',
    work: '',
    item: '',
    good: ''
  },
  toFile: function(){
    wx.redirectTo({
      url: '../file/file',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    wx.request({
      url: 'http://localhost:8000/api/file/detail',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: {
        username: app.getName()
      },
      success: function(res){
        const resp = res.data.data
        console.log(resp)
        _this.setData({
          'name': resp.name,
          'email': resp.email,
          'phone': resp.phone,
          'flag': resp.flag,
          'work': resp.work,
          'item': resp.item,
          'good': resp.good
        })
      }
    })
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
    // 获取数据
    console.log(app.getName())
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