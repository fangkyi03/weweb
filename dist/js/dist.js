(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

    var _appConfig = {
  "pages": [
    "pages/index/index",
    "pages/test/index"
  ],
  "window": {
    "navigationBarTitleText": "Remax Wechat Template",
    "navigationBarBackgroundColor": "#282c34"
  }
}
    var pagePath = `remax/dist/__remax_runtime_options__`
  

    var App = (appData)=> {
      return _globalApp(_appConfig)
    }
  

    var Page = (config) => {
      return _globalPage(pagePath,config,templateText)
    }
  

    var Component = (config) => {
      return _globalComponent(pagePath,config,templateText)
    }
  
module.exports = {
      hostComponents: {
  "ad": {
    "alias": {
      "unitId": "unit-id",
      "adIntervals": "ad-intervals",
      "onLoad": "bindload",
      "onError": "binderror",
      "onClose": "bindclose",
      "animation": "animation",
      "adType": "ad-type",
      "adTheme": "ad-theme"
    }
  },
  "audio": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "src": "src",
      "loop": "loop",
      "controls": "controls",
      "poster": "poster",
      "name": "name",
      "author": "author",
      "onError": "binderror",
      "onPlay": "bindplay",
      "onPause": "bindpause",
      "onTimeUpdate": "bindtimeupdate",
      "onEnded": "bindended"
    }
  },
  "button": {
    "alias": {
      "className": "class",
      "id": "id",
      "style": "style",
      "animation": "animation",
      "type": "type",
      "plain": "plain",
      "disabled": "disabled",
      "loading": "loading",
      "formType": "form-type",
      "openType": "open-type",
      "hoverClass": "hover-class",
      "hoverClassName": "hover-class",
      "hoverStopPropagation": "hover-stop-propagation",
      "hoverStartTime": "hover-start-time",
      "hoverStayTime": "hover-stay-time",
      "lang": "lang",
      "sessionFrom": "session-from",
      "sendMessageTitle": "send-message-title",
      "sendMessagePath": "send-message-path",
      "sendMessageImg": "send-message-img",
      "size": "size",
      "appParameter": "app-parameter",
      "appPackageName": "app-packagename",
      "appBundleID": "app-bundleid",
      "appConnectID": "app-connect-id",
      "openId": "open-id",
      "groupId": "group-id",
      "publicId": "public-id",
      "shareType": "share-type",
      "shareMode": "share-mode",
      "shareMessageFriendInfo": "share-message-friend-info",
      "shareMessageTitle": "share-message-title",
      "shareMessageImg": "share-message-img",
      "showMessageCard": "show-message-card",
      "onGetUserInfo": "bindgetuserinfo",
      "onContact": "bindcontact",
      "onGetPhoneNumber": "bindgetphonenumber",
      "onError": "binderror",
      "onOpenSetting": "bindopensetting",
      "onLaunchApp": "bindlaunchapp",
      "onAddFriend": "bindaddfriend",
      "onAddGroupApp": "bindaddgroupapp",
      "onTap": "bindtap",
      "onClick": "bindtap"
    }
  },
  "camera": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "mode": "mode",
      "devicePosition": "device-position",
      "flash": "flash",
      "frameSize": "frame-size",
      "onStop": "bindstop",
      "onError": "binderror",
      "onInitDone": "bindinitdone",
      "onScanCode": "bindscancode"
    }
  },
  "canvas": {
    "alias": {
      "id": "id",
      "style": "style",
      "animation": "animation",
      "className": "class",
      "width": "width",
      "height": "height",
      "disableScroll": "disable-scroll",
      "type": "type",
      "canvasId": "canvas-id",
      "onTouchStart": "bindtouchstart",
      "onTouchMove": "bindtouchmove",
      "onTouchEnd": "bindtouchend",
      "onTouchCancel": "bindtouchcancel",
      "onLongTap": "bindlongtap",
      "onLongClick": "bindlongtap",
      "onTap": "bindtap",
      "onClick": "bindtap",
      "onError": "binderror"
    }
  },
  "checkbox-group": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "name": "name",
      "onChange": "bindchange"
    }
  },
  "checkbox": {
    "alias": {
      "id": "id",
      "name": "name",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "value": "value",
      "checked": "checked",
      "disabled": "disabled",
      "onChange": "bindchange",
      "color": "color"
    }
  },
  "cover-image": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "src": "src",
      "onLoad": "bindload",
      "onError": "binderror",
      "onTap": "bindtap",
      "onClick": "bindtap"
    }
  },
  "cover-view": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "scrollTop": "scroll-top",
      "markerId": "marker-id",
      "onTap": "bindtap",
      "onClick": "bindtap"
    }
  },
  "editor": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "readOnly": "read-only",
      "placeholder": "placeholder",
      "showImgSize": "show-img-size",
      "showImgToolbar": "show-img-toolbar",
      "showImgResize": "show-img-resize",
      "onReady": "bindready",
      "onFocus": "bindfocus",
      "onBlur": "bindblur",
      "onInput": "bindinput",
      "onStatusChange": "bindstatuschange"
    }
  },
  "form": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "reportSubmit": "report-submit",
      "onSubmit": "bindsubmit",
      "onReset": "bindreset",
      "reportSubmitTimeout": "report-submit-timeout"
    }
  },
  "functional-page-navigator": {
    "alias": {
      "version": "version",
      "name": "name",
      "args": "args",
      "onSuccess": "bindsuccess",
      "onFail": "bindfail"
    }
  },
  "icon": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "type": "type",
      "size": "size",
      "color": "color"
    }
  },
  "image": {
    "alias": {
      "id": "id",
      "src": "src",
      "mode": "mode",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "lazyLoad": "lazy-load",
      "onLoad": "bindload",
      "onError": "binderror",
      "onTap": "bindtap",
      "onClick": "bindtap",
      "showMenuByLongpress": "show-menu-by-longpress",
      "onTouchStart": "bindtouchstart",
      "onTouchMove": "bindtouchmove",
      "onTouchEnd": "bindtouchend",
      "onTouchCancel": "bindtouchcancel"
    }
  },
  "input": {
    "alias": {
      "id": "id",
      "autoFocus": "auto-focus",
      "className": "class",
      "focus": "focus",
      "alwayEmbed": "always-embed",
      "name": "name",
      "maxlength": "maxlength",
      "value": "value",
      "style": "style",
      "animation": "animation",
      "password": "password",
      "type": "type",
      "confirmType": "confirm-type",
      "confirmHold": "confirm-hold",
      "cursor": "cursor",
      "selectionStart": "selection-start",
      "selectionEnd": "selection-end",
      "adjustPosition": "adjust-position",
      "placeholder": "placeholder",
      "placeholderStyle": "placeholder-style",
      "placeholderClass": "placeholder-class",
      "placeholderClassName": "placeholder-class",
      "disabled": "disabled",
      "cursorSpacing": "cursor-spacing",
      "onInput": "bindinput",
      "onTap": "bindtap",
      "onClick": "bindtap",
      "onFocus": "bindfocus",
      "onBlur": "bindblur",
      "onConfirm": "bindconfirm",
      "onKeyboardHeightChange": "bindkeyboardheightchange"
    }
  },
  "label": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "for": "for",
      "onClick": "bindtap",
      "onTap": "bindtap"
    }
  },
  "live-player": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "src": "src",
      "mode": "mode",
      "autoplay": "autoplay",
      "muted": "muted",
      "orientation": "orientation",
      "objectFit": "object-fit",
      "background": "background",
      "minCache": "min-cache",
      "maxCache": "max-cache",
      "soundMode": "sound-mode",
      "autoPauseIfNavigate": "auto-pause-if-navigate",
      "autoPauseIfOpenNative": "auto-pause-if-open-native",
      "pictureInPictureMode": "picture-in-picture-mode",
      "onStateChange": "bindstatechange",
      "onFullscreenChange": "bindfullscreenchange",
      "onNetStatus": "bindnetstatus",
      "onAudioVolumeNotify": "bindaudiovolumenotify",
      "onEnterPictureInPicture": "bindenterpictureinpicture",
      "onLeavePictureInPicture": "bindleavepictureinpicture"
    }
  },
  "live-pusher": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "url": "url",
      "mode": "mode",
      "autopush": "autopush",
      "muted": "muted",
      "enableCamera": "enable-camera",
      "autoFocus": "auto-focus",
      "orientation": "orientation",
      "beauty": "beauty",
      "beautyStyle": "beauty-style",
      "filter": "filter",
      "whiteness": "whiteness",
      "aspect": "aspect",
      "minBitrate": "min-bitrate",
      "maxBitrate": "max-bitrate",
      "audioQuality": "audio-quality",
      "waitingImage": "waiting-image",
      "waitingImageHash": "waiting-image-hash",
      "zoom": "zoom",
      "devicePosition": "device-position",
      "backgroundMute": "background-mute",
      "mirror": "mirror",
      "remoteMirror": "remote-mirror",
      "localMirror": "local-mirror",
      "audioReverbType": "audio-reverb-type",
      "enableMic": "enable-mic",
      "enableAgc": "enable-agc",
      "enableAns": "enable-ans",
      "audioVolumeType": "audio-volume-type",
      "videoWidth": "video-width",
      "videoHeight": "video-height",
      "onStateChange": "bindstatechange",
      "onNetStatus": "bindnetstatus",
      "onError": "binderror",
      "onBgmStart": "bindbgmstart",
      "onBgmProgress": "bindbgmprogress",
      "onBgmComplete": "bindbgmcomplete"
    }
  },
  "map": {
    "alias": {
      "id": "id",
      "style": "style",
      "animation": "animation",
      "className": "class",
      "latitude": "latitude",
      "longitude": "longitude",
      "scale": "scale",
      "minScale": "min-scale",
      "maxScale": "max-scale",
      "markers": "markers",
      "polyline": "polyline",
      "circles": "circles",
      "controls": "controls",
      "polygons": "polygons",
      "showLocation": "show-location",
      "includePoints": "include-points",
      "includePadding": "include-padding",
      "groundOverlays": "ground-overlays",
      "tileOverlay": "tile-overlay",
      "setting": "setting",
      "covers": "covers",
      "subkey": "subkey",
      "layerStyle": "layer-style",
      "rotate": "rotate",
      "skew": "skew",
      "enable3D": "enable-3D",
      "showCompass": "show-compass",
      "showScale": "show-scale",
      "enableOverlooking": "enable-overlooking",
      "enableZoom": "enable-zoom",
      "enableScroll": "enable-scroll",
      "enableRotate": "enable-rotate",
      "enableSatellite": "enable-satellite",
      "enableTraffic": "enable-traffic",
      "enablePoi": "enable-poi",
      "enableBuilding": "enable-building",
      "onTap": "bindtap",
      "onClick": "bindtap",
      "onMarkerTap": "bindmarkertap",
      "onMarkerClick": "bindmarkertap",
      "onControlTap": "bindcontroltap",
      "onControlClick": "bindcontroltap",
      "onCalloutTap": "bindcallouttap",
      "onCalloutClick": "bindcallouttap",
      "onUpdated": "bindupdated",
      "onRegionChange": "bindregionchange",
      "onPoiTap": "bindpoitap",
      "onPoiClick": "bindpoitap",
      "onAnchorPointTap": "bindanchorpointtap"
    }
  },
  "movable-area": {
    "alias": {
      "className": "class",
      "style": "style",
      "animation": "animation",
      "width": "width",
      "height": "height",
      "id": "id",
      "scaleArea": "scale-area"
    }
  },
  "movable-view": {
    "alias": {
      "className": "class",
      "style": "style",
      "animation": "animation",
      "id": "id",
      "direction": "direction",
      "inertia": "inertia",
      "outOfBounds": "out-of-bounds",
      "x": "x",
      "y": "y",
      "damping": "damping",
      "friction": "friction",
      "disabled": "disabled",
      "scale": "scale",
      "scaleMin": "scale-min",
      "scaleMax": "scale-max",
      "scaleValue": "scale-value",
      "onChange": "bindchange",
      "onScale": "bindscale",
      "hTouchMove": "htouchmove",
      "vTouchMove": "vtouchmove"
    }
  },
  "navigator": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "openType": "open-type",
      "hoverClass": "hover-class",
      "hoverClassName": "hover-class",
      "hoverStartTime": "hover-start-time",
      "hoverStayTime": "hover-stay-time",
      "url": "url",
      "target": "target",
      "delta": "delta",
      "appId": "app-id",
      "path": "path",
      "extraData": "extra-data",
      "version": "version",
      "hoverStopPropagation": "hover-stop-propagation",
      "onSuccess": "bindsuccess",
      "onFail": "bindfail",
      "onComplete": "bindcomplete"
    }
  },
  "official-account": {
    "alias": {
      "onLoad": "bindload",
      "onError": "binderror"
    }
  },
  "open-data": {
    "alias": {
      "type": "type",
      "openGid": "open-gid",
      "lang": "lang"
    }
  },
  "picker-view-column": {
    "alias": {}
  },
  "picker-view": {
    "alias": {
      "id": "id",
      "name": "name",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "value": "value",
      "indicatorStyle": "indicator-style",
      "indicatorClass": "indicator-class",
      "indicatorClassName": "indicator-class",
      "maskStyle": "mask-style",
      "maskClass": "mask-class",
      "maskClassName": "mask-class",
      "onChange": "bindchange",
      "onPickStart": "bindpickstart",
      "onPickEnd": "bindpickend"
    }
  },
  "picker": {
    "alias": {
      "id": "id",
      "name": "name",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "mode": "mode",
      "range": "range",
      "rangeKey": "range-key",
      "value": "value",
      "onChange": "bindchange",
      "onCancel": "bindcancel",
      "onColumnChange": "bindcolumnchange",
      "start": "start",
      "end": "end",
      "fields": "fields",
      "customItem": "custom-item",
      "disabled": "disabled",
      "onClick": "bindtap",
      "onTap": "bindtap",
      "headerText": "header-text"
    }
  },
  "progress": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "percent": "percent",
      "showInfo": "show-info",
      "borderRadius": "border-radius",
      "fontSize": "font-size",
      "strokeWidth": "stroke-width",
      "color": "color",
      "activeColor": "activeColor",
      "backgroundColor": "backgroundColor",
      "active": "active",
      "activeMode": "active-mode",
      "duration": "duration",
      "onActiveEnd": "bindactiveend"
    }
  },
  "radio-group": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "onChange": "bindchange",
      "name": "name"
    }
  },
  "radio": {
    "alias": {
      "id": "id",
      "name": "name",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "value": "value",
      "checked": "checked",
      "disabled": "disabled",
      "color": "color"
    }
  },
  "rich-text": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "nodes": "nodes",
      "onTap": "bindtap",
      "onClick": "bindtap",
      "space": "space",
      "onTouchStart": "bindtouchstart",
      "onTouchMove": "bindtouchmove",
      "onTouchEnd": "bindtouchend",
      "onTouchCancel": "bindtouchcancel",
      "onLongTap": "bindlongtap",
      "onLongClick": "bindlongtap"
    }
  },
  "scroll-view": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "scrollX": "scroll-x",
      "scrollY": "scroll-y",
      "upperThreshold": "upper-threshold",
      "lowerThreshold": "lower-threshold",
      "scrollTop": "scroll-top",
      "scrollLeft": "scroll-left",
      "scrollIntoView": "scroll-into-view",
      "scrollWithAnimation": "scroll-with-animation",
      "enableBackToTop": "enable-back-to-top",
      "enableFlex": "enable-flex",
      "onScrollToUpper": "bindscrolltoupper",
      "onScrollToLower": "bindscrolltolower",
      "onScroll": "bindscroll",
      "onTap": "bindtap",
      "onTouchStart": "bindtouchstart",
      "onTouchEnd": "bindtouchend",
      "onTouchMove": "bindtouchmove",
      "onTouchCancel": "bindtouchcancel",
      "onClick": "bindtap",
      "scrollAnchoring": "scroll-anchoring",
      "refresherEnabled": "refresher-enabled",
      "refresherThreshold": "refresher-threshold",
      "refresherDefaultStyle": "refresher-default-style",
      "refresherBackground": "refresher-background",
      "refresherTriggered": "refresher-triggered",
      "onRefresherPulling": "bindrefresherpulling",
      "onRefresherRefresh": "bindrefresherrefresh",
      "onRefresherRestore": "bindrefresherrestore",
      "onRefresherAbort": "bindrefresherabort",
      "enhanced": "enhanced",
      "bounces": "bounces",
      "showScrollbar": "show-scrollbar",
      "pagingEnabled": "paging-enabled",
      "fastDeceleration": "fast-deceleration",
      "onDragStart": "binddragstart",
      "onDragging": "binddragging",
      "onDragEnd": "binddragend"
    }
  },
  "slider": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "name": "name",
      "min": "min",
      "max": "max",
      "step": "step",
      "disabled": "disabled",
      "value": "value",
      "color": "color",
      "selectedColor": "selected-color",
      "showValue": "show-value",
      "activeColor": "activeColor",
      "backgroundColor": "backgroundColor",
      "trackSize": "track-size",
      "blockSize": "block-size",
      "blockColor": "block-color",
      "onChange": "bindchange",
      "onChanging": "bindchanging"
    }
  },
  "swiper-item": {
    "alias": {
      "key": "key",
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "itemId": "item-id"
    }
  },
  "swiper": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "indicatorDots": "indicator-dots",
      "indicatorColor": "indicator-color",
      "indicatorActiveColor": "indicator-active-color",
      "autoplay": "autoplay",
      "current": "current",
      "interval": "interval",
      "duration": "duration",
      "circular": "circular",
      "vertical": "vertical",
      "previousMargin": "previous-margin",
      "nextMargin": "next-margin",
      "displayMultipleItems": "display-multiple-items",
      "skipHiddenItemLayout": "skip-hidden-item-layout",
      "easingFunction": "easing-function",
      "onChange": "bindchange",
      "onTransition": "bindtransition",
      "onAnimationFinish": "bindanimationfinish",
      "onTap": "bindtap",
      "onClick": "bindtap",
      "snapToEdge": "snap-to-edge"
    }
  },
  "switch": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "name": "name",
      "checked": "checked",
      "disabled": "disabled",
      "color": "color",
      "onChange": "bindchange",
      "type": "type"
    }
  },
  "text": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "selectable": "selectable",
      "userSelect": "user-select",
      "space": "space",
      "decode": "decode",
      "onTap": "bindtap",
      "onClick": "bindtap"
    }
  },
  "textarea": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "name": "name",
      "value": "value",
      "placeholder": "placeholder",
      "placeholderStyle": "placeholder-style",
      "placeholderClass": "placeholder-class",
      "placeholderClassName": "placeholder-class",
      "disabled": "disabled",
      "maxlength": "maxlength",
      "autoFocus": "auto-focus",
      "focus": "focus",
      "fixed": "fixed",
      "autoHeight": "auto-height",
      "showCount": "show-count",
      "controlled": "controlled",
      "cursorSpacing": "cursor-spacing",
      "cursor": "cursor",
      "showConfirmBar": "show-confirm-bar",
      "selectionStart": "selection-start",
      "selectionEnd": "selection-end",
      "adjustPosition": "adjust-position",
      "holdKeyboard": "hold-keyboard",
      "onFocus": "bindfocus",
      "onBlur": "bindblur",
      "onLineChange": "bindlinechange",
      "onInput": "bindinput",
      "onConfirm": "bindconfirm",
      "onKeyboardHeightChange": "bindkeyboardheightchange",
      "confirmType": "confirm-type",
      "confirmHold": "confirm-hold",
      "disableDefaultPadding": "disable-default-padding"
    }
  },
  "video": {
    "alias": {
      "id": "id",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "src": "src",
      "duration": "duration",
      "controls": "controls",
      "danmuList": "danmu-list",
      "danmuBtn": "danmu-btn",
      "enableDanmu": "enable-danmu",
      "autoplay": "autoplay",
      "loop": "loop",
      "muted": "muted",
      "initialTime": "initial-time",
      "pageGesture": "page-gesture",
      "direction": "direction",
      "showProgress": "show-progress",
      "showFullscreenBtn": "show-fullscreen-btn",
      "showPlayBtn": "show-play-btn",
      "showCenterPlayBtn": "show-center-play-btn",
      "enableProgressGesture": "enable-progress-gesture",
      "showScreenLockButton": "show-screen-lock-button",
      "objectFit": "object-fit",
      "poster": "poster",
      "showMuteBtn": "show-mute-btn",
      "title": "title",
      "playBtnPosition": "play-btn-position",
      "posterForCrawler": "poster-for-crawler",
      "showCastingButton": "show-casting-button",
      "pictureInPictureMode": "picture-in-picture-mode",
      "pictureInPictureShowProgress": "picture-in-picture-show-progress",
      "enableAutoRotation": "enable-auto-rotation",
      "showSnapshotButton": "show-snapshot-button",
      "showBackgroundPlaybackButton": "show-background-playback-button",
      "backgroundPoster": "background-poster",
      "enablePlayGesture": "enable-play-gesture",
      "autoPauseIfNavigate": "auto-pause-if-navigate",
      "autoPauseIfOpenNative": "auto-pause-if-open-native",
      "vslideGesture": "vslide-gesture",
      "vslideGestureInFullscreen": "vslide-gesture-in-fullscreen",
      "onPlay": "bindplay",
      "onPause": "bindpause",
      "onEnded": "bindended",
      "onTimeUpdate": "bindtimeupdate",
      "onFullScreenChange": "bindfullscreenchange",
      "onWaiting": "bindwaiting",
      "onError": "binderror",
      "onProgress": "bindprogress",
      "onLoadedMetaData": "bindloadedmetadata",
      "onControlsToggle": "bindcontrolstoggle",
      "onEnterPictureInPicture": "bindenterpictureinpicture",
      "onLeavePictureInPicture": "bindleavepictureinpicture",
      "onSeekComplete": "bindseekcomplete"
    }
  },
  "view": {
    "alias": {
      "id": "id",
      "disableScroll": "disable-scroll",
      "hoverClass": "hover-class",
      "hoverClassName": "hover-class",
      "hoverStartTime": "hover-start-time",
      "hoverStayTime": "hover-stay-time",
      "hidden": "hidden",
      "className": "class",
      "style": "style",
      "animation": "animation",
      "hoverStopPropagation": "hover-stop-propagation",
      "onTap": "bindtap",
      "onClick": "bindtap",
      "onTouchStart": "bindtouchstart",
      "onTouchMove": "bindtouchmove",
      "onTouchEnd": "bindtouchend",
      "onTouchCancel": "bindtouchcancel",
      "onLongTap": "bindlongtap",
      "onLongClick": "bindlongtap",
      "onLongPress": "bindlongpress",
      "onTransitionEnd": "bindtransitionend",
      "onAnimationIteration": "bindanimationiteration",
      "onAnimationStart": "bindanimationstart",
      "onAnimationEnd": "bindanimationend",
      "catchTouchMove": "catchtouchmove"
    }
  },
  "web-view": {
    "alias": {
      "src": "src",
      "onMessage": "bindmessage",
      "onLoad": "bindload",
      "onError": "binderror"
    }
  },
  "match-media": {
    "alias": {
      "minWidth": "min-width",
      "maxWidth": "max-width",
      "width": "width",
      "minHeight": "min-height",
      "maxHeight": "max-height",
      "height": "height",
      "orientation": "orientation"
    }
  },
  "page-container": {
    "alias": {
      "show": "show",
      "duration": "duration",
      "zIndex": "z-index",
      "overlay": "overlay",
      "position": "position",
      "round": "round",
      "closeOnSlideDown": "close-on-slideDown",
      "overlayStyle": "overlay-style",
      "customStyle": "custom-style",
      "onBeforeEnter": "bindbeforeenter",
      "onEnter": "bindenter",
      "onAfterEnter": "bindafterenter",
      "onBeforeLeave": "bindbeforeleave",
      "onLeave": "bindleave",
      "onAfterLeave": "bindafterleave",
      "onClickOverlay": "bindclickoverlay"
    }
  },
  "share-element": {
    "alias": {
      "key": "key",
      "transform": "transform",
      "duration": "duration",
      "easingFunction": "easing-function"
    }
  },
  "keyboard-accessory": {
    "alias": {}
  },
  "voip-room": {
    "alias": {
      "openId": "openid",
      "mode": "mode",
      "devicePosition": "device-position",
      "onError": "binderror"
    }
  },
  "ad-custom": {
    "alias": {
      "unitId": "unit-id",
      "adIntervals": "ad-intervals",
      "onLoad": "bindload",
      "onError": "binderror",
      "onClose": "bindclose"
    }
  },
  "page-meta": {
    "alias": {
      "backgroundTextStyle": "background-text-style",
      "backgroundColor": "background-color",
      "backgroundColorTop": "background-color-top",
      "backgroundColorBottom": "background-color-bottom",
      "rootBackgroundColor": "root-background-color",
      "scrollTop": "scroll-top",
      "scrollDuration": "scroll-duration",
      "pageStyle": "page-style",
      "pageFontSize": "page-font-size",
      "rootFontSize": "root-font-size",
      "pageOrientation": "page-orientation",
      "onResize": "bindresize",
      "onScroll": "bindscroll",
      "onScrollDone": "bindscrolldone"
    }
  },
  "navigation-bar": {
    "alias": {
      "title": "title",
      "loading": "loading",
      "frontColor": "front-color",
      "backgroundColor": "background-color",
      "colorAnimationDuration": "color-animation-duration",
      "colorAnimationTimingFunc": "color-animation-timing-func"
    }
  }
},
      pageEvents: {
  "pages/index/index": [],
  "pages/test/index": []
},
      appEvents: []
    }
},{}],2:[function(require,module,exports){

    var _appConfig = {
  "pages": [
    "pages/index/index",
    "pages/test/index"
  ],
  "window": {
    "navigationBarTitleText": "Remax Wechat Template",
    "navigationBarBackgroundColor": "#282c34"
  }
}
    var pagePath = `remax/dist/app`
  

    var App = (appData)=> {
      return _globalApp(_appConfig)
    }
  

    var Page = (config) => {
      return _globalPage(pagePath,config,templateText)
    }
  

    var Component = (config) => {
      return _globalComponent(pagePath,config,templateText)
    }
  
require('./runtime.js');
require('./remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = require('./__remax_runtime_options__');

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Button", function() { return /* reexport */ hostComponents_Button; });
__webpack_require__.d(__webpack_exports__, "Form", function() { return /* reexport */ hostComponents_Form; });
__webpack_require__.d(__webpack_exports__, "Image", function() { return /* reexport */ hostComponents_Image; });
__webpack_require__.d(__webpack_exports__, "Input", function() { return /* reexport */ hostComponents_Input; });
__webpack_require__.d(__webpack_exports__, "Label", function() { return /* reexport */ hostComponents_Label; });
__webpack_require__.d(__webpack_exports__, "Navigator", function() { return /* reexport */ hostComponents_Navigator; });
__webpack_require__.d(__webpack_exports__, "Text", function() { return /* reexport */ hostComponents_Text; });
__webpack_require__.d(__webpack_exports__, "Textarea", function() { return /* reexport */ hostComponents_Textarea; });
__webpack_require__.d(__webpack_exports__, "View", function() { return /* reexport */ hostComponents_View; });
__webpack_require__.d(__webpack_exports__, "WebView", function() { return /* reexport */ hostComponents_WebView; });
__webpack_require__.d(__webpack_exports__, "navigateTo", function() { return /* reexport */ wechat_esm["e" /* navigateTo */]; });
__webpack_require__.d(__webpack_exports__, "navigateBack", function() { return /* reexport */ wechat_esm["d" /* navigateBack */]; });
__webpack_require__.d(__webpack_exports__, "redirectTo", function() { return /* reexport */ wechat_esm["g" /* redirectTo */]; });
__webpack_require__.d(__webpack_exports__, "reLaunch", function() { return /* reexport */ wechat_esm["f" /* reLaunch */]; });
__webpack_require__.d(__webpack_exports__, "switchTab", function() { return /* reexport */ wechat_esm["h" /* switchTab */]; });
__webpack_require__.d(__webpack_exports__, "Modal", function() { return /* reexport */ Modal; });

// EXTERNAL MODULE: ./node_modules/_react@16.14.0@react/index.js
var _react_16_14_0_react = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/_memoize-one@5.2.1@memoize-one/dist/memoize-one.esm.js
var safeIsNaN=Number.isNaN||function ponyfill(value){return typeof value==='number'&&value!==value;};function isEqual(first,second){if(first===second){return true;}if(safeIsNaN(first)&&safeIsNaN(second)){return true;}return false;}function areInputsEqual(newInputs,lastInputs){if(newInputs.length!==lastInputs.length){return false;}for(var i=0;i<newInputs.length;i++){if(!isEqual(newInputs[i],lastInputs[i])){return false;}}return true;}function memoizeOne(resultFn,isEqual){if(isEqual===void 0){isEqual=areInputsEqual;}var lastThis;var lastArgs=[];var lastResult;var calledOnce=false;function memoized(){var newArgs=[];for(var _i=0;_i<arguments.length;_i++){newArgs[_i]=arguments[_i];}if(calledOnce&&lastThis===this&&isEqual(newArgs,lastArgs)){return lastResult;}lastResult=resultFn.apply(this,newArgs);calledOnce=true;lastThis=this;lastArgs=newArgs;return lastResult;}return memoized;}/* harmony default export */ var memoize_one_esm = (memoizeOne);
// EXTERNAL MODULE: ./node_modules/_@remax_framework-shared@2.15.4@@remax/framework-shared/esm/index.js + 14 modules
var esm = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/createHostComponent.js
var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}}return t;};return __assign.apply(this,arguments);};function createTarget(target,detail){return{id:target.id,offsetLeft:target.offsetLeft,offsetTop:target.offsetTop,dataset:target.targetDataset||target.dataset,value:detail===null||detail===void 0?void 0:detail.value};}function createCurrentTarget(currentTarget){return{id:currentTarget.id,offsetLeft:currentTarget.offsetLeft,offsetTop:currentTarget.offsetTop,dataset:currentTarget.dataset};}var createTapEvent=function createTapEvent(originalEvent){return{type:originalEvent.type,stopPropagation:originalEvent.stopPropagation,target:createTarget(originalEvent.target,originalEvent.detail),currentTarget:createCurrentTarget(originalEvent.currentTarget),originalEvent:originalEvent,nativeEvent:originalEvent};};var createTouchEvent=function createTouchEvent(originalEvent){return{type:originalEvent.type,stopPropagation:originalEvent.stopPropagation,target:createTarget(originalEvent.target,originalEvent.detail),currentTarget:createCurrentTarget(originalEvent.currentTarget),touches:originalEvent.touches,changedTouches:originalEvent.touches,originalEvent:originalEvent,nativeEvent:originalEvent};};var createImageEvent=function createImageEvent(originalEvent){return{type:originalEvent.type,target:createTarget(originalEvent.target,originalEvent.detail),currentTarget:createCurrentTarget(originalEvent.currentTarget),originalEvent:originalEvent,nativeEvent:originalEvent};};function createCallback(fn,eventCreator){if(typeof fn!=='function'){return undefined;}return function(originalEvent){return fn(eventCreator(originalEvent));};}var createInputEvent=function createInputEvent(originalEvent){return{type:originalEvent.type,target:createTarget(originalEvent.target,originalEvent.detail),currentTarget:createCurrentTarget(originalEvent.currentTarget),originalEvent:originalEvent,nativeEvent:originalEvent};};var createFormEvent=function createFormEvent(originalEvent){return{type:originalEvent.type,target:createTarget(originalEvent.target,originalEvent.detail),currentTarget:createCurrentTarget(originalEvent.currentTarget),originalEvent:originalEvent,nativeEvent:originalEvent};};function assignDefaultProps(inputProps,defaultProps){if(defaultProps){Object.keys(defaultProps).forEach(function(key){var _a;inputProps[key]=(_a=inputProps[key])!==null&&_a!==void 0?_a:defaultProps[key];});}}function aliasProps(props,alias){var _a;if(!alias){return props;}var nextProps={};for(var key in props){nextProps[(_a=alias[key])!==null&&_a!==void 0?_a:key]=props[key];}return nextProps;}var createLongTapCallback=memoize_one_esm(createCallback);var createTapCallback=memoize_one_esm(createCallback);var createTouchStartCallback=memoize_one_esm(createCallback);var createTouchMoveCallback=memoize_one_esm(createCallback);var createTouchEndCallback=memoize_one_esm(createCallback);var createTouchCancelCallback=memoize_one_esm(createCallback);var createChangeCallback=memoize_one_esm(createCallback);var createInputCallback=memoize_one_esm(createCallback);var createConfirmCallback=memoize_one_esm(createCallback);var createFocusCallback=memoize_one_esm(createCallback);var createBlurCallback=memoize_one_esm(createCallback);var createSubmitCallback=memoize_one_esm(createCallback);var createResetCallback=memoize_one_esm(createCallback);var createImageLoadCallback=memoize_one_esm(createCallback);var createImageErrorCallback=memoize_one_esm(createCallback);function createHostComponent(name,alias,defaults){var Component=function Component(props,ref){var inputProps=__assign({},props);// 默认属性根据平台在这里设置
if(defaults){assignDefaultProps(inputProps,defaults);}if(props.onLongTap){inputProps.onLongTap=createLongTapCallback(inputProps.onLongTap,createTapEvent);}if(inputProps.onTap){inputProps.onTap=createTapCallback(inputProps.onTap,createTapEvent);}if(inputProps.onTouchStart){inputProps.onTouchStart=createTouchStartCallback(inputProps.onTouchStart,createTouchEvent);}if(inputProps.onTouchMove){inputProps.onTouchMove=createTouchMoveCallback(inputProps.onTouchMove,createTouchEvent);}if(inputProps.onTouchEnd){inputProps.onTouchEnd=createTouchEndCallback(inputProps.onTouchEnd,createTouchEvent);}if(inputProps.onTouchCancel){inputProps.onTouchCancel=createTouchCancelCallback(inputProps.onTouchCancel,createTouchEvent);}if(inputProps.onChange){inputProps.onChange=createChangeCallback(inputProps.onChange,createInputEvent);}if(inputProps.onInput){inputProps.onInput=createInputCallback(inputProps.onInput,createInputEvent);}if(inputProps.onConfirm){inputProps.onConfirm=createConfirmCallback(inputProps.onConfirm,createInputEvent);}if(inputProps.onFocus){inputProps.onFocus=createFocusCallback(inputProps.onFocus,createInputEvent);}if(inputProps.onBlur){inputProps.onBlur=createBlurCallback(inputProps.onBlur,createInputEvent);}if(inputProps.onSubmit){inputProps.onSubmit=createSubmitCallback(inputProps.onSubmit,createFormEvent);}if(inputProps.onReset){inputProps.onReset=createResetCallback(inputProps.onReset,createFormEvent);}if(name==='image'){if(inputProps.onLoad){inputProps.onLoad=createImageLoadCallback(props.onLoad,createImageEvent);}if(inputProps.onError){inputProps.onError=createImageErrorCallback(props.onError,createImageEvent);}}var nextProps=inputProps;if(alias){nextProps=aliasProps(inputProps,alias);}nextProps.ref=ref;return/*#__PURE__*/_react_16_14_0_react["createElement"](name,nextProps);};if(false){}return/*#__PURE__*/_react_16_14_0_react["forwardRef"](Component);}
// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/hostComponents/Button/props/alias/index.js
/* harmony default export */ var props_alias = ({type:'formType'});
// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/hostComponents/Button/props/default/index.wechat.js
/* harmony default export */ var index_wechat = ({hoverClassName:'button-hover',hoverStartTime:20,hoverStayTime:70});
// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/hostComponents/Button/index.js
var Button=createHostComponent('button',props_alias,index_wechat);/* harmony default export */ var hostComponents_Button = (Button);
// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/hostComponents/Form/props/default/index.wechat.js
/* harmony default export */ var default_index_wechat = ({'wechat-report-submit':false,'wechat-report-submit-timeout':0});
// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/hostComponents/Form/index.js
var Form=createHostComponent('form',null,default_index_wechat);/* harmony default export */ var hostComponents_Form = (Form);
// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/hostComponents/Image/props/default/index.wechat.js
/* harmony default export */ var props_default_index_wechat = ({mode:'scaleToFill','wechat-webp':false,'wechat-lazyLoad':false,'wechat-show-menu-by-longpress':false});
// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/hostComponents/Image/index.js
var Image=createHostComponent('image',null,props_default_index_wechat);/* harmony default export */ var hostComponents_Image = (Image);
// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/hostComponents/Input/props/alias/index.js
/* harmony default export */ var Input_props_alias = ({maxLength:'maxlength'});
// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/hostComponents/Input/index.js
var __extends=undefined&&undefined.__extends||function(){var _extendStatics=function extendStatics(d,b){_extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b){if(Object.prototype.hasOwnProperty.call(b,p))d[p]=b[p];}};return _extendStatics(d,b);};return function(d,b){_extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var Input_assign=undefined&&undefined.__assign||function(){Input_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}}return t;};return Input_assign.apply(this,arguments);};var Input_createInputCallback=memoize_one_esm(createCallback);var Input_createConfirmCallback=memoize_one_esm(createCallback);var Input_createFocusCallback=memoize_one_esm(createCallback);var Input_createBlurCallback=memoize_one_esm(createCallback);var Input_Input=function(_super){__extends(Input,_super);function Input(props){var _this=_super.call(this,props)||this;_this.state={value:'',// 阿里
controlled:false};_this.handleInput=function(e){var controlled=_this.state.controlled;if(typeof _this.props.onInput==='function'){return _this.props.onInput(e);}// 微信
// 注意，微信要对 input 受控，必须要在 onInput 方法返回值
return controlled?_this.props.value:undefined;};var controlled=props.value!==undefined;var value=controlled?props.value:props.defaultValue;_this.state={value:value,controlled:controlled};return _this;}Input.prototype.componentDidUpdate=function(){if(this.props.value!==undefined&&this.props.value!==this.state.value){this.setState({value:this.props.value});}};Input.prototype.render=function(){var _a,_b,_c,_d,_e,_f;var inputProps=Input_assign({},this.props);if(inputProps.onInput){inputProps.onInput=Input_createInputCallback(this.handleInput,createInputEvent);}if(inputProps.onConfirm){inputProps.onConfirm=Input_createConfirmCallback(this.props.onConfirm,createInputEvent);}if(inputProps.onFocus){inputProps.onFocus=Input_createFocusCallback(this.props.onFocus,createInputEvent);}if(inputProps.onBlur){inputProps.onBlur=Input_createBlurCallback(this.props.onBlur,createInputEvent);}// 通用属性的默认属性根据平台在这里设置
if(false){}if(true){inputProps.type=(_b=inputProps.type)!==null&&_b!==void 0?_b:'text';inputProps.password=(_c=inputProps.password)!==null&&_c!==void 0?_c:false;inputProps.disabled=(_d=inputProps.disabled)!==null&&_d!==void 0?_d:false;inputProps.focus=(_e=inputProps.focus)!==null&&_e!==void 0?_e:false;inputProps.maxLength=(_f=inputProps.maxLength)!==null&&_f!==void 0?_f:140;}var nextProps=aliasProps(Input_assign(Input_assign({},inputProps),this.state),Input_props_alias);return/*#__PURE__*/_react_16_14_0_react["createElement"]('input',nextProps);};// 平台独有的属性默认值写在这
Input.defaultProps={'toutiao-selection-end':999,'toutiao-selection-start':999,'wechat-placeholder-class':'input-placeholder','wechat-cursor-spacing':0,'wechat-confirm-type':'done','wechat-confirm-hold':false,'wechat-selection-end':-1,'wechat-selection-start':-1,'wechat-adjust-position':true,'wechat-hold-keyboard':false};return Input;}(_react_16_14_0_react["Component"]);/* harmony default export */ var hostComponents_Input = (Input_Input);
// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/hostComponents/Label/index.js
var Label=createHostComponent('label',{htmlFor:'for'});/* harmony default export */ var hostComponents_Label = (Label);
// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/hostComponents/Navigator/props/default/index.wechat.js
/* harmony default export */ var Navigator_props_default_index_wechat = ({'wechat-target':'self','wechat-open-type':'navigate','wechat-delta':1,hoverClassName:'navigator-hover','wechat-hover-stop-propagation':false,hoverStartTime:50,hoverStayTime:600});
// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/hostComponents/Navigator/index.js
var Navigator=createHostComponent('navigator',null,Navigator_props_default_index_wechat);/* harmony default export */ var hostComponents_Navigator = (Navigator);
// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/hostComponents/Text/props/default/index.wechat.js
/* harmony default export */ var Text_props_default_index_wechat = ({selectable:false,'wechat-decode':false});
// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/hostComponents/Text/index.js
var Text=createHostComponent('text',null,Text_props_default_index_wechat);/* harmony default export */ var hostComponents_Text = (Text);
// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/hostComponents/Textarea/props/alias.js
/* harmony default export */ var Textarea_props_alias = ({maxLength:'maxlength'});
// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/hostComponents/Textarea/index.js
var Textarea_extends=undefined&&undefined.__extends||function(){var _extendStatics=function extendStatics(d,b){_extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b){if(Object.prototype.hasOwnProperty.call(b,p))d[p]=b[p];}};return _extendStatics(d,b);};return function(d,b){_extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var Textarea_assign=undefined&&undefined.__assign||function(){Textarea_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}}return t;};return Textarea_assign.apply(this,arguments);};var Textarea_Textarea=function(_super){Textarea_extends(Textarea,_super);function Textarea(props){var _this=_super.call(this,props)||this;_this.state={value:'',// 阿里
controlled:false};_this.handleInput=function(e){var controlled=_this.state.controlled;if(!controlled){_this.setState({value:e.target.value});}if(typeof _this.props.onInput==='function'){return _this.props.onInput(e);}// 微信
// 注意，微信要对 input 受控，必须要在 onInput 方法返回值
return controlled?_this.props.value:e.target.value;};var controlled=props.value!==undefined;var value=controlled?props.value:props.defaultValue;_this.state={value:value,controlled:controlled};return _this;}Textarea.prototype.componentDidUpdate=function(){if(this.props.value!==undefined&&this.props.value!==this.state.value){this.setState({value:this.props.value});}};Textarea.prototype.render=function(){var _a,_b,_c,_d,_e;var inputProps=Textarea_assign(Textarea_assign({},this.props),{onInput:createCallback(this.handleInput,createInputEvent)});if(inputProps.onConfirm){inputProps.onConfirm=createCallback(this.props.onConfirm,createInputEvent);}if(inputProps.onFocus){inputProps.onFocus=createCallback(this.props.onFocus,createInputEvent);}if(inputProps.onBlur){inputProps.onBlur=createCallback(this.props.onBlur,createInputEvent);}if(false){}if(true){inputProps.maxLength=(_b=inputProps.maxLength)!==null&&_b!==void 0?_b:140;inputProps.disabled=(_c=inputProps.disabled)!==null&&_c!==void 0?_c:false;inputProps.focus=(_d=inputProps.focus)!==null&&_d!==void 0?_d:false;inputProps.autoHeight=(_e=inputProps.autoHeight)!==null&&_e!==void 0?_e:false;}var nextProps=aliasProps(Textarea_assign(Textarea_assign({},inputProps),this.state),Textarea_props_alias);return/*#__PURE__*/_react_16_14_0_react["createElement"]('textarea',nextProps);};Textarea.defaultProps={'toutiao-selection-end':999,'toutiao-selection-start':999,'wechat-selection-end':-1,'wechat-selection-start':-1,'wechat-fixed':false,'wechat-placeholder-class':'textarea-placeholder','wechat-cursor-spacing':0,'wechat-cursor':-1,'wechat-show-confirm-bar':true,'wechat-adjust-position':true,'wechat-hold-keyboard':false,'wechat-disable-default-padding':false};return Textarea;}(_react_16_14_0_react["Component"]);/* harmony default export */ var hostComponents_Textarea = (Textarea_Textarea);
// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/hostComponents/View/props/default/index.wechat.js
/* harmony default export */ var View_props_default_index_wechat = ({hoverClassName:'none','wechat-hover-stop-propagation':false,hoverStartTime:50,hoverStayTime:400});
// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/hostComponents/View/index.js
var View=createHostComponent('view',null,View_props_default_index_wechat);/* harmony default export */ var hostComponents_View = (View);
// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/hostComponents/WebView/index.js
var WebView=createHostComponent('web-view',null);/* harmony default export */ var hostComponents_WebView = (WebView);
// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/hostComponents/index.js

