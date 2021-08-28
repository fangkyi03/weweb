var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// mini-demo/app.js
var require_app = __commonJS({
  "mini-demo/app.js"() {
    window["__pages__"] = ["pages/index/index", "pages/logs/logs"];
    App({
      onLaunch() {
        const logs = wx.getStorageSync("logs") || [];
        logs.unshift(Date.now());
        wx.setStorageSync("logs", logs);
        wx.login({
          success: (res) => {
          }
        });
      },
      globalData: {
        userInfo: null
      }
    });
  }
});

// mini-demo/pages/index/index.wxml
var require_index = __commonJS({
  "mini-demo/pages/index/index.wxml"() {
    var page = getPage("pages/index/index");
    page.template = `<div>
        <wx-view class="container" >
            
        <wx-view class="usermotto" :bindtap="test" >
            
        <wx-text class="user-motto" >
            {{motto}}
        </wx-text>
    
        </wx-view>
    
        <wx-view v-if="show" >
            \u6D4B\u8BD5
        </wx-view>
    
        </wx-view>
    </div>`;
  }
});

// mini-demo/pages/index/index.js
var require_index2 = __commonJS({
  "mini-demo/pages/index/index.js"() {
    require_index();
    window["__wxRoute"] = "pages/index/index";
    var page = getPage("pages/index/index");
    page.json = `{
  "usingComponents": {}
}`;
    var app = getApp();
    Page({
      data: {
        motto: "Hello World",
        userInfo: {},
        canIUseOpenData: {},
        canIUseGetUserProfile: {},
        canIUse: false,
        hasUserInfo: false,
        show: false
      },
      bindViewTap() {
        wx.navigateTo({
          url: "../logs/logs"
        });
      },
      onLoad() {
        if (wx.getUserProfile) {
          this.setData({
            canIUseGetUserProfile: true
          });
        }
      },
      getUserProfile(e) {
        wx.getUserProfile({
          desc: "\u5C55\u793A\u7528\u6237\u4FE1\u606F",
          success: (res) => {
            console.log(res);
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            });
          }
        });
      },
      test() {
        this.setData({ motto: Math.random() * 1231231231, show: !this.show });
      },
      getUserInfo(e) {
        console.log(e);
        this.setData({
          userInfo: e.detail.userInfo,
          hasUserInfo: true
        });
      }
    });
  }
});

// mini-demo/pages/logs/logs.wxml
var require_logs = __commonJS({
  "mini-demo/pages/logs/logs.wxml"() {
    var page = getPage("pages/logs/logs");
    page.template = `<div>
        <wx-!--logs.wxml-- >
            
        <wx-view class="container log-list" >
            
        <div v-for="item in logs" v-for-item="log" key="timeStamp" >
            
        <wx-text class="log-item" >
            {{index+1}}.{{log.date}}
        </wx-text>
    
        </div>
    
        </wx-view>
    
        </wx-!--logs.wxml-->
    </div>`;
  }
});

// mini-demo/utils/util.js
var require_util = __commonJS({
  "mini-demo/utils/util.js"(exports, module) {
    var formatTime = (date) => {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
      return `${[year, month, day].map(formatNumber).join("/")} ${[hour, minute, second].map(formatNumber).join(":")}`;
    };
    var formatNumber = (n) => {
      n = n.toString();
      return n[1] ? n : `0${n}`;
    };
    module.exports = {
      formatTime
    };
  }
});

// mini-demo/pages/logs/logs.js
var require_logs2 = __commonJS({
  "mini-demo/pages/logs/logs.js"() {
    require_logs();
    window["__wxRoute"] = "pages/logs/logs";
    var page = getPage("pages/logs/logs");
    page.json = `{
  "navigationBarTitleText": "\u67E5\u770B\u542F\u52A8\u65E5\u5FD7",
  "usingComponents": {}
}`;
    var util = require_util();
    Page({
      data: {
        logs: []
      },
      onLoad() {
        this.setData({
          logs: (wx.getStorageSync("logs") || []).map((log) => {
            return {
              date: util.formatTime(new Date(log)),
              timeStamp: log
            };
          })
        });
      }
    });
  }
});

// <stdin>
require_app();
require_index2();
require_app();
require_logs2();
