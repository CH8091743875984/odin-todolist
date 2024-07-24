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

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   ToDo: () => (/* binding */ ToDo)\n/* harmony export */ });\n class ToDo {\n    constructor(name) {\n        this.name = name;\n        this.description = null;\n        this.dueDate = null;\n        this.priority = null;\n        this.status = null;\n    }\n\n    get name() {\n        return this.name\n    }\n\n    set name(input) {\n        return this._name = input\n    }\n\n    get description() {\n        return this.description\n    }\n\n    set description(input) {\n        return this._description = input\n    }\n\n    get priority() {\n        return this.priority\n    }\n\n    set priority(input) {\n        const validValues = [null, 'Low', 'Medium', 'High']\n        if (validValues.includes(input)) {\n            this._priority = input\n        }\n        else {\n            alert('not a valid value')\n            return;\n        }\n    }\n\n}\n\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.todoList = [];\n    }\n    \n    addToDo(object) {\n        if (object.constructor.name == 'ToDo') {\n            this.todoList.push(object)\n        } else {\n            alert('not a valid object to append: ' + object.constructor.name)\n        }\n\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack://odin-todolist/./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n\n\nconsole.log('testing 1 2 3')\n\nlet testTD1 = new _functions_js__WEBPACK_IMPORTED_MODULE_0__.ToDo('Test1 ToDo')\nconsole.log(testTD1)\nconsole.log(testTD1.constructor)\nlet testTD2 = new _functions_js__WEBPACK_IMPORTED_MODULE_0__.ToDo('Test ToDo 2')\nlet testProject1 = new _functions_js__WEBPACK_IMPORTED_MODULE_0__.Project('My First Project')\n\n\ntestProject1.addToDo(testTD1)\ntestProject1.addToDo(testTD2)\nconsole.log(testProject1)\n\nwindow.testTD1 = testTD1\nwindow.testTD2 = testTD2\nwindow.testProject1 = testProject1\nwindow.ToDo = _functions_js__WEBPACK_IMPORTED_MODULE_0__.ToDo\n\n//# sourceURL=webpack://odin-todolist/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;