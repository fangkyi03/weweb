var getCurrentPages = function () {
  return [{ route: "pages/home/index" }];
};
var getApp = function () {};
var requirePlugin = function () {};
var _pageObj = {};
var _globalPage = (pagePath, config, template) => {
  _pageObj[pagePath] = {
    path: pagePath,
    config,
    template,
  };
};
var _global = {};
var _globalApp = (path, _appConfig) => {
  _global["appConfig"] = _appConfig;
};
var _globalComponent = (path, config, template) => {
  const pagePath = path.replace(".js", "").split("/").slice(-3).join("/");
  _pageObj[pagePath] = {
    path,
    config,
    template,
  };
};
var __wxRoute = "";
var getCurrentInstance = () => {
  return {
    router: _global["router"],
  };
};
var wx = (jd = {
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
