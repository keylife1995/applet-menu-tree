// pages/mean/mean.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    mean: {
      type: Object,
      value: {
        isMean: true,
        title: '默认标题',
        childList: []
      },
    },
    active: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    openIndex: -1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    click: function(e){
      let index = e.target.dataset.index
      let mean = this.properties.mean.childList[index]
      if(mean.isMean){
        console.log(index)
        console.log(this.data)
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
    },
  },
})
