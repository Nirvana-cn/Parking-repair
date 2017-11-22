//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    items: [{
      id: 10001,
      location: '浙江理工大学'
    }, {
      id: 10002,
      location: '浙江警官学院'
    }],
    loadData: ''
  },
  onLoad: function () {
    wx.request({
      url: 'http://120.25.200.217:8080/IparkingWeb/Repair.action',
      data: {
        
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  checkboxChange(res) {
    console.log(res.detail.value)
    this.data.loadData = res.detail.value
    console.log(this.data.loadData)
  },
  repair() {
    let str = JSON.stringify(this.data.loadData)
    wx.request({
      url: 'http://120.25.200.217:8080/IparkingWeb/Repair.action',
      data: {
        sid: str,
        reason: '111'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  }
})
