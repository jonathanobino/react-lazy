var e,t=require("react/jsx-runtime"),n=require("react");function r(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function l(e){const[r,l,i]=a(e),[o,s]=(0,n.useState)({backgroundImage:`url(${l})`,...e.style});return(0,n.useEffect)((()=>{s({backgroundImage:`url(${l})`,...e.style})}),[l,i]),(0,t.jsx)("div",{className:e.className,style:o,ref:e=>{r(e)},children:e.children})}function i(e){const[n,r]=a(e);return(0,t.jsx)("div",{ref:e=>{n(e)},children:(0,t.jsx)("img",{src:r,alt:e.alt,style:e.style,className:e.className})})}function o(e){const[n,r]=a(e);return(0,t.jsx)("iframe",{height:e.height||"500",scrolling:e.scrolling||"no",src:r,frameBorder:e.frameBorder||"no",allowFullScreen:e.allowFullScreen||!0,style:e.style||{},ref:e=>{n(e)},...e})}function s(e){const[n,r,l]=a(e);return l?(0,t.jsx)("div",{children:e.children}):(0,t.jsx)("div",{ref:e=>{n(e)},style:{height:"300px",width:"300px",...e.style}})}function a(e){const[t,r]=(0,n.useState)(""),[l,i]=(0,n.useState)(!1),[o,s]=(0,n.useState)(null),a=(0,n.useMemo)((()=>({element:o,makeItVisible:d,offset:e.offset||100})),[o,e]),c=(0,n.useCallback)((e=>{null!==e&&s(e)}),[]);function d(){e.link&&r((()=>e.link)),i((()=>!0))}return(0,n.useEffect)((()=>(null!==o&&u.addElement(a),()=>u.removeElementFromList(a))),[o]),[c,t,l]}e=module.exports,Object.defineProperty(e,"__esModule",{value:!0,configurable:!0}),r(module.exports,"default",(()=>a)),r(module.exports,"LazyBackgroundImage",(()=>l)),r(module.exports,"LazyImage",(()=>i)),r(module.exports,"LazyFrame",(()=>o)),r(module.exports,"LazyComponent",(()=>s));let c=[];const u={isInViewPort:({offset:e,top:t,left:n})=>t<window.innerHeight+e&&n<window.innerWidth+e,calculateNewPosition:e=>{const{top:t,left:n}=e.element?.getBoundingClientRect()||{top:0,left:0};return{...e,top:t,left:n}},addElement:function(e){c.push(e),0===u.isListenerAttached&&(u.isListenerAttached=window.requestAnimationFrame(u.eventHandler))},eventHandler:function(){0===c.length?u.removeScrollHandler():(c.forEach((e=>{u.isInViewPort(u.calculateNewPosition(e))&&(e.makeItVisible(),u.removeElementFromList(e))})),u.isListenerAttached=window.requestAnimationFrame(u.eventHandler))},removeScrollHandler:function(){window.cancelAnimationFrame(u.isListenerAttached),u.isListenerAttached=0},removeElementFromList:function(e){c=c.filter((t=>t!==e))},isListenerAttached:0};
//# sourceMappingURL=index.js.map
