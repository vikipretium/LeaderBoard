/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/bg.jpg */ \"./src/assets/images/bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nbody {\\n  font-family: \\\"Racing Sans One\\\", cursive;\\n  background-color: #6f36ff;\\n  backdrop-filter: blur(6px);\\n}\\n\\ninput::placeholder,\\nspan,\\nbutton {\\n  font-family: \\\"Racing Sans One\\\", cursive;\\n}\\n\\ninput {\\n  height: 35px;\\n  background-color: #6f36ff68;\\n  border: none;\\n  border-radius: 3px;\\n  color: white;\\n  padding-left: 10px;\\n  font-family: \\\"Racing Sans One\\\", cursive;\\n}\\n\\ninput::placeholder {\\n  color: white;\\n}\\n\\ninput:focus {\\n  border-color: green;\\n}\\n\\nbutton {\\n  background: rgb(255 255 255 / 50%);\\n  border-radius: 5px;\\n  padding: 5px;\\n  border: 1px solid #7f4cff48;\\n}\\n\\nbutton:hover {\\n  color: white;\\n  background-color: #6f36ff48;\\n}\\n\\nspan {\\n  padding: 5px;\\n}\\n\\n.container {\\n  display: grid;\\n  grid-template-columns: 4% 44% 4% 44% 4%;\\n  grid-template-rows: 5% 10% 10% 40% 20% 5%;\\n  width: 100%;\\n  height: 100vh;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-size: 100vw;\\n}\\n\\n.head {\\n  grid-column: 2 / span 3;\\n  grid-row: 2;\\n  padding: 1%;\\n  align-self: center;\\n  display: flex;\\n  align-items: center;\\n  gap: 2%;\\n  backdrop-filter: blur(6px);\\n  border: 1px solid #7f4cff48;\\n  color: white;\\n}\\n\\n.icon {\\n  max-width: 50px;\\n}\\n\\n.heading {\\n  font-size: 2.5rem;\\n  color: #6f36ff;\\n  text-shadow: 0 0 5px white;\\n}\\n\\n.score-section {\\n  border: 1px solid #7f4cff48;\\n  grid-column: 2;\\n  grid-row: 4;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 4%;\\n  backdrop-filter: blur(6px);\\n}\\n\\n.scores {\\n  text-shadow: 0 0 4px #6f36ff;\\n}\\n\\n.input-section {\\n  border: 1px solid #7f4cff48;\\n  grid-column: 4;\\n  grid-row: 4;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  gap: 10%;\\n  backdrop-filter: blur(6px);\\n  padding: 10px;\\n  color: white;\\n}\\n\\n.form {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  gap: 1%;\\n}\\n\\n.score-topbar {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 10px;\\n  color: white;\\n}\\n\\n.score-div {\\n  list-style-type: none;\\n  height: 200px;\\n  overflow-x: hidden;\\n  padding: 0 1%;\\n}\\n\\n.score-div:hover {\\n  overflow-y: auto;\\n}\\n\\n.user {\\n  color: white;\\n}\\n\\n.user:nth-child(even) {\\n  background-color: rgb(111 54 255 / 44%);\\n  color: white;\\n}\\n\\n.bt-submit {\\n  width: fit-content;\\n  align-self: flex-end;\\n  color: #6f36ff;\\n}\\n\\n.refresh {\\n  color: #6f36ff;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/modules/add.js":
/*!***********************************!*\
  !*** ./src/assets/modules/add.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/assets/modules/api.js\");\n\n\nconst addPoints = () => {\n  const name = document.querySelector('.name');\n  const point = document.querySelector('.point');\n  const form = document.querySelector('.form');\n  const raw = JSON.stringify({\n    user: name.value,\n    score: point.value,\n  });\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postData)(raw);\n  form.reset();\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getData)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addPoints);\n\n\n//# sourceURL=webpack://webpack-template/./src/assets/modules/add.js?");

/***/ }),

/***/ "./src/assets/modules/api.js":
/*!***********************************!*\
  !*** ./src/assets/modules/api.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postData\": () => (/* binding */ postData),\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nconst fetch = (...args) => __webpack_require__.e(/*! import() */ \"node_modules_node-fetch_browser_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! node-fetch */ \"./node_modules/node-fetch/browser.js\", 23)).then(({ default: fetch }) => fetch(...args));\n\nconst postData = async (raw) => {\n  await fetch(\n    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0ANpM646Uh4lXIJEcl22/scores/',\n    {\n      method: 'post',\n      headers: {\n        'Content-type': 'application/json; charset= UTF-8',\n      },\n      body: raw,\n      redirect: 'follow',\n    },\n  );\n};\n\nconst getData = async () => {\n  const response = await fetch(\n    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0ANpM646Uh4lXIJEcl22/scores/',\n    {\n      method: 'GET',\n      redirect: 'follow',\n    },\n  );\n  const scoreBoard = document.querySelector('.score-div');\n  const scoreList = await response.json();\n  scoreBoard.innerHTML = '';\n  scoreList.result.forEach((event) => {\n    scoreBoard.innerHTML += `<li class=\"user\"><span>${event.user}: ${event.score}</span></li>`;\n  });\n};\n\n\n\n\n//# sourceURL=webpack://webpack-template/./src/assets/modules/api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_modules_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/modules/api.js */ \"./src/assets/modules/api.js\");\n/* harmony import */ var _assets_modules_add_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/modules/add.js */ \"./src/assets/modules/add.js\");\n/* harmony import */ var _assets_images_microverse_logo1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/microverse_logo1.png */ \"./src/assets/images/microverse_logo1.png\");\n\n\n\n\n\nconst formInput = document.querySelector('.form');\n\nformInput.addEventListener('submit', (event) => {\n  event.preventDefault();\n  (0,_assets_modules_add_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\nconst refresh = document.querySelector('.refresh');\nrefresh.addEventListener('click', (e) => {\n  e.preventDefault();\n  (0,_assets_modules_api_js__WEBPACK_IMPORTED_MODULE_1__.getData)();\n});\n\nwindow.onload = () => {\n  (0,_assets_modules_api_js__WEBPACK_IMPORTED_MODULE_1__.getData)();\n};\n\nconst logo = document.createElement('img');\nlogo.className = 'icon';\nlogo.src = _assets_images_microverse_logo1_png__WEBPACK_IMPORTED_MODULE_3__;\ndocument.querySelector('.head').prepend(logo);\n\n\n//# sourceURL=webpack://webpack-template/./src/index.js?");

/***/ }),

/***/ "./src/assets/images/bg.jpg":
/*!**********************************!*\
  !*** ./src/assets/images/bg.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"453018c196e4aae8e749.jpg\";\n\n//# sourceURL=webpack://webpack-template/./src/assets/images/bg.jpg?");

/***/ }),

/***/ "./src/assets/images/microverse_logo1.png":
/*!************************************************!*\
  !*** ./src/assets/images/microverse_logo1.png ***!
  \************************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/png;base64,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\";\n\n//# sourceURL=webpack://webpack-template/./src/assets/images/microverse_logo1.png?");

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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "webpack-template:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;