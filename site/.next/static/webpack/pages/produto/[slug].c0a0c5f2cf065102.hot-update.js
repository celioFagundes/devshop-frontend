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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_cjs_react_development__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/cjs/react.development */ \"./node_modules/react/cjs/react.development.js\");\n/* harmony import */ var _lib_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/CartContext */ \"./lib/CartContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Products = function(param) {\n    var product = param.product, categories = param.categories;\n    var _this1 = _this;\n    _s();\n    var cart = (0,_lib_CartContext__WEBPACK_IMPORTED_MODULE_4__.useCart)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), colorSelected = ref[0], setColorSelected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), sizeSelected = ref1[0], setSizeSelected = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), availableSizes = ref2[0], setAvailableSizes = ref2[1];\n    //const possibleColors = [...new Set(product.variations.map(item => item.color.colorName))]\n    var possibleColors = product.variations.reduce(prev, function(curr) {\n        return _defineProperty({}, curr.color.colorName, {\n            name: curr.color.colorName,\n            code: curr.color.colorCode\n        });\n    }, {});\n    /*\r\n  useEffect(() => {\r\n    const available = product.variations.filter(\r\n      prod => prod.optionName1 === colorSelected,\r\n    )\r\n    const sizes = available.map(item => item.optionName2)\r\n    const sizesFilter = [...new Set(sizes.map(s => s))]\r\n    setAvailableSizes(sizesFilter)\r\n  }, [colorSelected])*/ /*const selectedVariation = product.variations\r\n    .filter(item => item.optionName1 === colorSelected)\r\n    .filter(item => item.optionName2 === sizeSelected)\r\n\r\n  const selectedPrice =\r\n    selectedVariation && selectedVariation[0] && selectedVariation[0].price\r\n      ? selectedVariation[0].price\r\n      : product.price*/ console.log(possibleColors);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        categories: categories,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container px-5 py-24 mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                    children: JSON.stringify(product, null, 2)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:w-4/5 mx-auto flex flex-wrap\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            alt: \"ecommerce\",\n                            className: \"lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded\",\n                            src: \"https://dummyimage.com/400x400\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-sm title-font text-gray-500 tracking-widest\",\n                                    children: \"BRAND NAME\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-gray-900 text-3xl title-font font-medium mb-1\",\n                                    children: product.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"leading-relaxed\",\n                                    children: product.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex ml-6 items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"mr-3\",\n                                                    children: \"Cor\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                possibleColors.map(function(item) {\n                                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: \"border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none\",\n                                                        children: item\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                        lineNumber: 99,\n                                                        columnNumber: 19\n                                                    }, _this1);\n                                                })\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 96,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex ml-6 items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"mr-3\",\n                                                    children: \"Tamanho\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"relative\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                            onChange: function(evt) {\n                                                                return setSizeSelected(evt.target.value);\n                                                            },\n                                                            className: \"rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                                value: \"\",\n                                                                hidden: true,\n                                                                children: \"Selecione\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                                lineNumber: 109,\n                                                                columnNumber: 21\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                            lineNumber: 105,\n                                                            columnNumber: 19\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineCaretDown, {\n                                                            size: 12,\n                                                            className: \"absolute right-2 top-4\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                            lineNumber: 114,\n                                                            columnNumber: 19\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 102,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"title-font font-medium text-2xl text-gray-900\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 122,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return cart.addToCart(product, selectedVariation);\n                                            },\n                                            className: \"flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded\",\n                                            children: \"Adicionar ao carrinho\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 125,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return cart.removeFromCart(product);\n                                            },\n                                            className: \"flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded\",\n                                            children: \"Remover do carrinho\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                            lineNumber: 128,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                                    lineNumber: 121,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\pages\\\\produto\\\\[slug].js\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, _this));\n};\n_s(Products, \"dlbCBvt6mD47gYG1Lru1Bph+EGY=\", false, function() {\n    return [\n        _lib_CartContext__WEBPACK_IMPORTED_MODULE_4__.useCart\n    ];\n});\n_c = Products;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU9kLENBQUM7R0E5Rkt2QixRQUFROztRQUNDRCxPQUFPOzs7S0FEaEJDLFFBQVE7O0FBNEdkLE1BQU0sU0FBU0EsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdXRvL1tzbHVnXS5qcz8xODZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGdxbCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IHsgQWlPdXRsaW5lQ2FyZXREb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXHJcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tICcuLi8uLi9saWIvZ3JhcGhxbCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50J1xyXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnLi4vLi4vbGliL0NhcnRDb250ZXh0J1xyXG4vKjxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtZnVsbCB3LTYgaC02IGZvY3VzOm91dGxpbmUtbm9uZVwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBtbC0xIGJnLWdyYXktNzAwIHJvdW5kZWQtZnVsbCB3LTYgaC02IGZvY3VzOm91dGxpbmUtbm9uZVwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBtbC0xIGJnLWluZGlnby01MDAgcm91bmRlZC1mdWxsIHctNiBoLTYgZm9jdXM6b3V0bGluZS1ub25lXCI+PC9idXR0b24+Ki9cclxuY29uc3QgR0VUX0FMTF9DQVRFR09SSUVTID0gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIGNhdGVnb3JpZXM6IGdldEFsbENhdGVnb3JpZXMge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHNsdWdcclxuICAgIH1cclxuICB9XHJcbmBcclxuY29uc3QgR0VUX1BST0RVQ1RfQllfU0xVRyA9IGdxbGBcclxuICBxdWVyeSBnZXRQcm9kdWN0QnlTTHVnKCRzbHVnOiBTdHJpbmchKSB7XHJcbiAgICBwcm9kdWN0OiBnZXRQcm9kdWN0QnlTbHVnKHNsdWc6ICRzbHVnKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgc2x1Z1xyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBpbWFnZXNcclxuICAgICAgc2l6ZVR5cGVcclxuICAgICAgdmFyaWF0aW9ucyB7XHJcbiAgICAgICAgY29sb3J7XHJcbiAgICAgICAgICBjb2xvck5hbWVcclxuICAgICAgICAgIGNvbG9yQ29kZVxyXG4gICAgICAgIH1cclxuICAgICAgICBzaXplXHJcbiAgICAgICAgc2t1XHJcbiAgICAgICAgcHJpY2VcclxuICAgICAgICBzdG9ja1xyXG4gICAgICAgIHdlaWdodFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFByb2R1Y3RzID0gKHsgcHJvZHVjdCwgY2F0ZWdvcmllcyB9KSA9PiB7XHJcbiAgY29uc3QgY2FydCA9IHVzZUNhcnQoKVxyXG4gIGNvbnN0IFtjb2xvclNlbGVjdGVkLCBzZXRDb2xvclNlbGVjdGVkXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtzaXplU2VsZWN0ZWQsIHNldFNpemVTZWxlY3RlZF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbYXZhaWxhYmxlU2l6ZXMsIHNldEF2YWlsYWJsZVNpemVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIFxyXG4gXHJcbiAgLy9jb25zdCBwb3NzaWJsZUNvbG9ycyA9IFsuLi5uZXcgU2V0KHByb2R1Y3QudmFyaWF0aW9ucy5tYXAoaXRlbSA9PiBpdGVtLmNvbG9yLmNvbG9yTmFtZSkpXVxyXG4gIGNvbnN0IHBvc3NpYmxlQ29sb3JzID0gcHJvZHVjdC52YXJpYXRpb25zLnJlZHVjZShwcmV2LGN1cnIgPT4oXHJcbiAgICAgIHtcclxuICAgICAgW2N1cnIuY29sb3IuY29sb3JOYW1lXToge1xyXG4gICAgICAgIG5hbWU6IGN1cnIuY29sb3IuY29sb3JOYW1lLFxyXG4gICAgICAgIGNvZGUgOiBjdXJyLmNvbG9yLmNvbG9yQ29kZSxcclxuICAgICAgfX1cclxuICApLHt9KVxyXG4gIC8qXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGF2YWlsYWJsZSA9IHByb2R1Y3QudmFyaWF0aW9ucy5maWx0ZXIoXHJcbiAgICAgIHByb2QgPT4gcHJvZC5vcHRpb25OYW1lMSA9PT0gY29sb3JTZWxlY3RlZCxcclxuICAgIClcclxuICAgIGNvbnN0IHNpemVzID0gYXZhaWxhYmxlLm1hcChpdGVtID0+IGl0ZW0ub3B0aW9uTmFtZTIpXHJcbiAgICBjb25zdCBzaXplc0ZpbHRlciA9IFsuLi5uZXcgU2V0KHNpemVzLm1hcChzID0+IHMpKV1cclxuICAgIHNldEF2YWlsYWJsZVNpemVzKHNpemVzRmlsdGVyKVxyXG4gIH0sIFtjb2xvclNlbGVjdGVkXSkqL1xyXG5cclxuICAvKmNvbnN0IHNlbGVjdGVkVmFyaWF0aW9uID0gcHJvZHVjdC52YXJpYXRpb25zXHJcbiAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5vcHRpb25OYW1lMSA9PT0gY29sb3JTZWxlY3RlZClcclxuICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLm9wdGlvbk5hbWUyID09PSBzaXplU2VsZWN0ZWQpXHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkUHJpY2UgPVxyXG4gICAgc2VsZWN0ZWRWYXJpYXRpb24gJiYgc2VsZWN0ZWRWYXJpYXRpb25bMF0gJiYgc2VsZWN0ZWRWYXJpYXRpb25bMF0ucHJpY2VcclxuICAgICAgPyBzZWxlY3RlZFZhcmlhdGlvblswXS5wcmljZVxyXG4gICAgICA6IHByb2R1Y3QucHJpY2UqL1xyXG4gICAgICBjb25zb2xlLmxvZyhwb3NzaWJsZUNvbG9ycylcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBweC01IHB5LTI0IG14LWF1dG8nPlxyXG4gICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHByb2R1Y3QsbnVsbCwyKX08L3ByZT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGc6dy00LzUgbXgtYXV0byBmbGV4IGZsZXgtd3JhcCc+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGFsdD0nZWNvbW1lcmNlJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2xnOnctMS8yIHctZnVsbCBsZzpoLWF1dG8gaC02NCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciByb3VuZGVkJ1xyXG4gICAgICAgICAgICBzcmM9J2h0dHBzOi8vZHVtbXlpbWFnZS5jb20vNDAweDQwMCdcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGc6dy0xLzIgdy1mdWxsIGxnOnBsLTEwIGxnOnB5LTYgbXQtNiBsZzptdC0wJz5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1zbSB0aXRsZS1mb250IHRleHQtZ3JheS01MDAgdHJhY2tpbmctd2lkZXN0Jz5cclxuICAgICAgICAgICAgICBCUkFORCBOQU1FXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtZ3JheS05MDAgdGV4dC0zeGwgdGl0bGUtZm9udCBmb250LW1lZGl1bSBtYi0xJz5cclxuICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2xlYWRpbmctcmVsYXhlZCc+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBtdC02IGl0ZW1zLWNlbnRlciBwYi01IGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMTAwIG1iLTUnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG1sLTYgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbXItMyc+Q29yPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge3Bvc3NpYmxlQ29sb3JzLm1hcChpdGVtID0+KFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBtbC0xIGJnLWluZGlnby01MDAgcm91bmRlZC1mdWxsIHctNiBoLTYgZm9jdXM6b3V0bGluZS1ub25lXCI+e2l0ZW19PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBtbC02IGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21yLTMnPlRhbWFuaG88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUnPlxyXG4gICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2dCA9PiBzZXRTaXplU2VsZWN0ZWQoZXZ0LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyb3VuZGVkIGJvcmRlciBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLWdyYXktMzAwIHB5LTIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby0yMDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgdGV4dC1iYXNlIHBsLTMgcHItMTAnXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScnIGhpZGRlbj5cclxuICAgICAgICAgICAgICAgICAgICAgIFNlbGVjaW9uZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZUNhcmV0RG93blxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9ezEyfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgcmlnaHQtMiB0b3AtNCdcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGl0bGUtZm9udCBmb250LW1lZGl1bSB0ZXh0LTJ4bCB0ZXh0LWdyYXktOTAwJz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7KCkgPT5jYXJ0LmFkZFRvQ2FydChwcm9kdWN0LCBzZWxlY3RlZFZhcmlhdGlvbikgfWNsYXNzTmFtZT0nZmxleCBtbC1hdXRvIHRleHQtd2hpdGUgYmctaW5kaWdvLTUwMCBib3JkZXItMCBweS0yIHB4LTYgZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOmJnLWluZGlnby02MDAgcm91bmRlZCc+XHJcbiAgICAgICAgICAgICAgICBBZGljaW9uYXIgYW8gY2FycmluaG9cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7KCkgPT5jYXJ0LnJlbW92ZUZyb21DYXJ0KHByb2R1Y3QpIH1jbGFzc05hbWU9J2ZsZXggbWwtYXV0byB0ZXh0LXdoaXRlIGJnLWluZGlnby01MDAgYm9yZGVyLTAgcHktMiBweC02IGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1pbmRpZ28tNjAwIHJvdW5kZWQnPlxyXG4gICAgICAgICAgICAgICAgUmVtb3ZlciBkbyBjYXJyaW5ob1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHByb2R1Y3QgfSA9IGF3YWl0IGZldGNoZXIoR0VUX1BST0RVQ1RfQllfU0xVRywge1xyXG4gICAgc2x1ZzogY29udGV4dC5xdWVyeS5zbHVnLFxyXG4gIH0pXHJcbiAgY29uc3QgeyBjYXRlZ29yaWVzIH0gPSBhd2FpdCBmZXRjaGVyKEdFVF9BTExfQ0FURUdPUklFUylcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHByb2R1Y3QsXHJcbiAgICAgIGNhdGVnb3JpZXMsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMYXlvdXQiLCJBaU91dGxpbmVDYXJldERvd24iLCJ1c2VFZmZlY3QiLCJ1c2VDYXJ0IiwiUHJvZHVjdHMiLCJwcm9kdWN0IiwiY2F0ZWdvcmllcyIsImNhcnQiLCJjb2xvclNlbGVjdGVkIiwic2V0Q29sb3JTZWxlY3RlZCIsInNpemVTZWxlY3RlZCIsInNldFNpemVTZWxlY3RlZCIsImF2YWlsYWJsZVNpemVzIiwic2V0QXZhaWxhYmxlU2l6ZXMiLCJwb3NzaWJsZUNvbG9ycyIsInZhcmlhdGlvbnMiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsImNvbG9yIiwiY29sb3JOYW1lIiwibmFtZSIsImNvZGUiLCJjb2xvckNvZGUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJlIiwiSlNPTiIsInN0cmluZ2lmeSIsImltZyIsImFsdCIsInNyYyIsImgyIiwiaDEiLCJwIiwiZGVzY3JpcHRpb24iLCJzcGFuIiwibWFwIiwiaXRlbSIsImJ1dHRvbiIsInNlbGVjdCIsIm9uQ2hhbmdlIiwiZXZ0IiwidGFyZ2V0IiwidmFsdWUiLCJvcHRpb24iLCJoaWRkZW4iLCJzaXplIiwib25DbGljayIsImFkZFRvQ2FydCIsInNlbGVjdGVkVmFyaWF0aW9uIiwicmVtb3ZlRnJvbUNhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/produto/[slug].js\n");

/***/ })

});