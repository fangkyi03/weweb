var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/nearby.wxml
var require_nearby = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/nearby.wxml"() {
    console.log(123);
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/nearby.wxss
var require_nearby2 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/nearby.wxss"(exports, module) {
    module.exports = "";
  }
});

// miniprogram-demo/miniprogram/packageAPI/pages/wxs/nearby.js
var require_nearby3 = __commonJS({
  "miniprogram-demo/miniprogram/packageAPI/pages/wxs/nearby.js"() {
    require_nearby();
    require_nearby2();
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
require_nearby3();
