/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/home.png */ "./src/assets/home.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/menu-burger.png */ "./src/assets/menu-burger.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/previous.png */ "./src/assets/previous.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/next.png */ "./src/assets/next.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/slide-1.jpg */ "./src/assets/slide-1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/slide-2.jpg */ "./src/assets/slide-2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/slide-3.jpg */ "./src/assets/slide-3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/slide-4.jpg */ "./src/assets/slide-4.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/slide-5.jpg */ "./src/assets/slide-5.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --main: #064e3b;
  --accent: #10b981;
  --accent2: #6ee7b7;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  width: 100%;
}

.app {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 225px 1fr;
}

header {
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
}

/* Desktop Navigation */

.nav-item,
.nav-item li {
  list-style-type: none;
}

.home-icon {
  position: relative;
  display: inline-block;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  width: 18px;
  height: 18px;
  background-size: cover;
}

.desktop-nav {
  background-color: var(--main);
  width: 65%;
  border-radius: 50px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
}

@media (max-width: 992px) {
  .desktop-nav {
    display: none;
  }
}

.nav-item {
  position: relative;
  display: inline-block;
  margin-right: 35px;
  padding: 18px;
}

.desktop-nav me .nav-item:hover {
  cursor: pointer;
  background-color: var(--accent);
}

.desktop-nav .nav-item:last-child {
  margin-right: 0;
}

.dropdown-content::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 20px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid var(--accent);
}

.dropdown-content li {
  padding: 5px;
}

.dropdown-content li:hover {
  color: var(--main);
}

.shopping-drop .inner-dropdown {
  display: flex;
  justify-content: center;
}

.shopping-drop li {
  margin-right: 10px;
}

.dropdown-content {
  visibility: hidden;
  position: absolute;
  left: -25px;
  top: 100%;
  z-index: 1000;
  border: 25px solid transparent;
}

.inner-dropdown {
  background-color: var(--accent);
  padding: 10px;
  width: 250px;
  border-radius: 8px;
}

.reveal {
  visibility: visible;
}

/* Mobile Navigation */

@media (min-width: 992px) {
  .mobile-nav {
    display: none;
  }
}

.mobile-nav {
  background-color: var(--main);
  width: 100%;
  height: 50px;
  grid-row: 1 / 2;
  position: relative;
}

.menu-icon {
  position: absolute;
  top: 15px;
  left: 50%;
  right: 50%;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  width: 22px;
  height: 22px;
  background-size: cover;
  margin-left: -10px;
}

.mobile-nav .home-icon {
  position: absolute;
  top: 15px;
}

.mobile-nav .nav-item:not(:nth-child(1)):not(:nth-child(2)) {
  position: relative;
  text-align: center;
  top: -10px;
  width: 100%;
  background-color: var(--accent2);
  margin-top: -1px;
  /* display: none; */
}

.hide {
  display: none;
}

/* Slider */

main {
  display: flex;
  justify-content: center;
}

.frame {
  /* border: 1px dashed blue; */
  width: 850px;
  height: 525px;
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  justify-items: center;
  align-items: center;
}

.previous {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  width: 64px;
  height: 64px;
  background-size: cover;
  border: none;
  background-color: transparent;
}

.previous:hover {
  transform: scale(1.07);
}

.next {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  width: 64px;
  height: 64px;
  background-size: cover;
  border: none;
  background-color: transparent;
}

.next:hover {
  transform: scale(1.07);
}

.slider {
  /* border: 1px dashed red; */
  width: 640px;
  height: 427px;
  grid-column: 2 / 3;
}

.slider-img {
  width: 640px;
  height: 427px;
  border-radius: 8px;
  box-shadow: 5px 5px 5px 2px rgb(0, 0, 0, 0.33);
}

.slide-1 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}

.slide-2 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
}

.slide-3 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
}

.slide-4 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
}

.slide-5 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
}

