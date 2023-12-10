var e = require("../../utils/util"),
  o = require("../../config.js");

Page({
  data: {
    seriesData: [],
    fileLink: "",
    fileName: ''
  },
  onLoad: function (e) {
    // console.log(e);
    var n = this,
      a = {
        productNum: e.productNum
      };
    console.log(a),
      wx.request({
        url: o.SERVER_URL + "quality/getQualityRecord?fileName=" + e.productNum,
        method: "GET",
        success: function (e) {
          for (var a = e.data.data.list, t = e.data.data.size, i = [], l = 0; l < t; l++) {
            i[l] = {},
              i[l].fileName = a[l].fileName;
            i[l].fileUrl = a[l].fileUrl;
          }
          n.setData({
            seriesData: i
          });
        },
        fail: function (e) {
          console.error("ERROR", e);
        }
      });
  },
  previewFile: function (n) {
    var a = n.currentTarget.dataset.downloadName,
      t = o.SERVER_URL + "quality/download?fileName=" + a;
    console.log(t);
    if (console.log(t), !t) return !1;
    e.showLoading(),
      wx.getSystemInfo({
        success: function (o) {
          console.log(o.platform),
            wx.downloadFile({
              url: t,
              filePath: wx.env.USER_DATA_PATH + "/" + a,
              success: function (o) {
                console.log(o, "wx.downloadFile success res");
                var n = o.filePath;
                if (200 != o.statusCode) return e.hideLoadingWithErrorTips(), !1;
                wx.openDocument({
                  filePath: n,
                  showMenu: !0,
                  success: function (o) {
                    console.log("打开文档成功"), e.hideLoading();
                  },
                  fail: function (e) {
                    console.log("1111111"), console.log("打开文档失败");
                  }
                });
              },
              fail: function (o) {
                console.log(o, "wx.downloadFile fail err"), e.hideLoadingWithErrorTips();
              }
            });
        }
      });
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {}
});