// EXTERNAL MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/index.js + 53 modules
var wechat_esm = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/api/index.wechat.js

// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/types/event.js

// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/types/index.js

// EXTERNAL MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/index.js + 25 modules
var runtime_esm = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/components/Modal.js
function Modal(_a){var children=_a.children;var inst=Object(runtime_esm["h" /* usePageInstance */])();return Object(runtime_esm["f" /* createPortal */])(children,inst.modalContainer);}
// CONCATENATED MODULE: ./node_modules/_@remax_one@2.15.4@@remax/one/esm/index.js

// CONCATENATED MODULE: ./node_modules/_remax@2.15.4@remax/one.js


/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */
var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function get(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];});var __setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:true,value:v});}:function(o,v){o["default"]=v;});var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod){if(k!=="default"&&Object.prototype.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);}__setModuleDefault(result,mod);return result;};Object.defineProperty(exports,"__esModule",{value:true});var React=__importStar(__webpack_require__(2));var one_1=__webpack_require__(12);var styles={screen:{height:'100vh',backgroundColor:'#fff',lineHeight:1.4,textAlign:'center'},text:{color:'#999',fontSize:'16PX'}};var ErrorScreen=function ErrorScreen(){return React.createElement(one_1.View,{style:styles.screen},React.createElement(one_1.View,{style:styles.text},"\u9875\u9762\u9047\u5230\u4E00\u4E9B\u95EE\u9898"));};exports.default=ErrorScreen;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}else if(call!==void 0){throw new TypeError("Derived constructors may only return object or undefined");}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function get(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];});var __setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:true,value:v});}:function(o,v){o["default"]=v;});var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod){if(k!=="default"&&Object.prototype.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);}__setModuleDefault(result,mod);return result;};Object.defineProperty(exports,"__esModule",{value:true});var React=__importStar(__webpack_require__(2));var ErrorScreen=/*#__PURE__*/function(_React$Component){_inherits(ErrorScreen,_React$Component);var _super=_createSuper(ErrorScreen);function ErrorScreen(){var _this;_classCallCheck(this,ErrorScreen);_this=_super.apply(this,arguments);_this.state={error:null};return _this;}_createClass(ErrorScreen,[{key:"componentDidCatch",value:function componentDidCatch(error){console.error(error);}},{key:"render",value:function render(){var error=this.state.error;var errorScreen=this.props.errorScreen;if(error){return React.createElement(errorScreen,{error:error});}return this.props.children;}}],[{key:"getDerivedStateFromError",value:function getDerivedStateFromError(error){return{error:error};}}]);return ErrorScreen;}(React.Component);exports.default=ErrorScreen;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
module.exports = __webpack_require__(31);


/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _Users_lv_Desktop_tarodemo_remax_node_modules_remax_plugin_error_screen_2_15_4_remax_plugin_error_screen_lib_ErrorScreen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _Users_lv_Desktop_tarodemo_remax_node_modules_remax_plugin_error_screen_2_15_4_remax_plugin_error_screen_lib_ErrorScreen_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_lv_Desktop_tarodemo_remax_node_modules_remax_plugin_error_screen_2_15_4_remax_plugin_error_screen_lib_ErrorScreen_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_lv_Desktop_tarodemo_remax_node_modules_remax_plugin_error_screen_2_15_4_remax_plugin_error_screen_lib_ErrorBoundary_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _Users_lv_Desktop_tarodemo_remax_node_modules_remax_plugin_error_screen_2_15_4_remax_plugin_error_screen_lib_ErrorBoundary_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_lv_Desktop_tarodemo_remax_node_modules_remax_plugin_error_screen_2_15_4_remax_plugin_error_screen_lib_ErrorBoundary_js__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}/* harmony default export */ __webpack_exports__["default"] = ({onPageComponent:function onPageComponent(_ref){var component=_ref.component;function ErrorBoundaryWrap(props,ref){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lv_Desktop_tarodemo_remax_node_modules_remax_plugin_error_screen_2_15_4_remax_plugin_error_screen_lib_ErrorBoundary_js__WEBPACK_IMPORTED_MODULE_3___default.a,{errorScreen:_Users_lv_Desktop_tarodemo_remax_node_modules_remax_plugin_error_screen_2_15_4_remax_plugin_error_screen_lib_ErrorScreen_js__WEBPACK_IMPORTED_MODULE_2___default.a},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component,_objectSpread(_objectSpread({},props),{},{ref:ref})));}ErrorBoundaryWrap.displayName='ErrorBoundary';return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(ErrorBoundaryWrap);}});

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/index.js + 25 modules
var esm = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/_remax@2.15.4@remax/runtime.js

// EXTERNAL MODULE: external "require('./__remax_runtime_options__')"
var _remax_runtime_options_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/@remax/apply-runtime-options.js
var pluginDriver=new esm["a" /* PluginDriver */]([__webpack_require__(25)].map(function(p){return p.default||p;}));esm["b" /* RuntimeOptions */].apply({platform:"wechat",debug:false,pxToRpx:true,pluginDriver:pluginDriver,hostComponents:_remax_runtime_options_["hostComponents"],pageEvents:_remax_runtime_options_["pageEvents"],appEvents:_remax_runtime_options_["appEvents"]});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/index.js + 25 modules
var esm = __webpack_require__(1);

// EXTERNAL MODULE: ./src/app.css
var app = __webpack_require__(11);

// CONCATENATED MODULE: ./src/app.js
var app_App=function App(props){return props.children;};/* harmony default export */ var src_app = (app_App);
// CONCATENATED MODULE: ./src/app.entry.js
__webpack_require__(11);App(Object(esm["c" /* createAppConfig */])(src_app));

/***/ })
],[[16,1,0]]]);
},{"./__remax_runtime_options__":1,"./remax-vendors.js":5,"./runtime.js":6}],3:[function(require,module,exports){

    var _appConfig = {
  "pages": [
    "pages/index/index",
    "pages/test/index"
  ],
  "window": {
    "navigationBarTitleText": "Remax Wechat Template",
    "navigationBarBackgroundColor": "#282c34"
  }
}
    var pagePath = `pages/index/index`
  var templateText = `
    <REMAX_TPL :data="{root: root}"/>
  `

    var App = (appData)=> {
      return _globalApp(_appConfig)
    }
  

    var Page = (config) => {
      return _globalPage(pagePath,config,templateText)
    }
  

    var Component = (config) => {
      return _globalComponent(pagePath,config,templateText)
    }
  

    Vue.component('REMAX_TPL',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    var _h = eval(`var module = {exports:{}}; var elements = {}; module.exports = { v: function(value) { return value !== undefined ? value : ''; }, tid: function (type, ancestor) { var items = ancestor.split(','); var depth = 1; for (var i = 0; i < items.length; i++) { if (type === items[i]) { depth = depth + 1; } } var id = 'REMAX_TPL_' + depth + '_' + type; return id; } }; `)
  

    Vue.component('REMAX_TPL_1_ad',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_ad-custom',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_audio',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_button',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_camera',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_canvas',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_checkbox',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_checkbox-group',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_cover-image',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_2_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_3_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_4_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_5_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_6_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_7_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_8_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_9_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_10_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_11_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_12_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_13_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_14_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_15_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_16_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_17_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_18_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_19_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_20_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_editor',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_form',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_2_form',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_3_form',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_4_form',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_5_form',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_functional-page-navigator',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_icon',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_2_icon',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_image',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_input',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_keyboard-accessory',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_label',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_2_label',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_3_label',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_4_label',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_5_label',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_live-player',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_live-pusher',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_map',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_match-media',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_movable-area',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_2_movable-area',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_3_movable-area',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_4_movable-area',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_5_movable-area',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_6_movable-area',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_7_movable-area',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_8_movable-area',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_9_movable-area',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_10_movable-area',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_movable-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_2_movable-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_3_movable-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_4_movable-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_5_movable-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_6_movable-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_7_movable-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_8_movable-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_9_movable-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_10_movable-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_navigation-bar',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_navigator',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_official-account',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_open-data',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_page-container',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_page-meta',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_picker',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_picker-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_picker-view-column',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_progress',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_radio',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_radio-group',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_rich-text',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_scroll-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_2_scroll-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_3_scroll-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_4_scroll-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_5_scroll-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_share-element',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_slider',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_swiper',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_switch',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_2_switch',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_3_switch',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_4_switch',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_5_switch',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_6_switch',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_7_switch',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_8_switch',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_9_switch',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_10_switch',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_text',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_2_text',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_3_text',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_4_text',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_5_text',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_textarea',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_video',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_2_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_3_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_4_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_5_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_6_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_7_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_8_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_9_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_10_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_11_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_12_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_13_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_14_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_15_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_16_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_17_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_18_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_19_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_20_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_voip-room',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_web-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_plain-text',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_CONTAINER',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  
require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[3],{

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(32);


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/index.js + 25 modules
var esm = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/_react@16.14.0@react/index.js
var _react_16_14_0_react = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/_remax@2.15.4@remax/wechat.js
var wechat = __webpack_require__(3);

// EXTERNAL MODULE: ./src/pages/index/index.css?modules
var indexmodules = __webpack_require__(6);
var indexmodules_default = /*#__PURE__*/__webpack_require__.n(indexmodules);

// CONCATENATED MODULE: ./src/pages/index/index.js
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}/* harmony default export */ var index = (function(props){var _React$useState=_react_16_14_0_react["useState"]('测试'),_React$useState2=_slicedToArray(_React$useState,2),text=_React$useState2[0],setText=_React$useState2[1];_react_16_14_0_react["useEffect"](function(){console.log('输出当前值',text);setInterval(function(){setText('当前奥术大师大所啊');},2000);});return/*#__PURE__*/_react_16_14_0_react["createElement"](wechat["c" /* View */],{className:indexmodules_default.a.app},/*#__PURE__*/_react_16_14_0_react["createElement"](wechat["c" /* View */],{className:indexmodules_default.a.header},/*#__PURE__*/_react_16_14_0_react["createElement"](wechat["a" /* Image */],{src:"https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ",className:indexmodules_default.a.logo,alt:"logo"}),/*#__PURE__*/_react_16_14_0_react["createElement"](wechat["c" /* View */],{className:indexmodules_default.a.text},"\u7F16\u8F91 ",/*#__PURE__*/_react_16_14_0_react["createElement"](wechat["b" /* Text */],{className:indexmodules_default.a.path},text),"\u5F00\u59CB")));});
// CONCATENATED MODULE: ./src/pages/index/index.entry.js
__webpack_require__(27);Page(Object(esm["e" /* createPageConfig */])(index,'pages/index/index'));

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___2lhPP","logo":"logo___Al4Xb","logo-spin":"logo-spin___3_EwH","text":"text___XEtZ5","header":"header___3qOk9"};

/***/ })

},[[26,1,0]]]);
},{"./../../remax-vendors.js":5,"./../../runtime.js":6}],4:[function(require,module,exports){

    var _appConfig = {
  "pages": [
    "pages/index/index",
    "pages/test/index"
  ],
  "window": {
    "navigationBarTitleText": "Remax Wechat Template",
    "navigationBarBackgroundColor": "#282c34"
  }
}
    var pagePath = `pages/test/index`
  var templateText = `
    <REMAX_TPL :data="{root: root}"/>
  `

    var App = (appData)=> {
      return _globalApp(_appConfig)
    }
  

    var Page = (config) => {
      return _globalPage(pagePath,config,templateText)
    }
  

    var Component = (config) => {
      return _globalComponent(pagePath,config,templateText)
    }
  

    Vue.component('REMAX_TPL',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    var _h = eval(`var module = {exports:{}}; var elements = {}; module.exports = { v: function(value) { return value !== undefined ? value : ''; }, tid: function (type, ancestor) { var items = ancestor.split(','); var depth = 1; for (var i = 0; i < items.length; i++) { if (type === items[i]) { depth = depth + 1; } } var id = 'REMAX_TPL_' + depth + '_' + type; return id; } }; `)
  

    Vue.component('REMAX_TPL_1_ad',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_ad-custom',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_audio',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_button',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_camera',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_canvas',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_checkbox',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_checkbox-group',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_cover-image',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_2_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_3_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_4_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_5_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_6_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_7_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_8_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_9_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_10_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_11_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_12_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_13_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_14_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_15_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_16_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_17_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_18_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_19_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_20_cover-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_editor',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_form',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_2_form',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_3_form',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_4_form',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_5_form',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_functional-page-navigator',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_icon',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_2_icon',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_image',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_input',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_keyboard-accessory',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_label',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_2_label',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_3_label',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_4_label',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_5_label',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_live-player',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_live-pusher',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_map',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_match-media',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_movable-area',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_2_movable-area',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_3_movable-area',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_4_movable-area',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_5_movable-area',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_6_movable-area',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_7_movable-area',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_8_movable-area',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_9_movable-area',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_10_movable-area',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_movable-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_2_movable-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_3_movable-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_4_movable-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_5_movable-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_6_movable-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_7_movable-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_8_movable-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_9_movable-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_10_movable-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_navigation-bar',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_navigator',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_official-account',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_open-data',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_page-container',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_page-meta',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_picker',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_picker-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_picker-view-column',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_progress',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_radio',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_radio-group',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_rich-text',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_scroll-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_2_scroll-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_3_scroll-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_4_scroll-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_5_scroll-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_share-element',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_slider',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_swiper',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_switch',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_2_switch',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_3_switch',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_4_switch',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_5_switch',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_6_switch',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_7_switch',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_8_switch',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_9_switch',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_10_switch',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_text',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_2_text',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_3_text',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_4_text',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_5_text',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_textarea',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_video',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_2_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_3_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_4_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_5_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_6_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_7_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_8_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_9_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_10_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_11_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_12_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_13_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_14_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_15_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_16_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_17_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_18_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_19_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_20_view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_voip-room',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_web-view',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_plain-text',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  

    Vue.component('REMAX_TPL_1_CONTAINER',{
      props:['data'],
      data(){
          return this.$props.data
      },
      template:'<div class="app">13123</div>'
    });
  
require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[4],{

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/index.js + 25 modules
var esm = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/_react@16.14.0@react/index.js
var _react_16_14_0_react = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/_remax@2.15.4@remax/wechat.js
var wechat = __webpack_require__(3);

// EXTERNAL MODULE: ./src/pages/test/index.css?modules
var testmodules = __webpack_require__(7);
var testmodules_default = /*#__PURE__*/__webpack_require__.n(testmodules);

// CONCATENATED MODULE: ./src/pages/test/index.js
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}/* harmony default export */ var test = (function(props){var _React$useState=_react_16_14_0_react["useState"]('测试'),_React$useState2=_slicedToArray(_React$useState,2),text=_React$useState2[0],setText=_React$useState2[1];_react_16_14_0_react["useEffect"](function(){console.log('123456',text);setInterval(function(){setText('当前奥术549879897898大师大所啊');},2000);});return/*#__PURE__*/_react_16_14_0_react["createElement"](wechat["c" /* View */],{className:testmodules_default.a.app},/*#__PURE__*/_react_16_14_0_react["createElement"](wechat["c" /* View */],{className:testmodules_default.a.header},/*#__PURE__*/_react_16_14_0_react["createElement"](wechat["a" /* Image */],{src:"https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ",className:testmodules_default.a.logo,alt:"logo"}),/*#__PURE__*/_react_16_14_0_react["createElement"](wechat["c" /* View */],{className:testmodules_default.a.text},"\u7F16\u8F91 ",/*#__PURE__*/_react_16_14_0_react["createElement"](wechat["b" /* Text */],{className:testmodules_default.a.path},text),"\u5F00\u59CB")));});
// CONCATENATED MODULE: ./src/pages/test/index.entry.js
__webpack_require__(29);Page(Object(esm["e" /* createPageConfig */])(test,'pages/test/index'));

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___NLqrL","logo":"logo___evJnK","logo-spin":"logo-spin___2IW1V","text":"text___HQHxw","header":"header___1qPt3"};

/***/ })

},[[28,1,0]]]);
},{"./../../remax-vendors.js":5,"./../../runtime.js":6}],5:[function(require,module,exports){

    var _appConfig = {
  "pages": [
    "pages/index/index",
    "pages/test/index"
  ],
  "window": {
    "navigationBarTitleText": "Remax Wechat Template",
    "navigationBarBackgroundColor": "#282c34"
  }
}
    var pagePath = `remax/dist/remax-vendors`
  

    var App = (appData)=> {
      return _globalApp(_appConfig)
    }
  

    var Page = (config) => {
      return _globalPage(pagePath,config,templateText)
    }
  

    var Component = (config) => {
      return _globalComponent(pagePath,config,templateText)
    }
  
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ RuntimeOptions_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ esm_AppInstanceContext; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ esm_PageInstanceContext; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ esm_ComponentInstanceContext; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ createPageWrapper; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ esm_PluginDriver; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ isClassComponent; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ Lifecycle; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ AppLifecycle; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ callbackName; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ usePageInstance; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ promisify; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ find; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ includes; });

