// 生命周期 - will - did - render
function onLoad(config) {
  if (config.onLoad) {
    config.onLoad(config);
  } else if (config.methods.onLoad) {
    config.methods.onLoad(config);
  }
}
// 生命周期 - 初始化
function onCreate(config) {
  config.created && config.created(config);
}
function getRouter() {
  return _global["appConfig"].pages.map((e) => {
    return {
      path: "/" + e,
      component: {
        name: e.split("/").join("-"),
        template: _pageObj[e].template,
        data() {
          return _pageObj[e].config.data;
        },
        mounted() {
          _pageObj[e].config.setData = (data) => {
            Object.keys(data).forEach((e) => {
              this.$data[e] = data[e];
            });
          };
          const config = _pageObj[e].config;
          onCreate(config);
          onLoad(config);
        },
      },
    };
  });
}
const routerData = getRouter();
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
