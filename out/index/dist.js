var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// taro/dist/runtime.js
var require_runtime = __commonJS({
  "taro/dist/runtime.js"() {
    (function(modules) {
      function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i2 = 0, resolves = [];
        for (; i2 < chunkIds.length; i2++) {
          chunkId = chunkIds[i2];
          if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
            resolves.push(installedChunks[chunkId][0]);
          }
          installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) {
          if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
            modules[moduleId] = moreModules[moduleId];
          }
        }
        if (parentJsonpFunction)
          parentJsonpFunction(data);
        while (resolves.length) {
          resolves.shift()();
        }
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
      }
      ;
      function checkDeferredModules() {
        var result;
        for (var i2 = 0; i2 < deferredModules.length; i2++) {
          var deferredModule = deferredModules[i2];
          var fulfilled = true;
          for (var j = 1; j < deferredModule.length; j++) {
            var depId = deferredModule[j];
            if (installedChunks[depId] !== 0)
              fulfilled = false;
          }
          if (fulfilled) {
            deferredModules.splice(i2--, 1);
            result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
          }
        }
        return result;
      }
      var installedModules = {};
      var installedChunks = {
        "runtime": 0
      };
      var deferredModules = [];
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, { enumerable: true, get: getter });
        }
      };
      __webpack_require__.r = function(exports2) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
        }
        Object.defineProperty(exports2, "__esModule", { value: true });
      };
      __webpack_require__.t = function(value, mode) {
        if (mode & 1)
          value = __webpack_require__(value);
        if (mode & 8)
          return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule)
          return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", { enumerable: true, value });
        if (mode & 2 && typeof value != "string")
          for (var key in value)
            __webpack_require__.d(ns, key, function(key2) {
              return value[key2];
            }.bind(null, key));
        return ns;
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? function getDefault() {
          return module2["default"];
        } : function getModuleExports() {
          return module2;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "/";
      var jsonpArray = wx["webpackJsonp"] = wx["webpackJsonp"] || [];
      var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
      jsonpArray.push = webpackJsonpCallback;
      jsonpArray = jsonpArray.slice();
      for (var i = 0; i < jsonpArray.length; i++)
        webpackJsonpCallback(jsonpArray[i]);
      var parentJsonpFunction = oldJsonpFunction;
      checkDeferredModules();
    })([]);
  }
});

// taro/dist/vendors.js
var require_vendors = __commonJS({
  "taro/dist/vendors.js"() {
    (wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["vendors"], {
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/arrayLikeToArray.js": function(module2, exports2) {
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
        module2.exports = _arrayLikeToArray;
        module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/arrayWithoutHoles.js": function(module2, exports2, __webpack_require__) {
        var arrayLikeToArray = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/arrayLikeToArray.js");
        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr))
            return arrayLikeToArray(arr);
        }
        module2.exports = _arrayWithoutHoles;
        module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/arrayLikeToArray.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _arrayLikeToArray;
        });
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/arrayWithHoles.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _arrayWithHoles;
        });
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/arrayWithoutHoles.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _arrayWithoutHoles;
        });
        var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/arrayLikeToArray.js");
        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr))
            return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["a"])(arr);
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/assertThisInitialized.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _assertThisInitialized;
        });
        function _assertThisInitialized(self2) {
          if (self2 === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self2;
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/asyncToGenerator.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _asyncToGenerator;
        });
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
          return function() {
            var self2 = this, args = arguments;
            return new Promise(function(resolve, reject) {
              var gen = fn.apply(self2, args);
              function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
              }
              function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
              }
              _next(void 0);
            });
          };
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/classCallCheck.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _classCallCheck;
        });
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/construct.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _construct;
        });
        var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/setPrototypeOf.js");
        var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
        function _construct(Parent, args, Class) {
          if (Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["a"])()) {
            _construct = Reflect.construct;
          } else {
            _construct = function _construct2(Parent2, args2, Class2) {
              var a = [null];
              a.push.apply(a, args2);
              var Constructor = Function.bind.apply(Parent2, a);
              var instance = new Constructor();
              if (Class2)
                Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["a"])(instance, Class2.prototype);
              return instance;
            };
          }
          return _construct.apply(null, arguments);
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/createClass.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _createClass;
        });
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/createSuper.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _createSuper;
        });
        var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/getPrototypeOf.js");
        var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
        var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
        function _createSuper(Derived) {
          var hasNativeReflectConstruct = Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["a"])();
          return function _createSuperInternal() {
            var Super = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["a"])(Derived), result;
            if (hasNativeReflectConstruct) {
              var NewTarget = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return Object(_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__["a"])(this, result);
          };
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/defineProperty.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _defineProperty;
        });
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/get.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _get;
        });
        var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/superPropBase.js");
        function _get(target, property, receiver) {
          if (typeof Reflect !== "undefined" && Reflect.get) {
            _get = Reflect.get;
          } else {
            _get = function _get2(target2, property2, receiver2) {
              var base = Object(_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__["a"])(target2, property2);
              if (!base)
                return;
              var desc = Object.getOwnPropertyDescriptor(base, property2);
              if (desc.get) {
                return desc.get.call(receiver2);
              }
              return desc.value;
            };
          }
          return _get(target, property, receiver || target);
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/getPrototypeOf.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _getPrototypeOf;
        });
        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
            return o2.__proto__ || Object.getPrototypeOf(o2);
          };
          return _getPrototypeOf(o);
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/inherits.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _inherits;
        });
        var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/setPrototypeOf.js");
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
          if (superClass)
            Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["a"])(subClass, superClass);
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/isNativeFunction.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _isNativeFunction;
        });
        function _isNativeFunction(fn) {
          return Function.toString.call(fn).indexOf("[native code]") !== -1;
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/isNativeReflectConstruct.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _isNativeReflectConstruct;
        });
        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy === "function")
            return true;
          try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            }));
            return true;
          } catch (e) {
            return false;
          }
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/iterableToArray.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _iterableToArray;
        });
        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
            return Array.from(iter);
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/iterableToArrayLimit.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _iterableToArrayLimit;
        });
        function _iterableToArrayLimit(arr, i) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null)
            return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/nonIterableRest.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _nonIterableRest;
        });
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/nonIterableSpread.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _nonIterableSpread;
        });
        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _possibleConstructorReturn;
        });
        var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/typeof.js");
        var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
        var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/assertThisInitialized.js");
        function _possibleConstructorReturn(self2, call) {
          if (call && (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(call) === "object" || typeof call === "function")) {
            return call;
          } else if (call !== void 0) {
            throw new TypeError("Derived constructors may only return object or undefined");
          }
          return Object(_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["a"])(self2);
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/set.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _set;
        });
        var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/superPropBase.js");
        var _defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/defineProperty.js");
        function set(target, property, value, receiver) {
          if (typeof Reflect !== "undefined" && Reflect.set) {
            set = Reflect.set;
          } else {
            set = function set2(target2, property2, value2, receiver2) {
              var base = Object(_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__["a"])(target2, property2);
              var desc;
              if (base) {
                desc = Object.getOwnPropertyDescriptor(base, property2);
                if (desc.set) {
                  desc.set.call(receiver2, value2);
                  return true;
                } else if (!desc.writable) {
                  return false;
                }
              }
              desc = Object.getOwnPropertyDescriptor(receiver2, property2);
              if (desc) {
                if (!desc.writable) {
                  return false;
                }
                desc.value = value2;
                Object.defineProperty(receiver2, property2, desc);
              } else {
                Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["a"])(receiver2, property2, value2);
              }
              return true;
            };
          }
          return set(target, property, value, receiver);
        }
        function _set(target, property, value, receiver, isStrict) {
          var s = set(target, property, value, receiver || target);
          if (!s && isStrict) {
            throw new Error("failed to set property");
          }
          return value;
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/setPrototypeOf.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _setPrototypeOf;
        });
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
            o2.__proto__ = p2;
            return o2;
          };
          return _setPrototypeOf(o, p);
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/slicedToArray.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _slicedToArray;
        });
        var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/arrayWithHoles.js");
        var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/iterableToArrayLimit.js");
        var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
        var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/nonIterableRest.js");
        function _slicedToArray(arr, i) {
          return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["a"])(arr) || Object(_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["a"])(arr, i) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["a"])(arr, i) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["a"])();
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/superPropBase.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _superPropBase;
        });
        var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/getPrototypeOf.js");
        function _superPropBase(object, property) {
          while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["a"])(object);
            if (object === null)
              break;
          }
          return object;
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/toArray.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _toArray;
        });
        var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/arrayWithHoles.js");
        var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/iterableToArray.js");
        var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
        var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/nonIterableRest.js");
        function _toArray(arr) {
          return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["a"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["a"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["a"])(arr) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["a"])();
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/toConsumableArray.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _toConsumableArray;
        });
        var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/arrayWithoutHoles.js");
        var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/iterableToArray.js");
        var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
        var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/nonIterableSpread.js");
        function _toConsumableArray(arr) {
          return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["a"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["a"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["a"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["a"])();
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/typeof.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _typeof;
        });
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof(obj);
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/unsupportedIterableToArray.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _unsupportedIterableToArray;
        });
        var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/arrayLikeToArray.js");
        function _unsupportedIterableToArray(o, minLen) {
          if (!o)
            return;
          if (typeof o === "string")
            return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["a"])(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor)
            n = o.constructor.name;
          if (n === "Map" || n === "Set")
            return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["a"])(o, minLen);
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/wrapNativeSuper.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _wrapNativeSuper;
        });
        var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/getPrototypeOf.js");
        var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/setPrototypeOf.js");
        var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/isNativeFunction.js");
        var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/construct.js");
        function _wrapNativeSuper(Class) {
          var _cache = typeof Map === "function" ? new Map() : void 0;
          _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
            if (Class2 === null || !Object(_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__["a"])(Class2))
              return Class2;
            if (typeof Class2 !== "function") {
              throw new TypeError("Super expression must either be null or a function");
            }
            if (typeof _cache !== "undefined") {
              if (_cache.has(Class2))
                return _cache.get(Class2);
              _cache.set(Class2, Wrapper);
            }
            function Wrapper() {
              return Object(_construct_js__WEBPACK_IMPORTED_MODULE_3__["a"])(Class2, arguments, Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this).constructor);
            }
            Wrapper.prototype = Object.create(Class2.prototype, {
              constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            return Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["a"])(Wrapper, Class2);
          };
          return _wrapNativeSuper(Class);
        }
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/iterableToArray.js": function(module2, exports2) {
        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
            return Array.from(iter);
        }
        module2.exports = _iterableToArray;
        module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/nonIterableSpread.js": function(module2, exports2) {
        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        module2.exports = _nonIterableSpread;
        module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/toConsumableArray.js": function(module2, exports2, __webpack_require__) {
        var arrayWithoutHoles = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/arrayWithoutHoles.js");
        var iterableToArray = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/iterableToArray.js");
        var unsupportedIterableToArray = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/unsupportedIterableToArray.js");
        var nonIterableSpread = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/nonIterableSpread.js");
        function _toConsumableArray(arr) {
          return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
        }
        module2.exports = _toConsumableArray;
        module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/typeof.js": function(module2, exports2) {
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            module2.exports = _typeof = function _typeof2(obj2) {
              return typeof obj2;
            };
            module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
          } else {
            module2.exports = _typeof = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
            module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
          }
          return _typeof(obj);
        }
        module2.exports = _typeof;
        module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/unsupportedIterableToArray.js": function(module2, exports2, __webpack_require__) {
        var arrayLikeToArray = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/arrayLikeToArray.js");
        function _unsupportedIterableToArray(o, minLen) {
          if (!o)
            return;
          if (typeof o === "string")
            return arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor)
            n = o.constructor.name;
          if (n === "Map" || n === "Set")
            return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return arrayLikeToArray(o, minLen);
        }
        module2.exports = _unsupportedIterableToArray;
        module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/regenerator/index.js": function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__("./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime-module.js");
      },
      "./node_modules/_inversify@5.1.1@inversify/es/annotation/decorator_utils.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return tagParameter;
        });
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return tagProperty;
        });
        var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
        var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
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
          var key = parameterIndex !== void 0 && isParameterDecorator ? parameterIndex.toString() : propertyName;
          if (isParameterDecorator && propertyName !== void 0) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__["m"]);
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
                throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__["k"] + " " + m.key.toString());
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
          return function(target, key) {
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
      },
      "./node_modules/_inversify@5.1.1@inversify/es/annotation/inject.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return LazyServiceIdentifer;
        });
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return inject;
        });
        var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
        var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
        var _planning_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js");
        var _decorator_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/annotation/decorator_utils.js");
        var LazyServiceIdentifer = function() {
          function LazyServiceIdentifer2(cb) {
            this._cb = cb;
          }
          LazyServiceIdentifer2.prototype.unwrap = function() {
            return this._cb();
          };
          return LazyServiceIdentifer2;
        }();
        function inject(serviceIdentifier) {
          return function(target, targetKey, index) {
            if (serviceIdentifier === void 0) {
              throw new Error(Object(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__["z"])(target.name));
            }
            var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_2__["a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["INJECT_TAG"], serviceIdentifier);
            if (typeof index === "number") {
              Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_3__["a"])(target, targetKey, index, metadata);
            } else {
              Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_3__["b"])(target, targetKey, metadata);
            }
          };
        }
      },
      "./node_modules/_inversify@5.1.1@inversify/es/annotation/injectable.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return injectable;
        });
        var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
        var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
        function injectable() {
          return function(target) {
            if (Reflect.hasOwnMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["PARAM_TYPES"], target)) {
              throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__["j"]);
            }
            var types = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["DESIGN_PARAM_TYPES"], target) || [];
            Reflect.defineMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["PARAM_TYPES"], types, target);
            return target;
          };
        }
      },
      "./node_modules/_inversify@5.1.1@inversify/es/annotation/multi_inject.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return multiInject;
        });
        var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
        var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js");
        var _decorator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/annotation/decorator_utils.js");
        function multiInject(serviceIdentifier) {
          return function(target, targetKey, index) {
            var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__["a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["MULTI_INJECT_TAG"], serviceIdentifier);
            if (typeof index === "number") {
              Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__["a"])(target, targetKey, index, metadata);
            } else {
              Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__["b"])(target, targetKey, metadata);
            }
          };
        }
      },
      "./node_modules/_inversify@5.1.1@inversify/es/annotation/named.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
        var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js");
        var _decorator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/annotation/decorator_utils.js");
        function named(name) {
          return function(target, targetKey, index) {
            var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__["a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"], name);
            if (typeof index === "number") {
              Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__["a"])(target, targetKey, index, metadata);
            } else {
              Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__["b"])(target, targetKey, metadata);
            }
          };
        }
      },
      "./node_modules/_inversify@5.1.1@inversify/es/annotation/optional.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return optional;
        });
        var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
        var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js");
        var _decorator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/annotation/decorator_utils.js");
        function optional() {
          return function(target, targetKey, index) {
            var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__["a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["OPTIONAL_TAG"], true);
            if (typeof index === "number") {
              Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__["a"])(target, targetKey, index, metadata);
            } else {
              Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__["b"])(target, targetKey, metadata);
            }
          };
        }
      },
      "./node_modules/_inversify@5.1.1@inversify/es/annotation/post_construct.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
        var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
        var _planning_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js");
        function postConstruct() {
          return function(target, propertyKey, descriptor) {
            var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_2__["a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["POST_CONSTRUCT"], propertyKey);
            if (Reflect.hasOwnMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["POST_CONSTRUCT"], target.constructor)) {
              throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__["t"]);
            }
            Reflect.defineMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["POST_CONSTRUCT"], metadata, target.constructor);
          };
        }
      },
      "./node_modules/_inversify@5.1.1@inversify/es/annotation/tagged.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        var _planning_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js");
        var _decorator_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/annotation/decorator_utils.js");
        function tagged(metadataKey, metadataValue) {
          return function(target, targetKey, index) {
            var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_0__["a"](metadataKey, metadataValue);
            if (typeof index === "number") {
              Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_1__["a"])(target, targetKey, index, metadata);
            } else {
              Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_1__["b"])(target, targetKey, metadata);
            }
          };
        }
      },
      "./node_modules/_inversify@5.1.1@inversify/es/annotation/target_name.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
        var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js");
        var _decorator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/annotation/decorator_utils.js");
        function targetName(name) {
          return function(target, targetKey, index) {
            var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__["a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAME_TAG"], name);
            Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__["a"])(target, targetKey, index, metadata);
          };
        }
      },
      "./node_modules/_inversify@5.1.1@inversify/es/annotation/unmanaged.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
        var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js");
        var _decorator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/annotation/decorator_utils.js");
        function unmanaged() {
          return function(target, targetKey, index) {
            var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__["a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["UNMANAGED_TAG"], true);
            Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__["a"])(target, targetKey, index, metadata);
          };
        }
      },
      "./node_modules/_inversify@5.1.1@inversify/es/bindings/binding.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return Binding;
        });
        var _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/literal_types.js");
        var _utils_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/utils/id.js");
        var Binding = function() {
          function Binding2(serviceIdentifier, scope) {
            this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_1__["a"])();
            this.activated = false;
            this.serviceIdentifier = serviceIdentifier;
            this.scope = scope;
            this.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__["b"].Invalid;
            this.constraint = function(request) {
              return true;
            };
            this.implementationType = null;
            this.cache = null;
            this.factory = null;
            this.provider = null;
            this.onActivation = null;
            this.dynamicValue = null;
          }
          Binding2.prototype.clone = function() {
            var clone = new Binding2(this.serviceIdentifier, this.scope);
            clone.activated = clone.scope === _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__["a"].Singleton ? this.activated : false;
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
          return Binding2;
        }();
      },
      "./node_modules/_inversify@5.1.1@inversify/es/bindings/binding_count.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return BindingCount;
        });
        var BindingCount = {
          MultipleBindingsAvailable: 2,
          NoBindingsAvailable: 0,
          OnlyOneBindingAvailable: 1
        };
      },
      "./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "j", function() {
          return DUPLICATED_INJECTABLE_DECORATOR;
        });
        __webpack_require__.d(__webpack_exports__, "k", function() {
          return DUPLICATED_METADATA;
        });
        __webpack_require__.d(__webpack_exports__, "w", function() {
          return NULL_ARGUMENT;
        });
        __webpack_require__.d(__webpack_exports__, "q", function() {
          return KEY_NOT_FOUND;
        });
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return AMBIGUOUS_MATCH;
        });
        __webpack_require__.d(__webpack_exports__, "c", function() {
          return CANNOT_UNBIND;
        });
        __webpack_require__.d(__webpack_exports__, "u", function() {
          return NOT_REGISTERED;
        });
        __webpack_require__.d(__webpack_exports__, "r", function() {
          return MISSING_INJECTABLE_ANNOTATION;
        });
        __webpack_require__.d(__webpack_exports__, "s", function() {
          return MISSING_INJECT_ANNOTATION;
        });
        __webpack_require__.d(__webpack_exports__, "z", function() {
          return UNDEFINED_INJECT_ANNOTATION;
        });
        __webpack_require__.d(__webpack_exports__, "d", function() {
          return CIRCULAR_DEPENDENCY;
        });
        __webpack_require__.d(__webpack_exports__, "l", function() {
          return INVALID_BINDING_TYPE;
        });
        __webpack_require__.d(__webpack_exports__, "v", function() {
          return NO_MORE_SNAPSHOTS_AVAILABLE;
        });
        __webpack_require__.d(__webpack_exports__, "o", function() {
          return INVALID_MIDDLEWARE_RETURN;
        });
        __webpack_require__.d(__webpack_exports__, "n", function() {
          return INVALID_FUNCTION_BINDING;
        });
        __webpack_require__.d(__webpack_exports__, "p", function() {
          return INVALID_TO_SELF_VALUE;
        });
        __webpack_require__.d(__webpack_exports__, "m", function() {
          return INVALID_DECORATOR_OPERATION;
        });
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return ARGUMENTS_LENGTH_MISMATCH;
        });
        __webpack_require__.d(__webpack_exports__, "i", function() {
          return CONTAINER_OPTIONS_MUST_BE_AN_OBJECT;
        });
        __webpack_require__.d(__webpack_exports__, "g", function() {
          return CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE;
        });
        __webpack_require__.d(__webpack_exports__, "f", function() {
          return CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE;
        });
        __webpack_require__.d(__webpack_exports__, "h", function() {
          return CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK;
        });
        __webpack_require__.d(__webpack_exports__, "t", function() {
          return MULTIPLE_POST_CONSTRUCT_METHODS;
        });
        __webpack_require__.d(__webpack_exports__, "x", function() {
          return POST_CONSTRUCT_ERROR;
        });
        __webpack_require__.d(__webpack_exports__, "e", function() {
          return CIRCULAR_DEPENDENCY_IN_FACTORY;
        });
        __webpack_require__.d(__webpack_exports__, "y", function() {
          return STACK_OVERFLOW;
        });
        var DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.";
        var DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:";
        var NULL_ARGUMENT = "NULL argument";
        var KEY_NOT_FOUND = "Key Not Found";
        var AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:";
        var CANNOT_UNBIND = "Could not unbind serviceIdentifier:";
        var NOT_REGISTERED = "No matching bindings found for serviceIdentifier:";
        var MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:";
        var MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:";
        var UNDEFINED_INJECT_ANNOTATION = function UNDEFINED_INJECT_ANNOTATION2(name) {
          return "@inject called with undefined this could mean that the class " + name + " has a circular dependency problem. You can use a LazyServiceIdentifer to  overcome this limitation.";
        };
        var CIRCULAR_DEPENDENCY = "Circular dependency found:";
        var NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet.";
        var INVALID_BINDING_TYPE = "Invalid binding type:";
        var NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.";
        var INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!";
        var INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!";
        var INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is used as service identifier";
        var INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.";
        var ARGUMENTS_LENGTH_MISMATCH = function ARGUMENTS_LENGTH_MISMATCH2() {
          var values = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
          }
          return "The number of constructor arguments in the derived class " + (values[0] + " must be >= than the number of constructor arguments of its base class.");
        };
        var CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options must be an object.";
        var CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = "Invalid Container option. Default scope must be a string ('singleton' or 'transient').";
        var CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must be a boolean";
        var CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must be a boolean";
        var MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class";
        var POST_CONSTRUCT_ERROR = function POST_CONSTRUCT_ERROR2() {
          var values = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
          }
          return "@postConstruct error in class " + values[0] + ": " + values[1];
        };
        var CIRCULAR_DEPENDENCY_IN_FACTORY = function CIRCULAR_DEPENDENCY_IN_FACTORY2() {
          var values = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
          }
          return "It looks like there is a circular dependency " + ("in one of the '" + values[0] + "' bindings. Please investigate bindings with") + ("service identifier '" + values[1] + "'.");
        };
        var STACK_OVERFLOW = "Maximum call stack size exceeded";
      },
      "./node_modules/_inversify@5.1.1@inversify/es/constants/literal_types.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return BindingScopeEnum;
        });
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return BindingTypeEnum;
        });
        __webpack_require__.d(__webpack_exports__, "c", function() {
          return TargetTypeEnum;
        });
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
      },
      "./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "NAMED_TAG", function() {
          return NAMED_TAG;
        });
        __webpack_require__.d(__webpack_exports__, "NAME_TAG", function() {
          return NAME_TAG;
        });
        __webpack_require__.d(__webpack_exports__, "UNMANAGED_TAG", function() {
          return UNMANAGED_TAG;
        });
        __webpack_require__.d(__webpack_exports__, "OPTIONAL_TAG", function() {
          return OPTIONAL_TAG;
        });
        __webpack_require__.d(__webpack_exports__, "INJECT_TAG", function() {
          return INJECT_TAG;
        });
        __webpack_require__.d(__webpack_exports__, "MULTI_INJECT_TAG", function() {
          return MULTI_INJECT_TAG;
        });
        __webpack_require__.d(__webpack_exports__, "TAGGED", function() {
          return TAGGED;
        });
        __webpack_require__.d(__webpack_exports__, "TAGGED_PROP", function() {
          return TAGGED_PROP;
        });
        __webpack_require__.d(__webpack_exports__, "PARAM_TYPES", function() {
          return PARAM_TYPES;
        });
        __webpack_require__.d(__webpack_exports__, "DESIGN_PARAM_TYPES", function() {
          return DESIGN_PARAM_TYPES;
        });
        __webpack_require__.d(__webpack_exports__, "POST_CONSTRUCT", function() {
          return POST_CONSTRUCT;
        });
        __webpack_require__.d(__webpack_exports__, "NON_CUSTOM_TAG_KEYS", function() {
          return NON_CUSTOM_TAG_KEYS;
        });
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
      },
      "./node_modules/_inversify@5.1.1@inversify/es/container/container.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return Container;
        });
        var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/typeof.js");
        var _bindings_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/bindings/binding.js");
        var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
        var _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/literal_types.js");
        var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
        var _planning_metadata_reader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/planning/metadata_reader.js");
        var _planning_planner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/planning/planner.js");
        var _resolution_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/resolution/resolver.js");
        var _syntax_binding_to_syntax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_to_syntax.js");
        var _utils_id__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/utils/id.js");
        var _utils_serialization__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/utils/serialization.js");
        var _container_snapshot__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/container/container_snapshot.js");
        var _lookup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/container/lookup.js");
        var __awaiter = function(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
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
        var __generator = function(thisArg, body) {
          var _ = {
            label: 0,
            sent: function sent() {
              if (t[0] & 1)
                throw t[1];
              return t[1];
            },
            trys: [],
            ops: []
          }, f, y, t, g;
          return g = {
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
          }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f)
              throw new TypeError("Generator is already executing.");
            while (_) {
              try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
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
                    if (t[2])
                      _.ops.pop();
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
            if (op[0] & 5)
              throw op[1];
            return {
              value: op[0] ? op[1] : void 0,
              done: true
            };
          }
        };
        var __spreadArray = function(to, from) {
          for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
            to[j] = from[i];
          }
          return to;
        };
        var Container = function() {
          function Container2(containerOptions) {
            this._appliedMiddleware = [];
            var options = containerOptions || {};
            if (Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["a"])(options) !== "object") {
              throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__["i"]);
            }
            if (options.defaultScope === void 0) {
              options.defaultScope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__["a"].Transient;
            } else if (options.defaultScope !== _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__["a"].Singleton && options.defaultScope !== _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__["a"].Transient && options.defaultScope !== _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__["a"].Request) {
              throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__["g"]);
            }
            if (options.autoBindInjectable === void 0) {
              options.autoBindInjectable = false;
            } else if (typeof options.autoBindInjectable !== "boolean") {
              throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__["f"]);
            }
            if (options.skipBaseClassChecks === void 0) {
              options.skipBaseClassChecks = false;
            } else if (typeof options.skipBaseClassChecks !== "boolean") {
              throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__["h"]);
            }
            this.options = {
              autoBindInjectable: options.autoBindInjectable,
              defaultScope: options.defaultScope,
              skipBaseClassChecks: options.skipBaseClassChecks
            };
            this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_9__["a"])();
            this._bindingDictionary = new _lookup__WEBPACK_IMPORTED_MODULE_12__["a"]();
            this._snapshots = [];
            this._middleware = null;
            this.parent = null;
            this._metadataReader = new _planning_metadata_reader__WEBPACK_IMPORTED_MODULE_5__["a"]();
          }
          Container2.merge = function(container1, container2) {
            var container3 = [];
            for (var _i = 2; _i < arguments.length; _i++) {
              container3[_i - 2] = arguments[_i];
            }
            var container = new Container2();
            var targetContainers = __spreadArray([container1, container2], container3).map(function(targetContainer) {
              return Object(_planning_planner__WEBPACK_IMPORTED_MODULE_6__["b"])(targetContainer);
            });
            var bindingDictionary = Object(_planning_planner__WEBPACK_IMPORTED_MODULE_6__["b"])(container);
            function copyDictionary(origin, destination) {
              origin.traverse(function(key, value) {
                value.forEach(function(binding) {
                  destination.add(binding.serviceIdentifier, binding.clone());
                });
              });
            }
            targetContainers.forEach(function(targetBindingDictionary) {
              copyDictionary(targetBindingDictionary, bindingDictionary);
            });
            return container;
          };
          Container2.prototype.load = function() {
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
          Container2.prototype.loadAsync = function() {
            var modules = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              modules[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function() {
              var getHelpers, _a, modules_2, currentModule, containerModuleHelpers;
              return __generator(this, function(_b) {
                switch (_b.label) {
                  case 0:
                    getHelpers = this._getContainerModuleHelpersFactory();
                    _a = 0, modules_2 = modules;
                    _b.label = 1;
                  case 1:
                    if (!(_a < modules_2.length))
                      return [3, 4];
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
          Container2.prototype.unload = function() {
            var _this = this;
            var modules = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              modules[_i] = arguments[_i];
            }
            var conditionFactory = function conditionFactory2(expected) {
              return function(item) {
                return item.moduleId === expected;
              };
            };
            modules.forEach(function(module3) {
              var condition = conditionFactory(module3.id);
              _this._bindingDictionary.removeByCondition(condition);
            });
          };
          Container2.prototype.bind = function(serviceIdentifier) {
            var scope = this.options.defaultScope || _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__["a"].Transient;
            var binding = new _bindings_binding__WEBPACK_IMPORTED_MODULE_1__["a"](serviceIdentifier, scope);
            this._bindingDictionary.add(serviceIdentifier, binding);
            return new _syntax_binding_to_syntax__WEBPACK_IMPORTED_MODULE_8__["a"](binding);
          };
          Container2.prototype.rebind = function(serviceIdentifier) {
            this.unbind(serviceIdentifier);
            return this.bind(serviceIdentifier);
          };
          Container2.prototype.unbind = function(serviceIdentifier) {
            try {
              this._bindingDictionary.remove(serviceIdentifier);
            } catch (e) {
              throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__["c"] + " " + Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_10__["c"])(serviceIdentifier));
            }
          };
          Container2.prototype.unbindAll = function() {
            this._bindingDictionary = new _lookup__WEBPACK_IMPORTED_MODULE_12__["a"]();
          };
          Container2.prototype.isBound = function(serviceIdentifier) {
            var bound = this._bindingDictionary.hasKey(serviceIdentifier);
            if (!bound && this.parent) {
              bound = this.parent.isBound(serviceIdentifier);
            }
            return bound;
          };
          Container2.prototype.isBoundNamed = function(serviceIdentifier, named) {
            return this.isBoundTagged(serviceIdentifier, _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_4__["NAMED_TAG"], named);
          };
          Container2.prototype.isBoundTagged = function(serviceIdentifier, key, value) {
            var bound = false;
            if (this._bindingDictionary.hasKey(serviceIdentifier)) {
              var bindings = this._bindingDictionary.get(serviceIdentifier);
              var request_1 = Object(_planning_planner__WEBPACK_IMPORTED_MODULE_6__["a"])(this, serviceIdentifier, key, value);
              bound = bindings.some(function(b) {
                return b.constraint(request_1);
              });
            }
            if (!bound && this.parent) {
              bound = this.parent.isBoundTagged(serviceIdentifier, key, value);
            }
            return bound;
          };
          Container2.prototype.snapshot = function() {
            this._snapshots.push(_container_snapshot__WEBPACK_IMPORTED_MODULE_11__["a"].of(this._bindingDictionary.clone(), this._middleware));
          };
          Container2.prototype.restore = function() {
            var snapshot = this._snapshots.pop();
            if (snapshot === void 0) {
              throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__["v"]);
            }
            this._bindingDictionary = snapshot.bindings;
            this._middleware = snapshot.middleware;
          };
          Container2.prototype.createChild = function(containerOptions) {
            var child = new Container2(containerOptions || this.options);
            child.parent = this;
            return child;
          };
          Container2.prototype.applyMiddleware = function() {
            var middlewares = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              middlewares[_i] = arguments[_i];
            }
            this._appliedMiddleware = this._appliedMiddleware.concat(middlewares);
            var initial = this._middleware ? this._middleware : this._planAndResolve();
            this._middleware = middlewares.reduce(function(prev, curr) {
              return curr(prev);
            }, initial);
          };
          Container2.prototype.applyCustomMetadataReader = function(metadataReader) {
            this._metadataReader = metadataReader;
          };
          Container2.prototype.get = function(serviceIdentifier) {
            return this._get(false, false, _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__["c"].Variable, serviceIdentifier);
          };
          Container2.prototype.getTagged = function(serviceIdentifier, key, value) {
            return this._get(false, false, _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__["c"].Variable, serviceIdentifier, key, value);
          };
          Container2.prototype.getNamed = function(serviceIdentifier, named) {
            return this.getTagged(serviceIdentifier, _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_4__["NAMED_TAG"], named);
          };
          Container2.prototype.getAll = function(serviceIdentifier) {
            return this._get(true, true, _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__["c"].Variable, serviceIdentifier);
          };
          Container2.prototype.getAllTagged = function(serviceIdentifier, key, value) {
            return this._get(false, true, _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__["c"].Variable, serviceIdentifier, key, value);
          };
          Container2.prototype.getAllNamed = function(serviceIdentifier, named) {
            return this.getAllTagged(serviceIdentifier, _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_4__["NAMED_TAG"], named);
          };
          Container2.prototype.resolve = function(constructorFunction) {
            var tempContainer = this.createChild();
            tempContainer.bind(constructorFunction).toSelf();
            this._appliedMiddleware.forEach(function(m) {
              tempContainer.applyMiddleware(m);
            });
            return tempContainer.get(constructorFunction);
          };
          Container2.prototype._getContainerModuleHelpersFactory = function() {
            var _this = this;
            var setModuleId = function setModuleId2(bindingToSyntax, moduleId) {
              bindingToSyntax._binding.moduleId = moduleId;
            };
            var getBindFunction = function getBindFunction2(moduleId) {
              return function(serviceIdentifier) {
                var _bind = _this.bind.bind(_this);
                var bindingToSyntax = _bind(serviceIdentifier);
                setModuleId(bindingToSyntax, moduleId);
                return bindingToSyntax;
              };
            };
            var getUnbindFunction = function getUnbindFunction2(moduleId) {
              return function(serviceIdentifier) {
                var _unbind = _this.unbind.bind(_this);
                _unbind(serviceIdentifier);
              };
            };
            var getIsboundFunction = function getIsboundFunction2(moduleId) {
              return function(serviceIdentifier) {
                var _isBound = _this.isBound.bind(_this);
                return _isBound(serviceIdentifier);
              };
            };
            var getRebindFunction = function getRebindFunction2(moduleId) {
              return function(serviceIdentifier) {
                var _rebind = _this.rebind.bind(_this);
                var bindingToSyntax = _rebind(serviceIdentifier);
                setModuleId(bindingToSyntax, moduleId);
                return bindingToSyntax;
              };
            };
            return function(mId) {
              return {
                bindFunction: getBindFunction(mId),
                isboundFunction: getIsboundFunction(mId),
                rebindFunction: getRebindFunction(mId),
                unbindFunction: getUnbindFunction(mId)
              };
            };
          };
          Container2.prototype._get = function(avoidConstraints, isMultiInject, targetType, serviceIdentifier, key, value) {
            var result = null;
            var defaultArgs = {
              avoidConstraints,
              contextInterceptor: function contextInterceptor(context) {
                return context;
              },
              isMultiInject,
              key,
              serviceIdentifier,
              targetType,
              value
            };
            if (this._middleware) {
              result = this._middleware(defaultArgs);
              if (result === void 0 || result === null) {
                throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__["o"]);
              }
            } else {
              result = this._planAndResolve()(defaultArgs);
            }
            return result;
          };
          Container2.prototype._planAndResolve = function() {
            var _this = this;
            return function(args) {
              var context = Object(_planning_planner__WEBPACK_IMPORTED_MODULE_6__["c"])(_this._metadataReader, _this, args.isMultiInject, args.targetType, args.serviceIdentifier, args.key, args.value, args.avoidConstraints);
              context = args.contextInterceptor(context);
              var result = Object(_resolution_resolver__WEBPACK_IMPORTED_MODULE_7__["a"])(context);
              return result;
            };
          };
          return Container2;
        }();
      },
      "./node_modules/_inversify@5.1.1@inversify/es/container/container_module.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return ContainerModule;
        });
        var _utils_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/utils/id.js");
        var ContainerModule = function() {
          function ContainerModule2(registry) {
            this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_0__["a"])();
            this.registry = registry;
          }
          return ContainerModule2;
        }();
        var AsyncContainerModule = function() {
          function AsyncContainerModule2(registry) {
            this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_0__["a"])();
            this.registry = registry;
          }
          return AsyncContainerModule2;
        }();
      },
      "./node_modules/_inversify@5.1.1@inversify/es/container/container_snapshot.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return ContainerSnapshot;
        });
        var ContainerSnapshot = function() {
          function ContainerSnapshot2() {
          }
          ContainerSnapshot2.of = function(bindings, middleware) {
            var snapshot = new ContainerSnapshot2();
            snapshot.bindings = bindings;
            snapshot.middleware = middleware;
            return snapshot;
          };
          return ContainerSnapshot2;
        }();
      },
      "./node_modules/_inversify@5.1.1@inversify/es/container/lookup.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return Lookup;
        });
        var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
        var Lookup = function() {
          function Lookup2() {
            this._map = new Map();
          }
          Lookup2.prototype.getMap = function() {
            return this._map;
          };
          Lookup2.prototype.add = function(serviceIdentifier, value) {
            if (serviceIdentifier === null || serviceIdentifier === void 0) {
              throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__["w"]);
            }
            if (value === null || value === void 0) {
              throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__["w"]);
            }
            var entry = this._map.get(serviceIdentifier);
            if (entry !== void 0) {
              entry.push(value);
              this._map.set(serviceIdentifier, entry);
            } else {
              this._map.set(serviceIdentifier, [value]);
            }
          };
          Lookup2.prototype.get = function(serviceIdentifier) {
            if (serviceIdentifier === null || serviceIdentifier === void 0) {
              throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__["w"]);
            }
            var entry = this._map.get(serviceIdentifier);
            if (entry !== void 0) {
              return entry;
            } else {
              throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__["q"]);
            }
          };
          Lookup2.prototype.remove = function(serviceIdentifier) {
            if (serviceIdentifier === null || serviceIdentifier === void 0) {
              throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__["w"]);
            }
            if (!this._map.delete(serviceIdentifier)) {
              throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__["q"]);
            }
          };
          Lookup2.prototype.removeByCondition = function(condition) {
            var _this = this;
            this._map.forEach(function(entries, key) {
              var updatedEntries = entries.filter(function(entry) {
                return !condition(entry);
              });
              if (updatedEntries.length > 0) {
                _this._map.set(key, updatedEntries);
              } else {
                _this._map.delete(key);
              }
            });
          };
          Lookup2.prototype.hasKey = function(serviceIdentifier) {
            if (serviceIdentifier === null || serviceIdentifier === void 0) {
              throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__["w"]);
            }
            return this._map.has(serviceIdentifier);
          };
          Lookup2.prototype.clone = function() {
            var copy = new Lookup2();
            this._map.forEach(function(value, key) {
              value.forEach(function(b) {
                return copy.add(key, b.clone());
              });
            });
            return copy;
          };
          Lookup2.prototype.traverse = function(func) {
            this._map.forEach(function(value, key) {
              func(key, value);
            });
          };
          return Lookup2;
        }();
      },
      "./node_modules/_inversify@5.1.1@inversify/es/inversify.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
        var _container_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/container/container.js");
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _container_container__WEBPACK_IMPORTED_MODULE_1__["a"];
        });
        var _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/literal_types.js");
        var _container_container_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/container/container_module.js");
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return _container_container_module__WEBPACK_IMPORTED_MODULE_3__["a"];
        });
        var _annotation_injectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/annotation/injectable.js");
        __webpack_require__.d(__webpack_exports__, "d", function() {
          return _annotation_injectable__WEBPACK_IMPORTED_MODULE_4__["a"];
        });
        var _annotation_tagged__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/annotation/tagged.js");
        var _annotation_named__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/annotation/named.js");
        var _annotation_inject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/annotation/inject.js");
        __webpack_require__.d(__webpack_exports__, "c", function() {
          return _annotation_inject__WEBPACK_IMPORTED_MODULE_7__["b"];
        });
        var _annotation_optional__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/annotation/optional.js");
        __webpack_require__.d(__webpack_exports__, "f", function() {
          return _annotation_optional__WEBPACK_IMPORTED_MODULE_8__["a"];
        });
        var _annotation_unmanaged__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/annotation/unmanaged.js");
        var _annotation_multi_inject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/annotation/multi_inject.js");
        __webpack_require__.d(__webpack_exports__, "e", function() {
          return _annotation_multi_inject__WEBPACK_IMPORTED_MODULE_10__["a"];
        });
        var _annotation_target_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/annotation/target_name.js");
        var _annotation_post_construct__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/annotation/post_construct.js");
        var _planning_metadata_reader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/planning/metadata_reader.js");
        var _utils_id__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/utils/id.js");
        var _annotation_decorator_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/annotation/decorator_utils.js");
        var _syntax_constraint_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/syntax/constraint_helpers.js");
        var _utils_serialization__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/utils/serialization.js");
        var _utils_binding_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/utils/binding_utils.js");
        var METADATA_KEY = _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__;
      },
      "./node_modules/_inversify@5.1.1@inversify/es/planning/context.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return Context;
        });
        var _utils_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/utils/id.js");
        var Context = function() {
          function Context2(container) {
            this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_0__["a"])();
            this.container = container;
          }
          Context2.prototype.addPlan = function(plan) {
            this.plan = plan;
          };
          Context2.prototype.setCurrentRequest = function(currentRequest) {
            this.currentRequest = currentRequest;
          };
          return Context2;
        }();
      },
      "./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return Metadata;
        });
        var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
        var Metadata = function() {
          function Metadata2(key, value) {
            this.key = key;
            this.value = value;
          }
          Metadata2.prototype.toString = function() {
            if (this.key === _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"]) {
              return "named: " + this.value.toString() + " ";
            } else {
              return "tagged: { key:" + this.key.toString() + ", value: " + this.value + " }";
            }
          };
          return Metadata2;
        }();
      },
      "./node_modules/_inversify@5.1.1@inversify/es/planning/metadata_reader.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return MetadataReader;
        });
        var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
        var MetadataReader = function() {
          function MetadataReader2() {
          }
          MetadataReader2.prototype.getConstructorMetadata = function(constructorFunc) {
            var compilerGeneratedMetadata = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["PARAM_TYPES"], constructorFunc);
            var userGeneratedMetadata = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["TAGGED"], constructorFunc);
            return {
              compilerGeneratedMetadata,
              userGeneratedMetadata: userGeneratedMetadata || {}
            };
          };
          MetadataReader2.prototype.getPropertiesMetadata = function(constructorFunc) {
            var userGeneratedMetadata = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["TAGGED_PROP"], constructorFunc) || [];
            return userGeneratedMetadata;
          };
          return MetadataReader2;
        }();
      },
      "./node_modules/_inversify@5.1.1@inversify/es/planning/plan.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return Plan;
        });
        var Plan = function() {
          function Plan2(parentContext, rootRequest) {
            this.parentContext = parentContext;
            this.rootRequest = rootRequest;
          }
          return Plan2;
        }();
      },
      "./node_modules/_inversify@5.1.1@inversify/es/planning/planner.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "c", function() {
          return plan;
        });
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return createMockRequest;
        });
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return getBindingDictionary;
        });
        var _bindings_binding_count__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/bindings/binding_count.js");
        var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
        var _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/literal_types.js");
        var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
        var _utils_exceptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/utils/exceptions.js");
        var _utils_serialization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/utils/serialization.js");
        var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/planning/context.js");
        var _metadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js");
        var _plan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/planning/plan.js");
        var _reflection_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/planning/reflection_utils.js");
        var _request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/planning/request.js");
        var _target__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/planning/target.js");
        function getBindingDictionary(cntnr) {
          return cntnr._bindingDictionary;
        }
        function _createTarget(isMultiInject, targetType, serviceIdentifier, name, key, value) {
          var metadataKey = isMultiInject ? _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["MULTI_INJECT_TAG"] : _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["INJECT_TAG"];
          var injectMetadata = new _metadata__WEBPACK_IMPORTED_MODULE_7__["a"](metadataKey, serviceIdentifier);
          var target = new _target__WEBPACK_IMPORTED_MODULE_11__["a"](targetType, name, serviceIdentifier, injectMetadata);
          if (key !== void 0) {
            var tagMetadata = new _metadata__WEBPACK_IMPORTED_MODULE_7__["a"](key, value);
            target.metadata.push(tagMetadata);
          }
          return target;
        }
        function _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target) {
          var bindings = getBindings(context.container, target.serviceIdentifier);
          var activeBindings = [];
          if (bindings.length === _bindings_binding_count__WEBPACK_IMPORTED_MODULE_0__["a"].NoBindingsAvailable && context.container.options.autoBindInjectable && typeof target.serviceIdentifier === "function" && metadataReader.getConstructorMetadata(target.serviceIdentifier).compilerGeneratedMetadata) {
            context.container.bind(target.serviceIdentifier).toSelf();
            bindings = getBindings(context.container, target.serviceIdentifier);
          }
          if (!avoidConstraints) {
            activeBindings = bindings.filter(function(binding) {
              var request = new _request__WEBPACK_IMPORTED_MODULE_10__["a"](binding.serviceIdentifier, context, parentRequest, binding, target);
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
            case _bindings_binding_count__WEBPACK_IMPORTED_MODULE_0__["a"].NoBindingsAvailable:
              if (target.isOptional()) {
                return bindings;
              } else {
                var serviceIdentifierString = Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__["c"])(serviceIdentifier);
                var msg = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__["u"];
                msg += Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__["d"])(serviceIdentifierString, target);
                msg += Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__["e"])(container, serviceIdentifierString, getBindings);
                throw new Error(msg);
              }
            case _bindings_binding_count__WEBPACK_IMPORTED_MODULE_0__["a"].OnlyOneBindingAvailable:
              if (!target.isArray()) {
                return bindings;
              }
            case _bindings_binding_count__WEBPACK_IMPORTED_MODULE_0__["a"].MultipleBindingsAvailable:
            default:
              if (!target.isArray()) {
                var serviceIdentifierString = Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__["c"])(serviceIdentifier);
                var msg = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__["a"] + " " + serviceIdentifierString;
                msg += Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__["e"])(container, serviceIdentifierString, getBindings);
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
            childRequest = new _request__WEBPACK_IMPORTED_MODULE_10__["a"](serviceIdentifier, context, null, activeBindings, target);
            var thePlan = new _plan__WEBPACK_IMPORTED_MODULE_8__["a"](context, childRequest);
            context.addPlan(thePlan);
          } else {
            activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target);
            childRequest = parentRequest.addChildRequest(target.serviceIdentifier, activeBindings, target);
          }
          activeBindings.forEach(function(binding) {
            var subChildRequest = null;
            if (target.isArray()) {
              subChildRequest = childRequest.addChildRequest(binding.serviceIdentifier, binding, target);
            } else {
              if (binding.cache) {
                return;
              }
              subChildRequest = childRequest;
            }
            if (binding.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__["b"].Instance && binding.implementationType !== null) {
              var dependencies = Object(_reflection_utils__WEBPACK_IMPORTED_MODULE_9__["b"])(metadataReader, binding.implementationType);
              if (!context.container.options.skipBaseClassChecks) {
                var baseClassDependencyCount = Object(_reflection_utils__WEBPACK_IMPORTED_MODULE_9__["a"])(metadataReader, binding.implementationType);
                if (dependencies.length < baseClassDependencyCount) {
                  var error = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__["b"](Object(_reflection_utils__WEBPACK_IMPORTED_MODULE_9__["c"])(binding.implementationType));
                  throw new Error(error);
                }
              }
              dependencies.forEach(function(dependency) {
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
          var context = new _context__WEBPACK_IMPORTED_MODULE_6__["a"](container);
          var target = _createTarget(isMultiInject, targetType, serviceIdentifier, "", key, value);
          try {
            _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, null, target);
            return context;
          } catch (error) {
            if (Object(_utils_exceptions__WEBPACK_IMPORTED_MODULE_4__["a"])(error)) {
              if (context.plan) {
                Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__["a"])(context.plan.rootRequest);
              }
            }
            throw error;
          }
        }
        function createMockRequest(container, serviceIdentifier, key, value) {
          var target = new _target__WEBPACK_IMPORTED_MODULE_11__["a"](_constants_literal_types__WEBPACK_IMPORTED_MODULE_2__["c"].Variable, "", serviceIdentifier, new _metadata__WEBPACK_IMPORTED_MODULE_7__["a"](key, value));
          var context = new _context__WEBPACK_IMPORTED_MODULE_6__["a"](container);
          var request = new _request__WEBPACK_IMPORTED_MODULE_10__["a"](serviceIdentifier, context, null, [], target);
          return request;
        }
      },
      "./node_modules/_inversify@5.1.1@inversify/es/planning/queryable_string.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return QueryableString;
        });
        var QueryableString = function() {
          function QueryableString2(str) {
            this.str = str;
          }
          QueryableString2.prototype.startsWith = function(searchString) {
            return this.str.indexOf(searchString) === 0;
          };
          QueryableString2.prototype.endsWith = function(searchString) {
            var reverseString = "";
            var reverseSearchString = searchString.split("").reverse().join("");
            reverseString = this.str.split("").reverse().join("");
            return this.startsWith.call({
              str: reverseString
            }, reverseSearchString);
          };
          QueryableString2.prototype.contains = function(searchString) {
            return this.str.indexOf(searchString) !== -1;
          };
          QueryableString2.prototype.equals = function(compareString) {
            return this.str === compareString;
          };
          QueryableString2.prototype.value = function() {
            return this.str;
          };
          return QueryableString2;
        }();
      },
      "./node_modules/_inversify@5.1.1@inversify/es/planning/reflection_utils.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return getDependencies;
        });
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return getBaseClassDependencyCount;
        });
        var _annotation_inject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/annotation/inject.js");
        var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
        var _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/literal_types.js");
        var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
        var _utils_serialization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/utils/serialization.js");
        __webpack_require__.d(__webpack_exports__, "c", function() {
          return _utils_serialization__WEBPACK_IMPORTED_MODULE_4__["b"];
        });
        var _target__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/planning/target.js");
        var __spreadArray = function(to, from) {
          for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
            to[j] = from[i];
          }
          return to;
        };
        function getDependencies(metadataReader, func) {
          var constructorName = Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_4__["b"])(func);
          var targets = getTargets(metadataReader, constructorName, func, false);
          return targets;
        }
        function getTargets(metadataReader, constructorName, func, isBaseClass) {
          var metadata = metadataReader.getConstructorMetadata(func);
          var serviceIdentifiers = metadata.compilerGeneratedMetadata;
          if (serviceIdentifiers === void 0) {
            var msg = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__["r"] + " " + constructorName + ".";
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
          if (serviceIdentifier instanceof _annotation_inject__WEBPACK_IMPORTED_MODULE_0__["a"]) {
            serviceIdentifier = serviceIdentifier.unwrap();
          }
          if (isManaged) {
            var isObject = serviceIdentifier === Object;
            var isFunction = serviceIdentifier === Function;
            var isUndefined = serviceIdentifier === void 0;
            var isUnknownType = isObject || isFunction || isUndefined;
            if (!isBaseClass && isUnknownType) {
              var msg = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__["s"] + " argument " + index + " in class " + constructorName + ".";
              throw new Error(msg);
            }
            var target = new _target__WEBPACK_IMPORTED_MODULE_5__["a"](_constants_literal_types__WEBPACK_IMPORTED_MODULE_2__["c"].ConstructorArgument, metadata.targetName, serviceIdentifier);
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
            var target = new _target__WEBPACK_IMPORTED_MODULE_5__["a"](_constants_literal_types__WEBPACK_IMPORTED_MODULE_2__["c"].ClassProperty, targetName, serviceIdentifier);
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
            var baseConstructorName = Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_4__["b"])(baseConstructor);
            var targets = getTargets(metadataReader, baseConstructorName, baseConstructor, true);
            var metadata = targets.map(function(t) {
              return t.metadata.filter(function(m) {
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
          targetMetadata.forEach(function(m) {
            targetMetadataMap[m.key.toString()] = m.value;
          });
          return {
            inject: targetMetadataMap[_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["INJECT_TAG"]],
            multiInject: targetMetadataMap[_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["MULTI_INJECT_TAG"]],
            targetName: targetMetadataMap[_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["NAME_TAG"]],
            unmanaged: targetMetadataMap[_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["UNMANAGED_TAG"]]
          };
        }
      },
      "./node_modules/_inversify@5.1.1@inversify/es/planning/request.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return Request;
        });
        var _utils_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/utils/id.js");
        var Request = function() {
          function Request2(serviceIdentifier, parentContext, parentRequest, bindings, target) {
            this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_0__["a"])();
            this.serviceIdentifier = serviceIdentifier;
            this.parentContext = parentContext;
            this.parentRequest = parentRequest;
            this.target = target;
            this.childRequests = [];
            this.bindings = Array.isArray(bindings) ? bindings : [bindings];
            this.requestScope = parentRequest === null ? new Map() : null;
          }
          Request2.prototype.addChildRequest = function(serviceIdentifier, bindings, target) {
            var child = new Request2(serviceIdentifier, this.parentContext, this, bindings, target);
            this.childRequests.push(child);
            return child;
          };
          return Request2;
        }();
      },
      "./node_modules/_inversify@5.1.1@inversify/es/planning/target.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return Target;
        });
        var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
        var _utils_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/utils/id.js");
        var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js");
        var _queryable_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/planning/queryable_string.js");
        var Target = function() {
          function Target2(type, name, serviceIdentifier, namedOrTagged) {
            this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_1__["a"])();
            this.type = type;
            this.serviceIdentifier = serviceIdentifier;
            this.name = new _queryable_string__WEBPACK_IMPORTED_MODULE_3__["a"](name || "");
            this.metadata = new Array();
            var metadataItem = null;
            if (typeof namedOrTagged === "string") {
              metadataItem = new _metadata__WEBPACK_IMPORTED_MODULE_2__["a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"], namedOrTagged);
            } else if (namedOrTagged instanceof _metadata__WEBPACK_IMPORTED_MODULE_2__["a"]) {
              metadataItem = namedOrTagged;
            }
            if (metadataItem !== null) {
              this.metadata.push(metadataItem);
            }
          }
          Target2.prototype.hasTag = function(key) {
            for (var _i = 0, _a = this.metadata; _i < _a.length; _i++) {
              var m = _a[_i];
              if (m.key === key) {
                return true;
              }
            }
            return false;
          };
          Target2.prototype.isArray = function() {
            return this.hasTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["MULTI_INJECT_TAG"]);
          };
          Target2.prototype.matchesArray = function(name) {
            return this.matchesTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["MULTI_INJECT_TAG"])(name);
          };
          Target2.prototype.isNamed = function() {
            return this.hasTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"]);
          };
          Target2.prototype.isTagged = function() {
            return this.metadata.some(function(metadata) {
              return _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NON_CUSTOM_TAG_KEYS"].every(function(key) {
                return metadata.key !== key;
              });
            });
          };
          Target2.prototype.isOptional = function() {
            return this.matchesTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["OPTIONAL_TAG"])(true);
          };
          Target2.prototype.getNamedTag = function() {
            if (this.isNamed()) {
              return this.metadata.filter(function(m) {
                return m.key === _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"];
              })[0];
            }
            return null;
          };
          Target2.prototype.getCustomTags = function() {
            if (this.isTagged()) {
              return this.metadata.filter(function(metadata) {
                return _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NON_CUSTOM_TAG_KEYS"].every(function(key) {
                  return metadata.key !== key;
                });
              });
            } else {
              return null;
            }
          };
          Target2.prototype.matchesNamedTag = function(name) {
            return this.matchesTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"])(name);
          };
          Target2.prototype.matchesTag = function(key) {
            var _this = this;
            return function(value) {
              for (var _i = 0, _a = _this.metadata; _i < _a.length; _i++) {
                var m = _a[_i];
                if (m.key === key && m.value === value) {
                  return true;
                }
              }
              return false;
            };
          };
          return Target2;
        }();
      },
      "./node_modules/_inversify@5.1.1@inversify/es/resolution/instantiation.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return resolveInstance;
        });
        var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
        var _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/literal_types.js");
        var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
        var __spreadArray = function(to, from) {
          for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
            to[j] = from[i];
          }
          return to;
        };
        function _injectProperties(instance, childRequests, resolveRequest) {
          var propertyInjectionsRequests = childRequests.filter(function(childRequest) {
            return childRequest.target !== null && childRequest.target.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["c"].ClassProperty;
          });
          var propertyInjections = propertyInjectionsRequests.map(resolveRequest);
          propertyInjectionsRequests.forEach(function(r, index) {
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
              throw new Error(Object(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__["x"])(constr.name, e.message));
            }
          }
        }
        function resolveInstance(constr, childRequests, resolveRequest) {
          var result = null;
          if (childRequests.length > 0) {
            var constructorInjectionsRequests = childRequests.filter(function(childRequest) {
              return childRequest.target !== null && childRequest.target.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["c"].ConstructorArgument;
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
      },
      "./node_modules/_inversify@5.1.1@inversify/es/resolution/resolver.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return resolve;
        });
        var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
        var _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/literal_types.js");
        var _utils_exceptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/utils/exceptions.js");
        var _utils_serialization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/utils/serialization.js");
        var _instantiation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/resolution/instantiation.js");
        var invokeFactory = function invokeFactory2(factoryType, serviceIdentifier, fn) {
          try {
            return fn();
          } catch (error) {
            if (Object(_utils_exceptions__WEBPACK_IMPORTED_MODULE_2__["a"])(error)) {
              throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__["e"](factoryType, serviceIdentifier.toString()));
            } else {
              throw error;
            }
          }
        };
        var _resolveRequest = function _resolveRequest2(requestScope) {
          return function(request) {
            request.parentContext.setCurrentRequest(request);
            var bindings = request.bindings;
            var childRequests = request.childRequests;
            var targetIsAnArray = request.target && request.target.isArray();
            var targetParentIsNotAnArray = !request.parentRequest || !request.parentRequest.target || !request.target || !request.parentRequest.target.matchesArray(request.target.serviceIdentifier);
            if (targetIsAnArray && targetParentIsNotAnArray) {
              return childRequests.map(function(childRequest) {
                var _f = _resolveRequest2(requestScope);
                return _f(childRequest);
              });
            } else {
              var result = null;
              if (request.target.isOptional() && bindings.length === 0) {
                return void 0;
              }
              var binding_1 = bindings[0];
              var isSingleton = binding_1.scope === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["a"].Singleton;
              var isRequestSingleton = binding_1.scope === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["a"].Request;
              if (isSingleton && binding_1.activated) {
                return binding_1.cache;
              }
              if (isRequestSingleton && requestScope !== null && requestScope.has(binding_1.id)) {
                return requestScope.get(binding_1.id);
              }
              if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["b"].ConstantValue) {
                result = binding_1.cache;
                binding_1.activated = true;
              } else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["b"].Function) {
                result = binding_1.cache;
                binding_1.activated = true;
              } else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["b"].Constructor) {
                result = binding_1.implementationType;
              } else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["b"].DynamicValue && binding_1.dynamicValue !== null) {
                result = invokeFactory("toDynamicValue", binding_1.serviceIdentifier, function() {
                  return binding_1.dynamicValue(request.parentContext);
                });
              } else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["b"].Factory && binding_1.factory !== null) {
                result = invokeFactory("toFactory", binding_1.serviceIdentifier, function() {
                  return binding_1.factory(request.parentContext);
                });
              } else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["b"].Provider && binding_1.provider !== null) {
                result = invokeFactory("toProvider", binding_1.serviceIdentifier, function() {
                  return binding_1.provider(request.parentContext);
                });
              } else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["b"].Instance && binding_1.implementationType !== null) {
                result = Object(_instantiation__WEBPACK_IMPORTED_MODULE_4__["a"])(binding_1.implementationType, childRequests, _resolveRequest2(requestScope));
              } else {
                var serviceIdentifier = Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_3__["c"])(request.serviceIdentifier);
                throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__["l"] + " " + serviceIdentifier);
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
      },
      "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_in_syntax.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return BindingInSyntax;
        });
        var _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/literal_types.js");
        var _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_when_on_syntax.js");
        var BindingInSyntax = function() {
          function BindingInSyntax2(binding) {
            this._binding = binding;
          }
          BindingInSyntax2.prototype.inRequestScope = function() {
            this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__["a"].Request;
            return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__["a"](this._binding);
          };
          BindingInSyntax2.prototype.inSingletonScope = function() {
            this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__["a"].Singleton;
            return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__["a"](this._binding);
          };
          BindingInSyntax2.prototype.inTransientScope = function() {
            this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__["a"].Transient;
            return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__["a"](this._binding);
          };
          return BindingInSyntax2;
        }();
      },
      "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_in_when_on_syntax.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return BindingInWhenOnSyntax;
        });
        var _binding_in_syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_in_syntax.js");
        var _binding_on_syntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_on_syntax.js");
        var _binding_when_syntax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_when_syntax.js");
        var BindingInWhenOnSyntax = function() {
          function BindingInWhenOnSyntax2(binding) {
            this._binding = binding;
            this._bindingWhenSyntax = new _binding_when_syntax__WEBPACK_IMPORTED_MODULE_2__["a"](this._binding);
            this._bindingOnSyntax = new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_1__["a"](this._binding);
            this._bindingInSyntax = new _binding_in_syntax__WEBPACK_IMPORTED_MODULE_0__["a"](binding);
          }
          BindingInWhenOnSyntax2.prototype.inRequestScope = function() {
            return this._bindingInSyntax.inRequestScope();
          };
          BindingInWhenOnSyntax2.prototype.inSingletonScope = function() {
            return this._bindingInSyntax.inSingletonScope();
          };
          BindingInWhenOnSyntax2.prototype.inTransientScope = function() {
            return this._bindingInSyntax.inTransientScope();
          };
          BindingInWhenOnSyntax2.prototype.when = function(constraint) {
            return this._bindingWhenSyntax.when(constraint);
          };
          BindingInWhenOnSyntax2.prototype.whenTargetNamed = function(name) {
            return this._bindingWhenSyntax.whenTargetNamed(name);
          };
          BindingInWhenOnSyntax2.prototype.whenTargetIsDefault = function() {
            return this._bindingWhenSyntax.whenTargetIsDefault();
          };
          BindingInWhenOnSyntax2.prototype.whenTargetTagged = function(tag, value) {
            return this._bindingWhenSyntax.whenTargetTagged(tag, value);
          };
          BindingInWhenOnSyntax2.prototype.whenInjectedInto = function(parent) {
            return this._bindingWhenSyntax.whenInjectedInto(parent);
          };
          BindingInWhenOnSyntax2.prototype.whenParentNamed = function(name) {
            return this._bindingWhenSyntax.whenParentNamed(name);
          };
          BindingInWhenOnSyntax2.prototype.whenParentTagged = function(tag, value) {
            return this._bindingWhenSyntax.whenParentTagged(tag, value);
          };
          BindingInWhenOnSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
            return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
          };
          BindingInWhenOnSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
            return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
          };
          BindingInWhenOnSyntax2.prototype.whenAnyAncestorNamed = function(name) {
            return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
          };
          BindingInWhenOnSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
            return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
          };
          BindingInWhenOnSyntax2.prototype.whenNoAncestorNamed = function(name) {
            return this._bindingWhenSyntax.whenNoAncestorNamed(name);
          };
          BindingInWhenOnSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
            return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
          };
          BindingInWhenOnSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
            return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
          };
          BindingInWhenOnSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
            return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
          };
          BindingInWhenOnSyntax2.prototype.onActivation = function(handler) {
            return this._bindingOnSyntax.onActivation(handler);
          };
          return BindingInWhenOnSyntax2;
        }();
      },
      "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_on_syntax.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return BindingOnSyntax;
        });
        var _binding_when_syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_when_syntax.js");
        var BindingOnSyntax = function() {
          function BindingOnSyntax2(binding) {
            this._binding = binding;
          }
          BindingOnSyntax2.prototype.onActivation = function(handler) {
            this._binding.onActivation = handler;
            return new _binding_when_syntax__WEBPACK_IMPORTED_MODULE_0__["a"](this._binding);
          };
          return BindingOnSyntax2;
        }();
      },
      "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_to_syntax.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return BindingToSyntax;
        });
        var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
        var _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/literal_types.js");
        var _binding_in_when_on_syntax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_in_when_on_syntax.js");
        var _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_when_on_syntax.js");
        var BindingToSyntax = function() {
          function BindingToSyntax2(binding) {
            this._binding = binding;
          }
          BindingToSyntax2.prototype.to = function(constructor) {
            this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["b"].Instance;
            this._binding.implementationType = constructor;
            return new _binding_in_when_on_syntax__WEBPACK_IMPORTED_MODULE_2__["a"](this._binding);
          };
          BindingToSyntax2.prototype.toSelf = function() {
            if (typeof this._binding.serviceIdentifier !== "function") {
              throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__["p"]);
            }
            var self2 = this._binding.serviceIdentifier;
            return this.to(self2);
          };
          BindingToSyntax2.prototype.toConstantValue = function(value) {
            this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["b"].ConstantValue;
            this._binding.cache = value;
            this._binding.dynamicValue = null;
            this._binding.implementationType = null;
            this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["a"].Singleton;
            return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__["a"](this._binding);
          };
          BindingToSyntax2.prototype.toDynamicValue = function(func) {
            this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["b"].DynamicValue;
            this._binding.cache = null;
            this._binding.dynamicValue = func;
            this._binding.implementationType = null;
            return new _binding_in_when_on_syntax__WEBPACK_IMPORTED_MODULE_2__["a"](this._binding);
          };
          BindingToSyntax2.prototype.toConstructor = function(constructor) {
            this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["b"].Constructor;
            this._binding.implementationType = constructor;
            this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["a"].Singleton;
            return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__["a"](this._binding);
          };
          BindingToSyntax2.prototype.toFactory = function(factory) {
            this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["b"].Factory;
            this._binding.factory = factory;
            this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["a"].Singleton;
            return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__["a"](this._binding);
          };
          BindingToSyntax2.prototype.toFunction = function(func) {
            if (typeof func !== "function") {
              throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__["n"]);
            }
            var bindingWhenOnSyntax = this.toConstantValue(func);
            this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["b"].Function;
            this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["a"].Singleton;
            return bindingWhenOnSyntax;
          };
          BindingToSyntax2.prototype.toAutoFactory = function(serviceIdentifier) {
            this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["b"].Factory;
            this._binding.factory = function(context) {
              var autofactory = function autofactory2() {
                return context.container.get(serviceIdentifier);
              };
              return autofactory;
            };
            this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["a"].Singleton;
            return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__["a"](this._binding);
          };
          BindingToSyntax2.prototype.toProvider = function(provider) {
            this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["b"].Provider;
            this._binding.provider = provider;
            this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__["a"].Singleton;
            return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__["a"](this._binding);
          };
          BindingToSyntax2.prototype.toService = function(service) {
            this.toDynamicValue(function(context) {
              return context.container.get(service);
            });
          };
          return BindingToSyntax2;
        }();
      },
      "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_when_on_syntax.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return BindingWhenOnSyntax;
        });
        var _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_on_syntax.js");
        var _binding_when_syntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_when_syntax.js");
        var BindingWhenOnSyntax = function() {
          function BindingWhenOnSyntax2(binding) {
            this._binding = binding;
            this._bindingWhenSyntax = new _binding_when_syntax__WEBPACK_IMPORTED_MODULE_1__["a"](this._binding);
            this._bindingOnSyntax = new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__["a"](this._binding);
          }
          BindingWhenOnSyntax2.prototype.when = function(constraint) {
            return this._bindingWhenSyntax.when(constraint);
          };
          BindingWhenOnSyntax2.prototype.whenTargetNamed = function(name) {
            return this._bindingWhenSyntax.whenTargetNamed(name);
          };
          BindingWhenOnSyntax2.prototype.whenTargetIsDefault = function() {
            return this._bindingWhenSyntax.whenTargetIsDefault();
          };
          BindingWhenOnSyntax2.prototype.whenTargetTagged = function(tag, value) {
            return this._bindingWhenSyntax.whenTargetTagged(tag, value);
          };
          BindingWhenOnSyntax2.prototype.whenInjectedInto = function(parent) {
            return this._bindingWhenSyntax.whenInjectedInto(parent);
          };
          BindingWhenOnSyntax2.prototype.whenParentNamed = function(name) {
            return this._bindingWhenSyntax.whenParentNamed(name);
          };
          BindingWhenOnSyntax2.prototype.whenParentTagged = function(tag, value) {
            return this._bindingWhenSyntax.whenParentTagged(tag, value);
          };
          BindingWhenOnSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
            return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
          };
          BindingWhenOnSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
            return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
          };
          BindingWhenOnSyntax2.prototype.whenAnyAncestorNamed = function(name) {
            return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
          };
          BindingWhenOnSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
            return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
          };
          BindingWhenOnSyntax2.prototype.whenNoAncestorNamed = function(name) {
            return this._bindingWhenSyntax.whenNoAncestorNamed(name);
          };
          BindingWhenOnSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
            return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
          };
          BindingWhenOnSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
            return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
          };
          BindingWhenOnSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
            return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
          };
          BindingWhenOnSyntax2.prototype.onActivation = function(handler) {
            return this._bindingOnSyntax.onActivation(handler);
          };
          return BindingWhenOnSyntax2;
        }();
      },
      "./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_when_syntax.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return BindingWhenSyntax;
        });
        var _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/syntax/binding_on_syntax.js");
        var _constraint_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/syntax/constraint_helpers.js");
        var BindingWhenSyntax = function() {
          function BindingWhenSyntax2(binding) {
            this._binding = binding;
          }
          BindingWhenSyntax2.prototype.when = function(constraint) {
            this._binding.constraint = constraint;
            return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__["a"](this._binding);
          };
          BindingWhenSyntax2.prototype.whenTargetNamed = function(name) {
            this._binding.constraint = Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__["a"])(name);
            return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__["a"](this._binding);
          };
          BindingWhenSyntax2.prototype.whenTargetIsDefault = function() {
            this._binding.constraint = function(request) {
              var targetIsDefault = request.target !== null && !request.target.isNamed() && !request.target.isTagged();
              return targetIsDefault;
            };
            return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__["a"](this._binding);
          };
          BindingWhenSyntax2.prototype.whenTargetTagged = function(tag, value) {
            this._binding.constraint = Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__["b"])(tag)(value);
            return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__["a"](this._binding);
          };
          BindingWhenSyntax2.prototype.whenInjectedInto = function(parent) {
            this._binding.constraint = function(request) {
              return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__["d"])(parent)(request.parentRequest);
            };
            return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__["a"](this._binding);
          };
          BindingWhenSyntax2.prototype.whenParentNamed = function(name) {
            this._binding.constraint = function(request) {
              return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__["a"])(name)(request.parentRequest);
            };
            return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__["a"](this._binding);
          };
          BindingWhenSyntax2.prototype.whenParentTagged = function(tag, value) {
            this._binding.constraint = function(request) {
              return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__["b"])(tag)(value)(request.parentRequest);
            };
            return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__["a"](this._binding);
          };
          BindingWhenSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
            this._binding.constraint = function(request) {
              return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__["c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__["d"])(ancestor));
            };
            return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__["a"](this._binding);
          };
          BindingWhenSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
            this._binding.constraint = function(request) {
              return !Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__["c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__["d"])(ancestor));
            };
            return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__["a"](this._binding);
          };
          BindingWhenSyntax2.prototype.whenAnyAncestorNamed = function(name) {
            this._binding.constraint = function(request) {
              return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__["c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__["a"])(name));
            };
            return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__["a"](this._binding);
          };
          BindingWhenSyntax2.prototype.whenNoAncestorNamed = function(name) {
            this._binding.constraint = function(request) {
              return !Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__["c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__["a"])(name));
            };
            return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__["a"](this._binding);
          };
          BindingWhenSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
            this._binding.constraint = function(request) {
              return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__["c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__["b"])(tag)(value));
            };
            return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__["a"](this._binding);
          };
          BindingWhenSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
            this._binding.constraint = function(request) {
              return !Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__["c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__["b"])(tag)(value));
            };
            return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__["a"](this._binding);
          };
          BindingWhenSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
            this._binding.constraint = function(request) {
              return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__["c"])(request, constraint);
            };
            return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__["a"](this._binding);
          };
          BindingWhenSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
            this._binding.constraint = function(request) {
              return !Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__["c"])(request, constraint);
            };
            return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__["a"](this._binding);
          };
          return BindingWhenSyntax2;
        }();
      },
      "./node_modules/_inversify@5.1.1@inversify/es/syntax/constraint_helpers.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "c", function() {
          return traverseAncerstors;
        });
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return taggedConstraint;
        });
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return namedConstraint;
        });
        __webpack_require__.d(__webpack_exports__, "d", function() {
          return typeConstraint;
        });
        var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/metadata_keys.js");
        var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/planning/metadata.js");
        var traverseAncerstors = function traverseAncerstors2(request, constraint) {
          var parent = request.parentRequest;
          if (parent !== null) {
            return constraint(parent) ? true : traverseAncerstors2(parent, constraint);
          } else {
            return false;
          }
        };
        var taggedConstraint = function taggedConstraint2(key) {
          return function(value) {
            var constraint = function constraint2(request) {
              return request !== null && request.target !== null && request.target.matchesTag(key)(value);
            };
            constraint.metaData = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__["a"](key, value);
            return constraint;
          };
        };
        var namedConstraint = taggedConstraint(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"]);
        var typeConstraint = function typeConstraint2(type) {
          return function(request) {
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
      },
      "./node_modules/_inversify@5.1.1@inversify/es/utils/binding_utils.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        var multiBindToService = function multiBindToService2(container) {
          return function(service) {
            return function() {
              var types = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                types[_i] = arguments[_i];
              }
              return types.forEach(function(t) {
                return container.bind(t).toService(service);
              });
            };
          };
        };
      },
      "./node_modules/_inversify@5.1.1@inversify/es/utils/exceptions.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return isStackOverflowExeption;
        });
        var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
        function isStackOverflowExeption(error) {
          return error instanceof RangeError || error.message === _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__["y"];
        }
      },
      "./node_modules/_inversify@5.1.1@inversify/es/utils/id.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return id;
        });
        var idCounter = 0;
        function id() {
          return idCounter++;
        }
      },
      "./node_modules/_inversify@5.1.1@inversify/es/utils/serialization.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return getFunctionName;
        });
        __webpack_require__.d(__webpack_exports__, "c", function() {
          return getServiceIdentifierAsString;
        });
        __webpack_require__.d(__webpack_exports__, "e", function() {
          return listRegisteredBindingsForServiceIdentifier;
        });
        __webpack_require__.d(__webpack_exports__, "d", function() {
          return listMetadataForTarget;
        });
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return circularDependencyToException;
        });
        var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/typeof.js");
        var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
        function getServiceIdentifierAsString(serviceIdentifier) {
          if (typeof serviceIdentifier === "function") {
            var _serviceIdentifier = serviceIdentifier;
            return _serviceIdentifier.name;
          } else if (Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["a"])(serviceIdentifier) === "symbol") {
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
            registeredBindings.forEach(function(binding) {
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
          request.childRequests.forEach(function(childRequest) {
            if (alreadyDependencyChain(childRequest, childRequest.serviceIdentifier)) {
              var services = dependencyChainToString(childRequest);
              throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__["d"] + " " + services);
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
              otherTags.forEach(function(tag) {
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
      },
      "./node_modules/_object-assign@4.1.1@object-assign/index.js": function(module2, exports2, __webpack_require__) {
        "use strict";
        var getOwnPropertySymbols = Object.getOwnPropertySymbols;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var propIsEnumerable = Object.prototype.propertyIsEnumerable;
        function toObject(val) {
          if (val === null || val === void 0) {
            throw new TypeError("Object.assign cannot be called with null or undefined");
          }
          return Object(val);
        }
        function shouldUseNative() {
          try {
            if (!Object.assign) {
              return false;
            }
            var test1 = new String("abc");
            test1[5] = "de";
            if (Object.getOwnPropertyNames(test1)[0] === "5") {
              return false;
            }
            var test2 = {};
            for (var i = 0; i < 10; i++) {
              test2["_" + String.fromCharCode(i)] = i;
            }
            var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
              return test2[n];
            });
            if (order2.join("") !== "0123456789") {
              return false;
            }
            var test3 = {};
            "abcdefghijklmnopqrst".split("").forEach(function(letter) {
              test3[letter] = letter;
            });
            if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
              return false;
            }
            return true;
          } catch (err) {
            return false;
          }
        }
        module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
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
      },
      "./node_modules/_process@0.11.10@process/browser.js": function(module2, exports2) {
        var process = module2.exports = {};
        var cachedSetTimeout;
        var cachedClearTimeout;
        function defaultSetTimout() {
          throw new Error("setTimeout has not been defined");
        }
        function defaultClearTimeout() {
          throw new Error("clearTimeout has not been defined");
        }
        (function() {
          try {
            if (typeof setTimeout === "function") {
              cachedSetTimeout = setTimeout;
            } else {
              cachedSetTimeout = defaultSetTimout;
            }
          } catch (e) {
            cachedSetTimeout = defaultSetTimout;
          }
          try {
            if (typeof clearTimeout === "function") {
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
            return setTimeout(fun, 0);
          }
          if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
          }
          try {
            return cachedSetTimeout(fun, 0);
          } catch (e) {
            try {
              return cachedSetTimeout.call(null, fun, 0);
            } catch (e2) {
              return cachedSetTimeout.call(this, fun, 0);
            }
          }
        }
        function runClearTimeout(marker) {
          if (cachedClearTimeout === clearTimeout) {
            return clearTimeout(marker);
          }
          if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
          }
          try {
            return cachedClearTimeout(marker);
          } catch (e) {
            try {
              return cachedClearTimeout.call(null, marker);
            } catch (e2) {
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
        process.nextTick = function(fun) {
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
        };
        function Item(fun, array) {
          this.fun = fun;
          this.array = array;
        }
        Item.prototype.run = function() {
          this.fun.apply(null, this.array);
        };
        process.title = "browser";
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = "";
        process.versions = {};
        function noop() {
        }
        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.prependListener = noop;
        process.prependOnceListener = noop;
        process.listeners = function(name) {
          return [];
        };
        process.binding = function(name) {
          throw new Error("process.binding is not supported");
        };
        process.cwd = function() {
          return "/";
        };
        process.chdir = function(dir) {
          throw new Error("process.chdir is not supported");
        };
        process.umask = function() {
          return 0;
        };
      },
      "./node_modules/_react@17.0.2@react/cjs/react.production.min.js": function(module2, exports2, __webpack_require__) {
        "use strict";
        var _typeof = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/typeof.js");
        var l = __webpack_require__("./node_modules/_object-assign@4.1.1@object-assign/index.js"), n = 60103, p = 60106;
        exports2.Fragment = 60107;
        exports2.StrictMode = 60108;
        exports2.Profiler = 60114;
        var q = 60109, r = 60110, t = 60112;
        exports2.Suspense = 60113;
        var u = 60115, v = 60116;
        if (typeof Symbol === "function" && Symbol.for) {
          var w = Symbol.for;
          n = w("react.element");
          p = w("react.portal");
          exports2.Fragment = w("react.fragment");
          exports2.StrictMode = w("react.strict_mode");
          exports2.Profiler = w("react.profiler");
          q = w("react.provider");
          r = w("react.context");
          t = w("react.forward_ref");
          exports2.Suspense = w("react.suspense");
          u = w("react.memo");
          v = w("react.lazy");
        }
        var x = typeof Symbol === "function" && Symbol.iterator;
        function y(a) {
          if (a === null || _typeof(a) !== "object")
            return null;
          a = x && a[x] || a["@@iterator"];
          return typeof a === "function" ? a : null;
        }
        function z(a) {
          for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
            b += "&args[]=" + encodeURIComponent(arguments[c]);
          }
          return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        var A = {
          isMounted: function isMounted() {
            return false;
          },
          enqueueForceUpdate: function enqueueForceUpdate() {
          },
          enqueueReplaceState: function enqueueReplaceState() {
          },
          enqueueSetState: function enqueueSetState() {
          }
        }, B = {};
        function C(a, b, c) {
          this.props = a;
          this.context = b;
          this.refs = B;
          this.updater = c || A;
        }
        C.prototype.isReactComponent = {};
        C.prototype.setState = function(a, b) {
          if (_typeof(a) !== "object" && typeof a !== "function" && a != null)
            throw Error(z(85));
          this.updater.enqueueSetState(this, a, b, "setState");
        };
        C.prototype.forceUpdate = function(a) {
          this.updater.enqueueForceUpdate(this, a, "forceUpdate");
        };
        function D() {
        }
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
        F.isPureReactComponent = true;
        var G = {
          current: null
        }, H = Object.prototype.hasOwnProperty, I = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        function J(a, b, c) {
          var e, d = {}, k = null, h = null;
          if (b != null)
            for (e in b.ref !== void 0 && (h = b.ref), b.key !== void 0 && (k = "" + b.key), b) {
              H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
            }
          var g = arguments.length - 2;
          if (g === 1)
            d.children = c;
          else if (1 < g) {
            for (var f = Array(g), m = 0; m < g; m++) {
              f[m] = arguments[m + 2];
            }
            d.children = f;
          }
          if (a && a.defaultProps)
            for (e in g = a.defaultProps, g) {
              d[e] === void 0 && (d[e] = g[e]);
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
          return _typeof(a) === "object" && a !== null && a.$$typeof === n;
        }
        function escape(a) {
          var b = {
            "=": "=0",
            ":": "=2"
          };
          return "$" + a.replace(/[=:]/g, function(a2) {
            return b[a2];
          });
        }
        var M = /\/+/g;
        function N(a, b) {
          return _typeof(a) === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
        }
        function O(a, b, c, e, d) {
          var k = _typeof(a);
          if (k === "undefined" || k === "boolean")
            a = null;
          var h = false;
          if (a === null)
            h = true;
          else
            switch (k) {
              case "string":
              case "number":
                h = true;
                break;
              case "object":
                switch (a.$$typeof) {
                  case n:
                  case p:
                    h = true;
                }
            }
          if (h)
            return h = a, d = d(h), a = e === "" ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", a != null && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function(a2) {
              return a2;
            })) : d != null && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
          h = 0;
          e = e === "" ? "." : e + ":";
          if (Array.isArray(a))
            for (var g = 0; g < a.length; g++) {
              k = a[g];
              var f = e + N(k, g);
              h += O(k, b, c, f, d);
            }
          else if (f = y(a), typeof f === "function")
            for (a = f.call(a), g = 0; !(k = a.next()).done; ) {
              k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);
            }
          else if (k === "object")
            throw b = "" + a, Error(z(31, b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
          return h;
        }
        function P(a, b, c) {
          if (a == null)
            return a;
          var e = [], d = 0;
          O(a, e, "", "", function(a2) {
            return b.call(c, a2, d++);
          });
          return e;
        }
        function Q(a) {
          if (a._status === -1) {
            var b = a._result;
            b = b();
            a._status = 0;
            a._result = b;
            b.then(function(b2) {
              a._status === 0 && (b2 = b2.default, a._status = 1, a._result = b2);
            }, function(b2) {
              a._status === 0 && (a._status = 2, a._result = b2);
            });
          }
          if (a._status === 1)
            return a._result;
          throw a._result;
        }
        var R = {
          current: null
        };
        function S() {
          var a = R.current;
          if (a === null)
            throw Error(z(321));
          return a;
        }
        var T = {
          ReactCurrentDispatcher: R,
          ReactCurrentBatchConfig: {
            transition: 0
          },
          ReactCurrentOwner: G,
          IsSomeRendererActing: {
            current: false
          },
          assign: l
        };
        exports2.Children = {
          map: P,
          forEach: function forEach(a, b, c) {
            P(a, function() {
              b.apply(this, arguments);
            }, c);
          },
          count: function count(a) {
            var b = 0;
            P(a, function() {
              b++;
            });
            return b;
          },
          toArray: function toArray(a) {
            return P(a, function(a2) {
              return a2;
            }) || [];
          },
          only: function only(a) {
            if (!L(a))
              throw Error(z(143));
            return a;
          }
        };
        exports2.Component = C;
        exports2.PureComponent = E;
        exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;
        exports2.cloneElement = function(a, b, c) {
          if (a === null || a === void 0)
            throw Error(z(267, a));
          var e = l({}, a.props), d = a.key, k = a.ref, h = a._owner;
          if (b != null) {
            b.ref !== void 0 && (k = b.ref, h = G.current);
            b.key !== void 0 && (d = "" + b.key);
            if (a.type && a.type.defaultProps)
              var g = a.type.defaultProps;
            for (f in b) {
              H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = b[f] === void 0 && g !== void 0 ? g[f] : b[f]);
            }
          }
          var f = arguments.length - 2;
          if (f === 1)
            e.children = c;
          else if (1 < f) {
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
        exports2.createContext = function(a, b) {
          b === void 0 && (b = null);
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
        exports2.createElement = J;
        exports2.createFactory = function(a) {
          var b = J.bind(null, a);
          b.type = a;
          return b;
        };
        exports2.createRef = function() {
          return {
            current: null
          };
        };
        exports2.forwardRef = function(a) {
          return {
            $$typeof: t,
            render: a
          };
        };
        exports2.isValidElement = L;
        exports2.lazy = function(a) {
          return {
            $$typeof: v,
            _payload: {
              _status: -1,
              _result: a
            },
            _init: Q
          };
        };
        exports2.memo = function(a, b) {
          return {
            $$typeof: u,
            type: a,
            compare: b === void 0 ? null : b
          };
        };
        exports2.useCallback = function(a, b) {
          return S().useCallback(a, b);
        };
        exports2.useContext = function(a, b) {
          return S().useContext(a, b);
        };
        exports2.useDebugValue = function() {
        };
        exports2.useEffect = function(a, b) {
          return S().useEffect(a, b);
        };
        exports2.useImperativeHandle = function(a, b, c) {
          return S().useImperativeHandle(a, b, c);
        };
        exports2.useLayoutEffect = function(a, b) {
          return S().useLayoutEffect(a, b);
        };
        exports2.useMemo = function(a, b) {
          return S().useMemo(a, b);
        };
        exports2.useReducer = function(a, b, c) {
          return S().useReducer(a, b, c);
        };
        exports2.useRef = function(a) {
          return S().useRef(a);
        };
        exports2.useState = function(a) {
          return S().useState(a);
        };
        exports2.version = "17.0.2";
      },
      "./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime-module.js": function(module2, exports2, __webpack_require__) {
        var g = function() {
          return this;
        }() || Function("return this")();
        var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
        var oldRuntime = hadRuntime && g.regeneratorRuntime;
        g.regeneratorRuntime = void 0;
        module2.exports = __webpack_require__("./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime.js");
        if (hadRuntime) {
          g.regeneratorRuntime = oldRuntime;
        } else {
          try {
            delete g.regeneratorRuntime;
          } catch (e) {
            g.regeneratorRuntime = void 0;
          }
        }
      },
      "./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime.js": function(module2, exports2, __webpack_require__) {
        (function(module3) {
          var _typeof = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/typeof.js");
          !function(global) {
            "use strict";
            var Op = Object.prototype;
            var hasOwn = Op.hasOwnProperty;
            var undefined2;
            var $Symbol = typeof Symbol === "function" ? Symbol : {};
            var iteratorSymbol = $Symbol.iterator || "@@iterator";
            var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
            var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
            var inModule = (false ? undefined2 : _typeof(module3)) === "object";
            var runtime = global.regeneratorRuntime;
            if (runtime) {
              if (inModule) {
                module3.exports = runtime;
              }
              return;
            }
            runtime = global.regeneratorRuntime = inModule ? module3.exports : {};
            function wrap(innerFn, outerFn, self2, tryLocsList) {
              var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
              var generator = Object.create(protoGenerator.prototype);
              var context = new Context(tryLocsList || []);
              generator._invoke = makeInvokeMethod(innerFn, self2, context);
              return generator;
            }
            runtime.wrap = wrap;
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
            var GenStateCompleted = "completed";
            var ContinueSentinel = {};
            function Generator() {
            }
            function GeneratorFunction() {
            }
            function GeneratorFunctionPrototype() {
            }
            var IteratorPrototype = {};
            IteratorPrototype[iteratorSymbol] = function() {
              return this;
            };
            var getProto = Object.getPrototypeOf;
            var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
            if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
              IteratorPrototype = NativeIteratorPrototype;
            }
            var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
            GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
            GeneratorFunctionPrototype.constructor = GeneratorFunction;
            GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
            function defineIteratorMethods(prototype) {
              ["next", "throw", "return"].forEach(function(method) {
                prototype[method] = function(arg) {
                  return this._invoke(method, arg);
                };
              });
            }
            runtime.isGeneratorFunction = function(genFun) {
              var ctor = typeof genFun === "function" && genFun.constructor;
              return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
            };
            runtime.mark = function(genFun) {
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
            };
            runtime.awrap = function(arg) {
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
                    return Promise.resolve(value.__await).then(function(value2) {
                      invoke("next", value2, resolve, reject);
                    }, function(err) {
                      invoke("throw", err, resolve, reject);
                    });
                  }
                  return Promise.resolve(value).then(function(unwrapped) {
                    result.value = unwrapped;
                    resolve(result);
                  }, reject);
                }
              }
              var previousPromise;
              function enqueue(method, arg) {
                function callInvokeWithMethodAndArg() {
                  return new Promise(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                  });
                }
                return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
              }
              this._invoke = enqueue;
            }
            defineIteratorMethods(AsyncIterator.prototype);
            AsyncIterator.prototype[asyncIteratorSymbol] = function() {
              return this;
            };
            runtime.AsyncIterator = AsyncIterator;
            runtime.async = function(innerFn, outerFn, self2, tryLocsList) {
              var iter = new AsyncIterator(wrap(innerFn, outerFn, self2, tryLocsList));
              return runtime.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
                return result.done ? result.value : iter.next();
              });
            };
            function makeInvokeMethod(innerFn, self2, context) {
              var state = GenStateSuspendedStart;
              return function invoke(method, arg) {
                if (state === GenStateExecuting) {
                  throw new Error("Generator is already running");
                }
                if (state === GenStateCompleted) {
                  if (method === "throw") {
                    throw arg;
                  }
                  return doneResult();
                }
                context.method = method;
                context.arg = arg;
                while (true) {
                  var delegate = context.delegate;
                  if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                      if (delegateResult === ContinueSentinel)
                        continue;
                      return delegateResult;
                    }
                  }
                  if (context.method === "next") {
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
                  var record = tryCatch(innerFn, self2, context);
                  if (record.type === "normal") {
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) {
                      continue;
                    }
                    return {
                      value: record.arg,
                      done: context.done
                    };
                  } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    context.method = "throw";
                    context.arg = record.arg;
                  }
                }
              };
            }
            function maybeInvokeDelegate(delegate, context) {
              var method = delegate.iterator[context.method];
              if (method === undefined2) {
                context.delegate = null;
                if (context.method === "throw") {
                  if (delegate.iterator.return) {
                    context.method = "return";
                    context.arg = undefined2;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") {
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
                context[delegate.resultName] = info.value;
                context.next = delegate.nextLoc;
                if (context.method !== "return") {
                  context.method = "next";
                  context.arg = undefined2;
                }
              } else {
                return info;
              }
              context.delegate = null;
              return ContinueSentinel;
            }
            defineIteratorMethods(Gp);
            Gp[toStringTagSymbol] = "Generator";
            Gp[iteratorSymbol] = function() {
              return this;
            };
            Gp.toString = function() {
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
              this.tryEntries = [{
                tryLoc: "root"
              }];
              tryLocsList.forEach(pushTryEntry, this);
              this.reset(true);
            }
            runtime.keys = function(object) {
              var keys = [];
              for (var key in object) {
                keys.push(key);
              }
              keys.reverse();
              return function next() {
                while (keys.length) {
                  var key2 = keys.pop();
                  if (key2 in object) {
                    next.value = key2;
                    next.done = false;
                    return next;
                  }
                }
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
                  var i = -1, next = function next2() {
                    while (++i < iterable.length) {
                      if (hasOwn.call(iterable, i)) {
                        next2.value = iterable[i];
                        next2.done = false;
                        return next2;
                      }
                    }
                    next2.value = undefined2;
                    next2.done = true;
                    return next2;
                  };
                  return next.next = next;
                }
              }
              return {
                next: doneResult
              };
            }
            runtime.values = values;
            function doneResult() {
              return {
                value: undefined2,
                done: true
              };
            }
            Context.prototype = {
              constructor: Context,
              reset: function reset(skipTempReset) {
                this.prev = 0;
                this.next = 0;
                this.sent = this._sent = undefined2;
                this.done = false;
                this.delegate = null;
                this.method = "next";
                this.arg = undefined2;
                this.tryEntries.forEach(resetTryEntry);
                if (!skipTempReset) {
                  for (var name in this) {
                    if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                      this[name] = undefined2;
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
                    context.method = "next";
                    context.arg = undefined2;
                  }
                  return !!caught;
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  var record = entry.completion;
                  if (entry.tryLoc === "root") {
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
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(iterable, resultName, nextLoc) {
                this.delegate = {
                  iterator: values(iterable),
                  resultName,
                  nextLoc
                };
                if (this.method === "next") {
                  this.arg = undefined2;
                }
                return ContinueSentinel;
              }
            };
          }(function() {
            return this;
          }() || Function("return this")());
        }).call(this, __webpack_require__("./node_modules/_webpack@4.46.0@webpack/buildin/module.js")(module2));
      },
      "./node_modules/_webpack@4.46.0@webpack/buildin/global.js": function(module2, exports2, __webpack_require__) {
        (function(window2) {
          var g;
          g = function() {
            return this;
          }();
          try {
            g = g || new Function("return this")();
          } catch (e) {
            if (typeof window2 === "object")
              g = window2;
          }
          module2.exports = g;
        }).call(this, __webpack_require__("./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js")["window"]);
      },
      "./node_modules/_webpack@4.46.0@webpack/buildin/module.js": function(module2, exports2) {
        module2.exports = function(module3) {
          if (!module3.webpackPolyfill) {
            module3.deprecate = function() {
            };
            module3.paths = [];
            if (!module3.children)
              module3.children = [];
            Object.defineProperty(module3, "loaded", {
              enumerable: true,
              get: function() {
                return module3.l;
              }
            });
            Object.defineProperty(module3, "id", {
              enumerable: true,
              get: function() {
                return module3.i;
              }
            });
            module3.webpackPolyfill = 1;
          }
          return module3;
        };
      }
    }]);
  }
});

// taro/dist/taro.js
var require_taro = __commonJS({
  "taro/dist/taro.js"() {
    (wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["taro"], {
      "./node_modules/_@tarojs_api@3.3.2@@tarojs/api/dist/index.esm.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        (function(global, window2) {
          var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/typeof.js");
          var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
          var _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/objectSpread2.js");
          var _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__.n(_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__);
          var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/classCallCheck.js");
          var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /* @__PURE__ */ __webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
          var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/createClass.js");
          var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /* @__PURE__ */ __webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
          var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/defineProperty.js");
          var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /* @__PURE__ */ __webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
          var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js");
          if (typeof Object.assign !== "function") {
            Object.assign = function(target) {
              if (target == null) {
                throw new TypeError("Cannot convert undefined or null to object");
              }
              var to = Object(target);
              for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];
                if (nextSource != null) {
                  for (var nextKey in nextSource) {
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                      to[nextKey] = nextSource[nextKey];
                    }
                  }
                }
              }
              return to;
            };
          }
          if (typeof Object.defineProperties !== "function") {
            Object.defineProperties = function(obj, properties) {
              function convertToDescriptor(desc) {
                function hasProperty(obj2, prop) {
                  return Object.prototype.hasOwnProperty.call(obj2, prop);
                }
                function isCallable(v) {
                  return typeof v === "function";
                }
                if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(desc) !== "object" || desc === null) {
                  throw new TypeError("bad desc");
                }
                var d = {};
                if (hasProperty(desc, "enumerable"))
                  d.enumerable = !!desc.enumerable;
                if (hasProperty(desc, "configurable")) {
                  d.configurable = !!desc.configurable;
                }
                if (hasProperty(desc, "value"))
                  d.value = desc.value;
                if (hasProperty(desc, "writable"))
                  d.writable = !!desc.writable;
                if (hasProperty(desc, "get")) {
                  var g = desc.get;
                  if (!isCallable(g) && typeof g !== "undefined") {
                    throw new TypeError("bad get");
                  }
                  d.get = g;
                }
                if (hasProperty(desc, "set")) {
                  var s = desc.set;
                  if (!isCallable(s) && typeof s !== "undefined") {
                    throw new TypeError("bad set");
                  }
                  d.set = s;
                }
                if (("get" in d || "set" in d) && ("value" in d || "writable" in d)) {
                  throw new TypeError("identity-confused descriptor");
                }
                return d;
              }
              if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj) !== "object" || obj === null)
                throw new TypeError("bad obj");
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
            WEAPP: "WEAPP",
            WEB: "WEB",
            RN: "RN",
            SWAN: "SWAN",
            ALIPAY: "ALIPAY",
            TT: "TT",
            QQ: "QQ",
            JD: "JD"
          };
          var _env = null;
          function getEnv() {
            if (_env)
              return _env;
            if (typeof jd !== "undefined" && jd.getSystemInfo) {
              _env = ENV_TYPE.JD;
              return ENV_TYPE.JD;
            }
            if (typeof qq !== "undefined" && qq.getSystemInfo) {
              _env = ENV_TYPE.QQ;
              return ENV_TYPE.QQ;
            }
            if (typeof tt !== "undefined" && tt.getSystemInfo) {
              _env = ENV_TYPE.TT;
              return ENV_TYPE.TT;
            }
            if (typeof wx !== "undefined" && wx.getSystemInfo) {
              _env = ENV_TYPE.WEAPP;
              return ENV_TYPE.WEAPP;
            }
            if (typeof swan !== "undefined" && swan.getSystemInfo) {
              _env = ENV_TYPE.SWAN;
              return ENV_TYPE.SWAN;
            }
            if (typeof my !== "undefined" && my.getSystemInfo) {
              _env = ENV_TYPE.ALIPAY;
              return ENV_TYPE.ALIPAY;
            }
            if (typeof global !== "undefined" && global.__fbGenNativeModule) {
              _env = ENV_TYPE.RN;
              return ENV_TYPE.RN;
            }
            if (typeof window2 !== "undefined") {
              _env = ENV_TYPE.WEB;
              return ENV_TYPE.WEB;
            }
            return "Unknown environment";
          }
          var Chain = /* @__PURE__ */ function() {
            function Chain2(requestParams) {
              var interceptors2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
              var index = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
              _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Chain2);
              this.index = index;
              this.requestParams = requestParams;
              this.interceptors = interceptors2;
            }
            _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Chain2, [{
              key: "proceed",
              value: function proceed(requestParams) {
                this.requestParams = requestParams;
                if (this.index >= this.interceptors.length) {
                  throw new Error("chain \u53C2\u6570\u9519\u8BEF, \u8BF7\u52FF\u76F4\u63A5\u4FEE\u6539 request.chain");
                }
                var nextInterceptor = this._getNextInterceptor();
                var nextChain = this._getNextChain();
                var p = nextInterceptor(nextChain);
                var res = p.catch(function(err) {
                  return Promise.reject(err);
                });
                if (typeof p.abort === "function")
                  res.abort = p.abort;
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
                return new Chain2(this.requestParams, this.interceptors, this.index + 1);
              }
            }]);
            return Chain2;
          }();
          var Link = /* @__PURE__ */ function() {
            function Link2(interceptor) {
              _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Link2);
              this.taroInterceptor = interceptor;
              this.chain = new Chain();
            }
            _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Link2, [{
              key: "request",
              value: function request(requestParams) {
                var _this = this;
                this.chain.interceptors = this.chain.interceptors.filter(function(interceptor) {
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
            return Link2;
          }();
          function timeoutInterceptor(chain) {
            var requestParams = chain.requestParams;
            var p;
            var res = new Promise(function(resolve, reject) {
              var timeout = setTimeout(function() {
                timeout = null;
                reject(new Error("\u7F51\u7EDC\u94FE\u63A5\u8D85\u65F6,\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01"));
              }, requestParams && requestParams.timeout || 6e4);
              p = chain.proceed(requestParams);
              p.then(function(res2) {
                if (!timeout)
                  return;
                clearTimeout(timeout);
                resolve(res2);
              }).catch(function(err) {
                timeout && clearTimeout(timeout);
                reject(err);
              });
            });
            if (p !== void 0 && typeof p.abort === "function")
              res.abort = p.abort;
            return res;
          }
          function logInterceptor(chain) {
            var requestParams = chain.requestParams;
            var method = requestParams.method, data = requestParams.data, url = requestParams.url;
            console.log("http ".concat(method || "GET", " --> ").concat(url, " data: "), data);
            var p = chain.proceed(requestParams);
            var res = p.then(function(res2) {
              console.log("http <-- ".concat(url, " result:"), res2);
              return res2;
            });
            if (typeof p.abort === "function")
              res.abort = p.abort;
            return res;
          }
          var interceptors = /* @__PURE__ */ Object.freeze({
            __proto__: null,
            timeoutInterceptor,
            logInterceptor
          });
          function Behavior(options) {
            return options;
          }
          function getPreload(current) {
            return function(key, val) {
              if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(key) === "object") {
                current.preloadData = key;
              } else if (key !== void 0 && val !== void 0) {
                current.preloadData = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()({}, key, val);
              }
            };
          }
          function getInitPxTransform(taro) {
            return function(config) {
              var _config$designWidth = config.designWidth, designWidth = _config$designWidth === void 0 ? 750 : _config$designWidth, _config$deviceRatio = config.deviceRatio, deviceRatio = _config$deviceRatio === void 0 ? {
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
            return function(size) {
              var _ref = taro.config || {}, _ref$designWidth = _ref.designWidth, designWidth = _ref$designWidth === void 0 ? 750 : _ref$designWidth, _ref$deviceRatio = _ref.deviceRatio, deviceRatio = _ref$deviceRatio === void 0 ? {
                640: 2.34 / 2,
                750: 1,
                828: 1.81 / 2
              } : _ref$deviceRatio;
              if (!(designWidth in deviceRatio)) {
                throw new Error("deviceRatio \u914D\u7F6E\u4E2D\u4E0D\u5B58\u5728 ".concat(designWidth, " \u7684\u8BBE\u7F6E\uFF01"));
              }
              return parseInt(size, 10) * deviceRatio[designWidth] + "rpx";
            };
          }
          var Taro = {
            Behavior,
            getEnv,
            ENV_TYPE,
            Link,
            interceptors,
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
            getInitPxTransform
          };
          Taro.initPxTransform = getInitPxTransform(Taro);
          Taro.preload = getPreload(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["Current"]);
          Taro.pxTransform = getPxTransform(Taro);
          __webpack_exports__["default"] = Taro;
        }).call(this, __webpack_require__("./node_modules/_webpack@4.46.0@webpack/buildin/global.js"), __webpack_require__("./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js")["window"]);
      },
      "./node_modules/_@tarojs_mini-runner@3.3.2@@tarojs/mini-runner/dist/template/comp.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js");
        Component(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createRecursiveComponentConfig"])());
      },
      "./node_modules/_@tarojs_mini-runner@3.3.2@@tarojs/mini-runner/dist/template/custom-wrapper.js": function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var runtime_1 = __webpack_require__("./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js");
        Component(runtime_1.createRecursiveComponentConfig("custom-wrapper"));
      },
      "./node_modules/_@tarojs_plugin-platform-weapp@3.3.2@@tarojs/plugin-platform-weapp/dist/components-react.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return Button;
        });
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return Image;
        });
        __webpack_require__.d(__webpack_exports__, "c", function() {
          return Input;
        });
        __webpack_require__.d(__webpack_exports__, "d", function() {
          return Text;
        });
        __webpack_require__.d(__webpack_exports__, "e", function() {
          return View;
        });
        var View = "view";
        var Icon = "icon";
        var Progress = "progress";
        var RichText = "rich-text";
        var Text = "text";
        var Button = "button";
        var Checkbox = "checkbox";
        var CheckboxGroup = "checkbox-group";
        var Form = "form";
        var Input = "input";
        var Label = "label";
        var Picker = "picker";
        var PickerView = "picker-view";
        var PickerViewColumn = "picker-view-column";
        var Radio = "radio";
        var RadioGroup = "radio-group";
        var Slider = "slider";
        var Switch = "switch";
        var CoverImage = "cover-image";
        var Textarea = "textarea";
        var CoverView = "cover-view";
        var MovableArea = "movable-area";
        var MovableView = "movable-view";
        var ScrollView = "scroll-view";
        var Swiper = "swiper";
        var SwiperItem = "swiper-item";
        var Navigator = "navigator";
        var Audio = "audio";
        var Camera = "camera";
        var Image = "image";
        var LivePlayer = "live-player";
        var Video = "video";
        var Canvas = "canvas";
        var Ad = "ad";
        var WebView = "web-view";
        var Block = "block";
        var Map2 = "map";
        var Slot = "slot";
        var CustomWrapper = "custom-wrapper";
        var Editor = "editor";
        var MatchMedia = "match-media";
        var FunctionalPageNavigator = "functional-page-navigator";
        var LivePusher = "live-pusher";
        var OfficialAccount = "official-account";
        var OpenData = "open-data";
        var NavigationBar = "navigation-bar";
        var PageMeta = "page-meta";
        var VoipRoom = "voip-room";
        var AdCustom = "ad-custom";
        var PageContainer = "page-container";
        var KeyboardAccessory = "keyboard-accessory";
      },
      "./node_modules/_@tarojs_plugin-platform-weapp@3.3.2@@tarojs/plugin-platform-weapp/dist/runtime.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        var _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@tarojs_shared@3.3.2@@tarojs/shared/dist/index.js");
        var _tarojs_shared__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__);
        var needPromiseApis = new Set(["authPrivateMessage", "disableAlertBeforeUnload", "enableAlertBeforeUnload", "getBackgroundFetchData", "getGroupEnterInfo", "getShareInfo", "getWeRunData", "join1v1Chat", "openVideoEditor", "saveFileToDisk", "scanItem", "setEnable1v1Chat", "setWindowSize", "sendBizRedPacket", "startFacialRecognitionVerify"]);
        function initNativeApi(taro) {
          Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["processApis"])(taro, wx, {
            needPromiseApis,
            modifyApis: function modifyApis(apis) {
              apis.delete("lanDebug");
            }
          });
          taro.cloud = wx.cloud;
        }
        var components = {
          Progress: {
            "border-radius": "0",
            "font-size": "16",
            duration: "30",
            bindActiveEnd: ""
          },
          RichText: {
            space: ""
          },
          Text: {
            "user-select": "false"
          },
          Map: {
            polygons: "[]",
            subkey: "",
            rotate: "0",
            skew: "0",
            "enable-3D": "false",
            "show-compass": "false",
            "show-scale": "false",
            "enable-overlooking": "false",
            "enable-zoom": "true",
            "enable-scroll": "true",
            "enable-rotate": "false",
            "enable-satellite": "false",
            "enable-traffic": "false",
            setting: "[]",
            bindLabelTap: "",
            bindRegionChange: "",
            bindPoiTap: ""
          },
          Button: {
            lang: "en",
            "session-from": "",
            "send-message-title": "",
            "send-message-path": "",
            "send-message-img": "",
            "app-parameter": "",
            "show-message-card": "false",
            "business-id": "",
            bindGetUserInfo: "",
            bindContact: "",
            bindGetPhoneNumber: "",
            bindError: "",
            bindOpenSetting: "",
            bindLaunchApp: ""
          },
          Form: {
            "report-submit-timeout": "0"
          },
          Input: {
            "always-embed": "false",
            "adjust-position": "true",
            "hold-keyboard": "false",
            bindKeyboardHeightChange: ""
          },
          Picker: {
            "header-text": ""
          },
          PickerView: {
            bindPickStart: "",
            bindPickEnd: ""
          },
          Slider: {
            color: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("#e9e9e9"),
            "selected-color": Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("#1aad19")
          },
          Textarea: {
            "show-confirm-bar": "true",
            "adjust-position": "true",
            "hold-keyboard": "false",
            "disable-default-padding": "false",
            "confirm-type": Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("return"),
            "confirm-hold": "false",
            bindKeyboardHeightChange: ""
          },
          ScrollView: {
            "enable-flex": "false",
            "scroll-anchoring": "false",
            "refresher-enabled": "false",
            "refresher-threshold": "45",
            "refresher-default-style": Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("black"),
            "refresher-background": Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("#FFF"),
            "refresher-triggered": "false",
            enhanced: "false",
            bounces: "true",
            "show-scrollbar": "true",
            "paging-enabled": "false",
            "fast-deceleration": "false",
            bindDragStart: "",
            bindDragging: "",
            bindDragEnd: "",
            bindRefresherPulling: "",
            bindRefresherRefresh: "",
            bindRefresherRestore: "",
            bindRefresherAbort: ""
          },
          Swiper: {
            "snap-to-edge": "false",
            "easing-function": Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("default")
          },
          SwiperItem: {
            "skip-hidden-item-layout": "false"
          },
          Navigator: {
            target: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("self"),
            "app-id": "",
            path: "",
            "extra-data": "",
            version: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("version")
          },
          Camera: {
            mode: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("normal"),
            resolution: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("medium"),
            "frame-size": Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("medium"),
            bindInitDone: "",
            bindScanCode: ""
          },
          Image: {
            webp: "false",
            "show-menu-by-longpress": "false"
          },
          LivePlayer: {
            mode: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("live"),
            "sound-mode": Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("speaker"),
            "auto-pause-if-navigate": "true",
            "auto-pause-if-open-native": "true",
            "picture-in-picture-mode": "[]",
            bindstatechange: "",
            bindfullscreenchange: "",
            bindnetstatus: "",
            bindAudioVolumeNotify: "",
            bindEnterPictureInPicture: "",
            bindLeavePictureInPicture: ""
          },
          Video: {
            title: "",
            "play-btn-position": Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("bottom"),
            "enable-play-gesture": "false",
            "auto-pause-if-navigate": "true",
            "auto-pause-if-open-native": "true",
            "vslide-gesture": "false",
            "vslide-gesture-in-fullscreen": "true",
            "ad-unit-id": "",
            "poster-for-crawler": "",
            "show-casting-button": "false",
            "picture-in-picture-mode": "[]",
            "enable-auto-rotation": "false",
            "show-screen-lock-button": "false",
            "show-snapshot-button": "false",
            "show-background-playback-button": "false",
            "background-poster": "",
            bindProgress: "",
            bindLoadedMetadata: "",
            bindControlsToggle: "",
            bindEnterPictureInPicture: "",
            bindLeavePictureInPicture: "",
            bindSeekComplete: "",
            bindAdLoad: "",
            bindAdError: "",
            bindAdClose: "",
            bindAdPlay: ""
          },
          Canvas: {
            type: ""
          },
          Ad: {
            "ad-type": Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("banner"),
            "ad-theme": Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("white")
          },
          CoverView: {
            "marker-id": "",
            slot: ""
          },
          Editor: {
            "read-only": "false",
            placeholder: "",
            "show-img-size": "false",
            "show-img-toolbar": "false",
            "show-img-resize": "false",
            focus: "false",
            bindReady: "",
            bindFocus: "",
            bindBlur: "",
            bindInput: "",
            bindStatusChange: "",
            name: ""
          },
          MatchMedia: {
            "min-width": "",
            "max-width": "",
            width: "",
            "min-height": "",
            "max-height": "",
            height: "",
            orientation: ""
          },
          FunctionalPageNavigator: {
            version: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("release"),
            name: "",
            args: "",
            bindSuccess: "",
            bindFail: "",
            bindCancel: ""
          },
          LivePusher: {
            url: "",
            mode: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("RTC"),
            autopush: "false",
            muted: "false",
            "enable-camera": "true",
            "auto-focus": "true",
            orientation: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("vertical"),
            beauty: "0",
            whiteness: "0",
            aspect: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("9:16"),
            "min-bitrate": "200",
            "max-bitrate": "1000",
            "audio-quality": Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("high"),
            "waiting-image": "",
            "waiting-image-hash": "",
            zoom: "false",
            "device-position": Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("front"),
            "background-mute": "false",
            mirror: "false",
            "remote-mirror": "false",
            "local-mirror": "false",
            "audio-reverb-type": "0",
            "enable-mic": "true",
            "enable-agc": "false",
            "enable-ans": "false",
            "audio-volume-type": Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("voicecall"),
            "video-width": "360",
            "video-height": "640",
            "beauty-style": Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("smooth"),
            filter: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("standard"),
            animation: "",
            bindStateChange: "",
            bindNetStatus: "",
            bindBgmStart: "",
            bindBgmProgress: "",
            bindBgmComplete: "",
            bindAudioVolumeNotify: ""
          },
          OfficialAccount: {
            bindLoad: "",
            bindError: ""
          },
          OpenData: {
            type: "",
            "open-gid": "",
            lang: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("en"),
            "default-text": "",
            "default-avatar": "",
            bindError: ""
          },
          NavigationBar: {
            title: "",
            loading: "false",
            "front-color": "",
            "background-color": "",
            "color-animation-duration": "0",
            "color-animation-timing-func": Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("linear")
          },
          PageMeta: {
            "background-text-style": "",
            "background-color": "",
            "background-color-top": "",
            "background-color-bottom": "",
            "scroll-top": Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])(""),
            "scroll-duration": "300",
            "page-style": Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])(""),
            "root-font-size": Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])(""),
            bindResize: "",
            bindScroll: "",
            bindScrollDone: ""
          },
          VoipRoom: {
            openid: "",
            mode: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("camera"),
            "device-position": Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("front"),
            bindError: ""
          },
          AdCustom: {
            "unit-id": "",
            "ad-intervals": "",
            bindLoad: "",
            bindError: ""
          },
          PageContainer: {
            show: "false",
            duration: "300",
            "z-index": "100",
            overlay: "true",
            position: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["singleQuote"])("bottom"),
            round: "false",
            "close-on-slideDown": "false",
            "overlay-style": "",
            "custom-style": "",
            bindBeforeEnter: "",
            bindEnter: "",
            bindAfterEnter: "",
            bindBeforeLeave: "",
            bindLeave: "",
            bindAfterLeave: "",
            bindClickOverlay: ""
          },
          KeyboardAccessory: {}
        };
        var hostConfig = {
          initNativeApi
        };
        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["mergeReconciler"])(hostConfig);
        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__["mergeInternalComponents"])(components);
      },
      "./node_modules/_@tarojs_react@3.3.2@@tarojs/react/dist/react.esm.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/classCallCheck.js");
        var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/createClass.js");
        var react_reconciler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_react-reconciler@0.26.1@react-reconciler/cjs/react-reconciler.production.min.js");
        var react_reconciler__WEBPACK_IMPORTED_MODULE_2___default = /* @__PURE__ */ __webpack_require__.n(react_reconciler__WEBPACK_IMPORTED_MODULE_2__);
        var scheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/_scheduler@0.20.2@scheduler/cjs/scheduler.production.min.js");
        var scheduler__WEBPACK_IMPORTED_MODULE_3___default = /* @__PURE__ */ __webpack_require__.n(scheduler__WEBPACK_IMPORTED_MODULE_3__);
        var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js");
        var _tarojs_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/_@tarojs_shared@3.3.2@@tarojs/shared/dist/index.js");
        var _tarojs_shared__WEBPACK_IMPORTED_MODULE_5___default = /* @__PURE__ */ __webpack_require__.n(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__);
        function isEventName(s) {
          return s[0] === "o" && s[1] === "n";
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
            if (oldProps[i] !== newProps[i] || isFormElement && i === "value") {
              setProperty(dom, i, newProps[i], oldProps[i]);
            }
          }
        }
        function setEvent(dom, name, value, oldValue) {
          var isCapture = name.endsWith("Capture");
          var eventName = name.toLowerCase().slice(2);
          if (isCapture) {
            eventName = eventName.slice(0, -7);
          }
          var compName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["capitalize"])(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["toCamelCase"])(dom.tagName.toLowerCase()));
          if (eventName === "click" && compName in _tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["internalComponents"]) {
            eventName = "tap";
          }
          if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["isFunction"])(value)) {
            if (!oldValue) {
              dom.addEventListener(eventName, value, isCapture);
            }
            if (eventName === "regionchange") {
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
          if (key[0] === "-") {
            style.setProperty(key, value.toString());
          }
          style[key] = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["isNumber"])(value) && IS_NON_DIMENSIONAL.test(key) === false ? value + "px" : value == null ? "" : value;
        }
        function setProperty(dom, name, value, oldValue) {
          var _a, _b, _c, _d;
          name = name === "className" ? "class" : name;
          if (name === "key" || name === "children" || name === "ref")
            ;
          else if (name === "style") {
            var style = dom.style;
            if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(value)) {
              style.cssText = value;
            } else {
              if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(oldValue)) {
                style.cssText = "";
                oldValue = null;
              }
              if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["isObject"])(oldValue)) {
                for (var i in oldValue) {
                  if (!(value && i in value)) {
                    setStyle(style, i, "");
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
          } else if (name === "dangerouslySetInnerHTML") {
            var newHtml = (_b = (_a = value) === null || _a === void 0 ? void 0 : _a.__html) !== null && _b !== void 0 ? _b : "";
            var oldHtml = (_d = (_c = oldValue) === null || _c === void 0 ? void 0 : _c.__html) !== null && _d !== void 0 ? _d : "";
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
            style.setProperty("display", "none");
          },
          unhideInstance: function unhideInstance(instance, props) {
            var styleProp = props.style;
            var display = (styleProp === null || styleProp === void 0 ? void 0 : styleProp.hasOwnProperty("display")) ? styleProp.display : null;
            display = display == null || typeof display === "boolean" || display === "" ? "" : ("" + display).trim();
            instance.style["display"] = display;
          },
          clearContainer: function clearContainer(element) {
            if (element.childNodes.length > 0) {
              element.textContent = "";
            }
          },
          queueMicrotask: typeof Promise !== "undefined" ? function(callback) {
            return Promise.resolve(null).then(callback).catch(function(error) {
              setTimeout(function() {
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
          now,
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
            version: "17.0.2",
            rendererPackageName: "taro-react"
          });
          if (!foundDevTools) {
            console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools", "font-weight:bold");
          }
        }
        var ContainerMap = new WeakMap();
        var Root = /* @__PURE__ */ function() {
          function Root2(renderer, domContainer) {
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["a"])(this, Root2);
            this.renderer = renderer;
            this.internalRoot = renderer.createContainer(domContainer, 0, false, null);
          }
          Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["a"])(Root2, [{
            key: "render",
            value: function render2(children, cb) {
              this.renderer.updateContainer(children, this.internalRoot, null, cb);
              return this.renderer.getPublicRootInstance(this.internalRoot);
            }
          }, {
            key: "unmount",
            value: function unmount(cb) {
              this.renderer.updateContainer(null, this.internalRoot, null, cb);
            }
          }]);
          return Root2;
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
        var unstable_batchedUpdates = TaroReconciler.batchedUpdates;
        function unmountComponentAtNode(dom) {
          Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_5__["ensure"])(dom && [1, 8, 9, 11].includes(dom.nodeType), "unmountComponentAtNode(...): Target container is not a DOM element.");
          var root = ContainerMap.get(dom);
          if (!root)
            return false;
          unstable_batchedUpdates(function() {
            root.unmount(function() {
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
        var portalType = typeof Symbol === "function" && Symbol.for ? Symbol.for("react.portal") : 60106;
        function createPortal(children, containerInfo, key) {
          return {
            $$typeof: portalType,
            key: key == null ? null : String(key),
            children,
            containerInfo,
            implementation: null
          };
        }
        var index = {
          render,
          unstable_batchedUpdates,
          unmountComponentAtNode,
          findDOMNode,
          createPortal
        };
        __webpack_exports__["a"] = index;
      },
      "./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        (function(process, global, document, window2, requestAnimationFrame, cancelAnimationFrame) {
          __webpack_require__.d(__webpack_exports__, "Current", function() {
            return Current;
          });
          __webpack_require__.d(__webpack_exports__, "ElementNames", function() {
            return ElementNames;
          });
          __webpack_require__.d(__webpack_exports__, "Events", function() {
            return Events;
          });
          __webpack_require__.d(__webpack_exports__, "FormElement", function() {
            return FormElement;
          });
          __webpack_require__.d(__webpack_exports__, "SERVICE_IDENTIFIER", function() {
            return SERVICE_IDENTIFIER;
          });
          __webpack_require__.d(__webpack_exports__, "Style", function() {
            return Style;
          });
          __webpack_require__.d(__webpack_exports__, "TaroElement", function() {
            return TaroElement;
          });
          __webpack_require__.d(__webpack_exports__, "TaroEvent", function() {
            return TaroEvent;
          });
          __webpack_require__.d(__webpack_exports__, "TaroNode", function() {
            return TaroNode;
          });
          __webpack_require__.d(__webpack_exports__, "TaroRootElement", function() {
            return TaroRootElement;
          });
          __webpack_require__.d(__webpack_exports__, "TaroText", function() {
            return TaroText;
          });
          __webpack_require__.d(__webpack_exports__, "cancelAnimationFrame", function() {
            return caf;
          });
          __webpack_require__.d(__webpack_exports__, "connectReactPage", function() {
            return connectReactPage;
          });
          __webpack_require__.d(__webpack_exports__, "connectVuePage", function() {
            return connectVuePage;
          });
          __webpack_require__.d(__webpack_exports__, "container", function() {
            return container;
          });
          __webpack_require__.d(__webpack_exports__, "createComponentConfig", function() {
            return createComponentConfig;
          });
          __webpack_require__.d(__webpack_exports__, "createDocument", function() {
            return createDocument;
          });
          __webpack_require__.d(__webpack_exports__, "createEvent", function() {
            return createEvent;
          });
          __webpack_require__.d(__webpack_exports__, "createNativeComponentConfig", function() {
            return createNativeComponentConfig;
          });
          __webpack_require__.d(__webpack_exports__, "createPageConfig", function() {
            return createPageConfig;
          });
          __webpack_require__.d(__webpack_exports__, "createReactApp", function() {
            return createReactApp;
          });
          __webpack_require__.d(__webpack_exports__, "createRecursiveComponentConfig", function() {
            return createRecursiveComponentConfig;
          });
          __webpack_require__.d(__webpack_exports__, "createVue3App", function() {
            return createVue3App;
          });
          __webpack_require__.d(__webpack_exports__, "createVueApp", function() {
            return createVueApp;
          });
          __webpack_require__.d(__webpack_exports__, "document", function() {
            return document$2;
          });
          __webpack_require__.d(__webpack_exports__, "eventCenter", function() {
            return eventCenter;
          });
          __webpack_require__.d(__webpack_exports__, "getComputedStyle", function() {
            return getComputedStyle;
          });
          __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() {
            return getCurrentInstance;
          });
          __webpack_require__.d(__webpack_exports__, "hydrate", function() {
            return hydrate;
          });
          __webpack_require__.d(__webpack_exports__, "injectPageInstance", function() {
            return injectPageInstance;
          });
          __webpack_require__.d(__webpack_exports__, "navigator", function() {
            return navigator;
          });
          __webpack_require__.d(__webpack_exports__, "nextTick", function() {
            return nextTick;
          });
          __webpack_require__.d(__webpack_exports__, "now", function() {
            return now;
          });
          __webpack_require__.d(__webpack_exports__, "options", function() {
            return options;
          });
          __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() {
            return raf;
          });
          __webpack_require__.d(__webpack_exports__, "stringify", function() {
            return stringify;
          });
          __webpack_require__.d(__webpack_exports__, "useAddToFavorites", function() {
            return useAddToFavorites;
          });
          __webpack_require__.d(__webpack_exports__, "useDidHide", function() {
            return useDidHide;
          });
          __webpack_require__.d(__webpack_exports__, "useDidShow", function() {
            return useDidShow;
          });
          __webpack_require__.d(__webpack_exports__, "useOptionMenuClick", function() {
            return useOptionMenuClick;
          });
          __webpack_require__.d(__webpack_exports__, "usePageScroll", function() {
            return usePageScroll;
          });
          __webpack_require__.d(__webpack_exports__, "usePullDownRefresh", function() {
            return usePullDownRefresh;
          });
          __webpack_require__.d(__webpack_exports__, "usePullIntercept", function() {
            return usePullIntercept;
          });
          __webpack_require__.d(__webpack_exports__, "useReachBottom", function() {
            return useReachBottom;
          });
          __webpack_require__.d(__webpack_exports__, "useReady", function() {
            return useReady;
          });
          __webpack_require__.d(__webpack_exports__, "useResize", function() {
            return useResize;
          });
          __webpack_require__.d(__webpack_exports__, "useRouter", function() {
            return useRouter;
          });
          __webpack_require__.d(__webpack_exports__, "useScope", function() {
            return useScope;
          });
          __webpack_require__.d(__webpack_exports__, "useShareAppMessage", function() {
            return useShareAppMessage;
          });
          __webpack_require__.d(__webpack_exports__, "useShareTimeline", function() {
            return useShareTimeline;
          });
          __webpack_require__.d(__webpack_exports__, "useTabItemTap", function() {
            return useTabItemTap;
          });
          __webpack_require__.d(__webpack_exports__, "useTitleClick", function() {
            return useTitleClick;
          });
          __webpack_require__.d(__webpack_exports__, "window", function() {
            return window$1;
          });
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/slicedToArray.js");
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/regenerator/index.js");
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__.n(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/asyncToGenerator.js");
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/set.js");
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/toConsumableArray.js");
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/get.js");
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/getPrototypeOf.js");
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/wrapNativeSuper.js");
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/toArray.js");
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/assertThisInitialized.js");
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/inherits.js");
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/createSuper.js");
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/defineProperty.js");
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/classCallCheck.js");
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/createClass.js");
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/typeof.js");
          var inversify__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/inversify.js");
          var _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/_@tarojs_shared@3.3.2@@tarojs/shared/dist/index.js");
          var _tarojs_shared__WEBPACK_IMPORTED_MODULE_17___default = /* @__PURE__ */ __webpack_require__.n(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__);
          if (false) {
          } else {
            (function(Reflect2) {
              (function(factory) {
                var exporter = makeExporter(Reflect2);
                factory(exporter);
                function makeExporter(target, previous) {
                  return function(key, value) {
                    if (typeof target[key] !== "function") {
                      Object.defineProperty(target, key, {
                        configurable: true,
                        writable: true,
                        value
                      });
                    }
                    if (previous)
                      previous(key, value);
                  };
                }
              })(function(exporter) {
                var hasOwn = Object.prototype.hasOwnProperty;
                var supportsSymbol = typeof Symbol === "function";
                var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
                var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
                var supportsCreate = typeof Object.create === "function";
                var supportsProto = {
                  __proto__: []
                } instanceof Array;
                var downLevel = !supportsCreate && !supportsProto;
                var HashMap = {
                  create: supportsCreate ? function() {
                    return MakeDictionary(Object.create(null));
                  } : supportsProto ? function() {
                    return MakeDictionary({
                      __proto__: null
                    });
                  } : function() {
                    return MakeDictionary({});
                  },
                  has: downLevel ? function(map, key) {
                    return hasOwn.call(map, key);
                  } : function(map, key) {
                    return key in map;
                  },
                  get: downLevel ? function(map, key) {
                    return hasOwn.call(map, key) ? map[key] : void 0;
                  } : function(map, key) {
                    return map[key];
                  }
                };
                var functionPrototype = Object.getPrototypeOf(Function);
                var usePolyfill = (typeof process === "undefined" ? "undefined" : Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(process)) === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
                var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
                var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
                var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
                var Metadata = new _WeakMap();
                function decorate(decorators, target, propertyKey, attributes) {
                  if (!IsUndefined(propertyKey)) {
                    if (!IsArray(decorators))
                      throw new TypeError();
                    if (!IsObject(target))
                      throw new TypeError();
                    if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                      throw new TypeError();
                    if (IsNull(attributes))
                      attributes = void 0;
                    propertyKey = ToPropertyKey(propertyKey);
                    return DecorateProperty(decorators, target, propertyKey, attributes);
                  } else {
                    if (!IsArray(decorators))
                      throw new TypeError();
                    if (!IsConstructor(target))
                      throw new TypeError();
                    return DecorateConstructor(decorators, target);
                  }
                }
                exporter("decorate", decorate);
                function metadata(metadataKey, metadataValue) {
                  function decorator(target, propertyKey) {
                    if (!IsObject(target))
                      throw new TypeError();
                    if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                      throw new TypeError();
                    OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
                  }
                  return decorator;
                }
                exporter("metadata", metadata);
                function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
                  if (!IsObject(target))
                    throw new TypeError();
                  if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                  return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
                }
                exporter("defineMetadata", defineMetadata);
                function hasMetadata(metadataKey, target, propertyKey) {
                  if (!IsObject(target))
                    throw new TypeError();
                  if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                  return OrdinaryHasMetadata(metadataKey, target, propertyKey);
                }
                exporter("hasMetadata", hasMetadata);
                function hasOwnMetadata(metadataKey, target, propertyKey) {
                  if (!IsObject(target))
                    throw new TypeError();
                  if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                  return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
                }
                exporter("hasOwnMetadata", hasOwnMetadata);
                function getMetadata(metadataKey, target, propertyKey) {
                  if (!IsObject(target))
                    throw new TypeError();
                  if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                  return OrdinaryGetMetadata(metadataKey, target, propertyKey);
                }
                exporter("getMetadata", getMetadata);
                function getOwnMetadata(metadataKey, target, propertyKey) {
                  if (!IsObject(target))
                    throw new TypeError();
                  if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                  return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
                }
                exporter("getOwnMetadata", getOwnMetadata);
                function getMetadataKeys(target, propertyKey) {
                  if (!IsObject(target))
                    throw new TypeError();
                  if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                  return OrdinaryMetadataKeys(target, propertyKey);
                }
                exporter("getMetadataKeys", getMetadataKeys);
                function getOwnMetadataKeys(target, propertyKey) {
                  if (!IsObject(target))
                    throw new TypeError();
                  if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                  return OrdinaryOwnMetadataKeys(target, propertyKey);
                }
                exporter("getOwnMetadataKeys", getOwnMetadataKeys);
                function deleteMetadata(metadataKey, target, propertyKey) {
                  if (!IsObject(target))
                    throw new TypeError();
                  if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                  var metadataMap = GetOrCreateMetadataMap(target, propertyKey, false);
                  if (IsUndefined(metadataMap))
                    return false;
                  if (!metadataMap.delete(metadataKey))
                    return false;
                  if (metadataMap.size > 0)
                    return true;
                  var targetMetadata = Metadata.get(target);
                  targetMetadata.delete(propertyKey);
                  if (targetMetadata.size > 0)
                    return true;
                  Metadata.delete(target);
                  return true;
                }
                exporter("deleteMetadata", deleteMetadata);
                function DecorateConstructor(decorators, target) {
                  for (var i = decorators.length - 1; i >= 0; --i) {
                    var decorator = decorators[i];
                    var decorated = decorator(target);
                    if (!IsUndefined(decorated) && !IsNull(decorated)) {
                      if (!IsConstructor(decorated))
                        throw new TypeError();
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
                      if (!IsObject(decorated))
                        throw new TypeError();
                      descriptor = decorated;
                    }
                  }
                  return descriptor;
                }
                function GetOrCreateMetadataMap(O, P, Create) {
                  var targetMetadata = Metadata.get(O);
                  if (IsUndefined(targetMetadata)) {
                    if (!Create)
                      return void 0;
                    targetMetadata = new _Map();
                    Metadata.set(O, targetMetadata);
                  }
                  var metadataMap = targetMetadata.get(P);
                  if (IsUndefined(metadataMap)) {
                    if (!Create)
                      return void 0;
                    metadataMap = new _Map();
                    targetMetadata.set(P, metadataMap);
                  }
                  return metadataMap;
                }
                function OrdinaryHasMetadata(MetadataKey, O, P) {
                  var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
                  if (hasOwn2)
                    return true;
                  var parent = OrdinaryGetPrototypeOf(O);
                  if (!IsNull(parent))
                    return OrdinaryHasMetadata(MetadataKey, parent, P);
                  return false;
                }
                function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
                  var metadataMap = GetOrCreateMetadataMap(O, P, false);
                  if (IsUndefined(metadataMap))
                    return false;
                  return ToBoolean(metadataMap.has(MetadataKey));
                }
                function OrdinaryGetMetadata(MetadataKey, O, P) {
                  var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
                  if (hasOwn2)
                    return OrdinaryGetOwnMetadata(MetadataKey, O, P);
                  var parent = OrdinaryGetPrototypeOf(O);
                  if (!IsNull(parent))
                    return OrdinaryGetMetadata(MetadataKey, parent, P);
                  return void 0;
                }
                function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
                  var metadataMap = GetOrCreateMetadataMap(O, P, false);
                  if (IsUndefined(metadataMap))
                    return void 0;
                  return metadataMap.get(MetadataKey);
                }
                function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
                  var metadataMap = GetOrCreateMetadataMap(O, P, true);
                  metadataMap.set(MetadataKey, MetadataValue);
                }
                function OrdinaryMetadataKeys(O, P) {
                  var ownKeys = OrdinaryOwnMetadataKeys(O, P);
                  var parent = OrdinaryGetPrototypeOf(O);
                  if (parent === null)
                    return ownKeys;
                  var parentKeys = OrdinaryMetadataKeys(parent, P);
                  if (parentKeys.length <= 0)
                    return ownKeys;
                  if (ownKeys.length <= 0)
                    return parentKeys;
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
                }
                function OrdinaryOwnMetadataKeys(O, P) {
                  var keys = [];
                  var metadataMap = GetOrCreateMetadataMap(O, P, false);
                  if (IsUndefined(metadataMap))
                    return keys;
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
                }
                function Type(x) {
                  if (x === null)
                    return 1;
                  switch (Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(x)) {
                    case "undefined":
                      return 0;
                    case "boolean":
                      return 2;
                    case "string":
                      return 3;
                    case "symbol":
                      return 4;
                    case "number":
                      return 5;
                    case "object":
                      return x === null ? 1 : 6;
                    default:
                      return 6;
                  }
                }
                function IsUndefined(x) {
                  return x === void 0;
                }
                function IsNull(x) {
                  return x === null;
                }
                function IsSymbol(x) {
                  return Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(x) === "symbol";
                }
                function IsObject(x) {
                  return Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(x) === "object" ? x !== null : typeof x === "function";
                }
                function ToPrimitive(input, PreferredType) {
                  switch (Type(input)) {
                    case 0:
                      return input;
                    case 1:
                      return input;
                    case 2:
                      return input;
                    case 3:
                      return input;
                    case 4:
                      return input;
                    case 5:
                      return input;
                  }
                  var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
                  var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
                  if (exoticToPrim !== void 0) {
                    var result = exoticToPrim.call(input, hint);
                    if (IsObject(result))
                      throw new TypeError();
                    return result;
                  }
                  return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
                }
                function OrdinaryToPrimitive(O, hint) {
                  if (hint === "string") {
                    var toString_1 = O.toString;
                    if (IsCallable(toString_1)) {
                      var result = toString_1.call(O);
                      if (!IsObject(result))
                        return result;
                    }
                    var valueOf = O.valueOf;
                    if (IsCallable(valueOf)) {
                      var result = valueOf.call(O);
                      if (!IsObject(result))
                        return result;
                    }
                  } else {
                    var valueOf = O.valueOf;
                    if (IsCallable(valueOf)) {
                      var result = valueOf.call(O);
                      if (!IsObject(result))
                        return result;
                    }
                    var toString_2 = O.toString;
                    if (IsCallable(toString_2)) {
                      var result = toString_2.call(O);
                      if (!IsObject(result))
                        return result;
                    }
                  }
                  throw new TypeError();
                }
                function ToBoolean(argument) {
                  return !!argument;
                }
                function ToString(argument) {
                  return "" + argument;
                }
                function ToPropertyKey(argument) {
                  var key = ToPrimitive(argument, 3);
                  if (IsSymbol(key))
                    return key;
                  return ToString(key);
                }
                function IsArray(argument) {
                  return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
                }
                function IsCallable(argument) {
                  return typeof argument === "function";
                }
                function IsConstructor(argument) {
                  return typeof argument === "function";
                }
                function IsPropertyKey(argument) {
                  switch (Type(argument)) {
                    case 3:
                      return true;
                    case 4:
                      return true;
                    default:
                      return false;
                  }
                }
                function GetMethod(V, P) {
                  var func = V[P];
                  if (func === void 0 || func === null)
                    return void 0;
                  if (!IsCallable(func))
                    throw new TypeError();
                  return func;
                }
                function GetIterator(obj) {
                  var method = GetMethod(obj, iteratorSymbol);
                  if (!IsCallable(method))
                    throw new TypeError();
                  var iterator = method.call(obj);
                  if (!IsObject(iterator))
                    throw new TypeError();
                  return iterator;
                }
                function IteratorValue(iterResult) {
                  return iterResult.value;
                }
                function IteratorStep(iterator) {
                  var result = iterator.next();
                  return result.done ? false : result;
                }
                function IteratorClose(iterator) {
                  var f = iterator["return"];
                  if (f)
                    f.call(iterator);
                }
                function OrdinaryGetPrototypeOf(O) {
                  var proto = Object.getPrototypeOf(O);
                  if (typeof O !== "function" || O === functionPrototype)
                    return proto;
                  if (proto !== functionPrototype)
                    return proto;
                  var prototype = O.prototype;
                  var prototypeProto = prototype && Object.getPrototypeOf(prototype);
                  if (prototypeProto == null || prototypeProto === Object.prototype)
                    return proto;
                  var constructor = prototypeProto.constructor;
                  if (typeof constructor !== "function")
                    return proto;
                  if (constructor === O)
                    return proto;
                  return constructor;
                }
                function CreateMapPolyfill() {
                  var cacheSentinel = {};
                  var arraySentinel = [];
                  var MapIterator = function() {
                    function MapIterator2(keys, values, selector) {
                      this._index = 0;
                      this._keys = keys;
                      this._values = values;
                      this._selector = selector;
                    }
                    MapIterator2.prototype["@@iterator"] = function() {
                      return this;
                    };
                    MapIterator2.prototype[iteratorSymbol] = function() {
                      return this;
                    };
                    MapIterator2.prototype.next = function() {
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
                        value: void 0,
                        done: true
                      };
                    };
                    MapIterator2.prototype.throw = function(error) {
                      if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                      }
                      throw error;
                    };
                    MapIterator2.prototype.return = function(value) {
                      if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                      }
                      return {
                        value,
                        done: true
                      };
                    };
                    return MapIterator2;
                  }();
                  return function() {
                    function Map2() {
                      this._keys = [];
                      this._values = [];
                      this._cacheKey = cacheSentinel;
                      this._cacheIndex = -2;
                    }
                    Object.defineProperty(Map2.prototype, "size", {
                      get: function get2() {
                        return this._keys.length;
                      },
                      enumerable: true,
                      configurable: true
                    });
                    Map2.prototype.has = function(key) {
                      return this._find(key, false) >= 0;
                    };
                    Map2.prototype.get = function(key) {
                      var index = this._find(key, false);
                      return index >= 0 ? this._values[index] : void 0;
                    };
                    Map2.prototype.set = function(key, value) {
                      var index = this._find(key, true);
                      this._values[index] = value;
                      return this;
                    };
                    Map2.prototype.delete = function(key) {
                      var index = this._find(key, false);
                      if (index >= 0) {
                        var size2 = this._keys.length;
                        for (var i = index + 1; i < size2; i++) {
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
                    Map2.prototype.clear = function() {
                      this._keys.length = 0;
                      this._values.length = 0;
                      this._cacheKey = cacheSentinel;
                      this._cacheIndex = -2;
                    };
                    Map2.prototype.keys = function() {
                      return new MapIterator(this._keys, this._values, getKey);
                    };
                    Map2.prototype.values = function() {
                      return new MapIterator(this._keys, this._values, getValue2);
                    };
                    Map2.prototype.entries = function() {
                      return new MapIterator(this._keys, this._values, getEntry);
                    };
                    Map2.prototype["@@iterator"] = function() {
                      return this.entries();
                    };
                    Map2.prototype[iteratorSymbol] = function() {
                      return this.entries();
                    };
                    Map2.prototype._find = function(key, insert) {
                      if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                      }
                      if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(void 0);
                      }
                      return this._cacheIndex;
                    };
                    return Map2;
                  }();
                  function getKey(key, _) {
                    return key;
                  }
                  function getValue2(_, value) {
                    return value;
                  }
                  function getEntry(key, value) {
                    return [key, value];
                  }
                }
                function CreateSetPolyfill() {
                  return function() {
                    function Set2() {
                      this._map = new _Map();
                    }
                    Object.defineProperty(Set2.prototype, "size", {
                      get: function get2() {
                        return this._map.size;
                      },
                      enumerable: true,
                      configurable: true
                    });
                    Set2.prototype.has = function(value) {
                      return this._map.has(value);
                    };
                    Set2.prototype.add = function(value) {
                      return this._map.set(value, value), this;
                    };
                    Set2.prototype.delete = function(value) {
                      return this._map.delete(value);
                    };
                    Set2.prototype.clear = function() {
                      this._map.clear();
                    };
                    Set2.prototype.keys = function() {
                      return this._map.keys();
                    };
                    Set2.prototype.values = function() {
                      return this._map.values();
                    };
                    Set2.prototype.entries = function() {
                      return this._map.entries();
                    };
                    Set2.prototype["@@iterator"] = function() {
                      return this.keys();
                    };
                    Set2.prototype[iteratorSymbol] = function() {
                      return this.keys();
                    };
                    return Set2;
                  }();
                }
                function CreateWeakMapPolyfill() {
                  var UUID_SIZE = 16;
                  var keys = HashMap.create();
                  var rootKey = CreateUniqueKey();
                  return function() {
                    function WeakMap2() {
                      this._key = CreateUniqueKey();
                    }
                    WeakMap2.prototype.has = function(target) {
                      var table = GetOrCreateWeakMapTable(target, false);
                      return table !== void 0 ? HashMap.has(table, this._key) : false;
                    };
                    WeakMap2.prototype.get = function(target) {
                      var table = GetOrCreateWeakMapTable(target, false);
                      return table !== void 0 ? HashMap.get(table, this._key) : void 0;
                    };
                    WeakMap2.prototype.set = function(target, value) {
                      var table = GetOrCreateWeakMapTable(target, true);
                      table[this._key] = value;
                      return this;
                    };
                    WeakMap2.prototype.delete = function(target) {
                      var table = GetOrCreateWeakMapTable(target, false);
                      return table !== void 0 ? delete table[this._key] : false;
                    };
                    WeakMap2.prototype.clear = function() {
                      this._key = CreateUniqueKey();
                    };
                    return WeakMap2;
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
                      if (!create)
                        return void 0;
                      Object.defineProperty(target, rootKey, {
                        value: HashMap.create()
                      });
                    }
                    return target[rootKey];
                  }
                  function FillRandomBytes(buffer, size2) {
                    for (var i = 0; i < size2; ++i) {
                      buffer[i] = Math.random() * 255 | 0;
                    }
                    return buffer;
                  }
                  function GenRandomBytes(size2) {
                    if (typeof Uint8Array === "function") {
                      if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size2));
                      if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size2));
                      return FillRandomBytes(new Uint8Array(size2), size2);
                    }
                    return FillRandomBytes(new Array(size2), size2);
                  }
                  function CreateUUID() {
                    var data = GenRandomBytes(UUID_SIZE);
                    data[6] = data[6] & 79 | 64;
                    data[8] = data[8] & 191 | 128;
                    var result = "";
                    for (var offset = 0; offset < UUID_SIZE; ++offset) {
                      var byte = data[offset];
                      if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                      if (byte < 16)
                        result += "0";
                      result += byte.toString(16).toLowerCase();
                    }
                    return result;
                  }
                }
                function MakeDictionary(obj) {
                  obj.__ = void 0;
                  delete obj.__;
                  return obj;
                }
              });
            })(Reflect || (Reflect = {}));
          }
          function __decorate(decorators, target, key, desc) {
            var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if ((typeof Reflect === "undefined" ? "undefined" : Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(Reflect)) === "object" && typeof Reflect.decorate === "function")
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--) {
                if (d = decorators[i])
                  r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
              }
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          }
          function __param(paramIndex, decorator) {
            return function(target, key) {
              decorator(target, key, paramIndex);
            };
          }
          function __metadata(metadataKey, metadataValue) {
            if ((typeof Reflect === "undefined" ? "undefined" : Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(Reflect)) === "object" && typeof Reflect.metadata === "function")
              return Reflect.metadata(metadataKey, metadataValue);
          }
          var SERVICE_IDENTIFIER = {
            TaroElement: "TaroElement",
            TaroElementFactory: "Factory<TaroElement>",
            TaroText: "TaroText",
            TaroTextFactory: "Factory<TaroText>",
            TaroNodeImpl: "TaroNodeImpl",
            TaroElementImpl: "TaroElementImpl",
            InnerHTMLImpl: "InnerHTMLImpl",
            insertAdjacentHTMLImpl: "insertAdjacentHTMLImpl",
            getBoundingClientRectImpl: "getBoundingClientRectImpl",
            Hooks: "hooks",
            onRemoveAttribute: "onRemoveAttribute",
            getLifecycle: "getLifecycle",
            getPathIndex: "getPathIndex",
            getEventCenter: "getEventCenter",
            isBubbleEvents: "isBubbleEvents",
            getSpecialNodes: "getSpecialNodes",
            eventCenter: "eventCenter",
            modifyMpEvent: "modifyMpEvent",
            modifyTaroEvent: "modifyTaroEvent",
            batchedEventUpdates: "batchedEventUpdates",
            mergePageInstance: "mergePageInstance",
            createPullDownComponent: "createPullDownComponent",
            getDOMNode: "getDOMNode",
            initNativeApi: "initNativeApi",
            modifyHydrateData: "modifyHydrateData",
            modifySetAttrPayload: "modifySetAttrPayload",
            modifyRmAttrPayload: "modifyRmAttrPayload",
            onAddEvent: "onAddEvent",
            patchElement: "patchElement"
          };
          var PROPERTY_THRESHOLD = 2046;
          var HOOKS_APP_ID = "taro-app";
          var SET_DATA = "\u5C0F\u7A0B\u5E8F setData";
          var PAGE_INIT = "\u9875\u9762\u521D\u59CB\u5316";
          var ROOT_STR = "root";
          var HTML = "html";
          var HEAD = "head";
          var BODY = "body";
          var APP = "app";
          var CONTAINER = "container";
          var DOCUMENT_ELEMENT_NAME = "#document";
          var ID = "id";
          var UID = "uid";
          var CLASS = "class";
          var STYLE = "style";
          var FOCUS = "focus";
          var VIEW = "view";
          var STATIC_VIEW = "static-view";
          var PURE_VIEW = "pure-view";
          var PROPS = "props";
          var DATASET = "dataset";
          var OBJECT = "object";
          var VALUE = "value";
          var INPUT = "input";
          var CHANGE = "change";
          var CUSTOM_WRAPPER = "custom-wrapper";
          var TARGET = "target";
          var CURRENT_TARGET = "currentTarget";
          var TYPE = "type";
          var CONFIRM = "confirm";
          var TIME_STAMP = "timeStamp";
          var KEY_CODE = "keyCode";
          var TOUCHMOVE = "touchmove";
          var DATE = "Date";
          var SET_TIMEOUT = "setTimeout";
          var CATCHMOVE = "catchMove";
          var CATCH_VIEW = "catch-view";
          var COMMENT = "comment";
          var incrementId = function incrementId2() {
            var id = 0;
            return function() {
              return (id++).toString();
            };
          };
          function isElement(node) {
            return node.nodeType === 1;
          }
          function isText(node) {
            return node.nodeType === 3;
          }
          function isComment(node) {
            return node.nodeName === COMMENT;
          }
          function isHasExtractProp(el) {
            var res = Object.keys(el.props).find(function(prop) {
              return !(/^(class|style|id)$/.test(prop) || prop.startsWith("data-"));
            });
            return Boolean(res);
          }
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
                return "st";
              case ID:
                return UID;
              case CLASS:
                return "cl";
              default:
                return key;
            }
          }
          var TaroEventTarget = /* @__PURE__ */ function() {
            function TaroEventTarget2(hooks2) {
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, TaroEventTarget2);
              this.__handlers = {};
              this.hooks = hooks2;
            }
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(TaroEventTarget2, [{
              key: "addEventListener",
              value: function addEventListener(type, handler, options2) {
                var _a, _b;
                (_b = (_a = this.hooks).onAddEvent) === null || _b === void 0 ? void 0 : _b.call(_a, type, handler, options2, this);
                if (type === "regionchange") {
                  this.addEventListener("begin", handler, options2);
                  this.addEventListener("end", handler, options2);
                  return;
                }
                type = type.toLowerCase();
                var handlers = this.__handlers[type];
                var isCapture = Boolean(options2);
                var isOnce = false;
                if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isObject"])(options2)) {
                  isCapture = Boolean(options2.capture);
                  isOnce = Boolean(options2.once);
                }
                if (isOnce) {
                  var wrapper = function wrapper2() {
                    handler.apply(this, arguments);
                    this.removeEventListener(type, wrapper2);
                  };
                  this.addEventListener(type, wrapper, Object.assign(Object.assign({}, options2), {
                    once: false
                  }));
                  return;
                }
                Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["warn"])(isCapture, "Taro \u6682\u672A\u5B9E\u73B0 event \u7684 capture \u7279\u6027\u3002");
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
                Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["warn"])(index === -1, "\u4E8B\u4EF6: '".concat(type, "' \u6CA1\u6709\u6CE8\u518C\u5728 DOM \u4E2D\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u88AB\u79FB\u9664\u3002"));
                handlers.splice(index, 1);
              }
            }, {
              key: "isAnyEventBinded",
              value: function isAnyEventBinded() {
                var handlers = this.__handlers;
                var isAnyEventBinded2 = Object.keys(handlers).find(function(key) {
                  return handlers[key].length;
                });
                return Boolean(isAnyEventBinded2);
              }
            }]);
            return TaroEventTarget2;
          }();
          TaroEventTarget = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["d"])(), __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.Hooks)), __metadata("design:paramtypes", [Object])], TaroEventTarget);
          function hydrate(node) {
            var _data;
            var _a, _b;
            var nodeName = node.nodeName;
            if (isText(node)) {
              var _ref;
              return _ref = {}, Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["a"])(_ref, "v", node.nodeValue), Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["a"])(_ref, "nn", nodeName), _ref;
            }
            var data = (_data = {}, Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["a"])(_data, "nn", nodeName), Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["a"])(_data, "uid", node.uid), _data);
            var props = node.props;
            var SPECIAL_NODES = node.hooks.getSpecialNodes();
            if (!node.isAnyEventBinded() && SPECIAL_NODES.indexOf(nodeName) > -1) {
              data["nn"] = "static-".concat(nodeName);
              if (nodeName === VIEW && !isHasExtractProp(node)) {
                data["nn"] = PURE_VIEW;
              }
            }
            for (var prop in props) {
              var propInCamelCase = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["toCamelCase"])(prop);
              if (!prop.startsWith("data-") && prop !== CLASS && prop !== STYLE && prop !== ID && propInCamelCase !== CATCHMOVE) {
                data[propInCamelCase] = props[prop];
              }
              if (nodeName === VIEW && propInCamelCase === CATCHMOVE && props[prop] !== false) {
                data["nn"] = CATCH_VIEW;
              }
            }
            var childNodes = node.childNodes;
            childNodes = childNodes.filter(function(node2) {
              return !isComment(node2);
            });
            if (childNodes.length > 0) {
              data["cn"] = childNodes.map(hydrate);
            } else {
              data["cn"] = [];
            }
            if (node.className !== "") {
              data["cl"] = node.className;
            }
            if (node.cssText !== "" && nodeName !== "swiper-item") {
              data["st"] = node.cssText;
            }
            (_b = (_a = node.hooks).modifyHydrateData) === null || _b === void 0 ? void 0 : _b.call(_a, data);
            return data;
          }
          var eventSource = new Map();
          var ElementNames;
          (function(ElementNames2) {
            ElementNames2["Element"] = "Element";
            ElementNames2["Document"] = "Document";
            ElementNames2["RootElement"] = "RootElement";
            ElementNames2["FormElement"] = "FormElement";
          })(ElementNames || (ElementNames = {}));
          var nodeId = incrementId();
          var TaroNode = /* @__PURE__ */ function(_TaroEventTarget) {
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["a"])(TaroNode2, _TaroEventTarget);
            var _super = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["a"])(TaroNode2);
            function TaroNode2(impl, getElement2, hooks2) {
              var _this;
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, TaroNode2);
              _this = _super.call(this, hooks2);
              _this.parentNode = null;
              _this.childNodes = [];
              _this.hydrate = function(node) {
                return function() {
                  return hydrate(node);
                };
              };
              impl.bind(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["a"])(_this));
              _this._getElement = getElement2;
              _this.uid = "_n_".concat(nodeId());
              eventSource.set(_this.uid, Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["a"])(_this));
              return _this;
            }
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(TaroNode2, [{
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
              get: function get2() {
                var _a;
                return ((_a = this.parentNode) === null || _a === void 0 ? void 0 : _a._root) || null;
              }
            }, {
              key: "findIndex",
              value: function findIndex(refChild) {
                var index = this.childNodes.indexOf(refChild);
                Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["ensure"])(index !== -1, "The node to be replaced is not a child of this node.");
                return index;
              }
            }, {
              key: "_path",
              get: function get2() {
                var parentNode = this.parentNode;
                if (parentNode) {
                  var list = parentNode.childNodes.filter(function(node) {
                    return !isComment(node);
                  });
                  var indexOfNode = list.indexOf(this);
                  var index = this.hooks.getPathIndex(indexOfNode);
                  return "".concat(parentNode._path, ".", "cn", ".").concat(index);
                }
                return "";
              }
            }, {
              key: "nextSibling",
              get: function get2() {
                var parentNode = this.parentNode;
                return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) + 1]) || null;
              }
            }, {
              key: "previousSibling",
              get: function get2() {
                var parentNode = this.parentNode;
                return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) - 1]) || null;
              }
            }, {
              key: "parentElement",
              get: function get2() {
                var parentNode = this.parentNode;
                if ((parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeType) === 1) {
                  return parentNode;
                }
                return null;
              }
            }, {
              key: "firstChild",
              get: function get2() {
                return this.childNodes[0] || null;
              }
            }, {
              key: "lastChild",
              get: function get2() {
                var childNodes = this.childNodes;
                return childNodes[childNodes.length - 1] || null;
              }
            }, {
              key: "textContent",
              set: function set(text) {
                this._empty();
                if (text === "") {
                  this.enqueueUpdate({
                    path: "".concat(this._path, ".", "cn"),
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
                      path: "".concat(this._path, ".", "cn"),
                      value: function value() {
                        var childNodes = _this2.childNodes.filter(function(node) {
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
                    path: "".concat(this._path, ".", "cn"),
                    value: function value() {
                      var childNodes = _this3.childNodes.filter(function(node) {
                        return !isComment(node);
                      });
                      return childNodes.map(hydrate);
                    }
                  });
                }
                child.parentNode = null;
                eventSource.delete(child.uid);
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
                var isDeep = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
                var document2 = this._getElement(ElementNames.Document)();
                var newNode;
                if (this.nodeType === 1) {
                  newNode = document2.createElement(this.nodeName);
                } else if (this.nodeType === 3) {
                  newNode = document2.createTextNode("");
                }
                for (var key in this) {
                  var value = this[key];
                  if ([PROPS, DATASET].includes(key) && Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(value) === OBJECT) {
                    newNode[key] = Object.assign({}, value);
                  } else if (key === "_value") {
                    newNode[key] = value;
                  } else if (key === STYLE) {
                    newNode.style._value = Object.assign({}, value._value);
                    newNode.style._usedStyleProp = new Set(Array.from(value._usedStyleProp));
                  }
                }
                if (isDeep) {
                  newNode.childNodes = this.childNodes.map(function(node) {
                    return node.cloneNode(true);
                  });
                }
                return newNode;
              }
            }, {
              key: "contains",
              value: function contains(node) {
                var isContains = false;
                this.childNodes.some(function(childNode) {
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
              get: function get2() {
                var document2 = this._getElement(ElementNames.Document)();
                return document2;
              }
            }]);
            return TaroNode2;
          }(TaroEventTarget);
          TaroNode = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["d"])(), __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.TaroNodeImpl)), __param(1, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.TaroElementFactory)), __param(2, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.Hooks)), __metadata("design:paramtypes", [Function, Function, Function])], TaroNode);
          var TaroText = /* @__PURE__ */ function(_TaroNode) {
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["a"])(TaroText2, _TaroNode);
            var _super2 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["a"])(TaroText2);
            function TaroText2(nodeImpl, getElement2, hooks2) {
              var _this4;
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, TaroText2);
              _this4 = _super2.call(this, nodeImpl, getElement2, hooks2);
              _this4.nodeType = 3;
              _this4.nodeName = "#text";
              return _this4;
            }
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(TaroText2, [{
              key: "textContent",
              get: function get2() {
                return this._value;
              },
              set: function set(text) {
                this._value = text;
                this.enqueueUpdate({
                  path: "".concat(this._path, ".", "v"),
                  value: text
                });
              }
            }, {
              key: "nodeValue",
              get: function get2() {
                return this._value;
              },
              set: function set(text) {
                this.textContent = text;
              }
            }]);
            return TaroText2;
          }(TaroNode);
          TaroText = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["d"])(), __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.TaroNodeImpl)), __param(1, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.TaroElementFactory)), __param(2, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.Hooks)), __metadata("design:paramtypes", [Function, Function, Function])], TaroText);
          var styleProperties = [
            "all",
            "appearance",
            "blockOverflow",
            "blockSize",
            "bottom",
            "clear",
            "contain",
            "content",
            "continue",
            "cursor",
            "direction",
            "display",
            "filter",
            "float",
            "gap",
            "height",
            "inset",
            "isolation",
            "left",
            "letterSpacing",
            "lightingColor",
            "markerSide",
            "mixBlendMode",
            "opacity",
            "order",
            "position",
            "quotes",
            "resize",
            "right",
            "rowGap",
            "tabSize",
            "tableLayout",
            "top",
            "userSelect",
            "verticalAlign",
            "visibility",
            "voiceFamily",
            "volume",
            "whiteSpace",
            "widows",
            "width",
            "zIndex"
          ];
          function combine(prefix, list, excludeSelf) {
            !excludeSelf && styleProperties.push(prefix);
            list.forEach(function(item) {
              styleProperties.push(prefix + item);
            });
          }
          var color = "Color";
          var style = "Style";
          var width = "Width";
          var image = "Image";
          var size = "Size";
          var color_style_width = [color, style, width];
          var fitlength_fitwidth_image = ["FitLength", "FitWidth", image];
          var fitlength_fitwidth_image_radius = [].concat(fitlength_fitwidth_image, ["Radius"]);
          var color_style_width_fitlength_fitwidth_image = [].concat(color_style_width, fitlength_fitwidth_image);
          var endRadius_startRadius = ["EndRadius", "StartRadius"];
          var bottom_left_right_top = ["Bottom", "Left", "Right", "Top"];
          var end_start = ["End", "Start"];
          var content_items_self = ["Content", "Items", "Self"];
          var blockSize_height_inlineSize_width = ["BlockSize", "Height", "InlineSize", width];
          var after_before = ["After", "Before"];
          combine("borderBlock", color_style_width);
          combine("borderBlockEnd", color_style_width);
          combine("borderBlockStart", color_style_width);
          combine("outline", [].concat(color_style_width, ["Offset"]));
          combine("border", [].concat(color_style_width, ["Boundary", "Break", "Collapse", "Radius", "Spacing"]));
          combine("borderFit", ["Length", width]);
          combine("borderInline", color_style_width);
          combine("borderInlineEnd", color_style_width);
          combine("borderInlineStart", color_style_width);
          combine("borderLeft", color_style_width_fitlength_fitwidth_image);
          combine("borderRight", color_style_width_fitlength_fitwidth_image);
          combine("borderTop", color_style_width_fitlength_fitwidth_image);
          combine("borderBottom", color_style_width_fitlength_fitwidth_image);
          combine("textDecoration", [color, style, "Line"]);
          combine("textEmphasis", [color, style, "Position"]);
          combine("scrollMargin", bottom_left_right_top);
          combine("scrollPadding", bottom_left_right_top);
          combine("padding", bottom_left_right_top);
          combine("margin", [].concat(bottom_left_right_top, ["Trim"]));
          combine("scrollMarginBlock", end_start);
          combine("scrollMarginInline", end_start);
          combine("scrollPaddingBlock", end_start);
          combine("scrollPaddingInline", end_start);
          combine("gridColumn", end_start);
          combine("gridRow", end_start);
          combine("insetBlock", end_start);
          combine("insetInline", end_start);
          combine("marginBlock", end_start);
          combine("marginInline", end_start);
          combine("paddingBlock", end_start);
          combine("paddingInline", end_start);
          combine("pause", after_before);
          combine("cue", after_before);
          combine("mask", ["Clip", "Composite", image, "Mode", "Origin", "Position", "Repeat", size, "Type"]);
          combine("borderImage", ["Outset", "Repeat", "Slice", "Source", "Transform", width]);
          combine("maskBorder", ["Mode", "Outset", "Repeat", "Slice", "Source", width]);
          combine("font", ["Family", "FeatureSettings", "Kerning", "LanguageOverride", "MaxSize", "MinSize", "OpticalSizing", "Palette", size, "SizeAdjust", "Stretch", style, "Weight", "VariationSettings"]);
          combine("fontSynthesis", ["SmallCaps", style, "Weight"]);
          combine("transform", ["Box", "Origin", style]);
          combine("background", [color, image, "Attachment", "BlendMode", "Clip", "Origin", "Position", "Repeat", size]);
          combine("listStyle", [image, "Position", "Type"]);
          combine("scrollSnap", ["Align", "Stop", "Type"]);
          combine("grid", ["Area", "AutoColumns", "AutoFlow", "AutoRows"]);
          combine("gridTemplate", ["Areas", "Columns", "Rows"]);
          combine("overflow", ["Block", "Inline", "Wrap", "X", "Y"]);
          combine("transition", ["Delay", "Duration", "Property", "TimingFunction"]);
          combine("lineStacking", ["Ruby", "Shift", "Strategy"]);
          combine("color", ["Adjust", "InterpolationFilters", "Scheme"]);
          combine("textAlign", ["All", "Last"]);
          combine("page", ["BreakAfter", "BreakBefore", "BreakInside"]);
          combine("speak", ["Header", "Numeral", "Punctuation"]);
          combine("animation", ["Delay", "Direction", "Duration", "FillMode", "IterationCount", "Name", "PlayState", "TimingFunction"]);
          combine("flex", ["Basis", "Direction", "Flow", "Grow", "Shrink", "Wrap"]);
          combine("offset", [].concat(after_before, end_start, ["Anchor", "Distance", "Path", "Position", "Rotate"]));
          combine("fontVariant", ["Alternates", "Caps", "EastAsian", "Emoji", "Ligatures", "Numeric", "Position"]);
          combine("perspective", ["Origin"]);
          combine("pitch", ["Range"]);
          combine("clip", ["Path", "Rule"]);
          combine("flow", ["From", "Into"]);
          combine("align", ["Content", "Items", "Self"], true);
          combine("alignment", ["Adjust", "Baseline"], true);
          combine("bookmark", ["Label", "Level", "State"], true);
          combine("borderStart", endRadius_startRadius, true);
          combine("borderEnd", endRadius_startRadius, true);
          combine("borderCorner", ["Fit", image, "ImageTransform"], true);
          combine("borderTopLeft", fitlength_fitwidth_image_radius, true);
          combine("borderTopRight", fitlength_fitwidth_image_radius, true);
          combine("borderBottomLeft", fitlength_fitwidth_image_radius, true);
          combine("borderBottomRight", fitlength_fitwidth_image_radius, true);
          combine("column", ["s", "Count", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "Span", width], true);
          combine("break", [].concat(after_before, ["Inside"]), true);
          combine("wrap", [].concat(after_before, ["Flow", "Inside", "Through"]), true);
          combine("justify", content_items_self, true);
          combine("place", content_items_self, true);
          combine("max", [].concat(blockSize_height_inlineSize_width, ["Lines"]), true);
          combine("min", blockSize_height_inlineSize_width, true);
          combine("line", ["Break", "Clamp", "Grid", "Height", "Padding", "Snap"], true);
          combine("inline", ["BoxAlign", size, "Sizing"], true);
          combine("text", ["CombineUpright", "GroupAlign", "Height", "Indent", "Justify", "Orientation", "Overflow", "Shadow", "SpaceCollapse", "SpaceTrim", "Spacing", "Transform", "UnderlinePosition", "Wrap"], true);
          combine("shape", ["ImageThreshold", "Inside", "Margin", "Outside"], true);
          combine("word", ["Break", "Spacing", "Wrap"], true);
          combine("nav", ["Down", "Left", "Right", "Up"], true);
          combine("object", ["Fit", "Position"], true);
          combine("box", ["DecorationBreak", "Shadow", "Sizing", "Snap"], true);
          function setStyle(newVal, styleKey) {
            var old = this[styleKey];
            if (newVal) {
              this._usedStyleProp.add(styleKey);
            }
            Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["warn"])(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isString"])(newVal) && newVal.length > PROPERTY_THRESHOLD, "Style \u5C5E\u6027 ".concat(styleKey, " \u7684\u503C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\uFF0C\u8003\u8651\u4F7F\u7528 CSS \u7C7B\u6216\u5176\u5B83\u65B9\u6848\u66FF\u4EE3\u3002"));
            if (old !== newVal) {
              this._value[styleKey] = newVal;
              this._element.enqueueUpdate({
                path: "".concat(this._element._path, ".", "st"),
                value: this.cssText
              });
            }
          }
          function initStyle(ctor) {
            var properties = {};
            var _loop = function _loop2(i2) {
              var styleKey = styleProperties[i2];
              properties[styleKey] = {
                get: function get2() {
                  return this._value[styleKey] || "";
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
          var Style = /* @__PURE__ */ function() {
            function Style2(element) {
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, Style2);
              this._element = element;
              this._usedStyleProp = new Set();
              this._value = {};
            }
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(Style2, [{
              key: "setCssVariables",
              value: function setCssVariables(styleKey) {
                var _this5 = this;
                this.hasOwnProperty(styleKey) || Object.defineProperty(this, styleKey, {
                  enumerable: true,
                  configurable: true,
                  get: function get2() {
                    return _this5._value[styleKey] || "";
                  },
                  set: function set(newVal) {
                    setStyle.call(_this5, newVal, styleKey);
                  }
                });
              }
            }, {
              key: "cssText",
              get: function get2() {
                var _this6 = this;
                var text = "";
                this._usedStyleProp.forEach(function(key) {
                  var val = _this6[key];
                  if (!val)
                    return;
                  var styleName = isCssVariable(key) ? key : Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["toDashed"])(key);
                  text += "".concat(styleName, ": ").concat(val, ";");
                });
                return text;
              },
              set: function set(str) {
                var _this7 = this;
                if (str == null) {
                  str = "";
                }
                this._usedStyleProp.forEach(function(prop) {
                  _this7.removeProperty(prop);
                });
                if (str === "") {
                  return;
                }
                var rules = str.split(";");
                for (var i = 0; i < rules.length; i++) {
                  var rule = rules[i].trim();
                  if (rule === "") {
                    continue;
                  }
                  var _rule$split = rule.split(":"), _rule$split2 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_8__["a"])(_rule$split), propName = _rule$split2[0], valList = _rule$split2.slice(1);
                  var val = valList.join(":");
                  if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isUndefined"])(val)) {
                    continue;
                  }
                  this.setProperty(propName.trim(), val.trim());
                }
              }
            }, {
              key: "setProperty",
              value: function setProperty(propertyName, value) {
                if (propertyName[0] === "-") {
                  this.setCssVariables(propertyName);
                } else {
                  propertyName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["toCamelCase"])(propertyName);
                }
                if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isUndefined"])(value)) {
                  return;
                }
                if (value === null || value === "") {
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
                  return "";
                }
                var value = this[propertyName];
                this[propertyName] = "";
                this._usedStyleProp.delete(propertyName);
                return value;
              }
            }, {
              key: "getPropertyValue",
              value: function getPropertyValue(propertyName) {
                propertyName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["toCamelCase"])(propertyName);
                var value = this[propertyName];
                if (!value) {
                  return "";
                }
                return value;
              }
            }]);
            return Style2;
          }();
          initStyle(Style);
          function returnTrue() {
            return true;
          }
          function treeToArray(root2, predict) {
            var array = [];
            var filter = predict !== null && predict !== void 0 ? predict : returnTrue;
            var object = root2;
            while (object) {
              if (object.nodeType === 1 && filter(object)) {
                array.push(object);
              }
              object = following(object, root2);
            }
            return array;
          }
          function following(el, root2) {
            var firstChild = el.firstChild;
            if (firstChild) {
              return firstChild;
            }
            var current = el;
            do {
              if (current === root2) {
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
          var ClassList = /* @__PURE__ */ function(_Set2) {
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["a"])(ClassList2, _Set2);
            var _super3 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["a"])(ClassList2);
            function ClassList2(className, el) {
              var _thisSuper, _this8;
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, ClassList2);
              _this8 = _super3.call(this);
              className.trim().split(/\s+/).forEach(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])((_thisSuper = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["a"])(_this8), Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(ClassList2.prototype)), "add", _thisSuper).bind(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["a"])(_this8)));
              _this8.el = el;
              return _this8;
            }
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(ClassList2, [{
              key: "value",
              get: function get2() {
                return Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["a"])(this).join(" ");
              }
            }, {
              key: "add",
              value: function add(s) {
                Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(ClassList2.prototype), "add", this).call(this, s);
                this._update();
                return this;
              }
            }, {
              key: "length",
              get: function get2() {
                return this.size;
              }
            }, {
              key: "remove",
              value: function remove(s) {
                Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(ClassList2.prototype), "delete", this).call(this, s);
                this._update();
              }
            }, {
              key: "toggle",
              value: function toggle(s) {
                if (Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(ClassList2.prototype), "has", this).call(this, s)) {
                  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(ClassList2.prototype), "delete", this).call(this, s);
                } else {
                  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(ClassList2.prototype), "add", this).call(this, s);
                }
                this._update();
              }
            }, {
              key: "replace",
              value: function replace(s1, s2) {
                Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(ClassList2.prototype), "delete", this).call(this, s1);
                Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(ClassList2.prototype), "add", this).call(this, s2);
                this._update();
              }
            }, {
              key: "contains",
              value: function contains(s) {
                return Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(ClassList2.prototype), "has", this).call(this, s);
              }
            }, {
              key: "toString",
              value: function toString2() {
                return this.value;
              }
            }, {
              key: "_update",
              value: function _update() {
                this.el.className = this.value;
              }
            }]);
            return ClassList2;
          }(/* @__PURE__ */ Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__["a"])(Set));
          var TaroElement = /* @__PURE__ */ function(_TaroNode2) {
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["a"])(TaroElement2, _TaroNode2);
            var _super4 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["a"])(TaroElement2);
            function TaroElement2(nodeImpl, getElement2, hooks2, elementImpl) {
              var _this9;
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, TaroElement2);
              _this9 = _super4.call(this, nodeImpl, getElement2, hooks2);
              _this9.props = {};
              _this9.dataset = _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"];
              elementImpl.bind(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["a"])(_this9));
              _this9.nodeType = 1;
              _this9.style = new Style(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["a"])(_this9));
              hooks2.patchElement(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["a"])(_this9));
              return _this9;
            }
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(TaroElement2, [{
              key: "_stopPropagation",
              value: function _stopPropagation(event) {
                var target = this;
                while (target = target.parentNode) {
                  var listeners = target.__handlers[event.type];
                  if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isArray"])(listeners)) {
                    continue;
                  }
                  for (var i = listeners.length; i--; ) {
                    var l = listeners[i];
                    l._stop = true;
                  }
                }
              }
            }, {
              key: "id",
              get: function get2() {
                return this.getAttribute(ID);
              },
              set: function set(val) {
                this.setAttribute(ID, val);
              }
            }, {
              key: "className",
              get: function get2() {
                return this.getAttribute(CLASS) || "";
              },
              set: function set(val) {
                this.setAttribute(CLASS, val);
              }
            }, {
              key: "cssText",
              get: function get2() {
                return this.getAttribute(STYLE) || "";
              }
            }, {
              key: "classList",
              get: function get2() {
                return new ClassList(this.className, this);
              }
            }, {
              key: "children",
              get: function get2() {
                return this.childNodes.filter(isElement);
              }
            }, {
              key: "attributes",
              get: function get2() {
                var props = this.props;
                var propKeys = Object.keys(props);
                var style2 = this.style.cssText;
                var attrs = propKeys.map(function(key) {
                  return {
                    name: key,
                    value: props[key]
                  };
                });
                return attrs.concat(style2 ? {
                  name: STYLE,
                  value: style2
                } : []);
              }
            }, {
              key: "textContent",
              get: function get2() {
                var text = "";
                var childNodes = this.childNodes;
                for (var i = 0; i < childNodes.length; i++) {
                  text += childNodes[i].textContent;
                }
                return text;
              },
              set: function set(text) {
                Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_3__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(TaroElement2.prototype), "textContent", text, this, true);
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
                Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["warn"])(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isString"])(value) && value.length > PROPERTY_THRESHOLD, "\u5143\u7D20 ".concat(this.nodeName, " \u7684 \u5C5E\u6027 ").concat(qualifiedName, " \u7684\u503C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\u3002\u8003\u8651\u964D\u4F4E\u56FE\u7247\u8F6C\u4E3A base64 \u7684\u9608\u503C\u6216\u5728 CSS \u4E2D\u4F7F\u7528 base64\u3002"));
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
                    if (qualifiedName.startsWith("data-")) {
                      if (this.dataset === _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"]) {
                        this.dataset = Object.create(null);
                      }
                      this.dataset[Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["toCamelCase"])(qualifiedName.replace(/^data-/, ""))] = value;
                    }
                    break;
                }
                qualifiedName = shortcutAttr(qualifiedName);
                var payload = {
                  path: "".concat(this._path, ".").concat(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["toCamelCase"])(qualifiedName)),
                  value
                };
                (_b = (_a = this.hooks).modifySetAttrPayload) === null || _b === void 0 ? void 0 : _b.call(_a, this, qualifiedName, payload);
                this.enqueueUpdate(payload);
                if (this.nodeName === VIEW) {
                  if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["toCamelCase"])(qualifiedName) === CATCHMOVE) {
                    this.enqueueUpdate({
                      path: "".concat(this._path, ".", "nn"),
                      value: value ? CATCH_VIEW : this.isAnyEventBinded() ? VIEW : STATIC_VIEW
                    });
                  } else if (isPureView && isHasExtractProp(this)) {
                    this.enqueueUpdate({
                      path: "".concat(this._path, ".", "nn"),
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
                  this.style.cssText = "";
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
                  value: ""
                };
                (_d = (_c = this.hooks).modifyRmAttrPayload) === null || _d === void 0 ? void 0 : _d.call(_c, this, qualifiedName, payload);
                this.enqueueUpdate(payload);
                if (this.nodeName === VIEW) {
                  if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["toCamelCase"])(qualifiedName) === CATCHMOVE) {
                    this.enqueueUpdate({
                      path: "".concat(this._path, ".", "nn"),
                      value: this.isAnyEventBinded() ? VIEW : isHasExtractProp(this) ? STATIC_VIEW : PURE_VIEW
                    });
                  } else if (isStaticView && !isHasExtractProp(this)) {
                    this.enqueueUpdate({
                      path: "".concat(this._path, ".", "nn"),
                      value: PURE_VIEW
                    });
                  }
                }
              }
            }, {
              key: "getAttribute",
              value: function getAttribute(qualifiedName) {
                var attr = qualifiedName === STYLE ? this.style.cssText : this.props[qualifiedName];
                return attr !== null && attr !== void 0 ? attr : "";
              }
            }, {
              key: "getElementsByTagName",
              value: function getElementsByTagName(tagName) {
                var _this10 = this;
                return treeToArray(this, function(el) {
                  return el.nodeName === tagName || tagName === "*" && _this10 !== el;
                });
              }
            }, {
              key: "getElementsByClassName",
              value: function getElementsByClassName(className) {
                return treeToArray(this, function(el) {
                  var classList = el.classList;
                  var classNames = className.trim().split(/\s+/);
                  return classNames.every(function(c) {
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
                for (var i = listeners.length; i--; ) {
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
              value: function addEventListener(type, handler, options2) {
                var name = this.nodeName;
                var SPECIAL_NODES = this.hooks.getSpecialNodes();
                if (!this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
                  this.enqueueUpdate({
                    path: "".concat(this._path, ".", "nn"),
                    value: name
                  });
                }
                Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(TaroElement2.prototype), "addEventListener", this).call(this, type, handler, options2);
              }
            }, {
              key: "removeEventListener",
              value: function removeEventListener(type, handler) {
                Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(TaroElement2.prototype), "removeEventListener", this).call(this, type, handler);
                var name = this.nodeName;
                var SPECIAL_NODES = this.hooks.getSpecialNodes();
                if (!this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
                  this.enqueueUpdate({
                    path: "".concat(this._path, ".", "nn"),
                    value: isHasExtractProp(this) ? "static-".concat(name) : "pure-".concat(name)
                  });
                }
              }
            }]);
            return TaroElement2;
          }(TaroNode);
          TaroElement = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["d"])(), __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.TaroNodeImpl)), __param(1, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.TaroElementFactory)), __param(2, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.Hooks)), __param(3, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.TaroElementImpl)), __metadata("design:paramtypes", [Function, Function, Function, Function])], TaroElement);
          var isArray = Array.isArray;
          var freeGlobal = (typeof global === "undefined" ? "undefined" : Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(global)) == "object" && global && global.Object === Object && global;
          var freeSelf = (typeof self === "undefined" ? "undefined" : Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(self)) == "object" && self && self.Object === Object && self;
          var root = freeGlobal || freeSelf || Function("return this")();
          var Symbol$1 = root.Symbol;
          var objectProto = Object.prototype;
          var hasOwnProperty = objectProto.hasOwnProperty;
          var nativeObjectToString = objectProto.toString;
          var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
          function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
            try {
              value[symToStringTag] = void 0;
              var unmasked = true;
            } catch (e) {
            }
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
          var objectProto$1 = Object.prototype;
          var nativeObjectToString$1 = objectProto$1.toString;
          function objectToString(value) {
            return nativeObjectToString$1.call(value);
          }
          var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
          var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
          function baseGetTag(value) {
            if (value == null) {
              return value === void 0 ? undefinedTag : nullTag;
            }
            return symToStringTag$1 && symToStringTag$1 in Object(value) ? getRawTag(value) : objectToString(value);
          }
          function isObjectLike(value) {
            return value != null && Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(value) == "object";
          }
          var symbolTag = "[object Symbol]";
          function isSymbol(value) {
            return Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(value) == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
          }
          var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
          function isKey(value, object) {
            if (isArray(value)) {
              return false;
            }
            var type = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(value);
            if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
              return true;
            }
            return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
          }
          function isObject(value) {
            var type = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(value);
            return value != null && (type == "object" || type == "function");
          }
          var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
          function isFunction(value) {
            if (!isObject(value)) {
              return false;
            }
            var tag = baseGetTag(value);
            return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
          }
          var coreJsData = root["__core-js_shared__"];
          var maskSrcKey = function() {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
            return uid ? "Symbol(src)_1." + uid : "";
          }();
          function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
          }
          var funcProto = Function.prototype;
          var funcToString = funcProto.toString;
          function toSource(func) {
            if (func != null) {
              try {
                return funcToString.call(func);
              } catch (e) {
              }
              try {
                return func + "";
              } catch (e) {
              }
            }
            return "";
          }
          var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
          var reIsHostCtor = /^\[object .+?Constructor\]$/;
          var funcProto$1 = Function.prototype, objectProto$2 = Object.prototype;
          var funcToString$1 = funcProto$1.toString;
          var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
          var reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
          function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) {
              return false;
            }
            var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
          }
          function getValue(object, key) {
            return object == null ? void 0 : object[key];
          }
          function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : void 0;
          }
          var nativeCreate = getNative(Object, "create");
          function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
            this.size = 0;
          }
          function hashDelete(key) {
            var result = this.has(key) && delete this.__data__[key];
            this.size -= result ? 1 : 0;
            return result;
          }
          var HASH_UNDEFINED = "__lodash_hash_undefined__";
          var objectProto$3 = Object.prototype;
          var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
          function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
              var result = data[key];
              return result === HASH_UNDEFINED ? void 0 : result;
            }
            return hasOwnProperty$2.call(data, key) ? data[key] : void 0;
          }
          var objectProto$4 = Object.prototype;
          var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
          function hashHas(key) {
            var data = this.__data__;
            return nativeCreate ? data[key] !== void 0 : hasOwnProperty$3.call(data, key);
          }
          var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
          function hashSet(key, value) {
            var data = this.__data__;
            this.size += this.has(key) ? 0 : 1;
            data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
            return this;
          }
          function Hash(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          Hash.prototype.clear = hashClear;
          Hash.prototype["delete"] = hashDelete;
          Hash.prototype.get = hashGet;
          Hash.prototype.has = hashHas;
          Hash.prototype.set = hashSet;
          function listCacheClear() {
            this.__data__ = [];
            this.size = 0;
          }
          function eq(value, other) {
            return value === other || value !== value && other !== other;
          }
          function assocIndexOf(array, key) {
            var length = array.length;
            while (length--) {
              if (eq(array[length][0], key)) {
                return length;
              }
            }
            return -1;
          }
          var arrayProto = Array.prototype;
          var splice = arrayProto.splice;
          function listCacheDelete(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
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
          function listCacheGet(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            return index < 0 ? void 0 : data[index][1];
          }
          function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
          }
          function listCacheSet(key, value) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
              ++this.size;
              data.push([key, value]);
            } else {
              data[index][1] = value;
            }
            return this;
          }
          function ListCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          ListCache.prototype.clear = listCacheClear;
          ListCache.prototype["delete"] = listCacheDelete;
          ListCache.prototype.get = listCacheGet;
          ListCache.prototype.has = listCacheHas;
          ListCache.prototype.set = listCacheSet;
          var Map$1 = getNative(root, "Map");
          function mapCacheClear() {
            this.size = 0;
            this.__data__ = {
              "hash": new Hash(),
              "map": new (Map$1 || ListCache)(),
              "string": new Hash()
            };
          }
          function isKeyable(value) {
            var type = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(value);
            return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
          }
          function getMapData(map, key) {
            var data = map.__data__;
            return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
          }
          function mapCacheDelete(key) {
            var result = getMapData(this, key)["delete"](key);
            this.size -= result ? 1 : 0;
            return result;
          }
          function mapCacheGet(key) {
            return getMapData(this, key).get(key);
          }
          function mapCacheHas(key) {
            return getMapData(this, key).has(key);
          }
          function mapCacheSet(key, value) {
            var data = getMapData(this, key), size2 = data.size;
            data.set(key, value);
            this.size += data.size == size2 ? 0 : 1;
            return this;
          }
          function MapCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          MapCache.prototype.clear = mapCacheClear;
          MapCache.prototype["delete"] = mapCacheDelete;
          MapCache.prototype.get = mapCacheGet;
          MapCache.prototype.has = mapCacheHas;
          MapCache.prototype.set = mapCacheSet;
          var FUNC_ERROR_TEXT = "Expected a function";
          function memoize(func, resolver) {
            if (typeof func != "function" || resolver != null && typeof resolver != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            var memoized = function memoized2() {
              var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized2.cache;
              if (cache.has(key)) {
                return cache.get(key);
              }
              var result = func.apply(this, args);
              memoized2.cache = cache.set(key, result) || cache;
              return result;
            };
            memoized.cache = new (memoize.Cache || MapCache)();
            return memoized;
          }
          memoize.Cache = MapCache;
          var MAX_MEMOIZE_SIZE = 500;
          function memoizeCapped(func) {
            var result = memoize(func, function(key) {
              if (cache.size === MAX_MEMOIZE_SIZE) {
                cache.clear();
              }
              return key;
            });
            var cache = result.cache;
            return result;
          }
          var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
          var reEscapeChar = /\\(\\)?/g;
          var stringToPath = memoizeCapped(function(string) {
            var result = [];
            if (string.charCodeAt(0) === 46) {
              result.push("");
            }
            string.replace(rePropName, function(match, number, quote, subString) {
              result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
            });
            return result;
          });
          function arrayMap(array, iteratee) {
            var index = -1, length = array == null ? 0 : array.length, result = Array(length);
            while (++index < length) {
              result[index] = iteratee(array[index], index, array);
            }
            return result;
          }
          var INFINITY = 1 / 0;
          var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
          function baseToString(value) {
            if (typeof value == "string") {
              return value;
            }
            if (isArray(value)) {
              return arrayMap(value, baseToString) + "";
            }
            if (isSymbol(value)) {
              return symbolToString ? symbolToString.call(value) : "";
            }
            var result = value + "";
            return result == "0" && 1 / value == -INFINITY ? "-0" : result;
          }
          function toString(value) {
            return value == null ? "" : baseToString(value);
          }
          function castPath(value, object) {
            if (isArray(value)) {
              return value;
            }
            return isKey(value, object) ? [value] : stringToPath(toString(value));
          }
          var INFINITY$1 = 1 / 0;
          function toKey(value) {
            if (typeof value == "string" || isSymbol(value)) {
              return value;
            }
            var result = value + "";
            return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
          }
          function baseGet(object, path) {
            path = castPath(path, object);
            var index = 0, length = path.length;
            while (object != null && index < length) {
              object = object[toKey(path[index++])];
            }
            return index && index == length ? object : void 0;
          }
          function get(object, path, defaultValue) {
            var result = object == null ? void 0 : baseGet(object, path);
            return result === void 0 ? defaultValue : result;
          }
          var options = {
            prerender: true,
            debug: false
          };
          var Performance = /* @__PURE__ */ function() {
            function Performance2() {
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, Performance2);
              this.recorder = new Map();
            }
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(Performance2, [{
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
                var now2 = Date.now();
                var prev = this.recorder.get(id);
                var time = now2 - prev;
                console.log("".concat(id, " \u65F6\u957F\uFF1A ").concat(time, "ms"));
              }
            }]);
            return Performance2;
          }();
          var perf = new Performance();
          var eventIncrementId = incrementId();
          var TaroRootElement = /* @__PURE__ */ function(_TaroElement) {
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["a"])(TaroRootElement2, _TaroElement);
            var _super5 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["a"])(TaroRootElement2);
            function TaroRootElement2(nodeImpl, getElement2, hooks2, elementImpl, eventCenter2) {
              var _this11;
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, TaroRootElement2);
              _this11 = _super5.call(this, nodeImpl, getElement2, hooks2, elementImpl);
              _this11.pendingUpdate = false;
              _this11.pendingFlush = false;
              _this11.updatePayloads = [];
              _this11.updateCallbacks = [];
              _this11.ctx = null;
              _this11.nodeName = ROOT_STR;
              _this11.eventCenter = eventCenter2;
              return _this11;
            }
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(TaroRootElement2, [{
              key: "_path",
              get: function get2() {
                return ROOT_STR;
              }
            }, {
              key: "_root",
              get: function get2() {
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
                var initRender = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
                var prerender = arguments.length > 1 ? arguments[1] : void 0;
                this.pendingUpdate = true;
                var ctx = this.ctx;
                setTimeout(function() {
                  perf.start(SET_DATA);
                  var data = Object.create(null);
                  var resetPaths = new Set(initRender ? ["root.cn.[0]", "root.cn[0]"] : []);
                  while (_this12.updatePayloads.length > 0) {
                    var _this12$updatePayload = _this12.updatePayloads.shift(), path = _this12$updatePayload.path, value = _this12$updatePayload.value;
                    if (path.endsWith("cn")) {
                      resetPaths.add(path);
                    }
                    data[path] = value;
                  }
                  var _loop2 = function _loop22(_path2) {
                    resetPaths.forEach(function(p2) {
                      if (_path2.includes(p2) && _path2 !== p2) {
                        delete data[_path2];
                      }
                    });
                    var value2 = data[_path2];
                    if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(value2)) {
                      data[_path2] = value2();
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
                        var dataPathArr = p.split(".");
                        var hasCustomWrapper = false;
                        for (var i = dataPathArr.length; i > 0; i--) {
                          var allPath = dataPathArr.slice(0, i).join(".");
                          var getData = get(ctx.__data__ || ctx.data, allPath);
                          if (getData && getData.nn && getData.nn === CUSTOM_WRAPPER) {
                            var customWrapperId = getData.uid;
                            var customWrapper = ctx.selectComponent("#".concat(customWrapperId));
                            var splitedPath = dataPathArr.slice(i).join(".");
                            if (customWrapper) {
                              hasCustomWrapper = true;
                              customWrapperUpdate.push({
                                ctx: ctx.selectComponent("#".concat(customWrapperId)),
                                data: Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["a"])({}, "i.".concat(splitedPath), data[p])
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
                      _eventCenter.once(eventId, function() {
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
                      customWrapperUpdate.forEach(function(item) {
                        if (options.debug) {
                          console.log("custom wrapper setData: ", item.data);
                        }
                        item.ctx.setData(item.data, function() {
                          _eventCenter.trigger(eventId);
                        });
                      });
                      if (Object.keys(normalUpdate).length) {
                        if (options.debug) {
                          console.log("setData:", normalUpdate);
                        }
                        ctx.setData(normalUpdate, function() {
                          _eventCenter.trigger(eventId);
                        });
                      }
                    } else {
                      if (options.debug) {
                        console.log("setData:", data);
                      }
                      ctx.setData(data, function() {
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
                this.updateCallbacks.push(function() {
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
            return TaroRootElement2;
          }(TaroElement);
          TaroRootElement = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["d"])(), __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.TaroNodeImpl)), __param(1, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.TaroElementFactory)), __param(2, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.Hooks)), __param(3, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.TaroElementImpl)), __param(4, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.eventCenter)), __metadata("design:paramtypes", [Function, Function, Function, Function, Function])], TaroRootElement);
          var FormElement = /* @__PURE__ */ function(_TaroElement2) {
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["a"])(FormElement2, _TaroElement2);
            var _super6 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["a"])(FormElement2);
            function FormElement2() {
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, FormElement2);
              return _super6.apply(this, arguments);
            }
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(FormElement2, [{
              key: "value",
              get: function get2() {
                var val = this.props[VALUE];
                return val == null ? "" : val;
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
                    this.value = val;
                  }
                }
                return Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(FormElement2.prototype), "dispatchEvent", this).call(this, event);
              }
            }]);
            return FormElement2;
          }(TaroElement);
          var TaroNodeImpl = /* @__PURE__ */ function() {
            function TaroNodeImpl2(getElement2, innerHTMLImpl, adjacentImpl) {
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, TaroNodeImpl2);
              this.getDoc = function() {
                return getElement2(ElementNames.Document)();
              };
              this.innerHTMLImpl = innerHTMLImpl;
              this.adjacentImpl = adjacentImpl;
            }
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(TaroNodeImpl2, [{
              key: "bind",
              value: function bind(ctx) {
                this.ctx = ctx;
                this.bindInnerHTML();
                this.bindAdjacentHTML();
              }
            }, {
              key: "bindInnerHTML",
              value: function bindInnerHTML() {
                var ctx = this.ctx, impl = this.innerHTMLImpl, getDoc = this.getDoc;
                Object.defineProperty(ctx, "innerHTML", {
                  configurable: true,
                  enumerable: true,
                  set: function set(html) {
                    if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(impl)) {
                      impl.call(ctx, ctx, html, getDoc);
                    } else {
                      Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["warn"])(true, "\u8BF7\u5B9E\u73B0 node.innerHTML");
                    }
                  },
                  get: function get2() {
                    return "";
                  }
                });
              }
            }, {
              key: "bindAdjacentHTML",
              value: function bindAdjacentHTML() {
                var ctx = this.ctx, impl = this.adjacentImpl, getDoc = this.getDoc;
                ctx.insertAdjacentHTML = function(position, html) {
                  if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(impl)) {
                    impl.call(ctx, position, html, getDoc);
                  } else {
                    Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["warn"])(true, "\u8BF7\u5B9E\u73B0 node.insertAdjacentHTML");
                  }
                };
              }
            }]);
            return TaroNodeImpl2;
          }();
          TaroNodeImpl = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["d"])(), __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.TaroElementFactory)), __param(1, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.InnerHTMLImpl)), __param(1, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["f"])()), __param(2, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.insertAdjacentHTMLImpl)), __param(2, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["f"])()), __metadata("design:paramtypes", [Function, Function, Function])], TaroNodeImpl);
          var TaroElementImpl = /* @__PURE__ */ function() {
            function TaroElementImpl2(rectImpl) {
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, TaroElementImpl2);
              this.rectImpl = rectImpl;
            }
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(TaroElementImpl2, [{
              key: "bind",
              value: function bind(ctx) {
                this.bindRect(ctx);
              }
            }, {
              key: "bindRect",
              value: function bindRect(ctx) {
                var impl = this.rectImpl;
                ctx.getBoundingClientRect = /* @__PURE__ */ Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["a"])(/* @__PURE__ */ _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
                  var _len, args, _key, _args = arguments;
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
                          Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["warn"])(true, "\u8BF7\u5B9E\u73B0 element.getBoundingClientRect");
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
            return TaroElementImpl2;
          }();
          TaroElementImpl = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["d"])(), __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.getBoundingClientRectImpl)), __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["f"])()), __metadata("design:paramtypes", [Object])], TaroElementImpl);
          var TaroDocument = /* @__PURE__ */ function(_TaroElement3) {
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["a"])(TaroDocument2, _TaroElement3);
            var _super7 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["a"])(TaroDocument2);
            function TaroDocument2(nodeImpl, getElement2, hooks2, elementImpl, getText) {
              var _this13;
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, TaroDocument2);
              _this13 = _super7.call(this, nodeImpl, getElement2, hooks2, elementImpl);
              _this13._getText = getText;
              _this13.nodeType = 9;
              _this13.nodeName = DOCUMENT_ELEMENT_NAME;
              return _this13;
            }
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(TaroDocument2, [{
              key: "createElement",
              value: function createElement(type) {
                if (type === ROOT_STR) {
                  return this._getElement(ElementNames.RootElement)();
                }
                if (_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["controlledComponent"].has(type)) {
                  return this._getElement(ElementNames.FormElement)(type);
                }
                return this._getElement(ElementNames.Element)(type);
              }
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
                if (/^#/.test(query)) {
                  return this.getElementById(query.slice(1));
                }
                return null;
              }
            }, {
              key: "querySelectorAll",
              value: function querySelectorAll() {
                return [];
              }
            }, {
              key: "createComment",
              value: function createComment() {
                var textnode = this._getText("");
                textnode.nodeName = COMMENT;
                return textnode;
              }
            }]);
            return TaroDocument2;
          }(TaroElement);
          TaroDocument = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["d"])(), __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.TaroNodeImpl)), __param(1, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.TaroElementFactory)), __param(2, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.Hooks)), __param(3, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.TaroElementImpl)), __param(4, Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.TaroTextFactory)), __metadata("design:paramtypes", [Function, Function, Function, Function, Function])], TaroDocument);
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
              if (char === "\n") {
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
              var textEnd = str.indexOf("<", index);
              if (textEnd === -1) {
                return textEnd;
              }
              var char = str.charAt(textEnd + 1);
              if (char === "/" || char === "!" || alphanumeric.test(char)) {
                return textEnd;
              }
              index = textEnd + 1;
            }
          }
          function isWordEnd(cursor, wordBegin, html) {
            if (!isWhitespaceChar(html.charAt(cursor)))
              return false;
            var len = html.length;
            for (var i = cursor - 1; i > wordBegin; i--) {
              var char = html.charAt(i);
              if (!isWhitespaceChar(char)) {
                if (isEqualSignChar(char))
                  return false;
                break;
              }
            }
            for (var _i2 = cursor + 1; _i2 < len; _i2++) {
              var _char = html.charAt(_i2);
              if (!isWhitespaceChar(_char)) {
                if (isEqualSignChar(_char))
                  return false;
                return true;
              }
            }
          }
          var Scaner = /* @__PURE__ */ function() {
            function Scaner2(html) {
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, Scaner2);
              this.tokens = [];
              this.position = initPosition();
              this.html = html;
            }
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(Scaner2, [{
              key: "scan",
              value: function scan() {
                var html = this.html, position = this.position;
                var len = html.length;
                while (position.index < len) {
                  var start = position.index;
                  this.scanText();
                  if (position.index === start) {
                    var _isComment = html.startsWith("!--", start + 1);
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
                var type = "text";
                var html = this.html, position = this.position;
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
                  type,
                  content,
                  position: {
                    start,
                    end
                  }
                });
              }
            }, {
              key: "scanComment",
              value: function scanComment() {
                var type = "comment";
                var html = this.html, position = this.position;
                var start = copyPosition(position);
                feedPosition(position, html, 4);
                var contentEnd = html.indexOf("-->", position.index);
                var commentEnd = contentEnd + 3;
                if (contentEnd === -1) {
                  contentEnd = commentEnd = html.length;
                }
                var content = html.slice(position.index, contentEnd);
                jumpPosition(position, html, commentEnd);
                this.tokens.push({
                  type,
                  content,
                  position: {
                    start,
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
                var type = "tag-start";
                var html = this.html, position = this.position;
                var secondChar = html.charAt(position.index + 1);
                var close = secondChar === "/";
                var start = copyPosition(position);
                feedPosition(position, html, close ? 2 : 1);
                this.tokens.push({
                  type,
                  close,
                  position: {
                    start
                  }
                });
              }
            }, {
              key: "scanTagEnd",
              value: function scanTagEnd() {
                var type = "tag-end";
                var html = this.html, position = this.position;
                var firstChar = html.charAt(position.index);
                var close = firstChar === "/";
                feedPosition(position, html, close ? 2 : 1);
                var end = copyPosition(position);
                this.tokens.push({
                  type,
                  close,
                  position: {
                    end
                  }
                });
              }
            }, {
              key: "scanTagName",
              value: function scanTagName() {
                var type = "tag";
                var html = this.html, position = this.position;
                var len = html.length;
                var start = position.index;
                while (start < len) {
                  var char = html.charAt(start);
                  var isTagChar = !(isWhitespaceChar(char) || char === "/" || char === ">");
                  if (isTagChar)
                    break;
                  start++;
                }
                var end = start + 1;
                while (end < len) {
                  var _char2 = html.charAt(end);
                  var _isTagChar = !(isWhitespaceChar(_char2) || _char2 === "/" || _char2 === ">");
                  if (!_isTagChar)
                    break;
                  end++;
                }
                jumpPosition(position, html, end);
                var tagName = html.slice(start, end);
                this.tokens.push({
                  type,
                  content: tagName
                });
                return tagName;
              }
            }, {
              key: "scanAttrs",
              value: function scanAttrs() {
                var html = this.html, position = this.position, tokens = this.tokens;
                var cursor = position.index;
                var quote = null;
                var wordBegin = cursor;
                var words = [];
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
                  var isTagEnd = char === "/" || char === ">";
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
                  var isQuoteStart = char === "'" || char === '"';
                  if (isQuoteStart) {
                    quote = char;
                    cursor++;
                    continue;
                  }
                  cursor++;
                }
                jumpPosition(position, html, cursor);
                var wLen = words.length;
                var type = "attribute";
                for (var i = 0; i < wLen; i++) {
                  var word = words[i];
                  var isNotPair = word.includes("=");
                  if (isNotPair) {
                    var secondWord = words[i + 1];
                    if (secondWord && secondWord.startsWith("=")) {
                      if (secondWord.length > 1) {
                        var newWord = word + secondWord;
                        tokens.push({
                          type,
                          content: newWord
                        });
                        i += 1;
                        continue;
                      }
                      var thirdWord = words[i + 2];
                      i += 1;
                      if (thirdWord) {
                        var _newWord = word + "=" + thirdWord;
                        tokens.push({
                          type,
                          content: _newWord
                        });
                        i += 1;
                        continue;
                      }
                    }
                  }
                  if (word.endsWith("=")) {
                    var _secondWord = words[i + 1];
                    if (_secondWord && !_secondWord.includes("=")) {
                      var _newWord3 = word + _secondWord;
                      tokens.push({
                        type,
                        content: _newWord3
                      });
                      i += 1;
                      continue;
                    }
                    var _newWord2 = word.slice(0, -1);
                    tokens.push({
                      type,
                      content: _newWord2
                    });
                    continue;
                  }
                  tokens.push({
                    type,
                    content: word
                  });
                }
              }
            }, {
              key: "scanSkipTag",
              value: function scanSkipTag(tagName) {
                var html = this.html, position = this.position;
                var safeTagName = tagName.toLowerCase();
                var len = html.length;
                while (position.index < len) {
                  var nextTag = html.indexOf("</", position.index);
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
            return Scaner2;
          }();
          function makeMap(str, expectsLowerCase) {
            var map = Object.create(null);
            var list = str.split(",");
            for (var i = 0; i < list.length; i++) {
              map[list[i]] = true;
            }
            return expectsLowerCase ? function(val) {
              return !!map[val.toLowerCase()];
            } : function(val) {
              return !!map[val];
            };
          }
          var specialMiniElements = {
            img: "image",
            iframe: "web-view"
          };
          var internalCompsList = Object.keys(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["internalComponents"]).map(function(i) {
            return i.toLowerCase();
          }).join(",");
          var isMiniElements = makeMap(internalCompsList, true);
          var isInlineElements = makeMap("a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b", true);
          var isBlockElements = makeMap("address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt", true);
          function unquote(str) {
            var car = str.charAt(0);
            var end = str.length - 1;
            var isQuoteStart = car === '"' || car === "'";
            if (isQuoteStart && car === str.charAt(end)) {
              return str.slice(1, end);
            }
            return str;
          }
          var LEFT_BRACKET = "{";
          var RIGHT_BRACKET = "}";
          var CLASS_SELECTOR = ".";
          var ID_SELECTOR = "#";
          var CHILD_COMBINATOR = ">";
          var GENERAL_SIBLING_COMBINATOR = "~";
          var ADJACENT_SIBLING_COMBINATOR = "+";
          var StyleTagParser = /* @__PURE__ */ function() {
            function StyleTagParser2() {
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, StyleTagParser2);
              this.styles = [];
            }
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(StyleTagParser2, [{
              key: "extractStyle",
              value: function extractStyle(src) {
                var _this14 = this;
                var REG_STYLE = /<style\s?[^>]*>((.|\n|\s)+?)<\/style>/g;
                var html = src;
                html = html.replace(REG_STYLE, function(_, $1) {
                  var style2 = $1.trim();
                  _this14.stringToSelector(style2);
                  return "";
                });
                return html.trim();
              }
            }, {
              key: "stringToSelector",
              value: function stringToSelector(style2) {
                var _this15 = this;
                var lb = style2.indexOf(LEFT_BRACKET);
                var _loop3 = function _loop32() {
                  var rb = style2.indexOf(RIGHT_BRACKET);
                  var selectors = style2.slice(0, lb).trim();
                  var content = style2.slice(lb + 1, rb).replace(/ /g, "");
                  if (!/;$/.test(content)) {
                    content += ";";
                  }
                  selectors.split(",").forEach(function(src) {
                    var selectorList = _this15.parseSelector(src);
                    _this15.styles.push({
                      content,
                      selectorList
                    });
                  });
                  style2 = style2.slice(rb + 1);
                  lb = style2.indexOf(LEFT_BRACKET);
                };
                while (lb > -1) {
                  _loop3();
                }
              }
            }, {
              key: "parseSelector",
              value: function parseSelector(src) {
                var list = src.trim().replace(/ *([>~+]) */g, " $1").replace(/ +/g, " ").split(" ");
                var selectors = list.map(function(item) {
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
                  item = item.replace(/^[>~+]/, "");
                  item = item.replace(/\[(.+?)\]/g, function(_, $1) {
                    var _$1$split = $1.split("="), _$1$split2 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["a"])(_$1$split, 2), key = _$1$split2[0], value = _$1$split2[1];
                    var all = $1.indexOf("=") === -1;
                    var attr = {
                      all,
                      key,
                      value: all ? null : value
                    };
                    selector.attrs.push(attr);
                    return "";
                  });
                  item = item.replace(/([.#][A-Za-z0-9-_]+)/g, function(_, $1) {
                    if ($1[0] === ID_SELECTOR) {
                      selector.id = $1.substr(1);
                    } else if ($1[0] === CLASS_SELECTOR) {
                      selector.class.push($1.substr(1));
                    }
                    return "";
                  });
                  if (item !== "") {
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
                var res = sortStyles(this.styles).reduce(function(str, _ref3, i) {
                  var content = _ref3.content, selectorList = _ref3.selectorList;
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
                    if (selector.isChild && idx > 0) {
                      list[i] -= 1;
                      if (_this16.matchCurrent(tagName, el, selectorList[list[i]])) {
                        list[i] += 1;
                      }
                    }
                  }
                  return str;
                }, "");
                return res;
              }
            }, {
              key: "matchCurrent",
              value: function matchCurrent(tagName, el, selector) {
                if (selector.tag && selector.tag !== tagName)
                  return false;
                if (selector.id && selector.id !== el.id)
                  return false;
                if (selector.class.length) {
                  var classList = el.className.split(" ");
                  for (var i = 0; i < selector.class.length; i++) {
                    var cls = selector.class[i];
                    if (classList.indexOf(cls) === -1) {
                      return false;
                    }
                  }
                }
                if (selector.attrs.length) {
                  for (var _i3 = 0; _i3 < selector.attrs.length; _i3++) {
                    var _selector$attrs$_i = selector.attrs[_i3], all = _selector$attrs$_i.all, key = _selector$attrs$_i.key, value = _selector$attrs$_i.value;
                    if (all && !el.hasAttribute(key)) {
                      return false;
                    } else {
                      var attr = el.getAttribute(key);
                      if (attr !== unquote(value || "")) {
                        return false;
                      }
                    }
                  }
                }
                return true;
              }
            }]);
            return StyleTagParser2;
          }();
          function getPreviousElement(el) {
            var parent = el.parentElement;
            if (!parent)
              return null;
            var prev = el.previousSibling;
            if (!prev)
              return null;
            if (prev.nodeType === 1) {
              return prev;
            } else {
              return getPreviousElement(prev);
            }
          }
          function sortStyles(styles) {
            return styles.sort(function(s1, s2) {
              var hundreds1 = getHundredsWeight(s1.selectorList);
              var hundreds2 = getHundredsWeight(s2.selectorList);
              if (hundreds1 !== hundreds2)
                return hundreds1 - hundreds2;
              var tens1 = getTensWeight(s1.selectorList);
              var tens2 = getTensWeight(s2.selectorList);
              if (tens1 !== tens2)
                return tens1 - tens2;
              var ones1 = getOnesWeight(s1.selectorList);
              var ones2 = getOnesWeight(s2.selectorList);
              return ones1 - ones2;
            });
          }
          function getHundredsWeight(selectors) {
            return selectors.reduce(function(pre, cur) {
              return pre + (cur.id ? 1 : 0);
            }, 0);
          }
          function getTensWeight(selectors) {
            return selectors.reduce(function(pre, cur) {
              return pre + cur.class.length + cur.attrs.length;
            }, 0);
          }
          function getOnesWeight(selectors) {
            return selectors.reduce(function(pre, cur) {
              return pre + (cur.tag ? 1 : 0);
            }, 0);
          }
          var closingTagAncestorBreakers = {
            li: ["ul", "ol", "menu"],
            dt: ["dl"],
            dd: ["dl"],
            tbody: ["table"],
            thead: ["table"],
            tfoot: ["table"],
            tr: ["table"],
            td: ["table"]
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
              return "view";
            } else if (isInlineElements(tag)) {
              return "text";
            }
            return "view";
          }
          function splitEqual(str) {
            var sep = "=";
            var idx = str.indexOf(sep);
            if (idx === -1)
              return [str];
            var key = str.slice(0, idx).trim();
            var value = str.slice(idx + sep.length).trim();
            return [key, value];
          }
          function format(children, document2, styleOptions, parent) {
            return children.filter(function(child) {
              if (child.type === "comment") {
                return false;
              } else if (child.type === "text") {
                return child.content !== "";
              }
              return true;
            }).map(function(child) {
              if (child.type === "text") {
                var text = document2.createTextNode(child.content);
                if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(options.html.transformText)) {
                  return options.html.transformText(text, child);
                }
                parent === null || parent === void 0 ? void 0 : parent.appendChild(text);
                return text;
              }
              var el = document2.createElement(getTagName(child.tagName));
              el.h5tagName = child.tagName;
              parent === null || parent === void 0 ? void 0 : parent.appendChild(el);
              if (!options.html.renderHTMLTag) {
                el.className = "h5-".concat(child.tagName);
              }
              for (var i = 0; i < child.attributes.length; i++) {
                var attr = child.attributes[i];
                var _splitEqual = splitEqual(attr), _splitEqual2 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["a"])(_splitEqual, 2), key = _splitEqual2[0], value = _splitEqual2[1];
                if (key === "class") {
                  el.className += " " + unquote(value);
                } else if (key[0] === "o" && key[1] === "n") {
                  continue;
                } else {
                  el.setAttribute(key, value == null ? true : unquote(value));
                }
              }
              var styleTagParser = styleOptions.styleTagParser, descendantList = styleOptions.descendantList;
              var list = descendantList.slice();
              var style2 = styleTagParser.matchStyle(child.tagName, el, list);
              el.setAttribute("style", style2 + el.style.cssText);
              format(child.children, document2, {
                styleTagParser,
                descendantList: list
              }, el);
              if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(options.html.transformElement)) {
                return options.html.transformElement(el, child);
              }
              return el;
            });
          }
          function parser(html, document2) {
            var styleTagParser = new StyleTagParser();
            html = styleTagParser.extractStyle(html);
            var tokens = new Scaner(html).scan();
            var root2 = {
              tagName: "",
              children: [],
              type: "element",
              attributes: []
            };
            var state = {
              tokens,
              options,
              cursor: 0,
              stack: [root2]
            };
            parse(state);
            return format(root2.children, document2, {
              styleTagParser,
              descendantList: Array(styleTagParser.styles.length).fill(0)
            });
          }
          function parse(state) {
            var tokens = state.tokens, stack = state.stack;
            var cursor = state.cursor;
            var len = tokens.length;
            var nodes = stack[stack.length - 1].children;
            while (cursor < len) {
              var token = tokens[cursor];
              if (token.type !== "tag-start") {
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
                  if (endToken.type !== "tag-end")
                    break;
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
                if (attrToken.type === "tag-end")
                  break;
                attributes.push(attrToken.content);
                cursor++;
              }
              cursor++;
              var children = [];
              var element = {
                type: "element",
                tagName: tagToken.content,
                attributes,
                children
              };
              nodes.push(element);
              var hasChildren = !(attrToken.close || options.html.voidElements.has(tagName));
              if (hasChildren) {
                stack.push({
                  tagName,
                  children
                });
                var innerState = {
                  tokens,
                  cursor,
                  stack
                };
                parse(innerState);
                cursor = innerState.cursor;
              }
            }
            state.cursor = cursor;
          }
          options.html = {
            skipElements: new Set(["style", "script"]),
            voidElements: new Set(["!doctype", "area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]),
            closingElements: new Set(["html", "head", "body", "p", "dt", "dd", "li", "option", "thead", "th", "tbody", "tr", "td", "tfoot", "colgroup"]),
            renderHTMLTag: false
          };
          function setInnerHTML(element, html, getDoc) {
            element.childNodes.forEach(function(node) {
              element.removeChild(node);
            });
            var children = parser(html, getDoc());
            for (var i = 0; i < children.length; i++) {
              element.appendChild(children[i]);
            }
          }
          function getBoundingClientRectImpl() {
            var _this17 = this;
            if (!options.miniGlobal)
              return Promise.resolve(null);
            return new Promise(function(resolve) {
              var query = options.miniGlobal.createSelectorQuery();
              query.select("#".concat(_this17.uid)).boundingClientRect(function(res) {
                resolve(res);
              }).exec();
            });
          }
          function insertAdjacentHTMLImpl(position, html, getDoc) {
            var _a, _b;
            var parsedNodes = parser(html, getDoc());
            for (var i = 0; i < parsedNodes.length; i++) {
              var n = parsedNodes[i];
              switch (position) {
                case "beforebegin":
                  (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(n, this);
                  break;
                case "afterbegin":
                  if (this.hasChildNodes()) {
                    this.insertBefore(n, this.childNodes[0]);
                  } else {
                    this.appendChild(n);
                  }
                  break;
                case "beforeend":
                  this.appendChild(n);
                  break;
                case "afterend":
                  (_b = this.parentNode) === null || _b === void 0 ? void 0 : _b.appendChild(n);
                  break;
              }
            }
          }
          var domExternal = new inversify__WEBPACK_IMPORTED_MODULE_16__["b"](function(bind) {
            if (true) {
              if (true) {
                bind(SERVICE_IDENTIFIER.InnerHTMLImpl).toFunction(setInnerHTML);
                if (true) {
                  bind(SERVICE_IDENTIFIER.insertAdjacentHTMLImpl).toFunction(insertAdjacentHTMLImpl);
                }
              }
              if (false) {
              }
            }
          });
          var Hooks = /* @__PURE__ */ function() {
            function Hooks2() {
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, Hooks2);
            }
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(Hooks2, [{
              key: "modifyMpEvent",
              value: function modifyMpEvent(e) {
                var _a;
                (_a = this.modifyMpEventImpls) === null || _a === void 0 ? void 0 : _a.forEach(function(fn) {
                  return fn(e);
                });
              }
            }, {
              key: "modifyTaroEvent",
              value: function modifyTaroEvent(e, element) {
                var _a;
                (_a = this.modifyTaroEventImpls) === null || _a === void 0 ? void 0 : _a.forEach(function(fn) {
                  return fn(e, element);
                });
              }
            }, {
              key: "initNativeApi",
              value: function initNativeApi(taro) {
                var _a;
                (_a = this.initNativeApiImpls) === null || _a === void 0 ? void 0 : _a.forEach(function(fn) {
                  return fn(taro);
                });
              }
            }, {
              key: "patchElement",
              value: function patchElement(element) {
                var _a;
                (_a = this.patchElementImpls) === null || _a === void 0 ? void 0 : _a.forEach(function(fn) {
                  return fn(element);
                });
              }
            }]);
            return Hooks2;
          }();
          __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.getLifecycle), __metadata("design:type", Function)], Hooks.prototype, "getLifecycle", void 0);
          __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.getPathIndex), __metadata("design:type", Function)], Hooks.prototype, "getPathIndex", void 0);
          __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.getEventCenter), __metadata("design:type", Function)], Hooks.prototype, "getEventCenter", void 0);
          __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.isBubbleEvents), __metadata("design:type", Function)], Hooks.prototype, "isBubbleEvents", void 0);
          __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.getSpecialNodes), __metadata("design:type", Function)], Hooks.prototype, "getSpecialNodes", void 0);
          __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.onRemoveAttribute), Object(inversify__WEBPACK_IMPORTED_MODULE_16__["f"])(), __metadata("design:type", Function)], Hooks.prototype, "onRemoveAttribute", void 0);
          __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.batchedEventUpdates), Object(inversify__WEBPACK_IMPORTED_MODULE_16__["f"])(), __metadata("design:type", Function)], Hooks.prototype, "batchedEventUpdates", void 0);
          __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.mergePageInstance), Object(inversify__WEBPACK_IMPORTED_MODULE_16__["f"])(), __metadata("design:type", Function)], Hooks.prototype, "mergePageInstance", void 0);
          __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.createPullDownComponent), Object(inversify__WEBPACK_IMPORTED_MODULE_16__["f"])(), __metadata("design:type", Function)], Hooks.prototype, "createPullDownComponent", void 0);
          __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.getDOMNode), Object(inversify__WEBPACK_IMPORTED_MODULE_16__["f"])(), __metadata("design:type", Function)], Hooks.prototype, "getDOMNode", void 0);
          __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.modifyHydrateData), Object(inversify__WEBPACK_IMPORTED_MODULE_16__["f"])(), __metadata("design:type", Function)], Hooks.prototype, "modifyHydrateData", void 0);
          __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.modifySetAttrPayload), Object(inversify__WEBPACK_IMPORTED_MODULE_16__["f"])(), __metadata("design:type", Function)], Hooks.prototype, "modifySetAttrPayload", void 0);
          __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.modifyRmAttrPayload), Object(inversify__WEBPACK_IMPORTED_MODULE_16__["f"])(), __metadata("design:type", Function)], Hooks.prototype, "modifyRmAttrPayload", void 0);
          __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["c"])(SERVICE_IDENTIFIER.onAddEvent), Object(inversify__WEBPACK_IMPORTED_MODULE_16__["f"])(), __metadata("design:type", Function)], Hooks.prototype, "onAddEvent", void 0);
          __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["e"])(SERVICE_IDENTIFIER.modifyMpEvent), Object(inversify__WEBPACK_IMPORTED_MODULE_16__["f"])(), __metadata("design:type", Array)], Hooks.prototype, "modifyMpEventImpls", void 0);
          __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["e"])(SERVICE_IDENTIFIER.modifyTaroEvent), Object(inversify__WEBPACK_IMPORTED_MODULE_16__["f"])(), __metadata("design:type", Array)], Hooks.prototype, "modifyTaroEventImpls", void 0);
          __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["e"])(SERVICE_IDENTIFIER.initNativeApi), Object(inversify__WEBPACK_IMPORTED_MODULE_16__["f"])(), __metadata("design:type", Array)], Hooks.prototype, "initNativeApiImpls", void 0);
          __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["e"])(SERVICE_IDENTIFIER.patchElement), Object(inversify__WEBPACK_IMPORTED_MODULE_16__["f"])(), __metadata("design:type", Array)], Hooks.prototype, "patchElementImpls", void 0);
          Hooks = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_16__["d"])()], Hooks);
          var BUBBLE_EVENTS = new Set(["touchstart", "touchmove", "touchcancel", "touchend", "touchforcechange", "tap", "longpress", "longtap", "transitionend", "animationstart", "animationiteration", "animationend"]);
          var getLifecycle = function getLifecycle2(instance, lifecycle) {
            return instance[lifecycle];
          };
          var getPathIndex = function getPathIndex2(indexOfNode) {
            return "[".concat(indexOfNode, "]");
          };
          var getEventCenter = function getEventCenter2(Events2) {
            return new Events2();
          };
          var isBubbleEvents = function isBubbleEvents2(eventName) {
            return BUBBLE_EVENTS.has(eventName);
          };
          var getSpecialNodes = function getSpecialNodes2() {
            return ["view", "text", "image"];
          };
          var DefaultHooksContainer = new inversify__WEBPACK_IMPORTED_MODULE_16__["b"](function(bind) {
            bind(SERVICE_IDENTIFIER.getLifecycle).toFunction(getLifecycle);
            bind(SERVICE_IDENTIFIER.getPathIndex).toFunction(getPathIndex);
            bind(SERVICE_IDENTIFIER.getEventCenter).toFunction(getEventCenter);
            bind(SERVICE_IDENTIFIER.isBubbleEvents).toFunction(isBubbleEvents);
            bind(SERVICE_IDENTIFIER.getSpecialNodes).toFunction(getSpecialNodes);
          });
          function processPluginHooks(container2) {
            var keys = Object.keys(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["defaultReconciler"]);
            keys.forEach(function(key) {
              if (key in SERVICE_IDENTIFIER) {
                var identifier = SERVICE_IDENTIFIER[key];
                var fn = _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["defaultReconciler"][key];
                if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isArray"])(fn)) {
                  fn.forEach(function(item) {
                    return container2.bind(identifier).toFunction(item);
                  });
                } else {
                  if (container2.isBound(identifier)) {
                    container2.rebind(identifier).toFunction(fn);
                  } else {
                    container2.bind(identifier).toFunction(fn);
                  }
                }
              }
            });
          }
          var container = new inversify__WEBPACK_IMPORTED_MODULE_16__["a"]();
          container.bind(SERVICE_IDENTIFIER.TaroElement).to(TaroElement).whenTargetNamed(ElementNames.Element);
          container.bind(SERVICE_IDENTIFIER.TaroElement).to(TaroDocument).inSingletonScope().whenTargetNamed(ElementNames.Document);
          container.bind(SERVICE_IDENTIFIER.TaroElement).to(TaroRootElement).whenTargetNamed(ElementNames.RootElement);
          container.bind(SERVICE_IDENTIFIER.TaroElement).to(FormElement).whenTargetNamed(ElementNames.FormElement);
          container.bind(SERVICE_IDENTIFIER.TaroElementFactory).toFactory(function(context) {
            return function(named) {
              return function(nodeName) {
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
          container.bind(SERVICE_IDENTIFIER.TaroTextFactory).toFactory(function(context) {
            return function(text) {
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
          var document$1 = getElement(ElementNames.Document)();
          var TaroEvent = /* @__PURE__ */ function() {
            function TaroEvent2(type, opts, event) {
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, TaroEvent2);
              this._stop = false;
              this._end = false;
              this.defaultPrevented = false;
              this.timeStamp = Date.now();
              this.type = type.toLowerCase();
              this.mpEvent = event;
              this.bubbles = Boolean(opts && opts.bubbles);
              this.cancelable = Boolean(opts && opts.cancelable);
            }
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(TaroEvent2, [{
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
              get: function get2() {
                var _a, _b, _c;
                var element = document$1.getElementById((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.target.id);
                return Object.assign(Object.assign(Object.assign({}, (_b = this.mpEvent) === null || _b === void 0 ? void 0 : _b.target), (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.detail), {
                  dataset: element !== null ? element.dataset : _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"]
                });
              }
            }, {
              key: "currentTarget",
              get: function get2() {
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
            return TaroEvent2;
          }();
          function createEvent(event, node) {
            if (typeof event === "string") {
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
              domEv[KEY_CODE] = 13;
            }
            return domEv;
          }
          var eventsBatch = {};
          function eventHandler(event) {
            var _a;
            (_a = hooks.modifyMpEvent) === null || _a === void 0 ? void 0 : _a.call(hooks, event);
            if (event.currentTarget == null) {
              event.currentTarget = event.target;
            }
            var node = document$1.getElementById(event.currentTarget.id);
            if (node) {
              var dispatch = function dispatch2() {
                var _a2;
                var e = createEvent(event, node);
                (_a2 = hooks.modifyTaroEvent) === null || _a2 === void 0 ? void 0 : _a2.call(hooks, e, node);
                node.dispatchEvent(e);
              };
              if (typeof hooks.batchedEventUpdates === "function") {
                var type = event.type;
                if (!hooks.isBubbleEvents(type) || !isParentBinded(node, type) || type === TOUCHMOVE && !!node.props.catchMove) {
                  hooks.batchedEventUpdates(function() {
                    if (eventsBatch[type]) {
                      eventsBatch[type].forEach(function(fn) {
                        return fn();
                      });
                      delete eventsBatch[type];
                    }
                    dispatch();
                  });
                } else {
                  (eventsBatch[type] || (eventsBatch[type] = [])).push(dispatch);
                }
              } else {
                dispatch();
              }
            }
          }
          var isBrowser = typeof document !== "undefined" && !!document.scripts;
          var doc = isBrowser ? document : _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"];
          var win = isBrowser ? window2 : _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"];
          function createDocument() {
            var getElement2 = container.get(SERVICE_IDENTIFIER.TaroElementFactory);
            var doc2 = getElement2(ElementNames.Document)();
            var documentCreateElement = doc2.createElement.bind(doc2);
            var html = documentCreateElement(HTML);
            var head = documentCreateElement(HEAD);
            var body = documentCreateElement(BODY);
            var app = documentCreateElement(APP);
            app.id = APP;
            var container$1 = documentCreateElement(CONTAINER);
            doc2.appendChild(html);
            html.appendChild(head);
            html.appendChild(body);
            body.appendChild(container$1);
            container$1.appendChild(app);
            doc2.documentElement = html;
            doc2.head = head;
            doc2.body = body;
            doc2.createEvent = createEvent;
            return doc2;
          }
          var document$2 = isBrowser ? doc : createDocument();
          var machine = "Macintosh";
          var arch = "Intel Mac OS X 10_14_5";
          var engine = "AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36";
          var navigator = isBrowser ? win.navigator : {
            appCodeName: "Mozilla",
            appName: "Netscape",
            appVersion: "5.0 (" + machine + "; " + arch + ") " + engine,
            cookieEnabled: true,
            mimeTypes: [],
            onLine: true,
            platform: "MacIntel",
            plugins: [],
            product: "Taro",
            productSub: "20030107",
            userAgent: "Mozilla/5.0 (" + machine + "; " + arch + ") " + engine,
            vendor: "Joyent",
            vendorSub: ""
          };
          var now;
          (function() {
            var loadTime;
            if (typeof performance !== "undefined" && performance !== null && performance.now) {
              now = function now2() {
                return performance.now();
              };
            } else if (Date.now) {
              now = function now2() {
                return Date.now() - loadTime;
              };
              loadTime = Date.now();
            } else {
              now = function now2() {
                return new Date().getTime() - loadTime;
              };
              loadTime = new Date().getTime();
            }
          })();
          var lastTime = 0;
          var raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame !== null ? requestAnimationFrame : function(callback) {
            var _now = now();
            var nextTime = Math.max(lastTime + 16, _now);
            return setTimeout(function() {
              callback(lastTime = nextTime);
            }, nextTime - _now);
          };
          var caf = typeof cancelAnimationFrame !== "undefined" && cancelAnimationFrame !== null ? cancelAnimationFrame : clearTimeout;
          if (typeof global !== "undefined") {
            raf = raf.bind(global);
            caf = caf.bind(global);
          }
          function getComputedStyle(element) {
            return element.style;
          }
          var window$1 = isBrowser ? win : {
            navigator,
            document: document$2
          };
          if (!isBrowser) {
            var globalProperties = [].concat(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["a"])(Object.getOwnPropertyNames(global || win)), Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["a"])(Object.getOwnPropertySymbols(global || win)));
            globalProperties.forEach(function(property) {
              if (property === "atob")
                return;
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
            window$1.addEventListener = function() {
            };
            window$1.removeEventListener = function() {
            };
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
          var getCurrentInstance = function getCurrentInstance2() {
            return Current;
          };
          var Events = /* @__PURE__ */ function() {
            function Events2(opts) {
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, Events2);
              if (typeof opts !== "undefined" && opts.callbacks) {
                this.callbacks = opts.callbacks;
              } else {
                this.callbacks = {};
              }
            }
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(Events2, [{
              key: "on",
              value: function on(eventName, callback, context) {
                var event, node, tail, list;
                if (!callback) {
                  return this;
                }
                eventName = eventName.split(Events2.eventSplitter);
                this.callbacks || (this.callbacks = {});
                var calls = this.callbacks;
                while (event = eventName.shift()) {
                  list = calls[event];
                  node = list ? list.tail : {};
                  node.next = tail = {};
                  node.context = context;
                  node.callback = callback;
                  calls[event] = {
                    tail,
                    next: list ? list.next : node
                  };
                }
                return this;
              }
            }, {
              key: "once",
              value: function once(events, callback, context) {
                var _this18 = this;
                var wrapper = function wrapper2() {
                  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                  }
                  callback.apply(_this18, args);
                  _this18.off(events, wrapper2, context);
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
                events = events ? events.split(Events2.eventSplitter) : Object.keys(calls);
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
                events = events.split(Events2.eventSplitter);
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
            return Events2;
          }();
          Events.eventSplitter = /\s+/;
          var hooks$1 = container.get(SERVICE_IDENTIFIER.Hooks);
          var eventCenter = hooks$1.getEventCenter(Events);
          container.bind(SERVICE_IDENTIFIER.eventCenter).toConstantValue(eventCenter);
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
              return "";
            }
            return path.charAt(0) === "/" ? path : "/" + path;
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
              var res = func.map(function(fn) {
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
              return "";
            }
            var path = Object.keys(obj).map(function(key) {
              return key + "=" + obj[key];
            }).join("&");
            return path === "" ? path : "?" + path;
          }
          function getPath(id, options2) {
            var path = id;
            if (!isBrowser) {
              path = id + stringify(options2);
            }
            return path;
          }
          function getOnReadyEventKey(path) {
            return path + ".onReady";
          }
          function getOnShowEventKey(path) {
            return path + ".onShow";
          }
          function getOnHideEventKey(path) {
            return path + ".onHide";
          }
          function createPageConfig(component, pageName, data, pageConfig) {
            var _a, _b;
            var id = pageName !== null && pageName !== void 0 ? pageName : "taro_page_".concat(pageId());
            var pageElement = null;
            var unmounting = false;
            var prepareMountList = [];
            var config = {
              onLoad: function onLoad(options2, cb) {
                var _this19 = this;
                perf.start(PAGE_INIT);
                Current.page = this;
                this.config = pageConfig || {};
                options2.$taroTimestamp = Date.now();
                this.$taroPath = getPath(id, options2);
                if (this.$taroParams == null) {
                  this.$taroParams = Object.assign({}, options2);
                }
                var router = isBrowser ? this.$taroPath : this.route || this.__route__;
                Current.router = {
                  params: this.$taroParams,
                  path: addLeadingSlash(router),
                  onReady: getOnReadyEventKey(id),
                  onShow: getOnShowEventKey(id),
                  onHide: getOnHideEventKey(id)
                };
                var mount = function mount2() {
                  Current.app.mount(component, _this19.$taroPath, function() {
                    pageElement = document$2.getElementById(_this19.$taroPath);
                    Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["ensure"])(pageElement !== null, "\u6CA1\u6709\u627E\u5230\u9875\u9762\u5B9E\u4F8B\u3002");
                    safeExecute(_this19.$taroPath, "onLoad", _this19.$taroParams);
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
                raf(function() {
                  eventCenter.trigger(getOnReadyEventKey(id));
                });
                safeExecute(this.$taroPath, "onReady");
                this.onReady.called = true;
              },
              onUnload: function onUnload() {
                var _this20 = this;
                unmounting = true;
                Current.app.unmount(this.$taroPath, function() {
                  unmounting = false;
                  instances.delete(_this20.$taroPath);
                  if (pageElement) {
                    pageElement.ctx = null;
                  }
                  if (prepareMountList.length) {
                    prepareMountList.forEach(function(fn) {
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
                raf(function() {
                  eventCenter.trigger(getOnShowEventKey(id));
                });
                safeExecute(this.$taroPath, "onShow");
              },
              onHide: function onHide() {
                Current.page = null;
                Current.router = null;
                safeExecute(this.$taroPath, "onHide");
                eventCenter.trigger(getOnHideEventKey(id));
              },
              onPullDownRefresh: function onPullDownRefresh() {
                return safeExecute(this.$taroPath, "onPullDownRefresh");
              },
              onReachBottom: function onReachBottom() {
                return safeExecute(this.$taroPath, "onReachBottom");
              },
              onPageScroll: function onPageScroll(options2) {
                return safeExecute(this.$taroPath, "onPageScroll", options2);
              },
              onResize: function onResize(options2) {
                return safeExecute(this.$taroPath, "onResize", options2);
              },
              onTabItemTap: function onTabItemTap(options2) {
                return safeExecute(this.$taroPath, "onTabItemTap", options2);
              },
              onTitleClick: function onTitleClick() {
                return safeExecute(this.$taroPath, "onTitleClick");
              },
              onOptionMenuClick: function onOptionMenuClick() {
                return safeExecute(this.$taroPath, "onOptionMenuClick");
              },
              onPopMenuClick: function onPopMenuClick() {
                return safeExecute(this.$taroPath, "onPopMenuClick");
              },
              onPullIntercept: function onPullIntercept() {
                return safeExecute(this.$taroPath, "onPullIntercept");
              },
              onAddToFavorites: function onAddToFavorites() {
                return safeExecute(this.$taroPath, "onAddToFavorites");
              }
            };
            if (component.onShareAppMessage || ((_a = component.prototype) === null || _a === void 0 ? void 0 : _a.onShareAppMessage) || component.enableShareAppMessage) {
              config.onShareAppMessage = function(options2) {
                var target = options2 === null || options2 === void 0 ? void 0 : options2.target;
                if (target != null) {
                  var _id = target.id;
                  var element = document$2.getElementById(_id);
                  if (element != null) {
                    options2.target.dataset = element.dataset;
                  }
                }
                return safeExecute(this.$taroPath, "onShareAppMessage", options2);
              };
            }
            if (component.onShareTimeline || ((_b = component.prototype) === null || _b === void 0 ? void 0 : _b.onShareTimeline) || component.enableShareTimeline) {
              config.onShareTimeline = function() {
                return safeExecute(this.$taroPath, "onShareTimeline");
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
                var _a2;
                perf.start(PAGE_INIT);
                var path = getPath(id, {
                  id: ((_a2 = this.getPageId) === null || _a2 === void 0 ? void 0 : _a2.call(this)) || pageId()
                });
                Current.app.mount(component, path, function() {
                  componentElement = document$2.getElementById(path);
                  Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["ensure"])(componentElement !== null, "\u6CA1\u6709\u627E\u5230\u7EC4\u4EF6\u5B9E\u4F8B\u3002");
                  safeExecute(path, "onLoad");
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
                Current.app.unmount(path, function() {
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
            config["options"] = (_a = component === null || component === void 0 ? void 0 : component["options"]) !== null && _a !== void 0 ? _a : _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"];
            config["externalClasses"] = (_b = component === null || component === void 0 ? void 0 : component["externalClasses"]) !== null && _b !== void 0 ? _b : _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"];
            config["behaviors"] = (_c = component === null || component === void 0 ? void 0 : component["behaviors"]) !== null && _c !== void 0 ? _c : _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"];
            return config;
          }
          function createRecursiveComponentConfig(componentName) {
            return {
              properties: {
                i: {
                  type: Object,
                  value: Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["a"])({}, "nn", "view")
                },
                l: {
                  type: String,
                  value: ""
                }
              },
              options: {
                addGlobalClass: true,
                virtualHost: componentName !== "custom-wrapper"
              },
              methods: {
                eh: eventHandler
              }
            };
          }
          var hooks$3 = container.get(SERVICE_IDENTIFIER.Hooks);
          function isClassComponent(R2, component) {
            var _a;
            return Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(component.render) || !!((_a = component.prototype) === null || _a === void 0 ? void 0 : _a.isReactComponent) || component.prototype instanceof R2.Component;
          }
          var R = _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"];
          var PageContext = _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"];
          function connectReactPage(R2, id) {
            var h = R2.createElement;
            return function(component) {
              var isReactComponent = isClassComponent(R2, component);
              var inject = function inject2(node) {
                return node && injectPageInstance(node, id);
              };
              var refs = isReactComponent ? {
                ref: inject
              } : {
                forwardedRef: inject,
                reactReduxForwardedRef: inject
              };
              if (PageContext === _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"]) {
                PageContext = R2.createContext("");
              }
              return /* @__PURE__ */ function(_R$Component) {
                Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["a"])(Page2, _R$Component);
                var _super8 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["a"])(Page2);
                function Page2() {
                  var _this22;
                  Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, Page2);
                  _this22 = _super8.apply(this, arguments);
                  _this22.state = {
                    hasError: false
                  };
                  return _this22;
                }
                Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(Page2, [{
                  key: "componentDidCatch",
                  value: function componentDidCatch(error, info) {
                    console.warn(error);
                    console.error(info.componentStack);
                  }
                }, {
                  key: "render",
                  value: function render() {
                    var children = this.state.hasError ? [] : h(PageContext.Provider, {
                      value: id
                    }, h(component, Object.assign(Object.assign({}, this.props), refs)));
                    if (isBrowser) {
                      return h("div", {
                        id,
                        className: "taro_page"
                      }, children);
                    }
                    return h("root", {
                      id
                    }, children);
                  }
                }], [{
                  key: "getDerivedStateFromError",
                  value: function getDerivedStateFromError(error) {
                    console.warn(error);
                    return {
                      hasError: true
                    };
                  }
                }]);
                return Page2;
              }(R2.Component);
            };
          }
          var ReactDOM;
          function setReconciler() {
            var getLifecycle2 = function getLifecycle3(instance, lifecycle) {
              lifecycle = lifecycle.replace(/^on(Show|Hide)$/, "componentDid$1");
              return instance[lifecycle];
            };
            var modifyMpEvent = function modifyMpEvent2(event) {
              event.type = event.type.replace(/-/g, "");
            };
            var batchedEventUpdates = function batchedEventUpdates2(cb) {
              ReactDOM.unstable_batchedUpdates(cb);
            };
            var mergePageInstance = function mergePageInstance2(prev, next) {
              if (!prev || !next)
                return;
              if ("constructor" in prev)
                return;
              Object.keys(prev).forEach(function(item) {
                if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(next[item])) {
                  next[item] = [next[item]].concat(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["a"])(prev[item]));
                } else {
                  next[item] = [].concat(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["a"])(next[item] || []), Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["a"])(prev[item]));
                }
              });
            };
            hooks$3.getLifecycle = getLifecycle2;
            hooks$3.modifyMpEvent = modifyMpEvent;
            hooks$3.batchedEventUpdates = batchedEventUpdates;
            hooks$3.mergePageInstance = mergePageInstance;
            if (false) {
            }
          }
          var pageKeyId = incrementId();
          function createReactApp(App2, react, reactdom, config) {
            R = react;
            ReactDOM = reactdom;
            Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["ensure"])(!!ReactDOM, "\u6784\u5EFA React/Nerv \u9879\u76EE\u8BF7\u628A process.env.FRAMEWORK \u8BBE\u7F6E\u4E3A 'react'/'nerv' ");
            var ref = R.createRef();
            var isReactComponent = isClassComponent(R, App2);
            setReconciler();
            var AppWrapper = /* @__PURE__ */ function(_R$Component2) {
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["a"])(AppWrapper2, _R$Component2);
              var _super9 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["a"])(AppWrapper2);
              function AppWrapper2() {
                var _this23;
                Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, AppWrapper2);
                _this23 = _super9.apply(this, arguments);
                _this23.pages = [];
                _this23.elements = [];
                return _this23;
              }
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(AppWrapper2, [{
                key: "mount",
                value: function mount(component, id, cb) {
                  var key = id + pageKeyId();
                  var page = function page2() {
                    return R.createElement(component, {
                      key,
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
                      ref
                    };
                  }
                  return R.createElement(App2, props, isBrowser ? R.createElement("div", null, this.elements.slice()) : this.elements.slice());
                }
              }]);
              return AppWrapper2;
            }(R.Component);
            var wrapper;
            if (!isBrowser) {
              wrapper = ReactDOM.render(R.createElement(AppWrapper), document$2.getElementById("app"));
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
                value: function value(options2) {
                  var _this24 = this;
                  Current.router = Object.assign({
                    params: options2 === null || options2 === void 0 ? void 0 : options2.query
                  }, options2);
                  if (isBrowser) {
                    wrapper = ReactDOM.render(R.createElement(AppWrapper), document$2.getElementById("app"));
                  }
                  var app2 = ref.current;
                  if (app2 === null || app2 === void 0 ? void 0 : app2.taroGlobalData) {
                    var globalData = app2.taroGlobalData;
                    var keys = Object.keys(globalData);
                    var descriptors = Object.getOwnPropertyDescriptors(globalData);
                    keys.forEach(function(key) {
                      Object.defineProperty(_this24, key, {
                        configurable: true,
                        enumerable: true,
                        get: function get2() {
                          return globalData[key];
                        },
                        set: function set(value2) {
                          globalData[key] = value2;
                        }
                      });
                    });
                    Object.defineProperties(this, descriptors);
                  }
                  this.$app = app2;
                  if (app2 != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(app2.onLaunch)) {
                    app2.onLaunch(options2);
                  }
                }
              },
              onShow: {
                enumerable: true,
                writable: true,
                value: function value(options2) {
                  var app2 = ref.current;
                  Current.router = Object.assign({
                    params: options2 === null || options2 === void 0 ? void 0 : options2.query
                  }, options2);
                  if (app2 != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(app2.componentDidShow)) {
                    app2.componentDidShow(options2);
                  }
                  triggerAppHook("onShow");
                }
              },
              onHide: {
                enumerable: true,
                writable: true,
                value: function value(options2) {
                  var app2 = ref.current;
                  if (app2 != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(app2.componentDidHide)) {
                    app2.componentDidHide(options2);
                  }
                  triggerAppHook("onHide");
                }
              },
              onPageNotFound: {
                enumerable: true,
                writable: true,
                value: function value(res) {
                  var app2 = ref.current;
                  if (app2 != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(app2.onPageNotFound)) {
                    app2.onPageNotFound(res);
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
                  func.forEach(function(cb) {
                    return cb.apply(_app);
                  });
                }
              }
            }
            Current.app = app;
            return Current.app;
          }
          var getNativeCompId = incrementId();
          function initNativeComponentEntry(R2, ReactDOM2) {
            var NativeComponentWrapper = /* @__PURE__ */ function(_R$Component3) {
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["a"])(NativeComponentWrapper2, _R$Component3);
              var _super10 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["a"])(NativeComponentWrapper2);
              function NativeComponentWrapper2() {
                var _this25;
                Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, NativeComponentWrapper2);
                _this25 = _super10.apply(this, arguments);
                _this25.root = R2.createRef();
                _this25.ctx = _this25.props.getCtx();
                return _this25;
              }
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(NativeComponentWrapper2, [{
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
                  return R2.createElement("root", {
                    ref: this.root
                  }, this.props.renderComponent(this.ctx));
                }
              }]);
              return NativeComponentWrapper2;
            }(R2.Component);
            var Entry = /* @__PURE__ */ function(_R$Component4) {
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["a"])(Entry2, _R$Component4);
              var _super11 = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["a"])(Entry2);
              function Entry2() {
                var _this26;
                Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, Entry2);
                _this26 = _super11.apply(this, arguments);
                _this26.state = {
                  components: []
                };
                return _this26;
              }
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(Entry2, [{
                key: "componentDidMount",
                value: function componentDidMount() {
                  Current.app = this;
                }
              }, {
                key: "mount",
                value: function mount(Component2, compId, getCtx) {
                  var isReactComponent = isClassComponent(R2, Component2);
                  var inject = function inject2(node) {
                    return node && injectPageInstance(node, compId);
                  };
                  var refs = isReactComponent ? {
                    ref: inject
                  } : {
                    forwardedRef: inject,
                    reactReduxForwardedRef: inject
                  };
                  var item = {
                    compId,
                    element: R2.createElement(NativeComponentWrapper, {
                      key: compId,
                      getCtx,
                      renderComponent: function renderComponent(ctx) {
                        return R2.createElement(Component2, Object.assign(Object.assign({}, (ctx.data || (ctx.data = {})).props), refs));
                      }
                    })
                  };
                  this.setState({
                    components: [].concat(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["a"])(this.state.components), [item])
                  });
                }
              }, {
                key: "unmount",
                value: function unmount(compId) {
                  var components = this.state.components;
                  var index = components.findIndex(function(item) {
                    return item.compId === compId;
                  });
                  var next = [].concat(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["a"])(components.slice(0, index)), Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["a"])(components.slice(index + 1)));
                  this.setState({
                    components: next
                  });
                }
              }, {
                key: "render",
                value: function render() {
                  var components = this.state.components;
                  return components.map(function(_ref4) {
                    var element = _ref4.element;
                    return element;
                  });
                }
              }]);
              return Entry2;
            }(R2.Component);
            setReconciler();
            var app = document$2.getElementById("app");
            ReactDOM2.render(R2.createElement(Entry, {}), app);
          }
          function createNativeComponentConfig(Component2, react, reactdom, componentConfig) {
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
                Current.app.mount(Component2, this.compId, function() {
                  return _this27;
                });
              },
              ready: function ready() {
                safeExecute(this.compId, "onReady");
              },
              detached: function detached() {
                Current.app.unmount(this.compId);
              },
              pageLifetimes: {
                show: function show() {
                  safeExecute(this.compId, "onShow");
                },
                hide: function hide() {
                  safeExecute(this.compId, "onHide");
                }
              },
              methods: {
                eh: eventHandler
              }
            };
            function setCurrent() {
              var pages = getCurrentPages();
              var currentPage = pages[pages.length - 1];
              if (Current.page === currentPage)
                return;
              Current.page = currentPage;
              var route = currentPage.route || currentPage.__route__;
              var router = {
                params: currentPage.options || {},
                path: addLeadingSlash(route),
                onReady: "",
                onHide: "",
                onShow: ""
              };
              Current.router = router;
              if (!currentPage.options) {
                Object.defineProperty(currentPage, "options", {
                  enumerable: true,
                  configurable: true,
                  get: function get2() {
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
          function connectVuePage(Vue2, id) {
            return function(component) {
              var injectedPage = Vue2.extend({
                props: {
                  tid: String
                },
                mixins: [component, {
                  created: function created() {
                    injectPageInstance(this, id);
                  }
                }]
              });
              var options2 = {
                render: function render(h) {
                  return h(isBrowser ? "div" : "root", {
                    attrs: {
                      id,
                      class: isBrowser ? "taro_page" : ""
                    }
                  }, [h(injectedPage, {
                    props: {
                      tid: id
                    }
                  })]);
                }
              };
              return options2;
            };
          }
          function setReconciler$1() {
            var hooks2 = container.get(SERVICE_IDENTIFIER.Hooks);
            var onRemoveAttribute = function onRemoveAttribute2(dom, qualifiedName) {
              var props = dom.props;
              if (!props.hasOwnProperty(qualifiedName) || Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isBoolean"])(props[qualifiedName])) {
                dom.setAttribute(qualifiedName, false);
                return true;
              }
            };
            var getLifecycle2 = function getLifecycle3(instance, lifecycle) {
              return instance.$options[lifecycle];
            };
            hooks2.onRemoveAttribute = onRemoveAttribute;
            hooks2.getLifecycle = getLifecycle2;
            if (false) {
            }
          }
          var Vue;
          function createVueApp(App2, vue, config) {
            Vue = vue;
            Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["ensure"])(!!Vue, "\u6784\u5EFA Vue \u9879\u76EE\u8BF7\u628A process.env.FRAMEWORK \u8BBE\u7F6E\u4E3A 'vue'");
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
                return h(App2, {
                  ref: "app"
                }, elements.slice());
              },
              methods: {
                mount: function mount(component, id, cb) {
                  pages.push(function(h) {
                    return h(component, {
                      key: id
                    });
                  });
                  this.updateSync(cb);
                },
                updateSync: function updateSync(cb) {
                  this._update(this._render(), false);
                  this.$children.forEach(function(child) {
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
              wrapper.$mount(document$2.getElementById("app"));
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
                value: function value(options2) {
                  Current.router = Object.assign({
                    params: options2 === null || options2 === void 0 ? void 0 : options2.query
                  }, options2);
                  if (isBrowser) {
                    wrapper.$mount(document$2.getElementById("app"));
                  }
                  appInstance = wrapper.$refs.app;
                  if (appInstance != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(appInstance.$options.onLaunch)) {
                    appInstance.$options.onLaunch.call(appInstance, options2);
                  }
                }
              },
              onShow: {
                writable: true,
                enumerable: true,
                value: function value(options2) {
                  Current.router = Object.assign({
                    params: options2 === null || options2 === void 0 ? void 0 : options2.query
                  }, options2);
                  if (appInstance != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(appInstance.$options.onShow)) {
                    appInstance.$options.onShow.call(appInstance, options2);
                  }
                }
              },
              onHide: {
                writable: true,
                enumerable: true,
                value: function value(options2) {
                  if (appInstance != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(appInstance.$options.onHide)) {
                    appInstance.$options.onHide.call(appInstance, options2);
                  }
                }
              }
            });
            Current.app = app;
            return Current.app;
          }
          function createVue3Page(h, id) {
            return function(component) {
              var _a;
              var inject = {
                props: {
                  tid: String
                },
                created: function created() {
                  injectPageInstance(this, id);
                  this.$nextTick(function() {
                    safeExecute(id, "onShow");
                  });
                }
              };
              if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isArray"])(component.mixins)) {
                var mixins = component.mixins;
                var idx = mixins.length - 1;
                if (!((_a = mixins[idx].props) === null || _a === void 0 ? void 0 : _a.tid)) {
                  component.mixins.push(inject);
                } else {
                  component.mixins[idx] = inject;
                }
              } else {
                component.mixins = [inject];
              }
              return h(isBrowser ? "div" : "root", {
                key: id,
                id,
                class: isBrowser ? "taro_page" : ""
              }, [h(Object.assign({}, component), {
                tid: id
              })]);
            };
          }
          function setReconciler$2() {
            var hooks2 = container.get(SERVICE_IDENTIFIER.Hooks);
            var getLifecycle2 = function getLifecycle3(instance, lifecycle) {
              return instance.$options[lifecycle];
            };
            var modifyMpEvent = function modifyMpEvent2(event) {
              event.type = event.type.replace(/-/g, "");
            };
            hooks2.getLifecycle = getLifecycle2;
            hooks2.modifyMpEvent = modifyMpEvent;
            if (false) {
            }
          }
          function createVue3App(app, h, config) {
            var pages = [];
            var appInstance;
            Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["ensure"])(!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(app._component), "\u5165\u53E3\u7EC4\u4EF6\u4E0D\u652F\u6301\u4F7F\u7528\u51FD\u6570\u5F0F\u7EC4\u4EF6");
            setReconciler$2();
            app._component.render = function() {
              return pages.slice();
            };
            if (!isBrowser) {
              appInstance = app.mount("#app");
            }
            var appConfig = Object.create({
              mount: function mount(component, id, cb) {
                var page = createVue3Page(h, id)(component);
                pages.push(page);
                this.updateAppInstance(cb);
              },
              unmount: function unmount(id, cb) {
                pages = pages.filter(function(page) {
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
                value: function value(options2) {
                  var _a;
                  Current.router = Object.assign({
                    params: options2 === null || options2 === void 0 ? void 0 : options2.query
                  }, options2);
                  if (isBrowser) {
                    appInstance = app.mount("#app");
                  }
                  var onLaunch = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onLaunch;
                  Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(onLaunch) && onLaunch.call(appInstance, options2);
                }
              },
              onShow: {
                writable: true,
                enumerable: true,
                value: function value(options2) {
                  var _a;
                  Current.router = Object.assign({
                    params: options2 === null || options2 === void 0 ? void 0 : options2.query
                  }, options2);
                  var onShow = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onShow;
                  Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(onShow) && onShow.call(appInstance, options2);
                }
              },
              onHide: {
                writable: true,
                enumerable: true,
                value: function value(options2) {
                  var _a;
                  var onHide = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onHide;
                  Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(onHide) && onHide.call(appInstance, options2);
                }
              }
            });
            Current.app = appConfig;
            return Current.app;
          }
          var taroHooks = function taroHooks2(lifecycle) {
            return function(fn) {
              var id = R.useContext(PageContext) || HOOKS_APP_ID;
              var fnRef = R.useRef(fn);
              if (fnRef.current !== fn)
                fnRef.current = fn;
              R.useLayoutEffect(function() {
                var inst = getPageInstance(id);
                var first = false;
                if (inst == null) {
                  first = true;
                  inst = Object.create(null);
                }
                inst = inst;
                var callback = function callback2() {
                  return fnRef.current.apply(fnRef, arguments);
                };
                if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(inst[lifecycle])) {
                  inst[lifecycle] = [inst[lifecycle], callback];
                } else {
                  inst[lifecycle] = [].concat(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["a"])(inst[lifecycle] || []), [callback]);
                }
                if (first) {
                  injectPageInstance(inst, id);
                }
                return function() {
                  var inst2 = getPageInstance(id);
                  var list = inst2[lifecycle];
                  if (list === callback) {
                    inst2[lifecycle] = void 0;
                  } else if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["isArray"])(list)) {
                    inst2[lifecycle] = list.filter(function(item) {
                      return item !== callback;
                    });
                  }
                };
              }, []);
            };
          };
          var useDidShow = taroHooks("componentDidShow");
          var useDidHide = taroHooks("componentDidHide");
          var usePullDownRefresh = taroHooks("onPullDownRefresh");
          var useReachBottom = taroHooks("onReachBottom");
          var usePageScroll = taroHooks("onPageScroll");
          var useResize = taroHooks("onResize");
          var useShareAppMessage = taroHooks("onShareAppMessage");
          var useTabItemTap = taroHooks("onTabItemTap");
          var useTitleClick = taroHooks("onTitleClick");
          var useOptionMenuClick = taroHooks("onOptionMenuClick");
          var usePullIntercept = taroHooks("onPullIntercept");
          var useShareTimeline = taroHooks("onShareTimeline");
          var useAddToFavorites = taroHooks("onAddToFavorites");
          var useReady = taroHooks("onReady");
          var useRouter = function useRouter2() {
            var dynamic = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            return dynamic ? Current.router : R.useMemo(function() {
              return Current.router;
            }, []);
          };
          var useScope = function useScope2() {
            return void 0;
          };
          function removeLeadingSlash(path) {
            if (path == null) {
              return "";
            }
            return path.charAt(0) === "/" ? path.slice(1) : path;
          }
          var nextTick = function nextTick2(cb, ctx) {
            var _a, _b, _c;
            var router = Current.router;
            var timerFunc = function timerFunc2() {
              setTimeout(function() {
                ctx ? cb.call(ctx) : cb();
              }, 1);
            };
            if (router !== null) {
              var pageElement = null;
              var path = getPath(removeLeadingSlash(router.path), router.params);
              pageElement = document$2.getElementById(path);
              if (pageElement !== null) {
                if (isBrowser) {
                  (_c = (_b = (_a = pageElement.firstChild) === null || _a === void 0 ? void 0 : _a["componentOnReady"]) === null || _b === void 0 ? void 0 : _b.call(_a).then(function() {
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
        }).call(this, __webpack_require__("./node_modules/_process@0.11.10@process/browser.js"), __webpack_require__("./node_modules/_webpack@4.46.0@webpack/buildin/global.js"), __webpack_require__("./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__("./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__("./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js")["requestAnimationFrame"], __webpack_require__("./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js")["cancelAnimationFrame"]);
      },
      "./node_modules/_@tarojs_shared@3.3.2@@tarojs/shared/dist/index.js": function(module2, exports2, __webpack_require__) {
        "use strict";
        var _toConsumableArray = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/toConsumableArray.js");
        var _typeof = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/typeof.js");
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        function isString(o) {
          return typeof o === "string";
        }
        function isUndefined(o) {
          return typeof o === "undefined";
        }
        function isNull(o) {
          return o === null;
        }
        function isObject(o) {
          return o !== null && _typeof(o) === "object";
        }
        function isBoolean(o) {
          return o === true || o === false;
        }
        function isFunction(o) {
          return typeof o === "function";
        }
        function isNumber(o) {
          return typeof o === "number";
        }
        function isBooleanStringLiteral(o) {
          return o === "true" || o === "false";
        }
        var isArray = Array.isArray;
        (function(Shortcuts) {
          Shortcuts["Container"] = "container";
          Shortcuts["Childnodes"] = "cn";
          Shortcuts["Text"] = "v";
          Shortcuts["NodeType"] = "nt";
          Shortcuts["NodeName"] = "nn";
          Shortcuts["Style"] = "st";
          Shortcuts["Class"] = "cl";
          Shortcuts["Src"] = "src";
        })(exports2.Shortcuts || (exports2.Shortcuts = {}));
        var styles = {
          style: "i.".concat("st"),
          class: "i.".concat("cl")
        };
        var events = {
          bindtap: "eh"
        };
        var touchEvents = {
          bindTouchStart: "",
          bindTouchMove: "",
          bindTouchEnd: "",
          bindTouchCancel: "",
          bindLongTap: ""
        };
        var animationEvents = {
          bindAnimationStart: "",
          bindAnimationIteration: "",
          bindAnimationEnd: "",
          bindTransitionEnd: ""
        };
        function singleQuote(s) {
          return "'".concat(s, "'");
        }
        var View = Object.assign(Object.assign({
          "hover-class": singleQuote("none"),
          "hover-stop-propagation": "false",
          "hover-start-time": "50",
          "hover-stay-time": "400",
          animation: ""
        }, touchEvents), animationEvents);
        var Icon = {
          type: "",
          size: "23",
          color: ""
        };
        var MapComp = Object.assign({
          longitude: "",
          latitude: "",
          scale: "16",
          markers: "[]",
          covers: "",
          polyline: "[]",
          circles: "[]",
          controls: "[]",
          "include-points": "[]",
          "show-location": "",
          "layer-style": "1",
          bindMarkerTap: "",
          bindControlTap: "",
          bindCalloutTap: "",
          bindUpdated: ""
        }, touchEvents);
        var Progress = {
          percent: "",
          "stroke-width": "6",
          color: singleQuote("#09BB07"),
          activeColor: singleQuote("#09BB07"),
          backgroundColor: singleQuote("#EBEBEB"),
          active: "false",
          "active-mode": singleQuote("backwards"),
          "show-info": "false"
        };
        var RichText = {
          nodes: "[]"
        };
        var Text = {
          selectable: "false",
          space: "",
          decode: "false"
        };
        var Button = {
          size: singleQuote("default"),
          type: "",
          plain: "false",
          disabled: "",
          loading: "false",
          "form-type": "",
          "open-type": "",
          "hover-class": singleQuote("button-hover"),
          "hover-stop-propagation": "false",
          "hover-start-time": "20",
          "hover-stay-time": "70",
          name: ""
        };
        var Checkbox = {
          value: "",
          disabled: "",
          checked: "false",
          color: singleQuote("#09BB07"),
          name: ""
        };
        var CheckboxGroup = {
          bindChange: "",
          name: ""
        };
        var Form = {
          "report-submit": "false",
          bindSubmit: "",
          bindReset: "",
          name: ""
        };
        var Input = {
          value: "",
          type: singleQuote(""),
          password: "false",
          placeholder: "",
          "placeholder-style": "",
          "placeholder-class": singleQuote("input-placeholder"),
          disabled: "",
          maxlength: "140",
          "cursor-spacing": "0",
          focus: "false",
          "confirm-type": singleQuote("done"),
          "confirm-hold": "false",
          cursor: "i.value.length",
          "selection-start": "-1",
          "selection-end": "-1",
          bindInput: "",
          bindFocus: "",
          bindBlur: "",
          bindConfirm: "",
          name: ""
        };
        var Label = {
          for: "",
          name: ""
        };
        var Picker = {
          mode: singleQuote("selector"),
          disabled: "",
          range: "",
          "range-key": "",
          value: "",
          start: "",
          end: "",
          fields: singleQuote("day"),
          "custom-item": "",
          name: "",
          bindCancel: "",
          bindChange: "",
          bindColumnChange: ""
        };
        var PickerView = {
          value: "",
          "indicator-style": "",
          "indicator-class": "",
          "mask-style": "",
          "mask-class": "",
          bindChange: "",
          name: ""
        };
        var PickerViewColumn = {
          name: ""
        };
        var Radio = {
          value: "",
          checked: "false",
          disabled: "",
          color: singleQuote("#09BB07"),
          name: ""
        };
        var RadioGroup = {
          bindChange: "",
          name: ""
        };
        var Slider = {
          min: "0",
          max: "100",
          step: "1",
          disabled: "",
          value: "0",
          activeColor: singleQuote("#1aad19"),
          backgroundColor: singleQuote("#e9e9e9"),
          "block-size": "28",
          "block-color": singleQuote("#ffffff"),
          "show-value": "false",
          bindChange: "",
          bindChanging: "",
          name: ""
        };
        var Switch = {
          checked: "false",
          disabled: "",
          type: singleQuote("switch"),
          color: singleQuote("#04BE02"),
          bindChange: "",
          name: ""
        };
        var Textarea = {
          value: "",
          placeholder: "",
          "placeholder-style": "",
          "placeholder-class": singleQuote("textarea-placeholder"),
          disabled: "",
          maxlength: "140",
          "auto-focus": "false",
          focus: "false",
          "auto-height": "false",
          fixed: "false",
          "cursor-spacing": "0",
          cursor: "-1",
          "selection-start": "-1",
          "selection-end": "-1",
          bindFocus: "",
          bindBlur: "",
          bindLineChange: "",
          bindInput: "",
          bindConfirm: "",
          name: ""
        };
        var CoverImage = {
          src: "",
          bindLoad: "eh",
          bindError: "eh"
        };
        var CoverView = Object.assign({
          "scroll-top": "false"
        }, touchEvents);
        var MovableArea = {
          "scale-area": "false"
        };
        var MovableView = Object.assign(Object.assign({
          direction: "none",
          inertia: "false",
          "out-of-bounds": "false",
          x: "",
          y: "",
          damping: "20",
          friction: "2",
          disabled: "",
          scale: "false",
          "scale-min": "0.5",
          "scale-max": "10",
          "scale-value": "1",
          animation: "true",
          bindChange: "",
          bindScale: "",
          bindHTouchMove: "",
          bindVTouchMove: "",
          width: singleQuote("10px"),
          height: singleQuote("10px")
        }, touchEvents), animationEvents);
        var ScrollView = Object.assign(Object.assign({
          "scroll-x": "false",
          "scroll-y": "false",
          "upper-threshold": "50",
          "lower-threshold": "50",
          "scroll-top": "",
          "scroll-left": "",
          "scroll-into-view": "",
          "scroll-with-animation": "false",
          "enable-back-to-top": "false",
          bindScrollToUpper: "",
          bindScrollToLower: "",
          bindScroll: ""
        }, touchEvents), animationEvents);
        var Swiper = Object.assign({
          "indicator-dots": "false",
          "indicator-color": singleQuote("rgba(0, 0, 0, .3)"),
          "indicator-active-color": singleQuote("#000000"),
          autoplay: "false",
          current: "0",
          interval: "5000",
          duration: "500",
          circular: "false",
          vertical: "false",
          "previous-margin": "'0px'",
          "next-margin": "'0px'",
          "display-multiple-items": "1",
          bindChange: "",
          bindTransition: "",
          bindAnimationFinish: ""
        }, touchEvents);
        var SwiperItem = {
          "item-id": ""
        };
        var Navigator = {
          url: "",
          "open-type": singleQuote("navigate"),
          delta: "1",
          "hover-class": singleQuote("navigator-hover"),
          "hover-stop-propagation": "false",
          "hover-start-time": "50",
          "hover-stay-time": "600",
          bindSuccess: "",
          bindFail: "",
          bindComplete: ""
        };
        var Audio = {
          id: "",
          src: "",
          loop: "false",
          controls: "false",
          poster: "",
          name: "",
          author: "",
          bindError: "",
          bindPlay: "",
          bindPause: "",
          bindTimeUpdate: "",
          bindEnded: ""
        };
        var Camera = {
          "device-position": singleQuote("back"),
          flash: singleQuote("auto"),
          bindStop: "",
          bindError: ""
        };
        var Image = Object.assign({
          src: "",
          mode: singleQuote("scaleToFill"),
          "lazy-load": "false",
          bindError: "",
          bindLoad: ""
        }, touchEvents);
        var LivePlayer = {
          src: "",
          autoplay: "false",
          muted: "false",
          orientation: singleQuote("vertical"),
          "object-fit": singleQuote("contain"),
          "background-mute": "false",
          "min-cache": "1",
          "max-cache": "3",
          animation: "",
          bindStateChange: "",
          bindFullScreenChange: "",
          bindNetStatus: ""
        };
        var Video = {
          src: "",
          duration: "",
          controls: "true",
          "danmu-list": "",
          "danmu-btn": "",
          "enable-danmu": "",
          autoplay: "false",
          loop: "false",
          muted: "false",
          "initial-time": "0",
          "page-gesture": "false",
          direction: "",
          "show-progress": "true",
          "show-fullscreen-btn": "true",
          "show-play-btn": "true",
          "show-center-play-btn": "true",
          "enable-progress-gesture": "true",
          "object-fit": singleQuote("contain"),
          poster: "",
          "show-mute-btn": "false",
          animation: "",
          bindPlay: "",
          bindPause: "",
          bindEnded: "",
          bindTimeUpdate: "",
          bindFullScreenChange: "",
          bindWaiting: "",
          bindError: ""
        };
        var Canvas = Object.assign({
          "canvas-id": "",
          "disable-scroll": "false",
          bindError: ""
        }, touchEvents);
        var Ad = {
          "unit-id": "",
          "ad-intervals": "",
          bindLoad: "",
          bindError: "",
          bindClose: ""
        };
        var WebView = {
          src: "",
          bindMessage: "",
          bindLoad: "",
          bindError: ""
        };
        var Block = {};
        var SlotView = {
          name: ""
        };
        var Slot = {
          name: ""
        };
        var internalComponents = {
          View,
          Icon,
          Progress,
          RichText,
          Text,
          Button,
          Checkbox,
          CheckboxGroup,
          Form,
          Input,
          Label,
          Picker,
          PickerView,
          PickerViewColumn,
          Radio,
          RadioGroup,
          Slider,
          Switch,
          CoverImage,
          Textarea,
          CoverView,
          MovableArea,
          MovableView,
          ScrollView,
          Swiper,
          SwiperItem,
          Navigator,
          Audio,
          Camera,
          Image,
          LivePlayer,
          Video,
          Canvas,
          Ad,
          WebView,
          Block,
          Map: MapComp,
          Slot,
          SlotView
        };
        var controlledComponent = new Set(["input", "checkbox", "picker", "picker-view", "radio", "slider", "switch", "textarea"]);
        var focusComponents = new Set(["input", "textarea"]);
        var voidElements = new Set(["progress", "icon", "rich-text", "input", "textarea", "slider", "switch", "audio", "ad", "official-account", "open-data", "navigation-bar"]);
        var nestElements = new Map([["view", -1], ["catch-view", -1], ["cover-view", -1], ["static-view", -1], ["pure-view", -1], ["block", -1], ["text", -1], ["static-text", 6], ["slot", 8], ["slot-view", 8], ["label", 6], ["form", 4], ["scroll-view", 4], ["swiper", 4], ["swiper-item", 4]]);
        var EMPTY_OBJ = {};
        var EMPTY_ARR = [];
        var noop = function noop2() {
        };
        var defaultReconciler = Object.create(null);
        var box = function box2(v) {
          return {
            v
          };
        };
        var unbox = function unbox2(b) {
          return b.v;
        };
        function toDashed(s) {
          return s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
        }
        function toCamelCase(s) {
          var camel = "";
          var nextCap = false;
          for (var i = 0; i < s.length; i++) {
            if (s[i] !== "-") {
              camel += nextCap ? s[i].toUpperCase() : s[i];
              nextCap = false;
            } else {
              nextCap = true;
            }
          }
          return camel;
        }
        var toKebabCase = function toKebabCase2(string) {
          return string.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        };
        function capitalize(s) {
          return s.charAt(0).toUpperCase() + s.slice(1);
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var hasOwn = function hasOwn2(val, key) {
          return hasOwnProperty.call(val, key);
        };
        var reportIssue = "\u5982\u6709\u7591\u95EE\uFF0C\u8BF7\u63D0\u4EA4 issue \u81F3\uFF1Ahttps://github.com/nervjs/taro/issues";
        function ensure(condition, msg) {
          if (!condition) {
            throw new Error(msg + "\n" + reportIssue);
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
          var qp = str.split("&");
          var ret = {};
          var name;
          var val;
          for (var i = 0, l = qp.length, item; i < l; ++i) {
            item = qp[i];
            if (item.length) {
              var s = item.indexOf("=");
              if (s < 0) {
                name = dec(item);
                val = "";
              } else {
                name = dec(item.slice(0, s));
                val = dec(item.slice(s + 1));
              }
              if (typeof ret[name] === "string") {
                ret[name] = [ret[name]];
              }
              if (Array.isArray(ret[name])) {
                ret[name].push(val);
              } else {
                ret[name] = val;
              }
            }
          }
          return ret;
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
          Object.keys(components).forEach(function(name) {
            if (name in internalComponents) {
              Object.assign(internalComponents[name], components[name]);
            } else {
              internalComponents[name] = components[name];
            }
          });
        }
        function mergeReconciler(hostConfig) {
          Object.keys(hostConfig).forEach(function(key) {
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
          return function() {
            console.warn("\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 ".concat(api));
          };
        }
        function setUniqueKeyToRoute(key, obj) {
          var routerParamsPrivateKey = "__key_";
          var useDataCacheApis = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
          if (useDataCacheApis.indexOf(key) > -1) {
            var url = obj.url = obj.url || "";
            var hasMark = url.indexOf("?") > -1;
            var cacheKey = getUniqueKey();
            obj.url += (hasMark ? "&" : "?") + "".concat(routerParamsPrivateKey, "=").concat(cacheKey);
          }
        }
        function indent(str, size) {
          return str.split("\n").map(function(line, index) {
            var indent2 = index === 0 ? "" : Array(size).fill(" ").join("");
            return indent2 + line;
          }).join("\n");
        }
        var needPromiseApis = new Set(["addPhoneContact", "authorize", "canvasGetImageData", "canvasPutImageData", "canvasToTempFilePath", "checkSession", "chooseAddress", "chooseImage", "chooseInvoiceTitle", "chooseLocation", "chooseVideo", "clearStorage", "closeBLEConnection", "closeBluetoothAdapter", "closeSocket", "compressImage", "connectSocket", "createBLEConnection", "downloadFile", "getAvailableAudioSources", "getBLEDeviceCharacteristics", "getBLEDeviceServices", "getBatteryInfo", "getBeacons", "getBluetoothAdapterState", "getBluetoothDevices", "getClipboardData", "getConnectedBluetoothDevices", "getConnectedWifi", "getExtConfig", "getFileInfo", "getImageInfo", "getLocation", "getNetworkType", "getSavedFileInfo", "getSavedFileList", "getScreenBrightness", "getSetting", "getStorage", "getStorageInfo", "getSystemInfo", "getUserInfo", "getWifiList", "hideHomeButton", "hideShareMenu", "hideTabBar", "hideTabBarRedDot", "loadFontFace", "login", "makePhoneCall", "navigateBack", "navigateBackMiniProgram", "navigateTo", "navigateToBookshelf", "navigateToMiniProgram", "notifyBLECharacteristicValueChange", "hideKeyboard", "hideLoading", "hideNavigationBarLoading", "hideToast", "openBluetoothAdapter", "openDocument", "openLocation", "openSetting", "pageScrollTo", "previewImage", "queryBookshelf", "reLaunch", "readBLECharacteristicValue", "redirectTo", "removeSavedFile", "removeStorage", "removeTabBarBadge", "requestSubscribeMessage", "saveFile", "saveImageToPhotosAlbum", "saveVideoToPhotosAlbum", "scanCode", "sendSocketMessage", "setBackgroundColor", "setBackgroundTextStyle", "setClipboardData", "setEnableDebug", "setInnerAudioOption", "setKeepScreenOn", "setNavigationBarColor", "setNavigationBarTitle", "setScreenBrightness", "setStorage", "setTabBarBadge", "setTabBarItem", "setTabBarStyle", "showActionSheet", "showFavoriteGuide", "showLoading", "showModal", "showShareMenu", "showTabBar", "showTabBarRedDot", "showToast", "startBeaconDiscovery", "startBluetoothDevicesDiscovery", "startDeviceMotionListening", "startPullDownRefresh", "stopBeaconDiscovery", "stopBluetoothDevicesDiscovery", "stopCompass", "startCompass", "startAccelerometer", "stopAccelerometer", "showNavigationBarLoading", "stopDeviceMotionListening", "stopPullDownRefresh", "switchTab", "uploadFile", "vibrateLong", "vibrateShort", "writeBLECharacteristicValue"]);
        function getCanIUseWebp(taro) {
          return function() {
            if (typeof taro.getSystemInfoSync !== "function") {
              console.error("\u4E0D\u652F\u6301 API canIUseWebp");
              return false;
            }
            var _taro$getSystemInfoSy = taro.getSystemInfoSync(), platform = _taro$getSystemInfoSy.platform;
            var platformLower = platform.toLowerCase();
            if (platformLower === "android" || platformLower === "devtools") {
              return true;
            }
            return false;
          };
        }
        function getNormalRequest(global) {
          return function request(options) {
            options = options || {};
            if (typeof options === "string") {
              options = {
                url: options
              };
            }
            var originSuccess = options.success;
            var originFail = options.fail;
            var originComplete = options.complete;
            var requestTask;
            var p = new Promise(function(resolve, reject) {
              options.success = function(res) {
                originSuccess && originSuccess(res);
                resolve(res);
              };
              options.fail = function(res) {
                originFail && originFail(res);
                reject(res);
              };
              options.complete = function(res) {
                originComplete && originComplete(res);
              };
              requestTask = global.request(options);
            });
            p.abort = function(cb) {
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
          var config = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          var patchNeedPromiseApis = config.needPromiseApis || [];
          var _needPromiseApis = new Set([].concat(_toConsumableArray(patchNeedPromiseApis), _toConsumableArray(needPromiseApis)));
          var preserved = ["getEnv", "interceptors", "Current", "getCurrentInstance", "options", "nextTick", "eventCenter", "Events", "preload", "webpackJsonp"];
          var apis = new Set(Object.keys(global).filter(function(api) {
            return preserved.indexOf(api) === -1;
          }));
          if (config.modifyApis) {
            config.modifyApis(apis);
          }
          apis.forEach(function(key) {
            if (_needPromiseApis.has(key)) {
              var originKey = key;
              taro[originKey] = function() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
                }
                var key2 = originKey;
                if (typeof options === "string") {
                  if (args.length) {
                    return global[key2].apply(global, [options].concat(args));
                  }
                  return global[key2](options);
                }
                if (config.transformMeta) {
                  var transformResult = config.transformMeta(key2, options);
                  key2 = transformResult.key;
                  options = transformResult.options;
                  if (!global.hasOwnProperty(key2)) {
                    return unsupport(key2)();
                  }
                }
                var task = null;
                var obj = Object.assign({}, options);
                setUniqueKeyToRoute(key2, options);
                var p = new Promise(function(resolve, reject) {
                  obj.success = function(res) {
                    var _a, _b;
                    (_a = config.modifyAsyncResult) === null || _a === void 0 ? void 0 : _a.call(config, key2, res);
                    (_b = options.success) === null || _b === void 0 ? void 0 : _b.call(options, res);
                    if (key2 === "connectSocket") {
                      resolve(Promise.resolve().then(function() {
                        return task ? Object.assign(task, res) : res;
                      }));
                    } else {
                      resolve(res);
                    }
                  };
                  obj.fail = function(res) {
                    var _a;
                    (_a = options.fail) === null || _a === void 0 ? void 0 : _a.call(options, res);
                    reject(res);
                  };
                  obj.complete = function(res) {
                    var _a;
                    (_a = options.complete) === null || _a === void 0 ? void 0 : _a.call(options, res);
                  };
                  if (args.length) {
                    task = global[key2].apply(global, [obj].concat(args));
                  } else {
                    task = global[key2](obj);
                  }
                });
                if (key2 === "uploadFile" || key2 === "downloadFile") {
                  p.progress = function(cb) {
                    task === null || task === void 0 ? void 0 : task.onProgressUpdate(cb);
                    return p;
                  };
                  p.abort = function(cb) {
                    cb === null || cb === void 0 ? void 0 : cb();
                    task === null || task === void 0 ? void 0 : task.abort();
                    return p;
                  };
                }
                return p;
              };
            } else {
              var platformKey = key;
              if (config.transformMeta) {
                platformKey = config.transformMeta(key, {}).key;
              }
              if (!global.hasOwnProperty(platformKey)) {
                taro[key] = unsupport(key);
                return;
              }
              if (typeof global[key] === "function") {
                taro[key] = function() {
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
        function equipCommonApis(taro, global) {
          var apis = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          taro.canIUseWebp = getCanIUseWebp(taro);
          taro.getCurrentPages = getCurrentPages || unsupport("getCurrentPages");
          taro.getApp = getApp || unsupport("getApp");
          taro.env = global.env || {};
          try {
            taro.requirePlugin = requirePlugin || unsupport("requirePlugin");
          } catch (error) {
            taro.requirePlugin = unsupport("requirePlugin");
          }
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
        exports2.EMPTY_ARR = EMPTY_ARR;
        exports2.EMPTY_OBJ = EMPTY_OBJ;
        exports2.animationEvents = animationEvents;
        exports2.box = box;
        exports2.cacheDataGet = cacheDataGet;
        exports2.cacheDataHas = cacheDataHas;
        exports2.cacheDataSet = cacheDataSet;
        exports2.capitalize = capitalize;
        exports2.controlledComponent = controlledComponent;
        exports2.defaultReconciler = defaultReconciler;
        exports2.ensure = ensure;
        exports2.events = events;
        exports2.focusComponents = focusComponents;
        exports2.getUniqueKey = getUniqueKey;
        exports2.hasOwn = hasOwn;
        exports2.indent = indent;
        exports2.internalComponents = internalComponents;
        exports2.isArray = isArray;
        exports2.isBoolean = isBoolean;
        exports2.isBooleanStringLiteral = isBooleanStringLiteral;
        exports2.isFunction = isFunction;
        exports2.isNull = isNull;
        exports2.isNumber = isNumber;
        exports2.isObject = isObject;
        exports2.isString = isString;
        exports2.isUndefined = isUndefined;
        exports2.mergeInternalComponents = mergeInternalComponents;
        exports2.mergeReconciler = mergeReconciler;
        exports2.nestElements = nestElements;
        exports2.noop = noop;
        exports2.processApis = processApis;
        exports2.queryToJson = queryToJson;
        exports2.setUniqueKeyToRoute = setUniqueKeyToRoute;
        exports2.singleQuote = singleQuote;
        exports2.styles = styles;
        exports2.toCamelCase = toCamelCase;
        exports2.toDashed = toDashed;
        exports2.toKebabCase = toKebabCase;
        exports2.touchEvents = touchEvents;
        exports2.unbox = unbox;
        exports2.unsupport = unsupport;
        exports2.voidElements = voidElements;
        exports2.warn = warn;
      },
      "./node_modules/_@tarojs_taro@3.3.2@@tarojs/taro/index.js": function(module2, exports2, __webpack_require__) {
        var _require = __webpack_require__("./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js"), container = _require.container, SERVICE_IDENTIFIER = _require.SERVICE_IDENTIFIER;
        var taro = __webpack_require__("./node_modules/_@tarojs_api@3.3.2@@tarojs/api/dist/index.esm.js").default;
        var hooks = container.get(SERVICE_IDENTIFIER.Hooks);
        if (typeof hooks.initNativeApi === "function") {
          hooks.initNativeApi(taro);
        }
        module2.exports = taro;
        module2.exports.default = module2.exports;
      }
    }]);
  }
});

// taro/dist/app.js
var require_app = __commonJS({
  "taro/dist/app.js"() {
    window["__pages__"] = ["pages/index/index"];
    require_runtime();
    require_vendors();
    require_taro();
    (wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"], {
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/classCallCheck.js": function(module2, exports2) {
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        module2.exports = _classCallCheck;
        module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/createClass.js": function(module2, exports2) {
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        module2.exports = _createClass;
        module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/defineProperty.js": function(module2, exports2) {
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        module2.exports = _defineProperty;
        module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
      },
      "./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/objectSpread2.js": function(module2, exports2, __webpack_require__) {
        var defineProperty = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/defineProperty.js");
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) {
              symbols = symbols.filter(function(sym) {
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
              ownKeys(Object(source), true).forEach(function(key) {
                defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
        module2.exports = _objectSpread2;
        module2.exports["default"] = module2.exports, module2.exports.__esModule = true;
      },
      "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./src/app.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/classCallCheck.js");
        var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/createClass.js");
        var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/inherits.js");
        var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/createSuper.js");
        var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
        var react__WEBPACK_IMPORTED_MODULE_4___default = /* @__PURE__ */ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
        var _app_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/app.less");
        var _app_less__WEBPACK_IMPORTED_MODULE_5___default = /* @__PURE__ */ __webpack_require__.n(_app_less__WEBPACK_IMPORTED_MODULE_5__);
        var App2 = /* @__PURE__ */ function(_Component) {
          Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["a"])(App3, _Component);
          var _super = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["a"])(App3);
          function App3() {
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["a"])(this, App3);
            return _super.apply(this, arguments);
          }
          Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["a"])(App3, [{
            key: "componentDidMount",
            value: function componentDidMount() {
            }
          }, {
            key: "componentDidShow",
            value: function componentDidShow() {
            }
          }, {
            key: "componentDidHide",
            value: function componentDidHide() {
            }
          }, {
            key: "componentDidCatchError",
            value: function componentDidCatchError() {
            }
          }, {
            key: "render",
            value: function render() {
              return this.props.children;
            }
          }]);
          return App3;
        }(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);
        __webpack_exports__["a"] = App2;
      },
      "./node_modules/_react-reconciler@0.26.1@react-reconciler/cjs/react-reconciler.production.min.js": function(module2, exports2, __webpack_require__) {
        (function(module3) {
          var _typeof = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/typeof.js");
          module3.exports = function $$$reconciler($$$hostConfig) {
            var exports3 = {};
            "use strict";
            var aa = __webpack_require__("./node_modules/_object-assign@4.1.1@object-assign/index.js"), ba = __webpack_require__("./node_modules/_react@17.0.2@react/cjs/react.production.min.js"), m = __webpack_require__("./node_modules/_scheduler@0.20.2@scheduler/cjs/scheduler.production.min.js");
            function q(a) {
              for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
                b += "&args[]=" + encodeURIComponent(arguments[c]);
              }
              return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            }
            var ca = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, da = 60103, ea = 60106, fa = 60107, ha = 60108, ia = 60114, ja = 60109, ka = 60110, la = 60112, ma = 60113, na = 60120, oa = 60115, pa = 60116, qa = 60121, ra = 60129, sa = 60130, ta = 60131;
            if (typeof Symbol === "function" && Symbol.for) {
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
            var ua = typeof Symbol === "function" && Symbol.iterator;
            function va(a) {
              if (a === null || _typeof(a) !== "object")
                return null;
              a = ua && a[ua] || a["@@iterator"];
              return typeof a === "function" ? a : null;
            }
            function wa(a) {
              if (a == null)
                return null;
              if (typeof a === "function")
                return a.displayName || a.name || null;
              if (typeof a === "string")
                return a;
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
              if (_typeof(a) === "object")
                switch (a.$$typeof) {
                  case ka:
                    return (a.displayName || "Context") + ".Consumer";
                  case ja:
                    return (a._context.displayName || "Context") + ".Provider";
                  case la:
                    var b = a.render;
                    b = b.displayName || b.name || "";
                    return a.displayName || (b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef");
                  case oa:
                    return wa(a.type);
                  case qa:
                    return wa(a._render);
                  case pa:
                    b = a._payload;
                    a = a._init;
                    try {
                      return wa(a(b));
                    } catch (c) {
                    }
                }
              return null;
            }
            function xa(a) {
              var b = a, c = a;
              if (a.alternate)
                for (; b.return; ) {
                  b = b.return;
                }
              else {
                a = b;
                do {
                  b = a, (b.flags & 1026) !== 0 && (c = b.return), a = b.return;
                } while (a);
              }
              return b.tag === 3 ? c : null;
            }
            function ya(a) {
              if (xa(a) !== a)
                throw Error(q(188));
            }
            function za(a) {
              var b = a.alternate;
              if (!b) {
                b = xa(a);
                if (b === null)
                  throw Error(q(188));
                return b !== a ? null : a;
              }
              for (var c = a, d = b; ; ) {
                var e = c.return;
                if (e === null)
                  break;
                var f = e.alternate;
                if (f === null) {
                  d = e.return;
                  if (d !== null) {
                    c = d;
                    continue;
                  }
                  break;
                }
                if (e.child === f.child) {
                  for (f = e.child; f; ) {
                    if (f === c)
                      return ya(e), a;
                    if (f === d)
                      return ya(e), b;
                    f = f.sibling;
                  }
                  throw Error(q(188));
                }
                if (c.return !== d.return)
                  c = e, d = f;
                else {
                  for (var g = false, h = e.child; h; ) {
                    if (h === c) {
                      g = true;
                      c = e;
                      d = f;
                      break;
                    }
                    if (h === d) {
                      g = true;
                      d = e;
                      c = f;
                      break;
                    }
                    h = h.sibling;
                  }
                  if (!g) {
                    for (h = f.child; h; ) {
                      if (h === c) {
                        g = true;
                        c = f;
                        d = e;
                        break;
                      }
                      if (h === d) {
                        g = true;
                        d = f;
                        c = e;
                        break;
                      }
                      h = h.sibling;
                    }
                    if (!g)
                      throw Error(q(189));
                  }
                }
                if (c.alternate !== d)
                  throw Error(q(190));
              }
              if (c.tag !== 3)
                throw Error(q(188));
              return c.stateNode.current === c ? a : b;
            }
            function Aa(a) {
              a = za(a);
              if (!a)
                return null;
              for (var b = a; ; ) {
                if (b.tag === 5 || b.tag === 6)
                  return b;
                if (b.child)
                  b.child.return = b, b = b.child;
                else {
                  if (b === a)
                    break;
                  for (; !b.sibling; ) {
                    if (!b.return || b.return === a)
                      return null;
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
              if (!a)
                return null;
              for (var b = a; ; ) {
                if (b.tag === 5 || b.tag === 6)
                  return b;
                if (b.child && b.tag !== 4)
                  b.child.return = b, b = b.child;
                else {
                  if (b === a)
                    break;
                  for (; !b.sibling; ) {
                    if (!b.return || b.return === a)
                      return null;
                    b = b.return;
                  }
                  b.sibling.return = b.return;
                  b = b.sibling;
                }
              }
              return null;
            }
            function Ca(a, b) {
              for (var c = a.alternate; b !== null; ) {
                if (b === a || b === c)
                  return true;
                b = b.return;
              }
              return false;
            }
            var Da = $$$hostConfig.getPublicInstance, Ea = $$$hostConfig.getRootHostContext, Fa = $$$hostConfig.getChildHostContext, Ga = $$$hostConfig.prepareForCommit, Ha = $$$hostConfig.resetAfterCommit, Ia = $$$hostConfig.createInstance, Ja = $$$hostConfig.appendInitialChild, Ka = $$$hostConfig.finalizeInitialChildren, La = $$$hostConfig.prepareUpdate, Ma = $$$hostConfig.shouldSetTextContent, Na = $$$hostConfig.createTextInstance, Pa = $$$hostConfig.scheduleTimeout, Qa = $$$hostConfig.cancelTimeout, Ra = $$$hostConfig.noTimeout, Sa = $$$hostConfig.isPrimaryRenderer, Ta = $$$hostConfig.supportsMutation, Ua = $$$hostConfig.supportsPersistence, Va = $$$hostConfig.supportsHydration, Wa = $$$hostConfig.getInstanceFromNode, Xa = $$$hostConfig.makeOpaqueHydratingObject, Ya = $$$hostConfig.makeClientId, Za = $$$hostConfig.beforeActiveInstanceBlur, $a = $$$hostConfig.afterActiveInstanceBlur, ab = $$$hostConfig.preparePortalMount, bb = $$$hostConfig.supportsTestSelectors, cb = $$$hostConfig.findFiberRoot, db = $$$hostConfig.getBoundingRect, eb = $$$hostConfig.getTextContent, fb = $$$hostConfig.isHiddenSubtree, gb = $$$hostConfig.matchAccessibilityRole, hb = $$$hostConfig.setFocusIfFocusable, ib = $$$hostConfig.setupIntersectionObserver, jb = $$$hostConfig.appendChild, kb = $$$hostConfig.appendChildToContainer, lb = $$$hostConfig.commitTextUpdate, mb = $$$hostConfig.commitMount, nb = $$$hostConfig.commitUpdate, ob = $$$hostConfig.insertBefore, pb = $$$hostConfig.insertInContainerBefore, qb = $$$hostConfig.removeChild, rb = $$$hostConfig.removeChildFromContainer, sb = $$$hostConfig.resetTextContent, tb = $$$hostConfig.hideInstance, ub = $$$hostConfig.hideTextInstance, vb = $$$hostConfig.unhideInstance, wb = $$$hostConfig.unhideTextInstance, xb = $$$hostConfig.clearContainer, yb = $$$hostConfig.cloneInstance, zb = $$$hostConfig.createContainerChildSet, Ab = $$$hostConfig.appendChildToContainerChildSet, Bb = $$$hostConfig.finalizeContainerChildren, Cb = $$$hostConfig.replaceContainerChildren, Db = $$$hostConfig.cloneHiddenInstance, Eb = $$$hostConfig.cloneHiddenTextInstance, Fb = $$$hostConfig.canHydrateInstance, Gb = $$$hostConfig.canHydrateTextInstance, Hb = $$$hostConfig.isSuspenseInstancePending, Ib = $$$hostConfig.isSuspenseInstanceFallback, Jb = $$$hostConfig.getNextHydratableSibling, Kb = $$$hostConfig.getFirstHydratableChild, Lb = $$$hostConfig.hydrateInstance, Mb = $$$hostConfig.hydrateTextInstance, Nb = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance, Ob = $$$hostConfig.commitHydratedContainer, Pb = $$$hostConfig.commitHydratedSuspenseInstance, Qb;
            function Rb(a) {
              if (Qb === void 0)
                try {
                  throw Error();
                } catch (c) {
                  var b = c.stack.trim().match(/\n( *(at )?)/);
                  Qb = b && b[1] || "";
                }
              return "\n" + Qb + a;
            }
            var Sb = false;
            function Tb(a, b) {
              if (!a || Sb)
                return "";
              Sb = true;
              var c = Error.prepareStackTrace;
              Error.prepareStackTrace = void 0;
              try {
                if (b) {
                  if (b = function b2() {
                    throw Error();
                  }, Object.defineProperty(b.prototype, "props", {
                    set: function set() {
                      throw Error();
                    }
                  }), (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && Reflect.construct) {
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
                if (k && d && typeof k.stack === "string") {
                  for (var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) {
                    h--;
                  }
                  for (; 1 <= g && 0 <= h; g--, h--) {
                    if (e[g] !== f[h]) {
                      if (g !== 1 || h !== 1) {
                        do {
                          if (g--, h--, 0 > h || e[g] !== f[h])
                            return "\n" + e[g].replace(" at new ", " at ");
                        } while (1 <= g && 0 <= h);
                      }
                      break;
                    }
                  }
                }
              } finally {
                Sb = false, Error.prepareStackTrace = c;
              }
              return (a = a ? a.displayName || a.name : "") ? Rb(a) : "";
            }
            var Ub = [], Vb = -1;
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
            var Xb = {}, B = Wb(Xb), D = Wb(false), Yb = Xb;
            function Zb(a, b) {
              var c = a.type.contextTypes;
              if (!c)
                return Xb;
              var d = a.stateNode;
              if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
                return d.__reactInternalMemoizedMaskedChildContext;
              var e = {}, f;
              for (f in c) {
                e[f] = b[f];
              }
              d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
              return e;
            }
            function E(a) {
              a = a.childContextTypes;
              return a !== null && a !== void 0;
            }
            function $b() {
              z(D);
              z(B);
            }
            function ac(a, b, c) {
              if (B.current !== Xb)
                throw Error(q(168));
              A(B, b);
              A(D, c);
            }
            function bc(a, b, c) {
              var d = a.stateNode;
              a = b.childContextTypes;
              if (typeof d.getChildContext !== "function")
                return c;
              d = d.getChildContext();
              for (var e in d) {
                if (!(e in a))
                  throw Error(q(108, wa(b) || "Unknown", e));
              }
              return aa({}, c, d);
            }
            function cc(a) {
              a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Xb;
              Yb = B.current;
              A(B, a);
              A(D, D.current);
              return true;
            }
            function dc(a, b, c) {
              var d = a.stateNode;
              if (!d)
                throw Error(q(169));
              c ? (a = bc(a, b, Yb), d.__reactInternalMemoizedMergedChildContext = a, z(D), z(B), A(B, a)) : z(D);
              A(D, c);
            }
            var ec = null, fc = null, gc = m.unstable_now;
            gc();
            var hc = 0, F = 8;
            function ic(a) {
              if ((1 & a) !== 0)
                return F = 15, 1;
              if ((2 & a) !== 0)
                return F = 14, 2;
              if ((4 & a) !== 0)
                return F = 13, 4;
              var b = 24 & a;
              if (b !== 0)
                return F = 12, b;
              if ((a & 32) !== 0)
                return F = 11, 32;
              b = 192 & a;
              if (b !== 0)
                return F = 10, b;
              if ((a & 256) !== 0)
                return F = 9, 256;
              b = 3584 & a;
              if (b !== 0)
                return F = 8, b;
              if ((a & 4096) !== 0)
                return F = 7, 4096;
              b = 4186112 & a;
              if (b !== 0)
                return F = 6, b;
              b = 62914560 & a;
              if (b !== 0)
                return F = 5, b;
              if (a & 67108864)
                return F = 4, 67108864;
              if ((a & 134217728) !== 0)
                return F = 3, 134217728;
              b = 805306368 & a;
              if (b !== 0)
                return F = 2, b;
              if ((1073741824 & a) !== 0)
                return F = 1, 1073741824;
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
              if (c === 0)
                return F = 0;
              var d = 0, e = 0, f = a.expiredLanes, g = a.suspendedLanes, h = a.pingedLanes;
              if (f !== 0)
                d = f, e = F = 15;
              else if (f = c & 134217727, f !== 0) {
                var k = f & ~g;
                k !== 0 ? (d = ic(k), e = F) : (h &= f, h !== 0 && (d = ic(h), e = F));
              } else
                f = c & ~g, f !== 0 ? (d = ic(f), e = F) : h !== 0 && (d = ic(h), e = F);
              if (d === 0)
                return 0;
              d = 31 - mc(d);
              d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;
              if (b !== 0 && b !== d && (b & g) === 0) {
                ic(b);
                if (e <= F)
                  return b;
                F = e;
              }
              b = a.entangledLanes;
              if (b !== 0)
                for (a = a.entanglements, b &= d; 0 < b; ) {
                  c = 31 - mc(b), e = 1 << c, d |= a[c], b &= ~e;
                }
              return d;
            }
            function nc(a) {
              a = a.pendingLanes & -1073741825;
              return a !== 0 ? a : a & 1073741824 ? 1073741824 : 0;
            }
            function oc(a, b) {
              switch (a) {
                case 15:
                  return 1;
                case 14:
                  return 2;
                case 12:
                  return a = pc(24 & ~b), a === 0 ? oc(10, b) : a;
                case 10:
                  return a = pc(192 & ~b), a === 0 ? oc(8, b) : a;
                case 8:
                  return a = pc(3584 & ~b), a === 0 && (a = pc(4186112 & ~b), a === 0 && (a = 512)), a;
                case 2:
                  return b = pc(805306368 & ~b), b === 0 && (b = 268435456), b;
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
            var mc = Math.clz32 ? Math.clz32 : sc, tc = Math.log, uc = Math.LN2;
            function sc(a) {
              return a === 0 ? 32 : 31 - (tc(a) / uc | 0) | 0;
            }
            var vc = m.unstable_runWithPriority, wc = m.unstable_scheduleCallback, xc = m.unstable_cancelCallback, yc = m.unstable_shouldYield, zc = m.unstable_requestPaint, Ac = m.unstable_now, Bc = m.unstable_getCurrentPriorityLevel, Cc = m.unstable_ImmediatePriority, Dc = m.unstable_UserBlockingPriority, Ec = m.unstable_NormalPriority, Fc = m.unstable_LowPriority, Gc = m.unstable_IdlePriority, Hc = {}, Ic = zc !== void 0 ? zc : function() {
            }, Jc = null, Kc = null, Lc = false, Mc = Ac(), G = 1e4 > Mc ? Ac : function() {
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
              if (Kc !== null) {
                var a = Kc;
                Kc = null;
                xc(a);
              }
              Rc();
            }
            function Rc() {
              if (!Lc && Jc !== null) {
                Lc = true;
                var a = 0;
                try {
                  var b = Jc;
                  Pc(99, function() {
                    for (; a < b.length; a++) {
                      var c = b[a];
                      do {
                        c = c(true);
                      } while (c !== null);
                    }
                  });
                  Jc = null;
                } catch (c) {
                  throw Jc !== null && (Jc = Jc.slice(a + 1)), wc(Cc, H), c;
                } finally {
                  Lc = false;
                }
              }
            }
            var Sc = ca.ReactCurrentBatchConfig;
            function Tc(a, b) {
              return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
            }
            var I = typeof Object.is === "function" ? Object.is : Tc, Uc = Object.prototype.hasOwnProperty;
            function Vc(a, b) {
              if (I(a, b))
                return true;
              if (_typeof(a) !== "object" || a === null || _typeof(b) !== "object" || b === null)
                return false;
              var c = Object.keys(a), d = Object.keys(b);
              if (c.length !== d.length)
                return false;
              for (d = 0; d < c.length; d++) {
                if (!Uc.call(b, c[d]) || !I(a[c[d]], b[c[d]]))
                  return false;
              }
              return true;
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
                  return a = Tb(a.type, false), a;
                case 11:
                  return a = Tb(a.type.render, false), a;
                case 22:
                  return a = Tb(a.type._render, false), a;
                case 1:
                  return a = Tb(a.type, true), a;
                default:
                  return "";
              }
            }
            function Xc(a, b) {
              if (a && a.defaultProps) {
                b = aa({}, b);
                a = a.defaultProps;
                for (var c in a) {
                  b[c] === void 0 && (b[c] = a[c]);
                }
                return b;
              }
              return b;
            }
            var Yc = Wb(null), Zc = null, $c = null, ad = null;
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
              for (; a !== null; ) {
                var c = a.alternate;
                if ((a.childLanes & b) === b) {
                  if (c === null || (c.childLanes & b) === b)
                    break;
                  else
                    c.childLanes |= b;
                } else
                  a.childLanes |= b, c !== null && (c.childLanes |= b);
                a = a.return;
              }
            }
            function fd(a, b) {
              Zc = a;
              ad = $c = null;
              a = a.dependencies;
              a !== null && a.firstContext !== null && ((a.lanes & b) !== 0 && (gd = true), a.firstContext = null);
            }
            function J(a, b) {
              if (ad !== a && b !== false && b !== 0) {
                if (typeof b !== "number" || b === 1073741823)
                  ad = a, b = 1073741823;
                b = {
                  context: a,
                  observedBits: b,
                  next: null
                };
                if ($c === null) {
                  if (Zc === null)
                    throw Error(q(308));
                  $c = b;
                  Zc.dependencies = {
                    lanes: 0,
                    firstContext: b,
                    responders: null
                  };
                } else
                  $c = $c.next = b;
              }
              return Sa ? a._currentValue : a._currentValue2;
            }
            var hd = false;
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
            function jd2(a, b) {
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
              if (a !== null) {
                a = a.shared;
                var c = a.pending;
                c === null ? b.next = b : (b.next = c.next, c.next = b);
                a.pending = b;
              }
            }
            function nd(a, b) {
              var c = a.updateQueue, d = a.alternate;
              if (d !== null && (d = d.updateQueue, c === d)) {
                var e = null, f = null;
                c = c.firstBaseUpdate;
                if (c !== null) {
                  do {
                    var g = {
                      eventTime: c.eventTime,
                      lane: c.lane,
                      tag: c.tag,
                      payload: c.payload,
                      callback: c.callback,
                      next: null
                    };
                    f === null ? e = f = g : f = f.next = g;
                    c = c.next;
                  } while (c !== null);
                  f === null ? e = f = b : f = f.next = b;
                } else
                  e = f = b;
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
              a === null ? c.firstBaseUpdate = b : a.next = b;
              c.lastBaseUpdate = b;
            }
            function od(a, b, c, d) {
              var e = a.updateQueue;
              hd = false;
              var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
              if (h !== null) {
                e.shared.pending = null;
                var k = h, l = k.next;
                k.next = null;
                g === null ? f = l : g.next = l;
                g = k;
                var n = a.alternate;
                if (n !== null) {
                  n = n.updateQueue;
                  var t = n.lastBaseUpdate;
                  t !== g && (t === null ? n.firstBaseUpdate = l : t.next = l, n.lastBaseUpdate = k);
                }
              }
              if (f !== null) {
                t = e.baseState;
                g = 0;
                n = l = k = null;
                do {
                  h = f.lane;
                  var p = f.eventTime;
                  if ((d & h) === h) {
                    n !== null && (n = n.next = {
                      eventTime: p,
                      lane: 0,
                      tag: f.tag,
                      payload: f.payload,
                      callback: f.callback,
                      next: null
                    });
                    a: {
                      var y = a, x = f;
                      h = b;
                      p = c;
                      switch (x.tag) {
                        case 1:
                          y = x.payload;
                          if (typeof y === "function") {
                            t = y.call(p, t, h);
                            break a;
                          }
                          t = y;
                          break a;
                        case 3:
                          y.flags = y.flags & -4097 | 64;
                        case 0:
                          y = x.payload;
                          h = typeof y === "function" ? y.call(p, t, h) : y;
                          if (h === null || h === void 0)
                            break a;
                          t = aa({}, t, h);
                          break a;
                        case 2:
                          hd = true;
                      }
                    }
                    f.callback !== null && (a.flags |= 32, h = e.effects, h === null ? e.effects = [f] : h.push(f));
                  } else
                    p = {
                      eventTime: p,
                      lane: h,
                      tag: f.tag,
                      payload: f.payload,
                      callback: f.callback,
                      next: null
                    }, n === null ? (l = n = p, k = t) : n = n.next = p, g |= h;
                  f = f.next;
                  if (f === null)
                    if (h = e.shared.pending, h === null)
                      break;
                    else
                      f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
                } while (1);
                n === null && (k = t);
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
              if (a !== null)
                for (b = 0; b < a.length; b++) {
                  var d = a[b], e = d.callback;
                  if (e !== null) {
                    d.callback = null;
                    d = c;
                    if (typeof e !== "function")
                      throw Error(q(191, e));
                    e.call(d);
                  }
                }
            }
            var rd = new ba.Component().refs;
            function sd(a, b, c, d) {
              b = a.memoizedState;
              c = c(d, b);
              c = c === null || c === void 0 ? b : aa({}, b, c);
              a.memoizedState = c;
              a.lanes === 0 && (a.updateQueue.baseState = c);
            }
            var vd = {
              isMounted: function isMounted(a) {
                return (a = a._reactInternals) ? xa(a) === a : false;
              },
              enqueueSetState: function enqueueSetState(a, b, c) {
                a = a._reactInternals;
                var d = K(), e = td(a), f = kd(d, e);
                f.payload = b;
                c !== void 0 && c !== null && (f.callback = c);
                md(a, f);
                ud(a, e, d);
              },
              enqueueReplaceState: function enqueueReplaceState(a, b, c) {
                a = a._reactInternals;
                var d = K(), e = td(a), f = kd(d, e);
                f.tag = 1;
                f.payload = b;
                c !== void 0 && c !== null && (f.callback = c);
                md(a, f);
                ud(a, e, d);
              },
              enqueueForceUpdate: function enqueueForceUpdate(a, b) {
                a = a._reactInternals;
                var c = K(), d = td(a), e = kd(c, d);
                e.tag = 2;
                b !== void 0 && b !== null && (e.callback = b);
                md(a, e);
                ud(a, d, c);
              }
            };
            function wd(a, b, c, d, e, f, g) {
              a = a.stateNode;
              return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Vc(c, d) || !Vc(e, f) : true;
            }
            function xd(a, b, c) {
              var d = false, e = Xb;
              var f = b.contextType;
              _typeof(f) === "object" && f !== null ? f = J(f) : (e = E(b) ? Yb : B.current, d = b.contextTypes, f = (d = d !== null && d !== void 0) ? Zb(a, e) : Xb);
              b = new b(c, f);
              a.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
              b.updater = vd;
              a.stateNode = b;
              b._reactInternals = a;
              d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
              return b;
            }
            function yd(a, b, c, d) {
              a = b.state;
              typeof b.componentWillReceiveProps === "function" && b.componentWillReceiveProps(c, d);
              typeof b.UNSAFE_componentWillReceiveProps === "function" && b.UNSAFE_componentWillReceiveProps(c, d);
              b.state !== a && vd.enqueueReplaceState(b, b.state, null);
            }
            function zd(a, b, c, d) {
              var e = a.stateNode;
              e.props = c;
              e.state = a.memoizedState;
              e.refs = rd;
              id(a);
              var f = b.contextType;
              _typeof(f) === "object" && f !== null ? e.context = J(f) : (f = E(b) ? Yb : B.current, e.context = Zb(a, f));
              od(a, c, e, d);
              e.state = a.memoizedState;
              f = b.getDerivedStateFromProps;
              typeof f === "function" && (sd(a, b, f, c), e.state = a.memoizedState);
              typeof b.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b !== e.state && vd.enqueueReplaceState(e, e.state, null), od(a, c, e, d), e.state = a.memoizedState);
              typeof e.componentDidMount === "function" && (a.flags |= 4);
            }
            var Ad = Array.isArray;
            function Bd(a, b, c) {
              a = c.ref;
              if (a !== null && typeof a !== "function" && _typeof(a) !== "object") {
                if (c._owner) {
                  c = c._owner;
                  if (c) {
                    if (c.tag !== 1)
                      throw Error(q(309));
                    var d = c.stateNode;
                  }
                  if (!d)
                    throw Error(q(147, a));
                  var e = "" + a;
                  if (b !== null && b.ref !== null && typeof b.ref === "function" && b.ref._stringRef === e)
                    return b.ref;
                  b = function b2(a2) {
                    var b3 = d.refs;
                    b3 === rd && (b3 = d.refs = {});
                    a2 === null ? delete b3[e] : b3[e] = a2;
                  };
                  b._stringRef = e;
                  return b;
                }
                if (typeof a !== "string")
                  throw Error(q(284));
                if (!c._owner)
                  throw Error(q(290, a));
              }
              return a;
            }
            function Cd(a, b) {
              if (a.type !== "textarea")
                throw Error(q(31, Object.prototype.toString.call(b) === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
            }
            function Dd(a) {
              function b(b2, c2) {
                if (a) {
                  var d2 = b2.lastEffect;
                  d2 !== null ? (d2.nextEffect = c2, b2.lastEffect = c2) : b2.firstEffect = b2.lastEffect = c2;
                  c2.nextEffect = null;
                  c2.flags = 8;
                }
              }
              function c(c2, d2) {
                if (!a)
                  return null;
                for (; d2 !== null; ) {
                  b(c2, d2), d2 = d2.sibling;
                }
                return null;
              }
              function d(a2, b2) {
                for (a2 = new Map(); b2 !== null; ) {
                  b2.key !== null ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
                }
                return a2;
              }
              function e(a2, b2) {
                a2 = Ed(a2, b2);
                a2.index = 0;
                a2.sibling = null;
                return a2;
              }
              function f(b2, c2, d2) {
                b2.index = d2;
                if (!a)
                  return c2;
                d2 = b2.alternate;
                if (d2 !== null)
                  return d2 = d2.index, d2 < c2 ? (b2.flags = 2, c2) : d2;
                b2.flags = 2;
                return c2;
              }
              function g(b2) {
                a && b2.alternate === null && (b2.flags = 2);
                return b2;
              }
              function h(a2, b2, c2, d2) {
                if (b2 === null || b2.tag !== 6)
                  return b2 = Fd(c2, a2.mode, d2), b2.return = a2, b2;
                b2 = e(b2, c2);
                b2.return = a2;
                return b2;
              }
              function k(a2, b2, c2, d2) {
                if (b2 !== null && b2.elementType === c2.type)
                  return d2 = e(b2, c2.props), d2.ref = Bd(a2, b2, c2), d2.return = a2, d2;
                d2 = Gd(c2.type, c2.key, c2.props, null, a2.mode, d2);
                d2.ref = Bd(a2, b2, c2);
                d2.return = a2;
                return d2;
              }
              function l(a2, b2, c2, d2) {
                if (b2 === null || b2.tag !== 4 || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
                  return b2 = Hd(c2, a2.mode, d2), b2.return = a2, b2;
                b2 = e(b2, c2.children || []);
                b2.return = a2;
                return b2;
              }
              function n(a2, b2, c2, d2, f2) {
                if (b2 === null || b2.tag !== 7)
                  return b2 = Id(c2, a2.mode, d2, f2), b2.return = a2, b2;
                b2 = e(b2, c2);
                b2.return = a2;
                return b2;
              }
              function t(a2, b2, c2) {
                if (typeof b2 === "string" || typeof b2 === "number")
                  return b2 = Fd("" + b2, a2.mode, c2), b2.return = a2, b2;
                if (_typeof(b2) === "object" && b2 !== null) {
                  switch (b2.$$typeof) {
                    case da:
                      return c2 = Gd(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Bd(a2, null, b2), c2.return = a2, c2;
                    case ea:
                      return b2 = Hd(b2, a2.mode, c2), b2.return = a2, b2;
                  }
                  if (Ad(b2) || va(b2))
                    return b2 = Id(b2, a2.mode, c2, null), b2.return = a2, b2;
                  Cd(a2, b2);
                }
                return null;
              }
              function p(a2, b2, c2, d2) {
                var e2 = b2 !== null ? b2.key : null;
                if (typeof c2 === "string" || typeof c2 === "number")
                  return e2 !== null ? null : h(a2, b2, "" + c2, d2);
                if (_typeof(c2) === "object" && c2 !== null) {
                  switch (c2.$$typeof) {
                    case da:
                      return c2.key === e2 ? c2.type === fa ? n(a2, b2, c2.props.children, d2, e2) : k(a2, b2, c2, d2) : null;
                    case ea:
                      return c2.key === e2 ? l(a2, b2, c2, d2) : null;
                  }
                  if (Ad(c2) || va(c2))
                    return e2 !== null ? null : n(a2, b2, c2, d2, null);
                  Cd(a2, c2);
                }
                return null;
              }
              function y(a2, b2, c2, d2, e2) {
                if (typeof d2 === "string" || typeof d2 === "number")
                  return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
                if (_typeof(d2) === "object" && d2 !== null) {
                  switch (d2.$$typeof) {
                    case da:
                      return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, d2.type === fa ? n(b2, a2, d2.props.children, e2, d2.key) : k(b2, a2, d2, e2);
                    case ea:
                      return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, l(b2, a2, d2, e2);
                  }
                  if (Ad(d2) || va(d2))
                    return a2 = a2.get(c2) || null, n(b2, a2, d2, e2, null);
                  Cd(b2, d2);
                }
                return null;
              }
              function x(e2, g2, h2, k2) {
                for (var l2 = null, v = null, u = g2, C = g2 = 0, n2 = null; u !== null && C < h2.length; C++) {
                  u.index > C ? (n2 = u, u = null) : n2 = u.sibling;
                  var w = p(e2, u, h2[C], k2);
                  if (w === null) {
                    u === null && (u = n2);
                    break;
                  }
                  a && u && w.alternate === null && b(e2, u);
                  g2 = f(w, g2, C);
                  v === null ? l2 = w : v.sibling = w;
                  v = w;
                  u = n2;
                }
                if (C === h2.length)
                  return c(e2, u), l2;
                if (u === null) {
                  for (; C < h2.length; C++) {
                    u = t(e2, h2[C], k2), u !== null && (g2 = f(u, g2, C), v === null ? l2 = u : v.sibling = u, v = u);
                  }
                  return l2;
                }
                for (u = d(e2, u); C < h2.length; C++) {
                  n2 = y(u, e2, C, h2[C], k2), n2 !== null && (a && n2.alternate !== null && u.delete(n2.key === null ? C : n2.key), g2 = f(n2, g2, C), v === null ? l2 = n2 : v.sibling = n2, v = n2);
                }
                a && u.forEach(function(a2) {
                  return b(e2, a2);
                });
                return l2;
              }
              function Y(e2, g2, h2, k2) {
                var l2 = va(h2);
                if (typeof l2 !== "function")
                  throw Error(q(150));
                h2 = l2.call(h2);
                if (h2 == null)
                  throw Error(q(151));
                for (var u = l2 = null, v = g2, n2 = g2 = 0, C = null, w = h2.next(); v !== null && !w.done; n2++, w = h2.next()) {
                  v.index > n2 ? (C = v, v = null) : C = v.sibling;
                  var x2 = p(e2, v, w.value, k2);
                  if (x2 === null) {
                    v === null && (v = C);
                    break;
                  }
                  a && v && x2.alternate === null && b(e2, v);
                  g2 = f(x2, g2, n2);
                  u === null ? l2 = x2 : u.sibling = x2;
                  u = x2;
                  v = C;
                }
                if (w.done)
                  return c(e2, v), l2;
                if (v === null) {
                  for (; !w.done; n2++, w = h2.next()) {
                    w = t(e2, w.value, k2), w !== null && (g2 = f(w, g2, n2), u === null ? l2 = w : u.sibling = w, u = w);
                  }
                  return l2;
                }
                for (v = d(e2, v); !w.done; n2++, w = h2.next()) {
                  w = y(v, e2, n2, w.value, k2), w !== null && (a && w.alternate !== null && v.delete(w.key === null ? n2 : w.key), g2 = f(w, g2, n2), u === null ? l2 = w : u.sibling = w, u = w);
                }
                a && v.forEach(function(a2) {
                  return b(e2, a2);
                });
                return l2;
              }
              return function(a2, d2, f2, h2) {
                var k2 = _typeof(f2) === "object" && f2 !== null && f2.type === fa && f2.key === null;
                k2 && (f2 = f2.props.children);
                var l2 = _typeof(f2) === "object" && f2 !== null;
                if (l2)
                  switch (f2.$$typeof) {
                    case da:
                      a: {
                        l2 = f2.key;
                        for (k2 = d2; k2 !== null; ) {
                          if (k2.key === l2) {
                            switch (k2.tag) {
                              case 7:
                                if (f2.type === fa) {
                                  c(a2, k2.sibling);
                                  d2 = e(k2, f2.props.children);
                                  d2.return = a2;
                                  a2 = d2;
                                  break a;
                                }
                                break;
                              default:
                                if (k2.elementType === f2.type) {
                                  c(a2, k2.sibling);
                                  d2 = e(k2, f2.props);
                                  d2.ref = Bd(a2, k2, f2);
                                  d2.return = a2;
                                  a2 = d2;
                                  break a;
                                }
                            }
                            c(a2, k2);
                            break;
                          } else
                            b(a2, k2);
                          k2 = k2.sibling;
                        }
                        f2.type === fa ? (d2 = Id(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Gd(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Bd(a2, d2, f2), h2.return = a2, a2 = h2);
                      }
                      return g(a2);
                    case ea:
                      a: {
                        for (k2 = f2.key; d2 !== null; ) {
                          if (d2.key === k2) {
                            if (d2.tag === 4 && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                              c(a2, d2.sibling);
                              d2 = e(d2, f2.children || []);
                              d2.return = a2;
                              a2 = d2;
                              break a;
                            } else {
                              c(a2, d2);
                              break;
                            }
                          } else
                            b(a2, d2);
                          d2 = d2.sibling;
                        }
                        d2 = Hd(f2, a2.mode, h2);
                        d2.return = a2;
                        a2 = d2;
                      }
                      return g(a2);
                  }
                if (typeof f2 === "string" || typeof f2 === "number")
                  return f2 = "" + f2, d2 !== null && d2.tag === 6 ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Fd(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2);
                if (Ad(f2))
                  return x(a2, d2, f2, h2);
                if (va(f2))
                  return Y(a2, d2, f2, h2);
                l2 && Cd(a2, f2);
                if (typeof f2 === "undefined" && !k2)
                  switch (a2.tag) {
                    case 1:
                    case 22:
                    case 0:
                    case 11:
                    case 15:
                      throw Error(q(152, wa(a2.type) || "Component"));
                  }
                return c(a2, d2);
              };
            }
            var Jd = Dd(true), Kd = Dd(false), Ld = {}, L = Wb(Ld), Md = Wb(Ld), Nd = Wb(Ld);
            function Od(a) {
              if (a === Ld)
                throw Error(q(174));
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
              var b = Od(Nd.current), c = Od(L.current);
              b = Fa(c, a.type, b);
              c !== b && (A(Md, a), A(L, b));
            }
            function Sd(a) {
              Md.current === a && (z(L), z(Md));
            }
            var M = Wb(0);
            function Td(a) {
              for (var b = a; b !== null; ) {
                if (b.tag === 13) {
                  var c = b.memoizedState;
                  if (c !== null && (c = c.dehydrated, c === null || Hb(c) || Ib(c)))
                    return b;
                } else if (b.tag === 19 && b.memoizedProps.revealOrder !== void 0) {
                  if ((b.flags & 64) !== 0)
                    return b;
                } else if (b.child !== null) {
                  b.child.return = b;
                  b = b.child;
                  continue;
                }
                if (b === a)
                  break;
                for (; b.sibling === null; ) {
                  if (b.return === null || b.return === a)
                    return null;
                  b = b.return;
                }
                b.sibling.return = b.return;
                b = b.sibling;
              }
              return null;
            }
            var Ud = null, Vd = null, Wd = false;
            function Xd(a, b) {
              var c = Yd(5, null, null, 0);
              c.elementType = "DELETED";
              c.type = "DELETED";
              c.stateNode = b;
              c.return = a;
              c.flags = 8;
              a.lastEffect !== null ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
            }
            function Zd(a, b) {
              switch (a.tag) {
                case 5:
                  return b = Fb(b, a.type, a.pendingProps), b !== null ? (a.stateNode = b, true) : false;
                case 6:
                  return b = Gb(b, a.pendingProps), b !== null ? (a.stateNode = b, true) : false;
                case 13:
                  return false;
                default:
                  return false;
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
                      Wd = false;
                      Ud = a;
                      return;
                    }
                    Xd(Ud, c);
                  }
                  Ud = a;
                  Vd = Kb(b);
                } else
                  a.flags = a.flags & -1025 | 2, Wd = false, Ud = a;
              }
            }
            function ae(a) {
              for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; ) {
                a = a.return;
              }
              Ud = a;
            }
            function be(a) {
              if (!Va || a !== Ud)
                return false;
              if (!Wd)
                return ae(a), Wd = true, false;
              var b = a.type;
              if (a.tag !== 5 || b !== "head" && b !== "body" && !Ma(b, a.memoizedProps))
                for (b = Vd; b; ) {
                  Xd(a, b), b = Jb(b);
                }
              ae(a);
              if (a.tag === 13) {
                if (!Va)
                  throw Error(q(316));
                a = a.memoizedState;
                a = a !== null ? a.dehydrated : null;
                if (!a)
                  throw Error(q(317));
                Vd = Nb(a);
              } else
                Vd = Ud ? Jb(a.stateNode) : null;
              return true;
            }
            function ce() {
              Va && (Vd = Ud = null, Wd = false);
            }
            var de = [];
            function ee() {
              for (var a = 0; a < de.length; a++) {
                var b = de[a];
                Sa ? b._workInProgressVersionPrimary = null : b._workInProgressVersionSecondary = null;
              }
              de.length = 0;
            }
            var fe = ca.ReactCurrentDispatcher, ge = ca.ReactCurrentBatchConfig, he = 0, N = null, O = null, P = null, ie = false, je = false;
            function Q() {
              throw Error(q(321));
            }
            function ke(a, b) {
              if (b === null)
                return false;
              for (var c = 0; c < b.length && c < a.length; c++) {
                if (!I(a[c], b[c]))
                  return false;
              }
              return true;
            }
            function le(a, b, c, d, e, f) {
              he = f;
              N = b;
              b.memoizedState = null;
              b.updateQueue = null;
              b.lanes = 0;
              fe.current = a === null || a.memoizedState === null ? me : ne;
              a = c(d, e);
              if (je) {
                f = 0;
                do {
                  je = false;
                  if (!(25 > f))
                    throw Error(q(301));
                  f += 1;
                  P = O = null;
                  b.updateQueue = null;
                  fe.current = oe;
                  a = c(d, e);
                } while (je);
              }
              fe.current = pe;
              b = O !== null && O.next !== null;
              he = 0;
              P = O = N = null;
              ie = false;
              if (b)
                throw Error(q(300));
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
              P === null ? N.memoizedState = P = a : P = P.next = a;
              return P;
            }
            function re() {
              if (O === null) {
                var a = N.alternate;
                a = a !== null ? a.memoizedState : null;
              } else
                a = O.next;
              var b = P === null ? N.memoizedState : P.next;
              if (b !== null)
                P = b, O = a;
              else {
                if (a === null)
                  throw Error(q(310));
                O = a;
                a = {
                  memoizedState: O.memoizedState,
                  baseState: O.baseState,
                  baseQueue: O.baseQueue,
                  queue: O.queue,
                  next: null
                };
                P === null ? N.memoizedState = P = a : P = P.next = a;
              }
              return P;
            }
            function se(a, b) {
              return typeof b === "function" ? b(a) : b;
            }
            function te(a) {
              var b = re(), c = b.queue;
              if (c === null)
                throw Error(q(311));
              c.lastRenderedReducer = a;
              var d = O, e = d.baseQueue, f = c.pending;
              if (f !== null) {
                if (e !== null) {
                  var g = e.next;
                  e.next = f.next;
                  f.next = g;
                }
                d.baseQueue = e = f;
                c.pending = null;
              }
              if (e !== null) {
                e = e.next;
                d = d.baseState;
                var h = g = f = null, k = e;
                do {
                  var l = k.lane;
                  if ((he & l) === l)
                    h !== null && (h = h.next = {
                      lane: 0,
                      action: k.action,
                      eagerReducer: k.eagerReducer,
                      eagerState: k.eagerState,
                      next: null
                    }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
                  else {
                    var n = {
                      lane: l,
                      action: k.action,
                      eagerReducer: k.eagerReducer,
                      eagerState: k.eagerState,
                      next: null
                    };
                    h === null ? (g = h = n, f = d) : h = h.next = n;
                    N.lanes |= l;
                    pd |= l;
                  }
                  k = k.next;
                } while (k !== null && k !== e);
                h === null ? f = d : h.next = g;
                I(d, b.memoizedState) || (gd = true);
                b.memoizedState = d;
                b.baseState = f;
                b.baseQueue = h;
                c.lastRenderedState = d;
              }
              return [b.memoizedState, c.dispatch];
            }
            function ue(a) {
              var b = re(), c = b.queue;
              if (c === null)
                throw Error(q(311));
              c.lastRenderedReducer = a;
              var d = c.dispatch, e = c.pending, f = b.memoizedState;
              if (e !== null) {
                c.pending = null;
                var g = e = e.next;
                do {
                  f = a(f, g.action), g = g.next;
                } while (g !== e);
                I(f, b.memoizedState) || (gd = true);
                b.memoizedState = f;
                b.baseQueue === null && (b.baseState = f);
                c.lastRenderedState = f;
              }
              return [f, d];
            }
            function ve(a, b, c) {
              var d = b._getVersion;
              d = d(b._source);
              var e = Sa ? b._workInProgressVersionPrimary : b._workInProgressVersionSecondary;
              if (e !== null)
                a = e === d;
              else if (a = a.mutableReadLanes, a = (he & a) === a)
                Sa ? b._workInProgressVersionPrimary = d : b._workInProgressVersionSecondary = d, de.push(b);
              if (a)
                return c(b._source);
              de.push(b);
              throw Error(q(350));
            }
            function we(a, b, c, d) {
              var e = R;
              if (e === null)
                throw Error(q(349));
              var f = b._getVersion, g = f(b._source), h = fe.current, k = h.useState(function() {
                return ve(e, b, c);
              }), l = k[1], n = k[0];
              k = P;
              var t = a.memoizedState, p = t.refs, y = p.getSnapshot, x = t.source;
              t = t.subscribe;
              var Y = N;
              a.memoizedState = {
                refs: p,
                source: b,
                subscribe: d
              };
              h.useEffect(function() {
                p.getSnapshot = c;
                p.setSnapshot = l;
                var a2 = f(b._source);
                if (!I(g, a2)) {
                  a2 = c(b._source);
                  I(n, a2) || (l(a2), a2 = td(Y), e.mutableReadLanes |= a2 & e.pendingLanes);
                  a2 = e.mutableReadLanes;
                  e.entangledLanes |= a2;
                  for (var d2 = e.entanglements, h2 = a2; 0 < h2; ) {
                    var k2 = 31 - mc(h2), t2 = 1 << k2;
                    d2[k2] |= a2;
                    h2 &= ~t2;
                  }
                }
              }, [c, b, d]);
              h.useEffect(function() {
                return d(b._source, function() {
                  var a2 = p.getSnapshot, c2 = p.setSnapshot;
                  try {
                    c2(a2(b._source));
                    var d2 = td(Y);
                    e.mutableReadLanes |= d2 & e.pendingLanes;
                  } catch (Oa) {
                    c2(function() {
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
              typeof a === "function" && (a = a());
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
              b === null ? (b = {
                lastEffect: null
              }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, c === null ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
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
              e.memoizedState = Ae(1 | b, c, void 0, d === void 0 ? null : d);
            }
            function Ee(a, b, c, d) {
              var e = re();
              d = d === void 0 ? null : d;
              var f = void 0;
              if (O !== null) {
                var g = O.memoizedState;
                f = g.destroy;
                if (d !== null && ke(d, g.deps)) {
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
              if (typeof b === "function")
                return a = a(), b(a), function() {
                  b(null);
                };
              if (b !== null && b !== void 0)
                return a = a(), b.current = a, function() {
                  b.current = null;
                };
            }
            function Je(a, b, c) {
              c = c !== null && c !== void 0 ? c.concat([a]) : null;
              return Ee(4, 2, Ie.bind(null, b, a), c);
            }
            function Ke() {
            }
            function Le(a, b) {
              var c = re();
              b = b === void 0 ? null : b;
              var d = c.memoizedState;
              if (d !== null && b !== null && ke(b, d[1]))
                return d[0];
              c.memoizedState = [a, b];
              return a;
            }
            function Me(a, b) {
              var c = re();
              b = b === void 0 ? null : b;
              var d = c.memoizedState;
              if (d !== null && b !== null && ke(b, d[1]))
                return d[0];
              a = a();
              c.memoizedState = [a, b];
              return a;
            }
            function Ne(a, b) {
              var c = Nc();
              Pc(98 > c ? 98 : c, function() {
                a(true);
              });
              Pc(97 < c ? 97 : c, function() {
                var c2 = ge.transition;
                ge.transition = 1;
                try {
                  a(false), b();
                } finally {
                  ge.transition = c2;
                }
              });
            }
            function xe(a, b, c) {
              var d = K(), e = td(a), f = {
                lane: e,
                action: c,
                eagerReducer: null,
                eagerState: null,
                next: null
              }, g = b.pending;
              g === null ? f.next = f : (f.next = g.next, g.next = f);
              b.pending = f;
              g = a.alternate;
              if (a === N || g !== null && g === N)
                je = ie = true;
              else {
                if (a.lanes === 0 && (g === null || g.lanes === 0) && (g = b.lastRenderedReducer, g !== null))
                  try {
                    var h = b.lastRenderedState, k = g(h, c);
                    f.eagerReducer = g;
                    f.eagerState = k;
                    if (I(k, h))
                      return;
                  } catch (l) {
                  } finally {
                  }
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
              unstable_isNewReconciler: false
            }, me = {
              readContext: J,
              useCallback: function useCallback(a, b) {
                qe().memoizedState = [a, b === void 0 ? null : b];
                return a;
              },
              useContext: J,
              useEffect: Fe,
              useImperativeHandle: function useImperativeHandle(a, b, c) {
                c = c !== null && c !== void 0 ? c.concat([a]) : null;
                return De(4, 2, Ie.bind(null, b, a), c);
              },
              useLayoutEffect: function useLayoutEffect(a, b) {
                return De(4, 2, a, b);
              },
              useMemo: function useMemo(a, b) {
                var c = qe();
                b = b === void 0 ? null : b;
                a = a();
                c.memoizedState = [a, b];
                return a;
              },
              useReducer: function useReducer(a, b, c) {
                var d = qe();
                b = c !== void 0 ? c(b) : b;
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
                var b = ze(a), c = b[0], d = b[1];
                Fe(function() {
                  var b2 = ge.transition;
                  ge.transition = 1;
                  try {
                    d(a);
                  } finally {
                    ge.transition = b2;
                  }
                }, [a]);
                return c;
              },
              useTransition: function useTransition() {
                var a = ze(false), b = a[0];
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
                  var a = false, b = Xa(function() {
                    a || (a = true, c(Ya()));
                    throw Error(q(355));
                  }), c = ze(b)[1];
                  (N.mode & 2) === 0 && (N.flags |= 516, Ae(5, function() {
                    c(Ya());
                  }, void 0, null));
                  return b;
                }
                b = Ya();
                ze(b);
                return b;
              },
              unstable_isNewReconciler: false
            }, ne = {
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
                var b = te(se), c = b[0], d = b[1];
                Ge(function() {
                  var b2 = ge.transition;
                  ge.transition = 1;
                  try {
                    d(a);
                  } finally {
                    ge.transition = b2;
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
              unstable_isNewReconciler: false
            }, oe = {
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
                var b = ue(se), c = b[0], d = b[1];
                Ge(function() {
                  var b2 = ge.transition;
                  ge.transition = 1;
                  try {
                    d(a);
                  } finally {
                    ge.transition = b2;
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
              unstable_isNewReconciler: false
            }, Oe = ca.ReactCurrentOwner, gd = false;
            function S(a, b, c, d) {
              b.child = a === null ? Kd(b, null, c, d) : Jd(b, a.child, c, d);
            }
            function Pe(a, b, c, d, e) {
              c = c.render;
              var f = b.ref;
              fd(b, e);
              d = le(a, b, c, d, f, e);
              if (a !== null && !gd)
                return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, Re(a, b, e);
              b.flags |= 1;
              S(a, b, d, e);
              return b.child;
            }
            function Se(a, b, c, d, e, f) {
              if (a === null) {
                var g = c.type;
                if (typeof g === "function" && !Te(g) && g.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0)
                  return b.tag = 15, b.type = g, Ue(a, b, g, d, e, f);
                a = Gd(c.type, null, d, b, b.mode, f);
                a.ref = b.ref;
                a.return = b;
                return b.child = a;
              }
              g = a.child;
              if ((e & f) === 0 && (e = g.memoizedProps, c = c.compare, c = c !== null ? c : Vc, c(e, d) && a.ref === b.ref))
                return Re(a, b, f);
              b.flags |= 1;
              a = Ed(g, d);
              a.ref = b.ref;
              a.return = b;
              return b.child = a;
            }
            function Ue(a, b, c, d, e, f) {
              if (a !== null && Vc(a.memoizedProps, d) && a.ref === b.ref)
                if (gd = false, (f & e) !== 0)
                  (a.flags & 16384) !== 0 && (gd = true);
                else
                  return b.lanes = a.lanes, Re(a, b, f);
              return Ve(a, b, c, d, f);
            }
            function We(a, b, c) {
              var d = b.pendingProps, e = d.children, f = a !== null ? a.memoizedState : null;
              if (d.mode === "hidden" || d.mode === "unstable-defer-without-hiding") {
                if ((b.mode & 4) === 0)
                  b.memoizedState = {
                    baseLanes: 0
                  }, Xe(b, c);
                else if ((c & 1073741824) !== 0)
                  b.memoizedState = {
                    baseLanes: 0
                  }, Xe(b, f !== null ? f.baseLanes : c);
                else
                  return a = f !== null ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
                    baseLanes: a
                  }, Xe(b, a), null;
              } else
                f !== null ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, Xe(b, d);
              S(a, b, e, c);
              return b.child;
            }
            function Ye(a, b) {
              var c = b.ref;
              if (a === null && c !== null || a !== null && a.ref !== c)
                b.flags |= 128;
            }
            function Ve(a, b, c, d, e) {
              var f = E(c) ? Yb : B.current;
              f = Zb(b, f);
              fd(b, e);
              c = le(a, b, c, d, f, e);
              if (a !== null && !gd)
                return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, Re(a, b, e);
              b.flags |= 1;
              S(a, b, c, e);
              return b.child;
            }
            function Ze(a, b, c, d, e) {
              if (E(c)) {
                var f = true;
                cc(b);
              } else
                f = false;
              fd(b, e);
              if (b.stateNode === null)
                a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), xd(b, c, d), zd(b, c, d, e), d = true;
              else if (a === null) {
                var g = b.stateNode, h = b.memoizedProps;
                g.props = h;
                var k = g.context, l = c.contextType;
                _typeof(l) === "object" && l !== null ? l = J(l) : (l = E(c) ? Yb : B.current, l = Zb(b, l));
                var n = c.getDerivedStateFromProps, t = typeof n === "function" || typeof g.getSnapshotBeforeUpdate === "function";
                t || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== d || k !== l) && yd(b, g, d, l);
                hd = false;
                var p = b.memoizedState;
                g.state = p;
                od(b, d, g, e);
                k = b.memoizedState;
                h !== d || p !== k || D.current || hd ? (typeof n === "function" && (sd(b, c, n, d), k = b.memoizedState), (h = hd || wd(b, c, h, d, p, k, l)) ? (t || typeof g.UNSAFE_componentWillMount !== "function" && typeof g.componentWillMount !== "function" || (typeof g.componentWillMount === "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount === "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount === "function" && (b.flags |= 4)) : (typeof g.componentDidMount === "function" && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : (typeof g.componentDidMount === "function" && (b.flags |= 4), d = false);
              } else {
                g = b.stateNode;
                jd2(a, b);
                h = b.memoizedProps;
                l = b.type === b.elementType ? h : Xc(b.type, h);
                g.props = l;
                t = b.pendingProps;
                p = g.context;
                k = c.contextType;
                _typeof(k) === "object" && k !== null ? k = J(k) : (k = E(c) ? Yb : B.current, k = Zb(b, k));
                var y = c.getDerivedStateFromProps;
                (n = typeof y === "function" || typeof g.getSnapshotBeforeUpdate === "function") || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== t || p !== k) && yd(b, g, d, k);
                hd = false;
                p = b.memoizedState;
                g.state = p;
                od(b, d, g, e);
                var x = b.memoizedState;
                h !== t || p !== x || D.current || hd ? (typeof y === "function" && (sd(b, c, y, d), x = b.memoizedState), (l = hd || wd(b, c, l, d, p, x, k)) ? (n || typeof g.UNSAFE_componentWillUpdate !== "function" && typeof g.componentWillUpdate !== "function" || (typeof g.componentWillUpdate === "function" && g.componentWillUpdate(d, x, k), typeof g.UNSAFE_componentWillUpdate === "function" && g.UNSAFE_componentWillUpdate(d, x, k)), typeof g.componentDidUpdate === "function" && (b.flags |= 4), typeof g.getSnapshotBeforeUpdate === "function" && (b.flags |= 256)) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), d = false);
              }
              return $e(a, b, c, d, f, e);
            }
            function $e(a, b, c, d, e, f) {
              Ye(a, b);
              var g = (b.flags & 64) !== 0;
              if (!d && !g)
                return e && dc(b, c, false), Re(a, b, f);
              d = b.stateNode;
              Oe.current = b;
              var h = g && typeof c.getDerivedStateFromError !== "function" ? null : d.render();
              b.flags |= 1;
              a !== null && g ? (b.child = Jd(b, a.child, null, f), b.child = Jd(b, null, h, f)) : S(a, b, h, f);
              b.memoizedState = d.state;
              e && dc(b, c, true);
              return b.child;
            }
            function af(a) {
              var b = a.stateNode;
              b.pendingContext ? ac(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ac(a, b.context, false);
              Pd(a, b.containerInfo);
            }
            var bf = {
              dehydrated: null,
              retryLane: 0
            };
            function cf(a, b, c) {
              var d = b.pendingProps, e = M.current, f = false, g;
              (g = (b.flags & 64) !== 0) || (g = a !== null && a.memoizedState === null ? false : (e & 2) !== 0);
              g ? (f = true, b.flags &= -65) : a !== null && a.memoizedState === null || d.fallback === void 0 || d.unstable_avoidThisFallback === true || (e |= 1);
              A(M, e & 1);
              if (a === null) {
                d.fallback !== void 0 && $d(b);
                a = d.children;
                e = d.fallback;
                if (f)
                  return a = df(b, a, e, c), b.child.memoizedState = {
                    baseLanes: c
                  }, b.memoizedState = bf, a;
                if (typeof d.unstable_expectedLoadTime === "number")
                  return a = df(b, a, e, c), b.child.memoizedState = {
                    baseLanes: c
                  }, b.memoizedState = bf, b.lanes = 33554432, a;
                c = ef({
                  mode: "visible",
                  children: a
                }, b.mode, c, null);
                c.return = b;
                return b.child = c;
              }
              if (a.memoizedState !== null) {
                if (f)
                  return d = ff(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = e === null ? {
                    baseLanes: c
                  } : {
                    baseLanes: e.baseLanes | c
                  }, f.childLanes = a.childLanes & ~c, b.memoizedState = bf, d;
                c = gf(a, b, d.children, c);
                b.memoizedState = null;
                return c;
              }
              if (f)
                return d = ff(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = e === null ? {
                  baseLanes: c
                } : {
                  baseLanes: e.baseLanes | c
                }, f.childLanes = a.childLanes & ~c, b.memoizedState = bf, d;
              c = gf(a, b, d.children, c);
              b.memoizedState = null;
              return c;
            }
            function df(a, b, c, d) {
              var e = a.mode, f = a.child;
              b = {
                mode: "hidden",
                children: b
              };
              (e & 2) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = b) : f = ef(b, e, 0, null);
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
              (b.mode & 2) === 0 && (c.lanes = d);
              c.return = b;
              c.sibling = null;
              a !== null && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
              return b.child = c;
            }
            function ff(a, b, c, d, e) {
              var f = b.mode, g = a.child;
              a = g.sibling;
              var h = {
                mode: "hidden",
                children: c
              };
              (f & 2) === 0 && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, g !== null ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Ed(g, h);
              a !== null ? d = Ed(a, d) : (d = Id(d, f, e, null), d.flags |= 2);
              d.return = b;
              c.return = b;
              c.sibling = d;
              b.child = c;
              return d;
            }
            function hf(a, b) {
              a.lanes |= b;
              var c = a.alternate;
              c !== null && (c.lanes |= b);
              ed(a.return, b);
            }
            function jf(a, b, c, d, e, f) {
              var g = a.memoizedState;
              g === null ? a.memoizedState = {
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
              var d = b.pendingProps, e = d.revealOrder, f = d.tail;
              S(a, b, d.children, c);
              d = M.current;
              if ((d & 2) !== 0)
                d = d & 1 | 2, b.flags |= 64;
              else {
                if (a !== null && (a.flags & 64) !== 0)
                  a:
                    for (a = b.child; a !== null; ) {
                      if (a.tag === 13)
                        a.memoizedState !== null && hf(a, c);
                      else if (a.tag === 19)
                        hf(a, c);
                      else if (a.child !== null) {
                        a.child.return = a;
                        a = a.child;
                        continue;
                      }
                      if (a === b)
                        break a;
                      for (; a.sibling === null; ) {
                        if (a.return === null || a.return === b)
                          break a;
                        a = a.return;
                      }
                      a.sibling.return = a.return;
                      a = a.sibling;
                    }
                d &= 1;
              }
              A(M, d);
              if ((b.mode & 2) === 0)
                b.memoizedState = null;
              else
                switch (e) {
                  case "forwards":
                    c = b.child;
                    for (e = null; c !== null; ) {
                      a = c.alternate, a !== null && Td(a) === null && (e = c), c = c.sibling;
                    }
                    c = e;
                    c === null ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
                    jf(b, false, e, c, f, b.lastEffect);
                    break;
                  case "backwards":
                    c = null;
                    e = b.child;
                    for (b.child = null; e !== null; ) {
                      a = e.alternate;
                      if (a !== null && Td(a) === null) {
                        b.child = e;
                        break;
                      }
                      a = e.sibling;
                      e.sibling = c;
                      c = e;
                      e = a;
                    }
                    jf(b, true, c, null, f, b.lastEffect);
                    break;
                  case "together":
                    jf(b, false, null, null, void 0, b.lastEffect);
                    break;
                  default:
                    b.memoizedState = null;
                }
              return b.child;
            }
            function Re(a, b, c) {
              a !== null && (b.dependencies = a.dependencies);
              pd |= b.lanes;
              if ((c & b.childLanes) !== 0) {
                if (a !== null && b.child !== a.child)
                  throw Error(q(153));
                if (b.child !== null) {
                  a = b.child;
                  c = Ed(a, a.pendingProps);
                  b.child = c;
                  for (c.return = b; a.sibling !== null; ) {
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
            if (Ta)
              _mf = function mf(a, b) {
                for (var c = b.child; c !== null; ) {
                  if (c.tag === 5 || c.tag === 6)
                    Ja(a, c.stateNode);
                  else if (c.tag !== 4 && c.child !== null) {
                    c.child.return = c;
                    c = c.child;
                    continue;
                  }
                  if (c === b)
                    break;
                  for (; c.sibling === null; ) {
                    if (c.return === null || c.return === b)
                      return;
                    c = c.return;
                  }
                  c.sibling.return = c.return;
                  c = c.sibling;
                }
              }, nf = function nf2() {
              }, of = function of2(a, b, c, d, e) {
                a = a.memoizedProps;
                if (a !== d) {
                  var f = b.stateNode, g = Od(L.current);
                  c = La(f, c, a, d, e, g);
                  (b.updateQueue = c) && lf(b);
                }
              }, pf = function pf2(a, b, c, d) {
                c !== d && lf(b);
              };
            else if (Ua) {
              _mf = function mf(a, b, c, d) {
                for (var e = b.child; e !== null; ) {
                  if (e.tag === 5) {
                    var f = e.stateNode;
                    c && d && (f = Db(f, e.type, e.memoizedProps, e));
                    Ja(a, f);
                  } else if (e.tag === 6)
                    f = e.stateNode, c && d && (f = Eb(f, e.memoizedProps, e)), Ja(a, f);
                  else if (e.tag !== 4) {
                    if (e.tag === 13 && (e.flags & 4) !== 0 && (f = e.memoizedState !== null)) {
                      var g = e.child;
                      if (g !== null && (g.child !== null && (g.child.return = g, _mf(a, g, true, f)), f = g.sibling, f !== null)) {
                        f.return = e;
                        e = f;
                        continue;
                      }
                    }
                    if (e.child !== null) {
                      e.child.return = e;
                      e = e.child;
                      continue;
                    }
                  }
                  if (e === b)
                    break;
                  for (; e.sibling === null; ) {
                    if (e.return === null || e.return === b)
                      return;
                    e = e.return;
                  }
                  e.sibling.return = e.return;
                  e = e.sibling;
                }
              };
              var qf = function qf2(a, b, c, d) {
                for (var e = b.child; e !== null; ) {
                  if (e.tag === 5) {
                    var f = e.stateNode;
                    c && d && (f = Db(f, e.type, e.memoizedProps, e));
                    Ab(a, f);
                  } else if (e.tag === 6)
                    f = e.stateNode, c && d && (f = Eb(f, e.memoizedProps, e)), Ab(a, f);
                  else if (e.tag !== 4) {
                    if (e.tag === 13 && (e.flags & 4) !== 0 && (f = e.memoizedState !== null)) {
                      var g = e.child;
                      if (g !== null && (g.child !== null && (g.child.return = g, qf2(a, g, true, f)), f = g.sibling, f !== null)) {
                        f.return = e;
                        e = f;
                        continue;
                      }
                    }
                    if (e.child !== null) {
                      e.child.return = e;
                      e = e.child;
                      continue;
                    }
                  }
                  if (e === b)
                    break;
                  for (; e.sibling === null; ) {
                    if (e.return === null || e.return === b)
                      return;
                    e = e.return;
                  }
                  e.sibling.return = e.return;
                  e = e.sibling;
                }
              };
              nf = function nf2(a) {
                var b = a.stateNode;
                if (a.firstEffect !== null) {
                  var c = b.containerInfo, d = zb(c);
                  qf(d, a, false, false);
                  b.pendingChildren = d;
                  lf(a);
                  Bb(c, d);
                }
              };
              of = function of2(a, b, c, d, e) {
                var f = a.stateNode, g = a.memoizedProps;
                if ((a = b.firstEffect === null) && g === d)
                  b.stateNode = f;
                else {
                  var h = b.stateNode, k = Od(L.current), l = null;
                  g !== d && (l = La(h, c, g, d, e, k));
                  a && l === null ? b.stateNode = f : (f = yb(f, l, c, g, d, b, a, h), Ka(f, c, d, e, k) && lf(b), b.stateNode = f, a ? lf(b) : _mf(f, b, false, false));
                }
              };
              pf = function pf2(a, b, c, d) {
                c !== d ? (a = Od(Nd.current), c = Od(L.current), b.stateNode = Na(d, a, c, b), lf(b)) : b.stateNode = a.stateNode;
              };
            } else
              nf = function nf2() {
              }, of = function of2() {
              }, pf = function pf2() {
              };
            function rf(a, b) {
              if (!Wd)
                switch (a.tailMode) {
                  case "hidden":
                    b = a.tail;
                    for (var c = null; b !== null; ) {
                      b.alternate !== null && (c = b), b = b.sibling;
                    }
                    c === null ? a.tail = null : c.sibling = null;
                    break;
                  case "collapsed":
                    c = a.tail;
                    for (var d = null; c !== null; ) {
                      c.alternate !== null && (d = c), c = c.sibling;
                    }
                    d === null ? b || a.tail === null ? a.tail = null : a.tail.sibling = null : d.sibling = null;
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
                  if (a === null || a.child === null)
                    be(b) ? lf(b) : d.hydrate || (b.flags |= 256);
                  nf(b);
                  return null;
                case 5:
                  Sd(b);
                  var e = Od(Nd.current);
                  c = b.type;
                  if (a !== null && b.stateNode != null)
                    of(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);
                  else {
                    if (!d) {
                      if (b.stateNode === null)
                        throw Error(q(166));
                      return null;
                    }
                    a = Od(L.current);
                    if (be(b)) {
                      if (!Va)
                        throw Error(q(175));
                      a = Lb(b.stateNode, b.type, b.memoizedProps, e, a, b);
                      b.updateQueue = a;
                      a !== null && lf(b);
                    } else {
                      var f = Ia(c, d, e, a, b);
                      _mf(f, b, false, false);
                      b.stateNode = f;
                      Ka(f, c, d, e, a) && lf(b);
                    }
                    b.ref !== null && (b.flags |= 128);
                  }
                  return null;
                case 6:
                  if (a && b.stateNode != null)
                    pf(a, b, a.memoizedProps, d);
                  else {
                    if (typeof d !== "string" && b.stateNode === null)
                      throw Error(q(166));
                    a = Od(Nd.current);
                    e = Od(L.current);
                    if (be(b)) {
                      if (!Va)
                        throw Error(q(176));
                      Mb(b.stateNode, b.memoizedProps, b) && lf(b);
                    } else
                      b.stateNode = Na(d, a, e, b);
                  }
                  return null;
                case 13:
                  z(M);
                  d = b.memoizedState;
                  if ((b.flags & 64) !== 0)
                    return b.lanes = c, b;
                  d = d !== null;
                  e = false;
                  a === null ? b.memoizedProps.fallback !== void 0 && be(b) : e = a.memoizedState !== null;
                  if (d && !e && (b.mode & 2) !== 0)
                    if (a === null && b.memoizedProps.unstable_avoidThisFallback !== true || (M.current & 1) !== 0)
                      T === 0 && (T = 3);
                    else {
                      if (T === 0 || T === 3)
                        T = 4;
                      R === null || (pd & 134217727) === 0 && (tf & 134217727) === 0 || uf(R, U);
                    }
                  Ua && d && (b.flags |= 4);
                  Ta && (d || e) && (b.flags |= 4);
                  return null;
                case 4:
                  return Qd(), nf(b), a === null && ab(b.stateNode.containerInfo), null;
                case 10:
                  return dd(b), null;
                case 17:
                  return E(b.type) && $b(), null;
                case 19:
                  z(M);
                  d = b.memoizedState;
                  if (d === null)
                    return null;
                  e = (b.flags & 64) !== 0;
                  f = d.rendering;
                  if (f === null) {
                    if (e)
                      rf(d, false);
                    else {
                      if (T !== 0 || a !== null && (a.flags & 64) !== 0)
                        for (a = b.child; a !== null; ) {
                          f = Td(a);
                          if (f !== null) {
                            b.flags |= 64;
                            rf(d, false);
                            a = f.updateQueue;
                            a !== null && (b.updateQueue = a, b.flags |= 4);
                            d.lastEffect === null && (b.firstEffect = null);
                            b.lastEffect = d.lastEffect;
                            a = c;
                            for (d = b.child; d !== null; ) {
                              e = d, c = a, e.flags &= 2, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null, f = e.alternate, f === null ? (e.childLanes = 0, e.lanes = c, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = f.childLanes, e.lanes = f.lanes, e.child = f.child, e.memoizedProps = f.memoizedProps, e.memoizedState = f.memoizedState, e.updateQueue = f.updateQueue, e.type = f.type, c = f.dependencies, e.dependencies = c === null ? null : {
                                lanes: c.lanes,
                                firstContext: c.firstContext
                              }), d = d.sibling;
                            }
                            A(M, M.current & 1 | 2);
                            return b.child;
                          }
                          a = a.sibling;
                        }
                      d.tail !== null && G() > vf && (b.flags |= 64, e = true, rf(d, false), b.lanes = 33554432);
                    }
                  } else {
                    if (!e)
                      if (a = Td(f), a !== null) {
                        if (b.flags |= 64, e = true, a = a.updateQueue, a !== null && (b.updateQueue = a, b.flags |= 4), rf(d, true), d.tail === null && d.tailMode === "hidden" && !f.alternate && !Wd)
                          return b = b.lastEffect = d.lastEffect, b !== null && (b.nextEffect = null), null;
                      } else
                        2 * G() - d.renderingStartTime > vf && c !== 1073741824 && (b.flags |= 64, e = true, rf(d, false), b.lanes = 33554432);
                    d.isBackwards ? (f.sibling = b.child, b.child = f) : (a = d.last, a !== null ? a.sibling = f : b.child = f, d.last = f);
                  }
                  return d.tail !== null ? (a = d.tail, d.rendering = a, d.tail = a.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = G(), a.sibling = null, b = M.current, A(M, e ? b & 1 | 2 : b & 1), a) : null;
                case 23:
                case 24:
                  return wf(), a !== null && a.memoizedState !== null !== (b.memoizedState !== null) && d.mode !== "unstable-defer-without-hiding" && (b.flags |= 4), null;
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
                  if ((b & 64) !== 0)
                    throw Error(q(285));
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
                var c = "", d = b;
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
                setTimeout(function() {
                  throw c;
                });
              }
            }
            var Af = typeof WeakMap === "function" ? WeakMap : Map;
            function Bf(a, b, c) {
              c = kd(-1, c);
              c.tag = 3;
              c.payload = {
                element: null
              };
              var d = b.value;
              c.callback = function() {
                Cf || (Cf = true, Df = d);
                zf(a, b);
              };
              return c;
            }
            function Ef(a, b, c) {
              c = kd(-1, c);
              c.tag = 3;
              var d = a.type.getDerivedStateFromError;
              if (typeof d === "function") {
                var e = b.value;
                c.payload = function() {
                  zf(a, b);
                  return d(e);
                };
              }
              var f = a.stateNode;
              f !== null && typeof f.componentDidCatch === "function" && (c.callback = function() {
                typeof d !== "function" && (Ff === null ? Ff = new Set([this]) : Ff.add(this), zf(a, b));
                var c2 = b.stack;
                this.componentDidCatch(b.value, {
                  componentStack: c2 !== null ? c2 : ""
                });
              });
              return c;
            }
            var Gf = typeof WeakSet === "function" ? WeakSet : Set;
            function Hf(a) {
              var b = a.ref;
              if (b !== null)
                if (typeof b === "function")
                  try {
                    b(null);
                  } catch (c) {
                    If(a, c);
                  }
                else
                  b.current = null;
            }
            function Jf(a, b) {
              switch (b.tag) {
                case 0:
                case 11:
                case 15:
                case 22:
                  return;
                case 1:
                  if (b.flags & 256 && a !== null) {
                    var c = a.memoizedProps, d = a.memoizedState;
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
              b = b !== null ? b.lastEffect : null;
              if (b !== null) {
                var c = b = b.next;
                do {
                  if ((c.tag & a) === a) {
                    var d = c.destroy;
                    c.destroy = void 0;
                    d !== void 0 && d();
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
                  b = b !== null ? b.lastEffect : null;
                  if (b !== null) {
                    a = b = b.next;
                    do {
                      if ((a.tag & 3) === 3) {
                        var d = a.create;
                        a.destroy = d();
                      }
                      a = a.next;
                    } while (a !== b);
                  }
                  b = c.updateQueue;
                  b = b !== null ? b.lastEffect : null;
                  if (b !== null) {
                    a = b = b.next;
                    do {
                      var e = a;
                      d = e.next;
                      e = e.tag;
                      (e & 4) !== 0 && (e & 1) !== 0 && (Mf(c, a), Nf(c, a));
                      a = d;
                    } while (a !== b);
                  }
                  return;
                case 1:
                  a = c.stateNode;
                  c.flags & 4 && (b === null ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : Xc(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
                  b = c.updateQueue;
                  b !== null && qd(c, b, a);
                  return;
                case 3:
                  b = c.updateQueue;
                  if (b !== null) {
                    a = null;
                    if (c.child !== null)
                      switch (c.child.tag) {
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
                  b === null && c.flags & 4 && mb(a, c.type, c.memoizedProps, c);
                  return;
                case 6:
                  return;
                case 4:
                  return;
                case 12:
                  return;
                case 13:
                  Va && c.memoizedState === null && (c = c.alternate, c !== null && (c = c.memoizedState, c !== null && (c = c.dehydrated, c !== null && Pb(c))));
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
              if (Ta)
                for (var c = a; ; ) {
                  if (c.tag === 5) {
                    var d = c.stateNode;
                    b ? tb(d) : vb(c.stateNode, c.memoizedProps);
                  } else if (c.tag === 6)
                    d = c.stateNode, b ? ub(d) : wb(d, c.memoizedProps);
                  else if ((c.tag !== 23 && c.tag !== 24 || c.memoizedState === null || c === a) && c.child !== null) {
                    c.child.return = c;
                    c = c.child;
                    continue;
                  }
                  if (c === a)
                    break;
                  for (; c.sibling === null; ) {
                    if (c.return === null || c.return === a)
                      return;
                    c = c.return;
                  }
                  c.sibling.return = c.return;
                  c = c.sibling;
                }
            }
            function Pf(a, b) {
              if (fc && typeof fc.onCommitFiberUnmount === "function")
                try {
                  fc.onCommitFiberUnmount(ec, b);
                } catch (f) {
                }
              switch (b.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                case 22:
                  a = b.updateQueue;
                  if (a !== null && (a = a.lastEffect, a !== null)) {
                    var c = a = a.next;
                    do {
                      var d = c, e = d.destroy;
                      d = d.tag;
                      if (e !== void 0)
                        if ((d & 4) !== 0)
                          Mf(b, c);
                        else {
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
                  if (typeof a.componentWillUnmount === "function")
                    try {
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
              for (var c = b; ; ) {
                if (Pf(a, c), c.child === null || Ta && c.tag === 4) {
                  if (c === b)
                    break;
                  for (; c.sibling === null; ) {
                    if (c.return === null || c.return === b)
                      return;
                    c = c.return;
                  }
                  c.sibling.return = c.return;
                  c = c.sibling;
                } else
                  c.child.return = c, c = c.child;
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
              return a.tag === 5 || a.tag === 3 || a.tag === 4;
            }
            function Uf(a) {
              if (Ta) {
                a: {
                  for (var b = a.return; b !== null; ) {
                    if (Tf(b))
                      break a;
                    b = b.return;
                  }
                  throw Error(q(160));
                }
                var c = b;
                b = c.stateNode;
                switch (c.tag) {
                  case 5:
                    var d = false;
                    break;
                  case 3:
                    b = b.containerInfo;
                    d = true;
                    break;
                  case 4:
                    b = b.containerInfo;
                    d = true;
                    break;
                  default:
                    throw Error(q(161));
                }
                c.flags & 16 && (sb(b), c.flags &= -17);
                a:
                  b:
                    for (c = a; ; ) {
                      for (; c.sibling === null; ) {
                        if (c.return === null || Tf(c.return)) {
                          c = null;
                          break a;
                        }
                        c = c.return;
                      }
                      c.sibling.return = c.return;
                      for (c = c.sibling; c.tag !== 5 && c.tag !== 6 && c.tag !== 18; ) {
                        if (c.flags & 2)
                          continue b;
                        if (c.child === null || c.tag === 4)
                          continue b;
                        else
                          c.child.return = c, c = c.child;
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
              var d = a.tag, e = d === 5 || d === 6;
              if (e)
                a = e ? a.stateNode : a.stateNode.instance, b ? pb(c, a, b) : kb(c, a);
              else if (d !== 4 && (a = a.child, a !== null))
                for (Vf(a, b, c), a = a.sibling; a !== null; ) {
                  Vf(a, b, c), a = a.sibling;
                }
            }
            function Wf(a, b, c) {
              var d = a.tag, e = d === 5 || d === 6;
              if (e)
                a = e ? a.stateNode : a.stateNode.instance, b ? ob(c, a, b) : jb(c, a);
              else if (d !== 4 && (a = a.child, a !== null))
                for (Wf(a, b, c), a = a.sibling; a !== null; ) {
                  Wf(a, b, c), a = a.sibling;
                }
            }
            function Qf(a, b) {
              for (var c = b, d = false, e, f; ; ) {
                if (!d) {
                  d = c.return;
                  a:
                    for (; ; ) {
                      if (d === null)
                        throw Error(q(160));
                      e = d.stateNode;
                      switch (d.tag) {
                        case 5:
                          f = false;
                          break a;
                        case 3:
                          e = e.containerInfo;
                          f = true;
                          break a;
                        case 4:
                          e = e.containerInfo;
                          f = true;
                          break a;
                      }
                      d = d.return;
                    }
                  d = true;
                }
                if (c.tag === 5 || c.tag === 6)
                  Rf(a, c), f ? rb(e, c.stateNode) : qb(e, c.stateNode);
                else if (c.tag === 4) {
                  if (c.child !== null) {
                    e = c.stateNode.containerInfo;
                    f = true;
                    c.child.return = c;
                    c = c.child;
                    continue;
                  }
                } else if (Pf(a, c), c.child !== null) {
                  c.child.return = c;
                  c = c.child;
                  continue;
                }
                if (c === b)
                  break;
                for (; c.sibling === null; ) {
                  if (c.return === null || c.return === b)
                    return;
                  c = c.return;
                  c.tag === 4 && (d = false);
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
                    if (c != null) {
                      var d = b.memoizedProps;
                      a = a !== null ? a.memoizedProps : d;
                      var e = b.type, f = b.updateQueue;
                      b.updateQueue = null;
                      f !== null && nb(c, f, e, a, d, b);
                    }
                    return;
                  case 6:
                    if (b.stateNode === null)
                      throw Error(q(162));
                    c = b.memoizedProps;
                    lb(b.stateNode, a !== null ? a.memoizedProps : c, c);
                    return;
                  case 3:
                    Va && (b = b.stateNode, b.hydrate && (b.hydrate = false, Ob(b.containerInfo)));
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
                    Of(b, b.memoizedState !== null);
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
                  Va && (c = b.stateNode, c.hydrate && (c.hydrate = false, Ob(c.containerInfo)));
                  break;
                case 23:
                case 24:
                  return;
              }
              a:
                if (Ua) {
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
              a.memoizedState !== null && ($f = G(), Ta && Of(a.child, true));
            }
            function Zf(a) {
              var b = a.updateQueue;
              if (b !== null) {
                a.updateQueue = null;
                var c = a.stateNode;
                c === null && (c = a.stateNode = new Gf());
                b.forEach(function(b2) {
                  var d = ag.bind(null, a, b2);
                  c.has(b2) || (c.add(b2), b2.then(d, d));
                });
              }
            }
            function bg(a, b) {
              return a !== null && (a = a.memoizedState, a === null || a.dehydrated !== null) ? (b = b.memoizedState, b !== null && b.dehydrated === null) : false;
            }
            var cg = 0, dg = 1, eg = 2, fg = 3, gg = 4;
            if (typeof Symbol === "function" && Symbol.for) {
              var hg = Symbol.for;
              cg = hg("selector.component");
              dg = hg("selector.has_pseudo_class");
              eg = hg("selector.role");
              fg = hg("selector.test_id");
              gg = hg("selector.text");
            }
            function ig(a) {
              var b = Wa(a);
              if (b != null) {
                if (typeof b.memoizedProps["data-testname"] !== "string")
                  throw Error(q(364));
                return b;
              }
              a = cb(a);
              if (a === null)
                throw Error(q(362));
              return a.stateNode.current;
            }
            function jg(a, b) {
              switch (b.$$typeof) {
                case cg:
                  if (a.type === b.value)
                    return true;
                  break;
                case dg:
                  a: {
                    b = b.value;
                    a = [a, 0];
                    for (var c = 0; c < a.length; ) {
                      var d = a[c++], e = a[c++], f = b[e];
                      if (d.tag !== 5 || !fb(d)) {
                        for (; f != null && jg(d, f); ) {
                          e++, f = b[e];
                        }
                        if (e === b.length) {
                          b = true;
                          break a;
                        } else
                          for (d = d.child; d !== null; ) {
                            a.push(d, e), d = d.sibling;
                          }
                      }
                    }
                    b = false;
                  }
                  return b;
                case eg:
                  if (a.tag === 5 && gb(a.stateNode, b.value))
                    return true;
                  break;
                case gg:
                  if (a.tag === 5 || a.tag === 6) {
                    if (a = eb(a), a !== null && 0 <= a.indexOf(b.value))
                      return true;
                  }
                  break;
                case fg:
                  if (a.tag === 5 && (a = a.memoizedProps["data-testname"], typeof a === "string" && a.toLowerCase() === b.value.toLowerCase()))
                    return true;
                  break;
                default:
                  throw Error(q(365, b));
              }
              return false;
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
              for (var d = 0; d < a.length; ) {
                var e = a[d++], f = a[d++], g = b[f];
                if (e.tag !== 5 || !fb(e)) {
                  for (; g != null && jg(e, g); ) {
                    f++, g = b[f];
                  }
                  if (f === b.length)
                    c.push(e);
                  else
                    for (e = e.child; e !== null; ) {
                      a.push(e, f), e = e.sibling;
                    }
                }
              }
              return c;
            }
            function mg(a, b) {
              if (!bb)
                throw Error(q(363));
              a = ig(a);
              a = lg(a, b);
              b = [];
              a = Array.from(a);
              for (var c = 0; c < a.length; ) {
                var d = a[c++];
                if (d.tag === 5)
                  fb(d) || b.push(d.stateNode);
                else
                  for (d = d.child; d !== null; ) {
                    a.push(d), d = d.sibling;
                  }
              }
              return b;
            }
            var ng = null;
            function og(a) {
              if (ng === null)
                try {
                  var b = ("require" + Math.random()).slice(0, 7);
                  ng = (module3 && module3[b]).call(module3, "timers").setImmediate;
                } catch (c) {
                  ng = function ng2(a2) {
                    var b2 = new MessageChannel();
                    b2.port1.onmessage = a2;
                    b2.port2.postMessage(void 0);
                  };
                }
              return ng(a);
            }
            var pg = Math.ceil, qg = ca.ReactCurrentDispatcher, rg = ca.ReactCurrentOwner, sg = ca.IsSomeRendererActing, V = 0, R = null, W = null, U = 0, tg = 0, ug = Wb(0), T = 0, vg = null, wg = 0, pd = 0, tf = 0, xg = 0, yg = null, $f = 0, vf = Infinity;
            function zg() {
              vf = G() + 500;
            }
            var X = null, Cf = false, Df = null, Ff = null, Ag = false, Bg = null, Cg = 90, Dg = [], Eg = [], Fg = null, Gg = 0, Hg = null, Ig = -1, Jg = 0, Kg = 0, Lg = null, Mg = false;
            function K() {
              return (V & 48) !== 0 ? G() : Ig !== -1 ? Ig : Ig = G();
            }
            function td(a) {
              a = a.mode;
              if ((a & 2) === 0)
                return 1;
              if ((a & 4) === 0)
                return Nc() === 99 ? 1 : 2;
              Jg === 0 && (Jg = wg);
              if (Sc.transition !== 0) {
                Kg !== 0 && (Kg = yg !== null ? yg.pendingLanes : 0);
                a = Jg;
                var b = 4186112 & ~Kg;
                b &= -b;
                b === 0 && (a = 4186112 & ~a, b = a & -a, b === 0 && (b = 8192));
                return b;
              }
              a = Nc();
              (V & 4) !== 0 && a === 98 ? a = oc(12, Jg) : (a = jc(a), a = oc(a, Jg));
              return a;
            }
            function ud(a, b, c) {
              if (50 < Gg)
                throw Gg = 0, Hg = null, Error(q(185));
              a = Ng(a, b);
              if (a === null)
                return null;
              rc(a, b, c);
              a === R && (tf |= b, T === 4 && uf(a, U));
              var d = Nc();
              b === 1 ? (V & 8) !== 0 && (V & 48) === 0 ? Og(a) : (Z(a, c), V === 0 && (zg(), H())) : ((V & 4) === 0 || d !== 98 && d !== 99 || (Fg === null ? Fg = new Set([a]) : Fg.add(a)), Z(a, c));
              yg = a;
            }
            function Ng(a, b) {
              a.lanes |= b;
              var c = a.alternate;
              c !== null && (c.lanes |= b);
              c = a;
              for (a = a.return; a !== null; ) {
                a.childLanes |= b, c = a.alternate, c !== null && (c.childLanes |= b), c = a, a = a.return;
              }
              return c.tag === 3 ? c.stateNode : null;
            }
            function Z(a, b) {
              for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g; ) {
                var h = 31 - mc(g), k = 1 << h, l = f[h];
                if (l === -1) {
                  if ((k & d) === 0 || (k & e) !== 0) {
                    l = b;
                    ic(k);
                    var n = F;
                    f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5e3 : -1;
                  }
                } else
                  l <= b && (a.expiredLanes |= k);
                g &= ~k;
              }
              d = lc(a, a === R ? U : 0);
              b = F;
              if (d === 0)
                c !== null && (c !== Hc && xc(c), a.callbackNode = null, a.callbackPriority = 0);
              else {
                if (c !== null) {
                  if (a.callbackPriority === b)
                    return;
                  c !== Hc && xc(c);
                }
                b === 15 ? (c = Og.bind(null, a), Jc === null ? (Jc = [c], Kc = wc(Cc, Rc)) : Jc.push(c), c = Hc) : b === 14 ? c = Qc(99, Og.bind(null, a)) : (c = kc(b), c = Qc(c, Pg.bind(null, a)));
                a.callbackPriority = b;
                a.callbackNode = c;
              }
            }
            function Pg(a) {
              Ig = -1;
              Kg = Jg = 0;
              if ((V & 48) !== 0)
                throw Error(q(327));
              var b = a.callbackNode;
              if (Qg() && a.callbackNode !== b)
                return null;
              var c = lc(a, a === R ? U : 0);
              if (c === 0)
                return null;
              var d = c;
              var e = V;
              V |= 16;
              var f = Rg();
              if (R !== a || U !== d)
                zg(), Sg(a, d);
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
              W !== null ? d = 0 : (R = null, U = 0, d = T);
              if ((wg & tf) !== 0)
                Sg(a, 0);
              else if (d !== 0) {
                d === 2 && (V |= 64, a.hydrate && (a.hydrate = false, xb(a.containerInfo)), c = nc(a), c !== 0 && (d = Vg(a, c)));
                if (d === 1)
                  throw b = vg, Sg(a, 0), uf(a, c), Z(a, G()), b;
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
                      if (lc(a, 0) !== 0)
                        break;
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
                    if ((c & 4186112) === c)
                      break;
                    d = a.eventTimes;
                    for (e = -1; 0 < c; ) {
                      var g = 31 - mc(c);
                      f = 1 << g;
                      g = d[g];
                      g > e && (e = g);
                      c &= ~f;
                    }
                    c = e;
                    c = G() - c;
                    c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * pg(c / 1960)) - c;
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
              for (a = a.expirationTimes; 0 < b; ) {
                var c = 31 - mc(b), d = 1 << c;
                a[c] = -1;
                b &= ~d;
              }
            }
            function Og(a) {
              if ((V & 48) !== 0)
                throw Error(q(327));
              Qg();
              if (a === R && (a.expiredLanes & U) !== 0) {
                var b = U;
                var c = Vg(a, b);
                (wg & tf) !== 0 && (b = lc(a, b), c = Vg(a, b));
              } else
                b = lc(a, 0), c = Vg(a, b);
              a.tag !== 0 && c === 2 && (V |= 64, a.hydrate && (a.hydrate = false, xb(a.containerInfo)), b = nc(a), b !== 0 && (c = Vg(a, b)));
              if (c === 1)
                throw c = vg, Sg(a, 0), uf(a, b), Z(a, G()), c;
              a.finishedWork = a.current.alternate;
              a.finishedLanes = b;
              Zg(a);
              Z(a, G());
              return null;
            }
            function $g() {
              if (Fg !== null) {
                var a = Fg;
                Fg = null;
                a.forEach(function(a2) {
                  a2.expiredLanes |= 24 & a2.pendingLanes;
                  Z(a2, G());
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
                V = c, V === 0 && (zg(), H());
              }
            }
            function bh(a, b) {
              var c = V;
              if ((c & 48) !== 0)
                return a(b);
              V |= 1;
              try {
                if (a)
                  return Pc(99, a.bind(null, b));
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
              if (W !== null)
                for (c = W.return; c !== null; ) {
                  var d = c;
                  switch (d.tag) {
                    case 1:
                      d = d.type.childContextTypes;
                      d !== null && d !== void 0 && $b();
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
                    for (var d = N.memoizedState; d !== null; ) {
                      var e = d.queue;
                      e !== null && (e.pending = null);
                      d = d.next;
                    }
                    ie = false;
                  }
                  he = 0;
                  P = O = N = null;
                  je = false;
                  rg.current = null;
                  if (c === null || c.return === null) {
                    T = 1;
                    vg = b;
                    W = null;
                    break;
                  }
                  a: {
                    var f = a, g = c.return, h = c, k = b;
                    b = U;
                    h.flags |= 2048;
                    h.firstEffect = h.lastEffect = null;
                    if (k !== null && _typeof(k) === "object" && typeof k.then === "function") {
                      var l = k;
                      if ((h.mode & 2) === 0) {
                        var n = h.alternate;
                        n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
                      }
                      var t = (M.current & 1) !== 0, p = g;
                      do {
                        var y;
                        if (y = p.tag === 13) {
                          var x = p.memoizedState;
                          if (x !== null)
                            y = x.dehydrated !== null ? true : false;
                          else {
                            var Y = p.memoizedProps;
                            y = Y.fallback === void 0 ? false : Y.unstable_avoidThisFallback !== true ? true : t ? false : true;
                          }
                        }
                        if (y) {
                          var u = p.updateQueue;
                          if (u === null) {
                            var v = new Set();
                            v.add(l);
                            p.updateQueue = v;
                          } else
                            u.add(l);
                          if ((p.mode & 2) === 0) {
                            p.flags |= 64;
                            h.flags |= 16384;
                            h.flags &= -2981;
                            if (h.tag === 1)
                              if (h.alternate === null)
                                h.tag = 17;
                              else {
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
                          Oa === null ? (Oa = f.pingCache = new Af(), k = new Set(), Oa.set(l, k)) : (k = Oa.get(l), k === void 0 && (k = new Set(), Oa.set(l, k)));
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
                      } while (p !== null);
                      k = Error((wa(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
                    }
                    T !== 5 && (T = 2);
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
                          var Xg = p.type, ld = p.stateNode;
                          if ((p.flags & 64) === 0 && (typeof Xg.getDerivedStateFromError === "function" || ld !== null && typeof ld.componentDidCatch === "function" && (Ff === null || !Ff.has(ld)))) {
                            p.flags |= 4096;
                            b &= -b;
                            p.lanes |= b;
                            var Yg = Ef(p, f, b);
                            nd(p, Yg);
                            break a;
                          }
                      }
                      p = p.return;
                    } while (p !== null);
                  }
                  dh(c);
                } catch (w) {
                  b = w;
                  W === c && c !== null && (W = c = c.return);
                  continue;
                }
                break;
              } while (1);
            }
            function Rg() {
              var a = qg.current;
              qg.current = pe;
              return a === null ? pe : a;
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
              if (W !== null)
                throw Error(q(261));
              R = null;
              U = 0;
              return T;
            }
            function eh() {
              for (; W !== null; ) {
                fh(W);
              }
            }
            function Tg() {
              for (; W !== null && !yc(); ) {
                fh(W);
              }
            }
            function fh(a) {
              var b = gh(a.alternate, a, tg);
              a.memoizedProps = a.pendingProps;
              b === null ? dh(a) : W = b;
              rg.current = null;
            }
            function dh(a) {
              var b = a;
              do {
                var c = b.alternate;
                a = b.return;
                if ((b.flags & 2048) === 0) {
                  c = sf(c, b, tg);
                  if (c !== null) {
                    W = c;
                    return;
                  }
                  c = b;
                  if (c.tag !== 24 && c.tag !== 23 || c.memoizedState === null || (tg & 1073741824) !== 0 || (c.mode & 4) === 0) {
                    for (var d = 0, e = c.child; e !== null; ) {
                      d |= e.lanes | e.childLanes, e = e.sibling;
                    }
                    c.childLanes = d;
                  }
                  a !== null && (a.flags & 2048) === 0 && (a.firstEffect === null && (a.firstEffect = b.firstEffect), b.lastEffect !== null && (a.lastEffect !== null && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (a.lastEffect !== null ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
                } else {
                  c = xf(b);
                  if (c !== null) {
                    c.flags &= 2047;
                    W = c;
                    return;
                  }
                  a !== null && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
                }
                b = b.sibling;
                if (b !== null) {
                  W = b;
                  return;
                }
                W = b = a;
              } while (b !== null);
              T === 0 && (T = 5);
            }
            function Zg(a) {
              var b = Nc();
              Pc(99, hh.bind(null, a, b));
              return null;
            }
            function hh(a, b) {
              do {
                Qg();
              } while (Bg !== null);
              if ((V & 48) !== 0)
                throw Error(q(327));
              var c = a.finishedWork;
              if (c === null)
                return null;
              a.finishedWork = null;
              a.finishedLanes = 0;
              if (c === a.current)
                throw Error(q(177));
              a.callbackNode = null;
              var d = c.lanes | c.childLanes, e = d, f = a.pendingLanes & ~e;
              a.pendingLanes = e;
              a.suspendedLanes = 0;
              a.pingedLanes = 0;
              a.expiredLanes &= e;
              a.mutableReadLanes &= e;
              a.entangledLanes &= e;
              e = a.entanglements;
              for (var g = a.eventTimes, h = a.expirationTimes; 0 < f; ) {
                var k = 31 - mc(f), l = 1 << k;
                e[k] = 0;
                g[k] = -1;
                h[k] = -1;
                f &= ~l;
              }
              Fg !== null && (d & 24) === 0 && Fg.has(a) && Fg.delete(a);
              a === R && (W = R = null, U = 0);
              1 < c.flags ? c.lastEffect !== null ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;
              if (d !== null) {
                e = V;
                V |= 32;
                rg.current = null;
                Lg = Ga(a.containerInfo);
                Mg = false;
                X = d;
                do {
                  try {
                    ih();
                  } catch (v) {
                    if (X === null)
                      throw Error(q(330));
                    If(X, v);
                    X = X.nextEffect;
                  }
                } while (X !== null);
                Lg = null;
                X = d;
                do {
                  try {
                    for (g = a; X !== null; ) {
                      var n = X.flags;
                      n & 16 && Ta && sb(X.stateNode);
                      if (n & 128) {
                        var t = X.alternate;
                        if (t !== null) {
                          var p = t.ref;
                          p !== null && (typeof p === "function" ? p(null) : p.current = null);
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
                          y !== null && Sf(y);
                      }
                      X = X.nextEffect;
                    }
                  } catch (v) {
                    if (X === null)
                      throw Error(q(330));
                    If(X, v);
                    X = X.nextEffect;
                  }
                } while (X !== null);
                Mg && $a();
                Ha(a.containerInfo);
                a.current = c;
                X = d;
                do {
                  try {
                    for (n = a; X !== null; ) {
                      var x = X.flags;
                      x & 36 && Lf(n, X.alternate, X);
                      if (x & 128) {
                        t = void 0;
                        var Y = X.ref;
                        if (Y !== null) {
                          var u = X.stateNode;
                          switch (X.tag) {
                            case 5:
                              t = Da(u);
                              break;
                            default:
                              t = u;
                          }
                          typeof Y === "function" ? Y(t) : Y.current = t;
                        }
                      }
                      X = X.nextEffect;
                    }
                  } catch (v) {
                    if (X === null)
                      throw Error(q(330));
                    If(X, v);
                    X = X.nextEffect;
                  }
                } while (X !== null);
                X = null;
                Ic();
                V = e;
              } else
                a.current = c;
              if (Ag)
                Ag = false, Bg = a, Cg = b;
              else
                for (X = d; X !== null; ) {
                  b = X.nextEffect, X.nextEffect = null, X.flags & 8 && (x = X, x.sibling = null, x.stateNode = null), X = b;
                }
              d = a.pendingLanes;
              d === 0 && (Ff = null);
              d === 1 ? a === Hg ? Gg++ : (Gg = 0, Hg = a) : Gg = 0;
              c = c.stateNode;
              if (fc && typeof fc.onCommitFiberRoot === "function")
                try {
                  fc.onCommitFiberRoot(ec, c, void 0, (c.current.flags & 64) === 64);
                } catch (v) {
                }
              Z(a, G());
              if (Cf)
                throw Cf = false, a = Df, Df = null, a;
              if ((V & 8) !== 0)
                return null;
              H();
              return null;
            }
            function ih() {
              for (; X !== null; ) {
                var a = X.alternate;
                Mg || Lg === null || ((X.flags & 8) !== 0 ? Ca(X, Lg) && (Mg = true, Za()) : X.tag === 13 && bg(a, X) && Ca(X, Lg) && (Mg = true, Za()));
                var b = X.flags;
                (b & 256) !== 0 && Jf(a, X);
                (b & 512) === 0 || Ag || (Ag = true, Qc(97, function() {
                  Qg();
                  return null;
                }));
                X = X.nextEffect;
              }
            }
            function Qg() {
              if (Cg !== 90) {
                var a = 97 < Cg ? 97 : Cg;
                Cg = 90;
                return Pc(a, jh);
              }
              return false;
            }
            function Nf(a, b) {
              Dg.push(b, a);
              Ag || (Ag = true, Qc(97, function() {
                Qg();
                return null;
              }));
            }
            function Mf(a, b) {
              Eg.push(b, a);
              Ag || (Ag = true, Qc(97, function() {
                Qg();
                return null;
              }));
            }
            function jh() {
              if (Bg === null)
                return false;
              var a = Bg;
              Bg = null;
              if ((V & 48) !== 0)
                throw Error(q(331));
              var b = V;
              V |= 32;
              var c = Eg;
              Eg = [];
              for (var d = 0; d < c.length; d += 2) {
                var e = c[d], f = c[d + 1], g = e.destroy;
                e.destroy = void 0;
                if (typeof g === "function")
                  try {
                    g();
                  } catch (k) {
                    if (f === null)
                      throw Error(q(330));
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
                  if (f === null)
                    throw Error(q(330));
                  If(f, k);
                }
              }
              for (h = a.current.firstEffect; h !== null; ) {
                a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;
              }
              V = b;
              H();
              return true;
            }
            function kh(a, b, c) {
              b = yf(c, b);
              b = Bf(a, b, 1);
              md(a, b);
              b = K();
              a = Ng(a, 1);
              a !== null && (rc(a, 1, b), Z(a, b));
            }
            function If(a, b) {
              if (a.tag === 3)
                kh(a, a, b);
              else
                for (var c = a.return; c !== null; ) {
                  if (c.tag === 3) {
                    kh(c, a, b);
                    break;
                  } else if (c.tag === 1) {
                    var d = c.stateNode;
                    if (typeof c.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (Ff === null || !Ff.has(d))) {
                      a = yf(b, a);
                      var e = Ef(c, a, 1);
                      md(c, e);
                      e = K();
                      c = Ng(c, 1);
                      if (c !== null)
                        rc(c, 1, e), Z(c, e);
                      else if (typeof d.componentDidCatch === "function" && (Ff === null || !Ff.has(d)))
                        try {
                          d.componentDidCatch(b, a);
                        } catch (f) {
                        }
                      break;
                    }
                  }
                  c = c.return;
                }
            }
            function ch(a, b, c) {
              var d = a.pingCache;
              d !== null && d.delete(b);
              b = K();
              a.pingedLanes |= a.suspendedLanes & c;
              R === a && (U & c) === c && (T === 4 || T === 3 && (U & 62914560) === U && 500 > G() - $f ? Sg(a, 0) : xg |= c);
              Z(a, b);
            }
            function ag(a, b) {
              var c = a.stateNode;
              c !== null && c.delete(b);
              b = 0;
              b === 0 && (b = a.mode, (b & 2) === 0 ? b = 1 : (b & 4) === 0 ? b = Nc() === 99 ? 1 : 2 : (Jg === 0 && (Jg = wg), b = pc(62914560 & ~Jg), b === 0 && (b = 4194304)));
              c = K();
              a = Ng(a, b);
              a !== null && (rc(a, b, c), Z(a, c));
            }
            var gh;
            gh = function gh2(a, b, c) {
              var d = b.lanes;
              if (a !== null) {
                if (a.memoizedProps !== b.pendingProps || D.current)
                  gd = true;
                else if ((c & d) !== 0)
                  gd = (a.flags & 16384) !== 0 ? true : false;
                else {
                  gd = false;
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
                      if (b.memoizedState !== null) {
                        if ((c & b.child.childLanes) !== 0)
                          return cf(a, b, c);
                        A(M, M.current & 1);
                        b = Re(a, b, c);
                        return b !== null ? b.sibling : null;
                      }
                      A(M, M.current & 1);
                      break;
                    case 19:
                      d = (c & b.childLanes) !== 0;
                      if ((a.flags & 64) !== 0) {
                        if (d)
                          return kf(a, b, c);
                        b.flags |= 64;
                      }
                      var e = b.memoizedState;
                      e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null);
                      A(M, M.current);
                      if (d)
                        break;
                      else
                        return null;
                    case 23:
                    case 24:
                      return b.lanes = 0, We(a, b, c);
                  }
                  return Re(a, b, c);
                }
              } else
                gd = false;
              b.lanes = 0;
              switch (b.tag) {
                case 2:
                  d = b.type;
                  a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
                  a = b.pendingProps;
                  e = Zb(b, B.current);
                  fd(b, c);
                  e = le(null, b, d, a, e, c);
                  b.flags |= 1;
                  if (_typeof(e) === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0) {
                    b.tag = 1;
                    b.memoizedState = null;
                    b.updateQueue = null;
                    if (E(d)) {
                      var f = true;
                      cc(b);
                    } else
                      f = false;
                    b.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null;
                    id(b);
                    var g = d.getDerivedStateFromProps;
                    typeof g === "function" && sd(b, d, g, a);
                    e.updater = vd;
                    b.stateNode = e;
                    e._reactInternals = b;
                    zd(b, d, a, c);
                    b = $e(null, b, d, true, f, c);
                  } else
                    b.tag = 0, S(null, b, e, c), b = b.child;
                  return b;
                case 16:
                  e = b.elementType;
                  a: {
                    a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
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
                  if (a === null || d === null)
                    throw Error(q(282));
                  d = b.pendingProps;
                  e = b.memoizedState;
                  e = e !== null ? e.element : null;
                  jd2(a, b);
                  od(b, d, null, c);
                  d = b.memoizedState.element;
                  if (d === e)
                    ce(), b = Re(a, b, c);
                  else {
                    e = b.stateNode;
                    if (f = e.hydrate)
                      Va ? (Vd = Kb(b.stateNode.containerInfo), Ud = b, f = Wd = true) : f = false;
                    if (f) {
                      if (Va && (a = e.mutableSourceEagerHydrationData, a != null))
                        for (e = 0; e < a.length; e += 2) {
                          f = a[e], g = a[e + 1], Sa ? f._workInProgressVersionPrimary = g : f._workInProgressVersionSecondary = g, de.push(f);
                        }
                      c = Kd(b, null, d, c);
                      for (b.child = c; c; ) {
                        c.flags = c.flags & -3 | 1024, c = c.sibling;
                      }
                    } else
                      S(a, b, d, c), ce();
                    b = b.child;
                  }
                  return b;
                case 5:
                  return Rd(b), a === null && $d(b), d = b.type, e = b.pendingProps, f = a !== null ? a.memoizedProps : null, g = e.children, Ma(d, e) ? g = null : f !== null && Ma(d, f) && (b.flags |= 16), Ye(a, b), S(a, b, g, c), b.child;
                case 6:
                  return a === null && $d(b), null;
                case 13:
                  return cf(a, b, c);
                case 4:
                  return Pd(b, b.stateNode.containerInfo), d = b.pendingProps, a === null ? b.child = Jd(b, null, d, c) : S(a, b, d, c), b.child;
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
                    if (g !== null) {
                      var h = g.value;
                      f = I(h, f) ? 0 : (typeof d._calculateChangedBits === "function" ? d._calculateChangedBits(h, f) : 1073741823) | 0;
                      if (f === 0) {
                        if (g.children === e.children && !D.current) {
                          b = Re(a, b, c);
                          break a;
                        }
                      } else
                        for (h = b.child, h !== null && (h.return = b); h !== null; ) {
                          var k = h.dependencies;
                          if (k !== null) {
                            g = h.child;
                            for (var l = k.firstContext; l !== null; ) {
                              if (l.context === d && (l.observedBits & f) !== 0) {
                                h.tag === 1 && (l = kd(-1, c & -c), l.tag = 2, md(h, l));
                                h.lanes |= c;
                                l = h.alternate;
                                l !== null && (l.lanes |= c);
                                ed(h.return, c);
                                k.lanes |= c;
                                break;
                              }
                              l = l.next;
                            }
                          } else
                            g = h.tag === 10 ? h.type === b.type ? null : h.child : h.child;
                          if (g !== null)
                            g.return = h;
                          else
                            for (g = h; g !== null; ) {
                              if (g === b) {
                                g = null;
                                break;
                              }
                              h = g.sibling;
                              if (h !== null) {
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
                  return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Xc(d, e), a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, E(d) ? (a = true, cc(b)) : a = false, fd(b, c), xd(b, d, e), zd(b, d, e, c), $e(null, b, d, true, a, c);
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
              current: false
            }, nh = m.unstable_flushAllWithoutAsserting, oh = typeof nh === "function";
            function ph() {
              if (nh !== void 0)
                return nh();
              for (var a = false; Qg(); ) {
                a = true;
              }
              return a;
            }
            function qh(a) {
              try {
                ph(), og(function() {
                  ph() ? qh(a) : a();
                });
              } catch (b) {
                a(b);
              }
            }
            var rh = 0, sh = false;
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
              if (typeof a === "function")
                return Te(a) ? 1 : 0;
              if (a !== void 0 && a !== null) {
                a = a.$$typeof;
                if (a === la)
                  return 11;
                if (a === oa)
                  return 14;
              }
              return 2;
            }
            function Ed(a, b) {
              var c = a.alternate;
              c === null ? (c = Yd(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
              c.childLanes = a.childLanes;
              c.lanes = a.lanes;
              c.child = a.child;
              c.memoizedProps = a.memoizedProps;
              c.memoizedState = a.memoizedState;
              c.updateQueue = a.updateQueue;
              b = a.dependencies;
              c.dependencies = b === null ? null : {
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
              if (typeof a === "function")
                Te(a) && (g = 1);
              else if (typeof a === "string")
                g = 5;
              else
                a:
                  switch (a) {
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
                      if (_typeof(a) === "object" && a !== null)
                        switch (a.$$typeof) {
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
                      throw Error(q(130, a == null ? a : _typeof(a), ""));
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
              b = Yd(4, a.children !== null ? a.children : [], a.key, b);
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
              if (b === void 0) {
                if (typeof a.render === "function")
                  throw Error(q(188));
                throw Error(q(268, Object.keys(a)));
              }
              a = Aa(b);
              return a === null ? null : a.stateNode;
            }
            function wh(a, b) {
              a = a.memoizedState;
              if (a !== null && a.dehydrated !== null) {
                var c = a.retryLane;
                a.retryLane = c !== 0 && c < b ? c : b;
              }
            }
            function xh(a, b) {
              wh(a, b);
              (a = a.alternate) && wh(a, b);
            }
            function yh(a) {
              a = Aa(a);
              return a === null ? null : a.stateNode;
            }
            function zh() {
              return null;
            }
            exports3.IsThisRendererActing = mh;
            exports3.act = function(a) {
              function b() {
                rh--;
                sg.current = c;
                mh.current = d;
              }
              sh === false && (sh = true, console.error("act(...) is not supported in production builds of React, and might not behave as expected."));
              rh++;
              var c = sg.current, d = mh.current;
              sg.current = true;
              mh.current = true;
              try {
                var e = ah(a);
              } catch (f) {
                throw b(), f;
              }
              if (e !== null && _typeof(e) === "object" && typeof e.then === "function")
                return {
                  then: function then(a2, d2) {
                    e.then(function() {
                      1 < rh || oh === true && c === true ? (b(), a2()) : qh(function(c2) {
                        b();
                        c2 ? d2(c2) : a2();
                      });
                    }, function(a3) {
                      b();
                      d2(a3);
                    });
                  }
                };
              try {
                rh !== 1 || oh !== false && c !== false || ph(), b();
              } catch (f) {
                throw b(), f;
              }
              return {
                then: function then(a2) {
                  a2();
                }
              };
            };
            exports3.attemptContinuousHydration = function(a) {
              if (a.tag === 13) {
                var b = K();
                ud(a, 67108864, b);
                xh(a, 67108864);
              }
            };
            exports3.attemptHydrationAtCurrentPriority = function(a) {
              if (a.tag === 13) {
                var b = K(), c = td(a);
                ud(a, c, b);
                xh(a, c);
              }
            };
            exports3.attemptSynchronousHydration = function(a) {
              switch (a.tag) {
                case 3:
                  var b = a.stateNode;
                  if (b.hydrate) {
                    var c = ic(b.pendingLanes);
                    b.expiredLanes |= c & b.pendingLanes;
                    Z(b, G());
                    (V & 48) === 0 && (zg(), H());
                  }
                  break;
                case 13:
                  var d = K();
                  bh(function() {
                    return ud(a, 1, d);
                  });
                  xh(a, 4);
              }
            };
            exports3.attemptUserBlockingHydration = function(a) {
              if (a.tag === 13) {
                var b = K();
                ud(a, 4, b);
                xh(a, 4);
              }
            };
            exports3.batchedEventUpdates = function(a, b) {
              var c = V;
              V |= 2;
              try {
                return a(b);
              } finally {
                V = c, V === 0 && (zg(), H());
              }
            };
            exports3.batchedUpdates = ah;
            exports3.createComponentSelector = function(a) {
              return {
                $$typeof: cg,
                value: a
              };
            };
            exports3.createContainer = function(a, b, c) {
              a = new uh(a, b, c);
              b = Yd(3, null, null, b === 2 ? 7 : b === 1 ? 3 : 0);
              a.current = b;
              b.stateNode = a;
              id(b);
              return a;
            };
            exports3.createHasPsuedoClassSelector = function(a) {
              return {
                $$typeof: dg,
                value: a
              };
            };
            exports3.createPortal = function(a, b, c) {
              var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
              return {
                $$typeof: ea,
                key: d == null ? null : "" + d,
                children: a,
                containerInfo: b,
                implementation: c
              };
            };
            exports3.createRoleSelector = function(a) {
              return {
                $$typeof: eg,
                value: a
              };
            };
            exports3.createTestNameSelector = function(a) {
              return {
                $$typeof: fg,
                value: a
              };
            };
            exports3.createTextSelector = function(a) {
              return {
                $$typeof: gg,
                value: a
              };
            };
            exports3.deferredUpdates = function(a) {
              return Pc(97, a);
            };
            exports3.discreteUpdates = function(a, b, c, d, e) {
              var f = V;
              V |= 4;
              try {
                return Pc(98, a.bind(null, b, c, d, e));
              } finally {
                V = f, V === 0 && (zg(), H());
              }
            };
            exports3.findAllNodes = mg;
            exports3.findBoundingRects = function(a, b) {
              if (!bb)
                throw Error(q(363));
              b = mg(a, b);
              a = [];
              for (var c = 0; c < b.length; c++) {
                a.push(db(b[c]));
              }
              for (b = a.length - 1; 0 < b; b--) {
                c = a[b];
                for (var d = c.x, e = d + c.width, f = c.y, g = f + c.height, h = b - 1; 0 <= h; h--) {
                  if (b !== h) {
                    var k = a[h], l = k.x, n = l + k.width, t = k.y, p = t + k.height;
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
            exports3.findHostInstance = vh;
            exports3.findHostInstanceWithNoPortals = function(a) {
              a = Ba(a);
              return a === null ? null : a.tag === 20 ? a.stateNode.instance : a.stateNode;
            };
            exports3.findHostInstanceWithWarning = function(a) {
              return vh(a);
            };
            exports3.flushControlled = function(a) {
              var b = V;
              V |= 1;
              try {
                Pc(99, a);
              } finally {
                V = b, V === 0 && (zg(), H());
              }
            };
            exports3.flushDiscreteUpdates = function() {
              (V & 49) === 0 && ($g(), Qg());
            };
            exports3.flushPassiveEffects = Qg;
            exports3.flushSync = bh;
            exports3.focusWithin = function(a, b) {
              if (!bb)
                throw Error(q(363));
              a = ig(a);
              b = lg(a, b);
              b = Array.from(b);
              for (a = 0; a < b.length; ) {
                var c = b[a++];
                if (!fb(c)) {
                  if (c.tag === 5 && hb(c.stateNode))
                    return true;
                  for (c = c.child; c !== null; ) {
                    b.push(c), c = c.sibling;
                  }
                }
              }
              return false;
            };
            exports3.getCurrentUpdateLanePriority = function() {
              return hc;
            };
            exports3.getFindAllNodesFailureDescription = function(a, b) {
              if (!bb)
                throw Error(q(363));
              var c = 0, d = [];
              a = [ig(a), 0];
              for (var e = 0; e < a.length; ) {
                var f = a[e++], g = a[e++], h = b[g];
                if (f.tag !== 5 || !fb(f)) {
                  if (jg(f, h) && (d.push(kg(h)), g++, g > c && (c = g)), g < b.length)
                    for (f = f.child; f !== null; ) {
                      a.push(f, g), f = f.sibling;
                    }
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
            exports3.getPublicRootInstance = function(a) {
              a = a.current;
              if (!a.child)
                return null;
              switch (a.child.tag) {
                case 5:
                  return Da(a.child.stateNode);
                default:
                  return a.child.stateNode;
              }
            };
            exports3.injectIntoDevTools = function(a) {
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
              if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined")
                a = false;
              else {
                var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!b.isDisabled && b.supportsFiber)
                  try {
                    ec = b.inject(a), fc = b;
                  } catch (c) {
                  }
                a = true;
              }
              return a;
            };
            exports3.observeVisibleRects = function(a, b, c, d) {
              if (!bb)
                throw Error(q(363));
              a = mg(a, b);
              var e = ib(a, c, d).disconnect;
              return {
                disconnect: function disconnect() {
                  e();
                }
              };
            };
            exports3.registerMutableSourceForHydration = function(a, b) {
              var c = b._getVersion;
              c = c(b._source);
              a.mutableSourceEagerHydrationData == null ? a.mutableSourceEagerHydrationData = [b, c] : a.mutableSourceEagerHydrationData.push(b, c);
            };
            exports3.runWithPriority = function(a, b) {
              var c = hc;
              try {
                return hc = a, b();
              } finally {
                hc = c;
              }
            };
            exports3.shouldSuspend = function() {
              return false;
            };
            exports3.unbatchedUpdates = function(a, b) {
              var c = V;
              V &= -2;
              V |= 8;
              try {
                return a(b);
              } finally {
                V = c, V === 0 && (zg(), H());
              }
            };
            exports3.updateContainer = function(a, b, c, d) {
              var e = b.current, f = K(), g = td(e);
              a:
                if (c) {
                  c = c._reactInternals;
                  b: {
                    if (xa(c) !== c || c.tag !== 1)
                      throw Error(q(170));
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
                    } while (h !== null);
                    throw Error(q(171));
                  }
                  if (c.tag === 1) {
                    var k = c.type;
                    if (E(k)) {
                      c = bc(c, k, h);
                      break a;
                    }
                  }
                  c = h;
                } else
                  c = Xb;
              b.context === null ? b.context = c : b.pendingContext = c;
              b = kd(f, g);
              b.payload = {
                element: a
              };
              d = d === void 0 ? null : d;
              d !== null && (b.callback = d);
              md(e, b);
              ud(e, g, f);
              return g;
            };
            return exports3;
          };
        }).call(this, __webpack_require__("./node_modules/_webpack@4.46.0@webpack/buildin/module.js")(module2));
      },
      "./node_modules/_scheduler@0.20.2@scheduler/cjs/scheduler.production.min.js": function(module2, exports2, __webpack_require__) {
        "use strict";
        (function(window2) {
          var _typeof = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/typeof.js");
          var _f, g, h, k;
          if ((typeof performance === "undefined" ? "undefined" : _typeof(performance)) === "object" && typeof performance.now === "function") {
            var l = performance;
            exports2.unstable_now = function() {
              return l.now();
            };
          } else {
            var p = Date, q = p.now();
            exports2.unstable_now = function() {
              return p.now() - q;
            };
          }
          if (typeof window2 === "undefined" || typeof MessageChannel !== "function") {
            var t = null, u = null, w = function w2() {
              if (t !== null)
                try {
                  var a = exports2.unstable_now();
                  t(true, a);
                  t = null;
                } catch (b) {
                  throw setTimeout(w2, 0), b;
                }
            };
            _f = function f(a) {
              t !== null ? setTimeout(_f, 0, a) : (t = a, setTimeout(w, 0));
            };
            g = function g2(a, b) {
              u = setTimeout(a, b);
            };
            h = function h2() {
              clearTimeout(u);
            };
            exports2.unstable_shouldYield = function() {
              return false;
            };
            k = exports2.unstable_forceFrameRate = function() {
            };
          } else {
            var x = window2.setTimeout, y = window2.clearTimeout;
            if (typeof console !== "undefined") {
              var z = window2.cancelAnimationFrame;
              typeof window2.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
              typeof z !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
            }
            var A = false, B = null, C = -1, D = 5, E = 0;
            exports2.unstable_shouldYield = function() {
              return exports2.unstable_now() >= E;
            };
            k = function k2() {
            };
            exports2.unstable_forceFrameRate = function(a) {
              0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < a ? Math.floor(1e3 / a) : 5;
            };
            var F = new MessageChannel(), G = F.port2;
            F.port1.onmessage = function() {
              if (B !== null) {
                var a = exports2.unstable_now();
                E = a + D;
                try {
                  B(true, a) ? G.postMessage(null) : (A = false, B = null);
                } catch (b) {
                  throw G.postMessage(null), b;
                }
              } else
                A = false;
            };
            _f = function _f2(a) {
              B = a;
              A || (A = true, G.postMessage(null));
            };
            g = function g2(a, b) {
              C = x(function() {
                a(exports2.unstable_now());
              }, b);
            };
            h = function h2() {
              y(C);
              C = -1;
            };
          }
          function H(a, b) {
            var c = a.length;
            a.push(b);
            a:
              for (; ; ) {
                var d = c - 1 >>> 1, e = a[d];
                if (e !== void 0 && 0 < I(e, b))
                  a[d] = b, a[c] = e, c = d;
                else
                  break a;
              }
          }
          function J(a) {
            a = a[0];
            return a === void 0 ? null : a;
          }
          function K(a) {
            var b = a[0];
            if (b !== void 0) {
              var c = a.pop();
              if (c !== b) {
                a[0] = c;
                a:
                  for (var d = 0, e = a.length; d < e; ) {
                    var m = 2 * (d + 1) - 1, n = a[m], v = m + 1, r = a[v];
                    if (n !== void 0 && 0 > I(n, c))
                      r !== void 0 && 0 > I(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);
                    else if (r !== void 0 && 0 > I(r, c))
                      a[d] = r, a[v] = c, d = v;
                    else
                      break a;
                  }
              }
              return b;
            }
            return null;
          }
          function I(a, b) {
            var c = a.sortIndex - b.sortIndex;
            return c !== 0 ? c : a.id - b.id;
          }
          var L = [], M = [], N = 1, O = null, P = 3, Q = false, R = false, S = false;
          function T(a) {
            for (var b = J(M); b !== null; ) {
              if (b.callback === null)
                K(M);
              else if (b.startTime <= a)
                K(M), b.sortIndex = b.expirationTime, H(L, b);
              else
                break;
              b = J(M);
            }
          }
          function U(a) {
            S = false;
            T(a);
            if (!R)
              if (J(L) !== null)
                R = true, _f(V);
              else {
                var b = J(M);
                b !== null && g(U, b.startTime - a);
              }
          }
          function V(a, b) {
            R = false;
            S && (S = false, h());
            Q = true;
            var c = P;
            try {
              T(b);
              for (O = J(L); O !== null && (!(O.expirationTime > b) || a && !exports2.unstable_shouldYield()); ) {
                var d = O.callback;
                if (typeof d === "function") {
                  O.callback = null;
                  P = O.priorityLevel;
                  var e = d(O.expirationTime <= b);
                  b = exports2.unstable_now();
                  typeof e === "function" ? O.callback = e : O === J(L) && K(L);
                  T(b);
                } else
                  K(L);
                O = J(L);
              }
              if (O !== null)
                var m = true;
              else {
                var n = J(M);
                n !== null && g(U, n.startTime - b);
                m = false;
              }
              return m;
            } finally {
              O = null, P = c, Q = false;
            }
          }
          var W = k;
          exports2.unstable_IdlePriority = 5;
          exports2.unstable_ImmediatePriority = 1;
          exports2.unstable_LowPriority = 4;
          exports2.unstable_NormalPriority = 3;
          exports2.unstable_Profiling = null;
          exports2.unstable_UserBlockingPriority = 2;
          exports2.unstable_cancelCallback = function(a) {
            a.callback = null;
          };
          exports2.unstable_continueExecution = function() {
            R || Q || (R = true, _f(V));
          };
          exports2.unstable_getCurrentPriorityLevel = function() {
            return P;
          };
          exports2.unstable_getFirstCallbackNode = function() {
            return J(L);
          };
          exports2.unstable_next = function(a) {
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
          exports2.unstable_pauseExecution = function() {
          };
          exports2.unstable_requestPaint = W;
          exports2.unstable_runWithPriority = function(a, b) {
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
          exports2.unstable_scheduleCallback = function(a, b, c) {
            var d = exports2.unstable_now();
            _typeof(c) === "object" && c !== null ? (c = c.delay, c = typeof c === "number" && 0 < c ? d + c : d) : c = d;
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
                e = 1e4;
                break;
              default:
                e = 5e3;
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
            c > d ? (a.sortIndex = c, H(M, a), J(L) === null && a === J(M) && (S ? h() : S = true, g(U, c - d))) : (a.sortIndex = e, H(L, a), R || Q || (R = true, _f(V)));
            return a;
          };
          exports2.unstable_wrapCallback = function(a) {
            var b = P;
            return function() {
              var c = P;
              P = b;
              try {
                return a.apply(this, arguments);
              } finally {
                P = c;
              }
            };
          };
        }).call(this, __webpack_require__("./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js")["window"]);
      },
      "./src/app.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@tarojs_plugin-platform-weapp@3.3.2@@tarojs/plugin-platform-weapp/dist/runtime.js");
        var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js");
        var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_@tarojs_taro@3.3.2@@tarojs/taro/index.js");
        var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /* @__PURE__ */ __webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
        var _node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_app_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./src/app.js");
        var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
        var react__WEBPACK_IMPORTED_MODULE_4___default = /* @__PURE__ */ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
        var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/_@tarojs_react@3.3.2@@tarojs/react/dist/react.esm.js");
        var config = { "pages": ["pages/index/index"], "window": { "backgroundTextStyle": "light", "navigationBarBackgroundColor": "#fff", "navigationBarTitleText": "WeChat", "navigationBarTextStyle": "black" } };
        _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__["window"].__taroAppConfig = config;
        var inst = App(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__["createReactApp"])(_node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_app_js__WEBPACK_IMPORTED_MODULE_3__["a"], react__WEBPACK_IMPORTED_MODULE_4__, react_dom__WEBPACK_IMPORTED_MODULE_5__["a"], config));
        Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["initPxTransform"])({
          designWidth: 750,
          deviceRatio: { "640": 1.17, "750": 1, "828": 0.905 }
        });
      },
      "./src/app.less": function(module2, exports2, __webpack_require__) {
      }
    }, [["./src/app.js", "runtime", "taro", "vendors"]]]);
  }
});

// taro/dist/utils.wxs
var require_utils = __commonJS({
  "taro/dist/utils.wxs"(exports, module) {
    module.exports = {
      a: function(l, n, s) {
        var a = ["view", "catch-view", "cover-view", "static-view", "pure-view", "block", "text", "static-text", "slot", "slot-view", "label", "form", "scroll-view", "swiper", "swiper-item"];
        var b = ["static-text", "slot", "slot-view", "label", "form", "scroll-view", "swiper", "swiper-item"];
        if (a.indexOf(n) === -1) {
          l = 0;
        }
        if (b.indexOf(n) > -1) {
          var u = s.split(",");
          var depth = 0;
          for (var i = 0; i < u.length; i++) {
            if (u[i] === n)
              depth++;
          }
          l = depth;
        }
        return "tmpl_" + l + "_" + n;
      },
      b: function(a, b) {
        return a === void 0 ? b : a;
      },
      c: function(i, prefix) {
        var s = i.focus !== void 0 ? "focus" : "blur";
        return prefix + i.nn + "_" + s;
      },
      d: function(i, v) {
        return i === void 0 ? v : i;
      },
      e: function(n) {
        return "tmpl_" + n + "_container";
      },
      f: function(l, n) {
        var b = ["static-text", "slot", "slot-view", "label", "form", "scroll-view", "swiper", "swiper-item"];
        if (b.indexOf(n) > -1) {
          if (l)
            l += ",";
          l += n;
        }
        return l;
      }
    };
  }
});

// taro/dist/base.wxml
var require_base = __commonJS({
  "taro/dist/base.wxml"() {
    var xs = require_utils();
    registerComponent("taro_tmpl", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <div v-for="item in root.cn" key="uid" >
            
        <component is="tmpl_0_container" :data="{i:item,l:''}" >
            
        </component>
    
        </div>
    </div>`
    });
    registerComponent("tmpl_0_catch-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" catchtouchmove="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_0_static-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_0_pure-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_0_view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchmove="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_0_static-text", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-text :selectable="xs.b(i.selectable,false)" :space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-text>
    </div>`
    });
    registerComponent("tmpl_0_text", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-text :selectable="xs.b(i.selectable,false)" :space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-text>
    </div>`
    });
    registerComponent("tmpl_0_button", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-button :size="xs.b(i.size,'default')" :type="i.type" :plain="xs.b(i.plain,false)" :disabled="i.disabled" :loading="xs.b(i.loading,false)" :form-type="i.formType" :open-type="i.openType" :hover-class="xs.b(i.hoverClass,'button-hover')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,20)" :hover-stay-time="xs.b(i.hoverStayTime,70)" :name="i.name" :lang="xs.b(i.lang,en)" :session-from="i.sessionFrom" :send-message-title="i.sendMessageTitle" :send-message-path="i.sendMessagePath" :send-message-img="i.sendMessageImg" :app-parameter="i.appParameter" :show-message-card="xs.b(i.showMessageCard,false)" :business-id="i.businessId" :getuserinfo="eh" :contact="eh" :getphonenumber="eh" :error="eh" :opensetting="eh" :launchapp="eh" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-button>
    </div>`
    });
    registerComponent("tmpl_0_input", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <component :is="xs.c(i, 'tmpl_0_')" :data="{i:i}" >
            
        </component>
    </div>`
    });
    registerComponent("tmpl_0_input_focus", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-input :value="i.value" :type="xs.b(i.type,'')" :password="xs.b(i.password,false)" :placeholder="i.placeholder" :placeholder-style="i.placeholderStyle" :placeholder-class="xs.b(i.placeholderClass,'input-placeholder')" :disabled="i.disabled" :maxlength="xs.b(i.maxlength,140)" :cursor-spacing="xs.b(i.cursorSpacing,0)" :focus="xs.b(i.focus,false)" :confirm-type="xs.b(i.confirmType,'done')" :confirm-hold="xs.b(i.confirmHold,false)" :cursor="xs.b(i.cursor,i.value.length)" :selection-start="xs.b(i.selectionStart,-1)" :selection-end="xs.b(i.selectionEnd,-1)" :input="eh" :focus="eh" :blur="eh" :confirm="eh" :name="i.name" :always-embed="xs.b(i.alwaysEmbed,false)" :adjust-position="xs.b(i.adjustPosition,true)" :hold-keyboard="xs.b(i.holdKeyboard,false)" :keyboardheightchange="eh" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        </wx-input>
    </div>`
    });
    registerComponent("tmpl_0_input_blur", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-input :value="i.value" :type="xs.b(i.type,'')" :password="xs.b(i.password,false)" :placeholder="i.placeholder" :placeholder-style="i.placeholderStyle" :placeholder-class="xs.b(i.placeholderClass,'input-placeholder')" :disabled="i.disabled" :maxlength="xs.b(i.maxlength,140)" :cursor-spacing="xs.b(i.cursorSpacing,0)" :confirm-type="xs.b(i.confirmType,'done')" :confirm-hold="xs.b(i.confirmHold,false)" :cursor="xs.b(i.cursor,i.value.length)" :selection-start="xs.b(i.selectionStart,-1)" :selection-end="xs.b(i.selectionEnd,-1)" :input="eh" :focus="eh" :blur="eh" :confirm="eh" :name="i.name" :always-embed="xs.b(i.alwaysEmbed,false)" :adjust-position="xs.b(i.adjustPosition,true)" :hold-keyboard="xs.b(i.holdKeyboard,false)" :keyboardheightchange="eh" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        </wx-input>
    </div>`
    });
    registerComponent("tmpl_0_scroll-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-scroll-view :scroll-x="xs.b(i.scrollX,false)" :scroll-y="xs.b(i.scrollY,false)" :upper-threshold="xs.b(i.upperThreshold,50)" :lower-threshold="xs.b(i.lowerThreshold,50)" :scroll-top="i.scrollTop" :scroll-left="i.scrollLeft" :scroll-into-view="i.scrollIntoView" :scroll-with-animation="xs.b(i.scrollWithAnimation,false)" :enable-back-to-top="xs.b(i.enableBackToTop,false)" :scrolltoupper="eh" :scrolltolower="eh" :scroll="eh" :touchstart="eh" :touchmove="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :enable-flex="xs.b(i.enableFlex,false)" :scroll-anchoring="xs.b(i.scrollAnchoring,false)" :refresher-enabled="xs.b(i.refresherEnabled,false)" :refresher-threshold="xs.b(i.refresherThreshold,45)" :refresher-default-style="xs.b(i.refresherDefaultStyle,'black')" :refresher-background="xs.b(i.refresherBackground,'#FFF')" :refresher-triggered="xs.b(i.refresherTriggered,false)" :enhanced="xs.b(i.enhanced,false)" :bounces="xs.b(i.bounces,true)" :show-scrollbar="xs.b(i.showScrollbar,true)" :paging-enabled="xs.b(i.pagingEnabled,false)" :fast-deceleration="xs.b(i.fastDeceleration,false)" :dragstart="eh" :dragging="eh" :dragend="eh" :refresherpulling="eh" :refresherrefresh="eh" :refresherrestore="eh" :refresherabort="eh" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-scroll-view>
    </div>`
    });
    registerComponent("tmpl_0_static-image", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-image :src="i.src" :mode="xs.b(i.mode,'scaleToFill')" :lazy-load="xs.b(i.lazyLoad,false)" :webp="xs.b(i.webp,false)" :show-menu-by-longpress="xs.b(i.showMenuByLongpress,false)" :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-image>
    </div>`
    });
    registerComponent("tmpl_0_image", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-image :src="i.src" :mode="xs.b(i.mode,'scaleToFill')" :lazy-load="xs.b(i.lazyLoad,false)" :error="eh" :load="eh" :touchstart="eh" :touchmove="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :webp="xs.b(i.webp,false)" :show-menu-by-longpress="xs.b(i.showMenuByLongpress,false)" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-image>
    </div>`
    });
    registerComponent("tmpl_0_#text", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <div >
            {{i.v}}
        </div>
    </div>`
    });
    registerComponent("tmpl_0_container", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <component :is="xs.a(0, i.nn, l)" :data="{i:i,cid:0,l:xs.f(l,i.nn)}" >
            
        </component>
    </div>`
    });
    registerComponent("tmpl_1_catch-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" catchtouchmove="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_1_static-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_1_pure-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_1_view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchmove="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_1_static-text", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-text :selectable="xs.b(i.selectable,false)" :space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-text>
    </div>`
    });
    registerComponent("tmpl_1_text", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-text :selectable="xs.b(i.selectable,false)" :space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-text>
    </div>`
    });
    registerComponent("tmpl_1_scroll-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-scroll-view :scroll-x="xs.b(i.scrollX,false)" :scroll-y="xs.b(i.scrollY,false)" :upper-threshold="xs.b(i.upperThreshold,50)" :lower-threshold="xs.b(i.lowerThreshold,50)" :scroll-top="i.scrollTop" :scroll-left="i.scrollLeft" :scroll-into-view="i.scrollIntoView" :scroll-with-animation="xs.b(i.scrollWithAnimation,false)" :enable-back-to-top="xs.b(i.enableBackToTop,false)" :scrolltoupper="eh" :scrolltolower="eh" :scroll="eh" :touchstart="eh" :touchmove="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :enable-flex="xs.b(i.enableFlex,false)" :scroll-anchoring="xs.b(i.scrollAnchoring,false)" :refresher-enabled="xs.b(i.refresherEnabled,false)" :refresher-threshold="xs.b(i.refresherThreshold,45)" :refresher-default-style="xs.b(i.refresherDefaultStyle,'black')" :refresher-background="xs.b(i.refresherBackground,'#FFF')" :refresher-triggered="xs.b(i.refresherTriggered,false)" :enhanced="xs.b(i.enhanced,false)" :bounces="xs.b(i.bounces,true)" :show-scrollbar="xs.b(i.showScrollbar,true)" :paging-enabled="xs.b(i.pagingEnabled,false)" :fast-deceleration="xs.b(i.fastDeceleration,false)" :dragstart="eh" :dragging="eh" :dragend="eh" :refresherpulling="eh" :refresherrefresh="eh" :refresherrestore="eh" :refresherabort="eh" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-scroll-view>
    </div>`
    });
    registerComponent("tmpl_1_container", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <component :is="xs.a(1, i.nn, l)" :data="{i:i,cid:1,l:xs.f(l,i.nn)}" >
            
        </component>
    </div>`
    });
    registerComponent("tmpl_2_catch-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" catchtouchmove="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_2_static-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_2_pure-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_2_view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchmove="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_2_static-text", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-text :selectable="xs.b(i.selectable,false)" :space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-text>
    </div>`
    });
    registerComponent("tmpl_2_text", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-text :selectable="xs.b(i.selectable,false)" :space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-text>
    </div>`
    });
    registerComponent("tmpl_2_scroll-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-scroll-view :scroll-x="xs.b(i.scrollX,false)" :scroll-y="xs.b(i.scrollY,false)" :upper-threshold="xs.b(i.upperThreshold,50)" :lower-threshold="xs.b(i.lowerThreshold,50)" :scroll-top="i.scrollTop" :scroll-left="i.scrollLeft" :scroll-into-view="i.scrollIntoView" :scroll-with-animation="xs.b(i.scrollWithAnimation,false)" :enable-back-to-top="xs.b(i.enableBackToTop,false)" :scrolltoupper="eh" :scrolltolower="eh" :scroll="eh" :touchstart="eh" :touchmove="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :enable-flex="xs.b(i.enableFlex,false)" :scroll-anchoring="xs.b(i.scrollAnchoring,false)" :refresher-enabled="xs.b(i.refresherEnabled,false)" :refresher-threshold="xs.b(i.refresherThreshold,45)" :refresher-default-style="xs.b(i.refresherDefaultStyle,'black')" :refresher-background="xs.b(i.refresherBackground,'#FFF')" :refresher-triggered="xs.b(i.refresherTriggered,false)" :enhanced="xs.b(i.enhanced,false)" :bounces="xs.b(i.bounces,true)" :show-scrollbar="xs.b(i.showScrollbar,true)" :paging-enabled="xs.b(i.pagingEnabled,false)" :fast-deceleration="xs.b(i.fastDeceleration,false)" :dragstart="eh" :dragging="eh" :dragend="eh" :refresherpulling="eh" :refresherrefresh="eh" :refresherrestore="eh" :refresherabort="eh" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-scroll-view>
    </div>`
    });
    registerComponent("tmpl_2_container", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <component :is="xs.a(2, i.nn, l)" :data="{i:i,cid:2,l:xs.f(l,i.nn)}" >
            
        </component>
    </div>`
    });
    registerComponent("tmpl_3_catch-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" catchtouchmove="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_3_static-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_3_pure-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_3_view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchmove="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_3_static-text", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-text :selectable="xs.b(i.selectable,false)" :space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-text>
    </div>`
    });
    registerComponent("tmpl_3_text", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-text :selectable="xs.b(i.selectable,false)" :space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-text>
    </div>`
    });
    registerComponent("tmpl_3_scroll-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-scroll-view :scroll-x="xs.b(i.scrollX,false)" :scroll-y="xs.b(i.scrollY,false)" :upper-threshold="xs.b(i.upperThreshold,50)" :lower-threshold="xs.b(i.lowerThreshold,50)" :scroll-top="i.scrollTop" :scroll-left="i.scrollLeft" :scroll-into-view="i.scrollIntoView" :scroll-with-animation="xs.b(i.scrollWithAnimation,false)" :enable-back-to-top="xs.b(i.enableBackToTop,false)" :scrolltoupper="eh" :scrolltolower="eh" :scroll="eh" :touchstart="eh" :touchmove="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :enable-flex="xs.b(i.enableFlex,false)" :scroll-anchoring="xs.b(i.scrollAnchoring,false)" :refresher-enabled="xs.b(i.refresherEnabled,false)" :refresher-threshold="xs.b(i.refresherThreshold,45)" :refresher-default-style="xs.b(i.refresherDefaultStyle,'black')" :refresher-background="xs.b(i.refresherBackground,'#FFF')" :refresher-triggered="xs.b(i.refresherTriggered,false)" :enhanced="xs.b(i.enhanced,false)" :bounces="xs.b(i.bounces,true)" :show-scrollbar="xs.b(i.showScrollbar,true)" :paging-enabled="xs.b(i.pagingEnabled,false)" :fast-deceleration="xs.b(i.fastDeceleration,false)" :dragstart="eh" :dragging="eh" :dragend="eh" :refresherpulling="eh" :refresherrefresh="eh" :refresherrestore="eh" :refresherabort="eh" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-scroll-view>
    </div>`
    });
    registerComponent("tmpl_3_container", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <component :is="xs.a(3, i.nn, l)" :data="{i:i,cid:3,l:xs.f(l,i.nn)}" >
            
        </component>
    </div>`
    });
    registerComponent("tmpl_4_catch-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" catchtouchmove="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_4_static-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_4_pure-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_4_view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchmove="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_4_static-text", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-text :selectable="xs.b(i.selectable,false)" :space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-text>
    </div>`
    });
    registerComponent("tmpl_4_text", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-text :selectable="xs.b(i.selectable,false)" :space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-text>
    </div>`
    });
    registerComponent("tmpl_4_container", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <component :is="xs.a(4, i.nn, l)" :data="{i:i,cid:4,l:xs.f(l,i.nn)}" >
            
        </component>
    </div>`
    });
    registerComponent("tmpl_5_catch-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" catchtouchmove="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_5_static-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_5_pure-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_5_view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchmove="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_5_static-text", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-text :selectable="xs.b(i.selectable,false)" :space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-text>
    </div>`
    });
    registerComponent("tmpl_5_text", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-text :selectable="xs.b(i.selectable,false)" :space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-text>
    </div>`
    });
    registerComponent("tmpl_5_container", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <component :is="xs.a(5, i.nn, l)" :data="{i:i,cid:5,l:xs.f(l,i.nn)}" >
            
        </component>
    </div>`
    });
    registerComponent("tmpl_6_catch-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" catchtouchmove="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_6_static-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_6_pure-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_6_view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchmove="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_6_text", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-text :selectable="xs.b(i.selectable,false)" :space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-text>
    </div>`
    });
    registerComponent("tmpl_6_container", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <component :is="xs.a(6, i.nn, l)" :data="{i:i,cid:6,l:xs.f(l,i.nn)}" >
            
        </component>
    </div>`
    });
    registerComponent("tmpl_7_catch-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" catchtouchmove="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_7_static-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_7_pure-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_7_view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchmove="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_7_text", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-text :selectable="xs.b(i.selectable,false)" :space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-text>
    </div>`
    });
    registerComponent("tmpl_7_container", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <component :is="xs.a(7, i.nn, l)" :data="{i:i,cid:7,l:xs.f(l,i.nn)}" >
            
        </component>
    </div>`
    });
    registerComponent("tmpl_8_catch-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" catchtouchmove="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_8_static-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_8_pure-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_8_view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchmove="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_8_text", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-text :selectable="xs.b(i.selectable,false)" :space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-text>
    </div>`
    });
    registerComponent("tmpl_8_container", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <component :is="xs.a(8, i.nn, l)" :data="{i:i,cid:8,l:xs.f(l,i.nn)}" >
            
        </component>
    </div>`
    });
    registerComponent("tmpl_9_catch-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" catchtouchmove="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_9_static-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_9_pure-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_9_view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchmove="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_9_text", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-text :selectable="xs.b(i.selectable,false)" :space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-text>
    </div>`
    });
    registerComponent("tmpl_9_container", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <component :is="xs.a(9, i.nn, l)" :data="{i:i,cid:9,l:xs.f(l,i.nn)}" >
            
        </component>
    </div>`
    });
    registerComponent("tmpl_10_catch-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" catchtouchmove="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_10_static-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_10_pure-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_10_view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchmove="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_10_text", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-text :selectable="xs.b(i.selectable,false)" :space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-text>
    </div>`
    });
    registerComponent("tmpl_10_container", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <component :is="xs.a(10, i.nn, l)" :data="{i:i,cid:10,l:xs.f(l,i.nn)}" >
            
        </component>
    </div>`
    });
    registerComponent("tmpl_11_catch-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" catchtouchmove="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_11_static-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_11_pure-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_11_view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchmove="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_11_text", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-text :selectable="xs.b(i.selectable,false)" :space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-text>
    </div>`
    });
    registerComponent("tmpl_11_container", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <component :is="xs.a(11, i.nn, l)" :data="{i:i,cid:11,l:xs.f(l,i.nn)}" >
            
        </component>
    </div>`
    });
    registerComponent("tmpl_12_catch-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" catchtouchmove="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_12_static-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_12_pure-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_12_view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchmove="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_12_text", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-text :selectable="xs.b(i.selectable,false)" :space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-text>
    </div>`
    });
    registerComponent("tmpl_12_container", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <component :is="xs.a(12, i.nn, l)" :data="{i:i,cid:12,l:xs.f(l,i.nn)}" >
            
        </component>
    </div>`
    });
    registerComponent("tmpl_13_catch-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" catchtouchmove="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_13_static-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_13_pure-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_13_view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchmove="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_13_text", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-text :selectable="xs.b(i.selectable,false)" :space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-text>
    </div>`
    });
    registerComponent("tmpl_13_container", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <component :is="xs.a(13, i.nn, l)" :data="{i:i,cid:13,l:xs.f(l,i.nn)}" >
            
        </component>
    </div>`
    });
    registerComponent("tmpl_14_catch-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" catchtouchmove="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_14_static-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_14_pure-view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :style="i.st" :class="i.cl" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_14_view", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-view :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" :animation="i.animation" :touchstart="eh" :touchmove="eh" :touchend="eh" :touchcancel="eh" :longpress="eh" :animationstart="eh" :animationiteration="eh" :animationend="eh" :transitionend="eh" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-view>
    </div>`
    });
    registerComponent("tmpl_14_text", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <wx-text :selectable="xs.b(i.selectable,false)" :space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" :style="i.st" :class="i.cl" :tap="eh" :id="i.uid" >
            
        <div v-for="item in i.cn" key="uid" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </wx-text>
    </div>`
    });
    registerComponent("tmpl_14_container", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <component :is="xs.a(14, i.nn, l)" :data="{i:i,cid:14,l:xs.f(l,i.nn)}" >
            
        </component>
    </div>`
    });
    registerComponent("tmpl_15_container", {
      data() {
        return {
          xs,
          ...this["$props"].data
        };
      },
      template: `<div>
        <div :v-if="i.nn" >
            
        <component is="tmpl_0_#text" :data="{i:i}" >
            
        </component>
    
        </div>
    
        <div >
            
        <wx-comp :i="i" :l="l" >
            
        </wx-comp>
    
        </div>
    </div>`
    });
  }
});

// taro/dist/pages/index/index.wxml
var require_index = __commonJS({
  "taro/dist/pages/index/index.wxml"() {
    require_base();
    var page = getPage("pages/index/index");
    page.template = `<div>
        <component is="taro_tmpl" :data="{root:root}" >
            
        </component>
    </div>`;
  }
});

// taro/dist/pages/index/index.js
var require_index2 = __commonJS({
  "taro/dist/pages/index/index.js"() {
    require_index();
    window["__wxRoute"] = "pages/index/index";
    var page = getPage("pages/index/index");
    page.json = `{"navigationBarTitleText":"\u9996\u9875","usingComponents":{"custom-wrapper":"../../custom-wrapper","comp":"../../comp"}}`;
    (wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"], {
      "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./src/pages/index/index.jsx": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function(window2) {
          __webpack_require__.d(__webpack_exports__, "a", function() {
            return Index;
          });
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/classCallCheck.js");
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/createClass.js");
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/assertThisInitialized.js");
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/inherits.js");
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/createSuper.js");
          var _Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/defineProperty.js");
          var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
          var react__WEBPACK_IMPORTED_MODULE_6___default = /* @__PURE__ */ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
          var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/_@tarojs_plugin-platform-weapp@3.3.2@@tarojs/plugin-platform-weapp/dist/components-react.js");
          var _index_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/pages/index/index.less");
          var _index_less__WEBPACK_IMPORTED_MODULE_8___default = /* @__PURE__ */ __webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_8__);
          var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js");
          var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /* @__PURE__ */ __webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
          var Index = /* @__PURE__ */ function(_Component) {
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["a"])(Index2, _Component);
            var _super = Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["a"])(Index2);
            function Index2(props) {
              var _this;
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["a"])(this, Index2);
              _this = _super.call(this, props);
              Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["a"])(_this), "onAdd", function() {
                _this.setState({
                  showView: !_this.state.showView,
                  number: _this.state.number + 1
                });
              });
              _this.state = {
                text: "Hello World",
                number: 0,
                showView: false
              };
              return _this;
            }
            Object(_Users_lv_Desktop_tarodemo_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["a"])(Index2, [{
              key: "componentWillMount",
              value: function componentWillMount() {
                console.log("componentWillMount", window2);
              }
            }, {
              key: "componentDidMount",
              value: function componentDidMount() {
                var _this2 = this;
                console.log("componentDidMount");
                setTimeout(function() {
                  _this2.setState({
                    text: "ceshi1231231"
                  });
                }, 2e3);
              }
            }, {
              key: "componentWillUnmount",
              value: function componentWillUnmount() {
                console.log("componentWillUnmount");
              }
            }, {
              key: "componentDidShow",
              value: function componentDidShow() {
                console.log("componentDidShow");
              }
            }, {
              key: "componentDidHide",
              value: function componentDidHide() {
                console.log("componentDidHide");
              }
            }, {
              key: "componentDidUpdate",
              value: function componentDidUpdate(prevProps, prevState) {
                console.log("componentDidUpdate");
              }
            }, {
              key: "render",
              value: function render() {
                console.log("\u8F93\u51FArender");
                return /* @__PURE__ */ Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["e"], {
                  children: [/* @__PURE__ */ Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["e"], {
                    children: "2123"
                  }), /* @__PURE__ */ Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["d"], {
                    children: this.state.text
                  }), /* @__PURE__ */ Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["b"], {
                    src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F28%2F20180428114906_ulvqd.jpg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632765222&t=7ec7538a03a046f3361749b9bf47bae5"
                  }), /* @__PURE__ */ Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["a"], {
                    type: "primary",
                    onClick: this.onAdd,
                    children: this.state.number
                  }), /* @__PURE__ */ Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["c"], {
                    value: "\u6D4B\u8BD5111"
                  }), this.state.showView ? /* @__PURE__ */ Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["d"], {
                    children: "\u6D4B\u8BD5"
                  }) : /* @__PURE__ */ Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["c"], {
                    value: "\u8F93\u51FA"
                  })]
                });
              }
            }]);
            return Index2;
          }(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
        }).call(this, __webpack_require__("./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js")["window"]);
      },
      "./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js": function(module2, exports2, __webpack_require__) {
        "use strict";
        __webpack_require__("./node_modules/_object-assign@4.1.1@object-assign/index.js");
        var f = __webpack_require__("./node_modules/_react@17.0.2@react/cjs/react.production.min.js"), g = 60103;
        exports2.Fragment = 60107;
        if (typeof Symbol === "function" && Symbol.for) {
          var h = Symbol.for;
          g = h("react.element");
          exports2.Fragment = h("react.fragment");
        }
        var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        function q(c, a, k) {
          var b, d = {}, e = null, l = null;
          k !== void 0 && (e = "" + k);
          a.key !== void 0 && (e = "" + a.key);
          a.ref !== void 0 && (l = a.ref);
          for (b in a) {
            n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
          }
          if (c && c.defaultProps)
            for (b in a = c.defaultProps, a) {
              d[b] === void 0 && (d[b] = a[b]);
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
        exports2.jsx = q;
        exports2.jsxs = q;
      },
      "./src/pages/index/index.jsx": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js");
        var _node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./src/pages/index/index.jsx");
        var config = { "navigationBarTitleText": "\u9996\u9875" };
        var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__["a"], "pages/index/index", { root: { cn: [] } }, config || {}));
      },
      "./src/pages/index/index.less": function(module2, exports2, __webpack_require__) {
      }
    }, [["./src/pages/index/index.jsx", "runtime", "taro", "vendors"]]]);
  }
});

// <stdin>
require_app();
require_index2();
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
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
/** @license React v0.20.2
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/** @license React v0.26.1
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
