"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Home/Products.js":
/*!*************************************!*\
  !*** ./components/Home/Products.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CardProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CardProduct */ \"./components/CardProduct/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar Products = function(param) {\n    var products = param.products;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white py-2 px-4 font-medium text-blue-700 mb-2\",\n                children: \"Confira nossos produtos\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\components\\\\Home\\\\Products.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex flex-row h-100 flex-wrap items-start justify-center md:justify-between\",\n                children: products && products.map(function(product) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardProduct__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        product: product\n                    }, product.id, false, {\n                        fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\components\\\\Home\\\\Products.js\",\n                        lineNumber: 11,\n                        columnNumber: 46\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\components\\\\Home\\\\Products.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\components\\\\Home\\\\Products.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this));\n};\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUvUHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUI7QUFDZTs7QUFFeEMsR0FBSyxDQUFDRSxRQUFRLEdBQUcsUUFBUSxRQUFVLENBQUM7UUFBaEJDLFFBQVEsU0FBUkEsUUFBUTs7SUFDMUIsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBTTs7d0ZBQ2hCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBbUQ7MEJBQUMsQ0FFbkU7Ozs7Ozt3RkFDQ0QsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQThFOzBCQUM1RkYsUUFBUSxJQUFJQSxRQUFRLENBQUNHLEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxPQUFPO2tDQUFJLE1BQU0sK0RBQUxOLG9EQUFXO3dCQUFDTSxPQUFPLEVBQUVBLE9BQU87dUJBQVNBLE9BQU8sQ0FBQ0MsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0YsQ0FBQztLQVpLTixRQUFRO0FBY2QsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3RzLmpzP2UyZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2FyZFByb2R1Y3QgZnJvbSAnLi4vQ2FyZFByb2R1Y3QnXHJcblxyXG5jb25zdCBQcm9kdWN0cyA9ICh7IHByb2R1Y3RzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3B5LTMnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSBweS0yIHB4LTQgZm9udC1tZWRpdW0gdGV4dC1ibHVlLTcwMCBtYi0yJz5cclxuICAgICAgICAgICAgQ29uZmlyYSBub3Nzb3MgcHJvZHV0b3NcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIGZsZXggZmxleC1yb3cgaC0xMDAgZmxleC13cmFwIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIG1kOmp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAge3Byb2R1Y3RzICYmIHByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IDxDYXJkUHJvZHVjdCBwcm9kdWN0PXtwcm9kdWN0fSBrZXkgPSB7cHJvZHVjdC5pZH0vPil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJkUHJvZHVjdCIsIlByb2R1Y3RzIiwicHJvZHVjdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9kdWN0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Home/Products.js\n");

/***/ })

});