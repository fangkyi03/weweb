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
