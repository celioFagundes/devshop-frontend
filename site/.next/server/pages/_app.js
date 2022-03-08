/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/CartContext.js":
/*!****************************!*\
  !*** ./lib/CartContext.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartContext\": () => (/* binding */ CartContext),\n/* harmony export */   \"CartProvider\": () => (/* binding */ CartProvider),\n/* harmony export */   \"useCart\": () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst CartProvider = ({ children  })=>{\n    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadedCart = localStorage.getItem('cart');\n        if (loadedCart) {\n            setItems(JSON.parse(loadedCart));\n        }\n    }, []);\n    const addToCart = (product, selectedVariation)=>{\n        const variation = selectedVariation[0];\n        const variationId = variation.optionName1 + '-' + variation.optionName2;\n        setItems((current)=>{\n            const newCart = {\n                ...current\n            };\n            if (current[product.id]) {\n                if (current[product.id].qtd[variationId]) {\n                    current[product.id].qtd[variationId].qtd++;\n                } else {\n                    current[product.id].qtd = {\n                        ...current[product.id].qtd,\n                        [variationId]: {\n                            variation,\n                            qtd: 1\n                        }\n                    };\n                }\n            } else {\n                newCart[product.id] = {\n                    product,\n                    qtd: {\n                        [variationId]: {\n                            variation,\n                            qtd: 1\n                        }\n                    }\n                };\n            }\n            localStorage.setItem('cart', JSON.stringify(newCart));\n            return newCart;\n        });\n    };\n    const removeFromCart = (product)=>{\n        const id = product.id;\n        setItems((current)=>{\n            const { [id]: etc , ...newCart } = current;\n            localStorage.setItem('cart', JSON.stringify(newCart));\n            return newCart;\n        });\n    };\n    const cartSize = Object.keys(items).length;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            items,\n            addToCart,\n            removeFromCart,\n            cartSize\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\lib\\\\CartContext.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined));\n};\nconst useCart = ()=>{\n    const cart = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n    return cart;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNINUIsV0FBVyxDQUFDNkIsUUFBUTtRQUNuQkMsS0FBSyxFQUFFLENBQUM7WUFBQzNCLEtBQUs7WUFBRU8sU0FBUztZQUFFYSxjQUFjO1lBQUVFLFFBQVE7UUFBQyxDQUFDO2tCQUVwRHZCLFFBQVE7Ozs7OztBQUdmLENBQUM7QUFFTSxLQUFLLENBQUM2QixPQUFPLE9BQVMsQ0FBQztJQUM1QixLQUFLLENBQUNDLElBQUksR0FBR2xDLGlEQUFVLENBQUNFLFdBQVc7SUFDbkMsTUFBTSxDQUFDZ0MsSUFBSTtBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlLy4vbGliL0NhcnRDb250ZXh0LmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSlcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZSh7fSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbG9hZGVkQ2FydCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JylcclxuICAgIGlmIChsb2FkZWRDYXJ0KSB7XHJcbiAgICAgIHNldEl0ZW1zKEpTT04ucGFyc2UobG9hZGVkQ2FydCkpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0LCBzZWxlY3RlZFZhcmlhdGlvbikgPT4ge1xyXG4gICAgY29uc3QgdmFyaWF0aW9uID0gc2VsZWN0ZWRWYXJpYXRpb25bMF1cclxuICAgIGNvbnN0IHZhcmlhdGlvbklkPSB2YXJpYXRpb24ub3B0aW9uTmFtZTEgKyAnLScrIHZhcmlhdGlvbi5vcHRpb25OYW1lMlxyXG4gICAgc2V0SXRlbXMoY3VycmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3Q2FydCA9IHsuLi5jdXJyZW50fVxyXG4gICAgICAgIGlmKGN1cnJlbnRbcHJvZHVjdC5pZF0pe1xyXG4gICAgICAgICAgICBpZihjdXJyZW50W3Byb2R1Y3QuaWRdLnF0ZFt2YXJpYXRpb25JZF0pe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFtwcm9kdWN0LmlkXS5xdGRbdmFyaWF0aW9uSWRdLnF0ZCsrXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFtwcm9kdWN0LmlkXS5xdGQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudFtwcm9kdWN0LmlkXS5xdGQsXHJcbiAgICAgICAgICAgICAgICAgICAgW3ZhcmlhdGlvbklkXTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXRkOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5ld0NhcnRbcHJvZHVjdC5pZF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgIHF0ZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFt2YXJpYXRpb25JZF06IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgIHF0ZDogMSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9LCAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShuZXdDYXJ0KSlcclxuICAgICAgcmV0dXJuIG5ld0NhcnRcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IHJlbW92ZUZyb21DYXJ0ID0gcHJvZHVjdCA9PiB7XHJcbiAgICBjb25zdCBpZCA9IHByb2R1Y3QuaWRcclxuICAgIHNldEl0ZW1zKGN1cnJlbnQgPT4ge1xyXG4gICAgICBjb25zdCB7IFtpZF06IGV0YywgLi4ubmV3Q2FydCB9ID0gY3VycmVudFxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KG5ld0NhcnQpKVxyXG4gICAgICByZXR1cm4gbmV3Q2FydFxyXG4gICAgfSlcclxuICB9XHJcbiAgY29uc3QgY2FydFNpemUgPSBPYmplY3Qua2V5cyhpdGVtcykubGVuZ3RoXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17eyBpdGVtcywgYWRkVG9DYXJ0LCByZW1vdmVGcm9tQ2FydCwgY2FydFNpemUgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDYXJ0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhcnQgPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KVxyXG4gIHJldHVybiBjYXJ0XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJDYXJ0Q29udGV4dCIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwiaXRlbXMiLCJzZXRJdGVtcyIsImxvYWRlZENhcnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsInNlbGVjdGVkVmFyaWF0aW9uIiwidmFyaWF0aW9uIiwidmFyaWF0aW9uSWQiLCJvcHRpb25OYW1lMSIsIm9wdGlvbk5hbWUyIiwiY3VycmVudCIsIm5ld0NhcnQiLCJpZCIsInF0ZCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZW1vdmVGcm9tQ2FydCIsImV0YyIsImNhcnRTaXplIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDYXJ0IiwiY2FydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/CartContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/styles.css */ \"./css/styles.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_CartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/CartContext */ \"./lib/CartContext.js\");\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_CartContext__WEBPACK_IMPORTED_MODULE_3__.CartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNDO0FBQ3VCO0FBQ2pELEtBQUssQ0FBQ0UsR0FBRyxJQUFJLENBQUNDLENBQUFBLFNBQVMsR0FBRUMsU0FBUyxHQUFDLEdBQUssQ0FBQztJQUNyQyxNQUFNLDZFQUNESCwwREFBWTs4RkFDUkUsU0FBUztlQUFLQyxTQUFTOzs7Ozs7Ozs7OztBQUdwQyxDQUFDO0FBQ0QsaUVBQWVGLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9jc3Mvc3R5bGVzLmNzcydcclxuaW1wb3J0IHsgQ2FydFByb3ZpZGVyIH0gZnJvbSAnLi4vbGliL0NhcnRDb250ZXh0J1xyXG5jb25zdCBBcHAgPSAoe0NvbXBvbmVudCwgcGFnZVByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FydFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cclxuICAgICAgICA8L0NhcnRQcm92aWRlcj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHAiXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJ0UHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./css/styles.css":
/*!************************!*\
  !*** ./css/styles.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();