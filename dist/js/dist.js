(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

            var _appConfig = {
  "pages": [
    "pages/index/index"
  ],
  "window": {
    "navigationBarTitleText": "Remax Wechat Template",
    "navigationBarBackgroundColor": "#282c34"
  }
}
            
            var App = (appData)=> {
                return _globalApp("/Users/lv/Desktop/tarodemo/taro/dist/app.js",_appConfig)
            }
            var Page = (config) => {
                const path = "/Users/lv/Desktop/tarodemo/taro/dist/app.js".replace('.js', '').split('/').slice(-3).join('/')
                return _globalPage(path,config,'<div class="app" v-bind:data="{root: root}">123123</div>')
            }
            var Component = (config) => {
                return _globalComponent("/Users/lv/Desktop/tarodemo/taro/dist/app.js",config,template)
            }
        require("./runtime");
require("./vendors");
require("./taro");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/classCallCheck.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/classCallCheck.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/createClass.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/createClass.js ***!
  \***********************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/defineProperty.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/defineProperty.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/objectSpread2.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/objectSpread2.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

module.exports = _objectSpread2;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./src/app.js":
/*!************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.1@babel-loader/lib!./src/app.js ***!
  \************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.less */ "./src/app.less");
/* harmony import */ var _app_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_less__WEBPACK_IMPORTED_MODULE_5__);







var App = /*#__PURE__*/function (_Component) {
  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(App, _Component);

  var _super = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(App);

  function App() {
    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, App);

    return _super.apply(this, arguments);
  }

  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {} // this.props.children 是将要会渲染的页面

  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./node_modules/_react-reconciler@0.26.1@react-reconciler/cjs/react-reconciler.production.min.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/_react-reconciler@0.26.1@react-reconciler/cjs/react-reconciler.production.min.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/typeof.js");

/** @license React v0.26.1
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = function $$$reconciler($$$hostConfig) {
  var exports = {};
  'use strict';

  var aa = __webpack_require__(/*! object-assign */ "./node_modules/_object-assign@4.1.1@object-assign/index.js"),
      ba = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js"),
      m = __webpack_require__(/*! scheduler */ "./node_modules/_scheduler@0.20.2@scheduler/cjs/scheduler.production.min.js");

  function q(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    }

    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }

  var ca = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      da = 60103,
      ea = 60106,
      fa = 60107,
      ha = 60108,
      ia = 60114,
      ja = 60109,
      ka = 60110,
      la = 60112,
      ma = 60113,
      na = 60120,
      oa = 60115,
      pa = 60116,
      qa = 60121,
      ra = 60129,
      sa = 60130,
      ta = 60131;

  if ("function" === typeof Symbol && Symbol.for) {
    var r = Symbol.for;
    da = r("react.element");
    ea = r("react.portal");
    fa = r("react.fragment");
    ha = r("react.strict_mode");
    ia = r("react.profiler");
    ja = r("react.provider");
    ka = r("react.context");
    la = r("react.forward_ref");
    ma = r("react.suspense");
    na = r("react.suspense_list");
    oa = r("react.memo");
    pa = r("react.lazy");
    qa = r("react.block");
    r("react.scope");
    ra = r("react.debug_trace_mode");
    sa = r("react.offscreen");
    ta = r("react.legacy_hidden");
  }

  var ua = "function" === typeof Symbol && Symbol.iterator;

  function va(a) {
    if (null === a || "object" !== _typeof(a)) return null;
    a = ua && a[ua] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }

  function wa(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;

    switch (a) {
      case fa:
        return "Fragment";

      case ea:
        return "Portal";

      case ia:
        return "Profiler";

      case ha:
        return "StrictMode";

      case ma:
        return "Suspense";

      case na:
        return "SuspenseList";
    }

    if ("object" === _typeof(a)) switch (a.$$typeof) {
      case ka:
        return (a.displayName || "Context") + ".Consumer";

      case ja:
        return (a._context.displayName || "Context") + ".Provider";

      case la:
        var b = a.render;
        b = b.displayName || b.name || "";
        return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");

      case oa:
        return wa(a.type);

      case qa:
        return wa(a._render);

      case pa:
        b = a._payload;
        a = a._init;

        try {
          return wa(a(b));
        } catch (c) {}

    }
    return null;
  }

  function xa(a) {
    var b = a,
        c = a;
    if (a.alternate) for (; b.return;) {
      b = b.return;
    } else {
      a = b;

      do {
        b = a, 0 !== (b.flags & 1026) && (c = b.return), a = b.return;
      } while (a);
    }
    return 3 === b.tag ? c : null;
  }

  function ya(a) {
    if (xa(a) !== a) throw Error(q(188));
  }

  function za(a) {
    var b = a.alternate;

    if (!b) {
      b = xa(a);
      if (null === b) throw Error(q(188));
      return b !== a ? null : a;
    }

    for (var c = a, d = b;;) {
      var e = c.return;
      if (null === e) break;
      var f = e.alternate;

      if (null === f) {
        d = e.return;

        if (null !== d) {
          c = d;
          continue;
        }

        break;
      }

      if (e.child === f.child) {
        for (f = e.child; f;) {
          if (f === c) return ya(e), a;
          if (f === d) return ya(e), b;
          f = f.sibling;
        }

        throw Error(q(188));
      }

      if (c.return !== d.return) c = e, d = f;else {
        for (var g = !1, h = e.child; h;) {
          if (h === c) {
            g = !0;
            c = e;
            d = f;
            break;
          }

          if (h === d) {
            g = !0;
            d = e;
            c = f;
            break;
          }

          h = h.sibling;
        }

        if (!g) {
          for (h = f.child; h;) {
            if (h === c) {
              g = !0;
              c = f;
              d = e;
              break;
            }

            if (h === d) {
              g = !0;
              d = f;
              c = e;
              break;
            }

            h = h.sibling;
          }

          if (!g) throw Error(q(189));
        }
      }
      if (c.alternate !== d) throw Error(q(190));
    }

    if (3 !== c.tag) throw Error(q(188));
    return c.stateNode.current === c ? a : b;
  }

  function Aa(a) {
    a = za(a);
    if (!a) return null;

    for (var b = a;;) {
      if (5 === b.tag || 6 === b.tag) return b;
      if (b.child) b.child.return = b, b = b.child;else {
        if (b === a) break;

        for (; !b.sibling;) {
          if (!b.return || b.return === a) return null;
          b = b.return;
        }

        b.sibling.return = b.return;
        b = b.sibling;
      }
    }

    return null;
  }

  function Ba(a) {
    a = za(a);
    if (!a) return null;

    for (var b = a;;) {
      if (5 === b.tag || 6 === b.tag) return b;
      if (b.child && 4 !== b.tag) b.child.return = b, b = b.child;else {
        if (b === a) break;

        for (; !b.sibling;) {
          if (!b.return || b.return === a) return null;
          b = b.return;
        }

        b.sibling.return = b.return;
        b = b.sibling;
      }
    }

    return null;
  }

  function Ca(a, b) {
    for (var c = a.alternate; null !== b;) {
      if (b === a || b === c) return !0;
      b = b.return;
    }

    return !1;
  }

  var Da = $$$hostConfig.getPublicInstance,
      Ea = $$$hostConfig.getRootHostContext,
      Fa = $$$hostConfig.getChildHostContext,
      Ga = $$$hostConfig.prepareForCommit,
      Ha = $$$hostConfig.resetAfterCommit,
      Ia = $$$hostConfig.createInstance,
      Ja = $$$hostConfig.appendInitialChild,
      Ka = $$$hostConfig.finalizeInitialChildren,
      La = $$$hostConfig.prepareUpdate,
      Ma = $$$hostConfig.shouldSetTextContent,
      Na = $$$hostConfig.createTextInstance,
      Pa = $$$hostConfig.scheduleTimeout,
      Qa = $$$hostConfig.cancelTimeout,
      Ra = $$$hostConfig.noTimeout,
      Sa = $$$hostConfig.isPrimaryRenderer,
      Ta = $$$hostConfig.supportsMutation,
      Ua = $$$hostConfig.supportsPersistence,
      Va = $$$hostConfig.supportsHydration,
      Wa = $$$hostConfig.getInstanceFromNode,
      Xa = $$$hostConfig.makeOpaqueHydratingObject,
      Ya = $$$hostConfig.makeClientId,
      Za = $$$hostConfig.beforeActiveInstanceBlur,
      $a = $$$hostConfig.afterActiveInstanceBlur,
      ab = $$$hostConfig.preparePortalMount,
      bb = $$$hostConfig.supportsTestSelectors,
      cb = $$$hostConfig.findFiberRoot,
      db = $$$hostConfig.getBoundingRect,
      eb = $$$hostConfig.getTextContent,
      fb = $$$hostConfig.isHiddenSubtree,
      gb = $$$hostConfig.matchAccessibilityRole,
      hb = $$$hostConfig.setFocusIfFocusable,
      ib = $$$hostConfig.setupIntersectionObserver,
      jb = $$$hostConfig.appendChild,
      kb = $$$hostConfig.appendChildToContainer,
      lb = $$$hostConfig.commitTextUpdate,
      mb = $$$hostConfig.commitMount,
      nb = $$$hostConfig.commitUpdate,
      ob = $$$hostConfig.insertBefore,
      pb = $$$hostConfig.insertInContainerBefore,
      qb = $$$hostConfig.removeChild,
      rb = $$$hostConfig.removeChildFromContainer,
      sb = $$$hostConfig.resetTextContent,
      tb = $$$hostConfig.hideInstance,
      ub = $$$hostConfig.hideTextInstance,
      vb = $$$hostConfig.unhideInstance,
      wb = $$$hostConfig.unhideTextInstance,
      xb = $$$hostConfig.clearContainer,
      yb = $$$hostConfig.cloneInstance,
      zb = $$$hostConfig.createContainerChildSet,
      Ab = $$$hostConfig.appendChildToContainerChildSet,
      Bb = $$$hostConfig.finalizeContainerChildren,
      Cb = $$$hostConfig.replaceContainerChildren,
      Db = $$$hostConfig.cloneHiddenInstance,
      Eb = $$$hostConfig.cloneHiddenTextInstance,
      Fb = $$$hostConfig.canHydrateInstance,
      Gb = $$$hostConfig.canHydrateTextInstance,
      Hb = $$$hostConfig.isSuspenseInstancePending,
      Ib = $$$hostConfig.isSuspenseInstanceFallback,
      Jb = $$$hostConfig.getNextHydratableSibling,
      Kb = $$$hostConfig.getFirstHydratableChild,
      Lb = $$$hostConfig.hydrateInstance,
      Mb = $$$hostConfig.hydrateTextInstance,
      Nb = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance,
      Ob = $$$hostConfig.commitHydratedContainer,
      Pb = $$$hostConfig.commitHydratedSuspenseInstance,
      Qb;

  function Rb(a) {
    if (void 0 === Qb) try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      Qb = b && b[1] || "";
    }
    return "\n" + Qb + a;
  }

  var Sb = !1;

  function Tb(a, b) {
    if (!a || Sb) return "";
    Sb = !0;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;

    try {
      if (b) {
        if (b = function b() {
          throw Error();
        }, Object.defineProperty(b.prototype, "props", {
          set: function set() {
            throw Error();
          }
        }), "object" === (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && Reflect.construct) {
          try {
            Reflect.construct(b, []);
          } catch (k) {
            var d = k;
          }

          Reflect.construct(a, [], b);
        } else {
          try {
            b.call();
          } catch (k) {
            d = k;
          }

          a.call(b.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (k) {
          d = k;
        }

        a();
      }
    } catch (k) {
      if (k && d && "string" === typeof k.stack) {
        for (var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) {
          h--;
        }

        for (; 1 <= g && 0 <= h; g--, h--) {
          if (e[g] !== f[h]) {
            if (1 !== g || 1 !== h) {
              do {
                if (g--, h--, 0 > h || e[g] !== f[h]) return "\n" + e[g].replace(" at new ", " at ");
              } while (1 <= g && 0 <= h);
            }

            break;
          }
        }
      }
    } finally {
      Sb = !1, Error.prepareStackTrace = c;
    }

    return (a = a ? a.displayName || a.name : "") ? Rb(a) : "";
  }

  var Ub = [],
      Vb = -1;

  function Wb(a) {
    return {
      current: a
    };
  }

  function z(a) {
    0 > Vb || (a.current = Ub[Vb], Ub[Vb] = null, Vb--);
  }

  function A(a, b) {
    Vb++;
    Ub[Vb] = a.current;
    a.current = b;
  }

  var Xb = {},
      B = Wb(Xb),
      D = Wb(!1),
      Yb = Xb;

  function Zb(a, b) {
    var c = a.type.contextTypes;
    if (!c) return Xb;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {},
        f;

    for (f in c) {
      e[f] = b[f];
    }

    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }

  function E(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }

  function $b() {
    z(D);
    z(B);
  }

  function ac(a, b, c) {
    if (B.current !== Xb) throw Error(q(168));
    A(B, b);
    A(D, c);
  }

  function bc(a, b, c) {
    var d = a.stateNode;
    a = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();

    for (var e in d) {
      if (!(e in a)) throw Error(q(108, wa(b) || "Unknown", e));
    }

    return aa({}, c, d);
  }

  function cc(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Xb;
    Yb = B.current;
    A(B, a);
    A(D, D.current);
    return !0;
  }

  function dc(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(q(169));
    c ? (a = bc(a, b, Yb), d.__reactInternalMemoizedMergedChildContext = a, z(D), z(B), A(B, a)) : z(D);
    A(D, c);
  }

  var ec = null,
      fc = null,
      gc = m.unstable_now;
  gc();
  var hc = 0,
      F = 8;

  function ic(a) {
    if (0 !== (1 & a)) return F = 15, 1;
    if (0 !== (2 & a)) return F = 14, 2;
    if (0 !== (4 & a)) return F = 13, 4;
    var b = 24 & a;
    if (0 !== b) return F = 12, b;
    if (0 !== (a & 32)) return F = 11, 32;
    b = 192 & a;
    if (0 !== b) return F = 10, b;
    if (0 !== (a & 256)) return F = 9, 256;
    b = 3584 & a;
    if (0 !== b) return F = 8, b;
    if (0 !== (a & 4096)) return F = 7, 4096;
    b = 4186112 & a;
    if (0 !== b) return F = 6, b;
    b = 62914560 & a;
    if (0 !== b) return F = 5, b;
    if (a & 67108864) return F = 4, 67108864;
    if (0 !== (a & 134217728)) return F = 3, 134217728;
    b = 805306368 & a;
    if (0 !== b) return F = 2, b;
    if (0 !== (1073741824 & a)) return F = 1, 1073741824;
    F = 8;
    return a;
  }

  function jc(a) {
    switch (a) {
      case 99:
        return 15;

      case 98:
        return 10;

      case 97:
      case 96:
        return 8;

      case 95:
        return 2;

      default:
        return 0;
    }
  }

  function kc(a) {
    switch (a) {
      case 15:
      case 14:
        return 99;

      case 13:
      case 12:
      case 11:
      case 10:
        return 98;

      case 9:
      case 8:
      case 7:
      case 6:
      case 4:
      case 5:
        return 97;

      case 3:
      case 2:
      case 1:
        return 95;

      case 0:
        return 90;

      default:
        throw Error(q(358, a));
    }
  }

  function lc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return F = 0;
    var d = 0,
        e = 0,
        f = a.expiredLanes,
        g = a.suspendedLanes,
        h = a.pingedLanes;
    if (0 !== f) d = f, e = F = 15;else if (f = c & 134217727, 0 !== f) {
      var k = f & ~g;
      0 !== k ? (d = ic(k), e = F) : (h &= f, 0 !== h && (d = ic(h), e = F));
    } else f = c & ~g, 0 !== f ? (d = ic(f), e = F) : 0 !== h && (d = ic(h), e = F);
    if (0 === d) return 0;
    d = 31 - mc(d);
    d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;

    if (0 !== b && b !== d && 0 === (b & g)) {
      ic(b);
      if (e <= F) return b;
      F = e;
    }

    b = a.entangledLanes;
    if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) {
      c = 31 - mc(b), e = 1 << c, d |= a[c], b &= ~e;
    }
    return d;
  }

  function nc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }

  function oc(a, b) {
    switch (a) {
      case 15:
        return 1;

      case 14:
        return 2;

      case 12:
        return a = pc(24 & ~b), 0 === a ? oc(10, b) : a;

      case 10:
        return a = pc(192 & ~b), 0 === a ? oc(8, b) : a;

      case 8:
        return a = pc(3584 & ~b), 0 === a && (a = pc(4186112 & ~b), 0 === a && (a = 512)), a;

      case 2:
        return b = pc(805306368 & ~b), 0 === b && (b = 268435456), b;
    }

    throw Error(q(358, a));
  }

  function pc(a) {
    return a & -a;
  }

  function qc(a) {
    for (var b = [], c = 0; 31 > c; c++) {
      b.push(a);
    }

    return b;
  }

  function rc(a, b, c) {
    a.pendingLanes |= b;
    var d = b - 1;
    a.suspendedLanes &= d;
    a.pingedLanes &= d;
    a = a.eventTimes;
    b = 31 - mc(b);
    a[b] = c;
  }

  var mc = Math.clz32 ? Math.clz32 : sc,
      tc = Math.log,
      uc = Math.LN2;

  function sc(a) {
    return 0 === a ? 32 : 31 - (tc(a) / uc | 0) | 0;
  }

  var vc = m.unstable_runWithPriority,
      wc = m.unstable_scheduleCallback,
      xc = m.unstable_cancelCallback,
      yc = m.unstable_shouldYield,
      zc = m.unstable_requestPaint,
      Ac = m.unstable_now,
      Bc = m.unstable_getCurrentPriorityLevel,
      Cc = m.unstable_ImmediatePriority,
      Dc = m.unstable_UserBlockingPriority,
      Ec = m.unstable_NormalPriority,
      Fc = m.unstable_LowPriority,
      Gc = m.unstable_IdlePriority,
      Hc = {},
      Ic = void 0 !== zc ? zc : function () {},
      Jc = null,
      Kc = null,
      Lc = !1,
      Mc = Ac(),
      G = 1E4 > Mc ? Ac : function () {
    return Ac() - Mc;
  };

  function Nc() {
    switch (Bc()) {
      case Cc:
        return 99;

      case Dc:
        return 98;

      case Ec:
        return 97;

      case Fc:
        return 96;

      case Gc:
        return 95;

      default:
        throw Error(q(332));
    }
  }

  function Oc(a) {
    switch (a) {
      case 99:
        return Cc;

      case 98:
        return Dc;

      case 97:
        return Ec;

      case 96:
        return Fc;

      case 95:
        return Gc;

      default:
        throw Error(q(332));
    }
  }

  function Pc(a, b) {
    a = Oc(a);
    return vc(a, b);
  }

  function Qc(a, b, c) {
    a = Oc(a);
    return wc(a, b, c);
  }

  function H() {
    if (null !== Kc) {
      var a = Kc;
      Kc = null;
      xc(a);
    }

    Rc();
  }

  function Rc() {
    if (!Lc && null !== Jc) {
      Lc = !0;
      var a = 0;

      try {
        var b = Jc;
        Pc(99, function () {
          for (; a < b.length; a++) {
            var c = b[a];

            do {
              c = c(!0);
            } while (null !== c);
          }
        });
        Jc = null;
      } catch (c) {
        throw null !== Jc && (Jc = Jc.slice(a + 1)), wc(Cc, H), c;
      } finally {
        Lc = !1;
      }
    }
  }

  var Sc = ca.ReactCurrentBatchConfig;

  function Tc(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }

  var I = "function" === typeof Object.is ? Object.is : Tc,
      Uc = Object.prototype.hasOwnProperty;

  function Vc(a, b) {
    if (I(a, b)) return !0;
    if ("object" !== _typeof(a) || null === a || "object" !== _typeof(b) || null === b) return !1;
    var c = Object.keys(a),
        d = Object.keys(b);
    if (c.length !== d.length) return !1;

    for (d = 0; d < c.length; d++) {
      if (!Uc.call(b, c[d]) || !I(a[c[d]], b[c[d]])) return !1;
    }

    return !0;
  }

  function Wc(a) {
    switch (a.tag) {
      case 5:
        return Rb(a.type);

      case 16:
        return Rb("Lazy");

      case 13:
        return Rb("Suspense");

      case 19:
        return Rb("SuspenseList");

      case 0:
      case 2:
      case 15:
        return a = Tb(a.type, !1), a;

      case 11:
        return a = Tb(a.type.render, !1), a;

      case 22:
        return a = Tb(a.type._render, !1), a;

      case 1:
        return a = Tb(a.type, !0), a;

      default:
        return "";
    }
  }

  function Xc(a, b) {
    if (a && a.defaultProps) {
      b = aa({}, b);
      a = a.defaultProps;

      for (var c in a) {
        void 0 === b[c] && (b[c] = a[c]);
      }

      return b;
    }

    return b;
  }

  var Yc = Wb(null),
      Zc = null,
      $c = null,
      ad = null;

  function bd() {
    ad = $c = Zc = null;
  }

  function cd(a, b) {
    a = a.type._context;
    Sa ? (A(Yc, a._currentValue), a._currentValue = b) : (A(Yc, a._currentValue2), a._currentValue2 = b);
  }

  function dd(a) {
    var b = Yc.current;
    z(Yc);
    a = a.type._context;
    Sa ? a._currentValue = b : a._currentValue2 = b;
  }

  function ed(a, b) {
    for (; null !== a;) {
      var c = a.alternate;
      if ((a.childLanes & b) === b) {
        if (null === c || (c.childLanes & b) === b) break;else c.childLanes |= b;
      } else a.childLanes |= b, null !== c && (c.childLanes |= b);
      a = a.return;
    }
  }

  function fd(a, b) {
    Zc = a;
    ad = $c = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (gd = !0), a.firstContext = null);
  }

  function J(a, b) {
    if (ad !== a && !1 !== b && 0 !== b) {
      if ("number" !== typeof b || 1073741823 === b) ad = a, b = 1073741823;
      b = {
        context: a,
        observedBits: b,
        next: null
      };

      if (null === $c) {
        if (null === Zc) throw Error(q(308));
        $c = b;
        Zc.dependencies = {
          lanes: 0,
          firstContext: b,
          responders: null
        };
      } else $c = $c.next = b;
    }

    return Sa ? a._currentValue : a._currentValue2;
  }

  var hd = !1;

  function id(a) {
    a.updateQueue = {
      baseState: a.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null
      },
      effects: null
    };
  }

  function jd(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = {
      baseState: a.baseState,
      firstBaseUpdate: a.firstBaseUpdate,
      lastBaseUpdate: a.lastBaseUpdate,
      shared: a.shared,
      effects: a.effects
    });
  }

  function kd(a, b) {
    return {
      eventTime: a,
      lane: b,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }

  function md(a, b) {
    a = a.updateQueue;

    if (null !== a) {
      a = a.shared;
      var c = a.pending;
      null === c ? b.next = b : (b.next = c.next, c.next = b);
      a.pending = b;
    }
  }

  function nd(a, b) {
    var c = a.updateQueue,
        d = a.alternate;

    if (null !== d && (d = d.updateQueue, c === d)) {
      var e = null,
          f = null;
      c = c.firstBaseUpdate;

      if (null !== c) {
        do {
          var g = {
            eventTime: c.eventTime,
            lane: c.lane,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          };
          null === f ? e = f = g : f = f.next = g;
          c = c.next;
        } while (null !== c);

        null === f ? e = f = b : f = f.next = b;
      } else e = f = b;

      c = {
        baseState: d.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: f,
        shared: d.shared,
        effects: d.effects
      };
      a.updateQueue = c;
      return;
    }

    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
  }

  function od(a, b, c, d) {
    var e = a.updateQueue;
    hd = !1;
    var f = e.firstBaseUpdate,
        g = e.lastBaseUpdate,
        h = e.shared.pending;

    if (null !== h) {
      e.shared.pending = null;
      var k = h,
          l = k.next;
      k.next = null;
      null === g ? f = l : g.next = l;
      g = k;
      var n = a.alternate;

      if (null !== n) {
        n = n.updateQueue;
        var t = n.lastBaseUpdate;
        t !== g && (null === t ? n.firstBaseUpdate = l : t.next = l, n.lastBaseUpdate = k);
      }
    }

    if (null !== f) {
      t = e.baseState;
      g = 0;
      n = l = k = null;

      do {
        h = f.lane;
        var p = f.eventTime;

        if ((d & h) === h) {
          null !== n && (n = n.next = {
            eventTime: p,
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          });

          a: {
            var y = a,
                x = f;
            h = b;
            p = c;

            switch (x.tag) {
              case 1:
                y = x.payload;

                if ("function" === typeof y) {
                  t = y.call(p, t, h);
                  break a;
                }

                t = y;
                break a;

              case 3:
                y.flags = y.flags & -4097 | 64;

              case 0:
                y = x.payload;
                h = "function" === typeof y ? y.call(p, t, h) : y;
                if (null === h || void 0 === h) break a;
                t = aa({}, t, h);
                break a;

              case 2:
                hd = !0;
            }
          }

          null !== f.callback && (a.flags |= 32, h = e.effects, null === h ? e.effects = [f] : h.push(f));
        } else p = {
          eventTime: p,
          lane: h,
          tag: f.tag,
          payload: f.payload,
          callback: f.callback,
          next: null
        }, null === n ? (l = n = p, k = t) : n = n.next = p, g |= h;

        f = f.next;
        if (null === f) if (h = e.shared.pending, null === h) break;else f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
      } while (1);

      null === n && (k = t);
      e.baseState = k;
      e.firstBaseUpdate = l;
      e.lastBaseUpdate = n;
      pd |= g;
      a.lanes = g;
      a.memoizedState = t;
    }
  }

  function qd(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for (b = 0; b < a.length; b++) {
      var d = a[b],
          e = d.callback;

      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e) throw Error(q(191, e));
        e.call(d);
      }
    }
  }

  var rd = new ba.Component().refs;

  function sd(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : aa({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
  }

  var vd = {
    isMounted: function isMounted(a) {
      return (a = a._reactInternals) ? xa(a) === a : !1;
    },
    enqueueSetState: function enqueueSetState(a, b, c) {
      a = a._reactInternals;
      var d = K(),
          e = td(a),
          f = kd(d, e);
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      md(a, f);
      ud(a, e, d);
    },
    enqueueReplaceState: function enqueueReplaceState(a, b, c) {
      a = a._reactInternals;
      var d = K(),
          e = td(a),
          f = kd(d, e);
      f.tag = 1;
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      md(a, f);
      ud(a, e, d);
    },
    enqueueForceUpdate: function enqueueForceUpdate(a, b) {
      a = a._reactInternals;
      var c = K(),
          d = td(a),
          e = kd(c, d);
      e.tag = 2;
      void 0 !== b && null !== b && (e.callback = b);
      md(a, e);
      ud(a, d, c);
    }
  };

  function wd(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Vc(c, d) || !Vc(e, f) : !0;
  }

  function xd(a, b, c) {
    var d = !1,
        e = Xb;
    var f = b.contextType;
    "object" === _typeof(f) && null !== f ? f = J(f) : (e = E(b) ? Yb : B.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Zb(a, e) : Xb);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = vd;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
  }

  function yd(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && vd.enqueueReplaceState(b, b.state, null);
  }

  function zd(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = rd;
    id(a);
    var f = b.contextType;
    "object" === _typeof(f) && null !== f ? e.context = J(f) : (f = E(b) ? Yb : B.current, e.context = Zb(a, f));
    od(a, c, e, d);
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && (sd(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && vd.enqueueReplaceState(e, e.state, null), od(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4);
  }

  var Ad = Array.isArray;

  function Bd(a, b, c) {
    a = c.ref;

    if (null !== a && "function" !== typeof a && "object" !== _typeof(a)) {
      if (c._owner) {
        c = c._owner;

        if (c) {
          if (1 !== c.tag) throw Error(q(309));
          var d = c.stateNode;
        }

        if (!d) throw Error(q(147, a));
        var e = "" + a;
        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;

        b = function b(a) {
          var b = d.refs;
          b === rd && (b = d.refs = {});
          null === a ? delete b[e] : b[e] = a;
        };

        b._stringRef = e;
        return b;
      }

      if ("string" !== typeof a) throw Error(q(284));
      if (!c._owner) throw Error(q(290, a));
    }

    return a;
  }

  function Cd(a, b) {
    if ("textarea" !== a.type) throw Error(q(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
  }

  function Dd(a) {
    function b(b, c) {
      if (a) {
        var d = b.lastEffect;
        null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
        c.nextEffect = null;
        c.flags = 8;
      }
    }

    function c(c, d) {
      if (!a) return null;

      for (; null !== d;) {
        b(c, d), d = d.sibling;
      }

      return null;
    }

    function d(a, b) {
      for (a = new Map(); null !== b;) {
        null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
      }

      return a;
    }

    function e(a, b) {
      a = Ed(a, b);
      a.index = 0;
      a.sibling = null;
      return a;
    }

    function f(b, c, d) {
      b.index = d;
      if (!a) return c;
      d = b.alternate;
      if (null !== d) return d = d.index, d < c ? (b.flags = 2, c) : d;
      b.flags = 2;
      return c;
    }

    function g(b) {
      a && null === b.alternate && (b.flags = 2);
      return b;
    }

    function h(a, b, c, d) {
      if (null === b || 6 !== b.tag) return b = Fd(c, a.mode, d), b.return = a, b;
      b = e(b, c);
      b.return = a;
      return b;
    }

    function k(a, b, c, d) {
      if (null !== b && b.elementType === c.type) return d = e(b, c.props), d.ref = Bd(a, b, c), d.return = a, d;
      d = Gd(c.type, c.key, c.props, null, a.mode, d);
      d.ref = Bd(a, b, c);
      d.return = a;
      return d;
    }

    function l(a, b, c, d) {
      if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Hd(c, a.mode, d), b.return = a, b;
      b = e(b, c.children || []);
      b.return = a;
      return b;
    }

    function n(a, b, c, d, f) {
      if (null === b || 7 !== b.tag) return b = Id(c, a.mode, d, f), b.return = a, b;
      b = e(b, c);
      b.return = a;
      return b;
    }

    function t(a, b, c) {
      if ("string" === typeof b || "number" === typeof b) return b = Fd("" + b, a.mode, c), b.return = a, b;

      if ("object" === _typeof(b) && null !== b) {
        switch (b.$$typeof) {
          case da:
            return c = Gd(b.type, b.key, b.props, null, a.mode, c), c.ref = Bd(a, null, b), c.return = a, c;

          case ea:
            return b = Hd(b, a.mode, c), b.return = a, b;
        }

        if (Ad(b) || va(b)) return b = Id(b, a.mode, c, null), b.return = a, b;
        Cd(a, b);
      }

      return null;
    }

    function p(a, b, c, d) {
      var e = null !== b ? b.key : null;
      if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);

      if ("object" === _typeof(c) && null !== c) {
        switch (c.$$typeof) {
          case da:
            return c.key === e ? c.type === fa ? n(a, b, c.props.children, d, e) : k(a, b, c, d) : null;

          case ea:
            return c.key === e ? l(a, b, c, d) : null;
        }

        if (Ad(c) || va(c)) return null !== e ? null : n(a, b, c, d, null);
        Cd(a, c);
      }

      return null;
    }

    function y(a, b, c, d, e) {
      if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);

      if ("object" === _typeof(d) && null !== d) {
        switch (d.$$typeof) {
          case da:
            return a = a.get(null === d.key ? c : d.key) || null, d.type === fa ? n(b, a, d.props.children, e, d.key) : k(b, a, d, e);

          case ea:
            return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
        }

        if (Ad(d) || va(d)) return a = a.get(c) || null, n(b, a, d, e, null);
        Cd(b, d);
      }

      return null;
    }

    function x(e, g, h, k) {
      for (var l = null, v = null, u = g, C = g = 0, n = null; null !== u && C < h.length; C++) {
        u.index > C ? (n = u, u = null) : n = u.sibling;
        var w = p(e, u, h[C], k);

        if (null === w) {
          null === u && (u = n);
          break;
        }

        a && u && null === w.alternate && b(e, u);
        g = f(w, g, C);
        null === v ? l = w : v.sibling = w;
        v = w;
        u = n;
      }

      if (C === h.length) return c(e, u), l;

      if (null === u) {
        for (; C < h.length; C++) {
          u = t(e, h[C], k), null !== u && (g = f(u, g, C), null === v ? l = u : v.sibling = u, v = u);
        }

        return l;
      }

      for (u = d(e, u); C < h.length; C++) {
        n = y(u, e, C, h[C], k), null !== n && (a && null !== n.alternate && u.delete(null === n.key ? C : n.key), g = f(n, g, C), null === v ? l = n : v.sibling = n, v = n);
      }

      a && u.forEach(function (a) {
        return b(e, a);
      });
      return l;
    }

    function Y(e, g, h, k) {
      var l = va(h);
      if ("function" !== typeof l) throw Error(q(150));
      h = l.call(h);
      if (null == h) throw Error(q(151));

      for (var u = l = null, v = g, n = g = 0, C = null, w = h.next(); null !== v && !w.done; n++, w = h.next()) {
        v.index > n ? (C = v, v = null) : C = v.sibling;
        var x = p(e, v, w.value, k);

        if (null === x) {
          null === v && (v = C);
          break;
        }

        a && v && null === x.alternate && b(e, v);
        g = f(x, g, n);
        null === u ? l = x : u.sibling = x;
        u = x;
        v = C;
      }

      if (w.done) return c(e, v), l;

      if (null === v) {
        for (; !w.done; n++, w = h.next()) {
          w = t(e, w.value, k), null !== w && (g = f(w, g, n), null === u ? l = w : u.sibling = w, u = w);
        }

        return l;
      }

      for (v = d(e, v); !w.done; n++, w = h.next()) {
        w = y(v, e, n, w.value, k), null !== w && (a && null !== w.alternate && v.delete(null === w.key ? n : w.key), g = f(w, g, n), null === u ? l = w : u.sibling = w, u = w);
      }

      a && v.forEach(function (a) {
        return b(e, a);
      });
      return l;
    }

    return function (a, d, f, h) {
      var k = "object" === _typeof(f) && null !== f && f.type === fa && null === f.key;
      k && (f = f.props.children);
      var l = "object" === _typeof(f) && null !== f;
      if (l) switch (f.$$typeof) {
        case da:
          a: {
            l = f.key;

            for (k = d; null !== k;) {
              if (k.key === l) {
                switch (k.tag) {
                  case 7:
                    if (f.type === fa) {
                      c(a, k.sibling);
                      d = e(k, f.props.children);
                      d.return = a;
                      a = d;
                      break a;
                    }

                    break;

                  default:
                    if (k.elementType === f.type) {
                      c(a, k.sibling);
                      d = e(k, f.props);
                      d.ref = Bd(a, k, f);
                      d.return = a;
                      a = d;
                      break a;
                    }

                }

                c(a, k);
                break;
              } else b(a, k);

              k = k.sibling;
            }

            f.type === fa ? (d = Id(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Gd(f.type, f.key, f.props, null, a.mode, h), h.ref = Bd(a, d, f), h.return = a, a = h);
          }

          return g(a);

        case ea:
          a: {
            for (k = f.key; null !== d;) {
              if (d.key === k) {
                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                  c(a, d.sibling);
                  d = e(d, f.children || []);
                  d.return = a;
                  a = d;
                  break a;
                } else {
                  c(a, d);
                  break;
                }
              } else b(a, d);
              d = d.sibling;
            }

            d = Hd(f, a.mode, h);
            d.return = a;
            a = d;
          }

          return g(a);
      }
      if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Fd(f, a.mode, h), d.return = a, a = d), g(a);
      if (Ad(f)) return x(a, d, f, h);
      if (va(f)) return Y(a, d, f, h);
      l && Cd(a, f);
      if ("undefined" === typeof f && !k) switch (a.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(q(152, wa(a.type) || "Component"));
      }
      return c(a, d);
    };
  }

  var Jd = Dd(!0),
      Kd = Dd(!1),
      Ld = {},
      L = Wb(Ld),
      Md = Wb(Ld),
      Nd = Wb(Ld);

  function Od(a) {
    if (a === Ld) throw Error(q(174));
    return a;
  }

  function Pd(a, b) {
    A(Nd, b);
    A(Md, a);
    A(L, Ld);
    a = Ea(b);
    z(L);
    A(L, a);
  }

  function Qd() {
    z(L);
    z(Md);
    z(Nd);
  }

  function Rd(a) {
    var b = Od(Nd.current),
        c = Od(L.current);
    b = Fa(c, a.type, b);
    c !== b && (A(Md, a), A(L, b));
  }

  function Sd(a) {
    Md.current === a && (z(L), z(Md));
  }

  var M = Wb(0);

  function Td(a) {
    for (var b = a; null !== b;) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (null !== c && (c = c.dehydrated, null === c || Hb(c) || Ib(c))) return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.flags & 64)) return b;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }

      if (b === a) break;

      for (; null === b.sibling;) {
        if (null === b.return || b.return === a) return null;
        b = b.return;
      }

      b.sibling.return = b.return;
      b = b.sibling;
    }

    return null;
  }

  var Ud = null,
      Vd = null,
      Wd = !1;

  function Xd(a, b) {
    var c = Yd(5, null, null, 0);
    c.elementType = "DELETED";
    c.type = "DELETED";
    c.stateNode = b;
    c.return = a;
    c.flags = 8;
    null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
  }

  function Zd(a, b) {
    switch (a.tag) {
      case 5:
        return b = Fb(b, a.type, a.pendingProps), null !== b ? (a.stateNode = b, !0) : !1;

      case 6:
        return b = Gb(b, a.pendingProps), null !== b ? (a.stateNode = b, !0) : !1;

      case 13:
        return !1;

      default:
        return !1;
    }
  }

  function $d(a) {
    if (Wd) {
      var b = Vd;

      if (b) {
        var c = b;

        if (!Zd(a, b)) {
          b = Jb(c);

          if (!b || !Zd(a, b)) {
            a.flags = a.flags & -1025 | 2;
            Wd = !1;
            Ud = a;
            return;
          }

          Xd(Ud, c);
        }

        Ud = a;
        Vd = Kb(b);
      } else a.flags = a.flags & -1025 | 2, Wd = !1, Ud = a;
    }
  }

  function ae(a) {
    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) {
      a = a.return;
    }

    Ud = a;
  }

  function be(a) {
    if (!Va || a !== Ud) return !1;
    if (!Wd) return ae(a), Wd = !0, !1;
    var b = a.type;
    if (5 !== a.tag || "head" !== b && "body" !== b && !Ma(b, a.memoizedProps)) for (b = Vd; b;) {
      Xd(a, b), b = Jb(b);
    }
    ae(a);

    if (13 === a.tag) {
      if (!Va) throw Error(q(316));
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(q(317));
      Vd = Nb(a);
    } else Vd = Ud ? Jb(a.stateNode) : null;

    return !0;
  }

  function ce() {
    Va && (Vd = Ud = null, Wd = !1);
  }

  var de = [];

  function ee() {
    for (var a = 0; a < de.length; a++) {
      var b = de[a];
      Sa ? b._workInProgressVersionPrimary = null : b._workInProgressVersionSecondary = null;
    }

    de.length = 0;
  }

  var fe = ca.ReactCurrentDispatcher,
      ge = ca.ReactCurrentBatchConfig,
      he = 0,
      N = null,
      O = null,
      P = null,
      ie = !1,
      je = !1;

  function Q() {
    throw Error(q(321));
  }

  function ke(a, b) {
    if (null === b) return !1;

    for (var c = 0; c < b.length && c < a.length; c++) {
      if (!I(a[c], b[c])) return !1;
    }

    return !0;
  }

  function le(a, b, c, d, e, f) {
    he = f;
    N = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    fe.current = null === a || null === a.memoizedState ? me : ne;
    a = c(d, e);

    if (je) {
      f = 0;

      do {
        je = !1;
        if (!(25 > f)) throw Error(q(301));
        f += 1;
        P = O = null;
        b.updateQueue = null;
        fe.current = oe;
        a = c(d, e);
      } while (je);
    }

    fe.current = pe;
    b = null !== O && null !== O.next;
    he = 0;
    P = O = N = null;
    ie = !1;
    if (b) throw Error(q(300));
    return a;
  }

  function qe() {
    var a = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    null === P ? N.memoizedState = P = a : P = P.next = a;
    return P;
  }

  function re() {
    if (null === O) {
      var a = N.alternate;
      a = null !== a ? a.memoizedState : null;
    } else a = O.next;

    var b = null === P ? N.memoizedState : P.next;
    if (null !== b) P = b, O = a;else {
      if (null === a) throw Error(q(310));
      O = a;
      a = {
        memoizedState: O.memoizedState,
        baseState: O.baseState,
        baseQueue: O.baseQueue,
        queue: O.queue,
        next: null
      };
      null === P ? N.memoizedState = P = a : P = P.next = a;
    }
    return P;
  }

  function se(a, b) {
    return "function" === typeof b ? b(a) : b;
  }

  function te(a) {
    var b = re(),
        c = b.queue;
    if (null === c) throw Error(q(311));
    c.lastRenderedReducer = a;
    var d = O,
        e = d.baseQueue,
        f = c.pending;

    if (null !== f) {
      if (null !== e) {
        var g = e.next;
        e.next = f.next;
        f.next = g;
      }

      d.baseQueue = e = f;
      c.pending = null;
    }

    if (null !== e) {
      e = e.next;
      d = d.baseState;
      var h = g = f = null,
          k = e;

      do {
        var l = k.lane;
        if ((he & l) === l) null !== h && (h = h.next = {
          lane: 0,
          action: k.action,
          eagerReducer: k.eagerReducer,
          eagerState: k.eagerState,
          next: null
        }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);else {
          var n = {
            lane: l,
            action: k.action,
            eagerReducer: k.eagerReducer,
            eagerState: k.eagerState,
            next: null
          };
          null === h ? (g = h = n, f = d) : h = h.next = n;
          N.lanes |= l;
          pd |= l;
        }
        k = k.next;
      } while (null !== k && k !== e);

      null === h ? f = d : h.next = g;
      I(d, b.memoizedState) || (gd = !0);
      b.memoizedState = d;
      b.baseState = f;
      b.baseQueue = h;
      c.lastRenderedState = d;
    }

    return [b.memoizedState, c.dispatch];
  }

  function ue(a) {
    var b = re(),
        c = b.queue;
    if (null === c) throw Error(q(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch,
        e = c.pending,
        f = b.memoizedState;

    if (null !== e) {
      c.pending = null;
      var g = e = e.next;

      do {
        f = a(f, g.action), g = g.next;
      } while (g !== e);

      I(f, b.memoizedState) || (gd = !0);
      b.memoizedState = f;
      null === b.baseQueue && (b.baseState = f);
      c.lastRenderedState = f;
    }

    return [f, d];
  }

  function ve(a, b, c) {
    var d = b._getVersion;
    d = d(b._source);
    var e = Sa ? b._workInProgressVersionPrimary : b._workInProgressVersionSecondary;
    if (null !== e) a = e === d;else if (a = a.mutableReadLanes, a = (he & a) === a) Sa ? b._workInProgressVersionPrimary = d : b._workInProgressVersionSecondary = d, de.push(b);
    if (a) return c(b._source);
    de.push(b);
    throw Error(q(350));
  }

  function we(a, b, c, d) {
    var e = R;
    if (null === e) throw Error(q(349));
    var f = b._getVersion,
        g = f(b._source),
        h = fe.current,
        k = h.useState(function () {
      return ve(e, b, c);
    }),
        l = k[1],
        n = k[0];
    k = P;
    var t = a.memoizedState,
        p = t.refs,
        y = p.getSnapshot,
        x = t.source;
    t = t.subscribe;
    var Y = N;
    a.memoizedState = {
      refs: p,
      source: b,
      subscribe: d
    };
    h.useEffect(function () {
      p.getSnapshot = c;
      p.setSnapshot = l;
      var a = f(b._source);

      if (!I(g, a)) {
        a = c(b._source);
        I(n, a) || (l(a), a = td(Y), e.mutableReadLanes |= a & e.pendingLanes);
        a = e.mutableReadLanes;
        e.entangledLanes |= a;

        for (var d = e.entanglements, h = a; 0 < h;) {
          var k = 31 - mc(h),
              t = 1 << k;
          d[k] |= a;
          h &= ~t;
        }
      }
    }, [c, b, d]);
    h.useEffect(function () {
      return d(b._source, function () {
        var a = p.getSnapshot,
            c = p.setSnapshot;

        try {
          c(a(b._source));
          var d = td(Y);
          e.mutableReadLanes |= d & e.pendingLanes;
        } catch (Oa) {
          c(function () {
            throw Oa;
          });
        }
      });
    }, [b, d]);
    I(y, c) && I(x, b) && I(t, d) || (a = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: se,
      lastRenderedState: n
    }, a.dispatch = l = xe.bind(null, N, a), k.queue = a, k.baseQueue = null, n = ve(e, b, c), k.memoizedState = k.baseState = n);
    return n;
  }

  function ye(a, b, c) {
    var d = re();
    return we(d, a, b, c);
  }

  function ze(a) {
    var b = qe();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = b.queue = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: se,
      lastRenderedState: a
    };
    a = a.dispatch = xe.bind(null, N, a);
    return [b.memoizedState, a];
  }

  function Ae(a, b, c, d) {
    a = {
      tag: a,
      create: b,
      destroy: c,
      deps: d,
      next: null
    };
    b = N.updateQueue;
    null === b ? (b = {
      lastEffect: null
    }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
  }

  function Be(a) {
    var b = qe();
    a = {
      current: a
    };
    return b.memoizedState = a;
  }

  function Ce() {
    return re().memoizedState;
  }

  function De(a, b, c, d) {
    var e = qe();
    N.flags |= a;
    e.memoizedState = Ae(1 | b, c, void 0, void 0 === d ? null : d);
  }

  function Ee(a, b, c, d) {
    var e = re();
    d = void 0 === d ? null : d;
    var f = void 0;

    if (null !== O) {
      var g = O.memoizedState;
      f = g.destroy;

      if (null !== d && ke(d, g.deps)) {
        Ae(b, c, f, d);
        return;
      }
    }

    N.flags |= a;
    e.memoizedState = Ae(1 | b, c, f, d);
  }

  function Fe(a, b) {
    return De(516, 4, a, b);
  }

  function Ge(a, b) {
    return Ee(516, 4, a, b);
  }

  function He(a, b) {
    return Ee(4, 2, a, b);
  }

  function Ie(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function () {
      b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
      b.current = null;
    };
  }

  function Je(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return Ee(4, 2, Ie.bind(null, b, a), c);
  }

  function Ke() {}

  function Le(a, b) {
    var c = re();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && ke(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }

  function Me(a, b) {
    var c = re();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && ke(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }

  function Ne(a, b) {
    var c = Nc();
    Pc(98 > c ? 98 : c, function () {
      a(!0);
    });
    Pc(97 < c ? 97 : c, function () {
      var c = ge.transition;
      ge.transition = 1;

      try {
        a(!1), b();
      } finally {
        ge.transition = c;
      }
    });
  }

  function xe(a, b, c) {
    var d = K(),
        e = td(a),
        f = {
      lane: e,
      action: c,
      eagerReducer: null,
      eagerState: null,
      next: null
    },
        g = b.pending;
    null === g ? f.next = f : (f.next = g.next, g.next = f);
    b.pending = f;
    g = a.alternate;
    if (a === N || null !== g && g === N) je = ie = !0;else {
      if (0 === a.lanes && (null === g || 0 === g.lanes) && (g = b.lastRenderedReducer, null !== g)) try {
        var h = b.lastRenderedState,
            k = g(h, c);
        f.eagerReducer = g;
        f.eagerState = k;
        if (I(k, h)) return;
      } catch (l) {} finally {}
      ud(a, e, d);
    }
  }

  var pe = {
    readContext: J,
    useCallback: Q,
    useContext: Q,
    useEffect: Q,
    useImperativeHandle: Q,
    useLayoutEffect: Q,
    useMemo: Q,
    useReducer: Q,
    useRef: Q,
    useState: Q,
    useDebugValue: Q,
    useDeferredValue: Q,
    useTransition: Q,
    useMutableSource: Q,
    useOpaqueIdentifier: Q,
    unstable_isNewReconciler: !1
  },
      me = {
    readContext: J,
    useCallback: function useCallback(a, b) {
      qe().memoizedState = [a, void 0 === b ? null : b];
      return a;
    },
    useContext: J,
    useEffect: Fe,
    useImperativeHandle: function useImperativeHandle(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return De(4, 2, Ie.bind(null, b, a), c);
    },
    useLayoutEffect: function useLayoutEffect(a, b) {
      return De(4, 2, a, b);
    },
    useMemo: function useMemo(a, b) {
      var c = qe();
      b = void 0 === b ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    },
    useReducer: function useReducer(a, b, c) {
      var d = qe();
      b = void 0 !== c ? c(b) : b;
      d.memoizedState = d.baseState = b;
      a = d.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: a,
        lastRenderedState: b
      };
      a = a.dispatch = xe.bind(null, N, a);
      return [d.memoizedState, a];
    },
    useRef: Be,
    useState: ze,
    useDebugValue: Ke,
    useDeferredValue: function useDeferredValue(a) {
      var b = ze(a),
          c = b[0],
          d = b[1];
      Fe(function () {
        var b = ge.transition;
        ge.transition = 1;

        try {
          d(a);
        } finally {
          ge.transition = b;
        }
      }, [a]);
      return c;
    },
    useTransition: function useTransition() {
      var a = ze(!1),
          b = a[0];
      a = Ne.bind(null, a[1]);
      Be(a);
      return [a, b];
    },
    useMutableSource: function useMutableSource(a, b, c) {
      var d = qe();
      d.memoizedState = {
        refs: {
          getSnapshot: b,
          setSnapshot: null
        },
        source: a,
        subscribe: c
      };
      return we(d, a, b, c);
    },
    useOpaqueIdentifier: function useOpaqueIdentifier() {
      if (Wd) {
        var a = !1,
            b = Xa(function () {
          a || (a = !0, c(Ya()));
          throw Error(q(355));
        }),
            c = ze(b)[1];
        0 === (N.mode & 2) && (N.flags |= 516, Ae(5, function () {
          c(Ya());
        }, void 0, null));
        return b;
      }

      b = Ya();
      ze(b);
      return b;
    },
    unstable_isNewReconciler: !1
  },
      ne = {
    readContext: J,
    useCallback: Le,
    useContext: J,
    useEffect: Ge,
    useImperativeHandle: Je,
    useLayoutEffect: He,
    useMemo: Me,
    useReducer: te,
    useRef: Ce,
    useState: function useState() {
      return te(se);
    },
    useDebugValue: Ke,
    useDeferredValue: function useDeferredValue(a) {
      var b = te(se),
          c = b[0],
          d = b[1];
      Ge(function () {
        var b = ge.transition;
        ge.transition = 1;

        try {
          d(a);
        } finally {
          ge.transition = b;
        }
      }, [a]);
      return c;
    },
    useTransition: function useTransition() {
      var a = te(se)[0];
      return [Ce().current, a];
    },
    useMutableSource: ye,
    useOpaqueIdentifier: function useOpaqueIdentifier() {
      return te(se)[0];
    },
    unstable_isNewReconciler: !1
  },
      oe = {
    readContext: J,
    useCallback: Le,
    useContext: J,
    useEffect: Ge,
    useImperativeHandle: Je,
    useLayoutEffect: He,
    useMemo: Me,
    useReducer: ue,
    useRef: Ce,
    useState: function useState() {
      return ue(se);
    },
    useDebugValue: Ke,
    useDeferredValue: function useDeferredValue(a) {
      var b = ue(se),
          c = b[0],
          d = b[1];
      Ge(function () {
        var b = ge.transition;
        ge.transition = 1;

        try {
          d(a);
        } finally {
          ge.transition = b;
        }
      }, [a]);
      return c;
    },
    useTransition: function useTransition() {
      var a = ue(se)[0];
      return [Ce().current, a];
    },
    useMutableSource: ye,
    useOpaqueIdentifier: function useOpaqueIdentifier() {
      return ue(se)[0];
    },
    unstable_isNewReconciler: !1
  },
      Oe = ca.ReactCurrentOwner,
      gd = !1;

  function S(a, b, c, d) {
    b.child = null === a ? Kd(b, null, c, d) : Jd(b, a.child, c, d);
  }

  function Pe(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    fd(b, e);
    d = le(a, b, c, d, f, e);
    if (null !== a && !gd) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, Re(a, b, e);
    b.flags |= 1;
    S(a, b, d, e);
    return b.child;
  }

  function Se(a, b, c, d, e, f) {
    if (null === a) {
      var g = c.type;
      if ("function" === typeof g && !Te(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, Ue(a, b, g, d, e, f);
      a = Gd(c.type, null, d, b, b.mode, f);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }

    g = a.child;
    if (0 === (e & f) && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : Vc, c(e, d) && a.ref === b.ref)) return Re(a, b, f);
    b.flags |= 1;
    a = Ed(g, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }

  function Ue(a, b, c, d, e, f) {
    if (null !== a && Vc(a.memoizedProps, d) && a.ref === b.ref) if (gd = !1, 0 !== (f & e)) 0 !== (a.flags & 16384) && (gd = !0);else return b.lanes = a.lanes, Re(a, b, f);
    return Ve(a, b, c, d, f);
  }

  function We(a, b, c) {
    var d = b.pendingProps,
        e = d.children,
        f = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode || "unstable-defer-without-hiding" === d.mode) {
      if (0 === (b.mode & 4)) b.memoizedState = {
        baseLanes: 0
      }, Xe(b, c);else if (0 !== (c & 1073741824)) b.memoizedState = {
        baseLanes: 0
      }, Xe(b, null !== f ? f.baseLanes : c);else return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
        baseLanes: a
      }, Xe(b, a), null;
    } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, Xe(b, d);
    S(a, b, e, c);
    return b.child;
  }

  function Ye(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 128;
  }

  function Ve(a, b, c, d, e) {
    var f = E(c) ? Yb : B.current;
    f = Zb(b, f);
    fd(b, e);
    c = le(a, b, c, d, f, e);
    if (null !== a && !gd) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, Re(a, b, e);
    b.flags |= 1;
    S(a, b, c, e);
    return b.child;
  }

  function Ze(a, b, c, d, e) {
    if (E(c)) {
      var f = !0;
      cc(b);
    } else f = !1;

    fd(b, e);
    if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), xd(b, c, d), zd(b, c, d, e), d = !0;else if (null === a) {
      var g = b.stateNode,
          h = b.memoizedProps;
      g.props = h;
      var k = g.context,
          l = c.contextType;
      "object" === _typeof(l) && null !== l ? l = J(l) : (l = E(c) ? Yb : B.current, l = Zb(b, l));
      var n = c.getDerivedStateFromProps,
          t = "function" === typeof n || "function" === typeof g.getSnapshotBeforeUpdate;
      t || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && yd(b, g, d, l);
      hd = !1;
      var p = b.memoizedState;
      g.state = p;
      od(b, d, g, e);
      k = b.memoizedState;
      h !== d || p !== k || D.current || hd ? ("function" === typeof n && (sd(b, c, n, d), k = b.memoizedState), (h = hd || wd(b, c, h, d, p, k, l)) ? (t || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4)) : ("function" === typeof g.componentDidMount && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4), d = !1);
    } else {
      g = b.stateNode;
      jd(a, b);
      h = b.memoizedProps;
      l = b.type === b.elementType ? h : Xc(b.type, h);
      g.props = l;
      t = b.pendingProps;
      p = g.context;
      k = c.contextType;
      "object" === _typeof(k) && null !== k ? k = J(k) : (k = E(c) ? Yb : B.current, k = Zb(b, k));
      var y = c.getDerivedStateFromProps;
      (n = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== t || p !== k) && yd(b, g, d, k);
      hd = !1;
      p = b.memoizedState;
      g.state = p;
      od(b, d, g, e);
      var x = b.memoizedState;
      h !== t || p !== x || D.current || hd ? ("function" === typeof y && (sd(b, c, y, d), x = b.memoizedState), (l = hd || wd(b, c, l, d, p, x, k)) ? (n || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), d = !1);
    }
    return $e(a, b, c, d, f, e);
  }

  function $e(a, b, c, d, e, f) {
    Ye(a, b);
    var g = 0 !== (b.flags & 64);
    if (!d && !g) return e && dc(b, c, !1), Re(a, b, f);
    d = b.stateNode;
    Oe.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = Jd(b, a.child, null, f), b.child = Jd(b, null, h, f)) : S(a, b, h, f);
    b.memoizedState = d.state;
    e && dc(b, c, !0);
    return b.child;
  }

  function af(a) {
    var b = a.stateNode;
    b.pendingContext ? ac(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ac(a, b.context, !1);
    Pd(a, b.containerInfo);
  }

  var bf = {
    dehydrated: null,
    retryLane: 0
  };

  function cf(a, b, c) {
    var d = b.pendingProps,
        e = M.current,
        f = !1,
        g;
    (g = 0 !== (b.flags & 64)) || (g = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
    g ? (f = !0, b.flags &= -65) : null !== a && null === a.memoizedState || void 0 === d.fallback || !0 === d.unstable_avoidThisFallback || (e |= 1);
    A(M, e & 1);

    if (null === a) {
      void 0 !== d.fallback && $d(b);
      a = d.children;
      e = d.fallback;
      if (f) return a = df(b, a, e, c), b.child.memoizedState = {
        baseLanes: c
      }, b.memoizedState = bf, a;
      if ("number" === typeof d.unstable_expectedLoadTime) return a = df(b, a, e, c), b.child.memoizedState = {
        baseLanes: c
      }, b.memoizedState = bf, b.lanes = 33554432, a;
      c = ef({
        mode: "visible",
        children: a
      }, b.mode, c, null);
      c.return = b;
      return b.child = c;
    }

    if (null !== a.memoizedState) {
      if (f) return d = ff(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
        baseLanes: c
      } : {
        baseLanes: e.baseLanes | c
      }, f.childLanes = a.childLanes & ~c, b.memoizedState = bf, d;
      c = gf(a, b, d.children, c);
      b.memoizedState = null;
      return c;
    }

    if (f) return d = ff(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
      baseLanes: c
    } : {
      baseLanes: e.baseLanes | c
    }, f.childLanes = a.childLanes & ~c, b.memoizedState = bf, d;
    c = gf(a, b, d.children, c);
    b.memoizedState = null;
    return c;
  }

  function df(a, b, c, d) {
    var e = a.mode,
        f = a.child;
    b = {
      mode: "hidden",
      children: b
    };
    0 === (e & 2) && null !== f ? (f.childLanes = 0, f.pendingProps = b) : f = ef(b, e, 0, null);
    c = Id(c, e, d, null);
    f.return = a;
    c.return = a;
    f.sibling = c;
    a.child = f;
    return c;
  }

  function gf(a, b, c, d) {
    var e = a.child;
    a = e.sibling;
    c = Ed(e, {
      mode: "visible",
      children: c
    });
    0 === (b.mode & 2) && (c.lanes = d);
    c.return = b;
    c.sibling = null;
    null !== a && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
    return b.child = c;
  }

  function ff(a, b, c, d, e) {
    var f = b.mode,
        g = a.child;
    a = g.sibling;
    var h = {
      mode: "hidden",
      children: c
    };
    0 === (f & 2) && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, null !== g ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Ed(g, h);
    null !== a ? d = Ed(a, d) : (d = Id(d, f, e, null), d.flags |= 2);
    d.return = b;
    c.return = b;
    c.sibling = d;
    b.child = c;
    return d;
  }

  function hf(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    ed(a.return, b);
  }

  function jf(a, b, c, d, e, f) {
    var g = a.memoizedState;
    null === g ? a.memoizedState = {
      isBackwards: b,
      rendering: null,
      renderingStartTime: 0,
      last: d,
      tail: c,
      tailMode: e,
      lastEffect: f
    } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
  }

  function kf(a, b, c) {
    var d = b.pendingProps,
        e = d.revealOrder,
        f = d.tail;
    S(a, b, d.children, c);
    d = M.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 64;else {
      if (null !== a && 0 !== (a.flags & 64)) a: for (a = b.child; null !== a;) {
        if (13 === a.tag) null !== a.memoizedState && hf(a, c);else if (19 === a.tag) hf(a, c);else if (null !== a.child) {
          a.child.return = a;
          a = a.child;
          continue;
        }
        if (a === b) break a;

        for (; null === a.sibling;) {
          if (null === a.return || a.return === b) break a;
          a = a.return;
        }

        a.sibling.return = a.return;
        a = a.sibling;
      }
      d &= 1;
    }
    A(M, d);
    if (0 === (b.mode & 2)) b.memoizedState = null;else switch (e) {
      case "forwards":
        c = b.child;

        for (e = null; null !== c;) {
          a = c.alternate, null !== a && null === Td(a) && (e = c), c = c.sibling;
        }

        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        jf(b, !1, e, c, f, b.lastEffect);
        break;

      case "backwards":
        c = null;
        e = b.child;

        for (b.child = null; null !== e;) {
          a = e.alternate;

          if (null !== a && null === Td(a)) {
            b.child = e;
            break;
          }

          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }

        jf(b, !0, c, null, f, b.lastEffect);
        break;

      case "together":
        jf(b, !1, null, null, void 0, b.lastEffect);
        break;

      default:
        b.memoizedState = null;
    }
    return b.child;
  }

  function Re(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    pd |= b.lanes;

    if (0 !== (c & b.childLanes)) {
      if (null !== a && b.child !== a.child) throw Error(q(153));

      if (null !== b.child) {
        a = b.child;
        c = Ed(a, a.pendingProps);
        b.child = c;

        for (c.return = b; null !== a.sibling;) {
          a = a.sibling, c = c.sibling = Ed(a, a.pendingProps), c.return = b;
        }

        c.sibling = null;
      }

      return b.child;
    }

    return null;
  }

  function lf(a) {
    a.flags |= 4;
  }

  var _mf, nf, of, pf;

  if (Ta) _mf = function mf(a, b) {
    for (var c = b.child; null !== c;) {
      if (5 === c.tag || 6 === c.tag) Ja(a, c.stateNode);else if (4 !== c.tag && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;

      for (; null === c.sibling;) {
        if (null === c.return || c.return === b) return;
        c = c.return;
      }

      c.sibling.return = c.return;
      c = c.sibling;
    }
  }, nf = function nf() {}, of = function of(a, b, c, d, e) {
    a = a.memoizedProps;

    if (a !== d) {
      var f = b.stateNode,
          g = Od(L.current);
      c = La(f, c, a, d, e, g);
      (b.updateQueue = c) && lf(b);
    }
  }, pf = function pf(a, b, c, d) {
    c !== d && lf(b);
  };else if (Ua) {
    _mf = function mf(a, b, c, d) {
      for (var e = b.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = Db(f, e.type, e.memoizedProps, e));
          Ja(a, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = Eb(f, e.memoizedProps, e)), Ja(a, f);else if (4 !== e.tag) {
          if (13 === e.tag && 0 !== (e.flags & 4) && (f = null !== e.memoizedState)) {
            var g = e.child;

            if (null !== g && (null !== g.child && (g.child.return = g, _mf(a, g, !0, f)), f = g.sibling, null !== f)) {
              f.return = e;
              e = f;
              continue;
            }
          }

          if (null !== e.child) {
            e.child.return = e;
            e = e.child;
            continue;
          }
        }

        if (e === b) break;

        for (; null === e.sibling;) {
          if (null === e.return || e.return === b) return;
          e = e.return;
        }

        e.sibling.return = e.return;
        e = e.sibling;
      }
    };

    var qf = function qf(a, b, c, d) {
      for (var e = b.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = Db(f, e.type, e.memoizedProps, e));
          Ab(a, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = Eb(f, e.memoizedProps, e)), Ab(a, f);else if (4 !== e.tag) {
          if (13 === e.tag && 0 !== (e.flags & 4) && (f = null !== e.memoizedState)) {
            var g = e.child;

            if (null !== g && (null !== g.child && (g.child.return = g, qf(a, g, !0, f)), f = g.sibling, null !== f)) {
              f.return = e;
              e = f;
              continue;
            }
          }

          if (null !== e.child) {
            e.child.return = e;
            e = e.child;
            continue;
          }
        }

        if (e === b) break;

        for (; null === e.sibling;) {
          if (null === e.return || e.return === b) return;
          e = e.return;
        }

        e.sibling.return = e.return;
        e = e.sibling;
      }
    };

    nf = function nf(a) {
      var b = a.stateNode;

      if (null !== a.firstEffect) {
        var c = b.containerInfo,
            d = zb(c);
        qf(d, a, !1, !1);
        b.pendingChildren = d;
        lf(a);
        Bb(c, d);
      }
    };

    of = function of(a, b, c, d, e) {
      var f = a.stateNode,
          g = a.memoizedProps;
      if ((a = null === b.firstEffect) && g === d) b.stateNode = f;else {
        var h = b.stateNode,
            k = Od(L.current),
            l = null;
        g !== d && (l = La(h, c, g, d, e, k));
        a && null === l ? b.stateNode = f : (f = yb(f, l, c, g, d, b, a, h), Ka(f, c, d, e, k) && lf(b), b.stateNode = f, a ? lf(b) : _mf(f, b, !1, !1));
      }
    };

    pf = function pf(a, b, c, d) {
      c !== d ? (a = Od(Nd.current), c = Od(L.current), b.stateNode = Na(d, a, c, b), lf(b)) : b.stateNode = a.stateNode;
    };
  } else nf = function nf() {}, of = function of() {}, pf = function pf() {};

  function rf(a, b) {
    if (!Wd) switch (a.tailMode) {
      case "hidden":
        b = a.tail;

        for (var c = null; null !== b;) {
          null !== b.alternate && (c = b), b = b.sibling;
        }

        null === c ? a.tail = null : c.sibling = null;
        break;

      case "collapsed":
        c = a.tail;

        for (var d = null; null !== c;) {
          null !== c.alternate && (d = c), c = c.sibling;
        }

        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
  }

  function sf(a, b, c) {
    var d = b.pendingProps;

    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;

      case 1:
        return E(b.type) && $b(), null;

      case 3:
        Qd();
        z(D);
        z(B);
        ee();
        d = b.stateNode;
        d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
        if (null === a || null === a.child) be(b) ? lf(b) : d.hydrate || (b.flags |= 256);
        nf(b);
        return null;

      case 5:
        Sd(b);
        var e = Od(Nd.current);
        c = b.type;
        if (null !== a && null != b.stateNode) of(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);else {
          if (!d) {
            if (null === b.stateNode) throw Error(q(166));
            return null;
          }

          a = Od(L.current);

          if (be(b)) {
            if (!Va) throw Error(q(175));
            a = Lb(b.stateNode, b.type, b.memoizedProps, e, a, b);
            b.updateQueue = a;
            null !== a && lf(b);
          } else {
            var f = Ia(c, d, e, a, b);

            _mf(f, b, !1, !1);

            b.stateNode = f;
            Ka(f, c, d, e, a) && lf(b);
          }

          null !== b.ref && (b.flags |= 128);
        }
        return null;

      case 6:
        if (a && null != b.stateNode) pf(a, b, a.memoizedProps, d);else {
          if ("string" !== typeof d && null === b.stateNode) throw Error(q(166));
          a = Od(Nd.current);
          e = Od(L.current);

          if (be(b)) {
            if (!Va) throw Error(q(176));
            Mb(b.stateNode, b.memoizedProps, b) && lf(b);
          } else b.stateNode = Na(d, a, e, b);
        }
        return null;

      case 13:
        z(M);
        d = b.memoizedState;
        if (0 !== (b.flags & 64)) return b.lanes = c, b;
        d = null !== d;
        e = !1;
        null === a ? void 0 !== b.memoizedProps.fallback && be(b) : e = null !== a.memoizedState;
        if (d && !e && 0 !== (b.mode & 2)) if (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (M.current & 1)) 0 === T && (T = 3);else {
          if (0 === T || 3 === T) T = 4;
          null === R || 0 === (pd & 134217727) && 0 === (tf & 134217727) || uf(R, U);
        }
        Ua && d && (b.flags |= 4);
        Ta && (d || e) && (b.flags |= 4);
        return null;

      case 4:
        return Qd(), nf(b), null === a && ab(b.stateNode.containerInfo), null;

      case 10:
        return dd(b), null;

      case 17:
        return E(b.type) && $b(), null;

      case 19:
        z(M);
        d = b.memoizedState;
        if (null === d) return null;
        e = 0 !== (b.flags & 64);
        f = d.rendering;
        if (null === f) {
          if (e) rf(d, !1);else {
            if (0 !== T || null !== a && 0 !== (a.flags & 64)) for (a = b.child; null !== a;) {
              f = Td(a);

              if (null !== f) {
                b.flags |= 64;
                rf(d, !1);
                a = f.updateQueue;
                null !== a && (b.updateQueue = a, b.flags |= 4);
                null === d.lastEffect && (b.firstEffect = null);
                b.lastEffect = d.lastEffect;
                a = c;

                for (d = b.child; null !== d;) {
                  e = d, c = a, e.flags &= 2, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null, f = e.alternate, null === f ? (e.childLanes = 0, e.lanes = c, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = f.childLanes, e.lanes = f.lanes, e.child = f.child, e.memoizedProps = f.memoizedProps, e.memoizedState = f.memoizedState, e.updateQueue = f.updateQueue, e.type = f.type, c = f.dependencies, e.dependencies = null === c ? null : {
                    lanes: c.lanes,
                    firstContext: c.firstContext
                  }), d = d.sibling;
                }

                A(M, M.current & 1 | 2);
                return b.child;
              }

              a = a.sibling;
            }
            null !== d.tail && G() > vf && (b.flags |= 64, e = !0, rf(d, !1), b.lanes = 33554432);
          }
        } else {
          if (!e) if (a = Td(f), null !== a) {
            if (b.flags |= 64, e = !0, a = a.updateQueue, null !== a && (b.updateQueue = a, b.flags |= 4), rf(d, !0), null === d.tail && "hidden" === d.tailMode && !f.alternate && !Wd) return b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null;
          } else 2 * G() - d.renderingStartTime > vf && 1073741824 !== c && (b.flags |= 64, e = !0, rf(d, !1), b.lanes = 33554432);
          d.isBackwards ? (f.sibling = b.child, b.child = f) : (a = d.last, null !== a ? a.sibling = f : b.child = f, d.last = f);
        }
        return null !== d.tail ? (a = d.tail, d.rendering = a, d.tail = a.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = G(), a.sibling = null, b = M.current, A(M, e ? b & 1 | 2 : b & 1), a) : null;

      case 23:
      case 24:
        return wf(), null !== a && null !== a.memoizedState !== (null !== b.memoizedState) && "unstable-defer-without-hiding" !== d.mode && (b.flags |= 4), null;
    }

    throw Error(q(156, b.tag));
  }

  function xf(a) {
    switch (a.tag) {
      case 1:
        E(a.type) && $b();
        var b = a.flags;
        return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;

      case 3:
        Qd();
        z(D);
        z(B);
        ee();
        b = a.flags;
        if (0 !== (b & 64)) throw Error(q(285));
        a.flags = b & -4097 | 64;
        return a;

      case 5:
        return Sd(a), null;

      case 13:
        return z(M), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;

      case 19:
        return z(M), null;

      case 4:
        return Qd(), null;

      case 10:
        return dd(a), null;

      case 23:
      case 24:
        return wf(), null;

      default:
        return null;
    }
  }

  function yf(a, b) {
    try {
      var c = "",
          d = b;

      do {
        c += Wc(d), d = d.return;
      } while (d);

      var e = c;
    } catch (f) {
      e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }

    return {
      value: a,
      source: b,
      stack: e
    };
  }

  function zf(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }

  var Af = "function" === typeof WeakMap ? WeakMap : Map;

  function Bf(a, b, c) {
    c = kd(-1, c);
    c.tag = 3;
    c.payload = {
      element: null
    };
    var d = b.value;

    c.callback = function () {
      Cf || (Cf = !0, Df = d);
      zf(a, b);
    };

    return c;
  }

  function Ef(a, b, c) {
    c = kd(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;

    if ("function" === typeof d) {
      var e = b.value;

      c.payload = function () {
        zf(a, b);
        return d(e);
      };
    }

    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
      "function" !== typeof d && (null === Ff ? Ff = new Set([this]) : Ff.add(this), zf(a, b));
      var c = b.stack;
      this.componentDidCatch(b.value, {
        componentStack: null !== c ? c : ""
      });
    });
    return c;
  }

  var Gf = "function" === typeof WeakSet ? WeakSet : Set;

  function Hf(a) {
    var b = a.ref;
    if (null !== b) if ("function" === typeof b) try {
      b(null);
    } catch (c) {
      If(a, c);
    } else b.current = null;
  }

  function Jf(a, b) {
    switch (b.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;

      case 1:
        if (b.flags & 256 && null !== a) {
          var c = a.memoizedProps,
              d = a.memoizedState;
          a = b.stateNode;
          b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : Xc(b.type, c), d);
          a.__reactInternalSnapshotBeforeUpdate = b;
        }

        return;

      case 3:
        Ta && b.flags & 256 && xb(b.stateNode.containerInfo);
        return;

      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }

    throw Error(q(163));
  }

  function Kf(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;

    if (null !== b) {
      var c = b = b.next;

      do {
        if ((c.tag & a) === a) {
          var d = c.destroy;
          c.destroy = void 0;
          void 0 !== d && d();
        }

        c = c.next;
      } while (c !== b);
    }
  }

  function Lf(a, b, c) {
    switch (c.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        b = c.updateQueue;
        b = null !== b ? b.lastEffect : null;

        if (null !== b) {
          a = b = b.next;

          do {
            if (3 === (a.tag & 3)) {
              var d = a.create;
              a.destroy = d();
            }

            a = a.next;
          } while (a !== b);
        }

        b = c.updateQueue;
        b = null !== b ? b.lastEffect : null;

        if (null !== b) {
          a = b = b.next;

          do {
            var e = a;
            d = e.next;
            e = e.tag;
            0 !== (e & 4) && 0 !== (e & 1) && (Mf(c, a), Nf(c, a));
            a = d;
          } while (a !== b);
        }

        return;

      case 1:
        a = c.stateNode;
        c.flags & 4 && (null === b ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : Xc(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
        b = c.updateQueue;
        null !== b && qd(c, b, a);
        return;

      case 3:
        b = c.updateQueue;

        if (null !== b) {
          a = null;
          if (null !== c.child) switch (c.child.tag) {
            case 5:
              a = Da(c.child.stateNode);
              break;

            case 1:
              a = c.child.stateNode;
          }
          qd(c, b, a);
        }

        return;

      case 5:
        a = c.stateNode;
        null === b && c.flags & 4 && mb(a, c.type, c.memoizedProps, c);
        return;

      case 6:
        return;

      case 4:
        return;

      case 12:
        return;

      case 13:
        Va && null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && Pb(c))));
        return;

      case 19:
      case 17:
      case 20:
      case 21:
      case 23:
      case 24:
        return;
    }

    throw Error(q(163));
  }

  function Of(a, b) {
    if (Ta) for (var c = a;;) {
      if (5 === c.tag) {
        var d = c.stateNode;
        b ? tb(d) : vb(c.stateNode, c.memoizedProps);
      } else if (6 === c.tag) d = c.stateNode, b ? ub(d) : wb(d, c.memoizedProps);else if ((23 !== c.tag && 24 !== c.tag || null === c.memoizedState || c === a) && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }

      if (c === a) break;

      for (; null === c.sibling;) {
        if (null === c.return || c.return === a) return;
        c = c.return;
      }

      c.sibling.return = c.return;
      c = c.sibling;
    }
  }

  function Pf(a, b) {
    if (fc && "function" === typeof fc.onCommitFiberUnmount) try {
      fc.onCommitFiberUnmount(ec, b);
    } catch (f) {}

    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        a = b.updateQueue;

        if (null !== a && (a = a.lastEffect, null !== a)) {
          var c = a = a.next;

          do {
            var d = c,
                e = d.destroy;
            d = d.tag;
            if (void 0 !== e) if (0 !== (d & 4)) Mf(b, c);else {
              d = b;

              try {
                e();
              } catch (f) {
                If(d, f);
              }
            }
            c = c.next;
          } while (c !== a);
        }

        break;

      case 1:
        Hf(b);
        a = b.stateNode;
        if ("function" === typeof a.componentWillUnmount) try {
          a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
        } catch (f) {
          If(b, f);
        }
        break;

      case 5:
        Hf(b);
        break;

      case 4:
        Ta ? Qf(a, b) : Ua && Ua && (b = b.stateNode.containerInfo, a = zb(b), Cb(b, a));
    }
  }

  function Rf(a, b) {
    for (var c = b;;) {
      if (Pf(a, c), null === c.child || Ta && 4 === c.tag) {
        if (c === b) break;

        for (; null === c.sibling;) {
          if (null === c.return || c.return === b) return;
          c = c.return;
        }

        c.sibling.return = c.return;
        c = c.sibling;
      } else c.child.return = c, c = c.child;
    }
  }

  function Sf(a) {
    a.alternate = null;
    a.child = null;
    a.dependencies = null;
    a.firstEffect = null;
    a.lastEffect = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.return = null;
    a.updateQueue = null;
  }

  function Tf(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }

  function Uf(a) {
    if (Ta) {
      a: {
        for (var b = a.return; null !== b;) {
          if (Tf(b)) break a;
          b = b.return;
        }

        throw Error(q(160));
      }

      var c = b;
      b = c.stateNode;

      switch (c.tag) {
        case 5:
          var d = !1;
          break;

        case 3:
          b = b.containerInfo;
          d = !0;
          break;

        case 4:
          b = b.containerInfo;
          d = !0;
          break;

        default:
          throw Error(q(161));
      }

      c.flags & 16 && (sb(b), c.flags &= -17);

      a: b: for (c = a;;) {
        for (; null === c.sibling;) {
          if (null === c.return || Tf(c.return)) {
            c = null;
            break a;
          }

          c = c.return;
        }

        c.sibling.return = c.return;

        for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
          if (c.flags & 2) continue b;
          if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
        }

        if (!(c.flags & 2)) {
          c = c.stateNode;
          break a;
        }
      }

      d ? Vf(a, c, b) : Wf(a, c, b);
    }
  }

  function Vf(a, b, c) {
    var d = a.tag,
        e = 5 === d || 6 === d;
    if (e) a = e ? a.stateNode : a.stateNode.instance, b ? pb(c, a, b) : kb(c, a);else if (4 !== d && (a = a.child, null !== a)) for (Vf(a, b, c), a = a.sibling; null !== a;) {
      Vf(a, b, c), a = a.sibling;
    }
  }

  function Wf(a, b, c) {
    var d = a.tag,
        e = 5 === d || 6 === d;
    if (e) a = e ? a.stateNode : a.stateNode.instance, b ? ob(c, a, b) : jb(c, a);else if (4 !== d && (a = a.child, null !== a)) for (Wf(a, b, c), a = a.sibling; null !== a;) {
      Wf(a, b, c), a = a.sibling;
    }
  }

  function Qf(a, b) {
    for (var c = b, d = !1, e, f;;) {
      if (!d) {
        d = c.return;

        a: for (;;) {
          if (null === d) throw Error(q(160));
          e = d.stateNode;

          switch (d.tag) {
            case 5:
              f = !1;
              break a;

            case 3:
              e = e.containerInfo;
              f = !0;
              break a;

            case 4:
              e = e.containerInfo;
              f = !0;
              break a;
          }

          d = d.return;
        }

        d = !0;
      }

      if (5 === c.tag || 6 === c.tag) Rf(a, c), f ? rb(e, c.stateNode) : qb(e, c.stateNode);else if (4 === c.tag) {
        if (null !== c.child) {
          e = c.stateNode.containerInfo;
          f = !0;
          c.child.return = c;
          c = c.child;
          continue;
        }
      } else if (Pf(a, c), null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;

      for (; null === c.sibling;) {
        if (null === c.return || c.return === b) return;
        c = c.return;
        4 === c.tag && (d = !1);
      }

      c.sibling.return = c.return;
      c = c.sibling;
    }
  }

  function Xf(a, b) {
    if (Ta) {
      switch (b.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          Kf(3, b);
          return;

        case 1:
          return;

        case 5:
          var c = b.stateNode;

          if (null != c) {
            var d = b.memoizedProps;
            a = null !== a ? a.memoizedProps : d;
            var e = b.type,
                f = b.updateQueue;
            b.updateQueue = null;
            null !== f && nb(c, f, e, a, d, b);
          }

          return;

        case 6:
          if (null === b.stateNode) throw Error(q(162));
          c = b.memoizedProps;
          lb(b.stateNode, null !== a ? a.memoizedProps : c, c);
          return;

        case 3:
          Va && (b = b.stateNode, b.hydrate && (b.hydrate = !1, Ob(b.containerInfo)));
          return;

        case 12:
          return;

        case 13:
          Yf(b);
          Zf(b);
          return;

        case 19:
          Zf(b);
          return;

        case 17:
          return;

        case 23:
        case 24:
          Of(b, null !== b.memoizedState);
          return;
      }

      throw Error(q(163));
    }

    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        Kf(3, b);
        return;

      case 12:
        return;

      case 13:
        Yf(b);
        Zf(b);
        return;

      case 19:
        Zf(b);
        return;

      case 3:
        Va && (c = b.stateNode, c.hydrate && (c.hydrate = !1, Ob(c.containerInfo)));
        break;

      case 23:
      case 24:
        return;
    }

    a: if (Ua) {
      switch (b.tag) {
        case 1:
        case 5:
        case 6:
        case 20:
          break a;

        case 3:
        case 4:
          b = b.stateNode;
          Cb(b.containerInfo, b.pendingChildren);
          break a;
      }

      throw Error(q(163));
    }
  }

  function Yf(a) {
    null !== a.memoizedState && ($f = G(), Ta && Of(a.child, !0));
  }

  function Zf(a) {
    var b = a.updateQueue;

    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new Gf());
      b.forEach(function (b) {
        var d = ag.bind(null, a, b);
        c.has(b) || (c.add(b), b.then(d, d));
      });
    }
  }

  function bg(a, b) {
    return null !== a && (a = a.memoizedState, null === a || null !== a.dehydrated) ? (b = b.memoizedState, null !== b && null === b.dehydrated) : !1;
  }

  var cg = 0,
      dg = 1,
      eg = 2,
      fg = 3,
      gg = 4;

  if ("function" === typeof Symbol && Symbol.for) {
    var hg = Symbol.for;
    cg = hg("selector.component");
    dg = hg("selector.has_pseudo_class");
    eg = hg("selector.role");
    fg = hg("selector.test_id");
    gg = hg("selector.text");
  }

  function ig(a) {
    var b = Wa(a);

    if (null != b) {
      if ("string" !== typeof b.memoizedProps["data-testname"]) throw Error(q(364));
      return b;
    }

    a = cb(a);
    if (null === a) throw Error(q(362));
    return a.stateNode.current;
  }

  function jg(a, b) {
    switch (b.$$typeof) {
      case cg:
        if (a.type === b.value) return !0;
        break;

      case dg:
        a: {
          b = b.value;
          a = [a, 0];

          for (var c = 0; c < a.length;) {
            var d = a[c++],
                e = a[c++],
                f = b[e];

            if (5 !== d.tag || !fb(d)) {
              for (; null != f && jg(d, f);) {
                e++, f = b[e];
              }

              if (e === b.length) {
                b = !0;
                break a;
              } else for (d = d.child; null !== d;) {
                a.push(d, e), d = d.sibling;
              }
            }
          }

          b = !1;
        }

        return b;

      case eg:
        if (5 === a.tag && gb(a.stateNode, b.value)) return !0;
        break;

      case gg:
        if (5 === a.tag || 6 === a.tag) if (a = eb(a), null !== a && 0 <= a.indexOf(b.value)) return !0;
        break;

      case fg:
        if (5 === a.tag && (a = a.memoizedProps["data-testname"], "string" === typeof a && a.toLowerCase() === b.value.toLowerCase())) return !0;
        break;

      default:
        throw Error(q(365, b));
    }

    return !1;
  }

  function kg(a) {
    switch (a.$$typeof) {
      case cg:
        return "<" + (wa(a.value) || "Unknown") + ">";

      case dg:
        return ":has(" + (kg(a) || "") + ")";

      case eg:
        return '[role="' + a.value + '"]';

      case gg:
        return '"' + a.value + '"';

      case fg:
        return '[data-testname="' + a.value + '"]';

      default:
        throw Error(q(365, a));
    }
  }

  function lg(a, b) {
    var c = [];
    a = [a, 0];

    for (var d = 0; d < a.length;) {
      var e = a[d++],
          f = a[d++],
          g = b[f];

      if (5 !== e.tag || !fb(e)) {
        for (; null != g && jg(e, g);) {
          f++, g = b[f];
        }

        if (f === b.length) c.push(e);else for (e = e.child; null !== e;) {
          a.push(e, f), e = e.sibling;
        }
      }
    }

    return c;
  }

  function mg(a, b) {
    if (!bb) throw Error(q(363));
    a = ig(a);
    a = lg(a, b);
    b = [];
    a = Array.from(a);

    for (var c = 0; c < a.length;) {
      var d = a[c++];
      if (5 === d.tag) fb(d) || b.push(d.stateNode);else for (d = d.child; null !== d;) {
        a.push(d), d = d.sibling;
      }
    }

    return b;
  }

  var ng = null;

  function og(a) {
    if (null === ng) try {
      var b = ("require" + Math.random()).slice(0, 7);
      ng = (module && module[b]).call(module, "timers").setImmediate;
    } catch (c) {
      ng = function ng(a) {
        var b = new MessageChannel();
        b.port1.onmessage = a;
        b.port2.postMessage(void 0);
      };
    }
    return ng(a);
  }

  var pg = Math.ceil,
      qg = ca.ReactCurrentDispatcher,
      rg = ca.ReactCurrentOwner,
      sg = ca.IsSomeRendererActing,
      V = 0,
      R = null,
      W = null,
      U = 0,
      tg = 0,
      ug = Wb(0),
      T = 0,
      vg = null,
      wg = 0,
      pd = 0,
      tf = 0,
      xg = 0,
      yg = null,
      $f = 0,
      vf = Infinity;

  function zg() {
    vf = G() + 500;
  }

  var X = null,
      Cf = !1,
      Df = null,
      Ff = null,
      Ag = !1,
      Bg = null,
      Cg = 90,
      Dg = [],
      Eg = [],
      Fg = null,
      Gg = 0,
      Hg = null,
      Ig = -1,
      Jg = 0,
      Kg = 0,
      Lg = null,
      Mg = !1;

  function K() {
    return 0 !== (V & 48) ? G() : -1 !== Ig ? Ig : Ig = G();
  }

  function td(a) {
    a = a.mode;
    if (0 === (a & 2)) return 1;
    if (0 === (a & 4)) return 99 === Nc() ? 1 : 2;
    0 === Jg && (Jg = wg);

    if (0 !== Sc.transition) {
      0 !== Kg && (Kg = null !== yg ? yg.pendingLanes : 0);
      a = Jg;
      var b = 4186112 & ~Kg;
      b &= -b;
      0 === b && (a = 4186112 & ~a, b = a & -a, 0 === b && (b = 8192));
      return b;
    }

    a = Nc();
    0 !== (V & 4) && 98 === a ? a = oc(12, Jg) : (a = jc(a), a = oc(a, Jg));
    return a;
  }

  function ud(a, b, c) {
    if (50 < Gg) throw Gg = 0, Hg = null, Error(q(185));
    a = Ng(a, b);
    if (null === a) return null;
    rc(a, b, c);
    a === R && (tf |= b, 4 === T && uf(a, U));
    var d = Nc();
    1 === b ? 0 !== (V & 8) && 0 === (V & 48) ? Og(a) : (Z(a, c), 0 === V && (zg(), H())) : (0 === (V & 4) || 98 !== d && 99 !== d || (null === Fg ? Fg = new Set([a]) : Fg.add(a)), Z(a, c));
    yg = a;
  }

  function Ng(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;

    for (a = a.return; null !== a;) {
      a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
    }

    return 3 === c.tag ? c.stateNode : null;
  }

  function Z(a, b) {
    for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g;) {
      var h = 31 - mc(g),
          k = 1 << h,
          l = f[h];

      if (-1 === l) {
        if (0 === (k & d) || 0 !== (k & e)) {
          l = b;
          ic(k);
          var n = F;
          f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5E3 : -1;
        }
      } else l <= b && (a.expiredLanes |= k);

      g &= ~k;
    }

    d = lc(a, a === R ? U : 0);
    b = F;
    if (0 === d) null !== c && (c !== Hc && xc(c), a.callbackNode = null, a.callbackPriority = 0);else {
      if (null !== c) {
        if (a.callbackPriority === b) return;
        c !== Hc && xc(c);
      }

      15 === b ? (c = Og.bind(null, a), null === Jc ? (Jc = [c], Kc = wc(Cc, Rc)) : Jc.push(c), c = Hc) : 14 === b ? c = Qc(99, Og.bind(null, a)) : (c = kc(b), c = Qc(c, Pg.bind(null, a)));
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  }

  function Pg(a) {
    Ig = -1;
    Kg = Jg = 0;
    if (0 !== (V & 48)) throw Error(q(327));
    var b = a.callbackNode;
    if (Qg() && a.callbackNode !== b) return null;
    var c = lc(a, a === R ? U : 0);
    if (0 === c) return null;
    var d = c;
    var e = V;
    V |= 16;
    var f = Rg();
    if (R !== a || U !== d) zg(), Sg(a, d);

    do {
      try {
        Tg();
        break;
      } catch (h) {
        Ug(a, h);
      }
    } while (1);

    bd();
    qg.current = f;
    V = e;
    null !== W ? d = 0 : (R = null, U = 0, d = T);
    if (0 !== (wg & tf)) Sg(a, 0);else if (0 !== d) {
      2 === d && (V |= 64, a.hydrate && (a.hydrate = !1, xb(a.containerInfo)), c = nc(a), 0 !== c && (d = Vg(a, c)));
      if (1 === d) throw b = vg, Sg(a, 0), uf(a, c), Z(a, G()), b;
      a.finishedWork = a.current.alternate;
      a.finishedLanes = c;

      switch (d) {
        case 0:
        case 1:
          throw Error(q(345));

        case 2:
          Zg(a);
          break;

        case 3:
          uf(a, c);

          if ((c & 62914560) === c && (d = $f + 500 - G(), 10 < d)) {
            if (0 !== lc(a, 0)) break;
            e = a.suspendedLanes;

            if ((e & c) !== c) {
              K();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }

            a.timeoutHandle = Pa(Zg.bind(null, a), d);
            break;
          }

          Zg(a);
          break;

        case 4:
          uf(a, c);
          if ((c & 4186112) === c) break;
          d = a.eventTimes;

          for (e = -1; 0 < c;) {
            var g = 31 - mc(c);
            f = 1 << g;
            g = d[g];
            g > e && (e = g);
            c &= ~f;
          }

          c = e;
          c = G() - c;
          c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3E3 > c ? 3E3 : 4320 > c ? 4320 : 1960 * pg(c / 1960)) - c;

          if (10 < c) {
            a.timeoutHandle = Pa(Zg.bind(null, a), c);
            break;
          }

          Zg(a);
          break;

        case 5:
          Zg(a);
          break;

        default:
          throw Error(q(329));
      }
    }
    Z(a, G());
    return a.callbackNode === b ? Pg.bind(null, a) : null;
  }

  function uf(a, b) {
    b &= ~xg;
    b &= ~tf;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;

    for (a = a.expirationTimes; 0 < b;) {
      var c = 31 - mc(b),
          d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  }

  function Og(a) {
    if (0 !== (V & 48)) throw Error(q(327));
    Qg();

    if (a === R && 0 !== (a.expiredLanes & U)) {
      var b = U;
      var c = Vg(a, b);
      0 !== (wg & tf) && (b = lc(a, b), c = Vg(a, b));
    } else b = lc(a, 0), c = Vg(a, b);

    0 !== a.tag && 2 === c && (V |= 64, a.hydrate && (a.hydrate = !1, xb(a.containerInfo)), b = nc(a), 0 !== b && (c = Vg(a, b)));
    if (1 === c) throw c = vg, Sg(a, 0), uf(a, b), Z(a, G()), c;
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Zg(a);
    Z(a, G());
    return null;
  }

  function $g() {
    if (null !== Fg) {
      var a = Fg;
      Fg = null;
      a.forEach(function (a) {
        a.expiredLanes |= 24 & a.pendingLanes;
        Z(a, G());
      });
    }

    H();
  }

  function ah(a, b) {
    var c = V;
    V |= 1;

    try {
      return a(b);
    } finally {
      V = c, 0 === V && (zg(), H());
    }
  }

  function bh(a, b) {
    var c = V;
    if (0 !== (c & 48)) return a(b);
    V |= 1;

    try {
      if (a) return Pc(99, a.bind(null, b));
    } finally {
      V = c, H();
    }
  }

  function Xe(a, b) {
    A(ug, tg);
    tg |= b;
    wg |= b;
  }

  function wf() {
    tg = ug.current;
    z(ug);
  }

  function Sg(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    c !== Ra && (a.timeoutHandle = Ra, Qa(c));
    if (null !== W) for (c = W.return; null !== c;) {
      var d = c;

      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && $b();
          break;

        case 3:
          Qd();
          z(D);
          z(B);
          ee();
          break;

        case 5:
          Sd(d);
          break;

        case 4:
          Qd();
          break;

        case 13:
          z(M);
          break;

        case 19:
          z(M);
          break;

        case 10:
          dd(d);
          break;

        case 23:
        case 24:
          wf();
      }

      c = c.return;
    }
    R = a;
    W = Ed(a.current, null);
    U = tg = wg = b;
    T = 0;
    vg = null;
    xg = tf = pd = 0;
  }

  function Ug(a, b) {
    do {
      var c = W;

      try {
        bd();
        fe.current = pe;

        if (ie) {
          for (var d = N.memoizedState; null !== d;) {
            var e = d.queue;
            null !== e && (e.pending = null);
            d = d.next;
          }

          ie = !1;
        }

        he = 0;
        P = O = N = null;
        je = !1;
        rg.current = null;

        if (null === c || null === c.return) {
          T = 1;
          vg = b;
          W = null;
          break;
        }

        a: {
          var f = a,
              g = c.return,
              h = c,
              k = b;
          b = U;
          h.flags |= 2048;
          h.firstEffect = h.lastEffect = null;

          if (null !== k && "object" === _typeof(k) && "function" === typeof k.then) {
            var l = k;

            if (0 === (h.mode & 2)) {
              var n = h.alternate;
              n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
            }

            var t = 0 !== (M.current & 1),
                p = g;

            do {
              var y;

              if (y = 13 === p.tag) {
                var x = p.memoizedState;
                if (null !== x) y = null !== x.dehydrated ? !0 : !1;else {
                  var Y = p.memoizedProps;
                  y = void 0 === Y.fallback ? !1 : !0 !== Y.unstable_avoidThisFallback ? !0 : t ? !1 : !0;
                }
              }

              if (y) {
                var u = p.updateQueue;

                if (null === u) {
                  var v = new Set();
                  v.add(l);
                  p.updateQueue = v;
                } else u.add(l);

                if (0 === (p.mode & 2)) {
                  p.flags |= 64;
                  h.flags |= 16384;
                  h.flags &= -2981;
                  if (1 === h.tag) if (null === h.alternate) h.tag = 17;else {
                    var C = kd(-1, 1);
                    C.tag = 2;
                    md(h, C);
                  }
                  h.lanes |= 1;
                  break a;
                }

                k = void 0;
                h = b;
                var Oa = f.pingCache;
                null === Oa ? (Oa = f.pingCache = new Af(), k = new Set(), Oa.set(l, k)) : (k = Oa.get(l), void 0 === k && (k = new Set(), Oa.set(l, k)));

                if (!k.has(h)) {
                  k.add(h);
                  var Qe = ch.bind(null, f, l, h);
                  l.then(Qe, Qe);
                }

                p.flags |= 4096;
                p.lanes = b;
                break a;
              }

              p = p.return;
            } while (null !== p);

            k = Error((wa(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
          }

          5 !== T && (T = 2);
          k = yf(k, h);
          p = g;

          do {
            switch (p.tag) {
              case 3:
                f = k;
                p.flags |= 4096;
                b &= -b;
                p.lanes |= b;
                var Wg = Bf(p, f, b);
                nd(p, Wg);
                break a;

              case 1:
                f = k;
                var Xg = p.type,
                    ld = p.stateNode;

                if (0 === (p.flags & 64) && ("function" === typeof Xg.getDerivedStateFromError || null !== ld && "function" === typeof ld.componentDidCatch && (null === Ff || !Ff.has(ld)))) {
                  p.flags |= 4096;
                  b &= -b;
                  p.lanes |= b;
                  var Yg = Ef(p, f, b);
                  nd(p, Yg);
                  break a;
                }

            }

            p = p.return;
          } while (null !== p);
        }

        dh(c);
      } catch (w) {
        b = w;
        W === c && null !== c && (W = c = c.return);
        continue;
      }

      break;
    } while (1);
  }

  function Rg() {
    var a = qg.current;
    qg.current = pe;
    return null === a ? pe : a;
  }

  function Vg(a, b) {
    var c = V;
    V |= 16;
    var d = Rg();
    R === a && U === b || Sg(a, b);

    do {
      try {
        eh();
        break;
      } catch (e) {
        Ug(a, e);
      }
    } while (1);

    bd();
    V = c;
    qg.current = d;
    if (null !== W) throw Error(q(261));
    R = null;
    U = 0;
    return T;
  }

  function eh() {
    for (; null !== W;) {
      fh(W);
    }
  }

  function Tg() {
    for (; null !== W && !yc();) {
      fh(W);
    }
  }

  function fh(a) {
    var b = gh(a.alternate, a, tg);
    a.memoizedProps = a.pendingProps;
    null === b ? dh(a) : W = b;
    rg.current = null;
  }

  function dh(a) {
    var b = a;

    do {
      var c = b.alternate;
      a = b.return;

      if (0 === (b.flags & 2048)) {
        c = sf(c, b, tg);

        if (null !== c) {
          W = c;
          return;
        }

        c = b;

        if (24 !== c.tag && 23 !== c.tag || null === c.memoizedState || 0 !== (tg & 1073741824) || 0 === (c.mode & 4)) {
          for (var d = 0, e = c.child; null !== e;) {
            d |= e.lanes | e.childLanes, e = e.sibling;
          }

          c.childLanes = d;
        }

        null !== a && 0 === (a.flags & 2048) && (null === a.firstEffect && (a.firstEffect = b.firstEffect), null !== b.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (null !== a.lastEffect ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
      } else {
        c = xf(b);

        if (null !== c) {
          c.flags &= 2047;
          W = c;
          return;
        }

        null !== a && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
      }

      b = b.sibling;

      if (null !== b) {
        W = b;
        return;
      }

      W = b = a;
    } while (null !== b);

    0 === T && (T = 5);
  }

  function Zg(a) {
    var b = Nc();
    Pc(99, hh.bind(null, a, b));
    return null;
  }

  function hh(a, b) {
    do {
      Qg();
    } while (null !== Bg);

    if (0 !== (V & 48)) throw Error(q(327));
    var c = a.finishedWork;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error(q(177));
    a.callbackNode = null;
    var d = c.lanes | c.childLanes,
        e = d,
        f = a.pendingLanes & ~e;
    a.pendingLanes = e;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= e;
    a.mutableReadLanes &= e;
    a.entangledLanes &= e;
    e = a.entanglements;

    for (var g = a.eventTimes, h = a.expirationTimes; 0 < f;) {
      var k = 31 - mc(f),
          l = 1 << k;
      e[k] = 0;
      g[k] = -1;
      h[k] = -1;
      f &= ~l;
    }

    null !== Fg && 0 === (d & 24) && Fg.has(a) && Fg.delete(a);
    a === R && (W = R = null, U = 0);
    1 < c.flags ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;

    if (null !== d) {
      e = V;
      V |= 32;
      rg.current = null;
      Lg = Ga(a.containerInfo);
      Mg = !1;
      X = d;

      do {
        try {
          ih();
        } catch (v) {
          if (null === X) throw Error(q(330));
          If(X, v);
          X = X.nextEffect;
        }
      } while (null !== X);

      Lg = null;
      X = d;

      do {
        try {
          for (g = a; null !== X;) {
            var n = X.flags;
            n & 16 && Ta && sb(X.stateNode);

            if (n & 128) {
              var t = X.alternate;

              if (null !== t) {
                var p = t.ref;
                null !== p && ("function" === typeof p ? p(null) : p.current = null);
              }
            }

            switch (n & 1038) {
              case 2:
                Uf(X);
                X.flags &= -3;
                break;

              case 6:
                Uf(X);
                X.flags &= -3;
                Xf(X.alternate, X);
                break;

              case 1024:
                X.flags &= -1025;
                break;

              case 1028:
                X.flags &= -1025;
                Xf(X.alternate, X);
                break;

              case 4:
                Xf(X.alternate, X);
                break;

              case 8:
                h = g;
                f = X;
                Ta ? Qf(h, f) : Rf(h, f);
                var y = f.alternate;
                Sf(f);
                null !== y && Sf(y);
            }

            X = X.nextEffect;
          }
        } catch (v) {
          if (null === X) throw Error(q(330));
          If(X, v);
          X = X.nextEffect;
        }
      } while (null !== X);

      Mg && $a();
      Ha(a.containerInfo);
      a.current = c;
      X = d;

      do {
        try {
          for (n = a; null !== X;) {
            var x = X.flags;
            x & 36 && Lf(n, X.alternate, X);

            if (x & 128) {
              t = void 0;
              var Y = X.ref;

              if (null !== Y) {
                var u = X.stateNode;

                switch (X.tag) {
                  case 5:
                    t = Da(u);
                    break;

                  default:
                    t = u;
                }

                "function" === typeof Y ? Y(t) : Y.current = t;
              }
            }

            X = X.nextEffect;
          }
        } catch (v) {
          if (null === X) throw Error(q(330));
          If(X, v);
          X = X.nextEffect;
        }
      } while (null !== X);

      X = null;
      Ic();
      V = e;
    } else a.current = c;

    if (Ag) Ag = !1, Bg = a, Cg = b;else for (X = d; null !== X;) {
      b = X.nextEffect, X.nextEffect = null, X.flags & 8 && (x = X, x.sibling = null, x.stateNode = null), X = b;
    }
    d = a.pendingLanes;
    0 === d && (Ff = null);
    1 === d ? a === Hg ? Gg++ : (Gg = 0, Hg = a) : Gg = 0;
    c = c.stateNode;
    if (fc && "function" === typeof fc.onCommitFiberRoot) try {
      fc.onCommitFiberRoot(ec, c, void 0, 64 === (c.current.flags & 64));
    } catch (v) {}
    Z(a, G());
    if (Cf) throw Cf = !1, a = Df, Df = null, a;
    if (0 !== (V & 8)) return null;
    H();
    return null;
  }

  function ih() {
    for (; null !== X;) {
      var a = X.alternate;
      Mg || null === Lg || (0 !== (X.flags & 8) ? Ca(X, Lg) && (Mg = !0, Za()) : 13 === X.tag && bg(a, X) && Ca(X, Lg) && (Mg = !0, Za()));
      var b = X.flags;
      0 !== (b & 256) && Jf(a, X);
      0 === (b & 512) || Ag || (Ag = !0, Qc(97, function () {
        Qg();
        return null;
      }));
      X = X.nextEffect;
    }
  }

  function Qg() {
    if (90 !== Cg) {
      var a = 97 < Cg ? 97 : Cg;
      Cg = 90;
      return Pc(a, jh);
    }

    return !1;
  }

  function Nf(a, b) {
    Dg.push(b, a);
    Ag || (Ag = !0, Qc(97, function () {
      Qg();
      return null;
    }));
  }

  function Mf(a, b) {
    Eg.push(b, a);
    Ag || (Ag = !0, Qc(97, function () {
      Qg();
      return null;
    }));
  }

  function jh() {
    if (null === Bg) return !1;
    var a = Bg;
    Bg = null;
    if (0 !== (V & 48)) throw Error(q(331));
    var b = V;
    V |= 32;
    var c = Eg;
    Eg = [];

    for (var d = 0; d < c.length; d += 2) {
      var e = c[d],
          f = c[d + 1],
          g = e.destroy;
      e.destroy = void 0;
      if ("function" === typeof g) try {
        g();
      } catch (k) {
        if (null === f) throw Error(q(330));
        If(f, k);
      }
    }

    c = Dg;
    Dg = [];

    for (d = 0; d < c.length; d += 2) {
      e = c[d];
      f = c[d + 1];

      try {
        var h = e.create;
        e.destroy = h();
      } catch (k) {
        if (null === f) throw Error(q(330));
        If(f, k);
      }
    }

    for (h = a.current.firstEffect; null !== h;) {
      a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;
    }

    V = b;
    H();
    return !0;
  }

  function kh(a, b, c) {
    b = yf(c, b);
    b = Bf(a, b, 1);
    md(a, b);
    b = K();
    a = Ng(a, 1);
    null !== a && (rc(a, 1, b), Z(a, b));
  }

  function If(a, b) {
    if (3 === a.tag) kh(a, a, b);else for (var c = a.return; null !== c;) {
      if (3 === c.tag) {
        kh(c, a, b);
        break;
      } else if (1 === c.tag) {
        var d = c.stateNode;

        if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ff || !Ff.has(d))) {
          a = yf(b, a);
          var e = Ef(c, a, 1);
          md(c, e);
          e = K();
          c = Ng(c, 1);
          if (null !== c) rc(c, 1, e), Z(c, e);else if ("function" === typeof d.componentDidCatch && (null === Ff || !Ff.has(d))) try {
            d.componentDidCatch(b, a);
          } catch (f) {}
          break;
        }
      }

      c = c.return;
    }
  }

  function ch(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = K();
    a.pingedLanes |= a.suspendedLanes & c;
    R === a && (U & c) === c && (4 === T || 3 === T && (U & 62914560) === U && 500 > G() - $f ? Sg(a, 0) : xg |= c);
    Z(a, b);
  }

  function ag(a, b) {
    var c = a.stateNode;
    null !== c && c.delete(b);
    b = 0;
    0 === b && (b = a.mode, 0 === (b & 2) ? b = 1 : 0 === (b & 4) ? b = 99 === Nc() ? 1 : 2 : (0 === Jg && (Jg = wg), b = pc(62914560 & ~Jg), 0 === b && (b = 4194304)));
    c = K();
    a = Ng(a, b);
    null !== a && (rc(a, b, c), Z(a, c));
  }

  var gh;

  gh = function gh(a, b, c) {
    var d = b.lanes;
    if (null !== a) {
      if (a.memoizedProps !== b.pendingProps || D.current) gd = !0;else if (0 !== (c & d)) gd = 0 !== (a.flags & 16384) ? !0 : !1;else {
        gd = !1;

        switch (b.tag) {
          case 3:
            af(b);
            ce();
            break;

          case 5:
            Rd(b);
            break;

          case 1:
            E(b.type) && cc(b);
            break;

          case 4:
            Pd(b, b.stateNode.containerInfo);
            break;

          case 10:
            cd(b, b.memoizedProps.value);
            break;

          case 13:
            if (null !== b.memoizedState) {
              if (0 !== (c & b.child.childLanes)) return cf(a, b, c);
              A(M, M.current & 1);
              b = Re(a, b, c);
              return null !== b ? b.sibling : null;
            }

            A(M, M.current & 1);
            break;

          case 19:
            d = 0 !== (c & b.childLanes);

            if (0 !== (a.flags & 64)) {
              if (d) return kf(a, b, c);
              b.flags |= 64;
            }

            var e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            A(M, M.current);
            if (d) break;else return null;

          case 23:
          case 24:
            return b.lanes = 0, We(a, b, c);
        }

        return Re(a, b, c);
      }
    } else gd = !1;
    b.lanes = 0;

    switch (b.tag) {
      case 2:
        d = b.type;
        null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
        a = b.pendingProps;
        e = Zb(b, B.current);
        fd(b, c);
        e = le(null, b, d, a, e, c);
        b.flags |= 1;

        if ("object" === _typeof(e) && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
          b.tag = 1;
          b.memoizedState = null;
          b.updateQueue = null;

          if (E(d)) {
            var f = !0;
            cc(b);
          } else f = !1;

          b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
          id(b);
          var g = d.getDerivedStateFromProps;
          "function" === typeof g && sd(b, d, g, a);
          e.updater = vd;
          b.stateNode = e;
          e._reactInternals = b;
          zd(b, d, a, c);
          b = $e(null, b, d, !0, f, c);
        } else b.tag = 0, S(null, b, e, c), b = b.child;

        return b;

      case 16:
        e = b.elementType;

        a: {
          null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
          a = b.pendingProps;
          f = e._init;
          e = f(e._payload);
          b.type = e;
          f = b.tag = lh(e);
          a = Xc(e, a);

          switch (f) {
            case 0:
              b = Ve(null, b, e, a, c);
              break a;

            case 1:
              b = Ze(null, b, e, a, c);
              break a;

            case 11:
              b = Pe(null, b, e, a, c);
              break a;

            case 14:
              b = Se(null, b, e, Xc(e.type, a), d, c);
              break a;
          }

          throw Error(q(306, e, ""));
        }

        return b;

      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Xc(d, e), Ve(a, b, d, e, c);

      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Xc(d, e), Ze(a, b, d, e, c);

      case 3:
        af(b);
        d = b.updateQueue;
        if (null === a || null === d) throw Error(q(282));
        d = b.pendingProps;
        e = b.memoizedState;
        e = null !== e ? e.element : null;
        jd(a, b);
        od(b, d, null, c);
        d = b.memoizedState.element;
        if (d === e) ce(), b = Re(a, b, c);else {
          e = b.stateNode;
          if (f = e.hydrate) Va ? (Vd = Kb(b.stateNode.containerInfo), Ud = b, f = Wd = !0) : f = !1;

          if (f) {
            if (Va && (a = e.mutableSourceEagerHydrationData, null != a)) for (e = 0; e < a.length; e += 2) {
              f = a[e], g = a[e + 1], Sa ? f._workInProgressVersionPrimary = g : f._workInProgressVersionSecondary = g, de.push(f);
            }
            c = Kd(b, null, d, c);

            for (b.child = c; c;) {
              c.flags = c.flags & -3 | 1024, c = c.sibling;
            }
          } else S(a, b, d, c), ce();

          b = b.child;
        }
        return b;

      case 5:
        return Rd(b), null === a && $d(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ma(d, e) ? g = null : null !== f && Ma(d, f) && (b.flags |= 16), Ye(a, b), S(a, b, g, c), b.child;

      case 6:
        return null === a && $d(b), null;

      case 13:
        return cf(a, b, c);

      case 4:
        return Pd(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Jd(b, null, d, c) : S(a, b, d, c), b.child;

      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Xc(d, e), Pe(a, b, d, e, c);

      case 7:
        return S(a, b, b.pendingProps, c), b.child;

      case 8:
        return S(a, b, b.pendingProps.children, c), b.child;

      case 12:
        return S(a, b, b.pendingProps.children, c), b.child;

      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          g = b.memoizedProps;
          f = e.value;
          cd(b, f);

          if (null !== g) {
            var h = g.value;
            f = I(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0;

            if (0 === f) {
              if (g.children === e.children && !D.current) {
                b = Re(a, b, c);
                break a;
              }
            } else for (h = b.child, null !== h && (h.return = b); null !== h;) {
              var k = h.dependencies;

              if (null !== k) {
                g = h.child;

                for (var l = k.firstContext; null !== l;) {
                  if (l.context === d && 0 !== (l.observedBits & f)) {
                    1 === h.tag && (l = kd(-1, c & -c), l.tag = 2, md(h, l));
                    h.lanes |= c;
                    l = h.alternate;
                    null !== l && (l.lanes |= c);
                    ed(h.return, c);
                    k.lanes |= c;
                    break;
                  }

                  l = l.next;
                }
              } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;

              if (null !== g) g.return = h;else for (g = h; null !== g;) {
                if (g === b) {
                  g = null;
                  break;
                }

                h = g.sibling;

                if (null !== h) {
                  h.return = g.return;
                  g = h;
                  break;
                }

                g = g.return;
              }
              h = g;
            }
          }

          S(a, b, e.children, c);
          b = b.child;
        }

        return b;

      case 9:
        return e = b.type, f = b.pendingProps, d = f.children, fd(b, c), e = J(e, f.unstable_observedBits), d = d(e), b.flags |= 1, S(a, b, d, c), b.child;

      case 14:
        return e = b.type, f = Xc(e, b.pendingProps), f = Xc(e.type, f), Se(a, b, e, f, d, c);

      case 15:
        return Ue(a, b, b.type, b.pendingProps, d, c);

      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Xc(d, e), null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, E(d) ? (a = !0, cc(b)) : a = !1, fd(b, c), xd(b, d, e), zd(b, d, e, c), $e(null, b, d, !0, a, c);

      case 19:
        return kf(a, b, c);

      case 23:
        return We(a, b, c);

      case 24:
        return We(a, b, c);
    }

    throw Error(q(156, b.tag));
  };

  var mh = {
    current: !1
  },
      nh = m.unstable_flushAllWithoutAsserting,
      oh = "function" === typeof nh;

  function ph() {
    if (void 0 !== nh) return nh();

    for (var a = !1; Qg();) {
      a = !0;
    }

    return a;
  }

  function qh(a) {
    try {
      ph(), og(function () {
        ph() ? qh(a) : a();
      });
    } catch (b) {
      a(b);
    }
  }

  var rh = 0,
      sh = !1;

  function th(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.flags = 0;
    this.lastEffect = this.firstEffect = this.nextEffect = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }

  function Yd(a, b, c, d) {
    return new th(a, b, c, d);
  }

  function Te(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }

  function lh(a) {
    if ("function" === typeof a) return Te(a) ? 1 : 0;

    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === la) return 11;
      if (a === oa) return 14;
    }

    return 2;
  }

  function Ed(a, b) {
    var c = a.alternate;
    null === c ? (c = Yd(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : {
      lanes: b.lanes,
      firstContext: b.firstContext
    };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }

  function Gd(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) Te(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
      case fa:
        return Id(c.children, e, f, b);

      case ra:
        g = 8;
        e |= 16;
        break;

      case ha:
        g = 8;
        e |= 1;
        break;

      case ia:
        return a = Yd(12, c, b, e | 8), a.elementType = ia, a.type = ia, a.lanes = f, a;

      case ma:
        return a = Yd(13, c, b, e), a.type = ma, a.elementType = ma, a.lanes = f, a;

      case na:
        return a = Yd(19, c, b, e), a.elementType = na, a.lanes = f, a;

      case sa:
        return ef(c, e, f, b);

      case ta:
        return a = Yd(24, c, b, e), a.elementType = ta, a.lanes = f, a;

      default:
        if ("object" === _typeof(a) && null !== a) switch (a.$$typeof) {
          case ja:
            g = 10;
            break a;

          case ka:
            g = 9;
            break a;

          case la:
            g = 11;
            break a;

          case oa:
            g = 14;
            break a;

          case pa:
            g = 16;
            d = null;
            break a;

          case qa:
            g = 22;
            break a;
        }
        throw Error(q(130, null == a ? a : _typeof(a), ""));
    }
    b = Yd(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
  }

  function Id(a, b, c, d) {
    a = Yd(7, a, d, b);
    a.lanes = c;
    return a;
  }

  function ef(a, b, c, d) {
    a = Yd(23, a, d, b);
    a.elementType = sa;
    a.lanes = c;
    return a;
  }

  function Fd(a, b, c) {
    a = Yd(6, a, null, b);
    a.lanes = c;
    return a;
  }

  function Hd(a, b, c) {
    b = Yd(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = {
      containerInfo: a.containerInfo,
      pendingChildren: null,
      implementation: a.implementation
    };
    return b;
  }

  function uh(a, b, c) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = Ra;
    this.pendingContext = this.context = null;
    this.hydrate = c;
    this.callbackNode = null;
    this.callbackPriority = 0;
    this.eventTimes = qc(0);
    this.expirationTimes = qc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = qc(0);
    Va && (this.mutableSourceEagerHydrationData = null);
  }

  function vh(a) {
    var b = a._reactInternals;

    if (void 0 === b) {
      if ("function" === typeof a.render) throw Error(q(188));
      throw Error(q(268, Object.keys(a)));
    }

    a = Aa(b);
    return null === a ? null : a.stateNode;
  }

  function wh(a, b) {
    a = a.memoizedState;

    if (null !== a && null !== a.dehydrated) {
      var c = a.retryLane;
      a.retryLane = 0 !== c && c < b ? c : b;
    }
  }

  function xh(a, b) {
    wh(a, b);
    (a = a.alternate) && wh(a, b);
  }

  function yh(a) {
    a = Aa(a);
    return null === a ? null : a.stateNode;
  }

  function zh() {
    return null;
  }

  exports.IsThisRendererActing = mh;

  exports.act = function (a) {
    function b() {
      rh--;
      sg.current = c;
      mh.current = d;
    }

    !1 === sh && (sh = !0, console.error("act(...) is not supported in production builds of React, and might not behave as expected."));
    rh++;
    var c = sg.current,
        d = mh.current;
    sg.current = !0;
    mh.current = !0;

    try {
      var e = ah(a);
    } catch (f) {
      throw b(), f;
    }

    if (null !== e && "object" === _typeof(e) && "function" === typeof e.then) return {
      then: function then(a, d) {
        e.then(function () {
          1 < rh || !0 === oh && !0 === c ? (b(), a()) : qh(function (c) {
            b();
            c ? d(c) : a();
          });
        }, function (a) {
          b();
          d(a);
        });
      }
    };

    try {
      1 !== rh || !1 !== oh && !1 !== c || ph(), b();
    } catch (f) {
      throw b(), f;
    }

    return {
      then: function then(a) {
        a();
      }
    };
  };

  exports.attemptContinuousHydration = function (a) {
    if (13 === a.tag) {
      var b = K();
      ud(a, 67108864, b);
      xh(a, 67108864);
    }
  };

  exports.attemptHydrationAtCurrentPriority = function (a) {
    if (13 === a.tag) {
      var b = K(),
          c = td(a);
      ud(a, c, b);
      xh(a, c);
    }
  };

  exports.attemptSynchronousHydration = function (a) {
    switch (a.tag) {
      case 3:
        var b = a.stateNode;

        if (b.hydrate) {
          var c = ic(b.pendingLanes);
          b.expiredLanes |= c & b.pendingLanes;
          Z(b, G());
          0 === (V & 48) && (zg(), H());
        }

        break;

      case 13:
        var d = K();
        bh(function () {
          return ud(a, 1, d);
        });
        xh(a, 4);
    }
  };

  exports.attemptUserBlockingHydration = function (a) {
    if (13 === a.tag) {
      var b = K();
      ud(a, 4, b);
      xh(a, 4);
    }
  };

  exports.batchedEventUpdates = function (a, b) {
    var c = V;
    V |= 2;

    try {
      return a(b);
    } finally {
      V = c, 0 === V && (zg(), H());
    }
  };

  exports.batchedUpdates = ah;

  exports.createComponentSelector = function (a) {
    return {
      $$typeof: cg,
      value: a
    };
  };

  exports.createContainer = function (a, b, c) {
    a = new uh(a, b, c);
    b = Yd(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
    a.current = b;
    b.stateNode = a;
    id(b);
    return a;
  };

  exports.createHasPsuedoClassSelector = function (a) {
    return {
      $$typeof: dg,
      value: a
    };
  };

  exports.createPortal = function (a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
      $$typeof: ea,
      key: null == d ? null : "" + d,
      children: a,
      containerInfo: b,
      implementation: c
    };
  };

  exports.createRoleSelector = function (a) {
    return {
      $$typeof: eg,
      value: a
    };
  };

  exports.createTestNameSelector = function (a) {
    return {
      $$typeof: fg,
      value: a
    };
  };

  exports.createTextSelector = function (a) {
    return {
      $$typeof: gg,
      value: a
    };
  };

  exports.deferredUpdates = function (a) {
    return Pc(97, a);
  };

  exports.discreteUpdates = function (a, b, c, d, e) {
    var f = V;
    V |= 4;

    try {
      return Pc(98, a.bind(null, b, c, d, e));
    } finally {
      V = f, 0 === V && (zg(), H());
    }
  };

  exports.findAllNodes = mg;

  exports.findBoundingRects = function (a, b) {
    if (!bb) throw Error(q(363));
    b = mg(a, b);
    a = [];

    for (var c = 0; c < b.length; c++) {
      a.push(db(b[c]));
    }

    for (b = a.length - 1; 0 < b; b--) {
      c = a[b];

      for (var d = c.x, e = d + c.width, f = c.y, g = f + c.height, h = b - 1; 0 <= h; h--) {
        if (b !== h) {
          var k = a[h],
              l = k.x,
              n = l + k.width,
              t = k.y,
              p = t + k.height;

          if (d >= l && f >= t && e <= n && g <= p) {
            a.splice(b, 1);
            break;
          } else if (!(d !== l || c.width !== k.width || p < f || t > g)) {
            t > f && (k.height += t - f, k.y = f);
            p < g && (k.height = g - t);
            a.splice(b, 1);
            break;
          } else if (!(f !== t || c.height !== k.height || n < d || l > e)) {
            l > d && (k.width += l - d, k.x = d);
            n < e && (k.width = e - l);
            a.splice(b, 1);
            break;
          }
        }
      }
    }

    return a;
  };

  exports.findHostInstance = vh;

  exports.findHostInstanceWithNoPortals = function (a) {
    a = Ba(a);
    return null === a ? null : 20 === a.tag ? a.stateNode.instance : a.stateNode;
  };

  exports.findHostInstanceWithWarning = function (a) {
    return vh(a);
  };

  exports.flushControlled = function (a) {
    var b = V;
    V |= 1;

    try {
      Pc(99, a);
    } finally {
      V = b, 0 === V && (zg(), H());
    }
  };

  exports.flushDiscreteUpdates = function () {
    0 === (V & 49) && ($g(), Qg());
  };

  exports.flushPassiveEffects = Qg;
  exports.flushSync = bh;

  exports.focusWithin = function (a, b) {
    if (!bb) throw Error(q(363));
    a = ig(a);
    b = lg(a, b);
    b = Array.from(b);

    for (a = 0; a < b.length;) {
      var c = b[a++];

      if (!fb(c)) {
        if (5 === c.tag && hb(c.stateNode)) return !0;

        for (c = c.child; null !== c;) {
          b.push(c), c = c.sibling;
        }
      }
    }

    return !1;
  };

  exports.getCurrentUpdateLanePriority = function () {
    return hc;
  };

  exports.getFindAllNodesFailureDescription = function (a, b) {
    if (!bb) throw Error(q(363));
    var c = 0,
        d = [];
    a = [ig(a), 0];

    for (var e = 0; e < a.length;) {
      var f = a[e++],
          g = a[e++],
          h = b[g];
      if (5 !== f.tag || !fb(f)) if (jg(f, h) && (d.push(kg(h)), g++, g > c && (c = g)), g < b.length) for (f = f.child; null !== f;) {
        a.push(f, g), f = f.sibling;
      }
    }

    if (c < b.length) {
      for (a = []; c < b.length; c++) {
        a.push(kg(b[c]));
      }

      return "findAllNodes was able to match part of the selector:\n  " + (d.join(" > ") + "\n\nNo matching component was found for:\n  ") + a.join(" > ");
    }

    return null;
  };

  exports.getPublicRootInstance = function (a) {
    a = a.current;
    if (!a.child) return null;

    switch (a.child.tag) {
      case 5:
        return Da(a.child.stateNode);

      default:
        return a.child.stateNode;
    }
  };

  exports.injectIntoDevTools = function (a) {
    a = {
      bundleType: a.bundleType,
      version: a.version,
      rendererPackageName: a.rendererPackageName,
      rendererConfig: a.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ca.ReactCurrentDispatcher,
      findHostInstanceByFiber: yh,
      findFiberByHostInstance: a.findFiberByHostInstance || zh,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null
    };
    if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) a = !1;else {
      var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!b.isDisabled && b.supportsFiber) try {
        ec = b.inject(a), fc = b;
      } catch (c) {}
      a = !0;
    }
    return a;
  };

  exports.observeVisibleRects = function (a, b, c, d) {
    if (!bb) throw Error(q(363));
    a = mg(a, b);
    var e = ib(a, c, d).disconnect;
    return {
      disconnect: function disconnect() {
        e();
      }
    };
  };

  exports.registerMutableSourceForHydration = function (a, b) {
    var c = b._getVersion;
    c = c(b._source);
    null == a.mutableSourceEagerHydrationData ? a.mutableSourceEagerHydrationData = [b, c] : a.mutableSourceEagerHydrationData.push(b, c);
  };

  exports.runWithPriority = function (a, b) {
    var c = hc;

    try {
      return hc = a, b();
    } finally {
      hc = c;
    }
  };

  exports.shouldSuspend = function () {
    return !1;
  };

  exports.unbatchedUpdates = function (a, b) {
    var c = V;
    V &= -2;
    V |= 8;

    try {
      return a(b);
    } finally {
      V = c, 0 === V && (zg(), H());
    }
  };

  exports.updateContainer = function (a, b, c, d) {
    var e = b.current,
        f = K(),
        g = td(e);

    a: if (c) {
      c = c._reactInternals;

      b: {
        if (xa(c) !== c || 1 !== c.tag) throw Error(q(170));
        var h = c;

        do {
          switch (h.tag) {
            case 3:
              h = h.stateNode.context;
              break b;

            case 1:
              if (E(h.type)) {
                h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }

          }

          h = h.return;
        } while (null !== h);

        throw Error(q(171));
      }

      if (1 === c.tag) {
        var k = c.type;

        if (E(k)) {
          c = bc(c, k, h);
          break a;
        }
      }

      c = h;
    } else c = Xb;

    null === b.context ? b.context = c : b.pendingContext = c;
    b = kd(f, g);
    b.payload = {
      element: a
    };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    md(e, b);
    ud(e, g, f);
    return g;
  };

  return exports;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../_webpack@4.46.0@webpack/buildin/module.js */ "./node_modules/_webpack@4.46.0@webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/_scheduler@0.20.2@scheduler/cjs/scheduler.production.min.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_scheduler@0.20.2@scheduler/cjs/scheduler.production.min.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window) {/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/typeof.js");

var _f, g, h, k;

if ("object" === (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && "function" === typeof performance.now) {
  var l = performance;

  exports.unstable_now = function () {
    return l.now();
  };
} else {
  var p = Date,
      q = p.now();

  exports.unstable_now = function () {
    return p.now() - q;
  };
}

if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
  var t = null,
      u = null,
      w = function w() {
    if (null !== t) try {
      var a = exports.unstable_now();
      t(!0, a);
      t = null;
    } catch (b) {
      throw setTimeout(w, 0), b;
    }
  };

  _f = function f(a) {
    null !== t ? setTimeout(_f, 0, a) : (t = a, setTimeout(w, 0));
  };

  g = function g(a, b) {
    u = setTimeout(a, b);
  };

  h = function h() {
    clearTimeout(u);
  };

  exports.unstable_shouldYield = function () {
    return !1;
  };

  k = exports.unstable_forceFrameRate = function () {};
} else {
  var x = window.setTimeout,
      y = window.clearTimeout;

  if ("undefined" !== typeof console) {
    var z = window.cancelAnimationFrame;
    "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    "function" !== typeof z && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
  }

  var A = !1,
      B = null,
      C = -1,
      D = 5,
      E = 0;

  exports.unstable_shouldYield = function () {
    return exports.unstable_now() >= E;
  };

  k = function k() {};

  exports.unstable_forceFrameRate = function (a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < a ? Math.floor(1E3 / a) : 5;
  };

  var F = new MessageChannel(),
      G = F.port2;

  F.port1.onmessage = function () {
    if (null !== B) {
      var a = exports.unstable_now();
      E = a + D;

      try {
        B(!0, a) ? G.postMessage(null) : (A = !1, B = null);
      } catch (b) {
        throw G.postMessage(null), b;
      }
    } else A = !1;
  };

  _f = function _f(a) {
    B = a;
    A || (A = !0, G.postMessage(null));
  };

  g = function g(a, b) {
    C = x(function () {
      a(exports.unstable_now());
    }, b);
  };

  h = function h() {
    y(C);
    C = -1;
  };
}

function H(a, b) {
  var c = a.length;
  a.push(b);

  a: for (;;) {
    var d = c - 1 >>> 1,
        e = a[d];
    if (void 0 !== e && 0 < I(e, b)) a[d] = b, a[c] = e, c = d;else break a;
  }
}

function J(a) {
  a = a[0];
  return void 0 === a ? null : a;
}

function K(a) {
  var b = a[0];

  if (void 0 !== b) {
    var c = a.pop();

    if (c !== b) {
      a[0] = c;

      a: for (var d = 0, e = a.length; d < e;) {
        var m = 2 * (d + 1) - 1,
            n = a[m],
            v = m + 1,
            r = a[v];
        if (void 0 !== n && 0 > I(n, c)) void 0 !== r && 0 > I(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);else if (void 0 !== r && 0 > I(r, c)) a[d] = r, a[v] = c, d = v;else break a;
      }
    }

    return b;
  }

  return null;
}

function I(a, b) {
  var c = a.sortIndex - b.sortIndex;
  return 0 !== c ? c : a.id - b.id;
}

var L = [],
    M = [],
    N = 1,
    O = null,
    P = 3,
    Q = !1,
    R = !1,
    S = !1;

function T(a) {
  for (var b = J(M); null !== b;) {
    if (null === b.callback) K(M);else if (b.startTime <= a) K(M), b.sortIndex = b.expirationTime, H(L, b);else break;
    b = J(M);
  }
}

function U(a) {
  S = !1;
  T(a);
  if (!R) if (null !== J(L)) R = !0, _f(V);else {
    var b = J(M);
    null !== b && g(U, b.startTime - a);
  }
}

function V(a, b) {
  R = !1;
  S && (S = !1, h());
  Q = !0;
  var c = P;

  try {
    T(b);

    for (O = J(L); null !== O && (!(O.expirationTime > b) || a && !exports.unstable_shouldYield());) {
      var d = O.callback;

      if ("function" === typeof d) {
        O.callback = null;
        P = O.priorityLevel;
        var e = d(O.expirationTime <= b);
        b = exports.unstable_now();
        "function" === typeof e ? O.callback = e : O === J(L) && K(L);
        T(b);
      } else K(L);

      O = J(L);
    }

    if (null !== O) var m = !0;else {
      var n = J(M);
      null !== n && g(U, n.startTime - b);
      m = !1;
    }
    return m;
  } finally {
    O = null, P = c, Q = !1;
  }
}

var W = k;
exports.unstable_IdlePriority = 5;
exports.unstable_ImmediatePriority = 1;
exports.unstable_LowPriority = 4;
exports.unstable_NormalPriority = 3;
exports.unstable_Profiling = null;
exports.unstable_UserBlockingPriority = 2;

exports.unstable_cancelCallback = function (a) {
  a.callback = null;
};

exports.unstable_continueExecution = function () {
  R || Q || (R = !0, _f(V));
};

exports.unstable_getCurrentPriorityLevel = function () {
  return P;
};

exports.unstable_getFirstCallbackNode = function () {
  return J(L);
};

exports.unstable_next = function (a) {
  switch (P) {
    case 1:
    case 2:
    case 3:
      var b = 3;
      break;

    default:
      b = P;
  }

  var c = P;
  P = b;

  try {
    return a();
  } finally {
    P = c;
  }
};

exports.unstable_pauseExecution = function () {};

exports.unstable_requestPaint = W;

exports.unstable_runWithPriority = function (a, b) {
  switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;

    default:
      a = 3;
  }

  var c = P;
  P = a;

  try {
    return b();
  } finally {
    P = c;
  }
};

exports.unstable_scheduleCallback = function (a, b, c) {
  var d = exports.unstable_now();
  "object" === _typeof(c) && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;

  switch (a) {
    case 1:
      var e = -1;
      break;

    case 2:
      e = 250;
      break;

    case 5:
      e = 1073741823;
      break;

    case 4:
      e = 1E4;
      break;

    default:
      e = 5E3;
  }

  e = c + e;
  a = {
    id: N++,
    callback: b,
    priorityLevel: a,
    startTime: c,
    expirationTime: e,
    sortIndex: -1
  };
  c > d ? (a.sortIndex = c, H(M, a), null === J(L) && a === J(M) && (S ? h() : S = !0, g(U, c - d))) : (a.sortIndex = e, H(L, a), R || Q || (R = !0, _f(V)));
  return a;
};

exports.unstable_wrapCallback = function (a) {
  var b = P;
  return function () {
    var c = P;
    P = b;

    try {
      return a.apply(this, arguments);
    } finally {
      P = c;
    }
  };
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "./node_modules/_@tarojs_plugin-platform-weapp@3.3.2@@tarojs/plugin-platform-weapp/dist/runtime.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.3.2@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_app_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/_babel-loader@8.2.1@babel-loader/lib!./app.js */ "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./src/app.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/_@tarojs_react@3.3.2@@tarojs/react/dist/react.esm.js");









var config = {"pages":["pages/index/index"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__["window"].__taroAppConfig = config
var inst = App(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__["createReactApp"])(_node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_app_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], react__WEBPACK_IMPORTED_MODULE_4__, react_dom__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], config))

Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["initPxTransform"])({
  designWidth: 750,
  deviceRatio: {"640":1.17,"750":1,"828":0.905}
})


/***/ }),

/***/ "./src/app.less":
/*!**********************!*\
  !*** ./src/app.less ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/app.js","runtime","taro","vendors"]]]);;

},{"./runtime":3,"./taro":4,"./vendors":5}],2:[function(require,module,exports){

            var _appConfig = null
            var xs = eval(`var module = {exports:{}};
`);

            var App = (appData)=> {
                return _globalApp("/Users/lv/Desktop/tarodemo/taro/dist/pages/index/index.js",_appConfig)
            }
            var Page = (config) => {
                const path = "/Users/lv/Desktop/tarodemo/taro/dist/pages/index/index.js".replace('.js', '').split('/').slice(-3).join('/')
                return _globalPage(path,config,'<div class="app" v-bind:data="{root: root}">123123</div>')
            }
            var Component = (config) => {
                return _globalComponent("/Users/lv/Desktop/tarodemo/taro/dist/pages/index/index.js",config,template)
            }
        (wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./src/pages/index/index.jsx":
/*!***************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.1@babel-loader/lib!./src/pages/index/index.jsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_plugin-platform-weapp@3.3.2@@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ "./src/pages/index/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









var Index = /*#__PURE__*/function (_Component) {
  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Index, _Component);

  var _super = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Index);

  function Index() {
    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Index);

    return _super.apply(this, arguments);
  }

  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Index, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log('componentWillMount');
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('componentDidMount');
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('componentWillUnmount');
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      console.log('componentDidShow');
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {
      console.log('componentDidHide');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      console.log('componentDidUpdate');
    }
  }, {
    key: "render",
    value: function render() {
      console.log('render');
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "b"], {
        className: "index",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "a"], {
          children: "Hello world!"
        })
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ "./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! exports used: jsx */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


__webpack_require__(/*! object-assign */ "./node_modules/_object-assign@4.1.1@object-assign/index.js");

var f = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js"),
    g = 60103;

exports.Fragment = 60107;

if ("function" === typeof Symbol && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  exports.Fragment = h("react.fragment");
}

var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    n = Object.prototype.hasOwnProperty,
    p = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function q(c, a, k) {
  var b,
      d = {},
      e = null,
      l = null;
  void 0 !== k && (e = "" + k);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (l = a.ref);

  for (b in a) {
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  }

  if (c && c.defaultProps) for (b in a = c.defaultProps, a) {
    void 0 === d[b] && (d[b] = a[b]);
  }
  return {
    $$typeof: g,
    type: c,
    key: e,
    ref: l,
    props: d,
    _owner: m.current
  };
}

exports.jsx = q;
exports.jsxs = q;

/***/ }),

/***/ "./src/pages/index/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.jsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_babel-loader@8.2.1@babel-loader/lib!./index.jsx */ "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./src/pages/index/index.jsx");


var config = {"navigationBarTitleText":"首页"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/index/index.less":
/*!************************************!*\
  !*** ./src/pages/index/index.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/index/index.jsx","runtime","taro","vendors"]]]);

},{}],3:[function(require,module,exports){

            var _appConfig = null
            
            var App = (appData)=> {
                return _globalApp("/Users/lv/Desktop/tarodemo/taro/dist/runtime.js",_appConfig)
            }
            var Page = (config) => {
                const path = "/Users/lv/Desktop/tarodemo/taro/dist/runtime.js".replace('.js', '').split('/').slice(-3).join('/')
                return _globalPage(path,config,'<div class="app" v-bind:data="{root: root}">123123</div>')
            }
            var Component = (config) => {
                return _globalComponent("/Users/lv/Desktop/tarodemo/taro/dist/runtime.js",config,template)
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
/******/ 		"runtime": 0
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

},{}],4:[function(require,module,exports){

            var _appConfig = null
            
            var App = (appData)=> {
                return _globalApp("/Users/lv/Desktop/tarodemo/taro/dist/taro.js",_appConfig)
            }
            var Page = (config) => {
                const path = "/Users/lv/Desktop/tarodemo/taro/dist/taro.js".replace('.js', '').split('/').slice(-3).join('/')
                return _globalPage(path,config,'<div class="app" v-bind:data="{root: root}">123123</div>')
            }
            var Component = (config) => {
                return _globalComponent("/Users/lv/Desktop/tarodemo/taro/dist/taro.js",config,template)
            }
        (wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["taro"],{

/***/ "./node_modules/_@tarojs_api@3.3.2@@tarojs/api/dist/index.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_@tarojs_api@3.3.2@@tarojs/api/dist/index.esm.js ***!
  \***********************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, window) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js");







if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.assign = function (target) {
    // .length of function is 2
    if (target == null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }

    return to;
  };
}

if (typeof Object.defineProperties !== 'function') {
  Object.defineProperties = function (obj, properties) {
    function convertToDescriptor(desc) {
      function hasProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }

      function isCallable(v) {
        // NB: modify as necessary if other values than functions are callable.
        return typeof v === 'function';
      }

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(desc) !== 'object' || desc === null) {
        throw new TypeError('bad desc');
      }

      var d = {};
      if (hasProperty(desc, 'enumerable')) d.enumerable = !!desc.enumerable;

      if (hasProperty(desc, 'configurable')) {
        d.configurable = !!desc.configurable;
      }

      if (hasProperty(desc, 'value')) d.value = desc.value;
      if (hasProperty(desc, 'writable')) d.writable = !!desc.writable;

      if (hasProperty(desc, 'get')) {
        var g = desc.get;

        if (!isCallable(g) && typeof g !== 'undefined') {
          throw new TypeError('bad get');
        }

        d.get = g;
      }

      if (hasProperty(desc, 'set')) {
        var s = desc.set;

        if (!isCallable(s) && typeof s !== 'undefined') {
          throw new TypeError('bad set');
        }

        d.set = s;
      }

      if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d)) {
        throw new TypeError('identity-confused descriptor');
      }

      return d;
    }

    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj) !== 'object' || obj === null) throw new TypeError('bad obj');
    properties = Object(properties);
    var keys = Object.keys(properties);
    var descs = [];

    for (var i = 0; i < keys.length; i++) {
      descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
    }

    for (var _i = 0; _i < descs.length; _i++) {
      Object.defineProperty(obj, descs[_i][0], descs[_i][1]);
    }

    return obj;
  };
}

var ENV_TYPE = {
  WEAPP: 'WEAPP',
  WEB: 'WEB',
  RN: 'RN',
  SWAN: 'SWAN',
  ALIPAY: 'ALIPAY',
  TT: 'TT',
  QQ: 'QQ',
  JD: 'JD'
};
var _env = null; // 一个taro项目肯定运行同样的环境

function getEnv() {
  if (_env) return _env;

  if (typeof jd !== 'undefined' && jd.getSystemInfo) {
    _env = ENV_TYPE.JD;
    return ENV_TYPE.JD;
  }

  if (typeof qq !== 'undefined' && qq.getSystemInfo) {
    _env = ENV_TYPE.QQ;
    return ENV_TYPE.QQ;
  }

  if (typeof tt !== 'undefined' && tt.getSystemInfo) {
    _env = ENV_TYPE.TT;
    return ENV_TYPE.TT;
  }

  if (typeof wx !== 'undefined' && wx.getSystemInfo) {
    _env = ENV_TYPE.WEAPP;
    return ENV_TYPE.WEAPP;
  }

  if (typeof swan !== 'undefined' && swan.getSystemInfo) {
    _env = ENV_TYPE.SWAN;
    return ENV_TYPE.SWAN;
  }

  if (typeof my !== 'undefined' && my.getSystemInfo) {
    _env = ENV_TYPE.ALIPAY;
    return ENV_TYPE.ALIPAY;
  }

  if (typeof global !== 'undefined' && global.__fbGenNativeModule) {
    _env = ENV_TYPE.RN;
    return ENV_TYPE.RN;
  }

  if (typeof window !== 'undefined') {
    _env = ENV_TYPE.WEB;
    return ENV_TYPE.WEB;
  }

  return 'Unknown environment';
}

var Chain = /*#__PURE__*/function () {
  function Chain(requestParams) {
    var interceptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Chain);

    this.index = index;
    this.requestParams = requestParams;
    this.interceptors = interceptors;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Chain, [{
    key: "proceed",
    value: function proceed(requestParams) {
      this.requestParams = requestParams;

      if (this.index >= this.interceptors.length) {
        throw new Error('chain 参数错误, 请勿直接修改 request.chain');
      }

      var nextInterceptor = this._getNextInterceptor();

      var nextChain = this._getNextChain();

      var p = nextInterceptor(nextChain);
      var res = p.catch(function (err) {
        return Promise.reject(err);
      });
      if (typeof p.abort === 'function') res.abort = p.abort;
      return res;
    }
  }, {
    key: "_getNextInterceptor",
    value: function _getNextInterceptor() {
      return this.interceptors[this.index];
    }
  }, {
    key: "_getNextChain",
    value: function _getNextChain() {
      return new Chain(this.requestParams, this.interceptors, this.index + 1);
    }
  }]);

  return Chain;
}();

var Link = /*#__PURE__*/function () {
  function Link(interceptor) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Link);

    this.taroInterceptor = interceptor;
    this.chain = new Chain();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Link, [{
    key: "request",
    value: function request(requestParams) {
      var _this = this;

      this.chain.interceptors = this.chain.interceptors.filter(function (interceptor) {
        return interceptor !== _this.taroInterceptor;
      });
      this.chain.interceptors.push(this.taroInterceptor);
      return this.chain.proceed(_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1___default()({}, requestParams));
    }
  }, {
    key: "addInterceptor",
    value: function addInterceptor(interceptor) {
      this.chain.interceptors.push(interceptor);
    }
  }, {
    key: "cleanInterceptors",
    value: function cleanInterceptors() {
      this.chain = new Chain();
    }
  }]);

  return Link;
}();

function timeoutInterceptor(chain) {
  var requestParams = chain.requestParams;
  var p;
  var res = new Promise(function (resolve, reject) {
    var timeout = setTimeout(function () {
      timeout = null;
      reject(new Error('网络链接超时,请稍后再试！'));
    }, requestParams && requestParams.timeout || 60000);
    p = chain.proceed(requestParams);
    p.then(function (res) {
      if (!timeout) return;
      clearTimeout(timeout);
      resolve(res);
    }).catch(function (err) {
      timeout && clearTimeout(timeout);
      reject(err);
    });
  });
  if (p !== undefined && typeof p.abort === 'function') res.abort = p.abort;
  return res;
}

function logInterceptor(chain) {
  var requestParams = chain.requestParams;
  var method = requestParams.method,
      data = requestParams.data,
      url = requestParams.url; // eslint-disable-next-line no-console

  console.log("http ".concat(method || 'GET', " --> ").concat(url, " data: "), data);
  var p = chain.proceed(requestParams);
  var res = p.then(function (res) {
    // eslint-disable-next-line no-console
    console.log("http <-- ".concat(url, " result:"), res);
    return res;
  });
  if (typeof p.abort === 'function') res.abort = p.abort;
  return res;
}

var interceptors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  timeoutInterceptor: timeoutInterceptor,
  logInterceptor: logInterceptor
});

function Behavior(options) {
  return options;
}

function getPreload(current) {
  return function (key, val) {
    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(key) === 'object') {
      current.preloadData = key;
    } else if (key !== undefined && val !== undefined) {
      current.preloadData = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()({}, key, val);
    }
  };
}

function getInitPxTransform(taro) {
  return function (config) {
    var _config$designWidth = config.designWidth,
        designWidth = _config$designWidth === void 0 ? 750 : _config$designWidth,
        _config$deviceRatio = config.deviceRatio,
        deviceRatio = _config$deviceRatio === void 0 ? {
      640: 2.34 / 2,
      750: 1,
      828: 1.81 / 2
    } : _config$deviceRatio;
    taro.config = taro.config || {};
    taro.config.designWidth = designWidth;
    taro.config.deviceRatio = deviceRatio;
  };
}

function getPxTransform(taro) {
  return function (size) {
    var _ref = taro.config || {},
        _ref$designWidth = _ref.designWidth,
        designWidth = _ref$designWidth === void 0 ? 750 : _ref$designWidth,
        _ref$deviceRatio = _ref.deviceRatio,
        deviceRatio = _ref$deviceRatio === void 0 ? {
      640: 2.34 / 2,
      750: 1,
      828: 1.81 / 2
    } : _ref$deviceRatio;

    if (!(designWidth in deviceRatio)) {
      throw new Error("deviceRatio \u914D\u7F6E\u4E2D\u4E0D\u5B58\u5728 ".concat(designWidth, " \u7684\u8BBE\u7F6E\uFF01"));
    }

    return parseInt(size, 10) * deviceRatio[designWidth] + 'rpx';
  };
}
/* eslint-disable camelcase */


var Taro = {
  Behavior: Behavior,
  getEnv: getEnv,
  ENV_TYPE: ENV_TYPE,
  Link: Link,
  interceptors: interceptors,
  Current: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["Current"],
  getCurrentInstance: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["getCurrentInstance"],
  options: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["options"],
  nextTick: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["nextTick"],
  eventCenter: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["eventCenter"],
  Events: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["Events"],
  useDidShow: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useDidShow"],
  useDidHide: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useDidHide"],
  usePullDownRefresh: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["usePullDownRefresh"],
  useReachBottom: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useReachBottom"],
  usePageScroll: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["usePageScroll"],
  useResize: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useResize"],
  useShareAppMessage: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useShareAppMessage"],
  useTabItemTap: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useTabItemTap"],
  useTitleClick: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useTitleClick"],
  useOptionMenuClick: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useOptionMenuClick"],
  usePullIntercept: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["usePullIntercept"],
  useShareTimeline: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useShareTimeline"],
  useAddToFavorites: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useAddToFavorites"],
  useReady: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useReady"],
  useRouter: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useRouter"],
  getInitPxTransform: getInitPxTransform
};
Taro.initPxTransform = getInitPxTransform(Taro);
Taro.preload = getPreload(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["Current"]);
Taro.pxTransform = getPxTransform(Taro);
/* harmony default export */ __webpack_exports__["default"] = (Taro);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../_webpack@4.46.0@webpack/buildin/global.js */ "./node_modules/_webpack@4.46.0@webpack/buildin/global.js"), __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/_@tarojs_mini-runner@3.3.2@@tarojs/mini-runner/dist/template/comp.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@3.3.2@@tarojs/mini-runner/dist/template/comp.js ***!
  \*******************************************************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js");
/* eslint-disable no-undef */
 // @ts-ignore

Component(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createRecursiveComponentConfig"])());

/***/ }),

/***/ "./node_modules/_@tarojs_mini-runner@3.3.2@@tarojs/mini-runner/dist/template/custom-wrapper.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@3.3.2@@tarojs/mini-runner/dist/template/custom-wrapper.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-undef */

var runtime_1 = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js"); // @ts-ignore


Component(runtime_1.createRecursiveComponentConfig('custom-wrapper'));

/***/ }),

/***/ "./node_modules/_@tarojs_plugin-platform-weapp@3.3.2@@tarojs/plugin-platform-weapp/dist/components-react.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_plugin-platform-weapp@3.3.2@@tarojs/plugin-platform-weapp/dist/components-react.js ***!
  \******************************************************************************************************************/
/*! exports provided: Ad, AdCustom, Audio, Block, Button, Camera, Canvas, Checkbox, CheckboxGroup, CoverImage, CoverView, CustomWrapper, Editor, Form, FunctionalPageNavigator, Icon, Image, Input, KeyboardAccessory, Label, LivePlayer, LivePusher, Map, MatchMedia, MovableArea, MovableView, NavigationBar, Navigator, OfficialAccount, OpenData, PageContainer, PageMeta, Picker, PickerView, PickerViewColumn, Progress, Radio, RadioGroup, RichText, ScrollView, Slider, Slot, Swiper, SwiperItem, Switch, Text, Textarea, Video, View, VoipRoom, WebView */
/*! exports used: Text, View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Ad */
/* unused harmony export AdCustom */
/* unused harmony export Audio */
/* unused harmony export Block */
/* unused harmony export Button */
/* unused harmony export Camera */
/* unused harmony export Canvas */
/* unused harmony export Checkbox */
/* unused harmony export CheckboxGroup */
/* unused harmony export CoverImage */
/* unused harmony export CoverView */
/* unused harmony export CustomWrapper */
/* unused harmony export Editor */
/* unused harmony export Form */
/* unused harmony export FunctionalPageNavigator */
/* unused harmony export Icon */
/* unused harmony export Image */
/* unused harmony export Input */
/* unused harmony export KeyboardAccessory */
/* unused harmony export Label */
/* unused harmony export LivePlayer */
/* unused harmony export LivePusher */
/* unused harmony export Map */
/* unused harmony export MatchMedia */
/* unused harmony export MovableArea */
/* unused harmony export MovableView */
/* unused harmony export NavigationBar */
/* unused harmony export Navigator */
/* unused harmony export OfficialAccount */
/* unused harmony export OpenData */
/* unused harmony export PageContainer */
/* unused harmony export PageMeta */
/* unused harmony export Picker */
/* unused harmony export PickerView */
/* unused harmony export PickerViewColumn */
/* unused harmony export Progress */
/* unused harmony export Radio */
/* unused harmony export RadioGroup */
/* unused harmony export RichText */
/* unused harmony export ScrollView */
/* unused harmony export Slider */
/* unused harmony export Slot */
/* unused harmony export Swiper */
/* unused harmony export SwiperItem */
/* unused harmony export Switch */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Text; });
/* unused harmony export Textarea */
/* unused harmony export Video */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return View; });
/* unused harmony export VoipRoom */
/* unused harmony export WebView */
var View = 'view';
var Icon = 'icon';
var Progress = 'progress';
var RichText = 'rich-text';
var Text = 'text';
var Button = 'button';
var Checkbox = 'checkbox';
var CheckboxGroup = 'checkbox-group';
var Form = 'form';
var Input = 'input';
var Label = 'label';
var Picker = 'picker';
var PickerView = 'picker-view';
var PickerViewColumn = 'picker-view-column';
var Radio = 'radio';
var RadioGroup = 'radio-group';
var Slider = 'slider';
var Switch = 'switch';
var CoverImage = 'cover-image';
var Textarea = 'textarea';
var CoverView = 'cover-view';
var MovableArea = 'movable-area';
var MovableView = 'movable-view';
var ScrollView = 'scroll-view';
var Swiper = 'swiper';
var SwiperItem = 'swiper-item';
var Navigator = 'navigator';
var Audio = 'audio';
var Camera = 'camera';
var Image = 'image';
var LivePlayer = 'live-player';
var Video = 'video';
var Canvas = 'canvas';
var Ad = 'ad';
var WebView = 'web-view';
var Block = 'block';
var Map = 'map';
var Slot = 'slot';
var CustomWrapper = 'custom-wrapper'; // For React.createElement's type

var Editor = 'editor';
var MatchMedia = 'match-media';
var FunctionalPageNavigator = 'functional-page-navigator';
var LivePusher = 'live-pusher';
var OfficialAccount = 'official-account';
var OpenData = 'open-data';
var NavigationBar = 'navigation-bar';
var PageMeta = 'page-meta';
var VoipRoom = 'voip-room';
var AdCustom = 'ad-custom';
var PageContainer = 'page-container';
var KeyboardAccessory = 'keyboard-accessory';


/***/ }),

/***/ "./node_modules/_@tarojs_plugin-platform-weapp@3.3.2@@tarojs/plugin-platform-weapp/dist/runtime.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_plugin-platform-weapp@3.3.2@@tarojs/plugin-platform-weapp/dist/runtime.js ***!
  \*********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/shared */ "./node_modules/_@tarojs_shared@3.3.2@@tarojs/shared/dist/index.js");
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__);

var needPromiseApis = new Set(['authPrivateMessage', 'disableAlertBeforeUnload', 'enableAlertBeforeUnload', 'getBackgroundFetchData', 'getGroupEnterInfo', 'getShareInfo', 'getWeRunData', 'join1v1Chat', 'openVideoEditor', 'saveFileToDisk', 'scanItem', 'setEnable1v1Chat', 'setWindowSize', 'sendBizRedPacket', 'startFacialRecognitionVerify']);

function initNativeApi(taro) {
  Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["processApis"])(taro, wx, {
    needPromiseApis: needPromiseApis,
    modifyApis: function modifyApis(apis) {
      // fix https://github.com/NervJS/taro/issues/9899
      apis.delete('lanDebug');
    }
  });
  taro.cloud = wx.cloud;
}

var components = {
  // ======== 调整属性 ========
  Progress: {
    'border-radius': '0',
    'font-size': '16',
    duration: '30',
    bindActiveEnd: ''
  },
  RichText: {
    space: ''
  },
  Text: {
    'user-select': 'false'
  },
  Map: {
    polygons: '[]',
    subkey: '',
    rotate: '0',
    skew: '0',
    'enable-3D': 'false',
    'show-compass': 'false',
    'show-scale': 'false',
    'enable-overlooking': 'false',
    'enable-zoom': 'true',
    'enable-scroll': 'true',
    'enable-rotate': 'false',
    'enable-satellite': 'false',
    'enable-traffic': 'false',
    setting: '[]',
    bindLabelTap: '',
    bindRegionChange: '',
    bindPoiTap: ''
  },
  Button: {
    lang: 'en',
    'session-from': '',
    'send-message-title': '',
    'send-message-path': '',
    'send-message-img': '',
    'app-parameter': '',
    'show-message-card': 'false',
    'business-id': '',
    bindGetUserInfo: '',
    bindContact: '',
    bindGetPhoneNumber: '',
    bindError: '',
    bindOpenSetting: '',
    bindLaunchApp: ''
  },
  Form: {
    'report-submit-timeout': '0'
  },
  Input: {
    'always-embed': 'false',
    'adjust-position': 'true',
    'hold-keyboard': 'false',
    bindKeyboardHeightChange: ''
  },
  Picker: {
    'header-text': ''
  },
  PickerView: {
    bindPickStart: '',
    bindPickEnd: ''
  },
  Slider: {
    color: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('#e9e9e9'),
    'selected-color': Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('#1aad19')
  },
  Textarea: {
    'show-confirm-bar': 'true',
    'adjust-position': 'true',
    'hold-keyboard': 'false',
    'disable-default-padding': 'false',
    'confirm-type': Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('return'),
    'confirm-hold': 'false',
    bindKeyboardHeightChange: ''
  },
  ScrollView: {
    'enable-flex': 'false',
    'scroll-anchoring': 'false',
    'refresher-enabled': 'false',
    'refresher-threshold': '45',
    'refresher-default-style': Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('black'),
    'refresher-background': Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('#FFF'),
    'refresher-triggered': 'false',
    enhanced: 'false',
    bounces: 'true',
    'show-scrollbar': 'true',
    'paging-enabled': 'false',
    'fast-deceleration': 'false',
    bindDragStart: '',
    bindDragging: '',
    bindDragEnd: '',
    bindRefresherPulling: '',
    bindRefresherRefresh: '',
    bindRefresherRestore: '',
    bindRefresherAbort: ''
  },
  Swiper: {
    'snap-to-edge': 'false',
    'easing-function': Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('default')
  },
  SwiperItem: {
    'skip-hidden-item-layout': 'false'
  },
  Navigator: {
    target: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('self'),
    'app-id': '',
    path: '',
    'extra-data': '',
    version: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('version')
  },
  Camera: {
    mode: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('normal'),
    resolution: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('medium'),
    'frame-size': Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('medium'),
    bindInitDone: '',
    bindScanCode: ''
  },
  Image: {
    webp: 'false',
    'show-menu-by-longpress': 'false'
  },
  LivePlayer: {
    mode: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('live'),
    'sound-mode': Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('speaker'),
    'auto-pause-if-navigate': 'true',
    'auto-pause-if-open-native': 'true',
    'picture-in-picture-mode': '[]',
    bindstatechange: '',
    bindfullscreenchange: '',
    bindnetstatus: '',
    bindAudioVolumeNotify: '',
    bindEnterPictureInPicture: '',
    bindLeavePictureInPicture: ''
  },
  Video: {
    title: '',
    'play-btn-position': Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('bottom'),
    'enable-play-gesture': 'false',
    'auto-pause-if-navigate': 'true',
    'auto-pause-if-open-native': 'true',
    'vslide-gesture': 'false',
    'vslide-gesture-in-fullscreen': 'true',
    'ad-unit-id': '',
    'poster-for-crawler': '',
    'show-casting-button': 'false',
    'picture-in-picture-mode': '[]',
    // picture-in-picture-show-progress 属性先注释掉的原因如下：
    // 该属性超过了 wxml 属性的长度限制，实际无法使用且导致编译报错。可等微信官方修复后再放开。
    // 参考1：https://developers.weixin.qq.com/community/develop/doc/000a429beb87f0eac07acc0fc5b400
    // 参考2: https://developers.weixin.qq.com/community/develop/doc/0006883619c48054286a4308258c00?_at=vyxqpllafi
    // 'picture-in-picture-show-progress': 'false',
    'enable-auto-rotation': 'false',
    'show-screen-lock-button': 'false',
    'show-snapshot-button': 'false',
    'show-background-playback-button': 'false',
    'background-poster': '',
    bindProgress: '',
    bindLoadedMetadata: '',
    bindControlsToggle: '',
    bindEnterPictureInPicture: '',
    bindLeavePictureInPicture: '',
    bindSeekComplete: '',
    bindAdLoad: '',
    bindAdError: '',
    bindAdClose: '',
    bindAdPlay: ''
  },
  Canvas: {
    type: ''
  },
  Ad: {
    'ad-type': Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('banner'),
    'ad-theme': Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('white')
  },
  CoverView: {
    'marker-id': '',
    slot: ''
  },
  // ======== 额外组件 ========
  Editor: {
    'read-only': 'false',
    placeholder: '',
    'show-img-size': 'false',
    'show-img-toolbar': 'false',
    'show-img-resize': 'false',
    focus: 'false',
    bindReady: '',
    bindFocus: '',
    bindBlur: '',
    bindInput: '',
    bindStatusChange: '',
    name: ''
  },
  MatchMedia: {
    'min-width': '',
    'max-width': '',
    width: '',
    'min-height': '',
    'max-height': '',
    height: '',
    orientation: ''
  },
  FunctionalPageNavigator: {
    version: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('release'),
    name: '',
    args: '',
    bindSuccess: '',
    bindFail: '',
    bindCancel: ''
  },
  LivePusher: {
    url: '',
    mode: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('RTC'),
    autopush: 'false',
    muted: 'false',
    'enable-camera': 'true',
    'auto-focus': 'true',
    orientation: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('vertical'),
    beauty: '0',
    whiteness: '0',
    aspect: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('9:16'),
    'min-bitrate': '200',
    'max-bitrate': '1000',
    'audio-quality': Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('high'),
    'waiting-image': '',
    'waiting-image-hash': '',
    zoom: 'false',
    'device-position': Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('front'),
    'background-mute': 'false',
    mirror: 'false',
    'remote-mirror': 'false',
    'local-mirror': 'false',
    'audio-reverb-type': '0',
    'enable-mic': 'true',
    'enable-agc': 'false',
    'enable-ans': 'false',
    'audio-volume-type': Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('voicecall'),
    'video-width': '360',
    'video-height': '640',
    'beauty-style': Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('smooth'),
    filter: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('standard'),
    animation: '',
    bindStateChange: '',
    bindNetStatus: '',
    bindBgmStart: '',
    bindBgmProgress: '',
    bindBgmComplete: '',
    bindAudioVolumeNotify: ''
  },
  OfficialAccount: {
    bindLoad: '',
    bindError: ''
  },
  OpenData: {
    type: '',
    'open-gid': '',
    lang: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('en'),
    'default-text': '',
    'default-avatar': '',
    bindError: ''
  },
  NavigationBar: {
    title: '',
    loading: 'false',
    'front-color': '',
    'background-color': '',
    'color-animation-duration': '0',
    'color-animation-timing-func': Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('linear')
  },
  PageMeta: {
    'background-text-style': '',
    'background-color': '',
    'background-color-top': '',
    'background-color-bottom': '',
    'scroll-top': Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])(''),
    'scroll-duration': '300',
    'page-style': Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])(''),
    'root-font-size': Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])(''),
    bindResize: '',
    bindScroll: '',
    bindScrollDone: ''
  },
  VoipRoom: {
    openid: '',
    mode: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('camera'),
    'device-position': Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('front'),
    bindError: ''
  },
  AdCustom: {
    'unit-id': '',
    'ad-intervals': '',
    bindLoad: '',
    bindError: ''
  },
  PageContainer: {
    show: 'false',
    duration: '300',
    'z-index': '100',
    overlay: 'true',
    position: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])('bottom'),
    round: 'false',
    'close-on-slideDown': 'false',
    'overlay-style': '',
    'custom-style': '',
    bindBeforeEnter: '',
    bindEnter: '',
    bindAfterEnter: '',
    bindBeforeLeave: '',
    bindLeave: '',
    bindAfterLeave: '',
    bindClickOverlay: ''
  },
  KeyboardAccessory: {}
};
var hostConfig = {
  initNativeApi: initNativeApi
};
Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["mergeReconciler"])(hostConfig);
Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["mergeInternalComponents"])(components);

/***/ }),

/***/ "./node_modules/_@tarojs_react@3.3.2@@tarojs/react/dist/react.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_@tarojs_react@3.3.2@@tarojs/react/dist/react.esm.js ***!
  \***************************************************************************/
/*! exports provided: default, createPortal, findDOMNode, render, unmountComponentAtNode, unstable_batchedUpdates */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createPortal */
/* unused harmony export findDOMNode */
/* unused harmony export render */
/* unused harmony export unmountComponentAtNode */
/* unused harmony export unstable_batchedUpdates */
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reconciler */ "./node_modules/_react-reconciler@0.26.1@react-reconciler/cjs/react-reconciler.production.min.js");
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reconciler__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var scheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scheduler */ "./node_modules/_scheduler@0.20.2@scheduler/cjs/scheduler.production.min.js");
/* harmony import */ var scheduler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(scheduler__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/shared */ "./node_modules/_@tarojs_shared@3.3.2@@tarojs/shared/dist/index.js");
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__);







function isEventName(s) {
  return s[0] === 'o' && s[1] === 'n';
}

var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

function updateProps(dom, oldProps, newProps) {
  var i;

  for (i in oldProps) {
    if (!(i in newProps)) {
      setProperty(dom, i, null, oldProps[i]);
    }
  }

  var isFormElement = dom instanceof _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__["FormElement"];

  for (i in newProps) {
    if (oldProps[i] !== newProps[i] || isFormElement && i === 'value') {
      setProperty(dom, i, newProps[i], oldProps[i]);
    }
  }
} // function eventProxy (e: CommonEvent) {
//   const el = document.getElementById(e.currentTarget.id)
//   const handlers = el!.__handlers[e.type]
//   handlers[0](e)
// }


function setEvent(dom, name, value, oldValue) {
  var isCapture = name.endsWith('Capture');
  var eventName = name.toLowerCase().slice(2);

  if (isCapture) {
    eventName = eventName.slice(0, -7);
  }

  var compName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["capitalize"])(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["toCamelCase"])(dom.tagName.toLowerCase()));

  if (eventName === 'click' && compName in _tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["internalComponents"]) {
    eventName = 'tap';
  }

  if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["isFunction"])(value)) {
    if (!oldValue) {
      dom.addEventListener(eventName, value, isCapture);
    }

    if (eventName === 'regionchange') {
      dom.__handlers.begin[0] = value;
      dom.__handlers.end[0] = value;
    } else {
      dom.__handlers[eventName][0] = value;
    }
  } else {
    dom.removeEventListener(eventName, oldValue);
  }
}

function setStyle(style, key, value) {
  if (key[0] === '-') {
    style.setProperty(key, value.toString());
  }

  style[key] = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["isNumber"])(value) && IS_NON_DIMENSIONAL.test(key) === false ? value + 'px' : value == null ? '' : value;
}

function setProperty(dom, name, value, oldValue) {
  var _a, _b, _c, _d;

  name = name === 'className' ? 'class' : name;
  if (name === 'key' || name === 'children' || name === 'ref') ;else if (name === 'style') {
    var style = dom.style;

    if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(value)) {
      style.cssText = value;
    } else {
      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(oldValue)) {
        style.cssText = '';
        oldValue = null;
      }

      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["isObject"])(oldValue)) {
        for (var i in oldValue) {
          if (!(value && i in value)) {
            setStyle(style, i, '');
          }
        }
      }

      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["isObject"])(value)) {
        for (var _i in value) {
          if (!oldValue || value[_i] !== oldValue[_i]) {
            setStyle(style, _i, value[_i]);
          }
        }
      }
    }
  } else if (isEventName(name)) {
    setEvent(dom, name, value, oldValue);
  } else if (name === 'dangerouslySetInnerHTML') {
    var newHtml = (_b = (_a = value) === null || _a === void 0 ? void 0 : _a.__html) !== null && _b !== void 0 ? _b : '';
    var oldHtml = (_d = (_c = oldValue) === null || _c === void 0 ? void 0 : _c.__html) !== null && _d !== void 0 ? _d : '';

    if (newHtml || oldHtml) {
      if (oldHtml !== newHtml) {
        dom.innerHTML = newHtml;
      }
    }
  } else if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["isFunction"])(value)) {
    if (value == null) {
      dom.removeAttribute(name);
    } else {
      dom.setAttribute(name, value);
    }
  }
}
/* eslint-disable @typescript-eslint/indent */


var now = scheduler__WEBPACK_IMPORTED_MODULE_3__["unstable_now"];

function returnFalse() {
  return false;
}

var hostConfig = {
  createInstance: function createInstance(type) {
    return _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__["document"].createElement(type);
  },
  createTextInstance: function createTextInstance(text) {
    return _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__["document"].createTextNode(text);
  },
  getPublicInstance: function getPublicInstance(inst) {
    return inst;
  },
  getRootHostContext: function getRootHostContext() {
    return {};
  },
  getChildHostContext: function getChildHostContext() {
    return {};
  },
  appendChild: function appendChild(parent, child) {
    parent.appendChild(child);
  },
  appendInitialChild: function appendInitialChild(parent, child) {
    parent.appendChild(child);
  },
  appendChildToContainer: function appendChildToContainer(parent, child) {
    parent.appendChild(child);
  },
  removeChild: function removeChild(parent, child) {
    parent.removeChild(child);
  },
  removeChildFromContainer: function removeChildFromContainer(parent, child) {
    parent.removeChild(child);
  },
  insertBefore: function insertBefore(parent, child, refChild) {
    parent.insertBefore(child, refChild);
  },
  insertInContainerBefore: function insertInContainerBefore(parent, child, refChild) {
    parent.insertBefore(child, refChild);
  },
  commitTextUpdate: function commitTextUpdate(textInst, _, newText) {
    textInst.nodeValue = newText;
  },
  finalizeInitialChildren: function finalizeInitialChildren(dom, _, props) {
    updateProps(dom, {}, props);
    return false;
  },
  prepareUpdate: function prepareUpdate() {
    return _tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["EMPTY_ARR"];
  },
  commitUpdate: function commitUpdate(dom, _payload, _type, oldProps, newProps) {
    updateProps(dom, oldProps, newProps);
  },
  hideInstance: function hideInstance(instance) {
    var style = instance.style;
    style.setProperty('display', 'none');
  },
  unhideInstance: function unhideInstance(instance, props) {
    var styleProp = props.style;
    var display = (styleProp === null || styleProp === void 0 ? void 0 : styleProp.hasOwnProperty('display')) ? styleProp.display : null;
    display = display == null || typeof display === 'boolean' || display === '' ? '' : ('' + display).trim(); // eslint-disable-next-line dot-notation

    instance.style['display'] = display;
  },
  clearContainer: function clearContainer(element) {
    if (element.childNodes.length > 0) {
      element.textContent = '';
    }
  },
  queueMicrotask: typeof Promise !== 'undefined' ? function (callback) {
    return Promise.resolve(null).then(callback).catch(function (error) {
      setTimeout(function () {
        throw error;
      });
    });
  } : setTimeout,
  shouldSetTextContent: returnFalse,
  prepareForCommit: function prepareForCommit() {
    return null;
  },
  resetAfterCommit: _tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["noop"],
  commitMount: _tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["noop"],
  now: now,
  cancelTimeout: clearTimeout,
  scheduleTimeout: setTimeout,
  preparePortalMount: _tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["noop"],
  noTimeout: -1,
  supportsMutation: true,
  supportsPersistence: false,
  isPrimaryRenderer: true,
  supportsHydration: false
};
var TaroReconciler = react_reconciler__WEBPACK_IMPORTED_MODULE_2___default()(hostConfig);

if (true) {
  var foundDevTools = TaroReconciler.injectIntoDevTools({
    bundleType: 1,
    version: '17.0.2',
    rendererPackageName: 'taro-react'
  });

  if (!foundDevTools) {
    // eslint-disable-next-line no-console
    console.info('%cDownload the React DevTools ' + 'for a better development experience: ' + 'https://reactjs.org/link/react-devtools', 'font-weight:bold');
  }
}

var ContainerMap = new WeakMap();

var Root = /*#__PURE__*/function () {
  function Root(renderer, domContainer) {
    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Root);

    this.renderer = renderer;
    this.internalRoot = renderer.createContainer(domContainer, 0
    /** LegacyRoot: react-reconciler/src/ReactRootTags.js */
    , false, null);
  }

  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Root, [{
    key: "render",
    value: function render(children, cb) {
      this.renderer.updateContainer(children, this.internalRoot, null, cb);
      return this.renderer.getPublicRootInstance(this.internalRoot);
    }
  }, {
    key: "unmount",
    value: function unmount(cb) {
      this.renderer.updateContainer(null, this.internalRoot, null, cb);
    }
  }]);

  return Root;
}();

function render(element, domContainer, cb) {
  var oldRoot = ContainerMap.get(domContainer);

  if (oldRoot != null) {
    return oldRoot.render(element, cb);
  }

  var root = new Root(TaroReconciler, domContainer);
  ContainerMap.set(domContainer, root);
  return root.render(element, cb);
}
/* eslint-disable @typescript-eslint/no-unused-vars */


var unstable_batchedUpdates = TaroReconciler.batchedUpdates;

function unmountComponentAtNode(dom) {
  Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["ensure"])(dom && [1, 8, 9, 11].includes(dom.nodeType), 'unmountComponentAtNode(...): Target container is not a DOM element.');
  var root = ContainerMap.get(dom);
  if (!root) return false;
  unstable_batchedUpdates(function () {
    root.unmount(function () {
      ContainerMap.delete(dom);
    });
  }, null);
  return true;
}

function findDOMNode(comp) {
  if (comp == null) {
    return null;
  }

  var nodeType = comp.nodeType;

  if (nodeType === 1 || nodeType === 3) {
    return comp;
  }

  return TaroReconciler.findHostInstance(comp);
}

var portalType = typeof Symbol === 'function' && Symbol.for ? Symbol.for('react.portal') : 0xeaca;

function createPortal(children, containerInfo, key) {
  return {
    $$typeof: portalType,
    key: key == null ? null : String(key),
    children: children,
    containerInfo: containerInfo,
    implementation: null
  };
}

var index = {
  render: render,
  unstable_batchedUpdates: unstable_batchedUpdates,
  unmountComponentAtNode: unmountComponentAtNode,
  findDOMNode: findDOMNode,
  createPortal: createPortal
};
/* harmony default export */ __webpack_exports__["a"] = (index);


/***/ }),

/***/ "./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js ***!
  \*********************************************************************************/
/*! exports provided: Current, ElementNames, Events, FormElement, SERVICE_IDENTIFIER, Style, TaroElement, TaroEvent, TaroNode, TaroRootElement, TaroText, cancelAnimationFrame, connectReactPage, connectVuePage, container, createComponentConfig, createDocument, createEvent, createNativeComponentConfig, createPageConfig, createReactApp, createRecursiveComponentConfig, createVue3App, createVueApp, document, eventCenter, getComputedStyle, getCurrentInstance, hydrate, injectPageInstance, navigator, nextTick, now, options, requestAnimationFrame, stringify, useAddToFavorites, useDidHide, useDidShow, useOptionMenuClick, usePageScroll, usePullDownRefresh, usePullIntercept, useReachBottom, useReady, useResize, useRouter, useScope, useShareAppMessage, useShareTimeline, useTabItemTap, useTitleClick, window */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global, document, window, requestAnimationFrame, cancelAnimationFrame) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Current", function() { return Current; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementNames", function() { return ElementNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElement", function() { return FormElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_IDENTIFIER", function() { return SERVICE_IDENTIFIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroElement", function() { return TaroElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroEvent", function() { return TaroEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroNode", function() { return TaroNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroRootElement", function() { return TaroRootElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroText", function() { return TaroText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationFrame", function() { return caf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectReactPage", function() { return connectReactPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectVuePage", function() { return connectVuePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "container", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponentConfig", function() { return createComponentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDocument", function() { return createDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEvent", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNativeComponentConfig", function() { return createNativeComponentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageConfig", function() { return createPageConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReactApp", function() { return createReactApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRecursiveComponentConfig", function() { return createRecursiveComponentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVue3App", function() { return createVue3App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVueApp", function() { return createVueApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventCenter", function() { return eventCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedStyle", function() { return getComputedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() { return getCurrentInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectPageInstance", function() { return injectPageInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigator", function() { return navigator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAddToFavorites", function() { return useAddToFavorites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDidHide", function() { return useDidHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDidShow", function() { return useDidShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOptionMenuClick", function() { return useOptionMenuClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePageScroll", function() { return usePageScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePullDownRefresh", function() { return usePullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePullIntercept", function() { return usePullIntercept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReachBottom", function() { return useReachBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReady", function() { return useReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResize", function() { return useResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScope", function() { return useScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShareAppMessage", function() { return useShareAppMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShareTimeline", function() { return useShareTimeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTabItemTap", function() { return useTabItemTap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTitleClick", function() { return useTitleClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return window$1; });
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/set */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/set.js");
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/wrapNativeSuper.js");
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toArray */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! inversify */ "./node_modules/_inversify@5.1.1@inversify/es/inversify.js");
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @tarojs/shared */ "./node_modules/_@tarojs_shared@3.3.2@@tarojs/shared/dist/index.js");
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__);


















/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/** https://github.com/rbuckton/reflect-metadata */

if (false) {} else {
  // var Reflect;
  (function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
      // var root = typeof global === "object" ? global :
      //     typeof self === "object" ? self :
      //         typeof this === "object" ? this :
      //             Function("return this;")();
      var exporter = makeExporter(Reflect); // if (typeof root.Reflect === "undefined") {
      //     root.Reflect = Reflect;
      // }
      // else {
      //     exporter = makeExporter(root.Reflect, exporter);
      // }

      factory(exporter);

      function makeExporter(target, previous) {
        return function (key, value) {
          if (typeof target[key] !== "function") {
            Object.defineProperty(target, key, {
              configurable: true,
              writable: true,
              value: value
            });
          }

          if (previous) previous(key, value);
        };
      }
    })(function (exporter) {
      var hasOwn = Object.prototype.hasOwnProperty; // feature test for Symbol support

      var supportsSymbol = typeof Symbol === "function";
      var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
      var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
      var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support

      var supportsProto = {
        __proto__: []
      } instanceof Array; // feature test for __proto__ support

      var downLevel = !supportsCreate && !supportsProto;
      var HashMap = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: supportsCreate ? function () {
          return MakeDictionary(Object.create(null));
        } : supportsProto ? function () {
          return MakeDictionary({
            __proto__: null
          });
        } : function () {
          return MakeDictionary({});
        },
        has: downLevel ? function (map, key) {
          return hasOwn.call(map, key);
        } : function (map, key) {
          return key in map;
        },
        get: downLevel ? function (map, key) {
          return hasOwn.call(map, key) ? map[key] : undefined;
        } : function (map, key) {
          return map[key];
        }
      }; // Load global or shim versions of Map, Set, and WeakMap

      var functionPrototype = Object.getPrototypeOf(Function);
      var usePolyfill = (typeof process === "undefined" ? "undefined" : Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(process)) === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";

      var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();

      var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();

      var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill(); // [[Metadata]] internal slot
      // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots


      var Metadata = new _WeakMap();
      /**
       * Applies a set of decorators to a property of a target object.
       * @param decorators An array of decorators.
       * @param target The target object.
       * @param propertyKey (Optional) The property key to decorate.
       * @param attributes (Optional) The property descriptor for the target key.
       * @remarks Decorators are applied in reverse order.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     Example = Reflect.decorate(decoratorsArray, Example);
       *
       *     // property (on constructor)
       *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
       *
       *     // property (on prototype)
       *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
       *
       *     // method (on constructor)
       *     Object.defineProperty(Example, "staticMethod",
       *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
       *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
       *
       *     // method (on prototype)
       *     Object.defineProperty(Example.prototype, "method",
       *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
       *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
       *
       */

      function decorate(decorators, target, propertyKey, attributes) {
        if (!IsUndefined(propertyKey)) {
          if (!IsArray(decorators)) throw new TypeError();
          if (!IsObject(target)) throw new TypeError();
          if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes)) throw new TypeError();
          if (IsNull(attributes)) attributes = undefined;
          propertyKey = ToPropertyKey(propertyKey);
          return DecorateProperty(decorators, target, propertyKey, attributes);
        } else {
          if (!IsArray(decorators)) throw new TypeError();
          if (!IsConstructor(target)) throw new TypeError();
          return DecorateConstructor(decorators, target);
        }
      }

      exporter("decorate", decorate); // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
      // https://rbuckton.github.io/reflect-metadata/#reflect.metadata

      /**
       * A default metadata decorator factory that can be used on a class, class member, or parameter.
       * @param metadataKey The key for the metadata entry.
       * @param metadataValue The value for the metadata entry.
       * @returns A decorator function.
       * @remarks
       * If `metadataKey` is already defined for the target and target key, the
       * metadataValue for that key will be overwritten.
       * @example
       *
       *     // constructor
       *     @Reflect.metadata(key, value)
       *     class Example {
       *     }
       *
       *     // property (on constructor, TypeScript only)
       *     class Example {
       *         @Reflect.metadata(key, value)
       *         static staticProperty;
       *     }
       *
       *     // property (on prototype, TypeScript only)
       *     class Example {
       *         @Reflect.metadata(key, value)
       *         property;
       *     }
       *
       *     // method (on constructor)
       *     class Example {
       *         @Reflect.metadata(key, value)
       *         static staticMethod() { }
       *     }
       *
       *     // method (on prototype)
       *     class Example {
       *         @Reflect.metadata(key, value)
       *         method() { }
       *     }
       *
       */

      function metadata(metadataKey, metadataValue) {
        function decorator(target, propertyKey) {
          if (!IsObject(target)) throw new TypeError();
          if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey)) throw new TypeError();
          OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }

        return decorator;
      }

      exporter("metadata", metadata);
      /**
       * Define a unique metadata entry on the target.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param metadataValue A value that contains attached metadata.
       * @param target The target object on which to define metadata.
       * @param propertyKey (Optional) The property key for the target.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     Reflect.defineMetadata("custom:annotation", options, Example);
       *
       *     // property (on constructor)
       *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
       *
       *     // property (on prototype)
       *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
       *
       *     // method (on constructor)
       *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
       *
       *     // method (on prototype)
       *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
       *
       *     // decorator factory as metadata-producing annotation.
       *     function MyAnnotation(options): Decorator {
       *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
       *     }
       *
       */

      function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
      }

      exporter("defineMetadata", defineMetadata);
      /**
       * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.hasMetadata("custom:annotation", Example);
       *
       *     // property (on constructor)
       *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
       *
       */

      function hasMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasMetadata(metadataKey, target, propertyKey);
      }

      exporter("hasMetadata", hasMetadata);
      /**
       * Gets a value indicating whether the target object has the provided metadata key defined.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
       *
       *     // property (on constructor)
       *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
       *
       */

      function hasOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
      }

      exporter("hasOwnMetadata", hasOwnMetadata);
      /**
       * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.getMetadata("custom:annotation", Example);
       *
       *     // property (on constructor)
       *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
       *
       */

      function getMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetMetadata(metadataKey, target, propertyKey);
      }

      exporter("getMetadata", getMetadata);
      /**
       * Gets the metadata value for the provided metadata key on the target object.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.getOwnMetadata("custom:annotation", Example);
       *
       *     // property (on constructor)
       *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
       *
       */

      function getOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
      }

      exporter("getOwnMetadata", getOwnMetadata);
      /**
       * Gets the metadata keys defined on the target object or its prototype chain.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns An array of unique metadata keys.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.getMetadataKeys(Example);
       *
       *     // property (on constructor)
       *     result = Reflect.getMetadataKeys(Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.getMetadataKeys(Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.getMetadataKeys(Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.getMetadataKeys(Example.prototype, "method");
       *
       */

      function getMetadataKeys(target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryMetadataKeys(target, propertyKey);
      }

      exporter("getMetadataKeys", getMetadataKeys);
      /**
       * Gets the unique metadata keys defined on the target object.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns An array of unique metadata keys.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.getOwnMetadataKeys(Example);
       *
       *     // property (on constructor)
       *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
       *
       */

      function getOwnMetadataKeys(target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryOwnMetadataKeys(target, propertyKey);
      }

      exporter("getOwnMetadataKeys", getOwnMetadataKeys);
      /**
       * Deletes the metadata entry from the target object with the provided key.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns `true` if the metadata entry was found and deleted; otherwise, false.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.deleteMetadata("custom:annotation", Example);
       *
       *     // property (on constructor)
       *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
       *
       */

      function deleteMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        var metadataMap = GetOrCreateMetadataMap(target, propertyKey,
        /*Create*/
        false);
        if (IsUndefined(metadataMap)) return false;
        if (!metadataMap.delete(metadataKey)) return false;
        if (metadataMap.size > 0) return true;
        var targetMetadata = Metadata.get(target);
        targetMetadata.delete(propertyKey);
        if (targetMetadata.size > 0) return true;
        Metadata.delete(target);
        return true;
      }

      exporter("deleteMetadata", deleteMetadata);

      function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target);

          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsConstructor(decorated)) throw new TypeError();
            target = decorated;
          }
        }

        return target;
      }

      function DecorateProperty(decorators, target, propertyKey, descriptor) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target, propertyKey, descriptor);

          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsObject(decorated)) throw new TypeError();
            descriptor = decorated;
          }
        }

        return descriptor;
      }

      function GetOrCreateMetadataMap(O, P, Create) {
        var targetMetadata = Metadata.get(O);

        if (IsUndefined(targetMetadata)) {
          if (!Create) return undefined;
          targetMetadata = new _Map();
          Metadata.set(O, targetMetadata);
        }

        var metadataMap = targetMetadata.get(P);

        if (IsUndefined(metadataMap)) {
          if (!Create) return undefined;
          metadataMap = new _Map();
          targetMetadata.set(P, metadataMap);
        }

        return metadataMap;
      } // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata


      function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn) return true;
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent)) return OrdinaryHasMetadata(MetadataKey, parent, P);
        return false;
      } // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata


      function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P,
        /*Create*/
        false);
        if (IsUndefined(metadataMap)) return false;
        return ToBoolean(metadataMap.has(MetadataKey));
      } // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata


      function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent)) return OrdinaryGetMetadata(MetadataKey, parent, P);
        return undefined;
      } // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata


      function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P,
        /*Create*/
        false);
        if (IsUndefined(metadataMap)) return undefined;
        return metadataMap.get(MetadataKey);
      } // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata


      function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P,
        /*Create*/
        true);
        metadataMap.set(MetadataKey, MetadataValue);
      } // 3.1.6.1 OrdinaryMetadataKeys(O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys


      function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (parent === null) return ownKeys;
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0) return ownKeys;
        if (ownKeys.length <= 0) return parentKeys;
        var set = new _Set();
        var keys = [];

        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
          var key = ownKeys_1[_i];
          var hasKey = set.has(key);

          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }

        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
          var key = parentKeys_1[_a];
          var hasKey = set.has(key);

          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }

        return keys;
      } // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys


      function OrdinaryOwnMetadataKeys(O, P) {
        var keys = [];
        var metadataMap = GetOrCreateMetadataMap(O, P,
        /*Create*/
        false);
        if (IsUndefined(metadataMap)) return keys;
        var keysObj = metadataMap.keys();
        var iterator = GetIterator(keysObj);
        var k = 0;

        while (true) {
          var next = IteratorStep(iterator);

          if (!next) {
            keys.length = k;
            return keys;
          }

          var nextValue = IteratorValue(next);

          try {
            keys[k] = nextValue;
          } catch (e) {
            try {
              IteratorClose(iterator);
            } finally {
              throw e;
            }
          }

          k++;
        }
      } // 6 ECMAScript Data Typ0es and Values
      // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values


      function Type(x) {
        if (x === null) return 1
        /* Null */
        ;

        switch (Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(x)) {
          case "undefined":
            return 0
            /* Undefined */
            ;

          case "boolean":
            return 2
            /* Boolean */
            ;

          case "string":
            return 3
            /* String */
            ;

          case "symbol":
            return 4
            /* Symbol */
            ;

          case "number":
            return 5
            /* Number */
            ;

          case "object":
            return x === null ? 1
            /* Null */
            : 6
            /* Object */
            ;

          default:
            return 6
            /* Object */
            ;
        }
      } // 6.1.1 The Undefined Type
      // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type


      function IsUndefined(x) {
        return x === undefined;
      } // 6.1.2 The Null Type
      // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type


      function IsNull(x) {
        return x === null;
      } // 6.1.5 The Symbol Type
      // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type


      function IsSymbol(x) {
        return Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(x) === "symbol";
      } // 6.1.7 The Object Type
      // https://tc39.github.io/ecma262/#sec-object-type


      function IsObject(x) {
        return Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(x) === "object" ? x !== null : typeof x === "function";
      } // 7.1 Type Conversion
      // https://tc39.github.io/ecma262/#sec-type-conversion
      // 7.1.1 ToPrimitive(input [, PreferredType])
      // https://tc39.github.io/ecma262/#sec-toprimitive


      function ToPrimitive(input, PreferredType) {
        switch (Type(input)) {
          case 0
          /* Undefined */
          :
            return input;

          case 1
          /* Null */
          :
            return input;

          case 2
          /* Boolean */
          :
            return input;

          case 3
          /* String */
          :
            return input;

          case 4
          /* Symbol */
          :
            return input;

          case 5
          /* Number */
          :
            return input;
        }

        var hint = PreferredType === 3
        /* String */
        ? "string" : PreferredType === 5
        /* Number */
        ? "number" : "default";
        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);

        if (exoticToPrim !== undefined) {
          var result = exoticToPrim.call(input, hint);
          if (IsObject(result)) throw new TypeError();
          return result;
        }

        return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
      } // 7.1.1.1 OrdinaryToPrimitive(O, hint)
      // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive


      function OrdinaryToPrimitive(O, hint) {
        if (hint === "string") {
          var toString_1 = O.toString;

          if (IsCallable(toString_1)) {
            var result = toString_1.call(O);
            if (!IsObject(result)) return result;
          }

          var valueOf = O.valueOf;

          if (IsCallable(valueOf)) {
            var result = valueOf.call(O);
            if (!IsObject(result)) return result;
          }
        } else {
          var valueOf = O.valueOf;

          if (IsCallable(valueOf)) {
            var result = valueOf.call(O);
            if (!IsObject(result)) return result;
          }

          var toString_2 = O.toString;

          if (IsCallable(toString_2)) {
            var result = toString_2.call(O);
            if (!IsObject(result)) return result;
          }
        }

        throw new TypeError();
      } // 7.1.2 ToBoolean(argument)
      // https://tc39.github.io/ecma262/2016/#sec-toboolean


      function ToBoolean(argument) {
        return !!argument;
      } // 7.1.12 ToString(argument)
      // https://tc39.github.io/ecma262/#sec-tostring


      function ToString(argument) {
        return "" + argument;
      } // 7.1.14 ToPropertyKey(argument)
      // https://tc39.github.io/ecma262/#sec-topropertykey


      function ToPropertyKey(argument) {
        var key = ToPrimitive(argument, 3
        /* String */
        );
        if (IsSymbol(key)) return key;
        return ToString(key);
      } // 7.2 Testing and Comparison Operations
      // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
      // 7.2.2 IsArray(argument)
      // https://tc39.github.io/ecma262/#sec-isarray


      function IsArray(argument) {
        return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
      } // 7.2.3 IsCallable(argument)
      // https://tc39.github.io/ecma262/#sec-iscallable


      function IsCallable(argument) {
        // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
        return typeof argument === "function";
      } // 7.2.4 IsConstructor(argument)
      // https://tc39.github.io/ecma262/#sec-isconstructor


      function IsConstructor(argument) {
        // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
        return typeof argument === "function";
      } // 7.2.7 IsPropertyKey(argument)
      // https://tc39.github.io/ecma262/#sec-ispropertykey


      function IsPropertyKey(argument) {
        switch (Type(argument)) {
          case 3
          /* String */
          :
            return true;

          case 4
          /* Symbol */
          :
            return true;

          default:
            return false;
        }
      } // 7.3 Operations on Objects
      // https://tc39.github.io/ecma262/#sec-operations-on-objects
      // 7.3.9 GetMethod(V, P)
      // https://tc39.github.io/ecma262/#sec-getmethod


      function GetMethod(V, P) {
        var func = V[P];
        if (func === undefined || func === null) return undefined;
        if (!IsCallable(func)) throw new TypeError();
        return func;
      } // 7.4 Operations on Iterator Objects
      // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects


      function GetIterator(obj) {
        var method = GetMethod(obj, iteratorSymbol);
        if (!IsCallable(method)) throw new TypeError(); // from Call

        var iterator = method.call(obj);
        if (!IsObject(iterator)) throw new TypeError();
        return iterator;
      } // 7.4.4 IteratorValue(iterResult)
      // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue


      function IteratorValue(iterResult) {
        return iterResult.value;
      } // 7.4.5 IteratorStep(iterator)
      // https://tc39.github.io/ecma262/#sec-iteratorstep


      function IteratorStep(iterator) {
        var result = iterator.next();
        return result.done ? false : result;
      } // 7.4.6 IteratorClose(iterator, completion)
      // https://tc39.github.io/ecma262/#sec-iteratorclose


      function IteratorClose(iterator) {
        var f = iterator["return"];
        if (f) f.call(iterator);
      } // 9.1 Ordinary Object Internal Methods and Internal Slots
      // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
      // 9.1.1.1 OrdinaryGetPrototypeOf(O)
      // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof


      function OrdinaryGetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype) return proto; // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
        // Try to determine the superclass constructor. Compatible implementations
        // must either set __proto__ on a subclass constructor to the superclass constructor,
        // or ensure each class has a valid `constructor` property on its prototype that
        // points back to the constructor.
        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
        // This is the case when in ES6 or when using __proto__ in a compatible browser.

        if (proto !== functionPrototype) return proto; // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.

        var prototype = O.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype) return proto; // If the constructor was not a function, then we cannot determine the heritage.

        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function") return proto; // If we have some kind of self-reference, then we cannot determine the heritage.

        if (constructor === O) return proto; // we have a pretty good guess at the heritage.

        return constructor;
      } // naive Map shim


      function CreateMapPolyfill() {
        var cacheSentinel = {};
        var arraySentinel = [];

        var MapIterator = function () {
          function MapIterator(keys, values, selector) {
            this._index = 0;
            this._keys = keys;
            this._values = values;
            this._selector = selector;
          }

          MapIterator.prototype["@@iterator"] = function () {
            return this;
          };

          MapIterator.prototype[iteratorSymbol] = function () {
            return this;
          };

          MapIterator.prototype.next = function () {
            var index = this._index;

            if (index >= 0 && index < this._keys.length) {
              var result = this._selector(this._keys[index], this._values[index]);

              if (index + 1 >= this._keys.length) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
              } else {
                this._index++;
              }

              return {
                value: result,
                done: false
              };
            }

            return {
              value: undefined,
              done: true
            };
          };

          MapIterator.prototype.throw = function (error) {
            if (this._index >= 0) {
              this._index = -1;
              this._keys = arraySentinel;
              this._values = arraySentinel;
            }

            throw error;
          };

          MapIterator.prototype.return = function (value) {
            if (this._index >= 0) {
              this._index = -1;
              this._keys = arraySentinel;
              this._values = arraySentinel;
            }

            return {
              value: value,
              done: true
            };
          };

          return MapIterator;
        }();

        return function () {
          function Map() {
            this._keys = [];
            this._values = [];
            this._cacheKey = cacheSentinel;
            this._cacheIndex = -2;
          }

          Object.defineProperty(Map.prototype, "size", {
            get: function get() {
              return this._keys.length;
            },
            enumerable: true,
            configurable: true
          });

          Map.prototype.has = function (key) {
            return this._find(key,
            /*insert*/
            false) >= 0;
          };

          Map.prototype.get = function (key) {
            var index = this._find(key,
            /*insert*/
            false);

            return index >= 0 ? this._values[index] : undefined;
          };

          Map.prototype.set = function (key, value) {
            var index = this._find(key,
            /*insert*/
            true);

            this._values[index] = value;
            return this;
          };

          Map.prototype.delete = function (key) {
            var index = this._find(key,
            /*insert*/
            false);

            if (index >= 0) {
              var size = this._keys.length;

              for (var i = index + 1; i < size; i++) {
                this._keys[i - 1] = this._keys[i];
                this._values[i - 1] = this._values[i];
              }

              this._keys.length--;
              this._values.length--;

              if (key === this._cacheKey) {
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              }

              return true;
            }

            return false;
          };

          Map.prototype.clear = function () {
            this._keys.length = 0;
            this._values.length = 0;
            this._cacheKey = cacheSentinel;
            this._cacheIndex = -2;
          };

          Map.prototype.keys = function () {
            return new MapIterator(this._keys, this._values, getKey);
          };

          Map.prototype.values = function () {
            return new MapIterator(this._keys, this._values, getValue);
          };

          Map.prototype.entries = function () {
            return new MapIterator(this._keys, this._values, getEntry);
          };

          Map.prototype["@@iterator"] = function () {
            return this.entries();
          };

          Map.prototype[iteratorSymbol] = function () {
            return this.entries();
          };

          Map.prototype._find = function (key, insert) {
            if (this._cacheKey !== key) {
              this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
            }

            if (this._cacheIndex < 0 && insert) {
              this._cacheIndex = this._keys.length;

              this._keys.push(key);

              this._values.push(undefined);
            }

            return this._cacheIndex;
          };

          return Map;
        }();

        function getKey(key, _) {
          return key;
        }

        function getValue(_, value) {
          return value;
        }

        function getEntry(key, value) {
          return [key, value];
        }
      } // naive Set shim


      function CreateSetPolyfill() {
        return function () {
          function Set() {
            this._map = new _Map();
          }

          Object.defineProperty(Set.prototype, "size", {
            get: function get() {
              return this._map.size;
            },
            enumerable: true,
            configurable: true
          });

          Set.prototype.has = function (value) {
            return this._map.has(value);
          };

          Set.prototype.add = function (value) {
            return this._map.set(value, value), this;
          };

          Set.prototype.delete = function (value) {
            return this._map.delete(value);
          };

          Set.prototype.clear = function () {
            this._map.clear();
          };

          Set.prototype.keys = function () {
            return this._map.keys();
          };

          Set.prototype.values = function () {
            return this._map.values();
          };

          Set.prototype.entries = function () {
            return this._map.entries();
          };

          Set.prototype["@@iterator"] = function () {
            return this.keys();
          };

          Set.prototype[iteratorSymbol] = function () {
            return this.keys();
          };

          return Set;
        }();
      } // naive WeakMap shim


      function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var keys = HashMap.create();
        var rootKey = CreateUniqueKey();
        return function () {
          function WeakMap() {
            this._key = CreateUniqueKey();
          }

          WeakMap.prototype.has = function (target) {
            var table = GetOrCreateWeakMapTable(target,
            /*create*/
            false);
            return table !== undefined ? HashMap.has(table, this._key) : false;
          };

          WeakMap.prototype.get = function (target) {
            var table = GetOrCreateWeakMapTable(target,
            /*create*/
            false);
            return table !== undefined ? HashMap.get(table, this._key) : undefined;
          };

          WeakMap.prototype.set = function (target, value) {
            var table = GetOrCreateWeakMapTable(target,
            /*create*/
            true);
            table[this._key] = value;
            return this;
          };

          WeakMap.prototype.delete = function (target) {
            var table = GetOrCreateWeakMapTable(target,
            /*create*/
            false);
            return table !== undefined ? delete table[this._key] : false;
          };

          WeakMap.prototype.clear = function () {
            // NOTE: not a real clear, just makes the previous data unreachable
            this._key = CreateUniqueKey();
          };

          return WeakMap;
        }();

        function CreateUniqueKey() {
          var key;

          do {
            key = "@@WeakMap@@" + CreateUUID();
          } while (HashMap.has(keys, key));

          keys[key] = true;
          return key;
        }

        function GetOrCreateWeakMapTable(target, create) {
          if (!hasOwn.call(target, rootKey)) {
            if (!create) return undefined;
            Object.defineProperty(target, rootKey, {
              value: HashMap.create()
            });
          }

          return target[rootKey];
        }

        function FillRandomBytes(buffer, size) {
          for (var i = 0; i < size; ++i) {
            buffer[i] = Math.random() * 0xff | 0;
          }

          return buffer;
        }

        function GenRandomBytes(size) {
          if (typeof Uint8Array === "function") {
            if (typeof crypto !== "undefined") return crypto.getRandomValues(new Uint8Array(size));
            if (typeof msCrypto !== "undefined") return msCrypto.getRandomValues(new Uint8Array(size));
            return FillRandomBytes(new Uint8Array(size), size);
          }

          return FillRandomBytes(new Array(size), size);
        }

        function CreateUUID() {
          var data = GenRandomBytes(UUID_SIZE); // mark as random - RFC 4122 § 4.4

          data[6] = data[6] & 0x4f | 0x40;
          data[8] = data[8] & 0xbf | 0x80;
          var result = "";

          for (var offset = 0; offset < UUID_SIZE; ++offset) {
            var byte = data[offset];
            if (offset === 4 || offset === 6 || offset === 8) result += "-";
            if (byte < 16) result += "0";
            result += byte.toString(16).toLowerCase();
          }

          return result;
        }
      } // uses a heuristic used by v8 and chakra to force an object into dictionary mode.


      function MakeDictionary(obj) {
        obj.__ = undefined;
        delete obj.__;
        return obj;
      }
    });
  })(Reflect || (Reflect = {}));
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if ((typeof Reflect === "undefined" ? "undefined" : Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

var SERVICE_IDENTIFIER = {
  TaroElement: 'TaroElement',
  TaroElementFactory: 'Factory<TaroElement>',
  TaroText: 'TaroText',
  TaroTextFactory: 'Factory<TaroText>',
  TaroNodeImpl: 'TaroNodeImpl',
  TaroElementImpl: 'TaroElementImpl',
  InnerHTMLImpl: 'InnerHTMLImpl',
  insertAdjacentHTMLImpl: 'insertAdjacentHTMLImpl',
  getBoundingClientRectImpl: 'getBoundingClientRectImpl',
  Hooks: 'hooks',
  onRemoveAttribute: 'onRemoveAttribute',
  getLifecycle: 'getLifecycle',
  getPathIndex: 'getPathIndex',
  getEventCenter: 'getEventCenter',
  isBubbleEvents: 'isBubbleEvents',
  getSpecialNodes: 'getSpecialNodes',
  eventCenter: 'eventCenter',
  modifyMpEvent: 'modifyMpEvent',
  modifyTaroEvent: 'modifyTaroEvent',
  batchedEventUpdates: 'batchedEventUpdates',
  mergePageInstance: 'mergePageInstance',
  createPullDownComponent: 'createPullDownComponent',
  getDOMNode: 'getDOMNode',
  initNativeApi: 'initNativeApi',
  modifyHydrateData: 'modifyHydrateData',
  modifySetAttrPayload: 'modifySetAttrPayload',
  modifyRmAttrPayload: 'modifyRmAttrPayload',
  onAddEvent: 'onAddEvent',
  patchElement: 'patchElement'
};
var PROPERTY_THRESHOLD = 2046;
var HOOKS_APP_ID = 'taro-app';
var SET_DATA = '小程序 setData';
var PAGE_INIT = '页面初始化';
var ROOT_STR = 'root';
var HTML = 'html';
var HEAD = 'head';
var BODY = 'body';
var APP = 'app';
var CONTAINER = 'container';
var DOCUMENT_ELEMENT_NAME = '#document';
var ID = 'id';
var UID = 'uid';
var CLASS = 'class';
var STYLE = 'style';
var FOCUS = 'focus';
var VIEW = 'view';
var STATIC_VIEW = 'static-view';
var PURE_VIEW = 'pure-view';
var PROPS = 'props';
var DATASET = 'dataset';
var OBJECT = 'object';
var VALUE = 'value';
var INPUT = 'input';
var CHANGE = 'change';
var CUSTOM_WRAPPER = 'custom-wrapper';
var TARGET = 'target';
var CURRENT_TARGET = 'currentTarget';
var TYPE = 'type';
var CONFIRM = 'confirm';
var TIME_STAMP = 'timeStamp';
var KEY_CODE = 'keyCode';
var TOUCHMOVE = 'touchmove';
var DATE = 'Date';
var SET_TIMEOUT = 'setTimeout';
var CATCHMOVE = 'catchMove';
var CATCH_VIEW = 'catch-view';
var COMMENT = 'comment';

var incrementId = function incrementId() {
  var id = 0;
  return function () {
    return (id++).toString();
  };
};

function isElement(node) {
  return node.nodeType === 1
  /* ELEMENT_NODE */
  ;
}

function isText(node) {
  return node.nodeType === 3
  /* TEXT_NODE */
  ;
}

function isComment(node) {
  return node.nodeName === COMMENT;
}

function isHasExtractProp(el) {
  var res = Object.keys(el.props).find(function (prop) {
    return !(/^(class|style|id)$/.test(prop) || prop.startsWith('data-'));
  });
  return Boolean(res);
}
/**
 * 往上寻找组件树直到 root，寻找是否有祖先组件绑定了同类型的事件
 * @param node 当前组件
 * @param type 事件类型
 */


function isParentBinded(node, type) {
  var _a;

  var res = false;

  while ((node === null || node === void 0 ? void 0 : node.parentElement) && node.parentElement._path !== ROOT_STR) {
    if ((_a = node.parentElement.__handlers[type]) === null || _a === void 0 ? void 0 : _a.length) {
      res = true;
      break;
    }

    node = node.parentElement;
  }

  return res;
}

function shortcutAttr(key) {
  switch (key) {
    case STYLE:
      return "st"
      /* Style */
      ;

    case ID:
      return UID;

    case CLASS:
      return "cl"
      /* Class */
      ;

    default:
      return key;
  }
}

var TaroEventTarget = /*#__PURE__*/function () {
  function TaroEventTarget( // eslint-disable-next-line @typescript-eslint/indent
  hooks) {
    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, TaroEventTarget);

    this.__handlers = {};
    this.hooks = hooks;
  }

  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(TaroEventTarget, [{
    key: "addEventListener",
    value: function addEventListener(type, handler, options) {
      var _a, _b;

      (_b = (_a = this.hooks).onAddEvent) === null || _b === void 0 ? void 0 : _b.call(_a, type, handler, options, this);

      if (type === 'regionchange') {
        // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
        this.addEventListener('begin', handler, options);
        this.addEventListener('end', handler, options);
        return;
      }

      type = type.toLowerCase();
      var handlers = this.__handlers[type];
      var isCapture = Boolean(options);
      var isOnce = false;

      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isObject"])(options)) {
        isCapture = Boolean(options.capture);
        isOnce = Boolean(options.once);
      }

      if (isOnce) {
        var wrapper = function wrapper() {
          handler.apply(this, arguments); // this 指向 Element

          this.removeEventListener(type, wrapper);
        };

        this.addEventListener(type, wrapper, Object.assign(Object.assign({}, options), {
          once: false
        }));
        return;
      }

       true && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["warn"])(isCapture, 'Taro 暂未实现 event 的 capture 特性。');

      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isArray"])(handlers)) {
        handlers.push(handler);
      } else {
        this.__handlers[type] = [handler];
      }
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, handler) {
      type = type.toLowerCase();

      if (handler == null) {
        return;
      }

      var handlers = this.__handlers[type];

      if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isArray"])(handlers)) {
        return;
      }

      var index = handlers.indexOf(handler);
       true && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["warn"])(index === -1, "\u4E8B\u4EF6: '".concat(type, "' \u6CA1\u6709\u6CE8\u518C\u5728 DOM \u4E2D\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u88AB\u79FB\u9664\u3002"));
      handlers.splice(index, 1);
    }
  }, {
    key: "isAnyEventBinded",
    value: function isAnyEventBinded() {
      var handlers = this.__handlers;
      var isAnyEventBinded = Object.keys(handlers).find(function (key) {
        return handlers[key].length;
      });
      return Boolean(isAnyEventBinded);
    }
  }]);

  return TaroEventTarget;
}();

TaroEventTarget = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* injectable */ "d"])(), __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.Hooks)), __metadata("design:paramtypes", [Object])], TaroEventTarget);
/**
 * React also has a fancy function's name for this: `hydrate()`.
 * You may have been heard `hydrate` as a SSR-related function,
 * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
 * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
 */

function hydrate(node) {
  var _data;

  var _a, _b;

  var nodeName = node.nodeName;

  if (isText(node)) {
    var _ref;

    return _ref = {}, Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(_ref, "v"
    /* Text */
    , node.nodeValue), Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(_ref, "nn"
    /* NodeName */
    , nodeName), _ref;
  }

  var data = (_data = {}, Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(_data, "nn"
  /* NodeName */
  , nodeName), Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(_data, "uid", node.uid), _data);
  var props = node.props;
  var SPECIAL_NODES = node.hooks.getSpecialNodes();

  if (!node.isAnyEventBinded() && SPECIAL_NODES.indexOf(nodeName) > -1) {
    data["nn"
    /* NodeName */
    ] = "static-".concat(nodeName);

    if (nodeName === VIEW && !isHasExtractProp(node)) {
      data["nn"
      /* NodeName */
      ] = PURE_VIEW;
    }
  }

  for (var prop in props) {
    var propInCamelCase = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["toCamelCase"])(prop);

    if (!prop.startsWith('data-') && // 在 node.dataset 的数据
    prop !== CLASS && prop !== STYLE && prop !== ID && propInCamelCase !== CATCHMOVE) {
      data[propInCamelCase] = props[prop];
    }

    if (nodeName === VIEW && propInCamelCase === CATCHMOVE && props[prop] !== false) {
      data["nn"
      /* NodeName */
      ] = CATCH_VIEW;
    }
  }

  var childNodes = node.childNodes; // 过滤 comment 节点

  childNodes = childNodes.filter(function (node) {
    return !isComment(node);
  });

  if (childNodes.length > 0) {
    data["cn"
    /* Childnodes */
    ] = childNodes.map(hydrate);
  } else {
    data["cn"
    /* Childnodes */
    ] = [];
  }

  if (node.className !== '') {
    data["cl"
    /* Class */
    ] = node.className;
  }

  if (node.cssText !== '' && nodeName !== 'swiper-item') {
    data["st"
    /* Style */
    ] = node.cssText;
  }

  (_b = (_a = node.hooks).modifyHydrateData) === null || _b === void 0 ? void 0 : _b.call(_a, data);
  return data;
}

var eventSource = new Map();
var ElementNames;

(function (ElementNames) {
  ElementNames["Element"] = "Element";
  ElementNames["Document"] = "Document";
  ElementNames["RootElement"] = "RootElement";
  ElementNames["FormElement"] = "FormElement";
})(ElementNames || (ElementNames = {}));

var nodeId = incrementId();

var TaroNode = /*#__PURE__*/function (_TaroEventTarget) {
  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(TaroNode, _TaroEventTarget);

  var _super = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(TaroNode);

  function TaroNode( // eslint-disable-next-line @typescript-eslint/indent
  impl, getElement, hooks) {
    var _this;

    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, TaroNode);

    _this = _super.call(this, hooks);
    _this.parentNode = null;
    _this.childNodes = [];

    _this.hydrate = function (node) {
      return function () {
        return hydrate(node);
      };
    };

    impl.bind(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_this));
    _this._getElement = getElement;
    _this.uid = "_n_".concat(nodeId());
    eventSource.set(_this.uid, Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_this));
    return _this;
  }
  /**
   * like jQuery's $.empty()
   */


  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(TaroNode, [{
    key: "_empty",
    value: function _empty() {
      while (this.childNodes.length > 0) {
        var child = this.childNodes[0];
        child.parentNode = null;
        eventSource.delete(child.uid);
        this.childNodes.shift();
      }
    }
  }, {
    key: "_root",
    get: function get() {
      var _a;

      return ((_a = this.parentNode) === null || _a === void 0 ? void 0 : _a._root) || null;
    }
  }, {
    key: "findIndex",
    value: function findIndex(refChild) {
      var index = this.childNodes.indexOf(refChild);
      Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["ensure"])(index !== -1, 'The node to be replaced is not a child of this node.');
      return index;
    }
  }, {
    key: "_path",
    get: function get() {
      var parentNode = this.parentNode;

      if (parentNode) {
        // 计算路径时，先过滤掉 comment 节点
        var list = parentNode.childNodes.filter(function (node) {
          return !isComment(node);
        });
        var indexOfNode = list.indexOf(this);
        var index = this.hooks.getPathIndex(indexOfNode);
        return "".concat(parentNode._path, ".", "cn"
        /* Childnodes */
        , ".").concat(index);
      }

      return '';
    }
  }, {
    key: "nextSibling",
    get: function get() {
      var parentNode = this.parentNode;
      return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) + 1]) || null;
    }
  }, {
    key: "previousSibling",
    get: function get() {
      var parentNode = this.parentNode;
      return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) - 1]) || null;
    }
  }, {
    key: "parentElement",
    get: function get() {
      var parentNode = this.parentNode;

      if ((parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeType) === 1
      /* ELEMENT_NODE */
      ) {
        return parentNode;
      }

      return null;
    }
  }, {
    key: "firstChild",
    get: function get() {
      return this.childNodes[0] || null;
    }
  }, {
    key: "lastChild",
    get: function get() {
      var childNodes = this.childNodes;
      return childNodes[childNodes.length - 1] || null;
    }
    /**
     * @textContent 目前只能置空子元素
     * @TODO 等待完整 innerHTML 实现
     */

  }, {
    key: "textContent",
    set: function set(text) {
      this._empty();

      if (text === '') {
        this.enqueueUpdate({
          path: "".concat(this._path, ".", "cn"
          /* Childnodes */
          ),
          value: function value() {
            return [];
          }
        });
      } else {
        var _document = this._getElement(ElementNames.Document)();

        this.appendChild(_document.createTextNode(text));
      }
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(newChild, refChild, isReplace) {
      var _this2 = this;

      newChild.remove();
      newChild.parentNode = this;
      var payload;

      if (refChild) {
        var index = this.findIndex(refChild);
        this.childNodes.splice(index, 0, newChild);

        if (isReplace) {
          payload = {
            path: newChild._path,
            value: this.hydrate(newChild)
          };
        } else {
          payload = {
            path: "".concat(this._path, ".", "cn"
            /* Childnodes */
            ),
            value: function value() {
              var childNodes = _this2.childNodes.filter(function (node) {
                return !isComment(node);
              });

              return childNodes.map(hydrate);
            }
          };
        }
      } else {
        this.childNodes.push(newChild);
        payload = {
          path: newChild._path,
          value: this.hydrate(newChild)
        };
      }

      this.enqueueUpdate(payload);

      if (!eventSource.has(newChild.uid)) {
        eventSource.set(newChild.uid, newChild);
      }

      return newChild;
    }
  }, {
    key: "appendChild",
    value: function appendChild(child) {
      this.insertBefore(child);
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(newChild, oldChild) {
      if (oldChild.parentNode === this) {
        this.insertBefore(newChild, oldChild, true);
        oldChild.remove(true);
        return oldChild;
      }
    }
  }, {
    key: "removeChild",
    value: function removeChild(child, isReplace) {
      var _this3 = this;

      var index = this.findIndex(child);
      this.childNodes.splice(index, 1);

      if (!isReplace) {
        this.enqueueUpdate({
          path: "".concat(this._path, ".", "cn"
          /* Childnodes */
          ),
          value: function value() {
            var childNodes = _this3.childNodes.filter(function (node) {
              return !isComment(node);
            });

            return childNodes.map(hydrate);
          }
        });
      }

      child.parentNode = null;
      eventSource.delete(child.uid); // @TODO: eventSource memory overflow
      // child._empty()

      return child;
    }
  }, {
    key: "remove",
    value: function remove(isReplace) {
      var _a;

      (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this, isReplace);
    }
  }, {
    key: "hasChildNodes",
    value: function hasChildNodes() {
      return this.childNodes.length > 0;
    }
  }, {
    key: "enqueueUpdate",
    value: function enqueueUpdate(payload) {
      var _a;

      (_a = this._root) === null || _a === void 0 ? void 0 : _a.enqueueUpdate(payload);
    }
  }, {
    key: "cloneNode",
    value: function cloneNode() {
      var isDeep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var document = this._getElement(ElementNames.Document)();

      var newNode;

      if (this.nodeType === 1
      /* ELEMENT_NODE */
      ) {
        newNode = document.createElement(this.nodeName);
      } else if (this.nodeType === 3
      /* TEXT_NODE */
      ) {
        newNode = document.createTextNode('');
      }

      for (var key in this) {
        var value = this[key];

        if ([PROPS, DATASET].includes(key) && Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(value) === OBJECT) {
          newNode[key] = Object.assign({}, value);
        } else if (key === '_value') {
          newNode[key] = value;
        } else if (key === STYLE) {
          newNode.style._value = Object.assign({}, value._value);
          newNode.style._usedStyleProp = new Set(Array.from(value._usedStyleProp));
        }
      }

      if (isDeep) {
        newNode.childNodes = this.childNodes.map(function (node) {
          return node.cloneNode(true);
        });
      }

      return newNode;
    }
  }, {
    key: "contains",
    value: function contains(node) {
      var isContains = false;
      this.childNodes.some(function (childNode) {
        var uid = childNode.uid;

        if (uid === node.uid || uid === node.id || childNode.contains(node)) {
          isContains = true;
          return true;
        }
      });
      return isContains;
    }
  }, {
    key: "ownerDocument",
    get: function get() {
      var document = this._getElement(ElementNames.Document)();

      return document;
    }
  }]);

  return TaroNode;
}(TaroEventTarget);

TaroNode = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* injectable */ "d"])(), __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.TaroNodeImpl)), __param(1, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.TaroElementFactory)), __param(2, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.Hooks)), __metadata("design:paramtypes", [Function, Function, Function])], TaroNode);

var TaroText = /*#__PURE__*/function (_TaroNode) {
  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(TaroText, _TaroNode);

  var _super2 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(TaroText);

  function TaroText( // eslint-disable-next-line @typescript-eslint/indent
  nodeImpl, getElement, hooks) {
    var _this4;

    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, TaroText);

    _this4 = _super2.call(this, nodeImpl, getElement, hooks);
    _this4.nodeType = 3
    /* TEXT_NODE */
    ;
    _this4.nodeName = '#text';
    return _this4;
  }

  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(TaroText, [{
    key: "textContent",
    get: function get() {
      return this._value;
    },
    set: function set(text) {
      this._value = text;
      this.enqueueUpdate({
        path: "".concat(this._path, ".", "v"
        /* Text */
        ),
        value: text
      });
    }
  }, {
    key: "nodeValue",
    get: function get() {
      return this._value;
    },
    set: function set(text) {
      this.textContent = text;
    }
  }]);

  return TaroText;
}(TaroNode);

TaroText = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* injectable */ "d"])(), __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.TaroNodeImpl)), __param(1, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.TaroElementFactory)), __param(2, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.Hooks)), __metadata("design:paramtypes", [Function, Function, Function])], TaroText);
/*
 *
 * https://www.w3.org/Style/CSS/all-properties.en.html
 */

var styleProperties = ['all', 'appearance', 'blockOverflow', 'blockSize', 'bottom', 'clear', 'contain', 'content', 'continue', 'cursor', 'direction', 'display', 'filter', 'float', 'gap', 'height', 'inset', 'isolation', 'left', 'letterSpacing', 'lightingColor', 'markerSide', 'mixBlendMode', 'opacity', 'order', 'position', 'quotes', 'resize', 'right', 'rowGap', 'tabSize', 'tableLayout', 'top', 'userSelect', 'verticalAlign', 'visibility', 'voiceFamily', 'volume', 'whiteSpace', 'widows', 'width', 'zIndex'
/** 非常用 style */
// 'azimuth',
// 'backfaceVisibility',
// 'baselineShift',
// 'captionSide',
// 'chains',
// 'dominantBaseline',
// 'elevation',
// 'emptyCells',
// 'forcedColorAdjust',
// 'glyphOrientationVertical',
// 'hangingPunctuation',
// 'hyphenateCharacter',
// 'hyphens',
// 'imageOrientation',
// 'imageResolution',
// 'orphans',
// 'playDuring',
// 'pointerEvents',
// 'regionFragment',
// 'richness',
// 'running',
// 'scrollBehavior',
// 'speechRate',
// 'stress',
// 'stringSet',
// 'unicodeBidi',
// 'willChange',
// 'writingMode',
]; // 减少文件体积

function combine(prefix, list, excludeSelf) {
  !excludeSelf && styleProperties.push(prefix);
  list.forEach(function (item) {
    styleProperties.push(prefix + item);
  });
}

var color = 'Color';
var style = 'Style';
var width = 'Width';
var image = 'Image';
var size = 'Size';
var color_style_width = [color, style, width];
var fitlength_fitwidth_image = ['FitLength', 'FitWidth', image];
var fitlength_fitwidth_image_radius = [].concat(fitlength_fitwidth_image, ['Radius']);
var color_style_width_fitlength_fitwidth_image = [].concat(color_style_width, fitlength_fitwidth_image);
var endRadius_startRadius = ['EndRadius', 'StartRadius'];
var bottom_left_right_top = ['Bottom', 'Left', 'Right', 'Top'];
var end_start = ['End', 'Start'];
var content_items_self = ['Content', 'Items', 'Self'];
var blockSize_height_inlineSize_width = ['BlockSize', 'Height', 'InlineSize', width];
var after_before = ['After', 'Before'];
combine('borderBlock', color_style_width);
combine('borderBlockEnd', color_style_width);
combine('borderBlockStart', color_style_width);
combine('outline', [].concat(color_style_width, ['Offset']));
combine('border', [].concat(color_style_width, ['Boundary', 'Break', 'Collapse', 'Radius', 'Spacing']));
combine('borderFit', ['Length', width]);
combine('borderInline', color_style_width);
combine('borderInlineEnd', color_style_width);
combine('borderInlineStart', color_style_width);
combine('borderLeft', color_style_width_fitlength_fitwidth_image);
combine('borderRight', color_style_width_fitlength_fitwidth_image);
combine('borderTop', color_style_width_fitlength_fitwidth_image);
combine('borderBottom', color_style_width_fitlength_fitwidth_image);
combine('textDecoration', [color, style, 'Line']);
combine('textEmphasis', [color, style, 'Position']);
combine('scrollMargin', bottom_left_right_top);
combine('scrollPadding', bottom_left_right_top);
combine('padding', bottom_left_right_top);
combine('margin', [].concat(bottom_left_right_top, ['Trim']));
combine('scrollMarginBlock', end_start);
combine('scrollMarginInline', end_start);
combine('scrollPaddingBlock', end_start);
combine('scrollPaddingInline', end_start);
combine('gridColumn', end_start);
combine('gridRow', end_start);
combine('insetBlock', end_start);
combine('insetInline', end_start);
combine('marginBlock', end_start);
combine('marginInline', end_start);
combine('paddingBlock', end_start);
combine('paddingInline', end_start);
combine('pause', after_before);
combine('cue', after_before);
combine('mask', ['Clip', 'Composite', image, 'Mode', 'Origin', 'Position', 'Repeat', size, 'Type']);
combine('borderImage', ['Outset', 'Repeat', 'Slice', 'Source', 'Transform', width]);
combine('maskBorder', ['Mode', 'Outset', 'Repeat', 'Slice', 'Source', width]);
combine('font', ['Family', 'FeatureSettings', 'Kerning', 'LanguageOverride', 'MaxSize', 'MinSize', 'OpticalSizing', 'Palette', size, 'SizeAdjust', 'Stretch', style, 'Weight', 'VariationSettings']);
combine('fontSynthesis', ['SmallCaps', style, 'Weight']);
combine('transform', ['Box', 'Origin', style]);
combine('background', [color, image, 'Attachment', 'BlendMode', 'Clip', 'Origin', 'Position', 'Repeat', size]);
combine('listStyle', [image, 'Position', 'Type']);
combine('scrollSnap', ['Align', 'Stop', 'Type']);
combine('grid', ['Area', 'AutoColumns', 'AutoFlow', 'AutoRows']);
combine('gridTemplate', ['Areas', 'Columns', 'Rows']);
combine('overflow', ['Block', 'Inline', 'Wrap', 'X', 'Y']);
combine('transition', ['Delay', 'Duration', 'Property', 'TimingFunction']);
combine('lineStacking', ['Ruby', 'Shift', 'Strategy']);
combine('color', ['Adjust', 'InterpolationFilters', 'Scheme']);
combine('textAlign', ['All', 'Last']);
combine('page', ['BreakAfter', 'BreakBefore', 'BreakInside']);
combine('speak', ['Header', 'Numeral', 'Punctuation']);
combine('animation', ['Delay', 'Direction', 'Duration', 'FillMode', 'IterationCount', 'Name', 'PlayState', 'TimingFunction']);
combine('flex', ['Basis', 'Direction', 'Flow', 'Grow', 'Shrink', 'Wrap']);
combine('offset', [].concat(after_before, end_start, ['Anchor', 'Distance', 'Path', 'Position', 'Rotate']));
combine('fontVariant', ['Alternates', 'Caps', 'EastAsian', 'Emoji', 'Ligatures', 'Numeric', 'Position']);
combine('perspective', ['Origin']);
combine('pitch', ['Range']);
combine('clip', ['Path', 'Rule']);
combine('flow', ['From', 'Into']);
combine('align', ['Content', 'Items', 'Self'], true);
combine('alignment', ['Adjust', 'Baseline'], true);
combine('bookmark', ['Label', 'Level', 'State'], true);
combine('borderStart', endRadius_startRadius, true);
combine('borderEnd', endRadius_startRadius, true);
combine('borderCorner', ['Fit', image, 'ImageTransform'], true);
combine('borderTopLeft', fitlength_fitwidth_image_radius, true);
combine('borderTopRight', fitlength_fitwidth_image_radius, true);
combine('borderBottomLeft', fitlength_fitwidth_image_radius, true);
combine('borderBottomRight', fitlength_fitwidth_image_radius, true);
combine('column', ['s', 'Count', 'Fill', 'Gap', 'Rule', 'RuleColor', 'RuleStyle', 'RuleWidth', 'Span', width], true);
combine('break', [].concat(after_before, ['Inside']), true);
combine('wrap', [].concat(after_before, ['Flow', 'Inside', 'Through']), true);
combine('justify', content_items_self, true);
combine('place', content_items_self, true);
combine('max', [].concat(blockSize_height_inlineSize_width, ['Lines']), true);
combine('min', blockSize_height_inlineSize_width, true);
combine('line', ['Break', 'Clamp', 'Grid', 'Height', 'Padding', 'Snap'], true);
combine('inline', ['BoxAlign', size, 'Sizing'], true);
combine('text', ['CombineUpright', 'GroupAlign', 'Height', 'Indent', 'Justify', 'Orientation', 'Overflow', 'Shadow', 'SpaceCollapse', 'SpaceTrim', 'Spacing', 'Transform', 'UnderlinePosition', 'Wrap'], true);
combine('shape', ['ImageThreshold', 'Inside', 'Margin', 'Outside'], true);
combine('word', ['Break', 'Spacing', 'Wrap'], true);
combine('nav', ['Down', 'Left', 'Right', 'Up'], true);
combine('object', ['Fit', 'Position'], true);
combine('box', ['DecorationBreak', 'Shadow', 'Sizing', 'Snap'], true);

function setStyle(newVal, styleKey) {
  var old = this[styleKey];

  if (newVal) {
    this._usedStyleProp.add(styleKey);
  }

   true && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["warn"])(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isString"])(newVal) && newVal.length > PROPERTY_THRESHOLD, "Style \u5C5E\u6027 ".concat(styleKey, " \u7684\u503C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\uFF0C\u8003\u8651\u4F7F\u7528 CSS \u7C7B\u6216\u5176\u5B83\u65B9\u6848\u66FF\u4EE3\u3002"));

  if (old !== newVal) {
    this._value[styleKey] = newVal;

    this._element.enqueueUpdate({
      path: "".concat(this._element._path, ".", "st"
      /* Style */
      ),
      value: this.cssText
    });
  }
}

function initStyle(ctor) {
  var properties = {};

  var _loop = function _loop(i) {
    var styleKey = styleProperties[i];
    properties[styleKey] = {
      get: function get() {
        return this._value[styleKey] || '';
      },
      set: function set(newVal) {
        setStyle.call(this, newVal, styleKey);
      }
    };
  };

  for (var i = 0; i < styleProperties.length; i++) {
    _loop(i);
  }

  Object.defineProperties(ctor.prototype, properties);
}

function isCssVariable(propertyName) {
  return /^--/.test(propertyName);
}

var Style = /*#__PURE__*/function () {
  function Style(element) {
    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, Style);

    this._element = element;
    this._usedStyleProp = new Set();
    this._value = {};
  }

  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(Style, [{
    key: "setCssVariables",
    value: function setCssVariables(styleKey) {
      var _this5 = this;

      this.hasOwnProperty(styleKey) || Object.defineProperty(this, styleKey, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return _this5._value[styleKey] || '';
        },
        set: function set(newVal) {
          setStyle.call(_this5, newVal, styleKey);
        }
      });
    }
  }, {
    key: "cssText",
    get: function get() {
      var _this6 = this;

      var text = '';

      this._usedStyleProp.forEach(function (key) {
        var val = _this6[key];
        if (!val) return;
        var styleName = isCssVariable(key) ? key : Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["toDashed"])(key);
        text += "".concat(styleName, ": ").concat(val, ";");
      });

      return text;
    },
    set: function set(str) {
      var _this7 = this;

      if (str == null) {
        str = '';
      }

      this._usedStyleProp.forEach(function (prop) {
        _this7.removeProperty(prop);
      });

      if (str === '') {
        return;
      }

      var rules = str.split(';');

      for (var i = 0; i < rules.length; i++) {
        var rule = rules[i].trim();

        if (rule === '') {
          continue;
        } // 可能存在 'background: url(http:x/y/z)' 的情况


        var _rule$split = rule.split(':'),
            _rule$split2 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_rule$split),
            propName = _rule$split2[0],
            valList = _rule$split2.slice(1);

        var val = valList.join(':');

        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isUndefined"])(val)) {
          continue;
        }

        this.setProperty(propName.trim(), val.trim());
      }
    }
  }, {
    key: "setProperty",
    value: function setProperty(propertyName, value) {
      if (propertyName[0] === '-') {
        // 支持 webkit 属性或 css 变量
        this.setCssVariables(propertyName);
      } else {
        propertyName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["toCamelCase"])(propertyName);
      }

      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isUndefined"])(value)) {
        return;
      }

      if (value === null || value === '') {
        this.removeProperty(propertyName);
      } else {
        this[propertyName] = value;
      }
    }
  }, {
    key: "removeProperty",
    value: function removeProperty(propertyName) {
      propertyName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["toCamelCase"])(propertyName);

      if (!this._usedStyleProp.has(propertyName)) {
        return '';
      }

      var value = this[propertyName];
      this[propertyName] = '';

      this._usedStyleProp.delete(propertyName);

      return value;
    }
  }, {
    key: "getPropertyValue",
    value: function getPropertyValue(propertyName) {
      propertyName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["toCamelCase"])(propertyName);
      var value = this[propertyName];

      if (!value) {
        return '';
      }

      return value;
    }
  }]);

  return Style;
}();

initStyle(Style);

function returnTrue() {
  return true;
}

function treeToArray(root, predict) {
  var array = [];
  var filter = predict !== null && predict !== void 0 ? predict : returnTrue;
  var object = root;

  while (object) {
    if (object.nodeType === 1
    /* ELEMENT_NODE */
    && filter(object)) {
      array.push(object);
    }

    object = following(object, root);
  }

  return array;
}

function following(el, root) {
  var firstChild = el.firstChild;

  if (firstChild) {
    return firstChild;
  }

  var current = el;

  do {
    if (current === root) {
      return null;
    }

    var nextSibling = current.nextSibling;

    if (nextSibling) {
      return nextSibling;
    }

    current = current.parentElement;
  } while (current);

  return null;
}

var ClassList = /*#__PURE__*/function (_Set2) {
  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(ClassList, _Set2);

  var _super3 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(ClassList);

  function ClassList(className, el) {
    var _thisSuper, _this8;

    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, ClassList);

    _this8 = _super3.call(this);
    className.trim().split(/\s+/).forEach(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])((_thisSuper = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_this8), Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(ClassList.prototype)), "add", _thisSuper).bind(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_this8)));
    _this8.el = el;
    return _this8;
  }

  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(ClassList, [{
    key: "value",
    get: function get() {
      return Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this).join(' ');
    }
  }, {
    key: "add",
    value: function add(s) {
      Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(ClassList.prototype), "add", this).call(this, s);

      this._update();

      return this;
    }
  }, {
    key: "length",
    get: function get() {
      return this.size;
    }
  }, {
    key: "remove",
    value: function remove(s) {
      Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(ClassList.prototype), "delete", this).call(this, s);

      this._update();
    }
  }, {
    key: "toggle",
    value: function toggle(s) {
      if (Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(ClassList.prototype), "has", this).call(this, s)) {
        Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(ClassList.prototype), "delete", this).call(this, s);
      } else {
        Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(ClassList.prototype), "add", this).call(this, s);
      }

      this._update();
    }
  }, {
    key: "replace",
    value: function replace(s1, s2) {
      Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(ClassList.prototype), "delete", this).call(this, s1);

      Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(ClassList.prototype), "add", this).call(this, s2);

      this._update();
    }
  }, {
    key: "contains",
    value: function contains(s) {
      return Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(ClassList.prototype), "has", this).call(this, s);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }, {
    key: "_update",
    value: function _update() {
      this.el.className = this.value;
    }
  }]);

  return ClassList;
}( /*#__PURE__*/Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Set));

var TaroElement = /*#__PURE__*/function (_TaroNode2) {
  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(TaroElement, _TaroNode2);

  var _super4 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(TaroElement);

  function TaroElement( // eslint-disable-next-line @typescript-eslint/indent
  nodeImpl, getElement, hooks, elementImpl) {
    var _this9;

    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, TaroElement);

    _this9 = _super4.call(this, nodeImpl, getElement, hooks);
    _this9.props = {};
    _this9.dataset = _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"];
    elementImpl.bind(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_this9));
    _this9.nodeType = 1
    /* ELEMENT_NODE */
    ;
    _this9.style = new Style(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_this9));
    hooks.patchElement(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_this9));
    return _this9;
  }

  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(TaroElement, [{
    key: "_stopPropagation",
    value: function _stopPropagation(event) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      var target = this; // eslint-disable-next-line no-cond-assign

      while (target = target.parentNode) {
        var listeners = target.__handlers[event.type];

        if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isArray"])(listeners)) {
          continue;
        }

        for (var i = listeners.length; i--;) {
          var l = listeners[i];
          l._stop = true;
        }
      }
    }
  }, {
    key: "id",
    get: function get() {
      return this.getAttribute(ID);
    },
    set: function set(val) {
      this.setAttribute(ID, val);
    }
  }, {
    key: "className",
    get: function get() {
      return this.getAttribute(CLASS) || '';
    },
    set: function set(val) {
      this.setAttribute(CLASS, val);
    }
  }, {
    key: "cssText",
    get: function get() {
      return this.getAttribute(STYLE) || '';
    }
  }, {
    key: "classList",
    get: function get() {
      return new ClassList(this.className, this);
    }
  }, {
    key: "children",
    get: function get() {
      return this.childNodes.filter(isElement);
    }
  }, {
    key: "attributes",
    get: function get() {
      var props = this.props;
      var propKeys = Object.keys(props);
      var style = this.style.cssText;
      var attrs = propKeys.map(function (key) {
        return {
          name: key,
          value: props[key]
        };
      });
      return attrs.concat(style ? {
        name: STYLE,
        value: style
      } : []);
    }
  }, {
    key: "textContent",
    get: function get() {
      var text = '';
      var childNodes = this.childNodes;

      for (var i = 0; i < childNodes.length; i++) {
        text += childNodes[i].textContent;
      }

      return text;
    },
    set: function set(text) {
      Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(TaroElement.prototype), "textContent", text, this, true);
    }
  }, {
    key: "hasAttribute",
    value: function hasAttribute(qualifiedName) {
      return !Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isUndefined"])(this.props[qualifiedName]);
    }
  }, {
    key: "hasAttributes",
    value: function hasAttributes() {
      return this.attributes.length > 0;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.setAttribute(FOCUS, true);
    }
  }, {
    key: "blur",
    value: function blur() {
      this.setAttribute(FOCUS, false);
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(qualifiedName, value) {
      var _a, _b;

       true && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["warn"])(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isString"])(value) && value.length > PROPERTY_THRESHOLD, "\u5143\u7D20 ".concat(this.nodeName, " \u7684 \u5C5E\u6027 ").concat(qualifiedName, " \u7684\u503C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\u3002\u8003\u8651\u964D\u4F4E\u56FE\u7247\u8F6C\u4E3A base64 \u7684\u9608\u503C\u6216\u5728 CSS \u4E2D\u4F7F\u7528 base64\u3002"));
      var isPureView = this.nodeName === VIEW && !isHasExtractProp(this) && !this.isAnyEventBinded();

      switch (qualifiedName) {
        case STYLE:
          this.style.cssText = value;
          break;

        case ID:
          eventSource.delete(this.uid);
          value = String(value);
          this.props[qualifiedName] = this.uid = value;
          eventSource.set(value, this);
          break;

        default:
          this.props[qualifiedName] = value;

          if (qualifiedName.startsWith('data-')) {
            if (this.dataset === _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"]) {
              this.dataset = Object.create(null);
            }

            this.dataset[Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["toCamelCase"])(qualifiedName.replace(/^data-/, ''))] = value;
          }

          break;
      }

      qualifiedName = shortcutAttr(qualifiedName);
      var payload = {
        path: "".concat(this._path, ".").concat(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["toCamelCase"])(qualifiedName)),
        value: value
      };
      (_b = (_a = this.hooks).modifySetAttrPayload) === null || _b === void 0 ? void 0 : _b.call(_a, this, qualifiedName, payload);
      this.enqueueUpdate(payload);

      if (this.nodeName === VIEW) {
        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["toCamelCase"])(qualifiedName) === CATCHMOVE) {
          // catchMove = true: catch-view
          // catchMove = false: view or static-view
          this.enqueueUpdate({
            path: "".concat(this._path, ".", "nn"
            /* NodeName */
            ),
            value: value ? CATCH_VIEW : this.isAnyEventBinded() ? VIEW : STATIC_VIEW
          });
        } else if (isPureView && isHasExtractProp(this)) {
          // pure-view => static-view
          this.enqueueUpdate({
            path: "".concat(this._path, ".", "nn"
            /* NodeName */
            ),
            value: STATIC_VIEW
          });
        }
      }
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(qualifiedName) {
      var _a, _b, _c, _d;

      var isStaticView = this.nodeName === VIEW && isHasExtractProp(this) && !this.isAnyEventBinded();

      if (qualifiedName === STYLE) {
        this.style.cssText = '';
      } else {
        var isInterrupt = (_b = (_a = this.hooks).onRemoveAttribute) === null || _b === void 0 ? void 0 : _b.call(_a, this, qualifiedName);

        if (isInterrupt) {
          return;
        }

        if (!this.props.hasOwnProperty(qualifiedName)) {
          return;
        }

        delete this.props[qualifiedName];
      }

      qualifiedName = shortcutAttr(qualifiedName);
      var payload = {
        path: "".concat(this._path, ".").concat(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["toCamelCase"])(qualifiedName)),
        value: ''
      };
      (_d = (_c = this.hooks).modifyRmAttrPayload) === null || _d === void 0 ? void 0 : _d.call(_c, this, qualifiedName, payload);
      this.enqueueUpdate(payload);

      if (this.nodeName === VIEW) {
        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["toCamelCase"])(qualifiedName) === CATCHMOVE) {
          // catch-view => view or static-view or pure-view
          this.enqueueUpdate({
            path: "".concat(this._path, ".", "nn"
            /* NodeName */
            ),
            value: this.isAnyEventBinded() ? VIEW : isHasExtractProp(this) ? STATIC_VIEW : PURE_VIEW
          });
        } else if (isStaticView && !isHasExtractProp(this)) {
          // static-view => pure-view
          this.enqueueUpdate({
            path: "".concat(this._path, ".", "nn"
            /* NodeName */
            ),
            value: PURE_VIEW
          });
        }
      }
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(qualifiedName) {
      var attr = qualifiedName === STYLE ? this.style.cssText : this.props[qualifiedName];
      return attr !== null && attr !== void 0 ? attr : '';
    }
  }, {
    key: "getElementsByTagName",
    value: function getElementsByTagName(tagName) {
      var _this10 = this;

      return treeToArray(this, function (el) {
        return el.nodeName === tagName || tagName === '*' && _this10 !== el;
      });
    }
  }, {
    key: "getElementsByClassName",
    value: function getElementsByClassName(className) {
      return treeToArray(this, function (el) {
        var classList = el.classList;
        var classNames = className.trim().split(/\s+/);
        return classNames.every(function (c) {
          return classList.has(c);
        });
      });
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      var cancelable = event.cancelable;
      var listeners = this.__handlers[event.type];

      if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isArray"])(listeners)) {
        return false;
      }

      for (var i = listeners.length; i--;) {
        var listener = listeners[i];
        var result = void 0;

        if (listener._stop) {
          listener._stop = false;
        } else {
          result = listener.call(this, event);
        }

        if ((result === false || event._end) && cancelable) {
          event.defaultPrevented = true;
        }

        if (event._end && event._stop) {
          break;
        }
      }

      if (event._stop) {
        this._stopPropagation(event);
      } else {
        event._stop = true;
      }

      return listeners != null;
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, handler, options) {
      var name = this.nodeName;
      var SPECIAL_NODES = this.hooks.getSpecialNodes();

      if (!this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
        this.enqueueUpdate({
          path: "".concat(this._path, ".", "nn"
          /* NodeName */
          ),
          value: name
        });
      }

      Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(TaroElement.prototype), "addEventListener", this).call(this, type, handler, options);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, handler) {
      Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(TaroElement.prototype), "removeEventListener", this).call(this, type, handler);

      var name = this.nodeName;
      var SPECIAL_NODES = this.hooks.getSpecialNodes();

      if (!this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
        this.enqueueUpdate({
          path: "".concat(this._path, ".", "nn"
          /* NodeName */
          ),
          value: isHasExtractProp(this) ? "static-".concat(name) : "pure-".concat(name)
        });
      }
    }
  }]);

  return TaroElement;
}(TaroNode);

TaroElement = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* injectable */ "d"])(), __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.TaroNodeImpl)), __param(1, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.TaroElementFactory)), __param(2, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.Hooks)), __param(3, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.TaroElementImpl)), __metadata("design:paramtypes", [Function, Function, Function, Function])], TaroElement);
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray = Array.isArray;
/** Detect free variable `global` from Node.js. */

var freeGlobal = (typeof global === "undefined" ? "undefined" : Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(global)) == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Built-in value references. */

var Symbol$1 = root.Symbol;
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}
/** Used for built-in method references. */


var objectProto$1 = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString$1 = objectProto$1.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString$1.call(value);
}
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag$1 && symToStringTag$1 in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return value != null && Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(value) == 'object';
}
/** `Object#toString` result references. */


var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(value) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
/** Used to match property names within property paths. */


var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */

function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }

  var type = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(value);

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(value);

  return value != null && (type == 'object' || type == 'function');
}
/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/** Used for built-in method references. */


var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */


var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString$1 = funcProto$1.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */


function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
/* Built-in method references that are verified to be native. */


var nativeCreate = getNative(Object, 'create');
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */

function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto$3 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}
/** Used for built-in method references. */


var objectProto$4 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty$3.call(data, key);
}
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
  return this;
}
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */

function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */


function eq(value, other) {
  return value === other || value !== value && other !== other;
}
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}
/** Used for built-in method references. */


var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/* Built-in method references that are verified to be native. */

var Map$1 = getNative(root, 'Map');
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */

function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map$1 || ListCache)(),
    'string': new Hash()
  };
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */


function isKeyable(value) {
  var type = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/** Error message constants. */

var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */

function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
} // Expose `MapCache`.


memoize.Cache = MapCache;
/** Used as the maximum memoize cache size. */

var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */

function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }

    return key;
  });
  var cache = result.cache;
  return result;
}
/** Used to match property names within property paths. */


var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */

var stringToPath = memoizeCapped(function (string) {
  var result = [];

  if (string.charCodeAt(0) === 46
  /* . */
  ) {
    result.push('');
  }

  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */

function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}
/** Used as references for various `Number` constants. */


var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */


function toString(value) {
  return value == null ? '' : baseToString(value);
}
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */


function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }

  return isKey(value, object) ? [value] : stringToPath(toString(value));
}
/** Used as references for various `Number` constants. */


var INFINITY$1 = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
}
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */


function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */


function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var options = {
  prerender: true,
  debug: false
};

var Performance = /*#__PURE__*/function () {
  function Performance() {
    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, Performance);

    this.recorder = new Map();
  }

  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(Performance, [{
    key: "start",
    value: function start(id) {
      if (!options.debug) {
        return;
      }

      this.recorder.set(id, Date.now());
    }
  }, {
    key: "stop",
    value: function stop(id) {
      if (!options.debug) {
        return;
      }

      var now = Date.now();
      var prev = this.recorder.get(id);
      var time = now - prev; // eslint-disable-next-line no-console

      console.log("".concat(id, " \u65F6\u957F\uFF1A ").concat(time, "ms"));
    }
  }]);

  return Performance;
}();

var perf = new Performance();
var eventIncrementId = incrementId();

var TaroRootElement = /*#__PURE__*/function (_TaroElement) {
  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(TaroRootElement, _TaroElement);

  var _super5 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(TaroRootElement);

  function TaroRootElement( // eslint-disable-next-line @typescript-eslint/indent
  nodeImpl, getElement, hooks, elementImpl, eventCenter) {
    var _this11;

    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, TaroRootElement);

    _this11 = _super5.call(this, nodeImpl, getElement, hooks, elementImpl);
    _this11.pendingUpdate = false;
    _this11.pendingFlush = false;
    _this11.updatePayloads = [];
    _this11.updateCallbacks = [];
    _this11.ctx = null;
    _this11.nodeName = ROOT_STR;
    _this11.eventCenter = eventCenter;
    return _this11;
  }

  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(TaroRootElement, [{
    key: "_path",
    get: function get() {
      return ROOT_STR;
    }
  }, {
    key: "_root",
    get: function get() {
      return this;
    }
  }, {
    key: "enqueueUpdate",
    value: function enqueueUpdate(payload) {
      this.updatePayloads.push(payload);

      if (!this.pendingUpdate && this.ctx !== null) {
        this.performUpdate();
      }
    }
  }, {
    key: "performUpdate",
    value: function performUpdate() {
      var _this12 = this;

      var initRender = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var prerender = arguments.length > 1 ? arguments[1] : undefined;
      this.pendingUpdate = true;
      var ctx = this.ctx;
      setTimeout(function () {
        perf.start(SET_DATA);
        var data = Object.create(null);
        var resetPaths = new Set(initRender ? ['root.cn.[0]', 'root.cn[0]'] : []);

        while (_this12.updatePayloads.length > 0) {
          var _this12$updatePayload = _this12.updatePayloads.shift(),
              path = _this12$updatePayload.path,
              value = _this12$updatePayload.value;

          if (path.endsWith("cn"
          /* Childnodes */
          )) {
            resetPaths.add(path);
          }

          data[path] = value;
        }

        var _loop2 = function _loop2(_path) {
          resetPaths.forEach(function (p) {
            // 已经重置了数组，就不需要分别再设置了
            if (_path.includes(p) && _path !== p) {
              delete data[_path];
            }
          });
          var value = data[_path];

          if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(value)) {
            data[_path] = value();
          }
        };

        for (var _path in data) {
          _loop2(_path);
        }

        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(prerender)) {
          prerender(data);
        } else {
          _this12.pendingUpdate = false;
          var customWrapperUpdate = [];
          var normalUpdate = {};

          if (!initRender) {
            for (var p in data) {
              var dataPathArr = p.split('.');
              var hasCustomWrapper = false;

              for (var i = dataPathArr.length; i > 0; i--) {
                var allPath = dataPathArr.slice(0, i).join('.');
                var getData = get(ctx.__data__ || ctx.data, allPath);

                if (getData && getData.nn && getData.nn === CUSTOM_WRAPPER) {
                  var customWrapperId = getData.uid;
                  var customWrapper = ctx.selectComponent("#".concat(customWrapperId));
                  var splitedPath = dataPathArr.slice(i).join('.');

                  if (customWrapper) {
                    hasCustomWrapper = true;
                    customWrapperUpdate.push({
                      ctx: ctx.selectComponent("#".concat(customWrapperId)),
                      data: Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])({}, "i.".concat(splitedPath), data[p])
                    });
                  }

                  break;
                }
              }

              if (!hasCustomWrapper) {
                normalUpdate[p] = data[p];
              }
            }
          }

          var updateArrLen = customWrapperUpdate.length;

          if (updateArrLen) {
            var eventId = "".concat(_this12._path, "_update_").concat(eventIncrementId());
            var _eventCenter = _this12.eventCenter;
            var executeTime = 0;

            _eventCenter.once(eventId, function () {
              executeTime++;

              if (executeTime === updateArrLen + 1) {
                perf.stop(SET_DATA);

                if (!_this12.pendingFlush) {
                  _this12.flushUpdateCallback();
                }

                if (initRender) {
                  perf.stop(PAGE_INIT);
                }
              }
            }, _eventCenter);

            customWrapperUpdate.forEach(function (item) {
              if ( true && options.debug) {
                // eslint-disable-next-line no-console
                console.log('custom wrapper setData: ', item.data);
              }

              item.ctx.setData(item.data, function () {
                _eventCenter.trigger(eventId);
              });
            });

            if (Object.keys(normalUpdate).length) {
              if ( true && options.debug) {
                // eslint-disable-next-line no-console
                console.log('setData:', normalUpdate);
              }

              ctx.setData(normalUpdate, function () {
                _eventCenter.trigger(eventId);
              });
            }
          } else {
            if ( true && options.debug) {
              // eslint-disable-next-line no-console
              console.log('setData:', data);
            }

            ctx.setData(data, function () {
              perf.stop(SET_DATA);

              if (!_this12.pendingFlush) {
                _this12.flushUpdateCallback();
              }

              if (initRender) {
                perf.stop(PAGE_INIT);
              }
            });
          }
        }
      }, 0);
    }
  }, {
    key: "enqueueUpdateCallback",
    value: function enqueueUpdateCallback(cb, ctx) {
      this.updateCallbacks.push(function () {
        ctx ? cb.call(ctx) : cb();
      });
    }
  }, {
    key: "flushUpdateCallback",
    value: function flushUpdateCallback() {
      this.pendingFlush = false;
      var copies = this.updateCallbacks.slice(0);
      this.updateCallbacks.length = 0;

      for (var i = 0; i < copies.length; i++) {
        copies[i]();
      }
    }
  }]);

  return TaroRootElement;
}(TaroElement);

TaroRootElement = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* injectable */ "d"])(), __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.TaroNodeImpl)), __param(1, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.TaroElementFactory)), __param(2, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.Hooks)), __param(3, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.TaroElementImpl)), __param(4, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.eventCenter)), __metadata("design:paramtypes", [Function, Function, Function, Function, Function])], TaroRootElement);

var FormElement = /*#__PURE__*/function (_TaroElement2) {
  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(FormElement, _TaroElement2);

  var _super6 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(FormElement);

  function FormElement() {
    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, FormElement);

    return _super6.apply(this, arguments);
  }

  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(FormElement, [{
    key: "value",
    get: function get() {
      // eslint-disable-next-line dot-notation
      var val = this.props[VALUE];
      return val == null ? '' : val;
    },
    set: function set(val) {
      this.setAttribute(VALUE, val);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      if (event.mpEvent) {
        var val = event.mpEvent.detail.value;

        if (event.type === CHANGE) {
          this.props.value = val;
        } else if (event.type === INPUT) {
          // Web 规范中表单组件的 value 应该跟着输入改变
          // 只是改 this.props.value 的话不会进行 setData，因此这里修改 this.value。
          // 只测试了 React、Vue、Vue3 input 组件的 onInput 事件，onChange 事件不确定有没有副作用，所以暂不修改。
          this.value = val;
        }
      }

      return Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(FormElement.prototype), "dispatchEvent", this).call(this, event);
    }
  }]);

  return FormElement;
}(TaroElement);

var TaroNodeImpl = /*#__PURE__*/function () {
  function TaroNodeImpl( // eslint-disable-next-line @typescript-eslint/indent
  getElement, innerHTMLImpl, adjacentImpl) {
    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, TaroNodeImpl);

    this.getDoc = function () {
      return getElement(ElementNames.Document)();
    };

    this.innerHTMLImpl = innerHTMLImpl;
    this.adjacentImpl = adjacentImpl;
  }

  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(TaroNodeImpl, [{
    key: "bind",
    value: function bind(ctx) {
      this.ctx = ctx;
      this.bindInnerHTML();
      this.bindAdjacentHTML();
    }
  }, {
    key: "bindInnerHTML",
    value: function bindInnerHTML() {
      var ctx = this.ctx,
          impl = this.innerHTMLImpl,
          getDoc = this.getDoc;
      Object.defineProperty(ctx, 'innerHTML', {
        configurable: true,
        enumerable: true,
        set: function set(html) {
          if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(impl)) {
            impl.call(ctx, ctx, html, getDoc);
          } else {
             true && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["warn"])(true, '请实现 node.innerHTML');
          }
        },
        get: function get() {
          return '';
        }
      });
    }
  }, {
    key: "bindAdjacentHTML",
    value: function bindAdjacentHTML() {
      var ctx = this.ctx,
          impl = this.adjacentImpl,
          getDoc = this.getDoc;

      ctx.insertAdjacentHTML = function (position, html) {
        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(impl)) {
          impl.call(ctx, position, html, getDoc);
        } else {
           true && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["warn"])(true, '请实现 node.insertAdjacentHTML');
        }
      };
    }
  }]);

  return TaroNodeImpl;
}();

TaroNodeImpl = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* injectable */ "d"])(), __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.TaroElementFactory)), __param(1, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.InnerHTMLImpl)), __param(1, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ "f"])()), __param(2, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.insertAdjacentHTMLImpl)), __param(2, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ "f"])()), __metadata("design:paramtypes", [Function, Function, Function])], TaroNodeImpl);

var TaroElementImpl = /*#__PURE__*/function () {
  function TaroElementImpl( // eslint-disable-next-line @typescript-eslint/indent
  rectImpl) {
    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, TaroElementImpl);

    this.rectImpl = rectImpl;
  }

  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(TaroElementImpl, [{
    key: "bind",
    value: function bind(ctx) {
      this.bindRect(ctx);
    }
  }, {
    key: "bindRect",
    value: function bindRect(ctx) {
      var impl = this.rectImpl;
      ctx.getBoundingClientRect = /*#__PURE__*/Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _len,
            args,
            _key,
            _args = arguments;

        return _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(impl)) {
                  _context.next = 5;
                  break;
                }

                for (_len = _args.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = _args[_key];
                }

                _context.next = 4;
                return impl.apply(ctx, args);

              case 4:
                return _context.abrupt("return", _context.sent);

              case 5:
                 true && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["warn"])(true, '请实现 element.getBoundingClientRect');
                return _context.abrupt("return", Promise.resolve(null));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }]);

  return TaroElementImpl;
}();

TaroElementImpl = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* injectable */ "d"])(), __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.getBoundingClientRectImpl)), __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ "f"])()), __metadata("design:paramtypes", [Object])], TaroElementImpl);

var TaroDocument = /*#__PURE__*/function (_TaroElement3) {
  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(TaroDocument, _TaroElement3);

  var _super7 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(TaroDocument);

  function TaroDocument( // eslint-disable-next-line @typescript-eslint/indent
  nodeImpl, getElement, hooks, elementImpl, getText) {
    var _this13;

    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, TaroDocument);

    _this13 = _super7.call(this, nodeImpl, getElement, hooks, elementImpl);
    _this13._getText = getText;
    _this13.nodeType = 9
    /* DOCUMENT_NODE */
    ;
    _this13.nodeName = DOCUMENT_ELEMENT_NAME;
    return _this13;
  }

  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(TaroDocument, [{
    key: "createElement",
    value: function createElement(type) {
      if (type === ROOT_STR) {
        return this._getElement(ElementNames.RootElement)();
      }

      if (_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["controlledComponent"].has(type)) {
        return this._getElement(ElementNames.FormElement)(type);
      }

      return this._getElement(ElementNames.Element)(type);
    } // an ugly fake createElementNS to deal with @vue/runtime-dom's
    // support mounting app to svg container since vue@3.0.8

  }, {
    key: "createElementNS",
    value: function createElementNS(_svgNS, type) {
      return this.createElement(type);
    }
  }, {
    key: "createTextNode",
    value: function createTextNode(text) {
      return this._getText(text);
    }
  }, {
    key: "getElementById",
    value: function getElementById(id) {
      var el = eventSource.get(id);
      return Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isUndefined"])(el) ? null : el;
    }
  }, {
    key: "querySelector",
    value: function querySelector(query) {
      // 为了 Vue3 的乞丐版实现
      if (/^#/.test(query)) {
        return this.getElementById(query.slice(1));
      }

      return null;
    }
  }, {
    key: "querySelectorAll",
    value: function querySelectorAll() {
      // fake hack
      return [];
    } // @TODO: @PERF: 在 hydrate 移除掉空的 node

  }, {
    key: "createComment",
    value: function createComment() {
      var textnode = this._getText('');

      textnode.nodeName = COMMENT;
      return textnode;
    }
  }]);

  return TaroDocument;
}(TaroElement);

TaroDocument = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* injectable */ "d"])(), __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.TaroNodeImpl)), __param(1, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.TaroElementFactory)), __param(2, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.Hooks)), __param(3, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.TaroElementImpl)), __param(4, Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.TaroTextFactory)), __metadata("design:paramtypes", [Function, Function, Function, Function, Function])], TaroDocument);

function initPosition() {
  return {
    index: 0,
    column: 0,
    line: 0
  };
}

function feedPosition(position, str, len) {
  var start = position.index;
  var end = position.index = start + len;

  for (var i = start; i < end; i++) {
    var char = str.charAt(i);

    if (char === '\n') {
      position.line++;
      position.column = 0;
    } else {
      position.column++;
    }
  }
}

function jumpPosition(position, str, end) {
  var len = end - position.index;
  return feedPosition(position, str, len);
}

function copyPosition(position) {
  return {
    index: position.index,
    line: position.line,
    column: position.column
  };
}

var whitespace = /\s/;

function isWhitespaceChar(char) {
  return whitespace.test(char);
}

var equalSign = /=/;

function isEqualSignChar(char) {
  return equalSign.test(char);
}

function shouldBeIgnore(tagName) {
  var name = tagName.toLowerCase();

  if (options.html.skipElements.has(name)) {
    return true;
  }

  return false;
}

var alphanumeric = /[A-Za-z0-9]/;

function findTextEnd(str, index) {
  while (true) {
    var textEnd = str.indexOf('<', index);

    if (textEnd === -1) {
      return textEnd;
    }

    var char = str.charAt(textEnd + 1);

    if (char === '/' || char === '!' || alphanumeric.test(char)) {
      return textEnd;
    }

    index = textEnd + 1;
  }
}

function isWordEnd(cursor, wordBegin, html) {
  if (!isWhitespaceChar(html.charAt(cursor))) return false;
  var len = html.length; // backwrad

  for (var i = cursor - 1; i > wordBegin; i--) {
    var char = html.charAt(i);

    if (!isWhitespaceChar(char)) {
      if (isEqualSignChar(char)) return false;
      break;
    }
  } // forward


  for (var _i2 = cursor + 1; _i2 < len; _i2++) {
    var _char = html.charAt(_i2);

    if (!isWhitespaceChar(_char)) {
      if (isEqualSignChar(_char)) return false;
      return true;
    }
  }
}

var Scaner = /*#__PURE__*/function () {
  function Scaner(html) {
    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, Scaner);

    this.tokens = [];
    this.position = initPosition();
    this.html = html;
  }

  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(Scaner, [{
    key: "scan",
    value: function scan() {
      var html = this.html,
          position = this.position;
      var len = html.length;

      while (position.index < len) {
        var start = position.index;
        this.scanText();

        if (position.index === start) {
          var _isComment = html.startsWith('!--', start + 1);

          if (_isComment) {
            this.scanComment();
          } else {
            var tagName = this.scanTag();

            if (shouldBeIgnore(tagName)) {
              this.scanSkipTag(tagName);
            }
          }
        }
      }

      return this.tokens;
    }
  }, {
    key: "scanText",
    value: function scanText() {
      var type = 'text';
      var html = this.html,
          position = this.position;
      var textEnd = findTextEnd(html, position.index);

      if (textEnd === position.index) {
        return;
      }

      if (textEnd === -1) {
        textEnd = html.length;
      }

      var start = copyPosition(position);
      var content = html.slice(position.index, textEnd);
      jumpPosition(position, html, textEnd);
      var end = copyPosition(position);
      this.tokens.push({
        type: type,
        content: content,
        position: {
          start: start,
          end: end
        }
      });
    }
  }, {
    key: "scanComment",
    value: function scanComment() {
      var type = 'comment';
      var html = this.html,
          position = this.position;
      var start = copyPosition(position);
      feedPosition(position, html, 4); // "<!--".length

      var contentEnd = html.indexOf('-->', position.index);
      var commentEnd = contentEnd + 3; // "-->".length

      if (contentEnd === -1) {
        contentEnd = commentEnd = html.length;
      }

      var content = html.slice(position.index, contentEnd);
      jumpPosition(position, html, commentEnd);
      this.tokens.push({
        type: type,
        content: content,
        position: {
          start: start,
          end: copyPosition(position)
        }
      });
    }
  }, {
    key: "scanTag",
    value: function scanTag() {
      this.scanTagStart();
      var tagName = this.scanTagName();
      this.scanAttrs();
      this.scanTagEnd();
      return tagName;
    }
  }, {
    key: "scanTagStart",
    value: function scanTagStart() {
      var type = 'tag-start';
      var html = this.html,
          position = this.position;
      var secondChar = html.charAt(position.index + 1);
      var close = secondChar === '/';
      var start = copyPosition(position);
      feedPosition(position, html, close ? 2 : 1);
      this.tokens.push({
        type: type,
        close: close,
        position: {
          start: start
        }
      });
    }
  }, {
    key: "scanTagEnd",
    value: function scanTagEnd() {
      var type = 'tag-end';
      var html = this.html,
          position = this.position;
      var firstChar = html.charAt(position.index);
      var close = firstChar === '/';
      feedPosition(position, html, close ? 2 : 1);
      var end = copyPosition(position);
      this.tokens.push({
        type: type,
        close: close,
        position: {
          end: end
        }
      });
    }
  }, {
    key: "scanTagName",
    value: function scanTagName() {
      var type = 'tag';
      var html = this.html,
          position = this.position;
      var len = html.length;
      var start = position.index;

      while (start < len) {
        var char = html.charAt(start);
        var isTagChar = !(isWhitespaceChar(char) || char === '/' || char === '>');
        if (isTagChar) break;
        start++;
      }

      var end = start + 1;

      while (end < len) {
        var _char2 = html.charAt(end);

        var _isTagChar = !(isWhitespaceChar(_char2) || _char2 === '/' || _char2 === '>');

        if (!_isTagChar) break;
        end++;
      }

      jumpPosition(position, html, end);
      var tagName = html.slice(start, end);
      this.tokens.push({
        type: type,
        content: tagName
      });
      return tagName;
    }
  }, {
    key: "scanAttrs",
    value: function scanAttrs() {
      var html = this.html,
          position = this.position,
          tokens = this.tokens;
      var cursor = position.index;
      var quote = null; // null, single-, or double-quote

      var wordBegin = cursor; // index of word start

      var words = []; // "key", "key=value", "key='value'", etc

      var len = html.length;

      while (cursor < len) {
        var char = html.charAt(cursor);

        if (quote) {
          var isQuoteEnd = char === quote;

          if (isQuoteEnd) {
            quote = null;
          }

          cursor++;
          continue;
        }

        var isTagEnd = char === '/' || char === '>';

        if (isTagEnd) {
          if (cursor !== wordBegin) {
            words.push(html.slice(wordBegin, cursor));
          }

          break;
        }

        if (isWordEnd(cursor, wordBegin, html)) {
          if (cursor !== wordBegin) {
            words.push(html.slice(wordBegin, cursor));
          }

          wordBegin = cursor + 1;
          cursor++;
          continue;
        }

        var isQuoteStart = char === '\'' || char === '"';

        if (isQuoteStart) {
          quote = char;
          cursor++;
          continue;
        }

        cursor++;
      }

      jumpPosition(position, html, cursor);
      var wLen = words.length;
      var type = 'attribute';

      for (var i = 0; i < wLen; i++) {
        var word = words[i];
        var isNotPair = word.includes('=');

        if (isNotPair) {
          var secondWord = words[i + 1];

          if (secondWord && secondWord.startsWith('=')) {
            if (secondWord.length > 1) {
              var newWord = word + secondWord;
              tokens.push({
                type: type,
                content: newWord
              });
              i += 1;
              continue;
            }

            var thirdWord = words[i + 2];
            i += 1;

            if (thirdWord) {
              var _newWord = word + '=' + thirdWord;

              tokens.push({
                type: type,
                content: _newWord
              });
              i += 1;
              continue;
            }
          }
        }

        if (word.endsWith('=')) {
          var _secondWord = words[i + 1];

          if (_secondWord && !_secondWord.includes('=')) {
            var _newWord3 = word + _secondWord;

            tokens.push({
              type: type,
              content: _newWord3
            });
            i += 1;
            continue;
          }

          var _newWord2 = word.slice(0, -1);

          tokens.push({
            type: type,
            content: _newWord2
          });
          continue;
        }

        tokens.push({
          type: type,
          content: word
        });
      }
    }
  }, {
    key: "scanSkipTag",
    value: function scanSkipTag(tagName) {
      var html = this.html,
          position = this.position;
      var safeTagName = tagName.toLowerCase();
      var len = html.length;

      while (position.index < len) {
        var nextTag = html.indexOf('</', position.index);

        if (nextTag === -1) {
          this.scanText();
          break;
        }

        jumpPosition(position, html, nextTag);
        var name = this.scanTag();

        if (safeTagName === name.toLowerCase()) {
          break;
        }
      }
    }
  }]);

  return Scaner;
}();

function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return !!map[val.toLowerCase()];
  } : function (val) {
    return !!map[val];
  };
}

var specialMiniElements = {
  img: 'image',
  iframe: 'web-view'
};
var internalCompsList = Object.keys(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["internalComponents"]).map(function (i) {
  return i.toLowerCase();
}).join(','); // https://developers.weixin.qq.com/miniprogram/dev/component

var isMiniElements = makeMap(internalCompsList, true); // https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements

var isInlineElements = makeMap('a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b', true); // https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements

var isBlockElements = makeMap('address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt', true);

function unquote(str) {
  var car = str.charAt(0);
  var end = str.length - 1;
  var isQuoteStart = car === '"' || car === "'";

  if (isQuoteStart && car === str.charAt(end)) {
    return str.slice(1, end);
  }

  return str;
}

var LEFT_BRACKET = '{';
var RIGHT_BRACKET = '}';
var CLASS_SELECTOR = '.';
var ID_SELECTOR = '#';
var CHILD_COMBINATOR = '>';
var GENERAL_SIBLING_COMBINATOR = '~';
var ADJACENT_SIBLING_COMBINATOR = '+';

var StyleTagParser = /*#__PURE__*/function () {
  function StyleTagParser() {
    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, StyleTagParser);

    this.styles = [];
  }

  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(StyleTagParser, [{
    key: "extractStyle",
    value: function extractStyle(src) {
      var _this14 = this;

      var REG_STYLE = /<style\s?[^>]*>((.|\n|\s)+?)<\/style>/g;
      var html = src; // let html = src.replace(/\n/g, '')

      html = html.replace(REG_STYLE, function (_, $1) {
        var style = $1.trim();

        _this14.stringToSelector(style);

        return '';
      });
      return html.trim();
    }
  }, {
    key: "stringToSelector",
    value: function stringToSelector(style) {
      var _this15 = this;

      var lb = style.indexOf(LEFT_BRACKET);

      var _loop3 = function _loop3() {
        var rb = style.indexOf(RIGHT_BRACKET);
        var selectors = style.slice(0, lb).trim();
        var content = style.slice(lb + 1, rb).replace(/ /g, '');

        if (!/;$/.test(content)) {
          content += ';';
        }

        selectors.split(',').forEach(function (src) {
          var selectorList = _this15.parseSelector(src);

          _this15.styles.push({
            content: content,
            selectorList: selectorList
          });
        });
        style = style.slice(rb + 1);
        lb = style.indexOf(LEFT_BRACKET);
      };

      while (lb > -1) {
        _loop3();
      } // console.log('res this.styles: ', this.styles)

    }
  }, {
    key: "parseSelector",
    value: function parseSelector(src) {
      // todo: 属性选择器里可以带空格：[a = "b"]，这里的 split(' ') 需要作兼容
      var list = src.trim().replace(/ *([>~+]) */g, ' $1').replace(/ +/g, ' ').split(' ');
      var selectors = list.map(function (item) {
        var firstChar = item.charAt(0);
        var selector = {
          isChild: firstChar === CHILD_COMBINATOR,
          isGeneralSibling: firstChar === GENERAL_SIBLING_COMBINATOR,
          isAdjacentSibling: firstChar === ADJACENT_SIBLING_COMBINATOR,
          tag: null,
          id: null,
          class: [],
          attrs: []
        };
        item = item.replace(/^[>~+]/, ''); // 属性选择器

        item = item.replace(/\[(.+?)\]/g, function (_, $1) {
          var _$1$split = $1.split('='),
              _$1$split2 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_$1$split, 2),
              key = _$1$split2[0],
              value = _$1$split2[1];

          var all = $1.indexOf('=') === -1;
          var attr = {
            all: all,
            key: key,
            value: all ? null : value
          };
          selector.attrs.push(attr);
          return '';
        });
        item = item.replace(/([.#][A-Za-z0-9-_]+)/g, function (_, $1) {
          if ($1[0] === ID_SELECTOR) {
            // id 选择器
            selector.id = $1.substr(1);
          } else if ($1[0] === CLASS_SELECTOR) {
            // class 选择器
            selector.class.push($1.substr(1));
          }

          return '';
        }); // 标签选择器

        if (item !== '') {
          selector.tag = item;
        }

        return selector;
      });
      return selectors;
    }
  }, {
    key: "matchStyle",
    value: function matchStyle(tagName, el, list) {
      var _this16 = this;

      var res = sortStyles(this.styles).reduce(function (str, _ref3, i) {
        var content = _ref3.content,
            selectorList = _ref3.selectorList;
        var idx = list[i];
        var selector = selectorList[idx];
        var nextSelector = selectorList[idx + 1];

        if ((nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isGeneralSibling) || (nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isAdjacentSibling)) {
          selector = nextSelector;
          idx += 1;
          list[i] += 1;
        }

        var isMatch = _this16.matchCurrent(tagName, el, selector);

        if (isMatch && selector.isGeneralSibling) {
          var prev = getPreviousElement(el);

          while (prev) {
            if (prev.h5tagName && _this16.matchCurrent(prev.h5tagName, prev, selectorList[idx - 1])) {
              isMatch = true;
              break;
            }

            prev = getPreviousElement(prev);
            isMatch = false;
          }
        }

        if (isMatch && selector.isAdjacentSibling) {
          var _prev = getPreviousElement(el);

          if (!_prev || !_prev.h5tagName) {
            isMatch = false;
          } else {
            var isSiblingMatch = _this16.matchCurrent(_prev.h5tagName, _prev, selectorList[idx - 1]);

            if (!isSiblingMatch) {
              isMatch = false;
            }
          }
        }

        if (isMatch) {
          if (idx === selectorList.length - 1) {
            return str + content;
          } else if (idx < selectorList.length - 1) {
            list[i] += 1;
          }
        } else {
          // 直接子代组合器: >
          if (selector.isChild && idx > 0) {
            list[i] -= 1;

            if (_this16.matchCurrent(tagName, el, selectorList[list[i]])) {
              list[i] += 1;
            }
          }
        }

        return str;
      }, '');
      return res;
    }
  }, {
    key: "matchCurrent",
    value: function matchCurrent(tagName, el, selector) {
      // 标签选择器
      if (selector.tag && selector.tag !== tagName) return false; // id 选择器

      if (selector.id && selector.id !== el.id) return false; // class 选择器

      if (selector.class.length) {
        var classList = el.className.split(' ');

        for (var i = 0; i < selector.class.length; i++) {
          var cls = selector.class[i];

          if (classList.indexOf(cls) === -1) {
            return false;
          }
        }
      } // 属性选择器


      if (selector.attrs.length) {
        for (var _i3 = 0; _i3 < selector.attrs.length; _i3++) {
          var _selector$attrs$_i = selector.attrs[_i3],
              all = _selector$attrs$_i.all,
              key = _selector$attrs$_i.key,
              value = _selector$attrs$_i.value;

          if (all && !el.hasAttribute(key)) {
            return false;
          } else {
            var attr = el.getAttribute(key);

            if (attr !== unquote(value || '')) {
              return false;
            }
          }
        }
      }

      return true;
    }
  }]);

  return StyleTagParser;
}();

function getPreviousElement(el) {
  var parent = el.parentElement;
  if (!parent) return null;
  var prev = el.previousSibling;
  if (!prev) return null;

  if (prev.nodeType === 1
  /* ELEMENT_NODE */
  ) {
    return prev;
  } else {
    return getPreviousElement(prev);
  }
} // 根据 css selector 权重排序: 权重大的靠后
// @WARN 不考虑伪类
// https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity_2


function sortStyles(styles) {
  return styles.sort(function (s1, s2) {
    var hundreds1 = getHundredsWeight(s1.selectorList);
    var hundreds2 = getHundredsWeight(s2.selectorList);
    if (hundreds1 !== hundreds2) return hundreds1 - hundreds2;
    var tens1 = getTensWeight(s1.selectorList);
    var tens2 = getTensWeight(s2.selectorList);
    if (tens1 !== tens2) return tens1 - tens2;
    var ones1 = getOnesWeight(s1.selectorList);
    var ones2 = getOnesWeight(s2.selectorList);
    return ones1 - ones2;
  });
}

function getHundredsWeight(selectors) {
  return selectors.reduce(function (pre, cur) {
    return pre + (cur.id ? 1 : 0);
  }, 0);
}

function getTensWeight(selectors) {
  return selectors.reduce(function (pre, cur) {
    return pre + cur.class.length + cur.attrs.length;
  }, 0);
}

function getOnesWeight(selectors) {
  return selectors.reduce(function (pre, cur) {
    return pre + (cur.tag ? 1 : 0);
  }, 0);
}

var closingTagAncestorBreakers = {
  li: ['ul', 'ol', 'menu'],
  dt: ['dl'],
  dd: ['dl'],
  tbody: ['table'],
  thead: ['table'],
  tfoot: ['table'],
  tr: ['table'],
  td: ['table']
};

function hasTerminalParent(tagName, stack) {
  var tagParents = closingTagAncestorBreakers[tagName];

  if (tagParents) {
    var currentIndex = stack.length - 1;

    while (currentIndex >= 0) {
      var parentTagName = stack[currentIndex].tagName;

      if (parentTagName === tagName) {
        break;
      }

      if (tagParents && tagParents.includes(parentTagName)) {
        return true;
      }

      currentIndex--;
    }
  }

  return false;
}

function getTagName(tag) {
  if (options.html.renderHTMLTag) {
    return tag;
  }

  if (specialMiniElements[tag]) {
    return specialMiniElements[tag];
  } else if (isMiniElements(tag)) {
    return tag;
  } else if (isBlockElements(tag)) {
    return 'view';
  } else if (isInlineElements(tag)) {
    return 'text';
  }

  return 'view';
}

function splitEqual(str) {
  var sep = '=';
  var idx = str.indexOf(sep);
  if (idx === -1) return [str];
  var key = str.slice(0, idx).trim();
  var value = str.slice(idx + sep.length).trim();
  return [key, value];
}

function format(children, document, styleOptions, parent) {
  return children.filter(function (child) {
    // 过滤注释和空文本节点
    if (child.type === 'comment') {
      return false;
    } else if (child.type === 'text') {
      return child.content !== '';
    }

    return true;
  }).map(function (child) {
    // 文本节点
    if (child.type === 'text') {
      var text = document.createTextNode(child.content);

      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(options.html.transformText)) {
        return options.html.transformText(text, child);
      }

      parent === null || parent === void 0 ? void 0 : parent.appendChild(text);
      return text;
    }

    var el = document.createElement(getTagName(child.tagName));
    el.h5tagName = child.tagName;
    parent === null || parent === void 0 ? void 0 : parent.appendChild(el);

    if (!options.html.renderHTMLTag) {
      el.className = "h5-".concat(child.tagName);
    }

    for (var i = 0; i < child.attributes.length; i++) {
      var attr = child.attributes[i];

      var _splitEqual = splitEqual(attr),
          _splitEqual2 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_splitEqual, 2),
          key = _splitEqual2[0],
          value = _splitEqual2[1];

      if (key === 'class') {
        el.className += ' ' + unquote(value);
      } else if (key[0] === 'o' && key[1] === 'n') {
        continue;
      } else {
        el.setAttribute(key, value == null ? true : unquote(value));
      }
    }

    var styleTagParser = styleOptions.styleTagParser,
        descendantList = styleOptions.descendantList;
    var list = descendantList.slice();
    var style = styleTagParser.matchStyle(child.tagName, el, list);
    el.setAttribute('style', style + el.style.cssText); // console.log('style, ', style)

    format(child.children, document, {
      styleTagParser: styleTagParser,
      descendantList: list
    }, el);

    if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(options.html.transformElement)) {
      return options.html.transformElement(el, child);
    }

    return el;
  });
}

function parser(html, document) {
  var styleTagParser = new StyleTagParser();
  html = styleTagParser.extractStyle(html);
  var tokens = new Scaner(html).scan();
  var root = {
    tagName: '',
    children: [],
    type: 'element',
    attributes: []
  };
  var state = {
    tokens: tokens,
    options: options,
    cursor: 0,
    stack: [root]
  };
  parse(state);
  return format(root.children, document, {
    styleTagParser: styleTagParser,
    descendantList: Array(styleTagParser.styles.length).fill(0)
  });
}

function parse(state) {
  var tokens = state.tokens,
      stack = state.stack;
  var cursor = state.cursor;
  var len = tokens.length;
  var nodes = stack[stack.length - 1].children;

  while (cursor < len) {
    var token = tokens[cursor];

    if (token.type !== 'tag-start') {
      // comment or text
      nodes.push(token);
      cursor++;
      continue;
    }

    var tagToken = tokens[++cursor];
    cursor++;
    var tagName = tagToken.content.toLowerCase();

    if (token.close) {
      var index = stack.length;
      var shouldRewind = false;

      while (--index > -1) {
        if (stack[index].tagName === tagName) {
          shouldRewind = true;
          break;
        }
      }

      while (cursor < len) {
        var endToken = tokens[cursor];
        if (endToken.type !== 'tag-end') break;
        cursor++;
      }

      if (shouldRewind) {
        stack.splice(index);
        break;
      } else {
        continue;
      }
    }

    var isClosingTag = options.html.closingElements.has(tagName);
    var shouldRewindToAutoClose = isClosingTag;

    if (shouldRewindToAutoClose) {
      shouldRewindToAutoClose = !hasTerminalParent(tagName, stack);
    }

    if (shouldRewindToAutoClose) {
      var currentIndex = stack.length - 1;

      while (currentIndex > 0) {
        if (tagName === stack[currentIndex].tagName) {
          stack.splice(currentIndex);
          var previousIndex = currentIndex - 1;
          nodes = stack[previousIndex].children;
          break;
        }

        currentIndex = currentIndex - 1;
      }
    }

    var attributes = [];
    var attrToken = void 0;

    while (cursor < len) {
      attrToken = tokens[cursor];
      if (attrToken.type === 'tag-end') break;
      attributes.push(attrToken.content);
      cursor++;
    }

    cursor++;
    var children = [];
    var element = {
      type: 'element',
      tagName: tagToken.content,
      attributes: attributes,
      children: children
    };
    nodes.push(element);
    var hasChildren = !(attrToken.close || options.html.voidElements.has(tagName));

    if (hasChildren) {
      stack.push({
        tagName: tagName,
        children: children
      });
      var innerState = {
        tokens: tokens,
        cursor: cursor,
        stack: stack
      };
      parse(innerState);
      cursor = innerState.cursor;
    }
  }

  state.cursor = cursor;
}

options.html = {
  skipElements: new Set(['style', 'script']),
  voidElements: new Set(['!doctype', 'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']),
  closingElements: new Set(['html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option', 'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup']),
  renderHTMLTag: false
};

function setInnerHTML(element, html, getDoc) {
  element.childNodes.forEach(function (node) {
    element.removeChild(node);
  });
  var children = parser(html, getDoc());

  for (var i = 0; i < children.length; i++) {
    element.appendChild(children[i]);
  }
}

function getBoundingClientRectImpl() {
  var _this17 = this;

  if (!options.miniGlobal) return Promise.resolve(null);
  return new Promise(function (resolve) {
    var query = options.miniGlobal.createSelectorQuery();
    query.select("#".concat(_this17.uid)).boundingClientRect(function (res) {
      resolve(res);
    }).exec();
  });
}
/**
 * An implementation of `Element.insertAdjacentHTML()`
 * to support Vue 3 with a version of or greater than `vue@3.1.2`
 */


function insertAdjacentHTMLImpl(position, html, getDoc) {
  var _a, _b;

  var parsedNodes = parser(html, getDoc());

  for (var i = 0; i < parsedNodes.length; i++) {
    var n = parsedNodes[i];

    switch (position) {
      case 'beforebegin':
        (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(n, this);
        break;

      case 'afterbegin':
        if (this.hasChildNodes()) {
          this.insertBefore(n, this.childNodes[0]);
        } else {
          this.appendChild(n);
        }

        break;

      case 'beforeend':
        this.appendChild(n);
        break;

      case 'afterend':
        (_b = this.parentNode) === null || _b === void 0 ? void 0 : _b.appendChild(n);
        break;
    }
  }
}

var domExternal = new inversify__WEBPACK_IMPORTED_MODULE_16__[/* ContainerModule */ "b"](function (bind) {
  if (true) {
    if (true) {
      bind(SERVICE_IDENTIFIER.InnerHTMLImpl).toFunction(setInnerHTML);

      if (true) {
        bind(SERVICE_IDENTIFIER.insertAdjacentHTMLImpl).toFunction(insertAdjacentHTMLImpl);
      }
    }

    if (false) {}
  }
});

var Hooks = /*#__PURE__*/function () {
  function Hooks() {
    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, Hooks);
  }

  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(Hooks, [{
    key: "modifyMpEvent",
    value: function modifyMpEvent(e) {
      var _a;

      (_a = this.modifyMpEventImpls) === null || _a === void 0 ? void 0 : _a.forEach(function (fn) {
        return fn(e);
      });
    }
  }, {
    key: "modifyTaroEvent",
    value: function modifyTaroEvent(e, element) {
      var _a;

      (_a = this.modifyTaroEventImpls) === null || _a === void 0 ? void 0 : _a.forEach(function (fn) {
        return fn(e, element);
      });
    }
  }, {
    key: "initNativeApi",
    value: function initNativeApi(taro) {
      var _a;

      (_a = this.initNativeApiImpls) === null || _a === void 0 ? void 0 : _a.forEach(function (fn) {
        return fn(taro);
      });
    }
  }, {
    key: "patchElement",
    value: function patchElement(element) {
      var _a;

      (_a = this.patchElementImpls) === null || _a === void 0 ? void 0 : _a.forEach(function (fn) {
        return fn(element);
      });
    }
  }]);

  return Hooks;
}();

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.getLifecycle), __metadata("design:type", Function)], Hooks.prototype, "getLifecycle", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.getPathIndex), __metadata("design:type", Function)], Hooks.prototype, "getPathIndex", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.getEventCenter), __metadata("design:type", Function)], Hooks.prototype, "getEventCenter", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.isBubbleEvents), __metadata("design:type", Function)], Hooks.prototype, "isBubbleEvents", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.getSpecialNodes), __metadata("design:type", Function)], Hooks.prototype, "getSpecialNodes", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.onRemoveAttribute), Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ "f"])(), __metadata("design:type", Function)], Hooks.prototype, "onRemoveAttribute", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.batchedEventUpdates), Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ "f"])(), __metadata("design:type", Function)], Hooks.prototype, "batchedEventUpdates", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.mergePageInstance), Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ "f"])(), __metadata("design:type", Function)], Hooks.prototype, "mergePageInstance", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.createPullDownComponent), Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ "f"])(), __metadata("design:type", Function)], Hooks.prototype, "createPullDownComponent", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.getDOMNode), Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ "f"])(), __metadata("design:type", Function)], Hooks.prototype, "getDOMNode", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.modifyHydrateData), Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ "f"])(), __metadata("design:type", Function)], Hooks.prototype, "modifyHydrateData", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.modifySetAttrPayload), Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ "f"])(), __metadata("design:type", Function)], Hooks.prototype, "modifySetAttrPayload", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.modifyRmAttrPayload), Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ "f"])(), __metadata("design:type", Function)], Hooks.prototype, "modifyRmAttrPayload", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ "c"])(SERVICE_IDENTIFIER.onAddEvent), Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ "f"])(), __metadata("design:type", Function)], Hooks.prototype, "onAddEvent", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* multiInject */ "e"])(SERVICE_IDENTIFIER.modifyMpEvent), Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ "f"])(), __metadata("design:type", Array)], Hooks.prototype, "modifyMpEventImpls", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* multiInject */ "e"])(SERVICE_IDENTIFIER.modifyTaroEvent), Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ "f"])(), __metadata("design:type", Array)], Hooks.prototype, "modifyTaroEventImpls", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* multiInject */ "e"])(SERVICE_IDENTIFIER.initNativeApi), Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ "f"])(), __metadata("design:type", Array)], Hooks.prototype, "initNativeApiImpls", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* multiInject */ "e"])(SERVICE_IDENTIFIER.patchElement), Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ "f"])(), __metadata("design:type", Array)], Hooks.prototype, "patchElementImpls", void 0);

Hooks = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* injectable */ "d"])()], Hooks);
/**
 * 支持冒泡的事件, 除 支付宝小程序外，其余的可冒泡事件都和微信保持一致
 * 详见 见 https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html
 */

var BUBBLE_EVENTS = new Set(['touchstart', 'touchmove', 'touchcancel', 'touchend', 'touchforcechange', 'tap', 'longpress', 'longtap', 'transitionend', 'animationstart', 'animationiteration', 'animationend']);

var getLifecycle = function getLifecycle(instance, lifecycle) {
  return instance[lifecycle];
};

var getPathIndex = function getPathIndex(indexOfNode) {
  return "[".concat(indexOfNode, "]");
};

var getEventCenter = function getEventCenter(Events) {
  return new Events();
};

var isBubbleEvents = function isBubbleEvents(eventName) {
  return BUBBLE_EVENTS.has(eventName);
};

var getSpecialNodes = function getSpecialNodes() {
  return ['view', 'text', 'image'];
};

var DefaultHooksContainer = new inversify__WEBPACK_IMPORTED_MODULE_16__[/* ContainerModule */ "b"](function (bind) {
  bind(SERVICE_IDENTIFIER.getLifecycle).toFunction(getLifecycle);
  bind(SERVICE_IDENTIFIER.getPathIndex).toFunction(getPathIndex);
  bind(SERVICE_IDENTIFIER.getEventCenter).toFunction(getEventCenter);
  bind(SERVICE_IDENTIFIER.isBubbleEvents).toFunction(isBubbleEvents);
  bind(SERVICE_IDENTIFIER.getSpecialNodes).toFunction(getSpecialNodes);
});

function processPluginHooks(container) {
  var keys = Object.keys(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["defaultReconciler"]);
  keys.forEach(function (key) {
    if (key in SERVICE_IDENTIFIER) {
      // is hooks
      var identifier = SERVICE_IDENTIFIER[key];
      var fn = _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["defaultReconciler"][key];

      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isArray"])(fn)) {
        // is multi
        fn.forEach(function (item) {
          return container.bind(identifier).toFunction(item);
        });
      } else {
        if (container.isBound(identifier)) {
          // 之前有绑定过，需要重新绑定以覆盖前者
          container.rebind(identifier).toFunction(fn);
        } else {
          container.bind(identifier).toFunction(fn);
        }
      }
    }
  });
}

var container = new inversify__WEBPACK_IMPORTED_MODULE_16__[/* Container */ "a"]();
container.bind(SERVICE_IDENTIFIER.TaroElement).to(TaroElement).whenTargetNamed(ElementNames.Element);
container.bind(SERVICE_IDENTIFIER.TaroElement).to(TaroDocument).inSingletonScope().whenTargetNamed(ElementNames.Document);
container.bind(SERVICE_IDENTIFIER.TaroElement).to(TaroRootElement).whenTargetNamed(ElementNames.RootElement);
container.bind(SERVICE_IDENTIFIER.TaroElement).to(FormElement).whenTargetNamed(ElementNames.FormElement);
container.bind(SERVICE_IDENTIFIER.TaroElementFactory).toFactory(function (context) {
  return function (named) {
    return function (nodeName) {
      var el = context.container.getNamed(SERVICE_IDENTIFIER.TaroElement, named);

      if (nodeName) {
        el.nodeName = nodeName;
      }

      el.tagName = el.nodeName.toUpperCase();
      return el;
    };
  };
});
container.bind(SERVICE_IDENTIFIER.TaroText).to(TaroText);
container.bind(SERVICE_IDENTIFIER.TaroTextFactory).toFactory(function (context) {
  return function (text) {
    var textNode = context.container.get(SERVICE_IDENTIFIER.TaroText);
    textNode._value = text;
    return textNode;
  };
});
container.bind(SERVICE_IDENTIFIER.TaroNodeImpl).to(TaroNodeImpl).inSingletonScope();
container.bind(SERVICE_IDENTIFIER.TaroElementImpl).to(TaroElementImpl).inSingletonScope();
container.bind(SERVICE_IDENTIFIER.Hooks).to(Hooks).inSingletonScope();
container.load(domExternal, DefaultHooksContainer);
processPluginHooks(container);
var hooks = container.get(SERVICE_IDENTIFIER.Hooks);
var getElement = container.get(SERVICE_IDENTIFIER.TaroElementFactory);
var document$1 = getElement(ElementNames.Document)(); // Taro 事件对象。以 Web 标准的事件对象为基础，加入小程序事件对象中携带的部分信息，并模拟实现事件冒泡。

var TaroEvent = /*#__PURE__*/function () {
  function TaroEvent(type, opts, event) {
    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, TaroEvent);

    this._stop = false;
    this._end = false;
    this.defaultPrevented = false; // timestamp can either be hi-res ( relative to page load) or low-res (relative to UNIX epoch)
    // here use hi-res timestamp

    this.timeStamp = Date.now();
    this.type = type.toLowerCase();
    this.mpEvent = event;
    this.bubbles = Boolean(opts && opts.bubbles);
    this.cancelable = Boolean(opts && opts.cancelable);
  }

  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(TaroEvent, [{
    key: "stopPropagation",
    value: function stopPropagation() {
      this._stop = true;
    }
  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this._end = this._stop = true;
    }
  }, {
    key: "preventDefault",
    value: function preventDefault() {
      this.defaultPrevented = true;
    }
  }, {
    key: "target",
    get: function get() {
      var _a, _b, _c;

      var element = document$1.getElementById((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.target.id);
      return Object.assign(Object.assign(Object.assign({}, (_b = this.mpEvent) === null || _b === void 0 ? void 0 : _b.target), (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.detail), {
        dataset: element !== null ? element.dataset : _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"]
      });
    }
  }, {
    key: "currentTarget",
    get: function get() {
      var _a, _b, _c;

      var element = document$1.getElementById((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.currentTarget.id);

      if (element === null) {
        return this.target;
      }

      return Object.assign(Object.assign(Object.assign({}, (_b = this.mpEvent) === null || _b === void 0 ? void 0 : _b.currentTarget), (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.detail), {
        dataset: element.dataset
      });
    }
  }]);

  return TaroEvent;
}();

function createEvent(event, node) {
  if (typeof event === 'string') {
    // For Vue3 using document.createEvent
    return new TaroEvent(event, {
      bubbles: true,
      cancelable: true
    });
  }

  var domEv = new TaroEvent(event.type, {
    bubbles: true,
    cancelable: true
  }, event);

  for (var key in event) {
    if (key === CURRENT_TARGET || key === TARGET || key === TYPE || key === TIME_STAMP) {
      continue;
    } else {
      domEv[key] = event[key];
    }
  }

  if (domEv.type === CONFIRM && (node === null || node === void 0 ? void 0 : node.nodeName) === INPUT) {
    // eslint-disable-next-line dot-notation
    domEv[KEY_CODE] = 13;
  }

  return domEv;
}

var eventsBatch = {}; // 小程序的事件代理回调函数

function eventHandler(event) {
  var _a;

  (_a = hooks.modifyMpEvent) === null || _a === void 0 ? void 0 : _a.call(hooks, event);

  if (event.currentTarget == null) {
    event.currentTarget = event.target;
  }

  var node = document$1.getElementById(event.currentTarget.id);

  if (node) {
    var dispatch = function dispatch() {
      var _a;

      var e = createEvent(event, node);
      (_a = hooks.modifyTaroEvent) === null || _a === void 0 ? void 0 : _a.call(hooks, e, node);
      node.dispatchEvent(e);
    };

    if (typeof hooks.batchedEventUpdates === 'function') {
      var type = event.type;

      if (!hooks.isBubbleEvents(type) || !isParentBinded(node, type) || type === TOUCHMOVE && !!node.props.catchMove) {
        // 最上层组件统一 batchUpdate
        hooks.batchedEventUpdates(function () {
          if (eventsBatch[type]) {
            eventsBatch[type].forEach(function (fn) {
              return fn();
            });
            delete eventsBatch[type];
          }

          dispatch();
        });
      } else {
        // 如果上层组件也有绑定同类型的组件，委托给上层组件调用事件回调
        (eventsBatch[type] || (eventsBatch[type] = [])).push(dispatch);
      }
    } else {
      dispatch();
    }
  }
}

var isBrowser = typeof document !== 'undefined' && !!document.scripts;
var doc = isBrowser ? document : _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"];
var win = isBrowser ? window : _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"];

function createDocument() {
  /**
   * <document>
   *   <html>
   *     <head></head>
   *     <body>
   *       <container>
   *         <app id="app" />
   *       </container>
   *     </body>
   *   </html>
   * </document>
   */
  var getElement = container.get(SERVICE_IDENTIFIER.TaroElementFactory);
  var doc = getElement(ElementNames.Document)();
  var documentCreateElement = doc.createElement.bind(doc);
  var html = documentCreateElement(HTML);
  var head = documentCreateElement(HEAD);
  var body = documentCreateElement(BODY);
  var app = documentCreateElement(APP);
  app.id = APP;
  var container$1 = documentCreateElement(CONTAINER); // 多包一层主要为了兼容 vue

  doc.appendChild(html);
  html.appendChild(head);
  html.appendChild(body);
  body.appendChild(container$1);
  container$1.appendChild(app);
  doc.documentElement = html;
  doc.head = head;
  doc.body = body;
  doc.createEvent = createEvent;
  return doc;
}

var document$2 = isBrowser ? doc : createDocument();
var machine = 'Macintosh';
var arch = 'Intel Mac OS X 10_14_5';
var engine = 'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
var navigator = isBrowser ? win.navigator : {
  appCodeName: 'Mozilla',
  appName: 'Netscape',
  appVersion: '5.0 (' + machine + '; ' + arch + ') ' + engine,
  cookieEnabled: true,
  mimeTypes: [],
  onLine: true,
  platform: 'MacIntel',
  plugins: [],
  product: 'Taro',
  productSub: '20030107',
  userAgent: 'Mozilla/5.0 (' + machine + '; ' + arch + ') ' + engine,
  vendor: 'Joyent',
  vendorSub: ''
}; // https://github.com/myrne/performance-now

var now;

(function () {
  var loadTime;

  if (typeof performance !== 'undefined' && performance !== null && performance.now) {
    now = function now() {
      return performance.now();
    };
  } else if (Date.now) {
    now = function now() {
      return Date.now() - loadTime;
    };

    loadTime = Date.now();
  } else {
    now = function now() {
      return new Date().getTime() - loadTime;
    };

    loadTime = new Date().getTime();
  }
})();

var lastTime = 0; // https://gist.github.com/paulirish/1579671
// https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0

var raf = typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame !== null ? requestAnimationFrame : function (callback) {
  var _now = now();

  var nextTime = Math.max(lastTime + 16, _now); // First time will execute it immediately but barely noticeable and performance is gained.

  return setTimeout(function () {
    callback(lastTime = nextTime);
  }, nextTime - _now);
};
var caf = typeof cancelAnimationFrame !== 'undefined' && cancelAnimationFrame !== null ? cancelAnimationFrame : clearTimeout;

if (typeof global !== 'undefined') {
  raf = raf.bind(global);
  caf = caf.bind(global);
}

function getComputedStyle(element) {
  return element.style;
}

var window$1 = isBrowser ? win : {
  navigator: navigator,
  document: document$2
};

if (!isBrowser) {
  var globalProperties = [].concat(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object.getOwnPropertyNames(global || win)), Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object.getOwnPropertySymbols(global || win)));
  globalProperties.forEach(function (property) {
    if (property === 'atob') return;

    if (!Object.prototype.hasOwnProperty.call(window$1, property)) {
      window$1[property] = global[property];
    }
  });
  document$2.defaultView = window$1;
}

if (true) {
  window$1.requestAnimationFrame = raf;
  window$1.cancelAnimationFrame = caf;
  window$1.getComputedStyle = getComputedStyle;

  window$1.addEventListener = function () {};

  window$1.removeEventListener = function () {};

  if (!(DATE in window$1)) {
    window$1.Date = Date;
  }

  if (!(SET_TIMEOUT in window$1)) {
    window$1.setTimeout = setTimeout;
  }
}

var Current = {
  app: null,
  router: null,
  page: null
};

var getCurrentInstance = function getCurrentInstance() {
  return Current;
};

var Events = /*#__PURE__*/function () {
  function Events(opts) {
    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, Events);

    if (typeof opts !== 'undefined' && opts.callbacks) {
      this.callbacks = opts.callbacks;
    } else {
      this.callbacks = {};
    }
  }

  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(Events, [{
    key: "on",
    value: function on(eventName, callback, context) {
      var event, node, tail, list;

      if (!callback) {
        return this;
      }

      eventName = eventName.split(Events.eventSplitter);
      this.callbacks || (this.callbacks = {});
      var calls = this.callbacks;

      while (event = eventName.shift()) {
        list = calls[event];
        node = list ? list.tail : {};
        node.next = tail = {};
        node.context = context;
        node.callback = callback;
        calls[event] = {
          tail: tail,
          next: list ? list.next : node
        };
      }

      return this;
    }
  }, {
    key: "once",
    value: function once(events, callback, context) {
      var _this18 = this;

      var wrapper = function wrapper() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        callback.apply(_this18, args);

        _this18.off(events, wrapper, context);
      };

      this.on(events, wrapper, context);
      return this;
    }
  }, {
    key: "off",
    value: function off(events, callback, context) {
      var event, calls, node, tail, cb, ctx;

      if (!(calls = this.callbacks)) {
        return this;
      }

      if (!(events || callback || context)) {
        delete this.callbacks;
        return this;
      }

      events = events ? events.split(Events.eventSplitter) : Object.keys(calls);

      while (event = events.shift()) {
        node = calls[event];
        delete calls[event];

        if (!node || !(callback || context)) {
          continue;
        }

        tail = node.tail;

        while ((node = node.next) !== tail) {
          cb = node.callback;
          ctx = node.context;

          if (callback && cb !== callback || context && ctx !== context) {
            this.on(event, cb, ctx);
          }
        }
      }

      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(events) {
      var event, node, calls, tail;

      if (!(calls = this.callbacks)) {
        return this;
      }

      events = events.split(Events.eventSplitter);
      var rest = [].slice.call(arguments, 1);

      while (event = events.shift()) {
        if (node = calls[event]) {
          tail = node.tail;

          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, rest);
          }
        }
      }

      return this;
    }
  }]);

  return Events;
}();

Events.eventSplitter = /\s+/;
var hooks$1 = container.get(SERVICE_IDENTIFIER.Hooks);
var eventCenter = hooks$1.getEventCenter(Events);
container.bind(SERVICE_IDENTIFIER.eventCenter).toConstantValue(eventCenter);
/* eslint-disable dot-notation */

var instances = new Map();
var pageId = incrementId();
var hooks$2 = container.get(SERVICE_IDENTIFIER.Hooks);

function injectPageInstance(inst, id) {
  var _a;

  (_a = hooks$2.mergePageInstance) === null || _a === void 0 ? void 0 : _a.call(hooks$2, instances.get(id), inst);
  instances.set(id, inst);
}

function getPageInstance(id) {
  return instances.get(id);
}

function addLeadingSlash(path) {
  if (path == null) {
    return '';
  }

  return path.charAt(0) === '/' ? path : '/' + path;
}

function safeExecute(path, lifecycle) {
  for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  var instance = instances.get(path);

  if (instance == null) {
    return;
  }

  var func = hooks$2.getLifecycle(instance, lifecycle);

  if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isArray"])(func)) {
    var res = func.map(function (fn) {
      return fn.apply(instance, args);
    });
    return res[0];
  }

  if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(func)) {
    return;
  }

  return func.apply(instance, args);
}

function stringify(obj) {
  if (obj == null) {
    return '';
  }

  var path = Object.keys(obj).map(function (key) {
    return key + '=' + obj[key];
  }).join('&');
  return path === '' ? path : '?' + path;
}

function getPath(id, options) {
  var path = id;

  if (!isBrowser) {
    path = id + stringify(options);
  }

  return path;
}

function getOnReadyEventKey(path) {
  return path + '.' + 'onReady';
}

function getOnShowEventKey(path) {
  return path + '.' + 'onShow';
}

function getOnHideEventKey(path) {
  return path + '.' + 'onHide';
}

function createPageConfig(component, pageName, data, pageConfig) {
  var _a, _b;

  var id = pageName !== null && pageName !== void 0 ? pageName : "taro_page_".concat(pageId()); // 小程序 Page 构造器是一个傲娇小公主，不能把复杂的对象挂载到参数上

  var pageElement = null;
  var unmounting = false;
  var prepareMountList = [];
  var config = {
    onLoad: function onLoad(options, cb) {
      var _this19 = this;

      perf.start(PAGE_INIT);
      Current.page = this;
      this.config = pageConfig || {};
      options.$taroTimestamp = Date.now(); // this.$taroPath 是页面唯一标识，不可变，因此页面参数 options 也不可变

      this.$taroPath = getPath(id, options); // this.$taroParams 作为暴露给开发者的页面参数对象，可以被随意修改

      if (this.$taroParams == null) {
        this.$taroParams = Object.assign({}, options);
      }

      var router = isBrowser ? this.$taroPath : this.route || this.__route__;
      Current.router = {
        params: this.$taroParams,
        path: addLeadingSlash(router),
        onReady: getOnReadyEventKey(id),
        onShow: getOnShowEventKey(id),
        onHide: getOnHideEventKey(id)
      };

      var mount = function mount() {
        Current.app.mount(component, _this19.$taroPath, function () {
          pageElement = document$2.getElementById(_this19.$taroPath);
          Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["ensure"])(pageElement !== null, '没有找到页面实例。');
          safeExecute(_this19.$taroPath, 'onLoad', _this19.$taroParams);

          if (!isBrowser) {
            pageElement.ctx = _this19;
            pageElement.performUpdate(true, cb);
          }
        });
      };

      if (unmounting) {
        prepareMountList.push(mount);
      } else {
        mount();
      }
    },
    onReady: function onReady() {
      raf(function () {
        eventCenter.trigger(getOnReadyEventKey(id));
      });
      safeExecute(this.$taroPath, 'onReady');
      this.onReady.called = true;
    },
    onUnload: function onUnload() {
      var _this20 = this;

      unmounting = true;
      Current.app.unmount(this.$taroPath, function () {
        unmounting = false;
        instances.delete(_this20.$taroPath);

        if (pageElement) {
          pageElement.ctx = null;
        }

        if (prepareMountList.length) {
          prepareMountList.forEach(function (fn) {
            return fn();
          });
          prepareMountList = [];
        }
      });
    },
    onShow: function onShow() {
      Current.page = this;
      this.config = pageConfig || {};
      var router = isBrowser ? this.$taroPath : this.route || this.__route__;
      Current.router = {
        params: this.$taroParams,
        path: addLeadingSlash(router),
        onReady: getOnReadyEventKey(id),
        onShow: getOnShowEventKey(id),
        onHide: getOnHideEventKey(id)
      };
      raf(function () {
        eventCenter.trigger(getOnShowEventKey(id));
      });
      safeExecute(this.$taroPath, 'onShow');
    },
    onHide: function onHide() {
      Current.page = null;
      Current.router = null;
      safeExecute(this.$taroPath, 'onHide');
      eventCenter.trigger(getOnHideEventKey(id));
    },
    onPullDownRefresh: function onPullDownRefresh() {
      return safeExecute(this.$taroPath, 'onPullDownRefresh');
    },
    onReachBottom: function onReachBottom() {
      return safeExecute(this.$taroPath, 'onReachBottom');
    },
    onPageScroll: function onPageScroll(options) {
      return safeExecute(this.$taroPath, 'onPageScroll', options);
    },
    onResize: function onResize(options) {
      return safeExecute(this.$taroPath, 'onResize', options);
    },
    onTabItemTap: function onTabItemTap(options) {
      return safeExecute(this.$taroPath, 'onTabItemTap', options);
    },
    onTitleClick: function onTitleClick() {
      return safeExecute(this.$taroPath, 'onTitleClick');
    },
    onOptionMenuClick: function onOptionMenuClick() {
      return safeExecute(this.$taroPath, 'onOptionMenuClick');
    },
    onPopMenuClick: function onPopMenuClick() {
      return safeExecute(this.$taroPath, 'onPopMenuClick');
    },
    onPullIntercept: function onPullIntercept() {
      return safeExecute(this.$taroPath, 'onPullIntercept');
    },
    onAddToFavorites: function onAddToFavorites() {
      return safeExecute(this.$taroPath, 'onAddToFavorites');
    }
  }; // onShareAppMessage 和 onShareTimeline 一样，会影响小程序右上方按钮的选项，因此不能默认注册。

  if (component.onShareAppMessage || ((_a = component.prototype) === null || _a === void 0 ? void 0 : _a.onShareAppMessage) || component.enableShareAppMessage) {
    config.onShareAppMessage = function (options) {
      var target = options === null || options === void 0 ? void 0 : options.target;

      if (target != null) {
        var _id = target.id;
        var element = document$2.getElementById(_id);

        if (element != null) {
          options.target.dataset = element.dataset;
        }
      }

      return safeExecute(this.$taroPath, 'onShareAppMessage', options);
    };
  }

  if (component.onShareTimeline || ((_b = component.prototype) === null || _b === void 0 ? void 0 : _b.onShareTimeline) || component.enableShareTimeline) {
    config.onShareTimeline = function () {
      return safeExecute(this.$taroPath, 'onShareTimeline');
    };
  }

  config.eh = eventHandler;

  if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isUndefined"])(data)) {
    config.data = data;
  }

  if (isBrowser) {
    config.path = id;
  }

  return config;
}

function createComponentConfig(component, componentName, data) {
  var _a, _b, _c;

  var id = componentName !== null && componentName !== void 0 ? componentName : "taro_component_".concat(pageId());
  var componentElement = null;
  var config = {
    attached: function attached() {
      var _this21 = this;

      var _a;

      perf.start(PAGE_INIT);
      var path = getPath(id, {
        id: ((_a = this.getPageId) === null || _a === void 0 ? void 0 : _a.call(this)) || pageId()
      });
      Current.app.mount(component, path, function () {
        componentElement = document$2.getElementById(path);
        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["ensure"])(componentElement !== null, '没有找到组件实例。');
        safeExecute(path, 'onLoad');

        if (!isBrowser) {
          componentElement.ctx = _this21;
          componentElement.performUpdate(true);
        }
      });
    },
    detached: function detached() {
      var path = getPath(id, {
        id: this.getPageId()
      });
      Current.app.unmount(path, function () {
        instances.delete(path);

        if (componentElement) {
          componentElement.ctx = null;
        }
      });
    },
    methods: {
      eh: eventHandler
    }
  };

  if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isUndefined"])(data)) {
    config.data = data;
  }

  config['options'] = (_a = component === null || component === void 0 ? void 0 : component['options']) !== null && _a !== void 0 ? _a : _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"];
  config['externalClasses'] = (_b = component === null || component === void 0 ? void 0 : component['externalClasses']) !== null && _b !== void 0 ? _b : _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"];
  config['behaviors'] = (_c = component === null || component === void 0 ? void 0 : component['behaviors']) !== null && _c !== void 0 ? _c : _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"];
  return config;
}

function createRecursiveComponentConfig(componentName) {
  return {
    properties: {
      i: {
        type: Object,
        value: Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])({}, "nn"
        /* NodeName */
        , 'view')
      },
      l: {
        type: String,
        value: ''
      }
    },
    options: {
      addGlobalClass: true,
      virtualHost: componentName !== 'custom-wrapper'
    },
    methods: {
      eh: eventHandler
    }
  };
}

var hooks$3 = container.get(SERVICE_IDENTIFIER.Hooks);

function isClassComponent(R, component) {
  var _a;

  return Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(component.render) || !!((_a = component.prototype) === null || _a === void 0 ? void 0 : _a.isReactComponent) || component.prototype instanceof R.Component; // compat for some others react-like library
} // 初始值设置为 any 主要是为了过 TS 的校验


var R = _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"];
var PageContext = _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"];

function connectReactPage(R, id) {
  var h = R.createElement;
  return function (component) {
    // eslint-disable-next-line dot-notation
    var isReactComponent = isClassComponent(R, component);

    var inject = function inject(node) {
      return node && injectPageInstance(node, id);
    };

    var refs = isReactComponent ? {
      ref: inject
    } : {
      forwardedRef: inject,
      // 兼容 react-redux 7.20.1+
      reactReduxForwardedRef: inject
    };

    if (PageContext === _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"]) {
      PageContext = R.createContext('');
    }

    return /*#__PURE__*/function (_R$Component) {
      Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(Page, _R$Component);

      var _super8 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(Page);

      function Page() {
        var _this22;

        Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, Page);

        _this22 = _super8.apply(this, arguments);
        _this22.state = {
          hasError: false
        };
        return _this22;
      }

      Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(Page, [{
        key: "componentDidCatch",
        value: // React 16 uncaught error 会导致整个应用 crash，
        // 目前把错误缩小到页面
        function componentDidCatch(error, info) {
           true && console.warn(error);
           true && console.error(info.componentStack);
        }
      }, {
        key: "render",
        value: function render() {
          var children = this.state.hasError ? [] : h(PageContext.Provider, {
            value: id
          }, h(component, Object.assign(Object.assign({}, this.props), refs)));

          if (isBrowser) {
            return h('div', {
              id: id,
              className: 'taro_page'
            }, children);
          }

          return h('root', {
            id: id
          }, children);
        }
      }], [{
        key: "getDerivedStateFromError",
        value: function getDerivedStateFromError(error) {
           true && console.warn(error);
          return {
            hasError: true
          };
        }
      }]);

      return Page;
    }(R.Component);
  };
}

var ReactDOM;

function setReconciler() {
  var getLifecycle = function getLifecycle(instance, lifecycle) {
    lifecycle = lifecycle.replace(/^on(Show|Hide)$/, 'componentDid$1');
    return instance[lifecycle];
  };

  var modifyMpEvent = function modifyMpEvent(event) {
    event.type = event.type.replace(/-/g, '');
  };

  var batchedEventUpdates = function batchedEventUpdates(cb) {
    ReactDOM.unstable_batchedUpdates(cb);
  };

  var mergePageInstance = function mergePageInstance(prev, next) {
    if (!prev || !next) return; // 子组件使用 lifecycle hooks 注册了生命周期后，会存在 prev，里面是注册的生命周期回调。
    // prev 使用 Object.create(null) 创建，H5 的 fast-refresh 可能也会导致存在 prev，要排除这些意外产生的 prev

    if ('constructor' in prev) return;
    Object.keys(prev).forEach(function (item) {
      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(next[item])) {
        next[item] = [next[item]].concat(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(prev[item]));
      } else {
        next[item] = [].concat(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(next[item] || []), Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(prev[item]));
      }
    });
  };

  hooks$3.getLifecycle = getLifecycle;
  hooks$3.modifyMpEvent = modifyMpEvent;
  hooks$3.batchedEventUpdates = batchedEventUpdates;
  hooks$3.mergePageInstance = mergePageInstance;

  if (false) {}
}

var pageKeyId = incrementId();

function createReactApp(App, react, reactdom, config) {
  R = react;
  ReactDOM = reactdom;
  Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["ensure"])(!!ReactDOM, '构建 React/Nerv 项目请把 process.env.FRAMEWORK 设置为 \'react\'/\'nerv\' ');
  var ref = R.createRef();
  var isReactComponent = isClassComponent(R, App);
  setReconciler();

  var AppWrapper = /*#__PURE__*/function (_R$Component2) {
    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(AppWrapper, _R$Component2);

    var _super9 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(AppWrapper);

    function AppWrapper() {
      var _this23;

      Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, AppWrapper);

      _this23 = _super9.apply(this, arguments); // run createElement() inside the render function to make sure that owner is right

      _this23.pages = [];
      _this23.elements = [];
      return _this23;
    }

    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(AppWrapper, [{
      key: "mount",
      value: function mount(component, id, cb) {
        var key = id + pageKeyId();

        var page = function page() {
          return R.createElement(component, {
            key: key,
            tid: id
          });
        };

        this.pages.push(page);
        this.forceUpdate(cb);
      }
    }, {
      key: "unmount",
      value: function unmount(id, cb) {
        for (var i = 0; i < this.elements.length; i++) {
          var element = this.elements[i];

          if (element.props.tid === id) {
            this.elements.splice(i, 1);
            break;
          }
        }

        this.forceUpdate(cb);
      }
    }, {
      key: "render",
      value: function render() {
        while (this.pages.length > 0) {
          var page = this.pages.pop();
          this.elements.push(page());
        }

        var props = null;

        if (isReactComponent) {
          props = {
            ref: ref
          };
        }

        return R.createElement(App, props, isBrowser ? R.createElement('div', null, this.elements.slice()) : this.elements.slice());
      }
    }]);

    return AppWrapper;
  }(R.Component);

  var wrapper;

  if (!isBrowser) {
    // eslint-disable-next-line react/no-render-return-value
    wrapper = ReactDOM.render(R.createElement(AppWrapper), document$2.getElementById('app'));
  }

  var app = Object.create({
    render: function render(cb) {
      wrapper.forceUpdate(cb);
    },
    mount: function mount(component, id, cb) {
      var page = connectReactPage(R, id)(component);
      wrapper.mount(page, id, cb);
    },
    unmount: function unmount(id, cb) {
      wrapper.unmount(id, cb);
    }
  }, {
    config: {
      writable: true,
      enumerable: true,
      configurable: true,
      value: config
    },
    onLaunch: {
      enumerable: true,
      writable: true,
      value: function value(options) {
        var _this24 = this;

        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);

        if (isBrowser) {
          // 由于 H5 路由初始化的时候会清除 app 下的 dom 元素，所以需要在路由初始化后执行 render
          // eslint-disable-next-line react/no-render-return-value
          wrapper = ReactDOM.render(R.createElement(AppWrapper), document$2.getElementById('app'));
        }

        var app = ref.current; // For taroize
        // 把 App Class 上挂载的额外属性同步到全局 app 对象中

        if (app === null || app === void 0 ? void 0 : app.taroGlobalData) {
          var globalData = app.taroGlobalData;
          var keys = Object.keys(globalData);
          var descriptors = Object.getOwnPropertyDescriptors(globalData);
          keys.forEach(function (key) {
            Object.defineProperty(_this24, key, {
              configurable: true,
              enumerable: true,
              get: function get() {
                return globalData[key];
              },
              set: function set(value) {
                globalData[key] = value;
              }
            });
          });
          Object.defineProperties(this, descriptors);
        }

        this.$app = app;

        if (app != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(app.onLaunch)) {
          app.onLaunch(options);
        }
      }
    },
    onShow: {
      enumerable: true,
      writable: true,
      value: function value(options) {
        var app = ref.current;
        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);

        if (app != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(app.componentDidShow)) {
          app.componentDidShow(options);
        } // app useDidShow


        triggerAppHook('onShow');
      }
    },
    onHide: {
      enumerable: true,
      writable: true,
      value: function value(options) {
        var app = ref.current;

        if (app != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(app.componentDidHide)) {
          app.componentDidHide(options);
        } // app useDidHide


        triggerAppHook('onHide');
      }
    },
    onPageNotFound: {
      enumerable: true,
      writable: true,
      value: function value(res) {
        var app = ref.current;

        if (app != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(app.onPageNotFound)) {
          app.onPageNotFound(res);
        }
      }
    }
  });

  function triggerAppHook(lifecycle) {
    var instance = getPageInstance(HOOKS_APP_ID);

    if (instance) {
      var _app = ref.current;
      var func = hooks$3.getLifecycle(instance, lifecycle);

      if (Array.isArray(func)) {
        func.forEach(function (cb) {
          return cb.apply(_app);
        });
      }
    }
  }

  Current.app = app;
  return Current.app;
}

var getNativeCompId = incrementId();

function initNativeComponentEntry(R, ReactDOM) {
  var NativeComponentWrapper = /*#__PURE__*/function (_R$Component3) {
    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(NativeComponentWrapper, _R$Component3);

    var _super10 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(NativeComponentWrapper);

    function NativeComponentWrapper() {
      var _this25;

      Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, NativeComponentWrapper);

      _this25 = _super10.apply(this, arguments);
      _this25.root = R.createRef();
      _this25.ctx = _this25.props.getCtx();
      return _this25;
    }

    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(NativeComponentWrapper, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.ctx.component = this;
        var rootElement = this.root.current;
        rootElement.ctx = this.ctx;
        rootElement.performUpdate(true);
      }
    }, {
      key: "render",
      value: function render() {
        return R.createElement('root', {
          ref: this.root
        }, this.props.renderComponent(this.ctx));
      }
    }]);

    return NativeComponentWrapper;
  }(R.Component);

  var Entry = /*#__PURE__*/function (_R$Component4) {
    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(Entry, _R$Component4);

    var _super11 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(Entry);

    function Entry() {
      var _this26;

      Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(this, Entry);

      _this26 = _super11.apply(this, arguments);
      _this26.state = {
        components: []
      };
      return _this26;
    }

    Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(Entry, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        Current.app = this;
      }
    }, {
      key: "mount",
      value: function mount(Component, compId, getCtx) {
        var isReactComponent = isClassComponent(R, Component);

        var inject = function inject(node) {
          return node && injectPageInstance(node, compId);
        };

        var refs = isReactComponent ? {
          ref: inject
        } : {
          forwardedRef: inject,
          reactReduxForwardedRef: inject
        };
        var item = {
          compId: compId,
          element: R.createElement(NativeComponentWrapper, {
            key: compId,
            getCtx: getCtx,
            renderComponent: function renderComponent(ctx) {
              return R.createElement(Component, Object.assign(Object.assign({}, (ctx.data || (ctx.data = {})).props), refs));
            }
          })
        };
        this.setState({
          components: [].concat(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this.state.components), [item])
        });
      }
    }, {
      key: "unmount",
      value: function unmount(compId) {
        var components = this.state.components;
        var index = components.findIndex(function (item) {
          return item.compId === compId;
        });
        var next = [].concat(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(components.slice(0, index)), Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(components.slice(index + 1)));
        this.setState({
          components: next
        });
      }
    }, {
      key: "render",
      value: function render() {
        var components = this.state.components;
        return components.map(function (_ref4) {
          var element = _ref4.element;
          return element;
        });
      }
    }]);

    return Entry;
  }(R.Component);

  setReconciler();
  var app = document$2.getElementById('app');
  ReactDOM.render(R.createElement(Entry, {}), app);
}

function createNativeComponentConfig(Component, react, reactdom, componentConfig) {
  R = react;
  ReactDOM = reactdom;
  var config = {
    properties: {
      props: {
        type: null,
        value: null,
        observer: function observer(_newVal, oldVal) {
          oldVal && this.component.forceUpdate();
        }
      }
    },
    created: function created() {
      if (!Current.app) {
        initNativeComponentEntry(R, ReactDOM);
      }
    },
    attached: function attached() {
      var _this27 = this;

      setCurrent();
      this.compId = getNativeCompId();
      this.config = componentConfig;
      Current.app.mount(Component, this.compId, function () {
        return _this27;
      });
    },
    ready: function ready() {
      safeExecute(this.compId, 'onReady');
    },
    detached: function detached() {
      Current.app.unmount(this.compId);
    },
    pageLifetimes: {
      show: function show() {
        safeExecute(this.compId, 'onShow');
      },
      hide: function hide() {
        safeExecute(this.compId, 'onHide');
      }
    },
    methods: {
      eh: eventHandler
    }
  };

  function setCurrent() {
    var pages = getCurrentPages();
    var currentPage = pages[pages.length - 1];
    if (Current.page === currentPage) return;
    Current.page = currentPage;
    var route = currentPage.route || currentPage.__route__;
    var router = {
      params: currentPage.options || {},
      path: addLeadingSlash(route),
      onReady: '',
      onHide: '',
      onShow: ''
    };
    Current.router = router;

    if (!currentPage.options) {
      // 例如在微信小程序中，页面 options 的设置时机比组件 attached 慢
      Object.defineProperty(currentPage, 'options', {
        enumerable: true,
        configurable: true,
        get: function get() {
          return this._optionsValue;
        },
        set: function set(value) {
          router.params = value;
          this._optionsValue = value;
        }
      });
    }
  }

  return config;
}

function connectVuePage(Vue, id) {
  return function (component) {
    var injectedPage = Vue.extend({
      props: {
        tid: String
      },
      mixins: [component, {
        created: function created() {
          injectPageInstance(this, id);
        }
      }]
    });
    var options = {
      render: function render(h) {
        return h(isBrowser ? 'div' : 'root', {
          attrs: {
            id: id,
            class: isBrowser ? 'taro_page' : ''
          }
        }, [h(injectedPage, {
          props: {
            tid: id
          }
        })]);
      }
    };
    return options;
  };
}

function setReconciler$1() {
  var hooks = container.get(SERVICE_IDENTIFIER.Hooks);

  var onRemoveAttribute = function onRemoveAttribute(dom, qualifiedName) {
    // 处理原因: https://github.com/NervJS/taro/pull/5990
    var props = dom.props;

    if (!props.hasOwnProperty(qualifiedName) || Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isBoolean"])(props[qualifiedName])) {
      dom.setAttribute(qualifiedName, false);
      return true;
    }
  };

  var getLifecycle = function getLifecycle(instance, lifecycle) {
    return instance.$options[lifecycle];
  };

  hooks.onRemoveAttribute = onRemoveAttribute;
  hooks.getLifecycle = getLifecycle;

  if (false) {}
}

var Vue;

function createVueApp(App, vue, config) {
  Vue = vue;
  Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["ensure"])(!!Vue, '构建 Vue 项目请把 process.env.FRAMEWORK 设置为 \'vue\'');
  setReconciler$1();
  Vue.config.getTagNamespace = _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["noop"];
  var elements = [];
  var pages = [];
  var appInstance;
  var wrapper = new Vue({
    render: function render(h) {
      while (pages.length > 0) {
        var page = pages.pop();
        elements.push(page(h));
      }

      return h(App, {
        ref: 'app'
      }, elements.slice());
    },
    methods: {
      mount: function mount(component, id, cb) {
        pages.push(function (h) {
          return h(component, {
            key: id
          });
        });
        this.updateSync(cb);
      },
      updateSync: function updateSync(cb) {
        this._update(this._render(), false);

        this.$children.forEach(function (child) {
          return child._update(child._render(), false);
        });
        cb();
      },
      unmount: function unmount(id, cb) {
        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];

          if (element.key === id) {
            elements.splice(i, 1);
            break;
          }
        }

        this.updateSync(cb);
      }
    }
  });

  if (!isBrowser) {
    wrapper.$mount(document$2.getElementById('app'));
  }

  var app = Object.create({
    mount: function mount(component, id, cb) {
      var page = connectVuePage(Vue, id)(component);
      wrapper.mount(page, id, cb);
    },
    unmount: function unmount(id, cb) {
      wrapper.unmount(id, cb);
    }
  }, {
    config: {
      writable: true,
      enumerable: true,
      configurable: true,
      value: config
    },
    onLaunch: {
      writable: true,
      enumerable: true,
      value: function value(options) {
        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);

        if (isBrowser) {
          // 由于 H5 路由初始化的时候会清除 app 下的 dom 元素，所以需要在路由初始化后再执行 render
          wrapper.$mount(document$2.getElementById('app'));
        }

        appInstance = wrapper.$refs.app;

        if (appInstance != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(appInstance.$options.onLaunch)) {
          appInstance.$options.onLaunch.call(appInstance, options);
        }
      }
    },
    onShow: {
      writable: true,
      enumerable: true,
      value: function value(options) {
        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);

        if (appInstance != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(appInstance.$options.onShow)) {
          appInstance.$options.onShow.call(appInstance, options);
        }
      }
    },
    onHide: {
      writable: true,
      enumerable: true,
      value: function value(options) {
        if (appInstance != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(appInstance.$options.onHide)) {
          appInstance.$options.onHide.call(appInstance, options);
        }
      }
    }
  });
  Current.app = app;
  return Current.app;
}

function createVue3Page(h, id) {
  return function (component) {
    var _a;

    var inject = {
      props: {
        tid: String
      },
      created: function created() {
        injectPageInstance(this, id); // vue3 组件 created 时机比小程序页面 onShow 慢，因此在 created 后再手动触发一次 onShow。

        this.$nextTick(function () {
          safeExecute(id, 'onShow');
        });
      }
    };

    if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isArray"])(component.mixins)) {
      var mixins = component.mixins;
      var idx = mixins.length - 1;

      if (!((_a = mixins[idx].props) === null || _a === void 0 ? void 0 : _a.tid)) {
        // mixins 里还没注入过，直接推入数组
        component.mixins.push(inject);
      } else {
        // mixins 里已经注入过，代替前者
        component.mixins[idx] = inject;
      }
    } else {
      component.mixins = [inject];
    }

    return h(isBrowser ? 'div' : 'root', {
      key: id,
      id: id,
      class: isBrowser ? 'taro_page' : ''
    }, [h(Object.assign({}, component), {
      tid: id
    })]);
  };
}

function setReconciler$2() {
  var hooks = container.get(SERVICE_IDENTIFIER.Hooks);

  var getLifecycle = function getLifecycle(instance, lifecycle) {
    return instance.$options[lifecycle];
  };

  var modifyMpEvent = function modifyMpEvent(event) {
    event.type = event.type.replace(/-/g, '');
  };

  hooks.getLifecycle = getLifecycle;
  hooks.modifyMpEvent = modifyMpEvent;

  if (false) {}
}

function createVue3App(app, h, config) {
  var pages = [];
  var appInstance;
  Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["ensure"])(!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(app._component), '入口组件不支持使用函数式组件');
  setReconciler$2();

  app._component.render = function () {
    return pages.slice();
  };

  if (!isBrowser) {
    appInstance = app.mount('#app');
  }

  var appConfig = Object.create({
    mount: function mount(component, id, cb) {
      var page = createVue3Page(h, id)(component);
      pages.push(page);
      this.updateAppInstance(cb);
    },
    unmount: function unmount(id, cb) {
      pages = pages.filter(function (page) {
        return page.key !== id;
      });
      this.updateAppInstance(cb);
    },
    updateAppInstance: function updateAppInstance(cb) {
      appInstance.$forceUpdate();
      appInstance.$nextTick(cb);
    }
  }, {
    config: {
      writable: true,
      enumerable: true,
      configurable: true,
      value: config
    },
    onLaunch: {
      writable: true,
      enumerable: true,
      value: function value(options) {
        var _a;

        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);

        if (isBrowser) {
          appInstance = app.mount('#app');
        }

        var onLaunch = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onLaunch;
        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(onLaunch) && onLaunch.call(appInstance, options);
      }
    },
    onShow: {
      writable: true,
      enumerable: true,
      value: function value(options) {
        var _a;

        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);
        var onShow = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onShow;
        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(onShow) && onShow.call(appInstance, options);
      }
    },
    onHide: {
      writable: true,
      enumerable: true,
      value: function value(options) {
        var _a;

        var onHide = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onHide;
        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(onHide) && onHide.call(appInstance, options);
      }
    }
  });
  Current.app = appConfig;
  return Current.app;
}

var taroHooks = function taroHooks(lifecycle) {
  return function (fn) {
    var id = R.useContext(PageContext) || HOOKS_APP_ID; // hold fn ref and keep up to date

    var fnRef = R.useRef(fn);
    if (fnRef.current !== fn) fnRef.current = fn;
    R.useLayoutEffect(function () {
      var inst = getPageInstance(id);
      var first = false;

      if (inst == null) {
        first = true;
        inst = Object.create(null);
      }

      inst = inst; // callback is immutable but inner function is up to date

      var callback = function callback() {
        return fnRef.current.apply(fnRef, arguments);
      };

      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(inst[lifecycle])) {
        inst[lifecycle] = [inst[lifecycle], callback];
      } else {
        inst[lifecycle] = [].concat(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(inst[lifecycle] || []), [callback]);
      }

      if (first) {
        injectPageInstance(inst, id);
      }

      return function () {
        var inst = getPageInstance(id);
        var list = inst[lifecycle];

        if (list === callback) {
          inst[lifecycle] = undefined;
        } else if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isArray"])(list)) {
          inst[lifecycle] = list.filter(function (item) {
            return item !== callback;
          });
        }
      };
    }, []);
  };
};

var useDidShow = taroHooks('componentDidShow');
var useDidHide = taroHooks('componentDidHide');
var usePullDownRefresh = taroHooks('onPullDownRefresh');
var useReachBottom = taroHooks('onReachBottom');
var usePageScroll = taroHooks('onPageScroll');
var useResize = taroHooks('onResize');
var useShareAppMessage = taroHooks('onShareAppMessage');
var useTabItemTap = taroHooks('onTabItemTap');
var useTitleClick = taroHooks('onTitleClick');
var useOptionMenuClick = taroHooks('onOptionMenuClick');
var usePullIntercept = taroHooks('onPullIntercept');
var useShareTimeline = taroHooks('onShareTimeline');
var useAddToFavorites = taroHooks('onAddToFavorites');
var useReady = taroHooks('onReady');

var useRouter = function useRouter() {
  var dynamic = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return dynamic ? Current.router : R.useMemo(function () {
    return Current.router;
  }, []);
};

var useScope = function useScope() {
  return undefined;
};

function removeLeadingSlash(path) {
  if (path == null) {
    return '';
  }

  return path.charAt(0) === '/' ? path.slice(1) : path;
}

var nextTick = function nextTick(cb, ctx) {
  var _a, _b, _c;

  var router = Current.router;

  var timerFunc = function timerFunc() {
    setTimeout(function () {
      ctx ? cb.call(ctx) : cb();
    }, 1);
  };

  if (router !== null) {
    var pageElement = null;
    var path = getPath(removeLeadingSlash(router.path), router.params);
    pageElement = document$2.getElementById(path);

    if (pageElement !== null) {
      if (isBrowser) {
        // eslint-disable-next-line dot-notation
        (_c = (_b = (_a = pageElement.firstChild) === null || _a === void 0 ? void 0 : _a['componentOnReady']) === null || _b === void 0 ? void 0 : _b.call(_a).then(function () {
          timerFunc();
        })) !== null && _c !== void 0 ? _c : timerFunc();
      } else {
        pageElement.enqueueUpdateCallback(cb, ctx);
      }
    } else {
      timerFunc();
    }
  } else {
    timerFunc();
  }
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../_process@0.11.10@process/browser.js */ "./node_modules/_process@0.11.10@process/browser.js"), __webpack_require__(/*! ./../../../_webpack@4.46.0@webpack/buildin/global.js */ "./node_modules/_webpack@4.46.0@webpack/buildin/global.js"), __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js")["requestAnimationFrame"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js")["cancelAnimationFrame"]))

/***/ }),

/***/ "./node_modules/_@tarojs_shared@3.3.2@@tarojs/shared/dist/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_@tarojs_shared@3.3.2@@tarojs/shared/dist/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! exports used: EMPTY_ARR, EMPTY_OBJ, capitalize, controlledComponent, defaultReconciler, ensure, internalComponents, isArray, isBoolean, isFunction, isNumber, isObject, isString, isUndefined, mergeInternalComponents, mergeReconciler, noop, processApis, singleQuote, toCamelCase, toDashed, warn */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/toConsumableArray.js");

var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, '__esModule', {
  value: true
});

function isString(o) {
  return typeof o === 'string';
}

function isUndefined(o) {
  return typeof o === 'undefined';
}

function isNull(o) {
  return o === null;
}

function isObject(o) {
  return o !== null && _typeof(o) === 'object';
}

function isBoolean(o) {
  return o === true || o === false;
}

function isFunction(o) {
  return typeof o === 'function';
}

function isNumber(o) {
  return typeof o === 'number';
}

function isBooleanStringLiteral(o) {
  return o === 'true' || o === 'false';
}

var isArray = Array.isArray; // 字符串简写

(function (Shortcuts) {
  Shortcuts["Container"] = "container";
  Shortcuts["Childnodes"] = "cn";
  Shortcuts["Text"] = "v";
  Shortcuts["NodeType"] = "nt";
  Shortcuts["NodeName"] = "nn"; // Attrtibutes

  Shortcuts["Style"] = "st";
  Shortcuts["Class"] = "cl";
  Shortcuts["Src"] = "src";
})(exports.Shortcuts || (exports.Shortcuts = {}));

var styles = {
  style: "i.".concat("st"
  /* Style */
  ),
  class: "i.".concat("cl"
  /* Class */
  )
};
var events = {
  bindtap: 'eh'
};
var touchEvents = {
  bindTouchStart: '',
  bindTouchMove: '',
  bindTouchEnd: '',
  bindTouchCancel: '',
  bindLongTap: ''
};
var animationEvents = {
  bindAnimationStart: '',
  bindAnimationIteration: '',
  bindAnimationEnd: '',
  bindTransitionEnd: ''
};

function singleQuote(s) {
  return "'".concat(s, "'");
}

var View = Object.assign(Object.assign({
  'hover-class': singleQuote('none'),
  'hover-stop-propagation': 'false',
  'hover-start-time': '50',
  'hover-stay-time': '400',
  animation: ''
}, touchEvents), animationEvents);
var Icon = {
  type: '',
  size: '23',
  color: ''
};
var MapComp = Object.assign({
  longitude: '',
  latitude: '',
  scale: '16',
  markers: '[]',
  covers: '',
  polyline: '[]',
  circles: '[]',
  controls: '[]',
  'include-points': '[]',
  'show-location': '',
  'layer-style': '1',
  bindMarkerTap: '',
  bindControlTap: '',
  bindCalloutTap: '',
  bindUpdated: ''
}, touchEvents);
var Progress = {
  percent: '',
  'stroke-width': '6',
  color: singleQuote('#09BB07'),
  activeColor: singleQuote('#09BB07'),
  backgroundColor: singleQuote('#EBEBEB'),
  active: 'false',
  'active-mode': singleQuote('backwards'),
  'show-info': 'false'
};
var RichText = {
  nodes: '[]'
};
var Text = {
  selectable: 'false',
  space: '',
  decode: 'false'
};
var Button = {
  size: singleQuote('default'),
  type: '',
  plain: 'false',
  disabled: '',
  loading: 'false',
  'form-type': '',
  'open-type': '',
  'hover-class': singleQuote('button-hover'),
  'hover-stop-propagation': 'false',
  'hover-start-time': '20',
  'hover-stay-time': '70',
  name: ''
};
var Checkbox = {
  value: '',
  disabled: '',
  checked: 'false',
  color: singleQuote('#09BB07'),
  name: ''
};
var CheckboxGroup = {
  bindChange: '',
  name: ''
};
var Form = {
  'report-submit': 'false',
  bindSubmit: '',
  bindReset: '',
  name: ''
};
var Input = {
  value: '',
  type: singleQuote(''),
  password: 'false',
  placeholder: '',
  'placeholder-style': '',
  'placeholder-class': singleQuote('input-placeholder'),
  disabled: '',
  maxlength: '140',
  'cursor-spacing': '0',
  focus: 'false',
  'confirm-type': singleQuote('done'),
  'confirm-hold': 'false',
  cursor: 'i.value.length',
  'selection-start': '-1',
  'selection-end': '-1',
  bindInput: '',
  bindFocus: '',
  bindBlur: '',
  bindConfirm: '',
  name: ''
};
var Label = {
  for: '',
  name: ''
};
var Picker = {
  mode: singleQuote('selector'),
  disabled: '',
  range: '',
  'range-key': '',
  value: '',
  start: '',
  end: '',
  fields: singleQuote('day'),
  'custom-item': '',
  name: '',
  bindCancel: '',
  bindChange: '',
  bindColumnChange: ''
};
var PickerView = {
  value: '',
  'indicator-style': '',
  'indicator-class': '',
  'mask-style': '',
  'mask-class': '',
  bindChange: '',
  name: ''
};
var PickerViewColumn = {
  name: ''
};
var Radio = {
  value: '',
  checked: 'false',
  disabled: '',
  color: singleQuote('#09BB07'),
  name: ''
};
var RadioGroup = {
  bindChange: '',
  name: ''
};
var Slider = {
  min: '0',
  max: '100',
  step: '1',
  disabled: '',
  value: '0',
  activeColor: singleQuote('#1aad19'),
  backgroundColor: singleQuote('#e9e9e9'),
  'block-size': '28',
  'block-color': singleQuote('#ffffff'),
  'show-value': 'false',
  bindChange: '',
  bindChanging: '',
  name: ''
};
var Switch = {
  checked: 'false',
  disabled: '',
  type: singleQuote('switch'),
  color: singleQuote('#04BE02'),
  bindChange: '',
  name: ''
};
var Textarea = {
  value: '',
  placeholder: '',
  'placeholder-style': '',
  'placeholder-class': singleQuote('textarea-placeholder'),
  disabled: '',
  maxlength: '140',
  'auto-focus': 'false',
  focus: 'false',
  'auto-height': 'false',
  fixed: 'false',
  'cursor-spacing': '0',
  cursor: '-1',
  'selection-start': '-1',
  'selection-end': '-1',
  bindFocus: '',
  bindBlur: '',
  bindLineChange: '',
  bindInput: '',
  bindConfirm: '',
  name: ''
};
var CoverImage = {
  src: '',
  bindLoad: 'eh',
  bindError: 'eh'
};
var CoverView = Object.assign({
  'scroll-top': 'false'
}, touchEvents);
var MovableArea = {
  'scale-area': 'false'
};
var MovableView = Object.assign(Object.assign({
  direction: 'none',
  inertia: 'false',
  'out-of-bounds': 'false',
  x: '',
  y: '',
  damping: '20',
  friction: '2',
  disabled: '',
  scale: 'false',
  'scale-min': '0.5',
  'scale-max': '10',
  'scale-value': '1',
  animation: 'true',
  bindChange: '',
  bindScale: '',
  bindHTouchMove: '',
  bindVTouchMove: '',
  width: singleQuote('10px'),
  height: singleQuote('10px')
}, touchEvents), animationEvents);
var ScrollView = Object.assign(Object.assign({
  'scroll-x': 'false',
  'scroll-y': 'false',
  'upper-threshold': '50',
  'lower-threshold': '50',
  'scroll-top': '',
  'scroll-left': '',
  'scroll-into-view': '',
  'scroll-with-animation': 'false',
  'enable-back-to-top': 'false',
  bindScrollToUpper: '',
  bindScrollToLower: '',
  bindScroll: ''
}, touchEvents), animationEvents);
var Swiper = Object.assign({
  'indicator-dots': 'false',
  'indicator-color': singleQuote('rgba(0, 0, 0, .3)'),
  'indicator-active-color': singleQuote('#000000'),
  autoplay: 'false',
  current: '0',
  interval: '5000',
  duration: '500',
  circular: 'false',
  vertical: 'false',
  'previous-margin': '\'0px\'',
  'next-margin': '\'0px\'',
  'display-multiple-items': '1',
  bindChange: '',
  bindTransition: '',
  bindAnimationFinish: ''
}, touchEvents);
var SwiperItem = {
  'item-id': ''
};
var Navigator = {
  url: '',
  'open-type': singleQuote('navigate'),
  delta: '1',
  'hover-class': singleQuote('navigator-hover'),
  'hover-stop-propagation': 'false',
  'hover-start-time': '50',
  'hover-stay-time': '600',
  bindSuccess: '',
  bindFail: '',
  bindComplete: ''
};
var Audio = {
  id: '',
  src: '',
  loop: 'false',
  controls: 'false',
  poster: '',
  name: '',
  author: '',
  bindError: '',
  bindPlay: '',
  bindPause: '',
  bindTimeUpdate: '',
  bindEnded: ''
};
var Camera = {
  'device-position': singleQuote('back'),
  flash: singleQuote('auto'),
  bindStop: '',
  bindError: ''
};
var Image = Object.assign({
  src: '',
  mode: singleQuote('scaleToFill'),
  'lazy-load': 'false',
  bindError: '',
  bindLoad: ''
}, touchEvents);
var LivePlayer = {
  src: '',
  autoplay: 'false',
  muted: 'false',
  orientation: singleQuote('vertical'),
  'object-fit': singleQuote('contain'),
  'background-mute': 'false',
  'min-cache': '1',
  'max-cache': '3',
  animation: '',
  bindStateChange: '',
  bindFullScreenChange: '',
  bindNetStatus: ''
};
var Video = {
  src: '',
  duration: '',
  controls: 'true',
  'danmu-list': '',
  'danmu-btn': '',
  'enable-danmu': '',
  autoplay: 'false',
  loop: 'false',
  muted: 'false',
  'initial-time': '0',
  'page-gesture': 'false',
  direction: '',
  'show-progress': 'true',
  'show-fullscreen-btn': 'true',
  'show-play-btn': 'true',
  'show-center-play-btn': 'true',
  'enable-progress-gesture': 'true',
  'object-fit': singleQuote('contain'),
  poster: '',
  'show-mute-btn': 'false',
  animation: '',
  bindPlay: '',
  bindPause: '',
  bindEnded: '',
  bindTimeUpdate: '',
  bindFullScreenChange: '',
  bindWaiting: '',
  bindError: ''
};
var Canvas = Object.assign({
  'canvas-id': '',
  'disable-scroll': 'false',
  bindError: ''
}, touchEvents);
var Ad = {
  'unit-id': '',
  'ad-intervals': '',
  bindLoad: '',
  bindError: '',
  bindClose: ''
};
var WebView = {
  src: '',
  bindMessage: '',
  bindLoad: '',
  bindError: ''
};
var Block = {}; // For Vue，因为 slot 标签被 vue 占用了

var SlotView = {
  name: ''
}; // For React
// Slot 和 SlotView 最终都会编译成 <view slot={{ i.name }} />
// 因为 <slot name="{{ i.name }}" /> 适用性没有前者高（无法添加类和样式）
// 不给 View 直接加 slot 属性的原因是性能损耗

var Slot = {
  name: ''
};
var internalComponents = {
  View: View,
  Icon: Icon,
  Progress: Progress,
  RichText: RichText,
  Text: Text,
  Button: Button,
  Checkbox: Checkbox,
  CheckboxGroup: CheckboxGroup,
  Form: Form,
  Input: Input,
  Label: Label,
  Picker: Picker,
  PickerView: PickerView,
  PickerViewColumn: PickerViewColumn,
  Radio: Radio,
  RadioGroup: RadioGroup,
  Slider: Slider,
  Switch: Switch,
  CoverImage: CoverImage,
  Textarea: Textarea,
  CoverView: CoverView,
  MovableArea: MovableArea,
  MovableView: MovableView,
  ScrollView: ScrollView,
  Swiper: Swiper,
  SwiperItem: SwiperItem,
  Navigator: Navigator,
  Audio: Audio,
  Camera: Camera,
  Image: Image,
  LivePlayer: LivePlayer,
  Video: Video,
  Canvas: Canvas,
  Ad: Ad,
  WebView: WebView,
  Block: Block,
  Map: MapComp,
  Slot: Slot,
  SlotView: SlotView
};
var controlledComponent = new Set(['input', 'checkbox', 'picker', 'picker-view', 'radio', 'slider', 'switch', 'textarea']);
var focusComponents = new Set(['input', 'textarea']);
var voidElements = new Set(['progress', 'icon', 'rich-text', 'input', 'textarea', 'slider', 'switch', 'audio', 'ad', 'official-account', 'open-data', 'navigation-bar']);
var nestElements = new Map([['view', -1], ['catch-view', -1], ['cover-view', -1], ['static-view', -1], ['pure-view', -1], ['block', -1], ['text', -1], ['static-text', 6], ['slot', 8], ['slot-view', 8], ['label', 6], ['form', 4], ['scroll-view', 4], ['swiper', 4], ['swiper-item', 4]]);
var EMPTY_OBJ = {};
var EMPTY_ARR = [];

var noop = function noop() {};

var defaultReconciler = Object.create(null);
/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param v Value.
 * @returns Boxed value.
 */

var box = function box(v) {
  return {
    v: v
  };
};
/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param b Boxed value.
 * @returns Value.
 */


var unbox = function unbox(b) {
  return b.v;
};

function toDashed(s) {
  return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function toCamelCase(s) {
  var camel = '';
  var nextCap = false;

  for (var i = 0; i < s.length; i++) {
    if (s[i] !== '-') {
      camel += nextCap ? s[i].toUpperCase() : s[i];
      nextCap = false;
    } else {
      nextCap = true;
    }
  }

  return camel;
}

var toKebabCase = function toKebabCase(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};

var reportIssue = '如有疑问，请提交 issue 至：https://github.com/nervjs/taro/issues';
/**
 * ensure takes a condition and throw a error if the condition fails,
 * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
 * @param condition condition.
 * @param msg error message.
 */

function ensure(condition, msg) {
  if (!condition) {
    throw new Error(msg + '\n' + reportIssue);
  }
}

function warn(condition, msg) {
  if (true) {
    if (condition) {
      console.warn("[taro warn] ".concat(msg));
    }
  }
}

function queryToJson(str) {
  var dec = decodeURIComponent;
  var qp = str.split('&');
  var ret = {};
  var name;
  var val;

  for (var i = 0, l = qp.length, item; i < l; ++i) {
    item = qp[i];

    if (item.length) {
      var s = item.indexOf('=');

      if (s < 0) {
        name = dec(item);
        val = '';
      } else {
        name = dec(item.slice(0, s));
        val = dec(item.slice(s + 1));
      }

      if (typeof ret[name] === 'string') {
        // inline'd type check
        ret[name] = [ret[name]];
      }

      if (Array.isArray(ret[name])) {
        ret[name].push(val);
      } else {
        ret[name] = val;
      }
    }
  }

  return ret; // Object
}

var _uniqueId = 1;

var _loadTime = new Date().getTime().toString();

function getUniqueKey() {
  return _loadTime + _uniqueId++;
}

var cacheData = {};

function cacheDataSet(key, val) {
  cacheData[key] = val;
}

function cacheDataGet(key, delelteAfterGet) {
  var temp = cacheData[key];
  delelteAfterGet && delete cacheData[key];
  return temp;
}

function cacheDataHas(key) {
  return key in cacheData;
}

function mergeInternalComponents(components) {
  Object.keys(components).forEach(function (name) {
    if (name in internalComponents) {
      Object.assign(internalComponents[name], components[name]);
    } else {
      internalComponents[name] = components[name];
    }
  });
}

function mergeReconciler(hostConfig) {
  Object.keys(hostConfig).forEach(function (key) {
    var value = hostConfig[key];
    var raw = defaultReconciler[key];

    if (!raw) {
      defaultReconciler[key] = value;
    } else {
      if (isArray(raw)) {
        defaultReconciler[key] = raw.push(value);
      } else {
        defaultReconciler[key] = [raw, value];
      }
    }
  });
}

function unsupport(api) {
  return function () {
    console.warn("\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 ".concat(api));
  };
}

function setUniqueKeyToRoute(key, obj) {
  var routerParamsPrivateKey = '__key_';
  var useDataCacheApis = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab'];

  if (useDataCacheApis.indexOf(key) > -1) {
    var url = obj.url = obj.url || '';
    var hasMark = url.indexOf('?') > -1;
    var cacheKey = getUniqueKey();
    obj.url += (hasMark ? '&' : '?') + "".concat(routerParamsPrivateKey, "=").concat(cacheKey);
  }
}

function indent(str, size) {
  return str.split('\n').map(function (line, index) {
    var indent = index === 0 ? '' : Array(size).fill(' ').join('');
    return indent + line;
  }).join('\n');
}

var needPromiseApis = new Set(['addPhoneContact', 'authorize', 'canvasGetImageData', 'canvasPutImageData', 'canvasToTempFilePath', 'checkSession', 'chooseAddress', 'chooseImage', 'chooseInvoiceTitle', 'chooseLocation', 'chooseVideo', 'clearStorage', 'closeBLEConnection', 'closeBluetoothAdapter', 'closeSocket', 'compressImage', 'connectSocket', 'createBLEConnection', 'downloadFile', 'getAvailableAudioSources', 'getBLEDeviceCharacteristics', 'getBLEDeviceServices', 'getBatteryInfo', 'getBeacons', 'getBluetoothAdapterState', 'getBluetoothDevices', 'getClipboardData', 'getConnectedBluetoothDevices', 'getConnectedWifi', 'getExtConfig', 'getFileInfo', 'getImageInfo', 'getLocation', 'getNetworkType', 'getSavedFileInfo', 'getSavedFileList', 'getScreenBrightness', 'getSetting', 'getStorage', 'getStorageInfo', 'getSystemInfo', 'getUserInfo', 'getWifiList', 'hideHomeButton', 'hideShareMenu', 'hideTabBar', 'hideTabBarRedDot', 'loadFontFace', 'login', 'makePhoneCall', 'navigateBack', 'navigateBackMiniProgram', 'navigateTo', 'navigateToBookshelf', 'navigateToMiniProgram', 'notifyBLECharacteristicValueChange', 'hideKeyboard', 'hideLoading', 'hideNavigationBarLoading', 'hideToast', 'openBluetoothAdapter', 'openDocument', 'openLocation', 'openSetting', 'pageScrollTo', 'previewImage', 'queryBookshelf', 'reLaunch', 'readBLECharacteristicValue', 'redirectTo', 'removeSavedFile', 'removeStorage', 'removeTabBarBadge', 'requestSubscribeMessage', 'saveFile', 'saveImageToPhotosAlbum', 'saveVideoToPhotosAlbum', 'scanCode', 'sendSocketMessage', 'setBackgroundColor', 'setBackgroundTextStyle', 'setClipboardData', 'setEnableDebug', 'setInnerAudioOption', 'setKeepScreenOn', 'setNavigationBarColor', 'setNavigationBarTitle', 'setScreenBrightness', 'setStorage', 'setTabBarBadge', 'setTabBarItem', 'setTabBarStyle', 'showActionSheet', 'showFavoriteGuide', 'showLoading', 'showModal', 'showShareMenu', 'showTabBar', 'showTabBarRedDot', 'showToast', 'startBeaconDiscovery', 'startBluetoothDevicesDiscovery', 'startDeviceMotionListening', 'startPullDownRefresh', 'stopBeaconDiscovery', 'stopBluetoothDevicesDiscovery', 'stopCompass', 'startCompass', 'startAccelerometer', 'stopAccelerometer', 'showNavigationBarLoading', 'stopDeviceMotionListening', 'stopPullDownRefresh', 'switchTab', 'uploadFile', 'vibrateLong', 'vibrateShort', 'writeBLECharacteristicValue']);

function getCanIUseWebp(taro) {
  return function () {
    if (typeof taro.getSystemInfoSync !== 'function') {
      console.error('不支持 API canIUseWebp');
      return false;
    }

    var _taro$getSystemInfoSy = taro.getSystemInfoSync(),
        platform = _taro$getSystemInfoSy.platform;

    var platformLower = platform.toLowerCase();

    if (platformLower === 'android' || platformLower === 'devtools') {
      return true;
    }

    return false;
  };
}

function getNormalRequest(global) {
  return function request(options) {
    options = options || {};

    if (typeof options === 'string') {
      options = {
        url: options
      };
    }

    var originSuccess = options.success;
    var originFail = options.fail;
    var originComplete = options.complete;
    var requestTask;
    var p = new Promise(function (resolve, reject) {
      options.success = function (res) {
        originSuccess && originSuccess(res);
        resolve(res);
      };

      options.fail = function (res) {
        originFail && originFail(res);
        reject(res);
      };

      options.complete = function (res) {
        originComplete && originComplete(res);
      };

      requestTask = global.request(options);
    });

    p.abort = function (cb) {
      cb && cb();

      if (requestTask) {
        requestTask.abort();
      }

      return p;
    };

    return p;
  };
}

function processApis(taro, global) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var patchNeedPromiseApis = config.needPromiseApis || [];

  var _needPromiseApis = new Set([].concat(_toConsumableArray(patchNeedPromiseApis), _toConsumableArray(needPromiseApis)));

  var preserved = ['getEnv', 'interceptors', 'Current', 'getCurrentInstance', 'options', 'nextTick', 'eventCenter', 'Events', 'preload', 'webpackJsonp'];
  var apis = new Set(Object.keys(global).filter(function (api) {
    return preserved.indexOf(api) === -1;
  }));

  if (config.modifyApis) {
    config.modifyApis(apis);
  }

  apis.forEach(function (key) {
    if (_needPromiseApis.has(key)) {
      var originKey = key;

      taro[originKey] = function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var key = originKey; // 第一个参数 options 为字符串，单独处理

        if (typeof options === 'string') {
          if (args.length) {
            return global[key].apply(global, [options].concat(args));
          }

          return global[key](options);
        } // 改变 key 或 option 字段，如需要把支付宝标准的字段对齐微信标准的字段


        if (config.transformMeta) {
          var transformResult = config.transformMeta(key, options);
          key = transformResult.key;
          options = transformResult.options; // 新 key 可能不存在

          if (!global.hasOwnProperty(key)) {
            return unsupport(key)();
          }
        }

        var task = null;
        var obj = Object.assign({}, options); // 为页面跳转相关的 API 设置一个随机数作为路由参数。为了给 runtime 区分页面。

        setUniqueKeyToRoute(key, options); // Promise 化

        var p = new Promise(function (resolve, reject) {
          obj.success = function (res) {
            var _a, _b;

            (_a = config.modifyAsyncResult) === null || _a === void 0 ? void 0 : _a.call(config, key, res);
            (_b = options.success) === null || _b === void 0 ? void 0 : _b.call(options, res);

            if (key === 'connectSocket') {
              resolve(Promise.resolve().then(function () {
                return task ? Object.assign(task, res) : res;
              }));
            } else {
              resolve(res);
            }
          };

          obj.fail = function (res) {
            var _a;

            (_a = options.fail) === null || _a === void 0 ? void 0 : _a.call(options, res);
            reject(res);
          };

          obj.complete = function (res) {
            var _a;

            (_a = options.complete) === null || _a === void 0 ? void 0 : _a.call(options, res);
          };

          if (args.length) {
            task = global[key].apply(global, [obj].concat(args));
          } else {
            task = global[key](obj);
          }
        }); // 给 promise 对象挂载属性

        if (key === 'uploadFile' || key === 'downloadFile') {
          p.progress = function (cb) {
            task === null || task === void 0 ? void 0 : task.onProgressUpdate(cb);
            return p;
          };

          p.abort = function (cb) {
            cb === null || cb === void 0 ? void 0 : cb();
            task === null || task === void 0 ? void 0 : task.abort();
            return p;
          };
        }

        return p;
      };
    } else {
      var platformKey = key; // 改变 key 或 option 字段，如需要把支付宝标准的字段对齐微信标准的字段

      if (config.transformMeta) {
        platformKey = config.transformMeta(key, {}).key;
      } // API 不存在


      if (!global.hasOwnProperty(platformKey)) {
        taro[key] = unsupport(key);
        return;
      }

      if (typeof global[key] === 'function') {
        taro[key] = function () {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          if (config.handleSyncApis) {
            return config.handleSyncApis(key, global, args);
          } else {
            return global[platformKey].apply(global, args);
          }
        };
      } else {
        taro[key] = global[platformKey];
      }
    }
  });
  !config.isOnlyPromisify && equipCommonApis(taro, global, config);
}
/**
 * 挂载常用 API
 * @param taro Taro 对象
 * @param global 小程序全局对象，如微信的 wx，支付宝的 my
 */


function equipCommonApis(taro, global) {
  var apis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  taro.canIUseWebp = getCanIUseWebp(taro);
  taro.getCurrentPages = getCurrentPages || unsupport('getCurrentPages');
  taro.getApp = getApp || unsupport('getApp');
  taro.env = global.env || {};

  try {
    taro.requirePlugin = requirePlugin || unsupport('requirePlugin');
  } catch (error) {
    taro.requirePlugin = unsupport('requirePlugin');
  } // request & interceptors


  var request = apis.request ? apis.request : getNormalRequest(global);

  function taroInterceptor(chain) {
    return request(chain.requestParams);
  }

  var link = new taro.Link(taroInterceptor);
  taro.request = link.request.bind(link);
  taro.addInterceptor = link.addInterceptor.bind(link);
  taro.cleanInterceptors = link.cleanInterceptors.bind(link);
  taro.miniGlobal = taro.options.miniGlobal = global;
}

exports.EMPTY_ARR = EMPTY_ARR;
exports.EMPTY_OBJ = EMPTY_OBJ;
exports.animationEvents = animationEvents;
exports.box = box;
exports.cacheDataGet = cacheDataGet;
exports.cacheDataHas = cacheDataHas;
exports.cacheDataSet = cacheDataSet;
exports.capitalize = capitalize;
exports.controlledComponent = controlledComponent;
exports.defaultReconciler = defaultReconciler;
exports.ensure = ensure;
exports.events = events;
exports.focusComponents = focusComponents;
exports.getUniqueKey = getUniqueKey;
exports.hasOwn = hasOwn;
exports.indent = indent;
exports.internalComponents = internalComponents;
exports.isArray = isArray;
exports.isBoolean = isBoolean;
exports.isBooleanStringLiteral = isBooleanStringLiteral;
exports.isFunction = isFunction;
exports.isNull = isNull;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isString = isString;
exports.isUndefined = isUndefined;
exports.mergeInternalComponents = mergeInternalComponents;
exports.mergeReconciler = mergeReconciler;
exports.nestElements = nestElements;
exports.noop = noop;
exports.processApis = processApis;
exports.queryToJson = queryToJson;
exports.setUniqueKeyToRoute = setUniqueKeyToRoute;
exports.singleQuote = singleQuote;
exports.styles = styles;
exports.toCamelCase = toCamelCase;
exports.toDashed = toDashed;
exports.toKebabCase = toKebabCase;
exports.touchEvents = touchEvents;
exports.unbox = unbox;
exports.unsupport = unsupport;
exports.voidElements = voidElements;
exports.warn = warn;

/***/ }),

/***/ "./node_modules/_@tarojs_taro@3.3.2@@tarojs/taro/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/_@tarojs_taro@3.3.2@@tarojs/taro/index.js ***!
  \****************************************************************/
/*! no static exports found */
/*! exports used: initPxTransform */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js"),
    container = _require.container,
    SERVICE_IDENTIFIER = _require.SERVICE_IDENTIFIER;

var taro = __webpack_require__(/*! @tarojs/api */ "./node_modules/_@tarojs_api@3.3.2@@tarojs/api/dist/index.esm.js").default;

var hooks = container.get(SERVICE_IDENTIFIER.Hooks);

if (typeof hooks.initNativeApi === 'function') {
  hooks.initNativeApi(taro);
}

module.exports = taro;
module.exports.default = module.exports;

/***/ })

}]);

},{}],5:[function(require,module,exports){

            var _appConfig = null
            
            var App = (appData)=> {
                return _globalApp("/Users/lv/Desktop/tarodemo/taro/dist/vendors.js",_appConfig)
            }
            var Page = (config) => {
                const path = "/Users/lv/Desktop/tarodemo/taro/dist/vendors.js".replace('.js', '').split('/').slice(-3).join('/')
                return _globalPage(path,config,'<div class="app" v-bind:data="{root: root}">123123</div>')
            }
            var Component = (config) => {
                return _globalComponent("/Users/lv/Desktop/tarodemo/taro/dist/vendors.js",config,template)
            }
        (wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["vendors"],{

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/arrayLikeToArray.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/arrayLikeToArray.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/arrayWithoutHoles.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/classCallCheck.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/classCallCheck.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/construct.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/construct.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _construct; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if (Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/createClass.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/createClass.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/createSuper.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/createSuper.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createSuper; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
  return function _createSuperInternal() {
    var Super = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, result);
  };
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/defineProperty.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/defineProperty.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/get.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/get.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _get; });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = Object(_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/inherits.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/inherits.js ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/isNativeFunction.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNativeFunction; });
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNativeReflectConstruct; });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/iterableToArray.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/iterableToArray.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/nonIterableRest.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return Object(_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/set.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/set.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _set; });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/superPropBase.js");
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/defineProperty.js");



function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = Object(_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, property);
      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/slicedToArray.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/slicedToArray.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr, i) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr, i) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/superPropBase.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/superPropBase.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _superPropBase; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object);
    if (object === null) break;
  }

  return object;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/toArray.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/toArray.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/nonIterableRest.js");




function _toArray(arr) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/toConsumableArray.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/typeof.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/typeof.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _wrapNativeSuper; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !Object(_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return Object(_construct_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Class, arguments, Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/iterableToArray.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/iterableToArray.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/nonIterableSpread.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/nonIterableSpread.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/toConsumableArray.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/toConsumableArray.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/typeof.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/typeof.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/regenerator/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.15.3@@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime-module.js");

/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/annotation/decorator_utils.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/annotation/decorator_utils.js ***!
  \**********************************************************************************/
/*! exports provided: decorate, tagParameter, tagProperty */
/*! exports used: tagParameter, tagProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export decorate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tagParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tagProperty; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");



function tagParameter(annotationTarget, propertyName, parameterIndex, metadata) {
  var metadataKey = _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["TAGGED"];

  _tagParameterOrProperty(metadataKey, annotationTarget, propertyName, metadata, parameterIndex);
}

function tagProperty(annotationTarget, propertyName, metadata) {
  var metadataKey = _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["TAGGED_PROP"];

  _tagParameterOrProperty(metadataKey, annotationTarget.constructor, propertyName, metadata);
}

function _tagParameterOrProperty(metadataKey, annotationTarget, propertyName, metadata, parameterIndex) {
  var paramsOrPropertiesMetadata = {};
  var isParameterDecorator = typeof parameterIndex === "number";
  var key = parameterIndex !== undefined && isParameterDecorator ? parameterIndex.toString() : propertyName;

  if (isParameterDecorator && propertyName !== undefined) {
    throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* INVALID_DECORATOR_OPERATION */ "m"]);
  }

  if (Reflect.hasOwnMetadata(metadataKey, annotationTarget)) {
    paramsOrPropertiesMetadata = Reflect.getMetadata(metadataKey, annotationTarget);
  }

  var paramOrPropertyMetadata = paramsOrPropertiesMetadata[key];

  if (!Array.isArray(paramOrPropertyMetadata)) {
    paramOrPropertyMetadata = [];
  } else {
    for (var _i = 0, paramOrPropertyMetadata_1 = paramOrPropertyMetadata; _i < paramOrPropertyMetadata_1.length; _i++) {
      var m = paramOrPropertyMetadata_1[_i];

      if (m.key === metadata.key) {
        throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* DUPLICATED_METADATA */ "k"] + " " + m.key.toString());
      }
    }
  }

  paramOrPropertyMetadata.push(metadata);
  paramsOrPropertiesMetadata[key] = paramOrPropertyMetadata;
  Reflect.defineMetadata(metadataKey, paramsOrPropertiesMetadata, annotationTarget);
}

function _decorate(decorators, target) {
  Reflect.decorate(decorators, target);
}

function _param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function decorate(decorator, target, parameterIndex) {
  if (typeof parameterIndex === "number") {
    _decorate([_param(parameterIndex, decorator)], target);
  } else if (typeof parameterIndex === "string") {
    Reflect.decorate([decorator], target, parameterIndex);
  } else {
    _decorate([decorator], target);
  }
}



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/annotation/inject.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/annotation/inject.js ***!
  \*************************************************************************/
/*! exports provided: LazyServiceIdentifer, inject */
/*! exports used: LazyServiceIdentifer, inject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyServiceIdentifer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return inject; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/_inversify@5.1.1@inversify/es/annotation/decorator_utils.js");





var LazyServiceIdentifer = function () {
  function LazyServiceIdentifer(cb) {
    this._cb = cb;
  }

  LazyServiceIdentifer.prototype.unwrap = function () {
    return this._cb();
  };

  return LazyServiceIdentifer;
}();



function inject(serviceIdentifier) {
  return function (target, targetKey, index) {
    if (serviceIdentifier === undefined) {
      throw new Error(Object(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* UNDEFINED_INJECT_ANNOTATION */ "z"])(target.name));
    }

    var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_2__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["INJECT_TAG"], serviceIdentifier);

    if (typeof index === "number") {
      Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_3__[/* tagParameter */ "a"])(target, targetKey, index, metadata);
    } else {
      Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_3__[/* tagProperty */ "b"])(target, targetKey, metadata);
    }
  };
}



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/annotation/injectable.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/annotation/injectable.js ***!
  \*****************************************************************************/
/*! exports provided: injectable */
/*! exports used: injectable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return injectable; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");



function injectable() {
  return function (target) {
    if (Reflect.hasOwnMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["PARAM_TYPES"], target)) {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* DUPLICATED_INJECTABLE_DECORATOR */ "j"]);
    }

    var types = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["DESIGN_PARAM_TYPES"], target) || [];
    Reflect.defineMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["PARAM_TYPES"], types, target);
    return target;
  };
}



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/annotation/multi_inject.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/annotation/multi_inject.js ***!
  \*******************************************************************************/
/*! exports provided: multiInject */
/*! exports used: multiInject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return multiInject; });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/_inversify@5.1.1@inversify/es/annotation/decorator_utils.js");




function multiInject(serviceIdentifier) {
  return function (target, targetKey, index) {
    var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["MULTI_INJECT_TAG"], serviceIdentifier);

    if (typeof index === "number") {
      Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagParameter */ "a"])(target, targetKey, index, metadata);
    } else {
      Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagProperty */ "b"])(target, targetKey, metadata);
    }
  };
}



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/annotation/named.js":
/*!************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/annotation/named.js ***!
  \************************************************************************/
/*! exports provided: named */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export named */
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/_inversify@5.1.1@inversify/es/annotation/decorator_utils.js");




function named(name) {
  return function (target, targetKey, index) {
    var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"], name);

    if (typeof index === "number") {
      Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagParameter */ "a"])(target, targetKey, index, metadata);
    } else {
      Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagProperty */ "b"])(target, targetKey, metadata);
    }
  };
}



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/annotation/optional.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/annotation/optional.js ***!
  \***************************************************************************/
/*! exports provided: optional */
/*! exports used: optional */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return optional; });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/_inversify@5.1.1@inversify/es/annotation/decorator_utils.js");




function optional() {
  return function (target, targetKey, index) {
    var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["OPTIONAL_TAG"], true);

    if (typeof index === "number") {
      Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagParameter */ "a"])(target, targetKey, index, metadata);
    } else {
      Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagProperty */ "b"])(target, targetKey, metadata);
    }
  };
}



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/annotation/post_construct.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/annotation/post_construct.js ***!
  \*********************************************************************************/
/*! exports provided: postConstruct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export postConstruct */
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js");




function postConstruct() {
  return function (target, propertyKey, descriptor) {
    var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_2__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["POST_CONSTRUCT"], propertyKey);

    if (Reflect.hasOwnMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["POST_CONSTRUCT"], target.constructor)) {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* MULTIPLE_POST_CONSTRUCT_METHODS */ "t"]);
    }

    Reflect.defineMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["POST_CONSTRUCT"], metadata, target.constructor);
  };
}



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/annotation/tagged.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/annotation/tagged.js ***!
  \*************************************************************************/
/*! exports provided: tagged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tagged */
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/_inversify@5.1.1@inversify/es/annotation/decorator_utils.js");



function tagged(metadataKey, metadataValue) {
  return function (target, targetKey, index) {
    var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_0__[/* Metadata */ "a"](metadataKey, metadataValue);

    if (typeof index === "number") {
      Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_1__[/* tagParameter */ "a"])(target, targetKey, index, metadata);
    } else {
      Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_1__[/* tagProperty */ "b"])(target, targetKey, metadata);
    }
  };
}



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/annotation/target_name.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/annotation/target_name.js ***!
  \******************************************************************************/
/*! exports provided: targetName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export targetName */
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/_inversify@5.1.1@inversify/es/annotation/decorator_utils.js");




function targetName(name) {
  return function (target, targetKey, index) {
    var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAME_TAG"], name);
    Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagParameter */ "a"])(target, targetKey, index, metadata);
  };
}



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/annotation/unmanaged.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/annotation/unmanaged.js ***!
  \****************************************************************************/
/*! exports provided: unmanaged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export unmanaged */
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/_inversify@5.1.1@inversify/es/annotation/decorator_utils.js");




function unmanaged() {
  return function (target, targetKey, index) {
    var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["UNMANAGED_TAG"], true);
    Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagParameter */ "a"])(target, targetKey, index, metadata);
  };
}



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/bindings/binding.js":
/*!************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/bindings/binding.js ***!
  \************************************************************************/
/*! exports provided: Binding */
/*! exports used: Binding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Binding; });
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/_inversify@5.1.1@inversify/es/constants/literal_types.js");
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/id */ "./node_modules/_inversify@5.1.1@inversify/es/utils/id.js");



var Binding = function () {
  function Binding(serviceIdentifier, scope) {
    this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_1__[/* id */ "a"])();
    this.activated = false;
    this.serviceIdentifier = serviceIdentifier;
    this.scope = scope;
    this.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__[/* BindingTypeEnum */ "b"].Invalid;

    this.constraint = function (request) {
      return true;
    };

    this.implementationType = null;
    this.cache = null;
    this.factory = null;
    this.provider = null;
    this.onActivation = null;
    this.dynamicValue = null;
  }

  Binding.prototype.clone = function () {
    var clone = new Binding(this.serviceIdentifier, this.scope);
    clone.activated = clone.scope === _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__[/* BindingScopeEnum */ "a"].Singleton ? this.activated : false;
    clone.implementationType = this.implementationType;
    clone.dynamicValue = this.dynamicValue;
    clone.scope = this.scope;
    clone.type = this.type;
    clone.factory = this.factory;
    clone.provider = this.provider;
    clone.constraint = this.constraint;
    clone.onActivation = this.onActivation;
    clone.cache = this.cache;
    return clone;
  };

  return Binding;
}();



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/bindings/binding_count.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/bindings/binding_count.js ***!
  \******************************************************************************/
/*! exports provided: BindingCount */
/*! exports used: BindingCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingCount; });
var BindingCount = {
  MultipleBindingsAvailable: 2,
  NoBindingsAvailable: 0,
  OnlyOneBindingAvailable: 1
};


/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js ***!
  \****************************************************************************/
/*! exports provided: DUPLICATED_INJECTABLE_DECORATOR, DUPLICATED_METADATA, NULL_ARGUMENT, KEY_NOT_FOUND, AMBIGUOUS_MATCH, CANNOT_UNBIND, NOT_REGISTERED, MISSING_INJECTABLE_ANNOTATION, MISSING_INJECT_ANNOTATION, UNDEFINED_INJECT_ANNOTATION, CIRCULAR_DEPENDENCY, NOT_IMPLEMENTED, INVALID_BINDING_TYPE, NO_MORE_SNAPSHOTS_AVAILABLE, INVALID_MIDDLEWARE_RETURN, INVALID_FUNCTION_BINDING, INVALID_TO_SELF_VALUE, INVALID_DECORATOR_OPERATION, ARGUMENTS_LENGTH_MISMATCH, CONTAINER_OPTIONS_MUST_BE_AN_OBJECT, CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE, CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE, CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK, MULTIPLE_POST_CONSTRUCT_METHODS, POST_CONSTRUCT_ERROR, CIRCULAR_DEPENDENCY_IN_FACTORY, STACK_OVERFLOW */
/*! exports used: AMBIGUOUS_MATCH, ARGUMENTS_LENGTH_MISMATCH, CANNOT_UNBIND, CIRCULAR_DEPENDENCY, CIRCULAR_DEPENDENCY_IN_FACTORY, CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE, CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE, CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK, CONTAINER_OPTIONS_MUST_BE_AN_OBJECT, DUPLICATED_INJECTABLE_DECORATOR, DUPLICATED_METADATA, INVALID_BINDING_TYPE, INVALID_DECORATOR_OPERATION, INVALID_FUNCTION_BINDING, INVALID_MIDDLEWARE_RETURN, INVALID_TO_SELF_VALUE, KEY_NOT_FOUND, MISSING_INJECTABLE_ANNOTATION, MISSING_INJECT_ANNOTATION, MULTIPLE_POST_CONSTRUCT_METHODS, NOT_REGISTERED, NO_MORE_SNAPSHOTS_AVAILABLE, NULL_ARGUMENT, POST_CONSTRUCT_ERROR, STACK_OVERFLOW, UNDEFINED_INJECT_ANNOTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return DUPLICATED_INJECTABLE_DECORATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return DUPLICATED_METADATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return NULL_ARGUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return KEY_NOT_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AMBIGUOUS_MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CANNOT_UNBIND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return NOT_REGISTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return MISSING_INJECTABLE_ANNOTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return MISSING_INJECT_ANNOTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return UNDEFINED_INJECT_ANNOTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CIRCULAR_DEPENDENCY; });
/* unused harmony export NOT_IMPLEMENTED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return INVALID_BINDING_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return NO_MORE_SNAPSHOTS_AVAILABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return INVALID_MIDDLEWARE_RETURN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return INVALID_FUNCTION_BINDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return INVALID_TO_SELF_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return INVALID_DECORATOR_OPERATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ARGUMENTS_LENGTH_MISMATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CONTAINER_OPTIONS_MUST_BE_AN_OBJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return MULTIPLE_POST_CONSTRUCT_METHODS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return POST_CONSTRUCT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CIRCULAR_DEPENDENCY_IN_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return STACK_OVERFLOW; });
var DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.";
var DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:";
var NULL_ARGUMENT = "NULL argument";
var KEY_NOT_FOUND = "Key Not Found";
var AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:";
var CANNOT_UNBIND = "Could not unbind serviceIdentifier:";
var NOT_REGISTERED = "No matching bindings found for serviceIdentifier:";
var MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:";
var MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:";
var UNDEFINED_INJECT_ANNOTATION = function UNDEFINED_INJECT_ANNOTATION(name) {
  return "@inject called with undefined this could mean that the class " + name + " has " + "a circular dependency problem. You can use a LazyServiceIdentifer to  " + "overcome this limitation.";
};
var CIRCULAR_DEPENDENCY = "Circular dependency found:";
var NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet.";
var INVALID_BINDING_TYPE = "Invalid binding type:";
var NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.";
var INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!";
var INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!";
var INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is " + "used as service identifier";
var INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators " + "must be applied to the parameters of a class constructor or a class property.";
var ARGUMENTS_LENGTH_MISMATCH = function ARGUMENTS_LENGTH_MISMATCH() {
  var values = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    values[_i] = arguments[_i];
  }

  return "The number of constructor arguments in the derived class " + (values[0] + " must be >= than the number of constructor arguments of its base class.");
};
var CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options " + "must be an object.";
var CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = "Invalid Container option. Default scope must " + "be a string ('singleton' or 'transient').";
var CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must " + "be a boolean";
var CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must " + "be a boolean";
var MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class";
var POST_CONSTRUCT_ERROR = function POST_CONSTRUCT_ERROR() {
  var values = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    values[_i] = arguments[_i];
  }

  return "@postConstruct error in class " + values[0] + ": " + values[1];
};
var CIRCULAR_DEPENDENCY_IN_FACTORY = function CIRCULAR_DEPENDENCY_IN_FACTORY() {
  var values = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    values[_i] = arguments[_i];
  }

  return "It looks like there is a circular dependency " + ("in one of the '" + values[0] + "' bindings. Please investigate bindings with") + ("service identifier '" + values[1] + "'.");
};
var STACK_OVERFLOW = "Maximum call stack size exceeded";

/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/constants/literal_types.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/constants/literal_types.js ***!
  \*******************************************************************************/
/*! exports provided: BindingScopeEnum, BindingTypeEnum, TargetTypeEnum */
/*! exports used: BindingScopeEnum, BindingTypeEnum, TargetTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingScopeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BindingTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TargetTypeEnum; });
var BindingScopeEnum = {
  Request: "Request",
  Singleton: "Singleton",
  Transient: "Transient"
};
var BindingTypeEnum = {
  ConstantValue: "ConstantValue",
  Constructor: "Constructor",
  DynamicValue: "DynamicValue",
  Factory: "Factory",
  Function: "Function",
  Instance: "Instance",
  Invalid: "Invalid",
  Provider: "Provider"
};
var TargetTypeEnum = {
  ClassProperty: "ClassProperty",
  ConstructorArgument: "ConstructorArgument",
  Variable: "Variable"
};


/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js ***!
  \*******************************************************************************/
/*! exports provided: NAMED_TAG, NAME_TAG, UNMANAGED_TAG, OPTIONAL_TAG, INJECT_TAG, MULTI_INJECT_TAG, TAGGED, TAGGED_PROP, PARAM_TYPES, DESIGN_PARAM_TYPES, POST_CONSTRUCT, NON_CUSTOM_TAG_KEYS */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAMED_TAG", function() { return NAMED_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME_TAG", function() { return NAME_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMANAGED_TAG", function() { return UNMANAGED_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTIONAL_TAG", function() { return OPTIONAL_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJECT_TAG", function() { return INJECT_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MULTI_INJECT_TAG", function() { return MULTI_INJECT_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGGED", function() { return TAGGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGGED_PROP", function() { return TAGGED_PROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARAM_TYPES", function() { return PARAM_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESIGN_PARAM_TYPES", function() { return DESIGN_PARAM_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_CONSTRUCT", function() { return POST_CONSTRUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NON_CUSTOM_TAG_KEYS", function() { return NON_CUSTOM_TAG_KEYS; });
var NAMED_TAG = "named";
var NAME_TAG = "name";
var UNMANAGED_TAG = "unmanaged";
var OPTIONAL_TAG = "optional";
var INJECT_TAG = "inject";
var MULTI_INJECT_TAG = "multi_inject";
var TAGGED = "inversify:tagged";
var TAGGED_PROP = "inversify:tagged_props";
var PARAM_TYPES = "inversify:paramtypes";
var DESIGN_PARAM_TYPES = "design:paramtypes";
var POST_CONSTRUCT = "post_construct";

function getNonCustomTagKeys() {
  return [INJECT_TAG, MULTI_INJECT_TAG, NAME_TAG, UNMANAGED_TAG, NAMED_TAG, OPTIONAL_TAG];
}

var NON_CUSTOM_TAG_KEYS = getNonCustomTagKeys();

/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/container/container.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/container/container.js ***!
  \***************************************************************************/
/*! exports provided: Container */
/*! exports used: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _bindings_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bindings/binding */ "./node_modules/_inversify@5.1.1@inversify/es/bindings/binding.js");
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/_inversify@5.1.1@inversify/es/constants/literal_types.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata_reader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../planning/metadata_reader */ "./node_modules/_inversify@5.1.1@inversify/es/planning/metadata_reader.js");
/* harmony import */ var _planning_planner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../planning/planner */ "./node_modules/_inversify@5.1.1@inversify/es/planning/planner.js");
/* harmony import */ var _resolution_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resolution/resolver */ "./node_modules/_inversify@5.1.1@inversify/es/resolution/resolver.js");
/* harmony import */ var _syntax_binding_to_syntax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../syntax/binding_to_syntax */ "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_to_syntax.js");
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/id */ "./node_modules/_inversify@5.1.1@inversify/es/utils/id.js");
/* harmony import */ var _utils_serialization__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/serialization */ "./node_modules/_inversify@5.1.1@inversify/es/utils/serialization.js");
/* harmony import */ var _container_snapshot__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./container_snapshot */ "./node_modules/_inversify@5.1.1@inversify/es/container/container_snapshot.js");
/* harmony import */ var _lookup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lookup */ "./node_modules/_inversify@5.1.1@inversify/es/container/lookup.js");


var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __spreadArray = undefined && undefined.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};














var Container = function () {
  function Container(containerOptions) {
    this._appliedMiddleware = [];
    var options = containerOptions || {};

    if (Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(options) !== "object") {
      throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__[/* CONTAINER_OPTIONS_MUST_BE_AN_OBJECT */ "i"]);
    }

    if (options.defaultScope === undefined) {
      options.defaultScope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__[/* BindingScopeEnum */ "a"].Transient;
    } else if (options.defaultScope !== _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__[/* BindingScopeEnum */ "a"].Singleton && options.defaultScope !== _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__[/* BindingScopeEnum */ "a"].Transient && options.defaultScope !== _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__[/* BindingScopeEnum */ "a"].Request) {
      throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__[/* CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE */ "g"]);
    }

    if (options.autoBindInjectable === undefined) {
      options.autoBindInjectable = false;
    } else if (typeof options.autoBindInjectable !== "boolean") {
      throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__[/* CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE */ "f"]);
    }

    if (options.skipBaseClassChecks === undefined) {
      options.skipBaseClassChecks = false;
    } else if (typeof options.skipBaseClassChecks !== "boolean") {
      throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__[/* CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK */ "h"]);
    }

    this.options = {
      autoBindInjectable: options.autoBindInjectable,
      defaultScope: options.defaultScope,
      skipBaseClassChecks: options.skipBaseClassChecks
    };
    this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_9__[/* id */ "a"])();
    this._bindingDictionary = new _lookup__WEBPACK_IMPORTED_MODULE_12__[/* Lookup */ "a"]();
    this._snapshots = [];
    this._middleware = null;
    this.parent = null;
    this._metadataReader = new _planning_metadata_reader__WEBPACK_IMPORTED_MODULE_5__[/* MetadataReader */ "a"]();
  }

  Container.merge = function (container1, container2) {
    var container3 = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      container3[_i - 2] = arguments[_i];
    }

    var container = new Container();

    var targetContainers = __spreadArray([container1, container2], container3).map(function (targetContainer) {
      return Object(_planning_planner__WEBPACK_IMPORTED_MODULE_6__[/* getBindingDictionary */ "b"])(targetContainer);
    });

    var bindingDictionary = Object(_planning_planner__WEBPACK_IMPORTED_MODULE_6__[/* getBindingDictionary */ "b"])(container);

    function copyDictionary(origin, destination) {
      origin.traverse(function (key, value) {
        value.forEach(function (binding) {
          destination.add(binding.serviceIdentifier, binding.clone());
        });
      });
    }

    targetContainers.forEach(function (targetBindingDictionary) {
      copyDictionary(targetBindingDictionary, bindingDictionary);
    });
    return container;
  };

  Container.prototype.load = function () {
    var modules = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      modules[_i] = arguments[_i];
    }

    var getHelpers = this._getContainerModuleHelpersFactory();

    for (var _a = 0, modules_1 = modules; _a < modules_1.length; _a++) {
      var currentModule = modules_1[_a];
      var containerModuleHelpers = getHelpers(currentModule.id);
      currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction);
    }
  };

  Container.prototype.loadAsync = function () {
    var modules = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      modules[_i] = arguments[_i];
    }

    return __awaiter(this, void 0, void 0, function () {
      var getHelpers, _a, modules_2, currentModule, containerModuleHelpers;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            getHelpers = this._getContainerModuleHelpersFactory();
            _a = 0, modules_2 = modules;
            _b.label = 1;

          case 1:
            if (!(_a < modules_2.length)) return [3, 4];
            currentModule = modules_2[_a];
            containerModuleHelpers = getHelpers(currentModule.id);
            return [4, currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction)];

          case 2:
            _b.sent();

            _b.label = 3;

          case 3:
            _a++;
            return [3, 1];

          case 4:
            return [2];
        }
      });
    });
  };

  Container.prototype.unload = function () {
    var _this = this;

    var modules = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      modules[_i] = arguments[_i];
    }

    var conditionFactory = function conditionFactory(expected) {
      return function (item) {
        return item.moduleId === expected;
      };
    };

    modules.forEach(function (module) {
      var condition = conditionFactory(module.id);

      _this._bindingDictionary.removeByCondition(condition);
    });
  };

  Container.prototype.bind = function (serviceIdentifier) {
    var scope = this.options.defaultScope || _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__[/* BindingScopeEnum */ "a"].Transient;
    var binding = new _bindings_binding__WEBPACK_IMPORTED_MODULE_1__[/* Binding */ "a"](serviceIdentifier, scope);

    this._bindingDictionary.add(serviceIdentifier, binding);

    return new _syntax_binding_to_syntax__WEBPACK_IMPORTED_MODULE_8__[/* BindingToSyntax */ "a"](binding);
  };

  Container.prototype.rebind = function (serviceIdentifier) {
    this.unbind(serviceIdentifier);
    return this.bind(serviceIdentifier);
  };

  Container.prototype.unbind = function (serviceIdentifier) {
    try {
      this._bindingDictionary.remove(serviceIdentifier);
    } catch (e) {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__[/* CANNOT_UNBIND */ "c"] + " " + Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_10__[/* getServiceIdentifierAsString */ "c"])(serviceIdentifier));
    }
  };

  Container.prototype.unbindAll = function () {
    this._bindingDictionary = new _lookup__WEBPACK_IMPORTED_MODULE_12__[/* Lookup */ "a"]();
  };

  Container.prototype.isBound = function (serviceIdentifier) {
    var bound = this._bindingDictionary.hasKey(serviceIdentifier);

    if (!bound && this.parent) {
      bound = this.parent.isBound(serviceIdentifier);
    }

    return bound;
  };

  Container.prototype.isBoundNamed = function (serviceIdentifier, named) {
    return this.isBoundTagged(serviceIdentifier, _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_4__["NAMED_TAG"], named);
  };

  Container.prototype.isBoundTagged = function (serviceIdentifier, key, value) {
    var bound = false;

    if (this._bindingDictionary.hasKey(serviceIdentifier)) {
      var bindings = this._bindingDictionary.get(serviceIdentifier);

      var request_1 = Object(_planning_planner__WEBPACK_IMPORTED_MODULE_6__[/* createMockRequest */ "a"])(this, serviceIdentifier, key, value);
      bound = bindings.some(function (b) {
        return b.constraint(request_1);
      });
    }

    if (!bound && this.parent) {
      bound = this.parent.isBoundTagged(serviceIdentifier, key, value);
    }

    return bound;
  };

  Container.prototype.snapshot = function () {
    this._snapshots.push(_container_snapshot__WEBPACK_IMPORTED_MODULE_11__[/* ContainerSnapshot */ "a"].of(this._bindingDictionary.clone(), this._middleware));
  };

  Container.prototype.restore = function () {
    var snapshot = this._snapshots.pop();

    if (snapshot === undefined) {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__[/* NO_MORE_SNAPSHOTS_AVAILABLE */ "v"]);
    }

    this._bindingDictionary = snapshot.bindings;
    this._middleware = snapshot.middleware;
  };

  Container.prototype.createChild = function (containerOptions) {
    var child = new Container(containerOptions || this.options);
    child.parent = this;
    return child;
  };

  Container.prototype.applyMiddleware = function () {
    var middlewares = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      middlewares[_i] = arguments[_i];
    }

    this._appliedMiddleware = this._appliedMiddleware.concat(middlewares);
    var initial = this._middleware ? this._middleware : this._planAndResolve();
    this._middleware = middlewares.reduce(function (prev, curr) {
      return curr(prev);
    }, initial);
  };

  Container.prototype.applyCustomMetadataReader = function (metadataReader) {
    this._metadataReader = metadataReader;
  };

  Container.prototype.get = function (serviceIdentifier) {
    return this._get(false, false, _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__[/* TargetTypeEnum */ "c"].Variable, serviceIdentifier);
  };

  Container.prototype.getTagged = function (serviceIdentifier, key, value) {
    return this._get(false, false, _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__[/* TargetTypeEnum */ "c"].Variable, serviceIdentifier, key, value);
  };

  Container.prototype.getNamed = function (serviceIdentifier, named) {
    return this.getTagged(serviceIdentifier, _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_4__["NAMED_TAG"], named);
  };

  Container.prototype.getAll = function (serviceIdentifier) {
    return this._get(true, true, _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__[/* TargetTypeEnum */ "c"].Variable, serviceIdentifier);
  };

  Container.prototype.getAllTagged = function (serviceIdentifier, key, value) {
    return this._get(false, true, _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__[/* TargetTypeEnum */ "c"].Variable, serviceIdentifier, key, value);
  };

  Container.prototype.getAllNamed = function (serviceIdentifier, named) {
    return this.getAllTagged(serviceIdentifier, _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_4__["NAMED_TAG"], named);
  };

  Container.prototype.resolve = function (constructorFunction) {
    var tempContainer = this.createChild();
    tempContainer.bind(constructorFunction).toSelf();

    this._appliedMiddleware.forEach(function (m) {
      tempContainer.applyMiddleware(m);
    });

    return tempContainer.get(constructorFunction);
  };

  Container.prototype._getContainerModuleHelpersFactory = function () {
    var _this = this;

    var setModuleId = function setModuleId(bindingToSyntax, moduleId) {
      bindingToSyntax._binding.moduleId = moduleId;
    };

    var getBindFunction = function getBindFunction(moduleId) {
      return function (serviceIdentifier) {
        var _bind = _this.bind.bind(_this);

        var bindingToSyntax = _bind(serviceIdentifier);

        setModuleId(bindingToSyntax, moduleId);
        return bindingToSyntax;
      };
    };

    var getUnbindFunction = function getUnbindFunction(moduleId) {
      return function (serviceIdentifier) {
        var _unbind = _this.unbind.bind(_this);

        _unbind(serviceIdentifier);
      };
    };

    var getIsboundFunction = function getIsboundFunction(moduleId) {
      return function (serviceIdentifier) {
        var _isBound = _this.isBound.bind(_this);

        return _isBound(serviceIdentifier);
      };
    };

    var getRebindFunction = function getRebindFunction(moduleId) {
      return function (serviceIdentifier) {
        var _rebind = _this.rebind.bind(_this);

        var bindingToSyntax = _rebind(serviceIdentifier);

        setModuleId(bindingToSyntax, moduleId);
        return bindingToSyntax;
      };
    };

    return function (mId) {
      return {
        bindFunction: getBindFunction(mId),
        isboundFunction: getIsboundFunction(mId),
        rebindFunction: getRebindFunction(mId),
        unbindFunction: getUnbindFunction(mId)
      };
    };
  };

  Container.prototype._get = function (avoidConstraints, isMultiInject, targetType, serviceIdentifier, key, value) {
    var result = null;
    var defaultArgs = {
      avoidConstraints: avoidConstraints,
      contextInterceptor: function contextInterceptor(context) {
        return context;
      },
      isMultiInject: isMultiInject,
      key: key,
      serviceIdentifier: serviceIdentifier,
      targetType: targetType,
      value: value
    };

    if (this._middleware) {
      result = this._middleware(defaultArgs);

      if (result === undefined || result === null) {
        throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__[/* INVALID_MIDDLEWARE_RETURN */ "o"]);
      }
    } else {
      result = this._planAndResolve()(defaultArgs);
    }

    return result;
  };

  Container.prototype._planAndResolve = function () {
    var _this = this;

    return function (args) {
      var context = Object(_planning_planner__WEBPACK_IMPORTED_MODULE_6__[/* plan */ "c"])(_this._metadataReader, _this, args.isMultiInject, args.targetType, args.serviceIdentifier, args.key, args.value, args.avoidConstraints);
      context = args.contextInterceptor(context);
      var result = Object(_resolution_resolver__WEBPACK_IMPORTED_MODULE_7__[/* resolve */ "a"])(context);
      return result;
    };
  };

  return Container;
}();



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/container/container_module.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/container/container_module.js ***!
  \**********************************************************************************/
/*! exports provided: ContainerModule, AsyncContainerModule */
/*! exports used: ContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerModule; });
/* unused harmony export AsyncContainerModule */
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/id */ "./node_modules/_inversify@5.1.1@inversify/es/utils/id.js");


var ContainerModule = function () {
  function ContainerModule(registry) {
    this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_0__[/* id */ "a"])();
    this.registry = registry;
  }

  return ContainerModule;
}();



var AsyncContainerModule = function () {
  function AsyncContainerModule(registry) {
    this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_0__[/* id */ "a"])();
    this.registry = registry;
  }

  return AsyncContainerModule;
}();



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/container/container_snapshot.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/container/container_snapshot.js ***!
  \************************************************************************************/
/*! exports provided: ContainerSnapshot */
/*! exports used: ContainerSnapshot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerSnapshot; });
var ContainerSnapshot = function () {
  function ContainerSnapshot() {}

  ContainerSnapshot.of = function (bindings, middleware) {
    var snapshot = new ContainerSnapshot();
    snapshot.bindings = bindings;
    snapshot.middleware = middleware;
    return snapshot;
  };

  return ContainerSnapshot;
}();



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/container/lookup.js":
/*!************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/container/lookup.js ***!
  \************************************************************************/
/*! exports provided: Lookup */
/*! exports used: Lookup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lookup; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");


var Lookup = function () {
  function Lookup() {
    this._map = new Map();
  }

  Lookup.prototype.getMap = function () {
    return this._map;
  };

  Lookup.prototype.add = function (serviceIdentifier, value) {
    if (serviceIdentifier === null || serviceIdentifier === undefined) {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* NULL_ARGUMENT */ "w"]);
    }

    if (value === null || value === undefined) {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* NULL_ARGUMENT */ "w"]);
    }

    var entry = this._map.get(serviceIdentifier);

    if (entry !== undefined) {
      entry.push(value);

      this._map.set(serviceIdentifier, entry);
    } else {
      this._map.set(serviceIdentifier, [value]);
    }
  };

  Lookup.prototype.get = function (serviceIdentifier) {
    if (serviceIdentifier === null || serviceIdentifier === undefined) {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* NULL_ARGUMENT */ "w"]);
    }

    var entry = this._map.get(serviceIdentifier);

    if (entry !== undefined) {
      return entry;
    } else {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* KEY_NOT_FOUND */ "q"]);
    }
  };

  Lookup.prototype.remove = function (serviceIdentifier) {
    if (serviceIdentifier === null || serviceIdentifier === undefined) {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* NULL_ARGUMENT */ "w"]);
    }

    if (!this._map.delete(serviceIdentifier)) {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* KEY_NOT_FOUND */ "q"]);
    }
  };

  Lookup.prototype.removeByCondition = function (condition) {
    var _this = this;

    this._map.forEach(function (entries, key) {
      var updatedEntries = entries.filter(function (entry) {
        return !condition(entry);
      });

      if (updatedEntries.length > 0) {
        _this._map.set(key, updatedEntries);
      } else {
        _this._map.delete(key);
      }
    });
  };

  Lookup.prototype.hasKey = function (serviceIdentifier) {
    if (serviceIdentifier === null || serviceIdentifier === undefined) {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* NULL_ARGUMENT */ "w"]);
    }

    return this._map.has(serviceIdentifier);
  };

  Lookup.prototype.clone = function () {
    var copy = new Lookup();

    this._map.forEach(function (value, key) {
      value.forEach(function (b) {
        return copy.add(key, b.clone());
      });
    });

    return copy;
  };

  Lookup.prototype.traverse = function (func) {
    this._map.forEach(function (value, key) {
      func(key, value);
    });
  };

  return Lookup;
}();



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/inversify.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/inversify.js ***!
  \*****************************************************************/
/*! exports provided: METADATA_KEY, Container, BindingScopeEnum, BindingTypeEnum, TargetTypeEnum, AsyncContainerModule, ContainerModule, injectable, tagged, named, inject, LazyServiceIdentifer, optional, unmanaged, multiInject, targetName, postConstruct, MetadataReader, id, decorate, traverseAncerstors, taggedConstraint, namedConstraint, typeConstraint, getServiceIdentifierAsString, multiBindToService */
/*! exports used: Container, ContainerModule, inject, injectable, multiInject, optional */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export METADATA_KEY */
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/metadata_keys */ "./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
/* harmony import */ var _container_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/container */ "./node_modules/_inversify@5.1.1@inversify/es/container/container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _container_container__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/literal_types */ "./node_modules/_inversify@5.1.1@inversify/es/constants/literal_types.js");
/* harmony import */ var _container_container_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/container_module */ "./node_modules/_inversify@5.1.1@inversify/es/container/container_module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _container_container_module__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _annotation_injectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./annotation/injectable */ "./node_modules/_inversify@5.1.1@inversify/es/annotation/injectable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _annotation_injectable__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _annotation_tagged__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./annotation/tagged */ "./node_modules/_inversify@5.1.1@inversify/es/annotation/tagged.js");
/* harmony import */ var _annotation_named__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./annotation/named */ "./node_modules/_inversify@5.1.1@inversify/es/annotation/named.js");
/* harmony import */ var _annotation_inject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./annotation/inject */ "./node_modules/_inversify@5.1.1@inversify/es/annotation/inject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _annotation_inject__WEBPACK_IMPORTED_MODULE_7__["b"]; });

/* harmony import */ var _annotation_optional__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./annotation/optional */ "./node_modules/_inversify@5.1.1@inversify/es/annotation/optional.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _annotation_optional__WEBPACK_IMPORTED_MODULE_8__["a"]; });

/* harmony import */ var _annotation_unmanaged__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./annotation/unmanaged */ "./node_modules/_inversify@5.1.1@inversify/es/annotation/unmanaged.js");
/* harmony import */ var _annotation_multi_inject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./annotation/multi_inject */ "./node_modules/_inversify@5.1.1@inversify/es/annotation/multi_inject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _annotation_multi_inject__WEBPACK_IMPORTED_MODULE_10__["a"]; });

/* harmony import */ var _annotation_target_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./annotation/target_name */ "./node_modules/_inversify@5.1.1@inversify/es/annotation/target_name.js");
/* harmony import */ var _annotation_post_construct__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./annotation/post_construct */ "./node_modules/_inversify@5.1.1@inversify/es/annotation/post_construct.js");
/* harmony import */ var _planning_metadata_reader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./planning/metadata_reader */ "./node_modules/_inversify@5.1.1@inversify/es/planning/metadata_reader.js");
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/id */ "./node_modules/_inversify@5.1.1@inversify/es/utils/id.js");
/* harmony import */ var _annotation_decorator_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./annotation/decorator_utils */ "./node_modules/_inversify@5.1.1@inversify/es/annotation/decorator_utils.js");
/* harmony import */ var _syntax_constraint_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./syntax/constraint_helpers */ "./node_modules/_inversify@5.1.1@inversify/es/syntax/constraint_helpers.js");
/* harmony import */ var _utils_serialization__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/serialization */ "./node_modules/_inversify@5.1.1@inversify/es/utils/serialization.js");
/* harmony import */ var _utils_binding_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils/binding_utils */ "./node_modules/_inversify@5.1.1@inversify/es/utils/binding_utils.js");

var METADATA_KEY = _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__;



















/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/planning/context.js":
/*!************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/planning/context.js ***!
  \************************************************************************/
/*! exports provided: Context */
/*! exports used: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/id */ "./node_modules/_inversify@5.1.1@inversify/es/utils/id.js");


var Context = function () {
  function Context(container) {
    this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_0__[/* id */ "a"])();
    this.container = container;
  }

  Context.prototype.addPlan = function (plan) {
    this.plan = plan;
  };

  Context.prototype.setCurrentRequest = function (currentRequest) {
    this.currentRequest = currentRequest;
  };

  return Context;
}();



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js ***!
  \*************************************************************************/
/*! exports provided: Metadata */
/*! exports used: Metadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Metadata; });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");


var Metadata = function () {
  function Metadata(key, value) {
    this.key = key;
    this.value = value;
  }

  Metadata.prototype.toString = function () {
    if (this.key === _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"]) {
      return "named: " + this.value.toString() + " ";
    } else {
      return "tagged: { key:" + this.key.toString() + ", value: " + this.value + " }";
    }
  };

  return Metadata;
}();



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/planning/metadata_reader.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/planning/metadata_reader.js ***!
  \********************************************************************************/
/*! exports provided: MetadataReader */
/*! exports used: MetadataReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetadataReader; });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");


var MetadataReader = function () {
  function MetadataReader() {}

  MetadataReader.prototype.getConstructorMetadata = function (constructorFunc) {
    var compilerGeneratedMetadata = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["PARAM_TYPES"], constructorFunc);
    var userGeneratedMetadata = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["TAGGED"], constructorFunc);
    return {
      compilerGeneratedMetadata: compilerGeneratedMetadata,
      userGeneratedMetadata: userGeneratedMetadata || {}
    };
  };

  MetadataReader.prototype.getPropertiesMetadata = function (constructorFunc) {
    var userGeneratedMetadata = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["TAGGED_PROP"], constructorFunc) || [];
    return userGeneratedMetadata;
  };

  return MetadataReader;
}();



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/planning/plan.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/planning/plan.js ***!
  \*********************************************************************/
/*! exports provided: Plan */
/*! exports used: Plan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plan; });
var Plan = function () {
  function Plan(parentContext, rootRequest) {
    this.parentContext = parentContext;
    this.rootRequest = rootRequest;
  }

  return Plan;
}();



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/planning/planner.js":
/*!************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/planning/planner.js ***!
  \************************************************************************/
/*! exports provided: plan, createMockRequest, getBindingDictionary */
/*! exports used: createMockRequest, getBindingDictionary, plan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return plan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createMockRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBindingDictionary; });
/* harmony import */ var _bindings_binding_count__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bindings/binding_count */ "./node_modules/_inversify@5.1.1@inversify/es/bindings/binding_count.js");
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/_inversify@5.1.1@inversify/es/constants/literal_types.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
/* harmony import */ var _utils_exceptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/exceptions */ "./node_modules/_inversify@5.1.1@inversify/es/utils/exceptions.js");
/* harmony import */ var _utils_serialization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/serialization */ "./node_modules/_inversify@5.1.1@inversify/es/utils/serialization.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context */ "./node_modules/_inversify@5.1.1@inversify/es/planning/context.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metadata */ "./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js");
/* harmony import */ var _plan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plan */ "./node_modules/_inversify@5.1.1@inversify/es/planning/plan.js");
/* harmony import */ var _reflection_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reflection_utils */ "./node_modules/_inversify@5.1.1@inversify/es/planning/reflection_utils.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./request */ "./node_modules/_inversify@5.1.1@inversify/es/planning/request.js");
/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./target */ "./node_modules/_inversify@5.1.1@inversify/es/planning/target.js");













function getBindingDictionary(cntnr) {
  return cntnr._bindingDictionary;
}

function _createTarget(isMultiInject, targetType, serviceIdentifier, name, key, value) {
  var metadataKey = isMultiInject ? _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["MULTI_INJECT_TAG"] : _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["INJECT_TAG"];
  var injectMetadata = new _metadata__WEBPACK_IMPORTED_MODULE_7__[/* Metadata */ "a"](metadataKey, serviceIdentifier);
  var target = new _target__WEBPACK_IMPORTED_MODULE_11__[/* Target */ "a"](targetType, name, serviceIdentifier, injectMetadata);

  if (key !== undefined) {
    var tagMetadata = new _metadata__WEBPACK_IMPORTED_MODULE_7__[/* Metadata */ "a"](key, value);
    target.metadata.push(tagMetadata);
  }

  return target;
}

function _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target) {
  var bindings = getBindings(context.container, target.serviceIdentifier);
  var activeBindings = [];

  if (bindings.length === _bindings_binding_count__WEBPACK_IMPORTED_MODULE_0__[/* BindingCount */ "a"].NoBindingsAvailable && context.container.options.autoBindInjectable && typeof target.serviceIdentifier === "function" && metadataReader.getConstructorMetadata(target.serviceIdentifier).compilerGeneratedMetadata) {
    context.container.bind(target.serviceIdentifier).toSelf();
    bindings = getBindings(context.container, target.serviceIdentifier);
  }

  if (!avoidConstraints) {
    activeBindings = bindings.filter(function (binding) {
      var request = new _request__WEBPACK_IMPORTED_MODULE_10__[/* Request */ "a"](binding.serviceIdentifier, context, parentRequest, binding, target);
      return binding.constraint(request);
    });
  } else {
    activeBindings = bindings;
  }

  _validateActiveBindingCount(target.serviceIdentifier, activeBindings, target, context.container);

  return activeBindings;
}

function _validateActiveBindingCount(serviceIdentifier, bindings, target, container) {
  switch (bindings.length) {
    case _bindings_binding_count__WEBPACK_IMPORTED_MODULE_0__[/* BindingCount */ "a"].NoBindingsAvailable:
      if (target.isOptional()) {
        return bindings;
      } else {
        var serviceIdentifierString = Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__[/* getServiceIdentifierAsString */ "c"])(serviceIdentifier);
        var msg = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* NOT_REGISTERED */ "u"];
        msg += Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__[/* listMetadataForTarget */ "d"])(serviceIdentifierString, target);
        msg += Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__[/* listRegisteredBindingsForServiceIdentifier */ "e"])(container, serviceIdentifierString, getBindings);
        throw new Error(msg);
      }

    case _bindings_binding_count__WEBPACK_IMPORTED_MODULE_0__[/* BindingCount */ "a"].OnlyOneBindingAvailable:
      if (!target.isArray()) {
        return bindings;
      }

    case _bindings_binding_count__WEBPACK_IMPORTED_MODULE_0__[/* BindingCount */ "a"].MultipleBindingsAvailable:
    default:
      if (!target.isArray()) {
        var serviceIdentifierString = Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__[/* getServiceIdentifierAsString */ "c"])(serviceIdentifier);
        var msg = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* AMBIGUOUS_MATCH */ "a"] + " " + serviceIdentifierString;
        msg += Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__[/* listRegisteredBindingsForServiceIdentifier */ "e"])(container, serviceIdentifierString, getBindings);
        throw new Error(msg);
      } else {
        return bindings;
      }

  }
}

function _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, parentRequest, target) {
  var activeBindings;
  var childRequest;

  if (parentRequest === null) {
    activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, null, target);
    childRequest = new _request__WEBPACK_IMPORTED_MODULE_10__[/* Request */ "a"](serviceIdentifier, context, null, activeBindings, target);
    var thePlan = new _plan__WEBPACK_IMPORTED_MODULE_8__[/* Plan */ "a"](context, childRequest);
    context.addPlan(thePlan);
  } else {
    activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target);
    childRequest = parentRequest.addChildRequest(target.serviceIdentifier, activeBindings, target);
  }

  activeBindings.forEach(function (binding) {
    var subChildRequest = null;

    if (target.isArray()) {
      subChildRequest = childRequest.addChildRequest(binding.serviceIdentifier, binding, target);
    } else {
      if (binding.cache) {
        return;
      }

      subChildRequest = childRequest;
    }

    if (binding.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__[/* BindingTypeEnum */ "b"].Instance && binding.implementationType !== null) {
      var dependencies = Object(_reflection_utils__WEBPACK_IMPORTED_MODULE_9__[/* getDependencies */ "b"])(metadataReader, binding.implementationType);

      if (!context.container.options.skipBaseClassChecks) {
        var baseClassDependencyCount = Object(_reflection_utils__WEBPACK_IMPORTED_MODULE_9__[/* getBaseClassDependencyCount */ "a"])(metadataReader, binding.implementationType);

        if (dependencies.length < baseClassDependencyCount) {
          var error = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* ARGUMENTS_LENGTH_MISMATCH */ "b"](Object(_reflection_utils__WEBPACK_IMPORTED_MODULE_9__[/* getFunctionName */ "c"])(binding.implementationType));
          throw new Error(error);
        }
      }

      dependencies.forEach(function (dependency) {
        _createSubRequests(metadataReader, false, dependency.serviceIdentifier, context, subChildRequest, dependency);
      });
    }
  });
}

function getBindings(container, serviceIdentifier) {
  var bindings = [];
  var bindingDictionary = getBindingDictionary(container);

  if (bindingDictionary.hasKey(serviceIdentifier)) {
    bindings = bindingDictionary.get(serviceIdentifier);
  } else if (container.parent !== null) {
    bindings = getBindings(container.parent, serviceIdentifier);
  }

  return bindings;
}

function plan(metadataReader, container, isMultiInject, targetType, serviceIdentifier, key, value, avoidConstraints) {
  if (avoidConstraints === void 0) {
    avoidConstraints = false;
  }

  var context = new _context__WEBPACK_IMPORTED_MODULE_6__[/* Context */ "a"](container);

  var target = _createTarget(isMultiInject, targetType, serviceIdentifier, "", key, value);

  try {
    _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, null, target);

    return context;
  } catch (error) {
    if (Object(_utils_exceptions__WEBPACK_IMPORTED_MODULE_4__[/* isStackOverflowExeption */ "a"])(error)) {
      if (context.plan) {
        Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__[/* circularDependencyToException */ "a"])(context.plan.rootRequest);
      }
    }

    throw error;
  }
}

function createMockRequest(container, serviceIdentifier, key, value) {
  var target = new _target__WEBPACK_IMPORTED_MODULE_11__[/* Target */ "a"](_constants_literal_types__WEBPACK_IMPORTED_MODULE_2__[/* TargetTypeEnum */ "c"].Variable, "", serviceIdentifier, new _metadata__WEBPACK_IMPORTED_MODULE_7__[/* Metadata */ "a"](key, value));
  var context = new _context__WEBPACK_IMPORTED_MODULE_6__[/* Context */ "a"](container);
  var request = new _request__WEBPACK_IMPORTED_MODULE_10__[/* Request */ "a"](serviceIdentifier, context, null, [], target);
  return request;
}



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/planning/queryable_string.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/planning/queryable_string.js ***!
  \*********************************************************************************/
/*! exports provided: QueryableString */
/*! exports used: QueryableString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryableString; });
var QueryableString = function () {
  function QueryableString(str) {
    this.str = str;
  }

  QueryableString.prototype.startsWith = function (searchString) {
    return this.str.indexOf(searchString) === 0;
  };

  QueryableString.prototype.endsWith = function (searchString) {
    var reverseString = "";
    var reverseSearchString = searchString.split("").reverse().join("");
    reverseString = this.str.split("").reverse().join("");
    return this.startsWith.call({
      str: reverseString
    }, reverseSearchString);
  };

  QueryableString.prototype.contains = function (searchString) {
    return this.str.indexOf(searchString) !== -1;
  };

  QueryableString.prototype.equals = function (compareString) {
    return this.str === compareString;
  };

  QueryableString.prototype.value = function () {
    return this.str;
  };

  return QueryableString;
}();



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/planning/reflection_utils.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/planning/reflection_utils.js ***!
  \*********************************************************************************/
/*! exports provided: getDependencies, getBaseClassDependencyCount, getFunctionName */
/*! exports used: getBaseClassDependencyCount, getDependencies, getFunctionName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDependencies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBaseClassDependencyCount; });
/* harmony import */ var _annotation_inject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../annotation/inject */ "./node_modules/_inversify@5.1.1@inversify/es/annotation/inject.js");
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/_inversify@5.1.1@inversify/es/constants/literal_types.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
/* harmony import */ var _utils_serialization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/serialization */ "./node_modules/_inversify@5.1.1@inversify/es/utils/serialization.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _utils_serialization__WEBPACK_IMPORTED_MODULE_4__["b"]; });

/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./target */ "./node_modules/_inversify@5.1.1@inversify/es/planning/target.js");
var __spreadArray = undefined && undefined.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};








function getDependencies(metadataReader, func) {
  var constructorName = Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_4__[/* getFunctionName */ "b"])(func);
  var targets = getTargets(metadataReader, constructorName, func, false);
  return targets;
}

function getTargets(metadataReader, constructorName, func, isBaseClass) {
  var metadata = metadataReader.getConstructorMetadata(func);
  var serviceIdentifiers = metadata.compilerGeneratedMetadata;

  if (serviceIdentifiers === undefined) {
    var msg = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* MISSING_INJECTABLE_ANNOTATION */ "r"] + " " + constructorName + ".";
    throw new Error(msg);
  }

  var constructorArgsMetadata = metadata.userGeneratedMetadata;
  var keys = Object.keys(constructorArgsMetadata);
  var hasUserDeclaredUnknownInjections = func.length === 0 && keys.length > 0;
  var hasOptionalParameters = keys.length > func.length;
  var iterations = hasUserDeclaredUnknownInjections || hasOptionalParameters ? keys.length : func.length;
  var constructorTargets = getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations);
  var propertyTargets = getClassPropsAsTargets(metadataReader, func);

  var targets = __spreadArray(__spreadArray([], constructorTargets), propertyTargets);

  return targets;
}

function getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata) {
  var targetMetadata = constructorArgsMetadata[index.toString()] || [];
  var metadata = formatTargetMetadata(targetMetadata);
  var isManaged = metadata.unmanaged !== true;
  var serviceIdentifier = serviceIdentifiers[index];
  var injectIdentifier = metadata.inject || metadata.multiInject;
  serviceIdentifier = injectIdentifier ? injectIdentifier : serviceIdentifier;

  if (serviceIdentifier instanceof _annotation_inject__WEBPACK_IMPORTED_MODULE_0__[/* LazyServiceIdentifer */ "a"]) {
    serviceIdentifier = serviceIdentifier.unwrap();
  }

  if (isManaged) {
    var isObject = serviceIdentifier === Object;
    var isFunction = serviceIdentifier === Function;
    var isUndefined = serviceIdentifier === undefined;
    var isUnknownType = isObject || isFunction || isUndefined;

    if (!isBaseClass && isUnknownType) {
      var msg = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* MISSING_INJECT_ANNOTATION */ "s"] + " argument " + index + " in class " + constructorName + ".";
      throw new Error(msg);
    }

    var target = new _target__WEBPACK_IMPORTED_MODULE_5__[/* Target */ "a"](_constants_literal_types__WEBPACK_IMPORTED_MODULE_2__[/* TargetTypeEnum */ "c"].ConstructorArgument, metadata.targetName, serviceIdentifier);
    target.metadata = targetMetadata;
    return target;
  }

  return null;
}

function getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations) {
  var targets = [];

  for (var i = 0; i < iterations; i++) {
    var index = i;
    var target = getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata);

    if (target !== null) {
      targets.push(target);
    }
  }

  return targets;
}

function getClassPropsAsTargets(metadataReader, constructorFunc) {
  var classPropsMetadata = metadataReader.getPropertiesMetadata(constructorFunc);
  var targets = [];
  var keys = Object.keys(classPropsMetadata);

  for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
    var key = keys_1[_i];
    var targetMetadata = classPropsMetadata[key];
    var metadata = formatTargetMetadata(classPropsMetadata[key]);
    var targetName = metadata.targetName || key;
    var serviceIdentifier = metadata.inject || metadata.multiInject;
    var target = new _target__WEBPACK_IMPORTED_MODULE_5__[/* Target */ "a"](_constants_literal_types__WEBPACK_IMPORTED_MODULE_2__[/* TargetTypeEnum */ "c"].ClassProperty, targetName, serviceIdentifier);
    target.metadata = targetMetadata;
    targets.push(target);
  }

  var baseConstructor = Object.getPrototypeOf(constructorFunc.prototype).constructor;

  if (baseConstructor !== Object) {
    var baseTargets = getClassPropsAsTargets(metadataReader, baseConstructor);
    targets = __spreadArray(__spreadArray([], targets), baseTargets);
  }

  return targets;
}

function getBaseClassDependencyCount(metadataReader, func) {
  var baseConstructor = Object.getPrototypeOf(func.prototype).constructor;

  if (baseConstructor !== Object) {
    var baseConstructorName = Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_4__[/* getFunctionName */ "b"])(baseConstructor);
    var targets = getTargets(metadataReader, baseConstructorName, baseConstructor, true);
    var metadata = targets.map(function (t) {
      return t.metadata.filter(function (m) {
        return m.key === _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["UNMANAGED_TAG"];
      });
    });
    var unmanagedCount = [].concat.apply([], metadata).length;
    var dependencyCount = targets.length - unmanagedCount;

    if (dependencyCount > 0) {
      return dependencyCount;
    } else {
      return getBaseClassDependencyCount(metadataReader, baseConstructor);
    }
  } else {
    return 0;
  }
}

function formatTargetMetadata(targetMetadata) {
  var targetMetadataMap = {};
  targetMetadata.forEach(function (m) {
    targetMetadataMap[m.key.toString()] = m.value;
  });
  return {
    inject: targetMetadataMap[_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["INJECT_TAG"]],
    multiInject: targetMetadataMap[_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["MULTI_INJECT_TAG"]],
    targetName: targetMetadataMap[_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["NAME_TAG"]],
    unmanaged: targetMetadataMap[_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["UNMANAGED_TAG"]]
  };
}



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/planning/request.js":
/*!************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/planning/request.js ***!
  \************************************************************************/
/*! exports provided: Request */
/*! exports used: Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Request; });
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/id */ "./node_modules/_inversify@5.1.1@inversify/es/utils/id.js");


var Request = function () {
  function Request(serviceIdentifier, parentContext, parentRequest, bindings, target) {
    this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_0__[/* id */ "a"])();
    this.serviceIdentifier = serviceIdentifier;
    this.parentContext = parentContext;
    this.parentRequest = parentRequest;
    this.target = target;
    this.childRequests = [];
    this.bindings = Array.isArray(bindings) ? bindings : [bindings];
    this.requestScope = parentRequest === null ? new Map() : null;
  }

  Request.prototype.addChildRequest = function (serviceIdentifier, bindings, target) {
    var child = new Request(serviceIdentifier, this.parentContext, this, bindings, target);
    this.childRequests.push(child);
    return child;
  };

  return Request;
}();



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/planning/target.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/planning/target.js ***!
  \***********************************************************************/
/*! exports provided: Target */
/*! exports used: Target */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Target; });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/id */ "./node_modules/_inversify@5.1.1@inversify/es/utils/id.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata */ "./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js");
/* harmony import */ var _queryable_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queryable_string */ "./node_modules/_inversify@5.1.1@inversify/es/planning/queryable_string.js");





var Target = function () {
  function Target(type, name, serviceIdentifier, namedOrTagged) {
    this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_1__[/* id */ "a"])();
    this.type = type;
    this.serviceIdentifier = serviceIdentifier;
    this.name = new _queryable_string__WEBPACK_IMPORTED_MODULE_3__[/* QueryableString */ "a"](name || "");
    this.metadata = new Array();
    var metadataItem = null;

    if (typeof namedOrTagged === "string") {
      metadataItem = new _metadata__WEBPACK_IMPORTED_MODULE_2__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"], namedOrTagged);
    } else if (namedOrTagged instanceof _metadata__WEBPACK_IMPORTED_MODULE_2__[/* Metadata */ "a"]) {
      metadataItem = namedOrTagged;
    }

    if (metadataItem !== null) {
      this.metadata.push(metadataItem);
    }
  }

  Target.prototype.hasTag = function (key) {
    for (var _i = 0, _a = this.metadata; _i < _a.length; _i++) {
      var m = _a[_i];

      if (m.key === key) {
        return true;
      }
    }

    return false;
  };

  Target.prototype.isArray = function () {
    return this.hasTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["MULTI_INJECT_TAG"]);
  };

  Target.prototype.matchesArray = function (name) {
    return this.matchesTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["MULTI_INJECT_TAG"])(name);
  };

  Target.prototype.isNamed = function () {
    return this.hasTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"]);
  };

  Target.prototype.isTagged = function () {
    return this.metadata.some(function (metadata) {
      return _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NON_CUSTOM_TAG_KEYS"].every(function (key) {
        return metadata.key !== key;
      });
    });
  };

  Target.prototype.isOptional = function () {
    return this.matchesTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["OPTIONAL_TAG"])(true);
  };

  Target.prototype.getNamedTag = function () {
    if (this.isNamed()) {
      return this.metadata.filter(function (m) {
        return m.key === _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"];
      })[0];
    }

    return null;
  };

  Target.prototype.getCustomTags = function () {
    if (this.isTagged()) {
      return this.metadata.filter(function (metadata) {
        return _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NON_CUSTOM_TAG_KEYS"].every(function (key) {
          return metadata.key !== key;
        });
      });
    } else {
      return null;
    }
  };

  Target.prototype.matchesNamedTag = function (name) {
    return this.matchesTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"])(name);
  };

  Target.prototype.matchesTag = function (key) {
    var _this = this;

    return function (value) {
      for (var _i = 0, _a = _this.metadata; _i < _a.length; _i++) {
        var m = _a[_i];

        if (m.key === key && m.value === value) {
          return true;
        }
      }

      return false;
    };
  };

  return Target;
}();



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/resolution/instantiation.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/resolution/instantiation.js ***!
  \********************************************************************************/
/*! exports provided: resolveInstance */
/*! exports used: resolveInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resolveInstance; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/_inversify@5.1.1@inversify/es/constants/literal_types.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
var __spreadArray = undefined && undefined.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};





function _injectProperties(instance, childRequests, resolveRequest) {
  var propertyInjectionsRequests = childRequests.filter(function (childRequest) {
    return childRequest.target !== null && childRequest.target.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* TargetTypeEnum */ "c"].ClassProperty;
  });
  var propertyInjections = propertyInjectionsRequests.map(resolveRequest);
  propertyInjectionsRequests.forEach(function (r, index) {
    var propertyName = "";
    propertyName = r.target.name.value();
    var injection = propertyInjections[index];
    instance[propertyName] = injection;
  });
  return instance;
}

function _createInstance(Func, injections) {
  return new (Func.bind.apply(Func, __spreadArray([void 0], injections)))();
}

function _postConstruct(constr, result) {
  if (Reflect.hasMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_2__["POST_CONSTRUCT"], constr)) {
    var data = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_2__["POST_CONSTRUCT"], constr);

    try {
      result[data.value]();
    } catch (e) {
      throw new Error(Object(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* POST_CONSTRUCT_ERROR */ "x"])(constr.name, e.message));
    }
  }
}

function resolveInstance(constr, childRequests, resolveRequest) {
  var result = null;

  if (childRequests.length > 0) {
    var constructorInjectionsRequests = childRequests.filter(function (childRequest) {
      return childRequest.target !== null && childRequest.target.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* TargetTypeEnum */ "c"].ConstructorArgument;
    });
    var constructorInjections = constructorInjectionsRequests.map(resolveRequest);
    result = _createInstance(constr, constructorInjections);
    result = _injectProperties(result, childRequests, resolveRequest);
  } else {
    result = new constr();
  }

  _postConstruct(constr, result);

  return result;
}



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/resolution/resolver.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/resolution/resolver.js ***!
  \***************************************************************************/
/*! exports provided: resolve */
/*! exports used: resolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resolve; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/_inversify@5.1.1@inversify/es/constants/literal_types.js");
/* harmony import */ var _utils_exceptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/exceptions */ "./node_modules/_inversify@5.1.1@inversify/es/utils/exceptions.js");
/* harmony import */ var _utils_serialization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/serialization */ "./node_modules/_inversify@5.1.1@inversify/es/utils/serialization.js");
/* harmony import */ var _instantiation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instantiation */ "./node_modules/_inversify@5.1.1@inversify/es/resolution/instantiation.js");






var invokeFactory = function invokeFactory(factoryType, serviceIdentifier, fn) {
  try {
    return fn();
  } catch (error) {
    if (Object(_utils_exceptions__WEBPACK_IMPORTED_MODULE_2__[/* isStackOverflowExeption */ "a"])(error)) {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* CIRCULAR_DEPENDENCY_IN_FACTORY */ "e"](factoryType, serviceIdentifier.toString()));
    } else {
      throw error;
    }
  }
};

var _resolveRequest = function _resolveRequest(requestScope) {
  return function (request) {
    request.parentContext.setCurrentRequest(request);
    var bindings = request.bindings;
    var childRequests = request.childRequests;
    var targetIsAnArray = request.target && request.target.isArray();
    var targetParentIsNotAnArray = !request.parentRequest || !request.parentRequest.target || !request.target || !request.parentRequest.target.matchesArray(request.target.serviceIdentifier);

    if (targetIsAnArray && targetParentIsNotAnArray) {
      return childRequests.map(function (childRequest) {
        var _f = _resolveRequest(requestScope);

        return _f(childRequest);
      });
    } else {
      var result = null;

      if (request.target.isOptional() && bindings.length === 0) {
        return undefined;
      }

      var binding_1 = bindings[0];
      var isSingleton = binding_1.scope === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Singleton;
      var isRequestSingleton = binding_1.scope === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Request;

      if (isSingleton && binding_1.activated) {
        return binding_1.cache;
      }

      if (isRequestSingleton && requestScope !== null && requestScope.has(binding_1.id)) {
        return requestScope.get(binding_1.id);
      }

      if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].ConstantValue) {
        result = binding_1.cache;
        binding_1.activated = true;
      } else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Function) {
        result = binding_1.cache;
        binding_1.activated = true;
      } else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Constructor) {
        result = binding_1.implementationType;
      } else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].DynamicValue && binding_1.dynamicValue !== null) {
        result = invokeFactory("toDynamicValue", binding_1.serviceIdentifier, function () {
          return binding_1.dynamicValue(request.parentContext);
        });
      } else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Factory && binding_1.factory !== null) {
        result = invokeFactory("toFactory", binding_1.serviceIdentifier, function () {
          return binding_1.factory(request.parentContext);
        });
      } else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Provider && binding_1.provider !== null) {
        result = invokeFactory("toProvider", binding_1.serviceIdentifier, function () {
          return binding_1.provider(request.parentContext);
        });
      } else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Instance && binding_1.implementationType !== null) {
        result = Object(_instantiation__WEBPACK_IMPORTED_MODULE_4__[/* resolveInstance */ "a"])(binding_1.implementationType, childRequests, _resolveRequest(requestScope));
      } else {
        var serviceIdentifier = Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_3__[/* getServiceIdentifierAsString */ "c"])(request.serviceIdentifier);
        throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* INVALID_BINDING_TYPE */ "l"] + " " + serviceIdentifier);
      }

      if (typeof binding_1.onActivation === "function") {
        result = binding_1.onActivation(request.parentContext, result);
      }

      if (isSingleton) {
        binding_1.cache = result;
        binding_1.activated = true;
      }

      if (isRequestSingleton && requestScope !== null && !requestScope.has(binding_1.id)) {
        requestScope.set(binding_1.id, result);
      }

      return result;
    }
  };
};

function resolve(context) {
  var _f = _resolveRequest(context.plan.rootRequest.requestScope);

  return _f(context.plan.rootRequest);
}



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_in_syntax.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_in_syntax.js ***!
  \********************************************************************************/
/*! exports provided: BindingInSyntax */
/*! exports used: BindingInSyntax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingInSyntax; });
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/_inversify@5.1.1@inversify/es/constants/literal_types.js");
/* harmony import */ var _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding_when_on_syntax */ "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_when_on_syntax.js");



var BindingInSyntax = function () {
  function BindingInSyntax(binding) {
    this._binding = binding;
  }

  BindingInSyntax.prototype.inRequestScope = function () {
    this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__[/* BindingScopeEnum */ "a"].Request;
    return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__[/* BindingWhenOnSyntax */ "a"](this._binding);
  };

  BindingInSyntax.prototype.inSingletonScope = function () {
    this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__[/* BindingScopeEnum */ "a"].Singleton;
    return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__[/* BindingWhenOnSyntax */ "a"](this._binding);
  };

  BindingInSyntax.prototype.inTransientScope = function () {
    this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__[/* BindingScopeEnum */ "a"].Transient;
    return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__[/* BindingWhenOnSyntax */ "a"](this._binding);
  };

  return BindingInSyntax;
}();



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_in_when_on_syntax.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_in_when_on_syntax.js ***!
  \****************************************************************************************/
/*! exports provided: BindingInWhenOnSyntax */
/*! exports used: BindingInWhenOnSyntax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingInWhenOnSyntax; });
/* harmony import */ var _binding_in_syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_in_syntax */ "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_in_syntax.js");
/* harmony import */ var _binding_on_syntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding_on_syntax */ "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_on_syntax.js");
/* harmony import */ var _binding_when_syntax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binding_when_syntax */ "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_when_syntax.js");




var BindingInWhenOnSyntax = function () {
  function BindingInWhenOnSyntax(binding) {
    this._binding = binding;
    this._bindingWhenSyntax = new _binding_when_syntax__WEBPACK_IMPORTED_MODULE_2__[/* BindingWhenSyntax */ "a"](this._binding);
    this._bindingOnSyntax = new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_1__[/* BindingOnSyntax */ "a"](this._binding);
    this._bindingInSyntax = new _binding_in_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingInSyntax */ "a"](binding);
  }

  BindingInWhenOnSyntax.prototype.inRequestScope = function () {
    return this._bindingInSyntax.inRequestScope();
  };

  BindingInWhenOnSyntax.prototype.inSingletonScope = function () {
    return this._bindingInSyntax.inSingletonScope();
  };

  BindingInWhenOnSyntax.prototype.inTransientScope = function () {
    return this._bindingInSyntax.inTransientScope();
  };

  BindingInWhenOnSyntax.prototype.when = function (constraint) {
    return this._bindingWhenSyntax.when(constraint);
  };

  BindingInWhenOnSyntax.prototype.whenTargetNamed = function (name) {
    return this._bindingWhenSyntax.whenTargetNamed(name);
  };

  BindingInWhenOnSyntax.prototype.whenTargetIsDefault = function () {
    return this._bindingWhenSyntax.whenTargetIsDefault();
  };

  BindingInWhenOnSyntax.prototype.whenTargetTagged = function (tag, value) {
    return this._bindingWhenSyntax.whenTargetTagged(tag, value);
  };

  BindingInWhenOnSyntax.prototype.whenInjectedInto = function (parent) {
    return this._bindingWhenSyntax.whenInjectedInto(parent);
  };

  BindingInWhenOnSyntax.prototype.whenParentNamed = function (name) {
    return this._bindingWhenSyntax.whenParentNamed(name);
  };

  BindingInWhenOnSyntax.prototype.whenParentTagged = function (tag, value) {
    return this._bindingWhenSyntax.whenParentTagged(tag, value);
  };

  BindingInWhenOnSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
    return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
  };

  BindingInWhenOnSyntax.prototype.whenNoAncestorIs = function (ancestor) {
    return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
  };

  BindingInWhenOnSyntax.prototype.whenAnyAncestorNamed = function (name) {
    return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
  };

  BindingInWhenOnSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
    return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
  };

  BindingInWhenOnSyntax.prototype.whenNoAncestorNamed = function (name) {
    return this._bindingWhenSyntax.whenNoAncestorNamed(name);
  };

  BindingInWhenOnSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
    return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
  };

  BindingInWhenOnSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
    return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
  };

  BindingInWhenOnSyntax.prototype.whenNoAncestorMatches = function (constraint) {
    return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
  };

  BindingInWhenOnSyntax.prototype.onActivation = function (handler) {
    return this._bindingOnSyntax.onActivation(handler);
  };

  return BindingInWhenOnSyntax;
}();



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_on_syntax.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_on_syntax.js ***!
  \********************************************************************************/
/*! exports provided: BindingOnSyntax */
/*! exports used: BindingOnSyntax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingOnSyntax; });
/* harmony import */ var _binding_when_syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_when_syntax */ "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_when_syntax.js");


var BindingOnSyntax = function () {
  function BindingOnSyntax(binding) {
    this._binding = binding;
  }

  BindingOnSyntax.prototype.onActivation = function (handler) {
    this._binding.onActivation = handler;
    return new _binding_when_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingWhenSyntax */ "a"](this._binding);
  };

  return BindingOnSyntax;
}();



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_to_syntax.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_to_syntax.js ***!
  \********************************************************************************/
/*! exports provided: BindingToSyntax */
/*! exports used: BindingToSyntax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingToSyntax; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/_inversify@5.1.1@inversify/es/constants/literal_types.js");
/* harmony import */ var _binding_in_when_on_syntax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binding_in_when_on_syntax */ "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_in_when_on_syntax.js");
/* harmony import */ var _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./binding_when_on_syntax */ "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_when_on_syntax.js");





var BindingToSyntax = function () {
  function BindingToSyntax(binding) {
    this._binding = binding;
  }

  BindingToSyntax.prototype.to = function (constructor) {
    this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Instance;
    this._binding.implementationType = constructor;
    return new _binding_in_when_on_syntax__WEBPACK_IMPORTED_MODULE_2__[/* BindingInWhenOnSyntax */ "a"](this._binding);
  };

  BindingToSyntax.prototype.toSelf = function () {
    if (typeof this._binding.serviceIdentifier !== "function") {
      throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* INVALID_TO_SELF_VALUE */ "p"]);
    }

    var self = this._binding.serviceIdentifier;
    return this.to(self);
  };

  BindingToSyntax.prototype.toConstantValue = function (value) {
    this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].ConstantValue;
    this._binding.cache = value;
    this._binding.dynamicValue = null;
    this._binding.implementationType = null;
    this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Singleton;
    return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__[/* BindingWhenOnSyntax */ "a"](this._binding);
  };

  BindingToSyntax.prototype.toDynamicValue = function (func) {
    this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].DynamicValue;
    this._binding.cache = null;
    this._binding.dynamicValue = func;
    this._binding.implementationType = null;
    return new _binding_in_when_on_syntax__WEBPACK_IMPORTED_MODULE_2__[/* BindingInWhenOnSyntax */ "a"](this._binding);
  };

  BindingToSyntax.prototype.toConstructor = function (constructor) {
    this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Constructor;
    this._binding.implementationType = constructor;
    this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Singleton;
    return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__[/* BindingWhenOnSyntax */ "a"](this._binding);
  };

  BindingToSyntax.prototype.toFactory = function (factory) {
    this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Factory;
    this._binding.factory = factory;
    this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Singleton;
    return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__[/* BindingWhenOnSyntax */ "a"](this._binding);
  };

  BindingToSyntax.prototype.toFunction = function (func) {
    if (typeof func !== "function") {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* INVALID_FUNCTION_BINDING */ "n"]);
    }

    var bindingWhenOnSyntax = this.toConstantValue(func);
    this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Function;
    this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Singleton;
    return bindingWhenOnSyntax;
  };

  BindingToSyntax.prototype.toAutoFactory = function (serviceIdentifier) {
    this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Factory;

    this._binding.factory = function (context) {
      var autofactory = function autofactory() {
        return context.container.get(serviceIdentifier);
      };

      return autofactory;
    };

    this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Singleton;
    return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__[/* BindingWhenOnSyntax */ "a"](this._binding);
  };

  BindingToSyntax.prototype.toProvider = function (provider) {
    this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Provider;
    this._binding.provider = provider;
    this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Singleton;
    return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__[/* BindingWhenOnSyntax */ "a"](this._binding);
  };

  BindingToSyntax.prototype.toService = function (service) {
    this.toDynamicValue(function (context) {
      return context.container.get(service);
    });
  };

  return BindingToSyntax;
}();



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_when_on_syntax.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_when_on_syntax.js ***!
  \*************************************************************************************/
/*! exports provided: BindingWhenOnSyntax */
/*! exports used: BindingWhenOnSyntax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingWhenOnSyntax; });
/* harmony import */ var _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_on_syntax */ "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_on_syntax.js");
/* harmony import */ var _binding_when_syntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding_when_syntax */ "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_when_syntax.js");



var BindingWhenOnSyntax = function () {
  function BindingWhenOnSyntax(binding) {
    this._binding = binding;
    this._bindingWhenSyntax = new _binding_when_syntax__WEBPACK_IMPORTED_MODULE_1__[/* BindingWhenSyntax */ "a"](this._binding);
    this._bindingOnSyntax = new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  }

  BindingWhenOnSyntax.prototype.when = function (constraint) {
    return this._bindingWhenSyntax.when(constraint);
  };

  BindingWhenOnSyntax.prototype.whenTargetNamed = function (name) {
    return this._bindingWhenSyntax.whenTargetNamed(name);
  };

  BindingWhenOnSyntax.prototype.whenTargetIsDefault = function () {
    return this._bindingWhenSyntax.whenTargetIsDefault();
  };

  BindingWhenOnSyntax.prototype.whenTargetTagged = function (tag, value) {
    return this._bindingWhenSyntax.whenTargetTagged(tag, value);
  };

  BindingWhenOnSyntax.prototype.whenInjectedInto = function (parent) {
    return this._bindingWhenSyntax.whenInjectedInto(parent);
  };

  BindingWhenOnSyntax.prototype.whenParentNamed = function (name) {
    return this._bindingWhenSyntax.whenParentNamed(name);
  };

  BindingWhenOnSyntax.prototype.whenParentTagged = function (tag, value) {
    return this._bindingWhenSyntax.whenParentTagged(tag, value);
  };

  BindingWhenOnSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
    return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
  };

  BindingWhenOnSyntax.prototype.whenNoAncestorIs = function (ancestor) {
    return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
  };

  BindingWhenOnSyntax.prototype.whenAnyAncestorNamed = function (name) {
    return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
  };

  BindingWhenOnSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
    return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
  };

  BindingWhenOnSyntax.prototype.whenNoAncestorNamed = function (name) {
    return this._bindingWhenSyntax.whenNoAncestorNamed(name);
  };

  BindingWhenOnSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
    return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
  };

  BindingWhenOnSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
    return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
  };

  BindingWhenOnSyntax.prototype.whenNoAncestorMatches = function (constraint) {
    return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
  };

  BindingWhenOnSyntax.prototype.onActivation = function (handler) {
    return this._bindingOnSyntax.onActivation(handler);
  };

  return BindingWhenOnSyntax;
}();



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_when_syntax.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_when_syntax.js ***!
  \**********************************************************************************/
/*! exports provided: BindingWhenSyntax */
/*! exports used: BindingWhenSyntax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingWhenSyntax; });
/* harmony import */ var _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_on_syntax */ "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_on_syntax.js");
/* harmony import */ var _constraint_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constraint_helpers */ "./node_modules/_inversify@5.1.1@inversify/es/syntax/constraint_helpers.js");



var BindingWhenSyntax = function () {
  function BindingWhenSyntax(binding) {
    this._binding = binding;
  }

  BindingWhenSyntax.prototype.when = function (constraint) {
    this._binding.constraint = constraint;
    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenTargetNamed = function (name) {
    this._binding.constraint = Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* namedConstraint */ "a"])(name);
    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenTargetIsDefault = function () {
    this._binding.constraint = function (request) {
      var targetIsDefault = request.target !== null && !request.target.isNamed() && !request.target.isTagged();
      return targetIsDefault;
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenTargetTagged = function (tag, value) {
    this._binding.constraint = Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* taggedConstraint */ "b"])(tag)(value);
    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenInjectedInto = function (parent) {
    this._binding.constraint = function (request) {
      return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* typeConstraint */ "d"])(parent)(request.parentRequest);
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenParentNamed = function (name) {
    this._binding.constraint = function (request) {
      return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* namedConstraint */ "a"])(name)(request.parentRequest);
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenParentTagged = function (tag, value) {
    this._binding.constraint = function (request) {
      return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* taggedConstraint */ "b"])(tag)(value)(request.parentRequest);
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
    this._binding.constraint = function (request) {
      return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* typeConstraint */ "d"])(ancestor));
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenNoAncestorIs = function (ancestor) {
    this._binding.constraint = function (request) {
      return !Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* typeConstraint */ "d"])(ancestor));
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenAnyAncestorNamed = function (name) {
    this._binding.constraint = function (request) {
      return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* namedConstraint */ "a"])(name));
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenNoAncestorNamed = function (name) {
    this._binding.constraint = function (request) {
      return !Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* namedConstraint */ "a"])(name));
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
    this._binding.constraint = function (request) {
      return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* taggedConstraint */ "b"])(tag)(value));
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
    this._binding.constraint = function (request) {
      return !Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* taggedConstraint */ "b"])(tag)(value));
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
    this._binding.constraint = function (request) {
      return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, constraint);
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenNoAncestorMatches = function (constraint) {
    this._binding.constraint = function (request) {
      return !Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, constraint);
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  return BindingWhenSyntax;
}();



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/syntax/constraint_helpers.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/syntax/constraint_helpers.js ***!
  \*********************************************************************************/
/*! exports provided: traverseAncerstors, taggedConstraint, namedConstraint, typeConstraint */
/*! exports used: namedConstraint, taggedConstraint, traverseAncerstors, typeConstraint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return traverseAncerstors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return taggedConstraint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return namedConstraint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return typeConstraint; });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js");



var traverseAncerstors = function traverseAncerstors(request, constraint) {
  var parent = request.parentRequest;

  if (parent !== null) {
    return constraint(parent) ? true : traverseAncerstors(parent, constraint);
  } else {
    return false;
  }
};

var taggedConstraint = function taggedConstraint(key) {
  return function (value) {
    var constraint = function constraint(request) {
      return request !== null && request.target !== null && request.target.matchesTag(key)(value);
    };

    constraint.metaData = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__[/* Metadata */ "a"](key, value);
    return constraint;
  };
};

var namedConstraint = taggedConstraint(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"]);

var typeConstraint = function typeConstraint(type) {
  return function (request) {
    var binding = null;

    if (request !== null) {
      binding = request.bindings[0];

      if (typeof type === "string") {
        var serviceIdentifier = binding.serviceIdentifier;
        return serviceIdentifier === type;
      } else {
        var constructor = request.bindings[0].implementationType;
        return type === constructor;
      }
    }

    return false;
  };
};



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/utils/binding_utils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/utils/binding_utils.js ***!
  \***************************************************************************/
/*! exports provided: multiBindToService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export multiBindToService */
var multiBindToService = function multiBindToService(container) {
  return function (service) {
    return function () {
      var types = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        types[_i] = arguments[_i];
      }

      return types.forEach(function (t) {
        return container.bind(t).toService(service);
      });
    };
  };
};

/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/utils/exceptions.js":
/*!************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/utils/exceptions.js ***!
  \************************************************************************/
/*! exports provided: isStackOverflowExeption */
/*! exports used: isStackOverflowExeption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isStackOverflowExeption; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");

function isStackOverflowExeption(error) {
  return error instanceof RangeError || error.message === _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* STACK_OVERFLOW */ "y"];
}

/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/utils/id.js":
/*!****************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/utils/id.js ***!
  \****************************************************************/
/*! exports provided: id */
/*! exports used: id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return id; });
var idCounter = 0;

function id() {
  return idCounter++;
}



/***/ }),

/***/ "./node_modules/_inversify@5.1.1@inversify/es/utils/serialization.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_inversify@5.1.1@inversify/es/utils/serialization.js ***!
  \***************************************************************************/
/*! exports provided: getFunctionName, getServiceIdentifierAsString, listRegisteredBindingsForServiceIdentifier, listMetadataForTarget, circularDependencyToException */
/*! exports used: circularDependencyToException, getFunctionName, getServiceIdentifierAsString, listMetadataForTarget, listRegisteredBindingsForServiceIdentifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFunctionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getServiceIdentifierAsString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return listRegisteredBindingsForServiceIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listMetadataForTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return circularDependencyToException; });
/* harmony import */ var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");



function getServiceIdentifierAsString(serviceIdentifier) {
  if (typeof serviceIdentifier === "function") {
    var _serviceIdentifier = serviceIdentifier;
    return _serviceIdentifier.name;
  } else if (Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(serviceIdentifier) === "symbol") {
    return serviceIdentifier.toString();
  } else {
    var _serviceIdentifier = serviceIdentifier;
    return _serviceIdentifier;
  }
}

function listRegisteredBindingsForServiceIdentifier(container, serviceIdentifier, getBindings) {
  var registeredBindingsList = "";
  var registeredBindings = getBindings(container, serviceIdentifier);

  if (registeredBindings.length !== 0) {
    registeredBindingsList = "\nRegistered bindings:";
    registeredBindings.forEach(function (binding) {
      var name = "Object";

      if (binding.implementationType !== null) {
        name = getFunctionName(binding.implementationType);
      }

      registeredBindingsList = registeredBindingsList + "\n " + name;

      if (binding.constraint.metaData) {
        registeredBindingsList = registeredBindingsList + " - " + binding.constraint.metaData;
      }
    });
  }

  return registeredBindingsList;
}

function alreadyDependencyChain(request, serviceIdentifier) {
  if (request.parentRequest === null) {
    return false;
  } else if (request.parentRequest.serviceIdentifier === serviceIdentifier) {
    return true;
  } else {
    return alreadyDependencyChain(request.parentRequest, serviceIdentifier);
  }
}

function dependencyChainToString(request) {
  function _createStringArr(req, result) {
    if (result === void 0) {
      result = [];
    }

    var serviceIdentifier = getServiceIdentifierAsString(req.serviceIdentifier);
    result.push(serviceIdentifier);

    if (req.parentRequest !== null) {
      return _createStringArr(req.parentRequest, result);
    }

    return result;
  }

  var stringArr = _createStringArr(request);

  return stringArr.reverse().join(" --> ");
}

function circularDependencyToException(request) {
  request.childRequests.forEach(function (childRequest) {
    if (alreadyDependencyChain(childRequest, childRequest.serviceIdentifier)) {
      var services = dependencyChainToString(childRequest);
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* CIRCULAR_DEPENDENCY */ "d"] + " " + services);
    } else {
      circularDependencyToException(childRequest);
    }
  });
}

function listMetadataForTarget(serviceIdentifierString, target) {
  if (target.isTagged() || target.isNamed()) {
    var m_1 = "";
    var namedTag = target.getNamedTag();
    var otherTags = target.getCustomTags();

    if (namedTag !== null) {
      m_1 += namedTag.toString() + "\n";
    }

    if (otherTags !== null) {
      otherTags.forEach(function (tag) {
        m_1 += tag.toString() + "\n";
      });
    }

    return " " + serviceIdentifierString + "\n " + serviceIdentifierString + " - " + m_1;
  } else {
    return " " + serviceIdentifierString;
  }
}

function getFunctionName(v) {
  if (v.name) {
    return v.name;
  } else {
    var name_1 = v.toString();
    var match = name_1.match(/^function\s*([^\s(]+)/);
    return match ? match[1] : "Anonymous function: " + name_1;
  }
}



/***/ }),

/***/ "./node_modules/_object-assign@4.1.1@object-assign/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/_object-assign@4.1.1@object-assign/index.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "./node_modules/_process@0.11.10@process/browser.js":
/*!**********************************************************!*\
  !*** ./node_modules/_process@0.11.10@process/browser.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_react@17.0.2@react/cjs/react.production.min.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/typeof.js");

var l = __webpack_require__(/*! object-assign */ "./node_modules/_object-assign@4.1.1@object-assign/index.js"),
    n = 60103,
    p = 60106;

exports.Fragment = 60107;
exports.StrictMode = 60108;
exports.Profiler = 60114;
var q = 60109,
    r = 60110,
    t = 60112;
exports.Suspense = 60113;
var u = 60115,
    v = 60116;

if ("function" === typeof Symbol && Symbol.for) {
  var w = Symbol.for;
  n = w("react.element");
  p = w("react.portal");
  exports.Fragment = w("react.fragment");
  exports.StrictMode = w("react.strict_mode");
  exports.Profiler = w("react.profiler");
  q = w("react.provider");
  r = w("react.context");
  t = w("react.forward_ref");
  exports.Suspense = w("react.suspense");
  u = w("react.memo");
  v = w("react.lazy");
}

var x = "function" === typeof Symbol && Symbol.iterator;

function y(a) {
  if (null === a || "object" !== _typeof(a)) return null;
  a = x && a[x] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}

function z(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  }

  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}

var A = {
  isMounted: function isMounted() {
    return !1;
  },
  enqueueForceUpdate: function enqueueForceUpdate() {},
  enqueueReplaceState: function enqueueReplaceState() {},
  enqueueSetState: function enqueueSetState() {}
},
    B = {};

function C(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B;
  this.updater = c || A;
}

C.prototype.isReactComponent = {};

C.prototype.setState = function (a, b) {
  if ("object" !== _typeof(a) && "function" !== typeof a && null != a) throw Error(z(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};

C.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function D() {}

D.prototype = C.prototype;

function E(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B;
  this.updater = c || A;
}

var F = E.prototype = new D();
F.constructor = E;
l(F, C.prototype);
F.isPureReactComponent = !0;
var G = {
  current: null
},
    H = Object.prototype.hasOwnProperty,
    I = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function J(a, b, c) {
  var e,
      d = {},
      k = null,
      h = null;
  if (null != b) for (e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) {
    H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
  }
  var g = arguments.length - 2;
  if (1 === g) d.children = c;else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++) {
      f[m] = arguments[m + 2];
    }

    d.children = f;
  }
  if (a && a.defaultProps) for (e in g = a.defaultProps, g) {
    void 0 === d[e] && (d[e] = g[e]);
  }
  return {
    $$typeof: n,
    type: a,
    key: k,
    ref: h,
    props: d,
    _owner: G.current
  };
}

function K(a, b) {
  return {
    $$typeof: n,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function L(a) {
  return "object" === _typeof(a) && null !== a && a.$$typeof === n;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + a.replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var M = /\/+/g;

function N(a, b) {
  return "object" === _typeof(a) && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}

function O(a, b, c, e, d) {
  var k = _typeof(a);

  if ("undefined" === k || "boolean" === k) a = null;
  var h = !1;
  if (null === a) h = !0;else switch (k) {
    case "string":
    case "number":
      h = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case n:
        case p:
          h = !0;
      }

  }
  if (h) return h = a, d = d(h), a = "" === e ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function (a) {
    return a;
  })) : null != d && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
  h = 0;
  e = "" === e ? "." : e + ":";
  if (Array.isArray(a)) for (var g = 0; g < a.length; g++) {
    k = a[g];
    var f = e + N(k, g);
    h += O(k, b, c, f, d);
  } else if (f = y(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) {
    k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);
  } else if ("object" === k) throw b = "" + a, Error(z(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
  return h;
}

function P(a, b, c) {
  if (null == a) return a;
  var e = [],
      d = 0;
  O(a, e, "", "", function (a) {
    return b.call(c, a, d++);
  });
  return e;
}

function Q(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    a._status = 0;
    a._result = b;
    b.then(function (b) {
      0 === a._status && (b = b.default, a._status = 1, a._result = b);
    }, function (b) {
      0 === a._status && (a._status = 2, a._result = b);
    });
  }

  if (1 === a._status) return a._result;
  throw a._result;
}

var R = {
  current: null
};

function S() {
  var a = R.current;
  if (null === a) throw Error(z(321));
  return a;
}

var T = {
  ReactCurrentDispatcher: R,
  ReactCurrentBatchConfig: {
    transition: 0
  },
  ReactCurrentOwner: G,
  IsSomeRendererActing: {
    current: !1
  },
  assign: l
};
exports.Children = {
  map: P,
  forEach: function forEach(a, b, c) {
    P(a, function () {
      b.apply(this, arguments);
    }, c);
  },
  count: function count(a) {
    var b = 0;
    P(a, function () {
      b++;
    });
    return b;
  },
  toArray: function toArray(a) {
    return P(a, function (a) {
      return a;
    }) || [];
  },
  only: function only(a) {
    if (!L(a)) throw Error(z(143));
    return a;
  }
};
exports.Component = C;
exports.PureComponent = E;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;

exports.cloneElement = function (a, b, c) {
  if (null === a || void 0 === a) throw Error(z(267, a));
  var e = l({}, a.props),
      d = a.key,
      k = a.ref,
      h = a._owner;

  if (null != b) {
    void 0 !== b.ref && (k = b.ref, h = G.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;

    for (f in b) {
      H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
  }

  var f = arguments.length - 2;
  if (1 === f) e.children = c;else if (1 < f) {
    g = Array(f);

    for (var m = 0; m < f; m++) {
      g[m] = arguments[m + 2];
    }

    e.children = g;
  }
  return {
    $$typeof: n,
    type: a.type,
    key: d,
    ref: k,
    props: e,
    _owner: h
  };
};

exports.createContext = function (a, b) {
  void 0 === b && (b = null);
  a = {
    $$typeof: r,
    _calculateChangedBits: b,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  a.Provider = {
    $$typeof: q,
    _context: a
  };
  return a.Consumer = a;
};

exports.createElement = J;

exports.createFactory = function (a) {
  var b = J.bind(null, a);
  b.type = a;
  return b;
};

exports.createRef = function () {
  return {
    current: null
  };
};

exports.forwardRef = function (a) {
  return {
    $$typeof: t,
    render: a
  };
};

exports.isValidElement = L;

exports.lazy = function (a) {
  return {
    $$typeof: v,
    _payload: {
      _status: -1,
      _result: a
    },
    _init: Q
  };
};

exports.memo = function (a, b) {
  return {
    $$typeof: u,
    type: a,
    compare: void 0 === b ? null : b
  };
};

exports.useCallback = function (a, b) {
  return S().useCallback(a, b);
};

exports.useContext = function (a, b) {
  return S().useContext(a, b);
};

exports.useDebugValue = function () {};

exports.useEffect = function (a, b) {
  return S().useEffect(a, b);
};

exports.useImperativeHandle = function (a, b, c) {
  return S().useImperativeHandle(a, b, c);
};

exports.useLayoutEffect = function (a, b) {
  return S().useLayoutEffect(a, b);
};

exports.useMemo = function (a, b) {
  return S().useMemo(a, b);
};

exports.useReducer = function (a, b, c) {
  return S().useReducer(a, b, c);
};

exports.useRef = function (a) {
  return S().useRef(a);
};

exports.useState = function (a) {
  return S().useState(a);
};

exports.version = "17.0.2";

/***/ }),

/***/ "./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime-module.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime-module.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = function () {
  return this;
}() || Function("return this")(); // Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.


var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0; // Save the old regeneratorRuntime in case it needs to be restored later.

var oldRuntime = hadRuntime && g.regeneratorRuntime; // Force reevalutation of runtime.js.

g.regeneratorRuntime = undefined;
module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch (e) {
    g.regeneratorRuntime = undefined;
  }
}

/***/ }),

/***/ "./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/typeof.js");

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var inModule = ( false ? undefined : _typeof(module)) === "object";
  var runtime = global.regeneratorRuntime;

  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    } // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.


    return;
  } // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.


  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  runtime.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  runtime.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  runtime.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  runtime.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
}( // In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this;
}() || Function("return this")());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../_webpack@4.46.0@webpack/buildin/module.js */ "./node_modules/_webpack@4.46.0@webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/_webpack@4.46.0@webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(window) {var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/_webpack@4.46.0@webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

}]);

},{}]},{},[1,2]);
