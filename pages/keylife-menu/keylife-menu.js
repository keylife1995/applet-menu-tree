// pages/keylife-menu/keylife-menu.js
/**
 * author keylife
 * email: keylife@foxmail.com
 * createtime: 2020-12-22
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    menuData: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    slectTreeIds: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    choseVideo: function(e){//组件选中了某个视频
      // this.properties.slectTreeIds = e.detail.val
      this.setData({
        slectTreeIds: e.detail.val
      })
      var myEventDetail = {
        video: e.detail.video
      } // detail对象，提供给事件监听函数
      this.triggerEvent('chosevideo', myEventDetail) 
    },
  }
})
