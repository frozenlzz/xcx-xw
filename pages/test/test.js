// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // a:'http://m.maoyan.com/movie/xxxx.json'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    var that = this;
    wx.request({
      url: 'http://m.maoyan.com/movie/'+ options.id +'.json', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.data.MovieDetailModel);
        // 图片修改
        var photos =[];
        var photo = res.data.data.MovieDetailModel.photos;
        var reg = /w.h\//;
        for (var i = 0; i < photo.length;i++ ){
          photos.push(photo[i].replace(reg, ''));
        }
        //-------------------------
        // 内容修改
        var content = res.data.data.MovieDetailModel.dra;
        var reg1 = /<p>(.*?)<\/p>/;
        content = content.replace(reg1,"$1");
        // console.log(content);
        //--------------------------
        that.setData({
          content:content,
          photos:photos,
          movie: res.data.data.MovieDetailModel
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
        })
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