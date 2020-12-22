// pages/mean/test.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    menus: [],
  },
  choseVideo: function(e){//组件选中了某个视频
    console.log(e.detail)
    wx.showToast({
      title: '播放视频',
      duration: 2000
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var menus = getApp().globalData.means
    this.setMenusId(menus,1)
    //遍历赋值ID
    this.setData({
      menus: menus
    })
  },
  setMenusId:function(menus,start){
    for(var i = 0; i<menus.length;i++){
        var menu = menus[i]
        menu.id = start
        menu.isMenu = menu.isMean
        // console.log("设置ID为"+start)
        start ++
        if(menu.isMean){
          start = this.setMenusId(menu.childList,start)
        }else{
          if(menu.url == "http://www.baidu.com/"){
            menu.url = "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200fd70000bvdp1thq12gn35k466vg&ratio=720p&line=0"
          }
        }
    }
    return start
  }

})