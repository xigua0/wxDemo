// pages/movie/movie.js
Page({
  data:{
    list:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
     var that = this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollHeight:res.windowHeight
        })
      }
    })
    wx.request({
      url:"http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000",
      method:"GET",
      success:function(res){
        console.log(res.data.data.movies)
        that.setData({
           list:res.data.data.movies
        })
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})