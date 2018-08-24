// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{}, {}, {}, {}, {},],
    sortActive:0,
    sortState: true,
    price:false,
    flavor:false,
    mount:false
  },
  sortFun(data) {
    this.setData({
      sortActive: data.currentTarget.dataset.data,
    })

    if (data.currentTarget.dataset.data == 1){
      this.setData({
        price: this.price = !this.price
      })

    } else if (data.currentTarget.dataset.data == 2){
      this.setData({
        flavor: this.flavor = !this.flavor
      })

    } else if (data.currentTarget.dataset.data == 3) {
      this.setData({
        mount: this.mount = !this.mount
      })

    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    wx.setNavigationBarTitle({
      title: e.title//页面标题为路由参数
    })
    console.log(e)
    let list = []
    for (let i = 0; i < 20; i++) {
      list.push({})
      this.setData({
        list: list
      })
    }
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