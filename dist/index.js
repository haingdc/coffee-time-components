/******/ ;(() => {
  // webpackBootstrap
  /******/ 'use strict'
  /******/ var __webpack_modules__ = {
    /***/ './node_modules/css-loader/dist/cjs.js!./src/accordion/components/accordion.css':
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ A: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        })
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            './node_modules/css-loader/dist/runtime/sourceMaps.js'
          )
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          )
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./node_modules/css-loader/dist/runtime/api.js')
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          )
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `@layer reset {
  /* Khởi tạo các kiểu lập trình cơ bản */
  details {
    display: block;
  }

  summary {
    list-style: none;
    cursor: pointer;
  }
}

@layer components {
  .accordion {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 0;
  }

  .accordion summary {
    padding: 10px;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    font-weight: bold;
  }

  .accordion div {
    padding: 10px;
    background-color: #fafafa;
  }
}`,
          '',
          {
            version: 3,
            sources: ['webpack://./src/accordion/components/accordion.css'],
            names: [],
            mappings:
              'AAAA;EACE,uCAAuC;EACvC;IACE,cAAc;EAChB;;EAEA;IACE,gBAAgB;IAChB,eAAe;EACjB;AACF;;AAEA;EACE;IACE,sBAAsB;IACtB,kBAAkB;IAClB,cAAc;EAChB;;EAEA;IACE,aAAa;IACb,yBAAyB;IACzB,sBAAsB;IACtB,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,yBAAyB;EAC3B;AACF',
            sourcesContent: [
              '@layer reset {\n  /* Khởi tạo các kiểu lập trình cơ bản */\n  details {\n    display: block;\n  }\n\n  summary {\n    list-style: none;\n    cursor: pointer;\n  }\n}\n\n@layer components {\n  .accordion {\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    margin: 10px 0;\n  }\n\n  .accordion summary {\n    padding: 10px;\n    background-color: #f0f0f0;\n    border: 1px solid #ddd;\n    font-weight: bold;\n  }\n\n  .accordion div {\n    padding: 10px;\n    background-color: #fafafa;\n  }\n}',
            ],
            sourceRoot: '',
          },
        ])
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/api.js': /***/ (module) => {
      /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
      module.exports = function (cssWithMappingToString) {
        var list = []

        // return the list of modules as css string
        list.toString = function toString() {
          return this.map(function (item) {
            var content = ''
            var needLayer = typeof item[5] !== 'undefined'
            if (item[4]) {
              content += '@supports ('.concat(item[4], ') {')
            }
            if (item[2]) {
              content += '@media '.concat(item[2], ' {')
            }
            if (needLayer) {
              content += '@layer'.concat(
                item[5].length > 0 ? ' '.concat(item[5]) : '',
                ' {'
              )
            }
            content += cssWithMappingToString(item)
            if (needLayer) {
              content += '}'
            }
            if (item[2]) {
              content += '}'
            }
            if (item[4]) {
              content += '}'
            }
            return content
          }).join('')
        }

        // import a list of modules into the list
        list.i = function i(modules, media, dedupe, supports, layer) {
          if (typeof modules === 'string') {
            modules = [[null, modules, undefined]]
          }
          var alreadyImportedModules = {}
          if (dedupe) {
            for (var k = 0; k < this.length; k++) {
              var id = this[k][0]
              if (id != null) {
                alreadyImportedModules[id] = true
              }
            }
          }
          for (var _k = 0; _k < modules.length; _k++) {
            var item = [].concat(modules[_k])
            if (dedupe && alreadyImportedModules[item[0]]) {
              continue
            }
            if (typeof layer !== 'undefined') {
              if (typeof item[5] === 'undefined') {
                item[5] = layer
              } else {
                item[1] = '@layer'
                  .concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {')
                  .concat(item[1], '}')
                item[5] = layer
              }
            }
            if (media) {
              if (!item[2]) {
                item[2] = media
              } else {
                item[1] = '@media '.concat(item[2], ' {').concat(item[1], '}')
                item[2] = media
              }
            }
            if (supports) {
              if (!item[4]) {
                item[4] = ''.concat(supports)
              } else {
                item[1] = '@supports ('
                  .concat(item[4], ') {')
                  .concat(item[1], '}')
                item[4] = supports
              }
            }
            list.push(item)
          }
        }
        return list
      }

      /***/
    },

    /***/ './node_modules/css-loader/dist/runtime/sourceMaps.js': /***/ (
      module
    ) => {
      module.exports = function (item) {
        var content = item[1]
        var cssMapping = item[3]
        if (!cssMapping) {
          return content
        }
        if (typeof btoa === 'function') {
          var base64 = btoa(
            unescape(encodeURIComponent(JSON.stringify(cssMapping)))
          )
          var data =
            'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
              base64
            )
          var sourceMapping = '/*# '.concat(data, ' */')
          return [content].concat([sourceMapping]).join('\n')
        }
        return [content].join('\n')
      }

      /***/
    },

    /***/ './node_modules/react/cjs/react-jsx-runtime.production.min.js':
      /***/ (__unused_webpack_module, exports, __webpack_require__) => {
        var __webpack_unused_export__
        /**
         * @license React
         * react-jsx-runtime.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var f = __webpack_require__('./node_modules/react/index.js'),
          k = Symbol.for('react.element'),
          l = Symbol.for('react.fragment'),
          m = Object.prototype.hasOwnProperty,
          n =
            f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          p = { key: !0, ref: !0, __self: !0, __source: !0 }
        function q(c, a, g) {
          var b,
            d = {},
            e = null,
            h = null
          void 0 !== g && (e = '' + g)
          void 0 !== a.key && (e = '' + a.key)
          void 0 !== a.ref && (h = a.ref)
          for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b])
          if (c && c.defaultProps)
            for (b in ((a = c.defaultProps), a))
              void 0 === d[b] && (d[b] = a[b])
          return {
            $$typeof: k,
            type: c,
            key: e,
            ref: h,
            props: d,
            _owner: n.current,
          }
        }
        __webpack_unused_export__ = l
        __webpack_unused_export__ = q
        __webpack_unused_export__ = q

        /***/
      },

    /***/ './node_modules/react/cjs/react.production.min.js': /***/ (
      __unused_webpack_module,
      exports
    ) => {
      /**
       * @license React
       * react.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      var l = Symbol.for('react.element'),
        n = Symbol.for('react.portal'),
        p = Symbol.for('react.fragment'),
        q = Symbol.for('react.strict_mode'),
        r = Symbol.for('react.profiler'),
        t = Symbol.for('react.provider'),
        u = Symbol.for('react.context'),
        v = Symbol.for('react.forward_ref'),
        w = Symbol.for('react.suspense'),
        x = Symbol.for('react.memo'),
        y = Symbol.for('react.lazy'),
        z = Symbol.iterator
      function A(a) {
        if (null === a || 'object' !== typeof a) return null
        a = (z && a[z]) || a['@@iterator']
        return 'function' === typeof a ? a : null
      }
      var B = {
          isMounted: function () {
            return !1
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        C = Object.assign,
        D = {}
      function E(a, b, e) {
        this.props = a
        this.context = b
        this.refs = D
        this.updater = e || B
      }
      E.prototype.isReactComponent = {}
      E.prototype.setState = function (a, b) {
        if ('object' !== typeof a && 'function' !== typeof a && null != a)
          throw Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
          )
        this.updater.enqueueSetState(this, a, b, 'setState')
      }
      E.prototype.forceUpdate = function (a) {
        this.updater.enqueueForceUpdate(this, a, 'forceUpdate')
      }
      function F() {}
      F.prototype = E.prototype
      function G(a, b, e) {
        this.props = a
        this.context = b
        this.refs = D
        this.updater = e || B
      }
      var H = (G.prototype = new F())
      H.constructor = G
      C(H, E.prototype)
      H.isPureReactComponent = !0
      var I = Array.isArray,
        J = Object.prototype.hasOwnProperty,
        K = { current: null },
        L = { key: !0, ref: !0, __self: !0, __source: !0 }
      function M(a, b, e) {
        var d,
          c = {},
          k = null,
          h = null
        if (null != b)
          for (d in (void 0 !== b.ref && (h = b.ref),
          void 0 !== b.key && (k = '' + b.key),
          b))
            J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d])
        var g = arguments.length - 2
        if (1 === g) c.children = e
        else if (1 < g) {
          for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2]
          c.children = f
        }
        if (a && a.defaultProps)
          for (d in ((g = a.defaultProps), g)) void 0 === c[d] && (c[d] = g[d])
        return {
          $$typeof: l,
          type: a,
          key: k,
          ref: h,
          props: c,
          _owner: K.current,
        }
      }
      function N(a, b) {
        return {
          $$typeof: l,
          type: a.type,
          key: b,
          ref: a.ref,
          props: a.props,
          _owner: a._owner,
        }
      }
      function O(a) {
        return 'object' === typeof a && null !== a && a.$$typeof === l
      }
      function escape(a) {
        var b = { '=': '=0', ':': '=2' }
        return (
          '$' +
          a.replace(/[=:]/g, function (a) {
            return b[a]
          })
        )
      }
      var P = /\/+/g
      function Q(a, b) {
        return 'object' === typeof a && null !== a && null != a.key
          ? escape('' + a.key)
          : b.toString(36)
      }
      function R(a, b, e, d, c) {
        var k = typeof a
        if ('undefined' === k || 'boolean' === k) a = null
        var h = !1
        if (null === a) h = !0
        else
          switch (k) {
            case 'string':
            case 'number':
              h = !0
              break
            case 'object':
              switch (a.$$typeof) {
                case l:
                case n:
                  h = !0
              }
          }
        if (h)
          return (
            (h = a),
            (c = c(h)),
            (a = '' === d ? '.' + Q(h, 0) : d),
            I(c)
              ? ((e = ''),
                null != a && (e = a.replace(P, '$&/') + '/'),
                R(c, b, e, '', function (a) {
                  return a
                }))
              : null != c &&
                (O(c) &&
                  (c = N(
                    c,
                    e +
                      (!c.key || (h && h.key === c.key)
                        ? ''
                        : ('' + c.key).replace(P, '$&/') + '/') +
                      a
                  )),
                b.push(c)),
            1
          )
        h = 0
        d = '' === d ? '.' : d + ':'
        if (I(a))
          for (var g = 0; g < a.length; g++) {
            k = a[g]
            var f = d + Q(k, g)
            h += R(k, b, e, f, c)
          }
        else if (((f = A(a)), 'function' === typeof f))
          for (a = f.call(a), g = 0; !(k = a.next()).done; )
            (k = k.value), (f = d + Q(k, g++)), (h += R(k, b, e, f, c))
        else if ('object' === k)
          throw (
            ((b = String(a)),
            Error(
              'Objects are not valid as a React child (found: ' +
                ('[object Object]' === b
                  ? 'object with keys {' + Object.keys(a).join(', ') + '}'
                  : b) +
                '). If you meant to render a collection of children, use an array instead.'
            ))
          )
        return h
      }
      function S(a, b, e) {
        if (null == a) return a
        var d = [],
          c = 0
        R(a, d, '', '', function (a) {
          return b.call(e, a, c++)
        })
        return d
      }
      function T(a) {
        if (-1 === a._status) {
          var b = a._result
          b = b()
          b.then(
            function (b) {
              if (0 === a._status || -1 === a._status)
                (a._status = 1), (a._result = b)
            },
            function (b) {
              if (0 === a._status || -1 === a._status)
                (a._status = 2), (a._result = b)
            }
          )
          ;-1 === a._status && ((a._status = 0), (a._result = b))
        }
        if (1 === a._status) return a._result.default
        throw a._result
      }
      var U = { current: null },
        V = { transition: null },
        W = {
          ReactCurrentDispatcher: U,
          ReactCurrentBatchConfig: V,
          ReactCurrentOwner: K,
        }
      function X() {
        throw Error('act(...) is not supported in production builds of React.')
      }
      exports.Children = {
        map: S,
        forEach: function (a, b, e) {
          S(
            a,
            function () {
              b.apply(this, arguments)
            },
            e
          )
        },
        count: function (a) {
          var b = 0
          S(a, function () {
            b++
          })
          return b
        },
        toArray: function (a) {
          return (
            S(a, function (a) {
              return a
            }) || []
          )
        },
        only: function (a) {
          if (!O(a))
            throw Error(
              'React.Children.only expected to receive a single React element child.'
            )
          return a
        },
      }
      exports.Component = E
      exports.Fragment = p
      exports.Profiler = r
      exports.PureComponent = G
      exports.StrictMode = q
      exports.Suspense = w
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W
      exports.act = X
      exports.cloneElement = function (a, b, e) {
        if (null === a || void 0 === a)
          throw Error(
            'React.cloneElement(...): The argument must be a React element, but you passed ' +
              a +
              '.'
          )
        var d = C({}, a.props),
          c = a.key,
          k = a.ref,
          h = a._owner
        if (null != b) {
          void 0 !== b.ref && ((k = b.ref), (h = K.current))
          void 0 !== b.key && (c = '' + b.key)
          if (a.type && a.type.defaultProps) var g = a.type.defaultProps
          for (f in b)
            J.call(b, f) &&
              !L.hasOwnProperty(f) &&
              (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f])
        }
        var f = arguments.length - 2
        if (1 === f) d.children = e
        else if (1 < f) {
          g = Array(f)
          for (var m = 0; m < f; m++) g[m] = arguments[m + 2]
          d.children = g
        }
        return {
          $$typeof: l,
          type: a.type,
          key: c,
          ref: k,
          props: d,
          _owner: h,
        }
      }
      exports.createContext = function (a) {
        a = {
          $$typeof: u,
          _currentValue: a,
          _currentValue2: a,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }
        a.Provider = { $$typeof: t, _context: a }
        return (a.Consumer = a)
      }
      exports.createElement = M
      exports.createFactory = function (a) {
        var b = M.bind(null, a)
        b.type = a
        return b
      }
      exports.createRef = function () {
        return { current: null }
      }
      exports.forwardRef = function (a) {
        return { $$typeof: v, render: a }
      }
      exports.isValidElement = O
      exports.lazy = function (a) {
        return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T }
      }
      exports.memo = function (a, b) {
        return { $$typeof: x, type: a, compare: void 0 === b ? null : b }
      }
      exports.startTransition = function (a) {
        var b = V.transition
        V.transition = {}
        try {
          a()
        } finally {
          V.transition = b
        }
      }
      exports.unstable_act = X
      exports.useCallback = function (a, b) {
        return U.current.useCallback(a, b)
      }
      exports.useContext = function (a) {
        return U.current.useContext(a)
      }
      exports.useDebugValue = function () {}
      exports.useDeferredValue = function (a) {
        return U.current.useDeferredValue(a)
      }
      exports.useEffect = function (a, b) {
        return U.current.useEffect(a, b)
      }
      exports.useId = function () {
        return U.current.useId()
      }
      exports.useImperativeHandle = function (a, b, e) {
        return U.current.useImperativeHandle(a, b, e)
      }
      exports.useInsertionEffect = function (a, b) {
        return U.current.useInsertionEffect(a, b)
      }
      exports.useLayoutEffect = function (a, b) {
        return U.current.useLayoutEffect(a, b)
      }
      exports.useMemo = function (a, b) {
        return U.current.useMemo(a, b)
      }
      exports.useReducer = function (a, b, e) {
        return U.current.useReducer(a, b, e)
      }
      exports.useRef = function (a) {
        return U.current.useRef(a)
      }
      exports.useState = function (a) {
        return U.current.useState(a)
      }
      exports.useSyncExternalStore = function (a, b, e) {
        return U.current.useSyncExternalStore(a, b, e)
      }
      exports.useTransition = function () {
        return U.current.useTransition()
      }
      exports.version = '18.3.1'

      /***/
    },

    /***/ './node_modules/react/index.js': /***/ (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      if (true) {
        module.exports = __webpack_require__(
          './node_modules/react/cjs/react.production.min.js'
        )
      } else {
      }

      /***/
    },

    /***/ './node_modules/react/jsx-runtime.js': /***/ (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      if (true) {
        /* unused reexport */ __webpack_require__(
          './node_modules/react/cjs/react-jsx-runtime.production.min.js'
        )
      } else {
      }

      /***/
    },

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
      /***/ (module) => {
        var stylesInDOM = []
        function getIndexByIdentifier(identifier) {
          var result = -1
          for (var i = 0; i < stylesInDOM.length; i++) {
            if (stylesInDOM[i].identifier === identifier) {
              result = i
              break
            }
          }
          return result
        }
        function modulesToDom(list, options) {
          var idCountMap = {}
          var identifiers = []
          for (var i = 0; i < list.length; i++) {
            var item = list[i]
            var id = options.base ? item[0] + options.base : item[0]
            var count = idCountMap[id] || 0
            var identifier = ''.concat(id, ' ').concat(count)
            idCountMap[id] = count + 1
            var indexByIdentifier = getIndexByIdentifier(identifier)
            var obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3],
              supports: item[4],
              layer: item[5],
            }
            if (indexByIdentifier !== -1) {
              stylesInDOM[indexByIdentifier].references++
              stylesInDOM[indexByIdentifier].updater(obj)
            } else {
              var updater = addElementStyle(obj, options)
              options.byIndex = i
              stylesInDOM.splice(i, 0, {
                identifier: identifier,
                updater: updater,
                references: 1,
              })
            }
            identifiers.push(identifier)
          }
          return identifiers
        }
        function addElementStyle(obj, options) {
          var api = options.domAPI(options)
          api.update(obj)
          var updater = function updater(newObj) {
            if (newObj) {
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return
              }
              api.update((obj = newObj))
            } else {
              api.remove()
            }
          }
          return updater
        }
        module.exports = function (list, options) {
          options = options || {}
          list = list || []
          var lastIdentifiers = modulesToDom(list, options)
          return function update(newList) {
            newList = newList || []
            for (var i = 0; i < lastIdentifiers.length; i++) {
              var identifier = lastIdentifiers[i]
              var index = getIndexByIdentifier(identifier)
              stylesInDOM[index].references--
            }
            var newLastIdentifiers = modulesToDom(newList, options)
            for (var _i = 0; _i < lastIdentifiers.length; _i++) {
              var _identifier = lastIdentifiers[_i]
              var _index = getIndexByIdentifier(_identifier)
              if (stylesInDOM[_index].references === 0) {
                stylesInDOM[_index].updater()
                stylesInDOM.splice(_index, 1)
              }
            }
            lastIdentifiers = newLastIdentifiers
          }
        }

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
      /***/ (module) => {
        var memo = {}

        /* istanbul ignore next  */
        function getTarget(target) {
          if (typeof memo[target] === 'undefined') {
            var styleTarget = document.querySelector(target)

            // Special case to return head of iframe instead of iframe itself
            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head
              } catch (e) {
                // istanbul ignore next
                styleTarget = null
              }
            }
            memo[target] = styleTarget
          }
          return memo[target]
        }

        /* istanbul ignore next  */
        function insertBySelector(insert, style) {
          var target = getTarget(insert)
          if (!target) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            )
          }
          target.appendChild(style)
        }
        module.exports = insertBySelector

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement('style')
          options.setAttributes(element, options.attributes)
          options.insert(element, options.options)
          return element
        }
        module.exports = insertStyleElement

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0
          if (nonce) {
            styleElement.setAttribute('nonce', nonce)
          }
        }
        module.exports = setAttributesWithoutAttributes

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js': /***/ (
      module
    ) => {
      /* istanbul ignore next  */
      function apply(styleElement, options, obj) {
        var css = ''
        if (obj.supports) {
          css += '@supports ('.concat(obj.supports, ') {')
        }
        if (obj.media) {
          css += '@media '.concat(obj.media, ' {')
        }
        var needLayer = typeof obj.layer !== 'undefined'
        if (needLayer) {
          css += '@layer'.concat(
            obj.layer.length > 0 ? ' '.concat(obj.layer) : '',
            ' {'
          )
        }
        css += obj.css
        if (needLayer) {
          css += '}'
        }
        if (obj.media) {
          css += '}'
        }
        if (obj.supports) {
          css += '}'
        }
        var sourceMap = obj.sourceMap
        if (sourceMap && typeof btoa !== 'undefined') {
          css += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
            ' */'
          )
        }

        // For old IE
        /* istanbul ignore if  */
        options.styleTagTransform(css, styleElement, options.options)
      }
      function removeStyleElement(styleElement) {
        // istanbul ignore if
        if (styleElement.parentNode === null) {
          return false
        }
        styleElement.parentNode.removeChild(styleElement)
      }

      /* istanbul ignore next  */
      function domAPI(options) {
        if (typeof document === 'undefined') {
          return {
            update: function update() {},
            remove: function remove() {},
          }
        }
        var styleElement = options.insertStyleElement(options)
        return {
          update: function update(obj) {
            apply(styleElement, options, obj)
          },
          remove: function remove() {
            removeStyleElement(styleElement)
          },
        }
      }
      module.exports = domAPI

      /***/
    },

    /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
      /***/ (module) => {
        /* istanbul ignore next  */
        function styleTagTransform(css, styleElement) {
          if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = css
          } else {
            while (styleElement.firstChild) {
              styleElement.removeChild(styleElement.firstChild)
            }
            styleElement.appendChild(document.createTextNode(css))
          }
        }
        module.exports = styleTagTransform

        /***/
      },

    /******/
  }
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {}
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId]
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    })
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    )
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ ;(() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module['default']
          : /******/ () => module
      /******/ __webpack_require__.d(getter, { a: getter })
      /******/ return getter
      /******/
    }
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ ;(() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          })
          /******/
        }
        /******/
      }
      /******/
    }
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ ;(() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop)
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ ;(() => {
    /******/ __webpack_require__.nc = undefined
    /******/
  })()
  /******/
  /************************************************************************/
  var __webpack_exports__ = {}

  // UNUSED EXPORTS: Accordion, Content, ContentLink, Details, Summary

  // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
  var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js') // ./src/accordion/components/Summary.tsx
  const Summary_Summary = ({ children }) => {
    return _jsx('summary', { children: children })
  }
  /* harmony default export */ const components_Summary =
    /* unused pure expression or super */ null && Summary_Summary // ./src/accordion/components/Content.tsx

  const Content_Content = ({ children }) => {
    return _jsx('p', { children: children })
  }
  /* harmony default export */ const components_Content =
    /* unused pure expression or super */ null && Content_Content

  // EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
  var injectStylesIntoStyleTag = __webpack_require__(
    './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
  )
  var injectStylesIntoStyleTag_default = /*#__PURE__*/ __webpack_require__.n(
    injectStylesIntoStyleTag
  )
  // EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
  var styleDomAPI = __webpack_require__(
    './node_modules/style-loader/dist/runtime/styleDomAPI.js'
  )
  var styleDomAPI_default = /*#__PURE__*/ __webpack_require__.n(styleDomAPI)
  // EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
  var insertBySelector = __webpack_require__(
    './node_modules/style-loader/dist/runtime/insertBySelector.js'
  )
  var insertBySelector_default =
    /*#__PURE__*/ __webpack_require__.n(insertBySelector)
  // EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
  var setAttributesWithoutAttributes = __webpack_require__(
    './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'
  )
  var setAttributesWithoutAttributes_default =
    /*#__PURE__*/ __webpack_require__.n(setAttributesWithoutAttributes)
  // EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
  var insertStyleElement = __webpack_require__(
    './node_modules/style-loader/dist/runtime/insertStyleElement.js'
  )
  var insertStyleElement_default =
    /*#__PURE__*/ __webpack_require__.n(insertStyleElement)
  // EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
  var styleTagTransform = __webpack_require__(
    './node_modules/style-loader/dist/runtime/styleTagTransform.js'
  )
  var styleTagTransform_default =
    /*#__PURE__*/ __webpack_require__.n(styleTagTransform)
  // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/accordion/components/accordion.css
  var accordion = __webpack_require__(
    './node_modules/css-loader/dist/cjs.js!./src/accordion/components/accordion.css'
  ) // ./src/accordion/components/accordion.css
  var options = {}

  options.styleTagTransform = styleTagTransform_default()
  options.setAttributes = setAttributesWithoutAttributes_default()
  options.insert = insertBySelector_default().bind(null, 'head')
  options.domAPI = styleDomAPI_default()
  options.insertStyleElement = insertStyleElement_default()

  var update = injectStylesIntoStyleTag_default()(
    accordion /* default */.A,
    options
  )

  /* harmony default export */ const components_accordion =
    accordion /* default */.A && accordion /* default */.A.locals
      ? accordion /* default */.A.locals
      : undefined // ./src/accordion/components/Details.tsx

  const Details_Details = ({ children, ...rest }) => {
    return _jsx('details', {
      ...rest,
      className: 'accordion',
      children: children,
    })
  }
  /* harmony default export */ const components_Details =
    /* unused pure expression or super */ null && Details_Details // ./src/accordion/components/compose/Accordion.tsx

  const Accordion = ({ summary, children, ...htmlDetailsProps }) => {
    return _jsxs(Details, {
      ...htmlDetailsProps,
      children: [
        _jsx(Summary, { children: summary }),
        _jsx(Content, { children: children }),
      ],
    })
  }
  /* harmony default export */ const compose_Accordion =
    /* unused pure expression or super */ null && Accordion // ./src/accordion/components/ContentLink.tsx

  const ContentLink = ({ href, children }) => {
    return _jsx('p', {
      children: _jsx('a', { href: href, children: children }),
    })
  }
  /* harmony default export */ const components_ContentLink =
    /* unused pure expression or super */ null && ContentLink // ./src/accordion/index.ts // ./src/index.ts

  /******/
})()
//# sourceMappingURL=index.js.map
