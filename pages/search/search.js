var e = require("../../config.js");

Page({
    data: {
        optionsOrderNum: [],
        selectedOrderNum: "请选择生产订单号",
        selectedOrderID: "",
        optionsProductName: [],
        selectedProductName: "请选择生产令号",
        selectedProductID: "",
        optionsSerialName: [],
        selectedSerialName: "请选择系列号",
        selectedSerialID: "",
        value: [],
        seriesData: []
    },
    handleOrderNumChange: function(a) {
        var t = this, o = a.detail.value, r = this.data.optionsOrderNum[o].value, s = this.data.optionsOrderNum[o].name;
        this.setData({
            selectedOrderNum: s,
            selectedOrderID: r
        }), console.log(this.data.selectedOrderID);
        var n = {
            T_ORDER_ID1: this.data.selectedOrderID
        };
        wx.request({
            url: e.SERVER_URL + "query/allproductid",
            method: "POST",
            data: n,
            success: function(e) {
                for (var a = e.data.data, o = a.length, r = [], s = 0; s < o; s++) r[s] = {}, r[s].name = a[s].PRODUCT_NAME, 
                r[s].value = a[s].T_PRODUCT_ID;
                t.setData({
                    optionsProductName: r
                });
            },
            fail: function(e) {
                console.error("ERROR", e);
            }
        });
    },
    handleProductNameChange: function(a) {
        var that = this, o = a.detail.value, r = this.data.optionsProductName[o].value, s = this.data.optionsProductName[o].name;
        
        that.setData({
            selectedProductName: s,
            selectedProductID: r
        }), 
        console.log(this.data.selectedProductID);
        var n = {
            T_PRODUCT_ID: this.data.selectedProductID
        };
        wx.request({
            url: e.SERVER_URL + "query/allserialid",
            method: "POST",
            data: n,
            success: function(e) {
                for (var a = e.data.data, o = a.length, r = [], s = 0; s < o; s++) r[s] = {}, r[s].name = a[s].SERIAL_NAME, 
                r[s].value = a[s].T_PRODUCT_ID;
                t.setData({
                    optionsSerialName: r
                });
            },
            fail: function(e) {
                console.error("ERROR", e);
            }
        });
    },
    handleSerialNameChange: function(a) {
        var t = this, o = a.detail.value, r = this.data.optionsSerialName[o].value, s = this.data.optionsSerialName[o].name;
        this.setData({
            selectedSerialName: s,
            selectedSerialID: r
        }), console.log(this.data.selectedSerialName);
        var n = {
            SERIAL_NAME: this.data.selectedSerialName
        };
        wx.request({
            url: e.SERVER_URL + "query/productinfo",
            method: "POST",
            data: n,
            success: function(e) {
                var a = e.data.data, o = [];
                o[0] = {}, o[0].series = a.SERIAL_NAME, o[0].prodesc = a.PRODUCT_DES, t.setData({
                    seriesData: o
                });
            },
            fail: function(e) {
                console.error("ERROR", e);
            }
        });
    },
    jumpValue: function() {
        wx.navigateTo({
            url: "/pages/values/values"
        });
    },
    onLoad: function(a) {
        var t = this;
        wx.request({
            url: e.SERVER_URL + "query/order",
            method: "POST",
            success: function(e) {
                for (var a = e.data.data, o = a.length, r = [], s = 0; s < o; s++) r[s] = {}, r[s].name = a[s].ORDER_NUM, 
                r[s].value = a[s].T_ORDER_ID;
                t.setData({
                    optionsOrderNum: r
                });
            },
            fail: function(e) {
                console.error("ERROR", e);
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