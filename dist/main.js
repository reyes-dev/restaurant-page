(()=>{"use strict";var e={426:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(81),i=r.n(n),a=r(645),s=r.n(a)()(i());s.push([e.id,"#content {\n    display: grid;\n    grid: 100px / auto auto;\n    gap: 2rem;\n    padding: 0rem 4rem 0rem 4rem;\n}\nh1 {\n    grid-column: 1 / -1;\n    grid-row: 1 / 1;\n    font-size: 2.5rem;\n}\nimg {\n    grid-row: 2 / 2;\n    width: 420px;\n}\np {\n    font-size: 1.5rem;\n    grid-column: 2 / -1;\n    grid-row: 2 / -1;\n}",""]);const u=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var u=0;u<this.length;u++){var o=this[u][0];null!=o&&(s[o]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);n&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},s=[],u=0;u<e.length;u++){var o=e[u],c=n.base?o[0]+n.base:o[0],l=a[c]||0,d="".concat(c," ").concat(l);a[c]=l+1;var m=r(d),p={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=i(p,n);n.byIndex=u,t.splice(u,0,{identifier:d,updater:f,references:1})}s.push(d)}return s}function i(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,i){var a=n(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var u=r(a[s]);t[u].references--}for(var o=n(e,i),c=0;c<a.length;c++){var l=r(a[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=o}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,i&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(379),t=r.n(e),n=r(795),i=r.n(n),a=r(569),s=r.n(a),u=r(565),o=r.n(u),c=r(216),l=r.n(c),d=r(589),m=r.n(d),p=r(426),f={};f.styleTagTransform=m(),f.setAttributes=o(),f.insert=s().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=l(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const v=JSON.parse('{"Fs":"JavaScript Izakaya","YN":"/img/izakaya.jpg","d0":"izakaya","An":"An izakaya for the hungry coder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae accumsan nisl. Nullam feugiat lacus in ante gravida luctus. Mauris eu hendrerit orci. Proin suscipit a sem sit amet eleifend. Mauris non augue sodales, pretium tortor iaculis, malesuada felis. Proin cursus vehicula est sed consectetur. Aliquam aliquet pharetra urna, id vulputate neque sagittis vitae. Donec luctus mattis finibus. Aliquam commodo, nulla sit amet ullamcorper elementum, arcu tellus placerat diam, blandit facilisis velit ipsum sed mi. Pellentesque facilisis, metus vitae pretium dictum, lectus ipsum aliquam lorem, quis imperdiet ante elit sit amet eros. Suspendisse cursus lorem turpis, non semper est cursus et. Nam tellus mi, malesuada vitae pharetra quis, ultricies id libero. Proin viverra, dui ut condimentum laoreet, massa velit gravida dolor, at mollis ex augue quis justo. Nulla vestibulum nibh nulla, eu sollicitudin nunc commodo at. Sed tincidunt purus lorem, nec tempor mauris blandit eget. Proin venenatis, turpis faucibus molestie ultrices, nibh risus tincidunt felis, nec egestas augue quam at purus. Nullam maximus nisi ac purus lobortis, ac consequat nisl vestibulum. Pellentesque id risus ipsum. Vivamus elementum malesuada quam. Sed rhoncus tristique libero, in dapibus lectus porta nec. Sed sed facilisis est. Ut maximus, ex ut semper pharetra, dolor mauris tempus neque, vel laoreet quam metus ac arcu. Duis sodales eleifend lacus. Suspendisse vel ex luctus, consequat ligula vitae, cursus eros. In id convallis ligula, sit amet pharetra diam. Aliquam scelerisque ligula a libero dignissim, ut mollis dolor mattis. Curabitur sollicitudin enim in ornare volutpat. Pellentesque dictum condimentum erat. Aenean a efficitur lorem, vel pharetra mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae"}');!function(e){const t=document.createElement("h1"),r=document.createElement("img"),n=document.createElement("p");t.innerHTML=v.Fs,r.src=v.YN,r.alt=v.d0,n.innerHTML=v.An,e.appendChild(t),e.appendChild(r),e.appendChild(n)}(document.querySelector("div#content"))})()})();