var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// taro-vue2/dist/runtime.js
var require_runtime = __commonJS({
  "taro-vue2/dist/runtime.js"() {
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

// taro-vue2/dist/vendors.js
var require_vendors = __commonJS({
  "taro-vue2/dist/vendors.js"() {
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
        var _Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/typeof.js");
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
            if (Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["a"])(options) !== "object") {
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
        var _Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/typeof.js");
        var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_inversify@5.1.1@inversify/es/constants/error_msgs.js");
        function getServiceIdentifierAsString(serviceIdentifier) {
          if (typeof serviceIdentifier === "function") {
            var _serviceIdentifier = serviceIdentifier;
            return _serviceIdentifier.name;
          } else if (Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["a"])(serviceIdentifier) === "symbol") {
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

// taro-vue2/dist/taro.js
var require_taro = __commonJS({
  "taro-vue2/dist/taro.js"() {
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
          var _Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/slicedToArray.js");
          var _Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/regenerator/index.js");
          var _Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__.n(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
          var _Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/asyncToGenerator.js");
          var _Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/set.js");
          var _Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/toConsumableArray.js");
          var _Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/get.js");
          var _Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/getPrototypeOf.js");
          var _Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/wrapNativeSuper.js");
          var _Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/toArray.js");
          var _Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/assertThisInitialized.js");
          var _Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/inherits.js");
          var _Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/createSuper.js");
          var _Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/defineProperty.js");
          var _Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/classCallCheck.js");
          var _Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/createClass.js");
          var _Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/typeof.js");
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
                var usePolyfill = (typeof process === "undefined" ? "undefined" : Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(process)) === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
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
                  switch (Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(x)) {
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
                  return Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(x) === "symbol";
                }
                function IsObject(x) {
                  return Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(x) === "object" ? x !== null : typeof x === "function";
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
            if ((typeof Reflect === "undefined" ? "undefined" : Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(Reflect)) === "object" && typeof Reflect.decorate === "function")
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
            if ((typeof Reflect === "undefined" ? "undefined" : Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(Reflect)) === "object" && typeof Reflect.metadata === "function")
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
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, TaroEventTarget2);
              this.__handlers = {};
              this.hooks = hooks2;
            }
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(TaroEventTarget2, [{
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
              return _ref = {}, Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["a"])(_ref, "v", node.nodeValue), Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["a"])(_ref, "nn", nodeName), _ref;
            }
            var data = (_data = {}, Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["a"])(_data, "nn", nodeName), Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["a"])(_data, "uid", node.uid), _data);
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
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["a"])(TaroNode2, _TaroEventTarget);
            var _super = Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["a"])(TaroNode2);
            function TaroNode2(impl, getElement2, hooks2) {
              var _this;
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, TaroNode2);
              _this = _super.call(this, hooks2);
              _this.parentNode = null;
              _this.childNodes = [];
              _this.hydrate = function(node) {
                return function() {
                  return hydrate(node);
                };
              };
              impl.bind(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["a"])(_this));
              _this._getElement = getElement2;
              _this.uid = "_n_".concat(nodeId());
              eventSource.set(_this.uid, Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["a"])(_this));
              return _this;
            }
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(TaroNode2, [{
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
                  if ([PROPS, DATASET].includes(key) && Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(value) === OBJECT) {
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
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["a"])(TaroText2, _TaroNode);
            var _super2 = Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["a"])(TaroText2);
            function TaroText2(nodeImpl, getElement2, hooks2) {
              var _this4;
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, TaroText2);
              _this4 = _super2.call(this, nodeImpl, getElement2, hooks2);
              _this4.nodeType = 3;
              _this4.nodeName = "#text";
              return _this4;
            }
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(TaroText2, [{
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
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, Style2);
              this._element = element;
              this._usedStyleProp = new Set();
              this._value = {};
            }
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(Style2, [{
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
                  var _rule$split = rule.split(":"), _rule$split2 = Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_8__["a"])(_rule$split), propName = _rule$split2[0], valList = _rule$split2.slice(1);
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
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["a"])(ClassList2, _Set2);
            var _super3 = Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["a"])(ClassList2);
            function ClassList2(className, el) {
              var _thisSuper, _this8;
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, ClassList2);
              _this8 = _super3.call(this);
              className.trim().split(/\s+/).forEach(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])((_thisSuper = Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["a"])(_this8), Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(ClassList2.prototype)), "add", _thisSuper).bind(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["a"])(_this8)));
              _this8.el = el;
              return _this8;
            }
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(ClassList2, [{
              key: "value",
              get: function get2() {
                return Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["a"])(this).join(" ");
              }
            }, {
              key: "add",
              value: function add(s) {
                Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(ClassList2.prototype), "add", this).call(this, s);
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
                Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(ClassList2.prototype), "delete", this).call(this, s);
                this._update();
              }
            }, {
              key: "toggle",
              value: function toggle(s) {
                if (Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(ClassList2.prototype), "has", this).call(this, s)) {
                  Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(ClassList2.prototype), "delete", this).call(this, s);
                } else {
                  Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(ClassList2.prototype), "add", this).call(this, s);
                }
                this._update();
              }
            }, {
              key: "replace",
              value: function replace(s1, s2) {
                Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(ClassList2.prototype), "delete", this).call(this, s1);
                Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(ClassList2.prototype), "add", this).call(this, s2);
                this._update();
              }
            }, {
              key: "contains",
              value: function contains(s) {
                return Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(ClassList2.prototype), "has", this).call(this, s);
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
          }(/* @__PURE__ */ Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__["a"])(Set));
          var TaroElement = /* @__PURE__ */ function(_TaroNode2) {
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["a"])(TaroElement2, _TaroNode2);
            var _super4 = Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["a"])(TaroElement2);
            function TaroElement2(nodeImpl, getElement2, hooks2, elementImpl) {
              var _this9;
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, TaroElement2);
              _this9 = _super4.call(this, nodeImpl, getElement2, hooks2);
              _this9.props = {};
              _this9.dataset = _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__["EMPTY_OBJ"];
              elementImpl.bind(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["a"])(_this9));
              _this9.nodeType = 1;
              _this9.style = new Style(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["a"])(_this9));
              hooks2.patchElement(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["a"])(_this9));
              return _this9;
            }
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(TaroElement2, [{
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
                Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_3__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(TaroElement2.prototype), "textContent", text, this, true);
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
                Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(TaroElement2.prototype), "addEventListener", this).call(this, type, handler, options2);
              }
            }, {
              key: "removeEventListener",
              value: function removeEventListener(type, handler) {
                Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(TaroElement2.prototype), "removeEventListener", this).call(this, type, handler);
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
          var freeGlobal = (typeof global === "undefined" ? "undefined" : Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(global)) == "object" && global && global.Object === Object && global;
          var freeSelf = (typeof self === "undefined" ? "undefined" : Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(self)) == "object" && self && self.Object === Object && self;
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
            return value != null && Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(value) == "object";
          }
          var symbolTag = "[object Symbol]";
          function isSymbol(value) {
            return Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(value) == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
          }
          var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
          function isKey(value, object) {
            if (isArray(value)) {
              return false;
            }
            var type = Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(value);
            if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
              return true;
            }
            return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
          }
          function isObject(value) {
            var type = Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(value);
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
            var type = Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__["a"])(value);
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
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, Performance2);
              this.recorder = new Map();
            }
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(Performance2, [{
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
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["a"])(TaroRootElement2, _TaroElement);
            var _super5 = Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["a"])(TaroRootElement2);
            function TaroRootElement2(nodeImpl, getElement2, hooks2, elementImpl, eventCenter2) {
              var _this11;
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, TaroRootElement2);
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
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(TaroRootElement2, [{
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
                                data: Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["a"])({}, "i.".concat(splitedPath), data[p])
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
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["a"])(FormElement2, _TaroElement2);
            var _super6 = Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["a"])(FormElement2);
            function FormElement2() {
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, FormElement2);
              return _super6.apply(this, arguments);
            }
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(FormElement2, [{
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
                return Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["a"])(FormElement2.prototype), "dispatchEvent", this).call(this, event);
              }
            }]);
            return FormElement2;
          }(TaroElement);
          var TaroNodeImpl = /* @__PURE__ */ function() {
            function TaroNodeImpl2(getElement2, innerHTMLImpl, adjacentImpl) {
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, TaroNodeImpl2);
              this.getDoc = function() {
                return getElement2(ElementNames.Document)();
              };
              this.innerHTMLImpl = innerHTMLImpl;
              this.adjacentImpl = adjacentImpl;
            }
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(TaroNodeImpl2, [{
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
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, TaroElementImpl2);
              this.rectImpl = rectImpl;
            }
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(TaroElementImpl2, [{
              key: "bind",
              value: function bind(ctx) {
                this.bindRect(ctx);
              }
            }, {
              key: "bindRect",
              value: function bindRect(ctx) {
                var impl = this.rectImpl;
                ctx.getBoundingClientRect = /* @__PURE__ */ Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["a"])(/* @__PURE__ */ _Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
                  var _len, args, _key, _args = arguments;
                  return _Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["a"])(TaroDocument2, _TaroElement3);
            var _super7 = Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["a"])(TaroDocument2);
            function TaroDocument2(nodeImpl, getElement2, hooks2, elementImpl, getText) {
              var _this13;
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, TaroDocument2);
              _this13 = _super7.call(this, nodeImpl, getElement2, hooks2, elementImpl);
              _this13._getText = getText;
              _this13.nodeType = 9;
              _this13.nodeName = DOCUMENT_ELEMENT_NAME;
              return _this13;
            }
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(TaroDocument2, [{
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
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, Scaner2);
              this.tokens = [];
              this.position = initPosition();
              this.html = html;
            }
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(Scaner2, [{
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
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, StyleTagParser2);
              this.styles = [];
            }
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(StyleTagParser2, [{
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
                    var _$1$split = $1.split("="), _$1$split2 = Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["a"])(_$1$split, 2), key = _$1$split2[0], value = _$1$split2[1];
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
                var _splitEqual = splitEqual(attr), _splitEqual2 = Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["a"])(_splitEqual, 2), key = _splitEqual2[0], value = _splitEqual2[1];
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
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, Hooks2);
            }
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(Hooks2, [{
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
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, TaroEvent2);
              this._stop = false;
              this._end = false;
              this.defaultPrevented = false;
              this.timeStamp = Date.now();
              this.type = type.toLowerCase();
              this.mpEvent = event;
              this.bubbles = Boolean(opts && opts.bubbles);
              this.cancelable = Boolean(opts && opts.cancelable);
            }
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(TaroEvent2, [{
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
            var globalProperties = [].concat(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["a"])(Object.getOwnPropertyNames(global || win)), Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["a"])(Object.getOwnPropertySymbols(global || win)));
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
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, Events2);
              if (typeof opts !== "undefined" && opts.callbacks) {
                this.callbacks = opts.callbacks;
              } else {
                this.callbacks = {};
              }
            }
            Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(Events2, [{
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
                  value: Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["a"])({}, "nn", "view")
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
                Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["a"])(Page2, _R$Component);
                var _super8 = Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["a"])(Page2);
                function Page2() {
                  var _this22;
                  Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, Page2);
                  _this22 = _super8.apply(this, arguments);
                  _this22.state = {
                    hasError: false
                  };
                  return _this22;
                }
                Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(Page2, [{
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
                  next[item] = [next[item]].concat(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["a"])(prev[item]));
                } else {
                  next[item] = [].concat(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["a"])(next[item] || []), Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["a"])(prev[item]));
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
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["a"])(AppWrapper2, _R$Component2);
              var _super9 = Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["a"])(AppWrapper2);
              function AppWrapper2() {
                var _this23;
                Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, AppWrapper2);
                _this23 = _super9.apply(this, arguments);
                _this23.pages = [];
                _this23.elements = [];
                return _this23;
              }
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(AppWrapper2, [{
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
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["a"])(NativeComponentWrapper2, _R$Component3);
              var _super10 = Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["a"])(NativeComponentWrapper2);
              function NativeComponentWrapper2() {
                var _this25;
                Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, NativeComponentWrapper2);
                _this25 = _super10.apply(this, arguments);
                _this25.root = R2.createRef();
                _this25.ctx = _this25.props.getCtx();
                return _this25;
              }
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(NativeComponentWrapper2, [{
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
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["a"])(Entry2, _R$Component4);
              var _super11 = Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["a"])(Entry2);
              function Entry2() {
                var _this26;
                Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__["a"])(this, Entry2);
                _this26 = _super11.apply(this, arguments);
                _this26.state = {
                  components: []
                };
                return _this26;
              }
              Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__["a"])(Entry2, [{
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
                    components: [].concat(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["a"])(this.state.components), [item])
                  });
                }
              }, {
                key: "unmount",
                value: function unmount(compId) {
                  var components = this.state.components;
                  var index = components.findIndex(function(item) {
                    return item.compId === compId;
                  });
                  var next = [].concat(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["a"])(components.slice(0, index)), Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["a"])(components.slice(index + 1)));
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
                  inst[lifecycle] = [].concat(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["a"])(inst[lifecycle] || []), [callback]);
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

