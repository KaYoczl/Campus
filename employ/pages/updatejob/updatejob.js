// pages/updatejob/updatejob.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    job: {
      id: '',
      comname:'',
      work: '',
      scale: '',
      money: '',
      duty: '',
      demand: '',
      way: ''
    }
  },

  comnameInput:function(e){
    console.log(e.detail.value)
    this.data.job.comname = e.detail.value
  },
  workInput:function(e){
    console.log(e.detail.value)
    this.data.job.work = e.detail.value
  },
  scaleInput:function(e){
    console.log(e.detail.value)
    this.data.job.scale = e.detail.value
  },
  moneyInput:function(e){
    console.log(e.detail.value)
    this.data.job.money = e.detail.value
  },
  dutyInput:function(e){
    console.log(e.detail.value)
    this.data.job.duty = e.detail.value
  },
  demandInput:function(e){
    console.log(e.detail.value)
    this.data.job.demand = e.detail.value
  },
  wayInput:function(e){
    console.log(e.detail.value)
    this.data.job.way = e.detail.value
  },
  //一键发送所有数据
  sureTap: function(e){
    console.log(this.data.job.id,this.data.job.comname,this.data.job.work,this.data.job.scale,this.data.job.money,this.data.job.duty,this.data.job.demand,this.data.job.way)
    wx.request({
      url: 'http://localhost:8000/api/job/update',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: {
        'id': this.data.job.id,
        'comname': this.data.job.comname,
        'work': this.data.job.work,
        'scale': this.data.job.scale,
        'money': this.data.job.money,
        'duty': this.data.job.duty,
        'demand': this.data.job.demand,
        'way': this.data.job.way
      },
      success: function(res){
        console.log(res)
        wx.switchTab({
          url: '../index/index',
        })
      }
    })
    wx.switchTab({
      url: '../index/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.data.job.id = options.id
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