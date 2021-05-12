// pages/answer/answer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    answer: ''
  },
  answerInput: function(e){
    this.data.answer = e.detail.value
  },
  sureTap: function(){
    console.log(this.data.id,this.data.answer)
    wx.request({
      url: 'http://localhost:8000/api/answer/update',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: {
        'id': this.data.id,
        'answer': this.data.answer
      },
      success: function(res){
        console.log(res.data.data)
        wx.switchTab({
          url: '../index/index'
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.data.id = options.id
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