// taro-vue2/dist/app.js
var require_app = __commonJS({
  "taro-vue2/dist/app.js"() {
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
        var _app_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app.less");
        var _app_less__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(_app_less__WEBPACK_IMPORTED_MODULE_0__);
        var App2 = {
          onShow: function onShow(options) {
          },
          render: function render(h) {
            return h("block", this.$slots.default);
          }
        };
        __webpack_exports__["a"] = App2;
      },
      "./node_modules/_setimmediate@1.0.5@setimmediate/setImmediate.js": function(module2, exports2, __webpack_require__) {
        (function(global, process) {
          (function(global2, undefined2) {
            "use strict";
            if (global2.setImmediate) {
              return;
            }
            var nextHandle = 1;
            var tasksByHandle = {};
            var currentlyRunningATask = false;
            var doc = global2.document;
            var registerImmediate;
            function setImmediate(callback) {
              if (typeof callback !== "function") {
                callback = new Function("" + callback);
              }
              var args = new Array(arguments.length - 1);
              for (var i = 0; i < args.length; i++) {
                args[i] = arguments[i + 1];
              }
              var task = {
                callback,
                args
              };
              tasksByHandle[nextHandle] = task;
              registerImmediate(nextHandle);
              return nextHandle++;
            }
            function clearImmediate(handle) {
              delete tasksByHandle[handle];
            }
            function run(task) {
              var callback = task.callback;
              var args = task.args;
              switch (args.length) {
                case 0:
                  callback();
                  break;
                case 1:
                  callback(args[0]);
                  break;
                case 2:
                  callback(args[0], args[1]);
                  break;
                case 3:
                  callback(args[0], args[1], args[2]);
                  break;
                default:
                  callback.apply(undefined2, args);
                  break;
              }
            }
            function runIfPresent(handle) {
              if (currentlyRunningATask) {
                setTimeout(runIfPresent, 0, handle);
              } else {
                var task = tasksByHandle[handle];
                if (task) {
                  currentlyRunningATask = true;
                  try {
                    run(task);
                  } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                  }
                }
              }
            }
            function installNextTickImplementation() {
              registerImmediate = function registerImmediate2(handle) {
                process.nextTick(function() {
                  runIfPresent(handle);
                });
              };
            }
            function canUsePostMessage() {
              if (global2.postMessage && !global2.importScripts) {
                var postMessageIsAsynchronous = true;
                var oldOnMessage = global2.onmessage;
                global2.onmessage = function() {
                  postMessageIsAsynchronous = false;
                };
                global2.postMessage("", "*");
                global2.onmessage = oldOnMessage;
                return postMessageIsAsynchronous;
              }
            }
            function installPostMessageImplementation() {
              var messagePrefix = "setImmediate$" + Math.random() + "$";
              var onGlobalMessage = function onGlobalMessage2(event) {
                if (event.source === global2 && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                  runIfPresent(+event.data.slice(messagePrefix.length));
                }
              };
              if (global2.addEventListener) {
                global2.addEventListener("message", onGlobalMessage, false);
              } else {
                global2.attachEvent("onmessage", onGlobalMessage);
              }
              registerImmediate = function registerImmediate2(handle) {
                global2.postMessage(messagePrefix + handle, "*");
              };
            }
            function installMessageChannelImplementation() {
              var channel = new MessageChannel();
              channel.port1.onmessage = function(event) {
                var handle = event.data;
                runIfPresent(handle);
              };
              registerImmediate = function registerImmediate2(handle) {
                channel.port2.postMessage(handle);
              };
            }
            function installReadyStateChangeImplementation() {
              var html = doc.documentElement;
              registerImmediate = function registerImmediate2(handle) {
                var script = doc.createElement("script");
                script.onreadystatechange = function() {
                  runIfPresent(handle);
                  script.onreadystatechange = null;
                  html.removeChild(script);
                  script = null;
                };
                html.appendChild(script);
              };
            }
            function installSetTimeoutImplementation() {
              registerImmediate = function registerImmediate2(handle) {
                setTimeout(runIfPresent, 0, handle);
              };
            }
            var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global2);
            attachTo = attachTo && attachTo.setTimeout ? attachTo : global2;
            if ({}.toString.call(global2.process) === "[object process]") {
              installNextTickImplementation();
            } else if (canUsePostMessage()) {
              installPostMessageImplementation();
            } else if (global2.MessageChannel) {
              installMessageChannelImplementation();
            } else if (doc && "onreadystatechange" in doc.createElement("script")) {
              installReadyStateChangeImplementation();
            } else {
              installSetTimeoutImplementation();
            }
            attachTo.setImmediate = setImmediate;
            attachTo.clearImmediate = clearImmediate;
          })(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
        }).call(this, __webpack_require__("./node_modules/_webpack@4.46.0@webpack/buildin/global.js"), __webpack_require__("./node_modules/_process@0.11.10@process/browser.js"));
      },
      "./node_modules/_timers-browserify@2.0.12@timers-browserify/main.js": function(module2, exports2, __webpack_require__) {
        (function(global, window2) {
          var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window2;
          var apply = Function.prototype.apply;
          exports2.setTimeout = function() {
            return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
          };
          exports2.setInterval = function() {
            return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
          };
          exports2.clearTimeout = exports2.clearInterval = function(timeout) {
            if (timeout) {
              timeout.close();
            }
          };
          function Timeout(id, clearFn) {
            this._id = id;
            this._clearFn = clearFn;
          }
          Timeout.prototype.unref = Timeout.prototype.ref = function() {
          };
          Timeout.prototype.close = function() {
            this._clearFn.call(scope, this._id);
          };
          exports2.enroll = function(item, msecs) {
            clearTimeout(item._idleTimeoutId);
            item._idleTimeout = msecs;
          };
          exports2.unenroll = function(item) {
            clearTimeout(item._idleTimeoutId);
            item._idleTimeout = -1;
          };
          exports2._unrefActive = exports2.active = function(item) {
            clearTimeout(item._idleTimeoutId);
            var msecs = item._idleTimeout;
            if (msecs >= 0) {
              item._idleTimeoutId = setTimeout(function onTimeout() {
                if (item._onTimeout)
                  item._onTimeout();
              }, msecs);
            }
          };
          __webpack_require__("./node_modules/_setimmediate@1.0.5@setimmediate/setImmediate.js");
          exports2.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
          exports2.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
        }).call(this, __webpack_require__("./node_modules/_webpack@4.46.0@webpack/buildin/global.js"), __webpack_require__("./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js")["window"]);
      },
      "./node_modules/_vue@2.6.14@vue/dist/vue.runtime.esm.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function(window2, global, document, setImmediate) {
          var _Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@babel_runtime@7.15.3@@babel/runtime/helpers/esm/typeof.js");
          var emptyObject = Object.freeze({});
          function isUndef(v) {
            return v === void 0 || v === null;
          }
          function isDef(v) {
            return v !== void 0 && v !== null;
          }
          function isTrue(v) {
            return v === true;
          }
          function isFalse(v) {
            return v === false;
          }
          function isPrimitive(value) {
            return typeof value === "string" || typeof value === "number" || Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["a"])(value) === "symbol" || typeof value === "boolean";
          }
          function isObject(obj) {
            return obj !== null && Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["a"])(obj) === "object";
          }
          var _toString = Object.prototype.toString;
          function toRawType(value) {
            return _toString.call(value).slice(8, -1);
          }
          function isPlainObject(obj) {
            return _toString.call(obj) === "[object Object]";
          }
          function isRegExp(v) {
            return _toString.call(v) === "[object RegExp]";
          }
          function isValidArrayIndex(val) {
            var n = parseFloat(String(val));
            return n >= 0 && Math.floor(n) === n && isFinite(val);
          }
          function isPromise(val) {
            return isDef(val) && typeof val.then === "function" && typeof val.catch === "function";
          }
          function toString(val) {
            return val == null ? "" : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
          }
          function toNumber(val) {
            var n = parseFloat(val);
            return isNaN(n) ? val : n;
          }
          function makeMap(str, expectsLowerCase) {
            var map = Object.create(null);
            var list = str.split(",");
            for (var i = 0; i < list.length; i++) {
              map[list[i]] = true;
            }
            return expectsLowerCase ? function(val) {
              return map[val.toLowerCase()];
            } : function(val) {
              return map[val];
            };
          }
          var isBuiltInTag = makeMap("slot,component", true);
          var isReservedAttribute = makeMap("key,ref,slot,slot-scope,is");
          function remove(arr, item) {
            if (arr.length) {
              var index2 = arr.indexOf(item);
              if (index2 > -1) {
                return arr.splice(index2, 1);
              }
            }
          }
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          function hasOwn(obj, key) {
            return hasOwnProperty.call(obj, key);
          }
          function cached(fn) {
            var cache = Object.create(null);
            return function cachedFn(str) {
              var hit = cache[str];
              return hit || (cache[str] = fn(str));
            };
          }
          var camelizeRE = /-(\w)/g;
          var camelize = cached(function(str) {
            return str.replace(camelizeRE, function(_, c) {
              return c ? c.toUpperCase() : "";
            });
          });
          var capitalize = cached(function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
          });
          var hyphenateRE = /\B([A-Z])/g;
          var hyphenate = cached(function(str) {
            return str.replace(hyphenateRE, "-$1").toLowerCase();
          });
          function polyfillBind(fn, ctx) {
            function boundFn(a) {
              var l = arguments.length;
              return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
            }
            boundFn._length = fn.length;
            return boundFn;
          }
          function nativeBind(fn, ctx) {
            return fn.bind(ctx);
          }
          var bind = Function.prototype.bind ? nativeBind : polyfillBind;
          function toArray(list, start) {
            start = start || 0;
            var i = list.length - start;
            var ret = new Array(i);
            while (i--) {
              ret[i] = list[i + start];
            }
            return ret;
          }
          function extend(to, _from) {
            for (var key in _from) {
              to[key] = _from[key];
            }
            return to;
          }
          function toObject(arr) {
            var res = {};
            for (var i = 0; i < arr.length; i++) {
              if (arr[i]) {
                extend(res, arr[i]);
              }
            }
            return res;
          }
          function noop(a, b, c) {
          }
          var no = function no2(a, b, c) {
            return false;
          };
          var identity = function identity2(_) {
            return _;
          };
          function looseEqual(a, b) {
            if (a === b) {
              return true;
            }
            var isObjectA = isObject(a);
            var isObjectB = isObject(b);
            if (isObjectA && isObjectB) {
              try {
                var isArrayA = Array.isArray(a);
                var isArrayB = Array.isArray(b);
                if (isArrayA && isArrayB) {
                  return a.length === b.length && a.every(function(e, i) {
                    return looseEqual(e, b[i]);
                  });
                } else if (a instanceof Date && b instanceof Date) {
                  return a.getTime() === b.getTime();
                } else if (!isArrayA && !isArrayB) {
                  var keysA = Object.keys(a);
                  var keysB = Object.keys(b);
                  return keysA.length === keysB.length && keysA.every(function(key) {
                    return looseEqual(a[key], b[key]);
                  });
                } else {
                  return false;
                }
              } catch (e) {
                return false;
              }
            } else if (!isObjectA && !isObjectB) {
              return String(a) === String(b);
            } else {
              return false;
            }
          }
          function looseIndexOf(arr, val) {
            for (var i = 0; i < arr.length; i++) {
              if (looseEqual(arr[i], val)) {
                return i;
              }
            }
            return -1;
          }
          function once(fn) {
            var called = false;
            return function() {
              if (!called) {
                called = true;
                fn.apply(this, arguments);
              }
            };
          }
          var SSR_ATTR = "data-server-rendered";
          var ASSET_TYPES = ["component", "directive", "filter"];
          var LIFECYCLE_HOOKS = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"];
          var config = {
            optionMergeStrategies: Object.create(null),
            silent: false,
            productionTip: true,
            devtools: true,
            performance: false,
            errorHandler: null,
            warnHandler: null,
            ignoredElements: [],
            keyCodes: Object.create(null),
            isReservedTag: no,
            isReservedAttr: no,
            isUnknownElement: no,
            getTagNamespace: noop,
            parsePlatformTagName: identity,
            mustUseProp: no,
            async: true,
            _lifecycleHooks: LIFECYCLE_HOOKS
          };
          var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
          function isReserved(str) {
            var c = (str + "").charCodeAt(0);
            return c === 36 || c === 95;
          }
          function def(obj, key, val, enumerable) {
            Object.defineProperty(obj, key, {
              value: val,
              enumerable: !!enumerable,
              writable: true,
              configurable: true
            });
          }
          var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");
          function parsePath(path) {
            if (bailRE.test(path)) {
              return;
            }
            var segments = path.split(".");
            return function(obj) {
              for (var i = 0; i < segments.length; i++) {
                if (!obj) {
                  return;
                }
                obj = obj[segments[i]];
              }
              return obj;
            };
          }
          var hasProto = "__proto__" in {};
          var inBrowser = typeof window2 !== "undefined";
          var inWeex = typeof WXEnvironment !== "undefined" && !!WXEnvironment.platform;
          var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
          var UA = inBrowser && window2.navigator.userAgent.toLowerCase();
          var isIE = UA && /msie|trident/.test(UA);
          var isIE9 = UA && UA.indexOf("msie 9.0") > 0;
          var isEdge = UA && UA.indexOf("edge/") > 0;
          var isAndroid = UA && UA.indexOf("android") > 0 || weexPlatform === "android";
          var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === "ios";
          var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
          var isPhantomJS = UA && /phantomjs/.test(UA);
          var isFF = UA && UA.match(/firefox\/(\d+)/);
          var nativeWatch = {}.watch;
          var supportsPassive = false;
          if (inBrowser) {
            try {
              var opts = {};
              Object.defineProperty(opts, "passive", {
                get: function get() {
                  supportsPassive = true;
                }
              });
              window2.addEventListener("test-passive", null, opts);
            } catch (e) {
            }
          }
          var _isServer;
          var isServerRendering = function isServerRendering2() {
            if (_isServer === void 0) {
              if (!inBrowser && !inWeex && typeof global !== "undefined") {
                _isServer = global["process"] && global["process"].env.VUE_ENV === "server";
              } else {
                _isServer = false;
              }
            }
            return _isServer;
          };
          var devtools = inBrowser && window2.__VUE_DEVTOOLS_GLOBAL_HOOK__;
          function isNative(Ctor) {
            return typeof Ctor === "function" && /native code/.test(Ctor.toString());
          }
          var hasSymbol = typeof Symbol !== "undefined" && isNative(Symbol) && typeof Reflect !== "undefined" && isNative(Reflect.ownKeys);
          var _Set;
          if (typeof Set !== "undefined" && isNative(Set)) {
            _Set = Set;
          } else {
            _Set = function() {
              function Set2() {
                this.set = Object.create(null);
              }
              Set2.prototype.has = function has2(key) {
                return this.set[key] === true;
              };
              Set2.prototype.add = function add2(key) {
                this.set[key] = true;
              };
              Set2.prototype.clear = function clear() {
                this.set = Object.create(null);
              };
              return Set2;
            }();
          }
          var warn = noop;
          var tip = noop;
          var generateComponentTrace = noop;
          var formatComponentName = noop;
          if (true) {
            var hasConsole = typeof console !== "undefined";
            var classifyRE = /(?:^|[-_])(\w)/g;
            var classify = function classify2(str) {
              return str.replace(classifyRE, function(c) {
                return c.toUpperCase();
              }).replace(/[-_]/g, "");
            };
            warn = function warn2(msg, vm) {
              var trace = vm ? generateComponentTrace(vm) : "";
              if (config.warnHandler) {
                config.warnHandler.call(null, msg, vm, trace);
              } else if (hasConsole && !config.silent) {
                console.error("[Vue warn]: " + msg + trace);
              }
            };
            tip = function tip2(msg, vm) {
              if (hasConsole && !config.silent) {
                console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ""));
              }
            };
            formatComponentName = function formatComponentName2(vm, includeFile) {
              if (vm.$root === vm) {
                return "<Root>";
              }
              var options = typeof vm === "function" && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
              var name = options.name || options._componentTag;
              var file = options.__file;
              if (!name && file) {
                var match = file.match(/([^/\\]+)\.vue$/);
                name = match && match[1];
              }
              return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : "");
            };
            var repeat = function repeat2(str, n) {
              var res = "";
              while (n) {
                if (n % 2 === 1) {
                  res += str;
                }
                if (n > 1) {
                  str += str;
                }
                n >>= 1;
              }
              return res;
            };
            generateComponentTrace = function generateComponentTrace2(vm) {
              if (vm._isVue && vm.$parent) {
                var tree = [];
                var currentRecursiveSequence = 0;
                while (vm) {
                  if (tree.length > 0) {
                    var last = tree[tree.length - 1];
                    if (last.constructor === vm.constructor) {
                      currentRecursiveSequence++;
                      vm = vm.$parent;
                      continue;
                    } else if (currentRecursiveSequence > 0) {
                      tree[tree.length - 1] = [last, currentRecursiveSequence];
                      currentRecursiveSequence = 0;
                    }
                  }
                  tree.push(vm);
                  vm = vm.$parent;
                }
                return "\n\nfound in\n\n" + tree.map(function(vm2, i) {
                  return "" + (i === 0 ? "---> " : repeat(" ", 5 + i * 2)) + (Array.isArray(vm2) ? formatComponentName(vm2[0]) + "... (" + vm2[1] + " recursive calls)" : formatComponentName(vm2));
                }).join("\n");
              } else {
                return "\n\n(found in " + formatComponentName(vm) + ")";
              }
            };
          }
          var uid = 0;
          var Dep = function Dep2() {
            this.id = uid++;
            this.subs = [];
          };
          Dep.prototype.addSub = function addSub(sub) {
            this.subs.push(sub);
          };
          Dep.prototype.removeSub = function removeSub(sub) {
            remove(this.subs, sub);
          };
          Dep.prototype.depend = function depend() {
            if (Dep.target) {
              Dep.target.addDep(this);
            }
          };
          Dep.prototype.notify = function notify() {
            var subs = this.subs.slice();
            if (!config.async) {
              subs.sort(function(a, b) {
                return a.id - b.id;
              });
            }
            for (var i = 0, l = subs.length; i < l; i++) {
              subs[i].update();
            }
          };
          Dep.target = null;
          var targetStack = [];
          function pushTarget(target2) {
            targetStack.push(target2);
            Dep.target = target2;
          }
          function popTarget() {
            targetStack.pop();
            Dep.target = targetStack[targetStack.length - 1];
          }
          var VNode = function VNode2(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
            this.tag = tag;
            this.data = data;
            this.children = children;
            this.text = text;
            this.elm = elm;
            this.ns = void 0;
            this.context = context;
            this.fnContext = void 0;
            this.fnOptions = void 0;
            this.fnScopeId = void 0;
            this.key = data && data.key;
            this.componentOptions = componentOptions;
            this.componentInstance = void 0;
            this.parent = void 0;
            this.raw = false;
            this.isStatic = false;
            this.isRootInsert = true;
            this.isComment = false;
            this.isCloned = false;
            this.isOnce = false;
            this.asyncFactory = asyncFactory;
            this.asyncMeta = void 0;
            this.isAsyncPlaceholder = false;
          };
          var prototypeAccessors = {
            child: {
              configurable: true
            }
          };
          prototypeAccessors.child.get = function() {
            return this.componentInstance;
          };
          Object.defineProperties(VNode.prototype, prototypeAccessors);
          var createEmptyVNode = function createEmptyVNode2(text) {
            if (text === void 0)
              text = "";
            var node = new VNode();
            node.text = text;
            node.isComment = true;
            return node;
          };
          function createTextVNode(val) {
            return new VNode(void 0, void 0, void 0, String(val));
          }
          function cloneVNode(vnode) {
            var cloned = new VNode(vnode.tag, vnode.data, vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
            cloned.ns = vnode.ns;
            cloned.isStatic = vnode.isStatic;
            cloned.key = vnode.key;
            cloned.isComment = vnode.isComment;
            cloned.fnContext = vnode.fnContext;
            cloned.fnOptions = vnode.fnOptions;
            cloned.fnScopeId = vnode.fnScopeId;
            cloned.asyncMeta = vnode.asyncMeta;
            cloned.isCloned = true;
            return cloned;
          }
          var arrayProto = Array.prototype;
          var arrayMethods = Object.create(arrayProto);
          var methodsToPatch = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
          methodsToPatch.forEach(function(method) {
            var original = arrayProto[method];
            def(arrayMethods, method, function mutator() {
              var args = [], len = arguments.length;
              while (len--) {
                args[len] = arguments[len];
              }
              var result = original.apply(this, args);
              var ob = this.__ob__;
              var inserted;
              switch (method) {
                case "push":
                case "unshift":
                  inserted = args;
                  break;
                case "splice":
                  inserted = args.slice(2);
                  break;
              }
              if (inserted) {
                ob.observeArray(inserted);
              }
              ob.dep.notify();
              return result;
            });
          });
          var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
          var shouldObserve = true;
          function toggleObserving(value) {
            shouldObserve = value;
          }
          var Observer = function Observer2(value) {
            this.value = value;
            this.dep = new Dep();
            this.vmCount = 0;
            def(value, "__ob__", this);
            if (Array.isArray(value)) {
              if (hasProto) {
                protoAugment(value, arrayMethods);
              } else {
                copyAugment(value, arrayMethods, arrayKeys);
              }
              this.observeArray(value);
            } else {
              this.walk(value);
            }
          };
          Observer.prototype.walk = function walk(obj) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length; i++) {
              defineReactive$$1(obj, keys[i]);
            }
          };
          Observer.prototype.observeArray = function observeArray(items) {
            for (var i = 0, l = items.length; i < l; i++) {
              observe(items[i]);
            }
          };
          function protoAugment(target2, src) {
            target2.__proto__ = src;
          }
          function copyAugment(target2, src, keys) {
            for (var i = 0, l = keys.length; i < l; i++) {
              var key = keys[i];
              def(target2, key, src[key]);
            }
          }
          function observe(value, asRootData) {
            if (!isObject(value) || value instanceof VNode) {
              return;
            }
            var ob;
            if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
              ob = value.__ob__;
            } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
              ob = new Observer(value);
            }
            if (asRootData && ob) {
              ob.vmCount++;
            }
            return ob;
          }
          function defineReactive$$1(obj, key, val, customSetter, shallow) {
            var dep = new Dep();
            var property = Object.getOwnPropertyDescriptor(obj, key);
            if (property && property.configurable === false) {
              return;
            }
            var getter = property && property.get;
            var setter = property && property.set;
            if ((!getter || setter) && arguments.length === 2) {
              val = obj[key];
            }
            var childOb = !shallow && observe(val);
            Object.defineProperty(obj, key, {
              enumerable: true,
              configurable: true,
              get: function reactiveGetter() {
                var value = getter ? getter.call(obj) : val;
                if (Dep.target) {
                  dep.depend();
                  if (childOb) {
                    childOb.dep.depend();
                    if (Array.isArray(value)) {
                      dependArray(value);
                    }
                  }
                }
                return value;
              },
              set: function reactiveSetter(newVal) {
                var value = getter ? getter.call(obj) : val;
                if (newVal === value || newVal !== newVal && value !== value) {
                  return;
                }
                if (customSetter) {
                  customSetter();
                }
                if (getter && !setter) {
                  return;
                }
                if (setter) {
                  setter.call(obj, newVal);
                } else {
                  val = newVal;
                }
                childOb = !shallow && observe(newVal);
                dep.notify();
              }
            });
          }
          function set(target2, key, val) {
            if (isUndef(target2) || isPrimitive(target2)) {
              warn("Cannot set reactive property on undefined, null, or primitive value: " + target2);
            }
            if (Array.isArray(target2) && isValidArrayIndex(key)) {
              target2.length = Math.max(target2.length, key);
              target2.splice(key, 1, val);
              return val;
            }
            if (key in target2 && !(key in Object.prototype)) {
              target2[key] = val;
              return val;
            }
            var ob = target2.__ob__;
            if (target2._isVue || ob && ob.vmCount) {
              warn("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option.");
              return val;
            }
            if (!ob) {
              target2[key] = val;
              return val;
            }
            defineReactive$$1(ob.value, key, val);
            ob.dep.notify();
            return val;
          }
          function del(target2, key) {
            if (isUndef(target2) || isPrimitive(target2)) {
              warn("Cannot delete reactive property on undefined, null, or primitive value: " + target2);
            }
            if (Array.isArray(target2) && isValidArrayIndex(key)) {
              target2.splice(key, 1);
              return;
            }
            var ob = target2.__ob__;
            if (target2._isVue || ob && ob.vmCount) {
              warn("Avoid deleting properties on a Vue instance or its root $data - just set it to null.");
              return;
            }
            if (!hasOwn(target2, key)) {
              return;
            }
            delete target2[key];
            if (!ob) {
              return;
            }
            ob.dep.notify();
          }
          function dependArray(value) {
            for (var e = void 0, i = 0, l = value.length; i < l; i++) {
              e = value[i];
              e && e.__ob__ && e.__ob__.dep.depend();
              if (Array.isArray(e)) {
                dependArray(e);
              }
            }
          }
          var strats = config.optionMergeStrategies;
          if (true) {
            strats.el = strats.propsData = function(parent, child, vm, key) {
              if (!vm) {
                warn('option "' + key + '" can only be used during instance creation with the `new` keyword.');
              }
              return defaultStrat(parent, child);
            };
          }
          function mergeData(to, from) {
            if (!from) {
              return to;
            }
            var key, toVal, fromVal;
            var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);
            for (var i = 0; i < keys.length; i++) {
              key = keys[i];
              if (key === "__ob__") {
                continue;
              }
              toVal = to[key];
              fromVal = from[key];
              if (!hasOwn(to, key)) {
                set(to, key, fromVal);
              } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
                mergeData(toVal, fromVal);
              }
            }
            return to;
          }
          function mergeDataOrFn(parentVal, childVal, vm) {
            if (!vm) {
              if (!childVal) {
                return parentVal;
              }
              if (!parentVal) {
                return childVal;
              }
              return function mergedDataFn() {
                return mergeData(typeof childVal === "function" ? childVal.call(this, this) : childVal, typeof parentVal === "function" ? parentVal.call(this, this) : parentVal);
              };
            } else {
              return function mergedInstanceDataFn() {
                var instanceData = typeof childVal === "function" ? childVal.call(vm, vm) : childVal;
                var defaultData = typeof parentVal === "function" ? parentVal.call(vm, vm) : parentVal;
                if (instanceData) {
                  return mergeData(instanceData, defaultData);
                } else {
                  return defaultData;
                }
              };
            }
          }
          strats.data = function(parentVal, childVal, vm) {
            if (!vm) {
              if (childVal && typeof childVal !== "function") {
                warn('The "data" option should be a function that returns a per-instance value in component definitions.', vm);
                return parentVal;
              }
              return mergeDataOrFn(parentVal, childVal);
            }
            return mergeDataOrFn(parentVal, childVal, vm);
          };
          function mergeHook(parentVal, childVal) {
            var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
            return res ? dedupeHooks(res) : res;
          }
          function dedupeHooks(hooks2) {
            var res = [];
            for (var i = 0; i < hooks2.length; i++) {
              if (res.indexOf(hooks2[i]) === -1) {
                res.push(hooks2[i]);
              }
            }
            return res;
          }
          LIFECYCLE_HOOKS.forEach(function(hook) {
            strats[hook] = mergeHook;
          });
          function mergeAssets(parentVal, childVal, vm, key) {
            var res = Object.create(parentVal || null);
            if (childVal) {
              assertObjectType(key, childVal, vm);
              return extend(res, childVal);
            } else {
              return res;
            }
          }
          ASSET_TYPES.forEach(function(type) {
            strats[type + "s"] = mergeAssets;
          });
          strats.watch = function(parentVal, childVal, vm, key) {
            if (parentVal === nativeWatch) {
              parentVal = void 0;
            }
            if (childVal === nativeWatch) {
              childVal = void 0;
            }
            if (!childVal) {
              return Object.create(parentVal || null);
            }
            if (true) {
              assertObjectType(key, childVal, vm);
            }
            if (!parentVal) {
              return childVal;
            }
            var ret = {};
            extend(ret, parentVal);
            for (var key$1 in childVal) {
              var parent = ret[key$1];
              var child = childVal[key$1];
              if (parent && !Array.isArray(parent)) {
                parent = [parent];
              }
              ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
            }
            return ret;
          };
          strats.props = strats.methods = strats.inject = strats.computed = function(parentVal, childVal, vm, key) {
            if (childVal && true) {
              assertObjectType(key, childVal, vm);
            }
            if (!parentVal) {
              return childVal;
            }
            var ret = Object.create(null);
            extend(ret, parentVal);
            if (childVal) {
              extend(ret, childVal);
            }
            return ret;
          };
          strats.provide = mergeDataOrFn;
          var defaultStrat = function defaultStrat2(parentVal, childVal) {
            return childVal === void 0 ? parentVal : childVal;
          };
          function checkComponents(options) {
            for (var key in options.components) {
              validateComponentName(key);
            }
          }
          function validateComponentName(name) {
            if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
              warn('Invalid component name: "' + name + '". Component names should conform to valid custom element name in html5 specification.');
            }
            if (isBuiltInTag(name) || config.isReservedTag(name)) {
              warn("Do not use built-in or reserved HTML elements as component id: " + name);
            }
          }
          function normalizeProps(options, vm) {
            var props2 = options.props;
            if (!props2) {
              return;
            }
            var res = {};
            var i, val, name;
            if (Array.isArray(props2)) {
              i = props2.length;
              while (i--) {
                val = props2[i];
                if (typeof val === "string") {
                  name = camelize(val);
                  res[name] = {
                    type: null
                  };
                } else if (true) {
                  warn("props must be strings when using array syntax.");
                }
              }
            } else if (isPlainObject(props2)) {
              for (var key in props2) {
                val = props2[key];
                name = camelize(key);
                res[name] = isPlainObject(val) ? val : {
                  type: val
                };
              }
            } else if (true) {
              warn('Invalid value for option "props": expected an Array or an Object, but got ' + toRawType(props2) + ".", vm);
            }
            options.props = res;
          }
          function normalizeInject(options, vm) {
            var inject = options.inject;
            if (!inject) {
              return;
            }
            var normalized = options.inject = {};
            if (Array.isArray(inject)) {
              for (var i = 0; i < inject.length; i++) {
                normalized[inject[i]] = {
                  from: inject[i]
                };
              }
            } else if (isPlainObject(inject)) {
              for (var key in inject) {
                var val = inject[key];
                normalized[key] = isPlainObject(val) ? extend({
                  from: key
                }, val) : {
                  from: val
                };
              }
            } else if (true) {
              warn('Invalid value for option "inject": expected an Array or an Object, but got ' + toRawType(inject) + ".", vm);
            }
          }
          function normalizeDirectives(options) {
            var dirs = options.directives;
            if (dirs) {
              for (var key in dirs) {
                var def$$1 = dirs[key];
                if (typeof def$$1 === "function") {
                  dirs[key] = {
                    bind: def$$1,
                    update: def$$1
                  };
                }
              }
            }
          }
          function assertObjectType(name, value, vm) {
            if (!isPlainObject(value)) {
              warn('Invalid value for option "' + name + '": expected an Object, but got ' + toRawType(value) + ".", vm);
            }
          }
          function mergeOptions(parent, child, vm) {
            if (true) {
              checkComponents(child);
            }
            if (typeof child === "function") {
              child = child.options;
            }
            normalizeProps(child, vm);
            normalizeInject(child, vm);
            normalizeDirectives(child);
            if (!child._base) {
              if (child.extends) {
                parent = mergeOptions(parent, child.extends, vm);
              }
              if (child.mixins) {
                for (var i = 0, l = child.mixins.length; i < l; i++) {
                  parent = mergeOptions(parent, child.mixins[i], vm);
                }
              }
            }
            var options = {};
            var key;
            for (key in parent) {
              mergeField(key);
            }
            for (key in child) {
              if (!hasOwn(parent, key)) {
                mergeField(key);
              }
            }
            function mergeField(key2) {
              var strat = strats[key2] || defaultStrat;
              options[key2] = strat(parent[key2], child[key2], vm, key2);
            }
            return options;
          }
          function resolveAsset(options, type, id, warnMissing) {
            if (typeof id !== "string") {
              return;
            }
            var assets = options[type];
            if (hasOwn(assets, id)) {
              return assets[id];
            }
            var camelizedId = camelize(id);
            if (hasOwn(assets, camelizedId)) {
              return assets[camelizedId];
            }
            var PascalCaseId = capitalize(camelizedId);
            if (hasOwn(assets, PascalCaseId)) {
              return assets[PascalCaseId];
            }
            var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
            if (warnMissing && !res) {
              warn("Failed to resolve " + type.slice(0, -1) + ": " + id, options);
            }
            return res;
          }
          function validateProp(key, propOptions, propsData, vm) {
            var prop = propOptions[key];
            var absent = !hasOwn(propsData, key);
            var value = propsData[key];
            var booleanIndex = getTypeIndex(Boolean, prop.type);
            if (booleanIndex > -1) {
              if (absent && !hasOwn(prop, "default")) {
                value = false;
              } else if (value === "" || value === hyphenate(key)) {
                var stringIndex = getTypeIndex(String, prop.type);
                if (stringIndex < 0 || booleanIndex < stringIndex) {
                  value = true;
                }
              }
            }
            if (value === void 0) {
              value = getPropDefaultValue(vm, prop, key);
              var prevShouldObserve = shouldObserve;
              toggleObserving(true);
              observe(value);
              toggleObserving(prevShouldObserve);
            }
            if (true) {
              assertProp(prop, key, value, vm, absent);
            }
            return value;
          }
          function getPropDefaultValue(vm, prop, key) {
            if (!hasOwn(prop, "default")) {
              return void 0;
            }
            var def2 = prop.default;
            if (isObject(def2)) {
              warn('Invalid default value for prop "' + key + '": Props with type Object/Array must use a factory function to return the default value.', vm);
            }
            if (vm && vm.$options.propsData && vm.$options.propsData[key] === void 0 && vm._props[key] !== void 0) {
              return vm._props[key];
            }
            return typeof def2 === "function" && getType(prop.type) !== "Function" ? def2.call(vm) : def2;
          }
          function assertProp(prop, name, value, vm, absent) {
            if (prop.required && absent) {
              warn('Missing required prop: "' + name + '"', vm);
              return;
            }
            if (value == null && !prop.required) {
              return;
            }
            var type = prop.type;
            var valid = !type || type === true;
            var expectedTypes = [];
            if (type) {
              if (!Array.isArray(type)) {
                type = [type];
              }
              for (var i = 0; i < type.length && !valid; i++) {
                var assertedType = assertType(value, type[i], vm);
                expectedTypes.push(assertedType.expectedType || "");
                valid = assertedType.valid;
              }
            }
            var haveExpectedTypes = expectedTypes.some(function(t) {
              return t;
            });
            if (!valid && haveExpectedTypes) {
              warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
              return;
            }
            var validator = prop.validator;
            if (validator) {
              if (!validator(value)) {
                warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
              }
            }
          }
          var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;
          function assertType(value, type, vm) {
            var valid;
            var expectedType = getType(type);
            if (simpleCheckRE.test(expectedType)) {
              var t = Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["a"])(value);
              valid = t === expectedType.toLowerCase();
              if (!valid && t === "object") {
                valid = value instanceof type;
              }
            } else if (expectedType === "Object") {
              valid = isPlainObject(value);
            } else if (expectedType === "Array") {
              valid = Array.isArray(value);
            } else {
              try {
                valid = value instanceof type;
              } catch (e) {
                warn('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
                valid = false;
              }
            }
            return {
              valid,
              expectedType
            };
          }
          var functionTypeCheckRE = /^\s*function (\w+)/;
          function getType(fn) {
            var match = fn && fn.toString().match(functionTypeCheckRE);
            return match ? match[1] : "";
          }
          function isSameType(a, b) {
            return getType(a) === getType(b);
          }
          function getTypeIndex(type, expectedTypes) {
            if (!Array.isArray(expectedTypes)) {
              return isSameType(expectedTypes, type) ? 0 : -1;
            }
            for (var i = 0, len = expectedTypes.length; i < len; i++) {
              if (isSameType(expectedTypes[i], type)) {
                return i;
              }
            }
            return -1;
          }
          function getInvalidTypeMessage(name, value, expectedTypes) {
            var message = 'Invalid prop: type check failed for prop "' + name + '". Expected ' + expectedTypes.map(capitalize).join(", ");
            var expectedType = expectedTypes[0];
            var receivedType = toRawType(value);
            if (expectedTypes.length === 1 && isExplicable(expectedType) && isExplicable(Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["a"])(value)) && !isBoolean(expectedType, receivedType)) {
              message += " with value " + styleValue(value, expectedType);
            }
            message += ", got " + receivedType + " ";
            if (isExplicable(receivedType)) {
              message += "with value " + styleValue(value, receivedType) + ".";
            }
            return message;
          }
          function styleValue(value, type) {
            if (type === "String") {
              return '"' + value + '"';
            } else if (type === "Number") {
              return "" + Number(value);
            } else {
              return "" + value;
            }
          }
          var EXPLICABLE_TYPES = ["string", "number", "boolean"];
          function isExplicable(value) {
            return EXPLICABLE_TYPES.some(function(elem) {
              return value.toLowerCase() === elem;
            });
          }
          function isBoolean() {
            var args = [], len = arguments.length;
            while (len--) {
              args[len] = arguments[len];
            }
            return args.some(function(elem) {
              return elem.toLowerCase() === "boolean";
            });
          }
          function handleError(err, vm, info) {
            pushTarget();
            try {
              if (vm) {
                var cur = vm;
                while (cur = cur.$parent) {
                  var hooks2 = cur.$options.errorCaptured;
                  if (hooks2) {
                    for (var i = 0; i < hooks2.length; i++) {
                      try {
                        var capture = hooks2[i].call(cur, err, vm, info) === false;
                        if (capture) {
                          return;
                        }
                      } catch (e) {
                        globalHandleError(e, cur, "errorCaptured hook");
                      }
                    }
                  }
                }
              }
              globalHandleError(err, vm, info);
            } finally {
              popTarget();
            }
          }
          function invokeWithErrorHandling(handler, context, args, vm, info) {
            var res;
            try {
              res = args ? handler.apply(context, args) : handler.call(context);
              if (res && !res._isVue && isPromise(res) && !res._handled) {
                res.catch(function(e) {
                  return handleError(e, vm, info + " (Promise/async)");
                });
                res._handled = true;
              }
            } catch (e) {
              handleError(e, vm, info);
            }
            return res;
          }
          function globalHandleError(err, vm, info) {
            if (config.errorHandler) {
              try {
                return config.errorHandler.call(null, err, vm, info);
              } catch (e) {
                if (e !== err) {
                  logError(e, null, "config.errorHandler");
                }
              }
            }
            logError(err, vm, info);
          }
          function logError(err, vm, info) {
            if (true) {
              warn("Error in " + info + ': "' + err.toString() + '"', vm);
            }
            if ((inBrowser || inWeex) && typeof console !== "undefined") {
              console.error(err);
            } else {
              throw err;
            }
          }
          var isUsingMicroTask = false;
          var callbacks = [];
          var pending = false;
          function flushCallbacks() {
            pending = false;
            var copies = callbacks.slice(0);
            callbacks.length = 0;
            for (var i = 0; i < copies.length; i++) {
              copies[i]();
            }
          }
          var timerFunc;
          if (typeof Promise !== "undefined" && isNative(Promise)) {
            var p = Promise.resolve();
            timerFunc = function timerFunc2() {
              p.then(flushCallbacks);
              if (isIOS) {
                setTimeout(noop);
              }
            };
            isUsingMicroTask = true;
          } else if (!isIE && typeof MutationObserver !== "undefined" && (isNative(MutationObserver) || MutationObserver.toString() === "[object MutationObserverConstructor]")) {
            var counter = 1;
            var observer = new MutationObserver(flushCallbacks);
            var textNode = document.createTextNode(String(counter));
            observer.observe(textNode, {
              characterData: true
            });
            timerFunc = function timerFunc2() {
              counter = (counter + 1) % 2;
              textNode.data = String(counter);
            };
            isUsingMicroTask = true;
          } else if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {
            timerFunc = function timerFunc2() {
              setImmediate(flushCallbacks);
            };
          } else {
            timerFunc = function timerFunc2() {
              setTimeout(flushCallbacks, 0);
            };
          }
          function nextTick(cb, ctx) {
            var _resolve;
            callbacks.push(function() {
              if (cb) {
                try {
                  cb.call(ctx);
                } catch (e) {
                  handleError(e, ctx, "nextTick");
                }
              } else if (_resolve) {
                _resolve(ctx);
              }
            });
            if (!pending) {
              pending = true;
              timerFunc();
            }
            if (!cb && typeof Promise !== "undefined") {
              return new Promise(function(resolve) {
                _resolve = resolve;
              });
            }
          }
          var initProxy;
          if (true) {
            var allowedGlobals = makeMap("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,require");
            var warnNonPresent = function warnNonPresent2(target2, key) {
              warn('Property or method "' + key + '" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target2);
            };
            var warnReservedPrefix = function warnReservedPrefix2(target2, key) {
              warn('Property "' + key + '" must be accessed with "$data.' + key + '" because properties starting with "$" or "_" are not proxied in the Vue instance to prevent conflicts with Vue internals. See: https://vuejs.org/v2/api/#data', target2);
            };
            var hasProxy = typeof Proxy !== "undefined" && isNative(Proxy);
            if (hasProxy) {
              var isBuiltInModifier = makeMap("stop,prevent,self,ctrl,shift,alt,meta,exact");
              config.keyCodes = new Proxy(config.keyCodes, {
                set: function set2(target2, key, value) {
                  if (isBuiltInModifier(key)) {
                    warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
                    return false;
                  } else {
                    target2[key] = value;
                    return true;
                  }
                }
              });
            }
            var hasHandler = {
              has: function has2(target2, key) {
                var has3 = key in target2;
                var isAllowed = allowedGlobals(key) || typeof key === "string" && key.charAt(0) === "_" && !(key in target2.$data);
                if (!has3 && !isAllowed) {
                  if (key in target2.$data) {
                    warnReservedPrefix(target2, key);
                  } else {
                    warnNonPresent(target2, key);
                  }
                }
                return has3 || !isAllowed;
              }
            };
            var getHandler = {
              get: function get(target2, key) {
                if (typeof key === "string" && !(key in target2)) {
                  if (key in target2.$data) {
                    warnReservedPrefix(target2, key);
                  } else {
                    warnNonPresent(target2, key);
                  }
                }
                return target2[key];
              }
            };
            initProxy = function initProxy2(vm) {
              if (hasProxy) {
                var options = vm.$options;
                var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
                vm._renderProxy = new Proxy(vm, handlers);
              } else {
                vm._renderProxy = vm;
              }
            };
          }
          var seenObjects = new _Set();
          function traverse(val) {
            _traverse(val, seenObjects);
            seenObjects.clear();
          }
          function _traverse(val, seen) {
            var i, keys;
            var isA = Array.isArray(val);
            if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
              return;
            }
            if (val.__ob__) {
              var depId = val.__ob__.dep.id;
              if (seen.has(depId)) {
                return;
              }
              seen.add(depId);
            }
            if (isA) {
              i = val.length;
              while (i--) {
                _traverse(val[i], seen);
              }
            } else {
              keys = Object.keys(val);
              i = keys.length;
              while (i--) {
                _traverse(val[keys[i]], seen);
              }
            }
          }
          var mark;
          var measure;
          if (true) {
            var perf = inBrowser && window2.performance;
            if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
              mark = function mark2(tag) {
                return perf.mark(tag);
              };
              measure = function measure2(name, startTag, endTag) {
                perf.measure(name, startTag, endTag);
                perf.clearMarks(startTag);
                perf.clearMarks(endTag);
              };
            }
          }
          var normalizeEvent = cached(function(name) {
            var passive = name.charAt(0) === "&";
            name = passive ? name.slice(1) : name;
            var once$$1 = name.charAt(0) === "~";
            name = once$$1 ? name.slice(1) : name;
            var capture = name.charAt(0) === "!";
            name = capture ? name.slice(1) : name;
            return {
              name,
              once: once$$1,
              capture,
              passive
            };
          });
          function createFnInvoker(fns, vm) {
            function invoker() {
              var arguments$1 = arguments;
              var fns2 = invoker.fns;
              if (Array.isArray(fns2)) {
                var cloned = fns2.slice();
                for (var i = 0; i < cloned.length; i++) {
                  invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
                }
              } else {
                return invokeWithErrorHandling(fns2, null, arguments, vm, "v-on handler");
              }
            }
            invoker.fns = fns;
            return invoker;
          }
          function updateListeners(on, oldOn, add2, remove$$1, createOnceHandler2, vm) {
            var name, def$$1, cur, old, event;
            for (name in on) {
              def$$1 = cur = on[name];
              old = oldOn[name];
              event = normalizeEvent(name);
              if (isUndef(cur)) {
                warn('Invalid handler for event "' + event.name + '": got ' + String(cur), vm);
              } else if (isUndef(old)) {
                if (isUndef(cur.fns)) {
                  cur = on[name] = createFnInvoker(cur, vm);
                }
                if (isTrue(event.once)) {
                  cur = on[name] = createOnceHandler2(event.name, cur, event.capture);
                }
                add2(event.name, cur, event.capture, event.passive, event.params);
              } else if (cur !== old) {
                old.fns = cur;
                on[name] = old;
              }
            }
            for (name in oldOn) {
              if (isUndef(on[name])) {
                event = normalizeEvent(name);
                remove$$1(event.name, oldOn[name], event.capture);
              }
            }
          }
          function mergeVNodeHook(def2, hookKey, hook) {
            if (def2 instanceof VNode) {
              def2 = def2.data.hook || (def2.data.hook = {});
            }
            var invoker;
            var oldHook = def2[hookKey];
            function wrappedHook() {
              hook.apply(this, arguments);
              remove(invoker.fns, wrappedHook);
            }
            if (isUndef(oldHook)) {
              invoker = createFnInvoker([wrappedHook]);
            } else {
              if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
                invoker = oldHook;
                invoker.fns.push(wrappedHook);
              } else {
                invoker = createFnInvoker([oldHook, wrappedHook]);
              }
            }
            invoker.merged = true;
            def2[hookKey] = invoker;
          }
          function extractPropsFromVNodeData(data, Ctor, tag) {
            var propOptions = Ctor.options.props;
            if (isUndef(propOptions)) {
              return;
            }
            var res = {};
            var attrs2 = data.attrs;
            var props2 = data.props;
            if (isDef(attrs2) || isDef(props2)) {
              for (var key in propOptions) {
                var altKey = hyphenate(key);
                if (true) {
                  var keyInLowerCase = key.toLowerCase();
                  if (key !== keyInLowerCase && attrs2 && hasOwn(attrs2, keyInLowerCase)) {
                    tip('Prop "' + keyInLowerCase + '" is passed to component ' + formatComponentName(tag || Ctor) + ', but the declared prop name is "' + key + '". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "' + altKey + '" instead of "' + key + '".');
                  }
                }
                checkProp(res, props2, key, altKey, true) || checkProp(res, attrs2, key, altKey, false);
              }
            }
            return res;
          }
          function checkProp(res, hash, key, altKey, preserve) {
            if (isDef(hash)) {
              if (hasOwn(hash, key)) {
                res[key] = hash[key];
                if (!preserve) {
                  delete hash[key];
                }
                return true;
              } else if (hasOwn(hash, altKey)) {
                res[key] = hash[altKey];
                if (!preserve) {
                  delete hash[altKey];
                }
                return true;
              }
            }
            return false;
          }
          function simpleNormalizeChildren(children) {
            for (var i = 0; i < children.length; i++) {
              if (Array.isArray(children[i])) {
                return Array.prototype.concat.apply([], children);
              }
            }
            return children;
          }
          function normalizeChildren(children) {
            return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : void 0;
          }
          function isTextNode(node) {
            return isDef(node) && isDef(node.text) && isFalse(node.isComment);
          }
          function normalizeArrayChildren(children, nestedIndex) {
            var res = [];
            var i, c, lastIndex, last;
            for (i = 0; i < children.length; i++) {
              c = children[i];
              if (isUndef(c) || typeof c === "boolean") {
                continue;
              }
              lastIndex = res.length - 1;
              last = res[lastIndex];
              if (Array.isArray(c)) {
                if (c.length > 0) {
                  c = normalizeArrayChildren(c, (nestedIndex || "") + "_" + i);
                  if (isTextNode(c[0]) && isTextNode(last)) {
                    res[lastIndex] = createTextVNode(last.text + c[0].text);
                    c.shift();
                  }
                  res.push.apply(res, c);
                }
              } else if (isPrimitive(c)) {
                if (isTextNode(last)) {
                  res[lastIndex] = createTextVNode(last.text + c);
                } else if (c !== "") {
                  res.push(createTextVNode(c));
                }
              } else {
                if (isTextNode(c) && isTextNode(last)) {
                  res[lastIndex] = createTextVNode(last.text + c.text);
                } else {
                  if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
                    c.key = "__vlist" + nestedIndex + "_" + i + "__";
                  }
                  res.push(c);
                }
              }
            }
            return res;
          }
          function initProvide(vm) {
            var provide = vm.$options.provide;
            if (provide) {
              vm._provided = typeof provide === "function" ? provide.call(vm) : provide;
            }
          }
          function initInjections(vm) {
            var result = resolveInject(vm.$options.inject, vm);
            if (result) {
              toggleObserving(false);
              Object.keys(result).forEach(function(key) {
                if (true) {
                  defineReactive$$1(vm, key, result[key], function() {
                    warn('Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "' + key + '"', vm);
                  });
                } else {
                }
              });
              toggleObserving(true);
            }
          }
          function resolveInject(inject, vm) {
            if (inject) {
              var result = Object.create(null);
              var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key === "__ob__") {
                  continue;
                }
                var provideKey = inject[key].from;
                var source = vm;
                while (source) {
                  if (source._provided && hasOwn(source._provided, provideKey)) {
                    result[key] = source._provided[provideKey];
                    break;
                  }
                  source = source.$parent;
                }
                if (!source) {
                  if ("default" in inject[key]) {
                    var provideDefault = inject[key].default;
                    result[key] = typeof provideDefault === "function" ? provideDefault.call(vm) : provideDefault;
                  } else if (true) {
                    warn('Injection "' + key + '" not found', vm);
                  }
                }
              }
              return result;
            }
          }
          function resolveSlots(children, context) {
            if (!children || !children.length) {
              return {};
            }
            var slots = {};
            for (var i = 0, l = children.length; i < l; i++) {
              var child = children[i];
              var data = child.data;
              if (data && data.attrs && data.attrs.slot) {
                delete data.attrs.slot;
              }
              if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
                var name = data.slot;
                var slot = slots[name] || (slots[name] = []);
                if (child.tag === "template") {
                  slot.push.apply(slot, child.children || []);
                } else {
                  slot.push(child);
                }
              } else {
                (slots.default || (slots.default = [])).push(child);
              }
            }
            for (var name$1 in slots) {
              if (slots[name$1].every(isWhitespace)) {
                delete slots[name$1];
              }
            }
            return slots;
          }
          function isWhitespace(node) {
            return node.isComment && !node.asyncFactory || node.text === " ";
          }
          function isAsyncPlaceholder(node) {
            return node.isComment && node.asyncFactory;
          }
          function normalizeScopedSlots(slots, normalSlots, prevSlots) {
            var res;
            var hasNormalSlots = Object.keys(normalSlots).length > 0;
            var isStable = slots ? !!slots.$stable : !hasNormalSlots;
            var key = slots && slots.$key;
            if (!slots) {
              res = {};
            } else if (slots._normalized) {
              return slots._normalized;
            } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
              return prevSlots;
            } else {
              res = {};
              for (var key$1 in slots) {
                if (slots[key$1] && key$1[0] !== "$") {
                  res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
                }
              }
            }
            for (var key$2 in normalSlots) {
              if (!(key$2 in res)) {
                res[key$2] = proxyNormalSlot(normalSlots, key$2);
              }
            }
            if (slots && Object.isExtensible(slots)) {
              slots._normalized = res;
            }
            def(res, "$stable", isStable);
            def(res, "$key", key);
            def(res, "$hasNormal", hasNormalSlots);
            return res;
          }
          function normalizeScopedSlot(normalSlots, key, fn) {
            var normalized = function normalized2() {
              var res = arguments.length ? fn.apply(null, arguments) : fn({});
              res = res && Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["a"])(res) === "object" && !Array.isArray(res) ? [res] : normalizeChildren(res);
              var vnode = res && res[0];
              return res && (!vnode || res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode)) ? void 0 : res;
            };
            if (fn.proxy) {
              Object.defineProperty(normalSlots, key, {
                get: normalized,
                enumerable: true,
                configurable: true
              });
            }
            return normalized;
          }
          function proxyNormalSlot(slots, key) {
            return function() {
              return slots[key];
            };
          }
          function renderList(val, render) {
            var ret, i, l, keys, key;
            if (Array.isArray(val) || typeof val === "string") {
              ret = new Array(val.length);
              for (i = 0, l = val.length; i < l; i++) {
                ret[i] = render(val[i], i);
              }
            } else if (typeof val === "number") {
              ret = new Array(val);
              for (i = 0; i < val; i++) {
                ret[i] = render(i + 1, i);
              }
            } else if (isObject(val)) {
              if (hasSymbol && val[Symbol.iterator]) {
                ret = [];
                var iterator = val[Symbol.iterator]();
                var result = iterator.next();
                while (!result.done) {
                  ret.push(render(result.value, ret.length));
                  result = iterator.next();
                }
              } else {
                keys = Object.keys(val);
                ret = new Array(keys.length);
                for (i = 0, l = keys.length; i < l; i++) {
                  key = keys[i];
                  ret[i] = render(val[key], key, i);
                }
              }
            }
            if (!isDef(ret)) {
              ret = [];
            }
            ret._isVList = true;
            return ret;
          }
          function renderSlot(name, fallbackRender, props2, bindObject) {
            var scopedSlotFn = this.$scopedSlots[name];
            var nodes;
            if (scopedSlotFn) {
              props2 = props2 || {};
              if (bindObject) {
                if (!isObject(bindObject)) {
                  warn("slot v-bind without argument expects an Object", this);
                }
                props2 = extend(extend({}, bindObject), props2);
              }
              nodes = scopedSlotFn(props2) || (typeof fallbackRender === "function" ? fallbackRender() : fallbackRender);
            } else {
              nodes = this.$slots[name] || (typeof fallbackRender === "function" ? fallbackRender() : fallbackRender);
            }
            var target2 = props2 && props2.slot;
            if (target2) {
              return this.$createElement("template", {
                slot: target2
              }, nodes);
            } else {
              return nodes;
            }
          }
          function resolveFilter(id) {
            return resolveAsset(this.$options, "filters", id, true) || identity;
          }
          function isKeyNotMatch(expect, actual) {
            if (Array.isArray(expect)) {
              return expect.indexOf(actual) === -1;
            } else {
              return expect !== actual;
            }
          }
          function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
            var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
            if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
              return isKeyNotMatch(builtInKeyName, eventKeyName);
            } else if (mappedKeyCode) {
              return isKeyNotMatch(mappedKeyCode, eventKeyCode);
            } else if (eventKeyName) {
              return hyphenate(eventKeyName) !== key;
            }
            return eventKeyCode === void 0;
          }
          function bindObjectProps(data, tag, value, asProp, isSync) {
            if (value) {
              if (!isObject(value)) {
                warn("v-bind without argument expects an Object or Array value", this);
              } else {
                if (Array.isArray(value)) {
                  value = toObject(value);
                }
                var hash;
                var loop = function loop2(key2) {
                  if (key2 === "class" || key2 === "style" || isReservedAttribute(key2)) {
                    hash = data;
                  } else {
                    var type = data.attrs && data.attrs.type;
                    hash = asProp || config.mustUseProp(tag, type, key2) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
                  }
                  var camelizedKey = camelize(key2);
                  var hyphenatedKey = hyphenate(key2);
                  if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
                    hash[key2] = value[key2];
                    if (isSync) {
                      var on = data.on || (data.on = {});
                      on["update:" + key2] = function($event) {
                        value[key2] = $event;
                      };
                    }
                  }
                };
                for (var key in value) {
                  loop(key);
                }
              }
            }
            return data;
          }
          function renderStatic(index2, isInFor) {
            var cached2 = this._staticTrees || (this._staticTrees = []);
            var tree = cached2[index2];
            if (tree && !isInFor) {
              return tree;
            }
            tree = cached2[index2] = this.$options.staticRenderFns[index2].call(this._renderProxy, null, this);
            markStatic(tree, "__static__" + index2, false);
            return tree;
          }
          function markOnce(tree, index2, key) {
            markStatic(tree, "__once__" + index2 + (key ? "_" + key : ""), true);
            return tree;
          }
          function markStatic(tree, key, isOnce) {
            if (Array.isArray(tree)) {
              for (var i = 0; i < tree.length; i++) {
                if (tree[i] && typeof tree[i] !== "string") {
                  markStaticNode(tree[i], key + "_" + i, isOnce);
                }
              }
            } else {
              markStaticNode(tree, key, isOnce);
            }
          }
          function markStaticNode(node, key, isOnce) {
            node.isStatic = true;
            node.key = key;
            node.isOnce = isOnce;
          }
          function bindObjectListeners(data, value) {
            if (value) {
              if (!isPlainObject(value)) {
                warn("v-on without argument expects an Object value", this);
              } else {
                var on = data.on = data.on ? extend({}, data.on) : {};
                for (var key in value) {
                  var existing = on[key];
                  var ours = value[key];
                  on[key] = existing ? [].concat(existing, ours) : ours;
                }
              }
            }
            return data;
          }
          function resolveScopedSlots(fns, res, hasDynamicKeys, contentHashKey) {
            res = res || {
              $stable: !hasDynamicKeys
            };
            for (var i = 0; i < fns.length; i++) {
              var slot = fns[i];
              if (Array.isArray(slot)) {
                resolveScopedSlots(slot, res, hasDynamicKeys);
              } else if (slot) {
                if (slot.proxy) {
                  slot.fn.proxy = true;
                }
                res[slot.key] = slot.fn;
              }
            }
            if (contentHashKey) {
              res.$key = contentHashKey;
            }
            return res;
          }
          function bindDynamicKeys(baseObj, values) {
            for (var i = 0; i < values.length; i += 2) {
              var key = values[i];
              if (typeof key === "string" && key) {
                baseObj[values[i]] = values[i + 1];
              } else if (key !== "" && key !== null) {
                warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
              }
            }
            return baseObj;
          }
          function prependModifier(value, symbol) {
            return typeof value === "string" ? symbol + value : value;
          }
          function installRenderHelpers(target2) {
            target2._o = markOnce;
            target2._n = toNumber;
            target2._s = toString;
            target2._l = renderList;
            target2._t = renderSlot;
            target2._q = looseEqual;
            target2._i = looseIndexOf;
            target2._m = renderStatic;
            target2._f = resolveFilter;
            target2._k = checkKeyCodes;
            target2._b = bindObjectProps;
            target2._v = createTextVNode;
            target2._e = createEmptyVNode;
            target2._u = resolveScopedSlots;
            target2._g = bindObjectListeners;
            target2._d = bindDynamicKeys;
            target2._p = prependModifier;
          }
          function FunctionalRenderContext(data, props2, children, parent, Ctor) {
            var this$1 = this;
            var options = Ctor.options;
            var contextVm;
            if (hasOwn(parent, "_uid")) {
              contextVm = Object.create(parent);
              contextVm._original = parent;
            } else {
              contextVm = parent;
              parent = parent._original;
            }
            var isCompiled = isTrue(options._compiled);
            var needNormalization = !isCompiled;
            this.data = data;
            this.props = props2;
            this.children = children;
            this.parent = parent;
            this.listeners = data.on || emptyObject;
            this.injections = resolveInject(options.inject, parent);
            this.slots = function() {
              if (!this$1.$slots) {
                normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
              }
              return this$1.$slots;
            };
            Object.defineProperty(this, "scopedSlots", {
              enumerable: true,
              get: function get() {
                return normalizeScopedSlots(data.scopedSlots, this.slots());
              }
            });
            if (isCompiled) {
              this.$options = options;
              this.$slots = this.slots();
              this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
            }
            if (options._scopeId) {
              this._c = function(a, b, c, d) {
                var vnode = createElement(contextVm, a, b, c, d, needNormalization);
                if (vnode && !Array.isArray(vnode)) {
                  vnode.fnScopeId = options._scopeId;
                  vnode.fnContext = parent;
                }
                return vnode;
              };
            } else {
              this._c = function(a, b, c, d) {
                return createElement(contextVm, a, b, c, d, needNormalization);
              };
            }
          }
          installRenderHelpers(FunctionalRenderContext.prototype);
          function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
            var options = Ctor.options;
            var props2 = {};
            var propOptions = options.props;
            if (isDef(propOptions)) {
              for (var key in propOptions) {
                props2[key] = validateProp(key, propOptions, propsData || emptyObject);
              }
            } else {
              if (isDef(data.attrs)) {
                mergeProps(props2, data.attrs);
              }
              if (isDef(data.props)) {
                mergeProps(props2, data.props);
              }
            }
            var renderContext = new FunctionalRenderContext(data, props2, children, contextVm, Ctor);
            var vnode = options.render.call(null, renderContext._c, renderContext);
            if (vnode instanceof VNode) {
              return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
            } else if (Array.isArray(vnode)) {
              var vnodes = normalizeChildren(vnode) || [];
              var res = new Array(vnodes.length);
              for (var i = 0; i < vnodes.length; i++) {
                res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
              }
              return res;
            }
          }
          function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
            var clone = cloneVNode(vnode);
            clone.fnContext = contextVm;
            clone.fnOptions = options;
            if (true) {
              (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
            }
            if (data.slot) {
              (clone.data || (clone.data = {})).slot = data.slot;
            }
            return clone;
          }
          function mergeProps(to, from) {
            for (var key in from) {
              to[camelize(key)] = from[key];
            }
          }
          var componentVNodeHooks = {
            init: function init(vnode, hydrating) {
              if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
                var mountedNode = vnode;
                componentVNodeHooks.prepatch(mountedNode, mountedNode);
              } else {
                var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
                child.$mount(hydrating ? vnode.elm : void 0, hydrating);
              }
            },
            prepatch: function prepatch(oldVnode, vnode) {
              var options = vnode.componentOptions;
              var child = vnode.componentInstance = oldVnode.componentInstance;
              updateChildComponent(child, options.propsData, options.listeners, vnode, options.children);
            },
            insert: function insert(vnode) {
              var context = vnode.context;
              var componentInstance = vnode.componentInstance;
              if (!componentInstance._isMounted) {
                componentInstance._isMounted = true;
                callHook(componentInstance, "mounted");
              }
              if (vnode.data.keepAlive) {
                if (context._isMounted) {
                  queueActivatedComponent(componentInstance);
                } else {
                  activateChildComponent(componentInstance, true);
                }
              }
            },
            destroy: function destroy(vnode) {
              var componentInstance = vnode.componentInstance;
              if (!componentInstance._isDestroyed) {
                if (!vnode.data.keepAlive) {
                  componentInstance.$destroy();
                } else {
                  deactivateChildComponent(componentInstance, true);
                }
              }
            }
          };
          var hooksToMerge = Object.keys(componentVNodeHooks);
          function createComponent(Ctor, data, context, children, tag) {
            if (isUndef(Ctor)) {
              return;
            }
            var baseCtor = context.$options._base;
            if (isObject(Ctor)) {
              Ctor = baseCtor.extend(Ctor);
            }
            if (typeof Ctor !== "function") {
              if (true) {
                warn("Invalid Component definition: " + String(Ctor), context);
              }
              return;
            }
            var asyncFactory;
            if (isUndef(Ctor.cid)) {
              asyncFactory = Ctor;
              Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
              if (Ctor === void 0) {
                return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
              }
            }
            data = data || {};
            resolveConstructorOptions(Ctor);
            if (isDef(data.model)) {
              transformModel(Ctor.options, data);
            }
            var propsData = extractPropsFromVNodeData(data, Ctor, tag);
            if (isTrue(Ctor.options.functional)) {
              return createFunctionalComponent(Ctor, propsData, data, context, children);
            }
            var listeners = data.on;
            data.on = data.nativeOn;
            if (isTrue(Ctor.options.abstract)) {
              var slot = data.slot;
              data = {};
              if (slot) {
                data.slot = slot;
              }
            }
            installComponentHooks(data);
            var name = Ctor.options.name || tag;
            var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ""), data, void 0, void 0, void 0, context, {
              Ctor,
              propsData,
              listeners,
              tag,
              children
            }, asyncFactory);
            return vnode;
          }
          function createComponentInstanceForVnode(vnode, parent) {
            var options = {
              _isComponent: true,
              _parentVnode: vnode,
              parent
            };
            var inlineTemplate = vnode.data.inlineTemplate;
            if (isDef(inlineTemplate)) {
              options.render = inlineTemplate.render;
              options.staticRenderFns = inlineTemplate.staticRenderFns;
            }
            return new vnode.componentOptions.Ctor(options);
          }
          function installComponentHooks(data) {
            var hooks2 = data.hook || (data.hook = {});
            for (var i = 0; i < hooksToMerge.length; i++) {
              var key = hooksToMerge[i];
              var existing = hooks2[key];
              var toMerge = componentVNodeHooks[key];
              if (existing !== toMerge && !(existing && existing._merged)) {
                hooks2[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
              }
            }
          }
          function mergeHook$1(f1, f2) {
            var merged = function merged2(a, b) {
              f1(a, b);
              f2(a, b);
            };
            merged._merged = true;
            return merged;
          }
          function transformModel(options, data) {
            var prop = options.model && options.model.prop || "value";
            var event = options.model && options.model.event || "input";
            (data.attrs || (data.attrs = {}))[prop] = data.model.value;
            var on = data.on || (data.on = {});
            var existing = on[event];
            var callback = data.model.callback;
            if (isDef(existing)) {
              if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
                on[event] = [callback].concat(existing);
              }
            } else {
              on[event] = callback;
            }
          }
          var SIMPLE_NORMALIZE = 1;
          var ALWAYS_NORMALIZE = 2;
          function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
            if (Array.isArray(data) || isPrimitive(data)) {
              normalizationType = children;
              children = data;
              data = void 0;
            }
            if (isTrue(alwaysNormalize)) {
              normalizationType = ALWAYS_NORMALIZE;
            }
            return _createElement(context, tag, data, children, normalizationType);
          }
          function _createElement(context, tag, data, children, normalizationType) {
            if (isDef(data) && isDef(data.__ob__)) {
              warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\nAlways create fresh vnode data objects in each render!", context);
              return createEmptyVNode();
            }
            if (isDef(data) && isDef(data.is)) {
              tag = data.is;
            }
            if (!tag) {
              return createEmptyVNode();
            }
            if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
              {
                warn("Avoid using non-primitive value as key, use string/number value instead.", context);
              }
            }
            if (Array.isArray(children) && typeof children[0] === "function") {
              data = data || {};
              data.scopedSlots = {
                default: children[0]
              };
              children.length = 0;
            }
            if (normalizationType === ALWAYS_NORMALIZE) {
              children = normalizeChildren(children);
            } else if (normalizationType === SIMPLE_NORMALIZE) {
              children = simpleNormalizeChildren(children);
            }
            var vnode, ns;
            if (typeof tag === "string") {
              var Ctor;
              ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
              if (config.isReservedTag(tag)) {
                if (isDef(data) && isDef(data.nativeOn) && data.tag !== "component") {
                  warn("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">.", context);
                }
                vnode = new VNode(config.parsePlatformTagName(tag), data, children, void 0, void 0, context);
              } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, "components", tag))) {
                vnode = createComponent(Ctor, data, context, children, tag);
              } else {
                vnode = new VNode(tag, data, children, void 0, void 0, context);
              }
            } else {
              vnode = createComponent(tag, data, context, children);
            }
            if (Array.isArray(vnode)) {
              return vnode;
            } else if (isDef(vnode)) {
              if (isDef(ns)) {
                applyNS(vnode, ns);
              }
              if (isDef(data)) {
                registerDeepBindings(data);
              }
              return vnode;
            } else {
              return createEmptyVNode();
            }
          }
          function applyNS(vnode, ns, force) {
            vnode.ns = ns;
            if (vnode.tag === "foreignObject") {
              ns = void 0;
              force = true;
            }
            if (isDef(vnode.children)) {
              for (var i = 0, l = vnode.children.length; i < l; i++) {
                var child = vnode.children[i];
                if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== "svg")) {
                  applyNS(child, ns, force);
                }
              }
            }
          }
          function registerDeepBindings(data) {
            if (isObject(data.style)) {
              traverse(data.style);
            }
            if (isObject(data.class)) {
              traverse(data.class);
            }
          }
          function initRender(vm) {
            vm._vnode = null;
            vm._staticTrees = null;
            var options = vm.$options;
            var parentVnode = vm.$vnode = options._parentVnode;
            var renderContext = parentVnode && parentVnode.context;
            vm.$slots = resolveSlots(options._renderChildren, renderContext);
            vm.$scopedSlots = emptyObject;
            vm._c = function(a, b, c, d) {
              return createElement(vm, a, b, c, d, false);
            };
            vm.$createElement = function(a, b, c, d) {
              return createElement(vm, a, b, c, d, true);
            };
            var parentData = parentVnode && parentVnode.data;
            if (true) {
              defineReactive$$1(vm, "$attrs", parentData && parentData.attrs || emptyObject, function() {
                !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
              }, true);
              defineReactive$$1(vm, "$listeners", options._parentListeners || emptyObject, function() {
                !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
              }, true);
            } else {
            }
          }
          var currentRenderingInstance = null;
          function renderMixin(Vue2) {
            installRenderHelpers(Vue2.prototype);
            Vue2.prototype.$nextTick = function(fn) {
              return nextTick(fn, this);
            };
            Vue2.prototype._render = function() {
              var vm = this;
              var ref2 = vm.$options;
              var render = ref2.render;
              var _parentVnode = ref2._parentVnode;
              if (_parentVnode) {
                vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
              }
              vm.$vnode = _parentVnode;
              var vnode;
              try {
                currentRenderingInstance = vm;
                vnode = render.call(vm._renderProxy, vm.$createElement);
              } catch (e) {
                handleError(e, vm, "render");
                if (vm.$options.renderError) {
                  try {
                    vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
                  } catch (e2) {
                    handleError(e2, vm, "renderError");
                    vnode = vm._vnode;
                  }
                } else {
                  vnode = vm._vnode;
                }
              } finally {
                currentRenderingInstance = null;
              }
              if (Array.isArray(vnode) && vnode.length === 1) {
                vnode = vnode[0];
              }
              if (!(vnode instanceof VNode)) {
                if (Array.isArray(vnode)) {
                  warn("Multiple root nodes returned from render function. Render function should return a single root node.", vm);
                }
                vnode = createEmptyVNode();
              }
              vnode.parent = _parentVnode;
              return vnode;
            };
          }
          function ensureCtor(comp, base) {
            if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === "Module") {
              comp = comp.default;
            }
            return isObject(comp) ? base.extend(comp) : comp;
          }
          function createAsyncPlaceholder(factory, data, context, children, tag) {
            var node = createEmptyVNode();
            node.asyncFactory = factory;
            node.asyncMeta = {
              data,
              context,
              children,
              tag
            };
            return node;
          }
          function resolveAsyncComponent(factory, baseCtor) {
            if (isTrue(factory.error) && isDef(factory.errorComp)) {
              return factory.errorComp;
            }
            if (isDef(factory.resolved)) {
              return factory.resolved;
            }
            var owner = currentRenderingInstance;
            if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
              factory.owners.push(owner);
            }
            if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
              return factory.loadingComp;
            }
            if (owner && !isDef(factory.owners)) {
              var owners = factory.owners = [owner];
              var sync = true;
              var timerLoading = null;
              var timerTimeout = null;
              owner.$on("hook:destroyed", function() {
                return remove(owners, owner);
              });
              var forceRender = function forceRender2(renderCompleted) {
                for (var i = 0, l = owners.length; i < l; i++) {
                  owners[i].$forceUpdate();
                }
                if (renderCompleted) {
                  owners.length = 0;
                  if (timerLoading !== null) {
                    clearTimeout(timerLoading);
                    timerLoading = null;
                  }
                  if (timerTimeout !== null) {
                    clearTimeout(timerTimeout);
                    timerTimeout = null;
                  }
                }
              };
              var resolve = once(function(res2) {
                factory.resolved = ensureCtor(res2, baseCtor);
                if (!sync) {
                  forceRender(true);
                } else {
                  owners.length = 0;
                }
              });
              var reject = once(function(reason) {
                warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ""));
                if (isDef(factory.errorComp)) {
                  factory.error = true;
                  forceRender(true);
                }
              });
              var res = factory(resolve, reject);
              if (isObject(res)) {
                if (isPromise(res)) {
                  if (isUndef(factory.resolved)) {
                    res.then(resolve, reject);
                  }
                } else if (isPromise(res.component)) {
                  res.component.then(resolve, reject);
                  if (isDef(res.error)) {
                    factory.errorComp = ensureCtor(res.error, baseCtor);
                  }
                  if (isDef(res.loading)) {
                    factory.loadingComp = ensureCtor(res.loading, baseCtor);
                    if (res.delay === 0) {
                      factory.loading = true;
                    } else {
                      timerLoading = setTimeout(function() {
                        timerLoading = null;
                        if (isUndef(factory.resolved) && isUndef(factory.error)) {
                          factory.loading = true;
                          forceRender(false);
                        }
                      }, res.delay || 200);
                    }
                  }
                  if (isDef(res.timeout)) {
                    timerTimeout = setTimeout(function() {
                      timerTimeout = null;
                      if (isUndef(factory.resolved)) {
                        reject(true ? "timeout (" + res.timeout + "ms)" : void 0);
                      }
                    }, res.timeout);
                  }
                }
              }
              sync = false;
              return factory.loading ? factory.loadingComp : factory.resolved;
            }
          }
          function getFirstComponentChild(children) {
            if (Array.isArray(children)) {
              for (var i = 0; i < children.length; i++) {
                var c = children[i];
                if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
                  return c;
                }
              }
            }
          }
          function initEvents(vm) {
            vm._events = Object.create(null);
            vm._hasHookEvent = false;
            var listeners = vm.$options._parentListeners;
            if (listeners) {
              updateComponentListeners(vm, listeners);
            }
          }
          var target;
          function add(event, fn) {
            target.$on(event, fn);
          }
          function remove$1(event, fn) {
            target.$off(event, fn);
          }
          function createOnceHandler(event, fn) {
            var _target = target;
            return function onceHandler() {
              var res = fn.apply(null, arguments);
              if (res !== null) {
                _target.$off(event, onceHandler);
              }
            };
          }
          function updateComponentListeners(vm, listeners, oldListeners) {
            target = vm;
            updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
            target = void 0;
          }
          function eventsMixin(Vue2) {
            var hookRE = /^hook:/;
            Vue2.prototype.$on = function(event, fn) {
              var vm = this;
              if (Array.isArray(event)) {
                for (var i = 0, l = event.length; i < l; i++) {
                  vm.$on(event[i], fn);
                }
              } else {
                (vm._events[event] || (vm._events[event] = [])).push(fn);
                if (hookRE.test(event)) {
                  vm._hasHookEvent = true;
                }
              }
              return vm;
            };
            Vue2.prototype.$once = function(event, fn) {
              var vm = this;
              function on() {
                vm.$off(event, on);
                fn.apply(vm, arguments);
              }
              on.fn = fn;
              vm.$on(event, on);
              return vm;
            };
            Vue2.prototype.$off = function(event, fn) {
              var vm = this;
              if (!arguments.length) {
                vm._events = Object.create(null);
                return vm;
              }
              if (Array.isArray(event)) {
                for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
                  vm.$off(event[i$1], fn);
                }
                return vm;
              }
              var cbs = vm._events[event];
              if (!cbs) {
                return vm;
              }
              if (!fn) {
                vm._events[event] = null;
                return vm;
              }
              var cb;
              var i = cbs.length;
              while (i--) {
                cb = cbs[i];
                if (cb === fn || cb.fn === fn) {
                  cbs.splice(i, 1);
                  break;
                }
              }
              return vm;
            };
            Vue2.prototype.$emit = function(event) {
              var vm = this;
              if (true) {
                var lowerCaseEvent = event.toLowerCase();
                if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
                  tip('Event "' + lowerCaseEvent + '" is emitted in component ' + formatComponentName(vm) + ' but the handler is registered for "' + event + '". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "' + hyphenate(event) + '" instead of "' + event + '".');
                }
              }
              var cbs = vm._events[event];
              if (cbs) {
                cbs = cbs.length > 1 ? toArray(cbs) : cbs;
                var args = toArray(arguments, 1);
                var info = 'event handler for "' + event + '"';
                for (var i = 0, l = cbs.length; i < l; i++) {
                  invokeWithErrorHandling(cbs[i], vm, args, vm, info);
                }
              }
              return vm;
            };
          }
          var activeInstance = null;
          var isUpdatingChildComponent = false;
          function setActiveInstance(vm) {
            var prevActiveInstance = activeInstance;
            activeInstance = vm;
            return function() {
              activeInstance = prevActiveInstance;
            };
          }
          function initLifecycle(vm) {
            var options = vm.$options;
            var parent = options.parent;
            if (parent && !options.abstract) {
              while (parent.$options.abstract && parent.$parent) {
                parent = parent.$parent;
              }
              parent.$children.push(vm);
            }
            vm.$parent = parent;
            vm.$root = parent ? parent.$root : vm;
            vm.$children = [];
            vm.$refs = {};
            vm._watcher = null;
            vm._inactive = null;
            vm._directInactive = false;
            vm._isMounted = false;
            vm._isDestroyed = false;
            vm._isBeingDestroyed = false;
          }
          function lifecycleMixin(Vue2) {
            Vue2.prototype._update = function(vnode, hydrating) {
              var vm = this;
              var prevEl = vm.$el;
              var prevVnode = vm._vnode;
              var restoreActiveInstance = setActiveInstance(vm);
              vm._vnode = vnode;
              if (!prevVnode) {
                vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false);
              } else {
                vm.$el = vm.__patch__(prevVnode, vnode);
              }
              restoreActiveInstance();
              if (prevEl) {
                prevEl.__vue__ = null;
              }
              if (vm.$el) {
                vm.$el.__vue__ = vm;
              }
              if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
                vm.$parent.$el = vm.$el;
              }
            };
            Vue2.prototype.$forceUpdate = function() {
              var vm = this;
              if (vm._watcher) {
                vm._watcher.update();
              }
            };
            Vue2.prototype.$destroy = function() {
              var vm = this;
              if (vm._isBeingDestroyed) {
                return;
              }
              callHook(vm, "beforeDestroy");
              vm._isBeingDestroyed = true;
              var parent = vm.$parent;
              if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
                remove(parent.$children, vm);
              }
              if (vm._watcher) {
                vm._watcher.teardown();
              }
              var i = vm._watchers.length;
              while (i--) {
                vm._watchers[i].teardown();
              }
              if (vm._data.__ob__) {
                vm._data.__ob__.vmCount--;
              }
              vm._isDestroyed = true;
              vm.__patch__(vm._vnode, null);
              callHook(vm, "destroyed");
              vm.$off();
              if (vm.$el) {
                vm.$el.__vue__ = null;
              }
              if (vm.$vnode) {
                vm.$vnode.parent = null;
              }
            };
          }
          function mountComponent(vm, el, hydrating) {
            vm.$el = el;
            if (!vm.$options.render) {
              vm.$options.render = createEmptyVNode;
              if (true) {
                if (vm.$options.template && vm.$options.template.charAt(0) !== "#" || vm.$options.el || el) {
                  warn("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.", vm);
                } else {
                  warn("Failed to mount component: template or render function not defined.", vm);
                }
              }
            }
            callHook(vm, "beforeMount");
            var updateComponent;
            if (config.performance && mark) {
              updateComponent = function updateComponent2() {
                var name = vm._name;
                var id = vm._uid;
                var startTag = "vue-perf-start:" + id;
                var endTag = "vue-perf-end:" + id;
                mark(startTag);
                var vnode = vm._render();
                mark(endTag);
                measure("vue " + name + " render", startTag, endTag);
                mark(startTag);
                vm._update(vnode, hydrating);
                mark(endTag);
                measure("vue " + name + " patch", startTag, endTag);
              };
            } else {
              updateComponent = function updateComponent2() {
                vm._update(vm._render(), hydrating);
              };
            }
            new Watcher(vm, updateComponent, noop, {
              before: function before() {
                if (vm._isMounted && !vm._isDestroyed) {
                  callHook(vm, "beforeUpdate");
                }
              }
            }, true);
            hydrating = false;
            if (vm.$vnode == null) {
              vm._isMounted = true;
              callHook(vm, "mounted");
            }
            return vm;
          }
          function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
            if (true) {
              isUpdatingChildComponent = true;
            }
            var newScopedSlots = parentVnode.data.scopedSlots;
            var oldScopedSlots = vm.$scopedSlots;
            var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key || !newScopedSlots && vm.$scopedSlots.$key);
            var needsForceUpdate = !!(renderChildren || vm.$options._renderChildren || hasDynamicScopedSlot);
            vm.$options._parentVnode = parentVnode;
            vm.$vnode = parentVnode;
            if (vm._vnode) {
              vm._vnode.parent = parentVnode;
            }
            vm.$options._renderChildren = renderChildren;
            vm.$attrs = parentVnode.data.attrs || emptyObject;
            vm.$listeners = listeners || emptyObject;
            if (propsData && vm.$options.props) {
              toggleObserving(false);
              var props2 = vm._props;
              var propKeys = vm.$options._propKeys || [];
              for (var i = 0; i < propKeys.length; i++) {
                var key = propKeys[i];
                var propOptions = vm.$options.props;
                props2[key] = validateProp(key, propOptions, propsData, vm);
              }
              toggleObserving(true);
              vm.$options.propsData = propsData;
            }
            listeners = listeners || emptyObject;
            var oldListeners = vm.$options._parentListeners;
            vm.$options._parentListeners = listeners;
            updateComponentListeners(vm, listeners, oldListeners);
            if (needsForceUpdate) {
              vm.$slots = resolveSlots(renderChildren, parentVnode.context);
              vm.$forceUpdate();
            }
            if (true) {
              isUpdatingChildComponent = false;
            }
          }
          function isInInactiveTree(vm) {
            while (vm && (vm = vm.$parent)) {
              if (vm._inactive) {
                return true;
              }
            }
            return false;
          }
          function activateChildComponent(vm, direct) {
            if (direct) {
              vm._directInactive = false;
              if (isInInactiveTree(vm)) {
                return;
              }
            } else if (vm._directInactive) {
              return;
            }
            if (vm._inactive || vm._inactive === null) {
              vm._inactive = false;
              for (var i = 0; i < vm.$children.length; i++) {
                activateChildComponent(vm.$children[i]);
              }
              callHook(vm, "activated");
            }
          }
          function deactivateChildComponent(vm, direct) {
            if (direct) {
              vm._directInactive = true;
              if (isInInactiveTree(vm)) {
                return;
              }
            }
            if (!vm._inactive) {
              vm._inactive = true;
              for (var i = 0; i < vm.$children.length; i++) {
                deactivateChildComponent(vm.$children[i]);
              }
              callHook(vm, "deactivated");
            }
          }
          function callHook(vm, hook) {
            pushTarget();
            var handlers = vm.$options[hook];
            var info = hook + " hook";
            if (handlers) {
              for (var i = 0, j = handlers.length; i < j; i++) {
                invokeWithErrorHandling(handlers[i], vm, null, vm, info);
              }
            }
            if (vm._hasHookEvent) {
              vm.$emit("hook:" + hook);
            }
            popTarget();
          }
          var MAX_UPDATE_COUNT = 100;
          var queue = [];
          var activatedChildren = [];
          var has = {};
          var circular = {};
          var waiting = false;
          var flushing = false;
          var index = 0;
          function resetSchedulerState() {
            index = queue.length = activatedChildren.length = 0;
            has = {};
            if (true) {
              circular = {};
            }
            waiting = flushing = false;
          }
          var currentFlushTimestamp = 0;
          var getNow = Date.now;
          if (inBrowser && !isIE) {
            var performance2 = window2.performance;
            if (performance2 && typeof performance2.now === "function" && getNow() > document.createEvent("Event").timeStamp) {
              getNow = function getNow2() {
                return performance2.now();
              };
            }
          }
          function flushSchedulerQueue() {
            currentFlushTimestamp = getNow();
            flushing = true;
            var watcher, id;
            queue.sort(function(a, b) {
              return a.id - b.id;
            });
            for (index = 0; index < queue.length; index++) {
              watcher = queue[index];
              if (watcher.before) {
                watcher.before();
              }
              id = watcher.id;
              has[id] = null;
              watcher.run();
              if (has[id] != null) {
                circular[id] = (circular[id] || 0) + 1;
                if (circular[id] > MAX_UPDATE_COUNT) {
                  warn("You may have an infinite update loop " + (watcher.user ? 'in watcher with expression "' + watcher.expression + '"' : "in a component render function."), watcher.vm);
                  break;
                }
              }
            }
            var activatedQueue = activatedChildren.slice();
            var updatedQueue = queue.slice();
            resetSchedulerState();
            callActivatedHooks(activatedQueue);
            callUpdatedHooks(updatedQueue);
            if (devtools && config.devtools) {
              devtools.emit("flush");
            }
          }
          function callUpdatedHooks(queue2) {
            var i = queue2.length;
            while (i--) {
              var watcher = queue2[i];
              var vm = watcher.vm;
              if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
                callHook(vm, "updated");
              }
            }
          }
          function queueActivatedComponent(vm) {
            vm._inactive = false;
            activatedChildren.push(vm);
          }
          function callActivatedHooks(queue2) {
            for (var i = 0; i < queue2.length; i++) {
              queue2[i]._inactive = true;
              activateChildComponent(queue2[i], true);
            }
          }
          function queueWatcher(watcher) {
            var id = watcher.id;
            if (has[id] == null) {
              has[id] = true;
              if (!flushing) {
                queue.push(watcher);
              } else {
                var i = queue.length - 1;
                while (i > index && queue[i].id > watcher.id) {
                  i--;
                }
                queue.splice(i + 1, 0, watcher);
              }
              if (!waiting) {
                waiting = true;
                if (!config.async) {
                  flushSchedulerQueue();
                  return;
                }
                nextTick(flushSchedulerQueue);
              }
            }
          }
          var uid$2 = 0;
          var Watcher = function Watcher2(vm, expOrFn, cb, options, isRenderWatcher) {
            this.vm = vm;
            if (isRenderWatcher) {
              vm._watcher = this;
            }
            vm._watchers.push(this);
            if (options) {
              this.deep = !!options.deep;
              this.user = !!options.user;
              this.lazy = !!options.lazy;
              this.sync = !!options.sync;
              this.before = options.before;
            } else {
              this.deep = this.user = this.lazy = this.sync = false;
            }
            this.cb = cb;
            this.id = ++uid$2;
            this.active = true;
            this.dirty = this.lazy;
            this.deps = [];
            this.newDeps = [];
            this.depIds = new _Set();
            this.newDepIds = new _Set();
            this.expression = true ? expOrFn.toString() : void 0;
            if (typeof expOrFn === "function") {
              this.getter = expOrFn;
            } else {
              this.getter = parsePath(expOrFn);
              if (!this.getter) {
                this.getter = noop;
                warn('Failed watching path: "' + expOrFn + '" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.', vm);
              }
            }
            this.value = this.lazy ? void 0 : this.get();
          };
          Watcher.prototype.get = function get() {
            pushTarget(this);
            var value;
            var vm = this.vm;
            try {
              value = this.getter.call(vm, vm);
            } catch (e) {
              if (this.user) {
                handleError(e, vm, 'getter for watcher "' + this.expression + '"');
              } else {
                throw e;
              }
            } finally {
              if (this.deep) {
                traverse(value);
              }
              popTarget();
              this.cleanupDeps();
            }
            return value;
          };
          Watcher.prototype.addDep = function addDep(dep) {
            var id = dep.id;
            if (!this.newDepIds.has(id)) {
              this.newDepIds.add(id);
              this.newDeps.push(dep);
              if (!this.depIds.has(id)) {
                dep.addSub(this);
              }
            }
          };
          Watcher.prototype.cleanupDeps = function cleanupDeps() {
            var i = this.deps.length;
            while (i--) {
              var dep = this.deps[i];
              if (!this.newDepIds.has(dep.id)) {
                dep.removeSub(this);
              }
            }
            var tmp = this.depIds;
            this.depIds = this.newDepIds;
            this.newDepIds = tmp;
            this.newDepIds.clear();
            tmp = this.deps;
            this.deps = this.newDeps;
            this.newDeps = tmp;
            this.newDeps.length = 0;
          };
          Watcher.prototype.update = function update() {
            if (this.lazy) {
              this.dirty = true;
            } else if (this.sync) {
              this.run();
            } else {
              queueWatcher(this);
            }
          };
          Watcher.prototype.run = function run() {
            if (this.active) {
              var value = this.get();
              if (value !== this.value || isObject(value) || this.deep) {
                var oldValue = this.value;
                this.value = value;
                if (this.user) {
                  var info = 'callback for watcher "' + this.expression + '"';
                  invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
                } else {
                  this.cb.call(this.vm, value, oldValue);
                }
              }
            }
          };
          Watcher.prototype.evaluate = function evaluate() {
            this.value = this.get();
            this.dirty = false;
          };
          Watcher.prototype.depend = function depend() {
            var i = this.deps.length;
            while (i--) {
              this.deps[i].depend();
            }
          };
          Watcher.prototype.teardown = function teardown() {
            if (this.active) {
              if (!this.vm._isBeingDestroyed) {
                remove(this.vm._watchers, this);
              }
              var i = this.deps.length;
              while (i--) {
                this.deps[i].removeSub(this);
              }
              this.active = false;
            }
          };
          var sharedPropertyDefinition = {
            enumerable: true,
            configurable: true,
            get: noop,
            set: noop
          };
          function proxy(target2, sourceKey, key) {
            sharedPropertyDefinition.get = function proxyGetter() {
              return this[sourceKey][key];
            };
            sharedPropertyDefinition.set = function proxySetter(val) {
              this[sourceKey][key] = val;
            };
            Object.defineProperty(target2, key, sharedPropertyDefinition);
          }
          function initState(vm) {
            vm._watchers = [];
            var opts2 = vm.$options;
            if (opts2.props) {
              initProps(vm, opts2.props);
            }
            if (opts2.methods) {
              initMethods(vm, opts2.methods);
            }
            if (opts2.data) {
              initData(vm);
            } else {
              observe(vm._data = {}, true);
            }
            if (opts2.computed) {
              initComputed(vm, opts2.computed);
            }
            if (opts2.watch && opts2.watch !== nativeWatch) {
              initWatch(vm, opts2.watch);
            }
          }
          function initProps(vm, propsOptions) {
            var propsData = vm.$options.propsData || {};
            var props2 = vm._props = {};
            var keys = vm.$options._propKeys = [];
            var isRoot = !vm.$parent;
            if (!isRoot) {
              toggleObserving(false);
            }
            var loop = function loop2(key2) {
              keys.push(key2);
              var value = validateProp(key2, propsOptions, propsData, vm);
              if (true) {
                var hyphenatedKey = hyphenate(key2);
                if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
                  warn('"' + hyphenatedKey + '" is a reserved attribute and cannot be used as component prop.', vm);
                }
                defineReactive$$1(props2, key2, value, function() {
                  if (!isRoot && !isUpdatingChildComponent) {
                    warn(`Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "` + key2 + '"', vm);
                  }
                });
              } else {
              }
              if (!(key2 in vm)) {
                proxy(vm, "_props", key2);
              }
            };
            for (var key in propsOptions) {
              loop(key);
            }
            toggleObserving(true);
          }
          function initData(vm) {
            var data = vm.$options.data;
            data = vm._data = typeof data === "function" ? getData(data, vm) : data || {};
            if (!isPlainObject(data)) {
              data = {};
              warn("data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", vm);
            }
            var keys = Object.keys(data);
            var props2 = vm.$options.props;
            var methods = vm.$options.methods;
            var i = keys.length;
            while (i--) {
              var key = keys[i];
              if (true) {
                if (methods && hasOwn(methods, key)) {
                  warn('Method "' + key + '" has already been defined as a data property.', vm);
                }
              }
              if (props2 && hasOwn(props2, key)) {
                warn('The data property "' + key + '" is already declared as a prop. Use prop default value instead.', vm);
              } else if (!isReserved(key)) {
                proxy(vm, "_data", key);
              }
            }
            observe(data, true);
          }
          function getData(data, vm) {
            pushTarget();
            try {
              return data.call(vm, vm);
            } catch (e) {
              handleError(e, vm, "data()");
              return {};
            } finally {
              popTarget();
            }
          }
          var computedWatcherOptions = {
            lazy: true
          };
          function initComputed(vm, computed) {
            var watchers = vm._computedWatchers = Object.create(null);
            var isSSR = isServerRendering();
            for (var key in computed) {
              var userDef = computed[key];
              var getter = typeof userDef === "function" ? userDef : userDef.get;
              if (getter == null) {
                warn('Getter is missing for computed property "' + key + '".', vm);
              }
              if (!isSSR) {
                watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
              }
              if (!(key in vm)) {
                defineComputed(vm, key, userDef);
              } else if (true) {
                if (key in vm.$data) {
                  warn('The computed property "' + key + '" is already defined in data.', vm);
                } else if (vm.$options.props && key in vm.$options.props) {
                  warn('The computed property "' + key + '" is already defined as a prop.', vm);
                } else if (vm.$options.methods && key in vm.$options.methods) {
                  warn('The computed property "' + key + '" is already defined as a method.', vm);
                }
              }
            }
          }
          function defineComputed(target2, key, userDef) {
            var shouldCache = !isServerRendering();
            if (typeof userDef === "function") {
              sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
              sharedPropertyDefinition.set = noop;
            } else {
              sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
              sharedPropertyDefinition.set = userDef.set || noop;
            }
            if (sharedPropertyDefinition.set === noop) {
              sharedPropertyDefinition.set = function() {
                warn('Computed property "' + key + '" was assigned to but it has no setter.', this);
              };
            }
            Object.defineProperty(target2, key, sharedPropertyDefinition);
          }
          function createComputedGetter(key) {
            return function computedGetter() {
              var watcher = this._computedWatchers && this._computedWatchers[key];
              if (watcher) {
                if (watcher.dirty) {
                  watcher.evaluate();
                }
                if (Dep.target) {
                  watcher.depend();
                }
                return watcher.value;
              }
            };
          }
          function createGetterInvoker(fn) {
            return function computedGetter() {
              return fn.call(this, this);
            };
          }
          function initMethods(vm, methods) {
            var props2 = vm.$options.props;
            for (var key in methods) {
              if (true) {
                if (typeof methods[key] !== "function") {
                  warn('Method "' + key + '" has type "' + Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["a"])(methods[key]) + '" in the component definition. Did you reference the function correctly?', vm);
                }
                if (props2 && hasOwn(props2, key)) {
                  warn('Method "' + key + '" has already been defined as a prop.', vm);
                }
                if (key in vm && isReserved(key)) {
                  warn('Method "' + key + '" conflicts with an existing Vue instance method. Avoid defining component methods that start with _ or $.');
                }
              }
              vm[key] = typeof methods[key] !== "function" ? noop : bind(methods[key], vm);
            }
          }
          function initWatch(vm, watch) {
            for (var key in watch) {
              var handler = watch[key];
              if (Array.isArray(handler)) {
                for (var i = 0; i < handler.length; i++) {
                  createWatcher(vm, key, handler[i]);
                }
              } else {
                createWatcher(vm, key, handler);
              }
            }
          }
          function createWatcher(vm, expOrFn, handler, options) {
            if (isPlainObject(handler)) {
              options = handler;
              handler = handler.handler;
            }
            if (typeof handler === "string") {
              handler = vm[handler];
            }
            return vm.$watch(expOrFn, handler, options);
          }
          function stateMixin(Vue2) {
            var dataDef = {};
            dataDef.get = function() {
              return this._data;
            };
            var propsDef = {};
            propsDef.get = function() {
              return this._props;
            };
            if (true) {
              dataDef.set = function() {
                warn("Avoid replacing instance root $data. Use nested data properties instead.", this);
              };
              propsDef.set = function() {
                warn("$props is readonly.", this);
              };
            }
            Object.defineProperty(Vue2.prototype, "$data", dataDef);
            Object.defineProperty(Vue2.prototype, "$props", propsDef);
            Vue2.prototype.$set = set;
            Vue2.prototype.$delete = del;
            Vue2.prototype.$watch = function(expOrFn, cb, options) {
              var vm = this;
              if (isPlainObject(cb)) {
                return createWatcher(vm, expOrFn, cb, options);
              }
              options = options || {};
              options.user = true;
              var watcher = new Watcher(vm, expOrFn, cb, options);
              if (options.immediate) {
                var info = 'callback for immediate watcher "' + watcher.expression + '"';
                pushTarget();
                invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
                popTarget();
              }
              return function unwatchFn() {
                watcher.teardown();
              };
            };
          }
          var uid$3 = 0;
          function initMixin(Vue2) {
            Vue2.prototype._init = function(options) {
              var vm = this;
              vm._uid = uid$3++;
              var startTag, endTag;
              if (config.performance && mark) {
                startTag = "vue-perf-start:" + vm._uid;
                endTag = "vue-perf-end:" + vm._uid;
                mark(startTag);
              }
              vm._isVue = true;
              if (options && options._isComponent) {
                initInternalComponent(vm, options);
              } else {
                vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
              }
              if (true) {
                initProxy(vm);
              } else {
              }
              vm._self = vm;
              initLifecycle(vm);
              initEvents(vm);
              initRender(vm);
              callHook(vm, "beforeCreate");
              initInjections(vm);
              initState(vm);
              initProvide(vm);
              callHook(vm, "created");
              if (config.performance && mark) {
                vm._name = formatComponentName(vm, false);
                mark(endTag);
                measure("vue " + vm._name + " init", startTag, endTag);
              }
              if (vm.$options.el) {
                vm.$mount(vm.$options.el);
              }
            };
          }
          function initInternalComponent(vm, options) {
            var opts2 = vm.$options = Object.create(vm.constructor.options);
            var parentVnode = options._parentVnode;
            opts2.parent = options.parent;
            opts2._parentVnode = parentVnode;
            var vnodeComponentOptions = parentVnode.componentOptions;
            opts2.propsData = vnodeComponentOptions.propsData;
            opts2._parentListeners = vnodeComponentOptions.listeners;
            opts2._renderChildren = vnodeComponentOptions.children;
            opts2._componentTag = vnodeComponentOptions.tag;
            if (options.render) {
              opts2.render = options.render;
              opts2.staticRenderFns = options.staticRenderFns;
            }
          }
          function resolveConstructorOptions(Ctor) {
            var options = Ctor.options;
            if (Ctor.super) {
              var superOptions = resolveConstructorOptions(Ctor.super);
              var cachedSuperOptions = Ctor.superOptions;
              if (superOptions !== cachedSuperOptions) {
                Ctor.superOptions = superOptions;
                var modifiedOptions = resolveModifiedOptions(Ctor);
                if (modifiedOptions) {
                  extend(Ctor.extendOptions, modifiedOptions);
                }
                options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
                if (options.name) {
                  options.components[options.name] = Ctor;
                }
              }
            }
            return options;
          }
          function resolveModifiedOptions(Ctor) {
            var modified;
            var latest = Ctor.options;
            var sealed = Ctor.sealedOptions;
            for (var key in latest) {
              if (latest[key] !== sealed[key]) {
                if (!modified) {
                  modified = {};
                }
                modified[key] = latest[key];
              }
            }
            return modified;
          }
          function Vue(options) {
            if (!(this instanceof Vue)) {
              warn("Vue is a constructor and should be called with the `new` keyword");
            }
            this._init(options);
          }
          initMixin(Vue);
          stateMixin(Vue);
          eventsMixin(Vue);
          lifecycleMixin(Vue);
          renderMixin(Vue);
          function initUse(Vue2) {
            Vue2.use = function(plugin) {
              var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
              if (installedPlugins.indexOf(plugin) > -1) {
                return this;
              }
              var args = toArray(arguments, 1);
              args.unshift(this);
              if (typeof plugin.install === "function") {
                plugin.install.apply(plugin, args);
              } else if (typeof plugin === "function") {
                plugin.apply(null, args);
              }
              installedPlugins.push(plugin);
              return this;
            };
          }
          function initMixin$1(Vue2) {
            Vue2.mixin = function(mixin) {
              this.options = mergeOptions(this.options, mixin);
              return this;
            };
          }
          function initExtend(Vue2) {
            Vue2.cid = 0;
            var cid = 1;
            Vue2.extend = function(extendOptions) {
              extendOptions = extendOptions || {};
              var Super = this;
              var SuperId = Super.cid;
              var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
              if (cachedCtors[SuperId]) {
                return cachedCtors[SuperId];
              }
              var name = extendOptions.name || Super.options.name;
              if (name) {
                validateComponentName(name);
              }
              var Sub = function VueComponent(options) {
                this._init(options);
              };
              Sub.prototype = Object.create(Super.prototype);
              Sub.prototype.constructor = Sub;
              Sub.cid = cid++;
              Sub.options = mergeOptions(Super.options, extendOptions);
              Sub["super"] = Super;
              if (Sub.options.props) {
                initProps$1(Sub);
              }
              if (Sub.options.computed) {
                initComputed$1(Sub);
              }
              Sub.extend = Super.extend;
              Sub.mixin = Super.mixin;
              Sub.use = Super.use;
              ASSET_TYPES.forEach(function(type) {
                Sub[type] = Super[type];
              });
              if (name) {
                Sub.options.components[name] = Sub;
              }
              Sub.superOptions = Super.options;
              Sub.extendOptions = extendOptions;
              Sub.sealedOptions = extend({}, Sub.options);
              cachedCtors[SuperId] = Sub;
              return Sub;
            };
          }
          function initProps$1(Comp) {
            var props2 = Comp.options.props;
            for (var key in props2) {
              proxy(Comp.prototype, "_props", key);
            }
          }
          function initComputed$1(Comp) {
            var computed = Comp.options.computed;
            for (var key in computed) {
              defineComputed(Comp.prototype, key, computed[key]);
            }
          }
          function initAssetRegisters(Vue2) {
            ASSET_TYPES.forEach(function(type) {
              Vue2[type] = function(id, definition) {
                if (!definition) {
                  return this.options[type + "s"][id];
                } else {
                  if (type === "component") {
                    validateComponentName(id);
                  }
                  if (type === "component" && isPlainObject(definition)) {
                    definition.name = definition.name || id;
                    definition = this.options._base.extend(definition);
                  }
                  if (type === "directive" && typeof definition === "function") {
                    definition = {
                      bind: definition,
                      update: definition
                    };
                  }
                  this.options[type + "s"][id] = definition;
                  return definition;
                }
              };
            });
          }
          function getComponentName(opts2) {
            return opts2 && (opts2.Ctor.options.name || opts2.tag);
          }
          function matches(pattern, name) {
            if (Array.isArray(pattern)) {
              return pattern.indexOf(name) > -1;
            } else if (typeof pattern === "string") {
              return pattern.split(",").indexOf(name) > -1;
            } else if (isRegExp(pattern)) {
              return pattern.test(name);
            }
            return false;
          }
          function pruneCache(keepAliveInstance, filter) {
            var cache = keepAliveInstance.cache;
            var keys = keepAliveInstance.keys;
            var _vnode = keepAliveInstance._vnode;
            for (var key in cache) {
              var entry = cache[key];
              if (entry) {
                var name = entry.name;
                if (name && !filter(name)) {
                  pruneCacheEntry(cache, key, keys, _vnode);
                }
              }
            }
          }
          function pruneCacheEntry(cache, key, keys, current) {
            var entry = cache[key];
            if (entry && (!current || entry.tag !== current.tag)) {
              entry.componentInstance.$destroy();
            }
            cache[key] = null;
            remove(keys, key);
          }
          var patternTypes = [String, RegExp, Array];
          var KeepAlive = {
            name: "keep-alive",
            abstract: true,
            props: {
              include: patternTypes,
              exclude: patternTypes,
              max: [String, Number]
            },
            methods: {
              cacheVNode: function cacheVNode() {
                var ref2 = this;
                var cache = ref2.cache;
                var keys = ref2.keys;
                var vnodeToCache = ref2.vnodeToCache;
                var keyToCache = ref2.keyToCache;
                if (vnodeToCache) {
                  var tag = vnodeToCache.tag;
                  var componentInstance = vnodeToCache.componentInstance;
                  var componentOptions = vnodeToCache.componentOptions;
                  cache[keyToCache] = {
                    name: getComponentName(componentOptions),
                    tag,
                    componentInstance
                  };
                  keys.push(keyToCache);
                  if (this.max && keys.length > parseInt(this.max)) {
                    pruneCacheEntry(cache, keys[0], keys, this._vnode);
                  }
                  this.vnodeToCache = null;
                }
              }
            },
            created: function created() {
              this.cache = Object.create(null);
              this.keys = [];
            },
            destroyed: function destroyed() {
              for (var key in this.cache) {
                pruneCacheEntry(this.cache, key, this.keys);
              }
            },
            mounted: function mounted() {
              var this$1 = this;
              this.cacheVNode();
              this.$watch("include", function(val) {
                pruneCache(this$1, function(name) {
                  return matches(val, name);
                });
              });
              this.$watch("exclude", function(val) {
                pruneCache(this$1, function(name) {
                  return !matches(val, name);
                });
              });
            },
            updated: function updated() {
              this.cacheVNode();
            },
            render: function render() {
              var slot = this.$slots.default;
              var vnode = getFirstComponentChild(slot);
              var componentOptions = vnode && vnode.componentOptions;
              if (componentOptions) {
                var name = getComponentName(componentOptions);
                var ref2 = this;
                var include = ref2.include;
                var exclude = ref2.exclude;
                if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
                  return vnode;
                }
                var ref$1 = this;
                var cache = ref$1.cache;
                var keys = ref$1.keys;
                var key = vnode.key == null ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : "") : vnode.key;
                if (cache[key]) {
                  vnode.componentInstance = cache[key].componentInstance;
                  remove(keys, key);
                  keys.push(key);
                } else {
                  this.vnodeToCache = vnode;
                  this.keyToCache = key;
                }
                vnode.data.keepAlive = true;
              }
              return vnode || slot && slot[0];
            }
          };
          var builtInComponents = {
            KeepAlive
          };
          function initGlobalAPI(Vue2) {
            var configDef = {};
            configDef.get = function() {
              return config;
            };
            if (true) {
              configDef.set = function() {
                warn("Do not replace the Vue.config object, set individual fields instead.");
              };
            }
            Object.defineProperty(Vue2, "config", configDef);
            Vue2.util = {
              warn,
              extend,
              mergeOptions,
              defineReactive: defineReactive$$1
            };
            Vue2.set = set;
            Vue2.delete = del;
            Vue2.nextTick = nextTick;
            Vue2.observable = function(obj) {
              observe(obj);
              return obj;
            };
            Vue2.options = Object.create(null);
            ASSET_TYPES.forEach(function(type) {
              Vue2.options[type + "s"] = Object.create(null);
            });
            Vue2.options._base = Vue2;
            extend(Vue2.options.components, builtInComponents);
            initUse(Vue2);
            initMixin$1(Vue2);
            initExtend(Vue2);
            initAssetRegisters(Vue2);
          }
          initGlobalAPI(Vue);
          Object.defineProperty(Vue.prototype, "$isServer", {
            get: isServerRendering
          });
          Object.defineProperty(Vue.prototype, "$ssrContext", {
            get: function get() {
              return this.$vnode && this.$vnode.ssrContext;
            }
          });
          Object.defineProperty(Vue, "FunctionalRenderContext", {
            value: FunctionalRenderContext
          });
          Vue.version = "2.6.14";
          var isReservedAttr = makeMap("style,class");
          var acceptValue = makeMap("input,textarea,option,select,progress");
          var mustUseProp = function mustUseProp2(tag, type, attr) {
            return attr === "value" && acceptValue(tag) && type !== "button" || attr === "selected" && tag === "option" || attr === "checked" && tag === "input" || attr === "muted" && tag === "video";
          };
          var isEnumeratedAttr = makeMap("contenteditable,draggable,spellcheck");
          var isValidContentEditableValue = makeMap("events,caret,typing,plaintext-only");
          var convertEnumeratedValue = function convertEnumeratedValue2(key, value) {
            return isFalsyAttrValue(value) || value === "false" ? "false" : key === "contenteditable" && isValidContentEditableValue(value) ? value : "true";
          };
          var isBooleanAttr = makeMap("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible");
          var xlinkNS = "http://www.w3.org/1999/xlink";
          var isXlink = function isXlink2(name) {
            return name.charAt(5) === ":" && name.slice(0, 5) === "xlink";
          };
          var getXlinkProp = function getXlinkProp2(name) {
            return isXlink(name) ? name.slice(6, name.length) : "";
          };
          var isFalsyAttrValue = function isFalsyAttrValue2(val) {
            return val == null || val === false;
          };
          function genClassForVnode(vnode) {
            var data = vnode.data;
            var parentNode2 = vnode;
            var childNode = vnode;
            while (isDef(childNode.componentInstance)) {
              childNode = childNode.componentInstance._vnode;
              if (childNode && childNode.data) {
                data = mergeClassData(childNode.data, data);
              }
            }
            while (isDef(parentNode2 = parentNode2.parent)) {
              if (parentNode2 && parentNode2.data) {
                data = mergeClassData(data, parentNode2.data);
              }
            }
            return renderClass(data.staticClass, data.class);
          }
          function mergeClassData(child, parent) {
            return {
              staticClass: concat(child.staticClass, parent.staticClass),
              class: isDef(child.class) ? [child.class, parent.class] : parent.class
            };
          }
          function renderClass(staticClass, dynamicClass) {
            if (isDef(staticClass) || isDef(dynamicClass)) {
              return concat(staticClass, stringifyClass(dynamicClass));
            }
            return "";
          }
          function concat(a, b) {
            return a ? b ? a + " " + b : a : b || "";
          }
          function stringifyClass(value) {
            if (Array.isArray(value)) {
              return stringifyArray(value);
            }
            if (isObject(value)) {
              return stringifyObject(value);
            }
            if (typeof value === "string") {
              return value;
            }
            return "";
          }
          function stringifyArray(value) {
            var res = "";
            var stringified;
            for (var i = 0, l = value.length; i < l; i++) {
              if (isDef(stringified = stringifyClass(value[i])) && stringified !== "") {
                if (res) {
                  res += " ";
                }
                res += stringified;
              }
            }
            return res;
          }
          function stringifyObject(value) {
            var res = "";
            for (var key in value) {
              if (value[key]) {
                if (res) {
                  res += " ";
                }
                res += key;
              }
            }
            return res;
          }
          var namespaceMap = {
            svg: "http://www.w3.org/2000/svg",
            math: "http://www.w3.org/1998/Math/MathML"
          };
          var isHTMLTag = makeMap("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot");
          var isSVG = makeMap("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", true);
          var isReservedTag = function isReservedTag2(tag) {
            return isHTMLTag(tag) || isSVG(tag);
          };
          function getTagNamespace(tag) {
            if (isSVG(tag)) {
              return "svg";
            }
            if (tag === "math") {
              return "math";
            }
          }
          var unknownElementCache = Object.create(null);
          function isUnknownElement(tag) {
            if (!inBrowser) {
              return true;
            }
            if (isReservedTag(tag)) {
              return false;
            }
            tag = tag.toLowerCase();
            if (unknownElementCache[tag] != null) {
              return unknownElementCache[tag];
            }
            var el = document.createElement(tag);
            if (tag.indexOf("-") > -1) {
              return unknownElementCache[tag] = el.constructor === window2.HTMLUnknownElement || el.constructor === window2.HTMLElement;
            } else {
              return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
            }
          }
          var isTextInputType = makeMap("text,number,password,search,email,tel,url");
          function query(el) {
            if (typeof el === "string") {
              var selected = document.querySelector(el);
              if (!selected) {
                warn("Cannot find element: " + el);
                return document.createElement("div");
              }
              return selected;
            } else {
              return el;
            }
          }
          function createElement$1(tagName2, vnode) {
            var elm = document.createElement(tagName2);
            if (tagName2 !== "select") {
              return elm;
            }
            if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== void 0) {
              elm.setAttribute("multiple", "multiple");
            }
            return elm;
          }
          function createElementNS(namespace, tagName2) {
            return document.createElementNS(namespaceMap[namespace], tagName2);
          }
          function createTextNode(text) {
            return document.createTextNode(text);
          }
          function createComment(text) {
            return document.createComment(text);
          }
          function insertBefore(parentNode2, newNode, referenceNode) {
            parentNode2.insertBefore(newNode, referenceNode);
          }
          function removeChild(node, child) {
            node.removeChild(child);
          }
          function appendChild(node, child) {
            node.appendChild(child);
          }
          function parentNode(node) {
            return node.parentNode;
          }
          function nextSibling(node) {
            return node.nextSibling;
          }
          function tagName(node) {
            return node.tagName;
          }
          function setTextContent(node, text) {
            node.textContent = text;
          }
          function setStyleScope(node, scopeId) {
            node.setAttribute(scopeId, "");
          }
          var nodeOps = /* @__PURE__ */ Object.freeze({
            createElement: createElement$1,
            createElementNS,
            createTextNode,
            createComment,
            insertBefore,
            removeChild,
            appendChild,
            parentNode,
            nextSibling,
            tagName,
            setTextContent,
            setStyleScope
          });
          var ref = {
            create: function create(_, vnode) {
              registerRef(vnode);
            },
            update: function update(oldVnode, vnode) {
              if (oldVnode.data.ref !== vnode.data.ref) {
                registerRef(oldVnode, true);
                registerRef(vnode);
              }
            },
            destroy: function destroy(vnode) {
              registerRef(vnode, true);
            }
          };
          function registerRef(vnode, isRemoval) {
            var key = vnode.data.ref;
            if (!isDef(key)) {
              return;
            }
            var vm = vnode.context;
            var ref2 = vnode.componentInstance || vnode.elm;
            var refs = vm.$refs;
            if (isRemoval) {
              if (Array.isArray(refs[key])) {
                remove(refs[key], ref2);
              } else if (refs[key] === ref2) {
                refs[key] = void 0;
              }
            } else {
              if (vnode.data.refInFor) {
                if (!Array.isArray(refs[key])) {
                  refs[key] = [ref2];
                } else if (refs[key].indexOf(ref2) < 0) {
                  refs[key].push(ref2);
                }
              } else {
                refs[key] = ref2;
              }
            }
          }
          var emptyNode = new VNode("", {}, []);
          var hooks = ["create", "activate", "update", "remove", "destroy"];
          function sameVnode(a, b) {
            return a.key === b.key && a.asyncFactory === b.asyncFactory && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error));
          }
          function sameInputType(a, b) {
            if (a.tag !== "input") {
              return true;
            }
            var i;
            var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
            var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
            return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
          }
          function createKeyToOldIdx(children, beginIdx, endIdx) {
            var i, key;
            var map = {};
            for (i = beginIdx; i <= endIdx; ++i) {
              key = children[i].key;
              if (isDef(key)) {
                map[key] = i;
              }
            }
            return map;
          }
          function createPatchFunction(backend) {
            var i, j;
            var cbs = {};
            var modules2 = backend.modules;
            var nodeOps2 = backend.nodeOps;
            for (i = 0; i < hooks.length; ++i) {
              cbs[hooks[i]] = [];
              for (j = 0; j < modules2.length; ++j) {
                if (isDef(modules2[j][hooks[i]])) {
                  cbs[hooks[i]].push(modules2[j][hooks[i]]);
                }
              }
            }
            function emptyNodeAt(elm) {
              return new VNode(nodeOps2.tagName(elm).toLowerCase(), {}, [], void 0, elm);
            }
            function createRmCb(childElm, listeners) {
              function remove$$1() {
                if (--remove$$1.listeners === 0) {
                  removeNode(childElm);
                }
              }
              remove$$1.listeners = listeners;
              return remove$$1;
            }
            function removeNode(el) {
              var parent = nodeOps2.parentNode(el);
              if (isDef(parent)) {
                nodeOps2.removeChild(parent, el);
              }
            }
            function isUnknownElement$$1(vnode, inVPre) {
              return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function(ignore) {
                return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
              })) && config.isUnknownElement(vnode.tag);
            }
            var creatingElmInVPre = 0;
            function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index2) {
              if (isDef(vnode.elm) && isDef(ownerArray)) {
                vnode = ownerArray[index2] = cloneVNode(vnode);
              }
              vnode.isRootInsert = !nested;
              if (createComponent2(vnode, insertedVnodeQueue, parentElm, refElm)) {
                return;
              }
              var data = vnode.data;
              var children = vnode.children;
              var tag = vnode.tag;
              if (isDef(tag)) {
                if (true) {
                  if (data && data.pre) {
                    creatingElmInVPre++;
                  }
                  if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
                    warn("Unknown custom element: <" + tag + '> - did you register the component correctly? For recursive components, make sure to provide the "name" option.', vnode.context);
                  }
                }
                vnode.elm = vnode.ns ? nodeOps2.createElementNS(vnode.ns, tag) : nodeOps2.createElement(tag, vnode);
                setScope(vnode);
                {
                  createChildren(vnode, children, insertedVnodeQueue);
                  if (isDef(data)) {
                    invokeCreateHooks(vnode, insertedVnodeQueue);
                  }
                  insert(parentElm, vnode.elm, refElm);
                }
                if (data && data.pre) {
                  creatingElmInVPre--;
                }
              } else if (isTrue(vnode.isComment)) {
                vnode.elm = nodeOps2.createComment(vnode.text);
                insert(parentElm, vnode.elm, refElm);
              } else {
                vnode.elm = nodeOps2.createTextNode(vnode.text);
                insert(parentElm, vnode.elm, refElm);
              }
            }
            function createComponent2(vnode, insertedVnodeQueue, parentElm, refElm) {
              var i2 = vnode.data;
              if (isDef(i2)) {
                var isReactivated = isDef(vnode.componentInstance) && i2.keepAlive;
                if (isDef(i2 = i2.hook) && isDef(i2 = i2.init)) {
                  i2(vnode, false);
                }
                if (isDef(vnode.componentInstance)) {
                  initComponent(vnode, insertedVnodeQueue);
                  insert(parentElm, vnode.elm, refElm);
                  if (isTrue(isReactivated)) {
                    reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
                  }
                  return true;
                }
              }
            }
            function initComponent(vnode, insertedVnodeQueue) {
              if (isDef(vnode.data.pendingInsert)) {
                insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
                vnode.data.pendingInsert = null;
              }
              vnode.elm = vnode.componentInstance.$el;
              if (isPatchable(vnode)) {
                invokeCreateHooks(vnode, insertedVnodeQueue);
                setScope(vnode);
              } else {
                registerRef(vnode);
                insertedVnodeQueue.push(vnode);
              }
            }
            function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
              var i2;
              var innerNode = vnode;
              while (innerNode.componentInstance) {
                innerNode = innerNode.componentInstance._vnode;
                if (isDef(i2 = innerNode.data) && isDef(i2 = i2.transition)) {
                  for (i2 = 0; i2 < cbs.activate.length; ++i2) {
                    cbs.activate[i2](emptyNode, innerNode);
                  }
                  insertedVnodeQueue.push(innerNode);
                  break;
                }
              }
              insert(parentElm, vnode.elm, refElm);
            }
            function insert(parent, elm, ref$$1) {
              if (isDef(parent)) {
                if (isDef(ref$$1)) {
                  if (nodeOps2.parentNode(ref$$1) === parent) {
                    nodeOps2.insertBefore(parent, elm, ref$$1);
                  }
                } else {
                  nodeOps2.appendChild(parent, elm);
                }
              }
            }
            function createChildren(vnode, children, insertedVnodeQueue) {
              if (Array.isArray(children)) {
                if (true) {
                  checkDuplicateKeys(children);
                }
                for (var i2 = 0; i2 < children.length; ++i2) {
                  createElm(children[i2], insertedVnodeQueue, vnode.elm, null, true, children, i2);
                }
              } else if (isPrimitive(vnode.text)) {
                nodeOps2.appendChild(vnode.elm, nodeOps2.createTextNode(String(vnode.text)));
              }
            }
            function isPatchable(vnode) {
              while (vnode.componentInstance) {
                vnode = vnode.componentInstance._vnode;
              }
              return isDef(vnode.tag);
            }
            function invokeCreateHooks(vnode, insertedVnodeQueue) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, vnode);
              }
              i = vnode.data.hook;
              if (isDef(i)) {
                if (isDef(i.create)) {
                  i.create(emptyNode, vnode);
                }
                if (isDef(i.insert)) {
                  insertedVnodeQueue.push(vnode);
                }
              }
            }
            function setScope(vnode) {
              var i2;
              if (isDef(i2 = vnode.fnScopeId)) {
                nodeOps2.setStyleScope(vnode.elm, i2);
              } else {
                var ancestor = vnode;
                while (ancestor) {
                  if (isDef(i2 = ancestor.context) && isDef(i2 = i2.$options._scopeId)) {
                    nodeOps2.setStyleScope(vnode.elm, i2);
                  }
                  ancestor = ancestor.parent;
                }
              }
              if (isDef(i2 = activeInstance) && i2 !== vnode.context && i2 !== vnode.fnContext && isDef(i2 = i2.$options._scopeId)) {
                nodeOps2.setStyleScope(vnode.elm, i2);
              }
            }
            function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
              for (; startIdx <= endIdx; ++startIdx) {
                createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
              }
            }
            function invokeDestroyHook(vnode) {
              var i2, j2;
              var data = vnode.data;
              if (isDef(data)) {
                if (isDef(i2 = data.hook) && isDef(i2 = i2.destroy)) {
                  i2(vnode);
                }
                for (i2 = 0; i2 < cbs.destroy.length; ++i2) {
                  cbs.destroy[i2](vnode);
                }
              }
              if (isDef(i2 = vnode.children)) {
                for (j2 = 0; j2 < vnode.children.length; ++j2) {
                  invokeDestroyHook(vnode.children[j2]);
                }
              }
            }
            function removeVnodes(vnodes, startIdx, endIdx) {
              for (; startIdx <= endIdx; ++startIdx) {
                var ch = vnodes[startIdx];
                if (isDef(ch)) {
                  if (isDef(ch.tag)) {
                    removeAndInvokeRemoveHook(ch);
                    invokeDestroyHook(ch);
                  } else {
                    removeNode(ch.elm);
                  }
                }
              }
            }
            function removeAndInvokeRemoveHook(vnode, rm) {
              if (isDef(rm) || isDef(vnode.data)) {
                var i2;
                var listeners = cbs.remove.length + 1;
                if (isDef(rm)) {
                  rm.listeners += listeners;
                } else {
                  rm = createRmCb(vnode.elm, listeners);
                }
                if (isDef(i2 = vnode.componentInstance) && isDef(i2 = i2._vnode) && isDef(i2.data)) {
                  removeAndInvokeRemoveHook(i2, rm);
                }
                for (i2 = 0; i2 < cbs.remove.length; ++i2) {
                  cbs.remove[i2](vnode, rm);
                }
                if (isDef(i2 = vnode.data.hook) && isDef(i2 = i2.remove)) {
                  i2(vnode, rm);
                } else {
                  rm();
                }
              } else {
                removeNode(vnode.elm);
              }
            }
            function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
              var oldStartIdx = 0;
              var newStartIdx = 0;
              var oldEndIdx = oldCh.length - 1;
              var oldStartVnode = oldCh[0];
              var oldEndVnode = oldCh[oldEndIdx];
              var newEndIdx = newCh.length - 1;
              var newStartVnode = newCh[0];
              var newEndVnode = newCh[newEndIdx];
              var oldKeyToIdx, idxInOld, vnodeToMove, refElm;
              var canMove = !removeOnly;
              if (true) {
                checkDuplicateKeys(newCh);
              }
              while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
                if (isUndef(oldStartVnode)) {
                  oldStartVnode = oldCh[++oldStartIdx];
                } else if (isUndef(oldEndVnode)) {
                  oldEndVnode = oldCh[--oldEndIdx];
                } else if (sameVnode(oldStartVnode, newStartVnode)) {
                  patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                  oldStartVnode = oldCh[++oldStartIdx];
                  newStartVnode = newCh[++newStartIdx];
                } else if (sameVnode(oldEndVnode, newEndVnode)) {
                  patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                  oldEndVnode = oldCh[--oldEndIdx];
                  newEndVnode = newCh[--newEndIdx];
                } else if (sameVnode(oldStartVnode, newEndVnode)) {
                  patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                  canMove && nodeOps2.insertBefore(parentElm, oldStartVnode.elm, nodeOps2.nextSibling(oldEndVnode.elm));
                  oldStartVnode = oldCh[++oldStartIdx];
                  newEndVnode = newCh[--newEndIdx];
                } else if (sameVnode(oldEndVnode, newStartVnode)) {
                  patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                  canMove && nodeOps2.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                  oldEndVnode = oldCh[--oldEndIdx];
                  newStartVnode = newCh[++newStartIdx];
                } else {
                  if (isUndef(oldKeyToIdx)) {
                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                  }
                  idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
                  if (isUndef(idxInOld)) {
                    createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                  } else {
                    vnodeToMove = oldCh[idxInOld];
                    if (sameVnode(vnodeToMove, newStartVnode)) {
                      patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                      oldCh[idxInOld] = void 0;
                      canMove && nodeOps2.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
                    } else {
                      createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                    }
                  }
                  newStartVnode = newCh[++newStartIdx];
                }
              }
              if (oldStartIdx > oldEndIdx) {
                refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
                addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
              } else if (newStartIdx > newEndIdx) {
                removeVnodes(oldCh, oldStartIdx, oldEndIdx);
              }
            }
            function checkDuplicateKeys(children) {
              var seenKeys = {};
              for (var i2 = 0; i2 < children.length; i2++) {
                var vnode = children[i2];
                var key = vnode.key;
                if (isDef(key)) {
                  if (seenKeys[key]) {
                    warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
                  } else {
                    seenKeys[key] = true;
                  }
                }
              }
            }
            function findIdxInOld(node, oldCh, start, end) {
              for (var i2 = start; i2 < end; i2++) {
                var c = oldCh[i2];
                if (isDef(c) && sameVnode(node, c)) {
                  return i2;
                }
              }
            }
            function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index2, removeOnly) {
              if (oldVnode === vnode) {
                return;
              }
              if (isDef(vnode.elm) && isDef(ownerArray)) {
                vnode = ownerArray[index2] = cloneVNode(vnode);
              }
              var elm = vnode.elm = oldVnode.elm;
              if (isTrue(oldVnode.isAsyncPlaceholder)) {
                if (isDef(vnode.asyncFactory.resolved)) {
                  hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
                } else {
                  vnode.isAsyncPlaceholder = true;
                }
                return;
              }
              if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
                vnode.componentInstance = oldVnode.componentInstance;
                return;
              }
              var i2;
              var data = vnode.data;
              if (isDef(data) && isDef(i2 = data.hook) && isDef(i2 = i2.prepatch)) {
                i2(oldVnode, vnode);
              }
              var oldCh = oldVnode.children;
              var ch = vnode.children;
              if (isDef(data) && isPatchable(vnode)) {
                for (i2 = 0; i2 < cbs.update.length; ++i2) {
                  cbs.update[i2](oldVnode, vnode);
                }
                if (isDef(i2 = data.hook) && isDef(i2 = i2.update)) {
                  i2(oldVnode, vnode);
                }
              }
              if (isUndef(vnode.text)) {
                if (isDef(oldCh) && isDef(ch)) {
                  if (oldCh !== ch) {
                    updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
                  }
                } else if (isDef(ch)) {
                  if (true) {
                    checkDuplicateKeys(ch);
                  }
                  if (isDef(oldVnode.text)) {
                    nodeOps2.setTextContent(elm, "");
                  }
                  addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
                } else if (isDef(oldCh)) {
                  removeVnodes(oldCh, 0, oldCh.length - 1);
                } else if (isDef(oldVnode.text)) {
                  nodeOps2.setTextContent(elm, "");
                }
              } else if (oldVnode.text !== vnode.text) {
                nodeOps2.setTextContent(elm, vnode.text);
              }
              if (isDef(data)) {
                if (isDef(i2 = data.hook) && isDef(i2 = i2.postpatch)) {
                  i2(oldVnode, vnode);
                }
              }
            }
            function invokeInsertHook(vnode, queue2, initial) {
              if (isTrue(initial) && isDef(vnode.parent)) {
                vnode.parent.data.pendingInsert = queue2;
              } else {
                for (var i2 = 0; i2 < queue2.length; ++i2) {
                  queue2[i2].data.hook.insert(queue2[i2]);
                }
              }
            }
            var hydrationBailed = false;
            var isRenderedModule = makeMap("attrs,class,staticClass,staticStyle,key");
            function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
              var i2;
              var tag = vnode.tag;
              var data = vnode.data;
              var children = vnode.children;
              inVPre = inVPre || data && data.pre;
              vnode.elm = elm;
              if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
                vnode.isAsyncPlaceholder = true;
                return true;
              }
              if (true) {
                if (!assertNodeMatch(elm, vnode, inVPre)) {
                  return false;
                }
              }
              if (isDef(data)) {
                if (isDef(i2 = data.hook) && isDef(i2 = i2.init)) {
                  i2(vnode, true);
                }
                if (isDef(i2 = vnode.componentInstance)) {
                  initComponent(vnode, insertedVnodeQueue);
                  return true;
                }
              }
              if (isDef(tag)) {
                if (isDef(children)) {
                  if (!elm.hasChildNodes()) {
                    createChildren(vnode, children, insertedVnodeQueue);
                  } else {
                    if (isDef(i2 = data) && isDef(i2 = i2.domProps) && isDef(i2 = i2.innerHTML)) {
                      if (i2 !== elm.innerHTML) {
                        if (typeof console !== "undefined" && !hydrationBailed) {
                          hydrationBailed = true;
                          console.warn("Parent: ", elm);
                          console.warn("server innerHTML: ", i2);
                          console.warn("client innerHTML: ", elm.innerHTML);
                        }
                        return false;
                      }
                    } else {
                      var childrenMatch = true;
                      var childNode = elm.firstChild;
                      for (var i$1 = 0; i$1 < children.length; i$1++) {
                        if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                          childrenMatch = false;
                          break;
                        }
                        childNode = childNode.nextSibling;
                      }
                      if (!childrenMatch || childNode) {
                        if (typeof console !== "undefined" && !hydrationBailed) {
                          hydrationBailed = true;
                          console.warn("Parent: ", elm);
                          console.warn("Mismatching childNodes vs. VNodes: ", elm.childNodes, children);
                        }
                        return false;
                      }
                    }
                  }
                }
                if (isDef(data)) {
                  var fullInvoke = false;
                  for (var key in data) {
                    if (!isRenderedModule(key)) {
                      fullInvoke = true;
                      invokeCreateHooks(vnode, insertedVnodeQueue);
                      break;
                    }
                  }
                  if (!fullInvoke && data["class"]) {
                    traverse(data["class"]);
                  }
                }
              } else if (elm.data !== vnode.text) {
                elm.data = vnode.text;
              }
              return true;
            }
            function assertNodeMatch(node, vnode, inVPre) {
              if (isDef(vnode.tag)) {
                return vnode.tag.indexOf("vue-component") === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
              } else {
                return node.nodeType === (vnode.isComment ? 8 : 3);
              }
            }
            return function patch2(oldVnode, vnode, hydrating, removeOnly) {
              if (isUndef(vnode)) {
                if (isDef(oldVnode)) {
                  invokeDestroyHook(oldVnode);
                }
                return;
              }
              var isInitialPatch = false;
              var insertedVnodeQueue = [];
              if (isUndef(oldVnode)) {
                isInitialPatch = true;
                createElm(vnode, insertedVnodeQueue);
              } else {
                var isRealElement = isDef(oldVnode.nodeType);
                if (!isRealElement && sameVnode(oldVnode, vnode)) {
                  patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
                } else {
                  if (isRealElement) {
                    if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                      oldVnode.removeAttribute(SSR_ATTR);
                      hydrating = true;
                    }
                    if (isTrue(hydrating)) {
                      if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                        invokeInsertHook(vnode, insertedVnodeQueue, true);
                        return oldVnode;
                      } else if (true) {
                        warn("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.");
                      }
                    }
                    oldVnode = emptyNodeAt(oldVnode);
                  }
                  var oldElm = oldVnode.elm;
                  var parentElm = nodeOps2.parentNode(oldElm);
                  createElm(vnode, insertedVnodeQueue, oldElm._leaveCb ? null : parentElm, nodeOps2.nextSibling(oldElm));
                  if (isDef(vnode.parent)) {
                    var ancestor = vnode.parent;
                    var patchable = isPatchable(vnode);
                    while (ancestor) {
                      for (var i2 = 0; i2 < cbs.destroy.length; ++i2) {
                        cbs.destroy[i2](ancestor);
                      }
                      ancestor.elm = vnode.elm;
                      if (patchable) {
                        for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                          cbs.create[i$1](emptyNode, ancestor);
                        }
                        var insert2 = ancestor.data.hook.insert;
                        if (insert2.merged) {
                          for (var i$2 = 1; i$2 < insert2.fns.length; i$2++) {
                            insert2.fns[i$2]();
                          }
                        }
                      } else {
                        registerRef(ancestor);
                      }
                      ancestor = ancestor.parent;
                    }
                  }
                  if (isDef(parentElm)) {
                    removeVnodes([oldVnode], 0, 0);
                  } else if (isDef(oldVnode.tag)) {
                    invokeDestroyHook(oldVnode);
                  }
                }
              }
              invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
              return vnode.elm;
            };
          }
          var directives = {
            create: updateDirectives,
            update: updateDirectives,
            destroy: function unbindDirectives(vnode) {
              updateDirectives(vnode, emptyNode);
            }
          };
          function updateDirectives(oldVnode, vnode) {
            if (oldVnode.data.directives || vnode.data.directives) {
              _update(oldVnode, vnode);
            }
          }
          function _update(oldVnode, vnode) {
            var isCreate = oldVnode === emptyNode;
            var isDestroy = vnode === emptyNode;
            var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
            var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
            var dirsWithInsert = [];
            var dirsWithPostpatch = [];
            var key, oldDir, dir;
            for (key in newDirs) {
              oldDir = oldDirs[key];
              dir = newDirs[key];
              if (!oldDir) {
                callHook$1(dir, "bind", vnode, oldVnode);
                if (dir.def && dir.def.inserted) {
                  dirsWithInsert.push(dir);
                }
              } else {
                dir.oldValue = oldDir.value;
                dir.oldArg = oldDir.arg;
                callHook$1(dir, "update", vnode, oldVnode);
                if (dir.def && dir.def.componentUpdated) {
                  dirsWithPostpatch.push(dir);
                }
              }
            }
            if (dirsWithInsert.length) {
              var callInsert = function callInsert2() {
                for (var i = 0; i < dirsWithInsert.length; i++) {
                  callHook$1(dirsWithInsert[i], "inserted", vnode, oldVnode);
                }
              };
              if (isCreate) {
                mergeVNodeHook(vnode, "insert", callInsert);
              } else {
                callInsert();
              }
            }
            if (dirsWithPostpatch.length) {
              mergeVNodeHook(vnode, "postpatch", function() {
                for (var i = 0; i < dirsWithPostpatch.length; i++) {
                  callHook$1(dirsWithPostpatch[i], "componentUpdated", vnode, oldVnode);
                }
              });
            }
            if (!isCreate) {
              for (key in oldDirs) {
                if (!newDirs[key]) {
                  callHook$1(oldDirs[key], "unbind", oldVnode, oldVnode, isDestroy);
                }
              }
            }
          }
          var emptyModifiers = Object.create(null);
          function normalizeDirectives$1(dirs, vm) {
            var res = Object.create(null);
            if (!dirs) {
              return res;
            }
            var i, dir;
            for (i = 0; i < dirs.length; i++) {
              dir = dirs[i];
              if (!dir.modifiers) {
                dir.modifiers = emptyModifiers;
              }
              res[getRawDirName(dir)] = dir;
              dir.def = resolveAsset(vm.$options, "directives", dir.name, true);
            }
            return res;
          }
          function getRawDirName(dir) {
            return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join(".");
          }
          function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
            var fn = dir.def && dir.def[hook];
            if (fn) {
              try {
                fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
              } catch (e) {
                handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
              }
            }
          }
          var baseModules = [ref, directives];
          function updateAttrs(oldVnode, vnode) {
            var opts2 = vnode.componentOptions;
            if (isDef(opts2) && opts2.Ctor.options.inheritAttrs === false) {
              return;
            }
            if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
              return;
            }
            var key, cur, old;
            var elm = vnode.elm;
            var oldAttrs = oldVnode.data.attrs || {};
            var attrs2 = vnode.data.attrs || {};
            if (isDef(attrs2.__ob__)) {
              attrs2 = vnode.data.attrs = extend({}, attrs2);
            }
            for (key in attrs2) {
              cur = attrs2[key];
              old = oldAttrs[key];
              if (old !== cur) {
                setAttr(elm, key, cur, vnode.data.pre);
              }
            }
            if ((isIE || isEdge) && attrs2.value !== oldAttrs.value) {
              setAttr(elm, "value", attrs2.value);
            }
            for (key in oldAttrs) {
              if (isUndef(attrs2[key])) {
                if (isXlink(key)) {
                  elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
                } else if (!isEnumeratedAttr(key)) {
                  elm.removeAttribute(key);
                }
              }
            }
          }
          function setAttr(el, key, value, isInPre) {
            if (isInPre || el.tagName.indexOf("-") > -1) {
              baseSetAttr(el, key, value);
            } else if (isBooleanAttr(key)) {
              if (isFalsyAttrValue(value)) {
                el.removeAttribute(key);
              } else {
                value = key === "allowfullscreen" && el.tagName === "EMBED" ? "true" : key;
                el.setAttribute(key, value);
              }
            } else if (isEnumeratedAttr(key)) {
              el.setAttribute(key, convertEnumeratedValue(key, value));
            } else if (isXlink(key)) {
              if (isFalsyAttrValue(value)) {
                el.removeAttributeNS(xlinkNS, getXlinkProp(key));
              } else {
                el.setAttributeNS(xlinkNS, key, value);
              }
            } else {
              baseSetAttr(el, key, value);
            }
          }
          function baseSetAttr(el, key, value) {
            if (isFalsyAttrValue(value)) {
              el.removeAttribute(key);
            } else {
              if (isIE && !isIE9 && el.tagName === "TEXTAREA" && key === "placeholder" && value !== "" && !el.__ieph) {
                var blocker = function blocker2(e) {
                  e.stopImmediatePropagation();
                  el.removeEventListener("input", blocker2);
                };
                el.addEventListener("input", blocker);
                el.__ieph = true;
              }
              el.setAttribute(key, value);
            }
          }
          var attrs = {
            create: updateAttrs,
            update: updateAttrs
          };
          function updateClass(oldVnode, vnode) {
            var el = vnode.elm;
            var data = vnode.data;
            var oldData = oldVnode.data;
            if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
              return;
            }
            var cls = genClassForVnode(vnode);
            var transitionClass = el._transitionClasses;
            if (isDef(transitionClass)) {
              cls = concat(cls, stringifyClass(transitionClass));
            }
            if (cls !== el._prevClass) {
              el.setAttribute("class", cls);
              el._prevClass = cls;
            }
          }
          var klass = {
            create: updateClass,
            update: updateClass
          };
          var RANGE_TOKEN = "__r";
          var CHECKBOX_RADIO_TOKEN = "__c";
          function normalizeEvents(on) {
            if (isDef(on[RANGE_TOKEN])) {
              var event = isIE ? "change" : "input";
              on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
              delete on[RANGE_TOKEN];
            }
            if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
              on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
              delete on[CHECKBOX_RADIO_TOKEN];
            }
          }
          var target$1;
          function createOnceHandler$1(event, handler, capture) {
            var _target = target$1;
            return function onceHandler() {
              var res = handler.apply(null, arguments);
              if (res !== null) {
                remove$2(event, onceHandler, capture, _target);
              }
            };
          }
          var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);
          function add$1(name, handler, capture, passive) {
            if (useMicrotaskFix) {
              var attachedTimestamp = currentFlushTimestamp;
              var original = handler;
              handler = original._wrapper = function(e) {
                if (e.target === e.currentTarget || e.timeStamp >= attachedTimestamp || e.timeStamp <= 0 || e.target.ownerDocument !== document) {
                  return original.apply(this, arguments);
                }
              };
            }
            target$1.addEventListener(name, handler, supportsPassive ? {
              capture,
              passive
            } : capture);
          }
          function remove$2(name, handler, capture, _target) {
            (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
          }
          function updateDOMListeners(oldVnode, vnode) {
            if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
              return;
            }
            var on = vnode.data.on || {};
            var oldOn = oldVnode.data.on || {};
            target$1 = vnode.elm;
            normalizeEvents(on);
            updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
            target$1 = void 0;
          }
          var events = {
            create: updateDOMListeners,
            update: updateDOMListeners
          };
          var svgContainer;
          function updateDOMProps(oldVnode, vnode) {
            if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
              return;
            }
            var key, cur;
            var elm = vnode.elm;
            var oldProps = oldVnode.data.domProps || {};
            var props2 = vnode.data.domProps || {};
            if (isDef(props2.__ob__)) {
              props2 = vnode.data.domProps = extend({}, props2);
            }
            for (key in oldProps) {
              if (!(key in props2)) {
                elm[key] = "";
              }
            }
            for (key in props2) {
              cur = props2[key];
              if (key === "textContent" || key === "innerHTML") {
                if (vnode.children) {
                  vnode.children.length = 0;
                }
                if (cur === oldProps[key]) {
                  continue;
                }
                if (elm.childNodes.length === 1) {
                  elm.removeChild(elm.childNodes[0]);
                }
              }
              if (key === "value" && elm.tagName !== "PROGRESS") {
                elm._value = cur;
                var strCur = isUndef(cur) ? "" : String(cur);
                if (shouldUpdateValue(elm, strCur)) {
                  elm.value = strCur;
                }
              } else if (key === "innerHTML" && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
                svgContainer = svgContainer || document.createElement("div");
                svgContainer.innerHTML = "<svg>" + cur + "</svg>";
                var svg = svgContainer.firstChild;
                while (elm.firstChild) {
                  elm.removeChild(elm.firstChild);
                }
                while (svg.firstChild) {
                  elm.appendChild(svg.firstChild);
                }
              } else if (cur !== oldProps[key]) {
                try {
                  elm[key] = cur;
                } catch (e) {
                }
              }
            }
          }
          function shouldUpdateValue(elm, checkVal) {
            return !elm.composing && (elm.tagName === "OPTION" || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
          }
          function isNotInFocusAndDirty(elm, checkVal) {
            var notInFocus = true;
            try {
              notInFocus = document.activeElement !== elm;
            } catch (e) {
            }
            return notInFocus && elm.value !== checkVal;
          }
          function isDirtyWithModifiers(elm, newVal) {
            var value = elm.value;
            var modifiers = elm._vModifiers;
            if (isDef(modifiers)) {
              if (modifiers.number) {
                return toNumber(value) !== toNumber(newVal);
              }
              if (modifiers.trim) {
                return value.trim() !== newVal.trim();
              }
            }
            return value !== newVal;
          }
          var domProps = {
            create: updateDOMProps,
            update: updateDOMProps
          };
          var parseStyleText = cached(function(cssText) {
            var res = {};
            var listDelimiter = /;(?![^(]*\))/g;
            var propertyDelimiter = /:(.+)/;
            cssText.split(listDelimiter).forEach(function(item) {
              if (item) {
                var tmp = item.split(propertyDelimiter);
                tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
              }
            });
            return res;
          });
          function normalizeStyleData(data) {
            var style2 = normalizeStyleBinding(data.style);
            return data.staticStyle ? extend(data.staticStyle, style2) : style2;
          }
          function normalizeStyleBinding(bindingStyle) {
            if (Array.isArray(bindingStyle)) {
              return toObject(bindingStyle);
            }
            if (typeof bindingStyle === "string") {
              return parseStyleText(bindingStyle);
            }
            return bindingStyle;
          }
          function getStyle(vnode, checkChild) {
            var res = {};
            var styleData;
            if (checkChild) {
              var childNode = vnode;
              while (childNode.componentInstance) {
                childNode = childNode.componentInstance._vnode;
                if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
                  extend(res, styleData);
                }
              }
            }
            if (styleData = normalizeStyleData(vnode.data)) {
              extend(res, styleData);
            }
            var parentNode2 = vnode;
            while (parentNode2 = parentNode2.parent) {
              if (parentNode2.data && (styleData = normalizeStyleData(parentNode2.data))) {
                extend(res, styleData);
              }
            }
            return res;
          }
          var cssVarRE = /^--/;
          var importantRE = /\s*!important$/;
          var setProp = function setProp2(el, name, val) {
            if (cssVarRE.test(name)) {
              el.style.setProperty(name, val);
            } else if (importantRE.test(val)) {
              el.style.setProperty(hyphenate(name), val.replace(importantRE, ""), "important");
            } else {
              var normalizedName = normalize(name);
              if (Array.isArray(val)) {
                for (var i = 0, len = val.length; i < len; i++) {
                  el.style[normalizedName] = val[i];
                }
              } else {
                el.style[normalizedName] = val;
              }
            }
          };
          var vendorNames = ["Webkit", "Moz", "ms"];
          var emptyStyle;
          var normalize = cached(function(prop) {
            emptyStyle = emptyStyle || document.createElement("div").style;
            prop = camelize(prop);
            if (prop !== "filter" && prop in emptyStyle) {
              return prop;
            }
            var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
            for (var i = 0; i < vendorNames.length; i++) {
              var name = vendorNames[i] + capName;
              if (name in emptyStyle) {
                return name;
              }
            }
          });
          function updateStyle(oldVnode, vnode) {
            var data = vnode.data;
            var oldData = oldVnode.data;
            if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
              return;
            }
            var cur, name;
            var el = vnode.elm;
            var oldStaticStyle = oldData.staticStyle;
            var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};
            var oldStyle = oldStaticStyle || oldStyleBinding;
            var style2 = normalizeStyleBinding(vnode.data.style) || {};
            vnode.data.normalizedStyle = isDef(style2.__ob__) ? extend({}, style2) : style2;
            var newStyle = getStyle(vnode, true);
            for (name in oldStyle) {
              if (isUndef(newStyle[name])) {
                setProp(el, name, "");
              }
            }
            for (name in newStyle) {
              cur = newStyle[name];
              if (cur !== oldStyle[name]) {
                setProp(el, name, cur == null ? "" : cur);
              }
            }
          }
          var style = {
            create: updateStyle,
            update: updateStyle
          };
          var whitespaceRE = /\s+/;
          function addClass(el, cls) {
            if (!cls || !(cls = cls.trim())) {
              return;
            }
            if (el.classList) {
              if (cls.indexOf(" ") > -1) {
                cls.split(whitespaceRE).forEach(function(c) {
                  return el.classList.add(c);
                });
              } else {
                el.classList.add(cls);
              }
            } else {
              var cur = " " + (el.getAttribute("class") || "") + " ";
              if (cur.indexOf(" " + cls + " ") < 0) {
                el.setAttribute("class", (cur + cls).trim());
              }
            }
          }
          function removeClass(el, cls) {
            if (!cls || !(cls = cls.trim())) {
              return;
            }
            if (el.classList) {
              if (cls.indexOf(" ") > -1) {
                cls.split(whitespaceRE).forEach(function(c) {
                  return el.classList.remove(c);
                });
              } else {
                el.classList.remove(cls);
              }
              if (!el.classList.length) {
                el.removeAttribute("class");
              }
            } else {
              var cur = " " + (el.getAttribute("class") || "") + " ";
              var tar = " " + cls + " ";
              while (cur.indexOf(tar) >= 0) {
                cur = cur.replace(tar, " ");
              }
              cur = cur.trim();
              if (cur) {
                el.setAttribute("class", cur);
              } else {
                el.removeAttribute("class");
              }
            }
          }
          function resolveTransition(def$$1) {
            if (!def$$1) {
              return;
            }
            if (Object(_Users_lv_Desktop_tarodemo_taro_vue2_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["a"])(def$$1) === "object") {
              var res = {};
              if (def$$1.css !== false) {
                extend(res, autoCssTransition(def$$1.name || "v"));
              }
              extend(res, def$$1);
              return res;
            } else if (typeof def$$1 === "string") {
              return autoCssTransition(def$$1);
            }
          }
          var autoCssTransition = cached(function(name) {
            return {
              enterClass: name + "-enter",
              enterToClass: name + "-enter-to",
              enterActiveClass: name + "-enter-active",
              leaveClass: name + "-leave",
              leaveToClass: name + "-leave-to",
              leaveActiveClass: name + "-leave-active"
            };
          });
          var hasTransition = inBrowser && !isIE9;
          var TRANSITION = "transition";
          var ANIMATION = "animation";
          var transitionProp = "transition";
          var transitionEndEvent = "transitionend";
          var animationProp = "animation";
          var animationEndEvent = "animationend";
          if (hasTransition) {
            if (window2.ontransitionend === void 0 && window2.onwebkittransitionend !== void 0) {
              transitionProp = "WebkitTransition";
              transitionEndEvent = "webkitTransitionEnd";
            }
            if (window2.onanimationend === void 0 && window2.onwebkitanimationend !== void 0) {
              animationProp = "WebkitAnimation";
              animationEndEvent = "webkitAnimationEnd";
            }
          }
          var raf = inBrowser ? window2.requestAnimationFrame ? window2.requestAnimationFrame.bind(window2) : setTimeout : function(fn) {
            return fn();
          };
          function nextFrame(fn) {
            raf(function() {
              raf(fn);
            });
          }
          function addTransitionClass(el, cls) {
            var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
            if (transitionClasses.indexOf(cls) < 0) {
              transitionClasses.push(cls);
              addClass(el, cls);
            }
          }
          function removeTransitionClass(el, cls) {
            if (el._transitionClasses) {
              remove(el._transitionClasses, cls);
            }
            removeClass(el, cls);
          }
          function whenTransitionEnds(el, expectedType, cb) {
            var ref2 = getTransitionInfo(el, expectedType);
            var type = ref2.type;
            var timeout = ref2.timeout;
            var propCount = ref2.propCount;
            if (!type) {
              return cb();
            }
            var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
            var ended = 0;
            var end = function end2() {
              el.removeEventListener(event, onEnd);
              cb();
            };
            var onEnd = function onEnd2(e) {
              if (e.target === el) {
                if (++ended >= propCount) {
                  end();
                }
              }
            };
            setTimeout(function() {
              if (ended < propCount) {
                end();
              }
            }, timeout + 1);
            el.addEventListener(event, onEnd);
          }
          var transformRE = /\b(transform|all)(,|$)/;
          function getTransitionInfo(el, expectedType) {
            var styles = window2.getComputedStyle(el);
            var transitionDelays = (styles[transitionProp + "Delay"] || "").split(", ");
            var transitionDurations = (styles[transitionProp + "Duration"] || "").split(", ");
            var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
            var animationDelays = (styles[animationProp + "Delay"] || "").split(", ");
            var animationDurations = (styles[animationProp + "Duration"] || "").split(", ");
            var animationTimeout = getTimeout(animationDelays, animationDurations);
            var type;
            var timeout = 0;
            var propCount = 0;
            if (expectedType === TRANSITION) {
              if (transitionTimeout > 0) {
                type = TRANSITION;
                timeout = transitionTimeout;
                propCount = transitionDurations.length;
              }
            } else if (expectedType === ANIMATION) {
              if (animationTimeout > 0) {
                type = ANIMATION;
                timeout = animationTimeout;
                propCount = animationDurations.length;
              }
            } else {
              timeout = Math.max(transitionTimeout, animationTimeout);
              type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
              propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
            }
            var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + "Property"]);
            return {
              type,
              timeout,
              propCount,
              hasTransform
            };
          }
          function getTimeout(delays, durations) {
            while (delays.length < durations.length) {
              delays = delays.concat(delays);
            }
            return Math.max.apply(null, durations.map(function(d, i) {
              return toMs(d) + toMs(delays[i]);
            }));
          }
          function toMs(s) {
            return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
          }
          function enter(vnode, toggleDisplay) {
            var el = vnode.elm;
            if (isDef(el._leaveCb)) {
              el._leaveCb.cancelled = true;
              el._leaveCb();
            }
            var data = resolveTransition(vnode.data.transition);
            if (isUndef(data)) {
              return;
            }
            if (isDef(el._enterCb) || el.nodeType !== 1) {
              return;
            }
            var css = data.css;
            var type = data.type;
            var enterClass = data.enterClass;
            var enterToClass = data.enterToClass;
            var enterActiveClass = data.enterActiveClass;
            var appearClass = data.appearClass;
            var appearToClass = data.appearToClass;
            var appearActiveClass = data.appearActiveClass;
            var beforeEnter = data.beforeEnter;
            var enter2 = data.enter;
            var afterEnter = data.afterEnter;
            var enterCancelled = data.enterCancelled;
            var beforeAppear = data.beforeAppear;
            var appear = data.appear;
            var afterAppear = data.afterAppear;
            var appearCancelled = data.appearCancelled;
            var duration = data.duration;
            var context = activeInstance;
            var transitionNode = activeInstance.$vnode;
            while (transitionNode && transitionNode.parent) {
              context = transitionNode.context;
              transitionNode = transitionNode.parent;
            }
            var isAppear = !context._isMounted || !vnode.isRootInsert;
            if (isAppear && !appear && appear !== "") {
              return;
            }
            var startClass = isAppear && appearClass ? appearClass : enterClass;
            var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
            var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
            var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
            var enterHook = isAppear ? typeof appear === "function" ? appear : enter2 : enter2;
            var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
            var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
            var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);
            if (explicitEnterDuration != null) {
              checkDuration(explicitEnterDuration, "enter", vnode);
            }
            var expectsCSS = css !== false && !isIE9;
            var userWantsControl = getHookArgumentsLength(enterHook);
            var cb = el._enterCb = once(function() {
              if (expectsCSS) {
                removeTransitionClass(el, toClass);
                removeTransitionClass(el, activeClass);
              }
              if (cb.cancelled) {
                if (expectsCSS) {
                  removeTransitionClass(el, startClass);
                }
                enterCancelledHook && enterCancelledHook(el);
              } else {
                afterEnterHook && afterEnterHook(el);
              }
              el._enterCb = null;
            });
            if (!vnode.data.show) {
              mergeVNodeHook(vnode, "insert", function() {
                var parent = el.parentNode;
                var pendingNode = parent && parent._pending && parent._pending[vnode.key];
                if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
                  pendingNode.elm._leaveCb();
                }
                enterHook && enterHook(el, cb);
              });
            }
            beforeEnterHook && beforeEnterHook(el);
            if (expectsCSS) {
              addTransitionClass(el, startClass);
              addTransitionClass(el, activeClass);
              nextFrame(function() {
                removeTransitionClass(el, startClass);
                if (!cb.cancelled) {
                  addTransitionClass(el, toClass);
                  if (!userWantsControl) {
                    if (isValidDuration(explicitEnterDuration)) {
                      setTimeout(cb, explicitEnterDuration);
                    } else {
                      whenTransitionEnds(el, type, cb);
                    }
                  }
                }
              });
            }
            if (vnode.data.show) {
              toggleDisplay && toggleDisplay();
              enterHook && enterHook(el, cb);
            }
            if (!expectsCSS && !userWantsControl) {
              cb();
            }
          }
          function leave(vnode, rm) {
            var el = vnode.elm;
            if (isDef(el._enterCb)) {
              el._enterCb.cancelled = true;
              el._enterCb();
            }
            var data = resolveTransition(vnode.data.transition);
            if (isUndef(data) || el.nodeType !== 1) {
              return rm();
            }
            if (isDef(el._leaveCb)) {
              return;
            }
            var css = data.css;
            var type = data.type;
            var leaveClass = data.leaveClass;
            var leaveToClass = data.leaveToClass;
            var leaveActiveClass = data.leaveActiveClass;
            var beforeLeave = data.beforeLeave;
            var leave2 = data.leave;
            var afterLeave = data.afterLeave;
            var leaveCancelled = data.leaveCancelled;
            var delayLeave = data.delayLeave;
            var duration = data.duration;
            var expectsCSS = css !== false && !isIE9;
            var userWantsControl = getHookArgumentsLength(leave2);
            var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);
            if (isDef(explicitLeaveDuration)) {
              checkDuration(explicitLeaveDuration, "leave", vnode);
            }
            var cb = el._leaveCb = once(function() {
              if (el.parentNode && el.parentNode._pending) {
                el.parentNode._pending[vnode.key] = null;
              }
              if (expectsCSS) {
                removeTransitionClass(el, leaveToClass);
                removeTransitionClass(el, leaveActiveClass);
              }
              if (cb.cancelled) {
                if (expectsCSS) {
                  removeTransitionClass(el, leaveClass);
                }
                leaveCancelled && leaveCancelled(el);
              } else {
                rm();
                afterLeave && afterLeave(el);
              }
              el._leaveCb = null;
            });
            if (delayLeave) {
              delayLeave(performLeave);
            } else {
              performLeave();
            }
            function performLeave() {
              if (cb.cancelled) {
                return;
              }
              if (!vnode.data.show && el.parentNode) {
                (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
              }
              beforeLeave && beforeLeave(el);
              if (expectsCSS) {
                addTransitionClass(el, leaveClass);
                addTransitionClass(el, leaveActiveClass);
                nextFrame(function() {
                  removeTransitionClass(el, leaveClass);
                  if (!cb.cancelled) {
                    addTransitionClass(el, leaveToClass);
                    if (!userWantsControl) {
                      if (isValidDuration(explicitLeaveDuration)) {
                        setTimeout(cb, explicitLeaveDuration);
                      } else {
                        whenTransitionEnds(el, type, cb);
                      }
                    }
                  }
                });
              }
              leave2 && leave2(el, cb);
              if (!expectsCSS && !userWantsControl) {
                cb();
              }
            }
          }
          function checkDuration(val, name, vnode) {
            if (typeof val !== "number") {
              warn("<transition> explicit " + name + " duration is not a valid number - got " + JSON.stringify(val) + ".", vnode.context);
            } else if (isNaN(val)) {
              warn("<transition> explicit " + name + " duration is NaN - the duration expression might be incorrect.", vnode.context);
            }
          }
          function isValidDuration(val) {
            return typeof val === "number" && !isNaN(val);
          }
          function getHookArgumentsLength(fn) {
            if (isUndef(fn)) {
              return false;
            }
            var invokerFns = fn.fns;
            if (isDef(invokerFns)) {
              return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
            } else {
              return (fn._length || fn.length) > 1;
            }
          }
          function _enter(_, vnode) {
            if (vnode.data.show !== true) {
              enter(vnode);
            }
          }
          var transition = inBrowser ? {
            create: _enter,
            activate: _enter,
            remove: function remove$$1(vnode, rm) {
              if (vnode.data.show !== true) {
                leave(vnode, rm);
              } else {
                rm();
              }
            }
          } : {};
          var platformModules = [attrs, klass, events, domProps, style, transition];
          var modules = platformModules.concat(baseModules);
          var patch = createPatchFunction({
            nodeOps,
            modules
          });
          if (isIE9) {
            document.addEventListener("selectionchange", function() {
              var el = document.activeElement;
              if (el && el.vmodel) {
                trigger(el, "input");
              }
            });
          }
          var directive = {
            inserted: function inserted(el, binding, vnode, oldVnode) {
              if (vnode.tag === "select") {
                if (oldVnode.elm && !oldVnode.elm._vOptions) {
                  mergeVNodeHook(vnode, "postpatch", function() {
                    directive.componentUpdated(el, binding, vnode);
                  });
                } else {
                  setSelected(el, binding, vnode.context);
                }
                el._vOptions = [].map.call(el.options, getValue);
              } else if (vnode.tag === "textarea" || isTextInputType(el.type)) {
                el._vModifiers = binding.modifiers;
                if (!binding.modifiers.lazy) {
                  el.addEventListener("compositionstart", onCompositionStart);
                  el.addEventListener("compositionend", onCompositionEnd);
                  el.addEventListener("change", onCompositionEnd);
                  if (isIE9) {
                    el.vmodel = true;
                  }
                }
              }
            },
            componentUpdated: function componentUpdated(el, binding, vnode) {
              if (vnode.tag === "select") {
                setSelected(el, binding, vnode.context);
                var prevOptions = el._vOptions;
                var curOptions = el._vOptions = [].map.call(el.options, getValue);
                if (curOptions.some(function(o, i) {
                  return !looseEqual(o, prevOptions[i]);
                })) {
                  var needReset = el.multiple ? binding.value.some(function(v) {
                    return hasNoMatchingOption(v, curOptions);
                  }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
                  if (needReset) {
                    trigger(el, "change");
                  }
                }
              }
            }
          };
          function setSelected(el, binding, vm) {
            actuallySetSelected(el, binding, vm);
            if (isIE || isEdge) {
              setTimeout(function() {
                actuallySetSelected(el, binding, vm);
              }, 0);
            }
          }
          function actuallySetSelected(el, binding, vm) {
            var value = binding.value;
            var isMultiple = el.multiple;
            if (isMultiple && !Array.isArray(value)) {
              warn('<select multiple v-model="' + binding.expression + '"> expects an Array value for its binding, but got ' + Object.prototype.toString.call(value).slice(8, -1), vm);
              return;
            }
            var selected, option;
            for (var i = 0, l = el.options.length; i < l; i++) {
              option = el.options[i];
              if (isMultiple) {
                selected = looseIndexOf(value, getValue(option)) > -1;
                if (option.selected !== selected) {
                  option.selected = selected;
                }
              } else {
                if (looseEqual(getValue(option), value)) {
                  if (el.selectedIndex !== i) {
                    el.selectedIndex = i;
                  }
                  return;
                }
              }
            }
            if (!isMultiple) {
              el.selectedIndex = -1;
            }
          }
          function hasNoMatchingOption(value, options) {
            return options.every(function(o) {
              return !looseEqual(o, value);
            });
          }
          function getValue(option) {
            return "_value" in option ? option._value : option.value;
          }
          function onCompositionStart(e) {
            e.target.composing = true;
          }
          function onCompositionEnd(e) {
            if (!e.target.composing) {
              return;
            }
            e.target.composing = false;
            trigger(e.target, "input");
          }
          function trigger(el, type) {
            var e = document.createEvent("HTMLEvents");
            e.initEvent(type, true, true);
            el.dispatchEvent(e);
          }
          function locateNode(vnode) {
            return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
          }
          var show = {
            bind: function bind2(el, ref2, vnode) {
              var value = ref2.value;
              vnode = locateNode(vnode);
              var transition$$1 = vnode.data && vnode.data.transition;
              var originalDisplay = el.__vOriginalDisplay = el.style.display === "none" ? "" : el.style.display;
              if (value && transition$$1) {
                vnode.data.show = true;
                enter(vnode, function() {
                  el.style.display = originalDisplay;
                });
              } else {
                el.style.display = value ? originalDisplay : "none";
              }
            },
            update: function update(el, ref2, vnode) {
              var value = ref2.value;
              var oldValue = ref2.oldValue;
              if (!value === !oldValue) {
                return;
              }
              vnode = locateNode(vnode);
              var transition$$1 = vnode.data && vnode.data.transition;
              if (transition$$1) {
                vnode.data.show = true;
                if (value) {
                  enter(vnode, function() {
                    el.style.display = el.__vOriginalDisplay;
                  });
                } else {
                  leave(vnode, function() {
                    el.style.display = "none";
                  });
                }
              } else {
                el.style.display = value ? el.__vOriginalDisplay : "none";
              }
            },
            unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
              if (!isDestroy) {
                el.style.display = el.__vOriginalDisplay;
              }
            }
          };
          var platformDirectives = {
            model: directive,
            show
          };
          var transitionProps = {
            name: String,
            appear: Boolean,
            css: Boolean,
            mode: String,
            type: String,
            enterClass: String,
            leaveClass: String,
            enterToClass: String,
            leaveToClass: String,
            enterActiveClass: String,
            leaveActiveClass: String,
            appearClass: String,
            appearActiveClass: String,
            appearToClass: String,
            duration: [Number, String, Object]
          };
          function getRealChild(vnode) {
            var compOptions = vnode && vnode.componentOptions;
            if (compOptions && compOptions.Ctor.options.abstract) {
              return getRealChild(getFirstComponentChild(compOptions.children));
            } else {
              return vnode;
            }
          }
          function extractTransitionData(comp) {
            var data = {};
            var options = comp.$options;
            for (var key in options.propsData) {
              data[key] = comp[key];
            }
            var listeners = options._parentListeners;
            for (var key$1 in listeners) {
              data[camelize(key$1)] = listeners[key$1];
            }
            return data;
          }
          function placeholder(h, rawChild) {
            if (/\d-keep-alive$/.test(rawChild.tag)) {
              return h("keep-alive", {
                props: rawChild.componentOptions.propsData
              });
            }
          }
          function hasParentTransition(vnode) {
            while (vnode = vnode.parent) {
              if (vnode.data.transition) {
                return true;
              }
            }
          }
          function isSameChild(child, oldChild) {
            return oldChild.key === child.key && oldChild.tag === child.tag;
          }
          var isNotTextNode = function isNotTextNode2(c) {
            return c.tag || isAsyncPlaceholder(c);
          };
          var isVShowDirective = function isVShowDirective2(d) {
            return d.name === "show";
          };
          var Transition = {
            name: "transition",
            props: transitionProps,
            abstract: true,
            render: function render(h) {
              var this$1 = this;
              var children = this.$slots.default;
              if (!children) {
                return;
              }
              children = children.filter(isNotTextNode);
              if (!children.length) {
                return;
              }
              if (children.length > 1) {
                warn("<transition> can only be used on a single element. Use <transition-group> for lists.", this.$parent);
              }
              var mode = this.mode;
              if (mode && mode !== "in-out" && mode !== "out-in") {
                warn("invalid <transition> mode: " + mode, this.$parent);
              }
              var rawChild = children[0];
              if (hasParentTransition(this.$vnode)) {
                return rawChild;
              }
              var child = getRealChild(rawChild);
              if (!child) {
                return rawChild;
              }
              if (this._leaving) {
                return placeholder(h, rawChild);
              }
              var id = "__transition-" + this._uid + "-";
              child.key = child.key == null ? child.isComment ? id + "comment" : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
              var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
              var oldRawChild = this._vnode;
              var oldChild = getRealChild(oldRawChild);
              if (child.data.directives && child.data.directives.some(isVShowDirective)) {
                child.data.show = true;
              }
              if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
                var oldData = oldChild.data.transition = extend({}, data);
                if (mode === "out-in") {
                  this._leaving = true;
                  mergeVNodeHook(oldData, "afterLeave", function() {
                    this$1._leaving = false;
                    this$1.$forceUpdate();
                  });
                  return placeholder(h, rawChild);
                } else if (mode === "in-out") {
                  if (isAsyncPlaceholder(child)) {
                    return oldRawChild;
                  }
                  var delayedLeave;
                  var performLeave = function performLeave2() {
                    delayedLeave();
                  };
                  mergeVNodeHook(data, "afterEnter", performLeave);
                  mergeVNodeHook(data, "enterCancelled", performLeave);
                  mergeVNodeHook(oldData, "delayLeave", function(leave2) {
                    delayedLeave = leave2;
                  });
                }
              }
              return rawChild;
            }
          };
          var props = extend({
            tag: String,
            moveClass: String
          }, transitionProps);
          delete props.mode;
          var TransitionGroup = {
            props,
            beforeMount: function beforeMount() {
              var this$1 = this;
              var update = this._update;
              this._update = function(vnode, hydrating) {
                var restoreActiveInstance = setActiveInstance(this$1);
                this$1.__patch__(this$1._vnode, this$1.kept, false, true);
                this$1._vnode = this$1.kept;
                restoreActiveInstance();
                update.call(this$1, vnode, hydrating);
              };
            },
            render: function render(h) {
              var tag = this.tag || this.$vnode.data.tag || "span";
              var map = Object.create(null);
              var prevChildren = this.prevChildren = this.children;
              var rawChildren = this.$slots.default || [];
              var children = this.children = [];
              var transitionData = extractTransitionData(this);
              for (var i = 0; i < rawChildren.length; i++) {
                var c = rawChildren[i];
                if (c.tag) {
                  if (c.key != null && String(c.key).indexOf("__vlist") !== 0) {
                    children.push(c);
                    map[c.key] = c;
                    (c.data || (c.data = {})).transition = transitionData;
                  } else if (true) {
                    var opts2 = c.componentOptions;
                    var name = opts2 ? opts2.Ctor.options.name || opts2.tag || "" : c.tag;
                    warn("<transition-group> children must be keyed: <" + name + ">");
                  }
                }
              }
              if (prevChildren) {
                var kept = [];
                var removed = [];
                for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
                  var c$1 = prevChildren[i$1];
                  c$1.data.transition = transitionData;
                  c$1.data.pos = c$1.elm.getBoundingClientRect();
                  if (map[c$1.key]) {
                    kept.push(c$1);
                  } else {
                    removed.push(c$1);
                  }
                }
                this.kept = h(tag, null, kept);
                this.removed = removed;
              }
              return h(tag, null, children);
            },
            updated: function updated() {
              var children = this.prevChildren;
              var moveClass = this.moveClass || (this.name || "v") + "-move";
              if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
                return;
              }
              children.forEach(callPendingCbs);
              children.forEach(recordPosition);
              children.forEach(applyTranslation);
              this._reflow = document.body.offsetHeight;
              children.forEach(function(c) {
                if (c.data.moved) {
                  var el = c.elm;
                  var s = el.style;
                  addTransitionClass(el, moveClass);
                  s.transform = s.WebkitTransform = s.transitionDuration = "";
                  el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
                    if (e && e.target !== el) {
                      return;
                    }
                    if (!e || /transform$/.test(e.propertyName)) {
                      el.removeEventListener(transitionEndEvent, cb);
                      el._moveCb = null;
                      removeTransitionClass(el, moveClass);
                    }
                  });
                }
              });
            },
            methods: {
              hasMove: function hasMove(el, moveClass) {
                if (!hasTransition) {
                  return false;
                }
                if (this._hasMove) {
                  return this._hasMove;
                }
                var clone = el.cloneNode();
                if (el._transitionClasses) {
                  el._transitionClasses.forEach(function(cls) {
                    removeClass(clone, cls);
                  });
                }
                addClass(clone, moveClass);
                clone.style.display = "none";
                this.$el.appendChild(clone);
                var info = getTransitionInfo(clone);
                this.$el.removeChild(clone);
                return this._hasMove = info.hasTransform;
              }
            }
          };
          function callPendingCbs(c) {
            if (c.elm._moveCb) {
              c.elm._moveCb();
            }
            if (c.elm._enterCb) {
              c.elm._enterCb();
            }
          }
          function recordPosition(c) {
            c.data.newPos = c.elm.getBoundingClientRect();
          }
          function applyTranslation(c) {
            var oldPos = c.data.pos;
            var newPos = c.data.newPos;
            var dx = oldPos.left - newPos.left;
            var dy = oldPos.top - newPos.top;
            if (dx || dy) {
              c.data.moved = true;
              var s = c.elm.style;
              s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
              s.transitionDuration = "0s";
            }
          }
          var platformComponents = {
            Transition,
            TransitionGroup
          };
          Vue.config.mustUseProp = mustUseProp;
          Vue.config.isReservedTag = isReservedTag;
          Vue.config.isReservedAttr = isReservedAttr;
          Vue.config.getTagNamespace = getTagNamespace;
          Vue.config.isUnknownElement = isUnknownElement;
          extend(Vue.options.directives, platformDirectives);
          extend(Vue.options.components, platformComponents);
          Vue.prototype.__patch__ = inBrowser ? patch : noop;
          Vue.prototype.$mount = function(el, hydrating) {
            el = el && inBrowser ? query(el) : void 0;
            return mountComponent(this, el, hydrating);
          };
          if (inBrowser) {
            setTimeout(function() {
              if (config.devtools) {
                if (devtools) {
                  devtools.emit("init", Vue);
                } else if (true) {
                  console[console.info ? "info" : "log"]("Download the Vue Devtools extension for a better development experience:\nhttps://github.com/vuejs/vue-devtools");
                }
              }
              if (config.productionTip !== false && typeof console !== "undefined") {
                console[console.info ? "info" : "log"]("You are running Vue in development mode.\nMake sure to turn on production mode when deploying for production.\nSee more tips at https://vuejs.org/guide/deployment.html");
              }
            }, 0);
          }
          __webpack_exports__["a"] = Vue;
        }).call(this, __webpack_require__("./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__("./node_modules/_webpack@4.46.0@webpack/buildin/global.js"), __webpack_require__("./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__("./node_modules/_timers-browserify@2.0.12@timers-browserify/main.js").setImmediate);
      },
      "./src/app.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@tarojs_plugin-platform-weapp@3.3.2@@tarojs/plugin-platform-weapp/dist/runtime.js");
        var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js");
        var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_@tarojs_taro@3.3.2@@tarojs/taro/index.js");
        var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /* @__PURE__ */ __webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
        var _node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_app_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./src/app.js");
        var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/_vue@2.6.14@vue/dist/vue.runtime.esm.js");
        var config = { "pages": ["pages/index/index"], "window": { "backgroundTextStyle": "light", "navigationBarBackgroundColor": "#fff", "navigationBarTitleText": "WeChat", "navigationBarTextStyle": "black" } };
        _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__["window"].__taroAppConfig = config;
        var inst = App(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__["createVueApp"])(_node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_app_js__WEBPACK_IMPORTED_MODULE_3__["a"], vue__WEBPACK_IMPORTED_MODULE_4__["a"], config));
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

