// pages/vDetail/vDetail.js
Page({
  data:{
    list:[],
    vedioList:[],
    id:0,
    animationData: {},
    bstop:1,
    pic:'../../icont/下标.png'
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that =this
    var id = options.id
    var d={}
    that.setData({
      id:id
    })
    wx.request({
      url:"http://www.imooc.com/course/ajaxlist",
      method:"GET",
      success:function(res){
        for(var i=0;i<res.data.list.length;i++){
          if(res.data.list[i].id==id){
            d=res.data.list[i];
            break
          }
        }
        that.setData({
           list:d,
           vedioList:res.data.list
        })
        console.log(that.data.vedioList)
      }
    })
  },
  detail:function(){
    var that = this
    console.log(1)
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    that.animation = animation
    if(that.data.bstop==1){
      animation.height(190).step()

      that.setData({
        animationData:animation.export(),
        bstop:0,
        pic:'../../icont/上标.png'
      })
    }else{
      animation.height(0).step()

      that.setData({
        animationData:animation.export(),
        bstop:1,
        pic:'../../icont/下标.png'
      })
    }
    
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