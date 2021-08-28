var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res2) => function __init() {
  return fn && (res2 = (0, fn[Object.keys(fn)[0]])(fn = 0)), res2;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

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

// miniprogram-demo/miniprogram/app.js
var require_app = __commonJS({
  "miniprogram-demo/miniprogram/app.js"() {
    window["__pages__"] = ["page/component/index", "page/component/pages/view/view", "page/component/pages/scroll-view/scroll-view", "page/component/pages/swiper/swiper", "page/component/pages/text/text", "page/component/pages/icon/icon", "page/component/pages/progress/progress", "page/component/pages/button/button", "page/component/pages/checkbox/checkbox", "page/component/pages/form/form", "page/component/pages/input/input", "page/component/pages/label/label", "page/component/pages/picker/picker", "page/component/pages/radio/radio", "page/component/pages/slider/slider", "page/component/pages/switch/switch", "page/component/pages/textarea/textarea", "page/component/pages/navigator/navigator", "page/component/pages/navigator/navigate", "page/component/pages/navigator/redirect", "page/component/pages/image/image", "page/component/pages/video/video", "page/component/pages/map/map", "page/component/pages/canvas/canvas", "page/component/pages/ad/ad", "page/component/pages/movable-view/movable-view", "page/component/pages/cover-view/cover-view", "page/component/pages/rich-text/rich-text", "page/component/pages/picker-view/picker-view", "page/component/pages/camera/camera", "page/component/pages/camera-scan-code/camera-scan-code", "page/component/pages/map-styles/map-styles", "page/component/pages/live-player/live-player", "page/component/pages/live-pusher/live-pusher", "page/component/pages/aria-component/aria-component", "page/API/index", "page/cloud/index", "page/component/pages/doc-web-view/doc-web-view", "page/component/pages/open-data/open-data", "page/component/pages/web-view/web-view", "page/component/pages/editor/editor", "page/weui/example/index", "page/weui/example/cell/cell", "page/weui/example/slideview/slideview", "page/weui/example/form/form", "page/weui/example/uploader/uploader", "page/weui/example/article/article", "page/weui/example/badge/badge", "page/weui/example/flex/flex", "page/weui/example/footer/footer", "page/weui/example/gallery/gallery", "page/weui/example/grid/grid", "page/weui/example/loadmore/loadmore", "page/weui/example/loading/loading", "page/weui/example/panel/panel", "page/weui/example/preview/preview", "page/weui/example/dialog/dialog", "page/weui/example/msg/msg", "page/weui/example/msg/msg_text", "page/weui/example/msg/msg_text_primary", "page/weui/example/msg/msg_success", "page/weui/example/msg/msg_fail", "page/weui/example/navbar/navbar", "page/weui/example/navigation/navigation", "page/weui/example/tabbar/tabbar", "page/weui/example/icons/icons", "page/weui/example/form-page/form-page", "page/weui/example/half-screen-dialog/half-screen-dialog", "page/weui/example/actionsheet/actionsheet", "page/weui/example/toptips/toptips", "page/weui/example/searchbar/searchbar", "page/weui/example/emoji/emoji", "page/weui/example/video-swiper/video-swiper", "page/weui/example/index-list/index-list", "page/weui/example/sticky/sticky", "page/weui/example/tabs/tabs", "page/weui/example/vtabs/vtabs", "page/weui/example/select-text/select-text", "page/weui/example/barrage/barrage", "page/weui/example/wxml-to-canvas/wxml-to-canvas", "page/weui/example/telescopic/telescopic", "page/weui/example/linebreak/linebreak", "page/weui/example/sidenavigation/sidenavigation", "page/weui/example/pagination/pagination", "page/weui/example/freelayout/freelayout", "page/weui/example/layeredpresentation/layeredpresentation", "page/weui/example/horizontalexpansion/horizontalexpansion", "page/component/pages/canvas-2d/canvas-2d", "page/component/pages/webgl/webgl"];
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

// miniprogram-demo/miniprogram/page/component/index.wxml
var require_component = __commonJS({
  "miniprogram-demo/miniprogram/page/component/index.wxml"() {
    var page38 = getPage("page/component/index");
    page38.template = `
    <div>
        <wx-view class="index" >
            
        <wx-view class="index-hd" >
            
        <wx-image class="index-logo" src="resources/kind/logo.png" >
            
        </wx-image>
    
        <wx-view class="index-desc" >
            
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="index-bd" >
            
        <wx-view class="kind-list" >
            
        <wx-view class="kind-list-item" >
            
    
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
        </div>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/index.js
var require_component2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/index.js"() {
    require_component();
    window["__wxRoute"] = "page/component/index";
    var page38 = getPage("page/component/index");
    page38.json = `{
    "navigationBarTitleText": "\u5C0F\u7A0B\u5E8F\u5B98\u65B9\u7EC4\u4EF6\u5C55\u793A"
}
`;
    Page({
      onShow() {
        wx.reportAnalytics("enter_home_programmatically", {});
      },
      onShareAppMessage() {
        return {
          title: "\u5C0F\u7A0B\u5E8F\u5B98\u65B9\u7EC4\u4EF6\u5C55\u793A",
          path: "page/component/index"
        };
      },
      data: {
        list: [
          {
            id: "view",
            name: "\u89C6\u56FE\u5BB9\u5668",
            open: false,
            pages: ["view", "scroll-view", "swiper", "movable-view", "cover-view"]
          },
          {
            id: "content",
            name: "\u57FA\u7840\u5185\u5BB9",
            open: false,
            pages: ["text", "icon", "progress", "rich-text"]
          },
          {
            id: "form",
            name: "\u8868\u5355\u7EC4\u4EF6",
            open: false,
            pages: ["button", "checkbox", "form", "input", "label", "picker", "picker-view", "radio", "slider", "switch", "textarea", "editor"]
          },
          {
            id: "nav",
            name: "\u5BFC\u822A",
            open: false,
            pages: ["navigator"]
          },
          {
            id: "media",
            name: "\u5A92\u4F53\u7EC4\u4EF6",
            open: false,
            pages: ["image", "video", "camera", "live-pusher", "live-player"]
          },
          {
            id: "map",
            name: "\u5730\u56FE",
            open: false,
            pages: ["map"]
          },
          {
            id: "canvas",
            name: "\u753B\u5E03",
            open: false,
            pages: ["canvas", "canvas-2d", "webgl"]
          },
          {
            id: "open",
            name: "\u5F00\u653E\u80FD\u529B",
            open: false,
            pages: ["ad", "open-data", "web-view"]
          },
          {
            id: "obstacle-free",
            name: "\u65E0\u969C\u788D\u8BBF\u95EE",
            open: false,
            pages: ["aria-component"]
          }
        ],
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
      kindToggle(e) {
        const id = e.currentTarget.id;
        const list = this.data.list;
        for (let i = 0, len = list.length; i < len; ++i) {
          if (list[i].id === id) {
            list[i].open = !list[i].open;
          } else {
            list[i].open = false;
          }
        }
        this.setData({
          list
        });
        wx.reportAnalytics("click_view_programmatically", {});
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/common/head.wxml
var require_head = __commonJS({
  "miniprogram-demo/miniprogram/page/common/head.wxml"() {
    registerComponent("head", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view class="page-head" >
            
        <wx-view class="page-head-title" >
            {{title}}
        </wx-view>
    
        <wx-view class="page-head-line" >
            
        </wx-view>
    
        <wx-view :v-if="desc" class="page-head-desc" >
            {{desc}}
        </wx-view>
    
        </wx-view>
    </div>`
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/view/view.wxml
var require_view = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/view/view.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/view/view");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'view'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            
        <wx-text >
            flex-direction:row
\u6A2A\u5411\u5E03\u5C40
        </wx-text>
    
        </wx-view>
    
        <wx-view class="page-section-spacing" >
            
        <wx-view class="flex-wrp" style="flex-direction:row;" >
            
        <wx-view class="flex-item demo-text-1" >
            
        </wx-view>
    
        <wx-view class="flex-item demo-text-2" >
            
        </wx-view>
    
        <wx-view class="flex-item demo-text-3" >
            
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            
        <wx-text >
            flex-direction:column
\u7EB5\u5411\u5E03\u5C40
        </wx-text>
    
        </wx-view>
    
        <wx-view class="flex-wrp" style="flex-direction:column;" >
            
        <wx-view class="flex-item flex-item-V demo-text-1" >
            
        </wx-view>
    
        <wx-view class="flex-item flex-item-V demo-text-2" >
            
        </wx-view>
    
        <wx-view class="flex-item flex-item-V demo-text-3" >
            
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/view/view.js
var require_view2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/view/view.js"() {
    require_view();
    window["__wxRoute"] = "page/component/pages/view/view";
    var page38 = getPage("page/component/pages/view/view");
    page38.json = `{
    "navigationBarTitleText": "view"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "view",
          path: "page/component/pages/view/view"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/scroll-view/scroll-view.wxml
var require_scroll_view = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/scroll-view/scroll-view.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/scroll-view/scroll-view");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'scroll-view'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            
        <wx-text >
            VerticalScroll
\u7EB5\u5411\u6EDA\u52A8
        </wx-text>
    
        </wx-view>
    
        <wx-view class="page-section-spacing" >
            
        <wx-scroll-view scroll-y="true" style="height: 150px;" bindscrolltoupper="upper" bindscrolltolower="lower" bindscroll="scroll" :scroll-into-view="toView" :scroll-top="scrollTop" >
            
        <wx-view id="demo1" class="scroll-view-item demo-text-1" >
            
        </wx-view>
    
        <wx-view id="demo2" class="scroll-view-item demo-text-2" >
            
        </wx-view>
    
        <wx-view id="demo3" class="scroll-view-item demo-text-3" >
            
        </wx-view>
    
        </wx-scroll-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            
        <wx-text >
            HorizontalScroll
\u6A2A\u5411\u6EDA\u52A8
        </wx-text>
    
        </wx-view>
    
        <wx-view class="page-section-spacing" >
            
        <wx-scroll-view class="scroll-view_H" scroll-x="true" bindscroll="scroll" style="width: 100%" >
            
        <wx-view id="demo1" class="scroll-view-item_H demo-text-1" >
            
        </wx-view>
    
        <wx-view id="demo2" class="scroll-view-item_H demo-text-2" >
            
        </wx-view>
    
        <wx-view id="demo3" class="scroll-view-item_H demo-text-3" >
            
        </wx-view>
    
        </wx-scroll-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            
        <wx-text >
            \u81EA\u5B9A\u4E49\u4E0B\u62C9\u5237\u65B0
\u81EA\u5B9A\u4E49\uFF1A
        </wx-text>
    
        </wx-view>
    
        <wx-view class="page-section-spacing" >
            
        <wx-scroll-view scroll-y style="width: 100%; height: 400px;" :refresher-enabled="true" :refresher-threshold="80" refresher-default-style="none" refresher-background="lightgreen" :bindrefresherpulling="refresh.onPulling" >
            
        <wx-view slot="refresher" class="refresh-container" style="display: block; width: 100%; height: 80px; background: #ECBDF0; display: flex; align-items: center;" >
            
        <wx-view class="view1" style="position: absolute; color: white; text-align: center; width: 100%;" >
            \u4E0B\u62C9\u5237\u65B0
        </wx-view>
    
        </wx-view>
    
        <wx-view id="demo1" class="scroll-view-item_H demo-text-1" >
            
        </wx-view>
    
        <wx-view id="demo2" class="scroll-view-item_H demo-text-2" >
            
        </wx-view>
    
        <wx-view id="demo3" class="scroll-view-item_H demo-text-3" >
            
        </wx-view>
    
        </wx-scroll-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            
        <wx-text >
            \u9ED8\u8BA4\uFF1A
        </wx-text>
    
        </wx-view>
    
        <wx-view class="page-section-spacing" >
            
        <wx-scroll-view scroll-y style="width: 100%; height: 400px;" :refresher-enabled="true" :refresher-threshold="100" refresher-default-style="white" refresher-background="lightgreen" :refresher-triggered="triggered" bindrefresherpulling="onPulling" bindrefresherrefresh="onRefresh" bindrefresherrestore="onRestore" bindrefresherabort="onAbort" >
            
        <wx-view id="demo1" class="scroll-view-item_H demo-text-1" >
            
        </wx-view>
    
        <wx-view id="demo2" class="scroll-view-item_H demo-text-2" >
            
        </wx-view>
    
        <wx-view id="demo3" class="scroll-view-item_H demo-text-3" >
            
        </wx-view>
    
        </wx-scroll-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            
        <wx-text >
            \u6EDA\u52A8\u9A71\u52A8\u52A8\u753B
        </wx-text>
    
        </wx-view>
    
        <wx-view class="page-section-spacing" >
            
        <wx-scroll-view id="scroll-view_D" scroll-y="true" style="height: 150px;" bindscrolltoupper="upper" bindscrolltolower="lower" bindscroll="scroll" :scroll-into-view="toView" :scroll-top="scrollTop" >
            
        <wx-view class="scroll-view-item_H demo-text-1" id="scroll-sample-object1" >
            
        </wx-view>
    
        <wx-view class="scroll-view-item_H demo-text-2" id="scroll-sample-object2" >
            
        </wx-view>
    
        <wx-view class="scroll-view-item_H demo-text-3" id="scroll-sample-object3" >
            
        </wx-view>
    
        </wx-scroll-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        <wx-wxs module="refresh" >
            module.exports={onPulling:function(evt,instance){varp=Math.min(evt.detail.dy/80,1)console.log(p)varview=instance.selectComponent('.refresh-container')view.setStyle({opacity:p,transform:"scale("+p+")"})}}
        </wx-wxs>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/scroll-view/scroll-view.js
var require_scroll_view2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/scroll-view/scroll-view.js"() {
    require_scroll_view();
    window["__wxRoute"] = "page/component/pages/scroll-view/scroll-view";
    var page38 = getPage("page/component/pages/scroll-view/scroll-view");
    page38.json = `{
    "navigationBarTitleText": "scroll-view",
    "pageOrientation": "auto"

}
`;
    var order = ["demo1", "demo2", "demo3"];
    Page({
      onLoad() {
        this.animate("#scroll-sample-object1", [{
          borderRadius: "0",
          offset: 0
        }, {
          borderRadius: "25%",
          offset: 0.5
        }, {
          borderRadius: "50%",
          offset: 1
        }], 2e3, {
          scrollSource: "#scroll-view_D",
          timeRange: 2e3,
          startScrollOffset: 0,
          endScrollOffset: 150
        });
        this.animate("#scroll-sample-object2", [{
          opacity: 1,
          offset: 0
        }, {
          opacity: 0.5,
          offset: 0.5
        }, {
          opacity: 0.3,
          offset: 1
        }], 2e3, {
          scrollSource: "#scroll-view_D",
          timeRange: 2e3,
          startScrollOffset: 150,
          endScrollOffset: 300
        });
        this.animate("#scroll-sample-object3", [{
          background: "white",
          offset: 0
        }, {
          background: "yellow",
          offset: 1
        }], 2e3, {
          scrollSource: "#scroll-view_D",
          timeRange: 2e3,
          startScrollOffset: 300,
          endScrollOffset: 400
        });
      },
      onPulling(e) {
        console.log("onPulling:", e);
      },
      onRefresh() {
        if (this._freshing)
          return;
        this._freshing = true;
        setTimeout(() => {
          this.setData({
            triggered: false
          });
          this._freshing = false;
        }, 3e3);
      },
      onRestore(e) {
        console.log("onRestore:", e);
      },
      onAbort(e) {
        console.log("onAbort", e);
      },
      onShareAppMessage() {
        return {
          title: "scroll-view",
          path: "page/component/pages/scroll-view/scroll-view"
        };
      },
      data: {
        toView: "green",
        triggered: false
      },
      upper(e) {
        console.log(e);
      },
      lower(e) {
        console.log(e);
      },
      scroll(e) {
        console.log(e);
      },
      scrollToTop() {
        this.setAction({
          scrollTop: 0
        });
      },
      tap() {
        for (let i = 0; i < order.length; ++i) {
          if (order[i] === this.data.toView) {
            this.setData({
              toView: order[i + 1],
              scrollTop: (i + 1) * 200
            });
            break;
          }
        }
      },
      tapMove() {
        this.setData({
          scrollTop: this.data.scrollTop + 10
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/swiper/swiper.wxml
var require_swiper = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/swiper/swiper.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/swiper/swiper");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'swiper'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section page-section-spacing swiper" >
            
        <wx-swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" >
            
        <div v-for="item in background" >
            
        <wx-swiper-item >
            
        <wx-view :class="swiper-item item" >
            
        </wx-view>
    
        </wx-swiper-item>
    
        </div>
    
        </wx-swiper>
    
        </wx-view>
    
        <wx-view class="page-section" style="margin-top: 20px;margin-bottom: 0;" >
            
        <wx-view class="weui-cells weui-cells_after-title" >
            
        <wx-view class="weui-cell weui-cell_switch" >
            
        <wx-view class="weui-cell__bd" >
            \u6307\u793A\u70B9
        </wx-view>
    
        <wx-view class="weui-cell__ft" >
            
        <wx-switch :checked="indicatorDots" bindchange="changeIndicatorDots" >
            
        </wx-switch>
    
        </wx-view>
    
        <wx-view class="weui-cell weui-cell_switch" >
            
        <wx-view class="weui-cell__bd" >
            \u81EA\u52A8\u64AD\u653E
        </wx-view>
    
        <wx-view class="weui-cell__ft" >
            
        <wx-switch :checked="autoplay" bindchange="changeAutoplay" >
            
        </wx-switch>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page-section page-section-spacing" >
            
        <wx-view class="page-section-title" >
            
        <wx-text >
            \u5E7B\u706F\u7247\u5207\u6362\u65F6\u957F(ms)
        </wx-text>
    
        <wx-text class="info" >
            {{duration}}
        </wx-text>
    
        </wx-view>
    
        <wx-slider bindchange="durationChange" :value="duration" min="500" max="2000" >
            
        <wx-view class="page-section-title" >
            
        <wx-text >
            \u81EA\u52A8\u64AD\u653E\u95F4\u9694\u65F6\u957F(ms)
        </wx-text>
    
        <wx-text class="info" >
            {{interval}}
        </wx-text>
    
        </wx-view>
    
        <wx-slider bindchange="intervalChange" :value="interval" min="2000" max="10000" >
            
        </wx-slider>
    
        </wx-slider>
    
        <component is="foot" >
            
        </component>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/swiper/swiper.js
var require_swiper2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/swiper/swiper.js"() {
    require_swiper();
    window["__wxRoute"] = "page/component/pages/swiper/swiper";
    var page38 = getPage("page/component/pages/swiper/swiper");
    page38.json = `{
    "navigationBarTitleText": "swiper"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "swiper",
          path: "page/component/pages/swiper/swiper"
        };
      },
      data: {
        background: ["demo-text-1", "demo-text-2", "demo-text-3"],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 2e3,
        duration: 500
      },
      changeIndicatorDots() {
        this.setData({
          indicatorDots: !this.data.indicatorDots
        });
      },
      changeAutoplay() {
        this.setData({
          autoplay: !this.data.autoplay
        });
      },
      intervalChange(e) {
        this.setData({
          interval: e.detail.value
        });
      },
      durationChange(e) {
        this.setData({
          duration: e.detail.value
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/text/text.wxml
var require_text = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/text/text.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/text/text");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'text'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section page-section-spacing" >
            
        <wx-view class="text-box" scroll-y="true" :scroll-top="scrollTop" >
            
        <wx-text >
            {{text}}
        </wx-text>
    
        </wx-view>
    
        <wx-button :disabled="!canAdd" bindtap="add" >
            addline
        </wx-button>
    
        <wx-button :disabled="!canRemove" bindtap="remove" >
            removeline
        </wx-button>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/text/text.js
var require_text2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/text/text.js"() {
    require_text();
    window["__wxRoute"] = "page/component/pages/text/text";
    var page38 = getPage("page/component/pages/text/text");
    page38.json = `{
    "navigationBarTitleText": "text"
}
`;
    var texts = [
      "2011\u5E741\u6708\uFF0C\u5FAE\u4FE11.0\u53D1\u5E03",
      "\u540C\u5E745\u6708\uFF0C\u5FAE\u4FE12.0\u8BED\u97F3\u5BF9\u8BB2\u53D1\u5E03",
      "10\u6708\uFF0C\u5FAE\u4FE13.0\u65B0\u589E\u6447\u4E00\u6447\u529F\u80FD",
      "2012\u5E743\u6708\uFF0C\u5FAE\u4FE1\u7528\u6237\u7A81\u78341\u4EBF",
      "4\u6708\u4EFD\uFF0C\u5FAE\u4FE14.0\u670B\u53CB\u5708\u53D1\u5E03",
      "\u540C\u5E747\u6708\uFF0C\u5FAE\u4FE14.2\u53D1\u5E03\u516C\u4F17\u5E73\u53F0",
      "2013\u5E748\u6708\uFF0C\u5FAE\u4FE15.0\u53D1\u5E03\u5FAE\u4FE1\u652F\u4ED8",
      "2014\u5E749\u6708\uFF0C\u4F01\u4E1A\u53F7\u53D1\u5E03",
      "\u540C\u6708\uFF0C\u53D1\u5E03\u5FAE\u4FE1\u5361\u5305",
      "2015\u5E741\u6708\uFF0C\u5FAE\u4FE1\u7B2C\u4E00\u6761\u670B\u53CB\u5708\u5E7F\u544A",
      "2016\u5E741\u6708\uFF0C\u4F01\u4E1A\u5FAE\u4FE1\u53D1\u5E03",
      "2017\u5E741\u6708\uFF0C\u5C0F\u7A0B\u5E8F\u53D1\u5E03",
      "......"
    ];
    Page({
      onShareAppMessage() {
        return {
          title: "text",
          path: "page/component/pages/text/text"
        };
      },
      data: {
        text: "",
        canAdd: true,
        canRemove: false
      },
      extraLine: [],
      add() {
        this.extraLine.push(texts[this.extraLine.length % 12]);
        this.setData({
          text: this.extraLine.join("\n"),
          canAdd: this.extraLine.length < 12,
          canRemove: this.extraLine.length > 0
        });
        setTimeout(() => {
          this.setData({
            scrollTop: 99999
          });
        }, 0);
      },
      remove() {
        if (this.extraLine.length > 0) {
          this.extraLine.pop();
          this.setData({
            text: this.extraLine.join("\n"),
            canAdd: this.extraLine.length < 12,
            canRemove: this.extraLine.length > 0
          });
        }
        setTimeout(() => {
          this.setData({
            scrollTop: 99999
          });
        }, 0);
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/icon/icon.wxml
var require_icon = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/icon/icon.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/icon/icon");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'icon'}" >
            
        <wx-view class="icon-box" >
            
        <wx-icon class="icon-box-img" type="success" size="93" >
            
        </wx-icon>
    
        <wx-view class="icon-box-ctn" >
            
        <wx-view class="icon-box-title" >
            \u6210\u529F
        </wx-view>
    
        <wx-view class="icon-box-desc" >
            \u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u987A\u5229\u5B8C\u6210
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="icon-box" >
            
        <wx-icon class="icon-box-img" type="info" size="93" >
            
        </wx-icon>
    
        <wx-view class="icon-box-ctn" >
            
        <wx-view class="icon-box-title" >
            \u63D0\u793A
        </wx-view>
    
        <wx-view class="icon-box-desc" >
            \u7528\u4E8E\u8868\u793A\u4FE1\u606F\u63D0\u793A\uFF1B\u4E5F\u5E38\u7528\u4E8E\u7F3A\u4E4F\u6761\u4EF6\u7684\u64CD\u4F5C\u62E6\u622A\uFF0C\u63D0\u793A\u7528\u6237\u6240\u9700\u4FE1\u606F
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="icon-box" >
            
        <wx-icon class="icon-box-img" type="warn" size="93" color="#C9C9C9" >
            
        </wx-icon>
    
        <wx-view class="icon-box-ctn" >
            
        <wx-view class="icon-box-title" >
            \u666E\u901A\u8B66\u544A
        </wx-view>
    
        <wx-view class="icon-box-desc" >
            \u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u540E\u5C06\u5F15\u8D77\u4E00\u5B9A\u540E\u679C\u7684\u60C5\u51B5\uFF1B\u4E5F\u7528\u4E8E\u8868\u793A\u7531\u4E8E\u7CFB\u7EDF\u539F\u56E0\u800C\u9020\u6210\u7684\u8D1F\u5411\u7ED3\u679C
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="icon-box" >
            
        <wx-icon class="icon-box-img" type="warn" size="93" >
            
        </wx-icon>
    
        <wx-view class="icon-box-ctn" >
            
        <wx-view class="icon-box-title" >
            \u5F3A\u70C8\u8B66\u544A
        </wx-view>
    
        <wx-view class="icon-box-desc" >
            \u7528\u4E8E\u8868\u793A\u7531\u4E8E\u7528\u6237\u539F\u56E0\u9020\u6210\u7684\u8D1F\u5411\u7ED3\u679C\uFF1B\u4E5F\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u540E\u5C06\u5F15\u8D77\u4E0D\u53EF\u633D\u56DE\u7684\u4E25\u91CD\u540E\u679C\u7684\u60C5\u51B5
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="icon-box" >
            
        <wx-icon class="icon-box-img" type="waiting" size="93" >
            
        </wx-icon>
    
        <wx-view class="icon-box-ctn" >
            
        <wx-view class="icon-box-title" >
            \u7B49\u5F85
        </wx-view>
    
        <wx-view class="icon-box-desc" >
            \u7528\u4E8E\u8868\u793A\u7B49\u5F85\uFF0C\u544A\u77E5\u7528\u6237\u7ED3\u679C\u9700\u7B49\u5F85
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="icon-box" >
            
        <wx-view class="icon-small-wrp" >
            
        <wx-icon class="icon-small" type="success_no_circle" size="23" >
            
        </wx-icon>
    
        </wx-view>
    
        <wx-view class="icon-box-ctn" >
            
        <wx-view class="icon-box-title" >
            \u591A\u9009\u63A7\u4EF6\u56FE\u6807_\u5DF2\u9009\u62E9
        </wx-view>
    
        <wx-view class="icon-box-desc" >
            \u7528\u4E8E\u591A\u9009\u63A7\u4EF6\u4E2D\uFF0C\u8868\u793A\u5DF2\u9009\u62E9\u8BE5\u9879\u76EE
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="icon-box" >
            
        <wx-view class="icon-small-wrp" >
            
        <wx-icon class="icon-small" type="circle" size="23" >
            
        </wx-icon>
    
        </wx-view>
    
        <wx-view class="icon-box-ctn" >
            
        <wx-view class="icon-box-title" >
            \u591A\u9009\u63A7\u4EF6\u56FE\u6807_\u672A\u9009\u62E9
        </wx-view>
    
        <wx-view class="icon-box-desc" >
            \u7528\u4E8E\u591A\u9009\u63A7\u4EF6\u4E2D\uFF0C\u8868\u793A\u8BE5\u9879\u76EE\u53EF\u88AB\u9009\u62E9\uFF0C\u4F46\u8FD8\u672A\u9009\u62E9
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="icon-box" >
            
        <wx-view class="icon-small-wrp" >
            
        <wx-icon class="icon-small" type="warn" size="23" >
            
        </wx-icon>
    
        </wx-view>
    
        <wx-view class="icon-box-ctn" >
            
        <wx-view class="icon-box-title" >
            \u9519\u8BEF\u63D0\u793A
        </wx-view>
    
        <wx-view class="icon-box-desc" >
            \u7528\u4E8E\u5728\u8868\u5355\u4E2D\u8868\u793A\u51FA\u73B0\u9519\u8BEF
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="icon-box" >
            
        <wx-view class="icon-small-wrp" >
            
        <wx-icon class="icon-small" type="success" size="23" >
            
        </wx-icon>
    
        </wx-view>
    
        <wx-view class="icon-box-ctn" >
            
        <wx-view class="icon-box-title" >
            \u5355\u9009\u63A7\u4EF6\u56FE\u6807_\u5DF2\u9009\u62E9
        </wx-view>
    
        <wx-view class="icon-box-desc" >
            \u7528\u4E8E\u5355\u9009\u63A7\u4EF6\u4E2D\uFF0C\u8868\u793A\u5DF2\u9009\u62E9\u8BE5\u9879\u76EE
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="icon-box" >
            
        <wx-view class="icon-small-wrp" >
            
        <wx-icon class="icon-small" type="download" size="23" >
            
        </wx-icon>
    
        </wx-view>
    
        <wx-view class="icon-box-ctn" >
            
        <wx-view class="icon-box-title" >
            \u4E0B\u8F7D
        </wx-view>
    
        <wx-view class="icon-box-desc" >
            \u7528\u4E8E\u8868\u793A\u53EF\u4E0B\u8F7D
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="icon-box" >
            
        <wx-view class="icon-small-wrp" >
            
        <wx-icon class="icon-small" type="info_circle" size="23" >
            
        </wx-icon>
    
        </wx-view>
    
        <wx-view class="icon-box-ctn" >
            
        <wx-view class="icon-box-title" >
            \u63D0\u793A
        </wx-view>
    
        <wx-view class="icon-box-desc" >
            \u7528\u4E8E\u5728\u8868\u5355\u4E2D\u8868\u793A\u6709\u4FE1\u606F\u63D0\u793A
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="icon-box" >
            
        <wx-view class="icon-small-wrp" >
            
        <wx-icon class="icon-small" type="cancel" size="23" >
            
        </wx-icon>
    
        </wx-view>
    
        <wx-view class="icon-box-ctn" >
            
        <wx-view class="icon-box-title" >
            \u505C\u6B62\u6216\u5173\u95ED
        </wx-view>
    
        <wx-view class="icon-box-desc" >
            \u7528\u4E8E\u5728\u8868\u5355\u4E2D\uFF0C\u8868\u793A\u5173\u95ED\u6216\u505C\u6B62
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="icon-box" >
            
        <wx-view class="icon-small-wrp" >
            
        <wx-icon class="icon-small" type="search" size="14" >
            
        </wx-icon>
    
        </wx-view>
    
        <wx-view class="icon-box-ctn" >
            
        <wx-view class="icon-box-title" >
            \u641C\u7D22
        </wx-view>
    
        <wx-view class="icon-box-desc" >
            \u7528\u4E8E\u641C\u7D22\u63A7\u4EF6\u4E2D\uFF0C\u8868\u793A\u53EF\u641C\u7D22
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/icon/icon.js
var require_icon2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/icon/icon.js"() {
    require_icon();
    window["__wxRoute"] = "page/component/pages/icon/icon";
    var page38 = getPage("page/component/pages/icon/icon");
    page38.json = `{
    "navigationBarTitleText": "icon"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "icon",
          path: "page/component/pages/icon/icon"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/progress/progress.wxml
var require_progress = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/progress/progress.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/progress/progress");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'progress'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="progress-box" >
            
        <wx-progress percent="20" show-info stroke-width="3" >
            
        </wx-progress>
    
        <wx-view class="progress-box" >
            
        <wx-progress percent="40" active stroke-width="3" >
            
        <wx-icon class="progress-cancel" type="cancel" >
            
        </wx-icon>
    
        </wx-progress>
    
        <wx-view class="progress-box" >
            
        <wx-progress percent="60" active stroke-width="3" >
            
        </wx-progress>
    
        <wx-view class="progress-box" >
            
        <wx-progress percent="80" color="#10AEFF" active stroke-width="3" >
            
        </wx-progress>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/progress/progress.js
var require_progress2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/progress/progress.js"() {
    require_progress();
    window["__wxRoute"] = "page/component/pages/progress/progress";
    var page38 = getPage("page/component/pages/progress/progress");
    page38.json = `{
    "navigationBarTitleText": "progress"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "progress",
          path: "page/component/pages/progress/progress"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/button/button.wxml
var require_button = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/button/button.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/button/button");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'button'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="btn-area" id="buttonContainer" >
            
        <wx-button type="primary" >
            \u9875\u9762\u4E3B\u64CD\u4F5CNormal
        </wx-button>
    
        <wx-button type="primary" loading="true" >
            \u9875\u9762\u4E3B\u64CD\u4F5CLoading
        </wx-button>
    
        <wx-button type="primary" disabled="true" >
            \u9875\u9762\u4E3B\u64CD\u4F5CDisabled
        </wx-button>
    
        <wx-button type="default" >
            \u9875\u9762\u6B21\u8981\u64CD\u4F5CNormal
        </wx-button>
    
        <wx-button type="default" disabled="true" >
            \u9875\u9762\u6B21\u8981\u64CD\u4F5CDisabled
        </wx-button>
    
        <wx-button type="warn" >
            \u8B66\u544A\u7C7B\u64CD\u4F5CNormal
        </wx-button>
    
        <wx-button type="warn" disabled="true" >
            \u8B66\u544A\u7C7B\u64CD\u4F5CDisabled
        </wx-button>
    
        <wx-view class="button-sp-area" >
            
        <wx-button type="primary" plain="true" >
            \u6309\u94AE
        </wx-button>
    
        <wx-button type="primary" disabled="true" plain="true" >
            \u4E0D\u53EF\u70B9\u51FB\u7684\u6309\u94AE
        </wx-button>
    
        <wx-button type="default" plain="true" >
            \u6309\u94AE
        </wx-button>
    
        <wx-button type="default" disabled="true" plain="true" >
            \u6309\u94AE
        </wx-button>
    
        <wx-button class="mini-btn" type="primary" size="mini" >
            \u6309\u94AE
        </wx-button>
    
        <wx-button class="mini-btn" type="default" size="mini" >
            \u6309\u94AE
        </wx-button>
    
        <wx-button class="mini-btn" type="warn" size="mini" >
            \u6309\u94AE
        </wx-button>
    
        </wx-view>
    
        <wx-button type="primary" open-type="contact" bindcontact="handleContact" :show-message-card="true" send-message-title="\u4E34\u65F6\u4F1A\u8BDD" >
            \u6253\u5F00\u5BA2\u670D\u4F1A\u8BDD
        </wx-button>
    
        <wx-button type="primary" open-type="share" >
            \u89E6\u53D1\u7528\u6237\u8F6C\u53D1
        </wx-button>
    
        <wx-button type="primary" open-type="getPhoneNumber" bindgetphonenumber="handleGetPhoneNumber" >
            \u83B7\u53D6\u7528\u6237\u624B\u673A\u53F7
        </wx-button>
    
        <wx-button type="primary" open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="handleGetUserInfo" >
            \u83B7\u53D6\u7528\u6237\u4FE1\u606F
        </wx-button>
    
        <wx-button type="primary" open-type="openSetting" bindopensetting="handleOpenSetting" >
            \u6253\u5F00\u8BBE\u7F6E\u6388\u6743\u9875
        </wx-button>
    
        <wx-button type="primary" open-type="feedback" >
            \u6253\u5F00\u610F\u89C1\u53CD\u9988
        </wx-button>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/button/button.js
var require_button2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/button/button.js"() {
    require_button();
    window["__wxRoute"] = "page/component/pages/button/button";
    var page38 = getPage("page/component/pages/button/button");
    page38.json = `{
    "navigationBarTitleText": "button"
}
`;
    var types = ["default", "primary", "warn"];
    var pageObject = {
      data: {
        defaultSize: "default",
        primarySize: "default",
        warnSize: "default",
        disabled: false,
        plain: false,
        loading: false
      },
      onShareAppMessage() {
        return {
          title: "button",
          path: "page/component/pages/button/button"
        };
      },
      setDisabled() {
        this.setData({
          disabled: !this.data.disabled
        });
      },
      setPlain() {
        this.setData({
          plain: !this.data.plain
        });
      },
      setLoading() {
        this.setData({
          loading: !this.data.loading
        });
      },
      handleContact(e) {
        console.log(e.detail);
      },
      handleGetPhoneNumber(e) {
        console.log(e.detail);
      },
      handleGetUserInfo(e) {
        console.log(e.detail);
      },
      handleOpenSetting(e) {
        console.log(e.detail.authSetting);
      }
    };
    for (let i = 0; i < types.length; ++i) {
      (function(type) {
        pageObject[type] = function() {
          const key = type + "Size";
          const changedData = {};
          changedData[key] = this.data[key] === "default" ? "mini" : "default";
          this.setData(changedData);
        };
      })(types[i]);
    }
    Page(pageObject);
  }
});

// miniprogram-demo/miniprogram/page/component/pages/checkbox/checkbox.wxml
var require_checkbox = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/checkbox/checkbox.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/checkbox/checkbox");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'checkbox'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            \u9ED8\u8BA4\u6837\u5F0F
        </wx-view>
    
        <wx-label class="checkbox" >
            
        <wx-checkbox value="cb" checked="true" >
            \u9009\u4E2D
        </wx-checkbox>
    
        <wx-label class="checkbox" >
            
        <wx-checkbox value="cb" >
            \u672A\u9009\u4E2D
        </wx-checkbox>
    
        </wx-label>
    
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            \u63A8\u8350\u5C55\u793A\u6837\u5F0F
        </wx-view>
    
        <wx-view class="weui-cells weui-cells_after-title" >
            
        <wx-checkbox-group bindchange="checkboxChange" >
            
        <wx-label class="weui-cell weui-check__label" v-for="item in items" >
            
        <wx-view class="weui-cell__hd" >
            
        <wx-checkbox :value="item.value" :checked="item.checked" >
            
        </wx-checkbox>
    
        <wx-view class="weui-cell__bd" >
            {{item.name}}
        </wx-view>
    
        </wx-view>
    
        </wx-label>
    
        </wx-checkbox-group>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </wx-label>
    
        </wx-view>
    
        </wx-view>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/checkbox/checkbox.js
var require_checkbox2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/checkbox/checkbox.js"() {
    require_checkbox();
    window["__wxRoute"] = "page/component/pages/checkbox/checkbox";
    var page38 = getPage("page/component/pages/checkbox/checkbox");
    page38.json = `{
    "navigationBarTitleText": "checkbox"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "checkbox",
          path: "page/component/pages/checkbox/checkbox"
        };
      },
      data: {
        items: [
          { value: "USA", name: "\u7F8E\u56FD" },
          { value: "CHN", name: "\u4E2D\u56FD", checked: "true" },
          { value: "BRA", name: "\u5DF4\u897F" },
          { value: "JPN", name: "\u65E5\u672C" },
          { value: "ENG", name: "\u82F1\u56FD" },
          { value: "FRA", name: "\u6CD5\u56FD" }
        ]
      },
      checkboxChange(e) {
        console.log("checkbox\u53D1\u751Fchange\u4E8B\u4EF6\uFF0C\u643A\u5E26value\u503C\u4E3A\uFF1A", e.detail.value);
        const items = this.data.items;
        const values = e.detail.value;
        for (let i = 0, lenI = items.length; i < lenI; ++i) {
          items[i].checked = false;
          for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
            if (items[i].value === values[j]) {
              items[i].checked = true;
              break;
            }
          }
        }
        this.setData({
          items
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/form/form.wxml
var require_form = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/form/form.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/form/form");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'form'}" >
            
        <wx-view class="page-body" >
            
        <wx-form catchsubmit="formSubmit" catchreset="formReset" >
            
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            switch
        </wx-view>
    
        <wx-switch name="switch" >
            
        </wx-switch>
    
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            radio
        </wx-view>
    
        <wx-radio-group name="radio" >
            
        <wx-label >
            
        <wx-radio value="radio1" >
            \u9009\u9879\u4E00
        </wx-radio>
    
        <wx-label >
            
        <wx-radio value="radio2" >
            \u9009\u9879\u4E8C
        </wx-radio>
    
        </wx-label>
    
        </wx-label>
    
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            checkbox
        </wx-view>
    
        <wx-checkbox-group name="checkbox" >
            
        <wx-label >
            
        <wx-checkbox value="checkbox1" >
            \u9009\u9879\u4E00
        </wx-checkbox>
    
        <wx-label >
            
        <wx-checkbox value="checkbox2" >
            \u9009\u9879\u4E8C
        </wx-checkbox>
    
        </wx-label>
    
        </wx-label>
    
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            slider
        </wx-view>
    
        <wx-slider value="50" name="slider" >
            
        </wx-slider>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            input
        </wx-view>
    
        <wx-view class="weui-cells weui-cells_after-title" >
            
        <wx-view class="weui-cell weui-cell_input" >
            
        <wx-view class="weui-cell__bd" >
            
        <wx-input class="weui-input" name="input" placeholder="\u8FD9\u662F\u4E00\u4E2A\u8F93\u5165\u6846" >
            
        </wx-input>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="btn-area" >
            
        <wx-button type="primary" formType="submit" >
            Submit
        </wx-button>
    
        <wx-button formType="reset" >
            Reset
        </wx-button>
    
        </wx-view>
    
        </wx-view>
    
        </wx-checkbox-group>
    
        <component is="foot" >
            
        </component>
    
        </wx-view>
    
        </wx-radio-group>
    
        </wx-view>
    
        </wx-view>
    
        </wx-form>
    
        </wx-view>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/form/form.js
var require_form2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/form/form.js"() {
    require_form();
    window["__wxRoute"] = "page/component/pages/form/form";
    var page38 = getPage("page/component/pages/form/form");
    page38.json = `{
    "navigationBarTitleText": "form"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "form",
          path: "page/component/pages/form/form"
        };
      },
      data: {
        pickerHidden: true,
        chosen: ""
      },
      pickerConfirm(e) {
        this.setData({
          pickerHidden: true
        });
        this.setData({
          chosen: e.detail.value
        });
      },
      pickerCancel() {
        this.setData({
          pickerHidden: true
        });
      },
      pickerShow() {
        this.setData({
          pickerHidden: false
        });
      },
      formSubmit(e) {
        console.log("form\u53D1\u751F\u4E86submit\u4E8B\u4EF6\uFF0C\u643A\u5E26\u6570\u636E\u4E3A\uFF1A", e.detail.value);
      },
      formReset(e) {
        console.log("form\u53D1\u751F\u4E86reset\u4E8B\u4EF6\uFF0C\u643A\u5E26\u6570\u636E\u4E3A\uFF1A", e.detail.value);
        this.setData({
          chosen: ""
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/input/input.wxml
var require_input = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/input/input.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/input/input");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'input'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section" >
            
        <wx-view class="weui-cells__title" >
            \u53EF\u4EE5\u81EA\u52A8\u805A\u7126\u7684input
        </wx-view>
    
        <wx-view class="weui-cells weui-cells_after-title" >
            
        <wx-view class="weui-cell weui-cell_input" >
            
        <wx-input class="weui-input" auto-focus placeholder="\u5C06\u4F1A\u83B7\u53D6\u7126\u70B9" >
            
        </wx-input>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="weui-cells__title" >
            \u63A7\u5236\u6700\u5927\u8F93\u5165\u957F\u5EA6\u7684input
        </wx-view>
    
        <wx-view class="weui-cells weui-cells_after-title" >
            
        <wx-view class="weui-cell weui-cell_input" >
            
        <wx-input class="weui-input" maxlength="10" placeholder="\u6700\u5927\u8F93\u5165\u957F\u5EA6\u4E3A10" >
            
        </wx-input>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="weui-cells__title" >
            \u5B9E\u65F6\u83B7\u53D6\u8F93\u5165\u503C\uFF1A{{inputValue}}
        </wx-view>
    
        <wx-view class="weui-cells weui-cells_after-title" >
            
        <wx-view class="weui-cell weui-cell_input" >
            
        <wx-input class="weui-input" maxlength="10" bindinput="bindKeyInput" placeholder="\u8F93\u5165\u540C\u6B65\u5230view\u4E2D" >
            
        </wx-input>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="weui-cells__title" >
            \u63A7\u5236\u8F93\u5165\u7684input
        </wx-view>
    
        <wx-view class="weui-cells weui-cells_after-title" >
            
        <wx-view class="weui-cell weui-cell_input" >
            
        <wx-input class="weui-input" bindinput="bindReplaceInput" placeholder="\u8FDE\u7EED\u7684\u4E24\u4E2A1\u4F1A\u53D8\u62102" >
            
        </wx-input>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="weui-cells__title" >
            \u63A7\u5236\u952E\u76D8\u7684input
        </wx-view>
    
        <wx-view class="weui-cells weui-cells_after-title" >
            
        <wx-view class="weui-cell weui-cell_input" >
            
        <wx-input class="weui-input" bindinput="bindHideKeyboard" placeholder="\u8F93\u5165123\u81EA\u52A8\u6536\u8D77\u952E\u76D8" >
            
        </wx-input>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="weui-cells__title" >
            \u6570\u5B57\u8F93\u5165\u7684input
        </wx-view>
    
        <wx-view class="weui-cells weui-cells_after-title" >
            
        <wx-view class="weui-cell weui-cell_input" >
            
        <wx-input class="weui-input" type="number" placeholder="\u8FD9\u662F\u4E00\u4E2A\u6570\u5B57\u8F93\u5165\u6846" >
            
        </wx-input>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="weui-cells__title" >
            \u5BC6\u7801\u8F93\u5165\u7684input
        </wx-view>
    
        <wx-view class="weui-cells weui-cells_after-title" >
            
        <wx-view class="weui-cell weui-cell_input" >
            
        <wx-input class="weui-input" password type="text" placeholder="\u8FD9\u662F\u4E00\u4E2A\u5BC6\u7801\u8F93\u5165\u6846" >
            
        </wx-input>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="weui-cells__title" >
            \u5E26\u5C0F\u6570\u70B9\u7684input
        </wx-view>
    
        <wx-view class="weui-cells weui-cells_after-title" >
            
        <wx-view class="weui-cell weui-cell_input" >
            
        <wx-input class="weui-input" type="digit" placeholder="\u5E26\u5C0F\u6570\u70B9\u7684\u6570\u5B57\u952E\u76D8" >
            
        </wx-input>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="weui-cells__title" >
            \u8EAB\u4EFD\u8BC1\u8F93\u5165\u7684input
        </wx-view>
    
        <wx-view class="weui-cells weui-cells_after-title" >
            
        <wx-view class="weui-cell weui-cell_input" >
            
        <wx-input class="weui-input" type="idcard" placeholder="\u8EAB\u4EFD\u8BC1\u8F93\u5165\u952E\u76D8" >
            
        </wx-input>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="weui-cells__title" >
            \u63A7\u5236\u5360\u4F4D\u7B26\u989C\u8272\u7684input
        </wx-view>
    
        <wx-view class="weui-cells weui-cells_after-title" >
            
        <wx-view class="weui-cell weui-cell_input" >
            
        <wx-input class="weui-input" placeholder-style="color:#F76260" placeholder="\u5360\u4F4D\u7B26\u5B57\u4F53\u662F\u7EA2\u8272\u7684" >
            
        </wx-input>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/input/input.js
var require_input2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/input/input.js"() {
    require_input();
    window["__wxRoute"] = "page/component/pages/input/input";
    var page38 = getPage("page/component/pages/input/input");
    page38.json = `{
    "navigationBarTitleText": "input"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "input",
          path: "page/component/pages/input/input"
        };
      },
      data: {
        focus: false,
        inputValue: ""
      },
      bindKeyInput(e) {
        this.setData({
          inputValue: e.detail.value
        });
      },
      bindReplaceInput(e) {
        const value = e.detail.value;
        let pos = e.detail.cursor;
        let left;
        if (pos !== -1) {
          left = e.detail.value.slice(0, pos);
          pos = left.replace(/11/g, "2").length;
        }
        return {
          value: value.replace(/11/g, "2"),
          cursor: pos
        };
      },
      bindHideKeyboard(e) {
        if (e.detail.value === "123") {
          wx.hideKeyboard();
        }
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/label/label.wxml
var require_label = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/label/label.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/label/label");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'label'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            \u8868\u5355\u7EC4\u4EF6\u5728label\u5185
        </wx-view>
    
        <wx-checkbox-group class="group" bindchange="checkboxChange" >
            
        <wx-view class="label-1" v-for="item in checkboxItems" >
            
        <wx-label >
            
        <wx-checkbox :value="item.name" :checked="item.checked" >
            
        </wx-checkbox>
    
        <wx-text class="label-1-text" >
            {{item.value}}
        </wx-text>
    
        </wx-label>
    
        </wx-view>
    
        </wx-checkbox-group>
    
        </wx-view>
    
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            label\u7528for\u6807\u8BC6\u8868\u5355\u7EC4\u4EF6
        </wx-view>
    
        <wx-radio-group class="group" bindchange="radioChange" >
            
        <wx-view class="label-2" v-for="item in radioItems" >
            
        <wx-radio :id="item.name" :value="item.name" :checked="item.checked" >
            
        </wx-radio>
    
        <wx-label class="label-2-text" :for="item.name" >
            
        <wx-text >
            {{item.name}}
        </wx-text>
    
        </wx-label>
    
        </wx-view>
    
        </wx-radio-group>
    
        </wx-view>
    
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            label\u5185\u6709\u591A\u4E2A\u65F6\u9009\u4E2D\u7B2C\u4E00\u4E2A
        </wx-view>
    
        <wx-label class="label-3" >
            
        <wx-checkbox class="checkbox-3" >
            \u9009\u9879\u4E00
        </wx-checkbox>
    
        <wx-checkbox class="checkbox-3" >
            \u9009\u9879\u4E8C
        </wx-checkbox>
    
        <wx-view class="label-3-text" >
            \u70B9\u51FB\u8BE5label\u4E0B\u7684\u6587\u5B57\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u4E2Acheckbox
        </wx-view>
    
        </wx-label>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/label/label.js
var require_label2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/label/label.js"() {
    require_label();
    window["__wxRoute"] = "page/component/pages/label/label";
    var page38 = getPage("page/component/pages/label/label");
    page38.json = `{
    "navigationBarTitleText": "label"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "label",
          path: "page/component/pages/label/label"
        };
      },
      data: {
        checkboxItems: [
          { name: "USA", value: "\u7F8E\u56FD" },
          { name: "CHN", value: "\u4E2D\u56FD", checked: "true" }
        ],
        radioItems: [
          { name: "USA", value: "\u7F8E\u56FD" },
          { name: "CHN", value: "\u4E2D\u56FD", checked: "true" }
        ],
        hidden: false
      },
      checkboxChange(e) {
        const checked = e.detail.value;
        const changed = {};
        for (let i = 0; i < this.data.checkboxItems.length; i++) {
          if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
            changed["checkboxItems[" + i + "].checked"] = true;
          } else {
            changed["checkboxItems[" + i + "].checked"] = false;
          }
        }
        this.setData(changed);
      },
      radioChange(e) {
        const checked = e.detail.value;
        const changed = {};
        for (let i = 0; i < this.data.radioItems.length; i++) {
          if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
            changed["radioItems[" + i + "].checked"] = true;
          } else {
            changed["radioItems[" + i + "].checked"] = false;
          }
        }
        this.setData(changed);
      },
      tapEvent() {
        console.log("\u6309\u94AE\u88AB\u70B9\u51FB");
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/picker/picker.wxml
var require_picker = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/picker/picker.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/picker/picker");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'picker'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section" >
            
        <wx-view class="weui-cells__title" >
            \u5730\u533A\u9009\u62E9\u5668
        </wx-view>
    
        <wx-view class="weui-cells weui-cells_after-title" >
            
        <wx-view class="weui-cell weui-cell_input" >
            
        <wx-view class="weui-cell__hd" >
            
        <wx-view class="weui-label" >
            \u5F53\u524D\u9009\u62E9
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-cell__bd" >
            
        <wx-picker bindchange="bindPickerChange" :value="index" :range="array" >
            
        <wx-view class="weui-input" >
            {{array[index]}}
        </wx-view>
    
        </wx-picker>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-cells__title" >
            \u65F6\u95F4\u9009\u62E9\u5668
        </wx-view>
    
        <wx-view class="weui-cells weui-cells_after-title" >
            
        <wx-view class="weui-cell weui-cell_input" >
            
        <wx-view class="weui-cell__hd" >
            
        <wx-view class="weui-label" >
            \u5F53\u524D\u9009\u62E9
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-cell__bd" >
            
        <wx-picker mode="time" :value="time" start="09:01" end="21:01" bindchange="bindTimeChange" >
            
        <wx-view class="weui-input" >
            {{time}}
        </wx-view>
    
        </wx-picker>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-cells__title" >
            \u65E5\u671F\u9009\u62E9\u5668
        </wx-view>
    
        <wx-view class="weui-cells weui-cells_after-title" >
            
        <wx-view class="weui-cell weui-cell_input" >
            
        <wx-view class="weui-cell__hd" >
            
        <wx-view class="weui-label" >
            \u5F53\u524D\u9009\u62E9
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-cell__bd" >
            
        <wx-picker mode="date" :value="date" start="2015-09-01" end="2017-09-01" bindchange="bindDateChange" >
            
        <wx-view class="weui-input" >
            {{date}}
        </wx-view>
    
        </wx-picker>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/picker/picker.js
var require_picker2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/picker/picker.js"() {
    require_picker();
    window["__wxRoute"] = "page/component/pages/picker/picker";
    var page38 = getPage("page/component/pages/picker/picker");
    page38.json = `{
    "navigationBarTitleText": "picker"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "picker",
          path: "page/component/pages/picker/picker"
        };
      },
      data: {
        array: ["\u4E2D\u56FD", "\u7F8E\u56FD", "\u5DF4\u897F", "\u65E5\u672C"],
        index: 0,
        date: "2016-09-01",
        time: "12:01"
      },
      bindPickerChange(e) {
        console.log("picker\u53D1\u9001\u9009\u62E9\u6539\u53D8\uFF0C\u643A\u5E26\u503C\u4E3A", e.detail.value);
        this.setData({
          index: e.detail.value
        });
      },
      bindDateChange(e) {
        this.setData({
          date: e.detail.value
        });
      },
      bindTimeChange(e) {
        this.setData({
          time: e.detail.value
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/radio/radio.wxml
var require_radio = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/radio/radio.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/radio/radio");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'radio'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            \u9ED8\u8BA4\u6837\u5F0F
        </wx-view>
    
        <wx-label class="radio" >
            
        <wx-radio value="r1" checked="true" >
            \u9009\u4E2D
        </wx-radio>
    
        <wx-label class="radio" >
            
        <wx-radio value="r2" >
            \u672A\u9009\u4E2D
        </wx-radio>
    
        </wx-label>
    
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            \u63A8\u8350\u5C55\u793A\u6837\u5F0F
        </wx-view>
    
        <wx-view class="weui-cells weui-cells_after-title" >
            
        <wx-radio-group bindchange="radioChange" >
            
        <wx-label class="weui-cell weui-check__label" v-for="item in items" >
            
        <wx-view class="weui-cell__hd" >
            
        <wx-radio :value="item.value" checked="true" >
            
        </wx-radio>
    
        <wx-view class="weui-cell__bd" >
            {{item.name}}
        </wx-view>
    
        </wx-view>
    
        </wx-label>
    
        </wx-radio-group>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </wx-label>
    
        </wx-view>
    
        </wx-view>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/radio/radio.js
var require_radio2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/radio/radio.js"() {
    require_radio();
    window["__wxRoute"] = "page/component/pages/radio/radio";
    var page38 = getPage("page/component/pages/radio/radio");
    page38.json = `{
    "navigationBarTitleText": "radio"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "radio",
          path: "page/component/pages/radio/radio"
        };
      },
      data: {
        items: [
          { value: "USA", name: "\u7F8E\u56FD" },
          { value: "CHN", name: "\u4E2D\u56FD", checked: "true" },
          { value: "BRA", name: "\u5DF4\u897F" },
          { value: "JPN", name: "\u65E5\u672C" },
          { value: "ENG", name: "\u82F1\u56FD" },
          { value: "FRA", name: "\u6CD5\u56FD" }
        ]
      },
      radioChange(e) {
        console.log("radio\u53D1\u751Fchange\u4E8B\u4EF6\uFF0C\u643A\u5E26value\u503C\u4E3A\uFF1A", e.detail.value);
        const items = this.data.items;
        for (let i = 0, len = items.length; i < len; ++i) {
          items[i].checked = items[i].value === e.detail.value;
        }
        this.setData({
          items
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/slider/slider.wxml
var require_slider = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/slider/slider.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/slider/slider");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'slider'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            \u8BBE\u7F6Estep
        </wx-view>
    
        <wx-view class="body-view" >
            
        <wx-slider value="60" bindchange="slider2change" step="5" >
            
        </wx-slider>
    
        </wx-view>
    
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            \u663E\u793A\u5F53\u524Dvalue
        </wx-view>
    
        <wx-view class="body-view" >
            
        <wx-slider value="50" bindchange="slider3change" >
            
        </wx-slider>
    
        </wx-view>
    
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            \u8BBE\u7F6E\u6700\u5C0F/\u6700\u5927\u503C
        </wx-view>
    
        <wx-view class="body-view" >
            
        <wx-slider value="100" bindchange="slider4change" min="50" max="200" >
            
        </wx-slider>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/slider/slider.js
var require_slider2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/slider/slider.js"() {
    require_slider();
    window["__wxRoute"] = "page/component/pages/slider/slider";
    var page38 = getPage("page/component/pages/slider/slider");
    page38.json = `{
    "navigationBarTitleText": "slider"
}
`;
    var pageData = {
      onShareAppMessage() {
        return {
          title: "slider",
          path: "page/component/pages/slider/slider"
        };
      }
    };
    for (let i = 1; i < 5; ++i) {
      (function(index) {
        pageData["slider" + index + "change"] = function(e) {
          console.log("slider" + index + "\u53D1\u751Fchange\u4E8B\u4EF6\uFF0C\u643A\u5E26\u503C\u4E3A", e.detail.value);
        };
      })(i);
    }
    Page(pageData);
  }
});

// miniprogram-demo/miniprogram/page/component/pages/switch/switch.wxml
var require_switch = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/switch/switch.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/switch/switch");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'switch'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            \u9ED8\u8BA4\u6837\u5F0F
        </wx-view>
    
        <wx-view class="body-view" >
            
        <wx-switch checked bindchange="switch1Change" >
            
        <wx-switch bindchange="switch2Change" >
            
        </wx-switch>
    
        </wx-switch>
    
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            \u63A8\u8350\u5C55\u793A\u6837\u5F0F
        </wx-view>
    
        <wx-view class="weui-cells weui-cells_after-title" >
            
        <wx-view class="weui-cell weui-cell_switch" >
            
        <wx-view class="weui-cell__bd" >
            \u5F00\u542F\u4E2D
        </wx-view>
    
        <wx-view class="weui-cell__ft" >
            
        <wx-switch >
            
        </wx-switch>
    
        </wx-view>
    
        <wx-view class="weui-cell weui-cell_switch" >
            
        <wx-view class="weui-cell__bd" >
            \u5173\u95ED
        </wx-view>
    
        <wx-view class="weui-cell__ft" >
            
        <wx-switch >
            
        </wx-switch>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/switch/switch.js
var require_switch2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/switch/switch.js"() {
    require_switch();
    window["__wxRoute"] = "page/component/pages/switch/switch";
    var page38 = getPage("page/component/pages/switch/switch");
    page38.json = `{
    "navigationBarTitleText": "switch"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "switch",
          path: "page/component/pages/switch/switch"
        };
      },
      switch1Change(e) {
        console.log("switch1 \u53D1\u751F change \u4E8B\u4EF6\uFF0C\u643A\u5E26\u503C\u4E3A", e.detail.value);
      },
      switch2Change(e) {
        console.log("switch2 \u53D1\u751F change \u4E8B\u4EF6\uFF0C\u643A\u5E26\u503C\u4E3A", e.detail.value);
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/textarea/textarea.wxml
var require_textarea = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/textarea/textarea.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/textarea/textarea");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'textarea'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            \u8F93\u5165\u533A\u57DF\u9AD8\u5EA6\u81EA\u9002\u5E94\uFF0C\u4E0D\u4F1A\u51FA\u73B0\u6EDA\u52A8\u6761
        </wx-view>
    
        <wx-view class="textarea-wrp" >
            
        <wx-textarea bindblur="bindTextAreaBlur" >
            
        </wx-textarea>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            \u8FD9\u662F\u4E00\u4E2A\u53EF\u4EE5\u81EA\u52A8\u805A\u7126\u7684textarea
        </wx-view>
    
        <wx-view class="textarea-wrp" >
            
        <wx-textarea auto-focus="true" style="height: 3em" >
            
        </wx-textarea>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </wx-view>
    
        </wx-view>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/textarea/textarea.js
var require_textarea2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/textarea/textarea.js"() {
    require_textarea();
    window["__wxRoute"] = "page/component/pages/textarea/textarea";
    var page38 = getPage("page/component/pages/textarea/textarea");
    page38.json = `{
    "navigationBarTitleText": "textarea"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "textarea",
          path: "page/component/pages/textarea/textarea"
        };
      },
      data: {
        focus: false
      },
      bindTextAreaBlur(e) {
        console.log(e.detail.value);
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/navigator/navigator.wxml
var require_navigator = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/navigator/navigator.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/navigator/navigator");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'navigator'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="btn-area" >
            
        <wx-navigator url="navigate?titl" hover-class="ohter-navigator" >
            
        <wx-button type="default" >
            \u8DF3\u8F6C\u5230\u65B0\u9875\u9762
        </wx-button>
    
        </wx-navigator>
    
        <wx-navigator url="redirect?titl" redirect hover-class="other-navigator-hover" >
            
        <wx-button type="default" >
            \u5728\u5F53\u524D\u9875\u6253\u5F00
        </wx-button>
    
        </wx-navigator>
    
        <wx-navigator target="miniProgram" hover-class="other-navigator-hover" open-type="navigate" app-id="wx4f1b24bdc99fa23b" version="release" >
            
        <wx-button type="default" >
            \u6253\u5F00\u5C0F\u7A0B\u5E8F
        </wx-button>
    
        </wx-navigator>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/navigator/navigator.js
var require_navigator2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/navigator/navigator.js"() {
    require_navigator();
    window["__wxRoute"] = "page/component/pages/navigator/navigator";
    var page38 = getPage("page/component/pages/navigator/navigator");
    page38.json = `{
    "navigationBarTitleText": "navigator"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "navigator",
          path: "page/component/pages/navigator/navigator"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/navigator/navigate.wxml
var require_navigate = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/navigator/navigate.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/navigator/navigate");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: '\u65B0\u5EFA\u7684\u9875\u9762'}" >
            
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/navigator/navigate.js
var require_navigate2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/navigator/navigate.js"() {
    require_navigate();
    window["__wxRoute"] = "page/component/pages/navigator/navigate";
    var page38 = getPage("page/component/pages/navigator/navigate");
    page38.json = `{
    "navigationBarTitleText": "navigatePage"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "navigatePage",
          path: "page/component/pages/navigator/navigate"
        };
      },
      onLoad(options) {
        console.log(options);
        this.setData({
          title: options.title
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/navigator/redirect.wxml
var require_redirect = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/navigator/redirect.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/navigator/redirect");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: '\u5F53\u524D\u9875'}" >
            
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/navigator/redirect.js
var require_redirect2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/navigator/redirect.js"() {
    require_redirect();
    window["__wxRoute"] = "page/component/pages/navigator/redirect";
    var page38 = getPage("page/component/pages/navigator/redirect");
    page38.json = `{
    "navigationBarTitleText": "redirectPage"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "redirectPage",
          path: "page/component/pages/navigator/redirect"
        };
      },
      onLoad(options) {
        console.log(options);
        this.setData({
          title: options.title
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/image/image.wxml
var require_image = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/image/image.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/image/image");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'image'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            LocalImage
        </wx-view>
    
        <wx-view class="page-section-ctn" >
            
        <wx-image class="image" src="../../resources/pic/1.jpg" >
            
        </wx-image>
    
        </wx-view>
    
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            InternetImage
        </wx-view>
    
        <wx-view class="page-section-ctn" >
            
        <wx-image class="image" :src="imageUrl" >
            
        </wx-image>
    
        </wx-view>
    
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            WebpImage
        </wx-view>
    
        <wx-view class="page-section-ctn" >
            
        <wx-image class="image" :webp src="webpImageUrl" mode="aspectFit" >
            
        </wx-image>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/image/image.js
var require_image2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/image/image.js"() {
    require_image();
    window["__wxRoute"] = "page/component/pages/image/image";
    var page38 = getPage("page/component/pages/image/image");
    page38.json = `{
    "navigationBarTitleText": "image"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "image",
          path: "page/component/pages/image/image"
        };
      },
      onLoad() {
        wx.cloud.getTempFileURL({
          fileList: [{
            fileID: "cloud://release-b86096.7265-release-b86096-1258211818/\u5F00\u53D1\u8005\u793E\u533A.webp",
            maxAge: 60 * 60
          }]
        }).then((res2) => {
          console.log(res2);
          this.setData({
            webpImageUrl: res2.fileList[0].tempFileURL
          });
        }).catch((error) => {
          console.log("CLOUD\uFF1Aimage \u4E34\u65F6\u94FE\u63A5\u83B7\u53D6\u5931\u8D25");
        });
      },
      data: {
        imageUrl: "cloud://release-b86096.7265-release-b86096-1258211818/demo.jpg",
        webpImageURL: ""
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/video/video.wxml
var require_video = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/video/video.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/video/video");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'video'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section tc" >
            
        <wx-video id="myVideo" src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?fileke" binderror="videoErrorCallback" :danmu-list="danmuList" :enable-danmu danmu-btn show-casting-button show-screen-lock-button show-center-play-btn="false" :show-play-btn="true" :controls picture-in-picture-mode="['push', 'pop']" bindenterpictureinpicture="bindVideoEnterPictureInPicture" bindleavepictureinpicture="bindVideoLeavePictureInPicture" :enable-auto-rotation="enableAutoRotation" >
            
        </wx-video>
    
        <wx-view class="auto-rotate-container" >
            
        <wx-view >
            \u5F00\u542F\u81EA\u52A8\u65CB\u8F6C
        </wx-view>
    
        <wx-view >
            
        <wx-switch :model:checked=" enableAutoRotation " bindchange="handleSwitchChange" >
            
        </wx-switch>
    
        </wx-view>
    
        <wx-view class="weui-cells" >
            
        <wx-view class="weui-cell weui-cell_input" >
            
        <wx-view class="weui-cell__hd" >
            
        <wx-view class="weui-label" >
            \u5F39\u5E55\u5185\u5BB9
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-cell__bd" >
            
        <wx-input bindblur="bindInputBlur" class="weui-input" type="text" placeholder="\u5728\u6B64\u5904\u8F93\u5165\u5F39\u5E55\u5185\u5BB9" >
            
        </wx-input>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="btn-area" >
            
        <wx-button bindtap="bindSendDanmu" class="page-body-button" type="primary" formType="submit" >
            \u53D1\u9001\u5F39\u5E55
        </wx-button>
    
        </wx-view>
    
        <wx-view class="btn-area" >
            
        <wx-navigator url="picture-in-picture" hover-class="other-navigator-hover" >
            
        <wx-button type="primary" class="page-body-button" bindtap="bindPlayVideo" >
            \u5C0F\u7A97\u6A21\u5F0F
        </wx-button>
    
        </wx-navigator>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </wx-view>
    
        </wx-view>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/video/video.js
var require_video2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/video/video.js"() {
    require_video();
    window["__wxRoute"] = "page/component/pages/video/video";
    var page38 = getPage("page/component/pages/video/video");
    page38.json = `{
    "navigationBarTitleText": "video"
}
`;
    function getRandomColor() {
      const rgb = [];
      for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16);
        color = color.length === 1 ? "0" + color : color;
        rgb.push(color);
      }
      return "#" + rgb.join("");
    }
    Page({
      onShareAppMessage() {
        return {
          title: "video",
          path: "page/component/pages/video/video"
        };
      },
      onReady() {
        this.videoContext = wx.createVideoContext("myVideo");
      },
      onHide() {
      },
      inputValue: "",
      data: {
        enableAutoRotation: true,
        src: "",
        danmuList: [{
          text: "\u7B2C 1s \u51FA\u73B0\u7684\u5F39\u5E55",
          color: "#ff0000",
          time: 1
        }, {
          text: "\u7B2C 3s \u51FA\u73B0\u7684\u5F39\u5E55",
          color: "#ff00ff",
          time: 3
        }]
      },
      bindInputBlur(e) {
        this.inputValue = e.detail.value;
      },
      bindButtonTap() {
        const that = this;
        wx.chooseVideo({
          sourceType: ["album", "camera"],
          maxDuration: 60,
          camera: ["front", "back"],
          success(res2) {
            that.setData({
              src: res2.tempFilePath
            });
          }
        });
      },
      bindVideoEnterPictureInPicture() {
        console.log("\u8FDB\u5165\u5C0F\u7A97\u6A21\u5F0F");
      },
      bindVideoLeavePictureInPicture() {
        console.log("\u9000\u51FA\u5C0F\u7A97\u6A21\u5F0F");
      },
      bindPlayVideo() {
        this.videoContext.play();
      },
      bindSendDanmu() {
        this.videoContext.sendDanmu({
          text: this.inputValue,
          color: getRandomColor()
        });
      },
      videoErrorCallback(e) {
        console.log("\u89C6\u9891\u9519\u8BEF\u4FE1\u606F:");
        console.log(e.detail.errMsg);
      },
      handleSwitchChange(e) {
        this.setData({
          enableAutoRotation: e.detail.value
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/map/map.wxml
var require_map = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/map/map.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/map/map");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'map'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section-title" >
            
        <wx-navigator class="navigator" url="/page/component/pages/map-styles/map-styles" >
            \u5F53\u524D\u7EC4\u4EF6\u4F7F\u7528\u4E86\u58A8\u6E0A\u5E95\u56FE\u6837\u5F0F\uFF0C\u67E5\u770B\u67E5\u770B\u66F4\u591A
        </wx-navigator>
    
        </wx-view>
    
        <wx-view class="page-section page-section-gap" >
            
        <wx-map :subkey="subKey" style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :scale="18" :markers="markers" :covers="covers" :enable-3D="enable3d" :show-compass="showCompass" :enable-zoom="enableZoom" :enable-rotate="enableRotate" :enable-satellite="enableSatellite" :enable-traffic="enableTraffic" :enable-overlooking="enableOverlooking" :enable-scroll="enableScroll" :polygons="drawPolygon ? polygons : []" >
            
        </wx-map>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="btn-area" >
            
        <wx-button bindtap="toggle3d" >
            {{!enable3d?'\u542F\u7528':'\u5173\u95ED'}}3D\u6548\u679C
        </wx-button>
    
        <wx-button bindtap="toggleShowCompass" >
            {{!showCompass?'\u663E\u793A':'\u5173\u95ED'}}\u6307\u5357\u9488
        </wx-button>
    
        <wx-button bindtap="toggleOverlooking" >
            {{!enableOverlooking?'\u5F00\u542F':'\u5173\u95ED'}}\u4FEF\u89C6\u652F\u6301
        </wx-button>
    
        <wx-button bindtap="toggleRotate" >
            {{!enableRotate?'\u5F00\u542F':'\u5173\u95ED'}}\u65CB\u8F6C\u652F\u6301
        </wx-button>
    
        <wx-button bindtap="togglePolygon" >
            {{!drawPolygon?'\u7ED8\u5236':'\u6E05\u9664'}}\u591A\u8FB9\u5F62
        </wx-button>
    
        <wx-button bindtap="toggleZoom" >
            {{!enableZoom?'\u5F00\u542F':'\u5173\u95ED'}}\u7F29\u653E\u652F\u6301
        </wx-button>
    
        <wx-button bindtap="toggleScroll" >
            {{!enableScroll?'\u5F00\u542F':'\u5173\u95ED'}}\u62D6\u52A8\u652F\u6301
        </wx-button>
    
        <wx-button bindtap="toggleSatellite" >
            {{!enableSatellite?'\u5F00\u542F':'\u5173\u95ED'}}\u536B\u661F\u56FE
        </wx-button>
    
        <wx-button bindtap="toggleTraffic" >
            {{!enableTraffic?'\u5F00\u542F':'\u5173\u95ED'}}\u5B9E\u65F6\u8DEF\u51B5
        </wx-button>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/map/map.js
var require_map2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/map/map.js"() {
    require_map();
    window["__wxRoute"] = "page/component/pages/map/map";
    var page38 = getPage("page/component/pages/map/map");
    page38.json = `{
    "navigationBarTitleText": "map"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "map",
          path: "page/component/pages/map/map"
        };
      },
      data: {
        latitude: 23.099994,
        longitude: 113.32452,
        markers: [{
          latitude: 23.099994,
          longitude: 113.32452,
          name: "T.I.T \u521B\u610F\u56ED"
        }],
        covers: [{
          latitude: 23.099994,
          longitude: 113.34452,
          iconPath: "/image/location.png"
        }, {
          latitude: 23.099994,
          longitude: 113.30452,
          iconPath: "/image/location.png"
        }],
        polygons: [{
          points: [
            {
              latitude: 23.099994,
              longitude: 113.32452
            },
            {
              latitude: 23.098994,
              longitude: 113.32352
            },
            {
              latitude: 23.098994,
              longitude: 113.32552
            }
          ],
          strokeWidth: 3,
          strokeColor: "#FFFFFFAA"
        }],
        subKey: "B5QBZ-7JTLU-DSSVA-2BRJ3-TNXLF-2TBR7",
        enable3d: false,
        showCompass: false,
        enableOverlooking: false,
        enableZoom: true,
        enableScroll: true,
        enableRotate: false,
        drawPolygon: false,
        enableSatellite: false,
        enableTraffic: false
      },
      toggle3d() {
        this.setData({
          enable3d: !this.data.enable3d
        });
      },
      toggleShowCompass() {
        this.setData({
          showCompass: !this.data.showCompass
        });
      },
      toggleOverlooking() {
        this.setData({
          enableOverlooking: !this.data.enableOverlooking
        });
      },
      toggleZoom() {
        this.setData({
          enableZoom: !this.data.enableZoom
        });
      },
      toggleScroll() {
        this.setData({
          enableScroll: !this.data.enableScroll
        });
      },
      toggleRotate() {
        this.setData({
          enableRotate: !this.data.enableRotate
        });
      },
      togglePolygon() {
        this.setData({
          drawPolygon: !this.data.drawPolygon
        });
      },
      toggleSatellite() {
        this.setData({
          enableSatellite: !this.data.enableSatellite
        });
      },
      toggleTraffic() {
        this.setData({
          enableTraffic: !this.data.enableTraffic
        });
      }
    });
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
    function compareVersion5(v1, v2) {
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
      compareVersion: compareVersion5
    };
  }
});

// miniprogram-demo/miniprogram/page/component/pages/canvas/canvas.wxml
var require_canvas = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/canvas/canvas.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/canvas/canvas");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'canvas'}" >
            
        <wx-view class="page-body" >
            
        <div :v-if="canIUse" >
            
        <wx-view class="page-section" >
            
        <wx-view class="page-section-spacing" >
            
        <wx-view class="page-body-wrapper" >
            
        <wx-canvas canvas-id="canvas" class="canvas" >
            
        </wx-canvas>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </div>
    
        <wx-view v-else style="margin: 15px; text-align:center" >
            \u5FAE\u4FE1\u7248\u672C\u8FC7\u4F4E\uFF0C\u6682\u4E0D\u652F\u6301\u672C\u529F\u80FD
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/canvas/canvas.js
var canvas_exports = {};
__markAsModule(canvas_exports);
var import_util, page;
var init_canvas = __esm({
  "miniprogram-demo/miniprogram/page/component/pages/canvas/canvas.js"() {
    import_util = __toModule(require_util());
    require_canvas();
    window["__wxRoute"] = "page/component/pages/canvas/canvas";
    page = getPage("page/component/pages/canvas/canvas");
    page.json = `{
    "navigationBarTitleText": "canvas"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "canvas",
          path: "page/component/pages/canvas/canvas"
        };
      },
      data: {
        canIUse: true
      },
      onReady() {
        const { SDKVersion } = wx.getSystemInfoSync();
        if ((0, import_util.compareVersion)(SDKVersion, "2.7.0") < 0) {
          console.log("123");
          this.setData({
            canIUse: false
          });
        } else {
          this.position = {
            x: 150,
            y: 150,
            vx: 2,
            vy: 2
          };
          this.drawBall();
          this.interval = setInterval(this.drawBall, 17);
        }
      },
      init(res2) {
        const width = res2[0].width;
        const height = res2[0].height;
        const canvas = res2[0].node;
        const ctx = canvas.getContext("2d");
        const dpr = wx.getSystemInfoSync().pixelRatio;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        const renderLoop = () => {
          this.render(canvas, ctx);
          canvas.requestAnimationFrame(renderLoop);
        };
        canvas.requestAnimationFrame(renderLoop);
        const img = canvas.createImage();
        img.onload = () => {
          this._img = img;
        };
        img.src = "./car.png";
      },
      render(canvas, ctx) {
        ctx.clearRect(0, 0, 305, 305);
        this.drawBall2D(ctx);
        this.drawCar(ctx);
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
        const context = wx.createCanvasContext("canvas");
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
        context.draw();
      },
      onUnload() {
        clearInterval(this.interval);
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/ad/ad.wxml
var require_ad = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/ad/ad.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/ad/ad");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'ad'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            \u5173\u6CE8\u5361\u7247
        </wx-view>
    
        <wx-ad unit-id="adunit-demo4" >
            
        </wx-ad>
    
        </wx-view>
    
        <wx-view :v-if="platform" class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            \u4E0B\u8F7D\u5361\u7247
        </wx-view>
    
        <wx-ad unit-id="adunit-demo8" >
            
        </wx-ad>
    
        </wx-view>
    
        <wx-view v-else class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            \u4E0B\u8F7D\u5361\u7247
        </wx-view>
    
        <wx-ad unit-id="adunit-demo9" >
            
        </wx-ad>
    
        </wx-view>
    
        <wx-view :v-if="platform" class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            \u5E94\u7528\u63A8\u5E7F
        </wx-view>
    
        <wx-ad unit-id="adunit-demo2" >
            
        </wx-ad>
    
        </wx-view>
    
        <wx-view v-else class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            \u5E94\u7528\u63A8\u5E7F
        </wx-view>
    
        <wx-ad unit-id="adunit-demo7" >
            
        </wx-ad>
    
        </wx-view>
    
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            \u516C\u4F17\u53F7\u63A8\u5E7F
        </wx-view>
    
        <wx-ad unit-id="adunit-demo3" >
            
        </wx-ad>
    
        </wx-view>
    
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            \u6D3B\u52A8\u63A8\u5E7F
        </wx-view>
    
        <wx-ad unit-id="adunit-demo5" >
            
        </wx-ad>
    
        </wx-view>
    
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            \u5546\u54C1\u63A8\u5E7F
        </wx-view>
    
        <wx-ad unit-id="adunit-demo6" >
            
        </wx-ad>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/ad/ad.js
var require_ad2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/ad/ad.js"() {
    require_ad();
    window["__wxRoute"] = "page/component/pages/ad/ad";
    var page38 = getPage("page/component/pages/ad/ad");
    page38.json = `{
  "navigationBarTitleText": "ad"
}`;
    var info = wx.getSystemInfoSync();
    Page({
      onShareAppMessage() {
        return {
          title: "ad",
          path: "page/component/pages/ad/ad"
        };
      },
      data: {
        platform: info.platform
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/movable-view/movable-view.wxml
var require_movable_view = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/movable-view/movable-view.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/movable-view/movable-view");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'movable-view'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title first" >
            movable-view\u533A\u57DF\u5C0F\u4E8Emovable-area
        </wx-view>
    
        <wx-movable-area >
            
        <wx-movable-view :x="x" :y="y" direction="all" >
            text
        </wx-movable-view>
    
        </wx-movable-area>
    
        </wx-view>
    
        <wx-view class="btn-area" >
            
        <wx-button bindtap="tap" class="page-body-button" type="primary" >
            \u70B9\u51FB\u79FB\u52A8\u5230(30px,30px)
        </wx-button>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            movable-view\u533A\u57DF\u5927\u4E8Emovable-area
        </wx-view>
    
        <wx-movable-area >
            
        <wx-movable-view class="max" direction="all" >
            text
        </wx-movable-view>
    
        </wx-movable-area>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            \u53EA\u53EF\u4EE5\u6A2A\u5411\u79FB\u52A8
        </wx-view>
    
        <wx-movable-area >
            
        <wx-movable-view direction="horizontal" >
            text
        </wx-movable-view>
    
        </wx-movable-area>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            \u53EA\u53EF\u4EE5\u7EB5\u5411\u79FB\u52A8
        </wx-view>
    
        <wx-movable-area >
            
        <wx-movable-view direction="vertical" >
            text
        </wx-movable-view>
    
        </wx-movable-area>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            \u53EF\u8D85\u51FA\u8FB9\u754C
        </wx-view>
    
        <wx-movable-area >
            
        <wx-movable-view direction="all" >
            text
        </wx-movable-view>
    
        </wx-movable-area>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            \u5E26\u6709\u60EF\u6027
        </wx-view>
    
        <wx-movable-area >
            
        <wx-movable-view direction="all" >
            text
        </wx-movable-view>
    
        </wx-movable-area>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            \u53EF\u653E\u7F29
        </wx-view>
    
        <wx-movable-area >
            
        <wx-movable-view direction="all" bindchange="onChange" bindscale="onScale" scale scale-min="0.5" scale-max="4" :scale-value="scale" >
            text
        </wx-movable-view>
    
        </wx-movable-area>
    
        </wx-view>
    
        <wx-view class="btn-area" >
            
        <wx-button bindtap="tap2" class="page-body-button" type="primary" >
            \u70B9\u51FB\u653E\u59273\u500D
        </wx-button>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/movable-view/movable-view.js
var require_movable_view2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/movable-view/movable-view.js"() {
    require_movable_view();
    window["__wxRoute"] = "page/component/pages/movable-view/movable-view";
    var page38 = getPage("page/component/pages/movable-view/movable-view");
    page38.json = `{
  "navigationBarTitleText": "movable-view"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "movable-view",
          path: "page/component/pages/movable-view/movable-view"
        };
      },
      data: {
        x: 0,
        y: 0,
        scale: 2
      },
      tap() {
        this.setData({
          x: 30,
          y: 30
        });
      },
      tap2() {
        this.setData({
          scale: 3
        });
      },
      onChange(e) {
        console.log(e.detail);
      },
      onScale(e) {
        console.log(e.detail);
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/cover-view/cover-view.wxml
var require_cover_view = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/cover-view/cover-view.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/cover-view/cover-view");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'cover-view'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section page-section-gap" >
            
        <wx-map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" >
            
        <wx-cover-view class="cover-view" >
            
        <wx-cover-view class="container" >
            
        <wx-cover-view class="flex-wrp" style="flex-direction:row;" >
            
        <wx-cover-view class="flex-item demo-text-1" >
            
        </wx-cover-view>
    
        <wx-cover-view class="flex-item demo-text-2" >
            
        </wx-cover-view>
    
        <wx-cover-view class="flex-item demo-text-3" >
            
        </wx-cover-view>
    
        </wx-cover-view>
    
        </wx-cover-view>
    
        </wx-cover-view>
    
        </wx-map>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/cover-view/cover-view.js
var require_cover_view2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/cover-view/cover-view.js"() {
    require_cover_view();
    window["__wxRoute"] = "page/component/pages/cover-view/cover-view";
    var page38 = getPage("page/component/pages/cover-view/cover-view");
    page38.json = `{
  "navigationBarTitleText": "cover-view"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "cover-view",
          path: "page/component/pages/cover-view/cover-view"
        };
      },
      data: {
        latitude: 23.099994,
        longitude: 113.32452
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/rich-text/rich-text.wxml
var require_rich_text = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/rich-text/rich-text.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/rich-text/rich-text");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'rich-text'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            \u901A\u8FC7HTMLString\u6E32\u67D3
        </wx-view>
    
        <wx-view class="page-content" >
            
        <wx-scroll-view >
            {{htmlSnip}}
        </wx-scroll-view>
    
        <wx-button type="primary" bindtap="renderHtml" >
            \u6E32\u67D3HTML
        </wx-button>
    
        <div :v-if="renderedByHtml" >
            
        <wx-rich-text :nodes="htmlSnip" >
            
        </wx-rich-text>
    
        </div>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            \u901A\u8FC7\u8282\u70B9\u6E32\u67D3
        </wx-view>
    
        <wx-view class="page-content" >
            
        <wx-scroll-view >
            {{nodeSnip}}
        </wx-scroll-view>
    
        <wx-button type="primary" bindtap="renderNode" >
            \u6E32\u67D3Node
        </wx-button>
    
        <div :v-if="renderedByNode" >
            
        <wx-rich-text :nodes="nodes" >
            
        </wx-rich-text>
    
        </div>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/rich-text/rich-text.js
var require_rich_text2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/rich-text/rich-text.js"() {
    require_rich_text();
    window["__wxRoute"] = "page/component/pages/rich-text/rich-text";
    var page38 = getPage("page/component/pages/rich-text/rich-text");
    page38.json = `{
  "navigationBarTitleText": "rich-text"
}`;
    var htmlSnip = `<div class="div_class">
  <h1>Title</h1>
  <p class="p">
    Life is&nbsp;<i>like</i>&nbsp;a box of
    <b>&nbsp;chocolates</b>.
  </p>
</div>
`;
    var nodeSnip = `Page({
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'You never know what you're gonna get.'
      }]
    }]
  }
})
`;
    Page({
      onShareAppMessage() {
        return {
          title: "rich-text",
          path: "page/component/pages/rich-text/rich-text"
        };
      },
      data: {
        htmlSnip,
        nodeSnip,
        renderedByHtml: false,
        renderedByNode: false,
        nodes: [{
          name: "div",
          attrs: {
            class: "div_class",
            style: "line-height: 60px; color: #1AAD19;"
          },
          children: [{
            type: "text",
            text: "You never know what you're gonna get."
          }]
        }]
      },
      renderHtml() {
        this.setData({
          renderedByHtml: true
        });
      },
      renderNode() {
        this.setData({
          renderedByNode: true
        });
      },
      enterCode(e) {
        console.log(e.detail.value);
        this.setData({
          htmlSnip: e.detail.value
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/picker-view/picker-view.wxml
var require_picker_view = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/picker-view/picker-view.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/picker-view/picker-view");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'picker-view'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="selected-date" >
            {{year}}\u5E74{{month}}\u6708{{day}}\u65E5{{isDaytime?"\u767D\u5929":"\u591C\u665A"}}
        </wx-view>
    
        <wx-picker-view indicator-style="height: 50px;" style="width: 100%; height: 300px;" :value="value" bindchange="bindChange" >
            
        <wx-picker-view-column >
            
        <wx-view v-for="item in years" style="line-height: 50px; text-align: center;" >
            {{item}}\u5E74
        </wx-view>
    
        </wx-picker-view-column>
    
        <wx-picker-view-column >
            
        <wx-view v-for="item in months" style="line-height: 50px; text-align: center;" >
            {{item}}\u6708
        </wx-view>
    
        </wx-picker-view-column>
    
        <wx-picker-view-column >
            
        <wx-view v-for="item in days" style="line-height: 50px; text-align: center;" >
            {{item}}\u65E5
        </wx-view>
    
        </wx-picker-view-column>
    
        <wx-picker-view-column >
            
        <wx-view class="icon-container" >
            
        <wx-image class="picker-icon" src="../../resources/kind/daytime.png" >
            
        </wx-image>
    
        <wx-view class="icon-container" >
            
        <wx-image class="picker-icon" src="../../resources/kind/night.png" >
            
        </wx-image>
    
        </wx-view>
    
        </wx-view>
    
        </wx-picker-view-column>
    
        <component is="foot" >
            
        </component>
    
        </wx-picker-view>
    
        </wx-view>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/picker-view/picker-view.js
var require_picker_view2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/picker-view/picker-view.js"() {
    require_picker_view();
    window["__wxRoute"] = "page/component/pages/picker-view/picker-view";
    var page38 = getPage("page/component/pages/picker-view/picker-view");
    page38.json = `{
  "navigationBarTitleText": "picker-view"
}
`;
    var date = new Date();
    var years = [];
    var months = [];
    var days = [];
    for (let i = 1990; i <= date.getFullYear(); i++) {
      years.push(i);
    }
    for (let i = 1; i <= 12; i++) {
      months.push(i);
    }
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    Page({
      onShareAppMessage() {
        return {
          title: "picker-view",
          path: "page/component/pages/picker-view/picker-view"
        };
      },
      data: {
        years,
        year: date.getFullYear(),
        months,
        month: 2,
        days,
        day: 2,
        value: [9999, 1, 1],
        isDaytime: true
      },
      bindChange(e) {
        const val = e.detail.value;
        this.setData({
          year: this.data.years[val[0]],
          month: this.data.months[val[1]],
          day: this.data.days[val[2]],
          isDaytime: !val[3]
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/camera/camera.wxml
var require_camera = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/camera/camera.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/camera/camera");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'camera'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-body-wrapper" >
            
        <wx-view style="margin-bottom: 10px" >
            camera\u7EC4\u4EF6
        </wx-view>
    
        <wx-camera flash="off" :device-position="position" binderror="error" >
            
        </wx-camera>
    
        <wx-view :v-if="showCanvas" class="info-container" >
            
        <wx-view style="margin: 10px 0" >
            \u4F7F\u7528\u5B9E\u65F6\u6570\u636E\u5E27\u5728canvas\u7EC4\u4EF6\u7684\u5C55\u793A
        </wx-view>
    
        <wx-view >
            \u5E27\u9AD8\u5EA6\uFF1A{{frameHeight}}\u5E27\u5BBD\u5EA6\uFF1A{{frameWidth}}
        </wx-view>
    
        <wx-canvas id="webgl" type="webgl" canvas-id="canvas" :style="width: widthpx; height: {{height}}px;" >
            
        </wx-canvas>
    
        </wx-view>
    
        <wx-view class="btn-area first-btn" >
            
        <wx-button bindtap="handleShowCanvas" type="primary" >
            {{showCanvas?"\u5173\u95ED\u5B9E\u65F6\u5E27\u6570\u636E\u6A21\u5F0F":"\u5F00\u542F\u5B9E\u65F6\u5E27\u6570\u636E\u6A21\u5F0F"}}
        </wx-button>
    
        </wx-view>
    
        <wx-view class="btn-area" >
            
        <wx-button type="primary" bindtap="togglePosition" >
            \u5207\u6362\u6444\u50CF\u5934
        </wx-button>
    
        </wx-view>
    
        <wx-view class="btn-area" >
            
        <wx-button type="primary" bindtap="takePhoto" >
            \u62CD\u7167
        </wx-button>
    
        </wx-view>
    
        <wx-view class="btn-area" >
            
        <wx-button type="primary" bindtap="startRecord" >
            \u5F00\u59CB\u5F55\u50CF
        </wx-button>
    
        </wx-view>
    
        <wx-view class="btn-area" >
            
        <wx-button type="primary" bindtap="stopRecord" >
            \u7ED3\u675F\u5F55\u50CF
        </wx-button>
    
        </wx-view>
    
        <wx-view class="btn-area" >
            
        <wx-navigator url="/page/component/pages/camera-scan-code/camera-scan-code" hover-class="none" >
            
        <wx-button type="primary" >
            \u626B\u63CF\u4E00\u7EF4\u7801
        </wx-button>
    
        </wx-navigator>
    
        </wx-view>
    
        <wx-view class="preview-tips" >
            \u70B9\u51FB\u5F55\u50CF\u6216\u62CD\u7167\u5373\u53EF\u5728\u4E0B\u65B9\u9884\u89C8\u6548\u679C
        </wx-view>
    
        <wx-image :v-if="src" mode="widthFix" class="photo" :src="src" >
            
        </wx-image>
    
        <wx-video :v-if="videoSrc" class="video" :src="videoSrc" >
            
        </wx-video>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/camera/camera.js
var require_camera2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/camera/camera.js"() {
    require_camera();
    window["__wxRoute"] = "page/component/pages/camera/camera";
    var page38 = getPage("page/component/pages/camera/camera");
    page38.json = `{
  "navigationBarTitleText": "camera"
}`;
    var vs2 = `
  attribute vec3 aPos;
  attribute vec2 aVertexTextureCoord;
  varying highp vec2 vTextureCoord;

  void main(void){
    gl_Position = vec4(aPos, 1);
    vTextureCoord = aVertexTextureCoord;
  }
`;
    var fs2 = `
  varying highp vec2 vTextureCoord;
  uniform sampler2D uSampler;

  void main(void) {
    gl_FragColor = texture2D(uSampler, vTextureCoord);
  }
`;
    var vertex = [
      -1,
      -1,
      0,
      1,
      -1,
      0,
      1,
      1,
      0,
      -1,
      1,
      0
    ];
    var vertexIndice = [
      0,
      1,
      2,
      0,
      2,
      3
    ];
    var texCoords = [
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1
    ];
    function createShader(gl, src, type) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Error compiling shader: " + gl.getShaderInfoLog(shader));
      }
      return shader;
    }
    var buffers = {};
    function createRenderer(canvas, width, height) {
      const gl = canvas.getContext("webgl");
      if (!gl) {
        console.error("Unable to get webgl context.");
        return;
      }
      const info = wx.getSystemInfoSync();
      gl.canvas.width = info.pixelRatio * width;
      gl.canvas.height = info.pixelRatio * height;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      const vertexShader = createShader(gl, vs2, gl.VERTEX_SHADER);
      const fragmentShader = createShader(gl, fs2, gl.FRAGMENT_SHADER);
      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Unable to initialize the shader program.");
        return;
      }
      gl.useProgram(program);
      const texture = gl.createTexture();
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.bindTexture(gl.TEXTURE_2D, null);
      buffers.vertexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertex), gl.STATIC_DRAW);
      buffers.vertexIndiceBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.vertexIndiceBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(vertexIndice), gl.STATIC_DRAW);
      const aVertexPosition = gl.getAttribLocation(program, "aPos");
      gl.vertexAttribPointer(aVertexPosition, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aVertexPosition);
      buffers.trianglesTexCoordBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.trianglesTexCoordBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texCoords), gl.STATIC_DRAW);
      const vertexTexCoordAttribute = gl.getAttribLocation(program, "aVertexTextureCoord");
      gl.enableVertexAttribArray(vertexTexCoordAttribute);
      gl.vertexAttribPointer(vertexTexCoordAttribute, 2, gl.FLOAT, false, 0, 0);
      const samplerUniform = gl.getUniformLocation(program, "uSampler");
      gl.uniform1i(samplerUniform, 0);
      return (arrayBuffer, width2, height2) => {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width2, height2, 0, gl.RGBA, gl.UNSIGNED_BYTE, arrayBuffer);
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
      };
    }
    Page({
      onShareAppMessage() {
        return {
          title: "camera",
          path: "page/component/pages/camera/camera"
        };
      },
      data: {
        src: "",
        videoSrc: "",
        position: "back",
        mode: "scanCode",
        result: {},
        frameWidth: 0,
        frameHeight: 0,
        width: 288,
        height: 358,
        showCanvas: false
      },
      onReady() {
        this.ctx = wx.createCameraContext();
      },
      init(res2) {
        if (this.listener) {
          this.listener.stop();
        }
        const canvas = res2.node;
        const render = createRenderer(canvas, this.data.width, this.data.height);
        this.listener = this.ctx.onCameraFrame((frame) => {
          render(new Uint8Array(frame.data), frame.width, frame.height);
          const {
            frameWidth,
            frameHeight
          } = this.data;
          if (frameWidth === frame.width && frameHeight == frame.height)
            return;
          this.setData({
            frameWidth: frame.width,
            frameHeight: frame.height
          });
        });
        this.listener.start();
      },
      takePhoto() {
        this.ctx.takePhoto({
          quality: "high",
          success: (res2) => {
            this.setData({
              src: res2.tempImagePath
            });
          }
        });
      },
      startRecord() {
        this.ctx.startRecord({
          success: () => {
            console.log("startRecord");
          }
        });
      },
      stopRecord() {
        this.ctx.stopRecord({
          success: (res2) => {
            this.setData({
              src: res2.tempThumbPath,
              videoSrc: res2.tempVideoPath
            });
          }
        });
      },
      togglePosition() {
        this.setData({
          position: this.data.position === "front" ? "back" : "front"
        });
      },
      error(e) {
        console.log(e.detail);
      },
      handleShowCanvas() {
        const that = this;
        this.setData({
          showCanvas: !this.data.showCanvas
        }, () => {
          if (this.data.showCanvas) {
            const selector = wx.createSelectorQuery();
            selector.select("#webgl").node(this.init).exec();
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/camera-scan-code/camera-scan-code.wxml
var require_camera_scan_code = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/camera-scan-code/camera-scan-code.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/camera-scan-code/camera-scan-code");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'camera'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-body-wrapper" >
            
        <wx-camera mode="scanCode" flash="off" bindscancode="scanCode" binderror="error" >
            
        </wx-camera>
    
        <wx-view class="btn-area" >
            
        <wx-button type="primary" bindtap="navigateBack" >
            \u8FD4\u56DE\u6B63\u5E38\u6A21\u5F0F
        </wx-button>
    
        </wx-view>
    
        <wx-form >
            
        <wx-view class="page-section" >
            
        <wx-view class="weui-cells weui-cells_after-title" >
            
        <wx-view class="weui-cell weui-cell_input" >
            
        <wx-view class="weui-cell__hd" >
            
        <wx-view class="weui-label" >
            \u7C7B\u578B
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-cell__bd" >
            {{result.type}}
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-cell weui-cell_input" >
            
        <wx-view class="weui-cell__hd" >
            
        <wx-view class="weui-label" >
            \u7ED3\u679C
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-cell__bd" >
            {{result.result}}
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-form>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/camera-scan-code/camera-scan-code.js
var require_camera_scan_code2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/camera-scan-code/camera-scan-code.js"() {
    require_camera_scan_code();
    window["__wxRoute"] = "page/component/pages/camera-scan-code/camera-scan-code";
    var page38 = getPage("page/component/pages/camera-scan-code/camera-scan-code");
    page38.json = `{
  "navigationBarTitleText": "camera"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "camera",
          path: "page/component/pages/camera-scan-code/camera-scan-code"
        };
      },
      data: {
        result: {}
      },
      onReady() {
        wx.showModal({
          title: "\u63D0\u793A",
          content: "\u5C06\u6444\u50CF\u5934\u5BF9\u51C6\u4E00\u7EF4\u7801\u5373\u53EF\u626B\u63CF",
          showCancel: false
        });
      },
      scanCode(e) {
        console.log("scanCode:", e);
        this.setData({
          result: e.detail
        });
      },
      navigateBack() {
        wx.navigateBack();
      },
      error(e) {
        console.log(e.detail);
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/map-styles/map-styles.wxml
var require_map_styles = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/map-styles/map-styles.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/map-styles/map-styles");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'map'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            \u7ECF\u5178
        </wx-view>
    
        <wx-view class="page-section-ctn" >
            
        <wx-image class="image" src="../../resources/pic/custom_map_template_1.png" >
            
        </wx-image>
    
        </wx-view>
    
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            \u58A8\u6E0A
        </wx-view>
    
        <wx-view class="page-section-ctn" >
            
        <wx-image class="image" src="../../resources/pic/custom_map_template_2.png" >
            
        </wx-image>
    
        </wx-view>
    
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            \u767D\u6D45
        </wx-view>
    
        <wx-view class="page-section-ctn" >
            
        <wx-image class="image" src="../../resources/pic/custom_map_template_3.png" >
            
        </wx-image>
    
        </wx-view>
    
        <wx-view class="page-section page-section-gap" >
            
        <wx-view class="page-section-title" >
            \u7389\u9732
        </wx-view>
    
        <wx-view class="page-section-ctn" >
            
        <wx-image class="image" src="../../resources/pic/custom_map_template_4.png" >
            
        </wx-image>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/map-styles/map-styles.js
var require_map_styles2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/map-styles/map-styles.js"() {
    require_map_styles();
    window["__wxRoute"] = "page/component/pages/map-styles/map-styles";
    var page38 = getPage("page/component/pages/map-styles/map-styles");
    page38.json = `{
  "navigationBarTitleText": "map\u5E95\u56FE\u6837\u5F0F"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "map\u5E95\u56FE\u6837\u5F0F",
          path: "page/component/pages/map-styles/map-styles"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/live-player/live-player.wxml
var require_live_player = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/live-player/live-player.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/live-player/live-player");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'live-player'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section" >
            
        <wx-live-player id="player" :src=" videoSrc " mode="RTC" autoplay bindstatechange="handleLivePlayerStateChange" binderror="handleLivePlayerError" >
            
        </wx-live-player>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="page-url" >
            \u89C6\u9891\u5730\u5740(\u652F\u6301flv,rtmp):
        </wx-view>
    
        <wx-input class="input" name="input" placeholder="\u89C6\u9891\u64AD\u653E\u94FE\u63A5" :value=" videoSrc " bindinput="handleVideoSrcInput" >
            
        <wx-button type="primary" bindtap="handleScanQRCode" >
            \u626B\u7801
        </wx-button>
    
        </wx-input>
    
        <wx-view class="page-section" >
            
        <wx-button bindtap="handlePlay" class="page-body-button" type="primary" >
            \u64AD\u653E
        </wx-button>
    
        <wx-button bindtap="handlePause" class="page-body-button" type="primary" >
            \u6682\u505C
        </wx-button>
    
        <wx-button bindtap="handleStop" class="page-body-button" type="primary" >
            \u505C\u6B62
        </wx-button>
    
        <wx-button bindtap="handleResume" class="page-body-button" type="primary" >
            \u6062\u590D
        </wx-button>
    
        <wx-button bindtap="handleMute" class="page-body-button" type="primary" >
            \u9759\u97F3
        </wx-button>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </wx-view>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/live-player/live-player.js
var require_live_player2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/live-player/live-player.js"() {
    require_live_player();
    window["__wxRoute"] = "page/component/pages/live-player/live-player";
    var page38 = getPage("page/component/pages/live-player/live-player");
    page38.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "live-player"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "live-player",
          path: "page/component/pages/live-player/live-player"
        };
      },
      data: {
        videoSrc: ""
      },
      onReady(res2) {
        this.ctx = wx.createLivePlayerContext("player");
      },
      handleScanQRCode() {
        wx.scanCode({
          complete: (res2) => {
            const { result } = res2;
            this.setData({
              videoSrc: result
            });
          }
        });
      },
      handleLivePlayerStateChange(e) {
        console.log("live-player code:", e.detail.code);
      },
      handleLivePlayerError(e) {
        console.error("live-player error:", e.detail.errMsg);
      },
      handlePlay() {
        this.ctx.play({
          success: (res2) => {
            console.log("play success");
          },
          fail: (res2) => {
            console.log("play fail");
          }
        });
      },
      handlePause() {
        this.ctx.pause({
          success: (res2) => {
            console.log("pause success");
          },
          fail: (res2) => {
            console.log("pause fail");
          }
        });
      },
      handleStop() {
        this.ctx.stop({
          success: (res2) => {
            console.log("stop success");
          },
          fail: (res2) => {
            console.log("stop fail");
          }
        });
      },
      handleResume() {
        this.ctx.resume({
          success: (res2) => {
            console.log("resume success");
          },
          fail: (res2) => {
            console.log("resume fail");
          }
        });
      },
      handleMute() {
        this.ctx.mute({
          success: (res2) => {
            console.log("mute success");
          },
          fail: (res2) => {
            console.log("mute fail");
          }
        });
      },
      handleVideoSrcInput(e) {
        this.setData({
          videoSrc: e.detail.value
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/live-pusher/live-pusher.wxml
var require_live_pusher = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/live-pusher/live-pusher.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/live-pusher/live-pusher");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'live-pusher'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section" >
            
        <wx-live-pusher id="pusher" :url=" videoSrc " mode="RTC" autopush bindstatechange="handleLivePusherStateChange" binderror="handleLivePusherError" >
            
        </wx-live-pusher>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="page-url" >
            \u89C6\u9891\u5730\u5740(\u652F\u6301rtmp):
        </wx-view>
    
        <wx-input name="input" placeholder="\u89C6\u9891\u63A8\u9001\u94FE\u63A5" :value=" videoSrc " bindinput="handleVideoSrcInput" >
            
        <wx-button type="primary" bindtap="handleScanQRCode" >
            \u626B\u7801
        </wx-button>
    
        </wx-input>
    
        <wx-view class="page-section" >
            
        <wx-button bindtap="handleStart" class="page-body-button" type="primary" >
            \u5F00\u59CB
        </wx-button>
    
        <wx-button bindtap="handlePause" class="page-body-button" type="primary" >
            \u6682\u505C
        </wx-button>
    
        <wx-button bindtap="handleStop" class="page-body-button" type="primary" >
            \u505C\u6B62
        </wx-button>
    
        <wx-button bindtap="handleResume" class="page-body-button" type="primary" >
            \u6062\u590D
        </wx-button>
    
        <wx-button bindtap="handleSwitchCamera" class="page-body-button" type="primary" >
            \u5207\u6362\u6444\u50CF\u5934
        </wx-button>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </wx-view>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/live-pusher/live-pusher.js
var require_live_pusher2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/live-pusher/live-pusher.js"() {
    require_live_pusher();
    window["__wxRoute"] = "page/component/pages/live-pusher/live-pusher";
    var page38 = getPage("page/component/pages/live-pusher/live-pusher");
    page38.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "live-pusher"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "live-pusher",
          path: "page/component/pages/live-pusher/live-pusher"
        };
      },
      data: {
        videoSrc: ""
      },
      onReady(res2) {
        this.ctx = wx.createLivePusherContext("pusher");
      },
      handleLivePusherStateChange(e) {
        console.log("live-pusher code:", e.detail.code);
      },
      handleLivePusherError(e) {
        console.error("live-pusher error:", e.detail.errMsg);
      },
      handleStart() {
        this.ctx.start({
          success: (res2) => {
            console.log("start success");
          },
          fail: (res2) => {
            console.log("start fail");
          }
        });
      },
      handleScanQRCode() {
        wx.scanCode({
          complete: (res2) => {
            const { result } = res2;
            this.setData({
              videoSrc: result
            });
          }
        });
      },
      handlePause() {
        this.ctx.pause({
          success: (res2) => {
            console.log("pause success");
          },
          fail: (res2) => {
            console.log("pause fail");
          }
        });
      },
      handleStop() {
        this.ctx.stop({
          success: (res2) => {
            console.log("stop success");
          },
          fail: (res2) => {
            console.log("stop fail");
          }
        });
      },
      handleResume() {
        this.ctx.resume({
          success: (res2) => {
            console.log("resume success");
          },
          fail: (res2) => {
            console.log("resume fail");
          }
        });
      },
      handleSwitchCamera() {
        this.ctx.switchCamera({
          success: (res2) => {
            console.log("switch camera success");
          },
          fail: (res2) => {
            console.log("switch camera fail");
          }
        });
      },
      handleVideoSrcInput(e) {
        this.setData({
          videoSrc: e.detail.value
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/aria-component/aria-component.wxml
var require_aria_component = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/aria-component/aria-component.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/aria-component/aria-component");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: '\u65E0\u969C\u788D\u8BBF\u95EE'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            
        <wx-text >
            \u65E0\u969C\u788D\u8BBF\u95EE\u8BF4\u660E
        </wx-text>
    
        </wx-view>
    
        <wx-view class="page-section-spacing" >
            
        <wx-view class="text-box" >
            
        <wx-text >
            \u4E3A\u4E86\u66F4\u597D\u5730\u6EE1\u8DB3\u89C6\u969C\u4EBA\u58EB
\u5BF9\u4E8E\u5C0F\u7A0B\u5E8F\u7684\u8BBF\u95EE\u9700\u6C42
\u57FA\u7840\u5E93\u81EA2.7.1\u8D77\uFF0C\u652F\u6301\u90E8\u5206ARIA\u6807\u7B7E
\u65E0\u969C\u788D\u7279\u6027\u5728\u8BFB\u5C4F\u6A21\u5F0F\u4E0B\u53EF\u4EE5\u8BBF\u95EE
        </wx-text>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page-section" >
            
        <wx-view class="page-section-title" >
            
        <wx-text >
            \u4F8B\u5B50
        </wx-text>
    
        </wx-view>
    
        <wx-view class="page-section-spacing" >
            
        <wx-view aria-role="button" aria-label="\u63D0\u4EA4\u8868\u5355" style="text-align: center" >
            \u63D0\u4EA4
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/aria-component/aria-component.js
var require_aria_component2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/aria-component/aria-component.js"() {
    require_aria_component();
    window["__wxRoute"] = "page/component/pages/aria-component/aria-component";
    var page38 = getPage("page/component/pages/aria-component/aria-component");
    page38.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "aria-component"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u65E0\u969C\u788D\u8BBF\u95EE",
          path: "page/component/pages/aria-component/aria-component"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/API/index.wxml
var require_API = __commonJS({
  "miniprogram-demo/miniprogram/page/API/index.wxml"() {
    var page38 = getPage("page/API/index");
    page38.template = `
        <wx-set-tab-bar :v-if="isSetTabBarPage" bindunmount="leaveSetTabBarPage" >
            
        </wx-set-tab-bar>
    
        <wx-view v-else class="index" >
            
        <wx-view class="index-hd" >
            
        <wx-image class="index-logo" src="resources/kind/logo.png" >
            
        </wx-image>
    
        <wx-view class="index-desc" >
            
        <wx-navigator url="pages/doc-web-view/doc-web-view" class="weui-agree__link" >
            \u4EE5\u4E0B\u5C06\u6F14\u793A\u5C0F\u7A0B\u5E8F\u63A5\u53E3\u80FD\u529B\uFF0C\u5177\u4F53\u5C5E\u6027\u53C2\u6570\u8BE6\u89C1\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u6587\u6863
        </wx-navigator>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="index-bd" >
            
        <wx-view class="kind-list" >
            
        <div :v-key="item.id" >
            
        <wx-view class="kind-list-item" >
            
        <wx-view :id="item.id" :class="kind-list-item-hd item.open ? 'kind-list-item-hd-show" bindtap="kindToggle" >
            
        <wx-view class="kind-list-text" >
            {{item.name}}
        </wx-view>
    
        <wx-image :v-if="theme" class="kind-list-img" :src="resources/kind/item.id_dark.png" >
            
        </wx-image>
    
        <wx-image v-else class="kind-list-img" :src="resources/kind/item.id.png" >
            
        </wx-image>
    
        </wx-view>
    
        <wx-view :class="kind-list-item-bd item.open ? 'kind-list-item-bd-show" >
            
        <wx-view :class="navigator-box item.open ? 'navigator-box-show" >
            
        <div v-key="*item" >
            
        <wx-navigator :url="../../packageAPI/pages/page.url" class="navigator" :v-if="page.url " >
            
        <wx-view class="navigator-text" >
            {{page.zh}}
        </wx-view>
    
        <wx-view class="navigator-arrow" >
            
        </wx-view>
    
        </wx-navigator>
    
        <wx-view v-else class="navigator" bindtap="enterSetTabBarPage" >
            
        <wx-view class="navigator-text" >
            {{page.zh}}
        </wx-view>
    
        <wx-view class="navigator-arrow" >
            
        </wx-view>
    
        </wx-view>
    
        </div>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </div>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/API/index.js
var require_API2 = __commonJS({
  "miniprogram-demo/miniprogram/page/API/index.js"() {
    require_API();
    window["__wxRoute"] = "page/API/index";
    var page38 = getPage("page/API/index");
    page38.json = `{
    "navigationBarTitleText": "\u5C0F\u7A0B\u5E8F\u63A5\u53E3\u80FD\u529B\u5C55\u793A",
    "usingComponents": {
      "set-tab-bar": "components/set-tab-bar/set-tab-bar"
    }
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u5C0F\u7A0B\u5E8F\u63A5\u53E3\u80FD\u529B\u5C55\u793A",
          path: "page/API/index"
        };
      },
      data: {
        list: [
          {
            id: "api",
            name: "\u5F00\u653E\u63A5\u53E3",
            open: false,
            pages: [
              {
                zh: "\u5FAE\u4FE1\u767B\u5F55",
                url: "login/login"
              },
              {
                zh: "\u83B7\u53D6\u7528\u6237\u4FE1\u606F",
                url: "get-user-info/get-user-info"
              },
              {
                zh: "\u53D1\u8D77\u652F\u4ED8",
                url: "request-payment/request-payment"
              },
              {
                zh: "\u8F6C\u53D1",
                url: "share/share"
              },
              {
                zh: "\u8F6C\u53D1\u6309\u94AE",
                url: "share-button/share-button"
              },
              {
                zh: "\u5BA2\u670D\u6D88\u606F",
                url: "custom-message/custom-message"
              },
              {
                zh: "\u8BA2\u9605\u6D88\u606F",
                url: "subscribe-message/subscribe-message"
              },
              {
                zh: "\u6536\u8D27\u5730\u5740",
                url: "choose-address/choose-address"
              },
              {
                zh: "\u83B7\u53D6\u53D1\u7968\u62AC\u5934",
                url: "choose-invoice-title/choose-invoice-title"
              },
              {
                zh: "\u751F\u7269\u8BA4\u8BC1",
                url: "soter-authentication/soter-authentication"
              },
              {
                zh: "\u8BBE\u7F6E",
                url: "setting/setting"
              }
            ]
          },
          {
            id: "page",
            name: "\u754C\u9762",
            open: false,
            pages: [
              {
                zh: "\u8BBE\u7F6E\u754C\u9762\u6807\u9898",
                url: "set-navigation-bar-title/set-navigation-bar-title"
              },
              {
                zh: "\u6807\u9898\u680F\u52A0\u8F7D\u52A8\u753B",
                url: "navigation-bar-loading/navigation-bar-loading"
              },
              {
                zh: "\u8BBE\u7F6ETabBar",
                url: "@set-tab-bar"
              },
              {
                zh: "\u9875\u9762\u8DF3\u8F6C",
                url: "navigator/navigator"
              },
              {
                zh: "\u4E0B\u62C9\u5237\u65B0",
                url: "pull-down-refresh/pull-down-refresh"
              },
              {
                zh: "\u521B\u5EFA\u52A8\u753B",
                url: "animation/animation"
              },
              {
                zh: "\u521B\u5EFA\u7ED8\u753B",
                url: "canvas/canvas"
              },
              {
                zh: "\u663E\u793A\u64CD\u4F5C\u83DC\u5355",
                url: "action-sheet/action-sheet"
              },
              {
                zh: "\u663E\u793A\u6A21\u6001\u5F39\u7A97",
                url: "modal/modal"
              },
              {
                zh: "\u9875\u9762\u6EDA\u52A8",
                url: "page-scroll/page-scroll"
              },
              {
                zh: "\u663E\u793A\u6D88\u606F\u63D0\u793A\u6846",
                url: "toast/toast"
              },
              {
                zh: "\u83B7\u53D6WXML\u8282\u70B9\u4FE1\u606F",
                url: "get-wxml-node-info/get-wxml-node-info"
              },
              {
                zh: "WXML\u8282\u70B9\u5E03\u5C40\u76F8\u4EA4\u72B6\u6001",
                url: "intersection-observer/intersection-observer"
              }
            ]
          },
          {
            id: "device",
            name: "\u8BBE\u5907",
            open: false,
            pages: [
              {
                zh: "\u83B7\u53D6\u624B\u673A\u7F51\u7EDC\u72B6\u6001",
                url: "get-network-type/get-network-type"
              },
              {
                zh: "\u76D1\u542C\u624B\u673A\u7F51\u7EDC\u53D8\u5316",
                url: "on-network-status-change/on-network-status-change"
              },
              {
                zh: "\u83B7\u53D6\u624B\u673A\u7CFB\u7EDF\u4FE1\u606F",
                url: "get-system-info/get-system-info"
              },
              {
                zh: "\u83B7\u53D6\u624B\u673A\u8BBE\u5907\u7535\u91CF",
                url: "get-battery-info/get-battery-info"
              },
              {
                zh: "\u76D1\u542C\u91CD\u529B\u611F\u5E94\u6570\u636E",
                url: "on-accelerometer-change/on-accelerometer-change"
              },
              {
                zh: "\u76D1\u542C\u7F57\u76D8\u6570\u636E",
                url: "on-compass-change/on-compass-change"
              },
              {
                zh: "\u6253\u7535\u8BDD",
                url: "make-phone-call/make-phone-call"
              },
              {
                zh: "\u626B\u7801",
                url: "scan-code/scan-code"
              },
              {
                zh: "\u526A\u5207\u677F",
                url: "clipboard-data/clipboard-data"
              },
              {
                zh: "\u84DD\u7259",
                url: "bluetooth/bluetooth"
              },
              {
                zh: "iBeacon",
                url: "ibeacon/ibeacon"
              },
              {
                zh: "\u5C4F\u5E55\u4EAE\u5EA6",
                url: "screen-brightness/screen-brightness"
              },
              {
                zh: "\u7528\u6237\u622A\u5C4F\u4E8B\u4EF6",
                url: "capture-screen/capture-screen"
              },
              {
                zh: "\u632F\u52A8",
                url: "vibrate/vibrate"
              },
              {
                zh: "\u624B\u673A\u8054\u7CFB\u4EBA",
                url: "add-contact/add-contact"
              },
              {
                zh: "Wi-Fi",
                url: "wifi/wifi"
              }
            ]
          },
          {
            id: "performance",
            name: "\u6027\u80FD",
            open: false,
            pages: [
              {
                zh: "\u83B7\u53D6\u6027\u80FD\u6570\u636E",
                url: "get-performance/get-performance"
              }
            ]
          },
          {
            id: "network",
            name: "\u7F51\u7EDC",
            open: false,
            pages: [
              {
                zh: "\u53D1\u8D77\u4E00\u4E2A\u8BF7\u6C42",
                url: "request/request"
              },
              {
                zh: "WebSocket",
                url: "web-socket/web-socket"
              },
              {
                zh: "\u4E0A\u4F20\u6587\u4EF6",
                url: "upload-file/upload-file"
              },
              {
                zh: "\u4E0B\u8F7D\u6587\u4EF6",
                url: "download-file/download-file"
              },
              {
                zh: "UDPSocket",
                url: "udp-socket/udp-socket"
              },
              {
                zh: "mDNS",
                url: "mdns/mdns"
              }
            ]
          },
          {
            id: "media",
            name: "\u5A92\u4F53",
            open: false,
            pages: [
              {
                zh: "\u56FE\u7247",
                url: "image/image"
              },
              {
                zh: "\u97F3\u9891",
                url: "audio/audio"
              },
              {
                zh: "\u5F55\u97F3",
                url: "voice/voice"
              },
              {
                zh: "\u80CC\u666F\u97F3\u9891",
                url: "background-audio/background-audio"
              },
              {
                zh: "\u6587\u4EF6",
                url: "file/file"
              },
              {
                zh: "\u89C6\u9891",
                url: "video/video"
              },
              {
                zh: "\u97F3\u89C6\u9891\u5408\u6210",
                url: "media-container/media-container"
              },
              {
                zh: "\u52A8\u6001\u52A0\u8F7D\u5B57\u4F53",
                url: "load-font-face/load-font-face"
              }
            ]
          },
          {
            id: "location",
            name: "\u4F4D\u7F6E",
            open: false,
            pages: [
              {
                zh: "\u83B7\u53D6\u5F53\u524D\u4F4D\u7F6E",
                url: "get-location/get-location"
              },
              {
                zh: "\u4F7F\u7528\u539F\u751F\u5730\u56FE\u67E5\u770B\u4F4D\u7F6E",
                url: "open-location/open-location"
              },
              {
                zh: "\u4F7F\u7528\u539F\u751F\u5730\u56FE\u9009\u62E9\u4F4D\u7F6E",
                url: "choose-location/choose-location"
              }
            ]
          },
          {
            id: "storage",
            name: "\u6570\u636E",
            pages: [{
              zh: "\u672C\u5730\u5B58\u50A8",
              url: "storage/storage"
            }, {
              zh: "\u5468\u671F\u6027\u66F4\u65B0",
              url: "get-background-fetch-data/get-background-fetch-data"
            }, {
              zh: "\u6570\u636E\u9884\u62C9\u53D6",
              url: "get-background-prefetch-data/get-background-prefetch-data"
            }]
          },
          {
            id: "worker",
            name: "\u591A\u7EBF\u7A0B",
            url: "worker/worker"
          },
          {
            id: "framework",
            name: "\u6846\u67B6",
            pages: [{
              zh: "\u53CC\u5411\u7ED1\u5B9A",
              url: "two-way-bindings/two-way-bindings"
            }, {
              zh: "WXS",
              url: "wxs/wxs"
            }, {
              zh: "\u5C4F\u5E55\u65CB\u8F6C",
              url: "resizable/resizable"
            }]
          }
        ],
        isSetTabBarPage: false,
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
      onShow() {
        this.leaveSetTabBarPage();
      },
      onHide() {
        this.leaveSetTabBarPage();
      },
      kindToggle(e) {
        const id = e.currentTarget.id;
        const list = this.data.list;
        for (let i = 0, len = list.length; i < len; ++i) {
          if (list[i].id === id) {
            if (list[i].url) {
              wx.navigateTo({
                url: "../../packageAPI/pages/" + list[i].url
              });
              return;
            }
            list[i].open = !list[i].open;
          } else {
            list[i].open = false;
          }
        }
        this.setData({
          list
        });
      },
      enterSetTabBarPage() {
        this.setData({
          isSetTabBarPage: true
        });
      },
      leaveSetTabBarPage() {
        this.setData({
          isSetTabBarPage: false
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/cloud/index.wxml
var require_cloud = __commonJS({
  "miniprogram-demo/miniprogram/page/cloud/index.wxml"() {
    var page38 = getPage("page/cloud/index");
    page38.template = `
        <wx-view class="index" >
            
        <wx-view class="index-hd" >
            
        <wx-image class="index-logo" src="resources/kind/logo.png" >
            
        </wx-image>
    
        <wx-view class="index-desc" >
            
        <wx-navigator url="../../packageAPI/pages/doc-web-view/doc-web-view" class="weui-agree__link" >
            \u4EE5\u4E0B\u5C06\u6F14\u793A\u5C0F\u7A0B\u5E8F\u4E91\u5F00\u53D1\u80FD\u529B\uFF0C\u5177\u4F53\u5C5E\u6027\u53C2\u6570\u8BE6\u89C1\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u6587\u6863
        </wx-navigator>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="index-bd" >
            
        <wx-view class="kind-list" >
            
        <div :v-key="item.id" >
            
        <wx-view class="kind-list-item" >
            
        <wx-view :id="item.id" :class="kind-list-item-hd item.open ? 'kind-list-item-hd-show" bindtap="kindToggle" >
            
        <wx-view class="kind-list-text" >
            {{item.name}}
        </wx-view>
    
        <wx-image :v-if="theme" class="kind-list-img" :src="resources/kind/item.id_dark.png" >
            
        </wx-image>
    
        <wx-image v-else class="kind-list-img" :src="resources/kind/item.id.png" >
            
        </wx-image>
    
        </wx-view>
    
        <wx-view :class="kind-list-item-bd item.open ? 'kind-list-item-bd-show" >
            
        <wx-view :class="navigator-box item.open ? 'navigator-box-show" >
            
        <div v-key="*item" >
            
        <wx-navigator :url="../../packageCloud/pages/page.url" class="navigator" >
            
        <wx-view class="navigator-text" >
            {{page.zh}}
        </wx-view>
    
        <wx-view class="navigator-arrow" >
            
        </wx-view>
    
        </wx-navigator>
    
        </div>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </div>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/cloud/index.js
var require_cloud2 = __commonJS({
  "miniprogram-demo/miniprogram/page/cloud/index.js"() {
    require_cloud();
    window["__wxRoute"] = "page/cloud/index";
    var page38 = getPage("page/cloud/index");
    page38.json = `{
  "navigationBarTitleText": "\u5C0F\u7A0B\u5E8F\u4E91\u5F00\u53D1\u5C55\u793A"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u5C0F\u7A0B\u5E8F\u4E91\u5F00\u53D1\u5C55\u793A",
          path: "page/cloud/index"
        };
      },
      data: {
        list: [
          {
            id: "user",
            name: "\u7528\u6237\u9274\u6743",
            open: false,
            pages: [
              {
                zh: "\u83B7\u53D6 OpenID",
                url: "user-authentication/user-authentication"
              }
            ]
          },
          {
            id: "database",
            name: "\u6570\u636E\u5E93",
            open: false,
            pages: [
              {
                zh: "\u57FA\u672C\u64CD\u4F5C",
                url: "crud/crud"
              },
              {
                zh: "\u6743\u9650\u7BA1\u7406",
                url: "db-permission/db-permission"
              },
              {
                zh: "\u670D\u52A1\u7AEF\u65F6\u95F4",
                url: "server-date/server-date"
              }
            ]
          },
          {
            id: "storage",
            name: "\u5B58\u50A8",
            open: false,
            pages: [
              {
                zh: "\u4E0A\u4F20\u6587\u4EF6",
                url: "upload-file/upload-file"
              },
              {
                zh: "\u4E0B\u8F7D\u6587\u4EF6",
                url: "download-file/download-file"
              },
              {
                zh: "\u5220\u9664\u6587\u4EF6",
                url: "delete-file/delete-file"
              },
              {
                zh: "\u6362\u53D6\u4E34\u65F6\u94FE\u63A5",
                url: "get-temp-file-url/get-temp-file-url"
              },
              {
                zh: "\u7EC4\u4EF6\u652F\u6301",
                url: "cloud-file-component/cloud-file-component"
              }
            ]
          },
          {
            id: "scf",
            name: "\u4E91\u51FD\u6570",
            open: false,
            pages: [
              {
                zh: "WXContext",
                url: "get-wx-context/get-wx-context"
              },
              {
                zh: "\u6570\u636E\u5E93",
                url: "scf-database/scf-database"
              },
              {
                zh: "\u5B58\u50A8",
                url: "scf-storage/scf-storage"
              },
              {
                zh: "\u4E91\u8C03\u7528",
                url: "scf-openapi/scf-openapi"
              }
            ]
          }
        ],
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
      kindToggle(e) {
        const id = e.currentTarget.id;
        const list = this.data.list;
        console.log(id, list);
        for (let i = 0, len = list.length; i < len; ++i) {
          if (list[i].id === id) {
            if (list[i].url) {
              console.log(list[i].url);
              wx.navigateTo({
                url: "../../packageCloud/pages/" + list[i].url
              });
              return;
            }
            list[i].open = !list[i].open;
          } else {
            list[i].open = false;
          }
        }
        this.setData({
          list
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/doc-web-view/doc-web-view.wxml
var require_doc_web_view = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/doc-web-view/doc-web-view.wxml"() {
    var page38 = getPage("page/component/pages/doc-web-view/doc-web-view");
    page38.template = `
        <wx-web-view src="https://developers.weixin.qq.com/miniprogram/dev/component/" >
            
        </wx-web-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/doc-web-view/doc-web-view.js
var require_doc_web_view2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/doc-web-view/doc-web-view.js"() {
    require_doc_web_view();
    window["__wxRoute"] = "page/component/pages/doc-web-view/doc-web-view";
    var page38 = getPage("page/component/pages/doc-web-view/doc-web-view");
    page38.json = `{
  "navigationBarTitleText": "\u5C0F\u7A0B\u5E8F\u7EC4\u4EF6\u6587\u6863"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u5C0F\u7A0B\u5E8F\u7EC4\u4EF6\u6587\u6863",
          path: "page/component/pages/doc-web-view/doc-web-view"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/open-data/open-data.wxml
var require_open_data = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/open-data/open-data.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/open-data/open-data");
    page38.template = `
        <wx-open-data type="userAvatarUrl" lang="zh_CN" >
            
        </wx-open-data>
    
        <wx-open-data type="userGender" lang="zh_CN" >
            
        </wx-open-data>
    
        <wx-open-data type="userNickName" lang="zh_CN" >
            
        </wx-open-data>
    
        <wx-open-data type="userCity" lang="zh_CN" >
            
        </wx-open-data>
    
        <wx-open-data type="userProvince" lang="zh_CN" >
            
        </wx-open-data>
    
        <wx-open-data type="userCountry" lang="zh_CN" >
            
        </wx-open-data>
    
        <wx-open-data type="userLanguage" lang="zh_CN" >
            
        </wx-open-data>
    
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'open-data'}" >
            
        <wx-view class="page-body" >
            
        <wx-view class="avatar" >
            
        <wx-open-data class="avatar-img" type="userAvatarUrl" lang="zh_CN" >
            
        </wx-open-data>
    
        </wx-view>
    
        <wx-form >
            
        <wx-view class="page-section" >
            
        <wx-view class="weui-cells weui-cells_after-title" >
            
        <wx-view class="weui-cell weui-cell_input" >
            
        <wx-view class="weui-cell__hd" >
            
        <wx-view class="weui-label" >
            \u6635\u79F0
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-cell__bd" >
            
        <wx-view class="weui-input" >
            
        <wx-open-data type="userNickName" lang="zh_CN" >
            
        </wx-open-data>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-cell weui-cell_input" >
            
        <wx-view class="weui-cell__hd" >
            
        <wx-view class="weui-label" >
            \u6027\u522B
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-cell__bd" >
            
        <wx-view class="weui-input" >
            
        <wx-open-data type="userGender" lang="zh_CN" >
            
        </wx-open-data>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-cell weui-cell_input" >
            
        <wx-view class="weui-cell__hd" >
            
        <wx-view class="weui-label" >
            \u5730\u533A
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-cell__bd" >
            
        <wx-view class="weui-input" >
            
        <wx-open-data class="country" type="userCountry" lang="zh_CN" >
            
        </wx-open-data>
    
        <wx-open-data class="province" type="userProvince" lang="zh_CN" >
            
        </wx-open-data>
    
        <wx-open-data class="city" type="userCity" lang="zh_CN" >
            
        </wx-open-data>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-cell weui-cell_input" >
            
        <wx-view class="weui-cell__hd" >
            
        <wx-view class="weui-label" >
            \u8BED\u8A00
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-cell__bd" >
            
        <wx-view class="weui-input" >
            
        <wx-open-data type="userLanguage" lang="zh_CN" >
            
        </wx-open-data>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-form>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/open-data/open-data.js
var require_open_data2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/open-data/open-data.js"() {
    require_open_data();
    window["__wxRoute"] = "page/component/pages/open-data/open-data";
    var page38 = getPage("page/component/pages/open-data/open-data");
    page38.json = `{
  "navigationBarTitleText": "open-data"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "open-data",
          path: "page/component/pages/open-data/open-data"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/web-view/web-view.wxml
var require_web_view = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/web-view/web-view.wxml"() {
    var page38 = getPage("page/component/pages/web-view/web-view");
    page38.template = `
        <wx-web-view src="https://developers.weixin.qq.com/miniprogram/introduction/" >
            
        </wx-web-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/web-view/web-view.js
var require_web_view2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/web-view/web-view.js"() {
    require_web_view();
    window["__wxRoute"] = "page/component/pages/web-view/web-view";
    var page38 = getPage("page/component/pages/web-view/web-view");
    page38.json = `{
    "navigationBarTitleText": "webview"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "webview",
          path: "page/component/pages/web-view/web-view"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/editor/editor.wxml
var require_editor = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/editor/editor.wxml"() {
    var page38 = getPage("page/component/pages/editor/editor");
    page38.template = `
        <wx-view class="container" :style="height:editorHeightpx;" >
            
        <wx-editor id="editor" class="ql-container" :placeholder="placeholder" bindstatuschange="onStatusChange" bindready="onEditorReady" >
            
        </wx-editor>
    
        </wx-view>
    
        <wx-view class="toolbar" catchtouchend="format" :hidden="false" :style="bottom: isIOS ? keyboardHeight : 0px; height: {{toolBarHeight}}px; padding-bottom: {{isIOS ? safeHeight : 0}}px" >
            
        <wx-i class="iconfont icon-charutupian" catchtouchend="insertImage" >
            
        </wx-i>
    
        <wx-i :class="iconfont icon-format-header-2 formats.header" data-name="header" :data-value="2" >
            
        </wx-i>
    
        <wx-i :class="iconfont icon-format-header-3 formats.header" data-name="header" :data-value="3" >
            
        </wx-i>
    
        <wx-i :class="iconfont icon-zitijiacu formats.bold ? 'ql-active" data-name="bold" >
            
        </wx-i>
    
        <wx-i :class="iconfont icon-zitixieti formats.italic ? 'ql-active" data-name="italic" >
            
        </wx-i>
    
        <wx-i :class="iconfont icon-zitixiahuaxian formats.underline ? 'ql-active" data-name="underline" >
            
        </wx-i>
    
        <wx-i class="iconfont icon--checklist" data-name="list" data-value="check" >
            
        </wx-i>
    
        <wx-i :class="iconfont icon-youxupailie formats.list" data-name="list" data-value="ordered" >
            
        </wx-i>
    
        <wx-i :class="iconfont icon-wuxupailie formats.list" data-name="list" data-value="bullet" >
            
        </wx-i>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/editor/editor.js
var require_editor2 = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/editor/editor.js"() {
    require_editor();
    window["__wxRoute"] = "page/component/pages/editor/editor";
    var page38 = getPage("page/component/pages/editor/editor");
    page38.json = `{
  "navigationBarTitleText": "editor",
  "disableScroll": true
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "editor",
          path: "page/component/pages/editor/editor"
        };
      },
      data: {
        formats: {},
        readOnly: false,
        placeholder: "\u5F00\u59CB\u8F93\u5165...",
        editorHeight: 300,
        keyboardHeight: 0,
        isIOS: false,
        safeHeight: 0,
        toolBarHeight: 50
      },
      readOnlyChange() {
        this.setData({
          readOnly: !this.data.readOnly
        });
      },
      onLoad() {
        const { platform, safeArea, model, screenHeight } = wx.getSystemInfoSync();
        let safeHeight;
        if (safeArea) {
          safeHeight = screenHeight - safeArea.bottom;
        } else {
          safeHeight = 32;
        }
        this._safeHeight = safeHeight;
        let isIOS = platform === "ios";
        this.setData({ isIOS, safeHeight, toolBarHeight: isIOS ? safeHeight + 50 : 50 });
        const that = this;
        this.updatePosition(0);
        let keyboardHeight = 0;
        wx.onKeyboardHeightChange((res2) => {
          if (res2.height === keyboardHeight) {
            return;
          }
          const duration = res2.height > 0 ? res2.duration * 1e3 : 0;
          keyboardHeight = res2.height;
          setTimeout(() => {
            wx.pageScrollTo({
              scrollTop: 0,
              success() {
                that.updatePosition(keyboardHeight);
                that.editorCtx.scrollIntoView();
              }
            });
          }, duration);
        });
      },
      updatePosition(keyboardHeight) {
        const toolbarHeight = 50;
        const { windowHeight, platform } = wx.getSystemInfoSync();
        let editorHeight = keyboardHeight > 0 ? windowHeight - keyboardHeight - toolbarHeight : windowHeight;
        if (keyboardHeight === 0) {
          this.setData({
            editorHeight,
            keyboardHeight,
            toolBarHeight: this.data.isIOS ? 50 + this._safeHeight : 50,
            safeHeight: this._safeHeight
          });
        } else {
          this.setData({
            editorHeight,
            keyboardHeight,
            toolBarHeight: 50,
            safeHeight: 0
          });
        }
      },
      calNavigationBarAndStatusBar() {
        const systemInfo = wx.getSystemInfoSync();
        const { statusBarHeight, platform } = systemInfo;
        const isIOS = platform === "ios";
        const navigationBarHeight = isIOS ? 44 : 48;
        return statusBarHeight + navigationBarHeight;
      },
      onEditorReady() {
        const that = this;
        wx.createSelectorQuery().select("#editor").context(function(res2) {
          that.editorCtx = res2.context;
        }).exec();
      },
      blur() {
        this.editorCtx.blur();
      },
      format(e) {
        let { name, value } = e.target.dataset;
        if (!name)
          return;
        this.editorCtx.format(name, value);
      },
      onStatusChange(e) {
        const formats = e.detail;
        this.setData({ formats });
      },
      insertDivider() {
        this.editorCtx.insertDivider({
          success: function() {
            console.log("insert divider success");
          }
        });
      },
      clear() {
        this.editorCtx.clear({
          success: function(res2) {
            console.log("clear success");
          }
        });
      },
      removeFormat() {
        this.editorCtx.removeFormat();
      },
      insertDate() {
        const date = new Date();
        const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        this.editorCtx.insertText({
          text: formatDate
        });
      },
      insertImage() {
        const that = this;
        wx.chooseImage({
          count: 1,
          success: function(res2) {
            that.editorCtx.insertImage({
              src: res2.tempFilePaths[0],
              data: {
                id: "abcd",
                role: "god"
              },
              width: "80%",
              success: function() {
                console.log("insert image success");
              }
            });
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/base/behaviors/theme.js
var require_theme = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/base/behaviors/theme.js"(exports, module) {
    window["__wxRoute"] = "page/weui/base/behaviors/theme";
    var page38 = getPage("page/weui/base/behaviors/theme");
    page38.json = ``;
    module.exports = Behavior({
      data: {
        theme: "light"
      },
      methods: {
        themeChanged(theme) {
          this.setData({
            theme
          });
        }
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/base/CustomPage.js
var import_theme, page2, CustomPage, CustomPage_default;
var init_CustomPage = __esm({
  "miniprogram-demo/miniprogram/page/weui/base/CustomPage.js"() {
    import_theme = __toModule(require_theme());
    window["__wxRoute"] = "page/weui/base/CustomPage";
    page2 = getPage("page/weui/base/CustomPage");
    page2.json = ``;
    CustomPage = function(options) {
      return Page(Object.assign({}, options, {
        behaviors: [import_theme.default].concat(options.behaviors || []),
        onLoad(query) {
          const app3 = getApp();
          if (this.themeChanged) {
            this.themeChanged(app3.globalData.theme);
            app3.watchThemeChange && app3.watchThemeChange(this.themeChanged);
            options.onLoad && options.onLoad.call(this, query);
          }
        },
        onUnload() {
          const app3 = getApp();
          if (this.themeChanged) {
            app3.unWatchThemeChange && app3.unWatchThemeChange(this.themeChanged);
            options.onUnload && options.onUnload.call(this);
          }
        }
      }));
    };
    CustomPage_default = CustomPage;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/index.wxml
var require_example = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/index.wxml"() {
    var page38 = getPage("page/weui/example/index");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-view class="page__hd page-weui-large" >
            
        <wx-view class="page__title__large" >
            \u6269\u5C55\u80FD\u529B
        </wx-view>
    
        <wx-view class="page__desc" >
            \u6269\u5C55\u7EC4\u4EF6\u662F\u5BF9\u5C0F\u7A0B\u5E8F\u5185\u7F6E\u7EC4\u4EF6\u80FD\u529B\u7684\u8865\u5145\uFF0C\u5305\u62EC\u4E00\u4E9B\u5E38\u89C1\u7684\u529F\u80FD\u7EC4\u4EF6\u3002
        </wx-view>
    
        </wx-view>
    
        <wx-view class="index-hd" >
            
        <wx-image class="index-logo" src="./images/logo_extended.png" >
            
        </wx-image>
    
        <wx-view class="index-desc" >
            
        <wx-navigator url="pages/doc-web-view/doc-web-view" class="weui-agree__link" >
            \u4EE5\u4E0B\u662F\u5BF9\u5C0F\u7A0B\u5E8F\u5185\u7F6E\u7EC4\u4EF6\u80FD\u529B\u7684\u8865\u5145\uFF0C\u5305\u62ECWeUI\u7EC4\u4EF6\u5E93\u548C\u4E00\u4E9B\u5E38\u89C1\u7684\u529F\u80FD\u7EC4\u4EF6\uFF0C\u5177\u4F53\u5C5E\u6027\u53C2\u6570\u8BE6\u89C1\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u6587\u6863
        </wx-navigator>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__hd page-weui" >
            
        <wx-view class="page__title" >
            WeUI
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__bd page-weui page__bd_spacing" >
            
        <wx-view class="kind-list" >
            
        <div v-for="item in list" >
            
        <wx-view class="kind-list__item" >
            
        <wx-view :id="item.id" :class="weui-flex kind-list__item-hd item.open ? 'kind-list__item-hd_show" bindtap="kindToggle" >
            
        <wx-view class="weui-flex__item" >
            {{item.name}}
        </wx-view>
    
        <wx-image class="kind-list__img" :src="images/icon_nav_item.id.png" >
            
        </wx-image>
    
        </wx-view>
    
        <wx-view :class="kind-list__item-bd item.open ? 'kind-list__item-bd_show" >
            
        <wx-view :class="weui-cells item.open ? 'weui-cells_show" >
            
        <div v-for="item in item.pages" v-for-item="page" >
            
        <wx-navigator :v-if="page.url" :url="page.url" class="weui-cell weui-cell_access" >
            
        <wx-view class="weui-cell__bd" >
            {{page.zh}}
        </wx-view>
    
        <wx-view class="weui-cell__ft weui-cell__ft_in-access" >
            
        </wx-view>
    
        </wx-navigator>
    
        <wx-navigator :v-else url="page/{{page}}" class="weui-cell weui-cell_access" >
            
        <wx-view class="weui-cell__bd" >
            {{page}}
        </wx-view>
    
        <wx-view class="weui-cell__ft weui-cell__ft_in-access" >
            
        </wx-view>
    
        </wx-navigator>
    
        </div>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </div>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__hd page-weui" >
            
        <wx-view class="page__title" >
            \u6269\u5C55\u7EC4\u4EF6
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__bd page-weui page__bd_spacing" >
            
        <wx-view class="kind-list" >
            
        <div v-for="item in extendedList" >
            
        <wx-view class="kind-list__item" >
            
        <wx-view :id="item.id" :class="weui-flex kind-list__item-hd item.open ? 'kind-list__item-hd_show" bindtap="kindExtenedListToggle" >
            
        <wx-view class="weui-flex__item" >
            {{item.name}}
        </wx-view>
    
        <wx-image class="kind-list__img" :src="images/icon_nav_item.id.png" >
            
        </wx-image>
    
        </wx-view>
    
        <wx-view :class="kind-list__item-bd item.open ? 'kind-list__item-bd_show" >
            
        <wx-view :class="weui-cells item.open ? 'weui-cells_show" >
            
        <div v-for="item in item.pages" v-for-item="page" >
            
        <wx-navigator :url="page/{{page}}" class="weui-cell weui-cell_access" >
            
        <wx-view class="weui-cell__bd" >
            {{page}}
        </wx-view>
    
        <wx-view class="weui-cell__ft weui-cell__ft_in-access" >
            
        </wx-view>
    
        </wx-navigator>
    
        </div>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </div>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__ft" >
            
        <wx-!-- image bindtap="themeToggle" src="images/icon_footer.png" style="width: 84px; height: 19px;" >
            
        </wx-!-->
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/index.js
var example_exports = {};
__markAsModule(example_exports);
var page3;
var init_example = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/index.js"() {
    init_CustomPage();
    require_example();
    window["__wxRoute"] = "page/weui/example/index";
    page3 = getPage("page/weui/example/index");
    page3.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "\u5C0F\u7A0B\u5E8F\u6269\u5C55\u80FD\u529B\u5C55\u793A"

}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "\u6269\u5C55\u80FD\u529B",
          path: "page/weui/example/index"
        };
      },
      data: {
        list: [
          {
            id: "form",
            name: "\u8868\u5355",
            open: false,
            pages: ["cell", "slideview", "form", "uploader"]
          },
          {
            id: "widget",
            name: "\u57FA\u7840\u7EC4\u4EF6",
            open: false,
            pages: [
              "article",
              "icons",
              "badge",
              "flex",
              "footer",
              "gallery",
              "grid",
              "loadmore",
              "loading",
              "panel",
              "preview"
            ]
          },
          {
            id: "feedback",
            name: "\u64CD\u4F5C\u53CD\u9988",
            open: false,
            pages: ["dialog", "msg", "half-screen-dialog", "actionsheet", "toptips"]
          },
          {
            id: "nav",
            name: "\u5BFC\u822A\u76F8\u5173",
            open: false,
            pages: ["navigation", "tabbar"]
          },
          {
            id: "search",
            name: "\u641C\u7D22\u76F8\u5173",
            open: false,
            pages: ["searchbar"]
          },
          {
            id: "extended",
            name: "\u6269\u5C55\u7EC4\u4EF6",
            open: false,
            pages: ["emoji", "video-swiper", "index-list", "recycle-view", "sticky", "tabs", "vtabs", "barrage", "select-text", "wxml-to-canvas"]
          },
          {
            id: "adaptive",
            name: "\u591A\u7AEF\u9002\u914D\uFF08\u9700\u5728PC\u7AEF\u4F53\u9A8C\uFF09",
            open: false,
            pages: [
              { zh: "\u5DE6\u53F3\u4F38\u7F29", url: "telescopic/telescopic" },
              { zh: "\u6362\u884C\u6392\u5217", url: "linebreak/linebreak" },
              { zh: "\u4FA7\u8FB9\u5BFC\u822A\u680F", url: "sidenavigation/sidenavigation" },
              { zh: "\u5206\u9875\u5C55\u73B0", url: "pagination/pagination" },
              { zh: "\u81EA\u7531\u5E03\u5C40", url: "freelayout/freelayout" },
              { zh: "\u5206\u5C42\u5C55\u73B0", url: "layeredpresentation/layeredpresentation" },
              { zh: "\u6A2A\u5411\u62D3\u5C55", url: "horizontalexpansion/horizontalexpansion" }
            ]
          }
        ],
        extendedList: [
          {
            id: "extended",
            name: "\u6269\u5C55\u7EC4\u4EF6",
            open: false,
            pages: ["emoji", "video-swiper", "index-list", "recycle-view", "sticky", "tabs", "vtabs", "barrage", "select-text", "wxml-to-canvas"]
          }
        ]
      },
      kindToggle: function(e) {
        const id = e.currentTarget.id, list = this.data.list;
        for (let i = 0, len = list.length; i < len; ++i) {
          if (list[i].id == id) {
            list[i].open = !list[i].open;
          } else {
            list[i].open = false;
          }
        }
        this.setData({
          list
        });
      },
      kindExtenedListToggle(e) {
        const id = e.currentTarget.id;
        const extendedList = this.data.extendedList;
        for (let i = 0, len = extendedList.length; i < len; ++i) {
          if (extendedList[i].id == id) {
            extendedList[i].open = !extendedList[i].open;
          } else {
            extenedList[i].open = false;
          }
        }
        const list = this.data.list.map((item) => ({ ...item, open: false }));
        this.setData({
          extendedList,
          list
        });
      },
      themeToggle() {
        const App2 = getApp();
        if (App2.themeChanged) {
          if (App2.globalData.theme === "light") {
            App2.themeChanged("dark");
          } else {
            App2.themeChanged("light");
          }
        }
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/cell/cell.wxml
var require_cell = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/cell/cell.wxml"() {
    var page38 = getPage("page/weui/example/cell/cell");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-view class="page__hd" >
            
        <wx-view class="page__title" >
            Cell
        </wx-view>
    
        <wx-view class="page__desc" >
            \u5217\u8868
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__bd" >
            
        <wx-mp-cells ext-class="my-cells" title="\u5E26\u8BF4\u660E\u7684\u5217\u8868\u9879" >
            
        <wx-mp-cell value="\u6807\u9898\u6587\u5B57" footer="\u8BF4\u660E\u6587\u5B57" >
            
        </wx-mp-cell>
    
        <wx-mp-cell >
            
        <wx-view >
            \u6807\u9898\u6587\u5B57\uFF08\u4F7F\u7528slot\uFF09
        </wx-view>
    
        <wx-view slot="footer" >
            \u8BF4\u660E\u6587\u5B57
        </wx-view>
    
        </wx-mp-cell>
    
        <wx-mp-slideview :show="true" :buttons="slideButtons" bindbuttontap="slideButtonTap" >
            
        <wx-mp-cell value="\u5DE6\u6ED1\u53EF\u4EE5\u5220\u9664" footer="\u8BF4\u660E\u6587\u5B57" >
            
        </wx-mp-cell>
    
        </wx-mp-slideview>
    
        </wx-mp-cells>
    
        <wx-mp-cells title="\u5E26\u56FE\u6807\u3001\u8BF4\u660E\u7684\u5217\u8868\u9879" footer="\u5E95\u90E8\u8BF4\u660E\u6587\u5B57" >
            
        <wx-mp-cell value="\u6807\u9898\u6587\u5B57" footer="\u8BF4\u660E\u6587\u5B57" >
            
        <wx-image slot="icon" :src="icon" style="margin-right: 16px;vertical-align: middle;width:20px; height: 20px;" >
            
        </wx-image>
    
        </wx-mp-cell>
    
        <wx-mp-cell value="\u6807\u9898\u6587\u5B57" footer="\u8BF4\u660E\u6587\u5B57" >
            
        <wx-image slot="icon" :src="icon" style="margin-right: 16px;vertical-align: middle;width:20px; height: 20px;" >
            
        </wx-image>
    
        </wx-mp-cell>
    
        </wx-mp-cells>
    
        <wx-mp-cells title="\u5E26\u8DF3\u8F6C\u7684\u5217\u8868\u9879" >
            
        <wx-mp-cell hover value="\u6709hover\u6548\u679C\uFF0C\u65E0\u8DF3\u8F6CURL" footer="\u8BF4\u660E\u6587\u5B57" >
            
        <wx-image slot="title" :src="icon" style="margin-right: 16px;vertical-align: middle;width:20px; height: 20px;" >
            
        </wx-image>
    
        </wx-mp-cell>
    
        <wx-mp-cell link url="./cell" value="\u6709\u8DF3\u8F6CURL" footer="\u8BF4\u660E\u6587\u5B57" >
            
        <wx-image slot="icon" :src="icon" style="margin-right: 16px;vertical-align: middle;width:20px; height: 20px;" >
            
        </wx-image>
    
        </wx-mp-cell>
    
        </wx-mp-cells>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/images/base64.js
var require_base64 = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/images/base64.js"(exports, module) {
    window["__wxRoute"] = "page/weui/example/images/base64";
    var page38 = getPage("page/weui/example/images/base64");
    page38.json = ``;
    module.exports = {
      icon20: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=",
      icon60: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg=="
    };
  }
});

// miniprogram-demo/miniprogram/page/weui/example/cell/cell.js
var cell_exports = {};
__markAsModule(cell_exports);
var page4, base64;
var init_cell = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/cell/cell.js"() {
    init_CustomPage();
    require_cell();
    window["__wxRoute"] = "page/weui/example/cell/cell";
    page4 = getPage("page/weui/example/cell/cell");
    page4.json = `{
  "usingComponents": {
    "mp-cells": "weui-miniprogram/cells/cells",
    "mp-cell": "weui-miniprogram/cell/cell",
    "mp-slideview": "weui-miniprogram/slideview/slideview"
  },
  "navigationBarTitleText": "cell"

}`;
    base64 = require_base64();
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "cell",
          path: "page/weui/example/cell/cell"
        };
      },
      onLoad: function() {
        this.setData({
          icon: base64.icon20,
          slideButtons: [{
            text: "\u666E\u901A",
            src: global.isDemo ? "/page/weui/example/cell/icon_love.svg" : "/example/cell/icon_love.svg"
          }, {
            text: "\u666E\u901A",
            extClass: "test",
            src: global.isDemo ? "/page/weui/example/cell/icon_star.svg" : "/example/cell/icon_star.svg"
          }, {
            type: "warn",
            text: "\u8B66\u793A",
            extClass: "test",
            src: global.isDemo ? "/page/weui/example/cell/icon_del.svg" : "/example/cell/icon_del.svg"
          }]
        });
      },
      slideButtonTap(e) {
        console.log("slide button tap", e.detail);
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/slideview/slideview.wxml
var require_slideview = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/slideview/slideview.wxml"() {
    var page38 = getPage("page/weui/example/slideview/slideview");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-view class="page__hd" >
            
        <wx-view class="page__title" >
            Slideview
        </wx-view>
    
        <wx-view class="page__desc" >
            \u5DE6\u6ED1\u64CD\u4F5C
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__bd" >
            
        <wx-view class="weui-cells" >
            
        <wx-mp-slideview :show="true" :buttons="slideButtons" bindbuttontap="slideButtonTap" >
            
        <wx-mp-cell value="\u5DE6\u6ED1\u53EF\u4EE5\u5220\u9664" footer="\u8BF4\u660E\u6587\u5B57" >
            
        </wx-mp-cell>
    
        </wx-mp-slideview>
    
        </wx-view>
    
        <wx-view class="weui-slidecells" >
            
        <wx-mp-slideview :buttons="slideButtons" :icon="true" bindbuttontap="slideButtonTap" >
            
        <wx-view class="weui-slidecell" >
            \u5DE6\u6ED1\u53EF\u4EE5\u5220\u9664\uFF08\u56FE\u6807Button\uFF09
        </wx-view>
    
        </wx-mp-slideview>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/slideview/slideview.js
var slideview_exports = {};
__markAsModule(slideview_exports);
var page5, base642;
var init_slideview = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/slideview/slideview.js"() {
    init_CustomPage();
    require_slideview();
    window["__wxRoute"] = "page/weui/example/slideview/slideview";
    page5 = getPage("page/weui/example/slideview/slideview");
    page5.json = `{
  "usingComponents": {
    "mp-cells": "weui-miniprogram/cells/cells",
    "mp-cell": "weui-miniprogram/cell/cell",
    "mp-slideview": "weui-miniprogram/slideview/slideview"
  },
  "navigationBarTitleText": "slider-view"

}`;
    base642 = require_base64();
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "sliderview",
          path: "page/weui/example/sliderview/sliderview"
        };
      },
      onLoad: function() {
        this.setData({
          icon: base642.icon20,
          slideButtons: [{
            text: "\u666E\u901A",
            src: global.isDemo ? "/page/weui/example/cell/icon_love.svg" : "/example/cell/icon_love.svg"
          }, {
            text: "\u666E\u901A",
            extClass: "test",
            src: global.isDemo ? "/page/weui/example/cell/icon_star.svg" : "/example/cell/icon_star.svg"
          }, {
            type: "warn",
            text: "\u8B66\u793A",
            extClass: "test",
            src: global.isDemo ? "/page/weui/example/cell/icon_del.svg" : "/example/cell/icon_del.svg"
          }]
        });
      },
      slideButtonTap(e) {
        console.log("slide button tap", e.detail);
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/form/form.wxml
var require_form3 = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/form/form.wxml"() {
    var page38 = getPage("page/weui/example/form/form");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-mp-toptips :msg="error" type="error" :show="error" >
            
        </wx-mp-toptips>
    
        <wx-mp-form-page title="\u8868\u5355\u7ED3\u6784" subtitle="\u5C55\u793A\u8868\u5355\u9875\u9762\u7684\u4FE1\u606F\u7ED3\u6784\u6837\u5F0F, \u5206\u522B\u7531\u5934\u90E8\u533A\u57DF/\u63A7\u4EF6\u533A\u57DF/\u63D0\u793A\u533A\u57DF/\u64CD\u4F5C\u533A\u57DF\u548C\u5E95\u90E8\u4FE1\u606F\u533A\u57DF\u7EC4\u6210\u3002" >
            
        <wx-mp-form id="form" :rules="rules" :models="formData" >
            
        <wx-mp-cells title="\u5355\u9009\u5217\u8868\u9879" >
            
        <wx-mp-checkbox-group prop="radio" :multi="false" bindchange="radioChange" >
            
        <wx-mp-checkbox v-for="item in radioItems" :label="item.name" :value="item.value" :checked="item.checked" >
            
        </wx-mp-checkbox>
    
        </wx-mp-checkbox-group>
    
        </wx-mp-cells>
    
        <wx-mp-cells title="\u590D\u9009\u5217\u8868\u9879" >
            
        <wx-mp-checkbox-group prop="checkbox" :multi="true" bindchange="checkboxChange" >
            
        <wx-mp-checkbox v-for="item in checkboxItems" :label="item.name" :value="item.value" :checked="item.checked" >
            
        </wx-mp-checkbox>
    
        </wx-mp-checkbox-group>
    
        </wx-mp-cells>
    
        <wx-mp-cells title="\u8868\u5355" footer="\u5E95\u90E8\u8BF4\u660E\u6587\u5B57\u5E95\u90E8\u8BF4\u660E\u6587\u5B57" >
            
        <wx-mp-cell prop="name" title="\u59D3\u540D" ext-class="" >
            
        <wx-input bindinput="formInputChange" data-field="name" class="weui-input" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D" >
            
        </wx-input>
    
        <wx-mp-cell prop="qq" title="qq" ext-class="" >
            
        <wx-input bindinput="formInputChange" data-field="qq" class="weui-input" placeholder="\u8BF7\u8F93\u5165qq" >
            
        </wx-input>
    
        <wx-mp-cell prop="mobile" title="\u624B\u673A\u53F7" ext-class="" >
            
        <wx-input bindinput="formInputChange" data-field="mobile" class="weui-input" placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7" >
            
        <wx-button slot="footer" type="default" class="weui-vcode-btn" >
            \u83B7\u53D6\u9A8C\u8BC1\u7801
        </wx-button>
    
        </wx-input>
    
        <wx-mp-cell prop="date" title="\u65E5\u671F" ext-class="" >
            
        <wx-picker data-field="date" mode="date" :value="date" start="2015-09-01" end="2017-09-01" bindchange="bindDateChange" >
            
        <wx-view class="weui-input" >
            {{date}}
        </wx-view>
    
        </wx-picker>
    
        </wx-mp-cell>
    
        <wx-mp-cell prop="vcode" title="\u9A8C\u8BC1\u7801" ext-class="" >
            
        <wx-input bindinput="formInputChange" data-field="vcode" class="weui-input" placeholder="\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801" >
            
        <wx-image slot="footer" class="weui-vcode-img" src="../images/vcode.jpg" style="width: 108px" >
            
        </wx-image>
    
        </wx-input>
    
        </wx-mp-cell>
    
        <wx-mp-cells title="\u63D0\u4EA4\u540E\u8868\u5355\u9879\u62A5\u9519" >
            
        <wx-mp-cell show-error prop="idcard" title="\u5361\u53F7" ext-class="" >
            
        <wx-input bindinput="formInputChange" data-field="idcard" class="weui-input" placeholder="\u8BF7\u8F93\u5165\u5361\u53F7" >
            
        </wx-input>
    
        </wx-mp-cell>
    
        <wx-mp-cells title="\u5F00\u5173" >
            
        <wx-mp-cell title="\u6807\u9898\u6587\u5B57" ext-class="" >
            
        <wx-switch slot="footer" >
            
        </wx-switch>
    
        </wx-mp-cell>
    
        <wx-mp-cells title="\u6587\u672C\u6846" >
            
        <wx-mp-cell title="\u6807\u9898\u6587\u5B57" ext-class="" >
            
        <wx-input class="weui-input" placeholder="\u8BF7\u8F93\u5165\u6587\u672C" >
            
        </wx-input>
    
        </wx-mp-cell>
    
        <wx-mp-cells title="\u6587\u672C\u57DF" >
            
        <wx-mp-cell :has-header="false" :has-footer="false" title="" ext-class="" >
            
        <wx-textarea class="weui-textarea" placeholder="\u8BF7\u8F93\u5165\u6587\u672C" style="height: 3.3em" >
            
        <wx-view class="weui-textarea-counter" >
            0/200
        </wx-view>
    
        </wx-textarea>
    
        </wx-mp-cell>
    
        <wx-mp-cells title="\u9009\u62E9" >
            
        <wx-mp-cell ext-class="weui-cell_select weui-cell_select-before" >
            
        <wx-view slot="title" style="width: 105px" >
            
        <wx-picker bindchange="bindCountryCodeChange" :value="countryCodeIndex" :range="countryCodes" >
            
        <wx-view class="weui-select" >
            {{countryCodes[countryCodeIndex]}}
        </wx-view>
    
        </wx-picker>
    
        </wx-view>
    
        <wx-input class="weui-input" placeholder="\u8BF7\u8F93\u5165\u53F7\u7801" >
            
        </wx-input>
    
        </wx-mp-cell>
    
        <wx-mp-cells title="\u9009\u62E9" >
            
        <wx-mp-cell :has-header="false" ext-class="weui-cell_select" >
            
        <wx-picker bindchange="bindAccountChange" :value="accountIndex" :range="accounts" >
            
        <wx-view class="weui-select" >
            {{accounts[accountIndex]}}
        </wx-view>
    
        </wx-picker>
    
        </wx-mp-cell>
    
        <wx-mp-cell ext-class="weui-cell_select weui-cell_select-after" >
            
        <wx-view slot="title" class="weui-label" >
            \u56FD\u5BB6/\u5730\u533A
        </wx-view>
    
        <wx-picker bindchange="bindCountryChange" :value="countryIndex" :range="countries" >
            
        <wx-view class="weui-select" >
            {{countries[countryIndex]}}
        </wx-view>
    
        </wx-picker>
    
        </wx-mp-cell>
    
        </wx-mp-cells>
    
        </wx-mp-cells>
    
        <wx-checkbox-group slot="tips" bindchange="bindAgreeChange" >
            
        <wx-label class="weui-agree" >
            
        <wx-checkbox class="weui-agree__checkbox-check" >
            
        <wx-text class="weui-agree__checkbox" >
            
        </wx-text>
    
        <wx-view class="weui-agree__text" >
            \u9605\u8BFB\u5E76\u540C\u610F
        <wx-navigator >
            \u300A\u76F8\u5173\u6761\u6B3E\u300B
        </wx-navigator>
    
        </wx-view>
    
        </wx-checkbox>
    
        </wx-label>
    
        <wx-view slot="button" >
            
        <wx-button class="weui-btn" type="primary" bindtap="submitForm" >
            \u786E\u5B9A
        </wx-button>
    
        </wx-view>
    
        </wx-checkbox-group>
    
        </wx-mp-cells>
    
        </wx-mp-cells>
    
        </wx-mp-cells>
    
        </wx-mp-cells>
    
        </wx-mp-cell>
    
        </wx-mp-cell>
    
        </wx-mp-cell>
    
        </wx-mp-cells>
    
        </wx-mp-form>
    
        </wx-mp-form-page>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/form/form.js
var form_exports = {};
__markAsModule(form_exports);
var page6;
var init_form = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/form/form.js"() {
    init_CustomPage();
    require_form3();
    window["__wxRoute"] = "page/weui/example/form/form";
    page6 = getPage("page/weui/example/form/form");
    page6.json = `{
  "component": true,
  "navigationBarTitleText": "form",

  "usingComponents": {
    "mp-form-page": "weui-miniprogram/form-page/form-page",
    "mp-toptips": "weui-miniprogram/toptips/toptips",
    "mp-cells": "weui-miniprogram/cells/cells",
    "mp-cell": "weui-miniprogram/cell/cell",
    "mp-checkbox": "weui-miniprogram/checkbox/checkbox",
    "mp-checkbox-group": "weui-miniprogram/checkbox-group/checkbox-group",
    "mp-form": "weui-miniprogram/form/form"
  }
}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "form",
          path: "page/weui/example/form/form"
        };
      },
      data: {
        showTopTips: false,
        radioItems: [
          { name: "cell standard", value: "0", checked: true },
          { name: "cell standard", value: "1" }
        ],
        checkboxItems: [
          { name: "standard is dealt for u.", value: "0", checked: true },
          { name: "standard is dealicient for u.", value: "1" }
        ],
        items: [
          { name: "USA", value: "\u7F8E\u56FD" },
          { name: "CHN", value: "\u4E2D\u56FD", checked: "true" },
          { name: "BRA", value: "\u5DF4\u897F" },
          { name: "JPN", value: "\u65E5\u672C" },
          { name: "ENG", value: "\u82F1\u56FD" },
          { name: "TUR", value: "\u6CD5\u56FD" }
        ],
        date: "2016-09-01",
        time: "12:01",
        countryCodes: ["+86", "+80", "+84", "+87"],
        countryCodeIndex: 0,
        countries: ["\u4E2D\u56FD", "\u7F8E\u56FD", "\u82F1\u56FD"],
        countryIndex: 0,
        accounts: ["\u5FAE\u4FE1\u53F7", "QQ", "Email"],
        accountIndex: 0,
        isAgree: false,
        formData: {},
        rules: [{
          name: "radio",
          rules: { required: false, message: "\u5355\u9009\u5217\u8868\u662F\u5FC5\u9009\u9879" }
        }, {
          name: "checkbox",
          rules: { required: true, message: "\u591A\u9009\u5217\u8868\u662F\u5FC5\u9009\u9879" }
        }, {
          name: "name",
          rules: { required: true, message: "\u8BF7\u8F93\u5165\u59D3\u540D" }
        }, {
          name: "qq",
          rules: { required: true, message: "qq\u5FC5\u586B" }
        }, {
          name: "mobile",
          rules: [{ required: true, message: "mobile\u5FC5\u586B" }, { mobile: true, message: "mobile\u683C\u5F0F\u4E0D\u5BF9" }]
        }, {
          name: "vcode",
          rules: { required: true, message: "\u9A8C\u8BC1\u7801\u5FC5\u586B" }
        }, {
          name: "idcard",
          rules: { validator: function(rule, value, param, modeels) {
            if (!value || value.length !== 18) {
              return "idcard\u683C\u5F0F\u4E0D\u6B63\u786E";
            }
          } }
        }]
      },
      radioChange: function(e) {
        console.log("radio\u53D1\u751Fchange\u4E8B\u4EF6\uFF0C\u643A\u5E26value\u503C\u4E3A\uFF1A", e.detail.value);
        var radioItems = this.data.radioItems;
        for (var i = 0, len = radioItems.length; i < len; ++i) {
          radioItems[i].checked = radioItems[i].value == e.detail.value;
        }
        this.setData({
          radioItems,
          [`formData.radio`]: e.detail.value
        });
      },
      checkboxChange: function(e) {
        console.log("checkbox\u53D1\u751Fchange\u4E8B\u4EF6\uFF0C\u643A\u5E26value\u503C\u4E3A\uFF1A", e.detail.value);
        var checkboxItems = this.data.checkboxItems, values = e.detail.value;
        for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
          checkboxItems[i].checked = false;
          for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
            if (checkboxItems[i].value == values[j]) {
              checkboxItems[i].checked = true;
              break;
            }
          }
        }
        this.setData({
          checkboxItems,
          [`formData.checkbox`]: e.detail.value
        });
      },
      bindDateChange: function(e) {
        this.setData({
          date: e.detail.value,
          [`formData.date`]: e.detail.value
        });
      },
      formInputChange(e) {
        const { field } = e.currentTarget.dataset;
        this.setData({
          [`formData.${field}`]: e.detail.value
        });
      },
      bindTimeChange: function(e) {
        this.setData({
          time: e.detail.value
        });
      },
      bindCountryCodeChange: function(e) {
        console.log("picker country code \u53D1\u751F\u9009\u62E9\u6539\u53D8\uFF0C\u643A\u5E26\u503C\u4E3A", e.detail.value);
        this.setData({
          countryCodeIndex: e.detail.value
        });
      },
      bindCountryChange: function(e) {
        console.log("picker country \u53D1\u751F\u9009\u62E9\u6539\u53D8\uFF0C\u643A\u5E26\u503C\u4E3A", e.detail.value);
        this.setData({
          countryIndex: e.detail.value
        });
      },
      bindAccountChange: function(e) {
        console.log("picker account \u53D1\u751F\u9009\u62E9\u6539\u53D8\uFF0C\u643A\u5E26\u503C\u4E3A", e.detail.value);
        this.setData({
          accountIndex: e.detail.value
        });
      },
      bindAgreeChange: function(e) {
        this.setData({
          isAgree: !!e.detail.value.length
        });
      },
      submitForm() {
        this.selectComponent("#form").validate((valid, errors) => {
          console.log("valid", valid, errors);
          if (!valid) {
            const firstError = Object.keys(errors);
            if (firstError.length) {
              this.setData({
                error: errors[firstError[0]].message
              });
            }
          } else {
            wx.showToast({
              title: "\u6821\u9A8C\u901A\u8FC7"
            });
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/uploader/uploader.wxml
var require_uploader = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/uploader/uploader.wxml"() {
    var page38 = getPage("page/weui/example/uploader/uploader");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-view class="page__hd" >
            
        <wx-view class="page__title" >
            Uploader
        </wx-view>
    
        <wx-view class="page__desc" >
            \u4E0A\u4F20\u7EC4\u4EF6
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__bd" >
            
        <wx-mp-cells >
            
        <wx-mp-cell >
            
        <wx-mp-uploader bindfail="uploadError" bindsuccess="uploadSuccess" :select="selectFile" :upload="uplaodFile" :files="files" max-count="5" title="\u56FE\u7247\u4E0A\u4F20" tips="\u56FE\u7247\u4E0A\u4F20\u63D0\u793A" >
            
        </wx-mp-uploader>
    
        </wx-mp-cell>
    
        </wx-mp-cells>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/uploader/uploader.js
var uploader_exports = {};
__markAsModule(uploader_exports);
var page7;
var init_uploader = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/uploader/uploader.js"() {
    init_CustomPage();
    require_uploader();
    window["__wxRoute"] = "page/weui/example/uploader/uploader";
    page7 = getPage("page/weui/example/uploader/uploader");
    page7.json = `{
  "usingComponents": {
    "mp-uploader": "weui-miniprogram/uploader/uploader",
    "mp-cells": "weui-miniprogram/cells/cells",
    "mp-cell": "weui-miniprogram/cell/cell"
  },
  "navigationBarTitleText": "uploader"

}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "uploader",
          path: "page/weui/example/uploader/uploader"
        };
      },
      data: {
        files: [{
          url: "http://mmbiz.qpic.cn/mmbiz_png/VUIF3v9blLsicfV8ysC76e9fZzWgy8YJ2bQO58p43Lib8ncGXmuyibLY7O3hia8sWv25KCibQb7MbJW3Q7xibNzfRN7A/0"
        }]
      },
      onLoad() {
        this.setData({
          selectFile: this.selectFile.bind(this),
          uplaodFile: this.uplaodFile.bind(this)
        });
      },
      chooseImage: function(e) {
        var that = this;
        wx.chooseImage({
          sizeType: ["original", "compressed"],
          sourceType: ["album", "camera"],
          success: function(res2) {
            that.setData({
              files: that.data.files.concat(res2.tempFilePaths)
            });
          }
        });
      },
      previewImage: function(e) {
        wx.previewImage({
          current: e.currentTarget.id,
          urls: this.data.files
        });
      },
      selectFile(files) {
        console.log("files", files);
      },
      uplaodFile(files) {
        console.log("upload files", files);
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            reject("some error");
          }, 1e3);
        });
      },
      uploadError(e) {
        console.log("upload error", e.detail);
      },
      uploadSuccess(e) {
        console.log("upload success", e.detail);
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/article/article.wxml
var require_article = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/article/article.wxml"() {
    var page38 = getPage("page/weui/example/article/article");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-view class="page__hd" >
            
        <wx-view class="page__title" >
            Article
        </wx-view>
    
        <wx-view class="page__desc" >
            \u6587\u7AE0
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__bd" >
            
        <wx-view class="weui-article" >
            
        <wx-view class="weui-article__h1" >
            \u5927\u6807\u9898
        </wx-view>
    
        <wx-view class="weui-article__section" >
            
        <wx-view class="weui-article__h2" >
            \u7AE0\u6807\u9898
        </wx-view>
    
        <wx-view class="weui-article__section" >
            
        <wx-view class="weui-article__h3" >
            1.1\u8282\u6807\u9898
        </wx-view>
    
        <wx-view class="weui-article__p" >
            Loremipsumdolorsitamet,consecteturadipisicingelit,seddoeiusmodtemporincididuntutlaboreetdoloremagnaaliqua.Utenimadminimveniam,quisnostrudexercitationullamcolaborisnisiutaliquipexeacommodoconsequat.
        </wx-view>
    
        <wx-view class="weui-article__p" >
            
        <wx-image class="weui-article__img" src="../images/pic_article.png" mode="aspectFit" style="height: 180px" >
            
        <wx-image class="weui-article__img" src="../images/pic_article.png" mode="aspectFit" style="height: 180px" >
            
        </wx-image>
    
        </wx-image>
    
        <wx-view class="weui-article__section" >
            
        <wx-view class="weui-article__h3" >
            1.2\u8282\u6807\u9898
        </wx-view>
    
        <wx-view class="weui-article__p" >
            Loremipsumdolorsitamet,consecteturadipisicingelit,seddoeiusmodtemporincididuntutlaboreetdoloremagnaaliqua.Utenimadminimveniam,cillumdoloreeufugiatnullapariatur.Excepteursintoccaecatcupidatatnonproident,suntinculpaquiofficiadeseruntmollitanimidestlaborum.
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/article/article.js
var article_exports = {};
__markAsModule(article_exports);
var page8;
var init_article = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/article/article.js"() {
    init_CustomPage();
    require_article();
    window["__wxRoute"] = "page/weui/example/article/article";
    page8 = getPage("page/weui/example/article/article");
    page8.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "article"

}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "article",
          path: "page/weui/example/article/article"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/badge/badge.wxml
var require_badge = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/badge/badge.wxml"() {
    var page38 = getPage("page/weui/example/badge/badge");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-view class="page__hd" >
            
        <wx-view class="page__title" >
            Badge
        </wx-view>
    
        <wx-view class="page__desc" >
            \u5FBD\u7AE0
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__bd" >
            
        <wx-mp-cells title="\u65B0\u6D88\u606F\u63D0\u793A\u8DDF\u6458\u8981\u4FE1\u606F\u540E\uFF0C\u7EDF\u4E00\u5728\u5217\u8868\u53F3\u4FA7" >
            
        <wx-mp-cell title="\u5355\u884C\u5217\u8868" >
            
        <wx-view slot="footer" >
            
        <wx-view style="display: inline-block;vertical-align:middle; font-size: 17px;" >
            \u8BE6\u7EC6\u4FE1\u606F
        </wx-view>
    
        <wx-mp-badge style="margin-left: 5px;margin-right: 5px;" ext-class="blue" >
            
        </wx-mp-badge>
    
        </wx-view>
    
        </wx-mp-cell>
    
        <wx-mp-cells title="\u672A\u8BFB\u6570\u7EA2\u70B9\u8DDF\u5728\u4E3B\u9898\u4FE1\u606F\u540E\uFF0C\u7EDF\u4E00\u5728\u5217\u8868\u5DE6\u4FA7" >
            
        <wx-mp-cell >
            
        <wx-view slot="title" style="position: relative;margin-right: 10px;" >
            
        <wx-image src="../images/pic_160.png" style="width: 50px; height: 50px; display: block" >
            
        <wx-mp-badge content="99+" style="position: absolute;top: -.4em;right: -.4em;" >
            
        </wx-mp-badge>
    
        <wx-view >
            \u8054\u7CFB\u4EBA\u540D\u79F0
        </wx-view>
    
        <wx-view style="font-size: 13px;color: #888888;" >
            \u6458\u8981\u4FE1\u606F
        </wx-view>
    
        </wx-image>
    
        <wx-mp-cell >
            
        <wx-view style="display: inline-block; vertical-align: middle" >
            \u5355\u884C\u5217\u8868
        </wx-view>
    
        <wx-mp-badge content="8" style="margin-left: 5px;" >
            
        </wx-mp-badge>
    
        <wx-mp-cell >
            
        <wx-view style="display: inline-block; vertical-align: middle" >
            \u5355\u884C\u5217\u8868
        </wx-view>
    
        <wx-mp-badge style="margin-left: 5px;" content="New" >
            
        </wx-mp-badge>
    
        </wx-mp-cell>
    
        </wx-mp-cell>
    
        </wx-view>
    
        </wx-mp-cell>
    
        </wx-mp-cells>
    
        </wx-mp-cells>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/badge/badge.js
var badge_exports = {};
__markAsModule(badge_exports);
var page9;
var init_badge = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/badge/badge.js"() {
    init_CustomPage();
    require_badge();
    window["__wxRoute"] = "page/weui/example/badge/badge";
    page9 = getPage("page/weui/example/badge/badge");
    page9.json = `{
  "usingComponents": {
    "mp-cells": "weui-miniprogram/cells/cells",
    "mp-cell": "weui-miniprogram/cell/cell",
    "mp-badge": "weui-miniprogram/badge/badge"
  },
  "navigationBarTitleText": "badge"

}`;
    CustomPage_default({
      onShareAppMessage() {
        console.log("\u5206\u4EAB\u6D4B\u8BD5");
        return {
          title: "badge",
          path: "page/weui/example/badge/badge"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/flex/flex.wxml
var require_flex = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/flex/flex.wxml"() {
    var page38 = getPage("page/weui/example/flex/flex");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-view class="page__hd" >
            
        <wx-view class="page__title" >
            Flex
        </wx-view>
    
        <wx-view class="page__desc" >
            Flex\u5E03\u5C40
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__bd page__bd_spacing" >
            
        <wx-view class="weui-flex" >
            
        <wx-view class="weui-flex__item" >
            
        <wx-view class="placeholder" >
            weui
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-flex" >
            
        <wx-view class="weui-flex__item" >
            
        <wx-view class="placeholder" >
            weui
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-flex__item" >
            
        <wx-view class="placeholder" >
            weui
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-flex" >
            
        <wx-view class="weui-flex__item" >
            
        <wx-view class="placeholder" >
            weui
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-flex__item" >
            
        <wx-view class="placeholder" >
            weui
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-flex__item" >
            
        <wx-view class="placeholder" >
            weui
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-flex" >
            
        <wx-view class="weui-flex__item" >
            
        <wx-view class="placeholder" >
            weui
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-flex__item" >
            
        <wx-view class="placeholder" >
            weui
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-flex__item" >
            
        <wx-view class="placeholder" >
            weui
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-flex__item" >
            
        <wx-view class="placeholder" >
            weui
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-flex" >
            
        <wx-view >
            
        <wx-view class="placeholder" >
            weui
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-flex__item" >
            
        <wx-view class="placeholder" >
            weui
        </wx-view>
    
        </wx-view>
    
        <wx-view >
            
        <wx-view class="placeholder" >
            weui
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/flex/flex.js
var flex_exports = {};
__markAsModule(flex_exports);
var page10;
var init_flex = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/flex/flex.js"() {
    init_CustomPage();
    require_flex();
    window["__wxRoute"] = "page/weui/example/flex/flex";
    page10 = getPage("page/weui/example/flex/flex");
    page10.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "flex"

}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "flex",
          path: "page/weui/example/flex/flex"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/footer/footer.wxml
var require_footer = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/footer/footer.wxml"() {
    var page38 = getPage("page/weui/example/footer/footer");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-view class="page__hd" >
            
        <wx-view class="page__title" >
            Footer
        </wx-view>
    
        <wx-view class="page__desc" >
            \u9875\u811A
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__bd page__bd_spacing" >
            
        <wx-view class="weui-footer" >
            
        <wx-view class="weui-footer__text" >
            Copyright\xA92008-2016weui.io
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-footer" >
            
        <wx-view class="weui-footer__links" >
            
        <wx-navigator url="" class="weui-footer__link" >
            \u5E95\u90E8\u94FE\u63A5
        </wx-navigator>
    
        </wx-view>
    
        <wx-view class="weui-footer__text" >
            Copyright\xA92008-2016weui.io
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-footer" >
            
        <wx-view class="weui-footer__links" >
            
        <wx-navigator url="" class="weui-footer__link" >
            \u5E95\u90E8\u94FE\u63A5
        </wx-navigator>
    
        <wx-navigator url="" class="weui-footer__link" >
            \u5E95\u90E8\u94FE\u63A5
        </wx-navigator>
    
        </wx-view>
    
        <wx-view class="weui-footer__text" >
            Copyright\xA92008-2016weui.io
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-footer weui-footer_fixed-bottom" >
            
        <wx-view class="weui-footer__links" >
            
        <wx-navigator url="" class="weui-footer__link" >
            WeUI\u9996\u9875
        </wx-navigator>
    
        </wx-view>
    
        <wx-view class="weui-footer__text" >
            Copyright\xA92008-2016weui.io
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/footer/footer.js
var footer_exports = {};
__markAsModule(footer_exports);
var page11;
var init_footer = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/footer/footer.js"() {
    init_CustomPage();
    require_footer();
    window["__wxRoute"] = "page/weui/example/footer/footer";
    page11 = getPage("page/weui/example/footer/footer");
    page11.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "footer"

}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "footer",
          path: "page/weui/example/footer/footer"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/gallery/gallery.wxml
var require_gallery = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/gallery/gallery.wxml"() {
    var page38 = getPage("page/weui/example/gallery/gallery");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-view class="page__hd" >
            
        <wx-view class="page__title" >
            Gallery
        </wx-view>
    
        <wx-view class="page__desc" >
            \u753B\u5ECA\uFF0C\u7C7B\u4F3C\u539F\u751F\u7684wx.previewImage\u7684\u5C55\u793A\u3002
        </wx-view>
    
        </wx-view>
    
        <wx-mp-gallery :show="show" bindchange="change" binddelete="delete" bindhide="hide" :img-urls="imgUrls" :delete hide-on-click="true" current="1" >
            
        </wx-mp-gallery>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/gallery/gallery.js
var gallery_exports = {};
__markAsModule(gallery_exports);
var page12;
var init_gallery = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/gallery/gallery.js"() {
    init_CustomPage();
    require_gallery();
    window["__wxRoute"] = "page/weui/example/gallery/gallery";
    page12 = getPage("page/weui/example/gallery/gallery");
    page12.json = `{
  "usingComponents": {
    "mp-gallery": "weui-miniprogram/gallery/gallery"
  },
  "navigationBarTitleText": "gallery"

}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "gallery",
          path: "page/weui/example/gallery/gallery"
        };
      },
      data: {
        imgUrls: [
          "http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg",
          "http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg",
          "http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg"
        ],
        show: true
      },
      change(e) {
        console.log("current index has changed", e.detail);
      },
      delete(e) {
        console.log("delete", e.detail);
      },
      hide() {
        console.log("component hide");
        setTimeout(() => {
          console.log("component show");
          this.setData({
            show: true
          });
        }, 1e3);
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/grid/grid.wxml
var require_grid = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/grid/grid.wxml"() {
    var page38 = getPage("page/weui/example/grid/grid");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-view class="page__hd" >
            
        <wx-view class="page__title" >
            Grid
        </wx-view>
    
        <wx-view class="page__desc" >
            \u4E5D\u5BAB\u683C
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__bd" >
            
        <wx-mp-grids :grids="grids" >
            
        </wx-mp-grids>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/grid/grid.js
var grid_exports = {};
__markAsModule(grid_exports);
var page13, GRID_DEMO_URL, app;
var init_grid = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/grid/grid.js"() {
    init_CustomPage();
    require_grid();
    window["__wxRoute"] = "page/weui/example/grid/grid";
    page13 = getPage("page/weui/example/grid/grid");
    page13.json = `{
  "usingComponents": {
    "mp-grids": "weui-miniprogram/grids/grids"
  },
  "navigationBarTitleText": "grid"

}`;
    ({ GRID_DEMO_URL } = getApp().globalData);
    app = getApp();
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "grid",
          path: "page/weui/example/grid/grid"
        };
      },
      data: {
        grids: [
          {
            imgUrl: app.globalData.iconTabbar,
            url: GRID_DEMO_URL,
            text: "Grid"
          },
          {
            imgUrl: app.globalData.iconTabbar,
            url: GRID_DEMO_URL,
            text: "Grid"
          },
          {
            imgUrl: app.globalData.iconTabbar,
            url: GRID_DEMO_URL,
            text: "Grid"
          },
          {
            imgUrl: app.globalData.iconTabbar,
            url: GRID_DEMO_URL,
            text: "Grid"
          },
          {
            imgUrl: app.globalData.iconTabbar,
            url: GRID_DEMO_URL,
            text: "Grid"
          },
          {
            imgUrl: app.globalData.iconTabbar,
            url: GRID_DEMO_URL,
            text: "Grid"
          },
          {
            imgUrl: app.globalData.iconTabbar,
            url: GRID_DEMO_URL,
            text: "Grid"
          },
          {
            imgUrl: app.globalData.iconTabbar,
            url: GRID_DEMO_URL,
            text: "Grid"
          },
          {
            imgUrl: app.globalData.iconTabbar,
            url: GRID_DEMO_URL,
            text: "Grid"
          }
        ]
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/loadmore/loadmore.wxml
var require_loadmore = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/loadmore/loadmore.wxml"() {
    var page38 = getPage("page/weui/example/loadmore/loadmore");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-view class="page__hd" >
            
        <wx-view class="page__title" >
            Loadmore
        </wx-view>
    
        <wx-view class="page__desc" >
            \u52A0\u8F7D\u66F4\u591A
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__bd" >
            
        <wx-mp-loading type="circle" :show="true" >
            
        </wx-mp-loading>
    
        <wx-view class="weui-loadmore" >
            
        <wx-view class="weui-loading" >
            
        </wx-view>
    
        <wx-view class="weui-loadmore__tips" >
            \u6B63\u5728\u52A0\u8F7D
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-loadmore weui-loadmore_line" >
            
        <wx-view class="weui-loadmore__tips weui-loadmore__tips_in-line" >
            \u6682\u65E0\u6570\u636E
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-loadmore weui-loadmore_line weui-loadmore_dot" >
            
        <wx-view class="weui-loadmore__tips weui-loadmore__tips_in-line weui-loadmore__tips_in-dot" >
            
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/loadmore/loadmore.js
var loadmore_exports = {};
__markAsModule(loadmore_exports);
var page14;
var init_loadmore = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/loadmore/loadmore.js"() {
    init_CustomPage();
    require_loadmore();
    window["__wxRoute"] = "page/weui/example/loadmore/loadmore";
    page14 = getPage("page/weui/example/loadmore/loadmore");
    page14.json = `{
  "usingComponents": {
    "mp-loading": "weui-miniprogram/loading/loading"
  },
  "navigationBarTitleText": "loadmore"
}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "loadmore",
          path: "page/weui/example/loadmore/loadmore"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/loading/loading.ts
var require_loading = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/loading/loading.ts"() {
  }
});

// miniprogram-demo/miniprogram/page/weui/example/panel/panel.wxml
var require_panel = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/panel/panel.wxml"() {
    var page38 = getPage("page/weui/example/panel/panel");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-view class="page__hd" >
            
        <wx-view class="page__title" >
            Panel
        </wx-view>
    
        <wx-view class="page__desc" >
            \u9762\u677F
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__bd" >
            
        <wx-view class="weui-panel weui-panel_access" >
            
        <wx-view class="weui-panel__hd" >
            \u56FE\u6587\u7EC4\u5408\u5217\u8868
        </wx-view>
    
        <wx-view class="weui-panel__bd" >
            
        <wx-navigator url="" class="weui-media-box weui-media-box_appmsg" hover-class="weui-cell_active" >
            
        <wx-view class="weui-media-box__hd weui-media-box__hd_in-appmsg" >
            
        <wx-image class="weui-media-box__thumb" :src="icon60" >
            
        </wx-image>
    
        <wx-view class="weui-media-box__bd weui-media-box__bd_in-appmsg" >
            
        <wx-view class="weui-media-box__title" >
            \u6807\u9898\u4E00
        </wx-view>
    
        <wx-view class="weui-media-box__desc" >
            \u7531\u5404\u79CD\u7269\u8D28\u7EC4\u6210\u7684\u5DE8\u578B\u7403\u72B6\u5929\u4F53\uFF0C\u53EB\u505A\u661F\u7403\u3002\u661F\u7403\u6709\u4E00\u5B9A\u7684\u5F62\u72B6\uFF0C\u6709\u81EA\u5DF1\u7684\u8FD0\u884C\u8F68\u9053\u3002
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-navigator url="" class="weui-media-box weui-media-box_appmsg" hover-class="weui-cell_active" >
            
        <wx-view class="weui-media-box__hd weui-media-box__hd_in-appmsg" >
            
        <wx-image class="weui-media-box__thumb" :src="icon60" >
            
        </wx-image>
    
        <wx-view class="weui-media-box__bd weui-media-box__bd_in-appmsg" >
            
        <wx-view class="weui-media-box__title" >
            \u6807\u9898\u4E8C
        </wx-view>
    
        <wx-view class="weui-media-box__desc" >
            \u7531\u5404\u79CD\u7269\u8D28\u7EC4\u6210\u7684\u5DE8\u578B\u7403\u72B6\u5929\u4F53\uFF0C\u53EB\u505A\u661F\u7403\u3002\u661F\u7403\u6709\u4E00\u5B9A\u7684\u5F62\u72B6\uFF0C\u6709\u81EA\u5DF1\u7684\u8FD0\u884C\u8F68\u9053\u3002
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-navigator>
    
        <wx-view class="weui-panel__ft" >
            
        <wx-view class="weui-cell weui-cell_access weui-cell_link" >
            
        <wx-view class="weui-cell__bd" >
            \u67E5\u770B\u66F4\u591A
        </wx-view>
    
        <wx-view class="weui-cell__ft weui-cell__ft_in-access" >
            
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-navigator>
    
        <wx-view class="weui-panel weui-panel_access" >
            
        <wx-view class="weui-panel__hd" >
            \u6587\u5B57\u7EC4\u5408\u5217\u8868
        </wx-view>
    
        <wx-view class="weui-panel__bd" >
            
        <wx-view class="weui-media-box weui-media-box_text" >
            
        <wx-view class="weui-media-box__title weui-media-box__title_in-text" >
            \u6807\u9898\u4E00
        </wx-view>
    
        <wx-view class="weui-media-box__desc" >
            \u7531\u5404\u79CD\u7269\u8D28\u7EC4\u6210\u7684\u5DE8\u578B\u7403\u72B6\u5929\u4F53\uFF0C\u53EB\u505A\u661F\u7403\u3002\u661F\u7403\u6709\u4E00\u5B9A\u7684\u5F62\u72B6\uFF0C\u6709\u81EA\u5DF1\u7684\u8FD0\u884C\u8F68\u9053\u3002
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-media-box weui-media-box_text" >
            
        <wx-view class="weui-media-box__title weui-media-box__title_in-text" >
            \u6807\u9898\u4E8C
        </wx-view>
    
        <wx-view class="weui-media-box__desc" >
            \u7531\u5404\u79CD\u7269\u8D28\u7EC4\u6210\u7684\u5DE8\u578B\u7403\u72B6\u5929\u4F53\uFF0C\u53EB\u505A\u661F\u7403\u3002\u661F\u7403\u6709\u4E00\u5B9A\u7684\u5F62\u72B6\uFF0C\u6709\u81EA\u5DF1\u7684\u8FD0\u884C\u8F68\u9053\u3002
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-panel__ft" >
            
        <wx-view class="weui-cell weui-cell_access weui-cell_link" >
            
        <wx-view class="weui-cell__bd" >
            \u67E5\u770B\u66F4\u591A
        </wx-view>
    
        <wx-view class="weui-cell__ft weui-cell__ft_in-access" >
            
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-panel" >
            
        <wx-view class="weui-panel__hd" >
            \u5C0F\u56FE\u6587\u7EC4\u5408\u5217\u8868
        </wx-view>
    
        <wx-view class="weui-panel__bd" >
            
        <wx-view class="weui-media-box weui-media-box_small-appmsg" >
            
        <wx-view class="weui-cells weui-cells_in-small-appmsg" >
            
        <wx-navigator url="" class="weui-cell weui-cell_example weui-cell_access" hover-class="weui-cell_active" >
            
        <wx-view class="weui-cell__hd" >
            
        <wx-image :src="icon20" style="width: 20px;height: 20px;margin-right: 16px;vertical-align:middle;" >
            
        </wx-image>
    
        <wx-view class="weui-cell__bd weui-cell_primary" >
            
        <wx-view >
            \u6587\u5B57\u6807\u9898
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-cell__ft weui-cell__ft_in-access" >
            
        </wx-view>
    
        </wx-view>
    
        <wx-navigator url="" class="weui-cell weui-cell_example weui-cell_access" hover-class="weui-cell_active" >
            
        <wx-view class="weui-cell__hd" >
            
        <wx-image :src="icon20" style="width: 20px;height: 20px;margin-right: 16px;vertical-align:middle;" >
            
        </wx-image>
    
        <wx-view class="weui-cell__bd weui-cell_primary" >
            
        <wx-view >
            \u6587\u5B57\u6807\u9898
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-cell__ft weui-cell__ft_in-access" >
            
        </wx-view>
    
        </wx-view>
    
        </wx-navigator>
    
        </wx-navigator>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-panel" >
            
        <wx-view class="weui-panel__hd" >
            \u6587\u5B57\u5217\u8868\u9644\u6765\u6E90
        </wx-view>
    
        <wx-view class="weui-panel__bd" >
            
        <wx-view class="weui-media-box weui-media-box_text" >
            
        <wx-view class="weui-media-box__title weui-media-box__title_in-text" >
            \u6807\u9898\u4E00
        </wx-view>
    
        <wx-view class="weui-media-box__desc" >
            \u7531\u5404\u79CD\u7269\u8D28\u7EC4\u6210\u7684\u5DE8\u578B\u7403\u72B6\u5929\u4F53\uFF0C\u53EB\u505A\u661F\u7403\u3002\u661F\u7403\u6709\u4E00\u5B9A\u7684\u5F62\u72B6\uFF0C\u6709\u81EA\u5DF1\u7684\u8FD0\u884C\u8F68\u9053\u3002
        </wx-view>
    
        <wx-view class="weui-media-box__info" >
            
        <wx-view class="weui-media-box__info__meta" >
            \u6587\u5B57\u6765\u6E90
        </wx-view>
    
        <wx-view class="weui-media-box__info__meta" >
            \u65F6\u95F4
        </wx-view>
    
        <wx-view class="weui-media-box__info__meta weui-media-box__info__meta_extra" >
            \u5176\u5B83\u4FE1\u606F
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/panel/panel.js
var panel_exports = {};
__markAsModule(panel_exports);
var page15, base643;
var init_panel = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/panel/panel.js"() {
    init_CustomPage();
    require_panel();
    window["__wxRoute"] = "page/weui/example/panel/panel";
    page15 = getPage("page/weui/example/panel/panel");
    page15.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "panel"

}`;
    base643 = require_base64();
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "panel",
          path: "page/weui/example/panel/panel"
        };
      },
      onLoad: function() {
        this.setData({
          icon20: base643.icon20,
          icon60: base643.icon60
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/preview/preview.wxml
var require_preview = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/preview/preview.wxml"() {
    var page38 = getPage("page/weui/example/preview/preview");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-view class="page__hd" >
            
        <wx-view class="page__title" >
            Preview
        </wx-view>
    
        <wx-view class="page__desc" >
            \u8868\u5355\u9884\u89C8
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__bd" >
            
        <wx-view class="weui-form-preview" >
            
        <wx-view class="weui-form-preview__hd" >
            
        <wx-view class="weui-form-preview__item" >
            
        <wx-view class="weui-form-preview__label" >
            \u4ED8\u6B3E\u91D1\u989D
        </wx-view>
    
        <wx-view class="weui-form-preview__value_in-hd" >
            \xA52400.00
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-form-preview__bd" >
            
        <wx-view class="weui-form-preview__item" >
            
        <wx-view class="weui-form-preview__label" >
            \u5546\u54C1
        </wx-view>
    
        <wx-view class="weui-form-preview__value" >
            \u7535\u52A8\u6253\u86CB\u673A
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-form-preview__item" >
            
        <wx-view class="weui-form-preview__label" >
            \u6807\u9898\u6807\u9898
        </wx-view>
    
        <wx-view class="weui-form-preview__value" >
            \u540D\u5B57\u540D\u5B57\u540D\u5B57
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-form-preview__item" >
            
        <wx-view class="weui-form-preview__label" >
            \u6807\u9898\u6807\u9898
        </wx-view>
    
        <wx-view class="weui-form-preview__value" >
            \u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-form-preview__ft" >
            
        <wx-navigator url="" class="weui-form-preview__btn weui-form-preview__btn_primary" hover-class="weui-form-preview__btn_active" >
            \u64CD\u4F5C
        </wx-navigator>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-form-preview" >
            
        <wx-view class="weui-form-preview__hd" >
            
        <wx-view class="weui-form-preview__label" >
            \u4ED8\u6B3E\u91D1\u989D
        </wx-view>
    
        <wx-view class="weui-form-preview__value_in-hd" >
            \xA52400.00
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-form-preview__bd" >
            
        <wx-view class="weui-form-preview__item" >
            
        <wx-view class="weui-form-preview__label" >
            \u5546\u54C1
        </wx-view>
    
        <wx-view class="weui-form-preview__value" >
            \u7535\u52A8\u6253\u86CB\u673A
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-form-preview__item" >
            
        <wx-view class="weui-form-preview__label" >
            \u6807\u9898\u6807\u9898
        </wx-view>
    
        <wx-view class="weui-form-preview__value" >
            \u540D\u5B57\u540D\u5B57\u540D\u5B57
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-form-preview__item" >
            
        <wx-view class="weui-form-preview__label" >
            \u6807\u9898\u6807\u9898
        </wx-view>
    
        <wx-view class="weui-form-preview__value" >
            \u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-form-preview__ft" >
            
        <wx-navigator class="weui-form-preview__btn weui-form-preview__btn_default" hover-class="weui-form-preview__btn_active" >
            \u8F85\u52A9\u64CD\u4F5C
        </wx-navigator>
    
        <wx-navigator class="weui-form-preview__btn weui-form-preview__btn_primary" hover-class="weui-form-preview__btn_active" >
            \u64CD\u4F5C
        </wx-navigator>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/preview/preview.js
var preview_exports = {};
__markAsModule(preview_exports);
var page16;
var init_preview = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/preview/preview.js"() {
    init_CustomPage();
    require_preview();
    window["__wxRoute"] = "page/weui/example/preview/preview";
    page16 = getPage("page/weui/example/preview/preview");
    page16.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "preview"

}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "preview",
          path: "page/weui/example/preview/preview"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/dialog/dialog.wxml
var require_dialog = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/dialog/dialog.wxml"() {
    var page38 = getPage("page/weui/example/dialog/dialog");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-view class="page__hd" >
            
        <wx-view class="page__title" >
            Dialog
        </wx-view>
    
        <wx-view class="page__desc" >
            \u5BF9\u8BDD\u6846
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__bd" >
            
        <wx-view class="weui-btn-area" >
            
        <wx-button class="weui-btn" type="default" bindtap="openConfirm" >
            \u786E\u8BA4\u53D6\u6D88\u6309\u94AE
        </wx-button>
    
        <wx-button class="weui-btn" type="default" bindtap="tapOneDialogButton" >
            \u53EA\u6709\u786E\u8BA4\u6309\u94AE
        </wx-button>
    
        </wx-view>
    
        </wx-view>
    
        <wx-mp-dialog title="test" :show="dialogShow" bindbuttontap="tapDialogButton" :buttons="buttons" >
            
        <wx-view >
            testcontent
        </wx-view>
    
        </wx-mp-dialog>
    
        <wx-mp-dialog title="test1" :show="showOneButtonDialog" bindbuttontap="tapDialogButton" :buttons="oneButton" >
            
        <wx-view >
            testcontent1
        </wx-view>
    
        </wx-mp-dialog>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/dialog/dialog.js
var dialog_exports = {};
__markAsModule(dialog_exports);
var page17;
var init_dialog = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/dialog/dialog.js"() {
    init_CustomPage();
    require_dialog();
    window["__wxRoute"] = "page/weui/example/dialog/dialog";
    page17 = getPage("page/weui/example/dialog/dialog");
    page17.json = `{
  "usingComponents": {
    "mp-dialog": "weui-miniprogram/dialog/dialog"
  },
  "navigationBarTitleText": "dialog"

}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "dialog",
          path: "page/weui/example/dialog/dialog"
        };
      },
      data: {
        dialogShow: false,
        showOneButtonDialog: false,
        buttons: [{ text: "\u53D6\u6D88" }, { text: "\u786E\u5B9A" }],
        oneButton: [{ text: "\u786E\u5B9A" }]
      },
      openConfirm: function() {
        this.setData({
          dialogShow: true
        });
      },
      tapDialogButton(e) {
        this.setData({
          dialogShow: false,
          showOneButtonDialog: false
        });
      },
      tapOneDialogButton(e) {
        this.setData({
          showOneButtonDialog: true
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/msg/msg.wxml
var require_msg = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/msg/msg.wxml"() {
    var page38 = getPage("page/weui/example/msg/msg");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-view class="page__hd" >
            
        <wx-view class="page__title" >
            Msg
        </wx-view>
    
        <wx-view class="page__desc" >
            \u63D0\u793A\u9875
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__bd" >
            
        <wx-view class="weui-btn-area" >
            
        <wx-button class="weui-btn" type="default" bindtap="openSuccess" >
            \u6210\u529F\u63D0\u793A\u9875
        </wx-button>
    
        <wx-button class="weui-btn" type="default" bindtap="openFail" >
            \u5931\u8D25\u63D0\u793A\u9875
        </wx-button>
    
        <wx-button class="weui-btn" type="default" bindtap="openText" >
            \u65E0\u56FE\u6807\u63D0\u793A\u9875
        </wx-button>
    
        <wx-button class="weui-btn" type="default" bindtap="openTextPrimary" >
            \u65E0\u56FE\u6807\u63D0\u793A\u9875
        </wx-button>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/msg/msg.js
var msg_exports = {};
__markAsModule(msg_exports);
var page18;
var init_msg = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/msg/msg.js"() {
    init_CustomPage();
    require_msg();
    window["__wxRoute"] = "page/weui/example/msg/msg";
    page18 = getPage("page/weui/example/msg/msg");
    page18.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "msg"

}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "msg",
          path: "page/weui/example/msg/msg"
        };
      },
      openSuccess: function() {
        wx.navigateTo({
          url: "msg_success"
        });
      },
      openText: function() {
        wx.navigateTo({
          url: "msg_text"
        });
      },
      openTextPrimary: function() {
        wx.navigateTo({
          url: "msg_text_primary"
        });
      },
      openFail: function() {
        wx.navigateTo({
          url: "msg_fail"
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/msg/msg_text.wxml
var require_msg_text = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/msg/msg_text.wxml"() {
    var page38 = getPage("page/weui/example/msg/msg_text");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-mp-msg title="\u64CD\u4F5C\u63D0\u793A\u7684text" >
            
        <wx-view slot="desc" >
            \u5185\u5BB9\u8BE6\u60C5\uFF0C\u53EF\u6839\u636E\u5B9E\u9645\u9700\u8981\u5B89\u6392\uFF0C\u5982\u679C\u6362\u884C\u5219\u4E0D\u8D85\u8FC7\u89C4\u5B9A\u957F\u5EA6\uFF0C\u5C45\u4E2D\u5C55\u73B0
        <wx-navigator url="" class="weui-msg__link" >
            \u6587\u5B57\u94FE\u63A5
        </wx-navigator>
    
        </wx-view>
    
        <wx-view slot="extend" >
            
        <wx-view >
            1.\u8BF4\u660E1
        </wx-view>
    
        <wx-view >
            2.\u8BF4\u660E2
        </wx-view>
    
        </wx-view>
    
        <wx-view slot="handle" >
            
        <wx-button class="weui-btn" type="default" >
            \u8F85\u52A9\u64CD\u4F5C
        </wx-button>
    
        </wx-view>
    
        <wx-view slot="footer" >
            
        <wx-view class="weui-footer__links" >
            
        <wx-navigator url="" class="weui-footer__link" >
            \u5E95\u90E8\u94FE\u63A5\u6587\u672C
        </wx-navigator>
    
        </wx-view>
    
        <wx-view class="weui-footer__text" >
            Copyright\xA92008-2016weui.io
        </wx-view>
    
        </wx-view>
    
        </wx-mp-msg>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/msg/msg_text.js
var msg_text_exports = {};
__markAsModule(msg_text_exports);
var page19;
var init_msg_text = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/msg/msg_text.js"() {
    init_CustomPage();
    require_msg_text();
    window["__wxRoute"] = "page/weui/example/msg/msg_text";
    page19 = getPage("page/weui/example/msg/msg_text");
    page19.json = `{
  "usingComponents": {
    "mp-msg": "weui-miniprogram/msg/msg"
  }
}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "msg_text",
          path: "page/weui/example/msg_text/msg_text"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/msg/msg_text_primary.wxml
var require_msg_text_primary = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/msg/msg_text_primary.wxml"() {
    var page38 = getPage("page/weui/example/msg/msg_text_primary");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-mp-msg title="\u64CD\u4F5C\u63D0\u793Aprimary text" >
            
        <wx-view slot="desc" >
            \u5185\u5BB9\u8BE6\u60C5\uFF0C\u53EF\u6839\u636E\u5B9E\u9645\u9700\u8981\u5B89\u6392\uFF0C\u5982\u679C\u6362\u884C\u5219\u4E0D\u8D85\u8FC7\u89C4\u5B9A\u957F\u5EA6\uFF0C\u5C45\u4E2D\u5C55\u73B0
        <wx-navigator url="" class="weui-msg__link" >
            \u6587\u5B57\u94FE\u63A5
        </wx-navigator>
    
        </wx-view>
    
        <wx-view slot="extend" >
            
        <wx-view >
            1.\u8BF4\u660E1
        </wx-view>
    
        <wx-view >
            2.\u8BF4\u660E2
        </wx-view>
    
        </wx-view>
    
        <wx-view slot="handle" >
            
        <wx-button class="weui-btn" type="primary" >
            \u4E3B\u8981\u64CD\u4F5C
        </wx-button>
    
        </wx-view>
    
        <wx-view slot="footer" >
            
        <wx-view class="weui-footer__links" >
            
        <wx-navigator url="" class="weui-footer__link" >
            \u5E95\u90E8\u94FE\u63A5\u6587\u672C
        </wx-navigator>
    
        </wx-view>
    
        <wx-view class="weui-footer__text" >
            Copyright\xA92008-2016weui.io
        </wx-view>
    
        </wx-view>
    
        </wx-mp-msg>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/msg/msg_text_primary.js
var msg_text_primary_exports = {};
__markAsModule(msg_text_primary_exports);
var page20;
var init_msg_text_primary = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/msg/msg_text_primary.js"() {
    init_CustomPage();
    require_msg_text_primary();
    window["__wxRoute"] = "page/weui/example/msg/msg_text_primary";
    page20 = getPage("page/weui/example/msg/msg_text_primary");
    page20.json = `{
  "usingComponents": {
    "mp-msg": "weui-miniprogram/msg/msg"
  }
}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "msg_text_primary",
          path: "page/weui/example/msg_text_primary/msg_text_primary"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/msg/msg_success.wxml
var require_msg_success = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/msg/msg_success.wxml"() {
    var page38 = getPage("page/weui/example/msg/msg_success");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-mp-msg type="success" title="\u64CD\u4F5C\u6210\u529F" >
            
        <wx-view slot="desc" >
            \u5185\u5BB9\u8BE6\u60C5\uFF0C\u53EF\u6839\u636E\u5B9E\u9645\u9700\u8981\u5B89\u6392\uFF0C\u5982\u679C\u6362\u884C\u5219\u4E0D\u8D85\u8FC7\u89C4\u5B9A\u957F\u5EA6\uFF0C\u5C45\u4E2D\u5C55\u73B0
        <wx-navigator url="" class="weui-msg__link" >
            \u6587\u5B57\u94FE\u63A5
        </wx-navigator>
    
        </wx-view>
    
        <wx-view slot="extend" >
            
        <wx-view >
            1.\u8BF4\u660E1
        </wx-view>
    
        <wx-view >
            2.\u8BF4\u660E2
        </wx-view>
    
        </wx-view>
    
        <wx-view slot="handle" >
            
        <wx-button class="weui-btn" type="primary" >
            \u4E3B\u8981\u64CD\u4F5C
        </wx-button>
    
        <wx-button class="weui-btn" type="default" >
            \u8F85\u52A9\u64CD\u4F5C
        </wx-button>
    
        </wx-view>
    
        <wx-view slot="footer" >
            
        <wx-view class="weui-footer__links" >
            
        <wx-navigator url="" class="weui-footer__link" >
            \u5E95\u90E8\u94FE\u63A5\u6587\u672C
        </wx-navigator>
    
        </wx-view>
    
        <wx-view class="weui-footer__text" >
            Copyright\xA92008-2016weui.io
        </wx-view>
    
        </wx-view>
    
        </wx-mp-msg>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/msg/msg_success.js
var msg_success_exports = {};
__markAsModule(msg_success_exports);
var page21;
var init_msg_success = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/msg/msg_success.js"() {
    init_CustomPage();
    require_msg_success();
    window["__wxRoute"] = "page/weui/example/msg/msg_success";
    page21 = getPage("page/weui/example/msg/msg_success");
    page21.json = `{
  "usingComponents": {
    "mp-msg": "weui-miniprogram/msg/msg"
  }
}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "msg_success",
          path: "page/weui/example/msg_success"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/msg/msg_fail.wxml
var require_msg_fail = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/msg/msg_fail.wxml"() {
    var page38 = getPage("page/weui/example/msg/msg_fail");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-mp-msg type="warn" title="\u64CD\u4F5C\u5931\u8D25" >
            
        <wx-view slot="desc" >
            \u5185\u5BB9\u8BE6\u60C5\uFF0C\u53EF\u6839\u636E\u5B9E\u9645\u9700\u8981\u5B89\u6392\uFF0C\u5982\u679C\u6362\u884C\u5219\u4E0D\u8D85\u8FC7\u89C4\u5B9A\u957F\u5EA6\uFF0C\u5C45\u4E2D\u5C55\u73B0
        <wx-navigator url="" class="weui-msg__link" >
            \u6587\u5B57\u94FE\u63A5
        </wx-navigator>
    
        </wx-view>
    
        <wx-view slot="extend" >
            
        <wx-view >
            1.\u8BF4\u660E1
        </wx-view>
    
        <wx-view >
            2.\u8BF4\u660E2
        </wx-view>
    
        </wx-view>
    
        <wx-view slot="handle" >
            
        <wx-button class="weui-btn" type="default" >
            \u8F85\u52A9\u64CD\u4F5C
        </wx-button>
    
        </wx-view>
    
        <wx-view slot="footer" >
            
        <wx-view class="weui-footer__links" >
            
        <wx-navigator url="" class="weui-footer__link" >
            \u5E95\u90E8\u94FE\u63A5\u6587\u672C
        </wx-navigator>
    
        </wx-view>
    
        <wx-view class="weui-footer__text" >
            Copyright\xA92008-2016weui.io
        </wx-view>
    
        </wx-view>
    
        </wx-mp-msg>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/msg/msg_fail.js
var msg_fail_exports = {};
__markAsModule(msg_fail_exports);
var page22;
var init_msg_fail = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/msg/msg_fail.js"() {
    init_CustomPage();
    require_msg_fail();
    window["__wxRoute"] = "page/weui/example/msg/msg_fail";
    page22 = getPage("page/weui/example/msg/msg_fail");
    page22.json = `{
  "usingComponents": {
    "mp-msg": "weui-miniprogram/msg/msg"
  }
}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "msg_fail",
          path: "page/weui/example/msg_fail/msg_fail"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/navbar/navbar.wxml
var require_navbar = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/navbar/navbar.wxml"() {
    var page38 = getPage("page/weui/example/navbar/navbar");
    page38.template = `
        <wx-view class="page" >
            
        <wx-view class="page__bd" >
            
        <wx-view class="weui-tab" >
            
        <wx-view class="weui-navbar" >
            
        <div v-for="item in tabs" >
            
        <wx-view :id="index" :class="weui-navbar__item activeIndex" bindtap="tabClick" >
            
        <wx-view class="weui-navbar__title" >
            {{item}}
        </wx-view>
    
        </wx-view>
    
        </div>
    
        </wx-view>
    
        <wx-view class="weui-tab__panel" >
            
        <wx-view class="weui-tab__content" :hidden="activeIndex " >
            \u9009\u9879\u4E00\u7684\u5185\u5BB9
        </wx-view>
    
        <wx-view class="weui-tab__content" :hidden="activeIndex " >
            \u9009\u9879\u4E8C\u7684\u5185\u5BB9
        </wx-view>
    
        <wx-view class="weui-tab__content" :hidden="activeIndex " >
            \u9009\u9879\u4E09\u7684\u5185\u5BB9
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/navbar/navbar.js
var require_navbar2 = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/navbar/navbar.js"() {
    require_navbar();
    window["__wxRoute"] = "page/weui/example/navbar/navbar";
    var page38 = getPage("page/weui/example/navbar/navbar");
    page38.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "navbar"

}`;
    var sliderWidth = 96;
    Page({
      onShareAppMessage() {
        return {
          title: "navbar",
          path: "page/weui/example/navbar/navbar"
        };
      },
      data: {
        tabs: ["\u9009\u9879\u4E00", "\u9009\u9879\u4E8C", "\u9009\u9879\u4E09"],
        activeIndex: 1,
        sliderOffset: 0,
        sliderLeft: 0
      },
      onLoad: function() {
        var that = this;
        wx.getSystemInfo({
          success: function(res2) {
            that.setData({
              sliderLeft: (res2.windowWidth / that.data.tabs.length - sliderWidth) / 2,
              sliderOffset: res2.windowWidth / that.data.tabs.length * that.data.activeIndex
            });
          }
        });
      },
      tabClick: function(e) {
        this.setData({
          sliderOffset: e.currentTarget.offsetLeft,
          activeIndex: e.currentTarget.id
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/navigation/navigation.ts
var require_navigation = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/navigation/navigation.ts"() {
    Page({});
  }
});

// miniprogram-demo/miniprogram/page/weui/example/tabbar/tabbar.wxml
var require_tabbar = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/tabbar/tabbar.wxml"() {
    var page38 = getPage("page/weui/example/tabbar/tabbar");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-view class="page__hd" >
            
        <wx-view class="page__title" >
            Tabbar
        </wx-view>
    
        <wx-view class="page__desc" >
            \u7C7B\u4F3C\u5C0F\u7A0B\u5E8F\u539F\u751Ftabbar\u7684\u7EC4\u4EF6\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49tabbar
        </wx-view>
    
        </wx-view>
    
        <wx-mp-tabbar style="position:fixed;bottom:0;width:100%;left:0;right:0;" :list="list" bindchange="tabChange" >
            
        </wx-mp-tabbar>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/tabbar/tabbar.js
var tabbar_exports = {};
__markAsModule(tabbar_exports);
var page23, app2;
var init_tabbar = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/tabbar/tabbar.js"() {
    init_CustomPage();
    require_tabbar();
    window["__wxRoute"] = "page/weui/example/tabbar/tabbar";
    page23 = getPage("page/weui/example/tabbar/tabbar");
    page23.json = `{
  "usingComponents": {
    "mp-tabbar": "weui-miniprogram/tabbar/tabbar"
  },
  "navigationBarTitleText": "tabbar"

}`;
    app2 = getApp();
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "tabbar",
          path: "page/weui/example/tabbar/tabbar"
        };
      },
      data: {
        list: [
          {
            text: "\u5FAE\u4FE1",
            iconPath: app2.globalData.iconTabbar,
            selectedIconPath: app2.globalData.iconTabbar,
            badge: "8"
          },
          {
            text: "\u901A\u8BAF\u5F55",
            iconPath: app2.globalData.iconTabbar,
            selectedIconPath: app2.globalData.iconTabbar
          },
          {
            text: "\u53D1\u73B0",
            iconPath: app2.globalData.iconTabbar,
            selectedIconPath: app2.globalData.iconTabbar,
            dot: true
          },
          {
            text: "\u6211",
            iconPath: app2.globalData.iconTabbar,
            selectedIconPath: app2.globalData.iconTabbar
          }
        ]
      },
      tabChange(e) {
        console.log("tab change", e);
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/icons/icons.wxml
var require_icons = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/icons/icons.wxml"() {
    var page38 = getPage("page/weui/example/icons/icons");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-view class="page__hd" >
            
        <wx-view class="page__title" >
            Icons
        </wx-view>
    
        <wx-view class="page__desc" >
            \u56FE\u6807
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__bd" >
            
        <wx-view class="icon-box" >
            
        <wx-view class="icon-box__title" >
            \u63CF\u8FB9\u578B
        </wx-view>
    
        <wx-view class="weui-grids" >
            
        <div v-for="item in iconList" >
            
        <wx-navigator url="" class="weui-grid" >
            
        <wx-mp-icon :icon="item.icon" :color="item.color" :size="item.size" >
            
        </wx-mp-icon>
    
        <wx-view class="weui-grid__label" >
            {{item.icon}}
        </wx-view>
    
        </wx-navigator>
    
        </div>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="icon-box" >
            
        <wx-view class="icon-box__title" >
            \u586B\u5145\u578B
        </wx-view>
    
        <wx-view class="weui-grids" >
            
        <div v-for="item in iconList" >
            
        <wx-navigator url="" class="weui-grid" >
            
        <wx-mp-icon type="filled" :icon="item.icon" :color="item.color" :size="item.size" >
            
        </wx-mp-icon>
    
        <wx-view class="weui-grid__label" >
            {{item.icon}}
        </wx-view>
    
        </wx-navigator>
    
        </div>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/icons/icons.js
var icons_exports = {};
__markAsModule(icons_exports);
var page24, colorLight, colorDark;
var init_icons = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/icons/icons.js"() {
    init_CustomPage();
    require_icons();
    window["__wxRoute"] = "page/weui/example/icons/icons";
    page24 = getPage("page/weui/example/icons/icons");
    page24.json = `{
  "usingComponents": {
    "mp-icon": "weui-miniprogram/icon/icon"
  },
  "navigationBarTitleText": "icons"

}`;
    colorLight = "rgba(0, 0, 0, .9)";
    colorDark = "rgba(255, 255, 255, .8)";
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "icons",
          path: "page/weui/example/icons/icons"
        };
      },
      data: {
        iconList: [
          {
            icon: "add-friends",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "add",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "add2",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "album",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "arrow",
            color: colorLight,
            size: 12,
            name: ""
          },
          {
            icon: "at",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "back",
            color: colorLight,
            size: 12,
            name: ""
          },
          {
            icon: "back2",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "bellring-off",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "bellring-on",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "camera",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "cellphone",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "clip",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "close",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "close2",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "comment",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "contacts",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "copy",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "delete-on",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "delete",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "discover",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "display",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "done",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "done2",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "download",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "email",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "error",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "eyes-off",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "eyes-on",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "folder",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "group-detail",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "help",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "home",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "imac",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "info",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "keyboard",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "like",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "link",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "location",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "lock",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "max-window",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "me",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "mike",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "mike2",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "mobile-contacts",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "more",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "more2",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "mosaic",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "music-off",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "music",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "note",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "pad",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "pause",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "pencil",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "photo-wall",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "play",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "play2",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "previous",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "previous2",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "qr-code",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "refresh",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "report-problem",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "search",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "sending",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "setting",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "share",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "shop",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "star",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "sticker",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "tag",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "text",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "time",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "transfer-text",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "transfer2",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "translate",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "tv",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "video-call",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "voice",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "volume-down",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "volume-off",
            color: colorLight,
            size: 25,
            name: ""
          },
          {
            icon: "volume-up",
            color: colorLight,
            size: 25,
            name: ""
          }
        ]
      },
      onLoad() {
        this.setIconColor(this.data.theme);
        const app3 = getApp();
        app3.watchThemeChange && app3.watchThemeChange(this.setIconColor);
      },
      setIconColor(theme) {
        const color = theme === "dark" ? colorDark : colorLight;
        this.setData({
          iconList: this.data.iconList.map((icon) => {
            icon.color = color;
            return icon;
          })
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/form-page/form-page.wxml
var require_form_page = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/form-page/form-page.wxml"() {
    var page38 = getPage("page/weui/example/form-page/form-page");
    page38.template = `
        <wx-view class="weui-form" >
            
        <wx-view class="weui-form__text-area" >
            
        <wx-view class="weui-form__title" >
            \u8868\u5355\u6807\u9898
        </wx-view>
    
        <wx-view class="weui-form__desc" >
            \u8868\u5355\u63CF\u8FF0\u793A\u610F
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-form__control-area" >
            
        <wx-view class="weui-cells__group weui-cells__group_form" >
            
        <wx-view class="weui-cells__title" >
            \u8F93\u5165\u6846
        </wx-view>
    
        <wx-view class="weui-cells weui-cells_form" >
            
        <wx-view class="weui-cell" >
            
        <wx-view class="weui-cell__hd" >
            
        <wx-label class="weui-label" >
            QQ\u53F7
        </wx-label>
    
        </wx-view>
    
        <wx-view class="weui-cell__bd" >
            
        <wx-input class="weui-input" type="number" pattern="[0-9]*" placeholder="\u8BF7\u8F93\u5165QQ\u53F7" >
            
        </wx-input>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-form__tips-area" >
            
        <wx-label for="weuiAgree" class="weui-agree" >
            
        <wx-input id="weuiAgree" type="checkbox" class="weui-agree__checkbox" >
            
        <wx-span class="weui-agree__text" >
            \u9605\u8BFB\u5E76\u540C\u610F
        <wx-a href="javascript:void(0);" >
            \u300A\u76F8\u5173\u6761\u6B3E\u300B
        </wx-a>
    
        </wx-span>
    
        </wx-input>
    
        </wx-label>
    
        <wx-view class="weui-form__opr-area" >
            
        <wx-button type="primary" >
            \u786E\u5B9A
        </wx-button>
    
        </wx-view>
    
        <wx-view class="weui-form__tips-area" >
            
        <wx-view class="weui-form__tips" >
            \u70B9\u51FB\u4E0B\u4E00\u6B65\u5373\u8868\u793A
        <wx-navigator href="javascript:;" >
            \u540C\u610F\u7528\u6237\u534F\u8BAE
        </wx-navigator>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="weui-form__extra-area" >
            
        <wx-view class="weui-footer" >
            
        <wx-view class="weui-footer__links" >
            
        <wx-navigator href="javascript:void(0);" class="weui-footer__link" >
            \u5E95\u90E8\u94FE\u63A5\u6587\u672C
        </wx-navigator>
    
        </wx-view>
    
        <wx-view class="weui-footer__text" >
            Copyright\xA92008-2019weui.io
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/form-page/form-page.js
var require_form_page2 = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/form-page/form-page.js"() {
    require_form_page();
    window["__wxRoute"] = "page/weui/example/form-page/form-page";
    var page38 = getPage("page/weui/example/form-page/form-page");
    page38.json = `{
  "component": true,
  "usingComponents": {
    "mp-form-page": "weui-miniprogram/form-page/form-page"
  },
  "navigationBarTitleText": "form-page"

}`;
    Component({
      onShareAppMessage() {
        return {
          title: "form-age",
          path: "page/weui/example/form-age/form-age"
        };
      },
      data: {},
      methods: {}
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/half-screen-dialog/half-screen-dialog.wxml
var require_half_screen_dialog = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/half-screen-dialog/half-screen-dialog.wxml"() {
    var page38 = getPage("page/weui/example/half-screen-dialog/half-screen-dialog");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-view class="page__hd" >
            
        <wx-view class="page__title" >
            HalfScreenDialog
        </wx-view>
    
        <wx-view class="page__desc" >
            \u534A\u5C4F\u5F39\u7A97\uFF0C\u8F85\u52A9\u5B8C\u6210\u5F53\u524D\u9875\u9762\u4EFB\u52A1\u65F6\uFF1B\u63D0\u9192\u7528\u6237\u5E76\u5F15\u5BFC\u7528\u6237\u7684\u4E0B\u4E00\u6B65\u64CD\u4F5C\uFF1B\u7528\u6237\u4E3B\u52A8\u53D1\u8D77\u7684\u4EFB\u52A1\u65F6\u3002
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__bd" >
            
        <wx-view class="weui-btn-area" >
            
        <wx-button class="weui-btn" type="primary" bindtap="openTypeF" >
            \u6837\u5F0F\u4E00
        </wx-button>
    
        <wx-button class="weui-btn" type="primary" bindtap="openTypeS" >
            \u6837\u5F0F\u4E8C
        </wx-button>
    
        <wx-button class="weui-btn" type="primary" bindtap="openTypeT" >
            \u6837\u5F0F\u4E09
        </wx-button>
    
        </wx-view>
    
        <wx-mp-halfScreenDialog :show="typeF" >
            
        <wx-view slot="title" >
            \u6D4B\u8BD5\u6807\u9898A
        </wx-view>
    
        <wx-view slot="desc" >
            \u8FD9\u662F\u81EA\u5B9A\u4E49\u63CF\u8FF0\u533A
        </wx-view>
    
        <wx-view slot="footer" >
            
        <wx-button type="default" class="weui-btn" >
            \u6309\u94AEA
        </wx-button>
    
        <wx-button type="primary" class="weui-btn" >
            \u6309\u94AEB
        </wx-button>
    
        </wx-view>
    
        </wx-mp-halfScreenDialog>
    
        <wx-mp-halfScreenDialog :show="typeT" :closabled="false" >
            
        <wx-view slot="title" >
            \u6D4B\u8BD5\u6807\u9898A
        </wx-view>
    
        <wx-view slot="desc" >
            \u8FD9\u662F\u81EA\u5B9A\u4E49\u63CF\u8FF0\u533A
        </wx-view>
    
        <wx-view slot="footer" >
            
        <wx-button type="default" class="weui-btn" >
            \u6309\u94AEA
        </wx-button>
    
        <wx-button type="primary" class="weui-btn" >
            \u6309\u94AEB
        </wx-button>
    
        </wx-view>
    
        </wx-mp-halfScreenDialog>
    
        <wx-mp-halfScreenDialog bindbuttontap="buttontap" :show="typeS" :maskClosable="false" title="\u6D4B\u8BD5\u6807\u9898B" subTitle="\u6D4B\u8BD5\u6807\u9898B\u7684\u526F\u6807\u9898" desc="\u8F85\u52A9\u63CF\u8FF0\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u5B9E\u9645\u9700\u8981\u5B89\u6392" tips="\u8F85\u52A9\u63D0\u793A\u5185\u5BB9\uFF0C\u53EF\u6839\u636E\u5B9E\u9645\u9700\u8981\u5B89\u6392" :buttons="buttons" >
            
        </wx-mp-halfScreenDialog>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/half-screen-dialog/half-screen-dialog.js
var half_screen_dialog_exports = {};
__markAsModule(half_screen_dialog_exports);
var page25;
var init_half_screen_dialog = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/half-screen-dialog/half-screen-dialog.js"() {
    init_CustomPage();
    require_half_screen_dialog();
    window["__wxRoute"] = "page/weui/example/half-screen-dialog/half-screen-dialog";
    page25 = getPage("page/weui/example/half-screen-dialog/half-screen-dialog");
    page25.json = `{
  "usingComponents": {
    "mp-halfScreenDialog": "weui-miniprogram/half-screen-dialog/half-screen-dialog"
  },
  "navigationBarTitleText": "half-screen-dialog"

}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "half-screen-dialog",
          path: "page/weui/example/half-screen-dialog/half-screen-dialog"
        };
      },
      data: {
        typeF: false,
        typeS: false,
        typeT: false,
        buttons: [
          {
            type: "default",
            className: "",
            text: "\u8F85\u52A9\u64CD\u4F5C",
            value: 0
          },
          {
            type: "primary",
            className: "",
            text: "\u4E3B\u64CD\u4F5C",
            value: 1
          }
        ]
      },
      openTypeF: function() {
        this.setData({
          typeF: true
        });
      },
      openTypeS: function() {
        this.setData({
          typeS: true
        });
      },
      openTypeT: function() {
        this.setData({
          typeT: true
        });
      },
      buttontap(e) {
        console.log(e.detail);
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/actionsheet/actionsheet.wxml
var require_actionsheet = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/actionsheet/actionsheet.wxml"() {
    var page38 = getPage("page/weui/example/actionsheet/actionsheet");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-view class="page__hd" >
            
        <wx-view class="page__title" >
            ActionSheet
        </wx-view>
    
        <wx-view class="page__desc" >
            \u5F39\u51FA\u5F0F\u83DC\u5355
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__bd" >
            
        <wx-view class="weui-btn-area" >
            
        <wx-button class="weui-btn" type="default" bindtap="open" >
            \u539F\u751FActionSheet
        </wx-button>
    
        <wx-button class="weui-btn" type="default" bindtap="openDialog" >
            \u6A21\u62DFActionSheet
        </wx-button>
    
        </wx-view>
    
        </wx-view>
    
        <wx-mp-actionSheet bindactiontap="btnClick" :show="showDialog" :actions="groups" title="\u8FD9\u662F\u4E00\u4E2A\u6807\u9898\uFF0C\u53EF\u4EE5\u4E3A\u4E00\u884C\u6216\u8005\u4E24\u884C\u3002" >
            
        <wx-view :slot="'actionSlot" class="custom-action" >
            
        <wx-view class="custom-action_desc" >
            \u524D\u5F80\u56FE\u4E2D\u5305\u542B\u7684\u5C0F\u7A0B\u5E8F\uFF1A
        </wx-view>
    
        <wx-view class="custom-action_content" >
            
        <wx-mp-icon icon="qr-code" :size="20" >
            
        </wx-mp-icon>
    
        <wx-text class="custom-action_name" >
            \u5C0F\u7A0B\u5E8F\u540D\u79F0
        </wx-text>
    
        <wx-mp-icon icon="arrow" :size="12" >
            
        </wx-mp-icon>
    
        </wx-view>
    
        </wx-view>
    
        </wx-mp-actionSheet>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/actionsheet/actionsheet.js
var actionsheet_exports = {};
__markAsModule(actionsheet_exports);
var page26;
var init_actionsheet = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/actionsheet/actionsheet.js"() {
    init_CustomPage();
    require_actionsheet();
    window["__wxRoute"] = "page/weui/example/actionsheet/actionsheet";
    page26 = getPage("page/weui/example/actionsheet/actionsheet");
    page26.json = `{
  "usingComponents": {
    "mp-actionSheet": "weui-miniprogram/actionsheet/actionsheet",
    "mp-icon": "weui-miniprogram/icon/icon"
  },
  "navigationBarTitleText": "actionsheet"

}
`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "actionsheet",
          path: "page/weui/example/actionsheet/actionsheet"
        };
      },
      open: function() {
        wx.showActionSheet({
          itemList: ["A", "B", "C"],
          success: function(res2) {
            if (!res2.cancel) {
              console.log(res2.tapIndex);
            }
          }
        });
      },
      data: {
        showDialog: false,
        groups: [
          { text: "\u793A\u4F8B\u83DC\u5355", value: 1 },
          { text: "\u793A\u4F8B\u83DC\u5355", value: 2 },
          { text: "\u8D1F\u5411\u83DC\u5355", type: "warn", value: 3 }
        ]
      },
      openDialog: function() {
        this.setData({
          showDialog: true
        });
      },
      closeDialog: function() {
        this.setData({
          showDialog: false
        });
      },
      btnClick(e) {
        console.log(e);
        this.closeDialog();
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/toptips/toptips.wxml
var require_toptips = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/toptips/toptips.wxml"() {
    var page38 = getPage("page/weui/example/toptips/toptips");
    page38.template = `
        <wx-mp-toptips :msg="message" :type="type" :show="showTopTips" :delay="3000" >
            
        </wx-mp-toptips>
    
        <wx-view class="toptips-container" >
            
        <wx-view class="toptips-content" >
            
        <wx-input class="weui-input" auto-focus placeholder="\u8F93\u5165\u6587\u672C" bindinput="bindInputValue" :value="value" >
            
        <wx-button bind:tap="bindConfirmTap" class="container-button" type="primary" >
            \u786E\u8BA4
        </wx-button>
    
        </wx-input>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/toptips/toptips.js
var require_toptips2 = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/toptips/toptips.js"() {
    require_toptips();
    window["__wxRoute"] = "page/weui/example/toptips/toptips";
    var page38 = getPage("page/weui/example/toptips/toptips");
    page38.json = `{
  "usingComponents": {
    "mp-toptips": "weui-miniprogram/toptips/toptips"
  },
  "navigationBarTitleText": "toptips"


}`;
    Page({
      onShareAppMessage() {
        return {
          title: "toptips",
          path: "page/weui/example/toptips/toptips"
        };
      },
      data: {
        value: "",
        showTopTips: false,
        message: "\u8BF7\u8F93\u5165\u6587\u672C",
        type: "info"
      },
      bindInputValue(e) {
        this.setData({
          value: e.detail.value
        });
      },
      bindConfirmTap() {
        if (this.data.value) {
          this.setData({
            showTopTips: true,
            message: this.data.value,
            type: "success"
          });
        } else {
          this.setData({
            showTopTips: true,
            type: "error"
          });
        }
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/searchbar/searchbar.wxml
var require_searchbar = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/searchbar/searchbar.wxml"() {
    var page38 = getPage("page/weui/example/searchbar/searchbar");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-view class="page__hd" >
            
        <wx-view class="page__title" >
            SearchBar
        </wx-view>
    
        <wx-view class="page__desc" >
            \u641C\u7D22\u680F
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__bd" >
            
        <wx-mp-searchbar bindselectresult="selectResult" :search="search" >
            
        </wx-mp-searchbar>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/searchbar/searchbar.js
var searchbar_exports = {};
__markAsModule(searchbar_exports);
var page27;
var init_searchbar = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/searchbar/searchbar.js"() {
    init_CustomPage();
    require_searchbar();
    window["__wxRoute"] = "page/weui/example/searchbar/searchbar";
    page27 = getPage("page/weui/example/searchbar/searchbar");
    page27.json = `{
  "usingComponents": {
    "mp-searchbar": "weui-miniprogram/searchbar/searchbar"
  },
  "navigationBarTitleText": "searchbar"

}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "searchbar",
          path: "page/weui/example/searchbar/searchbar"
        };
      },
      data: {
        inputShowed: false,
        inputVal: "",
        i: 0
      },
      onLoad() {
        this.setData({
          search: this.search.bind(this)
        });
      },
      search: function(value) {
        return new Promise((resolve, reject) => {
          if (this.data.i % 2 === 0) {
            setTimeout(() => {
              resolve([{ text: "\u641C\u7D22\u7ED3\u679C", value: 1 }, { text: "\u641C\u7D22\u7ED3\u679C2", value: 2 }]);
            }, 200);
          } else {
            setTimeout(() => {
              resolve([]);
            }, 200);
          }
          this.setData({
            i: this.data.i + 1
          });
        });
      },
      selectResult: function(e) {
        console.log("select result", e.detail);
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/emoji/emoji.wxml
var require_emoji = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/emoji/emoji.wxml"() {
    var page38 = getPage("page/weui/example/emoji/emoji");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <div :v-if="canIUse" >
            
        <wx-scroll-view :scroll-y style="height: layoutHeightpx" :scroll-into-view="historyList[historyList.length - 1].id" >
            
        <div v-for="item in historyList" v-for-index="idx" v-for-item="historyItem" >
            
        <wx-view class="record" :hidden="historyItem.length" :id="historyItem.id" >
            
        <wx-view class="avator" >
            
        </wx-view>
    
        <wx-view class="comment" >
            
        <div v-for="item in historyItem.emoji" >
            
        <div :v-if="item.type" >
            {{item.content}}
        </div>
    
        <wx-view :v-if="item.type" :style="display: inline-block; width: lineHeightpx; height: {{lineHeight}}px" >
            
        <wx-view :class="item.imageClass" :style="background-image: url(emojiSource);transform-origin: 0 0; transform: scale({{lineHeight / 64}});" >
            
        </wx-view>
    
        </wx-view>
    
        </div>
    
        </wx-view>
    
        </wx-view>
    
        </div>
    
        </wx-scroll-view>
    
        <wx-view class="reply_wrp" :style="bottom: isIOS ? keyboardHeight + safeHeight : keyboardHeightpx" >
            
        <wx-view class="reply_tool" >
            
        <wx-view hover-class="active" class="reply_button replay_quick_button" >
            
        <wx-image :src="theme" mode="aspectFit" class="reply_tool_pic" >
            
        </wx-image>
    
        </wx-view>
    
        <wx-view class="reply_form_wrp" >
            
        <wx-label for="" class="reply_label" >
            
        <wx-input class="reply_input" cursor-spacing="8px" confirm-type="send" :adjust-position="false" :confirm-hold value="comment" :cursor="cursor" :focus="focus" bindblur="onBlur" bind:focus="onFocus" bindinput="onInput" bindconfirm="onConfirm" bind:keyboardheightchange="onkeyboardHeightChange" >
            
        </wx-input>
    
        </wx-label>
    
        <wx-view hover-class="active" class="reply_button replay_emotion_button" bindtap="showEmoji" >
            
        <wx-image :src="theme" mode="aspectFit" class="reply_tool_pic" >
            
        </wx-image>
    
        </wx-view>
    
        <wx-view hover-class="active" class="reply_button replay_media_button" bindtap="showFunction" >
            
        <wx-image :src="theme" mode="aspectFit" class="reply_tool_pic" >
            
        </wx-image>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="reply_panel_wrp" :style="height: emojiShow ? 300 : 200px;" :hidden="!emojiShow && !functionShow" >
            
        <wx-view :class="reply_panel emojiShow ? 'show': ''" :hidden="!emojiShow" >
            
        <wx-mp-emoji :source="emojiSource" class="mp-emoji" bindinsertemoji="insertEmoji" binddelemoji="deleteEmoji" bindsend="onsend" :backgroundColor="theme" :theme="theme" >
            
        </wx-mp-emoji>
    
        </wx-view>
    
        <wx-view :class="reply_panel functionShow ? 'show': ''" :hidden="!functionShow" >
            
        <wx-swiper :indicator-dots="true" indicator-color="#bbbbbb" indicator-active-color="#8c8c8c" >
            
        <wx-swiper-item >
            
        <wx-view class="function_list" >
            
        <wx-view class="function_item" bindtap="chooseImage" >
            
        <wx-image :src="theme" class="reply_function_pic" >
            
        </wx-image>
    
        </wx-view>
    
        </wx-view>
    
        </wx-swiper-item>
    
        </wx-swiper>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view :v-if="isIOS" :class="(emojiShow || functionShow) ? 'safearea_emojiShow" :style="position:fixed; bottom: 0px; width: 100%; height: safeHeightpx;" >
            
        </wx-view>
    
        </wx-view>
    
        <wx-view v-else style="text-align: center; padding: 100px 0" >
            \u5FAE\u4FE1\u7248\u672C\u8FC7\u4F4E\uFF0C\u6682\u4E0D\u652F\u6301\u672C\u529F\u80FD
        </wx-view>
    
        </div>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/emoji/emoji.js
var emoji_exports = {};
__markAsModule(emoji_exports);
var import_util2, page28;
var init_emoji = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/emoji/emoji.js"() {
    init_CustomPage();
    import_util2 = __toModule(require_util());
    require_emoji();
    window["__wxRoute"] = "page/weui/example/emoji/emoji";
    page28 = getPage("page/weui/example/emoji/emoji");
    page28.json = `{
  "disableScroll": true,
  "navigationBarTitleText": "emoji",
  "usingComponents": {
    "mp-emoji": "@miniprogram-component-plus/emoji"

  }
}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "emoji",
          path: "page/weui/example/emoji/emoji"
        };
      },
      data: {
        lineHeight: 24,
        functionShow: false,
        emojiShow: false,
        comment: "",
        focus: false,
        cursor: 0,
        _keyboardShow: false,
        emojiSource: "https://res.wx.qq.com/op_res/eROMsLpnNC10dC40vzF8qviz63ic7ATlbGg20lr5pYykOwHRbLZFUhgg23RtVorX",
        historyList: [],
        layoutHeight: "0px",
        safeHeight: 0,
        keyboardHeight: 0,
        isIOS: false,
        canIUse: true
      },
      onLoad() {
        const system = wx.getSystemInfoSync();
        let isIOS = system.platform === "ios";
        this.safeHeight = system.screenHeight - system.safeArea.bottom;
        const layoutHeight = wx.getSystemInfoSync().windowHeight - this.safeHeight / 2;
        this.setData({
          isIOS,
          safeHeight: this.safeHeight,
          layoutHeight
        });
        const emojiInstance = this.selectComponent(".mp-emoji");
        this.emojiNames = emojiInstance.getEmojiNames();
        this.parseEmoji = emojiInstance.parseEmoji;
      },
      onReady() {
        const { SDKVersion } = wx.getSystemInfoSync();
        if ((0, import_util2.compareVersion)(SDKVersion, "2.9.1") < 0) {
          this.setData({
            canIUse: false
          });
        }
      },
      onkeyboardHeightChange(e) {
        const { height } = e.detail;
        if (height === 0) {
          this.data._keyboardShow = false;
          this.setData({
            safeHeight: this.safeHeight,
            keyboardHeight: height
          });
        } else {
          this.data._keyboardShow = true;
          this.setData({
            safeHeight: 0,
            functionShow: false,
            emojiShow: false,
            keyboardHeight: height
          });
        }
      },
      hideAllPanel() {
        this.setData({
          functionShow: false,
          emojiShow: false
        });
      },
      showEmoji() {
        this.setData({
          functionShow: false,
          emojiShow: this.data._keyboardShow || !this.data.emojiShow
        });
      },
      showFunction() {
        this.setData({
          functionShow: this.data._keyboardShow || !this.data.functionShow,
          emojiShow: false
        });
      },
      chooseImage() {
      },
      onFocus() {
        this.data._keyboardShow = true;
        this.hideAllPanel();
      },
      onBlur(e) {
        this.data._keyboardShow = false;
        this.data.cursor = e.detail.cursor || 0;
      },
      onInput(e) {
        const value = e.detail.value;
        this.data.comment = value;
      },
      onConfirm() {
        this.onsend();
      },
      insertEmoji(evt) {
        const emotionName = evt.detail.emotionName;
        const { cursor, comment } = this.data;
        const newComment = comment.slice(0, cursor) + emotionName + comment.slice(cursor);
        this.setData({
          comment: newComment,
          cursor: cursor + emotionName.length
        });
      },
      onsend() {
        const comment = this.data.comment;
        const parsedComment = {
          emoji: this.parseEmoji(this.data.comment),
          id: `emoji_${this.data.historyList.length}`
        };
        this.setData({
          historyList: [...this.data.historyList, parsedComment],
          comment: "",
          emojiShow: false
        });
      },
      deleteEmoji() {
        const pos = this.data.cursor;
        const comment = this.data.comment;
        let result = "";
        let cursor = 0;
        let emojiLen = 6;
        let startPos = pos - emojiLen;
        if (startPos < 0) {
          startPos = 0;
          emojiLen = pos;
        }
        const str = comment.slice(startPos, pos);
        const matchs = str.match(/\[([\u4e00-\u9fa5\w]+)\]$/g);
        if (matchs) {
          const rawName = matchs[0];
          const left = emojiLen - rawName.length;
          if (this.emojiNames.indexOf(rawName) >= 0) {
            const replace = str.replace(rawName, "");
            result = comment.slice(0, startPos) + replace + comment.slice(pos);
            cursor = startPos + left;
          }
        } else {
          let endPos = pos - 1;
          if (endPos < 0)
            endPos = 0;
          const prefix = comment.slice(0, endPos);
          const suffix = comment.slice(pos);
          result = prefix + suffix;
          cursor = endPos;
        }
        this.setData({
          comment: result,
          cursor
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/video-swiper/video-swiper.wxml
var require_video_swiper = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/video-swiper/video-swiper.wxml"() {
    var page38 = getPage("page/weui/example/video-swiper/video-swiper");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            -->
        <wx-mp-video-swiper class="video-swiper" :video-list="videoList" bindplay="onPlay" bindpause="onPause" bindtimeupdate="onTimeUpdate" bindended="onEnded" binderror="onError" bindwaiting="onWaiting" bindprogress="onProgress" bindloadedmetadata="onLoadedMetaData" >
            
        </wx-mp-video-swiper>
    
        <wx-video src="" >
            
        </wx-video>
    
        <wx-!-- >
            
        </wx-!-->
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/video-swiper/video-swiper.js
var video_swiper_exports = {};
__markAsModule(video_swiper_exports);
var page29, urls;
var init_video_swiper = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/video-swiper/video-swiper.js"() {
    init_CustomPage();
    require_video_swiper();
    window["__wxRoute"] = "page/weui/example/video-swiper/video-swiper";
    page29 = getPage("page/weui/example/video-swiper/video-swiper");
    page29.json = `{
  "usingComponents": {
    "mp-video-swiper": "@miniprogram-component-plus/video-swiper"
  },
  "navigationBarTitleText": "video-swiper"

}`;
    urls = [
      "https://res.wx.qq.com/wxaliveplayer/htdocs/video14e1eea.mov",
      "https://res.wx.qq.com/wxaliveplayer/htdocs/video24e1eeb.mov",
      "https://res.wx.qq.com/wxaliveplayer/htdocs/video34e1eeb.mov",
      "https://res.wx.qq.com/wxaliveplayer/htdocs/video44e1eeb.mov",
      "https://res.wx.qq.com/wxaliveplayer/htdocs/video54e1eeb.mov"
    ];
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "video-swiper",
          path: "page/weui/example/video-swiper/video-swiper"
        };
      },
      data: {
        videoList: []
      },
      onLoad() {
        const videoList = urls.map((item, index) => {
          return {
            id: index,
            url: item,
            objectFit: "contain"
          };
        });
        this.setData({
          videoList
        });
      },
      onReady() {
      },
      onShow() {
      },
      onHide() {
      },
      onUnload() {
      },
      onPlay(e) {
      },
      onPause(e) {
      },
      onEnded(e) {
      },
      onError(e) {
      },
      onWaiting(e) {
      },
      onTimeUpdate(e) {
      },
      onProgress(e) {
      },
      onLoadedMetaData(e) {
        console.log("LoadedMetaData", e);
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/index-list/index-list.wxml
var require_index_list = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/index-list/index-list.wxml"() {
    var page38 = getPage("page/weui/example/index-list/index-list");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-mp-indexList class="city__list" :list="list" >
            
        <wx-view class="page" >
            
        <wx-view class="page__hd" >
            
        <wx-view class="page__title" >
            IndexList
        </wx-view>
    
        <wx-view class="page__desc" >
            \u7C7B\u901A\u8BAF\u5F55\u5217\u8868
        </wx-view>
    
        </wx-view>
    
        <wx-view class="page__bd" >
            
        </wx-view>
    
        </wx-view>
    
        </wx-mp-indexList>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/index-list/index-list.js
var index_list_exports = {};
__markAsModule(index_list_exports);
var page30;
var init_index_list = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/index-list/index-list.js"() {
    init_CustomPage();
    require_index_list();
    window["__wxRoute"] = "page/weui/example/index-list/index-list";
    page30 = getPage("page/weui/example/index-list/index-list");
    page30.json = `{
  "usingComponents": {
    "mp-indexList": "@miniprogram-component-plus/index-list"
  },
  "navigationBarTitleText": "index-list"

}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "index-list",
          path: "page/weui/example/index-list/index-list"
        };
      },
      onLoad(options) {
        this.getCitys();
      },
      getCitys() {
        const db = wx.cloud.database({
          env: "release-b86096"
        });
        const mapCity = db.collection("mapCity");
        const _this = this;
        mapCity.doc("6af880a55eb9574b008b78aa53a48405").get({
          success: function(re) {
            console.log(re);
            const cities = re.data.cities;
            cities.sort((c1, c2) => {
              let pinyin1 = c1.pinyin.join("");
              let pinyin2 = c2.pinyin.join("");
              return pinyin1.localeCompare(pinyin2);
            });
            const map = new Map();
            for (const city of cities) {
              const alpha = city.pinyin[0].charAt(0).toUpperCase();
              if (!map.has(alpha))
                map.set(alpha, []);
              map.get(alpha).push({ name: city.fullname });
            }
            const keys = [];
            for (const key of map.keys()) {
              keys.push(key);
            }
            keys.sort();
            const list = [];
            for (const key of keys) {
              list.push({
                alpha: key,
                subItems: map.get(key)
              });
            }
            _this.setData({ list });
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/sticky/sticky.wxml
var require_sticky = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/sticky/sticky.wxml"() {
    var page38 = getPage("page/weui/example/sticky/sticky");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-view class="demo-block" >
            
        <wx-view class="demo-title" >
            \u57FA\u7840\u7528\u6CD5
        </wx-view>
    
        <wx-view class="demo-body" >
            
        <wx-mp-sticky bindscroll="onScroll" >
            
        <wx-button size="mini" type="primary" style="margin-left: 15px; margin-top: 0;margin-bottom: 0" >
            \u57FA\u7840\u7528\u6CD5
        </wx-button>
    
        </wx-mp-sticky>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="demo-block" >
            
        <wx-view class="demo-title" >
            \u5438\u9876\u8DDD\u79BB
        </wx-view>
    
        <wx-view class="demo-body" >
            
        <wx-mp-sticky offset-top="32" >
            
        <wx-button size="mini" type="primary" style="margin-left: 115px; background-color: #1989fa;margin-top: 0; margin-bottom: 0" >
            \u5438\u9876\u8DDD\u79BB
        </wx-button>
    
        </wx-mp-sticky>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="demo-block" >
            
        <wx-view class="demo-title" >
            \u6307\u5B9A\u5BB9\u5668
        </wx-view>
    
        <wx-view class="demo-body" >
            
        <wx-view id="container" style="height: 250px; background-color: #E0E0E0;" >
            
        <wx-view style="height: 100px; background-color: #FFFF99;" >
            
        </wx-view>
    
        <wx-mp-sticky :container="container" offset-top="64" >
            
        <wx-button size="mini" type="primary" style="margin-left: 215px; background-color: #ff976a;margin-top: 0; margin-bottom: 0" >
            \u6307\u5B9A\u5BB9\u5668
        </wx-button>
    
        </wx-mp-sticky>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view style="height: 2000px" >
            
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/sticky/sticky.js
var sticky_exports = {};
__markAsModule(sticky_exports);
var page31;
var init_sticky = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/sticky/sticky.js"() {
    init_CustomPage();
    require_sticky();
    window["__wxRoute"] = "page/weui/example/sticky/sticky";
    page31 = getPage("page/weui/example/sticky/sticky");
    page31.json = `{
  "navigationBarTitleText": "sticky",
  "usingComponents": {
    "mp-sticky": "@miniprogram-component-plus/sticky"
  }
}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "sticky",
          path: "page/weui/example/sticky/sticky"
        };
      },
      data: {},
      onLoad() {
      },
      onReady() {
        this.setData({
          container: () => wx.createSelectorQuery().select("#container")
        });
      },
      onScroll(e) {
        console.log("onScroll", e);
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/tabs/tabs.wxml
var require_tabs = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/tabs/tabs.wxml"() {
    var page38 = getPage("page/weui/example/tabs/tabs");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-mp-tabs :tabs="tabs" :activeTab="activeTab" swiperClass="weui-tabs-swiper" bindtabclick="onTabClick" bindchange="onChange" activeClass="tab-bar-title__selected" >
            
        <div v-for="item in tabs" >
            
        <wx-view class="tab-content" :data-set="item" :slot="tab-content-index" bind:tap="handleClick" >
            
        <wx-image :src="item.img" mode="widthFix" >
            
        </wx-image>
    
        <wx-view class="item-title" >
            {{item.title2}}
        </wx-view>
    
        <wx-view class="item-desc" >
            {{item.desc}}
        </wx-view>
    
        </wx-view>
    
        </div>
    
        </wx-mp-tabs>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/tabs/tabs.js
var tabs_exports = {};
__markAsModule(tabs_exports);
var page32;
var init_tabs = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/tabs/tabs.js"() {
    init_CustomPage();
    require_tabs();
    window["__wxRoute"] = "page/weui/example/tabs/tabs";
    page32 = getPage("page/weui/example/tabs/tabs");
    page32.json = `{
  "disableScroll": true,

  "navigationBarTitleText": "tabs",
  "usingComponents": {
    "mp-tabs": "@miniprogram-component-plus/tabs"
  }
}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "tabs",
          path: "page/weui/example/tabs/tabs"
        };
      },
      data: {
        tabs: [],
        activeTab: 0
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
      },
      onTabClick(e) {
        const index = e.detail.index;
        this.setData({
          activeTab: index
        });
      },
      onChange(e) {
        const index = e.detail.index;
        this.setData({
          activeTab: index
        });
      },
      handleClick(e) {
        wx.navigateTo({
          url: "./webview"
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/vtabs/vtabs.wxml
var require_vtabs = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/vtabs/vtabs.wxml"() {
    var page38 = getPage("page/weui/example/vtabs/vtabs");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-mp-vtabs :vtabs="vtabs" :activeTab="activeTab" bindtabclick="onTabClick" bindchange="onChange" class="test" >
            
        <div v-for="item in vtabs" >
            
        <wx-mp-vtabs-content :tabIndex="index" >
            
        <wx-view class="vtabs-content-item" :style="margin-bottom: vtabs.length - 1" bindtap="handleClick" >
            
        <wx-image :src="item.img" mode="widthFix" >
            
        </wx-image>
    
        <wx-view class="item-title" >
            {{item.title2}}
        </wx-view>
    
        <wx-view class="item-desc" >
            {{item.desc}}
        </wx-view>
    
        </wx-view>
    
        </wx-mp-vtabs-content>
    
        </div>
    
        <wx-view style="height: 1px;width: 100%" >
            
        </wx-view>
    
        </wx-mp-vtabs>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/vtabs/vtabs.js
var vtabs_exports = {};
__markAsModule(vtabs_exports);
var page33;
var init_vtabs = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/vtabs/vtabs.js"() {
    init_CustomPage();
    require_vtabs();
    window["__wxRoute"] = "page/weui/example/vtabs/vtabs";
    page33 = getPage("page/weui/example/vtabs/vtabs");
    page33.json = `{
  "usingComponents": {
    "mp-vtabs": "@miniprogram-component-plus/vtabs",
    "mp-vtabs-content": "@miniprogram-component-plus/vtabs-content"
  },
  "navigationBarTitleText": "vtabs"

}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "vtabs",
          path: "page/weui/example/vtabs/vtabs"
        };
      },
      data: {
        vtabs: [],
        activeTab: 0
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
            desc: "\u672C\u8BFE\u7A0B\u5171\u56DB\u8282\uFF0C\u5C06\u5206\u9636\u6BB5\u4E3A\u5F00\u53D1\u8005\u5C55\u793A\u5982\u4F55\u5F00\u901A\u6D41\u91CF\u4E3B\u529F\u80FD\u3001\u5982\u4F55\u63A5\u5165\u5E7F\u544A\u7EC4\u4EF6\u3001\u4E0D\u540C\u7C7B\u578B\u5C0F\u7A0B\u5E8F\u63A5\u5165\u7684\u5EFA\u8BAE\u3002"
          },
          {
            title: "\u9AD8\u6821\u5927\u8D5B",
            title2: "2020\u4E2D\u56FD\u9AD8\u6821\u8BA1\u7B97\u673A\u5927\u8D5B",
            img: "http://mmbiz.qpic.cn/mmbiz_jpg/TcDuyasB5T3Eg34AYwjMw7xbEK2n01ekiaicPiaMInEMTkOQtuv1yke5KziaYF4MLia4IAbxlm0m5NxkibicFg4IZ92EA/0?wx_fmt=jpeg",
            desc: "\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5E94\u7528\u5F00\u53D1\u8D5B"
          }
        ];
        this.setData({ vtabs: tabs });
      },
      onTabClick(e) {
        const index = e.detail.index;
        console.log("tabClick", index);
      },
      onChange(e) {
        const index = e.detail.index;
        console.log("change", index);
      },
      handleClick() {
        wx.navigateTo({
          url: "../tabs/webview"
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/select-text/select-text.wxml
var require_select_text = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/select-text/select-text.wxml"() {
    var page38 = getPage("page/weui/example/select-text/select-text");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-view bind:tap="handleTap" >
            
        <wx-view class="demo-block" >
            
        <div v-for="item in arr" >
            
        <wx-view class="list-item" >
            
        <wx-mp-select-text :show-copy-btn placement="item.placement" :value="item.value" :data-id="index" bindcopy="onCopy" :on-document-tap="evt" >
            
        </wx-mp-select-text>
    
        </wx-view>
    
        </div>
    
        <wx-view class="list-item" >
            
        <wx-mp-select-text value="\u9ED8\u8BA4\u7684\u957F\u6309\u6548\u679C\u4E0E\u6D4F\u89C8\u5668\u4E00\u81F4" >
            
        </wx-mp-select-text>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/select-text/select-text.js
var select_text_exports = {};
__markAsModule(select_text_exports);
var page34;
var init_select_text = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/select-text/select-text.js"() {
    init_CustomPage();
    require_select_text();
    window["__wxRoute"] = "page/weui/example/select-text/select-text";
    page34 = getPage("page/weui/example/select-text/select-text");
    page34.json = `{
  "disableScroll": true,

  "navigationBarTitleText": "select-text",
  "usingComponents": {
    "mp-select-text": "@miniprogram-component-plus/select-text"
  }
}`;
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "select-text",
          path: "page/weui/example/select-text/select-text"
        };
      },
      data: {
        arr: [{
          value: "\u957F\u6309\uFF0C\u4E0A\u4FA7\u590D\u5236",
          placement: "top"
        }, {
          value: "\u957F\u6309\uFF0C\u53F3\u4FA7\u590D\u5236",
          placement: "right"
        }, {
          value: "\u957F\u6309\uFF0C\u5DE6\u4FA7\u590D\u5236",
          placement: "left"
        }, {
          value: "\u957F\u6309\uFF0C\u4E0B\u4FA7\u590D\u5236",
          placement: "bottom"
        }]
      },
      onLoad() {
      },
      onCopy(e) {
        console.log("onCopy", e);
      },
      handleTouchStart(e) {
        console.log("@@ touchstart", e);
      },
      handleTap(e) {
        console.log("@@ tap", e);
        this.setData({
          evt: e
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/barrage/barrage.wxml
var require_barrage = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/barrage/barrage.wxml"() {
    var page38 = getPage("page/weui/example/barrage/barrage");
    page38.template = `
        <wx-view class="page" :data-weui-theme="theme" >
            
        <wx-video id="myVideo" class="video" :src="src" loop controls bindfullscreenchange="fullscreenchange" >
            
        <wx-barrage class="barrage" :v-if="toggle" >
            
        </wx-barrage>
    
        </wx-video>
    
        <wx-button type="primary" bind:tap="handleOpenClick" >
            \u5F00\u542F\u5F39\u5E55
        </wx-button>
    
        <wx-button type="primary" bind:tap="handleCloseClick" >
            \u5173\u95ED\u5F39\u5E55
        </wx-button>
    
        <div :v-if="showBarrage" >
            
        <wx-input style="width: 80%;margin: 30px auto;border-bottom: 1px grey solid" bindinput="handleInput" placeholder="\u8BF7\u8F93\u5165\u5F39\u5E55\u4FE1\u606F" :value="barrageValue" >
            
        <wx-button type="primary" bind:tap="handleAddClick" >
            \u53D1\u9001\u5F39\u5E55
        </wx-button>
    
        <wx-button type="primary" bind:tap="handleTunnelShowClick" >
            \u663E\u793A\u5F39\u9053
        </wx-button>
    
        <wx-button type="primary" bind:tap="handleTunnelHideClick" >
            \u9690\u85CF\u5F39\u9053
        </wx-button>
    
        </wx-input>
    
        </div>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/barrage/utils.js
var require_utils = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/barrage/utils.js"(exports, module) {
    window["__wxRoute"] = "page/weui/example/barrage/utils";
    var page38 = getPage("page/weui/example/barrage/utils");
    page38.json = ``;
    var msgs = [
      "666666",
      "\u4FDD\u62A4",
      "\u5988\u5988\u6211\u4E0A\u7535\u89C6\u4E86\uFF01\uFF01",
      "\u6211\u8981\u4E0A\u7535\u89C6\uFF01\uFF01",
      "\u8001\u677F\u665A\u4E0A\u597D",
      "\u524D\u65B9\u9AD8\u80FD\u9884\u8B66",
      "\u4E3B\u64AD\u8FDF\u5230\u4E86~~~",
      "\u5E72\u7684\u6F02\u4EAE",
      "\u5E7F\u4E1C\u4EBA\u6C11\u53D1\u6765\u8D3A\u7535"
    ];
    var color = ["red", "rgb(0, 255, 0)", "#0000FF"];
    var getRandom = (max = 10, min = 0) => Math.floor(Math.random() * (max - min) + min);
    var mockData2 = (num, message = msgs) => {
      const data = [];
      for (let i = 0; i < num; i++) {
        const msgId = getRandom(message.length);
        const colorId = getRandom(color.length);
        data.push({
          content: message[msgId],
          color: color[colorId]
        });
      }
      return data;
    };
    module.exports = {
      mockData: mockData2
    };
  }
});

// miniprogram-demo/miniprogram/page/weui/example/barrage/barrage.js
var barrage_exports = {};
__markAsModule(barrage_exports);
var page35, mockData;
var init_barrage = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/barrage/barrage.js"() {
    init_CustomPage();
    require_barrage();
    window["__wxRoute"] = "page/weui/example/barrage/barrage";
    page35 = getPage("page/weui/example/barrage/barrage");
    page35.json = `{
  "disableScroll": true,

  "navigationBarTitleText": "barrage",
  "usingComponents": {
    "barrage": "miniprogram-barrage"
  }
}`;
    ({ mockData } = require_utils());
    CustomPage_default({
      onShareAppMessage() {
        return {
          title: "barrage",
          path: "page/weui/example/barrage/barrage"
        };
      },
      data: {
        src: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
        toggle: true,
        barrageValue: "",
        showBarrage: false
      },
      onReady() {
        this.addBarrage();
      },
      addBarrage() {
        const barrageComp = this.selectComponent(".barrage");
        this.barrage = barrageComp.getBarrageInstance({
          font: "bold 16px sans-serif",
          duration: 15,
          lineHeight: 2,
          mode: "overlap",
          padding: [10, 10, 10, 10],
          range: [0, 1],
          tunnelShow: false
        });
      },
      fullscreenchange() {
        this.setData({
          toggle: false
        });
        setTimeout(() => {
          if (this.barrage)
            this.barrage.close();
          this.setData({ toggle: true });
          this.addBarrage();
        }, 1e3);
      },
      handleOpenClick() {
        this.setData({
          showBarrage: true
        });
        this.barrage.open();
        const data = mockData(3);
        this.barrage.addData(data);
        this.timer = setInterval(() => {
          const data2 = mockData(5);
          this.barrage.addData(data2);
        }, 2e3);
      },
      handleCloseClick() {
        this.barrage.close();
        this.setData({
          showBarrage: false
        });
      },
      handleInput(e) {
        this.setData({
          barrageValue: e.detail.value
        });
      },
      handleAddClick() {
        const data = mockData(1, [this.data.barrageValue]);
        this.barrage.addData(data);
        this.setData({
          barrageValue: ""
        });
      },
      handleTunnelShowClick() {
        this.barrage.showTunnel();
      },
      handleTunnelHideClick() {
        this.barrage.hideTunnel();
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/wxml-to-canvas/wxml-to-canvas.wxml
var require_wxml_to_canvas = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/wxml-to-canvas/wxml-to-canvas.wxml"() {
    var page38 = getPage("page/weui/example/wxml-to-canvas/wxml-to-canvas");
    page38.template = `
        <wx-view class="page" >
            
        <wx-view >
            WXML
        </wx-view>
    
        <wx-scroll-view scroll-y scroll-x class="scroll-view-wxml" >
            {{wxmlTemplate}}
        </wx-scroll-view>
    
        <wx-button type="primary" bindtap="renderToCanvas" >
            \u6E32\u67D3\u5230canvas
        </wx-button>
    
        <wx-button type="primary" bindtap="extraImage" >
            \u5BFC\u51FA\u56FE\u7247
        </wx-button>
    
        <wx-view style="margin: 5px" >
            canvas
        </wx-view>
    
        <wx-view class="center" >
            
        <wx-wxml-to-canvas class="widget" height="200" width="200" >
            
        </wx-wxml-to-canvas>
    
        </wx-view>
    
        <wx-view style="margin: 5px" >
            \u56FE\u7247
        </wx-view>
    
        <wx-image :v-id="src" :src="src" :style="width: widthpx; height: {{height}}px" >
            
        </wx-image>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/wxml-to-canvas/demo.js
var require_demo = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/wxml-to-canvas/demo.js"(exports, module) {
    window["__wxRoute"] = "page/weui/example/wxml-to-canvas/demo";
    var page38 = getPage("page/weui/example/wxml-to-canvas/demo");
    page38.json = ``;
    var wxml = (url) => `<view class="container">
  <image class="img" mode="aspectFit" src="${url}"></image>
  <text class="title">
    \u5FAE\u4FE1\u5F00\u653E\u793E\u533A\u7B80\u4ECB\uFF08\u89C6\u9891\uFF09
  </text>
  <text class="desc">
    \u5FAE\u4FE1\u5F00\u653E\u793E\u533A\uFF0C\u662F\u4E00\u4E2A\u4E3A\u4F7F\u7528\u8005\u63D0\u4F9B\u4EA4\u6D41\u3001\u670D\u52A1\u7684\u5E73\u53F0\u3002
  </text>
</view>
`;
    var style = {
      img: {
        width: 200,
        height: 120
      },
      container: {
        height: 200,
        width: 200,
        flexDirection: "column"
      },
      title: {
        height: 20,
        width: 200,
        color: "#15c15f",
        margin: 4
      },
      desc: {
        fontSize: 13,
        height: 40,
        width: 200,
        color: "#4c4c4c",
        margin: 4
      }
    };
    module.exports = {
      wxml,
      style
    };
  }
});

// miniprogram-demo/miniprogram/page/weui/example/wxml-to-canvas/wxml-to-canvas.js
var require_wxml_to_canvas2 = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/wxml-to-canvas/wxml-to-canvas.js"() {
    require_wxml_to_canvas();
    window["__wxRoute"] = "page/weui/example/wxml-to-canvas/wxml-to-canvas";
    var page38 = getPage("page/weui/example/wxml-to-canvas/wxml-to-canvas");
    page38.json = `{
  "usingComponents": {
    "wxml-to-canvas": "../../../../miniprogram_npm/wxml-to-canvas"
  },
  "navigationBarTitleText": "wxml-to-canvas"

}`;
    var { wxml, style } = require_demo();
    Page({
      onShareAppMessage() {
        return {
          title: "wxml-to-canvas",
          path: "page/weui/example/wxml-to-canvas/wxml-to-canvas"
        };
      },
      data: {
        src: "",
        wxmlTemplate: wxml("your_img_url"),
        showCanvas: false
      },
      onLoad() {
        this.widget = this.selectComponent(".widget");
        wx.cloud.getTempFileURL({
          fileList: ["cloud://release-b86096.7265-release-b86096-1258211818/\u5F00\u653E\u793E\u533A.jpeg"],
          success: (res2) => {
            const url = res2.fileList[0].tempFileURL;
            console.log(url);
            this.url = url;
          },
          fail: console.error
        });
      },
      renderToCanvas() {
        console.log(wxml(this.url));
        const p1 = this.widget.renderToCanvas({ wxml: wxml(this.url), style });
        p1.then((re) => {
          console.log("container", re.layoutBox);
          this.container = re;
        });
      },
      extraImage() {
        const p2 = this.widget.canvasToTempFilePath();
        p2.then((res2) => {
          this.setData({
            src: res2.tempFilePath,
            width: this.container.layoutBox.width,
            height: this.container.layoutBox.height
          });
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/telescopic/telescopic.wxml
var require_telescopic = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/telescopic/telescopic.wxml"() {
    var page38 = getPage("page/weui/example/telescopic/telescopic");
    page38.template = `
        <wx-view class="container" >
            
        <wx-mp-row >
            
        <wx-mp-col :span="12" >
            
        <wx-view >
            
        <wx-view class="item" >
            
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        <wx-mp-col :span="12" >
            
        <wx-view >
            
        <wx-view class="item" >
            
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        </wx-mp-row>
    
        <wx-mp-row >
            
        <wx-mp-col :span="12" >
            
        <wx-view >
            
        <wx-view class="item" >
            
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        <wx-mp-col :span="12" >
            
        <wx-view >
            
        <wx-view class="item" >
            
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        </wx-mp-row>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/telescopic/telescopic.js
var require_telescopic2 = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/telescopic/telescopic.js"() {
    require_telescopic();
    window["__wxRoute"] = "page/weui/example/telescopic/telescopic";
    var page38 = getPage("page/weui/example/telescopic/telescopic");
    page38.json = `{
  "usingComponents": {
    "mp-col": "@miniprogram-component-plus/col",
    "mp-row": "@miniprogram-component-plus/row"
  },
  "navigationBarTitleText": "\u5DE6\u53F3\u4F38\u7F29"
}`;
    Page({
      data: {},
      onLoad() {
      },
      onShareAppMessage() {
        return {
          title: "\u5DE6\u53F3\u4F38\u7F29",
          path: "page/weui/example/telescopic/telescopic"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/linebreak/linebreak.wxml
var require_linebreak = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/linebreak/linebreak.wxml"() {
    var page38 = getPage("page/weui/example/linebreak/linebreak");
    page38.template = `
        <wx-view class="container" >
            
        <wx-mp-row >
            
        <wx-mp-col :xs="24" :span="4" >
            
        <wx-view >
            
        <wx-view class="item" >
            
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        <wx-mp-col :xs="24" :span="4" >
            
        <wx-view >
            
        <wx-view class="item" >
            
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        <wx-mp-col :xs="24" :span="4" >
            
        <wx-view >
            
        <wx-view class="item" >
            
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        <wx-mp-col :xs="24" :span="4" >
            
        <wx-view >
            
        <wx-view class="item" >
            
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        <wx-mp-col :xs="24" :span="4" >
            
        <wx-view >
            
        <wx-view class="item" >
            
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        <wx-mp-col :xs="24" :span="4" >
            
        <wx-view >
            
        <wx-view class="item" >
            
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        </wx-mp-row>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/linebreak/linebreak.js
var require_linebreak2 = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/linebreak/linebreak.js"() {
    require_linebreak();
    window["__wxRoute"] = "page/weui/example/linebreak/linebreak";
    var page38 = getPage("page/weui/example/linebreak/linebreak");
    page38.json = `{
  "usingComponents": {
    "mp-col": "@miniprogram-component-plus/col",
    "mp-row": "@miniprogram-component-plus/row"
  },
  "navigationBarTitleText": "\u6362\u884C\u6392\u5217"
}`;
    Page({
      data: {},
      onLoad() {
      },
      onShareAppMessage() {
        return {
          title: "\u6362\u884C\u6392\u5217",
          path: "page/weui/example/linebreak/linebreak"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/sidenavigation/sidenavigation.wxml
var require_sidenavigation = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/sidenavigation/sidenavigation.wxml"() {
    var page38 = getPage("page/weui/example/sidenavigation/sidenavigation");
    page38.template = `
        <wx-view class="container" >
            
        <wx-view :class="mobile show ? 'active" >
            
        <wx-view :class="theme" >
            
        <wx-view :class="theme" >
            
        </wx-view>
    
        <wx-view :class="theme" >
            
        </wx-view>
    
        <wx-view :class="theme" >
            
        </wx-view>
    
        <wx-view :class="theme" >
            
        </wx-view>
    
        </wx-view>
    
        <wx-view class="right" >
            
        <wx-view class="nav-bar" >
            
        <wx-image class="button" bindtap="show" src="../image/button.png" mode="aspectFill" >
            
        </wx-image>
    
        </wx-view>
    
        <wx-view class="section" bindtap="hide" >
            
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        <wx-view class="laptop" >
            
        <wx-view class="nav-bar" >
            
        </wx-view>
    
        <wx-view class="flexbox" >
            
        <wx-view class="left" >
            
        <wx-view :class="theme" >
            
        </wx-view>
    
        <wx-view :class="theme" >
            
        </wx-view>
    
        <wx-view :class="theme" >
            
        </wx-view>
    
        <wx-view :class="theme" >
            
        </wx-view>
    
        </wx-view>
    
        <wx-view class="right" >
            
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/sidenavigation/sidenavigation.js
var require_sidenavigation2 = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/sidenavigation/sidenavigation.js"() {
    require_sidenavigation();
    window["__wxRoute"] = "page/weui/example/sidenavigation/sidenavigation";
    var page38 = getPage("page/weui/example/sidenavigation/sidenavigation");
    page38.json = `{
  "usingComponents": {},
  "navigationBarTitleText": "\u4FA7\u8FB9\u5BFC\u822A\u680F"
}`;
    Page({
      data: {
        show: false,
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
      show() {
        this.setData({ show: true });
      },
      hide() {
        this.setData({ show: false });
      },
      onShareAppMessage() {
        return {
          title: "\u4FA7\u8FB9\u5BFC\u822A\u680F",
          path: "page/weui/example/sidenavigation/sidenavigation"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/pagination/pagination.wxml
var require_pagination = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/pagination/pagination.wxml"() {
    var page38 = getPage("page/weui/example/pagination/pagination");
    page38.template = `
        <wx-view class="container" >
            
        <wx-mp-row >
            
        <wx-mp-col :xs="24" :span="12" >
            
        <wx-view >
            
        <wx-view class="item item-A" >
            A
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        <wx-mp-col :xs="24" :span="12" >
            
        <wx-view >
            
        <wx-view class="item item-B" >
            B
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        </wx-mp-row>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/pagination/pagination.js
var require_pagination2 = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/pagination/pagination.js"() {
    require_pagination();
    window["__wxRoute"] = "page/weui/example/pagination/pagination";
    var page38 = getPage("page/weui/example/pagination/pagination");
    page38.json = `{
  "usingComponents": {
    "mp-col": "@miniprogram-component-plus/col",
    "mp-row": "@miniprogram-component-plus/row"
  },
  "navigationBarTitleText": "\u5206\u9875\u5C55\u73B0"
}`;
    Page({
      data: {},
      onLoad() {
      },
      onShareAppMessage() {
        return {
          title: "\u5206\u9875\u5C55\u73B0",
          path: "page/weui/example/pagination/pagination"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/freelayout/freelayout.wxml
var require_freelayout = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/freelayout/freelayout.wxml"() {
    var page38 = getPage("page/weui/example/freelayout/freelayout");
    page38.template = `
        <wx-view class="container" >
            
        <wx-view class="flexbox" >
            
        <wx-mp-row >
            
        <wx-mp-col :xs="24" :span="0" >
            
        <wx-view >
            
        <wx-view class="item item-A" >
            A
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        <wx-mp-col :xs="24" :span="0" >
            
        <wx-view >
            
        <wx-view class="item item-B" >
            B
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        <wx-mp-col :xs="24" :span="0" >
            
        <wx-view >
            
        <wx-view :class="theme" >
            C
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        </wx-mp-row>
    
        <wx-!-- >
            
        <wx-mp-row >
            
        <wx-mp-col :xs="0" :span="16" >
            
        <wx-mp-row >
            
        <wx-mp-col >
            
        <wx-view >
            
        <wx-view class="item item-A" >
            A
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        <wx-mp-col >
            
        <wx-view >
            
        <wx-view class="item item-B" >
            B
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        </wx-mp-row>
    
        </wx-mp-col>
    
        <wx-mp-col :xs="0" :span="8" >
            
        <wx-view >
            
        <wx-view :class="theme" style="height: 490px; line-height:480px;" >
            C
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        </wx-mp-row>
    
        </wx-!-->
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/freelayout/freelayout.js
var require_freelayout2 = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/freelayout/freelayout.js"() {
    require_freelayout();
    window["__wxRoute"] = "page/weui/example/freelayout/freelayout";
    var page38 = getPage("page/weui/example/freelayout/freelayout");
    page38.json = `{
  "usingComponents": {
    "mp-col": "@miniprogram-component-plus/col",
    "mp-row": "@miniprogram-component-plus/row"
  },
  "navigationBarTitleText": "\u81EA\u7531\u5E03\u5C40"
}`;
    Page({
      data: {
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
      onShareAppMessage() {
        return {
          title: "\u81EA\u7531\u5E03\u5C40",
          path: "page/weui/example/freelayout/freelayout"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/layeredpresentation/layeredpresentation.wxml
var require_layeredpresentation = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/layeredpresentation/layeredpresentation.wxml"() {
    var page38 = getPage("page/weui/example/layeredpresentation/layeredpresentation");
    page38.template = `
        <wx-view class="container" >
            
        <wx-view >
            
        <wx-mp-row >
            
        <wx-mp-col :xs="24" :span="4" >
            
        <wx-view >
            
        <wx-view class="item item-A" >
            A
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        <wx-mp-col :xs="0" :span="8" >
            
        <wx-view >
            
        <wx-view class="item item-B" >
            B
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        <wx-mp-col :xs="0" :span="12" >
            
        <wx-view >
            
        <wx-view :class="theme" >
            C
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        </wx-mp-row>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/layeredpresentation/layeredpresentation.js
var require_layeredpresentation2 = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/layeredpresentation/layeredpresentation.js"() {
    require_layeredpresentation();
    window["__wxRoute"] = "page/weui/example/layeredpresentation/layeredpresentation";
    var page38 = getPage("page/weui/example/layeredpresentation/layeredpresentation");
    page38.json = `{
  "usingComponents": {
    "mp-col": "@miniprogram-component-plus/col",
    "mp-row": "@miniprogram-component-plus/row"
  },
  "navigationBarTitleText": "\u5206\u5C42\u5C55\u73B0"
}`;
    Page({
      data: {
        hide1: false,
        hide2: false,
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
      onClick(e) {
        this.setData({ [e.target.dataset.set]: true });
      },
      onShareAppMessage() {
        return {
          title: "\u5206\u5C42\u5C55\u73B0",
          path: "page/weui/example/layeredpresentation/layeredpresentation"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/horizontalexpansion/horizontalexpansion.wxml
var require_horizontalexpansion = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/horizontalexpansion/horizontalexpansion.wxml"() {
    var page38 = getPage("page/weui/example/horizontalexpansion/horizontalexpansion");
    page38.template = `
        <wx-view class="container" >
            
        <wx-view >
            
        <wx-swiper class="item-swiper" >
            
        <wx-swiper-item >
            
        <wx-view class="item item-A" >
            A
        </wx-view>
    
        </wx-swiper-item>
    
        <wx-swiper-item >
            
        <wx-view class="item item-B" >
            B
        </wx-view>
    
        </wx-swiper-item>
    
        <wx-swiper-item >
            
        <wx-view :class="theme" >
            C
        </wx-view>
    
        </wx-swiper-item>
    
        </wx-swiper>
    
        </wx-view>
    
        <wx-view >
            
        <wx-mp-row >
            
        <wx-mp-col :xs="0" :span="8" >
            
        <wx-view >
            
        <wx-view class="item item-A" >
            A
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        <wx-mp-col :xs="0" :span="8" >
            
        <wx-view >
            
        <wx-view class="item item-B" >
            B
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        <wx-mp-col :xs="0" :span="8" >
            
        <wx-view >
            
        <wx-view :class="theme" >
            C
        </wx-view>
    
        </wx-view>
    
        </wx-mp-col>
    
        </wx-mp-row>
    
        </wx-view>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/weui/example/horizontalexpansion/horizontalexpansion.js
var require_horizontalexpansion2 = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/horizontalexpansion/horizontalexpansion.js"() {
    require_horizontalexpansion();
    window["__wxRoute"] = "page/weui/example/horizontalexpansion/horizontalexpansion";
    var page38 = getPage("page/weui/example/horizontalexpansion/horizontalexpansion");
    page38.json = `{
  "usingComponents": {
    "mp-col": "@miniprogram-component-plus/col",
    "mp-row": "@miniprogram-component-plus/row"
  },
  "navigationBarTitleText": "\u6A2A\u5411\u62D3\u5C55"
}`;
    Page({
      data: {
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
      onShareAppMessage() {
        return {
          title: "\u6A2A\u5411\u62D3\u5C55",
          path: "page/weui/example/horizontalexpansion/horizontalexpansion"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/canvas-2d/canvas-2d.wxml
var require_canvas_2d = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/canvas-2d/canvas-2d.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/canvas-2d/canvas-2d");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'canvas 2d'}" >
            
        <wx-view class="page-body" >
            
        <div :v-if="canIUse" >
            
        <wx-view class="page-section" >
            
        <wx-view class="page-section-spacing" >
            
        <wx-view class="page-body-wrapper" >
            
        <wx-canvas type="2d" id="canvas2D" class="canvas" >
            
        </wx-canvas>
    
        </wx-view>
    
        </wx-view>
    
        </wx-view>
    
        </div>
    
        <wx-view v-else style="margin: 15px; text-align:center" >
            \u5FAE\u4FE1\u7248\u672C\u8FC7\u4F4E\uFF0C\u6682\u4E0D\u652F\u6301\u672C\u529F\u80FD
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/canvas-2d/canvas-2d.js
var canvas_2d_exports = {};
__markAsModule(canvas_2d_exports);
var import_util3, page36;
var init_canvas_2d = __esm({
  "miniprogram-demo/miniprogram/page/component/pages/canvas-2d/canvas-2d.js"() {
    import_util3 = __toModule(require_util());
    require_canvas_2d();
    window["__wxRoute"] = "page/component/pages/canvas-2d/canvas-2d";
    page36 = getPage("page/component/pages/canvas-2d/canvas-2d");
    page36.json = `{
  "navigationBarTitleText": "canvas 2d"
}
`;
    Page({
      onShareAppMessage() {
        return {
          title: "canvas",
          path: "page/component/pages/canvas-2d/canvas-2d"
        };
      },
      data: {
        canIUse: true
      },
      onReady() {
        const { SDKVersion } = wx.getSystemInfoSync();
        console.log(SDKVersion);
        if ((0, import_util3.compareVersion)(SDKVersion, "2.7.0") < 0) {
          console.log("123");
          this.setData({
            canIUse: false
          });
        } else {
          this.position2D = {
            x: 150,
            y: 150,
            vx: 2,
            vy: 2
          };
          this.x = -100;
          wx.createSelectorQuery().select("#canvas2D").fields({
            node: true,
            size: true
          }).exec(this.init.bind(this));
        }
      },
      init(res2) {
        const width = res2[0].width;
        const height = res2[0].height;
        const canvas = res2[0].node;
        if (!canvas) {
          this.setData({
            canIUse: false
          });
          return;
        }
        const ctx = canvas.getContext("2d");
        const dpr = wx.getSystemInfoSync().pixelRatio;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        const renderLoop = () => {
          this.render(canvas, ctx);
          canvas.requestAnimationFrame(renderLoop);
        };
        canvas.requestAnimationFrame(renderLoop);
        const img = canvas.createImage();
        img.onload = () => {
          this._img = img;
        };
        img.src = "./car.png";
      },
      render(canvas, ctx) {
        ctx.clearRect(0, 0, 305, 305);
        this.drawBall2D(ctx);
        this.drawCar(ctx);
      },
      drawBall2D(ctx) {
        const p = this.position2D;
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
        function ball(x, y) {
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, Math.PI * 2);
          ctx.fillStyle = "#1aad19";
          ctx.strokeStyle = "rgba(1,1,1,0)";
          ctx.fill();
          ctx.stroke();
        }
        ball(p.x, 150);
        ball(150, p.y);
        ball(300 - p.x, 150);
        ball(150, 300 - p.y);
        ball(p.x, p.y);
        ball(300 - p.x, 300 - p.y);
        ball(p.x, 300 - p.y);
        ball(300 - p.x, p.y);
      },
      drawCar(ctx) {
        if (!this._img)
          return;
        if (this.x > 350) {
          this.x = -100;
        }
        ctx.drawImage(this._img, this.x++, 150 - 25, 100, 50);
        ctx.restore();
      },
      onUnload() {
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/component/pages/webgl/webgl.wxml
var require_webgl = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/webgl/webgl.wxml"() {
    require_head();
    var page38 = getPage("page/component/pages/webgl/webgl");
    page38.template = `
        <wx-view class="container" >
            
        <component is="head" :data="{title: 'webgl'}" >
            
        <wx-view class="page-body" >
            
        <div :v-if="canIUse" >
            
        <wx-view class="page-section" >
            
        <wx-view class="page-body-wrapper" >
            
        <wx-canvas class="canvas" type="webgl" id="canvasWebGL" >
            
        </wx-canvas>
    
        </wx-view>
    
        </wx-view>
    
        </div>
    
        <wx-view v-else style="margin: 15px; text-align:center" >
            \u5FAE\u4FE1\u7248\u672C\u8FC7\u4F4E\uFF0C\u6682\u4E0D\u652F\u6301\u672C\u529F\u80FD
        </wx-view>
    
        </wx-view>
    
        <component is="foot" >
            
        </component>
    
        </component>
    
        </wx-view>
    `;
  }
});

// miniprogram-demo/miniprogram/page/component/pages/webgl/webgl.js
var webgl_exports = {};
__markAsModule(webgl_exports);
var import_util4, page37, vs, fs, triangleVertices;
var init_webgl = __esm({
  "miniprogram-demo/miniprogram/page/component/pages/webgl/webgl.js"() {
    import_util4 = __toModule(require_util());
    require_webgl();
    window["__wxRoute"] = "page/component/pages/webgl/webgl";
    page37 = getPage("page/component/pages/webgl/webgl");
    page37.json = `{
  "navigationBarTitleText": "webgl"
}
`;
    vs = `
  precision mediump float;

  attribute vec2 vertPosition;
  attribute vec3 vertColor;
  varying vec3 fragColor;

  void main() {
    gl_Position = vec4(vertPosition, 0.0, 1.0);
    fragColor = vertColor;
  }
`;
    fs = `
  precision mediump float;

  varying vec3 fragColor;
  void main() {
    gl_FragColor = vec4(fragColor, 1.0);
  }
`;
    triangleVertices = [
      0,
      0.5,
      1,
      1,
      0,
      -0.5,
      -0.5,
      0.7,
      0,
      1,
      0.5,
      -0.5,
      0.1,
      1,
      0.6
    ];
    Page({
      onShareAppMessage() {
        return {
          title: "canvas",
          path: "page/component/pages/webgl/webgl"
        };
      },
      data: {
        canIUse: true
      },
      onReady() {
        const { SDKVersion } = wx.getSystemInfoSync();
        if ((0, import_util4.compareVersion)(SDKVersion, "2.7.0") < 0) {
          console.log("123");
          this.setData({
            canIUse: false
          });
        } else {
          wx.createSelectorQuery().select("#canvasWebGL").node().exec((res2) => {
            const canvas = res2[0].node;
            this.renderWebGL(canvas);
          });
        }
      },
      renderWebGL(canvas) {
        if (!canvas) {
          this.setData({
            canIUse: false
          });
          return;
        }
        const gl = canvas.getContext("webgl");
        if (!gl) {
          console.error("gl init failed", gl);
          return;
        }
        gl.viewport(0, 0, 305, 305);
        const vertShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertShader, vs);
        gl.compileShader(vertShader);
        const fragShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragShader, fs);
        gl.compileShader(fragShader);
        const prog = gl.createProgram();
        gl.attachShader(prog, vertShader);
        gl.attachShader(prog, fragShader);
        gl.deleteShader(vertShader);
        gl.deleteShader(fragShader);
        gl.linkProgram(prog);
        gl.useProgram(prog);
        const draw = () => {
          const triangleVertexBufferObject = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);
          const positionAttribLocation = gl.getAttribLocation(prog, "vertPosition");
          const colorAttribLocation = gl.getAttribLocation(prog, "vertColor");
          gl.vertexAttribPointer(positionAttribLocation, 2, gl.FLOAT, gl.FALSE, 5 * Float32Array.BYTES_PER_ELEMENT, 0);
          gl.vertexAttribPointer(colorAttribLocation, 3, gl.FLOAT, gl.FALSE, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
          gl.enableVertexAttribArray(positionAttribLocation);
          gl.enableVertexAttribArray(colorAttribLocation);
          gl.drawArrays(gl.TRIANGLES, 0, 3);
          canvas.requestAnimationFrame(draw);
        };
        canvas.requestAnimationFrame(draw);
      }
    });
  }
});

// <stdin>
require_app();
require_component2();
require_app();
require_view2();
require_app();
require_scroll_view2();
require_app();
require_swiper2();
require_app();
require_text2();
require_app();
require_icon2();
require_app();
require_progress2();
require_app();
require_button2();
require_app();
require_checkbox2();
require_app();
require_form2();
require_app();
require_input2();
require_app();
require_label2();
require_app();
require_picker2();
require_app();
require_radio2();
require_app();
require_slider2();
require_app();
require_switch2();
require_app();
require_textarea2();
require_app();
require_navigator2();
require_app();
require_navigate2();
require_app();
require_redirect2();
require_app();
require_image2();
require_app();
require_video2();
require_app();
require_map2();
require_app();
init_canvas();
require_app();
require_ad2();
require_app();
require_movable_view2();
require_app();
require_cover_view2();
require_app();
require_rich_text2();
require_app();
require_picker_view2();
require_app();
require_camera2();
require_app();
require_camera_scan_code2();
require_app();
require_map_styles2();
require_app();
require_live_player2();
require_app();
require_live_pusher2();
require_app();
require_aria_component2();
require_app();
require_API2();
require_app();
require_cloud2();
require_app();
require_doc_web_view2();
require_app();
require_open_data2();
require_app();
require_web_view2();
require_app();
require_editor2();
require_app();
init_example();
require_app();
init_cell();
require_app();
init_slideview();
require_app();
init_form();
require_app();
init_uploader();
require_app();
init_article();
require_app();
init_badge();
require_app();
init_flex();
require_app();
init_footer();
require_app();
init_gallery();
require_app();
init_grid();
require_app();
init_loadmore();
require_app();
require_loading();
require_app();
init_panel();
require_app();
init_preview();
require_app();
init_dialog();
require_app();
init_msg();
require_app();
init_msg_text();
require_app();
init_msg_text_primary();
require_app();
init_msg_success();
require_app();
init_msg_fail();
require_app();
require_navbar2();
require_app();
require_navigation();
require_app();
init_tabbar();
require_app();
init_icons();
require_app();
require_form_page2();
require_app();
init_half_screen_dialog();
require_app();
init_actionsheet();
require_app();
require_toptips2();
require_app();
init_searchbar();
require_app();
init_emoji();
require_app();
init_video_swiper();
require_app();
init_index_list();
require_app();
init_sticky();
require_app();
init_tabs();
require_app();
init_vtabs();
require_app();
init_select_text();
require_app();
init_barrage();
require_app();
require_wxml_to_canvas2();
require_app();
require_telescopic2();
require_app();
require_linebreak2();
require_app();
require_sidenavigation2();
require_app();
require_pagination2();
require_app();
require_freelayout2();
require_app();
require_layeredpresentation2();
require_app();
require_horizontalexpansion2();
require_app();
init_canvas_2d();
require_app();
init_webgl();
