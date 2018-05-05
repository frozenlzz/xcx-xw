// pages/detail/detail.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    body:'',
    ptime:'',
    source:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var id = options.id;
    console.log(options.id);
    wx.request({
      url: 'http://c.m.163.com/nc/article/'+ id +'/full.html', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var body = res.data[id].body;
        for (var i = 0; i < res.data[id].img.length;i++){
          body = body.replace(res.data[id].img[i].ref, '<img src="'+res.data[id].img[i].src+'" alt="" />')
        };
        WxParse.wxParse('body', 'html', body, that, 5);
        that.setData({ title: res.data[id].title});
        that.setData({ source: res.data[id].source});
        that.setData({ ptime: res.data[id].ptime});


      }
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