var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// miniprogram-demo/miniprogram/packageCloud/pages/scf-openapi/scf-openapi.wxml
var require_scf_openapi = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/scf-openapi/scf-openapi.wxml"() {
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/scf-openapi/scf-openapi.wxss
var require_scf_openapi2 = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/scf-openapi/scf-openapi.wxss"(exports, module) {
    module.exports = "";
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/scf-openapi/scf-openapi.js
var require_scf_openapi3 = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/scf-openapi/scf-openapi.js"() {
    require_scf_openapi();
    require_scf_openapi2();
    Page({
      onShareAppMessage() {
        return {
          title: "\u4E91\u51FD\u6570\u4E2D\u4F7F\u7528\u5FAE\u4FE1\u5F00\u653E\u80FD\u529B",
          path: "page/cloud/pages/scf-openapi/scf-openapi"
        };
      },
      data: {
        sendTemplateMessageResult: "",
        sendTemplateMessageError: false,
        getWXACodeResult: "",
        getWXACodeError: false,
        sendTemplateMessageLoading: false,
        getWXACodeLoading: false,
        theme: "light"
      },
      onLoad() {
        this.setData({
          theme: wx.getSystemInfoSync().theme || "light"
        });
        if (wx.onThemeChange) {
          wx.onThemeChange(({ theme }) => {
            this.setData({ theme });
          });
        }
      },
      sendTemplateMessageViaCloudFunction(e) {
        this.setData({
          sendTemplateMessageResult: "",
          sendTemplateMessageError: false,
          sendTemplateMessageLoading: true
        });
        wx.cloud.callFunction({
          name: "openapi",
          data: {
            action: "sendTemplateMessage",
            formId: e.detail.formId
          }
        }).then((res) => {
          this.setData({
            sendTemplateMessageResult: res,
            sendTemplateMessageLoading: false
          });
          console.log("[\u4E91\u8C03\u7528] [\u53D1\u9001\u6A21\u677F\u6D88\u606F] \u6210\u529F: ", res);
        }).catch((err) => {
          this.setData({
            sendTemplateMessageError: true,
            sendTemplateMessageLoading: false
          });
          console.error("[\u4E91\u8C03\u7528] [\u53D1\u9001\u6A21\u677F\u6D88\u606F] \u5931\u8D25: ", err);
        });
      },
      getWXACodeViaCloudFunction() {
        this.setData({
          getWXACodeResult: "",
          getWXACodeError: false,
          getWXACodeLoading: true
        });
        wx.cloud.callFunction({
          name: "openapi",
          data: {
            action: "getWXACode"
          }
        }).then((res) => {
          this.setData({
            getWXACodeResult: res,
            getWXACodeLoading: false
          });
          console.log("[\u4E91\u8C03\u7528] [\u83B7\u53D6\u5C0F\u7A0B\u5E8F\u7801]] \u6210\u529F: ", res);
        }).catch((err) => {
          this.setData({
            getWXACodeError: true,
            getWXACodeLoading: false
          });
          console.error("[\u4E91\u8C03\u7528] [\u83B7\u53D6\u5C0F\u7A0B\u5E8F\u7801] \u5931\u8D25: ", err);
        });
      },
      queryServerDataViaClient() {
        const db = wx.cloud.database();
        this.setData({
          clientLoading: true,
          serverDataClient: "",
          serverDataClientError: false
        });
        db.collection("perm4").where({
          _openid: "server"
        }).get({
          success: (res) => {
            const resFirstData = res.data && res.data[0] || {};
            this.setData({
              serverDataClient: resFirstData.data
            });
            console.log("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u6210\u529F: ", res);
          },
          fail: (err) => {
            this.setData({
              serverDataClientError: true
            });
            console.error("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u5931\u8D25\uFF1A", err);
          },
          complete: () => {
            this.setData({
              clientLoading: false
            });
          }
        });
      },
      queryServerDataViaCloudFunction() {
        this.setData({
          cloudLoading: true,
          serverDataCloud: "",
          serverDataCloudError: false
        });
        wx.cloud.callFunction({
          name: "getServerDataDemo",
          data: {},
          success: (res) => {
            console.log("[\u4E91\u51FD\u6570] [getServerDataDemo] res: ", res.result);
            const resFirstData = res.result.data && res.result.data[0] || {};
            this.setData({
              serverDataCloud: resFirstData.data
            });
          },
          fail: (err) => {
            this.setData({
              serverDataCloudError: true
            });
            console.error("[\u4E91\u51FD\u6570] [getServerDataDemo] \u8C03\u7528\u5931\u8D25", err);
          },
          complete: () => {
            this.setData({
              cloudLoading: false
            });
          }
        });
      }
    });
  }
});

// <stdin>
require_scf_openapi3();
