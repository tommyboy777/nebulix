import{_ as wt}from"./_plugin-vue_export-helper.c27b6911.js";import{r as D,o as ut,c as bt,a as lt,e as xt}from"./runtime-core.esm-bundler.d90b5eb8.js";var h=function(){return h=Object.assign||function(t){for(var n,o=1,s=arguments.length;o<s;o++){n=arguments[o];for(var v in n)Object.prototype.hasOwnProperty.call(n,v)&&(t[v]=n[v])}return t},h.apply(this,arguments)};typeof window<"u"&&(window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),typeof window.CustomEvent!="function"&&(window.CustomEvent=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:null};var o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),o}));function dt(e,t){for(var n=e.length;n--;)if(e[n].pointerId===t.pointerId)return n;return-1}function nt(e,t){var n;if(t.touches){n=0;for(var o=0,s=t.touches;o<s.length;o++){var v=s[o];v.pointerId=n++,nt(e,v)}return}n=dt(e,t),n>-1&&e.splice(n,1),e.push(t)}function Et(e,t){if(t.touches){for(;e.length;)e.pop();return}var n=dt(e,t);n>-1&&e.splice(n,1)}function ft(e){e=e.slice(0);for(var t=e.pop(),n;n=e.pop();)t={clientX:(n.clientX-t.clientX)/2+t.clientX,clientY:(n.clientY-t.clientY)/2+t.clientY};return t}function K(e){if(e.length<2)return 0;var t=e[0],n=e[1];return Math.sqrt(Math.pow(Math.abs(n.clientX-t.clientX),2)+Math.pow(Math.abs(n.clientY-t.clientY),2))}var M={down:"mousedown",move:"mousemove",up:"mouseup mouseleave"};typeof window<"u"&&(typeof window.PointerEvent=="function"?M={down:"pointerdown",move:"pointermove",up:"pointerup pointerleave pointercancel"}:typeof window.TouchEvent=="function"&&(M={down:"touchstart",move:"touchmove",up:"touchend touchcancel"}));function Q(e,t,n,o){M[e].split(" ").forEach(function(s){t.addEventListener(s,n,o)})}function H(e,t,n){M[e].split(" ").forEach(function(o){t.removeEventListener(o,n)})}var Pt=typeof document<"u"&&!!document.documentMode,tt;function zt(){return tt||(tt=document.createElement("div").style)}var st=["webkit","moz","ms"],I={};function at(e){if(I[e])return I[e];var t=zt();if(e in t)return I[e]=e;for(var n=e[0].toUpperCase()+e.slice(1),o=st.length;o--;){var s="".concat(st[o]).concat(n);if(s in t)return I[e]=s}}function B(e,t){return parseFloat(t[at(e)])||0}function G(e,t,n){n===void 0&&(n=window.getComputedStyle(e));var o=t==="border"?"Width":"";return{left:B("".concat(t,"Left").concat(o),n),right:B("".concat(t,"Right").concat(o),n),top:B("".concat(t,"Top").concat(o),n),bottom:B("".concat(t,"Bottom").concat(o),n)}}function E(e,t,n){e.style[at(t)]=n}function Mt(e,t){var n=at("transform");E(e,"transition","".concat(n," ").concat(t.duration,"ms ").concat(t.easing))}function St(e,t,n){var o=t.x,s=t.y,v=t.scale,p=t.isSVG;if(E(e,"transform","scale(".concat(v,") translate(").concat(o,"px, ").concat(s,"px)")),p&&Pt){var g=window.getComputedStyle(e).getPropertyValue("transform");e.setAttribute("transform",g)}}function et(e){var t=e.parentNode,n=window.getComputedStyle(e),o=window.getComputedStyle(t),s=e.getBoundingClientRect(),v=t.getBoundingClientRect();return{elem:{style:n,width:s.width,height:s.height,top:s.top,bottom:s.bottom,left:s.left,right:s.right,margin:G(e,"margin",n),border:G(e,"border",n)},parent:{style:o,width:v.width,height:v.height,top:v.top,bottom:v.bottom,left:v.left,right:v.right,padding:G(t,"padding",o),border:G(t,"border",o)}}}function Ot(e){var t=e.ownerDocument,n=e.parentNode;return t&&n&&t.nodeType===9&&n.nodeType===1&&t.documentElement.contains(n)}function At(e){return(e.getAttribute("class")||"").trim()}function Ct(e,t){return e.nodeType===1&&" ".concat(At(e)," ").indexOf(" ".concat(t," "))>-1}function Xt(e,t){for(var n=e;n!=null;n=n.parentNode)if(Ct(n,t.excludeClass)||t.exclude.indexOf(n)>-1)return!0;return!1}var Yt=/^http:[\w\.\/]+svg$/;function _t(e){return Yt.test(e.namespaceURI)&&e.nodeName.toLowerCase()!=="svg"}function Tt(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}var vt={animate:!1,canvas:!1,cursor:"move",disablePan:!1,disableZoom:!1,disableXAxis:!1,disableYAxis:!1,duration:200,easing:"ease-in-out",exclude:[],excludeClass:"panzoom-exclude",handleStartEvent:function(e){e.preventDefault(),e.stopPropagation()},maxScale:4,minScale:.125,overflow:"hidden",panOnlyWhenZoomed:!1,pinchAndPan:!1,relative:!1,setTransform:St,startX:0,startY:0,startScale:1,step:.3,touchAction:"none"};function rt(e,t){if(!e)throw new Error("Panzoom requires an element as an argument");if(e.nodeType!==1)throw new Error("Panzoom requires an element with a nodeType of 1");if(!Ot(e))throw new Error("Panzoom should be called on elements that have been attached to the DOM");t=h(h({},vt),t);var n=_t(e),o=e.parentNode;o.style.overflow=t.overflow,o.style.userSelect="none",o.style.touchAction=t.touchAction,(t.canvas?o:e).style.cursor=t.cursor,e.style.userSelect="none",e.style.touchAction=t.touchAction,E(e,"transformOrigin",typeof t.origin=="string"?t.origin:n?"0 0":"50% 50%");function s(){o.style.overflow="",o.style.userSelect="",o.style.touchAction="",o.style.cursor="",e.style.cursor="",e.style.userSelect="",e.style.touchAction="",E(e,"transformOrigin","")}function v(r){r===void 0&&(r={});for(var i in r)r.hasOwnProperty(i)&&(t[i]=r[i]);(r.hasOwnProperty("cursor")||r.hasOwnProperty("canvas"))&&(o.style.cursor=e.style.cursor="",(t.canvas?o:e).style.cursor=t.cursor),r.hasOwnProperty("overflow")&&(o.style.overflow=r.overflow),r.hasOwnProperty("touchAction")&&(o.style.touchAction=r.touchAction,e.style.touchAction=r.touchAction)}var p=0,g=0,d=1,S=!1;C(t.startScale,{animate:!1,force:!0}),setTimeout(function(){V(t.startX,t.startY,{animate:!1,force:!0})});function O(r,i,u){if(!u.silent){var f=new CustomEvent(r,{detail:i});e.dispatchEvent(f)}}function W(r,i,u){var f={x:p,y:g,scale:d,isSVG:n,originalEvent:u};return requestAnimationFrame(function(){typeof i.animate=="boolean"&&(i.animate?Mt(e,i):E(e,"transition","none")),i.setTransform(e,f,i),O(r,f,i),O("panzoomchange",f,i)}),f}function L(r,i,u,f){var a=h(h({},t),f),l={x:p,y:g,opts:a};if(!a.force&&(a.disablePan||a.panOnlyWhenZoomed&&d===a.startScale))return l;if(r=parseFloat(r),i=parseFloat(i),a.disableXAxis||(l.x=(a.relative?p:0)+r),a.disableYAxis||(l.y=(a.relative?g:0)+i),a.contain){var c=et(e),m=c.elem.width/d,w=c.elem.height/d,P=m*u,z=w*u,b=(P-m)/2,x=(z-w)/2;if(a.contain==="inside"){var j=(-c.elem.margin.left-c.parent.padding.left+b)/u,$=(c.parent.width-P-c.parent.padding.left-c.elem.margin.left-c.parent.border.left-c.parent.border.right+b)/u;l.x=Math.max(Math.min(l.x,$),j);var k=(-c.elem.margin.top-c.parent.padding.top+x)/u,J=(c.parent.height-z-c.parent.padding.top-c.elem.margin.top-c.parent.border.top-c.parent.border.bottom+x)/u;l.y=Math.max(Math.min(l.y,J),k)}else if(a.contain==="outside"){var j=(-(P-c.parent.width)-c.parent.padding.left-c.parent.border.left-c.parent.border.right+b)/u,$=(b-c.parent.padding.left)/u;l.x=Math.max(Math.min(l.x,$),j);var k=(-(z-c.parent.height)-c.parent.padding.top-c.parent.border.top-c.parent.border.bottom+x)/u,J=(x-c.parent.padding.top)/u;l.y=Math.max(Math.min(l.y,J),k)}}return a.roundPixels&&(l.x=Math.round(l.x),l.y=Math.round(l.y)),l}function A(r,i){var u=h(h({},t),i),f={scale:d,opts:u};if(!u.force&&u.disableZoom)return f;var a=t.minScale,l=t.maxScale;if(u.contain){var c=et(e),m=c.elem.width/d,w=c.elem.height/d;if(m>1&&w>1){var P=c.parent.width-c.parent.border.left-c.parent.border.right,z=c.parent.height-c.parent.border.top-c.parent.border.bottom,b=P/m,x=z/w;t.contain==="inside"?l=Math.min(l,b,x):t.contain==="outside"&&(a=Math.max(a,b,x))}}return f.scale=Math.min(Math.max(r,a),l),f}function V(r,i,u,f){var a=L(r,i,d,u);return p!==a.x||g!==a.y?(p=a.x,g=a.y,W("panzoompan",a.opts,f)):{x:p,y:g,scale:d,isSVG:n,originalEvent:f}}function C(r,i,u){var f=A(r,i),a=f.opts;if(!(!a.force&&a.disableZoom)){r=f.scale;var l=p,c=g;if(a.focal){var m=a.focal;l=(m.x/r-m.x/d+p*r)/r,c=(m.y/r-m.y/d+g*r)/r}var w=L(l,c,r,{relative:!1,force:!0});return p=w.x,g=w.y,d=r,W("panzoomzoom",a,u)}}function ot(r,i){var u=h(h(h({},t),{animate:!0}),i);return C(d*Math.exp((r?1:-1)*u.step),u)}function pt(r){return ot(!0,r)}function ht(r){return ot(!1,r)}function Z(r,i,u,f){var a=et(e),l={width:a.parent.width-a.parent.padding.left-a.parent.padding.right-a.parent.border.left-a.parent.border.right,height:a.parent.height-a.parent.padding.top-a.parent.padding.bottom-a.parent.border.top-a.parent.border.bottom},c=i.clientX-a.parent.left-a.parent.padding.left-a.parent.border.left-a.elem.margin.left,m=i.clientY-a.parent.top-a.parent.padding.top-a.parent.border.top-a.elem.margin.top;n||(c-=a.elem.width/d/2,m-=a.elem.height/d/2);var w={x:c/l.width*(l.width*r),y:m/l.height*(l.height*r)};return C(r,h(h({},u),{animate:!1,focal:w}),f)}function gt(r,i){r.preventDefault();var u=h(h(h({},t),i),{animate:!1}),f=r.deltaY===0&&r.deltaX?r.deltaX:r.deltaY,a=f<0?1:-1,l=A(d*Math.exp(a*u.step/3),u).scale;return Z(l,r,u,r)}function mt(r){var i=h(h(h({},t),{animate:!0,force:!0}),r);d=A(i.startScale,i).scale;var u=L(i.startX,i.startY,d,i);return p=u.x,g=u.y,W("panzoomreset",i)}var X,Y,_,T,it,N,y=[];function q(r){if(!Xt(r.target,t)){nt(y,r),S=!0,t.handleStartEvent(r),X=p,Y=g,O("panzoomstart",{x:p,y:g,scale:d,isSVG:n,originalEvent:r},t);var i=ft(y);_=i.clientX,T=i.clientY,it=d,N=K(y)}}function R(r){if(!(!S||X===void 0||Y===void 0||_===void 0||T===void 0)){nt(y,r);var i=ft(y),u=y.length>1,f=d;if(u){N===0&&(N=K(y));var a=K(y)-N;f=A(a*t.step/80+it).scale,Z(f,i,{animate:!1},r)}(!u||t.pinchAndPan)&&V(X+(i.clientX-_)/f,Y+(i.clientY-T)/f,{animate:!1},r)}}function F(r){y.length===1&&O("panzoomend",{x:p,y:g,scale:d,isSVG:n,originalEvent:r},t),Et(y,r),S&&(S=!1,X=Y=_=T=void 0)}var U=!1;function ct(){U||(U=!0,Q("down",t.canvas?o:e,q),Q("move",document,R,{passive:!0}),Q("up",document,F,{passive:!0}))}function yt(){U=!1,H("down",t.canvas?o:e,q),H("move",document,R),H("up",document,F)}return t.noBind||ct(),{bind:ct,destroy:yt,eventNames:M,getPan:function(){return{x:p,y:g}},getScale:function(){return d},getOptions:function(){return Tt(t)},handleDown:q,handleMove:R,handleUp:F,pan:V,reset:mt,resetStyle:s,setOptions:v,setStyle:function(r,i){return E(e,r,i)},zoom:C,zoomIn:pt,zoomOut:ht,zoomToPoint:Z,zoomWithWheel:gt}}rt.defaultOptions=vt;const Nt={__name:"PanZoom",props:{image:{type:String,required:!0},alt:{type:String,required:!0}},setup(e,{expose:t}){t();const n=e,o=D(null),s=D(null),v=D(null);ut(()=>{v.value=rt(o.value,{maxScale:5,minScale:.9,overflow:"visible"})});const p={zoom:o,container:s,panzoom:v,props:n,get Panzoom(){return rt},ref:D,onMounted:ut};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}},Dt={ref:"container",class:"z-20 grid h-full max-h-screen w-full place-items-center justify-center overflow-hidden"},It=["src","alt"];function Bt(e,t,n,o,s,v){return xt(),bt("div",Dt,[lt("div",{onWheel:t[0]||(t[0]=(...p)=>o.panzoom.zoomWithWheel&&o.panzoom.zoomWithWheel(...p))},[lt("img",{ref:"zoom",src:n.image,alt:n.alt,class:"block max-h-screen w-auto"},null,8,It)],32)],512)}const Lt=wt(Nt,[["render",Bt]]);export{Lt as default};