// UNUSED EXPORTS: lifeCycleName, registerLifecycle, usePageEvent, useComponentInstance, useAppEvent, formatDisplayName

// NAMESPACE OBJECT: ./node_modules/_@remax_framework-shared@2.15.4@@remax/framework-shared/esm/RuntimeOptions.js
var RuntimeOptions_namespaceObject = {};
__webpack_require__.r(RuntimeOptions_namespaceObject);
__webpack_require__.d(RuntimeOptions_namespaceObject, "apply", function() { return apply; });
__webpack_require__.d(RuntimeOptions_namespaceObject, "get", function() { return get; });
__webpack_require__.d(RuntimeOptions_namespaceObject, "reset", function() { return RuntimeOptions_reset; });

// CONCATENATED MODULE: ./node_modules/_@remax_framework-shared@2.15.4@@remax/framework-shared/esm/PluginDriver.js
var PluginDriver=function(){function PluginDriver(plugins){this.plugins=plugins;}PluginDriver.prototype.onAppConfig=function(config){return this.plugins.reduce(function(acc,plugin){if(typeof plugin.onAppConfig==='function'){acc=plugin.onAppConfig({config:acc});}return acc;},config);};PluginDriver.prototype.onPageConfig=function(_a){var config=_a.config,page=_a.page;return this.plugins.reduce(function(acc,plugin){if(typeof plugin.onPageConfig==='function'){acc=plugin.onPageConfig({config:acc,page:page});}return acc;},config);};PluginDriver.prototype.onAppComponent=function(component){return this.plugins.reduce(function(acc,plugin){if(typeof plugin.onAppComponent==='function'){acc=plugin.onAppComponent({component:acc});}return acc;},component);};PluginDriver.prototype.onPageComponent=function(_a){var component=_a.component,page=_a.page;return this.plugins.reduce(function(acc,plugin){if(typeof plugin.onPageComponent==='function'){acc=plugin.onPageComponent({component:acc,page:page});}return acc;},component);};PluginDriver.prototype.onMiniComponent=function(_a){var component=_a.component,context=_a.context;return this.plugins.reduce(function(acc,plugin){if(typeof plugin.onMiniComponent==='function'){acc=plugin.onMiniComponent({component:acc,context:context});}return acc;},component);};PluginDriver.prototype.onCreateHostComponent=function(component){return this.plugins.reduce(function(acc,plugin){if(typeof plugin.onCreateHostComponent==='function'){acc=plugin.onCreateHostComponent({component:acc});}return acc;},component);};PluginDriver.prototype.onCreateHostComponentElement=function(element){return this.plugins.reduce(function(acc,plugin){if(typeof plugin.onCreateHostComponentElement==='function'){acc=plugin.onCreateHostComponentElement({element:acc});}return acc;},element);};return PluginDriver;}();/* harmony default export */ var esm_PluginDriver = (PluginDriver);
// CONCATENATED MODULE: ./node_modules/_@remax_framework-shared@2.15.4@@remax/framework-shared/esm/RuntimeOptions.js
var __read=undefined&&undefined.__read||function(o,n){var m=typeof Symbol==="function"&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((n===void 0||n-->0)&&!(r=i.next()).done){ar.push(r.value);}}catch(error){e={error:error};}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i);}finally{if(e)throw e.error;}}return ar;};var __spread=undefined&&undefined.__spread||function(){for(var ar=[],i=0;i<arguments.length;i++){ar=ar.concat(__read(arguments[i]));}return ar;};var defaultRuntimeOptions={pxToRpx:true,hostComponents:{},debug:false,appEvents:[],pageEvents:{},pluginDriver:new esm_PluginDriver([]),history:{},mpa:false};var runtimeOptions=defaultRuntimeOptions;function merge(){var options=[];for(var _i=0;_i<arguments.length;_i++){options[_i]=arguments[_i];}return options.reduce(function(acc,option){var _a,_b,_c,_d,_e,_f,_g,_h,_j;acc.appEvents=(_a=option.appEvents)!==null&&_a!==void 0?_a:acc.appEvents;acc.debug=(_b=option.debug)!==null&&_b!==void 0?_b:acc.debug;acc.history=(_c=option.history)!==null&&_c!==void 0?_c:acc.history;Object.keys((_d=option.hostComponents)!==null&&_d!==void 0?_d:{}).forEach(function(k){var _a,_b,_c,_d,_e,_f,_g;var inputHostComponent=(_a=option.hostComponents)===null||_a===void 0?void 0:_a[k];acc.hostComponents[k]=(_b=acc.hostComponents[k])!==null&&_b!==void 0?_b:{};acc.hostComponents[k].additional=(_c=inputHostComponent===null||inputHostComponent===void 0?void 0:inputHostComponent.additional)!==null&&_c!==void 0?_c:acc.hostComponents[k].additional;acc.hostComponents[k].alias=Object.assign((_d=acc.hostComponents[k].alias)!==null&&_d!==void 0?_d:{},(_e=inputHostComponent===null||inputHostComponent===void 0?void 0:inputHostComponent.alias)!==null&&_e!==void 0?_e:{});acc.hostComponents[k].props=__spread(new Set(__spread((_f=acc.hostComponents[k].props)!==null&&_f!==void 0?_f:[],(_g=inputHostComponent===null||inputHostComponent===void 0?void 0:inputHostComponent.props)!==null&&_g!==void 0?_g:[])));});acc.pluginDriver=(_e=option.pluginDriver)!==null&&_e!==void 0?_e:acc.pluginDriver;acc.pageEvents=(_f=option.pageEvents)!==null&&_f!==void 0?_f:acc.pageEvents;acc.platform=(_g=option.platform)!==null&&_g!==void 0?_g:acc.platform;acc.pxToRpx=(_h=option.pxToRpx)!==null&&_h!==void 0?_h:acc.pxToRpx;acc.mpa=(_j=option.mpa)!==null&&_j!==void 0?_j:acc.mpa;return acc;},runtimeOptions);}function apply(options){runtimeOptions=merge(options);}function get(key){return runtimeOptions[key];}function RuntimeOptions_reset(){runtimeOptions=defaultRuntimeOptions;}
// CONCATENATED MODULE: ./node_modules/_@remax_framework-shared@2.15.4@@remax/framework-shared/esm/AppInstanceContext.js
var AppInstanceContext={lifecycleCallback:{},registerLifecycle:function registerLifecycle(lifecycle,callback){var _this=this;this.lifecycleCallback[lifecycle]=this.lifecycleCallback[lifecycle]||[];this.lifecycleCallback[lifecycle].push(callback);return function(){_this.lifecycleCallback[lifecycle].splice(_this.lifecycleCallback[lifecycle].indexOf(callback),1);};}};/* harmony default export */ var esm_AppInstanceContext = (AppInstanceContext);
// EXTERNAL MODULE: ./node_modules/_react@16.14.0@react/index.js
var _react_16_14_0_react = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/_@remax_framework-shared@2.15.4@@remax/framework-shared/esm/PageInstanceContext.js
var PageInstanceContext=/*#__PURE__*/_react_16_14_0_react["createContext"](null);/* harmony default export */ var esm_PageInstanceContext = (PageInstanceContext);
// CONCATENATED MODULE: ./node_modules/_@remax_framework-shared@2.15.4@@remax/framework-shared/esm/ComponentInstanceContext.js
var ComponentInstanceContext=/*#__PURE__*/_react_16_14_0_react["createContext"](null);/* harmony default export */ var esm_ComponentInstanceContext = (ComponentInstanceContext);
// EXTERNAL MODULE: ./node_modules/_react-is@16.13.1@react-is/index.js
var _react_is_16_13_1_react_is = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/_@remax_framework-shared@2.15.4@@remax/framework-shared/esm/utils/isClassComponent.js
function isClassComponent(Component){return Component.prototype&&typeof Component.prototype.render==='function';}
// CONCATENATED MODULE: ./node_modules/_@remax_framework-shared@2.15.4@@remax/framework-shared/esm/utils/capitalize.js
function capitalize(str){return str.charAt(0).toUpperCase()+str.slice(1);}
// CONCATENATED MODULE: ./node_modules/_@remax_framework-shared@2.15.4@@remax/framework-shared/esm/utils/lowercase.js
function lowercase(str){return str.charAt(0).toLowerCase()+str.slice(1);}
// CONCATENATED MODULE: ./node_modules/_@remax_framework-shared@2.15.4@@remax/framework-shared/esm/lifecycle.js
var Lifecycle;(function(Lifecycle){Lifecycle["load"]="load";Lifecycle["show"]="show";Lifecycle["hide"]="hide";Lifecycle["ready"]="ready";Lifecycle["pullDownRefresh"]="pullDownRefresh";Lifecycle["reachBottom"]="reachBottom";Lifecycle["pageScroll"]="pageScroll";Lifecycle["shareAppMessage"]="shareAppMessage";Lifecycle["shareTimeline"]="shareTimeline";Lifecycle["titleClick"]="titleClick";Lifecycle["optionMenuClick"]="optionMenuClick";Lifecycle["popMenuClick"]="popMenuClick";Lifecycle["pullIntercept"]="pullIntercept";Lifecycle["back"]="back";Lifecycle["keyboardHeight"]="keyboardHeight";Lifecycle["tabItemTap"]="tabItemTap";Lifecycle["beforeTabItemTap"]="beforeTabItemTap";Lifecycle["resize"]="resize";Lifecycle["unload"]="unload";})(Lifecycle||(Lifecycle={}));var AppLifecycle;(function(AppLifecycle){AppLifecycle["launch"]="launch";AppLifecycle["show"]="show";AppLifecycle["hide"]="hide";AppLifecycle["error"]="error";AppLifecycle["shareAppMessage"]="shareAppMessage";AppLifecycle["pageNotFound"]="pageNotFound";AppLifecycle["unhandledRejection"]="unhandledRejection";AppLifecycle["themeChange"]="themeChange";})(AppLifecycle||(AppLifecycle={}));function lifeCycleName(name){if(name.startsWith('before')){return name;}return lowercase(name.slice(2));}function callbackName(name){if(name.startsWith('before')){return name;}return'on'+capitalize(name);}function registerLifecycle(instance,method,callback){return instance.registerLifecycle(method,callback);}
// CONCATENATED MODULE: ./node_modules/_@remax_framework-shared@2.15.4@@remax/framework-shared/esm/createPageWrapper.js
var __extends=undefined&&undefined.__extends||function(){var _extendStatics=function extendStatics(d,b){_extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b){if(Object.prototype.hasOwnProperty.call(b,p))d[p]=b[p];}};return _extendStatics(d,b);};return function(d,b){_extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var createPageWrapper_read=undefined&&undefined.__read||function(o,n){var m=typeof Symbol==="function"&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((n===void 0||n-->0)&&!(r=i.next()).done){ar.push(r.value);}}catch(error){e={error:error};}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i);}finally{if(e)throw e.error;}}return ar;};var createPageWrapper_spread=undefined&&undefined.__spread||function(){for(var ar=[],i=0;i<arguments.length;i++){ar=ar.concat(createPageWrapper_read(arguments[i]));}return ar;};function createPageWrapper(Page,name){var WrappedPage=get('pluginDriver').onPageComponent({component:Page,page:name});return function(_super){__extends(PageWrapper,_super);function PageWrapper(props){var _this=_super.call(this,props)||this;// 页面组件的实例
_this.pageComponentInstance=null;_this.callbacks=new Map();Object.keys(Lifecycle).forEach(function(phase){var callback=callbackName(phase);_this[callback]=function(){var args=[];for(var _i=0;_i<arguments.length;_i++){args[_i]=arguments[_i];}return _this.callLifecycle.apply(_this,createPageWrapper_spread([phase],args));};});return _this;}PageWrapper.prototype.callLifecycle=function(phase){var _a;var args=[];for(var _i=1;_i<arguments.length;_i++){args[_i-1]=arguments[_i];}var callback=callbackName(phase);if(this.pageComponentInstance&&typeof this.pageComponentInstance[callback]==='function'){return(_a=this.pageComponentInstance)[callback].apply(_a,createPageWrapper_spread(args));}};PageWrapper.prototype.render=function(){var _this=this;var props={location:{query:this.props.query||{}}};if(isClassComponent(Page)||Page.$$typeof===_react_is_16_13_1_react_is["ForwardRef"]){props.ref=function(node){return _this.pageComponentInstance=node;};}return/*#__PURE__*/_react_16_14_0_react["createElement"](esm_PageInstanceContext.Provider,{value:this.props.page},/*#__PURE__*/_react_16_14_0_react["createElement"](WrappedPage,props));};return PageWrapper;}(_react_16_14_0_react["Component"]);}
// CONCATENATED MODULE: ./node_modules/_@remax_framework-shared@2.15.4@@remax/framework-shared/esm/hooks.js
function usePageEvent(eventName,callback){var pageInstance=Object(_react_16_14_0_react["useContext"])(esm_PageInstanceContext);var lifeCycle=lifeCycleName(eventName);Object(_react_16_14_0_react["useLayoutEffect"])(function(){return registerLifecycle(pageInstance,lifeCycle,callback);});}function useComponentInstance(){return Object(_react_16_14_0_react["useContext"])(esm_ComponentInstanceContext);}function usePageInstance(){return Object(_react_16_14_0_react["useContext"])(esm_PageInstanceContext);}/**
 * App Hooks
 */function useAppEvent(eventName,callback){var lifeCycle=lifeCycleName(eventName);Object(_react_16_14_0_react["useLayoutEffect"])(function(){return registerLifecycle(esm_AppInstanceContext,lifeCycle,callback);});}
// CONCATENATED MODULE: ./node_modules/_@remax_framework-shared@2.15.4@@remax/framework-shared/esm/formatDisplayName.js
function formatDisplayName(name){return name.replace(/-(.)/g,function($1){return $1.toUpperCase();}).replace(/-/g,'').replace(/^(.)/,function($1){return $1.toUpperCase();});}
// CONCATENATED MODULE: ./node_modules/_@remax_framework-shared@2.15.4@@remax/framework-shared/esm/promisify.js
var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}}return t;};return __assign.apply(this,arguments);};function promisify(api){return function(arg){if(arg===void 0){arg={};}return new Promise(function(resolve,reject){var promisifyArg=arg;api(__assign(__assign({},promisifyArg),{success:function success(res){if(promisifyArg&&typeof promisifyArg.success==='function'){promisifyArg.success(res);}resolve(res);},fail:function fail(res){if(promisifyArg&&typeof promisifyArg.fail==='function'){promisifyArg.fail(res);}reject(res);}}));});};}
// CONCATENATED MODULE: ./node_modules/_@remax_framework-shared@2.15.4@@remax/framework-shared/esm/shim.js
function find(list,predicate){for(var i=0;i<list.length;i++){var value=list[i];if(predicate(value,i,list)){return value;}}}function includes(list,searchElement){for(var i=0;i<list.length;i++){var value=list[i];if(value===searchElement){return true;}}return false;}
// CONCATENATED MODULE: ./node_modules/_@remax_framework-shared@2.15.4@@remax/framework-shared/esm/index.js


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ createAppConfig; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ createPageConfig; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ createHostComponent; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ createPortal; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ esm["g" /* RuntimeOptions */]; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ esm["f" /* PluginDriver */]; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ esm["n" /* usePageInstance */]; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ unstable_batchedUpdates; });

// UNUSED EXPORTS: render, createComponentConfig, createNativeComponent, usePageEvent, useAppEvent, useComponentInstance, useNativeEffect, useQuery

// EXTERNAL MODULE: ./node_modules/_react-reconciler@0.26.2@react-reconciler/index.js
var _react_reconciler_0_26_2_react_reconciler = __webpack_require__(13);
var _react_reconciler_0_26_2_react_reconciler_default = /*#__PURE__*/__webpack_require__.n(_react_reconciler_0_26_2_react_reconciler);

// EXTERNAL MODULE: ./node_modules/_scheduler@0.19.1@scheduler/index.js
var _scheduler_0_19_1_scheduler = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/constants.js
var REMAX_ROOT_BACKUP='$$REMAX_ROOT_BACKUP';var REMAX_METHOD='$$REMAX_METHOD';var TYPE_TEXT='plain-text';
// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/instanceId.js
var instanceId=0;function instanceId_reset(){instanceId=0;}function generate(){var id=instanceId;instanceId+=1;return id;}
// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/utils/plainStyle/CSSProperty.js
// https://github.com/facebook/react/blob/master/packages/react-dom/src/shared/CSSProperty.js
/**
 * CSS properties which accept numbers but are not in units of "px".
 */var isUnitlessNumber={animationIterationCount:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,columns:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridArea:true,gridRow:true,gridRowEnd:true,gridRowSpan:true,gridRowStart:true,gridColumn:true,gridColumnEnd:true,gridColumnSpan:true,gridColumnStart:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,zoom:true,// SVG-related properties
fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true};/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */function prefixKey(prefix,key){return prefix+key.charAt(0).toUpperCase()+key.substring(1);}/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */var prefixes=['Webkit','ms','Moz','O'];var _loop_1=function _loop_1(prop){prefixes.forEach(function(prefix){isUnitlessNumber[prefixKey(prefix,prop)]=isUnitlessNumber[prop];});};for(var CSSProperty_prop in isUnitlessNumber){_loop_1(CSSProperty_prop);}
// EXTERNAL MODULE: ./node_modules/_@remax_framework-shared@2.15.4@@remax/framework-shared/esm/index.js + 14 modules
var esm = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/utils/plainStyle/index.js
var __read=undefined&&undefined.__read||function(o,n){var m=typeof Symbol==="function"&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((n===void 0||n-->0)&&!(r=i.next()).done){ar.push(r.value);}}catch(error){e={error:error};}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i);}finally{if(e)throw e.error;}}return ar;};var __spread=undefined&&undefined.__spread||function(){for(var ar=[],i=0;i<arguments.length;i++){ar=ar.concat(__read(arguments[i]));}return ar;};var vendorPrefixes=['webkit','moz','ms','o'];var plainStyle_transformReactStyleKey=function transformReactStyleKey(key){// css3 var
if(key===null||key===void 0?void 0:key.startsWith('--')){return key;}var styleValue=key.replace(/\.?([A-Z]+)/g,function(_x,y){return'-'+y.toLowerCase();});// vendor prefix
if(styleValue===null||styleValue===void 0?void 0:styleValue.startsWith('-')){var firstWord_1=styleValue.split('-').filter(function(s){return s;})[0];styleValue=styleValue.replace(/^-/,'');if(Object(esm["j" /* find */])(vendorPrefixes,function(prefix){return prefix===firstWord_1;})){styleValue='-'+styleValue;}}return styleValue;};var transformPx=function transformPx(value){if(typeof value!=='string'){return value;}return value.replace(/\b(\d+(\.\d+)?)px\b/g,function(match,x){var targetUnit='rpx';var size=Number(x);return size%1===0?size+targetUnit:size.toFixed(2)+targetUnit;});};var plainStyle_plainStyle=function plainStyle(style){return Object.keys(style).reduce(function(acc,key){var value=style[key];if(!Number.isNaN(Number(value))&&!isUnitlessNumber[key]){value=value+'rpx';}return __spread(acc,[plainStyle_transformReactStyleKey(key)+":"+(esm["g" /* RuntimeOptions */].get('pxToRpx')?transformPx(value):value)+";"]);},[]).join('');};/* harmony default export */ var utils_plainStyle = (plainStyle_plainStyle);
// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/propsAlias.js
function getAlias(prop,type){var _a,_b;var hostComponent=esm["g" /* RuntimeOptions */].get('hostComponents')[type];var prefix=esm["g" /* RuntimeOptions */].get('platform')+"-";// 判断是否是平台独有属性
if(prop.startsWith(prefix)){return prop.replace(new RegExp("^"+prefix),'');}return(_b=(_a=hostComponent===null||hostComponent===void 0?void 0:hostComponent.alias)===null||_a===void 0?void 0:_a[prop])!==null&&_b!==void 0?_b:prop;}function getValue(prop,value){if(prop.toLowerCase().endsWith('style')&&Object.prototype.toString.call(value)==='[object Object]'){return utils_plainStyle(value);}return value;}function propAlias(prop,value,type){return[getAlias(prop,type),getValue(prop,value)];}function propsAlias(props,type){if(!props){return props;}var prefix=esm["g" /* RuntimeOptions */].get('platform')+"-";var aliasProps={};for(var prop in props){// 平台前缀属性优先级提升
// @see https://github.com/remaxjs/remax/issues/1409
var hasPrefix=prop.startsWith(prefix);var key=getAlias(prop,type);var value=getValue(prop,props[prop]);if(hasPrefix){aliasProps[key]=value;}else{aliasProps[key]=aliasProps[key]||value;}}return aliasProps;}
// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/VNode.js
var VNode_read=undefined&&undefined.__read||function(o,n){var m=typeof Symbol==="function"&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((n===void 0||n-->0)&&!(r=i.next()).done){ar.push(r.value);}}catch(error){e={error:error};}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i);}finally{if(e)throw e.error;}}return ar;};var VNode_spread=undefined&&undefined.__spread||function(){for(var ar=[],i=0;i<arguments.length;i++){ar=ar.concat(VNode_read(arguments[i]));}return ar;};function toRawNode(node){if(node.type===TYPE_TEXT){return{id:node.id,type:node.type,text:node.text};}return{id:node.id,type:node.type,props:propsAlias(node.props,node.type),children:[],text:node.text};}function toRawProps(prop,value,type){return propAlias(prop,value,type);}var VNode_VNode=function(){function VNode(_a){var id=_a.id,type=_a.type,props=_a.props,container=_a.container;this.mounted=false;this.deleted=false;this.parent=null;this.firstChild=null;this.lastChild=null;this.size=0;this.previousSibling=null;this.nextSibling=null;this.id=id;this.container=container;this.type=type;this.props=props;}VNode.prototype.appendChild=function(node){this.removeChild(node);this.size+=1;node.parent=this;node.deleted=false;// 交换节点时删除的节点会被复用
if(!this.firstChild){this.firstChild=node;}if(this.lastChild){this.lastChild.nextSibling=node;node.previousSibling=this.lastChild;}this.lastChild=node;if(this.isMounted()){this.container.requestUpdate({type:'splice',path:this.path,start:node.index,id:node.id,deleteCount:0,children:this.children,items:[node.toJSON()],node:this});}};VNode.prototype.removeChild=function(node){var previousSibling=node.previousSibling,nextSibling=node.nextSibling;if(node.parent!==this){return;}var index=node.index;this.size-=1;if(this.firstChild===node){this.firstChild=node.nextSibling;}if(this.lastChild===node){this.lastChild=node.previousSibling;}if(previousSibling){previousSibling.nextSibling=nextSibling;}if(nextSibling){nextSibling.previousSibling=previousSibling;}node.previousSibling=null;node.nextSibling=null;node.deleted=true;if(this.isMounted()){this.container.requestUpdate({type:'splice',path:this.path,start:index,id:node.id,deleteCount:1,children:this.children,items:[],node:this});}};VNode.prototype.insertBefore=function(node,referenceNode){this.removeChild(node);this.size+=1;node.parent=this;node.deleted=false;// 交换节点时删除的节点会被复用
if(referenceNode===this.firstChild){this.firstChild=node;}if(referenceNode.previousSibling){referenceNode.previousSibling.nextSibling=node;node.previousSibling=referenceNode.previousSibling;}referenceNode.previousSibling=node;node.nextSibling=referenceNode;if(this.isMounted()){this.container.requestUpdate({type:'splice',path:this.path,start:node.index,id:node.id,deleteCount:0,children:this.children,items:[node.toJSON()],node:this});}};VNode.prototype.update=function(payload){if(this.type==='text'||!payload){this.container.requestUpdate({type:'splice',// root 不会更新，所以肯定有 parent
path:this.parent.path,start:this.index,id:this.id,deleteCount:1,items:[this.toJSON()],node:this});return;}for(var i=0;i<payload.length;i=i+2){var _a=VNode_read(toRawProps(payload[i],payload[i+1],this.type),2),propName=_a[0],propValue=_a[1];var path=VNode_spread(this.parent.path,['nodes',this.id.toString(),'props']);if(esm["g" /* RuntimeOptions */].get('platform')==='ali'){path=VNode_spread(this.parent.path,["children["+this.index+"].props"]);}this.container.requestUpdate({type:'set',path:path,name:propName,value:propValue,node:this});}};Object.defineProperty(VNode.prototype,"index",{get:function get(){var value=0;var previousSibling=this.previousSibling;while(previousSibling){value+=1;previousSibling=previousSibling.previousSibling;}return value;},enumerable:false,configurable:true});Object.defineProperty(VNode.prototype,"children",{get:function get(){var arr=[];var item=this.firstChild;while(item){arr.push(item);item=item.nextSibling;}return arr;},enumerable:false,configurable:true});Object.defineProperty(VNode.prototype,"path",{get:function get(){var dataPath=[];var parents=[];var parent=this.parent;while(parent){parents.unshift(parent);parent=parent.parent;}for(var i=0;i<parents.length;i++){var child=parents[i+1]||this;if(esm["g" /* RuntimeOptions */].get('platform')==='ali'){dataPath.push('children');dataPath.push(child.index.toString());}else{dataPath.push('nodes');dataPath.push(child.id.toString());}}return dataPath;},enumerable:false,configurable:true});VNode.prototype.isMounted=function(){return this.parent?this.parent.isMounted():this.mounted;};VNode.prototype.isDeleted=function(){var _a,_b;return this.deleted===true?this.deleted:(_b=(_a=this.parent)===null||_a===void 0?void 0:_a.isDeleted())!==null&&_b!==void 0?_b:false;};VNode.prototype.toJSON=function(){var stack=[];var rawNode=toRawNode(this);stack.push({currentNode:rawNode,children:this.children});while(stack.length>0){// while 循环已经保证了不会有空值
var stackItem=stack.pop();var _a=stackItem.children,children=_a===void 0?[]:_a,currentNode=stackItem.currentNode;for(var i=children.length-1;i>=0;i--){var currentVNode=children[i];var currentRawNode=toRawNode(currentVNode);if(esm["g" /* RuntimeOptions */].get('platform')!=='ali'){currentNode.children.unshift(currentRawNode.id);}else{currentNode.children.unshift(currentRawNode);}if(esm["g" /* RuntimeOptions */].get('platform')!=='ali'){if(!currentNode.nodes){currentNode.nodes={};}currentNode.nodes[currentRawNode.id]=currentRawNode;}stack.push({currentNode:currentRawNode,children:currentVNode.children});}}return rawNode;};return VNode;}();/* harmony default export */ var esm_VNode = (VNode_VNode);
// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/SyntheticEvent/constants.js
var DEPRECATED_CATCH_TYPE='catchClick';var SYNTHETIC_TYPES=['onClick','onTap','onLongClick','onLongTap','onTouchMove','onTouchStart','onTouchEnd'];
// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/SyntheticEvent/stopPropagation.js
var isPropagationStopped={};SYNTHETIC_TYPES.forEach(function(type){isPropagationStopped[type]=false;});/**
 * 检查父元素里还有没有点击事件
 *
 * @export
 * @param {VNode} node
 * @returns
 */function validate(node,eventType){var _a;var parent=node.parent;if(!parent){isPropagationStopped[eventType]=false;return;}if((_a=parent.props)===null||_a===void 0?void 0:_a[eventType]){return;}validate(parent,eventType);}function stopPropagation(node,eventType){isPropagationStopped[eventType]=true;validate(node,eventType);}
// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/SyntheticEvent/createCallbackProxy.js
var createCallbackProxy_read=undefined&&undefined.__read||function(o,n){var m=typeof Symbol==="function"&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((n===void 0||n-->0)&&!(r=i.next()).done){ar.push(r.value);}}catch(error){e={error:error};}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i);}finally{if(e)throw e.error;}}return ar;};var createCallbackProxy_spread=undefined&&undefined.__spread||function(){for(var ar=[],i=0;i<arguments.length;i++){ar=ar.concat(createCallbackProxy_read(arguments[i]));}return ar;};function isSyntheticType(inputType){if(DEPRECATED_CATCH_TYPE===inputType){console.warn('DEPRECATION: remax 已支持在 onClick 事件中使用 stopPropagation 阻止事件冒泡，请尽量不要使用 catchClick');}return!!Object(esm["j" /* find */])(SYNTHETIC_TYPES,function(type){return type===inputType;});}function createBaseSyntheticEvent(node,eventType,nativeEvent){if(!nativeEvent){return;}// 添加阻止冒泡方法
nativeEvent.stopPropagation=function(){stopPropagation(node,eventType);};return nativeEvent;}function createCallbackProxy(eventType,node,callback){if(!isSyntheticType(eventType)){return callback;}return function(nativeEvent){var restParams=[];for(var _i=1;_i<arguments.length;_i++){restParams[_i-1]=arguments[_i];}var syntheticEvent=createBaseSyntheticEvent(node,eventType,nativeEvent);if(isPropagationStopped[eventType]){validate(node,eventType);return;}return callback.apply(void 0,createCallbackProxy_spread([syntheticEvent],restParams));};}
// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/hostConfig/diffProperties.js
var STYLE=['style','placeholderStyle'];var CHILDREN='children';var CLASS_NAME='className';function diffProperties(lastRawProps,nextRawProps){var updatePayload=[];var lastProps=lastRawProps;var nextProps=nextRawProps;var propKey;var styleName;var hasOwnProperty=Object.prototype.hasOwnProperty;var styleUpdates={};for(propKey in lastProps){if(hasOwnProperty.call(nextProps,propKey)||!hasOwnProperty.call(lastProps,propKey)||lastProps[propKey]==null){continue;}if(Object(esm["k" /* includes */])(STYLE,propKey)){var lastStyle=lastProps[propKey];for(styleName in lastStyle){if(hasOwnProperty.call(lastStyle,styleName)){if(!styleUpdates[propKey]){styleUpdates[propKey]={};}styleUpdates[propKey][styleName]='';}}}else{// For all other deleted properties we add it to the queue. We use
// the whitelist in the commit phase instead.
updatePayload.push(propKey,propKey===CLASS_NAME?'':null);}}for(propKey in nextProps){var nextProp=nextProps[propKey];var lastProp=lastProps!=null?lastProps[propKey]:undefined;if(!hasOwnProperty.call(nextProps,propKey)||nextProp===lastProp||nextProp==null&&lastProp==null){continue;}if(Object(esm["k" /* includes */])(STYLE,propKey)){if(false){}if(lastProp){// Unset styles on `lastProp` but not on `nextProp`.
for(styleName in lastProp){if(hasOwnProperty.call(lastProp,styleName)&&(!nextProp||!hasOwnProperty.call(nextProp,styleName))){if(!styleUpdates[propKey]){styleUpdates[propKey]={};}styleUpdates[propKey][styleName]='';}}// Update styles that changed since `lastProp`.
for(styleName in nextProp){if(hasOwnProperty.call(nextProp,styleName)&&lastProp[styleName]!==nextProp[styleName]){if(!styleUpdates[propKey]){styleUpdates[propKey]={};}styleUpdates[propKey][styleName]=nextProp[styleName];}}}else{// Relies on `updateStylesByID` not mutating `styleUpdates`.
if(!styleUpdates[propKey]){updatePayload.push(propKey,null);}styleUpdates[propKey]=nextProp;}}else if(propKey===CHILDREN){if(lastProp!==nextProp&&(typeof nextProp==='string'||typeof nextProp==='number')){updatePayload.push(propKey,''+nextProp);}}else{// For any other property we always add it to the queue and then we
// filter it out using the whitelist during the commit.
updatePayload.push(propKey,nextProp);}}// 由于 style 要转换成 string， 所以必须整个 style 对象都更新
for(var styleKey in styleUpdates){var styleValue=styleUpdates[styleKey];if(styleValue){updatePayload.push(styleKey,Object.assign({},lastProps[styleKey],styleValue));}}return updatePayload.length?updatePayload:null;}
// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/hostConfig/index.js
var __values=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function next(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};var scheduleDeferredCallback=_scheduler_0_19_1_scheduler["unstable_scheduleCallback"],cancelDeferredCallback=_scheduler_0_19_1_scheduler["unstable_cancelCallback"],shouldYield=_scheduler_0_19_1_scheduler["unstable_shouldYield"],now=_scheduler_0_19_1_scheduler["unstable_now"];var DOM_TAG_MAP={span:'text',div:'view',img:'image'};function processProps(newProps,node,id){var e_1,_a;var props={};try{for(var _b=__values(Object.keys(newProps)),_c=_b.next();!_c.done;_c=_b.next()){var propKey=_c.value;if(typeof newProps[propKey]==='function'){var contextKey=REMAX_METHOD+"_"+id+"_"+propKey;node.container.createCallback(contextKey,createCallbackProxy(propKey,node,newProps[propKey]));props[propKey]=contextKey;}else if(propKey==='style'){props[propKey]=newProps[propKey]||'';}else if(propKey==='children'){// pass
}else{props[propKey]=newProps[propKey];}}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(_c&&!_c.done&&(_a=_b.return))_a.call(_b);}finally{if(e_1)throw e_1.error;}}return props;}var rootHostContext={};var childHostContext={};/* harmony default export */ var hostConfig = ({now:now,getPublicInstance:function getPublicInstance(inst){return inst;},getRootHostContext:function getRootHostContext(){return rootHostContext;},shouldSetTextContent:function shouldSetTextContent(type){return type==='stub-block';},prepareForCommit:function prepareForCommit(){return null;},preparePortalMount:function preparePortalMount(){// nothing to do
},clearContainer:function clearContainer(){// nothing to do
},resetAfterCommit:function resetAfterCommit(container){container.applyUpdate();},getChildHostContext:function getChildHostContext(){return childHostContext;},createInstance:function createInstance(type,newProps,container){var _a;var id=generate();var node=new esm_VNode({id:id,type:(_a=DOM_TAG_MAP[type])!==null&&_a!==void 0?_a:type,props:{},container:container});node.props=processProps(newProps,node,id);return node;},createTextInstance:function createTextInstance(text,container){var id=generate();var node=new esm_VNode({id:id,type:TYPE_TEXT,props:null,container:container});node.text=text;return node;},commitTextUpdate:function commitTextUpdate(node,oldText,newText){if(oldText!==newText){node.text=newText;node.update();}},prepareUpdate:function prepareUpdate(node,type,lastProps,nextProps){lastProps=processProps(lastProps,node,node.id);nextProps=processProps(nextProps,node,node.id);return diffProperties(lastProps,nextProps);},commitUpdate:function commitUpdate(node,updatePayload,type,oldProps,newProps){node.props=processProps(newProps,node,node.id);node.update(updatePayload);},appendInitialChild:function appendInitialChild(parent,child){parent.appendChild(child);},appendChild:function appendChild(parent,child){parent.appendChild(child);},insertBefore:function insertBefore(parent,child,beforeChild){parent.insertBefore(child,beforeChild);},removeChild:function removeChild(parent,child){parent.removeChild(child);},finalizeInitialChildren:function finalizeInitialChildren(){return false;},appendChildToContainer:function appendChildToContainer(container,child){container.appendChild(child);child.mounted=true;},insertInContainerBefore:function insertInContainerBefore(container,child,beforeChild){container.insertBefore(child,beforeChild);},removeChildFromContainer:function removeChildFromContainer(container,child){container.removeChild(child);},hideInstance:function hideInstance(instance){var _a;var originStyle=(_a=instance.props)===null||_a===void 0?void 0:_a.style;var newStyle=Object.assign({},originStyle||{},{display:'none'});// 微信和阿里的小程序都不支持在内联样式中加`important!`
instance.props=Object.assign({},instance.props||{},{style:newStyle});instance.update();},hideTextInstance:function hideTextInstance(instance){instance.text='';instance.update();},unhideInstance:function unhideInstance(instance,props){instance.props=props;instance.update();},unhideTextInstance:function unhideTextInstance(instance,text){instance.text=text;instance.update();},schedulePassiveEffects:scheduleDeferredCallback,cancelPassiveEffects:cancelDeferredCallback,shouldYield:shouldYield,scheduleDeferredCallback:scheduleDeferredCallback,cancelDeferredCallback:cancelDeferredCallback,supportsMutation:true});
// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/render.js
var ReactReconcilerInst=_react_reconciler_0_26_2_react_reconciler_default()(hostConfig);if(false){}function getPublicRootInstance(container){var containerFiber=container.current;if(!containerFiber.child){return null;}return containerFiber.child.stateNode;}function render_render(rootElement,container){// Create a root Container if it doesnt exist
if(!container._rootContainer){container._rootContainer=ReactReconcilerInst.createContainer(container,0,false,null);}ReactReconcilerInst.updateContainer(rootElement,container._rootContainer,null,function(){// ignore
});return getPublicRootInstance(container._rootContainer);}
// EXTERNAL MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/polyfills/Function.js
var Function = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/_react@16.14.0@react/index.js
var _react_16_14_0_react = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/_react-is@16.13.1@react-is/index.js
var _react_is_16_13_1_react_is = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/AppContainer.js
var AppContainer_AppContainer=function(){function AppContainer(){this.updateQueue=[];this.root=new esm_VNode({id:generate(),type:'root',container:this});this.root.mounted=true;}AppContainer.prototype.requestUpdate=function(path,start,deleteCount){var items=[];for(var _i=3;_i<arguments.length;_i++){items[_i-3]=arguments[_i];}// ignore
};AppContainer.prototype.applyUpdate=function(){this.context._pages.forEach(function(page){page.container.applyUpdate();page.modalContainer.applyUpdate();});};AppContainer.prototype.createCallback=function(name,fn){this.context[name]=fn;};AppContainer.prototype.appendChild=function(child){this.root.appendChild(child);};AppContainer.prototype.removeChild=function(child){this.root.removeChild(child);};AppContainer.prototype.insertBefore=function(child,beforeChild){this.root.insertBefore(child,beforeChild);};return AppContainer;}();/* harmony default export */ var esm_AppContainer = (AppContainer_AppContainer);
// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/createAppConfig.js
var __extends=undefined&&undefined.__extends||function(){var _extendStatics=function extendStatics(d,b){_extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b){if(Object.prototype.hasOwnProperty.call(b,p))d[p]=b[p];}};return _extendStatics(d,b);};return function(d,b){_extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var createAppConfig_read=undefined&&undefined.__read||function(o,n){var m=typeof Symbol==="function"&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((n===void 0||n-->0)&&!(r=i.next()).done){ar.push(r.value);}}catch(error){e={error:error};}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i);}finally{if(e)throw e.error;}}return ar;};var createAppConfig_spread=undefined&&undefined.__spread||function(){for(var ar=[],i=0;i<arguments.length;i++){ar=ar.concat(createAppConfig_read(arguments[i]));}return ar;};var createAppConfig_DefaultAppComponent=function(_super){__extends(DefaultAppComponent,_super);function DefaultAppComponent(){return _super!==null&&_super.apply(this,arguments)||this;}DefaultAppComponent.prototype.render=function(){return/*#__PURE__*/_react_16_14_0_react["createElement"](_react_16_14_0_react["Fragment"],null,this.props.children);};return DefaultAppComponent;}(_react_16_14_0_react["Component"]);function createAppConfig(App){var WrappedApp=esm["g" /* RuntimeOptions */].get('pluginDriver').onAppComponent(App);var createConfig=function createConfig(AppComponent){if(AppComponent===void 0){AppComponent=createAppConfig_DefaultAppComponent;}var config={_container:new esm_AppContainer(),_pages:[],_instance:/*#__PURE__*/_react_16_14_0_react["createRef"](),onLaunch:function onLaunch(options){this._container.context=this;this._render();return this.callLifecycle(esm["b" /* AppLifecycle */].launch,options);},callLifecycle:function callLifecycle(lifecycle){var _a;var args=[];for(var _i=1;_i<arguments.length;_i++){args[_i-1]=arguments[_i];}var callbacks=esm["a" /* AppInstanceContext */].lifecycleCallback[lifecycle]||[];var result;callbacks.forEach(function(callback){result=callback.apply(void 0,createAppConfig_spread(args));});if(result){return result;}var callback=Object(esm["h" /* callbackName */])(lifecycle);if(this._instance.current&&this._instance.current[callback]){return(_a=this._instance.current)[callback].apply(_a,createAppConfig_spread(args));}},_mount:function _mount(pageInstance){/**
                 * 飞书开发者工具的问题，这里的 this 跟 getApp 拿到的不是同一个实例
                 */if(!this._container.context){this._container.context=this;}this._pages.push(pageInstance);this._render();},_unmount:function _unmount(pageInstance){this._pages.splice(this._pages.indexOf(pageInstance),1);this._render();},_render:function _render(){var props={};if(Object(esm["l" /* isClassComponent */])(AppComponent)||AppComponent.$$typeof===_react_is_16_13_1_react_is["ForwardRef"]){props.ref=this._instance;}return render_render(/*#__PURE__*/_react_16_14_0_react["createElement"](AppComponent,props,this._pages.map(function(p){return p.element;})),this._container);},onShow:function onShow(options){return this.callLifecycle(esm["b" /* AppLifecycle */].show,options);},onHide:function onHide(){return this.callLifecycle(esm["b" /* AppLifecycle */].hide);},onError:function onError(error){return this.callLifecycle(esm["b" /* AppLifecycle */].error,error);},// 微信
onPageNotFound:function onPageNotFound(options){return this.callLifecycle(esm["b" /* AppLifecycle */].pageNotFound,options);},// 微信
onUnhandledRejection:function onUnhandledRejection(options){return this.callLifecycle(esm["b" /* AppLifecycle */].unhandledRejection,options);},// 微信
onThemeChange:function onThemeChange(options){return this.callLifecycle(esm["b" /* AppLifecycle */].themeChange,options);}};var lifecycleEvent={// 阿里
onShareAppMessage:function onShareAppMessage(options){return this.callLifecycle(esm["b" /* AppLifecycle */].shareAppMessage,options);}};(esm["g" /* RuntimeOptions */].get('appEvents')||[]).forEach(function(eventName){if(lifecycleEvent[eventName]){config[eventName]=lifecycleEvent[eventName];}});return esm["g" /* RuntimeOptions */].get('pluginDriver').onAppConfig(config);};return createConfig(WrappedApp);}
// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/stopPullDownRefresh/index.wechat.js
/* harmony default export */ var index_wechat = (wx.stopPullDownRefresh);
// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/nativeEffect.js
var effector={listenerConfigs:[]};function dispose(listener){effector.listenerConfigs=effector.listenerConfigs.filter(function(config){return config.listener!==listener;});}function connect(listener,once){effector.listenerConfigs.push({listener:listener,once:once});return function(){return dispose(listener);};}function run(){effector.listenerConfigs.forEach(function(config){config.listener();if(config.once){dispose(config.listener);}});}/* harmony default export */ var nativeEffect = ({connect:connect,run:run,dispose:dispose});
// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/Container.js
var Container_read=undefined&&undefined.__read||function(o,n){var m=typeof Symbol==="function"&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((n===void 0||n-->0)&&!(r=i.next()).done){ar.push(r.value);}}catch(error){e={error:error};}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i);}finally{if(e)throw e.error;}}return ar;};var Container_spread=undefined&&undefined.__spread||function(){for(var ar=[],i=0;i<arguments.length;i++){ar=ar.concat(Container_read(arguments[i]));}return ar;};var Container_Container=function(){function Container(context,rootKey){if(rootKey===void 0){rootKey='root';}this.updateQueue=[];this.rendered=false;this.context=context;this.root=new esm_VNode({id:generate(),type:'root',container:this});this.root.mounted=true;this.rootKey=rootKey;}Container.prototype.requestUpdate=function(update){this.updateQueue.push(update);};Container.prototype.normalizeUpdatePath=function(paths){return Container_spread([this.rootKey],paths).join('.');};Container.prototype.applyUpdate=function(){var _this=this;if(this.stopUpdate||this.updateQueue.length===0){return;}var startTime=new Date().getTime();if(typeof this.context.$spliceData==='function'){var $batchedUpdates=function $batchedUpdates(callback){callback();};if(typeof this.context.$batchedUpdates==='function'){$batchedUpdates=this.context.$batchedUpdates;}$batchedUpdates(function(){_this.updateQueue.map(function(update,index){var _a,_b;var callback=undefined;if(index+1===_this.updateQueue.length){callback=function callback(){nativeEffect.run();/* istanbul ignore next */if(esm["g" /* RuntimeOptions */].get('debug')){console.log("setData => \u56DE\u8C03\u65F6\u95F4\uFF1A"+(new Date().getTime()-startTime)+"ms");}};}if(update.type==='splice'){_this.context.$spliceData((_a={},_a[_this.normalizeUpdatePath(Container_spread(update.path,['children']))]=Container_spread([update.start,update.deleteCount],update.items),_a),callback);}if(update.type==='set'){_this.context.setData((_b={},_b[_this.normalizeUpdatePath(Container_spread(update.path,[update.name]))]=update.value,_b),callback);}});});this.updateQueue=[];return;}var updatePayload=this.updateQueue.reduce(function(acc,update){if(update.node.isDeleted()){return acc;}if(update.type==='splice'){acc[_this.normalizeUpdatePath(Container_spread(update.path,['nodes',update.id.toString()]))]=update.items[0]||null;if(update.children){acc[_this.normalizeUpdatePath(Container_spread(update.path,['children']))]=(update.children||[]).map(function(c){return c.id;});}}else{acc[_this.normalizeUpdatePath(Container_spread(update.path,[update.name]))]=update.value;}return acc;},{});this.context.setData(updatePayload,function(){nativeEffect.run();/* istanbul ignore next */if(esm["g" /* RuntimeOptions */].get('debug')){console.log("setData => \u56DE\u8C03\u65F6\u95F4\uFF1A"+(new Date().getTime()-startTime)+"ms",updatePayload);}});this.updateQueue=[];};Container.prototype.clearUpdate=function(){this.stopUpdate=true;};Container.prototype.createCallback=function(name,fn){this.context[name]=function(){var args=[];for(var _i=0;_i<arguments.length;_i++){args[_i]=arguments[_i];}return unstable_batchedUpdates(function(args){return fn.apply(void 0,Container_spread(args));},args);};};Container.prototype.appendChild=function(child){this.root.appendChild(child);};Container.prototype.removeChild=function(child){this.root.removeChild(child);};Container.prototype.insertBefore=function(child,beforeChild){this.root.insertBefore(child,beforeChild);};return Container;}();/* harmony default export */ var esm_Container = (Container_Container);
// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/ReactPortal.js
function createPortal(children,containerInfo,key){return{// This tag allow us to uniquely identify this as a React Portal
$$typeof:_react_is_16_13_1_react_is["Portal"],key:key||'',children:children,containerInfo:containerInfo,implementation:null};}
// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/createPageConfig.js
var createPageConfig_read=undefined&&undefined.__read||function(o,n){var m=typeof Symbol==="function"&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((n===void 0||n-->0)&&!(r=i.next()).done){ar.push(r.value);}}catch(error){e={error:error};}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i);}finally{if(e)throw e.error;}}return ar;};var createPageConfig_spread=undefined&&undefined.__spread||function(){for(var ar=[],i=0;i<arguments.length;i++){ar=ar.concat(createPageConfig_read(arguments[i]));}return ar;};var idCounter=0;function generatePageId(){var id=idCounter;var pageId='page_'+id;idCounter+=1;return pageId;}// for testing
function resetPageId(){idCounter=0;}function createPageConfig(Page,name){var _a;var app;try{app=getApp();}catch(e){app=null;}var config={data:{root:{children:[]},modalRoot:{children:[]}},wrapperRef:/*#__PURE__*/_react_16_14_0_react["createRef"](),lifecycleCallback:{},onLoad:function onLoad(query){var PageWrapper=Object(esm["i" /* createPageWrapper */])(Page,name);this.pageId=generatePageId();this.lifecycleCallback={};this.data={root:{children:[]},modalRoot:{children:[]}};this.query=query;this.container=new esm_Container(this,'root');this.modalContainer=new esm_Container(this,'modalRoot');var pageElement=/*#__PURE__*/_react_16_14_0_react["createElement"](PageWrapper,{page:this,query:query,modalContainer:this.modalContainer,ref:this.wrapperRef});if(app&&app._mount){this.element=createPortal(pageElement,this.container,this.pageId);app._mount(this);}else{this.element=render_render(pageElement,this.container);}return this.callLifecycle(esm["d" /* Lifecycle */].load,query);},onUnload:function onUnload(){this.callLifecycle(esm["d" /* Lifecycle */].unload);this.unloaded=true;this.container.clearUpdate();if(app){app._unmount(this);}},onTabItemTap:function onTabItemTap(e){return this.callLifecycle(esm["d" /* Lifecycle */].tabItemTap,e);},onResize:function onResize(e){return this.callLifecycle(esm["d" /* Lifecycle */].resize,e);},/**
         * Lifecycle start
         */registerLifecycle:function registerLifecycle(lifecycle,callback){var _this=this;this.lifecycleCallback[lifecycle]=this.lifecycleCallback[lifecycle]||[];this.lifecycleCallback[lifecycle].push(callback);return function(){_this.lifecycleCallback[lifecycle].splice(_this.lifecycleCallback[lifecycle].indexOf(callback),1);};},callLifecycle:function callLifecycle(lifecycle){var _a;var args=[];for(var _i=1;_i<arguments.length;_i++){args[_i-1]=arguments[_i];}var callbacks=this.lifecycleCallback[lifecycle]||[];var result;// 生命周期中可能改变 state 导致 callbacks 发生变化
createPageConfig_spread(callbacks).map(function(callback){result=unstable_batchedUpdates(function(args){return callback.apply(void 0,createPageConfig_spread(args));},args);});if(result){return result;}var callback=Object(esm["h" /* callbackName */])(lifecycle);if(this.wrapperRef.current&&this.wrapperRef.current[callback]){return(_a=this.wrapperRef.current)[callback].apply(_a,createPageConfig_spread(args));}},events:{// 页面返回时触发
onBack:function onBack(e){return this.callLifecycle(esm["d" /* Lifecycle */].back,e);},// 键盘高度变化时触发
onKeyboardHeight:function onKeyboardHeight(e){return this.callLifecycle(esm["d" /* Lifecycle */].keyboardHeight,e);},onTabItemTap:function onTabItemTap(e){return this.callLifecycle(esm["d" /* Lifecycle */].tabItemTap,e);},// 点击但切换tabItem前触发
beforeTabItemTap:function beforeTabItemTap(){return this.callLifecycle(esm["d" /* Lifecycle */].beforeTabItemTap);},onResize:function onResize(e){return this.callLifecycle(esm["d" /* Lifecycle */].resize,e);}},onShow:function onShow(){return this.callLifecycle(esm["d" /* Lifecycle */].show);},onHide:function onHide(){return this.callLifecycle(esm["d" /* Lifecycle */].hide);},onReady:function onReady(){return this.callLifecycle(esm["d" /* Lifecycle */].ready);},onPullDownRefresh:function onPullDownRefresh(e){var result=this.callLifecycle(esm["d" /* Lifecycle */].pullDownRefresh,e);if(result&&typeof result.then==='function'){Promise.resolve(result).then(function(){index_wechat();});}},onReachBottom:function onReachBottom(){return this.callLifecycle(esm["d" /* Lifecycle */].reachBottom);},onTitleClick:function onTitleClick(){return this.callLifecycle(esm["d" /* Lifecycle */].titleClick);},onOptionMenuClick:function onOptionMenuClick(e){return this.callLifecycle(esm["d" /* Lifecycle */].optionMenuClick,e);},onPopMenuClick:function onPopMenuClick(e){return this.callLifecycle(esm["d" /* Lifecycle */].popMenuClick,e);},onPullIntercept:function onPullIntercept(){return this.callLifecycle(esm["d" /* Lifecycle */].pullIntercept);}};var lifecycleEvents={onPageScroll:function onPageScroll(e){return this.callLifecycle(esm["d" /* Lifecycle */].pageScroll,e);},onShareAppMessage:function onShareAppMessage(options){return this.callLifecycle(esm["d" /* Lifecycle */].shareAppMessage,options)||{};},onShareTimeline:function onShareTimeline(options){return this.callLifecycle(esm["d" /* Lifecycle */].shareTimeline,options)||{};}};((_a=esm["g" /* RuntimeOptions */].get('pageEvents')[name])!==null&&_a!==void 0?_a:[]).forEach(function(eventName){if(lifecycleEvents[eventName]){config[eventName]=lifecycleEvents[eventName];}});return esm["g" /* RuntimeOptions */].get('pluginDriver').onPageConfig({config:config,page:name});}
// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/createComponentConfig.wechat.js
function createComponentConfig(Component){var config={options:{styleIsolation:'apply-shared'},data:{action:{},root:{children:[]}},attached:function attached(){// 在组件实例进入页面节点树时执行
if(!this.container){this.init();}},detached:function detached(){// 在组件实例被从页面节点树移除时执行
this.container.clearUpdate();render_render(null,this.container);},/*
        TODO: 当前微信无对应语法支持监听props
              且必须显示设定 properties，才能在组件中使用 this.properties.name
              所以当前的实现不支持在微信端 props
        eg:
        properties: {
          name: String
        },
    
        didUpdate(prevProps: any, prevData: any) {
          if (prevData !== this.data) {
            return;
          }
    
          this.render();
        },*/methods:{init:function init(){this.component=esm["g" /* RuntimeOptions */].get('pluginDriver').onMiniComponent({component:Component,context:this});this.container=new esm_Container(this);this.render();},render:function render(){this.element=render_render(/*#__PURE__*/_react_16_14_0_react["createElement"](esm["c" /* ComponentInstanceContext */].Provider,{value:this},/*#__PURE__*/_react_16_14_0_react["createElement"](this.component,this.properties)),this.container);}}};return config;}
// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/createNativeComponent.js
var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}}return t;};return __assign.apply(this,arguments);};function createNativeComponent(name){var Component=/*#__PURE__*/_react_16_14_0_react["forwardRef"](function(props,ref){var newProps=__assign({},props);newProps.__ref=typeof ref==='function'?ref:function(e){if(ref){ref.current=e;}};return/*#__PURE__*/_react_16_14_0_react["createElement"](name,newProps,props.children);});Component.displayName=name;return Component;}
// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/createHostComponent.js
var createHostComponent_assign=undefined&&undefined.__assign||function(){createHostComponent_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}}return t;};return createHostComponent_assign.apply(this,arguments);};function createHostComponent(name,component){if(component){return component;}var Component=/*#__PURE__*/_react_16_14_0_react["forwardRef"](function(props,ref){var _a=props.children,children=_a===void 0?[]:_a;var element=/*#__PURE__*/_react_16_14_0_react["createElement"](name,createHostComponent_assign(createHostComponent_assign({},props),{ref:ref}),children);element=esm["g" /* RuntimeOptions */].get('pluginDriver').onCreateHostComponentElement(element);return element;});Component.displayName=name;return esm["g" /* RuntimeOptions */].get('pluginDriver').onCreateHostComponent(Component);}
// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/hooks/useNativeEffect.js
function useNativeEffect(listener,deps){Object(_react_16_14_0_react["useLayoutEffect"])(function(){return nativeEffect.connect(listener,!!deps);},deps);}
// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/hooks/useQuery.js
function useQuery(){var pageInstance=Object(_react_16_14_0_react["useContext"])(esm["e" /* PageInstanceContext */]);return pageInstance.query;}
// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/hooks/index.js

// CONCATENATED MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/index.js
var unstable_batchedUpdates=ReactReconcilerInst.batchedUpdates;/* harmony default export */ var runtime_esm = ({unstable_batchedUpdates:unstable_batchedUpdates});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */
if(true){module.exports=__webpack_require__(19);}else{}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
/* harmony import */ var _remax_wechat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["c"]; });



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ View; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ Text; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Image; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ switchTab; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ reLaunch; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ redirectTo; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ navigateTo; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ navigateBack; });

