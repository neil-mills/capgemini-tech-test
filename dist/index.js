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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "hmrc",
  "use": "hmrc-usage",
  "viewBox": "0 0 300 33.6",
  "content": "<symbol viewBox=\"0 0 300 33.6\" id=\"hmrc\">\n<g>\n\t<path style=\"fill:#231F20;\" d=\"M51.8,8.8H54V16h8.8V8.8h2.2v16.8h-2.2v-7.7H54v7.7h-2.2C51.8,25.6,51.8,8.8,51.8,8.8z\" />\n\t<path style=\"fill:#231F20;\" d=\"M68.3,8.8h3.1l5.3,14.1l5.3-14.1H85v16.8h-2.1v-14h0l-5.2,14h-1.9l-5.2-14h0v14h-2.1V8.8z\" />\n\t<path style=\"fill:#231F20;\" d=\"M94.8,8.8h7.9c3.1,0,5.1,1.7,5.1,4.4c0,2-0.9,3.7-2.9,4.3v0c2,0.4,2.3,1.8,2.5,3.5\n\t\tc0.1,1.6,0,3.5,1,4.7h-2.5c-0.6-0.7-0.3-2.5-0.6-4.1c-0.3-1.6-0.6-3.1-2.8-3.1H97v7.2h-2.2C94.8,25.6,94.8,8.8,94.8,8.8z\n\t\t M101.7,16.5c2.1,0,3.9-0.5,3.9-3c0-1.6-0.9-2.9-3-2.9h-5.6v5.9H101.7z\" />\n\t<path style=\"fill:#231F20;\" d=\"M120.4,21.7c-0.5,2.7-2.5,4.1-5.2,4.1c-3.9,0-5.7-2.7-5.8-6.4c0-3.6,2.4-6.3,5.7-6.3\n\t\tc4.3,0,5.6,4,5.5,7h-9.1c-0.1,2.1,1.1,4,3.8,4c1.6,0,2.8-0.8,3.1-2.4H120.4z M118.5,18.3c-0.1-1.9-1.6-3.4-3.5-3.4\n\t\tc-2.1,0-3.4,1.6-3.5,3.4C111.5,18.3,118.5,18.3,118.5,18.3z\" />\n\t<path style=\"fill:#231F20;\" d=\"M127.3,25.6h-2.1l-4.5-12.2h2.2l3.4,10.1h0l3.3-10.1h2.1C131.7,13.4,127.3,25.6,127.3,25.6z\" />\n\t<path style=\"fill:#231F20;\" d=\"M142.9,21.7c-0.5,2.7-2.5,4.1-5.2,4.1c-3.9,0-5.7-2.7-5.8-6.4c0-3.6,2.4-6.3,5.7-6.3\n\t\tc4.3,0,5.6,4,5.5,7H134c-0.1,2.1,1.1,4,3.8,4c1.6,0,2.8-0.8,3.1-2.4C140.9,21.7,142.9,21.7,142.9,21.7z M141,18.3\n\t\tc-0.1-1.9-1.6-3.4-3.5-3.4c-2.1,0-3.4,1.6-3.5,3.4H141z\" />\n\t<path style=\"fill:#231F20;\" d=\"M144.7,13.4h1.9v1.9h0c0.8-1.5,2.2-2.2,3.9-2.2c3.2,0,4.2,1.8,4.2,4.4v8h-2v-8.3\n\t\tc0-1.5-0.9-2.4-2.5-2.4c-2.4,0-3.6,1.6-3.6,3.8v6.9h-2L144.7,13.4L144.7,13.4z\" />\n\t<path style=\"fill:#231F20;\" d=\"M167.2,25.6h-1.9v-1.9h0c-0.8,1.5-2.2,2.2-3.9,2.2c-3.2,0-4.2-1.8-4.2-4.4v-8h2v8.3\n\t\tc0,1.5,0.9,2.4,2.5,2.4c2.4,0,3.6-1.6,3.6-3.8v-6.9h2C167.2,13.4,167.2,25.6,167.2,25.6z\" />\n\t<path style=\"fill:#231F20;\" d=\"M180.1,21.7c-0.5,2.7-2.5,4.1-5.2,4.1c-3.9,0-5.7-2.7-5.8-6.4c0-3.6,2.4-6.3,5.7-6.3\n\t\tc4.3,0,5.6,4,5.5,7h-9.1c-0.1,2.1,1.1,4,3.8,4c1.6,0,2.8-0.8,3.1-2.4C178.1,21.7,180.1,21.7,180.1,21.7z M178.1,18.3\n\t\tc-0.1-1.9-1.6-3.4-3.5-3.4c-2.1,0-3.4,1.6-3.5,3.4C171.2,18.3,178.1,18.3,178.1,18.3z\" />\n\t<path style=\"fill:#231F20;\" d=\"M199.6,24.2c-1,1.6-2.9,2.4-4.8,2.4c-4.5,0-5.2-3.2-5.2-4.6c0-2.6,1.8-3.9,3.9-5.1\n\t\tc-0.9-1.3-1.8-2.2-1.8-3.9c0-1.8,1.4-3.5,3.8-3.5c2.1,0,4.1,1.2,4.1,3.4c0,2-1.6,3.4-3.1,4.4l3.1,3.7c0.3-0.8,0.5-1.7,0.5-2.6h1.9\n\t\tc-0.2,2-0.4,2.7-1.1,4.1l3.3,3.8h-2.6C201.4,26.3,199.6,24.2,199.6,24.2z M194.7,18.2c-1.6,0.9-2.9,1.8-2.9,3.8\n\t\tc0,1.7,1.6,2.8,3.2,2.8c1.6,0,2.8-0.8,3.6-2C198.5,22.8,194.7,18.2,194.7,18.2z M197.6,13c0-1-0.7-1.8-1.9-1.8\n\t\tc-0.9,0-1.9,0.5-1.9,1.8c0,1,0.9,2,1.6,2.9C196.3,15.3,197.6,14.5,197.6,13\" />\n\t<path style=\"fill:#231F20;\" d=\"M223.4,14.5c-0.5-2.4-2.4-3.6-4.7-3.6c-4,0-5.7,3.3-5.7,6.8c0,3.9,1.7,7,5.7,7\n\t\tc2.9,0,4.7-2.1,4.9-4.9h2.2c-0.4,4.2-3.1,6.7-7.3,6.7c-5.2,0-7.8-3.9-7.8-8.8c0-4.9,2.8-8.8,8-8.8c3.5,0,6.4,1.9,6.9,5.4\n\t\tC225.7,14.5,223.4,14.5,223.4,14.5z\" />\n\t<path style=\"fill:#231F20;\" d=\"M237.7,26.3h-1.9v-1.9h0c-0.8,1.5-2.2,2.2-3.9,2.2c-3.2,0-4.2-1.8-4.2-4.4v-8h2v8.3\n\t\tc0,1.5,0.9,2.4,2.5,2.4c2.4,0,3.6-1.6,3.6-3.8v-6.9h2C237.7,14.1,237.7,26.3,237.7,26.3z\" />\n\t<path style=\"fill:#231F20;\" d=\"M241.5,22.5c0.1,1.8,1.6,2.3,3.3,2.3c1.3,0,2.9-0.3,2.9-1.8c0-1.6-2-1.8-4-2.3c-2-0.5-4-1.1-4-3.4\n\t\tc0-2.4,2.4-3.5,4.5-3.5c2.7,0,4.8,0.8,5,3.8h-2c-0.1-1.6-1.5-2.1-2.8-2.1c-1.2,0-2.6,0.3-2.6,1.6c0,1.4,2.1,1.7,4,2.1\n\t\tc2,0.5,4,1.1,4,3.5c0,2.9-2.7,3.9-5.2,3.9c-2.7,0-5-1.1-5.2-4.1C239.4,22.5,241.5,22.5,241.5,22.5z\" />\n\t<path style=\"fill:#231F20;\" d=\"M254.3,14.1h2.4v1.8h-2.4v7.5c0,0.9,0.3,1.1,1.5,1.1h0.9v1.8h-1.6c-2.1,0-2.9-0.4-2.9-2.7v-7.7h-2.1\n\t\tv-1.8h2.1v-3.6h2C254.3,10.5,254.3,14.1,254.3,14.1z\" />\n\t<path style=\"fill:#231F20;\" d=\"M263.2,13.8c3.9,0,5.9,2.8,5.9,6.4s-2.1,6.4-5.9,6.4s-5.9-2.8-5.9-6.4S259.3,13.8,263.2,13.8\n\t\t M263.2,24.8c2.1,0,3.8-1.6,3.8-4.6s-1.7-4.6-3.8-4.6c-2.1,0-3.8,1.6-3.8,4.6C259.4,23.2,261.1,24.8,263.2,24.8\" />\n\t<path style=\"fill:#231F20;\" d=\"M270.9,14.1h1.9v1.8h0c0.9-1.4,2.3-2.1,3.9-2.1c1.5,0,2.8,0.6,3.4,2.1c0.8-1.3,2.3-2.1,3.8-2.1\n\t\tc2.4,0,4.1,1,4.1,3.5v8.9h-2v-8c0-1.5-0.4-2.7-2.3-2.7c-1.9,0-3.2,1.2-3.2,3.1v7.6h-2v-8c0-1.6-0.5-2.7-2.3-2.7\n\t\tc-2.4,0-3.3,2.2-3.3,3.1v7.6h-2C270.9,26.3,270.9,14.1,270.9,14.1z\" />\n\t<path style=\"fill:#231F20;\" d=\"M291.7,22.5c0.1,1.8,1.6,2.3,3.3,2.3c1.3,0,2.9-0.3,2.9-1.8c0-1.6-2-1.8-4-2.3c-2-0.5-4-1.1-4-3.4\n\t\tc0-2.4,2.4-3.5,4.5-3.5c2.7,0,4.8,0.8,5,3.8h-2c-0.1-1.6-1.5-2.1-2.8-2.1c-1.2,0-2.6,0.3-2.6,1.6c0,1.4,2.1,1.7,4,2.1\n\t\tc2,0.5,4,1.1,4,3.5c0,2.9-2.7,3.9-5.2,3.9c-2.7,0-5-1.1-5.2-4.1C289.7,22.5,291.7,22.5,291.7,22.5z\" />\n\t<path style=\"fill:#231F20;\" d=\"M36.8,18.4c-0.3,0-0.6-0.1-0.8-0.1c0.3-0.5,0.4-0.8,0.4-0.8c0-0.1,0.3-0.5,0.4-0.9\n\t\tc0.1-0.3,0.2-0.9,0.2-1c0-1-0.3-1.9-0.9-2.5c-0.6-0.6-1.4-1-2.3-1c-0.2,0-0.4,0-0.9,0.1c-0.5,0.1-0.8,0.2-1.2,0.3\n\t\tc-0.8,0.3-1.1,0.4-2.2,0.9c-0.1,0-0.2,0.2-0.2,0.2c0,0.1,0,0.1,0,0.1l0,4.1h-0.7v-4.5c0,0,0-0.1,0-0.3c0-0.2,0.2-0.3,0.3-0.4\n\t\tc0.2-0.1,0.3-0.2,0.5-0.3c-0.2-0.1-0.3-0.3-0.3-0.5c0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6c0,0,0,0.1,0,0.1h0\n\t\tc0.1,0,0.3-0.1,0.4-0.1c-0.2-0.1-0.3-0.3-0.3-0.5c0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6c0,0.1,0,0.2-0.1,0.3\n\t\tc0.3-0.1,0.5-0.1,0.5-0.1c0,0,0,0,0.1,0c-0.2-0.1-0.3-0.3-0.3-0.5c0-0.3,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6c0,0.1,0,0.3-0.1,0.3l0,0\n\t\tc0.2,0,0.5,0,0.7,0c-0.1-0.1-0.1-0.2-0.1-0.4c0-0.3,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.2,0.5c0.3,0,0.5,0.1,0.7,0.3\n\t\tc0,0,0-0.1,0-0.2c0-0.3,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6c0,0.3-0.2,0.5-0.5,0.6c0.2,0.1,0.4,0.3,0.5,0.5l0,0c0-0.3,0.3-0.6,0.6-0.6\n\t\ts0.6,0.3,0.6,0.6s-0.3,0.6-0.6,0.6c0,0-0.1,0-0.2,0c0.1,0.2,0.2,0.4,0.3,0.5c0.1-0.2,0.3-0.3,0.5-0.3c0.3,0,0.6,0.3,0.6,0.6\n\t\tc0,0.3-0.3,0.6-0.6,0.6c-0.1,0-0.1,0-0.2,0c0,0.2,0.1,0.3,0.1,0.5c0.1,0,0.2,0,0.3,0c0.3,0,0.6,0.3,0.6,0.6c0,0.3-0.3,0.6-0.6,0.6\n\t\tc-0.1,0-0.2,0-0.3-0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0.3,0,0.5,0.3,0.5,0.6s-0.3,0.6-0.6,0.6c-0.1,0-0.3,0-0.3-0.1\n\t\tC37,17.8,36.9,18.1,36.8,18.4\" />\n\t<path style=\"fill:#231F20;\" d=\"M27.5,17.9c-0.3,0-0.6-0.3-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6l0,0l0,0c0.3,0,0.6,0.3,0.6,0.6\n\t\tC28.2,17.6,27.9,17.9,27.5,17.9C27.6,17.9,27.5,17.9,27.5,17.9z\" />\n\t<path style=\"fill:#231F20;\" d=\"M27.6,16.4c0.3,0,0.6-0.3,0.6-0.6c0-0.3-0.3-0.6-0.6-0.6l0,0l0,0c-0.3,0-0.6,0.3-0.6,0.6\n\t\tC27,16.2,27.2,16.4,27.6,16.4C27.5,16.4,27.6,16.4,27.6,16.4z\" />\n\t<path style=\"fill:#231F20;\" d=\"M27.5,15c-0.3,0-0.5-0.3-0.5-0.5c0-0.3,0.3-0.5,0.5-0.5l0,0c0.3,0,0.5,0.3,0.5,0.5\n\t\tC28.1,14.8,27.9,15,27.5,15C27.6,15,27.5,15,27.5,15z\" />\n\t<path style=\"fill:#231F20;\" d=\"M27.6,12.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5l0,0c-0.3,0-0.5,0.2-0.5,0.5\n\t\tC27,12.3,27.3,12.5,27.6,12.5C27.5,12.5,27.6,12.5,27.6,12.5z\" />\n\t<path style=\"fill:#231F20;\" d=\"M27.5,13.7c-0.3,0-0.5-0.3-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5l0,0c0.3,0,0.5,0.3,0.5,0.5\n\t\tC28.1,13.5,27.8,13.7,27.5,13.7C27.6,13.7,27.5,13.7,27.5,13.7z\" />\n\t<path style=\"fill:#231F20;\" d=\"M29.3,5.5c0,0,0-0.1-0.1-0.1c-0.1,0-0.1,0-0.1,0.1c-0.1,0.5-0.3,0.9-1.3,1c0-0.4,0.1-0.7,0.3-0.9\n\t\tc0.2-0.2,0.4-0.3,0.8-0.4c0,0,0,0,0.1,0c0,0,0,0,0-0.1S29,5,29,5c0,0,0,0-0.1,0h-1.4h-0.1h-1.2c0,0,0,0-0.1,0c0,0,0,0,0,0.1\n\t\tc0,0,0,0.1,0,0.1c0,0,0,0,0.1,0c0.3,0.1,0.6,0.2,0.8,0.4c0.2,0.2,0.3,0.5,0.3,0.9c-0.9-0.1-1.1-0.5-1.3-1c0,0,0-0.1-0.1-0.1\n\t\ts-0.1,0-0.1,0.1l0,0V8c0,0,0,0.1,0.1,0.1S26,8.1,26,8l0,0c0.2-0.5,0.7-0.8,1.3-0.9c0,0.4-0.1,0.7-0.3,0.9c-0.2,0.2-0.4,0.3-0.8,0.4\n\t\tl0,0c0,0,0,0-0.1,0c0,0,0,0,0,0.1s0,0.1,0,0.1c0,0,0,0,0.1,0h1.2h0.1h1.3c0,0,0,0,0.1,0c0,0,0,0,0-0.1s0-0.1,0-0.1c0,0,0,0-0.1,0\n\t\tl0,0c-0.3-0.1-0.6-0.2-0.8-0.4c-0.1-0.2-0.2-0.5-0.3-0.9c0.6,0.1,1,0.4,1.3,0.9l0,0c0,0,0,0.1,0.1,0.1c0.1,0,0.1,0,0.1-0.1\n\t\tL29.3,5.5L29.3,5.5z\" />\n\t<path style=\"fill:#231F20;\" d=\"M27.6,11.4c0.7,0,1.3-0.6,1.3-1.3c0-0.7-0.6-1.3-1.3-1.3l0,0c-0.7,0-1.3,0.6-1.3,1.3\n\t\tC26.3,10.8,26.8,11.4,27.6,11.4C27.5,11.4,27.6,11.4,27.6,11.4z\" />\n\t<path style=\"fill:#231F20;\" d=\"M18.1,17.6c-0.1,0.1-0.2,0.1-0.3,0.1c-0.3,0-0.6-0.3-0.6-0.6s0.3-0.6,0.5-0.6c0,0,0-0.1,0-0.2\n\t\ts0-0.1,0-0.2c-0.1,0-0.2,0.1-0.3,0.1c-0.3,0-0.6-0.3-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6c0.1,0,0.2,0,0.3,0c0-0.2,0-0.3,0.1-0.5\n\t\tc-0.1,0-0.1,0-0.2,0c-0.3,0-0.6-0.3-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6c0.2,0,0.4,0.1,0.5,0.3c0.1-0.2,0.2-0.4,0.3-0.5c0,0-0.1,0-0.2,0\n\t\tc-0.3,0-0.6-0.3-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6l0,0c0.2-0.2,0.3-0.3,0.5-0.5c-0.3,0-0.5-0.3-0.5-0.6\n\t\tc0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6c0,0,0,0.1,0,0.2c0.2-0.1,0.4-0.2,0.7-0.3c-0.1-0.1-0.2-0.3-0.2-0.5\n\t\tc0-0.3,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6c0,0.1,0,0.3-0.1,0.4c0.2,0,0.5,0,0.7,0l0,0c0-0.1-0.1-0.2-0.1-0.3c0-0.3,0.3-0.6,0.6-0.6\n\t\tc0.3,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.3,0.5c0,0,0,0,0.1,0c0,0,0.2,0,0.5,0.1c0-0.1-0.1-0.2-0.1-0.3c0-0.3,0.3-0.6,0.6-0.6\n\t\tc0.3,0,0.6,0.3,0.6,0.6c0,0.3-0.1,0.4-0.3,0.5c0.2,0,0.3,0.1,0.4,0.1h0c0,0,0,0,0-0.1c0-0.3,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6\n\t\tc0,0.2-0.1,0.4-0.3,0.5c0.2,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.3,0.3,0.3,0.4c0,0.2,0,0.3,0,0.3v4.5h-0.7l0-4.1c0,0,0,0,0-0.1\n\t\tc0-0.1-0.1-0.2-0.2-0.2c-1.1-0.5-1.4-0.7-2.2-0.9c-0.5-0.1-0.7-0.2-1.2-0.3c-0.5-0.1-0.7-0.1-0.9-0.1c-0.9,0-1.7,0.4-2.3,1\n\t\tc-0.6,0.6-0.9,1.6-0.9,2.5c0,0.1,0,0.7,0.2,1c0.1,0.4,0.4,0.8,0.4,0.9c0,0,0.1,0.3,0.4,0.8c-0.2,0-0.6,0.1-0.8,0.1\n\t\tC18.2,18.1,18.1,17.8,18.1,17.6\" />\n\t<path style=\"fill:#231F20;\" d=\"M37.3,18.9c0-0.1-0.2-0.1-0.3-0.2c0,0-1.2-0.2-1.4-0.2c0,0-0.1,0-0.1,0.1c0,0.1,0,0.1,0.1,0.1l0,0\n\t\tc0.6,0.3,1,0.9,1,1.6c-1-0.2-1.2-0.7-1.3-1.4c0,0,0-0.1-0.1-0.1s-0.1,0-0.1,0l0,0l-0.4,3l0,0c0,0,0,0.1,0.1,0.1\n\t\tc0.1,0,0.1,0,0.1-0.1c0.3-0.6,0.9-1,1.6-1c-0.2,0.7-0.7,1.3-1.4,1.4l0,0c-0.5,0-1-0.1-1.6-0.2c-0.5-0.2-0.8-0.4-1-1\n\t\tc0-0.1,0-0.2,0-0.3c0.1-0.3,0.4-0.5,0.6-0.5c0.3,0.1,0.3,0.4,0.2,0.8c0,0.1-0.1,0.3-0.2,0.3c0.3,0,0.5-0.1,0.8-0.4\n\t\tc0.3-0.5,0.3-1.3-0.3-1.6c-0.3-0.2-0.8,0-1.2,0.5c0.1-0.7,0.5-1.4,0.6-1.9c0.1-0.8-0.3-1.7-0.7-1.9c-0.5,0.2-0.9,1-0.9,1.8\n\t\tc0,0.5,0.4,1.3,0.4,2.1c-0.3-0.5-0.8-0.8-1.2-0.7c-0.6,0.3-0.7,1-0.5,1.5c0.2,0.3,0.4,0.5,0.7,0.5c-0.1-0.1-0.1-0.2-0.2-0.4\n\t\tc-0.1-0.3,0-0.7,0.3-0.7c0.3,0,0.5,0.2,0.6,0.5c0,0.1,0,0.2,0,0.3l0,0c-0.2,0.5-0.6,0.7-1.1,0.8c-0.5,0-1,0-1.6,0h0\n\t\tc-0.6,0-1-0.5-1-1.3c0.6,0.1,1.1,0.5,1.4,1c0,0,0,0.1,0.1,0.1c0.1,0,0.1-0.1,0.1-0.1v-2.8l0,0c0,0,0-0.1-0.1-0.1\n\t\tc-0.1,0-0.1,0-0.1,0.1l0,0l0,0c-0.1,0.5-0.4,1-1.4,1.1c0.1-1,0.5-1.3,1.2-1.4c0,0,0,0,0.1,0c0,0,0,0,0-0.1l0,0c0,0,0-0.1,0-0.1\n\t\tc0,0,0,0-0.1,0h-1.4h-0.2h-1.4c0,0,0,0-0.1,0c0,0,0,0,0,0.1l0,0c0,0,0,0.1,0,0.1c0,0,0,0,0.1,0c0.7,0.1,1.1,0.5,1.2,1.4\n\t\tc-1-0.1-1.3-0.5-1.4-1.1l0,0l0,0c0,0,0-0.1-0.1-0.1s-0.1,0-0.1,0.1l0,0v2.8c0,0,0,0.1,0.1,0.1s0.1,0,0.1-0.1c0.3-0.6,0.8-1,1.4-1\n\t\tc-0.1,0.9-0.5,1.3-1.2,1.5h0c-0.5,0-1,0-1.6,0c-0.5-0.1-0.9-0.3-1.1-0.8l0,0c0-0.1,0-0.2,0-0.3c0.1-0.3,0.3-0.6,0.6-0.5\n\t\tc0.3,0.1,0.4,0.4,0.3,0.7c0,0.1-0.1,0.3-0.2,0.4c0.3,0,0.5-0.2,0.7-0.5c0.3-0.5,0.1-1.3-0.5-1.5c-0.4-0.2-0.8,0.2-1.2,0.7\n\t\tc0-0.8,0.4-1.5,0.4-2.1c0-0.8-0.5-1.6-0.9-1.8c-0.4,0.3-0.8,1.1-0.7,1.9c0,0.5,0.5,1.2,0.6,1.9c-0.4-0.5-0.9-0.7-1.2-0.5\n\t\tc-0.5,0.3-0.6,1.1-0.3,1.6c0.2,0.3,0.5,0.4,0.8,0.4c-0.1-0.1-0.2-0.2-0.2-0.3c-0.1-0.3-0.1-0.7,0.2-0.8c0.3-0.1,0.5,0.1,0.6,0.5\n\t\tc0,0.1,0,0.2,0,0.3c-0.1,0.6-0.5,0.9-1,1c-0.5,0-1,0.1-1.6,0.2l0,0c-0.7-0.2-1.2-0.7-1.4-1.4c0.7,0,1.3,0.4,1.6,1\n\t\tc0,0,0.1,0.1,0.1,0.1c0.1,0,0.1-0.1,0.1-0.1l0,0l-0.4-3l0,0c0,0,0-0.1-0.1,0c-0.1,0-0.1,0-0.1,0.1c0,0.7-0.3,1.2-1.3,1.4\n\t\tc0-0.7,0.4-1.3,1-1.6l0,0c0,0,0.1,0,0.1-0.1s-0.1-0.1-0.1-0.1c-0.1,0-1.3,0.2-1.3,0.2c-0.1,0-0.2,0.1-0.3,0.2s-0.1,0.2-0.1,0.4\n\t\tc0,0.2,0.5,3.1,0.5,3.4c0,0,0,0.3,0,0.4s0.1,0.2,0.1,0.2s0.6,0.4,0.7,0.5c0.1,0.1,0,0.2,0,0.2l-0.5,0.8c0,0-0.1,0.1-0.1,0.1\n\t\tc0,0,0,0.1,0,0.1c0,0.1,0,0.2,0.1,0.3h8.8h0.2h8.8c0.1,0,0.1-0.1,0.1-0.3c0,0,0-0.1,0-0.1s0,0-0.1-0.1L35.9,24c0,0,0-0.1,0-0.2\n\t\tc0.1-0.1,0.7-0.5,0.7-0.5s0.1-0.1,0.1-0.2s0-0.3,0-0.4c0-0.3,0.5-3.1,0.5-3.4C37.4,19.1,37.4,19,37.3,18.9 M24,23.8l-2,0.1\n\t\tc-0.2,0-0.4-0.1-0.4-0.3v-0.3c0-0.2,0.1-0.4,0.3-0.4l2-0.1c0.2,0,0.4,0.1,0.4,0.3v0.3C24.3,23.6,24.2,23.8,24,23.8 M28.3,23.3\n\t\tl-0.7,0.7c0,0,0,0-0.1,0l0,0c0,0-0.1,0-0.1,0l-0.7-0.7c0,0,0-0.1,0-0.2l0.7-0.7c0,0,0,0,0.1,0l0,0c0,0,0.1,0,0.1,0l0.7,0.7\n\t\tC28.4,23.2,28.4,23.3,28.3,23.3 M33.4,23.6c0,0.2-0.2,0.3-0.4,0.3l-2-0.1c-0.2,0-0.3-0.2-0.3-0.4v-0.3c0-0.2,0.2-0.3,0.4-0.3l2,0.1\n\t\tc0.2,0,0.4,0.2,0.3,0.4C33.5,23.3,33.4,23.6,33.4,23.6z\" />\n\t<path style=\"fill:#231F20;\" d=\"M27.5,0c9.3,0,16.8,7.5,16.8,16.8s-7.5,16.8-16.8,16.8s-16.8-7.5-16.8-16.8C10.7,7.5,18.3,0,27.5,0\n\t\t M27.5,31.7c8.2,0,14.8-6.7,14.8-14.9C42.4,8.6,35.7,2,27.5,2S12.7,8.6,12.7,16.8C12.7,25,19.4,31.7,27.5,31.7\" />\n\t<path style=\"fill:#01928C;\" d=\"M0,33.6h2V0H0V33.6z\" />\n\t<path style=\"fill:#231F20;\" d=\"M36.8,18.4c-0.3,0-0.6-0.1-0.8-0.1c0.3-0.5,0.4-0.8,0.4-0.8c0-0.1,0.3-0.5,0.4-0.9\n\t\tc0.1-0.3,0.2-0.9,0.2-1c0-1-0.3-1.9-0.9-2.5c-0.6-0.6-1.4-1-2.3-1c-0.2,0-0.4,0-0.9,0.1c-0.5,0.1-0.8,0.2-1.2,0.3\n\t\tc-0.8,0.3-1.1,0.4-2.2,0.9c-0.1,0-0.2,0.2-0.2,0.2c0,0.1,0,0.1,0,0.1l0,4.1h-0.7v-4.5c0,0,0-0.1,0-0.3c0-0.2,0.2-0.3,0.3-0.4\n\t\tc0.2-0.1,0.3-0.2,0.5-0.3c-0.2-0.1-0.3-0.3-0.3-0.5c0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6c0,0,0,0.1,0,0.1h0\n\t\tc0.1,0,0.3-0.1,0.4-0.1c-0.2-0.1-0.3-0.3-0.3-0.5c0-0.3,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6c0,0.1,0,0.2-0.1,0.3\n\t\tc0.3-0.1,0.5-0.1,0.5-0.1c0,0,0,0,0.1,0c-0.2-0.1-0.3-0.3-0.3-0.5c0-0.3,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6c0,0.1,0,0.3-0.1,0.3l0,0\n\t\tc0.2,0,0.5,0,0.7,0c-0.1-0.1-0.1-0.2-0.1-0.4c0-0.3,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.2,0.5c0.3,0,0.5,0.1,0.7,0.3\n\t\tc0,0,0-0.1,0-0.2c0-0.3,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6c0,0.3-0.2,0.5-0.5,0.6c0.2,0.1,0.4,0.3,0.5,0.5l0,0c0-0.3,0.3-0.6,0.6-0.6\n\t\ts0.6,0.3,0.6,0.6s-0.3,0.6-0.6,0.6c0,0-0.1,0-0.2,0c0.1,0.2,0.2,0.4,0.3,0.5c0.1-0.2,0.3-0.3,0.5-0.3c0.3,0,0.6,0.3,0.6,0.6\n\t\tc0,0.3-0.3,0.6-0.6,0.6c-0.1,0-0.1,0-0.2,0c0,0.2,0.1,0.3,0.1,0.5c0.1,0,0.2,0,0.3,0c0.3,0,0.6,0.3,0.6,0.6c0,0.3-0.3,0.6-0.6,0.6\n\t\tc-0.1,0-0.2,0-0.3-0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0.3,0,0.5,0.3,0.5,0.6s-0.3,0.6-0.6,0.6c-0.1,0-0.3,0-0.3-0.1\n\t\tC37,17.9,36.9,18.1,36.8,18.4\" />\n\t<path style=\"fill:#231F20;\" d=\"M27.5,17.9c-0.3,0-0.6-0.3-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6l0,0l0,0c0.3,0,0.6,0.3,0.6,0.6\n\t\tC28.2,17.6,27.9,17.9,27.5,17.9L27.5,17.9z\" />\n\t<path style=\"fill:#231F20;\" d=\"M27.5,16.5c0.3,0,0.6-0.3,0.6-0.6c0-0.3-0.3-0.6-0.6-0.6l0,0l0,0c-0.3,0-0.6,0.3-0.6,0.6\n\t\tC27,16.2,27.2,16.5,27.5,16.5L27.5,16.5z\" />\n\t<path style=\"fill:#231F20;\" d=\"M27.5,15c-0.3,0-0.5-0.3-0.5-0.5c0-0.3,0.3-0.5,0.5-0.5l0,0c0.3,0,0.5,0.3,0.5,0.5\n\t\tC28.1,14.8,27.9,15,27.5,15L27.5,15z\" />\n\t<path style=\"fill:#231F20;\" d=\"M27.5,12.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5l0,0c-0.3,0-0.5,0.2-0.5,0.5\n\t\tC27,12.3,27.3,12.5,27.5,12.5L27.5,12.5z\" />\n\t<path style=\"fill:#231F20;\" d=\"M27.5,13.7c-0.3,0-0.5-0.3-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5l0,0c0.3,0,0.5,0.3,0.5,0.5\n\t\tC28.1,13.5,27.8,13.7,27.5,13.7L27.5,13.7z\" />\n\t<path style=\"fill:#231F20;\" d=\"M29.3,5.5c0,0,0-0.1-0.1-0.1c-0.1,0-0.1,0-0.1,0.1c-0.1,0.5-0.3,0.9-1.3,1c0-0.4,0.1-0.7,0.3-0.9\n\t\tc0.2-0.2,0.4-0.3,0.8-0.4c0,0,0,0,0.1,0c0,0,0,0,0-0.1S29,5,29,5c0,0-0.1,0-0.1,0h-1.4h-0.1h-1.2c0,0,0,0-0.1,0c0,0,0,0,0,0.1\n\t\ts0,0.1,0,0.1c0,0,0,0,0.1,0c0.3,0.1,0.6,0.2,0.8,0.4c0.2,0.2,0.3,0.5,0.3,0.9c-0.9-0.1-1.1-0.5-1.3-1c0,0,0-0.1-0.1-0.1\n\t\ts-0.1,0-0.1,0.1l0,0V8c0,0,0,0.1,0.1,0.1s0.1,0,0.1-0.1l0,0c0.2-0.5,0.7-0.8,1.3-0.9c0,0.4-0.1,0.7-0.3,0.9\n\t\tc-0.2,0.2-0.4,0.3-0.8,0.4l0,0c0,0,0,0-0.1,0c0,0,0,0,0,0.1s0,0.1,0,0.1c0,0,0,0,0.1,0h1.2h0.1h1.4c0,0,0,0,0.1,0c0,0,0,0,0-0.1\n\t\ts0-0.1,0-0.1c0,0,0,0-0.1,0l0,0c-0.3-0.1-0.6-0.2-0.8-0.4c-0.2-0.2-0.3-0.5-0.3-0.9c0.6,0.1,1,0.4,1.3,0.9l0,0c0,0,0,0.1,0.1,0.1\n\t\tc0.1,0,0.1,0,0.1-0.1V5.5L29.3,5.5z\" />\n\t<path style=\"fill:#231F20;\" d=\"M27.5,11.4c0.7,0,1.3-0.6,1.3-1.3c0-0.7-0.6-1.3-1.3-1.3l0,0c-0.7,0-1.3,0.6-1.3,1.3\n\t\tC26.2,10.8,26.8,11.4,27.5,11.4L27.5,11.4z\" />\n\t<path style=\"fill:#231F20;\" d=\"M18,17.6c-0.1,0.1-0.2,0.1-0.3,0.1c-0.3,0-0.6-0.3-0.6-0.6s0.3-0.6,0.5-0.6c0,0,0-0.1,0-0.2\n\t\ts0-0.1,0-0.2c-0.1,0-0.2,0.1-0.3,0.1c-0.3,0-0.6-0.3-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6c0.1,0,0.2,0,0.3,0c0-0.2,0-0.3,0.1-0.5\n\t\tc-0.1,0-0.1,0-0.2,0c-0.3,0-0.6-0.3-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6c0.2,0,0.4,0.1,0.5,0.3c0.1-0.2,0.2-0.4,0.3-0.5c0,0-0.1,0-0.2,0\n\t\tc-0.3,0-0.6-0.3-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6l0,0c0.2-0.2,0.3-0.3,0.5-0.5c-0.3,0-0.5-0.3-0.5-0.6\n\t\tc0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6c0,0,0,0.1,0,0.2c0.2-0.1,0.4-0.2,0.7-0.3c-0.1-0.1-0.2-0.3-0.2-0.5\n\t\tc0-0.3,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6c0,0.1,0,0.3-0.1,0.4c0.2,0,0.5,0,0.7,0l0,0c0-0.1-0.1-0.2-0.1-0.3c0-0.3,0.3-0.6,0.6-0.6\n\t\tc0.3,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.3,0.5c0,0,0,0,0.1,0c0,0,0.2,0,0.5,0.1c0-0.1-0.1-0.2-0.1-0.3c0-0.3,0.3-0.6,0.6-0.6\n\t\tc0.3,0,0.6,0.3,0.6,0.6c0,0.3-0.1,0.4-0.3,0.5c0.2,0,0.3,0.1,0.4,0.1h0c0,0,0,0,0-0.1c0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6\n\t\tc0,0.2-0.1,0.4-0.3,0.5c0.2,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.3,0.3,0.3,0.4c0,0.2,0,0.3,0,0.3v4.5H26l0-4.1c0,0,0,0,0-0.1\n\t\tc0-0.1-0.1-0.2-0.2-0.2c-1.1-0.5-1.4-0.7-2.2-0.9c-0.5-0.1-0.7-0.2-1.2-0.3c-0.5-0.1-0.7-0.1-0.9-0.1c-0.9,0-1.7,0.4-2.3,1\n\t\tc-0.6,0.6-0.9,1.6-0.9,2.5c0,0.1,0,0.7,0.2,1c0.1,0.4,0.4,0.8,0.4,0.9c0,0,0.1,0.3,0.4,0.8c-0.2,0-0.6,0.1-0.8,0.1\n\t\tC18.2,18.1,18.1,17.8,18,17.6\" />\n\t<path style=\"fill:#231F20;\" d=\"M37.3,18.9c0-0.1-0.2-0.1-0.3-0.2c0,0-1.2-0.2-1.4-0.2c0,0-0.1,0-0.1,0.1c0,0.1,0,0.1,0.1,0.1l0,0\n\t\tc0.6,0.3,1,0.9,1,1.6c-1-0.2-1.2-0.7-1.3-1.4c0,0,0-0.1-0.1-0.1s-0.1,0-0.1,0l0,0l-0.4,3l0,0c0,0,0,0.1,0.1,0.1\n\t\tc0.1,0,0.1,0,0.1-0.1c0.3-0.6,0.9-1,1.6-1c-0.2,0.7-0.7,1.3-1.4,1.4l0,0c-0.5,0-1-0.1-1.6-0.2c-0.5-0.2-0.8-0.4-1-1\n\t\tc0-0.1,0-0.2,0-0.3c0.1-0.3,0.4-0.5,0.6-0.5c0.3,0.1,0.3,0.4,0.2,0.8c0,0.1-0.1,0.3-0.2,0.3c0.3,0,0.5-0.1,0.8-0.4\n\t\tc0.3-0.5,0.3-1.3-0.3-1.6c-0.3-0.2-0.8,0-1.2,0.5c0.1-0.7,0.5-1.4,0.6-1.9c0.1-0.8-0.3-1.7-0.7-1.9c-0.5,0.2-0.9,1-0.9,1.8\n\t\tc0,0.5,0.4,1.3,0.4,2.1c-0.3-0.5-0.8-0.8-1.2-0.7c-0.6,0.3-0.7,1-0.5,1.5c0.2,0.3,0.4,0.5,0.7,0.5c-0.1-0.1-0.1-0.2-0.2-0.4\n\t\tc-0.1-0.3,0-0.7,0.3-0.7c0.3,0,0.5,0.2,0.6,0.5c0,0.1,0,0.2,0,0.3l0,0c-0.2,0.5-0.6,0.7-1.1,0.8c-0.5,0-1,0-1.6,0h0\n\t\tc-0.7-0.1-1.1-0.6-1.2-1.5c0.6,0.1,1.1,0.5,1.4,1c0,0,0,0.1,0.1,0.1c0.1,0,0.1-0.1,0.1-0.1v-2.8l0,0c0,0,0-0.1-0.1-0.1\n\t\tc-0.1,0-0.1,0-0.1,0.1l0,0l0,0c-0.1,0.5-0.4,1-1.4,1.1c0.1-1,0.5-1.3,1.2-1.4c0,0,0,0,0.1,0c0,0,0,0,0-0.1l0,0c0,0,0-0.1,0-0.1\n\t\tc0,0,0,0-0.1,0h-1.4h-0.2h-1.4c0,0,0,0-0.1,0c0,0,0,0,0,0.1l0,0c0,0,0,0.1,0,0.1c0.1,0.1,0.2,0.1,0.2,0.1c0.7,0.1,1.1,0.5,1.2,1.4\n\t\tc-1-0.1-1.3-0.5-1.4-1.1l0,0l0,0c0,0,0-0.1-0.1-0.1s-0.1,0-0.1,0.1l0,0v2.8c0,0,0,0.1,0.1,0.1s0.1,0,0.1-0.1c0.3-0.6,0.8-1,1.4-1\n\t\tc-0.1,0.9-0.5,1.3-1.2,1.5h0c-0.5,0-1,0-1.6,0c-0.5-0.1-0.9-0.3-1.1-0.8l0,0c0-0.1,0-0.2,0-0.3c0.1-0.3,0.3-0.6,0.6-0.5\n\t\tc0.3,0.1,0.4,0.4,0.3,0.7c0,0.1-0.1,0.3-0.2,0.4c0.3,0,0.5-0.2,0.7-0.5c0.3-0.5,0.1-1.3-0.5-1.5c-0.4-0.2-0.8,0.2-1.2,0.7\n\t\tc0-0.8,0.4-1.5,0.4-2.1c0-0.8-0.5-1.6-0.9-1.8c-0.4,0.3-0.8,1.1-0.7,1.9c0,0.5,0.5,1.2,0.6,1.9c-0.4-0.5-0.9-0.7-1.2-0.5\n\t\tc-0.5,0.3-0.6,1.1-0.3,1.6c0.2,0.3,0.5,0.4,0.8,0.4c-0.1-0.1-0.2-0.2-0.2-0.3c-0.1-0.3-0.1-0.7,0.2-0.8c0.3-0.1,0.5,0.1,0.6,0.5\n\t\tc0,0.1,0,0.2,0,0.3c-0.1,0.6-0.5,0.9-1,1c-0.5,0-1,0.1-1.6,0.2l0,0c-0.6-0.2-1.1-0.8-1.3-1.5c0.7,0,1.3,0.4,1.6,1\n\t\tc0,0,0.1,0.1,0.1,0.1c0.1,0,0.1-0.1,0.1-0.1l0,0L20,19l0,0c0,0,0-0.1-0.1,0c-0.1,0-0.1,0-0.1,0.1c0,0.7-0.3,1.2-1.3,1.4\n\t\tc0-0.7,0.4-1.3,1-1.6l0,0c0,0,0.1,0,0.1-0.1s-0.1-0.1-0.1-0.1c-0.1,0-1.3,0.2-1.3,0.2c-0.1,0-0.2,0.1-0.3,0.2\n\t\tc-0.1,0.1-0.1,0.2-0.1,0.4c0,0.2,0.5,3.1,0.5,3.4c0,0,0,0.3,0,0.4s0.1,0.2,0.1,0.2s0.6,0.4,0.7,0.5c0.1,0.1,0,0.2,0,0.2l-0.5,0.8\n\t\tc0,0-0.1,0.1-0.1,0.1c0,0,0,0.1,0,0.1c0,0.1,0,0.2,0.1,0.3h8.8h0.2h8.8c0.1,0,0.1-0.1,0.1-0.3c0,0,0-0.1,0-0.1s0,0-0.1-0.1L36,23.9\n\t\tc0,0,0-0.1,0-0.2c0.1-0.1,0.7-0.5,0.7-0.5s0.1-0.1,0.1-0.2s0-0.3,0-0.4c0-0.3,0.5-3.1,0.5-3.4C37.4,19.1,37.4,19,37.3,18.9\n\t\t M24,23.8l-2,0.1c-0.2,0-0.4-0.1-0.4-0.3v-0.3c0-0.2,0.1-0.4,0.3-0.4l2-0.1c0.2,0,0.4,0.1,0.4,0.3v0.3C24.3,23.7,24.2,23.8,24,23.8\n\t\t M28.3,23.3l-0.7,0.7c0,0,0,0-0.1,0l0,0c0,0-0.1,0-0.1,0l-0.7-0.7c0,0,0-0.1,0-0.2l0.7-0.7c0,0,0,0,0.1,0l0,0c0,0,0.1,0,0.1,0\n\t\tl0.7,0.7C28.4,23.2,28.4,23.3,28.3,23.3 M33.4,23.6c0,0.2-0.2,0.3-0.4,0.3l-2-0.1c-0.2,0-0.3-0.2-0.3-0.4v-0.3\n\t\tc0-0.2,0.2-0.3,0.4-0.3l2,0.1c0.2,0,0.4,0.2,0.3,0.4C33.4,23.3,33.4,23.6,33.4,23.6z\" />\n\t<path style=\"fill:#231F20;\" d=\"M27.5,0c9.3,0,16.8,7.5,16.8,16.8s-7.5,16.8-16.8,16.8s-16.8-7.5-16.8-16.8C10.7,7.5,18.3,0,27.5,0\n\t\t M27.5,31.7c8.2,0,14.8-6.7,14.8-14.9C42.4,8.6,35.7,2,27.5,2S12.7,8.6,12.7,16.8C12.7,25,19.4,31.7,27.5,31.7\" />\n</g>\n</symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.BrowserSpriteSymbol = factory());
}(this, (function () { 'use strict';

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {
        undefined(factory);
    } else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = index(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

return BrowserSpriteSymbol;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.BrowserSprite = factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {
        undefined(factory);
    } else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

//      
// An event handler can take an optional event argument
// and should not return a value
                                          
// An array of all currently registered event handlers for a type
                                            
// A map of event types and their corresponding event handlers.
                        
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberof mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).map(function (handler) { handler(evt); });
			(all['*'] || []).map(function (handler) { handler(type, evt); });
		}
	};
}

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = index(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var svg$1 = namespaces_1.svg;
var xlink$1 = namespaces_1.xlink;

var defaultConfig = {
  attrs: ( obj = {
    style: ['position: absolute', 'width: 0', 'height: 0'].join('; ')
  }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj )
};
var obj;

var Sprite = function Sprite(config) {
  this.config = index(defaultConfig, config || {});
  this.symbols = [];
};

/**
 * Add new symbol. If symbol with the same id exists it will be replaced.
 * @param {SpriteSymbol} symbol
 * @return {boolean} `true` - symbol was added, `false` - replaced
 */
Sprite.prototype.add = function add (symbol) {
  var ref = this;
    var symbols = ref.symbols;
  var existing = this.find(symbol.id);

  if (existing) {
    symbols[symbols.indexOf(existing)] = symbol;
    return false;
  }

  symbols.push(symbol);
  return true;
};

/**
 * Remove symbol & destroy it
 * @param {string} id
 * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise
 */
Sprite.prototype.remove = function remove (id) {
  var ref = this;
    var symbols = ref.symbols;
  var symbol = this.find(id);

  if (symbol) {
    symbols.splice(symbols.indexOf(symbol), 1);
    symbol.destroy();
    return true;
  }

  return false;
};

/**
 * @param {string} id
 * @return {SpriteSymbol|null}
 */
Sprite.prototype.find = function find (id) {
  return this.symbols.filter(function (s) { return s.id === id; })[0] || null;
};

/**
 * @param {string} id
 * @return {boolean}
 */
Sprite.prototype.has = function has (id) {
  return this.find(id) !== null;
};

/**
 * @return {string}
 */
Sprite.prototype.stringify = function stringify () {
  var ref = this.config;
    var attrs = ref.attrs;
  var stringifiedSymbols = this.symbols.map(function (s) { return s.stringify(); }).join('');
  return wrapInSvgString(stringifiedSymbols, attrs);
};

/**
 * @return {string}
 */
Sprite.prototype.toString = function toString () {
  return this.stringify();
};

Sprite.prototype.destroy = function destroy () {
  this.symbols.forEach(function (s) { return s.destroy(); });
};

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

var defaultConfig$1 = {
  /**
   * Should following options be automatically configured:
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @type {boolean}
   */
  autoConfigure: true,

  /**
   * Default mounting selector
   * @type {string}
   */
  mountTo: 'body',

  /**
   * Fix disappearing SVG elements when <base href> exists.
   * Executes when sprite mounted.
   * @see http://stackoverflow.com/a/18265336/796152
   * @see https://github.com/everdimension/angular-svg-base-fix
   * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466
   * @type {boolean}
   */
  syncUrlsWithBaseTag: false,

  /**
   * Should sprite listen custom location change event
   * @type {boolean}
   */
  listenLocationChangeEvent: true,

  /**
   * Custom window event name which should be emitted to update sprite urls
   * @type {string}
   */
  locationChangeEvent: 'locationChange',

  /**
   * Emit location change event in Angular automatically
   * @type {boolean}
   */
  locationChangeAngularEmitter: false,

  /**
   * Selector to find symbols usages when updating sprite urls
   * @type {string}
   */
  usagesToUpdate: 'use[*|href]',

  /**
   * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.
   * Executes when sprite is rendered, but not mounted.
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364
   * @type {boolean}
   */
  moveGradientsOutsideSymbol: false
};

/**
 * @param {*} arrayLike
 * @return {Array}
 */
var arrayFrom = function (arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
};

var ua = navigator.userAgent;

var browser = {
  isChrome: /chrome/i.test(ua),
  isFirefox: /firefox/i.test(ua),

  // https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
  isIE: /msie/i.test(ua) || /trident/i.test(ua),
  isEdge: /edge/i.test(ua)
};

/**
 * @param {string} name
 * @param {*} data
 */
var dispatchEvent = function (name, data) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(name, false, false, data);
  window.dispatchEvent(event);
};

