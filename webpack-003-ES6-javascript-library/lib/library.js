var libraryAndres =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/library-source-code.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://libraryAndres/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/library-extra-code.js":
/*!***********************************!*\
  !*** ./src/library-extra-code.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconsole.log(\"extra stuff here!\");\n\n/*\r\nconst extraStuff = function() {\r\n\r\n    return {\r\n        cont: 0,\r\n        jump: () => {\r\n            this.cont +=1;\r\n        },\r\n    }\r\n\r\n}\r\n*/\n\nconst extraStuff = {\n    cont: 0,\n    jump: () => {\n        console.log(\"jump!\");\n    },\n    add: () => {\n        console.log(\"add!\");\n        //this.cont +=1;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (extraStuff);\n\n//# sourceURL=webpack://libraryAndres/./src/library-extra-code.js?");

/***/ }),

/***/ "./src/library-source-code.js":
/*!************************************!*\
  !*** ./src/library-source-code.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Library; });\n/* harmony import */ var _library_extra_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library-extra-code */ \"./src/library-extra-code.js\");\n/* harmony import */ var _more_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./more-code */ \"./src/more-code.js\");\nconsole.log(\"[library] File starts.\");\n\n\n\nclass Library {\n\n    constructor(name) {\n        //super();\n        this.name = name || 'Library';\n        this.cont = 0;\n    }\n    start() {\n        console.log(\"[library] We start here. Have fun!\");\n        console.log(\"[library] extraStuff.cont:\", _library_extra_code__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cont);\n        _library_extra_code__WEBPACK_IMPORTED_MODULE_0__[\"default\"].jump();\n        let hi = new _more_code__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        hi.sayHi();\n    }\n    do() {\n        console.log(\"[library] We start here. Have fun!\");\n        console.log(this.doMore());\n        this.cont += 1;\n        console.log(\"[library] this.cont:\", this.cont);\n    }\n    doMore() {\n        console.log(\"[library] do more!\");\n        this.cont += 5;\n        return this.cont;\n    }\n    end() {\n        console.log(\"[library] This is the end...\");\n    }\n    say(msg) {\n        console.log(this.name + \" says: \" + msg);\n        var msg = new SpeechSynthesisUtterance(msg);\n        window.speechSynthesis.speak(msg);\n    }\n\n}\n\n// expose global\nglobal.Library = new Library();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://libraryAndres/./src/library-source-code.js?");

/***/ }),

/***/ "./src/more-code.js":
/*!**************************!*\
  !*** ./src/more-code.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconsole.log(\"MoreCode!\");\n\nclass MoreCode {\n\n  constructor(name) {\n\n    this.name = name || \"Andres\";\n    console.log(\"[MoreCode] constructor()\");\n  }\n\n  sayHi() {\n    //alert(this.name);\n    console.log(\"[MoreCode] name: \" + this.name);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MoreCode);\n\n//# sourceURL=webpack://libraryAndres/./src/more-code.js?");

/***/ })

/******/ });