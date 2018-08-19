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

/***/ "./src/library-extra-code.js":
/*!***********************************!*\
  !*** ./src/library-extra-code.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconsole.log(\"extra stuff here!\");\n\nconst extraStuff = function () {\n\n    return {\n        cont: 0,\n        jump: () => {\n            this.cont += 1;\n        }\n    };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (extraStuff);\n\n//# sourceURL=webpack:///./src/library-extra-code.js?");

/***/ }),

/***/ "./src/library-source-code.js":
/*!************************************!*\
  !*** ./src/library-source-code.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _library_extra_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library-extra-code */ \"./src/library-extra-code.js\");\n/* harmony import */ var _more_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./more-code */ \"./src/more-code.js\");\nconsole.log(\"[library] File starts.\");\n\n\n\n// let user = new MoreCode(\"Cindy\");\n// MoreCode.sayHi();\n\n/*\r\nconst library = function() {\r\n\r\n    console.log(\"[library] library function starts.\");\r\n\r\n    // let user = new MoreCode(\"Melanie\");\r\n    // MoreCode.sayHi();\r\n\r\n    const arr = [1,2,3,4,5,6,7,8,9,10];\r\n\r\n    const doStuff1 = () => {\r\n        return arr.map(x => x * 2);\r\n    }\r\n\r\n    const doStuff2 = () => arr.map(x => x * 2);\r\n\r\n    return {\r\n        start: () => {\r\n            console.log(\"[library] We start here. Have fun!\");\r\n            console.log(\"[library] extraStuff.cont:\", extraStuff.cont );\r\n            extraStuff.jump();\r\n            console.log(\"[library] extraStuff.cont:\", extraStuff.cont );    \r\n        },\r\n        do: () => {\r\n            console.log(\"[library] We start here. Have fun!\");\r\n            console.log(doStuff1());\r\n            console.log(doStuff2());\r\n        },\r\n        end: () => {\r\n            console.log(\"[library] This is the end...\");\r\n        },\r\n    }\r\n\r\n}\r\n*/\n\nclass Library {\n    constructor(name) {\n        this._name = name || 'Library';\n    }\n    get name() {\n        return this._name;\n    }\n\n    /*\r\n    start() {\r\n        console.log(\"[library] We start here. Have fun!\");\r\n        console.log(\"[library] extraStuff.cont:\", extraStuff.cont );\r\n        extraStuff.jump();\r\n        console.log(\"[library] extraStuff.cont:\", extraStuff.cont );    \r\n    }\r\n    do() {\r\n        console.log(\"[library] We start here. Have fun!\");\r\n        console.log(doStuff1());\r\n        console.log(doStuff2());\r\n    }\r\n    end() {\r\n        console.log(\"[library] This is the end...\");\r\n    }\r\n    say(msg) {\r\n        console.log(this.name + \" says: \" + msg);\r\n    }\r\n    */\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Library);\n\n//# sourceURL=webpack:///./src/library-source-code.js?");

/***/ }),

/***/ "./src/more-code.js":
/*!**************************!*\
  !*** ./src/more-code.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconsole.log(\"MoreCode!\");\n\nclass MoreCode {\n\n  constructor(name) {\n    this.name = name;\n  }\n\n  sayHi() {\n    //alert(this.name);\n    console.log(this.name);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MoreCode);\n\n//# sourceURL=webpack:///./src/more-code.js?");

/***/ })

/******/ });