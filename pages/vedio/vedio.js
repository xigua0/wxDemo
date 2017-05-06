Page({
  data:{
    scrollHeight:0,
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
      url:"http://www.imooc.com/course/ajaxlist",
      method:"GET",
      success:function(res){
        console.log(res.data.list)
        that.setData({
           list:res.data.list
        })
      }
    })
  },
  play:function(event){
    var id = event.target.dataset.id
    console.log(id)
    wx.navigateTo({
      url: '../vDetail/vDetail?id='+id
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