/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/principal.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Modulos/moduloA.js":
/*!********************************!*\
  !*** ./src/Modulos/moduloA.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { saudacao } = __webpack_require__(/*! ./moduloB */ \"./src/Modulos/moduloB.js\");\nconst moduloB = __webpack_require__(/*! ./moduloB */ \"./src/Modulos/moduloB.js\");\nconsole.log(saudacao());\n\n\n//# sourceURL=webpack:///./src/Modulos/moduloA.js?");

/***/ }),

/***/ "./src/Modulos/moduloB.js":
/*!********************************!*\
  !*** ./src/Modulos/moduloB.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  saudacao() {\n    return \"Olá eu sou o Módulo B!!!\";\n  },\n};\n\n\n//# sourceURL=webpack:///./src/Modulos/moduloB.js?");

/***/ }),

/***/ "./src/pessoa.js":
/*!***********************!*\
  !*** ./src/pessoa.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pessoa; });\nclass Pessoa {\n  cumprimentar() {\n    return \"Bom Dia!\";\n  }\n}\n\n\n//# sourceURL=webpack:///./src/pessoa.js?");

/***/ }),

/***/ "./src/principal.js":
/*!**************************!*\
  !*** ./src/principal.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pessoa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pessoa */ \"./src/pessoa.js\");\n/* harmony import */ var _Modulos_moduloA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modulos/moduloA */ \"./src/Modulos/moduloA.js\");\n/* harmony import */ var _Modulos_moduloA__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Modulos_moduloA__WEBPACK_IMPORTED_MODULE_1__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./assets/css/estilo.css\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\nconst atendente = new _pessoa__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconsole.log(atendente.cumprimentar());\n\n\n//# sourceURL=webpack:///./src/principal.js?");

/***/ })

/******/ });