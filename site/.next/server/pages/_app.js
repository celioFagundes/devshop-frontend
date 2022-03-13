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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartContext\": () => (/* binding */ CartContext),\n/* harmony export */   \"CartProvider\": () => (/* binding */ CartProvider),\n/* harmony export */   \"useCart\": () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst CartProvider = ({ children  })=>{\n    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadedCart = localStorage.getItem('cart');\n        if (loadedCart) {\n            setItems(JSON.parse(loadedCart));\n        }\n    }, []);\n    const addToCart = (product, selectedVariation)=>{\n        const variationId = product.name + selectedVariation.color.colorName + selectedVariation.sku;\n        setItems((current)=>{\n            const newCart = {\n                ...current\n            };\n            if (current[variationId]) {\n                current[variationId].qtd++;\n            } else {\n                newCart[variationId] = {\n                    id: product.id,\n                    name: product.name,\n                    slug: product.slug,\n                    description: product.description,\n                    images: product.images,\n                    sizeType: product.sizeType,\n                    variation: selectedVariation,\n                    qtd: 1\n                };\n            }\n            localStorage.setItem('cart', JSON.stringify(newCart));\n            return newCart;\n        });\n    };\n    const removeFromCart = (product, selectedVariation)=>{\n        const variationId = product.name + selectedVariation.color.colorName + selectedVariation.sku;\n        const variation = items[variationId];\n        if (variation) {\n            if (variation.qtd > 0) {\n                setItems((current)=>{\n                    const newCart = {\n                        ...current\n                    };\n                    newCart[variationId].qtd--;\n                    localStorage.setItem('cart', JSON.stringify(newCart));\n                    if (newCart[variationId].qtd === 0) {\n                        const { [variationId]: etc , ...newCart2 } = newCart;\n                        localStorage.setItem('cart', JSON.stringify(newCart2));\n                        return newCart2;\n                    }\n                    return newCart;\n                });\n            }\n        }\n    };\n    const cartSize = Object.keys(items).length;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            items,\n            addToCart,\n            removeFromCart,\n            cartSize\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\lib\\\\CartContext.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined));\n};\nconst useCart = ()=>{\n    const cart = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n    return cart;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0MsUUFBUSxFQUFDLEdBQUdaLE9BQU87d0JBQ2xEYixZQUFZLENBQUNxQixPQUFPLENBQUMsQ0FBTSxPQUFFbkIsSUFBSSxDQUFDb0IsU0FBUyxDQUFDRyxRQUFRO3dCQUNwRCxNQUFNLENBQUNBLFFBQVE7b0JBQ2pCLENBQUM7b0JBQ0QsTUFBTSxDQUFDWixPQUFPO2dCQUNoQixDQUFDO1lBQ0gsQ0FBQztRQUFBLENBQUM7SUFDSixDQUFDO0lBQ0QsS0FBSyxDQUFDYSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDL0IsS0FBSyxFQUFFZ0MsTUFBTTtJQUMxQyxNQUFNLDZFQUNIbkMsV0FBVyxDQUFDb0MsUUFBUTtRQUNuQkMsS0FBSyxFQUFFLENBQUM7WUFBQ2xDLEtBQUs7WUFBRU8sU0FBUztZQUFFbUIsY0FBYztZQUFFRyxRQUFRO1FBQUMsQ0FBQztrQkFFcEQ5QixRQUFROzs7Ozs7QUFHZixDQUFDO0FBRU0sS0FBSyxDQUFDb0MsT0FBTyxPQUFTLENBQUM7SUFDNUIsS0FBSyxDQUFDQyxJQUFJLEdBQUd6QyxpREFBVSxDQUFDRSxXQUFXO0lBQ25DLE1BQU0sQ0FBQ3VDLElBQUk7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2l0ZS8uL2xpYi9DYXJ0Q29udGV4dC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pXHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoe30pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGxvYWRlZENhcnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpXHJcbiAgICBpZiAobG9hZGVkQ2FydCkge1xyXG4gICAgICBzZXRJdGVtcyhKU09OLnBhcnNlKGxvYWRlZENhcnQpKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBhZGRUb0NhcnQgPSAocHJvZHVjdCwgc2VsZWN0ZWRWYXJpYXRpb24pID0+IHtcclxuICAgIGNvbnN0IHZhcmlhdGlvbklkID0gcHJvZHVjdC5uYW1lICsgc2VsZWN0ZWRWYXJpYXRpb24uY29sb3IuY29sb3JOYW1lICsgc2VsZWN0ZWRWYXJpYXRpb24uc2t1XHJcbiAgICBzZXRJdGVtcyhjdXJyZW50ID0+IHtcclxuICAgICAgY29uc3QgbmV3Q2FydCA9IHsgLi4uY3VycmVudCB9XHJcbiAgICAgIGlmIChjdXJyZW50W3ZhcmlhdGlvbklkXSkge1xyXG4gICAgICAgIGN1cnJlbnRbdmFyaWF0aW9uSWRdLnF0ZCsrXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3Q2FydFt2YXJpYXRpb25JZF0gPSB7XHJcbiAgICAgICAgICBpZDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcclxuICAgICAgICAgIHNsdWc6IHByb2R1Y3Quc2x1ZyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9kdWN0LmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgaW1hZ2VzOiBwcm9kdWN0LmltYWdlcyxcclxuICAgICAgICAgIHNpemVUeXBlOiBwcm9kdWN0LnNpemVUeXBlLFxyXG4gICAgICAgICAgdmFyaWF0aW9uOiBzZWxlY3RlZFZhcmlhdGlvbixcclxuICAgICAgICAgIHF0ZDogMSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkobmV3Q2FydCkpXHJcbiAgICAgIHJldHVybiBuZXdDYXJ0XHJcbiAgICB9KVxyXG4gIH1cclxuICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChwcm9kdWN0LCBzZWxlY3RlZFZhcmlhdGlvbikgPT4ge1xyXG4gICAgY29uc3QgdmFyaWF0aW9uSWQgPSBwcm9kdWN0Lm5hbWUgKyBzZWxlY3RlZFZhcmlhdGlvbi5jb2xvci5jb2xvck5hbWUgKyBzZWxlY3RlZFZhcmlhdGlvbi5za3VcclxuICAgIGNvbnN0IHZhcmlhdGlvbiA9IGl0ZW1zW3ZhcmlhdGlvbklkXVxyXG4gICAgaWYodmFyaWF0aW9uKXtcclxuICAgIGlmKHZhcmlhdGlvbi5xdGQgPiAwKXtcclxuICAgICAgc2V0SXRlbXMoY3VycmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3Q2FydCA9IHsuLi5jdXJyZW50fVxyXG4gICAgICAgIG5ld0NhcnRbdmFyaWF0aW9uSWRdLnF0ZC0tXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShuZXdDYXJ0KSlcclxuICAgICAgICBpZihuZXdDYXJ0W3ZhcmlhdGlvbklkXS5xdGQgPT09IDApe1xyXG4gICAgICAgICAgY29uc3Qge1t2YXJpYXRpb25JZF0gOiBldGMsIC4uLm5ld0NhcnQyfSA9IG5ld0NhcnRcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkobmV3Q2FydDIpKVxyXG4gICAgICAgICAgcmV0dXJuIG5ld0NhcnQyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdDYXJ0XHJcbiAgICAgIH0pXHJcbiAgICB9fSBcclxuICB9XHJcbiAgY29uc3QgY2FydFNpemUgPSBPYmplY3Qua2V5cyhpdGVtcykubGVuZ3RoXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17eyBpdGVtcywgYWRkVG9DYXJ0LCByZW1vdmVGcm9tQ2FydCwgY2FydFNpemUgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDYXJ0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhcnQgPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KVxyXG4gIHJldHVybiBjYXJ0XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJDYXJ0Q29udGV4dCIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwiaXRlbXMiLCJzZXRJdGVtcyIsImxvYWRlZENhcnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsInNlbGVjdGVkVmFyaWF0aW9uIiwidmFyaWF0aW9uSWQiLCJuYW1lIiwiY29sb3IiLCJjb2xvck5hbWUiLCJza3UiLCJjdXJyZW50IiwibmV3Q2FydCIsInF0ZCIsImlkIiwic2x1ZyIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwic2l6ZVR5cGUiLCJ2YXJpYXRpb24iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicmVtb3ZlRnJvbUNhcnQiLCJldGMiLCJuZXdDYXJ0MiIsImNhcnRTaXplIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDYXJ0IiwiY2FydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/CartContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/styles.css */ \"./css/styles.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_CartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/CartContext */ \"./lib/CartContext.js\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_CartContext__WEBPACK_IMPORTED_MODULE_3__.CartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDQztBQUN1QjtBQUNWO0FBQ007QUFDN0MsS0FBSyxDQUFDRSxHQUFHLElBQUksQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUN6QyxNQUFNLDZFQUNISCwwREFBWTs4RkFDVkUsU0FBUztlQUFLQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QixDQUFDO0FBQ0QsaUVBQWVGLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9jc3Mvc3R5bGVzLmNzcydcclxuaW1wb3J0IHsgQ2FydFByb3ZpZGVyIH0gZnJvbSAnLi4vbGliL0NhcnRDb250ZXh0J1xyXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcydcclxuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3MnXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9DYXJ0UHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJ0UHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./css/styles.css":
/*!************************!*\
  !*** ./css/styles.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
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