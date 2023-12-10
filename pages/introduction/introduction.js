var e = require("../../utils/util"), o = require("../../config.js");

Page({
    data: {
        seriesData: [],
        fileLink: ""
    },
    onLoad: function(e) {
        var n = this, a = {
            materialType: e.materialType,
            leverPressure: e.leverPressure,
            caliber: e.caliber
        };
        console.log(a), wx.request({
            url: o.SERVER_URL + "query/instructions",
            method: "POST",
            data: a,
            success: function(e) {
                for (var a = e.data.data, t = a.length, i = [], r = [], l = 0; l < t; l++) if (r[l] = a[l].status, 
                "启用" === r[l]) {
                    i[l] = {}, i[l].name = a[l].instructionName;
                    var s = a[l].LOAD_PATH.match(/"fileUrl":"(\S*)"}]}]/)[1];
                    i[l].url = o.RESOURCE_SERVER_URL + s, i[l].downloadName = a[l].downloadLink;
                }
                n.setData({
                    seriesData: i
                });
            },
            fail: function(e) {
                console.error("ERROR", e);
            }
        });
    },
    previewFile: function(n) {
        var a = n.currentTarget.dataset.downloadName, 
        t = o.SERVER_URL + "api/common/download?fileName=" + a;
        if (console.log(t), !t) return !1;
        e.showLoading(), wx.getSystemInfo({
            success: function(o) {
                console.log(o.platform), wx.downloadFile({
                    url: t,
                    filePath: wx.env.USER_DATA_PATH + "/" + a,
                    success: function(o) {
                        console.log(o, "wx.downloadFile success res");
                        var n = o.filePath;
                        if (200 != o.statusCode) return e.hideLoadingWithErrorTips(), !1;
                        wx.openDocument({
                            filePath: n,
                            showMenu: !0,
                            success: function(o) {
                                console.log("打开文档成功"), e.hideLoading();
                            },
                            fail: function(e) {
                                console.log("1111111"), console.log("打开文档失败");
                            }
                        });
                    },
                    fail: function(o) {
                        console.log(o, "wx.downloadFile fail err"), e.hideLoadingWithErrorTips();
                    }
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});