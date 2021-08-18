(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "pages": [
    "page/component/index",
    "page/component/pages/view/view",
    "page/component/pages/scroll-view/scroll-view",
    "page/component/pages/swiper/swiper",
    "page/component/pages/text/text",
    "page/component/pages/icon/icon",
    "page/component/pages/progress/progress",
    "page/component/pages/button/button",
    "page/component/pages/checkbox/checkbox",
    "page/component/pages/form/form",
    "page/component/pages/input/input",
    "page/component/pages/label/label",
    "page/component/pages/picker/picker",
    "page/component/pages/radio/radio",
    "page/component/pages/slider/slider",
    "page/component/pages/switch/switch",
    "page/component/pages/textarea/textarea",
    "page/component/pages/navigator/navigator",
    "page/component/pages/navigator/navigate",
    "page/component/pages/navigator/redirect",
    "page/component/pages/image/image",
    "page/component/pages/video/video",
    "page/component/pages/map/map",
    "page/component/pages/canvas/canvas",
    "page/component/pages/ad/ad",
    "page/component/pages/movable-view/movable-view",
    "page/component/pages/cover-view/cover-view",
    "page/component/pages/rich-text/rich-text",
    "page/component/pages/picker-view/picker-view",
    "page/component/pages/camera/camera",
    "page/component/pages/camera-scan-code/camera-scan-code",
    "page/component/pages/map-styles/map-styles",
    "page/component/pages/live-player/live-player",
    "page/component/pages/live-pusher/live-pusher",
    "page/component/pages/aria-component/aria-component",
    "page/API/index",
    "page/cloud/index",
    "page/component/pages/doc-web-view/doc-web-view",
    "page/component/pages/open-data/open-data",
    "page/component/pages/web-view/web-view",
    "page/component/pages/editor/editor",
    "page/weui/example/index",
    "page/weui/example/cell/cell",
    "page/weui/example/slideview/slideview",
    "page/weui/example/form/form",
    "page/weui/example/uploader/uploader",
    "page/weui/example/article/article",
    "page/weui/example/badge/badge",
    "page/weui/example/flex/flex",
    "page/weui/example/footer/footer",
    "page/weui/example/gallery/gallery",
    "page/weui/example/grid/grid",
    "page/weui/example/loadmore/loadmore",
    "page/weui/example/loading/loading",
    "page/weui/example/panel/panel",
    "page/weui/example/preview/preview",
    "page/weui/example/dialog/dialog",
    "page/weui/example/msg/msg",
    "page/weui/example/msg/msg_text",
    "page/weui/example/msg/msg_text_primary",
    "page/weui/example/msg/msg_success",
    "page/weui/example/msg/msg_fail",
    "page/weui/example/navbar/navbar",
    "page/weui/example/navigation/navigation",
    "page/weui/example/tabbar/tabbar",
    "page/weui/example/icons/icons",
    "page/weui/example/form-page/form-page",
    "page/weui/example/half-screen-dialog/half-screen-dialog",
    "page/weui/example/actionsheet/actionsheet",
    "page/weui/example/toptips/toptips",
    "page/weui/example/searchbar/searchbar",
    "page/weui/example/emoji/emoji",
    "page/weui/example/video-swiper/video-swiper",
    "page/weui/example/index-list/index-list",
    "page/weui/example/sticky/sticky",
    "page/weui/example/tabs/tabs",
    "page/weui/example/vtabs/vtabs",
    "page/weui/example/select-text/select-text",
    "page/weui/example/barrage/barrage",
    "page/weui/example/wxml-to-canvas/wxml-to-canvas",
    "page/weui/example/telescopic/telescopic",
    "page/weui/example/linebreak/linebreak",
    "page/weui/example/sidenavigation/sidenavigation",
    "page/weui/example/pagination/pagination",
    "page/weui/example/freelayout/freelayout",
    "page/weui/example/layeredpresentation/layeredpresentation",
    "page/weui/example/horizontalexpansion/horizontalexpansion",
    "page/component/pages/canvas-2d/canvas-2d",
    "page/component/pages/webgl/webgl"
  ],
  "subpackages": [
    {
      "root": "packageAPI",
      "pages": [
        "pages/login/login",
        "pages/get-user-info/get-user-info",
        "pages/request-payment/request-payment",
        "pages/share/share",
        "pages/share-button/share-button",
        "pages/custom-message/custom-message",
        "pages/template-message/template-message",
        "pages/set-navigation-bar-title/set-navigation-bar-title",
        "pages/navigation-bar-loading/navigation-bar-loading",
        "pages/navigator/navigator",
        "pages/pull-down-refresh/pull-down-refresh",
        "pages/animation/animation",
        "pages/action-sheet/action-sheet",
        "pages/modal/modal",
        "pages/toast/toast",
        "pages/get-network-type/get-network-type",
        "pages/on-network-status-change/on-network-status-change",
        "pages/get-system-info/get-system-info",
        "pages/on-compass-change/on-compass-change",
        "pages/make-phone-call/make-phone-call",
        "pages/scan-code/scan-code",
        "pages/request/request",
        "pages/web-socket/web-socket",
        "pages/upload-file/upload-file",
        "pages/download-file/download-file",
        "pages/image/image",
        "pages/voice/voice",
        "pages/file/file",
        "pages/on-accelerometer-change/on-accelerometer-change",
        "pages/canvas/canvas",
        "pages/background-audio/background-audio",
        "pages/video/video",
        "pages/get-location/get-location",
        "pages/open-location/open-location",
        "pages/choose-location/choose-location",
        "pages/storage/storage",
        "pages/get-wxml-node-info/get-wxml-node-info",
        "pages/load-font-face/load-font-face",
        "pages/clipboard-data/clipboard-data",
        "pages/bluetooth/bluetooth",
        "pages/screen-brightness/screen-brightness",
        "pages/vibrate/vibrate",
        "pages/add-contact/add-contact",
        "pages/wifi/wifi",
        "pages/page-scroll/page-scroll",
        "pages/intersection-observer/intersection-observer",
        "pages/capture-screen/capture-screen",
        "pages/worker/worker",
        "pages/ibeacon/ibeacon",
        "pages/choose-address/choose-address",
        "pages/setting/setting",
        "pages/choose-invoice-title/choose-invoice-title",
        "pages/soter-authentication/soter-authentication",
        "pages/subscribe-message/subscribe-message",
        "pages/doc-web-view/doc-web-view",
        "pages/audio/audio",
        "pages/get-battery-info/get-battery-info",
        "pages/get-performance/get-performance",
        "pages/mdns/mdns",
        "pages/udp-socket/udp-socket",
        "pages/two-way-bindings/two-way-bindings",
        "pages/media-container/media-container",
        "pages/get-background-fetch-data/get-background-fetch-data",
        "pages/get-background-prefetch-data/get-background-prefetch-data",
        "pages/wxs/wxs",
        "pages/bluetooth/slave/slave",
        "pages/resizable/resizable",
        "pages/wxs/movable",
        "pages/wxs/sidebar",
        "pages/wxs/stick-top",
        "pages/wxs/nearby"
      ]
    },
    {
      "root": "packageCloud",
      "pages": [
        "pages/doc-web-view/doc-web-view",
        "pages/user-authentication/user-authentication",
        "pages/get-wx-context/get-wx-context",
        "pages/upload-file/upload-file",
        "pages/download-file/download-file",
        "pages/get-temp-file-url/get-temp-file-url",
        "pages/delete-file/delete-file",
        "pages/cloud-file-component/cloud-file-component",
        "pages/crud/crud",
        "pages/crud-detail/crud-detail",
        "pages/db-permission/db-permission",
        "pages/server-date/server-date",
        "pages/scf-database/scf-database",
        "pages/scf-storage/scf-storage",
        "pages/scf-openapi/scf-openapi"
      ]
    }
  ],
  "preloadRule": {
    "page/component/index": {
      "network": "all",
      "packages": [
        "packageAPI",
        "packageCloud"
      ]
    }
  },
  "window": {
    "navigationBarTextStyle": "@navigationBarTextStyle",
    "navigationBarTitleText": "演示",
    "navigationBarBackgroundColor": "@navigationBarBackgroundColor",
    "backgroundColor": "@backgroundColor"
  },
  "tabBar": {
    "color": "@tabBarColor",
    "selectedColor": "@tabBarSelectedColor",
    "borderStyle": "@tabBarBorderStyle",
    "backgroundColor": "@tabBarBackgroundColor",
    "list": [
      {
        "pagePath": "page/component/index",
        "iconPath": "@iconPathComponent",
        "selectedIconPath": "@selectedIconPathComponent",
        "text": "组件"
      },
      {
        "pagePath": "page/weui/example/index",
        "iconPath": "@iconPathComponent",
        "selectedIconPath": "@selectedIconPathComponent",
        "text": "扩展能力"
      },
      {
        "pagePath": "page/API/index",
        "iconPath": "@iconPathAPI",
        "selectedIconPath": "@selectedIconPathAPI",
        "text": "接口"
      },
      {
        "pagePath": "page/cloud/index",
        "iconPath": "@iconPathCloud",
        "selectedIconPath": "@selectedIconPathCloud",
        "text": "云开发"
      }
    ]
  },
  "networkTimeout": {
    "request": 10000,
    "connectSocket": 10000,
    "uploadFile": 10000,
    "downloadFile": 10000
  },
  "navigateToMiniProgramAppIdList": [
    "wx4f1b24bdc99fa23b"
  ],
  "workers": "workers",
  "debug": false,
  "style": "v2",
  "permission": {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示"
    }
  },
  "cloud": true,
  "sitemapLocation": "sitemap.json",
  "themeLocation": "demo.theme.json",
  "darkmode": true,
  "resizable": true,
  "useExtendedLib": {
    "weui": true
  }
}
},{}],2:[function(require,module,exports){
(function (global){(function (){

    var appConfig = require('./app.json')
    var App = (appData)=> {
      return _globalApp({appConfig})
    }
    window['registerComponent'] = (name,template) => {
  Vue.component(name,{
    props:['data'],
    data(){
        return this.$props.data
    },
    template,
  })
}

window['getCurrentPages'] = function () {
  return [{ route: "pages/home/index" }];
};
window['getApp'] = function () {};
window['requirePlugin'] = function () {};
window['_pageObj'] = {};
window['_globalPage'] = ({pagePath, config,pageConfig,template}) => {
  _pageObj[pagePath] = {
    path: pagePath,
    config,
    template,
  };
};
window['_global'] = {};
window['_globalApp'] = ({appConfig}) => {
  _global["appConfig"] = appConfig;
};
window['_globalComponent'] = ({path, config, template}) => {
  _pageObj[path] = {
    path,
    config,
    template,
  };
};
window['__wxRoute'] = "";
var getCurrentInstance = () => {
  return {
    router: _global["router"],
  };
};
window['wx'] = (window['jd'] = {
  webpackJsonp: [],
  getCurrentPages,
  getCurrentInstance,
  navigateTo: (data) => {
    _global["router"].push(data.url);
  },
  getSystemInfoSync: () => {
    return {
      system: "android",
    };
  },
  getNetworkType: () => {
    console.log("getNetworkType");
  },
});

    require('./page/component/index')
require('./page/component/pages/view/view')
require('./page/component/pages/scroll-view/scroll-view')
require('./page/component/pages/swiper/swiper')
require('./page/component/pages/text/text')
require('./page/component/pages/icon/icon')
require('./page/component/pages/progress/progress')
require('./page/component/pages/button/button')
require('./page/component/pages/checkbox/checkbox')
require('./page/component/pages/form/form')
require('./page/component/pages/input/input')
require('./page/component/pages/label/label')
require('./page/component/pages/picker/picker')
require('./page/component/pages/radio/radio')
require('./page/component/pages/slider/slider')
require('./page/component/pages/switch/switch')
require('./page/component/pages/textarea/textarea')
require('./page/component/pages/navigator/navigator')
require('./page/component/pages/navigator/navigate')
require('./page/component/pages/navigator/redirect')
require('./page/component/pages/image/image')
require('./page/component/pages/video/video')
require('./page/component/pages/map/map')
require('./page/component/pages/canvas/canvas')
require('./page/component/pages/ad/ad')
require('./page/component/pages/movable-view/movable-view')
require('./page/component/pages/cover-view/cover-view')
require('./page/component/pages/rich-text/rich-text')
require('./page/component/pages/picker-view/picker-view')
require('./page/component/pages/camera/camera')
require('./page/component/pages/camera-scan-code/camera-scan-code')
require('./page/component/pages/map-styles/map-styles')
require('./page/component/pages/live-player/live-player')
require('./page/component/pages/live-pusher/live-pusher')
require('./page/component/pages/aria-component/aria-component')
require('./page/API/index')
require('./page/cloud/index')
require('./page/component/pages/doc-web-view/doc-web-view')
require('./page/component/pages/open-data/open-data')
require('./page/component/pages/web-view/web-view')
require('./page/component/pages/editor/editor')
require('./page/weui/example/index')
require('./page/weui/example/cell/cell')
require('./page/weui/example/slideview/slideview')
require('./page/weui/example/form/form')
require('./page/weui/example/uploader/uploader')
require('./page/weui/example/article/article')
require('./page/weui/example/badge/badge')
require('./page/weui/example/flex/flex')
require('./page/weui/example/footer/footer')
require('./page/weui/example/gallery/gallery')
require('./page/weui/example/grid/grid')
require('./page/weui/example/loadmore/loadmore')
require('./page/weui/example/loading/loading')
require('./page/weui/example/panel/panel')
require('./page/weui/example/preview/preview')
require('./page/weui/example/dialog/dialog')
require('./page/weui/example/msg/msg')
require('./page/weui/example/msg/msg_text')
require('./page/weui/example/msg/msg_text_primary')
require('./page/weui/example/msg/msg_success')
require('./page/weui/example/msg/msg_fail')
require('./page/weui/example/navbar/navbar')
require('./page/weui/example/navigation/navigation')
require('./page/weui/example/tabbar/tabbar')
require('./page/weui/example/icons/icons')
require('./page/weui/example/form-page/form-page')
require('./page/weui/example/half-screen-dialog/half-screen-dialog')
require('./page/weui/example/actionsheet/actionsheet')
require('./page/weui/example/toptips/toptips')
require('./page/weui/example/searchbar/searchbar')
require('./page/weui/example/emoji/emoji')
require('./page/weui/example/video-swiper/video-swiper')
require('./page/weui/example/index-list/index-list')
require('./page/weui/example/sticky/sticky')
require('./page/weui/example/tabs/tabs')
require('./page/weui/example/vtabs/vtabs')
require('./page/weui/example/select-text/select-text')
require('./page/weui/example/barrage/barrage')
require('./page/weui/example/wxml-to-canvas/wxml-to-canvas')
require('./page/weui/example/telescopic/telescopic')
require('./page/weui/example/linebreak/linebreak')
require('./page/weui/example/sidenavigation/sidenavigation')
require('./page/weui/example/pagination/pagination')
require('./page/weui/example/freelayout/freelayout')
require('./page/weui/example/layeredpresentation/layeredpresentation')
require('./page/weui/example/horizontalexpansion/horizontalexpansion')
require('./page/component/pages/canvas-2d/canvas-2d')
require('./page/component/pages/webgl/webgl')

  "use strict";

const config = require('./config');

const themeListeners = [];
global.isDemo = true;
App({
  onLaunch(opts, data) {
    const that = this;
    const canIUseSetBackgroundFetchToken = wx.canIUse('setBackgroundFetchToken');

    if (canIUseSetBackgroundFetchToken) {
      wx.setBackgroundFetchToken({
        token: 'getBackgroundFetchToken'
      });
    }

    if (wx.getBackgroundFetchData) {
      wx.getBackgroundFetchData({
        fetchType: 'pre',

        success(res) {
          that.globalData.backgroundFetchData = res;
          console.log('读取预拉取数据成功');
        },

        fail() {
          console.log('读取预拉取数据失败');
          wx.showToast({
            title: '无缓存数据',
            icon: 'none'
          });
        },

        complete() {
          console.log('结束读取');
        }

      });
    }

    console.log('App Launch', opts);

    if (data && data.path) {
      wx.navigateTo({
        url: data.path
      });
    }

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        env: config.envId,
        traceUser: true
      });
    }
  },

  onShow(opts) {
    console.log('App Show', opts); // console.log(wx.getSystemInfoSync())
  },

  onHide() {
    console.log('App Hide');
  },

  onThemeChange({
    theme
  }) {
    this.globalData.theme = theme;
    themeListeners.forEach(listener => {
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
    iconTabbar: '/page/weui/example/images/icon_tabbar.png'
  },

  // lazy loading openid
  getUserOpenId(callback) {
    const self = this;

    if (self.globalData.openid) {
      callback(null, self.globalData.openid);
    } else {
      wx.login({
        success(data) {
          wx.cloud.callFunction({
            name: 'login',
            data: {
              action: 'openid'
            },
            success: res => {
              console.log('拉取openid成功', res);
              self.globalData.openid = res.result.openid;
              callback(null, self.globalData.openid);
            },
            fail: err => {
              console.log('拉取用户openid失败，将无法正常使用开放接口等服务', res);
              callback(res);
            }
          });
        },

        fail(err) {
          console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err);
          callback(err);
        }

      });
    }
  },

  // 通过云函数获取用户 openid，支持回调或 Promise
  getUserOpenIdViaCloud() {
    return wx.cloud.callFunction({
      name: 'wxContext',
      data: {}
    }).then(res => {
      this.globalData.openid = res.result.openid;
      return res.result.openid;
    });
  }

});
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./app.json":1,"./config":3,"./page/API/index":5,"./page/cloud/index":8,"./page/component/index":11,"./page/component/pages/ad/ad":14,"./page/component/pages/aria-component/aria-component":17,"./page/component/pages/button/button":20,"./page/component/pages/camera-scan-code/camera-scan-code":23,"./page/component/pages/camera/camera":26,"./page/component/pages/canvas-2d/canvas-2d":29,"./page/component/pages/canvas/canvas":32,"./page/component/pages/checkbox/checkbox":35,"./page/component/pages/cover-view/cover-view":38,"./page/component/pages/doc-web-view/doc-web-view":41,"./page/component/pages/editor/editor":44,"./page/component/pages/form/form":47,"./page/component/pages/icon/icon":50,"./page/component/pages/image/image":53,"./page/component/pages/input/input":56,"./page/component/pages/label/label":59,"./page/component/pages/live-player/live-player":62,"./page/component/pages/live-pusher/live-pusher":65,"./page/component/pages/map-styles/map-styles":68,"./page/component/pages/map/map":71,"./page/component/pages/movable-view/movable-view":74,"./page/component/pages/navigator/navigate":77,"./page/component/pages/navigator/navigator":80,"./page/component/pages/navigator/redirect":83,"./page/component/pages/open-data/open-data":86,"./page/component/pages/picker-view/picker-view":89,"./page/component/pages/picker/picker":92,"./page/component/pages/progress/progress":95,"./page/component/pages/radio/radio":98,"./page/component/pages/rich-text/rich-text":101,"./page/component/pages/scroll-view/scroll-view":104,"./page/component/pages/slider/slider":107,"./page/component/pages/swiper/swiper":110,"./page/component/pages/switch/switch":113,"./page/component/pages/text/text":116,"./page/component/pages/textarea/textarea":119,"./page/component/pages/video/video":122,"./page/component/pages/view/view":125,"./page/component/pages/web-view/web-view":128,"./page/component/pages/webgl/webgl":131,"./page/weui/example/actionsheet/actionsheet":136,"./page/weui/example/article/article":139,"./page/weui/example/badge/badge":142,"./page/weui/example/barrage/barrage":145,"./page/weui/example/cell/cell":149,"./page/weui/example/dialog/dialog":152,"./page/weui/example/emoji/emoji":155,"./page/weui/example/flex/flex":158,"./page/weui/example/footer/footer":161,"./page/weui/example/form-page/form-page":164,"./page/weui/example/form/form":167,"./page/weui/example/freelayout/freelayout":170,"./page/weui/example/gallery/gallery":173,"./page/weui/example/grid/grid":176,"./page/weui/example/half-screen-dialog/half-screen-dialog":179,"./page/weui/example/horizontalexpansion/horizontalexpansion":182,"./page/weui/example/icons/icons":185,"./page/weui/example/index":192,"./page/weui/example/index-list/index-list":189,"./page/weui/example/layeredpresentation/layeredpresentation":195,"./page/weui/example/linebreak/linebreak":198,"./page/weui/example/loading/loading":201,"./page/weui/example/loadmore/loadmore":204,"./page/weui/example/msg/msg":207,"./page/weui/example/msg/msg_fail":210,"./page/weui/example/msg/msg_success":213,"./page/weui/example/msg/msg_text":216,"./page/weui/example/msg/msg_text_primary":219,"./page/weui/example/navbar/navbar":222,"./page/weui/example/navigation/navigation":225,"./page/weui/example/pagination/pagination":228,"./page/weui/example/panel/panel":231,"./page/weui/example/preview/preview":234,"./page/weui/example/searchbar/searchbar":237,"./page/weui/example/select-text/select-text":240,"./page/weui/example/sidenavigation/sidenavigation":243,"./page/weui/example/slideview/slideview":246,"./page/weui/example/sticky/sticky":249,"./page/weui/example/tabbar/tabbar":252,"./page/weui/example/tabs/tabs":255,"./page/weui/example/telescopic/telescopic":258,"./page/weui/example/toptips/toptips":261,"./page/weui/example/uploader/uploader":264,"./page/weui/example/video-swiper/video-swiper":267,"./page/weui/example/vtabs/vtabs":270,"./page/weui/example/wxml-to-canvas/wxml-to-canvas":274}],3:[function(require,module,exports){
"use strict";

/**
 * 小程序配置文件
 */
const host = '14592619.qcloud.la';
const config = {
  // 测试的请求地址，用于测试会话
  requestUrl: 'https://mp.weixin.qq.com',
  host,
  // 云开发环境 ID
  envId: 'release-b86096',
  // envId: 'test-f0b102',
  // 云开发-存储 示例文件的文件 ID
  demoImageFileId: 'cloud://release-b86096.7265-release-b86096-1258211818/demo.jpg',
  demoVideoFileId: 'cloud://release-b86096.7265-release-b86096/demo.mp4'
};
module.exports = config;
},{}],4:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "小程序接口能力展示",
    "usingComponents": {
      "set-tab-bar": "components/set-tab-bar/set-tab-bar"
    }
}

},{}],5:[function(require,module,exports){

    var pageConfig = require('./index.json')
    require('./index.wxml')
    var pagePath = 'page/API/index'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: '小程序接口能力展示',
      path: 'page/API/index'
    };
  },

  data: {
    list: [{
      id: 'api',
      name: '开放接口',
      open: false,
      pages: [{
        zh: '微信登录',
        url: 'login/login'
      }, {
        zh: '获取用户信息',
        url: 'get-user-info/get-user-info'
      }, {
        zh: '发起支付',
        url: 'request-payment/request-payment'
      }, {
        zh: '转发',
        url: 'share/share'
      }, {
        zh: '转发按钮',
        url: 'share-button/share-button'
      }, {
        zh: '客服消息',
        url: 'custom-message/custom-message'
      }, {
        zh: '订阅消息',
        url: 'subscribe-message/subscribe-message'
      }, {
        zh: '收货地址',
        url: 'choose-address/choose-address'
      }, {
        zh: '获取发票抬头',
        url: 'choose-invoice-title/choose-invoice-title'
      }, {
        zh: '生物认证',
        url: 'soter-authentication/soter-authentication'
      }, {
        zh: '设置',
        url: 'setting/setting'
      }]
    }, {
      id: 'page',
      name: '界面',
      open: false,
      pages: [{
        zh: '设置界面标题',
        url: 'set-navigation-bar-title/set-navigation-bar-title'
      }, {
        zh: '标题栏加载动画',
        url: 'navigation-bar-loading/navigation-bar-loading'
      }, {
        zh: '设置TabBar',
        url: '@set-tab-bar'
      }, {
        zh: '页面跳转',
        url: 'navigator/navigator'
      }, {
        zh: '下拉刷新',
        url: 'pull-down-refresh/pull-down-refresh'
      }, {
        zh: '创建动画',
        url: 'animation/animation'
      }, {
        zh: '创建绘画',
        url: 'canvas/canvas'
      }, {
        zh: '显示操作菜单',
        url: 'action-sheet/action-sheet'
      }, {
        zh: '显示模态弹窗',
        url: 'modal/modal'
      }, {
        zh: '页面滚动',
        url: 'page-scroll/page-scroll'
      }, {
        zh: '显示消息提示框',
        url: 'toast/toast'
      }, {
        zh: '获取WXML节点信息',
        url: 'get-wxml-node-info/get-wxml-node-info'
      }, {
        zh: 'WXML节点布局相交状态',
        url: 'intersection-observer/intersection-observer'
      }]
    }, {
      id: 'device',
      name: '设备',
      open: false,
      pages: [{
        zh: '获取手机网络状态',
        url: 'get-network-type/get-network-type'
      }, {
        zh: '监听手机网络变化',
        url: 'on-network-status-change/on-network-status-change'
      }, {
        zh: '获取手机系统信息',
        url: 'get-system-info/get-system-info'
      }, {
        zh: '获取手机设备电量',
        url: 'get-battery-info/get-battery-info'
      }, {
        zh: '监听重力感应数据',
        url: 'on-accelerometer-change/on-accelerometer-change'
      }, {
        zh: '监听罗盘数据',
        url: 'on-compass-change/on-compass-change'
      }, {
        zh: '打电话',
        url: 'make-phone-call/make-phone-call'
      }, {
        zh: '扫码',
        url: 'scan-code/scan-code'
      }, {
        zh: '剪切板',
        url: 'clipboard-data/clipboard-data'
      }, {
        zh: '蓝牙',
        url: 'bluetooth/bluetooth'
      }, {
        zh: 'iBeacon',
        url: 'ibeacon/ibeacon'
      }, {
        zh: '屏幕亮度',
        url: 'screen-brightness/screen-brightness'
      }, {
        zh: '用户截屏事件',
        url: 'capture-screen/capture-screen'
      }, {
        zh: '振动',
        url: 'vibrate/vibrate'
      }, {
        zh: '手机联系人',
        url: 'add-contact/add-contact'
      }, {
        zh: 'Wi-Fi',
        url: 'wifi/wifi'
      }]
    }, {
      id: 'performance',
      name: '性能',
      open: false,
      pages: [{
        zh: '获取性能数据',
        url: 'get-performance/get-performance'
      }]
    }, {
      id: 'network',
      name: '网络',
      open: false,
      pages: [{
        zh: '发起一个请求',
        url: 'request/request'
      }, {
        zh: 'WebSocket',
        url: 'web-socket/web-socket'
      }, {
        zh: '上传文件',
        url: 'upload-file/upload-file'
      }, {
        zh: '下载文件',
        url: 'download-file/download-file'
      }, {
        zh: 'UDPSocket',
        url: 'udp-socket/udp-socket'
      }, {
        zh: 'mDNS',
        url: 'mdns/mdns'
      }]
    }, {
      id: 'media',
      name: '媒体',
      open: false,
      pages: [{
        zh: '图片',
        url: 'image/image'
      }, {
        zh: '音频',
        url: 'audio/audio'
      }, {
        zh: '录音',
        url: 'voice/voice'
      }, {
        zh: '背景音频',
        url: 'background-audio/background-audio'
      }, {
        zh: '文件',
        url: 'file/file'
      }, {
        zh: '视频',
        url: 'video/video'
      }, {
        zh: '音视频合成',
        url: 'media-container/media-container'
      }, {
        zh: '动态加载字体',
        url: 'load-font-face/load-font-face'
      }]
    }, {
      id: 'location',
      name: '位置',
      open: false,
      pages: [{
        zh: '获取当前位置',
        url: 'get-location/get-location'
      }, {
        zh: '使用原生地图查看位置',
        url: 'open-location/open-location'
      }, {
        zh: '使用原生地图选择位置',
        url: 'choose-location/choose-location'
      }]
    }, {
      id: 'storage',
      name: '数据',
      pages: [{
        zh: '本地存储',
        url: 'storage/storage'
      }, {
        zh: '周期性更新',
        url: 'get-background-fetch-data/get-background-fetch-data'
      }, {
        zh: '数据预拉取',
        url: 'get-background-prefetch-data/get-background-prefetch-data'
      }]
    }, {
      id: 'worker',
      name: '多线程',
      url: 'worker/worker'
    }, {
      id: 'framework',
      name: '框架',
      pages: [{
        zh: '双向绑定',
        url: 'two-way-bindings/two-way-bindings'
      }, {
        zh: 'WXS',
        url: 'wxs/wxs'
      }, {
        zh: '屏幕旋转',
        url: 'resizable/resizable'
      }]
    }],
    isSetTabBarPage: false,
    theme: 'light'
  },

  onLoad() {
    this.setData({
      theme: wx.getSystemInfoSync().theme || 'light'
    });

    if (wx.onThemeChange) {
      wx.onThemeChange(({
        theme
      }) => {
        this.setData({
          theme
        });
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
            url: '../../packageAPI/pages/' + list[i].url
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
},{"./index.json":4,"./index.wxml":6}],6:[function(require,module,exports){

    // console.log('wxml执行')
    // module.exports = {
    //   test:123123123
    // }
  
},{}],7:[function(require,module,exports){
module.exports={
  "navigationBarTitleText": "小程序云开发展示"
}

},{}],8:[function(require,module,exports){

    var pageConfig = require('./index.json')
    require('./index.wxml')
    var pagePath = 'page/cloud/index'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: '小程序云开发展示',
      path: 'page/cloud/index'
    };
  },

  data: {
    list: [{
      id: 'user',
      name: '用户鉴权',
      open: false,
      pages: [{
        zh: '获取 OpenID',
        url: 'user-authentication/user-authentication'
      }]
    }, {
      id: 'database',
      name: '数据库',
      open: false,
      pages: [{
        zh: '基本操作',
        url: 'crud/crud'
      }, {
        zh: '权限管理',
        url: 'db-permission/db-permission'
      }, {
        zh: '服务端时间',
        url: 'server-date/server-date'
      }]
    }, {
      id: 'storage',
      name: '存储',
      open: false,
      pages: [{
        zh: '上传文件',
        url: 'upload-file/upload-file'
      }, {
        zh: '下载文件',
        url: 'download-file/download-file'
      }, {
        zh: '删除文件',
        url: 'delete-file/delete-file'
      }, {
        zh: '换取临时链接',
        url: 'get-temp-file-url/get-temp-file-url'
      }, {
        zh: '组件支持',
        url: 'cloud-file-component/cloud-file-component'
      }]
    }, {
      id: 'scf',
      name: '云函数',
      open: false,
      pages: [{
        zh: 'WXContext',
        url: 'get-wx-context/get-wx-context'
      }, {
        zh: '数据库',
        url: 'scf-database/scf-database'
      }, {
        zh: '存储',
        url: 'scf-storage/scf-storage'
      }, {
        zh: '云调用',
        url: 'scf-openapi/scf-openapi'
      }]
    }],
    theme: 'light'
  },

  onLoad() {
    this.setData({
      theme: wx.getSystemInfoSync().theme || 'light'
    });

    if (wx.onThemeChange) {
      wx.onThemeChange(({
        theme
      }) => {
        this.setData({
          theme
        });
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
            url: '../../packageCloud/pages/' + list[i].url
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
},{"./index.json":7,"./index.wxml":9}],9:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],10:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "小程序官方组件展示"
}

},{}],11:[function(require,module,exports){

    var pageConfig = require('./index.json')
    require('./index.wxml')
    var pagePath = 'page/component/index'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShow() {
    wx.reportAnalytics('enter_home_programmatically', {});
  },

  onShareAppMessage() {
    return {
      title: '小程序官方组件展示',
      path: 'page/component/index'
    };
  },

  data: {
    list: [{
      id: 'view',
      name: '视图容器',
      open: false,
      pages: ['view', 'scroll-view', 'swiper', 'movable-view', 'cover-view']
    }, {
      id: 'content',
      name: '基础内容',
      open: false,
      pages: ['text', 'icon', 'progress', 'rich-text']
    }, {
      id: 'form',
      name: '表单组件',
      open: false,
      pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'picker-view', 'radio', 'slider', 'switch', 'textarea', 'editor']
    }, {
      id: 'nav',
      name: '导航',
      open: false,
      pages: ['navigator']
    }, {
      id: 'media',
      name: '媒体组件',
      open: false,
      pages: ['image', 'video', 'camera', 'live-pusher', 'live-player']
    }, {
      id: 'map',
      name: '地图',
      open: false,
      pages: ['map']
    }, {
      id: 'canvas',
      name: '画布',
      open: false,
      pages: ['canvas', 'canvas-2d', 'webgl']
    }, {
      id: 'open',
      name: '开放能力',
      open: false,
      pages: ['ad', 'open-data', 'web-view']
    }, {
      id: 'obstacle-free',
      name: '无障碍访问',
      open: false,
      pages: ['aria-component']
    }],
    theme: 'light'
  },

  onLoad() {
    this.setData({
      theme: wx.getSystemInfoSync().theme || 'light'
    });

    if (wx.onThemeChange) {
      wx.onThemeChange(({
        theme
      }) => {
        this.setData({
          theme
        });
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
    wx.reportAnalytics('click_view_programmatically', {});
  }

});
},{"./index.json":10,"./index.wxml":12}],12:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],13:[function(require,module,exports){
module.exports={
  "navigationBarTitleText": "ad"
}
},{}],14:[function(require,module,exports){

    var pageConfig = require('./ad.json')
    require('./ad.wxml')
    var pagePath = 'pages/ad/ad'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

const info = wx.getSystemInfoSync();
Page({
  onShareAppMessage() {
    return {
      title: 'ad',
      path: 'page/component/pages/ad/ad'
    };
  },

  data: {
    platform: info.platform
  }
});
},{"./ad.json":13,"./ad.wxml":15}],15:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],16:[function(require,module,exports){
module.exports={
  "usingComponents": {},
  "navigationBarTitleText": "aria-component"
}
},{}],17:[function(require,module,exports){

    var pageConfig = require('./aria-component.json')
    require('./aria-component.wxml')
    var pagePath = 'pages/aria-component/aria-component'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

// miniprogram/page/component/pages/aria-component/aria-component.js
Page({
  onShareAppMessage() {
    return {
      title: '无障碍访问',
      path: 'page/component/pages/aria-component/aria-component'
    };
  }

});
},{"./aria-component.json":16,"./aria-component.wxml":18}],18:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],19:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "button"
}

},{}],20:[function(require,module,exports){

    var pageConfig = require('./button.json')
    require('./button.wxml')
    var pagePath = 'pages/button/button'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

const types = ['default', 'primary', 'warn'];
const pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },

  onShareAppMessage() {
    return {
      title: 'button',
      path: 'page/component/pages/button/button'
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
  },

  handleGetUserInfo(e) {
    console.log(e.detail.userInfo);
  }

};

for (let i = 0; i < types.length; ++i) {
  (function (type) {
    pageObject[type] = function () {
      const key = type + 'Size';
      const changedData = {};
      changedData[key] = this.data[key] === 'default' ? 'mini' : 'default';
      this.setData(changedData);
    };
  })(types[i]);
}

Page(pageObject);
},{"./button.json":19,"./button.wxml":21}],21:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],22:[function(require,module,exports){
module.exports={
  "navigationBarTitleText": "camera"
}
},{}],23:[function(require,module,exports){

    var pageConfig = require('./camera-scan-code.json')
    require('./camera-scan-code.wxml')
    var pagePath = 'pages/camera-scan-code/camera-scan-code'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'camera',
      path: 'page/component/pages/camera-scan-code/camera-scan-code'
    };
  },

  data: {
    result: {}
  },

  onReady() {
    wx.showModal({
      title: '提示',
      content: '将摄像头对准一维码即可扫描',
      showCancel: false
    });
  },

  scanCode(e) {
    console.log('scanCode:', e);
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
},{"./camera-scan-code.json":22,"./camera-scan-code.wxml":24}],24:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],25:[function(require,module,exports){
arguments[4][22][0].apply(exports,arguments)
},{"dup":22}],26:[function(require,module,exports){

    var pageConfig = require('./camera.json')
    require('./camera.wxml')
    var pagePath = 'pages/camera/camera'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

const vs = `
  attribute vec3 aPos;
  attribute vec2 aVertexTextureCoord;
  varying highp vec2 vTextureCoord;

  void main(void){
    gl_Position = vec4(aPos, 1);
    vTextureCoord = aVertexTextureCoord;
  }
`;
const fs = `
  varying highp vec2 vTextureCoord;
  uniform sampler2D uSampler;

  void main(void) {
    gl_FragColor = texture2D(uSampler, vTextureCoord);
  }
`;
const vertex = [-1, -1, 0.0, 1, -1, 0.0, 1, 1, 0.0, -1, 1, 0.0];
const vertexIndice = [0, 1, 2, 0, 2, 3];
const texCoords = [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0];

function createShader(gl, src, type) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Error compiling shader: ' + gl.getShaderInfoLog(shader));
  }

  return shader;
}

