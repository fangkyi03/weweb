// 生命周期 - will - did - render
function onLoad(config) {
  if (config.onLoad) {
    config.onLoad(config);
  } else if (config.methods && config.methods.onLoad) {
    config.methods.onLoad(config);
  }
}

// 生命周期 - 初始化
function onCreate(config) {
  config.created && config.created(config);
}

// 生命周期 - 每次页面显示时候调用
function onShow(config) {
  config.onShow && config.onShow(config)
}

// 获取路由
function getRouter() {
  return window["__pages__"].map((e) => {
    if (!_pageObj[e]) {
      return {fail:true}
    }
    return {
      path: "/" + e,
      component: {
        name: e.split("/").join("-"),
        template: _pageObj[e].template,
        data() {
          return _pageObj[e].view.data;
        },
        mounted() {
          _pageObj[e].view.setData = (data) => {
            Object.keys(data).forEach((e) => {
              this.$data[e] = data[e];
            });
          };
          const view = _pageObj[e].view;
          onCreate(view);
          onLoad(view);
          onShow(view)
        },
      },
    };
  });
}

// 返回路由数据
const routerData = getRouter().filter((e)=>e.fail!==true);

// 初始化vue
var app = new Vue({
  el: "#app",
  router: new VueRouter({
    routes: [
      {
        ...routerData[0],
        path: "/",
      },
    ].concat(routerData),
  }),
});
