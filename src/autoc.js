/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).vueCoolSelect = {}));
})(this, function(e) {
  "use strict";
  var t =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {};
  function n(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  var r,
    i,
    o,
    s = function(e) {
      return e && e.Math == Math && e;
    },
    u =
      s("object" == typeof globalThis && globalThis) ||
      s("object" == typeof window && window) ||
      s("object" == typeof self && self) ||
      s("object" == typeof t && t) ||
      Function("return this")(),
    l = function(e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    },
    a = !l(function() {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function() {
            return 7;
          }
        }).a
      );
    }),
    c = {}.propertyIsEnumerable,
    f = Object.getOwnPropertyDescriptor,
    h = {
      f:
        f && !c.call({ 1: 2 }, 1)
          ? function(e) {
              var t = f(this, e);
              return !!t && t.enumerable;
            }
          : c
    },
    d = function(e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      };
    },
    p = {}.toString,
    m = function(e) {
      return p.call(e).slice(8, -1);
    },
    y = "".split,
    v = l(function() {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function(e) {
          return "String" == m(e) ? y.call(e, "") : Object(e);
        }
      : Object,
    g = function(e) {
      if (null == e) throw TypeError("Can't call method on " + e);
      return e;
    },
    b = function(e) {
      return v(g(e));
    },
    S = function(e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    },
    I = function(e, t) {
      if (!S(e)) return e;
      var n, r;
      if (t && "function" == typeof (n = e.toString) && !S((r = n.call(e))))
        return r;
      if ("function" == typeof (n = e.valueOf) && !S((r = n.call(e)))) return r;
      if (!t && "function" == typeof (n = e.toString) && !S((r = n.call(e))))
        return r;
      throw TypeError("Can't convert object to primitive value");
    },
    w = {}.hasOwnProperty,
    _ = function(e, t) {
      return w.call(e, t);
    },
    O = u.document,
    x = S(O) && S(O.createElement),
    T = function(e) {
      return x ? O.createElement(e) : {};
    },
    E =
      !a &&
      !l(function() {
        return (
          7 !=
          Object.defineProperty(T("div"), "a", {
            get: function() {
              return 7;
            }
          }).a
        );
      }),
    C = Object.getOwnPropertyDescriptor,
    M = {
      f: a
        ? C
        : function(e, t) {
            if (((e = b(e)), (t = I(t, !0)), E))
              try {
                return C(e, t);
              } catch (e) {}
            if (_(e, t)) return d(!h.f.call(e, t), e[t]);
          }
    },
    A = function(e) {
      if (!S(e)) throw TypeError(String(e) + " is not an object");
      return e;
    },
    j = Object.defineProperty,
    k = {
      f: a
        ? j
        : function(e, t, n) {
            if ((A(e), (t = I(t, !0)), A(n), E))
              try {
                return j(e, t, n);
              } catch (e) {}
            if ("get" in n || "set" in n)
              throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e;
          }
    },
    L = a
      ? function(e, t, n) {
          return k.f(e, t, d(1, n));
        }
      : function(e, t, n) {
          return (e[t] = n), e;
        },
    D = function(e, t) {
      try {
        L(u, e, t);
      } catch (n) {
        u[e] = t;
      }
      return t;
    },
    P = u["__core-js_shared__"] || D("__core-js_shared__", {}),
    F = n(function(e) {
      (e.exports = function(e, t) {
        return P[e] || (P[e] = void 0 !== t ? t : {});
      })("versions", []).push({
        version: "3.4.6",
        mode: "global",
        copyright: "?? 2019 Denis Pushkarev (zloirock.ru)"
      });
    }),
    N = Function.toString,
    B = F("inspectSource", function(e) {
      return N.call(e);
    }),
    Z = u.WeakMap,
    V = "function" == typeof Z && /native code/.test(B(Z)),
    $ = 0,
    R = Math.random(),
    U = function(e) {
      return (
        "Symbol(" +
        String(void 0 === e ? "" : e) +
        ")_" +
        (++$ + R).toString(36)
      );
    },
    z = F("keys"),
    H = function(e) {
      return z[e] || (z[e] = U(e));
    },
    G = {},
    K = u.WeakMap;
  if (V) {
    var q = new K(),
      W = q.get,
      Y = q.has,
      X = q.set;
    (r = function(e, t) {
      return X.call(q, e, t), t;
    }),
      (i = function(e) {
        return W.call(q, e) || {};
      }),
      (o = function(e) {
        return Y.call(q, e);
      });
  } else {
    var J = H("state");
    (G[J] = !0),
      (r = function(e, t) {
        return L(e, J, t), t;
      }),
      (i = function(e) {
        return _(e, J) ? e[J] : {};
      }),
      (o = function(e) {
        return _(e, J);
      });
  }
  var Q = {
      set: r,
      get: i,
      has: o,
      enforce: function(e) {
        return o(e) ? i(e) : r(e, {});
      },
      getterFor: function(e) {
        return function(t) {
          var n;
          if (!S(t) || (n = i(t)).type !== e)
            throw TypeError("Incompatible receiver, " + e + " required");
          return n;
        };
      }
    },
    ee = n(function(e) {
      var t = Q.get,
        n = Q.enforce,
        r = String(String).split("String");
      (e.exports = function(e, t, i, o) {
        var s = !!o && !!o.unsafe,
          l = !!o && !!o.enumerable,
          a = !!o && !!o.noTargetGet;
        "function" == typeof i &&
          ("string" != typeof t || _(i, "name") || L(i, "name", t),
          (n(i).source = r.join("string" == typeof t ? t : ""))),
          e !== u
            ? (s ? !a && e[t] && (l = !0) : delete e[t],
              l ? (e[t] = i) : L(e, t, i))
            : l
            ? (e[t] = i)
            : D(t, i);
      })(Function.prototype, "toString", function() {
        return ("function" == typeof this && t(this).source) || B(this);
      });
    }),
    te = u,
    ne = function(e) {
      return "function" == typeof e ? e : void 0;
    },
    re = function(e, t) {
      return arguments.length < 2
        ? ne(te[e]) || ne(u[e])
        : (te[e] && te[e][t]) || (u[e] && u[e][t]);
    },
    ie = Math.ceil,
    oe = Math.floor,
    se = function(e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? oe : ie)(e);
    },
    ue = Math.min,
    le = function(e) {
      return e > 0 ? ue(se(e), 9007199254740991) : 0;
    },
    ae = Math.max,
    ce = Math.min,
    fe = function(e) {
      return function(t, n, r) {
        var i,
          o = b(t),
          s = le(o.length),
          u = (function(e, t) {
            var n = se(e);
            return n < 0 ? ae(n + t, 0) : ce(n, t);
          })(r, s);
        if (e && n != n) {
          for (; s > u; ) if ((i = o[u++]) != i) return !0;
        } else
          for (; s > u; u++)
            if ((e || u in o) && o[u] === n) return e || u || 0;
        return !e && -1;
      };
    },
    he = { includes: fe(!0), indexOf: fe(!1) },
    de = he.indexOf,
    pe = function(e, t) {
      var n,
        r = b(e),
        i = 0,
        o = [];
      for (n in r) !_(G, n) && _(r, n) && o.push(n);
      for (; t.length > i; ) _(r, (n = t[i++])) && (~de(o, n) || o.push(n));
      return o;
    },
    me = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf"
    ],
    ye = me.concat("length", "prototype"),
    ve = {
      f:
        Object.getOwnPropertyNames ||
        function(e) {
          return pe(e, ye);
        }
    },
    ge = { f: Object.getOwnPropertySymbols },
    be =
      re("Reflect", "ownKeys") ||
      function(e) {
        var t = ve.f(A(e)),
          n = ge.f;
        return n ? t.concat(n(e)) : t;
      },
    Se = function(e, t) {
      for (var n = be(t), r = k.f, i = M.f, o = 0; o < n.length; o++) {
        var s = n[o];
        _(e, s) || r(e, s, i(t, s));
      }
    },
    Ie = /#|\.prototype\./,
    we = function(e, t) {
      var n = Oe[_e(e)];
      return n == Te || (n != xe && ("function" == typeof t ? l(t) : !!t));
    },
    _e = (we.normalize = function(e) {
      return String(e)
        .replace(Ie, ".")
        .toLowerCase();
    }),
    Oe = (we.data = {}),
    xe = (we.NATIVE = "N"),
    Te = (we.POLYFILL = "P"),
    Ee = we,
    Ce = M.f,
    Me = function(e, t) {
      var n,
        r,
        i,
        o,
        s,
        l = e.target,
        a = e.global,
        c = e.stat;
      if ((n = a ? u : c ? u[l] || D(l, {}) : (u[l] || {}).prototype))
        for (r in t) {
          if (
            ((o = t[r]),
            (i = e.noTargetGet ? (s = Ce(n, r)) && s.value : n[r]),
            !Ee(a ? r : l + (c ? "." : "#") + r, e.forced) && void 0 !== i)
          ) {
            if (typeof o == typeof i) continue;
            Se(o, i);
          }
          (e.sham || (i && i.sham)) && L(o, "sham", !0), ee(n, r, o, e);
        }
    },
    Ae =
      Object.keys ||
      function(e) {
        return pe(e, me);
      },
    je = function(e) {
      return Object(g(e));
    },
    ke = Object.assign,
    Le = Object.defineProperty,
    De =
      !ke ||
      l(function() {
        if (
          a &&
          1 !==
            ke(
              { b: 1 },
              ke(
                Le({}, "a", {
                  enumerable: !0,
                  get: function() {
                    Le(this, "b", { value: 3, enumerable: !1 });
                  }
                }),
                { b: 2 }
              )
            ).b
        )
          return !0;
        var e = {},
          t = {},
          n = Symbol();
        return (
          (e[n] = 7),
          "abcdefghijklmnopqrst".split("").forEach(function(e) {
            t[e] = e;
          }),
          7 != ke({}, e)[n] || "abcdefghijklmnopqrst" != Ae(ke({}, t)).join("")
        );
      })
        ? function(e, t) {
            for (
              var n = je(e), r = arguments.length, i = 1, o = ge.f, s = h.f;
              r > i;

            )
              for (
                var u,
                  l = v(arguments[i++]),
                  c = o ? Ae(l).concat(o(l)) : Ae(l),
                  f = c.length,
                  d = 0;
                f > d;

              )
                (u = c[d++]), (a && !s.call(l, u)) || (n[u] = l[u]);
            return n;
          }
        : ke;
  Me(
    { target: "Object", stat: !0, forced: Object.assign !== De },
    { assign: De }
  ),
    Me(
      {
        target: "Object",
        stat: !0,
        forced: l(function() {
          Ae(1);
        })
      },
      {
        keys: function(e) {
          return Ae(je(e));
        }
      }
    );
  var Pe = "\t\n\v\f\r  ?????????????????????????????????????????????\u2028\u2029\ufeff",
    Fe = "[" + Pe + "]",
    Ne = RegExp("^" + Fe + Fe + "*"),
    Be = RegExp(Fe + Fe + "*$"),
    Ze = function(e) {
      return function(t) {
        var n = String(g(t));
        return (
          1 & e && (n = n.replace(Ne, "")), 2 & e && (n = n.replace(Be, "")), n
        );
      };
    },
    Ve = { start: Ze(1), end: Ze(2), trim: Ze(3) },
    $e = Ve.trim,
    Re = u.parseFloat,
    Ue =
      1 / Re(Pe + "-0") != -1 / 0
        ? function(e) {
            var t = $e(String(e)),
              n = Re(t);
            return 0 === n && "-" == t.charAt(0) ? -0 : n;
          }
        : Re;
  Me({ global: !0, forced: parseFloat != Ue }, { parseFloat: Ue });
  var ze = function(e, t, n) {
      if (
        ((function(e) {
          if ("function" != typeof e)
            throw TypeError(String(e) + " is not a function");
        })(e),
        void 0 === t)
      )
        return e;
      switch (n) {
        case 0:
          return function() {
            return e.call(t);
          };
        case 1:
          return function(n) {
            return e.call(t, n);
          };
        case 2:
          return function(n, r) {
            return e.call(t, n, r);
          };
        case 3:
          return function(n, r, i) {
            return e.call(t, n, r, i);
          };
      }
      return function() {
        return e.apply(t, arguments);
      };
    },
    He =
      Array.isArray ||
      function(e) {
        return "Array" == m(e);
      },
    Ge =
      !!Object.getOwnPropertySymbols &&
      !l(function() {
        return !String(Symbol());
      }),
    Ke = Ge && !Symbol.sham && "symbol" == typeof Symbol(),
    qe = F("wks"),
    We = u.Symbol,
    Ye = Ke ? We : U,
    Xe = function(e) {
      return (
        _(qe, e) ||
          (Ge && _(We, e) ? (qe[e] = We[e]) : (qe[e] = Ye("Symbol." + e))),
        qe[e]
      );
    },
    Je = Xe("species"),
    Qe = function(e, t) {
      var n;
      return (
        He(e) &&
          ("function" != typeof (n = e.constructor) ||
          (n !== Array && !He(n.prototype))
            ? S(n) && null === (n = n[Je]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === t ? 0 : t)
      );
    },
    et = [].push,
    tt = function(e) {
      var t = 1 == e,
        n = 2 == e,
        r = 3 == e,
        i = 4 == e,
        o = 6 == e,
        s = 5 == e || o;
      return function(u, l, a, c) {
        for (
          var f,
            h,
            d = je(u),
            p = v(d),
            m = ze(l, a, 3),
            y = le(p.length),
            g = 0,
            b = c || Qe,
            S = t ? b(u, y) : n ? b(u, 0) : void 0;
          y > g;
          g++
        )
          if ((s || g in p) && ((h = m((f = p[g]), g, d)), e))
            if (t) S[g] = h;
            else if (h)
              switch (e) {
                case 3:
                  return !0;
                case 5:
                  return f;
                case 6:
                  return g;
                case 2:
                  et.call(S, f);
              }
            else if (i) return !1;
        return o ? -1 : r || i ? i : S;
      };
    },
    nt = {
      forEach: tt(0),
      map: tt(1),
      filter: tt(2),
      some: tt(3),
      every: tt(4),
      find: tt(5),
      findIndex: tt(6)
    },
    rt = function(e, t) {
      var n = [][e];
      return (
        !n ||
        !l(function() {
          n.call(
            null,
            t ||
              function() {
                throw 1;
              },
            1
          );
        })
      );
    },
    it = nt.forEach,
    ot = rt("forEach")
      ? function(e) {
          return it(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
      : [].forEach;
  for (var st in {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  }) {
    var ut = u[st],
      lt = ut && ut.prototype;
    if (lt && lt.forEach !== ot)
      try {
        L(lt, "forEach", ot);
      } catch (e) {
        lt.forEach = ot;
      }
  }
  function at(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (e[t] = n),
      e
    );
  }
  function ct(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function ft(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? ct(n, !0).forEach(function(t) {
            at(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ct(n).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  var ht = { DEFAULT: "default", SMALL: "sm", LARGE: "lg" },
    dt = { TOP: "top", BOTTOM: "bottom" };
  function pt(e) {
    return e && e.constructor === Object;
  }
  function mt(e) {
    for (var t = 0, n = 0; e; )
      (t += parseFloat(e.offsetTop)),
        (n += parseFloat(e.offsetLeft)),
        (e = e.offsetParent);
    return { top: Math.round(t), left: Math.round(n) };
  }
  function yt(e, t) {
    var n = Object.assign({}, e);
    return (
      pt(e) &&
        pt(t) &&
        Object.keys(t).forEach(function(r) {
          pt(t[r]) && r in e
            ? (n[r] = yt(e[r], t[r]))
            : Object.assign(n, at({}, r, t[r]));
        }),
      n
    );
  }
  function vt(e) {
    var t = e.getBoundingClientRect();
    return t.top < 0 ? dt.BOTTOM : t.bottom > window.innerHeight && dt.TOP;
  }
  var gt,
    bt,
    St = re("navigator", "userAgent") || "",
    It = u.process,
    wt = It && It.versions,
    _t = wt && wt.v8;
  _t
    ? (bt = (gt = _t.split("."))[0] + gt[1])
    : St &&
      (!(gt = St.match(/Edge\/(\d+)/)) || gt[1] >= 74) &&
      (gt = St.match(/Chrome\/(\d+)/)) &&
      (bt = gt[1]);
  var Ot,
    xt = bt && +bt,
    Tt = Xe("species"),
    Et = nt.filter,
    Ct =
      ((Ot = "filter"),
      xt >= 51 ||
        !l(function() {
          var e = [];
          return (
            ((e.constructor = {})[Tt] = function() {
              return { foo: 1 };
            }),
            1 !== e[Ot](Boolean).foo
          );
        })),
    Mt =
      Ct &&
      !l(function() {
        [].filter.call({ length: -1, 0: 1 }, function(e) {
          throw e;
        });
      });
  Me(
    { target: "Array", proto: !0, forced: !Ct || !Mt },
    {
      filter: function(e) {
        return Et(this, e, arguments.length > 1 ? arguments[1] : void 0);
      }
    }
  );
  var At = a
      ? Object.defineProperties
      : function(e, t) {
          A(e);
          for (var n, r = Ae(t), i = r.length, o = 0; i > o; )
            k.f(e, (n = r[o++]), t[n]);
          return e;
        },
    jt = re("document", "documentElement"),
    kt = H("IE_PROTO"),
    Lt = function() {},
    Dt = function() {
      var e,
        t = T("iframe"),
        n = me.length;
      for (
        t.style.display = "none",
          jt.appendChild(t),
          t.src = String("javascript:"),
          (e = t.contentWindow.document).open(),
          e.write("<script>document.F=Object</script>"),
          e.close(),
          Dt = e.F;
        n--;

      )
        delete Dt.prototype[me[n]];
      return Dt();
    },
    Pt =
      Object.create ||
      function(e, t) {
        var n;
        return (
          null !== e
            ? ((Lt.prototype = A(e)),
              (n = new Lt()),
              (Lt.prototype = null),
              (n[kt] = e))
            : (n = Dt()),
          void 0 === t ? n : At(n, t)
        );
      };
  G[kt] = !0;
  var Ft = Xe("unscopables"),
    Nt = Array.prototype;
  null == Nt[Ft] && L(Nt, Ft, Pt(null));
  var Bt = function(e) {
      Nt[Ft][e] = !0;
    },
    Zt = nt.find,
    Vt = !0;
  "find" in [] &&
    Array(1).find(function() {
      Vt = !1;
    }),
    Me(
      { target: "Array", proto: !0, forced: Vt },
      {
        find: function(e) {
          return Zt(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
      }
    ),
    Bt("find");
  var $t = he.includes;
  Me(
    { target: "Array", proto: !0 },
    {
      includes: function(e) {
        return $t(this, e, arguments.length > 1 ? arguments[1] : void 0);
      }
    }
  ),
    Bt("includes");
  var Rt = {
      onSelectByArrow: function(e) {
        var t = this;
        if ((e.preventDefault(), !this.disabled && !this.readonly)) {
          this.showMenu(),
            null === this.arrowsIndex &&
              (this.arrowsIndex = this.selectedItemIndex || -1),
            "ArrowDown" === e.key && this.arrowsIndex++,
            "ArrowUp" === e.key && this.arrowsIndex--;
          var n = this.itemsComputed.length - 1;
          this.arrowsIndex < 0 && (this.arrowsIndex = n),
            this.arrowsIndex > n && (this.arrowsIndex = 0);
          var r = this.itemsComputed[this.arrowsIndex];
          this.arrowsDisableInstantSelection
            ? (this.selectedItemByArrows = r)
            : (this.setSearchData(""),
              (this.selectedItem = r),
              this.fireSelectEvent(this.selectedItem)),
            this.scrollToItemIfNeeded &&
              this.$nextTick(function() {
                var e = t.$refs.items[t.arrowsIndex];
                e &&
                  (function(e, t) {
                    if (e.offsetTop < t.scrollTop) t.scrollTop = e.offsetTop;
                    else {
                      var n = e.offsetTop + e.offsetHeight;
                      n > t.scrollTop + t.offsetHeight &&
                        (t.scrollTop = n - t.offsetHeight);
                    }
                  })(e, t.$refs["IZ-select__menu-items"]);
              });
        }
      },
      onEnter: function(e) {
        if (this.hasMenu) {
          e.preventDefault();
          var t = !1;
          if (!this.arrowsIndex && !this.disableFirstItemSelectOnEnter) {
            var n = this.itemsComputed[0];
            if (!n) return;
            this.fireSelectEvent((this.selectedItem = n)), (t = !0);
          }
          this.arrowsDisableInstantSelection &&
            this.selectedItemByArrows &&
            (this.fireSelectEvent(
              (this.selectedItem = this.selectedItemByArrows)
            ),
            (t = !0)),
            t && this.setSearchData("");
        }
        this.hasMenu ? this.hideMenu() : this.showMenu();
      },
      onClick: function() {
        this.disabled || this.readonly || (this.setFocused(), this.showMenu());
      },
      onClickSelectItem: function(e) {
        (this.selectedItem = e),
          this.setSearchData(""),
          this.setInputFocused(),
          this.hideMenu(),
          this.fireSelectEvent(e);
      },
      onSearchKeyDown: function(e) {
        this.disabled ||
          this.readonly ||
          ["Enter", "ArrowDown", "ArrowUp", "Tab"].includes(e.key) ||
          (e.target.value ||
            "Backspace" !== e.key ||
            ((this.selectedItem = null), (this.arrowsIndex = null)),
          this.showMenu(),
          this.$emit("keydown", e));
      },
      onSearchKeyUp: function(e) {
        this.disabled || this.readonly || this.$emit("keyup", e);
      },
      onSearch: function(e) {
        this.disabled ||
          this.readonly ||
          ((this.selectedItemByArrows = this.selectedItem = this.arrowsIndex = null),
          this.setSearchData(e.target.value),
          this.$emit("search", this.getSearchData()));
      },
      onScroll: function(e) {
        if (
          (this.$emit("scroll", e),
          !(this.scrollItemsLimitCurrent >= this.itemsComputed.length))
        ) {
          var t = e.target;
          t.scrollHeight - (t.scrollTop + t.clientHeight) < 200 &&
            (this.scrollItemsLimitCurrent += this.scrollItemsLimitAddAfterScroll);
        }
      }
    },
    Ut = he.indexOf,
    zt = [].indexOf,
    Ht = !!zt && 1 / [1].indexOf(1, -0) < 0,
    Gt = rt("indexOf");
  Me(
    { target: "Array", proto: !0, forced: Ht || Gt },
    {
      indexOf: function(e) {
        return Ht
          ? zt.apply(this, arguments) || 0
          : Ut(this, e, arguments.length > 1 ? arguments[1] : void 0);
      }
    }
  );
  var Kt =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function() {
            var e,
              t = !1,
              n = {};
            try {
              (e = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__"
              ).set).call(n, []),
                (t = n instanceof Array);
            } catch (e) {}
            return function(n, r) {
              return (
                A(n),
                (function(e) {
                  if (!S(e) && null !== e)
                    throw TypeError(
                      "Can't set " + String(e) + " as a prototype"
                    );
                })(r),
                t ? e.call(n, r) : (n.__proto__ = r),
                n
              );
            };
          })()
        : void 0),
    qt = function(e, t, n) {
      var r, i;
      return (
        Kt &&
          "function" == typeof (r = t.constructor) &&
          r !== n &&
          S((i = r.prototype)) &&
          i !== n.prototype &&
          Kt(e, i),
        e
      );
    },
    Wt = ve.f,
    Yt = M.f,
    Xt = k.f,
    Jt = Ve.trim,
    Qt = u.Number,
    en = Qt.prototype,
    tn = "Number" == m(Pt(en)),
    nn = function(e) {
      var t,
        n,
        r,
        i,
        o,
        s,
        u,
        l,
        a = I(e, !1);
      if ("string" == typeof a && a.length > 2)
        if (43 === (t = (a = Jt(a)).charCodeAt(0)) || 45 === t) {
          if (88 === (n = a.charCodeAt(2)) || 120 === n) return NaN;
        } else if (48 === t) {
          switch (a.charCodeAt(1)) {
            case 66:
            case 98:
              (r = 2), (i = 49);
              break;
            case 79:
            case 111:
              (r = 8), (i = 55);
              break;
            default:
              return +a;
          }
          for (s = (o = a.slice(2)).length, u = 0; u < s; u++)
            if ((l = o.charCodeAt(u)) < 48 || l > i) return NaN;
          return parseInt(o, r);
        }
      return +a;
    };
  if (Ee("Number", !Qt(" 0o1") || !Qt("0b1") || Qt("+0x1"))) {
    for (
      var rn,
        on = function(e) {
          var t = arguments.length < 1 ? 0 : e,
            n = this;
          return n instanceof on &&
            (tn
              ? l(function() {
                  en.valueOf.call(n);
                })
              : "Number" != m(n))
            ? qt(new Qt(nn(t)), n, on)
            : nn(t);
        },
        sn = a
          ? Wt(Qt)
          : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
              ","
            ),
        un = 0;
      sn.length > un;
      un++
    )
      _(Qt, (rn = sn[un])) && !_(on, rn) && Xt(on, rn, Yt(Qt, rn));
    (on.prototype = en), (en.constructor = on), ee(u, "Number", on);
  }
  var ln = {};
  ln[Xe("toStringTag")] = "z";
  var an = "[object z]" === String(ln),
    cn = Xe("toStringTag"),
    fn =
      "Arguments" ==
      m(
        (function() {
          return arguments;
        })()
      ),
    hn = an
      ? m
      : function(e) {
          var t, n, r;
          return void 0 === e
            ? "Undefined"
            : null === e
            ? "Null"
            : "string" ==
              typeof (n = (function(e, t) {
                try {
                  return e[t];
                } catch (e) {}
              })((t = Object(e)), cn))
            ? n
            : fn
            ? m(t)
            : "Object" == (r = m(t)) && "function" == typeof t.callee
            ? "Arguments"
            : r;
        },
    dn = an
      ? {}.toString
      : function() {
          return "[object " + hn(this) + "]";
        };
  an || ee(Object.prototype, "toString", dn, { unsafe: !0 });
  var pn = function() {
      var e = A(this),
        t = "";
      return (
        e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.dotAll && (t += "s"),
        e.unicode && (t += "u"),
        e.sticky && (t += "y"),
        t
      );
    },
    mn = RegExp.prototype,
    yn = mn.toString,
    vn = l(function() {
      return "/a/b" != yn.call({ source: "a", flags: "b" });
    }),
    gn = "toString" != yn.name;
  (vn || gn) &&
    ee(
      RegExp.prototype,
      "toString",
      function() {
        var e = A(this),
          t = String(e.source),
          n = e.flags;
        return (
          "/" +
          t +
          "/" +
          String(
            void 0 === n && e instanceof RegExp && !("flags" in mn)
              ? pn.call(e)
              : n
          )
        );
      },
      { unsafe: !0 }
    );
  var bn = (function(e, t, n, r, i, o, s, u, l, a) {
    "boolean" != typeof s && ((l = u), (u = s), (s = !1));
    var c,
      f = "function" == typeof n ? n.options : n;
    if (
      (e &&
        e.render &&
        ((f.render = e.render),
        (f.staticRenderFns = e.staticRenderFns),
        (f._compiled = !0),
        i && (f.functional = !0)),
      r && (f._scopeId = r),
      o
        ? ((c = function(e) {
            (e =
              e ||
              (this.$vnode && this.$vnode.ssrContext) ||
              (this.parent &&
                this.parent.$vnode &&
                this.parent.$vnode.ssrContext)) ||
              "undefined" == typeof __VUE_SSR_CONTEXT__ ||
              (e = __VUE_SSR_CONTEXT__),
              t && t.call(this, l(e)),
              e && e._registeredComponents && e._registeredComponents.add(o);
          }),
          (f._ssrRegister = c))
        : t &&
          (c = s
            ? function() {
                t.call(this, a(this.$root.$options.shadowRoot));
              }
            : function(e) {
                t.call(this, u(e));
              }),
      c)
    )
      if (f.functional) {
        var h = f.render;
        f.render = function(e, t) {
          return c.call(t), h(e, t);
        };
      } else {
        var d = f.beforeCreate;
        f.beforeCreate = d ? [].concat(d, c) : [c];
      }
    return n;
  })(
    {
      render: function() {
        var e,
          t = this,
          n = t.$createElement,
          r = t._self._c || n;
        return r(
          "div",
          {
            ref: "IZ-select",
            class: Object.assign(
              {},
              { "IZ-select": !0, "IZ-select--with-value": t.inputValue },
              t.size === t.SIZES.DEFAULT
                ? null
                : ((e = {}), (e["IZ-select--" + t.size] = !0), e)
            ),
            attrs: { tabindex: t.disableSearch ? 0 : -1 },
            on: {
              keydown: [
                function(e) {
                  return !e.type.indexOf("key") &&
                    t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"])
                    ? null
                    : t.onSelectByArrow(e);
                },
                function(e) {
                  return !e.type.indexOf("key") &&
                    t._k(e.keyCode, "down", 40, e.key, ["Down", "ArrowDown"])
                    ? null
                    : t.onSelectByArrow(e);
                },
                function(e) {
                  return !e.type.indexOf("key") &&
                    t._k(e.keyCode, "enter", 13, e.key, "Enter")
                    ? null
                    : t.onEnter(e);
                },
                function(e) {
                  return !e.type.indexOf("key") &&
                    t._k(e.keyCode, "tab", 9, e.key, "Tab") &&
                    t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"])
                    ? null
                    : t.setBlured(e);
                }
              ],
              mousedown: t.onClick,
              focus: t.setFocused
            }
          },
          [
            r(
              "div",
              { staticClass: "IZ-select__input-wrap" },
              [
                t._t("input-before"),
                t._v(" "),
                r(
                  "div",
                  {
                    ref: "IZ-select__input",
                    class: {
                      "IZ-select__input": !0,
                      "IZ-select__input--focused": t.focused,
                      "IZ-select__input--has-menu": t.hasMenu,
                      "IZ-select__input--has-error": t.hasError,
                      "IZ-select__input--successful": t.successful,
                      "IZ-select__input--selection-slot": t.showSelectionSlot,
                      "IZ-select__input--disabled": t.disabled,
                      "IZ-select__input--readonly": t.readonly
                    },
                    style: t.inputStyles
                  },
                  [
                    t._t("input-start"),
                    t._v(" "),
                    t.showSelectionSlot
                      ? t._t("selection", null, { item: t.selectedItem })
                      : t._e(),
                    t._v(" "),
                    t.simpleInput
                      ? r(
                          "input",
                          t._b(
                            {
                              ref: "IZ-select__input-for-text",
                              on: {
                                keyup: t.onSearchKeyUp,
                                keydown: t.onSearchKeyDown,
                                input: function(e) {
                                  return t.$emit("input", e.target.value);
                                },
                                mousedown: t.onClick,
                                focus: function(e) {
                                  return t.setFocused(!0);
                                }
                              }
                            },
                            "input",
                            Object.assign(
                              {},
                              {
                                value: t.value,
                                placeholder: t.placeholder,
                                class: t.inputForTextClass,
                                disabled: t.disabled,
                                readonly: t.readonly,
                                tabindex: 0,
                                type: "text",
                                autocomplete: "new-password"
                              },
                              t.inputElCustomAttributes,
                              { style: t.inputForTextStyles }
                            ),
                            !1
                          )
                        )
                      : r(
                          "input",
                          t._b(
                            {
                              ref: "IZ-select__input-for-text",
                              on: {
                                keyup: t.onSearchKeyUp,
                                keydown: t.onSearchKeyDown,
                                input: t.onSearch,
                                mousedown: t.onClick,
                                focus: function(e) {
                                  return t.setFocused(!0);
                                }
                              }
                            },
                            "input",
                            Object.assign(
                              {},
                              {
                                value: t.inputValue,
                                placeholder: t.placeholder,
                                class: t.inputForTextClass,
                                disabled: t.disableSearch || t.disabled,
                                readonly: t.readonly,
                                tabindex: t.disableSearch ? -1 : 0,
                                type: "text",
                                role: "combobox",
                                autocomplete: "new-password"
                              },
                              t.inputElCustomAttributes,
                              { style: t.inputForTextStyles }
                            ),
                            !1
                          )
                        ),
                    t._v(" "),
                    t._t("input-end")
                  ],
                  2
                ),
                t._v(" "),
                t._t("input-after")
              ],
              2
            ),
            t._v(" "),
            t.simpleInput
              ? t._e()
              : t._l([t.MENU_POSITIONS.TOP, t.MENU_POSITIONS.BOTTOM], function(
                  e
                ) {
                  var n;
                  return r(
                    "div",
                    {
                      key: "menu-position-" + e,
                      ref: "IZ-select__menu-" + e,
                      refInFor: !0,
                      class:
                        ((n = {}),
                        (n["IZ-select__menu IZ-select__menu--at-" + e] = !0),
                        (n["IZ-select__menu--disable-search"] =
                          t.disableSearch),
                        n),
                      style: Object.assign(
                        {},
                        { "pointer-events": t.hasMenu ? "auto" : "none" },
                        t.getMenuDynamicStyles(e)
                      )
                    },
                    [
                      t._t("before-items-fixed"),
                      t._v(" "),
                      r(
                        "div",
                        {
                          ref: "IZ-select__menu-items",
                          refInFor: !0,
                          staticClass: "IZ-select__menu-items",
                          style: { "max-height": t.menuItemsMaxHeight },
                          on: { scroll: t.onScroll }
                        },
                        [
                          t._t("before-items", [
                            r("div", { staticStyle: { height: "8px" } })
                          ]),
                          t._v(" "),
                          t._l(t.itemsComputed, function(e, n) {
                            return r(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value:
                                      n < t.scrollItemsLimitCurrent ||
                                      (t.arrowsIndex && n <= t.arrowsIndex),
                                    expression:
                                      "i < scrollItemsLimitCurrent || (arrowsIndex && i <= arrowsIndex)"
                                  }
                                ],
                                key: "IZ-item-" + n,
                                ref: "items",
                                refInFor: !0,
                                class: {
                                  "IZ-select__item": !0,
                                  "IZ-select__item--selected": t.isItemSelected(
                                    e
                                  )
                                },
                                on: {
                                  click: function(n) {
                                    return t.onClickSelectItem(e);
                                  }
                                }
                              },
                              [
                                t._t(
                                  "item",
                                  [
                                    r("span", [
                                      t._v(
                                        "\n              " +
                                          t._s(t.getItemText(e)) +
                                          "\n            "
                                      )
                                    ])
                                  ],
                                  { item: e }
                                )
                              ],
                              2
                            );
                          }),
                          t._v(" "),
                          t.itemsComputed.length || t.loading
                            ? t._e()
                            : r(
                                "div",
                                { staticClass: "IZ-select__no-data" },
                                [
                                  t._t("no-data", [
                                    t._v(
                                      "\n            " +
                                        t._s(
                                          t.$coolSelect.options.text.noData
                                        ) +
                                        "\n          "
                                    )
                                  ])
                                ],
                                2
                              ),
                          t._v(" "),
                          t._t("after-items", [
                            r("div", { staticStyle: { height: "8px" } })
                          ])
                        ],
                        2
                      ),
                      t._v(" "),
                      t._t("after-items-fixed"),
                      t._v(" "),
                      r(
                        "div",
                        {
                          staticStyle: {
                            position: "absolute",
                            top: "0",
                            left: "0",
                            right: "0"
                          }
                        },
                        [t._t("before-items-fixed-absolute")],
                        2
                      ),
                      t._v(" "),
                      r(
                        "div",
                        {
                          staticStyle: {
                            position: "absolute",
                            bottom: "0",
                            left: "0",
                            right: "0"
                          }
                        },
                        [t._t("after-items-fixed-absolute")],
                        2
                      )
                    ],
                    2
                  );
                }),
            t._v(" "),
            r("transition", { attrs: { name: "fade" } }, [
              r(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.errorMessage,
                      expression: "errorMessage"
                    }
                  ],
                  staticClass: "IZ-select__error"
                },
                [
                  t._t(
                    "error",
                    [t._v("\n        " + t._s(t.errorMessage) + "\n      ")],
                    { errorMessage: t.errorMessage }
                  )
                ],
                2
              )
            ])
          ],
          2
        );
      },
      staticRenderFns: []
    },
    void 0,
    {
      name: "VueSelect",
      description:
        "\n  This `select` is amazing, you should _check_ it out ????.\n  ",
      token: '<cool-select v-model="selected" :items="items" />',
      props: {
        value: {
          type: [Array, Object, String, Number, Boolean],
          default: function() {
            return null;
          },
          note: 'value for "v-model".'
        },
        items: {
          type: [Array, String],
          required: !1,
          note: "array of suggestions (data fetched from backend, etc)."
        },
        itemText: {
          type: String,
          default: null,
          note: "property in item for text."
        },
        itemValue: {
          type: String,
          default: null,
          note: "property in item for value."
        },
        placeholder: {
          type: String,
          default: null,
          note: "placeholder for input."
        },
        loading: {
          type: Boolean,
          default: !1,
          note: "display the loading indicator."
        },
        disabled: { type: Boolean, default: !1, note: "disable the select." },
        readonly: { type: Boolean, default: !1, note: "readonly state." },
        filter: {
          type: Function,
          default: function(e, t, n) {
            var r = function(e) {
                return null != e ? e : "";
              },
              i = r(n),
              o = r(t);
            return (
              i
                .toString()
                .toLowerCase()
                .indexOf(o.toString().toLowerCase()) > -1
            );
          },
          note: "filter function for search."
        },
        searchText: {
          type: String,
          default: "",
          note:
            'search string for input, you can use this with ".sync" modifier.'
        },
        inputElCustomAttributes: {
          type: Object,
          default: function() {
            return {};
          },
          note:
            'you can pass your attributes to the input element. Note: the attributes that are used by the component itself inside are not available, for example, "style".'
        },
        disableSearch: {
          type: Boolean,
          default: !1,
          note: "disable search input element."
        },
        disableFilteringBySearch: {
          type: Boolean,
          default: !1,
          note:
            "disable filtering by search (you can use search for manually getting items)."
        },
        resetSearchOnBlur: {
          type: Boolean,
          default: !0,
          note: "reset search on blur event."
        },
        allowMobileScroll: {
          type: Boolean,
          default: !0,
          note: "allow scrolling to an item on mobile devices."
        },
        arrowsDisableInstantSelection: {
          type: Boolean,
          default: !0,
          note: "disable auto select when up or down with key arrow."
        },
        menuItemsMaxHeight: {
          type: String,
          default: "300px",
          note: "max menu height (any css value)."
        },
        eventEmitter: {
          type: Object,
          note: "Observer pattern, helps manage events from parent to child."
        },
        scrollItemsLimit: {
          type: Number,
          default: 20,
          note:
            "the initial limit of the displayed items to scroll. So that there are not many elements in the scrolling at the beginning. Also see scrollItemsLimitAddAfterScroll prop."
        },
        scrollItemsLimitAddAfterScroll: {
          type: Number,
          default: 10,
          note:
            "the number of items added to the scrollItemsLimit prop after scrolling to the end of the scroll. Also see scrollItemsLimitAddAfterScroll prop."
        },
        disableFirstItemSelectOnEnter: {
          type: Boolean,
          default: !1,
          note:
            "disable the selection of the first item from the list of items in menu when to press enter (when no item is selected)."
        },
        scrollToItemIfNeeded: {
          type: Boolean,
          default: !0,
          note: "to scroll to an item if it has moved beyond the scroll bar."
        },
        inputStyles: {
          type: Object,
          default: function() {
            return {};
          },
          note:
            "custom styles for the input field. You can specify dynamic styles."
        },
        inputForTextClass: {
          type: [Array, String, Object],
          default: function() {
            return "";
          },
          note:
            'custom "class" attribute for the input field. You can specify dynamic class.'
        },
        errorMessage: { type: String, default: null },
        successful: {
          type: Boolean,
          default: !1,
          note:
            "does the component have a successful state. If true, then apply green colors."
        },
        size: { type: String, default: ht.DEFAULT, note: "sets size" },
        menuDefaultPosition: {
          type: String,
          default: dt.BOTTOM,
          note: "sets menu's default position"
        },
        menuDynamicPosition: {
          type: Boolean,
          default: !0,
          note:
            "sets the dynamic position behavior for the menu (based on viewport)"
        },
        selectTextOnFocus: {
          type: Boolean,
          default: !1,
          note:
            "if true, fully select a chosen item on focus so the user can instantly search for a new item."
        },
        simpleInput: {
          type: Boolean,
          default: !1,
          note: "works as simple input (no menu)"
        }
      },
      data: function() {
        var e = this;
        return {
          MENU_POSITIONS: dt,
          SIZES: ht,
          wishShowMenu: !1,
          arrowsIndex: null,
          focused: !1,
          selectedItem: null,
          selectedItemByArrows: null,
          searchData: "",
          scrollItemsLimitCurrent: this.scrollItemsLimit,
          listeners: {
            mousedown: function(t) {
              var n = t.target,
                r = e.$refs["IZ-select"];
              e.focused && r && !r.contains(n) && e.setBlured();
            },
            scroll: this.menuCalculatePos,
            resize: this.menuCalculatePos
          },
          menuCurrentPosition: this.menuDefaultPosition,
          lastMenuDynamicStyles: null,
          ignoreFirstInputEvent: !0
        };
      },
      computed: {
        itemsComputed: function() {
          var e = this.items;
          return (
            "string" == typeof this.items && (e = JSON.parse(this.items)),
            this.filteredBySearchItems(e)
          );
        },
        inputValue: function() {
          return this.$scopedSlots.selection && "" === this.getSearchData()
            ? ""
            : "" !== this.getSearchData()
            ? this.getSearchData()
            : this.getItemText(this.selectedItem) || this.currentItemValue;
        },
        currentItemValue: function() {
          return this.getItemValue(this.selectedItem);
        },
        showSelectionSlot: function() {
          return (
            this.$scopedSlots.selection &&
            this.selectedItem &&
            !this.getSearchData()
          );
        },
        inputForTextStyles: function() {
          var e = {};
          return (
            this.inputElCustomAttributes &&
              this.inputElCustomAttributes.style &&
              (e = ft({}, e, {}, this.inputElCustomAttributes.style)),
            e
          );
        },
        hasMenu: function() {
          return !this.simpleInput && this.wishShowMenu && !this.loading;
        },
        hasError: function() {
          return !!this.errorMessage;
        },
        isMobile: function() {
          return (
            !process.server &&
            window.innerWidth <= 900 && window.innerHeight <= 900
          );
        },
        selectedItemIndex: function() {
          for (var e in this.itemsComputed)
            if (
              this.selectedItem === this.itemsComputed[e] &&
              this.itemsComputed.hasOwnProperty(e)
            )
              return e;
          return null;
        }
      },
      watch: {
        searchText: function(e) {
          this.setSearchData(e);
        },
        value: function() {
          this.setSelectedItemByValue();
        },
        items: function() {
          this.setSelectedItemByValue();
        },
        selectedItem: function() {
          this.ignoreFirstInputEvent
            ? (this.ignoreFirstInputEvent = !1)
            : ((this.selectedItemByArrows = null),
              this.$emit("input", this.currentItemValue));
        },
        itemsComputed: function(e) {
          this.$emit("change-displayed-items", e);
        }
      },
      created: function() {
        this.eventEmitter &&
          this.eventEmitter.on("set-search", this.setSearchData),
          this.setSelectedItemByValue();
      },
      mounted: function() {
        window.addEventListener("mousedown", this.listeners.mousedown),
          this.menuDynamicPosition &&
            (window.addEventListener("scroll", this.listeners.scroll),
            window.addEventListener("resize", this.listeners.resize));
      },
      beforeDestroy: function() {
        window.removeEventListener("mousedown", this.listeners.mousedown),
          this.menuDynamicPosition &&
            (window.removeEventListener("scroll", this.listeners.scroll),
            window.removeEventListener("resize", this.listeners.resize));
      },
      methods: ft({}, Rt, {
        getMenuDynamicStyles: function(e) {
          var t = this.menuCurrentPosition === e && this.hasMenu,
            n = { visibility: t ? "visible" : "hidden", opacity: +t };
          if (!this.hasMenu) return ft({}, this.lastMenuDynamicStyles, {}, n);
          var r = this.$refs["IZ-select__input"];
          return (
            (n.width = r.offsetWidth + "px"),
            (n.left = r.offsetLeft + "px"),
            e === dt.BOTTOM
              ? ((n.top = r.offsetTop + r.offsetHeight + "px"),
                this.disableSearch && (n.top = r.offsetTop + "px"))
              : e === dt.TOP &&
                ((n.bottom = "100%"), this.disableSearch && (n.bottom = 0)),
            (this.lastMenuDynamicStyles = n),
            n
          );
        },
        menuCalculatePos: function() {
          if (this.menuDynamicPosition && this.hasMenu) {
            var e = vt(this.$refs["IZ-select__menu-" + dt.TOP][0]),
              t = vt(this.$refs["IZ-select__menu-" + dt.BOTTOM][0]);
            this.menuCurrentPosition =
              e || t ? e || t : this.menuDefaultPosition;
          }
        },
        getSearchData: function() {
          return this.searchData;
        },
        setSearchData: function(e) {
          (this.searchData = e), this.$emit("update:search-text", e);
        },
        setInputFocused: function() {
          this.$refs["IZ-select__input-for-text"].focus();
        },
        setInputSelected: function() {
          var e = this;
          setTimeout(function() {
            e.$refs["IZ-select__input-for-text"].select();
          }, 100);
        },
        setFocused: function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!(this.focused || this.disabled || this.readonly)) {
            if (
              (this.disableSearch || e || this.setInputFocused(),
              window.scrollTo && this.allowMobileScroll && this.isMobile)
            ) {
              var t = mt(this.$refs["IZ-select__input"]),
                n = t.top;
              window.scrollTo({ top: n - 8, behavior: "smooth" });
            }
            this.selectTextOnFocus && this.setInputSelected(),
              (this.focused = !0),
              this.showMenu(),
              this.$emit("focus");
          }
        },
        setBlured: function() {
          this.resetSearchOnBlur && this.setSearchData(""),
            (this.focused = !1),
            this.hideMenu(),
            this.$refs["IZ-select__input-for-text"].blur(),
            this.$emit("blur");
        },
        fireSelectEvent: function(e) {
          var t = this;
          (this.selectedItemByArrows = null),
            this.$nextTick(function() {
              t.$emit("select", e);
            });
        },
        getItemText: function(e) {
          if (!e) return null;
          if (this.itemText) return e[this.itemText];
          if (pt(e)) {
            var t = Object.keys(e);
            return 1 === t.length ? e[t[0]] : e;
          }
          return e;
        },
        getItemValue: function(e) {
          if (null == e) return null;
          if (this.itemValue) return e[this.itemValue];
          if (pt(e)) {
            var t = Object.keys(e);
            return 1 === t.length ? e[t[0]] : e;
          }
          return e;
        },
        setSelectedItemByValue: function() {
          var e = this;
          this.items.length
            ? (this.selectedItem = this.itemsComputed.find(function(t) {
                if (pt(e.value)) {
                  var n = e.getItemValue(e.value);
                  return e.getItemValue(t) === n;
                }
                return e.getItemValue(t) === e.value;
              }))
            : (this.selectedItem = null);
        },
        filteredBySearchItems: function(e) {
          var t = this;
          return !this.getSearchData() || this.disableFilteringBySearch
            ? e
            : e.filter(function(e) {
                return t.filter(e, t.getSearchData(), t.getItemText(e));
              });
        },
        isItemSelected: function(e) {
          return (
            e === this.selectedItemByArrows ||
            (e === this.selectedItem && !this.selectedItemByArrows)
          );
        },
        showMenu: function() {
          this.hasMenu || ((this.wishShowMenu = !0), this.menuCalculatePos());
        },
        hideMenu: function() {
          this.hasMenu && (this.wishShowMenu = !1);
        }
      })
    },
    void 0,
    !1,
    void 0,
    void 0,
    void 0
  );
  var Sn = new (function() {
    return {
      install: function(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = { text: { noData: "No data available" } },
          r = yt(n, t);
        e.prototype.$coolSelect = { options: r };
      }
    };
  })();
  var In = null;
  "undefined" != typeof window
    ? (In = window.Vue)
    : "undefined" != typeof global && (In = global.Vue),
    In &&
      (In.use(Sn),
      In.component("cool-select", bn),
      In.component("vue-cool-select", bn)),
    (e.CoolSelect = bn),
    (e.CoolSelectPlugin = Sn),
    (e.EventEmitter = function() {
      var e = {};
      function t(t, n) {
        e[t] || (e[t] = []), e[t].push(n);
      }
      return {
        on: t,
        onOnce: function(e, n) {
          (n.once = !0), t(e, n);
        },
        emit: function(t, n) {
          for (var r in e[t]) {
            var i = e[t][r];
            i(n), i.once && delete e[t][r];
          }
        }
      };
    }),
    (e.VueCoolSelect = bn),
    (e.component = bn),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
