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

/***/ "./components/SlickCarousel/SlickCarousel.js":
/*!***************************************************!*\
  !*** ./components/SlickCarousel/SlickCarousel.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AsNavFor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.css */ \"./components/SlickCarousel/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar AsNavFor = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(AsNavFor, Component1);\n    var _super = _createSuper(AsNavFor);\n    function AsNavFor(props) {\n        _classCallCheck(this, AsNavFor);\n        var _this;\n        _this = _super.call(this, props);\n        _defineProperty(_assertThisInitialized(_this), \"openLightBox\", function() {\n            if (_this.props.width > 650) {\n                _this.setState({\n                    lightBoxOpen: true\n                });\n            }\n        });\n        _this.state = {\n            nav1: null,\n            nav2: null,\n            imageIndex: 0,\n            lightBoxOpen: false,\n            images: []\n        };\n        return _this;\n    }\n    _createClass(AsNavFor, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                this.setState({\n                    nav1: this.slider1,\n                    nav2: this.slider2,\n                    imageIndex: 0,\n                    images: this.props.images\n                });\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                var settings = {\n                    responsive: [\n                        {\n                            breakpoint: 970,\n                            settings: {\n                                centerMode: true\n                            }\n                        },\n                        {\n                            breakpoint: 650,\n                            settings: {\n                                centerMode: false,\n                                arrows: true\n                            }\n                        }, \n                    ]\n                };\n                var settings2 = {\n                    responsive: [\n                        {\n                            breakpoint: 970,\n                            settings: {\n                                vertical: true\n                            }\n                        }, \n                    ]\n                };\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                            children: JSON.stringify(this.state.images, null, 2)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\components\\\\SlickCarousel\\\\SlickCarousel.js\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            asNavFor: this.state.nav2,\n                            ref: function(slider) {\n                                return _this.slider1 = slider;\n                            },\n                            fade: \"false\",\n                            lazyLoad: true,\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().topSlider),\n                            slidesToShow: 1,\n                            arrows: false,\n                            children: this.state.images.map(function(image, index) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: image,\n                                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),\n                                        alt: \"product\",\n                                        onClick: function() {\n                                            return _this.openLightBox();\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\components\\\\SlickCarousel\\\\SlickCarousel.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, index, false, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\components\\\\SlickCarousel\\\\SlickCarousel.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\components\\\\SlickCarousel\\\\SlickCarousel.js\",\n                            lineNumber: 66,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            asNavFor: this.state.nav1,\n                            ref: function(slider) {\n                                return _this.slider2 = slider;\n                            },\n                            slidesToShow: 4,\n                            focusOnSelect: true,\n                            infinite: true,\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().bottomSlider),\n                            arrows: false,\n                            beforeChange: function(current, next) {\n                                _this.setState({\n                                    imageIndex: next\n                                });\n                            },\n                            children: this.state.images.map(function(image, index) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\".concat(index === _this.state.imageIndex && (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().imgBox)),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: image,\n                                            alt: \"product\",\n                                            className: \"\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().image), \" \").concat(index === _this.state.imageIndex && (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().active))\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\components\\\\SlickCarousel\\\\SlickCarousel.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\components\\\\SlickCarousel\\\\SlickCarousel.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, index, false, {\n                                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\components\\\\SlickCarousel\\\\SlickCarousel.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\components\\\\SlickCarousel\\\\SlickCarousel.js\",\n                            lineNumber: 86,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\components\\\\SlickCarousel\\\\SlickCarousel.js\",\n                    lineNumber: 64,\n                    columnNumber: 7\n                }, this));\n            }\n        }\n    ]);\n    return AsNavFor;\n} /*{this.state.lightBoxOpen && (\r\n          <CarouselLightBox\r\n            closeLightBox={() =>\r\n              this.setState({\r\n                lightBoxOpen: false,\r\n              })\r\n            }\r\n          />\r\n        )}*/ (react__WEBPACK_IMPORTED_MODULE_1__.Component);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NsaWNrQ2Fyb3VzZWwvU2xpY2tDYXJvdXNlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1I7QUFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRW5CSSxRQUFRLGlCQUFkLFFBQVE7Ozs7YUFBRkEsUUFBUSxDQUNmQyxLQUFLOzs7a0NBQ1RBLEtBQUs7dURBV2JDLENBQVksZUFBRyxRQUNqQixHQURzQixDQUFDO1lBQ25CLEVBQUUsUUFBTUQsS0FBSyxDQUFDRSxLQUFLLEdBQUcsR0FBRyxFQUFDLENBQUM7c0JBQ3BCQyxRQUFRLENBQUMsQ0FBQztvQkFDYkMsWUFBWSxFQUFHLElBQUk7Z0JBQ3JCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztjQWhCTUMsS0FBSyxHQUFHLENBQUM7WUFDWkMsSUFBSSxFQUFFLElBQUk7WUFDVkMsSUFBSSxFQUFFLElBQUk7WUFDVkMsVUFBVSxFQUFFLENBQUM7WUFDYkosWUFBWSxFQUFFLEtBQUs7WUFDbkJLLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFFWCxDQUFDOzs7OztZQVVIQyxHQUFpQixFQUFqQkEsQ0FBaUI7bUJBQWpCQSxRQUFRLENBQVJBLGlCQUFpQixHQUFHLENBQUM7Z0JBQ25CLElBQUksQ0FBQ1AsUUFBUSxDQUFDLENBQUM7b0JBQ2JHLElBQUksRUFBRSxJQUFJLENBQUNLLE9BQU87b0JBQ2xCSixJQUFJLEVBQUUsSUFBSSxDQUFDSyxPQUFPO29CQUNsQkosVUFBVSxFQUFFLENBQUM7b0JBQ2JDLE1BQU0sRUFBRSxJQUFJLENBQUNULEtBQUssQ0FBQ1MsTUFBTTtnQkFDM0IsQ0FBQztZQUNILENBQUM7OztZQUVESSxHQUFNLEVBQU5BLENBQU07bUJBQU5BLFFBQVEsQ0FBUkEsTUFBTSxHQUFHLENBQUM7O2dCQUNSLEdBQUss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SUFBbUQsT0FBakRxQyxLQUFLLFdBQVU5QixLQUFLLENBQUNHLFVBQVUsSUFBSVYsa0VBQWE7Ozs7Ozs7Ozs7O21DQUwxRXFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY3pCLENBQUM7Ozs7Q0FFSCxDQVFZO0FBeEhaLE1BQU0sR0FBZXBDLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlja0Nhcm91c2VsL1NsaWNrQ2Fyb3VzZWwuanM/OTc5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzTmF2Rm9yIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYXYxOiBudWxsLFxyXG4gICAgICBuYXYyOiBudWxsLFxyXG4gICAgICBpbWFnZUluZGV4OiAwLFxyXG4gICAgICBsaWdodEJveE9wZW46IGZhbHNlLFxyXG4gICAgICBpbWFnZXM6W11cclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuTGlnaHRCb3ggPSAoKSA9PntcclxuICAgIGlmKHRoaXMucHJvcHMud2lkdGggPiA2NTApe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBsaWdodEJveE9wZW4gOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG5hdjE6IHRoaXMuc2xpZGVyMSxcclxuICAgICAgbmF2MjogdGhpcy5zbGlkZXIyLFxyXG4gICAgICBpbWFnZUluZGV4OiAwLFxyXG4gICAgICBpbWFnZXM6IHRoaXMucHJvcHMuaW1hZ2VzXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA5NzAsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDY1MCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhcnJvd3M6dHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH1cclxuICAgIGNvbnN0IHNldHRpbmdzMiA9IHtcclxuICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDk3MCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5pbWFnZXMsbnVsbCwyKX08L3ByZT5cclxuICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICBhc05hdkZvcj17dGhpcy5zdGF0ZS5uYXYyfVxyXG4gICAgICAgICAgcmVmPXtzbGlkZXIgPT4gKHRoaXMuc2xpZGVyMSA9IHNsaWRlcil9XHJcbiAgICAgICAgICBmYWRlPSdmYWxzZSdcclxuICAgICAgICAgIGxhenlMb2FkPXt0cnVlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudG9wU2xpZGVyfVxyXG4gICAgICAgICAgc2xpZGVzVG9TaG93PXsxfVxyXG4gICAgICAgICAgYXJyb3dzID0ge2ZhbHNlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsgdGhpcy5zdGF0ZS5pbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBhbHQgPSAncHJvZHVjdCdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB0aGlzLm9wZW5MaWdodEJveCgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgYXNOYXZGb3I9e3RoaXMuc3RhdGUubmF2MX1cclxuICAgICAgICAgIHJlZj17c2xpZGVyID0+ICh0aGlzLnNsaWRlcjIgPSBzbGlkZXIpfVxyXG4gICAgICAgICAgc2xpZGVzVG9TaG93PXs0fVxyXG4gICAgICAgICAgZm9jdXNPblNlbGVjdD17dHJ1ZX1cclxuICAgICAgICAgIGluZmluaXRlID0ge3RydWV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b21TbGlkZXJ9XHJcbiAgICAgICAgICBhcnJvd3MgPSB7ZmFsc2V9XHJcbiAgICAgICAgICBiZWZvcmVDaGFuZ2U9eyhjdXJyZW50LCBuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZUluZGV4OiBuZXh0IH0pXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7IHRoaXMuc3RhdGUuaW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2luZGV4ID09PSB0aGlzLnN0YXRlLmltYWdlSW5kZXggJiYgc3R5bGVzLmltZ0JveH1gfT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgYWx0PSdwcm9kdWN0J1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbWFnZX0gJHtpbmRleCA9PT0gdGhpcy5zdGF0ZS5pbWFnZUluZGV4ICYmIHN0eWxlcy5hY3RpdmV9YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4vKnt0aGlzLnN0YXRlLmxpZ2h0Qm94T3BlbiAmJiAoXHJcbiAgICAgICAgICA8Q2Fyb3VzZWxMaWdodEJveFxyXG4gICAgICAgICAgICBjbG9zZUxpZ2h0Qm94PXsoKSA9PlxyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbGlnaHRCb3hPcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9Ki8iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJTbGlkZXIiLCJzdHlsZXMiLCJBc05hdkZvciIsInByb3BzIiwib3BlbkxpZ2h0Qm94Iiwid2lkdGgiLCJzZXRTdGF0ZSIsImxpZ2h0Qm94T3BlbiIsInN0YXRlIiwibmF2MSIsIm5hdjIiLCJpbWFnZUluZGV4IiwiaW1hZ2VzIiwiY29tcG9uZW50RGlkTW91bnQiLCJzbGlkZXIxIiwic2xpZGVyMiIsInJlbmRlciIsInNldHRpbmdzIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJjZW50ZXJNb2RlIiwiYXJyb3dzIiwic2V0dGluZ3MyIiwidmVydGljYWwiLCJkaXYiLCJjbGFzc05hbWUiLCJ3cmFwcGVyIiwicHJlIiwiSlNPTiIsInN0cmluZ2lmeSIsImFzTmF2Rm9yIiwicmVmIiwic2xpZGVyIiwiZmFkZSIsImxhenlMb2FkIiwidG9wU2xpZGVyIiwic2xpZGVzVG9TaG93IiwibWFwIiwiaW5kZXgiLCJpbWFnZSIsImltZyIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJmb2N1c09uU2VsZWN0IiwiaW5maW5pdGUiLCJib3R0b21TbGlkZXIiLCJiZWZvcmVDaGFuZ2UiLCJjdXJyZW50IiwibmV4dCIsImltZ0JveCIsImFjdGl2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SlickCarousel/SlickCarousel.js\n");

/***/ })

});