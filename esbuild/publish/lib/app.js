window['Behavior'] = function (config) {
  return config
};
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
window['getApp'] = function () {
  return {
    globalData:{}
  }
};
window['requirePlugin'] = function () {};
window['_pageObj'] = {};
window['_global'] = {};
window['_pages'] = {}

window['getPage'] = (files) => {
  if (_pageObj[files]) {
    return _pageObj[files]
  }else {
    _pageObj[files] = {json:{},template:'',view:{}}
    return _pageObj[files]
  }
}

window['App'] = (config) => {
  _global["appConfig"] = config;
};
window['Page'] = window['Component'] = (viewConfig) => {
  const page = getPage(window['__wxRoute']);
  page.view = viewConfig
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
  reportAnalytics:function(){
    console.log('reportAnalytics',arguments)
  },
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