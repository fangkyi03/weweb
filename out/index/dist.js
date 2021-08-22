var Er=Object.create;var q=Object.defineProperty;var Ur=Object.getOwnPropertyDescriptor;var Br=Object.getOwnPropertyNames;var Lr=Object.getPrototypeOf,Mr=Object.prototype.hasOwnProperty;var p=e=>q(e,"__esModule",{value:!0});var c=(e,t)=>()=>(e&&(t=e(e=0)),t);var a=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Rr=(e,t,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Br(t))!Mr.call(e,o)&&o!=="default"&&q(e,o,{get:()=>t[o],enumerable:!(i=Ur(t,o))||i.enumerable});return e},y=e=>Rr(p(q(e!=null?Er(Lr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var T=a(()=>{console.log(123)});var F=a((Zn,jr)=>{jr.exports=`@import "../common/index.wxss";

.weui-agree__link {
  display: inline;
  color: var(--weui-LINK);
}
`});var I=a(()=>{T();F();Page({onShow(){wx.reportAnalytics("enter_home_programmatically",{})},onShareAppMessage(){return{title:"\u5C0F\u7A0B\u5E8F\u5B98\u65B9\u7EC4\u4EF6\u5C55\u793A",path:"page/component/index"}},data:{list:[{id:"view",name:"\u89C6\u56FE\u5BB9\u5668",open:!1,pages:["view","scroll-view","swiper","movable-view","cover-view"]},{id:"content",name:"\u57FA\u7840\u5185\u5BB9",open:!1,pages:["text","icon","progress","rich-text"]},{id:"form",name:"\u8868\u5355\u7EC4\u4EF6",open:!1,pages:["button","checkbox","form","input","label","picker","picker-view","radio","slider","switch","textarea","editor"]},{id:"nav",name:"\u5BFC\u822A",open:!1,pages:["navigator"]},{id:"media",name:"\u5A92\u4F53\u7EC4\u4EF6",open:!1,pages:["image","video","camera","live-pusher","live-player"]},{id:"map",name:"\u5730\u56FE",open:!1,pages:["map"]},{id:"canvas",name:"\u753B\u5E03",open:!1,pages:["canvas","canvas-2d","webgl"]},{id:"open",name:"\u5F00\u653E\u80FD\u529B",open:!1,pages:["ad","open-data","web-view"]},{id:"obstacle-free",name:"\u65E0\u969C\u788D\u8BBF\u95EE",open:!1,pages:["aria-component"]}],theme:"light"},onLoad(){this.setData({theme:wx.getSystemInfoSync().theme||"light"}),wx.onThemeChange&&wx.onThemeChange(({theme:e})=>{this.setData({theme:e})})},kindToggle(e){let t=e.currentTarget.id,i=this.data.list;for(let o=0,s=i.length;o<s;++o)i[o].id===t?i[o].open=!i[o].open:i[o].open=!1;this.setData({list:i}),wx.reportAnalytics("click_view_programmatically",{})}})});var E=a(()=>{console.log(123)});var U=a((ol,Gr)=>{Gr.exports=`.flex-wrp{
  margin-top: 30px;
  display:flex;
}
.flex-item{
  width: 100px;
  height: 150px;
  font-size: 13px;
}
.flex-item-V{
  margin: 0 auto;
  width: 150px;
  height: 100px;
}
`});var B=a(()=>{E();U();Page({onShareAppMessage(){return{title:"view",path:"page/component/pages/view/view"}}})});var L=a(()=>{console.log(123)});var M=a((ll,Vr)=>{Vr.exports=`.page-section-spacing{
  margin-top: 30px;
}
.scroll-view_H{
  white-space: nowrap;
}
.scroll-view-item{
  height: 150px;
}
.scroll-view-item_H{
  display: inline-block;
  width: 100%;
  height: 150px;
}

.demo-text-1{
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #1AAD19;
  color: #FFFFFF;
  font-size: 18px;
}
.demo-text-1:before{
  content: 'A';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.demo-text-2{
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #2782D7;
  color: #FFFFFF;
  font-size: 18px;
}
.demo-text-2:before{
  content: 'B';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.demo-text-3{
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #F1F1F1;
  color: #353535;
  font-size: 18px;
}
.demo-text-3:before{
  content: 'C';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
`});var R=a(()=>{L();M();var S=["demo1","demo2","demo3"];Page({onLoad(){this.animate("#scroll-sample-object1",[{borderRadius:"0",offset:0},{borderRadius:"25%",offset:.5},{borderRadius:"50%",offset:1}],2e3,{scrollSource:"#scroll-view_D",timeRange:2e3,startScrollOffset:0,endScrollOffset:150}),this.animate("#scroll-sample-object2",[{opacity:1,offset:0},{opacity:.5,offset:.5},{opacity:.3,offset:1}],2e3,{scrollSource:"#scroll-view_D",timeRange:2e3,startScrollOffset:150,endScrollOffset:300}),this.animate("#scroll-sample-object3",[{background:"white",offset:0},{background:"yellow",offset:1}],2e3,{scrollSource:"#scroll-view_D",timeRange:2e3,startScrollOffset:300,endScrollOffset:400})},onPulling(e){console.log("onPulling:",e)},onRefresh(){this._freshing||(this._freshing=!0,setTimeout(()=>{this.setData({triggered:!1}),this._freshing=!1},3e3))},onRestore(e){console.log("onRestore:",e)},onAbort(e){console.log("onAbort",e)},onShareAppMessage(){return{title:"scroll-view",path:"page/component/pages/scroll-view/scroll-view"}},data:{toView:"green",triggered:!1},upper(e){console.log(e)},lower(e){console.log(e)},scroll(e){console.log(e)},scrollToTop(){this.setAction({scrollTop:0})},tap(){for(let e=0;e<S.length;++e)if(S[e]===this.data.toView){this.setData({toView:S[e+1],scrollTop:(e+1)*200});break}},tapMove(){this.setData({scrollTop:this.data.scrollTop+10})}})});var j=a(()=>{console.log(123)});var G=a((dl,Hr)=>{Hr.exports=`@import "../../../common/lib/weui.wxss";

button{
  margin-bottom: 15px;
}
button:last-child{
  margin-bottom: 0;
}
.page-section-title{
  padding: 0;
}
.swiper-item{
  display: block;
  height: 150px;
}
.page-section-title{
  margin-top: 30px;
  position: relative;
}
.info{
  position: absolute;
  right: 0;
  color: #353535;
  font-size: 15px;
}
.page-foot{
  margin-top: 25px;
}`});var V=a(()=>{j();G();Page({onShareAppMessage(){return{title:"swiper",path:"page/component/pages/swiper/swiper"}},data:{background:["demo-text-1","demo-text-2","demo-text-3"],indicatorDots:!0,vertical:!1,autoplay:!1,interval:2e3,duration:500},changeIndicatorDots(){this.setData({indicatorDots:!this.data.indicatorDots})},changeAutoplay(){this.setData({autoplay:!this.data.autoplay})},intervalChange(e){this.setData({interval:e.detail.value})},durationChange(e){this.setData({duration:e.detail.value})}})});var H=a(()=>{console.log(123)});var N=a((bl,Nr)=>{Nr.exports=`button{
  margin: 20px 0;
}
.text-box{
  margin-bottom: 35px;
  padding: 20px 0;
  display: flex;
  min-height: 150px;
  background-color: #FFFFFF;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
  color: #353535;
  line-height: 2em;
}`});var O=a(()=>{H();N();var Or=["2011\u5E741\u6708\uFF0C\u5FAE\u4FE11.0\u53D1\u5E03","\u540C\u5E745\u6708\uFF0C\u5FAE\u4FE12.0\u8BED\u97F3\u5BF9\u8BB2\u53D1\u5E03","10\u6708\uFF0C\u5FAE\u4FE13.0\u65B0\u589E\u6447\u4E00\u6447\u529F\u80FD","2012\u5E743\u6708\uFF0C\u5FAE\u4FE1\u7528\u6237\u7A81\u78341\u4EBF","4\u6708\u4EFD\uFF0C\u5FAE\u4FE14.0\u670B\u53CB\u5708\u53D1\u5E03","\u540C\u5E747\u6708\uFF0C\u5FAE\u4FE14.2\u53D1\u5E03\u516C\u4F17\u5E73\u53F0","2013\u5E748\u6708\uFF0C\u5FAE\u4FE15.0\u53D1\u5E03\u5FAE\u4FE1\u652F\u4ED8","2014\u5E749\u6708\uFF0C\u4F01\u4E1A\u53F7\u53D1\u5E03","\u540C\u6708\uFF0C\u53D1\u5E03\u5FAE\u4FE1\u5361\u5305","2015\u5E741\u6708\uFF0C\u5FAE\u4FE1\u7B2C\u4E00\u6761\u670B\u53CB\u5708\u5E7F\u544A","2016\u5E741\u6708\uFF0C\u4F01\u4E1A\u5FAE\u4FE1\u53D1\u5E03","2017\u5E741\u6708\uFF0C\u5C0F\u7A0B\u5E8F\u53D1\u5E03","......"];Page({onShareAppMessage(){return{title:"text",path:"page/component/pages/text/text"}},data:{text:"",canAdd:!0,canRemove:!1},extraLine:[],add(){this.extraLine.push(Or[this.extraLine.length%12]),this.setData({text:this.extraLine.join(`
`),canAdd:this.extraLine.length<12,canRemove:this.extraLine.length>0}),setTimeout(()=>{this.setData({scrollTop:99999})},0)},remove(){this.extraLine.length>0&&(this.extraLine.pop(),this.setData({text:this.extraLine.join(`
`),canAdd:this.extraLine.length<12,canRemove:this.extraLine.length>0})),setTimeout(()=>{this.setData({scrollTop:99999})},0)}})});var W=a(()=>{console.log(123)});var Y=a((Dl,Wr)=>{Wr.exports=`.container {
  display: block;
}
.icon-box{
  margin-bottom: 20px;
  padding: 0 38px;
  display: flex;
  align-items: center;
}
.icon-box-img{
  margin-right: 28px;
}
.icon-box-ctn{
  flex-shrink: 100;
}
.icon-box-title{
  font-size: 17px;
}
.icon-box-desc{
  margin-top: 6px;
  font-size: 13px;
  color: #888;
}

.icon-small-wrp{
  margin-right: 28px;
  width: 93px;
  height: 93px;
  display: flex;
  align-items: center;
  justify-content: center;
}`});var X=a(()=>{W();Y();Page({onShareAppMessage(){return{title:"icon",path:"page/component/pages/icon/icon"}}})});var Q=a(()=>{console.log(123)});var K=a((zl,Yr)=>{Yr.exports=`progress{
  width: 100%;
}
.progress-box{
  display: flex;
  height: 25px;
  margin-bottom: 30px;
}
.progress-cancel{
  margin-left: 20px;
}`});var J=a(()=>{Q();K();Page({onShareAppMessage(){return{title:"progress",path:"page/component/pages/progress/progress"}}})});var Z=a(()=>{console.log(123)});var $=a((Il,Xr)=>{Xr.exports=`button{
  margin-top: 15px;
  margin-bottom: 15px;
}
.button-sp-area{
  margin: 0 auto;
  width: 60%;
}
.mini-btn{
  margin-right: 5px;
}`});var ae=a(()=>{Z();$();var ee=["default","primary","warn"],te={data:{defaultSize:"default",primarySize:"default",warnSize:"default",disabled:!1,plain:!1,loading:!1},onShareAppMessage(){return{title:"button",path:"page/component/pages/button/button"}},setDisabled(){this.setData({disabled:!this.data.disabled})},setPlain(){this.setData({plain:!this.data.plain})},setLoading(){this.setData({loading:!this.data.loading})},handleContact(e){console.log(e.detail)},handleGetPhoneNumber(e){console.log(e.detail)},handleGetUserInfo(e){console.log(e.detail)},handleOpenSetting(e){console.log(e.detail.authSetting)}};for(let e=0;e<ee.length;++e)(function(t){te[t]=function(){let i=t+"Size",o={};o[i]=this.data[i]==="default"?"mini":"default",this.setData(o)}})(ee[e]);Page(te)});var oe=a(()=>{console.log(123)});var ie=a((Ml,Qr)=>{Qr.exports=`@import "../../../common/lib/weui.wxss";

.checkbox{
  margin-right: 10px;
}
`});var re=a(()=>{oe();ie();Page({onShareAppMessage(){return{title:"checkbox",path:"page/component/pages/checkbox/checkbox"}},data:{items:[{value:"USA",name:"\u7F8E\u56FD"},{value:"CHN",name:"\u4E2D\u56FD",checked:"true"},{value:"BRA",name:"\u5DF4\u897F"},{value:"JPN",name:"\u65E5\u672C"},{value:"ENG",name:"\u82F1\u56FD"},{value:"FRA",name:"\u6CD5\u56FD"}]},checkboxChange(e){console.log("checkbox\u53D1\u751Fchange\u4E8B\u4EF6\uFF0C\u643A\u5E26value\u503C\u4E3A\uFF1A",e.detail.value);let t=this.data.items,i=e.detail.value;for(let o=0,s=t.length;o<s;++o){t[o].checked=!1;for(let l=0,h=i.length;l<h;++l)if(t[o].value===i[l]){t[o].checked=!0;break}}this.setData({items:t})}})});var se=a(()=>{console.log(123)});var ne=a((Hl,Kr)=>{Kr.exports=`@import "../../../common/lib/weui.wxss";

label {
  display: inline-block;
  min-width: 235px;
  margin-right: 10px;
}
form{
  width: 100%;
}
.picker-text {
  margin-left: 10px;
  position: relative;
}
`});var le=a(()=>{se();ne();Page({onShareAppMessage(){return{title:"form",path:"page/component/pages/form/form"}},data:{pickerHidden:!0,chosen:""},pickerConfirm(e){this.setData({pickerHidden:!0}),this.setData({chosen:e.detail.value})},pickerCancel(){this.setData({pickerHidden:!0})},pickerShow(){this.setData({pickerHidden:!1})},formSubmit(e){console.log("form\u53D1\u751F\u4E86submit\u4E8B\u4EF6\uFF0C\u643A\u5E26\u6570\u636E\u4E3A\uFF1A",e.detail.value)},formReset(e){console.log("form\u53D1\u751F\u4E86reset\u4E8B\u4EF6\uFF0C\u643A\u5E26\u6570\u636E\u4E3A\uFF1A",e.detail.value),this.setData({chosen:""})}})});var pe=a(()=>{console.log(123)});var ce=a((Xl,Jr)=>{Jr.exports=`@import "../../../common/lib/weui.wxss";

.page-section{
  margin-bottom: 10px;
}`});var me=a(()=>{pe();ce();Page({onShareAppMessage(){return{title:"input",path:"page/component/pages/input/input"}},data:{focus:!1,inputValue:""},bindKeyInput(e){this.setData({inputValue:e.detail.value})},bindReplaceInput(e){let t=e.detail.value,i=e.detail.cursor,o;return i!==-1&&(o=e.detail.value.slice(0,i),i=o.replace(/11/g,"2").length),{value:t.replace(/11/g,"2"),cursor:i}},bindHideKeyboard(e){e.detail.value==="123"&&wx.hideKeyboard()}})});var ge=a(()=>{console.log(123)});var de=a(($l,Zr)=>{Zr.exports=`.label-1, .label-2{
  margin: 15px 0;
}
.label-3-text{
  color: #576B95;
  font-size: 14px;
}
.checkbox-3{
  display: block;
  margin: 15px 0;
}`});var he=a(()=>{ge();de();Page({onShareAppMessage(){return{title:"label",path:"page/component/pages/label/label"}},data:{checkboxItems:[{name:"USA",value:"\u7F8E\u56FD"},{name:"CHN",value:"\u4E2D\u56FD",checked:"true"}],radioItems:[{name:"USA",value:"\u7F8E\u56FD"},{name:"CHN",value:"\u4E2D\u56FD",checked:"true"}],hidden:!1},checkboxChange(e){let t=e.detail.value,i={};for(let o=0;o<this.data.checkboxItems.length;o++)t.indexOf(this.data.checkboxItems[o].name)!==-1?i["checkboxItems["+o+"].checked"]=!0:i["checkboxItems["+o+"].checked"]=!1;this.setData(i)},radioChange(e){let t=e.detail.value,i={};for(let o=0;o<this.data.radioItems.length;o++)t.indexOf(this.data.radioItems[o].name)!==-1?i["radioItems["+o+"].checked"]=!0:i["radioItems["+o+"].checked"]=!1;this.setData(i)},tapEvent(){console.log("\u6309\u94AE\u88AB\u70B9\u51FB")}})});var ue=a(()=>{console.log(123)});var xe=a((ip,$r)=>{$r.exports=`@import "../../../common/lib/weui.wxss";

.picker{
  padding: 10px 13px;
  background-color: #FFFFFF;
}
`});var we=a(()=>{ue();xe();Page({onShareAppMessage(){return{title:"picker",path:"page/component/pages/picker/picker"}},data:{array:["\u4E2D\u56FD","\u7F8E\u56FD","\u5DF4\u897F","\u65E5\u672C"],index:0,date:"2016-09-01",time:"12:01"},bindPickerChange(e){console.log("picker\u53D1\u9001\u9009\u62E9\u6539\u53D8\uFF0C\u643A\u5E26\u503C\u4E3A",e.detail.value),this.setData({index:e.detail.value})},bindDateChange(e){this.setData({date:e.detail.value})},bindTimeChange(e){this.setData({time:e.detail.value})}})});var be=a(()=>{console.log(123)});var fe=a((pp,es)=>{es.exports=`@import "../../../common/lib/weui.wxss";

.radio {
  margin-right: 10px;
}
`});var ve=a(()=>{be();fe();Page({onShareAppMessage(){return{title:"radio",path:"page/component/pages/radio/radio"}},data:{items:[{value:"USA",name:"\u7F8E\u56FD"},{value:"CHN",name:"\u4E2D\u56FD",checked:"true"},{value:"BRA",name:"\u5DF4\u897F"},{value:"JPN",name:"\u65E5\u672C"},{value:"ENG",name:"\u82F1\u56FD"},{value:"FRA",name:"\u6CD5\u56FD"}]},radioChange(e){console.log("radio\u53D1\u751Fchange\u4E8B\u4EF6\uFF0C\u643A\u5E26value\u503C\u4E3A\uFF1A",e.detail.value);let t=this.data.items;for(let i=0,o=t.length;i<o;++i)t[i].checked=t[i].value===e.detail.value;this.setData({items:t})}})});var ye=a(()=>{console.log(123)});var ke=a((hp,ts)=>{ts.exports=`/* page/component/pages/slider/slider.wxss */

slider {
  margin: 0;
}`});var Ae=a(()=>{ye();ke();var De={onShareAppMessage(){return{title:"slider",path:"page/component/pages/slider/slider"}}};for(let e=1;e<5;++e)(function(t){De["slider"+t+"change"]=function(i){console.log("slider"+t+"\u53D1\u751Fchange\u4E8B\u4EF6\uFF0C\u643A\u5E26\u503C\u4E3A",i.detail.value)}})(e);Page(De)});var qe=a(()=>{console.log(123)});var Se=a((fp,as)=>{as.exports='@import "../../../common/lib/weui.wxss";'});var Ce=a(()=>{qe();Se();Page({onShareAppMessage(){return{title:"switch",path:"page/component/pages/switch/switch"}},switch1Change(e){console.log("switch1 \u53D1\u751F change \u4E8B\u4EF6\uFF0C\u643A\u5E26\u503C\u4E3A",e.detail.value)},switch2Change(e){console.log("switch2 \u53D1\u751F change \u4E8B\u4EF6\uFF0C\u643A\u5E26\u503C\u4E3A",e.detail.value)}})});var ze=a(()=>{console.log(123)});var _e=a((Ap,os)=>{os.exports=`textarea {
    width: 350px;
    padding: 13px 0;
}
.textarea-wrp {
    padding: 0 13px;
}`});var Pe=a(()=>{ze();_e();Page({onShareAppMessage(){return{title:"textarea",path:"page/component/pages/textarea/textarea"}},data:{focus:!1},bindTextAreaBlur(e){console.log(e.detail.value)}})});var Te=a(()=>{console.log(123)});var Fe=a((_p,is)=>{is.exports=`.navigator-hover button{
  background-color: #DEDEDE;
}
.other-navigator-hover button{
  background-color: #DEDEDE;
}
`});var Ie=a(()=>{Te();Fe();Page({onShareAppMessage(){return{title:"navigator",path:"page/component/pages/navigator/navigator"}}})});var Ee=a(()=>{console.log(123)});var Ue=a((Ep,rs)=>{rs.exports="/* page/component/pages/navigator/navigate.wxss */"});var Be=a(()=>{Ee();Ue();Page({onShareAppMessage(){return{title:"navigatePage",path:"page/component/pages/navigator/navigate"}},onLoad(e){console.log(e),this.setData({title:e.title})}})});var Le=a(()=>{console.log(123)});var Me=a((Rp,ss)=>{ss.exports="/* page/component/pages/navigator/redirect.wxss */"});var Re=a(()=>{Le();Me();Page({onShareAppMessage(){return{title:"redirectPage",path:"page/component/pages/navigator/redirect"}},onLoad(e){console.log(e),this.setData({title:e.title})}})});var je=a(()=>{console.log(123)});var Ge=a((Np,ns)=>{ns.exports=`.page-section-ctn {
  text-align: center;
}

.image {
  margin-top: 15px;
  width: 345px;
  height: 225px;
}`});var Ve=a(()=>{je();Ge();Page({onShareAppMessage(){return{title:"image",path:"page/component/pages/image/image"}},onLoad(){wx.cloud.getTempFileURL({fileList:[{fileID:"cloud://release-b86096.7265-release-b86096-1258211818/\u5F00\u53D1\u8005\u793E\u533A.webp",maxAge:60*60}]}).then(e=>{console.log(e),this.setData({webpImageUrl:e.fileList[0].tempFileURL})}).catch(e=>{console.log("CLOUD\uFF1Aimage \u4E34\u65F6\u94FE\u63A5\u83B7\u53D6\u5931\u8D25")})},data:{imageUrl:"cloud://release-b86096.7265-release-b86096-1258211818/demo.jpg",webpImageURL:""}})});var He=a(()=>{console.log(123)});var Ne=a((Qp,ls)=>{ls.exports=`@import "../../../common/lib/weui.wxss";
video {
  width: 345px;
}

.weui-cells{
  margin: 20px 15px 0;
  text-align: left;
}
.weui-label{
  width: 5em;
}
.auto-rotate-container {
  margin: 20px 20px 0;
  display: flex;
  justify-content: space-between;
}

.video-container {
  margin: 11px 3px;
  display: flex;
  justify-content: center;
}`});var Oe=a(()=>{He();Ne();function ps(){let e=[];for(let t=0;t<3;++t){let i=Math.floor(Math.random()*256).toString(16);i=i.length===1?"0"+i:i,e.push(i)}return"#"+e.join("")}Page({onShareAppMessage(){return{title:"video",path:"page/component/pages/video/video"}},onReady(){this.videoContext=wx.createVideoContext("myVideo")},onHide(){},inputValue:"",data:{enableAutoRotation:!0,src:"",danmuList:[{text:"\u7B2C 1s \u51FA\u73B0\u7684\u5F39\u5E55",color:"#ff0000",time:1},{text:"\u7B2C 3s \u51FA\u73B0\u7684\u5F39\u5E55",color:"#ff00ff",time:3}]},bindInputBlur(e){this.inputValue=e.detail.value},bindButtonTap(){let e=this;wx.chooseVideo({sourceType:["album","camera"],maxDuration:60,camera:["front","back"],success(t){e.setData({src:t.tempFilePath})}})},bindVideoEnterPictureInPicture(){console.log("\u8FDB\u5165\u5C0F\u7A97\u6A21\u5F0F")},bindVideoLeavePictureInPicture(){console.log("\u9000\u51FA\u5C0F\u7A97\u6A21\u5F0F")},bindPlayVideo(){this.videoContext.play()},bindSendDanmu(){this.videoContext.sendDanmu({text:this.inputValue,color:ps()})},videoErrorCallback(e){console.log("\u89C6\u9891\u9519\u8BEF\u4FE1\u606F:"),console.log(e.detail.errMsg)},handleSwitchChange(e){this.setData({enableAutoRotation:e.detail.value})}})});var We=a(()=>{console.log(123)});var Ye=a((ec,cs)=>{cs.exports=`.page-section-title {
  margin-bottom: 15px;
}

.navigator {
  color: var(--weui-LINK);
  display: inline-block;
}`});var Xe=a(()=>{We();Ye();Page({onShareAppMessage(){return{title:"map",path:"page/component/pages/map/map"}},data:{latitude:23.099994,longitude:113.32452,markers:[{latitude:23.099994,longitude:113.32452,name:"T.I.T \u521B\u610F\u56ED"}],covers:[{latitude:23.099994,longitude:113.34452,iconPath:"/image/location.png"},{latitude:23.099994,longitude:113.30452,iconPath:"/image/location.png"}],polygons:[{points:[{latitude:23.099994,longitude:113.32452},{latitude:23.098994,longitude:113.32352},{latitude:23.098994,longitude:113.32552}],strokeWidth:3,strokeColor:"#FFFFFFAA"}],subKey:"B5QBZ-7JTLU-DSSVA-2BRJ3-TNXLF-2TBR7",enable3d:!1,showCompass:!1,enableOverlooking:!1,enableZoom:!0,enableScroll:!0,enableRotate:!1,drawPolygon:!1,enableSatellite:!1,enableTraffic:!1},toggle3d(){this.setData({enable3d:!this.data.enable3d})},toggleShowCompass(){this.setData({showCompass:!this.data.showCompass})},toggleOverlooking(){this.setData({enableOverlooking:!this.data.enableOverlooking})},toggleZoom(){this.setData({enableZoom:!this.data.enableZoom})},toggleScroll(){this.setData({enableScroll:!this.data.enableScroll})},toggleRotate(){this.setData({enableRotate:!this.data.enableRotate})},togglePolygon(){this.setData({drawPolygon:!this.data.drawPolygon})},toggleSatellite(){this.setData({enableSatellite:!this.data.enableSatellite})},toggleTraffic(){this.setData({enableTraffic:!this.data.enableTraffic})}})});var k=a((oc,Qe)=>{function ms(e){if(typeof e!="number"||e<0)return e;let t=parseInt(e/3600,10);e%=3600;let i=parseInt(e/60,10);return e=parseInt(e%60,10),[t,i,e].map(function(s){return s=s.toString(),s[1]?s:"0"+s}).join(":")}function gs(e,t){return typeof e=="string"&&typeof t=="string"&&(e=parseFloat(e),t=parseFloat(t)),e=e.toFixed(2),t=t.toFixed(2),{longitude:e.toString().split("."),latitude:t.toString().split(".")}}function C(e){return e<1?0:e<=2?1:C(e-1)+C(e-2)}function z(e,t=2){e=e.toString();let i=Math.max(t-e.length,0);return new Array(i).fill(0).join("")+e}function ds(e,t=!1){let i=e.getFullYear(),o=e.getMonth()+1,s=e.getDate(),l=e.getHours(),h=e.getMinutes(),g=e.getSeconds(),d=e.getMilliseconds(),u=[i,o,s].map(x=>z(x,2)).join("-")+" "+[l,h,g].map(x=>z(x,2)).join(":");return t&&(u+="."+z(d,3)),u}function hs(e,t){e=e.split("."),t=t.split(".");let i=Math.max(e.length,t.length);for(;e.length<i;)e.push("0");for(;t.length<i;)t.push("0");for(let o=0;o<i;o++){let s=parseInt(e[o],10),l=parseInt(t[o],10);if(s>l)return 1;if(s<l)return-1}return 0}Qe.exports={formatTime:ms,formatLocation:gs,fib:C,formatDateTime:ds,compareVersion:hs}});var Ke=a(()=>{console.log(123)});var Je=a((sc,us)=>{us.exports=`@import '../../../common//lib/weui.wxss';

.canvas {
  width: 305px;
  height: 305px;
  background-color: var(--weui-BG-1);
  margin-top: 30px;
}`});var $e={};p($e);var Ze,et=c(()=>{Ze=y(k());Ke();Je();Page({onShareAppMessage(){return{title:"canvas",path:"page/component/pages/canvas/canvas"}},data:{canIUse:!0},onReady(){let{SDKVersion:e}=wx.getSystemInfoSync();(0,Ze.compareVersion)(e,"2.7.0")<0?(console.log("123"),this.setData({canIUse:!1})):(this.position={x:150,y:150,vx:2,vy:2},this.drawBall(),this.interval=setInterval(this.drawBall,17))},init(e){let t=e[0].width,i=e[0].height,o=e[0].node,s=o.getContext("2d"),l=wx.getSystemInfoSync().pixelRatio;o.width=t*l,o.height=i*l,s.scale(l,l);let h=()=>{this.render(o,s),o.requestAnimationFrame(h)};o.requestAnimationFrame(h);let g=o.createImage();g.onload=()=>{this._img=g},g.src="./car.png"},render(e,t){t.clearRect(0,0,305,305),this.drawBall2D(t),this.drawCar(t)},drawBall(){let e=this.position;e.x+=e.vx,e.y+=e.vy,e.x>=300&&(e.vx=-2),e.x<=7&&(e.vx=2),e.y>=300&&(e.vy=-2),e.y<=7&&(e.vy=2);let t=wx.createCanvasContext("canvas");function i(o,s){t.beginPath(0),t.arc(o,s,5,0,Math.PI*2),t.setFillStyle("#1aad19"),t.setStrokeStyle("rgba(1,1,1,0)"),t.fill(),t.stroke()}i(e.x,150),i(150,e.y),i(300-e.x,150),i(150,300-e.y),i(e.x,e.y),i(300-e.x,300-e.y),i(e.x,300-e.y),i(300-e.x,e.y),t.draw()},onUnload(){clearInterval(this.interval)}})});var tt=a(()=>{console.log(123)});var at=a((pc,xs)=>{xs.exports=`/* page/component/pages/ad/ad.wxss */
`});var ot=a(()=>{tt();at();var ws=wx.getSystemInfoSync();Page({onShareAppMessage(){return{title:"ad",path:"page/component/pages/ad/ad"}},data:{platform:ws.platform}})});var it=a(()=>{console.log(123)});var rt=a((hc,bs)=>{bs.exports=`movable-view {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  background: #1AAD19;
  color: #fff;  
}

movable-area {
  height: 200px;
  width: 200px;
  margin: 25px 0px 0 25px;
  background-color: #ccc;
  overflow: hidden;
}

.max {
  width: 300px;
  height: 300px;
}

.page-section {
  width: 100%;
  margin-bottom: 10px;
}

.page-section-title {
  margin-top: 25px;
  font-size: 14px;
  color: #999999;
  margin-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
}

.page-section-title.first {
  margin-top: 0;
}

.btn-area {
  margin-top: 10px;
}
`});var st=a(()=>{it();rt();Page({onShareAppMessage(){return{title:"movable-view",path:"page/component/pages/movable-view/movable-view"}},data:{x:0,y:0,scale:2},tap(){this.setData({x:30,y:30})},tap2(){this.setData({scale:3})},onChange(e){console.log(e.detail)},onScale(e){console.log(e.detail)}})});var nt=a(()=>{console.log(123)});var lt=a((fc,fs)=>{fs.exports=`.cover-view {
  position: absolute;
  top: calc(50% - 75px);
  left: calc(50% - 150px);
  /* opacity: .7; */
}

.flex-wrp{
  display:flex;
}

.flex-item{
  width: 100px;
  height: 150px;
  font-size: 13px;
}

.demo-text-1 {
  background: rgba(26, 173, 25, 0.7);
}

.demo-text-2 {
  background: rgba(39, 130, 215, 0.7);
}

.demo-text-3 {
  background: rgba(255, 255, 255, 0.7);
}`});var pt=a(()=>{nt();lt();Page({onShareAppMessage(){return{title:"cover-view",path:"page/component/pages/cover-view/cover-view"}},data:{latitude:23.099994,longitude:113.32452}})});var ct=a(()=>{console.log(123)});var mt=a((Ac,vs)=>{vs.exports=`.page-content {
  width: auto;
  margin: 15px 0;
  padding: 0 25px;
}

.code-fragment {
  height: 325px;
}

.code-textarea {
  width: auto;
  height: 325px;
  border: 1px solid #1AAD19;
}

.p {
  color: #1AAD19;
  margin-top: 15px;
}

.space {
  display: inline-block;
  background: red;
  width: 5px;
}

scroll-view {
  height: 325px;
  border: 1px solid #1AAD19;
  white-space: pre;
  padding: 5px;
  box-sizing: border-box;
}
`});var gt=a(()=>{ct();mt();var ys=`<div class="div_class">
  <h1>Title</h1>
  <p class="p">
    Life is&nbsp;<i>like</i>&nbsp;a box of
    <b>&nbsp;chocolates</b>.
  </p>
</div>
`,ks=`Page({
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
`;Page({onShareAppMessage(){return{title:"rich-text",path:"page/component/pages/rich-text/rich-text"}},data:{htmlSnip:ys,nodeSnip:ks,renderedByHtml:!1,renderedByNode:!1,nodes:[{name:"div",attrs:{class:"div_class",style:"line-height: 60px; color: #1AAD19;"},children:[{type:"text",text:"You never know what you're gonna get."}]}]},renderHtml(){this.setData({renderedByHtml:!0})},renderNode(){this.setData({renderedByNode:!0})},enterCode(e){console.log(e.detail.value),this.setData({htmlSnip:e.detail.value})}})});var dt=a(()=>{console.log(123)});var ht=a((_c,Ds)=>{Ds.exports=`.selected-date {
  text-align: center;
  margin: 15px;
}

.icon-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.picker-icon {
  width: 25px;
  height: 25px;
}`});var ft=a(()=>{dt();ht();var ut=new Date,xt=[],wt=[],bt=[];for(let e=1990;e<=ut.getFullYear();e++)xt.push(e);for(let e=1;e<=12;e++)wt.push(e);for(let e=1;e<=31;e++)bt.push(e);Page({onShareAppMessage(){return{title:"picker-view",path:"page/component/pages/picker-view/picker-view"}},data:{years:xt,year:ut.getFullYear(),months:wt,month:2,days:bt,day:2,value:[9999,1,1],isDaytime:!0},bindChange(e){let t=e.detail.value;this.setData({year:this.data.years[t[0]],month:this.data.months[t[1]],day:this.data.days[t[2]],isDaytime:!t[3]})}})});var vt=a(()=>{console.log(123)});var yt=a((Ec,As)=>{As.exports=`@import "../../../common/lib/weui.wxss";

camera {
  height: 250px;
}

.preview-tips {
  margin: 10px 0;  
}

.photo, .video {
  margin-top: 25px;
  width: 100%;
}

.btn-area {
  margin-top: 0;
}

.first-btn {
  margin-top: 15px;
}

form {
  margin-top: 15px;
}

.weui-cell__bd {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  min-height: 30px;
}

.info-container {
  margin: 12px;
  text-align: center;
}`});var Dt=a(()=>{vt();yt();var qs=`
  attribute vec3 aPos;
  attribute vec2 aVertexTextureCoord;
  varying highp vec2 vTextureCoord;

  void main(void){
    gl_Position = vec4(aPos, 1);
    vTextureCoord = aVertexTextureCoord;
  }
`,Ss=`
  varying highp vec2 vTextureCoord;
  uniform sampler2D uSampler;

  void main(void) {
    gl_FragColor = texture2D(uSampler, vTextureCoord);
  }
`,Cs=[-1,-1,0,1,-1,0,1,1,0,-1,1,0],zs=[0,1,2,0,2,3],_s=[0,0,1,0,1,1,0,1];function kt(e,t,i){let o=e.createShader(i);return e.shaderSource(o,t),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS)||console.error("Error compiling shader: "+e.getShaderInfoLog(o)),o}var v={};function Ps(e,t,i){let o=e.getContext("webgl");if(!o){console.error("Unable to get webgl context.");return}let s=wx.getSystemInfoSync();o.canvas.width=s.pixelRatio*t,o.canvas.height=s.pixelRatio*i,o.viewport(0,0,o.drawingBufferWidth,o.drawingBufferHeight);let l=kt(o,qs,o.VERTEX_SHADER),h=kt(o,Ss,o.FRAGMENT_SHADER),g=o.createProgram();if(o.attachShader(g,l),o.attachShader(g,h),o.linkProgram(g),!o.getProgramParameter(g,o.LINK_STATUS)){console.error("Unable to initialize the shader program.");return}o.useProgram(g);let d=o.createTexture();o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,d),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!0),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.bindTexture(o.TEXTURE_2D,null),v.vertexBuffer=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,v.vertexBuffer),o.bufferData(o.ARRAY_BUFFER,new Float32Array(Cs),o.STATIC_DRAW),v.vertexIndiceBuffer=o.createBuffer(),o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,v.vertexIndiceBuffer),o.bufferData(o.ELEMENT_ARRAY_BUFFER,new Uint16Array(zs),o.STATIC_DRAW);let u=o.getAttribLocation(g,"aPos");o.vertexAttribPointer(u,3,o.FLOAT,!1,0,0),o.enableVertexAttribArray(u),v.trianglesTexCoordBuffer=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,v.trianglesTexCoordBuffer),o.bufferData(o.ARRAY_BUFFER,new Float32Array(_s),o.STATIC_DRAW);let x=o.getAttribLocation(g,"aVertexTextureCoord");o.enableVertexAttribArray(x),o.vertexAttribPointer(x,2,o.FLOAT,!1,0,0);let A=o.getUniformLocation(g,"uSampler");return o.uniform1i(A,0),(Tr,Fr,Ir)=>{o.bindTexture(o.TEXTURE_2D,d),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,Fr,Ir,0,o.RGBA,o.UNSIGNED_BYTE,Tr),o.drawElements(o.TRIANGLES,6,o.UNSIGNED_SHORT,0)}}Page({onShareAppMessage(){return{title:"camera",path:"page/component/pages/camera/camera"}},data:{src:"",videoSrc:"",position:"back",mode:"scanCode",result:{},frameWidth:0,frameHeight:0,width:288,height:358,showCanvas:!1},onReady(){this.ctx=wx.createCameraContext()},init(e){this.listener&&this.listener.stop();let t=e.node,i=Ps(t,this.data.width,this.data.height);this.listener=this.ctx.onCameraFrame(o=>{i(new Uint8Array(o.data),o.width,o.height);let{frameWidth:s,frameHeight:l}=this.data;s===o.width&&l==o.height||this.setData({frameWidth:o.width,frameHeight:o.height})}),this.listener.start()},takePhoto(){this.ctx.takePhoto({quality:"high",success:e=>{this.setData({src:e.tempImagePath})}})},startRecord(){this.ctx.startRecord({success:()=>{console.log("startRecord")}})},stopRecord(){this.ctx.stopRecord({success:e=>{this.setData({src:e.tempThumbPath,videoSrc:e.tempVideoPath})}})},togglePosition(){this.setData({position:this.data.position==="front"?"back":"front"})},error(e){console.log(e.detail)},handleShowCanvas(){let e=this;this.setData({showCanvas:!this.data.showCanvas},()=>{this.data.showCanvas&&wx.createSelectorQuery().select("#webgl").node(this.init).exec()})}})});var At=a(()=>{console.log(123)});var qt=a((Rc,Ts)=>{Ts.exports=`@import "../../../common/lib/weui.wxss";

camera {
  height: 250px;
}

.btn-area {
  margin-top: 0;
}

form {
  margin-top: 15px;
}

.weui-cell__bd {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  min-height: 30px;
}`});var St=a(()=>{At();qt();Page({onShareAppMessage(){return{title:"camera",path:"page/component/pages/camera-scan-code/camera-scan-code"}},data:{result:{}},onReady(){wx.showModal({title:"\u63D0\u793A",content:"\u5C06\u6444\u50CF\u5934\u5BF9\u51C6\u4E00\u7EF4\u7801\u5373\u53EF\u626B\u63CF",showCancel:!1})},scanCode(e){console.log("scanCode:",e),this.setData({result:e.detail})},navigateBack(){wx.navigateBack()},error(e){console.log(e.detail)}})});var Ct=a(()=>{console.log(123)});var zt=a((Nc,Fs)=>{Fs.exports=`.page-section-ctn {
  text-align: center;
}

.image {
  margin-top: 15px;
  width: 245px;
  height: 284px;
}`});var _t=a(()=>{Ct();zt();Page({onShareAppMessage(){return{title:"map\u5E95\u56FE\u6837\u5F0F",path:"page/component/pages/map-styles/map-styles"}}})});var Pt=a(()=>{console.log(123)});var Tt=a((Qc,Is)=>{Is.exports=`live-player {
  display: flex;
  width: 100%;
  height: 325px;
}

.page-body-button {
  margin-bottom: 15px;
}

.page-url {
  margin: 0 auto 15px;
  width: 90%;

}

input {
  width: 90%;
  margin: 0 auto 15px;
}`});var Ft=a(()=>{Pt();Tt();Page({onShareAppMessage(){return{title:"live-player",path:"page/component/pages/live-player/live-player"}},data:{videoSrc:""},onReady(e){this.ctx=wx.createLivePlayerContext("player")},handleScanQRCode(){wx.scanCode({complete:e=>{let{result:t}=e;this.setData({videoSrc:t})}})},handleLivePlayerStateChange(e){console.log("live-player code:",e.detail.code)},handleLivePlayerError(e){console.error("live-player error:",e.detail.errMsg)},handlePlay(){this.ctx.play({success:e=>{console.log("play success")},fail:e=>{console.log("play fail")}})},handlePause(){this.ctx.pause({success:e=>{console.log("pause success")},fail:e=>{console.log("pause fail")}})},handleStop(){this.ctx.stop({success:e=>{console.log("stop success")},fail:e=>{console.log("stop fail")}})},handleResume(){this.ctx.resume({success:e=>{console.log("resume success")},fail:e=>{console.log("resume fail")}})},handleMute(){this.ctx.mute({success:e=>{console.log("mute success")},fail:e=>{console.log("mute fail")}})},handleVideoSrcInput(e){this.setData({videoSrc:e.detail.value})}})});var It=a(()=>{console.log(123)});var Et=a((em,Es)=>{Es.exports=`live-pusher {
  display: flex;
  margin: 11px auto;
  height: 325px;
}

.page-body-button {
  margin-bottom: 15px;
}
.page-url {
  margin: 0 auto 15px;
  width: 90%;
}

input {
  width: 90%;
  margin: 0 auto 15px;
}

`});var Ut=a(()=>{It();Et();Page({onShareAppMessage(){return{title:"live-pusher",path:"page/component/pages/live-pusher/live-pusher"}},data:{videoSrc:""},onReady(e){this.ctx=wx.createLivePusherContext("pusher")},handleLivePusherStateChange(e){console.log("live-pusher code:",e.detail.code)},handleLivePusherError(e){console.error("live-pusher error:",e.detail.errMsg)},handleStart(){this.ctx.start({success:e=>{console.log("start success")},fail:e=>{console.log("start fail")}})},handleScanQRCode(){wx.scanCode({complete:e=>{let{result:t}=e;this.setData({videoSrc:t})}})},handlePause(){this.ctx.pause({success:e=>{console.log("pause success")},fail:e=>{console.log("pause fail")}})},handleStop(){this.ctx.stop({success:e=>{console.log("stop success")},fail:e=>{console.log("stop fail")}})},handleResume(){this.ctx.resume({success:e=>{console.log("resume success")},fail:e=>{console.log("resume fail")}})},handleSwitchCamera(){this.ctx.switchCamera({success:e=>{console.log("switch camera success")},fail:e=>{console.log("switch camera fail")}})},handleVideoSrcInput(e){this.setData({videoSrc:e.detail.value})}})});var Bt=a(()=>{console.log(123)});var Lt=a((rm,Us)=>{Us.exports=`.text-box{
  margin-bottom: 35px;
  padding: 20px 0;
  display: flex;
  min-height: 150px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
  color: #353535;
  line-height: 2em;
}`});var Mt=a(()=>{Bt();Lt();Page({onShareAppMessage(){return{title:"\u65E0\u969C\u788D\u8BBF\u95EE",path:"page/component/pages/aria-component/aria-component"}}})});var Rt=a(()=>{console.log(123)});var jt=a((cm,Bs)=>{Bs.exports=`@import "../common/index.wxss";

.weui-agree__link {
  display: inline;
  color: var(--weui-LINK);
}
`});var Gt=a(()=>{Rt();jt();Page({onShareAppMessage(){return{title:"\u5C0F\u7A0B\u5E8F\u63A5\u53E3\u80FD\u529B\u5C55\u793A",path:"page/API/index"}},data:{list:[{id:"api",name:"\u5F00\u653E\u63A5\u53E3",open:!1,pages:[{zh:"\u5FAE\u4FE1\u767B\u5F55",url:"login/login"},{zh:"\u83B7\u53D6\u7528\u6237\u4FE1\u606F",url:"get-user-info/get-user-info"},{zh:"\u53D1\u8D77\u652F\u4ED8",url:"request-payment/request-payment"},{zh:"\u8F6C\u53D1",url:"share/share"},{zh:"\u8F6C\u53D1\u6309\u94AE",url:"share-button/share-button"},{zh:"\u5BA2\u670D\u6D88\u606F",url:"custom-message/custom-message"},{zh:"\u8BA2\u9605\u6D88\u606F",url:"subscribe-message/subscribe-message"},{zh:"\u6536\u8D27\u5730\u5740",url:"choose-address/choose-address"},{zh:"\u83B7\u53D6\u53D1\u7968\u62AC\u5934",url:"choose-invoice-title/choose-invoice-title"},{zh:"\u751F\u7269\u8BA4\u8BC1",url:"soter-authentication/soter-authentication"},{zh:"\u8BBE\u7F6E",url:"setting/setting"}]},{id:"page",name:"\u754C\u9762",open:!1,pages:[{zh:"\u8BBE\u7F6E\u754C\u9762\u6807\u9898",url:"set-navigation-bar-title/set-navigation-bar-title"},{zh:"\u6807\u9898\u680F\u52A0\u8F7D\u52A8\u753B",url:"navigation-bar-loading/navigation-bar-loading"},{zh:"\u8BBE\u7F6ETabBar",url:"@set-tab-bar"},{zh:"\u9875\u9762\u8DF3\u8F6C",url:"navigator/navigator"},{zh:"\u4E0B\u62C9\u5237\u65B0",url:"pull-down-refresh/pull-down-refresh"},{zh:"\u521B\u5EFA\u52A8\u753B",url:"animation/animation"},{zh:"\u521B\u5EFA\u7ED8\u753B",url:"canvas/canvas"},{zh:"\u663E\u793A\u64CD\u4F5C\u83DC\u5355",url:"action-sheet/action-sheet"},{zh:"\u663E\u793A\u6A21\u6001\u5F39\u7A97",url:"modal/modal"},{zh:"\u9875\u9762\u6EDA\u52A8",url:"page-scroll/page-scroll"},{zh:"\u663E\u793A\u6D88\u606F\u63D0\u793A\u6846",url:"toast/toast"},{zh:"\u83B7\u53D6WXML\u8282\u70B9\u4FE1\u606F",url:"get-wxml-node-info/get-wxml-node-info"},{zh:"WXML\u8282\u70B9\u5E03\u5C40\u76F8\u4EA4\u72B6\u6001",url:"intersection-observer/intersection-observer"}]},{id:"device",name:"\u8BBE\u5907",open:!1,pages:[{zh:"\u83B7\u53D6\u624B\u673A\u7F51\u7EDC\u72B6\u6001",url:"get-network-type/get-network-type"},{zh:"\u76D1\u542C\u624B\u673A\u7F51\u7EDC\u53D8\u5316",url:"on-network-status-change/on-network-status-change"},{zh:"\u83B7\u53D6\u624B\u673A\u7CFB\u7EDF\u4FE1\u606F",url:"get-system-info/get-system-info"},{zh:"\u83B7\u53D6\u624B\u673A\u8BBE\u5907\u7535\u91CF",url:"get-battery-info/get-battery-info"},{zh:"\u76D1\u542C\u91CD\u529B\u611F\u5E94\u6570\u636E",url:"on-accelerometer-change/on-accelerometer-change"},{zh:"\u76D1\u542C\u7F57\u76D8\u6570\u636E",url:"on-compass-change/on-compass-change"},{zh:"\u6253\u7535\u8BDD",url:"make-phone-call/make-phone-call"},{zh:"\u626B\u7801",url:"scan-code/scan-code"},{zh:"\u526A\u5207\u677F",url:"clipboard-data/clipboard-data"},{zh:"\u84DD\u7259",url:"bluetooth/bluetooth"},{zh:"iBeacon",url:"ibeacon/ibeacon"},{zh:"\u5C4F\u5E55\u4EAE\u5EA6",url:"screen-brightness/screen-brightness"},{zh:"\u7528\u6237\u622A\u5C4F\u4E8B\u4EF6",url:"capture-screen/capture-screen"},{zh:"\u632F\u52A8",url:"vibrate/vibrate"},{zh:"\u624B\u673A\u8054\u7CFB\u4EBA",url:"add-contact/add-contact"},{zh:"Wi-Fi",url:"wifi/wifi"}]},{id:"performance",name:"\u6027\u80FD",open:!1,pages:[{zh:"\u83B7\u53D6\u6027\u80FD\u6570\u636E",url:"get-performance/get-performance"}]},{id:"network",name:"\u7F51\u7EDC",open:!1,pages:[{zh:"\u53D1\u8D77\u4E00\u4E2A\u8BF7\u6C42",url:"request/request"},{zh:"WebSocket",url:"web-socket/web-socket"},{zh:"\u4E0A\u4F20\u6587\u4EF6",url:"upload-file/upload-file"},{zh:"\u4E0B\u8F7D\u6587\u4EF6",url:"download-file/download-file"},{zh:"UDPSocket",url:"udp-socket/udp-socket"},{zh:"mDNS",url:"mdns/mdns"}]},{id:"media",name:"\u5A92\u4F53",open:!1,pages:[{zh:"\u56FE\u7247",url:"image/image"},{zh:"\u97F3\u9891",url:"audio/audio"},{zh:"\u5F55\u97F3",url:"voice/voice"},{zh:"\u80CC\u666F\u97F3\u9891",url:"background-audio/background-audio"},{zh:"\u6587\u4EF6",url:"file/file"},{zh:"\u89C6\u9891",url:"video/video"},{zh:"\u97F3\u89C6\u9891\u5408\u6210",url:"media-container/media-container"},{zh:"\u52A8\u6001\u52A0\u8F7D\u5B57\u4F53",url:"load-font-face/load-font-face"}]},{id:"location",name:"\u4F4D\u7F6E",open:!1,pages:[{zh:"\u83B7\u53D6\u5F53\u524D\u4F4D\u7F6E",url:"get-location/get-location"},{zh:"\u4F7F\u7528\u539F\u751F\u5730\u56FE\u67E5\u770B\u4F4D\u7F6E",url:"open-location/open-location"},{zh:"\u4F7F\u7528\u539F\u751F\u5730\u56FE\u9009\u62E9\u4F4D\u7F6E",url:"choose-location/choose-location"}]},{id:"storage",name:"\u6570\u636E",pages:[{zh:"\u672C\u5730\u5B58\u50A8",url:"storage/storage"},{zh:"\u5468\u671F\u6027\u66F4\u65B0",url:"get-background-fetch-data/get-background-fetch-data"},{zh:"\u6570\u636E\u9884\u62C9\u53D6",url:"get-background-prefetch-data/get-background-prefetch-data"}]},{id:"worker",name:"\u591A\u7EBF\u7A0B",url:"worker/worker"},{id:"framework",name:"\u6846\u67B6",pages:[{zh:"\u53CC\u5411\u7ED1\u5B9A",url:"two-way-bindings/two-way-bindings"},{zh:"WXS",url:"wxs/wxs"},{zh:"\u5C4F\u5E55\u65CB\u8F6C",url:"resizable/resizable"}]}],isSetTabBarPage:!1,theme:"light"},onLoad(){this.setData({theme:wx.getSystemInfoSync().theme||"light"}),wx.onThemeChange&&wx.onThemeChange(({theme:e})=>{this.setData({theme:e})})},onShow(){this.leaveSetTabBarPage()},onHide(){this.leaveSetTabBarPage()},kindToggle(e){let t=e.currentTarget.id,i=this.data.list;for(let o=0,s=i.length;o<s;++o)if(i[o].id===t){if(i[o].url){wx.navigateTo({url:"../../packageAPI/pages/"+i[o].url});return}i[o].open=!i[o].open}else i[o].open=!1;this.setData({list:i})},enterSetTabBarPage(){this.setData({isSetTabBarPage:!0})},leaveSetTabBarPage(){this.setData({isSetTabBarPage:!1})}})});var Vt=a(()=>{console.log(123)});var Ht=a((um,Ls)=>{Ls.exports=`@import "../common/index.wxss";

.weui-agree__link {
  display: inline;
  color: var(--weui-LINK);
}
`});var Nt=a(()=>{Vt();Ht();Page({onShareAppMessage(){return{title:"\u5C0F\u7A0B\u5E8F\u4E91\u5F00\u53D1\u5C55\u793A",path:"page/cloud/index"}},data:{list:[{id:"user",name:"\u7528\u6237\u9274\u6743",open:!1,pages:[{zh:"\u83B7\u53D6 OpenID",url:"user-authentication/user-authentication"}]},{id:"database",name:"\u6570\u636E\u5E93",open:!1,pages:[{zh:"\u57FA\u672C\u64CD\u4F5C",url:"crud/crud"},{zh:"\u6743\u9650\u7BA1\u7406",url:"db-permission/db-permission"},{zh:"\u670D\u52A1\u7AEF\u65F6\u95F4",url:"server-date/server-date"}]},{id:"storage",name:"\u5B58\u50A8",open:!1,pages:[{zh:"\u4E0A\u4F20\u6587\u4EF6",url:"upload-file/upload-file"},{zh:"\u4E0B\u8F7D\u6587\u4EF6",url:"download-file/download-file"},{zh:"\u5220\u9664\u6587\u4EF6",url:"delete-file/delete-file"},{zh:"\u6362\u53D6\u4E34\u65F6\u94FE\u63A5",url:"get-temp-file-url/get-temp-file-url"},{zh:"\u7EC4\u4EF6\u652F\u6301",url:"cloud-file-component/cloud-file-component"}]},{id:"scf",name:"\u4E91\u51FD\u6570",open:!1,pages:[{zh:"WXContext",url:"get-wx-context/get-wx-context"},{zh:"\u6570\u636E\u5E93",url:"scf-database/scf-database"},{zh:"\u5B58\u50A8",url:"scf-storage/scf-storage"},{zh:"\u4E91\u8C03\u7528",url:"scf-openapi/scf-openapi"}]}],theme:"light"},onLoad(){this.setData({theme:wx.getSystemInfoSync().theme||"light"}),wx.onThemeChange&&wx.onThemeChange(({theme:e})=>{this.setData({theme:e})})},kindToggle(e){let t=e.currentTarget.id,i=this.data.list;console.log(t,i);for(let o=0,s=i.length;o<s;++o)if(i[o].id===t){if(i[o].url){console.log(i[o].url),wx.navigateTo({url:"../../packageCloud/pages/"+i[o].url});return}i[o].open=!i[o].open}else i[o].open=!1;this.setData({list:i})}})});var Ot=a(()=>{console.log(123)});var Wt=a((vm,Ms)=>{Ms.exports="/* miniprogram/page/component/pages/doc-web-view/doc-web-view.wxss */"});var Yt=a(()=>{Ot();Wt();Page({onShareAppMessage(){return{title:"\u5C0F\u7A0B\u5E8F\u7EC4\u4EF6\u6587\u6863",path:"page/component/pages/doc-web-view/doc-web-view"}}})});var Xt=a(()=>{console.log(123)});var Qt=a((qm,Rs)=>{Rs.exports=`@import "../../../common/lib/weui.wxss";

.avatar {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}

.avatar-img {
  width: 50%;
  border-radius: 50%;
}

.country, .province, .city {
  padding-right: 5px;
}

`});var Kt=a(()=>{Xt();Qt();Page({onShareAppMessage(){return{title:"open-data",path:"page/component/pages/open-data/open-data"}}})});var Jt=a(()=>{console.log(123)});var Zt=a((Pm,js)=>{js.exports=""});var $t=a(()=>{Jt();Zt();Page({onShareAppMessage(){return{title:"webview",path:"page/component/pages/web-view/web-view"}}})});var ea=a(()=>{console.log(123)});var ta=a((Um,Gs)=>{Gs.exports=`/* @import "../../../weui/components/weui-wxss/dist/style/weui.wxss"; */
@import "./assets/iconfont.wxss";

page>view {
  max-width: 100%;
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.ql-container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-size: 16px;
  line-height: 1.5;
  overflow: auto;
  padding: 10px 10px 20px 10px;
  border: 1px solid #ECECEC;
}

.ql-active {
  color: #22C704;
}

.iconfont {
  display: inline-block;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 20px;
}

.toolbar {
  box-sizing: border-box;
  padding: 0 10px;
  height: 50px;
  width: 100%;
  position: fixed;
  left: 0;
  right: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ECECEC;
  border-left: none;
  border-right: none;
}

`});var aa=a(()=>{ea();ta();Page({onShareAppMessage(){return{title:"editor",path:"page/component/pages/editor/editor"}},data:{formats:{},readOnly:!1,placeholder:"\u5F00\u59CB\u8F93\u5165...",editorHeight:300,keyboardHeight:0,isIOS:!1,safeHeight:0,toolBarHeight:50},readOnlyChange(){this.setData({readOnly:!this.data.readOnly})},onLoad(){let{platform:e,safeArea:t,model:i,screenHeight:o}=wx.getSystemInfoSync(),s;t?s=o-t.bottom:s=32,this._safeHeight=s;let l=e==="ios";this.setData({isIOS:l,safeHeight:s,toolBarHeight:l?s+50:50});let h=this;this.updatePosition(0);let g=0;wx.onKeyboardHeightChange(d=>{if(d.height===g)return;let u=d.height>0?d.duration*1e3:0;g=d.height,setTimeout(()=>{wx.pageScrollTo({scrollTop:0,success(){h.updatePosition(g),h.editorCtx.scrollIntoView()}})},u)})},updatePosition(e){let t=50,{windowHeight:i,platform:o}=wx.getSystemInfoSync(),s=e>0?i-e-t:i;e===0?this.setData({editorHeight:s,keyboardHeight:e,toolBarHeight:this.data.isIOS?50+this._safeHeight:50,safeHeight:this._safeHeight}):this.setData({editorHeight:s,keyboardHeight:e,toolBarHeight:50,safeHeight:0})},calNavigationBarAndStatusBar(){let e=wx.getSystemInfoSync(),{statusBarHeight:t,platform:i}=e;return t+(i==="ios"?44:48)},onEditorReady(){let e=this;wx.createSelectorQuery().select("#editor").context(function(t){e.editorCtx=t.context}).exec()},blur(){this.editorCtx.blur()},format(e){let{name:t,value:i}=e.target.dataset;!t||this.editorCtx.format(t,i)},onStatusChange(e){let t=e.detail;this.setData({formats:t})},insertDivider(){this.editorCtx.insertDivider({success:function(){console.log("insert divider success")}})},clear(){this.editorCtx.clear({success:function(e){console.log("clear success")}})},removeFormat(){this.editorCtx.removeFormat()},insertDate(){let e=new Date,t=`${e.getFullYear()}/${e.getMonth()+1}/${e.getDate()}`;this.editorCtx.insertText({text:t})},insertImage(){let e=this;wx.chooseImage({count:1,success:function(t){e.editorCtx.insertImage({src:t.tempFilePaths[0],data:{id:"abcd",role:"god"},width:"80%",success:function(){console.log("insert image success")}})}})}})});var ia=a((Mm,oa)=>{oa.exports=Behavior({data:{theme:"light"},methods:{themeChanged(e){this.setData({theme:e})}}})});var ra,Vs,n,m=c(()=>{ra=y(ia()),Vs=function(e){return Page(Object.assign({},e,{behaviors:[ra.default].concat(e.behaviors||[]),onLoad(t){let i=getApp();this.themeChanged&&(this.themeChanged(i.globalData.theme),i.watchThemeChange&&i.watchThemeChange(this.themeChanged),e.onLoad&&e.onLoad.call(this,t))},onUnload(){let t=getApp();this.themeChanged&&(t.unWatchThemeChange&&t.unWatchThemeChange(this.themeChanged),e.onUnload&&e.onUnload.call(this))}}))},n=Vs});var sa=a(()=>{console.log(123)});var na=a((Vm,Hs)=>{Hs.exports=`/*!
 * WeUI v2.3.0 (https://github.com/weui/weui-wxss)
 * Copyright 2020 Tencent, Inc.
 * Licensed under the MIT license
 */
@import './common.wxss';
.weui-agree__link {
  display: inline;
  color: var(--weui-LINK);
}

.weui-flex {
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center
}

.weui-cells {
  margin-top: 0;
  opacity: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: .3s;
  transition: .3s
}

.weui-cells:after,
.weui-cells:before {
  display: none
}

.weui-cells_show {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0)
}

.weui-cell:before {
  right: 15px
}

.kind-list__item {
  margin: 10px 0;
  background-color: var(--weui-BG-2);
  border-radius: 2px;
  overflow: hidden
}

.kind-list__item:first-child {
  margin-top: 0
}

.kind-list__img {
  width: 30px;
  height: 30px
}

[data-weui-theme=dark] .kind-list__img {
  -webkit-filter: invert(100) hue-rotate(180deg);
  filter: invert(100) hue-rotate(180deg)
}

.kind-list__item-hd {
  padding: 20px;
  -webkit-transition: opacity .3s;
  transition: opacity .3s
}

.kind-list__item-hd_show {
  opacity: .4
}

.kind-list__item-bd {
  height: 0;
  overflow: hidden
}

.kind-list__item-bd_show {
  height: auto
}

.index-hd {
  padding: 40px 40px 20px;
  text-align: center;
}

.index-bd {
  padding: 0 15px 20px;
}

.index-ft {
  padding-bottom: 10px;
  text-align: center;
}

.index-logo {
  /* width: 43px;
  height: 43px; */
  width: 43px;
  height: 43px;
}

.index-desc {
  margin-top: 10px;
  color: #888888;
  /* font-size: 14px; */
  font-size: 14px;
}`});var la={};p(la);var pa=c(()=>{m();sa();na();n({onShareAppMessage(){return{title:"\u6269\u5C55\u80FD\u529B",path:"page/weui/example/index"}},data:{list:[{id:"form",name:"\u8868\u5355",open:!1,pages:["cell","slideview","form","uploader"]},{id:"widget",name:"\u57FA\u7840\u7EC4\u4EF6",open:!1,pages:["article","icons","badge","flex","footer","gallery","grid","loadmore","loading","panel","preview"]},{id:"feedback",name:"\u64CD\u4F5C\u53CD\u9988",open:!1,pages:["dialog","msg","half-screen-dialog","actionsheet","toptips"]},{id:"nav",name:"\u5BFC\u822A\u76F8\u5173",open:!1,pages:["navigation","tabbar"]},{id:"search",name:"\u641C\u7D22\u76F8\u5173",open:!1,pages:["searchbar"]},{id:"extended",name:"\u6269\u5C55\u7EC4\u4EF6",open:!1,pages:["emoji","video-swiper","index-list","recycle-view","sticky","tabs","vtabs","barrage","select-text","wxml-to-canvas"]},{id:"adaptive",name:"\u591A\u7AEF\u9002\u914D\uFF08\u9700\u5728PC\u7AEF\u4F53\u9A8C\uFF09",open:!1,pages:[{zh:"\u5DE6\u53F3\u4F38\u7F29",url:"telescopic/telescopic"},{zh:"\u6362\u884C\u6392\u5217",url:"linebreak/linebreak"},{zh:"\u4FA7\u8FB9\u5BFC\u822A\u680F",url:"sidenavigation/sidenavigation"},{zh:"\u5206\u9875\u5C55\u73B0",url:"pagination/pagination"},{zh:"\u81EA\u7531\u5E03\u5C40",url:"freelayout/freelayout"},{zh:"\u5206\u5C42\u5C55\u73B0",url:"layeredpresentation/layeredpresentation"},{zh:"\u6A2A\u5411\u62D3\u5C55",url:"horizontalexpansion/horizontalexpansion"}]}],extendedList:[{id:"extended",name:"\u6269\u5C55\u7EC4\u4EF6",open:!1,pages:["emoji","video-swiper","index-list","recycle-view","sticky","tabs","vtabs","barrage","select-text","wxml-to-canvas"]}]},kindToggle:function(e){let t=e.currentTarget.id,i=this.data.list;for(let o=0,s=i.length;o<s;++o)i[o].id==t?i[o].open=!i[o].open:i[o].open=!1;this.setData({list:i})},kindExtenedListToggle(e){let t=e.currentTarget.id,i=this.data.extendedList;for(let s=0,l=i.length;s<l;++s)i[s].id==t?i[s].open=!i[s].open:extenedList[s].open=!1;let o=this.data.list.map(s=>({...s,open:!1}));this.setData({extendedList:i,list:o})},themeToggle(){let e=getApp();e.themeChanged&&(e.globalData.theme==="light"?e.themeChanged("dark"):e.themeChanged("light"))}})});var ca=a(()=>{console.log(123)});var ma=a((Wm,Ns)=>{Ns.exports=`@import '../common.wxss';
`});var D=a((Ym,ga)=>{ga.exports={icon20:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=",icon60:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg=="}});var da={};p(da);var Os,ha=c(()=>{m();ca();ma();Os=D();n({onShareAppMessage(){return{title:"cell",path:"page/weui/example/cell/cell"}},onLoad:function(){this.setData({icon:Os.icon20,slideButtons:[{text:"\u666E\u901A",src:global.isDemo?"/page/weui/example/cell/icon_love.svg":"/example/cell/icon_love.svg"},{text:"\u666E\u901A",extClass:"test",src:global.isDemo?"/page/weui/example/cell/icon_star.svg":"/example/cell/icon_star.svg"},{type:"warn",text:"\u8B66\u793A",extClass:"test",src:global.isDemo?"/page/weui/example/cell/icon_del.svg":"/example/cell/icon_del.svg"}]})},slideButtonTap(e){console.log("slide button tap",e.detail)}})});var ua=a(()=>{console.log(123)});var xa=a((Jm,Ws)=>{Ws.exports=`@import '../common.wxss';

.weui-slidecells {
  margin:8px;
}

.weui-slidecell {
  background-color: var(--weui-BG-2);
  border-radius: 8px;
  padding: 26px;
  line-height: 1.4;
  font-size: 17px;
}
`});var wa={};p(wa);var Ys,ba=c(()=>{m();ua();xa();Ys=D();n({onShareAppMessage(){return{title:"sliderview",path:"page/weui/example/sliderview/sliderview"}},onLoad:function(){this.setData({icon:Ys.icon20,slideButtons:[{text:"\u666E\u901A",src:global.isDemo?"/page/weui/example/cell/icon_love.svg":"/example/cell/icon_love.svg"},{text:"\u666E\u901A",extClass:"test",src:global.isDemo?"/page/weui/example/cell/icon_star.svg":"/example/cell/icon_star.svg"},{type:"warn",text:"\u8B66\u793A",extClass:"test",src:global.isDemo?"/page/weui/example/cell/icon_del.svg":"/example/cell/icon_del.svg"}]})},slideButtonTap(e){console.log("slide button tap",e.detail)}})});var fa=a(()=>{console.log(123)});var va=a((tg,Xs)=>{Xs.exports=`/* example/input/input.wxss */
@import '../common.wxss';

.weui-agree .weui-agree__text {
  display: inline;
}`});var ya={};p(ya);var ka=c(()=>{m();fa();va();n({onShareAppMessage(){return{title:"form",path:"page/weui/example/form/form"}},data:{showTopTips:!1,radioItems:[{name:"cell standard",value:"0",checked:!0},{name:"cell standard",value:"1"}],checkboxItems:[{name:"standard is dealt for u.",value:"0",checked:!0},{name:"standard is dealicient for u.",value:"1"}],items:[{name:"USA",value:"\u7F8E\u56FD"},{name:"CHN",value:"\u4E2D\u56FD",checked:"true"},{name:"BRA",value:"\u5DF4\u897F"},{name:"JPN",value:"\u65E5\u672C"},{name:"ENG",value:"\u82F1\u56FD"},{name:"TUR",value:"\u6CD5\u56FD"}],date:"2016-09-01",time:"12:01",countryCodes:["+86","+80","+84","+87"],countryCodeIndex:0,countries:["\u4E2D\u56FD","\u7F8E\u56FD","\u82F1\u56FD"],countryIndex:0,accounts:["\u5FAE\u4FE1\u53F7","QQ","Email"],accountIndex:0,isAgree:!1,formData:{},rules:[{name:"radio",rules:{required:!1,message:"\u5355\u9009\u5217\u8868\u662F\u5FC5\u9009\u9879"}},{name:"checkbox",rules:{required:!0,message:"\u591A\u9009\u5217\u8868\u662F\u5FC5\u9009\u9879"}},{name:"name",rules:{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D"}},{name:"qq",rules:{required:!0,message:"qq\u5FC5\u586B"}},{name:"mobile",rules:[{required:!0,message:"mobile\u5FC5\u586B"},{mobile:!0,message:"mobile\u683C\u5F0F\u4E0D\u5BF9"}]},{name:"vcode",rules:{required:!0,message:"\u9A8C\u8BC1\u7801\u5FC5\u586B"}},{name:"idcard",rules:{validator:function(e,t,i,o){if(!t||t.length!==18)return"idcard\u683C\u5F0F\u4E0D\u6B63\u786E"}}}]},radioChange:function(e){console.log("radio\u53D1\u751Fchange\u4E8B\u4EF6\uFF0C\u643A\u5E26value\u503C\u4E3A\uFF1A",e.detail.value);for(var t=this.data.radioItems,i=0,o=t.length;i<o;++i)t[i].checked=t[i].value==e.detail.value;this.setData({radioItems:t,["formData.radio"]:e.detail.value})},checkboxChange:function(e){console.log("checkbox\u53D1\u751Fchange\u4E8B\u4EF6\uFF0C\u643A\u5E26value\u503C\u4E3A\uFF1A",e.detail.value);for(var t=this.data.checkboxItems,i=e.detail.value,o=0,s=t.length;o<s;++o){t[o].checked=!1;for(var l=0,h=i.length;l<h;++l)if(t[o].value==i[l]){t[o].checked=!0;break}}this.setData({checkboxItems:t,["formData.checkbox"]:e.detail.value})},bindDateChange:function(e){this.setData({date:e.detail.value,["formData.date"]:e.detail.value})},formInputChange(e){let{field:t}=e.currentTarget.dataset;this.setData({[`formData.${t}`]:e.detail.value})},bindTimeChange:function(e){this.setData({time:e.detail.value})},bindCountryCodeChange:function(e){console.log("picker country code \u53D1\u751F\u9009\u62E9\u6539\u53D8\uFF0C\u643A\u5E26\u503C\u4E3A",e.detail.value),this.setData({countryCodeIndex:e.detail.value})},bindCountryChange:function(e){console.log("picker country \u53D1\u751F\u9009\u62E9\u6539\u53D8\uFF0C\u643A\u5E26\u503C\u4E3A",e.detail.value),this.setData({countryIndex:e.detail.value})},bindAccountChange:function(e){console.log("picker account \u53D1\u751F\u9009\u62E9\u6539\u53D8\uFF0C\u643A\u5E26\u503C\u4E3A",e.detail.value),this.setData({accountIndex:e.detail.value})},bindAgreeChange:function(e){this.setData({isAgree:!!e.detail.value.length})},submitForm(){this.selectComponent("#form").validate((e,t)=>{if(console.log("valid",e,t),e)wx.showToast({title:"\u6821\u9A8C\u901A\u8FC7"});else{let i=Object.keys(t);i.length&&this.setData({error:t[i[0]].message})}})}})});var Da=a(()=>{console.log(123)});var Aa=a((rg,Qs)=>{Qs.exports=`/* example/uploader/uploader.wxss */
@import '../common.wxss';
`});var qa={};p(qa);var Sa=c(()=>{m();Da();Aa();n({onShareAppMessage(){return{title:"uploader",path:"page/weui/example/uploader/uploader"}},data:{files:[{url:"http://mmbiz.qpic.cn/mmbiz_png/VUIF3v9blLsicfV8ysC76e9fZzWgy8YJ2bQO58p43Lib8ncGXmuyibLY7O3hia8sWv25KCibQb7MbJW3Q7xibNzfRN7A/0"}]},onLoad(){this.setData({selectFile:this.selectFile.bind(this),uplaodFile:this.uplaodFile.bind(this)})},chooseImage:function(e){var t=this;wx.chooseImage({sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){t.setData({files:t.data.files.concat(i.tempFilePaths)})}})},previewImage:function(e){wx.previewImage({current:e.currentTarget.id,urls:this.data.files})},selectFile(e){console.log("files",e)},uplaodFile(e){return console.log("upload files",e),new Promise((t,i)=>{setTimeout(()=>{i("some error")},1e3)})},uploadError(e){console.log("upload error",e.detail)},uploadSuccess(e){console.log("upload success",e.detail)}})});var Ca=a(()=>{console.log(123)});var za=a((pg,Ks)=>{Ks.exports=`@import '../common.wxss';

page{
    /* background-color: #FFFFFF; */
}
image{
    margin: 4px 0;
}`});var _a={};p(_a);var Pa=c(()=>{m();Ca();za();n({onShareAppMessage(){return{title:"article",path:"page/weui/example/article/article"}}})});var Ta=a(()=>{console.log(123)});var Fa=a((dg,Js)=>{Js.exports=`/* example/badge/badge.wxss */
@import '../common.wxss';

.blue {
  background: blue;
}`});var Ia={};p(Ia);var Ea=c(()=>{m();Ta();Fa();n({onShareAppMessage(){return console.log("\u5206\u4EAB\u6D4B\u8BD5"),{title:"badge",path:"page/weui/example/badge/badge"}}})});var Ua=a(()=>{console.log(123)});var Ba=a((wg,Zs)=>{Zs.exports=`@import '../common.wxss';

.placeholder{
    margin: 5px;
    padding: 0 10px;
    text-align: center;
    background-color: var(--weui-BG-0);
    height: 2.3em;
    line-height: 2.3em;
    color: var(--weui-FG-1);
}
`});var La={};p(La);var Ma=c(()=>{m();Ua();Ba();n({onShareAppMessage(){return{title:"flex",path:"page/weui/example/flex/flex"}}})});var Ra=a(()=>{console.log(123)});var ja=a((yg,$s)=>{$s.exports=`/* \u4F5C\u4E3A\u5C55\u793A\u7528\u7684\u6837\u5F0F */
@import '../common.wxss';

.weui-footer{
    margin-bottom: 50px;
}
.weui-footer_fixed-bottom{
    margin-bottom: 0;
}`});var Ga={};p(Ga);var Va=c(()=>{m();Ra();ja();n({onShareAppMessage(){return{title:"footer",path:"page/weui/example/footer/footer"}}})});var Ha=a(()=>{console.log(123)});var Na=a((qg,en)=>{en.exports=`/* example/gallery/gallery.wxss */
@import '../common.wxss';
`});var Oa={};p(Oa);var Wa=c(()=>{m();Ha();Na();n({onShareAppMessage(){return{title:"gallery",path:"page/weui/example/gallery/gallery"}},data:{imgUrls:["http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg","http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg","http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg"],show:!0},change(e){console.log("current index has changed",e.detail)},delete(e){console.log("delete",e.detail)},hide(){console.log("component hide"),setTimeout(()=>{console.log("component show"),this.setData({show:!0})},1e3)}})});var Ya=a(()=>{console.log(123)});var Xa=a((_g,tn)=>{tn.exports=`/* example/grid/grid.wxss */
@import '../common.wxss';
`});var Qa={};p(Qa);var w,b,Ka=c(()=>{m();Ya();Xa();({GRID_DEMO_URL:w}=getApp().globalData),b=getApp();n({onShareAppMessage(){return{title:"grid",path:"page/weui/example/grid/grid"}},data:{grids:[{imgUrl:b.globalData.iconTabbar,url:w,text:"Grid"},{imgUrl:b.globalData.iconTabbar,url:w,text:"Grid"},{imgUrl:b.globalData.iconTabbar,url:w,text:"Grid"},{imgUrl:b.globalData.iconTabbar,url:w,text:"Grid"},{imgUrl:b.globalData.iconTabbar,url:w,text:"Grid"},{imgUrl:b.globalData.iconTabbar,url:w,text:"Grid"},{imgUrl:b.globalData.iconTabbar,url:w,text:"Grid"},{imgUrl:b.globalData.iconTabbar,url:w,text:"Grid"},{imgUrl:b.globalData.iconTabbar,url:w,text:"Grid"}]}})});var Ja=a(()=>{console.log(123)});var Za=a((Ig,an)=>{an.exports=`@import '../common.wxss';

.page {
    background-color: var(--weui-BG-2)
}`});var $a={};p($a);var eo=c(()=>{m();Ja();Za();n({onShareAppMessage(){return{title:"loadmore",path:"page/weui/example/loadmore/loadmore"}}})});var to=a(()=>{});var ao=a(()=>{console.log(123)});var oo=a((Rg,on)=>{on.exports=`/* example/panel/panel.wxss */
@import '../common.wxss';
`});var ro={};p(ro);var io,so=c(()=>{m();ao();oo();io=D();n({onShareAppMessage(){return{title:"panel",path:"page/weui/example/panel/panel"}},onLoad:function(){this.setData({icon20:io.icon20,icon60:io.icon60})}})});var no=a(()=>{console.log(123)});var lo=a((Hg,rn)=>{rn.exports=`@import '../common.wxss';

.weui-form-preview{
    margin-bottom: 25px;
}`});var po={};p(po);var co=c(()=>{m();no();lo();n({onShareAppMessage(){return{title:"preview",path:"page/weui/example/preview/preview"}}})});var mo=a(()=>{console.log(123)});var go=a((Yg,sn)=>{sn.exports=`@import '../common.wxss';

.page {
    /* background-color: var(--weui-BG-2); */
}`});var ho={};p(ho);var uo=c(()=>{m();mo();go();n({onShareAppMessage(){return{title:"dialog",path:"page/weui/example/dialog/dialog"}},data:{dialogShow:!1,showOneButtonDialog:!1,buttons:[{text:"\u53D6\u6D88"},{text:"\u786E\u5B9A"}],oneButton:[{text:"\u786E\u5B9A"}]},openConfirm:function(){this.setData({dialogShow:!0})},tapDialogButton(e){this.setData({dialogShow:!1,showOneButtonDialog:!1})},tapOneDialogButton(e){this.setData({showOneButtonDialog:!0})}})});var xo=a(()=>{console.log(123)});var wo=a((Jg,nn)=>{nn.exports=`@import '../common.wxss';

page{
    /* background-color: #FFFFFF; */
}
`});var bo={};p(bo);var fo=c(()=>{m();xo();wo();n({onShareAppMessage(){return{title:"msg",path:"page/weui/example/msg/msg"}},openSuccess:function(){wx.navigateTo({url:"msg_success"})},openText:function(){wx.navigateTo({url:"msg_text"})},openTextPrimary:function(){wx.navigateTo({url:"msg_text_primary"})},openFail:function(){wx.navigateTo({url:"msg_fail"})}})});var vo=a(()=>{console.log(123)});var yo=a((td,ln)=>{ln.exports=`@import '../common.wxss';

page{
    background-color: #FFFFFF;
}
page,.page{height:100%;}
`});var ko={};p(ko);var Do=c(()=>{m();vo();yo();n({onShareAppMessage(){return{title:"msg_text",path:"page/weui/example/msg_text/msg_text"}}})});var Ao=a(()=>{console.log(123)});var qo=a((rd,pn)=>{pn.exports=`@import '../common.wxss';

page{
    background-color: #FFFFFF;
}
page,.page{height:100%;}
`});var So={};p(So);var Co=c(()=>{m();Ao();qo();n({onShareAppMessage(){return{title:"msg_text_primary",path:"page/weui/example/msg_text_primary/msg_text_primary"}}})});var zo=a(()=>{console.log(123)});var _o=a((pd,cn)=>{cn.exports=`@import '../common.wxss';

page{
    background-color: #FFFFFF;
}
page,.page{height:100%;}
`});var Po={};p(Po);var To=c(()=>{m();zo();_o();n({onShareAppMessage(){return{title:"msg_success",path:"page/weui/example/msg_success"}}})});var Fo=a(()=>{console.log(123)});var Io=a((dd,mn)=>{mn.exports=`@import '../common.wxss';

page{
    background-color: #FFFFFF;
}
page,.page{height:100%;}
`});var Eo={};p(Eo);var Uo=c(()=>{m();Fo();Io();n({onShareAppMessage(){return{title:"msg_fail",path:"page/weui/example/msg_fail/msg_fail"}}})});var Bo=a(()=>{console.log(123)});var Lo=a((wd,gn)=>{gn.exports=`@import '../common.wxss';

page,
.page,
.page__bd{
    height: 100%;
}
.page__bd{
    padding-bottom: 0;
}
.weui-tab__content{
    padding-top: 60px;
    text-align: center;
}`});var Mo=a(()=>{Bo();Lo();var dn=96;Page({onShareAppMessage(){return{title:"navbar",path:"page/weui/example/navbar/navbar"}},data:{tabs:["\u9009\u9879\u4E00","\u9009\u9879\u4E8C","\u9009\u9879\u4E09"],activeIndex:1,sliderOffset:0,sliderLeft:0},onLoad:function(){var e=this;wx.getSystemInfo({success:function(t){e.setData({sliderLeft:(t.windowWidth/e.data.tabs.length-dn)/2,sliderOffset:t.windowWidth/e.data.tabs.length*e.data.activeIndex})}})},tabClick:function(e){this.setData({sliderOffset:e.currentTarget.offsetLeft,activeIndex:e.currentTarget.id})}})});var Ro=a(()=>{Page({})});var jo=a(()=>{console.log(123)});var Go=a((Ad,hn)=>{hn.exports=`/* example/tabbar/tabbar.wxss */
@import '../common.wxss';
`});var Vo={};p(Vo);var f,Ho=c(()=>{m();jo();Go();f=getApp();n({onShareAppMessage(){return{title:"tabbar",path:"page/weui/example/tabbar/tabbar"}},data:{list:[{text:"\u5FAE\u4FE1",iconPath:f.globalData.iconTabbar,selectedIconPath:f.globalData.iconTabbar,badge:"8"},{text:"\u901A\u8BAF\u5F55",iconPath:f.globalData.iconTabbar,selectedIconPath:f.globalData.iconTabbar},{text:"\u53D1\u73B0",iconPath:f.globalData.iconTabbar,selectedIconPath:f.globalData.iconTabbar,dot:!0},{text:"\u6211",iconPath:f.globalData.iconTabbar,selectedIconPath:f.globalData.iconTabbar}]},tabChange(e){console.log("tab change",e)}})});var No=a(()=>{console.log(123)});var Oo=a((zd,un)=>{un.exports=`@import '../common.wxss';

icon{
    margin-right: 13px;
}

.weui-grid {
    text-align: center;
    padding: 36px 10px;
}

.page__bd {
    padding-left: 15px;
    padding-right: 15px;
    text-align: left;
}
.icon-box{
    margin-bottom: 25px;
}
.icon-box__ctn{
    flex-shrink: 100;
}
.icon-item_box {
    display: inline-block;
    width: 25%;
    padding: 3px;
    height: 80px;
    line-height: 30px;
    text-align: center;
    box-sizing: border-box;
}
.icon-name {
    font-size: 12px;
    overflow: hidden;
    white-space:nowrap;
    text-overflow:ellipsis; 
}
.icon-box__title{
    font-size: 18px;
    margin: 5px 0;
}`});var Wo={};p(Wo);var r,xn,Yo=c(()=>{m();No();Oo();r="rgba(0, 0, 0, .9)",xn="rgba(255, 255, 255, .8)";n({onShareAppMessage(){return{title:"icons",path:"page/weui/example/icons/icons"}},data:{iconList:[{icon:"add-friends",color:r,size:25,name:""},{icon:"add",color:r,size:25,name:""},{icon:"add2",color:r,size:25,name:""},{icon:"album",color:r,size:25,name:""},{icon:"arrow",color:r,size:12,name:""},{icon:"at",color:r,size:25,name:""},{icon:"back",color:r,size:12,name:""},{icon:"back2",color:r,size:25,name:""},{icon:"bellring-off",color:r,size:25,name:""},{icon:"bellring-on",color:r,size:25,name:""},{icon:"camera",color:r,size:25,name:""},{icon:"cellphone",color:r,size:25,name:""},{icon:"clip",color:r,size:25,name:""},{icon:"close",color:r,size:25,name:""},{icon:"close2",color:r,size:25,name:""},{icon:"comment",color:r,size:25,name:""},{icon:"contacts",color:r,size:25,name:""},{icon:"copy",color:r,size:25,name:""},{icon:"delete-on",color:r,size:25,name:""},{icon:"delete",color:r,size:25,name:""},{icon:"discover",color:r,size:25,name:""},{icon:"display",color:r,size:25,name:""},{icon:"done",color:r,size:25,name:""},{icon:"done2",color:r,size:25,name:""},{icon:"download",color:r,size:25,name:""},{icon:"email",color:r,size:25,name:""},{icon:"error",color:r,size:25,name:""},{icon:"eyes-off",color:r,size:25,name:""},{icon:"eyes-on",color:r,size:25,name:""},{icon:"folder",color:r,size:25,name:""},{icon:"group-detail",color:r,size:25,name:""},{icon:"help",color:r,size:25,name:""},{icon:"home",color:r,size:25,name:""},{icon:"imac",color:r,size:25,name:""},{icon:"info",color:r,size:25,name:""},{icon:"keyboard",color:r,size:25,name:""},{icon:"like",color:r,size:25,name:""},{icon:"link",color:r,size:25,name:""},{icon:"location",color:r,size:25,name:""},{icon:"lock",color:r,size:25,name:""},{icon:"max-window",color:r,size:25,name:""},{icon:"me",color:r,size:25,name:""},{icon:"mike",color:r,size:25,name:""},{icon:"mike2",color:r,size:25,name:""},{icon:"mobile-contacts",color:r,size:25,name:""},{icon:"more",color:r,size:25,name:""},{icon:"more2",color:r,size:25,name:""},{icon:"mosaic",color:r,size:25,name:""},{icon:"music-off",color:r,size:25,name:""},{icon:"music",color:r,size:25,name:""},{icon:"note",color:r,size:25,name:""},{icon:"pad",color:r,size:25,name:""},{icon:"pause",color:r,size:25,name:""},{icon:"pencil",color:r,size:25,name:""},{icon:"photo-wall",color:r,size:25,name:""},{icon:"play",color:r,size:25,name:""},{icon:"play2",color:r,size:25,name:""},{icon:"previous",color:r,size:25,name:""},{icon:"previous2",color:r,size:25,name:""},{icon:"qr-code",color:r,size:25,name:""},{icon:"refresh",color:r,size:25,name:""},{icon:"report-problem",color:r,size:25,name:""},{icon:"search",color:r,size:25,name:""},{icon:"sending",color:r,size:25,name:""},{icon:"setting",color:r,size:25,name:""},{icon:"share",color:r,size:25,name:""},{icon:"shop",color:r,size:25,name:""},{icon:"star",color:r,size:25,name:""},{icon:"sticker",color:r,size:25,name:""},{icon:"tag",color:r,size:25,name:""},{icon:"text",color:r,size:25,name:""},{icon:"time",color:r,size:25,name:""},{icon:"transfer-text",color:r,size:25,name:""},{icon:"transfer2",color:r,size:25,name:""},{icon:"translate",color:r,size:25,name:""},{icon:"tv",color:r,size:25,name:""},{icon:"video-call",color:r,size:25,name:""},{icon:"voice",color:r,size:25,name:""},{icon:"volume-down",color:r,size:25,name:""},{icon:"volume-off",color:r,size:25,name:""},{icon:"volume-up",color:r,size:25,name:""}]},onLoad(){this.setIconColor(this.data.theme);let e=getApp();e.watchThemeChange&&e.watchThemeChange(this.setIconColor)},setIconColor(e){let t=e==="dark"?xn:r;this.setData({iconList:this.data.iconList.map(i=>(i.color=t,i))})}})});var Xo=a(()=>{console.log(123)});var Qo=a((Fd,wn)=>{wn.exports=`@import '../common.wxss';
page{height:100%;}
`});var Ko=a(()=>{Xo();Qo();Component({onShareAppMessage(){return{title:"form-age",path:"page/weui/example/form-age/form-age"}},data:{},methods:{}})});var Jo=a(()=>{console.log(123)});var Zo=a((Ld,bn)=>{bn.exports=`@import '../common.wxss';
/* .weui-demo-dialog{
  visibility:hidden;
  opacity:0;
  transition:all .3s;
}
.weui-half-screen-dialog{
  transition:all .3s;
  transform:translateY(100%);
}
.weui-demo-dialog_show{
  visibility:visible;
  opacity:1;
}
.weui-demo-dialog_show .weui-half-screen-dialog{
    transform:translateY(0);
}

.fontSize {
  font-size: 13px;
} */
`});var $o={};p($o);var ei=c(()=>{m();Jo();Zo();n({onShareAppMessage(){return{title:"half-screen-dialog",path:"page/weui/example/half-screen-dialog/half-screen-dialog"}},data:{typeF:!1,typeS:!1,typeT:!1,buttons:[{type:"default",className:"",text:"\u8F85\u52A9\u64CD\u4F5C",value:0},{type:"primary",className:"",text:"\u4E3B\u64CD\u4F5C",value:1}]},openTypeF:function(){this.setData({typeF:!0})},openTypeS:function(){this.setData({typeS:!0})},openTypeT:function(){this.setData({typeT:!0})},buttontap(e){console.log(e.detail)}})});var ti=a(()=>{console.log(123)});var ai=a((Gd,fn)=>{fn.exports=`@import '../common.wxss';


.custom-action {
  padding: 16px 0;
  text-align: center;

}
.custom-action .custom-action_desc {
    color: #999999
}

.custom-action .custom-action_name {
  margin: 10px 5px;
  line-height: 1;
  vertical-align: middle;
}`});var oi={};p(oi);var ii=c(()=>{m();ti();ai();n({onShareAppMessage(){return{title:"actionsheet",path:"page/weui/example/actionsheet/actionsheet"}},open:function(){wx.showActionSheet({itemList:["A","B","C"],success:function(e){e.cancel||console.log(e.tapIndex)}})},data:{showDialog:!1,groups:[{text:"\u793A\u4F8B\u83DC\u5355",value:1},{text:"\u793A\u4F8B\u83DC\u5355",value:2},{text:"\u8D1F\u5411\u83DC\u5355",type:"warn",value:3}]},openDialog:function(){this.setData({showDialog:!0})},closeDialog:function(){this.setData({showDialog:!1})},btnClick(e){console.log(e),this.closeDialog()}})});var ri=a(()=>{console.log(123)});var si=a((Od,vn)=>{vn.exports=`@import "../../../common/lib/weui.wxss";

.toptips-container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.weui-input {
  border-bottom: 1px gray solid;
}

.toptips-content {
  display: flex;
  flex-direction: column;
}`});var ni=a(()=>{ri();si();Page({onShareAppMessage(){return{title:"toptips",path:"page/weui/example/toptips/toptips"}},data:{value:"",showTopTips:!1,message:"\u8BF7\u8F93\u5165\u6587\u672C",type:"info"},bindInputValue(e){this.setData({value:e.detail.value})},bindConfirmTap(){this.data.value?this.setData({showTopTips:!0,message:this.data.value,type:"success"}):this.setData({showTopTips:!0,type:"error"})}})});var li=a(()=>{console.log(123)});var pi=a((Kd,yn)=>{yn.exports=`@import '../common.wxss';

.searchbar-result{
    margin-top: 0;
    font-size: 14px;
}

.searchbar-result:before{
    display: none;
}
`});var ci={};p(ci);var mi=c(()=>{m();li();pi();n({onShareAppMessage(){return{title:"searchbar",path:"page/weui/example/searchbar/searchbar"}},data:{inputShowed:!1,inputVal:"",i:0},onLoad(){this.setData({search:this.search.bind(this)})},search:function(e){return new Promise((t,i)=>{this.data.i%2==0?setTimeout(()=>{t([{text:"\u641C\u7D22\u7ED3\u679C",value:1},{text:"\u641C\u7D22\u7ED3\u679C2",value:2}])},200):setTimeout(()=>{t([])},200),this.setData({i:this.data.i+1})})},selectResult:function(e){console.log("select result",e.detail)}})});var gi=a(()=>{console.log(123)});var di=a((eh,kn)=>{kn.exports=`@import '../common.wxss';

.page {
  background-color: var(--weui-BG-0)
}

.record {
  padding: 15px 0;
  margin-left: 10px;
  display: flex;
}

.avator {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: indianred;
  margin-right: 10px;
}
.comment {
  padding: 5px;
  background-color: var(--weui-BG-3);
  border-color: var(--weui-BG-0);
  border-radius: 5px;
  font-size: 18px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  line-height: 24px;
  max-width: 200px;
}


.emoji-wrp {
  display: inline-block;
  width: 24px;
  height: 24px;
}

.emoji-icon {
  display: inline-block;
  transform-origin: 0 0;
  transform: scale(0.375);
}

.reply_wrp {
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  /* background-color: #F9F9F9; */
}


.reply_tool {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  font-size: 0;
  padding: 8px 12px;
  background-color: var(--weui-BG-1);
  position: relative;
}


.reply_tool:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.1);
}

.reply_form_wrp {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
}

.reply_label {
  display: block;
  background-color: var(--weui-BG-2);
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin-right: 8px;
}


.reply_input {
  font-size: 17px;
  min-height: 40px;
  /* height: 40px;  */
  padding: 0 12px;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  caret-color: #1AAD19;
}
.reply_input[disabled] {
  background-color: #E8E8E8;
  color: #888888;
}
.reply_button {
  width: 32px;
  height: 32px;
  overflow: hidden;
  margin-right: 8px;
}
.reply_button.active {
  opacity: 0.5;
}
.reply_button image {
  width: 32px;
  height: 32px;
}
.reply_button image:active {
  opacity: 50%;
}
.reply_button:last-child {
  margin-right: 0;
}
.reply_panel_wrp {
  height: 200px;
  overflow: hidden;
  position: relative;
}

/* .reply_panel__dark {
  background: var(--weui-BG-1);
} */

.reply_panel {
  height: 200px;
  overflow: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 300px;
  -webkit-transition: top .2s;
  transition: top .2s;
  /* background: var(--weui-BG-3); */

}
.reply_panel[hidden] {
  display: block;
}
.reply_panel.show {
  height: 300px;
  top: 0;
}
.reply_panel:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.1);
}
.reply_quick_item {
  position: relative;
  padding: 16px 12px;
  font-size: 17px;
  background-color: #FFFFFF;
  border-radius: 4px;
  margin: 8px;
  color: rgba(0, 0, 0, 0.9);
  word-wrap: break-word;
  word-break: break-all;
}
.reply_quick_item:last-child {
  margin-bottom: 0;
}
.reply_quick_item:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.05);
}
.reply_quick_item:last-child:after {
  display: none;
}
.reply_quick_tool {
  text-align: center;
  padding: 16px 12px;
  font-size: 14px;
}
.reply_quick_tool navigator {
  color: #204495;
}
.reply_quick_empty {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  font-size: 17px;
}
.reply_quick_empty:active image {
  opacity: 0.5;
}
.pic_reply_quick_edit {
  vertical-align: middle;
  width: 18px;
  height: 18px;
  vertical-align: middle;
  margin-top: -3px;
  margin-right: 8px;
}
.reply_quick_empty:after {
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 100%;
}
.reply_quick_empty navigator {
  color: #000000;
}
.function_list {
  text-align: justify;
}
.function_item {
  display: inline-block;
  vertical-align: middle;
  padding: 12px;
}
.function_item .reply_function_pic.active {
  display: none;
}
.function_item:active .reply_function_pic {
  display: none;
}
.function_item:active .reply_function_pic.active {
  display: inline-block;
}
.reply_function_pic {
  width: 64px;
  height: 64px;
}

.safearea {
  background-color: var(--weui-BG-1);

}
.safearea_emojiShow {
  background-color: var(--weui-BG-0);
}`});var ui={};p(ui);var hi,xi=c(()=>{m();hi=y(k());gi();di();n({onShareAppMessage(){return{title:"emoji",path:"page/weui/example/emoji/emoji"}},data:{lineHeight:24,functionShow:!1,emojiShow:!1,comment:"",focus:!1,cursor:0,_keyboardShow:!1,emojiSource:"https://res.wx.qq.com/op_res/eROMsLpnNC10dC40vzF8qviz63ic7ATlbGg20lr5pYykOwHRbLZFUhgg23RtVorX",historyList:[],layoutHeight:"0px",safeHeight:0,keyboardHeight:0,isIOS:!1,canIUse:!0},onLoad(){let e=wx.getSystemInfoSync(),t=e.platform==="ios";this.safeHeight=e.screenHeight-e.safeArea.bottom;let i=wx.getSystemInfoSync().windowHeight-this.safeHeight/2;this.setData({isIOS:t,safeHeight:this.safeHeight,layoutHeight:i});let o=this.selectComponent(".mp-emoji");this.emojiNames=o.getEmojiNames(),this.parseEmoji=o.parseEmoji},onReady(){let{SDKVersion:e}=wx.getSystemInfoSync();(0,hi.compareVersion)(e,"2.9.1")<0&&this.setData({canIUse:!1})},onkeyboardHeightChange(e){let{height:t}=e.detail;t===0?(this.data._keyboardShow=!1,this.setData({safeHeight:this.safeHeight,keyboardHeight:t})):(this.data._keyboardShow=!0,this.setData({safeHeight:0,functionShow:!1,emojiShow:!1,keyboardHeight:t}))},hideAllPanel(){this.setData({functionShow:!1,emojiShow:!1})},showEmoji(){this.setData({functionShow:!1,emojiShow:this.data._keyboardShow||!this.data.emojiShow})},showFunction(){this.setData({functionShow:this.data._keyboardShow||!this.data.functionShow,emojiShow:!1})},chooseImage(){},onFocus(){this.data._keyboardShow=!0,this.hideAllPanel()},onBlur(e){this.data._keyboardShow=!1,this.data.cursor=e.detail.cursor||0},onInput(e){let t=e.detail.value;this.data.comment=t},onConfirm(){this.onsend()},insertEmoji(e){let t=e.detail.emotionName,{cursor:i,comment:o}=this.data,s=o.slice(0,i)+t+o.slice(i);this.setData({comment:s,cursor:i+t.length})},onsend(){let e=this.data.comment,t={emoji:this.parseEmoji(this.data.comment),id:`emoji_${this.data.historyList.length}`};this.setData({historyList:[...this.data.historyList,t],comment:"",emojiShow:!1})},deleteEmoji(){let e=this.data.cursor,t=this.data.comment,i="",o=0,s=6,l=e-s;l<0&&(l=0,s=e);let h=t.slice(l,e),g=h.match(/\[([\u4e00-\u9fa5\w]+)\]$/g);if(g){let d=g[0],u=s-d.length;if(this.emojiNames.indexOf(d)>=0){let x=h.replace(d,"");i=t.slice(0,l)+x+t.slice(e),o=l+u}}else{let d=e-1;d<0&&(d=0);let u=t.slice(0,d),x=t.slice(e);i=u+x,o=d}this.setData({comment:i,cursor:o})}})});var wi=a(()=>{console.log(123)});var bi=a((ih,Dn)=>{Dn.exports=`@import '../common.wxss';

.page{
    background-color: var(--weui-BG-0);
    height: 100%;
}

mp-video-swiper {
    width: 100%;
    height: 100%;
    max-width: 600px;
}`});var fi={};p(fi);var An,vi=c(()=>{m();wi();bi();An=["https://res.wx.qq.com/wxaliveplayer/htdocs/video14e1eea.mov","https://res.wx.qq.com/wxaliveplayer/htdocs/video24e1eeb.mov","https://res.wx.qq.com/wxaliveplayer/htdocs/video34e1eeb.mov","https://res.wx.qq.com/wxaliveplayer/htdocs/video44e1eeb.mov","https://res.wx.qq.com/wxaliveplayer/htdocs/video54e1eeb.mov"];n({onShareAppMessage(){return{title:"video-swiper",path:"page/weui/example/video-swiper/video-swiper"}},data:{videoList:[]},onLoad(){let e=An.map((t,i)=>({id:i,url:t,objectFit:"contain"}));this.setData({videoList:e})},onReady(){},onShow(){},onHide(){},onUnload(){},onPlay(e){},onPause(e){},onEnded(e){},onError(e){},onWaiting(e){},onTimeUpdate(e){},onProgress(e){},onLoadedMetaData(e){console.log("LoadedMetaData",e)}})});var yi=a(()=>{console.log(123)});var ki=a((lh,qn)=>{qn.exports=`@import '../common.wxss';

page{
    background-color: #FFFFFF;
    height: 100%;
}

.city__list {
    height: 100%;
}

`});var Di={};p(Di);var Ai=c(()=>{m();yi();ki();n({onShareAppMessage(){return{title:"index-list",path:"page/weui/example/index-list/index-list"}},onLoad(e){this.getCitys()},getCitys(){let t=wx.cloud.database({env:"release-b86096"}).collection("mapCity"),i=this;t.doc("6af880a55eb9574b008b78aa53a48405").get({success:function(o){console.log(o);let s=o.data.cities;s.sort((d,u)=>{let x=d.pinyin.join(""),A=u.pinyin.join("");return x.localeCompare(A)});let l=new Map;for(let d of s){let u=d.pinyin[0].charAt(0).toUpperCase();l.has(u)||l.set(u,[]),l.get(u).push({name:d.fullname})}let h=[];for(let d of l.keys())h.push(d);h.sort();let g=[];for(let d of h)g.push({alpha:d,subItems:l.get(d)});i.setData({list:g})}})}})});var qi=a(()=>{console.log(123)});var Si=a((gh,Sn)=>{Sn.exports=`@import '../common.wxss';

.page{
    background-color: var(--weui-BG-0);
    height: 100%;
}

.demo-block {
    /* margin: 10px 0; */
}

button {
    font-size: 14px;
    border-radius: 0;
}

.demo-title {
    font-size: 14px;
    color: gray;
    padding-left: 15px;
}

.demo-body {
    margin: 20px 0;
    height: 100px;
}
`});var Ci={};p(Ci);var zi=c(()=>{m();qi();Si();n({onShareAppMessage(){return{title:"sticky",path:"page/weui/example/sticky/sticky"}},data:{},onLoad(){},onReady(){this.setData({container:()=>wx.createSelectorQuery().select("#container")})},onScroll(e){console.log("onScroll",e)}})});var _i=a(()=>{console.log(123)});var Pi=a((xh,Cn)=>{Cn.exports=`@import '../common.wxss';

.page{
    background-color: var(--weui-BG-2);
    height: 100%;
}

.weui-tabs-bar__wrp {
    border-bottom: 1px solid var(--weui-BG-2);
    margin-top: 10px;
}

.weui-tabs-swiper {
    width: 100%;
    height: 100%;

    background-color: var(--weui-BG-2);

}

.tab-content {
    /* height: 100px; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
}

.weui-tabs-bar__title {
    margin: 0px 10px;
}

.tab-bar-title__selected {
    font-size: 20px;
    font-weight: bold;
}
.item-title {
    margin: 10px 10px 5px;
    font-size: 18px;
    width: 100%;
}
.item-desc {
    margin: 5px 10px 0;
    width: 100%;
    color: var(--weui-FG-1)
}
.weui-tabs-bar__item {
    background-color: var(--weui-BG-2) !important;
    color: var(--weui-FG-0) !important;
}

`});var Ti={};p(Ti);var Fi=c(()=>{m();_i();Pi();n({onShareAppMessage(){return{title:"tabs",path:"page/weui/example/tabs/tabs"}},data:{tabs:[],activeTab:0},onLoad(){let e=[{title:"\u6280\u672F\u5F00\u53D1",title2:"\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u8FDB\u9636",img:"http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEV5QjxLDJaL6ibHLSZ02TIcve0ocPXrdTVqGGbqAmh5Mw9V7504dlEiatSvnyibibHCrVQO2GEYsJicPA/0?wx_fmt=jpeg",desc:"\u672C\u89C6\u9891\u7CFB\u5217\u8BFE\u7A0B\uFF0C\u7531\u817E\u8BAF\u8BFE\u5802NEXT\u5B66\u9662\u4E0E\u5FAE\u4FE1\u56E2\u961F\u8054\u5408\u51FA\u54C1\uFF0C\u901A\u8FC7\u5B9E\u6218\u6848\u4F8B\uFF0C\u6DF1\u5165\u6D45\u51FA\u5730\u8FDB\u884C\u8BB2\u89E3\u3002"},{title:"\u4EA7\u54C1\u89E3\u6790",title2:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u76F4\u64AD",img:"http://mmbiz.qpic.cn/sz_mmbiz_png/GEWVeJPFkSHALb0g5rCc4Jf5IqDfdwhWJ43I1IvriaV5uFr9fLAuv3uxHR7DQstbIxhNXFoQEcxGzWwzQUDBd6Q/0?wx_fmt=png",desc:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u76F4\u64AD\u7CFB\u5217\u8BFE\u7A0B\u6301\u7EED\u66F4\u65B0\u4E2D\uFF0C\u5E2E\u52A9\u5927\u5BB6\u66F4\u597D\u5730\u7406\u89E3\u3001\u5E94\u7528\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u76F4\u64AD\u529F\u80FD\u3002"},{title:"\u8FD0\u8425\u89C4\u8303",title2:"\u5E38\u89C1\u95EE\u9898\u548C\u89E3\u51B3\u65B9\u6848",img:"http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSGqys4ibO2a8L9nnIgH0ibjNXfbicNbZQQYfxxUpmicQglAEYQ2btVXjOhY9gRtSTCxKvAlKFek7sRUFA/0?wx_fmt=jpeg",desc:"\u63D0\u9AD8\u5BA1\u6838\u8D28\u91CF"},{title:"\u8425\u9500\u7ECF\u9A8C",title2:"\u6D41\u91CF\u4E3B\u5C0F\u7A0B\u5E8F",img:"http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSH2Eic4Lt0HkZeEN08pWXTticVRgyNGgBVHMJwMtRhmB0hE4m4alSuwsBk3uBBOhdCr91bZlSFbYhFg/0?wx_fmt=jpeg",desc:"\u672C\u8BFE\u7A0B\u5171\u56DB\u8282\uFF0C\u5C06\u5206\u9636\u6BB5\u4E3A\u5F00\u53D1\u8005\u5C55\u793A\u5982\u4F55\u5F00\u901A\u6D41\u91CF\u4E3B\u529F\u80FD\u3001\u5982\u4F55\u63A5\u5165\u5E7F\u544A\u7EC4\u4EF6\u3001\u4E0D\u540C\u7C7B\u578B\u5C0F\u7A0B\u5E8F\u63A5\u5165\u7684\u5EFA\u8BAE\uFF0C\u4EE5\u53CA\u5982\u4F55\u901A\u8FC7\u5DE5\u5177\u8C03\u4F18\u5C0F\u7A0B\u5E8F\u53D8\u73B0\u6548\u7387\u3002"},{title:"\u9AD8\u6821\u5927\u8D5B",title2:"2020\u4E2D\u56FD\u9AD8\u6821\u8BA1\u7B97\u673A\u5927\u8D5B",img:"http://mmbiz.qpic.cn/mmbiz_jpg/TcDuyasB5T3Eg34AYwjMw7xbEK2n01ekiaicPiaMInEMTkOQtuv1yke5KziaYF4MLia4IAbxlm0m5NxkibicFg4IZ92EA/0?wx_fmt=jpeg",desc:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5E94\u7528\u5F00\u53D1\u8D5B"}];this.setData({tabs:e})},onTabClick(e){let t=e.detail.index;this.setData({activeTab:t})},onChange(e){let t=e.detail.index;this.setData({activeTab:t})},handleClick(e){wx.navigateTo({url:"./webview"})}})});var Ii=a(()=>{console.log(123)});var Ei=a((vh,zn)=>{zn.exports=`@import '../common.wxss';

.page{
    background-color: var(--weui-BG-2);
    height: 100%;
}

.vtabs-content-item {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    /* border-bottom: 1px solid #ccc; */
    padding-bottom: 20px;
}

.item-title {
    font-size: 18px;
    margin: 0 10px;
}
.item-desc {
    margin: 0 10px;

    color: var(--weui-FG-1)
}

.weui-vtabs-bar__wrp {
    background-color: var(--weui-BG-0) !important;
}

.weui-vtabs-bar__item {
    background-color: var(--weui-BG-0);
    color: var(--weui-FG-0);
    border-left-color: var(--weui-FG-0);

}

.weui-vtabs-bar__activeitem {
    background-color: var(--weui-BG-2) !important;
    color: var(--weui-FG-0)!important;
    border-left-color: #07c160 !important;
}

`});var Ui={};p(Ui);var Bi=c(()=>{m();Ii();Ei();n({onShareAppMessage(){return{title:"vtabs",path:"page/weui/example/vtabs/vtabs"}},data:{vtabs:[],activeTab:0},onLoad(){let e=[{title:"\u6280\u672F\u5F00\u53D1",title2:"\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u8FDB\u9636",img:"http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEV5QjxLDJaL6ibHLSZ02TIcve0ocPXrdTVqGGbqAmh5Mw9V7504dlEiatSvnyibibHCrVQO2GEYsJicPA/0?wx_fmt=jpeg",desc:"\u672C\u89C6\u9891\u7CFB\u5217\u8BFE\u7A0B\uFF0C\u7531\u817E\u8BAF\u8BFE\u5802NEXT\u5B66\u9662\u4E0E\u5FAE\u4FE1\u56E2\u961F\u8054\u5408\u51FA\u54C1\uFF0C\u901A\u8FC7\u5B9E\u6218\u6848\u4F8B\uFF0C\u6DF1\u5165\u6D45\u51FA\u5730\u8FDB\u884C\u8BB2\u89E3\u3002"},{title:"\u4EA7\u54C1\u89E3\u6790",title2:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u76F4\u64AD",img:"http://mmbiz.qpic.cn/sz_mmbiz_png/GEWVeJPFkSHALb0g5rCc4Jf5IqDfdwhWJ43I1IvriaV5uFr9fLAuv3uxHR7DQstbIxhNXFoQEcxGzWwzQUDBd6Q/0?wx_fmt=png",desc:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u76F4\u64AD\u7CFB\u5217\u8BFE\u7A0B\u6301\u7EED\u66F4\u65B0\u4E2D\uFF0C\u5E2E\u52A9\u5927\u5BB6\u66F4\u597D\u5730\u7406\u89E3\u3001\u5E94\u7528\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u76F4\u64AD\u529F\u80FD\u3002"},{title:"\u8FD0\u8425\u89C4\u8303",title2:"\u5E38\u89C1\u95EE\u9898\u548C\u89E3\u51B3\u65B9\u6848",img:"http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSGqys4ibO2a8L9nnIgH0ibjNXfbicNbZQQYfxxUpmicQglAEYQ2btVXjOhY9gRtSTCxKvAlKFek7sRUFA/0?wx_fmt=jpeg",desc:"\u63D0\u9AD8\u5BA1\u6838\u8D28\u91CF"},{title:"\u8425\u9500\u7ECF\u9A8C",title2:"\u6D41\u91CF\u4E3B\u5C0F\u7A0B\u5E8F",img:"http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSH2Eic4Lt0HkZeEN08pWXTticVRgyNGgBVHMJwMtRhmB0hE4m4alSuwsBk3uBBOhdCr91bZlSFbYhFg/0?wx_fmt=jpeg",desc:"\u672C\u8BFE\u7A0B\u5171\u56DB\u8282\uFF0C\u5C06\u5206\u9636\u6BB5\u4E3A\u5F00\u53D1\u8005\u5C55\u793A\u5982\u4F55\u5F00\u901A\u6D41\u91CF\u4E3B\u529F\u80FD\u3001\u5982\u4F55\u63A5\u5165\u5E7F\u544A\u7EC4\u4EF6\u3001\u4E0D\u540C\u7C7B\u578B\u5C0F\u7A0B\u5E8F\u63A5\u5165\u7684\u5EFA\u8BAE\u3002"},{title:"\u9AD8\u6821\u5927\u8D5B",title2:"2020\u4E2D\u56FD\u9AD8\u6821\u8BA1\u7B97\u673A\u5927\u8D5B",img:"http://mmbiz.qpic.cn/mmbiz_jpg/TcDuyasB5T3Eg34AYwjMw7xbEK2n01ekiaicPiaMInEMTkOQtuv1yke5KziaYF4MLia4IAbxlm0m5NxkibicFg4IZ92EA/0?wx_fmt=jpeg",desc:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5E94\u7528\u5F00\u53D1\u8D5B"}];this.setData({vtabs:e})},onTabClick(e){let t=e.detail.index;console.log("tabClick",t)},onChange(e){let t=e.detail.index;console.log("change",t)},handleClick(){wx.navigateTo({url:"../tabs/webview"})}})});var Li=a(()=>{console.log(123)});var Mi=a((Ah,_n)=>{_n.exports=`@import '../common.wxss';

page{
    height: 100%;
}

.demo-block {
    margin-bottom: 20px;
    padding: 20px;
}

.list-item {
    text-align: center;
    margin: 50px;
}
`});var Ri={};p(Ri);var ji=c(()=>{m();Li();Mi();n({onShareAppMessage(){return{title:"select-text",path:"page/weui/example/select-text/select-text"}},data:{arr:[{value:"\u957F\u6309\uFF0C\u4E0A\u4FA7\u590D\u5236",placement:"top"},{value:"\u957F\u6309\uFF0C\u53F3\u4FA7\u590D\u5236",placement:"right"},{value:"\u957F\u6309\uFF0C\u5DE6\u4FA7\u590D\u5236",placement:"left"},{value:"\u957F\u6309\uFF0C\u4E0B\u4FA7\u590D\u5236",placement:"bottom"}]},onLoad(){},onCopy(e){console.log("onCopy",e)},handleTouchStart(e){console.log("@@ touchstart",e)},handleTap(e){console.log("@@ tap",e),this.setData({evt:e})}})});var Gi=a(()=>{console.log(123)});var Vi=a((zh,Pn)=>{Pn.exports=`.barrage {
  width: 100%;
  height: 80%;
  position: absolute;
  box-sizing: border-box;
}

.video {
  width: 100%;
}`});var Wi=a((_h,Oi)=>{var Tn=["666666","\u4FDD\u62A4","\u5988\u5988\u6211\u4E0A\u7535\u89C6\u4E86\uFF01\uFF01","\u6211\u8981\u4E0A\u7535\u89C6\uFF01\uFF01","\u8001\u677F\u665A\u4E0A\u597D","\u524D\u65B9\u9AD8\u80FD\u9884\u8B66","\u4E3B\u64AD\u8FDF\u5230\u4E86~~~","\u5E72\u7684\u6F02\u4EAE","\u5E7F\u4E1C\u4EBA\u6C11\u53D1\u6765\u8D3A\u7535"],Hi=["red","rgb(0, 255, 0)","#0000FF"],Ni=(e=10,t=0)=>Math.floor(Math.random()*(e-t)+t),Fn=(e,t=Tn)=>{let i=[];for(let o=0;o<e;o++){let s=Ni(t.length),l=Ni(Hi.length);i.push({content:t[s],color:Hi[l]})}return i};Oi.exports={mockData:Fn}});var Yi={};p(Yi);var _,Xi=c(()=>{m();Gi();Vi();({mockData:_}=Wi());n({onShareAppMessage(){return{title:"barrage",path:"page/weui/example/barrage/barrage"}},data:{src:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",toggle:!0,barrageValue:"",showBarrage:!1},onReady(){this.addBarrage()},addBarrage(){let e=this.selectComponent(".barrage");this.barrage=e.getBarrageInstance({font:"bold 16px sans-serif",duration:15,lineHeight:2,mode:"overlap",padding:[10,10,10,10],range:[0,1],tunnelShow:!1})},fullscreenchange(){this.setData({toggle:!1}),setTimeout(()=>{this.barrage&&this.barrage.close(),this.setData({toggle:!0}),this.addBarrage()},1e3)},handleOpenClick(){this.setData({showBarrage:!0}),this.barrage.open();let e=_(3);this.barrage.addData(e),this.timer=setInterval(()=>{let t=_(5);this.barrage.addData(t)},2e3)},handleCloseClick(){this.barrage.close(),this.setData({showBarrage:!1})},handleInput(e){this.setData({barrageValue:e.detail.value})},handleAddClick(){let e=_(1,[this.data.barrageValue]);this.barrage.addData(e),this.setData({barrageValue:""})},handleTunnelShowClick(){this.barrage.showTunnel()},handleTunnelHideClick(){this.barrage.hideTunnel()}})});var Qi=a(()=>{console.log(123)});var Ki=a((Ih,In)=>{In.exports=`.page {
  /* display: flex; */
  /* flex-direction: column; */
  /* height: 100%; */
  /* align-items: center; */
  text-align: center;
}
.scroll-view-wxml {
  background-color: var(--weui-BG-2);
  margin: 5px;
  border: 1px solid #1AAD19;
  white-space: pre;
  box-sizing: border-box;
  padding: 5px 15px;
}
.text-center {
  text-align: center;
}
.center {
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  align-items: center;
}`});var Zi=a((Eh,Ji)=>{var En=e=>`<view class="container">
  <image class="img" mode="aspectFit" src="${e}"></image>
  <text class="title">
    \u5FAE\u4FE1\u5F00\u653E\u793E\u533A\u7B80\u4ECB\uFF08\u89C6\u9891\uFF09
  </text>
  <text class="desc">
    \u5FAE\u4FE1\u5F00\u653E\u793E\u533A\uFF0C\u662F\u4E00\u4E2A\u4E3A\u4F7F\u7528\u8005\u63D0\u4F9B\u4EA4\u6D41\u3001\u670D\u52A1\u7684\u5E73\u53F0\u3002
  </text>
</view>
`,Un={img:{width:200,height:120},container:{height:200,width:200,flexDirection:"column"},title:{height:20,width:200,color:"#15c15f",margin:4},desc:{fontSize:13,height:40,width:200,color:"#4c4c4c",margin:4}};Ji.exports={wxml:En,style:Un}});var $i=a(()=>{Qi();Ki();var{wxml:P,style:Bn}=Zi();Page({onShareAppMessage(){return{title:"wxml-to-canvas",path:"page/weui/example/wxml-to-canvas/wxml-to-canvas"}},data:{src:"",wxmlTemplate:P("your_img_url"),showCanvas:!1},onLoad(){this.widget=this.selectComponent(".widget"),wx.cloud.getTempFileURL({fileList:["cloud://release-b86096.7265-release-b86096-1258211818/\u5F00\u653E\u793E\u533A.jpeg"],success:e=>{let t=e.fileList[0].tempFileURL;console.log(t),this.url=t},fail:console.error})},renderToCanvas(){console.log(P(this.url)),this.widget.renderToCanvas({wxml:P(this.url),style:Bn}).then(t=>{console.log("container",t.layoutBox),this.container=t})},extraImage(){this.widget.canvasToTempFilePath().then(t=>{this.setData({src:t.tempFilePath,width:this.container.layoutBox.width,height:this.container.layoutBox.height})})}})});var er=a(()=>{console.log(123)});var tr=a((Rh,Ln)=>{Ln.exports=`.container .flex-row {
  display: flex;
  justify-content: space-between;
}


.item {
  margin: 6px;
  height: 240px;
  background: #ecebec;
  /* border: 1px solid #555050; */
}

page>view {
  width: 100vw;
  max-width: 100vw;
}

view, image, navigator {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: block;
  width: 100vw;
  padding: 20rpx;
  color: #191919;
  font-size: 28px;
}

.item {
  margin: 6px;
  height: 240px;
  line-height: 240px;
  text-align: center;
  background: #1aad19;
  /* border: 1px solid #555050; */
}`});var ar=a(()=>{er();tr();Page({data:{},onLoad(){},onShareAppMessage(){return{title:"\u5DE6\u53F3\u4F38\u7F29",path:"page/weui/example/telescopic/telescopic"}}})});var or=a(()=>{console.log(123)});var ir=a((Nh,Mn)=>{Mn.exports=`page>view {
  width: 100vw;
  max-width: 100vw;
}

view, image, navigator {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 100vw;
  padding: 20rpx;
  color: #191919;
  font-size: 28px;
}

.item {
  margin: 6px;
  height: 240px;
  line-height: 240px;
  text-align: center;
  background: #1aad19;
  /* border: 1px solid #555050; */
}

.container .flexbox {
  display: flex;
  flex-wrap: wrap;
}

.container .flexbox .item {
  flex: 0 0 100%;
  height: 150px;
  padding: 6px;
}

.container .flexbox .item .block {
  width: 100%;
  height: 100%;
  background: #ecebec;
}

@media only screen and (min-width: 420px) {
  .container .flexbox .item {
    flex: 0 0 50%;
  }
}

@media only screen and (min-width: 768px) {
  .container .flexbox .item {
    flex: 0 0 33.33%;
  }
}

@media only screen and (min-width: 1024px) {
  .container .flexbox .item {
    flex: 0 0 25%;
  }
}`});var rr=a(()=>{or();ir();Page({data:{},onLoad(){},onShareAppMessage(){return{title:"\u6362\u884C\u6392\u5217",path:"page/weui/example/linebreak/linebreak"}}})});var sr=a(()=>{console.log(123)});var nr=a((Qh,Rn)=>{Rn.exports=`.container {
  height: 100vh;
}

.mobile {
  height: 100%;
  position: relative;
}

.mobile > view {
  transition: all .3s ease-in-out;
}

.mobile .left {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #ecebec;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mobile .left .item {
  width: 80%;
  height: 60rpx;
  background: #d8d8d8;
  margin-top: 40rpx;
  border-radius: 4px;
  border: 0px;
}

.mobile.active .left {
  width: 66.66%;
}

.mobile.active .right {
  opacity: .3;
}

.mobile .right {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.mobile .nav-bar {
  height: 80rpx;
  position: relative;
  background: #2782d7;
  border-radius: 4px;
  margin-bottom: 30rpx;
}

.mobile .nav-bar .button {
  width: 50rpx;
  height: 50rpx;
  position: absolute;
  top: 50%;
  left: 30rpx;
  transform: translateY(-50%);
}

.mobile .section {
  flex: auto;
  background: #1aad19;
  border-radius: 4px;
}

.laptop {
  display: none;
}

.laptop .nav-bar {
  height: 40rpx;
  position: relative;
  background: #2782d7;
  border-radius: 4px;
  margin-bottom: 20rpx;
}

.laptop .flexbox {
  display: flex;
}

.laptop .flexbox .left {
  flex: 1;
}

.laptop .flexbox .left .item {
  width: 90%;
  height: 30rpx;
  background: #d8d8d8;
  margin-bottom: 15rpx;
  border-radius: 4px;
}

.laptop .flexbox .right {
  flex: 3;
  height: 500rpx;
  background: #1aad19;
  border-radius: 4px;
}

@media only screen and (min-width: 576px) {
  .mobile {
    display: none;
  }
  .laptop {
    display: block;
  }
}

page>view {
  width: 100vw;
  max-width: 100vw;
}

view, image, navigator {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: block;
  width: 100vw;
  padding: 20rpx;
  color: #191919;
  font-size: 28px;
}

.item {
  margin: 6px;
  height: 240px;
  line-height: 240px;
  text-align: center;
  background: #ecebec;
  /* border: 1px solid #555050; */
}
.mobile .left .dark-C, .laptop .flexbox .left .dark-C {
  background: #f1f1f1;
  color: #353535;
}
.mobile .dark-bg {
  background-color: #1F1F1F; 
}`});var lr=a(()=>{sr();nr();Page({data:{show:!1,theme:"light"},onLoad(){this.setData({theme:wx.getSystemInfoSync().theme||"light"}),wx.onThemeChange&&wx.onThemeChange(({theme:e})=>{this.setData({theme:e})})},show(){this.setData({show:!0})},hide(){this.setData({show:!1})},onShareAppMessage(){return{title:"\u4FA7\u8FB9\u5BFC\u822A\u680F",path:"page/weui/example/sidenavigation/sidenavigation"}}})});var pr=a(()=>{console.log(123)});var cr=a((eu,jn)=>{jn.exports=`page>view {
  width: 100vw;
  max-width: 100vw;
}

view, image, navigator {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: block;
  width: 100vw;
  padding: 20rpx;
  color: #ffffff;
  font-size: 28px;
}

.item {
  margin: 6px;
  height: 240px;
  line-height: 240px;
  text-align: center;
  background: #ecebec;
  /* border: 1px solid #555050; */
}
.item-A {
  background: #1aad19;
}
.item-B {
  background: #2782d7;
}`});var mr=a(()=>{pr();cr();Page({data:{},onLoad(){},onShareAppMessage(){return{title:"\u5206\u9875\u5C55\u73B0",path:"page/weui/example/pagination/pagination"}}})});var gr=a(()=>{console.log(123)});var dr=a((ru,Gn)=>{Gn.exports=`page>view {
  width: 100vw;
  max-width: 100vw;
}

view, image, navigator {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: block;
  width: 100vw;
  padding: 20rpx;
  color: #ffffff;
  font-size: 28px;
}

.item {
  margin: 6px;
  height: 240px;
  line-height: 240px;
  text-align: center;
  background: #ecebec;
  /* border: 1px solid #555050; */
}
.item-A {
  background: #1aad19;
}
.item-B {
  background: #2782d7;
}

.item-C {
  background: #d8d8d8;
  height: 100%;
  color: #353535;
}
.dark-C {
  background: #f1f1f1;
  color: #353535;
}

`});var hr=a(()=>{gr();dr();Page({data:{theme:"light"},onLoad(){this.setData({theme:wx.getSystemInfoSync().theme||"light"}),wx.onThemeChange&&wx.onThemeChange(({theme:e})=>{this.setData({theme:e})})},onShareAppMessage(){return{title:"\u81EA\u7531\u5E03\u5C40",path:"page/weui/example/freelayout/freelayout"}}})});var ur=a(()=>{console.log(123)});var xr=a((cu,Vn)=>{Vn.exports=`page>view {
  width: 100vw;
  max-width: 100vw;
}

view, image, navigator {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: block;
  width: 100vw;
  padding: 20rpx;
  color: #ffffff;
  font-size: 28px;
}

.item {
  margin: 6px;
  height: 240px;
  line-height: 240px;
  text-align: center;
  background: #ecebec;
  border: 1px solid #555050;
}

.item-A {
  background: #1aad19;
  height: 100%;
}
.item-B {
  background: #2782d7;
  height: 100%;
}

.item-C {
  background: #d8d8d8;
  height: 100%;
  color: #353535;
}

.item {
  border: 0px;
  margin: 0px;
  height: 450px;
  line-height: 450px;
}
.dark-C {
  background: #f1f1f1;
  color: #353535;
}`});var wr=a(()=>{ur();xr();Page({data:{hide1:!1,hide2:!1,theme:"light"},onLoad(){this.setData({theme:wx.getSystemInfoSync().theme||"light"}),wx.onThemeChange&&wx.onThemeChange(({theme:e})=>{this.setData({theme:e})})},onClick(e){this.setData({[e.target.dataset.set]:!0})},onShareAppMessage(){return{title:"\u5206\u5C42\u5C55\u73B0",path:"page/weui/example/layeredpresentation/layeredpresentation"}}})});var br=a(()=>{console.log(123)});var fr=a((uu,Hn)=>{Hn.exports=`page>view {
  width: 100vw;
  max-width: 100vw;
}

view, image, navigator {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: block;
  width: 100vw;
  padding: 20rpx;
  color: #ffffff;
  font-size: 28px;
}

.item {
  margin: 6px;
  height: 240px;
  line-height: 240px;
  text-align: center;
  background: #d8d8d8;
  color: #353535;
  /* border: 1px solid #555050; */
}
.item-swiper {
  display: none;
  height: 250px;
}

@media (max-width: 767px) {
  .item-swiper {
    display: block;
  }
}

.item-A {
  background: #1aad19;
  color: #ffffff;
}
.item-B {
  background: #2782d7;
  color: #ffffff;
}

.item-C {
  background: #d8d8d8;
  color: #353535;
}
.dark-C {
  background: #f1f1f1;
  color: #353535;
}
`});var vr=a(()=>{br();fr();Page({data:{theme:"light"},onLoad(){this.setData({theme:wx.getSystemInfoSync().theme||"light"}),wx.onThemeChange&&wx.onThemeChange(({theme:e})=>{this.setData({theme:e})})},onShareAppMessage(){return{title:"\u6A2A\u5411\u62D3\u5C55",path:"page/weui/example/horizontalexpansion/horizontalexpansion"}}})});var yr=a(()=>{console.log(123)});var kr=a((vu,Nn)=>{Nn.exports=`@import '../../../common//lib/weui.wxss';

.canvas {
  width: 305px;
  height: 305px;
  background-color: var(--weui-BG-1);
  margin-top: 30px;
}`});var Ar={};p(Ar);var Dr,qr=c(()=>{Dr=y(k());yr();kr();Page({onShareAppMessage(){return{title:"canvas",path:"page/component/pages/canvas-2d/canvas-2d"}},data:{canIUse:!0},onReady(){let{SDKVersion:e}=wx.getSystemInfoSync();console.log(e),(0,Dr.compareVersion)(e,"2.7.0")<0?(console.log("123"),this.setData({canIUse:!1})):(this.position2D={x:150,y:150,vx:2,vy:2},this.x=-100,wx.createSelectorQuery().select("#canvas2D").fields({node:!0,size:!0}).exec(this.init.bind(this)))},init(e){let t=e[0].width,i=e[0].height,o=e[0].node;if(!o){this.setData({canIUse:!1});return}let s=o.getContext("2d"),l=wx.getSystemInfoSync().pixelRatio;o.width=t*l,o.height=i*l,s.scale(l,l);let h=()=>{this.render(o,s),o.requestAnimationFrame(h)};o.requestAnimationFrame(h);let g=o.createImage();g.onload=()=>{this._img=g},g.src="./car.png"},render(e,t){t.clearRect(0,0,305,305),this.drawBall2D(t),this.drawCar(t)},drawBall2D(e){let t=this.position2D;t.x+=t.vx,t.y+=t.vy,t.x>=300&&(t.vx=-2),t.x<=7&&(t.vx=2),t.y>=300&&(t.vy=-2),t.y<=7&&(t.vy=2);function i(o,s){e.beginPath(),e.arc(o,s,5,0,Math.PI*2),e.fillStyle="#1aad19",e.strokeStyle="rgba(1,1,1,0)",e.fill(),e.stroke()}i(t.x,150),i(150,t.y),i(300-t.x,150),i(150,300-t.y),i(t.x,t.y),i(300-t.x,300-t.y),i(t.x,300-t.y),i(300-t.x,t.y)},drawCar(e){!this._img||(this.x>350&&(this.x=-100),e.drawImage(this._img,this.x++,150-25,100,50),e.restore())},onUnload(){}})});var Sr=a(()=>{console.log(123)});var Cr=a((Du,On)=>{On.exports=`@import '../../../common//lib/weui.wxss';

.canvas {
  width: 305px;
  height: 305px;
  background-color: var(--weui-BG-1);
  margin-top: 30px;
}`});var _r={};p(_r);var zr,Wn,Yn,Xn,Pr=c(()=>{zr=y(k());Sr();Cr();Wn=`
  precision mediump float;

  attribute vec2 vertPosition;
  attribute vec3 vertColor;
  varying vec3 fragColor;

  void main() {
    gl_Position = vec4(vertPosition, 0.0, 1.0);
    fragColor = vertColor;
  }
`,Yn=`
  precision mediump float;

  varying vec3 fragColor;
  void main() {
    gl_FragColor = vec4(fragColor, 1.0);
  }
`,Xn=[0,.5,1,1,0,-.5,-.5,.7,0,1,.5,-.5,.1,1,.6];Page({onShareAppMessage(){return{title:"canvas",path:"page/component/pages/webgl/webgl"}},data:{canIUse:!0},onReady(){let{SDKVersion:e}=wx.getSystemInfoSync();(0,zr.compareVersion)(e,"2.7.0")<0?(console.log("123"),this.setData({canIUse:!1})):wx.createSelectorQuery().select("#canvasWebGL").node().exec(t=>{let i=t[0].node;this.renderWebGL(i)})},renderWebGL(e){if(!e){this.setData({canIUse:!1});return}let t=e.getContext("webgl");if(!t){console.error("gl init failed",t);return}t.viewport(0,0,305,305);let i=t.createShader(t.VERTEX_SHADER);t.shaderSource(i,Wn),t.compileShader(i);let o=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(o,Yn),t.compileShader(o);let s=t.createProgram();t.attachShader(s,i),t.attachShader(s,o),t.deleteShader(i),t.deleteShader(o),t.linkProgram(s),t.useProgram(s);let l=()=>{let h=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,h),t.bufferData(t.ARRAY_BUFFER,new Float32Array(Xn),t.STATIC_DRAW);let g=t.getAttribLocation(s,"vertPosition"),d=t.getAttribLocation(s,"vertColor");t.vertexAttribPointer(g,2,t.FLOAT,t.FALSE,5*Float32Array.BYTES_PER_ELEMENT,0),t.vertexAttribPointer(d,3,t.FLOAT,t.FALSE,5*Float32Array.BYTES_PER_ELEMENT,2*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(g),t.enableVertexAttribArray(d),t.drawArrays(t.TRIANGLES,0,3),e.requestAnimationFrame(l)};e.requestAnimationFrame(l)}})});I();B();R();V();O();X();J();ae();re();le();me();he();we();ve();Ae();Ce();Pe();Ie();Be();Re();Ve();Oe();Xe();et();ot();st();pt();gt();ft();Dt();St();_t();Ft();Ut();Mt();Gt();Nt();Yt();Kt();$t();aa();pa();ha();ba();ka();Sa();Pa();Ea();Ma();Va();Wa();Ka();eo();to();so();co();uo();fo();Do();Co();To();Uo();Mo();Ro();Ho();Yo();Ko();ei();ii();ni();mi();xi();vi();Ai();zi();Fi();Bi();ji();Xi();$i();ar();rr();lr();mr();hr();wr();vr();qr();Pr();
