var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// miniprogram-demo/miniprogram/packageCloud/pages/doc-web-view/doc-web-view.wxml
var require_doc_web_view = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/doc-web-view/doc-web-view.wxml"() {
    Vue.component("packageCloud/pages/doc-web-view/doc-web-view", { template: `<div>
</div>` });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/doc-web-view/doc-web-view.js
var require_doc_web_view2 = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/doc-web-view/doc-web-view.js"() {
    require_doc_web_view();
    var page = getPage("packageCloud/pages/doc-web-view/doc-web-view");
    page.template = "<div>\u6D4B\u8BD5</div>";
    page.json = `{
  "navigationBarTitleText": "\u5C0F\u7A0B\u5E8F\u4E91\u5F00\u53D1\u6587\u6863"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u5C0F\u7A0B\u5E8F\u4E91\u5F00\u53D1\u6587\u6863",
          path: "page/cloud/pages/doc-web-view/doc-web-view"
        };
      }
    });
  }
});

// miniprogram-demo/miniprogram/common/head.wxml
var require_head = __commonJS({
  "miniprogram-demo/miniprogram/common/head.wxml"() {
    Vue.component("head", { template: `<div>
  
    {{title}}
    
    {{desc}}
  
</div>` });
  }
});

// miniprogram-demo/miniprogram/common/foot.wxml
var require_foot = __commonJS({
  "miniprogram-demo/miniprogram/common/foot.wxml"() {
    Vue.component("foot", { template: `<div>
  
    
  
</div>` });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/user-authentication/user-authentication.wxml
var require_user_authentication = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/user-authentication/user-authentication.wxml"() {
    require_head();
    require_foot();
    Vue.component("packageCloud/pages/user-authentication/user-authentication", { template: `<div>



  
        <head is="head" data="{title: 'User Authentication'}" >
            

  
    
      
        OpenID
        
          \u70B9\u51FB\u7EFF\u8272\u6309\u94AE\u53EF\u901A\u8FC7\u4E91\u5F00\u53D1\u83B7\u53D6\u7528\u6237 OpenID
          \u4F7F\u7528\u4E91\u5F00\u53D1\uFF0C\u65E0\u9700\u81EA\u5DF1\u90E8\u7F72\u670D\u52A1\u7AEF\u5E76\u7EF4\u62A4\u590D\u6742\u7684\u9274\u6743\u673A\u5236\uFF0C\u5728\u5C0F\u7A0B\u5E8F\u7AEF\u7B80\u5355\u8C03\u7528\u5373\u53EF\u901A\u8FC7\u4E91\u7AEF\u83B7\u53D6\u5929\u7136\u53EF\u4FE1\u4EFB\u7684\u7528\u6237\u767B\u5F55\u6001
        
        
          {{openid}}
        
      
      
        \u83B7\u53D6 OpenID
        \u6E05\u7A7A
      
    
  

  
        <foot is="foot" >
            

        </foot>
    
        </head>
    
</div>` });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/user-authentication/user-authentication.js
var require_user_authentication2 = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/user-authentication/user-authentication.js"() {
    require_user_authentication();
    var page = getPage("packageCloud/pages/user-authentication/user-authentication");
    page.template = "<div>\u6D4B\u8BD5</div>";
    page.json = `{
  "navigationBarTitleText": "\u7528\u6237\u9274\u6743"
}`;
    var app = getApp();
    Page({
      onShareAppMessage() {
        return {
          title: "\u7528\u6237\u9274\u6743",
          path: "page/cloud/pages/user-authentication/user-authentication"
        };
      },
      data: {
        openid: "",
        loading: false
      },
      onGetOpenid() {
        this.setData({
          loading: true
        });
        app.getUserOpenIdViaCloud().then((openid) => {
          this.setData({
            openid,
            loading: false
          });
          return openid;
        }).catch((err) => {
          console.error(err);
        });
      },
      clear() {
        this.setData({
          openid: ""
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/get-wx-context/get-wx-context.wxml
var require_get_wx_context = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/get-wx-context/get-wx-context.wxml"() {
    require_head();
    require_foot();
    Vue.component("packageCloud/pages/get-wx-context/get-wx-context", { template: `<div>



  
        <head is="head" data="{title: 'getWXContext'}" >
            

  
    
      
        WXContext
        
          \u4E91\u51FD\u6570\u662F\u5728\u4E91\u7AEF\uFF08\u670D\u52A1\u5668\u7AEF\uFF09\u8FD0\u884C\u7684\u51FD\u6570
          \u70B9\u51FB\u7EFF\u8272\u6309\u94AE\u53EF\u8C03\u7528\u4E91\u51FD\u6570\u83B7\u53D6\u5FAE\u4FE1\u8C03\u7528\u4E0A\u4E0B\u6587
          \u8FD4\u56DE\u5185\u5BB9\u5305\u62EC\u7528\u6237 OpenID\u3001\u5C0F\u7A0B\u5E8F AppID \u4EE5\u53CA\u7528\u6237 UnionID\uFF08\u6EE1\u8DB3 UnionID \u83B7\u53D6\u6761\u4EF6\u65F6\uFF09
        
        
          
            OpenID
            {{wxContext.openid}}
          
          
            AppID
            {{wxContext.appid}}
          
          
            UnionID
            {{wxContext.unionid}}
          
        
      
      
        \u83B7\u53D6 WXContext
        \u6E05\u7A7A
      
    
  

  
        <foot is="foot" >
            

        </foot>
    
        </head>
    
