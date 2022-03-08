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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_cjs_react_development__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/cjs/react.development */ \"./node_modules/react/cjs/react.development.js\");\n/* harmony import */ var _lib_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/CartContext */ \"./lib/CartContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Products = function(param) {\n    var product = param.product, categories = param.categories;\n    var _this1 = _this;\n    _s();\n    var cart = (0,_lib_CartContext__WEBPACK_IMPORTED_MODULE_4__.useCart)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), colorSelected = ref[0], setColorSelected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), sizeSelected = ref1[0], setSizeSelected = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), availableSizes = ref2[0], setAvailableSizes = ref2[1];\n    var possibleColors = _toConsumableArray(new Set(product.variations.map(function(item) {\n        item.color.name;\n    })));\n    /*\r\n  useEffect(() => {\r\n    const available = product.variations.filter(\r\n      prod => prod.optionName1 === colorSelected,\r\n    )\r\n    const sizes = available.map(item => item.optionName2)\r\n    const sizesFilter = [...new Set(sizes.map(s => s))]\r\n    setAvailableSizes(sizesFilter)\r\n  }, [colorSelected])*/ /*const selectedVariation = product.variations\r\n    .filter(item => item.optionName1 === colorSelected)\r\n    .filter(item => item.optionName2 === sizeSelected)\r\n\r\n  const selectedPrice =\r\n    selectedVariation && selectedVariation[0] && selectedVariation[0].price\r\n      ? selectedVariation[0].price\r\n      : product.price*/ console.log(possibleColors);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        categories: categories,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container px-5 py-24 mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                    children: JSON.stringify(product, null, 2)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:w-4/5 mx-auto flex flex-wrap\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            alt: \"ecommerce\",\n                            className: \"lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded\",\n                            src: \"https://dummyimage.com/400x400\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-sm title-font text-gray-500 tracking-widest\",\n                                    children: \"BRAND NAME\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-gray-900 text-3xl title-font font-medium mb-1\",\n                                    children: product.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"leading-relaxed\",\n                                    children: product.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex ml-6 items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"mr-3\",\n                                                    children: \"Cor\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                possibleColors.map(function(item) {\n                                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: \"border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none\",\n                                                        children: item\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                        lineNumber: 94,\n                                                        columnNumber: 19\n                                                    }, _this1);\n                                                })\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 91,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex ml-6 items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"mr-3\",\n                                                    children: \"Tamanho\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                    lineNumber: 98,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"relative\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                            onChange: function(evt) {\n                                                                return setSizeSelected(evt.target.value);\n                                                            },\n                                                            className: \"rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                                value: \"\",\n                                                                hidden: true,\n                                                                children: \"Selecione\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                                lineNumber: 104,\n                                                                columnNumber: 21\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                            lineNumber: 100,\n                                                            columnNumber: 19\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineCaretDown, {\n                                                            size: 12,\n                                                            className: \"absolute right-2 top-4\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                            lineNumber: 109,\n                                                            columnNumber: 19\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 97,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"title-font font-medium text-2xl text-gray-900\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 117,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return cart.addToCart(product, selectedVariation);\n                                            },\n                                            className: \"flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded\",\n                                            children: \"Adicionar ao carrinho\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 120,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return cart.removeFromCart(product);\n                                            },\n                                            className: \"flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded\",\n                                            children: \"Remover do carrinho\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 123,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 116,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, _this));\n};\n_s(Products, \"dlbCBvt6mD47gYG1Lru1Bph+EGY=\", false, function() {\n    return [\n        _lib_CartContext__WEBPACK_IMPORTED_MODULE_4__.useCart\n    ];\n});\n_c = Products;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cm9kdXRvL1tzbHVnXS5qcz8xODZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGdxbCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IHsgQWlPdXRsaW5lQ2FyZXREb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXHJcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tICcuLi8uLi9saWIvZ3JhcGhxbCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50J1xyXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnLi4vLi4vbGliL0NhcnRDb250ZXh0J1xyXG4vKjxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtZnVsbCB3LTYgaC02IGZvY3VzOm91dGxpbmUtbm9uZVwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBtbC0xIGJnLWdyYXktNzAwIHJvdW5kZWQtZnVsbCB3LTYgaC02IGZvY3VzOm91dGxpbmUtbm9uZVwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBtbC0xIGJnLWluZGlnby01MDAgcm91bmRlZC1mdWxsIHctNiBoLTYgZm9jdXM6b3V0bGluZS1ub25lXCI+PC9idXR0b24+Ki9cclxuY29uc3QgR0VUX0FMTF9DQVRFR09SSUVTID0gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIGNhdGVnb3JpZXM6IGdldEFsbENhdGVnb3JpZXMge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHNsdWdcclxuICAgIH1cclxuICB9XHJcbmBcclxuY29uc3QgR0VUX1BST0RVQ1RfQllfU0xVRyA9IGdxbGBcclxuICBxdWVyeSBnZXRQcm9kdWN0QnlTTHVnKCRzbHVnOiBTdHJpbmchKSB7XHJcbiAgICBwcm9kdWN0OiBnZXRQcm9kdWN0QnlTbHVnKHNsdWc6ICRzbHVnKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgc2x1Z1xyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBpbWFnZXNcclxuICAgICAgc2l6ZVR5cGVcclxuICAgICAgdmFyaWF0aW9ucyB7XHJcbiAgICAgICAgY29sb3J7XHJcbiAgICAgICAgICBjb2xvck5hbWVcclxuICAgICAgICAgIGNvbG9yQ29kZVxyXG4gICAgICAgIH1cclxuICAgICAgICBzaXplXHJcbiAgICAgICAgc2t1XHJcbiAgICAgICAgcHJpY2VcclxuICAgICAgICBzdG9ja1xyXG4gICAgICAgIHdlaWdodFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFByb2R1Y3RzID0gKHsgcHJvZHVjdCwgY2F0ZWdvcmllcyB9KSA9PiB7XHJcbiAgY29uc3QgY2FydCA9IHVzZUNhcnQoKVxyXG4gIGNvbnN0IFtjb2xvclNlbGVjdGVkLCBzZXRDb2xvclNlbGVjdGVkXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtzaXplU2VsZWN0ZWQsIHNldFNpemVTZWxlY3RlZF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbYXZhaWxhYmxlU2l6ZXMsIHNldEF2YWlsYWJsZVNpemVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIFxyXG4gXHJcbiAgY29uc3QgcG9zc2libGVDb2xvcnMgPSBbLi4ubmV3IFNldChwcm9kdWN0LnZhcmlhdGlvbnMubWFwKGl0ZW0gPT57XHJcbiAgICBpdGVtLmNvbG9yLm5hbWVcclxuICB9KSldXHJcbiAgLypcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgYXZhaWxhYmxlID0gcHJvZHVjdC52YXJpYXRpb25zLmZpbHRlcihcclxuICAgICAgcHJvZCA9PiBwcm9kLm9wdGlvbk5hbWUxID09PSBjb2xvclNlbGVjdGVkLFxyXG4gICAgKVxyXG4gICAgY29uc3Qgc2l6ZXMgPSBhdmFpbGFibGUubWFwKGl0ZW0gPT4gaXRlbS5vcHRpb25OYW1lMilcclxuICAgIGNvbnN0IHNpemVzRmlsdGVyID0gWy4uLm5ldyBTZXQoc2l6ZXMubWFwKHMgPT4gcykpXVxyXG4gICAgc2V0QXZhaWxhYmxlU2l6ZXMoc2l6ZXNGaWx0ZXIpXHJcbiAgfSwgW2NvbG9yU2VsZWN0ZWRdKSovXHJcblxyXG4gIC8qY29uc3Qgc2VsZWN0ZWRWYXJpYXRpb24gPSBwcm9kdWN0LnZhcmlhdGlvbnNcclxuICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLm9wdGlvbk5hbWUxID09PSBjb2xvclNlbGVjdGVkKVxyXG4gICAgLmZpbHRlcihpdGVtID0+IGl0ZW0ub3B0aW9uTmFtZTIgPT09IHNpemVTZWxlY3RlZClcclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRQcmljZSA9XHJcbiAgICBzZWxlY3RlZFZhcmlhdGlvbiAmJiBzZWxlY3RlZFZhcmlhdGlvblswXSAmJiBzZWxlY3RlZFZhcmlhdGlvblswXS5wcmljZVxyXG4gICAgICA/IHNlbGVjdGVkVmFyaWF0aW9uWzBdLnByaWNlXHJcbiAgICAgIDogcHJvZHVjdC5wcmljZSovXHJcbiAgICAgIGNvbnNvbGUubG9nKHBvc3NpYmxlQ29sb3JzKVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHB4LTUgcHktMjQgbXgtYXV0byc+XHJcbiAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkocHJvZHVjdCxudWxsLDIpfTwvcHJlPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZzp3LTQvNSBteC1hdXRvIGZsZXggZmxleC13cmFwJz5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgYWx0PSdlY29tbWVyY2UnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbGc6dy0xLzIgdy1mdWxsIGxnOmgtYXV0byBoLTY0IG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHJvdW5kZWQnXHJcbiAgICAgICAgICAgIHNyYz0naHR0cHM6Ly9kdW1teWltYWdlLmNvbS80MDB4NDAwJ1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZzp3LTEvMiB3LWZ1bGwgbGc6cGwtMTAgbGc6cHktNiBtdC02IGxnOm10LTAnPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LXNtIHRpdGxlLWZvbnQgdGV4dC1ncmF5LTUwMCB0cmFja2luZy13aWRlc3QnPlxyXG4gICAgICAgICAgICAgIEJSQU5EIE5BTUVcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTkwMCB0ZXh0LTN4bCB0aXRsZS1mb250IGZvbnQtbWVkaXVtIG1iLTEnPlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbGVhZGluZy1yZWxheGVkJz57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG10LTYgaXRlbXMtY2VudGVyIHBiLTUgYm9yZGVyLWItMiBib3JkZXItZ3JheS0xMDAgbWItNSc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbWwtNiBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtci0zJz5Db3I8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7cG9zc2libGVDb2xvcnMubWFwKGl0ZW0gPT4oXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIG1sLTEgYmctaW5kaWdvLTUwMCByb3VuZGVkLWZ1bGwgdy02IGgtNiBmb2N1czpvdXRsaW5lLW5vbmVcIj57aXRlbX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG1sLTYgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbXItMyc+VGFtYW5obzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSc+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZ0ID0+IHNldFNpemVTZWxlY3RlZChldnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3JvdW5kZWQgYm9yZGVyIGFwcGVhcmFuY2Utbm9uZSBib3JkZXItZ3JheS0zMDAgcHktMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTIwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCB0ZXh0LWJhc2UgcGwtMyBwci0xMCdcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JycgaGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2VsZWNpb25lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lQ2FyZXREb3duXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSByaWdodC0yIHRvcC00J1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0aXRsZS1mb250IGZvbnQtbWVkaXVtIHRleHQtMnhsIHRleHQtZ3JheS05MDAnPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHsoKSA9PmNhcnQuYWRkVG9DYXJ0KHByb2R1Y3QsIHNlbGVjdGVkVmFyaWF0aW9uKSB9Y2xhc3NOYW1lPSdmbGV4IG1sLWF1dG8gdGV4dC13aGl0ZSBiZy1pbmRpZ28tNTAwIGJvcmRlci0wIHB5LTIgcHgtNiBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctaW5kaWdvLTYwMCByb3VuZGVkJz5cclxuICAgICAgICAgICAgICAgIEFkaWNpb25hciBhbyBjYXJyaW5ob1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHsoKSA9PmNhcnQucmVtb3ZlRnJvbUNhcnQocHJvZHVjdCkgfWNsYXNzTmFtZT0nZmxleCBtbC1hdXRvIHRleHQtd2hpdGUgYmctaW5kaWdvLTUwMCBib3JkZXItMCBweS0yIHB4LTYgZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOmJnLWluZGlnby02MDAgcm91bmRlZCc+XHJcbiAgICAgICAgICAgICAgICBSZW1vdmVyIGRvIGNhcnJpbmhvXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcHJvZHVjdCB9ID0gYXdhaXQgZmV0Y2hlcihHRVRfUFJPRFVDVF9CWV9TTFVHLCB7XHJcbiAgICBzbHVnOiBjb250ZXh0LnF1ZXJ5LnNsdWcsXHJcbiAgfSlcclxuICBjb25zdCB7IGNhdGVnb3JpZXMgfSA9IGF3YWl0IGZldGNoZXIoR0VUX0FMTF9DQVRFR09SSUVTKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcHJvZHVjdCxcclxuICAgICAgY2F0ZWdvcmllcyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxheW91dCIsIkFpT3V0bGluZUNhcmV0RG93biIsInVzZUVmZmVjdCIsInVzZUNhcnQiLCJQcm9kdWN0cyIsInByb2R1Y3QiLCJjYXRlZ29yaWVzIiwiY2FydCIsImNvbG9yU2VsZWN0ZWQiLCJzZXRDb2xvclNlbGVjdGVkIiwic2l6ZVNlbGVjdGVkIiwic2V0U2l6ZVNlbGVjdGVkIiwiYXZhaWxhYmxlU2l6ZXMiLCJzZXRBdmFpbGFibGVTaXplcyIsInBvc3NpYmxlQ29sb3JzIiwiU2V0IiwidmFyaWF0aW9ucyIsIm1hcCIsIml0ZW0iLCJjb2xvciIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJlIiwiSlNPTiIsInN0cmluZ2lmeSIsImltZyIsImFsdCIsInNyYyIsImgyIiwiaDEiLCJwIiwiZGVzY3JpcHRpb24iLCJzcGFuIiwiYnV0dG9uIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJldnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9wdGlvbiIsImhpZGRlbiIsInNpemUiLCJvbkNsaWNrIiwiYWRkVG9DYXJ0Iiwic2VsZWN0ZWRWYXJpYXRpb24iLCJyZW1vdmVGcm9tQ2FydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/produto/[slug].js\n");

/***/ })

});