.dot-container {
  /* border: 1px dashed green; */
  width: 720px;
  height: 30px;
  grid-column: 2 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.dots {
  background-color: rgb(0, 0, 0, 0.09);
  width: 18px;
  height: 18px;
  border-radius: 100px;
}

.dots:hover {
  cursor: pointer;
}

.dot-active {
  background-color: var(--main);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --main: #064e3b;\n  --accent: #10b981;\n  --accent2: #6ee7b7;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n}\n\n.app {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 225px 1fr;\n}\n\nheader {\n  grid-row: 1 / 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 25px;\n}\n\n/* Desktop Navigation */\n\n.nav-item,\n.nav-item li {\n  list-style-type: none;\n}\n\n.home-icon {\n  position: relative;\n  display: inline-block;\n  background-image: url(./assets/home.png);\n  width: 18px;\n  height: 18px;\n  background-size: cover;\n}\n\n.desktop-nav {\n  background-color: var(--main);\n  width: 65%;\n  border-radius: 50px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n@media (max-width: 992px) {\n  .desktop-nav {\n    display: none;\n  }\n}\n\n.nav-item {\n  position: relative;\n  display: inline-block;\n  margin-right: 35px;\n  padding: 18px;\n}\n\n.desktop-nav me .nav-item:hover {\n  cursor: pointer;\n  background-color: var(--accent);\n}\n\n.desktop-nav .nav-item:last-child {\n  margin-right: 0;\n}\n\n.dropdown-content::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: 20px;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-bottom: 10px solid var(--accent);\n}\n\n.dropdown-content li {\n  padding: 5px;\n}\n\n.dropdown-content li:hover {\n  color: var(--main);\n}\n\n.shopping-drop .inner-dropdown {\n  display: flex;\n  justify-content: center;\n}\n\n.shopping-drop li {\n  margin-right: 10px;\n}\n\n.dropdown-content {\n  visibility: hidden;\n  position: absolute;\n  left: -25px;\n  top: 100%;\n  z-index: 1000;\n  border: 25px solid transparent;\n}\n\n.inner-dropdown {\n  background-color: var(--accent);\n  padding: 10px;\n  width: 250px;\n  border-radius: 8px;\n}\n\n.reveal {\n  visibility: visible;\n}\n\n/* Mobile Navigation */\n\n@media (min-width: 992px) {\n  .mobile-nav {\n    display: none;\n  }\n}\n\n.mobile-nav {\n  background-color: var(--main);\n  width: 100%;\n  height: 50px;\n  grid-row: 1 / 2;\n  position: relative;\n}\n\n.menu-icon {\n  position: absolute;\n  top: 15px;\n  left: 50%;\n  right: 50%;\n  background-image: url(./assets/menu-burger.png);\n  width: 22px;\n  height: 22px;\n  background-size: cover;\n  margin-left: -10px;\n}\n\n.mobile-nav .home-icon {\n  position: absolute;\n  top: 15px;\n}\n\n.mobile-nav .nav-item:not(:nth-child(1)):not(:nth-child(2)) {\n  position: relative;\n  text-align: center;\n  top: -10px;\n  width: 100%;\n  background-color: var(--accent2);\n  margin-top: -1px;\n  /* display: none; */\n}\n\n.hide {\n  display: none;\n}\n\n/* Slider */\n\nmain {\n  display: flex;\n  justify-content: center;\n}\n\n.frame {\n  /* border: 1px dashed blue; */\n  width: 850px;\n  height: 525px;\n  display: grid;\n  grid-template-columns: 50px 1fr 50px;\n  justify-items: center;\n  align-items: center;\n}\n\n.previous {\n  background-image: url(./assets/previous.png);\n  width: 64px;\n  height: 64px;\n  background-size: cover;\n  border: none;\n  background-color: transparent;\n}\n\n.previous:hover {\n  transform: scale(1.07);\n}\n\n.next {\n  background-image: url(./assets/next.png);\n  width: 64px;\n  height: 64px;\n  background-size: cover;\n  border: none;\n  background-color: transparent;\n}\n\n.next:hover {\n  transform: scale(1.07);\n}\n\n.slider {\n  /* border: 1px dashed red; */\n  width: 640px;\n  height: 427px;\n  grid-column: 2 / 3;\n}\n\n.slider-img {\n  width: 640px;\n  height: 427px;\n  border-radius: 8px;\n  box-shadow: 5px 5px 5px 2px rgb(0, 0, 0, 0.33);\n}\n\n.slide-1 {\n  background-image: url(./assets/slide-1.jpg);\n}\n\n.slide-2 {\n  background-image: url(./assets/slide-2.jpg);\n}\n\n.slide-3 {\n  background-image: url(./assets/slide-3.jpg);\n}\n\n.slide-4 {\n  background-image: url(./assets/slide-4.jpg);\n}\n\n.slide-5 {\n  background-image: url(./assets/slide-5.jpg);\n}\n\n.dot-container {\n  /* border: 1px dashed green; */\n  width: 720px;\n  height: 30px;\n  grid-column: 2 / 3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n}\n\n.dots {\n  background-color: rgb(0, 0, 0, 0.09);\n  width: 18px;\n  height: 18px;\n  border-radius: 100px;\n}\n\n.dots:hover {\n  cursor: pointer;\n}\n\n.dot-active {\n  background-color: var(--main);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/desktop-navigation.js":
/*!***********************************!*\
  !*** ./src/desktop-navigation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dynamicDesktopNavigation: () => (/* binding */ dynamicDesktopNavigation)
/* harmony export */ });


