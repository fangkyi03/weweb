/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-commonjs */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
_global['router'] = new VueRouter({
    routes:_global['appConfig'].pages.map((e)=> {
        return {
            path:'/' + e,
            component:{
                name:e.split('/').join('-'),
                template:_pageObj[e].template,
                data(){
                    return {
                        data:{}
                    }
                },
                mounted() {
                    _pageObj[e].config.onLoad({})
                    _pageObj[e].config.setData = (data)=>{
                        const obj = {test:'测试开发'}
                        this.$set(this, 'data', obj)
                    }
                },      
            }
        }
    })
})

var app = new Vue({
  el: '#app',
  router:_global['router']
})
// const app = new Vue({router}).$mount('#app')