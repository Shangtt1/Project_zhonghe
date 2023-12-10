var e = require("../../config.js");

Page({
    data: {
        companyName: "中核苏阀科技实业股份有限公司",
        orderContractId: "",
        orderNumber: "",
        productPicId: "",
        connectPipeId: "",
        customerPicId: "",
        customerId: "",
        productNum: "",
        ProductDes: "",
        serialName: "",
        number: "",
        productionDate: "",
        instructionType: "",
        materialType: "",
        materialCode: "",
        leverPressure: "",
        caliber: ""
    },
    onLoad: function(o) {
        var r = this;
        console.log("onLoad"), console.log(o);
        var n = {
            SERIAL_NAME: o.SERIAL_NAME
        };
        wx.request({
            url: e.SERVER_URL + "query/productinfo",
            method: "POST",
            data: n,
            success: function(e) {
                var o = e.data.data;
                console.log(o), null === o ? (wx.showToast({
                    title: "无此系列号"
                }), wx.navigateTo({
                    url: "/pages/search/search"
                })) : r.setData({
                    orderContractId: o.ORDER_CONTRACT_ID,
                    orderNumber: o.ORDER_NUMBER,
                    productPicId: o.PRODUCT_PIC_ID,
                    connectPipeId: o.CONNECT_PIPE_ID,
                    customerPicId: o.CUSTOMER_PIC_ID,
                    customerId: o.CUSTOMER_ID,
                    productNum: o.PRODUCT_NAME,
                    ProductDes: o.PRODUCT_DES,
                    serialName: o.SERIAL_NAME,
                    number: o.NUMBER,
                    instructionType: o.INSTRUCTION_TYPE,
                    materialType: o.MATERIAL_TYPE,
                    materialCode: o.MATERIAL_CODE,
                    leverPressure: o.LEVER_PRESSURE,
                    caliber: o.CALIBER
                });
            },
            fail: function(e) {
                console.error("ERROR", e);
            }
        });
    },
    jumpSearch: function() {
        wx.navigateTo({
            url: "/pages/search/search"
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