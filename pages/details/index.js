// pages/details/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://wx.yogalt.com/file/images/img1.jpeg',
      'https://wx.yogalt.com/file/images/img2.jpeg',
      'https://wx.yogalt.com/file/images/img3.jpeg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    tabIs:true,
    specIs:false,
    data:null
  },
  tabFun(e){
    console.log(e)
    if (e.currentTarget.dataset.state == 1){
      this.setData({
        tabIs:true
      })
    }else{
      this.setData({
        tabIs: false
      })
    }
  },
  goShopCar: function () {
    wx.reLaunch({
      url: "/pages/cart/index"
    });
  },
  specFun(){
    this.setData({
      specIs: !this.data.specIs
    })
  },
  addCart(){
    app.http('v1/order/addCart', {
          id: this.data.data._id,
          num: 1,
          spec:['asdasasd'],
          title: this.data.data.title,
          img: this.data.data.img,
          price: this.data.data.price
         },"POST",)
    .then(res=>{
      console.log(res)
      if(res.code == 200){
        wx.showToast({
          title: '已加入购物车',
          icon: 'success',
          duration: 2000
        })
      }
     })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.http('v1/home/getItem', { id: options.id})
    .then(res=>{
      this.setData({
        data: res.data
      })
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