// taro-vue2/dist/utils.wxs
var require_utils = __commonJS({
  "taro-vue2/dist/utils.wxs"(exports, module) {
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

// taro-vue2/dist/base.wxml
var require_base = __commonJS({
  "taro-vue2/dist/base.wxml"() {
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

// taro-vue2/dist/pages/index/index.wxml
var require_index = __commonJS({
  "taro-vue2/dist/pages/index/index.wxml"() {
    require_base();
    var page = getPage("pages/index/index");
    page.template = `<div>
        <component is="taro_tmpl" :data="{root:root}" >
            
        </component>
    </div>`;
  }
});

// taro-vue2/dist/pages/index/index.js
var require_index2 = __commonJS({
  "taro-vue2/dist/pages/index/index.js"() {
    require_index();
    window["__wxRoute"] = "pages/index/index";
    var page = getPage("pages/index/index");
    page.json = `{"navigationBarTitleText":"\u9996\u9875","usingComponents":{"custom-wrapper":"../../custom-wrapper","comp":"../../comp"}}`;
    (wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"], {
      "./node_modules/_@tarojs_taro-loader@3.3.2@@tarojs/taro-loader/lib/raw.js!./src/pages/index/index.vue": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        var _index_vue_vue_type_template_id_1badc801___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/pages/index/index.vue?vue&type=template&id=1badc801&");
        var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/pages/index/index.vue?vue&type=script&lang=js&");
        var _node_modules_vue_loader_15_9_8_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_vue-loader@15.9.8@vue-loader/lib/runtime/componentNormalizer.js");
        var component = Object(_node_modules_vue_loader_15_9_8_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["a"])(_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["a"], _index_vue_vue_type_template_id_1badc801___WEBPACK_IMPORTED_MODULE_0__["a"], _index_vue_vue_type_template_id_1badc801___WEBPACK_IMPORTED_MODULE_0__["b"], false, null, null, "04a945cf");
        component.options.__file = "src/pages/index/index.vue";
        __webpack_exports__["a"] = component.exports;
      },
      "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.8@vue-loader/lib/index.js?!./src/pages/index/index.vue?vue&type=script&lang=js&": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/pages/index/index.less");
        var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);
        __webpack_exports__["a"] = {
          data: function data() {
            return {
              msg: "Hello world!"
            };
          },
          methods: {
            click: function click() {
              console.log("click");
            }
          }
        };
      },
      "./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.8@vue-loader/lib/index.js?!./src/pages/index/index.vue?vue&type=template&id=1badc801&": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return render;
        });
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return staticRenderFns;
        });
        var render = function() {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("view", { staticClass: "index", attrs: { click: _vm.click } }, [
            _c("text", [_vm._v(_vm._s(_vm.msg))])
          ]);
        };
        var staticRenderFns = [];
        render._withStripped = true;
      },
      "./node_modules/_vue-loader@15.9.8@vue-loader/lib/runtime/componentNormalizer.js": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return normalizeComponent;
        });
        function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
          var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
          if (render) {
            options.render = render;
            options.staticRenderFns = staticRenderFns;
            options._compiled = true;
          }
          if (functionalTemplate) {
            options.functional = true;
          }
          if (scopeId) {
            options._scopeId = "data-v-" + scopeId;
          }
          var hook;
          if (moduleIdentifier) {
            hook = function(context) {
              context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
              if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
                context = __VUE_SSR_CONTEXT__;
              }
              if (injectStyles) {
                injectStyles.call(this, context);
              }
              if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
              }
            };
            options._ssrRegister = hook;
          } else if (injectStyles) {
            hook = shadowMode ? function() {
              injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
            } : injectStyles;
          }
          if (hook) {
            if (options.functional) {
              options._injectStyles = hook;
              var originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
              };
            } else {
              var existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
          }
          return {
            exports: scriptExports,
            options
          };
        }
      },
      "./src/pages/index/index.less": function(module2, exports2, __webpack_require__) {
      },
      "./src/pages/index/index.vue": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_@tarojs_runtime@3.3.2@@tarojs/runtime/dist/runtime.esm.js");
        var _node_modules_tarojs_taro_loader_3_3_2_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_@tarojs_taro-loader@3.3.2@@tarojs/taro-loader/lib/raw.js!./src/pages/index/index.vue");
        var config = { "navigationBarTitleText": "\u9996\u9875" };
        var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_3_3_2_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__["a"], "pages/index/index", { root: { cn: [] } }, config || {}));
      },
      "./src/pages/index/index.vue?vue&type=script&lang=js&": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        var _node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.8@vue-loader/lib/index.js?!./src/pages/index/index.vue?vue&type=script&lang=js&");
        __webpack_exports__["a"] = _node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["a"];
      },
      "./src/pages/index/index.vue?vue&type=template&id=1badc801&": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        var _node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1badc801___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.8@vue-loader/lib/index.js?!./src/pages/index/index.vue?vue&type=template&id=1badc801&");
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1badc801___WEBPACK_IMPORTED_MODULE_0__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return _node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1badc801___WEBPACK_IMPORTED_MODULE_0__["b"];
        });
      }
    }, [["./src/pages/index/index.vue", "runtime", "taro", "vendors"]]]);
  }
});

// <stdin>
require_app();
require_index2();
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
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
