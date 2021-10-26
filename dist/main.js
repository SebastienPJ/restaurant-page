(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>p});var a=t(537),i=t.n(a),o=t(645),s=t.n(o),r=t(667),c=t.n(r),A=new URL(t(131),t.b),d=s()(i()),l=c()(A);d.push([n.id,"html {\n\n  position: relative;\n\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n\n}\n\nh1 {\n  font-size: calc(2em + 3vw);\n  color: #4b687f;\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40vw;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n\n\n/******* NAV BAR *******/\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(51, 51, 51, 0.8);\n  position: fixed;\n  width: 100%;\n}\n\n.logo-container {\n  margin: .5rem;\n}\n\n\n.navbar ul {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  background: url("+l+");\n\n}\n\n.navbar li {\n  list-style: none;\n}\n\n.toggle-menu {\n  position: absolute;\n  top: 1.3rem;\n  right: 1rem;\n  display: none;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 60px;\n  height: 40px;\n}\n\n\n.bar {\n  width: 100%;\n  height: 5px;\n  background-color: white;\n  border-radius: 10px;\n}\n\n.nav-links li button {\n  margin: 5px 20px;\n  border: 1px solid #4b687f;\n  outline: none;\n  cursor: pointer;\n  font-size: 2rem;\n  padding: 10px 12px;\n  background-color: transparent;\n  color: #4b687f;\n\n}\n\n.nav-links li button:hover {\n  background:#4b687f;\n  color: white;\n}\n\n\n\n\n\n/***** HOME PAGE SECTION *****/\n\n.home-page {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\n.home-page h1{\n  color: #c1c1c1;\n  font-size: calc(2em + 2vw);\n  text-align: center;\n}\n\n.home-page h2 {\n  color: #c1c1c1;\n  font-size: calc(1em + 2vw);\n}\n\n\n.menu-link {\n  border: none;\n  border-bottom: 1px solid white;\n  background: transparent;\n  cursor: pointer;\n  font-size: calc(1rem + 2vw);\n  color: #c1c1c1;\n}\n\n\n.menu-link:hover {\n  color: #4b687f;\n  border-bottom: 1px solid #4b687f;\n}\n\n\n\n.footer {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  background: #1f1f1f;\n  padding: 20px 0;\n\n  color: rgb(193, 193, 193);\n}\n\n\n\n\n\n\n\n/***** MENU SECTION *****/\n\n.menu-header {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 500px;\n}\n\n\n\n.menu-display {\n  text-align: center;\n}\n\n.menu-display button {\n  margin: 20px 20px 60px 20px;\n  border: none;\n  border-bottom: 1px solid white;\n  outline: none;\n  cursor: pointer;\n  font-size: 2rem;\n  padding: 10px 12px;\n  background-color: white;\n  color: black;\n}\n\n.menu-display button:hover {\n  border-bottom: 1px solid black;\n\n}\n\n\n.menu-items h2 {\n  margin-bottom: 40px;\n  font-size: calc(2em + 1vw);\n  border-bottom: 3px solid black;\n  padding: 0 0 10px 0 ;\n}\n\n\n.row {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  text-align: left;\n}\n\n.item {\n  display: flex;\n  width: 500px;\n  margin-bottom: 40px;\n  justify-content: space-between;\n}\n\n\n.food-name {\n  color: rgb(83, 83, 83);\n  font-size: 1.5rem;\n}\n\n.description {\n  color: rgb(151, 150, 150);\n}\n\n\n\n\n\n/***** CONTACT US SECTION *****/\n\n\n.contact-header {\n  height: 500px;\n  background-position: center;\n  background-size: cover;\n  justify-content: center;\n  text-align: center;\n  /* border: 1px solid rgb(111, 117, 111); */\n\n}\n\n.contact-display {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  padding: 50px 0;\n}\n\n\n.contact-form h2 {\n  text-align: center;\n}\n\n\n.contact-form ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.contact-form li {\n  margin-bottom: 2vw;\n}\n\n.form-label {\n  vertical-align: top;\n  text-align: right;\n  padding: 5px 15px;\n}\n\n\n\ninput,\ntextarea {\n  font: 1em sans-serif;\n  border-radius: 5px;\n  box-shadow: 1px 1px 1px #999;\n}\n\n\n\n.button {\n  padding-left: 0;\n}\n\n.submit-button-div {\n  text-align: left;\n\n}\n\n\n\n.address-section,\n.operating-hours {\n  padding: 0 20px;\n  text-align: center;\n}\n\n\n\n.operating-hours span {\n  font-weight: bold;\n}\n\n\n\n\n\n\n\n\n\n\n@media (max-width:900px) {\n\n  /***** NAV CHANGES *****/\n  .company-logo {\n    width: 190px;\n  }\n\n  .toggle-menu {\n    display: flex;\n  }\n\n\n  .nav-links {\n    display: none;\n    width: 100%;\n  }\n\n\n  .navbar {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .nav-links ul {\n    flex-direction: column;\n    width: 100%;\n  }\n\n  .nav-links li {\n    text-align: center;\n  }\n\n  .nav-links li button {\n    margin: 0;\n    padding: .3rem;\n    width: 100%;\n    border: none;\n  }\n\n  .open-menu {\n    display: flex;\n  }\n\n\n  /******* MENU CHANGES *******/\n  .menu-display button {\n    margin: 10px;\n    padding: 10px;\n    border: 1px solid black;\n  }\n\n  .description {\n    padding-right: 10px;\n  }\n\n\n  .item {\n    padding: 0 5px;\n  }\n\n  .item img {\n    width: 150px;\n  }\n\n\n  /******* CONTACT CHANGES *****/\n\n  .contact-form {\n    display: flex;\n    justify-content: center;\n  }\n\n  .address-section,\n  .operating-hours {\n    margin-top: 25px;\n  }\n\n  .contact-display {\n    flex-direction: column;\n  }\n\n\n}","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"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",sourcesContent:["html {\n\n  position: relative;\n\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n\n}\n\nh1 {\n  font-size: calc(2em + 3vw);\n  color: #4b687f;\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40vw;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n\n\n/******* NAV BAR *******/\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(51, 51, 51, 0.8);\n  position: fixed;\n  width: 100%;\n}\n\n.logo-container {\n  margin: .5rem;\n}\n\n\n.navbar ul {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  background: url('/src/images/screenshot-menu.png');\n\n}\n\n.navbar li {\n  list-style: none;\n}\n\n.toggle-menu {\n  position: absolute;\n  top: 1.3rem;\n  right: 1rem;\n  display: none;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 60px;\n  height: 40px;\n}\n\n\n.bar {\n  width: 100%;\n  height: 5px;\n  background-color: white;\n  border-radius: 10px;\n}\n\n.nav-links li button {\n  margin: 5px 20px;\n  border: 1px solid #4b687f;\n  outline: none;\n  cursor: pointer;\n  font-size: 2rem;\n  padding: 10px 12px;\n  background-color: transparent;\n  color: #4b687f;\n\n}\n\n.nav-links li button:hover {\n  background:#4b687f;\n  color: white;\n}\n\n\n\n\n\n/***** HOME PAGE SECTION *****/\n\n.home-page {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\n.home-page h1{\n  color: #c1c1c1;\n  font-size: calc(2em + 2vw);\n  text-align: center;\n}\n\n.home-page h2 {\n  color: #c1c1c1;\n  font-size: calc(1em + 2vw);\n}\n\n\n.menu-link {\n  border: none;\n  border-bottom: 1px solid white;\n  background: transparent;\n  cursor: pointer;\n  font-size: calc(1rem + 2vw);\n  color: #c1c1c1;\n}\n\n\n.menu-link:hover {\n  color: #4b687f;\n  border-bottom: 1px solid #4b687f;\n}\n\n\n\n.footer {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  background: #1f1f1f;\n  padding: 20px 0;\n\n  color: rgb(193, 193, 193);\n}\n\n\n\n\n\n\n\n/***** MENU SECTION *****/\n\n.menu-header {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 500px;\n}\n\n\n\n.menu-display {\n  text-align: center;\n}\n\n.menu-display button {\n  margin: 20px 20px 60px 20px;\n  border: none;\n  border-bottom: 1px solid white;\n  outline: none;\n  cursor: pointer;\n  font-size: 2rem;\n  padding: 10px 12px;\n  background-color: white;\n  color: black;\n}\n\n.menu-display button:hover {\n  border-bottom: 1px solid black;\n\n}\n\n\n.menu-items h2 {\n  margin-bottom: 40px;\n  font-size: calc(2em + 1vw);\n  border-bottom: 3px solid black;\n  padding: 0 0 10px 0 ;\n}\n\n\n.row {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  text-align: left;\n}\n\n.item {\n  display: flex;\n  width: 500px;\n  margin-bottom: 40px;\n  justify-content: space-between;\n}\n\n\n.food-name {\n  color: rgb(83, 83, 83);\n  font-size: 1.5rem;\n}\n\n.description {\n  color: rgb(151, 150, 150);\n}\n\n\n\n\n\n/***** CONTACT US SECTION *****/\n\n\n.contact-header {\n  height: 500px;\n  background-position: center;\n  background-size: cover;\n  justify-content: center;\n  text-align: center;\n  /* border: 1px solid rgb(111, 117, 111); */\n\n}\n\n.contact-display {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  padding: 50px 0;\n}\n\n\n.contact-form h2 {\n  text-align: center;\n}\n\n\n.contact-form ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.contact-form li {\n  margin-bottom: 2vw;\n}\n\n.form-label {\n  vertical-align: top;\n  text-align: right;\n  padding: 5px 15px;\n}\n\n\n\ninput,\ntextarea {\n  font: 1em sans-serif;\n  border-radius: 5px;\n  box-shadow: 1px 1px 1px #999;\n}\n\n\n\n.button {\n  padding-left: 0;\n}\n\n.submit-button-div {\n  text-align: left;\n\n}\n\n\n\n.address-section,\n.operating-hours {\n  padding: 0 20px;\n  text-align: center;\n}\n\n\n\n.operating-hours span {\n  font-weight: bold;\n}\n\n\n\n\n\n\n\n\n\n\n@media (max-width:900px) {\n\n  /***** NAV CHANGES *****/\n  .company-logo {\n    width: 190px;\n  }\n\n  .toggle-menu {\n    display: flex;\n  }\n\n\n  .nav-links {\n    display: none;\n    width: 100%;\n  }\n\n\n  .navbar {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .nav-links ul {\n    flex-direction: column;\n    width: 100%;\n  }\n\n  .nav-links li {\n    text-align: center;\n  }\n\n  .nav-links li button {\n    margin: 0;\n    padding: .3rem;\n    width: 100%;\n    border: none;\n  }\n\n  .open-menu {\n    display: flex;\n  }\n\n\n  /******* MENU CHANGES *******/\n  .menu-display button {\n    margin: 10px;\n    padding: 10px;\n    border: 1px solid black;\n  }\n\n  .description {\n    padding-right: 10px;\n  }\n\n\n  .item {\n    padding: 0 5px;\n  }\n\n  .item img {\n    width: 150px;\n  }\n\n\n  /******* CONTACT CHANGES *****/\n\n  .contact-form {\n    display: flex;\n    justify-content: center;\n  }\n\n  .address-section,\n  .operating-hours {\n    margin-top: 25px;\n  }\n\n  .contact-display {\n    flex-direction: column;\n  }\n\n\n}"],sourceRoot:""}]);const p=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(a)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(s[c]=!0)}for(var A=0;A<n.length;A++){var d=[].concat(n[A]);a&&s[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),o="/*# ".concat(i," */"),s=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(s).concat([o]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},s=[],r=0;r<n.length;r++){var c=n[r],A=a.base?c[0]+a.base:c[0],d=o[A]||0,l="".concat(A," ").concat(d);o[A]=d+1;var p=t(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var u=i(m,a);a.byIndex=r,e.splice(r,0,{identifier:l,updater:u,references:1})}s.push(l)}return s}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=a(n=n||[],i=i||{});return function(n){n=n||[];for(var s=0;s<o.length;s++){var r=t(o[s]);e[r].references--}for(var c=a(n,i),A=0;A<o.length;A++){var d=t(o[A]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},702:(n,e,t)=>{n.exports=t.p+"img/logo.png"},131:(n,e,t)=>{n.exports=t.p+"img/screenshot-menu.png"}},e={};function t(a){var i=e[a];if(void 0!==i)return i.exports;var o=e[a]={id:a,exports:{}};return n[a](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");a.length&&(n=a[a.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href;var a={};(()=>{t.d(a,{r:()=>B,g:()=>b});var n=t(379),e=t.n(n),i=t(795),o=t.n(i),s=t(569),r=t.n(s),c=t(565),A=t.n(c),d=t(216),l=t.n(d),p=t(589),m=t.n(p),u=t(28),g={};g.styleTagTransform=m(),g.setAttributes=A(),g.insert=r().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),e()(u.Z,g),u.Z&&u.Z.locals&&u.Z.locals;const E=function(){B(),console.log("menu Page created");const n=document.querySelector("#content");n.appendChild(b());const e=document.createElement("div");e.classList.add("menu"),e.innerHTML=' \n    <header class="menu-header">\n        <h1>Menu</h1>\n    </header>\n\n    <div class="menu-display">\n        <button type="button" class="breakfast">Breakfast</button>\n        <button type="button" class="main-dishes">Main</button>\n        <button type="button" class="dessert">Dessert</button>\n        <button type="button" class="drinks">Drinks/Cocktails</button>\n\n\n        <div class="menu-items">\n            <h2>Breakfast Menu</h2>\n\n            <div class="row">\n                <div class="item">\n                    <div class="description">\n                        <p class="food-name">Avocado Toast</p>\n                        <p>facilisi etiam dignissim diam quis enim</p>\n                    </div>\n                    <img src="./img/avocavo-toast.png" alt="toast-image">\n                </div>\n\n                <div class="item">\n                    <div class="description">\n                        <p class="food-name">Pancakes</p>\n                        <p>ut tortor pretium viverra suspendisse potenti</p>\n                    </div>\n                    <img src="./img/pancakes.jpg" alt="pancakes image">\n                </div>\n            </div>\n\n            <div class="row">\n                <div class="item">\n                    <div class="description">\n                        <p class="food-name">Breakfast Platter</p>\n                        <p>viverra orci sagittis eu volutpat odio</p>\n                    </div>\n                    <img src="./img/breakfast-platter.jpg" alt="breakfast-platter image">\n                </div>\n\n                <div class="item">\n                    <div class="description">\n                        <p class="food-name">Classic Eggs</p>\n                        <p>feugiat vivamus at augue eget arcu</p>\n                    </div>\n                    <img src="./img/classic-eggs.jpg" alt="classic-eggs image">\n                </div>\n            </div>\n        </div>\n    </div>',n.appendChild(e);const t=document.querySelector(".menu-header");t.style.backgroundImage="url('./img/menu.jpg')";const a=document.querySelector(".menu-items");document.querySelector(".breakfast").addEventListener("click",(()=>{console.log("Breakfast time!"),t.style.backgroundImage="url('./img/menu.jpg')",a.innerHTML='            \n        <h2>Breakfast Menu</h2>\n\n        <div class="row">\n            <div class="item">\n                <div class="description">\n                    <p class="food-name">Avocado Toast</p>\n                    <p>facilisi etiam dignissim diam quis enim</p>\n                </div>\n                <img src="./img/avocavo-toast.png" alt="toast-image">\n            </div>\n\n            <div class="item">\n                <div class="description">\n                    <p class="food-name">Pancakes</p>\n                    <p>ut tortor pretium viverra suspendisse potenti</p>\n                </div>\n                <img src="./img/pancakes.jpg" alt="pancakes image">\n            </div>\n        </div>\n\n        <div class="row">\n            <div class="item">\n                <div class="description">\n                    <p class="food-name">Breakfast Platter</p>\n                    <p>viverra orci sagittis eu volutpat odio</p>\n                </div>\n                <img src="./img/breakfast-platter.jpg" alt="breakfast-platter image">\n            </div>\n\n            <div class="item">\n                <div class="description">\n                    <p class="food-name">Classic Eggs</p>\n                    <p>feugiat vivamus at augue eget arcu</p>\n                </div>\n                <img src="./img/classic-eggs.jpg" alt="classic-eggs image">\n            </div>\n        </div>'})),document.querySelector(".main-dishes").addEventListener("click",(()=>{console.log("Main dish is served!"),t.style.backgroundImage="url('./img/main-dish-header.jpg')",a.innerHTML='            \n        <h2>Main Menu</h2>\n\n        <div class="row">\n            <div class="item">\n                <div class="description">\n                    <p class="food-name">Lamb Chops</p>\n                    <p>nunc sed velit dignissim sodales ut</p>\n                </div>\n                <img src="./img/lamb-chops.jpg" alt="lamb-image">\n            </div>\n\n            <div class="item">\n                <div class="description">\n                    <p class="food-name">House Salad</p>\n                    <p>nec tincidunt praesent semper feugiat nibh</p>\n                </div>\n                <img src="./img/house-salad.jpg" alt="house-salad image">\n            </div>\n        </div>\n\n        <div class="row">\n            <div class="item">\n                <div class="description">\n                    <p class="food-name">Famous Burger</p>\n                    <p>aliquet enim tortor at auctor urna</p>\n                </div>\n                <img src="./img/famous-burger.jpg" alt="burger-image">\n            </div>\n\n            <div class="item">\n                <div class="description">\n                    <p class="food-name">Soup for the Soul</p>\n                    <p>donec enim diam vulputate ut pharetra</p>\n                </div>\n                <img src="./img/soup-for-the-soul.jpg" alt="soup-image">\n            </div>\n        </div>'})),document.querySelector(".dessert").addEventListener("click",(()=>{console.log("Getting our sweet tooth on!"),t.style.backgroundImage="url('./img/dessert-header.jpg')",a.innerHTML='        \n        <h2>Dessert Menu</h2>\n\n        <div class="row">\n            <div class="item">\n                <div class="description">\n                    <p class="food-name">Brownie</p>\n                    <p>sagittis id consectetur purus ut faucibus</p>\n                </div>\n                <img src="./img/brownie.jpg" alt="brownie-image">\n            </div>\n\n            <div class="item">\n                <div class="description">\n                    <p class="food-name">Icecream Cake</p>\n                    <p>eu tincidunt tortor aliquam nulla facilisi</p>\n                </div>\n                <img src="./img/ice-cream-cake.jpg" alt="ice-cream image">\n            </div>\n        </div>\n\n        <div class="row">\n            <div class="item">\n                <div class="description">\n                    <p class="food-name">Cheesecake</p>\n                    <p>vitae aliquet nec ullamcorper sit amet</p>\n                </div>\n                <img src="./img/cheesecake.jpg" alt="cheese-cake image">\n            </div>\n\n            <div class="item">\n                <div class="description">\n                    <p class="food-name">House Delight</p>\n                    <p>commodo viverra maecenas accumsan lacus vel</p>\n                </div>\n                <img src="./img/house-delight.jpg" alt="House-Delight Image">\n            </div>\n        </div>'})),document.querySelector(".drinks").addEventListener("click",(()=>{console.log("Party Time!!!"),t.style.backgroundImage="url('./img/drinks-header.jpg')",a.innerHTML='        \n        <h2>Drinks Menu</h2>\n\n        <div class="row">\n            <div class="item">\n                <div class="description">\n                    <p class="food-name">Beer</p>\n                    <p>nisi porta lorem mollis aliquam ut</p>\n                </div>\n                <img src="./img/beer.jpg" alt="beer image">\n            </div>\n\n            <div class="item">\n                <div class="description">\n                    <p class="food-name">Wine</p>\n                    <p>elit sed vulputate mi sit amet</p>\n                </div>\n                <img src="./img/wine.jpg" alt="wine image">\n            </div>\n        </div>\n\n        <div class="row">\n            <div class="item">\n                <div class="description">\n                    <p class="food-name">Cocktails</p>\n                    <p>nunc lobortis mattis aliquam faucibus purus</p>\n                </div>\n                <img src="./img/cocktails.jpg" alt="cocktail image">\n            </div>\n\n            <div class="item">\n                <div class="description">\n                    <p class="food-name">Non-alcoholic</p>\n                    <p>vitae auctor eu augue ut lectus</p>\n                </div>\n                <img src="./img/juice.jpg" alt="Juice image">\n            </div>\n        </div>'}))},v=function(){B();const n=document.querySelector("#content");n.appendChild(b());const e=document.createElement("main");e.style.backgroundImage="url('./img/bistro.jpg')",e.style.backgroundSize="cover",e.style.backgroundPosition="left",e.classList.add("home-page"),n.appendChild(e);const t=document.createElement("h1");t.textContent="Satisfying taste buds since 1921!",e.appendChild(t);const a=document.createElement("h2");a.innerHTML='Check out our <button class="menu-link">Menu</button>',e.appendChild(a);const i=document.createElement("footer");i.classList.add("footer"),i.innerHTML='\n    <div class="address-section">\n      <h2>Find us</h2>\n      <p>3224 Street Blvd</p>\n      <p>City, State</p>\n      <p>Zip Code</p>\n      <p>000-000-0000</p>\n    </div>\n\n\n    <div class="operating-hours">\n      <h2> Hours</h2>\n      <p> <span>Monday - Friday:</span> 10:00 am - 11:00 pm</p>\n      <p> <span>Saturday:</span> 9:00 am - 11:30 pm</p>\n      <p> <span>Sunday</span> 9:00 am - 9:00 pm</p>\n\n    </div>\n\n  </div> ',n.appendChild(i),document.querySelector(".menu-link").addEventListener("click",E)},f=function(){B(),console.log("Contact page has been created");const n=document.querySelector("#content");n.appendChild(b());const e=document.createElement("div");e.innerHTML='    \n  <header class="contact-header">\n    <h1>Drop Us a Line</h1>\n  </header>\n\n  <div class="contact-display">\n    <form action="" class="contact-form">\n\n      <table>\n        <tr>\n          <td class="form-label">\n          </td>\n          <td>\n            <h2 class="form-header">How did we do?</h2>\n          </td>\n        </tr>\n\n\n        <tr>\n          <td class="form-label">\n            <label for="name">Name:</label>\n          </td>\n          <td>\n            <input type="text" name="name" id="name" required>\n          </td>\n        </tr>\n\n        <tr>\n          <td class="form-label">\n            <label for="email">Email:</label>\n          </td>\n          <td>\n            <input type="text" name="email" id="email" required>\n          </td>\n        </tr>\n\n\n        <tr>\n          <td class="form-label">\n            <label for="message">Message:</label>\n          </td>\n          <td>\n            <textarea name="message" id="message" cols="20" rows="10" required></textarea>\n          </td>\n        </tr>\n\n\n        <tr>\n          <td>\n          </td>\n\n          <td class="form-label button">\n            <div class="submit-button-div">\n              <button class="submit-form">Submit</button>\n            </div>\n          </td>\n\n        </tr>\n\n      </table>\n\n    \n    </form>\n\n\n    <div class="address-section">\n      <h2>Find us:</h2>\n      <p>3224 Street Blvd</p>\n      <p>City, State</p>\n      <p>Zip Code</p>\n      <p>000-000-0000</p>\n    </div>\n\n\n    <div class="operating-hours">\n      <h2> Hours</h2>\n      <p> <span>Monday - Friday:</span> 10:00 am - 11:00 pm</p>\n      <p> <span>Saturday:</span> 9:00 am - 11:30 pm</p>\n      <p> <span>Sunday</span> 9:00 am - 9:00 pm</p>\n    \n    </div>\n\n  </div>',n.appendChild(e),document.querySelector(".contact-header").style.backgroundImage="url('./img/contact-header.jpg')"};var C=t(702);const B=function(){const n=document.querySelector("#content");n.innerHTML="",n.removeAttribute("style")},b=function(){const n=document.querySelector("#content"),e=document.createElement("nav");e.classList.add("navbar"),n.appendChild(e);const t=document.createElement("div");t.classList.add("logo-container"),e.appendChild(t);const a=document.createElement("a");a.href="index.html",t.appendChild(a);const i=new Image;i.src=C,i.classList.add("company-logo"),a.appendChild(i);const o=document.createElement("a");o.classList.add("toggle-menu"),o.href="#",e.appendChild(o);const s=document.createElement("div");s.classList.add("bar"),o.appendChild(s);const r=document.createElement("div");r.classList.add("bar"),o.appendChild(r);const c=document.createElement("div");c.classList.add("bar"),o.appendChild(c);const A=document.createElement("div");A.classList.add("nav-links"),e.appendChild(A);const d=document.createElement("ul");A.appendChild(d);const l=document.createElement("li");d.appendChild(l);const p=document.createElement("button");p.textContent="Home",p.addEventListener("click",v),l.appendChild(p);const m=document.createElement("li");d.appendChild(m);const u=document.createElement("button");u.textContent="Menu",u.addEventListener("click",E),m.appendChild(u);const g=document.createElement("li");d.appendChild(g);const B=document.createElement("button");B.textContent="Contact",B.addEventListener("click",f),g.appendChild(B);const b=document.querySelector(".toggle-menu"),h=document.querySelector(".nav-links");return b.addEventListener("click",(()=>{h.classList.toggle("open-menu")})),e};console.log("Welcome to Cloud 9 Bistro"),v()})()})();
//# sourceMappingURL=main.js.map