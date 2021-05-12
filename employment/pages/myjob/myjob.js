// pages/myjob/myjob.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myJobs: []
  },
  toJobDetail: function(e){
    var jobId = e.currentTarget.dataset.jobid;
    wx.navigateTo({
      url: '../jobdetail/jobdetail?id='+jobId,
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
        const state = resp.state
        console.log(state)
        for (let i = 1; i < state.length; i++) {
          console.log(1)
          wx.request({
            url: 'http://localhost:8000/api/job/detail?id='+state[i],
            method: 'GET',
            header: {
              'content-type': 'application/json'
            },
            data: {
              
            },
            success: function(res){
              const resp = res.data.data
              console.log(resp)
              _this.data.myJobs.push(resp)
              console.log(_this.data.myJobs)
              _this.setData({
                myJobs: _this.data.myJobs
              })
            }
          })
        }
      }
    })
    // wx.request({
    //   url: 'http://localhost:8000/api/myjob/list',
    //   method: 'GET',
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   data: {
        
    //   },
    //   success: function(res){
    //     const resp = res.data.data
    //     console.log(resp)
    //     _this.setData({
    //       myJobs: resp
    //     })
    //   }
    // })
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