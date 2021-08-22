var o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var L=o(()=>{console.log(123)});var C=o((Ke,xe)=>{xe.exports="/* miniprogram/page/cloud/pages/doc-web-view/doc-web-view.wxss */"});var y=o(()=>{L();C();Page({onShareAppMessage(){return{title:"\u5C0F\u7A0B\u5E8F\u4E91\u5F00\u53D1\u6587\u6863",path:"page/cloud/pages/doc-web-view/doc-web-view"}}})});var v=o(()=>{console.log(123)});var q=o((ot,De)=>{De.exports=`.page-body-info {
  padding-bottom: 0;
  height: 230px;
}
.page-body-text {
  padding: 0 30rpx;
  text-align: center;
}
.openid {
  margin-top: 20rpx;
  font-size: 38rpx;
}`});var T=o(()=>{v();q();var be=getApp();Page({onShareAppMessage(){return{title:"\u7528\u6237\u9274\u6743",path:"page/cloud/pages/user-authentication/user-authentication"}},data:{openid:"",loading:!1},onGetOpenid(){this.setData({loading:!0}),be.getUserOpenIdViaCloud().then(e=>(this.setData({openid:e,loading:!1}),e)).catch(e=>{console.error(e)})},clear(){this.setData({openid:""})}})});var F=o(()=>{console.log(123)});var U=o((lt,Ie)=>{Ie.exports=`.page-body-info {
  padding-bottom: 0;
  height: 230px;
}
.page-body-text {
  padding: 0 30rpx;
  text-align: center;
}
.context-value {
  font-size: 38rpx;
}`});var E=o(()=>{F();U();Page({onShareAppMessage(){return{title:"WXContext",path:"page/cloud/pages/get-wx-context/get-wx-context"}},data:{hasWXContext:!1,wxContext:{},loading:!1},getWXContext(){this.setData({loading:!0}),wx.cloud.callFunction({name:"wxContext",data:{},success:e=>{console.log("[\u4E91\u51FD\u6570] [wxContext] wxContext: ",e.result),this.setData({hasWXContext:!0,wxContext:e.result,loading:!1})},fail:e=>{console.error("[\u4E91\u51FD\u6570] [wxContext] \u8C03\u7528\u5931\u8D25",e)}})},clear(){this.setData({hasWXContext:!1,wxContext:{}})}})});var M=o(()=>{console.log(123)});var k=o((ut,Le)=>{Le.exports=`@import "../../../common/lib/weui.wxss";

.image {
  width: 100%;
  height: 360rpx;
}

.page-body-info {
  display: flex;
  box-sizing: border-box;
  padding: 30rpx;
  height: 420rpx;
  border-top: 1rpx solid var(--weui-FG-3);
  border-bottom: 1rpx solid var(--weui-FG-3);
  align-items: center;
  justify-content: center;
}

.page-section-ctn {
  text-align: center;
  margin: 0 auto;
  width: 100%;
}

.image {
  max-width: 100%;
}
`});var O=o(()=>{M();k();var A=getApp();Page({onShareAppMessage(){return{title:"\u4E0A\u4F20\u6587\u4EF6",path:"page/cloud/pages/upload-file/upload-file"}},data:{fileUploaded:!1,fileId:"",filePath:"",fromOtherPage:!1},onLoad(e){e.from&&this.setData({fromOtherPage:!0})},chooseImage(){let e=this;wx.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success(t){console.log("chooseImage success, temp path is",t.tempFilePaths[0]);let a=t.tempFilePaths[0];wx.showLoading({title:"\u4E0A\u4F20\u4E2D"}),A.getUserOpenIdViaCloud().then(s=>{let i="upload/"+s+a.match(/\.[^.]+?$/)[0];return console.log("cloudPath",i),wx.cloud.uploadFile({cloudPath:i,filePath:a,success:n=>{console.log("[\u4E0A\u4F20\u6587\u4EF6] \u6210\u529F\uFF1A",n),A.globalData.fileId=n.fileID,e.setData({fileUploaded:!0,fileId:n.fileID,filePath:a}),wx.hideLoading()},fail:n=>{console.error("[\u4E0A\u4F20\u6587\u4EF6] \u5931\u8D25\uFF1A",n),wx.hideLoading(),wx.showToast({icon:"none",title:"\u4E0A\u4F20\u5931\u8D25"})}}),s}).catch(s=>{console.error(s),wx.hideLoading()})},fail({errMsg:t}){console.log("chooseImage fail, err is",t)}})}})});var S=o(()=>{console.log(123)});var W=o((xt,Ce)=>{Ce.exports=`@import "../../../common/lib/weui.wxss";

.page-section-ctn {
  text-align: center;
  margin: 0 auto;
  width: 100%;
}

.image {
  max-width: 100%;
}
`});var u=o((Dt,P)=>{var ye="14592619.qcloud.la",ve={requestUrl:"https://mp.weixin.qq.com",host:ye,envId:"release-b86096",demoImageFileId:"cloud://release-b86096.7265-release-b86096-1258211818/demo.jpg",demoVideoFileId:"cloud://release-b86096.7265-release-b86096/demo.mp4"};P.exports=ve});var R=o(()=>{S();W();var qe=u().demoImageFileId,Te=getApp();Page({onShareAppMessage(){return{title:"\u4E0B\u8F7D\u6587\u4EF6",path:"page/cloud/pages/download-file/download-file"}},data:{fileDownloaded:!1,fileId:"",filePath:"",loading:!1},onLoad(){this.setData({fileId:Te.globalData.fileId||qe})},downloadFile(){let e=this.data.fileId;if(!e)return;let t=this;this.setData({loading:!0}),wx.cloud.downloadFile({fileID:e,success:a=>{console.log("[\u4E0B\u8F7D\u6587\u4EF6] \u6210\u529F\uFF1A",a),t.setData({fileDownloaded:!0,filePath:a.tempFilePath})},fail:a=>{console.error("[\u4E0B\u8F7D\u6587\u4EF6] \u5931\u8D25\uFF1A",a)},complete:()=>{t.setData({loading:!1})}})}})});var _=o(()=>{console.log(123)});var B=o((yt,Fe)=>{Fe.exports=`@import "../../../common/lib/weui.wxss";

.page-section-ctn {
  text-align: center;
  margin: 0 auto;
  width: 100%;
}

.image {
  max-width: 100%;
}
`});var X=o(()=>{_();B();var Ue=u().demoImageFileId,Ee=getApp();Page({onShareAppMessage(){return{title:"\u83B7\u53D6\u4E34\u65F6\u94FE\u63A5",path:"page/cloud/pages/get-temp-file-url/get-temp-file-url"}},data:{fileTempURLDone:!1,fileId:"",tempFileURL:"",maxAge:0,loading:!1},onLoad(){this.setData({fileId:Ee.globalData.fileId||Ue})},getTempFileURL(){let e=this.data.fileId;if(!e)return;let t=this;this.setData({loading:!0}),wx.cloud.getTempFileURL({fileList:[e],success:a=>{console.log("[\u6362\u53D6\u4E34\u65F6\u94FE\u63A5] \u6210\u529F\uFF1A",a),a.fileList&&a.fileList.length&&t.setData({fileTempURLDone:!0,tempFileURL:a.fileList[0].tempFileURL,maxAge:a.fileList[0].maxAge})},fail:a=>{console.error("[\u6362\u53D6\u4E34\u65F6\u94FE\u63A5] \u5931\u8D25\uFF1A",a)},complete:()=>{t.setData({loading:!1})}})}})});var V=o(()=>{console.log(123)});var z=o((Ut,Me)=>{Me.exports=`@import "../../../common/lib/weui.wxss";

.page-section-ctn {
  text-align: center;
  margin: 200rpx auto 0;
  width: 100%;
}

.page-body-text {
  color: #bbb;
  font-size: 28rpx;
  line-height: 40rpx;
  text-align: center;
}
`});var j=o(()=>{V();z();var m=getApp();Page({onShareAppMessage(){return{title:"\u5220\u9664\u6587\u4EF6",path:"page/cloud/pages/delete-file/delete-file"}},data:{fileId:"",loading:!1},onLoad(){this.setData({fileId:m.globalData.fileId||""})},onShow(){this.setData({fileId:m.globalData.fileId||""})},deleteFile(){let e=this.data.fileId;if(!e)return;let t=this;this.setData({loading:!0}),wx.cloud.deleteFile({fileList:[e],success:a=>{console.log("[\u5220\u9664\u6587\u4EF6] \u6210\u529F\uFF1A",a),a.fileList&&a.fileList.length&&t.setData({fileId:""}),m.globalData.fileId="",wx.showToast({title:"\u5220\u9664\u6210\u529F"})},fail:a=>{console.error("[\u5220\u9664\u6587\u4EF6] \u5931\u8D25\uFF1A",a)},complete:()=>{t.setData({loading:!1})}})}})});var N=o(()=>{console.log(123)});var G=o((Ot,ke)=>{ke.exports=`@import "../../../common/lib/weui.wxss";

.page-section-ctn {
  text-align: center;
  margin: 0 auto;
  width: 100%;
}

.image {
  max-width: 100%;
}
`});var $=o(()=>{N();G();var{demoImageFileId:Ae,demoVideoFileId:Oe}=u();Page({onShareAppMessage(){return{title:"\u7EC4\u4EF6\u652F\u6301",path:"page/cloud/pages/cloud-file-component/cloud-file-component"}},data:{imageFileId:Ae,videoFileId:Oe}})});var H=o(()=>{console.log(123)});var Y=o((_t,Se)=>{Se.exports=`@import "../../../common/lib/weui.wxss";

.page-body-info {
  padding: 30rpx 0 30rpx 0;
}

.page-body-text {
  padding: 0 30rpx;
  text-align: center;
}
`});var Z=o(()=>{H();Y();var f=getApp();Page({onShareAppMessage(){return{title:"\u57FA\u672C\u64CD\u4F5C",path:"page/cloud/pages/crud/crud"}},data:{openid:"",todoListFetched:!1,todoList:[],searchContent:"",newContent:"",filtered:!1,loading:!1},onLoad(){f.globalData.openid?(this.setData({openid:f.globalData.openid}),this.queryTodoList()):(wx.showLoading({title:"\u6B63\u5728\u521D\u59CB\u5316..."}),f.getUserOpenIdViaCloud().then(e=>(this.setData({openid:e}),wx.hideLoading(),this.queryTodoList(),e)).catch(e=>{console.error(e),wx.hideLoading(),wx.showToast({icon:"none",title:"\u521D\u59CB\u5316\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC"})}))},onShow(){this.data.openid&&this.queryTodoList()},createTodo(){if(this.data.loading)return;let{newContent:e}=this.data;if(!e)return;this.setData({loading:!0}),wx.cloud.database().collection("todos").add({data:{description:e,done:!1},success:a=>{this.setData({todoList:[...this.data.todoList,{_id:a._id,_openid:this.data.openid,description:e,done:!1}],newContent:""}),wx.showToast({title:"\u65B0\u589E\u8BB0\u5F55\u6210\u529F"}),console.log("[\u6570\u636E\u5E93] [\u65B0\u589E\u8BB0\u5F55] \u6210\u529F\uFF0C\u8BB0\u5F55 _id: ",a._id)},fail:a=>{wx.showToast({icon:"none",title:"\u65B0\u589E\u8BB0\u5F55\u5931\u8D25"}),console.error("[\u6570\u636E\u5E93] [\u65B0\u589E\u8BB0\u5F55] \u5931\u8D25\uFF1A",a)},complete:()=>{this.setData({loading:!1})}})},queryTodoList(){wx.showLoading({title:"\u6B63\u5728\u67E5\u8BE2..."}),wx.cloud.database().collection("todos").where({_openid:this.data.openid}).get({success:t=>{this.setData({todoListFetched:!0,todoList:t.data,filtered:!1}),console.log("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u6210\u529F: ",t)},fail:t=>{wx.showToast({icon:"none",title:"\u67E5\u8BE2\u8BB0\u5F55\u5931\u8D25"}),console.error("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u5931\u8D25\uFF1A",t)},complete:()=>{wx.hideLoading()}})},searchTodo(){let{searchContent:e}=this.data;if(!e){this.queryTodoList();return}let t=wx.cloud.database(),a=e,s=/^\/([\s\S]*)\//.exec(e);if(s){let i=s[1].trim().replace(/\s+/g,"|");a=t.RegExp({regexp:i})}wx.showLoading({title:"\u6B63\u5728\u67E5\u8BE2..."}),t.collection("todos").where({_openid:this.data.openid,description:a}).get({success:i=>{this.setData({todoList:i.data,filtered:!0}),console.log("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u6210\u529F: ",i)},fail:i=>{wx.showToast({icon:"none",title:"\u67E5\u8BE2\u8BB0\u5F55\u5931\u8D25"}),console.error("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u5931\u8D25\uFF1A",i)},complete:()=>{wx.hideLoading()}})},toggleComplete(e){if(this.data.loading)return;let{id:t,index:a}=e.currentTarget.dataset,s=this.data.todoList[a];this.setData({loading:!0}),wx.cloud.database().collection("todos").doc(t).update({data:{done:!s.done},success:()=>{this.setData({[`todoList[${a}].done`]:!s.done})},fail:n=>{wx.showToast({icon:"none",title:"\u66F4\u65B0\u5931\u8D25"}),console.error("[\u6570\u636E\u5E93] [\u66F4\u65B0\u8BB0\u5F55] \u5931\u8D25\uFF1A",n)},complete:()=>{this.setData({loading:!1})}})},toDetail(e){let{id:t}=e.currentTarget.dataset;wx.navigateTo({url:`/page/cloud/pages/crud-detail/crud-detail?todoId=${t}`})},onInputSearchContent(e){this.setData({searchContent:e.detail.value})},onInputNewContent(e){this.setData({newContent:e.detail.value})}})});var J=o(()=>{console.log(123)});var K=o((jt,We)=>{We.exports=`@import "../../../common/lib/weui.wxss";
`});var Q=o(()=>{J();K();var w=getApp();Page({onShareAppMessage(){return{title:"\u57FA\u672C\u64CD\u4F5C",path:"page/cloud/pages/crud/crud"}},data:{openid:"",todoId:"",description:"",done:!1,updating:!1,deleting:!1},onLoad(e){let{todoId:t}=e;this.setData({todoId:t}),w.globalData.openid?(this.setData({openid:w.globalData.openid}),this.queryTodo()):(wx.showLoading({title:"\u6B63\u5728\u521D\u59CB\u5316..."}),w.getUserOpenIdViaCloud().then(a=>(this.setData({openid:a}),wx.hideLoading(),this.queryTodo(),a)).catch(a=>{console.error(a),wx.hideLoading()}))},queryTodo(){wx.showLoading({title:"\u6B63\u5728\u67E5\u8BE2..."}),wx.cloud.database().collection("todos").doc(this.data.todoId).get({success:t=>{this.setData({description:t.data.description,done:t.data.done}),console.log("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u6210\u529F: ",t)},fail:t=>{wx.showToast({icon:"none",title:"\u67E5\u8BE2\u8BB0\u5F55\u5931\u8D25"}),console.error("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u5931\u8D25\uFF1A",t)},complete:()=>{wx.hideLoading()}})},updateTodo(){if(this.data.updating||!this.data.todoId)return;let{todoId:e,description:t}=this.data;if(!t)return;this.setData({updating:!0}),wx.cloud.database().collection("todos").doc(e).update({data:{description:t},success:()=>{console.log("he"),wx.showToast({title:"\u66F4\u65B0\u6210\u529F"}),wx.navigateBack()},fail:s=>{wx.showToast({icon:"none",title:"\u66F4\u65B0\u5931\u8D25"}),console.error("[\u6570\u636E\u5E93] [\u66F4\u65B0\u8BB0\u5F55] \u5931\u8D25\uFF1A",s)},complete:()=>{this.setData({updating:!1})}})},removeTodo(){if(this.data.deleting||!this.data.todoId)return;let{todoId:e}=this.data;this.setData({deleting:!0}),wx.cloud.database().collection("todos").doc(e).remove({success:()=>{wx.showToast({title:"\u5220\u9664\u6210\u529F"}),wx.navigateBack()},fail:a=>{wx.showToast({icon:"none",title:"\u5220\u9664\u5931\u8D25"}),console.error("[\u6570\u636E\u5E93] [\u5220\u9664\u8BB0\u5F55] \u5931\u8D25\uFF1A",a)},complete:()=>{this.setData({deleting:!1})}})},onInputContent(e){this.setData({description:e.detail.value})}})});var ee=o(()=>{console.log(123)});var te=o((Yt,Pe)=>{Pe.exports=`@import "../../../common/lib/weui.wxss";

.permission-select {
  display: flex;
  align-items: center;
  height: initial;
  line-height: initial;
}
.weui-panel {
  margin-top: 60rpx;
}
.input-area {
  margin-top: 60rpx;
}
.btn-area {
  margin-bottom: 60rpx;
}
`});var ae=o(()=>{ee();te();var p=getApp(),Re=96;Page({onShareAppMessage(){return{title:"\u6743\u9650\u7BA1\u7406",path:"page/cloud/pages/db-permission/db-permission"}},data:{openid:"",permissions:["\u4EC5\u521B\u5EFA\u8005\u53EF\u5199\uFF0C\u6240\u6709\u4EBA\u53EF\u8BFB","\u4EC5\u521B\u5EFA\u8005\u53EF\u8BFB\u5199","\u4EC5\u7BA1\u7406\u7AEF\u53EF\u5199\uFF0C\u6240\u6709\u4EBA\u53EF\u8BFB","\u4EC5\u7BA1\u7406\u7AEF\u53EF\u8BFB\u5199"],currentPermissionIndex:0,tabs:[["\u6211\u7684\u4E2A\u6027\u7B7E\u540D","\u963F\u767D\u7684\u4E2A\u6027\u7B7E\u540D"],["\u6211\u7684\u90AE\u7BB1","\u963F\u7EFF\u7684\u90AE\u7BB1"],[],[]],activeTabIndex:0,sliderOffset:0,sliderLeft:0,querying:!1,updating:!1,hasMyWhatsUp:!1,myWhatsUp:"",adminWhatsUp:"",myEmail:"",adminEmail:"",hasProduct:!1,product:{},serverData:""},onLoad(){p.globalData.openid?this.setData({openid:p.globalData.openid}):(wx.showLoading({title:"\u6B63\u5728\u521D\u59CB\u5316..."}),p.getUserOpenIdViaCloud().then(i=>(this.setData({openid:i}),wx.hideLoading(),i)).catch(i=>{console.error(i),wx.hideLoading(),wx.showModal({content:"\u521D\u59CB\u5316\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC",showCancel:!1})}));let{myWhatsUp:e,adminWhatsUp:t,myEmail:a,adminEmail:s}=p.globalData;this.setData({hasMyWhatsUp:!!e,myWhatsUp:e||"",adminWhatsUp:t||"",myEmail:a||"",adminEmail:s||""}),this.initTabs()},initTabs(){let e=this.data.currentPermissionIndex,t=this.data.tabs[e].length,a=this;wx.getSystemInfo({success(s){a.setData({sliderLeft:(s.windowWidth/t-Re)/2,sliderOffset:s.windowWidth/t*a.data.activeTabIndex})}})},onTabClick(e){this.setData({sliderOffset:e.currentTarget.offsetLeft,activeTabIndex:Number(e.currentTarget.id)})},onPermissionChange(e){let t=this.data.currentPermissionIndex,a=Number(e.detail.value);t!==a&&(this.setData({currentPermissionIndex:Number(a),activeTabIndex:0}),this.initTabs())},bindInput(e){let{name:t}=e.currentTarget.dataset;this.setData({[t]:e.detail.value})},showErrorModal(e,t){let a=e+"\u5931\u8D25";t.toString().indexOf("permission denied")>=0&&(a+="\uFF1A\u65E0\u6743\u9650\u64CD\u4F5C"),wx.showModal({content:a,showCancel:!1})},queryOneByOpenId(e,t,a={showLoading:!1,showError:!1,success:null,fail:null}){let{showLoading:s,showError:i,success:n,fail:c}=a;s&&this.setData({querying:!0});let d=wx.cloud.database(),g=t||this.data.openid;d.collection(e).where({_openid:g}).get({success:l=>{console.log("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u6210\u529F: ",l);let r=l.data[0]||{};if(r._openid&&r._openid!==g){let I=new Error("database permission denied");i&&this.showErrorModal("\u83B7\u53D6",I),c&&c.call(this,I)}else n&&n.call(this,l.data[0])},fail:l=>{i&&this.showErrorModal("\u83B7\u53D6",l),console.error("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u5931\u8D25\uFF1A",l),c&&c.call(this,l)},complete:()=>{s&&this.setData({querying:!1})}})},updateOneByOpenId(e,t,a,s={showLoading:!1,showError:!1,success:null,fail:null}){let{showLoading:i,showError:n,success:c,fail:d}=s;i&&this.setData({updating:!0});let g=wx.cloud.database();this.queryOneByOpenId(e,t||"",{success:l=>{if(l)g.collection(e).doc(l._id).update({data:a,success:r=>{console.log("[\u6570\u636E\u5E93] [\u66F4\u65B0\u8BB0\u5F55] \u6210\u529F: ",r),c&&c.call(this,r.stats)},fail:r=>{n&&this.showErrorModal("\u8BBE\u7F6E",r),console.error("[\u6570\u636E\u5E93] [\u66F4\u65B0\u8BB0\u5F55] \u5931\u8D25\uFF1A",r),d&&d.call(this,r)},complete:()=>{i&&this.setData({updating:!1})}});else if(!t||t===this.data.openid)g.collection(e).add({data:a,success:r=>{console.log("[\u6570\u636E\u5E93] [\u65B0\u589E\u8BB0\u5F55] \u6210\u529F\uFF1A",r),c&&c.call(this,{_id:r._id})},fail:r=>{n&&this.showErrorModal("\u8BBE\u7F6E",r),console.error("[\u6570\u636E\u5E93] [\u65B0\u589E\u8BB0\u5F55] \u5931\u8D25\uFF1A",r),d&&d.call(this,r)},complete:()=>{i&&this.setData({updating:!1})}});else{let r=new Error("database permission denied");n&&this.showErrorModal("\u8BBE\u7F6E",r),d&&d.call(this,r),i&&this.setData({updating:!1})}},fail:l=>{n&&this.showErrorModal("\u8BBE\u7F6E",l),d&&d.call(this,l),i&&this.setData({updating:!1})}})},queryMyWhatsUp(){this.queryOneByOpenId("perm1","",{showLoading:!0,showError:!0,success:e=>{let t=e&&e.whatsUp||"";wx.showModal({title:"\u83B7\u53D6\u6210\u529F",content:t?"\u4E2A\u6027\u7B7E\u540D\u4E3A\uFF1A"+t:"\u4E2A\u6027\u7B7E\u540D\u4E3A\u7A7A",showCancel:!1})}})},updateMyWhatsUp(){let e={whatsUp:this.data.myWhatsUp};this.updateOneByOpenId("perm1","",e,{showLoading:!0,showError:!0,success:()=>{p.globalData.myWhatsUp=this.data.myWhatsUp,this.setData({hasMyWhatsUp:!0}),wx.showModal({content:"\u8BBE\u7F6E\u6210\u529F",showCancel:!1})}})},queryAdminWhatsUp(){this.queryOneByOpenId("perm1","kiki",{showLoading:!0,showError:!0,success:e=>{let t=e&&e.whatsUp||"";wx.showModal({title:"\u83B7\u53D6\u6210\u529F",content:t?"\u4E2A\u6027\u7B7E\u540D\u4E3A\uFF1A"+t:"\u4E2A\u6027\u7B7E\u540D\u4E3A\u7A7A",showCancel:!1})}})},updateAdminWhatsUp(){let e={whatsUp:this.data.adminWhatsUp};this.updateOneByOpenId("perm1","kiki",e,{showLoading:!0,showError:!0,success:t=>{t.updated===0?wx.showModal({content:"\u8BBE\u7F6E\u5931\u8D25\uFF1A\u65E0\u6743\u9650\u64CD\u4F5C",showCancel:!1}):(p.globalData.adminWhatsUp=this.data.adminWhatsUp,wx.showModal({content:"\u8BBE\u7F6E\u6210\u529F",showCancel:!1}))}})},queryMyEmail(){this.queryOneByOpenId("perm2","",{showLoading:!0,showError:!0,success:e=>{let t=e&&e.email||"";wx.showModal({title:"\u83B7\u53D6\u6210\u529F",content:t?"\u90AE\u7BB1\u4E3A\uFF1A"+t:"\u90AE\u7BB1\u4E3A\u7A7A",showCancel:!1})}})},updateMyEmail(){let e={email:this.data.myEmail};this.updateOneByOpenId("perm2","",e,{showLoading:!0,showError:!0,success:()=>{p.globalData.myEmail=this.data.myEmail,wx.showModal({content:"\u8BBE\u7F6E\u6210\u529F",showCancel:!1})}})},queryAdminEmail(){this.queryOneByOpenId("perm2","popo",{showLoading:!0,showError:!0,success:e=>{let t=e&&e.email||"";wx.showModal({title:"\u83B7\u53D6\u6210\u529F",content:t?"\u90AE\u7BB1\u4E3A\uFF1A"+t:"\u90AE\u7BB1\u4E3A\u7A7A",showCancel:!1})}})},updateAdminEmail(){let e={email:this.data.adminEmail};this.updateOneByOpenId("perm2","popo",e,{showLoading:!0,showError:!0,success:()=>{p.globalData.adminEmail=this.data.adminEmail,wx.showModal({content:"\u8BBE\u7F6E\u6210\u529F",showCancel:!1})}})},queryProduct(){this.queryOneByOpenId("perm3","admin",{showLoading:!0,showError:!0,success:e=>{let t=e&&e.price||null;wx.showModal({title:"\u83B7\u53D6\u6210\u529F",content:t!==null?"\u5546\u54C1\u4EF7\u683C\u4E3A\uFF1A"+t:"\u5546\u54C1\u4EF7\u683C\u6682\u672A\u8BBE\u7F6E",showCancel:!1})}})},updateProductPrice(){let e={price:parseInt(this.data.product.price,10)};this.updateOneByOpenId("perm3","admin",e,{showLoading:!0,showError:!0,success:()=>{wx.showModal({content:"\u8BBE\u7F6E\u6210\u529F",showCancel:!1})}})},queryServerData(){this.queryOneByOpenId("perm4","server",{showLoading:!0,showError:!0,success:e=>{let t=e&&e.serverData||"";wx.showModal({title:"\u83B7\u53D6\u6210\u529F",content:t?"\u540E\u53F0\u6D41\u6C34\u6570\u636E\u4E3A\uFF1A"+t:"\u540E\u53F0\u6D41\u6C34\u6570\u636E\u4E3A\u7A7A",showCancel:!1})}})},updateServerData(){let e={data:this.data.serverData};this.updateOneByOpenId("perm4","server",e,{showLoading:!0,showError:!0,success:()=>{wx.showModal({content:"\u8BBE\u7F6E\u6210\u529F",showCancel:!1})}})}})});var oe=o(()=>{console.log(123)});var se=o((ea,_e)=>{_e.exports=`.page-body-info {
  padding-bottom: 0;
  height: 280px;
}
.page-body-text {
  padding: 0 30rpx;
  text-align: center;
}
.context-value {
  font-size: 38rpx;
}`});var re=o((ta,ie)=>{function Be(e){if(typeof e!="number"||e<0)return e;let t=parseInt(e/3600,10);e%=3600;let a=parseInt(e/60,10);return e=parseInt(e%60,10),[t,a,e].map(function(i){return i=i.toString(),i[1]?i:"0"+i}).join(":")}function Xe(e,t){return typeof e=="string"&&typeof t=="string"&&(e=parseFloat(e),t=parseFloat(t)),e=e.toFixed(2),t=t.toFixed(2),{longitude:e.toString().split("."),latitude:t.toString().split(".")}}function x(e){return e<1?0:e<=2?1:x(e-1)+x(e-2)}function D(e,t=2){e=e.toString();let a=Math.max(t-e.length,0);return new Array(a).fill(0).join("")+e}function Ve(e,t=!1){let a=e.getFullYear(),s=e.getMonth()+1,i=e.getDate(),n=e.getHours(),c=e.getMinutes(),d=e.getSeconds(),g=e.getMilliseconds(),l=[a,s,i].map(r=>D(r,2)).join("-")+" "+[n,c,d].map(r=>D(r,2)).join(":");return t&&(l+="."+D(g,3)),l}function ze(e,t){e=e.split("."),t=t.split(".");let a=Math.max(e.length,t.length);for(;e.length<a;)e.push("0");for(;t.length<a;)t.push("0");for(let s=0;s<a;s++){let i=parseInt(e[s],10),n=parseInt(t[s],10);if(i>n)return 1;if(i<n)return-1}return 0}ie.exports={formatTime:Be,formatLocation:Xe,fib:x,formatDateTime:Ve,compareVersion:ze}});var le=o(()=>{oe();se();var ne=re(),b=getApp(),h="serverDate";Page({onShareAppMessage(){return{title:"\u670D\u52A1\u7AEF\u65F6\u95F4",path:"page/cloud/pages/server-date/server-date"}},data:{openid:"",loading:!1,clientDate:null,serverDate:null,clientDateFormatted:"",serverDateFormatted:"",delta:0},onLoad(){b.globalData.openid?this.setData({openid:b.globalData.openid}):(wx.showLoading({title:"\u6B63\u5728\u521D\u59CB\u5316..."}),b.getUserOpenIdViaCloud().then(e=>(this.setData({openid:e}),wx.hideLoading(),e)).catch(e=>{console.error(e),wx.hideLoading(),wx.showToast({icon:"none",title:"\u521D\u59CB\u5316\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC"})}))},showError(){wx.showToast({icon:"none",title:"\u63D2\u5165\u5931\u8D25"})},completeTask(){this.setData({loading:!1})},insertOrUpdateData(e,t){let a=wx.cloud.database();e._id?a.collection(h).doc(e._id).update({data:t}).then(s=>(this.setCompletedData(e._id),s)).catch(s=>{this.showError(),console.error("[\u6570\u636E\u5E93] [\u66F4\u65B0\u8BB0\u5F55] \u5931\u8D25\uFF1A",s),this.completeTask()}):a.collection(h).add({data:t}).then(s=>(this.setCompletedData(s._id),s)).catch(s=>{this.showError(),console.error("[\u6570\u636E\u5E93] [\u65B0\u589E\u8BB0\u5F55] \u5931\u8D25\uFF1A",s),this.completeTask()})},setCompletedData(e){wx.cloud.database().collection(h).doc(e).get().then(a=>(this.setData({delta:Math.abs(a.data.time-this.data.clientDate),serverDate:a.data.time,clientDateFormatted:ne.formatDateTime(this.data.clientDate,!0),serverDateFormatted:ne.formatDateTime(a.data.time,!0)}),wx.showToast({title:"\u63D2\u5165\u6210\u529F"}),this.completeTask(),a)).catch(a=>{this.showError(),console.error("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u5931\u8D25\uFF1A",a),this.completeTask()})},insertData(){let e=wx.cloud.database(),t={time:e.serverDate()};this.setData({loading:!0}),e.collection(h).where({_openid:this.data.openid}).get().then(a=>{this.setData({clientDate:new Date}),console.log("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u6210\u529F: ",a);let s=a.data[0]||{};return this.insertOrUpdateData(s,t),a}).catch(a=>{this.showError(),console.error("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u5931\u8D25\uFF1A",a),this.completeTask()})}})});var de=o(()=>{console.log(123)});var ce=o((ra,je)=>{je.exports=`@import "../../../common/lib/weui.wxss";

.page-body-info {
  padding-bottom: 30rpx;
}
.progress-figure {
  font-size: 32rpx;
}
.progress-icon {
  width: 60rpx;
  height: 60rpx;
}
.progress-line {
  border-top: 2px solid #2F2F2F;
  padding: 0 60rpx;
  margin: 0 20rpx;
}
.progress-line.pending {
  border-top-style: dashed;
}
.progress-line.success {
  border-top-color: #0bb20c;
}
.progress-line.fail {
  border-top-color: #e64340;
}
.progress-line.lg {
  padding: 0 100rpx;
}
.data-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30rpx;
  height: 30rpx;
}
.data-area .data-text {
  display: flex;
  align-items: center;
}
.data-area .data-text icon {
  margin-right: 10rpx;
}
.btn-area {
  margin-top: 30rpx;
}
`});var pe=o(()=>{de();ce();Page({onShareAppMessage(){return{title:"\u4E91\u51FD\u6570\u64CD\u4F5C\u6570\u636E\u5E93",path:"page/cloud/pages/scf-database/scf-database"}},data:{serverDataClient:"",serverDataClientError:!1,serverDataCloud:"",serverDataCloudError:!1,clientLoading:!1,cloudLoading:!1,theme:"light"},onLoad(){this.setData({theme:wx.getSystemInfoSync().theme||"light"}),wx.onThemeChange&&wx.onThemeChange(({theme:e})=>{this.setData({theme:e})})},queryServerDataViaClient(){let e=wx.cloud.database();this.setData({clientLoading:!0,serverDataClient:"",serverDataClientError:!1}),e.collection("perm4").where({_openid:"server"}).get({success:t=>{let a=t.data&&t.data[0]||{};this.setData({serverDataClient:a.data}),console.log("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u6210\u529F: ",t)},fail:t=>{this.setData({serverDataClientError:!0}),console.error("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u5931\u8D25\uFF1A",t)},complete:()=>{this.setData({clientLoading:!1})}})},queryServerDataViaCloudFunction(){this.setData({cloudLoading:!0,serverDataCloud:"",serverDataCloudError:!1}),wx.cloud.callFunction({name:"getServerDataDemo",data:{},success:e=>{console.log("[\u4E91\u51FD\u6570] [getServerDataDemo] res: ",e.result);let t=e.result.data&&e.result.data[0]||{};this.setData({serverDataCloud:t.data})},fail:e=>{this.setData({serverDataCloudError:!0}),console.error("[\u4E91\u51FD\u6570] [getServerDataDemo] \u8C03\u7528\u5931\u8D25",e)},complete:()=>{this.setData({cloudLoading:!1})}})}})});var ge=o(()=>{console.log(123)});var ue=o((pa,Ne)=>{Ne.exports=`@import "../../../common/lib/weui.wxss";

.page-section-ctn {
  text-align: center;
  margin: 0 auto;
  width: 100%;
}

.image {
  max-width: 100%;
}
`});var he=o(()=>{ge();ue();var Ge=u().demoImageFileId,$e=getApp();Page({onShareAppMessage(){return{title:"\u4E91\u51FD\u6570\u64CD\u4F5C\u5B58\u50A8",path:"page/cloud/pages/scf-storage/scf-storage"}},data:{fileTempURLDone:!1,fileId:"",tempFileURL:"",loading:!1},onLoad(){this.setData({fileId:$e.globalData.fileId||Ge})},getTempFileURL(){let e=this.data.fileId;!e||(this.setData({loading:!0}),wx.cloud.callFunction({name:"getTempFileURL",data:{fileIdList:[e]},success:t=>{console.log("[\u4E91\u51FD\u6570] [getTempFileURL] res: ",t.result),t.result.length&&this.setData({fileTempURLDone:!0,tempFileURL:t.result[0].tempFileURL})},fail:t=>{console.error("[\u4E91\u51FD\u6570] [getTempFileURL] \u8C03\u7528\u5931\u8D25",t)},complete:()=>{this.setData({loading:!1})}}))}})});var me=o(()=>{console.log(123)});var fe=o((fa,He)=>{He.exports=`@import "../../../common/lib/weui.wxss";

.page-body-info {
  padding-bottom: 30rpx;
}
.progress-figure {
  font-size: 32rpx;
}
.progress-icon {
  width: 60rpx;
  height: 60rpx;
}
.progress-line {
  border-top: 2px solid #2F2F2F;
  padding: 0 60rpx;
  margin: 0 20rpx;
}
.progress-line.pending {
  border-top-style: dashed;
}
.progress-line.success {
  border-top-color: #0bb20c;
}
.progress-line.fail {
  border-top-color: #e64340;
}
.progress-line.lg {
  padding: 0 100rpx;
}
.data-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30rpx;
  height: 30rpx;
}
.data-area .data-text {
  display: flex;
  align-items: center;
}
.data-area .data-text icon {
  margin-right: 10rpx;
}
.btn-area {
  margin-top: 30rpx;
}
`});var we=o(()=>{me();fe();Page({onShareAppMessage(){return{title:"\u4E91\u51FD\u6570\u4E2D\u4F7F\u7528\u5FAE\u4FE1\u5F00\u653E\u80FD\u529B",path:"page/cloud/pages/scf-openapi/scf-openapi"}},data:{sendTemplateMessageResult:"",sendTemplateMessageError:!1,getWXACodeResult:"",getWXACodeError:!1,sendTemplateMessageLoading:!1,getWXACodeLoading:!1,theme:"light"},onLoad(){this.setData({theme:wx.getSystemInfoSync().theme||"light"}),wx.onThemeChange&&wx.onThemeChange(({theme:e})=>{this.setData({theme:e})})},sendTemplateMessageViaCloudFunction(e){this.setData({sendTemplateMessageResult:"",sendTemplateMessageError:!1,sendTemplateMessageLoading:!0}),wx.cloud.callFunction({name:"openapi",data:{action:"sendTemplateMessage",formId:e.detail.formId}}).then(t=>{this.setData({sendTemplateMessageResult:t,sendTemplateMessageLoading:!1}),console.log("[\u4E91\u8C03\u7528] [\u53D1\u9001\u6A21\u677F\u6D88\u606F] \u6210\u529F: ",t)}).catch(t=>{this.setData({sendTemplateMessageError:!0,sendTemplateMessageLoading:!1}),console.error("[\u4E91\u8C03\u7528] [\u53D1\u9001\u6A21\u677F\u6D88\u606F] \u5931\u8D25: ",t)})},getWXACodeViaCloudFunction(){this.setData({getWXACodeResult:"",getWXACodeError:!1,getWXACodeLoading:!0}),wx.cloud.callFunction({name:"openapi",data:{action:"getWXACode"}}).then(e=>{this.setData({getWXACodeResult:e,getWXACodeLoading:!1}),console.log("[\u4E91\u8C03\u7528] [\u83B7\u53D6\u5C0F\u7A0B\u5E8F\u7801]] \u6210\u529F: ",e)}).catch(e=>{this.setData({getWXACodeError:!0,getWXACodeLoading:!1}),console.error("[\u4E91\u8C03\u7528] [\u83B7\u53D6\u5C0F\u7A0B\u5E8F\u7801] \u5931\u8D25: ",e)})},queryServerDataViaClient(){let e=wx.cloud.database();this.setData({clientLoading:!0,serverDataClient:"",serverDataClientError:!1}),e.collection("perm4").where({_openid:"server"}).get({success:t=>{let a=t.data&&t.data[0]||{};this.setData({serverDataClient:a.data}),console.log("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u6210\u529F: ",t)},fail:t=>{this.setData({serverDataClientError:!0}),console.error("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u5931\u8D25\uFF1A",t)},complete:()=>{this.setData({clientLoading:!1})}})},queryServerDataViaCloudFunction(){this.setData({cloudLoading:!0,serverDataCloud:"",serverDataCloudError:!1}),wx.cloud.callFunction({name:"getServerDataDemo",data:{},success:e=>{console.log("[\u4E91\u51FD\u6570] [getServerDataDemo] res: ",e.result);let t=e.result.data&&e.result.data[0]||{};this.setData({serverDataCloud:t.data})},fail:e=>{this.setData({serverDataCloudError:!0}),console.error("[\u4E91\u51FD\u6570] [getServerDataDemo] \u8C03\u7528\u5931\u8D25",e)},complete:()=>{this.setData({cloudLoading:!1})}})}})});y();T();E();O();R();X();j();$();Z();Q();ae();le();pe();he();we();
