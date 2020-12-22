// pages/mean/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openIndex: -1,
    means: getApp().globalData.means
  },
  click: function(e){
    let index = e.target.dataset.index
    let mean = this.data.means[index]
    if(mean.isMean){
      console.log(index)
      if(index==this.data.openIndex){
        this.setData({
          openIndex: -1
        })
      }else{
        this.setData({
          openIndex: index
        })
      }
    }else{
      wx.showToast({
        title: '播放视频',
        duration: 2000
      })
    }
  }
})