</div>` });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/get-wx-context/get-wx-context.js
var require_get_wx_context2 = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/get-wx-context/get-wx-context.js"() {
    require_get_wx_context();
    var page = getPage("packageCloud/pages/get-wx-context/get-wx-context");
    page.template = "<div>\u6D4B\u8BD5</div>";
    page.json = `{
  "navigationBarTitleText": "WXContext"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "WXContext",
          path: "page/cloud/pages/get-wx-context/get-wx-context"
        };
      },
      data: {
        hasWXContext: false,
        wxContext: {},
        loading: false
      },
      getWXContext() {
        this.setData({
          loading: true
        });
        wx.cloud.callFunction({
          name: "wxContext",
          data: {},
          success: (res) => {
            console.log("[\u4E91\u51FD\u6570] [wxContext] wxContext: ", res.result);
            this.setData({
              hasWXContext: true,
              wxContext: res.result,
              loading: false
            });
          },
          fail: (err) => {
            console.error("[\u4E91\u51FD\u6570] [wxContext] \u8C03\u7528\u5931\u8D25", err);
          }
        });
      },
      clear() {
        this.setData({
          hasWXContext: false,
          wxContext: {}
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/upload-file/upload-file.wxml
var require_upload_file = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/upload-file/upload-file.wxml"() {
    require_head();
    require_foot();
    Vue.component("packageCloud/pages/upload-file/upload-file", { template: `<div>



  
        <head is="head" data="{title: 'uploadFile'}" >
            

  
    
      
        
          
            
              \u6587\u4EF6 ID
            
            
              
            
          

          
            
          
        

        
          
            \u8FD4\u56DE
          
        
      

      
        
          
            
            
          
          \u9009\u62E9\u56FE\u7247
        
      
    
  

  
        <foot is="foot" >
            

        </foot>
    
        </head>
    </div>` });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/upload-file/upload-file.js
var require_upload_file2 = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/upload-file/upload-file.js"() {
    require_upload_file();
    var page = getPage("packageCloud/pages/upload-file/upload-file");
    page.template = "<div>\u6D4B\u8BD5</div>";
    page.json = `{
  "navigationBarTitleText": "\u4E0A\u4F20\u6587\u4EF6"
}`;
    var app = getApp();
    Page({
      onShareAppMessage() {
        return {
          title: "\u4E0A\u4F20\u6587\u4EF6",
          path: "page/cloud/pages/upload-file/upload-file"
        };
      },
      data: {
        fileUploaded: false,
        fileId: "",
        filePath: "",
        fromOtherPage: false
      },
      onLoad(options) {
        if (options.from) {
          this.setData({
            fromOtherPage: true
          });
        }
      },
      chooseImage() {
        const self = this;
        wx.chooseImage({
          count: 1,
          sizeType: ["compressed"],
          sourceType: ["album"],
          success(res) {
            console.log("chooseImage success, temp path is", res.tempFilePaths[0]);
            const filePath = res.tempFilePaths[0];
            wx.showLoading({
              title: "\u4E0A\u4F20\u4E2D"
            });
            app.getUserOpenIdViaCloud().then((openid) => {
              const cloudPath = "upload/" + openid + filePath.match(/\.[^.]+?$/)[0];
              console.log("cloudPath", cloudPath);
              wx.cloud.uploadFile({
                cloudPath,
                filePath,
                success: (res2) => {
                  console.log("[\u4E0A\u4F20\u6587\u4EF6] \u6210\u529F\uFF1A", res2);
                  app.globalData.fileId = res2.fileID;
                  self.setData({
                    fileUploaded: true,
                    fileId: res2.fileID,
                    filePath
                  });
                  wx.hideLoading();
                },
                fail: (err) => {
                  console.error("[\u4E0A\u4F20\u6587\u4EF6] \u5931\u8D25\uFF1A", err);
                  wx.hideLoading();
                  wx.showToast({
                    icon: "none",
                    title: "\u4E0A\u4F20\u5931\u8D25"
                  });
                }
              });
              return openid;
            }).catch((err) => {
              console.error(err);
              wx.hideLoading();
            });
          },
          fail({ errMsg }) {
            console.log("chooseImage fail, err is", errMsg);
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/download-file/download-file.wxml
var require_download_file = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/download-file/download-file.wxml"() {
    require_head();
    require_foot();
    Vue.component("packageCloud/pages/download-file/download-file", { template: `<div>



  
        <head is="head" data="{title: 'downloadFile'}" >
            

  
    
      
        
          
            
              \u6587\u4EF6 ID
            
            
              
            
          

          
            
              
            
          
        
        
      

      
        \u70B9\u51FB\u6309\u94AE\u5373\u53EF\u4ECE\u4E91\u7AEF\u5B58\u50A8\u4E0B\u8F7D\u6307\u5B9A\u4E91\u6587\u4EF6
        
          
            
              \u6587\u4EF6 ID
            
            
              
            
          
        

        
          \u4E0B\u8F7D\u6587\u4EF6
        
      
    
  

  
        <foot is="foot" >
            

        </foot>
    
        </head>
    </div>` });
  }
});

// miniprogram-demo/miniprogram/config.js
var require_config = __commonJS({
  "miniprogram-demo/miniprogram/config.js"(exports, module) {
    var host = "14592619.qcloud.la";
    var config = {
      requestUrl: "https://mp.weixin.qq.com",
      host,
      envId: "release-b86096",
      demoImageFileId: "cloud://release-b86096.7265-release-b86096-1258211818/demo.jpg",
      demoVideoFileId: "cloud://release-b86096.7265-release-b86096/demo.mp4"
    };
    module.exports = config;
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/download-file/download-file.js
var require_download_file2 = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/download-file/download-file.js"() {
    require_download_file();
    var page = getPage("packageCloud/pages/download-file/download-file");
    page.template = "<div>\u6D4B\u8BD5</div>";
    page.json = `{
  "navigationBarTitleText": "\u4E0B\u8F7D\u6587\u4EF6"
}`;
    var demoImageFileId = require_config().demoImageFileId;
    var app = getApp();
    Page({
      onShareAppMessage() {
        return {
          title: "\u4E0B\u8F7D\u6587\u4EF6",
          path: "page/cloud/pages/download-file/download-file"
        };
      },
      data: {
        fileDownloaded: false,
        fileId: "",
        filePath: "",
        loading: false
      },
      onLoad() {
        this.setData({
          fileId: app.globalData.fileId || demoImageFileId
        });
      },
      downloadFile() {
        const fileId = this.data.fileId;
        if (!fileId) {
          return;
        }
        const self = this;
        this.setData({
          loading: true
        });
        wx.cloud.downloadFile({
          fileID: fileId,
          success: (res) => {
            console.log("[\u4E0B\u8F7D\u6587\u4EF6] \u6210\u529F\uFF1A", res);
            self.setData({
              fileDownloaded: true,
              filePath: res.tempFilePath
            });
          },
          fail: (err) => {
            console.error("[\u4E0B\u8F7D\u6587\u4EF6] \u5931\u8D25\uFF1A", err);
          },
          complete: () => {
            self.setData({
              loading: false
            });
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/get-temp-file-url/get-temp-file-url.wxml
var require_get_temp_file_url = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/get-temp-file-url/get-temp-file-url.wxml"() {
    require_head();
    require_foot();
    Vue.component("packageCloud/pages/get-temp-file-url/get-temp-file-url", { template: `<div>



  
        <head is="head" data="{title: 'getTempFileURL'}" >
            

  
    
      
        
          
            
              \u6587\u4EF6 ID
            
            
              
            
          

          
            
              \u4E34\u65F6\u94FE\u63A5
            
            
              
            
          

          
            
              
            
          
        
        
      

      
        \u70B9\u51FB\u6309\u94AE\u5373\u53EF\u6839\u636E\u6587\u4EF6 ID \u6362\u53D6\u4E34\u65F6\u7F51\u7EDC\u94FE\u63A5
        
          
            
              \u6587\u4EF6 ID
            
            
              
            
          
        

        
          \u6362\u53D6\u4E34\u65F6\u94FE\u63A5
        
      
    
  

  
        <foot is="foot" >
            

        </foot>
    
        </head>
    </div>` });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/get-temp-file-url/get-temp-file-url.js
var require_get_temp_file_url2 = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/get-temp-file-url/get-temp-file-url.js"() {
    require_get_temp_file_url();
    var page = getPage("packageCloud/pages/get-temp-file-url/get-temp-file-url");
    page.template = "<div>\u6D4B\u8BD5</div>";
    page.json = `{
  "navigationBarTitleText": "\u6362\u53D6\u4E34\u65F6\u94FE\u63A5"
}`;
    var demoImageFileId = require_config().demoImageFileId;
    var app = getApp();
    Page({
      onShareAppMessage() {
        return {
          title: "\u83B7\u53D6\u4E34\u65F6\u94FE\u63A5",
          path: "page/cloud/pages/get-temp-file-url/get-temp-file-url"
        };
      },
      data: {
        fileTempURLDone: false,
        fileId: "",
        tempFileURL: "",
        maxAge: 0,
        loading: false
      },
      onLoad() {
        this.setData({
          fileId: app.globalData.fileId || demoImageFileId
        });
      },
      getTempFileURL() {
        const fileId = this.data.fileId;
        if (!fileId) {
          return;
        }
        const self = this;
        this.setData({
          loading: true
        });
        wx.cloud.getTempFileURL({
          fileList: [fileId],
          success: (res) => {
            console.log("[\u6362\u53D6\u4E34\u65F6\u94FE\u63A5] \u6210\u529F\uFF1A", res);
            if (res.fileList && res.fileList.length) {
              self.setData({
                fileTempURLDone: true,
                tempFileURL: res.fileList[0].tempFileURL,
                maxAge: res.fileList[0].maxAge
              });
            }
          },
          fail: (err) => {
            console.error("[\u6362\u53D6\u4E34\u65F6\u94FE\u63A5] \u5931\u8D25\uFF1A", err);
          },
          complete: () => {
            self.setData({
              loading: false
            });
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/delete-file/delete-file.wxml
var require_delete_file = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/delete-file/delete-file.wxml"() {
    require_head();
    require_foot();
    Vue.component("packageCloud/pages/delete-file/delete-file", { template: `<div>



  
        <head is="head" data="{title: 'deleteFile'}" >
            

  
    
      
        
          \u8FD8\u672A\u4E0A\u4F20\u8FC7\u6587\u4EF6\uFF0C\u8BF7\u5148\u70B9\u51FB\u6309\u94AE\u4E0A\u4F20
        
        
        
          
            \u4E0A\u4F20\u6587\u4EF6
          
        
      

      
        \u70B9\u51FB\u6309\u94AE\u5373\u53EF\u5220\u9664\u6307\u5B9A\u6587\u4EF6
        
          
            
              \u6587\u4EF6 ID
            
            
              
            
          
        

        
          \u5220\u9664\u6587\u4EF6
        
      
    
  

  
        <foot is="foot" >
            

        </foot>
    
        </head>
    </div>` });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/delete-file/delete-file.js
var require_delete_file2 = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/delete-file/delete-file.js"() {
    require_delete_file();
    var page = getPage("packageCloud/pages/delete-file/delete-file");
    page.template = "<div>\u6D4B\u8BD5</div>";
    page.json = `{
  "navigationBarTitleText": "\u5220\u9664\u6587\u4EF6"
}`;
    var app = getApp();
    Page({
      onShareAppMessage() {
        return {
          title: "\u5220\u9664\u6587\u4EF6",
          path: "page/cloud/pages/delete-file/delete-file"
        };
      },
      data: {
        fileId: "",
        loading: false
      },
      onLoad() {
        this.setData({
          fileId: app.globalData.fileId || ""
        });
      },
      onShow() {
        this.setData({
          fileId: app.globalData.fileId || ""
        });
      },
      deleteFile() {
        const fileId = this.data.fileId;
        if (!fileId) {
          return;
        }
        const self = this;
        this.setData({
          loading: true
        });
        wx.cloud.deleteFile({
          fileList: [fileId],
          success: (res) => {
            console.log("[\u5220\u9664\u6587\u4EF6] \u6210\u529F\uFF1A", res);
            if (res.fileList && res.fileList.length) {
              self.setData({
                fileId: ""
              });
            }
            app.globalData.fileId = "";
            wx.showToast({
              title: "\u5220\u9664\u6210\u529F"
            });
          },
          fail: (err) => {
            console.error("[\u5220\u9664\u6587\u4EF6] \u5931\u8D25\uFF1A", err);
          },
          complete: () => {
            self.setData({
              loading: false
            });
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/cloud-file-component/cloud-file-component.wxml
var require_cloud_file_component = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/cloud-file-component/cloud-file-component.wxml"() {
    require_head();
    require_foot();
    Vue.component("packageCloud/pages/cloud-file-component/cloud-file-component", { template: `<div>



  
        <head is="head" data="{title: 'Component Support'}" >
            

  
    
      \u5C0F\u7A0B\u5E8F\u7EC4\u4EF6\u652F\u6301\u4F20\u5165\u4E91\u6587\u4EF6 ID
      
        
          
            \u6587\u4EF6 ID
          
          
            
          
        

        
          
            
          
        
      

      
      
        
          
            \u6587\u4EF6 ID
          
          
            
          
        

        
          
            
          
        
      
    
  

  
        <foot is="foot" >
            

        </foot>
    
        </head>
    
</div>` });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/cloud-file-component/cloud-file-component.js
var require_cloud_file_component2 = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/cloud-file-component/cloud-file-component.js"() {
    require_cloud_file_component();
    var page = getPage("packageCloud/pages/cloud-file-component/cloud-file-component");
    page.template = "<div>\u6D4B\u8BD5</div>";
    page.json = `{
  "navigationBarTitleText": "\u7EC4\u4EF6\u652F\u6301"
}`;
    var { demoImageFileId, demoVideoFileId } = require_config();
    Page({
      onShareAppMessage() {
        return {
          title: "\u7EC4\u4EF6\u652F\u6301",
          path: "page/cloud/pages/cloud-file-component/cloud-file-component"
        };
      },
      data: {
        imageFileId: demoImageFileId,
        videoFileId: demoVideoFileId
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/crud/crud.wxml
var require_crud = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/crud/crud.wxml"() {
    require_head();
    require_foot();
    Vue.component("packageCloud/pages/crud/crud", { template: `<div>



  
        <head is="head" data="{title: 'CRUD'}" >
            

  
    
      
        
          
            
          
          
            
          
        
      

      Todo List
      
        
          
            
            
          
          {{item.description}}
          
        

        
          
            
          
        
      

      
        \u65E0\u6570\u636E
      
    
  

  
        <foot is="foot" >
            

        </foot>
    
        </head>
    </div>` });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/crud/crud.js
var require_crud2 = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/crud/crud.js"() {
    require_crud();
    var page = getPage("packageCloud/pages/crud/crud");
    page.template = "<div>\u6D4B\u8BD5</div>";
    page.json = `{
  "navigationBarTitleText": "\u57FA\u672C\u64CD\u4F5C"
}`;
    var app = getApp();
    Page({
      onShareAppMessage() {
        return {
          title: "\u57FA\u672C\u64CD\u4F5C",
          path: "page/cloud/pages/crud/crud"
        };
      },
      data: {
        openid: "",
        todoListFetched: false,
        todoList: [],
        searchContent: "",
        newContent: "",
        filtered: false,
        loading: false
      },
      onLoad() {
        if (app.globalData.openid) {
          this.setData({
            openid: app.globalData.openid
          });
          this.queryTodoList();
        } else {
          wx.showLoading({
            title: "\u6B63\u5728\u521D\u59CB\u5316..."
          });
          app.getUserOpenIdViaCloud().then((openid) => {
            this.setData({
              openid
            });
            wx.hideLoading();
            this.queryTodoList();
            return openid;
          }).catch((err) => {
            console.error(err);
            wx.hideLoading();
            wx.showToast({
              icon: "none",
              title: "\u521D\u59CB\u5316\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC"
            });
          });
        }
      },
      onShow() {
        if (this.data.openid) {
          this.queryTodoList();
        }
      },
      createTodo() {
        if (this.data.loading) {
          return;
        }
        const { newContent } = this.data;
        if (!newContent) {
          return;
        }
        this.setData({ loading: true });
        const db = wx.cloud.database();
        db.collection("todos").add({
          data: {
            description: newContent,
            done: false
          },
          success: (res) => {
            this.setData({
              todoList: [
                ...this.data.todoList,
                {
                  _id: res._id,
                  _openid: this.data.openid,
                  description: newContent,
                  done: false
                }
              ],
              newContent: ""
            });
            wx.showToast({
              title: "\u65B0\u589E\u8BB0\u5F55\u6210\u529F"
            });
            console.log("[\u6570\u636E\u5E93] [\u65B0\u589E\u8BB0\u5F55] \u6210\u529F\uFF0C\u8BB0\u5F55 _id: ", res._id);
          },
          fail: (err) => {
            wx.showToast({
              icon: "none",
              title: "\u65B0\u589E\u8BB0\u5F55\u5931\u8D25"
            });
            console.error("[\u6570\u636E\u5E93] [\u65B0\u589E\u8BB0\u5F55] \u5931\u8D25\uFF1A", err);
          },
          complete: () => {
            this.setData({ loading: false });
          }
        });
      },
      queryTodoList() {
        wx.showLoading({
          title: "\u6B63\u5728\u67E5\u8BE2..."
        });
        const db = wx.cloud.database();
        db.collection("todos").where({
          _openid: this.data.openid
        }).get({
          success: (res) => {
            this.setData({
              todoListFetched: true,
              todoList: res.data,
              filtered: false
            });
            console.log("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u6210\u529F: ", res);
          },
          fail: (err) => {
            wx.showToast({
              icon: "none",
              title: "\u67E5\u8BE2\u8BB0\u5F55\u5931\u8D25"
            });
            console.error("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u5931\u8D25\uFF1A", err);
          },
          complete: () => {
            wx.hideLoading();
          }
        });
      },
      searchTodo() {
        const { searchContent } = this.data;
        if (!searchContent) {
          this.queryTodoList();
          return;
        }
        const db = wx.cloud.database();
        let descriptionCondition = searchContent;
        const execResult = /^\/([\s\S]*)\//.exec(searchContent);
        if (execResult) {
          const reStr = execResult[1].trim().replace(/\s+/g, "|");
          descriptionCondition = db.RegExp({
            regexp: reStr
          });
        }
        wx.showLoading({
          title: "\u6B63\u5728\u67E5\u8BE2..."
        });
        db.collection("todos").where({
          _openid: this.data.openid,
          description: descriptionCondition
        }).get({
          success: (res) => {
            this.setData({
              todoList: res.data,
              filtered: true
            });
            console.log("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u6210\u529F: ", res);
          },
          fail: (err) => {
            wx.showToast({
              icon: "none",
              title: "\u67E5\u8BE2\u8BB0\u5F55\u5931\u8D25"
            });
            console.error("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u5931\u8D25\uFF1A", err);
          },
          complete: () => {
            wx.hideLoading();
          }
        });
      },
      toggleComplete(e) {
        if (this.data.loading) {
          return;
        }
        const { id: todoId, index } = e.currentTarget.dataset;
        const todo = this.data.todoList[index];
        this.setData({ loading: true });
        const db = wx.cloud.database();
        db.collection("todos").doc(todoId).update({
          data: { done: !todo.done },
          success: () => {
            this.setData({
              [`todoList[${index}].done`]: !todo.done
            });
          },
          fail: (err) => {
            wx.showToast({
              icon: "none",
              title: "\u66F4\u65B0\u5931\u8D25"
            });
            console.error("[\u6570\u636E\u5E93] [\u66F4\u65B0\u8BB0\u5F55] \u5931\u8D25\uFF1A", err);
          },
          complete: () => {
            this.setData({ loading: false });
          }
        });
      },
      toDetail(e) {
        const { id: todoId } = e.currentTarget.dataset;
        wx.navigateTo({
          url: `/page/cloud/pages/crud-detail/crud-detail?todoId=${todoId}`
        });
      },
      onInputSearchContent(e) {
        this.setData({
          searchContent: e.detail.value
        });
      },
      onInputNewContent(e) {
        this.setData({
          newContent: e.detail.value
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/crud-detail/crud-detail.wxml
var require_crud_detail = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/crud-detail/crud-detail.wxml"() {
    require_head();
    require_foot();
    Vue.component("packageCloud/pages/crud-detail/crud-detail", { template: `<div>



  
        <head is="head" data="{title: 'CRUD'}" >
            

  
    
      \u5185\u5BB9
      
        
          
            
          
        
      

      
        \u66F4\u65B0 Todo
        \u5220\u9664 Todo
      
    
  

  
        <foot is="foot" >
            

        </foot>
    
        </head>
    </div>` });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/crud-detail/crud-detail.js
var require_crud_detail2 = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/crud-detail/crud-detail.js"() {
    require_crud_detail();
    var page = getPage("packageCloud/pages/crud-detail/crud-detail");
    page.template = "<div>\u6D4B\u8BD5</div>";
    page.json = `{
  "navigationBarTitleText": "\u57FA\u672C\u64CD\u4F5C"
}`;
    var app = getApp();
    Page({
      onShareAppMessage() {
        return {
          title: "\u57FA\u672C\u64CD\u4F5C",
          path: "page/cloud/pages/crud/crud"
        };
      },
      data: {
        openid: "",
        todoId: "",
        description: "",
        done: false,
        updating: false,
        deleting: false
      },
      onLoad(options) {
        const { todoId } = options;
        this.setData({
          todoId
        });
        if (app.globalData.openid) {
          this.setData({
            openid: app.globalData.openid
          });
          this.queryTodo();
        } else {
          wx.showLoading({
            title: "\u6B63\u5728\u521D\u59CB\u5316..."
          });
          app.getUserOpenIdViaCloud().then((openid) => {
            this.setData({
              openid
            });
            wx.hideLoading();
            this.queryTodo();
            return openid;
          }).catch((err) => {
            console.error(err);
            wx.hideLoading();
          });
        }
      },
      queryTodo() {
        wx.showLoading({
          title: "\u6B63\u5728\u67E5\u8BE2..."
        });
        const db = wx.cloud.database();
        db.collection("todos").doc(this.data.todoId).get({
          success: (res) => {
            this.setData({
              description: res.data.description,
              done: res.data.done
            });
            console.log("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u6210\u529F: ", res);
          },
          fail: (err) => {
            wx.showToast({
              icon: "none",
              title: "\u67E5\u8BE2\u8BB0\u5F55\u5931\u8D25"
            });
            console.error("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u5931\u8D25\uFF1A", err);
          },
          complete: () => {
            wx.hideLoading();
          }
        });
      },
      updateTodo() {
        if (this.data.updating || !this.data.todoId) {
          return;
        }
        const { todoId, description } = this.data;
        if (!description) {
          return;
        }
        this.setData({ updating: true });
        const db = wx.cloud.database();
        db.collection("todos").doc(todoId).update({
          data: {
            description
          },
          success: () => {
            console.log("he");
            wx.showToast({
              title: "\u66F4\u65B0\u6210\u529F"
            });
            wx.navigateBack();
          },
          fail: (err) => {
            wx.showToast({
              icon: "none",
              title: "\u66F4\u65B0\u5931\u8D25"
            });
            console.error("[\u6570\u636E\u5E93] [\u66F4\u65B0\u8BB0\u5F55] \u5931\u8D25\uFF1A", err);
          },
          complete: () => {
            this.setData({ updating: false });
          }
        });
      },
      removeTodo() {
        if (this.data.deleting || !this.data.todoId) {
          return;
        }
        const { todoId } = this.data;
        this.setData({ deleting: true });
        const db = wx.cloud.database();
        db.collection("todos").doc(todoId).remove({
          success: () => {
            wx.showToast({
              title: "\u5220\u9664\u6210\u529F"
            });
            wx.navigateBack();
          },
          fail: (err) => {
            wx.showToast({
              icon: "none",
              title: "\u5220\u9664\u5931\u8D25"
            });
            console.error("[\u6570\u636E\u5E93] [\u5220\u9664\u8BB0\u5F55] \u5931\u8D25\uFF1A", err);
          },
          complete: () => {
            this.setData({ deleting: false });
          }
        });
      },
      onInputContent(e) {
        this.setData({
          description: e.detail.value
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/db-permission/db-permission.wxml
var require_db_permission = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/db-permission/db-permission.wxml"() {
    require_head();
    require_foot();
    Vue.component("packageCloud/pages/db-permission/db-permission", { template: `<div>



  
        <head is="head" data="{title: 'Permission'}" >
            

  
    
      
        
          
            \u6743\u9650\u7C7B\u578B
          
          
            
              {{permissions[currentPermissionIndex]}}
            
          
        
      

      
        

          
            
              
                
                  
                    {{item}}
                  
                
                
              
              
                
                  
                    
                      
                        
                      
                    
                  

                  
                    \u8BBE\u7F6E\u4E2A\u6027\u7B7E\u540D
                    \u83B7\u53D6\u4E2A\u6027\u7B7E\u540D
                  
                

                
                  
                    
                      
                        
                      
                    
                  

                  
                    \u8BBE\u7F6E\u4E2A\u6027\u7B7E\u540D
                    \u83B7\u53D6\u4E2A\u6027\u7B7E\u540D
                  
                
              
            
          

          
            
              
                
                  
                    {{item}}
                  
                
                
              
              
                
                  
                    
                      
                        
                      
                    
                  

                  
                    \u8BBE\u7F6E\u90AE\u7BB1
                    \u83B7\u53D6\u90AE\u7BB1
                  
                

                
                  
                    
                      
                        
                      
                    
                  

                  
                    \u8BBE\u7F6E\u90AE\u7BB1
                    \u83B7\u53D6\u90AE\u7BB1
                  
                
              
            
          

          
            
              
                
                  
                    
                  
                
              

              
                \u8BBE\u7F6E\u5546\u54C1\u4EF7\u683C
                \u83B7\u53D6\u5546\u54C1\u4EF7\u683C
              
            
          

          
            
              
                
                  
                    
                  
                
              

              
                \u8BBE\u7F6E\u540E\u53F0\u6D41\u6C34\u6570\u636E
                \u83B7\u53D6\u540E\u53F0\u6D41\u6C34\u6570\u636E
              
            
          

        
      
    
  

  
        <foot is="foot" >
            

        </foot>
    
        </head>
    </div>` });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/db-permission/db-permission.js
var require_db_permission2 = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/db-permission/db-permission.js"() {
    require_db_permission();
    var page = getPage("packageCloud/pages/db-permission/db-permission");
    page.template = "<div>\u6D4B\u8BD5</div>";
    page.json = `{
  "navigationBarTitleText": "\u6743\u9650\u7BA1\u7406"
}`;
    var app = getApp();
    var sliderWidth = 96;
    Page({
      onShareAppMessage() {
        return {
          title: "\u6743\u9650\u7BA1\u7406",
          path: "page/cloud/pages/db-permission/db-permission"
        };
      },
      data: {
        openid: "",
        permissions: ["\u4EC5\u521B\u5EFA\u8005\u53EF\u5199\uFF0C\u6240\u6709\u4EBA\u53EF\u8BFB", "\u4EC5\u521B\u5EFA\u8005\u53EF\u8BFB\u5199", "\u4EC5\u7BA1\u7406\u7AEF\u53EF\u5199\uFF0C\u6240\u6709\u4EBA\u53EF\u8BFB", "\u4EC5\u7BA1\u7406\u7AEF\u53EF\u8BFB\u5199"],
        currentPermissionIndex: 0,
        tabs: [
          ["\u6211\u7684\u4E2A\u6027\u7B7E\u540D", "\u963F\u767D\u7684\u4E2A\u6027\u7B7E\u540D"],
          ["\u6211\u7684\u90AE\u7BB1", "\u963F\u7EFF\u7684\u90AE\u7BB1"],
          [],
          []
        ],
        activeTabIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        querying: false,
        updating: false,
        hasMyWhatsUp: false,
        myWhatsUp: "",
        adminWhatsUp: "",
        myEmail: "",
        adminEmail: "",
        hasProduct: false,
        product: {},
        serverData: ""
      },
      onLoad() {
        if (app.globalData.openid) {
          this.setData({
            openid: app.globalData.openid
          });
        } else {
          wx.showLoading({
            title: "\u6B63\u5728\u521D\u59CB\u5316..."
          });
          app.getUserOpenIdViaCloud().then((openid) => {
            this.setData({
              openid
            });
            wx.hideLoading();
            return openid;
          }).catch((err) => {
            console.error(err);
            wx.hideLoading();
            wx.showModal({
              content: "\u521D\u59CB\u5316\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC",
              showCancel: false
            });
          });
        }
        const {
          myWhatsUp,
          adminWhatsUp,
          myEmail,
          adminEmail
        } = app.globalData;
        this.setData({
          hasMyWhatsUp: !!myWhatsUp,
          myWhatsUp: myWhatsUp || "",
          adminWhatsUp: adminWhatsUp || "",
          myEmail: myEmail || "",
          adminEmail: adminEmail || ""
        });
        this.initTabs();
      },
      initTabs() {
        const currentPermissionIndex = this.data.currentPermissionIndex;
        const tabLength = this.data.tabs[currentPermissionIndex].length;
        const that = this;
        wx.getSystemInfo({
          success(res) {
            that.setData({
              sliderLeft: (res.windowWidth / tabLength - sliderWidth) / 2,
              sliderOffset: res.windowWidth / tabLength * that.data.activeTabIndex
            });
          }
        });
      },
      onTabClick(e) {
        this.setData({
          sliderOffset: e.currentTarget.offsetLeft,
          activeTabIndex: Number(e.currentTarget.id)
        });
      },
      onPermissionChange(e) {
        const oldIndex = this.data.currentPermissionIndex;
        const newIndex = Number(e.detail.value);
        if (oldIndex !== newIndex) {
          this.setData({
            currentPermissionIndex: Number(newIndex),
            activeTabIndex: 0
          });
          this.initTabs();
        }
      },
      bindInput(e) {
        const { name } = e.currentTarget.dataset;
        this.setData({
          [name]: e.detail.value
        });
      },
      showErrorModal(name, err) {
        let errMsg = name + "\u5931\u8D25";
        if (err.toString().indexOf("permission denied") >= 0) {
          errMsg += "\uFF1A\u65E0\u6743\u9650\u64CD\u4F5C";
        }
        wx.showModal({
          content: errMsg,
          showCancel: false
        });
      },
      queryOneByOpenId(collection, openid, options = {
        showLoading: false,
        showError: false,
        success: null,
        fail: null
      }) {
        const {
          showLoading,
          showError,
          success: successCallback,
          fail: failCallback
        } = options;
        if (showLoading) {
          this.setData({
            querying: true
          });
        }
        const db = wx.cloud.database();
        const _openid = openid || this.data.openid;
        db.collection(collection).where({
          _openid
        }).get({
          success: (res) => {
            console.log("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u6210\u529F: ", res);
            const resFirstData = res.data[0] || {};
            if (resFirstData._openid && resFirstData._openid !== _openid) {
              const err = new Error("database permission denied");
              if (showError)
                this.showErrorModal("\u83B7\u53D6", err);
              if (failCallback)
                failCallback.call(this, err);
            } else if (successCallback) {
              successCallback.call(this, res.data[0]);
            }
          },
          fail: (err) => {
            if (showError)
              this.showErrorModal("\u83B7\u53D6", err);
            console.error("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u5931\u8D25\uFF1A", err);
            if (failCallback)
              failCallback.call(this, err);
          },
          complete: () => {
            if (showLoading) {
              this.setData({
                querying: false
              });
            }
          }
        });
      },
      updateOneByOpenId(collection, openid, data, options = {
        showLoading: false,
        showError: false,
        success: null,
        fail: null
      }) {
        const {
          showLoading,
          showError,
          success: successCallback,
          fail: failCallback
        } = options;
        if (showLoading) {
          this.setData({
            updating: true
          });
        }
        const db = wx.cloud.database();
        this.queryOneByOpenId(collection, openid || "", {
          success: (dbData) => {
            if (dbData) {
              db.collection(collection).doc(dbData._id).update({
                data,
                success: (res) => {
                  console.log("[\u6570\u636E\u5E93] [\u66F4\u65B0\u8BB0\u5F55] \u6210\u529F: ", res);
                  if (successCallback)
                    successCallback.call(this, res.stats);
                },
                fail: (err) => {
                  if (showError)
                    this.showErrorModal("\u8BBE\u7F6E", err);
                  console.error("[\u6570\u636E\u5E93] [\u66F4\u65B0\u8BB0\u5F55] \u5931\u8D25\uFF1A", err);
                  if (failCallback)
                    failCallback.call(this, err);
                },
                complete: () => {
                  if (showLoading) {
                    this.setData({
                      updating: false
                    });
                  }
                }
              });
            } else if (!openid || openid === this.data.openid) {
              db.collection(collection).add({
                data,
                success: (res) => {
                  console.log("[\u6570\u636E\u5E93] [\u65B0\u589E\u8BB0\u5F55] \u6210\u529F\uFF1A", res);
                  if (successCallback)
                    successCallback.call(this, { _id: res._id });
                },
                fail: (err) => {
                  if (showError)
                    this.showErrorModal("\u8BBE\u7F6E", err);
                  console.error("[\u6570\u636E\u5E93] [\u65B0\u589E\u8BB0\u5F55] \u5931\u8D25\uFF1A", err);
                  if (failCallback)
                    failCallback.call(this, err);
                },
                complete: () => {
                  if (showLoading) {
                    this.setData({
                      updating: false
                    });
                  }
                }
              });
            } else {
              const err = new Error("database permission denied");
              if (showError)
                this.showErrorModal("\u8BBE\u7F6E", err);
              if (failCallback)
                failCallback.call(this, err);
              if (showLoading) {
                this.setData({
                  updating: false
                });
              }
            }
          },
          fail: (err) => {
            if (showError)
              this.showErrorModal("\u8BBE\u7F6E", err);
            if (failCallback)
              failCallback.call(this, err);
            if (showLoading) {
              this.setData({
                updating: false
              });
            }
          }
        });
      },
      queryMyWhatsUp() {
        this.queryOneByOpenId("perm1", "", {
          showLoading: true,
          showError: true,
          success: (data) => {
            const content = data && data.whatsUp || "";
            wx.showModal({
              title: "\u83B7\u53D6\u6210\u529F",
              content: content ? "\u4E2A\u6027\u7B7E\u540D\u4E3A\uFF1A" + content : "\u4E2A\u6027\u7B7E\u540D\u4E3A\u7A7A",
              showCancel: false
            });
          }
        });
      },
      updateMyWhatsUp() {
        const data = {
          whatsUp: this.data.myWhatsUp
        };
        this.updateOneByOpenId("perm1", "", data, {
          showLoading: true,
          showError: true,
          success: () => {
            app.globalData.myWhatsUp = this.data.myWhatsUp;
            this.setData({
              hasMyWhatsUp: true
            });
            wx.showModal({
              content: "\u8BBE\u7F6E\u6210\u529F",
              showCancel: false
            });
          }
        });
      },
      queryAdminWhatsUp() {
        this.queryOneByOpenId("perm1", "kiki", {
          showLoading: true,
          showError: true,
          success: (data) => {
            const content = data && data.whatsUp || "";
            wx.showModal({
              title: "\u83B7\u53D6\u6210\u529F",
              content: content ? "\u4E2A\u6027\u7B7E\u540D\u4E3A\uFF1A" + content : "\u4E2A\u6027\u7B7E\u540D\u4E3A\u7A7A",
              showCancel: false
            });
          }
        });
      },
      updateAdminWhatsUp() {
        const data = {
          whatsUp: this.data.adminWhatsUp
        };
        this.updateOneByOpenId("perm1", "kiki", data, {
          showLoading: true,
          showError: true,
          success: (res) => {
            if (res.updated === 0) {
              wx.showModal({
                content: "\u8BBE\u7F6E\u5931\u8D25\uFF1A\u65E0\u6743\u9650\u64CD\u4F5C",
                showCancel: false
              });
            } else {
              app.globalData.adminWhatsUp = this.data.adminWhatsUp;
              wx.showModal({
                content: "\u8BBE\u7F6E\u6210\u529F",
                showCancel: false
              });
            }
          }
        });
      },
      queryMyEmail() {
        this.queryOneByOpenId("perm2", "", {
          showLoading: true,
          showError: true,
          success: (data) => {
            const content = data && data.email || "";
            wx.showModal({
              title: "\u83B7\u53D6\u6210\u529F",
              content: content ? "\u90AE\u7BB1\u4E3A\uFF1A" + content : "\u90AE\u7BB1\u4E3A\u7A7A",
              showCancel: false
            });
          }
        });
      },
      updateMyEmail() {
        const data = {
          email: this.data.myEmail
        };
        this.updateOneByOpenId("perm2", "", data, {
          showLoading: true,
          showError: true,
          success: () => {
            app.globalData.myEmail = this.data.myEmail;
            wx.showModal({
              content: "\u8BBE\u7F6E\u6210\u529F",
              showCancel: false
            });
          }
        });
      },
      queryAdminEmail() {
        this.queryOneByOpenId("perm2", "popo", {
          showLoading: true,
          showError: true,
          success: (data) => {
            const content = data && data.email || "";
            wx.showModal({
              title: "\u83B7\u53D6\u6210\u529F",
              content: content ? "\u90AE\u7BB1\u4E3A\uFF1A" + content : "\u90AE\u7BB1\u4E3A\u7A7A",
              showCancel: false
            });
          }
        });
      },
      updateAdminEmail() {
        const data = {
          email: this.data.adminEmail
        };
        this.updateOneByOpenId("perm2", "popo", data, {
          showLoading: true,
          showError: true,
          success: () => {
            app.globalData.adminEmail = this.data.adminEmail;
            wx.showModal({
              content: "\u8BBE\u7F6E\u6210\u529F",
              showCancel: false
            });
          }
        });
      },
      queryProduct() {
        this.queryOneByOpenId("perm3", "admin", {
          showLoading: true,
          showError: true,
          success: (data) => {
            const price = data && data.price || null;
            wx.showModal({
              title: "\u83B7\u53D6\u6210\u529F",
              content: price !== null ? "\u5546\u54C1\u4EF7\u683C\u4E3A\uFF1A" + price : "\u5546\u54C1\u4EF7\u683C\u6682\u672A\u8BBE\u7F6E",
              showCancel: false
            });
          }
        });
      },
      updateProductPrice() {
        const data = {
          price: parseInt(this.data.product.price, 10)
        };
        this.updateOneByOpenId("perm3", "admin", data, {
          showLoading: true,
          showError: true,
          success: () => {
            wx.showModal({
              content: "\u8BBE\u7F6E\u6210\u529F",
              showCancel: false
            });
          }
        });
      },
      queryServerData() {
        this.queryOneByOpenId("perm4", "server", {
          showLoading: true,
          showError: true,
          success: (data) => {
            const content = data && data.serverData || "";
            wx.showModal({
              title: "\u83B7\u53D6\u6210\u529F",
              content: content ? "\u540E\u53F0\u6D41\u6C34\u6570\u636E\u4E3A\uFF1A" + content : "\u540E\u53F0\u6D41\u6C34\u6570\u636E\u4E3A\u7A7A",
              showCancel: false
            });
          }
        });
      },
      updateServerData() {
        const data = {
          data: this.data.serverData
        };
        this.updateOneByOpenId("perm4", "server", data, {
          showLoading: true,
          showError: true,
          success: () => {
            wx.showModal({
              content: "\u8BBE\u7F6E\u6210\u529F",
              showCancel: false
            });
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/server-date/server-date.wxml
var require_server_date = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/server-date/server-date.wxml"() {
    require_head();
    require_foot();
    Vue.component("packageCloud/pages/server-date/server-date", { template: `<div>



  
        <head is="head" data="{title: 'db.serverDate'}" >
            

  
    
      
        \u670D\u52A1\u7AEF\u65F6\u95F4
        
          \u5F88\u591A\u65F6\u5019\u6211\u4EEC\u5E0C\u671B\u8BB0\u5F55\u6570\u636E\u7684\u521B\u5EFA\u65F6\u95F4
          \u5728\u5C0F\u7A0B\u5E8F\u7AEF\u4F7F\u7528 Date \u5BF9\u8C61\u521B\u5EFA\u7684\u662F\u5BA2\u6237\u7AEF\u65F6\u95F4\uFF08\u53EF\u88AB\u4EFB\u610F\u4FEE\u6539\uFF09\uFF0C\u800C\u975E\u670D\u52A1\u7AEF\u65F6\u95F4
          \u8FD9\u65F6\u53EF\u4EE5\u4F7F\u7528\u4E91\u5F00\u53D1\u63D0\u4F9B\u7684 serverDate \u5BF9\u8C61\uFF0C\u5728\u8BF7\u6C42\u88AB\u5904\u7406\u65F6\u4F1A\u81EA\u52A8\u8F6C\u6362\u6210\u670D\u52A1\u7AEF\u65F6\u95F4
        
        
          
            \u5BA2\u6237\u7AEF\u65F6\u95F4
            {{clientDateFormatted}}
          
          
            \u670D\u52A1\u7AEF\u65F6\u95F4
            {{serverDateFormatted}}
          
          
            \u65F6\u95F4\u5DEE\u8DDD
            {{delta}} \u6BEB\u79D2
          
        
      
      
        \u63D2\u5165\u6570\u636E
      
    
  

  
        <foot is="foot" >
            

        </foot>
    
        </head>
    
</div>` });
  }
});

// miniprogram-demo/miniprogram/util/util.js
var require_util = __commonJS({
  "miniprogram-demo/miniprogram/util/util.js"(exports, module) {
    function formatTime(time) {
      if (typeof time !== "number" || time < 0) {
        return time;
      }
      const hour = parseInt(time / 3600, 10);
      time %= 3600;
      const minute = parseInt(time / 60, 10);
      time = parseInt(time % 60, 10);
      const second = time;
      return [hour, minute, second].map(function(n) {
        n = n.toString();
        return n[1] ? n : "0" + n;
      }).join(":");
    }
    function formatLocation(longitude, latitude) {
      if (typeof longitude === "string" && typeof latitude === "string") {
        longitude = parseFloat(longitude);
        latitude = parseFloat(latitude);
      }
      longitude = longitude.toFixed(2);
      latitude = latitude.toFixed(2);
      return {
        longitude: longitude.toString().split("."),
        latitude: latitude.toString().split(".")
      };
    }
    function fib(n) {
      if (n < 1)
        return 0;
      if (n <= 2)
        return 1;
      return fib(n - 1) + fib(n - 2);
    }
    function formatLeadingZeroNumber(n, digitNum = 2) {
      n = n.toString();
      const needNum = Math.max(digitNum - n.length, 0);
      return new Array(needNum).fill(0).join("") + n;
    }
    function formatDateTime(date, withMs = false) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
      const ms = date.getMilliseconds();
      let ret = [year, month, day].map((value) => formatLeadingZeroNumber(value, 2)).join("-") + " " + [hour, minute, second].map((value) => formatLeadingZeroNumber(value, 2)).join(":");
      if (withMs) {
        ret += "." + formatLeadingZeroNumber(ms, 3);
      }
      return ret;
    }
    function compareVersion(v1, v2) {
      v1 = v1.split(".");
      v2 = v2.split(".");
      const len = Math.max(v1.length, v2.length);
      while (v1.length < len) {
        v1.push("0");
      }
      while (v2.length < len) {
        v2.push("0");
      }
      for (let i = 0; i < len; i++) {
        const num1 = parseInt(v1[i], 10);
        const num2 = parseInt(v2[i], 10);
        if (num1 > num2) {
          return 1;
        } else if (num1 < num2) {
          return -1;
        }
      }
      return 0;
    }
    module.exports = {
      formatTime,
      formatLocation,
      fib,
      formatDateTime,
      compareVersion
    };
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/server-date/server-date.js
var require_server_date2 = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/server-date/server-date.js"() {
    require_server_date();
    var page = getPage("packageCloud/pages/server-date/server-date");
    page.template = "<div>\u6D4B\u8BD5</div>";
    page.json = `{
  "navigationBarTitleText": "\u670D\u52A1\u7AEF\u65F6\u95F4"
}`;
    var util = require_util();
    var app = getApp();
    var collection = "serverDate";
    Page({
      onShareAppMessage() {
        return {
          title: "\u670D\u52A1\u7AEF\u65F6\u95F4",
          path: "page/cloud/pages/server-date/server-date"
        };
      },
      data: {
        openid: "",
        loading: false,
        clientDate: null,
        serverDate: null,
        clientDateFormatted: "",
        serverDateFormatted: "",
        delta: 0
      },
      onLoad() {
        if (app.globalData.openid) {
          this.setData({
            openid: app.globalData.openid
          });
        } else {
          wx.showLoading({
            title: "\u6B63\u5728\u521D\u59CB\u5316..."
          });
          app.getUserOpenIdViaCloud().then((openid) => {
            this.setData({
              openid
            });
            wx.hideLoading();
            return openid;
          }).catch((err) => {
            console.error(err);
            wx.hideLoading();
            wx.showToast({
              icon: "none",
              title: "\u521D\u59CB\u5316\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC"
            });
          });
        }
      },
      showError() {
        wx.showToast({
          icon: "none",
          title: "\u63D2\u5165\u5931\u8D25"
        });
      },
      completeTask() {
        this.setData({
          loading: false
        });
      },
      insertOrUpdateData(existedData, data) {
        const db = wx.cloud.database();
        if (existedData._id) {
          db.collection(collection).doc(existedData._id).update({ data }).then((res) => {
            this.setCompletedData(existedData._id);
            return res;
          }).catch((err) => {
            this.showError();
            console.error("[\u6570\u636E\u5E93] [\u66F4\u65B0\u8BB0\u5F55] \u5931\u8D25\uFF1A", err);
            this.completeTask();
          });
        } else {
          db.collection(collection).add({ data }).then((res) => {
            this.setCompletedData(res._id);
            return res;
          }).catch((err) => {
            this.showError();
            console.error("[\u6570\u636E\u5E93] [\u65B0\u589E\u8BB0\u5F55] \u5931\u8D25\uFF1A", err);
            this.completeTask();
          });
        }
      },
      setCompletedData(id) {
        const db = wx.cloud.database();
        db.collection(collection).doc(id).get().then((res) => {
          this.setData({
            delta: Math.abs(res.data.time - this.data.clientDate),
            serverDate: res.data.time,
            clientDateFormatted: util.formatDateTime(this.data.clientDate, true),
            serverDateFormatted: util.formatDateTime(res.data.time, true)
          });
          wx.showToast({
            title: "\u63D2\u5165\u6210\u529F"
          });
          this.completeTask();
          return res;
        }).catch((err) => {
          this.showError();
          console.error("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u5931\u8D25\uFF1A", err);
          this.completeTask();
        });
      },
      insertData() {
        const db = wx.cloud.database();
        const data = {
          time: db.serverDate()
        };
        this.setData({
          loading: true
        });
        db.collection(collection).where({
          _openid: this.data.openid
        }).get().then((res) => {
          this.setData({
            clientDate: new Date()
          });
          console.log("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u6210\u529F: ", res);
          const resFirstData = res.data[0] || {};
          this.insertOrUpdateData(resFirstData, data);
          return res;
        }).catch((err) => {
          this.showError();
          console.error("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u5931\u8D25\uFF1A", err);
          this.completeTask();
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/scf-database/scf-database.wxml
var require_scf_database = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/scf-database/scf-database.wxml"() {
    require_head();
    require_foot();
    Vue.component("packageCloud/pages/scf-database/scf-database", { template: `<div>



  
        <head is="head" data="{title: 'Database'}" >
            

  
    
      
        \u4E91\u51FD\u6570\u4E3A\u7BA1\u7406\u7AEF\uFF0C\u901A\u8FC7\u8C03\u7528\u4E91\u51FD\u6570\u53EF\u64CD\u4F5C\u539F\u5148\u5728\u5C0F\u7A0B\u5E8F\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7684\u6570\u636E\u3002
        \u540E\u53F0\u6D41\u6C34\u6570\u636E\uFF1A\u6743\u9650\u4E3A\u4EC5\u7BA1\u7406\u7AEF\u53EF\u5199
      
      
        
          
            
            
            
            
            
          

          
            
              
              \u83B7\u53D6\u6210\u529F
            
            
              
              \u83B7\u53D6\u5931\u8D25
            
          

          
            \u5C0F\u7A0B\u5E8F\u7AEF\u83B7\u53D6\u540E\u53F0\u6D41\u6C34\u6570\u636E
          
        
      

      
      
        
          
            
            
            
            
            
            
            
            
          

          
            
              
              \u83B7\u53D6\u6210\u529F
            
            
              
              \u83B7\u53D6\u5931\u8D25
            
          

          
            \u8C03\u7528\u4E91\u51FD\u6570\u83B7\u53D6\u540E\u53F0\u6D41\u6C34\u6570\u636E
          
        
      
    
  

  
        <foot is="foot" >
            

        </foot>
    
        </head>
    </div>` });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/scf-database/scf-database.js
var require_scf_database2 = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/scf-database/scf-database.js"() {
    require_scf_database();
    var page = getPage("packageCloud/pages/scf-database/scf-database");
    page.template = "<div>\u6D4B\u8BD5</div>";
    page.json = `{
  "navigationBarTitleText": "\u4E91\u51FD\u6570\u64CD\u4F5C\u6570\u636E\u5E93"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u4E91\u51FD\u6570\u64CD\u4F5C\u6570\u636E\u5E93",
          path: "page/cloud/pages/scf-database/scf-database"
        };
      },
      data: {
        serverDataClient: "",
        serverDataClientError: false,
        serverDataCloud: "",
        serverDataCloudError: false,
        clientLoading: false,
        cloudLoading: false,
        theme: "light"
      },
      onLoad() {
        this.setData({
          theme: wx.getSystemInfoSync().theme || "light"
        });
        if (wx.onThemeChange) {
          wx.onThemeChange(({ theme }) => {
            this.setData({ theme });
          });
        }
      },
      queryServerDataViaClient() {
        const db = wx.cloud.database();
        this.setData({
          clientLoading: true,
          serverDataClient: "",
          serverDataClientError: false
        });
        db.collection("perm4").where({
          _openid: "server"
        }).get({
          success: (res) => {
            const resFirstData = res.data && res.data[0] || {};
            this.setData({
              serverDataClient: resFirstData.data
            });
            console.log("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u6210\u529F: ", res);
          },
          fail: (err) => {
            this.setData({
              serverDataClientError: true
            });
            console.error("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u5931\u8D25\uFF1A", err);
          },
          complete: () => {
            this.setData({
              clientLoading: false
            });
          }
        });
      },
      queryServerDataViaCloudFunction() {
        this.setData({
          cloudLoading: true,
          serverDataCloud: "",
          serverDataCloudError: false
        });
        wx.cloud.callFunction({
          name: "getServerDataDemo",
          data: {},
          success: (res) => {
            console.log("[\u4E91\u51FD\u6570] [getServerDataDemo] res: ", res.result);
            const resFirstData = res.result.data && res.result.data[0] || {};
            this.setData({
              serverDataCloud: resFirstData.data
            });
          },
          fail: (err) => {
            this.setData({
              serverDataCloudError: true
            });
            console.error("[\u4E91\u51FD\u6570] [getServerDataDemo] \u8C03\u7528\u5931\u8D25", err);
          },
          complete: () => {
            this.setData({
              cloudLoading: false
            });
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/scf-storage/scf-storage.wxml
var require_scf_storage = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/scf-storage/scf-storage.wxml"() {
    require_head();
    require_foot();
    Vue.component("packageCloud/pages/scf-storage/scf-storage", { template: `<div>



  
        <head is="head" data="{title: 'Storage'}" >
            

  
    
      
        
          
            
              \u6587\u4EF6 ID
            
            
              
            
          

          
            
              \u4E34\u65F6\u94FE\u63A5
            
            
              
            
          

          
            
              
            
          
        
        
      

      
        \u4E91\u51FD\u6570\u4EA6\u53EF\u64CD\u4F5C\u6587\u4EF6\u5B58\u50A8\uFF0C\u70B9\u51FB\u6309\u94AE\u6362\u53D6\u4E34\u65F6\u94FE\u63A5
        
          
            
              \u6587\u4EF6 ID
            
            
              
            
          
        

        
          \u901A\u8FC7\u4E91\u51FD\u6570\u6362\u53D6\u4E34\u65F6\u94FE\u63A5
        
      
    
  

  
        <foot is="foot" >
            

        </foot>
    
        </head>
    </div>` });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/scf-storage/scf-storage.js
var require_scf_storage2 = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/scf-storage/scf-storage.js"() {
    require_scf_storage();
    var page = getPage("packageCloud/pages/scf-storage/scf-storage");
    page.template = "<div>\u6D4B\u8BD5</div>";
    page.json = `{
  "navigationBarTitleText": "\u4E91\u51FD\u6570\u64CD\u4F5C\u5B58\u50A8"
}
`;
    var demoImageFileId = require_config().demoImageFileId;
    var app = getApp();
    Page({
      onShareAppMessage() {
        return {
          title: "\u4E91\u51FD\u6570\u64CD\u4F5C\u5B58\u50A8",
          path: "page/cloud/pages/scf-storage/scf-storage"
        };
      },
      data: {
        fileTempURLDone: false,
        fileId: "",
        tempFileURL: "",
        loading: false
      },
      onLoad() {
        this.setData({
          fileId: app.globalData.fileId || demoImageFileId
        });
      },
      getTempFileURL() {
        const fileId = this.data.fileId;
        if (!fileId) {
          return;
        }
        this.setData({
          loading: true
        });
        wx.cloud.callFunction({
          name: "getTempFileURL",
          data: {
            fileIdList: [fileId]
          },
          success: (res) => {
            console.log("[\u4E91\u51FD\u6570] [getTempFileURL] res: ", res.result);
            if (res.result.length) {
              this.setData({
                fileTempURLDone: true,
                tempFileURL: res.result[0].tempFileURL
              });
            }
          },
          fail: (err) => {
            console.error("[\u4E91\u51FD\u6570] [getTempFileURL] \u8C03\u7528\u5931\u8D25", err);
          },
          complete: () => {
            this.setData({
              loading: false
            });
          }
        });
      }
    });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/scf-openapi/scf-openapi.wxml
var require_scf_openapi = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/scf-openapi/scf-openapi.wxml"() {
    require_head();
    require_foot();
    Vue.component("packageCloud/pages/scf-openapi/scf-openapi", { template: `<div>



  
        <head is="head" data="{title: '\u4E91\u51FD\u6570\u4E2D\u4F7F\u7528\u5FAE\u4FE1\u5F00\u653E\u80FD\u529B'}" >
            

  
    
      
        \u4E91\u8C03\u7528\u662F\u4E91\u5F00\u53D1\u63D0\u4F9B\u7684\u57FA\u4E8E\u4E91\u51FD\u6570\u4F7F\u7528\u5C0F\u7A0B\u5E8F\u5F00\u653E\u63A5\u53E3\u7684\u80FD\u529B
      

      
        \u53D1\u9001\u6A21\u677F\u6D88\u606F\u9700\u5728\u624B\u673A\u4E0A\u6D4B\u8BD5
      
      
        
          
            
            
            
            
            
            
            
            
          

          
            
              
              \u53D1\u9001\u6A21\u677F\u6D88\u606F\u6210\u529F\uFF0C\u8FD4\u56DE\u5FAE\u4FE1\u4E3B\u7A97\u53E3\u67E5\u770B
            
            
              
              \u53D1\u9001\u5931\u8D25
            
          

          
            
              \u53D1\u9001\u6A21\u677F\u6D88\u606F
            
          
        
      

      
      
        
          
            
            
            
            
            
          

          
            
          

          
            
              
              \u83B7\u53D6\u6210\u529F
            
            
              
              \u83B7\u53D6\u5931\u8D25
            
          

          
            \u83B7\u53D6\u5C0F\u7A0B\u5E8F\u7801
          
        
      

    
  

  
        <foot is="foot" >
            

        </foot>
    
        </head>
    </div>` });
  }
});

// miniprogram-demo/miniprogram/packageCloud/pages/scf-openapi/scf-openapi.js
var require_scf_openapi2 = __commonJS({
  "miniprogram-demo/miniprogram/packageCloud/pages/scf-openapi/scf-openapi.js"() {
    require_scf_openapi();
    var page = getPage("packageCloud/pages/scf-openapi/scf-openapi");
    page.template = "<div>\u6D4B\u8BD5</div>";
    page.json = `{
  "navigationBarTitleText": "\u4E91\u8C03\u7528"
}`;
    Page({
      onShareAppMessage() {
        return {
          title: "\u4E91\u51FD\u6570\u4E2D\u4F7F\u7528\u5FAE\u4FE1\u5F00\u653E\u80FD\u529B",
          path: "page/cloud/pages/scf-openapi/scf-openapi"
        };
      },
      data: {
        sendTemplateMessageResult: "",
        sendTemplateMessageError: false,
        getWXACodeResult: "",
        getWXACodeError: false,
        sendTemplateMessageLoading: false,
        getWXACodeLoading: false,
        theme: "light"
      },
      onLoad() {
        this.setData({
          theme: wx.getSystemInfoSync().theme || "light"
        });
        if (wx.onThemeChange) {
          wx.onThemeChange(({ theme }) => {
            this.setData({ theme });
          });
        }
      },
      sendTemplateMessageViaCloudFunction(e) {
        this.setData({
          sendTemplateMessageResult: "",
          sendTemplateMessageError: false,
          sendTemplateMessageLoading: true
        });
        wx.cloud.callFunction({
          name: "openapi",
          data: {
            action: "sendTemplateMessage",
            formId: e.detail.formId
          }
        }).then((res) => {
          this.setData({
            sendTemplateMessageResult: res,
            sendTemplateMessageLoading: false
          });
          console.log("[\u4E91\u8C03\u7528] [\u53D1\u9001\u6A21\u677F\u6D88\u606F] \u6210\u529F: ", res);
        }).catch((err) => {
          this.setData({
            sendTemplateMessageError: true,
            sendTemplateMessageLoading: false
          });
          console.error("[\u4E91\u8C03\u7528] [\u53D1\u9001\u6A21\u677F\u6D88\u606F] \u5931\u8D25: ", err);
        });
      },
      getWXACodeViaCloudFunction() {
        this.setData({
          getWXACodeResult: "",
          getWXACodeError: false,
          getWXACodeLoading: true
        });
        wx.cloud.callFunction({
          name: "openapi",
          data: {
            action: "getWXACode"
          }
        }).then((res) => {
          this.setData({
            getWXACodeResult: res,
            getWXACodeLoading: false
          });
          console.log("[\u4E91\u8C03\u7528] [\u83B7\u53D6\u5C0F\u7A0B\u5E8F\u7801]] \u6210\u529F: ", res);
        }).catch((err) => {
          this.setData({
            getWXACodeError: true,
            getWXACodeLoading: false
          });
          console.error("[\u4E91\u8C03\u7528] [\u83B7\u53D6\u5C0F\u7A0B\u5E8F\u7801] \u5931\u8D25: ", err);
        });
      },
      queryServerDataViaClient() {
        const db = wx.cloud.database();
        this.setData({
          clientLoading: true,
          serverDataClient: "",
          serverDataClientError: false
        });
        db.collection("perm4").where({
          _openid: "server"
        }).get({
          success: (res) => {
            const resFirstData = res.data && res.data[0] || {};
            this.setData({
              serverDataClient: resFirstData.data
            });
            console.log("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u6210\u529F: ", res);
          },
          fail: (err) => {
            this.setData({
              serverDataClientError: true
            });
            console.error("[\u6570\u636E\u5E93] [\u67E5\u8BE2\u8BB0\u5F55] \u5931\u8D25\uFF1A", err);
          },
          complete: () => {
            this.setData({
              clientLoading: false
            });
          }
        });
      },
      queryServerDataViaCloudFunction() {
        this.setData({
          cloudLoading: true,
          serverDataCloud: "",
          serverDataCloudError: false
        });
        wx.cloud.callFunction({
          name: "getServerDataDemo",
          data: {},
          success: (res) => {
            console.log("[\u4E91\u51FD\u6570] [getServerDataDemo] res: ", res.result);
            const resFirstData = res.result.data && res.result.data[0] || {};
            this.setData({
              serverDataCloud: resFirstData.data
            });
          },
          fail: (err) => {
            this.setData({
              serverDataCloudError: true
            });
            console.error("[\u4E91\u51FD\u6570] [getServerDataDemo] \u8C03\u7528\u5931\u8D25", err);
          },
          complete: () => {
            this.setData({
              cloudLoading: false
            });
          }
        });
      }
    });
  }
});

// <stdin>
require_doc_web_view2();
require_user_authentication2();
require_get_wx_context2();
require_upload_file2();
require_download_file2();
require_get_temp_file_url2();
require_delete_file2();
require_cloud_file_component2();
require_crud2();
require_crud_detail2();
require_db_permission2();
require_server_date2();
require_scf_database2();
require_scf_storage2();
require_scf_openapi2();
