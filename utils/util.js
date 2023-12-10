var o = function(o) {
    return (o = o.toString())[1] ? o : "0".concat(o);
};

module.exports = {
    formatTime: function(t) {
        var i = t.getFullYear(), n = t.getMonth() + 1, a = t.getDate(), e = t.getHours(), r = t.getMinutes(), g = t.getSeconds();
        return "".concat([ i, n, a ].map(o).join("/"), " ").concat([ e, r, g ].map(o).join(":"));
    }
};

var t = function() {
    wx.hideLoading(), wx.hideNavigationBarLoading();
};

module.exports = {
    showLoading: function() {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "加载中...";
        wx.showNavigationBarLoading(), wx.showLoading({
            title: o
        });
    },
    hideLoading: t,
    hideLoadingWithErrorTips: function() {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "加载失败...";
        t(), wx.showToast({
            title: o,
            icon: "error",
            duration: 2e3
        });
    }
};