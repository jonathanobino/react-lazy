!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.LazyReact=e(require("react")):t.LazyReact=e(t.React)}(window,(function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(e,n){e.exports=t},function(t,e,n){"use strict";(function(t){var r=n(0);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(f,t);var e,n,r,o=c(f);function f(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(e=o.call(this,t)).state={link:"",visible:!1},e.makeItVisible=e.makeItVisible.bind(l(e)),e}return e=f,(n=[{key:"makeItVisible",value:function(){this.setState({link:this.props.link,visible:!0})}},{key:"componentDidMount",value:function(){f.addElement(this)}},{key:"componentWillUnmount",value:function(){f.removeElementFromList(this)}}])&&i(e.prototype,n),r&&i(e,r),f}(r.Component);a.elements=[],a.eventHandler=function(){if(0===a.elements.length)a.removeScrollHandler();else{for(var t=[],e=0;e<a.elements.length;e++)n=a.elements[e],r=void 0,o=void 0,i=void 0,r=n.offset,o=n.top,i=n.left,window.scrollY+window.innerHeight+r>o&&window.scrollX+window.innerWidth+r>i&&(t.push(e),a.elements[e].element.makeItVisible());t.length>0&&(a.elements=a.elements.filter((function(e,n){return!t.includes(n)}))),a.elements=a.elements.map((function(t){return function(t){var e=t.element.domNode.getBoundingClientRect(),n=e.top,r=e.left,o=e.right;return Object.assign({},t,{top:n,left:r,right:o})}(t)})),a.isListenerAttached=window.requestAnimationFrame(a.eventHandler)}var n,r,o,i},a.addElement=function(t){var e=t.domNode.getBoundingClientRect(),n=e.top,r=e.left,o=e.right;a.elements.push({element:t,top:n,left:r,right:o,offset:t.props.offset||100}),"function"!=typeof a.isListenerAttached&&(a.isListenerAttached=window.requestAnimationFrame(a.eventHandler))},a.removeScrollHandler=function(){window.cancelAnimationFrame(a.isListenerAttached)},a.removeElementFromList=function(t){a.elements=a.elements.filter((function(e){return e.element!==t}))},a.isListenerAttached=!1,"production"===!t.NODE_ENV&&(a.propTypes={link:r.PropTypes.string.isRequired}),e.a=a}).call(this,n(2))},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var f,l=[],s=!1,a=-1;function p(){s&&f&&(s=!1,f.length?l=f.concat(l):a=-1,l.length&&y())}function y(){if(!s){var t=c(p);s=!0;for(var e=l.length;e;){for(f=l,l=[];++a<e;)f&&f[a].run();a=-1,e=l.length}f=null,s=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new h(t,e)),1!==l.length||s||c(y)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){"use strict";n.r(e),n.d(e,"LazyBackgroundImage",(function(){return p})),n.d(e,"LazyImage",(function(){return g})),n.d(e,"LazyFrame",(function(){return R})),n.d(e,"LazyComponent",(function(){return A}));var r=n(0),o=n.n(r),i=n(1);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(u,t);var e,n,r,i=l(u);function u(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,t)}return e=u,(n=[{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:this.props.className,style:this.style,ref:function(e){return t.domNode=e}})}},{key:"componentWillMount",value:function(){this.style=Object.assign({backgroundImage:"url(".concat(this.state.link,")")},this.props.style)}},{key:"componentWillUpdate",value:function(t,e){this.style=Object.assign({},this.style,{backgroundImage:"url(".concat(e.link,")")})}}])&&c(e.prototype,n),r&&c(e,r),u}(i.a);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v(t);if(e){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}p.defaultProps={className:"",style:{}};var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(u,t);var e,n,r,i=b(u);function u(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,t)}return e=u,(n=[{key:"render",value:function(){var t=this;return o.a.createElement("img",{src:this.state.link,alt:this.props.alt,style:this.style,className:this.props.className,ref:function(e){return t.domNode=e}})}},{key:"componentWillMount",value:function(){""===this.props.className&&!1===this.props.preserveAspect&&(this.style=Object.assign({minHeight:"300px",minWidth:"300px"},this.props.style))}}])&&h(e.prototype,n),r&&h(e,r),u}(i.a);function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=P(t);if(e){var o=P(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return S(this,n)}}function S(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}g.defaultProps={style:{},className:"",preserveAspect:!0};var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(u,t);var e,n,r,i=_(u);function u(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,t)}return e=u,(n=[{key:"render",value:function(){var t=this;return o.a.createElement("iframe",{height:this.props.height,scrolling:this.props.scrolling,src:this.state.link,frameBorder:this.props.frameBorder,allowTransparency:this.props.allowTransparency,allowFullScreen:this.props.allowFullScreen,style:this.style,ref:function(e){return t.domNode=e}})}},{key:"componentWillMount",value:function(){this.style=Object.assign({minWidth:"100%"},this.props.style)}}])&&O(e.prototype,n),r&&O(e,r),u}(i.a);function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=L(t);if(e){var o=L(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return N(this,n)}}function N(t,e){return!e||"object"!==k(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function L(t){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}R.defaultProps={height:"500",scrolling:"no",frameBorder:"no",allowTransparency:"true",allowFullScreen:"true"};var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(u,t);var e,n,r,i=x(u);function u(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,t)}return e=u,(n=[{key:"render",value:function(){var t=this,e=this.state.visible?this.props.children:o.a.createElement("div",null);return o.a.createElement("div",{style:this.style,className:this.props.className,ref:function(e){return t.domNode=e}},e)}},{key:"componentWillMount",value:function(){this.style=Object.assign({},this.props.style),this.state.link||this.props.className||this.style.height||(this.style.height="300px")}}])&&T(e.prototype,n),r&&T(e,r),u}(i.a);A.defaultProps={style:{},className:""}}])}));
//# sourceMappingURL=index.js.map