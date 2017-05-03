!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('react')))
    : 'function' == typeof define && define.amd
        ? define(['react'], t)
        : 'object' == typeof exports
            ? (exports.LazyReact = t(require('react')))
            : (e.LazyReact = t(e.React))
})(this, function(e) {
  return (function(e) {
    function t(r) {
      if (n[r]) return n[r].exports
      var o = (n[r] = { i: r, l: !1, exports: {} })
      return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports
    }
    var n = {}
    return (t.m = e), (t.c = n), (t.i = function(e) {
      return e
    }), (t.d = function(e, n, r) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: r
        })
    }), (t.n = function(e) {
      var n = e && e.__esModule
        ? function() {
            return e.default
          }
        : function() {
            return e
          }
      return t.d(n, 'a', n), n
    }), (t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }), (t.p = ''), t((t.s = 6))
  })([
    function(t, n) {
      t.exports = e
    },
    function(e, t, n) {
      'use strict'
      ;(function(e) {
        function r(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        }
        function o(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
        }
        function i(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })), t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t))
        }
        var u = n(0),
          a = (n.n(u), (function() {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n]
                ;(r.enumerable =
                  r.enumerable || !1), (r.configurable = !0), 'value' in r &&
                  (r.writable = !0), Object.defineProperty(e, r.key, r)
              }
            }
            return function(t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t
            }
          })()),
          s =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            },
          c = function(e) {
            var t = e.offset, n = e.top, r = e.left
            return (
              window.scrollY + window.innerHeight + t > n &&
              window.scrollX + window.innerWidth + t > r
            )
          },
          l = function(e) {
            var t = e.element.domNode,
              n = t.getBoundingClientRect(),
              r = n.top,
              o = n.left,
              i = n.right
            return s({}, e, { top: r, left: o, right: i })
          },
          f = (function(e) {
            function t(e) {
              r(this, t)
              var n = o(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
              )
              return (n.state = {
                link: '',
                visible: !1
              }), (n.makeItVisible = n.makeItVisible.bind(n)), n
            }
            return i(t, e), a(t, [
              {
                key: 'makeItVisible',
                value: function() {
                  this.setState({ link: this.props.link, visible: !0 })
                }
              },
              {
                key: 'componentDidMount',
                value: function() {
                  t.addElement(this)
                }
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  t.removeElementFromList(this)
                }
              }
            ]), t
          })(u.Component)
        ;(f.elements = []), (f.eventHandler = function() {
          if (0 === f.elements.length) f.removeScrollHandler()
          else {
            for (var e = [], t = 0; t < f.elements.length; t++)
              c(f.elements[t]) &&
                (e.push(t), f.elements[t].element.makeItVisible())
            e.length > 0 &&
              (f.elements = f.elements.filter(function(t, n) {
                return !e.includes(n)
              })), (f.elements = f.elements.map(function(e) {
              return l(e)
            })), (f.isListenerAttached = window.requestAnimationFrame(
              f.eventHandler
            ))
          }
        }), (f.addElement = function(e) {
          var t = e.domNode.getBoundingClientRect(),
            n = t.top,
            r = t.left,
            o = t.right
          f.elements.push({
            element: e,
            top: n,
            left: r,
            right: o,
            offset: e.props.offset || 100
          }), 'function' != typeof f.isListenerAttached &&
            (f.isListenerAttached = window.requestAnimationFrame(
              f.eventHandler
            ))
        }), (f.removeScrollHandler = function() {
          window.cancelAnimationFrame(f.isListenerAttached)
        }), (f.removeElementFromList = function(e) {
          f.elements = f.elements.filter(function(t) {
            return t.element !== e
          })
        }), (f.isListenerAttached = !1), 'production' === !e.NODE_ENV &&
          (f.propTypes = { link: u.PropTypes.string.isRequired }), (t.a = f)
      }.call(t, n(7)))
    },
    function(e, t, n) {
      'use strict'
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      function i(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })), t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t))
      }
      var u = n(0),
        a = n.n(u),
        s = n(1),
        c =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        l = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable =
                r.enumerable || !1), (r.configurable = !0), 'value' in r &&
                (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })(),
        f = (function(e) {
          function t(e) {
            return r(this, t), o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
            )
          }
          return i(t, e), l(t, [
            {
              key: 'render',
              value: function() {
                var e = this
                return a.a.createElement('div', {
                  className: this.props.className,
                  style: this.style,
                  ref: function(t) {
                    return (e.domNode = t)
                  }
                })
              }
            },
            {
              key: 'componentWillMount',
              value: function() {
                this.style = c(
                  { backgroundImage: 'url(' + this.state.link + ')' },
                  this.props.style
                )
              }
            },
            {
              key: 'componentWillUpdate',
              value: function(e, t) {
                this.style = c({}, this.style, {
                  backgroundImage: 'url(' + t.link + ')'
                })
              }
            }
          ]), t
        })(s.a)
      ;(t.a = f), (f.defaultProps = { className: '', style: {} })
    },
    function(e, t, n) {
      'use strict'
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      function i(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })), t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t))
      }
      var u = n(0),
        a = n.n(u),
        s = n(1),
        c = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable =
                r.enumerable || !1), (r.configurable = !0), 'value' in r &&
                (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })(),
        l = (function(e) {
          function t(e) {
            return r(this, t), o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
            )
          }
          return i(t, e), c(t, [
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.state.visible
                    ? this.props.children
                    : a.a.createElement('div', null)
                return a.a.createElement(
                  'div',
                  {
                    style: this.style,
                    className: this.props.className,
                    ref: function(t) {
                      return (e.domNode = t)
                    }
                  },
                  t
                )
              }
            },
            {
              key: 'componentWillMount',
              value: function() {
                ;(this.style = Object.assign({}, this.props.style)), this.state
                  .link ||
                  this.props.className ||
                  this.style.height ||
                  (this.style.height = '300px')
              }
            }
          ]), t
        })(s.a)
      ;(t.a = l), (l.defaultProps = { style: {}, className: '' })
    },
    function(e, t, n) {
      'use strict'
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      function i(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })), t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t))
      }
      var u = n(0),
        a = n.n(u),
        s = n(1),
        c =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        l = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable =
                r.enumerable || !1), (r.configurable = !0), 'value' in r &&
                (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })(),
        f = (function(e) {
          function t(e) {
            return r(this, t), o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
            )
          }
          return i(t, e), l(t, [
            {
              key: 'render',
              value: function() {
                var e = this
                return a.a.createElement('iframe', {
                  height: this.props.height,
                  scrolling: this.props.scrolling,
                  src: this.state.link,
                  frameBorder: this.props.frameBorder,
                  allowTransparency: this.props.allowTransparency,
                  allowFullScreen: this.props.allowFullScreen,
                  style: this.style,
                  ref: function(t) {
                    return (e.domNode = t)
                  }
                })
              }
            },
            {
              key: 'componentWillMount',
              value: function() {
                this.style = c({ minWidth: '100%' }, this.props.style)
              }
            }
          ]), t
        })(s.a)
      ;(t.a = f), (f.defaultProps = {
        height: '500',
        scrolling: 'no',
        frameBorder: 'no',
        allowTransparency: 'true',
        allowFullScreen: 'true'
      })
    },
    function(e, t, n) {
      'use strict'
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      function i(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })), t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t))
      }
      var u = n(0),
        a = n.n(u),
        s = n(1),
        c =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        l = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable =
                r.enumerable || !1), (r.configurable = !0), 'value' in r &&
                (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })(),
        f = (function(e) {
          function t(e) {
            return r(this, t), o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
            )
          }
          return i(t, e), l(t, [
            {
              key: 'render',
              value: function() {
                var e = this
                return a.a.createElement('img', {
                  src: this.state.link,
                  alt: this.props.alt,
                  style: this.style,
                  className: this.props.className,
                  ref: function(t) {
                    return (e.domNode = t)
                  }
                })
              }
            },
            {
              key: 'componentWillMount',
              value: function() {
                '' === this.props.className &&
                  !1 === this.props.preserveAspect &&
                  (this.style = c(
                    { minHeight: '300px', minWidth: '300px' },
                    this.props.style
                  ))
              }
            }
          ]), t
        })(s.a)
      ;(t.a = f), (f.defaultProps = {
        style: {},
        className: '',
        preserveAspect: !0
      })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = n(2), o = n(5), i = n(4), u = n(3)
      n.d(t, 'LazyBackgroundImage', function() {
        return r.a
      }), n.d(t, 'LazyImage', function() {
        return o.a
      }), n.d(t, 'LazyFrame', function() {
        return i.a
      }), n.d(t, 'LazyComponent', function() {
        return u.a
      })
    },
    function(e, t) {
      function n() {
        throw new Error('setTimeout has not been defined')
      }
      function r() {
        throw new Error('clearTimeout has not been defined')
      }
      function o(e) {
        if (l === setTimeout) return setTimeout(e, 0)
        if ((l === n || !l) && setTimeout)
          return (l = setTimeout), setTimeout(e, 0)
        try {
          return l(e, 0)
        } catch (t) {
          try {
            return l.call(null, e, 0)
          } catch (t) {
            return l.call(this, e, 0)
          }
        }
      }
      function i(e) {
        if (f === clearTimeout) return clearTimeout(e)
        if ((f === r || !f) && clearTimeout)
          return (f = clearTimeout), clearTimeout(e)
        try {
          return f(e)
        } catch (t) {
          try {
            return f.call(null, e)
          } catch (t) {
            return f.call(this, e)
          }
        }
      }
      function u() {
        m &&
          h &&
          ((m = !1), h.length ? (y = h.concat(y)) : (b = -1), y.length && a())
      }
      function a() {
        if (!m) {
          var e = o(u)
          m = !0
          for (var t = y.length; t; ) {
            for ((h = y), (y = []); ++b < t; )
              h && h[b].run()
            ;(b = -1), (t = y.length)
          }
          ;(h = null), (m = !1), i(e)
        }
      }
      function s(e, t) {
        ;(this.fun = e), (this.array = t)
      }
      function c() {}
      var l, f, p = (e.exports = {})
      !(function() {
        try {
          l = 'function' == typeof setTimeout ? setTimeout : n
        } catch (e) {
          l = n
        }
        try {
          f = 'function' == typeof clearTimeout ? clearTimeout : r
        } catch (e) {
          f = r
        }
      })()
      var h, y = [], m = !1, b = -1
      ;(p.nextTick = function(e) {
        var t = new Array(arguments.length - 1)
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n]
        y.push(new s(e, t)), 1 !== y.length || m || o(a)
      }), (s.prototype.run = function() {
        this.fun.apply(null, this.array)
      }), (p.title = 'browser'), (p.browser = !0), (p.env = {}), (p.argv = [
      ]), (p.version = ''), (p.versions = {
      }), (p.on = c), (p.addListener = c), (p.once = c), (p.off = c), (p.removeListener = c), (p.removeAllListeners = c), (p.emit = c), (p.binding = function(
        e
      ) {
        throw new Error('process.binding is not supported')
      }), (p.cwd = function() {
        return '/'
      }), (p.chdir = function(e) {
        throw new Error('process.chdir is not supported')
      }), (p.umask = function() {
        return 0
      })
    }
  ])
})