/**
 * IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
 * This trick will trigger IE to read and use any existing SVG <style> tags.
 * @see https://github.com/iconic/SVGInjector/issues/23
 * @see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
 *
 * @param {Element} node DOM Element to search <style> tags in
 * @return {Array<HTMLStyleElement>}
 */
var evalStylesIEWorkaround = function (node) {
  var updatedNodes = [];

  arrayFrom(node.querySelectorAll('style'))
    .forEach(function (style) {
      style.textContent += '';
      updatedNodes.push(style);
    });

  return updatedNodes;
};

/**
 * @param {string} [url] If not provided - current URL will be used
 * @return {string}
 */
var getUrlWithoutFragment = function (url) {
  return (url || window.location.href).split('#')[0];
};

/* global angular */
/**
 * @param {string} eventName
 */
var locationChangeAngularEmitter = function (eventName) {
  angular.module('ng').run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$locationChangeSuccess', function (e, newUrl, oldUrl) {
      dispatchEvent(eventName, { oldUrl: oldUrl, newUrl: newUrl });
    });
  }]);
};

var defaultSelector = 'linearGradient, radialGradient, pattern';

/**
 * @param {Element} svg
 * @param {string} [selector]
 * @return {Element}
 */
var moveGradientsOutsideSymbol = function (svg, selector) {
  if ( selector === void 0 ) selector = defaultSelector;

  arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {
    arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {
      symbol.parentNode.insertBefore(node, symbol);
    });
  });
  return svg;
};

