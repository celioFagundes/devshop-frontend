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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_cjs_react_development__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/cjs/react.development */ \"./node_modules/react/cjs/react.development.js\");\n/* harmony import */ var _lib_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/CartContext */ \"./lib/CartContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Products = function(param) {\n    var product = param.product, categories = param.categories;\n    var _this1 = _this;\n    _s();\n    var cart = (0,_lib_CartContext__WEBPACK_IMPORTED_MODULE_4__.useCart)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), colorSelected = ref[0], setColorSelected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), sizeSelected = ref1[0], setSizeSelected = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), availableSizes = ref2[0], setAvailableSizes = ref2[1];\n    var filteredColors = product.variations.map(function(item) {\n        return {\n            name: item.color.colorName,\n            code: item.color.colorCode\n        };\n    });\n    var possibleColors = _toConsumableArray(new Set(filteredColors.map(function(pv) {\n        return pv.name + pv.color;\n    })));\n    /*\r\n  useEffect(() => {\r\n    const available = product.variations.filter(\r\n      prod => prod.optionName1 === colorSelected,\r\n    )\r\n    const sizes = available.map(item => item.optionName2)\r\n    const sizesFilter = [...new Set(sizes.map(s => s))]\r\n    setAvailableSizes(sizesFilter)\r\n  }, [colorSelected])*/ /*const selectedVariation = product.variations\r\n    .filter(item => item.optionName1 === colorSelected)\r\n    .filter(item => item.optionName2 === sizeSelected)\r\n\r\n  const selectedPrice =\r\n    selectedVariation && selectedVariation[0] && selectedVariation[0].price\r\n      ? selectedVariation[0].price\r\n      : product.price*/ console.log(possibleColors);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        categories: categories,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container px-5 py-24 mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                    children: JSON.stringify(product, null, 2)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:w-4/5 mx-auto flex flex-wrap\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            alt: \"ecommerce\",\n                            className: \"lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded\",\n                            src: \"https://dummyimage.com/400x400\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-sm title-font text-gray-500 tracking-widest\",\n                                    children: \"BRAND NAME\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-gray-900 text-3xl title-font font-medium mb-1\",\n                                    children: product.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"leading-relaxed\",\n                                    children: product.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex ml-6 items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"mr-3\",\n                                                    children: \"Cor\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                possibleValues1.map(function(item) {\n                                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: \"border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none\",\n                                                        children: item\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                        lineNumber: 97,\n                                                        columnNumber: 19\n                                                    }, _this1);\n                                                })\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 94,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex ml-6 items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"mr-3\",\n                                                    children: \"Tamanho\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"relative\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                            onChange: function(evt) {\n                                                                return setSizeSelected(evt.target.value);\n                                                            },\n                                                            className: \"rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                                value: \"\",\n                                                                hidden: true,\n                                                                children: \"Selecione\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                                lineNumber: 107,\n                                                                columnNumber: 21\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                            lineNumber: 103,\n                                                            columnNumber: 19\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineCaretDown, {\n                                                            size: 12,\n                                                            className: \"absolute right-2 top-4\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                            lineNumber: 112,\n                                                            columnNumber: 19\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                    lineNumber: 102,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 100,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"title-font font-medium text-2xl text-gray-900\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 120,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return cart.addToCart(product, selectedVariation);\n                                            },\n                                            className: \"flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded\",\n                                            children: \"Adicionar ao carrinho\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 123,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return cart.removeFromCart(product);\n                                            },\n                                            className: \"flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded\",\n                                            children: \"Remover do carrinho\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 126,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 119,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, _this));\n};\n_s(Products, \"dlbCBvt6mD47gYG1Lru1Bph+EGY=\", false, function() {\n    return [\n        _lib_CartContext__WEBPACK_IMPORTED_MODULE_4__.useCart\n    ];\n});\n_c = Products;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dEQUFLNUMsTUFBTSxDQUFOQSxJQUFJLENBQUMrQzs7NENBQXlCekIsU0FBUyw4REFBMEc7c0RBQUMsQ0FFMUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2QsQ0FBQztHQTVGS3pCLFFBQVE7O1FBQ0NELE9BQU87OztLQURoQkMsUUFBUTs7QUEwR2QsTUFBTSxTQUFTQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1dG8vW3NsdWddLmpzPzE4NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZ3FsIH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgeyBBaU91dGxpbmVDYXJldERvd24gfSBmcm9tICdyZWFjdC1pY29ucy9haSdcclxuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJy4uLy4uL2xpYi9ncmFwaHFsJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQnXHJcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tICcuLi8uLi9saWIvQ2FydENvbnRleHQnXHJcbi8qPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1mdWxsIHctNiBoLTYgZm9jdXM6b3V0bGluZS1ub25lXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIG1sLTEgYmctZ3JheS03MDAgcm91bmRlZC1mdWxsIHctNiBoLTYgZm9jdXM6b3V0bGluZS1ub25lXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIG1sLTEgYmctaW5kaWdvLTUwMCByb3VuZGVkLWZ1bGwgdy02IGgtNiBmb2N1czpvdXRsaW5lLW5vbmVcIj48L2J1dHRvbj4qL1xyXG5jb25zdCBHRVRfQUxMX0NBVEVHT1JJRVMgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgY2F0ZWdvcmllczogZ2V0QWxsQ2F0ZWdvcmllcyB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgc2x1Z1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5jb25zdCBHRVRfUFJPRFVDVF9CWV9TTFVHID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFByb2R1Y3RCeVNMdWcoJHNsdWc6IFN0cmluZyEpIHtcclxuICAgIHByb2R1Y3Q6IGdldFByb2R1Y3RCeVNsdWcoc2x1ZzogJHNsdWcpIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBzbHVnXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIGltYWdlc1xyXG4gICAgICBzaXplVHlwZVxyXG4gICAgICB2YXJpYXRpb25zIHtcclxuICAgICAgICBjb2xvcntcclxuICAgICAgICAgIGNvbG9yTmFtZVxyXG4gICAgICAgICAgY29sb3JDb2RlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNpemVcclxuICAgICAgICBza3VcclxuICAgICAgICBwcmljZVxyXG4gICAgICAgIHN0b2NrXHJcbiAgICAgICAgd2VpZ2h0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmBcclxuY29uc3QgUHJvZHVjdHMgPSAoeyBwcm9kdWN0LCBjYXRlZ29yaWVzIH0pID0+IHtcclxuICBjb25zdCBjYXJ0ID0gdXNlQ2FydCgpXHJcbiAgY29uc3QgW2NvbG9yU2VsZWN0ZWQsIHNldENvbG9yU2VsZWN0ZWRdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3NpemVTZWxlY3RlZCwgc2V0U2l6ZVNlbGVjdGVkXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFthdmFpbGFibGVTaXplcywgc2V0QXZhaWxhYmxlU2l6ZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgXHJcbiAgY29uc3QgZmlsdGVyZWRDb2xvcnMgPSBwcm9kdWN0LnZhcmlhdGlvbnMubWFwKGl0ZW0gPT57XHJcbiAgICByZXR1cm4geyBcclxuICAgICAgbmFtZSA6IGl0ZW0uY29sb3IuY29sb3JOYW1lLFxyXG4gICAgICBjb2RlIDogaXRlbS5jb2xvci5jb2xvckNvZGVcclxuICAgIH1cclxuICB9KVxyXG4gIGNvbnN0IHBvc3NpYmxlQ29sb3JzID0gWy4uLm5ldyBTZXQoZmlsdGVyZWRDb2xvcnMubWFwKHB2ID0+IHB2Lm5hbWUgKyBwdi5jb2xvciApKV1cclxuICAvKlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBhdmFpbGFibGUgPSBwcm9kdWN0LnZhcmlhdGlvbnMuZmlsdGVyKFxyXG4gICAgICBwcm9kID0+IHByb2Qub3B0aW9uTmFtZTEgPT09IGNvbG9yU2VsZWN0ZWQsXHJcbiAgICApXHJcbiAgICBjb25zdCBzaXplcyA9IGF2YWlsYWJsZS5tYXAoaXRlbSA9PiBpdGVtLm9wdGlvbk5hbWUyKVxyXG4gICAgY29uc3Qgc2l6ZXNGaWx0ZXIgPSBbLi4ubmV3IFNldChzaXplcy5tYXAocyA9PiBzKSldXHJcbiAgICBzZXRBdmFpbGFibGVTaXplcyhzaXplc0ZpbHRlcilcclxuICB9LCBbY29sb3JTZWxlY3RlZF0pKi9cclxuXHJcbiAgLypjb25zdCBzZWxlY3RlZFZhcmlhdGlvbiA9IHByb2R1Y3QudmFyaWF0aW9uc1xyXG4gICAgLmZpbHRlcihpdGVtID0+IGl0ZW0ub3B0aW9uTmFtZTEgPT09IGNvbG9yU2VsZWN0ZWQpXHJcbiAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5vcHRpb25OYW1lMiA9PT0gc2l6ZVNlbGVjdGVkKVxyXG5cclxuICBjb25zdCBzZWxlY3RlZFByaWNlID1cclxuICAgIHNlbGVjdGVkVmFyaWF0aW9uICYmIHNlbGVjdGVkVmFyaWF0aW9uWzBdICYmIHNlbGVjdGVkVmFyaWF0aW9uWzBdLnByaWNlXHJcbiAgICAgID8gc2VsZWN0ZWRWYXJpYXRpb25bMF0ucHJpY2VcclxuICAgICAgOiBwcm9kdWN0LnByaWNlKi9cclxuICAgICAgY29uc29sZS5sb2cocG9zc2libGVDb2xvcnMpXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgcHgtNSBweS0yNCBteC1hdXRvJz5cclxuICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShwcm9kdWN0LG51bGwsMil9PC9wcmU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xnOnctNC81IG14LWF1dG8gZmxleCBmbGV4LXdyYXAnPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBhbHQ9J2Vjb21tZXJjZSdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdsZzp3LTEvMiB3LWZ1bGwgbGc6aC1hdXRvIGgtNjQgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgcm91bmRlZCdcclxuICAgICAgICAgICAgc3JjPSdodHRwczovL2R1bW15aW1hZ2UuY29tLzQwMHg0MDAnXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xnOnctMS8yIHctZnVsbCBsZzpwbC0xMCBsZzpweS02IG10LTYgbGc6bXQtMCc+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtc20gdGl0bGUtZm9udCB0ZXh0LWdyYXktNTAwIHRyYWNraW5nLXdpZGVzdCc+XHJcbiAgICAgICAgICAgICAgQlJBTkQgTkFNRVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LWdyYXktOTAwIHRleHQtM3hsIHRpdGxlLWZvbnQgZm9udC1tZWRpdW0gbWItMSc+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdsZWFkaW5nLXJlbGF4ZWQnPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbXQtNiBpdGVtcy1jZW50ZXIgcGItNSBib3JkZXItYi0yIGJvcmRlci1ncmF5LTEwMCBtYi01Jz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBtbC02IGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21yLTMnPkNvcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHtwb3NzaWJsZVZhbHVlczEubWFwKGl0ZW0gPT4oXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIG1sLTEgYmctaW5kaWdvLTUwMCByb3VuZGVkLWZ1bGwgdy02IGgtNiBmb2N1czpvdXRsaW5lLW5vbmVcIj57aXRlbX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG1sLTYgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbXItMyc+VGFtYW5obzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSc+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZ0ID0+IHNldFNpemVTZWxlY3RlZChldnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3JvdW5kZWQgYm9yZGVyIGFwcGVhcmFuY2Utbm9uZSBib3JkZXItZ3JheS0zMDAgcHktMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTIwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCB0ZXh0LWJhc2UgcGwtMyBwci0xMCdcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JycgaGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2VsZWNpb25lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lQ2FyZXREb3duXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSByaWdodC0yIHRvcC00J1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0aXRsZS1mb250IGZvbnQtbWVkaXVtIHRleHQtMnhsIHRleHQtZ3JheS05MDAnPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHsoKSA9PmNhcnQuYWRkVG9DYXJ0KHByb2R1Y3QsIHNlbGVjdGVkVmFyaWF0aW9uKSB9Y2xhc3NOYW1lPSdmbGV4IG1sLWF1dG8gdGV4dC13aGl0ZSBiZy1pbmRpZ28tNTAwIGJvcmRlci0wIHB5LTIgcHgtNiBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctaW5kaWdvLTYwMCByb3VuZGVkJz5cclxuICAgICAgICAgICAgICAgIEFkaWNpb25hciBhbyBjYXJyaW5ob1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHsoKSA9PmNhcnQucmVtb3ZlRnJvbUNhcnQocHJvZHVjdCkgfWNsYXNzTmFtZT0nZmxleCBtbC1hdXRvIHRleHQtd2hpdGUgYmctaW5kaWdvLTUwMCBib3JkZXItMCBweS0yIHB4LTYgZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOmJnLWluZGlnby02MDAgcm91bmRlZCc+XHJcbiAgICAgICAgICAgICAgICBSZW1vdmVyIGRvIGNhcnJpbmhvXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcHJvZHVjdCB9ID0gYXdhaXQgZmV0Y2hlcihHRVRfUFJPRFVDVF9CWV9TTFVHLCB7XHJcbiAgICBzbHVnOiBjb250ZXh0LnF1ZXJ5LnNsdWcsXHJcbiAgfSlcclxuICBjb25zdCB7IGNhdGVnb3JpZXMgfSA9IGF3YWl0IGZldGNoZXIoR0VUX0FMTF9DQVRFR09SSUVTKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcHJvZHVjdCxcclxuICAgICAgY2F0ZWdvcmllcyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxheW91dCIsIkFpT3V0bGluZUNhcmV0RG93biIsInVzZUVmZmVjdCIsInVzZUNhcnQiLCJQcm9kdWN0cyIsInByb2R1Y3QiLCJjYXRlZ29yaWVzIiwiY2FydCIsImNvbG9yU2VsZWN0ZWQiLCJzZXRDb2xvclNlbGVjdGVkIiwic2l6ZVNlbGVjdGVkIiwic2V0U2l6ZVNlbGVjdGVkIiwiYXZhaWxhYmxlU2l6ZXMiLCJzZXRBdmFpbGFibGVTaXplcyIsImZpbHRlcmVkQ29sb3JzIiwidmFyaWF0aW9ucyIsIm1hcCIsIml0ZW0iLCJuYW1lIiwiY29sb3IiLCJjb2xvck5hbWUiLCJjb2RlIiwiY29sb3JDb2RlIiwicG9zc2libGVDb2xvcnMiLCJTZXQiLCJwdiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJwcmUiLCJKU09OIiwic3RyaW5naWZ5IiwiaW1nIiwiYWx0Iiwic3JjIiwiaDIiLCJoMSIsInAiLCJkZXNjcmlwdGlvbiIsInNwYW4iLCJwb3NzaWJsZVZhbHVlczEiLCJidXR0b24iLCJzZWxlY3QiLCJvbkNoYW5nZSIsImV2dCIsInRhcmdldCIsInZhbHVlIiwib3B0aW9uIiwiaGlkZGVuIiwic2l6ZSIsIm9uQ2xpY2siLCJhZGRUb0NhcnQiLCJzZWxlY3RlZFZhcmlhdGlvbiIsInJlbW92ZUZyb21DYXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/produto/[slug].js\n");

/***/ })

});