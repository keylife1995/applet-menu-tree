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
    slectTreeIds: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    open: false,
    highlight:false,//是否显示高亮状态
  },

  /**
   * 组件的方法列表
   */
  methods: {
    click: function(){
      if(this.properties.menu.isMenu){
        this.setData({
          open: !this.data.open
        })
        if(!this.data.open){
          //关闭状态，判断是否需要显示
          let slectTreeIds = this.properties.slectTreeIds
          for(var i=0;i<slectTreeIds.length;i++){
            if(slectTreeIds[i]==this.properties.menu.id){
              this.setData({
                highlight: true
              })
              break;
            }
            console.log(slectTreeIds[i])
          }
        }else{
          //打开状态，一定不显示
          this.setData({
            highlight: false
          })
        }
      }else{
        //当前视频高亮
        this.setData({
          highlight: true
        })
        //传递事件
        var val = [this.properties.menu.id]
        var myEventDetail = {
          val: val,
          video: this.properties.menu
        } // detail对象，提供给事件监听函数
        // console.log("menu.js " + this.properties.menu.title + " 发起事件反馈："+val)
        this.triggerEvent('chosevideo', myEventDetail) 
      }
    },
    choseVideo: function(e){//组件选中了某个视频
      // console.log("menu.js " + this.properties.menu.title + " 收到反馈："+e.detail.val)
      var val = e.detail.val; //通过这个传递数据
      val[val.length] = this.properties.menu.id
      var myEventDetail = {
        val: val,
        video: e.detail.video
      } // detail对象，提供给事件监听函数
      this.triggerEvent('chosevideo', myEventDetail) 
    },
  },
  observers: {
    'slectTreeIds': function(slectTreeIds) {
      // 在 slectTreeIds 被设置时，执行这个函数
      var highlight = false;//默认是不高亮
      // console.log("menu slectTreeIds 数据发生变化 " + slectTreeIds)
      if(!this.data.open){
        //关闭状态，判断是否需要显示
        let slectTreeIds = this.properties.slectTreeIds
        for(var i=0;i<slectTreeIds.length;i++){
          if(slectTreeIds[i]==this.properties.menu.id){
            highlight = true
            break;
          }
        }
      }else{
        //打开状态，一定不显示
        highlight = false
      }
      this.setData({
        highlight: highlight
      })
    }
  }
})
