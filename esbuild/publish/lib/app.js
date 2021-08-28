var Text = () => {
  return '<div>测试</div>'
}
var en = false
var eh = (e) => {
  console.log('data',e)
}
Vue.component('wx-button',{
  name:'wx-button',
  props:['type','data','plain','disabled','loading','name'],
  data(){
    debugger
    return this.$props
  },
  template:`<button class='wx-button' :disabled="disabled" :type="type"><slot></slot></button>`
})
Vue.component('wx-view',{
  name:'wxview',
  template:'<div><slot></slot></div>'
})
Vue.component('wx-image',{
  props:['class','i'],
  data(){
    return this.$props
  },
  template:`<img class='wx-image'/>`
})
window['Behavior'] = function (config) {
  return config
};
window['registerComponent'] = (name,{template,data}) => {
  Vue.component(name,{
    props:['data'],
    watch:{
        ['data']:function(newVal){
            this.$data = newVal
            this.$forceUpdate()
        }
    },
    data,
    template
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
window['global'] = {};
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
  console.log('app初始化',config)
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
