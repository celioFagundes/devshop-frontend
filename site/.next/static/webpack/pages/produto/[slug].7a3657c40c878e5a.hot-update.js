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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_cjs_react_development__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/cjs/react.development */ \"./node_modules/react/cjs/react.development.js\");\n/* harmony import */ var _lib_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/CartContext */ \"./lib/CartContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Products = function(param) {\n    var product = param.product, categories = param.categories;\n    var _this1 = _this;\n    _s();\n    var cart = (0,_lib_CartContext__WEBPACK_IMPORTED_MODULE_4__.useCart)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), colorSelected = ref[0], setColorSelected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), sizeSelected = ref1[0], setSizeSelected = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), availableSizes = ref2[0], setAvailableSizes = ref2[1];\n    var possibleValues1 = _toConsumableArray(new Set(product.variations.map(function(pv) {\n        return pv.color.colorName;\n    })));\n    /*\r\n  useEffect(() => {\r\n    const available = product.variations.filter(\r\n      prod => prod.optionName1 === colorSelected,\r\n    )\r\n    const sizes = available.map(item => item.optionName2)\r\n    const sizesFilter = [...new Set(sizes.map(s => s))]\r\n    setAvailableSizes(sizesFilter)\r\n  }, [colorSelected])*/ /*const selectedVariation = product.variations\r\n    .filter(item => item.optionName1 === colorSelected)\r\n    .filter(item => item.optionName2 === sizeSelected)\r\n\r\n  const selectedPrice =\r\n    selectedVariation && selectedVariation[0] && selectedVariation[0].price\r\n      ? selectedVariation[0].price\r\n      : product.price*/ return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        categories: categories,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container px-5 py-24 mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                    children: JSON.stringify(product, null, 2)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:w-4/5 mx-auto flex flex-wrap\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            alt: \"ecommerce\",\n                            className: \"lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded\",\n                            src: \"https://dummyimage.com/400x400\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-sm title-font text-gray-500 tracking-widest\",\n                                    children: \"BRAND NAME\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-gray-900 text-3xl title-font font-medium mb-1\",\n                                    children: product.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"leading-relaxed\",\n                                    children: product.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex ml-6 items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"mr-3\",\n                                                    children: \"Cor\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                possibleValues1.map(function(item) {\n                                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: \"border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none\",\n                                                        children: item\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                        lineNumber: 90,\n                                                        columnNumber: 19\n                                                    }, _this1);\n                                                })\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 87,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex ml-6 items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"mr-3\",\n                                                    children: \"Tamanho\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"relative\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                            onChange: function(evt) {\n                                                                return setSizeSelected(evt.target.value);\n                                                            },\n                                                            className: \"rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                                value: \"\",\n                                                                hidden: true,\n                                                                children: \"Selecione\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                                lineNumber: 100,\n                                                                columnNumber: 21\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                            lineNumber: 96,\n                                                            columnNumber: 19\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineCaretDown, {\n                                                            size: 12,\n                                                            className: \"absolute right-2 top-4\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                            lineNumber: 105,\n                                                            columnNumber: 19\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 93,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"title-font font-medium text-2xl text-gray-900\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 113,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return cart.addToCart(product, selectedVariation);\n                                            },\n                                            className: \"flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded\",\n                                            children: \"Adicionar ao carrinho\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 116,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return cart.removeFromCart(product);\n                                            },\n                                            className: \"flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded\",\n                                            children: \"Remover do carrinho\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 119,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, _this));\n};\n_s(Products, \"dlbCBvt6mD47gYG1Lru1Bph+EGY=\", false, function() {\n    return [\n        _lib_CartContext__WEBPACK_IMPORTED_MODULE_4__.useCart\n    ];\n});\n_c = Products;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly9fTl9FLy4vcGFnZXMvcHJvZHV0by9bc2x1Z10uanM/MTg2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBncWwgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCB7IEFpT3V0bGluZUNhcmV0RG93biB9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xyXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnLi4vLi4vbGliL2dyYXBocWwnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudCdcclxuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gJy4uLy4uL2xpYi9DYXJ0Q29udGV4dCdcclxuLyo8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWZ1bGwgdy02IGgtNiBmb2N1czpvdXRsaW5lLW5vbmVcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZ3JheS0zMDAgbWwtMSBiZy1ncmF5LTcwMCByb3VuZGVkLWZ1bGwgdy02IGgtNiBmb2N1czpvdXRsaW5lLW5vbmVcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZ3JheS0zMDAgbWwtMSBiZy1pbmRpZ28tNTAwIHJvdW5kZWQtZnVsbCB3LTYgaC02IGZvY3VzOm91dGxpbmUtbm9uZVwiPjwvYnV0dG9uPiovXHJcbmNvbnN0IEdFVF9BTExfQ0FURUdPUklFUyA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICBjYXRlZ29yaWVzOiBnZXRBbGxDYXRlZ29yaWVzIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBzbHVnXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmNvbnN0IEdFVF9QUk9EVUNUX0JZX1NMVUcgPSBncWxgXHJcbiAgcXVlcnkgZ2V0UHJvZHVjdEJ5U0x1Zygkc2x1ZzogU3RyaW5nISkge1xyXG4gICAgcHJvZHVjdDogZ2V0UHJvZHVjdEJ5U2x1ZyhzbHVnOiAkc2x1Zykge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHNsdWdcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgaW1hZ2VzXHJcbiAgICAgIHNpemVUeXBlXHJcbiAgICAgIHZhcmlhdGlvbnMge1xyXG4gICAgICAgIGNvbG9ye1xyXG4gICAgICAgICAgY29sb3JOYW1lXHJcbiAgICAgICAgICBjb2xvckNvZGVcclxuICAgICAgICB9XHJcbiAgICAgICAgc2l6ZVxyXG4gICAgICAgIHNrdVxyXG4gICAgICAgIHByaWNlXHJcbiAgICAgICAgc3RvY2tcclxuICAgICAgICB3ZWlnaHRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5jb25zdCBQcm9kdWN0cyA9ICh7IHByb2R1Y3QsIGNhdGVnb3JpZXMgfSkgPT4ge1xyXG4gIGNvbnN0IGNhcnQgPSB1c2VDYXJ0KClcclxuICBjb25zdCBbY29sb3JTZWxlY3RlZCwgc2V0Q29sb3JTZWxlY3RlZF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbc2l6ZVNlbGVjdGVkLCBzZXRTaXplU2VsZWN0ZWRdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2F2YWlsYWJsZVNpemVzLCBzZXRBdmFpbGFibGVTaXplc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBwb3NzaWJsZVZhbHVlczEgPSBbXHJcbiAgICAuLi5uZXcgU2V0KHByb2R1Y3QudmFyaWF0aW9ucy5tYXAocHYgPT4gcHYuY29sb3IuY29sb3JOYW1lKSksXHJcbiAgXS8qXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGF2YWlsYWJsZSA9IHByb2R1Y3QudmFyaWF0aW9ucy5maWx0ZXIoXHJcbiAgICAgIHByb2QgPT4gcHJvZC5vcHRpb25OYW1lMSA9PT0gY29sb3JTZWxlY3RlZCxcclxuICAgIClcclxuICAgIGNvbnN0IHNpemVzID0gYXZhaWxhYmxlLm1hcChpdGVtID0+IGl0ZW0ub3B0aW9uTmFtZTIpXHJcbiAgICBjb25zdCBzaXplc0ZpbHRlciA9IFsuLi5uZXcgU2V0KHNpemVzLm1hcChzID0+IHMpKV1cclxuICAgIHNldEF2YWlsYWJsZVNpemVzKHNpemVzRmlsdGVyKVxyXG4gIH0sIFtjb2xvclNlbGVjdGVkXSkqL1xyXG5cclxuICAvKmNvbnN0IHNlbGVjdGVkVmFyaWF0aW9uID0gcHJvZHVjdC52YXJpYXRpb25zXHJcbiAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5vcHRpb25OYW1lMSA9PT0gY29sb3JTZWxlY3RlZClcclxuICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLm9wdGlvbk5hbWUyID09PSBzaXplU2VsZWN0ZWQpXHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkUHJpY2UgPVxyXG4gICAgc2VsZWN0ZWRWYXJpYXRpb24gJiYgc2VsZWN0ZWRWYXJpYXRpb25bMF0gJiYgc2VsZWN0ZWRWYXJpYXRpb25bMF0ucHJpY2VcclxuICAgICAgPyBzZWxlY3RlZFZhcmlhdGlvblswXS5wcmljZVxyXG4gICAgICA6IHByb2R1Y3QucHJpY2UqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHB4LTUgcHktMjQgbXgtYXV0byc+XHJcbiAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkocHJvZHVjdCxudWxsLDIpfTwvcHJlPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZzp3LTQvNSBteC1hdXRvIGZsZXggZmxleC13cmFwJz5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgYWx0PSdlY29tbWVyY2UnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbGc6dy0xLzIgdy1mdWxsIGxnOmgtYXV0byBoLTY0IG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHJvdW5kZWQnXHJcbiAgICAgICAgICAgIHNyYz0naHR0cHM6Ly9kdW1teWltYWdlLmNvbS80MDB4NDAwJ1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZzp3LTEvMiB3LWZ1bGwgbGc6cGwtMTAgbGc6cHktNiBtdC02IGxnOm10LTAnPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LXNtIHRpdGxlLWZvbnQgdGV4dC1ncmF5LTUwMCB0cmFja2luZy13aWRlc3QnPlxyXG4gICAgICAgICAgICAgIEJSQU5EIE5BTUVcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTkwMCB0ZXh0LTN4bCB0aXRsZS1mb250IGZvbnQtbWVkaXVtIG1iLTEnPlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbGVhZGluZy1yZWxheGVkJz57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG10LTYgaXRlbXMtY2VudGVyIHBiLTUgYm9yZGVyLWItMiBib3JkZXItZ3JheS0xMDAgbWItNSc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbWwtNiBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtci0zJz5Db3I8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7cG9zc2libGVWYWx1ZXMxLm1hcChpdGVtID0+KFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBtbC0xIGJnLWluZGlnby01MDAgcm91bmRlZC1mdWxsIHctNiBoLTYgZm9jdXM6b3V0bGluZS1ub25lXCI+e2l0ZW19PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBtbC02IGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21yLTMnPlRhbWFuaG88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUnPlxyXG4gICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2dCA9PiBzZXRTaXplU2VsZWN0ZWQoZXZ0LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyb3VuZGVkIGJvcmRlciBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLWdyYXktMzAwIHB5LTIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby0yMDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgdGV4dC1iYXNlIHBsLTMgcHItMTAnXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScnIGhpZGRlbj5cclxuICAgICAgICAgICAgICAgICAgICAgIFNlbGVjaW9uZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZUNhcmV0RG93blxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9ezEyfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgcmlnaHQtMiB0b3AtNCdcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGl0bGUtZm9udCBmb250LW1lZGl1bSB0ZXh0LTJ4bCB0ZXh0LWdyYXktOTAwJz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7KCkgPT5jYXJ0LmFkZFRvQ2FydChwcm9kdWN0LCBzZWxlY3RlZFZhcmlhdGlvbikgfWNsYXNzTmFtZT0nZmxleCBtbC1hdXRvIHRleHQtd2hpdGUgYmctaW5kaWdvLTUwMCBib3JkZXItMCBweS0yIHB4LTYgZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOmJnLWluZGlnby02MDAgcm91bmRlZCc+XHJcbiAgICAgICAgICAgICAgICBBZGljaW9uYXIgYW8gY2FycmluaG9cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7KCkgPT5jYXJ0LnJlbW92ZUZyb21DYXJ0KHByb2R1Y3QpIH1jbGFzc05hbWU9J2ZsZXggbWwtYXV0byB0ZXh0LXdoaXRlIGJnLWluZGlnby01MDAgYm9yZGVyLTAgcHktMiBweC02IGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1pbmRpZ28tNjAwIHJvdW5kZWQnPlxyXG4gICAgICAgICAgICAgICAgUmVtb3ZlciBkbyBjYXJyaW5ob1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHByb2R1Y3QgfSA9IGF3YWl0IGZldGNoZXIoR0VUX1BST0RVQ1RfQllfU0xVRywge1xyXG4gICAgc2x1ZzogY29udGV4dC5xdWVyeS5zbHVnLFxyXG4gIH0pXHJcbiAgY29uc3QgeyBjYXRlZ29yaWVzIH0gPSBhd2FpdCBmZXRjaGVyKEdFVF9BTExfQ0FURUdPUklFUylcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHByb2R1Y3QsXHJcbiAgICAgIGNhdGVnb3JpZXMsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMYXlvdXQiLCJBaU91dGxpbmVDYXJldERvd24iLCJ1c2VFZmZlY3QiLCJ1c2VDYXJ0IiwiUHJvZHVjdHMiLCJwcm9kdWN0IiwiY2F0ZWdvcmllcyIsImNhcnQiLCJjb2xvclNlbGVjdGVkIiwic2V0Q29sb3JTZWxlY3RlZCIsInNpemVTZWxlY3RlZCIsInNldFNpemVTZWxlY3RlZCIsImF2YWlsYWJsZVNpemVzIiwic2V0QXZhaWxhYmxlU2l6ZXMiLCJwb3NzaWJsZVZhbHVlczEiLCJTZXQiLCJ2YXJpYXRpb25zIiwibWFwIiwicHYiLCJjb2xvciIsImNvbG9yTmFtZSIsImRpdiIsImNsYXNzTmFtZSIsInByZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbWciLCJhbHQiLCJzcmMiLCJoMiIsImgxIiwibmFtZSIsInAiLCJkZXNjcmlwdGlvbiIsInNwYW4iLCJpdGVtIiwiYnV0dG9uIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJldnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9wdGlvbiIsImhpZGRlbiIsInNpemUiLCJvbkNsaWNrIiwiYWRkVG9DYXJ0Iiwic2VsZWN0ZWRWYXJpYXRpb24iLCJyZW1vdmVGcm9tQ2FydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/produto/[slug].js\n");

/***/ })

});