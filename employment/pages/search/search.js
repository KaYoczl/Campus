// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jobs: []
  },

  search: function(e){
    console.log(e.detail.value)
    var _this = this
    wx.request({
      url: 'http://localhost:8000/api/job/list',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        keyword: e.detail.value || ''
      },
      success: function(res){
        const resp = res.data.data
        console.log(resp)
        _this.setData({
          jobs: resp
        })
      }
    })
  },
  toDetail: function(e){
    console.log(this.data.jobs)
    var jobId = e.currentTarget.dataset.jobid;
    console.log('jobId:' + jobId);
    wx.navigateTo({
      url: '../jobdetail/jobdetail?id='+jobId//传递单个变量
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    wx.request({
      url: 'http://localhost:8000/api/job/list',
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
          jobs: resp
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