// UNUSED EXPORTS: Input, Textarea, Video, Swiper, ScrollView, SwiperItem, MovableView, MovableArea, CoverView, CoverImage, Icon, RichText, Progress, Button, CheckboxGroup, Checkbox, Form, Label, Picker, PickerView, PickerViewColumn, RadioGroup, Radio, Slider, Switch, Navigator, LivePlayer, LivePusher, Map, Canvas, OpenData, OfficialAccount, Editor, Audio, Ad, WebView, FunctionalPageNavigator, Camera, MatchMedia, PageContainer, ShareElement, KeyboardAccessory, VoipRoom, AdCustom, PageMeta, NavigationBar, canIUse, base64ToArrayBuffer, arrayBufferToBase64, getSystemInfoSync, getSystemInfo, getUpdateManager, getLaunchOptionsSync, onPageNotFound, onError, onAudioInterruptionEnd, onAppShow, onAppHide, offPageNotFound, offError, offAudioInterruptionEnd, offAudioInterruptionBegin, offAppShow, offAppHide, setEnableDebug, getLogManager, showToast, showModal, showLoading, showActionSheet, hideToast, hideLoading, showNavigationBarLoading, setNavigationBarTitle, setNavigationBarColor, hideNavigationBarLoading, setBackgroundTextStyle, setBackgroundColor, showTabBarRedDot, showTabBar, setTabBarStyle, setTabBarItem, setTabBarBadge, removeTabBarBadge, hideTabBarRedDot, hideTabBar, loadFontFace, stopPullDownRefresh, startPullDownRefresh, pageScrollTo, createAnimation, setTopBarText, nextTick, getMenuButtonBoundingClientRect, onWindowResize, offWindowResize, onKeyboardHeightChange, offKeyboardHeightChange, getSelectedTextRange, request, downloadFile, uploadFile, sendSocketMessage, onSocketOpen, onSocketMessage, onSocketError, onSocketClose, connectSocket, closeSocket, stopLocalServiceDiscovery, startLocalServiceDiscovery, onLocalServiceResolveFail, onLocalServiceLost, onLocalServiceFound, onLocalServiceDiscoveryStop, offLocalServiceResolveFail, offLocalServiceLost, offLocalServiceFound, offLocalServiceDiscoveryStop, createUDPSocket, setStorageSync, setStorage, removeStorageSync, removeStorage, getStorageSync, getStorageInfoSync, getStorageInfo, getStorage, clearStorageSync, clearStorage, createMapContext, saveImageToPhotosAlbum, previewImage, previewMedia, getImageInfo, compressImage, chooseMessageFile, chooseImage, saveVideoToPhotosAlbum, createVideoContext, chooseVideo, chooseMedia, stopVoice, setInnerAudioOption, playVoice, pauseVoice, getAvailableAudioSources, createInnerAudioContext, createAudioContext, stopBackgroundAudio, seekBackgroundAudio, playBackgroundAudio, pauseBackgroundAudio, onBackgroundAudioStop, onBackgroundAudioPlay, onBackgroundAudioPause, getBackgroundAudioPlayerState, getBackgroundAudioManager, createLivePusherContext, createLivePlayerContext, stopRecord, startRecord, getRecorderManager, createCameraContext, stopLocationUpdate, startLocationUpdateBackground, startLocationUpdate, openLocation, onLocationChange, getLocation, chooseLocation, updateShareMenu, showShareMenu, hideShareMenu, getShareInfo, createOffscreenCanvas, createCanvasContext, canvasToTempFilePath, canvasPutImageData, canvasGetImageData, saveFile, removeSavedFile, openDocument, getSavedFileList, getSavedFileInfo, getFileSystemManager, getFileInfo, login, checkSession, navigateToMiniProgram, navigateBackMiniProgram, getAccountInfoSync, getUserInfo, reportMonitor, reportAnalytics, requestPayment, authorize, openSetting, getSetting, chooseAddress, openCard, addCard, chooseInvoiceTitle, chooseInvoice, startSoterAuthentication, checkIsSupportSoterAuthentication, checkIsSoterEnrolledInDevice, getWeRunData, stopBeaconDiscovery, startBeaconDiscovery, onBeaconUpdate, offBeaconUpdate, onBeaconServiceChange, offBeaconServiceChange, getBeacons, stopWifi, startWifi, setWifiList, onWifiConnected, offWifiConnected, onGetWifiList, offGetWifiList, getWifiList, getConnectedWifi, connectWifi, addPhoneContact, writeBLECharacteristicValue, readBLECharacteristicValue, onBLEConnectionStateChange, offBLEConnectionStateChange, onBLECharacteristicValueChange, offBLECharacteristicValueChange, notifyBLECharacteristicValueChange, getBLEDeviceServices, getBLEDeviceCharacteristics, createBLEConnection, closeBLEConnection, stopBluetoothDevicesDiscovery, startBluetoothDevicesDiscovery, openBluetoothAdapter, onBluetoothDeviceFound, offBluetoothDeviceFound, onBluetoothAdapterStateChange, offBluetoothAdapterStateChange, getConnectedBluetoothDevices, getBluetoothDevices, getBluetoothAdapterState, closeBluetoothAdapter, getBatteryInfoSync, getBatteryInfo, setClipboardData, getClipboardData, stopHCE, startHCE, sendHCEMessage, onHCEMessage, offHCEMessage, getHCEState, onNetworkStatusChange, offNetworkStatusChange, getNetworkType, setScreenBrightness, setKeepScreenOn, onUserCaptureScreen, offUserCaptureScreen, getScreenBrightness, makePhoneCall, stopAccelerometer, startAccelerometer, onAccelerometerChange, offAccelerometerChange, stopCompass, startCompass, onCompassChange, offCompassChange, stopDeviceMotionListening, startDeviceMotionListening, onDeviceMotionChange, offDeviceMotionChange, stopGyroscope, startGyroscope, onGyroscopeChange, offGyroscopeChange, onMemoryWarning, offMemoryWarning, scanCode, vibrateShort, vibrateLong, createWorker, getExtConfigSync, getExtConfig, createSelectorQuery, createIntersectionObserver, createRewardedVideoAd, createInterstitialAd, cloud, requestSubscribeMessage, hideHomeButton, getRealtimeLogManager, hideKeyboard

// EXTERNAL MODULE: ./node_modules/_@remax_runtime@2.15.4@@remax/runtime/esm/index.js + 25 modules
var esm = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/View/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/view.html
 */var View=Object(esm["d" /* createHostComponent */])('view');View.defaultProps={hoverClassName:'none',hoverStopPropagation:false,hoverStartTime:50,hoverStayTime:400};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Input/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/input.html
 */var Input=Object(esm["d" /* createHostComponent */])('input');Input.defaultProps={type:'text',password:false,placeholderClassName:'input-placeholder',disabled:false,cursorSpacing:0,autoFocus:false,focus:false,alwaysEmbed:false,confirmType:'done',confirmHold:false,maxlength:140,selectionEnd:-1,selectionStart:-1,adjustPosition:true,holdKeyboard:false};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Textarea/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html
 */var Textarea=Object(esm["d" /* createHostComponent */])('textarea');Textarea.defaultProps={placeholderClassName:'textarea-placeholder',disabled:false,maxlength:140,autoFocus:false,focus:false,autoHeight:false,fixed:false,cursorSpacing:0,cursor:-1,showConfirmBar:true,selectionStart:-1,selectionEnd:-1,adjustPosition:true,holdKeyboard:false,disableDefaultPadding:false};
// EXTERNAL MODULE: ./node_modules/_react@16.14.0@react/index.js
var _react_16_14_0_react = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Video/index.js
var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}}return t;};return __assign.apply(this,arguments);};var __rest=undefined&&undefined.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var hostComponentName='video';var Video_VideoRender=function VideoRender(props,ref){var children=props.children,restProps=__rest(props,["children"]);var videoProps=__assign(__assign({},restProps),{ref:ref});return/*#__PURE__*/_react_16_14_0_react["createElement"](hostComponentName,videoProps,children);};/**
 * video 默认宽度 300px、高度 225px，可通过 wxss 设置宽高
 * https://developers.weixin.qq.com/miniprogram/dev/component/video.html
 */var RemaxVideo=/*#__PURE__*/_react_16_14_0_react["forwardRef"](Video_VideoRender);RemaxVideo.defaultProps={controls:true,danmuBtn:false,enableDanmu:false,autoplay:false,loop:false,muted:false,initialTime:0,pageGesture:false,showProgress:true,showFullscreenBtn:true,showPlayBtn:true,showCenterPlayBtn:true,enableProgressGesture:true,objectFit:'contain',showMuteBtn:false,playBtnPosition:'bottom',enablePlayGesture:false,autoPauseIfNavigate:true,autoPauseIfOpenNative:true,vslideGesture:false,vslideGestureInFullscreen:true,showCastingButton:false,pictureInPictureShowProgress:false,enableAutoRotation:false,showScreenLockButton:false,showSnapshotButton:false,showBackgroundPlaybackButton:false};var Video=Object(esm["d" /* createHostComponent */])(hostComponentName,RemaxVideo);
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Swiper/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html
 */var Swiper=Object(esm["d" /* createHostComponent */])('swiper');Swiper.defaultProps={indicatorDots:false,indicatorColor:'rgba(0, 0, 0, .3)',indicatorActiveColor:'#000000',autoplay:false,current:0,interval:5000,duration:500,circular:false,vertical:false,previousMargin:'0px',nextMargin:'0px',displayMultipleItems:1,skipHiddenItemLayout:false,easingFunction:'default',snapToEdge:false};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/ScrollView/index.js
var ScrollView=Object(esm["d" /* createHostComponent */])('scroll-view');ScrollView.defaultProps={upperThreshold:50,lowerThreshold:50,scrollX:false,scrollY:false,scrollWithAnimation:false,enableBackToTop:false,enableFlex:false,scrollAnchoring:false,refresherEnabled:false,refresherThreshold:45,refresherDefaultStyle:'black',refresherBackground:'#fff',refresherTriggered:false,enhanced:false,bounces:true,showScrollbar:true,pagingEnabled:false,fastDeceleration:false};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/SwiperItem/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html
 */var SwiperItem=Object(esm["d" /* createHostComponent */])('swiper-item');
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/MovableView/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html
 */var MovableView=Object(esm["d" /* createHostComponent */])('movable-view');MovableView.defaultProps={direction:'none',inertia:false,outOfBounds:false,damping:20,friction:2,disabled:false,scale:false,scaleMin:0,scaleMax:10,scaleValue:1,animation:true};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/MovableArea/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html
 */var MovableArea=Object(esm["d" /* createHostComponent */])('movable-area');MovableArea.defaultProps={scaleArea:false};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/CoverView/index.js
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html
 */var CoverView=Object(esm["d" /* createHostComponent */])('cover-view');
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/CoverImage/index.js
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html
 */var CoverImage=Object(esm["d" /* createHostComponent */])('cover-image');
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Icon/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/icon.html
 */var Icon=Object(esm["d" /* createHostComponent */])('icon');Icon.defaultProps={size:23};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Text/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/text.html
 */var Text=Object(esm["d" /* createHostComponent */])('text');Text.defaultProps={selectable:false,userSelect:false,decode:false};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/RichText/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html
 */var RichText=Object(esm["d" /* createHostComponent */])('rich-text');RichText.defaultProps={nodes:[]};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Progress/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/progress.html
 */var Progress=Object(esm["d" /* createHostComponent */])('progress');Progress.defaultProps={showInfo:false,borderRadius:0,fontSize:16,strokeWidth:6,color:'#09BB07',activeColor:'#09BB07',backgroundColor:'#EBEBEB',active:false,activeMode:'backwards',duration:30};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Button/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/button.html
 * https://q.qq.com/wiki/develop/miniprogram/component/form/button.html
 */var Button=Object(esm["d" /* createHostComponent */])('button');Button.defaultProps={hoverClassName:'button-hover',hoverStartTime:20,hoverStayTime:70};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/CheckboxGroup/index.js
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/checkbox-group.html
 */var CheckboxGroup=Object(esm["d" /* createHostComponent */])('checkbox-group');
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Checkbox/index.js
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html
 */var Checkbox=Object(esm["d" /* createHostComponent */])('checkbox');Checkbox.defaultProps={disabled:false,checked:false,color:'#09bb07'};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Form/index.js
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/form.html
 */var Form=Object(esm["d" /* createHostComponent */])('form');Form.defaultProps={reportSubmit:false,reportSubmitTimeout:0};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Label/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/label.html
 */var Label=Object(esm["d" /* createHostComponent */])('label');
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Picker/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/picker.html
 */var Picker=Object(esm["d" /* createHostComponent */])('picker');Picker.defaultProps={mode:'selector',disabled:false,// FIXME: value 的值与 mode 类型变化
// value: 0,
range:[],fields:'day'};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/PickerView/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html
 */var PickerView=Object(esm["d" /* createHostComponent */])('picker-view');
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/PickerViewColumn/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/picker-view-column.html
 */var PickerViewColumn=Object(esm["d" /* createHostComponent */])('picker-view-column');
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/RadioGroup/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/radio-group.html
 */var RadioGroup=Object(esm["d" /* createHostComponent */])('radio-group');
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Radio/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/radio.html
 */var Radio=Object(esm["d" /* createHostComponent */])('radio');Radio.defaultProps={checked:false,disabled:false,color:'#09BB07'};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Slider/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/slider.html
 */var Slider=Object(esm["d" /* createHostComponent */])('slider');Slider.defaultProps={min:0,max:100,step:1,disabled:false,value:0,color:'#e9e9e9',selectedColor:'#1aad19',activeColor:'#1aad19',backgroundColor:'#e9e9e9',blockSize:28,blockColor:'#ffffff',showValue:false};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Switch/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/switch.html
 */var Switch=Object(esm["d" /* createHostComponent */])('switch');Switch.defaultProps={checked:false,disabled:false,type:'switch',color:'#04BE02'};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Navigator/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html
 */var Navigator=Object(esm["d" /* createHostComponent */])('navigator');Navigator.defaultProps={target:'self',openType:'navigate',delta:1,hoverClassName:'navigator-hover',hoverStopPropagation:false,hoverStartTime:50,hoverStayTime:600};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Image/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/image.html
 */var Image=Object(esm["d" /* createHostComponent */])('image');Image.defaultProps={mode:'scaleToFill',webp:false,lazyLoad:false,showMenuByLongpress:false};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/LivePlayer/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html
 */var LivePlayer=Object(esm["d" /* createHostComponent */])('live-player');LivePlayer.defaultProps={mode:'live',autoplay:false,muted:false,orientation:'vertical',objectFit:'contain',backgroundMute:false,minCache:1,maxCache:3,soundMode:'speaker',autoPauseIfNavigate:true,autoPauseIfOpenNative:true};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/LivePusher/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html
 */var LivePusher=Object(esm["d" /* createHostComponent */])('live-pusher');LivePusher.defaultProps={mode:'RTC',autopush:false,muted:false,enableCamera:false,autoFocus:true,orientation:'vertical',beauty:0,whiteness:0,aspect:'9:16',minBitrate:200,maxBitrate:1000,audioQuality:'high',zoom:false,devicePosition:'front',backgroundMute:false,mirror:false,remoteMirror:false,localMirror:'auto',audioReverbType:0,enableMic:true,enableAgc:true,enableAns:false,audioVolumeType:'voicecall',videoWidth:360,videoHeight:640};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Map/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/map.html
 */var Map=Object(esm["d" /* createHostComponent */])('map');Map.defaultProps={scale:16,minScale:3,maxScale:20,showLocation:false,layerStyle:1,rotate:0,enable3D:false,showCompass:false,showScale:false,enableOverlooking:false,enableZoom:true,enableScroll:true,enableRotate:false,enableSatellite:false,enableTraffic:false,setting:{}};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Canvas/index.js
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html
 */var Canvas=Object(esm["d" /* createHostComponent */])('canvas');Canvas.defaultProps={disableScroll:false};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/OpenData/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html
 */var OpenData=Object(esm["d" /* createHostComponent */])('open-data');OpenData.defaultProps={lang:'en'};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/OfficialAccount/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html
 */var OfficialAccount=Object(esm["d" /* createHostComponent */])('official-account');
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Editor/index.js
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/editor.html
 */var Editor=Object(esm["d" /* createHostComponent */])('editor');Editor.defaultProps={readOnly:false,showImgSize:false,showImgToolbar:false,showImgResize:false};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Audio/index.js
// 微信已不再维护
var Audio=Object(esm["d" /* createHostComponent */])('audio');
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Ad/index.js
var Ad=Object(esm["d" /* createHostComponent */])('ad');Ad.defaultProps={adType:'banner',adTheme:'white'};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/WebView/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html
 */var WebView=Object(esm["d" /* createHostComponent */])('web-view');
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/FunctionalPageNavigator/index.js
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html
 */var FunctionalPageNavigator=Object(esm["d" /* createHostComponent */])('functional-page-navigator');FunctionalPageNavigator.defaultProps={version:'release'};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/Camera/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/camera.html
 */var Camera=Object(esm["d" /* createHostComponent */])('camera');Camera.defaultProps={mode:'normal',resolution:'medium',devicePosition:'back',flash:'auto',frameSize:'medium'};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/MatchMedia/index.js
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html
 */var MatchMedia=Object(esm["d" /* createHostComponent */])('match-media');
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/PageContainer/index.js
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html
 */var PageContainer=Object(esm["d" /* createHostComponent */])('page-container');PageContainer.defaultProps={show:false,duration:300,zIndex:100,overlay:true,position:'bottom',round:false,closeOnSlideDown:false};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/ShareElement/index.js
/** @see https://developers.weixin.qq.com/miniprogram/dev/component/share-element.html */var ShareElement=Object(esm["d" /* createHostComponent */])('share-element');ShareElement.defaultProps={transform:false,duration:300,easingFunction:'ease-out'};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/KeyboardAccessory/index.js
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/keyboard-accessory.html
 */var KeyboardAccessory=Object(esm["d" /* createHostComponent */])('KeyboardAccessory');
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/VoipRoom/index.js
/**
 * 多人音视频对话。需用户授权 scope.camera、scope.record。
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html
 */var VoipRoom=Object(esm["d" /* createHostComponent */])('voip-room');VoipRoom.defaultProps={mode:'camera',devicePosition:'front'};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/AdCustom/index.js
/**
 * 原生模版广告
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/ad-custom.html
 */var AdCustom=Object(esm["d" /* createHostComponent */])('AdCustom');
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/PageMeta/index.js
/**
 * 页面属性配置节点，用于指定页面的一些属性、监听页面事件。只能是页面内的第一个节点。可以配合 navigation-bar 组件一同使用。
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html
 */var PageMeta=Object(esm["d" /* createHostComponent */])('page-meta');PageMeta.defaultProps={scrollDuration:300};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/NavigationBar/index.js
/**
 * 页面导航条配置节点，用于指定导航栏的一些属性。只能是 page-meta 组件内的第一个节点，需要配合它一同使用。
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html
 */var NavigationBar=Object(esm["d" /* createHostComponent */])('navigation-bar');NavigationBar.defaultProps={loading:false,colorAnimationDuration:0,colorAnimationTimingFunc:'linear'};
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/hostComponents/index.js

// EXTERNAL MODULE: ./node_modules/_@remax_framework-shared@2.15.4@@remax/framework-shared/esm/index.js + 14 modules
var framework_shared_esm = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/api/index.js
var canIUse=wx.canIUse;var base64ToArrayBuffer=wx.base64ToArrayBuffer;var arrayBufferToBase64=wx.arrayBufferToBase64;var getSystemInfoSync=wx.getSystemInfoSync;var getSystemInfo=Object(framework_shared_esm["m" /* promisify */])(wx.getSystemInfo);var getUpdateManager=wx.getUpdateManager;var getLaunchOptionsSync=wx.getLaunchOptionsSync;var onPageNotFound=wx.onPageNotFound;var onError=wx.onError;var onAudioInterruptionEnd=wx.onAudioInterruptionEnd;var onAppShow=wx.onAppShow;var onAppHide=wx.onAppHide;var offPageNotFound=wx.offPageNotFound;var offError=wx.offError;var offAudioInterruptionEnd=wx.offAudioInterruptionEnd;var offAudioInterruptionBegin=wx.offAudioInterruptionBegin;var offAppShow=wx.offAppShow;var offAppHide=wx.offAppHide;var setEnableDebug=Object(framework_shared_esm["m" /* promisify */])(wx.setEnableDebug);var getLogManager=wx.getLogManager;var switchTab=Object(framework_shared_esm["m" /* promisify */])(wx.switchTab);var reLaunch=Object(framework_shared_esm["m" /* promisify */])(wx.reLaunch);var redirectTo=Object(framework_shared_esm["m" /* promisify */])(wx.redirectTo);var navigateTo=Object(framework_shared_esm["m" /* promisify */])(wx.navigateTo);var navigateBack=Object(framework_shared_esm["m" /* promisify */])(wx.navigateBack);var showToast=Object(framework_shared_esm["m" /* promisify */])(wx.showToast);var showModal=Object(framework_shared_esm["m" /* promisify */])(wx.showModal);var showLoading=Object(framework_shared_esm["m" /* promisify */])(wx.showLoading);var showActionSheet=Object(framework_shared_esm["m" /* promisify */])(wx.showActionSheet);var hideToast=Object(framework_shared_esm["m" /* promisify */])(wx.hideToast);var hideLoading=Object(framework_shared_esm["m" /* promisify */])(wx.hideLoading);var showNavigationBarLoading=Object(framework_shared_esm["m" /* promisify */])(wx.showNavigationBarLoading);var setNavigationBarTitle=Object(framework_shared_esm["m" /* promisify */])(wx.setNavigationBarTitle);var setNavigationBarColor=Object(framework_shared_esm["m" /* promisify */])(wx.setNavigationBarColor);var hideNavigationBarLoading=Object(framework_shared_esm["m" /* promisify */])(wx.hideNavigationBarLoading);var setBackgroundTextStyle=Object(framework_shared_esm["m" /* promisify */])(wx.setBackgroundTextStyle);var setBackgroundColor=Object(framework_shared_esm["m" /* promisify */])(wx.setBackgroundColor);var showTabBarRedDot=Object(framework_shared_esm["m" /* promisify */])(wx.showTabBarRedDot);var showTabBar=Object(framework_shared_esm["m" /* promisify */])(wx.showTabBar);var setTabBarStyle=Object(framework_shared_esm["m" /* promisify */])(wx.setTabBarStyle);var setTabBarItem=Object(framework_shared_esm["m" /* promisify */])(wx.setTabBarItem);var setTabBarBadge=Object(framework_shared_esm["m" /* promisify */])(wx.setTabBarBadge);var removeTabBarBadge=Object(framework_shared_esm["m" /* promisify */])(wx.removeTabBarBadge);var hideTabBarRedDot=Object(framework_shared_esm["m" /* promisify */])(wx.hideTabBarRedDot);var hideTabBar=Object(framework_shared_esm["m" /* promisify */])(wx.hideTabBar);var loadFontFace=Object(framework_shared_esm["m" /* promisify */])(wx.loadFontFace);var stopPullDownRefresh=Object(framework_shared_esm["m" /* promisify */])(wx.stopPullDownRefresh);var startPullDownRefresh=Object(framework_shared_esm["m" /* promisify */])(wx.startPullDownRefresh);var pageScrollTo=Object(framework_shared_esm["m" /* promisify */])(wx.pageScrollTo);var createAnimation=wx.createAnimation;var setTopBarText=Object(framework_shared_esm["m" /* promisify */])(wx.setTopBarText);var nextTick=wx.nextTick;var getMenuButtonBoundingClientRect=wx.getMenuButtonBoundingClientRect;var onWindowResize=wx.onWindowResize;var offWindowResize=wx.offWindowResize;var onKeyboardHeightChange=wx.onKeyboardHeightChange;var offKeyboardHeightChange=wx.offKeyboardHeightChange;var getSelectedTextRange=wx.getSelectedTextRange;var request=Object(framework_shared_esm["m" /* promisify */])(wx.request);var downloadFile=Object(framework_shared_esm["m" /* promisify */])(wx.downloadFile);var uploadFile=Object(framework_shared_esm["m" /* promisify */])(wx.uploadFile);var sendSocketMessage=Object(framework_shared_esm["m" /* promisify */])(wx.sendSocketMessage);var onSocketOpen=wx.onSocketOpen;var onSocketMessage=wx.onSocketMessage;var onSocketError=wx.onSocketError;var onSocketClose=wx.onSocketClose;var connectSocket=wx.connectSocket;var closeSocket=Object(framework_shared_esm["m" /* promisify */])(wx.closeSocket);var stopLocalServiceDiscovery=Object(framework_shared_esm["m" /* promisify */])(wx.stopLocalServiceDiscovery);var startLocalServiceDiscovery=Object(framework_shared_esm["m" /* promisify */])(wx.startLocalServiceDiscovery);var onLocalServiceResolveFail=wx.onLocalServiceResolveFail;var onLocalServiceLost=wx.onLocalServiceLost;var onLocalServiceFound=wx.onLocalServiceFound;var onLocalServiceDiscoveryStop=wx.onLocalServiceDiscoveryStop;var offLocalServiceResolveFail=wx.offLocalServiceResolveFail;var offLocalServiceLost=wx.offLocalServiceLost;var offLocalServiceFound=wx.offLocalServiceFound;var offLocalServiceDiscoveryStop=wx.offLocalServiceDiscoveryStop;var createUDPSocket=wx.createUDPSocket;var setStorageSync=wx.setStorageSync;var setStorage=Object(framework_shared_esm["m" /* promisify */])(wx.setStorage);var removeStorageSync=wx.removeStorageSync;var removeStorage=Object(framework_shared_esm["m" /* promisify */])(wx.removeStorage);var getStorageSync=wx.getStorageSync;var getStorageInfoSync=wx.getStorageInfoSync;var getStorageInfo=Object(framework_shared_esm["m" /* promisify */])(wx.getStorageInfo);var getStorage=Object(framework_shared_esm["m" /* promisify */])(wx.getStorage);var clearStorageSync=wx.clearStorageSync;var clearStorage=Object(framework_shared_esm["m" /* promisify */])(wx.clearStorage);var createMapContext=wx.createMapContext;var saveImageToPhotosAlbum=Object(framework_shared_esm["m" /* promisify */])(wx.saveImageToPhotosAlbum);var previewImage=Object(framework_shared_esm["m" /* promisify */])(wx.previewImage);var previewMedia=Object(framework_shared_esm["m" /* promisify */])(wx.previewMedia);var getImageInfo=Object(framework_shared_esm["m" /* promisify */])(wx.getImageInfo);var compressImage=Object(framework_shared_esm["m" /* promisify */])(wx.compressImage);var chooseMessageFile=Object(framework_shared_esm["m" /* promisify */])(wx.chooseMessageFile);var chooseImage=Object(framework_shared_esm["m" /* promisify */])(wx.chooseImage);var saveVideoToPhotosAlbum=Object(framework_shared_esm["m" /* promisify */])(wx.saveVideoToPhotosAlbum);var createVideoContext=wx.createVideoContext;var chooseVideo=Object(framework_shared_esm["m" /* promisify */])(wx.chooseVideo);var chooseMedia=Object(framework_shared_esm["m" /* promisify */])(wx.chooseMedia);var stopVoice=Object(framework_shared_esm["m" /* promisify */])(wx.stopVoice);var setInnerAudioOption=Object(framework_shared_esm["m" /* promisify */])(wx.setInnerAudioOption);var playVoice=Object(framework_shared_esm["m" /* promisify */])(wx.playVoice);var pauseVoice=Object(framework_shared_esm["m" /* promisify */])(wx.pauseVoice);var getAvailableAudioSources=Object(framework_shared_esm["m" /* promisify */])(wx.getAvailableAudioSources);var createInnerAudioContext=wx.createInnerAudioContext;var createAudioContext=wx.createAudioContext;var stopBackgroundAudio=Object(framework_shared_esm["m" /* promisify */])(wx.stopBackgroundAudio);var seekBackgroundAudio=Object(framework_shared_esm["m" /* promisify */])(wx.seekBackgroundAudio);var playBackgroundAudio=Object(framework_shared_esm["m" /* promisify */])(wx.playBackgroundAudio);var pauseBackgroundAudio=Object(framework_shared_esm["m" /* promisify */])(wx.pauseBackgroundAudio);var onBackgroundAudioStop=wx.onBackgroundAudioStop;var onBackgroundAudioPlay=wx.onBackgroundAudioPlay;var onBackgroundAudioPause=wx.onBackgroundAudioPause;var getBackgroundAudioPlayerState=Object(framework_shared_esm["m" /* promisify */])(wx.getBackgroundAudioPlayerState);var getBackgroundAudioManager=wx.getBackgroundAudioManager;var createLivePusherContext=wx.createLivePusherContext;var createLivePlayerContext=wx.createLivePlayerContext;var stopRecord=Object(framework_shared_esm["m" /* promisify */])(wx.stopRecord);var startRecord=Object(framework_shared_esm["m" /* promisify */])(wx.startRecord);var getRecorderManager=wx.getRecorderManager;var createCameraContext=wx.createCameraContext;var stopLocationUpdate=Object(framework_shared_esm["m" /* promisify */])(wx.stopLocationUpdate);var startLocationUpdateBackground=Object(framework_shared_esm["m" /* promisify */])(wx.startLocationUpdateBackground);var startLocationUpdate=Object(framework_shared_esm["m" /* promisify */])(wx.startLocationUpdate);var openLocation=Object(framework_shared_esm["m" /* promisify */])(wx.openLocation);var onLocationChange=wx.onLocationChange;var getLocation=Object(framework_shared_esm["m" /* promisify */])(wx.getLocation);var chooseLocation=Object(framework_shared_esm["m" /* promisify */])(wx.chooseLocation);var updateShareMenu=Object(framework_shared_esm["m" /* promisify */])(wx.updateShareMenu);var showShareMenu=Object(framework_shared_esm["m" /* promisify */])(wx.showShareMenu);var hideShareMenu=Object(framework_shared_esm["m" /* promisify */])(wx.hideShareMenu);var getShareInfo=Object(framework_shared_esm["m" /* promisify */])(wx.getShareInfo);var createOffscreenCanvas=wx.createOffscreenCanvas;var createCanvasContext=wx.createCanvasContext;var canvasToTempFilePath=Object(framework_shared_esm["m" /* promisify */])(wx.canvasToTempFilePath);var canvasPutImageData=Object(framework_shared_esm["m" /* promisify */])(wx.canvasPutImageData);var canvasGetImageData=Object(framework_shared_esm["m" /* promisify */])(wx.canvasGetImageData);var saveFile=Object(framework_shared_esm["m" /* promisify */])(wx.saveFile);var removeSavedFile=Object(framework_shared_esm["m" /* promisify */])(wx.removeSavedFile);var openDocument=Object(framework_shared_esm["m" /* promisify */])(wx.openDocument);var getSavedFileList=Object(framework_shared_esm["m" /* promisify */])(wx.getSavedFileList);var getSavedFileInfo=Object(framework_shared_esm["m" /* promisify */])(wx.getSavedFileInfo);var getFileSystemManager=wx.getFileSystemManager;var getFileInfo=Object(framework_shared_esm["m" /* promisify */])(wx.getFileInfo);var login=Object(framework_shared_esm["m" /* promisify */])(wx.login);var checkSession=Object(framework_shared_esm["m" /* promisify */])(wx.checkSession);var navigateToMiniProgram=Object(framework_shared_esm["m" /* promisify */])(wx.navigateToMiniProgram);var navigateBackMiniProgram=Object(framework_shared_esm["m" /* promisify */])(wx.navigateBackMiniProgram);var getAccountInfoSync=wx.getAccountInfoSync;var getUserInfo=Object(framework_shared_esm["m" /* promisify */])(wx.getUserInfo);var reportMonitor=wx.reportMonitor;var reportAnalytics=wx.reportAnalytics;var requestPayment=Object(framework_shared_esm["m" /* promisify */])(wx.requestPayment);var authorize=Object(framework_shared_esm["m" /* promisify */])(wx.authorize);var openSetting=Object(framework_shared_esm["m" /* promisify */])(wx.openSetting);var getSetting=Object(framework_shared_esm["m" /* promisify */])(wx.getSetting);var chooseAddress=Object(framework_shared_esm["m" /* promisify */])(wx.chooseAddress);var openCard=Object(framework_shared_esm["m" /* promisify */])(wx.openCard);var addCard=Object(framework_shared_esm["m" /* promisify */])(wx.addCard);var chooseInvoiceTitle=Object(framework_shared_esm["m" /* promisify */])(wx.chooseInvoiceTitle);var chooseInvoice=Object(framework_shared_esm["m" /* promisify */])(wx.chooseInvoice);var startSoterAuthentication=Object(framework_shared_esm["m" /* promisify */])(wx.startSoterAuthentication);var checkIsSupportSoterAuthentication=Object(framework_shared_esm["m" /* promisify */])(wx.checkIsSupportSoterAuthentication);var checkIsSoterEnrolledInDevice=Object(framework_shared_esm["m" /* promisify */])(wx.checkIsSoterEnrolledInDevice);var getWeRunData=Object(framework_shared_esm["m" /* promisify */])(wx.getWeRunData);var stopBeaconDiscovery=Object(framework_shared_esm["m" /* promisify */])(wx.stopBeaconDiscovery);var startBeaconDiscovery=Object(framework_shared_esm["m" /* promisify */])(wx.startBeaconDiscovery);var onBeaconUpdate=wx.onBeaconUpdate;var offBeaconUpdate=wx.offBeaconUpdate;var onBeaconServiceChange=wx.onBeaconServiceChange;var offBeaconServiceChange=wx.offBeaconServiceChange;var getBeacons=Object(framework_shared_esm["m" /* promisify */])(wx.getBeacons);var stopWifi=Object(framework_shared_esm["m" /* promisify */])(wx.stopWifi);var startWifi=Object(framework_shared_esm["m" /* promisify */])(wx.startWifi);var setWifiList=Object(framework_shared_esm["m" /* promisify */])(wx.setWifiList);var onWifiConnected=wx.onWifiConnected;var offWifiConnected=wx.offWifiConnected;var onGetWifiList=wx.onGetWifiList;var offGetWifiList=wx.offGetWifiList;var getWifiList=Object(framework_shared_esm["m" /* promisify */])(wx.getWifiList);var getConnectedWifi=Object(framework_shared_esm["m" /* promisify */])(wx.getConnectedWifi);var connectWifi=Object(framework_shared_esm["m" /* promisify */])(wx.connectWifi);var addPhoneContact=Object(framework_shared_esm["m" /* promisify */])(wx.addPhoneContact);var writeBLECharacteristicValue=Object(framework_shared_esm["m" /* promisify */])(wx.writeBLECharacteristicValue);var readBLECharacteristicValue=Object(framework_shared_esm["m" /* promisify */])(wx.readBLECharacteristicValue);var onBLEConnectionStateChange=wx.onBLEConnectionStateChange;var offBLEConnectionStateChange=wx.offBLEConnectionStateChange;var onBLECharacteristicValueChange=wx.onBLECharacteristicValueChange;var offBLECharacteristicValueChange=wx.offBLECharacteristicValueChange;var notifyBLECharacteristicValueChange=Object(framework_shared_esm["m" /* promisify */])(wx.notifyBLECharacteristicValueChange);var getBLEDeviceServices=Object(framework_shared_esm["m" /* promisify */])(wx.getBLEDeviceServices);var getBLEDeviceCharacteristics=Object(framework_shared_esm["m" /* promisify */])(wx.getBLEDeviceCharacteristics);var createBLEConnection=Object(framework_shared_esm["m" /* promisify */])(wx.createBLEConnection);var closeBLEConnection=Object(framework_shared_esm["m" /* promisify */])(wx.closeBLEConnection);var stopBluetoothDevicesDiscovery=Object(framework_shared_esm["m" /* promisify */])(wx.stopBluetoothDevicesDiscovery);var startBluetoothDevicesDiscovery=Object(framework_shared_esm["m" /* promisify */])(wx.startBluetoothDevicesDiscovery);var openBluetoothAdapter=wx.openBluetoothAdapter;var onBluetoothDeviceFound=wx.onBluetoothDeviceFound;var offBluetoothDeviceFound=wx.offBluetoothDeviceFound;var onBluetoothAdapterStateChange=wx.onBluetoothAdapterStateChange;var offBluetoothAdapterStateChange=wx.offBluetoothAdapterStateChange;var getConnectedBluetoothDevices=Object(framework_shared_esm["m" /* promisify */])(wx.getConnectedBluetoothDevices);var getBluetoothDevices=Object(framework_shared_esm["m" /* promisify */])(wx.getBluetoothDevices);var getBluetoothAdapterState=Object(framework_shared_esm["m" /* promisify */])(wx.getBluetoothAdapterState);var closeBluetoothAdapter=Object(framework_shared_esm["m" /* promisify */])(wx.closeBluetoothAdapter);var getBatteryInfoSync=wx.getBatteryInfoSync;var getBatteryInfo=Object(framework_shared_esm["m" /* promisify */])(wx.getBatteryInfo);var setClipboardData=Object(framework_shared_esm["m" /* promisify */])(wx.setClipboardData);var getClipboardData=Object(framework_shared_esm["m" /* promisify */])(wx.getClipboardData);var stopHCE=Object(framework_shared_esm["m" /* promisify */])(wx.stopHCE);var startHCE=Object(framework_shared_esm["m" /* promisify */])(wx.startHCE);var sendHCEMessage=Object(framework_shared_esm["m" /* promisify */])(wx.sendHCEMessage);var onHCEMessage=wx.onHCEMessage;var offHCEMessage=wx.offHCEMessage;var getHCEState=Object(framework_shared_esm["m" /* promisify */])(wx.getHCEState);var onNetworkStatusChange=wx.onNetworkStatusChange;var offNetworkStatusChange=wx.offNetworkStatusChange;var getNetworkType=Object(framework_shared_esm["m" /* promisify */])(wx.getNetworkType);var setScreenBrightness=Object(framework_shared_esm["m" /* promisify */])(wx.setScreenBrightness);var setKeepScreenOn=Object(framework_shared_esm["m" /* promisify */])(wx.setKeepScreenOn);var onUserCaptureScreen=wx.onUserCaptureScreen;var offUserCaptureScreen=wx.offUserCaptureScreen;var getScreenBrightness=Object(framework_shared_esm["m" /* promisify */])(wx.getScreenBrightness);var makePhoneCall=Object(framework_shared_esm["m" /* promisify */])(wx.makePhoneCall);var stopAccelerometer=Object(framework_shared_esm["m" /* promisify */])(wx.stopAccelerometer);var startAccelerometer=Object(framework_shared_esm["m" /* promisify */])(wx.startAccelerometer);var onAccelerometerChange=wx.onAccelerometerChange;var offAccelerometerChange=wx.offAccelerometerChange;var stopCompass=Object(framework_shared_esm["m" /* promisify */])(wx.stopCompass);var startCompass=Object(framework_shared_esm["m" /* promisify */])(wx.startCompass);var onCompassChange=wx.onCompassChange;var offCompassChange=wx.offCompassChange;var stopDeviceMotionListening=Object(framework_shared_esm["m" /* promisify */])(wx.stopDeviceMotionListening);var startDeviceMotionListening=Object(framework_shared_esm["m" /* promisify */])(wx.startDeviceMotionListening);var onDeviceMotionChange=wx.onDeviceMotionChange;var offDeviceMotionChange=wx.offDeviceMotionChange;var stopGyroscope=Object(framework_shared_esm["m" /* promisify */])(wx.stopGyroscope);var startGyroscope=Object(framework_shared_esm["m" /* promisify */])(wx.startGyroscope);var onGyroscopeChange=wx.onGyroscopeChange;var offGyroscopeChange=wx.offGyroscopeChange;var onMemoryWarning=wx.onMemoryWarning;var offMemoryWarning=wx.offMemoryWarning;var scanCode=Object(framework_shared_esm["m" /* promisify */])(wx.scanCode);var vibrateShort=Object(framework_shared_esm["m" /* promisify */])(wx.vibrateShort);var vibrateLong=Object(framework_shared_esm["m" /* promisify */])(wx.vibrateLong);var createWorker=wx.createWorker;var getExtConfigSync=wx.getExtConfigSync;var getExtConfig=Object(framework_shared_esm["m" /* promisify */])(wx.getExtConfig);var createSelectorQuery=wx.createSelectorQuery;var createIntersectionObserver=wx.createIntersectionObserver;var createRewardedVideoAd=wx.createRewardedVideoAd;var createInterstitialAd=wx.createInterstitialAd;var cloud=wx.cloud;var requestSubscribeMessage=Object(framework_shared_esm["m" /* promisify */])(wx.requestSubscribeMessage);var hideHomeButton=Object(framework_shared_esm["m" /* promisify */])(wx.hideHomeButton);var getRealtimeLogManager=wx.getRealtimeLogManager;var hideKeyboard=Object(framework_shared_esm["m" /* promisify */])(wx.hideKeyboard);
// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/types/config.js

// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/types/index.js

// CONCATENATED MODULE: ./node_modules/_@remax_wechat@2.15.4@@remax/wechat/esm/index.js


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */
if(true){module.exports=__webpack_require__(23);}else{}

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */
if(true){module.exports=__webpack_require__(22);}else{}

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */
/*
object-assign
(c) Sindre Sorhus
@license MIT
*//* eslint-disable no-unused-vars */var getOwnPropertySymbols=Object.getOwnPropertySymbols;var hasOwnProperty=Object.prototype.hasOwnProperty;var propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(val){if(val===null||val===undefined){throw new TypeError('Object.assign cannot be called with null or undefined');}return Object(val);}function shouldUseNative(){try{if(!Object.assign){return false;}// Detect buggy property enumeration order in older V8 versions.
// https://bugs.chromium.org/p/v8/issues/detail?id=4118
var test1=new String('abc');// eslint-disable-line no-new-wrappers
test1[5]='de';if(Object.getOwnPropertyNames(test1)[0]==='5'){return false;}// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var test2={};for(var i=0;i<10;i++){test2['_'+String.fromCharCode(i)]=i;}var order2=Object.getOwnPropertyNames(test2).map(function(n){return test2[n];});if(order2.join('')!=='0123456789'){return false;}// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var test3={};'abcdefghijklmnopqrst'.split('').forEach(function(letter){test3[letter]=letter;});if(Object.keys(Object.assign({},test3)).join('')!=='abcdefghijklmnopqrst'){return false;}return true;}catch(err){// We don't expect any of the above to throw, but better to be safe.
return false;}}module.exports=shouldUseNative()?Object.assign:function(target,source){var from;var to=toObject(target);var symbols;for(var s=1;s<arguments.length;s++){from=Object(arguments[s]);for(var key in from){if(hasOwnProperty.call(from,key)){to[key]=from[key];}}if(getOwnPropertySymbols){symbols=getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++){if(propIsEnumerable.call(from,symbols[i])){to[symbols[i]]=from[symbols[i]];}}}}return to;};

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


if (true) {
  module.exports = __webpack_require__(17);
} else {}


