// pages/mDetail/mDetail.js
Page({
  data:{
    list:[],
    id:0,
    snum:0,
    detail:'',
    pic:'../../icont/下标.png',
    movies:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var id = options.id
    var that = this
    var d = {}
    console.log(id)
    wx.request({
      url:"http://m.maoyan.com/movie/"+id+".json",
      method:"GET",
      success:function(res){
        console.log(res)
        that.setData({
           list:res.data.data.MovieDetailModel,
        })
        var a=that.data.list.dra
        var b=a.replace(/[a-z<>/]+/g,"")
        that.setData({
           snum:parseInt(that.data.list.snum/10000),
           detail:b
        })  
        //console.log(that.data.detail)
      }
    })
    wx.request({
      url:"http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000",
      method:"GET",
      success:function(res){
        console.log(res.data.data.movies,1)
        that.setData({
           movies:res.data.data.movies
        })
      }
    })
  },
  show:function(){
    var that = this
    console.log(1)
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    that.animation = animation
    if(that.data.bstop==1){
      animation.height('100%').step()

      that.setData({
        animationData:animation.export(),
        bstop:0,
        pic:'../../icont/上标.png'
      })
    }else{
      animation.height(48).step()

      that.setData({
        animationData:animation.export(),
        bstop:1,
        pic:'../../icont/下标.png'
      })
    }
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