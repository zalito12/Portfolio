System.register(["single-spa"],(function(e,t){var r={};return Object.defineProperty(r,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(t){r[t]=e[t]}))}],execute:function(){e((()=>{var e={893:(e,t,r)=>{"use strict";r.r(t);var n=r(589);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p="undefined"!=typeof window;function d(e,t){if("object"!==o(t)||Array.isArray(t)||null===t)throw Error("Invalid ".concat(e,": received ").concat(Array.isArray(t)?"array":t," but expected a plain object"))}function f(e,t){if("boolean"!=typeof t)throw Error("Invalid ".concat(e,": received ").concat(o(t),", but expected a boolean"))}function h(e,t,r,n){if(!n){var o=Object.keys(t),a=[];o.forEach((function(e){r.indexOf(e)<0&&a.push(e)})),a.length>0&&console.warn(Error("Invalid ".concat(e,": received invalid properties '").concat(a.join(", "),"', but valid properties are ").concat(r.join(", "))))}}function m(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if("string"!=typeof t||r&&""===t.trim())throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected a").concat(r?" non-blank":""," string"))}function v(e,t){if(m(e,t),t.indexOf("/")<0)throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected an absolute path that starts with /"))}function y(e,t,r){if(!Array.isArray(t)&&("object"!==o(o(t))||"number"!==t.length))throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected an array"));for(var n=arguments.length,a=new Array(n>3?n-3:0),i=3;i<n;i++)a[i-3]=arguments[i];for(var c=0;c<t.length;c++)r.apply(void 0,[t[c],"".concat(e,"[").concat(c,"]")].concat(a))}function b(e,t){var r;return"/"===(r="/"===e.substr(-1)?"/"===t[0]?e+t.slice(1):e+t:"/"===t[0]?e+t:e+"/"+t).substr(-1)&&r.length>1&&(r=r.slice(0,r.length-1)),r}function g(e,t){for(var r=0;r<e.length;r++)if(t(e[r]))return e[r];return null}var w=Object.prototype.hasOwnProperty.call(n,"default")?Object.getOwnPropertyDescriptor(n,"default").value.pathToActiveWhen:n.pathToActiveWhen,E="undefined"!=typeof Symbol?Symbol():"@";function N(e,t){if(p)return e.getAttribute(t);var r=g(e.attrs,(function(e){return e.name===t.toLowerCase()}));return r?r.value:null}function O(e,t){return p?e.hasAttribute(t):e.attrs.some((function(e){return e.name===t}))}function P(e,t,r){if("application"===e.nodeName.toLowerCase()){if(e.childNodes.length>0)throw Error("<application> elements must not have childNodes. You must put in a closing </application> - self closing is not allowed");var n={type:"application",name:N(e,"name")},o=N(e,"loader");if(o)if(t.loaders&&t.loaders.hasOwnProperty(o))n.loader=t.loaders[o];else if(p)throw Error("Application loader '".concat(o,"' was not defined in the htmlLayoutData"));var a=N(e,"error");if(a)if(t.errors&&t.errors.hasOwnProperty(a))n.error=t.errors[a];else if(p)throw Error("Application error handler '".concat(o,"' was not defined in the htmlLayoutData"));return S(e,n,t),[n]}if("route"===e.nodeName.toLowerCase()){var i={type:"route",routes:[]},c=N(e,"path");c&&(i.path=c),O(e,"default")&&(i.default=!0),O(e,"exact")&&(i.exact=!0),S(e,i,t);for(var u=0;u<e.childNodes.length;u++){var l;(l=i.routes).push.apply(l,s(P(e.childNodes[u],t,r)))}return[i]}if("redirect"===e.nodeName.toLowerCase())return r.redirects[b("/",N(e,"from"))]=b("/",N(e,"to")),[];if("undefined"!=typeof Node&&e instanceof Node){if(e.nodeType===Node.TEXT_NODE&&""===e.textContent.trim())return[];if(e.childNodes&&e.childNodes.length>0){e.routes=[];for(var d=0;d<e.childNodes.length;d++){var f;(f=e.routes).push.apply(f,s(P(e.childNodes[d],t,r)))}}return[e]}if(e.childNodes){for(var h={type:e.nodeName.toLowerCase(),routes:[],attrs:e.attrs},m=0;m<e.childNodes.length;m++){var v;(v=h.routes).push.apply(v,s(P(e.childNodes[m],t,r)))}return[h]}return"#comment"===e.nodeName?[{type:"#comment",value:e.data}]:"#text"===e.nodeName?[{type:"#text",value:e.value}]:void 0}function S(e,t,r){for(var n=(N(e,"props")||"").split(","),o=0;o<n.length;o++){var a=n[o].trim();if(0!==a.length)if(t.props||(t.props={}),r.props&&r.props.hasOwnProperty(a))t.props[a]=r.props[a];else{if(p)throw Error("Prop '".concat(a,"' was not defined in the htmlLayoutData. Either remove this attribute from the HTML element or provide the prop's value"));t.props[a]=E}}}function j(e){return{bootstrap:function(){return Promise.resolve()},mount:function(t){return Promise.resolve().then((function(){t.domElement.innerHTML=e}))},unmount:function(e){return Promise.resolve().then((function(){e.domElement.innerHTML=""}))}}}function A(e){var t=e.location,r=e.routes,n=e.parentContainer,o=e.previousSibling,a=e.shouldMount;return r.forEach((function(e,r){if("application"===e.type){var i=C(e.name),c=document.getElementById(i);a&&(c||((c=document.createElement("div")).id=i),L(c,n,o),o=c)}else if("route"===e.type)o=A({location:t,routes:e.routes,parentContainer:n,previousSibling:o,shouldMount:a&&e.activeWhen(t)});else if(e instanceof Node||"string"==typeof e.type)if(a){if(!e.connectedNode){var s=e instanceof Node?e.cloneNode(!1):I(e);e.connectedNode=s}L(e.connectedNode,n,o),e.routes&&A({location:t,routes:e.routes,parentContainer:e.connectedNode,previousSibling:null,shouldMount:a}),o=e.connectedNode}else(u=e.connectedNode)&&(u.remove?u.remove():u.parentNode.removeChild(u)),delete e.connectedNode;var u})),o}function x(e){for(var t=e.applicationName,r=e.location,n=e.routes,o=0;o<n.length;o++){var a=n[o];if("application"===a.type){if(a.name===t)return a}else if("route"===a.type){if(a.activeWhen(r)){var i=x({applicationName:t,location:r,routes:a.routes});if(i)return i}}else if(a.routes){var c=x({applicationName:t,location:r,routes:a.routes});if(c)return c}}}function L(e,t,r){r&&r.nextSibling?r.parentNode.insertBefore(e,r.nextSibling):t.appendChild(e)}function C(e){return"single-spa-application:".concat(e)}function I(e){if("#text"===e.type.toLowerCase())return document.createTextNode(e.value);if("#comment"===e.type.toLowerCase())return document.createComment(e.value);var t=document.createElement(e.type);return(e.attrs||[]).forEach((function(e){t.setAttribute(e.name,e.value)})),t.routes&&t.routes.forEach((function(e){t.appendChild(I(e))})),t}function T(e){return e===n.SKIP_BECAUSE_BROKEN||e===n.LOAD_ERROR}function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location;return t["hash"===e.mode?"hash":"pathname"]}function W(e){if("undefined"!=typeof URL)return new URL(e);var t=document.createElement("a");return t.href=e,t}function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c(c({},e),t)}const k=function(e,t){if(e&&e.nodeName)p&&!t&&window.singleSpaLayoutData&&(t=window.singleSpaLayoutData),e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("template"===e.nodeName.toLowerCase()&&(e=(e.content||e).querySelector("single-spa-router")),"single-spa-router"!==e.nodeName.toLowerCase())throw Error("single-spa-layout: The HTMLElement passed to constructRoutes must be <single-spa-router> or a <template> containing the router. Received ".concat(e.nodeName));p&&e.isConnected&&e.parentNode.removeChild(e);var r={routes:[],redirects:{}};N(e,"mode")&&(r.mode=N(e,"mode")),N(e,"base")&&(r.base=N(e,"base")),N(e,"containerEl")&&(r.containerEl=N(e,"containerEl"));for(var n=0;n<e.childNodes.length;n++){var o;(o=r.routes).push.apply(o,s(P(e.childNodes[n],t,r)))}return r}(e,t);else if(t)throw Error("constructRoutes should be called either with an HTMLElement and layoutData, or a single json object.");return function(e){d("routesConfig",e);var t,r=e.disableWarnings;if(h("routesConfig",e,["mode","base","containerEl","routes","disableWarnings","redirects"],r),e.hasOwnProperty("containerEl")?function(e,t){if("string"==typeof t?""===t.trim():!(p&&t instanceof HTMLElement))throw Error("Invalid ".concat("routesConfig.containerEl",": received ").concat(t," but expected either non-blank string or HTMLElement"))}(0,e.containerEl):e.containerEl="body",e.hasOwnProperty("mode")||(e.mode="history"),function(e,t,r){if(r.indexOf(t)<0)throw Error("Invalid ".concat("routesConfig.mode",": received '").concat(t,"' but expected ").concat(r.join(", ")))}(0,e.mode,["history","hash"]),e.hasOwnProperty("base")?(m("routesConfig.base",e.base),e.base=(0!==(t=e.base).indexOf("/")&&(t="/"+t),"/"!==t[t.length-1]&&(t+="/"),t)):e.base="/",e.hasOwnProperty("redirects"))for(var n in d("routesConfig.redirects",e.redirects),e.redirects){var o=e.redirects[n];v("routesConfig.redirects key",n),v("routesConfig.redirects['".concat(n,"']"),o)}var a=p?window.location.pathname:"/",i="hash"===e.mode?a+"#":"";y("routesConfig.routes",e.routes,(function e(t,n,o){var a,i=o.parentPath,c=o.siblingActiveWhens;if(d(n,t),"application"===t.type)h(n,t,["type","name","props","loader","error"],r),t.props&&d("".concat(n,".props"),t.props),m("".concat(n,".name"),t.name);else if("route"===t.type){h(n,t,["type","path","routes","props","default","exact"],r),t.hasOwnProperty("exact")&&f("".concat(n,".exact"),t.exact);var s,u=t.hasOwnProperty("path"),l=t.hasOwnProperty("default");if(u)m("".concat(n,".path"),t.path),s=b(i,t.path),t.activeWhen=w(s,t.exact),c.push(t.activeWhen);else{if(!l)throw Error("Invalid ".concat(n,": routes must have either a path or default property."));f("".concat(n,".default"),t.default),s=i,t.activeWhen=(a=c,function(e){return!a.some((function(t){return t(e)}))})}if(u&&l&&t.default)throw Error("Invalid ".concat(n,": cannot have both path and set default to true."));t.routes&&y("".concat(n,".routes"),t.routes,e,{parentPath:s,siblingActiveWhens:[]})}else{if("undefined"!=typeof Node&&t instanceof Node);else for(var p in t)"routes"!==p&&"attrs"!==p&&m("".concat(n,"['").concat(p,"']"),t[p],!1);t.routes&&y("".concat(n,".routes"),t.routes,e,{parentPath:i,siblingActiveWhens:c})}}),{parentPath:i+e.base,siblingActiveWhens:[]}),delete e.disableWarnings}(e),e}(document.querySelector("#single-spa-layout"),{props:{},loaders:{mainContentLoader:'<div class="content"><div class="wrapper"><h1 class="placeholder-loading">LOADING<span>.</span><span>.</span><span>.</span></h1></div></div>'}}),_=(H=(R={routes:k,loadApp:({name:e})=>System.import(e)}).routes,U=R.loadApp,function e(t,r,n,o){o.forEach((function(o){"application"===o.type?(t[o.name]||(t[o.name]=[]),t[o.name].push({activeWhen:r,props:M(n,o.props),loader:o.loader})):"route"===o.type?e(t,o.activeWhen,M(n,o.props),o.routes):o.routes&&e(t,r,n,o.routes)}))}(B={},(function(){return!0}),{},H.routes),Object.keys(B).map((function(e){var t=B[e];return{name:e,customProps:function(e,r){var n=g(t,(function(e){return e.activeWhen(r)}));return n?n.props:{}},activeWhen:t.map((function(e){return e.activeWhen})),app:function(){var r;p&&(r=g(t,(function(e){return e.activeWhen(window.location)})));var o=U({name:e});return r&&r.loader?function(e,t,r){return Promise.resolve().then((function(){var o,a=C(e),i=document.getElementById(a);i||((i=document.createElement("div")).id=a,i.style.display="none",document.body.appendChild(i),o=function(){i.style.removeProperty("display"),""===i.getAttribute("style")&&i.removeAttribute("style"),window.removeEventListener("single-spa:before-mount-routing-event",o)},window.addEventListener("single-spa:before-mount-routing-event",o));var c="string"==typeof t.loader?j(t.loader):t.loader,s=(0,n.mountRootParcel)(c,{name:"application-loader:".concat(e),domElement:i});function l(){return s.unmount().then((function(){o&&o()}))}return Promise.all([s.mountPromise,r]).then((function(e){var t,r=function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),2!==r.length);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(t)||u(t,2)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();r[0];var n=r[1];return l().then((function(){return n}))}),(function(e){return l().then((function(){throw e}))}))}))}(e,r,o):o}}})));var R,H,U,B;const q=function(e){var t=e.routes,r=e.active,a=void 0===r||r,i=!1,c={},s=t.base.slice(0,t.base.length-1),u={isActive:function(){return i},activate:function(){i||(i=!0,p&&(window.addEventListener("single-spa:before-routing-event",d),window.addEventListener("single-spa:before-mount-routing-event",f),window.addEventListener("single-spa:routing-event",h),(0,n.addErrorHandler)(l),f()))},deactivate:function(){i&&(i=!1,p&&(window.removeEventListener("single-spa:before-routing-event",d),window.removeEventListener("single-spa:before-mount-routing-event",f),window.removeEventListener("single-spa:routing-event",h),(0,n.removeErrorHandler)(l)))}};return a&&u.activate(),u;function l(e){var r=x({applicationName:e.appOrParcelName,location:window.location,routes:t.routes});if(r&&r.error){var o=document.getElementById(C(r.name)),a="string"==typeof r.error?j(r.error):r.error;c[r.name]=(0,n.mountRootParcel)(a,{domElement:o})}setTimeout((function(){throw e}))}function d(e){var r=e.detail,a=r.newAppStatuses,i=r.cancelNavigation,s=r.newUrl,u=D(t,W(s)),l=function(e){var r=t.redirects[e];if(e===u){if(!i)throw Error("single-spa-layout: <redirect> requires single-spa@>=5.7.0");return i(),setTimeout((function(){(0,n.navigateToUrl)(r)})),{v:void 0}}};for(var p in t.redirects){var d=l(p);if("object"===o(d))return d.v}for(var f in a)c[f]&&T((0,n.getAppStatus)(f))&&!T(a[f])&&(c[f].unmount(),delete c[f])}function f(){if(0===D(t).indexOf(s)){var e="string"==typeof t.containerEl?document.querySelector(t.containerEl):t.containerEl;A({location:window.location,routes:t.routes,parentContainer:e,shouldMount:!0})}}function h(e){var t=e.detail.newUrl,r=[],o=(0,n.checkActivityFunctions)(t?W(t):location);(0,n.getAppNames)().forEach((function(e){o.indexOf(e)<0&&r.push(e)})),r.forEach((function(e){c[e]&&(c[e].unmount(),delete c[e]);var t=document.getElementById(C(e));t&&t.isConnected&&t.parentNode.removeChild(t)}))}}({routes:k,applications:_});_.forEach(n.registerApplication),q.activate(),(0,n.start)()},858:(e,t,r)=>{const{autoPublicPath:n}=r(722);n(1)},722:(e,t,r)=>{const{resolveDirectory:n}=r(905);t.autoPublicPath=function(e=1){if(!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},905:(e,t,r)=>{function n(e,t){const r=document.createElement("a");r.href=e;const n="/"===r.pathname[0]?r.pathname:"/"+r.pathname;let o=0,a=n.length;for(;o!==t&&a>=0;)"/"===n[--a]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);const i=n.slice(0,a+1);return r.protocol+"//"+r.host+i}t.setPublicPath=function(e,t){if(t||(t=1),"string"!=typeof e||0===e.trim().length)throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'");if("number"!=typeof t||t<=0||isNaN(t)||!o(t))throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'");let a;try{if(a=window.System.resolve(e),!a)throw Error()}catch(t){throw Error("systemjs-webpack-interop: There is no such module '"+e+"' in the SystemJS registry. Did you misspell the name of your module?")}r.p=n(a,t)},t.resolveDirectory=n;const o=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}},589:e=>{"use strict";e.exports=r}},n={};function o(t){if(n[t])return n[t].exports;var r=n[t]={exports:{}};return e[t](r,r.exports,o),r.exports}return o.y=t,o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="",o(858),o(893)})())}}}));
//# sourceMappingURL=gongarce-root-config.js.map