/**
 * @param {NodeList} nodes
 * @param {Function} [matcher]
 * @return {Attr[]}
 */
function selectAttributes(nodes, matcher) {
  var attrs = arrayFrom(nodes).reduce(function (acc, node) {
    if (!node.attributes) {
      return acc;
    }

    var arrayfied = arrayFrom(node.attributes);
    var matched = matcher ? arrayfied.filter(matcher) : arrayfied;
    return acc.concat(matched);
  }, []);

  return attrs;
}

/**
 * @param {NodeList|Node} nodes
 * @param {boolean} [clone=true]
 * @return {string}
 */

var xLinkNS = namespaces_1.xlink.uri;
var xLinkAttrName = 'xlink:href';

// eslint-disable-next-line no-useless-escape
var specialUrlCharsPattern = /[{}|\\\^\[\]`"<>]/g;

function encoder(url) {
  return url.replace(specialUrlCharsPattern, function (match) {
    return ("%" + (match[0].charCodeAt(0).toString(16).toUpperCase()));
  });
}

/**
 * @param {NodeList} nodes
 * @param {string} startsWith
 * @param {string} replaceWith
 * @return {NodeList}
 */
function updateReferences(nodes, startsWith, replaceWith) {
  arrayFrom(nodes).forEach(function (node) {
    var href = node.getAttribute(xLinkAttrName);
    if (href && href.indexOf(startsWith) === 0) {
      var newUrl = href.replace(startsWith, replaceWith);
      node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl);
    }
  });

  return nodes;
}

/**
 * List of SVG attributes to update url() target in them
 */
var attList = [
  'clipPath',
  'colorProfile',
  'src',
  'cursor',
  'fill',
  'filter',
  'marker',
  'markerStart',
  'markerMid',
  'markerEnd',
  'mask',
  'stroke',
  'style'
];

var attSelector = attList.map(function (attr) { return ("[" + attr + "]"); }).join(',');

/**
 * Update URLs in svg image (like `fill="url(...)"`) and update referencing elements
 * @param {Element} svg
 * @param {NodeList} references
 * @param {string|RegExp} startsWith
 * @param {string} replaceWith
 * @return {void}
 *
 * @example
 * const sprite = document.querySelector('svg.sprite');
 * const usages = document.querySelectorAll('use');
 * updateUrls(sprite, usages, '#', 'prefix#');
 */
var updateUrls = function (svg, references, startsWith, replaceWith) {
  var startsWithEncoded = encoder(startsWith);
  var replaceWithEncoded = encoder(replaceWith);

  var nodes = svg.querySelectorAll(attSelector);
  var attrs = selectAttributes(nodes, function (ref) {
    var localName = ref.localName;
    var value = ref.value;

    return attList.indexOf(localName) !== -1 && value.indexOf(("url(" + startsWithEncoded)) !== -1;
  });

  attrs.forEach(function (attr) { return attr.value = attr.value.replace(startsWithEncoded, replaceWithEncoded); });
  updateReferences(references, startsWithEncoded, replaceWithEncoded);
};

/**
 * Internal emitter events
 * @enum
 * @private
 */
var Events = {
  MOUNT: 'mount',
  SYMBOL_MOUNT: 'symbol_mount'
};

var BrowserSprite = (function (Sprite$$1) {
  function BrowserSprite(cfg) {
    var this$1 = this;
    if ( cfg === void 0 ) cfg = {};

    Sprite$$1.call(this, index(defaultConfig$1, cfg));

    var emitter = mitt();
    this._emitter = emitter;
    this.node = null;

    var ref = this;
    var config = ref.config;

    if (config.autoConfigure) {
      this._autoConfigure(cfg);
    }

    if (config.syncUrlsWithBaseTag) {
      var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
      emitter.on(Events.MOUNT, function () { return this$1.updateUrls('#', baseUrl); });
    }

    var handleLocationChange = this._handleLocationChange.bind(this);
    this._handleLocationChange = handleLocationChange;

    // Provide way to update sprite urls externally via dispatching custom window event
    if (config.listenLocationChangeEvent) {
      window.addEventListener(config.locationChangeEvent, handleLocationChange);
    }

    // Emit location change event in Angular automatically
    if (config.locationChangeAngularEmitter) {
      locationChangeAngularEmitter(config.locationChangeEvent);
    }

    // After sprite mounted
    emitter.on(Events.MOUNT, function (spriteNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(spriteNode);
      }
    });

    // After symbol mounted into sprite
    emitter.on(Events.SYMBOL_MOUNT, function (symbolNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(symbolNode.parentNode);
      }

      if (browser.isIE || browser.isEdge) {
        evalStylesIEWorkaround(symbolNode);
      }
    });
  }

  if ( Sprite$$1 ) BrowserSprite.__proto__ = Sprite$$1;
  BrowserSprite.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );
  BrowserSprite.prototype.constructor = BrowserSprite;

  var prototypeAccessors = { isMounted: {} };

  /**
   * @return {boolean}
   */
  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * Automatically configure following options
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @param {Object} cfg
   * @private
   */
  BrowserSprite.prototype._autoConfigure = function _autoConfigure (cfg) {
    var ref = this;
    var config = ref.config;

    if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {
      config.syncUrlsWithBaseTag = typeof document.getElementsByTagName('base')[0] !== 'undefined';
    }

    if (typeof cfg.locationChangeAngularEmitter === 'undefined') {
      config.locationChangeAngularEmitter = 'angular' in window;
    }

    if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {
      config.moveGradientsOutsideSymbol = browser.isFirefox;
    }
  };

  /**
   * @param {Event} event
   * @param {Object} event.detail
   * @param {string} event.detail.oldUrl
   * @param {string} event.detail.newUrl
   * @private
   */
  BrowserSprite.prototype._handleLocationChange = function _handleLocationChange (event) {
    var ref = event.detail;
    var oldUrl = ref.oldUrl;
    var newUrl = ref.newUrl;
    this.updateUrls(oldUrl, newUrl);
  };

  /**
   * Add new symbol. If symbol with the same id exists it will be replaced.
   * If sprite already mounted - `symbol.mount(sprite.node)` will be called.
   * @fires Events#SYMBOL_MOUNT
   * @param {BrowserSpriteSymbol} symbol
   * @return {boolean} `true` - symbol was added, `false` - replaced
   */
  BrowserSprite.prototype.add = function add (symbol) {
    var sprite = this;
    var isNewSymbol = Sprite$$1.prototype.add.call(this, symbol);

    if (this.isMounted && isNewSymbol) {
      symbol.mount(sprite.node);
      this._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    }

    return isNewSymbol;
  };

  /**
   * Attach to existing DOM node
   * @param {string|Element} target
   * @return {Element|null} attached DOM Element. null if node to attach not found.
   */
  BrowserSprite.prototype.attach = function attach (target) {
    var this$1 = this;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    /** @type Element */
    var node = typeof target === 'string' ? document.querySelector(target) : target;
    sprite.node = node;

    // Already added symbols needs to be mounted
    this.symbols.forEach(function (symbol) {
      symbol.mount(sprite.node);
      this$1._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    });

    // Create symbols from existing DOM nodes, add and mount them
    arrayFrom(node.querySelectorAll('symbol'))
      .forEach(function (symbolNode) {
        var symbol = BrowserSpriteSymbol.createFromExistingNode(symbolNode);
        symbol.node = symbolNode; // hack to prevent symbol mounting to sprite when adding
        sprite.add(symbol);
      });

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  BrowserSprite.prototype.destroy = function destroy () {
    var ref = this;
    var config = ref.config;
    var symbols = ref.symbols;
    var _emitter = ref._emitter;

    symbols.forEach(function (s) { return s.destroy(); });

    _emitter.off('*');
    window.removeEventListener(config.locationChangeEvent, this._handleLocationChange);

    if (this.isMounted) {
      this.unmount();
    }
  };

  /**
   * @fires Events#MOUNT
   * @param {string|Element} [target]
   * @param {boolean} [prepend=false]
   * @return {Element|null} rendered sprite node. null if mount node not found.
   */
  BrowserSprite.prototype.mount = function mount (target, prepend) {
    if ( target === void 0 ) target = this.config.mountTo;
    if ( prepend === void 0 ) prepend = false;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    var mountNode = typeof target === 'string' ? document.querySelector(target) : target;
    var node = sprite.render();
    this.node = node;

    if (prepend && mountNode.childNodes[0]) {
      mountNode.insertBefore(node, mountNode.childNodes[0]);
    } else {
      mountNode.appendChild(node);
    }

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSprite.prototype.render = function render () {
    return parse(this.stringify());
  };

  /**
   * Detach sprite from the DOM
   */
  BrowserSprite.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  /**
   * Update URLs in sprite and usage elements
   * @param {string} oldUrl
   * @param {string} newUrl
   * @return {boolean} `true` - URLs was updated, `false` - sprite is not mounted
   */
  BrowserSprite.prototype.updateUrls = function updateUrls$1 (oldUrl, newUrl) {
    if (!this.isMounted) {
      return false;
    }

    var usages = document.querySelectorAll(this.config.usagesToUpdate);

    updateUrls(
      this.node,
      usages,
      ((getUrlWithoutFragment(oldUrl)) + "#"),
      ((getUrlWithoutFragment(newUrl)) + "#")
    );

    return true;
  };

  Object.defineProperties( BrowserSprite.prototype, prototypeAccessors );

  return BrowserSprite;
}(Sprite));

var ready$1 = createCommonjsModule(function (module) {
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  { module.exports = definition(); }

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);


  if (!loaded)
  { doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener);
    loaded = 1;
    while (listener = fns.shift()) { listener(); }
  }); }

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  }

});
});

var spriteNodeId = '__SVG_SPRITE_NODE__';
var spriteGlobalVarName = '__SVG_SPRITE__';
var isSpriteExists = !!window[spriteGlobalVarName];

// eslint-disable-next-line import/no-mutable-exports
var sprite;

if (isSpriteExists) {
  sprite = window[spriteGlobalVarName];
} else {
  sprite = new BrowserSprite({ attrs: { id: spriteNodeId } });
  window[spriteGlobalVarName] = sprite;
}

var loadSprite = function () {
  /**
   * Check for page already contains sprite node
   * If found - attach to and reuse it's content
   * If not - render and mount the new sprite
   */
  var existing = document.getElementById(spriteNodeId);

  if (existing) {
    sprite.attach(existing);
  } else {
    sprite.mount(document.body, true);
  }
};

if (document.body) {
  loadSprite();
} else {
  ready$1(loadSprite);
}

var sprite$1 = sprite;

return sprite$1;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);