const buffers = {};

function createRenderer(canvas, width, height) {
  const gl = canvas.getContext("webgl");

  if (!gl) {
    console.error('Unable to get webgl context.');
    return;
  }

  const info = wx.getSystemInfoSync();
  gl.canvas.width = info.pixelRatio * width;
  gl.canvas.height = info.pixelRatio * height;
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  const vertexShader = createShader(gl, vs, gl.VERTEX_SHADER);
  const fragmentShader = createShader(gl, fs, gl.FRAGMENT_SHADER);
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Unable to initialize the shader program.');
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
  const aVertexPosition = gl.getAttribLocation(program, 'aPos');
  gl.vertexAttribPointer(aVertexPosition, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(aVertexPosition);
  buffers.trianglesTexCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.trianglesTexCoordBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texCoords), gl.STATIC_DRAW);
  const vertexTexCoordAttribute = gl.getAttribLocation(program, "aVertexTextureCoord");
  gl.enableVertexAttribArray(vertexTexCoordAttribute);
  gl.vertexAttribPointer(vertexTexCoordAttribute, 2, gl.FLOAT, false, 0, 0);
  const samplerUniform = gl.getUniformLocation(program, 'uSampler');
  gl.uniform1i(samplerUniform, 0);
  return (arrayBuffer, width, height) => {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, arrayBuffer);
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
  };
}

