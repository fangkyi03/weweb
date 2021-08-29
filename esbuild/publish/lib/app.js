var Text = () => {
  return '<div>测试</div>'
}
var en = false
Vue.component('wx-button',{
  name:'wx-button',
  props:['type','data','plain','disabled','loading','name','tap','id'],
  data(){
    return this.$props
  },
  methods:{
    onClick(e) {
      Object.defineProperty(e,'type',{
        value:'tap',
        writable:true,
      })
      this.tap && this.tap(e)
    }
  },
  template:`<div class='wx-button' @click='onClick' :disabled="disabled" :type="type" :loading="loading" :plain="plain" :id='id'><slot></slot></div>`
})
Vue.component('wx-input',{
  name:'wxinput',
  props:['value'],
  template:`<input class='wx-input' :value="value" style="border:none;outline:none;"/>`
})
Vue.component('wx-view',{
  props:{
    tap:{
      type:Function,
      default:()=>null
    }
  },
  name:'wxview',
  data(){
    return {}
  },
  methods:{
    onClick(e) {
      Object.defineProperty(e,'type',{
        value:'tap',
        writable:true,
      })
      this.tap && this.tap(e)
    }
  },
  template:'<div @click="onClick"><slot></slot></div>'
})
Vue.component('wx-image',{
  props:['class','i','src'],
  data(){
    return this.$props
  },
  template:`<div class='wx-image' v-bind:style="{backgroundImage:'url(src)'}"/>`
})
window['Behavior'] = function (config) {
  return config
};
window['registerComponent'] = (name,{template,data}) => {
  Vue.component(name,{
    props:['data'],
    watch:{
        ['data']:function(newVal){
            Object.keys(newVal).forEach((e) => {
              const keys = e.split(".");
              if (keys.length > 1) {
                keys.reduce((a,b,i)=> {
                  if (!a) {
                    return this.$data[b]
                  }else {
                    const newB = b.replace('[','').replace(']','')
                    if (i === keys.length - 1) {
                      a[newB] = newVal[e]
                    }
                    return a[newB]
                  }
                },'')
              }else {
                this.$data[e] = newVal[e]
              }
            });
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
