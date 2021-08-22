var a=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var L=a(()=>{console.log(123)});var F=a((Ri,Ho)=>{Ho.exports=`.page-section {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 25px;
  box-sizing: border-box;
}
.page-body-title {
  font-size: 30px;
  line-height: 100px;
}
.page-body-text {
  color: #bbb;
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 50px 0;
  text-align: center;
}
.page-body-button {
  width: 100%;
}
`});var C=a(()=>{L();F();var U=getApp();Page({onShareAppMessage(){return{title:"\u5FAE\u4FE1\u767B\u5F55",path:"package/API/pages/login/login"}},onLoad(){this.setData({hasLogin:U.globalData.hasLogin})},data:{},login(){let e=this;wx.login({success(){U.globalData.hasLogin=!0,e.setData({hasLogin:!0})}})}})});var B=a(()=>{console.log(123)});var z=a((Wi,Wo)=>{Wo.exports=`.page-body-info {
  padding-bottom: 0;
  height: 230px;
}
.userinfo-avatar {
  border-radius: 114px;
  width: 114px;
  height: 114px;
}
.userinfo-nickname {
  margin-top: 10px;
  font-size: 19px;
}`});var E=a(()=>{B();z();Page({onShareAppMessage(){return{title:"\u83B7\u53D6\u7528\u6237\u4FE1\u606F",path:"packageAPI/pages/get-user-info/get-user-info"}},data:{hasUserInfo:!1},getUserInfo(e){let t=e.detail.userInfo;this.setData({userInfo:t,hasUserInfo:!0})},clear(){this.setData({hasUserInfo:!1,userInfo:{}})}})});var _=a(()=>{console.log(123)});var R=a(($i,Go)=>{Go.exports=`.page-section{
  width: auto;
  margin: 15px;
  padding: 62px 15px;
  background-color: var(--weui-BG-2);
  text-align: center;
  font-size: 14px;
}
.desc{
  color: var(--weui-FG-1);
}
.price{
  margin-top: 15px;
  margin-bottom: 13px;
  position: relative;
  display: inline-block;
  font-size: 39px;
  line-height: 1;
}
.price:before{
  content: "\xA5";
  position: absolute;
  font-size: 20px;
  top: 4px;
  left: -20px;
}
`});var V=a(()=>{_();R();var Oo=getApp();Page({onShareAppMessage(){return{title:"\u53D1\u8D77\u652F\u4ED8",path:"packageAPI/pages/request-payment/request-payment"}},onLoad(){},requestPayment(){let e=this;e.setData({loading:!0}),Oo.getUserOpenId(function(t,o){t?(console.log("err:",t),e.setData({loading:!1})):wx.cloud.callFunction({name:"pay",data:{action:"unifiedorder",userInfo:{openId:o},price:.01},success:s=>{console.warn("[\u4E91\u51FD\u6570] [openapi] templateMessage.send \u8C03\u7528\u6210\u529F\uFF1A",s);let i=s.result.data;wx.requestPayment({timeStamp:i.time_stamp,nonceStr:i.nonce_str,package:`prepay_id=${i.prepay_id}`,signType:"MD5",paySign:i.sign,success:()=>{wx.showToast({title:"\u652F\u4ED8\u6210\u529F"})}})},fail:s=>{wx.showToast({icon:"none",title:"\u652F\u4ED8\u5931\u8D25"}),console.error("[\u4E91\u51FD\u6570] [openapi] templateMessage.send \u8C03\u7528\u5931\u8D25\uFF1A",s)}})})}})});var N=a(()=>{console.log(123)});var j=a((er,Jo)=>{Jo.exports='@import "../../../common/lib/weui.wxss";'});var H=a(()=>{N();j();Page({data:{shareData:{title:"\u81EA\u5B9A\u4E49\u8F6C\u53D1\u6807\u9898",desc:"\u81EA\u5B9A\u4E49\u8F6C\u53D1\u63CF\u8FF0",path:"packageAPI/pages/share/share"}},onShareAppMessage(){return this.data.shareData}})});var W=a(()=>{console.log(123)});var G=a((ir,Qo)=>{Qo.exports=`.button-share {
  display: none;
}
`});var O=a(()=>{W();G();Page({onShareAppMessage(){return{title:"\u8F6C\u53D1\u6309\u94AE",path:"packageAPI/pages/share-button/share-button"}},handleTapShareButton(){typeof wx.canIUse=="function"&&wx.canIUse("button.open-type.share")||wx.showModal({title:"\u5F53\u524D\u7248\u672C\u4E0D\u652F\u6301\u8F6C\u53D1\u6309\u94AE",content:"\u8BF7\u5347\u7EA7\u81F3\u6700\u65B0\u7248\u672C\u5FAE\u4FE1\u5BA2\u6237\u7AEF",showCancel:!1})}})});var J=a(()=>{console.log(123)});var Q=a((pr,$o)=>{$o.exports="/* page/API/pages/custom-message/custom-message.wxss */"});var $=a(()=>{J();Q();Page({onShareAppMessage(){return{title:"\u5BA2\u670D\u6D88\u606F",path:"packageAPI/pages/custom-message/custom-message"}}})});var Y=a(()=>{console.log(123)});var X=a((mr,Yo)=>{Yo.exports='@import "../../../common/lib/weui.wxss";'});var f=a((fr,Z)=>{var Xo="14592619.qcloud.la",Zo={requestUrl:"https://mp.weixin.qq.com",host:Xo,envId:"release-b86096",demoImageFileId:"cloud://release-b86096.7265-release-b86096-1258211818/demo.jpg",demoVideoFileId:"cloud://release-b86096.7265-release-b86096/demo.mp4"};Z.exports=Zo});var K=a(()=>{Y();X();var Ko=f().templateMessageUrl,es=getApp(),ts={address:"T.I.T \u9020\u8230\u5382",time:"2017.01.09",name:"\u5E1D\u56FD\u6B7C\u661F\u8230",serial:"123456789"};Page({onShareAppMessage(){return{title:"\u6A21\u677F\u6D88\u606F",path:"packageAPI/pages/template-message/template-message"}},onLoad(){this.setData({formData:ts})},submitForm(e){let t=this,{formId:o}=e.detail,s=e.detail.value;console.log("form_id is:",o),t.setData({loading:!0}),es.getUserOpenId(function(i,r){i?console.log("err:",i):wx.request({url:Ko,method:"POST",data:{form_id:o,openid:r,formData:s},success(c){console.log("submit form success",c),wx.showToast({title:"\u53D1\u9001\u6210\u529F",icon:"success"}),t.setData({loading:!1})},fail({errMsg:c}){console.log("submit form fail, errMsg is:",c)}})})}})});var ee=a(()=>{console.log(123)});var te=a((kr,as)=>{as.exports=`@import "../../../common/lib/weui.wxss";

.weui-label{
  width: 5em;
}
`});var ae=a(()=>{ee();te();Page({onShareAppMessage(){return{title:"\u8BBE\u7F6E\u9875\u9762\u6807\u9898",path:"packageAPI/pages/set-navigation-bar-title/set-navigation-bar-title"}},setNaivgationBarTitle(e){let t=e.detail.value.title;return console.log(t),wx.setNavigationBarTitle({title:t,success(){console.log("setNavigationBarTitle success")},fail(o){console.log("setNavigationBarTitle fail, err is",o)}}),!1}})});var oe=a(()=>{console.log(123)});var se=a((Sr,os)=>{os.exports=""});var ie=a(()=>{oe();se();Page({onShareAppMessage(){return{title:"\u6807\u9898\u680F\u52A0\u8F7D\u52A8\u753B",path:"packageAPI/pages/navigation-bar-loading/navigation-bar-loading"}},showNavigationBarLoading(){wx.showNavigationBarLoading()},hideNavigationBarLoading(){wx.hideNavigationBarLoading()}})});var re=a(()=>{console.log(123)});var ne=a((Lr,ss)=>{ss.exports=""});var le=a(()=>{re();ne();Page({onShareAppMessage(){return{title:"\u9875\u9762\u8DF3\u8F6C",path:"packageAPI/pages/navigator/navigator"}},navigateTo(){wx.navigateTo({url:"./navigator"})},navigateBack(){wx.navigateBack()},redirectTo(){wx.redirectTo({url:"./navigator"})},switchTab(){wx.switchTab({url:"/page/component/index"})},reLaunch(){wx.reLaunch({url:"/page/component/index"})}})});var ce=a(()=>{console.log(123)});var pe=a((zr,is)=>{is.exports=`.page-body-info {
  background-color: transparent;
}
.btn-area{
  margin-top: 150px;
}`});var ge=a(()=>{ce();pe();Page({onShareAppMessage(){return{title:"\u4E0B\u62C9\u5237\u65B0",path:"packageAPI/pages/pull-down-refresh/pull-down-refresh"}},onPullDownRefresh(){wx.showToast({title:"loading...",icon:"loading"}),console.log("onPullDownRefresh",new Date)},stopPullDownRefresh(){wx.stopPullDownRefresh({complete(e){wx.hideToast(),console.log(e,new Date)}})}})});var de=a(()=>{console.log(123)});var ue=a((Nr,rs)=>{rs.exports=`.animation-element-wrapper {
  display: flex;
  width: 100%;
  padding-top: 75px;
  padding-bottom: 75px;
  justify-content: center;
  overflow: hidden;
  background-color: #ffffff;
}
.animation-element {
  width: 100px;
  height: 100px;
  background-color: #1AAD19;
}
.animation-buttons {
  padding: 15px 25px 5px;
  width: 100%;
  height: 330px;
  box-sizing: border-box;
}
.animation-button {
  float: left;
  line-height: 2;
  width: 150px;
  margin: 8px 11px;
}

.animation-button-reset {
  width: 610px;
}

.btn-row {
  display: flex;
  justify-content: space-between;
}`});var he=a(()=>{de();ue();Page({onShareAppMessage(){return{title:"\u52A8\u753B",path:"package/API/pages/animation/animation",containerStyle1:""}},data:{canIUse:!0},onLoad(){let e=this.animate!==void 0;e||(wx.showModal({title:"\u5FAE\u4FE1\u7248\u672C\u8FC7\u4F4E\uFF0C\u6682\u4E0D\u652F\u6301\u672C\u529F\u80FD"}),this.setData({canIUse:e}))},change:function(){this.animate("#container1",[{opacity:1,rotate:0,backgroundColor:"#FF0000"},{opacity:.5,rotate:45,backgroundColor:"#00FF00",offset:.9},{opacity:0,rotate:90,backgroundColor:"#FF0000"}],5e3,function(){this.clearAnimation("#container1",{opacity:!0,rotate:!0},function(){console.log("\u6E05\u9664\u4E86#container\u4E0A\u7684\u52A8\u753B\u5C5E\u6027")})}.bind(this)),this.animate(".block1",[{scale:[1,1],rotate:0,ease:"ease-out"},{scale:[1.5,1.5],rotate:45,ease:"ease-in",offset:.9},{scale:[2,2],rotate:90}],5e3,function(){this.clearAnimation(".block1",{scale:!0,rotate:!0},function(){console.log("\u6E05\u9664\u4E86.block1\u4E0A\u7684\u52A8\u753B\u5C5E\u6027")})}.bind(this))}})});var me=a(()=>{console.log(123)});var fe=a((Or,ns)=>{ns.exports=`/*
.cancel {
  color: white;
  background: #303F9F;
}
.item {
  color: black;
  background: #C5CAE9;
}*/
`});var we=a(()=>{me();fe();Page({onShareAppMessage(){return{title:"\u64CD\u4F5C\u83DC\u5355",path:"packageAPI/pages/action-sheet/action-sheet"}},actionSheetTap(){wx.showActionSheet({itemList:["item1","item2","item3","item4"],success(e){console.log(e.tapIndex)}})}})});var xe=a(()=>{console.log(123)});var be=a((Xr,ls)=>{ls.exports="/* page/API/pages/modal/modal.wxss */"});var ve=a(()=>{xe();be();Page({onShareAppMessage(){return{title:"\u6A21\u6001\u5F39\u7A97",path:"packageAPI/pages/modal/modal"}},data:{modalHidden:!0,modalHidden2:!0},modalTap(){wx.showModal({title:"\u5F39\u7A97\u6807\u9898",content:"\u5F39\u7A97\u5185\u5BB9\uFF0C\u544A\u77E5\u5F53\u524D\u72B6\u6001\u3001\u4FE1\u606F\u548C\u89E3\u51B3\u65B9\u6CD5\uFF0C\u63CF\u8FF0\u6587\u5B57\u5C3D\u91CF\u63A7\u5236\u5728\u4E09\u884C\u5185",showCancel:!1,confirmText:"\u786E\u5B9A"})},noTitlemodalTap(){wx.showModal({content:"\u5F39\u7A97\u5185\u5BB9\uFF0C\u544A\u77E5\u5F53\u524D\u72B6\u6001\u3001\u4FE1\u606F\u548C\u89E3\u51B3\u65B9\u6CD5\uFF0C\u63CF\u8FF0\u6587\u5B57\u5C3D\u91CF\u63A7\u5236\u5728\u4E09\u884C\u5185",confirmText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"})}})});var ke=a(()=>{console.log(123)});var ye=a((an,cs)=>{cs.exports="/* page/API/pages/toast/toast.wxss */"});var Pe=a(()=>{ke();ye();Page({onShareAppMessage(){return{title:"\u6D88\u606F\u63D0\u793A\u6846",path:"packageAPI/pages/toast/toast"}},toast1Tap(){wx.showToast({title:"\u9ED8\u8BA4"})},toast2Tap(){wx.showToast({title:"duration 3000",duration:3e3})},toast3Tap(){wx.showToast({title:"loading",icon:"loading",duration:5e3})},hideToast(){wx.hideToast()}})});var Ie=a(()=>{console.log(123)});var De=a((ln,ps)=>{ps.exports=`.page-body-info {
  height: 100px;
}
.page-body-text-network-type {
  font-size: 40px;
  font-family: -apple-system-font,Helvetica Neue,Helvetica,sans-serif;
}
`});var Se=a(()=>{Ie();De();Page({onShareAppMessage(){return{title:"\u83B7\u53D6\u624B\u673A\u7F51\u7EDC\u72B6\u6001",path:"packageAPI/pages/get-network-type/get-network-type"}},data:{hasNetworkType:!1},getNetworkType(){let e=this;wx.getNetworkType({success(t){console.log(t),e.setData({hasNetworkType:!0,networkType:t.subtype||t.networkType})}})},clear(){this.setData({hasNetworkType:!1,networkType:""})}})});var Ae=a(()=>{console.log(123)});var qe=a((un,gs)=>{gs.exports=`.page-body-info {
  height: 100px;
}
.page-body-text-network-type {
  font-size: 40px;
  font-family: -apple-system-font,Helvetica Neue,Helvetica,sans-serif;
}
`});var Te=a(()=>{Ae();qe();Page({onShareAppMessage(){return{title:"\u76D1\u542C\u624B\u673A\u7F51\u7EDC\u53D8\u5316",path:"packageAPI/pages/on-network-status-change/on-network-status-change"}},data:{isConnected:!1},onLoad(){let e=this;wx.onNetworkStatusChange(function(t){e.setData({isConnected:t.isConnected,networkType:t.networkType})})},onShow(){let e=this;wx.getNetworkType({success(t){e.setData({isConnected:t.networkType!=="none",networkType:t.networkType})}})}})});var Me=a(()=>{console.log(123)});var Le=a((xn,ds)=>{ds.exports='@import "../../../common/lib/weui.wxss";'});var Fe=a(()=>{Me();Le();Page({onShareAppMessage(){return{title:"\u83B7\u53D6\u624B\u673A\u7CFB\u7EDF\u4FE1\u606F",path:"packageAPI/pages/get-system-info/get-system-info"}},data:{systemInfo:{}},getSystemInfo(){let e=this;wx.getSystemInfo({success(t){e.setData({systemInfo:t})}})}})});var Ue=a(()=>{console.log(123)});var Ce=a((Pn,us)=>{us.exports=`.direction {
  position: relative;
  margin-top: 35px;
  display: flex;
  width: 520px;
  height: 520px;
  align-items: center;
  justify-content: center;
}
.direction-value {
  position: relative;
  font-size: 100px;
  color: #353535;
  line-height: 1;
  z-index: 1;
}
.direction-degree {
  position: absolute;
  top: 0;
  right: -20px;
  font-size: 30px;
}
.bg-compass{
  position: absolute;
  top: 0;
  left: 0;
  width: 520px;
  height: 520px;
  transition: .1s;
}
.bg-compass-line{
  position: absolute;
  left: 134px;
  top: -5px;
  width: 3px;
  height: 28px;
  background-color: #1AAD19;
  border-radius: 500px;
  z-index: 1;
}
.controls{
  margin-top: 35px;
}
.controls button{
  margin-left: 10px;
  float: left;
}
`});var Be=a(()=>{Ue();Ce();Page({onShareAppMessage(){return{title:"\u76D1\u542C\u7F57\u76D8\u6570\u636E",path:"packageAPI/pages/on-compass-change/on-compass-change"}},data:{enabled:!0,direction:0},onReady(){let e=this;wx.onCompassChange(function(t){e.setData({direction:parseInt(t.direction,10)})})},startCompass(){if(this.data.enabled)return;let e=this;wx.startCompass({success(){e.setData({enabled:!0})}})},stopCompass(){if(!this.data.enabled)return;let e=this;wx.stopCompass({success(){e.setData({enabled:!1})}})}})});var ze=a(()=>{console.log(123)});var Ee=a((qn,hs)=>{hs.exports=`.page-section{
  width: auto;
  margin: 15px;
  padding: 42px 30px 30px;
  background-color: var(--weui-BG-2);
  font-size: 14px;
}
.desc{
  margin-bottom: 10px;
}
.input{
  height: 60px;
  line-height: 60px;
  font-size: 39px;
  border-bottom: 1px solid var(--weui-FG-3);
}
.btn-area{
  padding: 0;
}
`});var _e=a(()=>{ze();Ee();Page({onShareAppMessage(){return{title:"\u6253\u7535\u8BDD",path:"packageAPI/pages/make-phone-call/make-phone-call"}},data:{disabled:!0},bindInput(e){this.inputValue=e.detail.value,this.inputValue.length>0?this.setData({disabled:!1}):this.setData({disabled:!0})},makePhoneCall(){wx.makePhoneCall({phoneNumber:this.inputValue,success(){console.log("\u6210\u529F\u62E8\u6253\u7535\u8BDD")}})}})});var Re=a(()=>{console.log(123)});var Ve=a((Un,ms)=>{ms.exports=`@import "../../../common/lib/weui.wxss";

.weui-cell__bd{
  min-height: 24px;
  word-break: break-all;
}`});var Ne=a(()=>{Re();Ve();Page({onShareAppMessage(){return{title:"\u626B\u7801",path:"packageAPI/pages/scan-code/scan-code"}},data:{result:""},scanCode(){let e=this;wx.scanCode({success(t){e.setData({result:t.result})},fail(){}})}})});var je=a(()=>{console.log(123)});var He=a((_n,fs)=>{fs.exports=""});var We=a(()=>{je();He();var ws=f().requestUrl,xs=2e3;Page({onShareAppMessage(){return{title:"\u7F51\u7EDC\u8BF7\u6C42",path:"packageAPI/pages/request/request"}},makeRequest(){let e=this;e.setData({loading:!0}),wx.request({url:ws,data:{noncestr:Date.now()},success(t){wx.showToast({title:"\u8BF7\u6C42\u6210\u529F",icon:"success",mask:!0,duration:xs}),e.setData({loading:!1}),console.log("request success",t)},fail({errMsg:t}){console.log("request fail",t),e.setData({loading:!1})}})}})});var Ge=a(()=>{console.log(123)});var Oe=a((Hn,bs)=>{bs.exports=`@import "../../../common/lib/weui.wxss";
`});var Je=a(()=>{Ge();Oe();function vs(e,t){wx.showModal({title:e,content:t,showCancel:!1})}function y(e){wx.showToast({title:e,icon:"success",duration:1e3})}Page({onShareAppMessage(){return{title:"Web Socket",path:"packageAPI/pages/web-socket/web-socket"}},data:{socketStatus:"closed"},onLoad(){this.setData({hasLogin:!0})},onUnload(){this.closeSocket()},toggleSocket(e){let t=e.detail.value;if(t&&this.data.socketStatus==="closed")this.openSocket();else if(!t&&this.data.socketStatus==="connected"){let o=!0;this.closeSocket(o)}},openSocket(){wx.onSocketOpen(()=>{console.log("WebSocket \u5DF2\u8FDE\u63A5"),y("Socket\u5DF2\u8FDE\u63A5"),this.setData({socketStatus:"connected",waitingResponse:!1})}),wx.onSocketClose(()=>{console.log("WebSocket \u5DF2\u65AD\u5F00"),this.setData({socketStatus:"closed"})}),wx.onSocketError(e=>{vs("\u53D1\u751F\u9519\u8BEF",JSON.stringify(e)),console.error("socket error:",e),this.setData({loading:!1})}),wx.onSocketMessage(e=>{y("\u6536\u5230\u4FE1\u9053\u6D88\u606F"),console.log("socket message:",e),this.setData({loading:!1})}),wx.connectSocket({url:"wss://echo.websocket.org"})},closeSocket(){this.data.socketStatus==="connected"&&wx.closeSocket({success:()=>{y("Socket\u5DF2\u65AD\u5F00"),this.setData({socketStatus:"closed"})}})},sendMessage(){this.data.socketStatus==="connected"&&wx.sendSocketMessage({data:"Hello, Miniprogram!"})}})});var Qe=a(()=>{console.log(123)});var $e=a((Qn,ks)=>{ks.exports=`.image {
  width: 100%;
  height: 330px;
}
.page-body-info {
  display: flex;
  box-sizing: border-box;
  padding: 15px;
  height: 410px;
  border-top: 1px solid var(--weui-FG-3);
  border-bottom: 1px solid var(--weui-FG-3);
  align-items: center;
  justify-content: center;
}
`});var Ye=a(()=>{Qe();$e();Page({onShareAppMessage(){return{title:"\u4E0A\u4F20\u6587\u4EF6",path:"packageAPI/pages/upload-file/upload-file"}},chooseImage(){let e=this;wx.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success(t){console.log("chooseImage success, temp path is",t.tempFilePaths[0]);let o=t.tempFilePaths[0];wx.cloud.uploadFile({cloudPath:"example.png",filePath:o,config:{env:"release-b86096"},success:s=>{console.log(s.fileID),console.log("uploadImage success, res is:",s),wx.showToast({title:"\u4E0A\u4F20\u6210\u529F",icon:"success",duration:1e3}),e.setData({imageSrc:o,fileID:s.fileID})},fail({errMsg:s}){console.log("uploadImage fail, errMsg is",s)}})},fail:t=>{wx.showToast({icon:"none",title:"\u4E0A\u4F20\u5931\u8D25"}),console.log("uploadImage fail, errMsg is",t.errMsg)}})},onUnload(){this.data.fileID&&wx.cloud.deleteFile({fileList:[this.data.fileID]})}})});var Xe=a(()=>{console.log(123)});var Ze=a((Kn,ys)=>{ys.exports=`.page-body image {
  width: 300px;
  height: 300px;

  margin: 0 38px;
}`});var Ke=a(()=>{Xe();Ze();var Ps=f().demoImageFileId;Page({onShareAppMessage(){return{title:"\u4E0B\u8F7D\u6587\u4EF6",path:"packageAPI/pages/download-file/download-file"}},downloadImage(){let e=this;wx.cloud.downloadFile({fileID:Ps,success:t=>{console.log("downloadFile success, res is",t),e.setData({imageSrc:t.tempFilePath})},fail:console.error})}})});var et=a(()=>{console.log(123)});var tt=a((sl,Is)=>{Is.exports='@import "../../../common/lib/weui.wxss";'});var at=a(()=>{et();tt();var Ds=[["camera"],["album"],["camera","album"]],Ss=[["compressed"],["original"],["compressed","original"]];Page({onShareAppMessage(){return{title:"\u56FE\u7247",path:"packageAPI/pages/image/image"}},data:{imageList:[],sourceTypeIndex:2,sourceType:["\u62CD\u7167","\u76F8\u518C","\u62CD\u7167\u6216\u76F8\u518C"],sizeTypeIndex:2,sizeType:["\u538B\u7F29","\u539F\u56FE","\u538B\u7F29\u6216\u539F\u56FE"],countIndex:8,count:[1,2,3,4,5,6,7,8,9]},sourceTypeChange(e){this.setData({sourceTypeIndex:e.detail.value})},sizeTypeChange(e){this.setData({sizeTypeIndex:e.detail.value})},countChange(e){this.setData({countIndex:e.detail.value})},chooseImage(){let e=this;wx.chooseImage({sourceType:Ds[this.data.sourceTypeIndex],sizeType:Ss[this.data.sizeTypeIndex],count:this.data.count[this.data.countIndex],success(t){console.log(t),e.setData({imageList:t.tempFilePaths})}})},previewImage(e){let t=e.target.dataset.src;wx.previewImage({current:t,urls:this.data.imageList})}})});var ot=a(()=>{console.log(123)});var st=a((cl,As)=>{As.exports=`image {
  width: 75px;
  height: 75px;
}

.page-body-wrapper {
  justify-content: space-between;
  flex-grow: 1;
  margin-bottom: 150px;
}
.page-body-time {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.time-big {
  font-size: 30px;
  margin: 10px;
}
.time-small {
  font-size: 15px;
}

.page-body-buttons {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}
.page-body-button {
  width: 225px;
  text-align: center;
}
.button-stop-record {
  width: 15px;
  height: 15px;
  border: 10px solid #fff;
  background-color: #f55c23;
  border-radius: 115px;
  margin: 0 auto;
}
`});var d=a((pl,it)=>{function qs(e){if(typeof e!="number"||e<0)return e;let t=parseInt(e/3600,10);e%=3600;let o=parseInt(e/60,10);return e=parseInt(e%60,10),[t,o,e].map(function(i){return i=i.toString(),i[1]?i:"0"+i}).join(":")}function Ts(e,t){return typeof e=="string"&&typeof t=="string"&&(e=parseFloat(e),t=parseFloat(t)),e=e.toFixed(2),t=t.toFixed(2),{longitude:e.toString().split("."),latitude:t.toString().split(".")}}function P(e){return e<1?0:e<=2?1:P(e-1)+P(e-2)}function I(e,t=2){e=e.toString();let o=Math.max(t-e.length,0);return new Array(o).fill(0).join("")+e}function Ms(e,t=!1){let o=e.getFullYear(),s=e.getMonth()+1,i=e.getDate(),r=e.getHours(),c=e.getMinutes(),m=e.getSeconds(),jo=e.getMilliseconds(),M=[o,s,i].map(k=>I(k,2)).join("-")+" "+[r,c,m].map(k=>I(k,2)).join(":");return t&&(M+="."+I(jo,3)),M}function Ls(e,t){e=e.split("."),t=t.split(".");let o=Math.max(e.length,t.length);for(;e.length<o;)e.push("0");for(;t.length<o;)t.push("0");for(let s=0;s<o;s++){let i=parseInt(e[s],10),r=parseInt(t[s],10);if(i>r)return 1;if(i<r)return-1}return 0}it.exports={formatTime:qs,formatLocation:Ts,fib:P,formatDateTime:Ms,compareVersion:Ls}});var rt=a(()=>{ot();st();var u=d(),w,D,x=wx.getRecorderManager(),p=wx.createInnerAudioContext();Page({onShareAppMessage(){return{title:"\u5F55\u97F3",path:"packageAPI/pages/voice/voice"}},data:{recording:!1,playing:!1,hasRecord:!1,recordTime:0,playTime:0,formatedRecordTime:"00:00:00",formatedPlayTime:"00:00:00"},onHide(){this.data.playing?this.stopVoice():this.data.recording&&this.stopRecordUnexpectedly()},onLoad(){let e=this;x.onStart(()=>{console.log("recorderManage: onStart"),D=setInterval(()=>{let t=e.data.recordTime+=1;e.setData({formatedRecordTime:u.formatTime(e.data.recordTime),recordTime:t})},1e3)}),x.onStop(t=>{console.log("recorderManage: onStop"),e.setData({hasRecord:!0,recording:!1,tempFilePath:t.tempFilePath,formatedPlayTime:u.formatTime(e.data.playTime)}),clearInterval(D)}),p.onPlay(()=>{console.log("innerAudioContext: onPlay"),w=setInterval(()=>{let t=e.data.playTime+1;e.data.playTime===e.data.recordTime?e.stopVoice():(console.log("update playTime",t),e.setData({formatedPlayTime:u.formatTime(t),playTime:t}))},1e3)}),p.onStop(()=>{})},startRecord(){this.setData({recording:!0});let e={duration:1e4,sampleRate:44100,numberOfChannels:1,encodeBitRate:192e3,format:"aac",frameSize:50};x.start(e)},stopRecord(){x.stop()},stopRecordUnexpectedly(){let e=this;wx.stopRecord({success(){console.log("stop record success"),clearInterval(D),e.setData({recording:!1,hasRecord:!1,recordTime:0,formatedRecordTime:u.formatTime(0)})}})},playVoice(){p.src=this.data.tempFilePath,this.setData({playing:!0},()=>{p.play()})},pauseVoice(){clearInterval(w),p.pause(),this.setData({playing:!1})},stopVoice(){clearInterval(w),p.stop(),this.setData({playing:!1,formatedPlayTime:u.formatTime(0),playTime:0})},clear(){clearInterval(w),p.stop(),this.setData({playing:!1,hasRecord:!1,tempFilePath:"",formatedRecordTime:u.formatTime(0),recordTime:0,playTime:0})}})});var nt=a(()=>{console.log(123)});var lt=a((ml,Fs)=>{Fs.exports=`.image {
  width: 100%;
  height: 330px;
}
.page-body-info {
  display: flex;
  box-sizing: border-box;
  padding: 15px;
  height: 410px;
  border-top: 1px solid var(--weui-FG-3);
  border-bottom: 1px solid var(--weui-FG-3);
  align-items: center;
  justify-content: center;
}
`});var ct=a(()=>{nt();lt();Page({onShareAppMessage(){return{title:"\u6587\u4EF6",path:"packageAPI/pages/file/file"}},onLoad(){this.setData({savedFilePath:wx.getStorageSync("savedFilePath")})},data:{tempFilePath:"",savedFilePath:"",dialog:{hidden:!0}},chooseImage(){let e=this;wx.chooseImage({count:1,success(t){e.setData({tempFilePath:t.tempFilePaths[0]})}})},saveFile(){if(this.data.tempFilePath.length>0){let e=this;wx.saveFile({tempFilePath:this.data.tempFilePath,success(t){e.setData({savedFilePath:t.savedFilePath}),wx.setStorageSync("savedFilePath",t.savedFilePath),e.setData({dialog:{title:"\u4FDD\u5B58\u6210\u529F",content:"\u4E0B\u6B21\u8FDB\u5165\u5E94\u7528\u65F6\uFF0C\u6B64\u6587\u4EF6\u4ECD\u53EF\u7528",hidden:!1}})},fail(){e.setData({dialog:{title:"\u4FDD\u5B58\u5931\u8D25",content:"\u5E94\u8BE5\u662F\u6709 bug \u5427",hidden:!1}})}})}},clear(){wx.setStorageSync("savedFilePath",""),this.setData({tempFilePath:"",savedFilePath:""})},confirm(){this.setData({"dialog.hidden":!0})}})});var pt=a(()=>{console.log(123)});var gt=a((vl,Us)=>{Us.exports=`.page-body-xyz {
  display: flex;
  justify-content: space-between;
  width: 350px;
  margin-top: 45px;
  box-sizing: border-box;
  text-align: center;
}
.page-body-canvas {
  margin-top: 15px;
  width: 302px;
  height: 302px;
  position: relative;
}
.page-body-ball {
  position: absolute;
  top: 0;
  left: 0;
  width: 302px;
  height: 302px;
}
.page-body-title {
  margin-bottom: 0;
  font-size: 16px;
  width: 225px;
}
.page-body-controls {
  margin-top: 15px;
}
.page-body-controls button {
  margin-left: 10px;
  float: left;
}
`});var dt=a(()=>{pt();gt();Page({onShareAppMessage(){return{title:"\u76D1\u542C\u91CD\u529B\u611F\u5E94\u6570\u636E",path:"packageAPI/pages/on-accelerometer-change/on-accelerometer-change"}},data:{x:0,y:0,z:0,enabled:!0},onReady(){this.drawBigBall();let e=this;this.position={x:151,y:151,vx:0,vy:0,ax:0,ay:0},wx.onAccelerometerChange(function(t){e.setData({x:t.x.toFixed(2),y:t.y.toFixed(2),z:t.z.toFixed(2)}),e.position.ax=Math.sin(t.x*Math.PI/2),e.position.ay=-Math.sin(t.y*Math.PI/2)}),this.interval=setInterval(function(){e.drawSmallBall()},17)},drawBigBall(){let e=wx.createContext();e.beginPath(0),e.arc(151,151,140,0,Math.PI*2),e.setFillStyle("#ffffff"),e.setStrokeStyle("#aaaaaa"),e.fill(),wx.drawCanvas({canvasId:"big-ball",actions:e.getActions()})},drawSmallBall(){let e=this.position,t="rgba(1,1,1,0)";e.x+=e.vx,e.y+=e.vy,e.vx+=e.ax,e.vy+=e.ay,Math.sqrt(Math.pow(Math.abs(e.x)-151,2)+Math.pow(Math.abs(e.y)-151,2))>=115&&(e.x>151&&e.vx>0&&(e.vx=0),e.x<151&&e.vx<0&&(e.vx=0),e.y>151&&e.vy>0&&(e.vy=0),e.y<151&&e.vy<0&&(e.vy=0),t="#ff0000");let o=wx.createContext();o.beginPath(0),o.arc(e.x,e.y,15,0,Math.PI*2),o.setFillStyle("#1aad19"),o.setStrokeStyle(t),o.fill(),wx.drawCanvas({canvasId:"small-ball",actions:o.getActions()})},startAccelerometer(){if(this.data.enabled)return;let e=this;wx.startAccelerometer({success(){e.setData({enabled:!0})}})},stopAccelerometer(){if(!this.data.enabled)return;let e=this;wx.stopAccelerometer({success(){e.setData({enabled:!1})}})},onUnload(){clearInterval(this.interval)}})});var ut=a(()=>{console.log(123)});var ht=a((Dl,Cs)=>{Cs.exports=`.canvas-element-wrapper {
  display: block;
  margin-bottom: 50px;
}
.canvas-element {
  width: 100%;
  height: 250px;
  background-color: #ffffff;
}
.canvas-buttons {
  padding: 15px 25px 5px;
  width: 100%;
  height: 330px;
  box-sizing: border-box;
}
.canvas-button {
  float: left;
  line-height: 2;
  width: 150px;
  margin: 8px 11px;
}
`});var ft=a((Sl,mt)=>{var n={};n.rotate=function(e){e.beginPath(),e.rotate(10*Math.PI/180),e.rect(225,75,20,10),e.fill()};n.scale=function(e){e.beginPath(),e.rect(25,25,50,50),e.stroke(),e.scale(2,2),e.beginPath(),e.rect(25,25,50,50),e.stroke()};n.reset=function(e){e.beginPath(),e.setFillStyle("#000000"),e.setStrokeStyle("#000000"),e.setFontSize(10),e.setShadow(0,0,0,"rgba(0, 0, 0, 0)"),e.setLineCap("butt"),e.setLineJoin("miter"),e.setLineWidth(1),e.setMiterLimit(10)};n.translate=function(e){e.beginPath(),e.rect(10,10,100,50),e.fill(),e.translate(70,70),e.beginPath(),e.fill()};n.save=function(e){e.beginPath(),e.setStrokeStyle("#00ff00"),e.save(),e.scale(2,2),e.setStrokeStyle("#ff0000"),e.rect(0,0,100,100),e.stroke(),e.restore(),e.rect(0,0,50,50),e.stroke()};n.restore=function(e){[3,2,1].forEach(function(t){e.beginPath(),e.save(),e.scale(t,t),e.rect(10,10,100,100),e.stroke(),e.restore()})};n.drawImage=function(e){e.drawImage("/image/wechat.png",0,0)};n.fillText=function(e){e.setStrokeStyle("#ff0000"),e.beginPath(),e.moveTo(0,10),e.lineTo(300,10),e.stroke(),e.setFontSize(10),e.fillText("Hello World",0,30),e.setFontSize(20),e.fillText("Hello World",100,30),e.beginPath(),e.moveTo(0,30),e.lineTo(300,30),e.stroke()};n.fill=function(e){e.beginPath(),e.rect(20,20,150,100),e.setStrokeStyle("#00ff00"),e.fill()};n.stroke=function(e){e.beginPath(),e.moveTo(20,20),e.lineTo(20,100),e.lineTo(70,100),e.setStrokeStyle("#00ff00"),e.stroke()};n.clearRect=function(e){e.setFillStyle("#ff0000"),e.beginPath(),e.rect(0,0,300,150),e.fill(),e.clearRect(20,20,100,50)};n.beginPath=function(e){e.beginPath(),e.setLineWidth(5),e.setStrokeStyle("#ff0000"),e.moveTo(0,75),e.lineTo(250,75),e.stroke(),e.beginPath(),e.setStrokeStyle("#0000ff"),e.moveTo(50,0),e.lineTo(150,130),e.stroke()};n.closePath=function(e){e.beginPath(),e.moveTo(20,20),e.lineTo(20,100),e.lineTo(70,100),e.closePath(),e.stroke()};n.moveTo=function(e){e.beginPath(),e.moveTo(0,0),e.lineTo(300,150),e.stroke()};n.lineTo=function(e){e.beginPath(),e.moveTo(20,20),e.lineTo(20,100),e.lineTo(70,100),e.stroke()};n.rect=function(e){e.beginPath(),e.rect(20,20,150,100),e.stroke()};n.arc=function(e){e.beginPath(),e.arc(75,75,50,0,Math.PI*2,!0),e.moveTo(110,75),e.arc(75,75,35,0,Math.PI,!1),e.moveTo(65,65),e.arc(60,65,5,0,Math.PI*2,!0),e.moveTo(95,65),e.arc(90,65,5,0,Math.PI*2,!0),e.stroke()};n.quadraticCurveTo=function(e){e.beginPath(),e.moveTo(20,20),e.quadraticCurveTo(20,100,200,20),e.stroke()};n.bezierCurveTo=function(e){e.beginPath(),e.moveTo(20,20),e.bezierCurveTo(20,100,200,100,200,20),e.stroke()};n.setFillStyle=function(e){["#fef957","rgb(242,159,63)","rgb(242,117,63)","#e87e51"].forEach(function(t,o){e.setFillStyle(t),e.beginPath(),e.rect(0+75*o,0,50,50),e.fill()})};n.setStrokeStyle=function(e){["#fef957","rgb(242,159,63)","rgb(242,117,63)","#e87e51"].forEach(function(t,o){e.setStrokeStyle(t),e.beginPath(),e.rect(0+75*o,0,50,50),e.stroke()})};n.setGlobalAlpha=function(e){e.setFillStyle("#000000"),[1,.5,.1].forEach(function(t,o){e.setGlobalAlpha(t),e.beginPath(),e.rect(0+75*o,0,50,50),e.fill()})};n.setShadow=function(e){e.beginPath(),e.setShadow(10,10,10,"rgba(0, 0, 0, 199)"),e.rect(10,10,100,100),e.fill()};n.setFontSize=function(e){[10,20,30,40].forEach(function(t,o){e.setFontSize(t),e.fillText("Hello, world",20,20+40*o)})};n.setLineCap=function(e){e.setLineWidth(10),["butt","round","square"].forEach(function(t,o){e.beginPath(),e.setLineCap(t),e.moveTo(20,20+20*o),e.lineTo(100,20+20*o),e.stroke()})};n.setLineJoin=function(e){e.setLineWidth(10),["bevel","round","miter"].forEach(function(t,o){e.beginPath(),e.setLineJoin(t),e.moveTo(20+80*o,20),e.lineTo(100+80*o,50),e.lineTo(20+80*o,100),e.stroke()})};n.setLineWidth=function(e){[2,4,6,8,10].forEach(function(t,o){e.beginPath(),e.setLineWidth(t),e.moveTo(20,20+20*o),e.lineTo(100,20+20*o),e.stroke()})};n.setMiterLimit=function(e){e.setLineWidth(4),[2,4,6,8,10].forEach(function(t,o){e.beginPath(),e.setMiterLimit(t),e.moveTo(20+80*o,20),e.lineTo(100+80*o,50),e.lineTo(20+80*o,100),e.stroke()})};mt.exports=n});var xt=a(()=>{ut();ht();var wt=ft();Page({onShareAppMessage(){return{title:"\u521B\u5EFA\u753B\u5E03",path:"packageAPI/pages/canvas/canvas"}},onLoad(){this.context=wx.createContext();let e=Object.keys(wt);this.setData({methods:e});let t=this;e.forEach(function(o){t[o]=function(){wt[o](t.context);let s=t.context.getActions();wx.drawCanvas({canvasId:"canvas",actions:s})}})},toTempFilePath(){wx.canvasToTempFilePath({canvasId:"canvas",success(e){console.log(e)},fail(e){console.log(e)}})}})});var bt=a(()=>{console.log(123)});var vt=a((Ll,Bs)=>{Bs.exports=`image {
  width: 75px;
  height: 75px;
}

.page-body-wrapper {
  margin-top: 0;
}
.page-body-info {
  padding-bottom: 25px;
}
.time-big {
  font-size: 30px;
  margin: 10px;
}
.slider {
  width: 90%;
}
.play-time {
  font-size: 14px;
  width: 350px;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.page-body-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}
.page-body-button {
  width: 225px;
  text-align: center;
}
`});var kt=a(()=>{bt();vt();var Fl=getApp(),S=d(),l=wx.getBackgroundAudioManager(),g;Page({onShareAppMessage(){return{title:"\u80CC\u666F\u97F3\u4E50",path:"packageAPI/pages/background-audio/background-audio"}},onShow(){!l.paused&&l.paused!==void 0&&(this._enableInterval(),this.setData({playing:!0}))},onLoad(){let e=this;l.onPlay(()=>{this._enableInterval(),this.setData({pause:!1})}),l.onPause(()=>{clearInterval(g),e.setData({playing:!1,pause:!0})}),l.onEnded(()=>{clearInterval(g),e.setData({playing:!1,playTime:0,formatedPlayTime:S.formatTime(0)})}),l.onStop(()=>{clearInterval(g),e.setData({playing:!1,playTime:0,formatedPlayTime:S.formatTime(0)})})},data:{playing:!1,pause:!1,playTime:0,formatedPlayTime:"00:00:00"},play(){l.title="\u6B64\u65F6\u6B64\u523B",l.epname="\u6B64\u65F6\u6B64\u523B",l.singer="\u8BB8\u5DCD",l.coverImgUrl="http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000";let e=this;e.data.pause?(l.play(),this.setData({playing:!0})):e.setData({playing:!0},()=>{l.src="https://dldir1.qq.com/music/release/upload/t_mm_file_publish/2339610.m4a"})},seek(e){l.seek(e.detail.value)},pause(){clearInterval(g),l.pause()},stop(){clearInterval(g),l.stop()},_enableInterval(){let e=this;function t(){console.log(l.currentTime),e.setData({playTime:l.currentTime+1,formatedPlayTime:S.formatTime(l.currentTime+1)})}g=setInterval(t,1e3)},onUnload(){clearInterval(g)}})});var yt=a(()=>{console.log(123)});var Pt=a((El,zs)=>{zs.exports=`@import "../../../common/lib/weui.wxss";

.page-body-info {
  display: flex;
  margin-top: 20px;
  padding: 0;
  height: 330px;
  border-top: 1px solid var(--weui-FG-3);
  border-bottom: 1px solid var(--weui-FG-3);
  align-items: center;
  justify-content: center;
}`});var Dt=a(()=>{yt();Pt();var Es=[["camera"],["album"],["camera","album"]],_s=[["front"],["back"],["front","back"]],It=Array.apply(null,{length:60}).map(function(e,t){return t+1});Page({onShareAppMessage(){return{title:"\u62CD\u6444/\u9009\u62E9\u89C6\u9891",path:"packageAPI/pages/video/video"}},data:{sourceTypeIndex:2,sourceType:["\u62CD\u6444","\u76F8\u518C","\u62CD\u6444\u6216\u76F8\u518C"],cameraIndex:2,camera:["\u524D\u7F6E","\u540E\u7F6E","\u524D\u7F6E\u6216\u540E\u7F6E"],durationIndex:59,duration:It.map(function(e){return e+"\u79D2"}),src:""},sourceTypeChange(e){this.setData({sourceTypeIndex:e.detail.value})},cameraChange(e){this.setData({cameraIndex:e.detail.value})},durationChange(e){this.setData({durationIndex:e.detail.value})},chooseVideo(){let e=this;wx.chooseVideo({sourceType:Es[this.data.sourceTypeIndex],camera:_s[this.data.cameraIndex],maxDuration:It[this.data.durationIndex],success(t){e.setData({src:t.tempFilePath})}})}})});var St=a(()=>{console.log(123)});var At=a((jl,Rs)=>{Rs.exports=`.page-body-info {
  height: 225px;
}
.page-body-text-small {
  font-size: 12px;
  color: var(--weui-FG-0);
  margin-bottom: 50px;
}
.page-body-text-location {
  display: flex;
  font-size: 25px;
}
.page-body-text-location text {
  margin: 5px;
}
`});var qt=a(()=>{St();At();var Vs=d(),Ns=Vs.formatLocation;Page({onShareAppMessage(){return{title:"\u83B7\u53D6\u4F4D\u7F6E",path:"packageAPI/pages/get-location/get-location"}},data:{hasLocation:!1},getLocation(){let e=this;wx.getLocation({success(t){console.log(t),e.setData({hasLocation:!0,location:Ns(t.longitude,t.latitude)})}})},clear(){this.setData({hasLocation:!1})}})});var Tt=a(()=>{console.log(123)});var Mt=a((Jl,js)=>{js.exports='@import "../../../common/lib/weui.wxss";'});var Lt=a(()=>{Tt();Mt();Page({onShareAppMessage(){return{title:"\u67E5\u770B\u4F4D\u7F6E",path:"packageAPI/pages/open-location/open-location"}},openLocation(e){console.log(e);let t=e.detail.value;console.log(t),wx.openLocation({longitude:Number(t.longitude),latitude:Number(t.latitude),name:t.name,address:t.address})}})});var Ft=a(()=>{console.log(123)});var Ut=a((Zl,Hs)=>{Hs.exports=`.page-body-info{
  padding-bottom: 0;
  height: 420px;
}`});var Ct=a(()=>{Ft();Ut();var Ws=d(),Gs=Ws.formatLocation;Page({onShareAppMessage(){return{title:"\u4F7F\u7528\u539F\u751F\u5730\u56FE\u9009\u62E9\u4F4D\u7F6E",path:"packageAPI/pages/choose-location/choose-location"}},data:{hasLocation:!1},chooseLocation(){let e=this;wx.chooseLocation({success(t){console.log(t),e.setData({hasLocation:!0,location:Gs(t.longitude,t.latitude),locationAddress:t.address})}})},clear(){this.setData({hasLocation:!1})}})});var Bt=a(()=>{console.log(123)});var zt=a((oc,Os)=>{Os.exports='@import "../../../common/lib/weui.wxss";'});var Et=a(()=>{Bt();zt();Page({onShareAppMessage(){return{title:"\u6570\u636E\u5B58\u50A8",path:"packageAPI/pages/storage/storage"}},data:{key:"",data:"",dialog:{title:"",content:"",hidden:!0}},keyChange(e){this.data.key=e.detail.value},dataChange(e){this.data.data=e.detail.value},getStorage(){let{key:e,data:t}=this.data,o;e.length===0?(this.setData({key:e,data:t}),wx.showModal({title:"\u8BFB\u53D6\u6570\u636E\u5931\u8D25",content:"key \u4E0D\u80FD\u4E3A\u7A7A"})):(o=wx.getStorageSync(e),console.log(o),o===""?(this.setData({key:e,data:o}),wx.showModal({title:"\u8BFB\u53D6\u6570\u636E\u5931\u8D25",content:"\u627E\u4E0D\u5230 key \u5BF9\u5E94\u7684\u6570\u636E"})):(this.setData({key:e,data:o}),wx.showModal({title:"\u8BFB\u53D6\u6570\u636E\u6210\u529F",content:o})))},setStorage(){let{key:e,data:t}=this.data;e.length===0?(this.setData({key:e,data:t}),wx.showModal({title:"\u4FDD\u5B58\u6570\u636E\u5931\u8D25",content:"key \u4E0D\u80FD\u4E3A\u7A7A"})):(wx.setStorageSync(e,t),this.setData({key:e,data:t}),wx.showModal({title:"\u5B58\u50A8\u6570\u636E\u6210\u529F"}))},clearStorage(){wx.clearStorageSync(),this.setData({key:"",data:""}),wx.showModal({title:"\u6E05\u9664\u6570\u636E\u6210\u529F"})}})});var _t=a(()=>{console.log(123)});var Rt=a((lc,Js)=>{Js.exports=`movable-view {
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
  background-color: #ccc;
  overflow: hidden;
}

.page-section {
  display: flex;
  justify-content: center;
}

.page-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.metric {
  width: 200px;
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items:center;
}

.b {
  display: inline-block;
  width: 75px;
  font-weight: bold;
}

.span {
  display: inline-block;
  width: 50px;
}
`});var Vt=a(()=>{_t();Rt();Page({onShareAppMessage(){return{title:"\u83B7\u53D6WXML\u8282\u70B9\u4FE1\u606F",path:"packageAPI/pages/get-wxml-node-info/get-wxml-node-info"}},data:{metrics:[]},onReady(){this.getNodeInfo()},getNodeInfo(){let e=wx.createSelectorQuery();e.select(".target").boundingClientRect(),e.exec(o=>{let s=o[0];if(s){let i=[];for(let r in s)if(r!=="id"&&r!=="dataset"){let c=s[r];i.push({key:r,val:c})}this.setData({metrics:i})}})}})});var Nt=a(()=>{console.log(123)});var jt=a((uc,Qs)=>{Qs.exports=`.page-body-info {
  align-items: center;
  padding: 100px 0;
}

.font-loaded {
  font-family: "Bitstream Vera Serif Bold";
}

.display-area {
  font-size: 20px;
}
`});var Ht=a(()=>{Nt();jt();Page({onShareAppMessage(){return{title:"\u52A8\u6001\u52A0\u8F7D\u5B57\u4F53",path:"packageAPI/pages/load-font-face/load-font-face"}},data:{fontFamily:"Bitstream Vera Serif Bold",loaded:!1},onLoad(){this.setData({loaded:!1})},loadFontFace(){let e=this;wx.loadFontFace({family:this.data.fontFamily,source:'url("https://sungd.github.io/Pacifico.ttf")',success(t){console.log(t.status),e.setData({loaded:!0})},fail(t){console.log(t.status)},complete(t){console.log(t.status)}})},clear(){this.setData({loaded:!1})}})});var Wt=a(()=>{console.log(123)});var Gt=a((xc,$s)=>{$s.exports=`@import "../../../common/lib/weui.wxss";

.page-body-info {
  padding: 5px;
  height: 100px;
  overflow: scroll-y;
  text-align: left;
}
`});var Ot=a(()=>{Wt();Gt();Page({onShareAppMessage(){return{title:"\u526A\u5207\u677F",path:"packageAPI/pages/clipboard-data/clipboard-data"}},data:{value:"edit and copy me",pasted:""},valueChanged(e){this.setData({value:e.detail.value})},copy(){wx.setClipboardData({data:this.data.value,success(){wx.showToast({title:"\u590D\u5236\u6210\u529F",icon:"success",duration:1e3})}})},paste(){let e=this;wx.getClipboardData({success(t){e.setData({pasted:t.data}),wx.showToast({title:"\u7C98\u8D34\u6210\u529F",icon:"success",duration:1e3})}})}})});var Jt=a(()=>{console.log(123)});var Qt=a((Pc,Ys)=>{Ys.exports=`
.devices_summary {
  padding: 5px;
  font-size: 15px;
}
.device_list {
  height: 150px;
  border-radius: 3px;
  flex: 1;
}
.device_item {
  border-bottom: 1px solid var(--weui-FG-3);
  padding: 5px;
  color: var(--weui-FG-HALF);
}
.device_item_hover {
  background-color: rgba(0, 0, 0, .1);
}
.connected_info {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--weui-BG-4);
  padding: 5px;
  padding-bottom: 10px;
  margin-bottom: env(safe-area-inset-bottom);
  font-size: 14px;
  min-height: 50px;
  box-shadow: 0px 0px 2px 0px;
}
.connected_info .operation {
  position: absolute;
  display: inline-block;
  right: 15px;
}
.page-body-info {
  padding: 15px;
  box-sizing: border-box;
}
`});var Xt=a(()=>{Jt();Qt();function $t(e,t,o){for(let s=0;s<e.length;s++)if(e[s][t]===o)return s;return-1}function Yt(e){return Array.prototype.map.call(new Uint8Array(e),function(o){return("00"+o.toString(16)).slice(-2)}).join("")}Page({onShareAppMessage(){return{title:"\u84DD\u7259",path:"packageAPI/pages/bluetooth/bluetooth"}},data:{devices:[],connected:!1,chs:[]},onUnload(){this.closeBluetoothAdapter()},openBluetoothAdapter(){wx.openBluetoothAdapter({success:e=>{console.log("openBluetoothAdapter success",e),this.startBluetoothDevicesDiscovery()},fail:e=>{e.errCode===10001&&(wx.showModal({title:"\u9519\u8BEF",content:"\u672A\u627E\u5230\u84DD\u7259\u8BBE\u5907, \u8BF7\u6253\u5F00\u84DD\u7259\u540E\u91CD\u8BD5\u3002",showCancel:!1}),wx.onBluetoothAdapterStateChange(function(t){t&&t.available&&this.startBluetoothDevicesDiscovery()}))}})},getBluetoothAdapterState(){wx.getBluetoothAdapterState({success:e=>{console.log("getBluetoothAdapterState",e),e.discovering?this.onBluetoothDeviceFound():e.available&&this.startBluetoothDevicesDiscovery()}})},startBluetoothDevicesDiscovery(){this._discoveryStarted||(this._discoveryStarted=!0,wx.startBluetoothDevicesDiscovery({allowDuplicatesKey:!0,success:e=>{console.log("startBluetoothDevicesDiscovery success",e),this.onBluetoothDeviceFound()}}))},stopBluetoothDevicesDiscovery(){wx.stopBluetoothDevicesDiscovery({complete:()=>{this._discoveryStarted=!1}})},onBluetoothDeviceFound(){wx.onBluetoothDeviceFound(e=>{e.devices.forEach(t=>{if(!t.name&&!t.localName)return;let o=this.data.devices,s=$t(o,"deviceId",t.deviceId),i={};s===-1?i[`devices[${o.length}]`]=t:i[`devices[${s}]`]=t,this.setData(i)})})},createBLEConnection(e){let t=e.currentTarget.dataset,o=t.deviceId,s=t.name;wx.showLoading(),wx.createBLEConnection({deviceId:o,success:()=>{this.setData({connected:!0,name:s,deviceId:o}),this.getBLEDeviceServices(o)},complete(){wx.hideLoading()}}),this.stopBluetoothDevicesDiscovery()},closeBLEConnection(){wx.closeBLEConnection({deviceId:this.data.deviceId}),this.setData({connected:!1,chs:[],canWrite:!1})},changeMode(){wx.navigateTo({url:"./slave/slave"})},getBLEDeviceServices(e){wx.getBLEDeviceServices({deviceId:e,success:t=>{for(let o=0;o<t.services.length;o++)if(t.services[o].isPrimary){this.getBLEDeviceCharacteristics(e,t.services[o].uuid);return}}})},getBLEDeviceCharacteristics(e,t){wx.getBLEDeviceCharacteristics({deviceId:e,serviceId:t,success:o=>{console.log("getBLEDeviceCharacteristics success",o.characteristics);for(let s=0;s<o.characteristics.length;s++){let i=o.characteristics[s];i.properties.read&&wx.readBLECharacteristicValue({deviceId:e,serviceId:t,characteristicId:i.uuid}),i.properties.write&&(this.setData({canWrite:!0}),this._deviceId=e,this._serviceId=t,this._characteristicId=i.uuid,console.log("write"),this.writeBLECharacteristicValue()),(i.properties.notify||i.properties.indicate)&&wx.notifyBLECharacteristicValueChange({deviceId:e,serviceId:t,characteristicId:i.uuid,state:!0})}},fail(o){console.error("getBLEDeviceCharacteristics",o)}}),wx.onBLECharacteristicValueChange(o=>{let s=$t(this.data.chs,"uuid",o.characteristicId),i={};s===-1?i[`chs[${this.data.chs.length}]`]={uuid:o.characteristicId,value:Yt(o.value)}:i[`chs[${s}]`]={uuid:o.characteristicId,value:Yt(o.value)},wx.showToast({title:"\u6536\u5230\u4ECE\u673A\u6570\u636E"}),this.setData(i)})},writeBLECharacteristicValue(){let e=new ArrayBuffer(1);new DataView(e).setUint8(0,Math.random()*19|0),wx.writeBLECharacteristicValue({deviceId:this._deviceId,serviceId:this._serviceId,characteristicId:this._characteristicId,value:e,success(){console.log("writeBLECharacteristicValue: \u6210\u529F")},fail(){console.log("writeBLECharacteristicValue: \u5931\u8D25")},complete(){console.log("writeBLECharacteristicValue: \u7ED3\u675F")}})},closeBluetoothAdapter(){wx.closeBluetoothAdapter(),this._discoveryStarted=!1}})});var Zt=a(()=>{console.log(123)});var Kt=a((qc,Xs)=>{Xs.exports=`.page-body-text-screen-brightness {
  font-size: 40px;
  font-family: -apple-system-font, Helvetica Neue,Helvetica,sans-serif;
}

.page-section-gap {
  padding: 15px;
}
`});var ea=a(()=>{Zt();Kt();Page({onShareAppMessage(){return{title:"\u5C4F\u5E55\u4EAE\u5EA6",path:"packageAPI/pages/screen-brightness/screen-brightness"}},data:{screenBrightness:0},onLoad(){this._updateScreenBrightness()},changeBrightness(e){let t=Number.parseFloat(e.detail.value.toFixed(1));this.setData({screenBrightness:Number.parseFloat(e.detail.value.toFixed(1))}),wx.setScreenBrightness({value:t})},_updateScreenBrightness(){wx.getScreenBrightness({success:e=>{console.log(e),this.setData({screenBrightness:Number.parseFloat(e.value.toFixed(1))})},fail(e){console.error(e)}})}})});var ta=a(()=>{console.log(123)});var aa=a((Uc,Zs)=>{Zs.exports=""});var oa=a(()=>{ta();aa();Page({onShareAppMessage(){return{title:"\u632F\u52A8",path:"packageAPI/pages/vibrate/vibrate"}},vibrateShort(){wx.vibrateShort({success(e){console.log(e)},fail(e){console.error(e)},complete(){console.log("completed")}})},vibrateLong(){wx.vibrateLong({success(e){console.log(e)},fail(e){console.error(e)},complete(){console.log("completed")}})}})});var sa=a(()=>{console.log(123)});var ia=a((_c,Ks)=>{Ks.exports=`@import "../../../common/lib/weui.wxss";

input {
  width: 100%;
}
`});var ra=a(()=>{sa();ia();Page({onShareAppMessage(){return{title:"\u65B0\u589E\u8054\u7CFB\u4EBA",path:"packageAPI/pages/add-contact/add-contact"}},submit(e){let t=e.detail.value;wx.addPhoneContact({...t,success(){wx.showToast({title:"\u8054\u7CFB\u4EBA\u521B\u5EFA\u6210\u529F"})},fail(){wx.showToast({title:"\u8054\u7CFB\u4EBA\u521B\u5EFA\u5931\u8D25"})}})}})});var na=a(()=>{console.log(123)});var la=a((Hc,ei)=>{ei.exports=`.page-body-info {
  padding: 15px 30px;
  width: auto;
}

.device-list {
  height: 150px;
  text-align: center;
}

.item {
  width: 100%;
  margin-bottom: 10px;
}

.list {
  width: 100%;
  text-align: left;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  font-size: 15px;
}

.list text {
  display: inline-block;
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.strength-ready { color: #26a69a; }
.strength-no { color: #37474f; }
.wifi-icon{
  width: 20px;
  height:20px;
  display: inline-block;
  position: relative;
  overflow: hidden;
  margin: 0 10px;
  float: right;
}
.wifi-icon span{
  display: block;
  position: absolute;
  border-radius: 50%;
}
.wifi-icon .wifi-1{
  width: 4px;
  height: 4px;
  left: 8px;
  bottom: 3px;
  background: currentcolor;
}
.wifi-icon .wifi-2,.wifi-icon .wifi-3,.wifi-icon .wifi-4{
  border: 2px solid;
  border-color: currentcolor transparent transparent;
 }
.wifi-icon .wifi-2{
  width: 12px;
  height: 12px;
  left: 2px;
  bottom: -4px;
}
.wifi-icon .wifi-3{
  width: 20px;
  height: 20px;
  left: -2px;
  bottom: -8px;
  }
.wifi-icon .wifi-4{
  width: 28px;
  height: 28px;
  left: -6px;
  bottom: -12px;
}
.wifi-icon span:after{
  content: "";
  display: block;
  position: absolute;
}
.wifi-icon .lock{
  width: 6px;
  height: 5px;
  background: currentcolor;
  display: block;
  right: 1px;
  bottom: 2px;
  border-radius: 0;
}
.wifi-icon .lock:after{
  width: 4px;
  height: 3px;
  border: 1px solid;
  border-radius: 100px 100px 0 0;
  border-bottom: none;
  left: 0px;
  bottom: 100%;
}
.off {
  border-color: #b0bec5 transparent transparent !important;
}
`});var ca=a(()=>{na();la();Page({onShareAppMessage(){return{title:"Wi-Fi",path:"packageAPI/pages/wifi/wifi"}},data:{wifiList:[]},onUnload(){this.stopSearch()},startSearch(){let e=()=>{wx.getWifiList({success:()=>{wx.onGetWifiList(o=>{let s=o.wifiList.sort((i,r)=>r.signalStrength-i.signalStrength).map(i=>{let r=Math.ceil(i.signalStrength*4);return Object.assign(i,{strength:r})});this.setData({wifiList:s})})},fail(o){console.error(o)}})},t=()=>{wx.startWifi({success:e,fail(o){console.error(o)}})};wx.getSystemInfo({success(o){if(o.platform==="ios"){wx.showModal({title:"\u63D0\u793A",content:"\u7531\u4E8E\u7CFB\u7EDF\u9650\u5236\uFF0CiOS\u7528\u6237\u8BF7\u624B\u52A8\u8FDB\u5165\u7CFB\u7EDFWiFi\u9875\u9762\uFF0C\u7136\u540E\u8FD4\u56DE\u5C0F\u7A0B\u5E8F\u3002",showCancel:!1,success(){t()}});return}t()}})},stopSearch(){wx.stopWifi({success(e){console.log(e)},fail(e){console.error(e)}})}})});var pa=a(()=>{console.log(123)});var ga=a((Qc,ti)=>{ti.exports=`.rect {
  width: 50px;
  height: 50px;
  background-color: #ccc;
}

.filling-area {
  height: 1250px;
}
`});var da=a(()=>{pa();ga();Page({onShareAppMessage(){return{title:"\u9875\u9762\u6EDA\u52A8",path:"packageAPI/pages/page-scroll/page-scroll"}},scrollToTop(){wx.pageScrollTo({scrollTop:0,duration:300})},scrollToBottom(){wx.pageScrollTo({scrollTop:3e3,duration:300})}})});var ua=a(()=>{console.log(123)});var ha=a((Kc,ai)=>{ai.exports=`.scroll-view {
  height: 200px;
  background: var(--weui-BG-2);
}

.scroll-area {
  height: 1150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: .5s;
}

.notice {
  margin-top: 75px;
}

.ball {
  width: 100px;
  height: 100px;
  background: #1AAD19;
  border-radius: 50%;
}

.filling {
  height: 200px;
}

.message {
  width: 100%;
  display: flex;
  justify-content: center;
}

.message text {
  font-size: 20px;
  font-family: -apple-system-font, Helvetica Neue,Helvetica,sans-serif;
}
`});var ma=a(()=>{ua();ha();Page({onShareAppMessage(){return{title:"WXML\u8282\u70B9\u5E03\u5C40\u76F8\u4EA4\u72B6\u6001",path:"packageAPI/pages/intersection-observer/intersection-observer"}},data:{appear:!1},onLoad(){this._observer=wx.createIntersectionObserver(this),this._observer.relativeTo(".scroll-view").observe(".ball",e=>{console.log(e),this.setData({appear:e.intersectionRatio>0})})},onUnload(){this._observer&&this._observer.disconnect()}})});var fa=a(()=>{console.log(123)});var wa=a((sp,oi)=>{oi.exports=`.page-body-text {
  font-size: 20px;
  font-family: -apple-system-font, Helvetica Neue,Helvetica,sans-serif;
}
`});var xa=a(()=>{fa();wa();Page({onShareAppMessage(){return{title:"\u7528\u6237\u622A\u5C4F\u4E8B\u4EF6",path:"packageAPI/pages/capture-screen/capture-screen"}},data:{captured:!1},onLoad(){wx.onUserCaptureScreen(()=>{this.setData({captured:!0})})}})});var ba=a(()=>{console.log(123)});var va=a((cp,si)=>{si.exports=`@import "../../../common/lib/weui.wxss";

.canvas {
  width: 305px;
  height: 305px;
  background-color: #fff;
}

.page-section-title {
  margin-top: 15px;
}`});var ka=a(()=>{ba();va();var{fib:ii}=d();Page({onShareAppMessage(){return{title:"\u591A\u7EBF\u7A0BWorker",path:"packageAPI/pages/worker/worker"}},data:{res:"",input:35},onLoad(){this._worker=wx.createWorker("workers/fib/index.js")},onUnload(){clearInterval(this.interval),this._worker&&this._worker.terminate()},bindInput(e){let t=Number(e.detail.value);if(t>40)return{value:40};if(Number.isNaN(t))return{value:33};this.setData({input:t})},reset(){this.setData({res:""})},compute(){this.reset(),wx.showLoading({title:"\u8BA1\u7B97\u4E2D..."});let e=+Date.now(),t=ii(this.data.input),o=+Date.now();wx.hideLoading(),this.setData({res:t,time:o-e})},multiThreadCompute(){this.reset(),wx.showLoading({title:"\u8BA1\u7B97\u4E2D..."});let e=+Date.now();this._worker.postMessage({type:"execFunc_fib",params:[this.data.input]}),this._worker.onMessage(t=>{if(t.type==="execFunc_fib"){wx.hideLoading();let o=+Date.now();this.setData({res:t.result,time:o-e})}})},onReady(){this.position={x:150,y:150,vx:2,vy:2},this.drawBall(),this.interval=setInterval(this.drawBall,17)},drawBall(){let e=this.position;e.x+=e.vx,e.y+=e.vy,e.x>=300&&(e.vx=-2),e.x<=7&&(e.vx=2),e.y>=300&&(e.vy=-2),e.y<=7&&(e.vy=2);let t=wx.createContext();function o(s,i){t.beginPath(0),t.arc(s,i,5,0,Math.PI*2),t.setFillStyle("#1aad19"),t.setStrokeStyle("rgba(1,1,1,0)"),t.fill(),t.stroke()}o(e.x,150),o(150,e.y),o(300-e.x,150),o(150,300-e.y),o(e.x,e.y),o(300-e.x,300-e.y),o(e.x,300-e.y),o(300-e.x,e.y),wx.drawCanvas({canvasId:"canvas",actions:t.getActions()})}})});var ya=a(()=>{console.log(123)});var Pa=a((hp,ri)=>{ri.exports=`@import "../../../common/lib/weui.wxss";

.page-body-info {
  margin-top: 25px;
  padding: 15px 30px;
  width: auto;
}

.devices_summary {
  padding: 5px;
  font-size: 15px;
}
.device_list {
  height: 150px;
  border-radius: 3px;
  flex: 1;
}
.device_item {
  border-bottom: 1px solid var(--weui-FG-3);
  padding: 5px;
  color: var(--weui-FG-HALF);
}
.device_item_hover {
  background-color: rgba(0, 0, 0, .1);
}
`});var Ia=a(()=>{ya();Pa();Page({onShareAppMessage(){return{title:"iBeacon",path:"packageAPI/pages/ibeacon/ibeacon"}},data:{uuid:"",beacons:[]},onUnload(){this.stopSearch()},enterUuid(e){this.setData({uuid:e.detail.value})},startSearch(){this._searching||(this._searching=!0,wx.startBeaconDiscovery({uuids:[this.data.uuid],success:e=>{console.log(e),wx.onBeaconUpdate(({beacons:t})=>{this.setData({beacons:t})})},fail:e=>{console.error(e)}}))},stopSearch(){this._searching=!1,wx.stopBeaconDiscovery()}})});var Da=a(()=>{console.log(123)});var Sa=a((bp,ni)=>{ni.exports=`@import "../../../common/lib/weui.wxss";

form {
  margin-top: 15px;
}

.weui-cell__bd {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  min-height: 30px;
}`});var Aa=a(()=>{Da();Sa();Page({onShareAppMessage(){return{title:"\u6536\u8D27\u5730\u5740",path:"packageAPI/pages/choose-address/choose-address"}},data:{addressInfo:null},chooseAddress(){wx.chooseAddress({success:e=>{this.setData({addressInfo:e})},fail(e){console.log(e)}})}})});var qa=a(()=>{console.log(123)});var Ta=a((Ip,li)=>{li.exports=`@import "../../../common/lib/weui.wxss";

form {
  margin-top: 15px;
}

.weui-cell__bd {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  min-height: 30px;
}`});var Ma=a(()=>{qa();Ta();Page({onShareAppMessage(){return{title:"\u8BBE\u7F6E",path:"packageAPI/pages/setting/setting"}},data:{setting:{}},getSetting(){wx.getSetting({success:e=>{console.log(e),this.setData({setting:e.authSetting})}})}})});var La=a(()=>{console.log(123)});var Fa=a((Tp,ci)=>{ci.exports=`@import "../../../common/lib/weui.wxss";

form {
  margin-top: 15px;
}

.weui-cell__bd {
  display: flex;
  justify-content: flex-start;
  padding: 10px 0;
  min-height: 30px;
  align-items: center;
}`});var Ua=a(()=>{La();Fa();Page({onShareAppMessage(){return{title:"\u83B7\u53D6\u53D1\u7968\u62AC\u5934",path:"packageAPI/pages/choose-invoice-title/choose-invoice-title"}},data:{type:"",title:"",taxNumber:"",companyAddress:"",telephone:"",bankName:"",bankAccount:""},chooseInvoiceTitle(){wx.chooseInvoiceTitle({success:e=>{this.setData({type:e.type,title:e.title,taxNumber:e.taxNumber,companyAddress:e.companyAddress,telephone:e.telephone,bankName:e.bankName,bankAccount:e.bankAccount})},fail:e=>{console.error(e)}})}})});var Ca=a(()=>{console.log(123)});var Ba=a((Cp,pi)=>{pi.exports=""});var za=a(()=>{Ca();Ba();Page({onShareAppMessage(){return{title:"\u751F\u7269\u8BA4\u8BC1",path:"packageAPI/pages/soter-authentication/soter-authentication"}},startAuth(e){console.log(e);let t=e.currentTarget.dataset.mode;console.log(t);let o=()=>{wx.startSoterAuthentication({requestAuthModes:[t],challenge:"test",authContent:"\u5C0F\u7A0B\u5E8F\u793A\u4F8B",success:()=>{wx.showToast({title:"\u8BA4\u8BC1\u6210\u529F"})},fail:r=>{console.error(r),wx.showModal({title:"\u5931\u8D25",content:"\u8BA4\u8BC1\u5931\u8D25",showCancel:!1})}})},s=()=>{wx.checkIsSoterEnrolledInDevice({checkAuthMode:t,success:r=>{if(console.log(r),parseInt(r.isEnrolled,10)<=0){wx.showModal({title:"\u9519\u8BEF",content:`\u60A8\u6682\u672A\u5F55\u5165${t==="facial"?"\u4EBA\u8138":"\u6307\u7EB9"}\u4FE1\u606F\uFF0C\u8BF7\u5F55\u5165\u540E\u91CD\u8BD5`,showCancel:!1});return}o()},fail:r=>{console.error(r)}})},i=()=>{wx.showModal({title:"\u9519\u8BEF",content:`\u60A8\u7684\u8BBE\u5907\u4E0D\u652F\u6301${t==="facial"?"\u4EBA\u8138":"\u6307\u7EB9"}\u8BC6\u522B`,showCancel:!1})};wx.checkIsSupportSoterAuthentication({success:r=>{if(console.log(r),!r||r.supportMode.length===0||r.supportMode.indexOf(t)<0){i();return}s()},fail:r=>{console.error(r),i()}})}})});var Ea=a(()=>{console.log(123)});var _a=a((Rp,gi)=>{gi.exports=`.page-section {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 25px;
  box-sizing: border-box;
}
.page-body-title {
  font-size: 30px;
  line-height: 100px;
}
.page-body-text {
  color: var(--weui-FG-1);
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 50px 0;
  text-align: center;
}
.page-body-button {
  width: 100%;
}
`});var Ra=a(()=>{Ea();_a();Page({data:{},requestSubscribeMessage(){let e=this;wx.requestSubscribeMessage({tmplIds:["y1bXHAg_oDuvrQ3pHgcODcMPl-2hZHenWugsqdB2CXY"],success(t){console.log(t),t.errMsg==="requestSubscribeMessage:ok"&&e.subscribeMessageSend()},complete(t){console.log(t)}})},subscribeMessageSend(){wx.cloud.callFunction({name:"openapi",data:{action:"sendSubscribeMessage"},success:e=>{console.warn("[\u4E91\u51FD\u6570] [openapi] templateMessage.send \u8C03\u7528\u6210\u529F\uFF1A",e),wx.showModal({title:"\u8BA2\u9605\u6210\u529F",content:"\u8BF7\u8FD4\u56DE\u5FAE\u4FE1\u4E3B\u754C\u9762\u67E5\u770B",showCancel:!1})},fail:e=>{wx.showToast({icon:"none",title:"\u8C03\u7528\u5931\u8D25"}),console.error("[\u4E91\u51FD\u6570] [openapi] templateMessage.send \u8C03\u7528\u5931\u8D25\uFF1A",e)}})},onLoad:function(e){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage(){return{title:"\u8BA2\u9605\u6D88\u606F",path:"packageAPI/pages/subscribe-message/subscribe-message"}}})});var Va=a(()=>{console.log(123)});var Na=a((Wp,di)=>{di.exports="/* miniprogram/page/API/pages/doc-web-view/doc-web-view.wxss */"});var ja=a(()=>{Va();Na();Page({onShareAppMessage(){return{title:"\u5C0F\u7A0B\u5E8F\u63A5\u53E3\u6587\u6863",path:"packageAPI/pages/doc-web-view/doc-web-view"}}})});var Ha=a(()=>{console.log(123)});var Wa=a(($p,ui)=>{ui.exports="/* miniprogram/packageAPI/pages/audio/audio.wxss */"});var Ga=a(()=>{Ha();Wa();Page({onShareAppMessage(){return{title:"Audio",path:"packageAPI/pages/audio/audio"}},onReady(e){this.audioCtx=wx.createAudioContext("myAudio"),this.audioCtx.setSrc("https://dldir1.qq.com/music/release/upload/t_mm_file_publish/2339610.m4a"),this.audioCtx.play()},data:{src:""},audioPlay(){this.audioCtx.play()},audioPause(){this.audioCtx.pause()},audio14(){this.audioCtx.seek(14)},audioStart(){this.audioCtx.seek(0)}})});var Oa=a(()=>{console.log(123)});var Ja=a((eg,hi)=>{hi.exports=`@import "../../../common/lib/weui.wxss";

`});var Qa=a(()=>{Oa();Ja();Page({onShareAppMessage(){return{title:"\u83B7\u53D6\u7535\u6C60\u4FE1\u606F",path:"packageAPI/pages/get-battery-info/get-battery-info"}},data:{},getBatteryInfo(){wx.getBatteryInfo({complete:e=>{let t=e.isCharging?"\u5145\u7535\u4E2D":"\u4F7F\u7528\u7535\u6C60\u4E2D";this.setData({level:e.level,isCharging:t})}})}})});var $a=a(()=>{console.log(123)});var Ya=a((ig,mi)=>{mi.exports=`.container {
  display: block;
}
.performance-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.performance-item {
  margin: 15px 0;
  width: 80%;
}
`});var Za=a((rg,Xa)=>{var h={};Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in t)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length==1?t[o]:("00"+t[o]).substr((""+t[o]).length)));return e};h.renderName=e=>{switch(e){case"appLaunch":return"\u5C0F\u7A0B\u5E8F\u542F\u52A8";case"firstRender":return"\u9875\u9762\u9996\u6B21\u6E32\u67D3";case"route":return"\u8DEF\u7531\u6027\u80FD";case"evaluateScript":return"\u6CE8\u5165\u811A\u672C"}};h.renderEntryType=e=>{switch(e){case"navigation":return"\u8DEF\u7531";case"render":return"\u6E32\u67D3";case"script":return"\u811A\u672C"}};h.renderDuration=e=>e?e+"ms":"";h.renderStartTime=e=>e?new Date(e).Format("yyyy-MM-dd hh:mm:ss"):"";Xa.exports=h});var eo=a(()=>{$a();Ya();var b=Za(),A=wx.getPerformance?wx.getPerformance():{},Ka=A.createObserver?A.createObserver():null;Page({onShareAppMessage(){return{title:"\u5468\u671F\u6027\u7F13\u5B58",path:"packageAPI/pages/get-performance/get-performance"}},data:{array:[],support:!1},onLoad(){console.log("canIUse:getPerformance:",wx.canIUse("getPerformance"));let e=!1;wx.getPerformance&&(e=!0),this.setData({support:e})},getPerformanceInfo(){let e=A.getEntries(),t=[];e.forEach(o=>{t.push({entryType:b.renderEntryType(o.entryType),name:b.renderName(o.name),duration:b.renderDuration(o.duration),startTime:b.renderStartTime(o.startTime)})}),this.setData({array:t})},startObserver(){Ka.observe({entryTypes:["render","script","navigation"]})},stopObserver(){Ka.disconnect()}})});var to=a(()=>{console.log(123)});var ao=a((gg,fi)=>{fi.exports="/* miniprogram/page/API/pages/mdns/mdns.wxss */"});var oo=a(()=>{to();ao();var q=[],T=[];Page({onShareAppMessage(){return{title:"mdns",path:"packageAPI/pages/mdns/mdns"}},daga:{serviceList:[],resolveFailList:[]},onShow(){this.onLocalService()},startDiscovery(){wx.startLocalServiceDiscovery({serviceType:"_http._tcp.",success:function(e){console.log(e),wx.showToast({title:"\u5F00\u542F\u6210\u529F",icon:"none",duration:2e3})},fail:e=>{wx.showToast({title:"\u5F00\u542F\u5931\u8D25",icon:"none",duration:2e3}),console.log(e)},complete:()=>{console.log("startDiscovery: complete")}})},stopDiscovery(){let e=this;wx.stopLocalServiceDiscovery({success:t=>{wx.showToast({title:"\u5173\u95ED\u6210\u529F",icon:"none",duration:2e3}),q=[],T=[],e.setData({serviceList:[],resolveFailList:[]})},fail:()=>{console.log("stopDiscovery: fail"),wx.showToast({title:"\u5173\u95ED\u5931\u8D25",icon:"none",duration:2e3})},complete:()=>{console.log("stopDIscovery: complete")}})},onLocalService(){let e=this;wx.onLocalServiceFound(function(t){console.log(t),q.push(t),e.setData({serviceList:q})}),wx.onLocalServiceResolveFail(function(t){console.log(t),T.push(t),e.setData({resolveFailList:T})}),wx.onLocalServiceLost(function(t){console.log(t)}),wx.onLocalServiceDiscoveryStop(function(t){console.log("\u76D1\u542C\u5230\u641C\u7D22\u505C\u6B62\u4E8B\u4EF6")})},offLocalService(){console.log("\u662F\u5426\u6267\u884C\u6B64\u90E8\u5206\u6570\u636E"),wx.offLocalServiceFound(function(){console.log("\u53D6\u6D88\u76D1\u542C\u670D\u52A1\u53D1\u73B0\u4E8B\u4EF6 \u6210\u529F")}),wx.offLocalServiceResolveFail(function(){console.log("\u53D6\u6D88\u76D1\u542C mDNS \u670D\u52A1\u89E3\u6790\u5931\u8D25\u7684\u4E8B\u4EF6 \u6210\u529F")}),wx.offLocalServiceLost(function(){console.log("\u53D6\u6D88\u76D1\u542C\u670D\u52A1\u79BB\u5F00\u4E8B\u4EF6 \u6210\u529F")}),wx.offLocalServiceDiscoveryStop(function(){console.log("\u53D6\u6D88\u76D1\u542C mDNS \u670D\u52A1\u505C\u6B62\u641C\u7D22\u7684\u4E8B\u4EF6 \u6210\u529F")})}})});var so=a(()=>{console.log(123)});var io=a((fg,wi)=>{wi.exports=""});var ro=a(()=>{so();io();var xi=e=>{let t=new Uint8Array(e),o=String.fromCharCode.apply(null,t);return decodeURIComponent(escape(o))};Page({onShareAppMessage(){return{title:"UDPSocket",path:"packageAPI/pages/udp-socket/udp-socket"}},data:{port:void 0,remote_port:void 0,startUDP:!1,mode:"local",address:"localhost",canIUse:!0},onLoad(){let e=wx.canIUse("createUDPSocket");e||(wx.showModal({title:"\u5FAE\u4FE1\u7248\u672C\u8FC7\u4F4E\uFF0C\u6682\u4E0D\u652F\u6301\u672C\u529F\u80FD"}),this.setData({canIUse:e}))},handleCreateUDPTap(){this.UDPSocket=wx.createUDPSocket(),this.remoteUDPSocket=wx.createUDPSocket(),this.port=this.UDPSocket.bind(),this.remote_port=this.remoteUDPSocket.bind(),this.setData({port:this.port,remote_port:this.remote_port,startUDP:!0}),this.remoteUDPSocket.onMessage(e=>{let{remoteInfo:t}=e;console.log(e),wx.showModal({title:`IP:${t.address}\u53D1\u6765\u7684\u4FE1\u606F`,content:xi(e.message)})})},handleCloseUDPTap(){this.setData({startUDP:!1,mode:"local"}),console.log(this.data),this.UDPSocket.close(),this.remoteUDPSocket.close()},handleSendRemoteMessage(){this.UDPSocket.send({address:this.data.address||"localhost",port:this.remote_port,message:`port[${this.port}] \u5411 remote-port[${this.remote_port}] \u53D1\u9001\u4FE1\u606F: Hello Wechat!`})},changeMode(){this.setData({mode:"remote"})},handleInputChange(e){this.setData({address:e.detail.value})},handleSendMessage(){this.UDPSocket.send({address:"localhost",port:this.remote_port,message:`port[${this.port}] \u5411 remote-port[${this.remote_port}] \u53D1\u9001\u4FE1\u606F: Hello Wechat!`})}})});var no=a(()=>{console.log(123)});var lo=a((kg,bi)=>{bi.exports=`.input {
  margin: 15px auto;
  width: 80%;
  /* border-bottom: 1px solid black; */
}
.text {
  margin: 15px auto;
  width: 80%;
}`});var co=a(()=>{no();lo();Page({data:{value:""},onLoad:function(e){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage(){return{title:"\u53CC\u5411\u7ED1\u5B9A",path:"packageAPI/pages/make-phone-call/make-phone-call"}}})});var po=a(()=>{console.log(123)});var go=a((Sg,vi)=>{vi.exports=`.page-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}`});var uo=a(()=>{po();go();Page({onShareAppMessage(){return{title:"\u97F3\u89C6\u9891\u5408\u6210",path:"packageAPI/pages/media-container/media-container"}},onLoad(){wx.canIUse("wx.createMediaContainer()")?this.mediaContainer=wx.createMediaContainer():(this.setData({canIUse:!1}),wx.showModal({title:"\u5FAE\u4FE1\u7248\u672C\u8FC7\u4F4E\uFF0C\u6682\u4E0D\u652F\u6301\u672C\u529F\u80FD"}))},data:{targetSrc:"",one:"",two:"",canIUse:!0},handleChooseVideo(e){let t=this;wx.chooseVideo({sourceType:["album","camera"],success(o){console.log(o.tempFilePath),t.setData({[e.currentTarget.dataset.video]:o.tempFilePath}),e.currentTarget.dataset.video==="one"?t.mediaContainer.extractDataSource({source:t.data.one,success(s){t.mediaTrackOne=s}}):t.mediaContainer.extractDataSource({source:t.data.two,success(s){t.mediaTrackTwo=s}})}})},handleExport(){if(this.data.one===""||this.data.two==="")wx.showToast({title:"\u8BF7\u5148\u9009\u62E9\u6E90\u89C6\u9891",icon:"none"});else{console.log(this.mediaTrackOne,this.mediaTrackTwo);let[e]=this.mediaTrackOne.tracks.filter(s=>s.kind==="video"),[t]=this.mediaTrackTwo.tracks.filter(s=>s.kind==="audio");console.log(e,t),this.mediaContainer.addTrack(e),this.mediaContainer.addTrack(t);let o=this;this.mediaContainer.export({success:s=>{o.setData({targetSrc:s.tempFilePath})}})}}})});var ho=a(()=>{console.log(123)});var mo=a((Lg,ki)=>{ki.exports=`.page-body-info {
  padding-bottom: 0;
  height: 300px;
}
.page-body-text {
  padding: 0 15px;
  text-align: center;
}
.page-body-title {
  margin-bottom: 20px;
}
.context-value {
  font-size: 19px;
}`});var fo=a(()=>{ho();mo();Page({onShareAppMessage(){return{title:"\u5468\u671F\u6027\u7F13\u5B58",path:"packageAPI/pages/get-background-fetch-data/get-background-fetch-data"}},onShow(){this.getBackgroundFetchData()},data:{openid:"",appid:"",canIUse:!0},getBackgroundFetchData(){console.log("\u8BFB\u53D6\u5468\u671F\u6027\u66F4\u65B0\u6570\u636E");let e=this;wx.getBackgroundFetchData?wx.getBackgroundFetchData({fetchType:"periodic",success(t){console.log(t);let{fetchedData:o}=t,s=JSON.parse(o);e.setData({appid:s.appid,openid:s.openid}),console.log("\u8BFB\u53D6\u5468\u671F\u6027\u66F4\u65B0\u6570\u636E\u6210\u529F")},fail(){console.log("\u8BFB\u53D6\u5468\u671F\u6027\u66F4\u65B0\u6570\u636E\u5931\u8D25"),wx.showToast({title:"\u65E0\u7F13\u5B58\u6570\u636E",icon:"none"})},complete(){console.log("\u7ED3\u675F\u8BFB\u53D6")}}):(this.setData({canIUse:!1}),wx.showModal({title:"\u5FAE\u4FE1\u7248\u672C\u8FC7\u4F4E\uFF0C\u6682\u4E0D\u652F\u6301\u672C\u529F\u80FD"}))}})});var wo=a(()=>{console.log(123)});var xo=a((zg,yi)=>{yi.exports=`.page-body-info {
  padding-bottom: 0;
  height: 340px;
}
.page-body-title {
  margin-bottom: 20px;
}
.page-body-text {
  padding: 0 15px;
  text-align: center;
}
.context-value {
  font-size: 19px;
}`});var bo=a(()=>{wo();xo();var Pi=getApp();Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in t)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length==1?t[o]:("00"+t[o]).substr((""+t[o]).length)));return e};Page({onShow(){this.getBackgroundFetchData()},onShareAppMessage(){return{title:"\u9884\u62C9\u53D6",path:"packageAPI/pages/get-background-prefetch-data/get-background-prefetch-data"}},data:{openid:"",appid:"",getDataTime:"",canIUse:!0},getBackgroundFetchData(){if(wx.getBackgroundFetchData){console.log("\u8BFB\u53D6\u9884\u62C9\u53D6\u6570\u636E");let e=Pi.globalData.backgroundFetchData,{fetchedData:t}=e,o=JSON.parse(t),i=wx.getSystemInfoSync().brand==="iPhone"?e.timeStamp*1e3:e.timeStamp,r=new Date(i).Format("yyyy-MM-dd hh:mm:ss");this.setData({appid:o.appid,openid:o.openid,getDataTime:r})}else this.setData({canIUse:!1}),wx.showModal({title:"\u5FAE\u4FE1\u7248\u672C\u8FC7\u4F4E\uFF0C\u6682\u4E0D\u652F\u6301\u672C\u529F\u80FD"})}})});var vo=a(()=>{console.log(123)});var ko=a((Ng,Ii)=>{Ii.exports=""});var yo=a(()=>{vo();ko();Page({onShareAppMessage(){return{title:"wxs",path:"packageAPI/pages/wxs/wxs"}},handleNavChange(e){console.log(e),wx.navigateTo({url:`/packageAPI/pages/wxs/${e.currentTarget.dataset.nav}`})}})});var Po=a(()=>{console.log(123)});var Io=a((Og,Di)=>{Di.exports=`.action-area {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}`});var So=a(()=>{Po();Io();var Si="0C76801A-62EB-45E5-96A8-37C8882ABB2B",v="D0611E78-BBB4-4591-A5F8-487910AE4366",Do="8667556C-9A37-4C91-84ED-54EE27D90049";function Ai(e,t,o){for(let s=0;s<e.length;s++)if(e[s][t]===o)return s;return-1}Page({onShareAppMessage(){return{title:"\u84DD\u7259",path:"packageAPI/pages/slave/slave"}},data:{connects:[],servers:[]},onLoad:function(e){wx.onBLEPeripheralConnectionStateChanged(t=>{console.log("connect");let o=this.data.connects,s=Ai(o,"deviceId",t.deviceId);s>=0?o[s]=t:o.push(t),this.setData({connects:o})})},openBluetoothAdapter(){wx.openBluetoothAdapter({mode:"peripheral",success:e=>{console.log("openBluetoothAdapter success",e),this.createBLEPeripheralServer()},fail:e=>{console.log(e),wx.showToast({title:`\u521B\u5EFA\u5931\u8D25 \u9519\u8BEF\u7801: ${e.errCode}`,icon:"none"}),e.errCode===10001&&wx.onBluetoothAdapterStateChange(function(t){console.log("onBluetoothAdapterStateChange",t),t.available&&this.createBLEPeripheralServer()})}})},createBLEPeripheralServer(){wx.createBLEPeripheralServer().then(e=>{console.log("createBLEPeripheralServer",e),this.data.servers.push(e.server),this.server=e.server,this.setData({serverId:this.server.serverId}),wx.showToast({title:"\u521B\u5EFA server "}),this.server.onCharacteristicReadRequest(t=>{let{serviceId:o,characteristicId:s,callbackId:i}=t,r=new ArrayBuffer(1),c=new DataView(r),m=Math.ceil(Math.random()*10);c.setUint8(0,m),console.log("onCharacteristicReadRequest",t,m),this.server.writeCharacteristicValue({serviceId:o,characteristicId:s,value:r,needNotify:!0,callbackId:i})}),this.server.onCharacteristicWriteRequest(t=>{console.log("onCharacteristicWriteRequest",t);let{serviceId:o,characteristicId:s,value:i,callbackId:r}=t;wx.showToast({title:"\u6536\u5230\u4E3B\u673A\u6570\u636E"}),this.server.writeCharacteristicValue({serviceId:o,characteristicId:s,value:i,needNotify:!0,callbackId:r})})})},closeServer(){this.server.close(),wx.showToast({title:"\u5173\u95ED server"})},chaneMode(){wx.navigateBack()},onConfirm(e){console.log("onConfirm");let t=e.detail.value*1,o=new ArrayBuffer(1);new DataView(o).setUint8(0,t),this.server.writeCharacteristicValue({serviceId:v,characteristicId:Do,value:o,needNotify:!0}),wx.showModal({title:"\u5199\u5165\u6210\u529F",content:"\u8BF7\u5728\u4E3B\u673A\u67E5\u770B"})},showInput(){this.setData({input:!this.data.input})},addService(){let e=new ArrayBuffer(1);new DataView(e).setUint8(0,2);let o=new ArrayBuffer(1);new DataView(o).setInt8(0,3);let i={uuid:v,characteristics:[{uuid:Do,properties:{write:!0,read:!0,notify:!0,indicate:!0},permission:{readable:!0,writeable:!0,readEncryptionRequired:!0,writeEncryptionRequired:!0},value:e,descriptors:[{uuid:Si,permission:{write:!0,read:!0},value:o}]}]};this.server.addService({service:i}).then(r=>{console.log("add Service",r),wx.showToast({title:"\u521B\u5EFA\u670D\u52A1"})},r=>{console.log(r),r.errCode===10001?wx.showToast({title:"\u8BF7\u6253\u5F00\u84DD\u7259"}):wx.showModal({title:"\u521B\u5EFA\u5931\u8D25",content:`\u9519\u8BEF\u7801: ${r.errCode}`})})},removeService(){this.server.removeService({serviceId:v}).then(e=>{wx.showToast({title:"\u5173\u95ED\u670D\u52A1"}),console.log("removeService",e)})},startAdvertising(){let e=new ArrayBuffer(1);new DataView(e).setInt8(0,4),this.server.startAdvertising({advertiseRequest:{connectable:!0,deviceName:"sanford",serviceUuids:[v],manufacturerData:[{manufacturerId:"sanfordsun-pc0",manufacturerSpecificData:e}]},powerLevel:"medium"}).then(o=>{console.log("startAdvertising",o),wx.showToast({title:"\u5F00\u542F\u5E7F\u64AD"})})},stopAdvertising(){this.server.stopAdvertising(),wx.showToast({title:"\u5173\u95ED\u5E7F\u64AD"})},closeBluetoothAdapter(){wx.showToast({title:"\u7ED3\u675F\u6D41\u7A0B"}),wx.closeBluetoothAdapter()},onUnload:function(){this.data.servers.forEach(e=>{})}})});var Ao=a(()=>{console.log(123)});var qo=a((Xg,qi)=>{qi.exports="/* miniprogram/packageAPI/pages/resizable/resizable.wxss */"});var To=a(()=>{Ao();qo();Page({onShareAppMessage(){return{title:"\u5C4F\u5E55\u65CB\u8F6C",path:"package/API/pages/resizable/resizable"}},data:{status:"lock"},handleStatusChange:function(e){this.setData({status:e.currentTarget.dataset.status})}})});var Mo=a(()=>{console.log(123)});var Lo=a((ad,Ti)=>{Ti.exports="/* miniprogram/page/API/pages/wxs/movable.wxss */"});var Fo=a(()=>{Mo();Lo();Page({onShareAppMessage(){return{title:"movable",path:"packageAPI/pages/wxs/movable"}},data:{left:50,top:50,taptest:"taptest",show:!0,dataObj:{obj:1}},onLoad:function(e){},onReady:function(){setTimeout(()=>{this.setData({})},3e3)},taptest(){this.setData({show:!1})}})});var Uo=a(()=>{console.log(123)});var Co=a((nd,Mi)=>{Mi.exports=`.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 100px 0;
  box-sizing: border-box;
} 
page,.page {
  height: 100%;
  font-family: 'PingFang SC', 'Helvetica Neue', Helvetica, 'Droid Sans Fallback', 'Microsoft Yahei', sans-serif;
}
.page-bottom{
  height: 100%;
  width: 725px;
  position: fixed; 
  background-color: #07c160;
  z-index: 0;
}
.wc{
  color: white;
  padding: 15px 0 15px 20px;
}
.page-content{
  padding-top: 150px;
}
.page-top{
  height: 100%;
  position: fixed;
  width: 725px;
  background-color: var(--weui-BG-1);
  z-index: 0;
  transition: All 0.4s ease; 
  -webkit-transition: All 0.4s ease;
}

.c-state1{
  transform: rotate(0deg) scale(1) translate(40%,0%); 
  -webkit-transform: rotate(0deg) scale(1) translate(40%,0%); 
}
.c-state2{
  transform: rotate(0deg) scale(.8) translate(40%,0%); 
  -webkit-transform: rotate(0deg) scale(.8) translate(40%,0%); 
}

.item-title {
  margin: 10px 10px 5px;
  font-size: 18px;
  width: 100%;
}
.item-desc {
  margin: 5px 10px 0;
  width: 100%;
  color: #00000080
}
`});var Bo=a(()=>{Uo();Co();Page({data:{tabs:[],open:!1,mark:0,newmark:0,startmark:0,endmark:0,windowWidth:wx.getSystemInfoSync().windowWidth,staus:1,translate:""},onLoad(){let e=[{title:"\u6280\u672F\u5F00\u53D1",title2:"\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u8FDB\u9636",img:"http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEV5QjxLDJaL6ibHLSZ02TIcve0ocPXrdTVqGGbqAmh5Mw9V7504dlEiatSvnyibibHCrVQO2GEYsJicPA/0?wx_fmt=jpeg",desc:"\u672C\u89C6\u9891\u7CFB\u5217\u8BFE\u7A0B\uFF0C\u7531\u817E\u8BAF\u8BFE\u5802NEXT\u5B66\u9662\u4E0E\u5FAE\u4FE1\u56E2\u961F\u8054\u5408\u51FA\u54C1\uFF0C\u901A\u8FC7\u5B9E\u6218\u6848\u4F8B\uFF0C\u6DF1\u5165\u6D45\u51FA\u5730\u8FDB\u884C\u8BB2\u89E3\u3002"}];this.setData({tabs:e})}})});var zo=a(()=>{console.log(123)});var Eo=a((dd,Li)=>{Li.exports=`.page-banner{
  height:200px;
  background-color: #fff;
  color:#fff;
}
.page-group{
  display: table;
  /* background-color: rgba(00, 00, 00, 1); */
  width: 100%;
  table-layout: fixed;
  position: relative;
  top: 0;
  left: 0;
}
.page-group-position{
  position: fixed;
}
.page-nav-list{
  padding:15px 0 ;
  display: table-cell;
  text-align: center;
  color: #07c160;
}
.goods-list{
  height: 300px;
  background-color: var(--weui-BG-2);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item-title {
  margin: 10px 10px 5px;
  font-size: 18px;
  width: 100%;
}
.item-desc {
  margin: 5px 10px 0;
  width: 100%;
  color: var(--weui-FG-2)
}`});var _o=a(()=>{zo();Eo();var Fi=wx.getSystemInfoSync().windowHeight,Ui=getApp();Page({data:{sticky:!1,opacity:0,height:Fi,tabs:[],theme:Ui.globalData.theme},onPageScroll:function(e){},onShow(){},onReady(){},onLoad(){let e=[{title:"\u6280\u672F\u5F00\u53D1",title2:"\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u8FDB\u9636",img:"http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEV5QjxLDJaL6ibHLSZ02TIcve0ocPXrdTVqGGbqAmh5Mw9V7504dlEiatSvnyibibHCrVQO2GEYsJicPA/0?wx_fmt=jpeg",desc:"\u672C\u89C6\u9891\u7CFB\u5217\u8BFE\u7A0B\uFF0C\u7531\u817E\u8BAF\u8BFE\u5802NEXT\u5B66\u9662\u4E0E\u5FAE\u4FE1\u56E2\u961F\u8054\u5408\u51FA\u54C1\uFF0C\u901A\u8FC7\u5B9E\u6218\u6848\u4F8B\uFF0C\u6DF1\u5165\u6D45\u51FA\u5730\u8FDB\u884C\u8BB2\u89E3\u3002"},{title:"\u4EA7\u54C1\u89E3\u6790",title2:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u76F4\u64AD",img:"http://mmbiz.qpic.cn/sz_mmbiz_png/GEWVeJPFkSHALb0g5rCc4Jf5IqDfdwhWJ43I1IvriaV5uFr9fLAuv3uxHR7DQstbIxhNXFoQEcxGzWwzQUDBd6Q/0?wx_fmt=png",desc:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u76F4\u64AD\u7CFB\u5217\u8BFE\u7A0B\u6301\u7EED\u66F4\u65B0\u4E2D\uFF0C\u5E2E\u52A9\u5927\u5BB6\u66F4\u597D\u5730\u7406\u89E3\u3001\u5E94\u7528\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u76F4\u64AD\u529F\u80FD\u3002"},{title:"\u8FD0\u8425\u89C4\u8303",title2:"\u5E38\u89C1\u95EE\u9898\u548C\u89E3\u51B3\u65B9\u6848",img:"http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSGqys4ibO2a8L9nnIgH0ibjNXfbicNbZQQYfxxUpmicQglAEYQ2btVXjOhY9gRtSTCxKvAlKFek7sRUFA/0?wx_fmt=jpeg",desc:"\u63D0\u9AD8\u5BA1\u6838\u8D28\u91CF"},{title:"\u8425\u9500\u7ECF\u9A8C",title2:"\u6D41\u91CF\u4E3B\u5C0F\u7A0B\u5E8F",img:"http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSH2Eic4Lt0HkZeEN08pWXTticVRgyNGgBVHMJwMtRhmB0hE4m4alSuwsBk3uBBOhdCr91bZlSFbYhFg/0?wx_fmt=jpeg",desc:"\u672C\u8BFE\u7A0B\u5171\u56DB\u8282\uFF0C\u5C06\u5206\u9636\u6BB5\u4E3A\u5F00\u53D1\u8005\u5C55\u793A\u5982\u4F55\u5F00\u901A\u6D41\u91CF\u4E3B\u529F\u80FD\u3001\u5982\u4F55\u63A5\u5165\u5E7F\u544A\u7EC4\u4EF6\u3001\u4E0D\u540C\u7C7B\u578B\u5C0F\u7A0B\u5E8F\u63A5\u5165\u7684\u5EFA\u8BAE\uFF0C\u4EE5\u53CA\u5982\u4F55\u901A\u8FC7\u5DE5\u5177\u8C03\u4F18\u5C0F\u7A0B\u5E8F\u53D8\u73B0\u6548\u7387\u3002"},{title:"\u9AD8\u6821\u5927\u8D5B",title2:"2020\u4E2D\u56FD\u9AD8\u6821\u8BA1\u7B97\u673A\u5927\u8D5B",img:"http://mmbiz.qpic.cn/mmbiz_jpg/TcDuyasB5T3Eg34AYwjMw7xbEK2n01ekiaicPiaMInEMTkOQtuv1yke5KziaYF4MLia4IAbxlm0m5NxkibicFg4IZ92EA/0?wx_fmt=jpeg",desc:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5E94\u7528\u5F00\u53D1\u8D5B"}];this.setData({tabs:e})}})});var Ro=a(()=>{console.log(123)});var Vo=a((wd,Ci)=>{Ci.exports=`/* pages/nearby/nearby.wxss */
.swiper {
  width: 100%;
  max-width: 600px;
}
`});var No=a(()=>{Ro();Vo();var Bi=wx.getSystemInfoSync().windowWidth;Page({onShareAppMessage(){return{title:"nearby",path:"packageAPI/pages/wxs/nearby"}},data:{imgUrls:["http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEV5QjxLDJaL6ibHLSZ02TIcve0ocPXrdTVqGGbqAmh5Mw9V7504dlEiatSvnyibibHCrVQO2GEYsJicPA/0?wx_fmt=jpeg","http://mmbiz.qpic.cn/sz_mmbiz_png/GEWVeJPFkSHALb0g5rCc4Jf5IqDfdwhWJ43I1IvriaV5uFr9fLAuv3uxHR7DQstbIxhNXFoQEcxGzWwzQUDBd6Q/0?wx_fmt=png","http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSGqys4ibO2a8L9nnIgH0ibjNXfbicNbZQQYfxxUpmicQglAEYQ2btVXjOhY9gRtSTCxKvAlKFek7sRUFA/0?wx_fmt=jpeg","http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSH2Eic4Lt0HkZeEN08pWXTticVRgyNGgBVHMJwMtRhmB0hE4m4alSuwsBk3uBBOhdCr91bZlSFbYhFg/0?wx_fmt=jpeg"],imgSize:[{height:150},{height:200},{height:150},{height:150}],indicatorDots:!0,autoplay:!1,interval:3e3,duration:500,left:0,windowWidth:Bi},changeIndicatorDots:function(e){this.setData({indicatorDots:!this.data.indicatorDots})},swiperTransition1(e){console.log("e.transition",e),this.setData({left:e.detail.x/4})},onReady(){},changeAutoplay:function(e){this.setData({autoplay:!this.data.autoplay})},intervalChange:function(e){this.setData({interval:e.detail.value})},durationChange:function(e){this.setData({duration:e.detail.value})}})});C();E();V();H();O();$();K();ae();ie();le();ge();he();we();ve();Pe();Se();Te();Fe();Be();_e();Ne();We();Je();Ye();Ke();at();rt();ct();dt();xt();kt();Dt();qt();Lt();Ct();Et();Vt();Ht();Ot();Xt();ea();oa();ra();ca();da();ma();xa();ka();Ia();Aa();Ma();Ua();za();Ra();ja();Ga();Qa();eo();oo();ro();co();uo();fo();bo();yo();So();To();Fo();Bo();_o();No();
