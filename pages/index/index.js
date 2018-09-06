//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'https://wx.yogalt.com/file/images/banner.jpg',
      'https://wx.yogalt.com/file/images/banner2.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    list:[],
    page:1
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  lower:function(e){
    console.log(e)
    this.getList()
  },
  delFun:function(e){
    console.log(e)
    wx.request({
      url: 'https://wx.yogalt.com/api/v1/admin/delItem',
      data: {
        id: e.currentTarget.dataset.id,
      },
      success: (res) => {
        console.log(res)
      }
    })
  },
  getList: function(){
    wx.request({
      url: 'https://wx.yogalt.com/api/v1/home/getHotList',
      data: {
        page: this.data.page
      },
      success: (res) => {
        if (res.data.code == 200&&res.data.data.list.length>0){
          this.data.page++
          let list = this.data.list
          for (let i = 0; i < res.data.data.list.length; i++) {
            list.push(res.data.data.list[i])
          }
          this.setData({
            list: list,
            page: this.data.page
          })
          console.log(this.data)
        }
      }
    })
  },
  onLoad: function () {
    this.getList()
    wx.request({
      url: 'https://wx.yogalt.com/api/v1/home/bannerList',
      data: {
        x: '1212',
        y: '121212'
      },
      success: (res)=>{
        this.setData({
          imgUrls: res.data
        })
      }
    })

    
    wx.request({
      url: 'https://wx.yogalt.com/api/v1/admin/getClassList',
      success: (res) => {
        console.log(res.data)
      }
    })
    

    // wx.request({
    //   url: 'https://wx.yogalt.com/api/v1/admin/addClass',
    //   method: 'POST',
    //   data: {
    //     cate_name: 'party',
    //     cate_order: 4,
    //   },
    //   header: {
    //     'X-Requested-With': 'XMLHttpRequest',
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   success: (res) => {
    //     console.log(res.data)
    //   }
    // })

    // wx.request({
    //   url: 'https://wx.yogalt.com/api/v1/admin/addItem',
    //   method:'POST',
    //   data:{
    //     title:"party大蛋糕",
    //     img:"https://wx.yogalt.com/file/images/img1.jpeg",
    //     spec:"1221123",
    //     price:'99.2',
    //     num:999,
    //     content:'2132123',
    //     html: '2132123',
    //     category:"5b8f4612afb7c17788e11998|party",
    //      is_hot:true
    //   },
    //   header:{
    //     'X-Requested-With': 'XMLHttpRequest',
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   success: (res) => {
    //     console.log(res.data)
    //   }
    // })
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
