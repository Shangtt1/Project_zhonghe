Page({
    data: {
        src: "http://139.196.87.72:6088/valveDetails"
    },
    onLoad: function(n) {
        var o = n.SERIAL_NAME;
        console.log(o);
        Object.keys(n) && Object.keys(n).length > 0 && n.SERIAL_NAME && this.setData({
            src: this.data.src + "?SERIAL_NAME=" + n.SERIAL_NAME,
            isNetError: !1
        }), console.log(this.data.src);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});