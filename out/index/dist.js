var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
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

// miniprogram-demo/miniprogram/page/component/index.js
var require_component = __commonJS({
  "miniprogram-demo/miniprogram/page/component/index.js"() {
    var page38 = getPage("page/component/index");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/view/view.js
var require_view = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/view/view.js"() {
    var page38 = getPage("page/component/pages/view/view");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/scroll-view/scroll-view.js
var require_scroll_view = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/scroll-view/scroll-view.js"() {
    var page38 = getPage("page/component/pages/scroll-view/scroll-view");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/swiper/swiper.js
var require_swiper = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/swiper/swiper.js"() {
    var page38 = getPage("page/component/pages/swiper/swiper");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/text/text.js
var require_text = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/text/text.js"() {
    var page38 = getPage("page/component/pages/text/text");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/icon/icon.js
var require_icon = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/icon/icon.js"() {
    var page38 = getPage("page/component/pages/icon/icon");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/progress/progress.js
var require_progress = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/progress/progress.js"() {
    var page38 = getPage("page/component/pages/progress/progress");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/button/button.js
var require_button = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/button/button.js"() {
    var page38 = getPage("page/component/pages/button/button");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/checkbox/checkbox.js
var require_checkbox = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/checkbox/checkbox.js"() {
    var page38 = getPage("page/component/pages/checkbox/checkbox");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/form/form.js
var require_form = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/form/form.js"() {
    var page38 = getPage("page/component/pages/form/form");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/input/input.js
var require_input = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/input/input.js"() {
    var page38 = getPage("page/component/pages/input/input");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/label/label.js
var require_label = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/label/label.js"() {
    var page38 = getPage("page/component/pages/label/label");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/picker/picker.js
var require_picker = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/picker/picker.js"() {
    var page38 = getPage("page/component/pages/picker/picker");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/radio/radio.js
var require_radio = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/radio/radio.js"() {
    var page38 = getPage("page/component/pages/radio/radio");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/slider/slider.js
var require_slider = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/slider/slider.js"() {
    var page38 = getPage("page/component/pages/slider/slider");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/switch/switch.js
var require_switch = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/switch/switch.js"() {
    var page38 = getPage("page/component/pages/switch/switch");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/textarea/textarea.js
var require_textarea = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/textarea/textarea.js"() {
    var page38 = getPage("page/component/pages/textarea/textarea");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/navigator/navigator.js
var require_navigator = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/navigator/navigator.js"() {
    var page38 = getPage("page/component/pages/navigator/navigator");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/navigator/navigate.js
var require_navigate = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/navigator/navigate.js"() {
    var page38 = getPage("page/component/pages/navigator/navigate");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/navigator/redirect.js
var require_redirect = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/navigator/redirect.js"() {
    var page38 = getPage("page/component/pages/navigator/redirect");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/image/image.js
var require_image = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/image/image.js"() {
    var page38 = getPage("page/component/pages/image/image");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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
        }).then((res) => {
          console.log(res);
          this.setData({
            webpImageUrl: res.fileList[0].tempFileURL
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

// miniprogram-demo/miniprogram/page/component/pages/video/video.js
var require_video = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/video/video.js"() {
    var page38 = getPage("page/component/pages/video/video");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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
          success(res) {
            that.setData({
              src: res.tempFilePath
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

// miniprogram-demo/miniprogram/page/component/pages/map/map.js
var require_map = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/map/map.js"() {
    var page38 = getPage("page/component/pages/map/map");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/canvas/canvas.js
var canvas_exports = {};
__markAsModule(canvas_exports);
var import_util, page;
var init_canvas = __esm({
  "miniprogram-demo/miniprogram/page/component/pages/canvas/canvas.js"() {
    import_util = __toModule(require_util());
    page = getPage("page/component/pages/canvas/canvas");
    page.template = "<test>\u6D4B\u8BD5</test>";
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
      init(res) {
        const width = res[0].width;
        const height = res[0].height;
        const canvas = res[0].node;
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

// miniprogram-demo/miniprogram/page/component/pages/ad/ad.js
var require_ad = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/ad/ad.js"() {
    var page38 = getPage("page/component/pages/ad/ad");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/movable-view/movable-view.js
var require_movable_view = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/movable-view/movable-view.js"() {
    var page38 = getPage("page/component/pages/movable-view/movable-view");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/cover-view/cover-view.js
var require_cover_view = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/cover-view/cover-view.js"() {
    var page38 = getPage("page/component/pages/cover-view/cover-view");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/rich-text/rich-text.js
var require_rich_text = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/rich-text/rich-text.js"() {
    var page38 = getPage("page/component/pages/rich-text/rich-text");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/picker-view/picker-view.js
var require_picker_view = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/picker-view/picker-view.js"() {
    var page38 = getPage("page/component/pages/picker-view/picker-view");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/camera/camera.js
var require_camera = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/camera/camera.js"() {
    var page38 = getPage("page/component/pages/camera/camera");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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
      init(res) {
        if (this.listener) {
          this.listener.stop();
        }
        const canvas = res.node;
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
          success: (res) => {
            this.setData({
              src: res.tempImagePath
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
          success: (res) => {
            this.setData({
              src: res.tempThumbPath,
              videoSrc: res.tempVideoPath
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

// miniprogram-demo/miniprogram/page/component/pages/camera-scan-code/camera-scan-code.js
var require_camera_scan_code = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/camera-scan-code/camera-scan-code.js"() {
    var page38 = getPage("page/component/pages/camera-scan-code/camera-scan-code");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/map-styles/map-styles.js
var require_map_styles = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/map-styles/map-styles.js"() {
    var page38 = getPage("page/component/pages/map-styles/map-styles");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/live-player/live-player.js
var require_live_player = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/live-player/live-player.js"() {
    var page38 = getPage("page/component/pages/live-player/live-player");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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
      onReady(res) {
        this.ctx = wx.createLivePlayerContext("player");
      },
      handleScanQRCode() {
        wx.scanCode({
          complete: (res) => {
            const { result } = res;
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
          success: (res) => {
            console.log("play success");
          },
          fail: (res) => {
            console.log("play fail");
          }
        });
      },
      handlePause() {
        this.ctx.pause({
          success: (res) => {
            console.log("pause success");
          },
          fail: (res) => {
            console.log("pause fail");
          }
        });
      },
      handleStop() {
        this.ctx.stop({
          success: (res) => {
            console.log("stop success");
          },
          fail: (res) => {
            console.log("stop fail");
          }
        });
      },
      handleResume() {
        this.ctx.resume({
          success: (res) => {
            console.log("resume success");
          },
          fail: (res) => {
            console.log("resume fail");
          }
        });
      },
      handleMute() {
        this.ctx.mute({
          success: (res) => {
            console.log("mute success");
          },
          fail: (res) => {
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

// miniprogram-demo/miniprogram/page/component/pages/live-pusher/live-pusher.js
var require_live_pusher = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/live-pusher/live-pusher.js"() {
    var page38 = getPage("page/component/pages/live-pusher/live-pusher");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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
      onReady(res) {
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
          success: (res) => {
            console.log("start success");
          },
          fail: (res) => {
            console.log("start fail");
          }
        });
      },
      handleScanQRCode() {
        wx.scanCode({
          complete: (res) => {
            const { result } = res;
            this.setData({
              videoSrc: result
            });
          }
        });
      },
      handlePause() {
        this.ctx.pause({
          success: (res) => {
            console.log("pause success");
          },
          fail: (res) => {
            console.log("pause fail");
          }
        });
      },
      handleStop() {
        this.ctx.stop({
          success: (res) => {
            console.log("stop success");
          },
          fail: (res) => {
            console.log("stop fail");
          }
        });
      },
      handleResume() {
        this.ctx.resume({
          success: (res) => {
            console.log("resume success");
          },
          fail: (res) => {
            console.log("resume fail");
          }
        });
      },
      handleSwitchCamera() {
        this.ctx.switchCamera({
          success: (res) => {
            console.log("switch camera success");
          },
          fail: (res) => {
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

// miniprogram-demo/miniprogram/page/component/pages/aria-component/aria-component.js
var require_aria_component = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/aria-component/aria-component.js"() {
    var page38 = getPage("page/component/pages/aria-component/aria-component");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/API/index.js
var require_API = __commonJS({
  "miniprogram-demo/miniprogram/page/API/index.js"() {
    var page38 = getPage("page/API/index");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/cloud/index.js
var require_cloud = __commonJS({
  "miniprogram-demo/miniprogram/page/cloud/index.js"() {
    var page38 = getPage("page/cloud/index");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/doc-web-view/doc-web-view.js
var require_doc_web_view = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/doc-web-view/doc-web-view.js"() {
    var page38 = getPage("page/component/pages/doc-web-view/doc-web-view");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/open-data/open-data.js
var require_open_data = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/open-data/open-data.js"() {
    var page38 = getPage("page/component/pages/open-data/open-data");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/web-view/web-view.js
var require_web_view = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/web-view/web-view.js"() {
    var page38 = getPage("page/component/pages/web-view/web-view");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/editor/editor.js
var require_editor = __commonJS({
  "miniprogram-demo/miniprogram/page/component/pages/editor/editor.js"() {
    var page38 = getPage("page/component/pages/editor/editor");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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
        wx.onKeyboardHeightChange((res) => {
          if (res.height === keyboardHeight) {
            return;
          }
          const duration = res.height > 0 ? res.duration * 1e3 : 0;
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
        wx.createSelectorQuery().select("#editor").context(function(res) {
          that.editorCtx = res.context;
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
          success: function(res) {
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
          success: function(res) {
            that.editorCtx.insertImage({
              src: res.tempFilePaths[0],
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
    var page38 = getPage("page/weui/base/behaviors/theme");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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
    page2 = getPage("page/weui/base/CustomPage");
    page2.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/index.js
var example_exports = {};
__markAsModule(example_exports);
var page3;
var init_example = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/index.js"() {
    init_CustomPage();
    page3 = getPage("page/weui/example/index");
    page3.template = "<test>\u6D4B\u8BD5</test>";
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
        const App = getApp();
        if (App.themeChanged) {
          if (App.globalData.theme === "light") {
            App.themeChanged("dark");
          } else {
            App.themeChanged("light");
          }
        }
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/images/base64.js
var require_base64 = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/images/base64.js"(exports, module) {
    var page38 = getPage("page/weui/example/images/base64");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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
    page4 = getPage("page/weui/example/cell/cell");
    page4.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/slideview/slideview.js
var slideview_exports = {};
__markAsModule(slideview_exports);
var page5, base642;
var init_slideview = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/slideview/slideview.js"() {
    init_CustomPage();
    page5 = getPage("page/weui/example/slideview/slideview");
    page5.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/form/form.js
var form_exports = {};
__markAsModule(form_exports);
var page6;
var init_form = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/form/form.js"() {
    init_CustomPage();
    page6 = getPage("page/weui/example/form/form");
    page6.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/uploader/uploader.js
var uploader_exports = {};
__markAsModule(uploader_exports);
var page7;
var init_uploader = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/uploader/uploader.js"() {
    init_CustomPage();
    page7 = getPage("page/weui/example/uploader/uploader");
    page7.template = "<test>\u6D4B\u8BD5</test>";
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
          success: function(res) {
            that.setData({
              files: that.data.files.concat(res.tempFilePaths)
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

// miniprogram-demo/miniprogram/page/weui/example/article/article.js
var article_exports = {};
__markAsModule(article_exports);
var page8;
var init_article = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/article/article.js"() {
    init_CustomPage();
    page8 = getPage("page/weui/example/article/article");
    page8.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/badge/badge.js
var badge_exports = {};
__markAsModule(badge_exports);
var page9;
var init_badge = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/badge/badge.js"() {
    init_CustomPage();
    page9 = getPage("page/weui/example/badge/badge");
    page9.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/flex/flex.js
var flex_exports = {};
__markAsModule(flex_exports);
var page10;
var init_flex = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/flex/flex.js"() {
    init_CustomPage();
    page10 = getPage("page/weui/example/flex/flex");
    page10.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/footer/footer.js
var footer_exports = {};
__markAsModule(footer_exports);
var page11;
var init_footer = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/footer/footer.js"() {
    init_CustomPage();
    page11 = getPage("page/weui/example/footer/footer");
    page11.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/gallery/gallery.js
var gallery_exports = {};
__markAsModule(gallery_exports);
var page12;
var init_gallery = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/gallery/gallery.js"() {
    init_CustomPage();
    page12 = getPage("page/weui/example/gallery/gallery");
    page12.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/grid/grid.js
var grid_exports = {};
__markAsModule(grid_exports);
var page13, GRID_DEMO_URL, app;
var init_grid = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/grid/grid.js"() {
    init_CustomPage();
    page13 = getPage("page/weui/example/grid/grid");
    page13.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/loadmore/loadmore.js
var loadmore_exports = {};
__markAsModule(loadmore_exports);
var page14;
var init_loadmore = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/loadmore/loadmore.js"() {
    init_CustomPage();
    page14 = getPage("page/weui/example/loadmore/loadmore");
    page14.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/panel/panel.js
var panel_exports = {};
__markAsModule(panel_exports);
var page15, base643;
var init_panel = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/panel/panel.js"() {
    init_CustomPage();
    page15 = getPage("page/weui/example/panel/panel");
    page15.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/preview/preview.js
var preview_exports = {};
__markAsModule(preview_exports);
var page16;
var init_preview = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/preview/preview.js"() {
    init_CustomPage();
    page16 = getPage("page/weui/example/preview/preview");
    page16.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/dialog/dialog.js
var dialog_exports = {};
__markAsModule(dialog_exports);
var page17;
var init_dialog = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/dialog/dialog.js"() {
    init_CustomPage();
    page17 = getPage("page/weui/example/dialog/dialog");
    page17.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/msg/msg.js
var msg_exports = {};
__markAsModule(msg_exports);
var page18;
var init_msg = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/msg/msg.js"() {
    init_CustomPage();
    page18 = getPage("page/weui/example/msg/msg");
    page18.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/msg/msg_text.js
var msg_text_exports = {};
__markAsModule(msg_text_exports);
var page19;
var init_msg_text = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/msg/msg_text.js"() {
    init_CustomPage();
    page19 = getPage("page/weui/example/msg/msg_text");
    page19.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/msg/msg_text_primary.js
var msg_text_primary_exports = {};
__markAsModule(msg_text_primary_exports);
var page20;
var init_msg_text_primary = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/msg/msg_text_primary.js"() {
    init_CustomPage();
    page20 = getPage("page/weui/example/msg/msg_text_primary");
    page20.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/msg/msg_success.js
var msg_success_exports = {};
__markAsModule(msg_success_exports);
var page21;
var init_msg_success = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/msg/msg_success.js"() {
    init_CustomPage();
    page21 = getPage("page/weui/example/msg/msg_success");
    page21.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/msg/msg_fail.js
var msg_fail_exports = {};
__markAsModule(msg_fail_exports);
var page22;
var init_msg_fail = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/msg/msg_fail.js"() {
    init_CustomPage();
    page22 = getPage("page/weui/example/msg/msg_fail");
    page22.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/navbar/navbar.js
var require_navbar = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/navbar/navbar.js"() {
    var page38 = getPage("page/weui/example/navbar/navbar");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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
          success: function(res) {
            that.setData({
              sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
              sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
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

// miniprogram-demo/miniprogram/page/weui/example/tabbar/tabbar.js
var tabbar_exports = {};
__markAsModule(tabbar_exports);
var page23, app2;
var init_tabbar = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/tabbar/tabbar.js"() {
    init_CustomPage();
    page23 = getPage("page/weui/example/tabbar/tabbar");
    page23.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/icons/icons.js
var icons_exports = {};
__markAsModule(icons_exports);
var page24, colorLight, colorDark;
var init_icons = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/icons/icons.js"() {
    init_CustomPage();
    page24 = getPage("page/weui/example/icons/icons");
    page24.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/form-page/form-page.js
var require_form_page = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/form-page/form-page.js"() {
    var page38 = getPage("page/weui/example/form-page/form-page");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/half-screen-dialog/half-screen-dialog.js
var half_screen_dialog_exports = {};
__markAsModule(half_screen_dialog_exports);
var page25;
var init_half_screen_dialog = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/half-screen-dialog/half-screen-dialog.js"() {
    init_CustomPage();
    page25 = getPage("page/weui/example/half-screen-dialog/half-screen-dialog");
    page25.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/actionsheet/actionsheet.js
var actionsheet_exports = {};
__markAsModule(actionsheet_exports);
var page26;
var init_actionsheet = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/actionsheet/actionsheet.js"() {
    init_CustomPage();
    page26 = getPage("page/weui/example/actionsheet/actionsheet");
    page26.template = "<test>\u6D4B\u8BD5</test>";
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
          success: function(res) {
            if (!res.cancel) {
              console.log(res.tapIndex);
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

// miniprogram-demo/miniprogram/page/weui/example/toptips/toptips.js
var require_toptips = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/toptips/toptips.js"() {
    var page38 = getPage("page/weui/example/toptips/toptips");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/searchbar/searchbar.js
var searchbar_exports = {};
__markAsModule(searchbar_exports);
var page27;
var init_searchbar = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/searchbar/searchbar.js"() {
    init_CustomPage();
    page27 = getPage("page/weui/example/searchbar/searchbar");
    page27.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/emoji/emoji.js
var emoji_exports = {};
__markAsModule(emoji_exports);
var import_util2, page28;
var init_emoji = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/emoji/emoji.js"() {
    init_CustomPage();
    import_util2 = __toModule(require_util());
    page28 = getPage("page/weui/example/emoji/emoji");
    page28.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/video-swiper/video-swiper.js
var video_swiper_exports = {};
__markAsModule(video_swiper_exports);
var page29, urls;
var init_video_swiper = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/video-swiper/video-swiper.js"() {
    init_CustomPage();
    page29 = getPage("page/weui/example/video-swiper/video-swiper");
    page29.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/index-list/index-list.js
var index_list_exports = {};
__markAsModule(index_list_exports);
var page30;
var init_index_list = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/index-list/index-list.js"() {
    init_CustomPage();
    page30 = getPage("page/weui/example/index-list/index-list");
    page30.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/sticky/sticky.js
var sticky_exports = {};
__markAsModule(sticky_exports);
var page31;
var init_sticky = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/sticky/sticky.js"() {
    init_CustomPage();
    page31 = getPage("page/weui/example/sticky/sticky");
    page31.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/tabs/tabs.js
var tabs_exports = {};
__markAsModule(tabs_exports);
var page32;
var init_tabs = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/tabs/tabs.js"() {
    init_CustomPage();
    page32 = getPage("page/weui/example/tabs/tabs");
    page32.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/vtabs/vtabs.js
var vtabs_exports = {};
__markAsModule(vtabs_exports);
var page33;
var init_vtabs = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/vtabs/vtabs.js"() {
    init_CustomPage();
    page33 = getPage("page/weui/example/vtabs/vtabs");
    page33.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/select-text/select-text.js
var select_text_exports = {};
__markAsModule(select_text_exports);
var page34;
var init_select_text = __esm({
  "miniprogram-demo/miniprogram/page/weui/example/select-text/select-text.js"() {
    init_CustomPage();
    page34 = getPage("page/weui/example/select-text/select-text");
    page34.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/barrage/utils.js
var require_utils = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/barrage/utils.js"(exports, module) {
    var page38 = getPage("page/weui/example/barrage/utils");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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
    page35 = getPage("page/weui/example/barrage/barrage");
    page35.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/wxml-to-canvas/demo.js
var require_demo = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/wxml-to-canvas/demo.js"(exports, module) {
    var page38 = getPage("page/weui/example/wxml-to-canvas/demo");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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
var require_wxml_to_canvas = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/wxml-to-canvas/wxml-to-canvas.js"() {
    var page38 = getPage("page/weui/example/wxml-to-canvas/wxml-to-canvas");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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
          success: (res) => {
            const url = res.fileList[0].tempFileURL;
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
        p2.then((res) => {
          this.setData({
            src: res.tempFilePath,
            width: this.container.layoutBox.width,
            height: this.container.layoutBox.height
          });
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/page/weui/example/telescopic/telescopic.js
var require_telescopic = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/telescopic/telescopic.js"() {
    var page38 = getPage("page/weui/example/telescopic/telescopic");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/linebreak/linebreak.js
var require_linebreak = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/linebreak/linebreak.js"() {
    var page38 = getPage("page/weui/example/linebreak/linebreak");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/sidenavigation/sidenavigation.js
var require_sidenavigation = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/sidenavigation/sidenavigation.js"() {
    var page38 = getPage("page/weui/example/sidenavigation/sidenavigation");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/pagination/pagination.js
var require_pagination = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/pagination/pagination.js"() {
    var page38 = getPage("page/weui/example/pagination/pagination");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/freelayout/freelayout.js
var require_freelayout = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/freelayout/freelayout.js"() {
    var page38 = getPage("page/weui/example/freelayout/freelayout");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/layeredpresentation/layeredpresentation.js
var require_layeredpresentation = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/layeredpresentation/layeredpresentation.js"() {
    var page38 = getPage("page/weui/example/layeredpresentation/layeredpresentation");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/weui/example/horizontalexpansion/horizontalexpansion.js
var require_horizontalexpansion = __commonJS({
  "miniprogram-demo/miniprogram/page/weui/example/horizontalexpansion/horizontalexpansion.js"() {
    var page38 = getPage("page/weui/example/horizontalexpansion/horizontalexpansion");
    page38.template = "<test>\u6D4B\u8BD5</test>";
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

// miniprogram-demo/miniprogram/page/component/pages/canvas-2d/canvas-2d.js
var canvas_2d_exports = {};
__markAsModule(canvas_2d_exports);
var import_util3, page36;
var init_canvas_2d = __esm({
  "miniprogram-demo/miniprogram/page/component/pages/canvas-2d/canvas-2d.js"() {
    import_util3 = __toModule(require_util());
    page36 = getPage("page/component/pages/canvas-2d/canvas-2d");
    page36.template = "<test>\u6D4B\u8BD5</test>";
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
      init(res) {
        const width = res[0].width;
        const height = res[0].height;
        const canvas = res[0].node;
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

// miniprogram-demo/miniprogram/page/component/pages/webgl/webgl.js
var webgl_exports = {};
__markAsModule(webgl_exports);
var import_util4, page37, vs, fs, triangleVertices;
var init_webgl = __esm({
  "miniprogram-demo/miniprogram/page/component/pages/webgl/webgl.js"() {
    import_util4 = __toModule(require_util());
    page37 = getPage("page/component/pages/webgl/webgl");
    page37.template = "<test>\u6D4B\u8BD5</test>";
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
          wx.createSelectorQuery().select("#canvasWebGL").node().exec((res) => {
            const canvas = res[0].node;
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
require_component();
require_view();
require_scroll_view();
require_swiper();
require_text();
require_icon();
require_progress();
require_button();
require_checkbox();
require_form();
require_input();
require_label();
require_picker();
require_radio();
require_slider();
require_switch();
require_textarea();
require_navigator();
require_navigate();
require_redirect();
require_image();
require_video();
require_map();
init_canvas();
require_ad();
require_movable_view();
require_cover_view();
require_rich_text();
require_picker_view();
require_camera();
require_camera_scan_code();
require_map_styles();
require_live_player();
require_live_pusher();
require_aria_component();
require_API();
require_cloud();
require_doc_web_view();
require_open_data();
require_web_view();
require_editor();
init_example();
init_cell();
init_slideview();
init_form();
init_uploader();
init_article();
init_badge();
init_flex();
init_footer();
init_gallery();
init_grid();
init_loadmore();
require_loading();
init_panel();
init_preview();
init_dialog();
init_msg();
init_msg_text();
init_msg_text_primary();
init_msg_success();
init_msg_fail();
require_navbar();
require_navigation();
init_tabbar();
init_icons();
require_form_page();
init_half_screen_dialog();
init_actionsheet();
require_toptips();
init_searchbar();
init_emoji();
init_video_swiper();
init_index_list();
init_sticky();
init_tabs();
init_vtabs();
init_select_text();
init_barrage();
require_wxml_to_canvas();
require_telescopic();
require_linebreak();
require_sidenavigation();
require_pagination();
require_freelayout();
require_layeredpresentation();
require_horizontalexpansion();
init_canvas_2d();
init_webgl();
