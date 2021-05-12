// pages/jobdetail/jobdetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    state: '',
    comname: '',
    work: '',
    scale: '',
    money: '',
    duty: '',
    demand: '',
    way: ''
  },
  toSearch: function(){
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
        const oldState = resp.state
        console.log(resp)
        console.log(oldState)
        _this.data.state = oldState.concat(_this.data.id)
        console.log(_this.data.state)
        wx.request({
          url: 'http://localhost:8000/api/file/go',
          method: 'POST',
          header: {
            'content-type': 'application/json'
          },
          data: {
            'state': _this.data.state,
            'username': app.getName()
          },
          success: function(res){
            const resp = res.data
            console.log(resp)
            wx.switchTab({
              url: '../search/search',
            })
          }
        })
      }
    })
    // wx.request({
    //   url: 'http://localhost:8000/api/file/go',
    //   method: 'POST',
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   data: {
    //     'state': _this.data.state,
    //     'username': app.getName()
    //   },
    //   success: function(res){
    //     const resp = res.data
    //     console.log(resp)
    //     wx.switchTab({
    //       url: '../search/search',
    //     })
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.data.id = options.id
    var id = options.id
    var _this = this
    wx.request({
      url: 'http://localhost:8000/api/job/detail?id='+id,
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        
      },
      success: function(res){
        const resp = res.data.data
        console.log(resp)
        _this.setData({
          'comname': resp.comname,
          'work': resp.work,
          'scale': resp.scale,
          'money': resp.money,
          'duty': resp.duty,
          'demand': resp.demand,
          'way': resp.way
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