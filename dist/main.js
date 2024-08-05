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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin:0;\n    padding:0;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.container {\n    background-color: lightgray;\n    display: grid;\n    grid-template: auto 4fr / 200px 5fr;\n    height: 100vh;\n}\n\n.header {\n    background-color: aqua;\n    grid-row: 1 / 2;\n    grid-column: 1 / 3 ;\n}\n\n.sidebar {\n    background-color: pink;\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n}\n\n.workspace {\n    background-color: rgb(252, 255, 207);\n    grid-row: 2 / 3;\n}\n\n.project {\n    background-color: rgb(255, 227, 175);\n}\n\n.task {\n    background-color: white;\n}\n\n.task:hover {\n    background-color: lightgrey;\n}\n\n.formEditTask {\n    background-color: green;\n}\n\n.hiddenForm {\n    display: none;\n}\n\nselect {\n    color:black;\n    width: 100px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Portfolio: () => (/* binding */ Portfolio),\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\n class Task {\n\n    static idCounter = 0;\n\n    constructor(name, assignedProject = null, description='', dueDate='', priority='Low', status='') {\n        \n        this.id = ++Task.idCounter;\n        this.name = name;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.status = status;\n        this.assignedProject = assignedProject;\n    }\n\n    get name() {\n        return this._name\n    }\n\n    set name(input) {\n        return this._name = input\n    }\n\n    get description() {\n        return this._description\n    }\n\n    set description(input) {\n        return this._description = input\n    }\n\n    get priority() {\n        return this._priority\n    }\n\n    set priority(input) {\n        const validValues = [null, 'Low', 'Medium', 'High']\n        if (validValues.includes(input)) {\n            this._priority = input\n        }\n        else {\n            this._priority = 'Low'\n            return;\n        }\n    }\n\n    get status() {  \n        return this._status\n    }\n\n    set status(input) {\n        return this._status = input\n    }\n\n    get assignedProject() {\n        return this._assignedProject\n    }\n\n    set assignedProject(newProject) {\n        if (this._assignedProject) {\n            this._assignedProject.removeTask(this);\n        }\n        if (newProject) {\n            //console.log('pushing to task list from task object')\n            newProject.assignTask(this)\n        }\n        this._assignedProject = newProject\n    }\n\n}\n\nclass Project {\n\n    static idCounter = 0;\n\n    constructor(name) {\n        this.id = ++Project.idCounter;\n        this.name = name;\n        this.taskList = [];\n    }\n\n    get name() {\n        return this._name\n    }\n\n    set name(input) {\n        return this._name = input\n    }\n    \n    assignTask(object) {\n        //pushes task object into taskList of parent object\n        if (object.constructor.name == 'Task') {\n            this.taskList.push(object)\n        } else {\n            alert('not a valid object to append: ' + object.constructor.name)\n        }\n    }\n\n    createTask(name) {\n        //creates a new Task object, assigns to this parent\n        let newTask = new Task(name, this)\n        // this.assignTask(newTask)  //would be a dup if called here\n        return newTask\n    }\n\n    removeTask(taskObject) {\n        const index = this.taskList.indexOf(taskObject)\n        // console.log('removed task index:')\n        // console.log(index)\n        if (index >-1) {\n            this.taskList.splice(index, 1)\n            //taskObject.assignedProject = null\n        } else {\n            console.log('task not found')\n            //alert('task not found')\n        }\n\n        }\n    \n\n    // deleteTaskByExactMatch(object) {\n    //     //deletes an object by \"exact match\" - expects the object to be passed as an argument\n    //     //instead of using id or index\n    //     this.taskList = this.taskList.filter(obj => obj !== object)\n    // }\n}\n\nclass Portfolio {\n    constructor(name) {\n        this.name = 'myPortfolio'\n        this.projectList = []\n        this.createProject('Unassigned')\n    }\n\n    getProjectListNames() {\n        return this.projectList.map(item => item['name'])\n    }\n\n    getProjectByName(name) {\n        const projectSearch = this.projectList.filter(project => project.name === name)\n        //needs handling of multiple values? as a just in case?\n        return projectSearch[0]\n    }\n\n    assignProject(object) {\n        if (object.constructor.name == 'Project') {\n            this.projectList.push(object)\n        } else {\n            alert('not a valid object to append: ' + object.constructor.name)\n        }\n    }\n\n    //should this have a check for dup names?\n    createProject(name) {\n        let newProject = new Project(name)\n        this.assignProject(newProject)\n        return newProject\n    }\n\n    \n   \n}\n\n\n//# sourceURL=webpack://odin-todolist/./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\nconsole.log('initializing')\n\n//this to demo project creation, task creation, task reassignment\nlet p1 = _ui_js__WEBPACK_IMPORTED_MODULE_1__.myPortfolio.createProject('named project 1')\nlet p2 = _ui_js__WEBPACK_IMPORTED_MODULE_1__.myPortfolio.createProject('named project 2')\n\nlet t1 = p1.createTask('mytask1')\n\nt1.assignedProject = p2\n\n_ui_js__WEBPACK_IMPORTED_MODULE_1__.myPortfolio.getProjectByName('named project 1').createTask('mytask2')\n\n\n\n// let myTask = new Task('test task name', 'test t1 desc', 'test t1 date', 'Low', 'test t1 status')\n// myPortfolio.getProjectByName('named project 1').assignTask(myTask)\n\n// let myTask2 = new Task('test task name2', 'test t2 desc', 'test t2 date', 'Medium', 'test t2 status')\n// newProject.assignTask(myTask2)\n\n\n\nwindow.myPortfolio = _ui_js__WEBPACK_IMPORTED_MODULE_1__.myPortfolio\n\n;(0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.renderUI)()\n\n;(0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.refreshWorkspace)()\n\n//to dos - Class: how to remove task objects DOM: task add, project add, project delete ; will we stick with individual element add/create or shoudl we just rerender the whole thing\n//will we need IDs on the DOM elements to align with the portfolio object\n\n//# sourceURL=webpack://odin-todolist/./src/index.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   myPortfolio: () => (/* binding */ myPortfolio),\n/* harmony export */   refreshWorkspace: () => (/* binding */ refreshWorkspace),\n/* harmony export */   renderProject: () => (/* binding */ renderProject),\n/* harmony export */   renderSidebar: () => (/* binding */ renderSidebar),\n/* harmony export */   renderTask: () => (/* binding */ renderTask),\n/* harmony export */   renderUI: () => (/* binding */ renderUI),\n/* harmony export */   setHiddenToggleListener: () => (/* binding */ setHiddenToggleListener),\n/* harmony export */   setTaskButtonCancel: () => (/* binding */ setTaskButtonCancel),\n/* harmony export */   setTaskButtonDelete: () => (/* binding */ setTaskButtonDelete),\n/* harmony export */   setTaskFormSubmit: () => (/* binding */ setTaskFormSubmit)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n\n\nconst myPortfolio = new _functions_js__WEBPACK_IMPORTED_MODULE_0__.Portfolio('myPortfolio')\n\n\nfunction renderSidebar() {\n    const sidebar = document.querySelector('.sidebar')\n\n    const sidebarCreationBtns = document.createElement('div')\n\n    const addProjectBtn = document.createElement('button')\n    addProjectBtn.textContent = 'Create Project'\n    setAddProjectBtn(addProjectBtn)\n\n    const addTaskBtn = document.createElement('button')\n    addTaskBtn.textContent = 'Create Task'\n    setAddTaskBtn(addTaskBtn)\n\n    sidebarCreationBtns.appendChild(addProjectBtn)\n    sidebarCreationBtns.appendChild(addTaskBtn)\n\n    sidebar.appendChild(sidebarCreationBtns)\n\n    //need to render links for filtering to a subset of projects, or subset of due dates\n\n}\n\nfunction addProject(myProjectName) {\n    const projectObject = myPortfolio.createProject(myProjectName)\n    \n    refreshWorkspace()\n    //we need a refresh when this happens to repopulate the project list in the form edit dropdown.\n    //may also need to force people to cancel their in progress changes in the form\n}\n\nfunction setAddProjectBtn(element) {\n    element.addEventListener('click', () => {\n        let response = prompt('New project name?')\n        addProject(response)\n        })\n\n    }\n\nfunction addTask(myTaskName) {\n    const projectObject = myPortfolio.getProjectByName('Unassigned')\n    const taskObject = projectObject.createTask(myTaskName)\n    // renderTask(taskObject)\n    //probably would rather have a refresh task (the divs), and refresh project Div, than refreshing the whole workspace\n    refreshWorkspace()\n}\n\nfunction setAddTaskBtn(element) {\n    element.addEventListener('click', () => {\n        let response = prompt('New task name?')\n        addTask(response)\n        })\n    }\n\n\n//render UI\n\nfunction renderUI() {\n    const body = document.querySelector('body')\n\n    const container = document.createElement('div')\n    container.classList.add('container')\n    body.appendChild(container)\n\n    const header = document.createElement('div')\n    header.classList.add('header')\n    header.textContent = 'Task List'\n    container.appendChild(header)\n\n    const sidebar = document.createElement('div')\n    sidebar.classList.add('sidebar')\n    container.appendChild(sidebar)\n\n    const workspace = document.createElement('div')\n    workspace.classList.add('workspace')\n    container.appendChild(workspace)\n\n    renderSidebar()\n\n}\n\nfunction renderProject(projectObject) {\n    const workspace = document.querySelector('.workspace')\n\n    const project = document.createElement('div')\n    project.classList.add('project')\n    project.textContent = projectObject.name\n    workspace.appendChild(project)\n}\n\nfunction renderTask(taskObject) {\n    const workspace = document.querySelector('.workspace')\n\n    const taskContainer = document.createElement('div')\n    taskContainer.classList.add('taskContainer')\n\n    const task = document.createElement('div')\n    task.classList.add('task')\n    task.textContent = taskObject.name\n    \n    const form = document.createElement('div')\n    form.classList.add('formEditTask')\n    form.classList.add('hiddenForm')\n    form.textContent = 'Test edit form'\n    \n    const formContents = renderEditFormTask(taskObject)\n\n    form.appendChild(formContents)\n    \n    taskContainer.appendChild(task)\n    taskContainer.appendChild(form)\n\n    setHiddenToggleListener(taskContainer)\n    setRerenderFormValuesListener(taskContainer, taskObject)\n    \n    workspace.appendChild(taskContainer)\n}\n\nfunction renderWorkspace() {\n    myPortfolio.projectList.forEach((project) => {\n        //console.log(project)\n        renderProject(project)\n        \n        //console.log(project.taskList)\n        project.taskList.forEach((task) => {\n            //console.log(task)\n            renderTask(task)\n        })\n    })\n}\n\nfunction clearWorkspace() {\n    const workspace = document.querySelector('.workspace')\n\n    while (workspace.firstChild) {\n        workspace.removeChild(workspace.firstChild)\n    }\n}\n\nfunction refreshWorkspace() {\n    //if user has a form open for editing, may want a warning that unsaved progress will be lost\n    clearWorkspace()\n    renderWorkspace()\n}\n\n\n//myName, myDescription, myDueDate, myPriority, myStatus\n\nfunction renderFormValues (element, taskObject) {\n    \n    element.querySelectorAll('input').forEach((input) => {\n        input.value = taskObject[input.id]\n    }\n)\n}\n\nfunction renderEditFormTask (taskObject) {\n    const form = document.createElement('form')\n    const formID = 'taskForm_'+taskObject.id\n    form.setAttribute('id', formID)\n\n    const formFields = document.createElement('div')\n    \n    const nameLabel = document.createElement('label')\n    nameLabel.setAttribute('for', 'name')\n    nameLabel.textContent = 'Name'\n\n    const name = document.createElement('input')\n    name.setAttribute('id', 'name')\n    name.setAttribute('type', 'text')\n    name.setAttribute('name', 'task_name')\n    name.setAttribute('value', taskObject.name)\n\n    const descriptionLabel = document.createElement('label')\n    descriptionLabel.setAttribute('for', 'description')\n    descriptionLabel.textContent = 'Description'\n\n    const description = document.createElement('input')\n    description.setAttribute('id', 'description')\n    description.setAttribute('type', 'text')\n    description.setAttribute('name', 'description')\n    description.setAttribute('value', taskObject.description)\n\n    const dueDateLabel = document.createElement('label')\n    dueDateLabel.setAttribute('for', 'dueDate')\n    dueDateLabel.textContent = 'Due Date'\n\n    const dueDate = document.createElement('input')\n    dueDate.setAttribute('id', 'dueDate')\n    dueDate.setAttribute('type', 'text')\n    dueDate.setAttribute('name', 'dueDate')\n    dueDate.setAttribute('value', taskObject.dueDate)\n\n    const priorityLabel = document.createElement('label')\n    priorityLabel.setAttribute('for', 'priority')\n    priorityLabel.textContent = 'Priority'\n\n    const priority = document.createElement('input')\n    priority.setAttribute('id', 'priority')\n    priority.setAttribute('type', 'text')\n    priority.setAttribute('name', 'priority')\n    priority.setAttribute('value', taskObject.priority)\n\n\n    const statusLabel = document.createElement('label')\n    statusLabel.setAttribute('for', 'status')\n    statusLabel.textContent = 'Status'\n\n    const status = document.createElement('input')\n    status.setAttribute('id', 'status')\n    status.setAttribute('type', 'text')\n    status.setAttribute('name', 'status')\n    status.setAttribute('value', taskObject.status)\n\n\n    const projectLabel = document.createElement('label')\n    projectLabel.setAttribute('for', 'project')\n    projectLabel.textContent = 'Project'\n    \n    const project = document.createElement('select')\n    project.setAttribute('id', 'project')\n    project.setAttribute('name', 'project')\n    project.setAttribute('value', taskObject.assignedProject.name)\n    const projectList = myPortfolio.getProjectListNames()\n    moveItemTopOfArray(projectList, taskObject.assignedProject.name)\n    projectList.forEach(item => {\n        const projectSelect = document.createElement('option')\n        projectSelect.setAttribute('value', item)\n        projectSelect.textContent = item\n        project.appendChild(projectSelect)\n    })\n\n    formFields.appendChild(nameLabel)\n    formFields.appendChild(name)\n    formFields.appendChild(descriptionLabel)\n    formFields.appendChild(description)\n    formFields.appendChild(dueDateLabel)\n    formFields.appendChild(dueDate)\n    formFields.appendChild(priorityLabel)\n    formFields.appendChild(priority)\n    formFields.appendChild(statusLabel)\n    formFields.appendChild(status)\n    formFields.appendChild(projectLabel)\n    formFields.appendChild(project)\n\n    const formButtons = document.createElement('div')\n\n    const saveForm = document.createElement('button')\n    saveForm.setAttribute('id', 'save')\n    saveForm.setAttribute('type', 'submit')\n    saveForm.setAttribute('form', formID)\n    saveForm.textContent = 'Save'\n   \n    const cancelForm = document.createElement('button')\n    cancelForm.textContent = 'Cancel'\n\n    const deleteForm = document.createElement('button')\n    deleteForm.textContent = 'Delete'\n\n    formButtons.appendChild(saveForm)\n    formButtons.appendChild(cancelForm)\n    formButtons.appendChild(deleteForm)\n\n    form.appendChild(formFields)\n    form.appendChild(formButtons)\n\n    setTaskFormSubmit(form, taskObject)\n    setTaskButtonCancel(form, taskObject, cancelForm)\n    setTaskButtonDelete(form, taskObject, deleteForm)\n\n\n    return form\n}\n\nfunction moveItemTopOfArray(array, item) {\n    //given a list of values and an individual value, move the individual value to the beginning\n    const index = array.indexOf(item)\n\n    if (index !== -1) {\n        array.splice(index,1)\n        array.unshift(item)\n    }\n\n    return array\n\n}\n\nfunction setHiddenToggleListener(element) {\n    \n    const task = element.querySelector('.task')\n    const form = element.querySelector('.formEditTask')\n\n    task.addEventListener('click', function () {\n        form.classList.toggle('hiddenForm')\n    }\n)}\n\nfunction setRerenderFormValuesListener(element, object) {\n    \n    const task = element.querySelector('.task')\n    const form = element.querySelector('.formEditTask')\n\n    task.addEventListener('click', function () {\n        renderFormValues(form, object)\n    })\n}\n\nfunction setTaskFormSubmit(element, taskObject) {\n\n    element.addEventListener('submit', function(event) {\n        event.preventDefault()\n\n        element.querySelectorAll('input').forEach((input) => {\n            // console.log(input)\n            // console.log(input.id)\n            // console.log(input.value)\n            taskObject[input.id] = input.value\n        })\n\n        const selectElement = element.querySelector('select')\n        const selectedOption = selectElement.options[selectElement.selectedIndex].textContent\n\n        const projectObject = myPortfolio.getProjectByName(selectedOption)\n        \n        taskObject.assignedProject = projectObject\n        //also need to unassign from current project\n\n        refreshWorkspace()\n            \n        }\n        \n    )\n}\n\nfunction setTaskButtonCancel(element, object, button) {\n\n    button.addEventListener('click', () => {\n        renderFormValues(element, object)\n        })\n    }\n\nfunction setTaskButtonDelete(element, object, button) {\n\n    button.addEventListener('click', () => {\n        const userResponse = confirm('Are you sure you want to delete?')\n        if (userResponse) {\n            object.assignedProject.removeTask(object)\n            refreshWorkspace()\n\n            //element.parentElement.parentElement.remove()\n            alert('element deleted')\n\n        } else {\n            alert('deletion canceled')\n        }\n\n        \n        \n        })\n    }\n\n\n// myPortfolio.createProject('Unassigned')\n\n//render individual to do item\n\n\n\n//render expanded to do item for editing\n\n//render sidebar, sectioning for projects and their tasks, counters, etc\n\n//# sourceURL=webpack://odin-todolist/./src/ui.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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