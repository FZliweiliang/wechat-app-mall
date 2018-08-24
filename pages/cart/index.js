Page({

  /**
   * 页面的初始数据
   */
  data: {
    total:false, //是否全选
    totalPrice:0, //总价
    list:[{ //商品列表
        id: 2,
        img:'/images/img1.jpeg',
        name: "榴恋草莓蛋糕-2磅188元/138元/4磅298元（深圳）",
        spec:"2磅，+19.9元得水果（中盒）…",
        price:999.00,
        num:2,
        select: false,
      },
      {
        id: 3,
        img: '/images/img1.jpeg',
        name: "榴恋草莓蛋糕-2磅188元/138元/4磅298元（深圳）",
        spec: "2磅，+19.9元得水果（中盒）…",
        price: 999.01,
        num: 1,
        select: false
      },
      {
        id: 4,
        img: '/images/img1.jpeg',
        name: "榴恋草莓蛋糕-2磅188元/138元/4磅298元（深圳）",
        spec: "2磅，+19.9元得水果（中盒）…",
        price: 999.02,
        num: 1,
        select: false
      },
      {
        id: 5,
        img: '/images/img1.jpeg',
        name: "榴恋草莓蛋糕-2磅188元/138元/4磅298元（深圳）",
        spec: "2磅，+19.9元得水果（中盒）…",
        price: 999.03,
        num: 1,
        select: false
      },
      {
        id: 6,
        img: '/images/img1.jpeg',
        name: "榴恋草莓蛋糕-2磅188元/138元/4磅298元（深圳）",
        spec: "2磅，+19.9元得水果（中盒）…",
        price: 999.04,
        num: 1,
        select: false
      }
    ]
  },
  totalPrice(){//计算总价
    let that = this
    let price = 0
    for(let i=0;i<that.data.list.length;i++){
      if (that.data.list[i].select){
        price = price + that.data.list[i].price * that.data.list[i].num
      }
    }
    this.setData({
      totalPrice: price.toFixed(2)
    })

  },
  totalFun(){ //全选
    this.data.total = !this.data.total
    // for (let i = 0; i < this.data.list.length; i++) {
    //   if (this.data.total) {
    //     this.data.list[i].select = true
    //   }else{
    //     this.data.list[i].select = false
    //   }
    // }
    this.data.list.map((v,k)=>{
      if (this.data.total) {
        v.select = true
      } else {
        v.select = false
      }
    })
    this.setData({
      list: this.data.list,
      total: this.data.total
    })

    this.totalPrice()
  },
  labelFun(e){//单选
    let that = this
    let num = 0
    for (let i = 0; i < that.data.list.length;i++){
      if (that.data.list[i].id == e.currentTarget.dataset.id){
        that.data.list[i].select = !that.data.list[i].select
        that.setData({
          list: that.data.list
        })
      }

      if (that.data.list[i].select){
        num++
        if (num == that.data.list.length){
          that.setData({
            total: true
          })
        }else{
          that.setData({
            total: false
          })
        }
      }
    }
    this.totalPrice()
  },
  editFun(){ //编辑
    this.setData({
      isEdit: !this.data.isEdit
    })
  },
  plusFun(item){ //增加商品数量
    this.data.list.map((v,k)=>{
      if (v.id == item.target.dataset.item.id){
          this.data.list[k].num++
      }
    })
    this.setData({
      list: this.data.list
    })

    this.totalPrice()
  },
  reduceFun(item) { //减少商品数量
    this.data.list.map((v, k) => {
      if (v.id == item.target.dataset.item.id) {
        if (this.data.list[k].num > 1){
          this.data.list[k].num--
        }
      }
    })
    this.setData({
      list: this.data.list
    })

    this.totalPrice()
  },
  delItemFun(item){ //删除单商品
    
    let id = item.target?item.target.dataset.item.id:item.id
    this.data.list.map((v, k) => {
      if (v.id == id) {
        this.data.list.splice(k,1)
      }
    })
    this.setData({
      list: this.data.list
    })

    this.totalPrice()
  },
  delFun(){ //选中删除
    let list  = []
    this.data.list.map((v, k) => {
        list.push(v)
    })

    list.map((v, k) => {
      if (v.select){
        list.splice(k,1)
      }
    })


    console.log(list)
    // this.setData({
    //   list: list
    // })

    // this.totalPrice()

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