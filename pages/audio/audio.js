function parseLyric(lrc) {
    var lyrics = lrc.split("\n");
    var lrcObj = {};
    for(var i=0;i<lyrics.length;i++){
        var lyric = decodeURIComponent(lyrics[i]);
        var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
        var timeRegExpArr = lyric.match(timeReg);
        if(!timeRegExpArr)continue;
        var clause = lyric.replace(timeReg,'');
        for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
            var t = timeRegExpArr[k];
            var min = Number(String(t.match(/\[\d*/i)).slice(1)),
                sec = Number(String(t.match(/\:\d*/i)).slice(1));
            var time = min * 60 + sec;
            lrcObj[time] = clause;
        }
    }
    return lrcObj;
}
Page({
  onLoad:function(){
    var that=this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollHeight:res.windowHeight-80
        })
      }
    })
  },
  onReady: function (e) {
    var that=this;
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
    // var d=parseLyric(this.data.music.lrc)
    // this.setData({
    //   music:{
    //     num:that.data.music.num,
    //     id:that.data.music.id,
    //     poster:that.data.music.poster,
    //     name:that.data.music.name,
    //     src:that.data.music.src,
    //     lrc:d
    //   }
    // })
  },
  data: {
    words:'',
    animationData: {},
    music:{
      num:0,
      id:0,
      poster:'http://www.xuzhensheng.online/audio/aimei.jpg',
      name:'暧昧',
      author:'薛之谦',
      src:'http://www.xuzhensheng.online/audio/aimei.mp3',
      lrc:`[00:01.78]暧昧
[00:03.35]
[00:04.55]作词：薛之谦
[00:05.73]作曲：薛之谦
[00:06.97]演唱：薛之谦
[00:08.20]
[00:15.81]反正现在的感情 都暧昧
[00:20.66]你大可不必为难 找般配
[00:25.36]付出过的人排队 谈体会
[00:29.90]趁年轻别害怕一个人睡
[00:34.86]可能是现在感情 太昂贵
[00:39.67]让付出真心的人 好狼狈
[00:44.45]还不如听首情歌 的机会 忘了谁
[00:53.14]
[00:55.75]感情像牛奶一杯 越甜越让人生畏
[01:05.01]都早有些防备 润色前的原味
[01:14.32]所以人们都拿起咖啡 把试探放在两人位
[01:24.49]距离感一对 就不必再赤裸相对
[01:30.42]
[01:32.66]反正现在的感情 都暧昧
[01:37.37]你大可不必为难 找般配
[01:42.19]付出过的人排队 谈体会
[01:46.89]弃之可惜 食而无味
[01:51.68]可能是现在感情 太珍贵
[01:56.43]让付出真心的人 好疲惫
[02:01.32]谁不曾用过卑微的词汇 想留住谁
[02:09.46]
[02:50.62]还贪恋着衣衫昂贵 却输给了廉价香水
[03:00.35]他先诱你入位 还刻意放低了分贝
[03:09.83]可感情越爱越妩媚 像烂掉的苹果一堆
[03:19.42]连基因都不对 还在意什么鱼腥味
[03:26.59]
[03:27.79]反正现在的感情 都暧昧
[03:32.50]你大可不必为难 找般配
[03:37.41]何必给自己沉迷 的机会
[03:41.84]不如用误会来结尾
[03:46.79]反正现在的我们 算暧昧
[03:51.70]我愿意给的感情 请浪费
[03:56.50]反正流过的眼泪 难收回
[04:01.30]就别再安慰
[04:04.59]
[04:06.28]看你入眠的侧脸 有多美
[04:11.24]和你丢下的一切 好匹配
[04:17.39]我还以为我能 多狼狈
[04:23.95]我自以为
[04:29.14]制作人：郑伟
[04:29.83]编曲：薛之谦 郑伟
[04:30.44]混音：郑伟
[04:31.54]大提琴：周润青
[04:32.38]女声：孟楠
[04:33.87]合音：薛之谦 张石狄
[04:35.06]录音：莫家伟
[04:36.24]母带：Chris Gehringer
[04:37.49]`
    },
    musiclist:[{
      id:0,
      poster:'http://www.xuzhensheng.online/audio/aimei.jpg',
      name:'暧昧',
      author:'薛之谦',
      src:'http://www.xuzhensheng.online/audio/aimei.mp3'
    },{
      id:1,       poster:'http://www.xuzhensheng.online/audio/dongwushijie.jpg',
      name:'动物世界',
      author:'薛之谦',
      src:'http://www.xuzhensheng.online/audio/dongwushijie.mp3'
    },{
      id:2,
      poster:'http://www.xuzhensheng.online/audio/gaoshang.jpg',
      name:'高尚',
      author:'薛之谦',
      src:'http://www.xuzhensheng.online/audio/gaoshang.mp3'
    },{
      id:3,
      poster:'http://www.xuzhensheng.online/audio/wohaipa.jpg',
      name:'我害怕',
      author:'薛之谦',
      src:'http://www.xuzhensheng.online/audio/wohaipa.mp3'
    },{
      id:4,
      poster:'http://www.xuzhensheng.online/audio/aimei.jpg',
      name:'暧昧',
      author:'薛之谦',
      src:'http://www.xuzhensheng.online/audio/aimei.mp3'
    },{
      id:5,       poster:'http://www.xuzhensheng.online/audio/dongwushijie.jpg',
      name:'动物世界',
      author:'薛之谦',
      src:'http://www.xuzhensheng.online/audio/dongwushijie.mp3'
    },{
      id:6,
      poster:'http://www.xuzhensheng.online/audio/gaoshang.jpg',
      name:'高尚',
      author:'薛之谦',
      src:'http://www.xuzhensheng.online/audio/gaoshang.mp3'
    },{
      id:7,
      poster:'http://www.xuzhensheng.online/audio/wohaipa.jpg',
      name:'我害怕',
      author:'薛之谦',
      src:'http://www.xuzhensheng.online/audio/wohaipa.mp3'
    }]
  },
  playmusic:function(event){
    console.log(event)
    var idx=event.target.dataset.idx
    var that=this
    that.setData({
      music:that.data.musiclist[idx]
    })
    setTimeout(function(){
      that.audioCtx.play()
    },500)
  },
  eventHandle:function(){
    var that = this 
    var pos = 0
    if(that.data.music.id + 1 >= that.data.musiclist.length){
      pos = 0
    }else{
      pos = that.data.music.id + 1
    }
    var playingmusic=that.data.musiclist[pos]
    that.setData({
      music:playingmusic
    })

    setTimeout(function(){
      that.audioCtx.play()
    },500)  
  },
  play:function(event){
    var that = this
    var d = parseInt((event.detail.currentTime/event.detail.duration)*100)
    that.setData({
      num : d,
      // words:that.data.music.lrc[d]
    })
  },
  big:function(){
    console.log(1)
    var animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 1000,
      timingFunction: "ease",
      delay: 0
    })

    this.animation = animation

    animation.height(24).width(142).bottom(13).right(40).step()

    this.setData({
      animationData:animation.export()
    })
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(309)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }
})