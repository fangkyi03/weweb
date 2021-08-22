var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// miniprogram-demo/miniprogram/packageAPI/pages/login/login.wxml
var require_login = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/login/login.wxml"() {
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/login/login.wxss
var require_ = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/login/login.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/login/login.js
var require_login2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/login/login.js"() {
    require_login();
    require_();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-user-info/get-user-info.wxss
var require_2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-user-info/get-user-info.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-user-info/get-user-info.js
var require_get_user_info2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-user-info/get-user-info.js"() {
    require_get_user_info();
    require_2();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/request-payment/request-payment.wxss
var require_3 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/request-payment/request-payment.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/request-payment/request-payment.js
var require_request_payment2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/request-payment/request-payment.js"() {
    require_request_payment();
    require_3();
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
              success: (res) => {
                console.warn("[\u4E91\u51FD\u6570] [openapi] templateMessage.send \u8C03\u7528\u6210\u529F\uFF1A", res);
                const data = res.result.data;
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/share/share.wxss
var require_4 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/share/share.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/share/share.js
var require_share2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/share/share.js"() {
    require_share();
    require_4();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/share-button/share-button.wxss
var require_5 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/share-button/share-button.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/share-button/share-button.js
var require_share_button2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/share-button/share-button.js"() {
    require_share_button();
    require_5();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/custom-message/custom-message.wxss
var require_6 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/custom-message/custom-message.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/custom-message/custom-message.js
var require_custom_message2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/custom-message/custom-message.js"() {
    require_custom_message();
    require_6();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/template-message/template-message.wxss
var require_7 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/template-message/template-message.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/config.js
var require_config = __commonJS({
  "miniprogram-demo/miniprogram/config.js"(exports, module) {
    var host = "14592619.qcloud.la";
    var config = {
      requestUrl: "https://mp.weixin.qq.com",
      host,
      envId: "release-b86096",
      demoImageFileId: "cloud://release-b86096.7265-release-b86096-1258211818/demo.jpg",
      demoVideoFileId: "cloud://release-b86096.7265-release-b86096/demo.mp4"
    };
    module.exports = config;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/template-message/template-message.js
var require_template_message2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/template-message/template-message.js"() {
    require_template_message();
    require_7();
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
              success(res) {
                console.log("submit form success", res);
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/set-navigation-bar-title/set-navigation-bar-title.wxss
var require_8 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/set-navigation-bar-title/set-navigation-bar-title.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/set-navigation-bar-title/set-navigation-bar-title.js
var require_set_navigation_bar_title2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/set-navigation-bar-title/set-navigation-bar-title.js"() {
    require_set_navigation_bar_title();
    require_8();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/navigation-bar-loading/navigation-bar-loading.wxss
var require_9 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/navigation-bar-loading/navigation-bar-loading.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/navigation-bar-loading/navigation-bar-loading.js
var require_navigation_bar_loading2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/navigation-bar-loading/navigation-bar-loading.js"() {
    require_navigation_bar_loading();
    require_9();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/navigator/navigator.wxss
var require_10 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/navigator/navigator.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/navigator/navigator.js
var require_navigator2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/navigator/navigator.js"() {
    require_navigator();
    require_10();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/pull-down-refresh/pull-down-refresh.wxss
var require_11 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/pull-down-refresh/pull-down-refresh.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/pull-down-refresh/pull-down-refresh.js
var require_pull_down_refresh2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/pull-down-refresh/pull-down-refresh.js"() {
    require_pull_down_refresh();
    require_11();
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
          complete(res) {
            wx.hideToast();
            console.log(res, new Date());
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/animation/animation.wxml
var require_animation = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/animation/animation.wxml"() {
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/animation/animation.wxss
var require_12 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/animation/animation.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/animation/animation.js
var require_animation2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/animation/animation.js"() {
    require_animation();
    require_12();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/action-sheet/action-sheet.wxss
var require_13 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/action-sheet/action-sheet.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/action-sheet/action-sheet.js
var require_action_sheet2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/action-sheet/action-sheet.js"() {
    require_action_sheet();
    require_13();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/modal/modal.wxss
var require_14 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/modal/modal.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/modal/modal.js
var require_modal2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/modal/modal.js"() {
    require_modal();
    require_14();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/toast/toast.wxss
var require_15 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/toast/toast.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/toast/toast.js
var require_toast2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/toast/toast.js"() {
    require_toast();
    require_15();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-network-type/get-network-type.wxss
var require_16 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-network-type/get-network-type.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-network-type/get-network-type.js
var require_get_network_type2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-network-type/get-network-type.js"() {
    require_get_network_type();
    require_16();
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
          success(res) {
            console.log(res);
            that.setData({
              hasNetworkType: true,
              networkType: res.subtype || res.networkType
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/on-network-status-change/on-network-status-change.wxss
var require_17 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/on-network-status-change/on-network-status-change.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/on-network-status-change/on-network-status-change.js
var require_on_network_status_change2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/on-network-status-change/on-network-status-change.js"() {
    require_on_network_status_change();
    require_17();
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
        wx.onNetworkStatusChange(function(res) {
          that.setData({
            isConnected: res.isConnected,
            networkType: res.networkType
          });
        });
      },
      onShow() {
        const that = this;
        wx.getNetworkType({
          success(res) {
            that.setData({
              isConnected: res.networkType !== "none",
              networkType: res.networkType
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-system-info/get-system-info.wxss
var require_18 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-system-info/get-system-info.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-system-info/get-system-info.js
var require_get_system_info2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-system-info/get-system-info.js"() {
    require_get_system_info();
    require_18();
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
          success(res) {
            that.setData({
              systemInfo: res
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/on-compass-change/on-compass-change.wxss
var require_19 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/on-compass-change/on-compass-change.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/on-compass-change/on-compass-change.js
var require_on_compass_change2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/on-compass-change/on-compass-change.js"() {
    require_on_compass_change();
    require_19();
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
        wx.onCompassChange(function(res) {
          that.setData({
            direction: parseInt(res.direction, 10)
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/make-phone-call/make-phone-call.wxss
var require_20 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/make-phone-call/make-phone-call.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/make-phone-call/make-phone-call.js
var require_make_phone_call2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/make-phone-call/make-phone-call.js"() {
    require_make_phone_call();
    require_20();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/scan-code/scan-code.wxss
var require_21 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/scan-code/scan-code.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/scan-code/scan-code.js
var require_scan_code2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/scan-code/scan-code.js"() {
    require_scan_code();
    require_21();
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
          success(res) {
            that.setData({
              result: res.result
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/request/request.wxss
var require_22 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/request/request.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/request/request.js
var require_request2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/request/request.js"() {
    require_request();
    require_22();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/web-socket/web-socket.wxss
var require_23 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/web-socket/web-socket.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/web-socket/web-socket.js
var require_web_socket2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/web-socket/web-socket.js"() {
    require_web_socket();
    require_23();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/upload-file/upload-file.wxss
var require_24 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/upload-file/upload-file.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/upload-file/upload-file.js
var require_upload_file2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/upload-file/upload-file.js"() {
    require_upload_file();
    require_24();
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
          success(res) {
            console.log("chooseImage success, temp path is", res.tempFilePaths[0]);
            const imageSrc = res.tempFilePaths[0];
            wx.cloud.uploadFile({
              cloudPath: "example.png",
              filePath: imageSrc,
              config: {
                env: "release-b86096"
              },
              success: (res2) => {
                console.log(res2.fileID);
                console.log("uploadImage success, res is:", res2);
                wx.showToast({
                  title: "\u4E0A\u4F20\u6210\u529F",
                  icon: "success",
                  duration: 1e3
                });
                self.setData({
                  imageSrc,
                  fileID: res2.fileID
                });
              },
              fail({ errMsg }) {
                console.log("uploadImage fail, errMsg is", errMsg);
              }
            });
          },
          fail: (res) => {
            wx.showToast({
              icon: "none",
              title: "\u4E0A\u4F20\u5931\u8D25"
            });
            console.log("uploadImage fail, errMsg is", res.errMsg);
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/download-file/download-file.wxss
var require_25 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/download-file/download-file.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/download-file/download-file.js
var require_download_file2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/download-file/download-file.js"() {
    require_download_file();
    require_25();
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
          success: (res) => {
            console.log("downloadFile success, res is", res);
            self.setData({
              imageSrc: res.tempFilePath
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/image/image.wxss
var require_26 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/image/image.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/image/image.js
var require_image2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/image/image.js"() {
    require_image();
    require_26();
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
          success(res) {
            console.log(res);
            that.setData({
              imageList: res.tempFilePaths
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/voice/voice.wxss
var require_27 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/voice/voice.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/util/util.js
var require_util = __commonJS({
  "miniprogram-demo/miniprogram/util/util.js"(exports, module) {
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
    module.exports = {
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
    require_27();
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
        recorderManager.onStop((res) => {
          console.log("recorderManage: onStop");
          that.setData({
            hasRecord: true,
            recording: false,
            tempFilePath: res.tempFilePath,
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/file/file.wxss
var require_28 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/file/file.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/file/file.js
var require_file2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/file/file.js"() {
    require_file();
    require_28();
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
          success(res) {
            that.setData({
              tempFilePath: res.tempFilePaths[0]
            });
          }
        });
      },
      saveFile() {
        if (this.data.tempFilePath.length > 0) {
          const that = this;
          wx.saveFile({
            tempFilePath: this.data.tempFilePath,
            success(res) {
              that.setData({
                savedFilePath: res.savedFilePath
              });
              wx.setStorageSync("savedFilePath", res.savedFilePath);
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/on-accelerometer-change/on-accelerometer-change.wxss
var require_29 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/on-accelerometer-change/on-accelerometer-change.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/on-accelerometer-change/on-accelerometer-change.js
var require_on_accelerometer_change2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/on-accelerometer-change/on-accelerometer-change.js"() {
    require_on_accelerometer_change();
    require_29();
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
        wx.onAccelerometerChange(function(res) {
          that.setData({
            x: res.x.toFixed(2),
            y: res.y.toFixed(2),
            z: res.z.toFixed(2)
          });
          that.position.ax = Math.sin(res.x * Math.PI / 2);
          that.position.ay = -Math.sin(res.y * Math.PI / 2);
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/canvas/canvas.wxss
var require_30 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/canvas/canvas.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/canvas/example.js
var require_example = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/canvas/example.js"(exports, module) {
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
    module.exports = example;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/canvas/canvas.js
var require_canvas2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/canvas/canvas.js"() {
    require_canvas();
    require_30();
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
          success(res) {
            console.log(res);
          },
          fail(res) {
            console.log(res);
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/background-audio/background-audio.wxml
var require_background_audio = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/background-audio/background-audio.wxml"() {
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/background-audio/background-audio.wxss
var require_31 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/background-audio/background-audio.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/background-audio/background-audio.js
var require_background_audio2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/background-audio/background-audio.js"() {
    require_background_audio();
    require_31();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/video/video.wxss
var require_32 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/video/video.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/video/video.js
var require_video2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/video/video.js"() {
    require_video();
    require_32();
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
          success(res) {
            that.setData({
              src: res.tempFilePath
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-location/get-location.wxss
var require_33 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-location/get-location.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-location/get-location.js
var require_get_location2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-location/get-location.js"() {
    require_get_location();
    require_33();
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
          success(res) {
            console.log(res);
            that.setData({
              hasLocation: true,
              location: formatLocation(res.longitude, res.latitude)
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/open-location/open-location.wxss
var require_34 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/open-location/open-location.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/open-location/open-location.js
var require_open_location2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/open-location/open-location.js"() {
    require_open_location();
    require_34();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/choose-location/choose-location.wxss
var require_35 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/choose-location/choose-location.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/choose-location/choose-location.js
var require_choose_location2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/choose-location/choose-location.js"() {
    require_choose_location();
    require_35();
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
          success(res) {
            console.log(res);
            that.setData({
              hasLocation: true,
              location: formatLocation(res.longitude, res.latitude),
              locationAddress: res.address
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/storage/storage.wxss
var require_36 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/storage/storage.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/storage/storage.js
var require_storage2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/storage/storage.js"() {
    require_storage();
    require_36();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-wxml-node-info/get-wxml-node-info.wxss
var require_37 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-wxml-node-info/get-wxml-node-info.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-wxml-node-info/get-wxml-node-info.js
var require_get_wxml_node_info2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-wxml-node-info/get-wxml-node-info.js"() {
    require_get_wxml_node_info();
    require_37();
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
        $.exec((res) => {
          const rect = res[0];
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/load-font-face/load-font-face.wxss
var require_38 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/load-font-face/load-font-face.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/load-font-face/load-font-face.js
var require_load_font_face2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/load-font-face/load-font-face.js"() {
    require_load_font_face();
    require_38();
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
          success(res) {
            console.log(res.status);
            self.setData({ loaded: true });
          },
          fail(res) {
            console.log(res.status);
          },
          complete(res) {
            console.log(res.status);
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/clipboard-data/clipboard-data.wxss
var require_39 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/clipboard-data/clipboard-data.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/clipboard-data/clipboard-data.js
var require_clipboard_data2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/clipboard-data/clipboard-data.js"() {
    require_clipboard_data();
    require_39();
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
          success(res) {
            self.setData({
              pasted: res.data
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
  "miniprogram-demo/miniprogram/packageAPI/pages/bluetooth/bluetooth.wxml"() {
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/bluetooth/bluetooth.wxss
var require_40 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/bluetooth/bluetooth.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/bluetooth/bluetooth.js
var require_bluetooth2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/bluetooth/bluetooth.js"() {
    require_bluetooth();
    require_40();
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
          success: (res) => {
            console.log("openBluetoothAdapter success", res);
            this.startBluetoothDevicesDiscovery();
          },
          fail: (res) => {
            if (res.errCode === 10001) {
              wx.showModal({
                title: "\u9519\u8BEF",
                content: "\u672A\u627E\u5230\u84DD\u7259\u8BBE\u5907, \u8BF7\u6253\u5F00\u84DD\u7259\u540E\u91CD\u8BD5\u3002",
                showCancel: false
              });
              wx.onBluetoothAdapterStateChange(function(res2) {
                if (res2 && res2.available) {
                  this.startBluetoothDevicesDiscovery();
                }
              });
            }
          }
        });
      },
      getBluetoothAdapterState() {
        wx.getBluetoothAdapterState({
          success: (res) => {
            console.log("getBluetoothAdapterState", res);
            if (res.discovering) {
              this.onBluetoothDeviceFound();
            } else if (res.available) {
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
          success: (res) => {
            console.log("startBluetoothDevicesDiscovery success", res);
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
        wx.onBluetoothDeviceFound((res) => {
          res.devices.forEach((device) => {
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
          success: (res) => {
            for (let i = 0; i < res.services.length; i++) {
              if (res.services[i].isPrimary) {
                this.getBLEDeviceCharacteristics(deviceId, res.services[i].uuid);
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
          success: (res) => {
            console.log("getBLEDeviceCharacteristics success", res.characteristics);
            for (let i = 0; i < res.characteristics.length; i++) {
              const item = res.characteristics[i];
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
          fail(res) {
            console.error("getBLEDeviceCharacteristics", res);
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/screen-brightness/screen-brightness.wxss
var require_41 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/screen-brightness/screen-brightness.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/screen-brightness/screen-brightness.js
var require_screen_brightness2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/screen-brightness/screen-brightness.js"() {
    require_screen_brightness();
    require_41();
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
          success: (res) => {
            console.log(res);
            this.setData({
              screenBrightness: Number.parseFloat(res.value.toFixed(1))
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/vibrate/vibrate.wxss
var require_42 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/vibrate/vibrate.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/vibrate/vibrate.js
var require_vibrate2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/vibrate/vibrate.js"() {
    require_vibrate();
    require_42();
    Page({
      onShareAppMessage() {
        return {
          title: "\u632F\u52A8",
          path: "packageAPI/pages/vibrate/vibrate"
        };
      },
      vibrateShort() {
        wx.vibrateShort({
          success(res) {
            console.log(res);
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
          success(res) {
            console.log(res);
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/add-contact/add-contact.wxss
var require_43 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/add-contact/add-contact.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/add-contact/add-contact.js
var require_add_contact2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/add-contact/add-contact.js"() {
    require_add_contact();
    require_43();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wifi/wifi.wxss
var require_44 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wifi/wifi.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wifi/wifi.js
var require_wifi2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wifi/wifi.js"() {
    require_wifi();
    require_44();
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
              wx.onGetWifiList((res) => {
                const wifiList = res.wifiList.sort((a, b) => b.signalStrength - a.signalStrength).map((wifi) => {
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
          success(res) {
            const isIOS = res.platform === "ios";
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
          success(res) {
            console.log(res);
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/page-scroll/page-scroll.wxss
var require_45 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/page-scroll/page-scroll.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/page-scroll/page-scroll.js
var require_page_scroll2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/page-scroll/page-scroll.js"() {
    require_page_scroll();
    require_45();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/intersection-observer/intersection-observer.wxss
var require_46 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/intersection-observer/intersection-observer.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/intersection-observer/intersection-observer.js
var require_intersection_observer2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/intersection-observer/intersection-observer.js"() {
    require_intersection_observer();
    require_46();
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
        this._observer.relativeTo(".scroll-view").observe(".ball", (res) => {
          console.log(res);
          this.setData({
            appear: res.intersectionRatio > 0
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/capture-screen/capture-screen.wxss
var require_47 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/capture-screen/capture-screen.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/capture-screen/capture-screen.js
var require_capture_screen2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/capture-screen/capture-screen.js"() {
    require_capture_screen();
    require_47();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/worker/worker.wxss
var require_48 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/worker/worker.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/worker/worker.js
var require_worker2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/worker/worker.js"() {
    require_worker();
    require_48();
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
        const res = fib(this.data.input);
        const t1 = +Date.now();
        wx.hideLoading();
        this.setData({
          res,
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
        this._worker.onMessage((res) => {
          if (res.type === "execFunc_fib") {
            wx.hideLoading();
            const t1 = +Date.now();
            this.setData({
              res: res.result,
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/ibeacon/ibeacon.wxss
var require_49 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/ibeacon/ibeacon.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/ibeacon/ibeacon.js
var require_ibeacon2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/ibeacon/ibeacon.js"() {
    require_ibeacon();
    require_49();
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
          success: (res) => {
            console.log(res);
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/choose-address/choose-address.wxss
var require_50 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/choose-address/choose-address.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/choose-address/choose-address.js
var require_choose_address2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/choose-address/choose-address.js"() {
    require_choose_address();
    require_50();
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
          success: (res) => {
            this.setData({
              addressInfo: res
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/setting/setting.wxss
var require_51 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/setting/setting.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/setting/setting.js
var require_setting2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/setting/setting.js"() {
    require_setting();
    require_51();
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
          success: (res) => {
            console.log(res);
            this.setData({ setting: res.authSetting });
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/choose-invoice-title/choose-invoice-title.wxml
var require_choose_invoice_title = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/choose-invoice-title/choose-invoice-title.wxml"() {
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/choose-invoice-title/choose-invoice-title.wxss
var require_52 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/choose-invoice-title/choose-invoice-title.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/choose-invoice-title/choose-invoice-title.js
var require_choose_invoice_title2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/choose-invoice-title/choose-invoice-title.js"() {
    require_choose_invoice_title();
    require_52();
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
          success: (res) => {
            this.setData({
              type: res.type,
              title: res.title,
              taxNumber: res.taxNumber,
              companyAddress: res.companyAddress,
              telephone: res.telephone,
              bankName: res.bankName,
              bankAccount: res.bankAccount
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/soter-authentication/soter-authentication.wxss
var require_53 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/soter-authentication/soter-authentication.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/soter-authentication/soter-authentication.js
var require_soter_authentication2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/soter-authentication/soter-authentication.js"() {
    require_soter_authentication();
    require_53();
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
            success: (res) => {
              console.log(res);
              if (parseInt(res.isEnrolled, 10) <= 0) {
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
          success: (res) => {
            console.log(res);
            if (!res || res.supportMode.length === 0 || res.supportMode.indexOf(AUTH_MODE) < 0) {
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/subscribe-message/subscribe-message.wxss
var require_54 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/subscribe-message/subscribe-message.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/subscribe-message/subscribe-message.js
var require_subscribe_message2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/subscribe-message/subscribe-message.js"() {
    require_subscribe_message();
    require_54();
    Page({
      data: {},
      requestSubscribeMessage() {
        const self = this;
        wx.requestSubscribeMessage({
          tmplIds: ["y1bXHAg_oDuvrQ3pHgcODcMPl-2hZHenWugsqdB2CXY"],
          success(res) {
            console.log(res);
            if (res.errMsg === "requestSubscribeMessage:ok") {
              self.subscribeMessageSend();
            }
          },
          complete(res) {
            console.log(res);
          }
        });
      },
      subscribeMessageSend() {
        wx.cloud.callFunction({
          name: "openapi",
          data: {
            action: "sendSubscribeMessage"
          },
          success: (res) => {
            console.warn("[\u4E91\u51FD\u6570] [openapi] templateMessage.send \u8C03\u7528\u6210\u529F\uFF1A", res);
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/doc-web-view/doc-web-view.wxss
var require_55 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/doc-web-view/doc-web-view.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/doc-web-view/doc-web-view.js
var require_doc_web_view2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/doc-web-view/doc-web-view.js"() {
    require_doc_web_view();
    require_55();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/audio/audio.wxss
var require_56 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/audio/audio.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/audio/audio.js
var require_audio2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/audio/audio.js"() {
    require_audio();
    require_56();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-battery-info/get-battery-info.wxss
var require_57 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-battery-info/get-battery-info.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-battery-info/get-battery-info.js
var require_get_battery_info2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-battery-info/get-battery-info.js"() {
    require_get_battery_info();
    require_57();
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
          complete: (res) => {
            const msg = res.isCharging ? "\u5145\u7535\u4E2D" : "\u4F7F\u7528\u7535\u6C60\u4E2D";
            this.setData({
              level: res.level,
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-performance/get-performance.wxss
var require_58 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-performance/get-performance.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-performance/util.js
var require_util2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-performance/util.js"(exports, module) {
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
    module.exports = util;
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-performance/get-performance.js
var require_get_performance2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-performance/get-performance.js"() {
    require_get_performance();
    require_58();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/mdns/mdns.wxss
var require_59 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/mdns/mdns.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/mdns/mdns.js
var require_mdns2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/mdns/mdns.js"() {
    require_mdns();
    require_59();
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
          success: function(res) {
            console.log(res);
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
          success: (res) => {
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/udp-socket/udp-socket.wxss
var require_60 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/udp-socket/udp-socket.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/udp-socket/udp-socket.js
var require_udp_socket2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/udp-socket/udp-socket.js"() {
    require_udp_socket();
    require_60();
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
        this.remoteUDPSocket.onMessage((res) => {
          const { remoteInfo } = res;
          console.log(res);
          wx.showModal({
            title: `IP:${remoteInfo.address}\u53D1\u6765\u7684\u4FE1\u606F`,
            content: AB2String(res.message)
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/two-way-bindings/two-way-bindings.wxss
var require_61 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/two-way-bindings/two-way-bindings.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/two-way-bindings/two-way-bindings.js
var require_two_way_bindings2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/two-way-bindings/two-way-bindings.js"() {
    require_two_way_bindings();
    require_61();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/media-container/media-container.wxss
var require_62 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/media-container/media-container.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/media-container/media-container.js
var require_media_container2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/media-container/media-container.js"() {
    require_media_container();
    require_62();
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
          success(res) {
            console.log(res.tempFilePath);
            that.setData({
              [e.currentTarget.dataset.video]: res.tempFilePath
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
            success: (res) => {
              that.setData({
                targetSrc: res.tempFilePath
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-background-fetch-data/get-background-fetch-data.wxss
var require_63 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-background-fetch-data/get-background-fetch-data.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-background-fetch-data/get-background-fetch-data.js
var require_get_background_fetch_data2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-background-fetch-data/get-background-fetch-data.js"() {
    require_get_background_fetch_data();
    require_63();
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
            success(res) {
              console.log(res);
              const { fetchedData } = res;
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-background-prefetch-data/get-background-prefetch-data.wxss
var require_64 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-background-prefetch-data/get-background-prefetch-data.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/get-background-prefetch-data/get-background-prefetch-data.js
var require_get_background_prefetch_data2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/get-background-prefetch-data/get-background-prefetch-data.js"() {
    require_get_background_prefetch_data();
    require_64();
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
          const res = app.globalData.backgroundFetchData;
          const { fetchedData } = res;
          const result = JSON.parse(fetchedData);
          const systemInfo = wx.getSystemInfoSync();
          const timeStamp = systemInfo.brand === "iPhone" ? res.timeStamp * 1e3 : res.timeStamp;
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/wxs.wxss
var require_65 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/wxs.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/wxs.js
var require_wxs2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/wxs.js"() {
    require_wxs();
    require_65();
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
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/bluetooth/slave/slave.wxss
var require_66 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/bluetooth/slave/slave.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/bluetooth/slave/slave.js
var require_slave2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/bluetooth/slave/slave.js"() {
    require_slave();
    require_66();
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
        wx.onBLEPeripheralConnectionStateChanged((res) => {
          console.log("connect");
          const connects = this.data.connects;
          const idx = inArray(connects, "deviceId", res.deviceId);
          if (idx >= 0) {
            connects[idx] = res;
          } else {
            connects.push(res);
          }
          this.setData({ connects });
        });
      },
      openBluetoothAdapter() {
        wx.openBluetoothAdapter({
          mode: "peripheral",
          success: (res) => {
            console.log("openBluetoothAdapter success", res);
            this.createBLEPeripheralServer();
          },
          fail: (res) => {
            console.log(res);
            wx.showToast({
              title: `\u521B\u5EFA\u5931\u8D25 \u9519\u8BEF\u7801: ${res.errCode}`,
              icon: "none"
            });
            if (res.errCode === 10001) {
              wx.onBluetoothAdapterStateChange(function(res2) {
                console.log("onBluetoothAdapterStateChange", res2);
                if (res2.available) {
                  this.createBLEPeripheralServer();
                }
              });
            }
          }
        });
      },
      createBLEPeripheralServer() {
        wx.createBLEPeripheralServer().then((res) => {
          console.log("createBLEPeripheralServer", res);
          this.data.servers.push(res.server);
          this.server = res.server;
          this.setData({
            serverId: this.server.serverId
          });
          wx.showToast({
            title: "\u521B\u5EFA server "
          });
          this.server.onCharacteristicReadRequest((res2) => {
            const { serviceId: serviceId2, characteristicId: characteristicId2, callbackId } = res2;
            const buffer = new ArrayBuffer(1);
            const dataView = new DataView(buffer);
            const newValue = Math.ceil(Math.random() * 10);
            dataView.setUint8(0, newValue);
            console.log("onCharacteristicReadRequest", res2, newValue);
            this.server.writeCharacteristicValue({
              serviceId: serviceId2,
              characteristicId: characteristicId2,
              value: buffer,
              needNotify: true,
              callbackId
            });
          });
          this.server.onCharacteristicWriteRequest((res2) => {
            console.log("onCharacteristicWriteRequest", res2);
            const { serviceId: serviceId2, characteristicId: characteristicId2, value, callbackId } = res2;
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
        }).then((res) => {
          console.log("add Service", res);
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
        }).then((res) => {
          wx.showToast({
            title: "\u5173\u95ED\u670D\u52A1"
          });
          console.log("removeService", res);
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
        }).then((res) => {
          console.log("startAdvertising", res);
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

// miniprogram-demo/miniprogram/packageAPI/pages/resizable/resizable.wxml
var require_resizable = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/resizable/resizable.wxml"() {
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/resizable/resizable.wxss
var require_67 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/resizable/resizable.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/resizable/resizable.js
var require_resizable2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/resizable/resizable.js"() {
    require_resizable();
    require_67();
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

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/movable.wxml
var require_movable = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/movable.wxml"() {
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/movable.wxss
var require_68 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/movable.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/movable.js
var require_movable2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/movable.js"() {
    require_movable();
    require_68();
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

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/sidebar.wxml
var require_sidebar = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/sidebar.wxml"() {
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/sidebar.wxss
var require_69 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/sidebar.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/sidebar.js
var require_sidebar2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/sidebar.js"() {
    require_sidebar();
    require_69();
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

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/stick-top.wxml
var require_stick_top = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/stick-top.wxml"() {
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/stick-top.wxss
var require_70 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/stick-top.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/stick-top.js
var require_stick_top2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/stick-top.js"() {
    require_stick_top();
    require_70();
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

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/nearby.wxml
var require_nearby = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/nearby.wxml"() {
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/nearby.wxss
var require_71 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/nearby.wxss"(exports, module) {
    module.exports = {};
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/nearby.js
var require_nearby2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/nearby.js"() {
    require_nearby();
    require_71();
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
require_login2();
require_get_user_info2();
require_request_payment2();
require_share2();
require_share_button2();
require_custom_message2();
require_template_message2();
require_set_navigation_bar_title2();
require_navigation_bar_loading2();
require_navigator2();
require_pull_down_refresh2();
require_animation2();
require_action_sheet2();
require_modal2();
require_toast2();
require_get_network_type2();
require_on_network_status_change2();
require_get_system_info2();
require_on_compass_change2();
require_make_phone_call2();
require_scan_code2();
require_request2();
require_web_socket2();
require_upload_file2();
require_download_file2();
require_image2();
require_voice2();
require_file2();
require_on_accelerometer_change2();
require_canvas2();
require_background_audio2();
require_video2();
require_get_location2();
require_open_location2();
require_choose_location2();
require_storage2();
require_get_wxml_node_info2();
require_load_font_face2();
require_clipboard_data2();
require_bluetooth2();
require_screen_brightness2();
require_vibrate2();
require_add_contact2();
require_wifi2();
require_page_scroll2();
require_intersection_observer2();
require_capture_screen2();
require_worker2();
require_ibeacon2();
require_choose_address2();
require_setting2();
require_choose_invoice_title2();
require_soter_authentication2();
require_subscribe_message2();
require_doc_web_view2();
require_audio2();
require_get_battery_info2();
require_get_performance2();
require_mdns2();
require_udp_socket2();
require_two_way_bindings2();
require_media_container2();
require_get_background_fetch_data2();
require_get_background_prefetch_data2();
require_wxs2();
require_slave2();
require_resizable2();
require_movable2();
require_sidebar2();
require_stick_top2();
require_nearby2();
