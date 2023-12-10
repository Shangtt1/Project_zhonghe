// pages/putIn/putIn.js
var config = require("../../config.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputContent :'',
    SERIAL_NAME :'',
    iputSERIAL_NAME:'',
    seriesData: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
        var that = this;
        // console.log("onLoad"), console.log(options.SERIAL_NAME);
        that.setData({
          SERIAL_NAME: options.SERIAL_NAME
        })
        // console.log(this.data.SERIAL_NAME);
  },
  onInput(event) {
    this.setData({
      iputSERIAL_NAME: event.detail.value,
    });
  },
  check() {
    var that = this;
    console.log(this.data.iputSERIAL_NAME);
    console.log(this.data.SERIAL_NAME);
    if (this.data.iputSERIAL_NAME == this.data.SERIAL_NAME) {
      console.log('true')
      wx.showToast({
        title: '序列号正确',
        icon: 'success',
        duration: 3000 //持续的时间
      });
      wx.navigateTo({
        url: "/pages/values/values?SERIAL_NAME="+ this.data.SERIAL_NAME
    });     
    }
    else{
      wx.showToast({
        title: '序列号错误！',
        icon: 'error',
        duration: 2000 //持续的时间
      })
    }
    // url="/pages/values/values?SERIAL_NAME={{selectedSerialName}}
  //   var n = {
  //     SERIAL_NAME: this.data.iputSERIAL_NAME
  // };
  //   wx.request({
  //     url: config.SERVER_URL + "query/productinfo",
  //     method: "POST",
  //     data: n,
  //     success: function(e) {
  //       var a = e.data.data;
  //       var o = [];
  //       o.push({ series: a.SERIAL_NAME, prodesc: a.PRODUCT_DES });
  //       // 在这里将 this 保存到一个变量以确保可以在 this.setData 内部访问
  //       that.setData({
  //           seriesData: o
  //       });
  //   },
    
  //     fail: function(e) {
  //         console.error("ERROR", e);
  //     }
  // });

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})