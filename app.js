//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    means:[{
      isMean: false,
      title: '先提下神',
      url: 'https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0300fc70000bvdp8vba8bah0dfl12k0&ratio=720p&line=0'
    },{
      isMean: true,
      title: '第一章 街舞简介',
      childList: [{
        isMean: false,
        title: '1 街舞起源',
        url: 'http://www.baidu.com/'
      },{
        isMean: true,
        title: '2 四大元素',
        childList: [{
          isMean: false,
          title: '2.1 bboy',
          url: 'http://www.baidu.com/'
        },{
          isMean: false,
          title: '2.2 涂鸦',
          url: 'http://www.baidu.com/'
        },{
          isMean: false,
          title: '2.3 说唱',
          url: 'http://www.baidu.com/'
        },{
          isMean: false,
          title: '2.4 DJ',
          url: 'http://www.baidu.com/'
        }]
      },{
        isMean: true,
        title: '3 物种分类',
        childList: [{
          isMean: false,
          title: '3.1 breaking',
          url: 'http://www.baidu.com/'
        },{
          isMean: false,
          title: '3.2 hiphop',
          url: 'http://www.baidu.com/'
        },{
          isMean: false,
          title: '3.3 poping',
          url: 'http://www.baidu.com/'
        },{
          isMean: false,
          title: '3.4 locking',
          url: 'http://www.baidu.com/'
        },{
          isMean: false,
          title: '3.5 jazz',
          url: 'http://www.baidu.com/'
        },{
          isMean: false,
          title: '3.6 其他',
          url: 'http://www.baidu.com/'
        }]
      }]
    },{
      isMean: true,
      title: '第二章 视频教学',
      childList: [{
        isMean: true,
        title: '1 综合基础',
        childList: [{
          isMean: false,
          title: '1.1 律动',
          url: 'http://www.baidu.com/'
        },{
          isMean: false,
          title: '1.2 热身',
          url: 'http://www.baidu.com/'
        },{
          isMean: false,
          title: '1.3 体能',
          url: 'http://www.baidu.com/'
        }]
      },{
        isMean: true,
        title: '2 breaking',
        childList: [{
          isMean: true,
          title: '2.1 toprack',
          childList: [{
            isMean: false,
            title: '2.1.1 等你完善',
            url: 'http://www.baidu.com/'
          },{
            isMean: false,
            title: '2.1.2 等你完善',
            url: 'http://www.baidu.com/'
          }]
        },{
          isMean: true,
          title: '2.2 footwork',
          childList: [{
            isMean: false,
            title: '2.2.1 等你完善',
            url: 'http://www.baidu.com/'
          },{
            isMean: false,
            title: '2.2.2 等你完善',
            url: 'http://www.baidu.com/'
          }]
        },{
          isMean: true,
          title: '2.3 freeze',
          childList: [{
            isMean: false,
            title: '2.3.1 等你完善',
            url: 'http://www.baidu.com/'
          },{
            isMean: false,
            title: '2.3.2 等你完善',
            url: 'http://www.baidu.com/'
          }]
        },{
          isMean: true,
          title: '2.4 powermove',
          childList: [{
            isMean: false,
            title: '2.4.1 水车',
            url: 'http://www.baidu.com/'
          },{
            isMean: true,
            title: '2.4.1 风车专项',
            childList: [{
              isMean: false,
              title: '2.4.1.1 基础风车',
              url: 'http://www.baidu.com/'
            },{
              isMean: false,
              title: '2.4.1.2 无手风车',
              url: 'http://www.baidu.com/'
            },{
              isMean: false,
              title: '2.4.1.3 垫脚风车',
              url: 'http://www.baidu.com/'
            },{
              isMean: false,
              title: '2.4.1.4 刷头',
              url: 'http://www.baidu.com/'
            },{
              isMean: false,
              title: '2.4.1.5 baby风车',
              url: 'http://www.baidu.com/'
            },{
              isMean: false,
              title: '2.4.1.6 其他',
              url: 'http://www.baidu.com/'
            }]
          },{
            isMean: true,
            title: '2.4.3 托马斯专项',
            childList: [{
              isMean: false,
              title: '2.4.1 等你完善',
              url: 'http://www.baidu.com/'
            },{
              isMean: false,
              title: '2.4.2 等你完善',
              url: 'http://www.baidu.com/'
            }]
          },{
            isMean: false,
            title: '2.4.2 等你完善',
            url: 'http://www.baidu.com/'
          }]
        },{
          isMean: false,
          title: '2.5 style',
          url: 'http://www.baidu.com/'
        }]
      },{
        isMean: true,
        title: '3 locking',
        childList: [{
          isMean: false,
          title: '3.1 等你完善',
          url: 'http://www.baidu.com/'
        },{
          isMean: false,
          title: '3.2 等你完善',
          url: 'http://www.baidu.com/'
        }]
      },{
        isMean: true,
        title: '4 hiphop',
        childList: [{
          isMean: false,
          title: '4.1 等你完善',
          url: 'http://www.baidu.com/'
        },{
          isMean: false,
          title: '4.2 等你完善',
          url: 'http://www.baidu.com/'
        }]
      }]
    },{
      isMean: true,
      title: '第三章 街舞常识',
      childList: [{
        isMean: true,
        title: '1 街舞比赛',
        childList: [{
          isMean: true,
          title: '1.1 综合赛事',
          childList: [{
            isMean: false,
            title: '1.1.1 WOD',
            url: 'http://www.baidu.com/'
          },{
            isMean: false,
            title: '1.1.2 KOD',
            url: 'http://www.baidu.com/'
          },{
            isMean: false,
            title: '1.1.3 R16',
            url: 'http://www.baidu.com/'
          }]
        },{
          isMean: true,
          title: '1.2 breaking专项赛',
          childList: [{
            isMean: false,
            title: '1.2.1 演舞会',
            url: 'http://www.baidu.com/'
          },{
            isMean: false,
            title: '1.2.2 BIS',
            url: 'http://www.baidu.com/'
          },{
            isMean: false,
            title: '1.2.4 炸舞阵线',
            url: 'http://www.baidu.com/'
          },{
            isMean: false,
            title: '1.2.4 BIG',
            url: 'http://www.baidu.com/'
          }]
        },{
          isMean: true,
          title: '1.3 poping专项赛',
          childList: [{
            isMean: false,
            title: '1.3.1 等你完善',
            url: 'http://www.baidu.com/'
          },{
            isMean: false,
            title: '1.3.2 等你完善',
            url: 'http://www.baidu.com/'
          }]
        },{
          isMean: true,
          title: '1.4 locaking专项赛',
          childList: [{
            isMean: false,
            title: '1.4.1 等你完善',
            url: 'http://www.baidu.com/'
          },{
            isMean: false,
            title: '1.4.2 等你完善',
            url: 'http://www.baidu.com/'
          }]
        },{
          isMean: true,
          title: '1.5 locking专项赛',
          childList: [{
            isMean: false,
            title: '1.5.1 等你完善',
            url: 'http://www.baidu.com/'
          },{
            isMean: false,
            title: '1.5.2 等你完善',
            url: 'http://www.baidu.com/'
          }]
        },{
          isMean: true,
          title: '1.6 hiphop专项赛',
          childList: [{
            isMean: false,
            title: '1.6.1 等你完善',
            url: 'http://www.baidu.com/'
          },{
            isMean: false,
            title: '1.6.2 等你完善',
            url: 'http://www.baidu.com/'
          }]
        },{
          isMean: true,
          title: '1.7 其他赛',
          childList: [{
            isMean: false,
            title: '1.7.1 等你完善',
            url: 'http://www.baidu.com/'
          },{
            isMean: false,
            title: '1.7.2 等你完善',
            url: 'http://www.baidu.com/'
          }]
        },]
      },{
        isMean: true,
        title: '2 圈内名人',
        childList: [{
          isMean: false,
          title: '2.1 等你完善',
          url: 'http://www.baidu.com/'
        },{
          isMean: false,
          title: '2.2 等你完善',
          url: 'http://www.baidu.com/'
        }]
      },{
        isMean: false,
        title: '3 常见名称',
        url: 'http://www.baidu.com/'
      }]
    },{
      isMean: false,
      title: '总结一波',
      url: 'http://www.baidu.com/'
    }]
  }
})