// pages/indexMap/indexMap.js
let sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl: "http://img1.3lian.com/2015/w7/85/d/101.jpg",
    down: "https://cshd.yusong.com.cn/static/images/img/down.png",
    G2: "https://cshd.yusong.com.cn/static/images/img/2G5.png",
    G3: "https://cshd.yusong.com.cn/static/images/img/3G5.png",
    G4: "https://cshd.yusong.com.cn/static/images/img/4G5.png", 
    b_bike: "https://cshd.yusong.com.cn/static/images/img/b_bike.png", 
    g_bike: "https://cshd.yusong.com.cn/static/images/img/g_bike.png", 
    inputShowed: false,
    inputVal: "",
    longitude: 0,
    latitude: 0,
    // 列表
    tabs: ["全部", "充电站", "门店"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    //加载更多
    height: '',
    res: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    //获取当前经纬度
    // wx.getLocation({
    //   type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
    //   success(res) {
    //     const lat = res.latitude
    //     const lon = res.longitude
    //     that.setData({
    //       latitude: lat,
    //       longitude: lon
    //     })
    //     console.log(that.data.longitude, that.data.latitude)
    //   }
    // })

    // 列表
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight,
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
// -----------------------------------0
  showInput () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  // 列表
  tabClick (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
//加载更多
  lower() {
    var result = this.data.res;

    var resArr = [];
    for (let i = 0; i < 10; i++) {
      resArr.push(i);
    };
    var cont = result.concat(resArr);
    console.log(resArr.length);
    if (cont.length >= 30) {
      wx.showToast({ //如果全部加载完成了也弹一个框
        title: '我也是有底线的',
        icon: 'success',
        duration: 300
      });
      return false;
    } else {
      wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
        title: '加载中',
        icon: 'loading',
      });
      setTimeout(() => {
        this.setData({
          res: cont
        });
        wx.hideLoading();
      }, 1500)
    }
  },
  // ------------------------1



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    console.log(123)
  }
})