Page({
  onShareAppMessage() {
    return {
      title: 'camera',
      path: 'page/component/pages/camera/camera'
    };
  },

  data: {
    src: '',
    videoSrc: '',
    position: 'back',
    mode: 'scanCode',
    result: {},
    frameWidth: 0,
    frameHeight: 0,
    width: 288,
    height: 358,
    showCanvas: false
  },

  onReady() {
    this.ctx = wx.createCameraContext(); // const selector = wx.createSelectorQuery();
    // selector.select('#webgl')
    // .node(this.init)
    // .exec()
  },

  init(res) {
    if (this.listener) {
      this.listener.stop();
    }

    const canvas = res.node;
    const render = createRenderer(canvas, this.data.width, this.data.height); // if (!render || typeof render !== 'function') return

    this.listener = this.ctx.onCameraFrame(frame => {
      render(new Uint8Array(frame.data), frame.width, frame.height);
      const {
        frameWidth,
        frameHeight
      } = this.data;
      if (frameWidth === frame.width && frameHeight == frame.height) return;
      this.setData({
        frameWidth: frame.width,
        frameHeight: frame.height
      });
    });
    this.listener.start();
  },

  takePhoto() {
    this.ctx.takePhoto({
      quality: 'high',
      success: res => {
        this.setData({
          src: res.tempImagePath
        });
      }
    });
  },

  startRecord() {
    this.ctx.startRecord({
      success: () => {
        console.log('startRecord');
      }
    });
  },

  stopRecord() {
    this.ctx.stopRecord({
      success: res => {
        this.setData({
          src: res.tempThumbPath,
          videoSrc: res.tempVideoPath
        });
      }
    });
  },

  togglePosition() {
    this.setData({
      position: this.data.position === 'front' ? 'back' : 'front'
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
        selector.select('#webgl').node(this.init).exec();
      }
    });
  }

});
},{"./camera.json":25,"./camera.wxml":27}],27:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],28:[function(require,module,exports){
module.exports={
  "navigationBarTitleText": "canvas 2d"
}

},{}],29:[function(require,module,exports){

    var pageConfig = require('./canvas-2d.json')
    require('./canvas-2d.wxml')
    var pagePath = 'pages/canvas-2d/canvas-2d'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _util = require("../../../../util/util");

Page({
  onShareAppMessage() {
    return {
      title: 'canvas',
      path: 'page/component/pages/canvas-2d/canvas-2d'
    };
  },

  data: {
    canIUse: true
  },

  onReady() {
    // 解决基础库小于 2.7.0 的兼容问题
    const {
      SDKVersion
    } = wx.getSystemInfoSync();
    console.log(SDKVersion);

    if ((0, _util.compareVersion)(SDKVersion, '2.7.0') < 0) {
      console.log('123');
      this.setData({
        canIUse: false
      });
    } else {
      // canvas2D
      this.position2D = {
        x: 150,
        y: 150,
        vx: 2,
        vy: 2
      };
      this.x = -100;
      wx.createSelectorQuery().select('#canvas2D').fields({
        node: true,
        size: true
      }).exec(this.init.bind(this));
    }
  },

  init(res) {
    const width = res[0].width;
    const height = res[0].height;
    const canvas = res[0].node; // 不支持2d

    if (!canvas) {
      this.setData({
        canIUse: false
      });
      return;
    }

    const ctx = canvas.getContext('2d');
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

    img.src = './car.png';
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
      ctx.fillStyle = '#1aad19';
      ctx.strokeStyle = 'rgba(1,1,1,0)';
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
    if (!this._img) return;

    if (this.x > 350) {
      this.x = -100;
    }

    ctx.drawImage(this._img, this.x++, 150 - 25, 100, 50);
    ctx.restore();
  },

  onUnload() {// clearInterval(this.interval)
  }

});
},{"../../../../util/util":276,"./canvas-2d.json":28,"./canvas-2d.wxml":30}],30:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],31:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "canvas"
}

},{}],32:[function(require,module,exports){

    var pageConfig = require('./canvas.json')
    require('./canvas.wxml')
    var pagePath = 'pages/canvas/canvas'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _util = require("../../../../util/util");

Page({
  onShareAppMessage() {
    return {
      title: 'canvas',
      path: 'page/component/pages/canvas/canvas'
    };
  },

  data: {
    canIUse: true
  },

  onReady() {
    // 解决基础库小于 2.7.0 的兼容问题
    const {
      SDKVersion
    } = wx.getSystemInfoSync();

    if ((0, _util.compareVersion)(SDKVersion, '2.7.0') < 0) {
      console.log('123');
      this.setData({
        canIUse: false
      });
    } else {
      // canvas
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

  init(res) {
    const width = res[0].width;
    const height = res[0].height;
    const canvas = res[0].node;
    const ctx = canvas.getContext('2d');
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

    img.src = './car.png';
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

    const context = wx.createCanvasContext('canvas');

    function ball(x, y) {
      context.beginPath(0);
      context.arc(x, y, 5, 0, Math.PI * 2);
      context.setFillStyle('#1aad19');
      context.setStrokeStyle('rgba(1,1,1,0)');
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
},{"../../../../util/util":276,"./canvas.json":31,"./canvas.wxml":33}],33:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],34:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "checkbox"
}

},{}],35:[function(require,module,exports){

    var pageConfig = require('./checkbox.json')
    require('./checkbox.wxml')
    var pagePath = 'pages/checkbox/checkbox'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'checkbox',
      path: 'page/component/pages/checkbox/checkbox'
    };
  },

  data: {
    items: [{
      value: 'USA',
      name: '美国'
    }, {
      value: 'CHN',
      name: '中国',
      checked: 'true'
    }, {
      value: 'BRA',
      name: '巴西'
    }, {
      value: 'JPN',
      name: '日本'
    }, {
      value: 'ENG',
      name: '英国'
    }, {
      value: 'FRA',
      name: '法国'
    }]
  },

  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
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
},{"./checkbox.json":34,"./checkbox.wxml":36}],36:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],37:[function(require,module,exports){
module.exports={
  "navigationBarTitleText": "cover-view"
}
},{}],38:[function(require,module,exports){

    var pageConfig = require('./cover-view.json')
    require('./cover-view.wxml')
    var pagePath = 'pages/cover-view/cover-view'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'cover-view',
      path: 'page/component/pages/cover-view/cover-view'
    };
  },

  data: {
    latitude: 23.099994,
    longitude: 113.324520
  }
});
},{"./cover-view.json":37,"./cover-view.wxml":39}],39:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],40:[function(require,module,exports){
module.exports={
  "navigationBarTitleText": "小程序组件文档"
}
},{}],41:[function(require,module,exports){

    var pageConfig = require('./doc-web-view.json')
    require('./doc-web-view.wxml')
    var pagePath = 'pages/doc-web-view/doc-web-view'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: '小程序组件文档',
      path: 'page/component/pages/doc-web-view/doc-web-view'
    };
  }

});
},{"./doc-web-view.json":40,"./doc-web-view.wxml":42}],42:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],43:[function(require,module,exports){
module.exports={
  "navigationBarTitleText": "editor",
  "disableScroll": true
}
},{}],44:[function(require,module,exports){

    var pageConfig = require('./editor.json')
    require('./editor.wxml')
    var pagePath = 'pages/editor/editor'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'editor',
      path: 'page/component/pages/editor/editor'
    };
  },

  data: {
    formats: {},
    readOnly: false,
    placeholder: '开始输入...',
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
    const {
      platform,
      safeArea,
      model,
      screenHeight
    } = wx.getSystemInfoSync();
    let safeHeight;

    if (safeArea) {
      safeHeight = screenHeight - safeArea.bottom;
    } else {
      safeHeight = 32;
    }

    this._safeHeight = safeHeight;
    let isIOS = platform === 'ios';
    this.setData({
      isIOS,
      safeHeight,
      toolBarHeight: isIOS ? safeHeight + 50 : 50
    });
    const that = this;
    this.updatePosition(0);
    let keyboardHeight = 0;
    wx.onKeyboardHeightChange(res => {
      if (res.height === keyboardHeight) {
        return;
      }

      const duration = res.height > 0 ? res.duration * 1000 : 0;
      keyboardHeight = res.height;
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
    const {
      windowHeight,
      platform
    } = wx.getSystemInfoSync();
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
    const {
      statusBarHeight,
      platform
    } = systemInfo;
    const isIOS = platform === 'ios';
    const navigationBarHeight = isIOS ? 44 : 48;
    return statusBarHeight + navigationBarHeight;
  },

  onEditorReady() {
    const that = this;
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context;
    }).exec();
  },

  blur() {
    this.editorCtx.blur();
  },

  format(e) {
    let {
      name,
      value
    } = e.target.dataset;
    if (!name) return; // console.log('format', name, value)

    this.editorCtx.format(name, value);
  },

  onStatusChange(e) {
    const formats = e.detail;
    this.setData({
      formats
    });
  },

  insertDivider() {
    this.editorCtx.insertDivider({
      success: function () {
        console.log('insert divider success');
      }
    });
  },

  clear() {
    this.editorCtx.clear({
      success: function (res) {
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
      success: function (res) {
        that.editorCtx.insertImage({
          src: res.tempFilePaths[0],
          data: {
            id: 'abcd',
            role: 'god'
          },
          width: '80%',
          success: function () {
            console.log('insert image success');
          }
        });
      }
    });
  }

});
},{"./editor.json":43,"./editor.wxml":45}],45:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],46:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "form"
}

},{}],47:[function(require,module,exports){

    var pageConfig = require('./form.json')
    require('./form.wxml')
    var pagePath = 'pages/form/form'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'form',
      path: 'page/component/pages/form/form'
    };
  },

  data: {
    pickerHidden: true,
    chosen: ''
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
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value);
    this.setData({
      chosen: ''
    });
  }

});
},{"./form.json":46,"./form.wxml":48}],48:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],49:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "icon"
}

},{}],50:[function(require,module,exports){

    var pageConfig = require('./icon.json')
    require('./icon.wxml')
    var pagePath = 'pages/icon/icon'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'icon',
      path: 'page/component/pages/icon/icon'
    };
  }

});
},{"./icon.json":49,"./icon.wxml":51}],51:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],52:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "image"
}

},{}],53:[function(require,module,exports){

    var pageConfig = require('./image.json')
    require('./image.wxml')
    var pagePath = 'pages/image/image'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'image',
      path: 'page/component/pages/image/image'
    };
  },

  onLoad() {
    wx.cloud.getTempFileURL({
      fileList: [{
        fileID: 'cloud://release-b86096.7265-release-b86096-1258211818/开发者社区.webp',
        maxAge: 60 * 60
      }]
    }).then(res => {
      console.log(res);
      this.setData({
        webpImageUrl: res.fileList[0].tempFileURL
      });
    }).catch(error => {
      console.log('CLOUD：image 临时链接获取失败');
    });
  },

  data: {
    imageUrl: 'cloud://release-b86096.7265-release-b86096-1258211818/demo.jpg',
    webpImageURL: ''
  }
});
},{"./image.json":52,"./image.wxml":54}],54:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],55:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "input"
}

},{}],56:[function(require,module,exports){

    var pageConfig = require('./input.json')
    require('./input.wxml')
    var pagePath = 'pages/input/input'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'input',
      path: 'page/component/pages/input/input'
    };
  },

  data: {
    focus: false,
    inputValue: ''
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
      // 光标在中间
      left = e.detail.value.slice(0, pos); // 计算光标的位置

      pos = left.replace(/11/g, '2').length;
    } // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置


    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }; // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },

  bindHideKeyboard(e) {
    if (e.detail.value === '123') {
      // 收起键盘
      wx.hideKeyboard();
    }
  }

});
},{"./input.json":55,"./input.wxml":57}],57:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],58:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "label"
}

},{}],59:[function(require,module,exports){

    var pageConfig = require('./label.json')
    require('./label.wxml')
    var pagePath = 'pages/label/label'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'label',
      path: 'page/component/pages/label/label'
    };
  },

  data: {
    checkboxItems: [{
      name: 'USA',
      value: '美国'
    }, {
      name: 'CHN',
      value: '中国',
      checked: 'true'
    }],
    radioItems: [{
      name: 'USA',
      value: '美国'
    }, {
      name: 'CHN',
      value: '中国',
      checked: 'true'
    }],
    hidden: false
  },

  checkboxChange(e) {
    const checked = e.detail.value;
    const changed = {};

    for (let i = 0; i < this.data.checkboxItems.length; i++) {
      if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
        changed['checkboxItems[' + i + '].checked'] = true;
      } else {
        changed['checkboxItems[' + i + '].checked'] = false;
      }
    }

    this.setData(changed);
  },

  radioChange(e) {
    const checked = e.detail.value;
    const changed = {};

    for (let i = 0; i < this.data.radioItems.length; i++) {
      if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
        changed['radioItems[' + i + '].checked'] = true;
      } else {
        changed['radioItems[' + i + '].checked'] = false;
      }
    }

    this.setData(changed);
  },

  tapEvent() {
    console.log('按钮被点击');
  }

});
},{"./label.json":58,"./label.wxml":60}],60:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],61:[function(require,module,exports){
module.exports={
  "usingComponents": {},
  "navigationBarTitleText": "live-player"
}
},{}],62:[function(require,module,exports){

    var pageConfig = require('./live-player.json')
    require('./live-player.wxml')
    var pagePath = 'pages/live-player/live-player'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'live-player',
      path: 'page/component/pages/live-player/live-player'
    };
  },

  data: {
    videoSrc: ""
  },

  onReady(res) {
    this.ctx = wx.createLivePlayerContext('player');
  },

  handleScanQRCode() {
    wx.scanCode({
      complete: res => {
        const {
          result
        } = res;
        this.setData({
          videoSrc: result
        });
      }
    });
  },

  handleLivePlayerStateChange(e) {
    console.log('live-player code:', e.detail.code);
  },

  handleLivePlayerError(e) {
    console.error('live-player error:', e.detail.errMsg);
  },

  handlePlay() {
    this.ctx.play({
      success: res => {
        console.log('play success');
      },
      fail: res => {
        console.log('play fail');
      }
    });
  },

  handlePause() {
    this.ctx.pause({
      success: res => {
        console.log('pause success');
      },
      fail: res => {
        console.log('pause fail');
      }
    });
  },

  handleStop() {
    this.ctx.stop({
      success: res => {
        console.log('stop success');
      },
      fail: res => {
        console.log('stop fail');
      }
    });
  },

  handleResume() {
    this.ctx.resume({
      success: res => {
        console.log('resume success');
      },
      fail: res => {
        console.log('resume fail');
      }
    });
  },

  handleMute() {
    this.ctx.mute({
      success: res => {
        console.log('mute success');
      },
      fail: res => {
        console.log('mute fail');
      }
    });
  },

  handleVideoSrcInput(e) {
    this.setData({
      videoSrc: e.detail.value
    });
  }

});
},{"./live-player.json":61,"./live-player.wxml":63}],63:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],64:[function(require,module,exports){
module.exports={
  "usingComponents": {},
  "navigationBarTitleText": "live-pusher"
}
},{}],65:[function(require,module,exports){

    var pageConfig = require('./live-pusher.json')
    require('./live-pusher.wxml')
    var pagePath = 'pages/live-pusher/live-pusher'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'live-pusher',
      path: 'page/component/pages/live-pusher/live-pusher'
    };
  },

  data: {
    videoSrc: ''
  },

  onReady(res) {
    this.ctx = wx.createLivePusherContext('pusher');
  },

  handleLivePusherStateChange(e) {
    console.log('live-pusher code:', e.detail.code);
  },

  handleLivePusherError(e) {
    console.error('live-pusher error:', e.detail.errMsg);
  },

  handleStart() {
    this.ctx.start({
      success: res => {
        console.log('start success');
      },
      fail: res => {
        console.log('start fail');
      }
    });
  },

  handleScanQRCode() {
    wx.scanCode({
      complete: res => {
        const {
          result
        } = res;
        this.setData({
          videoSrc: result
        });
      }
    });
  },

  handlePause() {
    this.ctx.pause({
      success: res => {
        console.log('pause success');
      },
      fail: res => {
        console.log('pause fail');
      }
    });
  },

  handleStop() {
    this.ctx.stop({
      success: res => {
        console.log('stop success');
      },
      fail: res => {
        console.log('stop fail');
      }
    });
  },

  handleResume() {
    this.ctx.resume({
      success: res => {
        console.log('resume success');
      },
      fail: res => {
        console.log('resume fail');
      }
    });
  },

  handleSwitchCamera() {
    this.ctx.switchCamera({
      success: res => {
        console.log('switch camera success');
      },
      fail: res => {
        console.log('switch camera fail');
      }
    });
  },

  handleVideoSrcInput(e) {
    this.setData({
      videoSrc: e.detail.value
    });
  }

});
},{"./live-pusher.json":64,"./live-pusher.wxml":66}],66:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],67:[function(require,module,exports){
module.exports={
  "navigationBarTitleText": "map底图样式"
}
},{}],68:[function(require,module,exports){

    var pageConfig = require('./map-styles.json')
    require('./map-styles.wxml')
    var pagePath = 'pages/map-styles/map-styles'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'map底图样式',
      path: 'page/component/pages/map-styles/map-styles'
    };
  }

});
},{"./map-styles.json":67,"./map-styles.wxml":69}],69:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],70:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "map"
}

},{}],71:[function(require,module,exports){

    var pageConfig = require('./map.json')
    require('./map.wxml')
    var pagePath = 'pages/map/map'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'map',
      path: 'page/component/pages/map/map'
    };
  },

  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/image/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/image/location.png'
    }],
    polygons: [{
      points: [{
        latitude: 23.099994,
        longitude: 113.324520
      }, {
        latitude: 23.098994,
        longitude: 113.323520
      }, {
        latitude: 23.098994,
        longitude: 113.325520
      }],
      strokeWidth: 3,
      strokeColor: '#FFFFFFAA'
    }],
    subKey: 'B5QBZ-7JTLU-DSSVA-2BRJ3-TNXLF-2TBR7',
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
},{"./map.json":70,"./map.wxml":72}],72:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],73:[function(require,module,exports){
module.exports={
  "navigationBarTitleText": "movable-view"
}
},{}],74:[function(require,module,exports){

    var pageConfig = require('./movable-view.json')
    require('./movable-view.wxml')
    var pagePath = 'pages/movable-view/movable-view'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'movable-view',
      path: 'page/component/pages/movable-view/movable-view'
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
},{"./movable-view.json":73,"./movable-view.wxml":75}],75:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],76:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "navigatePage"
}

},{}],77:[function(require,module,exports){

    var pageConfig = require('./navigate.json')
    require('./navigate.wxml')
    var pagePath = 'pages/navigator/navigate'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'navigatePage',
      path: 'page/component/pages/navigator/navigate'
    };
  },

  onLoad(options) {
    console.log(options);
    this.setData({
      title: options.title
    });
  }

});
},{"./navigate.json":76,"./navigate.wxml":78}],78:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],79:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "navigator"
}

},{}],80:[function(require,module,exports){

    var pageConfig = require('./navigator.json')
    require('./navigator.wxml')
    var pagePath = 'pages/navigator/navigator'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'navigator',
      path: 'page/component/pages/navigator/navigator'
    };
  }

});
},{"./navigator.json":79,"./navigator.wxml":81}],81:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],82:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "redirectPage"
}

},{}],83:[function(require,module,exports){

    var pageConfig = require('./redirect.json')
    require('./redirect.wxml')
    var pagePath = 'pages/navigator/redirect'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'redirectPage',
      path: 'page/component/pages/navigator/redirect'
    };
  },

  onLoad(options) {
    console.log(options);
    this.setData({
      title: options.title
    });
  }

});
},{"./redirect.json":82,"./redirect.wxml":84}],84:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],85:[function(require,module,exports){
module.exports={
  "navigationBarTitleText": "open-data"
}
},{}],86:[function(require,module,exports){

    var pageConfig = require('./open-data.json')
    require('./open-data.wxml')
    var pagePath = 'pages/open-data/open-data'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'open-data',
      path: 'page/component/pages/open-data/open-data'
    };
  }

});
},{"./open-data.json":85,"./open-data.wxml":87}],87:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],88:[function(require,module,exports){
module.exports={
  "navigationBarTitleText": "picker-view"
}

},{}],89:[function(require,module,exports){

    var pageConfig = require('./picker-view.json')
    require('./picker-view.wxml')
    var pagePath = 'pages/picker-view/picker-view'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

const date = new Date();
const years = [];
const months = [];
const days = [];

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
      title: 'picker-view',
      path: 'page/component/pages/picker-view/picker-view'
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
},{"./picker-view.json":88,"./picker-view.wxml":90}],90:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],91:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "picker"
}

},{}],92:[function(require,module,exports){

    var pageConfig = require('./picker.json')
    require('./picker.wxml')
    var pagePath = 'pages/picker/picker'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'picker',
      path: 'page/component/pages/picker/picker'
    };
  },

  data: {
    array: ['中国', '美国', '巴西', '日本'],
    index: 0,
    date: '2016-09-01',
    time: '12:01'
  },

  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
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
},{"./picker.json":91,"./picker.wxml":93}],93:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],94:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "progress"
}

},{}],95:[function(require,module,exports){

    var pageConfig = require('./progress.json')
    require('./progress.wxml')
    var pagePath = 'pages/progress/progress'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'progress',
      path: 'page/component/pages/progress/progress'
    };
  }

});
},{"./progress.json":94,"./progress.wxml":96}],96:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],97:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "radio"
}

},{}],98:[function(require,module,exports){

    var pageConfig = require('./radio.json')
    require('./radio.wxml')
    var pagePath = 'pages/radio/radio'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'radio',
      path: 'page/component/pages/radio/radio'
    };
  },

  data: {
    items: [{
      value: 'USA',
      name: '美国'
    }, {
      value: 'CHN',
      name: '中国',
      checked: 'true'
    }, {
      value: 'BRA',
      name: '巴西'
    }, {
      value: 'JPN',
      name: '日本'
    }, {
      value: 'ENG',
      name: '英国'
    }, {
      value: 'FRA',
      name: '法国'
    }]
  },

  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    const items = this.data.items;

    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value;
    }

    this.setData({
      items
    });
  }

});
},{"./radio.json":97,"./radio.wxml":99}],99:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],100:[function(require,module,exports){
module.exports={
  "navigationBarTitleText": "rich-text"
}
},{}],101:[function(require,module,exports){

    var pageConfig = require('./rich-text.json')
    require('./rich-text.wxml')
    var pagePath = 'pages/rich-text/rich-text'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

const htmlSnip = `<div class="div_class">
  <h1>Title</h1>
  <p class="p">
    Life is&nbsp;<i>like</i>&nbsp;a box of
    <b>&nbsp;chocolates</b>.
  </p>
</div>
`;
const nodeSnip = `Page({
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
      title: 'rich-text',
      path: 'page/component/pages/rich-text/rich-text'
    };
  },

  data: {
    htmlSnip,
    nodeSnip,
    renderedByHtml: false,
    renderedByNode: false,
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: #1AAD19;'
      },
      children: [{
        type: 'text',
        text: 'You never know what you\'re gonna get.'
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
},{"./rich-text.json":100,"./rich-text.wxml":102}],102:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],103:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "scroll-view",
    "pageOrientation": "auto"

}

},{}],104:[function(require,module,exports){

    var pageConfig = require('./scroll-view.json')
    require('./scroll-view.wxml')
    var pagePath = 'pages/scroll-view/scroll-view'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

const order = ['demo1', 'demo2', 'demo3'];
Page({
  onLoad() {
    this.animate('#scroll-sample-object1', [{
      borderRadius: '0',
      offset: 0
    }, {
      borderRadius: '25%',
      offset: .5
    }, {
      borderRadius: '50%',
      offset: 1
    }], 2000, {
      scrollSource: '#scroll-view_D',
      timeRange: 2000,
      startScrollOffset: 0,
      endScrollOffset: 150
    });
    this.animate('#scroll-sample-object2', [{
      opacity: 1,
      offset: 0
    }, {
      opacity: .5,
      offset: .5
    }, {
      opacity: .3,
      offset: 1
    }], 2000, {
      scrollSource: '#scroll-view_D',
      timeRange: 2000,
      startScrollOffset: 150,
      endScrollOffset: 300
    });
    this.animate('#scroll-sample-object3', [{
      background: "white",
      offset: 0
    }, {
      background: "yellow",
      offset: 1
    }], 2000, {
      scrollSource: '#scroll-view_D',
      timeRange: 2000,
      startScrollOffset: 300,
      endScrollOffset: 400
    });
  },

  onPulling(e) {
    console.log('onPulling:', e);
  },

  onRefresh() {
    if (this._freshing) return;
    this._freshing = true;
    setTimeout(() => {
      this.setData({
        triggered: false
      });
      this._freshing = false;
    }, 3000);
  },

  onRestore(e) {
    console.log('onRestore:', e);
  },

  onAbort(e) {
    console.log('onAbort', e);
  },

  onShareAppMessage() {
    return {
      title: 'scroll-view',
      path: 'page/component/pages/scroll-view/scroll-view'
    };
  },

  data: {
    toView: 'green',
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
},{"./scroll-view.json":103,"./scroll-view.wxml":105}],105:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],106:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "slider"
}

},{}],107:[function(require,module,exports){

    var pageConfig = require('./slider.json')
    require('./slider.wxml')
    var pagePath = 'pages/slider/slider'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

const pageData = {
  onShareAppMessage() {
    return {
      title: 'slider',
      path: 'page/component/pages/slider/slider'
    };
  }

};

for (let i = 1; i < 5; ++i) {
  (function (index) {
    pageData['slider' + index + 'change'] = function (e) {
      console.log('slider' + index + '发生change事件，携带值为', e.detail.value);
    };
  })(i);
}

Page(pageData);
},{"./slider.json":106,"./slider.wxml":108}],108:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],109:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "swiper"
}

},{}],110:[function(require,module,exports){

    var pageConfig = require('./swiper.json')
    require('./swiper.wxml')
    var pagePath = 'pages/swiper/swiper'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    };
  },

  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
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
},{"./swiper.json":109,"./swiper.wxml":111}],111:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],112:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "switch"
}

},{}],113:[function(require,module,exports){

    var pageConfig = require('./switch.json')
    require('./switch.wxml')
    var pagePath = 'pages/switch/switch'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'switch',
      path: 'page/component/pages/switch/switch'
    };
  },

  switch1Change(e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value);
  },

  switch2Change(e) {
    console.log('switch2 发生 change 事件，携带值为', e.detail.value);
  }

});
},{"./switch.json":112,"./switch.wxml":114}],114:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],115:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "text"
}

},{}],116:[function(require,module,exports){

    var pageConfig = require('./text.json')
    require('./text.wxml')
    var pagePath = 'pages/text/text'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

const texts = ['2011年1月，微信1.0发布', '同年5月，微信2.0语音对讲发布', '10月，微信3.0新增摇一摇功能', '2012年3月，微信用户突破1亿', '4月份，微信4.0朋友圈发布', '同年7月，微信4.2发布公众平台', '2013年8月，微信5.0发布微信支付', '2014年9月，企业号发布', '同月，发布微信卡包', '2015年1月，微信第一条朋友圈广告', '2016年1月，企业微信发布', '2017年1月，小程序发布', '......'];
Page({
  onShareAppMessage() {
    return {
      title: 'text',
      path: 'page/component/pages/text/text'
    };
  },

  data: {
    text: '',
    canAdd: true,
    canRemove: false
  },
  extraLine: [],

  add() {
    this.extraLine.push(texts[this.extraLine.length % 12]);
    this.setData({
      text: this.extraLine.join('\n'),
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
        text: this.extraLine.join('\n'),
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
},{"./text.json":115,"./text.wxml":117}],117:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],118:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "textarea"
}

},{}],119:[function(require,module,exports){

    var pageConfig = require('./textarea.json')
    require('./textarea.wxml')
    var pagePath = 'pages/textarea/textarea'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'textarea',
      path: 'page/component/pages/textarea/textarea'
    };
  },

  data: {
    focus: false
  },

  bindTextAreaBlur(e) {
    console.log(e.detail.value);
  }

});
},{"./textarea.json":118,"./textarea.wxml":120}],120:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],121:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "video"
}

},{}],122:[function(require,module,exports){

    var pageConfig = require('./video.json')
    require('./video.wxml')
    var pagePath = 'pages/video/video'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

function getRandomColor() {
  const rgb = [];

  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16);
    color = color.length === 1 ? '0' + color : color;
    rgb.push(color);
  }

  return '#' + rgb.join('');
}

Page({
  onShareAppMessage() {
    return {
      title: 'video',
      path: 'page/component/pages/video/video'
    };
  },

  onReady() {
    this.videoContext = wx.createVideoContext('myVideo');
  },

  onHide() {},

  inputValue: '',
  data: {
    enableAutoRotation: true,
    src: '',
    danmuList: [{
      text: '第 1s 出现的弹幕',
      color: '#ff0000',
      time: 1
    }, {
      text: '第 3s 出现的弹幕',
      color: '#ff00ff',
      time: 3
    }]
  },

  bindInputBlur(e) {
    this.inputValue = e.detail.value;
  },

  bindButtonTap() {
    const that = this;
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],

      success(res) {
        that.setData({
          src: res.tempFilePath
        });
      }

    });
  },

  bindVideoEnterPictureInPicture() {
    console.log('进入小窗模式');
  },

  bindVideoLeavePictureInPicture() {
    console.log('退出小窗模式');
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
    console.log('视频错误信息:');
    console.log(e.detail.errMsg);
  },

  handleSwitchChange(e) {
    this.setData({
      enableAutoRotation: e.detail.value
    });
  }

});
},{"./video.json":121,"./video.wxml":123}],123:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],124:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "view"
}

},{}],125:[function(require,module,exports){

    var pageConfig = require('./view.json')
    require('./view.wxml')
    var pagePath = 'pages/view/view'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'view',
      path: 'page/component/pages/view/view'
    };
  }

});
},{"./view.json":124,"./view.wxml":126}],126:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],127:[function(require,module,exports){
module.exports={
    "navigationBarTitleText": "webview"
}

},{}],128:[function(require,module,exports){

    var pageConfig = require('./web-view.json')
    require('./web-view.wxml')
    var pagePath = 'pages/web-view/web-view'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'webview',
      path: 'page/component/pages/web-view/web-view'
    };
  }

});
},{"./web-view.json":127,"./web-view.wxml":129}],129:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],130:[function(require,module,exports){
module.exports={
  "navigationBarTitleText": "webgl"
}

},{}],131:[function(require,module,exports){

    var pageConfig = require('./webgl.json')
    require('./webgl.wxml')
    var pagePath = 'pages/webgl/webgl'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _util = require("../../../../util/util");

//WebGL
const vs = `
  precision mediump float;

  attribute vec2 vertPosition;
  attribute vec3 vertColor;
  varying vec3 fragColor;

  void main() {
    gl_Position = vec4(vertPosition, 0.0, 1.0);
    fragColor = vertColor;
  }
`;
const fs = `
  precision mediump float;

  varying vec3 fragColor;
  void main() {
    gl_FragColor = vec4(fragColor, 1.0);
  }
`;
const triangleVertices = [0.0, 0.5, 1.0, 1.0, 0.0, -0.5, -0.5, 0.7, 0.0, 1.0, 0.5, -0.5, 0.1, 1.0, 0.6];
Page({
  onShareAppMessage() {
    return {
      title: 'canvas',
      path: 'page/component/pages/webgl/webgl'
    };
  },

  data: {
    canIUse: true
  },

  onReady() {
    // 解决基础库小于 2.7.0 的兼容问题
    const {
      SDKVersion
    } = wx.getSystemInfoSync();

    if ((0, _util.compareVersion)(SDKVersion, '2.7.0') < 0) {
      console.log('123');
      this.setData({
        canIUse: false
      });
    } else {
      // WebGL
      wx.createSelectorQuery().select('#canvasWebGL').node().exec(res => {
        const canvas = res[0].node;
        this.renderWebGL(canvas);
      });
    }
  },

  renderWebGL(canvas) {
    // 不支持webgl
    if (!canvas) {
      this.setData({
        canIUse: false
      });
      return;
    }

    const gl = canvas.getContext('webgl');

    if (!gl) {
      console.error('gl init failed', gl);
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
      const positionAttribLocation = gl.getAttribLocation(prog, 'vertPosition');
      const colorAttribLocation = gl.getAttribLocation(prog, 'vertColor');
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
},{"../../../../util/util":276,"./webgl.json":130,"./webgl.wxml":132}],132:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],133:[function(require,module,exports){

    var pageConfig = {}
    
    var pagePath = 'weui/base/CustomPage'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _theme = _interopRequireDefault(require("./behaviors/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CustomPage = function (options) {
  return Page(Object.assign({}, options, {
    behaviors: [_theme.default].concat(options.behaviors || []),

    onLoad(query) {
      const app = getApp();

      if (this.themeChanged) {
        this.themeChanged(app.globalData.theme);
        app.watchThemeChange && app.watchThemeChange(this.themeChanged);
        options.onLoad && options.onLoad.call(this, query);
      }
    },

    onUnload() {
      const app = getApp();

      if (this.themeChanged) {
        app.unWatchThemeChange && app.unWatchThemeChange(this.themeChanged);
        options.onUnload && options.onUnload.call(this);
      }
    }

  }));
};

var _default = CustomPage;
exports.default = _default;
},{"./behaviors/theme":134}],134:[function(require,module,exports){

    var pageConfig = {}
    
    var pagePath = 'base/behaviors/theme'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

module.exports = Behavior({
  data: {
    theme: 'light'
  },
  methods: {
    themeChanged(theme) {
      this.setData({
        theme
      });
    }

  }
});
},{}],135:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-actionSheet": "weui-miniprogram/actionsheet/actionsheet",
    "mp-icon": "weui-miniprogram/icon/icon"
  },
  "navigationBarTitleText": "actionsheet"

}

},{}],136:[function(require,module,exports){

    var pageConfig = require('./actionsheet.json')
    require('./actionsheet.wxml')
    var pagePath = 'example/actionsheet/actionsheet'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'actionsheet',
      path: 'page/weui/example/actionsheet/actionsheet'
    };
  },

  open: function () {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex);
        }
      }
    });
  },
  data: {
    showDialog: false,
    groups: [{
      text: '示例菜单',
      value: 1
    }, {
      text: '示例菜单',
      value: 2
    }, {
      text: '负向菜单',
      type: 'warn',
      value: 3
    }]
  },
  openDialog: function () {
    this.setData({
      showDialog: true
    });
  },
  closeDialog: function () {
    this.setData({
      showDialog: false
    });
  },

  btnClick(e) {
    console.log(e);
    this.closeDialog();
  }

});
},{"../../base/CustomPage":133,"./actionsheet.json":135,"./actionsheet.wxml":137}],137:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],138:[function(require,module,exports){
module.exports={
  "usingComponents": {},
  "navigationBarTitleText": "article"

}
},{}],139:[function(require,module,exports){

    var pageConfig = require('./article.json')
    require('./article.wxml')
    var pagePath = 'example/article/article'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'article',
      path: 'page/weui/example/article/article'
    };
  }

});
},{"../../base/CustomPage":133,"./article.json":138,"./article.wxml":140}],140:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],141:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-cells": "weui-miniprogram/cells/cells",
    "mp-cell": "weui-miniprogram/cell/cell",
    "mp-badge": "weui-miniprogram/badge/badge"
  },
  "navigationBarTitleText": "badge"

}
},{}],142:[function(require,module,exports){

    var pageConfig = require('./badge.json')
    require('./badge.wxml')
    var pagePath = 'example/badge/badge'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'badge',
      path: 'page/weui/example/badge/badge'
    };
  }

});
},{"../../base/CustomPage":133,"./badge.json":141,"./badge.wxml":143}],143:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],144:[function(require,module,exports){
module.exports={
  "disableScroll": true,

  "navigationBarTitleText": "barrage",
  "usingComponents": {
    "barrage": "miniprogram-barrage"
  }
}
},{}],145:[function(require,module,exports){

    var pageConfig = require('./barrage.json')
    require('./barrage.wxml')
    var pagePath = 'example/barrage/barrage'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  mockData
} = require('./utils');

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'barrage',
      path: 'page/weui/example/barrage/barrage'
    };
  },

  data: {
    src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    toggle: true,
    barrageValue: '',
    showBarrage: false
  },

  onReady() {
    this.addBarrage();
  },

  addBarrage() {
    const barrageComp = this.selectComponent('.barrage');
    this.barrage = barrageComp.getBarrageInstance({
      font: 'bold 16px sans-serif',
      // 字体
      duration: 15,
      // 弹幕时间 （移动 2000px 所需时长）
      lineHeight: 2,
      // 弹幕行高
      mode: 'overlap',
      // 弹幕重叠 overlap 不重叠 separate
      padding: [10, 10, 10, 10],
      // 弹幕区四周
      range: [0, 1],
      tunnelShow: false
    }); // this.barrage.open()
    // const data = mockData(100)
    // this.barrage.addData(data)
    // this.timer = setInterval(() => {
    //   const data = mockData(100);
    //   this.barrage.addData(data);
    // }, 2000)
  },

  fullscreenchange() {
    this.setData({
      toggle: false
    });
    setTimeout(() => {
      if (this.barrage) this.barrage.close();
      this.setData({
        toggle: true
      });
      this.addBarrage();
    }, 1000);
  },

  handleOpenClick() {
    this.setData({
      showBarrage: true
    });
    this.barrage.open();
    const data = mockData(3);
    this.barrage.addData(data);
    this.timer = setInterval(() => {
      const data = mockData(5);
      this.barrage.addData(data);
    }, 2000);
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
      barrageValue: ''
    });
  },

  handleTunnelShowClick() {
    this.barrage.showTunnel();
  },

  handleTunnelHideClick() {
    this.barrage.hideTunnel();
  }

});
},{"../../base/CustomPage":133,"./barrage.json":144,"./barrage.wxml":146,"./utils":147}],146:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],147:[function(require,module,exports){

    var pageConfig = {}
    
    var pagePath = 'example/barrage/utils'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

const msgs = ['666666', '保护', '妈妈我上电视了！！', '我要上电视！！', '老板晚上好', '前方高能预警', '主播迟到了~~~', '干的漂亮', '广东人民发来贺电'];
const color = ['red', 'rgb(0, 255, 0)', '#0000FF'];

const getRandom = (max = 10, min = 0) => Math.floor(Math.random() * (max - min) + min);

const mockData = (num, message = msgs) => {
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
  mockData
};
},{}],148:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-cells": "weui-miniprogram/cells/cells",
    "mp-cell": "weui-miniprogram/cell/cell",
    "mp-slideview": "weui-miniprogram/slideview/slideview"
  },
  "navigationBarTitleText": "cell"

}
},{}],149:[function(require,module,exports){
(function (global){(function (){

    var pageConfig = require('./cell.json')
    require('./cell.wxml')
    var pagePath = 'example/cell/cell'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base64 = require("../images/base64");

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'cell',
      path: 'page/weui/example/cell/cell'
    };
  },

  onLoad: function () {
    this.setData({
      icon: base64.icon20,
      slideButtons: [{
        text: '普通',
        src: global.isDemo ? '/page/weui/example/cell/icon_love.svg' : '/example/cell/icon_love.svg' // icon的路径

      }, {
        text: '普通',
        extClass: 'test',
        src: global.isDemo ? '/page/weui/example/cell/icon_star.svg' : '/example/cell/icon_star.svg' // icon的路径

      }, {
        type: 'warn',
        text: '警示',
        extClass: 'test',
        src: global.isDemo ? '/page/weui/example/cell/icon_del.svg' : '/example/cell/icon_del.svg' // icon的路径

      }]
    });
  },

  slideButtonTap(e) {
    console.log('slide button tap', e.detail);
  }

});
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../base/CustomPage":133,"../images/base64":187,"./cell.json":148,"./cell.wxml":150}],150:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],151:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-dialog": "weui-miniprogram/dialog/dialog"
  },
  "navigationBarTitleText": "dialog"

}
},{}],152:[function(require,module,exports){

    var pageConfig = require('./dialog.json')
    require('./dialog.wxml')
    var pagePath = 'example/dialog/dialog'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'dialog',
      path: 'page/weui/example/dialog/dialog'
    };
  },

  data: {
    dialogShow: false,
    showOneButtonDialog: false,
    buttons: [{
      text: '取消'
    }, {
      text: '确定'
    }],
    oneButton: [{
      text: '确定'
    }]
  },
  openConfirm: function () {
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
},{"../../base/CustomPage":133,"./dialog.json":151,"./dialog.wxml":153}],153:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],154:[function(require,module,exports){
module.exports={
  "disableScroll": true,
  "navigationBarTitleText": "emoji",
  "usingComponents": {
    "mp-emoji": "@miniprogram-component-plus/emoji"

  }
}
},{}],155:[function(require,module,exports){

    var pageConfig = require('./emoji.json')
    require('./emoji.wxml')
    var pagePath = 'example/emoji/emoji'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

var _util = require("../../../../util/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'emoji',
      path: 'page/weui/example/emoji/emoji'
    };
  },

  data: {
    lineHeight: 24,
    functionShow: false,
    emojiShow: false,
    comment: '',
    focus: false,
    cursor: 0,
    _keyboardShow: false,
    emojiSource: 'https://res.wx.qq.com/op_res/eROMsLpnNC10dC40vzF8qviz63ic7ATlbGg20lr5pYykOwHRbLZFUhgg23RtVorX',
    // parsedComment: []
    historyList: [],
    layoutHeight: '0px',
    safeHeight: 0,
    keyboardHeight: 0,
    isIOS: false,
    canIUse: true
  },

  onLoad() {
    const system = wx.getSystemInfoSync();
    let isIOS = system.platform === 'ios';
    this.safeHeight = system.screenHeight - system.safeArea.bottom;
    const layoutHeight = wx.getSystemInfoSync().windowHeight - this.safeHeight / 2;
    this.setData({
      isIOS,
      safeHeight: this.safeHeight,
      layoutHeight
    });
    const emojiInstance = this.selectComponent('.mp-emoji');
    this.emojiNames = emojiInstance.getEmojiNames();
    this.parseEmoji = emojiInstance.parseEmoji;
  },

  onReady() {
    // 解决基础库小于 2.9.2 的兼容问题
    const {
      SDKVersion
    } = wx.getSystemInfoSync();

    if ((0, _util.compareVersion)(SDKVersion, '2.9.1') < 0) {
      this.setData({
        canIUse: false
      });
    }
  },

  onkeyboardHeightChange(e) {
    const {
      height
    } = e.detail;

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

  chooseImage() {},

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
    const {
      cursor,
      comment
    } = this.data;
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
      comment: '',
      emojiShow: false
    });
  },

  deleteEmoji() {
    const pos = this.data.cursor;
    const comment = this.data.comment;
    let result = '';
    let cursor = 0;
    let emojiLen = 6;
    let startPos = pos - emojiLen;

    if (startPos < 0) {
      startPos = 0;
      emojiLen = pos;
    }

    const str = comment.slice(startPos, pos);
    const matchs = str.match(/\[([\u4e00-\u9fa5\w]+)\]$/g); // 删除表情

    if (matchs) {
      const rawName = matchs[0];
      const left = emojiLen - rawName.length;

      if (this.emojiNames.indexOf(rawName) >= 0) {
        const replace = str.replace(rawName, '');
        result = comment.slice(0, startPos) + replace + comment.slice(pos);
        cursor = startPos + left;
      } // 删除字符

    } else {
      let endPos = pos - 1;
      if (endPos < 0) endPos = 0;
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
},{"../../../../util/util":276,"../../base/CustomPage":133,"./emoji.json":154,"./emoji.wxml":156}],156:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],157:[function(require,module,exports){
module.exports={
  "usingComponents": {},
  "navigationBarTitleText": "flex"

}
},{}],158:[function(require,module,exports){

    var pageConfig = require('./flex.json')
    require('./flex.wxml')
    var pagePath = 'example/flex/flex'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'flex',
      path: 'page/weui/example/flex/flex'
    };
  }

});
},{"../../base/CustomPage":133,"./flex.json":157,"./flex.wxml":159}],159:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],160:[function(require,module,exports){
module.exports={
  "usingComponents": {},
  "navigationBarTitleText": "footer"

}
},{}],161:[function(require,module,exports){

    var pageConfig = require('./footer.json')
    require('./footer.wxml')
    var pagePath = 'example/footer/footer'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'footer',
      path: 'page/weui/example/footer/footer'
    };
  }

});
},{"../../base/CustomPage":133,"./footer.json":160,"./footer.wxml":162}],162:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],163:[function(require,module,exports){
module.exports={
  "component": true,
  "usingComponents": {
    "mp-form-page": "weui-miniprogram/form-page/form-page"
  },
  "navigationBarTitleText": "form-page"

}
},{}],164:[function(require,module,exports){

    var pageConfig = require('./form-page.json')
    require('./form-page.wxml')
    var pagePath = 'example/form-page/form-page'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Component({
  onShareAppMessage() {
    return {
      title: 'form-age',
      path: 'page/weui/example/form-age/form-age'
    };
  },

  data: {},
  methods: {}
});
},{"./form-page.json":163,"./form-page.wxml":165}],165:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],166:[function(require,module,exports){
module.exports={
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
}
},{}],167:[function(require,module,exports){

    var pageConfig = require('./form.json')
    require('./form.wxml')
    var pagePath = 'example/form/form'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'form',
      path: 'page/weui/example/form/form'
    };
  },

  data: {
    showTopTips: false,
    radioItems: [{
      name: 'cell standard',
      value: '0',
      checked: true
    }, {
      name: 'cell standard',
      value: '1'
    }],
    checkboxItems: [{
      name: 'standard is dealt for u.',
      value: '0',
      checked: true
    }, {
      name: 'standard is dealicient for u.',
      value: '1'
    }],
    items: [{
      name: 'USA',
      value: '美国'
    }, {
      name: 'CHN',
      value: '中国',
      checked: 'true'
    }, {
      name: 'BRA',
      value: '巴西'
    }, {
      name: 'JPN',
      value: '日本'
    }, {
      name: 'ENG',
      value: '英国'
    }, {
      name: 'TUR',
      value: '法国'
    }],
    date: "2016-09-01",
    time: "12:01",
    countryCodes: ["+86", "+80", "+84", "+87"],
    countryCodeIndex: 0,
    countries: ["中国", "美国", "英国"],
    countryIndex: 0,
    accounts: ["微信号", "QQ", "Email"],
    accountIndex: 0,
    isAgree: false,
    formData: {},
    rules: [{
      name: 'radio',
      rules: {
        required: false,
        message: '单选列表是必选项'
      }
    }, {
      name: 'checkbox',
      rules: {
        required: true,
        message: '多选列表是必选项'
      }
    }, {
      name: 'name',
      rules: {
        required: true,
        message: '请输入姓名'
      }
    }, {
      name: 'qq',
      rules: {
        required: true,
        message: 'qq必填'
      }
    }, {
      name: 'mobile',
      rules: [{
        required: true,
        message: 'mobile必填'
      }, {
        mobile: true,
        message: 'mobile格式不对'
      }]
    }, {
      name: 'vcode',
      rules: {
        required: true,
        message: '验证码必填'
      }
    }, {
      name: 'idcard',
      rules: {
        validator: function (rule, value, param, modeels) {
          if (!value || value.length !== 18) {
            return 'idcard格式不正确';
          }
        }
      }
    }]
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    var radioItems = this.data.radioItems;

    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems,
      [`formData.radio`]: e.detail.value
    });
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    var checkboxItems = this.data.checkboxItems,
        values = e.detail.value;

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
      checkboxItems: checkboxItems,
      [`formData.checkbox`]: e.detail.value
    });
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value,
      [`formData.date`]: e.detail.value
    });
  },

  formInputChange(e) {
    const {
      field
    } = e.currentTarget.dataset;
    this.setData({
      [`formData.${field}`]: e.detail.value
    });
  },

  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    });
  },
  bindCountryCodeChange: function (e) {
    console.log('picker country code 发生选择改变，携带值为', e.detail.value);
    this.setData({
      countryCodeIndex: e.detail.value
    });
  },
  bindCountryChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);
    this.setData({
      countryIndex: e.detail.value
    });
  },
  bindAccountChange: function (e) {
    console.log('picker account 发生选择改变，携带值为', e.detail.value);
    this.setData({
      accountIndex: e.detail.value
    });
  },
  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  },

  submitForm() {
    this.selectComponent('#form').validate((valid, errors) => {
      console.log('valid', valid, errors);

      if (!valid) {
        const firstError = Object.keys(errors);

        if (firstError.length) {
          this.setData({
            error: errors[firstError[0]].message
          });
        }
      } else {
        wx.showToast({
          title: '校验通过'
        });
      }
    }); // this.selectComponent('#form').validateField('mobile', (valid, errors) => {
    //     console.log('valid', valid, errors)
    // })
  }

});
},{"../../base/CustomPage":133,"./form.json":166,"./form.wxml":168}],168:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],169:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-col": "@miniprogram-component-plus/col",
    "mp-row": "@miniprogram-component-plus/row"
  },
  "navigationBarTitleText": "自由布局"
}
},{}],170:[function(require,module,exports){

    var pageConfig = require('./freelayout.json')
    require('./freelayout.wxml')
    var pagePath = 'example/freelayout/freelayout'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  data: {
    theme: 'light'
  },

  onLoad() {
    this.setData({
      theme: wx.getSystemInfoSync().theme || 'light'
    });

    if (wx.onThemeChange) {
      wx.onThemeChange(({
        theme
      }) => {
        this.setData({
          theme
        });
      });
    }
  },

  onShareAppMessage() {
    return {
      title: '自由布局',
      path: 'page/weui/example/freelayout/freelayout'
    };
  }

});
},{"./freelayout.json":169,"./freelayout.wxml":171}],171:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],172:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-gallery": "weui-miniprogram/gallery/gallery"
  },
  "navigationBarTitleText": "gallery"

}
},{}],173:[function(require,module,exports){

    var pageConfig = require('./gallery.json')
    require('./gallery.wxml')
    var pagePath = 'example/gallery/gallery'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'gallery',
      path: 'page/weui/example/gallery/gallery'
    };
  },

  data: {
    imgUrls: ['http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg', 'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg', 'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg'],
    show: true
  },

  change(e) {
    console.log('current index has changed', e.detail);
  },

  delete(e) {
    console.log('delete', e.detail);
  },

  hide() {
    console.log('component hide');
    setTimeout(() => {
      console.log('component show');
      this.setData({
        show: true
      });
    }, 1000);
  }

});
},{"../../base/CustomPage":133,"./gallery.json":172,"./gallery.wxml":174}],174:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],175:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-grids": "weui-miniprogram/grids/grids"
  },
  "navigationBarTitleText": "grid"

}
},{}],176:[function(require,module,exports){

    var pageConfig = require('./grid.json')
    require('./grid.wxml')
    var pagePath = 'example/grid/grid'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  GRID_DEMO_URL
} = getApp().globalData;
const app = getApp();
(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'grid',
      path: 'page/weui/example/grid/grid'
    };
  },

  data: {
    grids: [{
      imgUrl: app.globalData.iconTabbar,
      url: GRID_DEMO_URL,
      text: 'Grid'
    }, {
      imgUrl: app.globalData.iconTabbar,
      url: GRID_DEMO_URL,
      text: 'Grid'
    }, {
      imgUrl: app.globalData.iconTabbar,
      url: GRID_DEMO_URL,
      text: 'Grid'
    }, {
      imgUrl: app.globalData.iconTabbar,
      url: GRID_DEMO_URL,
      text: 'Grid'
    }, {
      imgUrl: app.globalData.iconTabbar,
      url: GRID_DEMO_URL,
      text: 'Grid'
    }, {
      imgUrl: app.globalData.iconTabbar,
      url: GRID_DEMO_URL,
      text: 'Grid'
    }, {
      imgUrl: app.globalData.iconTabbar,
      url: GRID_DEMO_URL,
      text: 'Grid'
    }, {
      imgUrl: app.globalData.iconTabbar,
      url: GRID_DEMO_URL,
      text: 'Grid'
    }, {
      imgUrl: app.globalData.iconTabbar,
      url: GRID_DEMO_URL,
      text: 'Grid'
    }]
  }
});
},{"../../base/CustomPage":133,"./grid.json":175,"./grid.wxml":177}],177:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],178:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-halfScreenDialog": "weui-miniprogram/half-screen-dialog/half-screen-dialog"
  },
  "navigationBarTitleText": "half-screen-dialog"

}
},{}],179:[function(require,module,exports){

    var pageConfig = require('./half-screen-dialog.json')
    require('./half-screen-dialog.wxml')
    var pagePath = 'example/half-screen-dialog/half-screen-dialog'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'half-screen-dialog',
      path: 'page/weui/example/half-screen-dialog/half-screen-dialog'
    };
  },

  data: {
    typeF: false,
    typeS: false,
    typeT: false,
    buttons: [{
      type: 'default',
      className: '',
      text: '辅助操作',
      value: 0
    }, {
      type: 'primary',
      className: '',
      text: '主操作',
      value: 1
    }]
  },
  openTypeF: function () {
    this.setData({
      typeF: true
    });
  },
  openTypeS: function () {
    this.setData({
      typeS: true
    });
  },
  openTypeT: function () {
    this.setData({
      typeT: true
    });
  },

  buttontap(e) {
    console.log(e.detail);
  }

});
},{"../../base/CustomPage":133,"./half-screen-dialog.json":178,"./half-screen-dialog.wxml":180}],180:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],181:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-col": "@miniprogram-component-plus/col",
    "mp-row": "@miniprogram-component-plus/row"
  },
  "navigationBarTitleText": "横向拓展"
}
},{}],182:[function(require,module,exports){

    var pageConfig = require('./horizontalexpansion.json')
    require('./horizontalexpansion.wxml')
    var pagePath = 'example/horizontalexpansion/horizontalexpansion'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  data: {
    theme: 'light'
  },

  onLoad() {
    this.setData({
      theme: wx.getSystemInfoSync().theme || 'light'
    });

    if (wx.onThemeChange) {
      wx.onThemeChange(({
        theme
      }) => {
        this.setData({
          theme
        });
      });
    }
  },

  onShareAppMessage() {
    return {
      title: '横向拓展',
      path: 'page/weui/example/horizontalexpansion/horizontalexpansion'
    };
  }

});
},{"./horizontalexpansion.json":181,"./horizontalexpansion.wxml":183}],183:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],184:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-icon": "weui-miniprogram/icon/icon"
  },
  "navigationBarTitleText": "icons"

}
},{}],185:[function(require,module,exports){

    var pageConfig = require('./icons.json')
    require('./icons.wxml')
    var pagePath = 'example/icons/icons'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const colorLight = 'rgba(0, 0, 0, .9)';
const colorDark = 'rgba(255, 255, 255, .8)';
(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'icons',
      path: 'page/weui/example/icons/icons'
    };
  },

  data: {
    iconList: [{
      icon: 'add-friends',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'add',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'add2',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'album',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'arrow',
      color: colorLight,
      size: 12,
      name: ''
    }, {
      icon: 'at',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'back',
      color: colorLight,
      size: 12,
      name: ''
    }, {
      icon: 'back2',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'bellring-off',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'bellring-on',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'camera',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'cellphone',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'clip',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'close',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'close2',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'comment',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'contacts',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'copy',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'delete-on',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'delete',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'discover',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'display',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'done',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'done2',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'download',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'email',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'error',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'eyes-off',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'eyes-on',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'folder',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'group-detail',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'help',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'home',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'imac',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'info',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'keyboard',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'like',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'link',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'location',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'lock',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'max-window',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'me',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'mike',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'mike2',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'mobile-contacts',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'more',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'more2',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'mosaic',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'music-off',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'music',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'note',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'pad',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'pause',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'pencil',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'photo-wall',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'play',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'play2',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'previous',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'previous2',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'qr-code',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'refresh',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'report-problem',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'search',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'sending',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'setting',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'share',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'shop',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'star',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'sticker',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'tag',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'text',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'time',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'transfer-text',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'transfer2',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'translate',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'tv',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'video-call',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'voice',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'volume-down',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'volume-off',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'volume-up',
      color: colorLight,
      size: 25,
      name: ''
    }]
  },

  onLoad() {
    this.setIconColor(this.data.theme);
    const app = getApp();
    app.watchThemeChange && app.watchThemeChange(this.setIconColor);
  },

  setIconColor(theme) {
    const color = theme === 'dark' ? colorDark : colorLight;
    this.setData({
      iconList: this.data.iconList.map(icon => {
        icon.color = color;
        return icon;
      })
    });
  }

});
},{"../../base/CustomPage":133,"./icons.json":184,"./icons.wxml":186}],186:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],187:[function(require,module,exports){

    var pageConfig = {}
    
    var pagePath = 'example/images/base64'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

module.exports = {
  icon20: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=",
  icon60: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg=="
};
},{}],188:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-indexList": "@miniprogram-component-plus/index-list"
  },
  "navigationBarTitleText": "index-list"

}
},{}],189:[function(require,module,exports){

    var pageConfig = require('./index-list.json')
    require('./index-list.wxml')
    var pagePath = 'example/index-list/index-list'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'index-list',
      path: 'page/weui/example/index-list/index-list'
    };
  },

  onLoad(options) {
    this.getCitys();
  },

  getCitys() {
    const db = wx.cloud.database({
      env: 'release-b86096'
    });
    const mapCity = db.collection('mapCity');

    const _this = this;

    mapCity.doc('6af880a55eb9574b008b78aa53a48405').get({
      success: function (re) {
        console.log(re);
        const cities = re.data.cities; // 按拼音排序

        cities.sort((c1, c2) => {
          let pinyin1 = c1.pinyin.join('');
          let pinyin2 = c2.pinyin.join('');
          return pinyin1.localeCompare(pinyin2);
        }); // 添加首字母

        const map = new Map();

        for (const city of cities) {
          const alpha = city.pinyin[0].charAt(0).toUpperCase();
          if (!map.has(alpha)) map.set(alpha, []);
          map.get(alpha).push({
            name: city.fullname
          });
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

        _this.setData({
          list
        });
      }
    });
  }

});
},{"../../base/CustomPage":133,"./index-list.json":188,"./index-list.wxml":190}],190:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],191:[function(require,module,exports){
module.exports={
  "usingComponents": {},
  "navigationBarTitleText": "小程序扩展能力展示"

}
},{}],192:[function(require,module,exports){

    var pageConfig = require('./index.json')
    require('./index.wxml')
    var pagePath = 'weui/example/index'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: '扩展能力',
      path: 'page/weui/example/index'
    };
  },

  data: {
    list: [{
      id: 'form',
      name: '表单',
      open: false,
      pages: ['cell', 'slideview', 'form', 'uploader']
    }, {
      id: 'widget',
      name: '基础组件',
      open: false,
      pages: ['article', 'icons', 'badge', 'flex', 'footer', 'gallery', 'grid', 'loadmore', 'loading', 'panel', 'preview']
    }, {
      id: 'feedback',
      name: '操作反馈',
      open: false,
      pages: ['dialog', 'msg', 'half-screen-dialog', 'actionsheet', 'toptips']
    }, {
      id: 'nav',
      name: '导航相关',
      open: false,
      pages: ['navigation', 'tabbar']
    }, {
      id: 'search',
      name: '搜索相关',
      open: false,
      pages: ['searchbar']
    }, {
      id: 'extended',
      name: '扩展组件',
      open: false,
      pages: ['emoji', 'video-swiper', 'index-list', 'recycle-view', 'sticky', 'tabs', 'vtabs', 'barrage', 'select-text', 'wxml-to-canvas']
    }, {
      id: 'adaptive',
      name: '多端适配（需在PC端体验）',
      open: false,
      pages: [{
        zh: '左右伸缩',
        url: 'telescopic/telescopic'
      }, {
        zh: '换行排列',
        url: 'linebreak/linebreak'
      }, {
        zh: '侧边导航栏',
        url: 'sidenavigation/sidenavigation'
      }, {
        zh: '分页展现',
        url: 'pagination/pagination'
      }, {
        zh: '自由布局',
        url: 'freelayout/freelayout'
      }, {
        zh: '分层展现',
        url: 'layeredpresentation/layeredpresentation'
      }, {
        zh: '横向拓展',
        url: 'horizontalexpansion/horizontalexpansion'
      }]
    }],
    extendedList: [{
      id: 'extended',
      name: '扩展组件',
      open: false,
      pages: ['emoji', 'video-swiper', 'index-list', 'recycle-view', 'sticky', 'tabs', 'vtabs', 'barrage', 'select-text', 'wxml-to-canvas']
    }]
  },
  kindToggle: function (e) {
    const id = e.currentTarget.id,
          list = this.data.list;

    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    } // const extendedList = this.data.extendedList.map((item) => ({...item, open: false}))


    this.setData({
      list: list // extendedList,

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

    const list = this.data.list.map(item => ({ ...item,
      open: false
    }));
    this.setData({
      extendedList,
      list
    });
  },

  themeToggle() {
    const App = getApp();

    if (App.themeChanged) {
      if (App.globalData.theme === 'light') {
        App.themeChanged('dark');
      } else {
        App.themeChanged('light');
      }
    }
  }

});
},{"../base/CustomPage":133,"./index.json":191,"./index.wxml":193}],193:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],194:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-col": "@miniprogram-component-plus/col",
    "mp-row": "@miniprogram-component-plus/row"
  },
  "navigationBarTitleText": "分层展现"
}
},{}],195:[function(require,module,exports){

    var pageConfig = require('./layeredpresentation.json')
    require('./layeredpresentation.wxml')
    var pagePath = 'example/layeredpresentation/layeredpresentation'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  data: {
    hide1: false,
    hide2: false,
    theme: 'light'
  },

  onLoad() {
    this.setData({
      theme: wx.getSystemInfoSync().theme || 'light'
    });

    if (wx.onThemeChange) {
      wx.onThemeChange(({
        theme
      }) => {
        this.setData({
          theme
        });
      });
    }
  },

  onClick(e) {
    this.setData({
      [e.target.dataset.set]: true
    });
  },

  onShareAppMessage() {
    return {
      title: '分层展现',
      path: 'page/weui/example/layeredpresentation/layeredpresentation'
    };
  }

});
},{"./layeredpresentation.json":194,"./layeredpresentation.wxml":196}],196:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],197:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-col": "@miniprogram-component-plus/col",
    "mp-row": "@miniprogram-component-plus/row"
  },
  "navigationBarTitleText": "换行排列"
}
},{}],198:[function(require,module,exports){

    var pageConfig = require('./linebreak.json')
    require('./linebreak.wxml')
    var pagePath = 'example/linebreak/linebreak'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  data: {},

  onLoad() {},

  onShareAppMessage() {
    return {
      title: '换行排列',
      path: 'page/weui/example/linebreak/linebreak'
    };
  }

});
},{"./linebreak.json":197,"./linebreak.wxml":199}],199:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],200:[function(require,module,exports){
module.exports={
    "usingComponents": {
        "mp-loading": "weui-miniprogram/loading/loading"
    },
    "navigationBarTitleText": "loading"

}
},{}],201:[function(require,module,exports){

    var pageConfig = require('./loading.json')
    require('./loading.wxml')
    var pagePath = 'example/loading/loading'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'loading',
      path: 'page/weui/example/loading/loading'
    };
  },

  data: {
    tips: '请稍后',
    show: true,
    animated: true
  },

  onShow() {
    this.timer = setInterval(() => {
      this.setData({
        show: !this.data.show
      });
    }, 2000);
  },

  close() {
    this.setData({
      animated: !this.data.animated
    });
  },

  onUnload() {
    clearInterval(this.timer);
  }

});
},{"../../base/CustomPage":133,"./loading.json":200,"./loading.wxml":202}],202:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],203:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-loading": "weui-miniprogram/loading/loading"
  },
  "navigationBarTitleText": "loadmore"
}
},{}],204:[function(require,module,exports){

    var pageConfig = require('./loadmore.json')
    require('./loadmore.wxml')
    var pagePath = 'example/loadmore/loadmore'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'loadmore',
      path: 'page/weui/example/loadmore/loadmore'
    };
  }

});
},{"../../base/CustomPage":133,"./loadmore.json":203,"./loadmore.wxml":205}],205:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],206:[function(require,module,exports){
module.exports={
  "usingComponents": {},
  "navigationBarTitleText": "msg"

}
},{}],207:[function(require,module,exports){

    var pageConfig = require('./msg.json')
    require('./msg.wxml')
    var pagePath = 'example/msg/msg'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'msg',
      path: 'page/weui/example/msg/msg'
    };
  },

  openSuccess: function () {
    wx.navigateTo({
      url: 'msg_success'
    });
  },
  openText: function () {
    wx.navigateTo({
      url: 'msg_text'
    });
  },
  openTextPrimary: function () {
    wx.navigateTo({
      url: 'msg_text_primary'
    });
  },
  openFail: function () {
    wx.navigateTo({
      url: 'msg_fail'
    });
  }
});
},{"../../base/CustomPage":133,"./msg.json":206,"./msg.wxml":208}],208:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],209:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-msg": "weui-miniprogram/msg/msg"
  }
}
},{}],210:[function(require,module,exports){

    var pageConfig = require('./msg_fail.json')
    require('./msg_fail.wxml')
    var pagePath = 'example/msg/msg_fail'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'msg_fail',
      path: 'page/weui/example/msg_fail/msg_fail'
    };
  }

});
},{"../../base/CustomPage":133,"./msg_fail.json":209,"./msg_fail.wxml":211}],211:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],212:[function(require,module,exports){
arguments[4][209][0].apply(exports,arguments)
},{"dup":209}],213:[function(require,module,exports){

    var pageConfig = require('./msg_success.json')
    require('./msg_success.wxml')
    var pagePath = 'example/msg/msg_success'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'msg_success',
      path: 'page/weui/example/msg_success'
    };
  }

});
},{"../../base/CustomPage":133,"./msg_success.json":212,"./msg_success.wxml":214}],214:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],215:[function(require,module,exports){
arguments[4][209][0].apply(exports,arguments)
},{"dup":209}],216:[function(require,module,exports){

    var pageConfig = require('./msg_text.json')
    require('./msg_text.wxml')
    var pagePath = 'example/msg/msg_text'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'msg_text',
      path: 'page/weui/example/msg_text/msg_text'
    };
  }

});
},{"../../base/CustomPage":133,"./msg_text.json":215,"./msg_text.wxml":217}],217:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],218:[function(require,module,exports){
arguments[4][209][0].apply(exports,arguments)
},{"dup":209}],219:[function(require,module,exports){

    var pageConfig = require('./msg_text_primary.json')
    require('./msg_text_primary.wxml')
    var pagePath = 'example/msg/msg_text_primary'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'msg_text_primary',
      path: 'page/weui/example/msg_text_primary/msg_text_primary'
    };
  }

});
},{"../../base/CustomPage":133,"./msg_text_primary.json":218,"./msg_text_primary.wxml":220}],220:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],221:[function(require,module,exports){
module.exports={
  "usingComponents": {},
  "navigationBarTitleText": "navbar"

}
},{}],222:[function(require,module,exports){

    var pageConfig = require('./navbar.json')
    require('./navbar.wxml')
    var pagePath = 'example/navbar/navbar'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  onShareAppMessage() {
    return {
      title: 'navbar',
      path: 'page/weui/example/navbar/navbar'
    };
  },

  data: {
    tabs: ["选项一", "选项二", "选项三"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
});
},{"./navbar.json":221,"./navbar.wxml":223}],223:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],224:[function(require,module,exports){
module.exports={
    "usingComponents": {
        "mp-navigation-bar": "weui-miniprogram/navigation-bar/navigation-bar"
    },
    "navigationStyle": "custom",
    "navigationBarTitleText": "navigation"

}
},{}],225:[function(require,module,exports){

    var pageConfig = require('./navigation.json')
    require('./navigation.wxml')
    var pagePath = 'example/navigation/navigation'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'navigation',
      path: 'page/weui/example/navigation/navigation'
    };
  },

  data: {
    loading: false,
    color: '#000',
    background: '#f8f8f8',
    show: true,
    animated: false
  },

  toggleLoading() {
    this.setData({
      loading: !this.data.loading
    });
  },

  changeColor() {
    this.setData({
      color: '#07C160'
    });
  },

  changeBgColor() {
    this.setData({
      background: '#ededed'
    });
  },

  toggleShow() {
    this.setData({
      show: !this.data.show
    });
  },

  toggleAnimated() {
    this.setData({
      animated: !this.data.animated,
      show: !this.data.show
    });
  }

});
},{"../../base/CustomPage":133,"./navigation.json":224,"./navigation.wxml":226}],226:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],227:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-col": "@miniprogram-component-plus/col",
    "mp-row": "@miniprogram-component-plus/row"
  },
  "navigationBarTitleText": "分页展现"
}
},{}],228:[function(require,module,exports){

    var pageConfig = require('./pagination.json')
    require('./pagination.wxml')
    var pagePath = 'example/pagination/pagination'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  data: {},

  onLoad() {},

  onShareAppMessage() {
    return {
      title: '分页展现',
      path: 'page/weui/example/pagination/pagination'
    };
  }

});
},{"./pagination.json":227,"./pagination.wxml":229}],229:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],230:[function(require,module,exports){
module.exports={
  "usingComponents": {},
  "navigationBarTitleText": "panel"

}
},{}],231:[function(require,module,exports){

    var pageConfig = require('./panel.json')
    require('./panel.wxml')
    var pagePath = 'example/panel/panel'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base64 = require("../images/base64");

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'panel',
      path: 'page/weui/example/panel/panel'
    };
  },

  onLoad: function () {
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60
    });
  }
});
},{"../../base/CustomPage":133,"../images/base64":187,"./panel.json":230,"./panel.wxml":232}],232:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],233:[function(require,module,exports){
module.exports={
  "usingComponents": {},
  "navigationBarTitleText": "preview"

}
},{}],234:[function(require,module,exports){

    var pageConfig = require('./preview.json')
    require('./preview.wxml')
    var pagePath = 'example/preview/preview'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'preview',
      path: 'page/weui/example/preview/preview'
    };
  }

});
},{"../../base/CustomPage":133,"./preview.json":233,"./preview.wxml":235}],235:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],236:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-searchbar": "weui-miniprogram/searchbar/searchbar"
  },
  "navigationBarTitleText": "searchbar"

}
},{}],237:[function(require,module,exports){

    var pageConfig = require('./searchbar.json')
    require('./searchbar.wxml')
    var pagePath = 'example/searchbar/searchbar'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'searchbar',
      path: 'page/weui/example/searchbar/searchbar'
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

  search: function (value) {
    return new Promise((resolve, reject) => {
      if (this.data.i % 2 === 0) {
        setTimeout(() => {
          resolve([{
            text: '搜索结果',
            value: 1
          }, {
            text: '搜索结果2',
            value: 2
          }]);
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
  selectResult: function (e) {
    console.log('select result', e.detail);
  }
});
},{"../../base/CustomPage":133,"./searchbar.json":236,"./searchbar.wxml":238}],238:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],239:[function(require,module,exports){
module.exports={
  "disableScroll": true,

  "navigationBarTitleText": "select-text",
  "usingComponents": {
    "mp-select-text": "@miniprogram-component-plus/select-text"
  }
}
},{}],240:[function(require,module,exports){

    var pageConfig = require('./select-text.json')
    require('./select-text.wxml')
    var pagePath = 'example/select-text/select-text'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'select-text',
      path: 'page/weui/example/select-text/select-text'
    };
  },

  data: {
    arr: [{
      value: '长按，上侧复制',
      placement: 'top'
    }, {
      value: '长按，右侧复制',
      placement: 'right'
    }, {
      value: '长按，左侧复制',
      placement: 'left'
    }, {
      value: '长按，下侧复制',
      placement: 'bottom'
    }]
  },

  onLoad() {},

  onCopy(e) {
    console.log('onCopy', e);
  },

  handleTouchStart(e) {
    console.log('@@ touchstart', e);
  },

  handleTap(e) {
    console.log('@@ tap', e);
    this.setData({
      evt: e
    });
  }

});
},{"../../base/CustomPage":133,"./select-text.json":239,"./select-text.wxml":241}],241:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],242:[function(require,module,exports){
module.exports={
  "usingComponents": {},
  "navigationBarTitleText": "侧边导航栏"
}
},{}],243:[function(require,module,exports){

    var pageConfig = require('./sidenavigation.json')
    require('./sidenavigation.wxml')
    var pagePath = 'example/sidenavigation/sidenavigation'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  data: {
    show: false,
    theme: 'light'
  },

  onLoad() {
    this.setData({
      theme: wx.getSystemInfoSync().theme || 'light'
    });

    if (wx.onThemeChange) {
      wx.onThemeChange(({
        theme
      }) => {
        this.setData({
          theme
        });
      });
    }
  },

  show() {
    this.setData({
      show: true
    });
  },

  hide() {
    this.setData({
      show: false
    });
  },

  onShareAppMessage() {
    return {
      title: '侧边导航栏',
      path: 'page/weui/example/sidenavigation/sidenavigation'
    };
  }

});
},{"./sidenavigation.json":242,"./sidenavigation.wxml":244}],244:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],245:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-cells": "weui-miniprogram/cells/cells",
    "mp-cell": "weui-miniprogram/cell/cell",
    "mp-slideview": "weui-miniprogram/slideview/slideview"
  },
  "navigationBarTitleText": "slider-view"

}
},{}],246:[function(require,module,exports){
(function (global){(function (){

    var pageConfig = require('./slideview.json')
    require('./slideview.wxml')
    var pagePath = 'example/slideview/slideview'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base64 = require("../images/base64");

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'sliderview',
      path: 'page/weui/example/sliderview/sliderview'
    };
  },

  onLoad: function () {
    this.setData({
      icon: base64.icon20,
      slideButtons: [{
        text: '普通',
        src: global.isDemo ? '/page/weui/example/cell/icon_love.svg' : '/example/cell/icon_love.svg' // icon的路径

      }, {
        text: '普通',
        extClass: 'test',
        src: global.isDemo ? '/page/weui/example/cell/icon_star.svg' : '/example/cell/icon_star.svg' // icon的路径

      }, {
        type: 'warn',
        text: '警示',
        extClass: 'test',
        src: global.isDemo ? '/page/weui/example/cell/icon_del.svg' : '/example/cell/icon_del.svg' // icon的路径

      }]
    });
  },

  slideButtonTap(e) {
    console.log('slide button tap', e.detail);
  }

});
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../base/CustomPage":133,"../images/base64":187,"./slideview.json":245,"./slideview.wxml":247}],247:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],248:[function(require,module,exports){
module.exports={
  "navigationBarTitleText": "sticky",
  "usingComponents": {
    "mp-sticky": "@miniprogram-component-plus/sticky"
  }
}
},{}],249:[function(require,module,exports){

    var pageConfig = require('./sticky.json')
    require('./sticky.wxml')
    var pagePath = 'example/sticky/sticky'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'sticky',
      path: 'page/weui/example/sticky/sticky'
    };
  },

  data: {},

  onLoad() {},

  onReady() {
    this.setData({
      container: () => wx.createSelectorQuery().select('#container')
    });
  },

  onScroll(e) {
    console.log('onScroll', e);
  }

});
},{"../../base/CustomPage":133,"./sticky.json":248,"./sticky.wxml":250}],250:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],251:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-tabbar": "weui-miniprogram/tabbar/tabbar"
  },
  "navigationBarTitleText": "tabbar"

}
},{}],252:[function(require,module,exports){

    var pageConfig = require('./tabbar.json')
    require('./tabbar.wxml')
    var pagePath = 'example/tabbar/tabbar'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = getApp();
(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'tabbar',
      path: 'page/weui/example/tabbar/tabbar'
    };
  },

  data: {
    list: [{
      text: '微信',
      iconPath: app.globalData.iconTabbar,
      selectedIconPath: app.globalData.iconTabbar,
      badge: '8'
    }, {
      text: '通讯录',
      iconPath: app.globalData.iconTabbar,
      selectedIconPath: app.globalData.iconTabbar
    }, {
      text: '发现',
      iconPath: app.globalData.iconTabbar,
      selectedIconPath: app.globalData.iconTabbar,
      dot: true
    }, {
      text: '我',
      iconPath: app.globalData.iconTabbar,
      selectedIconPath: app.globalData.iconTabbar
    }]
  },

  tabChange(e) {
    console.log('tab change', e);
  }

});
},{"../../base/CustomPage":133,"./tabbar.json":251,"./tabbar.wxml":253}],253:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],254:[function(require,module,exports){
module.exports={
  "disableScroll": true,

  "navigationBarTitleText": "tabs",
  "usingComponents": {
    "mp-tabs": "@miniprogram-component-plus/tabs"
  }
}
},{}],255:[function(require,module,exports){

    var pageConfig = require('./tabs.json')
    require('./tabs.wxml')
    var pagePath = 'example/tabs/tabs'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'tabs',
      path: 'page/weui/example/tabs/tabs'
    };
  },

  data: {
    tabs: [],
    activeTab: 0
  },

  onLoad() {
    const tabs = [{
      title: '技术开发',
      title2: '小程序开发进阶',
      img: 'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEV5QjxLDJaL6ibHLSZ02TIcve0ocPXrdTVqGGbqAmh5Mw9V7504dlEiatSvnyibibHCrVQO2GEYsJicPA/0?wx_fmt=jpeg',
      desc: '本视频系列课程，由腾讯课堂NEXT学院与微信团队联合出品，通过实战案例，深入浅出地进行讲解。'
    }, {
      title: '产品解析',
      title2: '微信小程序直播',
      img: 'http://mmbiz.qpic.cn/sz_mmbiz_png/GEWVeJPFkSHALb0g5rCc4Jf5IqDfdwhWJ43I1IvriaV5uFr9fLAuv3uxHR7DQstbIxhNXFoQEcxGzWwzQUDBd6Q/0?wx_fmt=png',
      desc: '微信小程序直播系列课程持续更新中，帮助大家更好地理解、应用微信小程序直播功能。'
    }, {
      title: '运营规范',
      title2: '常见问题和解决方案',
      img: 'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSGqys4ibO2a8L9nnIgH0ibjNXfbicNbZQQYfxxUpmicQglAEYQ2btVXjOhY9gRtSTCxKvAlKFek7sRUFA/0?wx_fmt=jpeg',
      desc: '提高审核质量'
    }, {
      title: '营销经验',
      title2: '流量主小程序',
      img: 'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSH2Eic4Lt0HkZeEN08pWXTticVRgyNGgBVHMJwMtRhmB0hE4m4alSuwsBk3uBBOhdCr91bZlSFbYhFg/0?wx_fmt=jpeg',
      desc: '本课程共四节，将分阶段为开发者展示如何开通流量主功能、如何接入广告组件、不同类型小程序接入的建议，以及如何通过工具调优小程序变现效率。'
    }, {
      title: '高校大赛',
      title2: '2020中国高校计算机大赛',
      img: 'http://mmbiz.qpic.cn/mmbiz_jpg/TcDuyasB5T3Eg34AYwjMw7xbEK2n01ekiaicPiaMInEMTkOQtuv1yke5KziaYF4MLia4IAbxlm0m5NxkibicFg4IZ92EA/0?wx_fmt=jpeg',
      desc: '微信小程序应用开发赛'
    }];
    this.setData({
      tabs
    });
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
      url: './webview'
    });
  }

});
},{"../../base/CustomPage":133,"./tabs.json":254,"./tabs.wxml":256}],256:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],257:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-col": "@miniprogram-component-plus/col",
    "mp-row": "@miniprogram-component-plus/row"
  },
  "navigationBarTitleText": "左右伸缩"
}
},{}],258:[function(require,module,exports){

    var pageConfig = require('./telescopic.json')
    require('./telescopic.wxml')
    var pagePath = 'example/telescopic/telescopic'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  data: {},

  onLoad() {// wx.showModal({
    //   content: '暂不支持该功能，可在windows版微信（2.9.5及以上版本）中拖动窗口大小查看效果',
    //   showCancel: false,
    //   confirmText: '我知道了'
    // })
  },

  onShareAppMessage() {
    return {
      title: '左右伸缩',
      path: 'page/weui/example/telescopic/telescopic'
    };
  }

});
},{"./telescopic.json":257,"./telescopic.wxml":259}],259:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],260:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-toptips": "weui-miniprogram/toptips/toptips"
  },
  "navigationBarTitleText": "toptips"


}
},{}],261:[function(require,module,exports){

    var pageConfig = require('./toptips.json')
    require('./toptips.wxml')
    var pagePath = 'example/toptips/toptips'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

Page({
  onShareAppMessage() {
    return {
      title: 'toptips',
      path: 'page/weui/example/toptips/toptips'
    };
  },

  data: {
    value: '',
    showTopTips: false,
    message: '请输入文本',
    type: 'info'
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
        type: 'success'
      });
    } else {
      this.setData({
        showTopTips: true,
        type: 'error'
      });
    }
  }

});
},{"./toptips.json":260,"./toptips.wxml":262}],262:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],263:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-uploader": "weui-miniprogram/uploader/uploader",
    "mp-cells": "weui-miniprogram/cells/cells",
    "mp-cell": "weui-miniprogram/cell/cell"
  },
  "navigationBarTitleText": "uploader"

}
},{}],264:[function(require,module,exports){

    var pageConfig = require('./uploader.json')
    require('./uploader.wxml')
    var pagePath = 'example/uploader/uploader'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'uploader',
      path: 'page/weui/example/uploader/uploader'
    };
  },

  data: {
    files: [{
      url: 'http://mmbiz.qpic.cn/mmbiz_png/VUIF3v9blLsicfV8ysC76e9fZzWgy8YJ2bQO58p43Lib8ncGXmuyibLY7O3hia8sWv25KCibQb7MbJW3Q7xibNzfRN7A/0'
    }]
  },

  onLoad() {
    this.setData({
      selectFile: this.selectFile.bind(this),
      uplaodFile: this.uplaodFile.bind(this)
    });
  },

  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],
      // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    });
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id,
      // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表

    });
  },

  selectFile(files) {
    console.log('files', files); // 返回false可以阻止某次文件上传
  },

  uplaodFile(files) {
    console.log('upload files', files); // 文件上传的函数，返回一个promise

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('some error');
      }, 1000);
    });
  },

  uploadError(e) {
    console.log('upload error', e.detail);
  },

  uploadSuccess(e) {
    console.log('upload success', e.detail);
  }

});
},{"../../base/CustomPage":133,"./uploader.json":263,"./uploader.wxml":265}],265:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],266:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-video-swiper": "@miniprogram-component-plus/video-swiper"
  },
  "navigationBarTitleText": "video-swiper"

}
},{}],267:[function(require,module,exports){

    var pageConfig = require('./video-swiper.json')
    require('./video-swiper.wxml')
    var pagePath = 'example/video-swiper/video-swiper'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const urls = ['https://res.wx.qq.com/wxaliveplayer/htdocs/video14e1eea.mov', 'https://res.wx.qq.com/wxaliveplayer/htdocs/video24e1eeb.mov', 'https://res.wx.qq.com/wxaliveplayer/htdocs/video34e1eeb.mov', 'https://res.wx.qq.com/wxaliveplayer/htdocs/video44e1eeb.mov', 'https://res.wx.qq.com/wxaliveplayer/htdocs/video54e1eeb.mov'];
(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'video-swiper',
      path: 'page/weui/example/video-swiper/video-swiper'
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
        objectFit: 'contain'
      };
    });
    this.setData({
      videoList
    });
  },

  onReady() {},

  onShow() {},

  onHide() {},

  onUnload() {},

  onPlay(e) {},

  onPause(e) {//  console.log('pause', e.detail.activeId)
  },

  onEnded(e) {},

  onError(e) {},

  onWaiting(e) {},

  onTimeUpdate(e) {},

  onProgress(e) {},

  onLoadedMetaData(e) {
    console.log('LoadedMetaData', e);
  }

});
},{"../../base/CustomPage":133,"./video-swiper.json":266,"./video-swiper.wxml":268}],268:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],269:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "mp-vtabs": "@miniprogram-component-plus/vtabs",
    "mp-vtabs-content": "@miniprogram-component-plus/vtabs-content"
  },
  "navigationBarTitleText": "vtabs"

}
},{}],270:[function(require,module,exports){

    var pageConfig = require('./vtabs.json')
    require('./vtabs.wxml')
    var pagePath = 'example/vtabs/vtabs'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

var _CustomPage = _interopRequireDefault(require("../../base/CustomPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _CustomPage.default)({
  onShareAppMessage() {
    return {
      title: 'vtabs',
      path: 'page/weui/example/vtabs/vtabs'
    };
  },

  data: {
    vtabs: [],
    activeTab: 0
  },

  onLoad() {
    const tabs = [{
      title: '技术开发',
      title2: '小程序开发进阶',
      img: 'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEV5QjxLDJaL6ibHLSZ02TIcve0ocPXrdTVqGGbqAmh5Mw9V7504dlEiatSvnyibibHCrVQO2GEYsJicPA/0?wx_fmt=jpeg',
      desc: '本视频系列课程，由腾讯课堂NEXT学院与微信团队联合出品，通过实战案例，深入浅出地进行讲解。'
    }, {
      title: '产品解析',
      title2: '微信小程序直播',
      img: 'http://mmbiz.qpic.cn/sz_mmbiz_png/GEWVeJPFkSHALb0g5rCc4Jf5IqDfdwhWJ43I1IvriaV5uFr9fLAuv3uxHR7DQstbIxhNXFoQEcxGzWwzQUDBd6Q/0?wx_fmt=png',
      desc: '微信小程序直播系列课程持续更新中，帮助大家更好地理解、应用微信小程序直播功能。'
    }, {
      title: '运营规范',
      title2: '常见问题和解决方案',
      img: 'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSGqys4ibO2a8L9nnIgH0ibjNXfbicNbZQQYfxxUpmicQglAEYQ2btVXjOhY9gRtSTCxKvAlKFek7sRUFA/0?wx_fmt=jpeg',
      desc: '提高审核质量'
    }, {
      title: '营销经验',
      title2: '流量主小程序',
      img: 'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSH2Eic4Lt0HkZeEN08pWXTticVRgyNGgBVHMJwMtRhmB0hE4m4alSuwsBk3uBBOhdCr91bZlSFbYhFg/0?wx_fmt=jpeg',
      desc: '本课程共四节，将分阶段为开发者展示如何开通流量主功能、如何接入广告组件、不同类型小程序接入的建议。'
    }, {
      title: '高校大赛',
      title2: '2020中国高校计算机大赛',
      img: 'http://mmbiz.qpic.cn/mmbiz_jpg/TcDuyasB5T3Eg34AYwjMw7xbEK2n01ekiaicPiaMInEMTkOQtuv1yke5KziaYF4MLia4IAbxlm0m5NxkibicFg4IZ92EA/0?wx_fmt=jpeg',
      desc: '微信小程序应用开发赛'
    }];
    this.setData({
      vtabs: tabs
    });
  },

  onTabClick(e) {
    const index = e.detail.index;
    console.log('tabClick', index);
  },

  onChange(e) {
    const index = e.detail.index;
    console.log('change', index);
  },

  handleClick() {
    wx.navigateTo({
      url: '../tabs/webview'
    });
  }

});
},{"../../base/CustomPage":133,"./vtabs.json":269,"./vtabs.wxml":271}],271:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],272:[function(require,module,exports){

    var pageConfig = {}
    
    var pagePath = 'example/wxml-to-canvas/demo'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

const wxml = url => `<view class="container">
  <image class="img" mode="aspectFit" src="${url}"></image>
  <text class="title">
    微信开放社区简介（视频）
  </text>
  <text class="desc">
    微信开放社区，是一个为使用者提供交流、服务的平台。
  </text>
</view>
`;

const style = {
  img: {
    width: 200,
    height: 120
  },
  container: {
    height: 200,
    width: 200,
    flexDirection: 'column'
  },
  title: {
    height: 20,
    width: 200,
    color: '#15c15f',
    margin: 4
  },
  desc: {
    fontSize: 13,
    height: 40,
    width: 200,
    color: '#4c4c4c',
    margin: 4
  }
};
module.exports = {
  wxml,
  style
};
},{}],273:[function(require,module,exports){
module.exports={
  "usingComponents": {
    "wxml-to-canvas": "../../../../miniprogram_npm/wxml-to-canvas"
  },
  "navigationBarTitleText": "wxml-to-canvas"

}
},{}],274:[function(require,module,exports){

    var pageConfig = require('./wxml-to-canvas.json')
    require('./wxml-to-canvas.wxml')
    var pagePath = 'example/wxml-to-canvas/wxml-to-canvas'
    var Page = (config) => {
      return _globalPage({pagePath,config,pageConfig,template:'<div class="app">12312</div>'})
    }
  

    var Component = (config) => {
      return _globalComponent({pagePath,config,templateText})
    }
  "use strict";

const {
  wxml,
  style
} = require('./demo.js');

Page({
  onShareAppMessage() {
    return {
      title: 'wxml-to-canvas',
      path: 'page/weui/example/wxml-to-canvas/wxml-to-canvas'
    };
  },

  data: {
    src: '',
    wxmlTemplate: wxml('your_img_url'),
    showCanvas: false
  },

  onLoad() {
    this.widget = this.selectComponent('.widget');
    wx.cloud.getTempFileURL({
      fileList: ['cloud://release-b86096.7265-release-b86096-1258211818/开放社区.jpeg'],
      success: res => {
        const url = res.fileList[0].tempFileURL;
        console.log(url);
        this.url = url;
      },
      fail: console.error
    });
  },

  renderToCanvas() {
    console.log(wxml(this.url));
    const p1 = this.widget.renderToCanvas({
      wxml: wxml(this.url),
      style
    });
    p1.then(re => {
      console.log('container', re.layoutBox);
      this.container = re;
    });
  },

  extraImage() {
    const p2 = this.widget.canvasToTempFilePath();
    p2.then(res => {
      this.setData({
        src: res.tempFilePath,
        width: this.container.layoutBox.width,
        height: this.container.layoutBox.height
      });
    });
  }

});
},{"./demo.js":272,"./wxml-to-canvas.json":273,"./wxml-to-canvas.wxml":275}],275:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],276:[function(require,module,exports){
"use strict";

function formatTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time;
  }

  const hour = parseInt(time / 3600, 10);
  time %= 3600;
  const minute = parseInt(time / 60, 10);
  time = parseInt(time % 60, 10);
  const second = time;
  return [hour, minute, second].map(function (n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
  }).join(':');
}

function formatLocation(longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude);
    latitude = parseFloat(latitude);
  }

  longitude = longitude.toFixed(2);
  latitude = latitude.toFixed(2);
  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  };
}

function fib(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function formatLeadingZeroNumber(n, digitNum = 2) {
  n = n.toString();
  const needNum = Math.max(digitNum - n.length, 0);
  return new Array(needNum).fill(0).join('') + n;
}

function formatDateTime(date, withMs = false) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const ms = date.getMilliseconds();
  let ret = [year, month, day].map(value => formatLeadingZeroNumber(value, 2)).join('-') + ' ' + [hour, minute, second].map(value => formatLeadingZeroNumber(value, 2)).join(':');

  if (withMs) {
    ret += '.' + formatLeadingZeroNumber(ms, 3);
  }

  return ret;
}

function compareVersion(v1, v2) {
  v1 = v1.split('.');
  v2 = v2.split('.');
  const len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push('0');
  }

  while (v2.length < len) {
    v2.push('0');
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
},{}]},{},[2]);
