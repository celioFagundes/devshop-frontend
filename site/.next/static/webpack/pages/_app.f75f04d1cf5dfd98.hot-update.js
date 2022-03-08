"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/CartContext.js":
/*!****************************!*\
  !*** ./lib/CartContext.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartContext\": function() { return /* binding */ CartContext; },\n/* harmony export */   \"CartProvider\": function() { return /* binding */ CartProvider; },\n/* harmony export */   \"useCart\": function() { return /* binding */ useCart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nvar CartProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), items = ref[0], setItems = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var loadedCart = localStorage.getItem('cart');\n        if (loadedCart) {\n            setItems(JSON.parse(loadedCart));\n        }\n    }, []);\n    var addToCart = function(product) {\n        setItems(function(current) {\n            var newCart = _objectSpread({}, current, _defineProperty({}, product.id, product));\n            localStorage.setItem('cart', JSON.stringify(newCart));\n            return newCart;\n        });\n    };\n    var cartSize = Object.keys(items).length;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            items: items,\n            addToCart: addToCart,\n            cartSize: cartSize\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\lib\\\\CartContext.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this));\n};\n_s(CartProvider, \"bZvTV4UWTy+ePeavylPDvbKzupU=\");\n_c = CartProvider;\nvar useCart = function() {\n    _s1();\n    var cart = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n    return cart;\n};\n_s1(useCart, \"QchebOVKze+CH1FRHiU38Fd0/kM=\");\nvar _c;\n$RefreshReg$(_c, \"CartProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvQ2FydENvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELEdBQUssQ0FBQ0ksV0FBVyxpQkFBR0osb0RBQWEsQ0FBQyxDQUFDLENBQUM7QUFFcEMsR0FBSyxDQUFDSyxZQUFZLEdBQUcsUUFBUSxRQUFVLENBQUM7UUFBaEJDLFFBQVEsU0FBUkEsUUFBUTs7SUFDckMsR0FBSyxDQUFxQkwsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUE5Qk0sS0FBSyxHQUFjTixHQUFZLEtBQXhCTyxRQUFRLEdBQUlQLEdBQVk7SUFDdENFLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDZixHQUFLLENBQUNNLFVBQVUsR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBTTtRQUM5QyxFQUFFLEVBQUNGLFVBQVUsRUFBQyxDQUFDO1lBQ1hELFFBQVEsQ0FBQ0ksSUFBSSxDQUFDQyxLQUFLLENBQUNKLFVBQVU7UUFDbEMsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxHQUFLLENBQUNLLFNBQVMsR0FBR0MsUUFBUSxDQUFSQSxPQUFPLEVBQUksQ0FBQztRQUM1QlAsUUFBUSxDQUFDUSxRQUFRLENBQVJBLE9BQU8sRUFBSSxDQUFDO1lBQ25CLEdBQUssQ0FBQ0MsT0FBTyxxQkFDUkQsT0FBTyxzQkFDVEQsT0FBTyxDQUFDRyxFQUFFLEVBQUdILE9BQU87WUFFdkJMLFlBQVksQ0FBQ1MsT0FBTyxDQUFDLENBQU0sT0FBRVAsSUFBSSxDQUFDUSxTQUFTLENBQUNILE9BQU87WUFDbkQsTUFBTSxDQUFDQSxPQUFPO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0lBQ0QsR0FBSyxDQUFDSSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDaEIsS0FBSyxFQUFFaUIsTUFBTTtJQUMxQyxNQUFNLDZFQUNIcEIsV0FBVyxDQUFDcUIsUUFBUTtRQUFDQyxLQUFLLEVBQUUsQ0FBQztZQUFDbkIsS0FBSyxFQUFMQSxLQUFLO1lBQUVPLFNBQVMsRUFBVEEsU0FBUztZQUFFTyxRQUFRLEVBQVJBLFFBQVE7UUFBQyxDQUFDO2tCQUN4RGYsUUFBUTs7Ozs7O0FBR2YsQ0FBQztHQXpCWUQsWUFBWTtLQUFaQSxZQUFZO0FBMkJsQixHQUFLLENBQUNzQixPQUFPLEdBQUcsUUFBUSxHQUFGLENBQUM7O0lBQzVCLEdBQUssQ0FBQ0MsSUFBSSxHQUFHMUIsaURBQVUsQ0FBQ0UsV0FBVztJQUNuQyxNQUFNLENBQUN3QixJQUFJO0FBQ2IsQ0FBQztJQUhZRCxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9DYXJ0Q29udGV4dC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pXHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoe30pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGxvYWRlZENhcnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpXHJcbiAgICBpZihsb2FkZWRDYXJ0KXtcclxuICAgICAgICBzZXRJdGVtcyhKU09OLnBhcnNlKGxvYWRlZENhcnQpKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIFxyXG4gIGNvbnN0IGFkZFRvQ2FydCA9IHByb2R1Y3QgPT4ge1xyXG4gICAgc2V0SXRlbXMoY3VycmVudCA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0NhcnQgPSB7XHJcbiAgICAgICAgLi4uY3VycmVudCxcclxuICAgICAgICBbcHJvZHVjdC5pZF06IHByb2R1Y3QsXHJcbiAgICAgIH1cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShuZXdDYXJ0KSlcclxuICAgICAgcmV0dXJuIG5ld0NhcnRcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IGNhcnRTaXplID0gT2JqZWN0LmtleXMoaXRlbXMpLmxlbmd0aFxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaXRlbXMsIGFkZFRvQ2FydCwgY2FydFNpemUgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ2FydCA9ICgpID0+IHtcclxuICBjb25zdCBjYXJ0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dClcclxuICByZXR1cm4gY2FydFxyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiQ2FydENvbnRleHQiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsIml0ZW1zIiwic2V0SXRlbXMiLCJsb2FkZWRDYXJ0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImFkZFRvQ2FydCIsInByb2R1Y3QiLCJjdXJyZW50IiwibmV3Q2FydCIsImlkIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImNhcnRTaXplIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDYXJ0IiwiY2FydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/CartContext.js\n");

/***/ })

});