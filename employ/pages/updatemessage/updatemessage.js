// pages/updatemessage/updatemessage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: {
      id: '',
      title:'',
      content: '',
      post: '',
      time: ''
    }
  },

  titleInput:function(e){
    console.log(e.detail.value)
    this.data.message.title = e.detail.value
  },
  contentInput:function(e){
    console.log(e.detail.value)
    this.data.message.content = e.detail.value
  },
  postInput:function(e){
    console.log(e.detail.value)
    this.data.message.post = e.detail.value
  },
  timeInput:function(e){
    console.log(e.detail.value)
    this.data.message.time = e.detail.value
  },
  //一键发送所有数据
  sureTap: function(e){
    console.log(this.data.message.id,this.data.message.title,this.data.message.content,this.data.message.post,this.data.message.time)
    wx.request({
      url: 'http://localhost:8000/api/message/update',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: {
        'id': this.data.message.id,
        'title': this.data.message.title,
        'content': this.data.message.content,
        'post': this.data.message.post,
        'time': this.data.message.time
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
    this.data.message.id = options.id
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