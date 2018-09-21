// pages/list/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    sortActive:0,
    sortState: true,
    price:false,
    flavor:false,
    mount:false,
    page:1
  },
  addCart(data) {
    let item = data.currentTarget.dataset.item
    app.http('v1/order/addCart', {
      id: item._id,
      num: 1,
      spec: ['asdasasd'],
      title: item.title,
      img: item.img,
      price: item.price
    }, "POST")
      .then(res => {
        console.log(res)
        if (res.code == 200) {
          wx.showToast({
            title: '已加入购物车',
            icon: 'success',
            duration: 500
          })
        }
      })
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
  getList:function(data){
    app.http('v1/home/getList', {
      page: this.data.page,
      category: data.id
    })
      .then(res => {
        if (res.code == 200 && res.data.list.length > 0) {
          this.data.page++
          let list = this.data.list
          for (let i = 0; i < res.data.list.length; i++) {
            list.push(res.data.list[i])
          }
          this.setData({
            list: list,
            page: this.data.page
          })
          console.log(this.data)
        }
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    wx.setNavigationBarTitle({
      title: e.title//页面标题为路由参数
    })
    console.log(e)
    this.getList(e)
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