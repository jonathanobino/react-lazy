!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.LazyReact=t(require("react")):e.LazyReact=t(e.React)}(self,(e=>(()=>{"use strict";var t={787:t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{r.r(o),r.d(o,{LazyBackgroundImage:()=>n,LazyComponent:()=>i,LazyFrame:()=>a,LazyImage:()=>l,default:()=>s});var e=r(787),t=r.n(e);function n(n){let[r,o,l]=s(n);const[a,i]=(0,e.useState)(Object.assign({backgroundImage:`url(${o})`},n.style));return(0,e.useEffect)((()=>{i(Object.assign({backgroundImage:`url(${o})`},n.style))}),[o,l]),t().createElement("div",{className:n.className,style:a,ref:e=>{r(e)}},n.children)}function l(e){const[n,r]=s(e);return t().createElement("div",{ref:e=>{n(e)}},t().createElement("img",{src:r,alt:e.alt,style:e.style,className:e.className}))}function a(e){let[n,r]=s(e);return t().createElement("iframe",Object.assign({height:e.height||"500",scrolling:e.scrolling||"no",src:r,frameBorder:e.frameBorder||"no",allowFullScreen:e.allowFullScreen||!0,style:e.style||{},ref:e=>{n(e)}},e))}function i(e){const[n,r,o]=s(e);return o?t().createElement("div",null,e.children):t().createElement("div",{ref:e=>{n(e)},style:Object.assign({height:"300px",width:"300px"},e.style)})}function s(t){const[n,r]=(0,e.useState)(""),[o,l]=(0,e.useState)(!1);let[a,i]=(0,e.useState)(null);const s=(0,e.useMemo)((()=>({element:a,makeItVisible:d,offset:t.offset||100})),[a,t]),c=(0,e.useCallback)((e=>{null!==e&&i(e)}),[]);function d(){r((()=>t.link)),l((()=>!0))}return(0,e.useEffect)((()=>(null!==a&&u.addElement(s),()=>u.removeElementFromList(s))),[a]),[c,n,o]}let c=[];const u={isInViewPort:({offset:e,top:t,left:n})=>t<window.innerHeight+e&&n<window.innerWidth+e,calculateNewPosition:e=>{var t;const{top:n,left:r}=(null===(t=e.element)||void 0===t?void 0:t.getBoundingClientRect())||{top:0,left:0};return Object.assign(Object.assign({},e),{top:n,left:r})},addElement:function(e){c.push(e),0===u.isListenerAttached&&(u.isListenerAttached=window.requestAnimationFrame(u.eventHandler))},eventHandler:function(){0===c.length?u.removeScrollHandler():(c.forEach(((e,t)=>{u.isInViewPort(u.calculateNewPosition(e))&&(e.makeItVisible(),u.removeElementFromList(e))})),u.isListenerAttached=window.requestAnimationFrame(u.eventHandler))},removeScrollHandler:function(){window.cancelAnimationFrame(u.isListenerAttached),u.isListenerAttached=0},removeElementFromList:function(e){c=c.filter((t=>t!==e))},isListenerAttached:0}})(),o})()));