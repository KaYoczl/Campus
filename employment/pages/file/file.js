// pages/file/file.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    file: {
      name:'',
      email: '',
      phone: '',
      flag: '',
      work: '',
      item: '',
      good: ''
    }
  },

  nameInput:function(e){
    console.log(e.detail.value)
    this.data.file.name = e.detail.value
  },
  emailInput:function(e){
    console.log(e.detail.value)
    this.data.file.email = e.detail.value
  },
  phoneInput:function(e){
    console.log(e.detail.value)
    this.data.file.phone = e.detail.value
  },
  flagInput:function(e){
    console.log(e.detail.value)
    this.data.file.flag = e.detail.value
  },
  workInput:function(e){
    console.log(e.detail.value)
    this.data.file.work = e.detail.value
  },
  itemInput:function(e){
    console.log(e.detail.value)
    this.data.file.item = e.detail.value
  },
  goodInput:function(e){
    console.log(e.detail.value)
    this.data.file.good = e.detail.value
  },
  //一键发送所有数据
  sureTap: function(e){
    console.log(this.data.file.name,this.data.file.email,this.data.file.phone,this.data.file.flag,this.data.file.work,this.data.file.item,this.data.file.good)
    wx.request({
      url: 'http://localhost:8000/api/file/update',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: {
        'username': app.getName(),
        'name': this.data.file.name,
        'email': this.data.file.email,
        'phone': this.data.file.phone,
        'flag': this.data.file.flag,
        'work': this.data.file.work,
        'item': this.data.file.item,
        'good': this.data.file.good
      },
      success: function(res){
        console.log(res)
      }
    })
    wx.switchTab({
      url: '../mine/mine'
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