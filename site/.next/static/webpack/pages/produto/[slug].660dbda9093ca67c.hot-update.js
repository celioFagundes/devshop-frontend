"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/produto/[slug]",{

/***/ "./pages/produto/[slug].js":
/*!*********************************!*\
  !*** ./pages/produto/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_cjs_react_development__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/cjs/react.development */ \"./node_modules/react/cjs/react.development.js\");\n/* harmony import */ var _lib_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/CartContext */ \"./lib/CartContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Products = function(param) {\n    var product = param.product, categories = param.categories;\n    _s();\n    var cart = (0,_lib_CartContext__WEBPACK_IMPORTED_MODULE_4__.useCart)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), colorSelected = ref[0], setColorSelected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), sizeSelected = ref1[0], setSizeSelected = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), availableSizes = ref2[0], setAvailableSizes = ref2[1];\n    /*const possibleValues1 = [\r\n    ...new Set(product.variations.map(pv => pv.optionName1)),\r\n  ]\r\n  useEffect(() => {\r\n    const available = product.variations.filter(\r\n      prod => prod.optionName1 === colorSelected,\r\n    )\r\n    const sizes = available.map(item => item.optionName2)\r\n    const sizesFilter = [...new Set(sizes.map(s => s))]\r\n    setAvailableSizes(sizesFilter)\r\n  }, [colorSelected])*/ /*const selectedVariation = product.variations\r\n    .filter(item => item.optionName1 === colorSelected)\r\n    .filter(item => item.optionName2 === sizeSelected)\r\n\r\n  const selectedPrice =\r\n    selectedVariation && selectedVariation[0] && selectedVariation[0].price\r\n      ? selectedVariation[0].price\r\n      : product.price*/ return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        categories: categories,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container px-5 py-24 mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                    children: JSON.stringify(product, null, 2)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:w-4/5 mx-auto flex flex-wrap\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            alt: \"ecommerce\",\n                            className: \"lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded\",\n                            src: \"https://dummyimage.com/400x400\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-sm title-font text-gray-500 tracking-widest\",\n                                    children: \"BRAND NAME\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-gray-900 text-3xl title-font font-medium mb-1\",\n                                    children: product.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"leading-relaxed\",\n                                    children: product.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex ml-6 items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"mr-3\",\n                                                    children: \"Cor\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                    onChange: function(evt) {\n                                                        setColorSelected(evt.target.value);\n                                                        setSizeSelected('');\n                                                    },\n                                                    className: \"rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: \"\",\n                                                        hidden: true,\n                                                        children: \"Selecione\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                        lineNumber: 97,\n                                                        columnNumber: 19\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 87,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex ml-6 items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"mr-3\",\n                                                    children: \"Tamanho\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"relative\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                            onChange: function(evt) {\n                                                                return setSizeSelected(evt.target.value);\n                                                            },\n                                                            className: \"rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                                value: \"\",\n                                                                hidden: true,\n                                                                children: \"Selecione\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                                lineNumber: 110,\n                                                                columnNumber: 21\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                            lineNumber: 106,\n                                                            columnNumber: 19\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineCaretDown, {\n                                                            size: 12,\n                                                            className: \"absolute right-2 top-4\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                            lineNumber: 115,\n                                                            columnNumber: 19\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                    lineNumber: 105,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 103,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"title-font font-medium text-2xl text-gray-900\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 123,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return cart.addToCart(product, selectedVariation);\n                                            },\n                                            className: \"flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded\",\n                                            children: \"Adicionar ao carrinho\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 126,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return cart.removeFromCart(product);\n                                            },\n                                            className: \"flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded\",\n                                            children: \"Remover do carrinho\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 129,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 122,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, _this));\n};\n_s(Products, \"dlbCBvt6mD47gYG1Lru1Bph+EGY=\", false, function() {\n    return [\n        _lib_CartContext__WEBPACK_IMPORTED_MODULE_4__.useCart\n    ];\n});\n_c = Products;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdXRvL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnQztBQUVZO0FBQ087QUFFSTtBQUNSOzs7QUFvQy9DLEdBQUssQ0FBQ0ssUUFBUSxHQUFHLFFBQVEsUUFBcUIsQ0FBQztRQUEzQkMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLFVBQVUsU0FBVkEsVUFBVTs7SUFDckMsR0FBSyxDQUFDQyxJQUFJLEdBQUdKLHlEQUFPO0lBQ3BCLEdBQUssQ0FBcUNKLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTlDUyxhQUFhLEdBQXNCVCxHQUFZLEtBQWhDVSxnQkFBZ0IsR0FBSVYsR0FBWTtJQUN0RCxHQUFLLENBQW1DQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE1Q1csWUFBWSxHQUFxQlgsSUFBWSxLQUEvQlksZUFBZSxHQUFJWixJQUFZO0lBQ3BELEdBQUssQ0FBdUNBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBaERhLGNBQWMsR0FBdUJiLElBQVksS0FBakNjLGlCQUFpQixHQUFJZCxJQUFZO0lBQ3hELEVBVXFCO1FBV1hPLFVBQVUsRUFBRUEsVUFBVTs7WUFDdkJTOztzQ0FDRkMsQ0FBRzs7Ozs7OztzQ0FDSEYsQ0FBRzs7OzhDQUNESyxDQUFHOzRCQUNGQyxHQUFHLEVBQUMsQ0FBVzs0QkFDZkwsU0FBUyxFQUFDLENBQW1FOzRCQUM3RU0sR0FBRzs7Ozs7Ozs0QkFFQU4sU0FBUyxFQUFDLENBQStDOzs7O29HQUNLOzs7Ozs7c0RBR2hFUSxDQUFFO29DQUFDUjs4Q0FDRFYsT0FBTyxDQUFDbUIsSUFBSTs7Ozs7OztvQ0FFWlQsU0FBUyw4REFBa0I7OENBQUVWLE9BQU8sQ0FBQ3FCLFdBQVc7Ozs7Ozs7b0NBQzlDWCxTQUFTLDhEQUE4RDs7OzRDQUNyRUE7OztvREFDR0E7Ozs7Ozs7O29EQUdKYzs7OEdBRUVsQjtvREFDRixDQUFDOzs7d0RBR09xQixLQUFLLEVBQUMsQ0FBRTs7MkhBRWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs4REFJSGxCLENBQUc7NENBQUNDLFNBQVMsRUFBQyxDQUF3Qjs7c0VBQ3BDWSxDQUFJO29EQUFDWixTQUFTLEVBQUMsQ0FBTTs7Ozs7Ozs7b0RBQ2pCQTs7OzREQUVEYzs7OzREQUNBZCxTQUFTLEVBQUMsQ0FBd0o7OzJIQUVySixFQUFDLENBQUU7Z0VBQUNtQixNQUFNOzs7Ozs7Ozs7Ozs7OEVBS3hCakMsa0JBQWtCOzREQUNqQmtDOzREQUNBcEIsU0FBUyxFQUFDLENBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBS3pDRCxDQUFHO29DQUFDQyxTQUFTLEVBQUMsQ0FBTTs7OERBQ2xCWSxDQUFJOzRDQUFDWixTQUFTLEVBQUMsQ0FBK0M7Ozs7Ozs7O2dEQUd2Q1I7OzRDQUE0Q1E7Ozs7Ozs7OERBR25FcUIsQ0FBTTs0Q0FBQ0MsT0FBTyxFQUFJO2dEQUFLOUIsTUFBTSxDQUFOQSxJQUFJLENBQUNpQyxjQUFjLENBQUNuQyxPQUFPOzs0Q0FBR1UsU0FBUyxFQUFDLENBQXlHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTdkwsQ0FBQztHQS9GS1gsUUFBUTs7UUFDQ0QsT0FBTzs7O0tBRGhCQyxRQUFROztBQTZHZCxNQUFNLFNBQVNBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHV0by9bc2x1Z10uanM/MTg2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBncWwgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCB7IEFpT3V0bGluZUNhcmV0RG93biB9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xyXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnLi4vLi4vbGliL2dyYXBocWwnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudCdcclxuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gJy4uLy4uL2xpYi9DYXJ0Q29udGV4dCdcclxuLyo8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWZ1bGwgdy02IGgtNiBmb2N1czpvdXRsaW5lLW5vbmVcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZ3JheS0zMDAgbWwtMSBiZy1ncmF5LTcwMCByb3VuZGVkLWZ1bGwgdy02IGgtNiBmb2N1czpvdXRsaW5lLW5vbmVcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZ3JheS0zMDAgbWwtMSBiZy1pbmRpZ28tNTAwIHJvdW5kZWQtZnVsbCB3LTYgaC02IGZvY3VzOm91dGxpbmUtbm9uZVwiPjwvYnV0dG9uPiovXHJcbmNvbnN0IEdFVF9BTExfQ0FURUdPUklFUyA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICBjYXRlZ29yaWVzOiBnZXRBbGxDYXRlZ29yaWVzIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBzbHVnXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmNvbnN0IEdFVF9QUk9EVUNUX0JZX1NMVUcgPSBncWxgXHJcbiAgcXVlcnkgZ2V0UHJvZHVjdEJ5U0x1Zygkc2x1ZzogU3RyaW5nISkge1xyXG4gICAgcHJvZHVjdDogZ2V0UHJvZHVjdEJ5U2x1ZyhzbHVnOiAkc2x1Zykge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHNsdWdcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgaW1hZ2VzXHJcbiAgICAgIHNpemVUeXBlXHJcbiAgICAgIHZhcmlhdGlvbnMge1xyXG4gICAgICAgIGNvbG9ye1xyXG4gICAgICAgICAgY29sb3JOYW1lXHJcbiAgICAgICAgICBjb2xvckNvZGVcclxuICAgICAgICB9XHJcbiAgICAgICAgc2l6ZVxyXG4gICAgICAgIHNrdVxyXG4gICAgICAgIHByaWNlXHJcbiAgICAgICAgc3RvY2tcclxuICAgICAgICB3ZWlnaHRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5jb25zdCBQcm9kdWN0cyA9ICh7IHByb2R1Y3QsIGNhdGVnb3JpZXMgfSkgPT4ge1xyXG4gIGNvbnN0IGNhcnQgPSB1c2VDYXJ0KClcclxuICBjb25zdCBbY29sb3JTZWxlY3RlZCwgc2V0Q29sb3JTZWxlY3RlZF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbc2l6ZVNlbGVjdGVkLCBzZXRTaXplU2VsZWN0ZWRdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2F2YWlsYWJsZVNpemVzLCBzZXRBdmFpbGFibGVTaXplc10gPSB1c2VTdGF0ZShbXSlcclxuICAvKmNvbnN0IHBvc3NpYmxlVmFsdWVzMSA9IFtcclxuICAgIC4uLm5ldyBTZXQocHJvZHVjdC52YXJpYXRpb25zLm1hcChwdiA9PiBwdi5vcHRpb25OYW1lMSkpLFxyXG4gIF1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgYXZhaWxhYmxlID0gcHJvZHVjdC52YXJpYXRpb25zLmZpbHRlcihcclxuICAgICAgcHJvZCA9PiBwcm9kLm9wdGlvbk5hbWUxID09PSBjb2xvclNlbGVjdGVkLFxyXG4gICAgKVxyXG4gICAgY29uc3Qgc2l6ZXMgPSBhdmFpbGFibGUubWFwKGl0ZW0gPT4gaXRlbS5vcHRpb25OYW1lMilcclxuICAgIGNvbnN0IHNpemVzRmlsdGVyID0gWy4uLm5ldyBTZXQoc2l6ZXMubWFwKHMgPT4gcykpXVxyXG4gICAgc2V0QXZhaWxhYmxlU2l6ZXMoc2l6ZXNGaWx0ZXIpXHJcbiAgfSwgW2NvbG9yU2VsZWN0ZWRdKSovXHJcblxyXG4gIC8qY29uc3Qgc2VsZWN0ZWRWYXJpYXRpb24gPSBwcm9kdWN0LnZhcmlhdGlvbnNcclxuICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLm9wdGlvbk5hbWUxID09PSBjb2xvclNlbGVjdGVkKVxyXG4gICAgLmZpbHRlcihpdGVtID0+IGl0ZW0ub3B0aW9uTmFtZTIgPT09IHNpemVTZWxlY3RlZClcclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRQcmljZSA9XHJcbiAgICBzZWxlY3RlZFZhcmlhdGlvbiAmJiBzZWxlY3RlZFZhcmlhdGlvblswXSAmJiBzZWxlY3RlZFZhcmlhdGlvblswXS5wcmljZVxyXG4gICAgICA/IHNlbGVjdGVkVmFyaWF0aW9uWzBdLnByaWNlXHJcbiAgICAgIDogcHJvZHVjdC5wcmljZSovXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgcHgtNSBweS0yNCBteC1hdXRvJz5cclxuICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShwcm9kdWN0LG51bGwsMil9PC9wcmU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xnOnctNC81IG14LWF1dG8gZmxleCBmbGV4LXdyYXAnPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBhbHQ9J2Vjb21tZXJjZSdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdsZzp3LTEvMiB3LWZ1bGwgbGc6aC1hdXRvIGgtNjQgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgcm91bmRlZCdcclxuICAgICAgICAgICAgc3JjPSdodHRwczovL2R1bW15aW1hZ2UuY29tLzQwMHg0MDAnXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xnOnctMS8yIHctZnVsbCBsZzpwbC0xMCBsZzpweS02IG10LTYgbGc6bXQtMCc+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtc20gdGl0bGUtZm9udCB0ZXh0LWdyYXktNTAwIHRyYWNraW5nLXdpZGVzdCc+XHJcbiAgICAgICAgICAgICAgQlJBTkQgTkFNRVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LWdyYXktOTAwIHRleHQtM3hsIHRpdGxlLWZvbnQgZm9udC1tZWRpdW0gbWItMSc+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdsZWFkaW5nLXJlbGF4ZWQnPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbXQtNiBpdGVtcy1jZW50ZXIgcGItNSBib3JkZXItYi0yIGJvcmRlci1ncmF5LTEwMCBtYi01Jz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBtbC02IGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21yLTMnPkNvcjwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENvbG9yU2VsZWN0ZWQoZXZ0LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaXplU2VsZWN0ZWQoJycpXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncm91bmRlZCBib3JkZXIgYXBwZWFyYW5jZS1ub25lIGJvcmRlci1ncmF5LTMwMCBweS0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tMjAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIHRleHQtYmFzZSBwbC0zIHByLTEwJ1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScnIGhpZGRlbj5cclxuICAgICAgICAgICAgICAgICAgICBTZWxlY2lvbmVcclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbWwtNiBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtci0zJz5UYW1hbmhvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlJz5cclxuICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldnQgPT4gc2V0U2l6ZVNlbGVjdGVkKGV2dC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncm91bmRlZCBib3JkZXIgYXBwZWFyYW5jZS1ub25lIGJvcmRlci1ncmF5LTMwMCBweS0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tMjAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIHRleHQtYmFzZSBwbC0zIHByLTEwJ1xyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nJyBoaWRkZW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTZWxlY2lvbmVcclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVDYXJldERvd25cclxuICAgICAgICAgICAgICAgICAgICBzaXplPXsxMn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIHJpZ2h0LTIgdG9wLTQnXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RpdGxlLWZvbnQgZm9udC1tZWRpdW0gdGV4dC0yeGwgdGV4dC1ncmF5LTkwMCc+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0geygpID0+Y2FydC5hZGRUb0NhcnQocHJvZHVjdCwgc2VsZWN0ZWRWYXJpYXRpb24pIH1jbGFzc05hbWU9J2ZsZXggbWwtYXV0byB0ZXh0LXdoaXRlIGJnLWluZGlnby01MDAgYm9yZGVyLTAgcHktMiBweC02IGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1pbmRpZ28tNjAwIHJvdW5kZWQnPlxyXG4gICAgICAgICAgICAgICAgQWRpY2lvbmFyIGFvIGNhcnJpbmhvXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0geygpID0+Y2FydC5yZW1vdmVGcm9tQ2FydChwcm9kdWN0KSB9Y2xhc3NOYW1lPSdmbGV4IG1sLWF1dG8gdGV4dC13aGl0ZSBiZy1pbmRpZ28tNTAwIGJvcmRlci0wIHB5LTIgcHgtNiBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctaW5kaWdvLTYwMCByb3VuZGVkJz5cclxuICAgICAgICAgICAgICAgIFJlbW92ZXIgZG8gY2FycmluaG9cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyBwcm9kdWN0IH0gPSBhd2FpdCBmZXRjaGVyKEdFVF9QUk9EVUNUX0JZX1NMVUcsIHtcclxuICAgIHNsdWc6IGNvbnRleHQucXVlcnkuc2x1ZyxcclxuICB9KVxyXG4gIGNvbnN0IHsgY2F0ZWdvcmllcyB9ID0gYXdhaXQgZmV0Y2hlcihHRVRfQUxMX0NBVEVHT1JJRVMpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwcm9kdWN0LFxyXG4gICAgICBjYXRlZ29yaWVzLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHNcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGF5b3V0IiwiQWlPdXRsaW5lQ2FyZXREb3duIiwidXNlRWZmZWN0IiwidXNlQ2FydCIsIlByb2R1Y3RzIiwicHJvZHVjdCIsImNhdGVnb3JpZXMiLCJjYXJ0IiwiY29sb3JTZWxlY3RlZCIsInNldENvbG9yU2VsZWN0ZWQiLCJzaXplU2VsZWN0ZWQiLCJzZXRTaXplU2VsZWN0ZWQiLCJhdmFpbGFibGVTaXplcyIsInNldEF2YWlsYWJsZVNpemVzIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJlIiwiSlNPTiIsInN0cmluZ2lmeSIsImltZyIsImFsdCIsInNyYyIsImgyIiwiaDEiLCJuYW1lIiwicCIsImRlc2NyaXB0aW9uIiwic3BhbiIsInNlbGVjdCIsIm9uQ2hhbmdlIiwiZXZ0IiwidGFyZ2V0IiwidmFsdWUiLCJvcHRpb24iLCJoaWRkZW4iLCJzaXplIiwiYnV0dG9uIiwib25DbGljayIsImFkZFRvQ2FydCIsInNlbGVjdGVkVmFyaWF0aW9uIiwicmVtb3ZlRnJvbUNhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/produto/[slug].js\n");

/***/ })

});