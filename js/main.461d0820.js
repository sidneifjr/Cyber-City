parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"vBBU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){var e=document.querySelector(".modal-wrapper"),t=document.querySelector(".modalBtn"),r=e.querySelector(".sub"),c=e.querySelector("form");t&&t.addEventListener("click",function(t){t.preventDefault(),e&&e.classList.add("active")}),r&&r.addEventListener("click",function(t){t.preventDefault(),e&&e.classList.remove("active")}),c.addEventListener("submit",function(t){c.querySelectorAll("input").forEach(function(r){r.value?e.classList.remove("active"):(console.log("submit cancelled!"),t.preventDefault())})})};exports.default=e();
},{}],"tfX7":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}Object.defineProperty(exports,"__esModule",{value:!0});var a=function(){var t=document.querySelector(".photo-grid-wrapper"),a=document.querySelector(".modal form");if(a){var r=Array.from(a.querySelectorAll("input"));a.addEventListener("submit",function(a){a.preventDefault();var o,i,c,l,u,s,m=(o=r,i="name",c="developer",l="genre",u="releaseDate",s="image",Array.from(o).forEach(function(e){var t=e.getAttribute("name");t===i&&(i=e.value),t===c&&(c=e.value),t===l&&(l=e.value),t===u&&(u=e.value),t===s&&(s=e.value)}),[i,c,l,u,s]),d=function(){function a(t,n,r,o,i){e(this,a),this.name=t,this.developer=n,this.genre=r,this.releaseDate=o,this.imageURL=i}return n(a,[{key:"createGameItem",value:function(){console.log("".concat(this.name,", developed by ").concat(this.developer," as an ").concat(this.genre," title, was released in ").concat(this.releaseDate));var e=t.querySelector(".photo-grid"),n=document.createElement("DIV"),a=document.createElement("img"),r=document.createElement("DIV"),o=document.createElement("h4"),i=document.createElement("p");n.setAttribute("class","photo-grid-item"),a.setAttribute("src","".concat(this.imageURL)),r.setAttribute("class","photo-grid-item-info"),o.innerText="".concat(this.name),i.innerText="".concat(this.developer),n.appendChild(a),r.appendChild(o),r.appendChild(i),n.appendChild(r),e.appendChild(n)}}]),a}();requestAnimationFrame(function(){new d(m[0],m[1],m[2],m[3],m[4]).createGameItem(),m.forEach(function(e,t){localStorage.setItem("".concat("item "+t++),m[t])}),console.log(localStorage)})})}};exports.default=a();
},{}],"o7wx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){var e=document.querySelector(".loader");setTimeout(function(){e&&(e.className+=" hidden")},1500)};exports.default=e();
},{}],"QS3V":[function(require,module,exports) {
"use strict";var t=function(){var t=document.querySelector(".glitch");if(t){var e=t.parentElement,o=!1;e.addEventListener("mouseenter",function(){if(console.log("event fired!"),!o){for(var e=0;e<10;e++){var a=document.createElement("div");a.setAttribute("class","box"),t.appendChild(a)}var r=document.getElementsByClassName("box");setInterval(function(){for(var t=0;t<r.length;t++){var e=r[t];e.style.height=Math.floor(100*Math.random())+"px",e.style.backgroundPosition=Math.floor(50*Math.random())+"px",e.style.left=Math.floor(100*Math.random())+"vw",e.style.top=Math.floor(100*Math.random())+"vh",e.style.width=Math.floor(400*Math.random())+"px"}},600)}o=!0})}};
},{}],"n8Qd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){var e=document.querySelector(".photo-grid-wrapper"),t=document.querySelector(".goTop");t&&t.addEventListener("click",function(t){t.preventDefault(),e.scrollTop=0})};exports.default=e();
},{}],"JuzC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){var e=document.querySelector(".photo-grid-wrapper");if(e){var o=document.querySelector(".show-more");e.addEventListener("scroll",function(){e.scrollTop>=200?o.classList.add("visible"):o.classList.remove("visible")}),o.addEventListener("click",function(e){e.preventDefault(),console.log("showing more items...")})}};exports.default=e();
},{}],"Mpfr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){var e=document.querySelector(".hamburger");e.addEventListener("click",function(){var s=document.querySelector("body");e.classList.contains("is-active")?(e.classList.remove("is-active"),s.classList.remove("fullSize")):(e.classList.add("is-active"),s.classList.add("fullSize"))})};exports.default=e();
},{}],"Qio7":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var o=e(require("./components/Modal/modal.component")),t=e(require("./components/AddGridItem/addGridItem.component")),n=e(require("./components/Loader/loader.component")),r=e(require("./components/Glitch/glitch.component")),u=e(require("./components/GoTopBtn/goTopBtn.component")),d=e(require("./components/ShowMoreBtn/showMoreBtn.component")),m=e(require("./components/MenuHamburger/menuHamburger.component"));o.default,t.default,n.default,r.default,u.default,d.default,m.default;
},{"./components/Modal/modal.component":"vBBU","./components/AddGridItem/addGridItem.component":"tfX7","./components/Loader/loader.component":"o7wx","./components/Glitch/glitch.component":"QS3V","./components/GoTopBtn/goTopBtn.component":"n8Qd","./components/ShowMoreBtn/showMoreBtn.component":"JuzC","./components/MenuHamburger/menuHamburger.component":"Mpfr"}]},{},["Qio7"], null)
//# sourceMappingURL=../main.461d0820.js.map