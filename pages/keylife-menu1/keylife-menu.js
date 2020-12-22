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
   * 组件的方法列表
   */
  methods: {
    choseVideo: function(e){//组件选中了某个视频
      var myEventDetail = {
        video: e.detail.video
      } // detail对象，提供给事件监听函数
      this.triggerEvent('chosevideo', myEventDetail) 
    },
  }
})
