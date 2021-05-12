// pages/checkfile/checkfile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tip: false,
    fileChecked: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.state)
    const state = options.state
    var _this = this
    wx.request({
      url: 'http://localhost:8000/api/fileCheck/list',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        
      },
      success: function(res){
        const resp = res.data.data
        console.log(resp)
        //前端处理渲染投递了该职位的用户简历
        const array = resp
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          if (element.state.indexOf(state) !== -1) {
            _this.data.fileChecked.push(element)
          }
        }
        console.log(_this.data.fileChecked)
        _this.setData({
          fileChecked: _this.data.fileChecked
        })
        if (_this.data.fileChecked.length === 0) {
          _this.setData({
            tip: true
          })
        }
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