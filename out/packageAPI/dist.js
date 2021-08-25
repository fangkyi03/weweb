var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// miniprogram-demo/miniprogram/config.js
var require_config = __commonJS({
  "miniprogram-demo/miniprogram/config.js"(exports2, module2) {
    var host = "14592619.qcloud.la";
    var config = {
      requestUrl: "https://mp.weixin.qq.com",
      host,
      envId: "release-b86096",
      demoImageFileId: "cloud://release-b86096.7265-release-b86096-1258211818/demo.jpg",
      demoVideoFileId: "cloud://release-b86096.7265-release-b86096/demo.mp4"
    };
    module2.exports = config;
  }
});

// miniprogram-demo/miniprogram/app.js
var require_app = __commonJS({
  "miniprogram-demo/miniprogram/app.js"() {
    window["__pages__"] = ["pages/login/login", "pages/get-user-info/get-user-info", "pages/request-payment/request-payment", "pages/share/share", "pages/share-button/share-button", "pages/custom-message/custom-message", "pages/template-message/template-message", "pages/set-navigation-bar-title/set-navigation-bar-title", "pages/navigation-bar-loading/navigation-bar-loading", "pages/navigator/navigator", "pages/pull-down-refresh/pull-down-refresh", "pages/animation/animation", "pages/action-sheet/action-sheet", "pages/modal/modal", "pages/toast/toast", "pages/get-network-type/get-network-type", "pages/on-network-status-change/on-network-status-change", "pages/get-system-info/get-system-info", "pages/on-compass-change/on-compass-change", "pages/make-phone-call/make-phone-call", "pages/scan-code/scan-code", "pages/request/request", "pages/web-socket/web-socket", "pages/upload-file/upload-file", "pages/download-file/download-file", "pages/image/image", "pages/voice/voice", "pages/file/file", "pages/on-accelerometer-change/on-accelerometer-change", "pages/canvas/canvas", "pages/background-audio/background-audio", "pages/video/video", "pages/get-location/get-location", "pages/open-location/open-location", "pages/choose-location/choose-location", "pages/storage/storage", "pages/get-wxml-node-info/get-wxml-node-info", "pages/load-font-face/load-font-face", "pages/clipboard-data/clipboard-data", "pages/bluetooth/bluetooth", "pages/screen-brightness/screen-brightness", "pages/vibrate/vibrate", "pages/add-contact/add-contact", "pages/wifi/wifi", "pages/page-scroll/page-scroll", "pages/intersection-observer/intersection-observer", "pages/capture-screen/capture-screen", "pages/worker/worker", "pages/ibeacon/ibeacon", "pages/choose-address/choose-address", "pages/setting/setting", "pages/choose-invoice-title/choose-invoice-title", "pages/soter-authentication/soter-authentication", "pages/subscribe-message/subscribe-message", "pages/doc-web-view/doc-web-view", "pages/audio/audio", "pages/get-battery-info/get-battery-info", "pages/get-performance/get-performance", "pages/mdns/mdns", "pages/udp-socket/udp-socket", "pages/two-way-bindings/two-way-bindings", "pages/media-container/media-container", "pages/get-background-fetch-data/get-background-fetch-data", "pages/get-background-prefetch-data/get-background-prefetch-data", "pages/wxs/wxs", "pages/bluetooth/slave/slave", "pages/resizable/resizable", "pages/wxs/movable", "pages/wxs/sidebar", "pages/wxs/stick-top", "pages/wxs/nearby"];
    var config = require_config();
    var themeListeners = [];
    global.isDemo = true;
    App({
      onLaunch(opts, data) {
        const that = this;
        const canIUseSetBackgroundFetchToken = wx.canIUse("setBackgroundFetchToken");
        if (canIUseSetBackgroundFetchToken) {
          wx.setBackgroundFetchToken({
            token: "getBackgroundFetchToken"
          });
        }
        if (wx.getBackgroundFetchData) {
          wx.getBackgroundFetchData({
            fetchType: "pre",
            success(res2) {
              that.globalData.backgroundFetchData = res2;
              console.log("\u8BFB\u53D6\u9884\u62C9\u53D6\u6570\u636E\u6210\u529F");
            },
            fail() {
              console.log("\u8BFB\u53D6\u9884\u62C9\u53D6\u6570\u636E\u5931\u8D25");
              wx.showToast({
                title: "\u65E0\u7F13\u5B58\u6570\u636E",
                icon: "none"
              });
            },
            complete() {
              console.log("\u7ED3\u675F\u8BFB\u53D6");
            }
          });
        }
        console.log("App Launch", opts);
        if (data && data.path) {
          wx.navigateTo({
            url: data.path
          });
        }
        if (!wx.cloud) {
          console.error("\u8BF7\u4F7F\u7528 2.2.3 \u6216\u4EE5\u4E0A\u7684\u57FA\u7840\u5E93\u4EE5\u4F7F\u7528\u4E91\u80FD\u529B");
        } else {
          wx.cloud.init({
            env: config.envId,
            traceUser: true
          });
        }
      },
      onShow(opts) {
        console.log("App Show", opts);
      },
      onHide() {
        console.log("App Hide");
      },
      onThemeChange({ theme }) {
        this.globalData.theme = theme;
        console.log("\u8F93\u51FA");
        themeListeners.forEach((listener) => {
          listener(theme);
        });
      },
      watchThemeChange(listener) {
        if (themeListeners.indexOf(listener) < 0) {
          themeListeners.push(listener);
        }
      },
      unWatchThemeChange(listener) {
        const index = themeListeners.indexOf(listener);
        if (index > -1) {
          themeListeners.splice(index, 1);
        }
      },
      globalData: {
        theme: wx.getSystemInfoSync().theme,
        hasLogin: false,
        openid: null,
        iconTabbar: "/page/weui/example/images/icon_tabbar.png"
      },
      getUserOpenId(callback) {
        const self = this;
        if (self.globalData.openid) {
          callback(null, self.globalData.openid);
        } else {
          wx.login({
            success(data) {
              wx.cloud.callFunction({
                name: "login",
                data: {
                  action: "openid"
                },
                success: (res2) => {
                  console.log("\u62C9\u53D6openid\u6210\u529F", res2);
                  self.globalData.openid = res2.result.openid;
                  callback(null, self.globalData.openid);
                },
                fail: (err) => {
                  console.log("\u62C9\u53D6\u7528\u6237openid\u5931\u8D25\uFF0C\u5C06\u65E0\u6CD5\u6B63\u5E38\u4F7F\u7528\u5F00\u653E\u63A5\u53E3\u7B49\u670D\u52A1", res);
                  callback(res);
                }
              });
            },
            fail(err) {
              console.log("wx.login \u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF0C\u5C06\u65E0\u6CD5\u6B63\u5E38\u4F7F\u7528\u5F00\u653E\u63A5\u53E3\u7B49\u670D\u52A1", err);
              callback(err);
            }
          });
        }
      },
      getUserOpenIdViaCloud() {
        return wx.cloud.callFunction({
          name: "wxContext",
          data: {}
        }).then((res2) => {
          this.globalData.openid = res2.result.openid;
          return res2.result.openid;
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/common/head.wxml
var require_head = __commonJS({
  "miniprogram-demo/miniprogram/common/head.wxml"() {
    Vue.component("head", {
      props: ["data"],
      data() {
        return this["$props"].data;
      },
      template: `<div>
  
    {{title}}
    
    {{desc}}
  
</div>`
    });
  }
});

// miniprogram-demo/miniprogram/common/foot.wxml
var require_foot = __commonJS({
  "miniprogram-demo/miniprogram/common/foot.wxml"() {
    Vue.component("foot", {
      props: ["data"],
      data() {
        return this["$props"].data;
      },
      template: `<div>
  
    
  
</div>`
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/login/login.wxml
var require_login = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/login/login.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/login/login");
    page2.template = `



  
        <head :data="{title: 'Login'}" >
            

  
    
      
        <div v-if="{hasLogin === true}" >
            
        \u5DF2\u767B\u5F55
        \u6BCF\u4E2A\u5FAE\u4FE1\u53F7\u4E2D\u4EC5\u9700\u767B\u5F55 1 \u6B21\uFF0C\u540E\u7EED\u6BCF\u6B21\u8FDB\u5165\u9875\u9762\u5373\u53EF\u6839\u636E\u5FAE\u4FE1 id \u81EA\u52A8\u62C9\u53D6\u7528\u6237\u4FE1\u606F
      
        </div>
    
      
        <div v-if="{hasLogin === false}" >
            
        \u6BCF\u4E2A\u5FAE\u4FE1\u53F7\u4E2D\u4EC5\u9700\u767B\u5F55\u4E00\u6B21
        \u5FAE\u4FE1\u767B\u5F55
      
        </div>
    
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/login/login.js
var require_login2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/login/login.js"() {
    require_login();
    window["__wxRoute"] = "packageAPI/pages/login/login";
    var page2 = getPage("packageAPI/pages/login/login");
    page2.json = `{
    "navigationBarTitleText": "\u5FAE\u4FE1\u767B\u5F55"
}
`;
    var app = getApp();
    Page({
      onShareAppMessage() {
        return {
          title: "\u5FAE\u4FE1\u767B\u5F55",
          path: "package/API/pages/login/login"
        };
      },
      onLoad() {
        this.setData({
          hasLogin: app.globalData.hasLogin
        });
      },
      data: {},
      login() {
        const that = this;
        wx.login({
          success() {
            app.globalData.hasLogin = true;
            that.setData({
              hasLogin: true
            });
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-user-info/get-user-info.wxml
var require_get_user_info = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-user-info/get-user-info.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/get-user-info/get-user-info");
    page2.template = `



  
        <head :data="{title: 'getUserInfo'}" >
            

  
    
      
        \u7528\u6237\u4FE1\u606F
        
        <div v-if="{hasUserInfo === false}" >
            
          \u672A\u83B7\u53D6
          \u70B9\u51FB\u7EFF\u8272\u6309\u94AE\u53EF\u83B7\u53D6\u7528\u6237\u5934\u50CF\u53CA\u6635\u79F0
        
        </div>
    
        
        <div v-if="{hasUserInfo === true}" >
            
          
          {{userInfo.nickName}}
        
        </div>
    
      
      
        \u83B7\u53D6\u7528\u6237\u4FE1\u606F
        \u6E05\u7A7A
      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-user-info/get-user-info.js
var require_get_user_info2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-user-info/get-user-info.js"() {
    require_get_user_info();
    window["__wxRoute"] = "packageAPI/pages/get-user-info/get-user-info";
    var page2 = getPage("packageAPI/pages/get-user-info/get-user-info");
    page2.json = `{
    "navigationBarTitleText": "\u83B7\u53D6\u7528\u6237\u4FE1\u606F"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u83B7\u53D6\u7528\u6237\u4FE1\u606F",
          path: "packageAPI/pages/get-user-info/get-user-info"
        };
      },
      data: {
        hasUserInfo: false
      },
      getUserInfo(info) {
        const userInfo = info.detail.userInfo;
        this.setData({
          userInfo,
          hasUserInfo: true
        });
      },
      clear() {
        this.setData({
          hasUserInfo: false,
          userInfo: {}
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/request-payment/request-payment.wxml
var require_request_payment = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/request-payment/request-payment.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/request-payment/request-payment");
    page2.template = `



  
        <head :data="{title: 'requestPayment'}" >
            

  
    
      \u652F\u4ED8\u91D1\u989D
      0.01
      \u5B9E\u9645\u63A5\u53E3\u5E94\u7528\u4E2D\u53EF\u81EA\u5B9A\u4E49\u91D1\u989D
      
        \u652F\u4ED8
      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/request-payment/request-payment.js
var require_request_payment2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/request-payment/request-payment.js"() {
    require_request_payment();
    window["__wxRoute"] = "packageAPI/pages/request-payment/request-payment";
    var page2 = getPage("packageAPI/pages/request-payment/request-payment");
    page2.json = `{
    "navigationBarTitleText": "\u53D1\u8D77\u652F\u4ED8"
}
`;
    var app = getApp();
    Page({
      onShareAppMessage() {
        return {
          title: "\u53D1\u8D77\u652F\u4ED8",
          path: "packageAPI/pages/request-payment/request-payment"
        };
      },
      onLoad() {
      },
      requestPayment() {
        const self = this;
        self.setData({
          loading: true
        });
        app.getUserOpenId(function(err, openid) {
          if (!err) {
            wx.cloud.callFunction({
              name: "pay",
              data: {
                action: "unifiedorder",
                userInfo: {
                  openId: openid
                },
                price: 0.01
              },
              success: (res2) => {
                console.warn("[\u4E91\u51FD\u6570] [openapi] templateMessage.send \u8C03\u7528\u6210\u529F\uFF1A", res2);
                const data = res2.result.data;
                wx.requestPayment({
                  timeStamp: data.time_stamp,
                  nonceStr: data.nonce_str,
                  package: `prepay_id=${data.prepay_id}`,
                  signType: "MD5",
                  paySign: data.sign,
                  success: () => {
                    wx.showToast({ title: "\u652F\u4ED8\u6210\u529F" });
                  }
                });
              },
              fail: (err2) => {
                wx.showToast({
                  icon: "none",
                  title: "\u652F\u4ED8\u5931\u8D25"
                });
                console.error("[\u4E91\u51FD\u6570] [openapi] templateMessage.send \u8C03\u7528\u5931\u8D25\uFF1A", err2);
              }
            });
          } else {
            console.log("err:", err);
            self.setData({
              loading: false
            });
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/share/share.wxml
var require_share = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/share/share.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/share/share");
    page2.template = `



  
        <head :data="{title: 'onShareAppMessage'}" >
            

  
    \u53D1\u9001\u5185\u5BB9\uFF08\u4EE5\u4E0B\u5B57\u6BB5\u53EF\u81EA\u7531\u9002\u914D\uFF09
    
      
        
          \u6807\u9898
        
        
          
        
      
      
        
          \u63CF\u8FF0
        
        
          
        
      
      
        
          \u8DF3\u8F6C\u9875\u9762
        
        
          
        
      
    
    \u70B9\u51FB\u53F3\u4E0A\u89D2\u83DC\u5355\u8F6C\u53D1\u7ED9\u597D\u53CB
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/share/share.js
var require_share2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/share/share.js"() {
    require_share();
    window["__wxRoute"] = "packageAPI/pages/share/share";
    var page2 = getPage("packageAPI/pages/share/share");
    page2.json = `{
    "navigationBarTitleText": "\u8F6C\u53D1"
}
`;
    Page({
      data: {
        shareData: {
          title: "\u81EA\u5B9A\u4E49\u8F6C\u53D1\u6807\u9898",
          desc: "\u81EA\u5B9A\u4E49\u8F6C\u53D1\u63CF\u8FF0",
          path: "packageAPI/pages/share/share"
        }
      },
      onShareAppMessage() {
        return this.data.shareData;
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/share-button/share-button.wxml
var require_share_button = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/share-button/share-button.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/share-button/share-button");
    page2.template = `



  
        <head :data="{title: 'share-button'}" >
            

  
    
      
        \u8F7B\u89E6\u4E0B\u65B9\u56FE\u6807\u5373\u53EF\u8F6C\u53D1
      
      
        
        
        
      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/share-button/share-button.js
var require_share_button2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/share-button/share-button.js"() {
    require_share_button();
    window["__wxRoute"] = "packageAPI/pages/share-button/share-button";
    var page2 = getPage("packageAPI/pages/share-button/share-button");
    page2.json = `{
    "navigationBarTitleText": "\u8F6C\u53D1\u6309\u94AE"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u8F6C\u53D1\u6309\u94AE",
          path: "packageAPI/pages/share-button/share-button"
        };
      },
      handleTapShareButton() {
        if (!(typeof wx.canIUse === "function" && wx.canIUse("button.open-type.share"))) {
          wx.showModal({
            title: "\u5F53\u524D\u7248\u672C\u4E0D\u652F\u6301\u8F6C\u53D1\u6309\u94AE",
            content: "\u8BF7\u5347\u7EA7\u81F3\u6700\u65B0\u7248\u672C\u5FAE\u4FE1\u5BA2\u6237\u7AEF",
            showCancel: false
          });
        }
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/custom-message/custom-message.wxml
var require_custom_message = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/custom-message/custom-message.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/custom-message/custom-message");
    page2.template = `



  
        <head :data="{title: 'customMessage'}" >
            

  
    
      
        \u70B9\u51FB\u6C14\u6CE1icon\u6253\u5F00\u5BA2\u670D\u6D88\u606F\u754C\u9762
      
      
        
      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/custom-message/custom-message.js
var require_custom_message2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/custom-message/custom-message.js"() {
    require_custom_message();
    window["__wxRoute"] = "packageAPI/pages/custom-message/custom-message";
    var page2 = getPage("packageAPI/pages/custom-message/custom-message");
    page2.json = `{
    "navigationBarTitleText": "\u5BA2\u670D\u6D88\u606F"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u5BA2\u670D\u6D88\u606F",
          path: "packageAPI/pages/custom-message/custom-message"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/template-message/template-message.wxml
var require_template_message = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/template-message/template-message.wxml"() {
    require_head();
    require_foot();
    Vue.component("address", {
      props: ["data"],
      data() {
        return this["$props"].data;
      },
      template: `<div></div>`
    });
    Vue.component("time", {
      props: ["data"],
      data() {
        return this["$props"].data;
      },
      template: `<div></div>`
    });
    Vue.component("name", {
      props: ["data"],
      data() {
        return this["$props"].data;
      },
      template: `<div></div>`
    });
    Vue.component("serial", {
      props: ["data"],
      data() {
        return this["$props"].data;
      },
      template: `<div></div>`
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/template-message/template-message.js
var require_template_message2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/template-message/template-message.js"() {
    require_template_message();
    window["__wxRoute"] = "packageAPI/pages/template-message/template-message";
    var page2 = getPage("packageAPI/pages/template-message/template-message");
    page2.json = `{
    "navigationBarTitleText": "\u6A21\u677F\u6D88\u606F"
}
`;
    var templateMessageUrl = require_config().templateMessageUrl;
    var app = getApp();
    var formData = {
      address: "T.I.T \u9020\u8230\u5382",
      time: "2017.01.09",
      name: "\u5E1D\u56FD\u6B7C\u661F\u8230",
      serial: "123456789"
    };
    Page({
      onShareAppMessage() {
        return {
          title: "\u6A21\u677F\u6D88\u606F",
          path: "packageAPI/pages/template-message/template-message"
        };
      },
      onLoad() {
        this.setData({
          formData
        });
      },
      submitForm(e) {
        const self = this;
        const { formId } = e.detail;
        const formData2 = e.detail.value;
        console.log("form_id is:", formId);
        self.setData({
          loading: true
        });
        app.getUserOpenId(function(err, openid) {
          if (!err) {
            wx.request({
              url: templateMessageUrl,
              method: "POST",
              data: {
                form_id: formId,
                openid,
                formData: formData2
              },
              success(res2) {
                console.log("submit form success", res2);
                wx.showToast({
                  title: "\u53D1\u9001\u6210\u529F",
                  icon: "success"
                });
                self.setData({
                  loading: false
                });
              },
              fail({ errMsg }) {
                console.log("submit form fail, errMsg is:", errMsg);
              }
            });
          } else {
            console.log("err:", err);
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/set-navigation-bar-title/set-navigation-bar-title.wxml
var require_set_navigation_bar_title = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/set-navigation-bar-title/set-navigation-bar-title.wxml"() {
    require_head();
    require_foot();
    Vue.component("title", {
      props: ["data"],
      data() {
        return this["$props"].data;
      },
      template: `<div></div>`
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/set-navigation-bar-title/set-navigation-bar-title.js
var require_set_navigation_bar_title2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/set-navigation-bar-title/set-navigation-bar-title.js"() {
    require_set_navigation_bar_title();
    window["__wxRoute"] = "packageAPI/pages/set-navigation-bar-title/set-navigation-bar-title";
    var page2 = getPage("packageAPI/pages/set-navigation-bar-title/set-navigation-bar-title");
    page2.json = `{
    "navigationBarTitleText": "\u8BBE\u7F6E\u9875\u9762\u6807\u9898"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u8BBE\u7F6E\u9875\u9762\u6807\u9898",
          path: "packageAPI/pages/set-navigation-bar-title/set-navigation-bar-title"
        };
      },
      setNaivgationBarTitle(e) {
        const title = e.detail.value.title;
        console.log(title);
        wx.setNavigationBarTitle({
          title,
          success() {
            console.log("setNavigationBarTitle success");
          },
          fail(err) {
            console.log("setNavigationBarTitle fail, err is", err);
          }
        });
        return false;
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/navigation-bar-loading/navigation-bar-loading.wxml
var require_navigation_bar_loading = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/navigation-bar-loading/navigation-bar-loading.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/navigation-bar-loading/navigation-bar-loading");
    page2.template = `



  
        <head :data="{title: 'navigationBarLoading'}" >
            

  
    
      \u663E\u793A\u52A0\u8F7D\u52A8\u753B
      \u9690\u85CF\u52A0\u8F7D\u52A8\u753B
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/navigation-bar-loading/navigation-bar-loading.js
var require_navigation_bar_loading2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/navigation-bar-loading/navigation-bar-loading.js"() {
    require_navigation_bar_loading();
    window["__wxRoute"] = "packageAPI/pages/navigation-bar-loading/navigation-bar-loading";
    var page2 = getPage("packageAPI/pages/navigation-bar-loading/navigation-bar-loading");
    page2.json = `{
    "navigationBarTitleText": "\u6807\u9898\u680F\u52A0\u8F7D\u52A8\u753B"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u6807\u9898\u680F\u52A0\u8F7D\u52A8\u753B",
          path: "packageAPI/pages/navigation-bar-loading/navigation-bar-loading"
        };
      },
      showNavigationBarLoading() {
        wx.showNavigationBarLoading();
      },
      hideNavigationBarLoading() {
        wx.hideNavigationBarLoading();
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/navigator/navigator.wxml
var require_navigator = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/navigator/navigator.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/navigator/navigator");
    page2.template = `



  
        <head :data="{title: 'navigateTo/Back, redirectTo'}" >
            

  
    
      \u8DF3\u8F6C\u65B0\u9875\u9762
      \u8FD4\u56DE\u4E0A\u4E00\u9875
      \u5728\u5F53\u524D\u9875\u9762\u6253\u5F00
      \u8DF3\u8F6C\u5230\u7EC4\u4EF6Tab\u9875
      \u5173\u95ED\u6240\u6709\u9875\u9762\u5E76\u8DF3\u8F6C
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/navigator/navigator.js
var require_navigator2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/navigator/navigator.js"() {
    require_navigator();
    window["__wxRoute"] = "packageAPI/pages/navigator/navigator";
    var page2 = getPage("packageAPI/pages/navigator/navigator");
    page2.json = `{
    "navigationBarTitleText": "\u9875\u9762\u8DF3\u8F6C"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u9875\u9762\u8DF3\u8F6C",
          path: "packageAPI/pages/navigator/navigator"
        };
      },
      navigateTo() {
        wx.navigateTo({ url: "./navigator" });
      },
      navigateBack() {
        wx.navigateBack();
      },
      redirectTo() {
        wx.redirectTo({ url: "./navigator" });
      },
      switchTab() {
        wx.switchTab({ url: "/page/component/index" });
      },
      reLaunch() {
        wx.reLaunch({ url: "/page/component/index" });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/pull-down-refresh/pull-down-refresh.wxml
var require_pull_down_refresh = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/pull-down-refresh/pull-down-refresh.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/pull-down-refresh/pull-down-refresh");
    page2.template = `



  
        <head :data="{title: 'on/stopPullDownRefresh'}" >
            

  
    
      
        \u4E0B\u6ED1\u9875\u9762\u5373\u53EF\u5237\u65B0
      
      
        \u505C\u6B62\u5237\u65B0
      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/pull-down-refresh/pull-down-refresh.js
var require_pull_down_refresh2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/pull-down-refresh/pull-down-refresh.js"() {
    require_pull_down_refresh();
    window["__wxRoute"] = "packageAPI/pages/pull-down-refresh/pull-down-refresh";
    var page2 = getPage("packageAPI/pages/pull-down-refresh/pull-down-refresh");
    page2.json = `{
    "navigationBarTitleText": "\u4E0B\u62C9\u5237\u65B0",
    "enablePullDownRefresh": true,
    "backgroundTextStyle": "@backgroundTextStyle"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u4E0B\u62C9\u5237\u65B0",
          path: "packageAPI/pages/pull-down-refresh/pull-down-refresh"
        };
      },
      onPullDownRefresh() {
        wx.showToast({
          title: "loading...",
          icon: "loading"
        });
        console.log("onPullDownRefresh", new Date());
      },
      stopPullDownRefresh() {
        wx.stopPullDownRefresh({
          complete(res2) {
            wx.hideToast();
            console.log(res2, new Date());
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/animation/animation.wxml
var require_animation = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/animation/animation.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/animation/animation");
    page2.template = `



  
        <head :data="{title: '\u5173\u952E\u5E27\u52A8\u753B'}" >
            

  
  
    
      \u5173\u952E\u5E27\u52A8\u753B

\u4ECE\u5C0F\u7A0B\u5E8F\u57FA\u7840\u5E93 2.9.0 \u5F00\u59CB\u652F\u6301\u4E00\u79CD\u66F4\u53CB\u597D\u7684\u52A8\u753B\u521B\u5EFA\u65B9\u5F0F\uFF0C\u7528\u4E8E\u4EE3\u66FF\u65E7\u7684 wx.createAnimation
      
    
      \u793A\u4F8B\u6309\u94AE
      \u793A\u4F8B\u8D85\u94FE\u63A5
      \u793A\u4F8B\u6587\u672C
    
    \u5F00\u542F\u52A8\u753B
  
  
  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/animation/animation.js
var require_animation2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/animation/animation.js"() {
    require_animation();
    window["__wxRoute"] = "packageAPI/pages/animation/animation";
    var page2 = getPage("packageAPI/pages/animation/animation");
    page2.json = `{
    "navigationBarTitleText": "\u52A8\u753B"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u52A8\u753B",
          path: "package/API/pages/animation/animation",
          containerStyle1: ""
        };
      },
      data: {
        canIUse: true
      },
      onLoad() {
        const canIUse = this.animate !== void 0;
        if (!canIUse) {
          wx.showModal({
            title: "\u5FAE\u4FE1\u7248\u672C\u8FC7\u4F4E\uFF0C\u6682\u4E0D\u652F\u6301\u672C\u529F\u80FD"
          });
          this.setData({
            canIUse
          });
        }
      },
      change: function() {
        this.animate("#container1", [
          { opacity: 1, rotate: 0, backgroundColor: "#FF0000" },
          { opacity: 0.5, rotate: 45, backgroundColor: "#00FF00", offset: 0.9 },
          { opacity: 0, rotate: 90, backgroundColor: "#FF0000" }
        ], 5e3, function() {
          this.clearAnimation("#container1", { opacity: true, rotate: true }, function() {
            console.log("\u6E05\u9664\u4E86#container\u4E0A\u7684\u52A8\u753B\u5C5E\u6027");
          });
        }.bind(this));
        this.animate(".block1", [
          { scale: [1, 1], rotate: 0, ease: "ease-out" },
          { scale: [1.5, 1.5], rotate: 45, ease: "ease-in", offset: 0.9 },
          { scale: [2, 2], rotate: 90 }
        ], 5e3, function() {
          this.clearAnimation(".block1", { scale: true, rotate: true }, function() {
            console.log("\u6E05\u9664\u4E86.block1\u4E0A\u7684\u52A8\u753B\u5C5E\u6027");
          });
        }.bind(this));
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/action-sheet/action-sheet.wxml
var require_action_sheet = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/action-sheet/action-sheet.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/action-sheet/action-sheet");
    page2.template = `



  
        <head :data="{title: 'action-sheet'}" >
            

  
    
      \u5F39\u51FAaction sheet
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/action-sheet/action-sheet.js
var require_action_sheet2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/action-sheet/action-sheet.js"() {
    require_action_sheet();
    window["__wxRoute"] = "packageAPI/pages/action-sheet/action-sheet";
    var page2 = getPage("packageAPI/pages/action-sheet/action-sheet");
    page2.json = `{
    "navigationBarTitleText": "\u64CD\u4F5C\u83DC\u5355"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u64CD\u4F5C\u83DC\u5355",
          path: "packageAPI/pages/action-sheet/action-sheet"
        };
      },
      actionSheetTap() {
        wx.showActionSheet({
          itemList: ["item1", "item2", "item3", "item4"],
          success(e) {
            console.log(e.tapIndex);
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/modal/modal.wxml
var require_modal = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/modal/modal.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/modal/modal");
    page2.template = `



  
        <head :data="{title: 'modal'}" >
            

  
    
      \u6709\u6807\u9898\u7684modal
      \u65E0\u6807\u9898\u7684modal
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/modal/modal.js
var require_modal2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/modal/modal.js"() {
    require_modal();
    window["__wxRoute"] = "packageAPI/pages/modal/modal";
    var page2 = getPage("packageAPI/pages/modal/modal");
    page2.json = `{
    "navigationBarTitleText": "\u6A21\u6001\u5F39\u7A97"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u6A21\u6001\u5F39\u7A97",
          path: "packageAPI/pages/modal/modal"
        };
      },
      data: {
        modalHidden: true,
        modalHidden2: true
      },
      modalTap() {
        wx.showModal({
          title: "\u5F39\u7A97\u6807\u9898",
          content: "\u5F39\u7A97\u5185\u5BB9\uFF0C\u544A\u77E5\u5F53\u524D\u72B6\u6001\u3001\u4FE1\u606F\u548C\u89E3\u51B3\u65B9\u6CD5\uFF0C\u63CF\u8FF0\u6587\u5B57\u5C3D\u91CF\u63A7\u5236\u5728\u4E09\u884C\u5185",
          showCancel: false,
          confirmText: "\u786E\u5B9A"
        });
      },
      noTitlemodalTap() {
        wx.showModal({
          content: "\u5F39\u7A97\u5185\u5BB9\uFF0C\u544A\u77E5\u5F53\u524D\u72B6\u6001\u3001\u4FE1\u606F\u548C\u89E3\u51B3\u65B9\u6CD5\uFF0C\u63CF\u8FF0\u6587\u5B57\u5C3D\u91CF\u63A7\u5236\u5728\u4E09\u884C\u5185",
          confirmText: "\u786E\u5B9A",
          cancelText: "\u53D6\u6D88"
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/toast/toast.wxml
var require_toast = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/toast/toast.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/toast/toast");
    page2.template = `



  
        <head :data="{title: 'toast'}" >
            

  
    
      
        \u70B9\u51FB\u5F39\u51FA\u9ED8\u8BA4toast
      
      
        \u70B9\u51FB\u5F39\u51FA\u8BBE\u7F6Eduration\u7684toast
      
      
        \u70B9\u51FB\u5F39\u51FA\u663E\u793Aloading\u7684toast
      
      
        \u70B9\u51FB\u9690\u85CFtoast
      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/toast/toast.js
var require_toast2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/toast/toast.js"() {
    require_toast();
    window["__wxRoute"] = "packageAPI/pages/toast/toast";
    var page2 = getPage("packageAPI/pages/toast/toast");
    page2.json = `{
    "navigationBarTitleText": "\u6D88\u606F\u63D0\u793A\u6846"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u6D88\u606F\u63D0\u793A\u6846",
          path: "packageAPI/pages/toast/toast"
        };
      },
      toast1Tap() {
        wx.showToast({
          title: "\u9ED8\u8BA4"
        });
      },
      toast2Tap() {
        wx.showToast({
          title: "duration 3000",
          duration: 3e3
        });
      },
      toast3Tap() {
        wx.showToast({
          title: "loading",
          icon: "loading",
          duration: 5e3
        });
      },
      hideToast() {
        wx.hideToast();
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-network-type/get-network-type.wxml
var require_get_network_type = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-network-type/get-network-type.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/get-network-type/get-network-type");
    page2.template = `



  
        <head :data="{title: 'getNetworkType'}" >
            

  
    
      
        \u7F51\u7EDC\u72B6\u6001
        
        <div v-if="{hasNetworkType === false}" >
            
          \u672A\u83B7\u53D6
          \u70B9\u51FB\u7EFF\u8272\u6309\u94AE\u53EF\u83B7\u53D6\u7F51\u7EDC\u72B6\u6001
        
        </div>
    
        
        <div v-if="{hasNetworkType === true}" >
            
          {{networkType}}
        
        </div>
    
      
      
        \u83B7\u53D6\u624B\u673A\u7F51\u7EDC\u72B6\u6001
        \u6E05\u7A7A
      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-network-type/get-network-type.js
var require_get_network_type2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-network-type/get-network-type.js"() {
    require_get_network_type();
    window["__wxRoute"] = "packageAPI/pages/get-network-type/get-network-type";
    var page2 = getPage("packageAPI/pages/get-network-type/get-network-type");
    page2.json = `{
    "navigationBarTitleText": "\u83B7\u53D6\u624B\u673A\u7F51\u7EDC\u72B6\u6001"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u83B7\u53D6\u624B\u673A\u7F51\u7EDC\u72B6\u6001",
          path: "packageAPI/pages/get-network-type/get-network-type"
        };
      },
      data: {
        hasNetworkType: false
      },
      getNetworkType() {
        const that = this;
        wx.getNetworkType({
          success(res2) {
            console.log(res2);
            that.setData({
              hasNetworkType: true,
              networkType: res2.subtype || res2.networkType
            });
          }
        });
      },
      clear() {
        this.setData({
          hasNetworkType: false,
          networkType: ""
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/on-network-status-change/on-network-status-change.wxml
var require_on_network_status_change = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/on-network-status-change/on-network-status-change.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/on-network-status-change/on-network-status-change");
    page2.template = `



  
        <head :data="{title: 'onNetworkStatusChange'}" >
            

  
    
      
        \u7F51\u7EDC\u72B6\u6001
        
        <div v-if="{isConnected === false}" >
            
          \u6CA1\u6709\u7F51\u7EDC\u8FDE\u63A5
        
        </div>
    
        
        <div v-if="{isConnected === true}" >
            
          {{networkType}}
        
        </div>
    
      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/on-network-status-change/on-network-status-change.js
var require_on_network_status_change2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/on-network-status-change/on-network-status-change.js"() {
    require_on_network_status_change();
    window["__wxRoute"] = "packageAPI/pages/on-network-status-change/on-network-status-change";
    var page2 = getPage("packageAPI/pages/on-network-status-change/on-network-status-change");
    page2.json = `{
    "navigationBarTitleText": "\u76D1\u542C\u624B\u673A\u7F51\u7EDC\u53D8\u5316"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u76D1\u542C\u624B\u673A\u7F51\u7EDC\u53D8\u5316",
          path: "packageAPI/pages/on-network-status-change/on-network-status-change"
        };
      },
      data: {
        isConnected: false
      },
      onLoad() {
        const that = this;
        wx.onNetworkStatusChange(function(res2) {
          that.setData({
            isConnected: res2.isConnected,
            networkType: res2.networkType
          });
        });
      },
      onShow() {
        const that = this;
        wx.getNetworkType({
          success(res2) {
            that.setData({
              isConnected: res2.networkType !== "none",
              networkType: res2.networkType
            });
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-system-info/get-system-info.wxml
var require_get_system_info = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-system-info/get-system-info.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/get-system-info/get-system-info");
    page2.template = `



  
        <head :data="{title: 'getSystemInfo'}" >
            

  
    
      
        
          
            \u624B\u673A\u54C1\u724C
          
          
            
          
        
        
          
            \u624B\u673A\u578B\u53F7
          
          
            
          
        
        
          
            \u5FAE\u4FE1\u8BED\u8A00
          
          
            
          
        
        
          
            \u5FAE\u4FE1\u7248\u672C
          
          
            
          
        
        
          
            \u5C4F\u5E55\u5BBD\u5EA6
          
          
            
          
        
        
          
            \u5C4F\u5E55\u9AD8\u5EA6
          
          
            
          
        
        
          
            DPR
          
          
            
          
        
      
      
        \u83B7\u53D6\u624B\u673A\u7CFB\u7EDF\u4FE1\u606F
      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-system-info/get-system-info.js
var require_get_system_info2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-system-info/get-system-info.js"() {
    require_get_system_info();
    window["__wxRoute"] = "packageAPI/pages/get-system-info/get-system-info";
    var page2 = getPage("packageAPI/pages/get-system-info/get-system-info");
    page2.json = `{
    "navigationBarTitleText": "\u83B7\u53D6\u624B\u673A\u7CFB\u7EDF\u4FE1\u606F"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u83B7\u53D6\u624B\u673A\u7CFB\u7EDF\u4FE1\u606F",
          path: "packageAPI/pages/get-system-info/get-system-info"
        };
      },
      data: {
        systemInfo: {}
      },
      getSystemInfo() {
        const that = this;
        wx.getSystemInfo({
          success(res2) {
            that.setData({
              systemInfo: res2
            });
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/on-compass-change/on-compass-change.wxml
var require_on_compass_change = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/on-compass-change/on-compass-change.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/on-compass-change/on-compass-change");
    page2.template = `



  
        <head :data="{title: 'onCompassChange'}" >
            

  
    
      \u65CB\u8F6C\u624B\u673A\u5373\u53EF\u83B7\u53D6\u65B9\u4F4D\u4FE1\u606F
      
        
        
        
          {{direction}}
          o
        
      
      
        \u5F00\u59CB\u76D1\u542C
        \u505C\u6B62\u76D1\u542C
      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/on-compass-change/on-compass-change.js
var require_on_compass_change2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/on-compass-change/on-compass-change.js"() {
    require_on_compass_change();
    window["__wxRoute"] = "packageAPI/pages/on-compass-change/on-compass-change";
    var page2 = getPage("packageAPI/pages/on-compass-change/on-compass-change");
    page2.json = `{
    "navigationBarTitleText": "\u76D1\u542C\u7F57\u76D8\u6570\u636E"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u76D1\u542C\u7F57\u76D8\u6570\u636E",
          path: "packageAPI/pages/on-compass-change/on-compass-change"
        };
      },
      data: {
        enabled: true,
        direction: 0
      },
      onReady() {
        const that = this;
        wx.onCompassChange(function(res2) {
          that.setData({
            direction: parseInt(res2.direction, 10)
          });
        });
      },
      startCompass() {
        if (this.data.enabled) {
          return;
        }
        const that = this;
        wx.startCompass({
          success() {
            that.setData({
              enabled: true
            });
          }
        });
      },
      stopCompass() {
        if (!this.data.enabled) {
          return;
        }
        const that = this;
        wx.stopCompass({
          success() {
            that.setData({
              enabled: false
            });
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/make-phone-call/make-phone-call.wxml
var require_make_phone_call = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/make-phone-call/make-phone-call.wxml"() {
    require_head();
    require_foot();
    Vue.component("input", {
      props: ["data"],
      data() {
        return this["$props"].data;
      },
      template: `<div></div>`
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/make-phone-call/make-phone-call.js
var require_make_phone_call2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/make-phone-call/make-phone-call.js"() {
    require_make_phone_call();
    window["__wxRoute"] = "packageAPI/pages/make-phone-call/make-phone-call";
    var page2 = getPage("packageAPI/pages/make-phone-call/make-phone-call");
    page2.json = `{
    "navigationBarTitleText": "\u6253\u7535\u8BDD"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u6253\u7535\u8BDD",
          path: "packageAPI/pages/make-phone-call/make-phone-call"
        };
      },
      data: {
        disabled: true
      },
      bindInput(e) {
        this.inputValue = e.detail.value;
        if (this.inputValue.length > 0) {
          this.setData({
            disabled: false
          });
        } else {
          this.setData({
            disabled: true
          });
        }
      },
      makePhoneCall() {
        wx.makePhoneCall({
          phoneNumber: this.inputValue,
          success() {
            console.log("\u6210\u529F\u62E8\u6253\u7535\u8BDD");
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/scan-code/scan-code.wxml
var require_scan_code = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/scan-code/scan-code.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/scan-code/scan-code");
    page2.template = `



  
        <head :data="{title: 'scanCode'}" >
            

  
    \u626B\u7801\u7ED3\u679C
    
      
        {{result}}
      
    
    
      \u626B\u4E00\u626B
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/scan-code/scan-code.js
var require_scan_code2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/scan-code/scan-code.js"() {
    require_scan_code();
    window["__wxRoute"] = "packageAPI/pages/scan-code/scan-code";
    var page2 = getPage("packageAPI/pages/scan-code/scan-code");
    page2.json = `{
    "navigationBarTitleText": "\u626B\u7801"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u626B\u7801",
          path: "packageAPI/pages/scan-code/scan-code"
        };
      },
      data: {
        result: ""
      },
      scanCode() {
        const that = this;
        wx.scanCode({
          success(res2) {
            that.setData({
              result: res2.result
            });
          },
          fail() {
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/request/request.wxml
var require_request = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/request/request.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/request/request");
    page2.template = `



  
        <head :data="{title: 'request'}" >
            

  
    
      
        \u70B9\u51FB\u5411\u670D\u52A1\u5668\u53D1\u8D77\u8BF7\u6C42
      
    
    
      request
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/request/request.js
var require_request2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/request/request.js"() {
    require_request();
    window["__wxRoute"] = "packageAPI/pages/request/request";
    var page2 = getPage("packageAPI/pages/request/request");
    page2.json = `{
    "navigationBarTitleText": "\u7F51\u7EDC\u8BF7\u6C42"
}
`;
    var requestUrl = require_config().requestUrl;
    var duration = 2e3;
    Page({
      onShareAppMessage() {
        return {
          title: "\u7F51\u7EDC\u8BF7\u6C42",
          path: "packageAPI/pages/request/request"
        };
      },
      makeRequest() {
        const self = this;
        self.setData({
          loading: true
        });
        wx.request({
          url: requestUrl,
          data: {
            noncestr: Date.now()
          },
          success(result) {
            wx.showToast({
              title: "\u8BF7\u6C42\u6210\u529F",
              icon: "success",
              mask: true,
              duration
            });
            self.setData({
              loading: false
            });
            console.log("request success", result);
          },
          fail({ errMsg }) {
            console.log("request fail", errMsg);
            self.setData({
              loading: false
            });
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/web-socket/web-socket.wxml
var require_web_socket = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/web-socket/web-socket.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/web-socket/web-socket");
    page2.template = `



  
        <head :data="{title: 'WebSocket'}" >
            

  
    
      
        
          Socket\u72B6\u6001
          
            
          
        
        
          \u6D88\u606F
          
            Hello, \u5C0F\u7A0B\u5E8F!
          
        
      
    
    
      \u70B9\u6211\u53D1\u9001
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/web-socket/web-socket.js
var require_web_socket2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/web-socket/web-socket.js"() {
    require_web_socket();
    window["__wxRoute"] = "packageAPI/pages/web-socket/web-socket";
    var page2 = getPage("packageAPI/pages/web-socket/web-socket");
    page2.json = `{
    "navigationBarTitleText": "Web Socket"
}
`;
    function showModal(title, content) {
      wx.showModal({
        title,
        content,
        showCancel: false
      });
    }
    function showSuccess(title) {
      wx.showToast({
        title,
        icon: "success",
        duration: 1e3
      });
    }
    Page({
      onShareAppMessage() {
        return {
          title: "Web Socket",
          path: "packageAPI/pages/web-socket/web-socket"
        };
      },
      data: {
        socketStatus: "closed"
      },
      onLoad() {
        const self = this;
        self.setData({
          hasLogin: true
        });
      },
      onUnload() {
        this.closeSocket();
      },
      toggleSocket(e) {
        const turnedOn = e.detail.value;
        if (turnedOn && this.data.socketStatus === "closed") {
          this.openSocket();
        } else if (!turnedOn && this.data.socketStatus === "connected") {
          const showSuccess2 = true;
          this.closeSocket(showSuccess2);
        }
      },
      openSocket() {
        wx.onSocketOpen(() => {
          console.log("WebSocket \u5DF2\u8FDE\u63A5");
          showSuccess("Socket\u5DF2\u8FDE\u63A5");
          this.setData({
            socketStatus: "connected",
            waitingResponse: false
          });
        });
        wx.onSocketClose(() => {
          console.log("WebSocket \u5DF2\u65AD\u5F00");
          this.setData({ socketStatus: "closed" });
        });
        wx.onSocketError((error) => {
          showModal("\u53D1\u751F\u9519\u8BEF", JSON.stringify(error));
          console.error("socket error:", error);
          this.setData({
            loading: false
          });
        });
        wx.onSocketMessage((message) => {
          showSuccess("\u6536\u5230\u4FE1\u9053\u6D88\u606F");
          console.log("socket message:", message);
          this.setData({
            loading: false
          });
        });
        wx.connectSocket({
          url: "wss://echo.websocket.org"
        });
      },
      closeSocket() {
        if (this.data.socketStatus === "connected") {
          wx.closeSocket({
            success: () => {
              showSuccess("Socket\u5DF2\u65AD\u5F00");
              this.setData({ socketStatus: "closed" });
            }
          });
        }
      },
      sendMessage() {
        if (this.data.socketStatus === "connected") {
          wx.sendSocketMessage({
            data: "Hello, Miniprogram!"
          });
        }
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/upload-file/upload-file.wxml
var require_upload_file = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/upload-file/upload-file.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/upload-file/upload-file");
    page2.template = `



  
        <head :data="{title: 'uploadFile'}" >
            

  
    
      

        
        <div v-if="{imageSrc}" >
            
          
        
        </div>
    

        
        <div v-else="" >
            
          
            
            
          
          \u9009\u62E9\u56FE\u7247
        
        </div>
    

      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/upload-file/upload-file.js
var require_upload_file2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/upload-file/upload-file.js"() {
    require_upload_file();
    window["__wxRoute"] = "packageAPI/pages/upload-file/upload-file";
    var page2 = getPage("packageAPI/pages/upload-file/upload-file");
    page2.json = `{
    "navigationBarTitleText": "\u4E0A\u4F20\u6587\u4EF6"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u4E0A\u4F20\u6587\u4EF6",
          path: "packageAPI/pages/upload-file/upload-file"
        };
      },
      chooseImage() {
        const self = this;
        wx.chooseImage({
          count: 1,
          sizeType: ["compressed"],
          sourceType: ["album"],
          success(res2) {
            console.log("chooseImage success, temp path is", res2.tempFilePaths[0]);
            const imageSrc = res2.tempFilePaths[0];
            wx.cloud.uploadFile({
              cloudPath: "example.png",
              filePath: imageSrc,
              config: {
                env: "release-b86096"
              },
              success: (res3) => {
                console.log(res3.fileID);
                console.log("uploadImage success, res is:", res3);
                wx.showToast({
                  title: "\u4E0A\u4F20\u6210\u529F",
                  icon: "success",
                  duration: 1e3
                });
                self.setData({
                  imageSrc,
                  fileID: res3.fileID
                });
              },
              fail({ errMsg }) {
                console.log("uploadImage fail, errMsg is", errMsg);
              }
            });
          },
          fail: (res2) => {
            wx.showToast({
              icon: "none",
              title: "\u4E0A\u4F20\u5931\u8D25"
            });
            console.log("uploadImage fail, errMsg is", res2.errMsg);
          }
        });
      },
      onUnload() {
        if (this.data.fileID) {
          wx.cloud.deleteFile({
            fileList: [this.data.fileID]
          });
        }
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/download-file/download-file.wxml
var require_download_file = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/download-file/download-file.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/download-file/download-file");
    page2.template = `



  
        <head :data="{title: 'downloadFile'}" >
            

  
    
    
        <div v-else="" >
            
      
        
          \u70B9\u51FB\u6309\u94AE\u4E0B\u8F7D\u670D\u52A1\u7AEF\u793A\u4F8B\u56FE\u7247
        
      
      
        \u4E0B\u8F7D
      
    
        </div>
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/download-file/download-file.js
var require_download_file2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/download-file/download-file.js"() {
    require_download_file();
    window["__wxRoute"] = "packageAPI/pages/download-file/download-file";
    var page2 = getPage("packageAPI/pages/download-file/download-file");
    page2.json = `{
    "navigationBarTitleText": "\u4E0B\u8F7D\u6587\u4EF6"
}
`;
    var demoImageFileId = require_config().demoImageFileId;
    Page({
      onShareAppMessage() {
        return {
          title: "\u4E0B\u8F7D\u6587\u4EF6",
          path: "packageAPI/pages/download-file/download-file"
        };
      },
      downloadImage() {
        const self = this;
        wx.cloud.downloadFile({
          fileID: demoImageFileId,
          success: (res2) => {
            console.log("downloadFile success, res is", res2);
            self.setData({
              imageSrc: res2.tempFilePath
            });
          },
          fail: console.error
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/image/image.wxml
var require_image = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/image/image.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/image/image");
    page2.template = `



  
        <head :data="{title: 'choose/previewImage'}" >
            

  
    
      

        
          
            
              \u56FE\u7247\u6765\u6E90
            
            
              
                {{sourceType[sourceTypeIndex]}}
              
            
          

          
            
              \u56FE\u7247\u8D28\u91CF
            
            
              
                {{sizeType[sizeTypeIndex]}}
              
            
          
          
            
              \u6570\u91CF\u9650\u5236
            
            
              
                {{count[countIndex]}}
              
            
          
        

        
          
            
              
                
                  \u70B9\u51FB\u53EF\u9884\u89C8\u9009\u597D\u7684\u56FE\u7247
                  {{imageList.length}}/{{count[countIndex]}}
                
                
                  
                    
        <div v-for="item in imageList" v-for-item="image" >
            
                      
                        
                      
                    
        </div>
    
                  
                  
                    
                  
                
              
            
          
        

      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/image/image.js
var require_image2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/image/image.js"() {
    require_image();
    window["__wxRoute"] = "packageAPI/pages/image/image";
    var page2 = getPage("packageAPI/pages/image/image");
    page2.json = `{
    "navigationBarTitleText": "\u56FE\u7247"
}
`;
    var sourceType = [["camera"], ["album"], ["camera", "album"]];
    var sizeType = [["compressed"], ["original"], ["compressed", "original"]];
    Page({
      onShareAppMessage() {
        return {
          title: "\u56FE\u7247",
          path: "packageAPI/pages/image/image"
        };
      },
      data: {
        imageList: [],
        sourceTypeIndex: 2,
        sourceType: ["\u62CD\u7167", "\u76F8\u518C", "\u62CD\u7167\u6216\u76F8\u518C"],
        sizeTypeIndex: 2,
        sizeType: ["\u538B\u7F29", "\u539F\u56FE", "\u538B\u7F29\u6216\u539F\u56FE"],
        countIndex: 8,
        count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      },
      sourceTypeChange(e) {
        this.setData({
          sourceTypeIndex: e.detail.value
        });
      },
      sizeTypeChange(e) {
        this.setData({
          sizeTypeIndex: e.detail.value
        });
      },
      countChange(e) {
        this.setData({
          countIndex: e.detail.value
        });
      },
      chooseImage() {
        const that = this;
        wx.chooseImage({
          sourceType: sourceType[this.data.sourceTypeIndex],
          sizeType: sizeType[this.data.sizeTypeIndex],
          count: this.data.count[this.data.countIndex],
          success(res2) {
            console.log(res2);
            that.setData({
              imageList: res2.tempFilePaths
            });
          }
        });
      },
      previewImage(e) {
        const current = e.target.dataset.src;
        wx.previewImage({
          current,
          urls: this.data.imageList
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/voice/voice.wxml
var require_voice = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/voice/voice.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/voice/voice");
    page2.template = `



  
        <head :data="{title: '\u5F55\u97F3/\u97F3\u9891'}" >
            

  
    
      
        <div v-if="{recording === false && playing === false && hasRecord === false}" >
            
        
          {{formatedRecordTime}}
        
        
          
          
            
          
          
        
      
        </div>
    

      
        <div v-if="{recording === true}" >
            
        
          {{formatedRecordTime}}
        
        
          
          
            
          
          
        
      
        </div>
    

      
        <div v-if="{hasRecord === true && playing === false}" >
            
        
          {{formatedPlayTime}}
          {{formatedRecordTime}}
        
        
          
          
            
          
          
            
          
        
      
        </div>
    

      
        <div v-if="{hasRecord === true && playing === true}" >
            
        
          {{formatedPlayTime}}
          {{formatedRecordTime}}
        
        
          
            
          
          
            
          
          
            
          
        
      
        </div>
    
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/util/util.js
var require_util = __commonJS({
  "miniprogram-demo/miniprogram/util/util.js"(exports2, module2) {
    function formatTime(time) {
      if (typeof time !== "number" || time < 0) {
        return time;
      }
      const hour = parseInt(time / 3600, 10);
      time %= 3600;
      const minute = parseInt(time / 60, 10);
      time = parseInt(time % 60, 10);
      const second = time;
      return [hour, minute, second].map(function(n) {
        n = n.toString();
        return n[1] ? n : "0" + n;
      }).join(":");
    }
    function formatLocation(longitude, latitude) {
      if (typeof longitude === "string" && typeof latitude === "string") {
        longitude = parseFloat(longitude);
        latitude = parseFloat(latitude);
      }
      longitude = longitude.toFixed(2);
      latitude = latitude.toFixed(2);
      return {
        longitude: longitude.toString().split("."),
        latitude: latitude.toString().split(".")
      };
    }
    function fib(n) {
      if (n < 1)
        return 0;
      if (n <= 2)
        return 1;
      return fib(n - 1) + fib(n - 2);
    }
    function formatLeadingZeroNumber(n, digitNum = 2) {
      n = n.toString();
      const needNum = Math.max(digitNum - n.length, 0);
      return new Array(needNum).fill(0).join("") + n;
    }
    function formatDateTime(date, withMs = false) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
      const ms = date.getMilliseconds();
      let ret = [year, month, day].map((value) => formatLeadingZeroNumber(value, 2)).join("-") + " " + [hour, minute, second].map((value) => formatLeadingZeroNumber(value, 2)).join(":");
      if (withMs) {
        ret += "." + formatLeadingZeroNumber(ms, 3);
      }
      return ret;
    }
    function compareVersion(v1, v2) {
      v1 = v1.split(".");
      v2 = v2.split(".");
      const len = Math.max(v1.length, v2.length);
      while (v1.length < len) {
        v1.push("0");
      }
      while (v2.length < len) {
        v2.push("0");
      }
      for (let i = 0; i < len; i++) {
        const num1 = parseInt(v1[i], 10);
        const num2 = parseInt(v2[i], 10);
        if (num1 > num2) {
          return 1;
        } else if (num1 < num2) {
          return -1;
        }
      }
      return 0;
    }
    module2.exports = {
      formatTime,
      formatLocation,
      fib,
      formatDateTime,
      compareVersion
    };
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/voice/voice.js
var require_voice2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/voice/voice.js"() {
    require_voice();
    window["__wxRoute"] = "packageAPI/pages/voice/voice";
    var page2 = getPage("packageAPI/pages/voice/voice");
    page2.json = `{
    "navigationBarTitleText": "\u5F55\u97F3"
}
`;
    var util = require_util();
    var playTimeInterval;
    var recordTimeInterval;
    var recorderManager = wx.getRecorderManager();
    var innerAudioContext = wx.createInnerAudioContext();
    Page({
      onShareAppMessage() {
        return {
          title: "\u5F55\u97F3",
          path: "packageAPI/pages/voice/voice"
        };
      },
      data: {
        recording: false,
        playing: false,
        hasRecord: false,
        recordTime: 0,
        playTime: 0,
        formatedRecordTime: "00:00:00",
        formatedPlayTime: "00:00:00"
      },
      onHide() {
        if (this.data.playing) {
          this.stopVoice();
        } else if (this.data.recording) {
          this.stopRecordUnexpectedly();
        }
      },
      onLoad() {
        const that = this;
        recorderManager.onStart(() => {
          console.log("recorderManage: onStart");
          recordTimeInterval = setInterval(() => {
            const recordTime = that.data.recordTime += 1;
            that.setData({
              formatedRecordTime: util.formatTime(that.data.recordTime),
              recordTime
            });
          }, 1e3);
        });
        recorderManager.onStop((res2) => {
          console.log("recorderManage: onStop");
          that.setData({
            hasRecord: true,
            recording: false,
            tempFilePath: res2.tempFilePath,
            formatedPlayTime: util.formatTime(that.data.playTime)
          });
          clearInterval(recordTimeInterval);
        });
        innerAudioContext.onPlay(() => {
          console.log("innerAudioContext: onPlay");
          playTimeInterval = setInterval(() => {
            const playTime = that.data.playTime + 1;
            if (that.data.playTime === that.data.recordTime) {
              that.stopVoice();
            } else {
              console.log("update playTime", playTime);
              that.setData({
                formatedPlayTime: util.formatTime(playTime),
                playTime
              });
            }
          }, 1e3);
        });
        innerAudioContext.onStop(() => {
        });
      },
      startRecord() {
        this.setData({
          recording: true
        });
        const options = {
          duration: 1e4,
          sampleRate: 44100,
          numberOfChannels: 1,
          encodeBitRate: 192e3,
          format: "aac",
          frameSize: 50
        };
        recorderManager.start(options);
      },
      stopRecord() {
        recorderManager.stop();
      },
      stopRecordUnexpectedly() {
        const that = this;
        wx.stopRecord({
          success() {
            console.log("stop record success");
            clearInterval(recordTimeInterval);
            that.setData({
              recording: false,
              hasRecord: false,
              recordTime: 0,
              formatedRecordTime: util.formatTime(0)
            });
          }
        });
      },
      playVoice() {
        innerAudioContext.src = this.data.tempFilePath;
        this.setData({
          playing: true
        }, () => {
          innerAudioContext.play();
        });
      },
      pauseVoice() {
        clearInterval(playTimeInterval);
        innerAudioContext.pause();
        this.setData({
          playing: false
        });
      },
      stopVoice() {
        clearInterval(playTimeInterval);
        innerAudioContext.stop();
        this.setData({
          playing: false,
          formatedPlayTime: util.formatTime(0),
          playTime: 0
        });
      },
      clear() {
        clearInterval(playTimeInterval);
        innerAudioContext.stop();
        this.setData({
          playing: false,
          hasRecord: false,
          tempFilePath: "",
          formatedRecordTime: util.formatTime(0),
          recordTime: 0,
          playTime: 0
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/file/file.wxml
var require_file = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/file/file.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/file/file");
    page2.template = `



  
        <head :data="{title: 'saveFile'}" >
            

  
    
      
        
        <div v-if="{tempFilePath != ''}" >
            
          
        
        </div>
    
        
        <div v-if="{tempFilePath === '' && savedFilePath != ''}" >
            
          
        
        </div>
    
        
        <div v-if="{tempFilePath === '' && savedFilePath === ''}" >
            
          
            
            
          
          \u8BF7\u9009\u62E9\u6587\u4EF6
        
        </div>
    
      
      
        \u4FDD\u5B58\u6587\u4EF6
        \u5220\u9664\u6587\u4EF6
      
    
  

  {{dialog.content}}

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/file/file.js
var require_file2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/file/file.js"() {
    require_file();
    window["__wxRoute"] = "packageAPI/pages/file/file";
    var page2 = getPage("packageAPI/pages/file/file");
    page2.json = `{
    "navigationBarTitleText": "\u6587\u4EF6"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u6587\u4EF6",
          path: "packageAPI/pages/file/file"
        };
      },
      onLoad() {
        this.setData({
          savedFilePath: wx.getStorageSync("savedFilePath")
        });
      },
      data: {
        tempFilePath: "",
        savedFilePath: "",
        dialog: {
          hidden: true
        }
      },
      chooseImage() {
        const that = this;
        wx.chooseImage({
          count: 1,
          success(res2) {
            that.setData({
              tempFilePath: res2.tempFilePaths[0]
            });
          }
        });
      },
      saveFile() {
        if (this.data.tempFilePath.length > 0) {
          const that = this;
          wx.saveFile({
            tempFilePath: this.data.tempFilePath,
            success(res2) {
              that.setData({
                savedFilePath: res2.savedFilePath
              });
              wx.setStorageSync("savedFilePath", res2.savedFilePath);
              that.setData({
                dialog: {
                  title: "\u4FDD\u5B58\u6210\u529F",
                  content: "\u4E0B\u6B21\u8FDB\u5165\u5E94\u7528\u65F6\uFF0C\u6B64\u6587\u4EF6\u4ECD\u53EF\u7528",
                  hidden: false
                }
              });
            },
            fail() {
              that.setData({
                dialog: {
                  title: "\u4FDD\u5B58\u5931\u8D25",
                  content: "\u5E94\u8BE5\u662F\u6709 bug \u5427",
                  hidden: false
                }
              });
            }
          });
        }
      },
      clear() {
        wx.setStorageSync("savedFilePath", "");
        this.setData({
          tempFilePath: "",
          savedFilePath: ""
        });
      },
      confirm() {
        this.setData({
          "dialog.hidden": true
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/on-accelerometer-change/on-accelerometer-change.wxml
var require_on_accelerometer_change = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/on-accelerometer-change/on-accelerometer-change.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/on-accelerometer-change/on-accelerometer-change");
    page2.template = `



  
        <head :data="{title: 'onAccelerometerChange'}" >
            

  
    
      \u503E\u659C\u624B\u673A\u5373\u53EF\u79FB\u52A8\u4E0B\u65B9\u5C0F\u7403
      
        
        
      
      
        X: {{x}}
        Y: {{y}}
        Z: {{z}}
      
      
        \u5F00\u59CB\u76D1\u542C
        \u505C\u6B62\u76D1\u542C
      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/on-accelerometer-change/on-accelerometer-change.js
var require_on_accelerometer_change2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/on-accelerometer-change/on-accelerometer-change.js"() {
    require_on_accelerometer_change();
    window["__wxRoute"] = "packageAPI/pages/on-accelerometer-change/on-accelerometer-change";
    var page2 = getPage("packageAPI/pages/on-accelerometer-change/on-accelerometer-change");
    page2.json = `{
    "navigationBarTitleText": "\u76D1\u542C\u91CD\u529B\u611F\u5E94\u6570\u636E"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u76D1\u542C\u91CD\u529B\u611F\u5E94\u6570\u636E",
          path: "packageAPI/pages/on-accelerometer-change/on-accelerometer-change"
        };
      },
      data: {
        x: 0,
        y: 0,
        z: 0,
        enabled: true
      },
      onReady() {
        this.drawBigBall();
        const that = this;
        this.position = {
          x: 151,
          y: 151,
          vx: 0,
          vy: 0,
          ax: 0,
          ay: 0
        };
        wx.onAccelerometerChange(function(res2) {
          that.setData({
            x: res2.x.toFixed(2),
            y: res2.y.toFixed(2),
            z: res2.z.toFixed(2)
          });
          that.position.ax = Math.sin(res2.x * Math.PI / 2);
          that.position.ay = -Math.sin(res2.y * Math.PI / 2);
        });
        this.interval = setInterval(function() {
          that.drawSmallBall();
        }, 17);
      },
      drawBigBall() {
        const context = wx.createContext();
        context.beginPath(0);
        context.arc(151, 151, 140, 0, Math.PI * 2);
        context.setFillStyle("#ffffff");
        context.setStrokeStyle("#aaaaaa");
        context.fill();
        wx.drawCanvas({
          canvasId: "big-ball",
          actions: context.getActions()
        });
      },
      drawSmallBall() {
        const p = this.position;
        let strokeStyle = "rgba(1,1,1,0)";
        p.x += p.vx;
        p.y += p.vy;
        p.vx += p.ax;
        p.vy += p.ay;
        if (Math.sqrt(Math.pow(Math.abs(p.x) - 151, 2) + Math.pow(Math.abs(p.y) - 151, 2)) >= 115) {
          if (p.x > 151 && p.vx > 0) {
            p.vx = 0;
          }
          if (p.x < 151 && p.vx < 0) {
            p.vx = 0;
          }
          if (p.y > 151 && p.vy > 0) {
            p.vy = 0;
          }
          if (p.y < 151 && p.vy < 0) {
            p.vy = 0;
          }
          strokeStyle = "#ff0000";
        }
        const context = wx.createContext();
        context.beginPath(0);
        context.arc(p.x, p.y, 15, 0, Math.PI * 2);
        context.setFillStyle("#1aad19");
        context.setStrokeStyle(strokeStyle);
        context.fill();
        wx.drawCanvas({
          canvasId: "small-ball",
          actions: context.getActions()
        });
      },
      startAccelerometer() {
        if (this.data.enabled) {
          return;
        }
        const that = this;
        wx.startAccelerometer({
          success() {
            that.setData({
              enabled: true
            });
          }
        });
      },
      stopAccelerometer() {
        if (!this.data.enabled) {
          return;
        }
        const that = this;
        wx.stopAccelerometer({
          success() {
            that.setData({
              enabled: false
            });
          }
        });
      },
      onUnload() {
        clearInterval(this.interval);
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/canvas/canvas.wxml
var require_canvas = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/canvas/canvas.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/canvas/canvas");
    page2.template = `



  
        <head :data="{title: 'createContext'}" >
            

  
    
      
      
        
        <div v-for="item in methods" v-for-item="method" >
            
          {{method}}
        
        </div>
    
        toTempFilePath
      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/canvas/example.js
var require_example = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/canvas/example.js"(exports2, module2) {
    window["__wxRoute"] = "packageAPI/pages/canvas/example";
    var page2 = getPage("packageAPI/pages/canvas/example");
    page2.json = ``;
    var example = {};
    example.rotate = function(context) {
      context.beginPath();
      context.rotate(10 * Math.PI / 180);
      context.rect(225, 75, 20, 10);
      context.fill();
    };
    example.scale = function(context) {
      context.beginPath();
      context.rect(25, 25, 50, 50);
      context.stroke();
      context.scale(2, 2);
      context.beginPath();
      context.rect(25, 25, 50, 50);
      context.stroke();
    };
    example.reset = function(context) {
      context.beginPath();
      context.setFillStyle("#000000");
      context.setStrokeStyle("#000000");
      context.setFontSize(10);
      context.setShadow(0, 0, 0, "rgba(0, 0, 0, 0)");
      context.setLineCap("butt");
      context.setLineJoin("miter");
      context.setLineWidth(1);
      context.setMiterLimit(10);
    };
    example.translate = function(context) {
      context.beginPath();
      context.rect(10, 10, 100, 50);
      context.fill();
      context.translate(70, 70);
      context.beginPath();
      context.fill();
    };
    example.save = function(context) {
      context.beginPath();
      context.setStrokeStyle("#00ff00");
      context.save();
      context.scale(2, 2);
      context.setStrokeStyle("#ff0000");
      context.rect(0, 0, 100, 100);
      context.stroke();
      context.restore();
      context.rect(0, 0, 50, 50);
      context.stroke();
    };
    example.restore = function(context) {
      [3, 2, 1].forEach(function(item) {
        context.beginPath();
        context.save();
        context.scale(item, item);
        context.rect(10, 10, 100, 100);
        context.stroke();
        context.restore();
      });
    };
    example.drawImage = function(context) {
      context.drawImage("/image/wechat.png", 0, 0);
    };
    example.fillText = function(context) {
      context.setStrokeStyle("#ff0000");
      context.beginPath();
      context.moveTo(0, 10);
      context.lineTo(300, 10);
      context.stroke();
      context.setFontSize(10);
      context.fillText("Hello World", 0, 30);
      context.setFontSize(20);
      context.fillText("Hello World", 100, 30);
      context.beginPath();
      context.moveTo(0, 30);
      context.lineTo(300, 30);
      context.stroke();
    };
    example.fill = function(context) {
      context.beginPath();
      context.rect(20, 20, 150, 100);
      context.setStrokeStyle("#00ff00");
      context.fill();
    };
    example.stroke = function(context) {
      context.beginPath();
      context.moveTo(20, 20);
      context.lineTo(20, 100);
      context.lineTo(70, 100);
      context.setStrokeStyle("#00ff00");
      context.stroke();
    };
    example.clearRect = function(context) {
      context.setFillStyle("#ff0000");
      context.beginPath();
      context.rect(0, 0, 300, 150);
      context.fill();
      context.clearRect(20, 20, 100, 50);
    };
    example.beginPath = function(context) {
      context.beginPath();
      context.setLineWidth(5);
      context.setStrokeStyle("#ff0000");
      context.moveTo(0, 75);
      context.lineTo(250, 75);
      context.stroke();
      context.beginPath();
      context.setStrokeStyle("#0000ff");
      context.moveTo(50, 0);
      context.lineTo(150, 130);
      context.stroke();
    };
    example.closePath = function(context) {
      context.beginPath();
      context.moveTo(20, 20);
      context.lineTo(20, 100);
      context.lineTo(70, 100);
      context.closePath();
      context.stroke();
    };
    example.moveTo = function(context) {
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(300, 150);
      context.stroke();
    };
    example.lineTo = function(context) {
      context.beginPath();
      context.moveTo(20, 20);
      context.lineTo(20, 100);
      context.lineTo(70, 100);
      context.stroke();
    };
    example.rect = function(context) {
      context.beginPath();
      context.rect(20, 20, 150, 100);
      context.stroke();
    };
    example.arc = function(context) {
      context.beginPath();
      context.arc(75, 75, 50, 0, Math.PI * 2, true);
      context.moveTo(110, 75);
      context.arc(75, 75, 35, 0, Math.PI, false);
      context.moveTo(65, 65);
      context.arc(60, 65, 5, 0, Math.PI * 2, true);
      context.moveTo(95, 65);
      context.arc(90, 65, 5, 0, Math.PI * 2, true);
      context.stroke();
    };
    example.quadraticCurveTo = function(context) {
      context.beginPath();
      context.moveTo(20, 20);
      context.quadraticCurveTo(20, 100, 200, 20);
      context.stroke();
    };
    example.bezierCurveTo = function(context) {
      context.beginPath();
      context.moveTo(20, 20);
      context.bezierCurveTo(20, 100, 200, 100, 200, 20);
      context.stroke();
    };
    example.setFillStyle = function(context) {
      ["#fef957", "rgb(242,159,63)", "rgb(242,117,63)", "#e87e51"].forEach(function(item, index) {
        context.setFillStyle(item);
        context.beginPath();
        context.rect(0 + 75 * index, 0, 50, 50);
        context.fill();
      });
    };
    example.setStrokeStyle = function(context) {
      ["#fef957", "rgb(242,159,63)", "rgb(242,117,63)", "#e87e51"].forEach(function(item, index) {
        context.setStrokeStyle(item);
        context.beginPath();
        context.rect(0 + 75 * index, 0, 50, 50);
        context.stroke();
      });
    };
    example.setGlobalAlpha = function(context) {
      context.setFillStyle("#000000");
      [1, 0.5, 0.1].forEach(function(item, index) {
        context.setGlobalAlpha(item);
        context.beginPath();
        context.rect(0 + 75 * index, 0, 50, 50);
        context.fill();
      });
    };
    example.setShadow = function(context) {
      context.beginPath();
      context.setShadow(10, 10, 10, "rgba(0, 0, 0, 199)");
      context.rect(10, 10, 100, 100);
      context.fill();
    };
    example.setFontSize = function(context) {
      [10, 20, 30, 40].forEach(function(item, index) {
        context.setFontSize(item);
        context.fillText("Hello, world", 20, 20 + 40 * index);
      });
    };
    example.setLineCap = function(context) {
      context.setLineWidth(10);
      ["butt", "round", "square"].forEach(function(item, index) {
        context.beginPath();
        context.setLineCap(item);
        context.moveTo(20, 20 + 20 * index);
        context.lineTo(100, 20 + 20 * index);
        context.stroke();
      });
    };
    example.setLineJoin = function(context) {
      context.setLineWidth(10);
      ["bevel", "round", "miter"].forEach(function(item, index) {
        context.beginPath();
        context.setLineJoin(item);
        context.moveTo(20 + 80 * index, 20);
        context.lineTo(100 + 80 * index, 50);
        context.lineTo(20 + 80 * index, 100);
        context.stroke();
      });
    };
    example.setLineWidth = function(context) {
      [2, 4, 6, 8, 10].forEach(function(item, index) {
        context.beginPath();
        context.setLineWidth(item);
        context.moveTo(20, 20 + 20 * index);
        context.lineTo(100, 20 + 20 * index);
        context.stroke();
      });
    };
    example.setMiterLimit = function(context) {
      context.setLineWidth(4);
      [2, 4, 6, 8, 10].forEach(function(item, index) {
        context.beginPath();
        context.setMiterLimit(item);
        context.moveTo(20 + 80 * index, 20);
        context.lineTo(100 + 80 * index, 50);
        context.lineTo(20 + 80 * index, 100);
        context.stroke();
      });
    };
    module2.exports = example;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/canvas/canvas.js
var require_canvas2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/canvas/canvas.js"() {
    require_canvas();
    window["__wxRoute"] = "packageAPI/pages/canvas/canvas";
    var page2 = getPage("packageAPI/pages/canvas/canvas");
    page2.json = `{
    "navigationBarTitleText": "\u521B\u5EFA\u753B\u5E03"
}
`;
    var example = require_example();
    Page({
      onShareAppMessage() {
        return {
          title: "\u521B\u5EFA\u753B\u5E03",
          path: "packageAPI/pages/canvas/canvas"
        };
      },
      onLoad() {
        this.context = wx.createContext();
        const methods = Object.keys(example);
        this.setData({
          methods
        });
        const that = this;
        methods.forEach(function(method) {
          that[method] = function() {
            example[method](that.context);
            const actions = that.context.getActions();
            wx.drawCanvas({
              canvasId: "canvas",
              actions
            });
          };
        });
      },
      toTempFilePath() {
        wx.canvasToTempFilePath({
          canvasId: "canvas",
          success(res2) {
            console.log(res2);
          },
          fail(res2) {
            console.log(res2);
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/background-audio/background-audio.wxml
var require_background_audio = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/background-audio/background-audio.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/background-audio/background-audio");
    page2.template = `



  
        <head :data="{title: 'backgroundAudio'}" >
            

  
    
      {{formatedPlayTime}}
      
      
        00:00
        04:29
      
    
    \u6CE8\u610F\uFF1A\u79BB\u5F00\u5F53\u524D\u9875\u9762\u540E\u80CC\u666F\u97F3\u4E50\u5C06\u4FDD\u6301\u64AD\u653E\uFF0C\u4F46\u9000\u51FA\u5C0F\u7A0B\u5E8F\u5C06\u505C\u6B62
    
      
        <div v-if="{playing === true}" >
            
        
          
        
        
          
        
      
        </div>
    
      
        <div v-if="{playing === false}" >
            
        
        
          
        
      
        </div>
    
      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/background-audio/background-audio.js
var require_background_audio2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/background-audio/background-audio.js"() {
    require_background_audio();
    window["__wxRoute"] = "packageAPI/pages/background-audio/background-audio";
    var page2 = getPage("packageAPI/pages/background-audio/background-audio");
    page2.json = `{
   "navigationBarTitleText": "\u80CC\u666F\u97F3\u9891"
}
`;
    var app = getApp();
    var util = require_util();
    var backgroundAudioManager = wx.getBackgroundAudioManager();
    var updateInterval;
    Page({
      onShareAppMessage() {
        return {
          title: "\u80CC\u666F\u97F3\u4E50",
          path: "packageAPI/pages/background-audio/background-audio"
        };
      },
      onShow() {
        if (!backgroundAudioManager.paused && backgroundAudioManager.paused !== void 0) {
          this._enableInterval();
          this.setData({
            playing: true
          });
        }
      },
      onLoad() {
        const that = this;
        backgroundAudioManager.onPlay(() => {
          this._enableInterval();
          this.setData({
            pause: false
          });
        });
        backgroundAudioManager.onPause(() => {
          clearInterval(updateInterval);
          that.setData({
            playing: false,
            pause: true
          });
        });
        backgroundAudioManager.onEnded(() => {
          clearInterval(updateInterval);
          that.setData({
            playing: false,
            playTime: 0,
            formatedPlayTime: util.formatTime(0)
          });
        });
        backgroundAudioManager.onStop(() => {
          clearInterval(updateInterval);
          that.setData({
            playing: false,
            playTime: 0,
            formatedPlayTime: util.formatTime(0)
          });
        });
      },
      data: {
        playing: false,
        pause: false,
        playTime: 0,
        formatedPlayTime: "00:00:00"
      },
      play() {
        backgroundAudioManager.title = "\u6B64\u65F6\u6B64\u523B";
        backgroundAudioManager.epname = "\u6B64\u65F6\u6B64\u523B";
        backgroundAudioManager.singer = "\u8BB8\u5DCD";
        backgroundAudioManager.coverImgUrl = "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000";
        const that = this;
        if (that.data.pause) {
          backgroundAudioManager.play();
          this.setData({
            playing: true
          });
        } else {
          that.setData({
            playing: true
          }, () => {
            backgroundAudioManager.src = "https://dldir1.qq.com/music/release/upload/t_mm_file_publish/2339610.m4a";
          });
        }
      },
      seek(e) {
        backgroundAudioManager.seek(e.detail.value);
      },
      pause() {
        clearInterval(updateInterval);
        backgroundAudioManager.pause();
      },
      stop() {
        clearInterval(updateInterval);
        backgroundAudioManager.stop();
      },
      _enableInterval() {
        const that = this;
        function update() {
          console.log(backgroundAudioManager.currentTime);
          that.setData({
            playTime: backgroundAudioManager.currentTime + 1,
            formatedPlayTime: util.formatTime(backgroundAudioManager.currentTime + 1)
          });
        }
        updateInterval = setInterval(update, 1e3);
      },
      onUnload() {
        clearInterval(updateInterval);
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/video/video.wxml
var require_video = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/video/video.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/video/video");
    page2.template = `



  
        <head :data="{title: 'chooseVideo'}" >
            

  
    
      
        
          
            \u89C6\u9891\u6765\u6E90
          
          
            
              {{sourceType[sourceTypeIndex]}}
            
          
        
        
          
            \u6444\u50CF\u5934
          
          
            
              {{camera[cameraIndex]}}
            
          
        
        
          
            \u62CD\u6444\u957F\u5EA6
          
          
            
              {{duration[durationIndex]}}
            
          
        
      

      
        
        <div v-if="{src === ''}" >
            
          
            
            
          
          \u6DFB\u52A0\u89C6\u9891
        
        </div>
    
        
        <div v-if="{src != ''}" >
            
          
        
        </div>
    
      
    
  

        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/video/video.js
var require_video2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/video/video.js"() {
    require_video();
    window["__wxRoute"] = "packageAPI/pages/video/video";
    var page2 = getPage("packageAPI/pages/video/video");
    page2.json = `{
    "navigationBarTitleText": "\u62CD\u6444/\u9009\u62E9\u89C6\u9891"
}
`;
    var sourceType = [["camera"], ["album"], ["camera", "album"]];
    var camera = [["front"], ["back"], ["front", "back"]];
    var duration = Array.apply(null, { length: 60 }).map(function(n, i) {
      return i + 1;
    });
    Page({
      onShareAppMessage() {
        return {
          title: "\u62CD\u6444/\u9009\u62E9\u89C6\u9891",
          path: "packageAPI/pages/video/video"
        };
      },
      data: {
        sourceTypeIndex: 2,
        sourceType: ["\u62CD\u6444", "\u76F8\u518C", "\u62CD\u6444\u6216\u76F8\u518C"],
        cameraIndex: 2,
        camera: ["\u524D\u7F6E", "\u540E\u7F6E", "\u524D\u7F6E\u6216\u540E\u7F6E"],
        durationIndex: 59,
        duration: duration.map(function(t) {
          return t + "\u79D2";
        }),
        src: ""
      },
      sourceTypeChange(e) {
        this.setData({
          sourceTypeIndex: e.detail.value
        });
      },
      cameraChange(e) {
        this.setData({
          cameraIndex: e.detail.value
        });
      },
      durationChange(e) {
        this.setData({
          durationIndex: e.detail.value
        });
      },
      chooseVideo() {
        const that = this;
        wx.chooseVideo({
          sourceType: sourceType[this.data.sourceTypeIndex],
          camera: camera[this.data.cameraIndex],
          maxDuration: duration[this.data.durationIndex],
          success(res2) {
            that.setData({
              src: res2.tempFilePath
            });
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-location/get-location.wxml
var require_get_location = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-location/get-location.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/get-location/get-location");
    page2.template = `



  
        <head :data="{title: 'getLocation'}" >
            

  
    
      
        \u5F53\u524D\u4F4D\u7F6E\u7ECF\u7EAC\u5EA6
        
        <div v-if="{hasLocation === false}" >
            
          \u672A\u83B7\u53D6
        
        </div>
    
        
        <div v-if="{hasLocation === true}" >
            
          
            E: {{location.longitude[0]}}\xB0{{location.longitude[1]}}\u2032
            N: {{location.latitude[0]}}\xB0{{location.latitude[1]}}\u2032
          
        
        </div>
    
      
      
        \u83B7\u53D6\u4F4D\u7F6E
        \u6E05\u7A7A
      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-location/get-location.js
var require_get_location2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-location/get-location.js"() {
    require_get_location();
    window["__wxRoute"] = "packageAPI/pages/get-location/get-location";
    var page2 = getPage("packageAPI/pages/get-location/get-location");
    page2.json = `{
    "navigationBarTitleText": "\u83B7\u53D6\u4F4D\u7F6E"
}
`;
    var util = require_util();
    var formatLocation = util.formatLocation;
    Page({
      onShareAppMessage() {
        return {
          title: "\u83B7\u53D6\u4F4D\u7F6E",
          path: "packageAPI/pages/get-location/get-location"
        };
      },
      data: {
        hasLocation: false
      },
      getLocation() {
        const that = this;
        wx.getLocation({
          success(res2) {
            console.log(res2);
            that.setData({
              hasLocation: true,
              location: formatLocation(res2.longitude, res2.latitude)
            });
          }
        });
      },
      clear() {
        this.setData({
          hasLocation: false
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/open-location/open-location.wxml
var require_open_location = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/open-location/open-location.wxml"() {
    require_head();
    require_foot();
    Vue.component("longitude", {
      props: ["data"],
      data() {
        return this["$props"].data;
      },
      template: `<div></div>`
    });
    Vue.component("latitude", {
      props: ["data"],
      data() {
        return this["$props"].data;
      },
      template: `<div></div>`
    });
    Vue.component("name", {
      props: ["data"],
      data() {
        return this["$props"].data;
      },
      template: `<div></div>`
    });
    Vue.component("address", {
      props: ["data"],
      data() {
        return this["$props"].data;
      },
      template: `<div></div>`
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/open-location/open-location.js
var require_open_location2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/open-location/open-location.js"() {
    require_open_location();
    window["__wxRoute"] = "packageAPI/pages/open-location/open-location";
    var page2 = getPage("packageAPI/pages/open-location/open-location");
    page2.json = `{
    "navigationBarTitleText": "\u67E5\u770B\u4F4D\u7F6E"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u67E5\u770B\u4F4D\u7F6E",
          path: "packageAPI/pages/open-location/open-location"
        };
      },
      openLocation(e) {
        console.log(e);
        const value = e.detail.value;
        console.log(value);
        wx.openLocation({
          longitude: Number(value.longitude),
          latitude: Number(value.latitude),
          name: value.name,
          address: value.address
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/choose-location/choose-location.wxml
var require_choose_location = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/choose-location/choose-location.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/choose-location/choose-location");
    page2.template = `



  
        <head :data="{title: 'chooseLocation'}" >
            

  
    
      
        \u5F53\u524D\u4F4D\u7F6E\u4FE1\u606F
        
        <div v-if="{hasLocation === false}" >
            
          \u672A\u9009\u62E9\u4F4D\u7F6E
        
        </div>
    
        
        <div v-if="{hasLocation === true}" >
            
          {{locationAddress}}
          
            E: {{location.longitude[0]}}\xB0{{location.longitude[1]}}\u2032
            N: {{location.latitude[0]}}\xB0{{location.latitude[1]}}\u2032
          
        
        </div>
    
      
      
        \u9009\u62E9\u4F4D\u7F6E
        \u6E05\u7A7A
      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/choose-location/choose-location.js
var require_choose_location2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/choose-location/choose-location.js"() {
    require_choose_location();
    window["__wxRoute"] = "packageAPI/pages/choose-location/choose-location";
    var page2 = getPage("packageAPI/pages/choose-location/choose-location");
    page2.json = `{
  "navigationBarTitleText": "\u4F7F\u7528\u539F\u751F\u5730\u56FE\u9009\u62E9\u4F4D\u7F6E"
}`;
    var util = require_util();
    var formatLocation = util.formatLocation;
    Page({
      onShareAppMessage() {
        return {
          title: "\u4F7F\u7528\u539F\u751F\u5730\u56FE\u9009\u62E9\u4F4D\u7F6E",
          path: "packageAPI/pages/choose-location/choose-location"
        };
      },
      data: {
        hasLocation: false
      },
      chooseLocation() {
        const that = this;
        wx.chooseLocation({
          success(res2) {
            console.log(res2);
            that.setData({
              hasLocation: true,
              location: formatLocation(res2.longitude, res2.latitude),
              locationAddress: res2.address
            });
          }
        });
      },
      clear() {
        this.setData({
          hasLocation: false
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/storage/storage.wxml
var require_storage = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/storage/storage.wxml"() {
    require_head();
    require_foot();
    Vue.component("key", {
      props: ["data"],
      data() {
        return this["$props"].data;
      },
      template: `<div></div>`
    });
    Vue.component("data", {
      props: ["data"],
      data() {
        return this["$props"].data;
      },
      template: `<div></div>`
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/storage/storage.js
var require_storage2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/storage/storage.js"() {
    require_storage();
    window["__wxRoute"] = "packageAPI/pages/storage/storage";
    var page2 = getPage("packageAPI/pages/storage/storage");
    page2.json = `{
    "navigationBarTitleText": "\u6570\u636E\u5B58\u50A8"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u6570\u636E\u5B58\u50A8",
          path: "packageAPI/pages/storage/storage"
        };
      },
      data: {
        key: "",
        data: "",
        dialog: {
          title: "",
          content: "",
          hidden: true
        }
      },
      keyChange(e) {
        this.data.key = e.detail.value;
      },
      dataChange(e) {
        this.data.data = e.detail.value;
      },
      getStorage() {
        const { key, data } = this.data;
        let storageData;
        if (key.length === 0) {
          this.setData({
            key,
            data
          });
          wx.showModal({
            title: "\u8BFB\u53D6\u6570\u636E\u5931\u8D25",
            content: "key \u4E0D\u80FD\u4E3A\u7A7A"
          });
        } else {
          storageData = wx.getStorageSync(key);
          console.log(storageData);
          if (storageData === "") {
            this.setData({
              key,
              data: storageData
            });
            wx.showModal({
              title: "\u8BFB\u53D6\u6570\u636E\u5931\u8D25",
              content: "\u627E\u4E0D\u5230 key \u5BF9\u5E94\u7684\u6570\u636E"
            });
          } else {
            this.setData({
              key,
              data: storageData
            });
            wx.showModal({
              title: "\u8BFB\u53D6\u6570\u636E\u6210\u529F",
              content: storageData
            });
          }
        }
      },
      setStorage() {
        const { key, data } = this.data;
        if (key.length === 0) {
          this.setData({
            key,
            data
          });
          wx.showModal({
            title: "\u4FDD\u5B58\u6570\u636E\u5931\u8D25",
            content: "key \u4E0D\u80FD\u4E3A\u7A7A"
          });
        } else {
          wx.setStorageSync(key, data);
          this.setData({
            key,
            data
          });
          wx.showModal({
            title: "\u5B58\u50A8\u6570\u636E\u6210\u529F"
          });
        }
      },
      clearStorage() {
        wx.clearStorageSync();
        this.setData({
          key: "",
          data: ""
        });
        wx.showModal({
          title: "\u6E05\u9664\u6570\u636E\u6210\u529F"
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-wxml-node-info/get-wxml-node-info.wxml
var require_get_wxml_node_info = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-wxml-node-info/get-wxml-node-info.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/get-wxml-node-info/get-wxml-node-info");
    page2.template = `



  
        <head :data="{title: 'createSelectorQuery'}" >
            

  
    
      
        
          Drag
        
      
    

    
      
        
          {{ item.key }}
          {{ item.val }}
        
      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-wxml-node-info/get-wxml-node-info.js
var require_get_wxml_node_info2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-wxml-node-info/get-wxml-node-info.js"() {
    require_get_wxml_node_info();
    window["__wxRoute"] = "packageAPI/pages/get-wxml-node-info/get-wxml-node-info";
    var page2 = getPage("packageAPI/pages/get-wxml-node-info/get-wxml-node-info");
    page2.json = `{
  "navigationBarTitleText": "\u83B7\u53D6WXML\u8282\u70B9\u4FE1\u606F"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u83B7\u53D6WXML\u8282\u70B9\u4FE1\u606F",
          path: "packageAPI/pages/get-wxml-node-info/get-wxml-node-info"
        };
      },
      data: {
        metrics: []
      },
      onReady() {
        this.getNodeInfo();
      },
      getNodeInfo() {
        const $ = wx.createSelectorQuery();
        const target = $.select(".target");
        target.boundingClientRect();
        $.exec((res2) => {
          const rect = res2[0];
          if (rect) {
            const metrics = [];
            for (const key in rect) {
              if (key !== "id" && key !== "dataset") {
                const val = rect[key];
                metrics.push({ key, val });
              }
            }
            this.setData({ metrics });
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/load-font-face/load-font-face.wxml
var require_load_font_face = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/load-font-face/load-font-face.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/load-font-face/load-font-face");
    page2.template = `



  
        <head :data="{title: 'loadFontFace'}" >
            

  
    
      
        Load {{ fontFamily }}
        {{ fontFamily }} is loaded
      
      
        \u52A0\u8F7D\u5B57\u4F53
        \u6E05\u9664
      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/load-font-face/load-font-face.js
var require_load_font_face2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/load-font-face/load-font-face.js"() {
    require_load_font_face();
    window["__wxRoute"] = "packageAPI/pages/load-font-face/load-font-face";
    var page2 = getPage("packageAPI/pages/load-font-face/load-font-face");
    page2.json = `{
    "navigationBarTitleText": "\u52A8\u6001\u52A0\u8F7D\u5B57\u4F53"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u52A8\u6001\u52A0\u8F7D\u5B57\u4F53",
          path: "packageAPI/pages/load-font-face/load-font-face"
        };
      },
      data: {
        fontFamily: "Bitstream Vera Serif Bold",
        loaded: false
      },
      onLoad() {
        this.setData({
          loaded: false
        });
      },
      loadFontFace() {
        const self = this;
        wx.loadFontFace({
          family: this.data.fontFamily,
          source: 'url("https://sungd.github.io/Pacifico.ttf")',
          success(res2) {
            console.log(res2.status);
            self.setData({ loaded: true });
          },
          fail(res2) {
            console.log(res2.status);
          },
          complete(res2) {
            console.log(res2.status);
          }
        });
      },
      clear() {
        this.setData({ loaded: false });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/clipboard-data/clipboard-data.wxml
var require_clipboard_data = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/clipboard-data/clipboard-data.wxml"() {
    require_head();
    require_foot();
    Vue.component("key", {
      props: ["data"],
      data() {
        return this["$props"].data;
      },
      template: `<div></div>`
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/clipboard-data/clipboard-data.js
var require_clipboard_data2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/clipboard-data/clipboard-data.js"() {
    require_clipboard_data();
    window["__wxRoute"] = "packageAPI/pages/clipboard-data/clipboard-data";
    var page2 = getPage("packageAPI/pages/clipboard-data/clipboard-data");
    page2.json = `{
    "navigationBarTitleText": "\u526A\u5207\u677F"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u526A\u5207\u677F",
          path: "packageAPI/pages/clipboard-data/clipboard-data"
        };
      },
      data: {
        value: "edit and copy me",
        pasted: ""
      },
      valueChanged(e) {
        this.setData({
          value: e.detail.value
        });
      },
      copy() {
        wx.setClipboardData({
          data: this.data.value,
          success() {
            wx.showToast({
              title: "\u590D\u5236\u6210\u529F",
              icon: "success",
              duration: 1e3
            });
          }
        });
      },
      paste() {
        const self = this;
        wx.getClipboardData({
          success(res2) {
            self.setData({
              pasted: res2.data
            });
            wx.showToast({
              title: "\u7C98\u8D34\u6210\u529F",
              icon: "success",
              duration: 1e3
            });
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/bluetooth/bluetooth.wxml
var require_bluetooth = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/bluetooth/bluetooth.wxml"(exports, module) {
    require_head();
    require_foot();
    var utils = eval(`var module = {exports:{}};undefined`);
    var page = getPage("packageAPI/pages/bluetooth/bluetooth");
    page.template = `



module.exports.max = function(n1, n2) {
  return Math.max(n1, n2)
}
module.exports.len = function(arr) {
  arr = arr || []
  return arr.length
}


  
        <head :data="{title: 'bluetooth'}" >
            
  
    
      
        \u5DF2\u53D1\u73B0 {{devices.length}} \u4E2A\u5916\u56F4\u8BBE\u5907\uFF1A
        
          
            {{item.name}}
            \u4FE1\u53F7\u5F3A\u5EA6: {{item.RSSI}}dBm ({{utils.max(0, item.RSSI + 100)}}%)
            UUID: {{item.deviceId}}
            Service\u6570\u91CF: {{utils.len(item.advertisServiceUUIDs)}}
          
        
      

      
        \u5F00\u59CB\u626B\u63CF
        \u505C\u6B62\u626B\u63CF
      
       
        
          \u8FDB\u53BB\u4ECE\u673A\u6A21\u5F0F
        
       
    
  

  
    
      \u5DF2\u8FDE\u63A5\u5230 {{name}}
      
      \u5199\u6570\u636E
      \u65AD\u5F00\u8FDE\u63A5
      
    
    
      \u7279\u6027UUID: {{item.uuid}}
      \u7279\u6027\u503C: {{item.value}}
    
  
  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/bluetooth/bluetooth.js
var require_bluetooth2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/bluetooth/bluetooth.js"() {
    require_bluetooth();
    window["__wxRoute"] = "packageAPI/pages/bluetooth/bluetooth";
    var page2 = getPage("packageAPI/pages/bluetooth/bluetooth");
    page2.json = `{
   "navigationBarTitleText": "\u84DD\u7259"
}
`;
    function inArray(arr, key, val) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][key] === val) {
          return i;
        }
      }
      return -1;
    }
    function ab2hex(buffer) {
      const hexArr = Array.prototype.map.call(new Uint8Array(buffer), function(bit) {
        return ("00" + bit.toString(16)).slice(-2);
      });
      return hexArr.join("");
    }
    Page({
      onShareAppMessage() {
        return {
          title: "\u84DD\u7259",
          path: "packageAPI/pages/bluetooth/bluetooth"
        };
      },
      data: {
        devices: [],
        connected: false,
        chs: []
      },
      onUnload() {
        this.closeBluetoothAdapter();
      },
      openBluetoothAdapter() {
        wx.openBluetoothAdapter({
          success: (res2) => {
            console.log("openBluetoothAdapter success", res2);
            this.startBluetoothDevicesDiscovery();
          },
          fail: (res2) => {
            if (res2.errCode === 10001) {
              wx.showModal({
                title: "\u9519\u8BEF",
                content: "\u672A\u627E\u5230\u84DD\u7259\u8BBE\u5907, \u8BF7\u6253\u5F00\u84DD\u7259\u540E\u91CD\u8BD5\u3002",
                showCancel: false
              });
              wx.onBluetoothAdapterStateChange(function(res3) {
                if (res3 && res3.available) {
                  this.startBluetoothDevicesDiscovery();
                }
              });
            }
          }
        });
      },
      getBluetoothAdapterState() {
        wx.getBluetoothAdapterState({
          success: (res2) => {
            console.log("getBluetoothAdapterState", res2);
            if (res2.discovering) {
              this.onBluetoothDeviceFound();
            } else if (res2.available) {
              this.startBluetoothDevicesDiscovery();
            }
          }
        });
      },
      startBluetoothDevicesDiscovery() {
        if (this._discoveryStarted) {
          return;
        }
        this._discoveryStarted = true;
        wx.startBluetoothDevicesDiscovery({
          allowDuplicatesKey: true,
          success: (res2) => {
            console.log("startBluetoothDevicesDiscovery success", res2);
            this.onBluetoothDeviceFound();
          }
        });
      },
      stopBluetoothDevicesDiscovery() {
        wx.stopBluetoothDevicesDiscovery({
          complete: () => {
            this._discoveryStarted = false;
          }
        });
      },
      onBluetoothDeviceFound() {
        wx.onBluetoothDeviceFound((res2) => {
          res2.devices.forEach((device) => {
            if (!device.name && !device.localName) {
              return;
            }
            const foundDevices = this.data.devices;
            const idx = inArray(foundDevices, "deviceId", device.deviceId);
            const data = {};
            if (idx === -1) {
              data[`devices[${foundDevices.length}]`] = device;
            } else {
              data[`devices[${idx}]`] = device;
            }
            this.setData(data);
          });
        });
      },
      createBLEConnection(e) {
        const ds = e.currentTarget.dataset;
        const deviceId = ds.deviceId;
        const name = ds.name;
        wx.showLoading();
        wx.createBLEConnection({
          deviceId,
          success: () => {
            this.setData({
              connected: true,
              name,
              deviceId
            });
            this.getBLEDeviceServices(deviceId);
          },
          complete() {
            wx.hideLoading();
          }
        });
        this.stopBluetoothDevicesDiscovery();
      },
      closeBLEConnection() {
        wx.closeBLEConnection({
          deviceId: this.data.deviceId
        });
        this.setData({
          connected: false,
          chs: [],
          canWrite: false
        });
      },
      changeMode() {
        wx.navigateTo({
          url: "./slave/slave"
        });
      },
      getBLEDeviceServices(deviceId) {
        wx.getBLEDeviceServices({
          deviceId,
          success: (res2) => {
            for (let i = 0; i < res2.services.length; i++) {
              if (res2.services[i].isPrimary) {
                this.getBLEDeviceCharacteristics(deviceId, res2.services[i].uuid);
                return;
              }
            }
          }
        });
      },
      getBLEDeviceCharacteristics(deviceId, serviceId) {
        wx.getBLEDeviceCharacteristics({
          deviceId,
          serviceId,
          success: (res2) => {
            console.log("getBLEDeviceCharacteristics success", res2.characteristics);
            for (let i = 0; i < res2.characteristics.length; i++) {
              const item = res2.characteristics[i];
              if (item.properties.read) {
                wx.readBLECharacteristicValue({
                  deviceId,
                  serviceId,
                  characteristicId: item.uuid
                });
              }
              if (item.properties.write) {
                this.setData({
                  canWrite: true
                });
                this._deviceId = deviceId;
                this._serviceId = serviceId;
                this._characteristicId = item.uuid;
                console.log("write");
                this.writeBLECharacteristicValue();
              }
              if (item.properties.notify || item.properties.indicate) {
                wx.notifyBLECharacteristicValueChange({
                  deviceId,
                  serviceId,
                  characteristicId: item.uuid,
                  state: true
                });
              }
            }
          },
          fail(res2) {
            console.error("getBLEDeviceCharacteristics", res2);
          }
        });
        wx.onBLECharacteristicValueChange((characteristic) => {
          const idx = inArray(this.data.chs, "uuid", characteristic.characteristicId);
          const data = {};
          if (idx === -1) {
            data[`chs[${this.data.chs.length}]`] = {
              uuid: characteristic.characteristicId,
              value: ab2hex(characteristic.value)
            };
          } else {
            data[`chs[${idx}]`] = {
              uuid: characteristic.characteristicId,
              value: ab2hex(characteristic.value)
            };
          }
          wx.showToast({
            title: "\u6536\u5230\u4ECE\u673A\u6570\u636E"
          });
          this.setData(data);
        });
      },
      writeBLECharacteristicValue() {
        const buffer = new ArrayBuffer(1);
        const dataView = new DataView(buffer);
        dataView.setUint8(0, Math.random() * 19 | 0);
        wx.writeBLECharacteristicValue({
          deviceId: this._deviceId,
          serviceId: this._serviceId,
          characteristicId: this._characteristicId,
          value: buffer,
          success() {
            console.log("writeBLECharacteristicValue: \u6210\u529F");
          },
          fail() {
            console.log("writeBLECharacteristicValue: \u5931\u8D25");
          },
          complete() {
            console.log("writeBLECharacteristicValue: \u7ED3\u675F");
          }
        });
      },
      closeBluetoothAdapter() {
        wx.closeBluetoothAdapter();
        this._discoveryStarted = false;
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/screen-brightness/screen-brightness.wxml
var require_screen_brightness = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/screen-brightness/screen-brightness.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/screen-brightness/screen-brightness");
    page2.template = `



  
        <head :data="{title: 'get/set/ScreenBrightness'}" >
            

  
    
      \u5F53\u524D\u5C4F\u5E55\u4EAE\u5EA6
      {{screenBrightness}}
    
    
      \u8BBE\u7F6E\u5C4F\u5E55\u4EAE\u5EA6
      
        
      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/screen-brightness/screen-brightness.js
var require_screen_brightness2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/screen-brightness/screen-brightness.js"() {
    require_screen_brightness();
    window["__wxRoute"] = "packageAPI/pages/screen-brightness/screen-brightness";
    var page2 = getPage("packageAPI/pages/screen-brightness/screen-brightness");
    page2.json = `{
  "navigationBarTitleText": "\u5C4F\u5E55\u4EAE\u5EA6"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u5C4F\u5E55\u4EAE\u5EA6",
          path: "packageAPI/pages/screen-brightness/screen-brightness"
        };
      },
      data: {
        screenBrightness: 0
      },
      onLoad() {
        this._updateScreenBrightness();
      },
      changeBrightness(e) {
        const value = Number.parseFloat(e.detail.value.toFixed(1));
        this.setData({
          screenBrightness: Number.parseFloat(e.detail.value.toFixed(1))
        });
        wx.setScreenBrightness({
          value
        });
      },
      _updateScreenBrightness() {
        wx.getScreenBrightness({
          success: (res2) => {
            console.log(res2);
            this.setData({
              screenBrightness: Number.parseFloat(res2.value.toFixed(1))
            });
          },
          fail(err) {
            console.error(err);
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/vibrate/vibrate.wxml
var require_vibrate = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/vibrate/vibrate.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/vibrate/vibrate");
    page2.template = `



  
        <head :data="{title: 'vibrate/Long/Short'}" >
            

  
    
      
        \u957F\u632F\u52A8
        \u77ED\u632F\u52A8
      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/vibrate/vibrate.js
var require_vibrate2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/vibrate/vibrate.js"() {
    require_vibrate();
    window["__wxRoute"] = "packageAPI/pages/vibrate/vibrate";
    var page2 = getPage("packageAPI/pages/vibrate/vibrate");
    page2.json = `{
    "navigationBarTitleText": "\u632F\u52A8"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u632F\u52A8",
          path: "packageAPI/pages/vibrate/vibrate"
        };
      },
      vibrateShort() {
        wx.vibrateShort({
          success(res2) {
            console.log(res2);
          },
          fail(err) {
            console.error(err);
          },
          complete() {
            console.log("completed");
          }
        });
      },
      vibrateLong() {
        wx.vibrateLong({
          success(res2) {
            console.log(res2);
          },
          fail(err) {
            console.error(err);
          },
          complete() {
            console.log("completed");
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/add-contact/add-contact.wxml
var require_add_contact = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/add-contact/add-contact.wxml"() {
    require_head();
    require_foot();
    Vue.component("lastName", {
      props: ["data"],
      data() {
        return this["$props"].data;
      },
      template: `<div></div>`
    });
    Vue.component("firstName", {
      props: ["data"],
      data() {
        return this["$props"].data;
      },
      template: `<div></div>`
    });
    Vue.component("mobilePhoneNumber", {
      props: ["data"],
      data() {
        return this["$props"].data;
      },
      template: `<div></div>`
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/add-contact/add-contact.js
var require_add_contact2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/add-contact/add-contact.js"() {
    require_add_contact();
    window["__wxRoute"] = "packageAPI/pages/add-contact/add-contact";
    var page2 = getPage("packageAPI/pages/add-contact/add-contact");
    page2.json = `{
    "navigationBarTitleText": "\u65B0\u589E\u8054\u7CFB\u4EBA"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u65B0\u589E\u8054\u7CFB\u4EBA",
          path: "packageAPI/pages/add-contact/add-contact"
        };
      },
      submit(e) {
        const formData = e.detail.value;
        wx.addPhoneContact({
          ...formData,
          success() {
            wx.showToast({
              title: "\u8054\u7CFB\u4EBA\u521B\u5EFA\u6210\u529F"
            });
          },
          fail() {
            wx.showToast({
              title: "\u8054\u7CFB\u4EBA\u521B\u5EFA\u5931\u8D25"
            });
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wifi/wifi.wxml
var require_wifi = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wifi/wifi.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/wifi/wifi");
    page2.template = `



  
        <head :data="{title: 'Wi-Fi'}" >
            

  
    
      
        
          
            {{ item.SSID }}
            
              
              
              
              
              
            
          
        
      
    
    
      \u641C\u7D22Wi-Fi
      \u505C\u6B62\u641C\u7D22
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wifi/wifi.js
var require_wifi2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wifi/wifi.js"() {
    require_wifi();
    window["__wxRoute"] = "packageAPI/pages/wifi/wifi";
    var page2 = getPage("packageAPI/pages/wifi/wifi");
    page2.json = `{
   "navigationBarTitleText": "Wi-Fi"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "Wi-Fi",
          path: "packageAPI/pages/wifi/wifi"
        };
      },
      data: {
        wifiList: []
      },
      onUnload() {
        this.stopSearch();
      },
      startSearch() {
        const getWifiList = () => {
          wx.getWifiList({
            success: () => {
              wx.onGetWifiList((res2) => {
                const wifiList = res2.wifiList.sort((a, b) => b.signalStrength - a.signalStrength).map((wifi) => {
                  const strength = Math.ceil(wifi.signalStrength * 4);
                  return Object.assign(wifi, { strength });
                });
                this.setData({
                  wifiList
                });
              });
            },
            fail(err) {
              console.error(err);
            }
          });
        };
        const startWifi = () => {
          wx.startWifi({
            success: getWifiList,
            fail(err) {
              console.error(err);
            }
          });
        };
        wx.getSystemInfo({
          success(res2) {
            const isIOS = res2.platform === "ios";
            if (isIOS) {
              wx.showModal({
                title: "\u63D0\u793A",
                content: "\u7531\u4E8E\u7CFB\u7EDF\u9650\u5236\uFF0CiOS\u7528\u6237\u8BF7\u624B\u52A8\u8FDB\u5165\u7CFB\u7EDFWiFi\u9875\u9762\uFF0C\u7136\u540E\u8FD4\u56DE\u5C0F\u7A0B\u5E8F\u3002",
                showCancel: false,
                success() {
                  startWifi();
                }
              });
              return;
            }
            startWifi();
          }
        });
      },
      stopSearch() {
        wx.stopWifi({
          success(res2) {
            console.log(res2);
          },
          fail(err) {
            console.error(err);
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/page-scroll/page-scroll.wxml
var require_page_scroll = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/page-scroll/page-scroll.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/page-scroll/page-scroll");
    page2.template = `



  
        <head :data="{title: 'pageScrollTo'}" >
            

  
    
      
        \u6EDA\u52A8\u5230\u9875\u9762\u5E95\u90E8
      
      
      
        \u8FD4\u56DE\u9876\u90E8
      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/page-scroll/page-scroll.js
var require_page_scroll2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/page-scroll/page-scroll.js"() {
    require_page_scroll();
    window["__wxRoute"] = "packageAPI/pages/page-scroll/page-scroll";
    var page2 = getPage("packageAPI/pages/page-scroll/page-scroll");
    page2.json = `{
  "navigationBarTitleText": "\u9875\u9762\u6EDA\u52A8"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u9875\u9762\u6EDA\u52A8",
          path: "packageAPI/pages/page-scroll/page-scroll"
        };
      },
      scrollToTop() {
        wx.pageScrollTo({
          scrollTop: 0,
          duration: 300
        });
      },
      scrollToBottom() {
        wx.pageScrollTo({
          scrollTop: 3e3,
          duration: 300
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/intersection-observer/intersection-observer.wxml
var require_intersection_observer = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/intersection-observer/intersection-observer.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/intersection-observer/intersection-observer");
    page2.template = `



  
        <head :data="{title: 'intersectionObserver'}" >
            

  
    
      
        \u5C0F\u7403\u51FA\u73B0
      
      
        \u5C0F\u7403\u6D88\u5931
      
    
    
      
        
          \u5411\u4E0B\u6EDA\u52A8\u8BA9\u5C0F\u7403\u51FA\u73B0
          
          
        
      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/intersection-observer/intersection-observer.js
var require_intersection_observer2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/intersection-observer/intersection-observer.js"() {
    require_intersection_observer();
    window["__wxRoute"] = "packageAPI/pages/intersection-observer/intersection-observer";
    var page2 = getPage("packageAPI/pages/intersection-observer/intersection-observer");
    page2.json = `{
  "navigationBarTitleText": "WXML\u8282\u70B9\u5E03\u5C40\u76F8\u4EA4\u72B6\u6001"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "WXML\u8282\u70B9\u5E03\u5C40\u76F8\u4EA4\u72B6\u6001",
          path: "packageAPI/pages/intersection-observer/intersection-observer"
        };
      },
      data: {
        appear: false
      },
      onLoad() {
        this._observer = wx.createIntersectionObserver(this);
        this._observer.relativeTo(".scroll-view").observe(".ball", (res2) => {
          console.log(res2);
          this.setData({
            appear: res2.intersectionRatio > 0
          });
        });
      },
      onUnload() {
        if (this._observer)
          this._observer.disconnect();
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/capture-screen/capture-screen.wxml
var require_capture_screen = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/capture-screen/capture-screen.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/capture-screen/capture-screen");
    page2.template = `



  
        <head :data="{title: 'onUserCaptureScreen'}" >
            

  
    
      \u8BF7\u8FDB\u884C\u5C4F\u5E55\u622A\u5C4F
      \u622A\u5C4F\u4E8B\u4EF6{{ captured ? "\u5DF2" : "\u672A" }}\u89E6\u53D1
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/capture-screen/capture-screen.js
var require_capture_screen2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/capture-screen/capture-screen.js"() {
    require_capture_screen();
    window["__wxRoute"] = "packageAPI/pages/capture-screen/capture-screen";
    var page2 = getPage("packageAPI/pages/capture-screen/capture-screen");
    page2.json = `{
  "navigationBarTitleText": "\u7528\u6237\u622A\u5C4F\u4E8B\u4EF6"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u7528\u6237\u622A\u5C4F\u4E8B\u4EF6",
          path: "packageAPI/pages/capture-screen/capture-screen"
        };
      },
      data: {
        captured: false
      },
      onLoad() {
        wx.onUserCaptureScreen(() => {
          this.setData({
            captured: true
          });
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/worker/worker.wxml
var require_worker = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/worker/worker.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/worker/worker");
    page2.template = `



  
        <head :data="{title: 'Worker'}" >
            
  
  
    
      
    
  

  
    \u8BA1\u7B97\u6590\u6CE2\u90A3\u5951\u6570
    
      
        
      
    
    \u7ED3\u679C
    
      
        {{res}}
      
    
     \u63D0\u793A\uFF1A\u4F7F\u7528\u5355\u7EBF\u7A0B\u8FDB\u884C\u8BA1\u7B97\u65F6\uFF0C\u52A8\u753B\u4F1A\u51FA\u73B0\u660E\u663E\u7684\u5361\u987F\u73B0\u8C61\u3002\u4F7F\u7528 Worker \u7EBF\u7A0B\u8FDB\u884C\u8BA1\u7B97\uFF0C\u5219\u53EF\u4EE5\u4FDD\u8BC1\u52A8\u753B\u7684\u6D41\u7545\u3002
    
      \u5355\u7EBF\u7A0B\u8BA1\u7B97
      \u5229\u7528 Worker \u7EBF\u7A0B\u8BA1\u7B97
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/worker/worker.js
var require_worker2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/worker/worker.js"() {
    require_worker();
    window["__wxRoute"] = "packageAPI/pages/worker/worker";
    var page2 = getPage("packageAPI/pages/worker/worker");
    page2.json = `{
   "navigationBarTitleText": "\u591A\u7EBF\u7A0BWorker"
}
`;
    var { fib } = require_util();
    Page({
      onShareAppMessage() {
        return {
          title: "\u591A\u7EBF\u7A0BWorker",
          path: "packageAPI/pages/worker/worker"
        };
      },
      data: {
        res: "",
        input: 35
      },
      onLoad() {
        this._worker = wx.createWorker("workers/fib/index.js");
      },
      onUnload() {
        clearInterval(this.interval);
        if (this._worker)
          this._worker.terminate();
      },
      bindInput(e) {
        const val = Number(e.detail.value);
        if (val > 40)
          return { value: 40 };
        if (Number.isNaN(val))
          return { value: 33 };
        this.setData({
          input: val
        });
        return void 0;
      },
      reset() {
        this.setData({ res: "" });
      },
      compute() {
        this.reset();
        wx.showLoading({
          title: "\u8BA1\u7B97\u4E2D..."
        });
        const t0 = +Date.now();
        const res2 = fib(this.data.input);
        const t1 = +Date.now();
        wx.hideLoading();
        this.setData({
          res: res2,
          time: t1 - t0
        });
      },
      multiThreadCompute() {
        this.reset();
        wx.showLoading({
          title: "\u8BA1\u7B97\u4E2D..."
        });
        const t0 = +Date.now();
        this._worker.postMessage({
          type: "execFunc_fib",
          params: [this.data.input]
        });
        this._worker.onMessage((res2) => {
          if (res2.type === "execFunc_fib") {
            wx.hideLoading();
            const t1 = +Date.now();
            this.setData({
              res: res2.result,
              time: t1 - t0
            });
          }
        });
      },
      onReady() {
        this.position = {
          x: 150,
          y: 150,
          vx: 2,
          vy: 2
        };
        this.drawBall();
        this.interval = setInterval(this.drawBall, 17);
      },
      drawBall() {
        const p = this.position;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x >= 300) {
          p.vx = -2;
        }
        if (p.x <= 7) {
          p.vx = 2;
        }
        if (p.y >= 300) {
          p.vy = -2;
        }
        if (p.y <= 7) {
          p.vy = 2;
        }
        const context = wx.createContext();
        function ball(x, y) {
          context.beginPath(0);
          context.arc(x, y, 5, 0, Math.PI * 2);
          context.setFillStyle("#1aad19");
          context.setStrokeStyle("rgba(1,1,1,0)");
          context.fill();
          context.stroke();
        }
        ball(p.x, 150);
        ball(150, p.y);
        ball(300 - p.x, 150);
        ball(150, 300 - p.y);
        ball(p.x, p.y);
        ball(300 - p.x, 300 - p.y);
        ball(p.x, 300 - p.y);
        ball(300 - p.x, p.y);
        wx.drawCanvas({
          canvasId: "canvas",
          actions: context.getActions()
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/ibeacon/ibeacon.wxml
var require_ibeacon = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/ibeacon/ibeacon.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/ibeacon/ibeacon");
    page2.template = `



  
        <head :data="{title: 'iBeacon'}" >
            

  
    
      \u8F93\u5165iBeacon\u8BBE\u5907\u5E7F\u64AD\u7684UUID
      
        
          
        
      
    
    
      \u641C\u7D22iBeacon
      \u505C\u6B62\u641C\u7D22
    
    
      \u5DF2\u53D1\u73B0 {{beacons.length}} \u4E2A\u5916\u56F4\u8BBE\u5907\uFF1A
      
        
          \u4E3BID: {{item.major}} \u6B21ID: {{item.minor}}
          \u4FE1\u53F7\u5F3A\u5EA6: {{item.rssi}}dBm
          UUID: {{item.uuid}}
          Proximity: {{item.proximity}} Accuracy: {{item.accuracy}}
        
      
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/ibeacon/ibeacon.js
var require_ibeacon2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/ibeacon/ibeacon.js"() {
    require_ibeacon();
    window["__wxRoute"] = "packageAPI/pages/ibeacon/ibeacon";
    var page2 = getPage("packageAPI/pages/ibeacon/ibeacon");
    page2.json = `{
  "navigationBarTitleText": "iBeacon"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "iBeacon",
          path: "packageAPI/pages/ibeacon/ibeacon"
        };
      },
      data: {
        uuid: "",
        beacons: []
      },
      onUnload() {
        this.stopSearch();
      },
      enterUuid(e) {
        this.setData({
          uuid: e.detail.value
        });
      },
      startSearch() {
        if (this._searching)
          return;
        this._searching = true;
        wx.startBeaconDiscovery({
          uuids: [this.data.uuid],
          success: (res2) => {
            console.log(res2);
            wx.onBeaconUpdate(({ beacons }) => {
              this.setData({
                beacons
              });
            });
          },
          fail: (err) => {
            console.error(err);
          }
        });
      },
      stopSearch() {
        this._searching = false;
        wx.stopBeaconDiscovery();
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/choose-address/choose-address.wxml
var require_choose_address = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/choose-address/choose-address.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/choose-address/choose-address");
    page2.template = `



  
        <head :data="{title: 'chooseAddress'}" >
            

  
    
      
        
          
            \u6536\u8D27\u4EBA\u59D3\u540D
          
          
            {{ addressInfo.userName }}
          
        

        
          
            \u90AE\u7F16
          
          
            {{ addressInfo.postalCode }}
          
        

        
          
            \u5730\u533A
          
          
            {{ addressInfo.provinceName }}
            {{ addressInfo.cityName }}
            {{ addressInfo.countyName }}
          
        


        
          
            \u6536\u8D27\u5730\u5740
          
          
            {{ addressInfo.detailInfo }}
          
        

          
          
            \u56FD\u5BB6\u7801
          
          
            {{ addressInfo.nationalCode }}
          
        

        
          
            \u624B\u673A\u53F7\u7801
          
          
            {{ addressInfo.telNumber }}
          
        

      
    
  
  
  
    
    \u83B7\u53D6\u6536\u8D27\u5730\u5740
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/choose-address/choose-address.js
var require_choose_address2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/choose-address/choose-address.js"() {
    require_choose_address();
    window["__wxRoute"] = "packageAPI/pages/choose-address/choose-address";
    var page2 = getPage("packageAPI/pages/choose-address/choose-address");
    page2.json = `{
  "navigationBarTitleText": "\u6536\u8D27\u5730\u5740"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u6536\u8D27\u5730\u5740",
          path: "packageAPI/pages/choose-address/choose-address"
        };
      },
      data: {
        addressInfo: null
      },
      chooseAddress() {
        wx.chooseAddress({
          success: (res2) => {
            this.setData({
              addressInfo: res2
            });
          },
          fail(err) {
            console.log(err);
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/setting/setting.wxml
var require_setting = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/setting/setting.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/setting/setting");
    page2.template = `



  
        <head :data="{title: 'open/get/Setting'}" >
            

  
    
      
        
          
            
              \u7528\u6237\u4FE1\u606F
            
            
              
            
          

          
            
              \u5730\u7406\u4F4D\u7F6E
            
            
              
            
          

          
            
              \u901A\u8BAF\u5730\u5740
            
            
              
            
          


          
            
              \u53D1\u7968\u62AC\u5934
            
            
              
            
          

            
            
              \u5FAE\u4FE1\u8FD0\u52A8\u6B65\u6570
            
            
              
            
          

          
            
              \u5F55\u97F3\u529F\u80FD
            
            
              
            
          

          
            
              \u4FDD\u5B58\u5230\u76F8\u518C
            
            
              
            
          

          
            
              \u6444\u50CF\u5934
            
            
              
            
          

        
      
    

    
      \u83B7\u53D6\u5C0F\u7A0B\u5E8F\u8BBE\u7F6E
      \u6253\u5F00\u5C0F\u7A0B\u5E8F\u8BBE\u7F6E
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/setting/setting.js
var require_setting2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/setting/setting.js"() {
    require_setting();
    window["__wxRoute"] = "packageAPI/pages/setting/setting";
    var page2 = getPage("packageAPI/pages/setting/setting");
    page2.json = `{
  "navigationBarTitleText": "\u8BBE\u7F6E"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u8BBE\u7F6E",
          path: "packageAPI/pages/setting/setting"
        };
      },
      data: {
        setting: {}
      },
      getSetting() {
        wx.getSetting({
          success: (res2) => {
            console.log(res2);
            this.setData({ setting: res2.authSetting });
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/choose-invoice-title/choose-invoice-title.wxml
var require_choose_invoice_title = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/choose-invoice-title/choose-invoice-title.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/choose-invoice-title/choose-invoice-title");
    page2.template = `



  
        <head :data="{title: 'chooseInvoiceTitle'}" >
            

  
    
      
        
          
            
              \u62AC\u5934\u7C7B\u578B
            
            
              {{ type !== '' ? (type === '0' ? '\u5355\u4F4D' : '\u4E2A\u4EBA') : '' }}
            
          

          
            
              \u62AC\u5934\u540D\u79F0
            
            
              {{ title }}
            
          

          
            
              \u62AC\u5934\u7A0E\u53F7
            
            
              {{taxNumber}}
            
          

          
            
              \u5355\u4F4D\u5730\u5740
            
            
              {{companyAddress}}
            
          

          
            
              \u624B\u673A\u53F7\u7801
            
            
              {{telephone}}
            
          

          
            
              \u94F6\u884C\u540D\u79F0
            
            
              {{bankName}}
            
          

          
            
              \u94F6\u884C\u8D26\u53F7
            
            
              {{bankAccount}}
            
          

        
      
    

    
      \u83B7\u53D6\u53D1\u7968\u62AC\u5934
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/choose-invoice-title/choose-invoice-title.js
var require_choose_invoice_title2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/choose-invoice-title/choose-invoice-title.js"() {
    require_choose_invoice_title();
    window["__wxRoute"] = "packageAPI/pages/choose-invoice-title/choose-invoice-title";
    var page2 = getPage("packageAPI/pages/choose-invoice-title/choose-invoice-title");
    page2.json = `{
  "navigationBarTitleText": "\u83B7\u53D6\u53D1\u7968\u62AC\u5934"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u83B7\u53D6\u53D1\u7968\u62AC\u5934",
          path: "packageAPI/pages/choose-invoice-title/choose-invoice-title"
        };
      },
      data: {
        type: "",
        title: "",
        taxNumber: "",
        companyAddress: "",
        telephone: "",
        bankName: "",
        bankAccount: ""
      },
      chooseInvoiceTitle() {
        wx.chooseInvoiceTitle({
          success: (res2) => {
            this.setData({
              type: res2.type,
              title: res2.title,
              taxNumber: res2.taxNumber,
              companyAddress: res2.companyAddress,
              telephone: res2.telephone,
              bankName: res2.bankName,
              bankAccount: res2.bankAccount
            });
          },
          fail: (err) => {
            console.error(err);
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/soter-authentication/soter-authentication.wxml
var require_soter_authentication = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/soter-authentication/soter-authentication.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/soter-authentication/soter-authentication");
    page2.template = `



  
        <head :data="{title: 'startSoterAuthentication'}" >
            

  
    
      \u6307\u7EB9\u8BA4\u8BC1
    
     
      \u4EBA\u8138\u8BA4\u8BC1
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/soter-authentication/soter-authentication.js
var require_soter_authentication2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/soter-authentication/soter-authentication.js"() {
    require_soter_authentication();
    window["__wxRoute"] = "packageAPI/pages/soter-authentication/soter-authentication";
    var page2 = getPage("packageAPI/pages/soter-authentication/soter-authentication");
    page2.json = `{
  "navigationBarTitleText": "\u751F\u7269\u8BA4\u8BC1"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u751F\u7269\u8BA4\u8BC1",
          path: "packageAPI/pages/soter-authentication/soter-authentication"
        };
      },
      startAuth(e) {
        console.log(e);
        const AUTH_MODE = e.currentTarget.dataset.mode;
        console.log(AUTH_MODE);
        const startSoterAuthentication = () => {
          wx.startSoterAuthentication({
            requestAuthModes: [AUTH_MODE],
            challenge: "test",
            authContent: "\u5C0F\u7A0B\u5E8F\u793A\u4F8B",
            success: () => {
              wx.showToast({
                title: "\u8BA4\u8BC1\u6210\u529F"
              });
            },
            fail: (err) => {
              console.error(err);
              wx.showModal({
                title: "\u5931\u8D25",
                content: "\u8BA4\u8BC1\u5931\u8D25",
                showCancel: false
              });
            }
          });
        };
        const checkIsEnrolled = () => {
          wx.checkIsSoterEnrolledInDevice({
            checkAuthMode: AUTH_MODE,
            success: (res2) => {
              console.log(res2);
              if (parseInt(res2.isEnrolled, 10) <= 0) {
                wx.showModal({
                  title: "\u9519\u8BEF",
                  content: `\u60A8\u6682\u672A\u5F55\u5165${AUTH_MODE === "facial" ? "\u4EBA\u8138" : "\u6307\u7EB9"}\u4FE1\u606F\uFF0C\u8BF7\u5F55\u5165\u540E\u91CD\u8BD5`,
                  showCancel: false
                });
                return;
              }
              startSoterAuthentication();
            },
            fail: (err) => {
              console.error(err);
            }
          });
        };
        const notSupported = () => {
          wx.showModal({
            title: "\u9519\u8BEF",
            content: `\u60A8\u7684\u8BBE\u5907\u4E0D\u652F\u6301${AUTH_MODE === "facial" ? "\u4EBA\u8138" : "\u6307\u7EB9"}\u8BC6\u522B`,
            showCancel: false
          });
        };
        wx.checkIsSupportSoterAuthentication({
          success: (res2) => {
            console.log(res2);
            if (!res2 || res2.supportMode.length === 0 || res2.supportMode.indexOf(AUTH_MODE) < 0) {
              notSupported();
              return;
            }
            checkIsEnrolled();
          },
          fail: (err) => {
            console.error(err);
            notSupported();
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/subscribe-message/subscribe-message.wxml
var require_subscribe_message = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/subscribe-message/subscribe-message.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/subscribe-message/subscribe-message");
    page2.template = `



  
        <head :data="{title: '\u8BA2\u9605\u6D88\u606F'}" >
            

  
    
      
        <div >
            
        \u70B9\u51FB\u63D0\u4EA4\uFF0C\u8C03\u7528\u793A\u4F8B\u8BA2\u9605\u6D88\u606F
        \u63D0\u4EA4
      
        </div>
    
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/subscribe-message/subscribe-message.js
var require_subscribe_message2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/subscribe-message/subscribe-message.js"() {
    require_subscribe_message();
    window["__wxRoute"] = "packageAPI/pages/subscribe-message/subscribe-message";
    var page2 = getPage("packageAPI/pages/subscribe-message/subscribe-message");
    page2.json = `{
  "usingComponents": {}
}`;
    Page({
      data: {},
      requestSubscribeMessage() {
        const self = this;
        wx.requestSubscribeMessage({
          tmplIds: ["y1bXHAg_oDuvrQ3pHgcODcMPl-2hZHenWugsqdB2CXY"],
          success(res2) {
            console.log(res2);
            if (res2.errMsg === "requestSubscribeMessage:ok") {
              self.subscribeMessageSend();
            }
          },
          complete(res2) {
            console.log(res2);
          }
        });
      },
      subscribeMessageSend() {
        wx.cloud.callFunction({
          name: "openapi",
          data: {
            action: "sendSubscribeMessage"
          },
          success: (res2) => {
            console.warn("[\u4E91\u51FD\u6570] [openapi] templateMessage.send \u8C03\u7528\u6210\u529F\uFF1A", res2);
            wx.showModal({
              title: "\u8BA2\u9605\u6210\u529F",
              content: "\u8BF7\u8FD4\u56DE\u5FAE\u4FE1\u4E3B\u754C\u9762\u67E5\u770B",
              showCancel: false
            });
          },
          fail: (err) => {
            wx.showToast({
              icon: "none",
              title: "\u8C03\u7528\u5931\u8D25"
            });
            console.error("[\u4E91\u51FD\u6570] [openapi] templateMessage.send \u8C03\u7528\u5931\u8D25\uFF1A", err);
          }
        });
      },
      onLoad: function(options) {
      },
      onReady: function() {
      },
      onShow: function() {
      },
      onHide: function() {
      },
      onUnload: function() {
      },
      onPullDownRefresh: function() {
      },
      onReachBottom: function() {
      },
      onShareAppMessage() {
        return {
          title: "\u8BA2\u9605\u6D88\u606F",
          path: "packageAPI/pages/subscribe-message/subscribe-message"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/doc-web-view/doc-web-view.wxml
var require_doc_web_view = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/doc-web-view/doc-web-view.wxml"() {
    var page2 = getPage("packageAPI/pages/doc-web-view/doc-web-view");
    page2.template = `
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/doc-web-view/doc-web-view.js
var require_doc_web_view2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/doc-web-view/doc-web-view.js"() {
    require_doc_web_view();
    window["__wxRoute"] = "packageAPI/pages/doc-web-view/doc-web-view";
    var page2 = getPage("packageAPI/pages/doc-web-view/doc-web-view");
    page2.json = `{
  "navigationBarTitleText": "\u5C0F\u7A0B\u5E8F\u63A5\u53E3\u6587\u6863"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u5C0F\u7A0B\u5E8F\u63A5\u53E3\u6587\u6863",
          path: "packageAPI/pages/doc-web-view/doc-web-view"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/audio/audio.wxml
var require_audio = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/audio/audio.wxml"() {
    var page2 = getPage("packageAPI/pages/audio/audio");
    page2.template = `
  

  \u64AD\u653E
  \u6682\u505C
  \u8BBE\u7F6E\u5F53\u524D\u64AD\u653E\u65F6\u95F4\u4E3A14\u79D2
  \u56DE\u5230\u5F00\u5934

`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/audio/audio.js
var require_audio2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/audio/audio.js"() {
    require_audio();
    window["__wxRoute"] = "packageAPI/pages/audio/audio";
    var page2 = getPage("packageAPI/pages/audio/audio");
    page2.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "\u97F3\u9891"

}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "Audio",
          path: "packageAPI/pages/audio/audio"
        };
      },
      onReady(e) {
        this.audioCtx = wx.createAudioContext("myAudio");
        this.audioCtx.setSrc("https://dldir1.qq.com/music/release/upload/t_mm_file_publish/2339610.m4a");
        this.audioCtx.play();
      },
      data: {
        src: ""
      },
      audioPlay() {
        this.audioCtx.play();
      },
      audioPause() {
        this.audioCtx.pause();
      },
      audio14() {
        this.audioCtx.seek(14);
      },
      audioStart() {
        this.audioCtx.seek(0);
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-battery-info/get-battery-info.wxml
var require_get_battery_info = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-battery-info/get-battery-info.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/get-battery-info/get-battery-info");
    page2.template = `



  
        <head :data="{title: 'getBatteryInfo'}" >
            

  
  	
    
        
          
            \u5F53\u524D\u7535\u91CF
          
          
            
          
        
        
          
            \u7535\u6C60\u6A21\u5F0F
          
          
            
          
        
      
      
        \u83B7\u53D6\u7535\u91CF\u4FE1\u606F\u4FE1\u606F
      
    
  
  
        <foot >
            

        </foot>
    
        </head>
    `;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-battery-info/get-battery-info.js
var require_get_battery_info2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-battery-info/get-battery-info.js"() {
    require_get_battery_info();
    window["__wxRoute"] = "packageAPI/pages/get-battery-info/get-battery-info";
    var page2 = getPage("packageAPI/pages/get-battery-info/get-battery-info");
    page2.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "\u83B7\u53D6\u624B\u673A\u8BBE\u5907\u7535\u91CF"

}`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u83B7\u53D6\u7535\u6C60\u4FE1\u606F",
          path: "packageAPI/pages/get-battery-info/get-battery-info"
        };
      },
      data: {},
      getBatteryInfo() {
        wx.getBatteryInfo({
          complete: (res2) => {
            const msg = res2.isCharging ? "\u5145\u7535\u4E2D" : "\u4F7F\u7528\u7535\u6C60\u4E2D";
            this.setData({
              level: res2.level,
              isCharging: msg
            });
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-performance/get-performance.wxml
var require_get_performance = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-performance/get-performance.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/get-performance/get-performance");
    page2.template = `




  
        <head :data="{title: 'getPerformance'}" >
            
  
        <div v-if="{support}" >
            
    
      \u83B7\u53D6\u6027\u80FD\u6570\u636E
    
    
      
        
          {{item.entryType}}\uFF1A{{item.name}}
          \u8017\u65F6\uFF1A{{item.duration}}
          \u65F6\u95F4\uFF1A{{item.startTime}}
        
      
    
  
        </div>
    
  
    \u5FAE\u4FE1\u7248\u672C\u8FC7\u4F4E\uFF0C\u6682\u4E0D\u652F\u6301\u672C\u529F\u80FD
  

  
        <foot >
            

        </foot>
    
        </head>
    `;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-performance/util.js
var require_util2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-performance/util.js"(exports2, module2) {
    window["__wxRoute"] = "packageAPI/pages/get-performance/util";
    var page2 = getPage("packageAPI/pages/get-performance/util");
    page2.json = ``;
    var util = {};
    Date.prototype.Format = function(fmt) {
      var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
      }
      return fmt;
    };
    util.renderName = (name) => {
      switch (name) {
        case "appLaunch":
          return "\u5C0F\u7A0B\u5E8F\u542F\u52A8";
          break;
        case "firstRender":
          return "\u9875\u9762\u9996\u6B21\u6E32\u67D3";
          break;
        case "route":
          return "\u8DEF\u7531\u6027\u80FD";
          break;
        case "evaluateScript":
          return "\u6CE8\u5165\u811A\u672C";
          break;
      }
    };
    util.renderEntryType = (entryType) => {
      switch (entryType) {
        case "navigation":
          return "\u8DEF\u7531";
          break;
        case "render":
          return "\u6E32\u67D3";
          break;
        case "script":
          return "\u811A\u672C";
          break;
      }
    };
    util.renderDuration = (duration) => {
      return duration ? duration + "ms" : "";
    };
    util.renderStartTime = (startTime) => {
      if (!startTime)
        return "";
      const date = new Date(startTime);
      return date.Format("yyyy-MM-dd hh:mm:ss");
    };
    module2.exports = util;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-performance/get-performance.js
var require_get_performance2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-performance/get-performance.js"() {
    require_get_performance();
    window["__wxRoute"] = "packageAPI/pages/get-performance/get-performance";
    var page2 = getPage("packageAPI/pages/get-performance/get-performance");
    page2.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "\u6027\u80FD\u6570\u636E"

}`;
    var util = require_util2();
    var performance = wx.getPerformance ? wx.getPerformance() : {};
    var performanceObserver = performance.createObserver ? performance.createObserver() : null;
    Page({
      onShareAppMessage() {
        return {
          title: "\u5468\u671F\u6027\u7F13\u5B58",
          path: "packageAPI/pages/get-performance/get-performance"
        };
      },
      data: {
        array: [],
        support: false
      },
      onLoad() {
        console.log("canIUse:getPerformance:", wx.canIUse("getPerformance"));
        let canIUse = false;
        if (wx.getPerformance) {
          canIUse = true;
        }
        this.setData({
          support: canIUse
        });
      },
      getPerformanceInfo() {
        const EntryList = performance.getEntries();
        const array = [];
        EntryList.forEach((item) => {
          array.push({
            entryType: util.renderEntryType(item.entryType),
            name: util.renderName(item.name),
            duration: util.renderDuration(item.duration),
            startTime: util.renderStartTime(item.startTime)
          });
        });
        this.setData({
          array
        });
      },
      startObserver() {
        performanceObserver.observe({ entryTypes: ["render", "script", "navigation"] });
      },
      stopObserver() {
        performanceObserver.disconnect();
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/mdns/mdns.wxml
var require_mdns = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/mdns/mdns.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/mdns/mdns");
    page2.template = `



  
        <head :data="{title: 'mDNS'}" >
            
  
    
      
        \u5F00\u59CB\u641C\u7D22 mDNS
      
      
        \u505C\u6B62\u641C\u7D22 mDNS
      
      
        
          \u8BBE\u5907\u670D\u52A1\u540D\uFF1A{{item.serviceName}}
          ip\u5730\u5740\uFF1A{{item.ip}}:{{item.port}}
          \u5F53\u524D\u670D\u52A1\u7C7B\u578B\uFF1A{{item.serviceType}}
        
      
    
  

        </head>
    `;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/mdns/mdns.js
var require_mdns2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/mdns/mdns.js"() {
    require_mdns();
    window["__wxRoute"] = "packageAPI/pages/mdns/mdns";
    var page2 = getPage("packageAPI/pages/mdns/mdns");
    page2.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "mDNS"

}`;
    var serviceList = [];
    var resolveFailList = [];
    Page({
      onShareAppMessage() {
        return {
          title: "mdns",
          path: "packageAPI/pages/mdns/mdns"
        };
      },
      daga: {
        serviceList: [],
        resolveFailList: []
      },
      onShow() {
        this.onLocalService();
      },
      startDiscovery() {
        wx.startLocalServiceDiscovery({
          serviceType: "_http._tcp.",
          success: function(res2) {
            console.log(res2);
            wx.showToast({
              title: "\u5F00\u542F\u6210\u529F",
              icon: "none",
              duration: 2e3
            });
          },
          fail: (err) => {
            wx.showToast({
              title: "\u5F00\u542F\u5931\u8D25",
              icon: "none",
              duration: 2e3
            });
            console.log(err);
          },
          complete: () => {
            console.log("startDiscovery: complete");
          }
        });
      },
      stopDiscovery() {
        const that = this;
        wx.stopLocalServiceDiscovery({
          success: (res2) => {
            wx.showToast({
              title: "\u5173\u95ED\u6210\u529F",
              icon: "none",
              duration: 2e3
            });
            serviceList = [];
            resolveFailList = [];
            that.setData({
              serviceList: [],
              resolveFailList: []
            });
          },
          fail: () => {
            console.log("stopDiscovery: fail");
            wx.showToast({
              title: "\u5173\u95ED\u5931\u8D25",
              icon: "none",
              duration: 2e3
            });
          },
          complete: () => {
            console.log("stopDIscovery: complete");
          }
        });
      },
      onLocalService() {
        let that = this;
        wx.onLocalServiceFound(function(obj) {
          console.log(obj);
          serviceList.push(obj);
          that.setData({
            serviceList
          });
        });
        wx.onLocalServiceResolveFail(function(obj) {
          console.log(obj);
          resolveFailList.push(obj);
          that.setData({
            resolveFailList
          });
        });
        wx.onLocalServiceLost(function(obj) {
          console.log(obj);
        });
        wx.onLocalServiceDiscoveryStop(function(obj) {
          console.log("\u76D1\u542C\u5230\u641C\u7D22\u505C\u6B62\u4E8B\u4EF6");
        });
      },
      offLocalService() {
        console.log("\u662F\u5426\u6267\u884C\u6B64\u90E8\u5206\u6570\u636E");
        wx.offLocalServiceFound(function() {
          console.log("\u53D6\u6D88\u76D1\u542C\u670D\u52A1\u53D1\u73B0\u4E8B\u4EF6 \u6210\u529F");
        });
        wx.offLocalServiceResolveFail(function() {
          console.log("\u53D6\u6D88\u76D1\u542C mDNS \u670D\u52A1\u89E3\u6790\u5931\u8D25\u7684\u4E8B\u4EF6 \u6210\u529F");
        });
        wx.offLocalServiceLost(function() {
          console.log("\u53D6\u6D88\u76D1\u542C\u670D\u52A1\u79BB\u5F00\u4E8B\u4EF6 \u6210\u529F");
        });
        wx.offLocalServiceDiscoveryStop(function() {
          console.log("\u53D6\u6D88\u76D1\u542C mDNS \u670D\u52A1\u505C\u6B62\u641C\u7D22\u7684\u4E8B\u4EF6 \u6210\u529F");
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/udp-socket/udp-socket.wxml
var require_udp_socket = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/udp-socket/udp-socket.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/udp-socket/udp-socket");
    page2.template = `



  
        <head :data="{title: 'startSoterAuthentication'}" >
            

  
    
        \u672C\u673Aport: {{port}} \u6A21\u62DF\u8FDC\u7A0Bport: {{remote_port}}
    
    
      
        \u5F00\u542F UDPSocket
      
    
    
        <div v-else="" >
            
      
        
          \u672C\u673A\u53D1\u9001\u6D4B\u8BD5
        
      
      
        
          \u8FDC\u7A0B\u53D1\u9001\u6D4B\u8BD5
        
      
      
        <div v-if="{mode === 'remote'}" >
            
        
        
          
            \u53D1\u9001
          
        
      
        </div>
    
      
        
          \u5173\u95ED UDPSocket
        
      
    
        </div>
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/udp-socket/udp-socket.js
var require_udp_socket2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/udp-socket/udp-socket.js"() {
    require_udp_socket();
    window["__wxRoute"] = "packageAPI/pages/udp-socket/udp-socket";
    var page2 = getPage("packageAPI/pages/udp-socket/udp-socket");
    page2.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "UDPSocket"

}`;
    var AB2String = (arrayBuffer) => {
      let unit8Arr = new Uint8Array(arrayBuffer);
      let encodedString = String.fromCharCode.apply(null, unit8Arr), decodedString = decodeURIComponent(escape(encodedString));
      return decodedString;
    };
    Page({
      onShareAppMessage() {
        return {
          title: "UDPSocket",
          path: "packageAPI/pages/udp-socket/udp-socket"
        };
      },
      data: {
        port: void 0,
        remote_port: void 0,
        startUDP: false,
        mode: "local",
        address: "localhost",
        canIUse: true
      },
      onLoad() {
        const canIUse = wx.canIUse("createUDPSocket");
        if (!canIUse) {
          wx.showModal({
            title: "\u5FAE\u4FE1\u7248\u672C\u8FC7\u4F4E\uFF0C\u6682\u4E0D\u652F\u6301\u672C\u529F\u80FD"
          });
          this.setData({
            canIUse
          });
        }
      },
      handleCreateUDPTap() {
        this.UDPSocket = wx.createUDPSocket();
        this.remoteUDPSocket = wx.createUDPSocket();
        this.port = this.UDPSocket.bind();
        this.remote_port = this.remoteUDPSocket.bind();
        this.setData({
          port: this.port,
          remote_port: this.remote_port,
          startUDP: true
        });
        this.remoteUDPSocket.onMessage((res2) => {
          const { remoteInfo } = res2;
          console.log(res2);
          wx.showModal({
            title: `IP:${remoteInfo.address}\u53D1\u6765\u7684\u4FE1\u606F`,
            content: AB2String(res2.message)
          });
        });
      },
      handleCloseUDPTap() {
        this.setData({
          startUDP: false,
          mode: "local"
        });
        console.log(this.data);
        this.UDPSocket.close();
        this.remoteUDPSocket.close();
      },
      handleSendRemoteMessage() {
        this.UDPSocket.send({
          address: this.data.address || "localhost",
          port: this.remote_port,
          message: `port[${this.port}] \u5411 remote-port[${this.remote_port}] \u53D1\u9001\u4FE1\u606F: Hello Wechat!`
        });
      },
      changeMode() {
        this.setData({
          mode: "remote"
        });
      },
      handleInputChange(e) {
        this.setData({
          address: e.detail.value
        });
      },
      handleSendMessage() {
        this.UDPSocket.send({
          address: "localhost",
          port: this.remote_port,
          message: `port[${this.port}] \u5411 remote-port[${this.remote_port}] \u53D1\u9001\u4FE1\u606F: Hello Wechat!`
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/two-way-bindings/two-way-bindings.wxml
var require_two_way_bindings = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/two-way-bindings/two-way-bindings.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/two-way-bindings/two-way-bindings");
    page2.template = `



  
        <head :data="{title: '\u53CC\u5411\u7ED1\u5B9A'}" >
            

  
    
      
      \u8FD9\u662F\u4F60\u8F93\u5165\u7684\u6570\u636E\uFF1A{{value}}
    
   
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/two-way-bindings/two-way-bindings.js
var require_two_way_bindings2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/two-way-bindings/two-way-bindings.js"() {
    require_two_way_bindings();
    window["__wxRoute"] = "packageAPI/pages/two-way-bindings/two-way-bindings";
    var page2 = getPage("packageAPI/pages/two-way-bindings/two-way-bindings");
    page2.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "two-way-bindings"
}`;
    Page({
      data: {
        value: ""
      },
      onLoad: function(options) {
      },
      onReady: function() {
      },
      onShow: function() {
      },
      onHide: function() {
      },
      onUnload: function() {
      },
      onPullDownRefresh: function() {
      },
      onReachBottom: function() {
      },
      onShareAppMessage() {
        return {
          title: "\u53CC\u5411\u7ED1\u5B9A",
          path: "packageAPI/pages/make-phone-call/make-phone-call"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/media-container/media-container.wxml
var require_media_container = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/media-container/media-container.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/media-container/media-container");
    page2.template = `



  
        <head :data="{title: '\u97F3\u89C6\u9891\u5408\u6210'}" >
            

  
    
      
    \b   \u6E90\u89C6\u9891
      
    
    
     \u9009\u62E9\u6E90\u89C6\u98911
     
    
    
      \u9009\u62E9\u6E90\u89C6\u98912
      
    
    
      \u5408\u6210
     
    
        <div v-if="{targetSrc}" >
            
      
        
        \b   \u5408\u6210\u89C6\u9891
        
        
        \b   \u5408\u6210\u89C6\u9891\u8F68\u9053\u4E3A\uFF1A\u6E90\u89C6\u98911\u89C6\u9891\u8F68\u9053 + \u6E90\u89C6\u98912\u97F3\u9891\u8F68\u9053
        
      
      
        
        
      
    
        </div>
    
  
  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/media-container/media-container.js
var require_media_container2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/media-container/media-container.js"() {
    require_media_container();
    window["__wxRoute"] = "packageAPI/pages/media-container/media-container";
    var page2 = getPage("packageAPI/pages/media-container/media-container");
    page2.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "\u97F3\u89C6\u9891\u5408\u6210"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u97F3\u89C6\u9891\u5408\u6210",
          path: "packageAPI/pages/media-container/media-container"
        };
      },
      onLoad() {
        const canIUse = wx.canIUse("wx.createMediaContainer()");
        if (canIUse) {
          this.mediaContainer = wx.createMediaContainer();
        } else {
          this.setData({
            canIUse: false
          });
          wx.showModal({
            title: "\u5FAE\u4FE1\u7248\u672C\u8FC7\u4F4E\uFF0C\u6682\u4E0D\u652F\u6301\u672C\u529F\u80FD"
          });
        }
      },
      data: {
        targetSrc: "",
        one: "",
        two: "",
        canIUse: true
      },
      handleChooseVideo(e) {
        const that = this;
        wx.chooseVideo({
          sourceType: ["album", "camera"],
          success(res2) {
            console.log(res2.tempFilePath);
            that.setData({
              [e.currentTarget.dataset.video]: res2.tempFilePath
            });
            if (e.currentTarget.dataset.video === "one") {
              that.mediaContainer.extractDataSource({
                source: that.data.one,
                success(mt) {
                  that.mediaTrackOne = mt;
                }
              });
            } else {
              that.mediaContainer.extractDataSource({
                source: that.data.two,
                success(mt) {
                  that.mediaTrackTwo = mt;
                }
              });
            }
          }
        });
      },
      handleExport() {
        if (this.data.one === "" || this.data.two === "") {
          wx.showToast({
            title: "\u8BF7\u5148\u9009\u62E9\u6E90\u89C6\u9891",
            icon: "none"
          });
        } else {
          console.log(this.mediaTrackOne, this.mediaTrackTwo);
          const [trackMedia] = this.mediaTrackOne.tracks.filter((item) => item.kind === "video");
          const [trackAudio] = this.mediaTrackTwo.tracks.filter((item) => item.kind === "audio");
          console.log(trackMedia, trackAudio);
          this.mediaContainer.addTrack(trackMedia);
          this.mediaContainer.addTrack(trackAudio);
          const that = this;
          this.mediaContainer.export({
            success: (res2) => {
              that.setData({
                targetSrc: res2.tempFilePath
              });
            }
          });
        }
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-background-fetch-data/get-background-fetch-data.wxml
var require_get_background_fetch_data = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-background-fetch-data/get-background-fetch-data.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/get-background-fetch-data/get-background-fetch-data");
    page2.template = `



  
        <head :data="{title: 'getBackgroundFetchData'}" >
            

  
    
      
        <div v-if="{canIUse}" >
            
        
          \u5468\u671F\u6027\u7F13\u5B58\u6570\u636E
          
        <div v-if="{appid}" >
            
            
        <div >
            
              OpenID
              {{openid}}
            
        </div>
    
            
        <div >
            
              AppID
              {{appid}}
            
        </div>
    
          
        </div>
    
          
        <div >
            
            \u5FAE\u4FE1\u5BA2\u6237\u7AEF\u6BCF\u9694 12 \u4E2A\u5C0F\u65F6\u624D\u4F1A\u53D1\u8D77\u4E00\u6B21\u8BF7\u6C42
            \u4E3A\u4E86\u65B9\u4FBF\u8C03\u8BD5\u5468\u671F\u6027\u6570\u636E\uFF0C\u53EF\u4EE5\u5728 \u5DE5\u5177 -> \u62C9\u53D6\u5468\u671F\u6027\u7F13\u5B58\u6570\u636E \u5F00\u542F
          
        </div>
    
        
      
        </div>
    
    
  
  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-background-fetch-data/get-background-fetch-data.js
var require_get_background_fetch_data2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-background-fetch-data/get-background-fetch-data.js"() {
    require_get_background_fetch_data();
    window["__wxRoute"] = "packageAPI/pages/get-background-fetch-data/get-background-fetch-data";
    var page2 = getPage("packageAPI/pages/get-background-fetch-data/get-background-fetch-data");
    page2.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "\u5468\u671F\u6027\u66F4\u65B0\u6570\u636E"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u5468\u671F\u6027\u7F13\u5B58",
          path: "packageAPI/pages/get-background-fetch-data/get-background-fetch-data"
        };
      },
      onShow() {
        this.getBackgroundFetchData();
      },
      data: {
        openid: "",
        appid: "",
        canIUse: true
      },
      getBackgroundFetchData() {
        console.log("\u8BFB\u53D6\u5468\u671F\u6027\u66F4\u65B0\u6570\u636E");
        const that = this;
        if (wx.getBackgroundFetchData) {
          wx.getBackgroundFetchData({
            fetchType: "periodic",
            success(res2) {
              console.log(res2);
              const { fetchedData } = res2;
              const result = JSON.parse(fetchedData);
              that.setData({
                appid: result.appid,
                openid: result.openid
              });
              console.log("\u8BFB\u53D6\u5468\u671F\u6027\u66F4\u65B0\u6570\u636E\u6210\u529F");
            },
            fail() {
              console.log("\u8BFB\u53D6\u5468\u671F\u6027\u66F4\u65B0\u6570\u636E\u5931\u8D25");
              wx.showToast({
                title: "\u65E0\u7F13\u5B58\u6570\u636E",
                icon: "none"
              });
            },
            complete() {
              console.log("\u7ED3\u675F\u8BFB\u53D6");
            }
          });
        } else {
          this.setData({
            canIUse: false
          });
          wx.showModal({
            title: "\u5FAE\u4FE1\u7248\u672C\u8FC7\u4F4E\uFF0C\u6682\u4E0D\u652F\u6301\u672C\u529F\u80FD"
          });
        }
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-background-prefetch-data/get-background-prefetch-data.wxml
var require_get_background_prefetch_data = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-background-prefetch-data/get-background-prefetch-data.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/get-background-prefetch-data/get-background-prefetch-data");
    page2.template = `



  
        <head :data="{title: 'getBackgroundFetchData'}" >
            

  
    
      
        \u6570\u636E\u9884\u62C9\u53D6
        
        <div v-if="{appid}" >
            
          
        <div >
            
            OpenID
            {{openid}}
          
        </div>
    
          
        <div >
            
            AppID
            {{appid}}
          
        </div>
    
          
        <div >
            
            \u6570\u636E\u7F13\u5B58\u7684\u65F6\u95F4
            {{getDataTime}}
          
        </div>
    
        
        </div>
    
        
        <div >
            
          \u7528\u6237\u542F\u52A8\u5C0F\u7A0B\u5E8F\u65F6\uFF0C\u8C03\u7528 wx.getBackgroundFetchData() \u83B7\u53D6\u5DF2\u7F13\u5B58\u5230\u672C\u5730\u7684\u6570\u636E\u3002
          
        
        </div>
    
        
      
    
  
  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-background-prefetch-data/get-background-prefetch-data.js
var require_get_background_prefetch_data2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-background-prefetch-data/get-background-prefetch-data.js"() {
    require_get_background_prefetch_data();
    window["__wxRoute"] = "packageAPI/pages/get-background-prefetch-data/get-background-prefetch-data";
    var page2 = getPage("packageAPI/pages/get-background-prefetch-data/get-background-prefetch-data");
    page2.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "\u6570\u636E\u9884\u62C9\u53D6"

}`;
    var app = getApp();
    Date.prototype.Format = function(fmt) {
      var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
      }
      return fmt;
    };
    Page({
      onShow() {
        this.getBackgroundFetchData();
      },
      onShareAppMessage() {
        return {
          title: "\u9884\u62C9\u53D6",
          path: "packageAPI/pages/get-background-prefetch-data/get-background-prefetch-data"
        };
      },
      data: {
        openid: "",
        appid: "",
        getDataTime: "",
        canIUse: true
      },
      getBackgroundFetchData() {
        if (wx.getBackgroundFetchData) {
          console.log("\u8BFB\u53D6\u9884\u62C9\u53D6\u6570\u636E");
          const res2 = app.globalData.backgroundFetchData;
          const { fetchedData } = res2;
          const result = JSON.parse(fetchedData);
          const systemInfo = wx.getSystemInfoSync();
          const timeStamp = systemInfo.brand === "iPhone" ? res2.timeStamp * 1e3 : res2.timeStamp;
          const time = new Date(timeStamp).Format("yyyy-MM-dd hh:mm:ss");
          this.setData({
            appid: result.appid,
            openid: result.openid,
            getDataTime: time
          });
        } else {
          this.setData({
            canIUse: false
          });
          wx.showModal({
            title: "\u5FAE\u4FE1\u7248\u672C\u8FC7\u4F4E\uFF0C\u6682\u4E0D\u652F\u6301\u672C\u529F\u80FD"
          });
        }
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/wxs.wxml
var require_wxs = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/wxs.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/wxs/wxs");
    page2.template = `



  
        <head :data="{title: 'WXS'}" >
            

  
    
    
      movable
    
    <div> <view class="btn-area"></view>
    <button type="primary" data-nav="sidebar" bind:tap="handleNavChange">\u53F3\u6ED1\u663E\u793A\u4FA7\u8FB9\u680F</button>
    <view class="btn-area"></view>
      <button type="primary" data-nav="stick-top" bind:tap="handleNavChange">\u6EDA\u52A8\u83DC\u5355\u680F\u8D34\u9876</button> </div>
    
      \u8DDF\u968F swiper \u7684\u56FE\u7247\u5207\u6362   
    
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/wxs.js
var require_wxs2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/wxs.js"() {
    require_wxs();
    window["__wxRoute"] = "packageAPI/pages/wxs/wxs";
    var page2 = getPage("packageAPI/pages/wxs/wxs");
    page2.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "WXS"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "wxs",
          path: "packageAPI/pages/wxs/wxs"
        };
      },
      handleNavChange(e) {
        console.log(e);
        wx.navigateTo({
          url: `/packageAPI/pages/wxs/${e.currentTarget.dataset.nav}`
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/bluetooth/slave/slave.wxml
var require_slave = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/bluetooth/slave/slave.wxml"() {
    require_head();
    require_foot();
    var page2 = getPage("packageAPI/pages/bluetooth/slave/slave");
    page2.template = `




  
        <head :data="{title: 'bluetooth'}" >
            
  
    \u5F53\u524D serverId {{serverId}}
    
      \u521B\u5EFAserver
      \u5173\u95EDserver
    
    
      \u521B\u5EFA\u670D\u52A1
      \u5173\u95ED\u670D\u52A1
    
    
      \u5F00\u542F\u5E7F\u64AD
      \u5173\u95ED\u5E7F\u64AD
    
    
      \u5199\u6570\u636E
      \u7ED3\u675F\u6D41\u7A0B
    
    \u8FD4\u56DE\u4E3B\u673A\u6A21\u5F0F
    
        <div v-if="{input}" >
            
      
    
        </div>
    
    
      
        
          {{item.deviceId}} : {{item.serverId}}
          {{item.connected ? "\u5DF2\u8FDE\u63A5" : "\u65AD\u5F00"}}
        
      
    
  
  
        <foot >
            
        </foot>
    

        </head>
    `;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/bluetooth/slave/slave.js
var require_slave2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/bluetooth/slave/slave.js"() {
    require_slave();
    window["__wxRoute"] = "packageAPI/pages/bluetooth/slave/slave";
    var page2 = getPage("packageAPI/pages/bluetooth/slave/slave");
    page2.json = `{
  "usingComponents": {}
}`;
    var uuid3 = "0C76801A-62EB-45E5-96A8-37C8882ABB2B";
    var serviceId = "D0611E78-BBB4-4591-A5F8-487910AE4366";
    var characteristicId = "8667556C-9A37-4C91-84ED-54EE27D90049";
    function inArray(arr, key, val) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][key] === val) {
          return i;
        }
      }
      return -1;
    }
    Page({
      onShareAppMessage() {
        return {
          title: "\u84DD\u7259",
          path: "packageAPI/pages/slave/slave"
        };
      },
      data: {
        connects: [],
        servers: []
      },
      onLoad: function(options) {
        wx.onBLEPeripheralConnectionStateChanged((res2) => {
          console.log("connect");
          const connects = this.data.connects;
          const idx = inArray(connects, "deviceId", res2.deviceId);
          if (idx >= 0) {
            connects[idx] = res2;
          } else {
            connects.push(res2);
          }
          this.setData({ connects });
        });
      },
      openBluetoothAdapter() {
        wx.openBluetoothAdapter({
          mode: "peripheral",
          success: (res2) => {
            console.log("openBluetoothAdapter success", res2);
            this.createBLEPeripheralServer();
          },
          fail: (res2) => {
            console.log(res2);
            wx.showToast({
              title: `\u521B\u5EFA\u5931\u8D25 \u9519\u8BEF\u7801: ${res2.errCode}`,
              icon: "none"
            });
            if (res2.errCode === 10001) {
              wx.onBluetoothAdapterStateChange(function(res3) {
                console.log("onBluetoothAdapterStateChange", res3);
                if (res3.available) {
                  this.createBLEPeripheralServer();
                }
              });
            }
          }
        });
      },
      createBLEPeripheralServer() {
        wx.createBLEPeripheralServer().then((res2) => {
          console.log("createBLEPeripheralServer", res2);
          this.data.servers.push(res2.server);
          this.server = res2.server;
          this.setData({
            serverId: this.server.serverId
          });
          wx.showToast({
            title: "\u521B\u5EFA server "
          });
          this.server.onCharacteristicReadRequest((res3) => {
            const { serviceId: serviceId2, characteristicId: characteristicId2, callbackId } = res3;
            const buffer = new ArrayBuffer(1);
            const dataView = new DataView(buffer);
            const newValue = Math.ceil(Math.random() * 10);
            dataView.setUint8(0, newValue);
            console.log("onCharacteristicReadRequest", res3, newValue);
            this.server.writeCharacteristicValue({
              serviceId: serviceId2,
              characteristicId: characteristicId2,
              value: buffer,
              needNotify: true,
              callbackId
            });
          });
          this.server.onCharacteristicWriteRequest((res3) => {
            console.log("onCharacteristicWriteRequest", res3);
            const { serviceId: serviceId2, characteristicId: characteristicId2, value, callbackId } = res3;
            wx.showToast({
              title: "\u6536\u5230\u4E3B\u673A\u6570\u636E"
            });
            this.server.writeCharacteristicValue({
              serviceId: serviceId2,
              characteristicId: characteristicId2,
              value,
              needNotify: true,
              callbackId
            });
          });
        });
      },
      closeServer() {
        this.server.close();
        wx.showToast({
          title: "\u5173\u95ED server"
        });
      },
      chaneMode() {
        wx.navigateBack();
      },
      onConfirm(e) {
        console.log("onConfirm");
        const n = e.detail.value * 1;
        const buffer = new ArrayBuffer(1);
        const dataView = new DataView(buffer);
        dataView.setUint8(0, n);
        this.server.writeCharacteristicValue({
          serviceId,
          characteristicId,
          value: buffer,
          needNotify: true
        });
        wx.showModal({
          title: "\u5199\u5165\u6210\u529F",
          content: "\u8BF7\u5728\u4E3B\u673A\u67E5\u770B"
        });
      },
      showInput() {
        this.setData({
          input: !this.data.input
        });
      },
      addService() {
        const buffer = new ArrayBuffer(1);
        const dataView = new DataView(buffer);
        dataView.setUint8(0, 2);
        const descriptorBuffer = new ArrayBuffer(1);
        const dataView2 = new DataView(descriptorBuffer);
        dataView2.setInt8(0, 3);
        const service = {
          uuid: serviceId,
          characteristics: [{
            uuid: characteristicId,
            properties: {
              write: true,
              read: true,
              notify: true,
              indicate: true
            },
            permission: {
              readable: true,
              writeable: true,
              readEncryptionRequired: true,
              writeEncryptionRequired: true
            },
            value: buffer,
            descriptors: [{
              uuid: uuid3,
              permission: {
                write: true,
                read: true
              },
              value: descriptorBuffer
            }]
          }]
        };
        this.server.addService({
          service
        }).then((res2) => {
          console.log("add Service", res2);
          wx.showToast({
            title: "\u521B\u5EFA\u670D\u52A1"
          });
        }, (rej) => {
          console.log(rej);
          if (rej.errCode === 10001) {
            wx.showToast({
              title: "\u8BF7\u6253\u5F00\u84DD\u7259"
            });
          } else {
            wx.showModal({
              title: "\u521B\u5EFA\u5931\u8D25",
              content: `\u9519\u8BEF\u7801: ${rej.errCode}`
            });
          }
        });
      },
      removeService() {
        this.server.removeService({
          serviceId
        }).then((res2) => {
          wx.showToast({
            title: "\u5173\u95ED\u670D\u52A1"
          });
          console.log("removeService", res2);
        });
      },
      startAdvertising() {
        const buffer = new ArrayBuffer(1);
        const dataView = new DataView(buffer);
        dataView.setInt8(0, 4);
        this.server.startAdvertising({
          advertiseRequest: {
            connectable: true,
            deviceName: "sanford",
            serviceUuids: [serviceId],
            manufacturerData: [{
              manufacturerId: "sanfordsun-pc0",
              manufacturerSpecificData: buffer
            }]
          },
          powerLevel: "medium"
        }).then((res2) => {
          console.log("startAdvertising", res2);
          wx.showToast({
            title: "\u5F00\u542F\u5E7F\u64AD"
          });
        });
      },
      stopAdvertising() {
        this.server.stopAdvertising();
        wx.showToast({
          title: "\u5173\u95ED\u5E7F\u64AD"
        });
      },
      closeBluetoothAdapter() {
        wx.showToast({
          title: "\u7ED3\u675F\u6D41\u7A0B"
        });
        wx.closeBluetoothAdapter();
      },
      onUnload: function() {
        this.data.servers.forEach((server) => {
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/resizable/resizable.wxs
var require_resizable = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/resizable/resizable.wxs"(exports2, module2) {
    function renderResizable(status) {
      console.log(status);
      switch (status) {
        case "lock":
          return "\u9501\u5B9A\u5C4F\u5E55\u4E2D";
        case "unlock":
          return "\u53EF\u65CB\u8F6C\u5C4F\u5E55";
      }
    }
    module2.exports = {
      renderResizable
    };
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/resizable/resizable.wxml
var require_resizable2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/resizable/resizable.wxml"() {
    require_head();
    require_foot();
    var resizable = require_resizable();
    var page2 = getPage("packageAPI/pages/resizable/resizable");
    page2.template = `



  
        <head :data="{title: '\u5C4F\u5E55\u65CB\u8F6C'}" >
            

  
    
      
        <div> \u5F53\u524D\u5C4F\u5E55\u72B6\u6001\uFF1A{{resizable.renderResizable(status)}} </div>
        \u65CB\u8F6C\u5C4F\u5E55
      
      
      <div> <button type="primary" data-status="unlock" bind:tap="handleStatusChange">\u6253\u5F00\u5C4F\u5E55\u65CB\u8F6C</button>
      <button type="primary" data-status="lock" bind:tap="handleStatusChange">\u9501\u5B9A\u5C4F\u5E55</button> </div>
    
  

  
        <foot >
            

        </foot>
    
        </head>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/resizable/resizable.js
var require_resizable3 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/resizable/resizable.js"() {
    require_resizable2();
    window["__wxRoute"] = "packageAPI/pages/resizable/resizable";
    var page2 = getPage("packageAPI/pages/resizable/resizable");
    page2.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "\u5C4F\u5E55\u65CB\u8F6C",
  "pageOrientation": "auto"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u5C4F\u5E55\u65CB\u8F6C",
          path: "package/API/pages/resizable/resizable"
        };
      },
      data: {
        status: "lock"
      },
      handleStatusChange: function(e) {
        this.setData({
          status: e.currentTarget.dataset.status
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/movable.wxs
var require_movable = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/movable.wxs"(exports2, module2) {
    var startX = 0;
    var startY = 0;
    var lastLeft = lastTop = 50;
    function touchstart(event, ins) {
      var touch = event.touches[0] || event.changedTouches[0];
      startX = touch.pageX;
      startY = touch.pageY;
      ins.callMethod("testCallmethod", {
        complete: function(res2) {
          console.log("args", res2);
        }
      });
    }
    function touchmove(event, ins) {
      var touch = event.touches[0] || event.changedTouches[0];
      var pageX = touch.pageX;
      var pageY = touch.pageY;
      var left = pageX - startX + lastLeft;
      var top = pageY - startY + lastTop;
      startX = pageX;
      startY = pageY;
      lastLeft = left;
      lastTop = top;
      ins.selectComponent(".movable").setStyle({
        left: left + "px",
        top: top + "px"
      });
    }
    module2.exports = {
      touchstart,
      touchmove
    };
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/movable.wxml
var require_movable2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/movable.wxml"() {
    var test = require_movable();
    var page2 = getPage("packageAPI/pages/wxs/movable");
    page2.template = `<div>pages/movable/movable.wxml</div>
 

  

<div> <view bindtap='{{taptest}}'>testbindtap</view> </div>`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/movable.js
var require_movable3 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/movable.js"() {
    require_movable2();
    window["__wxRoute"] = "packageAPI/pages/wxs/movable";
    var page2 = getPage("packageAPI/pages/wxs/movable");
    page2.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "movable"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "movable",
          path: "packageAPI/pages/wxs/movable"
        };
      },
      data: {
        left: 50,
        top: 50,
        taptest: "taptest",
        show: true,
        dataObj: {
          obj: 1
        }
      },
      onLoad: function(options) {
      },
      onReady: function() {
        setTimeout(() => {
          this.setData({});
        }, 3e3);
      },
      taptest() {
        this.setData({
          show: false
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/sidebar.wxs
var require_sidebar = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/sidebar.wxs"(exports2, module2) {
    var newmark = startmark = 0;
    var status = 0;
    function touchstart(e, ins) {
      var pageX = (e.touches[0] || e.changedTouches[0]).pageX;
      startmark = newmark = pageX;
    }
    function touchmove(e, ins) {
      var pageX = (e.touches[0] || e.changedTouches[0]).pageX;
      console.log("pageX", pageX);
      newmark = pageX;
      var data = {
        windowWidth: e.target.dataset.width
      };
      if (startmark < pageX) {
        if (data.windowWidth * 0.4 > Math.abs(newmark - startmark)) {
          console.log("newmark - startmark", newmark - startmark);
          ins.selectComponent(".page-top").setStyle({
            transform: "translateX(" + Math.min(data.windowWidth * 0.4, (status == 1 ? data.windowWidth * 0.4 : 0) + newmark - startmark) + "px)"
          });
        }
      }
      if (startmark > pageX) {
        ins.selectComponent(".page-top").setStyle({
          transform: "translateX(" + Math.max(0, (status == 1 ? data.windowWidth * 0.4 : 0) + newmark - startmark) + "px)"
        });
      }
    }
    function touchend(e, ins) {
      var pageX = (e.touches[0] || e.changedTouches[0]).pageX;
      newmark = pageX;
      var data = {
        windowWidth: e.target.dataset.width
      };
      if (startmark < pageX) {
        if (data.windowWidth * 0.2 < Math.abs(newmark - startmark)) {
          ins.selectComponent(".page-top").setStyle({
            transform: "translateX(" + data.windowWidth * 0.4 + "px)"
          });
          status = 1;
        } else {
          ins.selectComponent(".page-top").setStyle({
            transform: "translateX(0px)"
          });
          status = 0;
        }
      }
      if (startmark > newmark) {
        ins.selectComponent(".page-top").setStyle({
          transform: "translateX(0px)"
        });
        status = 0;
      }
    }
    module2.exports = {
      touchstart,
      touchmove,
      touchend
    };
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/sidebar.wxml
var require_sidebar2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/sidebar.wxml"() {
    var test = require_sidebar();
    var page2 = getPage("packageAPI/pages/wxs/sidebar");
    page2.template = `<div>page/one/index.wxml</div>


  
    
      
          \u6280\u672F\u5F00\u53D1
      
      
          \u4EA7\u54C1\u89E3\u6790
      
      
          \u8FD0\u8425\u89C4\u8303
      
      
          \u9AD8\u6821\u5927\u8D5B
      
    
   
  
     >>> \u53F3\u6ED1\u51FA\u73B0\u4FA7\u8FB9\u83DC\u5355
      
        <div v-for="item in tabs" v-key="title" >
            
        
          
         
        
      
        </div>
    
  

`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/sidebar.js
var require_sidebar3 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/sidebar.js"() {
    require_sidebar2();
    window["__wxRoute"] = "packageAPI/pages/wxs/sidebar";
    var page2 = getPage("packageAPI/pages/wxs/sidebar");
    page2.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "sidebar"
}`;
    Page({
      data: {
        tabs: [],
        open: false,
        mark: 0,
        newmark: 0,
        startmark: 0,
        endmark: 0,
        windowWidth: wx.getSystemInfoSync().windowWidth,
        staus: 1,
        translate: ""
      },
      onLoad() {
        const tabs = [
          {
            title: "\u6280\u672F\u5F00\u53D1",
            title2: "\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u8FDB\u9636",
            img: "http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEV5QjxLDJaL6ibHLSZ02TIcve0ocPXrdTVqGGbqAmh5Mw9V7504dlEiatSvnyibibHCrVQO2GEYsJicPA/0?wx_fmt=jpeg",
            desc: "\u672C\u89C6\u9891\u7CFB\u5217\u8BFE\u7A0B\uFF0C\u7531\u817E\u8BAF\u8BFE\u5802NEXT\u5B66\u9662\u4E0E\u5FAE\u4FE1\u56E2\u961F\u8054\u5408\u51FA\u54C1\uFF0C\u901A\u8FC7\u5B9E\u6218\u6848\u4F8B\uFF0C\u6DF1\u5165\u6D45\u51FA\u5730\u8FDB\u884C\u8BB2\u89E3\u3002"
          }
        ];
        this.setData({ tabs });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/stick-top.wxs
var require_stick_top = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/stick-top.wxs"(exports2, module2) {
    var funcA = function(e, ins) {
      var scrollTop = e.detail.scrollTop;
      if (scrollTop > 200) {
        ins.selectComponent(".page-group").setStyle({
          "background-color": "rgba(235, 235, 235, 1)",
          "z-index": "999"
        }).addClass("page-group-position");
        ins.selectComponent(".page-banner .image").setStyle({
          opacity: 1 - Math.max(0, scrollTop / 200)
        });
        ins.selectComponent(".goods-list").setStyle({
          "margin-top": "59px"
        });
      } else {
        ins.selectComponent(".goods-list").setStyle({
          "margin-top": "0"
        });
        ins.selectComponent(".page-group").setStyle({
          "background-color": "rgba(235, 235, 235, " + Math.max(0, scrollTop / 200) + ")"
        }).removeClass("page-group-position");
        ins.selectComponent(".page-banner .image").setStyle({
          opacity: 1 - Math.max(0, scrollTop / 200)
        });
        console.log(ins);
      }
    };
    var funcD = function(e, ins) {
      var scrollTop = e.detail.scrollTop;
      if (scrollTop > 200) {
        ins.selectComponent(".page-group").setStyle({
          "background-color": "rgba(95, 95, 95, 1)",
          "z-index": "999"
        }).addClass("page-group-position");
        ins.selectComponent(".page-banner .image").setStyle({
          opacity: 1 - Math.max(0, scrollTop / 200)
        });
        ins.selectComponent(".goods-list").setStyle({
          "margin-top": "59px"
        });
      } else {
        ins.selectComponent(".goods-list").setStyle({
          "margin-top": "0"
        });
        ins.selectComponent(".page-group").setStyle({
          "background-color": "rgba(95, 95, 95, " + Math.max(0, scrollTop / 200) + ")"
        }).removeClass("page-group-position");
        ins.selectComponent(".page-banner .image").setStyle({
          opacity: 1 - Math.max(0, scrollTop / 200)
        });
      }
    };
    module2.exports = {
      funcA,
      funcD
    };
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/stick-top.wxml
var require_stick_top2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/stick-top.wxml"() {
    var test = require_stick_top();
    var page2 = getPage("packageAPI/pages/wxs/stick-top");
    page2.template = `

  
    
  
  
    \u6297\u75AB\u4E13\u533A
    \u6280\u672F\u5F00\u53D1
    \u8FD0\u8425\u4E13\u533A
    \u6211\u7684
  
  
        <div v-for="item in tabs" v-key="title" >
            
    
      
      
        {{item.title2}}
      
      
        {{item.desc}}
      
    
  
        </div>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/stick-top.js
var require_stick_top3 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/stick-top.js"() {
    require_stick_top2();
    window["__wxRoute"] = "packageAPI/pages/wxs/stick-top";
    var page2 = getPage("packageAPI/pages/wxs/stick-top");
    page2.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "stick-top"
}`;
    var height = wx.getSystemInfoSync().windowHeight;
    var app = getApp();
    Page({
      data: {
        sticky: false,
        opacity: 0,
        height,
        tabs: [],
        theme: app.globalData.theme
      },
      onPageScroll: function(e) {
      },
      onShow() {
      },
      onReady() {
      },
      onLoad() {
        const tabs = [
          {
            title: "\u6280\u672F\u5F00\u53D1",
            title2: "\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u8FDB\u9636",
            img: "http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEV5QjxLDJaL6ibHLSZ02TIcve0ocPXrdTVqGGbqAmh5Mw9V7504dlEiatSvnyibibHCrVQO2GEYsJicPA/0?wx_fmt=jpeg",
            desc: "\u672C\u89C6\u9891\u7CFB\u5217\u8BFE\u7A0B\uFF0C\u7531\u817E\u8BAF\u8BFE\u5802NEXT\u5B66\u9662\u4E0E\u5FAE\u4FE1\u56E2\u961F\u8054\u5408\u51FA\u54C1\uFF0C\u901A\u8FC7\u5B9E\u6218\u6848\u4F8B\uFF0C\u6DF1\u5165\u6D45\u51FA\u5730\u8FDB\u884C\u8BB2\u89E3\u3002"
          },
          {
            title: "\u4EA7\u54C1\u89E3\u6790",
            title2: "\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u76F4\u64AD",
            img: "http://mmbiz.qpic.cn/sz_mmbiz_png/GEWVeJPFkSHALb0g5rCc4Jf5IqDfdwhWJ43I1IvriaV5uFr9fLAuv3uxHR7DQstbIxhNXFoQEcxGzWwzQUDBd6Q/0?wx_fmt=png",
            desc: "\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u76F4\u64AD\u7CFB\u5217\u8BFE\u7A0B\u6301\u7EED\u66F4\u65B0\u4E2D\uFF0C\u5E2E\u52A9\u5927\u5BB6\u66F4\u597D\u5730\u7406\u89E3\u3001\u5E94\u7528\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u76F4\u64AD\u529F\u80FD\u3002"
          },
          {
            title: "\u8FD0\u8425\u89C4\u8303",
            title2: "\u5E38\u89C1\u95EE\u9898\u548C\u89E3\u51B3\u65B9\u6848",
            img: "http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSGqys4ibO2a8L9nnIgH0ibjNXfbicNbZQQYfxxUpmicQglAEYQ2btVXjOhY9gRtSTCxKvAlKFek7sRUFA/0?wx_fmt=jpeg",
            desc: "\u63D0\u9AD8\u5BA1\u6838\u8D28\u91CF"
          },
          {
            title: "\u8425\u9500\u7ECF\u9A8C",
            title2: "\u6D41\u91CF\u4E3B\u5C0F\u7A0B\u5E8F",
            img: "http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSH2Eic4Lt0HkZeEN08pWXTticVRgyNGgBVHMJwMtRhmB0hE4m4alSuwsBk3uBBOhdCr91bZlSFbYhFg/0?wx_fmt=jpeg",
            desc: "\u672C\u8BFE\u7A0B\u5171\u56DB\u8282\uFF0C\u5C06\u5206\u9636\u6BB5\u4E3A\u5F00\u53D1\u8005\u5C55\u793A\u5982\u4F55\u5F00\u901A\u6D41\u91CF\u4E3B\u529F\u80FD\u3001\u5982\u4F55\u63A5\u5165\u5E7F\u544A\u7EC4\u4EF6\u3001\u4E0D\u540C\u7C7B\u578B\u5C0F\u7A0B\u5E8F\u63A5\u5165\u7684\u5EFA\u8BAE\uFF0C\u4EE5\u53CA\u5982\u4F55\u901A\u8FC7\u5DE5\u5177\u8C03\u4F18\u5C0F\u7A0B\u5E8F\u53D8\u73B0\u6548\u7387\u3002"
          },
          {
            title: "\u9AD8\u6821\u5927\u8D5B",
            title2: "2020\u4E2D\u56FD\u9AD8\u6821\u8BA1\u7B97\u673A\u5927\u8D5B",
            img: "http://mmbiz.qpic.cn/mmbiz_jpg/TcDuyasB5T3Eg34AYwjMw7xbEK2n01ekiaicPiaMInEMTkOQtuv1yke5KziaYF4MLia4IAbxlm0m5NxkibicFg4IZ92EA/0?wx_fmt=jpeg",
            desc: "\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5E94\u7528\u5F00\u53D1\u8D5B"
          }
        ];
        this.setData({ tabs });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/nearby.wxs
var require_nearby = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/nearby.wxs"(exports2, module2) {
    var func = function(e, instance) {
      var dataset = e.instance.getDataset();
      var st = e.instance.getState();
      var current = st.current || 0;
      var imgsize = dataset.imgsize;
      var width = dataset.width;
      var detail = e.detail;
      var dx = e.detail.dx;
      var diff = typeof st.lastx !== "undefined" ? dx - st.lastx : dx - 0;
      if (diff === 0)
        return;
      st.continueCount = st.continueCount || 1;
      if (Math.abs(dx) > width * st.continueCount && st.tmpcurrent != -1) {
        console.log("mod is 0 some info", st.tmpcurrent, current);
        current = st.tmpcurrent;
        st.current = st.tmpcurrent;
        st.tmpcurrent = -1;
        st.continueCount++;
      }
      var setToWidth = false;
      var dir = dx > 0;
      if (dx !== 0 && Math.abs(dx) >= width) {
        setToWidth = true;
      }
      dx = dx - width * parseInt(dx / width);
      if (dx === 0 && setToWidth) {
        dx = dir ? width : -width;
      }
      if (current >= imgsize.length - 1 && dx > 0)
        return;
      if (current <= 0 && dx < 0)
        return;
      var currentSize = imgsize[current];
      var nextSize = dx > 0 ? imgsize[current + 1] : imgsize[current - 1];
      var currentHeight = st.currentHeight || currentSize.height;
      var diffHeight = Math.abs((nextSize.height - currentSize.height) * (dx / width));
      var realheight = currentSize.height + (nextSize.height - currentSize.height > 0 ? diffHeight : -diffHeight);
      st.currentHeight = realheight;
      e.instance.setStyle({
        height: realheight + "px"
      });
      st.lastdir = dx > 0;
      console.log("111", realheight, dx, current, nextSize.height, currentSize.height);
    };
    module2.exports = {
      func,
      change: function(e, instance) {
        var st = e.instance.getState();
        console.log("=====change detail is", e.detail.current);
        st.tmpcurrent = e.detail.current;
      },
      animationFinish: function(e) {
        var st = e.instance.getState();
        if (typeof st.tmpcurrent === "undefined" || st.tmpcurrent === -1)
          return;
        console.log("====animation finish is", st.tmpcurrent);
        st.current = st.tmpcurrent;
        st.tmpcurrent = -1;
        st.continueCount = 1;
      }
    };
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/nearby.wxml
var require_nearby2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/nearby.wxml"() {
    var test = require_nearby();
    var page2 = getPage("packageAPI/pages/wxs/nearby");
    page2.template = `


  
        <div v-for="item in imgUrls" >
            
    
      
    
  
        </div>
    
`;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/nearby.js
var require_nearby3 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/nearby.js"() {
    require_nearby2();
    window["__wxRoute"] = "packageAPI/pages/wxs/nearby";
    var page2 = getPage("packageAPI/pages/wxs/nearby");
    page2.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "nearby"
}`;
    var windowWidth = wx.getSystemInfoSync().windowWidth;
    Page({
      onShareAppMessage() {
        return {
          title: "nearby",
          path: "packageAPI/pages/wxs/nearby"
        };
      },
      data: {
        imgUrls: [
          "http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEV5QjxLDJaL6ibHLSZ02TIcve0ocPXrdTVqGGbqAmh5Mw9V7504dlEiatSvnyibibHCrVQO2GEYsJicPA/0?wx_fmt=jpeg",
          "http://mmbiz.qpic.cn/sz_mmbiz_png/GEWVeJPFkSHALb0g5rCc4Jf5IqDfdwhWJ43I1IvriaV5uFr9fLAuv3uxHR7DQstbIxhNXFoQEcxGzWwzQUDBd6Q/0?wx_fmt=png",
          "http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSGqys4ibO2a8L9nnIgH0ibjNXfbicNbZQQYfxxUpmicQglAEYQ2btVXjOhY9gRtSTCxKvAlKFek7sRUFA/0?wx_fmt=jpeg",
          "http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSH2Eic4Lt0HkZeEN08pWXTticVRgyNGgBVHMJwMtRhmB0hE4m4alSuwsBk3uBBOhdCr91bZlSFbYhFg/0?wx_fmt=jpeg"
        ],
        imgSize: [{
          height: 150
        }, {
          height: 200
        }, {
          height: 150
        }, {
          height: 150
        }],
        indicatorDots: true,
        autoplay: false,
        interval: 3e3,
        duration: 500,
        left: 0,
        windowWidth
      },
      changeIndicatorDots: function(e) {
        this.setData({
          indicatorDots: !this.data.indicatorDots
        });
      },
      swiperTransition1(e) {
        console.log("e.transition", e);
        this.setData({
          left: e.detail.x / 4
        });
      },
      onReady() {
      },
      changeAutoplay: function(e) {
        this.setData({
          autoplay: !this.data.autoplay
        });
      },
      intervalChange: function(e) {
        this.setData({
          interval: e.detail.value
        });
      },
      durationChange: function(e) {
        this.setData({
          duration: e.detail.value
        });
      }
    });
  }
});

// <stdin>
require_app();
require_login2();
require_app();
require_get_user_info2();
require_app();
require_request_payment2();
require_app();
require_share2();
require_app();
require_share_button2();
require_app();
require_custom_message2();
require_app();
require_template_message2();
require_app();
require_set_navigation_bar_title2();
require_app();
require_navigation_bar_loading2();
require_app();
require_navigator2();
require_app();
require_pull_down_refresh2();
require_app();
require_animation2();
require_app();
require_action_sheet2();
require_app();
require_modal2();
require_app();
require_toast2();
require_app();
require_get_network_type2();
require_app();
require_on_network_status_change2();
require_app();
require_get_system_info2();
require_app();
require_on_compass_change2();
require_app();
require_make_phone_call2();
require_app();
require_scan_code2();
require_app();
require_request2();
require_app();
require_web_socket2();
require_app();
require_upload_file2();
require_app();
require_download_file2();
require_app();
require_image2();
require_app();
require_voice2();
require_app();
require_file2();
require_app();
require_on_accelerometer_change2();
require_app();
require_canvas2();
require_app();
require_background_audio2();
require_app();
require_video2();
require_app();
require_get_location2();
require_app();
require_open_location2();
require_app();
require_choose_location2();
require_app();
require_storage2();
require_app();
require_get_wxml_node_info2();
require_app();
require_load_font_face2();
require_app();
require_clipboard_data2();
require_app();
require_bluetooth2();
require_app();
require_screen_brightness2();
require_app();
require_vibrate2();
require_app();
require_add_contact2();
require_app();
require_wifi2();
require_app();
require_page_scroll2();
require_app();
require_intersection_observer2();
require_app();
require_capture_screen2();
require_app();
require_worker2();
require_app();
require_ibeacon2();
require_app();
require_choose_address2();
require_app();
require_setting2();
require_app();
require_choose_invoice_title2();
require_app();
require_soter_authentication2();
require_app();
require_subscribe_message2();
require_app();
require_doc_web_view2();
require_app();
require_audio2();
require_app();
require_get_battery_info2();
require_app();
require_get_performance2();
require_app();
require_mdns2();
require_app();
require_udp_socket2();
require_app();
require_two_way_bindings2();
require_app();
require_media_container2();
require_app();
require_get_background_fetch_data2();
require_app();
require_get_background_prefetch_data2();
require_app();
require_wxs2();
require_app();
require_slave2();
require_app();
require_resizable3();
require_app();
require_movable3();
require_app();
require_sidebar3();
require_app();
require_stick_top3();
require_app();
require_nearby3();
