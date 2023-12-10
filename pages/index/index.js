getApp();

Page({
    data: {
        motto: "",
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        canIUseGetUserProfile: !1,
        canIUseOpenData: wx.canIUse("open-data.type.userAvatarUrl") && wx.canIUse("open-data.type.userNickName"),
        scanCodeResult: ""
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    onLoad: function() {
        wx.getUserProfile && this.setData({
            canIUseGetUserProfile: !0
        });
    },
    handleScan: function() {
        var e = this;
        wx.scanCode({
            success: function(s) {
                e.setData({
                    scanCodeResult: s.result
                }), wx.navigateTo({
                    url: "/pages/putIn/putIn?SERIAL_NAME=" + s.result
                });
            }
        });
    },
    handleScan2: function() {
        wx.scanCode({
            success: function(e) {
                wx.setStorageSync("scanResult", e.result), wx.miniProgram.navigateTo({
                    url: "/pages/webpages2/webpages2?result=" + e.result
                }), console.log(e.result);
            }
        });
    },
    jumpValues: function() {
        wx.navigateTo({
            url: "/pages/values/values"
        });
    },
    jumpSearch: function() {
        wx.navigateTo({
            url: "/pages/search/search"
        });
    },
    jumpIntro: function() {
        wx.navigateTo({
            url: "/pages/pdf/pdf"
        });
    },
    getUserProfile: function(e) {
        var s = this;
        wx.getUserProfile({
            desc: "展示用户信息",
            success: function(e) {
                console.log(e), s.setData({
                    userInfo: e.userInfo,
                    hasUserInfo: !0
                });
            }
        });
    },
    getUserInfo: function(e) {
        console.log(e), this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: !0
        });
    }
});