/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
/* WEBPACK VAR INJECTION */(function(module) {/** @license React v0.26.2
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = function $$$reconciler($$$hostConfig) {
    var exports = {};
'use strict';var aa=__webpack_require__(10),ba=__webpack_require__(2),m=__webpack_require__(20);function q(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var ca=ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,da=60103,ea=60106,fa=60107,ha=60108,ia=60114,ja=60109,ka=60110,la=60112,ma=60113,na=60120,oa=60115,pa=60116,qa=60121,ra=60129,sa=60130,ta=60131;
if("function"===typeof Symbol&&Symbol.for){var r=Symbol.for;da=r("react.element");ea=r("react.portal");fa=r("react.fragment");ha=r("react.strict_mode");ia=r("react.profiler");ja=r("react.provider");ka=r("react.context");la=r("react.forward_ref");ma=r("react.suspense");na=r("react.suspense_list");oa=r("react.memo");pa=r("react.lazy");qa=r("react.block");r("react.scope");ra=r("react.debug_trace_mode");sa=r("react.offscreen");ta=r("react.legacy_hidden")}var ua="function"===typeof Symbol&&Symbol.iterator;
function va(a){if(null===a||"object"!==typeof a)return null;a=ua&&a[ua]||a["@@iterator"];return"function"===typeof a?a:null}
function wa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case fa:return"Fragment";case ea:return"Portal";case ia:return"Profiler";case ha:return"StrictMode";case ma:return"Suspense";case na:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case ka:return(a.displayName||"Context")+".Consumer";case ja:return(a._context.displayName||"Context")+".Provider";case la:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case oa:return wa(a.type);case qa:return wa(a._render);case pa:b=a._payload;a=a._init;try{return wa(a(b))}catch(c){}}return null}function xa(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ya(a){if(xa(a)!==a)throw Error(q(188));}
function za(a){var b=a.alternate;if(!b){b=xa(a);if(null===b)throw Error(q(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ya(e),a;if(f===d)return ya(e),b;f=f.sibling}throw Error(q(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(q(189));}}if(c.alternate!==d)throw Error(q(190));}if(3!==c.tag)throw Error(q(188));return c.stateNode.current===c?a:b}function Aa(a){a=za(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function Ba(a){a=za(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child&&4!==b.tag)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}function Ca(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return!0;b=b.return}return!1}
var Da=$$$hostConfig.getPublicInstance,Ea=$$$hostConfig.getRootHostContext,Fa=$$$hostConfig.getChildHostContext,Ga=$$$hostConfig.prepareForCommit,Ha=$$$hostConfig.resetAfterCommit,Ia=$$$hostConfig.createInstance,Ja=$$$hostConfig.appendInitialChild,Ka=$$$hostConfig.finalizeInitialChildren,La=$$$hostConfig.prepareUpdate,Ma=$$$hostConfig.shouldSetTextContent,Na=$$$hostConfig.createTextInstance,Pa=$$$hostConfig.scheduleTimeout,Qa=$$$hostConfig.cancelTimeout,Ra=$$$hostConfig.noTimeout,Sa=$$$hostConfig.isPrimaryRenderer,
Ta=$$$hostConfig.supportsMutation,Ua=$$$hostConfig.supportsPersistence,Va=$$$hostConfig.supportsHydration,Wa=$$$hostConfig.getInstanceFromNode,Xa=$$$hostConfig.makeOpaqueHydratingObject,Ya=$$$hostConfig.makeClientId,Za=$$$hostConfig.beforeActiveInstanceBlur,$a=$$$hostConfig.afterActiveInstanceBlur,ab=$$$hostConfig.preparePortalMount,bb=$$$hostConfig.supportsTestSelectors,cb=$$$hostConfig.findFiberRoot,db=$$$hostConfig.getBoundingRect,eb=$$$hostConfig.getTextContent,fb=$$$hostConfig.isHiddenSubtree,
gb=$$$hostConfig.matchAccessibilityRole,hb=$$$hostConfig.setFocusIfFocusable,ib=$$$hostConfig.setupIntersectionObserver,jb=$$$hostConfig.appendChild,kb=$$$hostConfig.appendChildToContainer,lb=$$$hostConfig.commitTextUpdate,mb=$$$hostConfig.commitMount,nb=$$$hostConfig.commitUpdate,ob=$$$hostConfig.insertBefore,pb=$$$hostConfig.insertInContainerBefore,qb=$$$hostConfig.removeChild,rb=$$$hostConfig.removeChildFromContainer,sb=$$$hostConfig.resetTextContent,tb=$$$hostConfig.hideInstance,ub=$$$hostConfig.hideTextInstance,
vb=$$$hostConfig.unhideInstance,wb=$$$hostConfig.unhideTextInstance,xb=$$$hostConfig.clearContainer,yb=$$$hostConfig.cloneInstance,zb=$$$hostConfig.createContainerChildSet,Ab=$$$hostConfig.appendChildToContainerChildSet,Bb=$$$hostConfig.finalizeContainerChildren,Cb=$$$hostConfig.replaceContainerChildren,Db=$$$hostConfig.cloneHiddenInstance,Eb=$$$hostConfig.cloneHiddenTextInstance,Fb=$$$hostConfig.canHydrateInstance,Gb=$$$hostConfig.canHydrateTextInstance,Hb=$$$hostConfig.isSuspenseInstancePending,
Ib=$$$hostConfig.isSuspenseInstanceFallback,Jb=$$$hostConfig.getNextHydratableSibling,Kb=$$$hostConfig.getFirstHydratableChild,Lb=$$$hostConfig.hydrateInstance,Mb=$$$hostConfig.hydrateTextInstance,Nb=$$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance,Ob=$$$hostConfig.commitHydratedContainer,Pb=$$$hostConfig.commitHydratedSuspenseInstance,Qb;function Rb(a){if(void 0===Qb)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Qb=b&&b[1]||""}return"\n"+Qb+a}var Sb=!1;
function Tb(a,b){if(!a||Sb)return"";Sb=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error();}catch(k){d=k}a()}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return"\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Sb=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Rb(a):""}var Ub=[],Vb=-1;function Wb(a){return{current:a}}function z(a){0>Vb||(a.current=Ub[Vb],Ub[Vb]=null,Vb--)}function A(a,b){Vb++;Ub[Vb]=a.current;a.current=b}
var Xb={},B=Wb(Xb),D=Wb(!1),Yb=Xb;function Zb(a,b){var c=a.type.contextTypes;if(!c)return Xb;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function E(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $b(){z(D);z(B)}
function ac(a,b,c){if(B.current!==Xb)throw Error(q(168));A(B,b);A(D,c)}function bc(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(q(108,wa(b)||"Unknown",e));return aa({},c,d)}function cc(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Xb;Yb=B.current;A(B,a);A(D,D.current);return!0}
function dc(a,b,c){var d=a.stateNode;if(!d)throw Error(q(169));c?(a=bc(a,b,Yb),d.__reactInternalMemoizedMergedChildContext=a,z(D),z(B),A(B,a)):z(D);A(D,c)}var ec=null,fc=null,gc=m.unstable_now;gc();var hc=0,F=8;
function ic(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
F=8;return a}function jc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function kc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(q(358,a));}}
function lc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=ic(k),e=F):(h&=f,0!==h&&(d=ic(h),e=F))}else f=c&~g,0!==f?(d=ic(f),e=F):0!==h&&(d=ic(h),e=F);if(0===d)return 0;d=31-mc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){ic(b);if(e<=F)return b;F=e}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-mc(b),e=1<<c,d|=a[c],b&=~e;return d}
function nc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function oc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=pc(24&~b),0===a?oc(10,b):a;case 10:return a=pc(192&~b),0===a?oc(8,b):a;case 8:return a=pc(3584&~b),0===a&&(a=pc(4186112&~b),0===a&&(a=512)),a;case 2:return b=pc(805306368&~b),0===b&&(b=268435456),b}throw Error(q(358,a));}function pc(a){return a&-a}function qc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function rc(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-mc(b);a[b]=c}var mc=Math.clz32?Math.clz32:sc,tc=Math.log,uc=Math.LN2;function sc(a){return 0===a?32:31-(tc(a)/uc|0)|0}
var vc=m.unstable_runWithPriority,wc=m.unstable_scheduleCallback,xc=m.unstable_cancelCallback,yc=m.unstable_shouldYield,zc=m.unstable_requestPaint,Ac=m.unstable_now,Bc=m.unstable_getCurrentPriorityLevel,Cc=m.unstable_ImmediatePriority,Dc=m.unstable_UserBlockingPriority,Ec=m.unstable_NormalPriority,Fc=m.unstable_LowPriority,Gc=m.unstable_IdlePriority,Hc={},Ic=void 0!==zc?zc:function(){},Jc=null,Kc=null,Lc=!1,Mc=Ac(),G=1E4>Mc?Ac:function(){return Ac()-Mc};
function Nc(){switch(Bc()){case Cc:return 99;case Dc:return 98;case Ec:return 97;case Fc:return 96;case Gc:return 95;default:throw Error(q(332));}}function Oc(a){switch(a){case 99:return Cc;case 98:return Dc;case 97:return Ec;case 96:return Fc;case 95:return Gc;default:throw Error(q(332));}}function Pc(a,b){a=Oc(a);return vc(a,b)}function Qc(a,b,c){a=Oc(a);return wc(a,b,c)}function H(){if(null!==Kc){var a=Kc;Kc=null;xc(a)}Rc()}
function Rc(){if(!Lc&&null!==Jc){Lc=!0;var a=0;try{var b=Jc;Pc(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Jc=null}catch(c){throw null!==Jc&&(Jc=Jc.slice(a+1)),wc(Cc,H),c;}finally{Lc=!1}}}var Sc=ca.ReactCurrentBatchConfig;function Tc(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var I="function"===typeof Object.is?Object.is:Tc,Uc=Object.prototype.hasOwnProperty;
function Vc(a,b){if(I(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Uc.call(b,c[d])||!I(a[c[d]],b[c[d]]))return!1;return!0}
function Wc(a){switch(a.tag){case 5:return Rb(a.type);case 16:return Rb("Lazy");case 13:return Rb("Suspense");case 19:return Rb("SuspenseList");case 0:case 2:case 15:return a=Tb(a.type,!1),a;case 11:return a=Tb(a.type.render,!1),a;case 22:return a=Tb(a.type._render,!1),a;case 1:return a=Tb(a.type,!0),a;default:return""}}function Xc(a,b){if(a&&a.defaultProps){b=aa({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var Yc=Wb(null),Zc=null,$c=null,ad=null;
function bd(){ad=$c=Zc=null}function cd(a,b){a=a.type._context;Sa?(A(Yc,a._currentValue),a._currentValue=b):(A(Yc,a._currentValue2),a._currentValue2=b)}function dd(a){var b=Yc.current;z(Yc);a=a.type._context;Sa?a._currentValue=b:a._currentValue2=b}function ed(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return}}
function fd(a,b){Zc=a;ad=$c=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(gd=!0),a.firstContext=null)}function J(a,b){if(ad!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)ad=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===$c){if(null===Zc)throw Error(q(308));$c=b;Zc.dependencies={lanes:0,firstContext:b,responders:null}}else $c=$c.next=b}return Sa?a._currentValue:a._currentValue2}var hd=!1;
function id(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function jd(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function kd(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function md(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function nd(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function od(a,b,c,d){var e=a.updateQueue;hd=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var t=n.lastBaseUpdate;t!==g&&(null===t?n.firstBaseUpdate=l:t.next=l,n.lastBaseUpdate=k)}}if(null!==f){t=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
next:null});a:{var y=a,x=f;h=b;p=c;switch(x.tag){case 1:y=x.payload;if("function"===typeof y){t=y.call(p,t,h);break a}t=y;break a;case 3:y.flags=y.flags&-4097|64;case 0:y=x.payload;h="function"===typeof y?y.call(p,t,h):y;if(null===h||void 0===h)break a;t=aa({},t,h);break a;case 2:hd=!0}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f))}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=t):n=n.next=p,g|=h;f=f.next;if(null===
f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}while(1);null===n&&(k=t);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;pd|=g;a.lanes=g;a.memoizedState=t}}function qd(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(q(191,e));e.call(d)}}}var rd=(new ba.Component).refs;
function sd(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:aa({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var vd={isMounted:function(a){return(a=a._reactInternals)?xa(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=K(),e=td(a),f=kd(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);md(a,f);ud(a,e,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=K(),e=td(a),f=kd(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);md(a,f);ud(a,e,d)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=K(),d=td(a),e=kd(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
b);md(a,e);ud(a,d,c)}};function wd(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Vc(c,d)||!Vc(e,f):!0}
function xd(a,b,c){var d=!1,e=Xb;var f=b.contextType;"object"===typeof f&&null!==f?f=J(f):(e=E(b)?Yb:B.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Zb(a,e):Xb);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=vd;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function yd(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&vd.enqueueReplaceState(b,b.state,null)}
function zd(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=rd;id(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=J(f):(f=E(b)?Yb:B.current,e.context=Zb(a,f));od(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(sd(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&vd.enqueueReplaceState(e,e.state,null),od(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4)}var Ad=Array.isArray;
function Bd(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(q(309));var d=c.stateNode}if(!d)throw Error(q(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===rd&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(q(284));if(!c._owner)throw Error(q(290,a));}return a}
function Cd(a,b){if("textarea"!==a.type)throw Error(q(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
function Dd(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Ed(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Fd(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Bd(a,b,c),d.return=a,d;d=Gd(c.type,c.key,c.props,null,a.mode,d);d.ref=Bd(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Hd(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Id(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function t(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Fd(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case da:return c=Gd(b.type,b.key,b.props,null,a.mode,c),c.ref=Bd(a,null,b),c.return=a,c;case ea:return b=Hd(b,a.mode,c),b.return=a,b}if(Ad(b)||va(b))return b=Id(b,
a.mode,c,null),b.return=a,b;Cd(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case da:return c.key===e?c.type===fa?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ea:return c.key===e?l(a,b,c,d):null}if(Ad(c)||va(c))return null!==e?null:n(a,b,c,d,null);Cd(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case da:return a=a.get(null===d.key?c:d.key)||null,d.type===fa?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ea:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Ad(d)||va(d))return a=a.get(c)||null,n(b,a,d,e,null);Cd(b,d)}return null}function x(e,g,h,k){for(var l=null,v=null,u=g,C=g=0,n=null;null!==u&&C<h.length;C++){u.index>C?(n=u,u=null):n=u.sibling;var w=p(e,u,h[C],k);if(null===w){null===u&&(u=n);break}a&&u&&null===
w.alternate&&b(e,u);g=f(w,g,C);null===v?l=w:v.sibling=w;v=w;u=n}if(C===h.length)return c(e,u),l;if(null===u){for(;C<h.length;C++)u=t(e,h[C],k),null!==u&&(g=f(u,g,C),null===v?l=u:v.sibling=u,v=u);return l}for(u=d(e,u);C<h.length;C++)n=y(u,e,C,h[C],k),null!==n&&(a&&null!==n.alternate&&u.delete(null===n.key?C:n.key),g=f(n,g,C),null===v?l=n:v.sibling=n,v=n);a&&u.forEach(function(a){return b(e,a)});return l}function Y(e,g,h,k){var l=va(h);if("function"!==typeof l)throw Error(q(150));h=l.call(h);if(null==
h)throw Error(q(151));for(var u=l=null,v=g,n=g=0,C=null,w=h.next();null!==v&&!w.done;n++,w=h.next()){v.index>n?(C=v,v=null):C=v.sibling;var x=p(e,v,w.value,k);if(null===x){null===v&&(v=C);break}a&&v&&null===x.alternate&&b(e,v);g=f(x,g,n);null===u?l=x:u.sibling=x;u=x;v=C}if(w.done)return c(e,v),l;if(null===v){for(;!w.done;n++,w=h.next())w=t(e,w.value,k),null!==w&&(g=f(w,g,n),null===u?l=w:u.sibling=w,u=w);return l}for(v=d(e,v);!w.done;n++,w=h.next())w=y(v,e,n,w.value,k),null!==w&&(a&&null!==w.alternate&&
v.delete(null===w.key?n:w.key),g=f(w,g,n),null===u?l=w:u.sibling=w,u=w);a&&v.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===fa&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case da:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===fa){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
d=e(k,f.props);d.ref=Bd(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===fa?(d=Id(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Gd(f.type,f.key,f.props,null,a.mode,h),h.ref=Bd(a,d,f),h.return=a,a=h)}return g(a);case ea:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=
Hd(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Fd(f,a.mode,h),d.return=a,a=d),g(a);if(Ad(f))return x(a,d,f,h);if(va(f))return Y(a,d,f,h);l&&Cd(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(q(152,wa(a.type)||"Component"));}return c(a,d)}}var Jd=Dd(!0),Kd=Dd(!1),Ld={},L=Wb(Ld),Md=Wb(Ld),Nd=Wb(Ld);
function Od(a){if(a===Ld)throw Error(q(174));return a}function Pd(a,b){A(Nd,b);A(Md,a);A(L,Ld);a=Ea(b);z(L);A(L,a)}function Qd(){z(L);z(Md);z(Nd)}function Rd(a){var b=Od(Nd.current),c=Od(L.current);b=Fa(c,a.type,b);c!==b&&(A(Md,a),A(L,b))}function Sd(a){Md.current===a&&(z(L),z(Md))}var M=Wb(0);
function Td(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||Hb(c)||Ib(c)))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Ud=null,Vd=null,Wd=!1;
function Xd(a,b){var c=Yd(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function Zd(a,b){switch(a.tag){case 5:return b=Fb(b,a.type,a.pendingProps),null!==b?(a.stateNode=b,!0):!1;case 6:return b=Gb(b,a.pendingProps),null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function $d(a){if(Wd){var b=Vd;if(b){var c=b;if(!Zd(a,b)){b=Jb(c);if(!b||!Zd(a,b)){a.flags=a.flags&-1025|2;Wd=!1;Ud=a;return}Xd(Ud,c)}Ud=a;Vd=Kb(b)}else a.flags=a.flags&-1025|2,Wd=!1,Ud=a}}function ae(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Ud=a}
function be(a){if(!Va||a!==Ud)return!1;if(!Wd)return ae(a),Wd=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Ma(b,a.memoizedProps))for(b=Vd;b;)Xd(a,b),b=Jb(b);ae(a);if(13===a.tag){if(!Va)throw Error(q(316));a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(q(317));Vd=Nb(a)}else Vd=Ud?Jb(a.stateNode):null;return!0}function ce(){Va&&(Vd=Ud=null,Wd=!1)}var de=[];
function ee(){for(var a=0;a<de.length;a++){var b=de[a];Sa?b._workInProgressVersionPrimary=null:b._workInProgressVersionSecondary=null}de.length=0}var fe=ca.ReactCurrentDispatcher,ge=ca.ReactCurrentBatchConfig,he=0,N=null,O=null,P=null,ie=!1,je=!1;function Q(){throw Error(q(321));}function ke(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!I(a[c],b[c]))return!1;return!0}
function le(a,b,c,d,e,f){he=f;N=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;fe.current=null===a||null===a.memoizedState?me:ne;a=c(d,e);if(je){f=0;do{je=!1;if(!(25>f))throw Error(q(301));f+=1;P=O=null;b.updateQueue=null;fe.current=oe;a=c(d,e)}while(je)}fe.current=pe;b=null!==O&&null!==O.next;he=0;P=O=N=null;ie=!1;if(b)throw Error(q(300));return a}function qe(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}
function re(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(q(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}function se(a,b){return"function"===typeof b?b(a):b}
function te(a){var b=re(),c=b.queue;if(null===c)throw Error(q(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((he&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else{var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;N.lanes|=l;pd|=l}k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;I(d,b.memoizedState)||(gd=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function ue(a){var b=re(),c=b.queue;if(null===c)throw Error(q(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);I(f,b.memoizedState)||(gd=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function ve(a,b,c){var d=b._getVersion;d=d(b._source);var e=Sa?b._workInProgressVersionPrimary:b._workInProgressVersionSecondary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(he&a)===a)Sa?b._workInProgressVersionPrimary=d:b._workInProgressVersionSecondary=d,de.push(b);if(a)return c(b._source);de.push(b);throw Error(q(350));}
function we(a,b,c,d){var e=R;if(null===e)throw Error(q(349));var f=b._getVersion,g=f(b._source),h=fe.current,k=h.useState(function(){return ve(e,b,c)}),l=k[1],n=k[0];k=P;var t=a.memoizedState,p=t.refs,y=p.getSnapshot,x=t.source;t=t.subscribe;var Y=N;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!I(g,a)){a=c(b._source);I(n,a)||(l(a),a=td(Y),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
e.entanglements,h=a;0<h;){var k=31-mc(h),t=1<<k;d[k]|=a;h&=~t}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=td(Y);e.mutableReadLanes|=d&e.pendingLanes}catch(Oa){c(function(){throw Oa;})}})},[b,d]);I(y,c)&&I(x,b)&&I(t,d)||(a={pending:null,dispatch:null,lastRenderedReducer:se,lastRenderedState:n},a.dispatch=l=xe.bind(null,N,a),k.queue=a,k.baseQueue=null,n=ve(e,b,c),k.memoizedState=k.baseState=n);return n}
function ye(a,b,c){var d=re();return we(d,a,b,c)}function ze(a){var b=qe();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:se,lastRenderedState:a};a=a.dispatch=xe.bind(null,N,a);return[b.memoizedState,a]}
function Ae(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Be(a){var b=qe();a={current:a};return b.memoizedState=a}function Ce(){return re().memoizedState}function De(a,b,c,d){var e=qe();N.flags|=a;e.memoizedState=Ae(1|b,c,void 0,void 0===d?null:d)}
function Ee(a,b,c,d){var e=re();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&ke(d,g.deps)){Ae(b,c,f,d);return}}N.flags|=a;e.memoizedState=Ae(1|b,c,f,d)}function Fe(a,b){return De(516,4,a,b)}function Ge(a,b){return Ee(516,4,a,b)}function He(a,b){return Ee(4,2,a,b)}function Ie(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function Je(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ee(4,2,Ie.bind(null,b,a),c)}function Ke(){}function Le(a,b){var c=re();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ke(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function Me(a,b){var c=re();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ke(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
function Ne(a,b){var c=Nc();Pc(98>c?98:c,function(){a(!0)});Pc(97<c?97:c,function(){var c=ge.transition;ge.transition=1;try{a(!1),b()}finally{ge.transition=c}})}
function xe(a,b,c){var d=K(),e=td(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===N||null!==g&&g===N)je=ie=!0;else{if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(I(k,h))return}catch(l){}finally{}ud(a,e,d)}}
var pe={readContext:J,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useDeferredValue:Q,useTransition:Q,useMutableSource:Q,useOpaqueIdentifier:Q,unstable_isNewReconciler:!1},me={readContext:J,useCallback:function(a,b){qe().memoizedState=[a,void 0===b?null:b];return a},useContext:J,useEffect:Fe,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return De(4,2,Ie.bind(null,b,a),c)},useLayoutEffect:function(a,
b){return De(4,2,a,b)},useMemo:function(a,b){var c=qe();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=qe();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=xe.bind(null,N,a);return[d.memoizedState,a]},useRef:Be,useState:ze,useDebugValue:Ke,useDeferredValue:function(a){var b=ze(a),c=b[0],d=b[1];Fe(function(){var b=ge.transition;ge.transition=1;try{d(a)}finally{ge.transition=
b}},[a]);return c},useTransition:function(){var a=ze(!1),b=a[0];a=Ne.bind(null,a[1]);Be(a);return[a,b]},useMutableSource:function(a,b,c){var d=qe();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return we(d,a,b,c)},useOpaqueIdentifier:function(){if(Wd){var a=!1,b=Xa(function(){a||(a=!0,c(Ya()));throw Error(q(355));}),c=ze(b)[1];0===(N.mode&2)&&(N.flags|=516,Ae(5,function(){c(Ya())},void 0,null));return b}b=Ya();ze(b);return b},unstable_isNewReconciler:!1},ne={readContext:J,
useCallback:Le,useContext:J,useEffect:Ge,useImperativeHandle:Je,useLayoutEffect:He,useMemo:Me,useReducer:te,useRef:Ce,useState:function(){return te(se)},useDebugValue:Ke,useDeferredValue:function(a){var b=te(se),c=b[0],d=b[1];Ge(function(){var b=ge.transition;ge.transition=1;try{d(a)}finally{ge.transition=b}},[a]);return c},useTransition:function(){var a=te(se)[0];return[Ce().current,a]},useMutableSource:ye,useOpaqueIdentifier:function(){return te(se)[0]},unstable_isNewReconciler:!1},oe={readContext:J,
useCallback:Le,useContext:J,useEffect:Ge,useImperativeHandle:Je,useLayoutEffect:He,useMemo:Me,useReducer:ue,useRef:Ce,useState:function(){return ue(se)},useDebugValue:Ke,useDeferredValue:function(a){var b=ue(se),c=b[0],d=b[1];Ge(function(){var b=ge.transition;ge.transition=1;try{d(a)}finally{ge.transition=b}},[a]);return c},useTransition:function(){var a=ue(se)[0];return[Ce().current,a]},useMutableSource:ye,useOpaqueIdentifier:function(){return ue(se)[0]},unstable_isNewReconciler:!1},Oe=ca.ReactCurrentOwner,
gd=!1;function S(a,b,c,d){b.child=null===a?Kd(b,null,c,d):Jd(b,a.child,c,d)}function Pe(a,b,c,d,e){c=c.render;var f=b.ref;fd(b,e);d=le(a,b,c,d,f,e);if(null!==a&&!gd)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,Re(a,b,e);b.flags|=1;S(a,b,d,e);return b.child}
function Se(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Te(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,Ue(a,b,g,d,e,f);a=Gd(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Vc,c(e,d)&&a.ref===b.ref))return Re(a,b,f);b.flags|=1;a=Ed(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function Ue(a,b,c,d,e,f){if(null!==a&&Vc(a.memoizedProps,d)&&a.ref===b.ref)if(gd=!1,0!==(f&e))0!==(a.flags&16384)&&(gd=!0);else return b.lanes=a.lanes,Re(a,b,f);return Ve(a,b,c,d,f)}
function We(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},Xe(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},Xe(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},Xe(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,Xe(b,d);S(a,b,e,c);return b.child}
function Ye(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128}function Ve(a,b,c,d,e){var f=E(c)?Yb:B.current;f=Zb(b,f);fd(b,e);c=le(a,b,c,d,f,e);if(null!==a&&!gd)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,Re(a,b,e);b.flags|=1;S(a,b,c,e);return b.child}
function Ze(a,b,c,d,e){if(E(c)){var f=!0;cc(b)}else f=!1;fd(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),xd(b,c,d),zd(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=J(l):(l=E(c)?Yb:B.current,l=Zb(b,l));var n=c.getDerivedStateFromProps,t="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;t||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==
typeof g.componentWillReceiveProps||(h!==d||k!==l)&&yd(b,g,d,l);hd=!1;var p=b.memoizedState;g.state=p;od(b,d,g,e);k=b.memoizedState;h!==d||p!==k||D.current||hd?("function"===typeof n&&(sd(b,c,n,d),k=b.memoizedState),(h=hd||wd(b,c,h,d,p,k,l))?(t||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&
(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1)}else{g=b.stateNode;jd(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Xc(b.type,h);g.props=l;t=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=J(k):(k=E(c)?Yb:B.current,k=Zb(b,k));var y=c.getDerivedStateFromProps;(n="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==t||p!==k)&&yd(b,g,d,k);hd=!1;p=b.memoizedState;g.state=p;od(b,d,g,e);var x=b.memoizedState;h!==t||p!==x||D.current||hd?("function"===typeof y&&(sd(b,c,y,d),x=b.memoizedState),(l=hd||wd(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||
(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1)}return $e(a,b,c,d,f,e)}function $e(a,b,c,d,e,f){Ye(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&dc(b,c,!1),Re(a,b,f);d=b.stateNode;Oe.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Jd(b,a.child,null,f),b.child=Jd(b,null,h,f)):S(a,b,h,f);b.memoizedState=d.state;e&&dc(b,c,!0);return b.child}
function af(a){var b=a.stateNode;b.pendingContext?ac(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ac(a,b.context,!1);Pd(a,b.containerInfo)}var bf={dehydrated:null,retryLane:0};
function cf(a,b,c){var d=b.pendingProps,e=M.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);A(M,e&1);if(null===a){void 0!==d.fallback&&$d(b);a=d.children;e=d.fallback;if(f)return a=df(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=bf,a;if("number"===typeof d.unstable_expectedLoadTime)return a=df(b,a,e,c),b.child.memoizedState={baseLanes:c},
b.memoizedState=bf,b.lanes=33554432,a;c=ef({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=ff(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=bf,d;c=gf(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=ff(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=bf,d;c=gf(a,b,d.children,c);b.memoizedState=null;return c}function df(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=ef(b,e,0,null);c=Id(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
function gf(a,b,c,d){var e=a.child;a=e.sibling;c=Ed(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
function ff(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Ed(g,h);null!==a?d=Ed(a,d):(d=Id(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function hf(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);ed(a.return,b)}
function jf(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f)}
function kf(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;S(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else{if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&hf(a,c);else if(19===a.tag)hf(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}A(M,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Td(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);jf(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Td(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}jf(b,!0,c,null,f,b.lastEffect);break;case "together":jf(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function Re(a,b,c){null!==a&&(b.dependencies=a.dependencies);pd|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(q(153));if(null!==b.child){a=b.child;c=Ed(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Ed(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}return null}function lf(a){a.flags|=4}var mf,nf,of,pf;
if(Ta)mf=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)Ja(a,c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}},nf=function(){},of=function(a,b,c,d,e){a=a.memoizedProps;if(a!==d){var f=b.stateNode,g=Od(L.current);c=La(f,c,a,d,e,g);(b.updateQueue=c)&&lf(b)}},pf=function(a,b,c,d){c!==d&&lf(b)};else if(Ua){mf=function(a,
b,c,d){for(var e=b.child;null!==e;){if(5===e.tag){var f=e.stateNode;c&&d&&(f=Db(f,e.type,e.memoizedProps,e));Ja(a,f)}else if(6===e.tag)f=e.stateNode,c&&d&&(f=Eb(f,e.memoizedProps,e)),Ja(a,f);else if(4!==e.tag){if(13===e.tag&&0!==(e.flags&4)&&(f=null!==e.memoizedState)){var g=e.child;if(null!==g&&(null!==g.child&&(g.child.return=g,mf(a,g,!0,f)),f=g.sibling,null!==f)){f.return=e;e=f;continue}}if(null!==e.child){e.child.return=e;e=e.child;continue}}if(e===b)break;for(;null===e.sibling;){if(null===e.return||
e.return===b)return;e=e.return}e.sibling.return=e.return;e=e.sibling}};var qf=function(a,b,c,d){for(var e=b.child;null!==e;){if(5===e.tag){var f=e.stateNode;c&&d&&(f=Db(f,e.type,e.memoizedProps,e));Ab(a,f)}else if(6===e.tag)f=e.stateNode,c&&d&&(f=Eb(f,e.memoizedProps,e)),Ab(a,f);else if(4!==e.tag){if(13===e.tag&&0!==(e.flags&4)&&(f=null!==e.memoizedState)){var g=e.child;if(null!==g&&(null!==g.child&&(g.child.return=g,qf(a,g,!0,f)),f=g.sibling,null!==f)){f.return=e;e=f;continue}}if(null!==e.child){e.child.return=
e;e=e.child;continue}}if(e===b)break;for(;null===e.sibling;){if(null===e.return||e.return===b)return;e=e.return}e.sibling.return=e.return;e=e.sibling}};nf=function(a){var b=a.stateNode;if(null!==a.firstEffect){var c=b.containerInfo,d=zb(c);qf(d,a,!1,!1);b.pendingChildren=d;lf(a);Bb(c,d)}};of=function(a,b,c,d,e){var f=a.stateNode,g=a.memoizedProps;if((a=null===b.firstEffect)&&g===d)b.stateNode=f;else{var h=b.stateNode,k=Od(L.current),l=null;g!==d&&(l=La(h,c,g,d,e,k));a&&null===l?b.stateNode=f:(f=yb(f,
l,c,g,d,b,a,h),Ka(f,c,d,e,k)&&lf(b),b.stateNode=f,a?lf(b):mf(f,b,!1,!1))}};pf=function(a,b,c,d){c!==d?(a=Od(Nd.current),c=Od(L.current),b.stateNode=Na(d,a,c,b),lf(b)):b.stateNode=a.stateNode}}else nf=function(){},of=function(){},pf=function(){};
function rf(a,b){if(!Wd)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function sf(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return E(b.type)&&$b(),null;case 3:Qd();z(D);z(B);ee();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)be(b)?lf(b):d.hydrate||(b.flags|=256);nf(b);return null;case 5:Sd(b);var e=Od(Nd.current);c=b.type;if(null!==a&&null!=b.stateNode)of(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else{if(!d){if(null===
b.stateNode)throw Error(q(166));return null}a=Od(L.current);if(be(b)){if(!Va)throw Error(q(175));a=Lb(b.stateNode,b.type,b.memoizedProps,e,a,b);b.updateQueue=a;null!==a&&lf(b)}else{var f=Ia(c,d,e,a,b);mf(f,b,!1,!1);b.stateNode=f;Ka(f,c,d,e,a)&&lf(b)}null!==b.ref&&(b.flags|=128)}return null;case 6:if(a&&null!=b.stateNode)pf(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(q(166));a=Od(Nd.current);e=Od(L.current);if(be(b)){if(!Va)throw Error(q(176));Mb(b.stateNode,
b.memoizedProps,b)&&lf(b)}else b.stateNode=Na(d,a,e,b)}return null;case 13:z(M);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;e=!1;null===a?void 0!==b.memoizedProps.fallback&&be(b):e=null!==a.memoizedState;if(d&&!e&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))0===T&&(T=3);else{if(0===T||3===T)T=4;null===R||0===(pd&134217727)&&0===(tf&134217727)||uf(R,U)}Ua&&d&&(b.flags|=4);Ta&&(d||e)&&(b.flags|=4);return null;case 4:return Qd(),
nf(b),null===a&&ab(b.stateNode.containerInfo),null;case 10:return dd(b),null;case 17:return E(b.type)&&$b(),null;case 19:z(M);d=b.memoizedState;if(null===d)return null;e=0!==(b.flags&64);f=d.rendering;if(null===f)if(e)rf(d,!1);else{if(0!==T||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){f=Td(a);if(null!==f){b.flags|=64;rf(d,!1);a=f.updateQueue;null!==a&&(b.updateQueue=a,b.flags|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;a=c;for(d=b.child;null!==d;)e=d,c=a,e.flags&=
2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,f=e.alternate,null===f?(e.childLanes=0,e.lanes=c,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=f.childLanes,e.lanes=f.lanes,e.child=f.child,e.memoizedProps=f.memoizedProps,e.memoizedState=f.memoizedState,e.updateQueue=f.updateQueue,e.type=f.type,c=f.dependencies,e.dependencies=null===c?null:{lanes:c.lanes,firstContext:c.firstContext}),d=d.sibling;A(M,M.current&1|
2);return b.child}a=a.sibling}null!==d.tail&&G()>vf&&(b.flags|=64,e=!0,rf(d,!1),b.lanes=33554432)}else{if(!e)if(a=Td(f),null!==a){if(b.flags|=64,e=!0,a=a.updateQueue,null!==a&&(b.updateQueue=a,b.flags|=4),rf(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate&&!Wd)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*G()-d.renderingStartTime>vf&&1073741824!==c&&(b.flags|=64,e=!0,rf(d,!1),b.lanes=33554432);d.isBackwards?(f.sibling=b.child,b.child=f):(a=d.last,null!==a?a.sibling=
f:b.child=f,d.last=f)}return null!==d.tail?(a=d.tail,d.rendering=a,d.tail=a.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=G(),a.sibling=null,b=M.current,A(M,e?b&1|2:b&1),a):null;case 23:case 24:return wf(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(q(156,b.tag));}
function xf(a){switch(a.tag){case 1:E(a.type)&&$b();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:Qd();z(D);z(B);ee();b=a.flags;if(0!==(b&64))throw Error(q(285));a.flags=b&-4097|64;return a;case 5:return Sd(a),null;case 13:return z(M),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return z(M),null;case 4:return Qd(),null;case 10:return dd(a),null;case 23:case 24:return wf(),null;default:return null}}
function yf(a,b){try{var c="",d=b;do c+=Wc(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function zf(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Af="function"===typeof WeakMap?WeakMap:Map;function Bf(a,b,c){c=kd(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Cf||(Cf=!0,Df=d);zf(a,b)};return c}
function Ef(a,b,c){c=kd(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){zf(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ff?Ff=new Set([this]):Ff.add(this),zf(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}var Gf="function"===typeof WeakSet?WeakSet:Set;
function Hf(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){If(a,c)}else b.current=null}
function Jf(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:Xc(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:Ta&&b.flags&256&&xb(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(q(163));}
function Kf(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d()}c=c.next}while(c!==b)}}
function Lf(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d()}a=a.next}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Mf(c,a),Nf(c,a));a=d}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:Xc(c.type,b.memoizedProps),a.componentDidUpdate(d,
b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&qd(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=Da(c.child.stateNode);break;case 1:a=c.child.stateNode}qd(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mb(a,c.type,c.memoizedProps,c);return;case 6:return;case 4:return;case 12:return;case 13:Va&&null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&
Pb(c))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(q(163));}
function Of(a,b){if(Ta)for(var c=a;;){if(5===c.tag){var d=c.stateNode;b?tb(d):vb(c.stateNode,c.memoizedProps)}else if(6===c.tag)d=c.stateNode,b?ub(d):wb(d,c.memoizedProps);else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function Pf(a,b){if(fc&&"function"===typeof fc.onCommitFiberUnmount)try{fc.onCommitFiberUnmount(ec,b)}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Mf(b,c);else{d=b;try{e()}catch(f){If(d,f)}}c=c.next}while(c!==a)}break;case 1:Hf(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(f){If(b,
f)}break;case 5:Hf(b);break;case 4:Ta?Qf(a,b):Ua&&Ua&&(b=b.stateNode.containerInfo,a=zb(b),Cb(b,a))}}function Rf(a,b){for(var c=b;;)if(Pf(a,c),null===c.child||Ta&&4===c.tag){if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}else c.child.return=c,c=c.child}
function Sf(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null}function Tf(a){return 5===a.tag||3===a.tag||4===a.tag}
function Uf(a){if(Ta){a:{for(var b=a.return;null!==b;){if(Tf(b))break a;b=b.return}throw Error(q(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(q(161));}c.flags&16&&(sb(b),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Tf(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.flags&2)){c=c.stateNode;break a}}d?Vf(a,c,b):Wf(a,c,b)}}function Vf(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?pb(c,a,b):kb(c,a);else if(4!==d&&(a=a.child,null!==a))for(Vf(a,b,c),a=a.sibling;null!==a;)Vf(a,b,c),a=a.sibling}
function Wf(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?ob(c,a,b):jb(c,a);else if(4!==d&&(a=a.child,null!==a))for(Wf(a,b,c),a=a.sibling;null!==a;)Wf(a,b,c),a=a.sibling}
function Qf(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(q(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag)Rf(a,c),f?rb(e,c.stateNode):qb(e,c.stateNode);else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(Pf(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;
for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function Xf(a,b){if(Ta){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Kf(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&nb(c,f,e,a,d,b)}return;case 6:if(null===b.stateNode)throw Error(q(162));c=b.memoizedProps;lb(b.stateNode,null!==a?a.memoizedProps:c,c);return;case 3:Va&&(b=b.stateNode,b.hydrate&&(b.hydrate=!1,Ob(b.containerInfo)));return;case 12:return;case 13:Yf(b);
Zf(b);return;case 19:Zf(b);return;case 17:return;case 23:case 24:Of(b,null!==b.memoizedState);return}throw Error(q(163));}switch(b.tag){case 0:case 11:case 14:case 15:case 22:Kf(3,b);return;case 12:return;case 13:Yf(b);Zf(b);return;case 19:Zf(b);return;case 3:Va&&(c=b.stateNode,c.hydrate&&(c.hydrate=!1,Ob(c.containerInfo)));break;case 23:case 24:return}a:if(Ua){switch(b.tag){case 1:case 5:case 6:case 20:break a;case 3:case 4:b=b.stateNode;Cb(b.containerInfo,b.pendingChildren);break a}throw Error(q(163));
}}function Yf(a){null!==a.memoizedState&&($f=G(),Ta&&Of(a.child,!0))}function Zf(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Gf);b.forEach(function(b){var d=ag.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}function bg(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var cg=0,dg=1,eg=2,fg=3,gg=4;
if("function"===typeof Symbol&&Symbol.for){var hg=Symbol.for;cg=hg("selector.component");dg=hg("selector.has_pseudo_class");eg=hg("selector.role");fg=hg("selector.test_id");gg=hg("selector.text")}function ig(a){var b=Wa(a);if(null!=b){if("string"!==typeof b.memoizedProps["data-testname"])throw Error(q(364));return b}a=cb(a);if(null===a)throw Error(q(362));return a.stateNode.current}
function jg(a,b){switch(b.$$typeof){case cg:if(a.type===b.value)return!0;break;case dg:a:{b=b.value;a=[a,0];for(var c=0;c<a.length;){var d=a[c++],e=a[c++],f=b[e];if(5!==d.tag||!fb(d)){for(;null!=f&&jg(d,f);)e++,f=b[e];if(e===b.length){b=!0;break a}else for(d=d.child;null!==d;)a.push(d,e),d=d.sibling}}b=!1}return b;case eg:if(5===a.tag&&gb(a.stateNode,b.value))return!0;break;case gg:if(5===a.tag||6===a.tag)if(a=eb(a),null!==a&&0<=a.indexOf(b.value))return!0;break;case fg:if(5===a.tag&&(a=a.memoizedProps["data-testname"],
"string"===typeof a&&a.toLowerCase()===b.value.toLowerCase()))return!0;break;default:throw Error(q(365,b));}return!1}function kg(a){switch(a.$$typeof){case cg:return"<"+(wa(a.value)||"Unknown")+">";case dg:return":has("+(kg(a)||"")+")";case eg:return'[role="'+a.value+'"]';case gg:return'"'+a.value+'"';case fg:return'[data-testname="'+a.value+'"]';default:throw Error(q(365,a));}}
function lg(a,b){var c=[];a=[a,0];for(var d=0;d<a.length;){var e=a[d++],f=a[d++],g=b[f];if(5!==e.tag||!fb(e)){for(;null!=g&&jg(e,g);)f++,g=b[f];if(f===b.length)c.push(e);else for(e=e.child;null!==e;)a.push(e,f),e=e.sibling}}return c}function mg(a,b){if(!bb)throw Error(q(363));a=ig(a);a=lg(a,b);b=[];a=Array.from(a);for(var c=0;c<a.length;){var d=a[c++];if(5===d.tag)fb(d)||b.push(d.stateNode);else for(d=d.child;null!==d;)a.push(d),d=d.sibling}return b}var ng=null;
function og(a){if(null===ng)try{var b=("require"+Math.random()).slice(0,7);ng=(module&&module[b]).call(module,"timers").setImmediate}catch(c){ng=function(a){var b=new MessageChannel;b.port1.onmessage=a;b.port2.postMessage(void 0)}}return ng(a)}var pg=Math.ceil,qg=ca.ReactCurrentDispatcher,rg=ca.ReactCurrentOwner,sg=ca.IsSomeRendererActing,V=0,R=null,W=null,U=0,tg=0,ug=Wb(0),T=0,vg=null,wg=0,pd=0,tf=0,xg=0,yg=null,$f=0,vf=Infinity;function zg(){vf=G()+500}
var X=null,Cf=!1,Df=null,Ff=null,Ag=!1,Bg=null,Cg=90,Dg=[],Eg=[],Fg=null,Gg=0,Hg=null,Ig=-1,Jg=0,Kg=0,Lg=null,Mg=!1;function K(){return 0!==(V&48)?G():-1!==Ig?Ig:Ig=G()}function td(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===Nc()?1:2;0===Jg&&(Jg=wg);if(0!==Sc.transition){0!==Kg&&(Kg=null!==yg?yg.pendingLanes:0);a=Jg;var b=4186112&~Kg;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=Nc();0!==(V&4)&&98===a?a=oc(12,Jg):(a=jc(a),a=oc(a,Jg));return a}
function ud(a,b,c){if(50<Gg)throw Gg=0,Hg=null,Error(q(185));a=Ng(a,b);if(null===a)return null;rc(a,b,c);a===R&&(tf|=b,4===T&&uf(a,U));var d=Nc();1===b?0!==(V&8)&&0===(V&48)?Og(a):(Z(a,c),0===V&&(zg(),H())):(0===(V&4)||98!==d&&99!==d||(null===Fg?Fg=new Set([a]):Fg.add(a)),Z(a,c));yg=a}function Ng(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Z(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-mc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;ic(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1}}else l<=b&&(a.expiredLanes|=k);g&=~k}d=lc(a,a===R?U:0);b=F;if(0===d)null!==c&&(c!==Hc&&xc(c),a.callbackNode=null,a.callbackPriority=0);else{if(null!==c){if(a.callbackPriority===b)return;c!==Hc&&xc(c)}15===b?(c=Og.bind(null,a),null===Jc?(Jc=[c],Kc=wc(Cc,Rc)):Jc.push(c),
c=Hc):14===b?c=Qc(99,Og.bind(null,a)):(c=kc(b),c=Qc(c,Pg.bind(null,a)));a.callbackPriority=b;a.callbackNode=c}}
function Pg(a){Ig=-1;Kg=Jg=0;if(0!==(V&48))throw Error(q(327));var b=a.callbackNode;if(Qg()&&a.callbackNode!==b)return null;var c=lc(a,a===R?U:0);if(0===c)return null;var d=c;var e=V;V|=16;var f=Rg();if(R!==a||U!==d)zg(),Sg(a,d);do try{Tg();break}catch(h){Ug(a,h)}while(1);bd();qg.current=f;V=e;null!==W?d=0:(R=null,U=0,d=T);if(0!==(wg&tf))Sg(a,0);else if(0!==d){2===d&&(V|=64,a.hydrate&&(a.hydrate=!1,xb(a.containerInfo)),c=nc(a),0!==c&&(d=Vg(a,c)));if(1===d)throw b=vg,Sg(a,0),uf(a,c),Z(a,G()),b;a.finishedWork=
a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(q(345));case 2:Zg(a);break;case 3:uf(a,c);if((c&62914560)===c&&(d=$f+500-G(),10<d)){if(0!==lc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){K();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Pa(Zg.bind(null,a),d);break}Zg(a);break;case 4:uf(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-mc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f}c=e;c=G()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
c?4320:1960*pg(c/1960))-c;if(10<c){a.timeoutHandle=Pa(Zg.bind(null,a),c);break}Zg(a);break;case 5:Zg(a);break;default:throw Error(q(329));}}Z(a,G());return a.callbackNode===b?Pg.bind(null,a):null}function uf(a,b){b&=~xg;b&=~tf;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-mc(b),d=1<<c;a[c]=-1;b&=~d}}
function Og(a){if(0!==(V&48))throw Error(q(327));Qg();if(a===R&&0!==(a.expiredLanes&U)){var b=U;var c=Vg(a,b);0!==(wg&tf)&&(b=lc(a,b),c=Vg(a,b))}else b=lc(a,0),c=Vg(a,b);0!==a.tag&&2===c&&(V|=64,a.hydrate&&(a.hydrate=!1,xb(a.containerInfo)),b=nc(a),0!==b&&(c=Vg(a,b)));if(1===c)throw c=vg,Sg(a,0),uf(a,b),Z(a,G()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Zg(a);Z(a,G());return null}
function $g(){if(null!==Fg){var a=Fg;Fg=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Z(a,G())})}H()}function ah(a,b){var c=V;V|=1;try{return a(b)}finally{V=c,0===V&&(zg(),H())}}function bh(a,b){var c=V;if(0!==(c&48))return a(b);V|=1;try{if(a)return Pc(99,a.bind(null,b))}finally{V=c,H()}}function Xe(a,b){A(ug,tg);tg|=b;wg|=b}function wf(){tg=ug.current;z(ug)}
function Sg(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;c!==Ra&&(a.timeoutHandle=Ra,Qa(c));if(null!==W)for(c=W.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$b();break;case 3:Qd();z(D);z(B);ee();break;case 5:Sd(d);break;case 4:Qd();break;case 13:z(M);break;case 19:z(M);break;case 10:dd(d);break;case 23:case 24:wf()}c=c.return}R=a;W=Ed(a.current,null);U=tg=wg=b;T=0;vg=null;xg=tf=pd=0}
function Ug(a,b){do{var c=W;try{bd();fe.current=pe;if(ie){for(var d=N.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}ie=!1}he=0;P=O=N=null;je=!1;rg.current=null;if(null===c||null===c.return){T=1;vg=b;W=null;break}a:{var f=a,g=c.return,h=c,k=b;b=U;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
(h.updateQueue=null,h.memoizedState=null)}var t=0!==(M.current&1),p=g;do{var y;if(y=13===p.tag){var x=p.memoizedState;if(null!==x)y=null!==x.dehydrated?!0:!1;else{var Y=p.memoizedProps;y=void 0===Y.fallback?!1:!0!==Y.unstable_avoidThisFallback?!0:t?!1:!0}}if(y){var u=p.updateQueue;if(null===u){var v=new Set;v.add(l);p.updateQueue=v}else u.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else{var C=kd(-1,1);C.tag=2;md(h,C)}h.lanes|=1;break a}k=
void 0;h=b;var Oa=f.pingCache;null===Oa?(Oa=f.pingCache=new Af,k=new Set,Oa.set(l,k)):(k=Oa.get(l),void 0===k&&(k=new Set,Oa.set(l,k)));if(!k.has(h)){k.add(h);var Qe=ch.bind(null,f,l,h);l.then(Qe,Qe)}p.flags|=4096;p.lanes=b;break a}p=p.return}while(null!==p);k=Error((wa(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==T&&(T=2);k=
yf(k,h);p=g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var Wg=Bf(p,f,b);nd(p,Wg);break a;case 1:f=k;var Xg=p.type,ld=p.stateNode;if(0===(p.flags&64)&&("function"===typeof Xg.getDerivedStateFromError||null!==ld&&"function"===typeof ld.componentDidCatch&&(null===Ff||!Ff.has(ld)))){p.flags|=4096;b&=-b;p.lanes|=b;var Yg=Ef(p,f,b);nd(p,Yg);break a}}p=p.return}while(null!==p)}dh(c)}catch(w){b=w;W===c&&null!==c&&(W=c=c.return);continue}break}while(1)}
function Rg(){var a=qg.current;qg.current=pe;return null===a?pe:a}function Vg(a,b){var c=V;V|=16;var d=Rg();R===a&&U===b||Sg(a,b);do try{eh();break}catch(e){Ug(a,e)}while(1);bd();V=c;qg.current=d;if(null!==W)throw Error(q(261));R=null;U=0;return T}function eh(){for(;null!==W;)fh(W)}function Tg(){for(;null!==W&&!yc();)fh(W)}function fh(a){var b=gh(a.alternate,a,tg);a.memoizedProps=a.pendingProps;null===b?dh(a):W=b;rg.current=null}
function dh(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=sf(c,b,tg);if(null!==c){W=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(tg&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b))}else{c=xf(b);if(null!==c){c.flags&=2047;W=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048)}b=b.sibling;if(null!==b){W=b;return}W=b=a}while(null!==b);0===T&&(T=5)}function Zg(a){var b=Nc();Pc(99,hh.bind(null,a,b));return null}
function hh(a,b){do Qg();while(null!==Bg);if(0!==(V&48))throw Error(q(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(q(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-mc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l}null!==
Fg&&0===(d&24)&&Fg.has(a)&&Fg.delete(a);a===R&&(W=R=null,U=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=V;V|=32;rg.current=null;Lg=Ga(a.containerInfo);Mg=!1;X=d;do try{ih()}catch(v){if(null===X)throw Error(q(330));If(X,v);X=X.nextEffect}while(null!==X);Lg=null;X=d;do try{for(g=a;null!==X;){var n=X.flags;n&16&&Ta&&sb(X.stateNode);if(n&128){var t=X.alternate;if(null!==t){var p=t.ref;null!==p&&("function"===typeof p?p(null):p.current=
null)}}switch(n&1038){case 2:Uf(X);X.flags&=-3;break;case 6:Uf(X);X.flags&=-3;Xf(X.alternate,X);break;case 1024:X.flags&=-1025;break;case 1028:X.flags&=-1025;Xf(X.alternate,X);break;case 4:Xf(X.alternate,X);break;case 8:h=g;f=X;Ta?Qf(h,f):Rf(h,f);var y=f.alternate;Sf(f);null!==y&&Sf(y)}X=X.nextEffect}}catch(v){if(null===X)throw Error(q(330));If(X,v);X=X.nextEffect}while(null!==X);Mg&&$a();Ha(a.containerInfo);a.current=c;X=d;do try{for(n=a;null!==X;){var x=X.flags;x&36&&Lf(n,X.alternate,X);if(x&128){t=
void 0;var Y=X.ref;if(null!==Y){var u=X.stateNode;switch(X.tag){case 5:t=Da(u);break;default:t=u}"function"===typeof Y?Y(t):Y.current=t}}X=X.nextEffect}}catch(v){if(null===X)throw Error(q(330));If(X,v);X=X.nextEffect}while(null!==X);X=null;Ic();V=e}else a.current=c;if(Ag)Ag=!1,Bg=a,Cg=b;else for(X=d;null!==X;)b=X.nextEffect,X.nextEffect=null,X.flags&8&&(x=X,x.sibling=null,x.stateNode=null),X=b;d=a.pendingLanes;0===d&&(Ff=null);1===d?a===Hg?Gg++:(Gg=0,Hg=a):Gg=0;c=c.stateNode;if(fc&&"function"===typeof fc.onCommitFiberRoot)try{fc.onCommitFiberRoot(ec,
c,void 0,64===(c.current.flags&64))}catch(v){}Z(a,G());if(Cf)throw Cf=!1,a=Df,Df=null,a;if(0!==(V&8))return null;H();return null}function ih(){for(;null!==X;){var a=X.alternate;Mg||null===Lg||(0!==(X.flags&8)?Ca(X,Lg)&&(Mg=!0,Za()):13===X.tag&&bg(a,X)&&Ca(X,Lg)&&(Mg=!0,Za()));var b=X.flags;0!==(b&256)&&Jf(a,X);0===(b&512)||Ag||(Ag=!0,Qc(97,function(){Qg();return null}));X=X.nextEffect}}function Qg(){if(90!==Cg){var a=97<Cg?97:Cg;Cg=90;return Pc(a,jh)}return!1}
function Nf(a,b){Dg.push(b,a);Ag||(Ag=!0,Qc(97,function(){Qg();return null}))}function Mf(a,b){Eg.push(b,a);Ag||(Ag=!0,Qc(97,function(){Qg();return null}))}
function jh(){if(null===Bg)return!1;var a=Bg;Bg=null;if(0!==(V&48))throw Error(q(331));var b=V;V|=32;var c=Eg;Eg=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g()}catch(k){if(null===f)throw Error(q(330));If(f,k)}}c=Dg;Dg=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h()}catch(k){if(null===f)throw Error(q(330));If(f,k)}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
null,h.stateNode=null),h=a;V=b;H();return!0}function kh(a,b,c){b=yf(c,b);b=Bf(a,b,1);md(a,b);b=K();a=Ng(a,1);null!==a&&(rc(a,1,b),Z(a,b))}
function If(a,b){if(3===a.tag)kh(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){kh(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ff||!Ff.has(d))){a=yf(b,a);var e=Ef(c,a,1);md(c,e);e=K();c=Ng(c,1);if(null!==c)rc(c,1,e),Z(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ff||!Ff.has(d)))try{d.componentDidCatch(b,a)}catch(f){}break}}c=c.return}}
function ch(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=K();a.pingedLanes|=a.suspendedLanes&c;R===a&&(U&c)===c&&(4===T||3===T&&(U&62914560)===U&&500>G()-$f?Sg(a,0):xg|=c);Z(a,b)}function ag(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===Nc()?1:2:(0===Jg&&(Jg=wg),b=pc(62914560&~Jg),0===b&&(b=4194304)));c=K();a=Ng(a,b);null!==a&&(rc(a,b,c),Z(a,c))}var gh;
gh=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||D.current)gd=!0;else if(0!==(c&d))gd=0!==(a.flags&16384)?!0:!1;else{gd=!1;switch(b.tag){case 3:af(b);ce();break;case 5:Rd(b);break;case 1:E(b.type)&&cc(b);break;case 4:Pd(b,b.stateNode.containerInfo);break;case 10:cd(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return cf(a,b,c);A(M,M.current&1);b=Re(a,b,c);return null!==b?b.sibling:null}A(M,M.current&1);break;case 19:d=
0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return kf(a,b,c);b.flags|=64}var e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);A(M,M.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,We(a,b,c)}return Re(a,b,c)}else gd=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Zb(b,B.current);fd(b,c);e=le(null,b,d,a,e,c);b.flags|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&
void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(E(d)){var f=!0;cc(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;id(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&sd(b,d,g,a);e.updater=vd;b.stateNode=e;e._reactInternals=b;zd(b,d,a,c);b=$e(null,b,d,!0,f,c)}else b.tag=0,S(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;
f=b.tag=lh(e);a=Xc(e,a);switch(f){case 0:b=Ve(null,b,e,a,c);break a;case 1:b=Ze(null,b,e,a,c);break a;case 11:b=Pe(null,b,e,a,c);break a;case 14:b=Se(null,b,e,Xc(e.type,a),d,c);break a}throw Error(q(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Xc(d,e),Ve(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Xc(d,e),Ze(a,b,d,e,c);case 3:af(b);d=b.updateQueue;if(null===a||null===d)throw Error(q(282));d=b.pendingProps;e=b.memoizedState;e=null!==
e?e.element:null;jd(a,b);od(b,d,null,c);d=b.memoizedState.element;if(d===e)ce(),b=Re(a,b,c);else{e=b.stateNode;if(f=e.hydrate)Va?(Vd=Kb(b.stateNode.containerInfo),Ud=b,f=Wd=!0):f=!1;if(f){if(Va&&(a=e.mutableSourceEagerHydrationData,null!=a))for(e=0;e<a.length;e+=2)f=a[e],g=a[e+1],Sa?f._workInProgressVersionPrimary=g:f._workInProgressVersionSecondary=g,de.push(f);c=Kd(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling}else S(a,b,d,c),ce();b=b.child}return b;case 5:return Rd(b),null===
a&&$d(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ma(d,e)?g=null:null!==f&&Ma(d,f)&&(b.flags|=16),Ye(a,b),S(a,b,g,c),b.child;case 6:return null===a&&$d(b),null;case 13:return cf(a,b,c);case 4:return Pd(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Jd(b,null,d,c):S(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Xc(d,e),Pe(a,b,d,e,c);case 7:return S(a,b,b.pendingProps,c),b.child;case 8:return S(a,b,b.pendingProps.children,
c),b.child;case 12:return S(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;cd(b,f);if(null!==g){var h=g.value;f=I(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!D.current){b=Re(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==
(l.observedBits&f)){1===h.tag&&(l=kd(-1,c&-c),l.tag=2,md(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);ed(h.return,c);k.lanes|=c;break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}}S(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,fd(b,c),e=J(e,f.unstable_observedBits),d=d(e),b.flags|=1,S(a,b,
d,c),b.child;case 14:return e=b.type,f=Xc(e,b.pendingProps),f=Xc(e.type,f),Se(a,b,e,f,d,c);case 15:return Ue(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Xc(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,E(d)?(a=!0,cc(b)):a=!1,fd(b,c),xd(b,d,e),zd(b,d,e,c),$e(null,b,d,!0,a,c);case 19:return kf(a,b,c);case 23:return We(a,b,c);case 24:return We(a,b,c)}throw Error(q(156,b.tag));};
var mh={current:!1},nh=m.unstable_flushAllWithoutAsserting,oh="function"===typeof nh;function ph(){if(void 0!==nh)return nh();for(var a=!1;Qg();)a=!0;return a}function qh(a){try{ph(),og(function(){ph()?qh(a):a()})}catch(b){a(b)}}var rh=0,sh=!1;
function th(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null}function Yd(a,b,c,d){return new th(a,b,c,d)}function Te(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function lh(a){if("function"===typeof a)return Te(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===la)return 11;if(a===oa)return 14}return 2}
function Ed(a,b){var c=a.alternate;null===c?(c=Yd(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Gd(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Te(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case fa:return Id(c.children,e,f,b);case ra:g=8;e|=16;break;case ha:g=8;e|=1;break;case ia:return a=Yd(12,c,b,e|8),a.elementType=ia,a.type=ia,a.lanes=f,a;case ma:return a=Yd(13,c,b,e),a.type=ma,a.elementType=ma,a.lanes=f,a;case na:return a=Yd(19,c,b,e),a.elementType=na,a.lanes=f,a;case sa:return ef(c,e,f,b);case ta:return a=Yd(24,c,b,e),a.elementType=ta,a.lanes=f,a;default:if("object"===
typeof a&&null!==a)switch(a.$$typeof){case ja:g=10;break a;case ka:g=9;break a;case la:g=11;break a;case oa:g=14;break a;case pa:g=16;d=null;break a;case qa:g=22;break a}throw Error(q(130,null==a?a:typeof a,""));}b=Yd(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Id(a,b,c,d){a=Yd(7,a,d,b);a.lanes=c;return a}function ef(a,b,c,d){a=Yd(23,a,d,b);a.elementType=sa;a.lanes=c;return a}function Fd(a,b,c){a=Yd(6,a,null,b);a.lanes=c;return a}
function Hd(a,b,c){b=Yd(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function uh(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=Ra;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=qc(0);this.expirationTimes=qc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=qc(0);Va&&(this.mutableSourceEagerHydrationData=null)}
function vh(a){var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(q(188));throw Error(q(268,Object.keys(a)));}a=Aa(b);return null===a?null:a.stateNode}function wh(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function xh(a,b){wh(a,b);(a=a.alternate)&&wh(a,b)}function yh(a){a=Aa(a);return null===a?null:a.stateNode}function zh(){return null}exports.IsThisRendererActing=mh;
exports.act=function(a){function b(){rh--;sg.current=c;mh.current=d}!1===sh&&(sh=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected."));rh++;var c=sg.current,d=mh.current;sg.current=!0;mh.current=!0;try{var e=ah(a)}catch(f){throw b(),f;}if(null!==e&&"object"===typeof e&&"function"===typeof e.then)return{then:function(a,d){e.then(function(){1<rh||!0===oh&&!0===c?(b(),a()):qh(function(c){b();c?d(c):a()})},function(a){b();d(a)})}};try{1!==rh||
!1!==oh&&!1!==c||ph(),b()}catch(f){throw b(),f;}return{then:function(a){a()}}};exports.attemptContinuousHydration=function(a){if(13===a.tag){var b=K();ud(a,67108864,b);xh(a,67108864)}};exports.attemptHydrationAtCurrentPriority=function(a){if(13===a.tag){var b=K(),c=td(a);ud(a,c,b);xh(a,c)}};
exports.attemptSynchronousHydration=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.hydrate){var c=ic(b.pendingLanes);b.expiredLanes|=c&b.pendingLanes;Z(b,G());0===(V&48)&&(zg(),H())}break;case 13:var d=K();bh(function(){return ud(a,1,d)});xh(a,4)}};exports.attemptUserBlockingHydration=function(a){if(13===a.tag){var b=K();ud(a,4,b);xh(a,4)}};exports.batchedEventUpdates=function(a,b){var c=V;V|=2;try{return a(b)}finally{V=c,0===V&&(zg(),H())}};exports.batchedUpdates=ah;
exports.createComponentSelector=function(a){return{$$typeof:cg,value:a}};exports.createContainer=function(a,b,c){a=new uh(a,b,c);b=Yd(3,null,null,2===b?7:1===b?3:0);a.current=b;b.stateNode=a;id(b);return a};exports.createHasPsuedoClassSelector=function(a){return{$$typeof:dg,value:a}};exports.createPortal=function(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ea,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}};
exports.createRoleSelector=function(a){return{$$typeof:eg,value:a}};exports.createTestNameSelector=function(a){return{$$typeof:fg,value:a}};exports.createTextSelector=function(a){return{$$typeof:gg,value:a}};exports.deferredUpdates=function(a){return Pc(97,a)};exports.discreteUpdates=function(a,b,c,d,e){var f=V;V|=4;try{return Pc(98,a.bind(null,b,c,d,e))}finally{V=f,0===V&&(zg(),H())}};exports.findAllNodes=mg;
exports.findBoundingRects=function(a,b){if(!bb)throw Error(q(363));b=mg(a,b);a=[];for(var c=0;c<b.length;c++)a.push(db(b[c]));for(b=a.length-1;0<b;b--){c=a[b];for(var d=c.x,e=d+c.width,f=c.y,g=f+c.height,h=b-1;0<=h;h--)if(b!==h){var k=a[h],l=k.x,n=l+k.width,t=k.y,p=t+k.height;if(d>=l&&f>=t&&e<=n&&g<=p){a.splice(b,1);break}else if(!(d!==l||c.width!==k.width||p<f||t>g)){t>f&&(k.height+=t-f,k.y=f);p<g&&(k.height=g-t);a.splice(b,1);break}else if(!(f!==t||c.height!==k.height||n<d||l>e)){l>d&&(k.width+=
l-d,k.x=d);n<e&&(k.width=e-l);a.splice(b,1);break}}}return a};exports.findHostInstance=vh;exports.findHostInstanceWithNoPortals=function(a){a=Ba(a);return null===a?null:20===a.tag?a.stateNode.instance:a.stateNode};exports.findHostInstanceWithWarning=function(a){return vh(a)};exports.flushControlled=function(a){var b=V;V|=1;try{Pc(99,a)}finally{V=b,0===V&&(zg(),H())}};exports.flushDiscreteUpdates=function(){0===(V&49)&&($g(),Qg())};exports.flushPassiveEffects=Qg;exports.flushSync=bh;
exports.focusWithin=function(a,b){if(!bb)throw Error(q(363));a=ig(a);b=lg(a,b);b=Array.from(b);for(a=0;a<b.length;){var c=b[a++];if(!fb(c)){if(5===c.tag&&hb(c.stateNode))return!0;for(c=c.child;null!==c;)b.push(c),c=c.sibling}}return!1};exports.getCurrentUpdateLanePriority=function(){return hc};
exports.getFindAllNodesFailureDescription=function(a,b){if(!bb)throw Error(q(363));var c=0,d=[];a=[ig(a),0];for(var e=0;e<a.length;){var f=a[e++],g=a[e++],h=b[g];if(5!==f.tag||!fb(f))if(jg(f,h)&&(d.push(kg(h)),g++,g>c&&(c=g)),g<b.length)for(f=f.child;null!==f;)a.push(f,g),f=f.sibling}if(c<b.length){for(a=[];c<b.length;c++)a.push(kg(b[c]));return"findAllNodes was able to match part of the selector:\n  "+(d.join(" > ")+"\n\nNo matching component was found for:\n  ")+a.join(" > ")}return null};
exports.getPublicRootInstance=function(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return Da(a.child.stateNode);default:return a.child.stateNode}};
exports.injectIntoDevTools=function(a){a={bundleType:a.bundleType,version:a.version,rendererPackageName:a.rendererPackageName,rendererConfig:a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ca.ReactCurrentDispatcher,findHostInstanceByFiber:yh,findFiberByHostInstance:a.findFiberByHostInstance||zh,findHostInstancesForRefresh:null,
scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)a=!1;else{var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!b.isDisabled&&b.supportsFiber)try{ec=b.inject(a),fc=b}catch(c){}a=!0}return a};exports.observeVisibleRects=function(a,b,c,d){if(!bb)throw Error(q(363));a=mg(a,b);var e=ib(a,c,d).disconnect;return{disconnect:function(){e()}}};
exports.registerMutableSourceForHydration=function(a,b){var c=b._getVersion;c=c(b._source);null==a.mutableSourceEagerHydrationData?a.mutableSourceEagerHydrationData=[b,c]:a.mutableSourceEagerHydrationData.push(b,c)};exports.runWithPriority=function(a,b){var c=hc;try{return hc=a,b()}finally{hc=c}};exports.shouldSuspend=function(){return!1};exports.unbatchedUpdates=function(a,b){var c=V;V&=-2;V|=8;try{return a(b)}finally{V=c,0===V&&(zg(),H())}};
exports.updateContainer=function(a,b,c,d){var e=b.current,f=K(),g=td(e);a:if(c){c=c._reactInternals;b:{if(xa(c)!==c||1!==c.tag)throw Error(q(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(E(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(q(171));}if(1===c.tag){var k=c.type;if(E(k)){c=bc(c,k,h);break a}}c=h}else c=Xb;null===b.context?b.context=c:b.pendingContext=c;b=kd(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);md(e,b);ud(e,g,f);return g};

    return exports;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/* istanbul ignore next */
module.exports=function(module){if(!module.webpackPolyfill){module.deprecate=function(){};module.paths=[];// module.parent = undefined by default
if(!module.children)module.children=[];Object.defineProperty(module,"loaded",{enumerable:true,get:function get(){return module.l;}});Object.defineProperty(module,"id",{enumerable:true,get:function get(){return module.i;}});module.webpackPolyfill=1;}return module;};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}var l=__webpack_require__(10),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++){b+="&args[]="+encodeURIComponent(arguments[c]);}return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";}var D={isMounted:function isMounted(){return!1;},enqueueForceUpdate:function enqueueForceUpdate(){},enqueueReplaceState:function enqueueReplaceState(){},enqueueSetState:function enqueueSetState(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D;}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==_typeof(a)&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState");};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D;}var I=H.prototype=new G();I.constructor=H;l(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b){K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);}var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++){h[m]=arguments[m+2];}d.children=h;}if(a&&a.defaultProps)for(e in f=a.defaultProps,f){void 0===d[e]&&(d[e]=f[e]);}return{$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current};}function N(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner};}function O(a){return"object"===_typeof(a)&&null!==a&&a.$$typeof===p;}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a];});}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d;}return{result:a,keyPrefix:b,func:c,context:e,count:0};}function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a);}function T(a,b,c,e){var d=_typeof(a);if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case"string":case"number":g=!0;break;case"object":switch(a.$$typeof){case p:case q:g=!0;}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e);}else if(null===a||"object"!==_typeof(a)?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=0;!(d=a.next()).done;){d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);}else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g;}function V(a,b,c){return null==a?0:T(a,"",b,c);}function U(a,b){return"object"===_typeof(a)&&null!==a&&null!=a.key?escape(a.key):b.toString(36);}function W(a,b){a.func.call(a.context,b,a.count++);}function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a;}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a));}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b);}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a;}var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:l};exports.Children={map:function map(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e;},forEach:function forEach(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b);},count:function count(a){return V(a,function(){return null;},null);},toArray:function toArray(a){var b=[];X(a,b,null,function(a){return a;});return b;},only:function only(a){if(!O(a))throw Error(C(143));return a;}};exports.Component=F;exports.Fragment=r;exports.Profiler=u;exports.PureComponent=H;exports.StrictMode=t;exports.Suspense=y;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=l({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b){K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h]);}}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++){f[m]=arguments[m+2];}e.children=f;}return{$$typeof:p,type:a.type,key:d,ref:g,props:e,_owner:k};};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a;};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b;};exports.createRef=function(){return{current:null};};exports.forwardRef=function(a){return{$$typeof:x,render:a};};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:A,_ctor:a,_status:-1,_result:null};};exports.memo=function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b};};exports.useCallback=function(a,b){return Z().useCallback(a,b);};exports.useContext=function(a,b){return Z().useContext(a,b);};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return Z().useEffect(a,b);};exports.useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c);};exports.useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b);};exports.useMemo=function(a,b){return Z().useMemo(a,b);};exports.useReducer=function(a,b,c){return Z().useReducer(a,b,c);};exports.useRef=function(a){return Z().useRef(a);};exports.useState=function(a){return Z().useState(a);};exports.version="16.14.0";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */
if(true){module.exports=__webpack_require__(21);}else{}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}var _f,g,h,k;if("object"===(typeof performance==="undefined"?"undefined":_typeof(performance))&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now();};}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q;};}if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function w(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null;}catch(b){throw setTimeout(w,0),b;}};_f=function f(a){null!==t?setTimeout(_f,0,a):(t=a,setTimeout(w,0));};g=function g(a,b){u=setTimeout(a,b);};h=function h(){clearTimeout(u);};exports.unstable_shouldYield=function(){return!1;};k=exports.unstable_forceFrameRate=function(){};}else{var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=E;};k=function k(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5;};var F=new MessageChannel(),G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null);}catch(b){throw G.postMessage(null),b;}}else A=!1;};_f=function _f(a){B=a;A||(A=!0,G.postMessage(null));};g=function g(a,b){C=x(function(){a(exports.unstable_now());},b);};h=function h(){y(C);C=-1;};}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a;}}function J(a){a=a[0];return void 0===a?null:a;}function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a;}}return b;}return null;}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id;}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M);}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,_f(V);else{var b=J(M);null!==b&&g(U,b.startTime-a);}}function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b);}else K(L);O=J(L);}if(null!==O)var m=!0;else{var n=J(M);null!==n&&g(U,n.startTime-b);m=!1;}return m;}finally{O=null,P=c,Q=!1;}}var W=k;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){R||Q||(R=!0,_f(V));};exports.unstable_getCurrentPriorityLevel=function(){return P;};exports.unstable_getFirstCallbackNode=function(){return J(L);};exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P;}var c=P;P=b;try{return a();}finally{P=c;}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=P;P=a;try{return b();}finally{P=c;}};exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===_typeof(c)&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,_f(V)));return a;};exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments);}finally{P=c;}};};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}var _f,g,h,k,l;if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function t(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null;}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u;};_f=function f(a){null!==p?setTimeout(_f,0,a):(p=a,setTimeout(t,0));};g=function g(a,b){q=setTimeout(a,b);};h=function h(){clearTimeout(q);};k=function k(){return!1;};l=exports.unstable_forceFrameRate=function(){};}else{var w=window.performance,x=window.Date,y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");}if("object"===_typeof(w)&&"function"===typeof w.now)exports.unstable_now=function(){return w.now();};else{var B=x.now();exports.unstable_now=function(){return x.now()-B;};}var C=!1,D=null,E=-1,F=5,G=0;k=function k(){return exports.unstable_now()>=G;};l=function l(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5;};var H=new MessageChannel(),I=H.port2;H.port1.onmessage=function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null);}catch(b){throw I.postMessage(null),b;}}else C=!1;};_f=function _f(a){D=a;C||(C=!0,I.postMessage(null));};g=function g(a,b){E=y(function(){a(exports.unstable_now());},b);};h=function h(){z(E);E=-1;};}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a;}}function L(a){a=a[0];return void 0===a?null:a;}function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a;}}return b;}return null;}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id;}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O);}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,_f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a);}}function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b);}else M(N);Q=L(N);}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1;}return m;}finally{Q=null,R=c,S=!1;}}function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3;}}var Z=l;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){T||S||(T=!0,_f(X));};exports.unstable_getCurrentPriorityLevel=function(){return R;};exports.unstable_getFirstCallbackNode=function(){return L(N);};exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R;}var c=R;R=b;try{return a();}finally{R=c;}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=Z;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=R;R=a;try{return b();}finally{R=c;}};exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===_typeof(c)&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a);}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,_f(X)));return a;};exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k();};exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments);}finally{R=c;}};};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(a){if("object"===_typeof(a)&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u;}}case d:return u;}}}function A(a){return z(a)===m;}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l;};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k;};exports.isContextProvider=function(a){return z(a)===h;};exports.isElement=function(a){return"object"===_typeof(a)&&null!==a&&a.$$typeof===c;};exports.isForwardRef=function(a){return z(a)===n;};exports.isFragment=function(a){return z(a)===e;};exports.isLazy=function(a){return z(a)===t;};exports.isMemo=function(a){return z(a)===r;};exports.isPortal=function(a){return z(a)===d;};exports.isProfiler=function(a){return z(a)===g;};exports.isStrictMode=function(a){return z(a)===f;};exports.isSuspense=function(a){return z(a)===p;};exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===_typeof(a)&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v);};exports.typeOf=z;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */
var __read=this&&this.__read||function(o,n){var m=typeof Symbol==="function"&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((n===void 0||n-->0)&&!(r=i.next()).done){ar.push(r.value);}}catch(error){e={error:error};}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i);}finally{if(e)throw e.error;}}return ar;};var __spread=this&&this.__spread||function(){for(var ar=[],i=0;i<arguments.length;i++){ar=ar.concat(__read(arguments[i]));}return ar;};/* eslint-disable prefer-rest-params */ /* istanbul ignore next */if(typeof Function.prototype.call==='undefined'){Function.prototype.call=function(context){context=context||window;context.fn=this;var args=__spread(arguments).slice(1);var result=context.fn.apply(context,__spread(args));delete context.fn;return result;};}/* istanbul ignore next */if(typeof Function.prototype.apply==='undefined'){Function.prototype.apply=function(context){context=context||window;context.fn=this;var result;if(arguments[1]){result=context.fn.apply(context,__spread(arguments[1]));}else{result=context.fn();}delete context.fn;return result;};}

/***/ })
]]);
},{}],6:[function(require,module,exports){

    var _appConfig = {
  "pages": [
    "pages/index/index",
    "pages/test/index"
  ],
  "window": {
    "navigationBarTitleText": "Remax Wechat Template",
    "navigationBarBackgroundColor": "#282c34"
  }
}
    var pagePath = `remax/dist/runtime`
  

    var App = (appData)=> {
      return _globalApp(_appConfig)
    }
  

    var Page = (config) => {
      return _globalPage(pagePath,config,templateText)
    }
  

    var Component = (config) => {
      return _globalComponent(pagePath,config,templateText)
    }
  
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = wx["webpackJsonp"] = wx["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// run deferred modules from other chunks
/******/ 	checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([]);
},{}]},{},[2,3,4]);