function dynamicDesktopNavigation() {
  const navList = document.querySelectorAll(".nav-item");

  const navArray = [];
  const noDropdownIDs = ["home", "faq"];

  navList.forEach((nav) => {
    nav.addEventListener("mouseenter", showDropdown);
    nav.addEventListener("mouseleave", hideDropdown);

    if (noDropdownIDs.indexOf(nav.id) < 0) {
      navArray.push(nav.id);
    }

    function showDropdown() {
      let location = null;
      if (navArray.indexOf(nav.id) >= 0) {
        location = navArray.indexOf(nav.id);

        const dropdown = document.querySelector(
          "." + navArray[location] + "-drop",
        );

        dropdown.classList.add("reveal");
      }
    }

    function hideDropdown() {
      let location = null;
      if (navArray.indexOf(nav.id) >= 0) {
        location = navArray.indexOf(nav.id);

        const dropdown = document.querySelector(
          "." + navArray[location] + "-drop",
        );

        dropdown.classList.remove("reveal");
      }
    }
  });
}


/***/ }),

/***/ "./src/mobile-navigation.js":
/*!**********************************!*\
  !*** ./src/mobile-navigation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dynamicMobileNavigation: () => (/* binding */ dynamicMobileNavigation)
/* harmony export */ });
/* harmony import */ var _assets_menu_close_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/menu-close.png */ "./src/assets/menu-close.png");
/* harmony import */ var _assets_menu_burger_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/menu-burger.png */ "./src/assets/menu-burger.png");




function dynamicMobileNavigation() {
  const menuIcon = document.querySelector(".menu-icon");
  const mobileDropdown = document.querySelectorAll(
    ".mobile-nav .nav-item:not(:nth-child(1)):not(:nth-child(2))",
  );

  function toggleMobileMenu() {
    if (menuIcon.classList.contains("menu-burger")) {
      menuIcon.style.backgroundImage = `url(${_assets_menu_close_png__WEBPACK_IMPORTED_MODULE_0__})`;
      menuIcon.classList.remove("menu-burger");
      menuIcon.classList.add("menu-close");
      mobileDropdown.forEach((dropdown) => {
        dropdown.classList.remove("hide");
      });
    } else {
      menuIcon.style.backgroundImage = `url(${_assets_menu_burger_png__WEBPACK_IMPORTED_MODULE_1__})`;
      menuIcon.classList.remove("menu-close");
      menuIcon.classList.add("menu-burger");
      mobileDropdown.forEach((dropdown) => {
        dropdown.classList.add("hide");
      });
    }
  }

  menuIcon.addEventListener("click", toggleMobileMenu);
}


/***/ }),

/***/ "./src/assets/home.png":
/*!*****************************!*\
  !*** ./src/assets/home.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "home.png";

/***/ }),

/***/ "./src/assets/menu-burger.png":
/*!************************************!*\
  !*** ./src/assets/menu-burger.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "menu-burger.png";

/***/ }),

/***/ "./src/assets/menu-close.png":
/*!***********************************!*\
  !*** ./src/assets/menu-close.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "menu-close.png";

/***/ }),

/***/ "./src/assets/next.png":
/*!*****************************!*\
  !*** ./src/assets/next.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "next.png";

/***/ }),

/***/ "./src/assets/previous.png":
/*!*********************************!*\
  !*** ./src/assets/previous.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "previous.png";

/***/ }),

