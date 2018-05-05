Page({
  data: {
    // 可用高度
    contentHeight:'',
    menus: [
      { key: 'tuijian', name: '推荐', news: ''},
      { key: 'yule', name: '娱乐', news: ''},
      { key: 'redian', name: '热点', news: ''},
      { key: 'shishang', name: '时尚', news: ''},
      { key: 'jiankang', name: '健康', news: ''},
      { key: 'caijing', name: '财经', news: ''}
    ],
    page:1,
    yulePage:1,
    shishangPage:1,
    jiankangPage:1,
    caijingPage:1,
    // redianPage:1,
    current:'tuijian'
    // news:'',
    // yules:'',
    // redians:''
  },
  switcher: function(e){
   var k = e.target.dataset.key;
   this.setData({
     current:k
   })
  },
  change:function(e){
    var that = this;
    // 判断是否用户操作
    if(e.detail.source == 'touch'){
      // console.log('ture');
      this.setData({
        current: e.detail.currentItemId
      })
    } 
  },
  onLoad: function (options) {
    var that = this;
    var start = (this.data.page-1)*10;
    var end = start + 10;

    var yuleStart = (this.data.yulePage - 1)* 10;
    var yuleEnd = yuleStart + 10;

    var shishangStart = (this.data.shishangPage - 1) * 10;
    var shishangEnd = shishangStart + 10;

    var jiankangStart = (this.data.jiankangPage - 1) * 10;
    var jiankangEnd = jiankangStart + 10;

    var caijingStart = (this.data.caijingPage - 1) * 10;
    var caijingEnd = caijingStart + 10;

    
    // var redianPage = this.data.redianPage + 11;

    wx.getSystemInfo({
      success: function (res) {
        var h = res.windowHeight - 45 - 1;
        that.setData({
          contentHeight: h
        })
      }
    }),
      // 推荐
      wx.request({
        url: 'http://c.m.163.com/nc/article/headline/T1348647853363/'+start+'-'+end+'.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=20&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore', //仅为示例，并非真实的接口地址
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          var news = res.data['T1348647853363'];
          that.setData({
            'menus[0].news': news
          });
          that.setData({page:that.data.page+1})
        }
      }),
      // 娱乐
      wx.request({
        url: 'http://c.3g.163.com/nc/article/list/T1348648517839/'+yuleStart+'-'+yuleEnd+'.html', //仅为示例，并非真实的接口地址
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          var yules = res.data.T1348648517839;
          that.setData({
            'menus[1].news': yules
          });
          that.setData({ yulePage: that.data.yulePage + 1 });
        }
      });
      //热点
    wx.request({
      url: 'http://c.3g.163.com/recommend/getSubDocPic?passport=&devId=B45E64F7-002F-4126-8C7E-3DB0ACF6C85E&size=40', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var redians = res.data['推荐'];
        that.setData({
          'menus[2].news': redians
        });
        // that.setData({ redianPage: that.data.redianPage + 1 })
      }
    });
    // 时尚
    wx.request({
      url: 'http://c.m.163.com/nc/article/list/T1348650593803/' + shishangStart + '-' + shishangEnd+'.html', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var shishang = res.data['T1348650593803'];
        that.setData({
          'menus[3].news': shishang
        });
        // console.log(that.data.menus[3].news);
        that.setData({ shishangPage: that.data.shishangPage + 1 })
      }
    });
    // 健康
    wx.request({
      url: 'http://c.3g.163.com/nc/article/list/T1414389941036/' + jiankangStart + '-' + jiankangEnd + '.html', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var jiankang = res.data['T1414389941036'];
        that.setData({
          'menus[4].news': jiankang
        });
        that.setData({ jiankangPage: that.data.jiankangPage + 1 })
      }
    });
    // 财经
    wx.request({
      url: 'http://c.m.163.com/nc/article/list/T1348648756099/' + caijingStart + '-' + caijingEnd + '.html', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var caijing = res.data['T1348648756099'];
        that.setData({
          'menus[5].news': caijing
        });
        that.setData({ caijingPage: that.data.caijingPage + 1 })
      }
    });
  },
/**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 触底加载事件
  scrolltolower: function () {
    var that = this;
    var start = (this.data.page - 1) * 10;
    var end = start + 10;

    var yuleStart = (this.data.yulePage - 1) * 10;
    var yuleEnd = yuleStart + 10;

    var shishangStart = (this.data.shishangPage - 1) * 10;
    var shishangEnd = shishangStart + 10;
    
    var jiankangStart = (this.data.jiankangPage - 1) * 10;
    var jiankangEnd = jiankangStart + 10;

    var caijingStart = (this.data.caijingPage - 1) * 10;
    var caijingEnd = caijingStart + 10;

    if (this.data.current == 'tuijian') {
      wx.request({
        url: 'http://c.m.163.com/nc/article/headline/T1348647853363/' + start + '-' + end + '.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=20&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore', //仅为示例，并非真实的接口地址
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          var news = that.data.menus[0].news;
          var rs = news.concat(res.data['T1348647853363']);
          that.setData({ 'menus[0].news':rs});
          that.setData({ page: that.data.page + 1 });
        }
      })
    } else if (this.data.current == 'yule'){
      wx.request({
        url: 'http://c.3g.163.com/nc/article/list/T1348648517839/' + yuleStart + '-' + yuleEnd + '.html', //仅为示例，并非真实的接口地址
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          var yules = that.data.menus[1].news;
          var rs = yules.concat(res.data['T1348648517839']);
          that.setData({ 'menus[1].news': rs });
          that.setData({ yulePage: that.data.yulePage + 1 })
        }
      })
    } else if (this.data.current == 'shishang'){
      wx.request({
        url: 'http://c.m.163.com/nc/article/list/T1348650593803/' + shishangStart + '-' + shishangEnd + '.html', //仅为示例，并非真实的接口地址
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          var shishang = that.data.menus[3].news;
          var rs = shishang.concat(res.data['T1348650593803']);
          that.setData({ 'menus[3].news': rs });
          that.setData({ shishangPage: that.data.shishangPage + 1 })
        }
      })
    } else if (this.data.current == 'jiankang') {
      wx.request({
        url: 'http://c.3g.163.com/nc/article/list/T1414389941036/' + jiankangStart + '-' + jiankangEnd + '.html', //仅为示例，并非真实的接口地址
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          var jiankang = that.data.menus[4].news;
          var rs = jiankang.concat(res.data['T1414389941036']);
          that.setData({
            'menus[4].news': rs
          });
          that.setData({ jiankangPage: that.data.jiankangPage + 1 })
        }
      });
    } else if(this.data.current == 'caijing'){
      wx.request({
        url: 'http://c.m.163.com/nc/article/list/T1348648756099/' + caijingStart + '-' + caijingEnd + '.html', //仅为示例，并非真实的接口地址
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          var caijing = that.data.menus[5].news;
          var rs = caijing.concat(res.data['T1348648756099']);
          that.setData({
            'menus[5].news': rs
          });
          that.setData({ caijingPage: that.data.caijingPage + 1 })
        }
      });
    }
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