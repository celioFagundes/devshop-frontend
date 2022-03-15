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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartContext\": () => (/* binding */ CartContext),\n/* harmony export */   \"CartProvider\": () => (/* binding */ CartProvider),\n/* harmony export */   \"useCart\": () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst CartProvider = ({ children  })=>{\n    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadedCart = localStorage.getItem('cart');\n        if (loadedCart) {\n            setItems(JSON.parse(loadedCart));\n        }\n    }, []);\n    const addOne = (id)=>{\n        setItems((current)=>{\n            const newCart = {\n                ...current\n            };\n            if (current[id]) {\n                current[id].qtd++;\n            }\n            localStorage.setItem('cart', JSON.stringify(newCart));\n            return newCart;\n        });\n    };\n    const removeOne = (id)=>{\n        const variation = items[id];\n        if (variation) {\n            if (variation.qtd > 0) {\n                setItems((current)=>{\n                    const newCart = {\n                        ...current\n                    };\n                    newCart[id].qtd--;\n                    localStorage.setItem('cart', JSON.stringify(newCart));\n                    if (newCart[id].qtd === 0) {\n                        const { [id]: etc , ...newCart2 } = newCart;\n                        localStorage.setItem('cart', JSON.stringify(newCart2));\n                        return newCart2;\n                    }\n                    return newCart;\n                });\n            }\n        }\n    };\n    const addToCart = (product, selectedVariation, voltage)=>{\n        const variationId = product.name + selectedVariation.sku + voltage;\n        console.log(voltage);\n        setItems((current)=>{\n            const newCart = {\n                ...current\n            };\n            newCart[variationId] = {\n                id: product.id,\n                name: product.name,\n                slug: product.slug,\n                description: product.description,\n                images: product.images,\n                sizeType: product.sizeType,\n                voltage: voltage !== '' && voltage,\n                variation: selectedVariation,\n                qtd: 1\n            };\n            localStorage.setItem('cart', JSON.stringify(newCart));\n            return newCart;\n        });\n    };\n    const removeFromCart = (product, selectedVariation, voltage)=>{\n        const variationId = product.name + selectedVariation.sku + voltage;\n        const variation = items[variationId];\n        if (variation) {\n            if (variation.qtd > 0) {\n                setItems((current)=>{\n                    const { [variationId]: etc , ...newCart2 } = current;\n                    localStorage.setItem('cart', JSON.stringify(newCart2));\n                    return newCart2;\n                });\n            }\n        }\n    };\n    const cartSize = Object.keys(items).length;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            items,\n            addToCart,\n            addOne,\n            removeOne,\n            removeFromCart,\n            cartSize\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\lib\\\\CartContext.js\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined));\n};\nconst useCart = ()=>{\n    const cart = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n    return cart;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNsQyxLQUFLLEVBQUVtQyxNQUFNO0lBQzFDLE1BQU0sNkVBQ0h0QyxXQUFXLENBQUN1QyxRQUFRO1FBQ25CQyxLQUFLLEVBQUUsQ0FBQztZQUFDckMsS0FBSztZQUFFa0IsU0FBUztZQUFDWCxNQUFNO1lBQUVPLFNBQVM7WUFBRWlCLGNBQWM7WUFBRUMsUUFBUTtRQUFDLENBQUM7a0JBRXRFakMsUUFBUTs7Ozs7O0FBR2YsQ0FBQztBQUVNLEtBQUssQ0FBQ3VDLE9BQU8sT0FBUyxDQUFDO0lBQzVCLEtBQUssQ0FBQ0MsSUFBSSxHQUFHNUMsaURBQVUsQ0FBQ0UsV0FBVztJQUNuQyxNQUFNLENBQUMwQyxJQUFJO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NpdGUvLi9saWIvQ2FydENvbnRleHQuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKHt9KVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsb2FkZWRDYXJ0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKVxyXG4gICAgaWYgKGxvYWRlZENhcnQpIHtcclxuICAgICAgc2V0SXRlbXMoSlNPTi5wYXJzZShsb2FkZWRDYXJ0KSlcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgYWRkT25lID0gKGlkKSA9PntcclxuICAgIHNldEl0ZW1zKGN1cnJlbnQgPT4ge1xyXG4gICAgICBjb25zdCBuZXdDYXJ0ID0geyAuLi5jdXJyZW50IH1cclxuICAgICAgaWYgKGN1cnJlbnRbaWRdKSB7XHJcbiAgICAgICAgY3VycmVudFtpZF0ucXRkKytcclxuICAgICAgfVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KG5ld0NhcnQpKVxyXG4gICAgICByZXR1cm4gbmV3Q2FydFxyXG4gICAgfSlcclxuICB9XHJcbiAgY29uc3QgcmVtb3ZlT25lID0gKGlkKSA9PntcclxuICAgIGNvbnN0IHZhcmlhdGlvbiA9IGl0ZW1zW2lkXVxyXG4gICAgaWYodmFyaWF0aW9uKXtcclxuICAgIGlmKHZhcmlhdGlvbi5xdGQgPiAwKXtcclxuICAgICAgc2V0SXRlbXMoY3VycmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3Q2FydCA9IHsuLi5jdXJyZW50fVxyXG4gICAgICAgIG5ld0NhcnRbaWRdLnF0ZC0tXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShuZXdDYXJ0KSlcclxuICAgICAgICBpZihuZXdDYXJ0W2lkXS5xdGQgPT09IDApe1xyXG4gICAgICAgICAgY29uc3Qge1tpZF0gOiBldGMsIC4uLm5ld0NhcnQyfSA9IG5ld0NhcnRcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkobmV3Q2FydDIpKVxyXG4gICAgICAgICAgcmV0dXJuIG5ld0NhcnQyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdDYXJ0XHJcbiAgICAgIH0pXHJcbiAgICB9fSBcclxuICB9XHJcbiAgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3QsIHNlbGVjdGVkVmFyaWF0aW9uLCB2b2x0YWdlKSA9PiB7XHJcbiAgICBjb25zdCB2YXJpYXRpb25JZCA9IHByb2R1Y3QubmFtZSArIHNlbGVjdGVkVmFyaWF0aW9uLnNrdSArIHZvbHRhZ2VcclxuICAgIGNvbnNvbGUubG9nKHZvbHRhZ2UpXHJcbiAgICBzZXRJdGVtcyhjdXJyZW50ID0+IHtcclxuICAgICAgY29uc3QgbmV3Q2FydCA9IHsgLi4uY3VycmVudCB9XHJcbiAgICAgICAgbmV3Q2FydFt2YXJpYXRpb25JZF0gPSB7XHJcbiAgICAgICAgICBpZDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcclxuICAgICAgICAgIHNsdWc6IHByb2R1Y3Quc2x1ZyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9kdWN0LmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgaW1hZ2VzOiBwcm9kdWN0LmltYWdlcyxcclxuICAgICAgICAgIHNpemVUeXBlOiBwcm9kdWN0LnNpemVUeXBlLFxyXG4gICAgICAgICAgdm9sdGFnZTogdm9sdGFnZSAhPT0gJycgJiYgdm9sdGFnZSxcclxuICAgICAgICAgIHZhcmlhdGlvbjogc2VsZWN0ZWRWYXJpYXRpb24sXHJcbiAgICAgICAgICBxdGQ6IDEsXHJcbiAgICAgICAgfVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KG5ld0NhcnQpKVxyXG4gICAgICByZXR1cm4gbmV3Q2FydFxyXG4gICAgfSlcclxuICB9XHJcbiAgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSAocHJvZHVjdCwgc2VsZWN0ZWRWYXJpYXRpb24sIHZvbHRhZ2UpID0+IHtcclxuICAgIGNvbnN0IHZhcmlhdGlvbklkID0gcHJvZHVjdC5uYW1lICsgc2VsZWN0ZWRWYXJpYXRpb24uc2t1ICsgdm9sdGFnZVxyXG4gICAgY29uc3QgdmFyaWF0aW9uID0gaXRlbXNbdmFyaWF0aW9uSWRdXHJcbiAgICBpZih2YXJpYXRpb24pe1xyXG4gICAgaWYodmFyaWF0aW9uLnF0ZCA+IDApe1xyXG4gICAgICBzZXRJdGVtcyhjdXJyZW50ID0+IHtcclxuICAgICAgICAgIGNvbnN0IHtbdmFyaWF0aW9uSWRdIDogZXRjLCAuLi5uZXdDYXJ0Mn0gPSBjdXJyZW50XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KG5ld0NhcnQyKSlcclxuICAgICAgICAgIHJldHVybiBuZXdDYXJ0MlxyXG4gICAgICAgIH0pXHJcbiAgICB9fSBcclxuICB9XHJcbiAgY29uc3QgY2FydFNpemUgPSBPYmplY3Qua2V5cyhpdGVtcykubGVuZ3RoXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17eyBpdGVtcywgYWRkVG9DYXJ0LGFkZE9uZSwgcmVtb3ZlT25lLCByZW1vdmVGcm9tQ2FydCwgY2FydFNpemUgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDYXJ0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhcnQgPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KVxyXG4gIHJldHVybiBjYXJ0XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJDYXJ0Q29udGV4dCIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwiaXRlbXMiLCJzZXRJdGVtcyIsImxvYWRlZENhcnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiYWRkT25lIiwiaWQiLCJjdXJyZW50IiwibmV3Q2FydCIsInF0ZCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZW1vdmVPbmUiLCJ2YXJpYXRpb24iLCJldGMiLCJuZXdDYXJ0MiIsImFkZFRvQ2FydCIsInByb2R1Y3QiLCJzZWxlY3RlZFZhcmlhdGlvbiIsInZvbHRhZ2UiLCJ2YXJpYXRpb25JZCIsIm5hbWUiLCJza3UiLCJjb25zb2xlIiwibG9nIiwic2x1ZyIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwic2l6ZVR5cGUiLCJyZW1vdmVGcm9tQ2FydCIsImNhcnRTaXplIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDYXJ0IiwiY2FydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/CartContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/styles.css */ \"./css/styles.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_CartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/CartContext */ \"./lib/CartContext.js\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_SlickCarousel_carousel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SlickCarousel/carousel.css */ \"./components/SlickCarousel/carousel.css\");\n/* harmony import */ var _components_SlickCarousel_carousel_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_SlickCarousel_carousel_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_CartContext__WEBPACK_IMPORTED_MODULE_3__.CartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\_app.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNDO0FBQ3VCO0FBQ1Y7QUFDTTtBQUNJO0FBQ2pELEtBQUssQ0FBQ0UsR0FBRyxJQUFJLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDekMsTUFBTSw2RUFDSEgsMERBQVk7OEZBQ1ZFLFNBQVM7ZUFBS0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQztBQUNELGlFQUFlRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2l0ZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnLi4vY3NzL3N0eWxlcy5jc3MnXHJcbmltcG9ydCB7IENhcnRQcm92aWRlciB9IGZyb20gJy4uL2xpYi9DYXJ0Q29udGV4dCdcclxuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MnXHJcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzJ1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvU2xpY2tDYXJvdXNlbC9jYXJvdXNlbC5jc3MnXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9DYXJ0UHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJ0UHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./components/SlickCarousel/carousel.css":
/*!***********************************************!*\
  !*** ./components/SlickCarousel/carousel.css ***!
  \***********************************************/
/***/ (() => {



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