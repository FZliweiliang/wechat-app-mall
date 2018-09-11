// pages/bindPhone/index.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
   code:'',
   mobile:''
  },
  bindKeyInput: function (e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  bindKeyCode:function(e){
    this.setData({
      code: e.detail.value
    })
  },
  submitFun:function(){
    app.http('v1/user/bindMobile', {
      code: this.data.code,
      mobile: this.data.mobile,
      openid: getApp().globalData.openid
    },'POST')
      .then(res => {
        if (res.code == 200) {
          wx.reLaunch({
            url: "/pages/index/index"
          });
        }
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