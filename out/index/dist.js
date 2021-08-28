var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// taro/dist/runtime.js
var require_runtime = __commonJS({
  "taro/dist/runtime.js"() {
    (function(e) {
      function r(r2) {
        for (var n2, l2, a2 = r2[0], f2 = r2[1], i2 = r2[2], c = 0, s = []; c < a2.length; c++)
          l2 = a2[c], Object.prototype.hasOwnProperty.call(o, l2) && o[l2] && s.push(o[l2][0]), o[l2] = 0;
        for (n2 in f2)
          Object.prototype.hasOwnProperty.call(f2, n2) && (e[n2] = f2[n2]);
        p && p(r2);
        while (s.length)
          s.shift()();
        return u.push.apply(u, i2 || []), t();
      }
      function t() {
        for (var e2, r2 = 0; r2 < u.length; r2++) {
          for (var t2 = u[r2], n2 = true, a2 = 1; a2 < t2.length; a2++) {
            var f2 = t2[a2];
            o[f2] !== 0 && (n2 = false);
          }
          n2 && (u.splice(r2--, 1), e2 = l(l.s = t2[0]));
        }
        return e2;
      }
      var n = {}, o = { 0: 0 }, u = [];
      function l(r2) {
        if (n[r2])
          return n[r2].exports;
        var t2 = n[r2] = { i: r2, l: false, exports: {} };
        return e[r2].call(t2.exports, t2, t2.exports, l), t2.l = true, t2.exports;
      }
      l.m = e, l.c = n, l.d = function(e2, r2, t2) {
        l.o(e2, r2) || Object.defineProperty(e2, r2, { enumerable: true, get: t2 });
      }, l.r = function(e2) {
        typeof Symbol !== "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      }, l.t = function(e2, r2) {
        if (1 & r2 && (e2 = l(e2)), 8 & r2)
          return e2;
        if (4 & r2 && typeof e2 === "object" && e2 && e2.__esModule)
          return e2;
        var t2 = Object.create(null);
        if (l.r(t2), Object.defineProperty(t2, "default", { enumerable: true, value: e2 }), 2 & r2 && typeof e2 != "string")
          for (var n2 in e2)
            l.d(t2, n2, function(r3) {
              return e2[r3];
            }.bind(null, n2));
        return t2;
      }, l.n = function(e2) {
        var r2 = e2 && e2.__esModule ? function() {
          return e2["default"];
        } : function() {
          return e2;
        };
        return l.d(r2, "a", r2), r2;
      }, l.o = function(e2, r2) {
        return Object.prototype.hasOwnProperty.call(e2, r2);
      }, l.p = "/";
      var a = wx["webpackJsonp"] = wx["webpackJsonp"] || [], f = a.push.bind(a);
      a.push = r, a = a.slice();
      for (var i = 0; i < a.length; i++)
        r(a[i]);
      var p = f;
      t();
    })([]);
  }
});

// taro/dist/vendors.js
var require_vendors = __commonJS({
  "taro/dist/vendors.js"() {
    (wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[2], [, function(t, n, e) {
      "use strict";
      e.d(n, "a", function() {
        return nn;
      }), e.d(n, "b", function() {
        return en;
      }), e.d(n, "d", function() {
        return rn;
      }), e.d(n, "c", function() {
        return pt;
      }), e.d(n, "f", function() {
        return on;
      }), e.d(n, "e", function() {
        return un;
      });
      var r = {};
      e.r(r), e.d(r, "NAMED_TAG", function() {
        return i;
      }), e.d(r, "NAME_TAG", function() {
        return o;
      }), e.d(r, "UNMANAGED_TAG", function() {
        return u;
      }), e.d(r, "OPTIONAL_TAG", function() {
        return a;
      }), e.d(r, "INJECT_TAG", function() {
        return c;
      }), e.d(r, "MULTI_INJECT_TAG", function() {
        return s;
      }), e.d(r, "TAGGED", function() {
        return f;
      }), e.d(r, "TAGGED_PROP", function() {
        return l;
      }), e.d(r, "PARAM_TYPES", function() {
        return p;
      }), e.d(r, "DESIGN_PARAM_TYPES", function() {
        return h;
      }), e.d(r, "POST_CONSTRUCT", function() {
        return d;
      }), e.d(r, "NON_CUSTOM_TAG_KEYS", function() {
        return g;
      });
      var i = "named", o = "name", u = "unmanaged", a = "optional", c = "inject", s = "multi_inject", f = "inversify:tagged", l = "inversify:tagged_props", p = "inversify:paramtypes", h = "design:paramtypes", d = "post_construct";
      function y() {
        return [c, s, o, u, i, a];
      }
      var g = y(), v = e(6), b = { Request: "Request", Singleton: "Singleton", Transient: "Transient" }, m = { ConstantValue: "ConstantValue", Constructor: "Constructor", DynamicValue: "DynamicValue", Factory: "Factory", Function: "Function", Instance: "Instance", Invalid: "Invalid", Provider: "Provider" }, w = { ClassProperty: "ClassProperty", ConstructorArgument: "ConstructorArgument", Variable: "Variable" }, _ = 0;
      function S() {
        return _++;
      }
      var A = function() {
        function t2(t3, n2) {
          this.id = S(), this.activated = false, this.serviceIdentifier = t3, this.scope = n2, this.type = m.Invalid, this.constraint = function(t4) {
            return true;
          }, this.implementationType = null, this.cache = null, this.factory = null, this.provider = null, this.onActivation = null, this.dynamicValue = null;
        }
        return t2.prototype.clone = function() {
          var n2 = new t2(this.serviceIdentifier, this.scope);
          return n2.activated = n2.scope === b.Singleton && this.activated, n2.implementationType = this.implementationType, n2.dynamicValue = this.dynamicValue, n2.scope = this.scope, n2.type = this.type, n2.factory = this.factory, n2.provider = this.provider, n2.constraint = this.constraint, n2.onActivation = this.onActivation, n2.cache = this.cache, n2;
        }, t2;
      }(), x = "Cannot apply @injectable decorator multiple times.", T = "Metadata key was used more than once in a parameter:", j = "NULL argument", O = "Key Not Found", I = "Ambiguous match found for serviceIdentifier:", E = "Could not unbind serviceIdentifier:", R = "No matching bindings found for serviceIdentifier:", C = "Missing required @injectable annotation in:", N = "Missing required @inject or @multiInject annotation in:", k = function(t2) {
        return "@inject called with undefined this could mean that the class " + t2 + " has a circular dependency problem. You can use a LazyServiceIdentifer to  overcome this limitation.";
      }, M = "Circular dependency found:", P = "Invalid binding type:", q = "No snapshot available to restore.", F = "Invalid return type in middleware. Middleware must return!", L = "Value provided to function binding must be a function!", D = "The toSelf function can only be applied when a constructor is used as service identifier", W = "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.", B = function() {
        for (var t2 = [], n2 = 0; n2 < arguments.length; n2++)
          t2[n2] = arguments[n2];
        return "The number of constructor arguments in the derived class " + t2[0] + " must be >= than the number of constructor arguments of its base class.";
      }, V = "Invalid Container constructor argument. Container options must be an object.", G = "Invalid Container option. Default scope must be a string ('singleton' or 'transient').", $ = "Invalid Container option. Auto bind injectable must be a boolean", U = "Invalid Container option. Skip base check must be a boolean", Y = function() {
        for (var t2 = [], n2 = 0; n2 < arguments.length; n2++)
          t2[n2] = arguments[n2];
        return "@postConstruct error in class " + t2[0] + ": " + t2[1];
      }, K = function() {
        for (var t2 = [], n2 = 0; n2 < arguments.length; n2++)
          t2[n2] = arguments[n2];
        return "It looks like there is a circular dependency in one of the '" + t2[0] + "' bindings. Please investigate bindings withservice identifier '" + t2[1] + "'.";
      }, H = "Maximum call stack size exceeded", z = function() {
        function t2() {
        }
        return t2.prototype.getConstructorMetadata = function(t3) {
          var n2 = Reflect.getMetadata(p, t3), e2 = Reflect.getMetadata(f, t3);
          return { compilerGeneratedMetadata: n2, userGeneratedMetadata: e2 || {} };
        }, t2.prototype.getPropertiesMetadata = function(t3) {
          var n2 = Reflect.getMetadata(l, t3) || [];
          return n2;
        }, t2;
      }(), J = { MultipleBindingsAvailable: 2, NoBindingsAvailable: 0, OnlyOneBindingAvailable: 1 };
      function Q(t2) {
        return t2 instanceof RangeError || t2.message === H;
      }
      function X(t2) {
        if (typeof t2 === "function") {
          var n2 = t2;
          return n2.name;
        }
        if (Object(v["a"])(t2) === "symbol")
          return t2.toString();
        n2 = t2;
        return n2;
      }
      function Z(t2, n2, e2) {
        var r2 = "", i2 = e2(t2, n2);
        return i2.length !== 0 && (r2 = "\nRegistered bindings:", i2.forEach(function(t3) {
          var n3 = "Object";
          t3.implementationType !== null && (n3 = it(t3.implementationType)), r2 = r2 + "\n " + n3, t3.constraint.metaData && (r2 = r2 + " - " + t3.constraint.metaData);
        })), r2;
      }
      function tt2(t2, n2) {
        return t2.parentRequest !== null && (t2.parentRequest.serviceIdentifier === n2 || tt2(t2.parentRequest, n2));
      }
      function nt(t2) {
        function n2(t3, e3) {
          e3 === void 0 && (e3 = []);
          var r2 = X(t3.serviceIdentifier);
          return e3.push(r2), t3.parentRequest !== null ? n2(t3.parentRequest, e3) : e3;
        }
        var e2 = n2(t2);
        return e2.reverse().join(" --> ");
      }
      function et(t2) {
        t2.childRequests.forEach(function(t3) {
          if (tt2(t3, t3.serviceIdentifier)) {
            var n2 = nt(t3);
            throw new Error(M + " " + n2);
          }
          et(t3);
        });
      }
      function rt(t2, n2) {
        if (n2.isTagged() || n2.isNamed()) {
          var e2 = "", r2 = n2.getNamedTag(), i2 = n2.getCustomTags();
          return r2 !== null && (e2 += r2.toString() + "\n"), i2 !== null && i2.forEach(function(t3) {
            e2 += t3.toString() + "\n";
          }), " " + t2 + "\n " + t2 + " - " + e2;
        }
        return " " + t2;
      }
      function it(t2) {
        if (t2.name)
          return t2.name;
        var n2 = t2.toString(), e2 = n2.match(/^function\s*([^\s(]+)/);
        return e2 ? e2[1] : "Anonymous function: " + n2;
      }
      var ot = function() {
        function t2(t3) {
          this.id = S(), this.container = t3;
        }
        return t2.prototype.addPlan = function(t3) {
          this.plan = t3;
        }, t2.prototype.setCurrentRequest = function(t3) {
          this.currentRequest = t3;
        }, t2;
      }(), ut = function() {
        function t2(t3, n2) {
          this.key = t3, this.value = n2;
        }
        return t2.prototype.toString = function() {
          return this.key === i ? "named: " + this.value.toString() + " " : "tagged: { key:" + this.key.toString() + ", value: " + this.value + " }";
        }, t2;
      }(), at = function() {
        function t2(t3, n2) {
          this.parentContext = t3, this.rootRequest = n2;
        }
        return t2;
      }();
      function ct(t2, n2, e2, r2) {
        var i2 = f;
        ft(i2, t2, n2, r2, e2);
      }
      function st(t2, n2, e2) {
        var r2 = l;
        ft(r2, t2.constructor, n2, e2);
      }
      function ft(t2, n2, e2, r2, i2) {
        var o2 = {}, u2 = typeof i2 === "number", a2 = i2 !== void 0 && u2 ? i2.toString() : e2;
        if (u2 && e2 !== void 0)
          throw new Error(W);
        Reflect.hasOwnMetadata(t2, n2) && (o2 = Reflect.getMetadata(t2, n2));
        var c2 = o2[a2];
        if (Array.isArray(c2))
          for (var s2 = 0, f2 = c2; s2 < f2.length; s2++) {
            var l2 = f2[s2];
            if (l2.key === r2.key)
              throw new Error(T + " " + l2.key.toString());
          }
        else
          c2 = [];
        c2.push(r2), o2[a2] = c2, Reflect.defineMetadata(t2, o2, n2);
      }
      var lt = function() {
        function t2(t3) {
          this._cb = t3;
        }
        return t2.prototype.unwrap = function() {
          return this._cb();
        }, t2;
      }();
      function pt(t2) {
        return function(n2, e2, r2) {
          if (t2 === void 0)
            throw new Error(k(n2.name));
          var i2 = new ut(c, t2);
          typeof r2 === "number" ? ct(n2, e2, r2, i2) : st(n2, e2, i2);
        };
      }
      var ht = function() {
        function t2(t3) {
          this.str = t3;
        }
        return t2.prototype.startsWith = function(t3) {
          return this.str.indexOf(t3) === 0;
        }, t2.prototype.endsWith = function(t3) {
          var n2 = "", e2 = t3.split("").reverse().join("");
          return n2 = this.str.split("").reverse().join(""), this.startsWith.call({ str: n2 }, e2);
        }, t2.prototype.contains = function(t3) {
          return this.str.indexOf(t3) !== -1;
        }, t2.prototype.equals = function(t3) {
          return this.str === t3;
        }, t2.prototype.value = function() {
          return this.str;
        }, t2;
      }(), dt = function() {
        function t2(t3, n2, e2, r2) {
          this.id = S(), this.type = t3, this.serviceIdentifier = e2, this.name = new ht(n2 || ""), this.metadata = new Array();
          var o2 = null;
          typeof r2 === "string" ? o2 = new ut(i, r2) : r2 instanceof ut && (o2 = r2), o2 !== null && this.metadata.push(o2);
        }
        return t2.prototype.hasTag = function(t3) {
          for (var n2 = 0, e2 = this.metadata; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            if (r2.key === t3)
              return true;
          }
          return false;
        }, t2.prototype.isArray = function() {
          return this.hasTag(s);
        }, t2.prototype.matchesArray = function(t3) {
          return this.matchesTag(s)(t3);
        }, t2.prototype.isNamed = function() {
          return this.hasTag(i);
        }, t2.prototype.isTagged = function() {
          return this.metadata.some(function(t3) {
            return g.every(function(n2) {
              return t3.key !== n2;
            });
          });
        }, t2.prototype.isOptional = function() {
          return this.matchesTag(a)(true);
        }, t2.prototype.getNamedTag = function() {
          return this.isNamed() ? this.metadata.filter(function(t3) {
            return t3.key === i;
          })[0] : null;
        }, t2.prototype.getCustomTags = function() {
          return this.isTagged() ? this.metadata.filter(function(t3) {
            return g.every(function(n2) {
              return t3.key !== n2;
            });
          }) : null;
        }, t2.prototype.matchesNamedTag = function(t3) {
          return this.matchesTag(i)(t3);
        }, t2.prototype.matchesTag = function(t3) {
          var n2 = this;
          return function(e2) {
            for (var r2 = 0, i2 = n2.metadata; r2 < i2.length; r2++) {
              var o2 = i2[r2];
              if (o2.key === t3 && o2.value === e2)
                return true;
            }
            return false;
          };
        }, t2;
      }(), yt = function(t2, n2) {
        for (var e2 = 0, r2 = n2.length, i2 = t2.length; e2 < r2; e2++, i2++)
          t2[i2] = n2[e2];
        return t2;
      };
      function gt(t2, n2) {
        var e2 = it(n2), r2 = vt(t2, e2, n2, false);
        return r2;
      }
      function vt(t2, n2, e2, r2) {
        var i2 = t2.getConstructorMetadata(e2), o2 = i2.compilerGeneratedMetadata;
        if (o2 === void 0) {
          var u2 = C + " " + n2 + ".";
          throw new Error(u2);
        }
        var a2 = i2.userGeneratedMetadata, c2 = Object.keys(a2), s2 = e2.length === 0 && c2.length > 0, f2 = c2.length > e2.length, l2 = s2 || f2 ? c2.length : e2.length, p2 = mt(r2, n2, o2, a2, l2), h2 = wt(t2, e2), d2 = yt(yt([], p2), h2);
        return d2;
      }
      function bt(t2, n2, e2, r2, i2) {
        var o2 = i2[t2.toString()] || [], u2 = St(o2), a2 = u2.unmanaged !== true, c2 = r2[t2], s2 = u2.inject || u2.multiInject;
        if (c2 = s2 || c2, c2 instanceof lt && (c2 = c2.unwrap()), a2) {
          var f2 = c2 === Object, l2 = c2 === Function, p2 = c2 === void 0, h2 = f2 || l2 || p2;
          if (!n2 && h2) {
            var d2 = N + " argument " + t2 + " in class " + e2 + ".";
            throw new Error(d2);
          }
          var y2 = new dt(w.ConstructorArgument, u2.targetName, c2);
          return y2.metadata = o2, y2;
        }
        return null;
      }
      function mt(t2, n2, e2, r2, i2) {
        for (var o2 = [], u2 = 0; u2 < i2; u2++) {
          var a2 = u2, c2 = bt(a2, t2, n2, e2, r2);
          c2 !== null && o2.push(c2);
        }
        return o2;
      }
      function wt(t2, n2) {
        for (var e2 = t2.getPropertiesMetadata(n2), r2 = [], i2 = Object.keys(e2), o2 = 0, u2 = i2; o2 < u2.length; o2++) {
          var a2 = u2[o2], c2 = e2[a2], s2 = St(e2[a2]), f2 = s2.targetName || a2, l2 = s2.inject || s2.multiInject, p2 = new dt(w.ClassProperty, f2, l2);
          p2.metadata = c2, r2.push(p2);
        }
        var h2 = Object.getPrototypeOf(n2.prototype).constructor;
        if (h2 !== Object) {
          var d2 = wt(t2, h2);
          r2 = yt(yt([], r2), d2);
        }
        return r2;
      }
      function _t(t2, n2) {
        var e2 = Object.getPrototypeOf(n2.prototype).constructor;
        if (e2 !== Object) {
          var r2 = it(e2), i2 = vt(t2, r2, e2, true), o2 = i2.map(function(t3) {
            return t3.metadata.filter(function(t4) {
              return t4.key === u;
            });
          }), a2 = [].concat.apply([], o2).length, c2 = i2.length - a2;
          return c2 > 0 ? c2 : _t(t2, e2);
        }
        return 0;
      }
      function St(t2) {
        var n2 = {};
        return t2.forEach(function(t3) {
          n2[t3.key.toString()] = t3.value;
        }), { inject: n2[c], multiInject: n2[s], targetName: n2[o], unmanaged: n2[u] };
      }
      var At = function() {
        function t2(t3, n2, e2, r2, i2) {
          this.id = S(), this.serviceIdentifier = t3, this.parentContext = n2, this.parentRequest = e2, this.target = i2, this.childRequests = [], this.bindings = Array.isArray(r2) ? r2 : [r2], this.requestScope = e2 === null ? new Map() : null;
        }
        return t2.prototype.addChildRequest = function(n2, e2, r2) {
          var i2 = new t2(n2, this.parentContext, this, e2, r2);
          return this.childRequests.push(i2), i2;
        }, t2;
      }();
      function xt(t2) {
        return t2._bindingDictionary;
      }
      function Tt(t2, n2, e2, r2, i2, o2) {
        var u2 = t2 ? s : c, a2 = new ut(u2, e2), f2 = new dt(n2, r2, e2, a2);
        if (i2 !== void 0) {
          var l2 = new ut(i2, o2);
          f2.metadata.push(l2);
        }
        return f2;
      }
      function jt(t2, n2, e2, r2, i2) {
        var o2 = Et(e2.container, i2.serviceIdentifier), u2 = [];
        return o2.length === J.NoBindingsAvailable && e2.container.options.autoBindInjectable && typeof i2.serviceIdentifier === "function" && t2.getConstructorMetadata(i2.serviceIdentifier).compilerGeneratedMetadata && (e2.container.bind(i2.serviceIdentifier).toSelf(), o2 = Et(e2.container, i2.serviceIdentifier)), u2 = n2 ? o2 : o2.filter(function(t3) {
          var n3 = new At(t3.serviceIdentifier, e2, r2, t3, i2);
          return t3.constraint(n3);
        }), Ot(i2.serviceIdentifier, u2, i2, e2.container), u2;
      }
      function Ot(t2, n2, e2, r2) {
        switch (n2.length) {
          case J.NoBindingsAvailable:
            if (e2.isOptional())
              return n2;
            var i2 = X(t2), o2 = R;
            throw o2 += rt(i2, e2), o2 += Z(r2, i2, Et), new Error(o2);
          case J.OnlyOneBindingAvailable:
            if (!e2.isArray())
              return n2;
          case J.MultipleBindingsAvailable:
          default:
            if (e2.isArray())
              return n2;
            i2 = X(t2), o2 = I + " " + i2;
            throw o2 += Z(r2, i2, Et), new Error(o2);
        }
      }
      function It(t2, n2, e2, r2, i2, o2) {
        var u2, a2;
        if (i2 === null) {
          u2 = jt(t2, n2, r2, null, o2), a2 = new At(e2, r2, null, u2, o2);
          var c2 = new at(r2, a2);
          r2.addPlan(c2);
        } else
          u2 = jt(t2, n2, r2, i2, o2), a2 = i2.addChildRequest(o2.serviceIdentifier, u2, o2);
        u2.forEach(function(n3) {
          var e3 = null;
          if (o2.isArray())
            e3 = a2.addChildRequest(n3.serviceIdentifier, n3, o2);
          else {
            if (n3.cache)
              return;
            e3 = a2;
          }
          if (n3.type === m.Instance && n3.implementationType !== null) {
            var i3 = gt(t2, n3.implementationType);
            if (!r2.container.options.skipBaseClassChecks) {
              var u3 = _t(t2, n3.implementationType);
              if (i3.length < u3) {
                var c3 = B(it(n3.implementationType));
                throw new Error(c3);
              }
            }
            i3.forEach(function(n4) {
              It(t2, false, n4.serviceIdentifier, r2, e3, n4);
            });
          }
        });
      }
      function Et(t2, n2) {
        var e2 = [], r2 = xt(t2);
        return r2.hasKey(n2) ? e2 = r2.get(n2) : t2.parent !== null && (e2 = Et(t2.parent, n2)), e2;
      }
      function Rt(t2, n2, e2, r2, i2, o2, u2, a2) {
        a2 === void 0 && (a2 = false);
        var c2 = new ot(n2), s2 = Tt(e2, r2, i2, "", o2, u2);
        try {
          return It(t2, a2, i2, c2, null, s2), c2;
        } catch (t3) {
          throw Q(t3) && c2.plan && et(c2.plan.rootRequest), t3;
        }
      }
      function Ct(t2, n2, e2, r2) {
        var i2 = new dt(w.Variable, "", n2, new ut(e2, r2)), o2 = new ot(t2), u2 = new At(n2, o2, null, [], i2);
        return u2;
      }
      var Nt = function(t2, n2) {
        for (var e2 = 0, r2 = n2.length, i2 = t2.length; e2 < r2; e2++, i2++)
          t2[i2] = n2[e2];
        return t2;
      };
      function kt(t2, n2, e2) {
        var r2 = n2.filter(function(t3) {
          return t3.target !== null && t3.target.type === w.ClassProperty;
        }), i2 = r2.map(e2);
        return r2.forEach(function(n3, e3) {
          var r3 = "";
          r3 = n3.target.name.value();
          var o2 = i2[e3];
          t2[r3] = o2;
        }), t2;
      }
      function Mt(t2, n2) {
        return new (t2.bind.apply(t2, Nt([void 0], n2)))();
      }
      function Pt(t2, n2) {
        if (Reflect.hasMetadata(d, t2)) {
          var e2 = Reflect.getMetadata(d, t2);
          try {
            n2[e2.value]();
          } catch (n3) {
            throw new Error(Y(t2.name, n3.message));
          }
        }
      }
      function qt(t2, n2, e2) {
        var r2 = null;
        if (n2.length > 0) {
          var i2 = n2.filter(function(t3) {
            return t3.target !== null && t3.target.type === w.ConstructorArgument;
          }), o2 = i2.map(e2);
          r2 = Mt(t2, o2), r2 = kt(r2, n2, e2);
        } else
          r2 = new t2();
        return Pt(t2, r2), r2;
      }
      var Ft = function(t2, n2, e2) {
        try {
          return e2();
        } catch (e3) {
          throw Q(e3) ? new Error(K(t2, n2.toString())) : e3;
        }
      }, Lt = function t2(n2) {
        return function(e2) {
          e2.parentContext.setCurrentRequest(e2);
          var r2 = e2.bindings, i2 = e2.childRequests, o2 = e2.target && e2.target.isArray(), u2 = !e2.parentRequest || !e2.parentRequest.target || !e2.target || !e2.parentRequest.target.matchesArray(e2.target.serviceIdentifier);
          if (o2 && u2)
            return i2.map(function(e3) {
              var r3 = t2(n2);
              return r3(e3);
            });
          var a2 = null;
          if (!e2.target.isOptional() || r2.length !== 0) {
            var c2 = r2[0], s2 = c2.scope === b.Singleton, f2 = c2.scope === b.Request;
            if (s2 && c2.activated)
              return c2.cache;
            if (f2 && n2 !== null && n2.has(c2.id))
              return n2.get(c2.id);
            if (c2.type === m.ConstantValue)
              a2 = c2.cache, c2.activated = true;
            else if (c2.type === m.Function)
              a2 = c2.cache, c2.activated = true;
            else if (c2.type === m.Constructor)
              a2 = c2.implementationType;
            else if (c2.type === m.DynamicValue && c2.dynamicValue !== null)
              a2 = Ft("toDynamicValue", c2.serviceIdentifier, function() {
                return c2.dynamicValue(e2.parentContext);
              });
            else if (c2.type === m.Factory && c2.factory !== null)
              a2 = Ft("toFactory", c2.serviceIdentifier, function() {
                return c2.factory(e2.parentContext);
              });
            else if (c2.type === m.Provider && c2.provider !== null)
              a2 = Ft("toProvider", c2.serviceIdentifier, function() {
                return c2.provider(e2.parentContext);
              });
            else {
              if (c2.type !== m.Instance || c2.implementationType === null) {
                var l2 = X(e2.serviceIdentifier);
                throw new Error(P + " " + l2);
              }
              a2 = qt(c2.implementationType, i2, t2(n2));
            }
            return typeof c2.onActivation === "function" && (a2 = c2.onActivation(e2.parentContext, a2)), s2 && (c2.cache = a2, c2.activated = true), f2 && n2 !== null && !n2.has(c2.id) && n2.set(c2.id, a2), a2;
          }
        };
      };
      function Dt(t2) {
        var n2 = Lt(t2.plan.rootRequest.requestScope);
        return n2(t2.plan.rootRequest);
      }
      var Wt = function t2(n2, e2) {
        var r2 = n2.parentRequest;
        return r2 !== null && (!!e2(r2) || t2(r2, e2));
      }, Bt = function(t2) {
        return function(n2) {
          var e2 = function(e3) {
            return e3 !== null && e3.target !== null && e3.target.matchesTag(t2)(n2);
          };
          return e2.metaData = new ut(t2, n2), e2;
        };
      }, Vt = Bt(i), Gt = function(t2) {
        return function(n2) {
          var e2 = null;
          if (n2 !== null) {
            if (e2 = n2.bindings[0], typeof t2 === "string") {
              var r2 = e2.serviceIdentifier;
              return r2 === t2;
            }
            var i2 = n2.bindings[0].implementationType;
            return t2 === i2;
          }
          return false;
        };
      }, $t = function() {
        function t2(t3) {
          this._binding = t3;
        }
        return t2.prototype.when = function(t3) {
          return this._binding.constraint = t3, new Ut(this._binding);
        }, t2.prototype.whenTargetNamed = function(t3) {
          return this._binding.constraint = Vt(t3), new Ut(this._binding);
        }, t2.prototype.whenTargetIsDefault = function() {
          return this._binding.constraint = function(t3) {
            var n2 = t3.target !== null && !t3.target.isNamed() && !t3.target.isTagged();
            return n2;
          }, new Ut(this._binding);
        }, t2.prototype.whenTargetTagged = function(t3, n2) {
          return this._binding.constraint = Bt(t3)(n2), new Ut(this._binding);
        }, t2.prototype.whenInjectedInto = function(t3) {
          return this._binding.constraint = function(n2) {
            return Gt(t3)(n2.parentRequest);
          }, new Ut(this._binding);
        }, t2.prototype.whenParentNamed = function(t3) {
          return this._binding.constraint = function(n2) {
            return Vt(t3)(n2.parentRequest);
          }, new Ut(this._binding);
        }, t2.prototype.whenParentTagged = function(t3, n2) {
          return this._binding.constraint = function(e2) {
            return Bt(t3)(n2)(e2.parentRequest);
          }, new Ut(this._binding);
        }, t2.prototype.whenAnyAncestorIs = function(t3) {
          return this._binding.constraint = function(n2) {
            return Wt(n2, Gt(t3));
          }, new Ut(this._binding);
        }, t2.prototype.whenNoAncestorIs = function(t3) {
          return this._binding.constraint = function(n2) {
            return !Wt(n2, Gt(t3));
          }, new Ut(this._binding);
        }, t2.prototype.whenAnyAncestorNamed = function(t3) {
          return this._binding.constraint = function(n2) {
            return Wt(n2, Vt(t3));
          }, new Ut(this._binding);
        }, t2.prototype.whenNoAncestorNamed = function(t3) {
          return this._binding.constraint = function(n2) {
            return !Wt(n2, Vt(t3));
          }, new Ut(this._binding);
        }, t2.prototype.whenAnyAncestorTagged = function(t3, n2) {
          return this._binding.constraint = function(e2) {
            return Wt(e2, Bt(t3)(n2));
          }, new Ut(this._binding);
        }, t2.prototype.whenNoAncestorTagged = function(t3, n2) {
          return this._binding.constraint = function(e2) {
            return !Wt(e2, Bt(t3)(n2));
          }, new Ut(this._binding);
        }, t2.prototype.whenAnyAncestorMatches = function(t3) {
          return this._binding.constraint = function(n2) {
            return Wt(n2, t3);
          }, new Ut(this._binding);
        }, t2.prototype.whenNoAncestorMatches = function(t3) {
          return this._binding.constraint = function(n2) {
            return !Wt(n2, t3);
          }, new Ut(this._binding);
        }, t2;
      }(), Ut = function() {
        function t2(t3) {
          this._binding = t3;
        }
        return t2.prototype.onActivation = function(t3) {
          return this._binding.onActivation = t3, new $t(this._binding);
        }, t2;
      }(), Yt = function() {
        function t2(t3) {
          this._binding = t3, this._bindingWhenSyntax = new $t(this._binding), this._bindingOnSyntax = new Ut(this._binding);
        }
        return t2.prototype.when = function(t3) {
          return this._bindingWhenSyntax.when(t3);
        }, t2.prototype.whenTargetNamed = function(t3) {
          return this._bindingWhenSyntax.whenTargetNamed(t3);
        }, t2.prototype.whenTargetIsDefault = function() {
          return this._bindingWhenSyntax.whenTargetIsDefault();
        }, t2.prototype.whenTargetTagged = function(t3, n2) {
          return this._bindingWhenSyntax.whenTargetTagged(t3, n2);
        }, t2.prototype.whenInjectedInto = function(t3) {
          return this._bindingWhenSyntax.whenInjectedInto(t3);
        }, t2.prototype.whenParentNamed = function(t3) {
          return this._bindingWhenSyntax.whenParentNamed(t3);
        }, t2.prototype.whenParentTagged = function(t3, n2) {
          return this._bindingWhenSyntax.whenParentTagged(t3, n2);
        }, t2.prototype.whenAnyAncestorIs = function(t3) {
          return this._bindingWhenSyntax.whenAnyAncestorIs(t3);
        }, t2.prototype.whenNoAncestorIs = function(t3) {
          return this._bindingWhenSyntax.whenNoAncestorIs(t3);
        }, t2.prototype.whenAnyAncestorNamed = function(t3) {
          return this._bindingWhenSyntax.whenAnyAncestorNamed(t3);
        }, t2.prototype.whenAnyAncestorTagged = function(t3, n2) {
          return this._bindingWhenSyntax.whenAnyAncestorTagged(t3, n2);
        }, t2.prototype.whenNoAncestorNamed = function(t3) {
          return this._bindingWhenSyntax.whenNoAncestorNamed(t3);
        }, t2.prototype.whenNoAncestorTagged = function(t3, n2) {
          return this._bindingWhenSyntax.whenNoAncestorTagged(t3, n2);
        }, t2.prototype.whenAnyAncestorMatches = function(t3) {
          return this._bindingWhenSyntax.whenAnyAncestorMatches(t3);
        }, t2.prototype.whenNoAncestorMatches = function(t3) {
          return this._bindingWhenSyntax.whenNoAncestorMatches(t3);
        }, t2.prototype.onActivation = function(t3) {
          return this._bindingOnSyntax.onActivation(t3);
        }, t2;
      }(), Kt = function() {
        function t2(t3) {
          this._binding = t3;
        }
        return t2.prototype.inRequestScope = function() {
          return this._binding.scope = b.Request, new Yt(this._binding);
        }, t2.prototype.inSingletonScope = function() {
          return this._binding.scope = b.Singleton, new Yt(this._binding);
        }, t2.prototype.inTransientScope = function() {
          return this._binding.scope = b.Transient, new Yt(this._binding);
        }, t2;
      }(), Ht = function() {
        function t2(t3) {
          this._binding = t3, this._bindingWhenSyntax = new $t(this._binding), this._bindingOnSyntax = new Ut(this._binding), this._bindingInSyntax = new Kt(t3);
        }
        return t2.prototype.inRequestScope = function() {
          return this._bindingInSyntax.inRequestScope();
        }, t2.prototype.inSingletonScope = function() {
          return this._bindingInSyntax.inSingletonScope();
        }, t2.prototype.inTransientScope = function() {
          return this._bindingInSyntax.inTransientScope();
        }, t2.prototype.when = function(t3) {
          return this._bindingWhenSyntax.when(t3);
        }, t2.prototype.whenTargetNamed = function(t3) {
          return this._bindingWhenSyntax.whenTargetNamed(t3);
        }, t2.prototype.whenTargetIsDefault = function() {
          return this._bindingWhenSyntax.whenTargetIsDefault();
        }, t2.prototype.whenTargetTagged = function(t3, n2) {
          return this._bindingWhenSyntax.whenTargetTagged(t3, n2);
        }, t2.prototype.whenInjectedInto = function(t3) {
          return this._bindingWhenSyntax.whenInjectedInto(t3);
        }, t2.prototype.whenParentNamed = function(t3) {
          return this._bindingWhenSyntax.whenParentNamed(t3);
        }, t2.prototype.whenParentTagged = function(t3, n2) {
          return this._bindingWhenSyntax.whenParentTagged(t3, n2);
        }, t2.prototype.whenAnyAncestorIs = function(t3) {
          return this._bindingWhenSyntax.whenAnyAncestorIs(t3);
        }, t2.prototype.whenNoAncestorIs = function(t3) {
          return this._bindingWhenSyntax.whenNoAncestorIs(t3);
        }, t2.prototype.whenAnyAncestorNamed = function(t3) {
          return this._bindingWhenSyntax.whenAnyAncestorNamed(t3);
        }, t2.prototype.whenAnyAncestorTagged = function(t3, n2) {
          return this._bindingWhenSyntax.whenAnyAncestorTagged(t3, n2);
        }, t2.prototype.whenNoAncestorNamed = function(t3) {
          return this._bindingWhenSyntax.whenNoAncestorNamed(t3);
        }, t2.prototype.whenNoAncestorTagged = function(t3, n2) {
          return this._bindingWhenSyntax.whenNoAncestorTagged(t3, n2);
        }, t2.prototype.whenAnyAncestorMatches = function(t3) {
          return this._bindingWhenSyntax.whenAnyAncestorMatches(t3);
        }, t2.prototype.whenNoAncestorMatches = function(t3) {
          return this._bindingWhenSyntax.whenNoAncestorMatches(t3);
        }, t2.prototype.onActivation = function(t3) {
          return this._bindingOnSyntax.onActivation(t3);
        }, t2;
      }(), zt = function() {
        function t2(t3) {
          this._binding = t3;
        }
        return t2.prototype.to = function(t3) {
          return this._binding.type = m.Instance, this._binding.implementationType = t3, new Ht(this._binding);
        }, t2.prototype.toSelf = function() {
          if (typeof this._binding.serviceIdentifier !== "function")
            throw new Error("" + D);
          var t3 = this._binding.serviceIdentifier;
          return this.to(t3);
        }, t2.prototype.toConstantValue = function(t3) {
          return this._binding.type = m.ConstantValue, this._binding.cache = t3, this._binding.dynamicValue = null, this._binding.implementationType = null, this._binding.scope = b.Singleton, new Yt(this._binding);
        }, t2.prototype.toDynamicValue = function(t3) {
          return this._binding.type = m.DynamicValue, this._binding.cache = null, this._binding.dynamicValue = t3, this._binding.implementationType = null, new Ht(this._binding);
        }, t2.prototype.toConstructor = function(t3) {
          return this._binding.type = m.Constructor, this._binding.implementationType = t3, this._binding.scope = b.Singleton, new Yt(this._binding);
        }, t2.prototype.toFactory = function(t3) {
          return this._binding.type = m.Factory, this._binding.factory = t3, this._binding.scope = b.Singleton, new Yt(this._binding);
        }, t2.prototype.toFunction = function(t3) {
          if (typeof t3 !== "function")
            throw new Error(L);
          var n2 = this.toConstantValue(t3);
          return this._binding.type = m.Function, this._binding.scope = b.Singleton, n2;
        }, t2.prototype.toAutoFactory = function(t3) {
          return this._binding.type = m.Factory, this._binding.factory = function(n2) {
            var e2 = function() {
              return n2.container.get(t3);
            };
            return e2;
          }, this._binding.scope = b.Singleton, new Yt(this._binding);
        }, t2.prototype.toProvider = function(t3) {
          return this._binding.type = m.Provider, this._binding.provider = t3, this._binding.scope = b.Singleton, new Yt(this._binding);
        }, t2.prototype.toService = function(t3) {
          this.toDynamicValue(function(n2) {
            return n2.container.get(t3);
          });
        }, t2;
      }(), Jt = function() {
        function t2() {
        }
        return t2.of = function(n2, e2) {
          var r2 = new t2();
          return r2.bindings = n2, r2.middleware = e2, r2;
        }, t2;
      }(), Qt = function() {
        function t2() {
          this._map = new Map();
        }
        return t2.prototype.getMap = function() {
          return this._map;
        }, t2.prototype.add = function(t3, n2) {
          if (t3 === null || t3 === void 0)
            throw new Error(j);
          if (n2 === null || n2 === void 0)
            throw new Error(j);
          var e2 = this._map.get(t3);
          e2 !== void 0 ? (e2.push(n2), this._map.set(t3, e2)) : this._map.set(t3, [n2]);
        }, t2.prototype.get = function(t3) {
          if (t3 === null || t3 === void 0)
            throw new Error(j);
          var n2 = this._map.get(t3);
          if (n2 !== void 0)
            return n2;
          throw new Error(O);
        }, t2.prototype.remove = function(t3) {
          if (t3 === null || t3 === void 0)
            throw new Error(j);
          if (!this._map.delete(t3))
            throw new Error(O);
        }, t2.prototype.removeByCondition = function(t3) {
          var n2 = this;
          this._map.forEach(function(e2, r2) {
            var i2 = e2.filter(function(n3) {
              return !t3(n3);
            });
            i2.length > 0 ? n2._map.set(r2, i2) : n2._map.delete(r2);
          });
        }, t2.prototype.hasKey = function(t3) {
          if (t3 === null || t3 === void 0)
            throw new Error(j);
          return this._map.has(t3);
        }, t2.prototype.clone = function() {
          var n2 = new t2();
          return this._map.forEach(function(t3, e2) {
            t3.forEach(function(t4) {
              return n2.add(e2, t4.clone());
            });
          }), n2;
        }, t2.prototype.traverse = function(t3) {
          this._map.forEach(function(n2, e2) {
            t3(e2, n2);
          });
        }, t2;
      }(), Xt = function(t2, n2, e2, r2) {
        function i2(t3) {
          return t3 instanceof e2 ? t3 : new e2(function(n3) {
            n3(t3);
          });
        }
        return new (e2 || (e2 = Promise))(function(e3, o2) {
          function u2(t3) {
            try {
              c2(r2.next(t3));
            } catch (t4) {
              o2(t4);
            }
          }
          function a2(t3) {
            try {
              c2(r2["throw"](t3));
            } catch (t4) {
              o2(t4);
            }
          }
          function c2(t3) {
            t3.done ? e3(t3.value) : i2(t3.value).then(u2, a2);
          }
          c2((r2 = r2.apply(t2, n2 || [])).next());
        });
      }, Zt = function(t2, n2) {
        var e2, r2, i2, o2, u2 = { label: 0, sent: function() {
          if (1 & i2[0])
            throw i2[1];
          return i2[1];
        }, trys: [], ops: [] };
        return o2 = { next: a2(0), throw: a2(1), return: a2(2) }, typeof Symbol === "function" && (o2[Symbol.iterator] = function() {
          return this;
        }), o2;
        function a2(t3) {
          return function(n3) {
            return c2([t3, n3]);
          };
        }
        function c2(o3) {
          if (e2)
            throw new TypeError("Generator is already executing.");
          while (u2)
            try {
              if (e2 = 1, r2 && (i2 = 2 & o3[0] ? r2["return"] : o3[0] ? r2["throw"] || ((i2 = r2["return"]) && i2.call(r2), 0) : r2.next) && !(i2 = i2.call(r2, o3[1])).done)
                return i2;
              switch (r2 = 0, i2 && (o3 = [2 & o3[0], i2.value]), o3[0]) {
                case 0:
                case 1:
                  i2 = o3;
                  break;
                case 4:
                  return u2.label++, { value: o3[1], done: false };
                case 5:
                  u2.label++, r2 = o3[1], o3 = [0];
                  continue;
                case 7:
                  o3 = u2.ops.pop(), u2.trys.pop();
                  continue;
                default:
                  if (i2 = u2.trys, !(i2 = i2.length > 0 && i2[i2.length - 1]) && (o3[0] === 6 || o3[0] === 2)) {
                    u2 = 0;
                    continue;
                  }
                  if (o3[0] === 3 && (!i2 || o3[1] > i2[0] && o3[1] < i2[3])) {
                    u2.label = o3[1];
                    break;
                  }
                  if (o3[0] === 6 && u2.label < i2[1]) {
                    u2.label = i2[1], i2 = o3;
                    break;
                  }
                  if (i2 && u2.label < i2[2]) {
                    u2.label = i2[2], u2.ops.push(o3);
                    break;
                  }
                  i2[2] && u2.ops.pop(), u2.trys.pop();
                  continue;
              }
              o3 = n2.call(t2, u2);
            } catch (t3) {
              o3 = [6, t3], r2 = 0;
            } finally {
              e2 = i2 = 0;
            }
          if (5 & o3[0])
            throw o3[1];
          return { value: o3[0] ? o3[1] : void 0, done: true };
        }
      }, tn = function(t2, n2) {
        for (var e2 = 0, r2 = n2.length, i2 = t2.length; e2 < r2; e2++, i2++)
          t2[i2] = n2[e2];
        return t2;
      }, nn = function() {
        function t2(t3) {
          this._appliedMiddleware = [];
          var n2 = t3 || {};
          if (Object(v["a"])(n2) !== "object")
            throw new Error("" + V);
          if (n2.defaultScope === void 0)
            n2.defaultScope = b.Transient;
          else if (n2.defaultScope !== b.Singleton && n2.defaultScope !== b.Transient && n2.defaultScope !== b.Request)
            throw new Error("" + G);
          if (n2.autoBindInjectable === void 0)
            n2.autoBindInjectable = false;
          else if (typeof n2.autoBindInjectable !== "boolean")
            throw new Error("" + $);
          if (n2.skipBaseClassChecks === void 0)
            n2.skipBaseClassChecks = false;
          else if (typeof n2.skipBaseClassChecks !== "boolean")
            throw new Error("" + U);
          this.options = { autoBindInjectable: n2.autoBindInjectable, defaultScope: n2.defaultScope, skipBaseClassChecks: n2.skipBaseClassChecks }, this.id = S(), this._bindingDictionary = new Qt(), this._snapshots = [], this._middleware = null, this.parent = null, this._metadataReader = new z();
        }
        return t2.merge = function(n2, e2) {
          for (var r2 = [], i2 = 2; i2 < arguments.length; i2++)
            r2[i2 - 2] = arguments[i2];
          var o2 = new t2(), u2 = tn([n2, e2], r2).map(function(t3) {
            return xt(t3);
          }), a2 = xt(o2);
          function c2(t3, n3) {
            t3.traverse(function(t4, e3) {
              e3.forEach(function(t5) {
                n3.add(t5.serviceIdentifier, t5.clone());
              });
            });
          }
          return u2.forEach(function(t3) {
            c2(t3, a2);
          }), o2;
        }, t2.prototype.load = function() {
          for (var t3 = [], n2 = 0; n2 < arguments.length; n2++)
            t3[n2] = arguments[n2];
          for (var e2 = this._getContainerModuleHelpersFactory(), r2 = 0, i2 = t3; r2 < i2.length; r2++) {
            var o2 = i2[r2], u2 = e2(o2.id);
            o2.registry(u2.bindFunction, u2.unbindFunction, u2.isboundFunction, u2.rebindFunction);
          }
        }, t2.prototype.loadAsync = function() {
          for (var t3 = [], n2 = 0; n2 < arguments.length; n2++)
            t3[n2] = arguments[n2];
          return Xt(this, void 0, void 0, function() {
            var n3, e2, r2, i2, o2;
            return Zt(this, function(u2) {
              switch (u2.label) {
                case 0:
                  n3 = this._getContainerModuleHelpersFactory(), e2 = 0, r2 = t3, u2.label = 1;
                case 1:
                  return e2 < r2.length ? (i2 = r2[e2], o2 = n3(i2.id), [4, i2.registry(o2.bindFunction, o2.unbindFunction, o2.isboundFunction, o2.rebindFunction)]) : [3, 4];
                case 2:
                  u2.sent(), u2.label = 3;
                case 3:
                  return e2++, [3, 1];
                case 4:
                  return [2];
              }
            });
          });
        }, t2.prototype.unload = function() {
          for (var t3 = this, n2 = [], e2 = 0; e2 < arguments.length; e2++)
            n2[e2] = arguments[e2];
          var r2 = function(t4) {
            return function(n3) {
              return n3.moduleId === t4;
            };
          };
          n2.forEach(function(n3) {
            var e3 = r2(n3.id);
            t3._bindingDictionary.removeByCondition(e3);
          });
        }, t2.prototype.bind = function(t3) {
          var n2 = this.options.defaultScope || b.Transient, e2 = new A(t3, n2);
          return this._bindingDictionary.add(t3, e2), new zt(e2);
        }, t2.prototype.rebind = function(t3) {
          return this.unbind(t3), this.bind(t3);
        }, t2.prototype.unbind = function(t3) {
          try {
            this._bindingDictionary.remove(t3);
          } catch (n2) {
            throw new Error(E + " " + X(t3));
          }
        }, t2.prototype.unbindAll = function() {
          this._bindingDictionary = new Qt();
        }, t2.prototype.isBound = function(t3) {
          var n2 = this._bindingDictionary.hasKey(t3);
          return !n2 && this.parent && (n2 = this.parent.isBound(t3)), n2;
        }, t2.prototype.isBoundNamed = function(t3, n2) {
          return this.isBoundTagged(t3, i, n2);
        }, t2.prototype.isBoundTagged = function(t3, n2, e2) {
          var r2 = false;
          if (this._bindingDictionary.hasKey(t3)) {
            var i2 = this._bindingDictionary.get(t3), o2 = Ct(this, t3, n2, e2);
            r2 = i2.some(function(t4) {
              return t4.constraint(o2);
            });
          }
          return !r2 && this.parent && (r2 = this.parent.isBoundTagged(t3, n2, e2)), r2;
        }, t2.prototype.snapshot = function() {
          this._snapshots.push(Jt.of(this._bindingDictionary.clone(), this._middleware));
        }, t2.prototype.restore = function() {
          var t3 = this._snapshots.pop();
          if (t3 === void 0)
            throw new Error(q);
          this._bindingDictionary = t3.bindings, this._middleware = t3.middleware;
        }, t2.prototype.createChild = function(n2) {
          var e2 = new t2(n2 || this.options);
          return e2.parent = this, e2;
        }, t2.prototype.applyMiddleware = function() {
          for (var t3 = [], n2 = 0; n2 < arguments.length; n2++)
            t3[n2] = arguments[n2];
          this._appliedMiddleware = this._appliedMiddleware.concat(t3);
          var e2 = this._middleware ? this._middleware : this._planAndResolve();
          this._middleware = t3.reduce(function(t4, n3) {
            return n3(t4);
          }, e2);
        }, t2.prototype.applyCustomMetadataReader = function(t3) {
          this._metadataReader = t3;
        }, t2.prototype.get = function(t3) {
          return this._get(false, false, w.Variable, t3);
        }, t2.prototype.getTagged = function(t3, n2, e2) {
          return this._get(false, false, w.Variable, t3, n2, e2);
        }, t2.prototype.getNamed = function(t3, n2) {
          return this.getTagged(t3, i, n2);
        }, t2.prototype.getAll = function(t3) {
          return this._get(true, true, w.Variable, t3);
        }, t2.prototype.getAllTagged = function(t3, n2, e2) {
          return this._get(false, true, w.Variable, t3, n2, e2);
        }, t2.prototype.getAllNamed = function(t3, n2) {
          return this.getAllTagged(t3, i, n2);
        }, t2.prototype.resolve = function(t3) {
          var n2 = this.createChild();
          return n2.bind(t3).toSelf(), this._appliedMiddleware.forEach(function(t4) {
            n2.applyMiddleware(t4);
          }), n2.get(t3);
        }, t2.prototype._getContainerModuleHelpersFactory = function() {
          var t3 = this, n2 = function(t4, n3) {
            t4._binding.moduleId = n3;
          }, e2 = function(e3) {
            return function(r3) {
              var i3 = t3.bind.bind(t3), o3 = i3(r3);
              return n2(o3, e3), o3;
            };
          }, r2 = function(n3) {
            return function(n4) {
              var e3 = t3.unbind.bind(t3);
              e3(n4);
            };
          }, i2 = function(n3) {
            return function(n4) {
              var e3 = t3.isBound.bind(t3);
              return e3(n4);
            };
          }, o2 = function(e3) {
            return function(r3) {
              var i3 = t3.rebind.bind(t3), o3 = i3(r3);
              return n2(o3, e3), o3;
            };
          };
          return function(t4) {
            return { bindFunction: e2(t4), isboundFunction: i2(t4), rebindFunction: o2(t4), unbindFunction: r2(t4) };
          };
        }, t2.prototype._get = function(t3, n2, e2, r2, i2, o2) {
          var u2 = null, a2 = { avoidConstraints: t3, contextInterceptor: function(t4) {
            return t4;
          }, isMultiInject: n2, key: i2, serviceIdentifier: r2, targetType: e2, value: o2 };
          if (this._middleware) {
            if (u2 = this._middleware(a2), u2 === void 0 || u2 === null)
              throw new Error(F);
          } else
            u2 = this._planAndResolve()(a2);
          return u2;
        }, t2.prototype._planAndResolve = function() {
          var t3 = this;
          return function(n2) {
            var e2 = Rt(t3._metadataReader, t3, n2.isMultiInject, n2.targetType, n2.serviceIdentifier, n2.key, n2.value, n2.avoidConstraints);
            e2 = n2.contextInterceptor(e2);
            var r2 = Dt(e2);
            return r2;
          };
        }, t2;
      }(), en = function() {
        function t2(t3) {
          this.id = S(), this.registry = t3;
        }
        return t2;
      }();
      (function() {
        function t2(t3) {
          this.id = S(), this.registry = t3;
        }
      })();
      function rn() {
        return function(t2) {
          if (Reflect.hasOwnMetadata(p, t2))
            throw new Error(x);
          var n2 = Reflect.getMetadata(h, t2) || [];
          return Reflect.defineMetadata(p, n2, t2), t2;
        };
      }
      function on() {
        return function(t2, n2, e2) {
          var r2 = new ut(a, true);
          typeof e2 === "number" ? ct(t2, n2, e2, r2) : st(t2, n2, r2);
        };
      }
      function un(t2) {
        return function(n2, e2, r2) {
          var i2 = new ut(s, t2);
          typeof r2 === "number" ? ct(n2, e2, r2, i2) : st(n2, e2, i2);
        };
      }
    }, , function(t, n, e) {
      "use strict";
      function r(t2, n2) {
        if (!(t2 instanceof n2))
          throw new TypeError("Cannot call a class as a function");
      }
      e.d(n, "a", function() {
        return r;
      });
    }, function(t, n, e) {
      "use strict";
      function r(t2, n2) {
        for (var e2 = 0; e2 < n2.length; e2++) {
          var r2 = n2[e2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
        }
      }
      function i(t2, n2, e2) {
        return n2 && r(t2.prototype, n2), e2 && r(t2, e2), t2;
      }
      e.d(n, "a", function() {
        return i;
      });
    }, function(t, n, e) {
      "use strict";
      function r(t2) {
        return r = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
          return t3.__proto__ || Object.getPrototypeOf(t3);
        }, r(t2);
      }
      e.d(n, "a", function() {
        return r;
      });
    }, function(t, n, e) {
      "use strict";
      function r(t2) {
        return r = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(t3) {
          return typeof t3;
        } : function(t3) {
          return t3 && typeof Symbol === "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
        }, r(t2);
      }
      e.d(n, "a", function() {
        return r;
      });
    }, function(t, n, e) {
      "use strict";
      e.d(n, "a", function() {
        return i;
      });
      var r = e(16);
      function i(t2, n2) {
        if (typeof n2 !== "function" && n2 !== null)
          throw new TypeError("Super expression must either be null or a function");
        t2.prototype = Object.create(n2 && n2.prototype, { constructor: { value: t2, writable: true, configurable: true } }), n2 && Object(r["a"])(t2, n2);
      }
    }, function(t, n, e) {
      "use strict";
      e.d(n, "a", function() {
        return s;
      });
      var r = e(5), i = e(24), o = e(10), u = e.n(o), a = e(12);
      function c(t2, n2) {
        if (n2 && (u()(n2) === "object" || typeof n2 === "function"))
          return n2;
        if (n2 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return Object(a["a"])(t2);
      }
      function s(t2) {
        var n2 = Object(i["a"])();
        return function() {
          var e2, i2 = Object(r["a"])(t2);
          if (n2) {
            var o2 = Object(r["a"])(this).constructor;
            e2 = Reflect.construct(i2, arguments, o2);
          } else
            e2 = i2.apply(this, arguments);
          return c(this, e2);
        };
      }
    }, function(t, n, e) {
      "use strict";
      e.d(n, "a", function() {
        return i;
      });
      var r = e(22);
      function i(t2, n2, e2) {
        return i = typeof Reflect !== "undefined" && Reflect.get ? Reflect.get : function(t3, n3, e3) {
          var i2 = Object(r["a"])(t3, n3);
          if (i2) {
            var o = Object.getOwnPropertyDescriptor(i2, n3);
            return o.get ? o.get.call(e3) : o.value;
          }
        }, i(t2, n2, e2 || t2);
      }
    }, function(t, n) {
      function e(n2) {
        return typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? (t.exports = e = function(t2) {
          return typeof t2;
        }, t.exports["default"] = t.exports, t.exports.__esModule = true) : (t.exports = e = function(t2) {
          return t2 && typeof Symbol === "function" && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
        }, t.exports["default"] = t.exports, t.exports.__esModule = true), e(n2);
      }
      t.exports = e, t.exports["default"] = t.exports, t.exports.__esModule = true;
    }, function(t, n, e) {
      "use strict";
      e.d(n, "a", function() {
        return c;
      });
      var r = e(18);
      function i(t2) {
        if (Array.isArray(t2))
          return Object(r["a"])(t2);
      }
      var o = e(23), u = e(15);
      function a() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function c(t2) {
        return i(t2) || Object(o["a"])(t2) || Object(u["a"])(t2) || a();
      }
    }, function(t, n, e) {
      "use strict";
      function r(t2) {
        if (t2 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t2;
      }
      e.d(n, "a", function() {
        return r;
      });
    }, function(t, n, e) {
      "use strict";
      function r(t2, n2, e2) {
        return n2 in t2 ? Object.defineProperty(t2, n2, { value: e2, enumerable: true, configurable: true, writable: true }) : t2[n2] = e2, t2;
      }
      e.d(n, "a", function() {
        return r;
      });
    }, function(t, n, e) {
      "use strict";
      t.exports = e(56);
    }, function(t, n, e) {
      "use strict";
      e.d(n, "a", function() {
        return i;
      });
      var r = e(18);
      function i(t2, n2) {
        if (t2) {
          if (typeof t2 === "string")
            return Object(r["a"])(t2, n2);
          var e2 = Object.prototype.toString.call(t2).slice(8, -1);
          return e2 === "Object" && t2.constructor && (e2 = t2.constructor.name), e2 === "Map" || e2 === "Set" ? Array.from(t2) : e2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e2) ? Object(r["a"])(t2, n2) : void 0;
        }
      }
    }, function(t, n, e) {
      "use strict";
      function r(t2, n2) {
        return r = Object.setPrototypeOf || function(t3, n3) {
          return t3.__proto__ = n3, t3;
        }, r(t2, n2);
      }
      e.d(n, "a", function() {
        return r;
      });
    }, , function(t, n, e) {
      "use strict";
      function r(t2, n2) {
        (n2 == null || n2 > t2.length) && (n2 = t2.length);
        for (var e2 = 0, r2 = new Array(n2); e2 < n2; e2++)
          r2[e2] = t2[e2];
        return r2;
      }
      e.d(n, "a", function() {
        return r;
      });
    }, , function(t, n, e) {
      "use strict";
      function r(t2) {
        if (Array.isArray(t2))
          return t2;
      }
      e.d(n, "a", function() {
        return r;
      });
    }, function(t, n, e) {
      "use strict";
      function r() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      e.d(n, "a", function() {
        return r;
      });
    }, function(t, n, e) {
      "use strict";
      e.d(n, "a", function() {
        return i;
      });
      var r = e(5);
      function i(t2, n2) {
        while (!Object.prototype.hasOwnProperty.call(t2, n2))
          if (t2 = Object(r["a"])(t2), t2 === null)
            break;
        return t2;
      }
    }, function(t, n, e) {
      "use strict";
      function r(t2) {
        if (typeof Symbol !== "undefined" && t2[Symbol.iterator] != null || t2["@@iterator"] != null)
          return Array.from(t2);
      }
      e.d(n, "a", function() {
        return r;
      });
    }, function(t, n, e) {
      "use strict";
      function r() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (t2) {
          return false;
        }
      }
      e.d(n, "a", function() {
        return r;
      });
    }, function(t, n, e) {
      "use strict";
      var r = Object.getOwnPropertySymbols, i = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
      function u(t2) {
        if (t2 === null || t2 === void 0)
          throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t2);
      }
      function a() {
        try {
          if (!Object.assign)
            return false;
          var t2 = new String("abc");
          if (t2[5] = "de", Object.getOwnPropertyNames(t2)[0] === "5")
            return false;
          for (var n2 = {}, e2 = 0; e2 < 10; e2++)
            n2["_" + String.fromCharCode(e2)] = e2;
          var r2 = Object.getOwnPropertyNames(n2).map(function(t3) {
            return n2[t3];
          });
          if (r2.join("") !== "0123456789")
            return false;
          var i2 = {};
          return "abcdefghijklmnopqrst".split("").forEach(function(t3) {
            i2[t3] = t3;
          }), Object.keys(Object.assign({}, i2)).join("") === "abcdefghijklmnopqrst";
        } catch (t3) {
          return false;
        }
      }
      t.exports = a() ? Object.assign : function(t2, n2) {
        for (var e2, a2, c = u(t2), s = 1; s < arguments.length; s++) {
          for (var f in e2 = Object(arguments[s]), e2)
            i.call(e2, f) && (c[f] = e2[f]);
          if (r) {
            a2 = r(e2);
            for (var l = 0; l < a2.length; l++)
              o.call(e2, a2[l]) && (c[a2[l]] = e2[a2[l]]);
          }
        }
        return c;
      };
    }, , , function(t, n, e) {
      t.exports = e(53);
    }, , , function(t, n, e) {
      "use strict";
      e.d(n, "a", function() {
        return a;
      });
      var r = e(20);
      function i(t2, n2) {
        var e2 = t2 == null ? null : typeof Symbol !== "undefined" && t2[Symbol.iterator] || t2["@@iterator"];
        if (e2 != null) {
          var r2, i2, o2 = [], u2 = true, a2 = false;
          try {
            for (e2 = e2.call(t2); !(u2 = (r2 = e2.next()).done); u2 = true)
              if (o2.push(r2.value), n2 && o2.length === n2)
                break;
          } catch (t3) {
            a2 = true, i2 = t3;
          } finally {
            try {
              u2 || e2["return"] == null || e2["return"]();
            } finally {
              if (a2)
                throw i2;
            }
          }
          return o2;
        }
      }
      var o = e(15), u = e(21);
      function a(t2, n2) {
        return Object(r["a"])(t2) || i(t2, n2) || Object(o["a"])(t2, n2) || Object(u["a"])();
      }
    }, function(t, n) {
      function e(t2, n2) {
        (n2 == null || n2 > t2.length) && (n2 = t2.length);
        for (var e2 = 0, r = new Array(n2); e2 < n2; e2++)
          r[e2] = t2[e2];
        return r;
      }
      t.exports = e, t.exports["default"] = t.exports, t.exports.__esModule = true;
    }, function(t, n, e) {
      (function(n2) {
        var e2;
        e2 = function() {
          return this;
        }();
        try {
          e2 = e2 || new Function("return this")();
        } catch (t2) {
          typeof n2 === "object" && (e2 = n2);
        }
        t.exports = e2;
      }).call(this, e(2)["window"]);
    }, function(t, n) {
      t.exports = function(t2) {
        return t2.webpackPolyfill || (t2.deprecate = function() {
        }, t2.paths = [], t2.children || (t2.children = []), Object.defineProperty(t2, "loaded", { enumerable: true, get: function() {
          return t2.l;
        } }), Object.defineProperty(t2, "id", { enumerable: true, get: function() {
          return t2.i;
        } }), t2.webpackPolyfill = 1), t2;
      };
    }, function(t, n, e) {
      "use strict";
      function r(t2, n2, e2, r2, i2, o, u) {
        try {
          var a = t2[o](u), c = a.value;
        } catch (t3) {
          return void e2(t3);
        }
        a.done ? n2(c) : Promise.resolve(c).then(r2, i2);
      }
      function i(t2) {
        return function() {
          var n2 = this, e2 = arguments;
          return new Promise(function(i2, o) {
            var u = t2.apply(n2, e2);
            function a(t3) {
              r(u, i2, o, a, c, "next", t3);
            }
            function c(t3) {
              r(u, i2, o, a, c, "throw", t3);
            }
            a(void 0);
          });
        };
      }
      e.d(n, "a", function() {
        return i;
      });
    }, function(t, n, e) {
      "use strict";
      e.d(n, "a", function() {
        return u;
      });
      var r = e(22), i = e(13);
      function o(t2, n2, e2, u2) {
        return o = typeof Reflect !== "undefined" && Reflect.set ? Reflect.set : function(t3, n3, e3, o2) {
          var u3, a = Object(r["a"])(t3, n3);
          if (a) {
            if (u3 = Object.getOwnPropertyDescriptor(a, n3), u3.set)
              return u3.set.call(o2, e3), true;
            if (!u3.writable)
              return false;
          }
          if (u3 = Object.getOwnPropertyDescriptor(o2, n3), u3) {
            if (!u3.writable)
              return false;
            u3.value = e3, Object.defineProperty(o2, n3, u3);
          } else
            Object(i["a"])(o2, n3, e3);
          return true;
        }, o(t2, n2, e2, u2);
      }
      function u(t2, n2, e2, r2, i2) {
        var u2 = o(t2, n2, e2, r2 || t2);
        if (!u2 && i2)
          throw new Error("failed to set property");
        return e2;
      }
    }, function(t, n, e) {
      "use strict";
      e.d(n, "a", function() {
        return a;
      });
      var r = e(20), i = e(23), o = e(15), u = e(21);
      function a(t2) {
        return Object(r["a"])(t2) || Object(i["a"])(t2) || Object(o["a"])(t2) || Object(u["a"])();
      }
    }, , , , , , function(t, n, e) {
      "use strict";
      e.d(n, "a", function() {
        return c;
      });
      var r = e(5), i = e(16);
      function o(t2) {
        return Function.toString.call(t2).indexOf("[native code]") !== -1;
      }
      var u = e(24);
      function a(t2, n2, e2) {
        return a = Object(u["a"])() ? Reflect.construct : function(t3, n3, e3) {
          var r2 = [null];
          r2.push.apply(r2, n3);
          var o2 = Function.bind.apply(t3, r2), u2 = new o2();
          return e3 && Object(i["a"])(u2, e3.prototype), u2;
        }, a.apply(null, arguments);
      }
      function c(t2) {
        var n2 = typeof Map === "function" ? new Map() : void 0;
        return c = function(t3) {
          if (t3 === null || !o(t3))
            return t3;
          if (typeof t3 !== "function")
            throw new TypeError("Super expression must either be null or a function");
          if (typeof n2 !== "undefined") {
            if (n2.has(t3))
              return n2.get(t3);
            n2.set(t3, e2);
          }
          function e2() {
            return a(t3, arguments, Object(r["a"])(this).constructor);
          }
          return e2.prototype = Object.create(t3.prototype, { constructor: { value: e2, enumerable: false, writable: true, configurable: true } }), Object(i["a"])(e2, t3);
        }, c(t2);
      }
    }, , , , function(t, n, e) {
      var r = e(48), i = e(49), o = e(50), u = e(51);
      function a(t2) {
        return r(t2) || i(t2) || o(t2) || u();
      }
      t.exports = a, t.exports["default"] = t.exports, t.exports.__esModule = true;
    }, function(t, n, e) {
      var r = e(32);
      function i(t2) {
        if (Array.isArray(t2))
          return r(t2);
      }
      t.exports = i, t.exports["default"] = t.exports, t.exports.__esModule = true;
    }, function(t, n) {
      function e(t2) {
        if (typeof Symbol !== "undefined" && t2[Symbol.iterator] != null || t2["@@iterator"] != null)
          return Array.from(t2);
      }
      t.exports = e, t.exports["default"] = t.exports, t.exports.__esModule = true;
    }, function(t, n, e) {
      var r = e(32);
      function i(t2, n2) {
        if (t2) {
          if (typeof t2 === "string")
            return r(t2, n2);
          var e2 = Object.prototype.toString.call(t2).slice(8, -1);
          return e2 === "Object" && t2.constructor && (e2 = t2.constructor.name), e2 === "Map" || e2 === "Set" ? Array.from(t2) : e2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e2) ? r(t2, n2) : void 0;
        }
      }
      t.exports = i, t.exports["default"] = t.exports, t.exports.__esModule = true;
    }, function(t, n) {
      function e() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      t.exports = e, t.exports["default"] = t.exports, t.exports.__esModule = true;
    }, function(t, n) {
      var e, r, i = t.exports = {};
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function u() {
        throw new Error("clearTimeout has not been defined");
      }
      function a(t2) {
        if (e === setTimeout)
          return setTimeout(t2, 0);
        if ((e === o || !e) && setTimeout)
          return e = setTimeout, setTimeout(t2, 0);
        try {
          return e(t2, 0);
        } catch (n2) {
          try {
            return e.call(null, t2, 0);
          } catch (n3) {
            return e.call(this, t2, 0);
          }
        }
      }
      function c(t2) {
        if (r === clearTimeout)
          return clearTimeout(t2);
        if ((r === u || !r) && clearTimeout)
          return r = clearTimeout, clearTimeout(t2);
        try {
          return r(t2);
        } catch (n2) {
          try {
            return r.call(null, t2);
          } catch (n3) {
            return r.call(this, t2);
          }
        }
      }
      (function() {
        try {
          e = typeof setTimeout === "function" ? setTimeout : o;
        } catch (t2) {
          e = o;
        }
        try {
          r = typeof clearTimeout === "function" ? clearTimeout : u;
        } catch (t2) {
          r = u;
        }
      })();
      var s, f = [], l = false, p = -1;
      function h() {
        l && s && (l = false, s.length ? f = s.concat(f) : p = -1, f.length && d());
      }
      function d() {
        if (!l) {
          var t2 = a(h);
          l = true;
          var n2 = f.length;
          while (n2) {
            s = f, f = [];
            while (++p < n2)
              s && s[p].run();
            p = -1, n2 = f.length;
          }
          s = null, l = false, c(t2);
        }
      }
      function y(t2, n2) {
        this.fun = t2, this.array = n2;
      }
      function g() {
      }
      i.nextTick = function(t2) {
        var n2 = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var e2 = 1; e2 < arguments.length; e2++)
            n2[e2 - 1] = arguments[e2];
        f.push(new y(t2, n2)), f.length !== 1 || l || a(d);
      }, y.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, i.title = "browser", i.browser = true, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = g, i.addListener = g, i.once = g, i.off = g, i.removeListener = g, i.removeAllListeners = g, i.emit = g, i.prependListener = g, i.prependOnceListener = g, i.listeners = function(t2) {
        return [];
      }, i.binding = function(t2) {
        throw new Error("process.binding is not supported");
      }, i.cwd = function() {
        return "/";
      }, i.chdir = function(t2) {
        throw new Error("process.chdir is not supported");
      }, i.umask = function() {
        return 0;
      };
    }, function(t, n, e) {
      var r = function() {
        return this;
      }() || Function("return this")(), i = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0, o = i && r.regeneratorRuntime;
      if (r.regeneratorRuntime = void 0, t.exports = e(54), i)
        r.regeneratorRuntime = o;
      else
        try {
          delete r.regeneratorRuntime;
        } catch (t2) {
          r.regeneratorRuntime = void 0;
        }
    }, function(t, n, e) {
      (function(t2) {
        var n2 = e(10);
        !function(e2) {
          "use strict";
          var r, i = Object.prototype, o = i.hasOwnProperty, u = typeof Symbol === "function" ? Symbol : {}, a = u.iterator || "@@iterator", c = u.asyncIterator || "@@asyncIterator", s = u.toStringTag || "@@toStringTag", f = n2(t2) === "object", l = e2.regeneratorRuntime;
          if (l)
            f && (t2.exports = l);
          else {
            l = e2.regeneratorRuntime = f ? t2.exports : {}, l.wrap = _;
            var p = "suspendedStart", h = "suspendedYield", d = "executing", y = "completed", g = {}, v = {};
            v[a] = function() {
              return this;
            };
            var b = Object.getPrototypeOf, m = b && b(b(k([])));
            m && m !== i && o.call(m, a) && (v = m);
            var w = T.prototype = A.prototype = Object.create(v);
            x.prototype = w.constructor = T, T.constructor = x, T[s] = x.displayName = "GeneratorFunction", l.isGeneratorFunction = function(t3) {
              var n3 = typeof t3 === "function" && t3.constructor;
              return !!n3 && (n3 === x || (n3.displayName || n3.name) === "GeneratorFunction");
            }, l.mark = function(t3) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(t3, T) : (t3.__proto__ = T, s in t3 || (t3[s] = "GeneratorFunction")), t3.prototype = Object.create(w), t3;
            }, l.awrap = function(t3) {
              return { __await: t3 };
            }, j(O.prototype), O.prototype[c] = function() {
              return this;
            }, l.AsyncIterator = O, l.async = function(t3, n3, e3, r2) {
              var i2 = new O(_(t3, n3, e3, r2));
              return l.isGeneratorFunction(n3) ? i2 : i2.next().then(function(t4) {
                return t4.done ? t4.value : i2.next();
              });
            }, j(w), w[s] = "Generator", w[a] = function() {
              return this;
            }, w.toString = function() {
              return "[object Generator]";
            }, l.keys = function(t3) {
              var n3 = [];
              for (var e3 in t3)
                n3.push(e3);
              return n3.reverse(), function e4() {
                while (n3.length) {
                  var r2 = n3.pop();
                  if (r2 in t3)
                    return e4.value = r2, e4.done = false, e4;
                }
                return e4.done = true, e4;
              };
            }, l.values = k, N.prototype = { constructor: N, reset: function(t3) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = false, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(C), !t3)
                for (var n3 in this)
                  n3.charAt(0) === "t" && o.call(this, n3) && !isNaN(+n3.slice(1)) && (this[n3] = r);
            }, stop: function() {
              this.done = true;
              var t3 = this.tryEntries[0], n3 = t3.completion;
              if (n3.type === "throw")
                throw n3.arg;
              return this.rval;
            }, dispatchException: function(t3) {
              if (this.done)
                throw t3;
              var n3 = this;
              function e3(e4, i3) {
                return a2.type = "throw", a2.arg = t3, n3.next = e4, i3 && (n3.method = "next", n3.arg = r), !!i3;
              }
              for (var i2 = this.tryEntries.length - 1; i2 >= 0; --i2) {
                var u2 = this.tryEntries[i2], a2 = u2.completion;
                if (u2.tryLoc === "root")
                  return e3("end");
                if (u2.tryLoc <= this.prev) {
                  var c2 = o.call(u2, "catchLoc"), s2 = o.call(u2, "finallyLoc");
                  if (c2 && s2) {
                    if (this.prev < u2.catchLoc)
                      return e3(u2.catchLoc, true);
                    if (this.prev < u2.finallyLoc)
                      return e3(u2.finallyLoc);
                  } else if (c2) {
                    if (this.prev < u2.catchLoc)
                      return e3(u2.catchLoc, true);
                  } else {
                    if (!s2)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < u2.finallyLoc)
                      return e3(u2.finallyLoc);
                  }
                }
              }
            }, abrupt: function(t3, n3) {
              for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
                var r2 = this.tryEntries[e3];
                if (r2.tryLoc <= this.prev && o.call(r2, "finallyLoc") && this.prev < r2.finallyLoc) {
                  var i2 = r2;
                  break;
                }
              }
              i2 && (t3 === "break" || t3 === "continue") && i2.tryLoc <= n3 && n3 <= i2.finallyLoc && (i2 = null);
              var u2 = i2 ? i2.completion : {};
              return u2.type = t3, u2.arg = n3, i2 ? (this.method = "next", this.next = i2.finallyLoc, g) : this.complete(u2);
            }, complete: function(t3, n3) {
              if (t3.type === "throw")
                throw t3.arg;
              return t3.type === "break" || t3.type === "continue" ? this.next = t3.arg : t3.type === "return" ? (this.rval = this.arg = t3.arg, this.method = "return", this.next = "end") : t3.type === "normal" && n3 && (this.next = n3), g;
            }, finish: function(t3) {
              for (var n3 = this.tryEntries.length - 1; n3 >= 0; --n3) {
                var e3 = this.tryEntries[n3];
                if (e3.finallyLoc === t3)
                  return this.complete(e3.completion, e3.afterLoc), C(e3), g;
              }
            }, catch: function(t3) {
              for (var n3 = this.tryEntries.length - 1; n3 >= 0; --n3) {
                var e3 = this.tryEntries[n3];
                if (e3.tryLoc === t3) {
                  var r2 = e3.completion;
                  if (r2.type === "throw") {
                    var i2 = r2.arg;
                    C(e3);
                  }
                  return i2;
                }
              }
              throw new Error("illegal catch attempt");
            }, delegateYield: function(t3, n3, e3) {
              return this.delegate = { iterator: k(t3), resultName: n3, nextLoc: e3 }, this.method === "next" && (this.arg = r), g;
            } };
          }
          function _(t3, n3, e3, r2) {
            var i2 = n3 && n3.prototype instanceof A ? n3 : A, o2 = Object.create(i2.prototype), u2 = new N(r2 || []);
            return o2._invoke = I(t3, e3, u2), o2;
          }
          function S(t3, n3, e3) {
            try {
              return { type: "normal", arg: t3.call(n3, e3) };
            } catch (t4) {
              return { type: "throw", arg: t4 };
            }
          }
          function A() {
          }
          function x() {
          }
          function T() {
          }
          function j(t3) {
            ["next", "throw", "return"].forEach(function(n3) {
              t3[n3] = function(t4) {
                return this._invoke(n3, t4);
              };
            });
          }
          function O(t3) {
            function e3(r3, i3, u2, a2) {
              var c2 = S(t3[r3], t3, i3);
              if (c2.type !== "throw") {
                var s2 = c2.arg, f2 = s2.value;
                return f2 && n2(f2) === "object" && o.call(f2, "__await") ? Promise.resolve(f2.__await).then(function(t4) {
                  e3("next", t4, u2, a2);
                }, function(t4) {
                  e3("throw", t4, u2, a2);
                }) : Promise.resolve(f2).then(function(t4) {
                  s2.value = t4, u2(s2);
                }, a2);
              }
              a2(c2.arg);
            }
            var r2;
            function i2(t4, n3) {
              function i3() {
                return new Promise(function(r3, i4) {
                  e3(t4, n3, r3, i4);
                });
              }
              return r2 = r2 ? r2.then(i3, i3) : i3();
            }
            this._invoke = i2;
          }
          function I(t3, n3, e3) {
            var r2 = p;
            return function(i2, o2) {
              if (r2 === d)
                throw new Error("Generator is already running");
              if (r2 === y) {
                if (i2 === "throw")
                  throw o2;
                return M();
              }
              e3.method = i2, e3.arg = o2;
              while (1) {
                var u2 = e3.delegate;
                if (u2) {
                  var a2 = E(u2, e3);
                  if (a2) {
                    if (a2 === g)
                      continue;
                    return a2;
                  }
                }
                if (e3.method === "next")
                  e3.sent = e3._sent = e3.arg;
                else if (e3.method === "throw") {
                  if (r2 === p)
                    throw r2 = y, e3.arg;
                  e3.dispatchException(e3.arg);
                } else
                  e3.method === "return" && e3.abrupt("return", e3.arg);
                r2 = d;
                var c2 = S(t3, n3, e3);
                if (c2.type === "normal") {
                  if (r2 = e3.done ? y : h, c2.arg === g)
                    continue;
                  return { value: c2.arg, done: e3.done };
                }
                c2.type === "throw" && (r2 = y, e3.method = "throw", e3.arg = c2.arg);
              }
            };
          }
          function E(t3, n3) {
            var e3 = t3.iterator[n3.method];
            if (e3 === r) {
              if (n3.delegate = null, n3.method === "throw") {
                if (t3.iterator.return && (n3.method = "return", n3.arg = r, E(t3, n3), n3.method === "throw"))
                  return g;
                n3.method = "throw", n3.arg = new TypeError("The iterator does not provide a 'throw' method");
              }
              return g;
            }
            var i2 = S(e3, t3.iterator, n3.arg);
            if (i2.type === "throw")
              return n3.method = "throw", n3.arg = i2.arg, n3.delegate = null, g;
            var o2 = i2.arg;
            return o2 ? o2.done ? (n3[t3.resultName] = o2.value, n3.next = t3.nextLoc, n3.method !== "return" && (n3.method = "next", n3.arg = r), n3.delegate = null, g) : o2 : (n3.method = "throw", n3.arg = new TypeError("iterator result is not an object"), n3.delegate = null, g);
          }
          function R(t3) {
            var n3 = { tryLoc: t3[0] };
            1 in t3 && (n3.catchLoc = t3[1]), 2 in t3 && (n3.finallyLoc = t3[2], n3.afterLoc = t3[3]), this.tryEntries.push(n3);
          }
          function C(t3) {
            var n3 = t3.completion || {};
            n3.type = "normal", delete n3.arg, t3.completion = n3;
          }
          function N(t3) {
            this.tryEntries = [{ tryLoc: "root" }], t3.forEach(R, this), this.reset(true);
          }
          function k(t3) {
            if (t3) {
              var n3 = t3[a];
              if (n3)
                return n3.call(t3);
              if (typeof t3.next === "function")
                return t3;
              if (!isNaN(t3.length)) {
                var e3 = -1, i2 = function n4() {
                  while (++e3 < t3.length)
                    if (o.call(t3, e3))
                      return n4.value = t3[e3], n4.done = false, n4;
                  return n4.value = r, n4.done = true, n4;
                };
                return i2.next = i2;
              }
            }
            return { next: M };
          }
          function M() {
            return { value: r, done: true };
          }
        }(function() {
          return this;
        }() || Function("return this")());
      }).call(this, e(34)(t));
    }, , function(t, n, e) {
      "use strict";
      var r = e(10), i = e(25), o = 60103, u = 60106;
      n.Fragment = 60107, n.StrictMode = 60108, n.Profiler = 60114;
      var a = 60109, c = 60110, s = 60112;
      n.Suspense = 60113;
      var f = 60115, l = 60116;
      if (typeof Symbol === "function" && Symbol.for) {
        var p = Symbol.for;
        o = p("react.element"), u = p("react.portal"), n.Fragment = p("react.fragment"), n.StrictMode = p("react.strict_mode"), n.Profiler = p("react.profiler"), a = p("react.provider"), c = p("react.context"), s = p("react.forward_ref"), n.Suspense = p("react.suspense"), f = p("react.memo"), l = p("react.lazy");
      }
      var h = typeof Symbol === "function" && Symbol.iterator;
      function d(t2) {
        return t2 === null || r(t2) !== "object" ? null : (t2 = h && t2[h] || t2["@@iterator"], typeof t2 === "function" ? t2 : null);
      }
      function y(t2) {
        for (var n2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + t2, e2 = 1; e2 < arguments.length; e2++)
          n2 += "&args[]=" + encodeURIComponent(arguments[e2]);
        return "Minified React error #" + t2 + "; visit " + n2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var g = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } }, v = {};
      function b(t2, n2, e2) {
        this.props = t2, this.context = n2, this.refs = v, this.updater = e2 || g;
      }
      function m() {
      }
      function w(t2, n2, e2) {
        this.props = t2, this.context = n2, this.refs = v, this.updater = e2 || g;
      }
      b.prototype.isReactComponent = {}, b.prototype.setState = function(t2, n2) {
        if (r(t2) !== "object" && typeof t2 !== "function" && t2 != null)
          throw Error(y(85));
        this.updater.enqueueSetState(this, t2, n2, "setState");
      }, b.prototype.forceUpdate = function(t2) {
        this.updater.enqueueForceUpdate(this, t2, "forceUpdate");
      }, m.prototype = b.prototype;
      var _ = w.prototype = new m();
      _.constructor = w, i(_, b.prototype), _.isPureReactComponent = true;
      var S = { current: null }, A = Object.prototype.hasOwnProperty, x = { key: true, ref: true, __self: true, __source: true };
      function T(t2, n2, e2) {
        var r2, i2 = {}, u2 = null, a2 = null;
        if (n2 != null)
          for (r2 in n2.ref !== void 0 && (a2 = n2.ref), n2.key !== void 0 && (u2 = "" + n2.key), n2)
            A.call(n2, r2) && !x.hasOwnProperty(r2) && (i2[r2] = n2[r2]);
        var c2 = arguments.length - 2;
        if (c2 === 1)
          i2.children = e2;
        else if (1 < c2) {
          for (var s2 = Array(c2), f2 = 0; f2 < c2; f2++)
            s2[f2] = arguments[f2 + 2];
          i2.children = s2;
        }
        if (t2 && t2.defaultProps)
          for (r2 in c2 = t2.defaultProps, c2)
            i2[r2] === void 0 && (i2[r2] = c2[r2]);
        return { $$typeof: o, type: t2, key: u2, ref: a2, props: i2, _owner: S.current };
      }
      function j(t2, n2) {
        return { $$typeof: o, type: t2.type, key: n2, ref: t2.ref, props: t2.props, _owner: t2._owner };
      }
      function O(t2) {
        return r(t2) === "object" && t2 !== null && t2.$$typeof === o;
      }
      function I(t2) {
        var n2 = { "=": "=0", ":": "=2" };
        return "$" + t2.replace(/[=:]/g, function(t3) {
          return n2[t3];
        });
      }
      var E = /\/+/g;
      function R(t2, n2) {
        return r(t2) === "object" && t2 !== null && t2.key != null ? I("" + t2.key) : n2.toString(36);
      }
      function C(t2, n2, e2, i2, a2) {
        var c2 = r(t2);
        c2 !== "undefined" && c2 !== "boolean" || (t2 = null);
        var s2 = false;
        if (t2 === null)
          s2 = true;
        else
          switch (c2) {
            case "string":
            case "number":
              s2 = true;
              break;
            case "object":
              switch (t2.$$typeof) {
                case o:
                case u:
                  s2 = true;
              }
          }
        if (s2)
          return s2 = t2, a2 = a2(s2), t2 = i2 === "" ? "." + R(s2, 0) : i2, Array.isArray(a2) ? (e2 = "", t2 != null && (e2 = t2.replace(E, "$&/") + "/"), C(a2, n2, e2, "", function(t3) {
            return t3;
          })) : a2 != null && (O(a2) && (a2 = j(a2, e2 + (!a2.key || s2 && s2.key === a2.key ? "" : ("" + a2.key).replace(E, "$&/") + "/") + t2)), n2.push(a2)), 1;
        if (s2 = 0, i2 = i2 === "" ? "." : i2 + ":", Array.isArray(t2))
          for (var f2 = 0; f2 < t2.length; f2++) {
            c2 = t2[f2];
            var l2 = i2 + R(c2, f2);
            s2 += C(c2, n2, e2, l2, a2);
          }
        else if (l2 = d(t2), typeof l2 === "function")
          for (t2 = l2.call(t2), f2 = 0; !(c2 = t2.next()).done; )
            c2 = c2.value, l2 = i2 + R(c2, f2++), s2 += C(c2, n2, e2, l2, a2);
        else if (c2 === "object")
          throw n2 = "" + t2, Error(y(31, n2 === "[object Object]" ? "object with keys {" + Object.keys(t2).join(", ") + "}" : n2));
        return s2;
      }
      function N(t2, n2, e2) {
        if (t2 == null)
          return t2;
        var r2 = [], i2 = 0;
        return C(t2, r2, "", "", function(t3) {
          return n2.call(e2, t3, i2++);
        }), r2;
      }
      function k(t2) {
        if (t2._status === -1) {
          var n2 = t2._result;
          n2 = n2(), t2._status = 0, t2._result = n2, n2.then(function(n3) {
            t2._status === 0 && (n3 = n3.default, t2._status = 1, t2._result = n3);
          }, function(n3) {
            t2._status === 0 && (t2._status = 2, t2._result = n3);
          });
        }
        if (t2._status === 1)
          return t2._result;
        throw t2._result;
      }
      var M = { current: null };
      function P() {
        var t2 = M.current;
        if (t2 === null)
          throw Error(y(321));
        return t2;
      }
      var q = { ReactCurrentDispatcher: M, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: S, IsSomeRendererActing: { current: false }, assign: i };
      n.Children = { map: N, forEach: function(t2, n2, e2) {
        N(t2, function() {
          n2.apply(this, arguments);
        }, e2);
      }, count: function(t2) {
        var n2 = 0;
        return N(t2, function() {
          n2++;
        }), n2;
      }, toArray: function(t2) {
        return N(t2, function(t3) {
          return t3;
        }) || [];
      }, only: function(t2) {
        if (!O(t2))
          throw Error(y(143));
        return t2;
      } }, n.Component = b, n.PureComponent = w, n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q, n.cloneElement = function(t2, n2, e2) {
        if (t2 === null || t2 === void 0)
          throw Error(y(267, t2));
        var r2 = i({}, t2.props), u2 = t2.key, a2 = t2.ref, c2 = t2._owner;
        if (n2 != null) {
          if (n2.ref !== void 0 && (a2 = n2.ref, c2 = S.current), n2.key !== void 0 && (u2 = "" + n2.key), t2.type && t2.type.defaultProps)
            var s2 = t2.type.defaultProps;
          for (f2 in n2)
            A.call(n2, f2) && !x.hasOwnProperty(f2) && (r2[f2] = n2[f2] === void 0 && s2 !== void 0 ? s2[f2] : n2[f2]);
        }
        var f2 = arguments.length - 2;
        if (f2 === 1)
          r2.children = e2;
        else if (1 < f2) {
          s2 = Array(f2);
          for (var l2 = 0; l2 < f2; l2++)
            s2[l2] = arguments[l2 + 2];
          r2.children = s2;
        }
        return { $$typeof: o, type: t2.type, key: u2, ref: a2, props: r2, _owner: c2 };
      }, n.createContext = function(t2, n2) {
        return n2 === void 0 && (n2 = null), t2 = { $$typeof: c, _calculateChangedBits: n2, _currentValue: t2, _currentValue2: t2, _threadCount: 0, Provider: null, Consumer: null }, t2.Provider = { $$typeof: a, _context: t2 }, t2.Consumer = t2;
      }, n.createElement = T, n.createFactory = function(t2) {
        var n2 = T.bind(null, t2);
        return n2.type = t2, n2;
      }, n.createRef = function() {
        return { current: null };
      }, n.forwardRef = function(t2) {
        return { $$typeof: s, render: t2 };
      }, n.isValidElement = O, n.lazy = function(t2) {
        return { $$typeof: l, _payload: { _status: -1, _result: t2 }, _init: k };
      }, n.memo = function(t2, n2) {
        return { $$typeof: f, type: t2, compare: n2 === void 0 ? null : n2 };
      }, n.useCallback = function(t2, n2) {
        return P().useCallback(t2, n2);
      }, n.useContext = function(t2, n2) {
        return P().useContext(t2, n2);
      }, n.useDebugValue = function() {
      }, n.useEffect = function(t2, n2) {
        return P().useEffect(t2, n2);
      }, n.useImperativeHandle = function(t2, n2, e2) {
        return P().useImperativeHandle(t2, n2, e2);
      }, n.useLayoutEffect = function(t2, n2) {
        return P().useLayoutEffect(t2, n2);
      }, n.useMemo = function(t2, n2) {
        return P().useMemo(t2, n2);
      }, n.useReducer = function(t2, n2, e2) {
        return P().useReducer(t2, n2, e2);
      }, n.useRef = function(t2) {
        return P().useRef(t2);
      }, n.useState = function(t2) {
        return P().useState(t2);
      }, n.version = "17.0.2";
    }]]);
  }
});

// taro/dist/taro.js
var require_taro = __commonJS({
  "taro/dist/taro.js"() {
    (wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[1], { 0: function(e, t, n) {
      "use strict";
      var r = n(47), i = n(10);
      function o(e2) {
        return typeof e2 === "string";
      }
      function a(e2) {
        return typeof e2 === "undefined";
      }
      function c(e2) {
        return e2 === null;
      }
      function u(e2) {
        return e2 !== null && i(e2) === "object";
      }
      function s(e2) {
        return e2 === true || e2 === false;
      }
      function l(e2) {
        return typeof e2 === "function";
      }
      function d(e2) {
        return typeof e2 === "number";
      }
      function f(e2) {
        return e2 === "true" || e2 === "false";
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var h = Array.isArray;
      (function(e2) {
        e2["Container"] = "container", e2["Childnodes"] = "cn", e2["Text"] = "v", e2["NodeType"] = "nt", e2["NodeName"] = "nn", e2["Style"] = "st", e2["Class"] = "cl", e2["Src"] = "src";
      })(t.Shortcuts || (t.Shortcuts = {}));
      var p = { style: "i.".concat("st"), class: "i.".concat("cl") }, v = { bindtap: "eh" }, b = { bindTouchStart: "", bindTouchMove: "", bindTouchEnd: "", bindTouchCancel: "", bindLongTap: "" }, m = { bindAnimationStart: "", bindAnimationIteration: "", bindAnimationEnd: "", bindTransitionEnd: "" };
      function g(e2) {
        return "'".concat(e2, "'");
      }
      var y = Object.assign(Object.assign({ "hover-class": g("none"), "hover-stop-propagation": "false", "hover-start-time": "50", "hover-stay-time": "400", animation: "" }, b), m), O = { type: "", size: "23", color: "" }, j = Object.assign({ longitude: "", latitude: "", scale: "16", markers: "[]", covers: "", polyline: "[]", circles: "[]", controls: "[]", "include-points": "[]", "show-location": "", "layer-style": "1", bindMarkerTap: "", bindControlTap: "", bindCalloutTap: "", bindUpdated: "" }, b), w = { percent: "", "stroke-width": "6", color: g("#09BB07"), activeColor: g("#09BB07"), backgroundColor: g("#EBEBEB"), active: "false", "active-mode": g("backwards"), "show-info": "false" }, k = { nodes: "[]" }, T = { selectable: "false", space: "", decode: "false" }, E = { size: g("default"), type: "", plain: "false", disabled: "", loading: "false", "form-type": "", "open-type": "", "hover-class": g("button-hover"), "hover-stop-propagation": "false", "hover-start-time": "20", "hover-stay-time": "70", name: "" }, _ = { value: "", disabled: "", checked: "false", color: g("#09BB07"), name: "" }, C = { bindChange: "", name: "" }, S = { "report-submit": "false", bindSubmit: "", bindReset: "", name: "" }, P = { value: "", type: g(""), password: "false", placeholder: "", "placeholder-style": "", "placeholder-class": g("input-placeholder"), disabled: "", maxlength: "140", "cursor-spacing": "0", focus: "false", "confirm-type": g("done"), "confirm-hold": "false", cursor: "i.value.length", "selection-start": "-1", "selection-end": "-1", bindInput: "", bindFocus: "", bindBlur: "", bindConfirm: "", name: "" }, A = { for: "", name: "" }, x = { mode: g("selector"), disabled: "", range: "", "range-key": "", value: "", start: "", end: "", fields: g("day"), "custom-item": "", name: "", bindCancel: "", bindChange: "", bindColumnChange: "" }, I = { value: "", "indicator-style": "", "indicator-class": "", "mask-style": "", "mask-class": "", bindChange: "", name: "" }, N = { name: "" }, F = { value: "", checked: "false", disabled: "", color: g("#09BB07"), name: "" }, B = { bindChange: "", name: "" }, R = { min: "0", max: "100", step: "1", disabled: "", value: "0", activeColor: g("#1aad19"), backgroundColor: g("#e9e9e9"), "block-size": "28", "block-color": g("#ffffff"), "show-value": "false", bindChange: "", bindChanging: "", name: "" }, L = { checked: "false", disabled: "", type: g("switch"), color: g("#04BE02"), bindChange: "", name: "" }, M = { value: "", placeholder: "", "placeholder-style": "", "placeholder-class": g("textarea-placeholder"), disabled: "", maxlength: "140", "auto-focus": "false", focus: "false", "auto-height": "false", fixed: "false", "cursor-spacing": "0", cursor: "-1", "selection-start": "-1", "selection-end": "-1", bindFocus: "", bindBlur: "", bindLineChange: "", bindInput: "", bindConfirm: "", name: "" }, D = { src: "", bindLoad: "eh", bindError: "eh" }, U = Object.assign({ "scroll-top": "false" }, b), H = { "scale-area": "false" }, $ = Object.assign(Object.assign({ direction: "none", inertia: "false", "out-of-bounds": "false", x: "", y: "", damping: "20", friction: "2", disabled: "", scale: "false", "scale-min": "0.5", "scale-max": "10", "scale-value": "1", animation: "true", bindChange: "", bindScale: "", bindHTouchMove: "", bindVTouchMove: "", width: g("10px"), height: g("10px") }, b), m), z = Object.assign(Object.assign({ "scroll-x": "false", "scroll-y": "false", "upper-threshold": "50", "lower-threshold": "50", "scroll-top": "", "scroll-left": "", "scroll-into-view": "", "scroll-with-animation": "false", "enable-back-to-top": "false", bindScrollToUpper: "", bindScrollToLower: "", bindScroll: "" }, b), m), q = Object.assign({ "indicator-dots": "false", "indicator-color": g("rgba(0, 0, 0, .3)"), "indicator-active-color": g("#000000"), autoplay: "false", current: "0", interval: "5000", duration: "500", circular: "false", vertical: "false", "previous-margin": "'0px'", "next-margin": "'0px'", "display-multiple-items": "1", bindChange: "", bindTransition: "", bindAnimationFinish: "" }, b), W = { "item-id": "" }, V = { url: "", "open-type": g("navigate"), delta: "1", "hover-class": g("navigator-hover"), "hover-stop-propagation": "false", "hover-start-time": "50", "hover-stay-time": "600", bindSuccess: "", bindFail: "", bindComplete: "" }, Q = { id: "", src: "", loop: "false", controls: "false", poster: "", name: "", author: "", bindError: "", bindPlay: "", bindPause: "", bindTimeUpdate: "", bindEnded: "" }, G = { "device-position": g("back"), flash: g("auto"), bindStop: "", bindError: "" }, J = Object.assign({ src: "", mode: g("scaleToFill"), "lazy-load": "false", bindError: "", bindLoad: "" }, b), K = { src: "", autoplay: "false", muted: "false", orientation: g("vertical"), "object-fit": g("contain"), "background-mute": "false", "min-cache": "1", "max-cache": "3", animation: "", bindStateChange: "", bindFullScreenChange: "", bindNetStatus: "" }, Y = { src: "", duration: "", controls: "true", "danmu-list": "", "danmu-btn": "", "enable-danmu": "", autoplay: "false", loop: "false", muted: "false", "initial-time": "0", "page-gesture": "false", direction: "", "show-progress": "true", "show-fullscreen-btn": "true", "show-play-btn": "true", "show-center-play-btn": "true", "enable-progress-gesture": "true", "object-fit": g("contain"), poster: "", "show-mute-btn": "false", animation: "", bindPlay: "", bindPause: "", bindEnded: "", bindTimeUpdate: "", bindFullScreenChange: "", bindWaiting: "", bindError: "" }, Z = Object.assign({ "canvas-id": "", "disable-scroll": "false", bindError: "" }, b), X = { "unit-id": "", "ad-intervals": "", bindLoad: "", bindError: "", bindClose: "" }, ee = { src: "", bindMessage: "", bindLoad: "", bindError: "" }, te = {}, ne = { name: "" }, re = { name: "" }, ie = { View: y, Icon: O, Progress: w, RichText: k, Text: T, Button: E, Checkbox: _, CheckboxGroup: C, Form: S, Input: P, Label: A, Picker: x, PickerView: I, PickerViewColumn: N, Radio: F, RadioGroup: B, Slider: R, Switch: L, CoverImage: D, Textarea: M, CoverView: U, MovableArea: H, MovableView: $, ScrollView: z, Swiper: q, SwiperItem: W, Navigator: V, Audio: Q, Camera: G, Image: J, LivePlayer: K, Video: Y, Canvas: Z, Ad: X, WebView: ee, Block: te, Map: j, Slot: re, SlotView: ne }, oe = new Set(["input", "checkbox", "picker", "picker-view", "radio", "slider", "switch", "textarea"]), ae = new Set(["input", "textarea"]), ce = new Set(["progress", "icon", "rich-text", "input", "textarea", "slider", "switch", "audio", "ad", "official-account", "open-data", "navigation-bar"]), ue = new Map([["view", -1], ["catch-view", -1], ["cover-view", -1], ["static-view", -1], ["pure-view", -1], ["block", -1], ["text", -1], ["static-text", 6], ["slot", 8], ["slot-view", 8], ["label", 6], ["form", 4], ["scroll-view", 4], ["swiper", 4], ["swiper-item", 4]]), se = {}, le = [], de = function() {
      }, fe = Object.create(null), he = function(e2) {
        return { v: e2 };
      }, pe = function(e2) {
        return e2.v;
      };
      function ve(e2) {
        return e2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      }
      function be(e2) {
        for (var t2 = "", n2 = false, r2 = 0; r2 < e2.length; r2++)
          e2[r2] !== "-" ? (t2 += n2 ? e2[r2].toUpperCase() : e2[r2], n2 = false) : n2 = true;
        return t2;
      }
      var me = function(e2) {
        return e2.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      };
      function ge(e2) {
        return e2.charAt(0).toUpperCase() + e2.slice(1);
      }
      var ye = Object.prototype.hasOwnProperty, Oe = function(e2, t2) {
        return ye.call(e2, t2);
      }, je = "\u5982\u6709\u7591\u95EE\uFF0C\u8BF7\u63D0\u4EA4 issue \u81F3\uFF1Ahttps://github.com/nervjs/taro/issues";
      function we(e2, t2) {
        if (!e2)
          throw new Error(t2 + "\n" + je);
      }
      function ke(e2, t2) {
        0;
      }
      function Te(e2) {
        for (var t2, n2, r2, i2 = decodeURIComponent, o2 = e2.split("&"), a2 = {}, c2 = 0, u2 = o2.length; c2 < u2; ++c2)
          if (r2 = o2[c2], r2.length) {
            var s2 = r2.indexOf("=");
            s2 < 0 ? (t2 = i2(r2), n2 = "") : (t2 = i2(r2.slice(0, s2)), n2 = i2(r2.slice(s2 + 1))), typeof a2[t2] === "string" && (a2[t2] = [a2[t2]]), Array.isArray(a2[t2]) ? a2[t2].push(n2) : a2[t2] = n2;
          }
        return a2;
      }
      var Ee = 1, _e = new Date().getTime().toString();
      function Ce() {
        return _e + Ee++;
      }
      var Se = {};
      function Pe(e2, t2) {
        Se[e2] = t2;
      }
      function Ae(e2, t2) {
        var n2 = Se[e2];
        return t2 && delete Se[e2], n2;
      }
      function xe(e2) {
        return e2 in Se;
      }
      function Ie(e2) {
        Object.keys(e2).forEach(function(t2) {
          t2 in ie ? Object.assign(ie[t2], e2[t2]) : ie[t2] = e2[t2];
        });
      }
      function Ne(e2) {
        Object.keys(e2).forEach(function(t2) {
          var n2 = e2[t2], r2 = fe[t2];
          r2 ? h(r2) ? fe[t2] = r2.push(n2) : fe[t2] = [r2, n2] : fe[t2] = n2;
        });
      }
      function Fe(e2) {
        return function() {
          console.warn("\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 ".concat(e2));
        };
      }
      function Be(e2, t2) {
        var n2 = "__key_", r2 = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
        if (r2.indexOf(e2) > -1) {
          var i2 = t2.url = t2.url || "", o2 = i2.indexOf("?") > -1, a2 = Ce();
          t2.url += (o2 ? "&" : "?") + "".concat(n2, "=").concat(a2);
        }
      }
      function Re(e2, t2) {
        return e2.split("\n").map(function(e3, n2) {
          var r2 = n2 === 0 ? "" : Array(t2).fill(" ").join("");
          return r2 + e3;
        }).join("\n");
      }
      var Le = new Set(["addPhoneContact", "authorize", "canvasGetImageData", "canvasPutImageData", "canvasToTempFilePath", "checkSession", "chooseAddress", "chooseImage", "chooseInvoiceTitle", "chooseLocation", "chooseVideo", "clearStorage", "closeBLEConnection", "closeBluetoothAdapter", "closeSocket", "compressImage", "connectSocket", "createBLEConnection", "downloadFile", "getAvailableAudioSources", "getBLEDeviceCharacteristics", "getBLEDeviceServices", "getBatteryInfo", "getBeacons", "getBluetoothAdapterState", "getBluetoothDevices", "getClipboardData", "getConnectedBluetoothDevices", "getConnectedWifi", "getExtConfig", "getFileInfo", "getImageInfo", "getLocation", "getNetworkType", "getSavedFileInfo", "getSavedFileList", "getScreenBrightness", "getSetting", "getStorage", "getStorageInfo", "getSystemInfo", "getUserInfo", "getWifiList", "hideHomeButton", "hideShareMenu", "hideTabBar", "hideTabBarRedDot", "loadFontFace", "login", "makePhoneCall", "navigateBack", "navigateBackMiniProgram", "navigateTo", "navigateToBookshelf", "navigateToMiniProgram", "notifyBLECharacteristicValueChange", "hideKeyboard", "hideLoading", "hideNavigationBarLoading", "hideToast", "openBluetoothAdapter", "openDocument", "openLocation", "openSetting", "pageScrollTo", "previewImage", "queryBookshelf", "reLaunch", "readBLECharacteristicValue", "redirectTo", "removeSavedFile", "removeStorage", "removeTabBarBadge", "requestSubscribeMessage", "saveFile", "saveImageToPhotosAlbum", "saveVideoToPhotosAlbum", "scanCode", "sendSocketMessage", "setBackgroundColor", "setBackgroundTextStyle", "setClipboardData", "setEnableDebug", "setInnerAudioOption", "setKeepScreenOn", "setNavigationBarColor", "setNavigationBarTitle", "setScreenBrightness", "setStorage", "setTabBarBadge", "setTabBarItem", "setTabBarStyle", "showActionSheet", "showFavoriteGuide", "showLoading", "showModal", "showShareMenu", "showTabBar", "showTabBarRedDot", "showToast", "startBeaconDiscovery", "startBluetoothDevicesDiscovery", "startDeviceMotionListening", "startPullDownRefresh", "stopBeaconDiscovery", "stopBluetoothDevicesDiscovery", "stopCompass", "startCompass", "startAccelerometer", "stopAccelerometer", "showNavigationBarLoading", "stopDeviceMotionListening", "stopPullDownRefresh", "switchTab", "uploadFile", "vibrateLong", "vibrateShort", "writeBLECharacteristicValue"]);
      function Me(e2) {
        return function() {
          if (typeof e2.getSystemInfoSync !== "function")
            return console.error("\u4E0D\u652F\u6301 API canIUseWebp"), false;
          var t2 = e2.getSystemInfoSync(), n2 = t2.platform, r2 = n2.toLowerCase();
          return r2 === "android" || r2 === "devtools";
        };
      }
      function De(e2) {
        return function(t2) {
          t2 = t2 || {}, typeof t2 === "string" && (t2 = { url: t2 });
          var n2, r2 = t2.success, i2 = t2.fail, o2 = t2.complete, a2 = new Promise(function(a3, c2) {
            t2.success = function(e3) {
              r2 && r2(e3), a3(e3);
            }, t2.fail = function(e3) {
              i2 && i2(e3), c2(e3);
            }, t2.complete = function(e3) {
              o2 && o2(e3);
            }, n2 = e2.request(t2);
          });
          return a2.abort = function(e3) {
            return e3 && e3(), n2 && n2.abort(), a2;
          }, a2;
        };
      }
      function Ue(e2, t2) {
        var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i2 = n2.needPromiseApis || [], o2 = new Set([].concat(r(i2), r(Le))), a2 = ["getEnv", "interceptors", "Current", "getCurrentInstance", "options", "nextTick", "eventCenter", "Events", "preload", "webpackJsonp"], c2 = new Set(Object.keys(t2).filter(function(e3) {
          return a2.indexOf(e3) === -1;
        }));
        n2.modifyApis && n2.modifyApis(c2), c2.forEach(function(r2) {
          if (o2.has(r2)) {
            var i3 = r2;
            e2[i3] = function() {
              for (var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r3 = arguments.length, o3 = new Array(r3 > 1 ? r3 - 1 : 0), a4 = 1; a4 < r3; a4++)
                o3[a4 - 1] = arguments[a4];
              var c3 = i3;
              if (typeof e3 === "string")
                return o3.length ? t2[c3].apply(t2, [e3].concat(o3)) : t2[c3](e3);
              if (n2.transformMeta) {
                var u2 = n2.transformMeta(c3, e3);
                if (c3 = u2.key, e3 = u2.options, !t2.hasOwnProperty(c3))
                  return Fe(c3)();
              }
              var s2 = null, l2 = Object.assign({}, e3);
              Be(c3, e3);
              var d2 = new Promise(function(r4, i4) {
                l2.success = function(t3) {
                  var i5, o4;
                  (i5 = n2.modifyAsyncResult) === null || i5 === void 0 || i5.call(n2, c3, t3), (o4 = e3.success) === null || o4 === void 0 || o4.call(e3, t3), r4(c3 === "connectSocket" ? Promise.resolve().then(function() {
                    return s2 ? Object.assign(s2, t3) : t3;
                  }) : t3);
                }, l2.fail = function(t3) {
                  var n3;
                  (n3 = e3.fail) === null || n3 === void 0 || n3.call(e3, t3), i4(t3);
                }, l2.complete = function(t3) {
                  var n3;
                  (n3 = e3.complete) === null || n3 === void 0 || n3.call(e3, t3);
                }, s2 = o3.length ? t2[c3].apply(t2, [l2].concat(o3)) : t2[c3](l2);
              });
              return c3 !== "uploadFile" && c3 !== "downloadFile" || (d2.progress = function(e4) {
                return s2 === null || s2 === void 0 || s2.onProgressUpdate(e4), d2;
              }, d2.abort = function(e4) {
                return e4 === null || e4 === void 0 || e4(), s2 === null || s2 === void 0 || s2.abort(), d2;
              }), d2;
            };
          } else {
            var a3 = r2;
            if (n2.transformMeta && (a3 = n2.transformMeta(r2, {}).key), !t2.hasOwnProperty(a3))
              return void (e2[r2] = Fe(r2));
            typeof t2[r2] === "function" ? e2[r2] = function() {
              for (var e3 = arguments.length, i4 = new Array(e3), o3 = 0; o3 < e3; o3++)
                i4[o3] = arguments[o3];
              return n2.handleSyncApis ? n2.handleSyncApis(r2, t2, i4) : t2[a3].apply(t2, i4);
            } : e2[r2] = t2[a3];
          }
        }), !n2.isOnlyPromisify && He(e2, t2, n2);
      }
      function He(e2, t2) {
        var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        e2.canIUseWebp = Me(e2), e2.getCurrentPages = getCurrentPages || Fe("getCurrentPages"), e2.getApp = getApp || Fe("getApp"), e2.env = t2.env || {};
        try {
          e2.requirePlugin = requirePlugin || Fe("requirePlugin");
        } catch (t3) {
          e2.requirePlugin = Fe("requirePlugin");
        }
        var r2 = n2.request ? n2.request : De(t2);
        function i2(e3) {
          return r2(e3.requestParams);
        }
        var o2 = new e2.Link(i2);
        e2.request = o2.request.bind(o2), e2.addInterceptor = o2.addInterceptor.bind(o2), e2.cleanInterceptors = o2.cleanInterceptors.bind(o2), e2.miniGlobal = e2.options.miniGlobal = t2;
      }
      t.EMPTY_ARR = le, t.EMPTY_OBJ = se, t.animationEvents = m, t.box = he, t.cacheDataGet = Ae, t.cacheDataHas = xe, t.cacheDataSet = Pe, t.capitalize = ge, t.controlledComponent = oe, t.defaultReconciler = fe, t.ensure = we, t.events = v, t.focusComponents = ae, t.getUniqueKey = Ce, t.hasOwn = Oe, t.indent = Re, t.internalComponents = ie, t.isArray = h, t.isBoolean = s, t.isBooleanStringLiteral = f, t.isFunction = l, t.isNull = c, t.isNumber = d, t.isObject = u, t.isString = o, t.isUndefined = a, t.mergeInternalComponents = Ie, t.mergeReconciler = Ne, t.nestElements = ue, t.noop = de, t.processApis = Ue, t.queryToJson = Te, t.setUniqueKeyToRoute = Be, t.singleQuote = g, t.styles = p, t.toCamelCase = be, t.toDashed = ve, t.toKebabCase = me, t.touchEvents = b, t.unbox = pe, t.unsupport = Fe, t.voidElements = ce, t.warn = ke;
    }, 19: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      }), n.d(t, "b", function() {
        return i;
      }), n.d(t, "c", function() {
        return r;
      });
      var r = "view", i = "text", o = "image";
    }, 2: function(e, t, n) {
      "use strict";
      n.r(t), function(e2, r, i, o, a, c) {
        n.d(t, "Current", function() {
          return yi;
        }), n.d(t, "ElementNames", function() {
          return ke;
        }), n.d(t, "Events", function() {
          return ji;
        }), n.d(t, "FormElement", function() {
          return Qn;
        }), n.d(t, "SERVICE_IDENTIFIER", function() {
          return A;
        }), n.d(t, "Style", function() {
          return Ge;
        }), n.d(t, "TaroElement", function() {
          return Xe;
        }), n.d(t, "TaroEvent", function() {
          return Xr;
        }), n.d(t, "TaroNode", function() {
          return _e;
        }), n.d(t, "TaroRootElement", function() {
          return Vn;
        }), n.d(t, "TaroText", function() {
          return Ce;
        }), n.d(t, "cancelAnimationFrame", function() {
          return vi;
        }), n.d(t, "connectReactPage", function() {
          return qi;
        }), n.d(t, "connectVuePage", function() {
          return Zi;
        }), n.d(t, "container", function() {
          return Jr;
        }), n.d(t, "createComponentConfig", function() {
          return Li;
        }), n.d(t, "createDocument", function() {
          return ai;
        }), n.d(t, "createEvent", function() {
          return ei;
        }), n.d(t, "createNativeComponentConfig", function() {
          return Yi;
        }), n.d(t, "createPageConfig", function() {
          return Ri;
        }), n.d(t, "createReactApp", function() {
          return Qi;
        }), n.d(t, "createRecursiveComponentConfig", function() {
          return Mi;
        }), n.d(t, "createVue3App", function() {
          return ro;
        }), n.d(t, "createVueApp", function() {
          return eo;
        }), n.d(t, "document", function() {
          return ui;
        }), n.d(t, "eventCenter", function() {
          return ki;
        }), n.d(t, "getComputedStyle", function() {
          return bi;
        }), n.d(t, "getCurrentInstance", function() {
          return Oi;
        }), n.d(t, "hydrate", function() {
          return we;
        }), n.d(t, "injectPageInstance", function() {
          return Ci;
        }), n.d(t, "navigator", function() {
          return fi;
        }), n.d(t, "nextTick", function() {
          return ko;
        }), n.d(t, "now", function() {
          return ci;
        }), n.d(t, "options", function() {
          return $n;
        }), n.d(t, "requestAnimationFrame", function() {
          return pi;
        }), n.d(t, "stringify", function() {
          return xi;
        }), n.d(t, "useAddToFavorites", function() {
          return go;
        }), n.d(t, "useDidHide", function() {
          return ao;
        }), n.d(t, "useDidShow", function() {
          return oo;
        }), n.d(t, "useOptionMenuClick", function() {
          return vo;
        }), n.d(t, "usePageScroll", function() {
          return so;
        }), n.d(t, "usePullDownRefresh", function() {
          return co;
        }), n.d(t, "usePullIntercept", function() {
          return bo;
        }), n.d(t, "useReachBottom", function() {
          return uo;
        }), n.d(t, "useReady", function() {
          return yo;
        }), n.d(t, "useResize", function() {
          return lo;
        }), n.d(t, "useRouter", function() {
          return Oo;
        }), n.d(t, "useScope", function() {
          return jo;
        }), n.d(t, "useShareAppMessage", function() {
          return fo;
        }), n.d(t, "useShareTimeline", function() {
          return mo;
        }), n.d(t, "useTabItemTap", function() {
          return ho;
        }), n.d(t, "useTitleClick", function() {
          return po;
        }), n.d(t, "window", function() {
          return mi;
        });
        var u = n(31), s = n(28), l = n.n(s), d = n(35), f = n(36), h = n(11), p = n(9), v = n(5), b = n(43), m = n(37), g = n(12), y = n(7), O = n(8), j = n(13), w = n(3), k = n(4), T = n(6), E = n(1), _ = n(0);
        function C(e3, t2, n2, r2) {
          var i2, o2 = arguments.length, a2 = o2 < 3 ? t2 : r2 === null ? r2 = Object.getOwnPropertyDescriptor(t2, n2) : r2;
          if ((typeof Reflect === "undefined" ? "undefined" : Object(T["a"])(Reflect)) === "object" && typeof Reflect.decorate === "function")
            a2 = Reflect.decorate(e3, t2, n2, r2);
          else
            for (var c2 = e3.length - 1; c2 >= 0; c2--)
              (i2 = e3[c2]) && (a2 = (o2 < 3 ? i2(a2) : o2 > 3 ? i2(t2, n2, a2) : i2(t2, n2)) || a2);
          return o2 > 3 && a2 && Object.defineProperty(t2, n2, a2), a2;
        }
        function S(e3, t2) {
          return function(n2, r2) {
            t2(n2, r2, e3);
          };
        }
        function P(e3, t2) {
          if ((typeof Reflect === "undefined" ? "undefined" : Object(T["a"])(Reflect)) === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(e3, t2);
        }
        (function(t2) {
          (function(e3) {
            var n2 = r2(t2);
            function r2(e4, t3) {
              return function(n3, r3) {
                typeof e4[n3] !== "function" && Object.defineProperty(e4, n3, { configurable: true, writable: true, value: r3 }), t3 && t3(n3, r3);
              };
            }
            e3(n2);
          })(function(t3) {
            var n2 = Object.prototype.hasOwnProperty, r2 = typeof Symbol === "function", i2 = r2 && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive", o2 = r2 && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator", a2 = typeof Object.create === "function", c2 = { __proto__: [] } instanceof Array, u2 = !a2 && !c2, s2 = { create: a2 ? function() {
              return ae2(Object.create(null));
            } : c2 ? function() {
              return ae2({ __proto__: null });
            } : function() {
              return ae2({});
            }, has: u2 ? function(e3, t4) {
              return n2.call(e3, t4);
            } : function(e3, t4) {
              return t4 in e3;
            }, get: u2 ? function(e3, t4) {
              return n2.call(e3, t4) ? e3[t4] : void 0;
            } : function(e3, t4) {
              return e3[t4];
            } }, l2 = Object.getPrototypeOf(Function), d2 = (typeof e2 === "undefined" ? "undefined" : Object(T["a"])(e2)) === "object" && e2.env && e2.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true", f2 = d2 || typeof Map !== "function" || typeof Map.prototype.entries !== "function" ? re2() : Map, h2 = d2 || typeof Set !== "function" || typeof Set.prototype.entries !== "function" ? ie2() : Set, p2 = d2 || typeof WeakMap !== "function" ? oe2() : WeakMap, v2 = new p2();
            function b2(e3, t4, n3, r3) {
              if (M2(n3)) {
                if (!Q2(e3))
                  throw new TypeError();
                if (!J2(t4))
                  throw new TypeError();
                return C2(e3, t4);
              }
              if (!Q2(e3))
                throw new TypeError();
              if (!H2(t4))
                throw new TypeError();
              if (!H2(r3) && !M2(r3) && !D2(r3))
                throw new TypeError();
              return D2(r3) && (r3 = void 0), n3 = V2(n3), S2(e3, t4, n3, r3);
            }
            function m2(e3, t4) {
              function n3(n4, r3) {
                if (!H2(n4))
                  throw new TypeError();
                if (!M2(r3) && !K2(r3))
                  throw new TypeError();
                F2(e3, t4, n4, r3);
              }
              return n3;
            }
            function g2(e3, t4, n3, r3) {
              if (!H2(n3))
                throw new TypeError();
              return M2(r3) || (r3 = V2(r3)), F2(e3, t4, n3, r3);
            }
            function y2(e3, t4, n3) {
              if (!H2(t4))
                throw new TypeError();
              return M2(n3) || (n3 = V2(n3)), A2(e3, t4, n3);
            }
            function O2(e3, t4, n3) {
              if (!H2(t4))
                throw new TypeError();
              return M2(n3) || (n3 = V2(n3)), x2(e3, t4, n3);
            }
            function j2(e3, t4, n3) {
              if (!H2(t4))
                throw new TypeError();
              return M2(n3) || (n3 = V2(n3)), I2(e3, t4, n3);
            }
            function w2(e3, t4, n3) {
              if (!H2(t4))
                throw new TypeError();
              return M2(n3) || (n3 = V2(n3)), N2(e3, t4, n3);
            }
            function k2(e3, t4) {
              if (!H2(e3))
                throw new TypeError();
              return M2(t4) || (t4 = V2(t4)), B2(e3, t4);
            }
            function E2(e3, t4) {
              if (!H2(e3))
                throw new TypeError();
              return M2(t4) || (t4 = V2(t4)), R2(e3, t4);
            }
            function _2(e3, t4, n3) {
              if (!H2(t4))
                throw new TypeError();
              M2(n3) || (n3 = V2(n3));
              var r3 = P2(t4, n3, false);
              if (M2(r3))
                return false;
              if (!r3.delete(e3))
                return false;
              if (r3.size > 0)
                return true;
              var i3 = v2.get(t4);
              return i3.delete(n3), i3.size > 0 || v2.delete(t4), true;
            }
            function C2(e3, t4) {
              for (var n3 = e3.length - 1; n3 >= 0; --n3) {
                var r3 = e3[n3], i3 = r3(t4);
                if (!M2(i3) && !D2(i3)) {
                  if (!J2(i3))
                    throw new TypeError();
                  t4 = i3;
                }
              }
              return t4;
            }
            function S2(e3, t4, n3, r3) {
              for (var i3 = e3.length - 1; i3 >= 0; --i3) {
                var o3 = e3[i3], a3 = o3(t4, n3, r3);
                if (!M2(a3) && !D2(a3)) {
                  if (!H2(a3))
                    throw new TypeError();
                  r3 = a3;
                }
              }
              return r3;
            }
            function P2(e3, t4, n3) {
              var r3 = v2.get(e3);
              if (M2(r3)) {
                if (!n3)
                  return;
                r3 = new f2(), v2.set(e3, r3);
              }
              var i3 = r3.get(t4);
              if (M2(i3)) {
                if (!n3)
                  return;
                i3 = new f2(), r3.set(t4, i3);
              }
              return i3;
            }
            function A2(e3, t4, n3) {
              var r3 = x2(e3, t4, n3);
              if (r3)
                return true;
              var i3 = ne2(t4);
              return !D2(i3) && A2(e3, i3, n3);
            }
            function x2(e3, t4, n3) {
              var r3 = P2(t4, n3, false);
              return !M2(r3) && q2(r3.has(e3));
            }
            function I2(e3, t4, n3) {
              var r3 = x2(e3, t4, n3);
              if (r3)
                return N2(e3, t4, n3);
              var i3 = ne2(t4);
              return D2(i3) ? void 0 : I2(e3, i3, n3);
            }
            function N2(e3, t4, n3) {
              var r3 = P2(t4, n3, false);
              if (!M2(r3))
                return r3.get(e3);
            }
            function F2(e3, t4, n3, r3) {
              var i3 = P2(n3, r3, true);
              i3.set(e3, t4);
            }
            function B2(e3, t4) {
              var n3 = R2(e3, t4), r3 = ne2(e3);
              if (r3 === null)
                return n3;
              var i3 = B2(r3, t4);
              if (i3.length <= 0)
                return n3;
              if (n3.length <= 0)
                return i3;
              for (var o3 = new h2(), a3 = [], c3 = 0, u3 = n3; c3 < u3.length; c3++) {
                var s3 = u3[c3], l3 = o3.has(s3);
                l3 || (o3.add(s3), a3.push(s3));
              }
              for (var d3 = 0, f3 = i3; d3 < f3.length; d3++) {
                s3 = f3[d3], l3 = o3.has(s3);
                l3 || (o3.add(s3), a3.push(s3));
              }
              return a3;
            }
            function R2(e3, t4) {
              var n3 = [], r3 = P2(e3, t4, false);
              if (M2(r3))
                return n3;
              var i3 = r3.keys(), o3 = Z2(i3), a3 = 0;
              while (1) {
                var c3 = ee2(o3);
                if (!c3)
                  return n3.length = a3, n3;
                var u3 = X2(c3);
                try {
                  n3[a3] = u3;
                } catch (e4) {
                  try {
                    te2(o3);
                  } finally {
                    throw e4;
                  }
                }
                a3++;
              }
            }
            function L2(e3) {
              if (e3 === null)
                return 1;
              switch (Object(T["a"])(e3)) {
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
                  return e3 === null ? 1 : 6;
                default:
                  return 6;
              }
            }
            function M2(e3) {
              return e3 === void 0;
            }
            function D2(e3) {
              return e3 === null;
            }
            function U2(e3) {
              return Object(T["a"])(e3) === "symbol";
            }
            function H2(e3) {
              return Object(T["a"])(e3) === "object" ? e3 !== null : typeof e3 === "function";
            }
            function $2(e3, t4) {
              switch (L2(e3)) {
                case 0:
                  return e3;
                case 1:
                  return e3;
                case 2:
                  return e3;
                case 3:
                  return e3;
                case 4:
                  return e3;
                case 5:
                  return e3;
              }
              var n3 = t4 === 3 ? "string" : t4 === 5 ? "number" : "default", r3 = Y2(e3, i2);
              if (r3 !== void 0) {
                var o3 = r3.call(e3, n3);
                if (H2(o3))
                  throw new TypeError();
                return o3;
              }
              return z2(e3, n3 === "default" ? "number" : n3);
            }
            function z2(e3, t4) {
              if (t4 === "string") {
                var n3 = e3.toString;
                if (G2(n3)) {
                  var r3 = n3.call(e3);
                  if (!H2(r3))
                    return r3;
                }
                var i3 = e3.valueOf;
                if (G2(i3)) {
                  r3 = i3.call(e3);
                  if (!H2(r3))
                    return r3;
                }
              } else {
                i3 = e3.valueOf;
                if (G2(i3)) {
                  r3 = i3.call(e3);
                  if (!H2(r3))
                    return r3;
                }
                var o3 = e3.toString;
                if (G2(o3)) {
                  r3 = o3.call(e3);
                  if (!H2(r3))
                    return r3;
                }
              }
              throw new TypeError();
            }
            function q2(e3) {
              return !!e3;
            }
            function W2(e3) {
              return "" + e3;
            }
            function V2(e3) {
              var t4 = $2(e3, 3);
              return U2(t4) ? t4 : W2(t4);
            }
            function Q2(e3) {
              return Array.isArray ? Array.isArray(e3) : e3 instanceof Object ? e3 instanceof Array : Object.prototype.toString.call(e3) === "[object Array]";
            }
            function G2(e3) {
              return typeof e3 === "function";
            }
            function J2(e3) {
              return typeof e3 === "function";
            }
            function K2(e3) {
              switch (L2(e3)) {
                case 3:
                  return true;
                case 4:
                  return true;
                default:
                  return false;
              }
            }
            function Y2(e3, t4) {
              var n3 = e3[t4];
              if (n3 !== void 0 && n3 !== null) {
                if (!G2(n3))
                  throw new TypeError();
                return n3;
              }
            }
            function Z2(e3) {
              var t4 = Y2(e3, o2);
              if (!G2(t4))
                throw new TypeError();
              var n3 = t4.call(e3);
              if (!H2(n3))
                throw new TypeError();
              return n3;
            }
            function X2(e3) {
              return e3.value;
            }
            function ee2(e3) {
              var t4 = e3.next();
              return !t4.done && t4;
            }
            function te2(e3) {
              var t4 = e3["return"];
              t4 && t4.call(e3);
            }
            function ne2(e3) {
              var t4 = Object.getPrototypeOf(e3);
              if (typeof e3 !== "function" || e3 === l2)
                return t4;
              if (t4 !== l2)
                return t4;
              var n3 = e3.prototype, r3 = n3 && Object.getPrototypeOf(n3);
              if (r3 == null || r3 === Object.prototype)
                return t4;
              var i3 = r3.constructor;
              return typeof i3 !== "function" || i3 === e3 ? t4 : i3;
            }
            function re2() {
              var e3 = {}, t4 = [], n3 = function() {
                function e4(e5, t5, n4) {
                  this._index = 0, this._keys = e5, this._values = t5, this._selector = n4;
                }
                return e4.prototype["@@iterator"] = function() {
                  return this;
                }, e4.prototype[o2] = function() {
                  return this;
                }, e4.prototype.next = function() {
                  var e5 = this._index;
                  if (e5 >= 0 && e5 < this._keys.length) {
                    var n4 = this._selector(this._keys[e5], this._values[e5]);
                    return e5 + 1 >= this._keys.length ? (this._index = -1, this._keys = t4, this._values = t4) : this._index++, { value: n4, done: false };
                  }
                  return { value: void 0, done: true };
                }, e4.prototype.throw = function(e5) {
                  throw this._index >= 0 && (this._index = -1, this._keys = t4, this._values = t4), e5;
                }, e4.prototype.return = function(e5) {
                  return this._index >= 0 && (this._index = -1, this._keys = t4, this._values = t4), { value: e5, done: true };
                }, e4;
              }();
              return function() {
                function t5() {
                  this._keys = [], this._values = [], this._cacheKey = e3, this._cacheIndex = -2;
                }
                return Object.defineProperty(t5.prototype, "size", { get: function() {
                  return this._keys.length;
                }, enumerable: true, configurable: true }), t5.prototype.has = function(e4) {
                  return this._find(e4, false) >= 0;
                }, t5.prototype.get = function(e4) {
                  var t6 = this._find(e4, false);
                  return t6 >= 0 ? this._values[t6] : void 0;
                }, t5.prototype.set = function(e4, t6) {
                  var n4 = this._find(e4, true);
                  return this._values[n4] = t6, this;
                }, t5.prototype.delete = function(t6) {
                  var n4 = this._find(t6, false);
                  if (n4 >= 0) {
                    for (var r4 = this._keys.length, i4 = n4 + 1; i4 < r4; i4++)
                      this._keys[i4 - 1] = this._keys[i4], this._values[i4 - 1] = this._values[i4];
                    return this._keys.length--, this._values.length--, t6 === this._cacheKey && (this._cacheKey = e3, this._cacheIndex = -2), true;
                  }
                  return false;
                }, t5.prototype.clear = function() {
                  this._keys.length = 0, this._values.length = 0, this._cacheKey = e3, this._cacheIndex = -2;
                }, t5.prototype.keys = function() {
                  return new n3(this._keys, this._values, r3);
                }, t5.prototype.values = function() {
                  return new n3(this._keys, this._values, i3);
                }, t5.prototype.entries = function() {
                  return new n3(this._keys, this._values, a3);
                }, t5.prototype["@@iterator"] = function() {
                  return this.entries();
                }, t5.prototype[o2] = function() {
                  return this.entries();
                }, t5.prototype._find = function(e4, t6) {
                  return this._cacheKey !== e4 && (this._cacheIndex = this._keys.indexOf(this._cacheKey = e4)), this._cacheIndex < 0 && t6 && (this._cacheIndex = this._keys.length, this._keys.push(e4), this._values.push(void 0)), this._cacheIndex;
                }, t5;
              }();
              function r3(e4, t5) {
                return e4;
              }
              function i3(e4, t5) {
                return t5;
              }
              function a3(e4, t5) {
                return [e4, t5];
              }
            }
            function ie2() {
              return function() {
                function e3() {
                  this._map = new f2();
                }
                return Object.defineProperty(e3.prototype, "size", { get: function() {
                  return this._map.size;
                }, enumerable: true, configurable: true }), e3.prototype.has = function(e4) {
                  return this._map.has(e4);
                }, e3.prototype.add = function(e4) {
                  return this._map.set(e4, e4), this;
                }, e3.prototype.delete = function(e4) {
                  return this._map.delete(e4);
                }, e3.prototype.clear = function() {
                  this._map.clear();
                }, e3.prototype.keys = function() {
                  return this._map.keys();
                }, e3.prototype.values = function() {
                  return this._map.values();
                }, e3.prototype.entries = function() {
                  return this._map.entries();
                }, e3.prototype["@@iterator"] = function() {
                  return this.keys();
                }, e3.prototype[o2] = function() {
                  return this.keys();
                }, e3;
              }();
            }
            function oe2() {
              var e3 = 16, t4 = s2.create(), r3 = i3();
              return function() {
                function e4() {
                  this._key = i3();
                }
                return e4.prototype.has = function(e5) {
                  var t5 = o3(e5, false);
                  return t5 !== void 0 && s2.has(t5, this._key);
                }, e4.prototype.get = function(e5) {
                  var t5 = o3(e5, false);
                  return t5 !== void 0 ? s2.get(t5, this._key) : void 0;
                }, e4.prototype.set = function(e5, t5) {
                  var n3 = o3(e5, true);
                  return n3[this._key] = t5, this;
                }, e4.prototype.delete = function(e5) {
                  var t5 = o3(e5, false);
                  return t5 !== void 0 && delete t5[this._key];
                }, e4.prototype.clear = function() {
                  this._key = i3();
                }, e4;
              }();
              function i3() {
                var e4;
                do {
                  e4 = "@@WeakMap@@" + u3();
                } while (s2.has(t4, e4));
                return t4[e4] = true, e4;
              }
              function o3(e4, t5) {
                if (!n2.call(e4, r3)) {
                  if (!t5)
                    return;
                  Object.defineProperty(e4, r3, { value: s2.create() });
                }
                return e4[r3];
              }
              function a3(e4, t5) {
                for (var n3 = 0; n3 < t5; ++n3)
                  e4[n3] = 255 * Math.random() | 0;
                return e4;
              }
              function c3(e4) {
                return typeof Uint8Array === "function" ? typeof crypto !== "undefined" ? crypto.getRandomValues(new Uint8Array(e4)) : typeof msCrypto !== "undefined" ? msCrypto.getRandomValues(new Uint8Array(e4)) : a3(new Uint8Array(e4), e4) : a3(new Array(e4), e4);
              }
              function u3() {
                var t5 = c3(e3);
                t5[6] = 79 & t5[6] | 64, t5[8] = 191 & t5[8] | 128;
                for (var n3 = "", r4 = 0; r4 < e3; ++r4) {
                  var i4 = t5[r4];
                  r4 !== 4 && r4 !== 6 && r4 !== 8 || (n3 += "-"), i4 < 16 && (n3 += "0"), n3 += i4.toString(16).toLowerCase();
                }
                return n3;
              }
            }
            function ae2(e3) {
              return e3.__ = void 0, delete e3.__, e3;
            }
            t3("decorate", b2), t3("metadata", m2), t3("defineMetadata", g2), t3("hasMetadata", y2), t3("hasOwnMetadata", O2), t3("getMetadata", j2), t3("getOwnMetadata", w2), t3("getMetadataKeys", k2), t3("getOwnMetadataKeys", E2), t3("deleteMetadata", _2);
          });
        })(Reflect || (Reflect = {}));
        var A = { TaroElement: "TaroElement", TaroElementFactory: "Factory<TaroElement>", TaroText: "TaroText", TaroTextFactory: "Factory<TaroText>", TaroNodeImpl: "TaroNodeImpl", TaroElementImpl: "TaroElementImpl", InnerHTMLImpl: "InnerHTMLImpl", insertAdjacentHTMLImpl: "insertAdjacentHTMLImpl", getBoundingClientRectImpl: "getBoundingClientRectImpl", Hooks: "hooks", onRemoveAttribute: "onRemoveAttribute", getLifecycle: "getLifecycle", getPathIndex: "getPathIndex", getEventCenter: "getEventCenter", isBubbleEvents: "isBubbleEvents", getSpecialNodes: "getSpecialNodes", eventCenter: "eventCenter", modifyMpEvent: "modifyMpEvent", modifyTaroEvent: "modifyTaroEvent", batchedEventUpdates: "batchedEventUpdates", mergePageInstance: "mergePageInstance", createPullDownComponent: "createPullDownComponent", getDOMNode: "getDOMNode", initNativeApi: "initNativeApi", modifyHydrateData: "modifyHydrateData", modifySetAttrPayload: "modifySetAttrPayload", modifyRmAttrPayload: "modifyRmAttrPayload", onAddEvent: "onAddEvent", patchElement: "patchElement" }, x = "taro-app", I = "\u5C0F\u7A0B\u5E8F setData", N = "\u9875\u9762\u521D\u59CB\u5316", F = "root", B = "html", R = "head", L = "body", M = "app", D = "container", U = "#document", H = "id", $ = "uid", z = "class", q = "style", W = "focus", V = "view", Q = "static-view", G = "pure-view", J = "props", K = "dataset", Y = "object", Z = "value", X = "input", ee = "change", te = "custom-wrapper", ne = "target", re = "currentTarget", ie = "type", oe = "confirm", ae = "timeStamp", ce = "keyCode", ue = "touchmove", se = "Date", le = "setTimeout", de = "catchMove", fe = "catch-view", he = "comment", pe = function() {
          var e3 = 0;
          return function() {
            return (e3++).toString();
          };
        };
        function ve(e3) {
          return e3.nodeType === 1;
        }
        function be(e3) {
          return e3.nodeType === 3;
        }
        function me(e3) {
          return e3.nodeName === he;
        }
        function ge(e3) {
          var t2 = Object.keys(e3.props).find(function(e4) {
            return !(/^(class|style|id)$/.test(e4) || e4.startsWith("data-"));
          });
          return Boolean(t2);
        }
        function ye(e3, t2) {
          var n2, r2 = false;
          while ((e3 === null || e3 === void 0 ? void 0 : e3.parentElement) && e3.parentElement._path !== F) {
            if ((n2 = e3.parentElement.__handlers[t2]) === null || n2 === void 0 ? void 0 : n2.length) {
              r2 = true;
              break;
            }
            e3 = e3.parentElement;
          }
          return r2;
        }
        function Oe(e3) {
          switch (e3) {
            case q:
              return "st";
            case H:
              return $;
            case z:
              return "cl";
            default:
              return e3;
          }
        }
        var je = function() {
          function e3(t2) {
            Object(w["a"])(this, e3), this.__handlers = {}, this.hooks = t2;
          }
          return Object(k["a"])(e3, [{ key: "addEventListener", value: function(e4, t2, n2) {
            var r2, i2;
            if ((i2 = (r2 = this.hooks).onAddEvent) === null || i2 === void 0 || i2.call(r2, e4, t2, n2, this), e4 === "regionchange")
              return this.addEventListener("begin", t2, n2), void this.addEventListener("end", t2, n2);
            e4 = e4.toLowerCase();
            var o2 = this.__handlers[e4], a2 = (Boolean(n2), false);
            if (Object(_["isObject"])(n2) && (Boolean(n2.capture), a2 = Boolean(n2.once)), a2) {
              var c2 = function n3() {
                t2.apply(this, arguments), this.removeEventListener(e4, n3);
              };
              this.addEventListener(e4, c2, Object.assign(Object.assign({}, n2), { once: false }));
            } else
              Object(_["isArray"])(o2) ? o2.push(t2) : this.__handlers[e4] = [t2];
          } }, { key: "removeEventListener", value: function(e4, t2) {
            if (e4 = e4.toLowerCase(), t2 != null) {
              var n2 = this.__handlers[e4];
              if (Object(_["isArray"])(n2)) {
                var r2 = n2.indexOf(t2);
                n2.splice(r2, 1);
              }
            }
          } }, { key: "isAnyEventBinded", value: function() {
            var e4 = this.__handlers, t2 = Object.keys(e4).find(function(t3) {
              return e4[t3].length;
            });
            return Boolean(t2);
          } }]), e3;
        }();
        function we(e3) {
          var t2, n2, r2, i2, o2 = e3.nodeName;
          if (be(e3))
            return i2 = {}, Object(j["a"])(i2, "v", e3.nodeValue), Object(j["a"])(i2, "nn", o2), i2;
          var a2 = (t2 = {}, Object(j["a"])(t2, "nn", o2), Object(j["a"])(t2, "uid", e3.uid), t2), c2 = e3.props, u2 = e3.hooks.getSpecialNodes();
          for (var s2 in !e3.isAnyEventBinded() && u2.indexOf(o2) > -1 && (a2["nn"] = "static-".concat(o2), o2 !== V || ge(e3) || (a2["nn"] = G)), c2) {
            var l2 = Object(_["toCamelCase"])(s2);
            s2.startsWith("data-") || s2 === z || s2 === q || s2 === H || l2 === de || (a2[l2] = c2[s2]), o2 === V && l2 === de && c2[s2] !== false && (a2["nn"] = fe);
          }
          var d2 = e3.childNodes;
          return d2 = d2.filter(function(e4) {
            return !me(e4);
          }), d2.length > 0 ? a2["cn"] = d2.map(we) : a2["cn"] = [], e3.className !== "" && (a2["cl"] = e3.className), e3.cssText !== "" && o2 !== "swiper-item" && (a2["st"] = e3.cssText), (r2 = (n2 = e3.hooks).modifyHydrateData) === null || r2 === void 0 || r2.call(n2, a2), a2;
        }
        je = C([Object(E["d"])(), S(0, Object(E["c"])(A.Hooks)), P("design:paramtypes", [Object])], je);
        var ke, Te = new Map();
        (function(e3) {
          e3["Element"] = "Element", e3["Document"] = "Document", e3["RootElement"] = "RootElement", e3["FormElement"] = "FormElement";
        })(ke || (ke = {}));
        var Ee = pe(), _e = function(e3) {
          Object(y["a"])(n2, e3);
          var t2 = Object(O["a"])(n2);
          function n2(e4, r2, i2) {
            var o2;
            return Object(w["a"])(this, n2), o2 = t2.call(this, i2), o2.parentNode = null, o2.childNodes = [], o2.hydrate = function(e5) {
              return function() {
                return we(e5);
              };
            }, e4.bind(Object(g["a"])(o2)), o2._getElement = r2, o2.uid = "_n_".concat(Ee()), Te.set(o2.uid, Object(g["a"])(o2)), o2;
          }
          return Object(k["a"])(n2, [{ key: "_empty", value: function() {
            while (this.childNodes.length > 0) {
              var e4 = this.childNodes[0];
              e4.parentNode = null, Te.delete(e4.uid), this.childNodes.shift();
            }
          } }, { key: "_root", get: function() {
            var e4;
            return ((e4 = this.parentNode) === null || e4 === void 0 ? void 0 : e4._root) || null;
          } }, { key: "findIndex", value: function(e4) {
            var t3 = this.childNodes.indexOf(e4);
            return Object(_["ensure"])(t3 !== -1, "The node to be replaced is not a child of this node."), t3;
          } }, { key: "_path", get: function() {
            var e4 = this.parentNode;
            if (e4) {
              var t3 = e4.childNodes.filter(function(e5) {
                return !me(e5);
              }), n3 = t3.indexOf(this), r2 = this.hooks.getPathIndex(n3);
              return "".concat(e4._path, ".", "cn", ".").concat(r2);
            }
            return "";
          } }, { key: "nextSibling", get: function() {
            var e4 = this.parentNode;
            return (e4 === null || e4 === void 0 ? void 0 : e4.childNodes[e4.findIndex(this) + 1]) || null;
          } }, { key: "previousSibling", get: function() {
            var e4 = this.parentNode;
            return (e4 === null || e4 === void 0 ? void 0 : e4.childNodes[e4.findIndex(this) - 1]) || null;
          } }, { key: "parentElement", get: function() {
            var e4 = this.parentNode;
            return (e4 === null || e4 === void 0 ? void 0 : e4.nodeType) === 1 ? e4 : null;
          } }, { key: "firstChild", get: function() {
            return this.childNodes[0] || null;
          } }, { key: "lastChild", get: function() {
            var e4 = this.childNodes;
            return e4[e4.length - 1] || null;
          } }, { key: "textContent", set: function(e4) {
            if (this._empty(), e4 === "")
              this.enqueueUpdate({ path: "".concat(this._path, ".", "cn"), value: function() {
                return [];
              } });
            else {
              var t3 = this._getElement(ke.Document)();
              this.appendChild(t3.createTextNode(e4));
            }
          } }, { key: "insertBefore", value: function(e4, t3, n3) {
            var r2, i2 = this;
            if (e4.remove(), e4.parentNode = this, t3) {
              var o2 = this.findIndex(t3);
              this.childNodes.splice(o2, 0, e4), r2 = n3 ? { path: e4._path, value: this.hydrate(e4) } : { path: "".concat(this._path, ".", "cn"), value: function() {
                var e5 = i2.childNodes.filter(function(e6) {
                  return !me(e6);
                });
                return e5.map(we);
              } };
            } else
              this.childNodes.push(e4), r2 = { path: e4._path, value: this.hydrate(e4) };
            return this.enqueueUpdate(r2), Te.has(e4.uid) || Te.set(e4.uid, e4), e4;
          } }, { key: "appendChild", value: function(e4) {
            this.insertBefore(e4);
          } }, { key: "replaceChild", value: function(e4, t3) {
            if (t3.parentNode === this)
              return this.insertBefore(e4, t3, true), t3.remove(true), t3;
          } }, { key: "removeChild", value: function(e4, t3) {
            var n3 = this, r2 = this.findIndex(e4);
            return this.childNodes.splice(r2, 1), t3 || this.enqueueUpdate({ path: "".concat(this._path, ".", "cn"), value: function() {
              var e5 = n3.childNodes.filter(function(e6) {
                return !me(e6);
              });
              return e5.map(we);
            } }), e4.parentNode = null, Te.delete(e4.uid), e4;
          } }, { key: "remove", value: function(e4) {
            var t3;
            (t3 = this.parentNode) === null || t3 === void 0 || t3.removeChild(this, e4);
          } }, { key: "hasChildNodes", value: function() {
            return this.childNodes.length > 0;
          } }, { key: "enqueueUpdate", value: function(e4) {
            var t3;
            (t3 = this._root) === null || t3 === void 0 || t3.enqueueUpdate(e4);
          } }, { key: "cloneNode", value: function() {
            var e4, t3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], n3 = this._getElement(ke.Document)();
            for (var r2 in this.nodeType === 1 ? e4 = n3.createElement(this.nodeName) : this.nodeType === 3 && (e4 = n3.createTextNode("")), this) {
              var i2 = this[r2];
              [J, K].includes(r2) && Object(T["a"])(i2) === Y ? e4[r2] = Object.assign({}, i2) : r2 === "_value" ? e4[r2] = i2 : r2 === q && (e4.style._value = Object.assign({}, i2._value), e4.style._usedStyleProp = new Set(Array.from(i2._usedStyleProp)));
            }
            return t3 && (e4.childNodes = this.childNodes.map(function(e5) {
              return e5.cloneNode(true);
            })), e4;
          } }, { key: "contains", value: function(e4) {
            var t3 = false;
            return this.childNodes.some(function(n3) {
              var r2 = n3.uid;
              if (r2 === e4.uid || r2 === e4.id || n3.contains(e4))
                return t3 = true, true;
            }), t3;
          } }, { key: "ownerDocument", get: function() {
            var e4 = this._getElement(ke.Document)();
            return e4;
          } }]), n2;
        }(je);
        _e = C([Object(E["d"])(), S(0, Object(E["c"])(A.TaroNodeImpl)), S(1, Object(E["c"])(A.TaroElementFactory)), S(2, Object(E["c"])(A.Hooks)), P("design:paramtypes", [Function, Function, Function])], _e);
        var Ce = function(e3) {
          Object(y["a"])(n2, e3);
          var t2 = Object(O["a"])(n2);
          function n2(e4, r2, i2) {
            var o2;
            return Object(w["a"])(this, n2), o2 = t2.call(this, e4, r2, i2), o2.nodeType = 3, o2.nodeName = "#text", o2;
          }
          return Object(k["a"])(n2, [{ key: "textContent", get: function() {
            return this._value;
          }, set: function(e4) {
            this._value = e4, this.enqueueUpdate({ path: "".concat(this._path, ".", "v"), value: e4 });
          } }, { key: "nodeValue", get: function() {
            return this._value;
          }, set: function(e4) {
            this.textContent = e4;
          } }]), n2;
        }(_e);
        Ce = C([Object(E["d"])(), S(0, Object(E["c"])(A.TaroNodeImpl)), S(1, Object(E["c"])(A.TaroElementFactory)), S(2, Object(E["c"])(A.Hooks)), P("design:paramtypes", [Function, Function, Function])], Ce);
        var Se = ["all", "appearance", "blockOverflow", "blockSize", "bottom", "clear", "contain", "content", "continue", "cursor", "direction", "display", "filter", "float", "gap", "height", "inset", "isolation", "left", "letterSpacing", "lightingColor", "markerSide", "mixBlendMode", "opacity", "order", "position", "quotes", "resize", "right", "rowGap", "tabSize", "tableLayout", "top", "userSelect", "verticalAlign", "visibility", "voiceFamily", "volume", "whiteSpace", "widows", "width", "zIndex"];
        function Pe(e3, t2, n2) {
          !n2 && Se.push(e3), t2.forEach(function(t3) {
            Se.push(e3 + t3);
          });
        }
        var Ae = "Color", xe = "Style", Ie = "Width", Ne = "Image", Fe = "Size", Be = [Ae, xe, Ie], Re = ["FitLength", "FitWidth", Ne], Le = [].concat(Re, ["Radius"]), Me = [].concat(Be, Re), De = ["EndRadius", "StartRadius"], Ue = ["Bottom", "Left", "Right", "Top"], He = ["End", "Start"], $e = ["Content", "Items", "Self"], ze = ["BlockSize", "Height", "InlineSize", Ie], qe = ["After", "Before"];
        function We(e3, t2) {
          var n2 = this[t2];
          e3 && this._usedStyleProp.add(t2), n2 !== e3 && (this._value[t2] = e3, this._element.enqueueUpdate({ path: "".concat(this._element._path, ".", "st"), value: this.cssText }));
        }
        function Ve(e3) {
          for (var t2 = {}, n2 = function(e4) {
            var n3 = Se[e4];
            t2[n3] = { get: function() {
              return this._value[n3] || "";
            }, set: function(e5) {
              We.call(this, e5, n3);
            } };
          }, r2 = 0; r2 < Se.length; r2++)
            n2(r2);
          Object.defineProperties(e3.prototype, t2);
        }
        function Qe(e3) {
          return /^--/.test(e3);
        }
        Pe("borderBlock", Be), Pe("borderBlockEnd", Be), Pe("borderBlockStart", Be), Pe("outline", [].concat(Be, ["Offset"])), Pe("border", [].concat(Be, ["Boundary", "Break", "Collapse", "Radius", "Spacing"])), Pe("borderFit", ["Length", Ie]), Pe("borderInline", Be), Pe("borderInlineEnd", Be), Pe("borderInlineStart", Be), Pe("borderLeft", Me), Pe("borderRight", Me), Pe("borderTop", Me), Pe("borderBottom", Me), Pe("textDecoration", [Ae, xe, "Line"]), Pe("textEmphasis", [Ae, xe, "Position"]), Pe("scrollMargin", Ue), Pe("scrollPadding", Ue), Pe("padding", Ue), Pe("margin", [].concat(Ue, ["Trim"])), Pe("scrollMarginBlock", He), Pe("scrollMarginInline", He), Pe("scrollPaddingBlock", He), Pe("scrollPaddingInline", He), Pe("gridColumn", He), Pe("gridRow", He), Pe("insetBlock", He), Pe("insetInline", He), Pe("marginBlock", He), Pe("marginInline", He), Pe("paddingBlock", He), Pe("paddingInline", He), Pe("pause", qe), Pe("cue", qe), Pe("mask", ["Clip", "Composite", Ne, "Mode", "Origin", "Position", "Repeat", Fe, "Type"]), Pe("borderImage", ["Outset", "Repeat", "Slice", "Source", "Transform", Ie]), Pe("maskBorder", ["Mode", "Outset", "Repeat", "Slice", "Source", Ie]), Pe("font", ["Family", "FeatureSettings", "Kerning", "LanguageOverride", "MaxSize", "MinSize", "OpticalSizing", "Palette", Fe, "SizeAdjust", "Stretch", xe, "Weight", "VariationSettings"]), Pe("fontSynthesis", ["SmallCaps", xe, "Weight"]), Pe("transform", ["Box", "Origin", xe]), Pe("background", [Ae, Ne, "Attachment", "BlendMode", "Clip", "Origin", "Position", "Repeat", Fe]), Pe("listStyle", [Ne, "Position", "Type"]), Pe("scrollSnap", ["Align", "Stop", "Type"]), Pe("grid", ["Area", "AutoColumns", "AutoFlow", "AutoRows"]), Pe("gridTemplate", ["Areas", "Columns", "Rows"]), Pe("overflow", ["Block", "Inline", "Wrap", "X", "Y"]), Pe("transition", ["Delay", "Duration", "Property", "TimingFunction"]), Pe("lineStacking", ["Ruby", "Shift", "Strategy"]), Pe("color", ["Adjust", "InterpolationFilters", "Scheme"]), Pe("textAlign", ["All", "Last"]), Pe("page", ["BreakAfter", "BreakBefore", "BreakInside"]), Pe("speak", ["Header", "Numeral", "Punctuation"]), Pe("animation", ["Delay", "Direction", "Duration", "FillMode", "IterationCount", "Name", "PlayState", "TimingFunction"]), Pe("flex", ["Basis", "Direction", "Flow", "Grow", "Shrink", "Wrap"]), Pe("offset", [].concat(qe, He, ["Anchor", "Distance", "Path", "Position", "Rotate"])), Pe("fontVariant", ["Alternates", "Caps", "EastAsian", "Emoji", "Ligatures", "Numeric", "Position"]), Pe("perspective", ["Origin"]), Pe("pitch", ["Range"]), Pe("clip", ["Path", "Rule"]), Pe("flow", ["From", "Into"]), Pe("align", ["Content", "Items", "Self"], true), Pe("alignment", ["Adjust", "Baseline"], true), Pe("bookmark", ["Label", "Level", "State"], true), Pe("borderStart", De, true), Pe("borderEnd", De, true), Pe("borderCorner", ["Fit", Ne, "ImageTransform"], true), Pe("borderTopLeft", Le, true), Pe("borderTopRight", Le, true), Pe("borderBottomLeft", Le, true), Pe("borderBottomRight", Le, true), Pe("column", ["s", "Count", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "Span", Ie], true), Pe("break", [].concat(qe, ["Inside"]), true), Pe("wrap", [].concat(qe, ["Flow", "Inside", "Through"]), true), Pe("justify", $e, true), Pe("place", $e, true), Pe("max", [].concat(ze, ["Lines"]), true), Pe("min", ze, true), Pe("line", ["Break", "Clamp", "Grid", "Height", "Padding", "Snap"], true), Pe("inline", ["BoxAlign", Fe, "Sizing"], true), Pe("text", ["CombineUpright", "GroupAlign", "Height", "Indent", "Justify", "Orientation", "Overflow", "Shadow", "SpaceCollapse", "SpaceTrim", "Spacing", "Transform", "UnderlinePosition", "Wrap"], true), Pe("shape", ["ImageThreshold", "Inside", "Margin", "Outside"], true), Pe("word", ["Break", "Spacing", "Wrap"], true), Pe("nav", ["Down", "Left", "Right", "Up"], true), Pe("object", ["Fit", "Position"], true), Pe("box", ["DecorationBreak", "Shadow", "Sizing", "Snap"], true);
        var Ge = function() {
          function e3(t2) {
            Object(w["a"])(this, e3), this._element = t2, this._usedStyleProp = new Set(), this._value = {};
          }
          return Object(k["a"])(e3, [{ key: "setCssVariables", value: function(e4) {
            var t2 = this;
            this.hasOwnProperty(e4) || Object.defineProperty(this, e4, { enumerable: true, configurable: true, get: function() {
              return t2._value[e4] || "";
            }, set: function(n2) {
              We.call(t2, n2, e4);
            } });
          } }, { key: "cssText", get: function() {
            var e4 = this, t2 = "";
            return this._usedStyleProp.forEach(function(n2) {
              var r2 = e4[n2];
              if (r2) {
                var i2 = Qe(n2) ? n2 : Object(_["toDashed"])(n2);
                t2 += "".concat(i2, ": ").concat(r2, ";");
              }
            }), t2;
          }, set: function(e4) {
            var t2 = this;
            if (e4 == null && (e4 = ""), this._usedStyleProp.forEach(function(e5) {
              t2.removeProperty(e5);
            }), e4 !== "")
              for (var n2 = e4.split(";"), r2 = 0; r2 < n2.length; r2++) {
                var i2 = n2[r2].trim();
                if (i2 !== "") {
                  var o2 = i2.split(":"), a2 = Object(m["a"])(o2), c2 = a2[0], u2 = a2.slice(1), s2 = u2.join(":");
                  Object(_["isUndefined"])(s2) || this.setProperty(c2.trim(), s2.trim());
                }
              }
          } }, { key: "setProperty", value: function(e4, t2) {
            e4[0] === "-" ? this.setCssVariables(e4) : e4 = Object(_["toCamelCase"])(e4), Object(_["isUndefined"])(t2) || (t2 === null || t2 === "" ? this.removeProperty(e4) : this[e4] = t2);
          } }, { key: "removeProperty", value: function(e4) {
            if (e4 = Object(_["toCamelCase"])(e4), !this._usedStyleProp.has(e4))
              return "";
            var t2 = this[e4];
            return this[e4] = "", this._usedStyleProp.delete(e4), t2;
          } }, { key: "getPropertyValue", value: function(e4) {
            e4 = Object(_["toCamelCase"])(e4);
            var t2 = this[e4];
            return t2 || "";
          } }]), e3;
        }();
        function Je() {
          return true;
        }
        function Ke(e3, t2) {
          var n2 = [], r2 = t2 !== null && t2 !== void 0 ? t2 : Je, i2 = e3;
          while (i2)
            i2.nodeType === 1 && r2(i2) && n2.push(i2), i2 = Ye(i2, e3);
          return n2;
        }
        function Ye(e3, t2) {
          var n2 = e3.firstChild;
          if (n2)
            return n2;
          var r2 = e3;
          do {
            if (r2 === t2)
              return null;
            var i2 = r2.nextSibling;
            if (i2)
              return i2;
            r2 = r2.parentElement;
          } while (r2);
          return null;
        }
        Ve(Ge);
        var Ze = function(e3) {
          Object(y["a"])(n2, e3);
          var t2 = Object(O["a"])(n2);
          function n2(e4, r2) {
            var i2, o2;
            return Object(w["a"])(this, n2), o2 = t2.call(this), e4.trim().split(/\s+/).forEach(Object(p["a"])((i2 = Object(g["a"])(o2), Object(v["a"])(n2.prototype)), "add", i2).bind(Object(g["a"])(o2))), o2.el = r2, o2;
          }
          return Object(k["a"])(n2, [{ key: "value", get: function() {
            return Object(h["a"])(this).join(" ");
          } }, { key: "add", value: function(e4) {
            return Object(p["a"])(Object(v["a"])(n2.prototype), "add", this).call(this, e4), this._update(), this;
          } }, { key: "length", get: function() {
            return this.size;
          } }, { key: "remove", value: function(e4) {
            Object(p["a"])(Object(v["a"])(n2.prototype), "delete", this).call(this, e4), this._update();
          } }, { key: "toggle", value: function(e4) {
            Object(p["a"])(Object(v["a"])(n2.prototype), "has", this).call(this, e4) ? Object(p["a"])(Object(v["a"])(n2.prototype), "delete", this).call(this, e4) : Object(p["a"])(Object(v["a"])(n2.prototype), "add", this).call(this, e4), this._update();
          } }, { key: "replace", value: function(e4, t3) {
            Object(p["a"])(Object(v["a"])(n2.prototype), "delete", this).call(this, e4), Object(p["a"])(Object(v["a"])(n2.prototype), "add", this).call(this, t3), this._update();
          } }, { key: "contains", value: function(e4) {
            return Object(p["a"])(Object(v["a"])(n2.prototype), "has", this).call(this, e4);
          } }, { key: "toString", value: function() {
            return this.value;
          } }, { key: "_update", value: function() {
            this.el.className = this.value;
          } }]), n2;
        }(Object(b["a"])(Set)), Xe = function(e3) {
          Object(y["a"])(n2, e3);
          var t2 = Object(O["a"])(n2);
          function n2(e4, r2, i2, o2) {
            var a2;
            return Object(w["a"])(this, n2), a2 = t2.call(this, e4, r2, i2), a2.props = {}, a2.dataset = _["EMPTY_OBJ"], o2.bind(Object(g["a"])(a2)), a2.nodeType = 1, a2.style = new Ge(Object(g["a"])(a2)), i2.patchElement(Object(g["a"])(a2)), a2;
          }
          return Object(k["a"])(n2, [{ key: "_stopPropagation", value: function(e4) {
            var t3 = this;
            while (t3 = t3.parentNode) {
              var n3 = t3.__handlers[e4.type];
              if (Object(_["isArray"])(n3))
                for (var r2 = n3.length; r2--; ) {
                  var i2 = n3[r2];
                  i2._stop = true;
                }
            }
          } }, { key: "id", get: function() {
            return this.getAttribute(H);
          }, set: function(e4) {
            this.setAttribute(H, e4);
          } }, { key: "className", get: function() {
            return this.getAttribute(z) || "";
          }, set: function(e4) {
            this.setAttribute(z, e4);
          } }, { key: "cssText", get: function() {
            return this.getAttribute(q) || "";
          } }, { key: "classList", get: function() {
            return new Ze(this.className, this);
          } }, { key: "children", get: function() {
            return this.childNodes.filter(ve);
          } }, { key: "attributes", get: function() {
            var e4 = this.props, t3 = Object.keys(e4), n3 = this.style.cssText, r2 = t3.map(function(t4) {
              return { name: t4, value: e4[t4] };
            });
            return r2.concat(n3 ? { name: q, value: n3 } : []);
          } }, { key: "textContent", get: function() {
            for (var e4 = "", t3 = this.childNodes, n3 = 0; n3 < t3.length; n3++)
              e4 += t3[n3].textContent;
            return e4;
          }, set: function(e4) {
            Object(f["a"])(Object(v["a"])(n2.prototype), "textContent", e4, this, true);
          } }, { key: "hasAttribute", value: function(e4) {
            return !Object(_["isUndefined"])(this.props[e4]);
          } }, { key: "hasAttributes", value: function() {
            return this.attributes.length > 0;
          } }, { key: "focus", value: function() {
            this.setAttribute(W, true);
          } }, { key: "blur", value: function() {
            this.setAttribute(W, false);
          } }, { key: "setAttribute", value: function(e4, t3) {
            var n3, r2, i2 = this.nodeName === V && !ge(this) && !this.isAnyEventBinded();
            switch (e4) {
              case q:
                this.style.cssText = t3;
                break;
              case H:
                Te.delete(this.uid), t3 = String(t3), this.props[e4] = this.uid = t3, Te.set(t3, this);
                break;
              default:
                this.props[e4] = t3, e4.startsWith("data-") && (this.dataset === _["EMPTY_OBJ"] && (this.dataset = Object.create(null)), this.dataset[Object(_["toCamelCase"])(e4.replace(/^data-/, ""))] = t3);
                break;
            }
            e4 = Oe(e4);
            var o2 = { path: "".concat(this._path, ".").concat(Object(_["toCamelCase"])(e4)), value: t3 };
            (r2 = (n3 = this.hooks).modifySetAttrPayload) === null || r2 === void 0 || r2.call(n3, this, e4, o2), this.enqueueUpdate(o2), this.nodeName === V && (Object(_["toCamelCase"])(e4) === de ? this.enqueueUpdate({ path: "".concat(this._path, ".", "nn"), value: t3 ? fe : this.isAnyEventBinded() ? V : Q }) : i2 && ge(this) && this.enqueueUpdate({ path: "".concat(this._path, ".", "nn"), value: Q }));
          } }, { key: "removeAttribute", value: function(e4) {
            var t3, n3, r2, i2, o2 = this.nodeName === V && ge(this) && !this.isAnyEventBinded();
            if (e4 === q)
              this.style.cssText = "";
            else {
              var a2 = (n3 = (t3 = this.hooks).onRemoveAttribute) === null || n3 === void 0 ? void 0 : n3.call(t3, this, e4);
              if (a2)
                return;
              if (!this.props.hasOwnProperty(e4))
                return;
              delete this.props[e4];
            }
            e4 = Oe(e4);
            var c2 = { path: "".concat(this._path, ".").concat(Object(_["toCamelCase"])(e4)), value: "" };
            (i2 = (r2 = this.hooks).modifyRmAttrPayload) === null || i2 === void 0 || i2.call(r2, this, e4, c2), this.enqueueUpdate(c2), this.nodeName === V && (Object(_["toCamelCase"])(e4) === de ? this.enqueueUpdate({ path: "".concat(this._path, ".", "nn"), value: this.isAnyEventBinded() ? V : ge(this) ? Q : G }) : o2 && !ge(this) && this.enqueueUpdate({ path: "".concat(this._path, ".", "nn"), value: G }));
          } }, { key: "getAttribute", value: function(e4) {
            var t3 = e4 === q ? this.style.cssText : this.props[e4];
            return t3 !== null && t3 !== void 0 ? t3 : "";
          } }, { key: "getElementsByTagName", value: function(e4) {
            var t3 = this;
            return Ke(this, function(n3) {
              return n3.nodeName === e4 || e4 === "*" && t3 !== n3;
            });
          } }, { key: "getElementsByClassName", value: function(e4) {
            return Ke(this, function(t3) {
              var n3 = t3.classList, r2 = e4.trim().split(/\s+/);
              return r2.every(function(e5) {
                return n3.has(e5);
              });
            });
          } }, { key: "dispatchEvent", value: function(e4) {
            var t3 = e4.cancelable, n3 = this.__handlers[e4.type];
            if (!Object(_["isArray"])(n3))
              return false;
            for (var r2 = n3.length; r2--; ) {
              var i2 = n3[r2], o2 = void 0;
              if (i2._stop ? i2._stop = false : o2 = i2.call(this, e4), (o2 === false || e4._end) && t3 && (e4.defaultPrevented = true), e4._end && e4._stop)
                break;
            }
            return e4._stop ? this._stopPropagation(e4) : e4._stop = true, n3 != null;
          } }, { key: "addEventListener", value: function(e4, t3, r2) {
            var i2 = this.nodeName, o2 = this.hooks.getSpecialNodes();
            !this.isAnyEventBinded() && o2.indexOf(i2) > -1 && this.enqueueUpdate({ path: "".concat(this._path, ".", "nn"), value: i2 }), Object(p["a"])(Object(v["a"])(n2.prototype), "addEventListener", this).call(this, e4, t3, r2);
          } }, { key: "removeEventListener", value: function(e4, t3) {
            Object(p["a"])(Object(v["a"])(n2.prototype), "removeEventListener", this).call(this, e4, t3);
            var r2 = this.nodeName, i2 = this.hooks.getSpecialNodes();
            !this.isAnyEventBinded() && i2.indexOf(r2) > -1 && this.enqueueUpdate({ path: "".concat(this._path, ".", "nn"), value: ge(this) ? "static-".concat(r2) : "pure-".concat(r2) });
          } }]), n2;
        }(_e);
        Xe = C([Object(E["d"])(), S(0, Object(E["c"])(A.TaroNodeImpl)), S(1, Object(E["c"])(A.TaroElementFactory)), S(2, Object(E["c"])(A.Hooks)), S(3, Object(E["c"])(A.TaroElementImpl)), P("design:paramtypes", [Function, Function, Function, Function])], Xe);
        var et = Array.isArray, tt2 = (typeof r === "undefined" ? "undefined" : Object(T["a"])(r)) == "object" && r && r.Object === Object && r, nt = (typeof self === "undefined" ? "undefined" : Object(T["a"])(self)) == "object" && self && self.Object === Object && self, rt = tt2 || nt || Function("return this")(), it = rt.Symbol, ot = Object.prototype, at = ot.hasOwnProperty, ct = ot.toString, ut = it ? it.toStringTag : void 0;
        function st(e3) {
          var t2 = at.call(e3, ut), n2 = e3[ut];
          try {
            e3[ut] = void 0;
            var r2 = true;
          } catch (e4) {
          }
          var i2 = ct.call(e3);
          return r2 && (t2 ? e3[ut] = n2 : delete e3[ut]), i2;
        }
        var lt = Object.prototype, dt = lt.toString;
        function ft(e3) {
          return dt.call(e3);
        }
        var ht = "[object Null]", pt = "[object Undefined]", vt = it ? it.toStringTag : void 0;
        function bt(e3) {
          return e3 == null ? e3 === void 0 ? pt : ht : vt && vt in Object(e3) ? st(e3) : ft(e3);
        }
        function mt(e3) {
          return e3 != null && Object(T["a"])(e3) == "object";
        }
        var gt = "[object Symbol]";
        function yt(e3) {
          return Object(T["a"])(e3) == "symbol" || mt(e3) && bt(e3) == gt;
        }
        var Ot = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, jt = /^\w*$/;
        function wt(e3, t2) {
          if (et(e3))
            return false;
          var n2 = Object(T["a"])(e3);
          return !(n2 != "number" && n2 != "symbol" && n2 != "boolean" && e3 != null && !yt(e3)) || (jt.test(e3) || !Ot.test(e3) || t2 != null && e3 in Object(t2));
        }
        function kt(e3) {
          var t2 = Object(T["a"])(e3);
          return e3 != null && (t2 == "object" || t2 == "function");
        }
        var Tt = "[object AsyncFunction]", Et = "[object Function]", _t = "[object GeneratorFunction]", Ct = "[object Proxy]";
        function St(e3) {
          if (!kt(e3))
            return false;
          var t2 = bt(e3);
          return t2 == Et || t2 == _t || t2 == Tt || t2 == Ct;
        }
        var Pt = rt["__core-js_shared__"], At = function() {
          var e3 = /[^.]+$/.exec(Pt && Pt.keys && Pt.keys.IE_PROTO || "");
          return e3 ? "Symbol(src)_1." + e3 : "";
        }();
        function xt(e3) {
          return !!At && At in e3;
        }
        var It = Function.prototype, Nt = It.toString;
        function Ft(e3) {
          if (e3 != null) {
            try {
              return Nt.call(e3);
            } catch (e4) {
            }
            try {
              return e3 + "";
            } catch (e4) {
            }
          }
          return "";
        }
        var Bt = /[\\^$.*+?()[\]{}|]/g, Rt = /^\[object .+?Constructor\]$/, Lt = Function.prototype, Mt = Object.prototype, Dt = Lt.toString, Ut = Mt.hasOwnProperty, Ht = RegExp("^" + Dt.call(Ut).replace(Bt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        function $t(e3) {
          if (!kt(e3) || xt(e3))
            return false;
          var t2 = St(e3) ? Ht : Rt;
          return t2.test(Ft(e3));
        }
        function zt(e3, t2) {
          return e3 == null ? void 0 : e3[t2];
        }
        function qt(e3, t2) {
          var n2 = zt(e3, t2);
          return $t(n2) ? n2 : void 0;
        }
        var Wt = qt(Object, "create");
        function Vt() {
          this.__data__ = Wt ? Wt(null) : {}, this.size = 0;
        }
        function Qt(e3) {
          var t2 = this.has(e3) && delete this.__data__[e3];
          return this.size -= t2 ? 1 : 0, t2;
        }
        var Gt = "__lodash_hash_undefined__", Jt = Object.prototype, Kt = Jt.hasOwnProperty;
        function Yt(e3) {
          var t2 = this.__data__;
          if (Wt) {
            var n2 = t2[e3];
            return n2 === Gt ? void 0 : n2;
          }
          return Kt.call(t2, e3) ? t2[e3] : void 0;
        }
        var Zt = Object.prototype, Xt = Zt.hasOwnProperty;
        function en(e3) {
          var t2 = this.__data__;
          return Wt ? t2[e3] !== void 0 : Xt.call(t2, e3);
        }
        var tn = "__lodash_hash_undefined__";
        function nn(e3, t2) {
          var n2 = this.__data__;
          return this.size += this.has(e3) ? 0 : 1, n2[e3] = Wt && t2 === void 0 ? tn : t2, this;
        }
        function rn(e3) {
          var t2 = -1, n2 = e3 == null ? 0 : e3.length;
          this.clear();
          while (++t2 < n2) {
            var r2 = e3[t2];
            this.set(r2[0], r2[1]);
          }
        }
        function on() {
          this.__data__ = [], this.size = 0;
        }
        function an(e3, t2) {
          return e3 === t2 || e3 !== e3 && t2 !== t2;
        }
        function cn(e3, t2) {
          var n2 = e3.length;
          while (n2--)
            if (an(e3[n2][0], t2))
              return n2;
          return -1;
        }
        rn.prototype.clear = Vt, rn.prototype["delete"] = Qt, rn.prototype.get = Yt, rn.prototype.has = en, rn.prototype.set = nn;
        var un = Array.prototype, sn = un.splice;
        function ln(e3) {
          var t2 = this.__data__, n2 = cn(t2, e3);
          if (n2 < 0)
            return false;
          var r2 = t2.length - 1;
          return n2 == r2 ? t2.pop() : sn.call(t2, n2, 1), --this.size, true;
        }
        function dn(e3) {
          var t2 = this.__data__, n2 = cn(t2, e3);
          return n2 < 0 ? void 0 : t2[n2][1];
        }
        function fn(e3) {
          return cn(this.__data__, e3) > -1;
        }
        function hn(e3, t2) {
          var n2 = this.__data__, r2 = cn(n2, e3);
          return r2 < 0 ? (++this.size, n2.push([e3, t2])) : n2[r2][1] = t2, this;
        }
        function pn(e3) {
          var t2 = -1, n2 = e3 == null ? 0 : e3.length;
          this.clear();
          while (++t2 < n2) {
            var r2 = e3[t2];
            this.set(r2[0], r2[1]);
          }
        }
        pn.prototype.clear = on, pn.prototype["delete"] = ln, pn.prototype.get = dn, pn.prototype.has = fn, pn.prototype.set = hn;
        var vn = qt(rt, "Map");
        function bn() {
          this.size = 0, this.__data__ = { hash: new rn(), map: new (vn || pn)(), string: new rn() };
        }
        function mn(e3) {
          var t2 = Object(T["a"])(e3);
          return t2 == "string" || t2 == "number" || t2 == "symbol" || t2 == "boolean" ? e3 !== "__proto__" : e3 === null;
        }
        function gn(e3, t2) {
          var n2 = e3.__data__;
          return mn(t2) ? n2[typeof t2 == "string" ? "string" : "hash"] : n2.map;
        }
        function yn(e3) {
          var t2 = gn(this, e3)["delete"](e3);
          return this.size -= t2 ? 1 : 0, t2;
        }
        function On(e3) {
          return gn(this, e3).get(e3);
        }
        function jn(e3) {
          return gn(this, e3).has(e3);
        }
        function wn(e3, t2) {
          var n2 = gn(this, e3), r2 = n2.size;
          return n2.set(e3, t2), this.size += n2.size == r2 ? 0 : 1, this;
        }
        function kn(e3) {
          var t2 = -1, n2 = e3 == null ? 0 : e3.length;
          this.clear();
          while (++t2 < n2) {
            var r2 = e3[t2];
            this.set(r2[0], r2[1]);
          }
        }
        kn.prototype.clear = bn, kn.prototype["delete"] = yn, kn.prototype.get = On, kn.prototype.has = jn, kn.prototype.set = wn;
        var Tn = "Expected a function";
        function En(e3, t2) {
          if (typeof e3 != "function" || t2 != null && typeof t2 != "function")
            throw new TypeError(Tn);
          var n2 = function n3() {
            var r2 = arguments, i2 = t2 ? t2.apply(this, r2) : r2[0], o2 = n3.cache;
            if (o2.has(i2))
              return o2.get(i2);
            var a2 = e3.apply(this, r2);
            return n3.cache = o2.set(i2, a2) || o2, a2;
          };
          return n2.cache = new (En.Cache || kn)(), n2;
        }
        En.Cache = kn;
        var _n = 500;
        function Cn(e3) {
          var t2 = En(e3, function(e4) {
            return n2.size === _n && n2.clear(), e4;
          }), n2 = t2.cache;
          return t2;
        }
        var Sn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Pn = /\\(\\)?/g, An = Cn(function(e3) {
          var t2 = [];
          return e3.charCodeAt(0) === 46 && t2.push(""), e3.replace(Sn, function(e4, n2, r2, i2) {
            t2.push(r2 ? i2.replace(Pn, "$1") : n2 || e4);
          }), t2;
        });
        function xn(e3, t2) {
          var n2 = -1, r2 = e3 == null ? 0 : e3.length, i2 = Array(r2);
          while (++n2 < r2)
            i2[n2] = t2(e3[n2], n2, e3);
          return i2;
        }
        var In = 1 / 0, Nn = it ? it.prototype : void 0, Fn = Nn ? Nn.toString : void 0;
        function Bn(e3) {
          if (typeof e3 == "string")
            return e3;
          if (et(e3))
            return xn(e3, Bn) + "";
          if (yt(e3))
            return Fn ? Fn.call(e3) : "";
          var t2 = e3 + "";
          return t2 == "0" && 1 / e3 == -In ? "-0" : t2;
        }
        function Rn(e3) {
          return e3 == null ? "" : Bn(e3);
        }
        function Ln(e3, t2) {
          return et(e3) ? e3 : wt(e3, t2) ? [e3] : An(Rn(e3));
        }
        var Mn = 1 / 0;
        function Dn(e3) {
          if (typeof e3 == "string" || yt(e3))
            return e3;
          var t2 = e3 + "";
          return t2 == "0" && 1 / e3 == -Mn ? "-0" : t2;
        }
        function Un(e3, t2) {
          t2 = Ln(t2, e3);
          var n2 = 0, r2 = t2.length;
          while (e3 != null && n2 < r2)
            e3 = e3[Dn(t2[n2++])];
          return n2 && n2 == r2 ? e3 : void 0;
        }
        function Hn(e3, t2, n2) {
          var r2 = e3 == null ? void 0 : Un(e3, t2);
          return r2 === void 0 ? n2 : r2;
        }
        var $n = { prerender: true, debug: false }, zn = function() {
          function e3() {
            Object(w["a"])(this, e3), this.recorder = new Map();
          }
          return Object(k["a"])(e3, [{ key: "start", value: function(e4) {
            $n.debug && this.recorder.set(e4, Date.now());
          } }, { key: "stop", value: function(e4) {
            if ($n.debug) {
              var t2 = Date.now(), n2 = this.recorder.get(e4), r2 = t2 - n2;
              console.log("".concat(e4, " \u65F6\u957F\uFF1A ").concat(r2, "ms"));
            }
          } }]), e3;
        }(), qn = new zn(), Wn = pe(), Vn = function(e3) {
          Object(y["a"])(n2, e3);
          var t2 = Object(O["a"])(n2);
          function n2(e4, r2, i2, o2, a2) {
            var c2;
            return Object(w["a"])(this, n2), c2 = t2.call(this, e4, r2, i2, o2), c2.pendingUpdate = false, c2.pendingFlush = false, c2.updatePayloads = [], c2.updateCallbacks = [], c2.ctx = null, c2.nodeName = F, c2.eventCenter = a2, c2;
          }
          return Object(k["a"])(n2, [{ key: "_path", get: function() {
            return F;
          } }, { key: "_root", get: function() {
            return this;
          } }, { key: "enqueueUpdate", value: function(e4) {
            this.updatePayloads.push(e4), this.pendingUpdate || this.ctx === null || this.performUpdate();
          } }, { key: "performUpdate", value: function() {
            var e4 = this, t3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], n3 = arguments.length > 1 ? arguments[1] : void 0;
            this.pendingUpdate = true;
            var r2 = this.ctx;
            setTimeout(function() {
              qn.start(I);
              var i2 = Object.create(null), o2 = new Set(t3 ? ["root.cn.[0]", "root.cn[0]"] : []);
              while (e4.updatePayloads.length > 0) {
                var a2 = e4.updatePayloads.shift(), c2 = a2.path, u2 = a2.value;
                c2.endsWith("cn") && o2.add(c2), i2[c2] = u2;
              }
              var s2 = function(e5) {
                o2.forEach(function(t5) {
                  e5.includes(t5) && e5 !== t5 && delete i2[e5];
                });
                var t4 = i2[e5];
                Object(_["isFunction"])(t4) && (i2[e5] = t4());
              };
              for (var l2 in i2)
                s2(l2);
              if (Object(_["isFunction"])(n3))
                n3(i2);
              else {
                e4.pendingUpdate = false;
                var d2 = [], f2 = {};
                if (!t3)
                  for (var h2 in i2) {
                    for (var p2 = h2.split("."), v2 = false, b2 = p2.length; b2 > 0; b2--) {
                      var m2 = p2.slice(0, b2).join("."), g2 = Hn(r2.__data__ || r2.data, m2);
                      if (g2 && g2.nn && g2.nn === te) {
                        var y2 = g2.uid, O2 = r2.selectComponent("#".concat(y2)), w2 = p2.slice(b2).join(".");
                        O2 && (v2 = true, d2.push({ ctx: r2.selectComponent("#".concat(y2)), data: Object(j["a"])({}, "i.".concat(w2), i2[h2]) }));
                        break;
                      }
                    }
                    v2 || (f2[h2] = i2[h2]);
                  }
                var k2 = d2.length;
                if (k2) {
                  var T2 = "".concat(e4._path, "_update_").concat(Wn()), E2 = e4.eventCenter, C2 = 0;
                  E2.once(T2, function() {
                    C2++, C2 === k2 + 1 && (qn.stop(I), e4.pendingFlush || e4.flushUpdateCallback(), t3 && qn.stop(N));
                  }, E2), d2.forEach(function(e5) {
                    e5.ctx.setData(e5.data, function() {
                      E2.trigger(T2);
                    });
                  }), Object.keys(f2).length && r2.setData(f2, function() {
                    E2.trigger(T2);
                  });
                } else
                  r2.setData(i2, function() {
                    qn.stop(I), e4.pendingFlush || e4.flushUpdateCallback(), t3 && qn.stop(N);
                  });
              }
            }, 0);
          } }, { key: "enqueueUpdateCallback", value: function(e4, t3) {
            this.updateCallbacks.push(function() {
              t3 ? e4.call(t3) : e4();
            });
          } }, { key: "flushUpdateCallback", value: function() {
            this.pendingFlush = false;
            var e4 = this.updateCallbacks.slice(0);
            this.updateCallbacks.length = 0;
            for (var t3 = 0; t3 < e4.length; t3++)
              e4[t3]();
          } }]), n2;
        }(Xe);
        Vn = C([Object(E["d"])(), S(0, Object(E["c"])(A.TaroNodeImpl)), S(1, Object(E["c"])(A.TaroElementFactory)), S(2, Object(E["c"])(A.Hooks)), S(3, Object(E["c"])(A.TaroElementImpl)), S(4, Object(E["c"])(A.eventCenter)), P("design:paramtypes", [Function, Function, Function, Function, Function])], Vn);
        var Qn = function(e3) {
          Object(y["a"])(n2, e3);
          var t2 = Object(O["a"])(n2);
          function n2() {
            return Object(w["a"])(this, n2), t2.apply(this, arguments);
          }
          return Object(k["a"])(n2, [{ key: "value", get: function() {
            var e4 = this.props[Z];
            return e4 == null ? "" : e4;
          }, set: function(e4) {
            this.setAttribute(Z, e4);
          } }, { key: "dispatchEvent", value: function(e4) {
            if (e4.mpEvent) {
              var t3 = e4.mpEvent.detail.value;
              e4.type === ee ? this.props.value = t3 : e4.type === X && (this.value = t3);
            }
            return Object(p["a"])(Object(v["a"])(n2.prototype), "dispatchEvent", this).call(this, e4);
          } }]), n2;
        }(Xe), Gn = function() {
          function e3(t2, n2, r2) {
            Object(w["a"])(this, e3), this.getDoc = function() {
              return t2(ke.Document)();
            }, this.innerHTMLImpl = n2, this.adjacentImpl = r2;
          }
          return Object(k["a"])(e3, [{ key: "bind", value: function(e4) {
            this.ctx = e4, this.bindInnerHTML(), this.bindAdjacentHTML();
          } }, { key: "bindInnerHTML", value: function() {
            var e4 = this.ctx, t2 = this.innerHTMLImpl, n2 = this.getDoc;
            Object.defineProperty(e4, "innerHTML", { configurable: true, enumerable: true, set: function(r2) {
              Object(_["isFunction"])(t2) && t2.call(e4, e4, r2, n2);
            }, get: function() {
              return "";
            } });
          } }, { key: "bindAdjacentHTML", value: function() {
            var e4 = this.ctx, t2 = this.adjacentImpl, n2 = this.getDoc;
            e4.insertAdjacentHTML = function(r2, i2) {
              Object(_["isFunction"])(t2) && t2.call(e4, r2, i2, n2);
            };
          } }]), e3;
        }();
        Gn = C([Object(E["d"])(), S(0, Object(E["c"])(A.TaroElementFactory)), S(1, Object(E["c"])(A.InnerHTMLImpl)), S(1, Object(E["f"])()), S(2, Object(E["c"])(A.insertAdjacentHTMLImpl)), S(2, Object(E["f"])()), P("design:paramtypes", [Function, Function, Function])], Gn);
        var Jn = function() {
          function e3(t2) {
            Object(w["a"])(this, e3), this.rectImpl = t2;
          }
          return Object(k["a"])(e3, [{ key: "bind", value: function(e4) {
            this.bindRect(e4);
          } }, { key: "bindRect", value: function(e4) {
            var t2 = this.rectImpl;
            e4.getBoundingClientRect = Object(d["a"])(l.a.mark(function n2() {
              var r2, i2, o2, a2 = arguments;
              return l.a.wrap(function(n3) {
                while (1)
                  switch (n3.prev = n3.next) {
                    case 0:
                      if (!Object(_["isFunction"])(t2)) {
                        n3.next = 5;
                        break;
                      }
                      for (r2 = a2.length, i2 = new Array(r2), o2 = 0; o2 < r2; o2++)
                        i2[o2] = a2[o2];
                      return n3.next = 4, t2.apply(e4, i2);
                    case 4:
                      return n3.abrupt("return", n3.sent);
                    case 5:
                      return n3.abrupt("return", Promise.resolve(null));
                    case 7:
                    case "end":
                      return n3.stop();
                  }
              }, n2);
            }));
          } }]), e3;
        }();
        Jn = C([Object(E["d"])(), S(0, Object(E["c"])(A.getBoundingClientRectImpl)), S(0, Object(E["f"])()), P("design:paramtypes", [Object])], Jn);
        var Kn = function(e3) {
          Object(y["a"])(n2, e3);
          var t2 = Object(O["a"])(n2);
          function n2(e4, r2, i2, o2, a2) {
            var c2;
            return Object(w["a"])(this, n2), c2 = t2.call(this, e4, r2, i2, o2), c2._getText = a2, c2.nodeType = 9, c2.nodeName = U, c2;
          }
          return Object(k["a"])(n2, [{ key: "createElement", value: function(e4) {
            return e4 === F ? this._getElement(ke.RootElement)() : _["controlledComponent"].has(e4) ? this._getElement(ke.FormElement)(e4) : this._getElement(ke.Element)(e4);
          } }, { key: "createElementNS", value: function(e4, t3) {
            return this.createElement(t3);
          } }, { key: "createTextNode", value: function(e4) {
            return this._getText(e4);
          } }, { key: "getElementById", value: function(e4) {
            var t3 = Te.get(e4);
            return Object(_["isUndefined"])(t3) ? null : t3;
          } }, { key: "querySelector", value: function(e4) {
            return /^#/.test(e4) ? this.getElementById(e4.slice(1)) : null;
          } }, { key: "querySelectorAll", value: function() {
            return [];
          } }, { key: "createComment", value: function() {
            var e4 = this._getText("");
            return e4.nodeName = he, e4;
          } }]), n2;
        }(Xe);
        function Yn() {
          return { index: 0, column: 0, line: 0 };
        }
        function Zn(e3, t2, n2) {
          for (var r2 = e3.index, i2 = e3.index = r2 + n2, o2 = r2; o2 < i2; o2++) {
            var a2 = t2.charAt(o2);
            a2 === "\n" ? (e3.line++, e3.column = 0) : e3.column++;
          }
        }
        function Xn(e3, t2, n2) {
          var r2 = n2 - e3.index;
          return Zn(e3, t2, r2);
        }
        function er(e3) {
          return { index: e3.index, line: e3.line, column: e3.column };
        }
        Kn = C([Object(E["d"])(), S(0, Object(E["c"])(A.TaroNodeImpl)), S(1, Object(E["c"])(A.TaroElementFactory)), S(2, Object(E["c"])(A.Hooks)), S(3, Object(E["c"])(A.TaroElementImpl)), S(4, Object(E["c"])(A.TaroTextFactory)), P("design:paramtypes", [Function, Function, Function, Function, Function])], Kn);
        var tr = /\s/;
        function nr(e3) {
          return tr.test(e3);
        }
        var rr = /=/;
        function ir(e3) {
          return rr.test(e3);
        }
        function or(e3) {
          var t2 = e3.toLowerCase();
          return !!$n.html.skipElements.has(t2);
        }
        var ar = /[A-Za-z0-9]/;
        function cr(e3, t2) {
          while (1) {
            var n2 = e3.indexOf("<", t2);
            if (n2 === -1)
              return n2;
            var r2 = e3.charAt(n2 + 1);
            if (r2 === "/" || r2 === "!" || ar.test(r2))
              return n2;
            t2 = n2 + 1;
          }
        }
        function ur(e3, t2, n2) {
          if (!nr(n2.charAt(e3)))
            return false;
          for (var r2 = n2.length, i2 = e3 - 1; i2 > t2; i2--) {
            var o2 = n2.charAt(i2);
            if (!nr(o2)) {
              if (ir(o2))
                return false;
              break;
            }
          }
          for (var a2 = e3 + 1; a2 < r2; a2++) {
            var c2 = n2.charAt(a2);
            if (!nr(c2))
              return !ir(c2);
          }
        }
        var sr = function() {
          function e3(t2) {
            Object(w["a"])(this, e3), this.tokens = [], this.position = Yn(), this.html = t2;
          }
          return Object(k["a"])(e3, [{ key: "scan", value: function() {
            var e4 = this.html, t2 = this.position, n2 = e4.length;
            while (t2.index < n2) {
              var r2 = t2.index;
              if (this.scanText(), t2.index === r2) {
                var i2 = e4.startsWith("!--", r2 + 1);
                if (i2)
                  this.scanComment();
                else {
                  var o2 = this.scanTag();
                  or(o2) && this.scanSkipTag(o2);
                }
              }
            }
            return this.tokens;
          } }, { key: "scanText", value: function() {
            var e4 = "text", t2 = this.html, n2 = this.position, r2 = cr(t2, n2.index);
            if (r2 !== n2.index) {
              r2 === -1 && (r2 = t2.length);
              var i2 = er(n2), o2 = t2.slice(n2.index, r2);
              Xn(n2, t2, r2);
              var a2 = er(n2);
              this.tokens.push({ type: e4, content: o2, position: { start: i2, end: a2 } });
            }
          } }, { key: "scanComment", value: function() {
            var e4 = "comment", t2 = this.html, n2 = this.position, r2 = er(n2);
            Zn(n2, t2, 4);
            var i2 = t2.indexOf("-->", n2.index), o2 = i2 + 3;
            i2 === -1 && (i2 = o2 = t2.length);
            var a2 = t2.slice(n2.index, i2);
            Xn(n2, t2, o2), this.tokens.push({ type: e4, content: a2, position: { start: r2, end: er(n2) } });
          } }, { key: "scanTag", value: function() {
            this.scanTagStart();
            var e4 = this.scanTagName();
            return this.scanAttrs(), this.scanTagEnd(), e4;
          } }, { key: "scanTagStart", value: function() {
            var e4 = "tag-start", t2 = this.html, n2 = this.position, r2 = t2.charAt(n2.index + 1), i2 = r2 === "/", o2 = er(n2);
            Zn(n2, t2, i2 ? 2 : 1), this.tokens.push({ type: e4, close: i2, position: { start: o2 } });
          } }, { key: "scanTagEnd", value: function() {
            var e4 = "tag-end", t2 = this.html, n2 = this.position, r2 = t2.charAt(n2.index), i2 = r2 === "/";
            Zn(n2, t2, i2 ? 2 : 1);
            var o2 = er(n2);
            this.tokens.push({ type: e4, close: i2, position: { end: o2 } });
          } }, { key: "scanTagName", value: function() {
            var e4 = "tag", t2 = this.html, n2 = this.position, r2 = t2.length, i2 = n2.index;
            while (i2 < r2) {
              var o2 = t2.charAt(i2), a2 = !(nr(o2) || o2 === "/" || o2 === ">");
              if (a2)
                break;
              i2++;
            }
            var c2 = i2 + 1;
            while (c2 < r2) {
              var u2 = t2.charAt(c2), s2 = !(nr(u2) || u2 === "/" || u2 === ">");
              if (!s2)
                break;
              c2++;
            }
            Xn(n2, t2, c2);
            var l2 = t2.slice(i2, c2);
            return this.tokens.push({ type: e4, content: l2 }), l2;
          } }, { key: "scanAttrs", value: function() {
            var e4 = this.html, t2 = this.position, n2 = this.tokens, r2 = t2.index, i2 = null, o2 = r2, a2 = [], c2 = e4.length;
            while (r2 < c2) {
              var u2 = e4.charAt(r2);
              if (i2) {
                var s2 = u2 === i2;
                s2 && (i2 = null), r2++;
              } else {
                var l2 = u2 === "/" || u2 === ">";
                if (l2) {
                  r2 !== o2 && a2.push(e4.slice(o2, r2));
                  break;
                }
                if (ur(r2, o2, e4))
                  r2 !== o2 && a2.push(e4.slice(o2, r2)), o2 = r2 + 1, r2++;
                else {
                  var d2 = u2 === "'" || u2 === '"';
                  d2 ? (i2 = u2, r2++) : r2++;
                }
              }
            }
            Xn(t2, e4, r2);
            for (var f2 = a2.length, h2 = "attribute", p2 = 0; p2 < f2; p2++) {
              var v2 = a2[p2], b2 = v2.includes("=");
              if (b2) {
                var m2 = a2[p2 + 1];
                if (m2 && m2.startsWith("=")) {
                  if (m2.length > 1) {
                    var g2 = v2 + m2;
                    n2.push({ type: h2, content: g2 }), p2 += 1;
                    continue;
                  }
                  var y2 = a2[p2 + 2];
                  if (p2 += 1, y2) {
                    var O2 = v2 + "=" + y2;
                    n2.push({ type: h2, content: O2 }), p2 += 1;
                    continue;
                  }
                }
              }
              if (v2.endsWith("=")) {
                var j2 = a2[p2 + 1];
                if (j2 && !j2.includes("=")) {
                  var w2 = v2 + j2;
                  n2.push({ type: h2, content: w2 }), p2 += 1;
                  continue;
                }
                var k2 = v2.slice(0, -1);
                n2.push({ type: h2, content: k2 });
              } else
                n2.push({ type: h2, content: v2 });
            }
          } }, { key: "scanSkipTag", value: function(e4) {
            var t2 = this.html, n2 = this.position, r2 = e4.toLowerCase(), i2 = t2.length;
            while (n2.index < i2) {
              var o2 = t2.indexOf("</", n2.index);
              if (o2 === -1) {
                this.scanText();
                break;
              }
              Xn(n2, t2, o2);
              var a2 = this.scanTag();
              if (r2 === a2.toLowerCase())
                break;
            }
          } }]), e3;
        }();
        function lr(e3, t2) {
          for (var n2 = Object.create(null), r2 = e3.split(","), i2 = 0; i2 < r2.length; i2++)
            n2[r2[i2]] = true;
          return t2 ? function(e4) {
            return !!n2[e4.toLowerCase()];
          } : function(e4) {
            return !!n2[e4];
          };
        }
        var dr = { img: "image", iframe: "web-view" }, fr = Object.keys(_["internalComponents"]).map(function(e3) {
          return e3.toLowerCase();
        }).join(","), hr = lr(fr, true), pr = lr("a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b", true), vr = lr("address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt", true);
        function br(e3) {
          var t2 = e3.charAt(0), n2 = e3.length - 1, r2 = t2 === '"' || t2 === "'";
          return r2 && t2 === e3.charAt(n2) ? e3.slice(1, n2) : e3;
        }
        var mr = "{", gr = "}", yr = ".", Or = "#", jr = ">", wr = "~", kr = "+", Tr = function() {
          function e3() {
            Object(w["a"])(this, e3), this.styles = [];
          }
          return Object(k["a"])(e3, [{ key: "extractStyle", value: function(e4) {
            var t2 = this, n2 = /<style\s?[^>]*>((.|\n|\s)+?)<\/style>/g, r2 = e4;
            return r2 = r2.replace(n2, function(e5, n3) {
              var r3 = n3.trim();
              return t2.stringToSelector(r3), "";
            }), r2.trim();
          } }, { key: "stringToSelector", value: function(e4) {
            var t2 = this, n2 = e4.indexOf(mr), r2 = function() {
              var r3 = e4.indexOf(gr), i2 = e4.slice(0, n2).trim(), o2 = e4.slice(n2 + 1, r3).replace(/ /g, "");
              /;$/.test(o2) || (o2 += ";"), i2.split(",").forEach(function(e5) {
                var n3 = t2.parseSelector(e5);
                t2.styles.push({ content: o2, selectorList: n3 });
              }), e4 = e4.slice(r3 + 1), n2 = e4.indexOf(mr);
            };
            while (n2 > -1)
              r2();
          } }, { key: "parseSelector", value: function(e4) {
            var t2 = e4.trim().replace(/ *([>~+]) */g, " $1").replace(/ +/g, " ").split(" "), n2 = t2.map(function(e5) {
              var t3 = e5.charAt(0), n3 = { isChild: t3 === jr, isGeneralSibling: t3 === wr, isAdjacentSibling: t3 === kr, tag: null, id: null, class: [], attrs: [] };
              return e5 = e5.replace(/^[>~+]/, ""), e5 = e5.replace(/\[(.+?)\]/g, function(e6, t4) {
                var r2 = t4.split("="), i2 = Object(u["a"])(r2, 2), o2 = i2[0], a2 = i2[1], c2 = t4.indexOf("=") === -1, s2 = { all: c2, key: o2, value: c2 ? null : a2 };
                return n3.attrs.push(s2), "";
              }), e5 = e5.replace(/([.#][A-Za-z0-9-_]+)/g, function(e6, t4) {
                return t4[0] === Or ? n3.id = t4.substr(1) : t4[0] === yr && n3.class.push(t4.substr(1)), "";
              }), e5 !== "" && (n3.tag = e5), n3;
            });
            return n2;
          } }, { key: "matchStyle", value: function(e4, t2, n2) {
            var r2 = this, i2 = _r(this.styles).reduce(function(i3, o2, a2) {
              var c2 = o2.content, u2 = o2.selectorList, s2 = n2[a2], l2 = u2[s2], d2 = u2[s2 + 1];
              ((d2 === null || d2 === void 0 ? void 0 : d2.isGeneralSibling) || (d2 === null || d2 === void 0 ? void 0 : d2.isAdjacentSibling)) && (l2 = d2, s2 += 1, n2[a2] += 1);
              var f2 = r2.matchCurrent(e4, t2, l2);
              if (f2 && l2.isGeneralSibling) {
                var h2 = Er(t2);
                while (h2) {
                  if (h2.h5tagName && r2.matchCurrent(h2.h5tagName, h2, u2[s2 - 1])) {
                    f2 = true;
                    break;
                  }
                  h2 = Er(h2), f2 = false;
                }
              }
              if (f2 && l2.isAdjacentSibling) {
                var p2 = Er(t2);
                if (p2 && p2.h5tagName) {
                  var v2 = r2.matchCurrent(p2.h5tagName, p2, u2[s2 - 1]);
                  v2 || (f2 = false);
                } else
                  f2 = false;
              }
              if (f2) {
                if (s2 === u2.length - 1)
                  return i3 + c2;
                s2 < u2.length - 1 && (n2[a2] += 1);
              } else
                l2.isChild && s2 > 0 && (n2[a2] -= 1, r2.matchCurrent(e4, t2, u2[n2[a2]]) && (n2[a2] += 1));
              return i3;
            }, "");
            return i2;
          } }, { key: "matchCurrent", value: function(e4, t2, n2) {
            if (n2.tag && n2.tag !== e4)
              return false;
            if (n2.id && n2.id !== t2.id)
              return false;
            if (n2.class.length)
              for (var r2 = t2.className.split(" "), i2 = 0; i2 < n2.class.length; i2++) {
                var o2 = n2.class[i2];
                if (r2.indexOf(o2) === -1)
                  return false;
              }
            if (n2.attrs.length)
              for (var a2 = 0; a2 < n2.attrs.length; a2++) {
                var c2 = n2.attrs[a2], u2 = c2.all, s2 = c2.key, l2 = c2.value;
                if (u2 && !t2.hasAttribute(s2))
                  return false;
                var d2 = t2.getAttribute(s2);
                if (d2 !== br(l2 || ""))
                  return false;
              }
            return true;
          } }]), e3;
        }();
        function Er(e3) {
          var t2 = e3.parentElement;
          if (!t2)
            return null;
          var n2 = e3.previousSibling;
          return n2 ? n2.nodeType === 1 ? n2 : Er(n2) : null;
        }
        function _r(e3) {
          return e3.sort(function(e4, t2) {
            var n2 = Cr(e4.selectorList), r2 = Cr(t2.selectorList);
            if (n2 !== r2)
              return n2 - r2;
            var i2 = Sr(e4.selectorList), o2 = Sr(t2.selectorList);
            if (i2 !== o2)
              return i2 - o2;
            var a2 = Pr(e4.selectorList), c2 = Pr(t2.selectorList);
            return a2 - c2;
          });
        }
        function Cr(e3) {
          return e3.reduce(function(e4, t2) {
            return e4 + (t2.id ? 1 : 0);
          }, 0);
        }
        function Sr(e3) {
          return e3.reduce(function(e4, t2) {
            return e4 + t2.class.length + t2.attrs.length;
          }, 0);
        }
        function Pr(e3) {
          return e3.reduce(function(e4, t2) {
            return e4 + (t2.tag ? 1 : 0);
          }, 0);
        }
        var Ar = { li: ["ul", "ol", "menu"], dt: ["dl"], dd: ["dl"], tbody: ["table"], thead: ["table"], tfoot: ["table"], tr: ["table"], td: ["table"] };
        function xr(e3, t2) {
          var n2 = Ar[e3];
          if (n2) {
            var r2 = t2.length - 1;
            while (r2 >= 0) {
              var i2 = t2[r2].tagName;
              if (i2 === e3)
                break;
              if (n2 && n2.includes(i2))
                return true;
              r2--;
            }
          }
          return false;
        }
        function Ir(e3) {
          return $n.html.renderHTMLTag ? e3 : dr[e3] ? dr[e3] : hr(e3) ? e3 : vr(e3) ? "view" : pr(e3) ? "text" : "view";
        }
        function Nr(e3) {
          var t2 = "=", n2 = e3.indexOf(t2);
          if (n2 === -1)
            return [e3];
          var r2 = e3.slice(0, n2).trim(), i2 = e3.slice(n2 + t2.length).trim();
          return [r2, i2];
        }
        function Fr(e3, t2, n2, r2) {
          return e3.filter(function(e4) {
            return e4.type !== "comment" && (e4.type !== "text" || e4.content !== "");
          }).map(function(e4) {
            if (e4.type === "text") {
              var i2 = t2.createTextNode(e4.content);
              return Object(_["isFunction"])($n.html.transformText) ? $n.html.transformText(i2, e4) : (r2 === null || r2 === void 0 || r2.appendChild(i2), i2);
            }
            var o2 = t2.createElement(Ir(e4.tagName));
            o2.h5tagName = e4.tagName, r2 === null || r2 === void 0 || r2.appendChild(o2), $n.html.renderHTMLTag || (o2.className = "h5-".concat(e4.tagName));
            for (var a2 = 0; a2 < e4.attributes.length; a2++) {
              var c2 = e4.attributes[a2], s2 = Nr(c2), l2 = Object(u["a"])(s2, 2), d2 = l2[0], f2 = l2[1];
              if (d2 === "class")
                o2.className += " " + br(f2);
              else {
                if (d2[0] === "o" && d2[1] === "n")
                  continue;
                o2.setAttribute(d2, f2 == null || br(f2));
              }
            }
            var h2 = n2.styleTagParser, p2 = n2.descendantList, v2 = p2.slice(), b2 = h2.matchStyle(e4.tagName, o2, v2);
            return o2.setAttribute("style", b2 + o2.style.cssText), Fr(e4.children, t2, { styleTagParser: h2, descendantList: v2 }, o2), Object(_["isFunction"])($n.html.transformElement) ? $n.html.transformElement(o2, e4) : o2;
          });
        }
        function Br(e3, t2) {
          var n2 = new Tr();
          e3 = n2.extractStyle(e3);
          var r2 = new sr(e3).scan(), i2 = { tagName: "", children: [], type: "element", attributes: [] }, o2 = { tokens: r2, options: $n, cursor: 0, stack: [i2] };
          return Rr(o2), Fr(i2.children, t2, { styleTagParser: n2, descendantList: Array(n2.styles.length).fill(0) });
        }
        function Rr(e3) {
          var t2 = e3.tokens, n2 = e3.stack, r2 = e3.cursor, i2 = t2.length, o2 = n2[n2.length - 1].children;
          while (r2 < i2) {
            var a2 = t2[r2];
            if (a2.type === "tag-start") {
              var c2 = t2[++r2];
              r2++;
              var u2 = c2.content.toLowerCase();
              if (a2.close) {
                var s2 = n2.length, l2 = false;
                while (--s2 > -1)
                  if (n2[s2].tagName === u2) {
                    l2 = true;
                    break;
                  }
                while (r2 < i2) {
                  var d2 = t2[r2];
                  if (d2.type !== "tag-end")
                    break;
                  r2++;
                }
                if (l2) {
                  n2.splice(s2);
                  break;
                }
              } else {
                var f2 = $n.html.closingElements.has(u2), h2 = f2;
                if (h2 && (h2 = !xr(u2, n2)), h2) {
                  var p2 = n2.length - 1;
                  while (p2 > 0) {
                    if (u2 === n2[p2].tagName) {
                      n2.splice(p2);
                      var v2 = p2 - 1;
                      o2 = n2[v2].children;
                      break;
                    }
                    p2 -= 1;
                  }
                }
                var b2 = [], m2 = void 0;
                while (r2 < i2) {
                  if (m2 = t2[r2], m2.type === "tag-end")
                    break;
                  b2.push(m2.content), r2++;
                }
                r2++;
                var g2 = [], y2 = { type: "element", tagName: c2.content, attributes: b2, children: g2 };
                o2.push(y2);
                var O2 = !(m2.close || $n.html.voidElements.has(u2));
                if (O2) {
                  n2.push({ tagName: u2, children: g2 });
                  var j2 = { tokens: t2, cursor: r2, stack: n2 };
                  Rr(j2), r2 = j2.cursor;
                }
              }
            } else
              o2.push(a2), r2++;
          }
          e3.cursor = r2;
        }
        function Lr(e3, t2, n2) {
          e3.childNodes.forEach(function(t3) {
            e3.removeChild(t3);
          });
          for (var r2 = Br(t2, n2()), i2 = 0; i2 < r2.length; i2++)
            e3.appendChild(r2[i2]);
        }
        function Mr(e3, t2, n2) {
          for (var r2, i2, o2 = Br(t2, n2()), a2 = 0; a2 < o2.length; a2++) {
            var c2 = o2[a2];
            switch (e3) {
              case "beforebegin":
                (r2 = this.parentNode) === null || r2 === void 0 || r2.insertBefore(c2, this);
                break;
              case "afterbegin":
                this.hasChildNodes() ? this.insertBefore(c2, this.childNodes[0]) : this.appendChild(c2);
                break;
              case "beforeend":
                this.appendChild(c2);
                break;
              case "afterend":
                (i2 = this.parentNode) === null || i2 === void 0 || i2.appendChild(c2);
                break;
            }
          }
        }
        $n.html = { skipElements: new Set(["style", "script"]), voidElements: new Set(["!doctype", "area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]), closingElements: new Set(["html", "head", "body", "p", "dt", "dd", "li", "option", "thead", "th", "tbody", "tr", "td", "tfoot", "colgroup"]), renderHTMLTag: false };
        var Dr = new E["b"](function(e3) {
          e3(A.InnerHTMLImpl).toFunction(Lr), e3(A.insertAdjacentHTMLImpl).toFunction(Mr);
        }), Ur = function() {
          function e3() {
            Object(w["a"])(this, e3);
          }
          return Object(k["a"])(e3, [{ key: "modifyMpEvent", value: function(e4) {
            var t2;
            (t2 = this.modifyMpEventImpls) === null || t2 === void 0 || t2.forEach(function(t3) {
              return t3(e4);
            });
          } }, { key: "modifyTaroEvent", value: function(e4, t2) {
            var n2;
            (n2 = this.modifyTaroEventImpls) === null || n2 === void 0 || n2.forEach(function(n3) {
              return n3(e4, t2);
            });
          } }, { key: "initNativeApi", value: function(e4) {
            var t2;
            (t2 = this.initNativeApiImpls) === null || t2 === void 0 || t2.forEach(function(t3) {
              return t3(e4);
            });
          } }, { key: "patchElement", value: function(e4) {
            var t2;
            (t2 = this.patchElementImpls) === null || t2 === void 0 || t2.forEach(function(t3) {
              return t3(e4);
            });
          } }]), e3;
        }();
        C([Object(E["c"])(A.getLifecycle), P("design:type", Function)], Ur.prototype, "getLifecycle", void 0), C([Object(E["c"])(A.getPathIndex), P("design:type", Function)], Ur.prototype, "getPathIndex", void 0), C([Object(E["c"])(A.getEventCenter), P("design:type", Function)], Ur.prototype, "getEventCenter", void 0), C([Object(E["c"])(A.isBubbleEvents), P("design:type", Function)], Ur.prototype, "isBubbleEvents", void 0), C([Object(E["c"])(A.getSpecialNodes), P("design:type", Function)], Ur.prototype, "getSpecialNodes", void 0), C([Object(E["c"])(A.onRemoveAttribute), Object(E["f"])(), P("design:type", Function)], Ur.prototype, "onRemoveAttribute", void 0), C([Object(E["c"])(A.batchedEventUpdates), Object(E["f"])(), P("design:type", Function)], Ur.prototype, "batchedEventUpdates", void 0), C([Object(E["c"])(A.mergePageInstance), Object(E["f"])(), P("design:type", Function)], Ur.prototype, "mergePageInstance", void 0), C([Object(E["c"])(A.createPullDownComponent), Object(E["f"])(), P("design:type", Function)], Ur.prototype, "createPullDownComponent", void 0), C([Object(E["c"])(A.getDOMNode), Object(E["f"])(), P("design:type", Function)], Ur.prototype, "getDOMNode", void 0), C([Object(E["c"])(A.modifyHydrateData), Object(E["f"])(), P("design:type", Function)], Ur.prototype, "modifyHydrateData", void 0), C([Object(E["c"])(A.modifySetAttrPayload), Object(E["f"])(), P("design:type", Function)], Ur.prototype, "modifySetAttrPayload", void 0), C([Object(E["c"])(A.modifyRmAttrPayload), Object(E["f"])(), P("design:type", Function)], Ur.prototype, "modifyRmAttrPayload", void 0), C([Object(E["c"])(A.onAddEvent), Object(E["f"])(), P("design:type", Function)], Ur.prototype, "onAddEvent", void 0), C([Object(E["e"])(A.modifyMpEvent), Object(E["f"])(), P("design:type", Array)], Ur.prototype, "modifyMpEventImpls", void 0), C([Object(E["e"])(A.modifyTaroEvent), Object(E["f"])(), P("design:type", Array)], Ur.prototype, "modifyTaroEventImpls", void 0), C([Object(E["e"])(A.initNativeApi), Object(E["f"])(), P("design:type", Array)], Ur.prototype, "initNativeApiImpls", void 0), C([Object(E["e"])(A.patchElement), Object(E["f"])(), P("design:type", Array)], Ur.prototype, "patchElementImpls", void 0), Ur = C([Object(E["d"])()], Ur);
        var Hr = new Set(["touchstart", "touchmove", "touchcancel", "touchend", "touchforcechange", "tap", "longpress", "longtap", "transitionend", "animationstart", "animationiteration", "animationend"]), $r = function(e3, t2) {
          return e3[t2];
        }, zr = function(e3) {
          return "[".concat(e3, "]");
        }, qr = function(e3) {
          return new e3();
        }, Wr = function(e3) {
          return Hr.has(e3);
        }, Vr = function() {
          return ["view", "text", "image"];
        }, Qr = new E["b"](function(e3) {
          e3(A.getLifecycle).toFunction($r), e3(A.getPathIndex).toFunction(zr), e3(A.getEventCenter).toFunction(qr), e3(A.isBubbleEvents).toFunction(Wr), e3(A.getSpecialNodes).toFunction(Vr);
        });
        function Gr(e3) {
          var t2 = Object.keys(_["defaultReconciler"]);
          t2.forEach(function(t3) {
            if (t3 in A) {
              var n2 = A[t3], r2 = _["defaultReconciler"][t3];
              Object(_["isArray"])(r2) ? r2.forEach(function(t4) {
                return e3.bind(n2).toFunction(t4);
              }) : e3.isBound(n2) ? e3.rebind(n2).toFunction(r2) : e3.bind(n2).toFunction(r2);
            }
          });
        }
        var Jr = new E["a"]();
        Jr.bind(A.TaroElement).to(Xe).whenTargetNamed(ke.Element), Jr.bind(A.TaroElement).to(Kn).inSingletonScope().whenTargetNamed(ke.Document), Jr.bind(A.TaroElement).to(Vn).whenTargetNamed(ke.RootElement), Jr.bind(A.TaroElement).to(Qn).whenTargetNamed(ke.FormElement), Jr.bind(A.TaroElementFactory).toFactory(function(e3) {
          return function(t2) {
            return function(n2) {
              var r2 = e3.container.getNamed(A.TaroElement, t2);
              return n2 && (r2.nodeName = n2), r2.tagName = r2.nodeName.toUpperCase(), r2;
            };
          };
        }), Jr.bind(A.TaroText).to(Ce), Jr.bind(A.TaroTextFactory).toFactory(function(e3) {
          return function(t2) {
            var n2 = e3.container.get(A.TaroText);
            return n2._value = t2, n2;
          };
        }), Jr.bind(A.TaroNodeImpl).to(Gn).inSingletonScope(), Jr.bind(A.TaroElementImpl).to(Jn).inSingletonScope(), Jr.bind(A.Hooks).to(Ur).inSingletonScope(), Jr.load(Dr, Qr), Gr(Jr);
        var Kr = Jr.get(A.Hooks), Yr = Jr.get(A.TaroElementFactory), Zr = Yr(ke.Document)(), Xr = function() {
          function e3(t2, n2, r2) {
            Object(w["a"])(this, e3), this._stop = false, this._end = false, this.defaultPrevented = false, this.timeStamp = Date.now(), this.type = t2.toLowerCase(), this.mpEvent = r2, this.bubbles = Boolean(n2 && n2.bubbles), this.cancelable = Boolean(n2 && n2.cancelable);
          }
          return Object(k["a"])(e3, [{ key: "stopPropagation", value: function() {
            this._stop = true;
          } }, { key: "stopImmediatePropagation", value: function() {
            this._end = this._stop = true;
          } }, { key: "preventDefault", value: function() {
            this.defaultPrevented = true;
          } }, { key: "target", get: function() {
            var e4, t2, n2, r2 = Zr.getElementById((e4 = this.mpEvent) === null || e4 === void 0 ? void 0 : e4.target.id);
            return Object.assign(Object.assign(Object.assign({}, (t2 = this.mpEvent) === null || t2 === void 0 ? void 0 : t2.target), (n2 = this.mpEvent) === null || n2 === void 0 ? void 0 : n2.detail), { dataset: r2 !== null ? r2.dataset : _["EMPTY_OBJ"] });
          } }, { key: "currentTarget", get: function() {
            var e4, t2, n2, r2 = Zr.getElementById((e4 = this.mpEvent) === null || e4 === void 0 ? void 0 : e4.currentTarget.id);
            return r2 === null ? this.target : Object.assign(Object.assign(Object.assign({}, (t2 = this.mpEvent) === null || t2 === void 0 ? void 0 : t2.currentTarget), (n2 = this.mpEvent) === null || n2 === void 0 ? void 0 : n2.detail), { dataset: r2.dataset });
          } }]), e3;
        }();
        function ei(e3, t2) {
          if (typeof e3 === "string")
            return new Xr(e3, { bubbles: true, cancelable: true });
          var n2 = new Xr(e3.type, { bubbles: true, cancelable: true }, e3);
          for (var r2 in e3)
            r2 !== re && r2 !== ne && r2 !== ie && r2 !== ae && (n2[r2] = e3[r2]);
          return n2.type === oe && (t2 === null || t2 === void 0 ? void 0 : t2.nodeName) === X && (n2[ce] = 13), n2;
        }
        var ti = {};
        function ni(e3) {
          var t2;
          (t2 = Kr.modifyMpEvent) === null || t2 === void 0 || t2.call(Kr, e3), e3.currentTarget == null && (e3.currentTarget = e3.target);
          var n2 = Zr.getElementById(e3.currentTarget.id);
          if (n2) {
            var r2 = function() {
              var t3, r3 = ei(e3, n2);
              (t3 = Kr.modifyTaroEvent) === null || t3 === void 0 || t3.call(Kr, r3, n2), n2.dispatchEvent(r3);
            };
            if (typeof Kr.batchedEventUpdates === "function") {
              var i2 = e3.type;
              !Kr.isBubbleEvents(i2) || !ye(n2, i2) || i2 === ue && n2.props.catchMove ? Kr.batchedEventUpdates(function() {
                ti[i2] && (ti[i2].forEach(function(e4) {
                  return e4();
                }), delete ti[i2]), r2();
              }) : (ti[i2] || (ti[i2] = [])).push(r2);
            } else
              r2();
          }
        }
        var ri = typeof i !== "undefined" && !!i.scripts, ii = ri ? i : _["EMPTY_OBJ"], oi = ri ? o : _["EMPTY_OBJ"];
        function ai() {
          var e3 = Jr.get(A.TaroElementFactory), t2 = e3(ke.Document)(), n2 = t2.createElement.bind(t2), r2 = n2(B), i2 = n2(R), o2 = n2(L), a2 = n2(M);
          a2.id = M;
          var c2 = n2(D);
          return t2.appendChild(r2), r2.appendChild(i2), r2.appendChild(o2), o2.appendChild(c2), c2.appendChild(a2), t2.documentElement = r2, t2.head = i2, t2.body = o2, t2.createEvent = ei, t2;
        }
        var ci, ui = ri ? ii : ai(), si = "Macintosh", li = "Intel Mac OS X 10_14_5", di = "AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36", fi = ri ? oi.navigator : { appCodeName: "Mozilla", appName: "Netscape", appVersion: "5.0 (" + si + "; " + li + ") " + di, cookieEnabled: true, mimeTypes: [], onLine: true, platform: "MacIntel", plugins: [], product: "Taro", productSub: "20030107", userAgent: "Mozilla/5.0 (" + si + "; " + li + ") " + di, vendor: "Joyent", vendorSub: "" };
        (function() {
          var e3;
          typeof performance !== "undefined" && performance !== null && performance.now ? ci = function() {
            return performance.now();
          } : Date.now ? (ci = function() {
            return Date.now() - e3;
          }, e3 = Date.now()) : (ci = function() {
            return new Date().getTime() - e3;
          }, e3 = new Date().getTime());
        })();
        var hi = 0, pi = typeof a !== "undefined" && a !== null ? a : function(e3) {
          var t2 = ci(), n2 = Math.max(hi + 16, t2);
          return setTimeout(function() {
            e3(hi = n2);
          }, n2 - t2);
        }, vi = typeof c !== "undefined" && c !== null ? c : clearTimeout;
        function bi(e3) {
          return e3.style;
        }
        typeof r !== "undefined" && (pi = pi.bind(r), vi = vi.bind(r));
        var mi = ri ? oi : { navigator: fi, document: ui };
        if (!ri) {
          var gi = [].concat(Object(h["a"])(Object.getOwnPropertyNames(r || oi)), Object(h["a"])(Object.getOwnPropertySymbols(r || oi)));
          gi.forEach(function(e3) {
            e3 !== "atob" && (Object.prototype.hasOwnProperty.call(mi, e3) || (mi[e3] = r[e3]));
          }), ui.defaultView = mi;
        }
        mi.requestAnimationFrame = pi, mi.cancelAnimationFrame = vi, mi.getComputedStyle = bi, mi.addEventListener = function() {
        }, mi.removeEventListener = function() {
        }, se in mi || (mi.Date = Date), le in mi || (mi.setTimeout = setTimeout);
        var yi = { app: null, router: null, page: null }, Oi = function() {
          return yi;
        }, ji = function() {
          function e3(t2) {
            Object(w["a"])(this, e3), typeof t2 !== "undefined" && t2.callbacks ? this.callbacks = t2.callbacks : this.callbacks = {};
          }
          return Object(k["a"])(e3, [{ key: "on", value: function(t2, n2, r2) {
            var i2, o2, a2, c2;
            if (!n2)
              return this;
            t2 = t2.split(e3.eventSplitter), this.callbacks || (this.callbacks = {});
            var u2 = this.callbacks;
            while (i2 = t2.shift())
              c2 = u2[i2], o2 = c2 ? c2.tail : {}, o2.next = a2 = {}, o2.context = r2, o2.callback = n2, u2[i2] = { tail: a2, next: c2 ? c2.next : o2 };
            return this;
          } }, { key: "once", value: function(e4, t2, n2) {
            var r2 = this, i2 = function i3() {
              for (var o2 = arguments.length, a2 = new Array(o2), c2 = 0; c2 < o2; c2++)
                a2[c2] = arguments[c2];
              t2.apply(r2, a2), r2.off(e4, i3, n2);
            };
            return this.on(e4, i2, n2), this;
          } }, { key: "off", value: function(t2, n2, r2) {
            var i2, o2, a2, c2, u2, s2;
            if (!(o2 = this.callbacks))
              return this;
            if (!(t2 || n2 || r2))
              return delete this.callbacks, this;
            t2 = t2 ? t2.split(e3.eventSplitter) : Object.keys(o2);
            while (i2 = t2.shift())
              if (a2 = o2[i2], delete o2[i2], a2 && (n2 || r2)) {
                c2 = a2.tail;
                while ((a2 = a2.next) !== c2)
                  u2 = a2.callback, s2 = a2.context, (n2 && u2 !== n2 || r2 && s2 !== r2) && this.on(i2, u2, s2);
              }
            return this;
          } }, { key: "trigger", value: function(t2) {
            var n2, r2, i2, o2;
            if (!(i2 = this.callbacks))
              return this;
            t2 = t2.split(e3.eventSplitter);
            var a2 = [].slice.call(arguments, 1);
            while (n2 = t2.shift())
              if (r2 = i2[n2]) {
                o2 = r2.tail;
                while ((r2 = r2.next) !== o2)
                  r2.callback.apply(r2.context || this, a2);
              }
            return this;
          } }]), e3;
        }();
        ji.eventSplitter = /\s+/;
        var wi = Jr.get(A.Hooks), ki = wi.getEventCenter(ji);
        Jr.bind(A.eventCenter).toConstantValue(ki);
        var Ti = new Map(), Ei = pe(), _i = Jr.get(A.Hooks);
        function Ci(e3, t2) {
          var n2;
          (n2 = _i.mergePageInstance) === null || n2 === void 0 || n2.call(_i, Ti.get(t2), e3), Ti.set(t2, e3);
        }
        function Si(e3) {
          return Ti.get(e3);
        }
        function Pi(e3) {
          return e3 == null ? "" : e3.charAt(0) === "/" ? e3 : "/" + e3;
        }
        function Ai(e3, t2) {
          for (var n2 = arguments.length, r2 = new Array(n2 > 2 ? n2 - 2 : 0), i2 = 2; i2 < n2; i2++)
            r2[i2 - 2] = arguments[i2];
          var o2 = Ti.get(e3);
          if (o2 != null) {
            var a2 = _i.getLifecycle(o2, t2);
            if (Object(_["isArray"])(a2)) {
              var c2 = a2.map(function(e4) {
                return e4.apply(o2, r2);
              });
              return c2[0];
            }
            if (Object(_["isFunction"])(a2))
              return a2.apply(o2, r2);
          }
        }
        function xi(e3) {
          if (e3 == null)
            return "";
          var t2 = Object.keys(e3).map(function(t3) {
            return t3 + "=" + e3[t3];
          }).join("&");
          return t2 === "" ? t2 : "?" + t2;
        }
        function Ii(e3, t2) {
          var n2 = e3;
          return ri || (n2 = e3 + xi(t2)), n2;
        }
        function Ni(e3) {
          return e3 + ".onReady";
        }
        function Fi(e3) {
          return e3 + ".onShow";
        }
        function Bi(e3) {
          return e3 + ".onHide";
        }
        function Ri(e3, t2, n2, r2) {
          var i2, o2, a2 = t2 !== null && t2 !== void 0 ? t2 : "taro_page_".concat(Ei()), c2 = null, u2 = false, s2 = [], l2 = { onLoad: function(t3, n3) {
            var i3 = this;
            qn.start(N), yi.page = this, this.config = r2 || {}, t3.$taroTimestamp = Date.now(), this.$taroPath = Ii(a2, t3), this.$taroParams == null && (this.$taroParams = Object.assign({}, t3));
            var o3 = ri ? this.$taroPath : this.route || this.__route__;
            yi.router = { params: this.$taroParams, path: Pi(o3), onReady: Ni(a2), onShow: Fi(a2), onHide: Bi(a2) };
            var l3 = function() {
              yi.app.mount(e3, i3.$taroPath, function() {
                c2 = ui.getElementById(i3.$taroPath), Object(_["ensure"])(c2 !== null, "\u6CA1\u6709\u627E\u5230\u9875\u9762\u5B9E\u4F8B\u3002"), Ai(i3.$taroPath, "onLoad", i3.$taroParams), ri || (c2.ctx = i3, c2.performUpdate(true, n3));
              });
            };
            u2 ? s2.push(l3) : l3();
          }, onReady: function() {
            pi(function() {
              ki.trigger(Ni(a2));
            }), Ai(this.$taroPath, "onReady"), this.onReady.called = true;
          }, onUnload: function() {
            var e4 = this;
            u2 = true, yi.app.unmount(this.$taroPath, function() {
              u2 = false, Ti.delete(e4.$taroPath), c2 && (c2.ctx = null), s2.length && (s2.forEach(function(e5) {
                return e5();
              }), s2 = []);
            });
          }, onShow: function() {
            yi.page = this, this.config = r2 || {};
            var e4 = ri ? this.$taroPath : this.route || this.__route__;
            yi.router = { params: this.$taroParams, path: Pi(e4), onReady: Ni(a2), onShow: Fi(a2), onHide: Bi(a2) }, pi(function() {
              ki.trigger(Fi(a2));
            }), Ai(this.$taroPath, "onShow");
          }, onHide: function() {
            yi.page = null, yi.router = null, Ai(this.$taroPath, "onHide"), ki.trigger(Bi(a2));
          }, onPullDownRefresh: function() {
            return Ai(this.$taroPath, "onPullDownRefresh");
          }, onReachBottom: function() {
            return Ai(this.$taroPath, "onReachBottom");
          }, onPageScroll: function(e4) {
            return Ai(this.$taroPath, "onPageScroll", e4);
          }, onResize: function(e4) {
            return Ai(this.$taroPath, "onResize", e4);
          }, onTabItemTap: function(e4) {
            return Ai(this.$taroPath, "onTabItemTap", e4);
          }, onTitleClick: function() {
            return Ai(this.$taroPath, "onTitleClick");
          }, onOptionMenuClick: function() {
            return Ai(this.$taroPath, "onOptionMenuClick");
          }, onPopMenuClick: function() {
            return Ai(this.$taroPath, "onPopMenuClick");
          }, onPullIntercept: function() {
            return Ai(this.$taroPath, "onPullIntercept");
          }, onAddToFavorites: function() {
            return Ai(this.$taroPath, "onAddToFavorites");
          } };
          return (e3.onShareAppMessage || ((i2 = e3.prototype) === null || i2 === void 0 ? void 0 : i2.onShareAppMessage) || e3.enableShareAppMessage) && (l2.onShareAppMessage = function(e4) {
            var t3 = e4 === null || e4 === void 0 ? void 0 : e4.target;
            if (t3 != null) {
              var n3 = t3.id, r3 = ui.getElementById(n3);
              r3 != null && (e4.target.dataset = r3.dataset);
            }
            return Ai(this.$taroPath, "onShareAppMessage", e4);
          }), (e3.onShareTimeline || ((o2 = e3.prototype) === null || o2 === void 0 ? void 0 : o2.onShareTimeline) || e3.enableShareTimeline) && (l2.onShareTimeline = function() {
            return Ai(this.$taroPath, "onShareTimeline");
          }), l2.eh = ni, Object(_["isUndefined"])(n2) || (l2.data = n2), ri && (l2.path = a2), l2;
        }
        function Li(e3, t2, n2) {
          var r2, i2, o2, a2 = t2 !== null && t2 !== void 0 ? t2 : "taro_component_".concat(Ei()), c2 = null, u2 = { attached: function() {
            var t3, n3 = this;
            qn.start(N);
            var r3 = Ii(a2, { id: ((t3 = this.getPageId) === null || t3 === void 0 ? void 0 : t3.call(this)) || Ei() });
            yi.app.mount(e3, r3, function() {
              c2 = ui.getElementById(r3), Object(_["ensure"])(c2 !== null, "\u6CA1\u6709\u627E\u5230\u7EC4\u4EF6\u5B9E\u4F8B\u3002"), Ai(r3, "onLoad"), ri || (c2.ctx = n3, c2.performUpdate(true));
            });
          }, detached: function() {
            var e4 = Ii(a2, { id: this.getPageId() });
            yi.app.unmount(e4, function() {
              Ti.delete(e4), c2 && (c2.ctx = null);
            });
          }, methods: { eh: ni } };
          return Object(_["isUndefined"])(n2) || (u2.data = n2), u2["options"] = (r2 = e3 === null || e3 === void 0 ? void 0 : e3["options"]) !== null && r2 !== void 0 ? r2 : _["EMPTY_OBJ"], u2["externalClasses"] = (i2 = e3 === null || e3 === void 0 ? void 0 : e3["externalClasses"]) !== null && i2 !== void 0 ? i2 : _["EMPTY_OBJ"], u2["behaviors"] = (o2 = e3 === null || e3 === void 0 ? void 0 : e3["behaviors"]) !== null && o2 !== void 0 ? o2 : _["EMPTY_OBJ"], u2;
        }
        function Mi(e3) {
          return { properties: { i: { type: Object, value: Object(j["a"])({}, "nn", "view") }, l: { type: String, value: "" } }, options: { addGlobalClass: true, virtualHost: e3 !== "custom-wrapper" }, methods: { eh: ni } };
        }
        var Di = Jr.get(A.Hooks);
        function Ui(e3, t2) {
          var n2;
          return Object(_["isFunction"])(t2.render) || !!((n2 = t2.prototype) === null || n2 === void 0 ? void 0 : n2.isReactComponent) || t2.prototype instanceof e3.Component;
        }
        var Hi, $i = _["EMPTY_OBJ"], zi = _["EMPTY_OBJ"];
        function qi(e3, t2) {
          var n2 = e3.createElement;
          return function(r2) {
            var i2 = Ui(e3, r2), o2 = function(e4) {
              return e4 && Ci(e4, t2);
            }, a2 = i2 ? { ref: o2 } : { forwardedRef: o2, reactReduxForwardedRef: o2 };
            return zi === _["EMPTY_OBJ"] && (zi = e3.createContext("")), function(e4) {
              Object(y["a"])(o3, e4);
              var i3 = Object(O["a"])(o3);
              function o3() {
                var e5;
                return Object(w["a"])(this, o3), e5 = i3.apply(this, arguments), e5.state = { hasError: false }, e5;
              }
              return Object(k["a"])(o3, [{ key: "componentDidCatch", value: function(e5, t3) {
              } }, { key: "render", value: function() {
                var e5 = this.state.hasError ? [] : n2(zi.Provider, { value: t2 }, n2(r2, Object.assign(Object.assign({}, this.props), a2)));
                return ri ? n2("div", { id: t2, className: "taro_page" }, e5) : n2("root", { id: t2 }, e5);
              } }], [{ key: "getDerivedStateFromError", value: function(e5) {
                return { hasError: true };
              } }]), o3;
            }(e3.Component);
          };
        }
        function Wi() {
          var e3 = function(e4, t3) {
            return t3 = t3.replace(/^on(Show|Hide)$/, "componentDid$1"), e4[t3];
          }, t2 = function(e4) {
            e4.type = e4.type.replace(/-/g, "");
          }, n2 = function(e4) {
            Hi.unstable_batchedUpdates(e4);
          }, r2 = function(e4, t3) {
            e4 && t3 && ("constructor" in e4 || Object.keys(e4).forEach(function(n3) {
              Object(_["isFunction"])(t3[n3]) ? t3[n3] = [t3[n3]].concat(Object(h["a"])(e4[n3])) : t3[n3] = [].concat(Object(h["a"])(t3[n3] || []), Object(h["a"])(e4[n3]));
            }));
          };
          Di.getLifecycle = e3, Di.modifyMpEvent = t2, Di.batchedEventUpdates = n2, Di.mergePageInstance = r2;
        }
        var Vi = pe();
        function Qi(e3, t2, n2, r2) {
          $i = t2, Hi = n2, Object(_["ensure"])(!!Hi, "\u6784\u5EFA React/Nerv \u9879\u76EE\u8BF7\u628A process.env.FRAMEWORK \u8BBE\u7F6E\u4E3A 'react'/'nerv' ");
          var i2 = $i.createRef(), o2 = Ui($i, e3);
          Wi();
          var a2, c2 = function(t3) {
            Object(y["a"])(r3, t3);
            var n3 = Object(O["a"])(r3);
            function r3() {
              var e4;
              return Object(w["a"])(this, r3), e4 = n3.apply(this, arguments), e4.pages = [], e4.elements = [], e4;
            }
            return Object(k["a"])(r3, [{ key: "mount", value: function(e4, t4, n4) {
              var r4 = t4 + Vi(), i3 = function() {
                return $i.createElement(e4, { key: r4, tid: t4 });
              };
              this.pages.push(i3), this.forceUpdate(n4);
            } }, { key: "unmount", value: function(e4, t4) {
              for (var n4 = 0; n4 < this.elements.length; n4++) {
                var r4 = this.elements[n4];
                if (r4.props.tid === e4) {
                  this.elements.splice(n4, 1);
                  break;
                }
              }
              this.forceUpdate(t4);
            } }, { key: "render", value: function() {
              while (this.pages.length > 0) {
                var t4 = this.pages.pop();
                this.elements.push(t4());
              }
              var n4 = null;
              return o2 && (n4 = { ref: i2 }), $i.createElement(e3, n4, ri ? $i.createElement("div", null, this.elements.slice()) : this.elements.slice());
            } }]), r3;
          }($i.Component);
          ri || (a2 = Hi.render($i.createElement(c2), ui.getElementById("app")));
          var u2 = Object.create({ render: function(e4) {
            a2.forceUpdate(e4);
          }, mount: function(e4, t3, n3) {
            var r3 = qi($i, t3)(e4);
            a2.mount(r3, t3, n3);
          }, unmount: function(e4, t3) {
            a2.unmount(e4, t3);
          } }, { config: { writable: true, enumerable: true, configurable: true, value: r2 }, onLaunch: { enumerable: true, writable: true, value: function(e4) {
            var t3 = this;
            yi.router = Object.assign({ params: e4 === null || e4 === void 0 ? void 0 : e4.query }, e4), ri && (a2 = Hi.render($i.createElement(c2), ui.getElementById("app")));
            var n3 = i2.current;
            if (n3 === null || n3 === void 0 ? void 0 : n3.taroGlobalData) {
              var r3 = n3.taroGlobalData, o3 = Object.keys(r3), u3 = Object.getOwnPropertyDescriptors(r3);
              o3.forEach(function(e5) {
                Object.defineProperty(t3, e5, { configurable: true, enumerable: true, get: function() {
                  return r3[e5];
                }, set: function(t4) {
                  r3[e5] = t4;
                } });
              }), Object.defineProperties(this, u3);
            }
            this.$app = n3, n3 != null && Object(_["isFunction"])(n3.onLaunch) && n3.onLaunch(e4);
          } }, onShow: { enumerable: true, writable: true, value: function(e4) {
            var t3 = i2.current;
            yi.router = Object.assign({ params: e4 === null || e4 === void 0 ? void 0 : e4.query }, e4), t3 != null && Object(_["isFunction"])(t3.componentDidShow) && t3.componentDidShow(e4), s2("onShow");
          } }, onHide: { enumerable: true, writable: true, value: function(e4) {
            var t3 = i2.current;
            t3 != null && Object(_["isFunction"])(t3.componentDidHide) && t3.componentDidHide(e4), s2("onHide");
          } }, onPageNotFound: { enumerable: true, writable: true, value: function(e4) {
            var t3 = i2.current;
            t3 != null && Object(_["isFunction"])(t3.onPageNotFound) && t3.onPageNotFound(e4);
          } } });
          function s2(e4) {
            var t3 = Si(x);
            if (t3) {
              var n3 = i2.current, r3 = Di.getLifecycle(t3, e4);
              Array.isArray(r3) && r3.forEach(function(e5) {
                return e5.apply(n3);
              });
            }
          }
          return yi.app = u2, yi.app;
        }
        var Gi, Ji = pe();
        function Ki(e3, t2) {
          var n2 = function(t3) {
            Object(y["a"])(r3, t3);
            var n3 = Object(O["a"])(r3);
            function r3() {
              var t4;
              return Object(w["a"])(this, r3), t4 = n3.apply(this, arguments), t4.root = e3.createRef(), t4.ctx = t4.props.getCtx(), t4;
            }
            return Object(k["a"])(r3, [{ key: "componentDidMount", value: function() {
              this.ctx.component = this;
              var e4 = this.root.current;
              e4.ctx = this.ctx, e4.performUpdate(true);
            } }, { key: "render", value: function() {
              return e3.createElement("root", { ref: this.root }, this.props.renderComponent(this.ctx));
            } }]), r3;
          }(e3.Component), r2 = function(t3) {
            Object(y["a"])(i3, t3);
            var r3 = Object(O["a"])(i3);
            function i3() {
              var e4;
              return Object(w["a"])(this, i3), e4 = r3.apply(this, arguments), e4.state = { components: [] }, e4;
            }
            return Object(k["a"])(i3, [{ key: "componentDidMount", value: function() {
              yi.app = this;
            } }, { key: "mount", value: function(t4, r4, i4) {
              var o2 = Ui(e3, t4), a2 = function(e4) {
                return e4 && Ci(e4, r4);
              }, c2 = o2 ? { ref: a2 } : { forwardedRef: a2, reactReduxForwardedRef: a2 }, u2 = { compId: r4, element: e3.createElement(n2, { key: r4, getCtx: i4, renderComponent: function(n3) {
                return e3.createElement(t4, Object.assign(Object.assign({}, (n3.data || (n3.data = {})).props), c2));
              } }) };
              this.setState({ components: [].concat(Object(h["a"])(this.state.components), [u2]) });
            } }, { key: "unmount", value: function(e4) {
              var t4 = this.state.components, n3 = t4.findIndex(function(t5) {
                return t5.compId === e4;
              }), r4 = [].concat(Object(h["a"])(t4.slice(0, n3)), Object(h["a"])(t4.slice(n3 + 1)));
              this.setState({ components: r4 });
            } }, { key: "render", value: function() {
              var e4 = this.state.components;
              return e4.map(function(e5) {
                var t4 = e5.element;
                return t4;
              });
            } }]), i3;
          }(e3.Component);
          Wi();
          var i2 = ui.getElementById("app");
          t2.render(e3.createElement(r2, {}), i2);
        }
        function Yi(e3, t2, n2, r2) {
          $i = t2, Hi = n2;
          var i2 = { properties: { props: { type: null, value: null, observer: function(e4, t3) {
            t3 && this.component.forceUpdate();
          } } }, created: function() {
            yi.app || Ki($i, Hi);
          }, attached: function() {
            var t3 = this;
            o2(), this.compId = Ji(), this.config = r2, yi.app.mount(e3, this.compId, function() {
              return t3;
            });
          }, ready: function() {
            Ai(this.compId, "onReady");
          }, detached: function() {
            yi.app.unmount(this.compId);
          }, pageLifetimes: { show: function() {
            Ai(this.compId, "onShow");
          }, hide: function() {
            Ai(this.compId, "onHide");
          } }, methods: { eh: ni } };
          function o2() {
            var e4 = getCurrentPages(), t3 = e4[e4.length - 1];
            if (yi.page !== t3) {
              yi.page = t3;
              var n3 = t3.route || t3.__route__, r3 = { params: t3.options || {}, path: Pi(n3), onReady: "", onHide: "", onShow: "" };
              yi.router = r3, t3.options || Object.defineProperty(t3, "options", { enumerable: true, configurable: true, get: function() {
                return this._optionsValue;
              }, set: function(e5) {
                r3.params = e5, this._optionsValue = e5;
              } });
            }
          }
          return i2;
        }
        function Zi(e3, t2) {
          return function(n2) {
            var r2 = e3.extend({ props: { tid: String }, mixins: [n2, { created: function() {
              Ci(this, t2);
            } }] }), i2 = { render: function(e4) {
              return e4(ri ? "div" : "root", { attrs: { id: t2, class: ri ? "taro_page" : "" } }, [e4(r2, { props: { tid: t2 } })]);
            } };
            return i2;
          };
        }
        function Xi() {
          var e3 = Jr.get(A.Hooks), t2 = function(e4, t3) {
            var n3 = e4.props;
            if (!n3.hasOwnProperty(t3) || Object(_["isBoolean"])(n3[t3]))
              return e4.setAttribute(t3, false), true;
          }, n2 = function(e4, t3) {
            return e4.$options[t3];
          };
          e3.onRemoveAttribute = t2, e3.getLifecycle = n2;
        }
        function eo(e3, t2, n2) {
          Gi = t2, Object(_["ensure"])(!!Gi, "\u6784\u5EFA Vue \u9879\u76EE\u8BF7\u628A process.env.FRAMEWORK \u8BBE\u7F6E\u4E3A 'vue'"), Xi(), Gi.config.getTagNamespace = _["noop"];
          var r2, i2 = [], o2 = [], a2 = new Gi({ render: function(t3) {
            while (o2.length > 0) {
              var n3 = o2.pop();
              i2.push(n3(t3));
            }
            return t3(e3, { ref: "app" }, i2.slice());
          }, methods: { mount: function(e4, t3, n3) {
            o2.push(function(n4) {
              return n4(e4, { key: t3 });
            }), this.updateSync(n3);
          }, updateSync: function(e4) {
            this._update(this._render(), false), this.$children.forEach(function(e5) {
              return e5._update(e5._render(), false);
            }), e4();
          }, unmount: function(e4, t3) {
            for (var n3 = 0; n3 < i2.length; n3++) {
              var r3 = i2[n3];
              if (r3.key === e4) {
                i2.splice(n3, 1);
                break;
              }
            }
            this.updateSync(t3);
          } } });
          ri || a2.$mount(ui.getElementById("app"));
          var c2 = Object.create({ mount: function(e4, t3, n3) {
            var r3 = Zi(Gi, t3)(e4);
            a2.mount(r3, t3, n3);
          }, unmount: function(e4, t3) {
            a2.unmount(e4, t3);
          } }, { config: { writable: true, enumerable: true, configurable: true, value: n2 }, onLaunch: { writable: true, enumerable: true, value: function(e4) {
            yi.router = Object.assign({ params: e4 === null || e4 === void 0 ? void 0 : e4.query }, e4), ri && a2.$mount(ui.getElementById("app")), r2 = a2.$refs.app, r2 != null && Object(_["isFunction"])(r2.$options.onLaunch) && r2.$options.onLaunch.call(r2, e4);
          } }, onShow: { writable: true, enumerable: true, value: function(e4) {
            yi.router = Object.assign({ params: e4 === null || e4 === void 0 ? void 0 : e4.query }, e4), r2 != null && Object(_["isFunction"])(r2.$options.onShow) && r2.$options.onShow.call(r2, e4);
          } }, onHide: { writable: true, enumerable: true, value: function(e4) {
            r2 != null && Object(_["isFunction"])(r2.$options.onHide) && r2.$options.onHide.call(r2, e4);
          } } });
          return yi.app = c2, yi.app;
        }
        function to(e3, t2) {
          return function(n2) {
            var r2, i2 = { props: { tid: String }, created: function() {
              Ci(this, t2), this.$nextTick(function() {
                Ai(t2, "onShow");
              });
            } };
            if (Object(_["isArray"])(n2.mixins)) {
              var o2 = n2.mixins, a2 = o2.length - 1;
              ((r2 = o2[a2].props) === null || r2 === void 0 ? void 0 : r2.tid) ? n2.mixins[a2] = i2 : n2.mixins.push(i2);
            } else
              n2.mixins = [i2];
            return e3(ri ? "div" : "root", { key: t2, id: t2, class: ri ? "taro_page" : "" }, [e3(Object.assign({}, n2), { tid: t2 })]);
          };
        }
        function no() {
          var e3 = Jr.get(A.Hooks), t2 = function(e4, t3) {
            return e4.$options[t3];
          }, n2 = function(e4) {
            e4.type = e4.type.replace(/-/g, "");
          };
          e3.getLifecycle = t2, e3.modifyMpEvent = n2;
        }
        function ro(e3, t2, n2) {
          var r2, i2 = [];
          Object(_["ensure"])(!Object(_["isFunction"])(e3._component), "\u5165\u53E3\u7EC4\u4EF6\u4E0D\u652F\u6301\u4F7F\u7528\u51FD\u6570\u5F0F\u7EC4\u4EF6"), no(), e3._component.render = function() {
            return i2.slice();
          }, ri || (r2 = e3.mount("#app"));
          var o2 = Object.create({ mount: function(e4, n3, r3) {
            var o3 = to(t2, n3)(e4);
            i2.push(o3), this.updateAppInstance(r3);
          }, unmount: function(e4, t3) {
            i2 = i2.filter(function(t4) {
              return t4.key !== e4;
            }), this.updateAppInstance(t3);
          }, updateAppInstance: function(e4) {
            r2.$forceUpdate(), r2.$nextTick(e4);
          } }, { config: { writable: true, enumerable: true, configurable: true, value: n2 }, onLaunch: { writable: true, enumerable: true, value: function(t3) {
            var n3;
            yi.router = Object.assign({ params: t3 === null || t3 === void 0 ? void 0 : t3.query }, t3), ri && (r2 = e3.mount("#app"));
            var i3 = (n3 = r2 === null || r2 === void 0 ? void 0 : r2.$options) === null || n3 === void 0 ? void 0 : n3.onLaunch;
            Object(_["isFunction"])(i3) && i3.call(r2, t3);
          } }, onShow: { writable: true, enumerable: true, value: function(e4) {
            var t3;
            yi.router = Object.assign({ params: e4 === null || e4 === void 0 ? void 0 : e4.query }, e4);
            var n3 = (t3 = r2 === null || r2 === void 0 ? void 0 : r2.$options) === null || t3 === void 0 ? void 0 : t3.onShow;
            Object(_["isFunction"])(n3) && n3.call(r2, e4);
          } }, onHide: { writable: true, enumerable: true, value: function(e4) {
            var t3, n3 = (t3 = r2 === null || r2 === void 0 ? void 0 : r2.$options) === null || t3 === void 0 ? void 0 : t3.onHide;
            Object(_["isFunction"])(n3) && n3.call(r2, e4);
          } } });
          return yi.app = o2, yi.app;
        }
        var io = function(e3) {
          return function(t2) {
            var n2 = $i.useContext(zi) || x, r2 = $i.useRef(t2);
            r2.current !== t2 && (r2.current = t2), $i.useLayoutEffect(function() {
              var t3 = Si(n2), i2 = false;
              t3 == null && (i2 = true, t3 = Object.create(null)), t3 = t3;
              var o2 = function() {
                return r2.current.apply(r2, arguments);
              };
              return Object(_["isFunction"])(t3[e3]) ? t3[e3] = [t3[e3], o2] : t3[e3] = [].concat(Object(h["a"])(t3[e3] || []), [o2]), i2 && Ci(t3, n2), function() {
                var t4 = Si(n2), r3 = t4[e3];
                r3 === o2 ? t4[e3] = void 0 : Object(_["isArray"])(r3) && (t4[e3] = r3.filter(function(e4) {
                  return e4 !== o2;
                }));
              };
            }, []);
          };
        }, oo = io("componentDidShow"), ao = io("componentDidHide"), co = io("onPullDownRefresh"), uo = io("onReachBottom"), so = io("onPageScroll"), lo = io("onResize"), fo = io("onShareAppMessage"), ho = io("onTabItemTap"), po = io("onTitleClick"), vo = io("onOptionMenuClick"), bo = io("onPullIntercept"), mo = io("onShareTimeline"), go = io("onAddToFavorites"), yo = io("onReady"), Oo = function() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
          return e3 ? yi.router : $i.useMemo(function() {
            return yi.router;
          }, []);
        }, jo = function() {
        };
        function wo(e3) {
          return e3 == null ? "" : e3.charAt(0) === "/" ? e3.slice(1) : e3;
        }
        var ko = function(e3, t2) {
          var n2, r2, i2, o2 = yi.router, a2 = function() {
            setTimeout(function() {
              t2 ? e3.call(t2) : e3();
            }, 1);
          };
          if (o2 !== null) {
            var c2 = null, u2 = Ii(wo(o2.path), o2.params);
            c2 = ui.getElementById(u2), c2 !== null ? ri ? (i2 = (r2 = (n2 = c2.firstChild) === null || n2 === void 0 ? void 0 : n2["componentOnReady"]) === null || r2 === void 0 ? void 0 : r2.call(n2).then(function() {
              a2();
            })) !== null && i2 !== void 0 || a2() : c2.enqueueUpdateCallback(e3, t2) : a2();
          } else
            a2();
        };
      }.call(this, n(52), n(33), n(2)["document"], n(2)["window"], n(2)["requestAnimationFrame"], n(2)["cancelAnimationFrame"]);
    }, 38: function(e, t, n) {
      var r = n(2), i = r.container, o = r.SERVICE_IDENTIFIER, a = n(55).default, c = i.get(o.Hooks);
      typeof c.initNativeApi === "function" && c.initNativeApi(a), e.exports = a, e.exports.default = e.exports;
    }, 40: function(e, t, n) {
      "use strict";
      var r = n(3), i = n(4), o = n(41), a = n.n(o), c = n(27), u = n(2), s = n(0);
      function l(e2) {
        return e2[0] === "o" && e2[1] === "n";
      }
      var d = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
      function f(e2, t2, n2) {
        var r2;
        for (r2 in t2)
          r2 in n2 || v(e2, r2, null, t2[r2]);
        var i2 = e2 instanceof u["FormElement"];
        for (r2 in n2)
          (t2[r2] !== n2[r2] || i2 && r2 === "value") && v(e2, r2, n2[r2], t2[r2]);
      }
      function h(e2, t2, n2, r2) {
        var i2 = t2.endsWith("Capture"), o2 = t2.toLowerCase().slice(2);
        i2 && (o2 = o2.slice(0, -7));
        var a2 = Object(s["capitalize"])(Object(s["toCamelCase"])(e2.tagName.toLowerCase()));
        o2 === "click" && a2 in s["internalComponents"] && (o2 = "tap"), Object(s["isFunction"])(n2) ? (r2 || e2.addEventListener(o2, n2, i2), o2 === "regionchange" ? (e2.__handlers.begin[0] = n2, e2.__handlers.end[0] = n2) : e2.__handlers[o2][0] = n2) : e2.removeEventListener(o2, r2);
      }
      function p(e2, t2, n2) {
        t2[0] === "-" && e2.setProperty(t2, n2.toString()), e2[t2] = Object(s["isNumber"])(n2) && d.test(t2) === false ? n2 + "px" : n2 == null ? "" : n2;
      }
      function v(e2, t2, n2, r2) {
        var i2, o2, a2, c2;
        if (t2 = t2 === "className" ? "class" : t2, t2 === "key" || t2 === "children" || t2 === "ref")
          ;
        else if (t2 === "style") {
          var u2 = e2.style;
          if (Object(s["isString"])(n2))
            u2.cssText = n2;
          else {
            if (Object(s["isString"])(r2) && (u2.cssText = "", r2 = null), Object(s["isObject"])(r2))
              for (var d2 in r2)
                n2 && d2 in n2 || p(u2, d2, "");
            if (Object(s["isObject"])(n2))
              for (var f2 in n2)
                r2 && n2[f2] === r2[f2] || p(u2, f2, n2[f2]);
          }
        } else if (l(t2))
          h(e2, t2, n2, r2);
        else if (t2 === "dangerouslySetInnerHTML") {
          var v2 = (o2 = (i2 = n2) === null || i2 === void 0 ? void 0 : i2.__html) !== null && o2 !== void 0 ? o2 : "", b2 = (c2 = (a2 = r2) === null || a2 === void 0 ? void 0 : a2.__html) !== null && c2 !== void 0 ? c2 : "";
          (v2 || b2) && b2 !== v2 && (e2.innerHTML = v2);
        } else
          Object(s["isFunction"])(n2) || (n2 == null ? e2.removeAttribute(t2) : e2.setAttribute(t2, n2));
      }
      var b = c["unstable_now"];
      function m() {
        return false;
      }
      var g = { createInstance: function(e2) {
        return u["document"].createElement(e2);
      }, createTextInstance: function(e2) {
        return u["document"].createTextNode(e2);
      }, getPublicInstance: function(e2) {
        return e2;
      }, getRootHostContext: function() {
        return {};
      }, getChildHostContext: function() {
        return {};
      }, appendChild: function(e2, t2) {
        e2.appendChild(t2);
      }, appendInitialChild: function(e2, t2) {
        e2.appendChild(t2);
      }, appendChildToContainer: function(e2, t2) {
        e2.appendChild(t2);
      }, removeChild: function(e2, t2) {
        e2.removeChild(t2);
      }, removeChildFromContainer: function(e2, t2) {
        e2.removeChild(t2);
      }, insertBefore: function(e2, t2, n2) {
        e2.insertBefore(t2, n2);
      }, insertInContainerBefore: function(e2, t2, n2) {
        e2.insertBefore(t2, n2);
      }, commitTextUpdate: function(e2, t2, n2) {
        e2.nodeValue = n2;
      }, finalizeInitialChildren: function(e2, t2, n2) {
        return f(e2, {}, n2), false;
      }, prepareUpdate: function() {
        return s["EMPTY_ARR"];
      }, commitUpdate: function(e2, t2, n2, r2, i2) {
        f(e2, r2, i2);
      }, hideInstance: function(e2) {
        var t2 = e2.style;
        t2.setProperty("display", "none");
      }, unhideInstance: function(e2, t2) {
        var n2 = t2.style, r2 = (n2 === null || n2 === void 0 ? void 0 : n2.hasOwnProperty("display")) ? n2.display : null;
        r2 = r2 == null || typeof r2 === "boolean" || r2 === "" ? "" : ("" + r2).trim(), e2.style["display"] = r2;
      }, clearContainer: function(e2) {
        e2.childNodes.length > 0 && (e2.textContent = "");
      }, queueMicrotask: typeof Promise !== "undefined" ? function(e2) {
        return Promise.resolve(null).then(e2).catch(function(e3) {
          setTimeout(function() {
            throw e3;
          });
        });
      } : setTimeout, shouldSetTextContent: m, prepareForCommit: function() {
        return null;
      }, resetAfterCommit: s["noop"], commitMount: s["noop"], now: b, cancelTimeout: clearTimeout, scheduleTimeout: setTimeout, preparePortalMount: s["noop"], noTimeout: -1, supportsMutation: true, supportsPersistence: false, isPrimaryRenderer: true, supportsHydration: false }, y = a()(g), O = new WeakMap(), j = function() {
        function e2(t2, n2) {
          Object(r["a"])(this, e2), this.renderer = t2, this.internalRoot = t2.createContainer(n2, 0, false, null);
        }
        return Object(i["a"])(e2, [{ key: "render", value: function(e3, t2) {
          return this.renderer.updateContainer(e3, this.internalRoot, null, t2), this.renderer.getPublicRootInstance(this.internalRoot);
        } }, { key: "unmount", value: function(e3) {
          this.renderer.updateContainer(null, this.internalRoot, null, e3);
        } }]), e2;
      }();
      function w(e2, t2, n2) {
        var r2 = O.get(t2);
        if (r2 != null)
          return r2.render(e2, n2);
        var i2 = new j(y, t2);
        return O.set(t2, i2), i2.render(e2, n2);
      }
      var k = y.batchedUpdates;
      function T(e2) {
        Object(s["ensure"])(e2 && [1, 8, 9, 11].includes(e2.nodeType), "unmountComponentAtNode(...): Target container is not a DOM element.");
        var t2 = O.get(e2);
        return !!t2 && (k(function() {
          t2.unmount(function() {
            O.delete(e2);
          });
        }, null), true);
      }
      function E(e2) {
        if (e2 == null)
          return null;
        var t2 = e2.nodeType;
        return t2 === 1 || t2 === 3 ? e2 : y.findHostInstance(e2);
      }
      var _ = typeof Symbol === "function" && Symbol.for ? Symbol.for("react.portal") : 60106;
      function C(e2, t2, n2) {
        return { $$typeof: _, key: n2 == null ? null : String(n2), children: e2, containerInfo: t2, implementation: null };
      }
      var S = { render: w, unstable_batchedUpdates: k, unmountComponentAtNode: T, findDOMNode: E, createPortal: C };
      t["a"] = S;
    }, 46: function(e, t, n) {
      "use strict";
      var r = n(0), i = new Set(["authPrivateMessage", "disableAlertBeforeUnload", "enableAlertBeforeUnload", "getBackgroundFetchData", "getGroupEnterInfo", "getShareInfo", "getWeRunData", "join1v1Chat", "openVideoEditor", "saveFileToDisk", "scanItem", "setEnable1v1Chat", "setWindowSize", "sendBizRedPacket", "startFacialRecognitionVerify"]);
      function o(e2) {
        Object(r["processApis"])(e2, wx, { needPromiseApis: i, modifyApis: function(e3) {
          e3.delete("lanDebug");
        } }), e2.cloud = wx.cloud;
      }
      var a = { Progress: { "border-radius": "0", "font-size": "16", duration: "30", bindActiveEnd: "" }, RichText: { space: "" }, Text: { "user-select": "false" }, Map: { polygons: "[]", subkey: "", rotate: "0", skew: "0", "enable-3D": "false", "show-compass": "false", "show-scale": "false", "enable-overlooking": "false", "enable-zoom": "true", "enable-scroll": "true", "enable-rotate": "false", "enable-satellite": "false", "enable-traffic": "false", setting: "[]", bindLabelTap: "", bindRegionChange: "", bindPoiTap: "" }, Button: { lang: "en", "session-from": "", "send-message-title": "", "send-message-path": "", "send-message-img": "", "app-parameter": "", "show-message-card": "false", "business-id": "", bindGetUserInfo: "", bindContact: "", bindGetPhoneNumber: "", bindError: "", bindOpenSetting: "", bindLaunchApp: "" }, Form: { "report-submit-timeout": "0" }, Input: { "always-embed": "false", "adjust-position": "true", "hold-keyboard": "false", bindKeyboardHeightChange: "" }, Picker: { "header-text": "" }, PickerView: { bindPickStart: "", bindPickEnd: "" }, Slider: { color: Object(r["singleQuote"])("#e9e9e9"), "selected-color": Object(r["singleQuote"])("#1aad19") }, Textarea: { "show-confirm-bar": "true", "adjust-position": "true", "hold-keyboard": "false", "disable-default-padding": "false", "confirm-type": Object(r["singleQuote"])("return"), "confirm-hold": "false", bindKeyboardHeightChange: "" }, ScrollView: { "enable-flex": "false", "scroll-anchoring": "false", "refresher-enabled": "false", "refresher-threshold": "45", "refresher-default-style": Object(r["singleQuote"])("black"), "refresher-background": Object(r["singleQuote"])("#FFF"), "refresher-triggered": "false", enhanced: "false", bounces: "true", "show-scrollbar": "true", "paging-enabled": "false", "fast-deceleration": "false", bindDragStart: "", bindDragging: "", bindDragEnd: "", bindRefresherPulling: "", bindRefresherRefresh: "", bindRefresherRestore: "", bindRefresherAbort: "" }, Swiper: { "snap-to-edge": "false", "easing-function": Object(r["singleQuote"])("default") }, SwiperItem: { "skip-hidden-item-layout": "false" }, Navigator: { target: Object(r["singleQuote"])("self"), "app-id": "", path: "", "extra-data": "", version: Object(r["singleQuote"])("version") }, Camera: { mode: Object(r["singleQuote"])("normal"), resolution: Object(r["singleQuote"])("medium"), "frame-size": Object(r["singleQuote"])("medium"), bindInitDone: "", bindScanCode: "" }, Image: { webp: "false", "show-menu-by-longpress": "false" }, LivePlayer: { mode: Object(r["singleQuote"])("live"), "sound-mode": Object(r["singleQuote"])("speaker"), "auto-pause-if-navigate": "true", "auto-pause-if-open-native": "true", "picture-in-picture-mode": "[]", bindstatechange: "", bindfullscreenchange: "", bindnetstatus: "", bindAudioVolumeNotify: "", bindEnterPictureInPicture: "", bindLeavePictureInPicture: "" }, Video: { title: "", "play-btn-position": Object(r["singleQuote"])("bottom"), "enable-play-gesture": "false", "auto-pause-if-navigate": "true", "auto-pause-if-open-native": "true", "vslide-gesture": "false", "vslide-gesture-in-fullscreen": "true", "ad-unit-id": "", "poster-for-crawler": "", "show-casting-button": "false", "picture-in-picture-mode": "[]", "enable-auto-rotation": "false", "show-screen-lock-button": "false", "show-snapshot-button": "false", "show-background-playback-button": "false", "background-poster": "", bindProgress: "", bindLoadedMetadata: "", bindControlsToggle: "", bindEnterPictureInPicture: "", bindLeavePictureInPicture: "", bindSeekComplete: "", bindAdLoad: "", bindAdError: "", bindAdClose: "", bindAdPlay: "" }, Canvas: { type: "" }, Ad: { "ad-type": Object(r["singleQuote"])("banner"), "ad-theme": Object(r["singleQuote"])("white") }, CoverView: { "marker-id": "", slot: "" }, Editor: { "read-only": "false", placeholder: "", "show-img-size": "false", "show-img-toolbar": "false", "show-img-resize": "false", focus: "false", bindReady: "", bindFocus: "", bindBlur: "", bindInput: "", bindStatusChange: "", name: "" }, MatchMedia: { "min-width": "", "max-width": "", width: "", "min-height": "", "max-height": "", height: "", orientation: "" }, FunctionalPageNavigator: { version: Object(r["singleQuote"])("release"), name: "", args: "", bindSuccess: "", bindFail: "", bindCancel: "" }, LivePusher: { url: "", mode: Object(r["singleQuote"])("RTC"), autopush: "false", muted: "false", "enable-camera": "true", "auto-focus": "true", orientation: Object(r["singleQuote"])("vertical"), beauty: "0", whiteness: "0", aspect: Object(r["singleQuote"])("9:16"), "min-bitrate": "200", "max-bitrate": "1000", "audio-quality": Object(r["singleQuote"])("high"), "waiting-image": "", "waiting-image-hash": "", zoom: "false", "device-position": Object(r["singleQuote"])("front"), "background-mute": "false", mirror: "false", "remote-mirror": "false", "local-mirror": "false", "audio-reverb-type": "0", "enable-mic": "true", "enable-agc": "false", "enable-ans": "false", "audio-volume-type": Object(r["singleQuote"])("voicecall"), "video-width": "360", "video-height": "640", "beauty-style": Object(r["singleQuote"])("smooth"), filter: Object(r["singleQuote"])("standard"), animation: "", bindStateChange: "", bindNetStatus: "", bindBgmStart: "", bindBgmProgress: "", bindBgmComplete: "", bindAudioVolumeNotify: "" }, OfficialAccount: { bindLoad: "", bindError: "" }, OpenData: { type: "", "open-gid": "", lang: Object(r["singleQuote"])("en"), "default-text": "", "default-avatar": "", bindError: "" }, NavigationBar: { title: "", loading: "false", "front-color": "", "background-color": "", "color-animation-duration": "0", "color-animation-timing-func": Object(r["singleQuote"])("linear") }, PageMeta: { "background-text-style": "", "background-color": "", "background-color-top": "", "background-color-bottom": "", "scroll-top": Object(r["singleQuote"])(""), "scroll-duration": "300", "page-style": Object(r["singleQuote"])(""), "root-font-size": Object(r["singleQuote"])(""), bindResize: "", bindScroll: "", bindScrollDone: "" }, VoipRoom: { openid: "", mode: Object(r["singleQuote"])("camera"), "device-position": Object(r["singleQuote"])("front"), bindError: "" }, AdCustom: { "unit-id": "", "ad-intervals": "", bindLoad: "", bindError: "" }, PageContainer: { show: "false", duration: "300", "z-index": "100", overlay: "true", position: Object(r["singleQuote"])("bottom"), round: "false", "close-on-slideDown": "false", "overlay-style": "", "custom-style": "", bindBeforeEnter: "", bindEnter: "", bindAfterEnter: "", bindBeforeLeave: "", bindLeave: "", bindAfterLeave: "", bindClickOverlay: "" }, KeyboardAccessory: {} }, c = { initNativeApi: o };
      Object(r["mergeReconciler"])(c), Object(r["mergeInternalComponents"])(a);
    }, 55: function(e, t, n) {
      "use strict";
      n.r(t), function(e2, r) {
        var i = n(10), o = n.n(i), a = n(39), c = n.n(a), u = n(29), s = n.n(u), l = n(30), d = n.n(l), f = n(26), h = n.n(f), p = n(2);
        typeof Object.assign !== "function" && (Object.assign = function(e3) {
          if (e3 == null)
            throw new TypeError("Cannot convert undefined or null to object");
          for (var t2 = Object(e3), n2 = 1; n2 < arguments.length; n2++) {
            var r2 = arguments[n2];
            if (r2 != null)
              for (var i2 in r2)
                Object.prototype.hasOwnProperty.call(r2, i2) && (t2[i2] = r2[i2]);
          }
          return t2;
        }), typeof Object.defineProperties !== "function" && (Object.defineProperties = function(e3, t2) {
          function n2(e4) {
            function t3(e5, t4) {
              return Object.prototype.hasOwnProperty.call(e5, t4);
            }
            function n3(e5) {
              return typeof e5 === "function";
            }
            if (o()(e4) !== "object" || e4 === null)
              throw new TypeError("bad desc");
            var r3 = {};
            if (t3(e4, "enumerable") && (r3.enumerable = !!e4.enumerable), t3(e4, "configurable") && (r3.configurable = !!e4.configurable), t3(e4, "value") && (r3.value = e4.value), t3(e4, "writable") && (r3.writable = !!e4.writable), t3(e4, "get")) {
              var i3 = e4.get;
              if (!n3(i3) && typeof i3 !== "undefined")
                throw new TypeError("bad get");
              r3.get = i3;
            }
            if (t3(e4, "set")) {
              var a3 = e4.set;
              if (!n3(a3) && typeof a3 !== "undefined")
                throw new TypeError("bad set");
              r3.set = a3;
            }
            if (("get" in r3 || "set" in r3) && ("value" in r3 || "writable" in r3))
              throw new TypeError("identity-confused descriptor");
            return r3;
          }
          if (o()(e3) !== "object" || e3 === null)
            throw new TypeError("bad obj");
          t2 = Object(t2);
          for (var r2 = Object.keys(t2), i2 = [], a2 = 0; a2 < r2.length; a2++)
            i2.push([r2[a2], n2(t2[r2[a2]])]);
          for (var c2 = 0; c2 < i2.length; c2++)
            Object.defineProperty(e3, i2[c2][0], i2[c2][1]);
          return e3;
        });
        var v = { WEAPP: "WEAPP", WEB: "WEB", RN: "RN", SWAN: "SWAN", ALIPAY: "ALIPAY", TT: "TT", QQ: "QQ", JD: "JD" }, b = null;
        function m() {
          return b || (typeof jd !== "undefined" && jd.getSystemInfo ? (b = v.JD, v.JD) : typeof qq !== "undefined" && qq.getSystemInfo ? (b = v.QQ, v.QQ) : typeof tt !== "undefined" && tt.getSystemInfo ? (b = v.TT, v.TT) : typeof wx !== "undefined" && wx.getSystemInfo ? (b = v.WEAPP, v.WEAPP) : typeof swan !== "undefined" && swan.getSystemInfo ? (b = v.SWAN, v.SWAN) : typeof my !== "undefined" && my.getSystemInfo ? (b = v.ALIPAY, v.ALIPAY) : typeof e2 !== "undefined" && e2.__fbGenNativeModule ? (b = v.RN, v.RN) : typeof r !== "undefined" ? (b = v.WEB, v.WEB) : "Unknown environment");
        }
        var g = function() {
          function e3(t2) {
            var n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
            s()(this, e3), this.index = r2, this.requestParams = t2, this.interceptors = n2;
          }
          return d()(e3, [{ key: "proceed", value: function(e4) {
            if (this.requestParams = e4, this.index >= this.interceptors.length)
              throw new Error("chain \u53C2\u6570\u9519\u8BEF, \u8BF7\u52FF\u76F4\u63A5\u4FEE\u6539 request.chain");
            var t2 = this._getNextInterceptor(), n2 = this._getNextChain(), r2 = t2(n2), i2 = r2.catch(function(e5) {
              return Promise.reject(e5);
            });
            return typeof r2.abort === "function" && (i2.abort = r2.abort), i2;
          } }, { key: "_getNextInterceptor", value: function() {
            return this.interceptors[this.index];
          } }, { key: "_getNextChain", value: function() {
            return new e3(this.requestParams, this.interceptors, this.index + 1);
          } }]), e3;
        }(), y = function() {
          function e3(t2) {
            s()(this, e3), this.taroInterceptor = t2, this.chain = new g();
          }
          return d()(e3, [{ key: "request", value: function(e4) {
            var t2 = this;
            return this.chain.interceptors = this.chain.interceptors.filter(function(e5) {
              return e5 !== t2.taroInterceptor;
            }), this.chain.interceptors.push(this.taroInterceptor), this.chain.proceed(c()({}, e4));
          } }, { key: "addInterceptor", value: function(e4) {
            this.chain.interceptors.push(e4);
          } }, { key: "cleanInterceptors", value: function() {
            this.chain = new g();
          } }]), e3;
        }();
        function O(e3) {
          var t2, n2 = e3.requestParams, r2 = new Promise(function(r3, i2) {
            var o2 = setTimeout(function() {
              o2 = null, i2(new Error("\u7F51\u7EDC\u94FE\u63A5\u8D85\u65F6,\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01"));
            }, n2 && n2.timeout || 6e4);
            t2 = e3.proceed(n2), t2.then(function(e4) {
              o2 && (clearTimeout(o2), r3(e4));
            }).catch(function(e4) {
              o2 && clearTimeout(o2), i2(e4);
            });
          });
          return t2 !== void 0 && typeof t2.abort === "function" && (r2.abort = t2.abort), r2;
        }
        function j(e3) {
          var t2 = e3.requestParams, n2 = t2.method, r2 = t2.data, i2 = t2.url;
          console.log("http ".concat(n2 || "GET", " --> ").concat(i2, " data: "), r2);
          var o2 = e3.proceed(t2), a2 = o2.then(function(e4) {
            return console.log("http <-- ".concat(i2, " result:"), e4), e4;
          });
          return typeof o2.abort === "function" && (a2.abort = o2.abort), a2;
        }
        var w = Object.freeze({ __proto__: null, timeoutInterceptor: O, logInterceptor: j });
        function k(e3) {
          return e3;
        }
        function T(e3) {
          return function(t2, n2) {
            o()(t2) === "object" ? e3.preloadData = t2 : t2 !== void 0 && n2 !== void 0 && (e3.preloadData = h()({}, t2, n2));
          };
        }
        function E(e3) {
          return function(t2) {
            var n2 = t2.designWidth, r2 = n2 === void 0 ? 750 : n2, i2 = t2.deviceRatio, o2 = i2 === void 0 ? { 640: 1.17, 750: 1, 828: 0.905 } : i2;
            e3.config = e3.config || {}, e3.config.designWidth = r2, e3.config.deviceRatio = o2;
          };
        }
        function _(e3) {
          return function(t2) {
            var n2 = e3.config || {}, r2 = n2.designWidth, i2 = r2 === void 0 ? 750 : r2, o2 = n2.deviceRatio, a2 = o2 === void 0 ? { 640: 1.17, 750: 1, 828: 0.905 } : o2;
            if (!(i2 in a2))
              throw new Error("deviceRatio \u914D\u7F6E\u4E2D\u4E0D\u5B58\u5728 ".concat(i2, " \u7684\u8BBE\u7F6E\uFF01"));
            return parseInt(t2, 10) * a2[i2] + "rpx";
          };
        }
        var C = { Behavior: k, getEnv: m, ENV_TYPE: v, Link: y, interceptors: w, Current: p["Current"], getCurrentInstance: p["getCurrentInstance"], options: p["options"], nextTick: p["nextTick"], eventCenter: p["eventCenter"], Events: p["Events"], useDidShow: p["useDidShow"], useDidHide: p["useDidHide"], usePullDownRefresh: p["usePullDownRefresh"], useReachBottom: p["useReachBottom"], usePageScroll: p["usePageScroll"], useResize: p["useResize"], useShareAppMessage: p["useShareAppMessage"], useTabItemTap: p["useTabItemTap"], useTitleClick: p["useTitleClick"], useOptionMenuClick: p["useOptionMenuClick"], usePullIntercept: p["usePullIntercept"], useShareTimeline: p["useShareTimeline"], useAddToFavorites: p["useAddToFavorites"], useReady: p["useReady"], useRouter: p["useRouter"], getInitPxTransform: E };
        C.initPxTransform = E(C), C.preload = T(p["Current"]), C.pxTransform = _(C), t["default"] = C;
      }.call(this, n(33), n(2)["window"]);
    }, 64: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n(2);
      Component(Object(r["createRecursiveComponentConfig"])());
    }, 65: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      var r = n(2);
      Component(r.createRecursiveComponentConfig("custom-wrapper"));
    } }]);
  }
});

// taro/dist/app.js
var require_app = __commonJS({
  "taro/dist/app.js"() {
    window["__pages__"] = ["pages/index/index"];
    require_runtime(), require_vendors(), require_taro(), (wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[3], { 26: function(e, n) {
      function t(e2, n2, t2) {
        return n2 in e2 ? Object.defineProperty(e2, n2, { value: t2, enumerable: true, configurable: true, writable: true }) : e2[n2] = t2, e2;
      }
      e.exports = t, e.exports["default"] = e.exports, e.exports.__esModule = true;
    }, 27: function(e, n, t) {
      "use strict";
      e.exports = t(59);
    }, 29: function(e, n) {
      function t(e2, n2) {
        if (!(e2 instanceof n2))
          throw new TypeError("Cannot call a class as a function");
      }
      e.exports = t, e.exports["default"] = e.exports, e.exports.__esModule = true;
    }, 30: function(e, n) {
      function t(e2, n2) {
        for (var t2 = 0; t2 < n2.length; t2++) {
          var r2 = n2[t2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
        }
      }
      function r(e2, n2, r2) {
        return n2 && t(e2.prototype, n2), r2 && t(e2, r2), e2;
      }
      e.exports = r, e.exports["default"] = e.exports, e.exports.__esModule = true;
    }, 39: function(e, n, t) {
      var r = t(26);
      function l(e2, n2) {
        var t2 = Object.keys(e2);
        if (Object.getOwnPropertySymbols) {
          var r2 = Object.getOwnPropertySymbols(e2);
          n2 && (r2 = r2.filter(function(n3) {
            return Object.getOwnPropertyDescriptor(e2, n3).enumerable;
          })), t2.push.apply(t2, r2);
        }
        return t2;
      }
      function a(e2) {
        for (var n2 = 1; n2 < arguments.length; n2++) {
          var t2 = arguments[n2] != null ? arguments[n2] : {};
          n2 % 2 ? l(Object(t2), true).forEach(function(n3) {
            r(e2, n3, t2[n3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : l(Object(t2)).forEach(function(n3) {
            Object.defineProperty(e2, n3, Object.getOwnPropertyDescriptor(t2, n3));
          });
        }
        return e2;
      }
      e.exports = a, e.exports["default"] = e.exports, e.exports.__esModule = true;
    }, 41: function(e, n, t) {
      "use strict";
      e.exports = t(58);
    }, 57: function(e, n, t) {
    }, 58: function(e, n, t) {
      (function(e2) {
        var n2 = t(10);
        e2.exports = function(r) {
          var l = {}, a = t(25), u = t(14), i = t(27);
          function o(e3) {
            for (var n3 = "https://reactjs.org/docs/error-decoder.html?invariant=" + e3, t2 = 1; t2 < arguments.length; t2++)
              n3 += "&args[]=" + encodeURIComponent(arguments[t2]);
            return "Minified React error #" + e3 + "; visit " + n3 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
          }
          var s = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, c = 60103, f = 60106, d = 60107, p = 60108, h = 60114, m = 60109, g = 60110, v = 60112, b = 60113, y = 60120, k = 60115, S = 60116, w = 60121, E = 60129, x = 60130, _ = 60131;
          if (typeof Symbol === "function" && Symbol.for) {
            var z = Symbol.for;
            c = z("react.element"), f = z("react.portal"), d = z("react.fragment"), p = z("react.strict_mode"), h = z("react.profiler"), m = z("react.provider"), g = z("react.context"), v = z("react.forward_ref"), b = z("react.suspense"), y = z("react.suspense_list"), k = z("react.memo"), S = z("react.lazy"), w = z("react.block"), z("react.scope"), E = z("react.debug_trace_mode"), x = z("react.offscreen"), _ = z("react.legacy_hidden");
          }
          var P = typeof Symbol === "function" && Symbol.iterator;
          function N(e3) {
            return e3 === null || n2(e3) !== "object" ? null : (e3 = P && e3[P] || e3["@@iterator"], typeof e3 === "function" ? e3 : null);
          }
          function C(e3) {
            if (e3 == null)
              return null;
            if (typeof e3 === "function")
              return e3.displayName || e3.name || null;
            if (typeof e3 === "string")
              return e3;
            switch (e3) {
              case d:
                return "Fragment";
              case f:
                return "Portal";
              case h:
                return "Profiler";
              case p:
                return "StrictMode";
              case b:
                return "Suspense";
              case y:
                return "SuspenseList";
            }
            if (n2(e3) === "object")
              switch (e3.$$typeof) {
                case g:
                  return (e3.displayName || "Context") + ".Consumer";
                case m:
                  return (e3._context.displayName || "Context") + ".Provider";
                case v:
                  var t2 = e3.render;
                  return t2 = t2.displayName || t2.name || "", e3.displayName || (t2 !== "" ? "ForwardRef(" + t2 + ")" : "ForwardRef");
                case k:
                  return C(e3.type);
                case w:
                  return C(e3._render);
                case S:
                  t2 = e3._payload, e3 = e3._init;
                  try {
                    return C(e3(t2));
                  } catch (e4) {
                  }
              }
            return null;
          }
          function L(e3) {
            var n3 = e3, t2 = e3;
            if (e3.alternate)
              for (; n3.return; )
                n3 = n3.return;
            else {
              e3 = n3;
              do {
                n3 = e3, (1026 & n3.flags) !== 0 && (t2 = n3.return), e3 = n3.return;
              } while (e3);
            }
            return n3.tag === 3 ? t2 : null;
          }
          function I(e3) {
            if (L(e3) !== e3)
              throw Error(o(188));
          }
          function T(e3) {
            var n3 = e3.alternate;
            if (!n3) {
              if (n3 = L(e3), n3 === null)
                throw Error(o(188));
              return n3 !== e3 ? null : e3;
            }
            for (var t2 = e3, r2 = n3; ; ) {
              var l2 = t2.return;
              if (l2 === null)
                break;
              var a2 = l2.alternate;
              if (a2 === null) {
                if (r2 = l2.return, r2 !== null) {
                  t2 = r2;
                  continue;
                }
                break;
              }
              if (l2.child === a2.child) {
                for (a2 = l2.child; a2; ) {
                  if (a2 === t2)
                    return I(l2), e3;
                  if (a2 === r2)
                    return I(l2), n3;
                  a2 = a2.sibling;
                }
                throw Error(o(188));
              }
              if (t2.return !== r2.return)
                t2 = l2, r2 = a2;
              else {
                for (var u2 = false, i2 = l2.child; i2; ) {
                  if (i2 === t2) {
                    u2 = true, t2 = l2, r2 = a2;
                    break;
                  }
                  if (i2 === r2) {
                    u2 = true, r2 = l2, t2 = a2;
                    break;
                  }
                  i2 = i2.sibling;
                }
                if (!u2) {
                  for (i2 = a2.child; i2; ) {
                    if (i2 === t2) {
                      u2 = true, t2 = a2, r2 = l2;
                      break;
                    }
                    if (i2 === r2) {
                      u2 = true, r2 = a2, t2 = l2;
                      break;
                    }
                    i2 = i2.sibling;
                  }
                  if (!u2)
                    throw Error(o(189));
                }
              }
              if (t2.alternate !== r2)
                throw Error(o(190));
            }
            if (t2.tag !== 3)
              throw Error(o(188));
            return t2.stateNode.current === t2 ? e3 : n3;
          }
          function R(e3) {
            if (e3 = T(e3), !e3)
              return null;
            for (var n3 = e3; ; ) {
              if (n3.tag === 5 || n3.tag === 6)
                return n3;
              if (n3.child)
                n3.child.return = n3, n3 = n3.child;
              else {
                if (n3 === e3)
                  break;
                for (; !n3.sibling; ) {
                  if (!n3.return || n3.return === e3)
                    return null;
                  n3 = n3.return;
                }
                n3.sibling.return = n3.return, n3 = n3.sibling;
              }
            }
            return null;
          }
          function U(e3) {
            if (e3 = T(e3), !e3)
              return null;
            for (var n3 = e3; ; ) {
              if (n3.tag === 5 || n3.tag === 6)
                return n3;
              if (n3.child && n3.tag !== 4)
                n3.child.return = n3, n3 = n3.child;
              else {
                if (n3 === e3)
                  break;
                for (; !n3.sibling; ) {
                  if (!n3.return || n3.return === e3)
                    return null;
                  n3 = n3.return;
                }
                n3.sibling.return = n3.return, n3 = n3.sibling;
              }
            }
            return null;
          }
          function M(e3, n3) {
            for (var t2 = e3.alternate; n3 !== null; ) {
              if (n3 === e3 || n3 === t2)
                return true;
              n3 = n3.return;
            }
            return false;
          }
          var D, O = r.getPublicInstance, j = r.getRootHostContext, F = r.getChildHostContext, B = r.prepareForCommit, Q = r.resetAfterCommit, H = r.createInstance, W = r.appendInitialChild, A = r.finalizeInitialChildren, $ = r.prepareUpdate, V = r.shouldSetTextContent, q = r.createTextInstance, Y = r.scheduleTimeout, G = r.cancelTimeout, J = r.noTimeout, K = r.isPrimaryRenderer, X = r.supportsMutation, Z = r.supportsPersistence, ee = r.supportsHydration, ne = r.getInstanceFromNode, te = r.makeOpaqueHydratingObject, re = r.makeClientId, le = r.beforeActiveInstanceBlur, ae = r.afterActiveInstanceBlur, ue = r.preparePortalMount, ie = r.supportsTestSelectors, oe = r.findFiberRoot, se = r.getBoundingRect, ce = r.getTextContent, fe = r.isHiddenSubtree, de = r.matchAccessibilityRole, pe = r.setFocusIfFocusable, he = r.setupIntersectionObserver, me = r.appendChild, ge = r.appendChildToContainer, ve = r.commitTextUpdate, be = r.commitMount, ye = r.commitUpdate, ke = r.insertBefore, Se = r.insertInContainerBefore, we = r.removeChild, Ee = r.removeChildFromContainer, xe = r.resetTextContent, _e = r.hideInstance, ze = r.hideTextInstance, Pe = r.unhideInstance, Ne = r.unhideTextInstance, Ce = r.clearContainer, Le = r.cloneInstance, Ie = r.createContainerChildSet, Te = r.appendChildToContainerChildSet, Re = r.finalizeContainerChildren, Ue = r.replaceContainerChildren, Me = r.cloneHiddenInstance, De = r.cloneHiddenTextInstance, Oe = r.canHydrateInstance, je = r.canHydrateTextInstance, Fe = r.isSuspenseInstancePending, Be = r.isSuspenseInstanceFallback, Qe = r.getNextHydratableSibling, He = r.getFirstHydratableChild, We = r.hydrateInstance, Ae = r.hydrateTextInstance, $e = r.getNextHydratableInstanceAfterSuspenseInstance, Ve = r.commitHydratedContainer, qe = r.commitHydratedSuspenseInstance;
          function Ye(e3) {
            if (D === void 0)
              try {
                throw Error();
              } catch (e4) {
                var n3 = e4.stack.trim().match(/\n( *(at )?)/);
                D = n3 && n3[1] || "";
              }
            return "\n" + D + e3;
          }
          var Ge = false;
          function Je(e3, t2) {
            if (!e3 || Ge)
              return "";
            Ge = true;
            var r2 = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
              if (t2)
                if (t2 = function() {
                  throw Error();
                }, Object.defineProperty(t2.prototype, "props", { set: function() {
                  throw Error();
                } }), (typeof Reflect === "undefined" ? "undefined" : n2(Reflect)) === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(t2, []);
                  } catch (e4) {
                    var l2 = e4;
                  }
                  Reflect.construct(e3, [], t2);
                } else {
                  try {
                    t2.call();
                  } catch (e4) {
                    l2 = e4;
                  }
                  e3.call(t2.prototype);
                }
              else {
                try {
                  throw Error();
                } catch (e4) {
                  l2 = e4;
                }
                e3();
              }
            } catch (e4) {
              if (e4 && l2 && typeof e4.stack === "string") {
                for (var a2 = e4.stack.split("\n"), u2 = l2.stack.split("\n"), i2 = a2.length - 1, o2 = u2.length - 1; 1 <= i2 && 0 <= o2 && a2[i2] !== u2[o2]; )
                  o2--;
                for (; 1 <= i2 && 0 <= o2; i2--, o2--)
                  if (a2[i2] !== u2[o2]) {
                    if (i2 !== 1 || o2 !== 1)
                      do {
                        if (i2--, o2--, 0 > o2 || a2[i2] !== u2[o2])
                          return "\n" + a2[i2].replace(" at new ", " at ");
                      } while (1 <= i2 && 0 <= o2);
                    break;
                  }
              }
            } finally {
              Ge = false, Error.prepareStackTrace = r2;
            }
            return (e3 = e3 ? e3.displayName || e3.name : "") ? Ye(e3) : "";
          }
          var Ke = [], Xe = -1;
          function Ze(e3) {
            return { current: e3 };
          }
          function en(e3) {
            0 > Xe || (e3.current = Ke[Xe], Ke[Xe] = null, Xe--);
          }
          function nn(e3, n3) {
            Xe++, Ke[Xe] = e3.current, e3.current = n3;
          }
          var tn = {}, rn = Ze(tn), ln = Ze(false), an = tn;
          function un(e3, n3) {
            var t2 = e3.type.contextTypes;
            if (!t2)
              return tn;
            var r2 = e3.stateNode;
            if (r2 && r2.__reactInternalMemoizedUnmaskedChildContext === n3)
              return r2.__reactInternalMemoizedMaskedChildContext;
            var l2, a2 = {};
            for (l2 in t2)
              a2[l2] = n3[l2];
            return r2 && (e3 = e3.stateNode, e3.__reactInternalMemoizedUnmaskedChildContext = n3, e3.__reactInternalMemoizedMaskedChildContext = a2), a2;
          }
          function on(e3) {
            return e3 = e3.childContextTypes, e3 !== null && e3 !== void 0;
          }
          function sn() {
            en(ln), en(rn);
          }
          function cn(e3, n3, t2) {
            if (rn.current !== tn)
              throw Error(o(168));
            nn(rn, n3), nn(ln, t2);
          }
          function fn(e3, n3, t2) {
            var r2 = e3.stateNode;
            if (e3 = n3.childContextTypes, typeof r2.getChildContext !== "function")
              return t2;
            for (var l2 in r2 = r2.getChildContext(), r2)
              if (!(l2 in e3))
                throw Error(o(108, C(n3) || "Unknown", l2));
            return a({}, t2, r2);
          }
          function dn(e3) {
            return e3 = (e3 = e3.stateNode) && e3.__reactInternalMemoizedMergedChildContext || tn, an = rn.current, nn(rn, e3), nn(ln, ln.current), true;
          }
          function pn(e3, n3, t2) {
            var r2 = e3.stateNode;
            if (!r2)
              throw Error(o(169));
            t2 ? (e3 = fn(e3, n3, an), r2.__reactInternalMemoizedMergedChildContext = e3, en(ln), en(rn), nn(rn, e3)) : en(ln), nn(ln, t2);
          }
          var hn = null, mn = null, gn = i.unstable_now;
          gn();
          var vn = 0, bn = 8;
          function yn(e3) {
            if ((1 & e3) !== 0)
              return bn = 15, 1;
            if ((2 & e3) !== 0)
              return bn = 14, 2;
            if ((4 & e3) !== 0)
              return bn = 13, 4;
            var n3 = 24 & e3;
            return n3 !== 0 ? (bn = 12, n3) : (32 & e3) !== 0 ? (bn = 11, 32) : (n3 = 192 & e3, n3 !== 0 ? (bn = 10, n3) : (256 & e3) !== 0 ? (bn = 9, 256) : (n3 = 3584 & e3, n3 !== 0 ? (bn = 8, n3) : (4096 & e3) !== 0 ? (bn = 7, 4096) : (n3 = 4186112 & e3, n3 !== 0 ? (bn = 6, n3) : (n3 = 62914560 & e3, n3 !== 0 ? (bn = 5, n3) : 67108864 & e3 ? (bn = 4, 67108864) : (134217728 & e3) !== 0 ? (bn = 3, 134217728) : (n3 = 805306368 & e3, n3 !== 0 ? (bn = 2, n3) : (1073741824 & e3) !== 0 ? (bn = 1, 1073741824) : (bn = 8, e3))))));
          }
          function kn(e3) {
            switch (e3) {
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
          function Sn(e3) {
            switch (e3) {
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
                throw Error(o(358, e3));
            }
          }
          function wn(e3, n3) {
            var t2 = e3.pendingLanes;
            if (t2 === 0)
              return bn = 0;
            var r2 = 0, l2 = 0, a2 = e3.expiredLanes, u2 = e3.suspendedLanes, i2 = e3.pingedLanes;
            if (a2 !== 0)
              r2 = a2, l2 = bn = 15;
            else if (a2 = 134217727 & t2, a2 !== 0) {
              var o2 = a2 & ~u2;
              o2 !== 0 ? (r2 = yn(o2), l2 = bn) : (i2 &= a2, i2 !== 0 && (r2 = yn(i2), l2 = bn));
            } else
              a2 = t2 & ~u2, a2 !== 0 ? (r2 = yn(a2), l2 = bn) : i2 !== 0 && (r2 = yn(i2), l2 = bn);
            if (r2 === 0)
              return 0;
            if (r2 = 31 - Nn(r2), r2 = t2 & ((0 > r2 ? 0 : 1 << r2) << 1) - 1, n3 !== 0 && n3 !== r2 && (n3 & u2) === 0) {
              if (yn(n3), l2 <= bn)
                return n3;
              bn = l2;
            }
            if (n3 = e3.entangledLanes, n3 !== 0)
              for (e3 = e3.entanglements, n3 &= r2; 0 < n3; )
                t2 = 31 - Nn(n3), l2 = 1 << t2, r2 |= e3[t2], n3 &= ~l2;
            return r2;
          }
          function En(e3) {
            return e3 = -1073741825 & e3.pendingLanes, e3 !== 0 ? e3 : 1073741824 & e3 ? 1073741824 : 0;
          }
          function xn(e3, n3) {
            switch (e3) {
              case 15:
                return 1;
              case 14:
                return 2;
              case 12:
                return e3 = _n(24 & ~n3), e3 === 0 ? xn(10, n3) : e3;
              case 10:
                return e3 = _n(192 & ~n3), e3 === 0 ? xn(8, n3) : e3;
              case 8:
                return e3 = _n(3584 & ~n3), e3 === 0 && (e3 = _n(4186112 & ~n3), e3 === 0 && (e3 = 512)), e3;
              case 2:
                return n3 = _n(805306368 & ~n3), n3 === 0 && (n3 = 268435456), n3;
            }
            throw Error(o(358, e3));
          }
          function _n(e3) {
            return e3 & -e3;
          }
          function zn(e3) {
            for (var n3 = [], t2 = 0; 31 > t2; t2++)
              n3.push(e3);
            return n3;
          }
          function Pn(e3, n3, t2) {
            e3.pendingLanes |= n3;
            var r2 = n3 - 1;
            e3.suspendedLanes &= r2, e3.pingedLanes &= r2, e3 = e3.eventTimes, n3 = 31 - Nn(n3), e3[n3] = t2;
          }
          var Nn = Math.clz32 ? Math.clz32 : In, Cn = Math.log, Ln = Math.LN2;
          function In(e3) {
            return e3 === 0 ? 32 : 31 - (Cn(e3) / Ln | 0) | 0;
          }
          var Tn = i.unstable_runWithPriority, Rn = i.unstable_scheduleCallback, Un = i.unstable_cancelCallback, Mn = i.unstable_shouldYield, Dn = i.unstable_requestPaint, On = i.unstable_now, jn = i.unstable_getCurrentPriorityLevel, Fn = i.unstable_ImmediatePriority, Bn = i.unstable_UserBlockingPriority, Qn = i.unstable_NormalPriority, Hn = i.unstable_LowPriority, Wn = i.unstable_IdlePriority, An = {}, $n = Dn !== void 0 ? Dn : function() {
          }, Vn = null, qn = null, Yn = false, Gn = On(), Jn = 1e4 > Gn ? On : function() {
            return On() - Gn;
          };
          function Kn() {
            switch (jn()) {
              case Fn:
                return 99;
              case Bn:
                return 98;
              case Qn:
                return 97;
              case Hn:
                return 96;
              case Wn:
                return 95;
              default:
                throw Error(o(332));
            }
          }
          function Xn(e3) {
            switch (e3) {
              case 99:
                return Fn;
              case 98:
                return Bn;
              case 97:
                return Qn;
              case 96:
                return Hn;
              case 95:
                return Wn;
              default:
                throw Error(o(332));
            }
          }
          function Zn(e3, n3) {
            return e3 = Xn(e3), Tn(e3, n3);
          }
          function et(e3, n3, t2) {
            return e3 = Xn(e3), Rn(e3, n3, t2);
          }
          function nt() {
            if (qn !== null) {
              var e3 = qn;
              qn = null, Un(e3);
            }
            tt2();
          }
          function tt2() {
            if (!Yn && Vn !== null) {
              Yn = true;
              var e3 = 0;
              try {
                var n3 = Vn;
                Zn(99, function() {
                  for (; e3 < n3.length; e3++) {
                    var t2 = n3[e3];
                    do {
                      t2 = t2(true);
                    } while (t2 !== null);
                  }
                }), Vn = null;
              } catch (n4) {
                throw Vn !== null && (Vn = Vn.slice(e3 + 1)), Rn(Fn, nt), n4;
              } finally {
                Yn = false;
              }
            }
          }
          var rt = s.ReactCurrentBatchConfig;
          function lt(e3, n3) {
            return e3 === n3 && (e3 !== 0 || 1 / e3 === 1 / n3) || e3 !== e3 && n3 !== n3;
          }
          var at = typeof Object.is === "function" ? Object.is : lt, ut = Object.prototype.hasOwnProperty;
          function it(e3, t2) {
            if (at(e3, t2))
              return true;
            if (n2(e3) !== "object" || e3 === null || n2(t2) !== "object" || t2 === null)
              return false;
            var r2 = Object.keys(e3), l2 = Object.keys(t2);
            if (r2.length !== l2.length)
              return false;
            for (l2 = 0; l2 < r2.length; l2++)
              if (!ut.call(t2, r2[l2]) || !at(e3[r2[l2]], t2[r2[l2]]))
                return false;
            return true;
          }
          function ot(e3) {
            switch (e3.tag) {
              case 5:
                return Ye(e3.type);
              case 16:
                return Ye("Lazy");
              case 13:
                return Ye("Suspense");
              case 19:
                return Ye("SuspenseList");
              case 0:
              case 2:
              case 15:
                return e3 = Je(e3.type, false), e3;
              case 11:
                return e3 = Je(e3.type.render, false), e3;
              case 22:
                return e3 = Je(e3.type._render, false), e3;
              case 1:
                return e3 = Je(e3.type, true), e3;
              default:
                return "";
            }
          }
          function st(e3, n3) {
            if (e3 && e3.defaultProps) {
              for (var t2 in n3 = a({}, n3), e3 = e3.defaultProps, e3)
                n3[t2] === void 0 && (n3[t2] = e3[t2]);
              return n3;
            }
            return n3;
          }
          var ct = Ze(null), ft = null, dt = null, pt = null;
          function ht() {
            pt = dt = ft = null;
          }
          function mt(e3, n3) {
            e3 = e3.type._context, K ? (nn(ct, e3._currentValue), e3._currentValue = n3) : (nn(ct, e3._currentValue2), e3._currentValue2 = n3);
          }
          function gt(e3) {
            var n3 = ct.current;
            en(ct), e3 = e3.type._context, K ? e3._currentValue = n3 : e3._currentValue2 = n3;
          }
          function vt(e3, n3) {
            for (; e3 !== null; ) {
              var t2 = e3.alternate;
              if ((e3.childLanes & n3) === n3) {
                if (t2 === null || (t2.childLanes & n3) === n3)
                  break;
                t2.childLanes |= n3;
              } else
                e3.childLanes |= n3, t2 !== null && (t2.childLanes |= n3);
              e3 = e3.return;
            }
          }
          function bt(e3, n3) {
            ft = e3, pt = dt = null, e3 = e3.dependencies, e3 !== null && e3.firstContext !== null && ((e3.lanes & n3) !== 0 && (Gr = true), e3.firstContext = null);
          }
          function yt(e3, n3) {
            if (pt !== e3 && n3 !== false && n3 !== 0)
              if (typeof n3 === "number" && n3 !== 1073741823 || (pt = e3, n3 = 1073741823), n3 = { context: e3, observedBits: n3, next: null }, dt === null) {
                if (ft === null)
                  throw Error(o(308));
                dt = n3, ft.dependencies = { lanes: 0, firstContext: n3, responders: null };
              } else
                dt = dt.next = n3;
            return K ? e3._currentValue : e3._currentValue2;
          }
          var kt = false;
          function St(e3) {
            e3.updateQueue = { baseState: e3.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
          }
          function wt(e3, n3) {
            e3 = e3.updateQueue, n3.updateQueue === e3 && (n3.updateQueue = { baseState: e3.baseState, firstBaseUpdate: e3.firstBaseUpdate, lastBaseUpdate: e3.lastBaseUpdate, shared: e3.shared, effects: e3.effects });
          }
          function Et(e3, n3) {
            return { eventTime: e3, lane: n3, tag: 0, payload: null, callback: null, next: null };
          }
          function xt(e3, n3) {
            if (e3 = e3.updateQueue, e3 !== null) {
              e3 = e3.shared;
              var t2 = e3.pending;
              t2 === null ? n3.next = n3 : (n3.next = t2.next, t2.next = n3), e3.pending = n3;
            }
          }
          function _t(e3, n3) {
            var t2 = e3.updateQueue, r2 = e3.alternate;
            if (r2 !== null && (r2 = r2.updateQueue, t2 === r2)) {
              var l2 = null, a2 = null;
              if (t2 = t2.firstBaseUpdate, t2 !== null) {
                do {
                  var u2 = { eventTime: t2.eventTime, lane: t2.lane, tag: t2.tag, payload: t2.payload, callback: t2.callback, next: null };
                  a2 === null ? l2 = a2 = u2 : a2 = a2.next = u2, t2 = t2.next;
                } while (t2 !== null);
                a2 === null ? l2 = a2 = n3 : a2 = a2.next = n3;
              } else
                l2 = a2 = n3;
              return t2 = { baseState: r2.baseState, firstBaseUpdate: l2, lastBaseUpdate: a2, shared: r2.shared, effects: r2.effects }, void (e3.updateQueue = t2);
            }
            e3 = t2.lastBaseUpdate, e3 === null ? t2.firstBaseUpdate = n3 : e3.next = n3, t2.lastBaseUpdate = n3;
          }
          function zt(e3, n3, t2, r2) {
            var l2 = e3.updateQueue;
            kt = false;
            var u2 = l2.firstBaseUpdate, i2 = l2.lastBaseUpdate, o2 = l2.shared.pending;
            if (o2 !== null) {
              l2.shared.pending = null;
              var s2 = o2, c2 = s2.next;
              s2.next = null, i2 === null ? u2 = c2 : i2.next = c2, i2 = s2;
              var f2 = e3.alternate;
              if (f2 !== null) {
                f2 = f2.updateQueue;
                var d2 = f2.lastBaseUpdate;
                d2 !== i2 && (d2 === null ? f2.firstBaseUpdate = c2 : d2.next = c2, f2.lastBaseUpdate = s2);
              }
            }
            if (u2 !== null) {
              d2 = l2.baseState, i2 = 0, f2 = c2 = s2 = null;
              do {
                o2 = u2.lane;
                var p2 = u2.eventTime;
                if ((r2 & o2) === o2) {
                  f2 !== null && (f2 = f2.next = { eventTime: p2, lane: 0, tag: u2.tag, payload: u2.payload, callback: u2.callback, next: null });
                  e: {
                    var h2 = e3, m2 = u2;
                    switch (o2 = n3, p2 = t2, m2.tag) {
                      case 1:
                        if (h2 = m2.payload, typeof h2 === "function") {
                          d2 = h2.call(p2, d2, o2);
                          break e;
                        }
                        d2 = h2;
                        break e;
                      case 3:
                        h2.flags = -4097 & h2.flags | 64;
                      case 0:
                        if (h2 = m2.payload, o2 = typeof h2 === "function" ? h2.call(p2, d2, o2) : h2, o2 === null || o2 === void 0)
                          break e;
                        d2 = a({}, d2, o2);
                        break e;
                      case 2:
                        kt = true;
                    }
                  }
                  u2.callback !== null && (e3.flags |= 32, o2 = l2.effects, o2 === null ? l2.effects = [u2] : o2.push(u2));
                } else
                  p2 = { eventTime: p2, lane: o2, tag: u2.tag, payload: u2.payload, callback: u2.callback, next: null }, f2 === null ? (c2 = f2 = p2, s2 = d2) : f2 = f2.next = p2, i2 |= o2;
                if (u2 = u2.next, u2 === null) {
                  if (o2 = l2.shared.pending, o2 === null)
                    break;
                  u2 = o2.next, o2.next = null, l2.lastBaseUpdate = o2, l2.shared.pending = null;
                }
              } while (1);
              f2 === null && (s2 = d2), l2.baseState = s2, l2.firstBaseUpdate = c2, l2.lastBaseUpdate = f2, ya |= i2, e3.lanes = i2, e3.memoizedState = d2;
            }
          }
          function Pt(e3, n3, t2) {
            if (e3 = n3.effects, n3.effects = null, e3 !== null)
              for (n3 = 0; n3 < e3.length; n3++) {
                var r2 = e3[n3], l2 = r2.callback;
                if (l2 !== null) {
                  if (r2.callback = null, r2 = t2, typeof l2 !== "function")
                    throw Error(o(191, l2));
                  l2.call(r2);
                }
              }
          }
          var Nt = new u.Component().refs;
          function Ct(e3, n3, t2, r2) {
            n3 = e3.memoizedState, t2 = t2(r2, n3), t2 = t2 === null || t2 === void 0 ? n3 : a({}, n3, t2), e3.memoizedState = t2, e3.lanes === 0 && (e3.updateQueue.baseState = t2);
          }
          var Lt = { isMounted: function(e3) {
            return !!(e3 = e3._reactInternals) && L(e3) === e3;
          }, enqueueSetState: function(e3, n3, t2) {
            e3 = e3._reactInternals;
            var r2 = Aa(), l2 = $a(e3), a2 = Et(r2, l2);
            a2.payload = n3, t2 !== void 0 && t2 !== null && (a2.callback = t2), xt(e3, a2), Va(e3, l2, r2);
          }, enqueueReplaceState: function(e3, n3, t2) {
            e3 = e3._reactInternals;
            var r2 = Aa(), l2 = $a(e3), a2 = Et(r2, l2);
            a2.tag = 1, a2.payload = n3, t2 !== void 0 && t2 !== null && (a2.callback = t2), xt(e3, a2), Va(e3, l2, r2);
          }, enqueueForceUpdate: function(e3, n3) {
            e3 = e3._reactInternals;
            var t2 = Aa(), r2 = $a(e3), l2 = Et(t2, r2);
            l2.tag = 2, n3 !== void 0 && n3 !== null && (l2.callback = n3), xt(e3, l2), Va(e3, r2, t2);
          } };
          function It(e3, n3, t2, r2, l2, a2, u2) {
            return e3 = e3.stateNode, typeof e3.shouldComponentUpdate === "function" ? e3.shouldComponentUpdate(r2, a2, u2) : !n3.prototype || !n3.prototype.isPureReactComponent || (!it(t2, r2) || !it(l2, a2));
          }
          function Tt(e3, t2, r2) {
            var l2 = false, a2 = tn, u2 = t2.contextType;
            return n2(u2) === "object" && u2 !== null ? u2 = yt(u2) : (a2 = on(t2) ? an : rn.current, l2 = t2.contextTypes, u2 = (l2 = l2 !== null && l2 !== void 0) ? un(e3, a2) : tn), t2 = new t2(r2, u2), e3.memoizedState = t2.state !== null && t2.state !== void 0 ? t2.state : null, t2.updater = Lt, e3.stateNode = t2, t2._reactInternals = e3, l2 && (e3 = e3.stateNode, e3.__reactInternalMemoizedUnmaskedChildContext = a2, e3.__reactInternalMemoizedMaskedChildContext = u2), t2;
          }
          function Rt(e3, n3, t2, r2) {
            e3 = n3.state, typeof n3.componentWillReceiveProps === "function" && n3.componentWillReceiveProps(t2, r2), typeof n3.UNSAFE_componentWillReceiveProps === "function" && n3.UNSAFE_componentWillReceiveProps(t2, r2), n3.state !== e3 && Lt.enqueueReplaceState(n3, n3.state, null);
          }
          function Ut(e3, t2, r2, l2) {
            var a2 = e3.stateNode;
            a2.props = r2, a2.state = e3.memoizedState, a2.refs = Nt, St(e3);
            var u2 = t2.contextType;
            n2(u2) === "object" && u2 !== null ? a2.context = yt(u2) : (u2 = on(t2) ? an : rn.current, a2.context = un(e3, u2)), zt(e3, r2, a2, l2), a2.state = e3.memoizedState, u2 = t2.getDerivedStateFromProps, typeof u2 === "function" && (Ct(e3, t2, u2, r2), a2.state = e3.memoizedState), typeof t2.getDerivedStateFromProps === "function" || typeof a2.getSnapshotBeforeUpdate === "function" || typeof a2.UNSAFE_componentWillMount !== "function" && typeof a2.componentWillMount !== "function" || (t2 = a2.state, typeof a2.componentWillMount === "function" && a2.componentWillMount(), typeof a2.UNSAFE_componentWillMount === "function" && a2.UNSAFE_componentWillMount(), t2 !== a2.state && Lt.enqueueReplaceState(a2, a2.state, null), zt(e3, r2, a2, l2), a2.state = e3.memoizedState), typeof a2.componentDidMount === "function" && (e3.flags |= 4);
          }
          var Mt = Array.isArray;
          function Dt(e3, t2, r2) {
            if (e3 = r2.ref, e3 !== null && typeof e3 !== "function" && n2(e3) !== "object") {
              if (r2._owner) {
                if (r2 = r2._owner, r2) {
                  if (r2.tag !== 1)
                    throw Error(o(309));
                  var l2 = r2.stateNode;
                }
                if (!l2)
                  throw Error(o(147, e3));
                var a2 = "" + e3;
                return t2 !== null && t2.ref !== null && typeof t2.ref === "function" && t2.ref._stringRef === a2 ? t2.ref : (t2 = function(e4) {
                  var n3 = l2.refs;
                  n3 === Nt && (n3 = l2.refs = {}), e4 === null ? delete n3[a2] : n3[a2] = e4;
                }, t2._stringRef = a2, t2);
              }
              if (typeof e3 !== "string")
                throw Error(o(284));
              if (!r2._owner)
                throw Error(o(290, e3));
            }
            return e3;
          }
          function Ot(e3, n3) {
            if (e3.type !== "textarea")
              throw Error(o(31, Object.prototype.toString.call(n3) === "[object Object]" ? "object with keys {" + Object.keys(n3).join(", ") + "}" : n3));
          }
          function jt(e3) {
            function t2(n3, t3) {
              if (e3) {
                var r3 = n3.lastEffect;
                r3 !== null ? (r3.nextEffect = t3, n3.lastEffect = t3) : n3.firstEffect = n3.lastEffect = t3, t3.nextEffect = null, t3.flags = 8;
              }
            }
            function r2(n3, r3) {
              if (!e3)
                return null;
              for (; r3 !== null; )
                t2(n3, r3), r3 = r3.sibling;
              return null;
            }
            function l2(e4, n3) {
              for (e4 = new Map(); n3 !== null; )
                n3.key !== null ? e4.set(n3.key, n3) : e4.set(n3.index, n3), n3 = n3.sibling;
              return e4;
            }
            function a2(e4, n3) {
              return e4 = Ru(e4, n3), e4.index = 0, e4.sibling = null, e4;
            }
            function u2(n3, t3, r3) {
              return n3.index = r3, e3 ? (r3 = n3.alternate, r3 !== null ? (r3 = r3.index, r3 < t3 ? (n3.flags = 2, t3) : r3) : (n3.flags = 2, t3)) : t3;
            }
            function i2(n3) {
              return e3 && n3.alternate === null && (n3.flags = 2), n3;
            }
            function s2(e4, n3, t3, r3) {
              return n3 === null || n3.tag !== 6 ? (n3 = Ou(t3, e4.mode, r3), n3.return = e4, n3) : (n3 = a2(n3, t3), n3.return = e4, n3);
            }
            function p2(e4, n3, t3, r3) {
              return n3 !== null && n3.elementType === t3.type ? (r3 = a2(n3, t3.props), r3.ref = Dt(e4, n3, t3), r3.return = e4, r3) : (r3 = Uu(t3.type, t3.key, t3.props, null, e4.mode, r3), r3.ref = Dt(e4, n3, t3), r3.return = e4, r3);
            }
            function h2(e4, n3, t3, r3) {
              return n3 === null || n3.tag !== 4 || n3.stateNode.containerInfo !== t3.containerInfo || n3.stateNode.implementation !== t3.implementation ? (n3 = ju(t3, e4.mode, r3), n3.return = e4, n3) : (n3 = a2(n3, t3.children || []), n3.return = e4, n3);
            }
            function m2(e4, n3, t3, r3, l3) {
              return n3 === null || n3.tag !== 7 ? (n3 = Mu(t3, e4.mode, r3, l3), n3.return = e4, n3) : (n3 = a2(n3, t3), n3.return = e4, n3);
            }
            function g2(e4, t3, r3) {
              if (typeof t3 === "string" || typeof t3 === "number")
                return t3 = Ou("" + t3, e4.mode, r3), t3.return = e4, t3;
              if (n2(t3) === "object" && t3 !== null) {
                switch (t3.$$typeof) {
                  case c:
                    return r3 = Uu(t3.type, t3.key, t3.props, null, e4.mode, r3), r3.ref = Dt(e4, null, t3), r3.return = e4, r3;
                  case f:
                    return t3 = ju(t3, e4.mode, r3), t3.return = e4, t3;
                }
                if (Mt(t3) || N(t3))
                  return t3 = Mu(t3, e4.mode, r3, null), t3.return = e4, t3;
                Ot(e4, t3);
              }
              return null;
            }
            function v2(e4, t3, r3, l3) {
              var a3 = t3 !== null ? t3.key : null;
              if (typeof r3 === "string" || typeof r3 === "number")
                return a3 !== null ? null : s2(e4, t3, "" + r3, l3);
              if (n2(r3) === "object" && r3 !== null) {
                switch (r3.$$typeof) {
                  case c:
                    return r3.key === a3 ? r3.type === d ? m2(e4, t3, r3.props.children, l3, a3) : p2(e4, t3, r3, l3) : null;
                  case f:
                    return r3.key === a3 ? h2(e4, t3, r3, l3) : null;
                }
                if (Mt(r3) || N(r3))
                  return a3 !== null ? null : m2(e4, t3, r3, l3, null);
                Ot(e4, r3);
              }
              return null;
            }
            function b2(e4, t3, r3, l3, a3) {
              if (typeof l3 === "string" || typeof l3 === "number")
                return e4 = e4.get(r3) || null, s2(t3, e4, "" + l3, a3);
              if (n2(l3) === "object" && l3 !== null) {
                switch (l3.$$typeof) {
                  case c:
                    return e4 = e4.get(l3.key === null ? r3 : l3.key) || null, l3.type === d ? m2(t3, e4, l3.props.children, a3, l3.key) : p2(t3, e4, l3, a3);
                  case f:
                    return e4 = e4.get(l3.key === null ? r3 : l3.key) || null, h2(t3, e4, l3, a3);
                }
                if (Mt(l3) || N(l3))
                  return e4 = e4.get(r3) || null, m2(t3, e4, l3, a3, null);
                Ot(t3, l3);
              }
              return null;
            }
            function y2(n3, a3, i3, o2) {
              for (var s3 = null, c2 = null, f2 = a3, d2 = a3 = 0, p3 = null; f2 !== null && d2 < i3.length; d2++) {
                f2.index > d2 ? (p3 = f2, f2 = null) : p3 = f2.sibling;
                var h3 = v2(n3, f2, i3[d2], o2);
                if (h3 === null) {
                  f2 === null && (f2 = p3);
                  break;
                }
                e3 && f2 && h3.alternate === null && t2(n3, f2), a3 = u2(h3, a3, d2), c2 === null ? s3 = h3 : c2.sibling = h3, c2 = h3, f2 = p3;
              }
              if (d2 === i3.length)
                return r2(n3, f2), s3;
              if (f2 === null) {
                for (; d2 < i3.length; d2++)
                  f2 = g2(n3, i3[d2], o2), f2 !== null && (a3 = u2(f2, a3, d2), c2 === null ? s3 = f2 : c2.sibling = f2, c2 = f2);
                return s3;
              }
              for (f2 = l2(n3, f2); d2 < i3.length; d2++)
                p3 = b2(f2, n3, d2, i3[d2], o2), p3 !== null && (e3 && p3.alternate !== null && f2.delete(p3.key === null ? d2 : p3.key), a3 = u2(p3, a3, d2), c2 === null ? s3 = p3 : c2.sibling = p3, c2 = p3);
              return e3 && f2.forEach(function(e4) {
                return t2(n3, e4);
              }), s3;
            }
            function k2(n3, a3, i3, s3) {
              var c2 = N(i3);
              if (typeof c2 !== "function")
                throw Error(o(150));
              if (i3 = c2.call(i3), i3 == null)
                throw Error(o(151));
              for (var f2 = c2 = null, d2 = a3, p3 = a3 = 0, h3 = null, m3 = i3.next(); d2 !== null && !m3.done; p3++, m3 = i3.next()) {
                d2.index > p3 ? (h3 = d2, d2 = null) : h3 = d2.sibling;
                var y3 = v2(n3, d2, m3.value, s3);
                if (y3 === null) {
                  d2 === null && (d2 = h3);
                  break;
                }
                e3 && d2 && y3.alternate === null && t2(n3, d2), a3 = u2(y3, a3, p3), f2 === null ? c2 = y3 : f2.sibling = y3, f2 = y3, d2 = h3;
              }
              if (m3.done)
                return r2(n3, d2), c2;
              if (d2 === null) {
                for (; !m3.done; p3++, m3 = i3.next())
                  m3 = g2(n3, m3.value, s3), m3 !== null && (a3 = u2(m3, a3, p3), f2 === null ? c2 = m3 : f2.sibling = m3, f2 = m3);
                return c2;
              }
              for (d2 = l2(n3, d2); !m3.done; p3++, m3 = i3.next())
                m3 = b2(d2, n3, p3, m3.value, s3), m3 !== null && (e3 && m3.alternate !== null && d2.delete(m3.key === null ? p3 : m3.key), a3 = u2(m3, a3, p3), f2 === null ? c2 = m3 : f2.sibling = m3, f2 = m3);
              return e3 && d2.forEach(function(e4) {
                return t2(n3, e4);
              }), c2;
            }
            return function(e4, l3, u3, s3) {
              var p3 = n2(u3) === "object" && u3 !== null && u3.type === d && u3.key === null;
              p3 && (u3 = u3.props.children);
              var h3 = n2(u3) === "object" && u3 !== null;
              if (h3)
                switch (u3.$$typeof) {
                  case c:
                    e: {
                      for (h3 = u3.key, p3 = l3; p3 !== null; ) {
                        if (p3.key === h3) {
                          switch (p3.tag) {
                            case 7:
                              if (u3.type === d) {
                                r2(e4, p3.sibling), l3 = a2(p3, u3.props.children), l3.return = e4, e4 = l3;
                                break e;
                              }
                              break;
                            default:
                              if (p3.elementType === u3.type) {
                                r2(e4, p3.sibling), l3 = a2(p3, u3.props), l3.ref = Dt(e4, p3, u3), l3.return = e4, e4 = l3;
                                break e;
                              }
                          }
                          r2(e4, p3);
                          break;
                        }
                        t2(e4, p3), p3 = p3.sibling;
                      }
                      u3.type === d ? (l3 = Mu(u3.props.children, e4.mode, s3, u3.key), l3.return = e4, e4 = l3) : (s3 = Uu(u3.type, u3.key, u3.props, null, e4.mode, s3), s3.ref = Dt(e4, l3, u3), s3.return = e4, e4 = s3);
                    }
                    return i2(e4);
                  case f:
                    e: {
                      for (p3 = u3.key; l3 !== null; ) {
                        if (l3.key === p3) {
                          if (l3.tag === 4 && l3.stateNode.containerInfo === u3.containerInfo && l3.stateNode.implementation === u3.implementation) {
                            r2(e4, l3.sibling), l3 = a2(l3, u3.children || []), l3.return = e4, e4 = l3;
                            break e;
                          }
                          r2(e4, l3);
                          break;
                        }
                        t2(e4, l3), l3 = l3.sibling;
                      }
                      l3 = ju(u3, e4.mode, s3), l3.return = e4, e4 = l3;
                    }
                    return i2(e4);
                }
              if (typeof u3 === "string" || typeof u3 === "number")
                return u3 = "" + u3, l3 !== null && l3.tag === 6 ? (r2(e4, l3.sibling), l3 = a2(l3, u3), l3.return = e4, e4 = l3) : (r2(e4, l3), l3 = Ou(u3, e4.mode, s3), l3.return = e4, e4 = l3), i2(e4);
              if (Mt(u3))
                return y2(e4, l3, u3, s3);
              if (N(u3))
                return k2(e4, l3, u3, s3);
              if (h3 && Ot(e4, u3), typeof u3 === "undefined" && !p3)
                switch (e4.tag) {
                  case 1:
                  case 22:
                  case 0:
                  case 11:
                  case 15:
                    throw Error(o(152, C(e4.type) || "Component"));
                }
              return r2(e4, l3);
            };
          }
          var Ft = jt(true), Bt = jt(false), Qt = {}, Ht = Ze(Qt), Wt = Ze(Qt), At = Ze(Qt);
          function $t(e3) {
            if (e3 === Qt)
              throw Error(o(174));
            return e3;
          }
          function Vt(e3, n3) {
            nn(At, n3), nn(Wt, e3), nn(Ht, Qt), e3 = j(n3), en(Ht), nn(Ht, e3);
          }
          function qt() {
            en(Ht), en(Wt), en(At);
          }
          function Yt(e3) {
            var n3 = $t(At.current), t2 = $t(Ht.current);
            n3 = F(t2, e3.type, n3), t2 !== n3 && (nn(Wt, e3), nn(Ht, n3));
          }
          function Gt(e3) {
            Wt.current === e3 && (en(Ht), en(Wt));
          }
          var Jt = Ze(0);
          function Kt(e3) {
            for (var n3 = e3; n3 !== null; ) {
              if (n3.tag === 13) {
                var t2 = n3.memoizedState;
                if (t2 !== null && (t2 = t2.dehydrated, t2 === null || Fe(t2) || Be(t2)))
                  return n3;
              } else if (n3.tag === 19 && n3.memoizedProps.revealOrder !== void 0) {
                if ((64 & n3.flags) !== 0)
                  return n3;
              } else if (n3.child !== null) {
                n3.child.return = n3, n3 = n3.child;
                continue;
              }
              if (n3 === e3)
                break;
              for (; n3.sibling === null; ) {
                if (n3.return === null || n3.return === e3)
                  return null;
                n3 = n3.return;
              }
              n3.sibling.return = n3.return, n3 = n3.sibling;
            }
            return null;
          }
          var Xt = null, Zt = null, er = false;
          function nr(e3, n3) {
            var t2 = Lu(5, null, null, 0);
            t2.elementType = "DELETED", t2.type = "DELETED", t2.stateNode = n3, t2.return = e3, t2.flags = 8, e3.lastEffect !== null ? (e3.lastEffect.nextEffect = t2, e3.lastEffect = t2) : e3.firstEffect = e3.lastEffect = t2;
          }
          function tr(e3, n3) {
            switch (e3.tag) {
              case 5:
                return n3 = Oe(n3, e3.type, e3.pendingProps), n3 !== null && (e3.stateNode = n3, true);
              case 6:
                return n3 = je(n3, e3.pendingProps), n3 !== null && (e3.stateNode = n3, true);
              case 13:
                return false;
              default:
                return false;
            }
          }
          function rr(e3) {
            if (er) {
              var n3 = Zt;
              if (n3) {
                var t2 = n3;
                if (!tr(e3, n3)) {
                  if (n3 = Qe(t2), !n3 || !tr(e3, n3))
                    return e3.flags = -1025 & e3.flags | 2, er = false, void (Xt = e3);
                  nr(Xt, t2);
                }
                Xt = e3, Zt = He(n3);
              } else
                e3.flags = -1025 & e3.flags | 2, er = false, Xt = e3;
            }
          }
          function lr(e3) {
            for (e3 = e3.return; e3 !== null && e3.tag !== 5 && e3.tag !== 3 && e3.tag !== 13; )
              e3 = e3.return;
            Xt = e3;
          }
          function ar(e3) {
            if (!ee || e3 !== Xt)
              return false;
            if (!er)
              return lr(e3), er = true, false;
            var n3 = e3.type;
            if (e3.tag !== 5 || n3 !== "head" && n3 !== "body" && !V(n3, e3.memoizedProps))
              for (n3 = Zt; n3; )
                nr(e3, n3), n3 = Qe(n3);
            if (lr(e3), e3.tag === 13) {
              if (!ee)
                throw Error(o(316));
              if (e3 = e3.memoizedState, e3 = e3 !== null ? e3.dehydrated : null, !e3)
                throw Error(o(317));
              Zt = $e(e3);
            } else
              Zt = Xt ? Qe(e3.stateNode) : null;
            return true;
          }
          function ur() {
            ee && (Zt = Xt = null, er = false);
          }
          var ir = [];
          function or() {
            for (var e3 = 0; e3 < ir.length; e3++) {
              var n3 = ir[e3];
              K ? n3._workInProgressVersionPrimary = null : n3._workInProgressVersionSecondary = null;
            }
            ir.length = 0;
          }
          var sr = s.ReactCurrentDispatcher, cr = s.ReactCurrentBatchConfig, fr = 0, dr = null, pr = null, hr = null, mr = false, gr = false;
          function vr() {
            throw Error(o(321));
          }
          function br(e3, n3) {
            if (n3 === null)
              return false;
            for (var t2 = 0; t2 < n3.length && t2 < e3.length; t2++)
              if (!at(e3[t2], n3[t2]))
                return false;
            return true;
          }
          function yr(e3, n3, t2, r2, l2, a2) {
            if (fr = a2, dr = n3, n3.memoizedState = null, n3.updateQueue = null, n3.lanes = 0, sr.current = e3 === null || e3.memoizedState === null ? $r : Vr, e3 = t2(r2, l2), gr) {
              a2 = 0;
              do {
                if (gr = false, !(25 > a2))
                  throw Error(o(301));
                a2 += 1, hr = pr = null, n3.updateQueue = null, sr.current = qr, e3 = t2(r2, l2);
              } while (gr);
            }
            if (sr.current = Ar, n3 = pr !== null && pr.next !== null, fr = 0, hr = pr = dr = null, mr = false, n3)
              throw Error(o(300));
            return e3;
          }
          function kr() {
            var e3 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
            return hr === null ? dr.memoizedState = hr = e3 : hr = hr.next = e3, hr;
          }
          function Sr() {
            if (pr === null) {
              var e3 = dr.alternate;
              e3 = e3 !== null ? e3.memoizedState : null;
            } else
              e3 = pr.next;
            var n3 = hr === null ? dr.memoizedState : hr.next;
            if (n3 !== null)
              hr = n3, pr = e3;
            else {
              if (e3 === null)
                throw Error(o(310));
              pr = e3, e3 = { memoizedState: pr.memoizedState, baseState: pr.baseState, baseQueue: pr.baseQueue, queue: pr.queue, next: null }, hr === null ? dr.memoizedState = hr = e3 : hr = hr.next = e3;
            }
            return hr;
          }
          function wr(e3, n3) {
            return typeof n3 === "function" ? n3(e3) : n3;
          }
          function Er(e3) {
            var n3 = Sr(), t2 = n3.queue;
            if (t2 === null)
              throw Error(o(311));
            t2.lastRenderedReducer = e3;
            var r2 = pr, l2 = r2.baseQueue, a2 = t2.pending;
            if (a2 !== null) {
              if (l2 !== null) {
                var u2 = l2.next;
                l2.next = a2.next, a2.next = u2;
              }
              r2.baseQueue = l2 = a2, t2.pending = null;
            }
            if (l2 !== null) {
              l2 = l2.next, r2 = r2.baseState;
              var i2 = u2 = a2 = null, s2 = l2;
              do {
                var c2 = s2.lane;
                if ((fr & c2) === c2)
                  i2 !== null && (i2 = i2.next = { lane: 0, action: s2.action, eagerReducer: s2.eagerReducer, eagerState: s2.eagerState, next: null }), r2 = s2.eagerReducer === e3 ? s2.eagerState : e3(r2, s2.action);
                else {
                  var f2 = { lane: c2, action: s2.action, eagerReducer: s2.eagerReducer, eagerState: s2.eagerState, next: null };
                  i2 === null ? (u2 = i2 = f2, a2 = r2) : i2 = i2.next = f2, dr.lanes |= c2, ya |= c2;
                }
                s2 = s2.next;
              } while (s2 !== null && s2 !== l2);
              i2 === null ? a2 = r2 : i2.next = u2, at(r2, n3.memoizedState) || (Gr = true), n3.memoizedState = r2, n3.baseState = a2, n3.baseQueue = i2, t2.lastRenderedState = r2;
            }
            return [n3.memoizedState, t2.dispatch];
          }
          function xr(e3) {
            var n3 = Sr(), t2 = n3.queue;
            if (t2 === null)
              throw Error(o(311));
            t2.lastRenderedReducer = e3;
            var r2 = t2.dispatch, l2 = t2.pending, a2 = n3.memoizedState;
            if (l2 !== null) {
              t2.pending = null;
              var u2 = l2 = l2.next;
              do {
                a2 = e3(a2, u2.action), u2 = u2.next;
              } while (u2 !== l2);
              at(a2, n3.memoizedState) || (Gr = true), n3.memoizedState = a2, n3.baseQueue === null && (n3.baseState = a2), t2.lastRenderedState = a2;
            }
            return [a2, r2];
          }
          function _r(e3, n3, t2) {
            var r2 = n3._getVersion;
            r2 = r2(n3._source);
            var l2 = K ? n3._workInProgressVersionPrimary : n3._workInProgressVersionSecondary;
            if (l2 !== null ? e3 = l2 === r2 : (e3 = e3.mutableReadLanes, (e3 = (fr & e3) === e3) && (K ? n3._workInProgressVersionPrimary = r2 : n3._workInProgressVersionSecondary = r2, ir.push(n3))), e3)
              return t2(n3._source);
            throw ir.push(n3), Error(o(350));
          }
          function zr(e3, n3, t2, r2) {
            var l2 = fa;
            if (l2 === null)
              throw Error(o(349));
            var a2 = n3._getVersion, u2 = a2(n3._source), i2 = sr.current, s2 = i2.useState(function() {
              return _r(l2, n3, t2);
            }), c2 = s2[1], f2 = s2[0];
            s2 = hr;
            var d2 = e3.memoizedState, p2 = d2.refs, h2 = p2.getSnapshot, m2 = d2.source;
            d2 = d2.subscribe;
            var g2 = dr;
            return e3.memoizedState = { refs: p2, source: n3, subscribe: r2 }, i2.useEffect(function() {
              p2.getSnapshot = t2, p2.setSnapshot = c2;
              var e4 = a2(n3._source);
              if (!at(u2, e4)) {
                e4 = t2(n3._source), at(f2, e4) || (c2(e4), e4 = $a(g2), l2.mutableReadLanes |= e4 & l2.pendingLanes), e4 = l2.mutableReadLanes, l2.entangledLanes |= e4;
                for (var r3 = l2.entanglements, i3 = e4; 0 < i3; ) {
                  var o2 = 31 - Nn(i3), s3 = 1 << o2;
                  r3[o2] |= e4, i3 &= ~s3;
                }
              }
            }, [t2, n3, r2]), i2.useEffect(function() {
              return r2(n3._source, function() {
                var e4 = p2.getSnapshot, t3 = p2.setSnapshot;
                try {
                  t3(e4(n3._source));
                  var r3 = $a(g2);
                  l2.mutableReadLanes |= r3 & l2.pendingLanes;
                } catch (e5) {
                  t3(function() {
                    throw e5;
                  });
                }
              });
            }, [n3, r2]), at(h2, t2) && at(m2, n3) && at(d2, r2) || (e3 = { pending: null, dispatch: null, lastRenderedReducer: wr, lastRenderedState: f2 }, e3.dispatch = c2 = Wr.bind(null, dr, e3), s2.queue = e3, s2.baseQueue = null, f2 = _r(l2, n3, t2), s2.memoizedState = s2.baseState = f2), f2;
          }
          function Pr(e3, n3, t2) {
            var r2 = Sr();
            return zr(r2, e3, n3, t2);
          }
          function Nr(e3) {
            var n3 = kr();
            return typeof e3 === "function" && (e3 = e3()), n3.memoizedState = n3.baseState = e3, e3 = n3.queue = { pending: null, dispatch: null, lastRenderedReducer: wr, lastRenderedState: e3 }, e3 = e3.dispatch = Wr.bind(null, dr, e3), [n3.memoizedState, e3];
          }
          function Cr(e3, n3, t2, r2) {
            return e3 = { tag: e3, create: n3, destroy: t2, deps: r2, next: null }, n3 = dr.updateQueue, n3 === null ? (n3 = { lastEffect: null }, dr.updateQueue = n3, n3.lastEffect = e3.next = e3) : (t2 = n3.lastEffect, t2 === null ? n3.lastEffect = e3.next = e3 : (r2 = t2.next, t2.next = e3, e3.next = r2, n3.lastEffect = e3)), e3;
          }
          function Lr(e3) {
            var n3 = kr();
            return e3 = { current: e3 }, n3.memoizedState = e3;
          }
          function Ir() {
            return Sr().memoizedState;
          }
          function Tr(e3, n3, t2, r2) {
            var l2 = kr();
            dr.flags |= e3, l2.memoizedState = Cr(1 | n3, t2, void 0, r2 === void 0 ? null : r2);
          }
          function Rr(e3, n3, t2, r2) {
            var l2 = Sr();
            r2 = r2 === void 0 ? null : r2;
            var a2 = void 0;
            if (pr !== null) {
              var u2 = pr.memoizedState;
              if (a2 = u2.destroy, r2 !== null && br(r2, u2.deps))
                return void Cr(n3, t2, a2, r2);
            }
            dr.flags |= e3, l2.memoizedState = Cr(1 | n3, t2, a2, r2);
          }
          function Ur(e3, n3) {
            return Tr(516, 4, e3, n3);
          }
          function Mr(e3, n3) {
            return Rr(516, 4, e3, n3);
          }
          function Dr(e3, n3) {
            return Rr(4, 2, e3, n3);
          }
          function Or(e3, n3) {
            return typeof n3 === "function" ? (e3 = e3(), n3(e3), function() {
              n3(null);
            }) : n3 !== null && n3 !== void 0 ? (e3 = e3(), n3.current = e3, function() {
              n3.current = null;
            }) : void 0;
          }
          function jr(e3, n3, t2) {
            return t2 = t2 !== null && t2 !== void 0 ? t2.concat([e3]) : null, Rr(4, 2, Or.bind(null, n3, e3), t2);
          }
          function Fr() {
          }
          function Br(e3, n3) {
            var t2 = Sr();
            n3 = n3 === void 0 ? null : n3;
            var r2 = t2.memoizedState;
            return r2 !== null && n3 !== null && br(n3, r2[1]) ? r2[0] : (t2.memoizedState = [e3, n3], e3);
          }
          function Qr(e3, n3) {
            var t2 = Sr();
            n3 = n3 === void 0 ? null : n3;
            var r2 = t2.memoizedState;
            return r2 !== null && n3 !== null && br(n3, r2[1]) ? r2[0] : (e3 = e3(), t2.memoizedState = [e3, n3], e3);
          }
          function Hr(e3, n3) {
            var t2 = Kn();
            Zn(98 > t2 ? 98 : t2, function() {
              e3(true);
            }), Zn(97 < t2 ? 97 : t2, function() {
              var t3 = cr.transition;
              cr.transition = 1;
              try {
                e3(false), n3();
              } finally {
                cr.transition = t3;
              }
            });
          }
          function Wr(e3, n3, t2) {
            var r2 = Aa(), l2 = $a(e3), a2 = { lane: l2, action: t2, eagerReducer: null, eagerState: null, next: null }, u2 = n3.pending;
            if (u2 === null ? a2.next = a2 : (a2.next = u2.next, u2.next = a2), n3.pending = a2, u2 = e3.alternate, e3 === dr || u2 !== null && u2 === dr)
              gr = mr = true;
            else {
              if (e3.lanes === 0 && (u2 === null || u2.lanes === 0) && (u2 = n3.lastRenderedReducer, u2 !== null))
                try {
                  var i2 = n3.lastRenderedState, o2 = u2(i2, t2);
                  if (a2.eagerReducer = u2, a2.eagerState = o2, at(o2, i2))
                    return;
                } catch (e4) {
                }
              Va(e3, l2, r2);
            }
          }
          var Ar = { readContext: yt, useCallback: vr, useContext: vr, useEffect: vr, useImperativeHandle: vr, useLayoutEffect: vr, useMemo: vr, useReducer: vr, useRef: vr, useState: vr, useDebugValue: vr, useDeferredValue: vr, useTransition: vr, useMutableSource: vr, useOpaqueIdentifier: vr, unstable_isNewReconciler: false }, $r = { readContext: yt, useCallback: function(e3, n3) {
            return kr().memoizedState = [e3, n3 === void 0 ? null : n3], e3;
          }, useContext: yt, useEffect: Ur, useImperativeHandle: function(e3, n3, t2) {
            return t2 = t2 !== null && t2 !== void 0 ? t2.concat([e3]) : null, Tr(4, 2, Or.bind(null, n3, e3), t2);
          }, useLayoutEffect: function(e3, n3) {
            return Tr(4, 2, e3, n3);
          }, useMemo: function(e3, n3) {
            var t2 = kr();
            return n3 = n3 === void 0 ? null : n3, e3 = e3(), t2.memoizedState = [e3, n3], e3;
          }, useReducer: function(e3, n3, t2) {
            var r2 = kr();
            return n3 = t2 !== void 0 ? t2(n3) : n3, r2.memoizedState = r2.baseState = n3, e3 = r2.queue = { pending: null, dispatch: null, lastRenderedReducer: e3, lastRenderedState: n3 }, e3 = e3.dispatch = Wr.bind(null, dr, e3), [r2.memoizedState, e3];
          }, useRef: Lr, useState: Nr, useDebugValue: Fr, useDeferredValue: function(e3) {
            var n3 = Nr(e3), t2 = n3[0], r2 = n3[1];
            return Ur(function() {
              var n4 = cr.transition;
              cr.transition = 1;
              try {
                r2(e3);
              } finally {
                cr.transition = n4;
              }
            }, [e3]), t2;
          }, useTransition: function() {
            var e3 = Nr(false), n3 = e3[0];
            return e3 = Hr.bind(null, e3[1]), Lr(e3), [e3, n3];
          }, useMutableSource: function(e3, n3, t2) {
            var r2 = kr();
            return r2.memoizedState = { refs: { getSnapshot: n3, setSnapshot: null }, source: e3, subscribe: t2 }, zr(r2, e3, n3, t2);
          }, useOpaqueIdentifier: function() {
            if (er) {
              var e3 = false, n3 = te(function() {
                throw e3 || (e3 = true, t2(re())), Error(o(355));
              }), t2 = Nr(n3)[1];
              return (2 & dr.mode) === 0 && (dr.flags |= 516, Cr(5, function() {
                t2(re());
              }, void 0, null)), n3;
            }
            return n3 = re(), Nr(n3), n3;
          }, unstable_isNewReconciler: false }, Vr = { readContext: yt, useCallback: Br, useContext: yt, useEffect: Mr, useImperativeHandle: jr, useLayoutEffect: Dr, useMemo: Qr, useReducer: Er, useRef: Ir, useState: function() {
            return Er(wr);
          }, useDebugValue: Fr, useDeferredValue: function(e3) {
            var n3 = Er(wr), t2 = n3[0], r2 = n3[1];
            return Mr(function() {
              var n4 = cr.transition;
              cr.transition = 1;
              try {
                r2(e3);
              } finally {
                cr.transition = n4;
              }
            }, [e3]), t2;
          }, useTransition: function() {
            var e3 = Er(wr)[0];
            return [Ir().current, e3];
          }, useMutableSource: Pr, useOpaqueIdentifier: function() {
            return Er(wr)[0];
          }, unstable_isNewReconciler: false }, qr = { readContext: yt, useCallback: Br, useContext: yt, useEffect: Mr, useImperativeHandle: jr, useLayoutEffect: Dr, useMemo: Qr, useReducer: xr, useRef: Ir, useState: function() {
            return xr(wr);
          }, useDebugValue: Fr, useDeferredValue: function(e3) {
            var n3 = xr(wr), t2 = n3[0], r2 = n3[1];
            return Mr(function() {
              var n4 = cr.transition;
              cr.transition = 1;
              try {
                r2(e3);
              } finally {
                cr.transition = n4;
              }
            }, [e3]), t2;
          }, useTransition: function() {
            var e3 = xr(wr)[0];
            return [Ir().current, e3];
          }, useMutableSource: Pr, useOpaqueIdentifier: function() {
            return xr(wr)[0];
          }, unstable_isNewReconciler: false }, Yr = s.ReactCurrentOwner, Gr = false;
          function Jr(e3, n3, t2, r2) {
            n3.child = e3 === null ? Bt(n3, null, t2, r2) : Ft(n3, e3.child, t2, r2);
          }
          function Kr(e3, n3, t2, r2, l2) {
            t2 = t2.render;
            var a2 = n3.ref;
            return bt(n3, l2), r2 = yr(e3, n3, t2, r2, a2, l2), e3 === null || Gr ? (n3.flags |= 1, Jr(e3, n3, r2, l2), n3.child) : (n3.updateQueue = e3.updateQueue, n3.flags &= -517, e3.lanes &= ~l2, bl(e3, n3, l2));
          }
          function Xr(e3, n3, t2, r2, l2, a2) {
            if (e3 === null) {
              var u2 = t2.type;
              return typeof u2 !== "function" || Iu(u2) || u2.defaultProps !== void 0 || t2.compare !== null || t2.defaultProps !== void 0 ? (e3 = Uu(t2.type, null, r2, n3, n3.mode, a2), e3.ref = n3.ref, e3.return = n3, n3.child = e3) : (n3.tag = 15, n3.type = u2, Zr(e3, n3, u2, r2, l2, a2));
            }
            return u2 = e3.child, (l2 & a2) === 0 && (l2 = u2.memoizedProps, t2 = t2.compare, t2 = t2 !== null ? t2 : it, t2(l2, r2) && e3.ref === n3.ref) ? bl(e3, n3, a2) : (n3.flags |= 1, e3 = Ru(u2, r2), e3.ref = n3.ref, e3.return = n3, n3.child = e3);
          }
          function Zr(e3, n3, t2, r2, l2, a2) {
            if (e3 !== null && it(e3.memoizedProps, r2) && e3.ref === n3.ref) {
              if (Gr = false, (a2 & l2) === 0)
                return n3.lanes = e3.lanes, bl(e3, n3, a2);
              (16384 & e3.flags) !== 0 && (Gr = true);
            }
            return tl(e3, n3, t2, r2, a2);
          }
          function el(e3, n3, t2) {
            var r2 = n3.pendingProps, l2 = r2.children, a2 = e3 !== null ? e3.memoizedState : null;
            if (r2.mode === "hidden" || r2.mode === "unstable-defer-without-hiding")
              if ((4 & n3.mode) === 0)
                n3.memoizedState = { baseLanes: 0 }, nu(n3, t2);
              else {
                if ((1073741824 & t2) === 0)
                  return e3 = a2 !== null ? a2.baseLanes | t2 : t2, n3.lanes = n3.childLanes = 1073741824, n3.memoizedState = { baseLanes: e3 }, nu(n3, e3), null;
                n3.memoizedState = { baseLanes: 0 }, nu(n3, a2 !== null ? a2.baseLanes : t2);
              }
            else
              a2 !== null ? (r2 = a2.baseLanes | t2, n3.memoizedState = null) : r2 = t2, nu(n3, r2);
            return Jr(e3, n3, l2, t2), n3.child;
          }
          function nl(e3, n3) {
            var t2 = n3.ref;
            (e3 === null && t2 !== null || e3 !== null && e3.ref !== t2) && (n3.flags |= 128);
          }
          function tl(e3, n3, t2, r2, l2) {
            var a2 = on(t2) ? an : rn.current;
            return a2 = un(n3, a2), bt(n3, l2), t2 = yr(e3, n3, t2, r2, a2, l2), e3 === null || Gr ? (n3.flags |= 1, Jr(e3, n3, t2, l2), n3.child) : (n3.updateQueue = e3.updateQueue, n3.flags &= -517, e3.lanes &= ~l2, bl(e3, n3, l2));
          }
          function rl(e3, t2, r2, l2, a2) {
            if (on(r2)) {
              var u2 = true;
              dn(t2);
            } else
              u2 = false;
            if (bt(t2, a2), t2.stateNode === null)
              e3 !== null && (e3.alternate = null, t2.alternate = null, t2.flags |= 2), Tt(t2, r2, l2), Ut(t2, r2, l2, a2), l2 = true;
            else if (e3 === null) {
              var i2 = t2.stateNode, o2 = t2.memoizedProps;
              i2.props = o2;
              var s2 = i2.context, c2 = r2.contextType;
              n2(c2) === "object" && c2 !== null ? c2 = yt(c2) : (c2 = on(r2) ? an : rn.current, c2 = un(t2, c2));
              var f2 = r2.getDerivedStateFromProps, d2 = typeof f2 === "function" || typeof i2.getSnapshotBeforeUpdate === "function";
              d2 || typeof i2.UNSAFE_componentWillReceiveProps !== "function" && typeof i2.componentWillReceiveProps !== "function" || (o2 !== l2 || s2 !== c2) && Rt(t2, i2, l2, c2), kt = false;
              var p2 = t2.memoizedState;
              i2.state = p2, zt(t2, l2, i2, a2), s2 = t2.memoizedState, o2 !== l2 || p2 !== s2 || ln.current || kt ? (typeof f2 === "function" && (Ct(t2, r2, f2, l2), s2 = t2.memoizedState), (o2 = kt || It(t2, r2, o2, l2, p2, s2, c2)) ? (d2 || typeof i2.UNSAFE_componentWillMount !== "function" && typeof i2.componentWillMount !== "function" || (typeof i2.componentWillMount === "function" && i2.componentWillMount(), typeof i2.UNSAFE_componentWillMount === "function" && i2.UNSAFE_componentWillMount()), typeof i2.componentDidMount === "function" && (t2.flags |= 4)) : (typeof i2.componentDidMount === "function" && (t2.flags |= 4), t2.memoizedProps = l2, t2.memoizedState = s2), i2.props = l2, i2.state = s2, i2.context = c2, l2 = o2) : (typeof i2.componentDidMount === "function" && (t2.flags |= 4), l2 = false);
            } else {
              i2 = t2.stateNode, wt(e3, t2), o2 = t2.memoizedProps, c2 = t2.type === t2.elementType ? o2 : st(t2.type, o2), i2.props = c2, d2 = t2.pendingProps, p2 = i2.context, s2 = r2.contextType, n2(s2) === "object" && s2 !== null ? s2 = yt(s2) : (s2 = on(r2) ? an : rn.current, s2 = un(t2, s2));
              var h2 = r2.getDerivedStateFromProps;
              (f2 = typeof h2 === "function" || typeof i2.getSnapshotBeforeUpdate === "function") || typeof i2.UNSAFE_componentWillReceiveProps !== "function" && typeof i2.componentWillReceiveProps !== "function" || (o2 !== d2 || p2 !== s2) && Rt(t2, i2, l2, s2), kt = false, p2 = t2.memoizedState, i2.state = p2, zt(t2, l2, i2, a2);
              var m2 = t2.memoizedState;
              o2 !== d2 || p2 !== m2 || ln.current || kt ? (typeof h2 === "function" && (Ct(t2, r2, h2, l2), m2 = t2.memoizedState), (c2 = kt || It(t2, r2, c2, l2, p2, m2, s2)) ? (f2 || typeof i2.UNSAFE_componentWillUpdate !== "function" && typeof i2.componentWillUpdate !== "function" || (typeof i2.componentWillUpdate === "function" && i2.componentWillUpdate(l2, m2, s2), typeof i2.UNSAFE_componentWillUpdate === "function" && i2.UNSAFE_componentWillUpdate(l2, m2, s2)), typeof i2.componentDidUpdate === "function" && (t2.flags |= 4), typeof i2.getSnapshotBeforeUpdate === "function" && (t2.flags |= 256)) : (typeof i2.componentDidUpdate !== "function" || o2 === e3.memoizedProps && p2 === e3.memoizedState || (t2.flags |= 4), typeof i2.getSnapshotBeforeUpdate !== "function" || o2 === e3.memoizedProps && p2 === e3.memoizedState || (t2.flags |= 256), t2.memoizedProps = l2, t2.memoizedState = m2), i2.props = l2, i2.state = m2, i2.context = s2, l2 = c2) : (typeof i2.componentDidUpdate !== "function" || o2 === e3.memoizedProps && p2 === e3.memoizedState || (t2.flags |= 4), typeof i2.getSnapshotBeforeUpdate !== "function" || o2 === e3.memoizedProps && p2 === e3.memoizedState || (t2.flags |= 256), l2 = false);
            }
            return ll(e3, t2, r2, l2, u2, a2);
          }
          function ll(e3, n3, t2, r2, l2, a2) {
            nl(e3, n3);
            var u2 = (64 & n3.flags) !== 0;
            if (!r2 && !u2)
              return l2 && pn(n3, t2, false), bl(e3, n3, a2);
            r2 = n3.stateNode, Yr.current = n3;
            var i2 = u2 && typeof t2.getDerivedStateFromError !== "function" ? null : r2.render();
            return n3.flags |= 1, e3 !== null && u2 ? (n3.child = Ft(n3, e3.child, null, a2), n3.child = Ft(n3, null, i2, a2)) : Jr(e3, n3, i2, a2), n3.memoizedState = r2.state, l2 && pn(n3, t2, true), n3.child;
          }
          function al(e3) {
            var n3 = e3.stateNode;
            n3.pendingContext ? cn(e3, n3.pendingContext, n3.pendingContext !== n3.context) : n3.context && cn(e3, n3.context, false), Vt(e3, n3.containerInfo);
          }
          var ul, il, ol, sl, cl = { dehydrated: null, retryLane: 0 };
          function fl(e3, n3, t2) {
            var r2, l2 = n3.pendingProps, a2 = Jt.current, u2 = false;
            return (r2 = (64 & n3.flags) !== 0) || (r2 = (e3 === null || e3.memoizedState !== null) && (2 & a2) !== 0), r2 ? (u2 = true, n3.flags &= -65) : e3 !== null && e3.memoizedState === null || l2.fallback === void 0 || l2.unstable_avoidThisFallback === true || (a2 |= 1), nn(Jt, 1 & a2), e3 === null ? (l2.fallback !== void 0 && rr(n3), e3 = l2.children, a2 = l2.fallback, u2 ? (e3 = dl(n3, e3, a2, t2), n3.child.memoizedState = { baseLanes: t2 }, n3.memoizedState = cl, e3) : typeof l2.unstable_expectedLoadTime === "number" ? (e3 = dl(n3, e3, a2, t2), n3.child.memoizedState = { baseLanes: t2 }, n3.memoizedState = cl, n3.lanes = 33554432, e3) : (t2 = Du({ mode: "visible", children: e3 }, n3.mode, t2, null), t2.return = n3, n3.child = t2)) : (e3.memoizedState, u2 ? (l2 = hl(e3, n3, l2.children, l2.fallback, t2), u2 = n3.child, a2 = e3.child.memoizedState, u2.memoizedState = a2 === null ? { baseLanes: t2 } : { baseLanes: a2.baseLanes | t2 }, u2.childLanes = e3.childLanes & ~t2, n3.memoizedState = cl, l2) : (t2 = pl(e3, n3, l2.children, t2), n3.memoizedState = null, t2));
          }
          function dl(e3, n3, t2, r2) {
            var l2 = e3.mode, a2 = e3.child;
            return n3 = { mode: "hidden", children: n3 }, (2 & l2) === 0 && a2 !== null ? (a2.childLanes = 0, a2.pendingProps = n3) : a2 = Du(n3, l2, 0, null), t2 = Mu(t2, l2, r2, null), a2.return = e3, t2.return = e3, a2.sibling = t2, e3.child = a2, t2;
          }
          function pl(e3, n3, t2, r2) {
            var l2 = e3.child;
            return e3 = l2.sibling, t2 = Ru(l2, { mode: "visible", children: t2 }), (2 & n3.mode) === 0 && (t2.lanes = r2), t2.return = n3, t2.sibling = null, e3 !== null && (e3.nextEffect = null, e3.flags = 8, n3.firstEffect = n3.lastEffect = e3), n3.child = t2;
          }
          function hl(e3, n3, t2, r2, l2) {
            var a2 = n3.mode, u2 = e3.child;
            e3 = u2.sibling;
            var i2 = { mode: "hidden", children: t2 };
            return (2 & a2) === 0 && n3.child !== u2 ? (t2 = n3.child, t2.childLanes = 0, t2.pendingProps = i2, u2 = t2.lastEffect, u2 !== null ? (n3.firstEffect = t2.firstEffect, n3.lastEffect = u2, u2.nextEffect = null) : n3.firstEffect = n3.lastEffect = null) : t2 = Ru(u2, i2), e3 !== null ? r2 = Ru(e3, r2) : (r2 = Mu(r2, a2, l2, null), r2.flags |= 2), r2.return = n3, t2.return = n3, t2.sibling = r2, n3.child = t2, r2;
          }
          function ml(e3, n3) {
            e3.lanes |= n3;
            var t2 = e3.alternate;
            t2 !== null && (t2.lanes |= n3), vt(e3.return, n3);
          }
          function gl(e3, n3, t2, r2, l2, a2) {
            var u2 = e3.memoizedState;
            u2 === null ? e3.memoizedState = { isBackwards: n3, rendering: null, renderingStartTime: 0, last: r2, tail: t2, tailMode: l2, lastEffect: a2 } : (u2.isBackwards = n3, u2.rendering = null, u2.renderingStartTime = 0, u2.last = r2, u2.tail = t2, u2.tailMode = l2, u2.lastEffect = a2);
          }
          function vl(e3, n3, t2) {
            var r2 = n3.pendingProps, l2 = r2.revealOrder, a2 = r2.tail;
            if (Jr(e3, n3, r2.children, t2), r2 = Jt.current, (2 & r2) !== 0)
              r2 = 1 & r2 | 2, n3.flags |= 64;
            else {
              if (e3 !== null && (64 & e3.flags) !== 0)
                e:
                  for (e3 = n3.child; e3 !== null; ) {
                    if (e3.tag === 13)
                      e3.memoizedState !== null && ml(e3, t2);
                    else if (e3.tag === 19)
                      ml(e3, t2);
                    else if (e3.child !== null) {
                      e3.child.return = e3, e3 = e3.child;
                      continue;
                    }
                    if (e3 === n3)
                      break e;
                    for (; e3.sibling === null; ) {
                      if (e3.return === null || e3.return === n3)
                        break e;
                      e3 = e3.return;
                    }
                    e3.sibling.return = e3.return, e3 = e3.sibling;
                  }
              r2 &= 1;
            }
            if (nn(Jt, r2), (2 & n3.mode) === 0)
              n3.memoizedState = null;
            else
              switch (l2) {
                case "forwards":
                  for (t2 = n3.child, l2 = null; t2 !== null; )
                    e3 = t2.alternate, e3 !== null && Kt(e3) === null && (l2 = t2), t2 = t2.sibling;
                  t2 = l2, t2 === null ? (l2 = n3.child, n3.child = null) : (l2 = t2.sibling, t2.sibling = null), gl(n3, false, l2, t2, a2, n3.lastEffect);
                  break;
                case "backwards":
                  for (t2 = null, l2 = n3.child, n3.child = null; l2 !== null; ) {
                    if (e3 = l2.alternate, e3 !== null && Kt(e3) === null) {
                      n3.child = l2;
                      break;
                    }
                    e3 = l2.sibling, l2.sibling = t2, t2 = l2, l2 = e3;
                  }
                  gl(n3, true, t2, null, a2, n3.lastEffect);
                  break;
                case "together":
                  gl(n3, false, null, null, void 0, n3.lastEffect);
                  break;
                default:
                  n3.memoizedState = null;
              }
            return n3.child;
          }
          function bl(e3, n3, t2) {
            if (e3 !== null && (n3.dependencies = e3.dependencies), ya |= n3.lanes, (t2 & n3.childLanes) !== 0) {
              if (e3 !== null && n3.child !== e3.child)
                throw Error(o(153));
              if (n3.child !== null) {
                for (e3 = n3.child, t2 = Ru(e3, e3.pendingProps), n3.child = t2, t2.return = n3; e3.sibling !== null; )
                  e3 = e3.sibling, t2 = t2.sibling = Ru(e3, e3.pendingProps), t2.return = n3;
                t2.sibling = null;
              }
              return n3.child;
            }
            return null;
          }
          function yl(e3) {
            e3.flags |= 4;
          }
          if (X)
            ul = function(e3, n3) {
              for (var t2 = n3.child; t2 !== null; ) {
                if (t2.tag === 5 || t2.tag === 6)
                  W(e3, t2.stateNode);
                else if (t2.tag !== 4 && t2.child !== null) {
                  t2.child.return = t2, t2 = t2.child;
                  continue;
                }
                if (t2 === n3)
                  break;
                for (; t2.sibling === null; ) {
                  if (t2.return === null || t2.return === n3)
                    return;
                  t2 = t2.return;
                }
                t2.sibling.return = t2.return, t2 = t2.sibling;
              }
            }, il = function() {
            }, ol = function(e3, n3, t2, r2, l2) {
              if (e3 = e3.memoizedProps, e3 !== r2) {
                var a2 = n3.stateNode, u2 = $t(Ht.current);
                t2 = $(a2, t2, e3, r2, l2, u2), (n3.updateQueue = t2) && yl(n3);
              }
            }, sl = function(e3, n3, t2, r2) {
              t2 !== r2 && yl(n3);
            };
          else if (Z) {
            ul = function(e3, n3, t2, r2) {
              for (var l2 = n3.child; l2 !== null; ) {
                if (l2.tag === 5) {
                  var a2 = l2.stateNode;
                  t2 && r2 && (a2 = Me(a2, l2.type, l2.memoizedProps, l2)), W(e3, a2);
                } else if (l2.tag === 6)
                  a2 = l2.stateNode, t2 && r2 && (a2 = De(a2, l2.memoizedProps, l2)), W(e3, a2);
                else if (l2.tag !== 4) {
                  if (l2.tag === 13 && (4 & l2.flags) !== 0 && (a2 = l2.memoizedState !== null)) {
                    var u2 = l2.child;
                    if (u2 !== null && (u2.child !== null && (u2.child.return = u2, ul(e3, u2, true, a2)), a2 = u2.sibling, a2 !== null)) {
                      a2.return = l2, l2 = a2;
                      continue;
                    }
                  }
                  if (l2.child !== null) {
                    l2.child.return = l2, l2 = l2.child;
                    continue;
                  }
                }
                if (l2 === n3)
                  break;
                for (; l2.sibling === null; ) {
                  if (l2.return === null || l2.return === n3)
                    return;
                  l2 = l2.return;
                }
                l2.sibling.return = l2.return, l2 = l2.sibling;
              }
            };
            var kl = function e3(n3, t2, r2, l2) {
              for (var a2 = t2.child; a2 !== null; ) {
                if (a2.tag === 5) {
                  var u2 = a2.stateNode;
                  r2 && l2 && (u2 = Me(u2, a2.type, a2.memoizedProps, a2)), Te(n3, u2);
                } else if (a2.tag === 6)
                  u2 = a2.stateNode, r2 && l2 && (u2 = De(u2, a2.memoizedProps, a2)), Te(n3, u2);
                else if (a2.tag !== 4) {
                  if (a2.tag === 13 && (4 & a2.flags) !== 0 && (u2 = a2.memoizedState !== null)) {
                    var i2 = a2.child;
                    if (i2 !== null && (i2.child !== null && (i2.child.return = i2, e3(n3, i2, true, u2)), u2 = i2.sibling, u2 !== null)) {
                      u2.return = a2, a2 = u2;
                      continue;
                    }
                  }
                  if (a2.child !== null) {
                    a2.child.return = a2, a2 = a2.child;
                    continue;
                  }
                }
                if (a2 === t2)
                  break;
                for (; a2.sibling === null; ) {
                  if (a2.return === null || a2.return === t2)
                    return;
                  a2 = a2.return;
                }
                a2.sibling.return = a2.return, a2 = a2.sibling;
              }
            };
            il = function(e3) {
              var n3 = e3.stateNode;
              if (e3.firstEffect !== null) {
                var t2 = n3.containerInfo, r2 = Ie(t2);
                kl(r2, e3, false, false), n3.pendingChildren = r2, yl(e3), Re(t2, r2);
              }
            }, ol = function(e3, n3, t2, r2, l2) {
              var a2 = e3.stateNode, u2 = e3.memoizedProps;
              if ((e3 = n3.firstEffect === null) && u2 === r2)
                n3.stateNode = a2;
              else {
                var i2 = n3.stateNode, o2 = $t(Ht.current), s2 = null;
                u2 !== r2 && (s2 = $(i2, t2, u2, r2, l2, o2)), e3 && s2 === null ? n3.stateNode = a2 : (a2 = Le(a2, s2, t2, u2, r2, n3, e3, i2), A(a2, t2, r2, l2, o2) && yl(n3), n3.stateNode = a2, e3 ? yl(n3) : ul(a2, n3, false, false));
              }
            }, sl = function(e3, n3, t2, r2) {
              t2 !== r2 ? (e3 = $t(At.current), t2 = $t(Ht.current), n3.stateNode = q(r2, e3, t2, n3), yl(n3)) : n3.stateNode = e3.stateNode;
            };
          } else
            il = function() {
            }, ol = function() {
            }, sl = function() {
            };
          function Sl(e3, n3) {
            if (!er)
              switch (e3.tailMode) {
                case "hidden":
                  n3 = e3.tail;
                  for (var t2 = null; n3 !== null; )
                    n3.alternate !== null && (t2 = n3), n3 = n3.sibling;
                  t2 === null ? e3.tail = null : t2.sibling = null;
                  break;
                case "collapsed":
                  t2 = e3.tail;
                  for (var r2 = null; t2 !== null; )
                    t2.alternate !== null && (r2 = t2), t2 = t2.sibling;
                  r2 === null ? n3 || e3.tail === null ? e3.tail = null : e3.tail.sibling = null : r2.sibling = null;
              }
          }
          function wl(e3, n3, t2) {
            var r2 = n3.pendingProps;
            switch (n3.tag) {
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
                return on(n3.type) && sn(), null;
              case 3:
                return qt(), en(ln), en(rn), or(), r2 = n3.stateNode, r2.pendingContext && (r2.context = r2.pendingContext, r2.pendingContext = null), e3 !== null && e3.child !== null || (ar(n3) ? yl(n3) : r2.hydrate || (n3.flags |= 256)), il(n3), null;
              case 5:
                Gt(n3);
                var l2 = $t(At.current);
                if (t2 = n3.type, e3 !== null && n3.stateNode != null)
                  ol(e3, n3, t2, r2, l2), e3.ref !== n3.ref && (n3.flags |= 128);
                else {
                  if (!r2) {
                    if (n3.stateNode === null)
                      throw Error(o(166));
                    return null;
                  }
                  if (e3 = $t(Ht.current), ar(n3)) {
                    if (!ee)
                      throw Error(o(175));
                    e3 = We(n3.stateNode, n3.type, n3.memoizedProps, l2, e3, n3), n3.updateQueue = e3, e3 !== null && yl(n3);
                  } else {
                    var a2 = H(t2, r2, l2, e3, n3);
                    ul(a2, n3, false, false), n3.stateNode = a2, A(a2, t2, r2, l2, e3) && yl(n3);
                  }
                  n3.ref !== null && (n3.flags |= 128);
                }
                return null;
              case 6:
                if (e3 && n3.stateNode != null)
                  sl(e3, n3, e3.memoizedProps, r2);
                else {
                  if (typeof r2 !== "string" && n3.stateNode === null)
                    throw Error(o(166));
                  if (e3 = $t(At.current), l2 = $t(Ht.current), ar(n3)) {
                    if (!ee)
                      throw Error(o(176));
                    Ae(n3.stateNode, n3.memoizedProps, n3) && yl(n3);
                  } else
                    n3.stateNode = q(r2, e3, l2, n3);
                }
                return null;
              case 13:
                return en(Jt), r2 = n3.memoizedState, (64 & n3.flags) !== 0 ? (n3.lanes = t2, n3) : (r2 = r2 !== null, l2 = false, e3 === null ? n3.memoizedProps.fallback !== void 0 && ar(n3) : l2 = e3.memoizedState !== null, r2 && !l2 && (2 & n3.mode) !== 0 && (e3 === null && n3.memoizedProps.unstable_avoidThisFallback !== true || (1 & Jt.current) !== 0 ? ga === 0 && (ga = 3) : (ga !== 0 && ga !== 3 || (ga = 4), fa === null || (134217727 & ya) === 0 && (134217727 & ka) === 0 || Ja(fa, pa))), Z && r2 && (n3.flags |= 4), X && (r2 || l2) && (n3.flags |= 4), null);
              case 4:
                return qt(), il(n3), e3 === null && ue(n3.stateNode.containerInfo), null;
              case 10:
                return gt(n3), null;
              case 17:
                return on(n3.type) && sn(), null;
              case 19:
                if (en(Jt), r2 = n3.memoizedState, r2 === null)
                  return null;
                if (l2 = (64 & n3.flags) !== 0, a2 = r2.rendering, a2 === null)
                  if (l2)
                    Sl(r2, false);
                  else {
                    if (ga !== 0 || e3 !== null && (64 & e3.flags) !== 0)
                      for (e3 = n3.child; e3 !== null; ) {
                        if (a2 = Kt(e3), a2 !== null) {
                          for (n3.flags |= 64, Sl(r2, false), e3 = a2.updateQueue, e3 !== null && (n3.updateQueue = e3, n3.flags |= 4), r2.lastEffect === null && (n3.firstEffect = null), n3.lastEffect = r2.lastEffect, e3 = t2, r2 = n3.child; r2 !== null; )
                            l2 = r2, t2 = e3, l2.flags &= 2, l2.nextEffect = null, l2.firstEffect = null, l2.lastEffect = null, a2 = l2.alternate, a2 === null ? (l2.childLanes = 0, l2.lanes = t2, l2.child = null, l2.memoizedProps = null, l2.memoizedState = null, l2.updateQueue = null, l2.dependencies = null, l2.stateNode = null) : (l2.childLanes = a2.childLanes, l2.lanes = a2.lanes, l2.child = a2.child, l2.memoizedProps = a2.memoizedProps, l2.memoizedState = a2.memoizedState, l2.updateQueue = a2.updateQueue, l2.type = a2.type, t2 = a2.dependencies, l2.dependencies = t2 === null ? null : { lanes: t2.lanes, firstContext: t2.firstContext }), r2 = r2.sibling;
                          return nn(Jt, 1 & Jt.current | 2), n3.child;
                        }
                        e3 = e3.sibling;
                      }
                    r2.tail !== null && Jn() > xa && (n3.flags |= 64, l2 = true, Sl(r2, false), n3.lanes = 33554432);
                  }
                else {
                  if (!l2)
                    if (e3 = Kt(a2), e3 !== null) {
                      if (n3.flags |= 64, l2 = true, e3 = e3.updateQueue, e3 !== null && (n3.updateQueue = e3, n3.flags |= 4), Sl(r2, true), r2.tail === null && r2.tailMode === "hidden" && !a2.alternate && !er)
                        return n3 = n3.lastEffect = r2.lastEffect, n3 !== null && (n3.nextEffect = null), null;
                    } else
                      2 * Jn() - r2.renderingStartTime > xa && t2 !== 1073741824 && (n3.flags |= 64, l2 = true, Sl(r2, false), n3.lanes = 33554432);
                  r2.isBackwards ? (a2.sibling = n3.child, n3.child = a2) : (e3 = r2.last, e3 !== null ? e3.sibling = a2 : n3.child = a2, r2.last = a2);
                }
                return r2.tail !== null ? (e3 = r2.tail, r2.rendering = e3, r2.tail = e3.sibling, r2.lastEffect = n3.lastEffect, r2.renderingStartTime = Jn(), e3.sibling = null, n3 = Jt.current, nn(Jt, l2 ? 1 & n3 | 2 : 1 & n3), e3) : null;
              case 23:
              case 24:
                return tu(), e3 !== null && e3.memoizedState !== null !== (n3.memoizedState !== null) && r2.mode !== "unstable-defer-without-hiding" && (n3.flags |= 4), null;
            }
            throw Error(o(156, n3.tag));
          }
          function El(e3) {
            switch (e3.tag) {
              case 1:
                on(e3.type) && sn();
                var n3 = e3.flags;
                return 4096 & n3 ? (e3.flags = -4097 & n3 | 64, e3) : null;
              case 3:
                if (qt(), en(ln), en(rn), or(), n3 = e3.flags, (64 & n3) !== 0)
                  throw Error(o(285));
                return e3.flags = -4097 & n3 | 64, e3;
              case 5:
                return Gt(e3), null;
              case 13:
                return en(Jt), n3 = e3.flags, 4096 & n3 ? (e3.flags = -4097 & n3 | 64, e3) : null;
              case 19:
                return en(Jt), null;
              case 4:
                return qt(), null;
              case 10:
                return gt(e3), null;
              case 23:
              case 24:
                return tu(), null;
              default:
                return null;
            }
          }
          function xl(e3, n3) {
            try {
              var t2 = "", r2 = n3;
              do {
                t2 += ot(r2), r2 = r2.return;
              } while (r2);
              var l2 = t2;
            } catch (e4) {
              l2 = "\nError generating stack: " + e4.message + "\n" + e4.stack;
            }
            return { value: e3, source: n3, stack: l2 };
          }
          function _l(e3, n3) {
            try {
              console.error(n3.value);
            } catch (e4) {
              setTimeout(function() {
                throw e4;
              });
            }
          }
          var zl = typeof WeakMap === "function" ? WeakMap : Map;
          function Pl(e3, n3, t2) {
            t2 = Et(-1, t2), t2.tag = 3, t2.payload = { element: null };
            var r2 = n3.value;
            return t2.callback = function() {
              Na || (Na = true, Ca = r2), _l(e3, n3);
            }, t2;
          }
          function Nl(e3, n3, t2) {
            t2 = Et(-1, t2), t2.tag = 3;
            var r2 = e3.type.getDerivedStateFromError;
            if (typeof r2 === "function") {
              var l2 = n3.value;
              t2.payload = function() {
                return _l(e3, n3), r2(l2);
              };
            }
            var a2 = e3.stateNode;
            return a2 !== null && typeof a2.componentDidCatch === "function" && (t2.callback = function() {
              typeof r2 !== "function" && (La === null ? La = new Set([this]) : La.add(this), _l(e3, n3));
              var t3 = n3.stack;
              this.componentDidCatch(n3.value, { componentStack: t3 !== null ? t3 : "" });
            }), t2;
          }
          var Cl = typeof WeakSet === "function" ? WeakSet : Set;
          function Ll(e3) {
            var n3 = e3.ref;
            if (n3 !== null)
              if (typeof n3 === "function")
                try {
                  n3(null);
                } catch (n4) {
                  yu(e3, n4);
                }
              else
                n3.current = null;
          }
          function Il(e3, n3) {
            switch (n3.tag) {
              case 0:
              case 11:
              case 15:
              case 22:
                return;
              case 1:
                if (256 & n3.flags && e3 !== null) {
                  var t2 = e3.memoizedProps, r2 = e3.memoizedState;
                  e3 = n3.stateNode, n3 = e3.getSnapshotBeforeUpdate(n3.elementType === n3.type ? t2 : st(n3.type, t2), r2), e3.__reactInternalSnapshotBeforeUpdate = n3;
                }
                return;
              case 3:
                return void (X && 256 & n3.flags && Ce(n3.stateNode.containerInfo));
              case 5:
              case 6:
              case 4:
              case 17:
                return;
            }
            throw Error(o(163));
          }
          function Tl(e3, n3) {
            if (n3 = n3.updateQueue, n3 = n3 !== null ? n3.lastEffect : null, n3 !== null) {
              var t2 = n3 = n3.next;
              do {
                if ((t2.tag & e3) === e3) {
                  var r2 = t2.destroy;
                  t2.destroy = void 0, r2 !== void 0 && r2();
                }
                t2 = t2.next;
              } while (t2 !== n3);
            }
          }
          function Rl(e3, n3, t2) {
            switch (t2.tag) {
              case 0:
              case 11:
              case 15:
              case 22:
                if (n3 = t2.updateQueue, n3 = n3 !== null ? n3.lastEffect : null, n3 !== null) {
                  e3 = n3 = n3.next;
                  do {
                    if ((3 & e3.tag) === 3) {
                      var r2 = e3.create;
                      e3.destroy = r2();
                    }
                    e3 = e3.next;
                  } while (e3 !== n3);
                }
                if (n3 = t2.updateQueue, n3 = n3 !== null ? n3.lastEffect : null, n3 !== null) {
                  e3 = n3 = n3.next;
                  do {
                    var l2 = e3;
                    r2 = l2.next, l2 = l2.tag, (4 & l2) !== 0 && (1 & l2) !== 0 && (gu(t2, e3), mu(t2, e3)), e3 = r2;
                  } while (e3 !== n3);
                }
                return;
              case 1:
                return e3 = t2.stateNode, 4 & t2.flags && (n3 === null ? e3.componentDidMount() : (r2 = t2.elementType === t2.type ? n3.memoizedProps : st(t2.type, n3.memoizedProps), e3.componentDidUpdate(r2, n3.memoizedState, e3.__reactInternalSnapshotBeforeUpdate))), n3 = t2.updateQueue, void (n3 !== null && Pt(t2, n3, e3));
              case 3:
                if (n3 = t2.updateQueue, n3 !== null) {
                  if (e3 = null, t2.child !== null)
                    switch (t2.child.tag) {
                      case 5:
                        e3 = O(t2.child.stateNode);
                        break;
                      case 1:
                        e3 = t2.child.stateNode;
                    }
                  Pt(t2, n3, e3);
                }
                return;
              case 5:
                return e3 = t2.stateNode, void (n3 === null && 4 & t2.flags && be(e3, t2.type, t2.memoizedProps, t2));
              case 6:
                return;
              case 4:
                return;
              case 12:
                return;
              case 13:
                return void (ee && t2.memoizedState === null && (t2 = t2.alternate, t2 !== null && (t2 = t2.memoizedState, t2 !== null && (t2 = t2.dehydrated, t2 !== null && qe(t2)))));
              case 19:
              case 17:
              case 20:
              case 21:
              case 23:
              case 24:
                return;
            }
            throw Error(o(163));
          }
          function Ul(e3, n3) {
            if (X)
              for (var t2 = e3; ; ) {
                if (t2.tag === 5) {
                  var r2 = t2.stateNode;
                  n3 ? _e(r2) : Pe(t2.stateNode, t2.memoizedProps);
                } else if (t2.tag === 6)
                  r2 = t2.stateNode, n3 ? ze(r2) : Ne(r2, t2.memoizedProps);
                else if ((t2.tag !== 23 && t2.tag !== 24 || t2.memoizedState === null || t2 === e3) && t2.child !== null) {
                  t2.child.return = t2, t2 = t2.child;
                  continue;
                }
                if (t2 === e3)
                  break;
                for (; t2.sibling === null; ) {
                  if (t2.return === null || t2.return === e3)
                    return;
                  t2 = t2.return;
                }
                t2.sibling.return = t2.return, t2 = t2.sibling;
              }
          }
          function Ml(e3, n3) {
            if (mn && typeof mn.onCommitFiberUnmount === "function")
              try {
                mn.onCommitFiberUnmount(hn, n3);
              } catch (e4) {
              }
            switch (n3.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
              case 22:
                if (e3 = n3.updateQueue, e3 !== null && (e3 = e3.lastEffect, e3 !== null)) {
                  var t2 = e3 = e3.next;
                  do {
                    var r2 = t2, l2 = r2.destroy;
                    if (r2 = r2.tag, l2 !== void 0)
                      if ((4 & r2) !== 0)
                        gu(n3, t2);
                      else {
                        r2 = n3;
                        try {
                          l2();
                        } catch (e4) {
                          yu(r2, e4);
                        }
                      }
                    t2 = t2.next;
                  } while (t2 !== e3);
                }
                break;
              case 1:
                if (Ll(n3), e3 = n3.stateNode, typeof e3.componentWillUnmount === "function")
                  try {
                    e3.props = n3.memoizedProps, e3.state = n3.memoizedState, e3.componentWillUnmount();
                  } catch (e4) {
                    yu(n3, e4);
                  }
                break;
              case 5:
                Ll(n3);
                break;
              case 4:
                X ? Hl(e3, n3) : Z && Z && (n3 = n3.stateNode.containerInfo, e3 = Ie(n3), Ue(n3, e3));
            }
          }
          function Dl(e3, n3) {
            for (var t2 = n3; ; )
              if (Ml(e3, t2), t2.child === null || X && t2.tag === 4) {
                if (t2 === n3)
                  break;
                for (; t2.sibling === null; ) {
                  if (t2.return === null || t2.return === n3)
                    return;
                  t2 = t2.return;
                }
                t2.sibling.return = t2.return, t2 = t2.sibling;
              } else
                t2.child.return = t2, t2 = t2.child;
          }
          function Ol(e3) {
            e3.alternate = null, e3.child = null, e3.dependencies = null, e3.firstEffect = null, e3.lastEffect = null, e3.memoizedProps = null, e3.memoizedState = null, e3.pendingProps = null, e3.return = null, e3.updateQueue = null;
          }
          function jl(e3) {
            return e3.tag === 5 || e3.tag === 3 || e3.tag === 4;
          }
          function Fl(e3) {
            if (X) {
              e: {
                for (var n3 = e3.return; n3 !== null; ) {
                  if (jl(n3))
                    break e;
                  n3 = n3.return;
                }
                throw Error(o(160));
              }
              var t2 = n3;
              switch (n3 = t2.stateNode, t2.tag) {
                case 5:
                  var r2 = false;
                  break;
                case 3:
                  n3 = n3.containerInfo, r2 = true;
                  break;
                case 4:
                  n3 = n3.containerInfo, r2 = true;
                  break;
                default:
                  throw Error(o(161));
              }
              16 & t2.flags && (xe(n3), t2.flags &= -17);
              e:
                n:
                  for (t2 = e3; ; ) {
                    for (; t2.sibling === null; ) {
                      if (t2.return === null || jl(t2.return)) {
                        t2 = null;
                        break e;
                      }
                      t2 = t2.return;
                    }
                    for (t2.sibling.return = t2.return, t2 = t2.sibling; t2.tag !== 5 && t2.tag !== 6 && t2.tag !== 18; ) {
                      if (2 & t2.flags)
                        continue n;
                      if (t2.child === null || t2.tag === 4)
                        continue n;
                      t2.child.return = t2, t2 = t2.child;
                    }
                    if (!(2 & t2.flags)) {
                      t2 = t2.stateNode;
                      break e;
                    }
                  }
              r2 ? Bl(e3, t2, n3) : Ql(e3, t2, n3);
            }
          }
          function Bl(e3, n3, t2) {
            var r2 = e3.tag, l2 = r2 === 5 || r2 === 6;
            if (l2)
              e3 = l2 ? e3.stateNode : e3.stateNode.instance, n3 ? Se(t2, e3, n3) : ge(t2, e3);
            else if (r2 !== 4 && (e3 = e3.child, e3 !== null))
              for (Bl(e3, n3, t2), e3 = e3.sibling; e3 !== null; )
                Bl(e3, n3, t2), e3 = e3.sibling;
          }
          function Ql(e3, n3, t2) {
            var r2 = e3.tag, l2 = r2 === 5 || r2 === 6;
            if (l2)
              e3 = l2 ? e3.stateNode : e3.stateNode.instance, n3 ? ke(t2, e3, n3) : me(t2, e3);
            else if (r2 !== 4 && (e3 = e3.child, e3 !== null))
              for (Ql(e3, n3, t2), e3 = e3.sibling; e3 !== null; )
                Ql(e3, n3, t2), e3 = e3.sibling;
          }
          function Hl(e3, n3) {
            for (var t2, r2, l2 = n3, a2 = false; ; ) {
              if (!a2) {
                a2 = l2.return;
                e:
                  for (; ; ) {
                    if (a2 === null)
                      throw Error(o(160));
                    switch (t2 = a2.stateNode, a2.tag) {
                      case 5:
                        r2 = false;
                        break e;
                      case 3:
                        t2 = t2.containerInfo, r2 = true;
                        break e;
                      case 4:
                        t2 = t2.containerInfo, r2 = true;
                        break e;
                    }
                    a2 = a2.return;
                  }
                a2 = true;
              }
              if (l2.tag === 5 || l2.tag === 6)
                Dl(e3, l2), r2 ? Ee(t2, l2.stateNode) : we(t2, l2.stateNode);
              else if (l2.tag === 4) {
                if (l2.child !== null) {
                  t2 = l2.stateNode.containerInfo, r2 = true, l2.child.return = l2, l2 = l2.child;
                  continue;
                }
              } else if (Ml(e3, l2), l2.child !== null) {
                l2.child.return = l2, l2 = l2.child;
                continue;
              }
              if (l2 === n3)
                break;
              for (; l2.sibling === null; ) {
                if (l2.return === null || l2.return === n3)
                  return;
                l2 = l2.return, l2.tag === 4 && (a2 = false);
              }
              l2.sibling.return = l2.return, l2 = l2.sibling;
            }
          }
          function Wl(e3, n3) {
            if (X) {
              switch (n3.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                case 22:
                  return void Tl(3, n3);
                case 1:
                  return;
                case 5:
                  var t2 = n3.stateNode;
                  if (t2 != null) {
                    var r2 = n3.memoizedProps;
                    e3 = e3 !== null ? e3.memoizedProps : r2;
                    var l2 = n3.type, a2 = n3.updateQueue;
                    n3.updateQueue = null, a2 !== null && ye(t2, a2, l2, e3, r2, n3);
                  }
                  return;
                case 6:
                  if (n3.stateNode === null)
                    throw Error(o(162));
                  return t2 = n3.memoizedProps, void ve(n3.stateNode, e3 !== null ? e3.memoizedProps : t2, t2);
                case 3:
                  return void (ee && (n3 = n3.stateNode, n3.hydrate && (n3.hydrate = false, Ve(n3.containerInfo))));
                case 12:
                  return;
                case 13:
                  return Al(n3), void $l(n3);
                case 19:
                  return void $l(n3);
                case 17:
                  return;
                case 23:
                case 24:
                  return void Ul(n3, n3.memoizedState !== null);
              }
              throw Error(o(163));
            }
            switch (n3.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
              case 22:
                return void Tl(3, n3);
              case 12:
                return;
              case 13:
                return Al(n3), void $l(n3);
              case 19:
                return void $l(n3);
              case 3:
                ee && (t2 = n3.stateNode, t2.hydrate && (t2.hydrate = false, Ve(t2.containerInfo)));
                break;
              case 23:
              case 24:
                return;
            }
            e:
              if (Z) {
                switch (n3.tag) {
                  case 1:
                  case 5:
                  case 6:
                  case 20:
                    break e;
                  case 3:
                  case 4:
                    n3 = n3.stateNode, Ue(n3.containerInfo, n3.pendingChildren);
                    break e;
                }
                throw Error(o(163));
              }
          }
          function Al(e3) {
            e3.memoizedState !== null && (Ea = Jn(), X && Ul(e3.child, true));
          }
          function $l(e3) {
            var n3 = e3.updateQueue;
            if (n3 !== null) {
              e3.updateQueue = null;
              var t2 = e3.stateNode;
              t2 === null && (t2 = e3.stateNode = new Cl()), n3.forEach(function(n4) {
                var r2 = Su.bind(null, e3, n4);
                t2.has(n4) || (t2.add(n4), n4.then(r2, r2));
              });
            }
          }
          function Vl(e3, n3) {
            return e3 !== null && (e3 = e3.memoizedState, e3 === null || e3.dehydrated !== null) && (n3 = n3.memoizedState, n3 !== null && n3.dehydrated === null);
          }
          var ql = 0, Yl = 1, Gl = 2, Jl = 3, Kl = 4;
          if (typeof Symbol === "function" && Symbol.for) {
            var Xl = Symbol.for;
            ql = Xl("selector.component"), Yl = Xl("selector.has_pseudo_class"), Gl = Xl("selector.role"), Jl = Xl("selector.test_id"), Kl = Xl("selector.text");
          }
          function Zl(e3) {
            var n3 = ne(e3);
            if (n3 != null) {
              if (typeof n3.memoizedProps["data-testname"] !== "string")
                throw Error(o(364));
              return n3;
            }
            if (e3 = oe(e3), e3 === null)
              throw Error(o(362));
            return e3.stateNode.current;
          }
          function ea(e3, n3) {
            switch (n3.$$typeof) {
              case ql:
                if (e3.type === n3.value)
                  return true;
                break;
              case Yl:
                e: {
                  n3 = n3.value, e3 = [e3, 0];
                  for (var t2 = 0; t2 < e3.length; ) {
                    var r2 = e3[t2++], l2 = e3[t2++], a2 = n3[l2];
                    if (r2.tag !== 5 || !fe(r2)) {
                      for (; a2 != null && ea(r2, a2); )
                        l2++, a2 = n3[l2];
                      if (l2 === n3.length) {
                        n3 = true;
                        break e;
                      }
                      for (r2 = r2.child; r2 !== null; )
                        e3.push(r2, l2), r2 = r2.sibling;
                    }
                  }
                  n3 = false;
                }
                return n3;
              case Gl:
                if (e3.tag === 5 && de(e3.stateNode, n3.value))
                  return true;
                break;
              case Kl:
                if ((e3.tag === 5 || e3.tag === 6) && (e3 = ce(e3), e3 !== null && 0 <= e3.indexOf(n3.value)))
                  return true;
                break;
              case Jl:
                if (e3.tag === 5 && (e3 = e3.memoizedProps["data-testname"], typeof e3 === "string" && e3.toLowerCase() === n3.value.toLowerCase()))
                  return true;
                break;
              default:
                throw Error(o(365, n3));
            }
            return false;
          }
          function na(e3) {
            switch (e3.$$typeof) {
              case ql:
                return "<" + (C(e3.value) || "Unknown") + ">";
              case Yl:
                return ":has(" + (na(e3) || "") + ")";
              case Gl:
                return '[role="' + e3.value + '"]';
              case Kl:
                return '"' + e3.value + '"';
              case Jl:
                return '[data-testname="' + e3.value + '"]';
              default:
                throw Error(o(365, e3));
            }
          }
          function ta(e3, n3) {
            var t2 = [];
            e3 = [e3, 0];
            for (var r2 = 0; r2 < e3.length; ) {
              var l2 = e3[r2++], a2 = e3[r2++], u2 = n3[a2];
              if (l2.tag !== 5 || !fe(l2)) {
                for (; u2 != null && ea(l2, u2); )
                  a2++, u2 = n3[a2];
                if (a2 === n3.length)
                  t2.push(l2);
                else
                  for (l2 = l2.child; l2 !== null; )
                    e3.push(l2, a2), l2 = l2.sibling;
              }
            }
            return t2;
          }
          function ra(e3, n3) {
            if (!ie)
              throw Error(o(363));
            e3 = Zl(e3), e3 = ta(e3, n3), n3 = [], e3 = Array.from(e3);
            for (var t2 = 0; t2 < e3.length; ) {
              var r2 = e3[t2++];
              if (r2.tag === 5)
                fe(r2) || n3.push(r2.stateNode);
              else
                for (r2 = r2.child; r2 !== null; )
                  e3.push(r2), r2 = r2.sibling;
            }
            return n3;
          }
          var la = null;
          function aa(n3) {
            if (la === null)
              try {
                var t2 = ("require" + Math.random()).slice(0, 7);
                la = (e2 && e2[t2]).call(e2, "timers").setImmediate;
              } catch (e3) {
                la = function(e4) {
                  var n4 = new MessageChannel();
                  n4.port1.onmessage = e4, n4.port2.postMessage(void 0);
                };
              }
            return la(n3);
          }
          var ua = Math.ceil, ia = s.ReactCurrentDispatcher, oa = s.ReactCurrentOwner, sa = s.IsSomeRendererActing, ca = 0, fa = null, da = null, pa = 0, ha = 0, ma = Ze(0), ga = 0, va = null, ba = 0, ya = 0, ka = 0, Sa = 0, wa = null, Ea = 0, xa = 1 / 0;
          function _a() {
            xa = Jn() + 500;
          }
          var za, Pa = null, Na = false, Ca = null, La = null, Ia = false, Ta = null, Ra = 90, Ua = [], Ma = [], Da = null, Oa = 0, ja = null, Fa = -1, Ba = 0, Qa = 0, Ha = null, Wa = false;
          function Aa() {
            return (48 & ca) !== 0 ? Jn() : Fa !== -1 ? Fa : Fa = Jn();
          }
          function $a(e3) {
            if (e3 = e3.mode, (2 & e3) === 0)
              return 1;
            if ((4 & e3) === 0)
              return Kn() === 99 ? 1 : 2;
            if (Ba === 0 && (Ba = ba), rt.transition !== 0) {
              Qa !== 0 && (Qa = wa !== null ? wa.pendingLanes : 0), e3 = Ba;
              var n3 = 4186112 & ~Qa;
              return n3 &= -n3, n3 === 0 && (e3 = 4186112 & ~e3, n3 = e3 & -e3, n3 === 0 && (n3 = 8192)), n3;
            }
            return e3 = Kn(), (4 & ca) !== 0 && e3 === 98 ? e3 = xn(12, Ba) : (e3 = kn(e3), e3 = xn(e3, Ba)), e3;
          }
          function Va(e3, n3, t2) {
            if (50 < Oa)
              throw Oa = 0, ja = null, Error(o(185));
            if (e3 = qa(e3, n3), e3 === null)
              return null;
            Pn(e3, n3, t2), e3 === fa && (ka |= n3, ga === 4 && Ja(e3, pa));
            var r2 = Kn();
            n3 === 1 ? (8 & ca) !== 0 && (48 & ca) === 0 ? Ka(e3) : (Ya(e3, t2), ca === 0 && (_a(), nt())) : ((4 & ca) === 0 || r2 !== 98 && r2 !== 99 || (Da === null ? Da = new Set([e3]) : Da.add(e3)), Ya(e3, t2)), wa = e3;
          }
          function qa(e3, n3) {
            e3.lanes |= n3;
            var t2 = e3.alternate;
            for (t2 !== null && (t2.lanes |= n3), t2 = e3, e3 = e3.return; e3 !== null; )
              e3.childLanes |= n3, t2 = e3.alternate, t2 !== null && (t2.childLanes |= n3), t2 = e3, e3 = e3.return;
            return t2.tag === 3 ? t2.stateNode : null;
          }
          function Ya(e3, n3) {
            for (var t2 = e3.callbackNode, r2 = e3.suspendedLanes, l2 = e3.pingedLanes, a2 = e3.expirationTimes, u2 = e3.pendingLanes; 0 < u2; ) {
              var i2 = 31 - Nn(u2), o2 = 1 << i2, s2 = a2[i2];
              if (s2 === -1) {
                if ((o2 & r2) === 0 || (o2 & l2) !== 0) {
                  s2 = n3, yn(o2);
                  var c2 = bn;
                  a2[i2] = 10 <= c2 ? s2 + 250 : 6 <= c2 ? s2 + 5e3 : -1;
                }
              } else
                s2 <= n3 && (e3.expiredLanes |= o2);
              u2 &= ~o2;
            }
            if (r2 = wn(e3, e3 === fa ? pa : 0), n3 = bn, r2 === 0)
              t2 !== null && (t2 !== An && Un(t2), e3.callbackNode = null, e3.callbackPriority = 0);
            else {
              if (t2 !== null) {
                if (e3.callbackPriority === n3)
                  return;
                t2 !== An && Un(t2);
              }
              n3 === 15 ? (t2 = Ka.bind(null, e3), Vn === null ? (Vn = [t2], qn = Rn(Fn, tt2)) : Vn.push(t2), t2 = An) : n3 === 14 ? t2 = et(99, Ka.bind(null, e3)) : (t2 = Sn(n3), t2 = et(t2, Ga.bind(null, e3))), e3.callbackPriority = n3, e3.callbackNode = t2;
            }
          }
          function Ga(e3) {
            if (Fa = -1, Qa = Ba = 0, (48 & ca) !== 0)
              throw Error(o(327));
            var n3 = e3.callbackNode;
            if (hu() && e3.callbackNode !== n3)
              return null;
            var t2 = wn(e3, e3 === fa ? pa : 0);
            if (t2 === 0)
              return null;
            var r2 = t2, l2 = ca;
            ca |= 16;
            var a2 = au();
            fa === e3 && pa === r2 || (_a(), ru(e3, r2));
            do {
              try {
                ou();
                break;
              } catch (n4) {
                lu(e3, n4);
              }
            } while (1);
            if (ht(), ia.current = a2, ca = l2, da !== null ? r2 = 0 : (fa = null, pa = 0, r2 = ga), (ba & ka) !== 0)
              ru(e3, 0);
            else if (r2 !== 0) {
              if (r2 === 2 && (ca |= 64, e3.hydrate && (e3.hydrate = false, Ce(e3.containerInfo)), t2 = En(e3), t2 !== 0 && (r2 = uu(e3, t2))), r2 === 1)
                throw n3 = va, ru(e3, 0), Ja(e3, t2), Ya(e3, Jn()), n3;
              switch (e3.finishedWork = e3.current.alternate, e3.finishedLanes = t2, r2) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                  fu(e3);
                  break;
                case 3:
                  if (Ja(e3, t2), (62914560 & t2) === t2 && (r2 = Ea + 500 - Jn(), 10 < r2)) {
                    if (wn(e3, 0) !== 0)
                      break;
                    if (l2 = e3.suspendedLanes, (l2 & t2) !== t2) {
                      Aa(), e3.pingedLanes |= e3.suspendedLanes & l2;
                      break;
                    }
                    e3.timeoutHandle = Y(fu.bind(null, e3), r2);
                    break;
                  }
                  fu(e3);
                  break;
                case 4:
                  if (Ja(e3, t2), (4186112 & t2) === t2)
                    break;
                  for (r2 = e3.eventTimes, l2 = -1; 0 < t2; ) {
                    var u2 = 31 - Nn(t2);
                    a2 = 1 << u2, u2 = r2[u2], u2 > l2 && (l2 = u2), t2 &= ~a2;
                  }
                  if (t2 = l2, t2 = Jn() - t2, t2 = (120 > t2 ? 120 : 480 > t2 ? 480 : 1080 > t2 ? 1080 : 1920 > t2 ? 1920 : 3e3 > t2 ? 3e3 : 4320 > t2 ? 4320 : 1960 * ua(t2 / 1960)) - t2, 10 < t2) {
                    e3.timeoutHandle = Y(fu.bind(null, e3), t2);
                    break;
                  }
                  fu(e3);
                  break;
                case 5:
                  fu(e3);
                  break;
                default:
                  throw Error(o(329));
              }
            }
            return Ya(e3, Jn()), e3.callbackNode === n3 ? Ga.bind(null, e3) : null;
          }
          function Ja(e3, n3) {
            for (n3 &= ~Sa, n3 &= ~ka, e3.suspendedLanes |= n3, e3.pingedLanes &= ~n3, e3 = e3.expirationTimes; 0 < n3; ) {
              var t2 = 31 - Nn(n3), r2 = 1 << t2;
              e3[t2] = -1, n3 &= ~r2;
            }
          }
          function Ka(e3) {
            if ((48 & ca) !== 0)
              throw Error(o(327));
            if (hu(), e3 === fa && (e3.expiredLanes & pa) !== 0) {
              var n3 = pa, t2 = uu(e3, n3);
              (ba & ka) !== 0 && (n3 = wn(e3, n3), t2 = uu(e3, n3));
            } else
              n3 = wn(e3, 0), t2 = uu(e3, n3);
            if (e3.tag !== 0 && t2 === 2 && (ca |= 64, e3.hydrate && (e3.hydrate = false, Ce(e3.containerInfo)), n3 = En(e3), n3 !== 0 && (t2 = uu(e3, n3))), t2 === 1)
              throw t2 = va, ru(e3, 0), Ja(e3, n3), Ya(e3, Jn()), t2;
            return e3.finishedWork = e3.current.alternate, e3.finishedLanes = n3, fu(e3), Ya(e3, Jn()), null;
          }
          function Xa() {
            if (Da !== null) {
              var e3 = Da;
              Da = null, e3.forEach(function(e4) {
                e4.expiredLanes |= 24 & e4.pendingLanes, Ya(e4, Jn());
              });
            }
            nt();
          }
          function Za(e3, n3) {
            var t2 = ca;
            ca |= 1;
            try {
              return e3(n3);
            } finally {
              ca = t2, ca === 0 && (_a(), nt());
            }
          }
          function eu(e3, n3) {
            var t2 = ca;
            if ((48 & t2) !== 0)
              return e3(n3);
            ca |= 1;
            try {
              if (e3)
                return Zn(99, e3.bind(null, n3));
            } finally {
              ca = t2, nt();
            }
          }
          function nu(e3, n3) {
            nn(ma, ha), ha |= n3, ba |= n3;
          }
          function tu() {
            ha = ma.current, en(ma);
          }
          function ru(e3, n3) {
            e3.finishedWork = null, e3.finishedLanes = 0;
            var t2 = e3.timeoutHandle;
            if (t2 !== J && (e3.timeoutHandle = J, G(t2)), da !== null)
              for (t2 = da.return; t2 !== null; ) {
                var r2 = t2;
                switch (r2.tag) {
                  case 1:
                    r2 = r2.type.childContextTypes, r2 !== null && r2 !== void 0 && sn();
                    break;
                  case 3:
                    qt(), en(ln), en(rn), or();
                    break;
                  case 5:
                    Gt(r2);
                    break;
                  case 4:
                    qt();
                    break;
                  case 13:
                    en(Jt);
                    break;
                  case 19:
                    en(Jt);
                    break;
                  case 10:
                    gt(r2);
                    break;
                  case 23:
                  case 24:
                    tu();
                }
                t2 = t2.return;
              }
            fa = e3, da = Ru(e3.current, null), pa = ha = ba = n3, ga = 0, va = null, Sa = ka = ya = 0;
          }
          function lu(e3, t2) {
            do {
              var r2 = da;
              try {
                if (ht(), sr.current = Ar, mr) {
                  for (var l2 = dr.memoizedState; l2 !== null; ) {
                    var a2 = l2.queue;
                    a2 !== null && (a2.pending = null), l2 = l2.next;
                  }
                  mr = false;
                }
                if (fr = 0, hr = pr = dr = null, gr = false, oa.current = null, r2 === null || r2.return === null) {
                  ga = 1, va = t2, da = null;
                  break;
                }
                e: {
                  var u2 = e3, i2 = r2.return, o2 = r2, s2 = t2;
                  if (t2 = pa, o2.flags |= 2048, o2.firstEffect = o2.lastEffect = null, s2 !== null && n2(s2) === "object" && typeof s2.then === "function") {
                    var c2 = s2;
                    if ((2 & o2.mode) === 0) {
                      var f2 = o2.alternate;
                      f2 ? (o2.updateQueue = f2.updateQueue, o2.memoizedState = f2.memoizedState, o2.lanes = f2.lanes) : (o2.updateQueue = null, o2.memoizedState = null);
                    }
                    var d2 = (1 & Jt.current) !== 0, p2 = i2;
                    do {
                      var h2;
                      if (h2 = p2.tag === 13) {
                        var m2 = p2.memoizedState;
                        if (m2 !== null)
                          h2 = m2.dehydrated !== null;
                        else {
                          var g2 = p2.memoizedProps;
                          h2 = g2.fallback !== void 0 && (g2.unstable_avoidThisFallback !== true || !d2);
                        }
                      }
                      if (h2) {
                        var v2 = p2.updateQueue;
                        if (v2 === null) {
                          var b2 = new Set();
                          b2.add(c2), p2.updateQueue = b2;
                        } else
                          v2.add(c2);
                        if ((2 & p2.mode) === 0) {
                          if (p2.flags |= 64, o2.flags |= 16384, o2.flags &= -2981, o2.tag === 1)
                            if (o2.alternate === null)
                              o2.tag = 17;
                            else {
                              var y2 = Et(-1, 1);
                              y2.tag = 2, xt(o2, y2);
                            }
                          o2.lanes |= 1;
                          break e;
                        }
                        s2 = void 0, o2 = t2;
                        var k2 = u2.pingCache;
                        if (k2 === null ? (k2 = u2.pingCache = new zl(), s2 = new Set(), k2.set(c2, s2)) : (s2 = k2.get(c2), s2 === void 0 && (s2 = new Set(), k2.set(c2, s2))), !s2.has(o2)) {
                          s2.add(o2);
                          var S2 = ku.bind(null, u2, c2, o2);
                          c2.then(S2, S2);
                        }
                        p2.flags |= 4096, p2.lanes = t2;
                        break e;
                      }
                      p2 = p2.return;
                    } while (p2 !== null);
                    s2 = Error((C(o2.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
                  }
                  ga !== 5 && (ga = 2), s2 = xl(s2, o2), p2 = i2;
                  do {
                    switch (p2.tag) {
                      case 3:
                        u2 = s2, p2.flags |= 4096, t2 &= -t2, p2.lanes |= t2;
                        var w2 = Pl(p2, u2, t2);
                        _t(p2, w2);
                        break e;
                      case 1:
                        u2 = s2;
                        var E2 = p2.type, x2 = p2.stateNode;
                        if ((64 & p2.flags) === 0 && (typeof E2.getDerivedStateFromError === "function" || x2 !== null && typeof x2.componentDidCatch === "function" && (La === null || !La.has(x2)))) {
                          p2.flags |= 4096, t2 &= -t2, p2.lanes |= t2;
                          var _2 = Nl(p2, u2, t2);
                          _t(p2, _2);
                          break e;
                        }
                    }
                    p2 = p2.return;
                  } while (p2 !== null);
                }
                cu(r2);
              } catch (e4) {
                t2 = e4, da === r2 && r2 !== null && (da = r2 = r2.return);
                continue;
              }
              break;
            } while (1);
          }
          function au() {
            var e3 = ia.current;
            return ia.current = Ar, e3 === null ? Ar : e3;
          }
          function uu(e3, n3) {
            var t2 = ca;
            ca |= 16;
            var r2 = au();
            fa === e3 && pa === n3 || ru(e3, n3);
            do {
              try {
                iu();
                break;
              } catch (n4) {
                lu(e3, n4);
              }
            } while (1);
            if (ht(), ca = t2, ia.current = r2, da !== null)
              throw Error(o(261));
            return fa = null, pa = 0, ga;
          }
          function iu() {
            for (; da !== null; )
              su(da);
          }
          function ou() {
            for (; da !== null && !Mn(); )
              su(da);
          }
          function su(e3) {
            var n3 = za(e3.alternate, e3, ha);
            e3.memoizedProps = e3.pendingProps, n3 === null ? cu(e3) : da = n3, oa.current = null;
          }
          function cu(e3) {
            var n3 = e3;
            do {
              var t2 = n3.alternate;
              if (e3 = n3.return, (2048 & n3.flags) === 0) {
                if (t2 = wl(t2, n3, ha), t2 !== null)
                  return void (da = t2);
                if (t2 = n3, t2.tag !== 24 && t2.tag !== 23 || t2.memoizedState === null || (1073741824 & ha) !== 0 || (4 & t2.mode) === 0) {
                  for (var r2 = 0, l2 = t2.child; l2 !== null; )
                    r2 |= l2.lanes | l2.childLanes, l2 = l2.sibling;
                  t2.childLanes = r2;
                }
                e3 !== null && (2048 & e3.flags) === 0 && (e3.firstEffect === null && (e3.firstEffect = n3.firstEffect), n3.lastEffect !== null && (e3.lastEffect !== null && (e3.lastEffect.nextEffect = n3.firstEffect), e3.lastEffect = n3.lastEffect), 1 < n3.flags && (e3.lastEffect !== null ? e3.lastEffect.nextEffect = n3 : e3.firstEffect = n3, e3.lastEffect = n3));
              } else {
                if (t2 = El(n3), t2 !== null)
                  return t2.flags &= 2047, void (da = t2);
                e3 !== null && (e3.firstEffect = e3.lastEffect = null, e3.flags |= 2048);
              }
              if (n3 = n3.sibling, n3 !== null)
                return void (da = n3);
              da = n3 = e3;
            } while (n3 !== null);
            ga === 0 && (ga = 5);
          }
          function fu(e3) {
            var n3 = Kn();
            return Zn(99, du.bind(null, e3, n3)), null;
          }
          function du(e3, n3) {
            do {
              hu();
            } while (Ta !== null);
            if ((48 & ca) !== 0)
              throw Error(o(327));
            var t2 = e3.finishedWork;
            if (t2 === null)
              return null;
            if (e3.finishedWork = null, e3.finishedLanes = 0, t2 === e3.current)
              throw Error(o(177));
            e3.callbackNode = null;
            var r2 = t2.lanes | t2.childLanes, l2 = r2, a2 = e3.pendingLanes & ~l2;
            e3.pendingLanes = l2, e3.suspendedLanes = 0, e3.pingedLanes = 0, e3.expiredLanes &= l2, e3.mutableReadLanes &= l2, e3.entangledLanes &= l2, l2 = e3.entanglements;
            for (var u2 = e3.eventTimes, i2 = e3.expirationTimes; 0 < a2; ) {
              var s2 = 31 - Nn(a2), c2 = 1 << s2;
              l2[s2] = 0, u2[s2] = -1, i2[s2] = -1, a2 &= ~c2;
            }
            if (Da !== null && (24 & r2) === 0 && Da.has(e3) && Da.delete(e3), e3 === fa && (da = fa = null, pa = 0), 1 < t2.flags ? t2.lastEffect !== null ? (t2.lastEffect.nextEffect = t2, r2 = t2.firstEffect) : r2 = t2 : r2 = t2.firstEffect, r2 !== null) {
              l2 = ca, ca |= 32, oa.current = null, Ha = B(e3.containerInfo), Wa = false, Pa = r2;
              do {
                try {
                  pu();
                } catch (e4) {
                  if (Pa === null)
                    throw Error(o(330));
                  yu(Pa, e4), Pa = Pa.nextEffect;
                }
              } while (Pa !== null);
              Ha = null, Pa = r2;
              do {
                try {
                  for (u2 = e3; Pa !== null; ) {
                    var f2 = Pa.flags;
                    if (16 & f2 && X && xe(Pa.stateNode), 128 & f2) {
                      var d2 = Pa.alternate;
                      if (d2 !== null) {
                        var p2 = d2.ref;
                        p2 !== null && (typeof p2 === "function" ? p2(null) : p2.current = null);
                      }
                    }
                    switch (1038 & f2) {
                      case 2:
                        Fl(Pa), Pa.flags &= -3;
                        break;
                      case 6:
                        Fl(Pa), Pa.flags &= -3, Wl(Pa.alternate, Pa);
                        break;
                      case 1024:
                        Pa.flags &= -1025;
                        break;
                      case 1028:
                        Pa.flags &= -1025, Wl(Pa.alternate, Pa);
                        break;
                      case 4:
                        Wl(Pa.alternate, Pa);
                        break;
                      case 8:
                        i2 = u2, a2 = Pa, X ? Hl(i2, a2) : Dl(i2, a2);
                        var h2 = a2.alternate;
                        Ol(a2), h2 !== null && Ol(h2);
                    }
                    Pa = Pa.nextEffect;
                  }
                } catch (e4) {
                  if (Pa === null)
                    throw Error(o(330));
                  yu(Pa, e4), Pa = Pa.nextEffect;
                }
              } while (Pa !== null);
              Wa && ae(), Q(e3.containerInfo), e3.current = t2, Pa = r2;
              do {
                try {
                  for (f2 = e3; Pa !== null; ) {
                    var m2 = Pa.flags;
                    if (36 & m2 && Rl(f2, Pa.alternate, Pa), 128 & m2) {
                      d2 = void 0;
                      var g2 = Pa.ref;
                      if (g2 !== null) {
                        var v2 = Pa.stateNode;
                        switch (Pa.tag) {
                          case 5:
                            d2 = O(v2);
                            break;
                          default:
                            d2 = v2;
                        }
                        typeof g2 === "function" ? g2(d2) : g2.current = d2;
                      }
                    }
                    Pa = Pa.nextEffect;
                  }
                } catch (e4) {
                  if (Pa === null)
                    throw Error(o(330));
                  yu(Pa, e4), Pa = Pa.nextEffect;
                }
              } while (Pa !== null);
              Pa = null, $n(), ca = l2;
            } else
              e3.current = t2;
            if (Ia)
              Ia = false, Ta = e3, Ra = n3;
            else
              for (Pa = r2; Pa !== null; )
                n3 = Pa.nextEffect, Pa.nextEffect = null, 8 & Pa.flags && (m2 = Pa, m2.sibling = null, m2.stateNode = null), Pa = n3;
            if (r2 = e3.pendingLanes, r2 === 0 && (La = null), r2 === 1 ? e3 === ja ? Oa++ : (Oa = 0, ja = e3) : Oa = 0, t2 = t2.stateNode, mn && typeof mn.onCommitFiberRoot === "function")
              try {
                mn.onCommitFiberRoot(hn, t2, void 0, (64 & t2.current.flags) === 64);
              } catch (e4) {
              }
            if (Ya(e3, Jn()), Na)
              throw Na = false, e3 = Ca, Ca = null, e3;
            return (8 & ca) !== 0 || nt(), null;
          }
          function pu() {
            for (; Pa !== null; ) {
              var e3 = Pa.alternate;
              Wa || Ha === null || ((8 & Pa.flags) !== 0 ? M(Pa, Ha) && (Wa = true, le()) : Pa.tag === 13 && Vl(e3, Pa) && M(Pa, Ha) && (Wa = true, le()));
              var n3 = Pa.flags;
              (256 & n3) !== 0 && Il(e3, Pa), (512 & n3) === 0 || Ia || (Ia = true, et(97, function() {
                return hu(), null;
              })), Pa = Pa.nextEffect;
            }
          }
          function hu() {
            if (Ra !== 90) {
              var e3 = 97 < Ra ? 97 : Ra;
              return Ra = 90, Zn(e3, vu);
            }
            return false;
          }
          function mu(e3, n3) {
            Ua.push(n3, e3), Ia || (Ia = true, et(97, function() {
              return hu(), null;
            }));
          }
          function gu(e3, n3) {
            Ma.push(n3, e3), Ia || (Ia = true, et(97, function() {
              return hu(), null;
            }));
          }
          function vu() {
            if (Ta === null)
              return false;
            var e3 = Ta;
            if (Ta = null, (48 & ca) !== 0)
              throw Error(o(331));
            var n3 = ca;
            ca |= 32;
            var t2 = Ma;
            Ma = [];
            for (var r2 = 0; r2 < t2.length; r2 += 2) {
              var l2 = t2[r2], a2 = t2[r2 + 1], u2 = l2.destroy;
              if (l2.destroy = void 0, typeof u2 === "function")
                try {
                  u2();
                } catch (e4) {
                  if (a2 === null)
                    throw Error(o(330));
                  yu(a2, e4);
                }
            }
            for (t2 = Ua, Ua = [], r2 = 0; r2 < t2.length; r2 += 2) {
              l2 = t2[r2], a2 = t2[r2 + 1];
              try {
                var i2 = l2.create;
                l2.destroy = i2();
              } catch (e4) {
                if (a2 === null)
                  throw Error(o(330));
                yu(a2, e4);
              }
            }
            for (i2 = e3.current.firstEffect; i2 !== null; )
              e3 = i2.nextEffect, i2.nextEffect = null, 8 & i2.flags && (i2.sibling = null, i2.stateNode = null), i2 = e3;
            return ca = n3, nt(), true;
          }
          function bu(e3, n3, t2) {
            n3 = xl(t2, n3), n3 = Pl(e3, n3, 1), xt(e3, n3), n3 = Aa(), e3 = qa(e3, 1), e3 !== null && (Pn(e3, 1, n3), Ya(e3, n3));
          }
          function yu(e3, n3) {
            if (e3.tag === 3)
              bu(e3, e3, n3);
            else
              for (var t2 = e3.return; t2 !== null; ) {
                if (t2.tag === 3) {
                  bu(t2, e3, n3);
                  break;
                }
                if (t2.tag === 1) {
                  var r2 = t2.stateNode;
                  if (typeof t2.type.getDerivedStateFromError === "function" || typeof r2.componentDidCatch === "function" && (La === null || !La.has(r2))) {
                    e3 = xl(n3, e3);
                    var l2 = Nl(t2, e3, 1);
                    if (xt(t2, l2), l2 = Aa(), t2 = qa(t2, 1), t2 !== null)
                      Pn(t2, 1, l2), Ya(t2, l2);
                    else if (typeof r2.componentDidCatch === "function" && (La === null || !La.has(r2)))
                      try {
                        r2.componentDidCatch(n3, e3);
                      } catch (e4) {
                      }
                    break;
                  }
                }
                t2 = t2.return;
              }
          }
          function ku(e3, n3, t2) {
            var r2 = e3.pingCache;
            r2 !== null && r2.delete(n3), n3 = Aa(), e3.pingedLanes |= e3.suspendedLanes & t2, fa === e3 && (pa & t2) === t2 && (ga === 4 || ga === 3 && (62914560 & pa) === pa && 500 > Jn() - Ea ? ru(e3, 0) : Sa |= t2), Ya(e3, n3);
          }
          function Su(e3, n3) {
            var t2 = e3.stateNode;
            t2 !== null && t2.delete(n3), n3 = 0, n3 === 0 && (n3 = e3.mode, (2 & n3) === 0 ? n3 = 1 : (4 & n3) === 0 ? n3 = Kn() === 99 ? 1 : 2 : (Ba === 0 && (Ba = ba), n3 = _n(62914560 & ~Ba), n3 === 0 && (n3 = 4194304))), t2 = Aa(), e3 = qa(e3, n3), e3 !== null && (Pn(e3, n3, t2), Ya(e3, t2));
          }
          za = function(e3, t2, r2) {
            var l2 = t2.lanes;
            if (e3 !== null)
              if (e3.memoizedProps !== t2.pendingProps || ln.current)
                Gr = true;
              else {
                if ((r2 & l2) === 0) {
                  switch (Gr = false, t2.tag) {
                    case 3:
                      al(t2), ur();
                      break;
                    case 5:
                      Yt(t2);
                      break;
                    case 1:
                      on(t2.type) && dn(t2);
                      break;
                    case 4:
                      Vt(t2, t2.stateNode.containerInfo);
                      break;
                    case 10:
                      mt(t2, t2.memoizedProps.value);
                      break;
                    case 13:
                      if (t2.memoizedState !== null)
                        return (r2 & t2.child.childLanes) !== 0 ? fl(e3, t2, r2) : (nn(Jt, 1 & Jt.current), t2 = bl(e3, t2, r2), t2 !== null ? t2.sibling : null);
                      nn(Jt, 1 & Jt.current);
                      break;
                    case 19:
                      if (l2 = (r2 & t2.childLanes) !== 0, (64 & e3.flags) !== 0) {
                        if (l2)
                          return vl(e3, t2, r2);
                        t2.flags |= 64;
                      }
                      var a2 = t2.memoizedState;
                      if (a2 !== null && (a2.rendering = null, a2.tail = null, a2.lastEffect = null), nn(Jt, Jt.current), l2)
                        break;
                      return null;
                    case 23:
                    case 24:
                      return t2.lanes = 0, el(e3, t2, r2);
                  }
                  return bl(e3, t2, r2);
                }
                Gr = (16384 & e3.flags) !== 0;
              }
            else
              Gr = false;
            switch (t2.lanes = 0, t2.tag) {
              case 2:
                if (l2 = t2.type, e3 !== null && (e3.alternate = null, t2.alternate = null, t2.flags |= 2), e3 = t2.pendingProps, a2 = un(t2, rn.current), bt(t2, r2), a2 = yr(null, t2, l2, e3, a2, r2), t2.flags |= 1, n2(a2) === "object" && a2 !== null && typeof a2.render === "function" && a2.$$typeof === void 0) {
                  if (t2.tag = 1, t2.memoizedState = null, t2.updateQueue = null, on(l2)) {
                    var u2 = true;
                    dn(t2);
                  } else
                    u2 = false;
                  t2.memoizedState = a2.state !== null && a2.state !== void 0 ? a2.state : null, St(t2);
                  var i2 = l2.getDerivedStateFromProps;
                  typeof i2 === "function" && Ct(t2, l2, i2, e3), a2.updater = Lt, t2.stateNode = a2, a2._reactInternals = t2, Ut(t2, l2, e3, r2), t2 = ll(null, t2, l2, true, u2, r2);
                } else
                  t2.tag = 0, Jr(null, t2, a2, r2), t2 = t2.child;
                return t2;
              case 16:
                a2 = t2.elementType;
                e: {
                  switch (e3 !== null && (e3.alternate = null, t2.alternate = null, t2.flags |= 2), e3 = t2.pendingProps, u2 = a2._init, a2 = u2(a2._payload), t2.type = a2, u2 = t2.tag = Tu(a2), e3 = st(a2, e3), u2) {
                    case 0:
                      t2 = tl(null, t2, a2, e3, r2);
                      break e;
                    case 1:
                      t2 = rl(null, t2, a2, e3, r2);
                      break e;
                    case 11:
                      t2 = Kr(null, t2, a2, e3, r2);
                      break e;
                    case 14:
                      t2 = Xr(null, t2, a2, st(a2.type, e3), l2, r2);
                      break e;
                  }
                  throw Error(o(306, a2, ""));
                }
                return t2;
              case 0:
                return l2 = t2.type, a2 = t2.pendingProps, a2 = t2.elementType === l2 ? a2 : st(l2, a2), tl(e3, t2, l2, a2, r2);
              case 1:
                return l2 = t2.type, a2 = t2.pendingProps, a2 = t2.elementType === l2 ? a2 : st(l2, a2), rl(e3, t2, l2, a2, r2);
              case 3:
                if (al(t2), l2 = t2.updateQueue, e3 === null || l2 === null)
                  throw Error(o(282));
                if (l2 = t2.pendingProps, a2 = t2.memoizedState, a2 = a2 !== null ? a2.element : null, wt(e3, t2), zt(t2, l2, null, r2), l2 = t2.memoizedState.element, l2 === a2)
                  ur(), t2 = bl(e3, t2, r2);
                else {
                  if (a2 = t2.stateNode, (u2 = a2.hydrate) && (ee ? (Zt = He(t2.stateNode.containerInfo), Xt = t2, u2 = er = true) : u2 = false), u2) {
                    if (ee && (e3 = a2.mutableSourceEagerHydrationData, e3 != null))
                      for (a2 = 0; a2 < e3.length; a2 += 2)
                        u2 = e3[a2], i2 = e3[a2 + 1], K ? u2._workInProgressVersionPrimary = i2 : u2._workInProgressVersionSecondary = i2, ir.push(u2);
                    for (r2 = Bt(t2, null, l2, r2), t2.child = r2; r2; )
                      r2.flags = -3 & r2.flags | 1024, r2 = r2.sibling;
                  } else
                    Jr(e3, t2, l2, r2), ur();
                  t2 = t2.child;
                }
                return t2;
              case 5:
                return Yt(t2), e3 === null && rr(t2), l2 = t2.type, a2 = t2.pendingProps, u2 = e3 !== null ? e3.memoizedProps : null, i2 = a2.children, V(l2, a2) ? i2 = null : u2 !== null && V(l2, u2) && (t2.flags |= 16), nl(e3, t2), Jr(e3, t2, i2, r2), t2.child;
              case 6:
                return e3 === null && rr(t2), null;
              case 13:
                return fl(e3, t2, r2);
              case 4:
                return Vt(t2, t2.stateNode.containerInfo), l2 = t2.pendingProps, e3 === null ? t2.child = Ft(t2, null, l2, r2) : Jr(e3, t2, l2, r2), t2.child;
              case 11:
                return l2 = t2.type, a2 = t2.pendingProps, a2 = t2.elementType === l2 ? a2 : st(l2, a2), Kr(e3, t2, l2, a2, r2);
              case 7:
                return Jr(e3, t2, t2.pendingProps, r2), t2.child;
              case 8:
                return Jr(e3, t2, t2.pendingProps.children, r2), t2.child;
              case 12:
                return Jr(e3, t2, t2.pendingProps.children, r2), t2.child;
              case 10:
                e: {
                  if (l2 = t2.type._context, a2 = t2.pendingProps, i2 = t2.memoizedProps, u2 = a2.value, mt(t2, u2), i2 !== null) {
                    var s2 = i2.value;
                    if (u2 = at(s2, u2) ? 0 : 0 | (typeof l2._calculateChangedBits === "function" ? l2._calculateChangedBits(s2, u2) : 1073741823), u2 === 0) {
                      if (i2.children === a2.children && !ln.current) {
                        t2 = bl(e3, t2, r2);
                        break e;
                      }
                    } else
                      for (s2 = t2.child, s2 !== null && (s2.return = t2); s2 !== null; ) {
                        var c2 = s2.dependencies;
                        if (c2 !== null) {
                          i2 = s2.child;
                          for (var f2 = c2.firstContext; f2 !== null; ) {
                            if (f2.context === l2 && (f2.observedBits & u2) !== 0) {
                              s2.tag === 1 && (f2 = Et(-1, r2 & -r2), f2.tag = 2, xt(s2, f2)), s2.lanes |= r2, f2 = s2.alternate, f2 !== null && (f2.lanes |= r2), vt(s2.return, r2), c2.lanes |= r2;
                              break;
                            }
                            f2 = f2.next;
                          }
                        } else
                          i2 = s2.tag === 10 && s2.type === t2.type ? null : s2.child;
                        if (i2 !== null)
                          i2.return = s2;
                        else
                          for (i2 = s2; i2 !== null; ) {
                            if (i2 === t2) {
                              i2 = null;
                              break;
                            }
                            if (s2 = i2.sibling, s2 !== null) {
                              s2.return = i2.return, i2 = s2;
                              break;
                            }
                            i2 = i2.return;
                          }
                        s2 = i2;
                      }
                  }
                  Jr(e3, t2, a2.children, r2), t2 = t2.child;
                }
                return t2;
              case 9:
                return a2 = t2.type, u2 = t2.pendingProps, l2 = u2.children, bt(t2, r2), a2 = yt(a2, u2.unstable_observedBits), l2 = l2(a2), t2.flags |= 1, Jr(e3, t2, l2, r2), t2.child;
              case 14:
                return a2 = t2.type, u2 = st(a2, t2.pendingProps), u2 = st(a2.type, u2), Xr(e3, t2, a2, u2, l2, r2);
              case 15:
                return Zr(e3, t2, t2.type, t2.pendingProps, l2, r2);
              case 17:
                return l2 = t2.type, a2 = t2.pendingProps, a2 = t2.elementType === l2 ? a2 : st(l2, a2), e3 !== null && (e3.alternate = null, t2.alternate = null, t2.flags |= 2), t2.tag = 1, on(l2) ? (e3 = true, dn(t2)) : e3 = false, bt(t2, r2), Tt(t2, l2, a2), Ut(t2, l2, a2, r2), ll(null, t2, l2, true, e3, r2);
              case 19:
                return vl(e3, t2, r2);
              case 23:
                return el(e3, t2, r2);
              case 24:
                return el(e3, t2, r2);
            }
            throw Error(o(156, t2.tag));
          };
          var wu = { current: false }, Eu = i.unstable_flushAllWithoutAsserting, xu = typeof Eu === "function";
          function _u() {
            if (Eu !== void 0)
              return Eu();
            for (var e3 = false; hu(); )
              e3 = true;
            return e3;
          }
          function zu(e3) {
            try {
              _u(), aa(function() {
                _u() ? zu(e3) : e3();
              });
            } catch (n3) {
              e3(n3);
            }
          }
          var Pu = 0, Nu = false;
          function Cu(e3, n3, t2, r2) {
            this.tag = e3, this.key = t2, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n3, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r2, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
          }
          function Lu(e3, n3, t2, r2) {
            return new Cu(e3, n3, t2, r2);
          }
          function Iu(e3) {
            return e3 = e3.prototype, !(!e3 || !e3.isReactComponent);
          }
          function Tu(e3) {
            if (typeof e3 === "function")
              return Iu(e3) ? 1 : 0;
            if (e3 !== void 0 && e3 !== null) {
              if (e3 = e3.$$typeof, e3 === v)
                return 11;
              if (e3 === k)
                return 14;
            }
            return 2;
          }
          function Ru(e3, n3) {
            var t2 = e3.alternate;
            return t2 === null ? (t2 = Lu(e3.tag, n3, e3.key, e3.mode), t2.elementType = e3.elementType, t2.type = e3.type, t2.stateNode = e3.stateNode, t2.alternate = e3, e3.alternate = t2) : (t2.pendingProps = n3, t2.type = e3.type, t2.flags = 0, t2.nextEffect = null, t2.firstEffect = null, t2.lastEffect = null), t2.childLanes = e3.childLanes, t2.lanes = e3.lanes, t2.child = e3.child, t2.memoizedProps = e3.memoizedProps, t2.memoizedState = e3.memoizedState, t2.updateQueue = e3.updateQueue, n3 = e3.dependencies, t2.dependencies = n3 === null ? null : { lanes: n3.lanes, firstContext: n3.firstContext }, t2.sibling = e3.sibling, t2.index = e3.index, t2.ref = e3.ref, t2;
          }
          function Uu(e3, t2, r2, l2, a2, u2) {
            var i2 = 2;
            if (l2 = e3, typeof e3 === "function")
              Iu(e3) && (i2 = 1);
            else if (typeof e3 === "string")
              i2 = 5;
            else
              e:
                switch (e3) {
                  case d:
                    return Mu(r2.children, a2, u2, t2);
                  case E:
                    i2 = 8, a2 |= 16;
                    break;
                  case p:
                    i2 = 8, a2 |= 1;
                    break;
                  case h:
                    return e3 = Lu(12, r2, t2, 8 | a2), e3.elementType = h, e3.type = h, e3.lanes = u2, e3;
                  case b:
                    return e3 = Lu(13, r2, t2, a2), e3.type = b, e3.elementType = b, e3.lanes = u2, e3;
                  case y:
                    return e3 = Lu(19, r2, t2, a2), e3.elementType = y, e3.lanes = u2, e3;
                  case x:
                    return Du(r2, a2, u2, t2);
                  case _:
                    return e3 = Lu(24, r2, t2, a2), e3.elementType = _, e3.lanes = u2, e3;
                  default:
                    if (n2(e3) === "object" && e3 !== null)
                      switch (e3.$$typeof) {
                        case m:
                          i2 = 10;
                          break e;
                        case g:
                          i2 = 9;
                          break e;
                        case v:
                          i2 = 11;
                          break e;
                        case k:
                          i2 = 14;
                          break e;
                        case S:
                          i2 = 16, l2 = null;
                          break e;
                        case w:
                          i2 = 22;
                          break e;
                      }
                    throw Error(o(130, e3 == null ? e3 : n2(e3), ""));
                }
            return t2 = Lu(i2, r2, t2, a2), t2.elementType = e3, t2.type = l2, t2.lanes = u2, t2;
          }
          function Mu(e3, n3, t2, r2) {
            return e3 = Lu(7, e3, r2, n3), e3.lanes = t2, e3;
          }
          function Du(e3, n3, t2, r2) {
            return e3 = Lu(23, e3, r2, n3), e3.elementType = x, e3.lanes = t2, e3;
          }
          function Ou(e3, n3, t2) {
            return e3 = Lu(6, e3, null, n3), e3.lanes = t2, e3;
          }
          function ju(e3, n3, t2) {
            return n3 = Lu(4, e3.children !== null ? e3.children : [], e3.key, n3), n3.lanes = t2, n3.stateNode = { containerInfo: e3.containerInfo, pendingChildren: null, implementation: e3.implementation }, n3;
          }
          function Fu(e3, n3, t2) {
            this.tag = n3, this.containerInfo = e3, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = J, this.pendingContext = this.context = null, this.hydrate = t2, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = zn(0), this.expirationTimes = zn(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zn(0), ee && (this.mutableSourceEagerHydrationData = null);
          }
          function Bu(e3) {
            var n3 = e3._reactInternals;
            if (n3 === void 0) {
              if (typeof e3.render === "function")
                throw Error(o(188));
              throw Error(o(268, Object.keys(e3)));
            }
            return e3 = R(n3), e3 === null ? null : e3.stateNode;
          }
          function Qu(e3, n3) {
            if (e3 = e3.memoizedState, e3 !== null && e3.dehydrated !== null) {
              var t2 = e3.retryLane;
              e3.retryLane = t2 !== 0 && t2 < n3 ? t2 : n3;
            }
          }
          function Hu(e3, n3) {
            Qu(e3, n3), (e3 = e3.alternate) && Qu(e3, n3);
          }
          function Wu(e3) {
            return e3 = R(e3), e3 === null ? null : e3.stateNode;
          }
          function Au() {
            return null;
          }
          return l.IsThisRendererActing = wu, l.act = function(e3) {
            function t2() {
              Pu--, sa.current = r2, wu.current = l2;
            }
            Nu === false && (Nu = true, console.error("act(...) is not supported in production builds of React, and might not behave as expected.")), Pu++;
            var r2 = sa.current, l2 = wu.current;
            sa.current = true, wu.current = true;
            try {
              var a2 = Za(e3);
            } catch (e4) {
              throw t2(), e4;
            }
            if (a2 !== null && n2(a2) === "object" && typeof a2.then === "function")
              return { then: function(e4, n3) {
                a2.then(function() {
                  1 < Pu || xu === true && r2 === true ? (t2(), e4()) : zu(function(r3) {
                    t2(), r3 ? n3(r3) : e4();
                  });
                }, function(e5) {
                  t2(), n3(e5);
                });
              } };
            try {
              Pu !== 1 || xu !== false && r2 !== false || _u(), t2();
            } catch (e4) {
              throw t2(), e4;
            }
            return { then: function(e4) {
              e4();
            } };
          }, l.attemptContinuousHydration = function(e3) {
            if (e3.tag === 13) {
              var n3 = Aa();
              Va(e3, 67108864, n3), Hu(e3, 67108864);
            }
          }, l.attemptHydrationAtCurrentPriority = function(e3) {
            if (e3.tag === 13) {
              var n3 = Aa(), t2 = $a(e3);
              Va(e3, t2, n3), Hu(e3, t2);
            }
          }, l.attemptSynchronousHydration = function(e3) {
            switch (e3.tag) {
              case 3:
                var n3 = e3.stateNode;
                if (n3.hydrate) {
                  var t2 = yn(n3.pendingLanes);
                  n3.expiredLanes |= t2 & n3.pendingLanes, Ya(n3, Jn()), (48 & ca) === 0 && (_a(), nt());
                }
                break;
              case 13:
                var r2 = Aa();
                eu(function() {
                  return Va(e3, 1, r2);
                }), Hu(e3, 4);
            }
          }, l.attemptUserBlockingHydration = function(e3) {
            if (e3.tag === 13) {
              var n3 = Aa();
              Va(e3, 4, n3), Hu(e3, 4);
            }
          }, l.batchedEventUpdates = function(e3, n3) {
            var t2 = ca;
            ca |= 2;
            try {
              return e3(n3);
            } finally {
              ca = t2, ca === 0 && (_a(), nt());
            }
          }, l.batchedUpdates = Za, l.createComponentSelector = function(e3) {
            return { $$typeof: ql, value: e3 };
          }, l.createContainer = function(e3, n3, t2) {
            return e3 = new Fu(e3, n3, t2), n3 = Lu(3, null, null, n3 === 2 ? 7 : n3 === 1 ? 3 : 0), e3.current = n3, n3.stateNode = e3, St(n3), e3;
          }, l.createHasPsuedoClassSelector = function(e3) {
            return { $$typeof: Yl, value: e3 };
          }, l.createPortal = function(e3, n3, t2) {
            var r2 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return { $$typeof: f, key: r2 == null ? null : "" + r2, children: e3, containerInfo: n3, implementation: t2 };
          }, l.createRoleSelector = function(e3) {
            return { $$typeof: Gl, value: e3 };
          }, l.createTestNameSelector = function(e3) {
            return { $$typeof: Jl, value: e3 };
          }, l.createTextSelector = function(e3) {
            return { $$typeof: Kl, value: e3 };
          }, l.deferredUpdates = function(e3) {
            return Zn(97, e3);
          }, l.discreteUpdates = function(e3, n3, t2, r2, l2) {
            var a2 = ca;
            ca |= 4;
            try {
              return Zn(98, e3.bind(null, n3, t2, r2, l2));
            } finally {
              ca = a2, ca === 0 && (_a(), nt());
            }
          }, l.findAllNodes = ra, l.findBoundingRects = function(e3, n3) {
            if (!ie)
              throw Error(o(363));
            n3 = ra(e3, n3), e3 = [];
            for (var t2 = 0; t2 < n3.length; t2++)
              e3.push(se(n3[t2]));
            for (n3 = e3.length - 1; 0 < n3; n3--) {
              t2 = e3[n3];
              for (var r2 = t2.x, l2 = r2 + t2.width, a2 = t2.y, u2 = a2 + t2.height, i2 = n3 - 1; 0 <= i2; i2--)
                if (n3 !== i2) {
                  var s2 = e3[i2], c2 = s2.x, f2 = c2 + s2.width, d2 = s2.y, p2 = d2 + s2.height;
                  if (r2 >= c2 && a2 >= d2 && l2 <= f2 && u2 <= p2) {
                    e3.splice(n3, 1);
                    break;
                  }
                  if (!(r2 !== c2 || t2.width !== s2.width || p2 < a2 || d2 > u2)) {
                    d2 > a2 && (s2.height += d2 - a2, s2.y = a2), p2 < u2 && (s2.height = u2 - d2), e3.splice(n3, 1);
                    break;
                  }
                  if (!(a2 !== d2 || t2.height !== s2.height || f2 < r2 || c2 > l2)) {
                    c2 > r2 && (s2.width += c2 - r2, s2.x = r2), f2 < l2 && (s2.width = l2 - c2), e3.splice(n3, 1);
                    break;
                  }
                }
            }
            return e3;
          }, l.findHostInstance = Bu, l.findHostInstanceWithNoPortals = function(e3) {
            return e3 = U(e3), e3 === null ? null : e3.tag === 20 ? e3.stateNode.instance : e3.stateNode;
          }, l.findHostInstanceWithWarning = function(e3) {
            return Bu(e3);
          }, l.flushControlled = function(e3) {
            var n3 = ca;
            ca |= 1;
            try {
              Zn(99, e3);
            } finally {
              ca = n3, ca === 0 && (_a(), nt());
            }
          }, l.flushDiscreteUpdates = function() {
            (49 & ca) === 0 && (Xa(), hu());
          }, l.flushPassiveEffects = hu, l.flushSync = eu, l.focusWithin = function(e3, n3) {
            if (!ie)
              throw Error(o(363));
            for (e3 = Zl(e3), n3 = ta(e3, n3), n3 = Array.from(n3), e3 = 0; e3 < n3.length; ) {
              var t2 = n3[e3++];
              if (!fe(t2)) {
                if (t2.tag === 5 && pe(t2.stateNode))
                  return true;
                for (t2 = t2.child; t2 !== null; )
                  n3.push(t2), t2 = t2.sibling;
              }
            }
            return false;
          }, l.getCurrentUpdateLanePriority = function() {
            return vn;
          }, l.getFindAllNodesFailureDescription = function(e3, n3) {
            if (!ie)
              throw Error(o(363));
            var t2 = 0, r2 = [];
            e3 = [Zl(e3), 0];
            for (var l2 = 0; l2 < e3.length; ) {
              var a2 = e3[l2++], u2 = e3[l2++], i2 = n3[u2];
              if ((a2.tag !== 5 || !fe(a2)) && (ea(a2, i2) && (r2.push(na(i2)), u2++, u2 > t2 && (t2 = u2)), u2 < n3.length))
                for (a2 = a2.child; a2 !== null; )
                  e3.push(a2, u2), a2 = a2.sibling;
            }
            if (t2 < n3.length) {
              for (e3 = []; t2 < n3.length; t2++)
                e3.push(na(n3[t2]));
              return "findAllNodes was able to match part of the selector:\n  " + r2.join(" > ") + "\n\nNo matching component was found for:\n  " + e3.join(" > ");
            }
            return null;
          }, l.getPublicRootInstance = function(e3) {
            if (e3 = e3.current, !e3.child)
              return null;
            switch (e3.child.tag) {
              case 5:
                return O(e3.child.stateNode);
              default:
                return e3.child.stateNode;
            }
          }, l.injectIntoDevTools = function(e3) {
            if (e3 = { bundleType: e3.bundleType, version: e3.version, rendererPackageName: e3.rendererPackageName, rendererConfig: e3.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: s.ReactCurrentDispatcher, findHostInstanceByFiber: Wu, findFiberByHostInstance: e3.findFiberByHostInstance || Au, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined")
              e3 = false;
            else {
              var n3 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
              if (!n3.isDisabled && n3.supportsFiber)
                try {
                  hn = n3.inject(e3), mn = n3;
                } catch (e4) {
                }
              e3 = true;
            }
            return e3;
          }, l.observeVisibleRects = function(e3, n3, t2, r2) {
            if (!ie)
              throw Error(o(363));
            e3 = ra(e3, n3);
            var l2 = he(e3, t2, r2).disconnect;
            return { disconnect: function() {
              l2();
            } };
          }, l.registerMutableSourceForHydration = function(e3, n3) {
            var t2 = n3._getVersion;
            t2 = t2(n3._source), e3.mutableSourceEagerHydrationData == null ? e3.mutableSourceEagerHydrationData = [n3, t2] : e3.mutableSourceEagerHydrationData.push(n3, t2);
          }, l.runWithPriority = function(e3, n3) {
            var t2 = vn;
            try {
              return vn = e3, n3();
            } finally {
              vn = t2;
            }
          }, l.shouldSuspend = function() {
            return false;
          }, l.unbatchedUpdates = function(e3, n3) {
            var t2 = ca;
            ca &= -2, ca |= 8;
            try {
              return e3(n3);
            } finally {
              ca = t2, ca === 0 && (_a(), nt());
            }
          }, l.updateContainer = function(e3, n3, t2, r2) {
            var l2 = n3.current, a2 = Aa(), u2 = $a(l2);
            e:
              if (t2) {
                t2 = t2._reactInternals;
                n: {
                  if (L(t2) !== t2 || t2.tag !== 1)
                    throw Error(o(170));
                  var i2 = t2;
                  do {
                    switch (i2.tag) {
                      case 3:
                        i2 = i2.stateNode.context;
                        break n;
                      case 1:
                        if (on(i2.type)) {
                          i2 = i2.stateNode.__reactInternalMemoizedMergedChildContext;
                          break n;
                        }
                    }
                    i2 = i2.return;
                  } while (i2 !== null);
                  throw Error(o(171));
                }
                if (t2.tag === 1) {
                  var s2 = t2.type;
                  if (on(s2)) {
                    t2 = fn(t2, s2, i2);
                    break e;
                  }
                }
                t2 = i2;
              } else
                t2 = tn;
            return n3.context === null ? n3.context = t2 : n3.pendingContext = t2, n3 = Et(a2, u2), n3.payload = { element: e3 }, r2 = r2 === void 0 ? null : r2, r2 !== null && (n3.callback = r2), xt(l2, n3), Va(l2, u2, a2), u2;
          }, l;
        };
      }).call(this, t(34)(e));
    }, 59: function(e, n, t) {
      "use strict";
      (function(e2) {
        var r, l, a, u, i = t(10);
        if ((typeof performance === "undefined" ? "undefined" : i(performance)) === "object" && typeof performance.now === "function") {
          var o = performance;
          n.unstable_now = function() {
            return o.now();
          };
        } else {
          var s = Date, c = s.now();
          n.unstable_now = function() {
            return s.now() - c;
          };
        }
        if (typeof e2 === "undefined" || typeof MessageChannel !== "function") {
          var f = null, d = null, p = function e3() {
            if (f !== null)
              try {
                var t2 = n.unstable_now();
                f(true, t2), f = null;
              } catch (n2) {
                throw setTimeout(e3, 0), n2;
              }
          };
          r = function(e3) {
            f !== null ? setTimeout(r, 0, e3) : (f = e3, setTimeout(p, 0));
          }, l = function(e3, n2) {
            d = setTimeout(e3, n2);
          }, a = function() {
            clearTimeout(d);
          }, n.unstable_shouldYield = function() {
            return false;
          }, u = n.unstable_forceFrameRate = function() {
          };
        } else {
          var h = e2.setTimeout, m = e2.clearTimeout;
          if (typeof console !== "undefined") {
            var g = e2.cancelAnimationFrame;
            typeof e2.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof g !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
          }
          var v = false, b = null, y = -1, k = 5, S = 0;
          n.unstable_shouldYield = function() {
            return n.unstable_now() >= S;
          }, u = function() {
          }, n.unstable_forceFrameRate = function(e3) {
            0 > e3 || 125 < e3 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : k = 0 < e3 ? Math.floor(1e3 / e3) : 5;
          };
          var w = new MessageChannel(), E = w.port2;
          w.port1.onmessage = function() {
            if (b !== null) {
              var e3 = n.unstable_now();
              S = e3 + k;
              try {
                b(true, e3) ? E.postMessage(null) : (v = false, b = null);
              } catch (e4) {
                throw E.postMessage(null), e4;
              }
            } else
              v = false;
          }, r = function(e3) {
            b = e3, v || (v = true, E.postMessage(null));
          }, l = function(e3, t2) {
            y = h(function() {
              e3(n.unstable_now());
            }, t2);
          }, a = function() {
            m(y), y = -1;
          };
        }
        function x(e3, n2) {
          var t2 = e3.length;
          e3.push(n2);
          e:
            for (; ; ) {
              var r2 = t2 - 1 >>> 1, l2 = e3[r2];
              if (!(l2 !== void 0 && 0 < P(l2, n2)))
                break e;
              e3[r2] = n2, e3[t2] = l2, t2 = r2;
            }
        }
        function _(e3) {
          return e3 = e3[0], e3 === void 0 ? null : e3;
        }
        function z(e3) {
          var n2 = e3[0];
          if (n2 !== void 0) {
            var t2 = e3.pop();
            if (t2 !== n2) {
              e3[0] = t2;
              e:
                for (var r2 = 0, l2 = e3.length; r2 < l2; ) {
                  var a2 = 2 * (r2 + 1) - 1, u2 = e3[a2], i2 = a2 + 1, o2 = e3[i2];
                  if (u2 !== void 0 && 0 > P(u2, t2))
                    o2 !== void 0 && 0 > P(o2, u2) ? (e3[r2] = o2, e3[i2] = t2, r2 = i2) : (e3[r2] = u2, e3[a2] = t2, r2 = a2);
                  else {
                    if (!(o2 !== void 0 && 0 > P(o2, t2)))
                      break e;
                    e3[r2] = o2, e3[i2] = t2, r2 = i2;
                  }
                }
            }
            return n2;
          }
          return null;
        }
        function P(e3, n2) {
          var t2 = e3.sortIndex - n2.sortIndex;
          return t2 !== 0 ? t2 : e3.id - n2.id;
        }
        var N = [], C = [], L = 1, I = null, T = 3, R = false, U = false, M = false;
        function D(e3) {
          for (var n2 = _(C); n2 !== null; ) {
            if (n2.callback === null)
              z(C);
            else {
              if (!(n2.startTime <= e3))
                break;
              z(C), n2.sortIndex = n2.expirationTime, x(N, n2);
            }
            n2 = _(C);
          }
        }
        function O(e3) {
          if (M = false, D(e3), !U)
            if (_(N) !== null)
              U = true, r(j);
            else {
              var n2 = _(C);
              n2 !== null && l(O, n2.startTime - e3);
            }
        }
        function j(e3, t2) {
          U = false, M && (M = false, a()), R = true;
          var r2 = T;
          try {
            for (D(t2), I = _(N); I !== null && (!(I.expirationTime > t2) || e3 && !n.unstable_shouldYield()); ) {
              var u2 = I.callback;
              if (typeof u2 === "function") {
                I.callback = null, T = I.priorityLevel;
                var i2 = u2(I.expirationTime <= t2);
                t2 = n.unstable_now(), typeof i2 === "function" ? I.callback = i2 : I === _(N) && z(N), D(t2);
              } else
                z(N);
              I = _(N);
            }
            if (I !== null)
              var o2 = true;
            else {
              var s2 = _(C);
              s2 !== null && l(O, s2.startTime - t2), o2 = false;
            }
            return o2;
          } finally {
            I = null, T = r2, R = false;
          }
        }
        var F = u;
        n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(e3) {
          e3.callback = null;
        }, n.unstable_continueExecution = function() {
          U || R || (U = true, r(j));
        }, n.unstable_getCurrentPriorityLevel = function() {
          return T;
        }, n.unstable_getFirstCallbackNode = function() {
          return _(N);
        }, n.unstable_next = function(e3) {
          switch (T) {
            case 1:
            case 2:
            case 3:
              var n2 = 3;
              break;
            default:
              n2 = T;
          }
          var t2 = T;
          T = n2;
          try {
            return e3();
          } finally {
            T = t2;
          }
        }, n.unstable_pauseExecution = function() {
        }, n.unstable_requestPaint = F, n.unstable_runWithPriority = function(e3, n2) {
          switch (e3) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e3 = 3;
          }
          var t2 = T;
          T = e3;
          try {
            return n2();
          } finally {
            T = t2;
          }
        }, n.unstable_scheduleCallback = function(e3, t2, u2) {
          var o2 = n.unstable_now();
          switch (i(u2) === "object" && u2 !== null ? (u2 = u2.delay, u2 = typeof u2 === "number" && 0 < u2 ? o2 + u2 : o2) : u2 = o2, e3) {
            case 1:
              var s2 = -1;
              break;
            case 2:
              s2 = 250;
              break;
            case 5:
              s2 = 1073741823;
              break;
            case 4:
              s2 = 1e4;
              break;
            default:
              s2 = 5e3;
          }
          return s2 = u2 + s2, e3 = { id: L++, callback: t2, priorityLevel: e3, startTime: u2, expirationTime: s2, sortIndex: -1 }, u2 > o2 ? (e3.sortIndex = u2, x(C, e3), _(N) === null && e3 === _(C) && (M ? a() : M = true, l(O, u2 - o2))) : (e3.sortIndex = s2, x(N, e3), U || R || (U = true, r(j))), e3;
        }, n.unstable_wrapCallback = function(e3) {
          var n2 = T;
          return function() {
            var t2 = T;
            T = n2;
            try {
              return e3.apply(this, arguments);
            } finally {
              T = t2;
            }
          };
        };
      }).call(this, t(2)["window"]);
    }, 63: function(e, n, t) {
      "use strict";
      t.r(n);
      t(46);
      var r = t(2), l = t(38), a = t(3), u = t(4), i = t(7), o = t(8), s = t(14), c = (t(57), function(e2) {
        Object(i["a"])(t2, e2);
        var n2 = Object(o["a"])(t2);
        function t2() {
          return Object(a["a"])(this, t2), n2.apply(this, arguments);
        }
        return Object(u["a"])(t2, [{ key: "componentDidMount", value: function() {
        } }, { key: "componentDidShow", value: function() {
        } }, { key: "componentDidHide", value: function() {
        } }, { key: "componentDidCatchError", value: function() {
        } }, { key: "render", value: function() {
          return this.props.children;
        } }]), t2;
      }(s["Component"])), f = c, d = t(40), p = { pages: ["pages/index/index"], window: { backgroundTextStyle: "light", navigationBarBackgroundColor: "#fff", navigationBarTitleText: "WeChat", navigationBarTextStyle: "black" } };
      r["window"].__taroAppConfig = p;
      App(Object(r["createReactApp"])(f, s, d["a"], p));
      Object(l["initPxTransform"])({ designWidth: 750, deviceRatio: { 640: 1.17, 750: 1, 828: 0.905 } });
    } }, [[63, 0, 1, 2]]]);
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
        <div v-for="item in root.cn" >
            
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" catchtouchmove="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchmove="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <text :selectable="xs.b(i.selectable,false)" space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </text>
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
        <text :selectable="xs.b(i.selectable,false)" space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </text>
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
        <scroll-view-main :scroll-x="xs.b(i.scrollX,false)" :scroll-y="xs.b(i.scrollY,false)" :upper-threshold="xs.b(i.upperThreshold,50)" :lower-threshold="xs.b(i.lowerThreshold,50)" scroll-top="i.scrollTop" scroll-left="i.scrollLeft" scroll-into-view-main="i.scrollIntoView" :scroll-with-animation="xs.b(i.scrollWithAnimation,false)" :enable-back-to-top="xs.b(i.enableBackToTop,false)" @scrolltoupper="eh" @scrolltolower="eh" @scroll="eh" @touchstart="eh" @touchmove="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" :enable-flex="xs.b(i.enableFlex,false)" :scroll-anchoring="xs.b(i.scrollAnchoring,false)" :refresher-enabled="xs.b(i.refresherEnabled,false)" :refresher-threshold="xs.b(i.refresherThreshold,45)" :refresher-default-style="xs.b(i.refresherDefaultStyle,'black')" :refresher-background="xs.b(i.refresherBackground,'#FFF')" :refresher-triggered="xs.b(i.refresherTriggered,false)" :enhanced="xs.b(i.enhanced,false)" :bounces="xs.b(i.bounces,true)" :show-scrollbar="xs.b(i.showScrollbar,true)" :paging-enabled="xs.b(i.pagingEnabled,false)" :fast-deceleration="xs.b(i.fastDeceleration,false)" @dragstart="eh" @dragging="eh" @dragend="eh" @refresherpulling="eh" @refresherrefresh="eh" @refresherrestore="eh" @refresherabort="eh" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </scroll-view-main>
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
        <image src="i.src" :mode="xs.b(i.mode,'scaleToFill')" :lazy-load="xs.b(i.lazyLoad,false)" :webp="xs.b(i.webp,false)" :show-menu-by-longpress="xs.b(i.showMenuByLongpress,false)" style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </image>
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
        <image src="i.src" :mode="xs.b(i.mode,'scaleToFill')" :lazy-load="xs.b(i.lazyLoad,false)" @error="eh" @load="eh" @touchstart="eh" @touchmove="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" :webp="xs.b(i.webp,false)" :show-menu-by-longpress="xs.b(i.showMenuByLongpress,false)" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </image>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" catchtouchmove="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchmove="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <text :selectable="xs.b(i.selectable,false)" space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </text>
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
        <text :selectable="xs.b(i.selectable,false)" space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </text>
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
        <scroll-view-main :scroll-x="xs.b(i.scrollX,false)" :scroll-y="xs.b(i.scrollY,false)" :upper-threshold="xs.b(i.upperThreshold,50)" :lower-threshold="xs.b(i.lowerThreshold,50)" scroll-top="i.scrollTop" scroll-left="i.scrollLeft" scroll-into-view-main="i.scrollIntoView" :scroll-with-animation="xs.b(i.scrollWithAnimation,false)" :enable-back-to-top="xs.b(i.enableBackToTop,false)" @scrolltoupper="eh" @scrolltolower="eh" @scroll="eh" @touchstart="eh" @touchmove="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" :enable-flex="xs.b(i.enableFlex,false)" :scroll-anchoring="xs.b(i.scrollAnchoring,false)" :refresher-enabled="xs.b(i.refresherEnabled,false)" :refresher-threshold="xs.b(i.refresherThreshold,45)" :refresher-default-style="xs.b(i.refresherDefaultStyle,'black')" :refresher-background="xs.b(i.refresherBackground,'#FFF')" :refresher-triggered="xs.b(i.refresherTriggered,false)" :enhanced="xs.b(i.enhanced,false)" :bounces="xs.b(i.bounces,true)" :show-scrollbar="xs.b(i.showScrollbar,true)" :paging-enabled="xs.b(i.pagingEnabled,false)" :fast-deceleration="xs.b(i.fastDeceleration,false)" @dragstart="eh" @dragging="eh" @dragend="eh" @refresherpulling="eh" @refresherrefresh="eh" @refresherrestore="eh" @refresherabort="eh" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </scroll-view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" catchtouchmove="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchmove="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <text :selectable="xs.b(i.selectable,false)" space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </text>
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
        <text :selectable="xs.b(i.selectable,false)" space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </text>
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
        <scroll-view-main :scroll-x="xs.b(i.scrollX,false)" :scroll-y="xs.b(i.scrollY,false)" :upper-threshold="xs.b(i.upperThreshold,50)" :lower-threshold="xs.b(i.lowerThreshold,50)" scroll-top="i.scrollTop" scroll-left="i.scrollLeft" scroll-into-view-main="i.scrollIntoView" :scroll-with-animation="xs.b(i.scrollWithAnimation,false)" :enable-back-to-top="xs.b(i.enableBackToTop,false)" @scrolltoupper="eh" @scrolltolower="eh" @scroll="eh" @touchstart="eh" @touchmove="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" :enable-flex="xs.b(i.enableFlex,false)" :scroll-anchoring="xs.b(i.scrollAnchoring,false)" :refresher-enabled="xs.b(i.refresherEnabled,false)" :refresher-threshold="xs.b(i.refresherThreshold,45)" :refresher-default-style="xs.b(i.refresherDefaultStyle,'black')" :refresher-background="xs.b(i.refresherBackground,'#FFF')" :refresher-triggered="xs.b(i.refresherTriggered,false)" :enhanced="xs.b(i.enhanced,false)" :bounces="xs.b(i.bounces,true)" :show-scrollbar="xs.b(i.showScrollbar,true)" :paging-enabled="xs.b(i.pagingEnabled,false)" :fast-deceleration="xs.b(i.fastDeceleration,false)" @dragstart="eh" @dragging="eh" @dragend="eh" @refresherpulling="eh" @refresherrefresh="eh" @refresherrestore="eh" @refresherabort="eh" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </scroll-view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" catchtouchmove="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchmove="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <text :selectable="xs.b(i.selectable,false)" space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </text>
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
        <text :selectable="xs.b(i.selectable,false)" space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </text>
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
        <scroll-view-main :scroll-x="xs.b(i.scrollX,false)" :scroll-y="xs.b(i.scrollY,false)" :upper-threshold="xs.b(i.upperThreshold,50)" :lower-threshold="xs.b(i.lowerThreshold,50)" scroll-top="i.scrollTop" scroll-left="i.scrollLeft" scroll-into-view-main="i.scrollIntoView" :scroll-with-animation="xs.b(i.scrollWithAnimation,false)" :enable-back-to-top="xs.b(i.enableBackToTop,false)" @scrolltoupper="eh" @scrolltolower="eh" @scroll="eh" @touchstart="eh" @touchmove="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" :enable-flex="xs.b(i.enableFlex,false)" :scroll-anchoring="xs.b(i.scrollAnchoring,false)" :refresher-enabled="xs.b(i.refresherEnabled,false)" :refresher-threshold="xs.b(i.refresherThreshold,45)" :refresher-default-style="xs.b(i.refresherDefaultStyle,'black')" :refresher-background="xs.b(i.refresherBackground,'#FFF')" :refresher-triggered="xs.b(i.refresherTriggered,false)" :enhanced="xs.b(i.enhanced,false)" :bounces="xs.b(i.bounces,true)" :show-scrollbar="xs.b(i.showScrollbar,true)" :paging-enabled="xs.b(i.pagingEnabled,false)" :fast-deceleration="xs.b(i.fastDeceleration,false)" @dragstart="eh" @dragging="eh" @dragend="eh" @refresherpulling="eh" @refresherrefresh="eh" @refresherrestore="eh" @refresherabort="eh" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </scroll-view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" catchtouchmove="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchmove="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <text :selectable="xs.b(i.selectable,false)" space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </text>
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
        <text :selectable="xs.b(i.selectable,false)" space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </text>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" catchtouchmove="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchmove="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <text :selectable="xs.b(i.selectable,false)" space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </text>
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
        <text :selectable="xs.b(i.selectable,false)" space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </text>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" catchtouchmove="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchmove="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <text :selectable="xs.b(i.selectable,false)" space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </text>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" catchtouchmove="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchmove="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <text :selectable="xs.b(i.selectable,false)" space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </text>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" catchtouchmove="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchmove="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <text :selectable="xs.b(i.selectable,false)" space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </text>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" catchtouchmove="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchmove="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <text :selectable="xs.b(i.selectable,false)" space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </text>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" catchtouchmove="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchmove="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <text :selectable="xs.b(i.selectable,false)" space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </text>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" catchtouchmove="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchmove="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <text :selectable="xs.b(i.selectable,false)" space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </text>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" catchtouchmove="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchmove="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <text :selectable="xs.b(i.selectable,false)" space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </text>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" catchtouchmove="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchmove="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <text :selectable="xs.b(i.selectable,false)" space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </text>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" catchtouchmove="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main style="i.st" class="i.cl" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <view-main :hover-class="xs.b(i.hoverClass,'none')" :hover-stop-propagation="xs.b(i.hoverStopPropagation,false)" :hover-start-time="xs.b(i.hoverStartTime,50)" :hover-stay-time="xs.b(i.hoverStayTime,400)" animation="i.animation" @touchstart="eh" @touchmove="eh" @touchend="eh" @touchcancel="eh" @longpress="eh" @animationstart="eh" @animationiteration="eh" @animationend="eh" @transitionend="eh" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </view-main>
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
        <text :selectable="xs.b(i.selectable,false)" space="i.space" :decode="xs.b(i.decode,false)" :user-select="xs.b(i.userSelect,false)" style="i.st" class="i.cl" @tap="eh" id="i.uid" >
            
        <div v-for="item in i.cn" >
            
        <component :is="xs.e(cid+1)" :data="{i:item,l:l}" >
            
        </component>
    
        </div>
    
        </text>
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
        <div v-if="i.nn" >
            
        <component is="tmpl_0_#text" :data="{i:i}" >
            
        </component>
    
        </div>
    
        <div >
            
        <comp i="i" l="l" >
            
        </comp>
    
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
    page.template = `
        <component is="taro_tmpl" :data="{root:root}" >
            
        </component>
    `;
  }
});

// taro/dist/pages/index/index.js
var require_index2 = __commonJS({
  "taro/dist/pages/index/index.js"() {
    require_index();
    window["__wxRoute"] = "pages/index/index";
    var page = getPage("pages/index/index");
    page.json = `{"navigationBarTitleText":"\u9996\u9875","usingComponents":{"custom-wrapper":"../../custom-wrapper","comp":"../../comp"}}`;
    (wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[7], { 17: function(n, e, o) {
      "use strict";
      n.exports = o(62);
    }, 42: function(n, e, o) {
      "use strict";
      (function(n2) {
        o.d(e, "a", function() {
          return s;
        });
        var t = o(3), c = o(4), r = o(7), i = o(8), l = o(14), u = o(19), a = (o(61), o(17)), s = function(e2) {
          Object(r["a"])(l2, e2);
          var o2 = Object(i["a"])(l2);
          function l2() {
            return Object(t["a"])(this, l2), o2.apply(this, arguments);
          }
          return Object(c["a"])(l2, [{ key: "componentWillMount", value: function() {
            console.log("componentWillMount", n2);
          } }, { key: "componentDidMount", value: function() {
            console.log("componentDidMount");
          } }, { key: "componentWillUnmount", value: function() {
            console.log("componentWillUnmount");
          } }, { key: "componentDidShow", value: function() {
            console.log("componentDidShow");
          } }, { key: "componentDidHide", value: function() {
            console.log("componentDidHide");
          } }, { key: "componentDidUpdate", value: function(n3, e3) {
            console.log("componentDidUpdate");
          } }, { key: "render", value: function() {
            return console.log("render"), Object(a["jsxs"])(u["c"], { children: [Object(a["jsx"])(u["c"], { children: "\u6D4B\u8BD512312" }), Object(a["jsx"])(u["b"], { children: "Hello world!" }), Object(a["jsx"])(u["a"], {})] });
          } }]), l2;
        }(l["Component"]);
      }).call(this, o(2)["window"]);
    }, 60: function(n, e, o) {
      "use strict";
      o.r(e);
      var t = o(2), c = o(42), r = { navigationBarTitleText: "\u9996\u9875" };
      Page(Object(t["createPageConfig"])(c["a"], "pages/index/index", { root: { cn: [] } }, r || {}));
    }, 61: function(n, e, o) {
    }, 62: function(n, e, o) {
      "use strict";
      o(25);
      var t = o(14), c = 60103;
      if (e.Fragment = 60107, typeof Symbol === "function" && Symbol.for) {
        var r = Symbol.for;
        c = r("react.element"), e.Fragment = r("react.fragment");
      }
      var i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = Object.prototype.hasOwnProperty, u = { key: true, ref: true, __self: true, __source: true };
      function a(n2, e2, o2) {
        var t2, r2 = {}, a2 = null, s = null;
        for (t2 in o2 !== void 0 && (a2 = "" + o2), e2.key !== void 0 && (a2 = "" + e2.key), e2.ref !== void 0 && (s = e2.ref), e2)
          l.call(e2, t2) && !u.hasOwnProperty(t2) && (r2[t2] = e2[t2]);
        if (n2 && n2.defaultProps)
          for (t2 in e2 = n2.defaultProps, e2)
            r2[t2] === void 0 && (r2[t2] = e2[t2]);
        return { $$typeof: c, type: n2, key: a2, ref: s, props: r2, _owner: i.current };
      }
      e.jsx = a, e.jsxs = a;
    } }, [[60, 0, 1, 2]]]);
  }
});

// <stdin>
require_app();
require_index2();
/*! For license information please see app.js.LICENSE.txt */
/*! For license information please see index.js.LICENSE.txt */
/*! For license information please see taro.js.LICENSE.txt */
/*! For license information please see vendors.js.LICENSE.txt */
