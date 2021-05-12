// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   * 钩子函数 hook function
   */
  onLoad: function (options) {
    // setData
    var content = [{
      title: "2021KPL夏季赛季后赛观赛指南",
      content: "大唐帝国至高无上的女帝陛下，永远不会忘记自己被诅咒的命运与理想国的梦想。身为天才法师，她在十四岁时暂露头角，并被谄媚的地方官贡献给大唐的宫廷。但因为芈月的前车之鉴，她的美貌以及破坏性法力引起了王室的警惕，将她囚禁在寺院中。",
      imgSrc: "/images/img/6.jpg",
      reading: 102,
      collection: 92,
      detail: "大唐帝国至高无上的女帝陛下，永远不会忘记自己被诅咒的命运与理想国的梦想。身为天才法师，她在十四岁时暂露头角，并被谄媚的地方官贡献给大唐的宫廷。但因为芈月的前车之鉴，她的美貌以及破坏性法力引起了王室的警惕，将她囚禁在寺院中。",
      dateTime: "24小时前",
      headImgSrc: "/images/img/6.jpg",
      author: "KaYo",
      date: "Nov 26 2021",
      avatar: "/images/avatar/1.png",
      postId: 3,
    },{
      title: "2021KPL夏季赛季后赛观赛指南",
      content: "大唐帝国至高无上的女帝陛下，永远不会忘记自己被诅咒的命运与理想国的梦想。身为天才法师，她在十四岁时暂露头角，并被谄媚的地方官贡献给大唐的宫廷。但因为芈月的前车之鉴，她的美貌以及破坏性法力引起了王室的警惕，将她囚禁在寺院中。",
      imgSrc: "/images/img/6.jpg",
      reading: 102,
      collection: 92,
      detail: "大唐帝国至高无上的女帝陛下，永远不会忘记自己被诅咒的命运与理想国的梦想。身为天才法师，她在十四岁时暂露头角，并被谄媚的地方官贡献给大唐的宫廷。但因为芈月的前车之鉴，她的美貌以及破坏性法力引起了王室的警惕，将她囚禁在寺院中。",
      dateTime: "24小时前",
      headImgSrc: "/images/img/6.jpg",
      author: "KaYo",
      date: "Nov 26 2021",
      avatar: "/images/avatar/1.png",
      postId: 3,
    }]
    this.setData({
      posts:content,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // a = '2021KPL夏季赛季后赛观赛指南';
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
    console.log('top')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('buttom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})