/***/ "./src/assets/slide-1.jpg":
/*!********************************!*\
  !*** ./src/assets/slide-1.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "slide-1.jpg";

/***/ }),

/***/ "./src/assets/slide-2.jpg":
/*!********************************!*\
  !*** ./src/assets/slide-2.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "slide-2.jpg";

/***/ }),

/***/ "./src/assets/slide-3.jpg":
/*!********************************!*\
  !*** ./src/assets/slide-3.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "slide-3.jpg";

/***/ }),

/***/ "./src/assets/slide-4.jpg":
/*!********************************!*\
  !*** ./src/assets/slide-4.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "slide-4.jpg";

/***/ }),

/***/ "./src/assets/slide-5.jpg":
/*!********************************!*\
  !*** ./src/assets/slide-5.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "slide-5.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _desktop_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desktop-navigation */ "./src/desktop-navigation.js");
/* harmony import */ var _mobile_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-navigation */ "./src/mobile-navigation.js");




(0,_desktop_navigation__WEBPACK_IMPORTED_MODULE_1__.dynamicDesktopNavigation)();
(0,_mobile_navigation__WEBPACK_IMPORTED_MODULE_2__.dynamicMobileNavigation)();

// slider.js

// animation
const fadeIn = [
  { opacity: "0", transform: "scale(0.9)" },
  { opacity: "1", transform: "scale(1)" },
];

const fadeTiming = {
  duration: 750,
  iterations: 1,
};

const totalSlides = 5;
let slideNumber = 1;

function nextSlide() {
  const slide = document.querySelector(".slider-img");

  if (
    slideNumber !== totalSlides &&
    slide.classList.contains("slide-" + slideNumber)
  ) {
    slide.classList.remove("slide-" + slideNumber);
    slide.animate(fadeIn, fadeTiming);
    slideNumber++;
    slide.classList.add("slide-" + slideNumber);
  } else {
    slide.classList.remove("slide-" + slideNumber);
    slide.animate(fadeIn, fadeTiming);
    slideNumber = 1;
    slide.classList.add("slide-" + slideNumber);
  }
  activeDot();
}

setInterval(nextSlide, 5000);

function previousSlide() {
  const slide = document.querySelector(".slider-img");

  if (slideNumber === 1 && slide.classList.contains("slide-" + slideNumber)) {
    slide.classList.remove("slide-" + slideNumber);
    slide.animate(fadeIn, fadeTiming);
    slideNumber = totalSlides;
    slide.classList.add("slide-" + slideNumber);
  } else {
    slide.classList.remove("slide-" + slideNumber);
    slide.animate(fadeIn, fadeTiming);
    slideNumber--;
    slide.classList.add("slide-" + slideNumber);
  }
  activeDot();
}

const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");

nextButton.addEventListener("click", nextSlide);
previousButton.addEventListener("click", previousSlide);

const dots = document.querySelectorAll(".dots");

dots.forEach((dot) => {
  dot.addEventListener("click", selectDot);
});

// TODO: improve selectDot function

function selectDot() {
  const slide = document.querySelector(".slider-img");

  if (this.classList.contains("dot-active")) {
    console.log("not this one!");
  } else {
    slide.classList.remove("slide-1");
    slide.classList.remove("slide-2");
    slide.classList.remove("slide-3");
    slide.classList.remove("slide-4");
    slide.classList.remove("slide-5");

    slide.animate(fadeIn, fadeTiming);
  }

  if (this.classList.contains("dot-1")) {
    slideNumber = 1;
  } else if (this.classList.contains("dot-2")) {
    slideNumber = 2;
  } else if (this.classList.contains("dot-3")) {
    slideNumber = 3;
  } else if (this.classList.contains("dot-4")) {
    slideNumber = 4;
  } else if (this.classList.contains("dot-5")) {
    slideNumber = 5;
  }

  slide.classList.add("slide-" + slideNumber);

  activeDot();
}

function activeDot() {
  const activeDot = document.querySelector(".dot-" + slideNumber);

  dots.forEach((dot) => {
    if (dot.classList.contains("dot-active")) {
      dot.classList.remove("dot-active");
    }
  });

  activeDot.classList.add("dot-active");
}

})();

/******/ })()
;
//# sourceMappingURL=index.14d899a948e933816bbf.js.map