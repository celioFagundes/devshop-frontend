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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartContext\": function() { return /* binding */ CartContext; },\n/* harmony export */   \"CartProvider\": function() { return /* binding */ CartProvider; },\n/* harmony export */   \"useCart\": function() { return /* binding */ useCart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nfunction _toPrimitive(input, hint) {\n    if (_typeof(input) !== \"object\" || input === null) return input;\n    var prim = input[Symbol.toPrimitive];\n    if (prim !== undefined) {\n        var res = prim.call(input, hint || \"default\");\n        if (_typeof(res) !== \"object\") return res;\n        throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n    }\n    return (hint === \"string\" ? String : Number)(input);\n}\nfunction _toPropertyKey(arg) {\n    var key = _toPrimitive(arg, \"string\");\n    return _typeof(key) === \"symbol\" ? key : String(key);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nvar CartProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), items = ref[0], setItems = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var loadedCart = localStorage.getItem('cart');\n        if (loadedCart) {\n            setItems(JSON.parse(loadedCart));\n        }\n    }, []);\n    var addOne = function(id) {\n        setItems(function(current) {\n            var newCart = _objectSpread({}, current);\n            if (current[id]) {\n                current[id].qtd++;\n            }\n            localStorage.setItem('cart', JSON.stringify(newCart));\n            return newCart;\n        });\n    };\n    var removeOne = function(id) {\n        var variation = items[id];\n        if (variation) {\n            if (variation.qtd > 0) {\n                setItems(function(current) {\n                    var newCart = _objectSpread({}, current);\n                    newCart[id].qtd--;\n                    localStorage.setItem('cart', JSON.stringify(newCart));\n                    if (newCart[id].qtd === 0) {\n                        var etc = newCart[id], newCart2 = _objectWithoutProperties(newCart, [\n                            id\n                        ].map(_toPropertyKey));\n                        localStorage.setItem('cart', JSON.stringify(newCart2));\n                        return newCart2;\n                    }\n                    return newCart;\n                });\n            }\n        }\n    };\n    var addToCart = function(product, selectedVariationSKU, voltage) {\n        var variationId = selectedVariationSKU + voltage;\n        setItems(function(current) {\n            var newCart = _objectSpread({}, current);\n            newCart[variationId] = {\n                id: product.id,\n                name: product.name,\n                slug: product.slug,\n                description: product.description,\n                images: product.images,\n                sizeType: product.sizeType,\n                voltage: voltage !== '' && voltage,\n                variation: selectedVariation,\n                qtd: 1\n            };\n            localStorage.setItem('cart', JSON.stringify(newCart));\n            return newCart;\n        });\n    };\n    var removeFromCart = function(selectedVariationSKU, voltage) {\n        var variationId = selectedVariationSKU + voltage;\n        var variation = items[variationId];\n        if (variation) {\n            if (variation.qtd > 0) {\n                setItems(function(current) {\n                    var etc = current[variationId], newCart2 = _objectWithoutProperties(current, [\n                        variationId\n                    ].map(_toPropertyKey));\n                    localStorage.setItem('cart', JSON.stringify(newCart2));\n                    return newCart2;\n                });\n            }\n        }\n    };\n    var cartSize = Object.keys(items).length;\n    var cartTotal = function() {\n        var total = Object.keys(items).reduce(function(prev, curr) {\n            return prev + items[curr].variation.price * items[curr].qtd;\n        }, 0);\n        return total;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            items: items,\n            addToCart: addToCart,\n            addOne: addOne,\n            removeOne: removeOne,\n            removeFromCart: removeFromCart,\n            cartSize: cartSize,\n            cartTotal: cartTotal()\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Fullstack\\\\devshop\\\\devshop-frontend\\\\site\\\\lib\\\\CartContext.js\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, _this));\n};\n\n_s(CartProvider, \"bZvTV4UWTy+ePeavylPDvbKzupU=\");\n_c = CartProvider;\nvar useCart = function() {\n    _s1();\n    var cart = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n    return cart;\n};\n_s1(useCart, \"QchebOVKze+CH1FRHiU38Fd0/kM=\");\nvar _c;\n$RefreshReg$(_c, \"CartProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztJQUNILENBQUM7SUFDRCxHQUFLLENBQUNhLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxJQUFJLENBQUNoQyxLQUFLLEVBQUVpQyxNQUFNO0lBRTFDLEdBQUssQ0FBQ0MsU0FBUyxHQUFHLFFBQVEsR0FBRixDQUFDO1FBQ3ZCLEdBQUssQ0FBQ0MsS0FBSyxHQUFHSixNQUFNLENBQUNDLElBQUksQ0FBQ2hDLEtBQUssRUFBRW9DLE1BQU0sQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRUMsSUFBSSxFQUFLLENBQUM7WUFDdkQsTUFBTSxDQUFDRCxJQUFJLEdBQUdyQyxLQUFLLENBQUNzQyxJQUFJLEVBQUV2QixTQUFTLENBQUN3QixLQUFLLEdBQUd2QyxLQUFLLENBQUNzQyxJQUFJLEVBQUUzQixHQUFHO1FBQzdELENBQUMsRUFBRSxDQUFDO1FBQ0osTUFBTSxDQUFDd0IsS0FBSztJQUNkLENBQUM7SUFDRCxNQUFNLDZFQUNIdEMsV0FBVyxDQUFDMkMsUUFBUTtRQUNuQkMsS0FBSyxFQUFFLENBQUM7WUFDTnpDLEtBQUssRUFBTEEsS0FBSztZQUNMa0IsU0FBUyxFQUFUQSxTQUFTO1lBQ1RYLE1BQU0sRUFBTkEsTUFBTTtZQUNOTyxTQUFTLEVBQVRBLFNBQVM7WUFDVGUsY0FBYyxFQUFkQSxjQUFjO1lBQ2RDLFFBQVEsRUFBUkEsUUFBUTtZQUNSSSxTQUFTLEVBQUVBLFNBQVM7UUFDdEIsQ0FBQztrQkFFQW5DLFFBQVE7Ozs7OztBQUdmLENBQUM7QUE1Rks7R0FBT0QsWUFBWTtLQUFaQSxZQUFZO0FBOEZsQixHQUFLLENBQUM0QyxPQUFPLEdBQUcsUUFBUSxHQUFGLENBQUM7O0lBQzVCLEdBQUssQ0FBQ0MsSUFBSSxHQUFHaEQsaURBQVUsQ0FBQ0UsV0FBVztJQUNuQyxNQUFNLENBQUM4QyxJQUFJO0FBQ2IsQ0FBQztJQUhZRCxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9DYXJ0Q29udGV4dC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pXHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoe30pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGxvYWRlZENhcnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpXHJcbiAgICBpZiAobG9hZGVkQ2FydCkge1xyXG4gICAgICBzZXRJdGVtcyhKU09OLnBhcnNlKGxvYWRlZENhcnQpKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBhZGRPbmUgPSBpZCA9PiB7XHJcbiAgICBzZXRJdGVtcyhjdXJyZW50ID0+IHtcclxuICAgICAgY29uc3QgbmV3Q2FydCA9IHsgLi4uY3VycmVudCB9XHJcbiAgICAgIGlmIChjdXJyZW50W2lkXSkge1xyXG4gICAgICAgIGN1cnJlbnRbaWRdLnF0ZCsrXHJcbiAgICAgIH1cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShuZXdDYXJ0KSlcclxuICAgICAgcmV0dXJuIG5ld0NhcnRcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IHJlbW92ZU9uZSA9IGlkID0+IHtcclxuICAgIGNvbnN0IHZhcmlhdGlvbiA9IGl0ZW1zW2lkXVxyXG4gICAgaWYgKHZhcmlhdGlvbikge1xyXG4gICAgICBpZiAodmFyaWF0aW9uLnF0ZCA+IDApIHtcclxuICAgICAgICBzZXRJdGVtcyhjdXJyZW50ID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5ld0NhcnQgPSB7IC4uLmN1cnJlbnQgfVxyXG4gICAgICAgICAgbmV3Q2FydFtpZF0ucXRkLS1cclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkobmV3Q2FydCkpXHJcbiAgICAgICAgICBpZiAobmV3Q2FydFtpZF0ucXRkID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgW2lkXTogZXRjLCAuLi5uZXdDYXJ0MiB9ID0gbmV3Q2FydFxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KG5ld0NhcnQyKSlcclxuICAgICAgICAgICAgcmV0dXJuIG5ld0NhcnQyXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbmV3Q2FydFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3QsIHNlbGVjdGVkVmFyaWF0aW9uU0tVLHZvbHRhZ2UpID0+IHtcclxuICAgIGNvbnN0IHZhcmlhdGlvbklkID0gc2VsZWN0ZWRWYXJpYXRpb25TS1UgKyB2b2x0YWdlXHJcbiAgICBzZXRJdGVtcyhjdXJyZW50ID0+IHtcclxuICAgICAgY29uc3QgbmV3Q2FydCA9IHsgLi4uY3VycmVudCB9XHJcbiAgICAgIG5ld0NhcnRbdmFyaWF0aW9uSWRdID0ge1xyXG4gICAgICAgIGlkOiBwcm9kdWN0LmlkLFxyXG4gICAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcclxuICAgICAgICBzbHVnOiBwcm9kdWN0LnNsdWcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgaW1hZ2VzOiBwcm9kdWN0LmltYWdlcyxcclxuICAgICAgICBzaXplVHlwZTogcHJvZHVjdC5zaXplVHlwZSxcclxuICAgICAgICB2b2x0YWdlOiB2b2x0YWdlICE9PSAnJyAmJiB2b2x0YWdlLFxyXG4gICAgICAgIHZhcmlhdGlvbjogc2VsZWN0ZWRWYXJpYXRpb24sXHJcbiAgICAgICAgcXRkOiAxLFxyXG4gICAgICB9XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkobmV3Q2FydCkpXHJcbiAgICAgIHJldHVybiBuZXdDYXJ0XHJcbiAgICB9KVxyXG4gIH1cclxuICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChzZWxlY3RlZFZhcmlhdGlvblNLVSwgdm9sdGFnZSApID0+IHtcclxuICAgIGNvbnN0IHZhcmlhdGlvbklkID1zZWxlY3RlZFZhcmlhdGlvblNLVSArIHZvbHRhZ2VcclxuICAgIGNvbnN0IHZhcmlhdGlvbiA9IGl0ZW1zW3ZhcmlhdGlvbklkXVxyXG4gICAgaWYgKHZhcmlhdGlvbikge1xyXG4gICAgICBpZiAodmFyaWF0aW9uLnF0ZCA+IDApIHtcclxuICAgICAgICBzZXRJdGVtcyhjdXJyZW50ID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgW3ZhcmlhdGlvbklkXTogZXRjLCAuLi5uZXdDYXJ0MiB9ID0gY3VycmVudFxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShuZXdDYXJ0MikpXHJcbiAgICAgICAgICByZXR1cm4gbmV3Q2FydDJcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGNhcnRTaXplID0gT2JqZWN0LmtleXMoaXRlbXMpLmxlbmd0aFxyXG5cclxuICBjb25zdCBjYXJ0VG90YWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0b3RhbCA9IE9iamVjdC5rZXlzKGl0ZW1zKS5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcclxuICAgICAgcmV0dXJuIHByZXYgKyBpdGVtc1tjdXJyXS52YXJpYXRpb24ucHJpY2UgKiBpdGVtc1tjdXJyXS5xdGRcclxuICAgIH0sIDApXHJcbiAgICByZXR1cm4gdG90YWxcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGl0ZW1zLFxyXG4gICAgICAgIGFkZFRvQ2FydCxcclxuICAgICAgICBhZGRPbmUsXHJcbiAgICAgICAgcmVtb3ZlT25lLFxyXG4gICAgICAgIHJlbW92ZUZyb21DYXJ0LFxyXG4gICAgICAgIGNhcnRTaXplLFxyXG4gICAgICAgIGNhcnRUb3RhbDogY2FydFRvdGFsKCksXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ2FydCA9ICgpID0+IHtcclxuICBjb25zdCBjYXJ0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dClcclxuICByZXR1cm4gY2FydFxyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiQ2FydENvbnRleHQiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsIml0ZW1zIiwic2V0SXRlbXMiLCJsb2FkZWRDYXJ0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImFkZE9uZSIsImlkIiwiY3VycmVudCIsIm5ld0NhcnQiLCJxdGQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicmVtb3ZlT25lIiwidmFyaWF0aW9uIiwiZXRjIiwibmV3Q2FydDIiLCJhZGRUb0NhcnQiLCJwcm9kdWN0Iiwic2VsZWN0ZWRWYXJpYXRpb25TS1UiLCJ2b2x0YWdlIiwidmFyaWF0aW9uSWQiLCJuYW1lIiwic2x1ZyIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwic2l6ZVR5cGUiLCJzZWxlY3RlZFZhcmlhdGlvbiIsInJlbW92ZUZyb21DYXJ0IiwiY2FydFNpemUiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiY2FydFRvdGFsIiwidG90YWwiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsInByaWNlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUNhcnQiLCJjYXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/CartContext.js\n");

/***/ })

});