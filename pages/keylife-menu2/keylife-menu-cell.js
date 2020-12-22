// pages/keylife-menu/keylife-menu-cell.js
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
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    menu: {
      type: Object,
      value: {
        isMenu: true,
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
      let menu = this.properties.menu.childList[index]
      if(menu.isMenu){
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
        //传递事件
        var myEventDetail = {
          video: this.properties.menu
        } // detail对象，提供给事件监听函数
        // console.log("menu.js " + this.properties.menu.title + " 发起事件反馈："+val)
        this.triggerEvent('chosevideo', myEventDetail) 
      }
    },
    choseVideo: function(e){//组件选中了某个视频
      // console.log("menu.js " + this.properties.menu.title + " 收到反馈："+e.detail.val)
      var myEventDetail = {
        video: e.detail.video
      } // detail对象，提供给事件监听函数
      this.triggerEvent('chosevideo', myEventDetail) 
    },
  }
})
